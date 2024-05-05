import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import comp from '../../assets/comp.png';
import goldCompLogo from '../../assets/goldCompLogo.png';
import goldCompVault from '../../assets/goldCompVault.png';
import link from '../../assets/link.svg';
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
        <div className="md:mx-20 mx-4 basis-full md:pt-0 mt-8">
          <div className="flex flex-col h-full overflow-hidden pb-8">
            <NavWithLogo />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={goldCompLogo} alt="comp" className="w-12 h-12" />
            <div className="press-start-2p text-2xl">goldCOMP Vault</div>
          </div>
          <div className="mt-8 flex md:flex-row flex-col md:gap-4 gap-6 pt-4 pb-12">
            <div className="flex flex-col w-full md:w-[30%] rounded-xl gap-6">
              <div className="flex flex-col bg-gradient-to-b from-[#28534f] to-[#222739] rounded-xl p-6 gap-4 shadow">
                <div className="press-start-2p text-sm py-3 border-b border-slate-500">Your deposit</div>
                <div className="flex flex-row gap-4 items-center">
                  <img src={goldCompLogo} alt="goldComp" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <div className="text-3xl">{totalDeposited.toFixed(2)}</div>
                    <div className="text-md text-slate-300">${totalDepositedUSD.toFixed(2)}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gradient-to-b from-[#28534f] to-[#222739] rounded-xl p-6 gap-4 shadow">
                <div className="press-start-2p text-sm py-3 border-b border-slate-500">Vault balance</div>
                <div className="flex flex-row gap-4 items-center">
                  <img src={comp} alt="comp" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <div className="text-3xl">{vaultComp.toFixed(2)} COMP</div>
                    <div className="text-md text-slate-300">${vaultCompUSD.toFixed(2)}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 bg-gradient-to-b from-[#28534f] to-[#222739] shadow rounded-xl">
                <div className="press-start-2p text-sm py-3 border-b border-slate-500">Links</div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${COMP_VAULT_ADDRESS}`}
                    className="text-sm flex flex-row gap-2.5 items-center"
                  >
                    <img src={link} className="h-2.5"></img>
                    <div className="text-amber-300">Vault Address</div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${COMP_WANT_ADDRESS}`}
                    className="text-sm flex flex-row gap-2.5 items-center"
                  >
                    <img src={link} className="h-2.5"></img>
                    <div className="text-amber-300">Underlying Token</div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/HumpysGold"
                    className="text-sm flex flex-row gap-2.5 items-center"
                  >
                    <img src={link} className="h-2.5"></img>
                    <div className="text-amber-300">GitHub</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[70%]">
              <div className="basis-full flex flex-col bg-gradient-to-b from-[#28534f] to-[#222739] rounded-xl p-6 gap-4 shadow">
                <div className="pb-2 press-start-2p border-b border-b-[#60d09a] text-2xl text-center">PERFORMANCE</div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col md:w-[60%]">
                    <div className="press-start-2p text-center border-b border-slate-500 p-2">Strategy Summary</div>
                    <div className="flex flex-col">
                      <div className="text-slate-300 pt-4">
                        The GoldCOMP vault allows people to earn passive income (~7% APR) on their Compound (COMP) tokens.
                      </div>
                      <br />
                      <div className="text-slate-300">
                        Users begin by depositing COMP into the GoldCOMP smart contract, which in turn issues them GoldCOMP tokens. These
                        tokens represent their stake in the system. The COMP voting power associated with these tokens is then delegated to
                        the smart contract itself and managed by the GoldenBoys multi-sig. Subsequent deposits incrementally refresh the
                        delegation of COMP tokens to maintain voting power within the system.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:w-[40%]">
                    <div className="text-center border-b border-slate-500 p-2 flex flex-row justify-between mb-6 ">
                      <div className="press-start-2p">APY</div>
                      <div className="">~10.00%</div>
                    </div>
                    <div className="text-center border-b border-slate-500 p-2 flex flex-row justify-between ">
                      <div className="press-start-2p">Actions</div>
                    </div>
                    <div className="mt-6 flex flex-col gap-4 justify-center items-center press-start-2p">
                      <button
                        type="button"
                        onClick={() => {
                          if (!isConnected) return openConnectModal?.();
                          setModalState(VAULT_MODAL.DEPOSIT);
                        }}
                        className="border-2 border-[#428f74] bg-[#2a2e40] text-slate-200 hover:text-white rounded-md py-3 w-full text-center uppercase"
                      >
                        Deposit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!isConnected) return openConnectModal?.();
                          setModalState(VAULT_MODAL.WITHDRAW);
                        }}
                        className="border-2 border-[#428f74] bg-[#2a2e40] text-slate-200 hover:text-white rounded-md py-3 w-full text-center uppercase"
                      >
                        Withdraw
                      </button>
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
