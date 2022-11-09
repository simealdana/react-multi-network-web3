import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import Metamask from "./components/Metamask";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { HandleSmartContract } from "./components/Tezos/HandleSmartContract";

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, chain.goerli, chain.polygonMumbai],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});
const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";

const App = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://ghostnet.ecadinfra.com")
  );
  const [contract, setContract] = useState<any>(undefined);
  const [publicToken, setPublicToken] = useState<string | null>(null);
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  const [isTezos, setIsTezos] = useState<boolean>(false);
  const [storage, setStorage] = useState<number>(0);
  return (
    <WagmiConfig client={client}>
      <div className="select-network-container">
        <button
          className={`button ${isTezos ? "button-active" : ""}`}
          onClick={() => setIsTezos(true)}
        >
          Tezos
        </button>
        <button
          className={`button ${!isTezos ? "button-active" : ""}`}
          onClick={() => setIsTezos(false)}
        >
          ETH/Polygon
        </button>
      </div>
      <div>
        {beaconConnection && isTezos && (
          <HandleSmartContract
            tezos={Tezos}
            userAddress={userAddress}
            contract={contract}
            userBalance={userBalance}
            setUserAddress={setUserAddress}
            storage={storage}
            setStorage={setStorage}
          />
        )}
      </div>
      <div className="main-container">
        <div className="tezos-container">
          <div className="tezos-buttons">
            {!beaconConnection ? (
              <ConnectButton
                Tezos={Tezos}
                setPublicToken={setPublicToken}
                setWallet={setWallet}
                setUserAddress={setUserAddress}
                setUserBalance={setUserBalance}
                setBeaconConnection={setBeaconConnection}
                wallet={wallet}
                setContract={setContract}
                contractAddress={contractAddress}
                setStorage={setStorage}
              />
            ) : (
              <DisconnectButton
                wallet={wallet}
                setPublicToken={setPublicToken}
                setUserAddress={setUserAddress}
                setUserBalance={setUserBalance}
                setWallet={setWallet}
                setTezos={setTezos}
                setBeaconConnection={setBeaconConnection}
              />
            )}
          </div>
          <p>Status: {beaconConnection ? "Connected" : "Disconnected"}</p>
          <p>Address: {userAddress && userAddress}</p>
          <p>Balance: {userBalance && userBalance}</p>
        </div>
        <Metamask />
      </div>
    </WagmiConfig>
  );
};

export default App;
