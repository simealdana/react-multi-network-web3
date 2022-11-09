import React, { useState } from "react";
import Transfers from "./Transfers";
import UpdateContract from "./UpdateContract";

export const HandleSmartContract = ({
  tezos,
  userAddress,
  contract,
  userBalance,
  setUserBalance,
  storage,
  setStorage,
}: any) => {
  const [activeTab, setActiveTab] = useState<string>("contract");

  // Ghostnet Increment/Decrement contract
  const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";
  return (
    <div className="main-box">
      <div id="tabs">
        <div
          id="transfer"
          className={activeTab === "transfer" ? "active" : ""}
          onClick={() => setActiveTab("transfer")}
        >
          Make a transfer
        </div>
        <div
          id="contract"
          className={activeTab === "contract" ? "active" : ""}
          onClick={() => setActiveTab("contract")}
        >
          Interact with a contract
        </div>
      </div>
      <div id="dialog">
        <div id="content">
          {activeTab === "transfer" ? (
            <div id="transfers">
              <h3 className="text-align-center">Make a transfer</h3>
              <Transfers
                Tezos={tezos}
                setUserBalance={setUserBalance}
                userAddress={userAddress}
              />
            </div>
          ) : (
            <div id="increment-decrement">
              <h3 className="text-align-center">
                Current counter: <span>{storage}</span>
              </h3>
              <UpdateContract
                contract={contract}
                setUserBalance={setUserBalance}
                Tezos={tezos}
                userAddress={userAddress}
                setStorage={setStorage}
              />
            </div>
          )}
          <p>
            <i className="far fa-file-code"></i>&nbsp;
            <a
              href={`https://better-call.dev/ghostnet/${contractAddress}/operations`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contractAddress}
            </a>
          </p>
          <p>
            <i className="far fa-address-card"></i>&nbsp; {userAddress}
          </p>
          <p>
            <i className="fas fa-piggy-bank"></i>&nbsp;
            {(userBalance / 1000000).toLocaleString("en-US")} ꜩ
          </p>
        </div>
      </div>
    </div>
  );
};
