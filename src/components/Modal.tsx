import { useState } from "react";
import Aura from "../assets/aura.png";
interface ModalProps {
  close: () => void;
  auraPrice: number;
}

function Modal({ close, auraPrice }: ModalProps) {
  const [fromInput, setFromInput] = useState(0);
  const fromInputDollars = fromInput * auraPrice;

  //TODO: Calculate output depending on fromInput and action
  const output = fromInput * 1.05;
  const outputDollars = (output * auraPrice).toFixed(2);

  //TODO:Change ui depending on action

  return (
    <div className="trans-background fixed top-1/4 md:left-[15vh] left-0 h-[70vh] md:w-[80vw] w-[100vw] z-10 flex justify-center items-center  ">
      <div className="bg-[#2b2b2b] rounded-lg flex flex-col p-6 opacity-100 gap-4 h-[100]">
        <div className="press-start-2p flex flex-row justify-between">
          <div className="text-xl">Deposit</div>
          <div className="w-4 h-4 cursor-pointer" onClick={() => close()}>
            X
          </div>
        </div>
        <div className="bg-black rounded-lg flex flex-col p-4 gap-2">
          <div className="text-sm text-amber-300">From</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border  border-amber-300 rounded-md bg-[#2b2b2b] flex flex-row items-center gap-2 basis-full ">
              <img src={Aura}></img>
              <div className="text-gray-400 pr-8">Aura</div>
            </div>
            <div className="flex flex-col">
              <input
                value={fromInput}
                className="basis-full text-gray-400 bg-black text-right text-2xl"
                onChange={(e) => setFromInput(Number(e.target.value))}
              ></input>
              <div className="text-right text-gray-400">
                ~${fromInputDollars}
              </div>
            </div>
          </div>
          <div>Extra info</div>
        </div>
        <div className="bg-black rounded-lg flex flex-col p-4 gap-2">
          <div className="text-sm text-amber-300">To</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border  border-amber-300 rounded-md bg-[#2b2b2b] flex flex-row items-center gap-2 basis-full ">
              <img src={Aura}></img>
              <div className="text-gray-400 pr-8">goldAura</div>
            </div>
            <div className="basis-full flex flex-col gap-2 text-right text-gray-400">
              <div className="basis-full text-gray-400 bg-black text-right text-2xl">
                {output}
              </div>
              <div className="text-right text-gray-400">~${outputDollars}</div>
            </div>
          </div>
        </div>
        <div className="text-sm  flex flex-row justify-between">
          <div className="text-gray-400">Withdraw Fee(0%) </div>
          <div> {0.0} AURA</div>
        </div>
        <div className="text-sm  flex flex-row justify-between">
          <div className="text-gray-400"> Total Withdrawal</div>
          <div> {0.0} AURA</div>
        </div>
        <button className="bg-amber-300 text-black press-start-2p text-center py-2 rounded-lg">
          DEPOSIT AURA
        </button>
      </div>
    </div>
  );
}
export default Modal;
