import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import {JumboProduct} from "../../../processing/AHApi";

interface ShoppingCartProps {
    jumboProducts: JumboProduct[];
}
export function ShoppingCart({ jumboProducts }: ShoppingCartProps) {

    return (
        <div className="w-full h-full flex flex-col gap-6 p-4">
            <div className="w-full flex flex-row items-center gap-4">
                <MdOutlineShoppingBasket className="h-10 w-10 text-black" />
                <div className="h-full flex flex-row items-end justify-end text-black">Mandje</div>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Zoek een product"
                    className="input input-primary input-ghost input-sm"
                />
            </div>

            <div className="flex flex-col h-[calc(100%-100px)] justify-between">
                <div className={"flex flex-col h-full overflow-y-auto gap-6"}>
                    {jumboProducts.map((product, index) => (
                        <div key={index} className={"flex flex-col gap-1"}>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={product.image}
                                        alt={""}
                                        className="w-10 h-10"
                                    />
                                    <div>
                                        <p className={"text-black"}>{product.title}</p>
                                        <p className={"text-black"}>Qty: 1</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p><strong className={"text-black"}>€{product.price}</strong></p>
                                    <FaTrashAlt className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                            <hr className={"w-full px-8 bg-gray-200 h-0.5 "}/>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4 mb-4 pt-2">
                    <div className="flex justify-between items-center">
                        <span className="text-lg text-black">Totaal</span>
                        <span className="text-lg font-bold text-black">€{jumboProducts.reduce(
                            (total, product) => total + product.price, 0
                        ).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn bg-white hover:bg-yellow-500 text-black">Reserveer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
