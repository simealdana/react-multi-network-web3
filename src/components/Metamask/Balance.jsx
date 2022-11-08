import { useBalance } from 'wagmi'
 
function Balance({address,chainId}) {
  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
    chainId
  })
  console.log(data)
  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>
  return (
    <div>
      Balance: {data?.formatted} {data?.symbol}
    </div>
  )
}

export default  Balance;