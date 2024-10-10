import {ReactElement} from 'react';
import { FaHome, FaStore, FaUtensils, FaTags, FaShoppingCart } from 'react-icons/fa';

interface FooterProps {
    selected: number;
    setSelected: (index: number) => void;
}
export function Footer ({selected, setSelected}: FooterProps): ReactElement {

    const handleClick = (index: number) => {
        setSelected(index);
    };

    return (
        <div className="flex justify-center w-full border-t-2 border-gray-300">
            <div className="w-full max-w-[440px] h-[60px] flex justify-around items-center">
                <div onClick={() => handleClick(0)} className={`flex flex-col items-center ${selected === 0 ? 'text-yellow-500' : ''}`}>
                    <FaHome size={24} />
                    <span className="text-sm">Home</span>
                </div>
                <div onClick={() => handleClick(1)} className={`flex flex-col items-center ${selected === 1 ? 'text-yellow-500' : ''}`}>
                    <FaStore size={24} />
                    <span className="text-sm">Products</span>
                </div>
                <div onClick={() => handleClick(2)} className={`flex flex-col items-center ${selected === 2 ? 'text-yellow-500' : ''}`}>
                    <FaUtensils size={24} />
                    <span className="text-sm">Recipes</span>
                </div>
                <div onClick={() => handleClick(3)} className={`flex flex-col items-center ${selected === 3 ? 'text-yellow-500' : ''}`}>
                    <FaTags size={24} />
                    <span className="text-sm">Promotions</span>
                </div>
                <div onClick={() => handleClick(4)} className={`flex flex-col items-center ${selected === 4 ? 'text-yellow-500' : ''}`}>
                    <FaShoppingCart size={24} />
                    <span className="text-sm">Shopping Cart</span>
                </div>
        </div>
        </div>
    );
}
