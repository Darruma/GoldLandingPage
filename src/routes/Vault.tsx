import NavWithLogo from "../components/NavWithLogo";
import aura from "../assets/aura.png";
import goldAuraLogo from "../assets/goldAuraLogo.png";
import goldAuraVault from "../assets/goldAuraVault.png";
import link from "../assets/link.png";
import { useState } from "react";
import Modal from "../components/Modal";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  STRATEGY_ADDRESS,
  VAULT_ADDRESS,
  WANT_ADDRESS,
  useAuraRatio,
  useTotalAuraForWithdrawal,
  useVaultAura,
  useWalletAura,
  useWalletGoldAura,
} from "../utils/vaultHooks";
import { useAuraPrice } from "../utils/data";
import { Footer } from "../components/Footer";

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

  const withdrawable = useTotalAuraForWithdrawal();
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
      <div className="flex flex-col h-full">
        <NavWithLogo />
        <div className="md:mx-64 basis-full md:pt-0 mt-8">
          <div className="flex flex-row gap-4 items-center">
            <img src={goldAuraLogo} alt="aura" className="w-12 h-12" />
            <div className="press-start-2p text-2xl">goldAURA Vault</div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 pt-8"></div>
          <div className="flex md:flex-row flex-col gap-2 pt-4 pb-12">
            <div className="flex flex-col w-full md:w-[40%] rounded-xl gap-4">
              <div className="basis-full flex flex-col bg-[#222739] rounded-xl p-6 gap-4 shadow">
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

              <div className="p-4 flex flex-col gap-2 bg-[#222739] shadow rounded-xl">
                <div className="text-center press-start-2p bg-[#222739] text-sm pt-6 border-b border-gray-500 mx-2 py-4">
                  Vault Details
                </div>
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
                  <div className="text-sm flex flex-row justify-between items-center">
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${VAULT_ADDRESS}`}
                    className="text-sm flex flex-row gap-4 items-center"
                  >
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Vault Address </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${STRATEGY_ADDRESS}`}
                    className="text-sm flex flex-row gap-4 items-center"
                  >
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Strategy Address </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${WANT_ADDRESS}`}
                    className="text-sm flex flex-row gap-4 items-center"
                  >
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Underlying Token </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
              <div className="basis-full flex flex-col bg-[#222739] rounded-xl p-6 gap-4 shadow">
                <div className="press-start-2p border-b border-amber-400  text-2xl text-center">
                  PERFORMANCE
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col basis-full">
                    <div className="press-start-2p text-center border-b border-gray-500 p-2">
                      Strategy Summary
                    </div>
                    <div className="flex flex-col">
                      <div className="text-gray-400 pt-4">
                        This vault locks 100% of deposited Aura tokens for
                        rolling periods of 16 weeks. The vault delegates to
                        Paladin , which converts vlAURA voting power into USDC,
                        which is then swapped back to AURA and sent into the
                        vault, increasing PPFS. AURA earned is autocompounded.
                      </div>
                      <br />
                      <div className=" text-gray-400">
                        goldAURA limits the times when users may withdraw their
                        funds. Limited pre-unlock liquidity is available through
                        Balancer pools containing goldAURA. Please carefully
                        read the User Guide for more information.
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
                        } gradient-border rounded-md py-2 w-full text-center cursor-pointer`}
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
                        className=" gradient-border rounded-md py-2 w-full text-center cursor-pointer"
                      >
                        WITHDRAW
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={goldAuraVault}
                alt="goldAura"
                className="basis-full w-full"
                width={400}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Vault;
