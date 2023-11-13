import { Address, maxUint256 } from "viem";
import { vaultAbi } from "./vaultAbi";
import {
  erc20ABI,
  useAccount,
  useBalance,
  useContractRead,
  usePrepareContractWrite,
} from "wagmi";
const VAULT_ADDRESS = "0x941F9ccF2443f77912A55d642E9e64BBaEAEaA0f" as Address;
const WANT_ADDRESS = "0x2C9E188d512f9d1139BA4AB8A6A6651482Bb3709" as Address;

export const useDepositConfig = (
  amount: string,
  action: "withdraw" | "deposit"
) => {
  return usePrepareContractWrite({
    abi: vaultAbi,
    address: VAULT_ADDRESS,
    functionName: "deposit",
    enabled: action === "deposit",
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useWithdrawConfig = (
  amount: string,
  action: "withdraw" | "deposit"
) => {
  return usePrepareContractWrite({
    abi: vaultAbi,
    address: VAULT_ADDRESS,
    functionName: "withdraw",
    enabled: action === "withdraw",
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useApproveConfig = () => {
  return usePrepareContractWrite({
    abi: erc20ABI,
    address: WANT_ADDRESS,
    functionName: "approve",
    args: [VAULT_ADDRESS, maxUint256],
  });
};

export const useAllowance = () => {
  const { address } = useAccount();
  return useContractRead({
    address: WANT_ADDRESS,
    abi: erc20ABI,
    functionName: "allowance",
    enabled: !!address,
    watch: true,
    args: [address as Address, VAULT_ADDRESS],
  });
};

export const useAuraRatio = () => {
  return useContractRead({
    address: VAULT_ADDRESS,
    abi: vaultAbi,
    functionName: "getPricePerFullShare",
  });
};

export const useWalletAura = () => {
  const { address } = useAccount();
  return useBalance({
    token: WANT_ADDRESS,
    address,
    watch: true,
  });
};

export const useWalletGoldAura = () => {
  const { address } = useAccount();
  return useBalance({
    token: VAULT_ADDRESS,
    address,
    watch: true,
  });
};

export const useVaultAura = () => {
  return useContractRead({
    address: VAULT_ADDRESS,
    abi: vaultAbi,
    functionName: "balance",
  });
};

export const useTotalAuraForWithdrawal = () => {
  return {
    data: 0,
  };
};
