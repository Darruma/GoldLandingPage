import humpybg from "../assets/humpybackground.svg";
import Socials from "../components/SocialsBar";
import NavWithLogo from "../components/NavWithLogo";
import aura from "../assets/aura.png";
import goldAura from "../assets/goldAura.png";
import goldAuraLogo from "../assets/goldAuraLogo.png";
import link from "../assets/link.png";
import { useState } from "react";
import Modal from "../components/Modal";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  useAuraRatio,
  useTotalAuraForWithdrawal,
  useVaultAura,
  useWalletAura,
  useWalletGoldAura,
} from "../utils/vaultHooks";
import { useAuraPrice } from "../utils/data";

enum VAULT_MODAL {
  NONE,
  DEPOSIT,
  WITHDRAW,
}
interface VaultProps {
  auraPrice: number;
  walletAura: number;
  totalDeposited: number;
  vaultAura: number;
  tokenRatio: number;
  auraForWithdrawal: number;
  setModalState: (modalState: VAULT_MODAL) => void;
}

function Vault() {
  const [modalState, setModalState] = useState(VAULT_MODAL.NONE);
  const close = () => setModalState(VAULT_MODAL.NONE);
  const { data: auraPrice } = useAuraPrice();
  const { data: walletAura } = useWalletAura();
  const { data: vaultAura } = useVaultAura();
  const { data: auraRatio } = useAuraRatio();
  const { data: walletGoldAura } = useWalletGoldAura();

  const { data: withdrawable } = useTotalAuraForWithdrawal();
  const tokenRatio = (Number(auraRatio?.toString() || 0) ?? 0) / 1e18;

  const auraBalance = Number(walletAura?.formatted || 0) ?? 0;
  const goldAuraBalance = Number(walletGoldAura?.formatted || 0) ?? 0;

  // get action
  return (
    <>
      <VaultView
        auraPrice={Number(auraPrice || 0)}
        setModalState={setModalState}
        walletAura={auraBalance}
        totalDeposited={goldAuraBalance}
        vaultAura={Number(vaultAura || 0) / 1e18}
        tokenRatio={tokenRatio}
        auraForWithdrawal={withdrawable}
      />
      {modalState === VAULT_MODAL.DEPOSIT && (
        <Modal
          close={close}
          auraPrice={Number(auraPrice || 0)}
          auraToGoldAuraRatio={tokenRatio}
          action="deposit"
          auraWallet={auraBalance}
          goldAuraWallet={goldAuraBalance}
        />
      )}
      {modalState === VAULT_MODAL.WITHDRAW && (
        <Modal
          close={close}
          auraPrice={Number(auraPrice || 0)}
          auraToGoldAuraRatio={tokenRatio}
          action="withdraw"
          auraWallet={auraBalance}
          goldAuraWallet={goldAuraBalance}
        />
      )}
    </>
  );
}
function VaultView({
  auraPrice,
  walletAura,
  totalDeposited,
  vaultAura,
  tokenRatio,
  auraForWithdrawal,
  setModalState,
}: VaultProps) {
  const totalDepositedUSD = totalDeposited * auraPrice;
  const vaultAuraUSD = vaultAura * auraPrice;
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  return (
    <div className="h-full">
      <div
        style={{
          backgroundImage: `url(${humpybg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}
        className="flex flex-col h-full"
      >
        <NavWithLogo />
        <div className="md:mx-64 basis-full md:pt-0 mt-8">
          <div className="flex flex-row gap-4 items-center">
            <img src={goldAuraLogo} alt="aura" className="w-12 h-12" />
            <div className="press-start-2p text-2xl">goldAURA Vault</div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 pt-8">
            <div className="basis-full flex flex-col bg-[#191919] rounded-xl p-6 gap-4">
              <div className="press-start-2p border-b border-gray-500">
                Total Deposited
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img src={goldAuraLogo} alt="aura" className="w-12 h-12" />
                <div className="flex flex-col">
                  <div className="text-3xl">{totalDeposited}</div>
                  <div className="text-md text-gray-300">
                    ${totalDepositedUSD.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full flex flex-col gap-4 justify-center items-center press-start-2p">
              <div
                onClick={() => {
                  if (!isConnected) {
                    openConnectModal?.();
                    return;
                  }
                  setModalState(VAULT_MODAL.DEPOSIT);
                }}
                className={`${
                  walletAura > 0 ? "text-white" : "text-gray-500"
                } bg-[#191919] rounded-md py-2 w-full text-center cursor-pointer`}
              >
                DEPOSIT
              </div>
              <div
                onClick={() => {
                  if (!isConnected) {
                    openConnectModal?.();
                    return;
                  }
                  setModalState(VAULT_MODAL.WITHDRAW);
                }}
                className="text-amber-300 border-amber-300 border rounded-md py-2 w-full text-center cursor-pointer"
              >
                WITHDRAW
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-2 pt-4 pb-12">
            <div className="flex flex-col w-full md:w-[40%] bg-[#191919] rounded-xl">
              <div className="text-center press-start-2p text-sm pt-6 border-b border-gray-500 mx-2 py-4">
                Vault Details
              </div>
              <div className="p-4 flex flex-col gap-2 ">
                <div className="text-3xl">
                  {vaultAura.toLocaleString()} AURA
                </div>
                <div className="text-gray-300">
                  ${vaultAuraUSD.toLocaleString()}
                </div>
                <div className="text-gray-100">Assets Deposited</div>

                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">
                  Tokens
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-sm  flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2 items-center pt-2">
                      <img src={aura} alt="aura" className="w-6 h-6" />
                      <div className="text-gray-400 text-sm">Aura</div>
                    </div>
                    <div> {vaultAura.toLocaleString()}</div>
                  </div>

                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">Token Ratio</div>
                    <div> {tokenRatio.toLocaleString()}</div>
                  </div>
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">
                      AURA Available for Withdrawal{" "}
                    </div>
                    <div> {auraForWithdrawal.toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">
                  Fees
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">Team Operations</div>
                    <div> 5.00%</div>
                  </div>
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">Bribe for own LP</div>
                    <div> 5.00%</div>
                  </div>
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">$GOLD Burn</div>
                    <div> 5.00%</div>
                  </div>
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">Withdrawal Fee</div>
                    <div> 0.00%</div>
                  </div>
                </div>
                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">
                  Reward Frequency
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">goldAURA </div>
                    <div>Bi-Weekly</div>
                  </div>
                </div>
                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">
                  Links
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm flex flex-row gap-4 items-center">
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Vault Address </div>
                  </div>
                  <div className="text-sm flex flex-row gap-4 items-center">
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Strategy Address </div>
                  </div>
                  <div className="text-sm flex flex-row gap-4 items-center">
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Underlying Token </div>
                  </div>
                  <div className="text-sm flex flex-row gap-4 items-center">
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Github </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
              <img
                src={goldAura}
                alt="goldAura"
                className="basis-full mx-auto"
                width={400}
              />
              <div className="basis-full flex flex-col bg-[#191919] rounded-xl p-6 gap-4">
                <div className="press-start-2p border-b border-amber-400 text-amber-400 text-2xl text-center">
                  PERFORMANCE
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col basis-full">
                    <div className="press-start-2p text-center border-b border-gray-500 p-2">
                      Strategy Summary
                    </div>
                    <div className="flex flex-col">
                      <div className="text-gray-400 pt-4">
                        goldAURA locks 100% of deposited Aura tokens for rolling
                        periods of 16 weeks. vlAURA voting is delegated to
                        Paladin who vote to optimize incentives and swaps
                        resulting yields to pay out USDC. USDC is collected from
                        Paladin and used to buy more AURA, which is added to the
                        assets in the strategy increasing the AURA to goldAURA
                        ratio.
                      </div>
                      <div className="p-4 text-gray-400">
                        goldAURA limits the times when users may withdraw their
                        funds. Limited pre-unlock liquidity will be available
                        through Balancer pools containing goldAURA.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col basis-full">
                    <div className="text-center border-b border-gray-500 p-2 flex flex-row justify-between mb-6 ">
                      <div className="press-start-2p">APY</div>
                      <div className=""> 0.00%</div>
                    </div>
                    <div className="text-center border-b border-gray-500 p-2 flex flex-row justify-between ">
                      <div className="press-start-2p">Liquidity</div>
                    </div>
                    <div className="text-sm  pt-4 flex flex-row justify-between">
                      <div className="text-gray-400">
                        AURA Available for Withdrawal{" "}
                      </div>
                      <div> {auraForWithdrawal.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Vault;
