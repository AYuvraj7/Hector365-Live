# Hector365 — Deploy करने के Steps (Vercel पर, free)

ये version पहले वाले से बेहतर है क्योंकि:
- API key safely server पर रहती है (browser में कभी नहीं दिखती)
- Daily limit feature असली website में भी काम करता है (localStorage से)

## Step 1: Anthropic API Key लें
1. https://console.anthropic.com पर जाएं, account बनाएं
2. "API Keys" section में जाकर एक नई key बनाएं
3. उसे कहीं safe जगह copy कर लें (ये एक बार ही पूरी दिखती है)

## Step 2: Code को GitHub पर डालें
1. GitHub पर एक नई repository बनाएं (जैसे `hector365`)
2. इस पूरे folder का content उस repository में upload करें — सारी files (package.json, src/, api/, index.html, सब कुछ)

## Step 3: Vercel से Deploy करें
1. https://vercel.com पर जाएं, GitHub account से login करें
2. "Add New Project" पर क्लिक करें, अपनी `hector365` repository चुनें
3. Deploy करने से पहले, **Environment Variables** section में जाकर ये जोड़ें:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (वो key जो आपने Step 1 में ली थी)
4. "Deploy" बटन दबाएं

कुछ मिनट में आपकी website live हो जाएगी, एक link मिलेगा जैसे `hector365.vercel.app`

## Step 4: टेस्ट करें
- Website खोलें, कोई सवाल पूछकर देखें
- अगर "Server error" आए, तो environment variable का नाम (`ANTHROPIC_API_KEY`) ध्यान से check करें — exactly ऐसा ही होना चाहिए

## बदलाव करने हों तो (भविष्य में)
- Code में कुछ बदलें → GitHub पर push करें → Vercel अपने आप फिर से deploy कर देगा (automatic)
- Daily limit बदलनी हो → `src/App.jsx` में `DAILY_LIMIT` value बदलें

## ध्यान रखें
- हर message पर थोड़ा सा cost लगेगा (Anthropic की तरफ से, आपके account से जुड़ा हुआ)
- Vercel का free (Hobby) plan non-commercial use के लिए है — अगर आप customers से पैसे लेना शुरू करें, बाद में Pro plan ($20/month) पर जाना पड़ सकता है
