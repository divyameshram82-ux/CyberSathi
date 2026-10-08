// CyberSathi Interactive Tools, Voice Saathi AI Voice Chat & Quiz Controller
// Production Web Speech API Implementation (SpeechRecognition + SpeechSynthesis)

(function () {
  'use strict';

  const getQuizQuestions = () => window.quizQuestions || (window.CyberSathiData && window.CyberSathiData.quizQuestions) || [];
  const getGovernmentSchemes = () => window.governmentSchemes || (window.CyberSathiData && window.CyberSathiData.governmentSchemes) || [];
  const getVoiceScamRules = () => window.voiceScamRules || (window.CyberSathiData && window.CyberSathiData.voiceScamRules) || [];
  const getDefaultSafetyResponse = () => window.defaultSafetyResponse || (window.CyberSathiData && window.CyberSathiData.defaultSafetyResponse) || null;
  const getStore = () => window.Store || window.CyberSathiStore;
  const getLang = () => (typeof window.getLanguage === 'function' ? window.getLanguage() : 'en');

  let voiceLang = 'en-IN';
  let currentSpokenText = '';
  let recognition = null;
  let isListening = false;
  let shouldKeepListening = false;
  let sessionStartTime = 0;
  let finalTranscriptAcc = '';
  let interimTranscriptAcc = '';
  let silenceDebounceTimer = null;
  let maxSessionTimer = null;
  let voiceInitialized = false;
  let availableVoices = [];
  let hasVoiceActivity = false;

  let currentQuizIdx = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let lastChosenIdx = null;

  // Preload SpeechSynthesis voices cleanly for Chrome/Edge
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    const loadVoices = () => {
      availableVoices = window.speechSynthesis.getVoices() || [];
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  // Conversational & Hinglish/Marathi-Romanized Extended Keywords + Intents
  const EXTENDED_KEYWORDS = {
    otp_fraud: [
      'otp', 'one time password', 'pin', 'cvv', 'password', '6 digit', '4 digit', 'code', 'share code',
      'maang', 'mang', 'batao', 'puch', 'bank call', 'atm block', 'card block', 'account block',
      'ओटीपी', 'पिन', 'पासवर्ड', 'कोड', 'बैंक से कॉल', 'एटीएम ब्लॉक', 'कार्ड बंद', 'बँक कॉल'
    ],
    upi_fraud: [
      'upi', 'gpay', 'phonepe', 'paytm', 'bhim', 'collect request', 'receive money', 'enter pin', 'send money',
      'google pay', 'paise bhejne', 'paise milne', 'paise aane', 'pin dalo', 'pin टाका', 'पैसे मिळवण्यासाठी'
    ],
    qr_code_scam: [
      'qr', 'qr code', 'scan', 'scanner', 'barcode', 'olx', 'buyer', 'military', 'army officer', 'scan karke',
      'क्यूआर', 'स्कैन', 'स्कॅन', 'कोड स्कॅन'
    ],
    fake_kyc: [
      'kyc', 'pan card', 'aadhaar update', 'account suspended', 'account freeze', 'sim block', '24 hours',
      'केवाईसी', 'खाता बंद', 'पैन कार्ड', 'सिम बंद', 'आधार अपडेट'
    ],
    fake_customer_care: [
      'customer care', 'helpline', 'anydesk', 'teamviewer', 'rustdesk', 'screen share', 'google number', 'refund', 'courier',
      'कस्टमर केयर', 'हेल्पलाइन', 'एनीडेस्क', 'रिफंड', 'कूरियर', 'ग्राहक सेवा'
    ],
    phishing: [
      'phishing', 'fishing', 'phising', 'phishing attack', 'fishing attack', 'fake link', 'malicious link',
      'link', 'sms', 'electricity', 'power cut', 'bijli bill', 'light bill', 'mseb', 'msedcl', 'echallan', 'apk', 'click',
      'फिशिंग', 'फ़िशिंग', 'फिशिंग अटैक', 'बिजली बिल', 'कनेक्शन काट', 'लिंक', 'एसएमएस', 'वीज बिल', 'मेसेज'
    ],
    fake_job_scam: [
      'job', 'work from home', 'telegram', 'youtube like', 'rating task', 'part time', 'prepaid task', 'vip task', 'naukri',
      'नौकरी', 'टेलीग्राम', 'वर्क फ्रॉम होम', 'टास्क', 'नोकरी', 'काम'
    ],
    online_shopping_fraud: [
      'shopping', 'instagram store', '80% off', '90% off', 'iphone cheap', 'customs fee', 'delivery charge', 'cod',
      'शॉपिंग', 'सस्ता फोन', 'डिलीवरी', 'ऑर्डर', 'खरेदी'
    ],
    investment_scam: [
      'investment', 'stock', 'trading', 'crypto', 'double money', 'whatsapp group', 'ipo', 'guaranteed return', 'profit',
      'निवेश', 'शेयर बाजार', 'ट्रेडिंग', 'पैसे डबल', 'गुंतवणूक'
    ],
    whatsapp_social_scam: [
      'whatsapp', 'hacked', 'friend asking money', 'hospital emergency', 'video call blackmail', 'sextortion', 'morphed',
      'व्हाट्सएप', 'दोस्त ने पैसे', 'अस्पताल', 'ब्लैकमेल', 'व्हॉट्सॲप'
    ],
    digital_arrest_scam: [
      'digital arrest', 'arrest', 'cbi', 'police', 'ed ', 'narcotics', 'fedex', 'parcel', 'drugs', 'skype', 'supreme court', 'warrant', 'fir',
      'डिजिटल अरेस्ट', 'पुलिस', 'सीबीआई', 'पार्सल', 'ड्रग्स', 'गिरफ्तार', 'पोलीस', 'अटक'
    ],
    identity_theft: [
      'sim swap', 'no service', 'no network', 'aadhaar', 'biometric', 'thumb', 'aeps', 'fingerprint', 'identity',
      'सिम स्वैप', 'नेटवर्क गायब', 'अंगूठा', 'फिंगरप्रिंट', 'बायोमेट्रिक'
    ],
    loan_app_scam: [
      'loan', 'loan app', '7 day loan', 'blackmail', 'contact list', 'morphed photo', 'harassment', 'instant loan',
      'लोन', 'लोन ऐप', 'किस्त', 'ब्लैकमेल', 'कर्ज'
    ]
  };

  // Rich Context-Aware AI Victim-Recovery Solutions (Overrides static electricity/generic bullets when incident happened to user)
  const AI_DETAILED_RESPONSES = {
    phishing: {
      icon: '🎣',
      victimTitle: {
        en: 'Phishing Attack Happened — Immediate 5-Step Recovery Plan',
        hi: 'फिशिंग अटैक (Phishing Attack) हो गया है — तुरंत करें ये 5 समाधान',
        mr: 'फिशिंग अटॅक (Phishing Attack) झाला आहे — तात्काळ करा हे 5 उपाय'
      },
      victimReply: {
        en: 'Do not panic! Since a phishing attack has happened to you, follow this exact solution right now: Step 1: Immediately turn off your phone’s Mobile Data and Wi-Fi so the attacker cannot steal data from your device. Step 2: Check your apps and immediately uninstall any unknown APK file or app that got downloaded when you clicked the link. Step 3: Dial ##002# on your phone keypad to cancel any secret call or SMS forwarding set by hackers. Step 4: Using another safe phone or computer, change your Gmail, NetBanking, and social media passwords, and call your bank to block your UPI and ATM card. Step 5: If money was deducted, call National Cyber Helpline 1930 immediately and report at cybercrime.gov.in.',
        hi: 'घबराएं नहीं! यदि आपके साथ फिशिंग अटैक हो गया है, तो आपकी समस्या का तुरंत समाधान ये 5 कदम हैं: पहला—अपने फोन का इंटरनेट (Mobile Data और Wi-Fi) तुरंत बंद करें ताकि हैकर आपके फोन से जानकारी न चुरा सके। दूसरा—यदि लिंक पर क्लिक करने से कोई अनजान ऐप या APK फाइल डाउनलोड हुई है, तो उसे तुरंत डिलीट (Uninstall) करें। तीसरा—अपने फोन के डायलर से ##002# डायल करें ताकि यदि हैकर ने आपके OTP या कॉल फॉरवर्ड किए हों तो वे तुरंत बंद हो जाएं। चौथा—किसी दूसरे सुरक्षित फोन से अपने ईमेल व बैंक के पासवर्ड बदलें और बैंक को कॉल करके अपना UPI और डेबिट कार्ड ब्लॉक करवाएं। पांचवां—यदि पैसे कट गए हैं, तो तुरंत 1930 पर कॉल करें और cybercrime.gov.in पर शिकायत दर्ज करें।',
        mr: 'घाबरू नका! जर तुमच्यावर फिशिंग अटॅक झाला असेल, तर तात्काळ हे 5 उपाय करा: पहिले—तुमच्या फोनचे इंटरनेट (Mobile Data व Wi-Fi) ताबडतोब बंद करा. दुसरे—लिंकवर क्लिक केल्यामुळे कोणतेही अनोळखी APK ॲप डाऊनलोड झाले असल्यास ते लगेच डिलीट (Uninstall) करा. तिसरे—फोनवरून ##002# डायल करा जेणेकरून हॅकरने लावलेली कॉल किंवा SMS फॉरवर्डिंग बंद होईल. चौथे—दुसऱ्या सुरक्षित फोनवरून तुमचे ईमेल आणि बँक पासवर्ड बदला व बँकेला फोन करून UPI आणि कार्ड ब्लॉक करा. पाचवे—खात्यातून पैसे गेले असल्यास तात्काळ 1930 वर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
      },
      victimWarnings: {
        en: [
          'Phishing links steal login passwords, browser sessions, or silently install spyware APKs that read your banking OTPs.',
          'Attackers often enable SMS/Call forwarding so your bank OTPs go to their phone.',
          'Never use the same compromised phone to enter new passwords until unknown apps are removed.'
        ],
        hi: [
          'फिशिंग लिंक के जरिए हैकर्स आपका पासवर्ड चुरा लेते हैं या फोन में छुपा हुआ मैलवेयर (APK) इंस्टॉल कर देते हैं जो आपके बैंक OTP पढ़ लेता है।',
          'हैकर्स अक्सर आपके सिम पर कॉल/SMS फॉरवर्डिंग चालू कर देते हैं (इसे रोकने के लिए ##002# डायल करें)।',
          'जब तक अनजान ऐप डिलीट न कर दें, उसी फोन से नया पासवर्ड न डालें—दूसरे सुरक्षित फोन का उपयोग करें।'
        ],
        mr: [
          'फिशिंग लिंकद्वारे हॅकर्स तुमचे पासवर्ड चोरतात किंवा फोनमध्ये छुपे मालवेअर (APK) इन्स्टॉल करून बँक OTP वाचतात.',
          'हॅकर्स तुमचे कॉल/मेसेज फॉरवर्ड करू शकतात (ते बंद करण्यासाठी ##002# डायल करा).',
          'अनोळखी ॲप काढून टाकेपर्यंत त्याच फोनवरून नवीन पासवर्ड टाकू नका.'
        ]
      },
      victimActions: {
        en: [
          'STEP 1: Turn OFF Mobile Data & Wi-Fi immediately on your phone.',
          'STEP 2: Go to Settings → Apps and UNINSTALL any unknown app or APK downloaded recently.',
          'STEP 3: Dial ##002# on your phone dialer to erase any secret call/SMS forwarding.',
          'STEP 4: From a DIFFERENT safe device, change your Email, Bank, and Social Media passwords.',
          'STEP 5: Call your bank to block UPI/Cards and dial 1930 immediately if any money was deducted.'
        ],
        hi: [
          'कदम 1: अपने फोन का Mobile Data और Wi-Fi तुरंत बंद करें।',
          'कदम 2: फोन की Settings → Apps में जाएं और हाल ही में डाउनलोड हुए किसी भी अनजान ऐप (APK) को तुरंत Uninstall करें।',
          'कदम 3: अपने फोन से ##002# डायल करें ताकि हैकर द्वारा लगाई गई कॉल/SMS फॉरवर्डिंग तुरंत रद्द हो जाए।',
          'कदम 4: किसी दूसरे सुरक्षित फोन से अपने Gmail, बैंक नेटबैंकिंग और सोशल मीडिया का पासवर्ड तुरंत बदलें।',
          'कदम 5: अपने बैंक में कॉल करके UPI व एटीएम कार्ड ब्लॉक करवाएं और पैसे कटने पर तुरंत 1930 डायल करें व cybercrime.gov.in पर रिपोर्ट करें।'
        ],
        mr: [
          'पाऊल 1: आपल्या फोनचा Mobile Data आणि Wi-Fi तात्काळ बंद करा.',
          'पाऊल 2: फोनच्या Settings → Apps मध्ये जाऊन कोणतेही अनोळखी ॲप (APK) तात्काळ Uninstall करा.',
          'पाऊल 3: फोनवरून ##002# डायल करून सर्व कॉल/SMS फॉरवर्डिंग रद्द करा.',
          'पाऊल 4: दुसऱ्या सुरक्षित फोनवरून तुमचे ईमेल आणि बँकेचे पासवर्ड तात्काळ बदला.',
          'पाऊल 5: बँकेला कॉल करून UPI/कार्ड ब्लॉक करा आणि पैसे कटले असल्यास तात्काळ 1930 डायल करा.'
        ]
      }
    },
    otp_fraud: {
      icon: '🔐',
      victimTitle: {
        en: 'OTP / PIN Shared — Urgent Golden Hour Recovery Solution',
        hi: 'OTP या PIN साझा हो गया — तुरंत पैसे बचाने के 5 कदम (Golden Hour)',
        mr: 'OTP किंवा PIN शेअर झाला — पैसे वाचवण्यासाठी तातडीचे 5 उपाय'
      },
      victimReply: {
        en: 'Urgent Action! Since you shared your OTP or faced an OTP scam, act within the Golden Hour right now: Step 1: Immediately dial 1930 so the Government of India I4C system can freeze the scammer’s bank account before they cash out. Step 2: Call your bank helpline immediately to block your UPI, NetBanking, and Debit/Credit Card. Step 3: Save the 12-digit UTR transaction number and SMS alerts as evidence, and file a report at cybercrime.gov.in.',
        hi: 'तुरंत कदम उठाएं! यदि आपके साथ OTP धोखाधड़ी हुई है या आपने OTP बता दिया है, तो अभी तुरंत ये काम करें: पहला—बिना एक मिनट गंवाए अपने फोन से 1930 डायल करें ताकि सरकार का I4C सिस्टम ठग के बैंक खाते को तुरंत फ्रीज (Hold) कर सके। दूसरा—अपने बैंक के कस्टमर केयर पर कॉल करके अपना UPI, नेट बैंकिंग और एटीएम कार्ड तुरंत ब्लॉक करवाएं। तीसरा—12 अंकों का UTR ट्रांजैक्शन नंबर और SMS संभाल कर रखें और cybercrime.gov.in पर शिकायत दर्ज करें।',
        mr: 'तातडीने कृती करा! जर तुमची OTP फसवणूक झाली असेल किंवा तुम्ही OTP दिला असेल, तर आत्ताच 1930 या हेल्पलाइनवर कॉल करा जेणेकरून I4C प्रणाली भामट्याचे बँक खाते गोठवू शकेल. दुसरे—बँकेला फोन करून तुमचे UPI, नेट बँकिंग आणि एटीएम कार्ड तात्काळ ब्लॉक करा. तिसरे—cybercrime.gov.in वर तक्रार नोंदवा.'
      },
      victimWarnings: {
        en: [
          'The first 1 to 2 hours (Golden Hour) are critical—reporting to 1930 allows banks to put a lien/freeze on the fraudster’s account.',
          'Do not trust anyone calling you later claiming they can "refund" your money if you share another OTP.'
        ],
        hi: [
          'धोखाधड़ी के बाद के पहले 1 से 2 घंटे (Golden Hour) सबसे महत्वपूर्ण हैं—इस दौरान 1930 पर कॉल करने से आपके पैसे ठग के खाते में ही फ्रीज हो सकते हैं।',
          'पैसे वापस दिलाने के नाम पर अगर दोबारा कोई कॉल करके OTP या फीस मांगे, तो सावधान रहें—वह भी ठग है।'
        ],
        mr: [
          'फसवणूक झाल्यानंतरचे पहिले 1 ते 2 तास (Golden Hour) अत्यंत महत्त्वाचे असतात—या वेळेत 1930 वर कॉल केल्यास पैसे गोठवता येतात.',
          'पैसे परत मिळवून देण्याच्या नावाखाली पुन्हा कोणी OTP मागितल्यास अजिबात देऊ नका.'
        ]
      },
      victimActions: {
        en: [
          'STEP 1: Dial 1930 immediately (National Cyber Crime Helpline) and provide the transaction time & amount.',
          'STEP 2: Call your Bank’s 24x7 Fraud Helpline to block your Debit Card, Credit Card, UPI, and NetBanking.',
          'STEP 3: Note down the 12-digit UTR / Reference Number from your bank SMS.',
          'STEP 4: File an official complaint at cybercrime.gov.in and submit a written dispute form at your bank branch.'
        ],
        hi: [
          'कदम 1: तुरंत अभी 1930 (राष्ट्रीय साइबर हेल्पलाइन) पर कॉल करें और ट्रांजैक्शन का समय व राशि बताएं।',
          'कदम 2: अपने बैंक की 24x7 हेल्पलाइन पर कॉल करके अपना ATM कार्ड, क्रेडिट कार्ड, UPI और नेटबैंकिंग तुरंत ब्लॉक करवाएं।',
          'कदम 3: बैंक के पैसे कटने वाले SMS में दिया गया 12 अंकों का UTR / Reference नंबर नोट कर लें।',
          'कदम 4: cybercrime.gov.in पर ऑनलाइन शिकायत दर्ज करें और अपनी बैंक शाखा में जाकर लिखित शिकायत दें।'
        ],
        mr: [
          'पाऊल 1: तात्काळ 1930 या राष्ट्रीय हेल्पलाइनवर कॉल करा आणि व्यवहाराचा तपशील द्या.',
          'पाऊल 2: बँकेच्या हेल्पलाइनवर फोन करून ATM कार्ड, UPI आणि नेटबँकिंग ब्लॉक करा.',
          'पाऊल 3: बँक मेसेजमधील 12 अंकी UTR क्रमांक जपून ठेवा.',
          'पाऊल 4: cybercrime.gov.in वर तक्रार नोंदवा आणि बँक शाखेत लेखी अर्ज द्या.'
        ]
      }
    },
    upi_fraud: {
      icon: '💳',
      victimTitle: {
        en: 'UPI Fraud Happened — Immediate Recovery & Dispute Steps',
        hi: 'UPI फ्रॉड हो गया है — पैसे वापस पाने और शिकायत के तुरंत कदम',
        mr: 'UPI फसवणूक झाली आहे — पैसे परत मिळवण्यासाठी तातडीचे उपाय'
      },
      victimReply: {
        en: 'If a UPI fraud happened to you: Step 1: Open your GPay, PhonePe, or Paytm history and copy the 12-digit UPI Transaction ID (UTR). Step 2: Immediately dial 1930 and give them this UTR number so the recipient bank account is frozen. Step 3: Report the transaction in your UPI app’s Help section and ask your bank to block your UPI ID temporarily.',
        hi: 'यदि आपके साथ UPI फ्रॉड हो गया है, तो तुरंत ये समाधान करें: पहला—अपने PhonePe, Google Pay या Paytm की हिस्ट्री खोलें और 12 अंकों का UTR ट्रांजैक्शन नंबर नोट करें। दूसरा—तुरंत 1930 पर कॉल करें और ऑपरेटर को यह UTR नंबर बताएं ताकि जिस खाते में पैसा गया है उसे तुरंत फ्रीज किया जा सके। तीसरा—अपने UPI ऐप के Help सेक्शन में जाकर "Report a Problem" करें और अपने बैंक को कॉल करके UPI ब्लॉक करवाएं।',
        mr: 'जर तुमची UPI फसवणूक झाली असेल, तर तात्काळ हे उपाय करा: पहिले—तुमच्या PhonePe किंवा GPay मधून 12 अंकी UTR ट्रान्झॅक्शन नंबर घ्या. दुसरे—तात्काळ 1930 वर कॉल करून हा UTR नंबर सांगा जेणेकरून समोरच्याचे बँक खाते गोठवले जाईल. तिसरे—UPI ॲपमध्ये तक्रार नोंदवा आणि बँकेमार्फत UPI तात्पुरते बंद करा.'
      },
      victimActions: {
        en: [
          'STEP 1: Copy the 12-digit UTR number from your PhonePe / GPay / Paytm transaction receipt.',
          'STEP 2: Dial 1930 immediately so the I4C system can freeze the receiver’s bank account.',
          'STEP 3: Tap "Having Issues / Report Fraud" inside your UPI app for that transaction.',
          'STEP 4: File a dispute on the NPCI portal (npci.org.in → UPI Dispute Redressal) and cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: अपने PhonePe, GPay या Paytm की रसीद से 12 अंकों का UTR नंबर तुरंत नोट करें।',
          'कदम 2: तुरंत 1930 डायल करें और UTR नंबर बताएं ताकि ठग का बैंक खाता फ्रीज हो सके।',
          'कदम 3: अपने UPI ऐप में उस ट्रांजैक्शन पर क्लिक करके "Report Fraud / Help" में शिकायत दर्ज करें।',
          'कदम 4: cybercrime.gov.in और NPCI के पोर्टल (npci.org.in) पर अपनी शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: PhonePe, GPay किंवा Paytm मधून 12 अंकी UTR क्रमांक नोट करा.',
          'पाऊल 2: तात्काळ 1930 वर कॉल करून UTR क्रमांक सांगा जेणेकरून समोरच्याचे खाते गोठवता येईल.',
          'पाऊल 3: तुमच्या UPI ॲपमधील Help सेक्शनमध्ये जाऊन तक्रार नोंदवा.',
          'पाऊल 4: cybercrime.gov.in आणि npci.org.in वर अधिकृत तक्रार करा.'
        ]
      }
    },
    qr_code_scam: {
      icon: '▦',
      victimTitle: {
        en: 'QR Code Scam Happened — Immediate Recovery Solution',
        hi: 'QR कोड स्कैन से पैसे कट गए — तुरंत करें ये समाधान',
        mr: 'QR कोड स्कॅनमुळे पैसे कटले — तात्काळ करा हे उपाय'
      },
      victimReply: {
        en: 'Remember, scanning a QR code always sends money out of your account. Since money was deducted by scanning a QR code, immediately call 1930 within the Golden Hour with your 12-digit UPI UTR number to freeze the scammer’s account, and block further UPI requests.',
        hi: 'याद रखें, QR कोड स्कैन करने से पैसे हमेशा खाते से कटते हैं। यदि QR कोड स्कैन करने से आपके पैसे कट गए हैं, तो तुरंत अभी 1930 पर कॉल करें और 12 अंकों का UTR ट्रांजैक्शन नंबर बताएं ताकि ठग का बैंक खाता फ्रीज किया जा सके। दोबारा कोई भी QR कोड स्कैन न करें।',
        mr: 'लक्षात ठेवा, QR कोड स्कॅन केल्याने खात्यातून पैसे वजा होतात. जर तुमचे पैसे गेले असतील, तर तात्काळ 1930 वर कॉल करा आणि 12 अंकी UTR ट्रान्झॅक्शन आयडी देऊन समोरच्याचे खाते गोठवा.'
      },
      victimActions: {
        en: [
          'STEP 1: Do NOT scan any more "refund" QR codes sent by the scammer.',
          'STEP 2: Dial 1930 immediately with the 12-digit UTR reference number.',
          'STEP 3: Save the QR code image and WhatsApp chat history as evidence.',
          'STEP 4: Report the fraud at cybercrime.gov.in and notify your bank.'
        ],
        hi: [
          'कदम 1: ठग द्वारा पैसे वापस करने के बहाने भेजे गए किसी भी दूसरे QR कोड को बिल्कुल स्कैन न करें।',
          'कदम 2: तुरंत 12 अंकों के UTR नंबर के साथ 1930 पर कॉल करें।',
          'कदम 3: ठग द्वारा भेजे गए QR कोड की फोटो और व्हाट्सएप चैट का स्क्रीनशॉट सबूत के तौर पर सेव करें।',
          'कदम 4: cybercrime.gov.in पर शिकायत दर्ज करें और बैंक को सूचित करें।'
        ],
        mr: [
          'पाऊल 1: पैसे परत मिळवण्याच्या नावाखाली पाठवलेला दुसरा कोणताही QR कोड स्कॅन करू नका.',
          'पाऊल 2: 12 अंकी UTR क्रमांकासह तात्काळ 1930 वर कॉल करा.',
          'पाऊल 3: QR कोडचा फोटो आणि चॅटचे स्क्रीनशॉट जपून ठेवा.',
          'पाऊल 4: cybercrime.gov.in वर तक्रार नोंदवा.'
        ]
      }
    },
    fake_kyc: {
      icon: '🪪',
      victimTitle: {
        en: 'Fake KYC Fraud Happened — Immediate Bank & Phone Protection Steps',
        hi: 'फर्जी KYC फ्रॉड हो गया है — तुरंत बैंक खाता और सिम सुरक्षित करने के 5 कदम',
        mr: 'बनावट KYC फसवणूक झाली आहे — बँक व सिम सुरक्षित करण्याचे 5 तातडीचे उपाय'
      },
      victimReply: {
        en: 'Do not panic, take action immediately! If you faced a KYC fraud or clicked a fake KYC link: Step 1: Immediately disconnect your phone from Wi-Fi and Mobile Data so attackers cannot extract data through any hidden remote APK. Step 2: Call your bank’s 24x7 helpline immediately to block your NetBanking, UPI, and Debit Card so no unauthorized money is deducted. Step 3: Check your phone settings and uninstall any unknown APK or screen-sharing app like AnyDesk or QuickSupport. Step 4: Dial ##002# to cancel any secret call or SMS forwarding. Step 5: Dial 1930 immediately (National Cyber Crime Helpline) and report the incident at cybercrime.gov.in.',
        hi: 'घबराएं नहीं, तुरंत ये 5 कदम उठाएं! यदि आपके साथ फर्जी KYC फ्रॉड हुआ है या आपने किसी KYC लिंक पर क्लिक कर दिया है: पहला—तुरंत अपने फोन का इंटरनेट (Mobile Data और Wi-Fi) बंद करें ताकि कोई छुपा हुआ ऐप आपके फोन से डेटा न चुरा सके। दूसरा—बिना एक मिनट गंवाए अपने बैंक के 24x7 कस्टमर केयर पर कॉल करके अपना UPI, नेट बैंकिंग और एटीएम कार्ड तुरंत ब्लॉक करवाएं। तीसरा—फोन की Settings में जाकर देखें कि क्या AnyDesk, QuickSupport या कोई अनजान APK ऐप इंस्टॉल हुआ है—उसे तुरंत Uninstall (डिलीट) करें। चौथा—अपने फोन के डायलर से ##002# डायल करें ताकि सिम पर लगी कोई भी गुप्त कॉल या SMS फॉरवर्डिंग तुरंत बंद हो जाए। पांचवां—तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें और cybercrime.gov.in पर अपनी शिकायत दर्ज करें।',
        mr: 'घाबरू नका, तात्काळ हे 5 उपाय करा! जर तुमच्यासोबत बनावट KYC फसवणूक झाली असेल: पहिले—फोनचे मोबाईल डेटा आणि Wi-Fi लगेच बंद करा जेणेकरून हॅकर डेटा चोरू शकणार नाही. दुसरे—बँकेच्या २४ तास हेल्पलाईनवर फोन करून UPI, नेटबँकिंग आणि एटीएम कार्ड तात्काळ ब्लॉक करा. तिसरे—फोनच्या Settings मध्ये जाऊन AnyDesk किंवा इतर कोणतेही अनोळखी APK ॲप तात्काळ डिलीट करा. चौथे—फोनवरून ##002# डायल करून सर्व फॉरवर्डिंग रद्द करा. पाचवे—तात्काळ 1930 वर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
      },
      victimWarnings: {
        en: [
          'Banks, Telecom companies, and Electricity boards NEVER send SMS links or APK files threatening account suspension within 24 hours.',
          'Scammers use fake KYC links to install screen-sharing spyware (AnyDesk) or SMS forwarders to steal OTPs silently.',
          'The first 1–2 hours (Golden Hour) are crucial—calling 1930 immediately can freeze transactions before scammers withdraw funds.'
        ],
        hi: [
          'कोई भी बैंक, सिम कंपनी या सरकारी विभाग 24 घंटे में खाता/सिम बंद करने की धमकी देकर SMS में लिंक या APK फाइल नहीं भेजता।',
          'ठग फर्जी KYC लिंक के जरिए फोन में AnyDesk जैसा स्क्रीन शेयरिंग ऐप या SMS फॉरवर्डर डलवा देते हैं जो बैंक OTP चुरा लेता है।',
          'धोखाधड़ी के पहले 1–2 घंटे (Golden Hour) सबसे महत्वपूर्ण हैं—1930 पर तुरंत कॉल करने से पैसे ठग के खाते में ही होल्ड हो सकते हैं।'
        ],
        mr: [
          'कोणतीही बँक किंवा कंपनी 24 तासांत खाते बंद करण्याची धमकी देऊन SMS मध्ये लिंक पाठवत नाही.',
          'भामटे KYC च्या नावाखाली AnyDesk सारखे स्क्रीन-शेअरिंग ॲप इन्स्टॉल करून बँक OTP चोरतात.',
          'पहिल्या 1-2 तासांत 1930 वर कॉल केल्यास पैसे गोठवता येतात.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Turn OFF Mobile Data & Wi-Fi immediately to cut off any remote control session.',
          'STEP 2: Call your Bank Helpline right now and BLOCK your UPI, NetBanking, and ATM Card.',
          'STEP 3: Go to Phone Settings → Apps and UNINSTALL any unfamiliar APK or remote-access app.',
          'STEP 4: Dial ##002# on your dial pad to erase any unauthorized call/SMS forwarding.',
          'STEP 5: Dial 1930 (National Cyber Crime Helpline) immediately and file an official complaint at cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: तुरंत अपने फोन का Mobile Data और Wi-Fi बंद करें ताकि रिमोट कंट्रोल का संपर्क टूट जाए।',
          'कदम 2: तुरंत अपनी बैंक हेल्पलाइन पर कॉल करें और अपना UPI, नेटबैंकिंग और ATM कार्ड ब्लॉक करवाएं।',
          'कदम 3: फोन की Settings → Apps में जाएं और AnyDesk, QuickSupport या किसी भी अनजान APK ऐप को डिलीट (Uninstall) करें।',
          'कदम 4: फोन के डायलर से ##002# डायल करें ताकि हैकर द्वारा सेट की गई कॉल/SMS फॉरवर्डिंग बंद हो जाए।',
          'कदम 5: तुरंत अभी 1930 (राष्ट्रीय साइबर हेल्पलाइन) पर कॉल करें और cybercrime.gov.in पर शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: रिमोट ॲक्सेस तोडण्यासाठी फोनचे इंटरनेट (Mobile Data/Wi-Fi) तात्काळ बंद करा.',
          'पाऊल 2: बँकेच्या हेल्पलाईनवर कॉल करून तुमचे UPI आणि एटीएम कार्ड तात्काळ ब्लॉक करा.',
          'पाऊल 3: फोन सेटिंग्जमधून AnyDesk किंवा अनोळखी APK ॲप तात्काळ Uninstall करा.',
          'पाऊल 4: फोनवरून ##002# डायल करून गुप्त कॉल/SMS फॉरवर्डिंग रद्द करा.',
          'पाऊल 5: तात्काळ 1930 या राष्ट्रीय सायबर हेल्पलाइनवर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
        ]
      }
    },
    digital_arrest_scam: {
      icon: '👮',
      victimReply: {
        en: 'Disconnect the video call immediately! There is NO such thing as Digital Arrest in Indian law. Real Police, CBI, or Judges NEVER arrest anyone or ask for money on Skype or WhatsApp video calls. If you transferred money, call 1930 right now!',
        hi: 'तुरंत वीडियो कॉल काट दें! भारत के कानून में "डिजिटल अरेस्ट" नाम की कोई चीज नहीं होती। असली पुलिस, CBI या जज कभी भी वीडियो कॉल पर पूछताछ या पैसे की मांग नहीं करते। यदि आपने पैसे भेज दिए हैं, तो तुरंत 1930 पर कॉल करें!',
        mr: 'व्हिडिओ कॉल तात्काळ कट करा! भारतीय कायद्यात "डिजिटल अरेस्ट" असा कोणताही प्रकार नाही. खरे पोलीस किंवा न्यायालय कधीही व्हिडिओ कॉलवर पैसे मागत नाहीत. पैसे पाठवले असल्यास तात्काळ 1930 डायल करा!'
      }
    },
    fake_customer_care: {
      icon: '🎧',
      victimReply: {
        en: 'If you called a fake customer care number or installed AnyDesk/TeamViewer: Immediately turn off your internet, uninstall the remote access app, call your bank to block your cards and UPI, and dial 1930 right away.',
        hi: 'यदि आपने फर्जी कस्टमर केयर नंबर पर बात की है या AnyDesk/TeamViewer ऐप डाउनलोड किया है: तुरंत अपने फोन का इंटरनेट बंद करें, उस ऐप को तुरंत डिलीट करें, बैंक को कॉल करके अपना कार्ड व UPI ब्लॉक करें और 1930 डायल करें।',
        mr: 'जर तुम्ही बनावट कस्टमर केअरला फोन केला असेल किंवा AnyDesk ॲप डाऊनलोड केले असेल: तात्काळ इंटरनेट बंद करा, ते ॲप डिलीट करा, बँकेला फोन करून खाते ब्लॉक करा आणि 1930 वर तक्रार करा.'
      }
    },
    fake_job_scam: {
      icon: '💼',
      victimReply: {
        en: 'Stop paying immediately! Real companies never ask for deposits to unlock Telegram or YouTube tasks. Do not send more money to "withdraw" your stuck balance—it is a trap. Save all transaction UTR numbers and call 1930 immediately.',
        hi: 'तुरंत पैसे भेजना बंद करें! कोई भी असली कंपनी टेलीग्राम या यूट्यूब टास्क अनलॉक करने के लिए पैसे नहीं मांगती। फंसे हुए पैसे निकालने के नाम पर और पैसे बिल्कुल न भेजें। तुरंत सभी ट्रांजैक्शन UTR नंबर के साथ 1930 पर कॉल करें।',
        mr: 'पैसे पाठवणे तात्काळ थांबवा! कोणतीही खरी कंपनी टेलिग्राम टास्कसाठी पैसे मागत नाही. अडकलेले पैसे काढण्यासाठी आणखी पैसे भरू नका. तात्काळ 1930 वर कॉल करून तक्रार नोंदवा.'
      }
    },
    online_shopping_fraud: {
      icon: '🛍️',
      victimReply: {
        en: 'If you paid money to a fake online shopping store or Instagram ad: Immediately call 1930 and report the UPI transaction ID so the seller account can be frozen. Never pay additional "customs" or "delivery" charges.',
        hi: 'यदि आपने किसी फर्जी ऑनलाइन शॉपिंग वेबसाइट या इंस्टाग्राम स्टोर को पैसे भेज दिए हैं: तो डिलीवरी या कस्टम चार्ज के नाम पर और पैसे न दें। तुरंत 1930 पर कॉल करके अपना UPI ट्रांजैक्शन नंबर दर्ज करवाएं।',
        mr: 'जर तुम्ही बनावट ऑनलाइन शॉपिंग वेबसाइटला पैसे दिले असतील, तर डिलिव्हरी चार्जेसच्या नावाखाली आणखी पैसे देऊ नका. तात्काळ 1930 वर कॉल करून UPI ट्रान्झॅक्शन नंबरची तक्रार नोंदवा.'
      }
    },
    investment_scam: {
      icon: '📈',
      victimReply: {
        en: 'Stop transferring funds immediately! The profits displayed on unlisted WhatsApp/Telegram trading apps are 100% fake digital numbers. Do not pay "taxes" to withdraw money. Call 1930 immediately with all bank transfer details.',
        hi: 'तुरंत पैसे ट्रांसफर करना बंद करें! व्हाट्सएप या फर्जी ट्रेडिंग ऐप में दिखने वाला मुनाफा 100% नकली है। पैसे निकालने के लिए कोई टैक्स या फीस जमा न करें। तुरंत सभी बैंक ट्रांजैक्शन विवरण के साथ 1930 पर कॉल करें।',
        mr: 'पैसे ट्रान्सफर करणे तात्काळ थांबवा! बनावट ट्रेडिंग ॲपमध्ये दिसणारा नफा पूर्णपणे खोटा असतो. पैसे काढण्यासाठी कोणताही टॅक्स भरू नका. तात्काळ 1930 वर कॉल करा.'
      }
    },
    whatsapp_social_scam: {
      icon: '💬',
      victimReply: {
        en: 'If your WhatsApp or social media was hacked or someone is blackmailing/impersonating you: Re-register WhatsApp with your SIM and enable Two-Step Verification PIN immediately. Never pay blackmailers—report the incident at cybercrime.gov.in and dial 1930.',
        hi: 'यदि आपका व्हाट्सएप या सोशल मीडिया अकाउंट हैक हो गया है या कोई आपको ब्लैकमेल कर रहा है: तुरंत अपने नंबर से व्हाट्सएप दोबारा लॉग-इन करें और Two-Step Verification पिन चालू करें। अपने दोस्तों को सूचित करें कि हैकर को पैसे न भेजें और तुरंत 1930 व cybercrime.gov.in पर शिकायत करें।',
        mr: 'जर तुमचे व्हॉट्सअ‍ॅप हॅक झाले असेल किंवा कोणी ब्लॅकमेल करत असेल: तात्काळ टू-स्टेप व्हेरिफिकेशन सुरू करा. मित्रांना कळवा की कोणालाही पैसे पाठवू नयेत आणि तात्काळ 1930 व cybercrime.gov.in वर तक्रार करा.'
      }
    },
    identity_theft: {
      icon: '🆔',
      victimReply: {
        en: 'If you suspect SIM Swap or Aadhaar biometric fraud: Immediately call your telecom operator to block the duplicate SIM, lock your Aadhaar biometrics via the mAadhaar app or uidai.gov.in, freeze your bank account, and call 1930.',
        hi: 'यदि आपके साथ सिम स्वैप या आधार बायोमेट्रिक फ्रॉड हुआ है: तुरंत अपने मोबाइल ऑपरेटर को कॉल कर डुप्लीकेट सिम ब्लॉक करवाएं, mAadhaar ऐप या uidai.gov.in पर जाकर अपना आधार बायोमेट्रिक लॉक करें, और तुरंत 1930 पर कॉल करें।',
        mr: 'जर सिम स्वॅप किंवा आधार बायोमेट्रिक फसवणूक झाली असेल: तात्काळ मोबाईल कंपनीला फोन करून सिम ब्लॉक करा, mAadhaar ॲपवरून बायोमेट्रिक लॉक करा आणि 1930 वर कॉल करा.'
      }
    },
    loan_app_scam: {
      icon: '🏦',
      victimReply: {
        en: 'If a fake loan app is harassing or blackmailing you: Immediately uninstall the app, revoke its Contact and Gallery permissions from phone settings, inform your contacts not to trust morphed messages, and file a complaint at cybercrime.gov.in and 1930.',
        hi: 'यदि कोई फर्जी लोन ऐप आपको ब्लैकमेल या परेशान कर रहा है: तुरंत फोन सेटिंग्स में जाकर उस ऐप की कॉन्टैक्ट व गैलरी परमिशन बंद करें और ऐप को अनइंस्टॉल करें। डरकर पैसे न दें—तुरंत 1930 और नजदीकी साइबर पुलिस में शिकायत दर्ज करें।',
        mr: 'जर कोणतेही बनावट लोन ॲप तुम्हाला ब्लॅकमेल करत असेल: तात्काळ फोन सेटिंग्जमधून त्या ॲपच्या परवानग्या काढून टाका आणि ॲप अनइन्स्टॉल करा. घाबरून पैसे देऊ नका—तात्काळ 1930 आणि cybercrime.gov.in वर तक्रार करा.'
      }
    }
  };

  // Specialized Real-World User Problem Solvers (KYC Fraud, Wrong UPI, Stolen Phone, Hacked Account, Blackmail, Frozen Account, APK Malware)
  const SPECIALIZED_PROBLEM_SOLVERS = [
    {
      id: 'kyc_fraud',
      keywords: [
        'kyc', 'kyc fraud', 'kyc scam', 'kyc hogya', 'kyc ho gaya', 'kyc ho gya', 'mere sath kyc', 'mere saath kyc',
        'kyc update', 'pan update', 'pan card kyc', 'aadhaar kyc', 'sim kyc', 'bank kyc', 'fake kyc', 'kyc link', 'kyc message',
        'mein kya karu', 'kya karu', 'kya kare', 'kya karen',
        'केवाईसी', 'केवाईसी फ्रॉड', 'केवाईसी बंद', 'केवाईसी घोटाला', 'केवाईसी फसवणूक', 'केवायसी', 'केवायसी फ्रॉड'
      ],
      icon: '🪪',
      title: {
        en: 'Fake KYC Fraud Happened — Immediate Bank & Phone Protection Steps',
        hi: 'फर्जी KYC फ्रॉड हो गया है — तुरंत बैंक खाता और सिम बचाने के 5 कदम',
        mr: 'बनावट KYC फसवणूक झाली आहे — बँक व सिम सुरक्षित करण्याचे 5 तातडीचे उपाय'
      },
      conversationalReply: {
        en: 'Do not panic, take immediate action! If you faced a KYC fraud or clicked a fake KYC link: Step 1: Immediately disconnect your phone Mobile Data and Wi-Fi to stop remote data theft. Step 2: Call your bank helpline right now to block your UPI, NetBanking, and ATM card so fraudsters cannot withdraw money. Step 3: Check your phone settings and uninstall any unknown APK or remote screen-sharing app like AnyDesk or QuickSupport. Step 4: Dial ##002# to cancel any unauthorized call or SMS forwarding. Step 5: Dial 1930 immediately (National Cyber Crime Helpline) and report at cybercrime.gov.in.',
        hi: 'घबराएं नहीं, तुरंत ये 5 कदम उठाएं! यदि आपके साथ फर्जी KYC फ्रॉड हुआ है या आपने किसी KYC लिंक पर क्लिक कर दिया है: पहला—तुरंत अपने फोन का इंटरनेट (Mobile Data और Wi-Fi) बंद करें ताकि कोई छुपा हुआ ऐप आपके फोन से डेटा न चुरा सके। दूसरा—बिना एक मिनट गंवाए अपने बैंक के 24x7 कस्टमर केयर पर कॉल करके अपना UPI, नेट बैंकिंग और एटीएम कार्ड तुरंत ब्लॉक करवाएं। तीसरा—फोन की Settings में जाकर देखें कि क्या AnyDesk, QuickSupport या कोई अनजान APK ऐप इंस्टॉल हुआ है—उसे तुरंत डिलीट (Uninstall) करें। चौथा—अपने फोन के डायलर से ##002# डायल करें ताकि सिम पर लगी कोई भी गुप्त कॉल या SMS फॉरवर्डिंग तुरंत बंद हो जाए। पांचवां—तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें और cybercrime.gov.in पर अपनी शिकायत दर्ज करें।',
        mr: 'घाबरू नका, तात्काळ हे 5 उपाय करा! जर तुमच्यासोबत बनावट KYC फसवणूक झाली असेल: पहिले—फोनचे मोबाईल डेटा आणि Wi-Fi लगेच बंद करा जेणेकरून हॅकर डेटा चोरू शकणार नाही. दुसरे—बँकेच्या २४ तास हेल्पलाईनवर फोन करून UPI, नेटबँकिंग आणि एटीएम कार्ड तात्काळ ब्लॉक करा. तिसरे—फोनच्या Settings मध्ये जाऊन AnyDesk किंवा इतर कोणतेही अनोळखी APK ॲप तात्काळ डिलीट करा. चौथे—फोनवरून ##002# डायल करून सर्व फॉरवर्डिंग रद्द करा. पाचवे—तात्काळ 1930 वर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
      },
      warningSigns: {
        en: [
          'Banks, Telecom companies, and Electricity boards NEVER send SMS links threatening account suspension within 24 hours.',
          'Scammers use fake KYC links to install screen-sharing spyware (AnyDesk) or SMS forwarders to steal OTPs silently.',
          'The first 1 to 2 hours (Golden Hour) are critical—calling 1930 immediately can freeze transactions before scammers withdraw funds.'
        ],
        hi: [
          'कोई भी बैंक, सिम कंपनी या सरकारी विभाग 24 घंटे में खाता या सिम बंद करने की धमकी देकर SMS में लिंक या APK फाइल नहीं भेजता।',
          'ठग फर्जी KYC लिंक के जरिए फोन में AnyDesk जैसा स्क्रीन शेयरिंग ऐप या SMS फॉरवर्डर डलवा देते हैं जो बैंक OTP चुरा लेता है।',
          'धोखाधड़ी के पहले 1 से 2 घंटे (Golden Hour) सबसे महत्वपूर्ण हैं—1930 पर तुरंत कॉल करने से पैसे ठग के खाते में ही होल्ड हो सकते हैं।'
        ],
        mr: [
          'कोणतीही बँक किंवा कंपनी 24 तासांत खाते बंद करण्याची धमकी देऊन SMS मध्ये लिंक पाठवत नाही.',
          'भामटे KYC च्या नावाखाली AnyDesk सारखे स्क्रीन-शेअरिंग ॲप इन्स्टॉल करून बँक OTP चोरतात.',
          'पहिल्या 1-2 तासांत 1930 वर कॉल केल्यास पैसे गोठवता येतात.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Turn OFF Mobile Data & Wi-Fi immediately to cut off any remote control session.',
          'STEP 2: Call your Bank Helpline right now and BLOCK your UPI, NetBanking, and ATM Card.',
          'STEP 3: Go to Phone Settings → Apps and UNINSTALL any unfamiliar APK or remote-access app.',
          'STEP 4: Dial ##002# on your dial pad to erase any unauthorized call/SMS forwarding.',
          'STEP 5: Dial 1930 (National Cyber Crime Helpline) immediately and file an official complaint at cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: तुरंत अपने फोन का Mobile Data और Wi-Fi बंद करें ताकि रिमोट कंट्रोल का संपर्क टूट जाए।',
          'कदम 2: तुरंत अपनी बैंक हेल्पलाइन पर कॉल करें और अपना UPI, नेटबैंकिंग और ATM कार्ड ब्लॉक करवाएं।',
          'कदम 3: फोन की Settings → Apps में जाएं और AnyDesk, QuickSupport या किसी भी अनजान APK ऐप को डिलीट (Uninstall) करें।',
          'कदम 4: फोन के डायलर से ##002# डायल करें ताकि हैकर द्वारा सेट की गई कॉल/SMS फॉरवर्डिंग बंद हो जाए।',
          'कदम 5: तुरंत अभी 1930 (राष्ट्रीय साइबर हेल्पलाइन) पर कॉल करें और cybercrime.gov.in पर शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: रिमोट ॲक्सेस तोडण्यासाठी फोनचे इंटरनेट (Mobile Data/Wi-Fi) तात्काळ बंद करा.',
          'पाऊल 2: बँकेच्या हेल्पलाईनवर कॉल करून तुमचे UPI आणि एटीएम कार्ड तात्काळ ब्लॉक करा.',
          'पाऊल 3: फोन सेटिंग्जमधून AnyDesk किंवा अनोळखी APK ॲप तात्काळ Uninstall करा.',
          'पाऊल 4: फोनवरून ##002# डायल करून गुप्त कॉल/SMS फॉरवर्डिंग रद्द करा.',
          'पाऊल 5: तात्काळ 1930 या राष्ट्रीय सायबर हेल्पलाइनवर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
        ]
      }
    },
    {
      id: 'upi_fraud',
      keywords: [
        'upi fraud', 'upi scam', 'upi fraud hua', 'upi fraud hua hai', 'upi fraud hogya', 'mere sath upi', 'mere saath upi',
        'upi se paise kat gaye', 'upi pin share', 'गलत यूपीआई फ्रॉड', 'यूपीआई फ्रॉड', 'यूपीआय फ्रॉड'
      ],
      icon: '💳',
      title: {
        en: 'UPI Fraud Happened — Immediate Recovery & Account Protection Steps',
        hi: 'UPI फ्रॉड हो गया है — तुरंत पैसे वापस पाने और खाता सुरक्षित करने के 5 कदम',
        mr: 'UPI फसवणूक झाली आहे — तात्काळ पैसे परत मिळवणे व खाते सुरक्षित करण्याचे उपाय'
      },
      conversationalReply: {
        en: 'Do not panic! Since UPI fraud happened to you, follow these immediate recovery steps right now: Step 1: Open your GPay, PhonePe, or Paytm and copy the 12-digit UTR transaction number. Step 2: Immediately dial 1930 (National Cyber Crime Helpline) so the receiver bank account can be frozen within the Golden Hour. Step 3: Report the fraud inside your UPI app under Help or Having Issues. Step 4: Call your bank helpline immediately to block your UPI ID and change your UPI PIN. Step 5: Register an official complaint on cybercrime.gov.in.',
        hi: 'घबराएं नहीं, तुरंत ये 5 कदम उठाएं! यदि आपके साथ UPI फ्रॉड हो गया है: पहला—अपने PhonePe, Google Pay या Paytm की हिस्ट्री से 12 अंकों का UTR नंबर तुरंत नोट करें। दूसरा—तुरंत 1930 (राष्ट्रीय साइबर हेल्पलाइन) पर कॉल करें और UTR नंबर बताएं ताकि जिस खाते में पैसे गए हैं उसे तुरंत फ्रीज किया जा सके। तीसरा—अपने UPI ऐप में जाकर उस ट्रांजैक्शन पर "Report Fraud / Help" दर्ज करें। चौथा—अपने बैंक में कॉल करके अपना UPI ब्लॉक करवाएं और नया UPI पिन सेट करें। पांचवां—cybercrime.gov.in पर आधिकारिक शिकायत दर्ज करें।',
        mr: 'घाबरू नका, तात्काळ हे 5 उपाय करा! जर तुमच्यासोबत UPI फसवणूक झाली असेल: पहिले—तुमच्या PhonePe किंवा GPay मधून 12 अंकी UTR ट्रान्झॅक्शन नंबर नोट करा. दुसरे—तात्काळ 1930 या राष्ट्रीय हेल्पलाइनवर कॉल करून हा UTR नंबर सांगा जेणेकरून समोरच्याचे बँक खाते गोठवले जाईल. तिसरे—UPI ॲपमध्ये "Report Fraud" करा आणि बँकेला फोन करून UPI ब्लॉक करा. चौथे—cybercrime.gov.in वर तक्रार नोंदवा.'
      },
      warningSigns: {
        en: [
          'Fraudsters often claim entering your UPI PIN will "credit" money to your account—a UPI PIN is strictly for sending money.',
          'Never scan reverse QR codes or install AnyDesk to "reverse" the transaction.',
          'Act within the Golden Hour (1 to 2 hours) by calling 1930 to freeze fraudulent fund movements.'
        ],
        hi: [
          'ठग दावा करते हैं कि UPI PIN डालने से पैसे जमा होंगे—याद रखें, UPI PIN सिर्फ पैसे भेजने के लिए होता है।',
          'पैसे वापस पाने के लिए किसी और QR कोड को स्कैन न करें और AnyDesk जैसा ऐप कभी न डालें।',
          'धोखाधड़ी के तुरंत बाद 1 से 2 घंटे (Golden Hour) में 1930 पर कॉल करने से आपके पैसे ठग के खाते में ही होल्ड हो सकते हैं।'
        ],
        mr: [
          'UPI PIN टाकल्याने पैसे मिळतात असा खोटा दावा भामटे करतात—पिन फक्त पैसे पाठवण्यासाठी असतो.',
          'पैसे परत मिळवण्यासाठी कोणताही QR कोड स्कॅन करू नका.',
          'पहिल्या १-२ तासांत १९३० वर कॉल करा.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Copy the 12-digit UTR number from your PhonePe / GPay / Paytm transaction receipt.',
          'STEP 2: Dial 1930 immediately (National Cyber Helpline) to freeze the recipient bank account.',
          'STEP 3: Tap "Report Fraud / Need Help" inside your UPI app for that transaction.',
          'STEP 4: Call your bank fraud desk to block your UPI ID and change your PIN.',
          'STEP 5: File a dispute on NPCI portal (npci.org.in) and register a formal complaint on cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: अपने PhonePe, GPay या Paytm से 12 अंकों का UTR ट्रांजैक्शन नंबर तुरंत नोट करें।',
          'कदम 2: तुरंत 1930 (राष्ट्रीय साइबर हेल्पलाइन) पर कॉल करें और UTR नंबर देकर ठग का खाता फ्रीज करवाएं।',
          'कदम 3: अपने UPI ऐप में उस ट्रांजैक्शन पर "Report Fraud / Help" में शिकायत दर्ज करें।',
          'कदम 4: अपने बैंक के कस्टमर केयर पर कॉल करके UPI ब्लॉक करवाएं।',
          'कदम 5: npci.org.in (UPI Dispute Redressal) और cybercrime.gov.in पर आधिकारिक शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: PhonePe किंवा GPay मधून 12 अंकी UTR क्रमांक नोट करा.',
          'पाऊल 2: तात्काळ 1930 वर कॉल करून UTR क्रमांक सांगा जेणेकरून खाते गोठवता येईल.',
          'पाऊल 3: UPI ॲपच्या Help सेक्शनमध्ये जाऊन तक्रार नोंदवा.',
          'पाऊल 4: बँकेला फोन करून UPI ब्लॉक करा.',
          'पाऊल 5: cybercrime.gov.in आणि npci.org.in वर तक्रार करा.'
        ]
      }
    },
    {
      id: 'wrong_upi_transfer',
      keywords: [
        'galat number', 'galat upi', 'wrong number', 'wrong upi', 'wrong account', 'mistake transfer', 'galti se paise', 'galti se bhej',
        'sent to wrong', 'चुकीच्या नंबरवर', 'गलत नंबर पर पैसे', 'गलत यूपीआई', 'गलती से पैसे'
      ],
      icon: '🔄',
      title: {
        en: 'Sent Money to Wrong UPI ID / Number — Official Refund Procedure',
        hi: 'गलत UPI या गलत नंबर पर पैसे चले गए — पैसे वापस पाने की आधिकारिक प्रक्रिया',
        mr: 'चुकीच्या UPI किंवा नंबरवर पैसे गेले — पैसे परत मिळवण्याची अधिकृत प्रक्रिया'
      },
      conversationalReply: {
        en: 'If you accidentally transferred money to the wrong UPI number or account, follow this official RBI & NPCI recovery process immediately: Step 1: Take a screenshot of the transaction with the 12-digit UTR number. Step 2: Report the wrong transfer inside Google Pay, PhonePe, or Paytm customer support immediately. Step 3: File an online complaint on the official NPCI portal (npci.org.in → What We Do → UPI → Dispute Redressal Mechanism) and call the UPI toll-free helpline 1800-120-1740. Step 4: Visit your bank branch within 24 to 48 hours and submit a written "Wrong Credit Chargeback / Recall Request"—your bank will legally contact the receiver’s bank to reverse the money.',
        hi: 'यदि आपने गलती से किसी गलत UPI नंबर या खाते में पैसे भेज दिए हैं, तो पैसे वापस पाने के लिए तुरंत ये 4 कदम उठाएं: पहला—उस ट्रांजैक्शन का स्क्रीनशॉट लें जिसमें 12 अंकों का UTR नंबर लिखा हो। दूसरा—तुरंत अपने PhonePe, Google Pay या Paytm के Help सेक्शन में जाकर गलत ट्रांसफर की शिकायत दर्ज करें। तीसरा—NPCI की आधिकारिक वेबसाइट (npci.org.in → UPI → Dispute Redressal Mechanism) पर शिकायत दर्ज करें और टोल-फ्री नंबर 1800-120-1740 पर कॉल करें। चौथा—24 से 48 घंटे के भीतर अपनी बैंक शाखा में जाकर "Wrong Credit Recall / Chargeback" का लिखित आवेदन दें—आपका बैंक प्राप्तकर्ता के बैंक से संपर्क करके पैसे होल्ड और वापस करवाएगा।',
        mr: 'जर तुम्ही चुकीने दुसऱ्याच UPI नंबरवर पैसे पाठवले असतील, तर तात्काळ हे 4 उपाय करा: पहिले—12 अंकी UTR क्रमांकासह ट्रान्झॅक्शनचा स्क्रीनशॉट घ्या. दुसरे—तुमच्या PhonePe किंवा Google Pay च्या Help सेक्शनमध्ये लगेच तक्रार करा. तिसरे—NPCI च्या अधिकृत वेबसाइटवर (npci.org.in → UPI Dispute Redressal) ऑनलाइन तक्रार नोंदवा आणि 1800-120-1740 या टोल-फ्री क्रमांकावर कॉल करा. चौथे—24 तासांच्या आत तुमच्या बँक शाखेत जाऊन "Wrong Credit Recall" चा लेखी अर्ज द्या.'
      },
      warningSigns: {
        en: [
          'Do NOT search Google for GPay/PhonePe customer care numbers—fraudsters post fake refund numbers there.',
          'Under RBI guidelines, your bank must initiate a reversal request with the beneficiary bank within 48 hours of your complaint.'
        ],
        hi: [
          'गूगल पर सर्च करके किसी फर्जी PhonePe/GPay कस्टमर केयर नंबर पर कॉल बिल्कुल न करें।',
          'RBI नियमों के अनुसार, आपकी शिकायत मिलने पर आपका बैंक प्राप्तकर्ता के बैंक को पैसे वापस करने (Reversal) का आधिकारिक नोटिस भेजता है।'
        ],
        mr: [
          'गुगलवर सर्च करून कोणत्याही बनावट कस्टमर केअर नंबरवर कॉल करू नका.',
          'RBI नियमांनुसार, बँकेत तक्रार केल्यावर तुमची बँक समोरच्या बँकेशी संपर्क साधून पैसे परत मिळवण्याची प्रक्रिया सुरू करते.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Note the 12-digit UTR number, date, amount, and wrong UPI ID.',
          'STEP 2: Raise a ticket inside your UPI App (GPay / PhonePe / Paytm Help section).',
          'STEP 3: File an official UPI dispute at npci.org.in and dial NPCI Toll-Free 1800-120-1740.',
          'STEP 4: Submit a written "Wrong Transfer Recall Application" to your Bank Branch Manager within 24 hours.'
        ],
        hi: [
          'कदम 1: 12 अंकों का UTR ट्रांजैक्शन नंबर, तारीख और गलत UPI ID नोट करें।',
          'कदम 2: अपने UPI ऐप (GPay / PhonePe / Paytm) के Help सेक्शन में तुरंत टिकट दर्ज करें।',
          'कदम 3: npci.org.in (UPI Dispute Redressal) पर ऑनलाइन शिकायत करें और 1800-120-1740 पर कॉल करें।',
          'कदम 4: अपनी बैंक शाखा के मैनेजर को "Wrong Credit Recall" का लिखित प्रार्थना पत्र तुरंत दें।'
        ],
        mr: [
          'पाऊल 1: 12 अंकी UTR क्रमांक, रक्कम आणि चुकीचा UPI ID लिहून ठेवा.',
          'पाऊल 2: UPI ॲपच्या Help सेक्शनमध्ये तक्रार नोंदवा.',
          'पाऊल 3: npci.org.in वर तक्रार करा आणि 1800-120-1740 वर कॉल करा.',
          'पाऊल 4: तुमच्या बँक मॅनेजरकडे "Wrong Transfer Recall" साठी लेखी अर्ज द्या.'
        ]
      }
    },
    {
      id: 'lost_stolen_phone',
      keywords: [
        'phone chori', 'mobile chori', 'phone kho gaya', 'mobile kho gaya', 'lost phone', 'stolen phone', 'phone stolen', 'phone lost',
        'मोबाइल चोरी', 'फोन चोरी', 'फोन खो गया', 'मोबाइल गुम', 'फोन हरवला', 'मोबाईल चोरीला'
      ],
      icon: '📱',
      title: {
        en: 'Lost or Stolen Mobile Phone — Protect Bank, UPI & Block IMEI',
        hi: 'मोबाइल फोन चोरी या गुम हो गया — बैंक, UPI और सिम सुरक्षित करने के 4 कदम',
        mr: 'मोबाईल फोन चोरीला गेला किंवा हरवला — बँक व सिम सुरक्षित करण्याचे 4 उपाय'
      },
      conversationalReply: {
        en: 'If your mobile phone has been lost or stolen, do these 4 things immediately to prevent scammers from draining your bank account via UPI: Step 1: Call your telecom operator (Jio, Airtel, Vi, BSNL) from another phone right now and block your SIM card so no one can receive your banking OTPs. Step 2: Call your bank helpline to temporarily block your UPI (Google Pay/PhonePe) and mobile banking. Step 3: File an online police lost report. Step 4: Visit the Government of India Sanchar Saathi CEIR portal (sancharsaathi.gov.in) to block your phone’s 15-digit IMEI number across India.',
        hi: 'यदि आपका मोबाइल फोन चोरी या गुम हो गया है, तो अपने बैंक खाते और UPI को सुरक्षित रखने के लिए तुरंत ये 4 कदम उठाएं: पहला—तुरंत किसी दूसरे फोन से अपनी सिम कंपनी (Jio, Airtel, Vi, BSNL) के कस्टमर केयर पर कॉल करके अपना सिम कार्ड ब्लॉक करवाएं ताकि चोर को आपके बैंक OTP न मिल सकें। दूसरा—अपने बैंक में कॉल करके अपना UPI (PhonePe/GPay) और मोबाइल बैंकिंग तुरंत बंद करवाएं। तीसरा—नजदीकी थाने या पुलिस पोर्टल पर फोन गुम होने की रिपोर्ट दर्ज करें। चौथा—भारत सरकार के संचार साथी पोर्टल (sancharsaathi.gov.in) पर जाकर अपने फोन का IMEI नंबर ब्लॉक करें।',
        mr: 'जर तुमचा मोबाईल फोन चोरीला गेला किंवा हरवला असेल, तर बँक खाते सुरक्षित ठेवण्यासाठी तात्काळ हे 4 उपाय करा: पहिले—दुसऱ्या फोनवरून तुमच्या सिम कंपनीला कॉल करून सिम कार्ड ताबडतोब ब्लॉक करा जेणेकरून चोराला OTP मिळणार नाही. दुसरे—बँकेला कॉल करून तुमचे UPI आणि मोबाईल बँकिंग बंद करा. तिसरे—पोलिसांत तक्रार नोंदवा आणि भारत सरकारच्या sancharsaathi.gov.in पोर्टलवर जाऊन फोनचा IMEI नंबर ब्लॉक करा.'
      },
      warningSigns: {
        en: [
          'Thieves immediately pull out the SIM card from a stolen phone and insert it into another phone to reset your UPI PIN using SMS OTPs.',
          'Blocking the SIM card first is the fastest way to stop unauthorized UPI withdrawals.'
        ],
        hi: [
          'चोर अक्सर चोरी किए गए फोन से सिम कार्ड निकालकर दूसरे फोन में डालते हैं और OTP मंगाकर आपका UPI पिन बदल देते हैं।',
          'सबसे पहले सिम कार्ड ब्लॉक करवाना आपके बैंक खाते को बचाने का सबसे जरूरी कदम है।'
        ],
        mr: [
          'चोर फोनमधील सिम कार्ड दुसऱ्या फोनमध्ये टाकून OTP द्वारे UPI पिन बदलू शकतात.',
          'त्यामुळे सर्वात आधी सिम कार्ड ब्लॉक करणे अत्यंत गरजेचे आहे.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Call your Telecom Operator immediately and BLOCK your SIM card.',
          'STEP 2: Call your Bank’s toll-free helpline and deactivate UPI & Mobile Banking.',
          'STEP 3: File a Lost Mobile Police Report and get a duplicate SIM card.',
          'STEP 4: Block your device IMEI on Government of India’s Sanchar Saathi portal (sancharsaathi.gov.in).'
        ],
        hi: [
          'कदम 1: तुरंत अपनी टेलीकॉम कंपनी (Jio/Airtel/Vi/BSNL) को कॉल करके अपना SIM कार्ड ब्लॉक करवाएं।',
          'कदम 2: अपने बैंक की हेल्पलाइन पर कॉल करके अपनी UPI सेवाओं को अस्थायी रूप से बंद करवाएं।',
          'कदम 3: पुलिस में मोबाइल गुमशुदगी की रिपोर्ट दर्ज करें।',
          'कदम 4: भारत सरकार के sancharsaathi.gov.in (CEIR) पोर्टल पर जाकर फोन का IMEI नंबर ब्लॉक करें।'
        ],
        mr: [
          'पाऊल 1: तात्काळ सिम कंपनीला कॉल करून तुमचे सिम कार्ड ब्लॉक करा.',
          'पाऊल 2: बँकेशी संपर्क साधून UPI सेवा तात्पुरती बंद करा.',
          'पाऊल 3: पोलिसांत मोबाईल हरवल्याची तक्रार करा.',
          'पाऊल 4: sancharsaathi.gov.in वर जाऊन फोनचा IMEI नंबर ब्लॉक करा.'
        ]
      }
    },
    {
      id: 'social_media_account_hacked',
      keywords: [
        'instagram hack', 'facebook hack', 'gmail hack', 'email hack', 'account hack', 'id hack', 'whatsapp hack',
        'इंस्टाग्राम हैक', 'फेसबुक हैक', 'अकाउंट हैक', 'आईडी हैक', 'ईमेल हैक', 'आयडी हॅक', 'अकाउंट हॅक'
      ],
      icon: '🔓',
      title: {
        en: 'Instagram / Facebook / WhatsApp / Email Hacked — Account Recovery Plan',
        hi: 'इंस्टाग्राम, फेसबुक, व्हाट्सएप या ईमेल हैक हो गया — तुरंत रिकवर करने के कदम',
        mr: 'इंस्टाग्राम, फेसबुक, व्हॉट्सअ‍ॅप किंवा ईमेल हॅक झाले — तात्काळ रिकव्हरी उपाय'
      },
      conversationalReply: {
        en: 'If your Instagram, Facebook, WhatsApp, or Email account has been hacked, take these exact steps right now: Step 1: Immediately warn your friends and family via SMS or call NOT to send money to your account, as hackers use hacked profiles to ask friends for emergency money. Step 2: For Instagram, go to instagram.com/hacked; for Facebook, go to facebook.com/hacked; for WhatsApp, re-install and register with your SIM number and immediately enable a 6-digit Two-Step Verification PIN. Step 3: Check your Google Account "Security → Your Devices" and sign out of all unknown phones or computers. Step 4: Report the hacking and impersonation at cybercrime.gov.in.',
        hi: 'यदि आपका इंस्टाग्राम, फेसबुक, व्हाट्सएप या ईमेल अकाउंट हैक हो गया है, तो तुरंत ये 4 कदम उठाएं: पहला—तुरंत अपने सभी दोस्तों और रिश्तेदारों को कॉल या स्टेटस लगाकर बताएं कि आपका अकाउंट हैक हो गया है और वे किसी को भी पैसे न भेजें। दूसरा—इंस्टाग्राम रिकवर करने के लिए instagram.com/hacked खोलें, फेसबुक के लिए facebook.com/hacked खोलें, और व्हाट्सएप के लिए अपने नंबर से दोबारा लॉग-इन करके तुरंत 6 अंकों का Two-Step Verification पिन चालू करें। तीसरा—अपने Gmail की Security सेटिंग में जाकर "Manage Devices" से सभी अनजान फोन को तुरंत लॉग-आउट (Remove) करें। चौथा—cybercrime.gov.in पर हैकिंग की शिकायत दर्ज करें।',
        mr: 'जर तुमचे इंस्टाग्राम, फेसबुक, व्हॉट्सअ‍ॅप किंवा ईमेल हॅक झाले असेल, तर तात्काळ हे 4 उपाय करा: पहिले—तुमच्या सर्व मित्रांना आणि नातेवाईकांना लगेच कळवा की तुमचे अकाउंट हॅक झाले असून कोणालाही पैसे पाठवू नयेत. दुसरे—इंस्टाग्रामसाठी instagram.com/hacked आणि फेसबुकसाठी facebook.com/hacked या अधिकृत लिंकवर जाऊन पासवर्ड रिसेट करा. व्हॉट्सअ‍ॅपमध्ये Two-Step Verification पिन सुरू करा. तिसरे—cybercrime.gov.in वर अधिकृत तक्रार नोंदवा.'
      },
      warningSigns: {
        en: [
          'Hackers immediately message your contact list claiming a medical emergency and asking for UPI transfers.',
          'Never pay any hacker or fake "ethical hacker" on Instagram claiming they can recover your account for a fee.'
        ],
        hi: [
          'हैकर्स आपकी आईडी हैक करते ही आपके दोस्तों को अस्पताल या इमरजेंसी का बहाना बनाकर पैसे मांगने के मैसेज भेजते हैं।',
          'सोशल मीडिया पर पैसे लेकर अकाउंट रिकवर करने का दावा करने वाले किसी भी व्यक्ति को पैसे न दें—वे भी ठग होते हैं।'
        ],
        mr: [
          'हॅकर्स तुमचे अकाउंट वापरून तुमच्या मित्रांकडे तातडीच्या मदतीच्या नावाखाली पैसे मागतात.',
          'अकाउंट रिकव्हर करून देण्याच्या नावाखाली पैसे मागणाऱ्यांवर विश्वास ठेवू नका.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Alert all contacts and family immediately not to transfer money to messages from your profile.',
          'STEP 2: Visit instagram.com/hacked or facebook.com/hacked to recover your account via video selfie / official verification.',
          'STEP 3: Change your primary Gmail password and remove unrecognized devices under Google Account Security.',
          'STEP 4: Enable Two-Factor Authentication (2FA) and file an impersonation complaint at cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: तुरंत अपने दोस्तों और परिवार को सूचित करें कि आपकी आईडी से मांगे गए किसी भी पैसे का भुगतान न करें।',
          'कदम 2: आधिकारिक रिकवरी लिंक instagram.com/hacked या facebook.com/hacked पर जाकर अपना अकाउंट रिकवर करें।',
          'कदम 3: अपने मुख्य Gmail का पासवर्ड बदलें और अनजान डिवाइसेस को लॉग-आउट (Sign out) करें।',
          'कदम 4: हर ऐप में Two-Factor Authentication (2FA) चालू करें और cybercrime.gov.in पर शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: मित्रांना व नातेवाईकांना तात्काळ सूचित करा की तुमच्या नावाने पैसे मागितल्यास देऊ नयेत.',
          'पाऊल 2: instagram.com/hacked किंवा facebook.com/hacked वर जाऊन अकाउंट रिकव्हर करा.',
          'पाऊल 3: ईमेलचा पासवर्ड बदला आणि अनोळखी डिव्हाइस लॉग-आउट करा.',
          'पाऊल 4: cybercrime.gov.in वर तक्रार नोंदवा.'
        ]
      }
    },
    {
      id: 'blackmail_sextortion_morphing',
      keywords: [
        'photo viral', 'video viral', 'blackmail', 'sextortion', 'nude video', 'morphed photo', 'gandi video', 'badnaam',
        'ब्लैकमेल', 'फोटो वायरल', 'वीडियो वायरल', 'धमकी', 'अश्लील वीडियो', 'फोटो मॉर्फ', 'बदनाम'
      ],
      icon: '🛑',
      title: {
        en: 'Photo / Video Blackmail & Extortion — Confidential Protection Plan',
        hi: 'फोटो/वीडियो वायरल करने की धमकी और ब्लैकमेलिंग — तुरंत सुरक्षा समाधान',
        mr: 'फोटो/व्हिडिओ व्हायरल करण्याची धमकी व ब्लॅकमेलिंग — तात्काळ सुरक्षा उपाय'
      },
      conversationalReply: {
        en: 'Do not be afraid, the law is completely on your side! If someone is threatening to viral your photo or video and blackmailing you for money: Rule 1: Do NOT pay them even a single rupee—if you pay once, they will never delete the video and will keep demanding more money. Rule 2: Immediately lock your Facebook and Instagram profiles so the blackmailer cannot see your friend list. Rule 3: Take screenshots of their phone number, profile, and UPI ID, then block them. Rule 4: File a 100% confidential complaint on cybercrime.gov.in (under Women/Child or Cyber Extortion) or call 1930.',
        hi: 'बिल्कुल डरें नहीं, कानून पूरी तरह आपके साथ है! यदि कोई आपकी फोटो या वीडियो वायरल करने की धमकी देकर ब्लैकमेल कर रहा है, तो तुरंत ये 4 कदम उठाएं: पहला और सबसे जरूरी नियम—ब्लैकमेलर को एक रुपया भी मत भेजिए! पैसे देने से वे वीडियो कभी डिलीट नहीं करते बल्कि और ज्यादा पैसे मांगते हैं। दूसरा—अपने फेसबुक, इंस्टाग्राम और सोशल मीडिया की प्रोफाइल और फ्रेंड लिस्ट को तुरंत Private (Lock) कर दें। तीसरा—ठग के फोन नंबर, चैट और UPI ID का स्क्रीनशॉट सबूत के लिए लेकर उसे ब्लॉक कर दें। चौथा—cybercrime.gov.in पर पूरी गोपनीयता के साथ अपनी शिकायत दर्ज करें या 1930 पर कॉल करें।',
        mr: 'अजिबात घाबरू नका, कायदा तुमच्या पाठीशी आहे! जर कोणी फोटो किंवा व्हिडिओ व्हायरल करण्याची धमकी देऊन ब्लॅकमेल करत असेल, तर पहिले नियम लक्षात ठेवा—त्यांना एक रुपयाही देऊ नका! पैसे दिल्यास त्यांची मागणी वाढतच जाते. दुसरे—तुमचे फेसबुक आणि इंस्टाग्राम प्रोफाईल तात्काळ Lock (Private) करा. तिसरे—त्यांच्या नंबरचे स्क्रीनशॉट घेऊन त्यांना ब्लॉक करा आणि cybercrime.gov.in किंवा 1930 वर गुप्तपणे तक्रार नोंदवा.'
      },
      warningSigns: {
        en: [
          'Scammers also impersonate "YouTube employees" or "Delhi Cyber Police" later, demanding money to "delete the video from the server"—that is the SAME scammer calling from another number!',
          'Paying extortionists never stops them; blocking and locking your social media friend list neutralizes their threat.'
        ],
        hi: [
          'सावधान: इसके बाद वही ठग "यूट्यूब अधिकारी" या "फर्जी पुलिस अधिकारी" बनकर दूसरे नंबर से कॉल करता है और वीडियो डिलीट करने के नाम पर पैसे मांगता है—उसे भी एक रुपया न दें!',
          'ब्लैकमेलर को पैसे देने से धमकी कभी बंद नहीं होती; सोशल मीडिया प्राइवेसी लॉक करना और 1930 पर रिपोर्ट करना ही सही समाधान है।'
        ],
        mr: [
          'सावधान: यानंतर तेच भामटे "यूट्यूब अधिकारी" किंवा "पोलीस" भासवून व्हिडिओ डिलीट करण्यासाठी पैसे मागतात—त्यांनाही पैसे देऊ नका!',
          'सोशल मीडिया प्रोफाईल लॉक करा आणि तात्काळ सायबर पोलिसांत तक्रार करा.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Strictly DO NOT pay any money (neither to the blackmailer nor to fake "YouTube deletion agents").',
          'STEP 2: Lock your Facebook/Instagram profile privacy and hide your Friends/Followers list immediately.',
          'STEP 3: Save screenshots of the blackmailer’s phone number, WhatsApp chat, and UPI/Bank details.',
          'STEP 4: File an anonymous/confidential report on cybercrime.gov.in or call National Helpline 1930.'
        ],
        hi: [
          'कदम 1: ब्लैकमेलर या "वीडियो डिलीट करने वाले एजेंट" को एक रुपया भी बिल्कुल न दें।',
          'कदम 2: अपने Facebook और Instagram की प्रोफाइल को तुरंत Lock (Private) करें और अपनी Friend List छुपा दें।',
          'कदम 3: धमकी देने वाले के फोन नंबर और चैट का स्क्रीनशॉट सबूत के तौर पर सुरक्षित रखें और उसे ब्लॉक करें।',
          'कदम 4: cybercrime.gov.in (Report Women/Child या Other Cyber Crime) पर गोपनीय शिकायत दर्ज करें या 1930 डायल करें।'
        ],
        mr: [
          'पाऊल 1: ब्लॅकमेल करणाऱ्याला एकही रुपया देऊ नका.',
          'पाऊल 2: फेसबुक आणि इंस्टाग्राम प्रोफाईल तात्काळ Lock करा.',
          'पाऊल 3: चॅट आणि फोन नंबरचे स्क्रीनशॉट पुरावा म्हणून ठेवा आणि नंबर ब्लॉक करा.',
          'पाऊल 4: cybercrime.gov.in किंवा 1930 वर गोपनीय तक्रार नोंदवा.'
        ]
      }
    },
    {
      id: 'bank_account_frozen_lien',
      keywords: [
        'account freeze', 'bank freeze', 'lien amount', 'account hold', 'debit freeze', 'cyber hold',
        'खाता फ्रीज', 'अकाउंट फ्रीज', 'बैंक होल्ड', 'खाते गोठवले', 'अकाउंट होल्ड'
      ],
      icon: '🏦',
      title: {
        en: 'Bank Account Frozen / Lien Hold — How to Unfreeze Legally',
        hi: 'बैंक खाता फ्रीज (Freeze) या होल्ड लग गया है — खाता चालू करवाने का समाधान',
        mr: 'बँक खाते फ्रीज (Freeze) किंवा होल्ड झाले आहे — खाते सुरू करण्याचा उपाय'
      },
      conversationalReply: {
        en: 'If your bank account has been frozen or put on a Lien Hold by the Cyber Cell: Step 1: Visit your home bank branch and ask the manager for the "Cyber Cell Acknowledgement Number", the exact disputed transaction amount, and the name/email of the State Police Cyber Cell that ordered the hold. Step 2: If only a specific amount is disputed, ask your bank to put a Lien only on that disputed amount and allow normal use of the rest of your balance. Step 3: Send proof of your genuine transaction (invoice, chat, ID proof) to the Investigating Officer (IO) of that Cyber Cell to obtain a No Objection Certificate (NOC).',
        hi: 'यदि आपका बैंक खाता फ्रीज (Freeze) हो गया है या उस पर साइबर होल्ड (Lien) लग गया है, तो इसका समाधान यह है: पहला—अपनी बैंक शाखा में जाएं और मैनेजर से पूछें कि किस ट्रांजैक्शन की वजह से होल्ड लगा है, "Cyber Cell Acknowledgement Number" क्या है, और किस राज्य की साइबर पुलिस ने होल्ड लगाया है। दूसरा—बैंक से अनुरोध करें कि पूरे खाते को बंद करने के बजाय केवल विवादित राशि (Lien Amount) को होल्ड पर रखें। तीसरा—संबंधित साइबर सेल के जांच अधिकारी (Investigating Officer) से संपर्क कर उस लेनदेन का वैध सबूत (बिल/चैट/आधार) जमा करें ताकि वहां से NOC मिल सके।',
        mr: 'जर तुमचे बँक खाते फ्रीज किंवा होल्ड झाले असेल, तर तात्काळ तुमच्या बँक शाखेत जा आणि मॅनेजरकडून "Cyber Cell Acknowledgement Number" आणि कोणत्या राज्याच्या सायबर पोलिसांनी होल्ड लावला आहे याची माहिती घ्या. त्यानंतर संबंधित तपास अधिकाऱ्याला तुमच्या व्यवहाराचे अधिकृत पुरावे देऊन NOC मिळवा.'
      },
      warningSigns: {
        en: [
          'Accounts usually get frozen when you receive P2P crypto funds, gaming payouts, or payments from an unknown buyer whose money was linked to a fraud chain.',
          'Never pay online agents claiming they can unfreeze your bank account for a commission.'
        ],
        hi: [
          'अक्सर अनजान व्यक्ति से UPI पेमेंट लेने, P2P क्रिप्टो बेचने या ऑनलाइन गेमिंग से आए पैसों के कारण खाता फ्रीज हो जाता है।',
          'इंटरनेट पर "पैसे लेकर खाता अनफ्रीज कराने" का दावा करने वाले एजेंटों के झांसे में न आएं।'
        ],
        mr: [
          'अनोळखी व्यक्तीकडून आलेले UPI पेमेंट किंवा P2P क्रिप्टो व्यवहारामुळे खाते फ्रीज होऊ शकते.',
          'पैसे घेऊन खाते सुरू करून देणाऱ्या बनावट एजंटांपासून सावध राहा.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Get the 14-digit NCRP Acknowledgement Number and Investigating Officer (IO) contact details from your bank branch.',
          'STEP 2: Identify the exact disputed credit transaction in your bank statement.',
          'STEP 3: Submit your KYC and transaction proof to the concerned Cyber Police Station IO via email/post.',
          'STEP 4: Request the bank to convert a total Debit Freeze into a partial Lien on the disputed amount only.'
        ],
        hi: [
          'कदम 1: अपनी बैंक शाखा से शिकायत का Acknowledgement Number और संबंधित साइबर पुलिस थाने का विवरण प्राप्त करें।',
          'कदम 2: अपने बैंक स्टेटमेंट में उस ट्रांजैक्शन की पहचान करें जिसकी वजह से होल्ड लगा है।',
          'कदम 3: संबंधित साइबर पुलिस के जांच अधिकारी (IO) को अपने लेनदेन का वैध प्रमाण और KYC भेजें।',
          'कदम 4: बैंक को आवेदन दें कि पूरे खाते को फ्रीज करने के बजाय केवल विवादित रकम (Lien Amount) को होल्ड किया जाए।'
        ],
        mr: [
          'पाऊल 1: बँक शाखेतून तक्रारीचा Acknowledgement Number आणि संबंधित सायबर पोलीस ठाण्याची माहिती घ्या.',
          'पाऊल 2: बँक स्टेटमेंटमधील संशयास्पद व्यवहार तपासा.',
          'पाऊल 3: तपास अधिकाऱ्याला (IO) तुमच्या व्यवहाराचे पुरावे आणि KYC सादर करा.',
          'पाऊल 4: फक्त वादग्रस्त रकमेवर Lien ठेवून उर्वरित खाते सुरू करण्याची बँकेला विनंती करा.'
        ]
      }
    }
  ];

  const CONVERSATIONAL_INTENTS = [
    ...SPECIALIZED_PROBLEM_SOLVERS,
    {
      id: 'emergency_money_lost',
      keywords: [
        'already shared', 'gave otp', 'shared otp', 'money deducted', 'money cut', 'lost money', 'scammed me', 'stole money', 'account emptied', 'paid money', 'sent money',
        'paise kat gaye', 'otp de diya', 'dhokha ho gaya', 'paise chale gaye', 'fraud ho gaya', 'scam ho gaya', 'thagi ho gayi', 'loot liya',
        'पैसे कट गए', 'ओटीपी दे दिया', 'धोखा हो गया', 'ठगी हो गई', 'पैसे चले गए', 'पैसे भेज दिए', 'फ्रॉड हो गया',
        'पैसे कटले', 'ओटीपी दिला', 'फसवणूक झाली', 'पैसे गेले', 'पैसे पाठवले'
      ],
      icon: '🚨',
      title: {
        en: 'URGENT: Money Deducted / Cyber Fraud Happened (Golden Hour Solution)',
        hi: 'तत्काल समाधान: पैसे कट गए या साइबर धोखाधड़ी हो गई (Golden Hour)',
        mr: 'तातडीचा उपाय: पैसे कटले किंवा सायबर फसवणूक झाली (Golden Hour)'
      },
      conversationalReply: {
        en: 'Please do not panic! Since money was deducted or a fraud happened to you, you are in the critical Golden Hour. Step 1: Immediately dial 1930 from your phone right now—the Government of India I4C system can freeze the scammer’s bank account before they withdraw your money. Step 2: Call your bank immediately to block your UPI, NetBanking, and Debit Card. Step 3: Save screenshots of the 12-digit UTR number and file an official complaint at cybercrime.gov.in.',
        hi: 'कृपया घबराएं नहीं! यदि आपके खाते से पैसे कट गए हैं या धोखाधड़ी हो गई है, तो तुरंत ये 4 कदम उठाएं: पहला—अभी तुरंत अपने फोन से राष्ट्रीय साइबर हेल्पलाइन 1930 डायल करें, जिससे भारत सरकार का I4C सिस्टम ठग के बैंक खाते को तुरंत फ्रीज कर सके। दूसरा—तुरंत अपने बैंक के कस्टमर केयर पर कॉल करके अपना UPI, नेट बैंकिंग और एटीएम कार्ड ब्लॉक करवाएं। तीसरा—12 अंकों के ट्रांजैक्शन नंबर (UTR) का स्क्रीनशॉट लें और cybercrime.gov.in पर अपनी शिकायत दर्ज करें।',
        mr: 'कृपया घाबरू नका! जर तुमच्या खात्यातून पैसे कटले असतील किंवा फसवणूक झाली असेल, तर तात्काळ आत्ताच 1930 या राष्ट्रीय हेल्पलाइनवर कॉल करा. भारत सरकारची I4C प्रणाली फसवणूक करणाऱ्याचे बँक खाते गोठवू शकते. तसेच आपल्या बँकेला फोन करून UPI आणि कार्ड ब्लॉक करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
      },
      warningSigns: {
        en: [
          'Scammers try to move stolen funds across accounts within the first 1 to 2 hours (Golden Hour).',
          'Beware of fake "recovery agents" calling you later asking for fees to refund your lost money.'
        ],
        hi: [
          'जालसाज 1 से 2 घंटे (Golden Hour) के भीतर चोरी किए गए पैसों को दूसरे खातों में ट्रांसफर करने की कोशिश करते हैं।',
          'पैसे वापस दिलाने के नाम पर दोबारा पैसे मांगने वाले फर्जी कॉल से सावधान रहें।'
        ],
        mr: [
          'भामटे 1 ते 2 तासांत चोरलेले पैसे इतर खात्यांमध्ये वळवण्याचा प्रयत्न करतात.',
          'पैसे परत मिळवून देण्याच्या नावाखाली पुन्हा पैसे मागणाऱ्यांपासून सावध राहा.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Dial 1930 immediately (National Cyber Crime Helpline, 24x7 Toll-Free).',
          'STEP 2: Block your bank account, UPI ID, and Debit/Credit cards via your bank helpline.',
          'STEP 3: Save screenshots of the transaction UTR number, scammer phone number, and SMS.',
          'STEP 4: File an official report at cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: तुरंत 1930 डायल करें (राष्ट्रीय साइबर हेल्पलाइन, 24x7 टोल-फ्री)।',
          'कदम 2: अपने बैंक को कॉल करके UPI, नेट बैंकिंग और कार्ड तुरंत ब्लॉक करें।',
          'कदम 3: ट्रांजैक्शन नंबर (UTR), फोन नंबर और चैट का स्क्रीनशॉट सुरक्षित रखें।',
          'कदम 4: cybercrime.gov.in पर अपनी आधिकारिक शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: तात्काळ 1930 डायल करा (राष्ट्रीय सायबर हेल्पलाइन, 24x7 टोल-फ्री).',
          'पाऊल 2: बँकेशी संपर्क साधून UPI, नेट बँकिंग आणि एटीएम कार्ड ब्लॉक करा.',
          'पाऊल 3: ट्रान्झॅक्शन आयडी (UTR), मेसेज आणि कॉलचे स्क्रीनशॉट जपून ठेवा.',
          'पाऊल 4: cybercrime.gov.in वर अधिकृत तक्रार नोंदवा.'
        ]
      }
    },
    {
      id: 'greeting_assistant',
      keywords: [
        'hello', 'hi ', 'hey', 'namaste', 'namaskar', 'who are you', 'how do you work', 'good morning', 'good evening', 'help me',
        'नमस्ते', 'हेलो', 'आप कौन हैं', 'कैसे काम', 'नमस्कार', 'तुम्ही कोण आहात', 'मदद करो', 'मदत करा'
      ],
      icon: '🤖',
      title: {
        en: 'Hello! I am Voice Saathi — Your AI Cyber Safety Companion',
        hi: 'नमस्ते! मैं वॉइस साथी हूँ — आपका साइबर सुरक्षा सहायक',
        mr: 'नमस्कार! मी व्हॉइस साथी आहे — तुमचा सायबर सुरक्षा मित्र'
      },
      conversationalReply: {
        en: 'Namaste! I am Voice Saathi, your cyber-safety voice assistant. Tell me about any suspicious call, OTP request, QR code, electricity bill SMS, Telegram job offer, or Digital Arrest threat in English, Hindi, or Marathi, and I will analyze it and guide you immediately.',
        hi: 'नमस्ते! मैं वॉइस साथी हूँ, आपका साइबर सुरक्षा वॉइस असिस्टेंट। मुझे किसी भी संदिग्ध कॉल, OTP की मांग, बिजली बिल के एसएमएस, क्यूआर कोड या डिजिटल अरेस्ट कॉल के बारे में बोलकर बताएं — मैं तुरंत आपको सुरक्षित रहने का उपाय बताऊंगा।',
        mr: 'नमस्कार! मी व्हॉइस साथी आहे, तुमचा सायबर सुरक्षा सहाय्यक. मला कोणत्याही संशयास्पद कॉल, OTP मागणी, वीज बिल मेसेज किंवा डिजिटल अरेस्ट कॉल बद्दल सांगा — मी तुम्हाला लगेच सुरक्षेचे उपाय सांगेन.'
      },
      warningSigns: {
        en: [
          'Try saying: "Someone called from my bank asking for my 6-digit OTP"',
          'Try saying: "Police officer on Skype video call threatening digital arrest"',
          'Try saying: "Buyer sent a QR code on WhatsApp to receive money"'
        ],
        hi: [
          'बोलकर देखें: "कोई बैंक अधिकारी बनकर मुझसे OTP मांग रहा है"',
          'बोलकर देखें: "वीडियो कॉल पर पुलिस बनकर डिजिटल अरेस्ट की धमकी दे रहे हैं"',
          'बोलकर देखें: "पैसे भेजने के नाम पर क्यूआर कोड स्कैन करने को कह रहे हैं"'
        ],
        mr: [
          'बोलून पहा: "बँकेतून बोलतोय सांगून कोणीतरी OTP मागत आहे"',
          'बोलून पहा: "व्हिडिओ कॉलवर पोलीस सांगून डिजिटल अरेस्टची धमकी देत आहेत"',
          'बोलून पहा: "पैसे मिळवण्यासाठी QR कोड स्कॅन करायला सांगत आहेत"'
        ]
      },
      actions: {
        en: [
          'Tap the microphone button and speak naturally.',
          'Never share your real OTP, PIN, or password.',
          'For financial cyber fraud emergencies, call 1930 immediately.'
        ],
        hi: [
          'माइक बटन दबाकर अपनी भाषा में स्वाभाविक रूप से बोलें।',
          'अपना असली OTP, PIN या पासवर्ड कभी किसी को न बताएं।',
          'आर्थिक धोखाधड़ी होने पर तुरंत 1930 डायल करें।'
        ],
        mr: [
          'माइक बटण दाबून आपल्या भाषेत सहजपणे बोला.',
          'तुमचा खरा OTP, PIN किंवा पासवर्ड कधीही कोणाला सांगू नका.',
          'आर्थिक फसवणूक झाल्यास तात्काळ 1930 डायल करा.'
        ]
      }
    }
  ];

  function initToolsPage() {
    initVoiceSaathi();
    initQuiz();
    renderSchemes();
    initI4CMap();

    // Universal language change listeners to keep quiz in sync
    document.addEventListener('cybersathi-lang-change', () => {
      if (document.getElementById('quizApp')) {
        renderQuizQuestion();
      }
    });

    window.addEventListener('languageChanged', () => {
      if (document.getElementById('quizApp')) {
        renderQuizQuestion();
      }
    });

    document.querySelectorAll('#siteLangSelect, #language, .lang-select').forEach(sel => {
      sel.addEventListener('change', () => {
        setTimeout(() => {
          if (document.getElementById('quizApp')) {
            renderQuizQuestion();
          }
        }, 50);
      });
    });
  }

  // ==========================================
  // 1. Voice Saathi Speech Recognition & AI Response Engine
  // ==========================================
  function initVoiceSaathi() {
    const micBtn = document.getElementById('voiceMicBtn');
    if (!micBtn || window.__voiceSaathiInitialized) return;
    window.__voiceSaathiInitialized = true;
    voiceInitialized = true;

    const micIcon = document.getElementById('voiceMicIcon');
    const pulseRing = document.getElementById('micPulseRing');
    const statusEl = document.getElementById('voiceStatus') || document.getElementById('voiceMicStatusText');
    const subStatusEl = document.getElementById('voiceSubStatus') || document.getElementById('voiceMicSubtext');
    const startBtn = document.getElementById('voiceStartBtn');
    const stopBtn = document.getElementById('voiceStopBtn');
    const doneSpeakingBtn = document.getElementById('voiceDoneSpeakingBtn');
    const waveVisualizer = document.getElementById('voiceWaveVisualizer');
    const tryAgainBtn = document.getElementById('voiceTryAgainBtn');
    const clearBtn = document.getElementById('voiceClearBtn');
    const saidBox = document.getElementById('voiceSaidBox');
    const saidText = document.getElementById('voiceSaidText');
    const analysisCard = document.getElementById('voiceAnalysisCard');
    const listenBtn = document.getElementById('voiceListenBtn');
    const textInput = document.getElementById('voiceTextInput');
    const textSubmitBtn = document.getElementById('voiceTextSubmitBtn');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    function getLangShort() {
      return voiceLang.startsWith('hi') ? 'hi' : voiceLang.startsWith('mr') ? 'mr' : 'en';
    }

    function syncLangPills(targetLang) {
      voiceLang = targetLang;
      if (recognition) {
        try { recognition.lang = voiceLang; } catch (e) {}
      }
      const langBtns = document.querySelectorAll('.voice-lang-btn');
      langBtns.forEach(btn => {
        const target = btn.dataset.lang || btn.dataset.voiceLang;
        btn.classList.toggle('active', target === targetLang);
      });
    }

    function updateIdleLabels() {
      const l = getLangShort();
      if (statusEl) {
        statusEl.textContent = l === 'hi' ? '🎙️ बोलने के लिए माइक दबाएं (हिंदी)' :
                               l === 'mr' ? '🎙️ बोलण्यासाठी माइक दाबा (मराठी)' :
                               '🎙️ Tap to Speak (English)';
      }
      if (subStatusEl) {
        subStatusEl.textContent = l === 'hi' ? 'माइक दबाएं और अपनी समस्या हिंदी या हिंग्लिश में बोलें (उदा. "मेरे साथ UPI फ्रॉड हुआ है")' :
                                  l === 'mr' ? 'माइक दाबा आणि आपली समस्या मराठीत बोला (उदा. "माझ्या खात्यातून पैसे गेले")' :
                                  'Tap the microphone and speak your cyber problem in English, Hindi, or Marathi.';
      }
    }

    // Default to Hindi ('hi-IN') or current site language
    const currentSiteLang = getLang();
    if (currentSiteLang === 'mr') voiceLang = 'mr-IN';
    else if (currentSiteLang === 'en') voiceLang = 'en-IN';
    else voiceLang = 'hi-IN';
    syncLangPills(voiceLang);
    updateIdleLabels();

    // Sync when site language changes
    window.addEventListener('languageChanged', (e) => {
      const code = (e && e.detail && e.detail.language) || getLang();
      const mapped = code === 'mr' ? 'mr-IN' : code === 'hi' ? 'hi-IN' : 'en-IN';
      syncLangPills(mapped);
      if (!isListening) updateIdleLabels();
    });
    document.addEventListener('cybersathi-lang-change', (e) => {
      const code = (e && e.detail && e.detail.language) || getLang();
      const mapped = code === 'mr' ? 'mr-IN' : code === 'hi' ? 'hi-IN' : 'en-IN';
      syncLangPills(mapped);
      if (!isListening) updateIdleLabels();
    });
    const siteLangSelect = document.getElementById('siteLangSelect');
    if (siteLangSelect) {
      siteLangSelect.addEventListener('change', () => {
        const code = siteLangSelect.value;
        const mapped = code === 'mr' ? 'mr-IN' : code === 'hi' ? 'hi-IN' : 'en-IN';
        syncLangPills(mapped);
        if (!isListening) updateIdleLabels();
      });
    }

    // Language selector pills (.voice-lang-btn)
    const langBtns = document.querySelectorAll('.voice-lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.lang || btn.dataset.voiceLang || 'hi-IN';
        syncLangPills(target);
        if (isListening) {
          stopRecognition(false);
          setTimeout(() => startRecognition(), 120);
        } else {
          updateIdleLabels();
        }
      });
    });

    function setUIListening(active) {
      isListening = active;
      if (micBtn) {
        if (active) micBtn.classList.add('listening');
        else micBtn.classList.remove('listening');
      }
      if (pulseRing) {
        if (active) pulseRing.classList.add('active');
        else pulseRing.classList.remove('active');
      }
      if (micIcon) {
        micIcon.textContent = active ? '🔴' : '🎙️';
      }
      if (waveVisualizer) {
        waveVisualizer.style.display = active ? 'flex' : 'none';
      }
      if (doneSpeakingBtn) {
        doneSpeakingBtn.style.display = active ? 'inline-flex' : 'none';
      }
      if (startBtn) startBtn.disabled = active;
      if (stopBtn) stopBtn.disabled = !active;
    }

    function clearTimers() {
      if (silenceDebounceTimer) {
        clearTimeout(silenceDebounceTimer);
        silenceDebounceTimer = null;
      }
      if (maxSessionTimer) {
        clearTimeout(maxSessionTimer);
        maxSessionTimer = null;
      }
    }

    function detachRecognitionInstance() {
      if (recognition) {
        recognition.onstart = null;
        recognition.onaudiostart = null;
        recognition.onsoundstart = null;
        recognition.onspeechstart = null;
        recognition.onresult = null;
        recognition.onspeechend = null;
        recognition.onsoundend = null;
        recognition.onaudioend = null;
        recognition.onerror = null;
        recognition.onend = null;
        try { recognition.abort(); } catch (e) {}
        recognition = null;
      }
    }

    function getCombinedTranscript() {
      return (finalTranscriptAcc + ' ' + interimTranscriptAcc).replace(/\s+/g, ' ').trim();
    }

    function handleNoSpeechCaptured() {
      clearTimers();
      shouldKeepListening = false;
      setUIListening(false);
      detachRecognitionInstance();
      const noSpeechMsg = "No speech was detected. Please speak clearly near your microphone and try again.";
      if (statusEl) statusEl.textContent = '🎙️ ' + noSpeechMsg;
      if (subStatusEl) subStatusEl.textContent = noSpeechMsg;
      if (saidBox && saidText) {
        saidBox.style.display = 'block';
        saidText.innerHTML = `
          <div style="font-size: 13.5px; color: var(--cs-danger); margin-bottom: 8px;">
            <strong>⚠️ ${escapeHtmlStr(noSpeechMsg)}</strong>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
            <button type="button" class="btn btn-primary btn-sm quick-voice-sim" data-topic="kyc_fraud" data-label="Mere sath kyc fraud hogya hain mein kya karu" style="font-weight: 700; border-color: var(--cs-danger);">🪪 "Mere sath KYC fraud hogya hai"</button>
            <button type="button" class="btn btn-primary btn-sm quick-voice-sim" data-topic="upi_fraud" data-label="Mere saath UPI fraud hua hai" style="font-weight: 700; border-color: var(--cs-danger);">💳 "Mere saath UPI fraud hua hai"</button>
            <button type="button" class="btn btn-primary btn-sm quick-voice-sim" data-topic="phishing" data-label="Mere saath phishing attack ho gaya hai kya karen">🎣 "Mere saath phishing attack ho gaya"</button>
            <button type="button" class="btn btn-primary btn-sm quick-voice-sim" data-topic="emergency_money_lost" data-label="Paise kat gaye / Dhokha ho gaya, kya kare">🚨 "Paise kat gaye / Dhokha ho gaya"</button>
            <button type="button" class="btn btn-primary btn-sm quick-voice-sim" data-topic="otp_fraud" data-label="Caller is asking for my 6-digit bank OTP">🔐 "Caller asking for OTP"</button>
            <button type="button" class="btn btn-primary btn-sm quick-voice-sim" data-topic="digital_arrest_scam" data-label="Police video call threatening Digital Arrest">👮 "Digital Arrest video call"</button>
          </div>
        `;
        saidText.querySelectorAll('.quick-voice-sim').forEach(b => {
          b.addEventListener('click', () => {
            const lbl = b.dataset.label;
            const tpc = b.dataset.topic;
            saidText.innerHTML = `<span style="font-size: 17px; font-weight: 600; color: var(--cs-deep);">"${escapeHtmlStr(lbl)}"</span>`;
            if (textInput) textInput.value = lbl;
            analyzeAndDisplayScam(lbl, tpc);
          });
        });
      }
    }

    function handleMicBlocked() {
      clearTimers();
      shouldKeepListening = false;
      setUIListening(false);
      detachRecognitionInstance();
      const blockedMsg = "Microphone permission is blocked. Please allow microphone access for localhost in your browser settings.";
      if (statusEl) statusEl.textContent = '🔒 Microphone Permission Blocked';
      if (subStatusEl) subStatusEl.textContent = blockedMsg;
      if (saidBox && saidText) {
        saidBox.style.display = 'block';
        saidText.innerHTML = `<span style="color: var(--cs-danger); font-weight: 600;">🔒 ${escapeHtmlStr(blockedMsg)}</span>`;
      }
    }

    function handleUnsupported() {
      clearTimers();
      shouldKeepListening = false;
      setUIListening(false);
      detachRecognitionInstance();
      const unsupportedMsg = "Speech recognition is not supported in this browser. Please use Microsoft Edge or Google Chrome.";
      if (statusEl) statusEl.textContent = '⚠️ Speech Recognition Not Supported';
      if (subStatusEl) subStatusEl.textContent = unsupportedMsg;
      if (saidBox && saidText) {
        saidBox.style.display = 'block';
        saidText.innerHTML = `<span style="color: var(--cs-danger); font-weight: 600;">⚠️ ${escapeHtmlStr(unsupportedMsg)}</span>`;
      }
    }

    function finalizeAndAnalyze() {
      clearTimers();
      shouldKeepListening = false;
      setUIListening(false);
      if (recognition) {
        try { recognition.stop(); } catch (e) {}
      }
      const fullText = getCombinedTranscript();
      if (fullText.length > 0) {
        if (saidBox && saidText) {
          saidBox.style.display = 'block';
          saidText.innerHTML = `<span style="font-size: 17px; font-weight: 600; color: var(--cs-deep);">"${escapeHtmlStr(fullText)}"</span>`;
        }
        if (textInput) textInput.value = fullText;
        analyzeAndDisplayScam(fullText);
      } else {
        handleNoSpeechCaptured();
      }
    }

    async function startRecognition() {
      // 1. Verify browser support
      if (!SpeechRecognition) {
        handleUnsupported();
        return;
      }

      // If already listening, clicking again finishes and analyzes immediately
      if (isListening) {
        finalizeAndAnalyze();
        return;
      }

      // 2. Cleanly stop previous session & synthesis
      detachRecognitionInstance();
      clearTimers();
      if (window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }

      finalTranscriptAcc = '';
      interimTranscriptAcc = '';
      hasVoiceActivity = false;
      shouldKeepListening = true;
      sessionStartTime = Date.now();

      // Required console logs:
      console.log('[Voice Saathi] Starting recognition');
      console.log('[Voice Saathi] Language:', voiceLang);

      // 3. Cleanly request mic permission via getUserMedia if available
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          // Stop media tracks immediately so microphone hardware is released for Web Speech API!
          stream.getTracks().forEach(track => track.stop());
        } catch (permErr) {
          console.error('[Voice Saathi] Error:', permErr.name || permErr);
          if (permErr.name === 'NotAllowedError' || permErr.name === 'PermissionDeniedError') {
            handleMicBlocked();
            return;
          }
        }
      }

      // 4. Create single SpeechRecognition instance
      let inst;
      try {
        inst = new SpeechRecognition();
      } catch (createErr) {
        console.error('[Voice Saathi] Error:', createErr);
        handleUnsupported();
        return;
      }

      recognition = inst;
      inst.lang = voiceLang;
      inst.continuous = true;
      inst.interimResults = true;
      inst.maxAlternatives = 1;

      // 5. Implement all 10 event handlers
      inst.onstart = () => {
        console.log('[Voice Saathi] Recognition started');
        setUIListening(true);
        const l = getLangShort();
        if (statusEl) {
          statusEl.textContent = l === 'hi' ? '🔴 सुन रहे हैं (हिंदी)... अब बोलिए' :
                                 l === 'mr' ? '🔴 ऐकत आहोत (मराठी)... आता बोला' :
                                 '🔴 Listening (English)... Speak Now';
        }
        if (subStatusEl) {
          subStatusEl.textContent = l === 'hi' ? 'माइक चालू है — अपनी समस्या बोलें (उदा. "मेरे साथ UPI फ्रॉड हुआ है")' :
                                    l === 'mr' ? 'माइक सुरू आहे — आपली समस्या बोला (उदा. "माझ्या खात्यातून पैसे गेले")' :
                                    'Microphone active — speak clearly near your microphone, then pause or tap "Done Speaking".';
        }
        if (saidBox && saidText && !getCombinedTranscript()) {
          saidBox.style.display = 'block';
          saidText.innerHTML = `<span style="color: var(--cs-blue); font-weight: 600;">🎙️ ${
            l === 'hi' ? 'माइक चालू है... अब बोलिए (उदा. "मेरे साथ UPI फ्रॉड हुआ है")' :
            l === 'mr' ? 'माइक सुरू आहे... आता बोला (उदा. "माझ्या खात्यातून पैसे गेले")' :
            'Microphone is active... Speak your question now'
          }...</span>`;
        }
      };

      inst.onaudiostart = () => {
        // Audio stream active
      };

      inst.onsoundstart = () => {
        // Sound detected by microphone
      };

      inst.onspeechstart = () => {
        console.log('[Voice Saathi] Speech detected');
        hasVoiceActivity = true;
      };

      inst.onresult = (event) => {
        interimTranscriptAcc = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const res = event.results[i];
          const textPiece = res[0].transcript;
          if (res.isFinal) {
            finalTranscriptAcc += textPiece + ' ';
          } else {
            interimTranscriptAcc += textPiece;
          }
        }

        const combined = getCombinedTranscript();
        console.log('[Voice Saathi] Result:', combined);

        if (combined) {
          hasVoiceActivity = true;
          if (saidBox && saidText) {
            saidBox.style.display = 'block';
            saidText.innerHTML = `
              <span style="font-size: 17px; font-weight: 600; color: var(--cs-deep);">"${escapeHtmlStr(combined)}"</span>
              <span style="display: block; font-size: 12px; color: var(--cs-muted); margin-top: 4px;">⏳ Listening... (Pause for 1.5s or tap "Done Speaking" to finish)</span>
            `;
          }
          if (textInput) textInput.value = combined;

          // 1.5s silence debounce timer
          if (silenceDebounceTimer) clearTimeout(silenceDebounceTimer);
          silenceDebounceTimer = setTimeout(() => {
            if (shouldKeepListening && getCombinedTranscript().length > 0) {
              finalizeAndAnalyze();
            }
          }, 1500);
        }
      };

      inst.onspeechend = () => {
        // Speech ended
      };

      inst.onsoundend = () => {
        // Sound ended
      };

      inst.onaudioend = () => {
        // Audio capture ended
      };

      inst.onerror = (event) => {
        const errType = event.error;
        console.error('[Voice Saathi] Error:', errType);

        if (getCombinedTranscript().length > 0) {
          finalizeAndAnalyze();
          return;
        }

        clearTimers();
        shouldKeepListening = false;
        setUIListening(false);

        if (errType === 'not-allowed' || errType === 'service-not-allowed') {
          handleMicBlocked();
        } else if (errType === 'no-speech') {
          handleNoSpeechCaptured();
        } else if (errType === 'audio-capture') {
          if (statusEl) statusEl.textContent = '⚠️ Microphone Hardware Not Connected / In Use';
          if (subStatusEl) subStatusEl.textContent = 'Microphone hardware was not detected or is in use. Please check your microphone settings.';
          if (saidBox && saidText) {
            saidBox.style.display = 'block';
            saidText.innerHTML = '<span style="color: var(--cs-danger); font-weight: 600;">⚠️ Microphone hardware was not detected or is in use. Please check your microphone settings.</span>';
          }
        } else if (errType === 'network') {
          if (statusEl) statusEl.textContent = '🌐 Speech Service Network Notice';
          if (subStatusEl) subStatusEl.textContent = 'Network connection error while reaching speech recognition service. Please check your internet connection.';
          if (saidBox && saidText) {
            saidBox.style.display = 'block';
            saidText.innerHTML = '<span style="color: var(--cs-danger); font-weight: 600;">🌐 Network connection error while reaching speech recognition service. Please check your internet connection.</span>';
          }
        } else if (errType === 'aborted') {
          updateIdleLabels();
        } else {
          handleNoSpeechCaptured();
        }
      };

      inst.onend = () => {
        console.log('[Voice Saathi] Recognition ended');
        setUIListening(false);

        if (getCombinedTranscript().length > 0) {
          finalizeAndAnalyze();
          return;
        }

        if (shouldKeepListening) {
          handleNoSpeechCaptured();
        }
      };

      // 15-second safety timeout
      maxSessionTimer = setTimeout(() => {
        if (shouldKeepListening) {
          finalizeAndAnalyze();
        }
      }, 15000);

      try {
        inst.start();
      } catch (startErr) {
        console.error('[Voice Saathi] Error:', startErr);
        clearTimers();
        shouldKeepListening = false;
        setUIListening(false);
        handleNoSpeechCaptured();
      }
    }

    function stopRecognition(shouldAnalyze = true) {
      if (shouldAnalyze) {
        finalizeAndAnalyze();
      } else {
        clearTimers();
        shouldKeepListening = false;
        setUIListening(false);
        detachRecognitionInstance();
        updateIdleLabels();
      }
    }

    function clearAll() {
      stopRecognition(false);
      if (window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      finalTranscriptAcc = '';
      interimTranscriptAcc = '';
      hasVoiceActivity = false;
      if (saidBox) saidBox.style.display = 'none';
      if (saidText) saidText.textContent = '';
      if (analysisCard) analysisCard.style.display = 'none';
      if (textInput) textInput.value = '';
      updateIdleLabels();
    }

    // Bind controls
    micBtn.addEventListener('click', startRecognition);
    if (doneSpeakingBtn) doneSpeakingBtn.addEventListener('click', () => finalizeAndAnalyze());
    if (startBtn) startBtn.addEventListener('click', () => { if (!isListening) startRecognition(); });
    if (stopBtn) stopBtn.addEventListener('click', () => stopRecognition(true));
    if (tryAgainBtn) tryAgainBtn.addEventListener('click', () => { clearAll(); setTimeout(startRecognition, 100); });
    if (clearBtn) clearBtn.addEventListener('click', clearAll);

    // Text Fallback Input
    if (textSubmitBtn && textInput) {
      const handleTextSubmit = () => {
        const query = textInput.value.trim();
        if (!query) {
          textInput.focus();
          return;
        }
        stopRecognition(false);
        if (saidBox && saidText) {
          saidText.innerHTML = `<span style="font-size: 17px; font-weight: 600; color: var(--cs-deep);">"${escapeHtmlStr(query)}"</span>`;
          saidBox.style.display = 'block';
        }
        analyzeAndDisplayScam(query);
      };

      textSubmitBtn.addEventListener('click', handleTextSubmit);
      textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleTextSubmit();
        }
      });
    }

    // Quick Scenario Chips & 1-Tap Voice Prompts
    document.querySelectorAll('.voice-sample-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        stopRecognition(false);
        const topicKey = btn.dataset.voiceTopic || '';
        const topicText = btn.dataset.voiceQuery || btn.textContent.trim();
        if (saidBox && saidText) {
          saidText.innerHTML = `<span style="font-size: 17px; font-weight: 600; color: var(--cs-deep);">"${escapeHtmlStr(topicText)}"</span>`;
          saidBox.style.display = 'block';
        }
        if (textInput) textInput.value = topicText;
        analyzeAndDisplayScam(topicText, topicKey);
      });
    });

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        if (currentSpokenText) speakText(currentSpokenText);
      });
    }

    window.triggerVoiceSaathiMic = startRecognition;
  }

  function escapeHtmlStr(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Auto-detect Devanagari AND Romanized Hindi (Hinglish) / Romanized Marathi in spoken transcript
  function detectSpokenLanguage(queryText) {
    if (!queryText) return voiceLang.startsWith('hi') ? 'hi' : voiceLang.startsWith('mr') ? 'mr' : 'en';
    const lower = queryText.toLowerCase();

    // 1. Check Devanagari Script
    const hasDevanagari = /[\u0900-\u097F]/.test(queryText);
    if (hasDevanagari) {
      const marathiMarkers = ['आहे', 'नाही', 'काय', 'माझा', 'मला', 'सांगा', 'झाली', 'पैसे', 'करावे', 'कसे', 'मागत', 'करू'];
      for (const m of marathiMarkers) {
        if (queryText.includes(m)) {
          voiceLang = 'mr-IN';
          syncLangPills('mr-IN');
          return 'mr';
        }
      }
      if (!voiceLang.startsWith('mr')) {
        voiceLang = 'hi-IN';
        syncLangPills('hi-IN');
        return 'hi';
      }
    }

    // 2. Check Romanized Marathi (e.g., "majha", "mala", "kay karu", "zala ahe")
    const romanMarathiWords = [
      'majha', 'majhya', 'mala', 'zala', 'zhala', 'zali', 'ahe', 'aahe', 'kay karu', 'kaay karu',
      'sanga', 'kase', 'fasavnuk', 'koni', 'paise gele', 'madat kara'
    ];
    const words = lower.split(/[\s,?.!]+/);
    if (romanMarathiWords.some(mw => mw.includes(' ') ? lower.includes(mw) : words.includes(mw))) {
      voiceLang = 'mr-IN';
      syncLangPills('mr-IN');
      return 'mr';
    }

    // 3. Check Romanized Hindi / Hinglish (e.g., "Mere saath phishing attack ho Gaya hai kya Karen" or "mere sath kyc fraud hogya hain mein kya karu")
    const romanHindiWords = [
      'mere', 'mera', 'meri', 'mujhe', 'mujhse', 'hamare', 'saath', 'sath', 'ho', 'gaya', 'gayi', 'gaye', 'hogya', 'hogaya',
      'hai', 'hain', 'kya', 'kare', 'karen', 'karu', 'karun', 'kaise', 'batao', 'bataiye', 'madad', 'mein', 'main', 'me',
      'paise', 'paisa', 'kat', 'chale', 'dhokha', 'thagi', 'maang', 'mang', 'raha', 'rahi', 'aaya',
      'kisko', 'kahan', 'shikayat', 'bachao', 'koi', 'bol', 'puch', 'de', 'diya', 'liya'
    ];
    let hindiWordHits = 0;
    for (const w of words) {
      if (romanHindiWords.includes(w)) hindiWordHits++;
    }
    if (
      hindiWordHits >= 2 ||
      lower.includes('mere saath') ||
      lower.includes('mere sath') ||
      lower.includes('ho gaya') ||
      lower.includes('hogya') ||
      lower.includes('kya kare') ||
      lower.includes('kya karu') ||
      lower.includes('mein kya karu') ||
      lower.includes('paise kat')
    ) {
      voiceLang = 'hi-IN';
      syncLangPills('hi-IN');
      return 'hi';
    }

    return voiceLang.startsWith('hi') ? 'hi' : voiceLang.startsWith('mr') ? 'mr' : 'en';
  }

  function syncLangPills(targetVoiceLang) {
    document.querySelectorAll('.voice-lang-btn').forEach(btn => {
      const bLang = btn.dataset.lang || btn.dataset.voiceLang;
      btn.classList.toggle('active', bLang === targetVoiceLang);
    });
  }

  // Check if the user is saying a cyber incident ALREADY happened to them
  function isVictimIncidentQuery(cleanQuery) {
    const victimPhrases = [
      'mere saath', 'mere sath', 'ho gaya', 'hogaya', 'ho gya', 'hogya', 'ho gayi', 'kya karen', 'kya kare', 'kya karu', 'kya karun', 'mein kya karu',
      'happened to me', 'i clicked', 'i shared', 'i gave', 'i lost', 'what should i do', 'help me', 'victim',
      'majhya sobat', 'zala ahe', 'zhala aahe', 'kay karu', 'paise kat', 'otp de diya', 'link par click',
      'हो गया', 'हो गया है', 'क्या करें', 'क्या करूँ', 'मेरे साथ', 'झाला आहे', 'काय करू'
    ];
    return victimPhrases.some(p => cleanQuery.includes(p));
  }

  // Dynamic Problem Synthesizer when user speaks an unlisted/unique cyber problem
  function buildDynamicProblemSolution(queryText, langKey) {
    const q = String(queryText || '').trim();
    return {
      id: 'custom_problem_solution',
      icon: '🛡️',
      title: {
        en: `Custom Solution for Your Problem: "${q}"`,
        hi: `आपकी समस्या ("${q}") के लिए तुरंत समाधान`,
        mr: `तुमच्या समस्येसाठी ("${q}") तात्काळ उपाय`
      },
      conversationalReply: {
        en: ` regarding your problem "${q}", follow these immediate cyber-safety steps: First, if any unknown link or app was opened, disconnect your phone internet and uninstall any unfamiliar APK app. Second, do not share any OTP, UPI PIN, or password, and change your bank/email passwords from another safe device. Third, if any money was deducted or your account is at risk, immediately dial the Government of India Cyber Helpline 1930 and file a complaint at cybercrime.gov.in.`,
        hi: `आपकी समस्या "${q}" के समाधान के लिए तुरंत ये कदम उठाएं: पहला—यदि आपने किसी अनजान लिंक पर क्लिक किया है या कोई अनजान ऐप डाउनलोड हुआ है, तो तुरंत फोन का इंटरनेट बंद करें और उस ऐप को हटा दें। दूसरा—किसी दूसरे सुरक्षित फोन से अपने ईमेल व बैंक का पासवर्ड बदलें और बैंक में कॉल करके अपना UPI व एटीएम कार्ड सुरक्षित/ब्लॉक करवाएं। तीसरा—यदि खाते से पैसे कट गए हैं या धोखाधड़ी हुई है, तो बिना देर किए तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 डायल करें और cybercrime.gov.in पर शिकायत दर्ज करें।`,
        mr: `तुमच्या "${q}" या समस्येवर तात्काळ उपाय म्हणून हे करा: पहिले—जर तुम्ही कोणत्याही अनोळखी लिंकवर क्लिक केले असेल किंवा ॲप डाऊनलोड झाले असेल, तर लगेच फोनचे इंटरनेट बंद करा आणि ते ॲप डिलीट करा. दुसरे—दुसऱ्या सुरक्षित फोनवरून तुमचे पासवर्ड बदला आणि बँकेला फोन करून UPI व कार्ड ब्लॉक करा. तिसरे—जर पैसे कटले असतील तर तात्काळ 1930 या राष्ट्रीय हेल्पलाइनवर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.`
      },
      warningSigns: {
        en: [
          `Analyzed your specific issue: "${q}".`,
          'Attackers often follow up with fake "customer support" or "refund" calls—never share an OTP or install AnyDesk/TeamViewer.',
          'The first 1–2 hours (Golden Hour) are critical to freeze fraudulent bank transfers via Helpline 1930.'
        ],
        hi: [
          `आपकी समस्या का विश्लेषण: "${q}"।`,
          'ठग अक्सर मदद या रिफंड के बहाने दोबारा कॉल करते हैं—किसी को भी OTP न बताएं और AnyDesk ऐप कभी डाउनलोड न करें।',
          'धोखाधड़ी के बाद पहले 1–2 घंटे (Golden Hour) में 1930 पर कॉल करने से आपके पैसे ठग के खाते में फ्रीज किए जा सकते हैं।'
        ],
        mr: [
          `तुमच्या समस्येचे विश्लेषण: "${q}".`,
          'फसवणूक करणारे रिफंडच्या नावाखाली पुन्हा फोन करू शकतात—कोणालाही OTP देऊ नका किंवा AnyDesk डाऊनलोड करू नका.',
          'पहिल्या 1 ते 2 तासांत (Golden Hour) 1930 वर कॉल केल्यास गेलेले पैसे गोठवता येतात.'
        ]
      },
      actions: {
        en: [
          'STEP 1: Disconnect phone internet if you clicked a suspicious link, and dial ##002# to cancel any secret call/SMS forwarding.',
          'STEP 2: Call your bank helpline immediately to block/secure your UPI, NetBanking, and Debit/Credit Cards.',
          'STEP 3: Dial 1930 (24x7 National Cyber Helpline) immediately if money was lost or compromised.',
          'STEP 4: Preserve all screenshots, phone numbers, and 12-digit UTR numbers, and report at cybercrime.gov.in.'
        ],
        hi: [
          'कदम 1: यदि किसी संदिग्ध लिंक या ऐप का मामला है, तो तुरंत फोन का इंटरनेट बंद करें और ##002# डायल करके कॉल/SMS फॉरवर्डिंग रद्द करें।',
          'कदम 2: अपने बैंक की आधिकारिक हेल्पलाइन पर कॉल करके अपना UPI, नेटबैंकिंग और ATM कार्ड तुरंत ब्लॉक/सुरक्षित करवाएं।',
          'कदम 3: यदि आर्थिक नुकसान हुआ है, तो तुरंत अभी 1930 (राष्ट्रीय साइबर हेल्पलाइन) डायल करें।',
          'कदम 4: सभी स्क्रीनशॉट, फोन नंबर और 12 अंकों का UTR नंबर संभाल कर रखें और cybercrime.gov.in पर शिकायत दर्ज करें।'
        ],
        mr: [
          'पाऊल 1: संशयास्पद लिंक किंवा ॲप उघडले असल्यास फोनचे इंटरनेट बंद करा आणि ##002# डायल करून फॉरवर्डिंग रद्द करा.',
          'पाऊल 2: बँकेच्या अधिकृत हेल्पलाइनवर फोन करून UPI आणि ATM कार्ड ब्लॉक करा.',
          'पाऊल 3: आर्थिक नुकसान झाले असल्यास तात्काळ 1930 या राष्ट्रीय हेल्पलाइनवर कॉल करा.',
          'पाऊल 4: सर्व पुरावे व स्क्रीनशॉट जपून ठेवा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
        ]
      }
    };
  }

  // 1.1 Context-Aware Conversational AI Matcher + Problem-Specific Solution Engine
  function analyzeAndDisplayScam(queryText, forcedTopicKey) {
    const analysisCard = document.getElementById('voiceAnalysisCard');
    const badgeEl = document.getElementById('voiceIssueBadge');
    const warningsList = document.getElementById('voiceWarningsList');
    const actionsList = document.getElementById('voiceActionsList');
    const statusEl = document.getElementById('voiceStatus') || document.getElementById('voiceMicStatusText');
    const subStatusEl = document.getElementById('voiceSubStatus') || document.getElementById('voiceMicSubtext');

    if (!analysisCard) return;

    const currentLangKey = detectSpokenLanguage(queryText);
    const rules = getVoiceScamRules();
    const cleanQuery = (queryText || '').toLowerCase();
    const isVictim = isVictimIncidentQuery(cleanQuery);

    let matchedRule = null;

    // 1. Check forced topic key
    if (forcedTopicKey) {
      matchedRule = CONVERSATIONAL_INTENTS.find(i => i.id === forcedTopicKey) ||
                    rules.find(r => r.id === forcedTopicKey || r.category === forcedTopicKey);
    }

    // 2. Check Specialized Real-World Problem Solvers FIRST (Wrong UPI, Lost Phone, Hacked Social/Email, Blackmail, Frozen Account)
    if (!matchedRule && cleanQuery) {
      for (const solver of SPECIALIZED_PROBLEM_SOLVERS) {
        if (solver.keywords.some(kw => cleanQuery.includes(kw.toLowerCase()))) {
          matchedRule = solver;
          break;
        }
      }
    }

    // 3. Score against all 12 Specific Scam Rules (Phishing, OTP, UPI, QR, KYC, Customer Care, Job, Shopping, Investment, WhatsApp, Digital Arrest, Identity/Loan)
    if (!matchedRule && cleanQuery) {
      let bestScore = 0;
      for (const rule of rules) {
        let score = 0;
        const extKws = EXTENDED_KEYWORDS[rule.id] || [];
        const ruleKws = Array.isArray(rule.keywords)
          ? rule.keywords
          : [
              ...((rule.keywords && rule.keywords.en) || []),
              ...((rule.keywords && rule.keywords.hi) || []),
              ...((rule.keywords && rule.keywords.mr) || [])
            ];
        const allKws = [...ruleKws, ...extKws];

        for (const kw of allKws) {
          const kwLower = String(kw || '').toLowerCase();
          if (kwLower && cleanQuery.includes(kwLower)) {
            score += kwLower.length > 4 ? 4 : 2;
          }
        }
        if (score > bestScore) {
          bestScore = score;
          matchedRule = rule;
        }
      }
    }

    // 4. If no specific scam category matched, check Urgent Conversational Intents (e.g. "paise kat gaye", greetings)
    if (!matchedRule && cleanQuery) {
      for (const intent of CONVERSATIONAL_INTENTS) {
        if (intent.keywords.some(kw => cleanQuery.includes(kw.toLowerCase()))) {
          matchedRule = intent;
          break;
        }
      }
    }

    // 5. If still no match, dynamically synthesize a solution tailored to the user's exact query!
    const displayData = matchedRule || buildDynamicProblemSolution(queryText, currentLangKey);
    if (!displayData) return;

    const ruleId = displayData.id || '';
    const aiExtra = AI_DETAILED_RESPONSES[ruleId] || null;

    // Determine Title (Prefer victim-specific recovery title when incident happened to user)
    const titleObj = (isVictim && aiExtra && aiExtra.victimTitle)
      ? aiExtra.victimTitle
      : (displayData.title || displayData.issue || {});
    const titleText = titleObj[currentLangKey] || titleObj.en || (matchedRule ? matchedRule.id : 'Cyber Safety Solution');
    const icon = displayData.icon || (aiExtra && aiExtra.icon) || '🛡️';

    // Select the most relevant conversational spoken reply
    let spokenReply = '';
    if (isVictim && aiExtra && aiExtra.victimReply && aiExtra.victimReply[currentLangKey]) {
      spokenReply = aiExtra.victimReply[currentLangKey];
    } else if (displayData.conversationalReply && displayData.conversationalReply[currentLangKey]) {
      spokenReply = displayData.conversationalReply[currentLangKey];
    } else if (aiExtra && aiExtra.victimReply && aiExtra.victimReply[currentLangKey]) {
      spokenReply = aiExtra.victimReply[currentLangKey];
    } else if (displayData.spokenSolution && displayData.spokenSolution[currentLangKey]) {
      spokenReply = displayData.spokenSolution[currentLangKey];
    }

    if (badgeEl) {
      badgeEl.innerHTML = `
        <span>${icon} ${escapeHtmlStr(titleText)}</span>
        <div style="margin-top: 10px; padding: 14px 18px; background: color-mix(in srgb, var(--cs-blue) 10%, var(--cs-card-bg)); border-left: 4px solid var(--cs-blue); border-radius: 8px; font-size: 15.5px; font-weight: 500; color: var(--cs-ink); line-height: 1.6;">
          <strong>🗣️ Voice Saathi AI (${currentLangKey === 'hi' ? 'हिंदी समाधान' : currentLangKey === 'mr' ? 'मराठी उपाय' : 'AI Solution'}):</strong><br>
          "${escapeHtmlStr(spokenReply)}"
        </div>
      `;
    }

    // Render Problem-Specific Risks / Warnings (Override static electricity/generic warnings when victim recovery applies)
    if (warningsList) {
      warningsList.innerHTML = '';
      const warningsObj = (isVictim && aiExtra && aiExtra.victimWarnings)
        ? aiExtra.victimWarnings
        : (displayData.warningSigns || {});
      const warnings = warningsObj[currentLangKey] || warningsObj.en || [];
      warnings.forEach(w => {
        const li = document.createElement('li');
        li.style.marginBottom = '6px';
        li.innerHTML = `<strong>⚠️</strong> ${escapeHtmlStr(w)}`;
        warningsList.appendChild(li);
      });
    }

    // Render Problem-Specific Step-by-Step Solution Actions (Override static prevention bullets when victim recovery applies)
    if (actionsList) {
      actionsList.innerHTML = '';
      let actions = [];
      if (isVictim && aiExtra && aiExtra.victimActions && aiExtra.victimActions[currentLangKey]) {
        actions = aiExtra.victimActions[currentLangKey];
      } else if (isVictim && aiExtra && aiExtra.victimReply && aiExtra.victimReply[currentLangKey]) {
        // Split victimReply into clear actionable steps if custom victimActions array is not defined
        actions = aiExtra.victimReply[currentLangKey]
          .split(/(?:।|\.\s+)/)
          .map(s => s.trim())
          .filter(s => s.length > 10);
      } else {
        const actionsObj = displayData.actions || displayData.whatToDo || {};
        actions = actionsObj[currentLangKey] || actionsObj.en || [];
      }
      actions.forEach(a => {
        const li = document.createElement('li');
        li.style.marginBottom = '6px';
        li.innerHTML = `<strong>🛡️</strong> ${escapeHtmlStr(a)}`;
        actionsList.appendChild(li);
      });
    }

    currentSpokenText = spokenReply;

    analysisCard.style.display = 'block';
    analysisCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (statusEl) {
      statusEl.textContent = currentLangKey === 'hi' ? '🔊 वॉइस साथी आपकी समस्या का समाधान बोल रहा है...' :
                             currentLangKey === 'mr' ? '🔊 व्हॉइस साथी तुमच्या समस्येचे उत्तर देत आहे...' :
                             '🔊 Voice Saathi AI is Speaking Your Solution...';
    }
    if (subStatusEl) {
      subStatusEl.textContent = currentLangKey === 'hi' ? 'दूसरा सवाल पूछने के लिए माइक बटन दबाएं।' :
                                currentLangKey === 'mr' ? 'पुढील प्रश्न विचारण्यासाठी माइक बटण दाबा.' :
                                'Tap the microphone anytime to ask another question.';
    }

    speakText(currentSpokenText);
  }

  // 1.2 Reliable Speech Synthesis Playback (Fixes Chrome cancel/speak race & GC bug)
  function speakText(text) {
    if (!window.speechSynthesis || !text) return;

    window.speechSynthesis.cancel();

    setTimeout(() => {
      try {
        window.speechSynthesis.resume();
        const utterance = new SpeechSynthesisUtterance(text);
        // Prevent V8 Garbage Collector from destroying utterance mid-speech
        window.__csActiveUtterance = utterance;

        utterance.lang = voiceLang;
        utterance.rate = 0.94;

        const voices = availableVoices.length ? availableVoices : (window.speechSynthesis.getVoices() || []);
        const langPrefix = voiceLang.slice(0, 2);
        const preferredVoice = voices.find(v => v.lang === voiceLang && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Microsoft'))) ||
                               voices.find(v => v.lang.startsWith(langPrefix));
        if (preferredVoice) utterance.voice = preferredVoice;

        const listenBtn = document.getElementById('voiceListenBtn');
        const statusEl = document.getElementById('voiceStatus') || document.getElementById('voiceMicStatusText');

        if (listenBtn) {
          listenBtn.innerHTML = '<span>🔊 Speaking Aloud...</span>';
        }

        utterance.onend = () => {
          if (listenBtn) {
            listenBtn.innerHTML = '<span>🔊 Listen Again</span>';
          }
          if (statusEl && !isListening) {
            const l = voiceLang.startsWith('hi') ? 'hi' : voiceLang.startsWith('mr') ? 'mr' : 'en';
            statusEl.textContent = l === 'hi' ? '🎙️ अगला सवाल पूछने के लिए माइक दबाएं' :
                                   l === 'mr' ? '🎙️ पुढील प्रश्न विचारण्यासाठी माइक दाबा' :
                                   '🎙️ Tap Microphone to Ask Another Question';
          }
        };

        utterance.onerror = () => {
          if (listenBtn) {
            listenBtn.innerHTML = '<span>🔊 Listen Again</span>';
          }
        };

        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('SpeechSynthesis playback error:', e);
      }
    }, 65);
  }

  // ==========================================
  // 2. Interactive Cyber Safety Quiz Engine (Multilingual EN / HI / MR)
  // ==========================================
  const QUIZ_UI = {
    en: {
      questionProgress: (curr, total) => `Question ${curr} of ${total}`,
      scoreLabel: (score) => `Score: ${score}`,
      readQuestion: '🔊 Read Question',
      nextQuestion: 'Next Question →',
      correctPrefix: '<strong>✓ Correct!</strong>',
      incorrectPrefix: '<strong>✕ Incorrect.</strong>',
      championBadge: '🏆 Cyber Safety Champion!',
      goodBadge: '👍 Good Awareness!',
      learnBadge: '📚 Keep Learning!',
      resultSummary: (score, total, pct) => `You scored <strong>${score} out of ${total}</strong> (${pct}%).`,
      retakeBtn: '🔄 Retake Quiz',
      reviewTopicsBtn: 'Review Safety Topics'
    },
    hi: {
      questionProgress: (curr, total) => `प्रश्न ${curr} / ${total}`,
      scoreLabel: (score) => `स्कोर: ${score}`,
      readQuestion: '🔊 प्रश्न सुनें',
      nextQuestion: 'अगला प्रश्न →',
      correctPrefix: '<strong>✓ सही उत्तर!</strong>',
      incorrectPrefix: '<strong>✕ गलत उत्तर।</strong>',
      championBadge: '🏆 साइबर सुरक्षा चैंपियन!',
      goodBadge: '👍 अच्छी जागरूकता!',
      learnBadge: '📚 सीखते रहें!',
      resultSummary: (score, total, pct) => `आपने <strong>${total} में से ${score}</strong> अंक प्राप्त किए (${pct}%)।`,
      retakeBtn: '🔄 पुनः क्विज़ दें',
      reviewTopicsBtn: 'सुरक्षा विषय देखें'
    },
    mr: {
      questionProgress: (curr, total) => `प्रश्न ${curr} / ${total}`,
      scoreLabel: (score) => `गुण: ${score}`,
      readQuestion: '🔊 प्रश्न ऐका',
      nextQuestion: 'पुढील प्रश्न →',
      correctPrefix: '<strong>✓ बरोबर उत्तर!</strong>',
      incorrectPrefix: '<strong>✕ चुकीचे उत्तर.</strong>',
      championBadge: '🏆 सायबर सुरक्षा चॅम्पियन!',
      goodBadge: '👍 उत्तम जागरूकता!',
      learnBadge: '📚 शिकत राहा!',
      resultSummary: (score, total, pct) => `तुम्ही <strong>${total} पैकी ${score}</strong> गुण मिळवले (${pct}%).`,
      retakeBtn: '🔄 पुन्हा क्विझ द्या',
      reviewTopicsBtn: 'सुरक्षा विषय पहा'
    }
  };

  function getLocalizedText(val, lang) {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.en || Object.values(val)[0] || '';
  }

  function getLocalizedOptions(q, lang) {
    if (!q) return [];
    if (q.options && typeof q.options === 'object' && !Array.isArray(q.options)) {
      return q.options[lang] || q.options.en || Object.values(q.options)[0] || [];
    }
    if (Array.isArray(q.options)) return q.options;
    return [];
  }

  let quizLangListenersAttached = false;
  function attachQuizLangListeners() {
    if (quizLangListenersAttached) return;
    quizLangListenersAttached = true;
    const onLang = () => {
      if (document.getElementById('quizApp')) {
        renderQuizQuestion();
      }
    };
    document.addEventListener('cybersathi-lang-change', onLang);
    window.addEventListener('languageChanged', onLang);
    document.querySelectorAll('#siteLangSelect, #language, .lang-select').forEach(sel => {
      sel.addEventListener('change', onLang);
    });
  }

  function initQuiz() {
    const container = document.getElementById('quizApp');
    if (!container) return;
    attachQuizLangListeners();
    currentQuizIdx = 0;
    quizScore = 0;
    quizAnswered = false;
    lastChosenIdx = null;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const container = document.getElementById('quizApp');
    if (!container) return;
    const quizList = getQuizQuestions();
    if (!quizList.length) return;

    const lang = getLang();
    const ui = QUIZ_UI[lang] || QUIZ_UI.en;

    if (currentQuizIdx >= quizList.length) {
      if (getStore() && getStore().saveQuizAttempt) {
        getStore().saveQuizAttempt(quizScore, quizList.length);
      }
      const percentage = Math.round((quizScore / quizList.length) * 100);
      const badge = percentage >= 80 ? ui.championBadge : percentage >= 60 ? ui.goodBadge : ui.learnBadge;

      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 40px 24px;">
          <span style="font-size: 54px; display: block; margin-bottom: 12px;">${percentage >= 80 ? '🌟' : '🛡️'}</span>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 26px; color: var(--cs-deep); margin-bottom: 8px;">
            ${badge}
          </h2>
          <p style="font-size: 16px; color: var(--cs-muted); margin-bottom: 24px;">
            ${ui.resultSummary(quizScore, quizList.length, percentage)}
          </p>
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-primary" id="btnRestartQuiz">
              <span>${ui.retakeBtn}</span>
            </button>
            <a href="topics.html" class="btn btn-outline">
              <span>${ui.reviewTopicsBtn}</span>
            </a>
          </div>
        </div>
      `;

      const restartBtn = document.getElementById('btnRestartQuiz');
      if (restartBtn) {
        restartBtn.addEventListener('click', initQuiz);
      }
      return;
    }

    const q = quizList[currentQuizIdx];
    const progressPercent = ((currentQuizIdx + 1) / quizList.length) * 100;
    const qText = getLocalizedText(q.question, lang);
    const qOpts = getLocalizedOptions(q, lang);
    const qExpl = getLocalizedText(q.explanation, lang);

    const isAnswered = quizAnswered;
    const isCorrect = isAnswered && lastChosenIdx === q.answer;

    container.innerHTML = `
      <div class="card">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; font-size: 13px; font-weight: 700; color: var(--cs-muted);">
          <span>${ui.questionProgress(currentQuizIdx + 1, quizList.length)}</span>
          <span>${ui.scoreLabel(quizScore)}</span>
        </div>

        <h3 style="font-family: 'Outfit', sans-serif; font-size: 18px; line-height: 1.4; color: var(--cs-deep); margin-bottom: 20px;">
          ${qText}
        </h3>

        <div class="quiz-options-list">
          ${qOpts.map((opt, i) => {
            let stateClass = '';
            if (isAnswered) {
              if (i === q.answer) stateClass = 'correct';
              else if (i === lastChosenIdx) stateClass = 'wrong';
            }
            return `
              <button class="quiz-option-btn ${stateClass}" data-opt-idx="${i}" ${isAnswered ? 'disabled' : ''}>
                <span style="display: inline-block; width: 24px; font-weight: 800; color: var(--cs-deep);">${String.fromCharCode(65 + i)}.</span>
                ${opt}
              </button>
            `;
          }).join('')}
        </div>

        <div id="quizExplanation" style="${isAnswered ? 'display: block;' : 'display: none;'} padding: 14px 18px; border-radius: var(--cs-radius-sm); margin: 18px 0; font-size: 14px; line-height: 1.5; ${isAnswered ? (isCorrect ? 'background: color-mix(in srgb, var(--cs-green) 12%, var(--cs-card-bg)); border: 1px solid var(--cs-green);' : 'background: color-mix(in srgb, var(--cs-danger) 10%, var(--cs-card-bg)); border: 1px solid var(--cs-danger);') : ''}">
          ${isAnswered ? (isCorrect ? `${ui.correctPrefix} ${qExpl}` : `${ui.incorrectPrefix} ${qExpl}`) : ''}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 20px;">
          <button class="btn btn-outline" id="btnListenQuizQ" style="padding: 8px 16px; font-size: 13px;">
            ${ui.readQuestion}
          </button>
          <button class="btn btn-primary" id="btnNextQuizQ" ${isAnswered ? '' : 'disabled'}>
            ${ui.nextQuestion}
          </button>
        </div>
      </div>
    `;

    const optionBtns = container.querySelectorAll('.quiz-option-btn');
    const explEl = document.getElementById('quizExplanation');
    const nextBtn = document.getElementById('btnNextQuizQ');
    const listenBtn = document.getElementById('btnListenQuizQ');

    if (!isAnswered) {
      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (quizAnswered) return;
          quizAnswered = true;

          const chosenIdx = Number(btn.dataset.optIdx);
          lastChosenIdx = chosenIdx;

          optionBtns.forEach(b => b.disabled = true);

          if (chosenIdx === q.answer) {
            quizScore++;
            btn.classList.add('correct');
            if (explEl) {
              explEl.style.display = 'block';
              explEl.style.background = 'color-mix(in srgb, var(--cs-green) 12%, var(--cs-card-bg))';
              explEl.style.border = '1px solid var(--cs-green)';
              explEl.innerHTML = `${ui.correctPrefix} ${qExpl}`;
            }
          } else {
            btn.classList.add('wrong');
            if (optionBtns[q.answer]) optionBtns[q.answer].classList.add('correct');
            if (explEl) {
              explEl.style.display = 'block';
              explEl.style.background = 'color-mix(in srgb, var(--cs-danger) 10%, var(--cs-card-bg))';
              explEl.style.border = '1px solid var(--cs-danger)';
              explEl.innerHTML = `${ui.incorrectPrefix} ${qExpl}`;
            }
          }

          if (nextBtn) nextBtn.disabled = false;
        });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentQuizIdx++;
        quizAnswered = false;
        lastChosenIdx = null;
        renderQuizQuestion();
      });
    }

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        voiceLang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
        speakText(`${qText}. ${qOpts.join(', ')}`);
      });
    }
  }

  // ==========================================
  // 3. Government Verified Schemes
  // ==========================================
  function renderSchemes() {
    const container = document.getElementById('schemesGrid');
    if (!container) return;

    container.innerHTML = getGovernmentSchemes().map(s => `
      <article class="card" style="display: flex; flex-direction: column;">
        <span style="font-size: 32px; margin-bottom: 12px;">🏛️</span>
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 18px; color: var(--cs-deep); margin-bottom: 6px;">
          ${s.title}
        </h3>
        <p style="font-size: 13.5px; color: var(--cs-muted); line-height: 1.5; margin-bottom: 18px; flex: 1;">
          ${s.desc}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-weight: 700; color: var(--cs-green);">${s.portal}</span>
          <a href="${s.url}" target="_blank" rel="noopener" class="btn btn-outline" style="padding: 6px 14px; font-size: 12px;">
            Official Portal ↗
          </a>
        </div>
      </article>
    `).join('');
  }

  // ==========================================
  // 4. Indian Cyber Crime Coordination Centre (I4C) Map
  // ==========================================
  function initI4CMap() {
    const mapEl = document.getElementById('i4cMap');
    if (!mapEl) return;

    const i4cCoords = [28.6253, 77.2144];

    if (window.L) {
      try {
        const map = window.L.map('i4cMap').setView(i4cCoords, 14);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        window.L.marker(i4cCoords).addTo(map)
          .bindPopup(`
            <div style="padding: 4px; font-family: 'Outfit', sans-serif;">
              <strong style="color: #0f3728; font-size: 14px;">🏛️ Indian Cyber Crime Coordination Centre (I4C)</strong><br>
              <span style="font-size: 12px; color: #475569;">Ministry of Home Affairs, Govt. of India</span><br>
              <span style="font-size: 12px; color: #475569;">NDCC-II Building, Jai Singh Road, New Delhi</span><br>
              <div style="margin-top: 6px; padding: 4px 8px; background: #fee2e2; border-radius: 4px; font-weight: 700; font-size: 12px; color: #dc2626;">
                📞 Toll-Free Helpline: 1930
              </div>
            </div>
          `)
          .openPopup();
        return;
      } catch (e) {
        console.warn('Leaflet tile loading error, falling back to styled SVG view:', e);
      }
    }

    mapEl.innerHTML = `
      <div style="width: 100%; height: 100%; min-height: 320px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 28px; background: linear-gradient(135deg, #e8f4f0, #d5ece3); border-radius: var(--cs-radius);">
        <div style="font-size: 46px; margin-bottom: 12px;">🏛️</div>
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 19px; color: var(--cs-deep); margin-bottom: 6px;">
          Indian Cyber Crime Coordination Centre (I4C)
        </h3>
        <div style="display: inline-block; background: var(--cs-deep); color: #fff; font-size: 12px; font-weight: 700; padding: 3px 12px; border-radius: 999px; margin-bottom: 10px;">
          Ministry of Home Affairs, Govt. of India
        </div>
        <p style="font-size: 13.5px; color: var(--cs-muted); max-width: 340px; margin-bottom: 12px;">
          NDCC-II Building, Jai Singh Road, Opp. Jantar Mantar, New Delhi - 110001
        </p>
        <div style="background: rgba(220, 38, 38, 0.1); border: 1.5px solid rgba(220, 38, 38, 0.3); padding: 8px 18px; border-radius: 999px; font-size: 13px; font-weight: 800; color: var(--cs-danger); margin-bottom: 10px;">
          📞 National Helpline: 1930 (Toll-Free, 24x7)
        </div>
        <span style="font-size: 11.5px; color: var(--cs-muted);">
          Official Portal: <a href="https://cybercrime.gov.in" target="_blank" rel="noopener" style="color: var(--cs-deep); text-decoration: underline; font-weight: 700;">cybercrime.gov.in</a>
        </span>
      </div>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToolsPage);
  } else {
    initToolsPage();
  }

  window.initToolsPage = initToolsPage;
  window.initVoiceSaathi = initVoiceSaathi;
  window.initQuiz = initQuiz;
  window.initI4CMap = initI4CMap;
})();
