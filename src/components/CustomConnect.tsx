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
              <div className="rounded-xl text-center roboto">
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
                      className="rounded-xl text-xl roboto p-1"
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
                      className="rounded-xl p-1 font"
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
                      <div className="flex space-x-2 rounded-xl p-1">
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
                      className="rounded-xl px-1 py-1"
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
