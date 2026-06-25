# Hector365 Poster Maker — बिना API, बिना payment

ये version पूरी तरह **free** है — कोई API key, कोई credits, कोई payment नहीं चाहिए। सिर्फ photo पर text डालकर poster बनाता है, सब कुछ browser में ही होता है।

## Deploy करने के Steps (GitHub Pages पर — आसान तरीका)

1. इस पूरे folder का content अपनी GitHub repository में upload करें (पुराना content हटा कर)
2. **ज़रूरी:** `vite.config.js` फाइल में देखें — `base: "/Hector365-Live/"` लिखा है। अगर आपकी repo का नाम अलग है, तो वो नाम यहां डालें (exactly वैसा ही, case-sensitive)
3. Repository की **Settings → Pages** में जाएं
4. "Build and deployment" के नीचे "Source" में चुनें: **GitHub Actions**
5. जैसे ही आप files upload करेंगे (commit होगा), ये `.github/workflows/deploy.yml` अपने आप website build करके publish कर देगा
6. कुछ मिनट बाद आपकी website लाइव हो जाएगी — same link पर जो पहले blank दिखता था

## इस्तेमाल कैसे करें
1. फोटो upload करें (अपने product/दुकान की)
2. Headline और subtext में अपना text लिखें
3. "Poster Download करें" दबाएं — PNG file डाउनलोड हो जाएगी, WhatsApp/Instagram पर share करने के लिए तैयार

## भविष्य में अगर AI features चाहिए हों
तब वापस उस backend+API key वाले version पर जा सकते हैं (जो पहले बनाया था) — उसके लिए सिर्फ Anthropic credits डालने और Vercel पर deploy करने का काम बाकी था।
