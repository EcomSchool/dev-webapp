// app.js - Demo Web Application with Intentional Secrets
// WARNING: For educational purposes only - these are fake credentials

const express = require('express');
const mysql = require('mysql2');
const { S3Client } = require('@aws-sdk/client-s3');

const app = express();
const PORT = 3000;

// SECRET 1: Hardcoded AWS credentials
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EKJH7S9F
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXADFGJPIDFG

// SECRET 2: Database connection with hardcoded password
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'SuperSecret123!Admin',
    database: 'demo_db'
});

// SECRET 3: API key in comments
// Stripe API Key: sk_live_51H8xyzABCDEF123456789abcdefghijklmnopqrstuvwxyz

// SECRET 4: GitHub Personal Access Token
const GITHUB_TOKEN=ghp_EXAMPLE0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcd

// SECRET 5: JWT Secret
const JWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0dXNlciIsImlhdCI6MTcwMDAwMDAwMH0.sgnATUREEXAMPLE0123456789abcdef

// SECRET 6: Slack Webhook
const slackWebhook = 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX';

// SECRET 7: SendGrid API Key
const SENDGRID_API_KEY=SG.EXAMPLE0123456789abcdef.EXAMPLE0123456789abcdefEXAMPLE0123456789ab

// SECRET 8: Private key (RSA)
const privateKey = -----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDExAhkg877697JHGH9786976JGH80123456789ABCDEFGHijklmnopqrstuvwxyz0123456789ABCDEFGHijklmnopqrstuvwxyz0123456789ABCDE
-----END PRIVATE KEY-----

// SECRET 9: MongoDB connection string
const mongoURI = 'mongodb://dbuser:P@ssw0rd123@cluster0.mongodb.net/myapp?retryWrites=true';

// SECRET 10: Twilio credentials
const twilioConfig = {
    accountSid: 'AC1234567890abcdefghijklmnopqrstuv',
    authToken: '1234567890abcdefghijklmnopqrstuv'
};

// Routes
app.get('/', (req, res) => {
    res.send('Demo App - Secret Scanning Exercise');
});

app.get('/config', (req, res) => {
    // SECRET 11: Exposed in response
    res.json({
        apiKey: 'prod-api-key-xyz789-secret-do-not-commit',
        environment: 'production'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
