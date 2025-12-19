package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() { 
	if err := godotenv.Load(); err != nil { 
		log.Println("Warning: No .env file found")
	}
	log.Println("Web3 Dashboard Backend starting...")

	log.Println("Server started successfully")

	port := os.Getenv("PORT")
	if port == "" { 
		port = "8080"
	}

	router := gin.Default(); 

	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		
		c.Next()
	})

	router.GET("/api/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok", 
			"message": "Web3 Dashboard API is running",
		})
	})

	log.Printf("Server starting on port %s", port)
	if err:= router.Run(":" + port); err != nil { 
		log.Fatal("Failed to start server:", err)
	}



//
}

