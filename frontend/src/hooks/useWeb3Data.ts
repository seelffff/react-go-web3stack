import { useQuery } from "@tanstack/react-query";
import { fetchNFT, fetchTransaction} from '../services/api.ts'
import { fetchEthBalance, fetchTransactionCount } from "../services/web3.ts";

interface UseWeb3DataProps { 
    address: `0x${string}`, 
    enabled: boolean
}

export const useWeb3Data = ({address, enabled}: UseWeb3DataProps) => { 
    //
    const balanceQuery = useQuery({
        queryKey: ['balance', address],
        queryFn: ()=> fetchEthBalance(address),
        enabled
    })

    const nftsQuery = useQuery({
        queryKey: ['nfts', address], 
        queryFn: () => fetchNFT(address),
        enabled
    })
    const txCountQuery = useQuery({
        queryKey: ['txCount', address],
        queryFn: () => fetchTransactionCount(address),
        enabled
      });

      return {
        balance: balanceQuery.data,
        nfts: nftsQuery.data,
        transactionCount: txCountQuery.data,
        isLoading: balanceQuery.isLoading || nftsQuery.isLoading,
        error: balanceQuery.error || nftsQuery.error
      };
}