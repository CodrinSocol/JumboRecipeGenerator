import {ReactElement} from "react";

export function HeaderComponent(): ReactElement {
    return (
        <div className={"w-full h-16"}>
            <div className={"w-4 h-4"}>
                <img src={"/jumbo-logo.png"} alt={"Jumbo Logo"} className={"w-4 h-4"}/>
            </div>

        </div>
    )
}