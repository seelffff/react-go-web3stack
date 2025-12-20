package models

type AddressBalance struct { 
	Address string `json: address`
	ETH string `json: "eth"`
	USD string `json: "usd, omitempty"`
}

type Transaction struct { 
	Hash      string `json:"hash"`
	From      string `json:"from"`
	To        string `json:"to"`
	Value     string `json:"value"`
	Timestamp int64  `json:"timestamp"`
}

type NFT struct {
	TokenID    string `json:"tokenId"`
	Name       string `json:"name"`
	ImageURL   string `json:"imageUrl,omitempty"`
	Collection string `json:"collection"`
}