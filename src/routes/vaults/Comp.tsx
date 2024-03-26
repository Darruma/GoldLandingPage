import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import comp from '../../assets/comp.png';
import goldCompLogo from '../../assets/goldCompLogo.png';
import goldCompVault from '../../assets/goldCompVault.png';
import link from '../../assets/link.png';
import { Footer } from '../../components/Footer';
import NavWithLogo from '../../components/NavWithLogo';
import VaultCompModal from '../../components/VaultCompModal';
import { useCompPrice } from '../../utils/data';
import {
  COMP_VAULT_ADDRESS,
  COMP_WANT_ADDRESS,
  useCompRatio,
  useTotalCompForWithdrawal,
  useVaultComp,
  useWalletComp,
  useWalletGoldComp,
} from '../../utils/vaults/compVaultHooks';

enum VAULT_MODAL {
  NONE,
  DEPOSIT,
  WITHDRAW,
}
interface VaultProps {
  compPrice: number;
  walletComp: number;
  totalDeposited: number;
  vaultComp: number;
  tokenRatio: number;
  compForWithdrawal: number;
  setModalState: (modalState: VAULT_MODAL) => void;
}

function VaultComp() {
  const [modalState, setModalState] = useState(VAULT_MODAL.NONE);
  const close = () => setModalState(VAULT_MODAL.NONE);
  const { data: compPrice } = useCompPrice();
  const { data: walletComp } = useWalletComp();
  const { data: vaultComp } = useVaultComp();
  const { data: compRatio } = useCompRatio();
  const { data: walletGoldComp } = useWalletGoldComp();

  const withdrawable = useTotalCompForWithdrawal();
  const tokenRatio = (Number(compRatio?.toString() || 0) ?? 0) / 1e18;

  const compBalance = Number(walletComp?.formatted || 0) ?? 0;
  const goldCompBalance = Number(walletGoldComp?.formatted || 0) ?? 0;

  // get action
  return (
    <>
      <VaultView
        compPrice={Number(compPrice || 0)}
        setModalState={setModalState}
        walletComp={compBalance}
        totalDeposited={goldCompBalance}
        vaultComp={Number(vaultComp || 0) / 1e18}
        tokenRatio={tokenRatio}
        compForWithdrawal={withdrawable}
      />
      {modalState === VAULT_MODAL.DEPOSIT && (
        <VaultCompModal
          close={close}
          compPrice={Number(compPrice || 0)}
          compToGoldCompRatio={tokenRatio}
          action="deposit"
          compWallet={compBalance}
          goldCompWallet={goldCompBalance}
        />
      )}
      {modalState === VAULT_MODAL.WITHDRAW && (
        <VaultCompModal
          close={close}
          compPrice={Number(compPrice || 0)}
          compToGoldCompRatio={tokenRatio}
          action="withdraw"
          compWallet={compBalance}
          goldCompWallet={goldCompBalance}
        />
      )}
    </>
  );
}
function VaultView({ compPrice, walletComp, totalDeposited, vaultComp, tokenRatio, compForWithdrawal, setModalState }: VaultProps) {
  const totalDepositedUSD = totalDeposited * compPrice;
  const vaultCompUSD = vaultComp * compPrice;
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        <div className="md:mx-20 basis-full md:pt-0 mt-8">
          <div className="flex flex-col h-full overflow-hidden pb-8">
            <NavWithLogo />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={goldCompLogo} alt="comp" className="w-12 h-12" />
            <div className="press-start-2p text-2xl">goldCOMP Vault</div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 pt-8"></div>
          <div className="flex md:flex-row flex-col gap-2 pt-4 pb-12">
            <div className="flex flex-col w-full md:w-[30%] rounded-xl gap-4">
              <div className="basis-full flex flex-col bg-gradient-to-b from-[#28534f] to-[#222739] rounded-xl p-6 gap-4 shadow">
                <div className="press-start-2p border-b border-gray-500">Total Deposited</div>
                <div className="flex flex-row gap-4 items-center">
                  <img src={goldCompLogo} alt="comp" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <div className="text-3xl">{totalDeposited}</div>
                    <div className="text-md text-gray-300">${totalDepositedUSD.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-[#28534f] to-[#222739] shadow rounded-xl">
                <div className="press-start-2p text-sm pt-6 border-b border-gray-500 mx-2 py-4">Vault Details</div>
                <div className="text-3xl">{vaultComp.toLocaleString()} COMP</div>
                <div className="text-gray-300">${vaultCompUSD.toLocaleString()}</div>
                <div className="text-gray-100">Assets Deposited</div>

                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">Tokens</div>

                <div className="flex flex-col gap-2">
                  <div className="text-sm flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2 items-center pt-2">
                      <img src={comp} alt="comp" className="w-6 h-6" />
                      <div className="text-gray-400 text-sm">Comp</div>
                    </div>
                    <div> {vaultComp.toLocaleString()}</div>
                  </div>

                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">Token Ratio</div>
                    <div> {tokenRatio.toLocaleString()}</div>
                  </div>
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">COMP Available for Withdrawal </div>
                    <div> {compForWithdrawal.toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">Fees</div>
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
                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">Reward Frequency</div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm  flex flex-row justify-between">
                    <div className="text-gray-400">COMP </div>
                    <div>Bi-Weekly</div>
                  </div>
                </div>
                <div className="text-2xl pt-4 border-b  border-gray-500 pb-2">Links</div>
                <div className="flex flex-col gap-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${COMP_VAULT_ADDRESS}`}
                    className="text-sm flex flex-row gap-4 items-center"
                  >
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Vault Address </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${COMP_WANT_ADDRESS}`}
                    className="text-sm flex flex-row gap-4 items-center"
                  >
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">Underlying Token </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/HumpysGold"
                    className="text-sm flex flex-row gap-4 items-center"
                  >
                    <img src={link} className="w-6 h-3"></img>
                    <div className="text-amber-300">GitHub </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[70%]">
              <div className="basis-full flex flex-col bg-gradient-to-b from-[#28534f] to-[#222739] rounded-xl p-6 gap-4 shadow">
                <div className="pb-2 press-start-2p border-b border-b-[#60d09a] text-2xl text-center">PERFORMANCE</div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col md:w-[60%]">
                    <div className="press-start-2p text-center border-b border-gray-500 p-2">Strategy Summary</div>
                    <div className="flex flex-col">
                      <div className="text-gray-400 pt-4">
                        The GoldCOMP vault allows people to earn passive income (~7% APR) on their Compound (COMP) tokens.
                      </div>
                      <br />
                      <div className=" text-gray-400">
                        Users begin by depositing COMP into the GoldCOMP smart contract, which in turn issues them GoldCOMP tokens. These
                        tokens represent their stake in the system. The COMP voting power associated with these tokens is then delegated to
                        the smart contract itself and managed by the GoldenBoys multi-sig. Subsequent deposits incrementally refresh the
                        delegation of COMP tokens to maintain voting power within the system.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:w-[40%]">
                    <div className="text-center border-b border-gray-500 p-2 flex flex-row justify-between mb-6 ">
                      <div className="press-start-2p">APY</div>
                      <div className=""> 0.00%</div>
                    </div>
                    <div className="text-center border-b border-gray-500 p-2 flex flex-row justify-between ">
                      <div className="press-start-2p">Liquidity</div>
                    </div>
                    <div className="text-sm  pt-4 flex flex-row justify-between">
                      <div className="text-gray-400">COMP Available for Withdrawal </div>
                      <div> {compForWithdrawal.toLocaleString()}</div>
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
                          walletComp > 0 ? 'text-white' : 'text-gray-500'
                        } border-2 border-[#428f74] bg-[#2a2e40] rounded-md py-3 w-full text-center cursor-pointer`}
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
                        className="border-2 border-[#428f74] bg-[#2a2e40] rounded-md py-3 w-full text-center cursor-pointer"
                      >
                        WITHDRAW
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={goldCompVault} alt="goldComp" className="basis-full w-full" width={400} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default VaultComp;
