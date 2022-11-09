import { useAccount } from "wagmi";

function Account() {
  const { isConnecting, isDisconnected, status } = useAccount();

  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Status: {status}</div>;
}

export default Account;
