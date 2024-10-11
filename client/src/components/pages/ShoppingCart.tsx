import {MdOutlineShoppingBasket} from "react-icons/md";

export function ShoppingCart() {
    return (
        <div className="w-full h-full flex flex-col gap-4 p-4">
            <div className={"w-full flex flex-row items-center gap-4 "}>
                <MdOutlineShoppingBasket className={"h-10 w-10 text-black"}/>
                <div className={"h-full flex flex-row items-end justify-end"}>
                    Basket
                </div>
            </div>

            <div>
                <input type="text" placeholder={"Zoek een product"} className={"input input-primary input-ghost input-sm"}/>
            </div>
            <div>
                <span className={""}>Populaire listjes</span>
                <div className={"flex flex-row"}>
                    <div className={"flex flex-col gap-2"}>
                    </div>

                </div>
            </div>
        </div>
    )
    }