import {ReactElement} from "react";
import {FaPlus} from "react-icons/fa";

interface ListComponentProps {
    imageSrc: string;
    title: string;
}

export function ListComponent({imageSrc, title}: ListComponentProps): ReactElement {

    return (
        <div className={"group card card-compact bg-white w-48 h-54 shadow-md border-2 border-gray-300"}>
            <div className={"hidden group-hover:flex absolute right-2 top-14 w-6 h-6 rounded-xl bg-green-400  flex-row justify-center items-center"}><FaPlus className={"text-white text-sm"}/></div>
            <figure className={"w-full h-20 bg-gray-100 flex flex-row items-center justify-center p-2"}>
                <img src={imageSrc} alt={"card"} className={"w-full h-full object-contain"}/>
            </figure>
            <div className={"card-body "}>
                <p className={" flex flex-col justify-center items-center flex-1 text-xs text-center text-black font-semibold -p-2"}>{title}</p>
            </div>
        </div>
    )
}