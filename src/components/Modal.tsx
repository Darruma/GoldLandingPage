import { useState } from "react";
import Aura from "../assets/aura.png";
interface ModalProps {
  close: () => void;
  auraPrice: number;
  auraToGoldAuraRatio: number;
  action: "deposit" | "withdraw";
}

function Modal({ close, auraPrice, auraToGoldAuraRatio, action }: ModalProps) {
  const [fromInput, setFromInput] = useState("0");
  const fromInputNumber = Number(fromInput);
  let fromInputDollars = 0;
  let output = 0;
  let outputDollars = 0;
  if (action === "withdraw") {
    fromInputDollars = (fromInputNumber / auraToGoldAuraRatio) * auraPrice;
    output = fromInputNumber / auraToGoldAuraRatio;
    outputDollars = output * auraPrice;
  }
  if (action === "deposit") {
    fromInputDollars = fromInputNumber * auraPrice;
    output = fromInputNumber * auraToGoldAuraRatio;
    outputDollars = output * auraPrice;
  }
  const isDeposit = action === "deposit";

  return (
    <div className="trans-background fixed top-1/4 md:left-[15vh] left-0 h-[70vh] md:w-[80vw] w-[100vw] z-10 flex justify-center items-center  ">
      <div className="bg-[#2b2b2b] rounded-lg flex flex-col p-6 opacity-100 gap-4 h-[100]">
        <div className="press-start-2p flex flex-row justify-between">
          <div className="text-xl">{isDeposit ? "Deposit" : "Withdraw"}</div>
          <div className="w-4 h-4 cursor-pointer" onClick={() => close()}>
            X
          </div>
        </div>
        <div className="bg-black rounded-lg flex flex-col p-4 gap-2">
          <div className="text-sm text-amber-300">From</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border  border-amber-300 rounded-md bg-[#2b2b2b] flex flex-row items-center gap-2 basis-full ">
              <img src={Aura}></img>
              <div className="text-gray-400 pr-8">
                {isDeposit ? "Aura" : "goldAura"}
              </div>
            </div>
            <div className="flex flex-col">
              <input
                value={fromInput}
                className="basis-full text-gray-400 bg-black text-right text-2xl"
                onChange={(e) => {
                  setFromInput(e.target.value);
                }}
              ></input>
              <div className="text-right text-gray-400">
                ~${fromInputDollars.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="flex flex-row  items-center ">
            <div className="text-gray-400 pr-4">
              1 goldAURA = {auraToGoldAuraRatio} AURA
            </div>
            <div className="flex flex-row gap-4">
              <button className="text-gray-400 p-1 border-2 border-gray-400  rounded-md">
                25%
              </button>
              <button className="text-gray-400 p-1 border-2 border-gray-400  rounded-md">
                50%
              </button>
              <button className="text-gray-400 p-1 border-2 border-gray-400  rounded-md">
                75%
              </button>
              <button className="text-gray-400 p-1 border-2 border-gray-400  rounded-md">
                100%
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-lg flex flex-col p-4 gap-2">
          <div className="text-sm text-amber-300">To</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border  border-amber-300 rounded-md bg-[#2b2b2b] flex flex-row items-center gap-2 basis-full ">
              <img src={Aura}></img>
              <div className="text-gray-400 pr-8">
                {isDeposit ? "goldAura" : "Aura"}
              </div>
            </div>
            <div className="basis-full flex flex-col gap-2 text-right text-gray-400">
              <div className="basis-full text-gray-400 bg-black text-right text-2xl">
                {output.toFixed(2)}
              </div>
              <div className="text-right text-gray-400">
                ~${outputDollars.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {}}
          className="bg-amber-300 text-black press-start-2p text-center py-2 rounded-lg"
        >
          {isDeposit ? "DEPOSIT AURA" : "WITHDRAW AURA"}
        </button>
      </div>
    </div>
  );
}
export default Modal;
