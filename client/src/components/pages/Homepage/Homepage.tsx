import {MdOutlineAccountCircle} from "react-icons/md";
import {ListComponent} from "./ListComponent";

// const melkSrc = require('%PUBLIC_URL%/Melk.png');
const melkSrc = require("./Melk.png")
const knokSrc = require("./rookworst.png")
const snacks = require("./snacks.png")

export function Homepage() {
  return (
      <div className="w-full h-full flex flex-col gap-4 p-4">
          <div className={"w-full flex flex-row items-center gap-4 "}>
              <MdOutlineAccountCircle className={"h-10 w-10 text-black"}/>
              <div className={"h-full flex flex-row items-end justify-end"}>
                  Hi, Ting!
              </div>
          </div>

          <div>
              <input type="text" placeholder={"Zoek een product"} className={"input input-primary input-ghost input-sm"}/>
          </div>
          <div>
              <span className={"text-black font-semibold"}>Populaire listjes</span>
              <div className={"flex flex-row w-full h-fit gap-4"}>
                    <ListComponent
                        imageSrc={melkSrc}
                        title={"Halfvolle Melk 1L"}/>
                    <ListComponent
                        imageSrc={knokSrc}
                        title={"UNIX rookworst"}/>
                    <ListComponent
                        imageSrc={snacks}
                        title={"Mini Snacks"}/>

              </div>
          </div>
      </div>
  )
}
