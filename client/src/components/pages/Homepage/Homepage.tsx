import {ListComponent} from "./ListComponent";
import {VscAccount} from "react-icons/vsc";
import {MdOutlineArrowForward} from "react-icons/md";

interface HomepageProps {
    setSelected: (index: number) => void;
}
const jumbo = require('./jumbologo.png')

const extraVirgin = "https://static.ah.nl/dam/product/AHI_4354523130303131313135?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"
const knokflook = "https://static.ah.nl/dam/product/AHI_43545239353732353335?revLabel=4&rendition=800x800_JPG_Q90&fileType=binary"
const heinzTomatoFritz = "https://static.ah.nl/dam/product/AHI_4354523130303930323439?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"

const zeezout = "https://static.ah.nl/dam/product/AHI_43545239383533353231?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"
const swaartepeper = "https://static.ah.nl/dam/product/AHI_43545239353534323234?revLabel=3&rendition=800x800_JPG_Q90&fileType=binary"
const kaas = "https://static.ah.nl/dam/product/AHI_4354523130303431343436?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"

const pasta = "https://static.ah.nl/dam/product/AHI_4354523130303835393138?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"
const groenteBuillon = "https://static.ah.nl/dam/product/AHI_4354523130303537383535?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"
const bakpoeder = "https://static.ah.nl/dam/product/AHI_43545239383532353635?revLabel=2&rendition=800x800_JPG_Q90&fileType=binary"

export function Homepage({ setSelected }: HomepageProps) {
  return (
      <div className="w-full h-full flex flex-col gap-4 p-4">
          <div className={"flex flex-row justify-between"}>
              <img src={jumbo} alt={'asd'} className={"pt-1 rounded-xl object-contain w-32 h-fit"}/>
              <div>
                  <VscAccount className={"w-8 h-8 text-black mr-2 mt-2"}/>
              </div>
          </div>


          <div className={"flex flex-col"}>
              <span className={"text-black font-bold"}>Hi, Anna!</span>
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
                          imageSrc={zeezout}
                          title={"Sea Salt"}/>
                      <ListComponent
                          imageSrc={swaartepeper}
                          title={"Black Pepper"}/>
                      <ListComponent
                          imageSrc={kaas}
                          title={"Gouda Cheese"}/>
                  </div>
              </div>

              <div className={"flex flex-col gap-1"}>
                  <div className={"flex flex-row justify-between items-center"}>
                      <span className={"text-black font-semibold"}>Voor jouw</span>
                      <MdOutlineArrowForward className={"font-semibold text-lg text-black cursor-pointer"}/>
                  </div>
                  <div className={"flex flex-row w-full h-fit gap-4"}>
                      <ListComponent
                          imageSrc={extraVirgin}
                          title={"Extra Virgin Olive Oil"}/>
                      <ListComponent
                          imageSrc={knokflook}
                          title={"Garlic Sauce"}/>
                      <ListComponent
                          imageSrc={heinzTomatoFritz}
                          title={"Heinz Tomato Fritz"}/>
                  </div>
              </div>

              <div className={"flex flex-col gap-1"}>
                  <div className={"flex flex-row justify-between items-center"}>
                      <span className={"text-black font-semibold"}>Acties</span>
                      <MdOutlineArrowForward className={"font-semibold text-lg text-black cursor-pointer"}/>
                  </div>
                  <div className={"flex flex-row w-full h-fit gap-4"}>
                      <ListComponent
                          imageSrc={pasta}
                          title={"Bartolli Pasta"}
                          isOffer={true}
                          offerLabel={"2+1"}/>
                      <ListComponent
                          imageSrc={groenteBuillon}
                          title={"Groenten Buillon"}
                          isOffer={true}
                          offerLabel={"3 voor 4.00"}/>
                      <ListComponent
                          imageSrc={bakpoeder}
                          title={"Bakpoeder"}
                          isOffer={true}
                          offerLabel={"2e halve prijs"}
                      />
                  </div>
              </div>
              <div className={"flex flex-col gap-2"}>
                  <span className={"flex flex-col gap-2 text-black font-semibold"}>Get Inspired!</span>
                  <div className={"w-full h-fit flex flex-row justify-center"}>
                      <button className="btn btn-warning" onClick={() => setSelected(2)}>
                          Try the new AI recipe maker
                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}