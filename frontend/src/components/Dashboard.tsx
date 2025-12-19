import {useState} from 'react'; 
import { useWeb3Data } from '../hooks/useWeb3Data';

interface DashboardProps { 
    address: `0x${string}`,
}


const Dashboard = ({address}: DashboardProps):any => { 
    const {    balance, 
        nfts, 
        transactionCount, 
        isLoading, 
        error } = useWeb3Data({address, enabled: true })

        if(isLoading == true) { 
            return <div>Загрузка...</div>
        }

        if(error !== null ) { 
            return <div>Ошибка</div>
        }
        const weiToEth = (wei: bigint) => { 
            return Number(wei) / 1e18
        }

        return( 
        <>
            <div style ={{padding: '20px'}}>
             <h2>Dashboard for {address.slice(0,10)}...</h2>

            <div style={{marginBottom: '20px'}}>
             <h3>Количесто транзакций...</h3>
             <p>{transactionCount || '0'}</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3>NFT ({nfts?.length || 0})</h3>
                {nfts && nfts.length > 0 ? (
                <ul>
                {nfts.map((nft, index) => (
                <li key={index}>{nft.name}</li>
                ))}
                </ul>
                ) : (
                <p>NFT не найдены</p>
                )}
                </div>
            </div>           
        </>
        )
    }
export default Dashboard