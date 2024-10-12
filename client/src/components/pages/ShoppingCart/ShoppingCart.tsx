import { MdOutlineShoppingBasket } from "react-icons/md";
import { TbCircleNumber1 } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon

export function ShoppingCart() {
    return (
        <div className="w-full h-full flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-4">
                <MdOutlineShoppingBasket className="h-10 w-10 text-black" />
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

            {/* Cart Items */}
            <div className="flex flex-col gap-6">
                {/* Item 1 */}
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                        <TbCircleNumber1 className="h-7 w-7 text-black" />
                        <img
                            src={require("./rookworst.png")}
                            alt="Rookworst"
                            className="w-10 h-10"
                        />
                        <div>
                            <p>Rookworst</p>
                            <p>250g</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p><strong>€3.40</strong></p>
                        <p className="text-xs">5.48/kg</p>
                        <FaTrashAlt className="text-red-500 cursor-pointer" /> {/* Trash bin icon */}
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                        <TbCircleNumber1 className="h-7 w-7 text-black" />
                        <img
                            src={require("./Melk.png")}
                            alt="Volle Melk 1L"
                            className="w-10 h-10"
                        />
                        <div>
                            <p>Volle Melk 1L</p>
                            <p>1L</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-red-500"><strong>€4.50</strong></p>
                        <p className="text-xs line-through">€5.59</p>
                        <p className="text-xs">4.74/kg</p>
                        <FaTrashAlt className="text-red-500 cursor-pointer" /> {/* Trash bin icon */}
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                        <TbCircleNumber1 className="h-7 w-7 text-black" />
                        <img
                            src={require("./snacks.png")}
                            alt="Jumbo Mini Snacks"
                            className="w-10 h-10"
                        />
                        <div>
                            <p>Jumbo Mini Snacks</p>
                            <p>550g</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p><strong>€3.62</strong></p>
                        <p className="text-xs">6.58/kg</p>
                        <FaTrashAlt className="text-red-500 cursor-pointer" /> {/* Trash bin icon */}
                    </div>
                </div>
            </div>

            {/* Spacer to push content up */}
            <div className="flex-grow"></div>

            {/* Total Price and Reserve Button */}
            <div className="flex flex-col gap-4 mb-4">
                {/* Total Price */}
                <div className="flex justify-between items-center">
                    <span className="text-lg">Totaal</span>
                    <span className="text-lg">€13.88</span>
                </div>

                {/* Reserve Button */}
                <div className="flex justify-center">
                    <button className="btn bg-white hover:bg-yellow-500">Reserveer</button>
                </div>
            </div>
        </div>
    );
}
