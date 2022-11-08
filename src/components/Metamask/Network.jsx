import { useNetwork } from 'wagmi'
import Balance from './Balance';
 const ADDRESS = '0x853FBBFbA2c384E9052fF3CC76e97806F262F340';
function Network() {
  const { chain, chains } = useNetwork()
 
  return (
    <>
      {chain && <div>Connected to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )}
      {chain && <Balance address={ADDRESS} chainId={chain.id}/>}
    </>
  )
}

export default Network;