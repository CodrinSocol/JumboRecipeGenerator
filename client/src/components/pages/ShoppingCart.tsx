import { MdOutlineShoppingBasket } from "react-icons/md";
import { TbCircleNumber1 } from "react-icons/tb";

export function ShoppingCart() {
    return (
        <div className="w-full h-full flex flex-col gap-4 p-4">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-4">
                <MdOutlineShoppingBasket className="h-10 w-10 text-black"/>
                <div className="h-full flex flex-row items-end justify-end">
                    Mandje
                </div>
            </div>

            {/* Search Bar */}
            <div>
                <input
                    type="text"
                    placeholder="Zoek een product"
                    className="input input-primary input-ghost input-sm"
                />
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <TbCircleNumber1 className="h-7 w-7 text-black"/>
                    <img
                        src="https://example.com/hak_kikkererwten.jpg"
                        alt="Hak Kikkererwten"
                        className="w-10 h-10"
                    />
                    <div>
                        <p>Hak Kikkererwten 380g</p>
                        <p>380g</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p>€1.26</p>
                    <p className="text-xs">5.48/kg</p>
                </div>
            </div>
            <div></div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <TbCircleNumber1 className="h-7 w-7 text-black"/>
                    <img
                        src="https://example.com/jumbo_mexican_burrito.jpg"
                        alt="Jumbo Mexicaanse Burrito's"
                        className="w-10 h-10"
                    />
                    <div>
                        <p>Jumbo Maaltijdpakket Mexicaanse Burrito's</p>
                        <p>950g</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p>€4.50</p>
                    <p className="text-xs line-through">€5.59</p>
                    <p className="text-xs">4.74/kg</p>
                </div>
            </div>
            <div></div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <TbCircleNumber1 className="h-7 w-7 text-black"/>
                    <img
                        src="https://example.com/hak_mexican_wraps.jpg"
                        alt="Hak Mexicanez Wraps"
                        className="w-10 h-10"
                    />
                    <div>
                        <p>Hak Mexicanez Wraps 550g</p>
                        <p>550g</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p>€3.62</p>
                    <p className="text-xs">6.58/kg</p>
                </div>
            </div>
            <div></div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <TbCircleNumber1 className="h-7 w-7 text-black"/>
                    <img
                        src="https://example.com/jumbo_tikka_masala.jpg"
                        alt="Jumbo Tikka Masala"
                        className="w-10 h-10"
                    />
                    <div>
                        <p>Jumbo Maaltijdpakket voor Indiase Tikka Masala</p>
                        <p>1430g</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p>€4.50</p>
                    <p className="text-xs line-through">€5.69</p>
                    <p className="text-xs">2.92/kg</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {/* Total Price */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg">Totaal</span>
                <span className="text-lg">€13.88</span>
            </div>

            {/* Reserve Button */}
            <div className="flex justify-center">
                <button className="btn bg-white hover:bg-yellow-500">Reserveer</button>
            </div>
        </div>
    );
}
