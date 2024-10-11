import {ReactElement} from "react";

interface ListComponentProps {
    imageSrc: string;
    title: string;
}

export function ListComponent({imageSrc, title}: ListComponentProps): ReactElement {

    return (
        <div className={"card card-compact bg-white w-48 h-54 shadow-md border-2 border-gray-300"}>
            <div className={""}></div>
            <figure className={"w-full h-20 bg-gray-100 flex flex-row items-center justify-center p-2"}>
                <img src={imageSrc} alt={"card"} className={"w-full h-full object-contain"}/>
            </figure>
            <div className={"card-body "}>
                <p className={" flex flex-col justify-center items-center flex-1 text-xs text-center text-black font-semibold -p-2"}>{title}</p>
            </div>
        </div>
    )
}