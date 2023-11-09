import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./routes/Home.tsx";
import "./index.css";
import { Why } from "./routes/Why.tsx";
import { Learn } from "./routes/Learn.tsx";
import Vault from "./routes/Vault.tsx";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "GoldAura",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    index: true,
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/why",
    element: <Why />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/vault",
    element: <Vault />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);
