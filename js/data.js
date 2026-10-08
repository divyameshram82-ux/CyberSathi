// CyberSathi Centralized Educational & Threat Dataset
// Strictly specific to CyberSathi: "Awareness for Every Village, Opportunity for Every Family"

const topics = [
  {
    id: 'otp-fraud',
    title: 'OTP Fraud',
    icon: '🔐',
    category: 'banking',
    summary: 'Never share one-time passwords with anyone over call, SMS or chat.',
    scenario: 'An unexpected caller posing as a bank manager claims your debit card is blocked or a cashback is waiting, demanding your 6-digit OTP to “verify” your identity.',
    redFlags: [
      'Caller demands OTP immediately under threat of account suspension.',
      'Caller claims entering or reading an OTP is required to receive money.',
      'Caller asks you to install remote support apps (AnyDesk, TeamViewer) to “help” you.'
    ],
    prevention: [
      'Remember: Banks NEVER ask for OTPs, CVVs, or ATM PINs.',
      'Never read out an OTP sent to your phone to any caller.',
      'If someone claims to be your bank, hang up and visit your local branch or dial the number on your passbook.'
    ]
  },
  {
    id: 'upi-fraud',
    title: 'UPI Payment Fraud',
    icon: '💳',
    category: 'banking',
    summary: 'A UPI PIN is only needed to send money, NEVER to receive money.',
    scenario: 'A buyer on OLX or a marketplace agrees to buy your item, sends a “collect request” or asks you to enter your PIN to “deposit” the money into your account.',
    redFlags: [
      'Entering a UPI PIN to receive money (receiving money happens automatically).',
      'High urgency: “Accept immediately before payment link expires”.',
      'Requests to approve unfamiliar UPI collect requests on PhonePe, GPay, or Paytm.'
    ],
    prevention: [
      'To receive money via UPI, you NEVER have to enter your UPI PIN.',
      'Check notifications carefully: a “Pay” request debits money from your account.',
      'Decline unexpected collect requests immediately and block the user.'
    ]
  },
  {
    id: 'qr-code-scams',
    title: 'QR Code Scams',
    icon: '▦',
    category: 'banking',
    summary: 'Scanning a QR code means authorizing an outflow of money from your account.',
    scenario: 'A stranger sends you a QR code on WhatsApp saying: “Scan this QR code and your bank balance will receive ₹5,000 lottery/scholarship reward”.',
    redFlags: [
      'Someone asking you to scan a QR code to receive a payment or refund.',
      'QR codes received from unknown WhatsApp numbers or pasted over merchant stickers.',
      'The UPI app screen shows “Paying To...” instead of “Received”.'
    ],
    prevention: [
      'QR codes are exclusively for SENDING money or opening web links.',
      'Never scan any QR code sent on social media to claim prizes, subsidies or refunds.',
      'Inspect shopkeeper QR stickers physically before scanning to ensure no fake sticker is pasted over it.'
    ]
  },
  {
    id: 'phishing',
    title: 'Phishing & Fake Links',
    icon: '🎣',
    category: 'identity',
    summary: 'Deceptive links sent via SMS/WhatsApp designed to steal your credentials.',
    scenario: 'You receive an SMS: “Your electricity bill is unpaid; power will be disconnected at 9:30 PM. Click bit.ly/power-pay to avoid disruption”.',
    redFlags: [
      'Shortened URLs (bit.ly, tinyurl, cutt.ly) claiming to be from official government or utility companies.',
      'Urgency threats: “account suspended today”, “package returned”, “subsidy revoked”.',
      'Website domain misspelled (e.g., sbi-kyc-update.online instead of onlinesbi.sbi).'
    ],
    prevention: [
      'Never click links in unsolicited SMS or WhatsApp messages.',
      'Always open the official website by typing the verified URL in your browser.',
      'Check for official sender IDs (e.g., VM-SBIINB instead of personal 10-digit mobile numbers).'
    ]
  },
  {
    id: 'fake-kyc',
    title: 'Fake KYC Update Calls',
    icon: '🪪',
    category: 'banking',
    summary: 'Fraudsters impersonating banks claiming your SIM or bank account KYC has expired.',
    scenario: 'Caller says: “Your Aadhaar KYC is incomplete. Your bank account will be permanently deactivated within 2 hours. Download QuickSupport app now”.',
    redFlags: [
      'Threatening instant account closure unless KYC is done over the phone.',
      'Demanding you download screen-sharing APKs or apps.',
      'Asking you to make a nominal ₹1 or ₹10 test recharge on an unknown link.'
    ],
    prevention: [
      'KYC is never completed via third-party remote screen-sharing apps.',
      'Visit your local bank branch or use the official mobile banking application.',
      'Report fake KYC calls to the DoT Chakshu portal or helpline 1930.'
    ]
  },
  {
    id: 'fake-customer-care',
    title: 'Fake Customer Care Numbers',
    icon: '🎧',
    category: 'scams',
    summary: 'Fraudsters posting fake helpline numbers on Google Maps and search engines.',
    scenario: 'You search Google for “courier customer care number” and call the top search result. The person claims to be support and asks for remote access to fix your delivery.',
    redFlags: [
      'Support agent asking you to install AnyDesk, RustDesk or TeamViewer.',
      'Customer service asking for upfront “registration fees” or OTPs to issue a refund.',
      'Customer support numbers listed as personal 10-digit mobile numbers on Google Maps.'
    ],
    prevention: [
      'Only get contact numbers from inside the official app or official website domain.',
      'Never install remote screen-sharing apps at the instruction of any customer care agent.',
      'Real customer support will never ask for your card PIN, CVV, or passwords.'
    ]
  },
  {
    id: 'fake-job-scams',
    title: 'Fake Job & Part-time Scams',
    icon: '💼',
    category: 'jobs',
    summary: 'Promises of daily work-from-home earnings by liking YouTube videos or rating hotels.',
    scenario: 'A recruiter on Telegram offers ₹3,000/day for liking YouTube videos. You get paid ₹150 initially, then they ask you to deposit ₹10,000 into a “VIP account” to unlock huge tasks.',
    redFlags: [
      'Job offers unsolicited via WhatsApp or Telegram offering high pay for trivial tasks.',
      'Requirement to pay a “registration fee”, “laptop deposit” or “crypto task investment”.',
      'Company emails coming from @gmail.com or @yahoo.com instead of corporate domains.'
    ],
    prevention: [
      'Legitimate employers NEVER ask candidates to pay money to get a job.',
      'Never transfer money to “unlock” tasks or withdraw accumulated virtual earnings.',
      'Verify company existence on LinkedIn or the Ministry of Corporate Affairs portal.'
    ]
  },
  {
    id: 'online-shopping-fraud',
    title: 'Online Shopping & Social Store Traps',
    icon: '🛍️',
    category: 'scams',
    summary: 'Fake Instagram/Facebook stores advertising branded goods at 90% discount.',
    scenario: 'An ad shows luxury smartphones or sarees for ₹499 instead of ₹15,000. When you order, only prepaid UPI is accepted, and the seller vanishes with your money.',
    redFlags: [
      'Prices that are unrealistically cheap (“Too good to be true”).',
      'No Cash on Delivery (COD) option and no physical store address or GSTIN.',
      'Comments disabled on the Instagram/Facebook page.'
    ],
    prevention: [
      'Shop through trusted, verified e-commerce platforms with buyer protection.',
      'Always prefer Cash on Delivery for newly discovered shops.',
      'Check customer reviews outside the platform on consumer forums.'
    ]
  },
  {
    id: 'investment-scams',
    title: 'Fake Investment & Trading Apps',
    icon: '📈',
    category: 'banking',
    summary: 'Fake stock/crypto apps showing fabricated high returns to trap life savings.',
    scenario: 'A WhatsApp “mentor” adds you to a stock tips group. They instruct you to download an unlisted APK showing 300% monthly returns. When you try to withdraw, they demand heavy “taxes”.',
    redFlags: [
      'Guaranteed high returns with zero risk (no legitimate investment guarantees 30-50% monthly).',
      'Instructions to install an APK file directly instead of Google Play Store.',
      'Deposits requested into personal individual saving accounts rather than SEBI registered brokers.'
    ],
    prevention: [
      'Invest only through SEBI-registered brokers and mutual fund houses.',
      'Verify any financial advisor on the SEBI public directory before transferring funds.',
      'Remember: fake apps display manipulated digital numbers that do not exist.'
    ]
  },
  {
    id: 'loan-scams',
    title: 'Instant Loan App Blackmail',
    icon: '🏦',
    category: 'jobs',
    summary: 'Illegal loan apps that harvest your contacts and photos to harass and extort you.',
    scenario: 'You download a “3-minute easy loan” app that asks for gallery and contact permissions. You receive ₹3,000 but after 6 days, callers threaten to send morph pictures to your contacts.',
    redFlags: [
      'Loan apps demanding permissions for your full contact list, gallery, and camera.',
      'Repayment tenure of only 7 days with interest exceeding 40-50%.',
      'Lender is not an RBI-registered Non-Banking Financial Company (NBFC).'
    ],
    prevention: [
      'Never install unverified loan APKs from social media ads or web links.',
      'Check RBI’s Sachet portal (sachet.rbi.org.in) for authorized NBFC lenders.',
      'If harassed, immediately file a police complaint and dial cyber helpline 1930.'
    ]
  },
  {
    id: 'whatsapp-impersonation',
    title: 'WhatsApp Impersonation & Friend in Need',
    icon: '💬',
    category: 'social',
    summary: 'Scammers using a friend or relative’s photo asking for urgent hospital money.',
    scenario: 'A message from a new number with your cousin’s profile picture says: “My phone broke, I am at the hospital and need ₹20,000 urgently on this UPI ID”.',
    redFlags: [
      'Unfamiliar number using a known contact’s photo and name.',
      'Urgent medical or travel emergency demanding immediate digital transfer.',
      'Excuses for why they cannot speak on a voice call right now.'
    ],
    prevention: [
      'Always call the relative or friend on their known original phone number to verify.',
      'Never transfer emergency money without hearing their voice directly.',
      'Ask a personal question only the real friend would know the answer to.'
    ]
  },
  {
    id: 'social-media-hacking',
    title: 'Social Media Takeover & Account Theft',
    icon: '📱',
    category: 'social',
    summary: 'Hackers tricking users into sharing password reset codes to hijack accounts.',
    scenario: 'A friend’s hacked account messages you: “Vote for me in this contest; you will get an SMS code, please send it to me”. Sharing the code gives away your own account.',
    redFlags: [
      'Friends asking you to send them a code that arrives on your phone.',
      'Sudden emails saying your password was reset from an unfamiliar city.',
      'Suspicious login prompts offering free followers or blue verification checkmarks.'
    ],
    prevention: [
      'Enable Two-Factor Authentication (2FA) with an authenticator app on all accounts.',
      'Never forward WhatsApp or Instagram verification codes to anyone.',
      'Review active sessions in Account Settings and log out from unfamiliar devices.'
    ]
  },
  {
    id: 'identity-theft',
    title: 'Aadhaar & Identity Document Misuse',
    icon: '🪪',
    category: 'identity',
    summary: 'Fraudulent issuance of SIM cards and credit lines using stolen identity photocopies.',
    scenario: 'Scammers obtain your Aadhaar and PAN photocopy from an unsecured shop and register unauthorized mobile SIM cards or fraudulent micro-loans in your name.',
    redFlags: [
      'Receiving collection notices for loans or credit cards you never applied for.',
      'Telecom notifications indicating new SIM cards issued against your ID.',
      'Shops asking for plain Aadhaar copies without crossing or purpose writing.'
    ],
    prevention: [
      'Use Masked Aadhaar (where only last 4 digits are visible) whenever possible.',
      'Cross out physical photocopies: write “For KYC with [Organization Name] only”.',
      'Check active SIMs issued in your name on the official DoT portal (tafcop.sancharsaathi.gov.in).'
    ]
  },
  {
    id: 'cyberbullying',
    title: 'Cyberbullying & Online Harassment',
    icon: '🫶',
    category: 'social',
    summary: 'Repeated offensive messages, stalking, unauthorized photo sharing, or blackmail.',
    scenario: 'A student receives anonymous threats and hateful comments across social media, or is threatened with private photo sharing unless they comply with demands.',
    redFlags: [
      'Persistent hostile, threatening or humiliating messages across multiple platforms.',
      'Creation of fake profile impersonating the victim to defame them.',
      'Demands for money or favours under threat of photo exposure.'
    ],
    prevention: [
      'Do not engage or retaliate; preserve screenshots and link URLs as legal evidence.',
      'Block the harasser and report the account directly on the social media platform.',
      'Confide in a trusted family member or teacher, and file a report at cybercrime.gov.in.'
    ]
  },
  {
    id: 'deepfake-ai-scams',
    title: 'Deepfake & AI Voice Cloning Scams',
    icon: '🤖',
    category: 'social',
    summary: 'AI voice clones imitating your son, daughter or relative pleading for bail or rescue.',
    scenario: 'A mother gets a phone call. The voice sounds exactly like her son in tears: “Mom, I’ve been detained by police in an accident, please transfer ₹50,000 to this lawyer immediately”.',
    redFlags: [
      'Extreme panic created to bypass logical verification.',
      'Voice sounds identical but speech pattern is slightly robotic or lacks family knowledge.',
      'Caller demands urgent transfer to an unknown individual account.'
    ],
    prevention: [
      'Establish a secret “Family Safety Word” known only to immediate family members.',
      'Disconnect and call the family member back directly on their normal regular number.',
      'Contact local police station independently before sending money to any alleged lawyer.'
    ]
  },
  {
    id: 'sim-swap-fraud',
    title: 'SIM Swap & Mobile Number Hijack',
    icon: '📶',
    category: 'identity',
    summary: 'Criminals deactivating your SIM card to gain control of your bank OTPs.',
    scenario: 'Your phone suddenly loses network signal completely. Fraudsters have tricked your telecom company into issuing a duplicate SIM, rerouting all your bank OTPs to their phone.',
    redFlags: [
      'Sudden and prolonged total loss of network signal in an area with good coverage.',
      'Unsolicited SMS from telecom operator about SIM upgrade or replacement requests.',
      'Inability to make calls or receive normal SMS messages for several hours.'
    ],
    prevention: [
      'If your mobile suddenly shows “No Service” for over an hour, contact your telecom provider immediately.',
      'Never respond to SMS asking you to send “SIM 19-digit number” or approve upgrade requests.',
      'Ensure your bank has registered both email alerts and mobile SMS for all transactions.'
    ]
  },
  {
    id: 'atm-card-skimming',
    title: 'ATM & Card Skimming Scams',
    icon: '💳',
    category: 'banking',
    summary: 'Hardware devices attached to ATM card slots to copy your magnetic card strip.',
    scenario: 'You insert your card at an unmonitored ATM where a false card reader captures your data and a hidden pinhole camera records your secret PIN.',
    redFlags: [
      'ATM card slot feels loose, bulky, or misaligned with unusual glue marks.',
      'Strangers offering “helpful advice” or standing uncomfortably close inside the kiosk.',
      'Keypad feels unusually thick or spongey (overlay keypad).'
    ],
    prevention: [
      'Always cover the keypad with your free hand while typing your 4-digit PIN.',
      'Wiggle the card reader slot before inserting your card; report any loose attachments.',
      'Never accept assistance from strangers inside an ATM booth.'
    ]
  },
  {
    id: 'govt-scheme-scams',
    title: 'Fake Government Scheme Portals',
    icon: '🏛️',
    category: 'scams',
    summary: 'Fraudulent forms promising PM-Kisan, free laptops, or solar subsidies for a fee.',
    scenario: 'A WhatsApp message claims: “Govt is offering ₹10,000 under PM Ladli / Kisan Relief Scheme. Register here and pay ₹299 documentation fee”.',
    redFlags: [
      'Government schemes hosted on private domains (.xyz, .top, .online, blogspot.com) instead of .gov.in.',
      'Requirement to pay a “processing fee” or “file charge” to unlock welfare benefits.',
      'Prompts requiring you to share the link to 10 WhatsApp groups before claiming.'
    ],
    prevention: [
      'Real Central and State government schemes ALWAYS end in .gov.in or .nic.in.',
      'Verify any scheme on the official portal: https://www.myscheme.gov.in/.',
      'Government welfare transfers are direct-benefit (DBT) and never require upfront payment.'
    ]
  }
];

const audiences = [
  {
    title: 'Children & Minors',
    icon: '🧒',
    description: 'Safe online gaming, cyberbullying defense, protecting family privacy, and stranger danger.',
    tag: 'School & Youth'
  },
  {
    title: 'Students & College Youth',
    icon: '🎓',
    description: 'Fake job offers, scholarship scams, social media security, and illegal investment apps.',
    tag: 'Careers'
  },
  {
    title: 'Women & Self-Help Groups',
    icon: '👩',
    description: 'Safe digital payments, online harassment prevention, identity theft, and micro-loan safety.',
    tag: 'Empowerment'
  },
  {
    title: 'Men & Working Professionals',
    icon: '👨',
    description: 'Investment traps, fake customer care, urgent blackmail, and credit card safety.',
    tag: 'Financial'
  },
  {
    title: 'Senior Citizens',
    icon: '👴',
    description: 'Pension fraud, fake bank calls, digital arrest threats, and medical urgency scams.',
    tag: 'Elder Protection'
  },
  {
    title: 'Parents & Families',
    icon: '👨‍👩‍👧',
    description: 'Family device controls, safe screen time, protecting home Wi-Fi, and shared UPI safety.',
    tag: 'Family'
  },
  {
    title: 'Farmers & Rural Producers',
    icon: '🌾',
    description: 'Fake PM-Kisan subsidy forms, crop insurance scams, fertilizer buyer fraud, and loan traps.',
    tag: 'Agriculture'
  },
  {
    title: 'Local Shopkeepers & Small Businesses',
    icon: '🏪',
    description: 'Fake buyer UPI QR codes, falsified payment screenshots, and marketplace fraud.',
    tag: 'Small Business'
  },
  {
    title: 'Village Volunteers & Social Workers',
    icon: '🤝',
    description: 'Leading grassroots digital awareness camps, reporting scams, and community safety literacy.',
    tag: 'Community'
  }
];

const videos = [
  {
    id: '7j0A62x-tdY',
    title: 'India 360: OTP से फ्रॉड के मामले बढ़े तेजी से, बैंक सुरक्षा व सावधानियां',
    channel: 'Zee News (India 360)',
    topic: 'OTP Fraud',
    filterKey: 'OTP',
    category: 'OTP',
    language: 'Hindi',
    description: 'जानिए OTP फ्रॉड कैसे होता है, ठग बैंक अधिकारी बनकर कैसे गुप्त कोड मांगते हैं और अपने बैंक खाते को सुरक्षित कैसे रखें।',
    descriptionEn: 'Understand how OTP fraud happens when scammers pose as bank officials and how tokenization and strict OTP privacy protect your bank account.',
    descriptionMr: 'बँक अधिकारी भासवून सायबर भामटे OTP कसा मागतात आणि आपले बँक खाते सुरक्षित कसे ठेवावे हे समजून घ्या.',
    desc: 'जानिए OTP फ्रॉड कैसे होता है, ठग बैंक अधिकारी बनकर कैसे गुप्त कोड मांगते हैं और अपने बैंक खाते को सुरक्षित कैसे रखें।',
    thumbnail: 'https://img.youtube.com/vi/7j0A62x-tdY/hqdefault.jpg'
  },
  {
    id: '9mBMspGhm3E',
    title: 'UPI Fraud Awareness AV (Hindi) — सुरक्षित UPI लेनदेन के नियम',
    channel: 'NPCI (National Payments Corporation of India)',
    topic: 'UPI Fraud',
    filterKey: 'UPI',
    category: 'UPI',
    language: 'Hindi',
    description: 'NPCI का आधिकारिक हिंदी जागरूकता वीडियो: UPI Collect Request, अनजान पेमेंट लिंक और UPI PIN की सुरक्षा के सुनहरे नियम।',
    descriptionEn: 'Official NPCI Hindi awareness video explaining UPI Collect Request traps and why you never enter a UPI PIN to receive money.',
    descriptionMr: 'NPCI चा अधिकृत हिंदी जनजागृती व्हिडिओ: UPI कलेक्ट रिक्वेस्ट आणि पैसे स्वीकारण्यासाठी कधीही UPI PIN न टाकण्याचे नियम.',
    desc: 'NPCI का आधिकारिक हिंदी जागरूकता वीडियो: UPI Collect Request, अनजान पेमेंट लिंक और UPI PIN की सुरक्षा के सुनहरे नियम।',
    thumbnail: 'https://img.youtube.com/vi/9mBMspGhm3E/hqdefault.jpg'
  },
  {
    id: '0AGUZ1b7AFM',
    title: 'RBI Children Awareness — Do not click unknown links (Hindi)',
    channel: 'Reserve Bank of India (RBI)',
    topic: 'Phishing',
    filterKey: 'Phishing',
    category: 'Phishing',
    language: 'Hindi',
    description: 'भारतीय रिज़र्व बैंक (RBI) का हिंदी संदेश: एसएमएस, ईमेल या गेमिंग में आने वाले अनजान फ़िशिंग लिंक्स (Phishing Links) पर कभी क्लिक न करें।',
    descriptionEn: 'Official Reserve Bank of India (RBI) Hindi awareness film warning citizens and youth never to click suspicious phishing links.',
    descriptionMr: 'भारतीय रिझर्व्ह बँकेचा (RBI) हिंदी संदेश: मेसेज किंवा गेममधील अनोळखी फिशिंग लिंक्सवर कधीही क्लिक करू नका.',
    desc: 'भारतीय रिज़र्व बैंक (RBI) का हिंदी संदेश: एसएमएस, ईमेल या गेमिंग में आने वाले अनजान फ़िशिंग लिंक्स (Phishing Links) पर कभी क्लिक न करें।',
    thumbnail: 'https://img.youtube.com/vi/0AGUZ1b7AFM/hqdefault.jpg'
  },
  {
    id: 'uvBR_Mx7VtQ',
    title: 'संदिग्ध KYC कॉल, फर्जी मैसेज और लिंक से बचाव | CyberDost × Delhi Police',
    channel: 'CyberDost I4C (Ministry of Home Affairs)',
    topic: 'Fake KYC Scam',
    filterKey: 'KYC',
    category: 'KYC',
    language: 'Hindi',
    description: 'खाता ब्लॉक होने या KYC अपडेट करने के नाम पर आने वाले फर्जी SMS/कॉल और APK फाइलों से कैसे बचें एवं Sanchar Saathi Chakshu पर रिपोर्ट कैसे करें।',
    descriptionEn: 'Joint Commissioner (Delhi Police IFSO) & CyberDost explain how to spot fake KYC expiry messages and report them on Sanchar Saathi Chakshu.',
    descriptionMr: 'खाते ब्लॉक होण्याच्या किंवा फेक KYC अपडेटच्या नावाखाली येणारे बनावट कॉल व मेसेज कसे ओळखावेत आणि संचार साथीवर तक्रार कशी करावी.',
    desc: 'खाता ब्लॉक होने या KYC अपडेट करने के नाम पर आने वाले फर्जी SMS/कॉल और APK फाइलों से कैसे बचें एवं Sanchar Saathi Chakshu पर रिपोर्ट कैसे करें।',
    thumbnail: 'https://img.youtube.com/vi/uvBR_Mx7VtQ/hqdefault.jpg'
  },
  {
    id: 'YSrjfGS1_ng',
    title: 'RBI Kehta Hai — फर्जी बैंक/कस्टमर केयर कॉल और प्रलोभन से सावधान',
    channel: 'Reserve Bank of India (RBI)',
    topic: 'Fake Customer Care Scam',
    filterKey: 'Customer Care',
    category: 'Customer Care',
    language: 'Hindi',
    description: 'गूगल या सोशल मीडिया पर लिखे फर्जी कस्टमर केयर नंबरों और बैंक के नाम पर आने वाले नकली संदेशों से बचने की आधिकारिक RBI चेतावनी।',
    descriptionEn: 'Official RBI advisory warning against scammers impersonating bank or RBI customer support and sending fictitious offers.',
    descriptionMr: 'गुगलवरील बनावट कस्टमर केअर नंबर आणि बँक अधिकारी भासवून येणाऱ्या फसव्या कॉल्सपासून सावध राहण्याचा RBI चा इशारा.',
    desc: 'गूगल या सोशल मीडिया पर लिखे फर्जी कस्टमर केयर नंबरों और बैंक के नाम पर आने वाले नकली संदेशों से बचने की आधिकारिक RBI चेतावनी।',
    thumbnail: 'https://img.youtube.com/vi/YSrjfGS1_ng/hqdefault.jpg'
  },
  {
    id: 'vMCIRYMwF8k',
    title: 'फर्जी नौकरी और पार्ट-टाइम जॉब फ्रॉड से सावधान | CyberDost I4C',
    channel: 'CyberDost I4C (Ministry of Home Affairs)',
    topic: 'Fake Job Scam',
    filterKey: 'Job Scam',
    category: 'Job Scam',
    language: 'Hindi',
    description: 'घर बैठे कमाई, पार्ट-टाइम जॉब या टास्क पूरे करने के नाम पर पैसे मांगने वाले साइबर ठगों को कैसे पहचानें और 1930 पर शिकायत कैसे करें।',
    descriptionEn: 'CyberDost I4C official awareness session on part-time job and work-from-home fraud, key red flags, and reporting via 1930.',
    descriptionMr: 'घरबसल्या काम किंवा पार्ट-टाइम नोकरीच्या नावाखाली फसवणाऱ्या सायबर भामट्यांना कसे ओळखावे आणि १९३० वर तक्रार कशी करावी.',
    desc: 'घर बैठे कमाई, पार्ट-टाइम जॉब या टास्क पूरे करने के नाम पर पैसे मांगने वाले साइबर ठगों को कैसे पहचानें और 1930 पर शिकायत कैसे करें।',
    thumbnail: 'https://img.youtube.com/vi/vMCIRYMwF8k/hqdefault.jpg'
  },
  {
    id: 'Y9TLtLNO7uw',
    title: 'ऑनलाइन शॉपिंग व रिफंड धोखाधड़ी: नेशनल कंज्यूमर हेल्पलाइन गाइड | Jago Grahak Jago',
    channel: 'Department of Consumer Affairs, Govt. of India',
    topic: 'Online Shopping Fraud',
    filterKey: 'Shopping',
    category: 'Shopping',
    language: 'Hindi',
    description: 'ऑनलाइन शॉपिंग, नकली वेबसाइट और रिफंड धोखाधड़ी होने पर उपभोक्ता मामले विभाग (Jago Grahak Jago) की राष्ट्रीय हेल्पलाइन पर शिकायत दर्ज करने की प्रक्रिया।',
    descriptionEn: 'Official Department of Consumer Affairs (Jago Grahak Jago) guide on resolving online shopping and refund frauds via the National Consumer Helpline.',
    descriptionMr: 'ऑनलाइन शॉपिंग आणि रिफंड फसवणूक झाल्यास राष्ट्रीय ग्राहक हेल्पलाइनवर तक्रार नोंदवण्याची अधिकृत प्रक्रिया.',
    desc: 'ऑनलाइन शॉपिंग, नकली वेबसाइट और रिफंड धोखाधड़ी होने पर उपभोक्ता मामले विभाग (Jago Grahak Jago) की राष्ट्रीय हेल्पलाइन पर शिकायत दर्ज करने की प्रक्रिया।',
    thumbnail: 'https://img.youtube.com/vi/Y9TLtLNO7uw/hqdefault.jpg'
  },
  {
    id: 'nmaMy8o6Lg8',
    title: 'Crypto & Investment Scam या असली निवेश? धोखाधड़ी के संकेत पहचानें | CyberDost',
    channel: 'CyberDost I4C (Ministry of Home Affairs)',
    topic: 'Investment Scam',
    filterKey: 'Investment',
    category: 'Investment',
    language: 'Hindi',
    description: 'दोगुना मुनाफा, फर्जी ट्रेडिंग ऐप और क्रिप्टो इन्वेस्टमेंट ग्रुप के जाल को कैसे पहचानें — I4C फॉरेंसिक विशेषज्ञ प्रिया गुरुदे से जानिए।',
    descriptionEn: 'I4C forensic investigator Priya Gurude explains how to spot fake stock trading apps, guaranteed-return schemes, and investment scams.',
    descriptionMr: 'दुप्पट नफ्याचे आमिष दाखवणारे बनावट ट्रेडिंग ॲप्स आणि गुंतवणूक घोटाळे कसे ओळखावेत — सायबर दोस्त मार्गदर्शन.',
    desc: 'दोगुना मुनाफा, फर्जी ट्रेडिंग ऐप और क्रिप्टो इन्वेस्टमेंट ग्रुप के जाल को कैसे पहचानें — I4C फॉरेंसिक विशेषज्ञ प्रिया गुरुदे से जानिए।',
    thumbnail: 'https://img.youtube.com/vi/nmaMy8o6Lg8/hqdefault.jpg'
  },
  {
    id: 'YPwd_Kmp25k',
    title: 'WhatsApp और Telegram पर होने वाले साइबर स्कैम से कैसे बचें? | Latest WhatsApp Scams & Security Tips',
    channel: 'CyberDost I4C (Ministry of Home Affairs)',
    topic: 'WhatsApp Scam',
    filterKey: 'WhatsApp',
    category: 'WhatsApp',
    language: 'Hindi',
    description: 'WhatsApp पर अनजान वीडियो कॉल, स्क्रीन-शेयरिंग, APK फाइल और फर्जी ग्रुप स्कैम से बचने के उपाय और Two-Step Verification की जानकारी।',
    descriptionEn: 'Learn how scammers use WhatsApp and Telegram links, screen-sharing, and fake groups to hijack accounts, and how to stay protected.',
    descriptionMr: 'व्हॉट्सॲप व टेलिग्रामवरील अनोळखी लिंक्स, स्क्रीन शेअरिंग आणि बनावट ग्रुप फसवणुकीपासून स्वतःचे संरक्षण कसे करावे.',
    desc: 'WhatsApp पर अनजान वीडियो कॉल, स्क्रीन-शेयरिंग, APK फाइल और फर्जी ग्रुप स्कैम से बचने के उपाय और Two-Step Verification की जानकारी।',
    thumbnail: 'https://img.youtube.com/vi/YPwd_Kmp25k/hqdefault.jpg'
  },
  {
    id: 'yvKhz8Dey20',
    title: 'सोशल मीडिया पर फर्जी प्रोफाइल और इमोशनल स्कैम से बचाव | CyberDost Podcast',
    channel: 'CyberDost I4C (Ministry of Home Affairs)',
    topic: 'Social Media Scam',
    filterKey: 'Social Media',
    category: 'Social Media',
    language: 'Hindi',
    description: 'इंस्टाग्राम और फेसबुक पर नकली प्रोफाइल (Fake Profiles), मित्र बनकर पैसे मांगने और सोशल मीडिया ब्लैकमेलिंग से सुरक्षित रहने के तरीके।',
    descriptionEn: 'CyberDost Hindi podcast covering fake social media profiles, impersonation requests, emotional manipulation, and account privacy.',
    descriptionMr: 'सोशल मीडियावरील बनावट प्रोफाइल, मित्र बनून पैसे मागणे आणि ब्लॅकमेलिंगपासून सुरक्षित राहण्याचे उपाय.',
    desc: 'इंस्टाग्राम और फेसबुक पर नकली प्रोफाइल (Fake Profiles), मित्र बनकर पैसे मांगने और सोशल मीडिया ब्लैकमेलिंग से सुरक्षित रहने के तरीके।',
    thumbnail: 'https://img.youtube.com/vi/yvKhz8Dey20/hqdefault.jpg'
  },
  {
    id: 'h7ShT2-45hc',
    title: 'Frauds Using UPI – QR Codes | QR कोड स्कैन फ्रॉड से सावधान (RBI)',
    channel: 'Reserve Bank of India (RBI)',
    topic: 'QR Code Scam',
    filterKey: 'QR Code',
    category: 'QR Code',
    language: 'Hindi',
    description: 'RBI की महत्वपूर्ण चेतावनी: QR कोड केवल पैसे भेजने (Pay) के लिए स्कैन किया जाता है, पैसे प्राप्त करने (Receive) के लिए कभी भी QR कोड स्कैन न करें।',
    descriptionEn: 'Reserve Bank of India (RBI) advisory explaining why scanning a QR code is strictly for paying money and never for receiving money.',
    descriptionMr: 'RBI चा महत्त्वाचा इशारा: QR कोड फक्त पैसे देण्यासाठी स्कॅन केला जातो, पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन करू नका.',
    desc: 'RBI की महत्वपूर्ण चेतावनी: QR कोड केवल पैसे भेजने (Pay) के लिए स्कैन किया जाता है, पैसे प्राप्त करने (Receive) के लिए कभी भी QR कोड स्कैन न करें।',
    thumbnail: 'https://img.youtube.com/vi/h7ShT2-45hc/hqdefault.jpg'
  },
  {
    id: 'siyTZ6DaFeQ',
    title: 'RBI Digital Arrest — फर्जी पुलिस पूछताछ और वीडियो कॉल की धमकी से सावधान',
    channel: 'Reserve Bank of India (RBI)',
    topic: 'Digital Arrest Scam',
    filterKey: 'Digital Arrest',
    category: 'Digital Arrest',
    language: 'Hindi',
    description: 'पुलिस, CBI या जज बनकर वीडियो कॉल पर "डिजिटल अरेस्ट" (Digital Arrest) की धमकी देने वाले ठगों का सच — कोई भी सरकारी एजेंसी वीडियो कॉल पर गिरफ्तारी नहीं करती।',
    descriptionEn: 'Official RBI Hindi awareness film exposing Digital Arrest scams where criminals impersonate police or CBI officers on video calls.',
    descriptionMr: 'पोलीस किंवा CBI अधिकारी भासवून व्हिडिओ कॉलवर "डिजिटल अरेस्ट" ची भीती दाखवणाऱ्या सायबर भामट्यांचे सत्य — RBI जनजागृती.',
    desc: 'पुलिस, CBI या जज बनकर वीडियो कॉल पर "डिजिटल अरेस्ट" (Digital Arrest) की धमकी देने वाले ठगों का सच — कोई भी सरकारी एजेंसी वीडियो कॉल पर गिरफ्तारी नहीं करती।',
    thumbnail: 'https://img.youtube.com/vi/siyTZ6DaFeQ/hqdefault.jpg'
  },
  {
    id: 'KRHkgPZ9kTE',
    title: 'Cyber Alert: पहचान की चोरी (Identity Theft) और Mule Account से होने वाले अपराध',
    channel: 'DD News (Cyber Alert)',
    topic: 'Identity Theft',
    filterKey: 'Identity Theft',
    category: 'Identity Theft',
    language: 'Hindi',
    description: 'DD News के विशेष कार्यक्रम Cyber Alert में जानिए कैसे आधार/पैन कार्ड और पहचान की चोरी (Identity Theft) से फर्जी बैंक खाते (Mule Accounts) खोले जाते हैं।',
    descriptionEn: 'DD News Cyber Alert episode explaining how stolen identity documents (Aadhaar/PAN) are misused to open mule bank accounts for cybercrime.',
    descriptionMr: 'DD News च्या Cyber Alert कार्यक्रमात जाणून घ्या आधार/पॅन कार्ड व ओळखीच्या चोरीद्वारे (Identity Theft) बनावट बँक खाती कशी उघडली जातात.',
    desc: 'DD News के विशेष कार्यक्रम Cyber Alert में जानिए कैसे आधार/पैन कार्ड और पहचान की चोरी (Identity Theft) से फर्जी बैंक खाते (Mule Accounts) खोले जाते हैं।',
    thumbnail: 'https://img.youtube.com/vi/KRHkgPZ9kTE/hqdefault.jpg'
  },
  {
    id: 't-HVMjUZcK4',
    title: 'SIM Swap और मोबाइल फ्रॉड से सुरक्षा: Sanchar Saathi व SIM Lock गाइड',
    channel: 'CyberDost I4C (Ministry of Home Affairs)',
    topic: 'SIM Swap / Mobile Fraud',
    filterKey: 'Mobile Fraud',
    category: 'Mobile Fraud',
    language: 'Hindi',
    description: 'SIM Swap फ्रॉड, मोबाइल चोरी और फर्जी सिम कार्ड से अपने बैंक खातों को कैसे बचाएं और Sanchar Saathi पोर्टल से अपने नाम के सिम कैसे जांचें।',
    descriptionEn: 'CyberDost I4C guide on preventing SIM Swap and mobile number hijacking, enabling SIM lock, and checking active SIMs on Sanchar Saathi.',
    descriptionMr: 'सिम स्वॅप (SIM Swap) आणि मोबाईल फसवणुकीपासून बँक खाती कशी वाचवावीत आणि संचार साथी पोर्टलवर आपल्या नावावरील सिम कसे तपासावेत.',
    desc: 'SIM Swap फ्रॉड, मोबाइल चोरी और फर्जी सिम कार्ड से अपने बैंक खातों को कैसे बचाएं और Sanchar Saathi पोर्टल से अपने नाम के सिम कैसे जांचें।',
    thumbnail: 'https://img.youtube.com/vi/t-HVMjUZcK4/hqdefault.jpg'
  },
  {
    id: 'C1bWT4hb95E',
    title: 'RBI Kehta Hai — फर्जी लोन ऐप्स (Fake Loan Apps) से बचें, केवल RBI-पंजीकृत संस्था से ऋण लें',
    channel: 'Reserve Bank of India (RBI)',
    topic: 'Loan App / Digital Loan Scam',
    filterKey: 'Loan App',
    category: 'Loan App',
    language: 'Hindi',
    description: 'बिना कागजात तुरंत लोन देने का झांसा देकर फोटो मॉर्फिंग और ब्लैकमेल करने वाले अवैध लोन ऐप्स से बचें — केवल RBI द्वारा पंजीकृत बैंक/NBFC से ही ऋण लें।',
    descriptionEn: 'Official RBI Kehta Hai Hindi awareness video warning citizens against illegal instant loan apps and advising borrowing only from regulated entities.',
    descriptionMr: 'कागदपत्रांशिवाय तात्काळ कर्जाचे आमिष दाखवून ब्लॅकमेल करणाऱ्या बेकायदेशीर लोन ॲप्सपासून सावध राहा — फक्त RBI नोंदणीकृत संस्थेकडूनच कर्ज घ्या.',
    desc: 'बिना कागजात तुरंत लोन देने का झांसा देकर फोटो मॉर्फिंग और ब्लैकमेल करने वाले अवैध लोन ऐप्स से बचें — केवल RBI द्वारा पंजीकृत बैंक/NBFC से ही ऋण लें।',
    thumbnail: 'https://img.youtube.com/vi/C1bWT4hb95E/hqdefault.jpg'
  }
];

const animatedStories = [
  {
    id: 1,
    icon: '👵',
    title: 'Dadi and the Fake Bank Call',
    category: 'OTP Fraud',
    summary: 'Grandmother receives a call claiming her pension account is locked and requiring an instant OTP.',
    scenes: [
      {
        icon: '📞',
        caption: 'An urgent phone call arrives. The caller claims to be the Head Manager of her pension bank branch.'
      },
      {
        icon: '⚠️',
        caption: 'He warns that without immediate biometric OTP verification, her monthly pension will stop tomorrow.'
      },
      {
        icon: '📱',
        caption: 'An SMS arrives on Dadi’s phone with a 6-digit number. The caller insists: “Read it to me right now!”'
      },
      {
        icon: '🛡️',
        caption: 'Her granddaughter stops her: “Dadi, banks never ask for OTPs over call! Let us visit the branch together”.'
      }
    ],
    lesson: 'Never read out OTPs or passwords over the phone to anyone, no matter how official they sound.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'The UPI Refund Trap',
    category: 'UPI Fraud',
    summary: 'A college student receives an unexpected ₹1,000 refund request on their PhonePe app.',
    scenes: [
      {
        icon: '💸',
        caption: 'Rohan gets a call: “Sir, I accidentally sent ₹5,000 to your GPay. I am sending you a refund request to return it”.'
      },
      {
        icon: '🔔',
        caption: 'A notification pops up on Rohan’s screen with a big button: “PAY ₹5,000”.'
      },
      {
        icon: '🔢',
        caption: 'The caller insists: “Just click Pay and enter your 4-digit secret UPI PIN to complete the deposit”.'
      },
      {
        icon: '💡',
        caption: 'Rohan remembers the Golden Rule: “Entering my PIN sends money away, it never receives money!” He declines.'
      }
    ],
    lesson: 'You NEVER need to enter your UPI PIN to receive money into your bank account.'
  },
  {
    id: 3,
    icon: '💼',
    title: 'The Dream Job That Wasn’t',
    category: 'Job Scams',
    summary: 'A job seeker is offered a high-paying international role in exchange for “processing fees”.',
    scenes: [
      {
        icon: '📧',
        caption: 'Priya receives an offer letter from an overseas company offering ₹75,000/month for simple data entry.'
      },
      {
        icon: '💳',
        caption: 'Before sending the work laptop, the recruiter demands a ₹2,500 “refundable security deposit”.'
      },
      {
        icon: '🤔',
        caption: 'Priya notices the email address is careers-accenture@gmail.com instead of an official company domain.'
      },
      {
        icon: '🛡️',
        caption: 'She verifies with CyberSathi and discovers legitimate employers never charge fees to hire candidates.'
      }
    ],
    lesson: 'Any job that requires you to pay money to get hired or unlock assignments is a scam.'
  },
  {
    id: 4,
    icon: '📦',
    title: 'The Parcel Delivery Link',
    category: 'Phishing',
    summary: 'A shopkeeper receives an SMS claiming an urgent courier delivery is held for a ₹5 address fee.',
    scenes: [
      {
        icon: '📨',
        caption: 'An SMS arrives: “IndiaPost: Your parcel has incorrect address. Update within 12h or it will be returned”.'
      },
      {
        icon: '🔗',
        caption: 'A link is attached: http://indiapost-update-track.top/address. The page looks identical to India Post.'
      },
      {
        icon: '💳',
        caption: 'The page asks for Name, Phone, and ATM Card Number with CVV to pay a nominal ₹5 redelivery charge.'
      },
      {
        icon: '🛑',
        caption: 'The shopkeeper checks the official portal indiapost.gov.in directly. His actual tracking number has no issues!'
      }
    ],
    lesson: 'Official post and delivery services do not ask for debit card numbers through unofficial domain links.'
  },
  {
    id: 5,
    icon: '🌾',
    title: 'The PM-Kisan WhatsApp Group',
    category: 'Govt Schemes',
    summary: 'A farmer is asked to pay registration fees on an unauthorized app to receive agricultural subsidies.',
    scenes: [
      {
        icon: '🚜',
        caption: 'A message in the village WhatsApp group promises a special ₹12,000 government tractor subsidy grant.'
      },
      {
        icon: '📥',
        caption: 'The link prompts the user to download an APK file called “PM_Kisan_Yojna_2025.apk”.'
      },
      {
        icon: '🔐',
        caption: 'Upon installation, the app requests permission to read SMS, contacts, and access the phone camera.'
      },
      {
        icon: '🌾',
        caption: 'The village CyberSathi volunteer warns them: “Government schemes only operate via pmkisan.gov.in!”'
      }
    ],
    lesson: 'Always verify government schemes on official .gov.in websites or the myScheme portal.'
  }
];

const fraudStories = [
  {
    id: 'pune-digital-arrest',
    year: '2025',
    location: 'Pune, Maharashtra',
    type: 'Digital Arrest / Video Impersonation',
    source: 'The Indian Express',
    url: 'https://indianexpress.com/article/cities/pune/retired-airline-executive-loses-rs-1-crore-digital-arrest-scam-9844192/',
    en: {
      title: 'Retired Airline Executive Loses ₹1 Crore in Digital Arrest Scam',
      summary: 'A 68-year-old retired airline executive in Pune reported losing ₹1 crore after callers posing as Delhi Police and CBI officials threatened her with money-laundering charges.',
      start: 'The scam began with an automated call stating her mobile number was registered against multiple illegal bank accounts involved in international money laundering.',
      worked: 'Fraudsters placed her on continuous Skype video calls for 48 hours, showing fabricated police stations, fake Supreme Court warrants, and forcing her to transfer funds for “RBI verification”.',
      warning: [
        'Calls from “officials” conducted over Skype, Zoom or WhatsApp video.',
        'Threats of instant arrest unless funds are transferred to an escrow account.',
        'Orders to remain isolated in a closed room (“Digital Arrest”).'
      ],
      wrong: 'The victim believed the fake video setup and kept the calls secret from her family under fear of immediate imprisonment.',
      do: 'Understand that Indian law enforcement NEVER conducts arrests via video calls. Hang up immediately, talk to family, and dial 1930.',
      lesson: 'There is no legal concept called “Digital Arrest” in India. Real police and courts serve physical summons.'
    },
    hi: {
      title: 'पुणे: सेवानिवृत्त एयरलाइन अधिकारी डिजिटल अरेस्ट ठगी का शिकार (₹1 करोड़)',
      summary: 'पुणे की 68 वर्षीय सेवानिवृत्त एयरलाइन अधिकारी ने बताया कि दिल्ली पुलिस और CBI अधिकारी बनकर बात करने वालों ने मनी लॉन्ड्रिंग के नाम पर डराया और उनसे ₹1 करोड़ की ठगी की।',
      start: 'ठगी की शुरुआत एक अज्ञात फोन से हुई, जिसमें कहा गया कि उनके नाम पर कई अवैध बैंक खाते खोले गए हैं।',
      worked: 'ठगों ने उन्हें 48 घंटे तक स्काइप वीडियो कॉल पर रखा, नकली पुलिस स्टेशन और कोर्ट का फर्जी वारंट दिखाया और पैसे “सत्यापन” के लिए भेजने का भारी दबाव बनाया।',
      warning: [
        'स्काइप या व्हाट्सएप वीडियो कॉल पर खुद को पुलिस या सीबीआई अधिकारी बताना।',
        'तुरंत गिरफ्तारी का डर दिखाकर पैसे ट्रांसफर करने की मांग करना।',
        'कमरे में बंद रहने और किसी को न बताने का दबाव (“डिजिटल अरेस्ट”)।'
      ],
      wrong: 'पीड़िता ने डर के कारण परिवार को नहीं बताया और ठगों के बताए फर्जी खातों में पैसे भेज दिए।',
      do: 'कॉल तुरंत काटें, नजदीकी पुलिस स्टेशन या परिवार को बताएं और राष्ट्रीय हेल्पलाइन 1930 पर शिकायत करें।',
      lesson: 'भारतीय कानून में “डिजिटल अरेस्ट” जैसी कोई व्यवस्था नहीं है। असली अधिकारी कभी वीडियो कॉल पर पैसे नहीं मांगते।'
    },
    mr: {
      title: 'पुणे: निवृत्त विमानसेवा अधिकारी डिजिटल अरेस्ट फसवणुकीची शिकार (₹1 कोटी)',
      summary: 'पुण्यातील एका निवृत्त महिला अधिकाऱ्याला दिल्ली सायबर अधिकारी असल्याचे भासवून मनी लाँड्रिंगच्या नावाखाली घाबरवून ₹1 कोटींची फसवणूक करण्यात आली.',
      start: 'त्यांच्या नावावर बनावट बँक खाती उघडल्याचे सांगणाऱ्या एका अचानक आलेल्या फोनने या फसवणुकीची सुरुवात झाली.',
      worked: 'ठगांनी स्काइप व्हिडिओ कॉलवर बनावट पोलीस स्टेशन, न्यायालयाचे खोटे वॉरंट दाखवले आणि पैसे तपासणीसाठी वर्ग करण्याचा दबाव आणला.',
      warning: [
        'व्हिडिओ कॉलवर पोलीस किंवा न्यायालयाचा अधिकारी असल्याचे भासवणे.',
        'अटकेची भीती दाखवून पैसे ट्रान्सफर करण्याची मागणी करणे.',
        'कुणालाही न सांगण्याची आणि खोलीतच राहण्याची सक्ती करणे.'
      ],
      wrong: 'पीडित महिलेने घाबरून कुटुंबाला सांगितले नाही आणि ठगांवर विश्वास ठेवला.',
      do: 'फोन त्वरित बंद करा, अधिकृत पोलीस ठाण्याशी संपर्क करा आणि 1930 हेल्पलाईनवर तक्रार नोंदवा.',
      lesson: 'भारतात “डिजिटल अरेस्ट” असा कोणताही कायदेशीर प्रकार नाही. पोलीस कधीही पैशांची मागणी करत नाहीत.'
    },
    miniQuiz: [
      {
        question: {
          en: 'A caller on Skype wearing a police uniform claims you are under "Digital Arrest" and must transfer ₹50,000 for verification. What should you do?',
          hi: 'स्काइप पर पुलिस की वर्दी पहने व्यक्ति का कॉल आता है कि आप "डिजिटल अरेस्ट" हैं और ₹50,000 भेजने होंगे। आप क्या करेंगे?',
          mr: 'स्काईपवर पोलिसांच्या गणवेशातील व्यक्ती तुम्हाला "डिजिटल अरेस्ट" सांगून ५०,००० रुपये ट्रान्सफर करण्यास सांगते. तुम्ही काय कराल?'
        },
        options: {
          en: [
            'Transfer the money immediately to avoid jail',
            'Disconnect immediately, do not transfer any money, and dial 1930',
            'Ask the caller for a court-stamped receipt',
            'Stay locked in your room for 24 hours'
          ],
          hi: [
            'जेल से बचने के लिए तुरंत पैसे भेजेंगे',
            'कॉल तुरंत काटेंगे, एक भी रुपया नहीं भेजेंगे और 1930 पर कॉल करेंगे',
            'कोर्ट की रसीद मांगेंगे',
            'कमरे में 24 घंटे बंद रहेंगे'
          ],
          mr: [
            'तुरुंगात जाणे टाळण्यासाठी लगेच पैसे पाठवू',
            'कॉल तात्काळ बंद करू, पैसे पाठवणार नाही आणि 1930 वर तक्रार करू',
            'न्यायालयाची पावती मागू',
            'दिवसभर खोलीत बंद राहू'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Indian law enforcement and courts NEVER conduct arrests or trials over video calls and NEVER ask for money transfers.',
          hi: 'भारतीय पुलिस या अदालत कभी भी वीडियो कॉल पर गिरफ्तारी नहीं करती और न ही पैसे ट्रांसफर करने को कहती है।',
          mr: 'भारतीय पोलीस किंवा न्यायालय कधीही व्हिडिओ कॉलवर अटक करत नाहीत आणि पैसे मागत नाहीत.'
        }
      },
      {
        question: {
          en: 'What is the legal status of "Digital Arrest" under Indian law?',
          hi: 'भारतीय कानून के तहत "डिजिटल अरेस्ट" की क्या कानूनी स्थिति है?',
          mr: 'भारतीय कायद्यानुसार "डिजिटल अरेस्ट" चे कायदेशीर स्थान काय आहे?'
        },
        options: {
          en: [
            'It is a recognized emergency law',
            'There is NO such legal concept in India; it is 100% a cyber scam',
            'It is only applicable to bank managers',
            'It was created under IT Act rules'
          ],
          hi: [
            'यह एक आपातकालीन कानूनी नियम है',
            'भारत में ऐसा कोई कानून नहीं है; यह 100% साइबर ठगी है',
            'यह केवल बैंक अधिकारियों के लिए है',
            'यह आईटी एक्ट का नया नियम है'
          ],
          mr: [
            'हा एक अधिकृत कायदेशीर नियम आहे',
            'भारतात असा कोणताही कायदा नाही; ही १००% सायबर फसवणूक आहे',
            'हा नियम फक्त बँक व्यवस्थापकांसाठी आहे',
            'हा नवीन सरकारी नियम आहे'
          ]
        },
        answer: 1,
        explanation: {
          en: 'The Ministry of Home Affairs has repeatedly clarified that Indian law has no provision for Digital Arrest.',
          hi: 'गृह मंत्रालय ने स्पष्ट किया है कि भारतीय कानून में डिजिटल अरेस्ट नाम की कोई व्यवस्था नहीं है।',
          mr: 'गृह मंत्रालयाने स्पष्ट केले आहे की भारतीय कायद्यात डिजिटल अरेस्ट अशी कोणतीही तरतूद नाही.'
        }
      },
      {
        question: {
          en: 'What should you do before transferring high amounts of money under fear, threats or urgency?',
          hi: 'डर या जल्दबाजी में बड़ी रकम ट्रांसफर करने से पहले आपको क्या करना चाहिए?',
          mr: 'भीती किंवा घाईगडबडीत मोठी रक्कम पाठवण्यापूर्वी काय केले पाहिजे?'
        },
        options: {
          en: [
            'Consult with trusted family members or local police immediately',
            'Keep it completely secret so nobody finds out',
            'Delete all your phone records',
            'Borrow more money to pay the caller'
          ],
          hi: [
            'परिवार के सदस्यों या स्थानीय पुलिस से तुरंत सलाह लें',
            'इसे पूरी तरह गुप्त रखें ताकि किसी को पता न चले',
            'फोन से सारे रिकॉर्ड मिटा दें',
            'फोन करने वाले को देने के लिए और कर्ज लें'
          ],
          mr: [
            'कुटुंबातील व्यक्तींशी किंवा स्थानिक पोलिसांशी तात्काळ चर्चा करा',
            'कोणालाही कळू नये म्हणून गुप्त ठेवा',
            'मोबाईलमधील सर्व मेसेज डिलिट करा',
            'पैसे देण्यासाठी मित्रांकडून कर्ज घ्या'
          ]
        },
        answer: 0,
        explanation: {
          en: 'Scammers rely on isolation and fear. Talking to at least one trusted person immediately exposes the fraud.',
          hi: 'ठग आपको डराकर अकेला करने की कोशिश करते हैं। किसी भी एक समझदार व्यक्ति से बात करने पर ठगी तुरंत पकड़ में आ जाती है।',
          mr: 'भामटे भीती दाखवून तुम्हाला एकटे पाडतात. कुटुंबाशी बोलल्यास फसवणूक तात्काळ उघड होते.'
        }
      }
    ]
  },
  {
    id: 'delhi-kyc-phishing',
    year: '2025',
    location: 'New Delhi',
    type: 'Bank KYC Phishing & Screen Takeover',
    source: 'The Indian Express',
    url: 'https://indianexpress.com/article/cities/delhi/delhi-man-loses-sbi-kyc-update-call-police-trace-scam-jharkhand-10101323/',
    en: {
      title: 'Delhi: KYC Phishing Link Leads to ₹10.8 Lakh Loss',
      summary: 'A resident of Delhi reported losing ₹10.8 lakh after clicking an SMS link purporting to update his State Bank of India KYC.',
      start: 'The victim received a message: “Dear customer, your SBI netbanking will be suspended today. Click here to update your Aadhaar KYC”.',
      worked: 'The link loaded a duplicate portal where the victim entered credentials. A follow-up caller guided him to share the OTP received, draining the account.',
      warning: [
        'SMS from personal mobile numbers claiming to be nationalized banks.',
        'Demands to complete KYC within a matter of hours.',
        'Links redirecting to non-bank domain names.'
      ],
      wrong: 'The victim used the link in the message instead of logging directly into the official bank mobile application.',
      do: 'Always open the official banking app independently. Never click links in unexpected alert messages.',
      lesson: 'Banks never deactivate accounts via SMS links. All authentic KYC happens at the branch or verified official app.'
    },
    hi: {
      title: 'दिल्ली: फर्जी KYC लिंक से ₹10.8 लाख की ठगी',
      summary: 'दिल्ली के एक नागरिक को बैंक KYC अपडेट करने का फर्जी SMS मिला, जिसके बाद उनके बैंक खाते से ₹10.8 लाख की अनधिकृत निकासी हो गई।',
      start: 'पीड़ित को मैसेज मिला कि उनका खाता आज रात ब्लॉक हो जाएगा, तुरंत लिंक पर क्लिक करके आधार अपडेट करें।',
      worked: 'फर्जी वेबसाइट पर इंटरनेट बैंकिंग आईडी दर्ज कराई गई और बाद में कॉल करके OTP पूछकर खाते से पैसे उड़ा लिए गए।',
      warning: [
        'सामान्य 10 अंकों के मोबाइल नंबर से बैंक के नाम पर मैसेज आना।',
        'खाता तुरंत बंद होने की झूठी चेतावनी।',
        'अज्ञात वेब लिंक पर बैंक पासवर्ड या OTP मांगना।'
      ],
      wrong: 'पीड़ित ने बैंक के आधिकारिक ऐप के बजाय मैसेज में दिए गए लिंक पर भरोसा किया।',
      do: 'मैसेज में आए लिंक कभी न खोलें। हमेशा बैंक की आधिकारिक वेबसाइट खुद टाइप करें या शाखा जाएं।',
      lesson: 'बैंक कभी भी SMS लिंक के जरिए KYC करने को नहीं कहता।'
    },
    mr: {
      title: 'दिल्ली: बनावट KYC लिंकमुळे ₹10.8 लाखांची फसवणूक',
      summary: 'दिल्लीतील एका नागरिकाला बँक KYC अपडेट करण्याचा खोटा SMS आला आणि खात्यातून ₹10.8 लाख परस्पर वळते झाले.',
      start: 'खाते आजच बंद होईल अशी भीती दाखवून मेसेजमधील लिंकवर आधार कार्ड आणि बँक तपशील भरण्यास सांगितले गेले.',
      worked: 'बनावट संकेतस्थळावर बँक आयडी मिळवून ठगाने फोनवरून OTP विचारून सर्व पैसे काढून घेतले.',
      warning: [
        'अनोळखी मोबाईल नंबरवरून बँकेचा अधिकृत मेसेज असल्यासारखा भासवणे.',
        'खाते बंद होण्याची घाई करणे.',
        'फोनवर किंवा लिंकवर OTP आणि पासवर्ड विचारणे.'
      ],
      wrong: 'अधिकृत बँक अॅपऐवजी मेसेजमधील लिंकवर विश्वास ठेवला गेला.',
      do: 'अशा लिंकवर कधीही क्लिक करू नका. बँकेच्या अधिकृत अॅपवरूनच व्यवहार तपासा.',
      lesson: 'KYC फक्त बँकेच्या अधिकृत शाखेत किंवा अधिकृत अॅपवरच होते.'
    },
    miniQuiz: [
      {
        question: {
          en: 'You receive an SMS: "Your bank netbanking will be suspended today. Click bit.ly/kyc to update Aadhaar." What should you do?',
          hi: 'मैसेज आता है: "आपका बैंक खाता आज बंद हो जाएगा। आधार अपडेट के लिए लिंक पर क्लिक करें।" आप क्या करेंगे?',
          mr: 'मेसेज येतो: "तुमचे बँक खाते आजच बंद होईल. आधार अपडेटसाठी दिलेल्या लिंकवर क्लिक करा." तुम्ही काय कराल?'
        },
        options: {
          en: [
            'Click the link and fill in your debit card details quickly',
            'Delete the SMS, never click the link, and check only inside your official bank app',
            'Forward the message to your friends',
            'Call the 10-digit number that sent the text'
          ],
          hi: [
            'लिंक खोलकर जल्दी से कार्ड डिटेल भरेंगे',
            'मैसेज हटाएंगे, लिंक पर कभी क्लिक नहीं करेंगे और सिर्फ आधिकारिक ऐप में देखेंगे',
            'मैसेज दोस्तों को भेजेंगे',
            'एसएमएस भेजने वाले नंबर पर कॉल करेंगे'
          ],
          mr: [
            'लिंक उघडून पटकन कार्ड नंबर भरू',
            'मेसेज डिलिट करू, लिंकवर क्लिक करणार नाही आणि फक्त अधिकृत बँक ॲप उघडू',
            'मेसेज मित्रांना पाठवू',
            'मेसेज आलेल्या नंबरवर फोन करू'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Banks never deactivate accounts via SMS links. Legitimate bank communications come with verified official alphanumeric headers.',
          hi: 'बैंक कभी भी SMS लिंक के जरिए खाता बंद नहीं करते। आधिकारिक मैसेज बैंक के नाम वाले विशेष हेडर से आते हैं।',
          mr: 'बँक कधीही SMS मधील लिंकवरून खाते बंद करत नाही. अधिकृत मेसेज बँकेच्या नावानेच येतात.'
        }
      },
      {
        question: {
          en: 'A caller asks for the 6-digit OTP sent to your phone to "complete your urgent bank KYC". Should you share it?',
          hi: 'कॉल करने वाला कहता है कि बैंक KYC पूरा करने के लिए फोन पर आया 6 अंकों का OTP बताएं। क्या आप बताएंगे?',
          mr: 'फोन करणारा बँक KYC पूर्ण करण्यासाठी फोनवर आलेला ६ अंकी OTP मागतो. तुम्ही सांगाल का?'
        },
        options: {
          en: [
            'Yes, if the caller sounds authoritative and polite',
            'No, NEVER share an OTP with any caller under any circumstances',
            'Yes, but only if they promise a cashback',
            'Share only the first 3 digits'
          ],
          hi: [
            'हां, अगर कॉल करने वाला विनम्र लग रहा हो',
            'नहीं, किसी भी हाल में किसी के साथ OTP कभी साझा न करें',
            'हां, अगर कैशबैक मिलने वाला हो',
            'सिर्फ पहले 3 अंक बताएंगे'
          ],
          mr: [
            'होय, समोरचा नम्रपणे बोलत असेल तर',
            'नाही, कोणत्याही परिस्थितीत कोणालाही OTP सांगू नये',
            'होय, कॅशबॅक मिळणार असेल तर',
            'फक्त पहिले ३ अंक सांगू'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Sharing an OTP allows fraudsters direct authorization to drain your account. Authentic bank staff never request OTPs.',
          hi: 'OTP साझा करने से ठगों को पैसे निकालने की अनुमति मिल जाती है। बैंक कभी OTP नहीं मांगता।',
          mr: 'OTP सांगितल्यास भामटे खात्यातील सर्व पैसे काढून घेतात. बँक कर्मचारी कधीही OTP मागत नाहीत.'
        }
      },
      {
        question: {
          en: 'If you lose money in an online banking scam, what is your first immediate action?',
          hi: 'ऑनलाइन बैंकिंग ठगी में पैसे कटने पर आपकी पहली और सबसे जरूरी कार्रवाई क्या होनी चाहिए?',
          mr: 'ऑनलाइन सायबर फसवणुकीत पैसे गेल्यास तुमची सर्वात पहिली कृती काय असावी?'
        },
        options: {
          en: [
            'Wait 3 days to see if the money automatically returns',
            'Immediately dial National Cybercrime Helpline 1930 and inform your bank within the Golden Hour',
            'Post a complaint on personal social media without calling 1930',
            'Delete your mobile banking app and format your phone'
          ],
          hi: [
            '3 दिन इंतजार करेंगे कि शायद पैसे खुद वापस आ जाएं',
            'गोल्डन ऑवर में तुरंत राष्ट्रीय हेल्पलाइन 1930 डायल करेंगे और बैंक को खाता ब्लॉक करने को कहेंगे',
            'सोशल मीडिया पर पोस्ट लिखेंगे लेकिन 1930 पर कॉल नहीं करेंगे',
            'फोन फॉर्मेट कर देंगे'
          ],
          mr: [
            'पैसे आपोआप परत येतील म्हणून ३ दिवस वाट पाहू',
            'गोल्डन अवरमध्ये तात्काळ राष्ट्रीय हेल्पलाइन 1930 डायल करू आणि बँकेला व्यवहार थांबवण्यास सांगू',
            'सोशल मीडियावर पोस्ट टाकू पण तक्रार करणार नाही',
            'फोन रिसेट करू'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Reporting to 1930 and your bank within the first 1-2 hours (the Golden Hour) gives authorities the best chance to freeze stolen money before withdrawal.',
          hi: 'पहले 1-2 घंटे (गोल्डन ऑवर) में 1930 और बैंक को सूचित करने से चुराए गए पैसे को तुरंत फ्रीज कराने की सबसे ज्यादा संभावना होती है।',
          mr: 'पहिल्या १-२ तासांत (गोल्डन अवर) 1930 आणि बँकेशी संपर्क साधल्यास चोरी झालेले पैसे गोठवण्याची दाट शक्यता असते.'
        }
      }
    ]
  },
  {
    id: 'mumbai-whatsapp-executive',
    year: '2025',
    location: 'Mumbai, Maharashtra',
    type: 'WhatsApp Impersonation / CEO Fraud',
    source: 'The Times of India',
    url: 'https://timesofindia.indiatimes.com/city/mumbai/faking-top-execs-whatsapp-dp-fraud-dupes-co-of-4-4cr/articleshow/118223331.cms',
    en: {
      title: 'Mumbai: ₹4.4 Crore Siphoned via WhatsApp Executive Impersonation',
      summary: 'A corporate finance manager was tricked into transferring ₹4.4 crore after receiving WhatsApp messages from a fraudster using the Managing Director’s photograph.',
      start: 'The manager received WhatsApp messages from a new number displaying the MD’s photograph, stating the executive was in a confidential board meeting.',
      worked: 'The impersonator ordered urgent RTGS transfers for a confidential corporate acquisition, strictly forbidding standard voice calls.',
      warning: [
        'A senior executive messaging from an unknown mobile number.',
        'Demanding high-value urgent money transfers under secrecy.',
        'Refusal to speak on normal voice or internal video channels.'
      ],
      wrong: 'The employee executed the financial transfers without verifying the instruction through a secondary verified communication channel.',
      do: 'Establish dual-authorization protocols: any wire transfer must be confirmed via official in-person or direct voice confirmation.',
      lesson: 'A profile picture and name on WhatsApp is never legal proof of someone’s identity.'
    },
    hi: {
      title: 'मुंबई: WhatsApp पर MD बनकर ₹4.4 करोड़ की ठगी',
      summary: 'मुंबई की एक कंपनी में वरिष्ठ अधिकारी की फोटो लगाकर WhatsApp मैसेज भेजे गए और वित्त प्रबंधक से ₹4.4 करोड़ ट्रांसफर करवा लिए गए।',
      start: 'प्रबंधक को नए नंबर से मैसेज आया, जिस पर कंपनी के एमडी की तस्वीर थी और जरूरी मीटिंग में होने की बात कही गई।',
      worked: 'ठग ने एक गोपनीय डील के नाम पर तुरंत बड़ी रकम ट्रांसफर करने के निर्देश दिए और फोन कॉल करने से मना किया।',
      warning: [
        'अपरिचित नंबर पर किसी वरिष्ठ अधिकारी की फोटो दिखना।',
        'गोपनीयता का बहाना बनाकर तुरंत पैसे भेजने का दबाव।',
        'सामान्य फोन कॉल पर बात करने से बचना।'
      ],
      wrong: 'कर्मचारी ने कंपनी के आंतरिक माध्यम या सीधे फोन से निर्देश की पुष्टि नहीं की।',
      do: 'किसी भी बड़े भुगतान से पहले पहले से ज्ञात आधिकारिक फोन नंबर पर बात करके दोहरी पुष्टि जरूर करें।',
      lesson: 'WhatsApp पर प्रोफाइल फोटो देखकर किसी की पहचान पर कभी भरोसा न करें।'
    },
    mr: {
      title: 'मुंबई: WhatsApp वर MD ची खोटी ओळख वापरून ₹4.4 कोटींची फसवणूक',
      summary: 'कंपनीच्या व्यवस्थापकीय संचालकांचा फोटो WhatsApp वर वापरून वित्त अधिकाऱ्याकडून ₹4.4 कोटींची अनधिकृत रक्कम ट्रान्सफर करवून घेतली.',
      start: 'नवीन नंबरवरून आलेल्या मेसेजमध्ये एमडींचा फोटो होता आणि तातडीच्या बैठकीत असल्याचे भासवले गेले.',
      worked: 'महत्त्वाच्या कामाचे कारण देऊन मोठी रक्कम तातडीने पाठवण्यास सांगितले आणि फोनवर बोलण्यास नकार दिला.',
      warning: [
        'अनोळखी नंबरवरून ओळखीच्या व्यक्तीच्या नावाने तातडीचे मेसेज येणे.',
        'मोठी रक्कम पाठवण्याची घाई करणे.',
        'फोनवर थेट बोलणे टाळणे.'
      ],
      wrong: 'पैसे पाठवण्यापूर्वी नेहमीच्या फोन नंबरवर खात्री करून घेतली नाही.',
      do: 'मोठ्या रकमेच्या व्यवहारासाठी नेहमी अधिकृत आणि थेट संवादातून पडताळणी करा.',
      lesson: 'फक्त प्रोफाइल फोटो म्हणजे व्यक्तीची खरी ओळख नसते.'
    },
    miniQuiz: [
      {
        question: {
          en: 'A new phone number displays your relative or boss photograph on WhatsApp asking for an urgent money transfer. What is your first step?',
          hi: 'किसी नए नंबर से आपके रिश्तेदार या बॉस की फोटो लगाकर तुरंत पैसे ट्रांसफर करने का मैसेज आता है। आपका पहला कदम क्या होगा?',
          mr: 'एका नवीन नंबरवरून तुमच्या नातेवाईकाचा किंवा बॉसचा फोटो वापरून तातडीने पैसे पाठवण्यास सांगितले जाते. तुम्ही पहिले काय कराल?'
        },
        options: {
          en: [
            'Send the money right away so they do not get upset',
            'Call them directly on their known original phone number to verify verbally',
            'Forward the message to company employees',
            'Ask for a promotion first'
          ],
          hi: [
            'तुरंत पैसे भेजेंगे ताकि वे नाराज न हों',
            'उनके पुराने ज्ञात फोन नंबर पर सीधे कॉल करके मौखिक रूप से पुष्टि करेंगे',
            'मैसेज बाकी लोगों को फॉरवर्ड करेंगे',
            'पहले पदोन्नति मांगेंगे'
          ],
          mr: [
            'त्यांना राग येऊ नये म्हणून लगेच पैसे पाठवू',
            'त्यांच्या मूळ फोन नंबरवर कॉल करून प्रत्यक्ष आवाजात खात्री करू',
            'मेसेज इतर कर्मचाऱ्यांना पाठवू',
            'पदोन्नतीची मागणी करू'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Anyone can download a photo from the internet and set it as a WhatsApp display picture. Never rely on profile photos alone.',
          hi: 'कोई भी इंटरनेट से फोटो लेकर व्हाट्सएप पर लगा सकता है। केवल प्रोफाइल फोटो देखकर कभी पैसे न भेजें।',
          mr: 'कोणीही इंटरनेटवरून फोटो घेऊन डीपी ठेवू शकतो. फक्त प्रोफाइल फोटोवर कधीही विश्वास ठेवू नका.'
        }
      },
      {
        question: {
          en: 'Why do scammers avoid voice and video calls during impersonation attacks?',
          hi: 'धोखेबाज रूप बदलकर ठगी करते समय सामान्य फोन कॉल पर बात करने से क्यों बचते हैं?',
          mr: 'भामटे दुसऱ्याच्या नावाने फसवणूक करताना थेट फोनवर बोलणे का टाळतात?'
        },
        options: {
          en: [
            'They have weak mobile network',
            'Their real voice and face would instantly expose the impersonation',
            'WhatsApp forbids calling for confidential matters',
            'It saves mobile battery'
          ],
          hi: [
            'उनका नेटवर्क खराब होता है',
            'उनकी असली आवाज और चेहरा तुरंत ठगी की पोल खोल देगा',
            'व्हाट्सएप पर कॉल करना मना है',
            'बैटरी बचाने के लिए'
          ],
          mr: [
            'त्यांचे नेटवर्क खराब असते',
            'त्यांचा खरा आवाज आणि चेहरा लगेच फसवणूक उघड करेल',
            'कॉल करण्यास बंदी असते',
            'बॅटरी वाचवण्यासाठी'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Scammers invent excuses ("I am in a secret meeting / in surgery") because a voice call will reveal they are not the real person.',
          hi: 'ठग "मीटिंग में हूँ" या "अस्पताल में हूँ" जैसे बहाने बनाते हैं क्योंकि आवाज सुनते ही उनकी पहचान खुल जाएगी।',
          mr: 'ठग बैठकीत असल्याचे खोटे कारण सांगतात कारण आवाजावरून त्यांची खोटी ओळख लगेच समजेल.'
        }
      },
      {
        question: {
          en: 'What protocol should every family and organization enforce for high-value financial transfers?',
          hi: 'बड़ी वित्तीय लेन-देन के लिए हर परिवार और संस्था को कौन सा नियम लागू करना चाहिए?',
          mr: 'मोठ्या आर्थिक व्यवहारांसाठी प्रत्येक कुटुंब आणि संस्थेने कोणता नियम पाळला पाहिजे?'
        },
        options: {
          en: [
            'Dual-authorization and secondary verbal confirmation protocol',
            'Immediate execution of all chat messages',
            'Zero verification for urgency requests',
            'Deleting message logs after payment'
          ],
          hi: [
            'दोहरी अनुमति और फोन पर दोबारा पुष्टि का नियम',
            'चैट पर आए हर निर्देश को तुरंत मानना',
            'जल्दबाजी वाले मामलों में कोई जांच न करना',
            'पेमेंट के बाद चैट मिटा देना'
          ],
          mr: [
            'दुहेरी मंजुरी आणि थेट फोनवरून प्रत्यक्ष खात्री करण्याचा नियम',
            'चॅटवरील प्रत्येक मागणी लगेच पूर्ण करणे',
            'घाईच्या वेळी कोणतीही चौकशी न करणे',
            'पैसे पाठवल्यावर मेसेज डिलिट करणे'
          ]
        },
        answer: 0,
        explanation: {
          en: 'Requiring secondary verbal verification prevents 100% of executive and family impersonation fraud.',
          hi: 'दूसरे माध्यम से मौखिक पुष्टि करने का नियम रूप बदलकर की जाने वाली ठगी को पूरी तरह रोकता है।',
          mr: 'थेट संवादातून दुहेरी खात्री केल्यास अशा प्रकारची फसवणूक १००% टळते.'
        }
      }
    ]
  },
  {
    id: 'pune-retired-judge',
    year: '2025',
    location: 'Pune, Maharashtra',
    type: 'Digital Arrest / IPS Impersonation',
    source: 'The Indian Express',
    url: 'https://indianexpress.com/article/cities/pune/digital-arrest-fraud-retired-judge-rs-1-crore-10114542/',
    en: {
      title: 'Pune: Retired Judge Duped of Over ₹1 Crore in Digital Arrest',
      summary: 'A retired judge was targeted by fraudsters posing as senior IPS officers, alleging his name was tied to a high-profile narcotics and money-laundering case.',
      start: 'The scammer called claiming a courier packet sent in his name containing contraband had been seized at Mumbai airport.',
      worked: 'They produced fabricated court seizure notices and pressured him to transfer his savings for an “official forensic audit”.',
      warning: [
        'Claims that couriers with illegal items were seized in your name.',
        'Demands for money transfer for “investigation clearance”.',
        'Threats of severe criminal charges if you contact local authorities.'
      ],
      wrong: 'The victim was kept under extreme emotional distress and compliance through continuous video monitoring.',
      do: 'Notify the local police station immediately. Couriers and police do not conduct financial settlements over the phone.',
      lesson: 'Courts, police, and customs never demand money transfers to clear your name from criminal investigations.'
    },
    hi: {
      title: 'पुणे: सेवानिवृत्त न्यायाधीश से डिजिटल अरेस्ट के नाम पर ₹1 करोड़ से अधिक की ठगी',
      summary: 'वरिष्ठ IPS अधिकारी बनकर ठगों ने पुणे के सेवानिवृत्त न्यायाधीश को ड्रग्स और मनी लॉन्ड्रिंग केस में फंसाने का डर दिखाकर ₹1 करोड़ से ज्यादा ठग लिए।',
      start: 'ठग ने कहा कि उनके नाम से भेजा गया एक कूरियर पार्सल एयरपोर्ट पर पकड़ा गया है जिसमें अवैध सामान है।',
      worked: 'नकली अदालती नोटिस और वीडियो कॉल पर पूछताछ का नाटक करके बैंक खाते की जांच के नाम पर पैसे ट्रांसफर कराए गए।',
      warning: [
        'कूरियर में अवैध सामान पकड़े जाने की फर्जी कॉल।',
        'जांच के नाम पर सरकारी खातों में पैसे भेजने की मांग।',
        'स्थानीय पुलिस से संपर्क न करने की धमकी।'
      ],
      wrong: 'डर और दबाव में आकर पीड़ित ने स्वतंत्र रूप से पुलिस से संपर्क नहीं किया।',
      do: 'ऐसी कॉल आते ही तुरंत स्थानीय पुलिस से संपर्क करें और 1930 पर शिकायत दर्ज करें।',
      lesson: 'पुलिस या अदालत कभी भी किसी नागरिक से केस रफा-दफा करने के लिए पैसे नहीं मांगती।'
    },
    mr: {
      title: 'पुणे: निवृत्त न्यायाधीशांची डिजिटल अरेस्टच्या नावाखाली ₹1 कोटींची फसवणूक',
      summary: 'पुण्यातील एका निवृत्त न्यायाधीशाला IPS अधिकारी असल्याचे भासवून ड्रग्ज प्रकरणात नाव आल्याची भीती दाखवून ₹1 कोटींहून अधिक रकमेची फसवणूक करण्यात आली.',
      start: 'मुंबई विमानतळावर तुमच्या नावाचे पार्सल जप्त करण्यात आले आहे, असा फोन करून फसवणुकीची सुरुवात झाली.',
      worked: 'बनावट वॉरंट आणि चौकशीचा बनाव करून बँक खात्याची तपासणी करण्याच्या नावाखाली पैसे वळते करून घेतले.',
      warning: [
        'विमानतळावर बेकायदेशीर पार्सल सापडल्याचा खोटा दावा.',
        'तपासणीसाठी पैसे ट्रान्सफर करण्यास सांगणे.',
        'स्थानिक पोलिसांशी न बोलण्याची धमकी देणे.'
      ],
      wrong: 'दबावाखाली येऊन स्वतंत्र पडताळणी केली गेली नाही.',
      do: 'असा फोन आल्यास घाबरू नका, थेट जवळच्या पोलीस ठाण्यात जा.',
      lesson: 'कोणतीही तपास यंत्रणा ऑनलाइन पैसे भरून तपास करत नाही.'
    },
    miniQuiz: [
      {
        question: {
          en: 'A caller claims a courier parcel with contraband drugs was seized in your name at Mumbai airport. What should you do?',
          hi: 'कॉल आती है कि मुंबई एयरपोर्ट पर आपके नाम से अवैध दवाओं का कूरियर पकड़ा गया है। आप क्या करेंगे?',
          mr: 'मुंबई विमानतळावर तुमच्या नावाचे बेकायदेशीर पार्सल जप्त झाल्याचा फोन आल्यास तुम्ही काय कराल?'
        },
        options: {
          en: [
            'Pay clearance fees via UPI immediately',
            'Disconnect the call and notify your local police station or dial 1930',
            'Promise to send money from all your bank accounts',
            'Lock yourself in your house'
          ],
          hi: [
            'तुरंत यूपीआई से क्लीयरेंस फीस भरेंगे',
            'कॉल काटेंगे और अपने स्थानीय थाने या 1930 पर सूचना देंगे',
            'सारे खातों से पैसे भेजने का वादा करेंगे',
            'खुद को घर में बंद कर लेंगे'
          ],
          mr: [
            'UPI ने तात्काळ शुल्क भरू',
            'फोन बंद करू आणि स्थानिक पोलीस ठाण्यात किंवा 1930 वर माहिती देऊ',
            'सर्व बँक खात्यांतून पैसे पाठवू',
            'स्वतःला घरात कोंडून घेऊ'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Customs and police never demand online payments over phone calls to settle illegal parcel seizures.',
          hi: 'कस्टम या पुलिस कभी भी फोन पर पैसे लेकर पार्सल का मामला रफा-दफा नहीं करती।',
          mr: 'सीमाशुल्क किंवा पोलीस कधीही फोनवर पैसे घेऊन तपास बंद करत नाहीत.'
        }
      },
      {
        question: {
          en: 'Can Indian courts or police arrest you over a Skype or WhatsApp video call?',
          hi: 'क्या भारतीय अदालत या पुलिस आपको स्काइप या व्हाट्सएप वीडियो कॉल पर गिरफ्तार कर सकती है?',
          mr: 'भारतीय न्यायालय किंवा पोलीस तुम्हाला व्हिडिओ कॉलवर अटक करू शकतात का?'
        },
        options: {
          en: [
            'No! Genuine arrests require physical legal warrants and in-person police procedures',
            'Yes, if the officer shows a uniform and court seal',
            'Yes, on national holidays',
            'Yes, if they send a PDF warrant on WhatsApp'
          ],
          hi: [
            'बिल्कुल नहीं! गिरफ्तारी के लिए लिखित कानूनी वारंट और पुलिस की प्रत्यक्ष उपस्थिति जरूरी होती है',
            'हां, अगर अधिकारी वर्दी और मोहर दिखाए',
            'हां, छुट्टी के दिन',
            'हां, अगर व्हाट्सएप पर पीडीएफ वारंट भेजा हो'
          ],
          mr: [
            'नाही! अटकेसाठी लेखी कायदेशीर वॉरंट आणि पोलिसांची प्रत्यक्ष उपस्थिती आवश्यक असते',
            'होय, जर गणवेश आणि शिक्का दाखवला तर',
            'होय, सुट्टीच्या दिवशी',
            'होय, जर व्हॉट्सअ‍ॅपवर पीडीएफ पाठवली तर'
          ]
        },
        answer: 0,
        explanation: {
          en: 'Authentic police summons and arrest warrants are delivered in physical form. Video call arrests are 100% fake.',
          hi: 'पुलिस समन या वारंट हमेशा कागजी रूप में प्रत्यक्ष दिए जाते हैं। वीडियो कॉल पर गिरफ्तारी पूरी तरह फर्जी है।',
          mr: 'कायदेशीर वॉरंट प्रत्यक्ष दिले जातात. व्हिडिओ कॉलवरील अटक पूर्णपणे बनावट असते.'
        }
      },
      {
        question: {
          en: 'If someone demands money transfer for "forensic verification" to clear your name, what is the reality?',
          hi: 'यदि कोई आपका नाम केस से हटाने के लिए "फॉरेंसिक जांच" के नाम पर पैसे मांगे, तो सच्चाई क्या है?',
          mr: 'तपासातून नाव वगळण्यासाठी कोणी पैशांची मागणी केल्यास सत्य काय आहे?'
        },
        options: {
          en: [
            'It is standard government protocol',
            'It is 100% fraud; government agencies NEVER ask citizens to transfer money to prove innocence',
            'You will get the money back in 10 minutes',
            'It is mandatory under tax laws'
          ],
          hi: [
            'यह सरकार का सामान्य नियम है',
            'यह 100% ठगी है; कोई भी सरकारी एजेंसी निर्दोष साबित होने के लिए पैसे ट्रांसफर करने को नहीं कहती',
            '10 मिनट में पैसे वापस आ जाएंगे',
            'यह टैक्स कानून के तहत जरूरी है'
          ],
          mr: [
            'हा सामान्य सरकारी नियम आहे',
            'ही १००% फसवणूक आहे; कोणतीही सरकारी संस्था निर्दोष असल्याचे सिद्ध करण्यासाठी पैसे मागत नाही',
            '१० मिनिटांत पैसे परत मिळतील',
            'हा कर कायद्याचा नियम आहे'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Government authorities never ask citizens to transfer personal savings into temporary "verification accounts".',
          hi: 'सरकारी एजेंसियां नागरिकों से उनके पैसे किसी तथाकथित "जांच खाते" में भेजने को कभी नहीं कहतीं।',
          mr: 'सरकारी तपास यंत्रणा कधीही नागरिकांचे पैसे तपासणी खात्यात भरण्यास सांगत नाहीत.'
        }
      }
    ]
  },
  {
    id: 'mumbai-echallan',
    year: '2025',
    location: 'Mumbai, Maharashtra',
    type: 'Fake Traffic E-Challan APK Malware',
    source: 'The Indian Express',
    url: 'https://indianexpress.com/article/cities/mumbai/mumbai-police-e-challan-scam-cyber-fraudsters-dupe-victims-10210144/',
    en: {
      title: 'Mumbai: Fake Traffic E-Challan WhatsApp Links Install Malware',
      summary: 'Fraudsters circulated fake traffic e-challan notifications on WhatsApp containing malicious APK files that stole banking credentials.',
      start: 'Victims received WhatsApp messages: “Traffic Police Mumbai: Over-speeding challan of ₹500 recorded for your vehicle. Pay online or license suspended”.',
      worked: 'Clicking the link downloaded “VahanChallan.apk”. Once installed, the malware intercepted banking SMS and OTPs to steal funds.',
      warning: [
        'Traffic challans sent via personal WhatsApp messages rather than official RTO SMS.',
        'Files ending in “.apk” instead of standard web links.',
        'Pressure to pay within 24 hours to prevent court summons.'
      ],
      wrong: 'Users installed unknown third-party APK application files directly from social media messaging apps.',
      do: 'Verify and pay all vehicle challans exclusively on the official Ministry of Road Transport portal: echallan.parivahan.gov.in.',
      lesson: 'Never install Android APK files received through WhatsApp, SMS or email.'
    },
    hi: {
      title: 'मुंबई: फर्जी ट्रैफिक e-Challan लिंक से मैलवेयर ठगी',
      summary: 'मुंबई में WhatsApp पर फर्जी ट्रैफिक चालान की सूचना और APK फाइल भेजकर लोगों के बैंकिंग क्रेडेंशियल चुराए गए।',
      start: 'मैसेज में गाड़ी का फर्जी चालान दिखाते हुए लिखा था कि 24 घंटे में ₹500 का भुगतान न करने पर ड्राइविंग लाइसेंस रद्द हो जाएगा।',
      worked: 'लिंक पर क्लिक करते ही एक APK फाइल डाउनलोड हुई, जिसने फोन के SMS और बैंक OTP हैकर्स को भेज दिए।',
      warning: [
        'WhatsApp पर चालान का मैसेज आना।',
        'लिंक खोलने पर “.apk” फाइल इंस्टॉल करने का निर्देश।',
        'लाइसेंस रद्द करने की तत्काल धमकी।'
      ],
      wrong: 'अज्ञात लिंक से सीधे फोन में APK ऐप इंस्टॉल कर लिया गया।',
      do: 'चालान हमेशा सरकार के आधिकारिक पोर्टल echallan.parivahan.gov.in पर ही चेक और पे करें।',
      lesson: 'WhatsApp या अनजान लिंक से कभी भी कोई ऐप (APK) डाउनलोड न करें।'
    },
    mr: {
      title: 'मुंबई: बनावट ट्रॅफिक e-Challan लिंकद्वारे मालवेअर फसवणूक',
      summary: 'मुंबईत WhatsApp वर ट्रॅफिक चालानाचा बनावट मेसेज पाठवून APK फाईलद्वारे नागरिकांच्या बँक खात्याची माहिती चोरण्यात आली.',
      start: 'तुमच्या वाहनाचा ₹500 चा दंड प्रलंबित असून त्वरित न भरल्यास परवाना रद्द होईल, असा मेसेज पाठवला गेला.',
      worked: 'दिलेल्या लिंकवरून मालवेअर असलेली APK फाईल फोनमध्ये डाऊनलोड झाली आणि बँक मेसेज हॅक झाले.',
      warning: [
        'WhatsApp वर चालानाची अनधिकृत नोटीस येणे.',
        'वेबसाइटऐवजी .apk फाईल डाऊनलोड करण्यास सांगणे.',
        'त्वरित कारवाईची भीती दाखवणे.'
      ],
      wrong: 'अनोळखी मेसेजमधील अॅप्लिकेशन फोनमध्ये इन्स्टॉल केले गेले.',
      do: 'वाहनांचे सर्व दंड फक्त अधिकृत echallan.parivahan.gov.in या सरकारी पोर्टलवरच तपासा.',
      lesson: 'WhatsApp वरून आलेली कोणतीही APK फाईल कधीही इन्स्टॉल करू नका.'
    },
    miniQuiz: [
      {
        question: {
          en: 'You receive a WhatsApp message claiming an unpaid ₹500 traffic fine with an attached file called "VahanChallan.apk". What should you do?',
          hi: 'व्हाट्सएप पर ₹500 ट्रैफिक चालान का मैसेज और "VahanChallan.apk" नाम की फाइल आती है। आप क्या करेंगे?',
          mr: 'व्हॉट्सअ‍ॅपवर ५०० रुपये ट्रॅफिक दंडाचा मेसेज आणि "VahanChallan.apk" नावाची फाईल आल्यास काय कराल?'
        },
        options: {
          en: [
            'Install the APK file immediately to avoid penalty',
            'Do NOT install the APK; check and pay challans only on echallan.parivahan.gov.in',
            'Forward the file to 10 friends',
            'Pay ₹500 directly to the WhatsApp sender phone number'
          ],
          hi: [
            'जुर्माने से बचने के लिए तुरंत APK फाइल इंस्टॉल करेंगे',
            'APK इंस्टॉल नहीं करेंगे; चालान सिर्फ echallan.parivahan.gov.in पर ही देखेंगे',
            'फाइल 10 दोस्तों को भेजेंगे',
            'व्हाट्सएप नंबर पर सीधे ₹500 भेजेंगे'
          ],
          mr: [
            'दंड टाळण्यासाठी APK फाईल लगेच इन्स्टॉल करू',
            'APK फाईल इन्स्टॉल करणार नाही; दंड फक्त echallan.parivahan.gov.in वरच तपासू',
            'ती फाईल मित्रांना पाठवू',
            'त्या व्हॉट्सअ‍ॅप नंबरवर ५०० रुपये पाठवून देऊ'
          ]
        },
        answer: 1,
        explanation: {
          en: 'Android APK files sent on WhatsApp are malicious software designed to intercept OTPs and steal bank credentials.',
          hi: 'व्हाट्सएप पर आई APK फाइल खतरनाक वायरस (मैलवेयर) होती है जो आपके फोन के बैंक OTP चुरा लेती है।',
          mr: 'व्हॉट्सअ‍ॅपवरील APK फाईल हा मालवेअर असतो जो फोनमधील बँक OTP चोरतो.'
        }
      },
      {
        question: {
          en: 'Where should you check and verify authentic vehicle traffic e-challans in India?',
          hi: 'भारत में वाहनों के वास्तविक ट्रैफिक चालान की जांच कहां करनी चाहिए?',
          mr: 'भारतात वाहनांच्या अधिकृत ट्रॅफिक चालानाची खात्री कोठे करावी?'
        },
        options: {
          en: [
            'Only on the official Ministry of Road Transport portal: echallan.parivahan.gov.in',
            'On unverified Telegram channels',
            'On websites ending in .online or .xyz',
            'Through third-party APK files'
          ],
          hi: [
            'सड़क परिवहन मंत्रालय के आधिकारिक पोर्टल echallan.parivahan.gov.in पर',
            'टेलीग्राम चैनल पर',
            '.xyz या .online वेबसाइट पर',
            'थर्ड पार्टी APK ऐप पर'
          ],
          mr: [
            'परिवहन मंत्रालयाच्या अधिकृत echallan.parivahan.gov.in या पोर्टलवर',
            'टेलिग्राम चॅनेलवर',
            'कोणत्याही खाजगी वेबसाइटवर',
            'अनोळखी APK ॲपवर'
          ]
        },
        answer: 0,
        explanation: {
          en: 'Always use verified government portals ending in .gov.in for vehicle challan verification and payments.',
          hi: 'वाहनों के चालान की जांच और भुगतान केवल .gov.in वाली आधिकारिक सरकारी वेबसाइट पर ही करें।',
          mr: 'वाहनांचे सर्व दंड फक्त .gov.in असलेल्या अधिकृत सरकारी संकेतस्थळावरच भरा.'
        }
      },
      {
        question: {
          en: 'What happens when you install an unknown APK file received from WhatsApp or SMS?',
          hi: 'व्हाट्सएप या एसएमएस से आई अनजान APK फाइल इंस्टॉल करने से क्या होता है?',
          mr: 'व्हॉट्सअ‍ॅप किंवा मेसेजवरून आलेली अनोळखी APK फाईल इन्स्टॉल केल्यास काय होते?'
        },
        options: {
          en: [
            'Malware can silently read SMS, intercept bank OTPs, and take over banking apps',
            'Your phone battery life improves',
            'You get free high-speed 5G internet',
            'Nothing happens'
          ],
          hi: [
            'मैलवेयर चुपचाप आपके SMS पढ़ सकता है, बैंक OTP चुरा सकता है और खाते खाली कर सकता है',
            'फोन की बैटरी अच्छी हो जाती है',
            'मुफ्त 5G इंटरनेट मिलता है',
            'कुछ नहीं होता'
          ],
          mr: [
            'मालवेअर गुपचूप सर्व SMS वाचून बँक OTP चोरतो आणि खाते रिकामे करू शकतो',
            'फोनची बॅटरी चांगली होते',
            'मोफत ५जी इंटरनेट मिळते',
            'काहीही होत नाही'
          ]
        },
        answer: 0,
        explanation: {
          en: 'Malicious APKs ask for dangerous device permissions to secretly steal your two-factor authentication OTPs.',
          hi: 'खतरनाक APK फाइलें फोन के अधिकार छीनकर बैंक OTP चुरा लेती हैं।',
          mr: 'धोकादायक APK फाईल्स फोनचे नियंत्रण मिळवून बँकेचे OTP चोरतात.'
        }
      }
    ]
  }
];

const quizQuestions = [
  {
    id: 1,
    question: {
      en: 'A caller claiming to be your bank manager asks for the 6-digit OTP sent to your phone to "verify your KYC". What should you do?',
      hi: 'एक कॉलर खुद को आपका बैंक मैनेजर बताकर "KYC सत्यापन" के लिए आपके फोन पर आए 6 अंकों के OTP की मांग करता है। आपको क्या करना चाहिए?',
      mr: 'बँक मॅनेजर असल्याचे सांगून एक कॉलर "KYC पडताळणी"साठी तुमच्या फोनवर आलेला ६ अंकी OTP मागतो. तुम्ही काय कराल?'
    },
    options: {
      en: [
        'Read the OTP immediately so your account does not get blocked.',
        'Refuse to share the OTP, hang up, and visit your local bank branch.',
        'Ask the caller to call your friend instead.',
        'Send the OTP via WhatsApp so you have proof.'
      ],
      hi: [
        'तुरंत OTP बता देंगे ताकि खाता ब्लॉक न हो।',
        'OTP साझा करने से मना करेंगे, कॉल काटेंगे और अपनी स्थानीय बैंक शाखा जाएंगे।',
        'कॉलर से अपने दोस्त को फोन करने के लिए कहेंगे।',
        'सबूत रखने के लिए WhatsApp पर OTP भेजेंगे।'
      ],
      mr: [
        'खाते ब्लॉक होऊ नये म्हणून लगेच OTP सांगू.',
        'OTP शेअर करण्यास नकार देऊ, फोन ठेवू आणि बँकेच्या स्थानिक शाखेत प्रत्यक्ष भेट देऊ.',
        'कॉलरला मित्राला फोन करण्यास सांगू.',
        'पुरावा राहण्यासाठी WhatsApp वर OTP पाठवू.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Banks and legitimate officials NEVER ask for OTPs or PINs. Sharing an OTP gives fraudsters direct access to withdraw your funds.',
      hi: 'बैंक और वैध अधिकारी कभी भी OTP या PIN नहीं मांगते। OTP साझा करने से जालसाजों को आपके खाते से पैसे निकालने की सीधी अनुमति मिल जाती है।',
      mr: 'बँका आणि अधिकृत अधिकारी कधीही OTP किंवा PIN मागत नाहीत. OTP सांगितल्याने भामट्यांना तुमच्या खात्यातून पैसे काढण्याची थेट परवानगी मिळते.'
    }
  },
  {
    id: 2,
    question: {
      en: 'You want to receive ₹2,000 from a buyer on an online marketplace. They send a QR code and ask you to scan it and enter your UPI PIN. What will happen?',
      hi: 'आप ऑनलाइन मार्केटप्लेस पर खरीदार से ₹2,000 प्राप्त करना चाहते हैं। वह एक QR कोड भेजता है और उसे स्कैन करके UPI PIN दर्ज करने को कहता है। क्या होगा?',
      mr: 'तुम्हाला ऑनलाइन खरेदी-विक्री प्लॅटफॉर्मवर ग्राहकाकडून ₹2,000 घ्यायचे आहेत. तो एक QR कोड पाठवतो आणि तो स्कॅन करून UPI PIN टाकण्यास सांगतो. काय होईल?'
    },
    options: {
      en: [
        'You will receive ₹2,000 into your bank account.',
        'Money will be deducted from your bank account.',
        'Nothing will happen until you reboot your phone.',
        'You will receive a discount coupon.'
      ],
      hi: [
        'आपके बैंक खाते में ₹2,000 जमा हो जाएंगे।',
        'आपके बैंक खाते से पैसे कट जाएंगे।',
        'जब तक आप फोन रीस्टार्ट नहीं करेंगे तब तक कुछ नहीं होगा।',
        'आपको एक डिस्काउंट कूपन मिलेगा।'
      ],
      mr: [
        'तुमच्या बँक खात्यात ₹2,000 जमा होतील.',
        'तुमच्या बँक खात्यातून पैसे वजा (कट) होतील.',
        'फोन रीस्टार्ट करेपर्यंत काहीही होणार नाही.',
        'तुम्हाला डिस्काउंट कूपन मिळेल.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Entering your UPI PIN authorizes a withdrawal (sending money). You NEVER enter your UPI PIN to receive money.',
      hi: 'UPI PIN दर्ज करने से पैसे कटते हैं (पैसे भेजे जाते हैं)। पैसे प्राप्त (Receive) करने के लिए कभी भी UPI PIN दर्ज नहीं किया जाता।',
      mr: 'UPI PIN टाकल्याने खात्यातून पैसे पाठवले जातात (कट होतात). पैसे मिळवण्यासाठी कधीही UPI PIN टाकण्याची गरज नसते.'
    }
  },
  {
    id: 3,
    question: {
      en: 'You receive a video call on Skype from a person in a police uniform claiming you are under "Digital Arrest". What is the reality?',
      hi: 'आपको Skype पर पुलिस की वर्दी पहने व्यक्ति का वीडियो कॉल आता है जो दावा करता है कि आप "डिजिटल अरेस्ट" (Digital Arrest) के तहत हैं। सच्चाई क्या है?',
      mr: 'तुम्हाला Skype वर पोलिसांच्या गणवेशातील व्यक्तीचा व्हिडिओ कॉल येतो आणि ती सांगते की तुम्ही "डिजिटल अरेस्ट" (Digital Arrest) अंतर्गत आहात. सत्य काय आहे?'
    },
    options: {
      en: [
        'Digital Arrest is a standard police procedure under Indian Law.',
        'There is no such legal concept as "Digital Arrest" in India; it is 100% a scam.',
        'You must immediately wire money to the officer to get bail.',
        'You must stay locked in your room until they call back.'
      ],
      hi: [
        'डिजिटल अरेस्ट भारतीय कानून के तहत एक सामान्य पुलिस प्रक्रिया है।',
        'भारत में "डिजिटल अरेस्ट" जैसा कोई कानूनी प्रावधान नहीं है; यह 100% धोखाधड़ी (Scam) है।',
        'जमानत पाने के लिए आपको तुरंत अधिकारी को पैसे भेजने होंगे।',
        'जब तक वे दोबारा कॉल न करें तब तक आपको कमरे में बंद रहना होगा।'
      ],
      mr: [
        'डिजिटल अरेस्ट ही भारतीय कायद्यानुसार पोलिसांची सामान्य प्रक्रिया आहे.',
        'भारतात "डिजिटल अरेस्ट" अशी कोणतीही कायदेशीर संकल्पना नाही; हा १००% स्कॅम (फसवणूक) आहे.',
        'जामीन मिळवण्यासाठी त्वरित त्या अधिकाऱ्याला पैसे पाठवले पाहिजेत.',
        'त्यांचा पुन्हा फोन येईपर्यंत खोलीतच बंद राहिले पाहिजे.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Law enforcement agencies and courts NEVER conduct trials, arrests or monetary settlements over video calls.',
      hi: 'कानून प्रवर्तन एजेंसियां और अदालतें कभी भी वीडियो कॉल पर पूछताछ, गिरफ्तारी या पैसों का लेनदेन नहीं करती हैं।',
      mr: 'पोलीस तपास यंत्रणा आणि न्यायालये कधीही व्हिडिओ कॉलवर अटक, तपास किंवा पैशांची मागणी करत नाहीत.'
    }
  },
  {
    id: 4,
    question: {
      en: 'Which of the following website URLs is an authentic Indian government portal?',
      hi: 'निम्नलिखित में से कौन सा वेबसाइट URL एक प्रामाणिक भारतीय सरकारी पोर्टल है?',
      mr: 'खालीलपैकी कोणता वेबसाइट URL अधिकृत भारतीय शासकीय पोर्टल आहे?'
    },
    options: {
      en: [
        'https://www.pm-kisan-yojna.online',
        'https://www.myscheme.gov.in',
        'http://cybercrime-police-portal.com',
        'https://sbi-aadhaar-kyc.net'
      ],
      hi: [
        'https://www.pm-kisan-yojna.online',
        'https://www.myscheme.gov.in',
        'http://cybercrime-police-portal.com',
        'https://sbi-aadhaar-kyc.net'
      ],
      mr: [
        'https://www.pm-kisan-yojna.online',
        'https://www.myscheme.gov.in',
        'http://cybercrime-police-portal.com',
        'https://sbi-aadhaar-kyc.net'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Official central and state government portals strictly end in ".gov.in" or ".nic.in". Unofficial domains are common phishing traps.',
      hi: 'केंद्र और राज्य सरकार के आधिकारिक पोर्टल हमेशा ".gov.in" या ".nic.in" पर समाप्त होते हैं। गैर-सरकारी डोमेन फ़िशिंग जाल होते हैं।',
      mr: 'केंद्र व राज्य शासनाची अधिकृत संकेतस्थळे केवळ ".gov.in" किंवा ".nic.in" ने संपतात. इतर खाजगी डोमेन फिशिंगचे सापळे असतात.'
    }
  },
  {
    id: 5,
    question: {
      en: 'What is the national emergency cyber fraud reporting helpline number in India?',
      hi: 'भारत में राष्ट्रीय आपातकालीन साइबर वित्तीय धोखाधड़ी रिपोर्टिंग हेल्पलाइन नंबर क्या है?',
      mr: 'भारतात आर्थिक सायबर फसवणुकीची तक्रार नोंदवण्यासाठी राष्ट्रीय आपत्कालीन हेल्पलाइन क्रमांक कोणता आहे?'
    },
    options: {
      en: [
        '100',
        '1930',
        '1091',
        '1800-00-1111'
      ],
      hi: [
        '100',
        '1930',
        '1091',
        '1800-00-1111'
      ],
      mr: [
        '100',
        '1930',
        '1091',
        '1800-00-1111'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Helpline 1930 is the national citizen financial cyber fraud reporting helpline managed under the Ministry of Home Affairs (I4C).',
      hi: 'हेल्पलाइन 1930 गृह मंत्रालय (I4C) के तहत संचालित राष्ट्रीय नागरिक वित्तीय साइबर अपराध रिपोर्टिंग हेल्पलाइन है।',
      mr: '१९३० ही गृह मंत्रालय (I4C) अंतर्गत चालवली जाणारी राष्ट्रीय नागरिक आर्थिक सायबर गुन्हे रिपोर्टिंग हेल्पलाइन आहे.'
    }
  },
  {
    id: 6,
    question: {
      en: 'A friend’s WhatsApp profile messages you asking for ₹10,000 emergency hospital fees from a new number. What is your first action?',
      hi: 'किसी नए नंबर से आपके दोस्त की WhatsApp DP लगी प्रोफाइल से अस्पताल के लिए ₹10,000 आपातकालीन पैसे मांगे जाते हैं। आपका पहला कदम क्या होगा?',
      mr: 'एका नवीन नंबरवरून मित्राचा व्हॉट्सअ‍ॅप फोटो वापरून रुग्णालयाच्या खर्चासाठी ₹10,000 तातडीने मागितले जातात. तुमची पहिली कृती काय असेल?'
    },
    options: {
      en: [
        'Transfer ₹10,000 immediately to the UPI ID provided in the chat.',
        'Call your friend on their original, known phone number to verify directly.',
        'Forward the message to 10 other relatives to ask for donations.',
        'Ignore the message forever without checking on your friend.'
      ],
      hi: [
        'चैट में दी गई UPI ID पर तुरंत ₹10,000 ट्रांसफर कर देंगे।',
        'सच्चाई जानने के लिए अपने दोस्त के पुराने, पहले से मौजूद फोन नंबर पर सीधे कॉल करेंगे।',
        'मदद मांगने के लिए मैसेज अन्य 10 रिश्तेदारों को फॉरवर्ड करेंगे।',
        'दोस्त का हाल जाने बिना मैसेज को हमेशा के लिए अनदेखा कर देंगे।'
      ],
      mr: [
        'चॅटमध्ये दिलेल्या UPI ID वर लगेच ₹10,000 पाठवून देऊ.',
        'खात्री करण्यासाठी मित्राच्या मूळ, आधीपासून सेव्ह असलेल्या फोन नंबरवर थेट फोन करू.',
        'मदतीसाठी तो मेसेज इतर १० नातेवाईकांना फॉरवर्ड करू.',
        'मित्राची विचारपूस न करता मेसेज दुर्लक्षित करू.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Fraudsters frequently copy profile pictures and impersonate loved ones. Always verify emergencies with a direct phone call.',
      hi: 'जालसाज अक्सर प्रोफाइल फोटो चुराकर परिजनों या दोस्तों का रूप धरते हैं। आपात स्थिति में हमेशा सीधे फोन कॉल से पुष्टि करें।',
      mr: 'भामटे प्रोफाइल फोटो चोरून नातेवाईक किंवा मित्रांची खोटी ओळख वापरतात. नेहमी थेट फोन कॉल करून खात्री करा.'
    }
  },
  {
    id: 7,
    question: {
      en: 'What should you do before giving a physical photocopy of your Aadhaar card to a hotel or shop?',
      hi: 'किसी होटल या दुकान को अपने आधार कार्ड की फोटोकॉपी देने से पहले आपको क्या करना चाहिए?',
      mr: 'हॉटेल किंवा दुकानात आधार कार्डची झेरॉक्स देण्यापूर्वी तुम्ही काय केले पाहिजे?'
    },
    options: {
      en: [
        'Sign your full bank account number on the copy.',
        'Cross the photocopy and write the specific purpose (e.g., "For Hotel Check-in Only").',
        'Laminate the copy so it cannot be read.',
        'Hand over the original Aadhaar card permanently.'
      ],
      hi: [
        'कॉपी पर अपना पूरा बैंक खाता नंबर लिख देंगे।',
        'फोटोकॉपी पर क्रॉस लाइन खींचकर विशेष उद्देश्य लिखेंगे (उदा. "केवल होटल चेक-इन हेतु")।',
        'कॉपी को लैमिनेट कर देंगे ताकि उसे पढ़ा न जा सके।',
        'मूल आधार कार्ड स्थायी रूप से सौंप देंगे।'
      ],
      mr: [
        'झेरॉक्सवर स्वतःचा संपूर्ण बँक खाते क्रमांक लिहू.',
        'झेरॉक्सवर तिरकी रेष ओढून वापराचे कारण लिहू (उदा. "फक्त हॉटेल चेक-इनसाठी").',
        'झेरॉक्स लॅमिनेट करू जेणेकरून वाचता येणार नाही.',
        'मूळ आधार कार्ड कायमचे देऊन टाकू.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Crossing the photocopy with the date and intended purpose prevents unauthorized reuse for fake SIM cards or fraudulent loans.',
      hi: 'फोटोकॉपी पर तारीख और विशिष्ट उद्देश्य लिखने (मास्क/क्रॉस करने) से उसका फर्जी सिम कार्ड या लोन के लिए दुरुपयोग रुकता है।',
      mr: 'आधार झेरॉक्सवर तारीख व वापराचे कारण नमूद केल्याने बनावट सिम कार्ड किंवा कर्जासाठी होणारा गैरवापर टळतो.'
    }
  },
  {
    id: 8,
    question: {
      en: 'A job recruiter on Telegram asks for a ₹1,500 "registration fee" to send you a work-from-home assignment. What does this indicate?',
      hi: 'Telegram पर नौकरी देने वाला व्यक्ति वर्क-फ्रॉम-होम काम भेजने के लिए ₹1,500 "पंजीकरण शुल्क" मांगता है। यह क्या दर्शाता है?',
      mr: 'Telegram वर नोकरी देणारा वर्क-फ्रॉम-होम काम देण्यासाठी ₹1,500 "नोंदणी शुल्क" मागतो. हे काय दर्शवते?'
    },
    options: {
      en: [
        'It is a standard corporate hiring requirement.',
        'It is a fake job scam; legitimate employers never demand payment to hire you.',
        'It means your salary will be doubled.',
        'You will be assigned a government laptop.'
      ],
      hi: [
        'यह कंपनियों की भर्ती की सामान्य प्रक्रिया है।',
        'यह एक फर्जी नौकरी घोटाला है; वैध नियोक्ता नौकरी देने के लिए कभी पैसे नहीं मांगते।',
        'इसका मतलब है कि आपका वेतन दोगुना हो जाएगा।',
        'आपको सरकारी लैपटॉप दिया जाएगा।'
      ],
      mr: [
        'हा कॉर्पोरेट भरतीचा सर्वसाधारण नियम आहे.',
        'हा बनावट नोकरीचा स्कॅम आहे; कायदेशीर कंपन्या नोकरी देण्यासाठी कधीही पैसे मागत नाहीत.',
        'याचा अर्थ तुमचा पगार दुप्पट होईल.',
        'तुम्हाला सरकारी लॅपटॉप दिला जाईल.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Real companies never ask candidates to pay registration fees, training deposits, or task unlock charges.',
      hi: 'असली कंपनियां नौकरी देने के लिए कभी भी रजिस्ट्रेशन फीस, ट्रेनिंग डिपॉजिट या टास्क अनलॉक चार्ज नहीं मांगती हैं।',
      mr: 'खऱ्या कंपन्या उमेदवारांकडून नोंदणी शुल्क, प्रशिक्षण ठेव किंवा टास्क अनलॉक करण्यासाठी कधीही पैसे मागत नाहीत.'
    }
  },
  {
    id: 9,
    question: {
      en: 'What is the "Golden Hour" in financial cyber fraud?',
      hi: 'वित्तीय साइबर धोखाधड़ी में "गोल्डन ऑवर" (Golden Hour) क्या होता है?',
      mr: 'आर्थिक सायबर गुन्ह्यांमध्ये "गोल्डन अवर" (Golden Hour) म्हणजे काय?'
    },
    options: {
      en: [
        'The best time of day to invest in stock markets.',
        'The first 1 to 2 hours after being defrauded, when reporting to 1930 has the highest chance of freezing the stolen money.',
        'The time between 12:00 PM and 1:00 PM when banks are closed.',
        'The delay required before filing a police complaint.'
      ],
      hi: [
        'शेयर बाजार में निवेश करने का दिन का सबसे अच्छा समय।',
        'ठगी के बाद के पहले 1 से 2 घंटे, जब 1930 पर रिपोर्ट करने से चुराए गए पैसे फ्रीज होने की संभावना सबसे अधिक होती है।',
        'दोपहर 12:00 से 1:00 बजे का समय जब बैंक बंद रहते हैं।',
        'पुलिस शिकायत दर्ज करने से पहले की जाने वाली देरी।'
      ],
      mr: [
        'शेअर बाजारात गुंतवणूक करण्यासाठी दिवसाची सर्वात उत्तम वेळ.',
        'फसवणूक झाल्यानंतरचे पहिले १ ते २ तास, ज्या काळात १९३० वर तक्रार केल्यास चोरीची रक्कम गोठवण्याची शक्यता सर्वाधिक असते.',
        'दुपारी १२ ते १ ची वेळ जेव्हा बँका बंद असतात.',
        'पोलीस तक्रार दाखल करण्यापूर्वीचा विलंब.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Reporting to helpline 1930 within the Golden Hour allows banks to rapidly track and freeze fraudulent transfers before scammers cash out.',
      hi: 'गोल्डन ऑवर के दौरान हेल्पलाइन 1930 पर शिकायत करने से ठगों द्वारा पैसे निकालने से पहले बैंक खातों को तुरंत फ्रीज किया जा सकता है।',
      mr: 'गोल्डन अवरमध्ये १९३० हेल्पलाइनवर तक्रार केल्याने भामट्यांनी पैसे काढण्यापूर्वी बँका ते पैसे तात्काळ गोठवू शकतात.'
    }
  },
  {
    id: 10,
    question: {
      en: 'An unknown app on WhatsApp asks for full access to your Phone Contacts, Photos, and SMS to give you a ₹5,000 instant loan. Should you allow it?',
      hi: 'WhatsApp पर एक अनजान ऐप ₹5,000 का तुरंत लोन देने के लिए आपके फोन कॉन्टैक्ट्स, फोटो और SMS की अनुमति मांगता है। क्या आपको अनुमति देनी चाहिए?',
      mr: 'WhatsApp वर एक अनोळखी ॲप ₹5,000 चे तात्काळ कर्ज देण्यासाठी तुमचे फोन कॉन्टॅक्ट्स, फोटो आणि SMS ची परवानगी मागते. तुम्ही परवानगी द्याल का?'
    },
    options: {
      en: [
        'Yes, permissions are harmless.',
        'No, illegal loan apps use your contacts and photos to harass and blackmail you.',
        'Yes, if the interest rate is claimed to be zero.',
        'Yes, but delete the app after 10 minutes.'
      ],
      hi: [
        'हां, अनुमतियां हानिरहित होती हैं।',
        'नहीं, अवैध लोन ऐप आपके संपर्कों और तस्वीरों का इस्तेमाल ब्लैकमेल और प्रताड़ित करने के लिए करते हैं।',
        'हां, अगर ब्याज दर शून्य बताई गई हो।',
        'हां, लेकिन 10 मिनट बाद ऐप डिलीट कर दें।'
      ],
      mr: [
        'होय, परवानग्या निरुपद्रवी असतात.',
        'नाही, बेकायदेशीर लोन ॲप्स तुमच्या संपर्कांचा आणि फोटोंचा वापर ब्लॅकमेल व त्रास देण्यासाठी करतात.',
        'होय, जर व्याजदर शून्य सांगितला असेल तर.',
        'होय, पण १० मिनिटांनंतर ॲप डिलीट करू.'
      ]
    },
    answer: 1,
    explanation: {
      en: 'Predatory loan apps harvest your photo gallery and contact list to threaten your friends and family with morphed photos.',
      hi: 'अवैध लोन ऐप आपकी फोटो गैलरी और संपर्कों को चुराकर मॉर्फ की गई तस्वीरों से आपके दोस्तों व परिवार को ब्लैकमेल करते हैं।',
      mr: 'अवैध कर्ज ॲप्स तुमचे फोटो आणि कॉन्टॅक्ट्स चोरून मॉर्फ केलेल्या फोटोंद्वारे मित्र व नातेवाईकांना ब्लॅकमेल करतात.'
    }
  }
];

const glossaryTerms = [
  {
    term: 'OTP (One-Time Password)',
    definition: 'A temporary 4 or 6-digit numeric security code sent to your phone to authenticate a single transaction or login.',
    example: 'An SMS saying: "384920 is your secret OTP for transaction of ₹2,500. Do not share with anyone".',
    safetyTip: 'Never read out, forward, or type your OTP anywhere other than the official app.'
  },
  {
    term: 'UPI PIN',
    definition: 'A 4 or 6-digit confidential code that you set to authorize digital money transfers out of your bank account.',
    example: 'Entering your secret PIN inside PhonePe or GPay to pay a local grocery store.',
    safetyTip: 'Remember: You only enter your UPI PIN to SEND money, never to receive money.'
  },
  {
    term: 'Phishing',
    definition: 'A deceptive message or fraudulent website designed to trick you into revealing passwords, card details, or personal data.',
    example: 'An SMS saying your electricity bill is unpaid with a fake payment link.',
    safetyTip: 'Never click on links in unsolicited SMS or WhatsApp messages.'
  },
  {
    term: 'Digital Arrest',
    definition: 'An illegal intimidation scam where fraudsters impersonate police on video calls, falsely claiming you are detained online.',
    example: 'Callers on Skype wearing fake police uniforms ordering you not to leave your room.',
    safetyTip: 'There is no such legal concept in India. Hang up immediately and dial 1930.'
  },
  {
    term: '2FA (Two-Factor Authentication)',
    definition: 'A dual-layer security method requiring two pieces of evidence to log in (e.g., password + SMS code/authenticator app).',
    example: 'Entering your Google password, followed by an instant prompt on your phone.',
    safetyTip: 'Enable 2FA on WhatsApp, email, and social media to prevent account theft.'
  },
  {
    term: 'Malware / APK',
    definition: 'Malicious software or application installation files designed to secretly spy on your device or intercept banking OTPs.',
    example: 'A link on WhatsApp downloading an app called "E-Challan.apk" or "FreeRecharge.apk".',
    safetyTip: 'Only install mobile applications from official app stores like Google Play Store or Apple App Store.'
  },
  {
    term: 'SIM Swap',
    definition: 'A fraudulent attack where criminals trick a telecom provider into issuing a duplicate SIM to intercept your SMS and banking OTPs.',
    example: 'Your phone suddenly displaying "No Service" while fraudsters drain your bank account.',
    safetyTip: 'If your mobile network stays inactive unexpectedly, contact your telecom provider immediately.'
  },
  {
    term: 'Golden Hour',
    definition: 'The crucial initial 1-2 hour window following a financial scam during which reporting to 1930 can freeze stolen funds.',
    example: 'Calling 1930 within 30 minutes of an unauthorized UPI transfer.',
    safetyTip: 'Act immediately! Every minute matters before fraudsters withdraw funds from ATMs.'
  }
];

const governmentSchemes = [
  {
    title: 'National Cyber Crime Reporting Portal',
    portal: 'cybercrime.gov.in',
    url: 'https://cybercrime.gov.in',
    desc: 'Official Government of India portal under MHA (I4C) for registering complaints regarding all types of financial and cyber crimes.'
  },
  {
    title: 'myScheme Official Portal',
    portal: 'myscheme.gov.in',
    url: 'https://www.myscheme.gov.in',
    desc: 'Official platform to discover verified central and state government schemes, subsidies, and citizen benefits.'
  },
  {
    title: 'Sanchar Saathi (DoT)',
    portal: 'sancharsaathi.gov.in',
    url: 'https://sancharsaathi.gov.in',
    desc: 'Department of Telecommunications portal to block lost/stolen mobile phones (CEIR) and check mobile connections in your name (TAFCOP).'
  },
  {
    title: 'Chakshu Suspected Fraud Reporting',
    portal: 'sancharsaathi.gov.in/sfc',
    url: 'https://sancharsaathi.gov.in',
    desc: 'Official facility to report suspicious fraud communication received via calls, SMS, or WhatsApp before losing money.'
  },
  {
    title: 'RBI Kehta Hai – Financial Awareness',
    portal: 'rbikehtahai.rbi.org.in',
    url: 'https://rbikehtahai.rbi.org.in',
    desc: 'Official Reserve Bank of India consumer awareness initiative promoting safe banking and electronic transactions.'
  }
];

const voiceScamRules = [
  {
    id: 'otp_fraud',
    issue: {
      en: 'OTP Fraud / Unauthorized Account Access',
      hi: 'OTP धोखाधड़ी / अनधिकृत खाता पहुंच',
      mr: 'OTP फसवणूक / बँक खात्याची चोरी'
    },
    warningSigns: {
      en: [
        'Caller claims to be from your bank, electricity board, or telecom asking for an OTP.',
        'Urgent threat: "Share OTP now or your account / SIM card will be deactivated."',
        'Claiming entering or sharing an OTP is required to receive money or lottery prize.'
      ],
      hi: [
        'कॉल करने वाला खुद को बैंक अधिकारी या बिजली विभाग बताकर OTP मांग रहा है।',
        'धमकी देना कि तुरंत OTP नहीं दिया तो आपका खाता या सिम बंद हो जाएगा।',
        'यह दावा करना कि पैसे या लॉटरी पाने के लिए OTP बताना जरूरी है।'
      ],
      mr: [
        'बँक किंवा वीज कंपनीचा अधिकारी असल्याचे भासवून फोनवर OTP मागणे.',
        'OTP न दिल्यास बँक खाते किंवा सिम कार्ड तात्काळ बंद होण्याची धमकी देणे.',
        'पैसे खात्यात जमा करण्यासाठी किंवा लॉटरीसाठी OTP सांगण्यास सांगणे.'
      ]
    },
    whatToDo: {
      en: [
        'Do not share any OTP, PIN, password, or card CVV with anyone.',
        'Hang up immediately. Legitimate banks NEVER ask for OTPs over phone calls.',
        'If money has already been debited, immediately call National Helpline 1930 and contact your bank to freeze internet banking.'
      ],
      hi: [
        'किसी के साथ भी OTP, पिन, पासवर्ड या CVV कभी साझा न करें।',
        'कॉल तुरंत काट दें। कोई भी बैंक फोन पर कभी OTP नहीं मांगता।',
        'यदि पैसे कट गए हैं, तो तुरंत राष्ट्रीय हेल्पलाइन 1930 पर कॉल करें और बैंक को सूचित कर खाता फ्रीज करवाएं।'
      ],
      mr: [
        'कोणालाही OTP, पिन, पासवर्ड किंवा CVV शेअर करू नका.',
        'फोन तात्काळ बंद करा. अधिकृत बँक कधीही फोनवर OTP मागत नाही.',
        'पैसे गेले असल्यास तात्काळ राष्ट्रीय हेल्पलाइन 1930 वर कॉल करा आणि बँकेत जाऊन खाते गोठवा.'
      ]
    },
    spokenSolution: {
      en: 'Never share your OTP with anyone. Banks and service providers never ask for OTPs or PINs. Hang up immediately. If money was lost, call 1930 immediately.',
      hi: 'किसी के साथ भी अपना OTP साझा न करें। बैंक कभी भी फोन पर OTP नहीं मांगते। कॉल तुरंत काटें और पैसे कटने पर 1930 पर शिकायत करें।',
      mr: 'कोणासोबतही आपला OTP शेअर करू नका. बँक कधीही फोनवर OTP मागत नाही. फोन त्वरित बंद करा आणि 1930 वर तक्रार नोंदवा.'
    },
    keywords: [
      'otp', 'one time password', 'code', 'pin', 'verification code', 'passcode', '6 digit',
      'ओटीपी', 'पासवर्ड', 'कोड', 'ओटीपी मांगा', 'ओटीपी विचारला', 'पिन'
    ]
  },
  {
    id: 'upi_fraud',
    issue: {
      en: 'UPI Payment Fraud / Collect Request Trap',
      hi: 'UPI भुगतान धोखाधड़ी / कलेक्ट रिक्वेस्ट जाल',
      mr: 'UPI फसवणूक / कलेक्ट रिक्वेस्ट ट्रॅप'
    },
    warningSigns: {
      en: [
        'Buyer on marketplace or stranger asks you to approve a "Pay" or "Collect" request to receive money.',
        'Asking you to enter your secret 4 or 6-digit UPI PIN to "deposit" money.',
        'High urgency saying payment link will expire in 2 minutes.'
      ],
      hi: [
        'खरीदार या अनजान व्यक्ति पैसे देने के बहाने UPI ऐप में "Pay" या "Collect" रिक्वेस्ट भेज रहा है।',
        'पैसे प्राप्त करने के लिए आपसे 4 या 6 अंकों का UPI PIN डालने को कहना।',
        'जल्दबाजी करना कि 2 मिनट में पेमेंट लिंक खत्म हो जाएगा।'
      ],
      mr: [
        'पैसे देण्यासाठी PhonePe, GPay किंवा Paytm वर "Pay" किंवा "Collect" रिक्वेस्ट पाठवणे.',
        'पैसे स्वीकारण्यासाठी 4 किंवा 6 अंकी UPI PIN टाकण्याची सक्ती करणे.',
        'पेमेंट लिंक लगेच संपेल अशी घाई करणे.'
      ]
    },
    whatToDo: {
      en: [
        'Remember the Golden Rule: To RECEIVE money on UPI, you NEVER need to enter a PIN or scan a QR code.',
        'Decline any unfamiliar collect requests on PhonePe, GPay, or Paytm immediately.',
        'If you already entered your PIN and money was deducted, call 1930 and report to your bank within the Golden Hour.'
      ],
      hi: [
        'गोल्डन नियम याद रखें: UPI से पैसे प्राप्त करने के लिए कभी भी PIN डालने या QR कोड स्कैन करने की जरूरत नहीं होती।',
        'PhonePe, GPay या Paytm पर अनजान कलेक्ट रिक्वेस्ट को तुरंत अस्वीकार (Decline) करें।',
        'यदि पैसे कट चुके हैं, तो गोल्डन ऑवर में तुरंत 1930 डायल करें और बैंक को सूचित करें।'
      ],
      mr: [
        'सुवर्ण नियम लक्षात ठेवा: UPI द्वारे पैसे मिळवण्यासाठी कधीही PIN टाकण्याची किंवा QR कोड स्कॅन करण्याची गरज नसते.',
        'अनोळखी कलेक्ट रिक्वेस्ट तात्काळ नाकारा (Decline करा).',
        'पैसे वजा झाले असल्यास तात्काळ 1930 वर कॉल करा आणि बँकेत व्यवहार थांबवण्याची विनंती करा.'
      ]
    },
    spokenSolution: {
      en: 'Golden Rule: To receive money via UPI, you never need to enter a UPI PIN. Decline the request immediately. If money was deducted, dial 1930.',
      hi: 'याद रखें: UPI से पैसे प्राप्त करने के लिए कभी भी PIN डालने की जरूरत नहीं होती। रिक्वेस्ट रिजेक्ट करें। पैसे कटे तो तुरंत 1930 पर कॉल करें।',
      mr: 'लक्षात ठेवा: UPI वरून पैसे स्वीकारण्यासाठी कधीही PIN टाकावा लागत नाही. रिक्वेस्ट लगेच नाकारा. पैसे गेले असल्यास 1930 डायल करा.'
    },
    keywords: [
      'upi', 'gpay', 'phonepe', 'paytm', 'bhim', 'collect request', 'enter pin to receive', 'upi pin',
      'यूपीआई', 'फोनपे', 'गूगलपे', 'पेटीएम', 'पिन', 'पैसे कट गए', 'पैसे गेले', 'पैसे पाठवा', 'पैसे स्वीकारण्यासाठी'
    ]
  },
  {
    id: 'qr_code_scam',
    issue: {
      en: 'QR Code Scam / False Payment Scanner',
      hi: 'QR कोड घोटाला / फर्जी पेमेंट स्कैनर',
      mr: 'QR कोड फसवणूक / बनावट स्कॅनर'
    },
    warningSigns: {
      en: [
        'A buyer or stranger sends an image of a QR code on WhatsApp asking you to scan it to receive money or reward.',
        'QR code stickers pasted over authentic merchant QR codes at shops.',
        'The screen shows "Paying / Transferring" instead of "Received".'
      ],
      hi: [
        'व्हाट्सएप पर किसी ने QR कोड भेजा और कहा कि इसे स्कैन करके आपके खाते में पैसे आएंगे।',
        'दुकानों में असली क्यूआर कोड पर कोई दूसरा स्टिकर चिपका होना।',
        'स्कैन करने पर स्क्रीन पर पैसे कटने का विकल्प आना।'
      ],
      mr: [
        'WhatsApp वर QR कोड पाठवून तो स्कॅन केल्यास पैसे जमा होतील असे सांगणे.',
        'दुकानातील मूळ QR कोडवर दुसरे बनावट स्टिकर चिकटवलेले असणे.',
        'स्कॅन केल्यावर "Paying" असा मेसेज दिसणे.'
      ]
    },
    whatToDo: {
      en: [
        'Never scan any QR code to receive money. Scanning a QR code is strictly for SENDING money or opening URLs.',
        'Refuse the buyer: ask them to send money to your mobile number or UPI ID directly.',
        'Inspect merchant QR stands physically before making payments.'
      ],
      hi: [
        'पैसे पाने के लिए कभी कोई QR कोड स्कैन न करें। QR कोड सिर्फ पैसे भेजने के लिए होता है।',
        'कस्टमर को कहें कि वह आपके मोबाइल नंबर या बैंक खाते में सीधे पैसे भेजे।',
        'दुकान पर पेमेंट करते समय QR स्टिकर की जांच करें।'
      ],
      mr: [
        'पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन करू नका. QR कोड फक्त पैसे पाठवण्यासाठी असतो.',
        'समोरच्या व्यक्तीला थेट मोबाईल नंबरवर पैसे पाठवण्यास सांगा.',
        'दुकानातील QR स्टिकरची खात्री करूनच पैसे पाठवा.'
      ]
    },
    spokenSolution: {
      en: 'Scanning a QR code only sends money away, it never receives money. Never scan a QR code sent on chat. If money was lost, dial 1930.',
      hi: 'QR कोड स्कैन करने से आपके खाते से पैसे कटते हैं, पैसे आते नहीं हैं। किसी का भेजा QR स्कैन न करें। नुकसान होने पर 1930 पर शिकायत करें।',
      mr: 'QR कोड स्कॅन केल्याने पैसे खात्यातून वजा होतात, जमा होत नाहीत. कोणाचाही QR कोड स्कॅन करू नका. फसवणूक झाल्यास 1930 वर कॉल करा.'
    },
    keywords: [
      'qr code', 'scan qr', 'barcode', 'scan to receive', 'scanner',
      'क्यूआर', 'बारकोड', 'स्कैन', 'क्यूआर कोड', 'स्कॅन'
    ]
  },
  {
    id: 'fake_kyc',
    issue: {
      en: 'Fake Bank / SIM KYC Update Scam',
      hi: 'फर्जी बैंक / सिम KYC अपडेट घोटाला',
      mr: 'बनावट बँक / सिम KYC अपडेट फसवणूक'
    },
    warningSigns: {
      en: [
        'SMS or call claiming your Bank Account, PAN card, or SIM card will be deactivated today.',
        'Asking you to click a link like sbi-kyc-verify.online or download a remote app (AnyDesk, QuickSupport).',
        'Asking for an upfront ₹1 or ₹10 recharge to verify your identity.'
      ],
      hi: [
        'संदेश आना कि आज आपका बैंक खाता, पैन कार्ड या सिम कार्ड हमेशा के लिए बंद हो जाएगा।',
        'अनजान लिंक पर आधार या पैन नंबर दर्ज करने और स्क्रीन-शेयरिंग ऐप डाउनलोड करने को कहना।',
        'वेरिफिकेशन के नाम पर ₹1 या ₹10 का रीचार्ज करने को कहना।'
      ],
      mr: [
        'बँक खाते, पॅन कार्ड किंवा सिम कार्ड आजच ब्लॉक होईल असा खोटा मेसेज किंवा कॉल येणे.',
        'अनोळखी लिंकवर जाऊन आधार किंवा बँक माहिती भरण्यास सांगणे किंवा AnyDesk ॲप डाऊनलोड करायला लावणे.',
        'पडताळणीसाठी १० रुपयांचा छोटा व्यवहार करण्यास भाग पाडणे.'
      ]
    },
    whatToDo: {
      en: [
        'Do not click any links or download any remote screen-sharing software.',
        'Official KYC is NEVER conducted via remote screen-sharing apps or third-party web forms.',
        'Visit your local bank branch directly or use the bank official mobile application.'
      ],
      hi: [
        'किसी भी लिंक पर क्लिक न करें और न ही AnyDesk जैसे स्क्रीन-शेयरिंग ऐप डाउनलोड करें।',
        'बैंक कभी भी फोन कॉल या थर्ड पार्टी लिंक पर KYC नहीं करता।',
        'अपनी नजदीकी बैंक शाखा जाएं या आधिकारिक बैंकिंग ऐप का उपयोग करें।'
      ],
      mr: [
        'मेसेजमधील कोणत्याही लिंकवर क्लिक करू नका आणि कोणतेही ॲप इन्स्टॉल करू नका.',
        'अधिकृत बँक कधीही फोनवर किंवा व्हॉट्सअ‍ॅपवर KYC करत नाही.',
        'थेट बँकेच्या अधिकृत शाखेत जा किंवा अधिकृत मोबाइल ॲप वापरा.'
      ]
    },
    spokenSolution: {
      en: 'Banks never deactivate accounts via SMS links. Never install screen-sharing apps like AnyDesk for KYC. Visit your bank branch directly.',
      hi: 'बैंक कभी भी SMS लिंक से खाता बंद नहीं करते। KYC के लिए AnyDesk ऐप डाउनलोड न करें। हमेशा सीधे बैंक शाखा जाकर जांच करें।',
      mr: 'बँक कधीही SMS मधील लिंकवरून खाते बंद करत नाही. KYC साठी कोणतेही स्क्रीन-शेअरिंग ॲप इन्स्टॉल करू नका. थेट बँकेच्या शाखेत जा.'
    },
    keywords: [
      'kyc', 'aadhaar', 'pan card', 'sim block', 'account suspended', 'sim card deactivation', 'kyc update',
      'केवायसी', 'आधार', 'पैन', 'पॅन', 'सिम ब्लॉक', 'खाता बंद', 'खाते बंद', 'अकाउंट ब्लॉक'
    ]
  },
  {
    id: 'fake_customer_care',
    issue: {
      en: 'Fake Customer Care Helpline Number Scam',
      hi: 'फर्जी कस्टमर केयर हेल्पलाइन घोटाला',
      mr: 'बनावट ग्राहक सेवा (कस्टमर केअर) फसवणूक'
    },
    warningSigns: {
      en: [
        'Helpline numbers found through ordinary Google search or Google Maps listing personal 10-digit mobile numbers.',
        'Customer support agent demanding remote access (AnyDesk, TeamViewer) to process your refund or delivery.',
        'Asking for debit card details, CVV, or netbanking login to "cancel" a faulty transaction.'
      ],
      hi: [
        'गूगल सर्च या मैप्स पर मिला हेल्पलाइन नंबर जो सामान्य 10 अंकों का मोबाइल नंबर हो।',
        'कस्टमर केयर का व्यक्ति रिफंड के लिए AnyDesk या रस्टडेस्क ऐप डाउनलोड करने को कहे।',
        'समस्या सुलझाने के नाम पर कार्ड नंबर, CVV या OTP की मांग करना।'
      ],
      mr: [
        'गुगलवर किंवा मॅप्सवर मिळालेला १० अंकी वैयक्तिक मोबाईल नंबर.',
        'रिफंड देण्यासाठी AnyDesk किंवा TeamViewer ॲप इन्स्टॉल करण्यास सांगणे.',
        'तक्रार सोडवण्यासाठी ATM कार्ड नंबर, CVV किंवा पासवर्ड विचारणे.'
      ]
    },
    whatToDo: {
      en: [
        'Never use phone numbers found directly on search engine results or Google Maps reviews.',
        'Only obtain customer care numbers from inside the official mobile app or verified official website (e.g. .gov.in, official corporate domain).',
        'Immediately disconnect if any support agent asks for remote device access or your card security details.'
      ],
      hi: [
        'गूगल सर्च या सोशल मीडिया पर मिले अनजान कस्टमर केयर नंबरों पर भरोसा न करें।',
        'हमेशा आधिकारिक ऐप के अंदर से ही सपोर्ट नंबर निकालें।',
        'यदि कोई एनीडेस्क डाउनलोड करने या कार्ड डिटेल मांगे, तो तुरंत फोन काट दें।'
      ],
      mr: [
        'गुगल सर्चवर आढळलेल्या कोणत्याही कस्टमर केअर नंबरवर डोळे झाकून विश्वास ठेवू नका.',
        'अधिकृत ॲपच्या आत दिलेल्या संपर्क क्रमांकावरूनच संपर्क साधा.',
        'रिमोट ॲप इन्स्टॉल करण्यास किंवा कार्ड तपशील मागितल्यास फोन तात्काळ बंद करा.'
      ]
    },
    spokenSolution: {
      en: 'Real customer support never asks you to install remote access apps or share card numbers. Get support numbers only from inside official apps.',
      hi: 'असली कस्टमर केयर कभी एनीडेस्क डाउनलोड करने या कार्ड नंबर नहीं मांगता। हमेशा आधिकारिक ऐप के अंदर दिए गए नंबर पर ही बात करें।',
      mr: 'खरे ग्राहक सेवा प्रतिनिधी कधीही AnyDesk ॲप डाऊनलोड करायला लावत नाहीत किंवा कार्ड डिटेल्स मागत नाहीत. अधिकृत ॲपमधूनच नंबर मिळवा.'
    },
    keywords: [
      'customer care', 'helpline', 'toll free', 'google number', 'courier support', 'refund number',
      'कस्टमर केयर', 'हेल्पलाइन', 'टोल फ्री', 'ग्राहक सेवा', 'कस्टमर केअर', 'रिफंड'
    ]
  },
  {
    id: 'phishing',
    issue: {
      en: 'Phishing & Malicious SMS / WhatsApp Links',
      hi: 'फिशिंग और दुर्भावनापूर्ण एसएमएस / व्हाट्सएप लिंक',
      mr: 'फिशिंग आणि बनावट मेसेज / धोकादायक लिंक्स'
    },
    warningSigns: {
      en: [
        'SMS claiming unpaid electricity bill will cause power disconnection tonight at 9:30 PM.',
        'Shortened links (bit.ly, tinyurl, cutt.ly) or strange domains (.top, .xyz, .online, .site).',
        'India Post or courier delivery SMS asking for a ₹5 or ₹10 redelivery fee.'
      ],
      hi: [
        'मैसेज आना कि आज रात 9:30 बजे बिजली कट जाएगी क्योंकि बिल अपडेट नहीं है।',
        'अजीब लिंक (bit.ly, .top, .xyz) जिस पर क्लिक करने को कहा जाए।',
        'डाक विभाग या कूरियर के नाम पर ₹5 या ₹10 शुल्क भरने का फर्जी लिंक।'
      ],
      mr: [
        'आज रात्री ९:३० वाजता वीज पुरवठा खंडित होईल असा महावितरणच्या नावाने खोटा मेसेज येणे.',
        'अनोळखी किंवा संशयास्पद लिंक्स (bit.ly, .top, .xyz).',
        'पोस्ट पार्सल अडकल्याचे सांगून ५-१० रुपये भरण्यासाठी लिंक पाठवणे.'
      ]
    },
    whatToDo: {
      en: [
        'Never click on links received in unsolicited SMS or WhatsApp messages.',
        'Electricity companies never disconnect power on the same day without formal written notice.',
        'Verify your electricity bill or courier status only on the official portal (e.g. Mahadiscom app, indiapost.gov.in).'
      ],
      hi: [
        'एसएमएस या व्हाट्सएप पर आए अनजान लिंक पर कभी क्लिक न करें।',
        'बिजली कंपनियां बिना लिखित नोटिस के कभी एक दिन में बिजली नहीं काटतीं।',
        'बिजली बिल या कूरियर की स्थिति हमेशा आधिकारिक सरकारी पोर्टल पर ही जांचें।'
      ],
      mr: [
        'अनोळखी मेसेजमधील कोणत्याही लिंकवर क्लिक करू नका.',
        'वीज कंपन्या अशा प्रकारे एकाच दिवसात मेसेज पाठवून वीज कापत नाहीत.',
        'अधिकृत वीज वितरण ॲप किंवा indiapost.gov.in वरच खात्री करा.'
      ]
    },
    spokenSolution: {
      en: 'Do not click links in SMS or WhatsApp. Power companies never disconnect power via SMS threats. Verify directly on official apps.',
      hi: 'एसएमएस या व्हाट्सएप पर आए किसी भी लिंक पर क्लिक न करें। बिजली कटने की धमकी वाले मेसेज फर्जी होते हैं। आधिकारिक ऐप पर जांचें।',
      mr: 'मेसेजमधील कोणत्याही लिंकवर क्लिक करू नका. वीज कापण्याचे मेसेज खोटे असतात. अधिकृत ॲपवरूनच खात्री करा.'
    },
    keywords: [
      'phishing', 'link', 'sms link', 'electricity bill', 'power disconnect', 'msedcl', 'parcel held', 'indiapost', 'apk file', 'unknown link',
      'लिंक', 'बिजली बिल', 'बिजली कट', 'मेसेज', 'वीज बिल', 'पार्सल', 'एपीके', 'क्लिक करा', 'अनोळखी लिंक'
    ]
  },
  {
    id: 'fake_job_scam',
    issue: {
      en: 'Fake Work-From-Home & Telegram Task Scam',
      hi: 'फर्जी वर्क-फ्रॉम-होम और टेलीग्राम टास्क घोटाला',
      mr: 'बनावट वर्क-फ्रॉम-होम आणि टेलिग्राम टास्क फसवणूक'
    },
    warningSigns: {
      en: [
        'Promises of ₹2,000 to ₹5,000 daily earnings for liking YouTube videos or writing Google reviews.',
        'Small initial payment (₹150-₹300) sent to gain trust, followed by demands for VIP deposits (₹5,000 to ₹50,000).',
        'Recruiter uses WhatsApp or Telegram with an international number (+62, +84, +234).'
      ],
      hi: [
        'यूट्यूब वीडियो लाइक करने या होटल रिव्यू लिखने पर रोजाना ₹3,000 कमाने का वादा।',
        'शुरुआत में विश्वास जीतने के लिए ₹150-₹300 देना, फिर बड़े टास्क के लिए पैसे जमा कराने की मांग।',
        'टेलीग्राम ग्रुप में फर्जी स्क्रीनशॉट दिखाकर पैसे निवेश कराने का दबाव।'
      ],
      mr: [
        'यूट्यूब व्हिडिओ लाईक करून किंवा रेटिंग देऊन दररोज हजारो रुपये मिळण्याचे आमिष.',
        'सुरुवातीला २०० रुपये देऊन विश्वास संपादन करणे, नंतर मोठी रक्कम जमा करायला लावणे.',
        'टेलिग्राम ग्रुपमध्ये नफ्याचे बनावट स्क्रीनशॉट दाखवून पैसे अडकवणे.'
      ]
    },
    whatToDo: {
      en: [
        'Stop immediately! Legitimate employers NEVER ask candidates to deposit money to unlock tasks or withdraw salary.',
        'Do not deposit any more money to "recover" previous funds; scammers will never return it.',
        'Exit the Telegram group and immediately report financial loss to 1930.'
      ],
      hi: [
        'तुरंत रुक जाएं! कोई भी असली कंपनी काम देने के लिए कभी पैसे नहीं मांगती।',
        'पुराने पैसे वापस पाने के चक्कर में और पैसे कभी न भेजें; ठग पैसे वापस नहीं करेंगे।',
        'ग्रुप से तुरंत बाहर निकलें और 1930 पर वित्तीय ठगी की शिकायत दर्ज कराएं।'
      ],
      mr: [
        'तात्काळ थांबा! खरी नोकरी देणारी संस्था कधीही टास्कसाठी पैसे मागत नाही.',
        'अडकलेले पैसे काढण्यासाठी आणखी पैसे भरू नका; ते परत मिळणार नाहीत.',
        'ग्रुपमधून बाहेर पडा आणि 1930 वर तात्काळ तक्रार नोंदवा.'
      ]
    },
    spokenSolution: {
      en: 'Real jobs never require you to deposit money. Any task asking for money to unlock earnings is 100% fraud. Stop paying and call 1930.',
      hi: 'असली नौकरी में कभी पैसे जमा नहीं करने पड़ते। टास्क के लिए पैसे मांगना पूरी तरह धोखाधड़ी है। पैसे देना बंद करें और 1930 डायल करें।',
      mr: 'खऱ्या नोकरीसाठी कधीही पैसे भरावे लागत नाहीत. टास्कच्या नावाखाली पैसे मागणे ही शुद्ध फसवणूक आहे. तात्काळ 1930 वर कॉल करा.'
    },
    keywords: [
      'job', 'work from home', 'telegram task', 'part time job', 'like youtube', 'review rating', 'placement fee', 'laptop deposit',
      'नौकरी', 'घर बैठे काम', 'टास्क', 'टेलीग्राम', 'नोकरी', 'पार्ट टाइम', 'टेलिग्राम', 'काम'
    ]
  },
  {
    id: 'online_shopping_fraud',
    issue: {
      en: 'Online Shopping & Social Media Marketplace Trap',
      hi: 'ऑनलाइन शॉपिंग और सोशल मीडिया स्टोर जाल',
      mr: 'ऑनलाइन खरेदी आणि सोशल मीडिया फसवणूक'
    },
    warningSigns: {
      en: [
        'Branded electronics, smartphones, or sarees advertised on Instagram or Facebook at 90% discount.',
        'The seller insists only on upfront UPI / QR payments and disables Cash on Delivery (COD).',
        'Comments are disabled on the seller social media posts, and there is no physical address or registered GSTIN.'
      ],
      hi: [
        'इंस्टाग्राम या फेसबुक पर ब्रांडेड सामान, फोन या साड़ियां 90% छूट पर दिखाने वाले विज्ञापन।',
        'केवल पहले से ऑनलाइन पेमेंट (UPI) की मांग और कैश ऑन डिलीवरी (COD) से इनकार।',
        'पेज पर टिप्पणियां बंद होना और कोई वास्तविक दुकान का पता या GST नंबर न होना।'
      ],
      mr: [
        'सोशल मीडियावर ब्रँडेड वस्तू किंवा साड्यांवर ९०% सवलत दाखवणाऱ्या जाहिराती.',
        'फक्त आधी ऑनलाइन पैसे भरण्याची सक्ती करणे आणि कॅश ऑन डिलिव्हरी नाकारणे.',
        'दुकानदाराचा खरा पत्ता किंवा GST नंबर नसणे.'
      ]
    },
    whatToDo: {
      en: [
        'Shop only through verified, reputable e-commerce platforms with buyer protection guarantees.',
        'For newly discovered stores, strictly choose Cash on Delivery (COD).',
        'Remember: if an offer looks impossibly cheap, it is almost certainly a scam.'
      ],
      hi: [
        'हमेशा जांची-परखी आधिकारिक शॉपिंग वेबसाइट से ही सामान खरीदें।',
        'नए स्टोर से खरीदारी करते समय केवल कैश ऑन डिलीवरी (COD) का ही चयन करें।',
        'अत्यधिक सस्ता ऑफर हमेशा ठगी का संकेत होता है।'
      ],
      mr: [
        'नेहमी नामांकित आणि अधिकृत ई-कॉमर्स प्लॅटफॉर्मवरूनच खरेदी करा.',
        'नवीन संकेतस्थळांवरून खरेदी करताना नेहमी कॅश ऑन डिलिव्हरी (COD) पर्याय निवडा.',
        'अवास्तव स्वस्त ऑफर ही नेहमी फसवणूक असते.'
      ]
    },
    spokenSolution: {
      en: 'Unrealistically cheap online stores are scams. Never pay prepaid UPI for unknown social media shops. Always prefer Cash on Delivery.',
      hi: 'सोशल मीडिया पर भारी छूट वाले अज्ञात स्टोर ठगी होते हैं। अनजान दुकानों को पहले पैसे न भेजें। हमेशा कैश ऑन डिलीवरी चुनें।',
      mr: 'सोशल मीडियावरील अतिशय स्वस्त वस्तूंचे दावे खोटे असतात. अनोळखी दुकानांना आधी पैसे पाठवू नका. नेहमी कॅश ऑन डिलिव्हरी निवडा.'
    },
    keywords: [
      'shopping', 'order', 'instagram store', 'facebook ad', 'cheap saree', 'fake product', 'olx buyer', 'cash on delivery',
      'शॉपिंग', 'खरीदारी', 'ऑर्डर', 'सस्ता फोन', 'खरेदी', 'पार्सल', 'स्वस्त साडी', 'ओएलएक्स'
    ]
  },
  {
    id: 'investment_scam',
    issue: {
      en: 'Fake Investment & Stock / Crypto Trading App Scam',
      hi: 'फर्जी निवेश और शेयर / क्रिप्टो ट्रेडिंग ऐप घोटाला',
      mr: 'बनावट गुंतवणूक आणि शेअर्स / क्रिप्टो ट्रेडिंग फसवणूक'
    },
    warningSigns: {
      en: [
        'Promises of guaranteed 20% to 50% monthly returns with "zero risk".',
        'Instructing you to install an unlisted APK file instead of downloading from Google Play Store.',
        'Deposits requested into personal savings bank accounts of individuals rather than SEBI-registered corporate brokers.'
      ],
      hi: [
        'हर महीने बिना किसी जोखिम के 20% से 50% पक्के मुनाफे का लालच।',
        'गूगल प्ले स्टोर के बाहर से अनजान APK फाइल डाउनलोड करने को कहना।',
        'पैसे किसी कंपनी के बजाय अलग-अलग व्यक्तियों के निजी बैंक खातों में ट्रांसफर कराना।'
      ],
      mr: [
        'दरमहा २० ते ५० टक्के हमखास नफ्याचे आमिष दाखवणे.',
        'प्ले स्टोअरऐवजी थेट लिंकवरून संशयास्पद ॲप डाऊनलोड करायला लावणे.',
        'गुंतवणुकीचे पैसे अधिकृत ब्रोकरऐवजी वैयक्तिक बँक खात्यांवर मागणे.'
      ]
    },
    whatToDo: {
      en: [
        'No legitimate investment guarantees high fixed returns. Stop transferring money immediately.',
        'Invest only through SEBI-registered brokers and mutual funds verified on sebi.gov.in.',
        'The profits shown on fake trading apps are fabricated digital numbers; report immediately to 1930.'
      ],
      hi: [
        'कोई भी वैध निवेश गारंटीड भारी रिटर्न नहीं देता। तुरंत पैसे भेजना बंद करें।',
        'केवल सेबी (SEBI) पंजीकृत ब्रोकरों के माध्यम से ही निवेश करें।',
        'ऐप में दिख रहा मुनाफा केवल फर्जी स्क्रीन नंबर है। तुरंत 1930 पर शिकायत करें।'
      ],
      mr: [
        'कोणतीही अधिकृत गुंतवणूक अवास्तव नफ्याची हमी देत नाही. पैसे पाठवणे त्वरित थांबवा.',
        'फक्त SEBI नोंदणीकृत अधिकृत ब्रोकरकडूनच गुंतवणूक करा.',
        'अ‍ॅपमध्ये दिसणारा नफा बनावट असतो. तात्काळ 1930 वर तक्रार नोंदवा.'
      ]
    },
    spokenSolution: {
      en: 'Guaranteed high returns are always scams. Fake apps display manipulated numbers. Stop investing and report immediately to helpline 1930.',
      hi: 'गारंटीड भारी मुनाफे का दावा हमेशा ठगी होता है। फर्जी ऐप में दिख रहा पैसा नकली होता है। पैसे न भेजें और तुरंत 1930 पर कॉल करें।',
      mr: 'हमखास मोठा नफा देण्याचे दावे खोटे असतात. बनावट ॲपमधील नफ्याचे आकडे खोटे असतात. पैसे पाठवणे थांबवा आणि 1930 वर संपर्क करा.'
    },
    keywords: [
      'investment', 'trading', 'crypto', 'stock market', 'forex', 'high return', 'double money', 'profit',
      'निवेश', 'ट्रेडिंग', 'शेयर मार्केट', 'क्रिप्टो', 'मुनाफा', 'गुंतवणूक', 'शेअर्स', 'नफा'
    ]
  },
  {
    id: 'whatsapp_social_scam',
    issue: {
      en: 'WhatsApp / Social Media Impersonation & Friend in Need',
      hi: 'व्हाट्सएप / सोशल मीडिया रूप बदलकर ठगी (इम्पर्सनेशन)',
      mr: 'व्हॉट्सअ‍ॅप / सोशल मीडिया बनावट ओळख फसवणूक'
    },
    warningSigns: {
      en: [
        'Message from an unknown number displaying your relative’s or boss’s profile photograph.',
        'Claims of extreme medical or travel emergency demanding immediate money transfer via UPI.',
        'Refusing to speak on a standard voice call, claiming poor network or being in a meeting/hospital.'
      ],
      hi: [
        'किसी नए नंबर से मैसेज आना जिस पर आपके रिश्तेदार या दोस्त की प्रोफाइल फोटो लगी हो।',
        'अस्पताल या यात्रा में आपातकाल का बहाना बनाकर तुरंत UPI पर पैसे मांगने की जिद।',
        'सामान्य फोन कॉल पर बात करने से बचना और केवल चैट करने का दबाव बनाना।'
      ],
      mr: [
        'नवीन नंबरवरून आलेल्या मेसेजवर तुमच्या मित्राचा किंवा नातेवाईकाचा फोटो असणे.',
        'हॉस्पिटल किंवा तातडीच्या अडचणीचे कारण सांगून तात्काळ पैसे पाठवण्याची मागणी.',
        'थेट फोनवर बोलण्यास टाळाटाळ करणे.'
      ]
    },
    whatToDo: {
      en: [
        'Always dial your friend or family member on their known, original phone number before sending any money.',
        'Never rely on profile photos or names on WhatsApp; anyone can download a photo and create a profile.',
        'Ask a private personal question that only your real friend or family member could answer.'
      ],
      hi: [
        'पैसे भेजने से पहले हमेशा अपने परिचित के मूल, पुराने फोन नंबर पर सीधे कॉल करके पुष्टि करें।',
        'व्हाट्सएप पर फोटो देखकर कभी भरोसा न करें; कोई भी इंटरनेट से फोटो कॉपी कर सकता है।',
        'कोई ऐसा निजी सवाल पूछें जिसका जवाब केवल आपका असली दोस्त ही जानता हो।'
      ],
      mr: [
        'पैसे पाठवण्यापूर्वी नेहमी मित्राच्या मूळ फोन नंबरवर कॉल करून खात्री करा.',
        'फक्त प्रोफाइल फोटो पाहून विश्वास ठेवू नका; कोणीही फोटो कॉपी करू शकतो.',
        'असा वैयक्तिक प्रश्न विचारा ज्याचे उत्तर फक्त तुमच्या खऱ्या मित्रालाच माहीत असेल.'
      ]
    },
    spokenSolution: {
      en: 'Never send emergency money based on WhatsApp messages. Always call your friend on their known original phone number to verify first.',
      hi: 'व्हाट्सएप मैसेज देखकर कभी आपातकालीन पैसे न भेजें। हमेशा परिचित के पुराने फोन नंबर पर कॉल करके पहले पुष्टि करें।',
      mr: 'व्हॉट्सअ‍ॅप मेसेजवर विश्वास ठेवून घाईघाईत पैसे पाठवू नका. नेहमी त्या व्यक्तीच्या मूळ नंबरवर फोन करून खात्री करा.'
    },
    keywords: [
      'whatsapp', 'friend in need', 'hospital emergency', 'profile photo', 'relative money', 'boss impersonation', 'dp',
      'व्हाट्सएप', 'दोस्त', 'रिश्तेदार', 'डीपी', 'अस्पताल', 'व्हॉट्सअ‍ॅप', 'नातेवाईक', 'मित्र'
    ]
  },
  {
    id: 'digital_arrest_scam',
    issue: {
      en: 'Digital Arrest Scam / Fake Police & Court Video Call',
      hi: 'डिजिटल अरेस्ट घोटाला / फर्जी पुलिस और अदालत वीडियो कॉल',
      mr: 'डिजिटल अरेस्ट फसवणूक / बनावट पोलीस आणि न्यायालय व्हिडिओ कॉल'
    },
    warningSigns: {
      en: [
        'Video call on Skype, WhatsApp, or Zoom from individuals in police, CBI, ED, or customs uniforms.',
        'Claims that an illegal parcel containing drugs or fake passports was seized in your Aadhaar name.',
        'Orders to remain isolated in a room ("Digital Arrest") and transfer funds to a "court verification account".'
      ],
      hi: [
        'स्काइप, व्हाट्सएप या जूम पर पुलिस या सीबीआई की वर्दी पहने लोगों का वीडियो कॉल आना।',
        'कहना कि आपके नाम से भेजे गए पार्सल में ड्रग्स या अवैध सामान पकड़ा गया है।',
        'कमरे में बंद रहने का आदेश देना ("डिजिटल अरेस्ट") और जांच के नाम पर पैसे ट्रांसफर करने का दबाव बनाना।'
      ],
      mr: [
        'स्काईप किंवा व्हॉट्सअ‍ॅप व्हिडिओ कॉलवर पोलीस, सीबीआय किंवा न्यायालयाचे अधिकारी भासवून घाबरवणे.',
        'तुमच्या नावाच्या पार्सलमध्ये बेकायदेशीर वस्तू सापडल्याचा खोटा आरोप करणे.',
        'खोलीत बंद राहण्याची सक्ती करणे ("डिजिटल अरेस्ट") आणि तपासणीसाठी पैसे पाठवण्यास सांगणे.'
      ]
    },
    whatToDo: {
      en: [
        'Disconnect the call immediately! There is NO legal concept called "Digital Arrest" under Indian Law.',
        'Police, CBI, Customs, and Courts NEVER conduct arrests, interrogations, or financial settlements over video calls.',
        'Do not transfer a single rupee. Immediately report the incident to helpline 1930 and your local police station.'
      ],
      hi: [
        'कॉल तुरंत काट दें! भारतीय कानून में "डिजिटल अरेस्ट" नाम की कोई प्रक्रिया नहीं है।',
        'पुलिस, सीबीआई या अदालत कभी भी वीडियो कॉल पर पूछताछ या पैसे की मांग नहीं करती।',
        'एक भी रुपया न भेजें। तुरंत राष्ट्रीय हेल्पलाइन 1930 और स्थानीय पुलिस को सूचित करें।'
      ],
      mr: [
        'कॉल तात्काळ बंद करा! भारतीय कायद्यात "डिजिटल अरेस्ट" असा कोणताही कायदेशीर प्रकार नाही.',
        'पोलीस किंवा तपास यंत्रणा कधीही व्हिडिओ कॉलवर चौकशी करत नाहीत किंवा पैसे मागत नाहीत.',
        'एकही रुपया पाठवू नका. तात्काळ 1930 हेल्पलाइनवर आणि जवळच्या पोलीस ठाण्यात तक्रार करा.'
      ]
    },
    spokenSolution: {
      en: 'There is no such thing as Digital Arrest in India. Genuine police never interrogate or demand money on video calls. Hang up and dial 1930 immediately.',
      hi: 'भारत में डिजिटल अरेस्ट जैसी कोई व्यवस्था नहीं है। पुलिस कभी भी वीडियो कॉल पर पैसे नहीं मांगती। कॉल काटें और तुरंत 1930 डायल करें।',
      mr: 'भारतात डिजिटल अरेस्ट असा कोणताही प्रकार नाही. पोलीस कधीही व्हिडिओ कॉलवर चौकशी किंवा पैसे मागत नाहीत. फोन बंद करून 1930 डायल करा.'
    },
    keywords: [
      'digital arrest', 'skype call', 'police uniform', 'cbi', 'narcotics', 'parcel seized', 'mumbai airport', 'customs', 'arrest warrant',
      'डिजिटल अरेस्ट', 'पुलिस', 'सीबीआई', 'अरेस्ट', 'वारंट', 'कूरियर', 'पोलीस', 'डिजिटल अटक', 'गुन्हे शाखा'
    ]
  },
  {
    id: 'identity_theft',
    issue: {
      en: 'Identity Theft / SIM Swap & AePS Biometric Fraud',
      hi: 'पहचान की चोरी / सिम स्वैप और आधार एईपीएस फ्रॉड',
      mr: 'ओळख चोरी / सिम स्वॅप आणि आधार बायोमेट्रिक फसवणूक'
    },
    warningSigns: {
      en: [
        'Your mobile phone suddenly shows "No Service" or stops receiving SMS and calls while in good coverage.',
        'Unauthorized money debits occurring through AePS (Aadhaar Enabled Payment System) without visiting an ATM.',
        'Strangers asking for unmasked photocopies of your Aadhaar or PAN card.'
      ],
      hi: [
        'अच्छे नेटवर्क क्षेत्र में भी आपके फोन पर अचानक "No Service" दिखना और कॉल/SMS बंद हो जाना।',
        'बिना बैंक जाए आधार (AePS) के माध्यम से खाते से अचानक पैसे कटने का अलर्ट आना।',
        'दुकानों या होटलों में बिना क्रॉस किए आधार कार्ड की फोटोकॉपी मांगना।'
      ],
      mr: [
        'मोबाईलचे नेटवर्क अचानक गायब होणे आणि मेसेज किंवा कॉल्स बंद होणे (सिम स्वॅप).',
        'बँकेत न जाता आधारद्वारे (AePS) खात्यातून पैसे परस्पर वजा झाल्याचा मेसेज येणे.',
        'आधार किंवा पॅन कार्डची उघडी झेरॉक्स मागणे.'
      ]
    },
    whatToDo: {
      en: [
        'If mobile network is unexpectedly dead, contact your telecom operator immediately to prevent a fraudulent SIM swap.',
        'Lock your Aadhaar biometric authentication immediately using the official mAadhaar mobile app or uidai.gov.in portal.',
        'Always mask your Aadhaar number and cross paper photocopies with the specific purpose and date.'
      ],
      hi: [
        'सिम का सिग्नल अचानक बंद होने पर तुरंत टेलीकॉम कंपनी से संपर्क करें ताकि सिम स्वैप रोका जा सके।',
        'mAadhaar ऐप या UIDAI पोर्टल पर जाकर अपना आधार बायोमेट्रिक तुरंत लॉक करें।',
        'आधार की फोटोकॉपी देते समय उस पर तारीख और उपयोग का उद्देश्य लिखकर क्रॉस जरूर करें।'
      ],
      mr: [
        'मोबाईल नेटवर्क अचानक बंद झाल्यास सिम स्वॅप रोखण्यासाठी तात्काळ मोबाईल कंपनीशी संपर्क साधा.',
        'mAadhaar ॲपवरून तुमचे आधार बायोमेट्रिक तात्काळ लॉक करा.',
        'आधारची झेरॉक्स देताना त्यावर तारीख आणि वापराचा हेतू लिहून क्रॉस करा.'
      ]
    },
    spokenSolution: {
      en: 'Lock your Aadhaar biometrics using the mAadhaar app. If your SIM network suddenly stops working, contact your telecom provider immediately.',
      hi: 'mAadhaar ऐप से अपना आधार बायोमेट्रिक तुरंत लॉक करें। सिम का सिग्नल अचानक गायब हो तो तुरंत अपनी टेलीकॉम कंपनी से संपर्क करें।',
      mr: 'mAadhaar ॲपवरून आधार बायोमेट्रिक त्वरित लॉक करा. सिमचे नेटवर्क अचानक बंद पडल्यास तात्काळ कंपनीशी संपर्क साधा.'
    },
    keywords: [
      'identity theft', 'sim swap', 'no service', 'aeps', 'biometric fraud', 'aadhaar misuse', 'pan misuse',
      'पहचान चोरी', 'सिम स्वैप', 'बायोमेट्रिक', 'आधार चोरी', 'ओळख चोरी', 'सिम स्वॅप', 'बायोमेट्रिक चोरी'
    ]
  }
];

const defaultSafetyResponse = {
  issue: {
    en: 'Potential Cyber Threat / Safety Advisory',
    hi: 'संभावित सायबर खतरा / सुरक्षा सलाह',
    mr: 'संभाव्य सायबर धोका / सुरक्षा सल्ला'
  },
  warningSigns: {
    en: [
      'Any unsolicited communication asking for confidential information, urgent payments, or app installations.',
      'High pressure to act immediately before verifying with your family or official branch.'
    ],
    hi: [
      'कोई भी अनजान संदेश या फोन जिसमें गोपनीय जानकारी, तत्काल भुगतान या ऐप डाउनलोड करने को कहा जाए।',
      'परिवार या बैंक से पुष्टि किए बिना तुरंत कार्रवाई करने का भारी दबाव।'
    ],
    mr: [
      'कोणताही अनोळखी फोन किंवा मेसेज ज्यामध्ये गोपनीय माहिती, तातडीने पैसे किंवा ॲप इन्स्टॉल करण्यास सांगितले जाते.',
      'कुटुंब किंवा बँकेची खात्री न करता लगेच कृती करण्याचा दबाव आणणे.'
    ]
  },
  whatToDo: {
    en: [
      'Never share OTPs, passwords, PINs, CVVs, or Aadhaar numbers.',
      'Contact your bank or service provider through official verified channels only.',
      'If you have suffered a financial loss, call the National Cybercrime Helpline 1930 immediately.'
    ],
    hi: [
      'कभी भी OTP, पासवर्ड, पिन, CVV या आधार नंबर साझा न करें।',
      'हमेशा केवल आधिकारिक सत्यापित माध्यमों से ही अपने बैंक या सेवा प्रदाता से संपर्क करें।',
      'यदि वित्तीय नुकसान हुआ है, तो तुरंत राष्ट्रीय हेल्पलाइन 1930 पर कॉल करें।'
    ],
    mr: [
      'कधीही OTP, पासवर्ड, PIN, CVV किंवा आधार क्रमांक कोणालाही देऊ नका.',
      'नेहमी अधिकृत क्रमांकावरूनच बँकेशी संपर्क साधा.',
      'आर्थिक फसवणूक झाली असल्यास तात्काळ 1930 हेल्पलाइनवर कॉल करा.'
    ]
  },
  spokenSolution: {
    en: 'Never share sensitive information like OTPs or PINs with anyone. Always verify requests directly through official channels. If money was lost, call 1930 immediately.',
    hi: 'कभी भी किसी के साथ OTP या पासवर्ड साझा न करें। हमेशा आधिकारिक माध्यमों से ही जांच करें। पैसे कटने पर तुरंत 1930 पर कॉल करें।',
    mr: 'कोणासोबतही OTP किंवा PIN शेअर करू नका. नेहमी अधिकृत संपर्कावरूनच खात्री करा. फसवणूक झाल्यास 1930 डायल करा.'
  }
};

if (typeof window !== 'undefined') {
  window.topics = topics;
  window.audiences = audiences;
  window.audienceProfiles = audiences;
  window.videos = videos;
  window.animatedStories = animatedStories;
  window.fraudStories = fraudStories;
  window.quizQuestions = quizQuestions;
  window.glossaryTerms = glossaryTerms;
  window.governmentSchemes = governmentSchemes;
  window.voiceScamRules = voiceScamRules;
  window.defaultSafetyResponse = defaultSafetyResponse;
  window.CyberSathiData = {
    topics,
    audiences,
    audienceProfiles: audiences,
    videos,
    animatedStories,
    fraudStories,
    quizQuestions,
    glossaryTerms,
    governmentSchemes,
    voiceScamRules,
    defaultSafetyResponse
  };
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.CyberSathiData;
}

