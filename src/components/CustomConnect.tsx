import { ConnectButton } from "@rainbow-me/rainbowkit";
function CustomConnect() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;
        return (
          <>
            {!mounted && (
              <div className="rounded-xl border-2 text-center border-black  font">
                Initalizing...
              </div>
            )}
            <div
              {...(!mounted && {
                "aria-hidden": true,
                className: "opacity-0 cursor-default select-none",
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      className="rounded-xl border-2 border-black text-2xl font bg-secondary p-2"
                      onClick={openConnectModal}
                      type="button"
                    >
                      Connect Wallet
                    </button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <button
                      className="rounded-xl border-2 border-black bg-gradient-to-b from-zinc-800/30 to-zinc-500/50 p-2 hover:bg-zinc-800/50 font"
                      onClick={openChainModal}
                      type="button"
                    >
                      Wrong network
                    </button>
                  );
                }
                return (
                  <div className="flex flex-col md:flex-row gap-4 font">
                    <button
                      onClick={openChainModal}
                      className="flex justify-center"
                      type="button"
                    >
                      <div className="flex space-x-2 rounded-xl border-2 border-black bg-secondary p-2 hover:bg-primary text-2xl">
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={20}
                            height={20}
                            style={{ objectFit: "contain" }}
                          />
                        )}
                        <div>{chain.name}</div>
                      </div>
                    </button>
                    <button
                      className="rounded-xl border-2 border-black bg-secondary hover:bg-primary px-3 py-2 text-2xl font"
                      onClick={openAccountModal}
                      type="button"
                    >
                      {account.displayName}
                    </button>
                  </div>
                );
              })()}
            </div>
          </>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default CustomConnect;
