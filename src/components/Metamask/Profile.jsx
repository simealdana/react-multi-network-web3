import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function Profile() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect({
    onSuccess(data) {
      console.log("Success", data);
    },
    onMutate(args) {
      console.log("Mutate", args);
    },
    onError(error) {
        console.log('Error', error)
    },
  });

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <br/>
        <button className="button" onClick={() => disconnect()}><i className="fas fa-times"></i>&nbsp; Disconnect wallet</button>
      </div>
    );
  return <button className="button" onClick={() => connect()}>Connect Wallet</button>;
}

export default Profile;
