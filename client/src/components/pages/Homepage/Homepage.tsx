import {ListComponent} from "./ListComponent";
import {VscAccount} from "react-icons/vsc";
import {MdOutlineArrowForward} from "react-icons/md";
import React from "react";
import {interactWithOpenAI} from "../../../processing/openAiAPI";
import {getIngredients} from "../../../processing/AHApi";

const melkSrc = require("./Melk.png")
const knokSrc = require("./rookworst.png")
const snacks = require("./snacks.png")
const jumbo = require("./jumbologo.png")

interface HomepageProps {
    setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export function Homepage({ setSelected }: HomepageProps) {

    const handleOnClick = async () => {
        const {ingredientList, recipe} = await interactWithOpenAI("");
        const result = await getIngredients(ingredientList);
        console.log(result)
    }

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
                  <div className={"flex flex-row justify-between items-center"}>
                      <span className={"text-black font-semibold"}>Populaire listjes</span>
                      <MdOutlineArrowForward className={"font-semibold text-lg text-black cursor-pointer"}/>
                  </div>
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
                  <div className={"flex flex-row justify-between items-center"}>
                      <span className={"text-black font-semibold"}>Voor jouw</span>
                      <MdOutlineArrowForward className={"font-semibold text-lg text-black cursor-pointer"}/>
                  </div>
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
                  <div className={"flex flex-row justify-between items-center"}>
                      <span className={"text-black font-semibold"}>Acties</span>
                      <MdOutlineArrowForward className={"font-semibold text-lg text-black cursor-pointer"}/>
                  </div>
                  <div className={"flex flex-row w-full h-fit gap-4"}>
                      <ListComponent
                          imageSrc={melkSrc}
                          title={"Halfvolle Melk 1L"}
                          isOffer={true}
                          offerLabel={"2+1"}/>
                      <ListComponent
                          imageSrc={knokSrc}
                          title={"UNIX rookworst"}
                          isOffer={true}
                          offerLabel={"3 voor 4.00"}/>
                      <ListComponent
                          imageSrc={snacks}
                          title={"Mini Snacks"}
                          isOffer={true}
                          offerLabel={"2e halve prijs"}
                      />
                  </div>
              </div>
              <div className={"flex flex-col gap-2"}>
                  <span className={"flex flex-col gap-2 text-black font-semibold"}>Get Inspired!</span>
                  <div className={"w-full h-fit flex flex-row justify-center"}>
                      <button className="btn btn-warning" onClick={() => setSelected(5)}>
                          Try the new AI recipe maker
                      </button> {/* Set selected to 5 to navigate to RecipeChat */}
                  </div>
              </div>
          </div>
      </div>
  )
}