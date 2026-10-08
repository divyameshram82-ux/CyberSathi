// ============================================================================
// 🎓 CYBERSATHI INTERACTIVE MULTILINGUAL LEARNING PATHWAY (js/cyber-academy.js)
// Inspired by interactive step-by-step learning:
// COURSE -> UNIT -> LESSON -> PRACTICE -> QUIZ -> XP -> BADGE -> PROGRESS -> NEXT LESSON
// 100% Free Community Course • Supports English (en), Hindi (hi), Marathi (mr)
// Includes Dual-Language ("Learn with Support Language") & Voice Readout
// ============================================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'cybersathi_academy_progress_v1';

  // UI Dictionary for Academy Shell
  const UI_STRINGS = {
    en: {
      freeBadge: 'FREE COMMUNITY COURSE • NO PAYMENT REQUIRED',
      welcomeBack: 'Welcome back! Your Cyber Safety Journey',
      continueBtn: '▶ CONTINUE LEARNING',
      primaryLangLbl: 'Primary Language:',
      supportLangLbl: 'Learn with Support Language:',
      supportNone: 'Off (Single Language)',
      streakLbl: 'Day Streak',
      xpLbl: 'Total XP',
      completedStatus: '✓ COMPLETED',
      continueStatus: '▶ CONTINUE',
      lockedStatus: '🔒 LOCKED',
      unlockAllToggle: '🔓 Unlock All Units (Free Practice Mode)',
      lockProgToggle: '🔒 Progressive Unlock Mode',
      listenBtn: '🔊 Listen',
      stopAudioBtn: '⏹ Stop Audio',
      audioFallback: 'ℹ️ Spoken voice for this language is using your device default speaker. Read along below!',
      svaStop: '🛑 STOP: Do not act under pressure.',
      svaVerify: '🔍 VERIFY: Check independently.',
      svaAct: '🛡️ ACT SAFELY: Never share OTP, PIN, or password.',
      stepCards: '📖 Lesson Cards',
      stepPractice: '🎯 Quick Practice (+5 XP)',
      stepQuiz: '🧠 Scenario Quiz (+10 XP)',
      stepSummary: '🎉 Unit Complete',
      nextCardBtn: 'Next Card →',
      prevCardBtn: '← Previous Card',
      startPracticeBtn: '🎯 Start Quick Challenge (+5 XP) →',
      startQuizBtn: '🧠 Proceed to Final Quiz (+10 XP) →',
      checkAnswerBtn: '✓ Check Answer',
      correctTitle: '✅ Correct!',
      incorrectTitle: '❌ Not quite.',
      whyHeading: '💡 Why this matters:',
      courseCompleteTitle: '🎉 COURSE UNIT COMPLETED!',
      xpEarnedLbl: 'XP Earned',
      badgeEarnedLbl: 'Badge Unlocked',
      lessonsCompletedLbl: 'Steps Completed',
      nextCourseBtn: '🎯 Next Unit →',
      backToPathBtn: '📚 Back to Learning Path',
      askVoiceSaathiBtn: '🎙️ Ask Voice Saathi',
      tryScamSimBtn: '🕵️ Try Scam Simulator',
      printCertBtn: '🖨️ View & Print Completion Certificate',
      certTitle: 'CyberSathi Course Completion Certificate',
      certDisclaimer: 'Educational completion certificate.',
      badgesHeading: '🏅 Your CyberSathi Badges'
    },
    hi: {
      freeBadge: 'निःशुल्क सामुदायिक कोर्स • कोई शुल्क नहीं',
      welcomeBack: 'वापसी पर स्वागत है! आपकी साइबर सुरक्षा यात्रा',
      continueBtn: '▶ सीखना जारी रखें (CONTINUE LEARNING)',
      primaryLangLbl: 'मुख्य भाषा (Primary):',
      supportLangLbl: 'सहायक भाषा के साथ सीखें (Support Language):',
      supportNone: 'बंद (केवल मुख्य भाषा)',
      streakLbl: 'दिन की स्ट्रीक',
      xpLbl: 'कुल XP',
      completedStatus: '✓ पूर्ण (COMPLETED)',
      continueStatus: '▶ जारी रखें (CONTINUE)',
      lockedStatus: '🔒 लॉक (LOCKED)',
      unlockAllToggle: '🔓 सभी यूनिट अनलॉक करें (प्रैक्टिस मोड)',
      lockProgToggle: '🔒 क्रमबद्ध अनलॉक मोड',
      listenBtn: '🔊 सुनें (Listen)',
      stopAudioBtn: '⏹ ऑडियो रोकें',
      audioFallback: 'ℹ️ इस भाषा के लिए डिवाइस की डिफ़ॉल्ट आवाज़ उपयोग की जा रही है।',
      svaStop: '🛑 रुकें (STOP): दबाव या डर में कोई कदम न उठाएं।',
      svaVerify: '🔍 जांचें (VERIFY): आधिकारिक स्रोत से स्वतंत्र जांच करें।',
      svaAct: '🛡️ सुरक्षित रहें (ACT SAFELY): OTP, PIN या पासवर्ड कभी साझा न करें।',
      stepCards: '📖 पाठ कार्ड्स (+10 XP)',
      stepPractice: '🎯 त्वरित अभ्यास (+5 XP)',
      stepQuiz: '🧠 क्विज़ (+10 XP)',
      stepSummary: '🎉 यूनिट पूर्ण',
      nextCardBtn: 'अगला कार्ड →',
      prevCardBtn: '← पिछला कार्ड',
      startPracticeBtn: '🎯 त्वरित चुनौती शुरू करें (+5 XP) →',
      startQuizBtn: '🧠 अंतिम क्विज़ पर जाएं (+10 XP) →',
      checkAnswerBtn: '✓ उत्तर जांचें',
      correctTitle: '✅ बिल्कुल सही!',
      incorrectTitle: '❌ सही नहीं है।',
      whyHeading: '💡 कारण समझें:',
      courseCompleteTitle: '🎉 कोर्स यूनिट सफलतापूर्वक पूर्ण!',
      xpEarnedLbl: 'प्राप्त XP',
      badgeEarnedLbl: 'प्राप्त बैज',
      lessonsCompletedLbl: 'पूर्ण चरण',
      nextCourseBtn: '🎯 अगली यूनिट →',
      backToPathBtn: '📚 लर्निंग पाथ पर वापस जाएं',
      askVoiceSaathiBtn: '🎙️ वॉइस साथी से पूछें',
      tryScamSimBtn: '🕵️ स्कैम सिम्युलेटर आज़माएं',
      printCertBtn: '🖨️ पूर्णता प्रमाणपत्र देखें और प्रिंट करें',
      certTitle: 'CyberSathi Course Completion Certificate',
      certDisclaimer: 'Educational completion certificate. (शैक्षणिक पूर्णता प्रमाणपत्र)',
      badgesHeading: '🏅 आपके साइबरसाथी बैज'
    },
    mr: {
      freeBadge: 'विनामूल्य समुदाय अभ्यासक्रम • कोणतेही शुल्क नाही',
      welcomeBack: 'पुन्हा स्वागत आहे! तुमचा सायबर सुरक्षा प्रवास',
      continueBtn: '▶ शिकणे सुरू ठेवा (CONTINUE LEARNING)',
      primaryLangLbl: 'मुख्य भाषा (Primary):',
      supportLangLbl: 'सहाय्यक भाषेसह शिका (Support Language):',
      supportNone: 'बंद (फक्त मुख्य भाषा)',
      streakLbl: 'दिवसांची स्ट्रीक',
      xpLbl: 'एकूण XP',
      completedStatus: '✓ पूर्ण (COMPLETED)',
      continueStatus: '▶ सुरू ठेवा (CONTINUE)',
      lockedStatus: '🔒 लॉक (LOCKED)',
      unlockAllToggle: '🔓 सर्व युनिट्स अनलॉक करा (सराव मोड)',
      lockProgToggle: '🔒 टप्प्याटप्प्याने अनलॉक मोड',
      listenBtn: '🔊 ऐका (Listen)',
      stopAudioBtn: '⏹ आवाज थांबवा',
      audioFallback: 'ℹ️ या भाषेसाठी डिव्हाइसचा डिफॉल्ट आवाज वापरला जात आहे.',
      svaStop: '🛑 थांबा (STOP): दबावाखाली किंवा भीतीने कोणतीही कृती करू नका.',
      svaVerify: '🔍 पडताळणी करा (VERIFY): अधिकृत स्रोतावरून खात्री करा.',
      svaAct: '🛡️ सुरक्षित कृती (ACT SAFELY): OTP, PIN किंवा पासवर्ड कोणालाही सांगू नका.',
      stepCards: '📖 धडा कार्ड्स (+10 XP)',
      stepPractice: '🎯 झटपट सराव (+5 XP)',
      stepQuiz: '🧠 क्विझ (+10 XP)',
      stepSummary: '🎉 युनिट पूर्ण',
      nextCardBtn: 'पुढील कार्ड →',
      prevCardBtn: '← मागील कार्ड',
      startPracticeBtn: '🎯 झटपट आव्हान सुरू करा (+5 XP) →',
      startQuizBtn: '🧠 अंतिम क्विझकडे जा (+10 XP) →',
      checkAnswerBtn: '✓ उत्तर तपासा',
      correctTitle: '✅ अगदी बरोबर!',
      incorrectTitle: '❌ पूर्णपणे बरोबर नाही.',
      whyHeading: '💡 यामागील कारण समजून घ्या:',
      courseCompleteTitle: '🎉 अभ्यासक्रम युनिट यशस्वीरित्या पूर्ण!',
      xpEarnedLbl: 'मिळालेले XP',
      badgeEarnedLbl: 'मिळालेला बॅज',
      lessonsCompletedLbl: 'पूर्ण टप्पे',
      nextCourseBtn: '🎯 पुढील युनिट →',
      backToPathBtn: '📚 लर्निंग पाथवर परत जा',
      askVoiceSaathiBtn: '🎙️ व्हॉइस साथीला विचारा',
      tryScamSimBtn: '🕵️ स्कॅम सिम्युलेटर वापरून पहा',
      printCertBtn: '🖨️ पूर्णता प्रमाणपत्र पहा आणि प्रिंट करा',
      certTitle: 'CyberSathi Course Completion Certificate',
      certDisclaimer: 'Educational completion certificate. (शैक्षणिक पूर्णता प्रमाणपत्र)',
      badgesHeading: '🏅 तुमचे सायबरसाथी बॅज'
    }
  };

  // CyberSathi Badges Catalog
  const ACADEMY_BADGES = [
    {
      id: 'cyber_beginner',
      icon: '🛡️',
      unitNumber: 1,
      name: { en: 'Cyber Beginner', hi: 'साइबर बिगिनर', mr: 'सायबर बिगिनर' },
      desc: { en: 'Completed first lesson on OTP & Basic Safety', hi: 'OTP और बुनियादी सुरक्षा का पहला पाठ पूरा किया', mr: 'OTP आणि मूलभूत सुरक्षेचा पहिला धडा पूर्ण केला' }
    },
    {
      id: 'privacy_guardian',
      icon: '🔐',
      unitNumber: 2,
      name: { en: 'Privacy Guardian', hi: 'प्राइवेसी गार्जियन', mr: 'प्रायव्हसी गार्डियन' },
      desc: { en: 'Completed Password & 2FA Security Unit', hi: 'पासवर्ड और 2FA सुरक्षा मॉड्यूल पूरा किया', mr: 'पासवर्ड आणि 2FA सुरक्षा युनिट पूर्ण केले' }
    },
    {
      id: 'phishing_hunter',
      icon: '🎣',
      unitNumber: 3,
      name: { en: 'Phishing Hunter', hi: 'फ़िशिंग हंटर', mr: 'फिशिंग हंटर' },
      desc: { en: 'Completed Phishing & Fake Links Unit', hi: 'फ़िशिंग और नकली लिंक पहचान मॉड्यूल पूरा किया', mr: 'फिशिंग आणि बनावट लिंक युनिट पूर्ण केले' }
    },
    {
      id: 'payment_protector',
      icon: '💳',
      unitNumber: 4,
      name: { en: 'Payment Protector', hi: 'पेमेंट प्रोटेक्टर', mr: 'पेमेंट प्रोटेक्टर' },
      desc: { en: 'Completed UPI & QR Payment Safety Unit', hi: 'UPI और QR भुगतान सुरक्षा मॉड्यूल पूरा किया', mr: 'UPI आणि QR पेमेंट सुरक्षा युनिट पूर्ण केले' }
    },
    {
      id: 'digital_defender',
      icon: '📱',
      unitNumber: 5,
      name: { en: 'Digital Defender', hi: 'डिजिटल डिफेंडर', mr: 'डिजिटल डिफेंडर' },
      desc: { en: 'Completed Mobile & WhatsApp Safety Unit', hi: 'मोबाइल और व्हाट्सएप सुरक्षा मॉड्यूल पूरा किया', mr: 'मोबाइल आणि व्हॉट्सॲप सुरक्षा युनिट पूर्ण केले' }
    },
    {
      id: 'cybersathi_champion',
      icon: '🏆',
      unitNumber: 10,
      name: { en: 'CyberSathi Champion', hi: 'साइबरसाथी चैंपियन', mr: 'सायबरसाथी चॅम्पियन' },
      desc: { en: 'Completed the full 10-Unit Cyber Safety Pathway', hi: 'संपूर्ण 10-यूनिट साइबर सुरक्षा पाथवे पूरा किया', mr: 'संपूर्ण १०-युनिट सायबर सुरक्षा अभ्यासक्रम पूर्ण केला' }
    }
  ];

  // 10 Progressive Units along the Visual Learning Path
  const LEARNING_PATH_UNITS = [
    {
      id: 'unit_01_basics',
      number: 1,
      icon: '🛡️',
      color: '#086b8b',
      simMissionId: 'fake_kyc',
      voiceTopic: 'Bank asking for OTP',
      badgeId: 'cyber_beginner',
      title: {
        en: 'Cyber Safety Basics',
        hi: 'साइबर सुरक्षा की बुनियाद',
        mr: 'सायबर सुरक्षेची मूलतत्त्वे'
      },
      lessonTitle: {
        en: 'Lesson 1: OTP Safety & The Golden Rule',
        hi: 'पाठ 1: OTP सुरक्षा और सुनहरा नियम',
        mr: 'धडा १: OTP सुरक्षा आणि सुवर्ण नियम'
      },
      duration: '3 mins',
      cards: [
        {
          title: { en: 'Card 1: What is an OTP?', hi: 'कार्ड 1: OTP क्या होता है?', mr: 'कार्ड १: OTP म्हणजे काय?' },
          body: {
            en: 'An OTP (One-Time Password) is a secret 4 or 6-digit digital key sent to your phone to authorize money leaving your bank account or logging into your account.',
            hi: 'OTP (वन-टाइम पासवर्ड) आपके फोन पर भेजा जाने वाला 4 या 6 अंकों का गुप्त डिजिटल ताला है जो आपके बैंक खाते से पैसे निकालने या लॉगिन करने की अनुमति देता है।',
            mr: 'OTP (वन-टाइम पासवर्ड) हा तुमच्या फोनवर येणारा ४ किंवा ६ अंकी गुप्त कोड असतो जो बँक खात्यातून पैसे काढण्यासाठी किंवा लॉगिन करण्यासाठी वापरला जातो.'
          }
        },
        {
          title: { en: 'Card 2: Why do scammers ask for OTPs?', hi: 'कार्ड 2: ठग OTP क्यों मांगते हैं?', mr: 'कार्ड २: सायबर भामटे OTP का मागतात?' },
          body: {
            en: 'Even if a scammer steals your card number, they CANNOT steal your money without your OTP. They create panic ("account blocked", "KYC expired") so you read out the OTP yourself.',
            hi: 'भले ही ठग को आपका कार्ड नंबर मिल जाए, वह आपके OTP के बिना पैसे नहीं चुरा सकता। इसलिए वे डर पैदा करते हैं ("खाता बंद हो जाएगा") ताकि आप खुद OTP बता दें।',
            mr: 'भामट्याकडे तुमचा कार्ड नंबर असला तरीही तुमच्या OTP शिवाय तो पैसे काढू शकत नाही. म्हणूनच ते भीती दाखवतात ("खाते ब्लॉक होईल") जेणेकरून तुम्ही स्वतः OTP सांगाल.'
          }
        },
        {
          title: { en: 'Card 3: Can a genuine bank employee ask for your OTP?', hi: 'कार्ड 3: क्या असली बैंक कर्मचारी कभी OTP मांगता है?', mr: 'कार्ड ३: बँकेचा खरा कर्मचारी कधीही OTP मागू शकतो का?' },
          body: {
            en: 'NEVER! No genuine bank manager, RBI officer, police officer, or government clerk will ever ask for your OTP, ATM PIN, or CVV.',
            hi: 'कभी नहीं! कोई भी असली बैंक मैनेजर, RBI अधिकारी या पुलिसकर्मी कभी भी आपसे OTP, ATM PIN या CVV नहीं मांगता।',
            mr: 'कधीही नाही! कोणताही खरा बँक मॅनेजर, RBI अधिकारी किंवा पोलीस कधीही तुमचा OTP, ATM PIN किंवा CVV मागत नाही.'
          }
        },
        {
          title: { en: 'Card 4: What should you do if someone requests it?', hi: 'कार्ड 4: यदि कोई OTP मांगे तो क्या करें?', mr: 'कार्ड ४: कोणी OTP मागितल्यास तुम्ही काय करावे?' },
          body: {
            en: 'STOP immediately. Hang up the phone without arguing. Never share the code. Verify directly by visiting your bank branch or calling 1930 if fraud occurred.',
            hi: 'तुरंत रुकें (STOP)। बिना बहस किए फोन काट दें। कोड कभी साझा न करें। संदेह होने पर अपनी बैंक शाखा में जाकर पता करें।',
            mr: 'तात्काळ थांबा (STOP). वाद न घालता फोन कट करा. कोड कोणालाही सांगू नका. शंका असल्यास प्रत्यक्ष बँकेत जाऊन चौकशी करा.'
          }
        }
      ],
      practice: {
        type: 'safe_action',
        typeLabel: { en: 'Choose the Safe Action', hi: 'सुरक्षित कदम चुनें', mr: 'सुरक्षित कृती निवडा' },
        prompt: {
          en: 'Scenario: A caller says "Your PM-Kisan ₹2,000 installment failed. Tell me the 6-digit OTP sent to your phone to receive the money now."',
          hi: 'परिस्थिति: एक कॉलर कहता है "आपकी पीएम-किसान ₹2,000 किस्त अटक गई है। अभी पैसे पाने के लिए अपने फोन पर आया 6 अंकों का OTP बताएं।"',
          mr: 'प्रसंग: एक कॉलर म्हणतो "तुमचा पीएम-किसान ₹२,००० चा हप्ता अडकला आहे. आत्ताच पैसे मिळवण्यासाठी फोनवर आलेला ६ अंकी OTP सांगा."'
        },
        options: [
          {
            text: { en: 'Read the 6-digit OTP quickly so the ₹2,000 arrives', hi: 'जल्दी से 6 अंकों का OTP बता दें ताकि ₹2,000 मिल जाएं', mr: '₹२,००० मिळण्यासाठी लगेच ६ अंकी OTP सांगा' },
            correct: false
          },
          {
            text: { en: 'Disconnect the call immediately. Receiving government subsidies NEVER requires an OTP.', hi: 'तुरंत कॉल काट दें। सरकारी सब्सिडी पाने के लिए कभी भी OTP की आवश्यकता नहीं होती।', mr: 'तात्काळ कॉल कट करा. सरकारी अनुदान मिळवण्यासाठी कधीही OTP ची गरज नसते.' },
            correct: true
          }
        ],
        explanation: {
          en: 'OTPs are only used to authorize money leaving your account or logging in. You never need an OTP to receive money.',
          hi: 'OTP का उपयोग केवल खाते से पैसे निकालने या लॉगिन करने के लिए होता है। पैसे प्राप्त करने के लिए कभी OTP नहीं लगता।',
          mr: 'OTP फक्त खात्यातून पैसे काढण्यासाठी किंवा लॉगिन करण्यासाठी वापरला जातो. पैसे मिळवण्यासाठी कधीही OTP लागत नाही.'
        }
      },
      quiz: {
        question: {
          en: 'Someone calls claiming to be from your bank and asks for your OTP to stop an unauthorized transaction. What should you do?',
          hi: 'कोई व्यक्ति आपके बैंक से होने का दावा करते हुए कॉल करता है और अनधिकृत लेनदेन रोकने के लिए आपका OTP मांगता है। आपको क्या करना चाहिए?',
          mr: 'कोणीतरी तुमच्या बँकेतून बोलत असल्याचा दावा करून अनधिकृत व्यवहार थांबवण्यासाठी तुमचा OTP मागतो. तुम्ही काय करावे?'
        },
        options: [
          { en: 'A. Share the OTP immediately', hi: 'A. तुरंत OTP साझा करें', mr: 'A. लगेच OTP सांगा' },
          { en: 'B. Ask for their employee ID and then share the OTP', hi: 'B. उनका कर्मचारी आईडी पूछें और फिर OTP बताएं', mr: 'B. त्यांचा आयडी विचारून मग OTP सांगा' },
          { en: 'C. End the call and contact the bank through its official channel', hi: 'C. कॉल काट दें और बैंक के आधिकारिक नंबर या शाखा से संपर्क करें', mr: 'C. कॉल कट करा आणि बँकेच्या अधिकृत क्रमांकावर किंवा शाखेत संपर्क साधा' }
        ],
        correct: 2,
        explanation: {
          en: 'Scammers often pretend to stop a fraud while actually initiating one! Always disconnect and verify using the official number on the back of your bank passbook or debit card.',
          hi: 'ठग अक्सर धोखाधड़ी रोकने का नाटक करके खुद धोखाधड़ी करते हैं! हमेशा कॉल काटें और अपनी पासबुक पर लिखे आधिकारिक नंबर पर संपर्क करें।',
          mr: 'भामटे अनेकदा फसवणूक थांबवण्याचे नाटक करून स्वतःच पैसे चोरतात! नेहमी कॉल कट करा आणि पासबुकवरील अधिकृत क्रमांकावर संपर्क साधा.'
        }
      }
    },
    {
      id: 'unit_02_password',
      number: 2,
      icon: '🔐',
      color: '#1d4ed8',
      simMissionId: 'social_media_scam',
      voiceTopic: 'Mera Instagram account hack ho gaya hai',
      badgeId: 'privacy_guardian',
      title: {
        en: 'Password Safety',
        hi: 'पासवर्ड सुरक्षा',
        mr: 'पासवर्ड सुरक्षा'
      },
      lessonTitle: {
        en: 'Lesson 2: Strong Passwords & Two-Step Verification (2FA)',
        hi: 'पाठ 2: मजबूत पासवर्ड और टू-स्टेप वेरिफिकेशन (2FA)',
        mr: 'धडा २: मजबूत पासवर्ड आणि टू-स्टेप व्हेरिफिकेशन (2FA)'
      },
      duration: '3 mins',
      cards: [
        {
          title: { en: 'Card 1: Why Simple Passwords Fail', hi: 'कार्ड 1: सरल पासवर्ड क्यों खतरनाक हैं?', mr: 'कार्ड १: सोपे पासवर्ड का धोकादायक असतात?' },
          body: {
            en: 'Passwords like "123456", your mobile number, or "Ramesh@1985" can be guessed by automated hacker software in less than 1 second.',
            hi: '"123456", आपका मोबाइल नंबर, या "Ramesh@1985" जैसे पासवर्ड को हैकर्स के कंप्यूटर 1 सेकंड से भी कम समय में तोड़ सकते हैं।',
            mr: '"123456", तुमचा मोबाईल नंबर किंवा "Ramesh@1985" सारखे पासवर्ड हॅकर्स १ सेकंदाच्या आत ओळखू शकतात.'
          }
        },
        {
          title: { en: 'Card 2: How to Build an Unbreakable Passphrase', hi: 'कार्ड 2: मजबूत पासवर्ड कैसे बनाएं?', mr: 'कार्ड २: मजबूत पासवर्ड कसा तयार करावा?' },
          body: {
            en: 'Combine 3 unrelated words with numbers and symbols (e.g., "Mango#River$Train99"). It is easy for you to remember, but impossible for computers to guess.',
            hi: '3 अलग-अलग शब्दों को नंबर और चिह्नों के साथ जोड़ें (जैसे "Mango#River$Train99")। यह याद रखने में आसान है लेकिन हैक करना असंभव।',
            mr: '३ वेगवेगळे शब्द, अंक आणि चिन्हे एकत्र करा (उदा. "Mango#River$Train99"). हे लक्षात ठेवायला सोपे पण हॅक करायला अशक्य असते.'
          }
        },
        {
          title: { en: 'Card 3: Never Reuse the Same Password', hi: 'कार्ड 3: हर जगह एक ही पासवर्ड न रखें', mr: 'कार्ड ३: सर्व ठिकाणी एकच पासवर्ड वापरू नका' },
          body: {
            en: 'If you use the same password on a gaming website and your email/bank, a leak on the gaming site gives hackers the key to your bank account.',
            hi: 'यदि आप किसी साधारण वेबसाइट और अपने ईमेल/बैंक का पासवर्ड एक ही रखते हैं, तो एक जगह डेटा लीक होने पर आपका बैंक खाता भी खतरे में पड़ जाता है।',
            mr: 'तुम्ही गेमिंग साईट आणि बँक/ईमेलसाठी एकच पासवर्ड वापरल्यास, एका ठिकाणी पासवर्ड लीक झाल्यावर तुमचे बँक खातेही धोक्यात येते.'
          }
        },
        {
          title: { en: 'Card 4: Enable Two-Factor Authentication (2FA)', hi: 'कार्ड 4: टू-स्टेप वेरिफिकेशन (2FA) चालू करें', mr: 'कार्ड ४: टू-स्टेप व्हेरिफिकेशन (2FA) सुरू करा' },
          body: {
            en: 'Turn on 2-Step Verification on WhatsApp (Settings → Account → Two-step verification), Gmail, and Instagram for a double digital lock.',
            hi: 'व्हाट्सएप, जीमेल और इंस्टाग्राम की सेटिंग्स में जाकर टू-स्टेप वेरिफिकेशन (2FA) अवश्य चालू करें। यह आपके खाते पर दोहरा ताला लगाता है।',
            mr: 'व्हॉट्सॲप, जीमेल आणि इंस्टाग्रामवर टू-स्टेप व्हेरिफिकेशन (2FA) नक्की सुरू करा. यामुळे तुमच्या खात्याला दुहेरी सुरक्षा मिळते.'
          }
        }
      ],
      practice: {
        type: 'true_false',
        typeLabel: { en: 'True or False', hi: 'सही या गलत', mr: 'चूक की बरोबर' },
        prompt: {
          en: 'Statement: Using your mobile phone number or birth year as your banking password is safe because you will never forget it.',
          hi: 'कथन: अपने मोबाइल नंबर या जन्म वर्ष को बैंकिंग पासवर्ड बनाना सुरक्षित है क्योंकि आप इसे कभी नहीं भूलेंगे।',
          mr: 'विधान: तुमचा मोबाईल नंबर किंवा जन्माचे वर्ष बँकिंग पासवर्ड म्हणून ठेवणे सुरक्षित आहे कारण तुम्ही ते कधीही विसरणार नाही.'
        },
        options: [
          { text: { en: 'TRUE (Safe)', hi: 'सही (सुरक्षित है)', mr: 'बरोबर (सुरक्षित आहे)' }, correct: false },
          { text: { en: 'FALSE (Unsafe — scammers check phone numbers and birth dates first!)', hi: 'गलत (असुरक्षित — ठग सबसे पहले फोन नंबर और जन्मतिथि ही आज़माते हैं!)', mr: 'चूक (असुरक्षित — भामटे सर्वात आधी फोन नंबर आणि जन्मतारीखच वापरून पाहतात!)' }, correct: true }
        ],
        explanation: {
          en: 'Your phone number and birth date are publicly known. Always use a strong passphrase and enable Two-Factor Authentication (2FA).',
          hi: 'आपका फोन नंबर और जन्मतिथि आसानी से पता चल जाते हैं। हमेशा मजबूत पासवर्ड और टू-स्टेप वेरिफिकेशन का उपयोग करें।',
          mr: 'तुमचा फोन नंबर आणि जन्मतारीख सहज उपलब्ध असते. नेहमी मजबूत पासवर्ड आणि टू-स्टेप व्हेरिफिकेशन वापरा.'
        }
      },
      quiz: {
        question: {
          en: 'Which of the following is the STRONGEST and safest password practice?',
          hi: 'निम्नलिखित में से कौन-सा सबसे मजबूत और सुरक्षित पासवर्ड तरीका है?',
          mr: 'खालीलपैकी सर्वात मजबूत आणि सुरक्षित पासवर्ड पद्धत कोणती?'
        },
        options: [
          { en: 'A. Using "India123" for all your apps', hi: 'A. अपने सभी ऐप्स के लिए "India123" रखना', mr: 'A. सर्व ॲप्ससाठी "India123" वापरणे' },
          { en: 'B. Using a unique passphrase like "Banyan#Cloud92!Lamp" + enabling 2FA', hi: 'B. "Banyan#Cloud92!Lamp" जैसा अनोखा पासवर्ड रखना और 2FA चालू करना', mr: 'B. "Banyan#Cloud92!Lamp" सारखा पासवर्ड ठेवणे आणि 2FA सुरू करणे' },
          { en: 'C. Saving your ATM PIN in a public WhatsApp group', hi: 'C. अपना ATM PIN किसी व्हाट्सएप ग्रुप में लिखकर रखना', mr: 'C. तुमचा ATM PIN व्हॉट्सॲप ग्रुपवर सेव्ह करणे' }
        ],
        correct: 1,
        explanation: {
          en: 'A long passphrase mixing words, numbers, and symbols combined with Two-Factor Authentication stops 99.9% of automated account hacks.',
          hi: 'शब्दों, अंकों और चिह्नों वाला लंबा पासवर्ड और टू-स्टेप वेरिफिकेशन (2FA) 99.9% साइबर हमलों को रोक देता है।',
          mr: 'शब्द, अंक आणि चिन्हे असलेला मोठा पासवर्ड आणि 2FA मुळे ९९.९% हॅकिंगचे प्रकार थांबतात.'
        }
      }
    },
    {
      id: 'unit_03_phishing',
      number: 3,
      icon: '🎣',
      color: '#d97706',
      simMissionId: 'phishing_email',
      voiceTopic: 'Mere saath phishing attack ho gaya hai kya karen',
      badgeId: 'phishing_hunter',
      title: {
        en: 'Phishing Defense',
        hi: 'फ़िशिंग (नकली लिंक) से बचाव',
        mr: 'फिशिंग (बनावट लिंक) पासून बचाव'
      },
      lessonTitle: {
        en: 'Lesson 3: Spotting Fake Links, SMS & Emails',
        hi: 'पाठ 3: नकली लिंक, एसएमएस और ईमेल की पहचान',
        mr: 'धडा ३: बनावट लिंक, मेसेज आणि ईमेल कसे ओळखावे'
      },
      duration: '4 mins',
      cards: [
        {
          title: { en: 'Card 1: What is Phishing?', hi: 'कार्ड 1: फ़िशिंग (Phishing) क्या है?', mr: 'कार्ड १: फिशिंग (Phishing) म्हणजे काय?' },
          body: {
            en: 'Just like catching fish with bait, scammers send fake SMS, WhatsApp messages, or emails with a deceptive link designed to look like your bank or electricity board.',
            hi: 'मछली पकड़ने के चारे की तरह, ठग आपके बैंक या बिजली विभाग के नाम से नकली SMS, व्हाट्सएप या ईमेल भेजते हैं जिसमें एक धोखाधड़ी वाला लिंक होता है।',
            mr: 'मासे पकडण्यासाठी गळाला आमिष लावतात तसे भामटे बँक किंवा वीज मंडळाच्या नावाने बनावट मेसेज आणि लिंक पाठवून तुम्हाला जाळ्यात ओढतात.'
          }
        },
        {
          title: { en: 'Card 2: Spot the Fake Website Address', hi: 'कार्ड 2: नकली वेबसाइट पते को कैसे पहचानें?', mr: 'कार्ड २: बनावट वेबसाईटचा पत्ता कसा ओळखावा?' },
          body: {
            en: 'Scammers use lookalike URLs or shortened links like "bit.ly/sbi-kyc" or "sbi-update-alert.com" instead of the real official domain "onlinesbi.sbi".',
            hi: 'ठग असली वेबसाइट "onlinesbi.sbi" के बजाय "bit.ly/sbi-kyc" या "sbi-update-alert.com" जैसे मिलते-जुलते नकली लिंक का इस्तेमाल करते हैं।',
            mr: 'भामटे खऱ्या "onlinesbi.sbi" ऐवजी "bit.ly/sbi-kyc" किंवा "sbi-update-alert.com" सारख्या फसव्या लिंक्स वापरतात.'
          }
        },
        {
          title: { en: 'Card 3: The Panic & Urgency Trap', hi: 'कार्ड 3: घबराहट और जल्दबाजी का जाल', mr: 'कार्ड ३: भीती आणि घाईचे जाळे' },
          body: {
            en: 'Phishing messages always threaten: "Electricity cut at 9:30 PM tonight" or "PAN card blocked in 2 hours". They want you to click before you think.',
            hi: 'फ़िशिंग संदेश हमेशा डराते हैं: "आज रात 9:30 बजे बिजली कट जाएगी" या "2 घंटे में पैन कार्ड बंद हो जाएगा"। वे चाहते हैं कि आप बिना सोचे क्लिक कर दें।',
            mr: 'फिशिंग मेसेज नेहमी भीती घालतात: "आज रात्री ९:३० वाजता वीज कापली जाईल" किंवा "२ तासांत पॅन कार्ड बंद होईल". तुम्ही विचार न करता क्लिक करावे हाच त्यांचा उद्देश असतो.'
          }
        },
        {
          title: { en: 'Card 4: Safe Action Rule', hi: 'कार्ड 4: सुरक्षित नियम', mr: 'कार्ड ४: सुरक्षिततेचा नियम' },
          body: {
            en: 'Never click links inside unexpected SMS or WhatsApp messages. Always open your official banking or utility app directly from your phone home screen.',
            hi: 'अंजाने SMS या व्हाट्सएप संदेशों में आए किसी भी लिंक पर कभी क्लिक न करें। हमेशा अपने फोन में मौजूद आधिकारिक ऐप को सीधे खोलें।',
            mr: 'अनोळखी मेसेज किंवा व्हॉट्सॲपमध्ये आलेल्या कोणत्याही लिंकवर क्लिक करू नका. नेहमी तुमच्या फोनमधील अधिकृत ॲप थेट उघडा.'
          }
        }
      ],
      practice: {
        type: 'identify_warning',
        typeLabel: { en: 'Identify the Warning Sign', hi: 'चेतावनी संकेत पहचानें', mr: 'धोक्याचे लक्षण ओळखा' },
        prompt: {
          en: 'Inspect this SMS: "Dear Customer, your SBI account will be suspended today. Update PAN immediately at http://bit.ly/sbi-pan-fast". What is the biggest red flag?',
          hi: 'इस SMS को ध्यान से देखें: "प्रिय ग्राहक, आपका SBI खाता आज बंद हो जाएगा। तुरंत http://bit.ly/sbi-pan-fast पर पैन अपडेट करें।" इसमें सबसे बड़ा खतरा क्या है?',
          mr: 'हा SMS तपासा: "प्रिय ग्राहक, तुमचे SBI खाते आज बंद होईल. तात्काळ http://bit.ly/sbi-pan-fast वर पॅन अपडेट करा." यात सर्वात मोठी धोक्याची खूण कोणती?'
        },
        options: [
          { text: { en: 'Shortened "bit.ly" link + same-day account suspension threat', hi: 'छोटा किया गया "bit.ly" लिंक + आज ही खाता बंद होने की धमकी', mr: 'छोटी केलेली "bit.ly" लिंक + आजच खाते बंद होण्याची धमकी' }, correct: true },
          { text: { en: 'The word "Dear Customer" is polite', hi: '"प्रिय ग्राहक" शब्द विनम्र है', mr: '"प्रिय ग्राहक" हा शब्द नम्र आहे' }, correct: false }
        ],
        explanation: {
          en: 'Banks never send bit.ly links or threaten same-day account closure via SMS links.',
          hi: 'बैंक कभी भी bit.ly लिंक नहीं भेजते और न ही SMS लिंक के जरिए खाता बंद करने की धमकी देते हैं।',
          mr: 'बँका कधीही bit.ly लिंक पाठवत नाहीत किंवा मेसेजद्वारे खाते बंद करण्याची धमकी देत नाहीत.'
        }
      },
      quiz: {
        question: {
          en: 'You receive an SMS saying your electricity will be disconnected tonight unless you click a link and pay ₹10. What should you do?',
          hi: 'आपको एक SMS मिलता है कि यदि आपने लिंक पर क्लिक करके ₹10 का भुगतान नहीं किया तो आज रात आपकी बिजली काट दी जाएगी। आपको क्या करना चाहिए?',
          mr: 'तुम्हाला मेसेज येतो की लिंकवर क्लिक करून ₹१० भरले नाहीत तर आज रात्री वीज कापली जाईल. तुम्ही काय करावे?'
        },
        options: [
          { en: 'A. Click the link and pay ₹10 since it is a small amount', hi: 'A. लिंक पर क्लिक करें और ₹10 दे दें क्योंकि यह छोटी रकम है', mr: 'A. ₹१० छोटी रक्कम असल्याने लिंकवर क्लिक करून भरावेत' },
          { en: 'B. Call the 10-digit mobile number written inside the SMS', hi: 'B. SMS में लिखे 10 अंकों के मोबाइल नंबर पर कॉल करें', mr: 'B. मेसेजमध्ये दिलेल्या १० अंकी मोबाईल नंबरवर फोन करावा' },
          { en: 'C. Ignore the link and check your bill directly on the official state electricity app/website', hi: 'C. लिंक को अनदेखा करें और आधिकारिक बिजली विभाग के ऐप/वेबसाइट पर अपना बिल जांचें', mr: 'C. लिंककडे दुर्लक्ष करा आणि महावितरणच्या अधिकृत ॲप/वेबसाईटवर बिल तपासा' }
        ],
        correct: 2,
        explanation: {
          en: 'Paying even ₹10 on a phishing link lets scammers capture your UPI PIN or internet banking password to drain your entire balance!',
          hi: 'नकली लिंक पर ₹10 का भुगतान करने से भी ठग आपका UPI PIN या नेट बैंकिंग पासवर्ड चुराकर पूरा खाता खाली कर सकते हैं!',
          mr: 'बनावट लिंकवर ₹१० भरतानाही भामटे तुमचा UPI PIN किंवा बँक पासवर्ड चोरून संपूर्ण खाते रिकामे करू शकतात!'
        }
      }
    },
    {
      id: 'unit_04_upi',
      number: 4,
      icon: '💳',
      color: '#059669',
      simMissionId: 'upi_payment',
      voiceTopic: 'Scan QR to receive money',
      badgeId: 'payment_protector',
      title: {
        en: 'UPI & QR Safety',
        hi: 'UPI और QR सुरक्षा',
        mr: 'UPI आणि QR सुरक्षा'
      },
      lessonTitle: {
        en: 'Lesson 4: The Unbreakable Rule of UPI PIN & QR Codes',
        hi: 'पाठ 4: UPI पिन और QR कोड का अटूट नियम',
        mr: 'धडा ४: UPI पिन आणि QR कोडचा अढळ नियम'
      },
      duration: '3 mins',
      cards: [
        {
          title: { en: 'Card 1: Receiving Money Needs ZERO PIN', hi: 'कार्ड 1: पैसे प्राप्त करने के लिए PIN नहीं लगता', mr: 'कार्ड १: पैसे मिळवण्यासाठी कधीही PIN लागत नाही' },
          body: {
            en: 'When someone sends money to your bank account via PhonePe, Google Pay, Paytm, or BHIM, the money enters your account automatically. You NEVER enter your UPI PIN to receive money.',
            hi: 'जब कोई PhonePe, Google Pay या Paytm से आपके खाते में पैसे भेजता है, तो पैसे अपने आप आ जाते हैं। पैसे पाने (Receive करने) के लिए कभी भी UPI PIN नहीं डालना पड़ता।',
            mr: 'जेव्हा कोणी PhonePe, Google Pay किंवा Paytm द्वारे तुमच्या खात्यात पैसे पाठवतो, तेव्हा ते आपोआप जमा होतात. पैसे मिळवण्यासाठी कधीही UPI PIN टाकावा लागत नाही.'
          }
        },
        {
          title: { en: 'Card 2: What Does Entering a UPI PIN Do?', hi: 'कार्ड 2: UPI PIN डालने से क्या होता है?', mr: 'कार्ड २: UPI PIN टाकल्याने काय होते?' },
          body: {
            en: 'A UPI PIN has only ONE job: deducting money FROM your account. If a stranger asks you to enter your PIN to "claim a prize or refund", money will be deducted from your account!',
            hi: 'UPI PIN का केवल एक ही काम है: आपके खाते से पैसे काटना। यदि कोई अजनबी "इनाम या रिफंड पाने" के लिए PIN डालने को कहे, तो आपके खाते से पैसे कट जाएंगे!',
            mr: 'UPI PIN चे फक्त एकच काम आहे: तुमच्या खात्यातून पैसे वजा करणे. कोणी "बक्षीस किंवा रिफंड मिळवण्यासाठी" PIN टाकायला सांगितल्यास तुमच्याच खात्यातून पैसे कट होतील!'
          }
        },
        {
          title: { en: 'Card 3: The Fake Buyer QR Code Trap', hi: 'कार्ड 3: नकली खरीदार का QR कोड जाल', mr: 'कार्ड ३: बनावट खरेदीदाराचे QR कोड जाळे' },
          body: {
            en: 'Scammers pretend to buy your crop, furniture, or shop goods and send a QR code on WhatsApp saying "Scan to receive payment". Scanning a QR code is strictly for PAYING money.',
            hi: 'ठग आपकी फसल, पुराना सामान या दुकान का माल खरीदने का बहाना बनाते हैं और व्हाट्सएप पर QR कोड भेजकर कहते हैं "पैसे पाने के लिए स्कैन करें"। याद रखें: QR कोड केवल पैसे देने के लिए स्कैन किया जाता है।',
            mr: 'भामटे तुमचा शेतमाल किंवा वस्तू विकत घेण्याचे नाटक करून व्हॉट्सॲपवर QR कोड पाठवतात आणि "पैसे मिळवण्यासाठी स्कॅन करा" म्हणतात. लक्षात ठेवा: QR कोड फक्त पैसे देण्यासाठीच स्कॅन केला जातो.'
          }
        },
        {
          title: { en: 'Card 4: Decline Unknown Collect Requests', hi: 'कार्ड 4: अनजान Collect Request को तुरंत Decline करें', mr: 'कार्ड ४: अनोळखी Collect Request तात्काळ नाकारा (Decline करा)' },
          body: {
            en: 'Read your UPI screen carefully. If a button says "Pay ₹5,000", tap DECLINE and block the sender.',
            hi: 'अपने UPI ऐप की स्क्रीन ध्यान से पढ़ें। यदि वहां "Pay ₹5,000" लिखा है, तो तुरंत DECLINE दबाएं और नंबर ब्लॉक करें।',
            mr: 'तुमची UPI स्क्रीन काळजीपूर्वक वाचा. तिथे "Pay ₹5,000" दिसत असल्यास लगेच DECLINE दाबा आणि नंबर ब्लॉक करा.'
          }
        }
      ],
      practice: {
        type: 'multi_select',
        typeLabel: { en: 'Select ALL Correct Statements', hi: 'सभी सही कथनों को चुनें', mr: 'सर्व बरोबर विधाने निवडा' },
        prompt: {
          en: 'Check ALL statements that are TRUE about UPI payments:',
          hi: 'UPI भुगतान के बारे में सभी सही (TRUE) कथनों पर टिक लगाएं:',
          mr: 'UPI पेमेंट्सबद्दल खालीलपैकी सर्व बरोबर (TRUE) विधाने निवडा:'
        },
        items: [
          { id: 'u1', text: { en: 'You NEVER need to enter your UPI PIN to receive money.', hi: 'पैसे प्राप्त करने के लिए कभी भी UPI PIN डालने की जरूरत नहीं होती।', mr: 'पैसे मिळवण्यासाठी कधीही UPI PIN टाकण्याची गरज नसते.' }, shouldSelect: true },
          { id: 'u2', text: { en: 'Scanning a QR code sent on WhatsApp is only for PAYING money, not receiving.', hi: 'व्हाट्सएप पर भेजे गए QR कोड को स्कैन करने से पैसे कटते हैं, मिलते नहीं।', mr: 'व्हॉट्सॲपवर आलेला QR कोड स्कॅन केल्याने पैसे जातात, मिळत नाहीत.' }, shouldSelect: true },
          { id: 'u3', text: { en: 'You must enter your UPI PIN to receive a government scholarship.', hi: 'सरकारी छात्रवृत्ति पाने के लिए आपको अपना UPI PIN डालना पड़ता है।', mr: 'सरकारी शिष्यवृत्ती मिळवण्यासाठी UPI PIN टाकावा लागतो.' }, shouldSelect: false }
        ],
        explanation: {
          en: 'Both rule 1 and rule 2 are 100% true! Neither scholarships, refunds, nor buyers require your UPI PIN to credit money to you.',
          hi: 'नियम 1 और नियम 2 दोनों बिल्कुल सही हैं! छात्रवृत्ति, रिफंड या किसी खरीदार से पैसे पाने के लिए कभी भी UPI PIN की आवश्यकता नहीं होती।',
          mr: 'नियम १ आणि नियम २ दोन्ही १००% बरोबर आहेत! शिष्यवृत्ती, रिफंड किंवा खरेदीदाराकडून पैसे मिळवण्यासाठी कधीही UPI PIN लागत नाही.'
        }
      },
      quiz: {
        question: {
          en: 'A customer offers to pay ₹8,000 advance for your goods and sends a QR code on WhatsApp saying "Scan this QR and enter your UPI PIN to receive ₹8,000." What happens if you enter your PIN?',
          hi: 'एक ग्राहक आपके सामान के लिए ₹8,000 एडवांस देने की बात कहता है और व्हाट्सएप पर QR कोड भेजकर कहता है "₹8,000 पाने के लिए इसे स्कैन करें और अपना UPI PIN डालें।" यदि आप पिन डालते हैं तो क्या होगा?',
          mr: 'एक ग्राहक तुमच्या मालासाठी ₹८,००० ॲडव्हान्स देतो म्हणतो आणि व्हॉट्सॲपवर QR कोड पाठवून सांगतो "₹८,००० मिळवण्यासाठी हा कोड स्कॅन करा आणि UPI PIN टाका." तुम्ही पिन टाकल्यास काय होईल?'
        },
        options: [
          { en: 'A. ₹8,000 will be credited to your bank account', hi: 'A. आपके बैंक खाते में ₹8,000 जमा हो जाएंगे', mr: 'A. तुमच्या बँक खात्यात ₹८,००० जमा होतील' },
          { en: 'B. ₹8,000 will be DEDUCTED from your bank account and sent to the scammer!', hi: 'B. आपके बैंक खाते से ₹8,000 कट जाएंगे और ठग के पास चले जाएंगे!', mr: 'B. तुमच्याच बँक खात्यातून ₹८,००० कट होऊन भामट्याला जातील!' },
          { en: 'C. Nothing happens', hi: 'C. कुछ नहीं होगा', mr: 'C. काहीही होणार नाही' }
        ],
        correct: 1,
        explanation: {
          en: 'Scanning a QR code and entering your UPI PIN ALWAYS sends money OUT of your account.',
          hi: 'QR कोड स्कैन करके UPI PIN डालने से हमेशा आपके खाते से पैसे बाहर जाते हैं।',
          mr: 'QR कोड स्कॅन करून UPI PIN टाकल्याने नेहमी तुमच्या खात्यातून पैसे बाहेर जातात.'
        }
      }
    },
    {
      id: 'unit_05_mobile',
      number: 5,
      icon: '📱',
      color: '#7c3aed',
      simMissionId: 'fake_customer_care',
      voiceTopic: 'Support asking to install AnyDesk',
      badgeId: 'digital_defender',
      title: {
        en: 'Mobile & WhatsApp Safety',
        hi: 'मोबाइल और व्हाट्सएप सुरक्षा',
        mr: 'मोबाइल आणि व्हॉट्सॲप सुरक्षा'
      },
      lessonTitle: {
        en: 'Lesson 5: Screen-Sharing Apps & APK Malware Traps',
        hi: 'पाठ 5: स्क्रीन-शेयरिंग ऐप्स और नकली APK फाइलों से बचाव',
        mr: 'धडा ५: स्क्रीन-शेअरिंग ॲप्स आणि बनावट APK फाईल्सपासून बचाव'
      },
      duration: '3 mins',
      cards: [
        {
          title: { en: 'Card 1: The Danger of Screen-Sharing Apps', hi: 'कार्ड 1: स्क्रीन-शेयरिंग ऐप्स का खतरा', mr: 'कार्ड १: स्क्रीन-शेअरिंग ॲप्सचा धोका' },
          body: {
            en: 'Apps like AnyDesk, TeamViewer, and RustDesk let another person see everything on your phone screen live—including every SMS OTP and banking PIN you type!',
            hi: 'AnyDesk, TeamViewer और RustDesk जैसे ऐप्स दूसरे व्यक्ति को आपके फोन की पूरी स्क्रीन लाइव देखने देते हैं—जिसमें आपके सारे SMS OTP और बैंकिंग पिन शामिल हैं!',
            mr: 'AnyDesk, TeamViewer आणि RustDesk सारख्या ॲप्समुळे समोरची व्यक्ती तुमच्या फोनची स्क्रीन थेट पाहू शकते—त्यात तुमचे सर्व OTP आणि बँक पिन दिसतात!'
          }
        },
        {
          title: { en: 'Card 2: Fake APK Files on WhatsApp', hi: 'कार्ड 2: व्हाट्सएप पर आने वाली नकली .apk फाइलें', mr: 'कार्ड २: व्हॉट्सॲपवर येणाऱ्या बनावट .apk फाईल्स' },
          body: {
            en: 'Scammers send files named "PM-Kisan-Update.apk", "Wedding-Card.apk", or "SBI-KYC.apk" on WhatsApp. Installing an APK file gives hackers full control of your SMS.',
            hi: 'ठग व्हाट्सएप पर "PM-Kisan-Update.apk", "Wedding-Card.apk" या "SBI-KYC.apk" नाम की फाइलें भेजते हैं। इन्हें इंस्टॉल करने से हैकर्स को आपके सारे SMS पढ़ने का नियंत्रण मिल जाता है।',
            mr: 'भामटे व्हॉट्सॲपवर "PM-Kisan-Update.apk", "Wedding-Card.apk" किंवा "SBI-KYC.apk" नावाच्या फाईल्स पाठवतात. त्या इन्स्टॉल केल्यास तुमचे सर्व SMS हॅकर्सना दिसतात.'
          }
        },
        {
          title: { en: 'Card 3: Friend-in-Need WhatsApp Impersonation', hi: 'कार्ड 3: दोस्त या रिश्तेदार के नाम से पैसे मांगना', mr: 'कार्ड ३: मित्र किंवा नातेवाईकाच्या नावाने पैशांची मागणी' },
          body: {
            en: 'If a friend or relative messages you on WhatsApp or Instagram asking for urgent medical money to an unknown UPI ID, ALWAYS call them on a regular voice call first.',
            hi: 'यदि कोई दोस्त या रिश्तेदार व्हाट्सएप/इंस्टाग्राम पर मैसेज करके किसी अनजान नंबर पर तुरंत पैसे मांगे, तो पैसे भेजने से पहले उन्हें सामान्य फोन कॉल करके आवाज से पुष्टि करें।',
            mr: 'जर एखाद्या मित्राने किंवा नातेवाईकाने व्हॉट्सॲपवर मेसेज करून तातडीने पैसे मागितले, तर पैसे पाठवण्यापूर्वी त्यांना साध्या फोन कॉलवर बोलून खात्री करा.'
          }
        },
        {
          title: { en: 'Card 4: Golden Mobile Hygiene', hi: 'कार्ड 4: मोबाइल सुरक्षा के सुनहरे नियम', mr: 'कार्ड ४: मोबाइल सुरक्षेचे सुवर्ण नियम' },
          body: {
            en: 'Install apps ONLY from official Google Play Store or Apple App Store. Never share any 9-digit screen-sharing code with any caller.',
            hi: 'ऐप्स केवल आधिकारिक Google Play Store या Apple App Store से ही डाउनलोड करें। किसी भी कॉलर को 9-अंकों का स्क्रीन-शेयरिंग कोड न बताएं।',
            mr: 'ॲप्स फक्त अधिकृत Google Play Store किंवा Apple App Store वरूनच डाउनलोड करा. कोणत्याही कॉलरला स्क्रीन-शेअरिंग कोड सांगू नका.'
          }
        }
      ],
      practice: {
        type: 'match_pairs',
        typeLabel: { en: 'Match Scam Type with Warning Sign', hi: 'धोखाधड़ी को उसके खतरे से मिलाएं', mr: 'फसवणुकीचा प्रकार आणि धोक्याची खूण जुळवा' },
        prompt: {
          en: 'Which scam attack uses "AnyDesk / RustDesk 9-digit access code" to secretly watch your banking OTPs?',
          hi: 'कौन-सा साइबर ठगी का तरीका आपके बैंकिंग OTP को चुपके से देखने के लिए "AnyDesk / RustDesk के 9-अंकों के कोड" का उपयोग करता है?',
          mr: 'तुमचे बँकिंग OTP चोरून पाहण्यासाठी "AnyDesk / RustDesk चा ९-अंकी कोड" कोणत्या फसवणुकीत वापरला जातो?'
        },
        options: [
          { text: { en: 'Remote Screen-Sharing Customer Care Scam', hi: 'रिमोट स्क्रीन-शेयरिंग कस्टमर केयर स्कैम', mr: 'रिमोट स्क्रीन-शेअरिंग कस्टमर केअर स्कॅम' }, correct: true },
          { text: { en: 'Normal Bank Branch Passbook Printing', hi: 'बैंक शाखा में पासबुक प्रिंट कराना', mr: 'बँकेत जाऊन पासबुक प्रिंट करणे' }, correct: false }
        ],
        explanation: {
          en: 'Fake customer care agents ask you to install AnyDesk/RustDesk so they can watch your screen live and steal your money.',
          hi: 'फर्जी कस्टमर केयर एजेंट आपकी स्क्रीन लाइव देखने और पैसे चुराने के लिए AnyDesk/RustDesk डाउनलोड करवाते हैं।',
          mr: 'बनावट कस्टमर केअर एजंट तुमची स्क्रीन लाईव्ह पाहण्यासाठी आणि पैसे चोरण्यासाठी AnyDesk/RustDesk इन्स्टॉल करायला लावतात.'
        }
      },
      quiz: {
        question: {
          en: 'You receive a file named "Digital_Wedding_Invitation.apk" in a WhatsApp group. What should you do?',
          hi: 'आपको व्हाट्सएप ग्रुप में "Digital_Wedding_Invitation.apk" नाम की एक फाइल मिलती है। आपको क्या करना चाहिए?',
          mr: 'तुम्हाला व्हॉट्सॲप ग्रुपमध्ये "Digital_Wedding_Invitation.apk" नावाची फाईल आली आहे. तुम्ही काय करावे?'
        },
        options: [
          { en: 'A. Download and install the .apk file to see the wedding venue', hi: 'A. शादी का स्थान देखने के लिए .apk फाइल इंस्टॉल करें', mr: 'A. लग्नाचे ठिकाण पाहण्यासाठी .apk फाईल इन्स्टॉल करावी' },
          { en: 'B. NEVER open or install .apk files from WhatsApp — real invitations are images or PDFs, never .apk apps!', hi: 'B. व्हाट्सएप से .apk फाइल कभी इंस्टॉल न करें — असली कार्ड फोटो या PDF होते हैं, .apk ऐप नहीं!', mr: 'B. व्हॉट्सॲपवरील .apk फाईल कधीही उघडू नका — खरी निमंत्रण पत्रिका फोटो किंवा PDF असते, .apk ॲप नसते!' },
          { en: 'C. Forward the .apk file to your family group', hi: 'C. इसे अपने परिवार के ग्रुप में फॉरवर्ड करें', mr: 'C. ती फाईल कुटुंबाच्या ग्रुपवर फॉरवर्ड करावी' }
        ],
        correct: 1,
        explanation: {
          en: 'Files ending in .apk are Android software programs. Scammers disguise malware as wedding cards or challans to steal your SMS OTPs.',
          hi: '.apk वाली फाइलें मोबाइल सॉफ्टवेयर होती हैं। ठग आपके SMS OTP चुराने के लिए शादी के कार्ड या चालान के नाम से वायरस भेजते हैं।',
          mr: '.apk फाईल्स म्हणजे मोबाईल सॉफ्टवेअर असतात. भामटे तुमचे SMS OTP चोरण्यासाठी लग्नपत्रिका किंवा चलनच्या नावाखाली व्हायरस पाठवतात.'
        }
      }
    },
    {
      id: 'unit_06_shopping',
      number: 6,
      icon: '🛒',
      color: '#db2777',
      simMissionId: 'fake_customer_care',
      voiceTopic: 'Fake customer care refund scam',
      badgeId: null,
      title: {
        en: 'Online Shopping Safety',
        hi: 'ऑनलाइन शॉपिंग सुरक्षा',
        mr: 'ऑनलाइन शॉपिंग सुरक्षा'
      },
      lessonTitle: {
        en: 'Lesson 6: Unbelievable Discounts & Fake Helpline Traps',
        hi: 'पाठ 6: अविश्वसनीय डिस्काउंट और फर्जी कस्टमर केयर से बचाव',
        mr: 'धडा ६: अवाजवी डिस्काउंट आणि बनावट कस्टमर केअरपासून बचाव'
      },
      duration: '3 mins',
      cards: [
        {
          title: { en: 'Card 1: The "90% Off" Fake Shopping Site', hi: 'कार्ड 1: "90% छूट" वाली नकली शॉपिंग वेबसाइट', mr: 'कार्ड १: "९०% सूट" देणाऱ्या बनावट शॉपिंग वेबसाईट्स' },
          body: {
            en: 'Social media ads offering a ₹20,000 smartphone for ₹999 or 5 Litres of Ghee for ₹199 are almost always fake traps that take prepaid UPI money and never deliver anything.',
            hi: '₹20,000 का स्मार्टफोन ₹999 में या 5 लीटर घी ₹199 में देने वाले सोशल मीडिया विज्ञापन अक्सर नकली होते हैं जो पहले पैसे ले लेते हैं और सामान कभी नहीं भेजते।',
            mr: '₹२०,००० चा स्मार्टफोन ₹९९९ मध्ये किंवा ५ लिटर तूप ₹१९९ मध्ये देणाऱ्या जाहिराती फसव्या असतात; त्या आधी पैसे घेतात आणि वस्तू कधीच पाठवत नाहीत.'
          }
        },
        {
          title: { en: 'Card 2: Fake Courier & Customs Calls', hi: 'कार्ड 2: नकली कूरियर और रिफंड कॉल', mr: 'कार्ड २: बनावट कुरिअर आणि रिफंड कॉल्स' },
          body: {
            en: 'Scammers call saying "Your online order failed; click this link or share OTP to get your refund." Refunds go back to your bank account automatically without links or OTPs.',
            hi: 'ठग कॉल करके कहते हैं "आपका ऑर्डर रद्द हो गया है, रिफंड पाने के लिए लिंक पर क्लिक करें या OTP बताएं।" याद रखें: असली रिफंड बिना किसी लिंक या OTP के सीधे बैंक खाते में आता है।',
            mr: 'भामटे फोन करून सांगतात "तुमची ऑर्डर कॅन्सल झाली आहे, रिफंडसाठी लिंकवर क्लिक करा किंवा OTP सांगा." लक्षात ठेवा: खरा रिफंड कोणताही OTP न देता थेट खात्यात जमा होतो.'
          }
        },
        {
          title: { en: 'Card 3: Never Search Helpline Numbers on Public Posts', hi: 'कार्ड 3: गूगल कमेंट्स से कस्टमर केयर नंबर न लें', mr: 'कार्ड ३: गूगलवरील अनधिकृत कस्टमर केअर नंबरवर विश्वास ठेवू नका' },
          body: {
            en: 'Scammers post personal 10-digit mobile numbers as "Flipkart/Amazon/Courier Helpline". Always use the official "Help / Contact Us" section inside the shopping app.',
            hi: 'ठग गूगल या सोशल मीडिया पर अपने 10-अंकों के मोबाइल नंबर को कस्टमर केयर बताकर लिख देते हैं। हमेशा शॉपिंग ऐप के अंदर मौजूद आधिकारिक Help सेक्शन का ही उपयोग करें।',
            mr: 'भामटे गूगलवर स्वतःचे १० अंकी नंबर कस्टमर केअर म्हणून टाकतात. नेहमी शॉपिंग ॲपच्या आतील अधिकृत Help सेक्शनचाच वापर करा.'
          }
        },
        {
          title: { en: 'Card 4: Safe Online Shopping Checklist', hi: 'कार्ड 4: सुरक्षित ऑनलाइन शॉपिंग नियम', mr: 'कार्ड ४: सुरक्षित ऑनलाइन खरेदीचे नियम' },
          body: {
            en: 'Verify website reputation, prefer Cash on Delivery (COD) on unfamiliar stores, and never scan a QR code to claim a "Scratch Card Lottery".',
            hi: 'अनजान वेबसाइट से खरीदारी न करें, संदेह होने पर कैश ऑन डिलीवरी (COD) चुनें और "लॉटरी स्क्रैच कार्ड" के नाम पर कभी QR कोड स्कैन न करें।',
            mr: 'अनोळखी वेबसाईटवरून खरेदी टाळा, कॅश ऑन डिलिव्हरी (COD) निवडा आणि "लॉटरी स्क्रॅच कार्ड" साठी कधीही QR कोड स्कॅन करू नका.'
          }
        }
      ],
      practice: {
        type: 'scenario_decision',
        typeLabel: { en: 'Scenario Decision', hi: 'परिस्थिति निर्णय', mr: 'प्रसंग निर्णय' },
        prompt: {
          en: 'You see an Instagram ad selling a branded ₹15,000 mixer-grinder & kitchen set for just ₹299, but it only accepts instant UPI payment (no Cash on Delivery). What should you do?',
          hi: 'आप इंस्टाग्राम पर एक विज्ञापन देखते हैं जिसमें ₹15,000 का ब्रांडेड किचन सेट केवल ₹299 में मिल रहा है, लेकिन वहां केवल एडवांस UPI पेमेंट का विकल्प है। आप क्या करेंगे?',
          mr: 'तुम्हाला इंस्टाग्रामवर जाहिरात दिसते की ₹१५,००० चा ब्रँडेड किचन सेट फक्त ₹२९९ मध्ये मिळत आहे, पण फक्त आगाऊ UPI पेमेंट स्वीकारले जाते. तुम्ही काय कराल?'
        },
        options: [
          { text: { en: 'Close the page immediately — extreme 98% discount demanding advance UPI payment is a classic fake store trap.', hi: 'पेज को तुरंत बंद कर दें — 98% छूट का लालच देकर एडवांस पेमेंट मांगना नकली शॉपिंग साइट का जाल है।', mr: 'पेज तात्काळ बंद करा — ९८% सूट देऊन आगाऊ पैसे मागणे हे बनावट वेबसाईटचे जाळे आहे.' }, correct: true },
          { text: { en: 'Pay ₹299 quickly before stock runs out', hi: 'स्टॉक खत्म होने से पहले जल्दी ₹299 भेज दें', mr: 'स्टॉक संपण्यापूर्वी लगेच ₹२९९ पाठवावेत' }, correct: false }
        ],
        explanation: {
          en: 'Fake shopping portals use countdown timers ("Only 2 left!") and impossible prices to steal advance payments and card details.',
          hi: 'नकली शॉपिंग साइट्स "केवल 2 बचे हैं!" का टाइमर और असंभव सस्ती कीमतें दिखाकर एडवांस पैसे और कार्ड डिटेल्स चुराती हैं।',
          mr: 'बनावट शॉपिंग वेबसाईट्स "फक्त २ शिल्लक!" असा टायमर आणि अशक्य स्वस्त किमती दाखवून तुमचे पैसे चोरतात.'
        }
      },
      quiz: {
        question: {
          en: 'Where should you find the customer care contact if a delivery item is delayed?',
          hi: 'यदि आपका ऑनलाइन ऑर्डर देर से आ रहा है, तो कस्टमर केयर से संपर्क करने का सही तरीका क्या है?',
          mr: 'तुमची ऑनलाइन ऑर्डर उशिरा येत असल्यास कस्टमर केअरशी संपर्क साधण्याचा योग्य मार्ग कोणता?'
        },
        options: [
          { en: 'A. Call any 10-digit mobile number found in social media comments', hi: 'A. सोशल मीडिया कमेंट्स में लिखे किसी भी 10-अंकों के नंबर पर कॉल करें', mr: 'A. सोशल मीडिया कमेंट्समधील कोणत्याही १० अंकी नंबरवर फोन करावा' },
          { en: 'B. Open the official shopping app (e.g., Amazon/Flipkart) and use the built-in "Help / Customer Service" menu', hi: 'B. आधिकारिक शॉपिंग ऐप खोलें और उसके अंदर दिए गए "Help / Customer Service" विकल्प का उपयोग करें', mr: 'B. अधिकृत शॉपिंग ॲप उघडा आणि त्यातील "Help / Customer Service" पर्यायाचा वापर करा' },
          { en: 'C. Share your debit card CVV with the delivery caller', hi: 'C. कॉलर को अपने डेबिट कार्ड का CVV नंबर बता दें', mr: 'C. कॉलरला तुमच्या डेबिट कार्डचा CVV सांगावा' }
        ],
        correct: 1,
        explanation: {
          en: 'Official shopping apps handle support and refunds inside the app itself without ever asking for remote access or UPI PINs.',
          hi: 'आधिकारिक शॉपिंग ऐप्स के अंदर ही सुरक्षित सहायता और रिफंड की सुविधा होती है और वे कभी रिमोट ऐप या पिन नहीं मांगते।',
          mr: 'अधिकृत शॉपिंग ॲप्समध्येच मदतीची सोय असते आणि ते कधीही रिमोट ॲप किंवा पिन मागत नाहीत.'
        }
      }
    },
    {
      id: 'unit_07_jobs',
      number: 7,
      icon: '💼',
      color: '#0284c7',
      simMissionId: 'fake_job',
      voiceTopic: 'Fake Telegram job asking for deposit',
      badgeId: null,
      title: {
        en: 'Fake Job Scams',
        hi: 'फर्जी नौकरी धोखाधड़ी',
        mr: 'बनावट नोकरी फसवणूक'
      },
      lessonTitle: {
        en: 'Lesson 7: Telegram Work-From-Home & Prepaid Task Traps',
        hi: 'पाठ 7: टेलीग्राम वर्क-फ्रॉम-होम और प्रीपेड टास्क जाल',
        mr: 'धडा ७: टेलिग्राम वर्क-फ्रॉम-होम आणि प्रीपेड टास्क फसवणूक'
      },
      duration: '3 mins',
      cards: [
        {
          title: { en: 'Card 1: How the ₹300 Bait Works', hi: 'कार्ड 1: ₹300 के शुरुआती चारे का खेल', mr: 'कार्ड १: सुरुवातीच्या ₹३०० आमिषाचा खेळ' },
          body: {
            en: 'Scammers message you offering ₹50 per YouTube video like or Google Map hotel review. They actually send ₹150–₹300 to your UPI account on Day 1 to make you trust them completely!',
            hi: 'ठग यूट्यूब वीडियो लाइक करने या होटल रिव्यू के बदले पैसे देने का वादा करते हैं। आपका भरोसा जीतने के लिए वे पहले दिन सच में आपके खाते में ₹150–₹300 भेज देते हैं!',
            mr: 'भामटे यूट्यूब व्हिडिओ लाईक करण्याचे किंवा हॉटेल रिव्ह्यू देण्याचे काम देतात. तुमचा विश्वास जिंकण्यासाठी ते पहिल्या दिवशी खरोखर ₹१५०–₹३०० तुमच्या खात्यात पाठवतात!'
          }
        },
        {
          title: { en: 'Card 2: The "Prepaid VIP Task" Trap', hi: 'कार्ड 2: "प्रीपेड VIP टास्क" का जाल', mr: 'कार्ड २: "प्रीपेड VIP टास्क" चे जाळे' },
          body: {
            en: 'Once you trust them, they ask you to deposit ₹3,000, then ₹15,000, then ₹50,000 for "VIP Tasks". When you try to withdraw your money, they freeze the fake dashboard and demand more "tax fees".',
            hi: 'भरोसा जीतने के बाद वे "VIP टास्क" के नाम पर पहले ₹3,000, फिर ₹15,000 और फिर ₹50,000 जमा करने को कहते हैं। जब आप पैसे निकालने की कोशिश करते हैं, तो वे खाता फ्रीज कर देते हैं।',
            mr: 'विश्वास बसल्यावर ते "VIP टास्क" च्या नावाखाली ₹३,०००, मग ₹१५,००० आणि ₹५०,००० भरायला लावतात. पैसे काढायचा प्रयत्न केल्यास ते खाते ब्लॉक करतात.'
          }
        },
        {
          title: { en: 'Card 3: Fake Job Offer Letters & Security Deposits', hi: 'कार्ड 3: फर्जी जॉब ऑफर लेटर और रजिस्ट्रेशन फीस', mr: 'कार्ड ३: बनावट नोकरीचे पत्र आणि नोंदणी शुल्क' },
          body: {
            en: 'Real companies (TCS, Infosys, Railways, Banks) NEVER ask candidates to pay money for interview registration, medical checkups, or laptop security deposits.',
            hi: 'असली कंपनियां या सरकारी विभाग कभी भी इंटरव्यू, मेडिकल जांच या लैपटॉप सिक्योरिटी डिपॉजिट के नाम पर उम्मीदवारों से पैसे नहीं मांगते।',
            mr: 'खऱ्या कंपन्या किंवा सरकारी विभाग कधीही मुलाखत, मेडिकल किंवा लॅपटॉप डिपॉझिटच्या नावाखाली उमेदवारांकडून पैसे मागत नाहीत.'
          }
        },
        {
          title: { en: 'Card 4: The Unbreakable Employment Rule', hi: 'कार्ड 4: रोजगार का अटूट नियम', mr: 'कार्ड ४: नोकरीचा सुवर्ण नियम' },
          body: {
            en: 'Real jobs PAY YOU for your work. Any job that asks YOU to deposit money first is 100% a cyber scam!',
            hi: 'असली नौकरी में काम के बदले आपको पैसे मिलते हैं। जो काम आपसे पहले पैसे जमा करने को कहे, वह 100% साइबर ठगी है!',
            mr: 'खऱ्या नोकरीत कामाचा मोबदला तुम्हाला मिळतो. जिथे तुम्हालाच आधी पैसे भरावे लागतात ती १००% सायबर फसवणूक आहे!'
          }
        }
      ],
      practice: {
        type: 'multiple_choice',
        typeLabel: { en: 'Multiple Choice Challenge', hi: 'बहुविकल्पीय चुनौती', mr: 'बहुपर्यायी आव्हान' },
        prompt: {
          en: 'Why do Telegram task scammers actually pay you ₹200 or ₹300 on the first day?',
          hi: 'टेलीग्राम टास्क वाले ठग पहले दिन आपको सच में ₹200 या ₹300 क्यों भेजते हैं?',
          mr: 'टेलिग्राम टास्क भामटे पहिल्या दिवशी तुम्हाला खरोखर ₹२०० किंवा ₹३०० का पाठवतात?'
        },
        options: [
          { text: { en: 'Because it is a psychological bait to win your trust before asking you for thousands of rupees', hi: 'क्योंकि यह आपका भरोसा जीतने का चारा है ताकि बाद में आपसे हजारों रुपये ठगे जा सकें', mr: 'कारण तुमचा विश्वास जिंकून नंतर तुमच्याकडून हजारो रुपये उकळण्यासाठी ते आमिष असते' }, correct: true },
          { text: { en: 'Because liking YouTube videos is a high-paying government job', hi: 'क्योंकि यूट्यूब वीडियो लाइक करना एक सरकारी नौकरी है', mr: 'कारण यूट्यूब व्हिडिओ लाईक करणे ही सरकारी नोकरी आहे' }, correct: false }
        ],
        explanation: {
          en: 'Scammers invest ₹200 as bait so victims feel confident depositing ₹10,000 or ₹50,000 later.',
          hi: 'ठग ₹200 का चारा इसलिए डालते हैं ताकि लोग भरोसा करके बाद में ₹10,000 या ₹50,000 जमा कर दें।',
          mr: 'भामटे ₹२०० चे आमिष दाखवतात जेणेकरून लोक विश्वास ठेवून नंतर ₹१०,००० किंवा ₹५०,००० जमा करतील.'
        }
      },
      quiz: {
        question: {
          en: 'You received ₹300 for rating 3 hotels on Telegram. Now the admin says: "Deposit ₹3,000 for the Super-VIP task to withdraw ₹4,800." What is your safest move?',
          hi: 'आपको टेलीग्राम पर 3 होटलों को रेटिंग देने के लिए ₹300 मिले। अब एडमिन कहता है: "₹4,800 निकालने के लिए ₹3,000 जमा करें।" सबसे सुरक्षित कदम क्या है?',
          mr: 'तुम्हाला टेलिग्रामवर ३ हॉटेल्सना रेटिंग दिल्याबद्दल ₹३०० मिळाले. आता ॲडमिन म्हणतो: "₹४,८०० मिळवण्यासाठी ₹३,००० जमा करा." सर्वात सुरक्षित कृती कोणती?'
        },
        options: [
          { en: 'A. Deposit ₹3,000 since they already paid ₹300 honestly', hi: 'A. ₹3,000 जमा कर दें क्योंकि उन्होंने पहले ₹300 दिए हैं', mr: 'A. त्यांनी आधी ₹३०० दिले म्हणून ₹३,००० जमा करावेत' },
          { en: 'B. STOP immediately, pay ₹0, and block/exit the Telegram group', hi: 'B. तुरंत रुकें, एक रुपया भी न भेजें और टेलीग्राम ग्रुप छोड़ दें/ब्लॉक करें', mr: 'B. तात्काळ थांबा, एकही रुपया भरू नका आणि टेलिग्राम ग्रुपमधून बाहेर पडा' },
          { en: 'C. Borrow money from friends to join the VIP task', hi: 'C. दोस्तों से उधार लेकर VIP टास्क में लगाएं', mr: 'C. मित्रांकडून पैसे उसने घेऊन VIP टास्कमध्ये गुंतवावेत' }
        ],
        correct: 1,
        explanation: {
          en: 'The moment a task group asks for a prepaid deposit, the trap has begun. Exit immediately and never send money.',
          hi: 'जैसे ही कोई ग्रुप आपसे पैसे जमा करने को कहे, समझ लीजिए जाल शुरू हो गया है। तुरंत ग्रुप छोड़ दें।',
          mr: 'ज्या क्षणी कोणताही ग्रुप तुमच्याकडे डिपॉझिट मागतो, तिथूनच फसवणुकीला सुरुवात होते. तात्काळ ग्रुप सोडा.'
        }
      }
    },
    {
      id: 'unit_08_investment',
      number: 8,
      icon: '📈',
      color: '#15803d',
      simMissionId: 'investment_scam',
      voiceTopic: 'Fake WhatsApp stock trading investment group',
      badgeId: null,
      title: {
        en: 'Investment Scams',
        hi: 'निवेश और शेयर बाजार ठगी',
        mr: 'गुंतवणूक आणि शेअर बाजार फसवणूक'
      },
      lessonTitle: {
        en: 'Lesson 8: Fake Trading Apps & "Guaranteed 300% Profit" Traps',
        hi: 'पाठ 8: नकली ट्रेडिंग ऐप्स और "300% गारंटीड मुनाफे" का सच',
        mr: 'धडा ८: बनावट ट्रेडिंग ॲप्स आणि "३००% खात्रीशीर नफा" फसवणूक'
      },
      duration: '4 mins',
      cards: [
        {
          title: { en: 'Card 1: Fake WhatsApp VIP Stock Groups', hi: 'कार्ड 1: फर्जी व्हाट्सएप VIP शेयर मार्केट ग्रुप', mr: 'कार्ड १: बनावट व्हॉट्सॲप VIP शेअर मार्केट ग्रुप' },
          body: {
            en: 'Scammers add you to WhatsApp groups pretending to be famous stock brokers or Foreign Institutional Investors (FII). Most "members" posting profit screenshots in the group are actually bots controlled by the scammer!',
            hi: 'ठग आपको मशहूर शेयर ब्रोकर के नाम से बने व्हाट्सएप ग्रुप में जोड़ते हैं। ग्रुप में मुनाफे के स्क्रीनशॉट डालने वाले ज्यादातर सदस्य खुद ठग के ही नकली नंबर होते हैं!',
            mr: 'भामटे तुम्हाला प्रसिद्ध शेअर ब्रोकरच्या नावाने बनवलेल्या व्हॉट्सॲप ग्रुपमध्ये जोडतात. ग्रुपमध्ये नफ्याचे स्क्रीनशॉट टाकणारे बहुतांश लोक भामट्याचेच साथीदार असतात!'
          }
        },
        {
          title: { en: 'Card 2: Fake Trading Dashboard Numbers', hi: 'कार्ड 2: नकली ट्रेडिंग ऐप के झूठे आंकड़े', mr: 'कार्ड २: बनावट ट्रेडिंग ॲपवरील खोटे आकडे' },
          body: {
            en: 'They ask you to install a special app where your ₹50,000 appears to grow to ₹3,00,000 in days. Those numbers are completely fake—your real money was stolen the day you transferred it.',
            hi: 'वे आपको एक नकली ऐप डाउनलोड करवाते हैं जहां आपके ₹50,000 कुछ ही दिनों में ₹3,00,000 दिखने लगते हैं। वे नंबर पूरी तरह नकली होते हैं—आपका पैसा पहले ही दिन चोरी हो चुका होता है।',
            mr: 'ते तुम्हाला एक बनावट ॲप डाउनलोड करायला लावतात जिथे तुमचे ₹५०,००० काही दिवसांतच ₹३,००,००० झालेले दिसतात. ते आकडे पूर्णपणे खोटे असतात!'
          }
        },
        {
          title: { en: 'Card 3: The "20% Profit Release Tax" Trap', hi: 'कार्ड 3: "20% मुनाफा निकासी टैक्स" का जाल', mr: 'कार्ड ३: "२०% नफा काढण्याचा कर" जाळे' },
          body: {
            en: 'When you click Withdraw, they block the withdrawal and demand ₹60,000 more as "SEBI Release Fee". Real SEBI-registered brokers never ask for external bank transfers to release your funds.',
            hi: 'जब आप पैसे निकालना चाहते हैं, तो वे "20% टैक्स या फीस" के नाम पर और पैसे मांगते हैं। याद रखें: कोई भी असली SEBI-पंजीकृत ब्रोकर पैसे निकालने के लिए अलग से शुल्क नहीं मांगता।',
            mr: 'जेव्हा तुम्ही पैसे काढण्याचा प्रयत्न करता, तेव्हा ते "२०% कर किंवा फी" म्हणून आणखी पैसे मागतात. कोणताही अधिकृत SEBI ब्रोकर पैसे काढण्यासाठी वेगळे पैसे मागत नाही.'
          }
        },
        {
          title: { en: 'Card 4: Safe Investing Rule', hi: 'कार्ड 4: सुरक्षित निवेश का नियम', mr: 'कार्ड ४: सुरक्षित गुंतवणुकीचा नियम' },
          body: {
            en: 'Nobody in the world can guarantee 200% or 300% stock returns. Always verify SEBI registration independently on sebi.gov.in.',
            hi: 'दुनिया में कोई भी 200% या 300% गारंटीड शेयर मुनाफा नहीं दे सकता। हमेशा sebi.gov.in पर ब्रोकर की वैधता जांचें।',
            mr: 'जगात कोणीही २००% किंवा ३००% खात्रीशीर नफा देऊ शकत नाही. गुंतवणूक करण्यापूर्वी sebi.gov.in वर खात्री करा.'
          }
        }
      ],
      practice: {
        type: 'arrange_steps',
        typeLabel: { en: 'Arrange Safety Steps in Correct Order', hi: 'सुरक्षा कदमों को सही क्रम में चुनें', mr: 'सुरक्षेच्या पायऱ्या योग्य क्रमाने निवडा' },
        prompt: {
          en: 'If someone adds you to a WhatsApp group promising "Double your money in 7 days via VIP IPO allotment", what is the correct 1-2-3 safety sequence?',
          hi: 'यदि कोई आपको "7 दिन में पैसा दोगुना करने वाले VIP IPO ग्रुप" में जोड़े, तो सही 1-2-3 सुरक्षा क्रम क्या है?',
          mr: 'कोणी तुम्हाला "७ दिवसांत पैसे दुप्पट करणाऱ्या VIP IPO ग्रुप" मध्ये जोडल्यास योग्य १-२-३ सुरक्षा क्रम कोणता?'
        },
        options: [
          { text: { en: '1. STOP (Do not invest) → 2. VERIFY (Check SEBI registration) → 3. EXIT & Report fake group', hi: '1. रुकें (पैसे न लगाएं) → 2. जांचें (SEBI पंजीकरण देखें) → 3. ग्रुप छोड़ें और रिपोर्ट करें', mr: '१. थांबा (पैसे गुंतवू नका) → २. तपासा (SEBI नोंदणी पहा) → ३. ग्रुप सोडा आणि तक्रार करा' }, correct: true },
          { text: { en: '1. Transfer ₹50,000 → 2. Download APK → 3. Pay 20% release fee', hi: '1. ₹50,000 भेजें → 2. APK डाउनलोड करें → 3. 20% फीस दें', mr: '१. ₹५०,००० पाठवा → २. APK डाउनलोड करा → ३. २०% फी भरा' }, correct: false }
        ],
        explanation: {
          en: 'Always follow STOP → VERIFY → ACT SAFELY. Never transfer money to personal bank accounts shown in WhatsApp trading groups.',
          hi: 'हमेशा रुकें → जांचें → सुरक्षित कदम उठाएं का पालन करें। व्हाट्सएप ट्रेडिंग ग्रुप में बताए गए खातों में कभी पैसे न भेजें।',
          mr: 'नेहमी थांबा → पडताळणी करा → सुरक्षित कृती करा या सूत्राचे पालन करा.'
        }
      },
      quiz: {
        question: {
          en: 'An online trading app shows your ₹25,000 investment has grown to ₹1,80,000, but asks you to transfer ₹36,000 to a personal UPI ID as "Withdrawal Tax" before releasing the money. What should you do?',
          hi: 'एक ट्रेडिंग ऐप दिखाता है कि आपके ₹25,000 बढ़कर ₹1,80,000 हो गए हैं, लेकिन पैसे निकालने के लिए ₹36,000 "विदड्रॉअल टैक्स" किसी व्यक्तिगत UPI ID पर भेजने को कहता है। आपको क्या करना चाहिए?',
          mr: 'एका ट्रेडिंग ॲपवर तुमचे ₹२५,००० वाढून ₹१,८०,००० झालेले दिसतात, पण ते पैसे काढण्यासाठी ₹३६,००० "विथड्रॉवल टॅक्स" एका UPI ID वर पाठवायला सांगतात. तुम्ही काय करावे?'
        },
        options: [
          { en: 'A. Pay ₹36,000 to get the ₹1,80,000', hi: 'A. ₹1,80,000 पाने के लिए ₹36,000 भेज दें', mr: 'A. ₹१,८०,००० मिळवण्यासाठी ₹३६,००० पाठवावेत' },
          { en: 'B. Do NOT pay ₹36,000! The ₹1,80,000 balance is fake, and call 1930 immediately to report the ₹25,000 fraud', hi: 'B. ₹36,000 बिल्कुल न भेजें! ₹1,80,000 का बैलेंस नकली है; तुरंत 1930 पर कॉल करके ₹25,000 की ठगी की शिकायत करें', mr: 'B. ₹३६,००० अजिबात भरू नका! ₹१,८०,००० चा बॅलन्स खोटा आहे; तात्काळ १९३० वर कॉल करून तक्रार नोंदवा' },
          { en: 'C. Ask them to deduct ₹36,000 and send the rest', hi: 'C. उनसे ₹36,000 काटकर बाकी भेजने की विनती करें', mr: 'C. त्यांना ₹३६,००० वजा करून उरलेले पैसे पाठवण्याची विनंती करावी' }
        ],
        correct: 1,
        explanation: {
          en: 'Never pay "withdrawal fees" or "taxes" to unlock online profits. It is a second trap to steal even more money from you!',
          hi: 'ऑनलाइन मुनाफा निकालने के लिए कभी भी अलग से टैक्स या फीस न दें। यह आपसे और अधिक पैसे ठगने का दूसरा जाल होता है!',
          mr: 'ऑनलाइन नफा काढण्यासाठी कधीही वेगळा कर किंवा फी भरू नका. तुमच्याकडून आणखी पैसे उकळण्याचा हा दुसरा सापळा असतो!'
        }
      }
    },
    {
      id: 'unit_09_digital_arrest',
      number: 9,
      icon: '👮',
      color: '#dc2626',
      simMissionId: 'digital_arrest',
      voiceTopic: 'Caller says Skype police digital arrest',
      badgeId: null,
      title: {
        en: 'Digital Arrest Scams',
        hi: 'डिजिटल अरेस्ट स्कैम से बचाव',
        mr: 'डिजिटल अरेस्ट फसवणुकीपासून बचाव'
      },
      lessonTitle: {
        en: 'Lesson 9: Exposing Fake Police/CBI Video Call Interrogation',
        hi: 'पाठ 9: फर्जी पुलिस/CBI वीडियो कॉल और डिजिटल अरेस्ट का सच',
        mr: 'धडा ९: बनावट पोलीस/CBI व्हिडिओ कॉल आणि डिजिटल अरेस्टचे सत्य'
      },
      duration: '4 mins',
      cards: [
        {
          title: { en: 'Card 1: What is the "Digital Arrest" Scam?', hi: 'कार्ड 1: "डिजिटल अरेस्ट" ठगी क्या है?', mr: 'कार्ड १: "डिजिटल अरेस्ट" फसवणूक म्हणजे काय?' },
          body: {
            en: 'Scammers call pretending to be Courier Customs, Police, CBI, or ED. They claim an illegal parcel was found in your Aadhaar name and switch to a WhatsApp or Skype video call wearing a fake uniform.',
            hi: 'ठग कूरियर, पुलिस, CBI या ED अधिकारी बनकर कॉल करते हैं। वे दावा करते हैं कि आपके आधार कार्ड के नाम से अवैध पार्सल पकड़ा गया है और नकली वर्दी पहनकर व्हाट्सएप/स्काइप वीडियो कॉल करते हैं।',
            mr: 'भामटे कुरिअर, पोलीस, CBI किंवा ED अधिकारी असल्याचा बनाव करतात. तुमच्या आधार कार्डवर बेकायदेशीर पार्सल सापडल्याचे सांगून बनावट गणवेशात व्हिडिओ कॉल करतात.'
          }
        },
        {
          title: { en: 'Card 2: The Law of India — NO Digital Arrest Exists!', hi: 'कार्ड 2: भारतीय कानून का सच — डिजिटल अरेस्ट कुछ नहीं होता!', mr: 'कार्ड २: भारतीय कायद्याचे सत्य — डिजिटल अरेस्ट अस्तित्वातच नाही!' },
          body: {
            en: 'Indian Police, CBI, ED, RBI, and Courts NEVER arrest anyone on video call, NEVER ask you to stay on camera for hours, and NEVER ask you to transfer money to a "safe verification account".',
            hi: 'भारतीय पुलिस, CBI, ED, RBI या न्यायालय कभी भी वीडियो कॉल पर किसी को गिरफ्तार नहीं करते, न कैमरे के सामने बिठाते हैं, और न ही "सत्यापन खाते" में पैसे ट्रांसफर करवाते हैं।',
            mr: 'भारतीय पोलीस, CBI, ED, RBI किंवा न्यायालय कधीही व्हिडिओ कॉलवर कोणालाही अटक करत नाहीत आणि कोणत्याही खात्यात पैसे ट्रान्सफर करायला सांगत नाहीत.'
          }
        },
        {
          title: { en: 'Card 3: Why Scammers Tell You "Don\'t Tell Your Family"', hi: 'कार्ड 3: ठग "परिवार को मत बताना" क्यों कहते हैं?', mr: 'कार्ड ३: भामटे "कुटुंबाला सांगू नका" असे का म्हणतात?' },
          body: {
            en: 'They threaten you with "National Security Secrecy" so you don\'t speak to your spouse, children, or local police—because anyone else would immediately recognize the scam!',
            hi: 'वे "राष्ट्रीय सुरक्षा गोपनीयता" का डर दिखाकर आपको परिवार या बच्चों से बात करने से रोकते हैं—क्योंकि जैसे ही आप किसी अपने को बताएंगे, ठगी का पर्दाफाश हो जाएगा!',
            mr: 'ते "राष्ट्रीय सुरक्षेची गोपनीयता" सांगून तुम्हाला कुटुंबाशी बोलू देत नाहीत—कारण तुम्ही घरच्यांना सांगितल्यास त्यांची फसवणूक लगेच उघडकीस येईल!'
          }
        },
        {
          title: { en: 'Card 4: Immediate Action Protocol', hi: 'कार्ड 4: तुरंत क्या करें?', mr: 'कार्ड ४: तात्काळ काय करावे?' },
          body: {
            en: 'Cut the video call immediately. Transfer ₹0. Inform a family member right away and report the caller number to National Helpline 1930.',
            hi: 'वीडियो कॉल तुरंत काट दें। ₹0 ट्रांसफर करें। तुरंत परिवार के सदस्यों को बताएं और 1930 राष्ट्रीय हेल्पलाइन पर शिकायत करें।',
            mr: 'व्हिडिओ कॉल तात्काळ कट करा. ₹० पाठवा. लगेच कुटुंबातील सदस्यांना सांगा आणि १९३० हेल्पलाइनवर तक्रार करा.'
          }
        }
      ],
      practice: {
        type: 'safe_action',
        typeLabel: { en: 'Choose the Safe Action', hi: 'सुरक्षित कदम चुनें', mr: 'सुरक्षित कृती निवडा' },
        prompt: {
          en: 'A caller on Skype video in a police uniform shows a fake arrest warrant on WhatsApp and orders you not to disconnect the call while you go to the bank to transfer your Fixed Deposit. What do you do?',
          hi: 'स्काइप वीडियो कॉल पर पुलिस की वर्दी पहने एक व्यक्ति व्हाट्सएप पर नकली वारंट दिखाता है और कहता है कि बिना कॉल काटे बैंक जाकर अपनी FD के पैसे उसके बताए खाते में भेजें। आप क्या करेंगे?',
          mr: 'व्हिडिओ कॉलवर पोलिसांच्या गणवेशातील व्यक्ती व्हॉट्सॲपवर वॉरंट दाखवून सांगते की कॉल कट न करता बँकेत जाऊन FD चे पैसे ट्रान्सफर करा. तुम्ही काय कराल?'
        },
        options: [
          { text: { en: 'Cut the video call immediately, talk to your family/bank manager, and dial 1930', hi: 'तुरंत वीडियो कॉल काट दें, अपने परिवार या बैंक मैनेजर को बताएं और 1930 डायल करें', mr: 'तात्काळ व्हिडिओ कॉल कट करा, कुटुंबाला/बँक मॅनेजरला सांगा आणि १९३० वर कॉल करा' }, correct: true },
          { text: { en: 'Keep the video call on and break your Fixed Deposit silently', hi: 'वीडियो कॉल चालू रखें और चुपचाप अपनी FD तोड़कर पैसे भेज दें', mr: 'व्हिडिओ कॉल चालू ठेवून गुपचूप FD मोडून पैसे पाठवावेत' }, correct: false }
        ],
        explanation: {
          en: 'Cutting the call breaks the scammer\'s psychological control. No law enforcement agency in India operates via WhatsApp/Skype transfers.',
          hi: 'कॉल काटते ही ठग का मनोवैज्ञानिक दबाव टूट जाता है। भारत की कोई भी पुलिस व्हाट्सएप पर पैसे नहीं मांगती।',
          mr: 'कॉल कट करताच भामट्याचे नियंत्रण संपते. भारतातील कोणतीही पोलीस यंत्रणा व्हॉट्सॲपवरून पैसे मागत नाही.'
        }
      },
      quiz: {
        question: {
          en: 'Can genuine Indian Police, CBI, or Judges conduct a "Digital Arrest" over a WhatsApp/Skype video call or ask you to transfer money for verification?',
          hi: 'क्या असली भारतीय पुलिस, CBI या जज व्हाट्सएप/स्काइप वीडियो कॉल पर किसी को "डिजिटल अरेस्ट" कर सकते हैं या जांच के लिए पैसे ट्रांसफर करवा सकते हैं?',
          mr: 'खरे भारतीय पोलीस, CBI किंवा न्यायाधीश व्हॉट्सॲप/स्काइप व्हिडिओ कॉलवर "डिजिटल अरेस्ट" करू शकतात का किंवा तपासणीसाठी पैसे मागू शकतात का?'
        },
        options: [
          { en: 'A. Yes, in special cyber cases', hi: 'A. हां, विशेष मामलों में', mr: 'A. होय, काही विशेष प्रकरणांमध्ये' },
          { en: 'B. NEVER! "Digital Arrest" does not exist in Indian law — it is 100% a cyber scam', hi: 'B. कभी नहीं! भारतीय कानून में "डिजिटल अरेस्ट" जैसी कोई चीज़ नहीं है — यह 100% साइबर ठगी है', mr: 'B. कधीही नाही! भारतीय कायद्यात "डिजिटल अरेस्ट" नावाचा प्रकारच नाही — ही १००% सायबर फसवणूक आहे' },
          { en: 'C. Only if they show an ID card on WhatsApp', hi: 'C. केवल तभी जब वे व्हाट्सएप पर आईडी कार्ड दिखाएं', mr: 'C. फक्त त्यांनी व्हॉट्सॲपवर आयडी कार्ड दाखवल्यास' }
        ],
        correct: 1,
        explanation: {
          en: 'Remember and share with every elder in your family: "Digital Arrest" is 100% fake. Disconnect immediately and dial 1930.',
          hi: 'अपने परिवार के हर बुजुर्ग को यह बात ज़रूर बताएं: "डिजिटल अरेस्ट" 100% नकली है। तुरंत फोन काटें और 1930 डायल करें।',
          mr: 'तुमच्या घरातील प्रत्येक ज्येष्ठ नागरिकाला हे नक्की सांगा: "डिजिटल अरेस्ट" १००% बनावट आहे. तात्काळ फोन कट करा आणि १९३० डायल करा.'
        }
      }
    },
    {
      id: 'unit_10_family',
      number: 10,
      icon: '👨‍👩‍👧',
      color: '#b45309',
      simMissionId: 'social_media_scam',
      voiceTopic: 'Mere bank account se paise kat gaye 1930',
      badgeId: 'cybersathi_champion',
      title: {
        en: 'Family Cyber Safety',
        hi: 'परिवार की साइबर सुरक्षा',
        mr: 'कुटुंबाची सायबर सुरक्षा'
      },
      lessonTitle: {
        en: 'Lesson 10: The 2-Person Family Rule & 1930 Golden Hour',
        hi: 'पाठ 10: परिवार का 2-व्यक्ति नियम और 1930 गोल्डन ऑवर',
        mr: 'धडा १०: कुटुंबाचा २-व्यक्ती नियम आणि १९३० गोल्डन अवर'
      },
      duration: '4 mins',
      cards: [
        {
          title: { en: 'Card 1: The 2-Person Family Verification Rule', hi: 'कार्ड 1: परिवार का 2-व्यक्ति सत्यापन नियम', mr: 'कार्ड १: कुटुंबाचा २-व्यक्ती पडताळणी नियम' },
          body: {
            en: 'Make a family pact today: No family member (especially elders or teens) will ever send money to an unknown caller or install an app without asking at least ONE other family member first.',
            hi: 'आज ही अपने परिवार में एक नियम बनाएं: परिवार का कोई भी सदस्य (विशेषकर बुजुर्ग या बच्चे) किसी अनजान कॉलर के कहने पर बिना किसी दूसरे सदस्य से पूछे पैसे नहीं भेजेगा।',
            mr: 'आजच तुमच्या कुटुंबात एक नियम ठरवा: घरातील कोणतीही व्यक्ती (विशेषतः ज्येष्ठ नागरिक किंवा मुले) दुसऱ्या सदस्याला विचारल्याशिवाय अनोळखी कॉलरला पैसे पाठवणार नाही.'
          }
        },
        {
          title: { en: 'Card 2: What is the "Golden Hour" After a Scam?', hi: 'कार्ड 2: ठगी के बाद "गोल्डन ऑवर" क्या होता है?', mr: 'कार्ड २: फसवणूक झाल्यानंतरचा "गोल्डन अवर" म्हणजे काय?' },
          body: {
            en: 'The first 1 to 2 hours after a financial cyber fraud are critical. Reporting immediately on 1930 allows the National Cybercrime Portal (I4C) to freeze the money in the scammer\'s bank account before they withdraw it!',
            hi: 'वित्तीय साइबर ठगी के बाद के पहले 1 से 2 घंटे "गोल्डन ऑवर" कहलाते हैं। इस दौरान तुरंत 1930 पर कॉल करने से पुलिस और बैंक ठग के खाते में ही आपके पैसे फ्रीज (रोक) सकते हैं!',
            mr: 'आर्थिक फसवणूक झाल्यानंतरचे पहिले १ ते २ तास अत्यंत महत्त्वाचे असतात. या वेळेत तात्काळ १९३० वर कॉल केल्यास बँक आणि पोलीस भामट्याचे खाते गोठवून तुमचे पैसे वाचवू शकतात!'
          }
        },
        {
          title: { en: 'Card 3: Keep Evidence Safe', hi: 'कार्ड 3: सबूत कभी डिलीट न करें', mr: 'कार्ड ३: पुरावे कधीही डिलीट करू नका' },
          body: {
            en: 'If a fraud happens, do NOT delete the chat or SMS! Take screenshots of the UTR/Transaction ID, caller number, and bank statement for cybercrime.gov.in.',
            hi: 'यदि धोखाधड़ी हो जाए, तो घबराकर चैट या SMS डिलीट न करें! ट्रांजैक्शन आईडी (UTR), कॉलर नंबर और बैंक स्टेटमेंट के स्क्रीनशॉट सुरक्षित रखें।',
            mr: 'फसवणूक झाल्यास घाबरून चॅट किंवा मेसेज डिलीट करू नका! ट्रान्झॅक्शन आयडी (UTR), फोन नंबर आणि बँक मेसेजचे स्क्रीनशॉट जपून ठेवा.'
          }
        },
        {
          title: { en: 'Card 4: Save 1930 on Every Family Phone', hi: 'कार्ड 4: हर फोन में 1930 सेव करें', mr: 'कार्ड ४: घरातील प्रत्येक फोनमध्ये १९३० सेव्ह करा' },
          body: {
            en: 'Save "1930 — National Cyber Helpline" on your parents\' and grandparents\' phones today. Remember: STOP — VERIFY — ACT SAFELY.',
            hi: 'आज ही अपने माता-पिता और दादा-दादी के फोन में "1930 — राष्ट्रीय साइबर हेल्पलाइन" नंबर सेव करें। याद रखें: रुकें — जांचें — सुरक्षित रहें।',
            mr: 'आजच तुमच्या आई-वडिलांच्या आणि आजी-आजोबांच्या फोनमध्ये "१९३० — राष्ट्रीय सायबर हेल्पलाइन" नंबर सेव्ह करा. लक्षात ठेवा: थांबा — पडताळणी करा — सुरक्षित राहा.'
          }
        }
      ],
      practice: {
        type: 'arrange_steps',
        typeLabel: { en: 'Emergency Response Steps', hi: 'आपातकालीन सुरक्षा क्रम', mr: 'आपत्कालीन सुरक्षा क्रम' },
        prompt: {
          en: 'If money is accidentally deducted due to a cyber scam, what should you do in the FIRST 15 minutes?',
          hi: 'यदि किसी साइबर ठगी के कारण खाते से पैसे कट जाएं, तो पहले 15 मिनट में क्या करना चाहिए?',
          mr: 'सायबर फसवणुकीमुळे खात्यातून पैसे गेल्यास पहिल्या १५ मिनिटांत काय करावे?'
        },
        options: [
          { text: { en: '1. Call 1930 immediately → 2. Block bank account/UPI → 3. Report on cybercrime.gov.in with UTR screenshot', hi: '1. तुरंत 1930 पर कॉल करें → 2. बैंक/UPI ब्लॉक कराएं → 3. UTR स्क्रीनशॉट के साथ cybercrime.gov.in पर शिकायत करें', mr: '१. तात्काळ १९३० वर कॉल करा → २. बँक खाते/UPI ब्लॉक करा → ३. UTR स्क्रीनशॉटसह cybercrime.gov.in वर तक्रार नोंदवा' }, correct: true },
          { text: { en: '1. Search Google for a "money recovery hacker" → 2. Pay them a recovery fee', hi: '1. गूगल पर "मनी रिकवरी एजेंट" खोजें → 2. उन्हें फीस दें', mr: '१. गूगलवर "पैसे परत मिळवून देणारा एजंट" शोधा → २. त्याला फी द्या' }, correct: false }
        ],
        explanation: {
          en: 'Dialing 1930 and reporting on cybercrime.gov.in within the Golden Hour is the ONLY official way to freeze stolen funds.',
          hi: 'गोल्डन ऑवर में 1930 डायल करना और cybercrime.gov.in पर शिकायत करना ही चोरी हुए पैसों को फ्रीज करने का एकमात्र आधिकारिक तरीका है।',
          mr: 'गोल्डन अवरमध्ये १९३० वर कॉल करणे आणि cybercrime.gov.in वर तक्रार करणे हाच चोरीला गेलेले पैसे गोठवण्याचा एकमेव अधिकृत मार्ग आहे.'
        }
      },
      quiz: {
        question: {
          en: 'What is the official toll-free National Cyber Crime Reporting Helpline number operated by the Ministry of Home Affairs (I4C), Government of India?',
          hi: 'भारत सरकार के गृह मंत्रालय (I4C) द्वारा संचालित आधिकारिक टोल-फ्री राष्ट्रीय साइबर अपराध हेल्पलाइन नंबर क्या है?',
          mr: 'भारत सरकारच्या गृह मंत्रालयाद्वारे (I4C) चालवला जाणारा अधिकृत राष्ट्रीय सायबर गुन्हे हेल्पलाइन क्रमांक कोणता आहे?'
        },
        options: [
          { en: 'A. 1930', hi: 'A. 1930', mr: 'A. 1930' },
          { en: 'B. Any 10-digit mobile number received via SMS', hi: 'B. SMS में आया कोई भी 10-अंकों का मोबाइल नंबर', mr: 'B. मेसेजमध्ये आलेला कोणताही १० अंकी नंबर' },
          { en: 'C. Social media comments section', hi: 'C. सोशल मीडिया का कमेंट सेक्शन', mr: 'C. सोशल मीडिया कमेंट सेक्शन' }
        ],
        correct: 0,
        explanation: {
          en: '1930 is the official 24x7 National Cybercrime Helpline in India, alongside https://cybercrime.gov.in.',
          hi: '1930 भारत का आधिकारिक 24x7 राष्ट्रीय साइबर हेल्पलाइन नंबर है, और आधिकारिक पोर्टल https://cybercrime.gov.in है।',
          mr: '१९३० हा भारताचा अधिकृत २४x७ राष्ट्रीय सायबर हेल्पलाइन क्रमांक आहे आणि https://cybercrime.gov.in हे अधिकृत पोर्टल आहे.'
        }
      }
    }
  ];

  // State Management
  let academyState = {
    primaryLang: 'en',
    supportLang: 'hi', // Default dual-language helper ('none' | 'en' | 'hi' | 'mr')
    xp: 0,
    streakDays: 1,
    lastActiveDate: null,
    completedUnits: {}, // { unit_01_basics: { completed: true, score: 100, xpEarned: 45 } }
    earnedBadges: [],
    unlockAllMode: false,
    activeUnitId: null, // null = Dashboard & Path View; string = Inside Lesson Player
    lessonPhase: 'cards', // 'cards' | 'practice' | 'quiz' | 'summary'
    cardIndex: 0,
    practiceAnswered: false,
    practiceCorrect: false,
    multiSelectState: {},
    quizAnswered: false,
    quizCorrect: false,
    quizSelectedIdx: null
  };

  function getSiteLang() {
    if (typeof window.getLanguage === 'function') {
      const l = window.getLanguage();
      if (l === 'hi' || l === 'mr' || l === 'en') return l;
    }
    const stored = localStorage.getItem('cybersathi_language') || localStorage.getItem('cybersathi_lang') || 'en';
    if (stored.startsWith('hi')) return 'hi';
    if (stored.startsWith('mr')) return 'mr';
    return 'en';
  }

  function loadAcademyState() {
    try {
      const siteLang = getSiteLang();
      academyState.primaryLang = siteLang;
      academyState.supportLang = siteLang === 'en' ? 'hi' : 'en';

      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.xp === 'number') academyState.xp = parsed.xp;
        if (typeof parsed.streakDays === 'number') academyState.streakDays = parsed.streakDays;
        if (parsed.lastActiveDate) academyState.lastActiveDate = parsed.lastActiveDate;
        if (parsed.completedUnits && typeof parsed.completedUnits === 'object') {
          academyState.completedUnits = parsed.completedUnits;
        }
        if (Array.isArray(parsed.earnedBadges)) {
          academyState.earnedBadges = parsed.earnedBadges;
        }
        if (parsed.supportLang !== undefined) {
          academyState.supportLang = parsed.supportLang;
        }
        if (parsed.unlockAllMode !== undefined) {
          academyState.unlockAllMode = Boolean(parsed.unlockAllMode);
        }
      }

      // Update daily streak non-punitively
      const todayIso = new Date().toISOString().slice(0, 10);
      if (!academyState.lastActiveDate) {
        academyState.lastActiveDate = todayIso;
        academyState.streakDays = Math.max(1, academyState.streakDays);
      } else if (academyState.lastActiveDate !== todayIso) {
        const prev = new Date(academyState.lastActiveDate);
        const curr = new Date(todayIso);
        const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          academyState.streakDays += 1;
        } else if (diffDays > 1) {
          // Keep encouraging streak without locking courses
          academyState.streakDays = Math.max(1, academyState.streakDays);
        }
        academyState.lastActiveDate = todayIso;
      }
      saveAcademyState();
    } catch (e) {
      // Ignore storage errors
    }
  }

  function saveAcademyState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        xp: academyState.xp,
        streakDays: academyState.streakDays,
        lastActiveDate: academyState.lastActiveDate,
        completedUnits: academyState.completedUnits,
        earnedBadges: academyState.earnedBadges,
        supportLang: academyState.supportLang,
        unlockAllMode: academyState.unlockAllMode
      }));
    } catch (e) {
      // Ignore storage errors
    }
  }

  function ui(key) {
    const lang = academyState.primaryLang || 'en';
    return (UI_STRINGS[lang] && UI_STRINGS[lang][key]) || UI_STRINGS.en[key] || key;
  }

  // Dual-language formatter: renders Primary language + optional Support language underneath
  function renderDualText(multiObj, primaryClass = '', supportClass = 'academy-support-text') {
    if (!multiObj) return '';
    if (typeof multiObj === 'string') return multiObj;
    const pLang = academyState.primaryLang || 'en';
    const sLang = academyState.supportLang || 'none';
    const primaryText = multiObj[pLang] || multiObj.en || '';
    const supportText = (sLang !== 'none' && sLang !== pLang) ? (multiObj[sLang] || '') : '';

    if (!supportText) {
      return `<span class="${primaryClass}">${primaryText}</span>`;
    }
    return `
      <span class="${primaryClass}" style="display: block;">${primaryText}</span>
      <span class="${supportClass}" style="display: block; font-size: 0.88em; color: var(--cs-muted); font-weight: 500; margin-top: 3px; font-style: italic;">
        🌐 ${supportText}
      </span>
    `;
  }

  function isUnitUnlocked(index) {
    if (academyState.unlockAllMode || index === 0) return true;
    const prevUnit = LEARNING_PATH_UNITS[index - 1];
    return Boolean(prevUnit && academyState.completedUnits[prevUnit.id]);
  }

  function getNextIncompleteUnit() {
    for (let i = 0; i < LEARNING_PATH_UNITS.length; i++) {
      if (!academyState.completedUnits[LEARNING_PATH_UNITS[i].id]) {
        return LEARNING_PATH_UNITS[i];
      }
    }
    return LEARNING_PATH_UNITS[0];
  }

  function getOverallProgressPercent() {
    const completedCount = Object.keys(academyState.completedUnits).length;
    return Math.min(100, Math.round((completedCount / LEARNING_PATH_UNITS.length) * 100));
  }

  function speakLessonText(rawText, forcedLang) {
    if (!('speechSynthesis' in window)) {
      if (window.showToast) window.showToast(ui('audioFallback'), 'warning');
      return;
    }
    window.speechSynthesis.cancel();
    const clean = String(rawText || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!clean) return;

    const utterance = new SpeechSynthesisUtterance(clean);
    const pLang = forcedLang || academyState.primaryLang || 'en';
    const targetLocale = pLang === 'mr' ? 'mr-IN' : pLang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.lang = targetLocale;
    utterance.rate = 0.94;

    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const matchedVoice = voices.find(v => v.lang && v.lang.toLowerCase().includes(pLang));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    } else if (voices.length > 0 && pLang !== 'en') {
      const fallbackBanner = document.getElementById('academyAudioNotice');
      if (fallbackBanner) fallbackBanner.style.display = 'block';
    }

    window.speechSynthesis.speak(utterance);
  }

  function openUnitLesson(unitId) {
    const unit = LEARNING_PATH_UNITS.find(u => u.id === unitId);
    if (!unit) return;
    academyState.activeUnitId = unit.id;
    academyState.lessonPhase = 'cards';
    academyState.cardIndex = 0;
    academyState.practiceAnswered = false;
    academyState.practiceCorrect = false;
    academyState.multiSelectState = {};
    academyState.quizAnswered = false;
    academyState.quizCorrect = false;
    academyState.quizSelectedIdx = null;
    renderAllAcademyMounts();

    const mount = document.querySelector('.cybersathi-academy-mount');
    if (mount) mount.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function awardUnitCompletion(unit) {
    const alreadyDone = Boolean(academyState.completedUnits[unit.id]);
    if (!alreadyDone) {
      // +10 XP Lesson + 5 XP Practice + 10 XP Quiz + 20 XP Unit Bonus = +45 XP
      academyState.xp += 20;
      academyState.completedUnits[unit.id] = {
        completed: true,
        completedAt: new Date().toISOString(),
        xpEarned: 45
      };
    }

    // Unlock unit badge if applicable
    if (unit.badgeId && !academyState.earnedBadges.includes(unit.badgeId)) {
      academyState.earnedBadges.push(unit.badgeId);
    }

    // Check if all 10 units are completed -> +50 XP Pathway Bonus + Champion Badge
    if (Object.keys(academyState.completedUnits).length >= LEARNING_PATH_UNITS.length) {
      if (!academyState.earnedBadges.includes('cybersathi_champion')) {
        academyState.earnedBadges.push('cybersathi_champion');
        academyState.xp += 50;
      }
    }

    saveAcademyState();
  }

  function triggerVoiceSaathiWithTopic(topicQuery) {
    const voiceInput = document.getElementById('voiceTextInput');
    const voiceSubmit = document.getElementById('voiceTextSubmitBtn');
    const voiceSection = document.getElementById('homeVoiceSaathi') || document.getElementById('voiceSaathiSection');

    if (voiceInput && voiceSubmit && voiceSection) {
      voiceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        voiceInput.value = topicQuery;
        voiceSubmit.click();
      }, 350);
    } else {
      window.location.href = `tools.html?voice=${encodeURIComponent(topicQuery)}#voiceSaathiSection`;
    }
  }

  function triggerScamSimulatorMission(missionId) {
    if (window.CyberSathiScamSimulator && typeof window.CyberSathiScamSimulator.openMission === 'function') {
      const simSection = document.getElementById('scamSimulatorHomeSection') || document.getElementById('scamSimulatorSection');
      if (simSection) {
        simSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.CyberSathiScamSimulator.openMission(missionId);
        return;
      }
    }
    window.location.href = `tools.html?mission=${encodeURIComponent(missionId)}#scamSimulatorSection`;
  }

  function openPrintableUnitCertificate(unit) {
    const pLang = academyState.primaryLang || 'en';
    const citizenName = localStorage.getItem('cybersathi_user_name') || 'Dedicated CyberSathi Learner';
    const todayStr = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    const unitName = unit.title[pLang] || unit.title.en;

    const certHtml = `
      <div class="course-modal-wrapper">
        <div class="course-certificate-card">
          <div class="cert-border-inner">
            <div class="cert-header">
              <span style="font-size: 38px; display: block; margin-bottom: 4px;">🛡️</span>
              <span class="cert-brand">CYBERSATHI FREE COMMUNITY ACADEMY</span>
              <small>${ui('freeBadge')}</small>
            </div>
            <div class="cert-title-area">
              <h3>${ui('certTitle')}</h3>
              <p>${ui('certDisclaimer')}</p>
              <div class="cert-recipient-name" contenteditable="true" title="Click to edit your name">
                ${citizenName}
              </div>
              <p>has completed Unit ${unit.number} of the CyberSathi Interactive Pathway:</p>
              <div class="cert-course-name">${unit.icon} ${unitName}</div>
              <span class="cert-badge-tag">⭐ Total XP: ${academyState.xp} • 🔥 Streak: ${academyState.streakDays} Days</span>
            </div>
            <div class="cert-footer">
              <div>
                <strong>Date:</strong>
                <div>${todayStr}</div>
              </div>
              <div class="cert-seal">
                <span>COMPLETED</span>
                <small>CyberSathi</small>
              </div>
              <div>
                <strong>Notice:</strong>
                <div>${ui('certDisclaimer')}</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px;">
          <button type="button" class="btn btn-outline" onclick="window.print()">🖨️ Print</button>
          <button type="button" class="btn btn-blue" onclick="window.closeModal && window.closeModal()">Close</button>
        </div>
      </div>
    `;
    if (typeof window.openModal === 'function') {
      window.openModal(certHtml);
    }
  }

  function renderAcademyIntoMount(mount) {
    const pLang = academyState.primaryLang || 'en';
    const sLang = academyState.supportLang || 'none';
    const progressPct = getOverallProgressPercent();
    const nextUnit = getNextIncompleteUnit();

    // Language & Support Language Controls Bar
    const langControlsHtml = `
      <div class="academy-lang-bar">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span class="academy-free-pill">🎓 ${ui('freeBadge')}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <label style="margin: 0; font-size: 13px; display: flex; align-items: center; gap: 6px;">
            <span>🌐 ${ui('primaryLangLbl')}</span>
            <select class="academy-primary-lang-select" style="width: auto; padding: 6px 10px; font-size: 13px; border-radius: 8px;">
              <option value="en" ${pLang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
              <option value="hi" ${pLang === 'hi' ? 'selected' : ''}>🇮🇳 हिन्दी (Hindi)</option>
              <option value="mr" ${pLang === 'mr' ? 'selected' : ''}>🇮🇳 मराठी (Marathi)</option>
            </select>
          </label>

          <label style="margin: 0; font-size: 13px; display: flex; align-items: center; gap: 6px;">
            <span>🤝 ${ui('supportLangLbl')}</span>
            <select class="academy-support-lang-select" style="width: auto; padding: 6px 10px; font-size: 13px; border-radius: 8px;">
              <option value="none" ${sLang === 'none' ? 'selected' : ''}>${ui('supportNone')}</option>
              <option value="en" ${sLang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
              <option value="hi" ${sLang === 'hi' ? 'selected' : ''}>🇮🇳 हिन्दी (Hindi)</option>
              <option value="mr" ${sLang === 'mr' ? 'selected' : ''}>🇮🇳 मराठी (Marathi)</option>
            </select>
          </label>
        </div>
      </div>
    `;

    // Permanent STOP — VERIFY — ACT Bar
    const svaBannerHtml = `
      <div class="sim-sva-bar" style="margin-bottom: 22px;">
        <div class="sim-sva-step">${ui('svaStop')}</div>
        <div class="sim-sva-step">${ui('svaVerify')}</div>
        <div class="sim-sva-step">${ui('svaAct')}</div>
      </div>
    `;

    // VIEW 1: Dashboard + Visual 10-Unit Learning Path
    if (!academyState.activeUnitId) {
      const unitsSummaryBars = LEARNING_PATH_UNITS.slice(0, 4).map(u => {
        const isDone = Boolean(academyState.completedUnits[u.id]);
        const pct = isDone ? 100 : (u.id === nextUnit.id ? 40 : 0);
        return `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: 13.5px; padding: 6px 0; border-bottom: 1px dashed var(--cs-line);">
            <span style="font-weight: 700; color: var(--cs-ink);">${u.icon} ${u.title[pLang] || u.title.en}</span>
            <span style="font-weight: 800; color: ${isDone ? '#16a34a' : 'var(--cs-deep)'};">
              ${pct}% ${isDone ? '✓' : ''}
            </span>
          </div>
        `;
      }).join('');

      const badgesShelfHtml = ACADEMY_BADGES.map(b => {
        const unlocked = academyState.earnedBadges.includes(b.id);
        return `
          <div class="academy-badge-chip ${unlocked ? 'unlocked' : 'locked'}" title="${b.desc[pLang] || b.desc.en}">
            <span style="font-size: 24px;">${unlocked ? b.icon : '🔒'}</span>
            <div>
              <div style="font-size: 12.5px; font-weight: 800; color: var(--cs-ink);">${b.name[pLang] || b.name.en}</div>
              <div style="font-size: 11px; color: var(--cs-muted);">${b.desc[pLang] || b.desc.en}</div>
            </div>
          </div>
        `;
      }).join('');

      const pathNodesHtml = LEARNING_PATH_UNITS.map((unit, idx) => {
        const isDone = Boolean(academyState.completedUnits[unit.id]);
        const unlocked = isUnitUnlocked(idx);
        const isCurrent = !isDone && unlocked;
        const statusLabel = isDone ? ui('completedStatus') : isCurrent ? ui('continueStatus') : ui('lockedStatus');
        const statusClass = isDone ? 'completed' : isCurrent ? 'current' : 'locked';

        return `
          <div class="academy-path-node-wrap">
            <div class="academy-path-card ${statusClass}" style="border-left: 5px solid ${unit.color};">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap;">
                <div style="display: flex; align-items: flex-start; gap: 14px;">
                  <div class="academy-node-circle" style="background: ${isDone ? '#16a34a' : isCurrent ? unit.color : '#64748b'};">
                    <span>${isDone ? '✓' : unit.icon}</span>
                  </div>
                  <div>
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: ${unit.color};">
                        UNIT ${String(unit.number).padStart(2, '0')} • ⏱️ ${unit.duration}
                      </span>
                      <span class="academy-status-tag ${statusClass}">${statusLabel}</span>
                    </div>
                    <h4 style="font-family: 'Outfit', sans-serif; font-size: 19px; color: var(--cs-ink); margin: 0 0 4px 0;">
                      ${renderDualText(unit.title)}
                    </h4>
                    <div style="font-size: 13.5px; color: var(--cs-muted);">
                      ${renderDualText(unit.lessonTitle)}
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 8px;">
                  <button type="button" class="btn ${isDone ? 'btn-outline' : isCurrent ? 'btn-primary' : 'btn-outline'} academy-open-unit-btn" data-unit-id="${unit.id}" ${!unlocked ? 'disabled' : ''} style="padding: 9px 18px; font-size: 13.5px; font-weight: 700;">
                    ${isDone ? '↻ Review (+XP)' : isCurrent ? '▶ Start Lesson' : '🔒 Locked'}
                  </button>
                </div>
              </div>
            </div>
            ${idx < LEARNING_PATH_UNITS.length - 1 ? `<div class="academy-path-connector ${isDone ? 'done' : ''}">↓</div>` : ''}
          </div>
        `;
      }).join('');

      mount.innerHTML = `
        <div class="academy-shell">
          ${langControlsHtml}
          ${svaBannerHtml}

          <!-- Learner Progress Dashboard -->
          <div class="academy-dashboard-grid">
            <div class="academy-journey-card">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
                <div>
                  <span style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--cs-deep); letter-spacing: 0.06em;">
                    🎯 INTERACTIVE LEARNING PATHWAY
                  </span>
                  <h3 style="font-family: 'Outfit', sans-serif; font-size: 24px; color: var(--cs-ink); margin: 4px 0 0 0;">
                    ${ui('welcomeBack')}
                  </h3>
                </div>

                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <div class="academy-stat-pill streak">
                    <span>🔥 <strong>${academyState.streakDays}</strong> ${ui('streakLbl')}</span>
                  </div>
                  <div class="academy-stat-pill xp">
                    <span>⭐ <strong>${academyState.xp} XP</strong></span>
                  </div>
                </div>
              </div>

              <!-- Progress Bar -->
              <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; margin-bottom: 6px; color: var(--cs-ink);">
                  <span>Pathway Completion (${Object.keys(academyState.completedUnits).length}/${LEARNING_PATH_UNITS.length} Units)</span>
                  <span style="color: var(--cs-deep);">${progressPct}%</span>
                </div>
                <div class="course-progress-track" style="height: 12px; margin-bottom: 0;">
                  <div class="course-progress-fill" style="width: ${Math.max(5, progressPct)}%;"></div>
                </div>
              </div>

              <!-- Quick Unit Progress Snapshot -->
              <div style="margin-bottom: 18px;">
                ${unitsSummaryBars}
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <button type="button" class="btn btn-amber academy-continue-next-btn" style="padding: 12px 24px; font-size: 15px; font-weight: 800;">
                  ${ui('continueBtn')} (${nextUnit.icon} ${nextUnit.title[pLang] || nextUnit.title.en})
                </button>
                <button type="button" class="btn btn-outline academy-toggle-unlock-btn" style="padding: 8px 14px; font-size: 12.5px;">
                  ${academyState.unlockAllMode ? ui('lockProgToggle') : ui('unlockAllToggle')}
                </button>
              </div>
            </div>

            <!-- Badges Shelf -->
            <div class="academy-badges-card">
              <h4 style="font-family: 'Outfit', sans-serif; font-size: 18px; color: var(--cs-deep); margin: 0 0 12px 0;">
                ${ui('badgesHeading')} (${academyState.earnedBadges.length}/${ACADEMY_BADGES.length})
              </h4>
              <div class="academy-badges-grid">
                ${badgesShelfHtml}
              </div>
            </div>
          </div>

          <!-- Visual 10-Unit Course Map -->
          <div style="margin-top: 28px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; color: var(--cs-deep); margin: 0 0 6px 0;">
                🗺️ Step-by-Step Cyber Defense Map
              </h3>
              <p style="font-size: 14px; color: var(--cs-muted); margin: 0;">
                Complete short 3-minute lessons, earn XP, unlock CyberSathi badges, and test your skills in the Scam Simulator.
              </p>
            </div>

            <div class="academy-path-container">
              ${pathNodesHtml}
            </div>
          </div>
        </div>
      `;

      bindAcademyEvents(mount);
      return;
    }

    // VIEW 2: Inside an Active Unit Lesson Player (CARDS -> PRACTICE -> QUIZ -> SUMMARY)
    const unit = LEARNING_PATH_UNITS.find(u => u.id === academyState.activeUnitId) || LEARNING_PATH_UNITS[0];
    const phase = academyState.lessonPhase;

    // Stepper Progress Header
    const stepperHtml = `
      <div class="academy-lesson-header">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
          <button type="button" class="btn btn-outline academy-back-path-btn" style="padding: 7px 14px; font-size: 13px;">
            ${ui('backToPathBtn')}
          </button>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span class="academy-stat-pill streak">🔥 ${academyState.streakDays}</span>
            <span class="academy-stat-pill xp">⭐ ${academyState.xp} XP</span>
          </div>
        </div>

        <div class="academy-phase-tabs">
          <div class="academy-phase-tab ${phase === 'cards' ? 'active' : 'done'}">1. ${ui('stepCards')}</div>
          <div class="academy-phase-tab ${phase === 'practice' ? 'active' : (phase === 'quiz' || phase === 'summary' ? 'done' : '')}">2. ${ui('stepPractice')}</div>
          <div class="academy-phase-tab ${phase === 'quiz' ? 'active' : (phase === 'summary' ? 'done' : '')}">3. ${ui('stepQuiz')}</div>
          <div class="academy-phase-tab ${phase === 'summary' ? 'active' : ''}">4. ${ui('stepSummary')}</div>
        </div>
      </div>
    `;

    let bodyHtml = '';

    if (phase === 'cards') {
      const card = unit.cards[academyState.cardIndex] || unit.cards[0];
      const totalCards = unit.cards.length;
      const speechEn = `${card.title.en}. ${card.body.en}`;
      const speechHi = `${card.title.hi}. ${card.body.hi}`;
      const speechMr = `${card.title.mr}. ${card.body.mr}`;

      bodyHtml = `
        <div class="academy-card-stage">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
            <div>
              <span style="font-size: 12px; font-weight: 800; color: ${unit.color}; text-transform: uppercase;">
                ${unit.icon} UNIT ${unit.number}: ${unit.title[pLang] || unit.title.en} • CARD ${academyState.cardIndex + 1} OF ${totalCards}
              </span>
              <h3 style="font-family: 'Outfit', sans-serif; font-size: 23px; color: var(--cs-ink); margin: 4px 0 0 0;">
                ${renderDualText(card.title)}
              </h3>
            </div>

            <div style="display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
              <span style="font-size: 12px; font-weight: 800; color: var(--cs-deep);">🎧 AUDIO LANGUAGE:</span>
              <button type="button" class="btn ${pLang === 'en' ? 'btn-primary' : 'btn-outline'} academy-listen-btn" data-speech-lang="en" data-speech="${encodeURIComponent(speechEn)}" style="padding: 6px 12px; font-size: 12.5px;">
                🇬🇧 English ▶ Listen
              </button>
              <button type="button" class="btn ${pLang === 'hi' ? 'btn-primary' : 'btn-outline'} academy-listen-btn" data-speech-lang="hi" data-speech="${encodeURIComponent(speechHi)}" style="padding: 6px 12px; font-size: 12.5px;">
                🇮🇳 हिंदी ▶ सुनें
              </button>
              <button type="button" class="btn ${pLang === 'mr' ? 'btn-primary' : 'btn-outline'} academy-listen-btn" data-speech-lang="mr" data-speech="${encodeURIComponent(speechMr)}" style="padding: 6px 12px; font-size: 12.5px;">
                🇮🇳 मराठी ▶ ऐका
              </button>
              <button type="button" class="btn btn-outline academy-stop-audio-btn" style="padding: 6px 10px; font-size: 12px;">
                ⏹
              </button>
            </div>
          </div>

          <div id="academyAudioNotice" style="display: none; background: #fffbeb; border: 1px solid #fde68a; color: #92400e; padding: 8px 12px; border-radius: 8px; font-size: 12.5px; margin-bottom: 12px;">
            ${ui('audioFallback')}
          </div>

          <div class="academy-learning-card-box" style="border-left: 5px solid ${unit.color};">
            <div style="font-size: 17px; line-height: 1.7; color: var(--cs-ink); font-weight: 600;">
              ${renderDualText(card.body)}
            </div>
          </div>

          <!-- Card Dots -->
          <div style="display: flex; justify-content: center; gap: 8px; margin: 18px 0;">
            ${unit.cards.map((_, i) => `
              <span style="width: ${i === academyState.cardIndex ? '28px' : '10px'}; height: 10px; border-radius: 999px; background: ${i === academyState.cardIndex ? unit.color : 'var(--cs-line-strong)'}; transition: all 0.2s;"></span>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 20px;">
            <button type="button" class="btn btn-outline academy-prev-card-btn" ${academyState.cardIndex === 0 ? 'disabled' : ''}>
              ${ui('prevCardBtn')}
            </button>

            ${academyState.cardIndex < totalCards - 1 ? `
              <button type="button" class="btn btn-primary academy-next-card-btn">
                ${ui('nextCardBtn')}
              </button>
            ` : `
              <button type="button" class="btn btn-amber academy-go-practice-btn" style="font-weight: 800;">
                ${ui('startPracticeBtn')}
              </button>
            `}
          </div>
        </div>
      `;
    } else if (phase === 'practice') {
      const prac = unit.practice;
      const speechString = prac.prompt[pLang] || prac.prompt.en;

      let activityInputHtml = '';
      if (prac.type === 'multi_select') {
        activityInputHtml = `
          <div style="display: grid; gap: 10px; margin-bottom: 16px;">
            ${prac.items.map(item => `
              <label style="display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border: 1.5px solid var(--cs-line-strong); border-radius: 12px; cursor: pointer; background: var(--cs-card-bg);">
                <input type="checkbox" class="academy-multi-chk" data-item-id="${item.id}" ${academyState.multiSelectState[item.id] ? 'checked' : ''} style="width: 18px; height: 18px; margin-top: 3px;" />
                <div style="font-size: 15px; font-weight: 600; color: var(--cs-ink);">
                  ${renderDualText(item.text)}
                </div>
              </label>
            `).join('')}
          </div>
          ${!academyState.practiceAnswered ? `
            <button type="button" class="btn btn-primary academy-check-multi-btn" style="font-weight: 800;">
              ${ui('checkAnswerBtn')}
            </button>
          ` : ''}
        `;
      } else {
        activityInputHtml = `
          <div style="display: grid; gap: 12px;">
            ${prac.options.map((opt, idx) => `
              <button type="button" class="sim-option-btn academy-practice-opt-btn" data-opt-idx="${idx}" ${academyState.practiceAnswered ? 'disabled' : ''}>
                <span style="background: color-mix(in srgb, var(--cs-deep) 14%, transparent); color: var(--cs-deep); width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">
                  ${idx + 1}
                </span>
                <div style="flex: 1;">
                  ${renderDualText(opt.text)}
                </div>
              </button>
            `).join('')}
          </div>
        `;
      }

      bodyHtml = `
        <div class="academy-card-stage">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
            <div>
              <span class="badge-category" style="background: #fef3c7; color: #b45309; margin-bottom: 6px;">
                🎯 ${prac.typeLabel[pLang] || prac.typeLabel.en}
              </span>
              <h3 style="font-family: 'Outfit', sans-serif; font-size: 21px; color: var(--cs-ink); margin: 4px 0 0 0;">
                ${renderDualText(prac.prompt)}
              </h3>
            </div>
            <button type="button" class="btn btn-blue academy-listen-btn" data-speech="${encodeURIComponent(speechString)}" style="padding: 8px 16px; font-size: 13px;">
              ${ui('listenBtn')}
            </button>
          </div>

          ${activityInputHtml}

          ${academyState.practiceAnswered ? `
            <div class="sim-feedback-card ${academyState.practiceCorrect ? 'safe' : 'unsafe'}" style="margin-top: 16px;">
              <h4 style="font-size: 18px; color: ${academyState.practiceCorrect ? '#16a34a' : '#dc2626'}; margin: 0 0 8px 0;">
                ${academyState.practiceCorrect ? `${ui('correctTitle')} (+5 XP)` : ui('incorrectTitle')}
              </h4>
              <div style="font-size: 14.5px; color: var(--cs-ink); line-height: 1.6; margin-bottom: 14px;">
                <strong>${ui('whyHeading')}</strong>
                ${renderDualText(prac.explanation)}
              </div>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${!academyState.practiceCorrect ? `
                  <button type="button" class="btn btn-outline academy-retry-practice-btn">🔁 Try Again</button>
                ` : ''}
                <button type="button" class="btn btn-primary academy-go-quiz-btn" style="font-weight: 800;">
                  ${ui('startQuizBtn')}
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    } else if (phase === 'quiz') {
      const qz = unit.quiz;
      const speechString = qz.question[pLang] || qz.question.en;

      bodyHtml = `
        <div class="academy-card-stage">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
            <div>
              <span class="badge-category" style="background: #e0f2fe; color: #0284c7; margin-bottom: 6px;">
                🧠 UNIT ${unit.number} FINAL SCENARIO QUIZ (+10 XP)
              </span>
              <h3 style="font-family: 'Outfit', sans-serif; font-size: 21px; color: var(--cs-ink); margin: 4px 0 0 0;">
                ${renderDualText(qz.question)}
              </h3>
            </div>
            <button type="button" class="btn btn-blue academy-listen-btn" data-speech="${encodeURIComponent(speechString)}" style="padding: 8px 16px; font-size: 13px;">
              ${ui('listenBtn')}
            </button>
          </div>

          <div style="display: grid; gap: 12px;">
            ${qz.options.map((opt, idx) => `
              <button type="button" class="sim-option-btn academy-quiz-opt-btn" data-quiz-idx="${idx}" ${academyState.quizAnswered ? 'disabled' : ''}>
                <div style="flex: 1;">
                  ${renderDualText(opt)}
                </div>
              </button>
            `).join('')}
          </div>

          ${academyState.quizAnswered ? `
            <div class="sim-feedback-card ${academyState.quizCorrect ? 'safe' : 'unsafe'}" style="margin-top: 16px;">
              <h4 style="font-size: 18px; color: ${academyState.quizCorrect ? '#16a34a' : '#dc2626'}; margin: 0 0 8px 0;">
                ${academyState.quizCorrect ? `${ui('correctTitle')} (+10 XP)` : ui('incorrectTitle')}
              </h4>
              <div style="font-size: 14.5px; color: var(--cs-ink); line-height: 1.6; margin-bottom: 14px;">
                <strong>${ui('whyHeading')}</strong>
                ${renderDualText(qz.explanation)}
              </div>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${!academyState.quizCorrect ? `
                  <button type="button" class="btn btn-outline academy-retry-quiz-btn">🔁 Try Quiz Again</button>
                ` : `
                  <button type="button" class="btn btn-amber academy-finish-unit-btn" style="font-weight: 800;">
                    🎉 Complete Unit & Claim XP →
                  </button>
                `}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    } else if (phase === 'summary') {
      const badgeObj = ACADEMY_BADGES.find(b => b.id === unit.badgeId);
      const nextUnitIdx = LEARNING_PATH_UNITS.findIndex(u => u.id === unit.id) + 1;
      const nextUnitObj = LEARNING_PATH_UNITS[nextUnitIdx] || null;

      bodyHtml = `
        <div class="academy-card-stage" style="text-align: center;">
          <div style="font-size: 46px; margin-bottom: 8px;">🎉</div>
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 26px; color: #16a34a; margin: 0 0 6px 0;">
            ${ui('courseCompleteTitle')}
          </h3>
          <div style="font-size: 18px; font-weight: 700; color: var(--cs-ink); margin-bottom: 18px;">
            ${unit.icon} Unit ${unit.number}: ${renderDualText(unit.title)}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; margin-bottom: 24px;">
            <div style="background: rgba(22, 163, 74, 0.08); border: 1px solid rgba(22, 163, 74, 0.3); border-radius: 14px; padding: 14px;">
              <div style="font-size: 24px; font-weight: 800; color: #16a34a;">100%</div>
              <div style="font-size: 12.5px; color: var(--cs-muted); font-weight: 700;">Unit Mastery</div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 14px; padding: 14px;">
              <div style="font-size: 24px; font-weight: 800; color: #d97706;">+45 XP</div>
              <div style="font-size: 12.5px; color: var(--cs-muted); font-weight: 700;">${ui('xpEarnedLbl')} (Total: ${academyState.xp} XP)</div>
            </div>
            <div style="background: rgba(8, 107, 139, 0.08); border: 1px solid rgba(8, 107, 139, 0.3); border-radius: 14px; padding: 14px;">
              <div style="font-size: 20px; font-weight: 800; color: var(--cs-deep);">
                ${badgeObj ? `${badgeObj.icon} ${badgeObj.name[pLang] || badgeObj.name.en}` : '⭐ Unit Star'}
              </div>
              <div style="font-size: 12.5px; color: var(--cs-muted); font-weight: 700;">${ui('badgeEarnedLbl')}</div>
            </div>
          </div>

          <!-- Action Buttons: Continue Learning, Next Course, Ask Voice Saathi, Try Scam Simulator -->
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 16px;">
            ${nextUnitObj ? `
              <button type="button" class="btn btn-amber academy-next-unit-btn" data-next-unit="${nextUnitObj.id}" style="padding: 12px 22px; font-weight: 800;">
                ${ui('nextCourseBtn')} (${nextUnitObj.icon} ${nextUnitObj.title[pLang] || nextUnitObj.title.en})
              </button>
            ` : ''}
            <button type="button" class="btn btn-primary academy-back-path-btn">
              ${ui('backToPathBtn')}
            </button>
            <button type="button" class="btn btn-blue academy-try-sim-btn" data-sim-mission="${unit.simMissionId}">
              ${ui('tryScamSimBtn')}
            </button>
            <button type="button" class="btn btn-outline academy-ask-voice-btn" data-voice-query="${unit.voiceTopic}">
              ${ui('askVoiceSaathiBtn')}
            </button>
            <button type="button" class="btn btn-outline academy-print-cert-btn">
              ${ui('printCertBtn')}
            </button>
          </div>
        </div>
      `;
    }

    mount.innerHTML = `
      <div class="academy-shell">
        ${langControlsHtml}
        ${svaBannerHtml}
        ${stepperHtml}
        ${bodyHtml}
      </div>
    `;

    bindAcademyEvents(mount, unit);
  }

  function bindAcademyEvents(mount, activeUnit) {
    // Primary Language Selector
    const pSelect = mount.querySelector('.academy-primary-lang-select');
    if (pSelect) {
      pSelect.addEventListener('change', (e) => {
        const newLang = e.target.value;
        academyState.primaryLang = newLang;
        if (typeof window.setLanguage === 'function') {
          window.setLanguage(newLang);
        } else {
          renderAllAcademyMounts();
        }
      });
    }

    // Support Language Selector
    const sSelect = mount.querySelector('.academy-support-lang-select');
    if (sSelect) {
      sSelect.addEventListener('change', (e) => {
        academyState.supportLang = e.target.value;
        saveAcademyState();
        renderAllAcademyMounts();
      });
    }

    // Continue Next Incomplete Unit Button
    const continueBtn = mount.querySelector('.academy-continue-next-btn');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        const nextU = getNextIncompleteUnit();
        openUnitLesson(nextU.id);
      });
    }

    // Toggle Unlock All Mode
    const unlockToggleBtn = mount.querySelector('.academy-toggle-unlock-btn');
    if (unlockToggleBtn) {
      unlockToggleBtn.addEventListener('click', () => {
        academyState.unlockAllMode = !academyState.unlockAllMode;
        saveAcademyState();
        renderAllAcademyMounts();
      });
    }

    // Open Specific Unit Buttons
    mount.querySelectorAll('.academy-open-unit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uId = btn.getAttribute('data-unit-id');
        if (uId) openUnitLesson(uId);
      });
    });

    // Back to Learning Path Button
    mount.querySelectorAll('.academy-back-path-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        academyState.activeUnitId = null;
        renderAllAcademyMounts();
      });
    });

    // Audio Listen Buttons (EN / HI / MR)
    mount.querySelectorAll('.academy-listen-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const encoded = btn.getAttribute('data-speech') || '';
        const speechLang = btn.getAttribute('data-speech-lang') || academyState.primaryLang || 'en';
        if (speechLang === 'en' || speechLang === 'hi' || speechLang === 'mr') {
          academyState.primaryLang = speechLang;
          localStorage.setItem('cybersathi_course_audio_lang', speechLang);
        }
        renderAllAcademyMounts();
        speakLessonText(decodeURIComponent(encoded), speechLang);
      });
    });

    mount.querySelectorAll('.academy-stop-audio-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      });
    });

    // Card Navigation
    const prevCardBtn = mount.querySelector('.academy-prev-card-btn');
    if (prevCardBtn) {
      prevCardBtn.addEventListener('click', () => {
        if (academyState.cardIndex > 0) {
          academyState.cardIndex -= 1;
          renderAllAcademyMounts();
        }
      });
    }

    const nextCardBtn = mount.querySelector('.academy-next-card-btn');
    if (nextCardBtn && activeUnit) {
      nextCardBtn.addEventListener('click', () => {
        if (academyState.cardIndex < activeUnit.cards.length - 1) {
          academyState.cardIndex += 1;
          renderAllAcademyMounts();
        }
      });
    }

    const goPracticeBtn = mount.querySelector('.academy-go-practice-btn');
    if (goPracticeBtn) {
      goPracticeBtn.addEventListener('click', () => {
        academyState.xp += 10; // +10 XP for completing lesson cards
        saveAcademyState();
        academyState.lessonPhase = 'practice';
        renderAllAcademyMounts();
      });
    }

    // Practice Options (Single choice / Safe action / True-False / Match / Arrange)
    mount.querySelectorAll('.academy-practice-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!activeUnit) return;
        const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const opt = activeUnit.practice.options[idx];
        if (!opt) return;

        academyState.practiceAnswered = true;
        academyState.practiceCorrect = Boolean(opt.correct);
        if (opt.correct) {
          academyState.xp += 5; // +5 XP for Practice
          saveAcademyState();
        }
        renderAllAcademyMounts();
      });
    });

    // Multi-Select Checkboxes in Practice
    mount.querySelectorAll('.academy-multi-chk').forEach(chk => {
      chk.addEventListener('change', () => {
        const id = chk.getAttribute('data-item-id');
        academyState.multiSelectState[id] = chk.checked;
      });
    });

    const checkMultiBtn = mount.querySelector('.academy-check-multi-btn');
    if (checkMultiBtn && activeUnit && activeUnit.practice.items) {
      checkMultiBtn.addEventListener('click', () => {
        const allRight = activeUnit.practice.items.every(item => {
          return Boolean(academyState.multiSelectState[item.id]) === Boolean(item.shouldSelect);
        });
        academyState.practiceAnswered = true;
        academyState.practiceCorrect = allRight;
        if (allRight) {
          academyState.xp += 5;
          saveAcademyState();
        }
        renderAllAcademyMounts();
      });
    }

    const retryPracticeBtn = mount.querySelector('.academy-retry-practice-btn');
    if (retryPracticeBtn) {
      retryPracticeBtn.addEventListener('click', () => {
        academyState.practiceAnswered = false;
        academyState.practiceCorrect = false;
        renderAllAcademyMounts();
      });
    }

    const goQuizBtn = mount.querySelector('.academy-go-quiz-btn');
    if (goQuizBtn) {
      goQuizBtn.addEventListener('click', () => {
        academyState.lessonPhase = 'quiz';
        renderAllAcademyMounts();
      });
    }

    // Quiz Options
    mount.querySelectorAll('.academy-quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!activeUnit) return;
        const idx = parseInt(btn.getAttribute('data-quiz-idx'), 10);
        academyState.quizSelectedIdx = idx;
        academyState.quizAnswered = true;
        academyState.quizCorrect = (idx === activeUnit.quiz.correct);
        if (academyState.quizCorrect) {
          academyState.xp += 10; // +10 XP for Quiz
          saveAcademyState();
        }
        renderAllAcademyMounts();
      });
    });

    const retryQuizBtn = mount.querySelector('.academy-retry-quiz-btn');
    if (retryQuizBtn) {
      retryQuizBtn.addEventListener('click', () => {
        academyState.quizAnswered = false;
        academyState.quizCorrect = false;
        renderAllAcademyMounts();
      });
    }

    const finishUnitBtn = mount.querySelector('.academy-finish-unit-btn');
    if (finishUnitBtn && activeUnit) {
      finishUnitBtn.addEventListener('click', () => {
        awardUnitCompletion(activeUnit);
        academyState.lessonPhase = 'summary';
        renderAllAcademyMounts();
      });
    }

    // Summary Action Buttons
    const nextUnitBtn = mount.querySelector('.academy-next-unit-btn');
    if (nextUnitBtn) {
      nextUnitBtn.addEventListener('click', () => {
        const nextId = nextUnitBtn.getAttribute('data-next-unit');
        if (nextId) openUnitLesson(nextId);
      });
    }

    const trySimBtn = mount.querySelector('.academy-try-sim-btn');
    if (trySimBtn) {
      trySimBtn.addEventListener('click', () => {
        const mId = trySimBtn.getAttribute('data-sim-mission') || 'fake_kyc';
        triggerScamSimulatorMission(mId);
      });
    }

    const askVoiceBtn = mount.querySelector('.academy-ask-voice-btn');
    if (askVoiceBtn) {
      askVoiceBtn.addEventListener('click', () => {
        const q = askVoiceBtn.getAttribute('data-voice-query') || 'Bank asking for OTP';
        triggerVoiceSaathiWithTopic(q);
      });
    }

    const printCertBtn = mount.querySelector('.academy-print-cert-btn');
    if (printCertBtn && activeUnit) {
      printCertBtn.addEventListener('click', () => {
        openPrintableUnitCertificate(activeUnit);
      });
    }
  }

  function renderAllAcademyMounts() {
    document.querySelectorAll('.cybersathi-academy-mount').forEach(mount => {
      renderAcademyIntoMount(mount);
    });
  }

  function initCyberAcademy() {
    loadAcademyState();
    renderAllAcademyMounts();

    // Listen to site language changes without resetting progress
    document.addEventListener('cybersathi-lang-change', (e) => {
      const newLang = (e && e.detail && e.detail.lang) ? e.detail.lang : getSiteLang();
      if (newLang === 'en' || newLang === 'hi' || newLang === 'mr') {
        academyState.primaryLang = newLang;
        renderAllAcademyMounts();
      }
    });
  }

  if (typeof window !== 'undefined') {
    window.CyberSathiAcademy = {
      init: initCyberAcademy,
      openUnit: openUnitLesson
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCyberAcademy);
  } else {
    initCyberAcademy();
  }
})();
