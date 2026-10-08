const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

function esc(v) {
  return String(v ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
const escapeHtml = esc;

const safeStorage = {
  get(key, fallback = null) { try { return window.localStorage.getItem(key) ?? fallback; } catch(e) { return fallback; } },
  set(key, value) { try { window.localStorage.setItem(key, value); return true; } catch(e) { return false; } },
  remove(key) { try { window.localStorage.removeItem(key); } catch(e) {} }
};

const topics=[
 ['OTP Fraud','🔐','Never share one-time passwords.','An unexpected caller says they need your OTP to cancel a transaction or receive money.','An OTP request from a stranger is a red flag.','Never share OTPs, passwords or PINs; contact the official service yourself.'],
 ['UPI Fraud','💳','A collect request can take money from you.','A scammer sends a payment request and pressures you to approve it.','Urgency, unknown names and requests to enter a UPI PIN.','To receive money, you generally do not need to enter your UPI PIN.'],
 ['QR Code Scams','▦','Scanning a QR can initiate a payment.','A fake buyer sends a QR code and says it will “receive” money.','They insist you scan and enter your PIN to get paid.','Verify the transaction screen and never enter your PIN to receive money.'],
 ['Phishing','🎣','Fake links imitate trusted websites.','A message asks you to click a link to fix KYC, delivery or account issues.','Misspelled domains, urgency, unexpected attachments.','Open the official app/site yourself instead of using the link.'],
 ['Fake KYC Calls','🪪','Scammers impersonate banks or services.','They claim your account will be blocked unless you update KYC immediately.','Pressure to install an app or share card/OTP details.','Use only official bank channels and never install unknown APKs.'],
 ['Fake Customer Care','🎧','Search results can contain impostor numbers.','A fake support number asks for remote access or payment.','Requests for AnyDesk-like access, OTPs or “verification fees”.','Find support through the company’s official app or website.'],
 ['Fake Job Scams','💼','Fraudsters exploit job seekers.','A recruiter asks for a registration fee or sends a suspicious form.','Guaranteed income, urgency, unofficial email domains.','Verify employer identity and never pay to unlock a job.'],
 ['Online Shopping Fraud','🛍️','Too-good-to-be-true offers can be traps.','A seller asks for payment outside the platform.','Huge discounts, personal UPI requests, no buyer protection.','Use trusted marketplaces and keep transaction records.'],
 ['Investment Scams','📈','Fake apps show fabricated profits.','A “mentor” pushes you to deposit more after showing fake returns.','Guaranteed returns, pressure, withdrawal fees.','Verify regulated providers and never transfer funds to strangers.'],
 ['Loan Scams','🏦','Fake lenders collect fees or data.','A caller promises a quick loan and requests processing fees.','Unverified apps, high-pressure calls, requests for contacts.','Verify the lender independently before sharing documents or paying.'],
 ['WhatsApp Scams','💬','Impersonation can look convincing.','A contact changes number and asks for urgent money.','New number, urgent request, refusal to call normally.','Call the person on a known number before paying.'],
 ['Social Media Hacking','📱','Weak passwords and stolen sessions can expose accounts.','Attackers trick users into giving login codes or clicking malicious links.','Unexpected login alerts or password-reset messages.','Use strong unique passwords and 2FA; review active sessions.'],
 ['Identity Theft','🪪','Personal information can be misused.','A scammer collects enough details to impersonate you.','Unexpected account activity or unfamiliar applications.','Share minimum information and monitor important accounts.'],
 ['Cyberbullying','🫶','Repeated online abuse can cause real harm.','Someone sends threats, humiliating posts or unwanted messages.','Repeated contact, fake profiles, public humiliation.','Block, preserve evidence and tell a trusted person.'],
 ['Deepfake & AI Scams','🤖','AI can make convincing fake audio, images or video.','A caller appears to be a relative or official asking for urgent money.','Unusual urgency or requests that break normal patterns.','Verify through a second channel before acting.'],
 ['SIM-related Fraud','📶','A compromised mobile number can affect account recovery.','A scammer tries to take control of a phone number.','Sudden loss of network or unexpected SIM messages.','Contact your telecom provider and secure account recovery methods.'],
 ['ATM/Card Scams','💳','Card details can be stolen by devices or social engineering.','Someone offers “help” at an ATM or asks for card details.','Unknown helpers, unusual devices, requests for PIN.','Cover your PIN and never hand over your card.'],
 ['Government Scheme Scams','🏛️','Fake scheme messages use government branding.','A scammer promises a benefit after a fee or data submission.','Unofficial links, fees, urgency, requests for credentials.','Verify schemes on official government portals such as myScheme.']
];

const audiences=[['Children','🧒','Cyberbullying • unsafe gaming • fake profiles • stranger danger • privacy'],['Students & Youth','🎓','Fake jobs • phishing • social media scams • investment scams • account security'],['Women','👩','UPI fraud • banking scams • fake schemes • online harassment • shopping fraud'],['Men','👨','Investment scams • UPI fraud • fake customer care • OTP scams • fake loans'],['Senior Citizens','👴','Fake bank calls • OTP fraud • pension scams • fake customer care • investment fraud'],['Parents & Families','👨‍👩‍👧','Children’s online safety • privacy • social media • family scams • safe digital payments'],['Farmers','🌾','Fake agricultural schemes • fake buyers • UPI/payment fraud • fake loans • government scheme scams'],['Small Businesses / Local Shopkeepers','🏪','Fake buyers • QR scams • payment fraud • fake customer care • marketplace scams'],['Village Volunteers / Community Workers','🤝','Scam identification • digital literacy • cyber awareness • reporting guidance • community education']];

const videos = [
  {
    id: "7j0A62x-tdY",
    title: "India 360: OTP से फ्रॉड के मामले बढ़े तेजी से, बैंक सुरक्षा व सावधानियां",
    channel: "Zee News (India 360)",
    category: "OTP Fraud",
    language: "हिन्दी",
    desc: "जानिए OTP फ्रॉड कैसे होता है, ठग बैंक अधिकारी बनकर कैसे गुप्त कोड मांगते हैं और अपने बैंक खाते को सुरक्षित कैसे रखें।"
  },
  {
    id: "9mBMspGhm3E",
    title: "UPI Fraud Awareness AV (Hindi) — सुरक्षित UPI लेनदेन के नियम",
    channel: "NPCI",
    category: "UPI Fraud",
    language: "हिन्दी",
    desc: "NPCI का आधिकारिक हिंदी जागरूकता वीडियो: UPI Collect Request, अनजान पेमेंट लिंक और UPI PIN की सुरक्षा के सुनहरे नियम।"
  },
  {
    id: "0AGUZ1b7AFM",
    title: "RBI Children Awareness — Do not click unknown links (Hindi)",
    channel: "Reserve Bank of India",
    category: "Phishing",
    language: "हिन्दी",
    desc: "भारतीय रिज़र्व बैंक (RBI) का हिंदी संदेश: एसएमएस, ईमेल या गेमिंग में आने वाले अनजान फ़िशिंग लिंक्स (Phishing Links) पर कभी क्लिक न करें।"
  },
  {
    id: "uvBR_Mx7VtQ",
    title: "संदिग्ध KYC कॉल, फर्जी मैसेज और लिंक से बचाव",
    channel: "CyberDost × Delhi Police",
    category: "Fake KYC",
    language: "हिन्दी",
    desc: "खाता ब्लॉक होने या KYC अपडेट करने के नाम पर आने वाले फर्जी SMS/कॉल और APK फाइलों से कैसे बचें एवं Sanchar Saathi Chakshu पर रिपोर्ट कैसे करें।"
  },
  {
    id: "YSrjfGS1_ng",
    title: "RBI Kehta Hai — फर्जी बैंक/कस्टमर केयर कॉल और प्रलोभन से सावधान",
    channel: "Reserve Bank of India",
    category: "Fake Customer Care",
    language: "हिन्दी",
    desc: "गूगल या सोशल मीडिया पर लिखे फर्जी कस्टमर केयर नंबरों और बैंक के नाम पर आने वाले नकली संदेशों से बचने की आधिकारिक RBI चेतावनी।"
  },
  {
    id: "vMCIRYMwF8k",
    title: "फर्जी नौकरी और पार्ट-टाइम जॉब फ्रॉड से सावधान",
    channel: "CyberDost I4C",
    category: "Fake Job Scam",
    language: "हिन्दी",
    desc: "घर बैठे कमाई, पार्ट-टाइम जॉब या टास्क पूरे करने के नाम पर पैसे मांगने वाले साइबर ठगों को कैसे पहचानें और 1930 पर शिकायत कैसे करें।"
  },
  {
    id: "Y9TLtLNO7uw",
    title: "ऑनलाइन शॉपिंग व रिफंड धोखाधड़ी: नेशनल कंज्यूमर हेल्पलाइन गाइड",
    channel: "Department of Consumer Affairs",
    category: "Online Shopping Fraud",
    language: "हिन्दी",
    desc: "ऑनलाइन शॉपिंग, नकली वेबसाइट और रिफंड धोखाधड़ी होने पर उपभोक्ता मामले विभाग (Jago Grahak Jago) की राष्ट्रीय हेल्पलाइन पर शिकायत दर्ज करने की प्रक्रिया।"
  },
  {
    id: "nmaMy8o6Lg8",
    title: "Crypto & Investment Scam या असली निवेश? धोखाधड़ी के संकेत पहचानें",
    channel: "CyberDost I4C",
    category: "Investment Scam",
    language: "हिन्दी",
    desc: "दोगुना मुनाफा, फर्जी ट्रेडिंग ऐप और क्रिप्टो इन्वेस्टमेंट ग्रुप के जाल को कैसे पहचानें — I4C फॉरेंसिक विशेषज्ञ से जानिए।"
  },
  {
    id: "YPwd_Kmp25k",
    title: "WhatsApp और Telegram पर होने वाले साइबर स्कैम से कैसे बचें?",
    channel: "CyberDost I4C",
    category: "WhatsApp Scam",
    language: "हिन्दी",
    desc: "WhatsApp पर अनजान वीडियो कॉल, स्क्रीन-शेयरिंग, APK फाइल और फर्जी ग्रुप स्कैम से बचने के उपाय और Two-Step Verification की जानकारी।"
  },
  {
    id: "yvKhz8Dey20",
    title: "सोशल मीडिया पर फर्जी प्रोफाइल और इमोशनल स्कैम से बचाव",
    channel: "CyberDost I4C Podcast",
    category: "Social Media Scam",
    language: "हिन्दी",
    desc: "इंस्टाग्राम और फेसबुक पर नकली प्रोफाइल (Fake Profiles), मित्र बनकर पैसे मांगने और सोशल मीडिया ब्लैकमेलिंग से सुरक्षित रहने के तरीके।"
  },
  {
    id: "h7ShT2-45hc",
    title: "Frauds Using UPI – QR Codes | QR कोड स्कैन फ्रॉड से सावधान",
    channel: "Reserve Bank of India",
    category: "QR Code Scam",
    language: "हिन्दी",
    desc: "RBI की महत्वपूर्ण चेतावनी: QR कोड केवल पैसे भेजने (Pay) के लिए स्कैन किया जाता है, पैसे प्राप्त करने (Receive) के लिए कभी भी QR कोड स्कैन न करें।"
  },
  {
    id: "siyTZ6DaFeQ",
    title: "RBI Digital Arrest — फर्जी पुलिस पूछताछ और वीडियो कॉल की धमकी से सावधान",
    channel: "Reserve Bank of India",
    category: "Digital Arrest",
    language: "हिन्दी",
    desc: "पुलिस, CBI या जज बनकर वीडियो कॉल पर 'डिजिटल अरेस्ट' (Digital Arrest) की धमकी देने वाले ठगों का सच — कोई भी सरकारी एजेंसी वीडियो कॉल पर गिरफ्तारी नहीं करती।"
  },
  {
    id: "KRHkgPZ9kTE",
    title: "Cyber Alert: पहचान की चोरी (Identity Theft) और Mule Account",
    channel: "DD News",
    category: "Identity Theft",
    language: "हिन्दी",
    desc: "DD News के विशेष कार्यक्रम Cyber Alert में जानिए कैसे आधार/पैन कार्ड और पहचान की चोरी (Identity Theft) से फर्जी बैंक खाते (Mule Accounts) खोले जाते हैं।"
  },
  {
    id: "t-HVMjUZcK4",
    title: "SIM Swap और मोबाइल फ्रॉड से सुरक्षा: Sanchar Saathi गाइड",
    channel: "CyberDost I4C",
    category: "Mobile Fraud",
    language: "हिन्दी",
    desc: "SIM Swap फ्रॉड, मोबाइल चोरी और फर्जी सिम कार्ड से अपने बैंक खातों को कैसे बचाएं और Sanchar Saathi पोर्टल से अपने नाम के सिम कैसे जांचें।"
  },
  {
    id: "C1bWT4hb95E",
    title: "RBI Kehta Hai — फर्जी लोन ऐप्स से बचें, केवल RBI-पंजीकृत संस्था से ऋण लें",
    channel: "Reserve Bank of India",
    category: "Loan App Scam",
    language: "हिन्दी",
    desc: "बिना कागजात तुरंत लोन देने का झांसा देकर फोटो मॉर्फिंग और ब्लैकमेल करने वाले अवैध लोन ऐप्स से बचें — केवल RBI द्वारा पंजीकृत बैंक/NBFC से ही ऋण लें।"
  }
];

const animated=[["👵","दादी का फर्जी बैंक कॉल","OTP Fraud","दादी को बैंक कर्मचारी बनकर फोन आता है और खाते की सुरक्षा के नाम पर OTP मांगता है.","OTP कभी भी किसी कॉल करने वाले को न बताएं."],["📱","UPI Request का जाल","UPI Fraud","रिफंड के नाम पर एक UPI collect request भेजी जाती है और पीड़ित उसे भुगतान समझने की गलती करने वाला होता है.","पैसा पाने के लिए PIN डालने की जरूरत नहीं होती."],["💼","सपनों की नौकरी","Fake Job Scam","कॉलेज छात्र को नौकरी पक्की करने के लिए रजिस्ट्रेशन फीस और दस्तावेज़ भेजने को कहा जाता है.","नौकरी पाने के लिए अनजान व्यक्ति को पैसे न दें."],["📦","मेरा पार्सल कहाँ है?","Phishing","स्थानीय बाजार में दुकानदार को डिलीवरी लिंक मिलता है जिसमें छोटा शुल्क मांगा जाता है.","अनजान SMS या WhatsApp लिंक से भुगतान न करें."],["🎁","आप लॉटरी जीत गए!","Prize Scam","परिवार को अचानक बड़ी इनामी राशि का संदेश मिलता है और टैक्स जमा करने का दबाव बनाया जाता है.","इनाम पाने के लिए पहले पैसे मांगना बड़ा लाल झंडा है."],["💬","WhatsApp Code मत बताना","WhatsApp Scam","एक दोस्त के नाम से संदेश आता है और WhatsApp verification code मांगा जाता है.","Verification code किसी को न दें और पहचान दूसरे माध्यम से जांचें."],["📈","फर्जी Investment App","Investment Scam","एक व्यक्ति को ऐप में लगातार नकली मुनाफा दिखाया जाता है और ज्यादा पैसा जमा करने को कहा जाता है.","गारंटीड मुनाफे और जल्द निवेश के दबाव से सावधान रहें."],["🤖","आवाज़ बिल्कुल बेटे जैसी थी","AI Voice Scam","एक परिवार को बेटे जैसी आवाज़ में तुरंत पैसे भेजने की घबराई हुई कॉल आती है.","परिवार के तय किए हुए दूसरे नंबर या सवाल से पहचान की पुष्टि करें."],["🪪","किसी ने मेरी पहचान इस्तेमाल की","Identity Theft","एक नागरिक को पता चलता है कि उसकी व्यक्तिगत जानकारी का गलत इस्तेमाल हो रहा है.","व्यक्तिगत दस्तावेज़ और जानकारी केवल जरूरी और विश्वसनीय जगह पर दें."],["🔗","खतरनाक लिंक","Phishing","किसान को बैंक पुरस्कार का लिंक मिलता है और वह लगभग उस पर क्लिक कर देता है.","लिंक पर क्लिक करने से पहले भेजने वाले और वेबसाइट को स्वतंत्र रूप से जांचें."],["🏦","आपका KYC आज खत्म होगा!","Fake KYC","एक कॉलर खाता बंद होने का डर दिखाकर तुरंत KYC अपडेट करने को कहता है.","KYC के लिए बैंक के आधिकारिक ऐप, वेबसाइट या शाखा से स्वयं संपर्क करें."],["📞","फर्जी Customer Care","Fake Customer Care","एक ग्राहक को सर्च में मिले नकली हेल्पलाइन नंबर से सहायता मिलती है और remote-access ऐप इंस्टॉल कराने की कोशिश होती है.","कस्टमर केयर नंबर हमेशा आधिकारिक वेबसाइट या ऐप से लें."],["📲","पैसे पाने के लिए QR स्कैन करें","QR Code Scam","स्थानीय दुकान पर ग्राहक को कहा जाता है कि पैसे प्राप्त करने के लिए QR स्कैन करें.","QR स्कैन करके PIN डालना आम तौर पर पैसे भेजने की कार्रवाई हो सकती है."],["🛒","इतना सस्ता सामान!","Online Shopping Fraud","एक नकली दुकान बहुत कम कीमत दिखाकर पहले भुगतान मांगती है.","असामान्य रूप से सस्ता ऑफर, नया डोमेन और केवल अग्रिम भुगतान चेतावनी हैं."],["🌾","सरकारी योजना का नकली लाभ","Government Scheme Scam","गांव में किसी परिवार को सरकारी योजना का लाभ दिलाने के नाम पर शुल्क और निजी जानकारी मांगी जाती है.","योजना की जानकारी केवल आधिकारिक सरकारी पोर्टल या कार्यालय से सत्यापित करें."]];

const fraudStories=[
 {year:'2025',location:'पुणे, महाराष्ट्र',type:'डिजिटल अरेस्ट / प्रतिरूपण',source:'The Indian Express',url:'https://indianexpress.com/article/cities/pune/retired-airline-executive-loses-rs-1-crore-digital-arrest-scam-9844192/',
  en:{title:'Pune: retired airline executive targeted in digital-arrest scam',summary:'A retired airline executive in Pune reported losing ₹1 crore after callers posing as Delhi cyber officials threatened her with money-laundering action.',start:'The scam started with an unexpected call about bank accounts allegedly opened in her name.',worked:'The callers used fake officials, legal threats and video calls to create fear and pressured her to transfer money for “verification”.',warning:['Unexpected legal threats','Pressure to transfer money','Impersonation of officials'],wrong:'She trusted the callers and transferred money during a prolonged pressure campaign.',do:'End the call, verify through an official channel, tell a trusted person and report the fraud immediately.',lesson:'Real officials do not require you to transfer money for a “digital verification”.'},
  hi:{title:'पुणे: सेवानिवृत्त एयरलाइन अधिकारी डिजिटल अरेस्ट ठगी का शिकार',summary:'पुणे की एक सेवानिवृत्त एयरलाइन अधिकारी ने बताया कि दिल्ली साइबर अधिकारी बनकर फोन करने वालों ने मनी लॉन्ड्रिंग के नाम पर डराया और उनसे करीब ₹1 करोड़ की ठगी हुई.',start:'ठगी की शुरुआत एक अचानक फोन से हुई। फोन करने वाले ने कहा कि उनके नाम पर कई बैंक खाते खोले गए हैं.',worked:'ठगों ने खुद को अधिकारी बताया, कानूनी कार्रवाई का डर दिखाया और वीडियो कॉल पर पैसे को “सत्यापन” के लिए ट्रांसफर करने का दबाव बनाया.',warning:['अचानक कानूनी धमकी','पैसे ट्रांसफर करने का दबाव','फर्जी अधिकारी बनकर बात करना'],wrong:'पीड़ित ने ठगों की बात पर भरोसा किया और लगातार दबाव के बीच पैसे ट्रांसफर कर दिए.',do:'कॉल बंद करें, आधिकारिक माध्यम से खुद सत्यापन करें, परिवार के भरोसेमंद व्यक्ति को बताएं और तुरंत शिकायत करें.',lesson:'कोई असली अधिकारी आपको “डिजिटल सत्यापन” के लिए पैसे ट्रांसफर करने को नहीं कहता.'},
  mr:{title:'पुणे: निवृत्त विमानसेवा अधिकारी डिजिटल अरेस्ट फसवणुकीची शिकार',summary:'पुण्यातील एका निवृत्त विमानसेवा अधिकाऱ्याला दिल्लीतील सायबर अधिकारी असल्याचे भासवून घाबरवण्यात आले आणि सुमारे ₹1 कोटींची फसवणूक झाल्याचे त्यांनी सांगितले.',start:'फसवणुकीची सुरुवात अचानक आलेल्या फोनने झाली. त्यांच्या नावावर बँक खाती उघडल्याचे सांगण्यात आले.',worked:'ठगांनी अधिकारी असल्याचे भासवले, कायदेशीर कारवाईची भीती दाखवली आणि “तपासणी”साठी पैसे पाठवण्याचा दबाव आणला.',warning:['अचानक कायदेशीर धमकी','पैसे पाठवण्याचा दबाव','अधिकारी असल्याचे खोटे भासवणे'],wrong:'पीडित व्यक्तीने ठगांवर विश्वास ठेवला आणि दबावाखाली पैसे पाठवले.',do:'फोन बंद करा, अधिकृत माध्यमातून स्वतः पडताळणी करा, विश्वासू व्यक्तीला सांगा आणि त्वरित तक्रार करा.',lesson:'खरा अधिकारी “डिजिटल तपासणी”साठी पैसे ट्रान्सफर करण्यास सांगत नाही.'}},
 {year:'2025',location:'दिल्ली',type:'फिशिंग / फर्जी KYC',source:'The Indian Express',url:'https://indianexpress.com/article/cities/delhi/delhi-man-loses-sbi-kyc-update-call-police-trace-scam-jharkhand-10101323/',
  en:{title:'Delhi: KYC-themed phishing led to ₹10.8 lakh loss',summary:'A Delhi resident reported losing ₹10.8 lakh after a caller posing as a bank representative used a fake KYC link and follow-up calls.',start:'The victim received a call about a supposed credit-card problem and was told to update KYC through a link.',worked:'The fake link and follow-up calls were used to obtain sensitive banking information and enable unauthorised transactions.',warning:['Unsolicited KYC link','Caller posing as bank staff','Urgent account warning'],wrong:'The victim followed the unsolicited KYC process instead of using the bank’s official channel.',do:'Open the official banking app or website yourself. Never share OTPs, PINs or card credentials with callers.',lesson:'For KYC, use only your bank’s official app, website or branch.'},
  hi:{title:'दिल्ली: फर्जी KYC लिंक से ₹10.8 लाख की ठगी',summary:'दिल्ली के एक व्यक्ति ने बताया कि बैंक प्रतिनिधि बनकर आए फोन और फर्जी KYC लिंक के बाद उनके खाते से करीब ₹10.8 लाख की अनधिकृत लेनदेन हुई.',start:'उन्हें क्रेडिट कार्ड से जुड़ी समस्या बताकर KYC अपडेट करने के लिए एक लिंक दिया गया.',worked:'फर्जी लिंक और बाद की कॉल के जरिए बैंकिंग जानकारी हासिल की गई और अनधिकृत लेनदेन हुए.',warning:['बिना मांगा KYC लिंक','बैंक कर्मचारी बनकर कॉल','खाता बंद होने की जल्दी वाली चेतावनी'],wrong:'पीड़ित ने बैंक के आधिकारिक माध्यम के बजाय भेजे गए KYC लिंक पर भरोसा किया.',do:'बैंक का आधिकारिक ऐप या वेबसाइट खुद खोलें। कॉल पर OTP, PIN या कार्ड की जानकारी कभी न दें.',lesson:'KYC हमेशा बैंक के आधिकारिक ऐप, वेबसाइट या शाखा से ही करें.'},
  mr:{title:'दिल्ली: बनावट KYC लिंकमुळे ₹10.8 लाखांची फसवणूक',summary:'दिल्लीतील एका व्यक्तीने बँक प्रतिनिधी असल्याचे सांगणाऱ्या कॉलनंतर बनावट KYC लिंक वापरल्याने सुमारे ₹10.8 लाखांची अनधिकृत रक्कम वळती झाल्याचे सांगितले.',start:'क्रेडिट कार्डची समस्या असल्याचे सांगून KYC अपडेट करण्यासाठी लिंक पाठवली गेली.',worked:'बनावट लिंक आणि पुढील फोनद्वारे बँकिंग माहिती मिळवून अनधिकृत व्यवहार करण्यात आले.',warning:['अनाहूत KYC लिंक','बँक कर्मचारी असल्याचे सांगणे','खाते बंद होण्याची घाई'],wrong:'पीडिताने अधिकृत बँक माध्यमाऐवजी पाठवलेल्या लिंकवर विश्वास ठेवला.',do:'अधिकृत बँक अॅप किंवा वेबसाइट स्वतः उघडा. फोनवर OTP, PIN किंवा कार्ड माहिती देऊ नका.',lesson:'KYC फक्त बँकेच्या अधिकृत अॅप, वेबसाइट किंवा शाखेतून करा.'}},
 {year:'2025',location:'मुंबई, महाराष्ट्र',type:'WhatsApp प्रतिरूपण / व्यावसायिक फसवणूक',source:'Times of India',url:'https://timesofindia.indiatimes.com/city/mumbai/faking-top-execs-whatsapp-dp-fraud-dupes-co-of-4-4cr/articleshow/118223331.cms',
  en:{title:'Mumbai: WhatsApp impersonation used to request ₹4.4 crore',summary:'A fraudster reportedly impersonated a company executive on WhatsApp and persuaded another company official to transfer ₹4.4 crore.',start:'The scam began with a WhatsApp message that appeared to come from a familiar senior executive.',worked:'The impersonator used a familiar profile and urgent business instructions to persuade the recipient to make multiple transfers.',warning:['Familiar-looking WhatsApp profile','Urgent high-value transfer','No second-channel verification'],wrong:'The payment instruction was not independently confirmed before the transfer.',do:'For large payments, verify the request using a known phone number and a second trusted channel.',lesson:'A familiar profile picture is not proof of identity.'},
  hi:{title:'मुंबई: WhatsApp पर अधिकारी बनकर ₹4.4 करोड़ ट्रांसफर करवाए',summary:'एक ठग ने WhatsApp पर कंपनी के अधिकारी की पहचान का इस्तेमाल किया और दूसरे अधिकारी से करीब ₹4.4 करोड़ ट्रांसफर करवाए.',start:'ठगी की शुरुआत ऐसे WhatsApp संदेश से हुई जो किसी परिचित वरिष्ठ अधिकारी का लगा.',worked:'ठग ने परिचित प्रोफाइल और तुरंत भुगतान करने वाले व्यावसायिक निर्देशों का इस्तेमाल किया.',warning:['परिचित दिखने वाली WhatsApp प्रोफाइल','बड़ी रकम तुरंत भेजने का दबाव','दूसरे माध्यम से पहचान की पुष्टि न करना'],wrong:'भुगतान से पहले निर्देश की स्वतंत्र रूप से पुष्टि नहीं की गई.',do:'बड़ी रकम भेजने से पहले पहले से ज्ञात फोन नंबर और दूसरे भरोसेमंद माध्यम से पुष्टि करें.',lesson:'सिर्फ प्रोफाइल फोटो देखकर पहचान पर भरोसा न करें.'},
  mr:{title:'मुंबई: WhatsApp वर अधिकाऱ्याची बनावट ओळख वापरून ₹4.4 कोटींची फसवणूक',summary:'एका ठगाने WhatsApp वर कंपनीच्या अधिकाऱ्याची ओळख वापरून दुसऱ्या अधिकाऱ्याकडून सुमारे ₹4.4 कोटी ट्रान्सफर करवून घेतले.',start:'परिचित वरिष्ठ अधिकाऱ्याकडून संदेश आल्यासारखा भासवून फसवणूक सुरू झाली.',worked:'ठगाने परिचित प्रोफाइल आणि तातडीच्या व्यावसायिक सूचनांचा वापर केला.',warning:['परिचित दिसणारी WhatsApp प्रोफाइल','मोठी रक्कम तातडीने पाठवण्याचा दबाव','दुसऱ्या माध्यमातून पडताळणी न करणे'],wrong:'पैसे पाठवण्यापूर्वी सूचनेची स्वतंत्रपणे पडताळणी झाली नाही.',do:'मोठी रक्कम पाठवण्यापूर्वी आधीपासून माहित असलेल्या फोन नंबरवर आणि दुसऱ्या विश्वासू माध्यमातून खात्री करा.',lesson:'फक्त प्रोफाइल फोटो म्हणजे ओळखीचा पुरावा नाही.'}},
 {year:'2025',location:'पुणे, महाराष्ट्र',type:'डिजिटल अरेस्ट',source:'The Indian Express',url:'https://indianexpress.com/article/cities/pune/digital-arrest-fraud-retired-judge-rs-1-crore-10114542/',
  en:{title:'Pune: retired judge lost over ₹1 crore in digital-arrest fraud',summary:'A retired judge from Pune reported losing over ₹1 crore after a fraudster posed as an IPS officer and threatened arrest under a serious law.',start:'The victim received a call from someone claiming to be an IPS officer and linking him to a money-laundering case.',worked:'A fake warrant, video calls, questions about finances and repeated demands for transfers were used to create pressure.',warning:['Fake legal documents','Video-call interrogation','Requests to transfer money for verification'],wrong:'The victim was kept under prolonged pressure and made repeated transfers.',do:'Stop the communication, verify the alleged case through official police channels, involve family and report promptly.',lesson:'Police and courts do not conduct “digital arrests” that require money transfers.'},
  hi:{title:'पुणे: सेवानिवृत्त न्यायाधीश से डिजिटल अरेस्ट के नाम पर ₹1 करोड़ से अधिक की ठगी',summary:'पुणे के एक सेवानिवृत्त न्यायाधीश से IPS अधिकारी बनकर बात करने वाले ठग ने गंभीर मामले में गिरफ्तारी का डर दिखाया और ₹1 करोड़ से अधिक की ठगी की.',start:'फोन करने वाले ने खुद को IPS अधिकारी बताया और मनी लॉन्ड्रिंग मामले से जोड़ने की बात कही.',worked:'फर्जी वारंट, वीडियो कॉल, आर्थिक जानकारी पूछना और बार-बार पैसे ट्रांसफर करने का दबाव बनाया गया.',warning:['फर्जी कानूनी दस्तावेज','वीडियो कॉल पर पूछताछ','सत्यापन के नाम पर पैसे मांगना'],wrong:'लंबे समय तक दबाव में रखकर कई बार पैसे ट्रांसफर करवाए गए.',do:'बातचीत रोकें, पुलिस के आधिकारिक माध्यम से मामले की पुष्टि करें, परिवार को बताएं और तुरंत शिकायत करें.',lesson:'पुलिस या अदालत “डिजिटल अरेस्ट” करके पैसे ट्रांसफर करने को नहीं कहती.'},
  mr:{title:'पुणे: निवृत्त न्यायाधीशाची डिजिटल अरेस्टच्या नावाखाली ₹1 कोटींपेक्षा जास्त फसवणूक',summary:'पुण्यातील निवृत्त न्यायाधीशाला IPS अधिकारी असल्याचे भासवून गंभीर गुन्ह्यात अटक होईल अशी भीती दाखवून ₹1 कोटींपेक्षा जास्त फसवणूक करण्यात आली.',start:'फोन करणाऱ्याने स्वतःला IPS अधिकारी सांगून मनी लॉन्डरिंग प्रकरणाशी जोडले.',worked:'बनावट वॉरंट, व्हिडिओ कॉल, आर्थिक माहिती आणि वारंवार पैसे पाठवण्याचा दबाव वापरला.',warning:['बनावट कायदेशीर कागदपत्रे','व्हिडिओ कॉलवर चौकशी','तपासणीच्या नावाखाली पैसे मागणे'],wrong:'पीडिताला दीर्घकाळ दबावाखाली ठेवून अनेक व्यवहार करवून घेतले.',do:'संवाद थांबवा, अधिकृत पोलिस माध्यमातून पडताळणी करा, कुटुंबाला सांगा आणि त्वरित तक्रार करा.',lesson:'पोलीस किंवा न्यायालय “डिजिटल अरेस्ट” करून पैसे ट्रान्सफर करण्यास सांगत नाही.'}},
 {year:'2025',location:'मुंबई',type:'फर्जी e-challan / मैलवेयर लिंक',source:'The Indian Express',url:'https://indianexpress.com/article/cities/mumbai/mumbai-police-e-challan-scam-cyber-fraudsters-dupe-victims-10210144/',
  en:{title:'Mumbai: fake e-challan messages used malicious links',summary:'Two Mumbai police personnel were reported to have lost money after clicking traffic e-challan links sent through WhatsApp; police said the links contained malware.',start:'The victims received WhatsApp messages appearing to be traffic e-challans.',worked:'The malicious link could compromise the device and expose banking information, enabling fraud.',warning:['Unexpected e-challan link','WhatsApp attachment or APK','Pressure to pay immediately'],wrong:'The link was opened without independently checking the official traffic authority channel.',do:'Do not install apps or open APK links from unsolicited messages. Verify challans through official government services.',lesson:'A traffic fine message should be checked through the official portal, not a random link.'},
  hi:{title:'मुंबई: फर्जी e-challan संदेशों से मैलवेयर वाली लिंक भेजी गई',summary:'मुंबई में दो पुलिसकर्मियों के साथ WhatsApp पर भेजे गए ट्रैफिक e-challan लिंक के जरिए ठगी की रिपोर्ट हुई। पुलिस ने बताया कि लिंक में मैलवेयर था.',start:'पीड़ितों को WhatsApp पर ट्रैफिक e-challan जैसा संदेश मिला.',worked:'लिंक डिवाइस को नुकसान पहुंचा सकता था और बैंकिंग जानकारी तक पहुंच बना सकता था.',warning:['अचानक आया e-challan लिंक','WhatsApp से APK या ऐप','तुरंत भुगतान का दबाव'],wrong:'आधिकारिक ट्रैफिक सेवा से जांच किए बिना लिंक खोल दिया गया.',do:'अनजान संदेशों से ऐप या APK इंस्टॉल न करें। चालान की जांच आधिकारिक सरकारी सेवा से करें.',lesson:'ट्रैफिक चालान की पुष्टि आधिकारिक पोर्टल से करें, किसी अनजान लिंक से नहीं.'},
  mr:{title:'मुंबई: बनावट e-challan संदेशांमधून मालवेअर लिंकचा वापर',summary:'मुंबईतील दोन पोलिस कर्मचाऱ्यांची WhatsApp वर आलेल्या ट्रॅफिक e-challan लिंकद्वारे फसवणूक झाल्याची नोंद झाली. पोलिसांनी लिंकमध्ये मालवेअर असल्याचे सांगितले.',start:'WhatsApp वर ट्रॅफिक e-challan सारखा संदेश आला.',worked:'लिंकने डिव्हाइस धोक्यात आणून बँकिंग माहितीपर्यंत पोहोच मिळवण्याचा प्रयत्न केला.',warning:['अनपेक्षित e-challan लिंक','WhatsApp वरील APK किंवा अॅप','त्वरित पैसे देण्याचा दबाव'],wrong:'अधिकृत ट्रॅफिक सेवेत तपासणी न करता लिंक उघडली.',do:'अनाहूत संदेशातून अॅप किंवा APK इंस्टॉल करू नका. चालान अधिकृत सरकारी सेवेत तपासा.',lesson:'ट्रॅफिक चालानाची खात्री अधिकृत पोर्टलवरून करा, अनोळखी लिंकवरून नाही.'}}
];

const videoCategories = [
  'OTP Fraud',
  'UPI Fraud',
  'Phishing',
  'Fake KYC',
  'Fake Customer Care',
  'Fake Job Scam',
  'Online Shopping Fraud',
  'Investment Scam',
  'WhatsApp Scam',
  'Social Media Scam',
  'QR Code Scam',
  'Digital Arrest',
  'Identity Theft',
  'Mobile Fraud',
  'Loan App Scam'
];

const schemes = [
  ['myScheme','National platform for discovery of Central and State/UT government schemes.','https://www.myscheme.gov.in/'],
  ['Digital India','Explore official digital-service information through government portals.','https://www.digitalindia.gov.in/'],
  ['CERT-In','Government cybersecurity awareness and advisory resources.','https://www.cert-in.org.in/']
];

const glossary = [
  ['OTP','One-Time Password','A temporary code used to verify a transaction or login.','Never share an OTP with a caller.'],
  ['Phishing','Fraudulent attempt to obtain information','Fake messages or websites designed to look trustworthy.','Check the domain and open services directly.'],
  ['Firewall','Network security control','Filters network traffic based on rules.','Keep security software and devices updated.'],
  ['Malware','Malicious software','Software designed to disrupt, spy, steal or damage.','Avoid unknown downloads and attachments.'],
  ['VPN','Virtual Private Network','Creates an encrypted connection between your device and a VPN server.','Use reputable services and do not treat VPNs as complete security.'],
  ['Encryption','Data protection through encoding','Transforms readable data into a protected form.','Prefer services that use strong encryption.'],
  ['Identity Theft','Misuse of personal information','Someone uses your details to impersonate you.','Share the minimum information needed.'],
  ['UPI','Unified Payments Interface','A digital payment system used for bank-to-bank transactions in India.','Never enter your UPI PIN to receive money.'],
  ['Ransomware','Malware that demands payment','Encrypts or blocks access to data and demands money.','Keep backups and avoid unknown attachments.'],
  ['Deepfake','AI-generated or manipulated media','Synthetic audio, video or images that may look real.','Verify unusual requests through another channel.'],
  ['SIM Swap','Unauthorised transfer of a phone number','A scammer attempts to move your number to another SIM.','Act quickly if your phone unexpectedly loses service.'],
  ['2FA','Two-Factor Authentication','Uses an additional verification factor beyond a password.','Enable it on important accounts.']
];

const quiz = [
  ['Someone asks for your OTP. What should you do?',['Share it if they say they are from the bank','Never share it and verify through an official channel','Post it in the chat for help','Read it aloud only'],1,'Banks and legitimate services should not require you to disclose your OTP to a stranger.'],
  ['You receive a UPI collect request you did not expect.',['Approve it immediately','Enter your PIN to see who sent it','Reject it and verify independently','Forward it to friends'],2,'A collect request can be a request for you to pay.'],
  ['A message says your KYC will expire in 10 minutes.',['Click the link','Call the number in the message','Open the official bank app/site yourself','Share your card details'],2,'Urgency is a common phishing tactic.'],
  ['A recruiter asks for a registration fee before an interview.',['Pay quickly','Ask for their UPI PIN','Treat it as a warning sign and verify the employer','Send your OTP'],2,'Legitimate recruitment should be independently verified; fees are a major red flag.'],
  ['A stranger sends a QR code to “receive” money.',['Scan and enter your UPI PIN','Do nothing and verify the transaction context','Send your card number','Share an OTP'],1,'Receiving money does not normally require you to enter your UPI PIN into a payment flow.'],
  ['Your WhatsApp contact changes number and asks for urgent money.',['Pay immediately','Call the person on their known number','Send an OTP','Share your screen'],1,'Verify identity through a separate trusted channel.'],
  ['You lose money to online fraud. What should you do first?',['Delete all evidence','Contact your bank/payment provider and report promptly','Keep chatting with the scammer','Post your PIN online'],1,'Quick reporting can help your bank/payment provider and official authorities respond.'],
  ['What is phishing?',['A network cable','A fake attempt to steal information','A type of printer','A password manager'],1,'Phishing uses deceptive messages or sites to obtain information.'],
  ['Which is a safer password practice?',['Reuse one password everywhere','Use unique strong passwords and 2FA','Write passwords on public posts','Share passwords with callers'],1,'Unique passwords reduce the impact of a single account compromise.'],
  ['Where should you report cyber financial fraud in India?',['Only CyberSathi','The official cybercrime portal and 1930 for immediate financial-fraud reporting','A random social-media account','The scammer’s number'],1,'CyberSathi is educational; official reporting should use government channels.']
];


// 1. Audience Rendering
function renderAudiences() {
  const grid = $('#audienceGrid');
  if (!grid || typeof audiences === 'undefined') return;
  grid.innerHTML = audiences.map(a => `
    <article class="audience-card">
      <span class="audience-icon">${a[1]}</span>
      <h3>${esc(a[0])}</h3>
      <p>${esc(a[2])}</p>
    </article>
  `).join('');
}

// 2. Topics Rendering & Modal
function renderTopics(filter = '') {
  const grid = $('#topicGrid');
  if (!grid || typeof topics === 'undefined') return;
  const f = (filter || '').toLowerCase();
  const list = topics.filter(t => t[0].toLowerCase().includes(f) || t[3].toLowerCase().includes(f) || t[2].toLowerCase().includes(f));
  grid.innerHTML = list.map(t => {
    const idx = topics.indexOf(t);
    return `<button class="topic-card" data-topic="${idx}"><span class="icon">${t[1]}</span><strong>${esc(t[0])}</strong></button>`;
  }).join('') || '<p class="muted">No topic found. Try OTP, UPI, phishing, jobs, WhatsApp or QR.</p>';
  $$('.topic-card').forEach(b => b.onclick = () => openTopic(+b.dataset.topic));
}

function openTopic(i) {
  const t = topics[i];
  if (!t) return;
  openModal(`
    <span class="story-tag">Cyber Safety Topic</span>
    <h2 id="modalTitle">${esc(t[0])}</h2>
    <p><strong>What is it?</strong><br>${esc(t[2])}</p>
    <p><strong>How does the scam happen?</strong><br>${esc(t[3])}</p>
    <p><strong>Warning signs</strong><br>${esc(t[4])}</p>
    <p><strong>What not to do</strong><br>Do not share passwords, OTPs, UPI PINs, CVVs or other sensitive credentials.</p>
    <p><strong>What to do</strong><br>${esc(t[5])}</p>
    <p><strong>Rural / family example</strong><br>A family member receives an urgent message while busy with work, trusts the familiar-looking branding and acts before checking the sender.</p>
    <p><strong>Safe practices</strong><br>Pause, verify independently, use official apps/websites and involve a trusted person for high-pressure requests.</p>
    <p><strong>Reporting guidance</strong><br>For actual cybercrime complaints in India, use the official government portal (cybercrime.gov.in) and, for financial cyber fraud, call 1930.</p>
  `);
}

// 3. Videos Rendering & Modal (Official YouTube Iframe Embeds)
function renderVideoFilters(active = 'All') {
  const box = $('#videoFilters');
  if (!box || typeof videoCategories === 'undefined') return;
  box.innerHTML = ['All', ...videoCategories].map(c => `
    <button class="video-filter ${c === active ? 'active' : ''}" data-video-cat="${c}">${c}</button>
  `).join('');
  $$('.video-filter').forEach(b => b.onclick = () => {
    renderVideoFilters(b.dataset.videoCat);
    renderVideos(b.dataset.videoCat);
  });
}

function openVideo(video) {
  if (!video) return;
  const vidId = video.id;
  const title = esc(video.title || 'Cyber Safety Video');
  const channel = esc(video.channel || 'Official Source');
  const category = esc(video.category || 'Awareness');
  const lang = esc(video.language || 'हिन्दी');
  const desc = esc(video.desc || video.description || '');

  openModal(`
    <div class="video-modal">
      <span class="kicker">🎭 OFFICIAL HINDI CYBER AWARENESS VIDEO</span>
      <h2 id="modalTitle" style="font-family:Manrope,sans-serif;margin:12px 0 6px;">${title}</h2>
      <p class="story-meta" style="color:var(--muted);font-size:13px;margin-bottom:14px;">
        <strong>🏛️ ${channel}</strong> • 🏷️ ${category} • 🇮🇳 ${lang}
      </p>
      <div class="video-modal-player" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:18px;margin:14px 0 18px;background:#000;box-shadow:var(--shadow);">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
          src="https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0&playsinline=1" 
          title="${title}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <p style="font-size:15px;line-height:1.6;color:var(--ink);">${desc}</p>
      <div style="margin-top:14px;padding:12px 16px;background:rgba(220,38,38,0.08);border-left:4px solid #dc2626;border-radius:8px;font-size:13px;color:var(--ink);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <span>🚨 <strong>Golden Hour Cyber Helpline:</strong> Dial <strong>1930</strong> immediately for financial cyber fraud.</span>
        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" style="color:#dc2626;font-weight:700;text-decoration:underline;">cybercrime.gov.in ↗</a>
      </div>
      <div style="margin-top:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <span style="font-size:12px;background:#e8f6f2;color:var(--green);font-weight:700;padding:6px 14px;border-radius:999px;">
          ✓ Playing Directly on CyberSathi
        </span>
        <a href="https://www.youtube.com/watch?v=${vidId}" target="_blank" rel="noopener noreferrer" style="font-size:12px;color:var(--muted);text-decoration:underline;">
          Optional: Open External YouTube ↗
        </a>
      </div>
    </div>
  `);
}

function playVideoInlineDirect(vidId) {
  const mount = document.getElementById(`standalone-player-${vidId}`);
  if (!mount) return;
  mount.innerHTML = `
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
      src="https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0&playsinline=1" 
      title="Cyber Awareness Video" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;
  mount.style.cursor = 'default';
  const card = document.getElementById(`standalone-card-${vidId}`);
  if (card) {
    const btn = card.querySelector('.video-play-direct-btn');
    if (btn) {
      btn.textContent = '🎬 Playing on Website';
      btn.style.background = 'var(--green)';
      btn.style.borderColor = 'var(--green)';
    }
  }
}

function renderVideos(filter = 'All') {
  const grid = $('#videoGrid');
  if (!grid || typeof videos === 'undefined') return;
  const list = (!filter || filter === 'All') 
    ? videos 
    : videos.filter(v => v.category === filter || (v.category && v.category.includes(filter)) || (filter === 'Mobile Fraud' && v.category.includes('Mobile')) || (filter === 'Loan App Scam' && v.category.includes('Loan')));
  if (!list.length) {
    grid.innerHTML = '<div class="empty-video-state" style="padding:24px;border:1px dashed var(--line);border-radius:18px;color:var(--muted);text-align:center;">No verified video is currently curated for this category. CyberSathi will only add a video after its public YouTube source has been checked.</div>';
    return;
  }
  grid.innerHTML = list.map(v => {
    const idx = videos.indexOf(v);
    const title = esc(v.title);
    const channel = esc(v.channel);
    const cat = esc(v.category);
    const lang = esc(v.language || 'हिन्दी');
    const desc = esc(v.desc || v.description || '');
    return `
      <article class="video-card-enhanced" id="standalone-card-${v.id}" style="background:var(--white);border:1px solid var(--line);border-radius:24px;overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column;">
        <div class="video-thumb-enhanced" id="standalone-player-${v.id}" data-video-id="${v.id}" data-video-index="${idx}" aria-label="Play ${title} directly on website" style="display:block;width:100%;border:0;padding:0;background:#0b566b;cursor:pointer;position:relative;aspect-ratio:16/9;overflow:hidden;">
          <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.src='https://img.youtube.com/vi/${v.id}/0.jpg'">
          <span class="play-overlay-enhanced" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:rgba(200,35,51,0.92);color:#fff;font-size:24px;box-shadow:0 8px 25px rgba(0,0,0,0.3);">▶</span>
          <span class="youtube-badge-enhanced" style="position:absolute;left:12px;top:12px;background:#c82333;color:white;padding:5px 9px;border-radius:999px;font-size:11px;font-weight:800;">YouTube</span>
        </div>
        <div class="video-body-enhanced" style="padding:20px;flex:1;display:flex;flex-direction:column;">
          <div class="category-row" style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="category-chip" style="display:inline-flex;padding:4px 9px;border-radius:999px;background:#e8f6f2;color:var(--green);font-size:11px;font-weight:700;">${cat}</span>
            <span class="category-chip lang-chip" style="display:inline-flex;padding:4px 9px;border-radius:999px;background:#eef6fb;color:var(--deep);font-size:11px;font-weight:700;">🇮🇳 ${lang}</span>
          </div>
          <h3 style="font-family:Manrope,sans-serif;margin:8px 0 6px;line-height:1.25;font-size:17px;">${title}</h3>
          <p class="video-caption-enhanced" style="font-size:13px;color:var(--muted);margin:4px 0 8px;"><strong>${channel}</strong></p>
          <p style="font-size:14px;color:var(--ink);line-height:1.45;margin-bottom:14px;flex:1;">${desc}</p>
          <div style="display:flex;gap:8px;align-items:center;margin-top:auto;">
            <button class="btn btn-primary video-play-direct-btn" data-video-id="${v.id}" data-video-index="${idx}" style="flex:1;">▶ Play on Website</button>
            <button class="btn btn-outline video-modal-btn" data-video-index="${idx}" title="Enlarge Video Player" style="padding:8px 12px;font-size:13px;color:var(--deep);border-color:var(--line);">⛶</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  $$('.video-thumb-enhanced, .video-play-direct-btn').forEach(b => {
    b.onclick = (e) => {
      e.preventDefault();
      const vidId = b.dataset.videoId;
      if (vidId) {
        playVideoInlineDirect(vidId);
      }
    };
  });

  $$('.video-modal-btn').forEach(b => {
    b.onclick = (e) => {
      e.preventDefault();
      const idx = +b.dataset.videoIndex;
      if (videos[idx]) openVideo(videos[idx]);
    };
  });
}

// 4. Animated Stories Rendering & Player
function renderAnimated() {
  const grid = $('#animatedGrid');
  if (!grid || typeof animated === 'undefined') return;
  grid.innerHTML = animated.map((s, i) => {
    const isArr = Array.isArray(s);
    const icon = isArr ? s[0] : (s.title ? s.title.slice(0, 2) : '🎬');
    const title = esc(isArr ? s[1] : s.title);
    const cat = esc(isArr ? s[2] : s.category);
    const desc = esc(isArr ? s[3] : s.desc);
    const lesson = esc(isArr ? s[4] : (s.flow ? s.flow[s.flow.length - 1].replace('CYBERSATHI SAFETY LESSON: ', '') : ''));
    return `
      <article class="animated-card" style="background:var(--white);border:1px solid var(--line);border-radius:24px;overflow:hidden;box-shadow:var(--shadow);">
        <div class="animation-thumb" style="height:190px;display:flex;align-items:center;justify-content:center;position:relative;background:linear-gradient(135deg,#dff5ee,#d9f1fb);">
          <span class="animation-scene" style="font-size:70px;">${icon}</span>
          <span class="animation-bubble" style="position:absolute;right:15px;top:15px;background:rgba(255,255,255,0.9);border-radius:16px;padding:6px 10px;font-size:11px;font-weight:800;color:var(--deep);">30–90 sec • 2D educational</span>
        </div>
        <div class="animated-body" style="padding:20px;">
          <div class="category-row" style="display:flex;gap:7px;margin-bottom:8px;">
            <span class="category-chip" style="padding:4px 9px;border-radius:999px;background:#e8f6f2;color:var(--green);font-size:11px;font-weight:700;">${cat}</span>
          </div>
          <h3 style="font-family:Manrope,sans-serif;margin:8px 0 6px;line-height:1.25;font-size:18px;">${title}</h3>
          <p style="font-size:14px;color:var(--muted);">${desc}</p>
          <div class="story-actions" style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
            <button class="btn btn-primary animated-open" data-story="${i}">▶ Play Story</button>
            <button class="btn btn-outline animated-listen" style="color:var(--deep);border-color:var(--line)" data-story="${i}">🔊 Listen</button>
          </div>
          ${lesson ? `<div class="safety-lesson-box" style="margin-top:14px;padding:12px;background:#e8f6f2;border-radius:14px;font-size:13px;"><strong>🛡️ सीख:</strong> ${lesson}</div>` : ''}
        </div>
      </article>
    `;
  }).join('');

  $$('.animated-open').forEach(b => b.onclick = () => openAnimated(+b.dataset.story));
  $$('.animated-listen').forEach(b => b.onclick = () => speakAnimated(+b.dataset.story));
}

function openAnimated(i) {
  const s = animated[i];
  if (!s) return;
  const isArr = Array.isArray(s);
  const icon = isArr ? s[0] : (s.title ? s.title.slice(0, 2) : '🎬');
  const title = esc(isArr ? s[1] : s.title);
  const cat = esc(isArr ? s[2] : s.category);
  const desc = esc(isArr ? s[3] : s.desc);
  const lesson = esc(isArr ? s[4] : (s.flow ? s.flow[s.flow.length - 1].replace('CYBERSATHI SAFETY LESSON: ', '') : ''));
  openModal(`
    <div class="story-viewer">
      <span class="kicker">🎬 ORIGINAL CYBERSATHI EDUCATIONAL STORY</span>
      <h2 id="modalTitle">${icon} ${title}</h2>
      <p><strong>Scam category:</strong> ${cat}</p>
      <div style="padding:16px;background:var(--cream);border-radius:14px;margin:14px 0;">
        <p style="font-size:16px;line-height:1.6;">${desc}</p>
      </div>
      <div class="safety-lesson-box" style="padding:14px;background:#e8f6f2;border-radius:14px;margin:14px 0;">
        <strong>🛡️ CyberSathi Safety Lesson:</strong>
        <p style="margin:6px 0 0;">${lesson}</p>
      </div>
      <div class="tts-controls" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;">
        <button class="btn btn-primary" id="animPlayBtn">▶ Play Audio</button>
        <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" onclick="speechSynthesis.pause()">⏸ Pause</button>
        <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" onclick="speechSynthesis.cancel()">⏹ Stop</button>
      </div>
    </div>
  `);
  const playBtn = $('#animPlayBtn');
  if (playBtn) playBtn.onclick = () => speakAnimated(i);
}

function speakAnimated(i) {
  const s = animated[i];
  if (!s) return;
  const isArr = Array.isArray(s);
  const title = isArr ? s[1] : s.title;
  const desc = isArr ? s[3] : s.desc;
  const lesson = isArr ? s[4] : (s.flow ? s.flow[s.flow.length - 1] : '');
  speechSynthesis.cancel();
  const text = [title, desc, 'सुरक्षा सीख: ' + lesson].join('। ');
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'hi-IN';
  u.rate = 0.88;
  speechSynthesis.speak(u);
}

// 5. Fraud Cases Rendering & Details
let selectedFraud = 0, selectedFraudLang = 'hi';

function renderFraud() {
  const grid = $('#fraudGrid');
  if (!grid || typeof fraudStories === 'undefined') return;
  grid.innerHTML = fraudStories.map((s, i) => {
    const d = s.hi || s.en;
    return `
      <article class="story-card fraud-card">
        <div class="fraud-label">🎧 REAL FRAUD CASE</div>
        <div class="story-body">
          <span class="story-tag">${esc(s.type)} • ${s.year}</span>
          <h3>${esc(d.title)}</h3>
          <p class="story-meta">📍 ${esc(s.location)}</p>
          <p>${esc(d.summary)}</p>
          <div class="warning-list">
            <strong>⚠️ चेतावनी संकेत</strong>
            <ul>${d.warning.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
          </div>
          <div class="lesson-line" style="margin:12px 0;">
            <strong>🛡️ सीख:</strong> ${esc(d.lesson)}
          </div>
          <div class="story-actions">
            <button class="btn btn-primary fraud-open" data-fraud="${i}">📖 Read Full Case</button>
            <button class="btn btn-outline fraud-listen" data-fraud="${i}" style="color:var(--deep);border-color:var(--line)">🔊 Listen to Story</button>
          </div>
          <small class="real-note" style="display:block;margin-top:10px;color:var(--muted);">यह जागरूकता कहानी एक वास्तविक रिपोर्ट किए गए मामले पर आधारित है।</small>
        </div>
      </article>
    `;
  }).join('');

  $$('.fraud-open').forEach(b => b.onclick = () => openFraud(+b.dataset.fraud));
  $$('.fraud-listen').forEach(b => b.onclick = () => {
    selectedFraud = +b.dataset.fraud;
    selectedFraudLang = 'hi';
    speakFraud();
  });
}

function openFraud(i, lang = 'hi') {
  selectedFraud = i;
  selectedFraudLang = lang;
  const s = fraudStories[i];
  if (!s) return;
  const d = s[lang] || s.en;

  openModal(`
    <h2 id="modalTitle">📖 ${esc(d.title)}</h2>
    <p><span class="story-tag">${esc(s.type)}</span> • 📍 ${esc(s.location)} • 📅 ${s.year}</p>
    <div class="language-switch" style="display:flex;gap:8px;margin:12px 0;">
      <button class="${lang==='en'?'active':''}" data-lang="en">English</button>
      <button class="${lang==='hi'?'active':''}" data-lang="hi">हिन्दी</button>
      <button class="${lang==='mr'?'active':''}" data-lang="mr">मराठी</button>
    </div>
    <div id="fraudDetail">
      <h3>क्या हुआ?</h3>
      <p>${esc(d.summary)}</p>
      <h3>ठगी की शुरुआत कैसे हुई?</h3>
      <p>${esc(d.start)}</p>
      <h3>ठगी कैसे हुई?</h3>
      <p>${esc(d.worked)}</p>
      <h3>⚠️ चेतावनी संकेत</h3>
      <ul>${d.warning.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <h3>❌ क्या गलत हुआ?</h3>
      <p>${esc(d.wrong)}</p>
      <h3>✅ क्या करना चाहिए?</h3>
      <p>${esc(d.do)}</p>
      <div class="lesson-box" style="padding:14px;background:#e8f6f2;border-radius:14px;margin:14px 0;">
        <strong>🛡️ CyberSathi Safety Lesson</strong>
        <p style="margin:6px 0 0;">${esc(d.lesson)}</p>
      </div>
      <div class="audio-actions" style="display:flex;gap:8px;flex-wrap:wrap;margin:14px 0;">
        <button class="btn btn-primary" id="fraudPlay">▶ Play</button>
        <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" id="fraudPause">⏸ Pause</button>
        <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" id="fraudStop">⏹ Stop</button>
        <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" id="fraudReplay">🔄 Replay</button>
      </div>
      <p class="real-note" style="font-size:12px;color:var(--muted);">यह जागरूकता कहानी एक वास्तविक रिपोर्ट किए गए मामले पर आधारित है।</p>
      <p><strong>🌐 Original Source:</strong> <a href="${s.url}" target="_blank" rel="noopener">${esc(s.source)} ↗</a></p>
    </div>
  `);

  $$('.language-switch button').forEach(b => b.onclick = () => openFraud(i, b.dataset.lang));
  const fp = $('#fraudPlay'); if (fp) fp.onclick = speakFraud;
  const fpa = $('#fraudPause'); if (fpa) fpa.onclick = () => speechSynthesis.pause();
  const fs = $('#fraudStop'); if (fs) fs.onclick = () => speechSynthesis.cancel();
  const fr = $('#fraudReplay'); if (fr) fr.onclick = () => { speechSynthesis.cancel(); speakFraud(); };
}

function speakFraud() {
  const s = fraudStories[selectedFraud];
  if (!s) return;
  const d = s[selectedFraudLang] || s.en;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance([
    d.title, d.summary, d.start, d.worked,
    'चेतावनी संकेत: ' + d.warning.join(', '),
    d.wrong, d.do,
    'CyberSathi सुरक्षा सीख: ' + d.lesson
  ].join('। '));
  u.lang = selectedFraudLang === 'hi' ? 'hi-IN' : selectedFraudLang === 'mr' ? 'mr-IN' : 'en-IN';
  u.rate = 0.88;
  speechSynthesis.speak(u);
}

// 6. Schemes Rendering
function renderSchemes() {
  const grid = $('#schemeGrid');
  if (!grid || typeof schemes === 'undefined') return;
  grid.innerHTML = schemes.map(s => `
    <article class="mini-card">
      <b>🏛️</b>
      <h3>${esc(s[0])}</h3>
      <p>${esc(s[1])}</p>
      <a class="btn btn-primary" href="${s[2]}" target="_blank" rel="noopener" style="margin-top:12px;">Official Source ↗</a>
    </article>
  `).join('');
}

// 7. Glossary Rendering
function renderGlossary(filter = '') {
  const grid = $('#glossaryGrid');
  if (!grid || typeof glossary === 'undefined') return;
  const f = (filter || '').toLowerCase();
  grid.innerHTML = glossary.filter(g => g.join(' ').toLowerCase().includes(f)).map(g => `
    <article class="glossary-card">
      <h3>${esc(g[0])}</h3>
      <p><strong>Definition:</strong> ${esc(g[1])}</p>
      <p><strong>Example:</strong> ${esc(g[2])}</p>
      <p><strong>Safety tip:</strong> ${esc(g[3])}</p>
    </article>
  `).join('');
}

// 8. Quiz Rendering
function renderQuiz() {
  const app = $('#quizApp');
  if (!app || typeof quiz === 'undefined') return;
  let idx = 0, score = 0, answered = false;

  function draw() {
    if (idx >= quiz.length) {
      app.innerHTML = `
        <div class="quiz-card">
          <h2>🏆 ${score >= 9 ? 'Excellent!' : score >= 7 ? '👍 Good Job!' : '📚 Keep Learning!'}</h2>
          <p>Your score: <strong>${score}/${quiz.length}</strong></p>
          <button class="btn btn-primary" id="restartQuiz">Restart Quiz</button>
        </div>
      `;
      const btn = $('#restartQuiz');
      if (btn) btn.onclick = () => { idx = 0; score = 0; draw(); };
      return;
    }

    const q = quiz[idx];
    app.innerHTML = `
      <div class="quiz-card">
        <div class="progress"><span style="width:${((idx + 1) / quiz.length) * 100}%"></span></div>
        <p class="muted">Question ${idx + 1} of ${quiz.length}</p>
        <h3>${esc(q[0])}</h3>
        <div id="options">
          ${q[1].map((o, i) => `<button class="option" data-i="${i}">${String.fromCharCode(65 + i)}. ${esc(o)}</button>`).join('')}
        </div>
        <p id="feedback" class="success" style="min-height:22px;"></p>
        <div class="quiz-actions" style="display:flex;justify-content:space-between;margin-top:20px;">
          <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" id="listenQ">🔊 Listen</button>
          <div>
            <button class="btn btn-outline" style="color:var(--deep);border-color:var(--line)" id="prev" ${idx === 0 ? 'disabled' : ''}>Previous</button>
            <button class="btn btn-primary" id="next">Next</button>
          </div>
        </div>
      </div>
    `;

    $$('.option').forEach(b => b.onclick = () => {
      if (answered) return;
      answered = true;
      const chosen = +b.dataset.i;
      const feedback = $('#feedback');
      if (chosen === q[2]) {
        score++;
        b.classList.add('correct');
        if (feedback) feedback.textContent = 'Correct! ' + q[3];
      } else {
        b.classList.add('wrong');
        if (feedback) feedback.textContent = 'Not quite. ' + q[3];
        const correctBtn = $$('.option')[q[2]];
        if (correctBtn) correctBtn.classList.add('correct');
      }
    });

    const nextBtn = $('#next');
    if (nextBtn) nextBtn.onclick = () => {
      if (!answered) {
        const fb = $('#feedback');
        if (fb) fb.textContent = 'Choose an option first.';
        return;
      }
      idx++;
      answered = false;
      draw();
    };

    const prevBtn = $('#prev');
    if (prevBtn) prevBtn.onclick = () => {
      if (idx > 0) {
        idx--;
        answered = false;
        draw();
      }
    };

    const listenBtn = $('#listenQ');
    if (listenBtn) listenBtn.onclick = () => {
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(q[0] + ' ' + q[1].join('. ')));
    };
  }

  draw();
}

// 9. Modal Management
function openModal(html) {
  const content = $('#modalContent');
  const modal = $('#modal');
  if (content) content.innerHTML = html;
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  const closeBtn = $('.modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const modal = $('#modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  // Stop any playing video or audio immediately on modal close
  const content = $('#modalContent');
  if (content) content.innerHTML = '';
}

// 10. Map Setup
function setupMap() {
  // Safe map hook; Leaflet enhancements attach if map container is present
}

// 11. Voice Saathi Implementation (Web Speech API)
function setupVoice() {
  let lang = 'en-IN';
  let activeRecognition = null;
  let isListening = false;

  const answers = {
    otp: {
      en: 'Never share your OTP with anyone. Banks and legitimate services do not need your OTP to receive money.',
      hi: 'किसी के साथ OTP साझा न करें। बैंक या वैध सेवा आपको पैसे प्राप्त करने के लिए OTP नहीं मांगती।',
      mr: 'कोणासोबतही OTP शेअर करू नका. पैसे मिळवण्यासाठी बँक किंवा वैध सेवा OTP मागत नाही.'
    },
    upi: {
      en: 'If you suspect UPI fraud, contact your bank or payment provider immediately, preserve evidence and report through official cybercrime channels (Dial 1930).',
      hi: 'UPI धोखाधड़ी का संदेह हो तो तुरंत बैंक या भुगतान सेवा से संपर्क करें, सबूत सुरक्षित रखें और 1930 पर या cybercrime.gov.in पर शिकायत करें.',
      mr: 'UPI फसवणूक झाल्याचा संशय असल्यास त्वरित बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा, पुरावे जतन करा आणि 1930 वर तक्रार करा.'
    },
    job: {
      en: 'Verify the employer independently. A request for a registration fee or guaranteed income is a strong warning sign.',
      hi: 'नियोक्ता की स्वतंत्र रूप से पुष्टि करें। रजिस्ट्रेशन फीस या गारंटीड कमाई की मांग बड़ा चेतावनी संकेत है.',
      mr: 'नियोक्त्याची स्वतंत्रपणे पडताळणी करा. नोंदणी शुल्क किंवा हमखास कमाईची मागणी हा मोठा इशारा आहे.'
    },
    scheme: {
      en: 'Use verified government discovery platforms such as myScheme and follow links from official government websites.',
      hi: 'myScheme जैसे सत्यापित सरकारी प्लेटफॉर्म का उपयोग करें और आधिकारिक सरकारी वेबसाइटों से ही लिंक खोलें.',
      mr: 'myScheme सारख्या अधिकृत सरकारी शोध प्लॅटफॉर्मचा वापर करा आणि अधिकृत सरकारी संकेतस्थळांवरील दुवेच उघडा.'
    }
  };

  // Pre-configured questions
  $$('[data-voice]').forEach(b => b.onclick = () => speakAnswer(b.dataset.voice));

  // Language buttons
  $$('.voice-lang').forEach(b => {
    b.onclick = () => {
      $$('.voice-lang').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      lang = b.dataset.lang === 'hi' ? 'hi-IN' : b.dataset.lang === 'mr' ? 'mr-IN' : 'en-IN';
      if (activeRecognition && isListening) {
        activeRecognition.lang = lang;
      }
    };
  });

  // Check initial active language chip
  const activeChip = $('.voice-lang.active');
  if (activeChip && activeChip.dataset.lang) {
    lang = activeChip.dataset.lang === 'hi' ? 'hi-IN' : activeChip.dataset.lang === 'mr' ? 'mr-IN' : 'en-IN';
  }

  const voiceBtn = $('#voiceBtn');
  if (voiceBtn) {
    voiceBtn.onclick = () => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) {
        const stateEl = $('#voiceState');
        if (stateEl) stateEl.textContent = 'Speech recognition is not supported in this browser. Please use Microsoft Edge or Google Chrome.';
        return;
      }

      // Requirement 5: Prevent multiple SpeechRecognition sessions
      if (isListening && activeRecognition) {
        try { activeRecognition.stop(); } catch(e) {}
        isListening = false;
        return;
      }

      if (activeRecognition) {
        try {
          activeRecognition.onstart = null;
          activeRecognition.onspeechstart = null;
          activeRecognition.onsoundstart = null;
          activeRecognition.onresult = null;
          activeRecognition.onerror = null;
          activeRecognition.onend = null;
          activeRecognition.abort();
        } catch(e) {}
        activeRecognition = null;
      }

      try {
        const r = new SR();
        activeRecognition = r;
        r.lang = lang;
        r.continuous = false;
        r.interimResults = true;

        // Requirement 6: Show Listening state
        r.onstart = () => {
          isListening = true;
          const stateEl = $('#voiceState');
          if (stateEl) stateEl.textContent = 'Listening... Speak now';
        };

        // Requirement 6: Show Speech Detected state
        r.onspeechstart = () => {
          const stateEl = $('#voiceState');
          if (stateEl) stateEl.textContent = 'Speech Detected...';
        };

        r.onsoundstart = () => {
          const stateEl = $('#voiceState');
          if (stateEl && stateEl.textContent !== 'Speech Detected...') {
            stateEl.textContent = 'Speech Detected...';
          }
        };

        r.onresult = (e) => {
          let interim = '';
          let finalTranscript = '';
          for (let i = e.resultIndex; i < e.results.length; ++i) {
            if (e.results[i].isFinal) {
              finalTranscript += e.results[i][0].transcript;
            } else {
              interim += e.results[i][0].transcript;
            }
          }

          const currentText = (finalTranscript || interim).trim();
          if (currentText) {
            const replyEl = $('#voiceReply');
            if (replyEl) replyEl.textContent = `“${currentText}”`;
          }

          if (finalTranscript) {
            const text = finalTranscript.toLowerCase();
            let key = null;
            if (text.includes('otp') || text.includes('ओटीपी') || text.includes('पासवर्ड') || text.includes('password')) key = 'otp';
            else if (text.includes('upi') || text.includes('यूपीआई') || text.includes('kyc') || text.includes('केवाईसी') || text.includes('payment') || text.includes('पैसे') || text.includes('fraud') || text.includes('धोखा') || text.includes('फसवणूक')) key = 'upi';
            else if (text.includes('job') || text.includes('नौकरी') || text.includes('नोकरी') || text.includes('काम') || text.includes('recruitment')) key = 'job';
            else if (text.includes('scheme') || text.includes('योजना') || text.includes('सरकारी') || text.includes('subsidy')) key = 'scheme';

            const langKey = lang.startsWith('hi') ? 'hi' : lang.startsWith('mr') ? 'mr' : 'en';
            if (key) {
              speakAnswer(key);
            } else {
              const fallback = langKey === 'hi'
                ? 'OTP, UPI धोखाधड़ी, फर्जी नौकरी या सरकारी योजना के बारे में पूछें। तुरंत सहायता के लिए 1930 पर कॉल करें।'
                : langKey === 'mr'
                ? 'OTP, UPI फसवणूक, बनावट नोकरी किंवा सरकारी योजनांबद्दल विचारा. त्वरित मदतीसाठी 1930 वर कॉल करा.'
                : 'Try asking about OTP, UPI fraud, fake jobs or government schemes. Dial 1930 for helpline.';
              const replyEl = $('#voiceReply');
              if (replyEl) replyEl.textContent = fallback;
            }
          }
        };

        // Requirements 3 & 4: Specific error messages for not-allowed, no-speech, audio-capture, network, aborted
        r.onerror = (e) => {
          isListening = false;
          let errorMsg = 'Please try speaking again.';
          switch (e.error) {
            case 'not-allowed':
              errorMsg = 'Microphone permission was denied. Please allow microphone access in your browser settings.';
              break;
            case 'no-speech':
              errorMsg = 'No speech was detected. Please speak clearly near the microphone and try again.';
              break;
            case 'audio-capture':
              errorMsg = 'No microphone was found or microphone is busy. Please check audio hardware.';
              break;
            case 'network':
              errorMsg = 'Network error during speech recognition. Please check your internet connection.';
              break;
            case 'aborted':
              errorMsg = 'Speech recognition was stopped.';
              break;
            default:
              errorMsg = `Microphone error (${e.error || 'unknown'}). Please try again.`;
          }
          const stateEl = $('#voiceState');
          if (stateEl) stateEl.textContent = errorMsg;
        };

        r.onend = () => {
          isListening = false;
          activeRecognition = null;
          const stateEl = $('#voiceState');
          if (stateEl && stateEl.textContent !== 'Voice Saathi is speaking...' &&
              !stateEl.textContent.includes('denied') &&
              !stateEl.textContent.includes('detected') &&
              !stateEl.textContent.includes('hardware') &&
              !stateEl.textContent.includes('Network') &&
              !stateEl.textContent.includes('stopped')) {
            stateEl.textContent = 'Tap to Speak';
          }
        };

        r.start();
      } catch (err) {
        isListening = false;
        activeRecognition = null;
        const stateEl = $('#voiceState');
        if (stateEl) stateEl.textContent = 'Unable to start speech recognition. Please try again.';
      }
    };
  }

  function speakAnswer(key) {
    const langKey = lang.startsWith('hi') ? 'hi' : lang.startsWith('mr') ? 'mr' : 'en';
    const text = answers[key] ? answers[key][langKey] : key;
    const replyEl = $('#voiceReply');
    if (replyEl) replyEl.textContent = text;
    const stateEl = $('#voiceState');
    if (stateEl) stateEl.textContent = 'Voice Saathi is speaking...';

    if (window.speechSynthesis) {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.onend = () => {
        const s = $('#voiceState');
        if (s) s.textContent = 'Tap to Speak';
      };
      u.onerror = () => {
        const s = $('#voiceState');
        if (s) s.textContent = 'Tap to Speak';
      };
      speechSynthesis.speak(u);
    }
  }
}

// 12. Form Submissions & Supabase
async function saveSubmission(table, data, successEl) {
  if (window.CYBERSATHI_DB?.from) {
    const { error } = await window.CYBERSATHI_DB.from(table).insert(data);
    if (error) throw error;
    if (successEl) successEl.textContent = 'Thank you! Your submission has been received successfully.';
  } else {
    const key = 'cybersathi_' + table;
    const arr = JSON.parse(safeStorage.get(key, '[]'));
    arr.push({ ...data, created_at: new Date().toISOString() });
    safeStorage.set(key, JSON.stringify(arr));
    if (successEl) successEl.textContent = 'Thank you! Demo mode saved your submission locally in this browser.';
  }
}

function setupForms() {
  [['volunteerForm','volunteers','volSuccess'],
   ['contactForm','contact_messages','contactSuccess'],
   ['callForm','voice_call_requests','callSuccess'],
   ['scamForm','scam_reports','scamSuccess']].forEach(([id, table, out]) => {
    const form = $('#' + id);
    if (!form) return;
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const raw = Object.fromEntries(new FormData(form).entries());
      let data = { ...raw };
      if (id === 'volunteerForm') data = { name: raw.name, age: Number(raw.age), village_city: raw.location, preferred_language: raw.language, area_of_interest: raw.interest, contact: raw.contact, consent: true };
      if (id === 'contactForm') data = { name: raw.name, email: raw.email, message: raw.message };
      if (id === 'callForm') data = { name: raw.name, phone: raw.phone, language: raw.language, purpose: raw.purpose, preferred_time: raw.preferred_time ? new Date(raw.preferred_time).toISOString() : null, consent: true };
      if (id === 'scamForm') data = { scam_type: raw.scam_type, description: raw.description, incident_date: raw.incident_date || null, amount: raw.amount ? Number(raw.amount) : null, platform: raw.platform || null, state: raw.state || null, district: raw.district || null, contact_preference: raw.contact_preference || 'None', consent: true };
      delete data.evidence;
      try {
        await saveSubmission(table, data, $('#' + out));
        form.reset();
      } catch (err) {
        console.error(err);
        const outEl = $('#' + out);
        if (outEl) outEl.textContent = 'We could not submit your request right now. Please try again.';
      }
    });
  });
}

function initSupabase() {
  const c = window.SUPABASE_CONFIG;
  if (c?.url && c?.anonKey && window.supabase) {
    window.CYBERSATHI_DB = window.supabase.createClient(c.url, c.anonKey);
  }
}

// Safe UI event listener attachments
const topicSearch = $('#topicSearch');
if (topicSearch) topicSearch.addEventListener('input', e => renderTopics(e.target.value));

const glossarySearch = $('#glossarySearch');
if (glossarySearch) glossarySearch.addEventListener('input', e => renderGlossary(e.target.value));

const themeToggle = $('#themeToggle');
if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle('dark');
    safeStorage.set('cyber_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    themeToggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
  };
  if (safeStorage.get('cyber_theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '🌙';
  }
}

const menuToggle = $('.menu-toggle');
if (menuToggle) {
  menuToggle.onclick = () => {
    const nav = $('.main-nav');
    if (nav) {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    }
  };
}

$$('.main-nav a').forEach(a => a.onclick = () => {
  const nav = $('.main-nav');
  if (nav) nav.classList.remove('open');
});

const modalClose = $('.modal-close');
if (modalClose) modalClose.onclick = closeModal;

const modalBackdrop = $('.modal-backdrop');
if (modalBackdrop) modalBackdrop.onclick = closeModal;

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

const playStory = $('#playStory');
if (playStory) playStory.onclick = () => {
  if ($('#nowPlaying')?.textContent !== 'No story selected') speechSynthesis.resume();
};

const pauseStory = $('#pauseStory');
if (pauseStory) pauseStory.onclick = () => speechSynthesis.pause();

const stopStory = $('#stopStory');
if (stopStory) stopStory.onclick = () => {
  speechSynthesis.cancel();
  const ps = $('#playerState');
  if (ps) ps.textContent = 'Stopped';
};

// Requirement 8: Initialize every section
renderAudiences();
renderTopics();
renderVideos();
renderAnimated();
renderFraud();
renderSchemes();
renderGlossary();
renderQuiz();
setupMap();
setupVoice();
setupForms();
initSupabase();
