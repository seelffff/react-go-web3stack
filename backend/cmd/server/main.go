package main

import (
	"log"

	"github.com/joho/godotenv"
)

func main() { 
	if err := godotenv.Load(); err != nil { 
		log.Println("Warning: No .env file found")
	}
	log.Println("Web3 Dashboard Backend starting...")

	log.Println("Server started successfully")
}

