import { useNetwork } from 'wagmi'
import Balance from './Balance';
import { useAccount } from "wagmi";

function Network() {
  const { chain, chains } = useNetwork()
  const { address} = useAccount()
  return (
    <>
      {chain && <div>Connected to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )}
      {chain && address && <Balance address={address} chainId={chain.id}/>}
    </>
  )
}

export default Network;