package db

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)
var Pool *pgxpool.Pool
func initDB() error{ 
	connString:= os.Getenv("DATABASE_URL")
	if connString =="" { 
		connString = "postgres://postgres:password@localhost:5432/web3dashboard"
	}

	config, err := pgxpool.ParseConfig(connString) 
	if err != nil { 
		return fmt.Errorf("failed to parse connection string: %w", err)
	}

	config.MaxConns = 10 
	config.MinConns = 2                     
	config.MaxConnLifetime = time.Hour      
	config.MaxConnIdleTime = 30 * time.Minute 
	config.HealthCheckPeriod = time.Minute

	ctx , cancel:= context.WithTimeout(context.Background(), 10 * time.Second)
	defer cancel()

	Pool, err = pgxpool.NewWithConfig(ctx, config)
	if err != nil { 
		return fmt.Errorf("failed to create connection pool: %w", err)
	} 
	log.Println("✅ Successfully connected to PostgreSQL database")

	return nil
}

func CloseDB() { 
	if Pool != nil { 
		Pool.Close()
		log.Println("Database connection pool closed")
	}
}