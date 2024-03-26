import { Address, maxUint256 } from 'viem';
import { erc20ABI, useAccount, useBalance, useContractRead, usePrepareContractWrite } from 'wagmi';
import { compVaultAbi } from '../contracts';
export const COMP_VAULT_ADDRESS = '0x939CED8875d1Cd75D8b9aca439e6526e9A822A48' as Address;
export const COMP_WANT_ADDRESS = '0xc00e94Cb662C3520282E6f5717214004A7f26888' as Address;
export const COMP_STRATEGY_ADDRESS = '0x0f57aE830120fBA149A4D922a9A0064de9755a5d' as Address;

export const useCompDepositConfig = (amount: string, action: 'withdraw' | 'deposit') => {
  return usePrepareContractWrite({
    abi: compVaultAbi,
    address: COMP_VAULT_ADDRESS,
    functionName: 'deposit',
    enabled: action === 'deposit',
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useCompWithdrawToQueueConfig = (amount: string, action: 'withdraw' | 'deposit') => {
  return usePrepareContractWrite({
    abi: compVaultAbi,
    address: COMP_VAULT_ADDRESS,
    functionName: 'queueWithdraw',
    enabled: action === 'withdraw',
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useCompWithdrawFromQueueConfig = (action: 'withdraw' | 'deposit') => {
  return usePrepareContractWrite({
    abi: compVaultAbi,
    address: COMP_VAULT_ADDRESS,
    functionName: 'withdraw',
    enabled: action === 'withdraw',
  });
};

export const useCompApproveConfig = () => {
  return usePrepareContractWrite({
    abi: erc20ABI,
    address: COMP_WANT_ADDRESS,
    functionName: 'approve',
    args: [COMP_VAULT_ADDRESS, maxUint256],
  });
};

export const useCompAllowance = () => {
  const { address } = useAccount();
  return useContractRead({
    address: COMP_WANT_ADDRESS,
    abi: erc20ABI,
    functionName: 'allowance',
    enabled: !!address,
    watch: true,
    args: [address as Address, COMP_VAULT_ADDRESS],
  });
};

export const useCompRatio = () => {
  // return useContractRead({
  //   address: COMP_VAULT_ADDRESS,
  //   abi: compVaultAbi,
  //   functionName: 'getPricePerFullShare',
  // });
  return { data: 1e18 };
};

export const useWalletComp = () => {
  const { address } = useAccount();
  return useBalance({
    token: COMP_WANT_ADDRESS,
    address,
    watch: true,
  });
};

export const useWalletGoldComp = () => {
  const { address } = useAccount();
  return useBalance({
    token: COMP_VAULT_ADDRESS,
    address,
    watch: true,
  });
};

export const useVaultComp = () => {
  return useContractRead({
    address: COMP_WANT_ADDRESS,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [COMP_VAULT_ADDRESS],
  });
};

export const useTotalCompForWithdrawal = () => {
  const { data: vaultCompBalance } = useBalance({
    token: COMP_WANT_ADDRESS,
    address: COMP_VAULT_ADDRESS,
    watch: true,
  });
  // const { data: strategyCompBalance } = useBalance({
  //   token: COMP_WANT_ADDRESS,
  //   address: COMP_STRATEGY_ADDRESS,
  //   watch: true,
  // });
  if (!vaultCompBalance) return 0;
  return Number(vaultCompBalance.formatted);
};
