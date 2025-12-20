package services

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"os"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

type EthereumService struct { 
	client *ethclient.Client
}

func NewEthereumService() (*EthereumService,error) { 
	infuraKey:= os.Getenv("INFURA_API_KEY")
	if infuraKey == "" { 
		return nil, fmt.Errorf("INFURA_API_KEY not set in .env")
	}
	client, err := ethclient.Dial(fmt.Sprintf("https://mainnet.infura.io/v3/%s", infuraKey))

	if err != nil {
		return nil, fmt.Errorf("failed to connect to Ethereum: %w", err)
	}

	log.Println("Connected to Ethereum network")
	return &EthereumService{client: client}, nil
}

func (s *EthereumService) GetBalance(ctx context.Context, address string) (*big.Int, error) {
	addr:= common.HexToAddress(address)
	return s.client.BalanceAt(ctx,addr,nil)
}

func (s *EthereumService) GetTransactionCount (ctx context.Context, address string) (uint64, error) { 
	addr := common.HexToAddress(address)
	return s.client.NonceAt(ctx, addr, nil)
}
