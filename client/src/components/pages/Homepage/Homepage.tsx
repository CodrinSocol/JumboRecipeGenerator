import {ListComponent} from "./ListComponent";
import {VscAccount} from "react-icons/vsc";

const melkSrc = require("./Melk.png")
const knokSrc = require("./rookworst.png")
const snacks = require("./snacks.png")
const jumbo = require("./jumbologo.png")

export function Homepage() {
  return (
      <div className="w-full h-full flex flex-col gap-4 p-4">
          <div className={"flex flex-row justify-between"}>
              <img src={jumbo} alt={'asd'} className={"pt-1 rounded-xl object-contain w-32 h-fit"}/>
              <div>
                  <VscAccount className={"w-8 h-8 text-black mr-2 mt-2"}/>
              </div>
          </div>


          <div className={"flex flex-col"}>
              <span className={"text-black font-bold"}>Hi Ting!</span>
              <input type="text" placeholder={"Zoek een product"}
                     className={"input input-primary input-ghost input-sm"}/>
          </div>
          <div className={"flex flex-col gap-8"}>
              <div className={"flex flex-col gap-1"}>
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

              <div className={"flex flex-col gap-1"}>
                  <span className={"text-black font-semibold"}>Voor jouw</span>
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
      </div>
  )
}
