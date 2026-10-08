// CyberSathi Interactive Scam Simulator — "Can You Outsmart a Scammer?"
// Educational, Decision-Driven Cyber Defense Simulator with Attacker Adaptation
// Supports English (en), Hindi (hi), and Marathi (mr)

(function () {
  'use strict';

  const STORAGE_KEY = 'cybersathi_scam_sim_progress_v1';

  function getLang() {
    if (typeof window.getLanguage === 'function') {
      const l = window.getLanguage();
      if (l === 'hi' || l === 'mr' || l === 'en') return l;
    }
    return localStorage.getItem('cybersathi_language') || 'en';
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.completedMissions)) {
          return parsed;
        }
      }
    } catch (e) {
      // Ignore storage errors
    }
    return {
      unlockedUpTo: 1,
      unlockAll: false,
      completedMissions: []
    };
  }

  function saveProgress(prog) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
    } catch (e) {
      // Ignore storage errors
    }
  }

  const UI_STRINGS = {
    en: {
      badge: '🕵️ SCAM SIMULATOR',
      heading: 'Can You Outsmart a Scammer?',
      subheading: 'Experience realistic scam situations, make your own decisions, and learn how attackers manipulate people.',
      startSimBtn: '🎯 Start Simulation',
      introTitle: '🛡️ CYBERSATHI SCAM SIMULATOR',
      introSubtitle: "You're about to experience realistic cyber-safety situations.",
      introRulesHeading: 'Simulation Safety Rules:',
      introRules: [
        'There are no real transactions.',
        'Never enter real passwords, OTPs, PINs, card numbers or financial information.',
        'The simulation is completely educational.',
        'Your choices determine what happens next.'
      ],
      startMissionBtn: '▶ START MISSION',
      missionProgress: 'MISSION',
      selectMissionLabel: 'Select Mission (Progressive Unlock):',
      unlockAllToggle: '🔓 Unlock All 8 Missions for Practice',
      lockedLabel: '🔒 Complete previous mission to unlock',
      completedLabel: '✅ Completed',
      stopTitle: '🛑 STOP',
      stopDesc: "Don't act under pressure.",
      verifyTitle: '🔍 VERIFY',
      verifyDesc: 'Check independently using official sources.',
      actTitle: '🛡️ ACT SAFELY',
      actDesc: 'Never share OTPs, PINs, passwords or financial credentials.',
      privacyWarning: '⚠️ SIMULATION ONLY: Never enter your real financial or authentication information (OTP: 123456 — FAKE EXAMPLE).',
      emergencyBanner: '🚨 If you have actually lost money to cyber fraud: Call 1930 immediately or use the official portal https://cybercrime.gov.in. (This educational simulator does not file a police complaint.)',
      whatDoYouDo: 'What do you do?',
      continueMissionBtn: '➡️ Continue Mission',
      continueBtn: '➡️ Continue',
      warningHeader: '🚨 WARNING — RISKY DECISION!',
      stopHeader: '⚠️ STOP!',
      whatYouMissed: '🔍 WHAT YOU MISSED:',
      goodDecisionHeader: '🛡️ GOOD DECISION!',
      whySafer: 'Why this was safer:',
      warningSignDetected: '✅ Warning sign detected:',
      safeActionLabel: '✅ Safe action:',
      attackerAdaptedBadge: '🚨 ATTACK TECHNIQUE DETECTED — SCAMMER CHANGED TACTICS!',
      attackerAdaptedNote: 'Attackers repeatedly change their approach when their first tactic fails.',
      psychologyHeader: '🧠 ATTACKER TECHNIQUE',
      multiSelectPrompt: 'Which warning signs do you notice? (Select all that apply)',
      submitMultiSelectBtn: '🔍 Verify Selected Warning Signs',
      multiSelectHint: 'Please select at least one warning sign before continuing.',
      reportHeader: '🛡️ YOUR CYBER DEFENSE REPORT',
      reportDisclaimer: 'Educational simulation result — not a professional security assessment.',
      reportMission: 'Mission:',
      reportDecisions: 'Decisions:',
      reportSafe: 'Safe decisions:',
      reportRisky: 'Risky decisions:',
      reportWarnings: 'Warning signs detected:',
      reportTechniques: 'Attacker techniques recognized:',
      strongAtHeader: '💪 YOU WERE STRONG AT',
      practiceMoreHeader: '⚠️ PRACTICE MORE',
      missionCompleteHeader: '🎉 MISSION COMPLETE',
      missionCompleteQuote: 'Real scammers may use many different techniques. The safest habit is to STOP, VERIFY and THINK before acting.',
      tryAgainBtn: '🔁 Try Again',
      nextMissionBtn: '🎯 Next Mission',
      learnMoreBtn: '📚 Learn More',
      askVoiceSaathiBtn: '🎙️ Ask Voice Saathi',
      voiceSaathiPromptTitle: '🎙️ Want to ask Voice Saathi?',
      voiceSaathiPromptDesc: 'Tell Voice Saathi what happened or ask how to stay protected against this scam in English, Hindi, or Marathi.'
    },
    hi: {
      badge: '🕵️ स्कैम सिम्युलेटर (SCAM SIMULATOR)',
      heading: 'क्या आप एक स्कैमर को मात दे सकते हैं?',
      subheading: 'वास्तविक साइबर ठगी की स्थितियों का अनुभव करें, अपने निर्णय स्वयं लें, और सीखें कि ठग लोगों को मनोवैज्ञानिक रूप से कैसे फंसाते हैं।',
      startSimBtn: '🎯 सिम्युलेशन शुरू करें (Start Simulation)',
      introTitle: '🛡️ साइबरसाथी स्कैम सिम्युलेटर',
      introSubtitle: 'आप वास्तविक साइबर-सुरक्षा स्थितियों का अनुभव करने जा रहे हैं।',
      introRulesHeading: 'सिम्युलेशन सुरक्षा नियम:',
      introRules: [
        'यहाँ कोई वास्तविक वित्तीय लेन-देन नहीं होता है।',
        'कभी भी अपना असली पासवर्ड, OTP, PIN, कार्ड नंबर या बैंक जानकारी दर्ज न करें।',
        'यह सिम्युलेशन पूरी तरह से शैक्षणिक (Educational) है।',
        'आपके फैसलों से तय होगा कि आगे क्या होगा।'
      ],
      startMissionBtn: '▶ मिशन शुरू करें (START MISSION)',
      missionProgress: 'मिशन',
      selectMissionLabel: 'मिशन चुनें (क्रमबद्ध अनलॉक):',
      unlockAllToggle: '🔓 अभ्यास के लिए सभी 8 मिशन अनलॉक करें',
      lockedLabel: '🔒 अनलॉक करने के लिए पिछला मिशन पूरा करें',
      completedLabel: '✅ पूर्ण',
      stopTitle: '🛑 रुकें (STOP)',
      stopDesc: 'दबाव या डर में आकर तुरंत कोई कदम न उठाएं।',
      verifyTitle: '🔍 जांचें (VERIFY)',
      verifyDesc: 'आधिकारिक स्रोतों से स्वतंत्र रूप से पुष्टि करें।',
      actTitle: '🛡️ सुरक्षित रहें (ACT SAFELY)',
      actDesc: 'कभी भी अपना OTP, PIN, पासवर्ड या बैंक विवरण साझा न करें।',
      privacyWarning: '⚠️ केवल सिम्युलेशन: कभी भी अपनी असली वित्तीय या पहचान जानकारी दर्ज न करें (उदा. OTP: 123456 — नकली उदाहरण)।',
      emergencyBanner: '🚨 यदि आपने वास्तव में साइबर धोखाधड़ी में पैसे गंवाए हैं: तुरंत 1930 पर कॉल करें या आधिकारिक पोर्टल https://cybercrime.gov.in का उपयोग करें। (यह सिम्युलेटर पुलिस शिकायत दर्ज नहीं करता है।)',
      whatDoYouDo: 'आप क्या करेंगे?',
      continueMissionBtn: '➡️ मिशन जारी रखें (Continue Mission)',
      continueBtn: '➡️ आगे बढ़ें (Continue)',
      warningHeader: '🚨 चेतावनी — जोखिम भरा निर्णय!',
      stopHeader: '⚠️ रुकिए (STOP)!',
      whatYouMissed: '🔍 आपने क्या अनदेखा किया:',
      goodDecisionHeader: '🛡️ सही और सुरक्षित निर्णय (GOOD DECISION)!',
      whySafer: 'यह निर्णय सुरक्षित क्यों था:',
      warningSignDetected: '✅ पहचाना गया खतरे का संकेत:',
      safeActionLabel: '✅ सुरक्षित कदम:',
      attackerAdaptedBadge: '🚨 अटैक तकनीक पहचानी गई — ठग ने अपनी चाल बदली!',
      attackerAdaptedNote: 'जब पहली चाल काम नहीं करती, तो साइबर ठग बार-बार अपना तरीका बदलते हैं।',
      psychologyHeader: '🧠 ठग की मनोवैज्ञानिक चाल (ATTACKER TECHNIQUE)',
      multiSelectPrompt: 'आपको इस ईमेल में कौन-कौन से खतरे के संकेत (Warning Signs) दिख रहे हैं? (एक से अधिक चुनें)',
      submitMultiSelectBtn: '🔍 चुने गए संकेतों की जांच करें',
      multiSelectHint: 'कृपया आगे बढ़ने से पहले कम से कम एक खतरे का संकेत चुनें।',
      reportHeader: '🛡️ आपकी साइबर डिफेंस रिपोर्ट (CYBER DEFENSE REPORT)',
      reportDisclaimer: 'शैक्षणिक सिम्युलेशन परिणाम — यह कोई पेशेवर सुरक्षा मूल्यांकन नहीं है।',
      reportMission: 'मिशन:',
      reportDecisions: 'कुल निर्णय:',
      reportSafe: 'सुरक्षित निर्णय:',
      reportRisky: 'जोखिम भरे निर्णय:',
      reportWarnings: 'पहचाने गए चेतावनी संकेत:',
      reportTechniques: 'पहचानी गई ठगी तकनीकें:',
      strongAtHeader: '💪 आपका मजबूत पक्ष (YOU WERE STRONG AT)',
      practiceMoreHeader: '⚠️ यहाँ और अभ्यास करें (PRACTICE MORE)',
      missionCompleteHeader: '🎉 मिशन पूरा हुआ (MISSION COMPLETE)',
      missionCompleteQuote: 'असली ठग कई अलग-अलग तरीके अपना सकते हैं। सबसे सुरक्षित आदत है: कदम उठाने से पहले रुकें (STOP), जांचें (VERIFY) और सोचें (THINK)।',
      tryAgainBtn: '🔁 फिर से प्रयास करें (Try Again)',
      nextMissionBtn: '🎯 अगला मिशन (Next Mission)',
      learnMoreBtn: '📚 और जानें (Learn More)',
      askVoiceSaathiBtn: '🎙️ वॉइस साथी से पूछें (Ask Voice Saathi)',
      voiceSaathiPromptTitle: '🎙️ क्या आप वॉइस साथी (Voice Saathi) से पूछना चाहते हैं?',
      voiceSaathiPromptDesc: 'वॉइस साथी को बताएं कि क्या हुआ और हिंदी, मराठी या अंग्रेजी में तुरंत सुरक्षा मार्गदर्शन सुनें।'
    },
    mr: {
      badge: '🕵️ स्कॅम सिम्युलेटर (SCAM SIMULATOR)',
      heading: 'तुम्ही सायबर भामट्याला हरवू शकता का?',
      subheading: 'वास्तविक सायबर फसवणुकीच्या प्रसंगांचा अनुभव घ्या, स्वतःचे निर्णय घ्या आणि भामटे लोकांना कसे फसवतात ते शिका.',
      startSimBtn: '🎯 सिम्युलेशन सुरू करा (Start Simulation)',
      introTitle: '🛡️ सायबरसाथी स्कॅम सिम्युलेटर',
      introSubtitle: 'तुम्ही वास्तविक सायबर-सुरक्षा परिस्थितींचा अनुभव घेणार आहात.',
      introRulesHeading: 'सिम्युलेशन सुरक्षा नियम:',
      introRules: [
        'येथे कोणतेही खरे आर्थिक व्यवहार होत नाहीत.',
        'कधीही तुमचा खरा पासवर्ड, OTP, PIN, कार्ड नंबर किंवा बँक माहिती टाकू नका.',
        'हे सिम्युलेशन पूर्णपणे शैक्षणिक (Educational) आहे.',
        'तुमच्या निर्णयांवरून पुढे काय घडेल हे ठरेल.'
      ],
      startMissionBtn: '▶ मिशन सुरू करा (START MISSION)',
      missionProgress: 'मिशन',
      selectMissionLabel: 'मिशन निवडा (क्रमशः अनलॉक):',
      unlockAllToggle: '🔓 सरावासाठी सर्व 8 मिशन्स अनलॉक करा',
      lockedLabel: '🔒 अनलॉक करण्यासाठी मागील मिशन पूर्ण करा',
      completedLabel: '✅ पूर्ण',
      stopTitle: '🛑 थांबा (STOP)',
      stopDesc: 'दबावाखाली किंवा भीतीपोटी लगेच कोणतीही कृती करू नका.',
      verifyTitle: '🔍 खात्री करा (VERIFY)',
      verifyDesc: 'अधिकृत स्रोतांवरून स्वतंत्रपणे पडताळणी करा.',
      actTitle: '🛡️ सुरक्षित कृती (ACT SAFELY)',
      actDesc: 'कधीही तुमचा OTP, PIN, पासवर्ड किंवा बँक माहिती शेअर करू नका.',
      privacyWarning: '⚠️ फक्त सिम्युलेशन: कधीही तुमची खरी आर्थिक किंवा ओळख माहिती टाकू नका (उदा. OTP: 123456 — बनावट उदाहरण).',
      emergencyBanner: '🚨 जर तुमचे खरोखर सायबर फसवणुकीत पैसे गेले असतील: तात्काळ 1930 वर कॉल करा किंवा https://cybercrime.gov.in या अधिकृत पोर्टलचा वापर करा. (हे सिम्युलेटर पोलीस तक्रार नोंदवत नाही.)',
      whatDoYouDo: 'तुम्ही काय कराल?',
      continueMissionBtn: '➡️ मिशन सुरू ठेवा (Continue Mission)',
      continueBtn: '➡️ पुढे जा (Continue)',
      warningHeader: '🚨 इशारा — धोकादायक निर्णय!',
      stopHeader: '⚠️ थांबा (STOP)!',
      whatYouMissed: '🔍 तुमच्याकडून काय दुर्लक्षित झाले:',
      goodDecisionHeader: '🛡️ उत्तम आणि सुरक्षित निर्णय (GOOD DECISION)!',
      whySafer: 'हा निर्णय सुरक्षित का होता:',
      warningSignDetected: '✅ ओळखलेले धोक्याचे चिन्ह:',
      safeActionLabel: '✅ सुरक्षित कृती:',
      attackerAdaptedBadge: '🚨 अटॅक तंत्र ओळखले — भामट्याने आपली चाल बदलली!',
      attackerAdaptedNote: 'जेव्हा पहिली युक्ती अपयशी ठरते, तेव्हा सायबर भामटे वारंवार आपली पद्धत बदलतात.',
      psychologyHeader: '🧠 भामट्याची मानसशास्त्रीय युक्ती (ATTACKER TECHNIQUE)',
      multiSelectPrompt: 'तुम्हाला या ईमेलमध्ये कोणती धोक्याची चिन्हे (Warning Signs) दिसतात? (लागू असलेले सर्व निवडा)',
      submitMultiSelectBtn: '🔍 निवडलेल्या चिन्हांची तपासणी करा',
      multiSelectHint: 'कृपया पुढे जाण्यापूर्वी किमान एक धोक्याचे चिन्ह निवडा.',
      reportHeader: '🛡️ तुमचा सायबर डिफेन्स रिपोर्ट (CYBER DEFENSE REPORT)',
      reportDisclaimer: 'शैक्षणिक सिम्युलेशन निकाल — हे व्यावसायिक सुरक्षा मूल्यांकन नाही.',
      reportMission: 'मिशन:',
      reportDecisions: 'एकूण निर्णय:',
      reportSafe: 'सुरक्षित निर्णय:',
      reportRisky: 'धोकादायक निर्णय:',
      reportWarnings: 'ओळखलेली धोक्याची चिन्हे:',
      reportTechniques: 'ओळखलेली फसवणूक तंत्रे:',
      strongAtHeader: '💪 तुमची जमेची बाजू (YOU WERE STRONG AT)',
      practiceMoreHeader: '⚠️ येथे अधिक सराव करा (PRACTICE MORE)',
      missionCompleteHeader: '🎉 मिशन पूर्ण झाले (MISSION COMPLETE)',
      missionCompleteQuote: 'खरे भामटे अनेक वेगवेगळ्या युक्त्या वापरू शकतात. सर्वात सुरक्षित सवय म्हणजे: कोणतीही कृती करण्यापूर्वी थांबा (STOP), खात्री करा (VERIFY) आणि विचार करा (THINK).',
      tryAgainBtn: '🔁 पुन्हा प्रयत्न करा (Try Again)',
      nextMissionBtn: '🎯 पुढील मिशन (Next Mission)',
      learnMoreBtn: '📚 अधिक जाणून घ्या (Learn More)',
      askVoiceSaathiBtn: '🎙️ व्हॉइस साथीला विचारा (Ask Voice Saathi)',
      voiceSaathiPromptTitle: '🎙️ व्हॉइस साथीला (Voice Saathi) विचारायचे आहे का?',
      voiceSaathiPromptDesc: 'व्हॉइस साथीला काय घडले ते सांगा आणि मराठी, हिंदी किंवा इंग्रजीत तात्काळ मार्गदर्शन ऐका.'
    }
  };

  // ============================================================================
  // 8 INTERACTIVE MISSIONS WITH MULTI-STAGE ATTACKER ADAPTATION & PSYCHOLOGY
  // ============================================================================
  const MISSIONS = [
    // -------------------------------------------------------------------------
    // MISSION 01: FAKE KYC SCAM
    // -------------------------------------------------------------------------
    {
      id: 'fake_kyc',
      number: '01',
      voiceTopicKey: 'fake_kyc',
      voiceSampleQuery: {
        en: 'Someone sent me an SMS saying my bank KYC expired and asked me to click a link',
        hi: 'मुझे बैंक KYC खत्म होने का एसएमएस आया है और लिंक पर क्लिक करने को कह रहे हैं',
        mr: 'मला बँक KYC संपल्याचा मेसेज आला आहे आणि लिंकवर क्लिक करायला सांगत आहेत'
      },
      title: {
        en: 'MISSION 01 — FAKE KYC SCAM',
        hi: 'मिशन 01 — फर्जी बैंक KYC घोटाला (FAKE KYC SCAM)',
        mr: 'मिशन 01 — बनावट बँक KYC फसवणूक (FAKE KYC SCAM)'
      },
      shortTitle: {
        en: 'Fake KYC Scam',
        hi: 'फर्जी KYC घोटाला',
        mr: 'बनावट KYC फसवणूक'
      },
      icon: '🪪',
      channelType: 'sms',
      totalWarnings: 6,
      totalTechniques: 3,
      strengths: {
        en: ['Independent verification via official banking channels', 'Recognizing suspicious SMS links and fake support numbers'],
        hi: ['आधिकारिक बैंकिंग ऐप/शाखा से स्वतंत्र पुष्टि करना', 'संदिग्ध SMS लिंक और फर्जी हेल्पलाइन नंबर पहचानना'],
        mr: ['अधिकृत बँकिंग चॅनेलद्वारे स्वतंत्र पडताळणी करणे', 'संशयास्पद SMS लिंक आणि बनावट नंबर ओळखणे']
      },
      practiceAreas: {
        en: ['Handling 5-minute account suspension countdown threats', 'Spotting screen-sharing app (AnyDesk) traps'],
        hi: ['5 मिनट में खाता बंद होने की झूठी धमकी से न घबराना', 'AnyDesk जैसे स्क्रीन-शेयरिंग ऐप के जाल से बचना'],
        mr: ['5 मिनिटांत खाते बंद होण्याच्या खोट्या धमकीला बळी न पडणे', 'AnyDesk सारख्या स्क्रीन-शेअरिंग ॲपपासून सावध राहणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '📱 NEW SMS MESSAGE • Today, 10:14 AM',
            hi: '📱 नया एसएमएस संदेश (NEW MESSAGE) • आज, 10:14 AM',
            mr: '📱 नवीन एसएमएस मेसेज (NEW MESSAGE) • आज, 10:14 AM'
          },
          sender: 'VM-BNKSUP (Unverified +91 98XXX XXXXX)',
          message: {
            en: 'Dear Customer,\n\nYour bank KYC has expired and your account will be suspended today.\n\nUpdate your KYC immediately:\n[Verify KYC Now — http://bit.ly/kyc-bank-update]\n\nCustomer Support:\n+91 XXXXX XXXXX\n\n— Bank Support',
            hi: 'प्रिय ग्राहक,\n\nआपका बैंक KYC समाप्त हो गया है और आपका खाता आज बंद (Suspend) कर दिया जाएगा।\n\nतुरंत अपना KYC अपडेट करें:\n[Verify KYC Now — http://bit.ly/kyc-bank-update]\n\nकस्टमर सपोर्ट:\n+91 XXXXX XXXXX\n\n— बैंक सपोर्ट',
            mr: 'प्रिय ग्राहक,\n\nतुमची बँक KYC मुदत संपली असून तुमचे खाते आज बंद (Suspend) केले जाईल.\n\nतुमचे KYC तात्काळ अपडेट करा:\n[Verify KYC Now — http://bit.ly/kyc-bank-update]\n\nकस्टमर सपोर्ट:\n+91 XXXXX XXXXX\n\n— बँक सपोर्ट'
          },
          technique: {
            badge: '🚨 Urgency + 🔗 Suspicious Link',
            name: { en: 'Urgency & Impersonation', hi: 'जल्दबाजी का दबाव और नकली पहचान', mr: 'तातडीची भीती आणि बनावट ओळख' },
            desc: {
              en: 'The scammer pretends to represent your bank and creates panic that your account will be suspended today so you click without thinking.',
              hi: 'ठग बैंक के नाम का इस्तेमाल करके यह डर पैदा करता है कि आज ही खाता बंद हो जाएगा, ताकि आप बिना सोचे-समझे लिंक पर क्लिक कर दें।',
              mr: 'भामटा बँकेचे नाव वापरून आजच खाते बंद होईल अशी भीती निर्माण करतो जेणेकरून तुम्ही विचार न करता लिंकवर क्लिक कराल.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 🔗 Click the KYC link',
                hi: 'A. 🔗 KYC लिंक पर क्लिक करें',
                mr: 'A. 🔗 KYC लिंकवर क्लिक करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'You clicked the suspicious link.',
                hi: 'आपने संदिग्ध लिंक पर क्लिक कर दिया।',
                mr: 'तुम्ही संशयास्पद लिंकवर क्लिक केले.'
              },
              consequenceDetail: {
                en: 'The fake website opens a look-alike bank page asking for your NetBanking Login, Debit Card PIN, and OTP (123456 — SIMULATION ONLY).',
                hi: 'फर्जी वेबसाइट बिल्कुल बैंक जैसा दिखने वाला पेज खोलती है और आपका नेटबैंकिंग पासवर्ड, एटीएम पिन और OTP (123456 — केवल सिम्युलेशन) मांगती है।',
                mr: 'बनावट वेबसाइट हुबेहूब बँकेसारखे पेज उघडून तुमचा पासवर्ड, पिन आणि OTP (123456 — फक्त सिम्युलेशन) मागते.'
              },
              stopMessage: {
                en: 'Never enter OTPs, PINs, passwords or banking credentials into a page reached through a suspicious message.',
                hi: 'किसी भी संदिग्ध एसएमएस या लिंक से खुले पेज पर कभी भी अपना OTP, PIN, पासवर्ड या बैंक विवरण दर्ज न करें।',
                mr: 'संशयास्पद मेसेजमधील लिंकवरून उघडलेल्या पेजवर कधीही तुमचा OTP, PIN किंवा पासवर्ड टाकू नका.'
              },
              missedSigns: {
                en: ['Urgent deadline ("suspended today")', 'Threat of account suspension', 'Suspicious shortened link (bit.ly)', 'Unverified 10-digit phone number'],
                hi: ['तत्काल समय-सीमा ("आज ही खाता बंद")', 'खाता सस्पेंड करने की धमकी', 'संदिग्ध छोटा लिंक (bit.ly)', 'असत्यापित 10 अंकों का फोन नंबर'],
                mr: ['तातडीची मुदत ("आजच खाते बंद")', 'खाते बंद करण्याची धमकी', 'संशयास्पद लिंक (bit.ly)', 'अनोळखी 10 अंकी फोन नंबर']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 📞 Call the number in the message',
                hi: 'B. 📞 मैसेज में दिए गए नंबर पर कॉल करें',
                mr: 'B. 📞 मेसेजमध्ये दिलेल्या नंबरवर कॉल करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'You called the scammer’s fake support desk.',
                hi: 'आपने ठग के फर्जी कस्टमर सपोर्ट नंबर पर कॉल कर दिया।',
                mr: 'तुम्ही भामट्याच्या बनावट सपोर्ट नंबरवर कॉल केला.'
              },
              consequenceDetail: {
                en: 'A smooth-talking fraudster answers pretending to be a Bank Manager and instructs you to install "AnyDesk" remote screen-sharing app.',
                hi: 'दूसरी तरफ बैठा ठग खुद को बैंक मैनेजर बताता है और केवाईसी अपडेट करने के बहाने आपके फोन में "AnyDesk" ऐप डाउनलोड करवाता है।',
                mr: 'समोरचा भामटा स्वतःला बँक मॅनेजर सांगून तुम्हाला "AnyDesk" स्क्रीन-शेअरिंग ॲप डाऊनलोड करायला लावतो.'
              },
              stopMessage: {
                en: 'Never call phone numbers printed inside suspicious SMS messages. Always use the number printed on your physical bank passbook or debit card.',
                hi: 'संदिग्ध एसएमएस में लिखे फोन नंबरों पर कभी कॉल न करें। हमेशा अपनी बैंक पासबुक या एटीएम कार्ड के पीछे लिखे आधिकारिक नंबर का ही प्रयोग करें।',
                mr: 'संशयास्पद मेसेजमध्ये दिलेल्या नंबरवर कधीही कॉल करू नका. नेहमी बँक पासबुकवरील अधिकृत नंबरच वापरा.'
              },
              missedSigns: {
                en: ['Unverified personal mobile number in SMS', 'Threat of immediate suspension', 'Impersonation of Bank Support'],
                hi: ['एसएमएस में दिया गया अनजान मोबाइल नंबर', 'तुरंत खाता बंद करने का डर', 'बैंक सपोर्ट की नकली पहचान'],
                mr: ['मेसेजमधील अनोळखी मोबाईल नंबर', 'खाते बंद करण्याची भीती', 'बँक सपोर्टची बनावट ओळख']
              }
            },
            {
              id: 'C',
              label: {
                en: 'C. 🏦 Open the official banking app/website independently',
                hi: 'C. 🏦 आधिकारिक बैंकिंग ऐप या वेबसाइट को स्वतंत्र रूप से खोलें',
                mr: 'C. 🏦 अधिकृत बँकिंग ॲप किंवा वेबसाइट स्वतंत्रपणे उघडा'
              },
              isSafe: true,
              safeExplanation: {
                en: 'You chose to verify through the official banking channel instead of using the link or phone number in the suspicious message. Inside your real bank app, you see your KYC is completely valid!',
                hi: 'आपने संदिग्ध मैसेज के लिंक या फोन नंबर का उपयोग करने के बजाय सीधे अपने आधिकारिक बैंकिंग ऐप से जांच करने का सही निर्णय लिया। ऐप में आपका खाता पूरी तरह सुरक्षित है!',
                mr: 'तुम्ही संशयास्पद मेसेजमधील लिंक किंवा नंबर न वापरता अधिकृत बँकिंग चॅनेलद्वारे खात्री करण्याचा योग्य निर्णय घेतला!'
              },
              detectedSigns: {
                en: ['Urgency ("account suspended today")', 'Threat of account suspension', 'Suspicious link & unverified number'],
                hi: ['जल्दबाजी का दबाव ("आज ही खाता बंद")', 'खाता निलंबित करने की धमकी', 'संदिग्ध लिंक और अनजान नंबर'],
                mr: ['तातडीचा दबाव ("आजच खाते बंद")', 'खाते बंद करण्याची धमकी', 'संशयास्पद लिंक आणि अनोळखी नंबर']
              },
              safeActionText: {
                en: 'Independent verification through official bank app/branch',
                hi: 'आधिकारिक बैंक ऐप या शाखा के माध्यम से स्वतंत्र सत्यापन',
                mr: 'अधिकृत बँक ॲप किंवा शाखेद्वारे स्वतंत्र पडताळणी'
              }
            },
            {
              id: 'D',
              label: {
                en: 'D. 📤 Forward the message to a friend',
                hi: 'D. 📤 यह मैसेज अपने दोस्त को फॉरवर्ड करें',
                mr: 'D. 📤 हा मेसेज तुमच्या मित्राला फॉरवर्ड करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'Forwarding scam links puts your friends and elders at risk!',
                hi: 'फर्जी लिंक फॉरवर्ड करने से आपके दोस्त और बुजुर्ग खतरे में पड़ सकते हैं!',
                mr: 'बनावट लिंक फॉरवर्ड केल्यामुळे तुमचे मित्र आणि ज्येष्ठ नागरिक धोक्यात येऊ शकतात!'
              },
              consequenceDetail: {
                en: 'Your friend might trust the message because it came from you and accidentally click the phishing link.',
                hi: 'आपका दोस्त आप पर भरोसा करके उस फर्जी लिंक पर क्लिक कर सकता है और उसके खाते से पैसे कट सकते हैं।',
                mr: 'तुमचा मित्र तुमच्यावर विश्वास ठेवून त्या लिंकवर क्लिक करू शकतो आणि त्याची फसवणूक होऊ शकते.'
              },
              stopMessage: {
                en: 'Never forward unverified links. If you want to warn family members, take a screenshot with a big "FAKE SCAM" warning instead of forwarding clickable links.',
                hi: 'कभी भी संदिग्ध लिंक को सीधा फॉरवर्ड न करें। परिवार को सतर्क करना हो तो स्क्रीनशॉट पर "फर्जी मैसेज" लिखकर बताएं।',
                mr: 'अनोळखी लिंक कधीही फॉरवर्ड करू नका. इतरांना सावध करण्यासाठी लिंकऐवजी सावधगिरीचा संदेश पाठवा.'
              },
              missedSigns: {
                en: ['Clickable phishing link inside message', 'Unverified sender'],
                hi: ['मैसेज के अंदर खतरनाक फिशिंग लिंक', 'असत्यापित भेजने वाला'],
                mr: ['मेसेजमधील धोकादायक फिशिंग लिंक', 'अनाधिकृत प्रेषक']
              }
            }
          ]
        },
        {
          stepIndex: 2,
          isAdaptation: true,
          adaptationLabel: {
            en: '🚨 ATTACK TECHNIQUE DETECTED: "Urgency + Fear"',
            hi: '🚨 अटैक तकनीक पहचानी गई: "जल्दबाजी + डर (Urgency + Fear)"',
            mr: '🚨 अटॅक तंत्र ओळखले: "तातडी + भीती (Urgency + Fear)"'
          },
          uiHeader: {
            en: '📱 FOLLOW-UP SMS (5 Minutes Later) • Attacker Escalates!',
            hi: '📱 अगला एसएमएस (5 मिनट बाद) • ठग ने दबाव बढ़ाया!',
            mr: '📱 पुढील मेसेज (5 मिनिटांनंतर) • भामट्याने दबाव वाढवला!'
          },
          sender: 'ALERT-KYC (+91 98XXX XXXXX)',
          message: {
            en: 'FINAL WARNING! Because you did not click the link, your bank account and ATM card will be BLOCKED in 5 minutes!\n\nReply with the 6-digit verification code sent to your phone (Example: 123456 — SIMULATION ONLY) or call our KYC Officer immediately to stop suspension.',
            hi: 'अंतिम चेतावनी (FINAL WARNING)! चूंकि आपने लिंक पर क्लिक नहीं किया, आपका बैंक खाता और एटीएम कार्ड अगले 5 मिनट में हमेशा के लिए ब्लॉक हो जाएगा!\n\nब्लॉक होने से रोकने के लिए तुरंत अपने फोन पर आया 6 अंकों का कोड (उदा. 123456 — केवल सिम्युलेशन) बताएं या हमारे अधिकारी से बात करें।',
            mr: 'अंतिम इशारा (FINAL WARNING)! तुम्ही लिंकवर क्लिक न केल्यामुळे तुमचे बँक खाते आणि एटीएम कार्ड पुढील 5 मिनिटांत कायमचे ब्लॉक होईल!\n\nते थांबवण्यासाठी फोनवर आलेला 6 अंकी कोड (उदा. 123456 — फक्त सिम्युलेशन) सांगा किंवा तात्काळ कॉल करा.'
          },
          technique: {
            badge: '😨 Fear + 👮 Authority',
            name: { en: 'Escalated Fear & Countdown Pressure', hi: 'डर बढ़ाना और 5 मिनट की उल्टी गिनती', mr: 'भीती वाढवणे आणि 5 मिनिटांची मुदत' },
            desc: {
              en: 'When you ignored the first message, the scammer switched to a 5-minute countdown timer to trigger panic and steal your OTP.',
              hi: 'जब आपने पहले मैसेज को नजरअंदाज किया, तो ठग ने 5 मिनट की उल्टी गिनती का डर दिखाया ताकि आप घबराकर अपना OTP बता दें।',
              mr: 'जेव्हा तुम्ही पहिल्या मेसेजकडे दुर्लक्ष केले, तेव्हा भामट्याने 5 मिनिटांत खाते बंद होण्याची भीती दाखवून OTP चोरण्याचा प्रयत्न केला.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 🔢 Share the 6-digit OTP code so the account is not blocked',
                hi: 'A. 🔢 खाता बंद होने से बचाने के लिए 6 अंकों का OTP बता दें',
                mr: 'A. 🔢 खाते ब्लॉक होऊ नये म्हणून 6 अंकी OTP सांगा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'Sharing an OTP authorizes the scammer to empty your bank account!',
                hi: 'OTP बताते ही ठग को आपके बैंक खाते से पैसे निकालने की अनुमति मिल जाती है!',
                mr: 'OTP सांगताच भामट्याला तुमच्या बँक खात्यातून पैसे काढण्याची परवानगी मिळते!'
              },
              consequenceDetail: {
                en: 'The 6-digit code was actually a high-value fund transfer OTP triggered by the scammer.',
                hi: 'वह 6 अंकों का कोड वास्तव में आपके खाते से पैसे ट्रांसफर करने का बैंक OTP था।',
                mr: 'तो 6 अंकी कोड प्रत्यक्षात तुमच्या खात्यातून पैसे काढण्याचा OTP होता.'
              },
              stopMessage: {
                en: 'Banks NEVER ask for an OTP to keep your account active or update KYC. An OTP is only for outflows or logins.',
                hi: 'कोई भी बैंक खाता चालू रखने या KYC अपडेट करने के लिए कभी भी फोन या SMS पर OTP नहीं मांगता।',
                mr: 'कोणतीही बँक खाते सुरू ठेवण्यासाठी किंवा KYC साठी कधीही OTP मागत नाही.'
              },
              missedSigns: {
                en: ['Fake 5-minute countdown timer', 'Request for confidential 6-digit OTP'],
                hi: ['5 मिनट की नकली समय-सीमा', 'गोपनीय 6-अंकीय OTP की मांग'],
                mr: ['5 मिनिटांची बनावट मुदत', 'गोपनीय 6 अंकी OTP ची मागणी']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🛑 Refuse to share any code, block the sender, and report on Chakshu / 1930',
                hi: 'B. 🛑 कोई भी कोड न बताएं, नंबर ब्लॉक करें और चक्षु (Chakshu) / 1930 पर रिपोर्ट करें',
                mr: 'B. 🛑 कोणताही कोड सांगू नका, नंबर ब्लॉक करा आणि चक्षु (Chakshu) / 1930 वर तक्रार करा'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Excellent! You recognized that the scammer changed tactics to create fear. Blocking the number and refusing to share the OTP kept your savings 100% safe.',
                hi: 'शाबाश! आपने पहचान लिया कि पहली चाल फेल होने पर ठग ने डर पैदा करने के लिए दूसरी चाल चली। OTP न देकर आपने अपनी जमा-पूंजी को 100% सुरक्षित रखा।',
                mr: 'उत्तम! पहिली युक्ती फसल्यावर भामट्याने भीती दाखवण्यासाठी चाल बदलली हे तुम्ही ओळखले. OTP न देऊन तुम्ही तुमचे पैसे सुरक्षित ठेवले.'
              },
              detectedSigns: {
                en: ['Attacker tactic escalation ("FINAL WARNING in 5 minutes")', 'Demand for 6-digit OTP'],
                hi: ['ठग द्वारा दबाव बढ़ाना ("5 मिनट में अंतिम चेतावनी")', '6 अंकों के OTP की मांग'],
                mr: ['भामट्याकडून वाढलेला दबाव ("5 मिनिटांत अंतिम इशारा")', '6 अंकी OTP ची मागणी']
              },
              safeActionText: {
                en: 'Refused OTP under pressure and blocked the scammer',
                hi: 'दबाव में आए बिना OTP देने से इनकार किया और नंबर ब्लॉक किया',
                mr: 'दबावाला बळी न पडता OTP नाकारला आणि नंबर ब्लॉक केला'
              }
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 02: UPI PAYMENT SCAM
    // -------------------------------------------------------------------------
    {
      id: 'upi_payment',
      number: '02',
      voiceTopicKey: 'upi_fraud',
      voiceSampleQuery: {
        en: 'Someone is asking me to enter my UPI PIN or scan a QR code to receive 5000 rupees',
        hi: 'कोई मुझे 5000 रुपये भेजने के नाम पर UPI पिन डालने या QR कोड स्कैन करने को कह रहा है',
        mr: 'कोणीतरी मला 5000 रुपये पाठवण्याच्या नावाखाली UPI पिन टाकायला किंवा QR कोड स्कॅन करायला सांगत आहे'
      },
      title: {
        en: 'MISSION 02 — UPI PAYMENT SCAM',
        hi: 'मिशन 02 — UPI पेमेंट और पिन घोटाला (UPI PAYMENT SCAM)',
        mr: 'मिशन 02 — UPI पेमेंट फसवणूक (UPI PAYMENT SCAM)'
      },
      shortTitle: {
        en: 'UPI Payment Scam',
        hi: 'UPI पेमेंट घोटाला',
        mr: 'UPI पेमेंट फसवणूक'
      },
      icon: '💳',
      channelType: 'upi',
      totalWarnings: 5,
      totalTechniques: 2,
      strengths: {
        en: ['Knowing that UPI PIN is NEVER needed to receive money', 'Rejecting fraudulent UPI Collect & QR requests'],
        hi: ['यह जानना कि पैसे प्राप्त करने के लिए कभी भी UPI PIN नहीं डालना होता', 'फर्जी Collect Request और QR कोड को अस्वीकार करना'],
        mr: ['पैसे स्वीकारण्यासाठी कधीही UPI PIN टाकावा लागत नाही हे समजणे', 'बनावट Collect Request आणि QR कोड नाकारणे']
      },
      practiceAreas: {
        en: ['Reading UPI screen prompts ("PAY" vs "RECEIVE") carefully', 'Verifying credits in actual bank balance instead of SMS screenshots'],
        hi: ['UPI स्क्रीन पर "Pay" लिखा है या नहीं, यह ध्यान से पढ़ना', 'नकली पेमेंट स्क्रीनशॉट के बजाय असली बैंक बैलेंस चेक करना'],
        mr: ['UPI स्क्रीनवर "Pay" लिहिले आहे का ते काळजीपूर्वक वाचणे', 'बनावट स्क्रीनशॉटऐवजी बँक बॅलन्स तपासणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '💳 UPI APP NOTIFICATION & BUYER CALL',
            hi: '💳 UPI ऐप नोटिफिकेशन और खरीदार का कॉल',
            mr: '💳 UPI ॲप नोटिफिकेशन आणि खरेदीदाराचा कॉल'
          },
          sender: 'Online Buyer (Rajesh Sharma)',
          message: {
            en: 'Caller says: "Hello! I am buying your old furniture listed online. I am sending you ₹5,000 advance right now. Please click the notification on your UPI app and enter your UPI PIN (SIMULATION ONLY) to receive the ₹5,000 into your account."',
            hi: 'कॉलर कहता है: "नमस्ते! मैं आपका पुराना फर्नीचर खरीद रहा हूँ। मैं अभी आपको ₹5,000 एडवांस भेज रहा हूँ। कृपया अपने UPI ऐप पर आए नोटिफिकेशन को दबाएं और ₹5,000 अपने खाते में प्राप्त करने के लिए अपना UPI PIN डालें।"',
            mr: 'कॉलर म्हणतो: "नमस्कार! मी तुमचे फर्निचर विकत घेत आहे. मी तुम्हाला आत्ता ₹5,000 ॲडव्हान्स पाठवत आहे. कृपया तुमच्या UPI ॲपवरील नोटिफिकेशनवर क्लिक करा आणि ₹5,000 खात्यात जमा करण्यासाठी तुमचा UPI PIN टाका."'
          },
          technique: {
            badge: '🤝 Trust + 💰 Greed',
            name: { en: 'Reverse Collect Request Trick', hi: 'पैसे देने के बहाने पैसे काटने की रिक्वेस्ट (Collect Request)', mr: 'पैसे देण्याच्या बहाण्याने पैसे काढण्याची विनंती' },
            desc: {
              en: 'The scammer sends a UPI "Collect / Pay Request" for ₹5,000 while talking to you on the phone, hoping you enter your PIN thinking you are receiving money.',
              hi: 'ठग फोन पर बात करते हुए आपको ₹5,000 की "Pay / Collect Request" भेजता है और झूठ बोलता है कि पिन डालने से पैसे आपके खाते में आएंगे।',
              mr: 'भामटा फोनवर बोलताना ₹5,000 ची "Pay Request" पाठवतो आणि पिन टाकल्यास पैसे जमा होतील असे खोटे सांगतो.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 📲 Approve the request and enter UPI PIN to receive ₹5,000',
                hi: 'A. 📲 ₹5,000 पाने के लिए रिक्वेस्ट स्वीकार करें और UPI PIN डालें',
                mr: 'A. 📲 ₹5,000 मिळवण्यासाठी रिक्वेस्ट स्वीकारून UPI PIN टाका'
              },
              isSafe: false,
              consequenceTitle: {
                en: '₹5,000 was DEDUCTED from your bank account!',
                hi: 'आपके बैंक खाते से ₹5,000 कट गए!',
                mr: 'तुमच्या बँक खात्यातून ₹5,000 वजा झाले!'
              },
              consequenceDetail: {
                en: 'Entering your UPI PIN authorized an outgoing payment of ₹5,000 from your account to the scammer.',
                hi: 'UPI पिन डालते ही आपके खाते से ₹5,000 आने के बजाय ठग के खाते में चले गए।',
                mr: 'UPI पिन टाकताच तुमच्या खात्यात पैसे येण्याऐवजी ₹5,000 भामट्याच्या खात्यात गेले.'
              },
              stopMessage: {
                en: 'GOLDEN RULE: UPI PIN is ONLY used to authorize payments GOING OUT of your account, NEVER to receive money!',
                hi: 'गोल्डन नियम: UPI PIN का उपयोग केवल अपने खाते से पैसे भेजने (काटने) के लिए होता है, पैसे प्राप्त करने के लिए कभी भी पिन नहीं डालना पड़ता!',
                mr: 'सुवर्ण नियम: UPI PIN चा वापर फक्त खात्यातून पैसे पाठवण्यासाठी होतो, पैसे स्वीकारण्यासाठी कधीही पिन टाकावा लागत नाही!'
              },
              missedSigns: {
                en: ['Caller asking you to enter UPI PIN to receive money', 'Screen button said "PAY ₹5,000"'],
                hi: ['पैसे पाने के लिए UPI पिन डालने की मांग', 'स्क्रीन पर "PAY ₹5,000" लिखा होना'],
                mr: ['पैसे मिळवण्यासाठी UPI पिन टाकण्याची मागणी', 'स्क्रीनवर "PAY ₹5,000" लिहिलेले असणे']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🛡️ Decline the collect request immediately — receiving money NEVER requires a UPI PIN',
                hi: 'B. 🛡️ रिक्वेस्ट तुरंत Decline (अस्वीकार) करें — पैसे पाने के लिए कभी UPI पिन नहीं लगता',
                mr: 'B. 🛡️ रिक्वेस्ट तात्काळ Decline करा — पैसे मिळवण्यासाठी कधीही UPI पिन लागत नाही'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Spot on! Incoming UPI transfers happen automatically without any action or PIN from the receiver.',
                hi: 'बिल्कुल सही! जब कोई आपको सच में पैसे भेजता है, तो वह अपने आप खाते में जमा होता है—आपको कभी भी पिन नहीं डालना पड़ता।',
                mr: 'अगदी बरोबर! जेव्हा कोणी तुम्हाला पैसे पाठवतो तेव्हा ते आपोआप खात्यात जमा होतात—तुम्हाला पिन टाकण्याची गरज नसते.'
              },
              detectedSigns: {
                en: ['Fake buyer asking for UPI PIN to receive money', 'Fraudulent UPI Collect Request'],
                hi: ['पैसे प्राप्त करने के नाम पर UPI पिन मांगना', 'फर्जी UPI Collect Request'],
                mr: ['पैसे मिळवण्यासाठी UPI पिन मागणे', 'बनावट UPI Collect Request']
              },
              safeActionText: {
                en: 'Declined the UPI collect request without entering PIN',
                hi: 'बिना पिन डाले फर्जी UPI रिक्वेस्ट को अस्वीकार (Decline) किया',
                mr: 'पिन न टाकता बनावट UPI रिक्वेस्ट नाकारली'
              }
            }
          ]
        },
        {
          stepIndex: 2,
          isAdaptation: true,
          adaptationLabel: {
            en: '🚨 ATTACK TECHNIQUE DETECTED: "Impersonation + QR Code Trap"',
            hi: '🚨 अटैक तकनीक पहचानी गई: "QR कोड स्कैन का नया जाल"',
            mr: '🚨 अटॅक तंत्र ओळखले: "QR कोड स्कॅन करण्याचे नवीन जाळे"'
          },
          uiHeader: {
            en: '💬 WHATSAPP MESSAGE • Scammer Changes Tactic!',
            hi: '💬 व्हाट्सएप मैसेज • ठग ने तरीका बदला!',
            mr: '💬 व्हॉट्सअ‍ॅप मेसेज • भामट्याने पद्धत बदलली!'
          },
          sender: 'Rajesh Buyer (WhatsApp)',
          message: {
            en: '"Sir, since normal UPI failed, my army canteen billing machine generated this Special Receive QR Code [▦ QR IMAGE]. Scan this QR code on your phone to credit ₹5,000 directly into your bank account within 30 seconds!"',
            hi: '"भाई साहब, सामान्य UPI काम नहीं कर रहा है, इसलिए मैंने अपनी आर्मी कैंटीन मशीन से यह स्पेशल Receive QR Code [▦ QR IMAGE] भेजा है। इसे स्कैन करते ही 30 सेकंड में ₹5,000 आपके खाते में आ जाएंगे!"',
            mr: '"सर, साधे UPI चालत नाहीये, म्हणून मी हा स्पेशल Receive QR Code [▦ QR IMAGE] पाठवला आहे. हा QR कोड स्कॅन करताच ₹5,000 तुमच्या खात्यात जमा होतील!"'
          },
          technique: {
            badge: '👮 Fake Identity + ▦ QR Trap',
            name: { en: 'QR Code Reversal Trick', hi: 'QR कोड से पैसे आने का झूठा दावा', mr: 'QR कोड स्कॅन करून पैसे मिळण्याचा खोटा दावा' },
            desc: {
              en: 'When you declined the Collect Request, the scammer sent a QR code claiming scanning it will put money into your account.',
              hi: 'जब आपने पहली रिक्वेस्ट ठुकरा दी, तो ठग ने QR कोड भेजकर दावा किया कि इसे स्कैन करने से पैसे आपके खाते में आएंगे।',
              mr: 'जेव्हा तुम्ही पहिली रिक्वेस्ट नाकारली, तेव्हा भामट्याने QR कोड पाठवून तो स्कॅन केल्यास पैसे मिळतील असा खोटा दावा केला.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 📷 Scan the QR code sent on WhatsApp',
                hi: 'A. 📷 व्हाट्सएप पर भेजे गए QR कोड को स्कैन करें',
                mr: 'A. 📷 व्हॉट्सअ‍ॅपवर पाठवलेला QR कोड स्कॅन करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'Scanning a QR code ALWAYS sends money out—it NEVER receives money!',
                hi: 'QR कोड स्कैन करने से हमेशा पैसे खाते से कटते हैं—पैसे कभी आते नहीं हैं!',
                mr: 'QR कोड स्कॅन केल्याने नेहमी खात्यातून पैसे जातात—कधीही जमा होत नाहीत!'
              },
              consequenceDetail: {
                en: 'There is no such thing as a "Receive Money QR Code" for customers.',
                hi: 'पैसे प्राप्त करने वाला कोई QR कोड नहीं होता; किसी का भेजा QR स्कैन करने का मतलब उसे पैसे भेजना है।',
                mr: 'पैसे मिळवून देणारा कोणताही QR कोड नसतो.'
              },
              stopMessage: {
                en: 'Never scan any QR code sent by a buyer, stranger, or lottery agent.',
                hi: 'किसी भी खरीदार या अनजान व्यक्ति द्वारा व्हाट्सएप पर भेजे गए QR कोड को कभी स्कैन न करें।',
                mr: 'कोणत्याही अनोळखी व्यक्तीने पाठवलेला QR कोड कधीही स्कॅन करू नका.'
              },
              missedSigns: {
                en: ['Claim of "Special Receive QR Code"', 'Fake army/government billing excuse'],
                hi: ['"पैसे आने वाले स्पेशल QR कोड" का झूठा दावा', 'आर्मी कैंटीन मशीन का झूठा बहाना'],
                mr: ['"पैसे मिळणाऱ्या QR कोड" चा खोटा दावा', 'बनावट ओळखीचा वापर']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🚫 Refuse to scan the QR code and block the scammer',
                hi: 'B. 🚫 QR कोड स्कैन करने से साफ मना करें और ठग को ब्लॉक करें',
                mr: 'B. 🚫 QR कोड स्कॅन करण्यास नकार द्या आणि भामट्याला ब्लॉक करा'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Brilliant! You outsmarted both the UPI Collect Request trap and the QR Code adaptation trap.',
                hi: 'बहुत बढ़िया! आपने UPI कलेक्ट रिक्वेस्ट और QR कोड—दोनों जालों को पहचानकर ठग को पूरी तरह मात दे दी।',
                mr: 'उत्कृष्ट! तुम्ही UPI कलेक्ट रिक्वेस्ट आणि QR कोड—दोन्ही सापळे ओळखून भामट्याला हरवले.'
              },
              detectedSigns: {
                en: ['QR code sent to "receive" money', 'Tactic change after first failure'],
                hi: ['पैसे प्राप्त करने के नाम पर भेजा गया QR कोड', 'पहली चाल फेल होने पर बदला गया तरीका'],
                mr: ['पैसे मिळवण्यासाठी पाठवलेला QR कोड', 'पहिली युक्ती फसल्यानंतर बदललेली चाल']
              },
              safeActionText: {
                en: 'Never scanned QR code and blocked the fraudulent buyer',
                hi: 'QR कोड स्कैन नहीं किया और फर्जी खरीदार को ब्लॉक किया',
                mr: 'QR कोड स्कॅन केला नाही आणि भामट्याला ब्लॉक केले'
              }
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 03: FAKE JOB SCAM
    // -------------------------------------------------------------------------
    {
      id: 'fake_job',
      number: '03',
      voiceTopicKey: 'fake_job_scam',
      voiceSampleQuery: {
        en: 'I got a work from home job message asking for 499 registration fee to get 45000 salary',
        hi: 'मुझे 45000 सैलरी वाली वर्क फ्रॉम होम नौकरी के लिए 499 रुपये रजिस्ट्रेशन फीस मांग रहे हैं',
        mr: 'मला वर्क फ्रॉम होम नोकरीसाठी 499 रुपये रजिस्ट्रेशन फी मागत आहेत'
      },
      title: {
        en: 'MISSION 03 — FAKE JOB SCAM',
        hi: 'मिशन 03 — फर्जी नौकरी और रजिस्ट्रेशन फीस घोटाला (FAKE JOB SCAM)',
        mr: 'मिशन 03 — बनावट नोकरी फसवणूक (FAKE JOB SCAM)'
      },
      shortTitle: {
        en: 'Fake Job Scam',
        hi: 'फर्जी नौकरी घोटाला',
        mr: 'बनावट नोकरी फसवणूक'
      },
      icon: '💼',
      channelType: 'whatsapp',
      totalWarnings: 5,
      totalTechniques: 2,
      strengths: {
        en: ['Independently verifying employer authenticity', 'Refusing to pay upfront registration fees or share Aadhaar/bank details'],
        hi: ['कंपनी की प्रामाणिकता की स्वतंत्र जांच करना', 'नौकरी के लिए रजिस्ट्रेशन फीस या आधार/बैंक विवरण देने से इनकार करना'],
        mr: ['कंपनीची स्वतंत्रपणे पडताळणी करणे', 'नोकरीसाठी फी किंवा आधार/बँक माहिती न देणे']
      },
      practiceAreas: {
        en: ['Spotting unrealistic work-from-home salary offers', 'Avoiding Telegram prepaid VIP task traps'],
        hi: ['अवास्तविक वर्क-फ्रॉम-होम सैलरी के लालच से बचना', 'टेलीग्राम प्रीपेड टास्क के जाल को पहचानना'],
        mr: ['अवास्तव पगाराच्या आमिषाला बळी न पडणे', 'टेलिग्राम प्रीपेड टास्क सापळे ओळखणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '💬 WHATSAPP / TELEGRAM JOB OFFER',
            hi: '💬 व्हाट्सएप / टेलीग्राम जॉब ऑफर',
            mr: '💬 व्हॉट्सअ‍ॅप / टेलिग्राम जॉब ऑफर'
          },
          sender: 'HR Recruitment Desk (+91 70XXX XXXXX)',
          message: {
            en: 'Congratulations!\n\nYou have been selected for a work-from-home job.\n\nSalary: ₹45,000/month\n\nTo activate your employee account, pay a refundable registration fee of ₹499.',
            hi: 'बधाई हो (Congratulations)!\n\nआपका चयन घर बैठे काम (Work-From-Home) की नौकरी के लिए हुआ है।\n\nवेतन: ₹45,000/महीना\n\nअपना कर्मचारी खाता (Employee Account) चालू करने के लिए ₹499 का रिफंडेबल रजिस्ट्रेशन शुल्क जमा करें।',
            mr: 'अभिनंदन (Congratulations)!\n\nतुमची घरबसल्या कामाच्या (Work-From-Home) नोकरीसाठी निवड झाली आहे.\n\nपगार: ₹45,000/महिना\n\nतुमचे कर्मचारी खाते सुरू करण्यासाठी ₹499 परतावा मिळणारे (Refundable) नोंदणी शुल्क भरा.'
          },
          technique: {
            badge: '💰 Greed + 🎁 Reward',
            name: { en: 'High Salary Bait & Upfront Fee Trap', hi: 'ऊंची सैलरी का लालच और रजिस्ट्रेशन फीस का जाल', mr: 'मोठ्या पगाराचे आमिष आणि नोंदणी शुल्काचा सापळा' },
            desc: {
              en: 'Scammers dangle an attractive ₹45,000/month salary with no formal interview so that ₹499 feels like a tiny, harmless fee.',
              hi: 'ठग बिना किसी असली इंटरव्यू के ₹45,000 महीने की सैलरी का लालच देते हैं ताकि ₹499 की रकम आपको बहुत छोटी लगे।',
              mr: 'भामटे कोणत्याही मुलाखतीशिवाय ₹45,000 पगाराचे आमिष दाखवतात जेणेकरून ₹499 ही रक्कम छोटी वाटेल.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 💸 Pay ₹499',
                hi: 'A. 💸 ₹499 का भुगतान करें',
                mr: 'A. 💸 ₹499 भरा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'You lost ₹499—and now they demand ₹4,500 for "Laptop Security Deposit"!',
                hi: 'आपके ₹499 डूब गए—और अब वे "लैपटॉप सिक्योरिटी" के नाम पर ₹4,500 और मांग रहे हैं!',
                mr: 'तुमचे ₹499 गेले—आणि आता ते "लॅपटॉप डिपॉझिट" म्हणून ₹4,500 मागत आहेत!'
              },
              consequenceDetail: {
                en: 'Once you pay ₹499, scammers know you are willing to pay and demand larger fees for ID card, training, and laptop courier.',
                hi: 'जैसे ही आप ₹499 देते हैं, ठग समझ जाते हैं कि आप झांसे में आ गए हैं और वे ट्रेनिंग व लैपटॉप के नाम पर हजारों रुपये मांगने लगते हैं।',
                mr: 'एकदा ₹499 भरल्यावर भामटे आयडी कार्ड आणि लॅपटॉपच्या नावाखाली आणखी हजारो रुपये मागतात.'
              },
              stopMessage: {
                en: 'Legitimate employers NEVER ask candidates to pay money for registration, employee account activation, or laptops.',
                hi: 'कोई भी असली कंपनी नौकरी देने या कर्मचारी खाता खोलने के लिए कभी भी उम्मीदवार से पैसे नहीं मांगती।',
                mr: 'कोणतीही खरी कंपनी नोकरी देण्यासाठी किंवा खाते सुरू करण्यासाठी कधीही पैशांची मागणी करत नाही.'
              },
              missedSigns: {
                en: ['Job offer without a real interview', 'Demand for ₹499 registration fee', 'Unsolicited WhatsApp message'],
                hi: ['बिना इंटरव्यू के ₹45,000 की नौकरी', '₹499 रजिस्ट्रेशन फीस की मांग', 'अनजान व्हाट्सएप नंबर से ऑफर'],
                mr: ['मुलाखतीशिवाय ₹45,000 ची नोकरी', '₹499 नोंदणी शुल्काची मागणी', 'अनोळखी व्हॉट्सअ‍ॅप मेसेज']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🔍 Ask for official company verification (and refuse to pay any fee)',
                hi: 'B. 🔍 कंपनी के आधिकारिक सत्यापन की जांच करें (और कोई भी फीस न दें)',
                mr: 'B. 🔍 अधिकृत कंपनी पडताळणीची मागणी करा (आणि कोणतीही फी भरू नका)'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Safe decision! Independently verifying the company on its official corporate website and refusing to send money or personal documents protects you from both financial loss and identity theft.',
                hi: 'सुरक्षित निर्णय! कंपनी की आधिकारिक वेबसाइट पर स्वतंत्र रूप से जांच करना और पैसे या दस्तावेज न भेजना आपको आर्थिक ठगी और पहचान की चोरी दोनों से बचाता है।',
                mr: 'सुरक्षित निर्णय! कंपनीची स्वतंत्रपणे पडताळणी करणे आणि पैसे किंवा कागदपत्रे न पाठवणे तुम्हाला आर्थिक फसवणूक आणि ओळख चोरीपासून वाचवते.'
              },
              detectedSigns: {
                en: ['Upfront registration fee demand (₹499)', 'Unverified ₹45,000/month offer on chat'],
                hi: ['₹499 रजिस्ट्रेशन फीस की मांग', 'चैट पर बिना इंटरव्यू ₹45,000 महीने का ऑफर'],
                mr: ['₹499 नोंदणी शुल्काची मागणी', 'चॅटवर ₹45,000 पगाराचे आमिष']
              },
              safeActionText: {
                en: 'Demanded independent company verification and refused payment',
                hi: 'स्वतंत्र कंपनी सत्यापन चुना और पैसे देने से इनकार किया',
                mr: 'स्वतंत्र कंपनी पडताळणी निवडली आणि पैसे देण्यास नकार दिला'
              }
            },
            {
              id: 'C',
              label: {
                en: 'C. 🪪 Send Aadhaar immediately',
                hi: 'C. 🪪 तुरंत अपना आधार कार्ड भेजें',
                mr: 'C. 🪪 तात्काळ आधार कार्ड पाठवा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'Your Aadhaar copy can be misused for mule bank accounts or SIM cards!',
                hi: 'आपके आधार कार्ड का दुरुपयोग फर्जी सिम या बैंक खाता खोलने में हो सकता है!',
                mr: 'तुमच्या आधार कार्डचा गैरवापर बनावट सिम किंवा बँक खात्यासाठी होऊ शकतो!'
              },
              consequenceDetail: {
                en: 'Scammers collect Aadhaar and PAN cards from fake job applicants to impersonate them in other cybercrimes.',
                hi: 'ठग नौकरी के नाम पर लोगों के आधार और पैन कार्ड इकट्ठा करके उनका इस्तेमाल दूसरे साइबर अपराधों में करते हैं।',
                mr: 'भामटे नोकरीच्या नावाखाली आधार आणि पॅन कार्ड गोळा करून त्यांचा गैरवापर करतात.'
              },
              stopMessage: {
                en: 'Never send unmasked Aadhaar or identity documents to unverified recruiters on WhatsApp or Telegram.',
                hi: 'व्हाट्सएप या टेलीग्राम पर अनजान लोगों को कभी भी अपना आधार या पैन कार्ड न भेजें।',
                mr: 'व्हॉट्सअ‍ॅप किंवा टेलिग्रामवर अनोळखी लोकांना कधीही आधार किंवा पॅन कार्ड पाठवू नका.'
              },
              missedSigns: {
                en: ['Unverified recruiter on messaging app', 'Risk of identity document theft'],
                hi: ['मैसेजिंग ऐप पर असत्यापित रिक्रूटर', 'पहचान दस्तावेज चोरी का खतरा'],
                mr: ['मेसेजिंग ॲपवरील अनधिकृत व्यक्ती', 'ओळख चोरीचा धोका']
              }
            },
            {
              id: 'D',
              label: {
                en: 'D. 🏦 Share bank details',
                hi: 'D. 🏦 अपने बैंक खाते का विवरण और कार्ड नंबर साझा करें',
                mr: 'D. 🏦 बँक खात्याचा तपशील शेअर करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'The scammer tries to initiate unauthorized debits or use your account as a money-mule account!',
                hi: 'ठग आपके बैंक विवरण और OTP के जरिए खाता खाली करने या म्यूल अकाउंट बनाने की कोशिश करता है!',
                mr: 'भामटा तुमच्या बँक माहितीचा वापर करून फसवणूक करण्याचा प्रयत्न करतो!'
              },
              consequenceDetail: {
                en: 'They immediately ask for the "salary verification OTP" sent to your phone to drain your savings.',
                hi: 'इसके तुरंत बाद वे "सैलरी वेरिफिकेशन OTP" के नाम पर आपके फोन का OTP मांगकर पैसे निकाल लेते हैं।',
                mr: 'त्यानंतर ते "पगार पडताळणी OTP" च्या नावाखाली तुमचे पैसे काढून घेतात.'
              },
              stopMessage: {
                en: 'Never share sensitive banking credentials before verifying an employer through official corporate channels.',
                hi: 'किसी भी कंपनी की सत्यता जांचे बिना कभी भी अपनी बैंकिंग जानकारी साझा न करें।',
                mr: 'कंपनीची खात्री केल्याशिवाय कधीही बँक माहिती शेअर करू नका.'
              },
              missedSigns: {
                en: ['Unsolicited job offer', 'Premature request for financial data'],
                hi: ['अनजान जॉब ऑफर', 'शुरुआत में ही बैंक जानकारी मांगना'],
                mr: ['अनोळखी जॉब ऑफर', 'बँक माहितीची मागणी']
              }
            }
          ]
        },
        {
          stepIndex: 2,
          isAdaptation: true,
          adaptationLabel: {
            en: '🚨 ATTACK TECHNIQUE DETECTED: "Small Reward Bait + Prepaid Task Trap"',
            hi: '🚨 अटैक तकनीक पहचानी गई: "₹150 का छोटा लालच देकर बड़े पैसे फंसाना"',
            mr: '🚨 अटॅक तंत्र ओळखले: "₹150 चे आमिष दाखवून मोठी रक्कम अडकवणे"'
          },
          uiHeader: {
            en: '💬 TELEGRAM GROUP • Scammer Changes Strategy!',
            hi: '💬 टेलीग्राम ग्रुप • ठग ने अपनी चाल बदली!',
            mr: '💬 टेलिग्राम ग्रुप • भामट्याने आपली चाल बदलली!'
          },
          sender: 'Task Manager (Telegram VIP Group)',
          message: {
            en: '"No problem! You don\'t need to pay ₹499 now. Just like this YouTube video and we will send you ₹150 FREE to prove we are genuine! Afterward, deposit ₹5,000 in our VIP Task Pool to earn ₹8,500 in 10 minutes!"',
            hi: '"कोई बात नहीं! अभी ₹499 मत दीजिए। बस इस यूट्यूब वीडियो को लाइक करें और हम भरोसा दिलाने के लिए आपको तुरंत ₹150 मुफ्त भेजेंगे! उसके बाद ₹5,000 जमा करके 10 मिनट में ₹8,500 कमाएं!"',
            mr: '"काही हरकत नाही! आत्ता ₹499 भरू नका. फक्त या यूट्यूब व्हिडिओला लाईक करा आणि आम्ही विश्वास पटवण्यासाठी तुम्हाला ₹150 पाठवतो! त्यानंतर ₹5,000 भरून ₹8,500 मिळवा!"'
          },
          technique: {
            badge: '🎁 Small Bait + 📢 Social Pressure',
            name: { en: 'Trust-Building Bait (Task Scam)', hi: 'भरोसा जीतने का चारा (Prepaid Task Scam)', mr: 'विश्वास संपादन करण्याचे आमिष (Task Scam)' },
            desc: {
              en: 'Scammers actually pay ₹150–₹300 initially to win your trust, so that you deposit ₹5,000 to ₹50,000 in the next round.',
              hi: 'ठग आपका भरोसा जीतने के लिए शुरुआत में सचमुच ₹150–₹300 भेजते हैं, ताकि आप लालच में आकर अगली बार ₹5,000 से ₹50,000 जमा कर दें।',
              mr: 'भामटे तुमचा विश्वास जिंकण्यासाठी सुरुवातीला खरोखर ₹150 देतात, जेणेकरून तुम्ही पुढच्या फेरीत हजारो रुपये गुंतवाल.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 💰 Deposit ₹5,000 into the VIP Task Pool since they seemed trustworthy',
                hi: 'A. 💰 ₹150 मिलने के बाद भरोसा करके VIP टास्क के लिए ₹5,000 जमा कर दें',
                mr: 'A. 💰 ₹150 मिळाल्यामुळे विश्वास ठेवून ₹5,000 जमा करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'Your ₹5,000 is frozen! Now they demand ₹25,000 more to "unlock" your withdrawal!',
                hi: 'आपके ₹5,000 फंस गए! अब वे पैसे निकालने के लिए ₹25,000 का नया टास्क पूरा करने की शर्त रख रहे हैं!',
                mr: 'तुमचे ₹5,000 अडकले! आता ते पैसे काढण्यासाठी आणखी ₹25,000 भरण्यास सांगत आहेत!'
              },
              consequenceDetail: {
                en: 'The initial ₹150 was bait funded by money stolen from other victims.',
                hi: 'शुरुआत में दिए गए ₹150 केवल आपको फंसाने का चारा (Bait) थे।',
                mr: 'सुरुवातीला दिलेले ₹150 हे फक्त तुम्हाला अडकवण्याचे आमिष होते.'
              },
              stopMessage: {
                en: 'Never deposit money to unlock online tasks or withdraw virtual earnings.',
                hi: 'ऑनलाइन टास्क अनलॉक करने या पैसे निकालने के लिए कभी भी अपनी तरफ से पैसे जमा न करें।',
                mr: 'ऑनलाइन टास्कसाठी किंवा पैसे काढण्यासाठी कधीही स्वतःचे पैसे भरू नका.'
              },
              missedSigns: {
                en: ['Classic ₹150 trust-building bait', 'Demand for ₹5,000 prepaid task deposit'],
                hi: ['भरोसा जीतने वाला ₹150 का चारा', '₹5,000 प्रीपेड टास्क डिपॉजिट की मांग'],
                mr: ['विश्वास जिंकण्यासाठी दिलेले ₹150 चे आमिष', '₹5,000 डिपॉझिटची मागणी']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🛡️ Exit the group immediately and never deposit money for "VIP tasks"',
                hi: 'B. 🛡️ ग्रुप से तुरंत बाहर निकलें और "VIP टास्क" के नाम पर एक रुपया भी जमा न करें',
                mr: 'B. 🛡️ ग्रुपमधून तात्काळ बाहेर पडा आणि टास्कसाठी एकही रुपया भरू नका'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Well done! You recognized the "₹150 initial payout bait" used in Telegram task scams and exited before losing money.',
                hi: 'बहुत खूब! आपने टेलीग्राम टास्क स्कैम के "₹150 के शुरुआती लालच" को पहचान लिया और अपने हजारों रुपये बचा लिए।',
                mr: 'शाब्बास! तुम्ही टेलिग्राम टास्क स्कॅममधील "₹150 च्या आमिषाची" चाल ओळखली आणि स्वतःचे पैसे वाचवले.'
              },
              detectedSigns: {
                en: ['Small ₹150 bait to build false trust', 'Unrealistic ₹8,500 return in 10 minutes'],
                hi: ['झूठा भरोसा बनाने के लिए ₹150 का चारा', '10 मिनट में ₹8,500 कमाने का असंभव दावा'],
                mr: ['खोटा विश्वास निर्माण करण्यासाठी ₹150 चे आमिष', '10 मिनिटांत ₹8,500 मिळण्याचा खोटा दावा']
              },
              safeActionText: {
                en: 'Exited Telegram task group without depositing any money',
                hi: 'बिना पैसे जमा किए तुरंत टेलीग्राम ग्रुप छोड़ दिया',
                mr: 'पैसे न भरता तात्काळ टेलिग्राम ग्रुप सोडला'
              }
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 04: DIGITAL ARREST SCAM
    // -------------------------------------------------------------------------
    {
      id: 'digital_arrest',
      number: '04',
      voiceTopicKey: 'digital_arrest_scam',
      voiceSampleQuery: {
        en: 'Caller says my Aadhaar is used in illegal parcel and police put me under digital arrest on video call',
        hi: 'कॉल करने वाला कह रहा है कि मेरे आधार से अवैध पार्सल मिला है और वीडियो कॉल पर डिजिटल अरेस्ट कर रहे हैं',
        mr: 'माझ्या आधार कार्डवर बेकायदेशीर पार्सल सापडले असून व्हिडिओ कॉलवर डिजिटल अरेस्ट केल्याचे सांगत आहेत'
      },
      title: {
        en: 'MISSION 04 — DIGITAL ARREST SCAM (SIMULATED SCENARIO)',
        hi: 'मिशन 04 — डिजिटल अरेस्ट घोटाला (SIMULATED SCENARIO)',
        mr: 'मिशन 04 — डिजिटल अरेस्ट फसवणूक (SIMULATED SCENARIO)'
      },
      shortTitle: {
        en: 'Digital Arrest Scam',
        hi: 'डिजिटल अरेस्ट घोटाला',
        mr: 'डिजिटल अरेस्ट फसवणूक'
      },
      icon: '👮',
      channelType: 'call',
      isSimulatedCallLabel: true,
      totalWarnings: 6,
      totalTechniques: 3,
      strengths: {
        en: ['Knowing "Digital Arrest" does not exist in Indian law', 'Refusing video-call interrogation and "verification account" transfers'],
        hi: ['यह जानना कि भारतीय कानून में "डिजिटल अरेस्ट" नाम की कोई चीज नहीं है', 'वीडियो कॉल पर पूछताछ और पैसे ट्रांसफर करने से मना करना'],
        mr: ['भारतीय कायद्यात "डिजिटल अरेस्ट" असा प्रकार नसल्याचे जाणणे', 'व्हिडिओ कॉलवरील चौकशी आणि पैसे पाठवण्यास नकार देणे']
      },
      practiceAreas: {
        en: ['Staying calm when scammers use fake police/CBI/customs titles', 'Consulting family and local police instead of isolating yourself'],
        hi: ['नकली पुलिस/CBI के नाम से डराए जाने पर शांत रहना', 'कमरे में बंद होने के बजाय परिवार और स्थानीय पुलिस से बात करना'],
        mr: ['बनावट पोलीस/CBI च्या धमक्यांना न घाबरणे', 'घरातल्यांशी आणि स्थानिक पोलिसांशी संपर्क साधणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '📞 SIMULATED SCENARIO — INCOMING AUTOMATED & VIDEO CALL',
            hi: '📞 सिम्युलेटेड परिदृश्य (SIMULATED SCENARIO) — फर्जी वीडियो कॉल',
            mr: '📞 सिम्युलेटेड प्रसंग (SIMULATED SCENARIO) — बनावट व्हिडिओ कॉल'
          },
          sender: 'Unknown Caller (Claiming Courier / Narcotics Cell)',
          message: {
            en: '[SIMULATED SCENARIO]\n"Your Aadhaar has been involved in illegal activity. A parcel sent in your name contained banned items.\nWe are connecting you to the police on video call.\nYou must stay on video call in a locked room.\nYou must transfer money for official account verification."',
            hi: '[सिम्युलेटेड शैक्षणिक परिदृश्य]\n"आपके आधार कार्ड का इस्तेमाल अवैध गतिविधि में हुआ है। आपके नाम के पार्सल में गैर-कानूनी सामान मिला है।\nहम आपको वीडियो कॉल पर पुलिस से जोड़ रहे हैं।\nआपको कमरे में बंद रहकर वीडियो कॉल पर ही रहना होगा।\nजांच के लिए आपको अपने बैंक खाते के पैसे वेरिफिकेशन खाते में ट्रांसफर करने होंगे।"',
            mr: '[सिम्युलेटेड शैक्षणिक प्रसंग]\n"तुमच्या आधार कार्डचा वापर बेकायदेशीर कामात झाला आहे.\nआम्ही तुम्हाला व्हिडिओ कॉलवर पोलिसांशी जोडत आहोत.\nतुम्ही खोलीत बंद राहून व्हिडिओ कॉलवरच राहिले पाहिजे.\nपडताळणीसाठी तुम्हाला बँकेतील पैसे ट्रान्सफर करावे लागतील."'
          },
          technique: {
            badge: '👮 Authority + 😨 Extreme Fear',
            name: { en: 'Fake Law Enforcement & Isolation ("Digital Arrest")', hi: 'नकली कानून प्रवर्तन और डर ("डिजिटल अरेस्ट")', mr: 'बनावट पोलीस अधिकार आणि भीती ("डिजिटल अरेस्ट")' },
            desc: {
              en: 'Scammers impersonate customs/police officers and isolate you on a video call so you cannot verify the lie with your family or bank.',
              hi: 'ठग कस्टम या पुलिस का रूप धरकर आपको वीडियो कॉल पर अकेले रहने का दबाव बनाते हैं ताकि आप परिवार या असली पुलिस से सच्चाई का पता न लगा सकें।',
              mr: 'भामटे पोलीस किंवा कस्टम अधिकारी असल्याचे भासवून तुम्हाला व्हिडिओ कॉलवर एकटे ठेवतात जेणेकरून तुम्ही कुटुंबाशी बोलू शकणार नाही.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 💸 Stay on the video call and transfer money for "verification"',
                hi: 'A. 💸 डरकर वीडियो कॉल पर बने रहें और "वेरिफिकेशन" के लिए पैसे ट्रांसफर करें',
                mr: 'A. 💸 व्हिडिओ कॉलवर राहून "तपासणीसाठी" पैसे ट्रान्सफर करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'The "verification account" belongs to cyber criminals—your savings are stolen!',
                hi: 'वह "वेरिफिकेशन खाता" साइबर अपराधियों का था—आपकी जमा-पूंजी चोरी हो गई!',
                mr: 'ते "पडताळणी खाते" सायबर गुन्हेगारांचे होते—तुमचे पैसे चोरीला गेले!'
              },
              consequenceDetail: {
                en: 'Government agencies, police, CBI, and courts NEVER ask citizens to transfer money to prove innocence.',
                hi: 'भारत में पुलिस, CBI, RBI या कोई भी अदालत कभी भी खुद को निर्दोष साबित करने के लिए पैसे ट्रांसफर करने को नहीं कहती।',
                mr: 'पोलीस, CBI किंवा कोणतेही न्यायालय निर्दोष असल्याचे सिद्ध करण्यासाठी कधीही पैसे ट्रान्सफर करण्यास सांगत नाही.'
              },
              stopMessage: {
                en: 'There is NO legal process called "Digital Arrest" in India. Police never arrest or interrogate citizens over Skype/WhatsApp video calls.',
                hi: 'भारतीय कानून में "डिजिटल अरेस्ट" नाम की कोई कानूनी प्रक्रिया नहीं है। पुलिस कभी भी वीडियो कॉल पर गिरफ्तारी नहीं करती।',
                mr: 'भारतीय कायद्यात "डिजिटल अरेस्ट" असा कोणताही प्रकार नाही. पोलीस कधीही व्हिडिओ कॉलवर अटक करत नाहीत.'
              },
              missedSigns: {
                en: ['Demand to stay isolated on video call', 'Demand to transfer money for "audit/verification"', 'Unverified parcel seizure claim'],
                hi: ['वीडियो कॉल पर कमरे में बंद रहने का आदेश', 'जांच के नाम पर पैसे ट्रांसफर करने की मांग', 'पार्सल पकड़े जाने की झूठी कहानी'],
                mr: ['व्हिडिओ कॉलवर एकटे राहण्याची सक्ती', 'तपासणीसाठी पैसे पाठवण्याची मागणी', 'बनावट पार्सलची भीती']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🛑 Hang up the video call immediately, talk to family, and dial 1930 / local police',
                hi: 'B. 🛑 वीडियो कॉल तुरंत काटें, परिवार को बताएं और 1930 या नजदीकी थाने में संपर्क करें',
                mr: 'B. 🛑 व्हिडिओ कॉल तात्काळ बंद करा, कुटुंबाला सांगा आणि 1930 किंवा जवळच्या पोलीस ठाण्यात संपर्क करा'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Heroic defense! Disconnecting the call immediately breaks the scammer’s psychological control. Genuine law enforcement never conducts arrests or financial audits on video calls.',
                hi: 'शानदार निर्णय! कॉल तुरंत काट देने से ठग का मनोवैज्ञानिक दबाव टूट जाता है। असली पुलिस कभी भी वीडियो कॉल पर अरेस्ट या पैसों की जांच नहीं करती।',
                mr: 'उत्तम निर्णय! कॉल लगेच कट केल्यामुळे भामट्याचा दबाव संपतो. खरे पोलीस कधीही व्हिडिओ कॉलवर पैसे मागत नाहीत.'
              },
              detectedSigns: {
                en: ['Fake "Digital Arrest" threat', 'Order not to contact family', 'Demand for money transfer'],
                hi: ['"डिजिटल अरेस्ट" की फर्जी धमकी', 'परिवार से बात न करने का दबाव', 'पैसे ट्रांसफर करने की मांग'],
                mr: ['"डिजिटल अरेस्ट" ची बनावट धमकी', 'कुटुंबाशी न बोलण्याची सक्ती', 'पैसे पाठवण्याची मागणी']
              },
              safeActionText: {
                en: 'Disconnected fake video call and reported to 1930',
                hi: 'फर्जी वीडियो कॉल तुरंत काटा और 1930 पर सूचना दी',
                mr: 'बनावट व्हिडिओ कॉल बंद केला आणि 1930 वर कळवले'
              }
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 05: INVESTMENT SCAM
    // -------------------------------------------------------------------------
    {
      id: 'investment_scam',
      number: '05',
      voiceTopicKey: 'investment_scam',
      voiceSampleQuery: {
        en: 'WhatsApp stock trading group app shows high profit but asks for tax fee to withdraw my money',
        hi: 'व्हाट्सएप ट्रेडिंग ऐप में मुनाफा दिख रहा है लेकिन पैसे निकालने के लिए टैक्स मांग रहे हैं',
        mr: 'व्हॉट्सअ‍ॅप ट्रेडिंग ॲपमध्ये नफा दिसतोय पण पैसे काढण्यासाठी टॅक्स मागत आहेत'
      },
      title: {
        en: 'MISSION 05 — INVESTMENT & TRADING APP SCAM',
        hi: 'मिशन 05 — फर्जी निवेश और ट्रेडिंग ऐप घोटाला (INVESTMENT SCAM)',
        mr: 'मिशन 05 — बनावट गुंतवणूक आणि ट्रेडिंग ॲप फसवणूक'
      },
      shortTitle: {
        en: 'Investment Scam',
        hi: 'फर्जी निवेश घोटाला',
        mr: 'बनावट गुंतवणूक फसवणूक'
      },
      icon: '📈',
      channelType: 'whatsapp',
      totalWarnings: 5,
      totalTechniques: 2,
      strengths: {
        en: ['Rejecting unlisted APK trading apps and guaranteed 300% return claims', 'Refusing to pay fake "withdrawal taxes"'],
        hi: ['गूगल प्ले स्टोर के बाहर के अनजान APK ऐप और 300% गारंटीड मुनाफे के झूठ को पकड़ना', 'पैसे निकालने के नाम पर "विदड्रॉवल टैक्स" न देना'],
        mr: ['अधिकृत नसलेले APK ट्रेडिंग ॲप आणि हमखास नफ्याचे दावे नाकारणे', 'पैसे काढण्यासाठी खोटा टॅक्स न भरणे']
      },
      practiceAreas: {
        en: ['Verifying brokers on sebi.gov.in before investing', 'Recognizing fake group member profit screenshots'],
        hi: ['निवेश से पहले sebi.gov.in पर ब्रोकर का पंजीकरण जांचना', 'व्हाट्सएप ग्रुप में नकली सदस्यों के स्क्रीनशॉट से धोखा न खाना'],
        mr: ['गुंतवणूक करण्यापूर्वी sebi.gov.in वर नोंदणी तपासणे', 'ग्रुपमधील बनावट स्क्रीनशॉटला बळी न पडणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '📈 WHATSAPP VIP STOCK GROUP',
            hi: '📈 व्हाट्सएप VIP स्टॉक ट्रेडिंग ग्रुप',
            mr: '📈 व्हॉट्सअ‍ॅप VIP स्टॉक ट्रेडिंग ग्रुप'
          },
          sender: 'Prof. Mehta — Institutional VIP Trading',
          message: {
            en: '"Join our Institutional Block-Trade APK! Guaranteed 200% profit in 15 days with zero risk. 45 members in this group earned ₹5 Lakh today! Download InstitutionalTrade.apk and transfer ₹20,000 to start."',
            hi: '"हमारे इंस्टीट्यूशनल ट्रेडिंग APK से जुड़ें! बिना किसी जोखिम के 15 दिनों में 200% पक्का मुनाफा! आज इस ग्रुप के 45 सदस्यों ने ₹5 लाख कमाए हैं! अभी InstitutionalTrade.apk डाउनलोड करें और ₹20,000 जमा करें।"',
            mr: '"आमच्या ट्रेडिंग APK मध्ये सामील व्हा! कोणत्याही धोक्याशिवाय 15 दिवसांत 200% हमखास नफा! आज ग्रुपमधील 45 सदस्यांनी ₹5 लाख कमावले! InstitutionalTrade.apk डाऊनलोड करा आणि ₹20,000 भरा."'
          },
          technique: {
            badge: '💰 Greed + 📢 Social Pressure',
            name: { en: 'Guaranteed Profit Herd Mentality', hi: 'गारंटीड मुनाफे का लालच और भीड़ का दबाव', mr: 'हमखास नफ्याचे आमिष आणि समूहाचा दबाव' },
            desc: {
              en: 'Most "members" posting profit screenshots in the WhatsApp group are fake bots run by the same scam syndicate.',
              hi: 'व्हाट्सएप ग्रुप में मुनाफे के स्क्रीनशॉट डालने वाले ज्यादातर "सदस्य" उसी ठग गिरोह के नकली नंबर होते हैं।',
              mr: 'ग्रुपमध्ये नफ्याचे स्क्रीनशॉट टाकणारे बहुतेक सदस्य हे त्याच टोळीचे बनावट नंबर असतात.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 📲 Download the APK app and transfer ₹20,000',
                hi: 'A. 📲 APK ऐप डाउनलोड करें और ₹20,000 ट्रांसफर करें',
                mr: 'A. 📲 APK ॲप डाऊनलोड करा आणि ₹20,000 ट्रान्सफर करा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'The app shows fake digital numbers on screen while your real ₹20,000 was stolen!',
                hi: 'ऐप की स्क्रीन पर नकली मुनाफा दिखता है जबकि आपके असली ₹20,000 चोरी हो चुके हैं!',
                mr: 'ॲपमध्ये खोटे आकडे दिसतात पण तुमचे खरे ₹20,000 चोरीला गेले आहेत!'
              },
              consequenceDetail: {
                en: 'When you click "Withdraw", the fake app locks your balance and demands another ₹30,000 as "20% Tax".',
                hi: 'जब आप पैसे निकालने की कोशिश करते हैं, तो ऐप आपका खाता लॉक कर देता है और 20% टैक्स के नाम पर ₹30,000 और मांगता है।',
                mr: 'जेव्हा तुम्ही पैसे काढण्याचा प्रयत्न करता, तेव्हा ॲप आणखी ₹30,000 टॅक्सची मागणी करते.'
              },
              stopMessage: {
                en: 'No legitimate SEBI-registered investment guarantees 200% fixed returns or asks you to install APK files from WhatsApp.',
                hi: 'कोई भी वैध SEBI-पंजीकृत संस्था 200% गारंटीड रिटर्न नहीं देती और न ही व्हाट्सएप से APK फाइल डाउनलोड करवाती है।',
                mr: 'कोणतीही अधिकृत SEBI संस्था 200% हमखास परतावा देत नाही किंवा व्हॉट्सअ‍ॅपवरून APK इन्स्टॉल करायला सांगत नाही.'
              },
              missedSigns: {
                en: ['Guaranteed 200% return claim', 'Unverified .apk file download', 'Fake social proof in WhatsApp group'],
                hi: ['200% गारंटीड रिटर्न का असंभव दावा', 'अनजान .apk फाइल', 'व्हाट्सएप ग्रुप में नकली स्क्रीनशॉट'],
                mr: ['200% हमखास नफ्याचा दावा', 'अनोळखी .apk फाईल', 'ग्रुपमधील बनावट स्क्रीनशॉट']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🛡️ Exit the WhatsApp group and never install unlisted trading APK apps',
                hi: 'B. 🛡️ व्हाट्सएप ग्रुप से तुरंत बाहर निकलें और कभी भी अनजान ट्रेडिंग APK इंस्टॉल न करें',
                mr: 'B. 🛡️ व्हॉट्सअ‍ॅप ग्रुपमधून बाहेर पडा आणि अनोळखी ट्रेडिंग APK कधीही इन्स्टॉल करू नका'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Smart choice! You recognized the fake social pressure and guaranteed return trap.',
                hi: 'समझदारी भरा फैसला! आपने गारंटीड रिटर्न और नकली ग्रुप सदस्यों के जाल को तुरंत पहचान लिया।',
                mr: 'हुशार निर्णय! तुम्ही हमखास नफा आणि बनावट ग्रुप सदस्यांचा सापळा ओळखला.'
              },
              detectedSigns: {
                en: ['200% guaranteed profit promise', 'Instruction to install third-party APK'],
                hi: ['200% गारंटीड मुनाफे का झूठा वादा', 'थर्ड-पार्टी APK इंस्टॉल करने का निर्देश'],
                mr: ['200% हमखास नफ्याचे खोटे आश्वासन', 'अनोळखी APK डाऊनलोड करण्याची सूचना']
              },
              safeActionText: {
                en: 'Rejected unlisted trading APK and verified via SEBI guidelines',
                hi: 'अनजान ट्रेडिंग APK को अस्वीकार किया और सुरक्षित रहे',
                mr: 'अनोळखी ट्रेडिंग APK नाकारले आणि सुरक्षित राहिलात'
              }
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 06: FAKE CUSTOMER CARE
    // -------------------------------------------------------------------------
    {
      id: 'fake_customer_care',
      number: '06',
      voiceTopicKey: 'fake_customer_care',
      voiceSampleQuery: {
        en: 'Customer care number from Google asked me to install AnyDesk to refund my money',
        hi: 'गूगल से मिले कस्टमर केयर नंबर ने रिफंड के लिए AnyDesk डाउनलोड करने को कहा है',
        mr: 'गुगलवरून मिळालेल्या कस्टमर केअर नंबरने रिफंडसाठी AnyDesk डाऊनलोड करायला सांगितले आहे'
      },
      title: {
        en: 'MISSION 06 — FAKE CUSTOMER CARE SCAM',
        hi: 'मिशन 06 — फर्जी कस्टमर केयर नंबर घोटाला',
        mr: 'मिशन 06 — बनावट कस्टमर केअर नंबर फसवणूक'
      },
      shortTitle: {
        en: 'Fake Customer Care',
        hi: 'फर्जी कस्टमर केयर',
        mr: 'बनावट कस्टमर केअर'
      },
      icon: '🎧',
      channelType: 'call',
      totalWarnings: 5,
      totalTechniques: 2,
      strengths: {
        en: ['Refusing to install remote access apps (AnyDesk / TeamViewer)', 'Using only official in-app support channels'],
        hi: ['AnyDesk / TeamViewer जैसे स्क्रीन-शेयरिंग ऐप इंस्टॉल करने से मना करना', 'केवल आधिकारिक ऐप के अंदर दिए गए सपोर्ट विकल्प का उपयोग करना'],
        mr: ['AnyDesk / TeamViewer सारखे स्क्रीन-शेअरिंग ॲप न वापरणे', 'फक्त अधिकृत ॲपमधील सपोर्ट नंबर वापरणे']
      },
      practiceAreas: {
        en: ['Avoiding personal 10-digit mobile numbers listed as "Helplines" on search engines'],
        hi: ['सर्च इंजन या मैप्स पर लिखे 10 अंकों के निजी मोबाइल नंबरों को कस्टमर केयर न समझना'],
        mr: ['गुगल सर्चवरील 10 अंकी वैयक्तिक मोबाईल नंबरवर विश्वास न ठेवणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '🎧 CUSTOMER CARE CALL (Found via Web Search)',
            hi: '🎧 कस्टमर केयर कॉल (वेब सर्च से मिला नंबर)',
            mr: '🎧 कस्टमर केअर कॉल (वेब सर्चवरून मिळालेला नंबर)'
          },
          sender: 'Fake Support Agent (+91 82XXX XXXXX)',
          message: {
            en: '"Sir, to process your ₹350 courier refund immediately, please download the \'AnyDesk\' Customer Support App from Play Store and tell me the 9-digit remote address code shown on your screen."',
            hi: '"सर, आपके ₹350 के कूरियर रिफंड को तुरंत आपके खाते में भेजने के लिए कृपया प्ले स्टोर से \'AnyDesk\' सपोर्ट ऐप डाउनलोड करें और स्क्रीन पर दिखने वाला 9 अंकों का कोड मुझे बताएं।"',
            mr: '"सर, तुमचा ₹350 चा रिफंड लगेच खात्यात पाठवण्यासाठी कृपया \'AnyDesk\' ॲप डाऊनलोड करा आणि स्क्रीनवर दिसणारा 9 अंकी कोड मला सांगा."'
          },
          technique: {
            badge: '🧑‍💼 Impersonation + 🖥️ Screen Takeover',
            name: { en: 'Remote Screen-Sharing Takeover', hi: 'रिमोट स्क्रीन-शेयरिंग के जरिए फोन पर कब्जा', mr: 'स्क्रीन-शेअरिंग ॲपद्वारे फोनचा ताबा घेणे' },
            desc: {
              en: 'AnyDesk or TeamViewer lets the scammer watch your entire phone screen live—including every password and banking OTP that arrives!',
              hi: 'AnyDesk का 9 अंकों का कोड बताते ही ठग को आपके फोन की पूरी स्क्रीन लाइव दिखने लगती है और वह आपके बैंक OTP पढ़कर सारा पैसा उड़ा लेता है।',
              mr: 'AnyDesk चा कोड सांगताच भामट्याला तुमच्या फोनची पूर्ण स्क्रीन दिसते आणि तो तुमचे बँक OTP वाचू शकतो.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 🖥️ Install AnyDesk and share the 9-digit screen code for the ₹350 refund',
                hi: 'A. 🖥️ ₹350 रिफंड पाने के लिए AnyDesk इंस्टॉल करें और 9 अंकों का कोड बताएं',
                mr: 'A. 🖥️ ₹350 रिफंडसाठी AnyDesk इन्स्टॉल करून 9 अंकी कोड सांगा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'The scammer can now see your phone screen live and read all your SMS OTPs!',
                hi: 'अब ठग आपके फोन की पूरी स्क्रीन लाइव देख रहा है और आपके सारे बैंक OTP पढ़ सकता है!',
                mr: 'आता भामटा तुमच्या फोनची स्क्रीन थेट पाहत आहे आणि सर्व बँक OTP वाचू शकतो!'
              },
              consequenceDetail: {
                en: 'For a ₹350 refund, your entire bank savings were exposed to remote control.',
                hi: 'मात्र ₹350 के रिफंड के चक्कर में आपके पूरे बैंक खाते का नियंत्रण ठग के पास चला गया।',
                mr: 'फक्त ₹350 च्या रिफंडसाठी तुमच्या पूर्ण बँक खात्याचा ताबा भामट्याकडे गेला.'
              },
              stopMessage: {
                en: 'Real customer support agents NEVER ask you to install AnyDesk, RustDesk, or TeamViewer.',
                hi: 'कोई भी असली कस्टमर केयर अधिकारी कभी भी AnyDesk, RustDesk या TeamViewer ऐप डाउनलोड करने को नहीं कहता।',
                mr: 'कोणताही खरा ग्राहक सेवा प्रतिनिधी कधीही AnyDesk किंवा TeamViewer डाऊनलोड करायला सांगत नाही.'
              },
              missedSigns: {
                en: ['10-digit mobile number claiming to be toll-free support', 'Request to install AnyDesk remote app'],
                hi: ['कस्टमर केयर के नाम पर 10 अंकों का निजी मोबाइल नंबर', 'AnyDesk स्क्रीन-शेयरिंग ऐप डाउनलोड करने की मांग'],
                mr: ['कस्टमर केअरच्या नावाखाली 10 अंकी मोबाईल नंबर', 'AnyDesk डाऊनलोड करण्याची मागणी']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 🛡️ Hang up immediately and raise support tickets only inside the official app',
                hi: 'B. 🛡️ तुरंत फोन काटें और केवल आधिकारिक ऐप के अंदर के Help सेक्शन का उपयोग करें',
                mr: 'B. 🛡️ तात्काळ फोन कट करा आणि फक्त अधिकृत ॲपमधील Help सेक्शनचा वापर करा'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Great instinct! You protected your device from remote screen-sharing takeover.',
                hi: 'शानदार समझदारी! आपने अपने फोन को रिमोट स्क्रीन-शेयरिंग के खतरे से पूरी तरह बचा लिया।',
                mr: 'उत्तम निर्णय! तुम्ही तुमचा फोन स्क्रीन-शेअरिंग हॅक होण्यापासून वाचवला.'
              },
              detectedSigns: {
                en: ['Demand to install remote access app (AnyDesk)', 'Unverified support number from web search'],
                hi: ['रिमोट एक्सेस ऐप (AnyDesk) डाउनलोड करने की मांग', 'गूगल सर्च से मिला असत्यापित नंबर'],
                mr: ['AnyDesk ॲप डाऊनलोड करण्याची मागणी', 'वेब सर्चवरून मिळालेला अनधिकृत नंबर']
              },
              safeActionText: {
                en: 'Refused screen-sharing app and used official in-app support',
                hi: 'स्क्रीन-शेयरिंग ऐप से इनकार किया और आधिकारिक ऐप सपोर्ट चुना',
                mr: 'स्क्रीन-शेअरिंग ॲप नाकारले आणि अधिकृत ॲप सपोर्ट निवडला'
              }
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 07: PHISHING EMAIL (MULTI-SELECT WARNING SIGN INSPECTOR)
    // -------------------------------------------------------------------------
    {
      id: 'phishing_email',
      number: '07',
      voiceTopicKey: 'phishing',
      voiceSampleQuery: {
        en: 'Mere saath phishing attack ho gaya hai kya karen',
        hi: 'मेरे साथ फिशिंग अटैक हो गया है क्या करें',
        mr: 'माझ्यावर फिशिंग अटॅक झाला आहे काय करू'
      },
      title: {
        en: 'MISSION 07 — PHISHING EMAIL INSPECTION',
        hi: 'मिशन 07 — फिशिंग ईमेल की पहचान (PHISHING EMAIL)',
        mr: 'मिशन 07 — फिशिंग ईमेलची तपासणी (PHISHING EMAIL)'
      },
      shortTitle: {
        en: 'Phishing Email',
        hi: 'फिशिंग ईमेल',
        mr: 'फिशिंग ईमेल'
      },
      icon: '📧',
      channelType: 'email',
      totalWarnings: 5,
      totalTechniques: 3,
      strengths: {
        en: ['Identifying spoofed sender domains and malicious attachments', 'Spotting credential-harvesting URLs before clicking'],
        hi: ['फर्जी ईमेल आईडी (Sender Domain) और खतरनाक अटैचमेंट पहचानना', 'पासवर्ड चुराने वाले फिशिंग लिंक को क्लिक करने से पहले पकड़ना'],
        mr: ['बनावट ईमेल आयडी आणि धोकादायक अटॅचमेंट ओळखणे', 'पासवर्ड चोरणाऱ्या फिशिंग लिंकची आधीच ओळख पटवणे']
      },
      practiceAreas: {
        en: ['Hovering over links to check the actual destination domain', 'Never opening .apk or .zip attachments from unknown emails'],
        hi: ['किसी भी लिंक पर क्लिक करने से पहले उसका असली डोमेन नाम देखना', 'अनजान ईमेल में आई .apk या .zip फाइल कभी न खोलना'],
        mr: ['लिंकवर क्लिक करण्यापूर्वी मूळ डोमेन तपासणे', 'अनोळखी ईमेलमधील .apk किंवा .zip फाईल न उघडणे']
      },
      steps: [
        {
          stepIndex: 1,
          isMultiSelect: true,
          uiHeader: {
            en: '📧 INBOX — SIMULATED EMAIL VIEWER',
            hi: '📧 इनबॉक्स — सिम्युलेटेड ईमेल दर्शक',
            mr: '📧 इनबॉक्स — सिम्युलेटेड ईमेल व्ह्यूअर'
          },
          emailMeta: {
            sender: 'Bank Security Alert <support@onlinesbi-verify-account.xyz>',
            subject: {
              en: 'URGENT: Your Account Will Be Frozen in 30 Minutes — Action Required!',
              hi: 'अति आवश्यक (URGENT): आपका खाता 30 मिनट में फ्रीज हो जाएगा — तुरंत कार्रवाई करें!',
              mr: 'अतिशय महत्त्वाचे (URGENT): तुमचे खाते 30 मिनिटांत गोठवले जाईल — तात्काळ कृती करा!'
            },
            attachment: '📄 Account_Security_Update.apk.zip (1.8 MB)',
            link: 'http://bit.ly/verify-bank-password-otp-now'
          },
          message: {
            en: 'Dear Valued Customer,\n\nWe detected unauthorized access on your account. Your NetBanking will be permanently frozen within 30 minutes unless you download the attached security tool or click the link below to enter your Login Password, ATM PIN, and OTP (123456 — SIMULATION ONLY).\n\n👉 Click Here: http://bit.ly/verify-bank-password-otp-now',
            hi: 'प्रिय ग्राहक,\n\nआपके खाते में संदिग्ध गतिविधि पाई गई है। यदि आपने अगले 30 मिनट के भीतर नीचे दिए गए अटैचमेंट को डाउनलोड नहीं किया या लिंक पर क्लिक करके अपना लॉगिन पासवर्ड, एटीएम पिन और OTP (123456 — केवल सिम्युलेशन) दर्ज नहीं किया, तो आपका खाता हमेशा के लिए बंद कर दिया जाएगा।\n\n👉 यहाँ क्लिक करें: http://bit.ly/verify-bank-password-otp-now',
            mr: 'प्रिय ग्राहक,\n\nतुमच्या खात्यावर संशयास्पद हालचाल आढळली आहे. पुढील 30 मिनिटांत खालील अटॅचमेंट डाऊनलोड न केल्यास किंवा लिंकवर क्लिक करून तुमचा पासवर्ड, पिन आणि OTP (123456 — फक्त सिम्युलेशन) न भरल्यास तुमचे खाते कायमचे बंद केले जाईल.\n\n👉 येथे क्लिक करा: http://bit.ly/verify-bank-password-otp-now'
          },
          technique: {
            badge: '🚨 Urgency + 🔗 Suspicious Link + 🧑‍💼 Impersonation',
            name: { en: 'Multi-Vector Phishing Trap', hi: 'फिशिंग ईमेल के 5 बड़े खतरे के संकेत', mr: 'फिशिंग ईमेलमधील 5 प्रमुख धोक्याची चिन्हे' },
            desc: {
              en: 'This email combines all 5 classic phishing indicators: a fake ".xyz" sender address, a 30-minute panic threat, an executable ".apk.zip" malware attachment, a shortened URL, and a demand for passwords/OTPs.',
              hi: 'इस फिशिंग ईमेल में ठगी के पांचों संकेत मौजूद हैं: फर्जी ".xyz" ईमेल आईडी, 30 मिनट की धमकी, खतरनाक ".apk.zip" अटैचमेंट, छोटा संदिग्ध URL और पासवर्ड/OTP की मांग।',
              mr: 'या फिशिंग ईमेलमध्ये फसवणुकीची सर्व 5 चिन्हे आहेत: बनावट ".xyz" ईमेल पत्ता, 30 मिनिटांची धमकी, धोकादायक ".apk.zip" फाईल, संशयास्पद लिंक आणि पासवर्ड/OTP ची मागणी.'
            }
          },
          multiSelectChoices: [
            {
              id: 'sender',
              label: {
                en: 'Suspicious sender (support@onlinesbi-verify-account.xyz)',
                hi: 'संदिग्ध भेजने वाला (Suspicious sender: .xyz डोमेन)',
                mr: 'संशयास्पद प्रेषक (Suspicious sender: .xyz डोमेन)'
              },
              isCorrect: true
            },
            {
              id: 'urgent',
              label: {
                en: 'Urgent language ("Frozen in 30 Minutes")',
                hi: 'जल्दबाजी और डर की भाषा (Urgent language: "30 मिनट में खाता बंद")',
                mr: 'तातडीची आणि भीतीदायक भाषा (Urgent language: "30 मिनिटांत खाते बंद")'
              },
              isCorrect: true
            },
            {
              id: 'attachment',
              label: {
                en: 'Unexpected attachment (Account_Security_Update.apk.zip)',
                hi: 'अनपेक्षित खतरनाक अटैचमेंट (Unexpected attachment: .apk.zip)',
                mr: 'अनपेक्षित धोकादायक अटॅचमेंट (Unexpected attachment: .apk.zip)'
              },
              isCorrect: true
            },
            {
              id: 'url',
              label: {
                en: 'Suspicious URL (http://bit.ly/verify-bank-password-otp-now)',
                hi: 'संदिग्ध लिंक / URL (Suspicious URL: bit.ly)',
                mr: 'संशयास्पद लिंक / URL (Suspicious URL: bit.ly)'
              },
              isCorrect: true
            },
            {
              id: 'credentials',
              label: {
                en: 'Request for credentials (Login Password, ATM PIN & OTP)',
                hi: 'पासवर्ड, पिन और OTP की मांग (Request for credentials)',
                mr: 'पासवर्ड, पिन आणि OTP ची मागणी (Request for credentials)'
              },
              isCorrect: true
            }
          ],
          multiSelectExplanation: {
            en: 'All 5 warning signs are present in this phishing email! Real banks never send emails from ".xyz" domains, never attach ".apk" files, and never ask you to click a link to enter your password, PIN, or OTP.',
            hi: 'इस फिशिंग ईमेल में ये पांचों खतरे के संकेत (All 5 Warning Signs) मौजूद हैं! असली बैंक कभी भी ".xyz" डोमेन से ईमेल नहीं भेजते, कभी ".apk" फाइल अटैच नहीं करते और कभी भी लिंक पर क्लिक करके पासवर्ड या OTP डालने को नहीं कहते।',
            mr: 'या फिशिंग ईमेलमध्ये ही सर्व 5 धोक्याची चिन्हे आहेत! अधिकृत बँका कधीही ".xyz" वरून ईमेल पाठवत नाहीत, ".apk" फाईल जोडत नाहीत आणि पासवर्ड किंवा OTP मागत नाहीत.'
          }
        }
      ]
    },

    // -------------------------------------------------------------------------
    // MISSION 08: SOCIAL MEDIA ACCOUNT SCAM
    // -------------------------------------------------------------------------
    {
      id: 'social_media_scam',
      number: '08',
      voiceTopicKey: 'whatsapp_social_scam',
      voiceSampleQuery: {
        en: 'Mera Instagram ya WhatsApp account hack ho gaya hai aur dosto se paise maang rahe hain',
        hi: 'मेरा इंस्टाग्राम या व्हाट्सएप अकाउंट हैक हो गया है और दोस्तों से पैसे मांग रहे हैं',
        mr: 'माझे इंस्टाग्राम किंवा व्हॉट्सअ‍ॅप अकाउंट हॅक झाले आहे आणि मित्रांकडे पैसे मागत आहेत'
      },
      title: {
        en: 'MISSION 08 — SOCIAL MEDIA IMPERSONATION & ACCOUNT TAKEOVER',
        hi: 'मिशन 08 — सोशल मीडिया इम्पर्सनेशन और अकाउंट हैक घोटाला',
        mr: 'मिशन 08 — सोशल मीडिया बनावट ओळख आणि अकाउंट हॅक फसवणूक'
      },
      shortTitle: {
        en: 'Social Media Scam',
        hi: 'सोशल मीडिया घोटाला',
        mr: 'सोशल मीडिया फसवणूक'
      },
      icon: '💬',
      channelType: 'whatsapp',
      totalWarnings: 5,
      totalTechniques: 2,
      strengths: {
        en: ['Always calling the friend on their original known phone number before sending emergency money', 'Protecting 6-digit account login verification codes'],
        hi: ['आपातकालीन पैसे भेजने से पहले हमेशा दोस्त के पुराने असली नंबर पर कॉल करके पुष्टि करना', '6 अंकों का व्हाट्सएप/इंस्टाग्राम लॉगिन कोड किसी को न बताना'],
        mr: ['आपत्कालीन पैसे पाठवण्यापूर्वी मित्राच्या मूळ फोन नंबरवर कॉल करून खात्री करणे', '6 अंकी लॉगिन व्हेरिफिकेशन कोड कोणालाही न देणे']
      },
      practiceAreas: {
        en: ['Not trusting WhatsApp/Instagram display photos blindly', 'Enabling Two-Step Verification (2FA) on all social accounts'],
        hi: ['केवल प्रोफाइल फोटो (DP) देखकर अनजान नंबर पर भरोसा न करना', 'सभी सोशल मीडिया ऐप्स में Two-Step Verification चालू रखना'],
        mr: ['फक्त प्रोफाईल फोटो (DP) पाहून अनोळखी नंबरवर विश्वास न ठेवणे', 'सर्व सोशल मीडियावर Two-Step Verification सुरू ठेवणे']
      },
      steps: [
        {
          stepIndex: 1,
          uiHeader: {
            en: '💬 WHATSAPP MESSAGE (From New Number with Friend’s Photo)',
            hi: '💬 व्हाट्सएप मैसेज (नए नंबर पर आपके दोस्त की फोटो लगी है)',
            mr: '💬 व्हॉट्सअ‍ॅप मेसेज (नवीन नंबरवर तुमच्या मित्राचा फोटो आहे)'
          },
          sender: 'Rohit (New Number +91 91XXX XXXXX)',
          message: {
            en: '"Hey! This is my new number. I am at City Hospital right now—my mother had a sudden medical emergency and my UPI limit is exhausted. Can you urgently transfer ₹15,000 to this medical store UPI ID? I will return it by 8 PM tonight. Please don\'t call, I am inside the ICU."',
            hi: '"भाई! यह मेरा नया नंबर है। मैं अभी सिटी अस्पताल में हूँ—मेरी माँ की अचानक तबीयत खराब हो गई है और मेरी UPI लिमिट खत्म हो गई है। क्या तुम तुरंत इस मेडिकल स्टोर की UPI ID पर ₹15,000 भेज सकते हो? मैं रात 8 बजे तक वापस कर दूंगा। प्लीज कॉल मत करना, मैं ICU के अंदर हूँ।"',
            mr: '"अरे! हा माझा नवीन नंबर आहे. मी आत्ता हॉस्पिटलमध्ये आहे—माझ्या आईची तब्येत अचानक बिघडली असून माझी UPI लिमिट संपली आहे. तू तातडीने या मेडिकल स्टोअरच्या UPI ID वर ₹15,000 पाठवू शकतोस का? मी रात्री 8 वाजेपर्यंत परत देतो. प्लीज कॉल करू नकोस, मी ICU मध्ये आहे."'
          },
          technique: {
            badge: '❤️ Emotional Manipulation + 🧑‍💼 Impersonation',
            name: { en: 'Friend-in-Need Medical Emergency Trap', hi: 'भावनात्मक ब्लैकमेल और दोस्त की नकली प्रोफाइल (DP)', mr: 'भावनिक दबाव आणि मित्राचा बनावट फोटो' },
            desc: {
              en: 'Scammers download your friend’s public photo, set it as their WhatsApp DP, and invent an ICU emergency so you send money without calling them.',
              hi: 'ठग आपके दोस्त की फोटो लगाकर नया व्हाट्सएप बनाते हैं और ICU का बहाना बनाते हैं ताकि आप बिना कॉल किए भावनाओं में बहकर पैसे भेज दें।',
              mr: 'भामटे तुमच्या मित्राचा फोटो वापरून ICU चे कारण सांगतात जेणेकरून तुम्ही फोन न करता भावनिक होऊन पैसे पाठवाल.'
            }
          },
          options: [
            {
              id: 'A',
              label: {
                en: 'A. 💸 Send ₹15,000 immediately to help your friend in the hospital',
                hi: 'A. 💸 दोस्त की मदद के लिए तुरंत ₹15,000 ट्रांसफर कर दें',
                mr: 'A. 💸 मित्राला मदत करण्यासाठी लगेच ₹15,000 पाठवा'
              },
              isSafe: false,
              consequenceTitle: {
                en: 'It was an impersonator—your real friend was sitting safely at home!',
                hi: 'वह एक बहरूपिया ठग था—आपका असली दोस्त अपने घर पर सुरक्षित बैठा था!',
                mr: 'तो एक तोतया भामटा होता—तुमचा खरा मित्र घरी सुरक्षित होता!'
              },
              consequenceDetail: {
                en: 'Anyone can copy a profile picture and name on WhatsApp. Because you did not call your friend’s original number, ₹15,000 went to a scammer.',
                hi: 'व्हाट्सएप पर कोई भी किसी की फोटो कॉपी करके लगा सकता है। पुराने नंबर पर कॉल न करने की वजह से ₹15,000 ठग के पास चले गए।',
                mr: 'व्हॉट्सअ‍ॅपवर कोणीही फोटो कॉपी करू शकतो. मूळ नंबरवर फोन न केल्यामुळे तुमचे ₹15,000 गेले.'
              },
              stopMessage: {
                en: 'Always call your friend or relative on their ORIGINAL saved phone number to hear their voice before sending any emergency money.',
                hi: 'आपातकालीन पैसे भेजने से पहले हमेशा अपने दोस्त या रिश्तेदार के पुराने असली नंबर पर सीधे कॉल करके उनकी आवाज जरूर सुनें।',
                mr: 'तातडीचे पैसे पाठवण्यापूर्वी नेहमी मित्राच्या मूळ फोन नंबरवर कॉल करून त्यांच्याशी थेट बोला.'
              },
              missedSigns: {
                en: ['Message from an unknown new phone number', 'Excuse to avoid speaking on a voice call ("Inside ICU")', 'Urgent ₹15,000 transfer to third-party UPI ID'],
                hi: ['अनजान नए नंबर से मैसेज', 'फोन कॉल पर बात न करने का बहाना ("ICU में हूँ")', 'तुरंत ₹15,000 भेजने का भावनात्मक दबाव'],
                mr: ['अनोळखी नवीन नंबरवरून मेसेज', 'फोनवर न बोलण्याचे कारण ("ICU मध्ये आहे")', 'तातडीने ₹15,000 पाठवण्याचा भावनिक दबाव']
              }
            },
            {
              id: 'B',
              label: {
                en: 'B. 📞 Call your friend directly on their original, saved phone number to verify first',
                hi: 'B. 📞 पैसे भेजने से पहले अपने दोस्त के पुराने (असली) नंबर पर सीधे कॉल करके सच्चाई जांचें',
                mr: 'B. 📞 पैसे पाठवण्यापूर्वी मित्राच्या मूळ सेव्ह केलेल्या नंबरवर कॉल करून खात्री करा'
              },
              isSafe: true,
              safeExplanation: {
                en: 'Outstanding! A 30-second phone call to your friend’s real number immediately exposed the impersonation scam.',
                hi: 'शानदार! दोस्त के असली नंबर पर मात्र 30 सेकंड कॉल करने से तुरंत पता चल गया कि वह मैसेज नकली था।',
                mr: 'उत्कृष्ट! मित्राच्या मूळ नंबरवर केलेल्या एका फोनमुळे ही फसवणूक तात्काळ उघड झाली.'
              },
              detectedSigns: {
                en: ['New number using friend’s profile photo', 'Refusal to take voice calls', 'Emotional urgency'],
                hi: ['दोस्त की फोटो लगा नया अनजान नंबर', 'कॉल पर बात करने से मना करना', 'भावनात्मक जल्दबाजी'],
                mr: ['मित्राचा फोटो असलेला नवीन नंबर', 'फोनवर बोलण्यास टाळाटाळ', 'भावनिक घाई']
              },
              safeActionText: {
                en: 'Verified directly via original phone number before acting',
                hi: 'कोई भी पैसा भेजने से पहले पुराने नंबर पर कॉल करके पुष्टि की',
                mr: 'पैसे पाठवण्यापूर्वी मूळ नंबरवर फोन करून खात्री केली'
              }
            }
          ]
        }
      ]
    }
  ];

  // ============================================================================
  // SIMULATOR STATE & RENDERING CONTROLLER
  // ============================================================================
  function mountScamSimulator(containerEl) {
    if (!containerEl || containerEl.dataset.simInitialized === 'true') return;
    containerEl.dataset.simInitialized = 'true';

    let progress = loadProgress();
    let viewMode = 'intro'; // 'intro' | 'playing' | 'feedback' | 'report'
    let activeMissionIdx = 0;
    let activeStepIdx = 0;
    let selectedOutcome = null;
    let selectedMultiIds = new Set();
    let multiSelectError = false;

    // Session metrics for current mission
    let sessionStats = {
      decisions: 0,
      safeDecisions: 0,
      riskyDecisions: 0,
      warningsDetected: 0,
      techniquesRecognized: 0
    };

    function resetSessionStats() {
      sessionStats = {
        decisions: 0,
        safeDecisions: 0,
        riskyDecisions: 0,
        warningsDetected: 0,
        techniquesRecognized: 0
      };
      selectedOutcome = null;
      selectedMultiIds.clear();
      multiSelectError = false;
    }

    function esc(s) {
      return String(s || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function render() {
      const lang = getLang();
      const t = UI_STRINGS[lang] || UI_STRINGS.en;
      const mission = MISSIONS[activeMissionIdx] || MISSIONS[0];
      const step = mission.steps[activeStepIdx] || mission.steps[0];

      // Build Mission Selector Pills
      const missionTabsHtml = MISSIONS.map((m, idx) => {
        const isUnlocked = progress.unlockAll || idx < progress.unlockedUpTo || progress.completedMissions.includes(m.id);
        const isDone = progress.completedMissions.includes(m.id);
        const isActive = idx === activeMissionIdx;
        return `
          <button
            type="button"
            class="sim-mission-pill ${isActive ? 'active' : ''} ${!isUnlocked ? 'locked' : ''} ${isDone ? 'completed' : ''}"
            data-mission-idx="${idx}"
            ${!isUnlocked ? `title="${esc(t.lockedLabel)}"` : ''}
          >
            <span>${m.icon}</span>
            <span>M${m.number}: ${esc(m.shortTitle[lang] || m.shortTitle.en)}</span>
            <span>${isDone ? '✅' : !isUnlocked ? '🔒' : ''}</span>
          </button>
        `;
      }).join('');

      // Permanent STOP — VERIFY — ACT Bar
      const svaBannerHtml = `
        <div class="sim-sva-bar">
          <div class="sim-sva-item stop">
            <strong>${esc(t.stopTitle)}</strong>
            <span>${esc(t.stopDesc)}</span>
          </div>
          <div class="sim-sva-item verify">
            <strong>${esc(t.verifyTitle)}</strong>
            <span>${esc(t.verifyDesc)}</span>
          </div>
          <div class="sim-sva-item act">
            <strong>${esc(t.actTitle)}</strong>
            <span>${esc(t.actDesc)}</span>
          </div>
        </div>
      `;

      let stageBodyHtml = '';

      if (viewMode === 'intro') {
        stageBodyHtml = `
          <div class="sim-intro-card">
            <div class="sim-intro-badge">${esc(t.introTitle)}</div>
            <h3 class="sim-intro-title">${esc(t.introSubtitle)}</h3>
            <p style="font-size: 15px; color: var(--cs-muted); margin-bottom: 18px;">
              ${esc(mission.title[lang] || mission.title.en)}
            </p>
            <div class="sim-rules-box">
              <h4>${esc(t.introRulesHeading)}</h4>
              <ul>
                ${t.introRules.map(r => `<li>🛡️ ${esc(r)}</li>`).join('')}
              </ul>
            </div>
            <div class="sim-privacy-chip">${esc(t.privacyWarning)}</div>
            <div style="margin-top: 22px; display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
              <button type="button" class="btn btn-primary sim-start-mission-btn" style="font-size: 16px; padding: 14px 32px;">
                ${esc(t.startMissionBtn)} (${esc(mission.shortTitle[lang] || mission.shortTitle.en)})
              </button>
            </div>
          </div>
        `;
      } else if (viewMode === 'playing') {
        const adaptationHtml = step.isAdaptation ? `
          <div class="sim-adaptation-banner">
            <div class="sim-adaptation-title">${esc(step.adaptationLabel[lang] || step.adaptationLabel.en)}</div>
            <div class="sim-adaptation-sub">${esc(t.attackerAdaptedNote)}</div>
          </div>
        ` : '';

        const simScenarioTag = mission.isSimulatedCallLabel ? `
          <div class="sim-call-disclaimer">
            🚨 <strong>SIMULATED SCENARIO:</strong> Educational simulation only — NOT a real police or government call.
          </div>
        ` : '';

        const emailMetaHtml = step.emailMeta ? `
          <div class="sim-email-meta">
            <div><strong>From:</strong> <code>${esc(step.emailMeta.sender)}</code></div>
            <div><strong>Subject:</strong> <span style="color:#dc2626; font-weight:700;">${esc(step.emailMeta.subject[lang] || step.emailMeta.subject.en)}</span></div>
            <div><strong>Attachment:</strong> <span class="sim-fake-attachment">${esc(step.emailMeta.attachment)}</span></div>
            <div><strong>Suspicious URL:</strong> <code>${esc(step.emailMeta.link)}</code></div>
          </div>
        ` : '';

        let interactionHtml = '';
        if (step.isMultiSelect) {
          interactionHtml = `
            <div class="sim-decision-panel">
              <h4 class="sim-prompt-title">🕵️ ${esc(t.multiSelectPrompt)}</h4>
              <div class="sim-multiselect-grid">
                ${step.multiSelectChoices.map(ch => {
                  const checked = selectedMultiIds.has(ch.id);
                  return `
                    <label class="sim-checkbox-card ${checked ? 'checked' : ''}" data-multi-id="${ch.id}">
                      <input type="checkbox" ${checked ? 'checked' : ''} />
                      <span class="sim-checkbox-custom" aria-hidden="true">${checked ? '✓' : ''}</span>
                      <span class="sim-checkbox-label">${esc(ch.label[lang] || ch.label.en)}</span>
                    </label>
                  `;
                }).join('')}
              </div>
              ${multiSelectError ? `<div style="color:#dc2626; font-weight:600; font-size:13.5px; margin-top:8px;">⚠️ ${esc(t.multiSelectHint)}</div>` : ''}
              <div style="margin-top: 16px;">
                <button type="button" class="btn btn-primary sim-submit-multiselect-btn">
                  ${esc(t.submitMultiSelectBtn)}
                </button>
              </div>
            </div>
          `;
        } else {
          interactionHtml = `
            <div class="sim-decision-panel">
              <h4 class="sim-prompt-title">🤔 ${esc(t.whatDoYouDo)}</h4>
              <div class="sim-options-grid">
                ${step.options.map((opt, optIdx) => `
                  <button type="button" class="sim-option-btn" data-option-id="${opt.id}">
                    <span class="sim-option-badge">${String.fromCharCode(65 + optIdx)}</span>
                    <span class="sim-option-content">${esc(opt.label[lang] || opt.label.en)}</span>
                    <span class="sim-option-arrow" aria-hidden="true">→</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }

        stageBodyHtml = `
          ${adaptationHtml}
          ${simScenarioTag}
          <div class="sim-workspace-grid">
            <div class="sim-threat-col">
              <div class="sim-phone-frame channel-${esc(mission.channelType)}">
                <div class="sim-phone-topbar">
                  <span class="sim-phone-dots"><span></span><span></span><span></span></span>
                  <span class="sim-phone-header-text">${esc(step.uiHeader[lang] || step.uiHeader.en)}</span>
                  <span class="sim-step-counter">Step ${activeStepIdx + 1}/${mission.steps.length}</span>
                </div>
                <div class="sim-phone-sender">
                  <span class="sim-avatar">${mission.icon}</span>
                  <div>
                    <strong>${esc(step.sender || 'Unknown Sender')}</strong>
                    <small>SIMULATED MESSAGE • DO NOT ENTER REAL DATA</small>
                  </div>
                </div>
                ${emailMetaHtml}
                <div class="sim-message-bubble">${esc(step.message[lang] || step.message.en).replace(/\n/g, '<br>')}</div>
                <div class="sim-fake-input-guard">
                  🔒 <span>OTP: <strong>123456 (SIMULATION ONLY)</strong> — ${esc(t.privacyWarning)}</span>
                </div>
              </div>
            </div>
            <div class="sim-decision-col">
              ${interactionHtml}
            </div>
          </div>
        `;
      } else if (viewMode === 'feedback' && selectedOutcome) {
        const tech = step.technique;
        const psychologyCardHtml = tech ? `
          <div class="sim-psychology-card">
            <div class="sim-psych-header">${esc(t.psychologyHeader)}: <span class="sim-psych-badge">${esc(tech.badge)}</span></div>
            <h5>"${esc(tech.name[lang] || tech.name.en)}"</h5>
            <p>${esc(tech.desc[lang] || tech.desc.en)}</p>
          </div>
        ` : '';

        if (selectedOutcome.isSafe) {
          const detectedList = (selectedOutcome.detectedSigns && (selectedOutcome.detectedSigns[lang] || selectedOutcome.detectedSigns.en)) || [];
          const safeAct = (selectedOutcome.safeActionText && (selectedOutcome.safeActionText[lang] || selectedOutcome.safeActionText.en)) || '';
          stageBodyHtml = `
            <div class="sim-feedback-card safe">
              <div class="sim-feedback-badge safe">${esc(t.goodDecisionHeader)}</div>
              <h4>${esc(selectedOutcome.safeExplanation[lang] || selectedOutcome.safeExplanation.en)}</h4>
              <div class="sim-feedback-columns">
                <div class="sim-feedback-box">
                  <h5>${esc(t.warningSignDetected)}</h5>
                  <ul>
                    ${detectedList.map(d => `<li>✅ ${esc(d)}</li>`).join('')}
                  </ul>
                </div>
                <div class="sim-feedback-box">
                  <h5>${esc(t.safeActionLabel)}</h5>
                  <p style="font-weight:700; color:#15803d; margin-top:6px;">🛡️ ${esc(safeAct)}</p>
                </div>
              </div>
              ${psychologyCardHtml}
              <div style="margin-top: 20px;">
                <button type="button" class="btn btn-primary sim-next-step-btn">
                  ${esc(t.continueBtn)}
                </button>
              </div>
            </div>
          `;
        } else {
          const missedList = (selectedOutcome.missedSigns && (selectedOutcome.missedSigns[lang] || selectedOutcome.missedSigns.en)) || [];
          stageBodyHtml = `
            <div class="sim-feedback-card unsafe">
              <div class="sim-feedback-badge unsafe">${esc(t.warningHeader)}</div>
              <h4>${esc(selectedOutcome.consequenceTitle[lang] || selectedOutcome.consequenceTitle.en)}</h4>
              <p class="sim-consequence-detail">${esc(selectedOutcome.consequenceDetail[lang] || selectedOutcome.consequenceDetail.en)}</p>
              <div class="sim-stop-alert">
                <strong>${esc(t.stopHeader)}</strong>
                <p>${esc(selectedOutcome.stopMessage[lang] || selectedOutcome.stopMessage.en)}</p>
              </div>
              <div class="sim-feedback-box missed">
                <h5>${esc(t.whatYouMissed)}</h5>
                <ul>
                  ${missedList.map(m => `<li>❌ ${esc(m)}</li>`).join('')}
                </ul>
              </div>
              ${psychologyCardHtml}
              <div style="margin-top: 20px;">
                <button type="button" class="btn btn-primary sim-next-step-btn">
                  ${esc(t.continueMissionBtn)}
                </button>
              </div>
            </div>
          `;
        }
      } else if (viewMode === 'report') {
        const strengthsList = (mission.strengths && (mission.strengths[lang] || mission.strengths.en)) || [];
        const practiceList = (mission.practiceAreas && (mission.practiceAreas[lang] || mission.practiceAreas.en)) || [];
        const nextIdx = (activeMissionIdx + 1) % MISSIONS.length;
        const nextMission = MISSIONS[nextIdx];

        stageBodyHtml = `
          <div class="sim-report-card">
            <div class="sim-report-top">
              <span class="sim-report-badge">${esc(t.reportHeader)}</span>
              <h3>${esc(t.missionCompleteHeader)} — ${esc(mission.shortTitle[lang] || mission.shortTitle.en)}</h3>
              <p class="sim-report-quote">"${esc(t.missionCompleteQuote)}"</p>
            </div>

            <div class="sim-metrics-grid">
              <div class="sim-metric-item">
                <span class="sim-metric-lbl">${esc(t.reportMission)}</span>
                <strong class="sim-metric-val">${esc(mission.shortTitle[lang] || mission.shortTitle.en)}</strong>
              </div>
              <div class="sim-metric-item">
                <span class="sim-metric-lbl">${esc(t.reportDecisions)}</span>
                <strong class="sim-metric-val">${sessionStats.decisions}</strong>
              </div>
              <div class="sim-metric-item safe">
                <span class="sim-metric-lbl">${esc(t.reportSafe)}</span>
                <strong class="sim-metric-val">${sessionStats.safeDecisions}</strong>
              </div>
              <div class="sim-metric-item risky">
                <span class="sim-metric-lbl">${esc(t.reportRisky)}</span>
                <strong class="sim-metric-val">${sessionStats.riskyDecisions}</strong>
              </div>
              <div class="sim-metric-item">
                <span class="sim-metric-lbl">${esc(t.reportWarnings)}</span>
                <strong class="sim-metric-val">${Math.min(sessionStats.warningsDetected, mission.totalWarnings)}/${mission.totalWarnings}</strong>
              </div>
              <div class="sim-metric-item">
                <span class="sim-metric-lbl">${esc(t.reportTechniques)}</span>
                <strong class="sim-metric-val">${Math.min(sessionStats.techniquesRecognized, mission.totalTechniques)}/${mission.totalTechniques}</strong>
              </div>
            </div>

            <div class="sim-feedback-columns" style="margin-top: 18px;">
              <div class="sim-feedback-box">
                <h5>${esc(t.strongAtHeader)}</h5>
                <ul>
                  ${strengthsList.map(s => `<li>💪 ${esc(s)}</li>`).join('')}
                </ul>
              </div>
              <div class="sim-feedback-box">
                <h5>${esc(t.practiceMoreHeader)}</h5>
                <ul>
                  ${practiceList.map(p => `<li>⚠️ ${esc(p)}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="sim-voice-bridge-box">
              <div>
                <strong>${esc(t.voiceSaathiPromptTitle)}</strong>
                <p>${esc(t.voiceSaathiPromptDesc)}</p>
              </div>
              <button type="button" class="btn btn-primary sim-ask-voice-btn">
                ${esc(t.askVoiceSaathiBtn)}
              </button>
            </div>

            <div class="sim-report-actions">
              <button type="button" class="btn btn-outline sim-retry-btn">${esc(t.tryAgainBtn)}</button>
              <button type="button" class="btn btn-primary sim-next-mission-btn" data-next-idx="${nextIdx}">
                ${esc(t.nextMissionBtn)}: M${nextMission.number} (${esc(nextMission.shortTitle[lang] || nextMission.shortTitle.en)})
              </button>
              <a href="topics.html" class="btn btn-outline">${esc(t.learnMoreBtn)}</a>
            </div>

            <div class="sim-report-disclaimer">
              ℹ️ ${esc(t.reportDisclaimer)}
            </div>
          </div>
        `;
      }

      containerEl.innerHTML = `
        <div class="scam-simulator-shell">
          <div class="sim-header-bar">
            <div class="sim-header-text">
              <span class="sim-eyebrow">${esc(t.badge)}</span>
              <h3 class="sim-main-title">${esc(t.heading)}</h3>
              <p class="sim-main-sub">${esc(t.subheading)}</p>
            </div>
            <div class="sim-progress-chip">
              <div class="sim-mission-counter-badge">
                <span>${esc(t.missionProgress)} <strong>${mission.number} / 08</strong></span>
              </div>
              <button type="button" class="sim-unlock-toggle-btn">${esc(t.unlockAllToggle)}</button>
            </div>
          </div>

          ${svaBannerHtml}

          <div class="sim-missions-nav">
            <div class="sim-missions-scroll">
              ${missionTabsHtml}
            </div>
          </div>

          <div class="sim-stage-area">
            ${stageBodyHtml}
          </div>

          <div class="sim-emergency-footer">
            ${esc(t.emergencyBanner)}
          </div>
        </div>
      `;

      bindEvents(mission, step, lang);
    }

    function bindEvents(mission, step, lang) {
      // Unlock all missions toggle
      const unlockBtn = containerEl.querySelector('.sim-unlock-toggle-btn');
      if (unlockBtn) {
        unlockBtn.addEventListener('click', () => {
          progress.unlockAll = !progress.unlockAll;
          if (progress.unlockAll) progress.unlockedUpTo = MISSIONS.length;
          saveProgress(progress);
          render();
        });
      }

      // Mission selector pills
      containerEl.querySelectorAll('.sim-mission-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const idx = parseInt(pill.dataset.missionIdx, 10);
          const isUnlocked = progress.unlockAll || idx < progress.unlockedUpTo || progress.completedMissions.includes(MISSIONS[idx].id);
          if (!isUnlocked) {
            if (typeof window.showToast === 'function') {
              window.showToast((UI_STRINGS[lang] || UI_STRINGS.en).lockedLabel, 'warning');
            }
            return;
          }
          activeMissionIdx = idx;
          activeStepIdx = 0;
          resetSessionStats();
          viewMode = 'intro';
          render();
        });
      });

      // Start Mission button
      const startBtn = containerEl.querySelector('.sim-start-mission-btn');
      if (startBtn) {
        startBtn.addEventListener('click', () => {
          activeStepIdx = 0;
          resetSessionStats();
          viewMode = 'playing';
          render();
        });
      }

      // Option buttons (Standard choices A, B, C, D)
      containerEl.querySelectorAll('.sim-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const optId = btn.dataset.optionId;
          const chosen = (step.options || []).find(o => o.id === optId);
          if (!chosen) return;

          sessionStats.decisions += 1;
          sessionStats.techniquesRecognized += 1;
          if (chosen.isSafe) {
            sessionStats.safeDecisions += 1;
            sessionStats.warningsDetected += 3;
          } else {
            sessionStats.riskyDecisions += 1;
            sessionStats.warningsDetected += 1;
          }

          selectedOutcome = chosen;
          viewMode = 'feedback';
          render();
        });
      });

      // Multi-select checkboxes (Mission 07 Phishing Email)
      containerEl.querySelectorAll('.sim-checkbox-card').forEach(card => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          const id = card.dataset.multiId;
          if (selectedMultiIds.has(id)) selectedMultiIds.delete(id);
          else selectedMultiIds.add(id);
          multiSelectError = false;
          render();
        });
      });

      const submitMultiBtn = containerEl.querySelector('.sim-submit-multiselect-btn');
      if (submitMultiBtn) {
        submitMultiBtn.addEventListener('click', () => {
          if (selectedMultiIds.size === 0) {
            multiSelectError = true;
            render();
            return;
          }
          sessionStats.decisions += 1;
          sessionStats.safeDecisions += 1;
          sessionStats.warningsDetected += selectedMultiIds.size;
          sessionStats.techniquesRecognized += 3;

          selectedOutcome = {
            isSafe: true,
            safeExplanation: step.multiSelectExplanation,
            detectedSigns: {
              en: step.multiSelectChoices.filter(c => selectedMultiIds.has(c.id)).map(c => c.label.en),
              hi: step.multiSelectChoices.filter(c => selectedMultiIds.has(c.id)).map(c => c.label.hi),
              mr: step.multiSelectChoices.filter(c => selectedMultiIds.has(c.id)).map(c => c.label.mr)
            },
            safeActionText: {
              en: `Identified ${selectedMultiIds.size} of 5 phishing email indicators without clicking the link`,
              hi: `लिंक पर क्लिक किए बिना फिशिंग ईमेल के 5 में से ${selectedMultiIds.size} खतरे के संकेत पहचाने`,
              mr: `लिंकवर क्लिक न करता फिशिंग ईमेलमधील 5 पैकी ${selectedMultiIds.size} धोक्याची चिन्हे ओळखली`
            }
          };
          viewMode = 'feedback';
          render();
        });
      }

      // Next Step / Continue Mission button
      const nextStepBtn = containerEl.querySelector('.sim-next-step-btn');
      if (nextStepBtn) {
        nextStepBtn.addEventListener('click', () => {
          if (activeStepIdx + 1 < mission.steps.length) {
            activeStepIdx += 1;
            selectedOutcome = null;
            viewMode = 'playing';
            render();
          } else {
            // Mission completed! Unlock next mission
            if (!progress.completedMissions.includes(mission.id)) {
              progress.completedMissions.push(mission.id);
            }
            if (progress.unlockedUpTo <= activeMissionIdx + 1) {
              progress.unlockedUpTo = Math.min(MISSIONS.length, activeMissionIdx + 2);
            }
            saveProgress(progress);
            viewMode = 'report';
            render();
          }
        });
      }

      // Retry Mission
      const retryBtn = containerEl.querySelector('.sim-retry-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          activeStepIdx = 0;
          resetSessionStats();
          viewMode = 'playing';
          render();
        });
      }

      // Next Mission
      const nextMissionBtn = containerEl.querySelector('.sim-next-mission-btn');
      if (nextMissionBtn) {
        nextMissionBtn.addEventListener('click', () => {
          const nextIdx = parseInt(nextMissionBtn.dataset.nextIdx, 10) || 0;
          activeMissionIdx = nextIdx;
          activeStepIdx = 0;
          resetSessionStats();
          viewMode = 'intro';
          render();
        });
      }

      // Ask Voice Saathi Integration
      const askVoiceBtn = containerEl.querySelector('.sim-ask-voice-btn');
      if (askVoiceBtn) {
        askVoiceBtn.addEventListener('click', () => {
          const sampleQuery = (mission.voiceSampleQuery && (mission.voiceSampleQuery[lang] || mission.voiceSampleQuery.en)) || mission.title.en;
          const voiceSection = document.getElementById('voiceSaathiConsole') || document.getElementById('homeVoiceSaathi') || document.getElementById('voiceMicBtn');
          if (voiceSection) {
            voiceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const textInput = document.getElementById('voiceTextInput');
            const submitBtn = document.getElementById('voiceTextSubmitBtn');
            if (textInput && submitBtn) {
              textInput.value = sampleQuery;
              setTimeout(() => submitBtn.click(), 350);
            }
          }
        });
      }
    }

    // Re-render automatically when site language changes
    document.addEventListener('cybersathi-lang-change', () => {
      render();
    });

    render();

    // Expose helper to launch directly into playing mode when user clicks "🎯 Start Simulation"
    containerEl.__startSimulationNow = () => {
      viewMode = 'intro';
      render();
      containerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  function initAllSimulators() {
    document.querySelectorAll('.cybersathi-scam-simulator-mount').forEach(el => {
      mountScamSimulator(el);
    });

    // Bind any "🎯 Start Simulation" launch buttons across the page
    document.querySelectorAll('.launch-scam-simulator-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mount = document.querySelector('.cybersathi-scam-simulator-mount');
        if (mount && typeof mount.__startSimulationNow === 'function') {
          e.preventDefault();
          mount.__startSimulationNow();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllSimulators);
  } else {
    initAllSimulators();
  }
})();
