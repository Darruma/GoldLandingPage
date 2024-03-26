import { useState } from 'react';
import Comp from '../assets/comp.png';
import GoldComp from '../assets/goldCompLogo.png';
import { useContractWrite } from 'wagmi';
import toast from 'react-hot-toast';
import { waitForTransaction } from 'wagmi/actions';
import {
  useCompAllowance,
  useCompApproveConfig,
  useCompDepositConfig,
  useCompWithdrawFromQueueConfig,
  useCompWithdrawToQueueConfig,
  useTotalCompForWithdrawal,
} from '../utils/vaults/compVaultHooks';

interface ModalProps {
  close: () => void;
  compPrice: number;
  compToGoldCompRatio: number;
  action: 'deposit' | 'withdraw';
  compWallet: number;
  goldCompWallet: number;
}

function VaultCompModal({ close, compPrice, compToGoldCompRatio, action, compWallet, goldCompWallet }: ModalProps) {
  const [fromInput, setFromInput] = useState('0');
  const fromInputNumber = Number(fromInput);
  let fromInputDollars = 0;
  let output = 0;
  let outputDollars = 0;
  const goldCompWithdrawable = useTotalCompForWithdrawal();

  const { config: depositConfig } = useCompDepositConfig(fromInput, action);
  const { config: withdrawToQueueConfig } = useCompWithdrawToQueueConfig(fromInput, action);
  const { config: withdrawFromQueueConfig } = useCompWithdrawFromQueueConfig(action);
  const { config: approveConfig } = useCompApproveConfig();
  const { writeAsync: deposit } = useContractWrite(depositConfig);
  const { writeAsync: withdrawToQueue } = useContractWrite(withdrawToQueueConfig);
  const { writeAsync: withdrawFromQueue } = useContractWrite(withdrawFromQueueConfig);
  const { writeAsync: approve } = useContractWrite(approveConfig);

  const { data: vaultAllowance } = useCompAllowance();

  const allowance = Number(vaultAllowance?.toString() || 0) / 1e18;
  if (action === 'withdraw') {
    fromInputDollars = (fromInputNumber / compToGoldCompRatio) * compPrice;
    output = fromInputNumber / compToGoldCompRatio;
    outputDollars = output * compPrice;
  }
  if (action === 'deposit') {
    fromInputDollars = fromInputNumber * compPrice;
    output = fromInputNumber * compToGoldCompRatio;
    outputDollars = output * compPrice;
  }
  const isDeposit = action === 'deposit';
  const balance = isDeposit ? compWallet : goldCompWallet;
  console.log(balance);
  return (
    <div className=" fixed top-1/4 md:left-[15vh] left-0 h-[70vh] md:w-[80vw] w-[100vw] z-10 flex justify-center items-center  ">
      <div className="bg-[#222739] rounded-lg flex flex-col p-6 opacity-100 gap-4 h-[100] shadow-xl drop-shadow">
        <div className="press-start-2p flex flex-row justify-between">
          <div className="text-xl">{isDeposit ? 'Deposit' : 'Withdraw'}</div>
          <div className="w-4 h-4 cursor-pointer" onClick={() => close()}>
            X
          </div>
        </div>
        <div className="bg-black rounded-lg flex flex-col p-4 gap-2">
          <div className="text-sm text-[#60d09a]">From</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border border-[#428f74] rounded-md flex flex-row items-center gap-2 basis-full ">
              <img width={30} height={30} src={isDeposit ? Comp : GoldComp}></img>
              <div className="text-gray-400 pr-8">{isDeposit ? 'Comp' : 'goldComp'}</div>
            </div>
            <div className="flex flex-col">
              <input
                value={fromInput}
                className="basis-full text-gray-400 bg-black text-right text-2xl"
                onChange={(e) => {
                  setFromInput(e.target.value);
                }}
              ></input>
              <div className="text-right text-gray-400">~${fromInputDollars.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex flex-row  items-center ">
            <div className="text-gray-400 pr-4">1 goldCOMP = {compToGoldCompRatio} COMP</div>
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
          <div className="text-sm text-[#60d09a]">To</div>
          <div className="flex flex-row justify-between">
            <div className="p-4 border border-[#428f74] rounded-md flex flex-row items-center gap-2 basis-full ">
              <img width={30} height={30} src={isDeposit ? GoldComp : Comp}></img>
              <div className="text-gray-400 pr-8">{isDeposit ? 'goldComp' : 'Comp'}</div>
            </div>
            <div className="basis-full flex flex-col gap-2 text-right text-gray-400">
              <div className="basis-full text-gray-400 bg-black text-right text-2xl">{Number(output.toFixed(2)).toLocaleString()}</div>
              <div className="text-right text-gray-400">~${Number(outputDollars.toFixed(2)).toLocaleString()}</div>
            </div>
          </div>
        </div>

        {!isDeposit && (
          <div className="w-[440px] max-w-full text-xs text-gray-400">
            Please note that the withdrawals has the queue. You will be able to withdraw your COMP from the queue only after 7 days.
          </div>
        )}

        <button
          onClick={async () => {
            if (isDeposit) {
              if (Number(fromInput) > balance) {
                toast.error("You don't have enough COMP to do this");
                return;
              }
              if (allowance < fromInputNumber) {
                if (approve) {
                  const approvingID = toast.loading('Approving COMP...');
                  try {
                    const tx = await approve();
                    const pendingApproveID = toast.loading('Approval Pending', {
                      id: approvingID,
                    });
                    const receipt = await waitForTransaction({
                      hash: tx.hash,
                    });
                    if (receipt.status == 'success') {
                      toast.success('Approved COMP', { id: pendingApproveID });
                    }
                  } catch (e) {
                    toast.error('Failed to approve', { id: approvingID });
                  }
                  return;
                } else {
                  toast.error('Failed to approve');
                  return;
                }
              }
              if (deposit) {
                const depositingID = toast.loading('Depositing COMP...');
                try {
                  const tx = await deposit();
                  const pendingDepositID = toast.loading('Deposit pending...', {
                    id: depositingID,
                  });
                  const receipt = await waitForTransaction({
                    hash: tx.hash,
                  });
                  if (receipt.status == 'success') {
                    toast.success('Deposited COMP', { id: pendingDepositID });
                  }
                } catch (e) {
                  toast.error('Failed to deposit', { id: depositingID });
                }
              } else {
                toast.error('Failed to deposit');
              }
            } else {
              if (Number(fromInput) > goldCompWithdrawable) {
                toast.error('There is not enough goldComp withdrawable to do this');
                return;
              }
              if (Number(fromInput) > balance) {
                toast(`fromInput : ${fromInput} balance : ${balance}`);
                toast.error("You don't have enough goldComp to do this");
                return;
              }
              if (withdrawToQueue) {
                const withdrawingId = toast.loading('Initiating withdrawal');
                try {
                  const tx = await withdrawToQueue();
                  const pendingWithdrawId = toast.loading('Withdrawal pending...', { id: withdrawingId });
                  const receipt = await waitForTransaction({
                    hash: tx.hash,
                  });
                  if (receipt.status == 'success') {
                    toast.success('COMP added to the withdraw queue. Please, come back in 7 days to finalize withdrawal.', {
                      id: pendingWithdrawId,
                    });
                  }
                } catch (e) {
                  toast.error('Failed to withdraw', { id: withdrawingId });
                }
              } else {
                toast.error('Failed to withdraw');
              }
            }
          }}
          className="border-2 border-[#428f74] press-start-2p text-center py-3 rounded-lg"
        >
          {isDeposit ? 'DEPOSIT COMP' : 'INITIATE WITHDRAWAL'}
        </button>

        {!isDeposit && (
          <button
            onClick={async () => {
              if (Number(fromInput) > goldCompWithdrawable) {
                toast.error('There is not enough goldComp withdrawable to do this');
                return;
              }
              if (withdrawFromQueue) {
                const withdrawingId = toast.loading('Withdrawing COMP');
                try {
                  const tx = await withdrawFromQueue();
                  const pendingWithdrawId = toast.loading('Withdrawal pending...', { id: withdrawingId });
                  const receipt = await waitForTransaction({
                    hash: tx.hash,
                  });
                  if (receipt.status == 'success') {
                    toast.success('COMP withdrawn!', {
                      id: pendingWithdrawId,
                    });
                  }
                } catch (e) {
                  toast.error('Failed to withdraw', { id: withdrawingId });
                }
              } else {
                toast.error('Failed to withdraw');
              }
            }}
            className="border-2 border-[#428f74] press-start-2p text-center py-3 rounded-lg"
          >
            FINALIZE WITHDRAWAL
          </button>
        )}
      </div>
    </div>
  );
}
export default VaultCompModal;
