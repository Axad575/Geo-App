# Firebase Configuration Guide

## 🔧 Setup Instructions

### 1. Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your actual Firebase credentials from [Firebase Console](https://console.firebase.google.com)

### 2. Security Features
- ✅ API keys stored in environment variables
- ✅ .env.local excluded from git repository
- ✅ Error handling for missing configuration
- ✅ Client-side analytics initialization

### 3. Configuration Validation
The app will automatically check if all required Firebase environment variables are present and throw an error if any are missing.

### 4. Firebase Services Used
- **Authentication** - User login/registration
- **Firestore Database** - Data storage
- **Analytics** - Usage tracking (optional)

### 5. Development
After updating .env.local, restart your development server:
```bash
npm run dev
```

### 6. Production Deployment
For production, set these environment variables in your hosting platform (Vercel, Netlify, etc.):
- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID
- NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

## 🚨 Important Notes
- Never commit .env.local to version control
- All client-side environment variables must start with `NEXT_PUBLIC_`
- Firebase config is safe to expose on the client side (it's designed to be public)