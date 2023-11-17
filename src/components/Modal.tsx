import { useState } from "react";
import Aura from "../assets/aura.png";
import GoldAura from "../assets/goldAuraLogo.png";
import {
  useAllowance,
  useApproveConfig,
  useDepositConfig,
  useTotalAuraForWithdrawal,
  useWithdrawConfig,
} from "../utils/vaultHooks";
import { useContractWrite } from "wagmi";
import toast from "react-hot-toast";
import { waitForTransaction } from "wagmi/actions";

interface ModalProps {
  close: () => void;
  auraPrice: number;
  auraToGoldAuraRatio: number;
  action: "deposit" | "withdraw";
  auraWallet: number;
  goldAuraWallet: number;
}

//TODO: Handle pending states
function Modal({
  close,
  auraPrice,
  auraToGoldAuraRatio,
  action,
  auraWallet,
  goldAuraWallet,
}: ModalProps) {
  const [fromInput, setFromInput] = useState("0");
  const fromInputNumber = Number(fromInput);
  let fromInputDollars = 0;
  let output = 0;
  let outputDollars = 0;
  const goldAuraWithdrawable = useTotalAuraForWithdrawal();

  const { config: depositConfig } = useDepositConfig(fromInput, action);
  const { config: withdrawConfig } = useWithdrawConfig(fromInput, action);
  const { config: approveConfig } = useApproveConfig();
  const { writeAsync: deposit } = useContractWrite(depositConfig);
  const { writeAsync: withdraw } = useContractWrite(withdrawConfig);
  const { writeAsync: approve } = useContractWrite(approveConfig);

  const { data: vaultAllowance } = useAllowance();

  const allowance = Number(vaultAllowance?.toString() || 0) / 1e18;
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
  let balance = isDeposit ? auraWallet : goldAuraWallet;
  console.log(balance);
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
              <img
                width={30}
                height={30}
                src={isDeposit ? Aura : GoldAura}
              ></img>
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
              <button
                onClick={() => {
                  setFromInput((balance * 0.25).toString());
                }}
                className="text-gray-400 p-1 border-2 border-gray-400  rounded-md"
              >
                25%
              </button>
              <button
                onClick={() => {
                  setFromInput((balance * 0.5).toString());
                }}
                className="text-gray-400 p-1 border-2 border-gray-400  rounded-md"
              >
                50%
              </button>
              <button
                onClick={() => {
                  setFromInput((balance * 0.75).toString());
                }}
                className="text-gray-400 p-1 border-2 border-gray-400  rounded-md"
              >
                75%
              </button>
              <button
                onClick={() => {
                  setFromInput((balance * 1).toString());
                }}
                className="text-gray-400 p-1 border-2 border-gray-400  rounded-md"
              >
                100%
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-lg flex flex-col p-4 gap-2">
          <div className="text-sm text-amber-300">To</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border  border-amber-300 rounded-md bg-[#2b2b2b] flex flex-row items-center gap-2 basis-full ">
              <img
                width={30}
                height={30}
                src={isDeposit ? GoldAura : Aura}
              ></img>
              <div className="text-gray-400 pr-8">
                {isDeposit ? "goldAura" : "Aura"}
              </div>
            </div>
            <div className="basis-full flex flex-col gap-2 text-right text-gray-400">
              <div className="basis-full text-gray-400 bg-black text-right text-2xl">
                {Number(output.toFixed(2)).toLocaleString()}
              </div>
              <div className="text-right text-gray-400">
                ~${Number(outputDollars.toFixed(2)).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={async () => {
            if (isDeposit) {
              if (Number(fromInput) > balance) {
                toast.error("You don't have enough AURA to do this");
                return;
              }
              if (allowance < fromInputNumber) {
                if (approve) {
                  const approvingID = toast.loading("Approving AURA...");
                  try {
                    const tx = await approve();
                    const pendingApproveID = toast.loading("Approval Pending", {
                      id: approvingID,
                    });
                    const receipt = await waitForTransaction({
                      hash: tx.hash,
                    });
                    if (receipt.status == "success") {
                      toast.success("Approved AURA", { id: pendingApproveID });
                    }
                  } catch (e) {
                    toast.error("Failed to approve", { id: approvingID });
                  }
                  return;
                } else {
                  toast.error("Failed to approve");
                  return;
                }
              }
              if (deposit) {
                const depositingID = toast.loading("Depositing AURA...");
                try {
                  const tx = await deposit();
                  const pendingDepositID = toast.loading("Deposit pending...", {
                    id: depositingID,
                  });
                  const receipt = await waitForTransaction({
                    hash: tx.hash,
                  });
                  if (receipt.status == "success") {
                    toast.success("Deposited AURA", { id: pendingDepositID });
                  }
                } catch (e) {
                  toast.error("Failed to deposit", { id: depositingID });
                }
              } else {
                toast.error("Failed to deposit");
              }
            } else {
              if (Number(fromInput) > goldAuraWithdrawable) {
                toast.error(
                  "There is not enough goldAura withdrawable to do this"
                );
                return;
              }
              if (Number(fromInput) > balance) {
                toast(`fromInput : ${fromInput} balance : ${balance}`);
                toast.error("You don't have enough goldAura to do this");
                return;
              }
              if (withdraw) {
                const withdrawingId = toast.loading("Withdrawing goldAura");
                try {
                  const tx = await withdraw();
                  const pendingWithdrawId = toast.loading(
                    "Withdrawal pending...",
                    { id: withdrawingId }
                  );
                  const receipt = await waitForTransaction({
                    hash: tx.hash,
                  });
                  if (receipt.status == "success") {
                    toast.success("Withdrawn goldAura", {
                      id: pendingWithdrawId,
                    });
                  }
                } catch (e) {
                  toast.error("Failed to withdraw", { id: withdrawingId });
                }
              } else {
                toast.error("Failed to withdraw");
              }
            }
          }}
          className="bg-amber-300 text-black press-start-2p text-center py-2 rounded-lg"
        >
          {isDeposit ? "DEPOSIT AURA" : "WITHDRAW AURA"}
        </button>
      </div>
    </div>
  );
}
export default Modal;
