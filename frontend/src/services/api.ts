export const fetchNFT = async (address: string): Promise<any[]> => {
    // Временная заглушка - вернем тестовые данные
    console.log('Fetching NFTs for', address);
    return [
      { id: '1', name: 'Test NFT 1', image: '...', collection: 'Test Collection' },
      { id: '2', name: 'Test NFT 2', image: '...', collection: 'Test Collection' }
    ];
  };
  
  export const fetchTransaction = async (address: string): Promise<any[]> => {
    console.log('Fetching transactions for', address);
    return [
      { hash: '0x123...', value: '0.1 ETH', timestamp: '2024-01-01' },
      { hash: '0x456...', value: '0.2 ETH', timestamp: '2024-01-02' }
    ];
  };