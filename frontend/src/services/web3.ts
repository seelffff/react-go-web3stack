import {createPublicClient, http, isAddress} from 'viem'; 
import {mainnet} from 'viem/chains'


const client = createPublicClient({
    chain: mainnet,
    transport: http('https://mainnet.infura.io/v3/943ab03f63fb4ad8bd4aea35f3d45db2')
})

export default function validationAddress(address: string): boolean{ 
    if(!isAddress(address)) return false; 
    return true
}

export const fetchEthBalance = async(address: `0x${string}`) : Promise<any> => { 
    const balance = await client.getBalance({address});
    return balance; // in wei
}

export const fetchTransactionCount = async(address : `0x${string}`): Promise<any> => { 
    return await client.getTransactionCount({address});
}
