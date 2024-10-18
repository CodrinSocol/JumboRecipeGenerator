"use server"

import {NextRequest, NextResponse} from "next/server";
import cors, {runMiddleware} from "../../corsMiddelware";

export async function POST(req: NextRequest, res: NextResponse) {
    const ingredientList =( await req.json()).ingredientList;

    await runMiddleware(req, res, cors);

    const products = await getIngredients(ingredientList);
    return NextResponse.json(products);
}

async function getIngredients(ingredientList: string[]) {

    const anonymousAccessToken = await fetch('https://api.ah.nl/mobile-auth/v1/auth/token/anonymous', {
        method: "POST",
        headers: headers,
        body: JSON.stringify({"clientId": "appie"})
    })
    const token = await anonymousAccessToken.json()

    const products: JumboProduct[] = []
    for (const ingredient of ingredientList) {

        const res = await fetch(`https://api.ah.nl/mobile-services/product/search/v2?sortOn=RELEVANCE&page=0&size=10&query=${ingredient}`,{
            method: "GET",
            headers: {
                ...headers,
                "Authorization": `Bearer ${token.access_token}`
            }})

        const data = await res.json()
        const filteredAHProducts = data.products.filter((product: any) => product.brand !== "AH" && product.brand !== "AH Biologisch")
        if(filteredAHProducts.length === 0) continue
        const product: JumboProduct = {
            brand: filteredAHProducts[0].brand,
            price: filteredAHProducts[0].priceBeforeBonus,
            image: filteredAHProducts[0].images[0].url,
            title: filteredAHProducts[0].title
        }
        products.push(product)
    }

    return products
}

const headers = {
    'Host': 'api.ah.nl',
    'x-dynatrace': 'MT_3_4_772337796_1_fae7f753-3422-4a18-83c1-b8e8d21caace_0_1589_109',
    'x-application': 'AHWEBSHOP',
    'user-agent': 'Appie/8.8.2 Model/phone Android/7.0-API24',
    'content-type': 'application/json; charset=UTF-8',
}
export interface JumboProduct {
    brand: string;
    price: number;
    image: string;
    title: string;
}