import { Address, maxUint256 } from 'viem';
import { erc20ABI, useAccount, useBalance, useContractRead, usePrepareContractWrite } from 'wagmi';
import { auraVaultAbi } from '../contracts';
export const AURA_VAULT_ADDRESS = '0x6E03C53b03c9Ec12D8EEC6c4BF43E647426DD3C5' as Address;
export const AURA_WANT_ADDRESS = '0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF' as Address;
export const AURA_STRATEGY_ADDRESS = '0x0f57aE830120fBA149A4D922a9A0064de9755a5d' as Address;

export const useAuraDepositConfig = (amount: string, action: 'withdraw' | 'deposit') => {
  return usePrepareContractWrite({
    abi: auraVaultAbi,
    address: AURA_VAULT_ADDRESS,
    functionName: 'deposit',
    enabled: action === 'deposit',
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useAuraWithdrawConfig = (amount: string, action: 'withdraw' | 'deposit') => {
  return usePrepareContractWrite({
    abi: auraVaultAbi,
    address: AURA_VAULT_ADDRESS,
    functionName: 'withdraw',
    enabled: action === 'withdraw',
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useAuraApproveConfig = () => {
  return usePrepareContractWrite({
    abi: erc20ABI,
    address: AURA_WANT_ADDRESS,
    functionName: 'approve',
    args: [AURA_VAULT_ADDRESS, maxUint256],
  });
};

export const useAuraAllowance = () => {
  const { address } = useAccount();
  return useContractRead({
    address: AURA_WANT_ADDRESS,
    abi: erc20ABI,
    functionName: 'allowance',
    enabled: !!address,
    watch: true,
    args: [address as Address, AURA_VAULT_ADDRESS],
  });
};

export const useAuraRatio = () => {
  return useContractRead({
    address: AURA_VAULT_ADDRESS,
    abi: auraVaultAbi,
    functionName: 'getPricePerFullShare',
  });
};

export const useWalletAura = () => {
  const { address } = useAccount();
  return useBalance({
    token: AURA_WANT_ADDRESS,
    address,
    watch: true,
  });
};

export const useWalletGoldAura = () => {
  const { address } = useAccount();
  return useBalance({
    token: AURA_VAULT_ADDRESS,
    address,
    watch: true,
  });
};

export const useVaultAura = () => {
  return useContractRead({
    address: AURA_VAULT_ADDRESS,
    abi: auraVaultAbi,
    functionName: 'balance',
  });
};

export const useTotalAuraForWithdrawal = () => {
  const { data: vaultAuraBalance } = useBalance({
    token: AURA_WANT_ADDRESS,
    address: AURA_VAULT_ADDRESS,
    watch: true,
  });
  const { data: strategyAuraBalance } = useBalance({
    token: AURA_WANT_ADDRESS,
    address: AURA_STRATEGY_ADDRESS,
    watch: true,
  });
  if (!vaultAuraBalance || !strategyAuraBalance) return 0;
  return Number(vaultAuraBalance.formatted) + Number(strategyAuraBalance.formatted);
};
