// ============================================================================
// 🎓 CYBERSATHI 5 SPECIALIZED COMMUNITY CYBER AWARENESS COURSES (js/courses.js)
// Complete Trilingual Experience (English • हिन्दी • मराठी) for EVERY Module:
// TEXT + COMPLETE SPOKEN AUDIO (Play/Pause/Resume/Replay/Volume/Progress) + PRACTICE + QUIZ
// Audio Architecture: Supports pre-recorded audio/course-X/module-Y/{english,hindi,marathi}.mp3
// with automatic Sentence-Chunked Browser SpeechSynthesis Fallback (en-IN, hi-IN, mr-IN).
// ============================================================================

const COURSES_DATA = [
  // ==========================================================================
  // COURSE 1: SENIOR CITIZENS & ELDERS
  // ==========================================================================
  {
    id: 'course-senior-citizens',
    courseNumber: 1,
    category: 'senior',
    badge: { en: 'Senior Citizens', hi: 'वरिष्ठ नागरिक', mr: 'ज्येष्ठ नागरिक' },
    badgeIcon: '👴',
    badgeColor: '#b45309',
    badgeBg: '#fef3c7',
    image: 'assets/images/course-senior-citizens.jpg',
    duration: '25 Mins',
    level: { en: 'Beginner Friendly', hi: 'सरल और शुरुआती', mr: 'सोपा आणि प्राथमिक' },
    modulesCount: 4,
    certificateTitle: 'Senior Digital Sentinel',
    title: {
      en: 'Digital Shield for Senior Citizens & Elders',
      hi: 'वरिष्ठ नागरिकों और बुजुर्गों के लिए डिजिटल सुरक्षा कवच',
      mr: 'ज्येष्ठ नागरिक आणि वृद्धांसाठी डिजिटल सुरक्षा कवच'
    },
    subtitle: {
      en: 'Defend against Digital Arrest threats, fake pension verification, electricity cut SMS, and deceptive bank calls.',
      hi: 'डिजिटल अरेस्ट धमकियों, फर्जी पेंशन सत्यापन, बिजली बिल कटने के एसएमएस और फर्जी बैंक कॉल से बचें।',
      mr: 'डिजिटल अरेस्टच्या धमक्या, बनावट पेन्शन पडताळणी, वीज बिल मेसेज आणि बँक कॉल्सपासून स्वतःचा बचाव करा.'
    },
    description: {
      en: 'Retirement savings represent a lifetime of hard work. Fraudsters specifically target seniors using fear, urgency, and technical confusion. This free course gives elders and their families clear, stress-free rules to stay completely secure.',
      hi: 'सेवानिवृत्ति की बचत जीवन भर की मेहनत होती है। धोखेबाज डर और जल्दबाजी दिखाकर वरिष्ठ नागरिकों को निशाना बनाते हैं। यह कोर्स आपको सुरक्षित रहने के सरल नियम सिखाता है।',
      mr: 'निवृत्तीचे पैसे ही आयुष्यभराची कमाई असते. भामटे भीती दाखवून ज्येष्ठ नागरिकांना फसविण्याचा प्रयत्न करतात. हा विनामूल्य अभ्यासक्रम तुम्हाला सुरक्षित राहण्याचे सोपे मार्ग शिकवतो.'
    },
    keySkills: {
      en: [
        'Spotting fake CBI/Police "Digital Arrest" video calls',
        'Never sharing OTP or passwords for Jeevan Praman / Pension',
        'Handling urgent "Electricity disconnected tonight" threats',
        'The Golden 2-Person Verification Rule before paying'
      ],
      hi: [
        'फर्जी CBI/पुलिस "डिजिटल अरेस्ट" वीडियो कॉल की पहचान करना',
        'जीवन प्रमाण / पेंशन के नाम पर कभी भी OTP या पिन साझा न करना',
        '"आज रात बिजली कट जाएगी" वाले फर्जी SMS से निपटना',
        'पैसे भेजने से पहले 2-व्यक्ति सत्यापन का सुनहरा नियम अपनाना'
      ],
      mr: [
        'बनावट CBI/पोलीस "डिजिटल अरेस्ट" व्हिडिओ कॉल्स ओळखणे',
        'जीवन प्रमाण / पेन्शनसाठी कधीही OTP किंवा पिन न सांगणे',
        '"आज रात्री वीज कापली जाईल" या खोट्या मेसेजला बळी न पडणे',
        'पैसे पाठवण्यापूर्वी २-व्यक्ती पडताळणीचा सुवर्ण नियम पाळणे'
      ]
    },
    modules: [
      {
        moduleNumber: 1,
        audioFiles: {
          en: 'audio/course-1/module-1/english.mp3',
          hi: 'audio/course-1/module-1/hindi.mp3',
          mr: 'audio/course-1/module-1/marathi.mp3'
        },
        title: {
          en: 'Module 1: Exposing the "Digital Arrest" Scam',
          hi: 'मॉड्यूल 1: "डिजिटल अरेस्ट" ठगी का पर्दाफाश',
          mr: 'मॉड्यूल १: "डिजिटल अरेस्ट" फसवणुकीचा पर्दाफाश'
        },
        summary: {
          en: 'Understand why no genuine police officer or judge can arrest you over Skype or WhatsApp.',
          hi: 'समझें कि कोई भी असली पुलिस अधिकारी या जज व्हाट्सएप या स्काइप वीडियो कॉल पर आपको गिरफ्तार नहीं कर सकता।',
          mr: 'कोणताही खरा पोलीस अधिकारी किंवा न्यायाधीश व्हॉट्सॲप किंवा स्काइप व्हिडिओ कॉलवर अटक करू शकत नाही हे समजून घ्या.'
        },
        content: {
          en: `
            <h4>The Scam Scenario:</h4>
            <p>You receive a video call from an individual wearing a police or CBI uniform. They claim that an illegal parcel containing passports or contraband has been registered in your Aadhaar card name, and that an arrest warrant has been issued against you.</p>
            <h4>The Core Rule:</h4>
            <div class="safety-box alert">
              <strong>Government Law:</strong> There is NO such thing as "Digital Arrest" under Indian Law! Genuine police officers, CBI, ED, and courts NEVER conduct arrests, trials, or interrogations over video calls, and NEVER ask you to deposit "forensic verification funds" into any bank account.
            </div>
            <h4>What You Must Do:</h4>
            <ul>
              <li>Immediately disconnect the video call. Do not feel intimidated.</li>
              <li>Do not send a single rupee to any account.</li>
              <li>Dial <strong>1930</strong> (National Cybercrime Helpline) or inform a trusted family member.</li>
            </ul>
          `,
          hi: `
            <h4>ठगी की परिस्थिति:</h4>
            <p>आपको पुलिस या CBI की वर्दी पहने किसी व्यक्ति का वीडियो कॉल आता है। वे दावा करते हैं कि आपके आधार कार्ड के नाम से एक अवैध पार्सल पकड़ा गया है और आपके खिलाफ गिरफ्तारी वारंट जारी हुआ है।</p>
            <h4>सबसे महत्वपूर्ण नियम:</h4>
            <div class="safety-box alert">
              <strong>भारतीय कानून का सच:</strong> भारतीय कानून में "डिजिटल अरेस्ट" जैसी कोई व्यवस्था नहीं है! असली पुलिस, CBI, ED या न्यायालय कभी भी व्हाट्सएप या स्काइप वीडियो कॉल पर पूछताछ या गिरफ्तारी नहीं करते और कभी भी "जांच खाते" में पैसे जमा करने को नहीं कहते।
            </div>
            <h4>आपको तुरंत क्या करना चाहिए:</h4>
            <ul>
              <li>बिना डरे तुरंत वीडियो कॉल काट दें।</li>
              <li>किसी भी बैंक खाते में एक रुपया भी ट्रांसफर न करें।</li>
              <li>तुरंत अपने परिवार को बताएं और <strong>1930</strong> (राष्ट्रीय साइबर हेल्पलाइन) पर कॉल करें।</li>
            </ul>
          `,
          mr: `
            <h4>फसवणुकीचा प्रसंग:</h4>
            <p>तुम्हाला पोलीस किंवा CBI च्या गणवेशातील एका व्यक्तीचा व्हिडिओ कॉल येतो. तुमच्या आधार कार्डच्या नावावर बेकायदेशीर पार्सल सापडले असून तुमच्यावर अटक वॉरंट जारी झाल्याचा दावा ते करतात.</p>
            <h4>सर्वात महत्त्वाचा नियम:</h4>
            <div class="safety-box alert">
              <strong>भारतीय कायद्याचे सत्य:</strong> भारतीय कायद्यात "डिजिटल अरेस्ट" नावाचा कोणताही प्रकार अस्तित्वात नाही! खरे पोलीस, CBI, ED किंवा न्यायालय कधीही व्हिडिओ कॉलवर चौकशी किंवा अटक करत नाहीत आणि कोणत्याही खात्यात पैसे भरायला सांगत नाहीत.
            </div>
            <h4>तुम्ही काय केले पाहिजे:</h4>
            <ul>
              <li>न घाबरता तात्काळ व्हिडिओ कॉल कट करा.</li>
              <li>कोणत्याही खात्यात एकही रुपया पाठवू नका.</li>
              <li>तात्काळ कुटुंबातील सदस्यांना सांगा आणि <strong>1930</strong> (राष्ट्रीय सायबर हेल्पलाइन) वर कॉल करा.</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 1: Exposing the Digital Arrest Scam. In this scam, criminals call you on WhatsApp or Skype wearing a fake police or CBI uniform. They falsely claim that an illegal parcel was found in your Aadhaar name and order you to stay on video call while transferring your savings to a verification account. Remember the golden rule of Indian law: There is no such thing as Digital Arrest. Real police, CBI, or judges never interrogate or arrest citizens on video calls, and never ask for money transfers. Stop immediately, disconnect the video call, tell your family, and dial 1930.',
          hi: 'मॉड्यूल 1: डिजिटल अरेस्ट ठगी का पर्दाफाश। इस ठगी में अपराधी नकली पुलिस या सीबीआई की वर्दी पहनकर व्हाट्सएप या स्काइप पर वीडियो कॉल करते हैं। वे झूठा डर दिखाते हैं कि आपके आधार कार्ड के नाम से अवैध पार्सल पकड़ा गया है और जांच के नाम पर आपकी जमा-पूंजी किसी खाते में ट्रांसफर करवाने की कोशिश करते हैं। भारतीय कानून का सबसे बड़ा सच याद रखें: डिजिटल अरेस्ट जैसी कोई चीज़ कानून में नहीं होती। असली पुलिस या जज कभी वीडियो कॉल पर गिरफ्तारी नहीं करते और न कभी पैसे मांगते हैं। तुरंत फोन काटें, अपने परिवार को बताएं और 1930 पर शिकायत करें।',
          mr: 'मॉड्यूल १: डिजिटल अरेस्ट फसवणुकीचा पर्दाफाश. या फसवणुकीत सायबर भामटे पोलीस किंवा सीबीआयचा बनावट गणवेश घालून व्हॉट्सॲप किंवा स्काइपवर व्हिडिओ कॉल करतात. तुमच्या आधार कार्डवर बेकायदेशीर पार्सल सापडल्याची भीती दाखवून ते तुमच्या बँक खात्यातील पैसे ट्रान्सफर करायला लावतात. भारतीय कायद्याचे सुवर्ण सत्य लक्षात ठेवा: डिजिटल अरेस्ट नावाचा कोणताही प्रकार कायद्यात अस्तित्वात नाही. खरे पोलीस किंवा न्यायाधीश कधीही व्हिडिओ कॉलवर अटक करत नाहीत आणि पैसे मागत नाहीत. तात्काळ फोन कट करा, घरच्यांना सांगा आणि १९३० वर संपर्क साधा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A caller on video call in a police uniform tells you "Do not tell your children, stay on camera, and transfer ₹50,000 for RBI verification." What is your action?',
            hi: 'त्वरित अभ्यास: वीडियो कॉल पर पुलिस वर्दी में एक कॉलर कहता है "अपने बच्चों को मत बताना, कैमरे पर बने रहो और जांच के लिए ₹50,000 भेजो।" आप क्या करेंगे?',
            mr: 'झटपट सराव: व्हिडिओ कॉलवर पोलीस गणवेशातील कॉलर म्हणतो "मुलांना सांगू नका, कॅमेऱ्यासमोर बसा आणि तपासणीसाठी ₹५०,००० पाठवा." तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Cut the call immediately, tell your family, and pay ₹0.', hi: 'तुरंत कॉल काटें, परिवार को बताएं और ₹0 भेजें।', mr: 'तात्काळ कॉल कट करा, कुटुंबाला सांगा आणि ₹० पाठवा.' }, correct: true },
            { text: { en: 'Stay silent and transfer the money.', hi: 'चुपचाप पैसे ट्रांसफर कर दें।', mr: 'गुपचूप पैसे पाठवून द्या.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Genuine police never ask for secrecy from your family or money transfers on video calls.',
            hi: 'बिल्कुल सही! असली पुलिस कभी भी परिवार से बात छुपाने या वीडियो कॉल पर पैसे भेजने को नहीं कहती।',
            mr: 'अगदी बरोबर! खरे पोलीस कधीही कुटुंबापासून गोष्ट लपवायला किंवा व्हिडिओ कॉलवर पैसे पाठवायला सांगत नाहीत.'
          }
        }
      },
      {
        moduleNumber: 2,
        audioFiles: {
          en: 'audio/course-1/module-2/english.mp3',
          hi: 'audio/course-1/module-2/hindi.mp3',
          mr: 'audio/course-1/module-2/marathi.mp3'
        },
        title: {
          en: 'Module 2: Safe Pension & Jeevan Praman Life Certificates',
          hi: 'मॉड्यूल 2: सुरक्षित पेंशन और जीवन प्रमाण पत्र',
          mr: 'मॉड्यूल २: सुरक्षित पेन्शन आणि जीवन प्रमाणपत्र'
        },
        summary: {
          en: 'How to renew your digital life certificate without giving away banking access.',
          hi: 'बिना बैंक OTP या रिमोट ऐप दिए अपना जीवन प्रमाण पत्र सुरक्षित रूप से कैसे अपडेट करें।',
          mr: 'बँक OTP किंवा रिमोट ॲप न देता तुमचे जीवन प्रमाणपत्र सुरक्षितपणे कसे नूतनीकरण करावे.'
        },
        content: {
          en: `
            <h4>The Scam Scenario:</h4>
            <p>A caller poses as an officer from the Treasury Department or EPFO, offering to submit your Jeevan Praman Patra from home so your pension won't stop. They ask you to install an app or share an OTP.</p>
            <h4>The Core Rule:</h4>
            <div class="safety-box success">
              <strong>Pension Truth:</strong> Jeevan Praman is submitted ONLY through official biometric scanners at Gram Panchayat CSC centres, India Post Payments Bank postmen, bank branches, or the official Jeevan Pramaan Face RD app. No official ever calls you to demand an OTP or bank PIN.
            </div>
            <h4>Golden Precautions:</h4>
            <ul>
              <li>Never allow remote access to your phone via AnyDesk or TeamViewer.</li>
              <li>Treasury and bank offices never ask for your debit card expiry date, CVV, or OTP.</li>
              <li>If in doubt, visit your local bank branch or CSC centre in person.</li>
            </ul>
          `,
          hi: `
            <h4>ठगी की परिस्थिति:</h4>
            <p>कोई व्यक्ति खुद को ट्रेजरी विभाग (कोषागार) या पेंशन कार्यालय का अधिकारी बताकर कॉल करता है और कहता है कि "आपका जीवन प्रमाण पत्र अपडेट नहीं हुआ है, आपकी पेंशन रुक जाएगी। अभी घर बैठे अपडेट करने के लिए OTP बताएं या AnyDesk ऐप डाउनलोड करें।"</p>
            <h4>सबसे महत्वपूर्ण नियम:</h4>
            <div class="safety-box success">
              <strong>पेंशन का सच:</strong> जीवन प्रमाण पत्र केवल बैंक शाखा, नजदीकी CSC केंद्र, डाकिया (India Post) या आधिकारिक Jeevan Pramaan ऐप के माध्यम से ही जमा होता है। कोई भी सरकारी अधिकारी फोन करके बैंक OTP या ATM पिन नहीं मांगता।
            </div>
            <h4>सुरक्षा सावधानियां:</h4>
            <ul>
              <li>किसी भी कॉलर के कहने पर फोन में AnyDesk या RustDesk डाउनलोड न करें।</li>
              <li>अपनी पेंशन पासबुक या एटीएम कार्ड की जानकारी व्हाट्सएप पर किसी अनजान नंबर को न भेजें।</li>
            </ul>
          `,
          mr: `
            <h4>फसवणुकीचा प्रसंग:</h4>
            <p>कोणीतरी स्वतःला ट्रेझरी ऑफिस किंवा पेन्शन विभागाचा अधिकारी सांगून फोन करतो आणि म्हणतो, "तुमचे हयातीचे प्रमाणपत्र (जीवन प्रमाण) अपडेट नाही, तुमची पेन्शन बंद होईल. आत्ताच अपडेट करण्यासाठी फोनवर आलेला OTP सांगा."</p>
            <h4>सर्वात महत्त्वाचा नियम:</h4>
            <div class="safety-box success">
              <strong>पेन्शनचे सत्य:</strong> जीवन प्रमाणपत्र फक्त बँक शाखा, महा-ई-सेवा / CSC केंद्र, पोस्टमन किंवा अधिकृत Jeevan Pramaan ॲपद्वारेच सादर केले जाते. कोणताही सरकारी अधिकारी फोन करून बँक OTP किंवा पिन मागत नाही.
            </div>
            <h4>सुवर्ण दक्षता:</h4>
            <ul>
              <li>कोणाच्याही सांगण्यावरून फोनमध्ये AnyDesk किंवा TeamViewer डाउनलोड करू नका.</li>
              <li>शंका असल्यास आपल्या मुलांना सोबत घेऊन प्रत्यक्ष बँकेत जाऊन खात्री करा.</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 2: Safe Pension and Jeevan Praman Life Certificates. Scammers often call retired citizens claiming to be from the Pension Treasury Office. They know your name and tell you that your monthly pension will stop unless you share a 6-digit OTP or install a screen-sharing app right now. Remember: Treasury officers never update life certificates over regular phone calls using banking OTPs. Always submit your Jeevan Praman at your bank branch, official CSC center, through a Postman, or the official government Face RD app with a family member helping you.',
          hi: 'मॉड्यूल 2: सुरक्षित पेंशन और जीवन प्रमाण पत्र। साइबर ठग अक्सर सेवानिवृत्त बुजुर्गों को पेंशन कार्यालय के नाम से फोन करते हैं। वे कहते हैं कि आपका जीवन प्रमाण पत्र अधूरा है और आज ही पेंशन बंद हो जाएगी, इसे चालू रखने के लिए तुरंत ओटीपी बताएं। याद रखें: कोई भी सरकारी कोषागार या बैंक अधिकारी फोन पर ओटीपी मांगकर जीवन प्रमाण पत्र नहीं बनाता। जीवन प्रमाण पत्र केवल अपनी बैंक शाखा, नजदीकी सीएससी केंद्र या डाकघर के माध्यम से ही बनवाएं। किसी भी कॉलर को ओटीपी या पिन कभी न बताएं।',
          mr: 'मॉड्यूल २: सुरक्षित पेन्शन आणि जीवन प्रमाणपत्र. सायबर भामटे अनेकदा निवृत्त ज्येष्ठ नागरिकांना पेन्शन ऑफिसमधून बोलत असल्याचे सांगून फोन करतात. तुमचे जीवन प्रमाणपत्र अपूर्ण असून आजच पेन्शन बंद होईल अशी भीती दाखवून ते ओटीपी मागतात. लक्षात ठेवा: कोणताही सरकारी अधिकारी किंवा बँक कर्मचारी फोनवर ओटीपी मागून हयातीचे प्रमाणपत्र अपडेट करत नाही. जीवन प्रमाणपत्र नेहमी बँक शाखेत, अधिकृत सीएससी केंद्रात किंवा पोस्टमनमार्फतच सादर करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A caller claims your monthly pension will stop today unless you read out the 6-digit OTP sent to your phone. What should you do?',
            hi: 'त्वरित अभ्यास: एक कॉलर कहता है कि यदि आपने फोन पर आया 6-अंकों का OTP नहीं बताया तो आज से आपकी पेंशन बंद हो जाएगी। आपको क्या करना चाहिए?',
            mr: 'झटपट सराव: एक कॉलर सांगतो की फोनवर आलेला ६-अंकी OTP सांगितला नाही तर आजपासून तुमची पेन्शन बंद होईल. तुम्ही काय करावे?'
          },
          options: [
            { text: { en: 'Hang up immediately. Pension offices never ask for banking OTPs over the phone.', hi: 'तुरंत फोन काट दें। पेंशन कार्यालय कभी फोन पर बैंक OTP नहीं मांगते।', mr: 'तात्काळ फोन कट करा. पेन्शन ऑफिस कधीही फोनवर बँक OTP मागत नाही.' }, correct: true },
            { text: { en: 'Share the OTP so the pension continues.', hi: 'पेंशन चालू रखने के लिए OTP बता दें।', mr: 'पेन्शन चालू राहण्यासाठी OTP सांगावा.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Sharing an OTP allows the scammer to steal your retirement savings.',
            hi: 'बिल्कुल सही! OTP बताने से ठग आपके पेंशन खाते से पूरी बचत निकाल सकते हैं।',
            mr: 'अगदी बरोबर! OTP सांगितल्यास भामटे तुमच्या पेन्शन खात्यातील सर्व पैसे चोरू शकतात.'
          }
        }
      },
      {
        moduleNumber: 3,
        audioFiles: {
          en: 'audio/course-1/module-3/english.mp3',
          hi: 'audio/course-1/module-3/hindi.mp3',
          mr: 'audio/course-1/module-3/marathi.mp3'
        },
        title: {
          en: 'Module 3: Electricity Bill Disconnection Panic SMS',
          hi: 'मॉड्यूल 3: रात में बिजली कटने के फर्जी SMS से बचाव',
          mr: 'मॉड्यूल ३: रात्री वीज कापली जाण्याच्या बनावट SMS पासून बचाव'
        },
        summary: {
          en: 'De-escalating the midnight power cut panic messages.',
          hi: '"आज रात 9:30 बजे बिजली कट जाएगी" वाले धोखाधड़ी संदेशों की पहचान।',
          mr: '"आज रात्री ९:३० वाजता वीज कापली जाईल" या फसव्या मेसेजची ओळख.'
        },
        content: {
          en: `
            <h4>The Scam Scenario:</h4>
            <p>You receive an urgent SMS: <em>"Dear Consumer, your electricity power will be disconnected tonight at 9:30 PM because your previous bill was not updated. Contact Electricity Officer immediately at 98xxxxxxx."</em></p>
            <h4>The Core Rule:</h4>
            <div class="safety-box warning">
              <strong>Disconnection Notice Rule:</strong> Power companies (MSEDCL / State DISCOMs) NEVER disconnect power at night via an SMS containing a personal 10-digit mobile number.
            </div>
            <h4>What You Must Do:</h4>
            <ul>
              <li>Do not call the personal phone number listed in the text message.</li>
              <li>Do not download any APK file or pay a "₹10 bill update fee" on any link.</li>
              <li>Check your real electricity bill using your Consumer Number on the official MSEDCL / Mahavitaran app or at your local billing office.</li>
            </ul>
          `,
          hi: `
            <h4>ठगी की परिस्थिति:</h4>
            <p>आपको एक SMS आता है: <em>"प्रिय उपभोक्ता, आपका पिछले महीने का बिजली बिल अपडेट नहीं हुआ है। आज रात 9:30 बजे आपकी बिजली काट दी जाएगी। तुरंत बिजली अधिकारी से 98xxxxxxxx पर संपर्क करें।"</em></p>
            <h4>सबसे महत्वपूर्ण नियम:</h4>
            <div class="safety-box warning">
              <strong>बिजली विभाग का नियम:</strong> कोई भी सरकारी बिजली कंपनी (जैसे महावितरण / MSEDCL) कभी भी रात को 9:30 बजे बिजली नहीं काटती और न ही किसी अधिकारी का निजी 10-अंकों का मोबाइल नंबर SMS में भेजती है।
            </div>
            <h4>आपको क्या करना चाहिए:</h4>
            <ul>
              <li>SMS में दिए गए 10-अंकों के मोबाइल नंबर पर कभी कॉल न करें।</li>
              <li>"₹10 बिल अपडेट शुल्क" के नाम पर किसी भी लिंक पर पिन न डालें।</li>
              <li>अपने असली बिजली बिल की जांच केवल आधिकारिक बिजली ऐप या बिलिंग केंद्र पर ही करें।</li>
            </ul>
          `,
          mr: `
            <h4>फसवणुकीचा प्रसंग:</h4>
            <p>तुम्हाला एक मेसेज येतो: <em>"प्रिय ग्राहक, तुमचे मागील महिन्याचे वीज बिल अपडेट झालेले नाही. आज रात्री ९:३० वाजता तुमची वीज कापली जाईल. तात्काळ वीज अधिकाऱ्याशी 98xxxxxxxx वर संपर्क साधा."</em></p>
            <h4>सर्वात महत्त्वाचा नियम:</h4>
            <div class="safety-box warning">
              <strong>महावितरणचा नियम:</strong> वीज मंडळ (MSEDCL) कधीही रात्री ९:३० वाजता वीज कापत नाही आणि कोणत्याही अधिकाऱ्याचा वैयक्तिक १० अंकी मोबाईल नंबर मेसेजमध्ये देत नाही.
            </div>
            <h4>तुम्ही काय करावे:</h4>
            <ul>
              <li>मेसेजमध्ये दिलेल्या १० अंकी मोबाईल नंबरवर कधीही फोन करू नका.</li>
              <li>"₹१० बिल अपडेट फी" भरण्यासाठी कोणत्याही लिंकवर क्लिक करू नका.</li>
              <li>नेहमी महावितरणच्या अधिकृत ॲपवर किंवा कार्यालयात जाऊनच बिलाची खात्री करा.</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 3: Electricity Bill Disconnection Panic SMS. Thousands of families receive a fake message stating: Your electricity connection will be cut tonight at 9:30 PM because your previous month bill was not updated. Call this 10-digit number immediately. If you call that number, the scammer asks you to install an app or pay a 10 rupee update fee, and steals your entire bank balance. Remember: State electricity boards never cut power at night and never use personal 10-digit mobile numbers for support. Ignore such messages completely.',
          hi: 'मॉड्यूल 3: रात में बिजली कटने के फर्जी एसएमएस से बचाव। हजारों परिवारों को एक नकली संदेश भेजा जाता है कि आज रात साढ़े नौ बजे आपके घर की बिजली काट दी जाएगी क्योंकि पिछला बिल अपडेट नहीं हुआ है, तुरंत इस दस अंकों के नंबर पर फोन करें। जब आप उस नंबर पर फोन करते हैं, तो ठग दस रुपये का रिचार्ज या ऐप डाउनलोड करवा कर आपका पूरा बैंक खाता खाली कर देते हैं। याद रखें: बिजली विभाग कभी रात में बिजली नहीं काटता और न ही निजी मोबाइल नंबर देता है। ऐसे संदेशों को तुरंत अनदेखा करें।',
          mr: 'मॉड्यूल ३: रात्री वीज कापली जाण्याच्या बनावट मेसेजपासून बचाव. अनेक कुटुंबांना असा मेसेज येतो की मागील बिल अपडेट नसल्यामुळे आज रात्री साडेनऊ वाजता तुमची वीज कापली जाईल, तात्काळ या दहा अंकी नंबरवर फोन करा. तुम्ही फोन केल्यास भामटे दहा रुपये भरण्याच्या बहाण्याने तुमचा बँक पिन चोरून संपूर्ण खाते रिकामे करतात. लक्षात ठेवा: महावितरण कधीही रात्री वीज कापत नाही आणि वैयक्तिक मोबाईल नंबर देत नाही. अशा मेसेजकडे पूर्णपणे दुर्लक्ष करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: An SMS from a 10-digit phone number says power will be cut at 9:30 PM tonight unless you call them. What is the safest step?',
            hi: 'त्वरित अभ्यास: एक 10-अंकों के नंबर से आए SMS में लिखा है कि आज रात 9:30 बजे बिजली कट जाएगी। सबसे सुरक्षित कदम क्या है?',
            mr: 'झटपट सराव: एका १०-अंकी नंबरवरून आलेल्या मेसेजमध्ये आज रात्री ९:३० वाजता वीज कापली जाईल असे लिहिले आहे. सर्वात सुरक्षित कृती कोणती?'
          },
          options: [
            { text: { en: 'Ignore the SMS number and check your official electricity bill paper or official app.', hi: 'SMS के नंबर को अनदेखा करें और अपने असली बिजली बिल या आधिकारिक ऐप को देखें।', mr: 'मेसेजमधील नंबरकडे दुर्लक्ष करा आणि अधिकृत महावितरण ॲपवर बिल तपासा.' }, correct: true },
            { text: { en: 'Call the 10-digit number and pay ₹10 via UPI.', hi: 'उस नंबर पर कॉल करें और ₹10 भेज दें।', mr: 'त्या नंबरवर फोन करून ₹१० पाठवावेत.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Never call personal 10-digit mobile numbers inside disconnection panic messages.',
            hi: 'सही जवाब! बिजली कटने के डरावने SMS में दिए गए निजी नंबरों पर कभी कॉल न करें।',
            mr: 'बरोबर उत्तर! वीज कापण्याच्या धमकीच्या मेसेजमधील खाजगी नंबरवर कधीही कॉल करू नका.'
          }
        }
      },
      {
        moduleNumber: 4,
        audioFiles: {
          en: 'audio/course-1/module-4/english.mp3',
          hi: 'audio/course-1/module-4/hindi.mp3',
          mr: 'audio/course-1/module-4/marathi.mp3'
        },
        title: {
          en: 'Module 4: The 2-Person Verification Rule',
          hi: 'मॉड्यूल 4: 2-व्यक्ति सत्यापन का सुनहरा नियम',
          mr: 'मॉड्यूल ४: २-व्यक्ती पडताळणीचा सुवर्ण नियम'
        },
        summary: {
          en: 'A simple habit that prevents 99% of cyber frauds for senior citizens.',
          hi: 'एक ऐसी सरल आदत जो बुजुर्गों को 99% साइबर ठगी से बचा लेती है।',
          mr: 'एक अशी सोपी सवय जी ज्येष्ठ नागरिकांना ९९% सायबर फसवणुकीपासून वाचवते.'
        },
        content: {
          en: `
            <h4>Why Scammers Isolate You:</h4>
            <p>Cyber fraudsters always instruct seniors: <em>"Do not tell your children or relatives; this matter is classified."</em> They do this so nobody can warn you.</p>
            <h4>The 2-Person Golden Rule:</h4>
            <div class="safety-box success">
              <strong>Pause & Consult:</strong> Never execute any financial transfer, bank details sharing, or remote app installation without consulting at least ONE other person (son, daughter, spouse, trusted neighbour, or bank branch manager).
            </div>
            <ul>
              <li>Keep local police and <strong>1930</strong> saved in speed dial on your phone.</li>
              <li>Enable biometric lock on your Aadhaar card using the mAadhaar app.</li>
              <li>Set a comfortable daily UPI limit on your mobile banking.</li>
            </ul>
          `,
          hi: `
            <h4>ठग आपको अकेला क्यों करते हैं:</h4>
            <p>साइबर ठग हमेशा बुजुर्गों से कहते हैं: <em>"यह गुप्त सरकारी मामला है, अपने बेटे-बेटी या किसी पड़ोसी को मत बताना।"</em> वे ऐसा इसलिए करते हैं ताकि कोई आपको सच न बता सके।</p>
            <h4>2-व्यक्ति का सुनहरा नियम:</h4>
            <div class="safety-box success">
              <strong>रुकें और सलाह लें:</strong> किसी भी अनजान कॉलर के कहने पर पैसे भेजने या कोई ऐप डाउनलोड करने से पहले परिवार के कम से कम एक सदस्य (बेटे, बेटी, जीवनसाथी या भरोसेमंद पड़ोसी) से अवश्य बात करें।
            </div>
            <ul>
              <li>अपने फोन में राष्ट्रीय साइबर हेल्पलाइन <strong>1930</strong> नंबर हमेशा सेव रखें।</li>
              <li>यदि गलती से पैसे कट जाएं, तो तुरंत पहले 1 घंटे (गोल्डन ऑवर) में 1930 पर कॉल करें।</li>
            </ul>
          `,
          mr: `
            <h4>भामटे तुम्हाला एकटे का पाडतात:</h4>
            <p>सायबर भामटे नेहमी ज्येष्ठ नागरिकांना सांगतात: <em>"ही अत्यंत गुप्त सरकारी बाब आहे, तुमच्या मुलांना किंवा शेजाऱ्यांना सांगू नका."</em> तुम्हाला कोणीही सावध करू नये म्हणूनच ते असे सांगतात.</p>
            <h4>२-व्यक्ती पडताळणीचा सुवर्ण नियम:</h4>
            <div class="safety-box success">
              <strong>थांबा आणि सल्ला घ्या:</strong> कोणत्याही अनोळखी फोनवरून पैसे पाठवण्यापूर्वी किंवा कोणतेही ॲप डाउनलोड करण्यापूर्वी घरातील किमान एका व्यक्तीशी (मुलगा, मुलगी, जोडीदार किंवा विश्वासू शेजारी) नक्की बोला.
            </div>
            <ul>
              <li>आपल्या फोनमध्ये राष्ट्रीय सायबर हेल्पलाइन क्रमांक <strong>1930</strong> नेहमी सेव्ह ठेवा.</li>
              <li>फसवणूक झाल्यास पहिल्या १ तासात (गोल्डन अवरमध्ये) १९३० वर तक्रार करा.</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 4: The 2-Person Verification Rule. Why do scammers always tell senior citizens not to inform their children or spouse? Because the moment you talk to a second person, the fear breaks and the scam is exposed! Make this your unbreakable household rule today: Never send money, never share an OTP, and never install an app requested by a phone caller without speaking to at least one trusted family member or neighbor first. Save the number 1930 on your phone today.',
          hi: 'मॉड्यूल 4: दो-व्यक्ति सत्यापन का सुनहरा नियम। ठग हमेशा बुजुर्गों से यह क्यों कहते हैं कि अपने बच्चों या परिवार को मत बताना? क्योंकि जैसे ही आप किसी दूसरे व्यक्ति से बात करते हैं, डर खत्म हो जाता है और ठगी तुरंत पकड़ी जाती है! आज ही यह नियम बनाएं: किसी भी अनजान फोन कॉलर के कहने पर बिना अपने बेटे, बेटी या पड़ोसी से पूछे कभी पैसे न भेजें और न ओटीपी बताएं। अपने फोन में 1930 नंबर आज ही सेव करें।',
          mr: 'मॉड्यूल ४: दोन-व्यक्ती पडताळणीचा सुवर्ण नियम. सायबर भामटे नेहमी ज्येष्ठ नागरिकांना मुलांना किंवा कुटुंबाला सांगू नका असे का म्हणतात? कारण तुम्ही दुसऱ्या व्यक्तीशी बोलताच तुमची भीती नाहीशी होते आणि फसवणूक उघडकीस येते! आजच हा नियम ठरवा: घरातील किमान एका व्यक्तीला विचारल्याशिवाय कोणत्याही अनोळखी कॉलरला पैसे पाठवू नका किंवा ओटीपी सांगू नका. आपल्या फोनमध्ये १९३० हा क्रमांक नक्की सेव्ह करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: What is the 2-Person Verification Rule?',
            hi: 'त्वरित अभ्यास: 2-व्यक्ति सत्यापन नियम क्या है?',
            mr: 'झटपट सराव: २-व्यक्ती पडताळणी नियम म्हणजे काय?'
          },
          options: [
            { text: { en: 'Always consult at least one trusted family member before acting on any urgent call or financial request.', hi: 'किसी भी डरावने या पैसे मांगने वाले कॉल पर कदम उठाने से पहले परिवार के कम से कम एक सदस्य से सलाह लेना।', mr: 'कोणत्याही तातडीच्या किंवा पैशांच्या कॉलवर कृती करण्यापूर्वी कुटुंबातील किमान एका व्यक्तीचा सल्ला घेणे.' }, correct: true },
            { text: { en: 'Sharing your password with two strangers.', hi: 'दो अजनबियों को अपना पासवर्ड बताना।', mr: 'दोन अनोळखी लोकांना पासवर्ड सांगणे.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Consulting one family member breaks the scammer\'s urgency trap 99% of the time.',
            hi: 'बिल्कुल सही! परिवार के एक सदस्य से बात करते ही ठग का जाल तुरंत टूट जाता है।',
            mr: 'अगदी बरोबर! कुटुंबातील सदस्याशी बोलल्यामुळे भामट्याचा डाव ९९% वेळा तिथेच फसतो.'
          }
        }
      }
    ],
    quiz: {
      question: {
        en: 'You receive a WhatsApp video call from a man dressed in a police uniform who claims you are under "Digital Arrest" and must transfer ₹1,00,000 to a police clearing account. What should you do?',
        hi: 'आपको पुलिस की वर्दी पहने एक व्यक्ति का व्हाट्सएप वीडियो कॉल आता है जो कहता है कि आप "डिजिटल अरेस्ट" में हैं और आपको पुलिस जांच खाते में ₹1,00,000 ट्रांसफर करने होंगे। आपको क्या करना चाहिए?',
        mr: 'तुम्हाला पोलिसांच्या गणवेशातील एका व्यक्तीचा व्हॉट्सॲप व्हिडिओ कॉल येतो आणि तो म्हणतो की तुम्ही "डिजिटल अरेस्ट" मध्ये आहात व तपासणी खात्यात ₹१,००,००० पाठवा. तुम्ही काय करावे?'
      },
      options: [
        { en: 'Transfer the money quickly to clear your name.', hi: 'अपना नाम साफ करने के लिए तुरंत पैसे भेज दें।', mr: 'तुमचे नाव क्लिअर करण्यासाठी लगेच पैसे पाठवावेत.' },
        { en: 'Disconnect immediately, transfer nothing, inform your family, and dial 1930 to report the fraud.', hi: 'तुरंत कॉल काटें, एक रुपया भी न भेजें, परिवार को बताएं और 1930 डायल करें।', mr: 'तात्काळ कॉल कट करा, एकही रुपया पाठवू नका, कुटुंबाला सांगा आणि १९३० वर तक्रार करा.' },
        { en: 'Ask the caller to reduce the amount.', hi: 'कॉलर से रकम कम करने की विनती करें।', mr: 'कॉलरला रक्कम कमी करण्याची विनंती करावी.' },
        { en: 'Install whatever remote app the caller requests.', hi: 'कॉलर जो भी ऐप कहे उसे इंस्टॉल कर लें।', mr: 'कॉलर सांगेल ते ॲप फोनमध्ये इन्स्टॉल करावे.' }
      ],
      correct: 1,
      explanation: {
        en: 'Under Indian law, there is no such thing as "Digital Arrest". Disconnect immediately, never transfer money, and report to 1930!',
        hi: 'भारतीय कानून में "डिजिटल अरेस्ट" जैसी कोई चीज़ नहीं है। तुरंत फोन काटें, पैसे कभी न भेजें और 1930 पर रिपोर्ट करें!',
        mr: 'भारतीय कायद्यात "डिजिटल अरेस्ट" नावाचा प्रकारच नाही. तात्काळ कॉल कट करा, पैसे कधीही पाठवू नका आणि १९३० वर तक्रार करा!'
      }
    }
  },

  // ==========================================================================
  // COURSE 2: STUDENTS & YOUTH
  // ==========================================================================
  {
    id: 'course-students-youth',
    courseNumber: 2,
    category: 'students',
    badge: { en: 'Students & Youth', hi: 'विद्यार्थी और युवा', mr: 'विद्यार्थी आणि तरुण' },
    badgeIcon: '🎓',
    badgeColor: '#1d4ed8',
    badgeBg: '#dbeafe',
    image: 'assets/images/course-students-youth.jpg',
    duration: '30 Mins',
    level: { en: 'All Students & Youth', hi: 'सभी विद्यार्थी और युवा', mr: 'सर्व विद्यार्थी आणि तरुण' },
    modulesCount: 4,
    certificateTitle: 'Youth Cyber Defender',
    title: {
      en: 'Cyber Defense for Students & Job Seekers',
      hi: 'विद्यार्थियों और नौकरी चाहने वालों के लिए साइबर सुरक्षा',
      mr: 'विद्यार्थी आणि तरुण नोकरी शोधणाऱ्यांसाठी सायबर संरक्षण'
    },
    subtitle: {
      en: 'Unmask fake work-from-home Telegram tasks, illegal instant loan app blackmail, placement scams, and identity theft.',
      hi: 'टेलीग्राम वर्क-फ्रॉम-होम टास्क स्कैम, अवैध लोन ऐप ब्लैकमेल और फर्जी नौकरी पत्रों से बचाव सीखें।',
      mr: 'टेलिग्रामवरील बनावट कामे, बेकायदेशीर कर्ज ॲप्सची ब्लॅकमेलिंग आणि नोकरीच्या फसवणुकीपासून स्वतःला वाचवा.'
    },
    description: {
      en: 'College students and young job seekers are eager for financial independence. Scammers exploit this by offering fake part-time online jobs, instant uncollateralized loans, or paid campus placement letters. This course prepares youth to spot these traps instantly.',
      hi: 'युवा वित्तीय स्वतंत्रता चाहते हैं। धोखेबाज ऑनलाइन पार्ट-टाइम जॉब्स और तुरंत लोन का लालच देकर उन्हें जाल में फंसाते हैं। यह कोर्स आपको इन खतरों से सुरक्षित रखता है।',
      mr: 'कॉलेजचे विद्यार्थी आणि नोकरी शोधणारे तरुण स्वावलंबी होण्याचा प्रयत्न करतात. भामटे पार्ट-टाइम काम आणि झटपट कर्जाचे आमिष दाखवून फसवतात. हा अभ्यासक्रम तुम्हाला सावध करतो.'
    },
    keySkills: {
      en: [
        'Spotting Telegram YouTube/Google review tasks & VIP deposit traps',
        'Protecting yourself from extortion by unapproved micro-loan APKs',
        'Defending against social media account takeover & sextortion',
        'Verifying genuine job offer letters without paying "laptop security deposits"'
      ],
      hi: [
        'टेलीग्राम यूट्यूब/होटल रिव्यू टास्क और VIP डिपॉजिट जाल की पहचान करना',
        'अवैध लोन ऐप्स (APK) के फोटो मॉर्फिंग और ब्लैकमेल से बचना',
        'इंस्टाग्राम/व्हाट्सएप अकाउंट हैकिंग और वीडियो कॉल ब्लैकमेल से सुरक्षा',
        'बिना कोई शुल्क दिए असली जॉब ऑफर लेटर की जांच करना'
      ],
      mr: [
        'टेलिग्राम यूट्यूब/हॉटेल रिव्ह्यू टास्क आणि VIP डिपॉझिट फसवणूक ओळखणे',
        'बेकायदेशीर लोन ॲप्सच्या ब्लॅकमेलिंगपासून स्वतःचा बचाव करणे',
        'इंस्टाग्राम/व्हॉट्सॲप हॅकिंग आणि सेक्सटॉर्शन कॉल्सपासून संरक्षण',
        'कोणतीही फी न भरता खऱ्या नोकरीच्या पत्राची पडताळणी करणे'
      ]
    },
    modules: [
      {
        moduleNumber: 1,
        audioFiles: {
          en: 'audio/course-2/module-1/english.mp3',
          hi: 'audio/course-2/module-1/hindi.mp3',
          mr: 'audio/course-2/module-1/marathi.mp3'
        },
        title: {
          en: 'Module 1: Deceptive Work-From-Home & Telegram Review Tasks',
          hi: 'मॉड्यूल 1: फर्जी वर्क-फ्रॉम-होम और टेलीग्राम रिव्यू टास्क',
          mr: 'मॉड्यूल १: बनावट वर्क-फ्रॉम-होम आणि टेलिग्राम रिव्ह्यू टास्क'
        },
        summary: {
          en: 'Exposing the illusion of earning ₹3,000 daily by liking YouTube videos.',
          hi: 'यूट्यूब वीडियो लाइक करके रोज़ ₹3,000 कमाने के झूठे जाल का पर्दाफाश।',
          mr: 'यूट्यूब व्हिडिओ लाईक करून दररोज ₹३,००० कमावण्याच्या खोट्या जाळ्याचा पर्दाफाश.'
        },
        content: {
          en: `
            <h4>How the Trap Works:</h4>
            <p>You receive a message on WhatsApp or Telegram: <em>"Earn ₹50 per YouTube like or Google Map hotel review from home."</em> They actually pay you ₹150 or ₹300 via UPI on the first day to win your complete trust.</p>
            <h4>The Trap Closes:</h4>
            <p>Next, you are added to a "VIP Task Group" where they demand you deposit ₹2,000 to unlock ₹3,000, then ₹10,000, then ₹50,000. When you try to withdraw, they freeze your account.</p>
            <div class="safety-box alert">
              <strong>Golden Truth:</strong> Any job that asks YOU to pay money to receive tasks or withdraw salary is a 100% FRAUD! Legitimate employers pay you; they NEVER ask for deposits.
            </div>
          `,
          hi: `
            <h4>यह जाल कैसे काम करता है:</h4>
            <p>आपको व्हाट्सएप या टेलीग्राम पर संदेश आता है: <em>"घर बैठे यूट्यूब वीडियो लाइक करें या होटल को 5-स्टार रेटिंग दें और रोज़ ₹3,000 कमाएं।"</em> आपका भरोसा जीतने के लिए वे पहले दिन सच में आपके खाते में ₹150 या ₹300 भेज देते हैं।</p>
            <h4>जब जाल बंद होता है:</h4>
            <p>इसके बाद आपको "VIP टेलीग्राम ग्रुप" में जोड़कर "प्रीपेड टास्क" के नाम पर पहले ₹2,000, फिर ₹10,000 और फिर ₹50,000 जमा करने को कहा जाता है। बाद में आपका सारा पैसा ब्लॉक कर दिया जाता है।</p>
            <div class="safety-box alert">
              <strong>सुनहरा नियम:</strong> जो काम आपसे पहले पैसे जमा करने (Deposit) को कहे, वह 100% साइबर धोखाधड़ी है! असली नौकरी में आपको वेतन मिलता है, आपसे पैसे नहीं मांगे जाते।
            </div>
          `,
          mr: `
            <h4>हे जाळे कसे काम करते:</h4>
            <p>तुम्हाला व्हॉट्सॲप किंवा टेलिग्रामवर मेसेज येतो: <em>"घरबसल्या यूट्यूब व्हिडिओ लाईक करा किंवा हॉटेलला रेटिंग द्या आणि रोज ₹३,००० कमवा."</em> तुमचा विश्वास जिंकण्यासाठी ते पहिल्या दिवशी खरोखर ₹१५० किंवा ₹३०० तुमच्या खात्यात पाठवतात.</p>
            <h4>फसवणुकीचा दुसरा टप्पा:</h4>
            <p>यानंतर तुम्हाला "VIP ग्रुप" मध्ये जोडून आधी ₹२,०००, मग ₹१०,००० आणि ₹५०,००० डिपॉझिट भरायला लावतात आणि शेवटी तुमचे सर्व पैसे अडकवून ठेवतात.</p>
            <div class="safety-box alert">
              <strong>सुवर्ण नियम:</strong> कोणतीही नोकरी किंवा काम जर तुमच्याकडूनच आधी पैसे भरायला सांगत असेल तर ती १००% सायबर फसवणूक आहे!
            </div>
          `
        },
        audioScript: {
          en: 'Module 1: Deceptive Work-From-Home and Telegram Review Tasks. Scammers target college students with messages offering 3,000 rupees daily just for liking YouTube videos or rating hotels on Google Maps. On day one, they actually send 150 or 300 rupees to your UPI account as psychological bait. Once you trust them, they ask you to deposit 3,000 or 10,000 rupees for Prepaid VIP Tasks and steal everything you deposit. Remember: Real jobs pay you; they never ask you to deposit money.',
          hi: 'मॉड्यूल 1: फर्जी वर्क-फ्रॉम-होम और टेलीग्राम रिव्यू टास्क। साइबर ठग छात्रों को यूट्यूब वीडियो लाइक करने के बदले रोज़ तीन हजार रुपये कमाने का लालच देते हैं। आपका भरोसा जीतने के लिए वे पहले दिन सच में एक सौ पचास या तीन सौ रुपये आपके यूपीआई खाते में भेजते हैं। लेकिन अगले ही दिन वे वीआईपी टास्क के नाम पर आपसे हजारों रुपये जमा करवा लेते हैं और फिर खाता बंद कर देते हैं। याद रखें: असली नौकरी आपको पैसे देती है, आपसे कभी पैसे जमा नहीं करवाती।',
          mr: 'मॉड्यूल १: बनावट वर्क-फ्रॉम-होम आणि टेलिग्राम रिव्ह्यू टास्क. सायबर भामटे विद्यार्थ्यांना यूट्यूब व्हिडिओ लाईक करून रोज तीन हजार रुपये कमावण्याचे आमिष दाखवतात. तुमचा विश्वास जिंकण्यासाठी ते पहिल्या दिवशी खरोखर दीडशे किंवा तीनशे रुपये तुमच्या खात्यात पाठवतात. त्यानंतर मात्र व्हीआयपी टास्कच्या नावाखाली तुमच्याकडून हजारो रुपये डिपॉझिट करून घेतात आणि फसवणूक करतात. लक्षात ठेवा: खरी नोकरी तुम्हाला पगार देते, तुमच्याकडून कधीही डिपॉझिट मागत नाही.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A Telegram group paid you ₹200 for liking videos, and now asks you to deposit ₹3,000 to unlock a ₹4,500 payout. What should you do?',
            hi: 'त्वरित अभ्यास: एक टेलीग्राम ग्रुप ने वीडियो लाइक करने पर आपको ₹200 दिए, और अब ₹4,500 पाने के लिए ₹3,000 जमा करने को कह रहा है। आप क्या करेंगे?',
            mr: 'झटपट सराव: एका टेलिग्राम ग्रुपने व्हिडिओ लाईक केल्याबद्दल तुम्हाला ₹२०० दिले, आणि आता ₹४,५०० मिळवण्यासाठी ₹३,००० डिपॉझिट मागत आहेत. तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Stop immediately, pay ₹0, and block/exit the group.', hi: 'तुरंत रुकें, ₹0 भेजें और ग्रुप को ब्लॉक करके बाहर निकल जाएं।', mr: 'तात्काळ थांबा, ₹० भरा आणि ग्रुप ब्लॉक करून बाहेर पडा.' }, correct: true },
            { text: { en: 'Deposit ₹3,000 to earn the bonus.', hi: 'बोनस पाने के लिए ₹3,000 जमा कर दें।', mr: 'बोनस मिळवण्यासाठी ₹३,००० भरावेत.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! The initial ₹200 is bait. Never deposit a single rupee into prepaid task groups.',
            hi: 'बिल्कुल सही! शुरुआती ₹200 केवल चारा होता है। प्रीपेड टास्क में कभी पैसे न लगाएं।',
            mr: 'अगदी बरोबर! सुरुवातीचे ₹२०० फक्त आमिष असते. प्रीपेड टास्कमध्ये एकही रुपया गुंतवू नका.'
          }
        }
      },
      {
        moduleNumber: 2,
        audioFiles: {
          en: 'audio/course-2/module-2/english.mp3',
          hi: 'audio/course-2/module-2/hindi.mp3',
          mr: 'audio/course-2/module-2/marathi.mp3'
        },
        title: {
          en: 'Module 2: Predatory Micro-Loan App Blackmail',
          hi: 'मॉड्यूल 2: अवैध इंस्टेंट लोन ऐप्स और ब्लैकमेल से बचाव',
          mr: 'मॉड्यूल २: बेकायदेशीर झटपट कर्ज (Loan) ॲप्स आणि ब्लॅकमेलिंगपासून बचाव'
        },
        summary: {
          en: 'How illegal loan APKs harvest your contacts and photos to blackmail you.',
          hi: 'अवैध लोन ऐप्स आपके फोन के कॉन्टैक्ट्स और फोटो चुराकर कैसे ब्लैकमेल करते हैं।',
          mr: 'बेकायदेशीर लोन ॲप्स तुमचे कॉन्टॅक्ट्स आणि फोटो चोरून कसे ब्लॅकमेल करतात.'
        },
        content: {
          en: `
            <h4>The Danger of Instant Cash APKs:</h4>
            <p>Seeing an ad for "Instant ₹5,000 loan in 2 minutes without documents", a user installs an unregulated loan app. Upon installation, the app steals your <strong>Contacts List and Photo Gallery</strong>.</p>
            <h4>How to Stay Protected:</h4>
            <div class="safety-box warning">
              <ul>
                <li>Never download loan apps from SMS/WhatsApp links; borrow only from RBI-registered banks/NBFCs.</li>
                <li>Never grant Contacts or Gallery permission to financial apps.</li>
                <li>If blackmailed, do NOT pay! Paying leads to endless extortion. Report immediately on <strong>1930</strong> and cybercrime.gov.in.</li>
              </ul>
            </div>
          `,
          hi: `
            <h4>अवैध लोन ऐप्स का जाल:</h4>
            <p>"बिना कागजात 2 मिनट में ₹5,000 का लोन" जैसे विज्ञापन देखकर जैसे ही कोई यह ऐप डाउनलोड करता है, वह ऐप फोन की <strong>पूरी कॉन्टैक्ट लिस्ट और फोटो गैलरी</strong> चुरा लेता है।</p>
            <h4>बचाव के नियम:</h4>
            <div class="safety-box warning">
              <ul>
                <li>कभी भी अनजान लिंक से लोन ऐप डाउनलोड न करें और किसी ऐप को Contacts/Gallery की अनुमति न दें।</li>
                <li>यदि कोई फोटो एडिट करके ब्लैकमेल करे, तो <strong>एक रुपया भी न दें!</strong> पैसे देने से ब्लैकमेल कभी नहीं रुकता। तुरंत 1930 और cybercrime.gov.in पर शिकायत दर्ज करें।</li>
              </ul>
            </div>
          `,
          mr: `
            <h4>बेकायदेशीर लोन ॲप्सचा धोका:</h4>
            <p>"कागदपत्रांशिवाय २ मिनिटांत ₹५,००० कर्ज" अशी जाहिरात पाहून ॲप इन्स्टॉल केल्यास, ते ॲप तुमच्या फोनमधील <strong>सर्व कॉन्टॅक्ट नंबर आणि फोटो गॅलरी</strong> चोरते.</p>
            <h4>संरक्षणाचे नियम:</h4>
            <div class="safety-box warning">
              <ul>
                <li>कोणत्याही कर्ज ॲपला कॉन्टॅक्ट्स किंवा गॅलरीची परवानगी देऊ नका.</li>
                <li>कोणी फोटो मॉर्फ करून ब्लॅकमेल करत असल्यास <strong>अजिबात पैसे देऊ नका!</strong> तात्काळ १९३० आणि cybercrime.gov.in वर तक्रार नोंदवा.</li>
              </ul>
            </div>
          `
        },
        audioScript: {
          en: 'Module 2: Predatory Micro-Loan App Blackmail. Unregistered instant loan apps advertise 5,000 rupees in two minutes without documents. When installed, they demand access to your phone contacts and photo gallery. Even if you repay the loan, they morph your photos and threaten to send them to your parents and college contacts. Remember: Never grant contacts or gallery permission to loan apps, and if blackmailed, never pay money. Report immediately to 1930 and cybercrime.gov.in.',
          hi: 'मॉड्यूल 2: अवैध इंस्टेंट लोन ऐप्स और ब्लैकमेल से बचाव। बिना कागजात दो मिनट में लोन देने का दावा करने वाले नकली ऐप्स आपके फोन के कॉन्टैक्ट्स और फोटो गैलरी चुरा लेते हैं। बाद में वे आपकी फोटो के साथ छेड़छाड़ करके आपके परिवार और दोस्तों को भेजने की धमकी देकर पैसे वसूलते हैं। याद रखें: किसी भी अनजान लोन ऐप को कॉन्टैक्ट्स या गैलरी की अनुमति न दें, और यदि कोई ब्लैकमेल करे तो डरकर पैसे बिल्कुल न दें। तुरंत 1930 पर शिकायत करें।',
          mr: 'मॉड्यूल २: बेकायदेशीर झटपट कर्ज ॲप्स आणि ब्लॅकमेलिंगपासून बचाव. दोन मिनिटांत कर्ज देणारी अनधिकृत ॲप्स तुमच्या फोनमधील कॉन्टॅक्ट नंबर आणि फोटो गॅलरी चोरतात. त्यानंतर चुकीचे फोटो तयार करून ते तुमच्या कुटुंबाला आणि मित्रांना पाठवण्याची धमकी देऊन पैसे उकळतात. लक्षात ठेवा: कोणत्याही कर्ज ॲपला गॅलरी किंवा कॉन्टॅक्ट्सची परवानगी देऊ नका, आणि ब्लॅकमेलिंग झाल्यास एकही रुपया न देता तात्काळ १९३० वर तक्रार करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: If an illegal loan app threatens to message your contacts unless you pay ₹20,000, what is the right step?',
            hi: 'त्वरित अभ्यास: यदि कोई फर्जी लोन ऐप आपके कॉन्टैक्ट्स को बदनाम करने की धमकी देकर ₹20,000 मांगे, तो सही कदम क्या है?',
            mr: 'झटपट सराव: जर एखादे बनावट लोन ॲप तुमच्या कॉन्टॅक्ट्सना मेसेज करण्याची धमकी देऊन ₹२०,००० मागत असेल, तर योग्य कृती कोणती?'
          },
          options: [
            { text: { en: 'Do NOT pay any money; uninstall the app, inform your family, and report on 1930 / cybercrime.gov.in.', hi: 'एक रुपया भी न दें; ऐप हटाएं, परिवार को सच बताएं और तुरंत 1930 / cybercrime.gov.in पर शिकायत करें।', mr: 'एकही रुपया देऊ नका; ॲप काढून टाका, घरच्यांना सांगा आणि १९३० / cybercrime.gov.in वर तक्रार करा.' }, correct: true },
            { text: { en: 'Pay ₹20,000 hoping they will stop.', hi: 'उन्हें ₹20,000 दे दें।', mr: 'त्यांना ₹२०,००० पाठवून द्यावेत.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Extortionists always demand more if you pay once. Reporting to cyber police stops them.',
            hi: 'बिल्कुल सही! ब्लैकमेलर को पैसे देने से उनकी मांग और बढ़ जाती है। साइबर पुलिस में शिकायत करना ही सही रास्ता है।',
            mr: 'अगदी बरोबर! ब्लॅकमेलरला पैसे दिल्यास त्यांची मागणी कधीही थांबत नाही. सायबर पोलिसांत तक्रार करणे हाच योग्य मार्ग आहे.'
          }
        }
      },
      {
        moduleNumber: 3,
        audioFiles: {
          en: 'audio/course-2/module-3/english.mp3',
          hi: 'audio/course-2/module-3/hindi.mp3',
          mr: 'audio/course-2/module-3/marathi.mp3'
        },
        title: {
          en: 'Module 3: Social Media Account Hijacking & Sextortion Defense',
          hi: 'मॉड्यूल 3: सोशल मीडिया अकाउंट हैकिंग और वीडियो कॉल ब्लैकमेल से सुरक्षा',
          mr: 'मॉड्यूल ३: सोशल मीडिया हॅकिंग आणि व्हिडिओ कॉल ब्लॅकमेलिंगपासून संरक्षण'
        },
        summary: {
          en: 'Protecting your Instagram, Snapchat, and WhatsApp profiles from takeover.',
          hi: 'अपने इंस्टाग्राम, स्नैपचैट और व्हाट्सएप अकाउंट को हैक होने से बचाएं।',
          mr: 'तुमचे इंस्टाग्राम, स्नॅपचॅट आणि व्हॉट्सॲप अकाउंट हॅक होण्यापासून वाचवा.'
        },
        content: {
          en: `
            <h4>Two Common Youth Traps:</h4>
            <ul>
              <li><strong>The "Send me the code" Trap:</strong> A friend's hacked Instagram/WhatsApp messages you saying "I accidentally sent a 6-digit contest code to your number, forward it to me." That code is YOUR account reset OTP!</li>
              <li><strong>Unknown Video Call Honeytraps:</strong> Never accept video calls from strangers on WhatsApp/Instagram.</li>
            </ul>
            <div class="safety-box success">
              <strong>Protection:</strong> Enable Two-Factor Authentication (2FA) on Instagram, WhatsApp, and Gmail today.
            </div>
          `,
          hi: `
            <h4>युवाओं को फंसाने के दो मुख्य तरीके:</h4>
            <ul>
              <li><strong>"मेरे नंबर का कोड तुम्हारे फोन पर गया है" जाल:</strong> किसी दोस्त के हैक हुए अकाउंट से मैसेज आता है कि "गलती से मेरा 6-अंकों का कोड तुम्हारे नंबर पर चला गया है, मुझे भेज दो।" वह कोड वास्तव में आपके खुद के अकाउंट का पासवर्ड रीसेट OTP होता है!</li>
              <li><strong>अनजान वीडियो कॉल जाल:</strong> व्हाट्सएप या इंस्टाग्राम पर किसी भी अजनबी का वीडियो कॉल कभी रिसीव न करें।</li>
            </ul>
          `,
          mr: `
            <h4>तरुणांना फसवण्याचे दोन मुख्य प्रकार:</h4>
            <ul>
              <li><strong>"माझा कोड तुझ्या नंबरवर आला आहे" सापळा:</strong> मित्राच्या हॅक झालेल्या खात्यावरून मेसेज येतो की "चुकून माझा ६ अंकी कोड तुझ्या नंबरवर आला आहे, मला पाठव." तो कोड प्रत्यक्षात तुमच्याच खात्याचा पासवर्ड रिसेट OTP असतो!</li>
              <li><strong>अनोळखी व्हिडिओ कॉल:</strong> व्हॉट्सॲप किंवा इंस्टाग्रामवर अनोळखी व्यक्तीचा व्हिडिओ कॉल कधीही उचलू नका.</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 3: Social Media Account Hijacking and Video Call Defense. If a friend messages you on Instagram or WhatsApp asking you to forward a 6-digit code sent to your phone, stop immediately! Their account is already hacked, and that 6-digit code is the reset key for your own account. Also, never accept video calls from unknown accounts on social media, and enable Two-Factor Authentication on all your apps today.',
          hi: 'मॉड्यूल 3: सोशल मीडिया अकाउंट हैकिंग से सुरक्षा। यदि कोई दोस्त इंस्टाग्राम या व्हाट्सएप पर मैसेज करके कहे कि गलती से मेरा छह अंकों का कोड तुम्हारे फोन पर आ गया है, उसे मुझे भेज दो, तो तुरंत रुक जाएं! आपके दोस्त का अकाउंट पहले ही हैक हो चुका है और वह कोड आपके खुद के अकाउंट को हैक करने की चाबी है। साथ ही, किसी भी अजनबी का वीडियो कॉल रिसीव न करें और आज ही टू-स्टेप वेरिफिकेशन चालू करें।',
          mr: 'मॉड्यूल ३: सोशल मीडिया अकाउंट हॅकिंगपासून संरक्षण. जर एखाद्या मित्राने इंस्टाग्राम किंवा व्हॉट्सॲपवर मेसेज करून तुमच्या फोनवर आलेला सहा अंकी कोड मागितला, तर तात्काळ थांबा! तुमच्या मित्राचे खाते आधीच हॅक झाले असून तो कोड तुमचे स्वतःचे खाते हॅक करण्याची किल्ली आहे. तसेच कोणत्याही अनोळखी व्यक्तीचा व्हिडिओ कॉल उचलू नका आणि आजच टू-स्टेप व्हेरिफिकेशन सुरू करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: Your friend messages you on Instagram: "Please send me the 6-digit SMS code that just arrived on your phone." What should you do?',
            hi: 'त्वरित अभ्यास: आपका दोस्त इंस्टाग्राम पर मैसेज करता है: "तुम्हारे फोन पर अभी जो 6-अंकों का कोड आया है, वह मुझे भेज दो।" आप क्या करेंगे?',
            mr: 'झटपट सराव: तुमचा मित्र इंस्टाग्रामवर मेसेज करतो: "तुझ्या फोनवर आत्ता आलेला ६-अंकी कोड मला पाठव." तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Never share the code, and call your friend on a regular phone call to warn them their account is hacked.', hi: 'कोड कभी न भेजें, और दोस्त को सामान्य फोन कॉल करके बताएं कि उसका अकाउंट हैक हो गया है।', mr: 'कोड अजिबात पाठवू नका आणि मित्राला साध्या फोन कॉलवर कळवा की त्याचे खाते हॅक झाले आहे.' }, correct: true },
            { text: { en: 'Send the 6-digit code immediately.', hi: 'तुरंत 6-अंकों का कोड भेज दें।', mr: 'लगेच ६-अंकी कोड पाठवून द्या.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Forwarding that reset link or OTP hands your own Instagram/WhatsApp account over to the hacker.',
            hi: 'सही जवाब! वह कोड भेजते ही आपका खुद का इंस्टाग्राम या व्हाट्सएप अकाउंट हैक हो जाएगा।',
            mr: 'बरोबर उत्तर! तो कोड पाठवल्यास तुमचे स्वतःचे इंस्टाग्राम किंवा व्हॉट्सॲप खाते हॅक होईल.'
          }
        }
      },
      {
        moduleNumber: 4,
        audioFiles: {
          en: 'audio/course-2/module-4/english.mp3',
          hi: 'audio/course-2/module-4/hindi.mp3',
          mr: 'audio/course-2/module-4/marathi.mp3'
        },
        title: {
          en: 'Module 4: Fake Placement & Internship Offer Letters',
          hi: 'मॉड्यूल 4: फर्जी जॉब ऑफर लेटर और रजिस्ट्रेशन फीस की पहचान',
          mr: 'मॉड्यूल ४: बनावट नोकरीचे पत्र (Offer Letter) आणि नोंदणी शुल्क फसवणूक'
        },
        summary: {
          en: 'How to verify company recruiters and avoid paying bogus registration fees.',
          hi: 'असली कंपनी की पहचान कैसे करें और रजिस्ट्रेशन फीस के जाल से कैसे बचें।',
          mr: 'खऱ्या कंपनीची पडताळणी कशी करावी आणि नोंदणी शुल्काच्या फसवणुकीतून कसे वाचावे.'
        },
        content: {
          en: `
            <h4>Red Flags in Job Offers:</h4>
            <ul>
              <li>Recruiter emails from free domains like <code>@gmail.com</code> or <code>@yahoo.com</code> instead of the official company domain.</li>
              <li>Demands payment for "Laptop Security Deposit", "Medical Verification Fee", or "Offer Letter Processing".</li>
            </ul>
            <div class="safety-box success">
              <strong>Zero-Payment Rule:</strong> Genuine companies NEVER charge candidates any money for interviews, training kits, or job offers.
            </div>
          `,
          hi: `
            <h4>फर्जी नौकरी प्रस्ताव के संकेत:</h4>
            <ul>
              <li>कंपनी के आधिकारिक ईमेल के बजाय <code>@gmail.com</code> से ऑफर लेटर आना।</li>
              <li>"लैपटॉप सिक्योरिटी डिपॉजिट", "मेडिकल फीस" या "इंटरव्यू रजिस्ट्रेशन शुल्क" के नाम पर पैसे मांगना।</li>
            </ul>
            <div class="safety-box success">
              <strong>शून्य-शुल्क नियम:</strong> कोई भी प्रतिष्ठित कंपनी या सरकारी विभाग नौकरी देने के लिए कभी एक रुपया भी नहीं मांगता।
            </div>
          `,
          mr: `
            <h4>बनावट नोकरी पत्राची लक्षणे:</h4>
            <ul>
              <li>अधिकृत कंपनीच्या ईमेलऐवजी <code>@gmail.com</code> वरून ऑफर लेटर येणे.</li>
              <li>"लॅपटॉप डिपॉझिट", "मेडिकल फी" किंवा "नोंदणी शुल्क" म्हणून पैशांची मागणी करणे.</li>
            </ul>
            <div class="safety-box success">
              <strong>शून्य-शुल्क नियम:</strong> कोणतीही अधिकृत कंपनी नोकरी देण्यासाठी उमेदवाराकडून एकही रुपया घेत नाही.
            </div>
          `
        },
        audioScript: {
          en: 'Module 4: Fake Placement and Internship Offer Letters. Scammers send PDF offer letters with forged company logos and ask students to pay 2,500 rupees for a laptop security deposit or document verification fee. Remember the Zero-Payment Rule: Genuine companies never ask candidates to pay money for job interviews, uniforms, or laptops. Always check job openings directly on the official company careers website.',
          hi: 'मॉड्यूल 4: फर्जी जॉब ऑफर लेटर और रजिस्ट्रेशन फीस की पहचान। ठग बड़ी कंपनियों के नकली लोगो लगाकर पीडीएफ ऑफर लेटर भेजते हैं और लैपटॉप सिक्योरिटी डिपॉजिट या दस्तावेज जांच के नाम पर ढाई हजार रुपये मांगते हैं। हमेशा याद रखें: कोई भी असली कंपनी नौकरी या इंटरव्यू के लिए कभी पैसे नहीं मांगती।',
          mr: 'मॉड्यूल ४: बनावट नोकरीचे पत्र आणि नोंदणी शुल्क फसवणूक. भामटे मोठ्या कंपन्यांचे बनावट लोगो वापरून ऑफर लेटर पाठवतात आणि लॅपटॉप डिपॉझिट किंवा कागदपत्र तपासणीसाठी अडीच हजार रुपये मागतात. नेहमी लक्षात ठेवा: कोणतीही खरी कंपनी नोकरी किंवा मुलाखतीसाठी उमेदवारांकडून कधीही पैसे मागत नाही.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: You receive a job offer letter asking for ₹1,999 as a "Refundable Laptop Courier Deposit" before joining. Is it genuine?',
            hi: 'त्वरित अभ्यास: आपको एक जॉब ऑफर लेटर मिलता है जिसमें ज्वाइनिंग से पहले "लैपटॉप कूरियर डिपॉजिट" के लिए ₹1,999 मांगे गए हैं। क्या यह असली है?',
            mr: 'झटपट सराव: तुम्हाला एका नोकरीच्या पत्रात जॉइनिंगपूर्वी "लॅपटॉप कुरिअर डिपॉझिट" म्हणून ₹१,९९९ मागितले आहेत. हे खरे आहे का?'
          },
          options: [
            { text: { en: 'No! It is 100% a fake job scam. Never pay any fee for a job.', hi: 'नहीं! यह 100% फर्जी जॉब स्कैम है। नौकरी के लिए कभी कोई शुल्क न दें।', mr: 'नाही! ही १००% बनावट नोकरी फसवणूक आहे. नोकरीसाठी कधीही पैसे भरू नका.' }, correct: true },
            { text: { en: 'Yes, pay ₹1,999 immediately.', hi: 'हां, तुरंत ₹1,999 भेज दें।', mr: 'होय, लगेच ₹१,९९९ भरावेत.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Legitimate employers send company laptops at their own cost after onboarding, never by charging candidates.',
            hi: 'बिल्कुल सही! असली कंपनियां कभी भी लैपटॉप भेजने के नाम पर उम्मीदवारों से पैसे नहीं लेतीं।',
            mr: 'अगदी बरोबर! खऱ्या कंपन्या कधीही लॅपटॉप पाठवण्यासाठी उमेदवारांकडून पैसे घेत नाहीत.'
          }
        }
      }
    ],
    quiz: {
      question: {
        en: 'A Telegram channel offers you an online task job. They paid you ₹200 for liking 3 videos, but now require you to deposit ₹5,000 to unlock ₹8,500 in earnings. What is this?',
        hi: 'एक टेलीग्राम चैनल आपको ऑनलाइन टास्क जॉब देता है। उन्होंने 3 वीडियो लाइक करने के लिए ₹200 दिए, लेकिन अब ₹8,500 निकालने के लिए ₹5,000 जमा करने को कह रहे हैं। यह क्या है?',
        mr: 'एक टेलिग्राम चॅनेल तुम्हाला ऑनलाइन टास्क देते. ३ व्हिडिओ लाईक केल्याबद्दल त्यांनी ₹२०० दिले, पण आता ₹८,५०० मिळवण्यासाठी ₹५,००० भरायला सांगत आहेत. हे काय आहे?'
      },
      options: [
        { en: 'A guaranteed career opportunity.', hi: 'एक शानदार करियर अवसर।', mr: 'एक उत्तम करिअर संधी.' },
        { en: 'A classic prepaid task scam. Stop immediately, deposit zero money, and exit the group.', hi: 'एक प्रीपेड टास्क स्कैम (ठगी)। तुरंत रुकें, एक रुपया भी जमा न करें और ग्रुप छोड़ दें।', mr: 'हा प्रीपेड टास्क फ्रॉड आहे. तात्काळ थांबा, एकही रुपया भरू नका आणि ग्रुप सोडा.' },
        { en: 'A government digital employment scheme.', hi: 'एक सरकारी रोजगार योजना।', mr: 'एक सरकारी रोजगार योजना.' },
        { en: 'A safe way to double pocket money.', hi: 'पॉकेट मनी दोगुनी करने का सुरक्षित तरीका।', mr: 'पॉकेट मनी दुप्पट करण्याचा सुरक्षित मार्ग.' }
      ],
      correct: 1,
      explanation: {
        en: 'This is the textbook prepaid task scam. Never deposit money to earn money online!',
        hi: 'यह प्रीपेड टास्क स्कैम है। ऑनलाइन पैसे कमाने के लिए कभी भी अपनी जेब से पैसे जमा न करें!',
        mr: 'हा प्रीपेड टास्क फ्रॉड आहे. ऑनलाइन पैसे कमावण्यासाठी कधीही स्वतःचे पैसे डिपॉझिट करू नका!'
      }
    }
  },

  // ==========================================================================
  // COURSE 3: WORKING PROFESSIONALS
  // ==========================================================================
  {
    id: 'course-working-professionals',
    courseNumber: 3,
    category: 'professionals',
    badge: { en: 'Working Professionals', hi: 'कामकाजी पेशेवर', mr: 'नोकरदार वर्ग' },
    badgeIcon: '💼',
    badgeColor: '#047857',
    badgeBg: '#d1fae5',
    image: 'assets/images/course-working-professionals.jpg',
    duration: '35 Mins',
    level: { en: 'Salaried & Remote Workers', hi: 'वेतनभोगी और ऑफिस कर्मचारी', mr: 'नोकरदार आणि ऑफिस कर्मचारी' },
    modulesCount: 4,
    certificateTitle: 'Workplace Security Specialist',
    title: {
      en: 'Cybersecurity for Working Professionals & Remote Staff',
      hi: 'कामकाजी पेशेवरों और रिमोट कर्मचारियों के लिए साइबर सुरक्षा',
      mr: 'नोकरदार वर्ग आणि रिमोट कर्मचाऱ्यांसाठी सायबर सुरक्षा'
    },
    subtitle: {
      en: 'Master corporate email phishing defense, public Wi-Fi hygiene, salary/tax refund traps, and hardware/app 2FA.',
      hi: 'कॉर्पोरेट फ़िशिंग ईमेल, सैलरी/टैक्स रिफंड फ्रॉड, पब्लिक वाई-फाई सुरक्षा और मजबूत पासवर्ड सीखें।',
      mr: 'कार्यालयीन फिशिंग ईमेल्स, पगार व प्राप्तिकर रिफंड फसवणूक, पब्लिक वाय-फाय सुरक्षा आणि 2FA जाणून घ्या.'
    },
    description: {
      en: 'Working professionals handle sensitive customer records, confidential corporate emails, and monthly salaries. Cybercriminals weaponize targeted spear-phishing, fake HR emails, and tax refund schemes. This course hardens your personal and workplace digital hygiene.',
      hi: 'कामकाजी पेशेवर संवेदनशील कॉर्पोरेट डेटा और अपनी सैलरी दोनों को संभालते हैं। यह कोर्स आपको ऑफिस और व्यक्तिगत साइबर हमलों से सुरक्षित रखने की पूरी तकनीक सिखाता है।',
      mr: 'नोकरदार व्यक्ती कार्यालयीन कामासह बँक खात्यांचा नियमित वापर करतात. हा अभ्यासक्रम कामाच्या ठिकाणी आणि घरून काम करताना सायबर हल्ल्यांपासून बचाव करण्यासाठी तयार केला आहे.'
    },
    keySkills: {
      en: [
        'Detecting spoofed HR/Payroll emails & fake Income Tax refund links',
        'Securing corporate laptops on public Wi-Fi & VPN best practices',
        'Implementing Authenticator App 2FA across corporate and banking accounts',
        'Golden Hour response protocol for credential compromise'
      ],
      hi: [
        'नकली HR/सैलरी ईमेल और फर्जी इनकम टैक्स रिफंड लिंक की पहचान करना',
        'सार्वजनिक वाई-फाई (Public Wi-Fi) और VPN सुरक्षा नियमों का पालन करना',
        'ऑथेंटिकेटर ऐप (2FA) और पासवर्ड मैनेजर का उपयोग करना',
        'धोखाधड़ी या डेटा लीक होने पर गोल्डन ऑवर में तुरंत सही कदम उठाना'
      ],
      mr: [
        'बनावट HR/वेतन ईमेल्स आणि खोट्या इन्कम टॅक्स रिफंड लिंक्स ओळखणे',
        'पब्लिक वाय-फाय आणि VPN वापरताना लॅपटॉप सुरक्षित ठेवणे',
        'ऑथेंटिकेटर ॲप (2FA) आणि मजबूत पासवर्डचा वापर करणे',
        'फसवणूक झाल्यास गोल्डन अवरमध्ये तातडीने प्रतिसाद देणे'
      ]
    },
    modules: [
      {
        moduleNumber: 1,
        audioFiles: {
          en: 'audio/course-3/module-1/english.mp3',
          hi: 'audio/course-3/module-1/hindi.mp3',
          mr: 'audio/course-3/module-1/marathi.mp3'
        },
        title: {
          en: 'Module 1: Corporate Phishing & Spoofed HR/Tax Emails',
          hi: 'मॉड्यूल 1: कॉर्पोरेट फ़िशिंग और नकली HR/इनकम टैक्स ईमेल',
          mr: 'मॉड्यूल १: कार्यालयीन फिशिंग आणि बनावट HR/प्राप्तिकर ईमेल्स'
        },
        summary: {
          en: 'Recognizing spear-phishing disguised as annual appraisal or tax refund updates.',
          hi: 'सैलरी बोनस या इनकम टैक्स रिफंड के नाम से आने वाले नकली ईमेल की पहचान।',
          mr: 'पगारवाढ किंवा इन्कम टॅक्स रिफंडच्या नावाखाली येणारे बनावट ईमेल ओळखणे.'
        },
        content: {
          en: `
            <h4>The Spear-Phishing Attack:</h4>
            <p>You receive an email appearing to come from <code>hr-payroll@company-portal.net</code> or an SMS about an "Approved ₹24,500 Income Tax Refund" with a link to verify your bank account.</p>
            <div class="safety-box alert">
              <strong>Golden Practice:</strong> Always inspect the exact sender domain after the <code>@</code> symbol. Never enter corporate SSO passwords or net-banking credentials through external email links.
            </div>
          `,
          hi: `
            <h4>स्पीयर-फ़िशिंग हमला:</h4>
            <p>आपको <code>hr-payroll@company-portal.net</code> से सैलरी रिविजन का ईमेल या "आपका ₹24,500 इनकम टैक्स रिफंड पास हो गया है, खाता वेरिफाई करने के लिए लिंक पर क्लिक करें" जैसा संदेश आता है।</p>
            <div class="safety-box alert">
              <strong>सुरक्षित नियम:</strong> हमेशा <code>@</code> के बाद लिखे असली डोमेन को ध्यान से जांचें। ईमेल या SMS में आए किसी भी बाहरी लिंक पर अपना ऑफिस पासवर्ड या नेट-बैंकिंग पासवर्ड कभी न डालें।
            </div>
          `,
          mr: `
            <h4>स्पिअर-फिशिंग हल्ला:</h4>
            <p>तुम्हाला <code>hr-payroll@company-portal.net</code> वरून पगारवाढीचा ईमेल किंवा "तुमचा ₹२४,५०० इन्कम टॅक्स रिफंड मंजूर झाला आहे, खाते अपडेट करण्यासाठी लिंकवर क्लिक करा" असा मेसेज येतो.</p>
            <div class="safety-box alert">
              <strong>सुरक्षित नियम:</strong> नेहमी <code>@</code> नंतरचा अधिकृत डोमेन तपासा. ईमेलमधील कोणत्याही बाह्य लिंकवर तुमचा ऑफिस पासवर्ड किंवा नेट-बँकिंग पासवर्ड कधीही टाकू नका.
            </div>
          `
        },
        audioScript: {
          en: 'Module 1: Corporate Phishing and Spoofed HR or Tax Emails. Attackers send emails pretending to be your company HR department announcing a salary bonus, or send messages claiming an Income Tax refund of 24,500 rupees is waiting. When you click the link, a fake login page steals your password. Always verify the exact sender email domain and access your company intranet or official income tax portal directly through your browser bookmark.',
          hi: 'मॉड्यूल 1: कॉर्पोरेट फ़िशिंग और नकली एचआर या इनकम टैक्स ईमेल। साइबर हमलावर आपकी कंपनी के एचआर विभाग के नाम से सैलरी बोनस का ईमेल या चौबीस हजार रुपये के इनकम टैक्स रिफंड का नकली संदेश भेजते हैं। लिंक पर क्लिक करते ही एक नकली लॉगिन पेज आपका पासवर्ड चुरा लेता है। हमेशा भेजने वाले का असली ईमेल डोमेन जांचें और किसी भी अनजान लिंक पर अपना पासवर्ड कभी न डालें।',
          mr: 'मॉड्यूल १: कार्यालयीन फिशिंग आणि बनावट एचआर किंवा प्राप्तिकर ईमेल्स. सायबर हल्लेखोर तुमच्या कंपनीच्या एचआर विभागाच्या नावाने पगारवाढीचा ईमेल किंवा चोवीस हजार रुपयांच्या इन्कम टॅक्स रिफंडचा बनावट मेसेज पाठवतात. लिंकवर क्लिक केल्यास बनावट लॉगिन पेज तुमचा पासवर्ड चोरते. नेहमी पाठवणाऱ्याचा अधिकृत ईमेल पत्ता तपासा आणि कोणत्याही बाह्य लिंकवर पासवर्ड टाकू नका.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: An SMS says "Your Income Tax Refund of ₹18,400 failed; click http://it-refund-verify.in to enter your net-banking password." What should you do?',
            hi: 'त्वरित अभ्यास: एक SMS कहता है "आपका ₹18,400 का इनकम टैक्स रिफंड रुक गया है; अपना नेट-बैंकिंग पासवर्ड डालने के लिए http://it-refund-verify.in पर क्लिक करें।" आप क्या करेंगे?',
            mr: 'झटपट सराव: एका मेसेजमध्ये लिहिले आहे "तुमचा ₹१८,४०० चा इन्कम टॅक्स रिफंड अडकला आहे; नेट-बँकिंग पासवर्ड टाकण्यासाठी http://it-refund-verify.in वर क्लिक करा." तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Delete/Ignore the link and check only on the official government portal incometax.gov.in.', hi: 'लिंक को अनदेखा करें और केवल आधिकारिक सरकारी पोर्टल incometax.gov.in पर जांच करें।', mr: 'लिंककडे दुर्लक्ष करा आणि फक्त अधिकृत incometax.gov.in पोर्टलवर तपासा.' }, correct: true },
            { text: { en: 'Click the link and log into net banking.', hi: 'लिंक पर क्लिक करके लॉगिन करें।', mr: 'लिंकवर क्लिक करून लॉगिन करावे.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Official Income Tax communications only use incometax.gov.in and never ask for net-banking passwords via SMS links.',
            hi: 'बिल्कुल सही! आयकर विभाग की आधिकारिक वेबसाइट केवल incometax.gov.in है।',
            mr: 'अगदी बरोबर! प्राप्तिकर विभागाची अधिकृत वेबसाईट फक्त incometax.gov.in आहे.'
          }
        }
      },
      {
        moduleNumber: 2,
        audioFiles: {
          en: 'audio/course-3/module-2/english.mp3',
          hi: 'audio/course-3/module-2/hindi.mp3',
          mr: 'audio/course-3/module-2/marathi.mp3'
        },
        title: {
          en: 'Module 2: Remote Work & Public Wi-Fi Security',
          hi: 'मॉड्यूल 2: रिमोट वर्क और सार्वजनिक वाई-फाई (Public Wi-Fi) सुरक्षा',
          mr: 'मॉड्यूल २: रिमोट काम आणि सार्वजनिक वाय-फाय (Public Wi-Fi) सुरक्षा'
        },
        summary: {
          en: 'Safeguarding work laptops and banking sessions at cafes, stations, and airports.',
          hi: 'रेलवे स्टेशन, एयरपोर्ट या कैफे के मुफ्त वाई-फाई पर बैंकिंग और ऑफिस डेटा की सुरक्षा।',
          mr: 'रेल्वे स्टेशन, विमानतळ किंवा कॅफेमधील मोफत वाय-फायवर बँकिंग आणि ऑफिस डेटाची सुरक्षा.'
        },
        content: {
          en: `
            <h4>The "Evil Twin" Free Wi-Fi Risk:</h4>
            <p>Hackers set up open Wi-Fi hotspots named "Free_Station_WiFi" to intercept unencrypted traffic. Never conduct internet banking or enter corporate credentials on open public Wi-Fi without a trusted VPN, or use your own mobile data hotspot instead.</p>
          `,
          hi: `
            <h4>मुफ्त पब्लिक वाई-फाई का खतरा:</h4>
            <p>हैकर्स रेलवे स्टेशन, एयरपोर्ट या मॉल में "Free_HighSpeed_WiFi" नाम से नकली हॉटस्पॉट बनाते हैं ताकि आपके डेटा को चुरा सकें। कभी भी खुले सार्वजनिक वाई-फाई से जुड़कर नेट-बैंकिंग या यूपीआई लेनदेन न करें; इसके लिए हमेशा अपने फोन के मोबाइल डेटा का ही उपयोग करें।</p>
          `,
          mr: `
            <h4>मोफत पब्लिक वाय-फायचा धोका:</h4>
            <p>हॅकर्स रेल्वे स्टेशन किंवा सार्वजनिक ठिकाणी "Free_WiFi" नावाने बनावट नेटवर्क तयार करतात. खुल्या पब्लिक वाय-फायला जोडून कधीही ऑनलाइन बँकिंग किंवा ऑफिसचे गोपनीय काम करू नका; त्यासाठी नेहमी स्वतःचा मोबाईल डेटा वापरा.</p>
          `
        },
        audioScript: {
          en: 'Module 2: Remote Work and Public Wi-Fi Security. When traveling at railway stations, airports, or cafes, avoid connecting to open password-free Wi-Fi networks for banking or office work. Attackers create lookalike Wi-Fi hotspots to intercept session data. Always use your own encrypted mobile hotspot or your company VPN, and lock your laptop screen whenever you step away.',
          hi: 'मॉड्यूल 2: रिमोट वर्क और सार्वजनिक वाई-फाई सुरक्षा। यात्रा के दौरान रेलवे स्टेशन, एयरपोर्ट या कैफे में मिलने वाले बिना पासवर्ड के मुफ्त वाई-फाई पर कभी भी ऑनलाइन बैंकिंग या ऑफिस का संवेदनशील काम न करें। हैकर्स नकली वाई-फाई नेटवर्क बनाकर आपका डेटा चुरा सकते हैं। बैंकिंग के लिए हमेशा अपने फोन के मोबाइल इंटरनेट या सुरक्षित वीपीएन का ही उपयोग करें।',
          mr: 'मॉड्यूल २: रिमोट काम आणि सार्वजनिक वाय-फाय सुरक्षा. प्रवासात रेल्वे स्टेशन, विमानतळ किंवा हॉटेलमधील मोफत आणि विना-पासवर्ड वाय-फायवर कधीही ऑनलाइन बँकिंग किंवा ऑफिसचे काम करू नका. हॅकर्स बनावट वाय-फायद्वारे तुमचा डेटा चोरू शकतात. बँकिंग व्यवहारांसाठी नेहमी स्वतःचा मोबाईल डेटा किंवा सुरक्षित व्हीपीएन वापरा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: You are at an airport and need to make an urgent bank transfer. Which connection is safest?',
            hi: 'त्वरित अभ्यास: आप एयरपोर्ट पर हैं और आपको तुरंत एक जरूरी बैंक ट्रांसफर करना है। कौन-सा इंटरनेट कनेक्शन सबसे सुरक्षित है?',
            mr: 'झटपट सराव: तुम्ही विमानतळावर आहात आणि तुम्हाला तातडीने बँक व्यवहार करायचा आहे. कोणते इंटरनेट कनेक्शन सर्वात सुरक्षित आहे?'
          },
          options: [
            { text: { en: 'Your own smartphone cellular data / personal WPA3 hotspot.', hi: 'आपके खुद के फोन का मोबाइल डेटा / पर्सनल हॉटस्पॉट।', mr: 'तुमच्या स्वतःच्या फोनचा मोबाईल डेटा / पर्सनल हॉटस्पॉट.' }, correct: true },
            { text: { en: 'An open Wi-Fi network named "Free_Public_WiFi_NoPassword".', hi: 'बिना पासवर्ड वाला खुला पब्लिक वाई-फाई।', mr: 'विना-पासवर्ड असलेले मोफत पब्लिक वाय-फाय.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Your own cellular data network is encrypted end-to-end between your SIM and the telecom tower.',
            hi: 'सही जवाब! आपके सिम कार्ड का मोबाइल डेटा पूरी तरह एन्क्रिप्टेड और सुरक्षित होता है।',
            mr: 'बरोबर उत्तर! तुमच्या स्वतःच्या सिम कार्डचा मोबाईल डेटा सुरक्षित आणि एन्क्रिप्टेड असतो.'
          }
        }
      },
      {
        moduleNumber: 3,
        audioFiles: {
          en: 'audio/course-3/module-3/english.mp3',
          hi: 'audio/course-3/module-3/hindi.mp3',
          mr: 'audio/course-3/module-3/marathi.mp3'
        },
        title: {
          en: 'Module 3: Strong Authentication & Card Transaction Limits',
          hi: 'मॉड्यूल 3: मजबूत टू-स्टेप प्रमाणीकरण (2FA) और कार्ड लिमिट सुरक्षा',
          mr: 'मॉड्यूल ३: मजबूत टू-स्टेप ऑथेंटिकेशन (2FA) आणि कार्ड लिमिट सुरक्षा'
        },
        summary: {
          en: 'Moving beyond recycled passwords to app-based 2FA and smart card controls.',
          hi: 'ऑथेंटिकेटर ऐप (2FA) और डेबिट/क्रेडिट कार्ड पर इंटरनेशनल ट्रांजैक्शन बंद रखना।',
          mr: 'ऑथेंटिकेटर ॲप (2FA) आणि डेबिट/क्रेडिट कार्डवरील आंतरराष्ट्रीय व्यवहार बंद ठेवणे.'
        },
        content: {
          en: `
            <h4>Smart Financial Controls:</h4>
            <ul>
              <li>Use an Authenticator App (Google/Microsoft Authenticator) for email and workplace accounts.</li>
              <li>Open your banking app's "Card Controls" and keep <strong>International Transactions OFF</strong> by default—international websites often do not require an SMS OTP!</li>
            </ul>
          `,
          hi: `
            <h4>स्मार्ट बैंकिंग नियंत्रण:</h4>
            <ul>
              <li>अपने ईमेल और ऑफिस अकाउंट के लिए ऑथेंटिकेटर ऐप (2FA) का उपयोग करें।</li>
              <li>अपने बैंक ऐप की "Card Controls" सेटिंग में जाकर अपने डेबिट और क्रेडिट कार्ड का <strong>International Usage (अंतरराष्ट्रीय लेनदेन) हमेशा बंद (OFF) रखें</strong>—क्योंकि विदेशी वेबसाइटों पर बिना OTP के भी पैसे कट सकते हैं!</li>
            </ul>
          `,
          mr: `
            <h4>स्मार्ट बँकिंग नियंत्रण:</h4>
            <ul>
              <li>तुमच्या ईमेल आणि ऑफिस खात्यासाठी ऑथेंटिकेटर ॲप (2FA) वापरा.</li>
              <li>तुमच्या बँक ॲपच्या "Card Controls" मध्ये जाऊन डेबिट आणि क्रेडिट कार्डचे <strong>International Transactions (आंतरराष्ट्रीय व्यवहार) नेहमी बंद (OFF) ठेवा</strong>—कारण परदेशी वेबसाईट्सवर OTP शिवायही पैसे कट होऊ शकतात!</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 3: Strong Authentication and Card Transaction Limits. Did you know that international websites can charge a credit or debit card using only the card number and CVV without requiring an Indian SMS OTP? Open your mobile banking app today, go to Card Controls, and turn International Transactions OFF unless you actively need them. Also, set a sensible daily limit for domestic UPI and POS payments.',
          hi: 'मॉड्यूल 3: मजबूत प्रमाणीकरण और कार्ड लिमिट सुरक्षा। क्या आप जानते हैं कि अंतरराष्ट्रीय वेबसाइटों पर केवल कार्ड नंबर और सीवीवी से बिना किसी एसएमएस ओटीपी के भी पैसे काटे जा सकते हैं? इसलिए आज ही अपने मोबाइल बैंकिंग ऐप के कार्ड कंट्रोल में जाएं और अपने डेबिट व क्रेडिट कार्ड का इंटरनेशनल ट्रांजैक्शन हमेशा ऑफ रखें।',
          mr: 'मॉड्यूल ३: मजबूत टू-स्टेप ऑथेंटिकेशन आणि कार्ड लिमिट सुरक्षा. तुम्हाला माहिती आहे का की परदेशी वेबसाईट्सवर फक्त कार्ड नंबर आणि सीव्हीव्ही वापरून ओटीपीशिवायही पैसे कापले जाऊ शकतात? म्हणून आजच तुमच्या बँक ॲपमधील कार्ड कंट्रोलमध्ये जाऊन डेबिट आणि क्रेडिट कार्डचे इंटरनॅशनल ट्रान्झॅक्शन नेहमी बंद ठेवा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: Why should you keep "International Transactions" switched OFF on your debit/credit cards by default?',
            hi: 'त्वरित अभ्यास: आपको अपने डेबिट और क्रेडिट कार्ड पर "International Transactions" डिफ़ॉल्ट रूप से बंद (OFF) क्यों रखना चाहिए?',
            mr: 'झटपट सराव: तुम्ही तुमच्या डेबिट आणि क्रेडिट कार्डवर "International Transactions" नेहमी बंद (OFF) का ठेवले पाहिजे?'
          },
          options: [
            { text: { en: 'Because foreign payment gateways can deduct money without requiring an Indian SMS OTP.', hi: 'क्योंकि विदेशी पेमेंट गेटवे बिना भारतीय SMS OTP के भी कार्ड से पैसे काट सकते हैं।', mr: 'कारण परदेशी पेमेंट गेटवे भारतीय SMS OTP शिवायही कार्डमधून पैसे कापू शकतात.' }, correct: true },
            { text: { en: 'To save phone battery.', hi: 'फोन की बैटरी बचाने के लिए।', mr: 'फोनची बॅटरी वाचवण्यासाठी.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Keeping International Usage disabled protects your card from global credential-stuffing attacks.',
            hi: 'बिल्कुल सही! इंटरनेशनल ट्रांजैक्शन बंद रखने से आपका कार्ड अंतरराष्ट्रीय फ्रॉड से पूरी तरह सुरक्षित रहता है।',
            mr: 'अगदी बरोबर! इंटरनॅशनल व्यवहार बंद ठेवल्याने तुमचे कार्ड परदेशी सायबर फसवणुकीपासून सुरक्षित राहते.'
          }
        }
      },
      {
        moduleNumber: 4,
        audioFiles: {
          en: 'audio/course-3/module-4/english.mp3',
          hi: 'audio/course-3/module-4/hindi.mp3',
          mr: 'audio/course-3/module-4/marathi.mp3'
        },
        title: {
          en: 'Module 4: Incident Response & The Golden Hour',
          hi: 'मॉड्यूल 4: साइबर घटना होने पर गोल्डन ऑवर (Golden Hour) कार्ययोजना',
          mr: 'मॉड्यूल ४: सायबर फसवणूक झाल्यास गोल्डन अवर (Golden Hour) कृती आराखडा'
        },
        summary: {
          en: 'What to do in the first 30 minutes if you suspect a malicious click or fraud.',
          hi: 'गलत लिंक पर क्लिक होने या पैसे कटने के पहले 30 मिनट में तुरंत क्या करें।',
          mr: 'चुकीच्या लिंकवर क्लिक झाल्यास किंवा पैसे कट झाल्यास पहिल्या ३० मिनिटांत काय करावे.'
        },
        content: {
          en: `
            <h4>Immediate 4-Step Containment Protocol:</h4>
            <ol>
              <li><strong>Disconnect Network / Airplane Mode:</strong> If a malicious app was installed, turn on Airplane Mode immediately so the attacker cannot read incoming OTPs.</li>
              <li><strong>Freeze Bank / Cards:</strong> Block UPI and cards via your bank's toll-free number.</li>
              <li><strong>Call 1930 Immediately:</strong> Reporting within the first 1-2 hours allows I4C to freeze the scammer's bank account.</li>
              <li><strong>Lodge Evidence on cybercrime.gov.in:</strong> Keep screenshots of the UTR number and SMS.</li>
            </ol>
          `,
          hi: `
            <h4>तुरंत उठाने वाले 4 सुरक्षा कदम:</h4>
            <ol>
              <li><strong>इंटरनेट बंद करें (Airplane Mode):</strong> यदि गलती से कोई अनजान ऐप डाउनलोड हो गया है, तो तुरंत फोन को एयरप्लेन मोड पर डालें ताकि ठग आपके SMS न पढ़ सके।</li>
              <li><strong>बैंक खाता/कार्ड ब्लॉक करें:</strong> तुरंत बैंक को कॉल करके नेट बैंकिंग और यूपीआई फ्रीज कराएं।</li>
              <li><strong>तुरंत 1930 डायल करें:</strong> पहले 1-2 घंटे (गोल्डन ऑवर) में 1930 पर शिकायत करने से चोरी हुआ पैसा ठग के खाते में ही फ्रीज किया जा सकता है।</li>
              <li><strong>cybercrime.gov.in पर रिपोर्ट करें:</strong> ट्रांजैक्शन नंबर (UTR) का स्क्रीनशॉट संभाल कर रखें।</li>
            </ol>
          `,
          mr: `
            <h4>तात्काळ करावयाच्या ४ गोष्टी:</h4>
            <ol>
              <li><strong>इंटरनेट बंद करा (Airplane Mode):</strong> चुकून एखादे बनावट ॲप इन्स्टॉल झाले असल्यास लगेच फोन एअरप्लेन मोडवर टाका जेणेकरून भामट्याला तुमचे OTP दिसणार नाहीत.</li>
              <li><strong>बँक खाते/कार्ड ब्लॉक करा:</strong> बँकेच्या अधिकृत नंबरवर फोन करून व्यवहार थांबवा.</li>
              <li><strong>तात्काळ 1930 डायल करा:</strong> पहिल्या १-२ तासांत (गोल्डन अवरमध्ये) १९३० वर तक्रार केल्यास भामट्याचे खाते गोठवून पैसे वाचवता येतात.</li>
              <li><strong>cybercrime.gov.in वर तक्रार नोंदवा:</strong> UTR नंबरचे स्क्रीनशॉट जपून ठेवा.</li>
            </ol>
          `
        },
        audioScript: {
          en: 'Module 4: Incident Response and The Golden Hour. If you accidentally click a phishing link or install a suspicious app, do not panic—every minute counts. First, turn on Airplane Mode or switch off Wi-Fi and mobile data so the malware cannot forward your incoming OTPs. Second, call your bank from another phone to freeze your account. Third, immediately dial the National Cybercrime Helpline 1930 and report the UTR transaction number on cybercrime.gov.in.',
          hi: 'मॉड्यूल 4: साइबर घटना होने पर गोल्डन ऑवर कार्ययोजना। यदि आपसे गलती से किसी नकली लिंक पर क्लिक हो जाए या कोई अनजान ऐप फोन में इंस्टॉल हो जाए, तो घबराएं नहीं बल्कि तुरंत ये कदम उठाएं। सबसे पहले अपने फोन का इंटरनेट बंद करें या एयरप्लेन मोड चालू करें ताकि ठग को आपके ओटीपी न दिखें। दूसरे, किसी दूसरे फोन से बैंक को कॉल करके अपना खाता ब्लॉक कराएं। तीसरे, तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें और cybercrime.gov.in पर शिकायत दर्ज करें।',
          mr: 'मॉड्यूल ४: सायबर फसवणूक झाल्यास गोल्डन अवर कृती आराखडा. जर तुमच्याकडून चुकून एखाद्या फसव्या लिंकवर क्लिक झाले किंवा संशयास्पद ॲप इन्स्टॉल झाले, तर घाबरून न जाता तातडीने पावले उचला. सर्वात आधी तुमच्या फोनचे इंटरनेट बंद करा किंवा फोन एअरप्लेन मोडवर टाका. दुसरे म्हणजे घरातील दुसऱ्या फोनवरून बँकेला कॉल करून खाते गोठवा. तिसरे म्हणजे तात्काळ राष्ट्रीय सायबर हेल्पलाइन १९३० वर कॉल करा आणि cybercrime.gov.in वर तक्रार नोंदवा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: If you accidentally installed a suspicious .apk file sent by a scammer, what is the fastest way to cut off the scammer\'s remote access to your phone right away?',
            hi: 'त्वरित अभ्यास: यदि आपके फोन में गलती से ठग द्वारा भेजी गई कोई संदिग्ध .apk फाइल इंस्टॉल हो गई है, तो ठग का कनेक्शन तुरंत काटने के लिए सबसे पहले क्या करें?',
            mr: 'झटपट सराव: जर तुमच्या फोनमध्ये चुकून भामट्याने पाठवलेली .apk फाईल इन्स्टॉल झाली असेल, तर भामट्याचे कनेक्शन तात्काळ तोडण्यासाठी सर्वात आधी काय करावे?'
          },
          options: [
            { text: { en: 'Turn ON Airplane Mode / disconnect Wi-Fi & Mobile Data immediately, then uninstall the app.', hi: 'तुरंत Airplane Mode चालू करें / इंटरनेट बंद करें और फिर उस ऐप को अनइंस्टॉल करें।', mr: 'तात्काळ Airplane Mode सुरू करा / इंटरनेट बंद करा आणि मग ते ॲप अनइन्स्टॉल करा.' }, correct: true },
            { text: { en: 'Keep internet on and open your banking app to check balance.', hi: 'इंटरनेट चालू रखकर अपना बैंक ऐप खोलें और पिन डालें।', mr: 'इंटरनेट चालू ठेवून बँक ॲप उघडून पिन टाकावा.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Turning on Airplane Mode immediately stops screen-sharing and SMS forwarding to the attacker.',
            hi: 'बिल्कुल सही! एयरप्लेन मोड चालू करते ही ठग का इंटरनेट कनेक्शन और स्क्रीन-शेयरिंग तुरंत टूट जाता है।',
            mr: 'अगदी बरोबर! एअरप्लेन मोड सुरू करताच भामट्याचे इंटरनेट नियंत्रण तात्काळ तुटते.'
          }
        }
      }
    ],
    quiz: {
      question: {
        en: 'You receive an urgent email from "HR Department" requesting you to click a link and log into your company portal to view an unexpected salary bonus. What is the safest action?',
        hi: 'आपको "HR विभाग" के नाम से एक ईमेल आता है जिसमें सैलरी बोनस देखने के लिए एक लिंक पर क्लिक करके लॉगिन करने को कहा गया है। सबसे सुरक्षित कदम क्या है?',
        mr: 'तुम्हाला "HR विभागा"च्या नावाने एक ईमेल येतो ज्यात बोनस पाहण्यासाठी लिंकवर क्लिक करून लॉगिन करायला सांगितले आहे. सर्वात सुरक्षित कृती कोणती?'
      },
      options: [
        { en: 'Click the link immediately so your bonus is credited.', hi: 'बोनस पाने के लिए तुरंत लिंक पर क्लिक करें।', mr: 'बोनस मिळवण्यासाठी लगेच लिंकवर क्लिक करावे.' },
        { en: 'Ignore the email link, open your usual saved intranet portal bookmark, or verify directly with HR.', hi: 'ईमेल के लिंक को अनदेखा करें, अपने सेव किए हुए आधिकारिक पोर्टल को सीधे खोलें या HR से सीधे पुष्टि करें।', mr: 'ईमेलमधील लिंककडे दुर्लक्ष करा, तुमचे अधिकृत पोर्टल थेट उघडा किंवा HR विभागाशी थेट संपर्क साधा.' },
        { en: 'Forward the email to all teammates.', hi: 'सभी सहकर्मियों को ईमेल फॉरवर्ड करें।', mr: 'सर्व सहकाऱ्यांना ईमेल फॉरवर्ड करावा.' },
        { en: 'Enter your password and send the OTP.', hi: 'अपना पासवर्ड और OTP भेज दें।', mr: 'तुमचा पासवर्ड आणि OTP पाठवून द्यावा.' }
      ],
      correct: 1,
      explanation: {
        en: 'Always navigate directly to your trusted company portal bookmark. Never enter credentials through links sent in unexpected emails!',
        hi: 'हमेशा अपने भरोसेमंद आधिकारिक पोर्टल को सीधे खोलें। अनजान ईमेल में आए लिंक पर कभी पासवर्ड न डालें!',
        mr: 'नेहमी तुमच्या अधिकृत पोर्टलवर थेट जा. अनपेक्षित ईमेलमधील लिंकवर कधीही पासवर्ड टाकू नका!'
      }
    }
  },

  // ==========================================================================
  // COURSE 4: WOMEN & SELF-HELP GROUPS (BACHAT GAT)
  // ==========================================================================
  {
    id: 'course-women-shg',
    courseNumber: 4,
    category: 'women',
    badge: { en: 'Women & SHGs', hi: 'महिलाएं और बचत गट', mr: 'महिला व बचत गट' },
    badgeIcon: '👩',
    badgeColor: '#be185d',
    badgeBg: '#fce7f3',
    image: 'assets/images/course-women-shg.jpg',
    duration: '25 Mins',
    level: { en: 'SHG Members & Homemakers', hi: 'बचत गट सदस्य और गृहिणियां', mr: 'बचत गट सदस्या आणि गृहिणी' },
    modulesCount: 4,
    certificateTitle: 'Nari Digital Suraksha Champion',
    title: {
      en: 'Digital Safety for Women & Self-Help Groups (Bachat Gat)',
      hi: 'महिलाओं और स्वयं सहायता समूहों (बचत गट) के लिए डिजिटल सुरक्षा',
      mr: 'महिला आणि बचत गट सदस्यांसाठी डिजिटल स्वावलंबन व सुरक्षा'
    },
    subtitle: {
      en: 'Safeguard Bachat Gat collective funds, master safe UPI QR rules, protect personal photos, and report harassment.',
      hi: 'बचत गट के पैसों की सुरक्षा, सुरक्षित यूपीआई क्यूआर कोड के नियम और सोशल मीडिया प्राइवेसी सीखें।',
      mr: 'बचत गटाचा निधी सुरक्षित ठेवणे, UPI QR कोडचे खरे नियम आणि सोशल मीडियावरील महिला सुरक्षितता जाणून घ्या.'
    },
    description: {
      en: 'Women across Maharashtra and India are driving grassroots entrepreneurship through Self-Help Groups (Bachat Gat). This course delivers financial security, QR payment protection, and privacy defense.',
      hi: 'महिलाएं बचत गट के माध्यम से ग्रामीण अर्थव्यवस्था को मजबूत कर रही हैं। यह कोर्स सामूहिक धन को सुरक्षित रखने और डिजिटल स्वावलंबन के लिए बनाया गया है।',
      mr: 'बचत गटाच्या माध्यमातून महिला आर्थिक स्वावलंबन साध्य करत आहेत. हा अभ्यासक्रम महिलांचा डिजिटल आत्मविश्वास वाढवून फसवणुकीपासून संपूर्ण संरक्षण देतो.'
    },
    keySkills: {
      en: [
        'The Universal Rule: Receiving money NEVER requires scanning a QR code or entering a PIN',
        'Protecting Bachat Gat bank accounts from fake government grant calls',
        'WhatsApp privacy locks & preventing photo misuse on social platforms',
        'Using the National Cybercrime Portal Women & Child reporting cell'
      ],
      hi: [
        'यूपीआई का अटल नियम: पैसे प्राप्त करने के लिए कभी भी QR कोड स्कैन या PIN नहीं डालना पड़ता',
        'बचत गट के बैंक खातों को फर्जी सरकारी अनुदान कॉल से बचाना',
        'व्हाट्सएप प्राइवेसी लॉक और प्रोफाइल फोटो सुरक्षा सेटिंग्स',
        'महिला सुरक्षा हेल्पलाइन (1930, 1091, 112) और गोपनीय शिकायत पोर्टल की जानकारी'
      ],
      mr: [
        'UPI चा सुवर्ण नियम: पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन करावा लागत नाही किंवा PIN टाकावा लागत नाही',
        'बचत गटाच्या बँक खात्यांचे बनावट सरकारी अनुदान कॉल्सपासून रक्षण करणे',
        'व्हॉट्सॲप प्रायव्हसी लॉक आणि प्रोफाइल फोटो सुरक्षित ठेवणे',
        'महिला सुरक्षा हेल्पलाइन (१९३०, १०९१, ११२) आणि गोपनीय तक्रार पोर्टलचा वापर'
      ]
    },
    modules: [
      {
        moduleNumber: 1,
        audioFiles: {
          en: 'audio/course-4/module-1/english.mp3',
          hi: 'audio/course-4/module-1/hindi.mp3',
          mr: 'audio/course-4/module-1/marathi.mp3'
        },
        title: {
          en: 'Module 1: The Golden QR Code Law in Small Businesses',
          hi: 'मॉड्यूल 1: गृह उद्योग और बचत गट में QR कोड का सुनहरा नियम',
          mr: 'मॉड्यूल १: गृहउद्योग आणि बचत गटात QR कोडचा सुवर्ण नियम'
        },
        summary: {
          en: 'Understanding why QR codes are only for SENDING money, never for RECEIVING.',
          hi: 'समझें कि QR कोड केवल पैसे देने के लिए होता है, पैसे पाने के लिए कभी नहीं।',
          mr: 'QR कोड फक्त पैसे देण्यासाठी असतो, पैसे मिळवण्यासाठी कधीच नसतो हे समजून घ्या.'
        },
        content: {
          en: `
            <h4>The Common Buyer Fraud:</h4>
            <p>A caller orders homemade spices, papad, or handicrafts worth ₹3,000 from your SHG and says: <em>"Scan this QR code on PhonePe/GooglePay and enter your 4-digit PIN to receive ₹3,000."</em></p>
            <div class="safety-box alert">
              <strong>The Universal Rule of UPI:</strong> You NEVER need to enter your UPI PIN or scan a QR code to RECEIVE money! Entering your UPI PIN ALWAYS deducts money from your own bank account.
            </div>
          `,
          hi: `
            <h4>खरीदार बनकर ठगी का तरीका:</h4>
            <p>कोई व्यक्ति आपके बचत गट से ₹3,000 के मसाले, पापड़ या हस्तशिल्प खरीदने के लिए कॉल करता है और कहता है: <em>"मैं ऑनलाइन पैसे भेज रहा हूँ। अपने खाते में ₹3,000 प्राप्त करने के लिए इस QR कोड को स्कैन करें और अपना 4-अंकों का UPI PIN डालें।"</em></p>
            <div class="safety-box alert">
              <strong>UPI का अटल नियम:</strong> पैसे प्राप्त करने (Receive करने) के लिए कभी भी QR कोड स्कैन नहीं करना पड़ता और न ही UPI PIN डालना पड़ता है! पिन डालने से हमेशा आपके खुद के खाते से पैसे कटते हैं।
            </div>
          `,
          mr: `
            <h4>खरेदीदार बनून फसवणूक करण्याची पद्धत:</h4>
            <p>एक व्यक्ती तुमच्या बचत गटाकडून ₹३,००० चे मसाले, पापड किंवा वस्तू खरेदी करण्यासाठी फोन करते आणि म्हणते: <em>"मी ऑनलाइन पैसे पाठवत आहे. तुमच्या खात्यात ₹३,००० जमा होण्यासाठी हा QR कोड स्कॅन करा आणि तुमचा UPI PIN टाका."</em></p>
            <div class="safety-box alert">
              <strong>UPI चा अढळ नियम:</strong> पैसे मिळवण्यासाठी (Receive करण्यासाठी) कधीही QR कोड स्कॅन करावा लागत नाही किंवा UPI PIN टाकावा लागत नाही! पिन टाकल्यास नेहमी तुमच्याच खात्यातून पैसे वजा होतात.
            </div>
          `
        },
        audioScript: {
          en: 'Module 1: The Golden QR Code Law in Small Businesses. Scammers often call women entrepreneurs and Bachat Gat members pretending to place a large order for spices, snacks, or tailoring work. To pay the advance, they send a QR code on WhatsApp and ask you to scan it and enter your UPI PIN. Remember this forever: You never need to scan a QR code or enter your UPI PIN to receive money. Entering a UPI PIN only deducts money from your own account.',
          hi: 'मॉड्यूल 1: गृह उद्योग और बचत गट में क्यूआर कोड का सुनहरा नियम। साइबर ठग अक्सर बचत गट की महिलाओं को मसाले, पापड़ या सिलाई का बड़ा ऑर्डर देने के बहाने फोन करते हैं। एडवांस पैसे भेजने के नाम पर वे व्हाट्सएप पर एक क्यूआर कोड भेजते हैं और कहते हैं कि इसे स्कैन करके अपना यूपीआई पिन डालें ताकि पैसे आपके खाते में आ जाएं। हमेशा याद रखें: पैसे प्राप्त करने के लिए कभी भी क्यूआर कोड स्कैन नहीं करना पड़ता और न ही पिन डालना पड़ता है।',
          mr: 'मॉड्यूल १: गृहउद्योग आणि बचत गटात क्यूआर कोडचा सुवर्ण नियम. सायबर भामटे अनेकदा बचत गटातील महिलांना मसाले, पापड किंवा शिवणकामाची मोठी ऑर्डर देण्याच्या बहाण्याने फोन करतात. ॲडव्हान्स पैसे पाठवण्यासाठी ते व्हॉट्सॲपवर एक क्यूआर कोड पाठवतात आणि तो स्कॅन करून यूपीआय पिन टाकायला सांगतात. नेहमी लक्षात ठेवा: पैसे मिळवण्यासाठी कधीही क्यूआर कोड स्कॅन करावा लागत नाही आणि पिनही टाकावा लागत नाही.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A buyer wants to pay ₹2,500 for your Bachat Gat products and sends a QR code on WhatsApp. Should you scan it?',
            hi: 'त्वरित अभ्यास: एक खरीदार आपके बचत गट के सामान के लिए ₹2,500 देना चाहता है और व्हाट्सएप पर QR कोड भेजता है। क्या आपको उसे स्कैन करना चाहिए?',
            mr: 'झटपट सराव: एक खरेदीदार तुमच्या बचत गटाच्या मालासाठी ₹२,५०० देऊ इच्छितो आणि व्हॉट्सॲपवर QR कोड पाठवतो. तुम्ही तो स्कॅन करावा का?'
          },
          options: [
            { text: { en: 'NEVER! Refuse to scan it — receiving money requires zero QR scanning and zero PIN.', hi: 'बिल्कुल नहीं! इसे स्कैन करने से मना करें — पैसे पाने के लिए कभी QR स्कैन या पिन नहीं लगता।', mr: 'कधीही नाही! तो स्कॅन करण्यास नकार द्या — पैसे मिळवण्यासाठी QR स्कॅन किंवा पिन लागत नाही.' }, correct: true },
            { text: { en: 'Scan the QR code and enter your PIN.', hi: 'QR कोड स्कैन करके पिन डाल दें।', mr: 'QR कोड स्कॅन करून पिन टाकावा.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! If someone truly wants to pay you, they will scan YOUR shop QR code or send to your UPI number directly.',
            hi: 'सही जवाब! यदि किसी को सच में पैसे देने हैं, तो वह आपका QR कोड स्कैन करेगा, आपको अपना QR कोड नहीं भेजेगा।',
            mr: 'बरोबर उत्तर! जर कोणाला खरोखर पैसे द्यायचे असतील तर तो तुमचा QR कोड स्कॅन करेल, तुम्हाला QR कोड पाठवणार नाही.'
          }
        }
      },
      {
        moduleNumber: 2,
        audioFiles: {
          en: 'audio/course-4/module-2/english.mp3',
          hi: 'audio/course-4/module-2/hindi.mp3',
          mr: 'audio/course-4/module-2/marathi.mp3'
        },
        title: {
          en: 'Module 2: Securing Collective Bachat Gat Bank Accounts',
          hi: 'मॉड्यूल 2: बचत गट के सामूहिक बैंक खातों की सुरक्षा',
          mr: 'मॉड्यूल २: बचत गटाच्या सामूहिक बँक खात्यांची सुरक्षा'
        },
        summary: {
          en: 'How group presidents and treasurers can protect shared savings from fake grant calls.',
          hi: 'फर्जी सरकारी अनुदान (Subsidy) कॉल से बचत गट की जमा-पूंजी को कैसे बचाएं।',
          mr: 'बनावट सरकारी अनुदान कॉल्सपासून बचत गटाची बचत कशी सुरक्षित ठेवावी.'
        },
        content: {
          en: `
            <h4>Fake Government Subsidy Calls:</h4>
            <p>Fraudsters call SHG presidents posing as Block Officers offering a "₹50,000 Mahila Udyog Grant" if the group pays a ₹2,500 processing fee via UPI.</p>
            <div class="safety-box success">
              <strong>Collective Safety Rule:</strong> Official government grants for SHGs are processed through Panchayat Samiti / DRDA and credited directly to the SHG bank account without any UPI registration fee.
            </div>
          `,
          hi: `
            <h4>फर्जी सरकारी अनुदान कॉल:</h4>
            <p>ठग बचत गट की अध्यक्ष या सचिव को सरकारी अधिकारी बनकर कॉल करते हैं और कहते हैं कि "आपके समूह को ₹50,000 का महिला अनुदान मंजूर हुआ है, इसे पाने के लिए अभी ₹2,500 प्रोसेसिंग फीस यूपीआई से भेजें।"</p>
            <div class="safety-box success">
              <strong>सुरक्षा नियम:</strong> कोई भी सरकारी योजना या बचत गट अनुदान फोन पर यूपीआई फीस मांगकर नहीं दिया जाता। हमेशा पंचायत समिति या बैंक शाखा में जाकर ही पुष्टि करें।
            </div>
          `,
          mr: `
            <h4>बनावट सरकारी अनुदान कॉल्स:</h4>
            <p>भामटे बचत गटाच्या अध्यक्षा किंवा सचिवांना सरकारी अधिकारी असल्याचे सांगून फोन करतात आणि म्हणतात, "तुमच्या गटाला ₹५०,००० चे शासकीय अनुदान मंजूर झाले आहे, ते मिळण्यासाठी आत्ताच ₹२,५०० नोंदणी शुल्क UPI ने पाठवा."</p>
            <div class="safety-box success">
              <strong>सुरक्षा नियम:</strong> कोणतेही सरकारी अनुदान फोनवरून UPI फी मागून दिले जात नाही. नेहमी पंचायत समिती किंवा बँकेत जाऊनच खात्री करा.
            </div>
          `
        },
        audioScript: {
          en: 'Module 2: Securing Collective Bachat Gat Bank Accounts. Self-Help Group bank accounts hold the hard-earned savings of 10 to 20 women. Fraudsters call group leaders claiming that a 50,000 rupee government grant has been approved, provided they pay a 2,500 rupee processing charge via UPI right now. Remember: Genuine government schemes for Bachat Gats never ask for UPI fees over phone calls. Always verify directly at your Panchayat Samiti or bank branch.',
          hi: 'मॉड्यूल 2: बचत गट के सामूहिक बैंक खातों की सुरक्षा। बचत गट के खाते में दस से बीस महिलाओं की मेहनत की बचत होती है। ठग समूह की अध्यक्ष को फोन करके कहते हैं कि आपके गट के लिए पचास हजार रुपये का सरकारी अनुदान पास हुआ है, बस अभी ढाई हजार रुपये प्रोसेसिंग फीस यूपीआई से भेज दें। याद रखें: कोई भी सरकारी अनुदान फोन पर फीस मांगकर नहीं मिलता। हमेशा पंचायत समिति या बैंक जाकर ही जांच करें।',
          mr: 'मॉड्यूल २: बचत गटाच्या सामूहिक बँक खात्यांची सुरक्षा. बचत गटाच्या खात्यात दहा ते वीस महिलांच्या कष्टाची बचत असते. भामटे गटाच्या अध्यक्षांना फोन करून सांगतात की तुमच्या गटाला पन्नास हजार रुपयांचे सरकारी अनुदान मंजूर झाले आहे, त्यासाठी आत्ताच अडीच हजार रुपये फी पाठवा. लक्षात ठेवा: कोणतीही सरकारी योजना फोनवर पैसे मागून अनुदान देत नाही. नेहमी पंचायत समिती किंवा बँकेत जाऊन खात्री करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A caller offers a ₹50,000 government grant for your Bachat Gat if you immediately transfer ₹1,500 via PhonePe. What should you do?',
            hi: 'त्वरित अभ्यास: एक कॉलर आपके बचत गट को ₹50,000 का सरकारी अनुदान देने के लिए तुरंत ₹1,500 PhonePe करने को कहता है। आप क्या करेंगी?',
            mr: 'झटपट सराव: एक कॉलर तुमच्या बचत गटाला ₹५०,००० चे अनुदान देण्यासाठी तात्काळ ₹१,५०० PhonePe करायला सांगतो. तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Refuse to pay and verify at the official Panchayat Samiti / bank office.', hi: 'पैसे देने से मना करें और पंचायत समिति या बैंक कार्यालय में जाकर पता करें।', mr: 'पैसे देण्यास नकार द्या आणि पंचायत समिती किंवा बँकेत जाऊन चौकशी करा.' }, correct: true },
            { text: { en: 'Send ₹1,500 from the group funds.', hi: 'बचत गट के पैसों से ₹1,500 भेज दें।', mr: 'गटाच्या खात्यातून ₹१,५०० पाठवून द्यावेत.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Government departments never collect processing fees on personal UPI numbers.',
            hi: 'बिल्कुल सही! सरकारी विभाग कभी किसी निजी नंबर पर यूपीआई से फीस नहीं मांगते।',
            mr: 'अगदी बरोबर! सरकारी विभाग कधीही खाजगी नंबरवर UPI द्वारे फी मागत नाहीत.'
          }
        }
      },
      {
        moduleNumber: 3,
        audioFiles: {
          en: 'audio/course-4/module-3/english.mp3',
          hi: 'audio/course-4/module-3/hindi.mp3',
          mr: 'audio/course-4/module-3/marathi.mp3'
        },
        title: {
          en: 'Module 3: Privacy Defense & Photo Protection on WhatsApp',
          hi: 'मॉड्यूल 3: व्हाट्सएप प्राइवेसी और प्रोफाइल फोटो की सुरक्षा',
          mr: 'मॉड्यूल ३: व्हॉट्सॲप प्रायव्हसी आणि प्रोफाइल फोटोची सुरक्षितता'
        },
        summary: {
          en: 'Three simple settings every woman should enable on her smartphone today.',
          hi: 'तीन ऐसी जरूरी सेटिंग्स जो हर महिला को अपने फोन में आज ही चालू करनी चाहिए।',
          mr: 'तीन अशा महत्त्वाच्या सेटिंग्स ज्या प्रत्येक महिलेने आजच आपल्या फोनमध्ये सुरू केल्या पाहिजेत.'
        },
        content: {
          en: `
            <h4>Three Essential Privacy Settings:</h4>
            <ol>
              <li><strong>WhatsApp Two-Step Verification:</strong> Settings → Account → Two-step verification → Enable 6-digit PIN.</li>
              <li><strong>Profile Photo Visibility:</strong> Settings → Privacy → Profile Photo → Select <strong>"My Contacts"</strong> so strangers cannot screenshot your photo.</li>
              <li><strong>Silence Unknown Callers:</strong> Settings → Privacy → Calls → Turn ON <strong>"Silence Unknown Callers"</strong>.</li>
            </ol>
          `,
          hi: `
            <h4>तीन अत्यंत आवश्यक प्राइवेसी सेटिंग्स:</h4>
            <ol>
              <li><strong>व्हाट्सएप टू-स्टेप वेरिफिकेशन:</strong> Settings → Account → Two-step verification में जाकर 6-अंकों का पिन लगाएं।</li>
              <li><strong>प्रोफाइल फोटो छुपाएं:</strong> Settings → Privacy → Profile Photo में जाकर <strong>"My Contacts"</strong> चुनें ताकि कोई अजनबी आपकी फोटो का गलत इस्तेमाल न कर सके।</li>
              <li><strong>अनजान कॉल साइलेंट करें:</strong> Settings → Privacy → Calls में जाकर <strong>"Silence Unknown Callers"</strong> चालू करें।</li>
            </ol>
          `,
          mr: `
            <h4>तीन अत्यंत महत्त्वाच्या प्रायव्हसी सेटिंग्स:</h4>
            <ol>
              <li><strong>व्हॉट्सॲप टू-स्टेप व्हेरिफिकेशन:</strong> Settings → Account → Two-step verification मध्ये जाऊन ६ अंकी पिन सेट करा.</li>
              <li><strong>प्रोफाइल फोटो सुरक्षित करा:</strong> Settings → Privacy → Profile Photo मध्ये जाऊन <strong>"My Contacts"</strong> निवडा जेणेकरून अनोळखी लोकांना तुमचा फोटो दिसणार नाही.</li>
              <li><strong>अनोळखी कॉल्स सायलेंट करा:</strong> Settings → Privacy → Calls मध्ये जाऊन <strong>"Silence Unknown Callers"</strong> सुरू करा.</li>
            </ol>
          `
        },
        audioScript: {
          en: 'Module 3: Privacy Defense and Photo Protection on WhatsApp. Every woman can protect her WhatsApp account in less than two minutes using three built-in settings. First, go to Settings, Account, and turn on Two-Step Verification. Second, go to Privacy, Profile Photo, and set it to My Contacts only, so strangers cannot download or misuse family photos. Third, under Privacy, Calls, turn on Silence Unknown Callers to block fake WhatsApp video calls.',
          hi: 'मॉड्यूल 3: व्हाट्सएप प्राइवेसी और प्रोफाइल फोटो की सुरक्षा। हर महिला केवल दो मिनट में अपने व्हाट्सएप की ये तीन सुरक्षा सेटिंग्स चालू कर सकती है। पहला: सेटिंग्स के अकाउंट विकल्प में जाकर टू-स्टेप वेरिफिकेशन चालू करें। दूसरा: प्राइवेसी में जाकर प्रोफाइल फोटो और स्टेटस को माय कॉन्टैक्ट्स पर सेट करें ताकि कोई अजनबी आपकी या परिवार की फोटो डाउनलोड न कर सके। तीसरा: प्राइवेसी के कॉल्स विकल्प में जाकर साइलेंस अननोन कॉलर्स चालू करें।',
          mr: 'मॉड्यूल ३: व्हॉट्सॲप प्रायव्हसी आणि प्रोफाइल फोटोची सुरक्षितता. प्रत्येक महिला फक्त दोन मिनिटांत आपल्या व्हॉट्सॲपवर या तीन सुरक्षा सेटिंग्स सुरू करू शकते. पहिले: सेटिंग्समध्ये जाऊन टू-स्टेप व्हेरिफिकेशन सुरू करा. दुसरे: प्रायव्हसीमध्ये जाऊन प्रोफाइल फोटो आणि स्टेटस फक्त माय कॉन्टॅक्ट्सवर सेट करा जेणेकरून अनोळखी व्यक्ती तुमचे फोटो डाउनलोड करू शकणार नाहीत. तिसरे: प्रायव्हसीमधील कॉल्समध्ये जाऊन सायलेंस अननोन कॉलर्स सुरू करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: Which WhatsApp Privacy setting prevents strangers from viewing and downloading your profile picture?',
            hi: 'त्वरित अभ्यास: व्हाट्सएप की कौन-सी सेटिंग अजनबियों को आपकी प्रोफाइल फोटो देखने और डाउनलोड करने से रोकती है?',
            mr: 'झटपट सराव: व्हॉट्सॲपची कोणती सेटिंग अनोळखी लोकांना तुमचा प्रोफाइल फोटो पाहण्यापासून आणि डाउनलोड करण्यापासून रोखते?'
          },
          options: [
            { text: { en: 'Setting Profile Photo visibility to "My Contacts" (or "Nobody").', hi: 'प्रोफाइल फोटो सेटिंग को "My Contacts" (केवल मेरे कॉन्टैक्ट्स) पर रखना।', mr: 'प्रोफाइल फोटो सेटिंग "My Contacts" (फक्त माझे कॉन्टॅक्ट्स) वर ठेवणे.' }, correct: true },
            { text: { en: 'Setting Profile Photo visibility to "Everyone".', hi: 'प्रोफाइल फोटो को "Everyone" (सभी के लिए) खुला रखना।', mr: 'प्रोफाइल फोटो "Everyone" (सर्वांसाठी) खुला ठेवणे.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Restricting your profile photo to "My Contacts" stops strangers from harvesting your photos.',
            hi: 'बिल्कुल सही! "My Contacts" चुनने से केवल आपके परिचित लोग ही आपकी प्रोफाइल फोटो देख सकते हैं।',
            mr: 'अगदी बरोबर! "My Contacts" निवडल्यामुळे फक्त तुमच्या ओळखीचे लोकच तुमचा फोटो पाहू शकतात.'
          }
        }
      },
      {
        moduleNumber: 4,
        audioFiles: {
          en: 'audio/course-4/module-4/english.mp3',
          hi: 'audio/course-4/module-4/hindi.mp3',
          mr: 'audio/course-4/module-4/marathi.mp3'
        },
        title: {
          en: 'Module 4: Confidential Reporting & Help for Women',
          hi: 'मॉड्यूल 4: महिलाओं के लिए गोपनीय शिकायत और सहायता हेल्पलाइन',
          mr: 'मॉड्यूल ४: महिलांसाठी गोपनीय तक्रार आणि मदत हेल्पलाइन'
        },
        summary: {
          en: 'How to report online harassment or financial fraud confidentially.',
          hi: 'ऑनलाइन उत्पीड़न या वित्तीय ठगी की गोपनीय शिकायत कहां और कैसे करें।',
          mr: 'ऑनलाइन छळवणूक किंवा आर्थिक फसवणुकीची गोपनीय तक्रार कुठे आणि कशी करावी.'
        },
        content: {
          en: `
            <h4>Official Helplines & Anonymous Reporting:</h4>
            <ul>
              <li><strong>cybercrime.gov.in ("Report Women/Child Related Crime"):</strong> Allows confidential online reporting from home without fear.</li>
              <li><strong>1930:</strong> National 24x7 Helpline for financial cyber fraud.</li>
              <li><strong>1091 / 112:</strong> Women's Police Emergency Helpline.</li>
            </ul>
          `,
          hi: `
            <h4>आधिकारिक महिला सुरक्षा हेल्पलाइन:</h4>
            <ul>
              <li><strong>cybercrime.gov.in ("Report Women/Child Related Crime"):</strong> यहां महिलाएं घर बैठे पूरी गोपनीयता के साथ ऑनलाइन उत्पीड़न या फोटो दुरुपयोग की शिकायत दर्ज कर सकती हैं।</li>
              <li><strong>1930:</strong> पैसों की साइबर ठगी के लिए 24x7 राष्ट्रीय हेल्पलाइन।</li>
              <li><strong>1091 / 112:</strong> महिला पुलिस आपातकालीन सहायता नंबर।</li>
            </ul>
          `,
          mr: `
            <h4>अधिकृत महिला सुरक्षा हेल्पलाइन:</h4>
            <ul>
              <li><strong>cybercrime.gov.in ("Report Women/Child Related Crime"):</strong> येथे महिला घरबसल्या पूर्णपणे गोपनीय पद्धतीने सायबर छळवणूक किंवा फोटो गैरवापराची तक्रार नोंदवू शकतात.</li>
              <li><strong>1930:</strong> आर्थिक सायबर फसवणुकीसाठी २४x७ राष्ट्रीय हेल्पलाइन.</li>
              <li><strong>1091 / 112:</strong> महिला पोलीस आपत्कालीन मदत क्रमांक.</li>
            </ul>
          `
        },
        audioScript: {
          en: 'Module 4: Confidential Reporting and Help for Women. The Government of India provides a dedicated confidential section on cybercrime.gov.in specifically for crimes against women and children. You can report photo misuse, fake profiles, or cyber harassment safely from home. For any financial cyber fraud, dial 1930 immediately, and for police assistance dial 1091 or 112. Never suffer in silence—the law is on your side.',
          hi: 'मॉड्यूल 4: महिलाओं के लिए गोपनीय शिकायत और सहायता हेल्पलाइन। भारत सरकार के आधिकारिक पोर्टल cybercrime.gov.in पर महिलाओं और बच्चों से जुड़े साइबर अपराधों के लिए एक विशेष गोपनीय अनुभाग है। यदि कोई फर्जी प्रोफाइल बनाए या फोटो का गलत इस्तेमाल करे, तो बिना डरे घर बैठे वहां शिकायत करें। पैसों की ठगी होने पर तुरंत 1930 डायल करें और महिला पुलिस सहायता के लिए 1091 या 112 पर कॉल करें।',
          mr: 'मॉड्यूल ४: महिलांसाठी गोपनीय तक्रार आणि मदत हेल्पलाइन. भारत सरकारच्या अधिकृत cybercrime.gov.in पोर्टलवर महिला आणि मुलांवरील सायबर गुन्ह्यांसाठी विशेष गोपनीय विभाग आहे. कोणी बनावट प्रोफाइल तयार केल्यास किंवा फोटोचा गैरवापर केल्यास न घाबरता घरबसल्या तक्रार नोंदवा. आर्थिक फसवणूक झाल्यास तात्काळ १९३० वर कॉल करा आणि पोलीस मदतीसाठी १०९१ किंवा ११२ डायल करा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: Which official portal provides a dedicated "Report Women/Child Related Crime" confidential reporting option in India?',
            hi: 'त्वरित अभ्यास: भारत में कौन-सा आधिकारिक सरकारी पोर्टल महिलाओं और बच्चों से जुड़े साइबर अपराधों की गोपनीय शिकायत की सुविधा देता है?',
            mr: 'झटपट सराव: भारतातील कोणते अधिकृत सरकारी पोर्टल महिला आणि मुलांवरील सायबर गुन्ह्यांसाठी गोपनीय तक्रारीची सोय देते?'
          },
          options: [
            { text: { en: 'https://cybercrime.gov.in (and Helpline 1930 / 1091)', hi: 'https://cybercrime.gov.in (और हेल्पलाइन 1930 / 1091)', mr: 'https://cybercrime.gov.in (आणि हेल्पलाइन १९३० / १०९१)' }, correct: true },
            { text: { en: 'Random WhatsApp forwards', hi: 'अनजान व्हाट्सएप ग्रुप', mr: 'अनोळखी व्हॉट्सॲप ग्रुप' }, correct: false }
          ],
          explanation: {
            en: 'Correct! cybercrime.gov.in is the official Ministry of Home Affairs portal for reporting cybercrimes confidentially.',
            hi: 'बिल्कुल सही! cybercrime.gov.in गृह मंत्रालय का आधिकारिक और सुरक्षित पोर्टल है।',
            mr: 'अगदी बरोबर! cybercrime.gov.in हे गृह मंत्रालयाचे अधिकृत आणि सुरक्षित पोर्टल आहे.'
          }
        }
      }
    ],
    quiz: {
      question: {
        en: 'A customer wants to purchase products from your Bachat Gat and sends you a QR code on WhatsApp, telling you to scan it and enter your UPI PIN to receive the money. What should you do?',
        hi: 'एक ग्राहक आपके बचत गट से सामान खरीदना चाहता है और व्हाट्सएप पर QR कोड भेजकर कहता है कि पैसे पाने के लिए इसे स्कैन करें और अपना UPI PIN डालें। आपको क्या करना चाहिए?',
        mr: 'एक ग्राहक तुमच्या बचत गटाकडून वस्तू खरेदी करू इच्छितो आणि व्हॉट्सॲपवर QR कोड पाठवून पैसे मिळवण्यासाठी तो स्कॅन करून UPI PIN टाकायला सांगतो. तुम्ही काय करावे?'
      },
      options: [
        { en: 'Scan the QR code and enter your PIN immediately.', hi: 'तुरंत QR कोड स्कैन करें और पिन डालें।', mr: 'लगेच QR कोड स्कॅन करून पिन टाकावा.' },
        { en: 'Refuse to scan it. Remind the buyer that receiving money never requires scanning QR codes or entering PINs.', hi: 'स्कैन करने से साफ मना करें। याद रखें कि पैसे प्राप्त करने के लिए कभी भी QR कोड स्कैन या पिन की जरूरत नहीं होती।', mr: 'स्कॅन करण्यास स्पष्ट नकार द्या. पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन किंवा पिन लागत नाही.' },
        { en: 'Share your ATM card PIN instead.', hi: 'इसके बदले अपना ATM पिन बता दें।', mr: 'त्याऐवजी ATM पिन सांगावा.' },
        { en: 'Ask another group member to enter their PIN.', hi: 'समूह की किसी दूसरी सदस्य से पिन डालने को कहें।', mr: 'गटातील दुसऱ्या महिलेला पिन टाकायला सांगावे.' }
      ],
      correct: 1,
      explanation: {
        en: 'Receiving money NEVER requires scanning a QR code or entering a UPI PIN! Anyone asking you to scan a QR code to receive money is attempting fraud.',
        hi: 'पैसे प्राप्त करने के लिए कभी भी QR कोड स्कैन करने या UPI PIN डालने की जरूरत नहीं होती! ऐसा कहने वाला व्यक्ति ठगी कर रहा है।',
        mr: 'पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन करण्याची किंवा UPI PIN टाकण्याची गरज नसते! असे सांगणारी व्यक्ती फसवणूक करत आहे.'
      }
    }
  },

  // ==========================================================================
  // COURSE 5: FARMERS & RURAL FAMILIES
  // ==========================================================================
  {
    id: 'course-farmers-rural',
    courseNumber: 5,
    category: 'farmers',
    badge: { en: 'Farmers & Rural', hi: 'किसान और ग्रामीण परिवार', mr: 'शेतकरी व ग्रामीण परिवार' },
    badgeIcon: '🌾',
    badgeColor: '#15803d',
    badgeBg: '#dcfce7',
    image: 'assets/images/course-farmers-rural.jpg',
    duration: '25 Mins',
    level: { en: 'Farmers & Village Families', hi: 'किसान और ग्राम परिवार', mr: 'शेतकरी आणि ग्रामीण कुटुंबे' },
    modulesCount: 4,
    certificateTitle: 'Krishi Digital Rakshak',
    title: {
      en: 'Digital Krishi Suraksha for Farmers & Village Families',
      hi: 'किसानों और ग्रामीण परिवारों के लिए डिजिटल कृषि सुरक्षा',
      mr: 'शेतकरी आणि ग्रामीण कुटुंबांसाठी डिजिटल कृषी सुरक्षा'
    },
    subtitle: {
      en: 'Prevent fake mandi payment screenshot frauds, PM-Kisan portal scams, fake solar pump subsidies, and AePS biometric thefts.',
      hi: 'मंडी में फर्जी स्क्रीनशॉट फ्रॉड, पीएम-किसान फेक पोर्टल, सोलर पंप सब्सिडी और आधार बायोमेट्रिक सुरक्षा सीखें।',
      mr: 'कृषी उत्पन्न बाजार समितीतील बनावट पेमेंट्स, पीएम-किसान बनावट लिंक्स आणि आधार बायोमेट्रिक सुरक्षितता जाणून घ्या.'
    },
    description: {
      en: 'Agriculture is the backbone of our villages. This course protects farming families from fake crop payment screenshots, counterfeit PM-Kisan / Solar Pump APK links, and unauthorized AePS fingerprint withdrawals.',
      hi: 'कृषि हमारे ग्रामीण जीवन की रीढ़ है। यह कोर्स किसानों को मंडी भुगतानों, सरकारी योजनाओं और आधार सुरक्षा के प्रति जागरूक बनाता है।',
      mr: 'शेतकऱ्यांचे उत्पन्न सुरक्षित ठेवणे अत्यंत आवश्यक आहे. हा अभ्यासक्रम शेतकरी बांधवांना डिजिटल व्यवहारांमध्ये होणाऱ्या फसवणुकीपासून वाचवण्यासाठी तयार केला आहे.'
    },
    keySkills: {
      en: [
        'Verifying real bank credit SMS before releasing agricultural produce at mandis',
        'Identifying fake PM-Kisan Yojana and solar pump subsidy links on WhatsApp',
        'Locking Aadhaar biometrics on the mAadhaar app to prevent AePS kiosk fraud',
        'Avoiding fake OLX tractor & cattle buyer QR token traps'
      ],
      hi: [
        'मंडी में फसल देने से पहले अपने खुद के बैंक के क्रेडिट SMS और बैलेंस की जांच करना',
        'व्हाट्सएप पर आने वाले नकली PM-Kisan और सोलर पंप सब्सिडी APK से बचना',
        'आधार फिंगरप्रिंट निकासी (AePS) फ्रॉड रोकने के लिए mAadhaar पर बायोमेट्रिक लॉक लगाना',
        'पुराना ट्रैक्टर या मवेशी बेचते समय नकली QR कोड टोकन जाल से बचना'
      ],
      mr: [
        'बाजारात शेतमाल देण्यापूर्वी स्वतःच्या बँकेचा क्रेडिट SMS आणि बॅलन्स तपासणे',
        'व्हॉट्सॲपवरील बनावट PM-Kisan आणि सोलर पंप अनुदान लिंक्स ओळखणे',
        'आधार अंगठा (AePS) फसवणूक टाळण्यासाठी mAadhaar वर बायोमेट्रिक लॉक लावणे',
        'जुना ट्रॅक्टर किंवा जनावरे विकताना बनावट QR कोड टोकन फसवणुकीपासून वाचणे'
      ]
    },
    modules: [
      {
        moduleNumber: 1,
        audioFiles: {
          en: 'audio/course-5/module-1/english.mp3',
          hi: 'audio/course-5/module-1/hindi.mp3',
          mr: 'audio/course-5/module-1/marathi.mp3'
        },
        title: {
          en: 'Module 1: Mandi Payments & Fake UPI Screen Recordings',
          hi: 'मॉड्यूल 1: मंडी भुगतान और नकली पेमेंट स्क्रीनशॉट से बचाव',
          mr: 'मॉड्यूल १: बाजार समितीतील व्यवहार आणि बनावट पेमेंट स्क्रीनशॉटपासून बचाव'
        },
        summary: {
          en: 'How traders fake payment screenshots and how to protect your harvest.',
          hi: 'नकली पेमेंट ऐप के स्क्रीनशॉट को कैसे पहचानें और अपनी फसल की कमाई सुरक्षित रखें।',
          mr: 'बनावट पेमेंट स्क्रीनशॉट कसे ओळखावे आणि आपल्या शेतमालाचे पैसे कसे सुरक्षित ठेवावे.'
        },
        content: {
          en: `
            <h4>The Fake Payment Screenshot Trick:</h4>
            <p>A buyer purchases your harvest (cotton, soybean, grain) and shows you a realistic screen on THEIR phone saying <em>"₹45,000 Paid Successfully"</em> generated by a fake screenshot app.</p>
            <div class="safety-box alert">
              <strong>The Golden Mandi Rule:</strong> Never trust the screen on the buyer's phone! Always check your OWN bank SMS or open your OWN bank app to verify that the money has actually arrived in your account.
            </div>
          `,
          hi: `
            <h4>नकली पेमेंट स्क्रीनशॉट का धोखा:</h4>
            <p>कोई व्यापारी या अनजान खरीदार आपकी फसल (कपास, सोयाबीन, अनाज) खरीदता है और अपने फोन पर एक नकली ऐप से बना स्क्रीनशॉट दिखाता है जिस पर <em>"₹45,000 Paid Successfully"</em> लिखा होता है।</p>
            <div class="safety-box alert">
              <strong>मंडी का सुनहरा नियम:</strong> कभी भी खरीदार के फोन की स्क्रीन देखकर भरोसा न करें! हमेशा अपने खुद के फोन पर बैंक का असली जमा (Credited) SMS देखें या अपने बैंक ऐप में बैलेंस चेक करने के बाद ही फसल दें।
            </div>
          `,
          mr: `
            <h4>बनावट पेमेंट स्क्रीनशॉटची फसवणूक:</h4>
            <p>एखादा अनोळखी खरेदीदार तुमचा शेतमाल (कापूस, सोयाबीन, धान्य) खरेदी करतो आणि त्याच्या फोनवर नकली ॲपने तयार केलेला <em>"₹४५,००० Paid Successfully"</em> असा स्क्रीनशॉट दाखवतो.</p>
            <div class="safety-box alert">
              <strong>बाजारपेठेचा सुवर्ण नियम:</strong> कधीही खरेदीदाराच्या फोनची स्क्रीन पाहून विश्वास ठेवू नका! नेहमी तुमच्या स्वतःच्या फोनवर बँकेचा अधिकृत जमा (Credited) SMS तपासा किंवा बँक ॲपमध्ये बॅलन्स पाहूनच माल ताब्यात द्या.
            </div>
          `
        },
        audioScript: {
          en: 'Module 1: Mandi Payments and Fake UPI Screen Recordings. When selling crops or livestock, scammers often use fake apps that generate a green Payment Successful screen with your name and amount, without actually transferring a single rupee. Remember the Golden Mandi Rule: Never trust a screenshot shown on the buyer’s phone. Always check the official bank SMS or balance inside your own mobile banking app before handing over your produce.',
          hi: 'मॉड्यूल 1: मंडी भुगतान और नकली पेमेंट स्क्रीनशॉट से बचाव। फसल या पशु बेचते समय कुछ ठग नकली ऐप का इस्तेमाल करते हैं जो आपके नाम और रकम के साथ हरे रंग का पेमेंट सक्सेसफुल स्क्रीनशॉट दिखा देता है, जबकि वास्तव में एक रुपया भी ट्रांसफर नहीं होता। मंडी का सुनहरा नियम याद रखें: कभी भी खरीदार के फोन की स्क्रीन देखकर भरोसा न करें। हमेशा अपने खुद के फोन में बैंक का असली एसएमएस या बैंक बैलेंस चेक करने के बाद ही माल दें।',
          mr: 'मॉड्यूल १: बाजार समितीतील व्यवहार आणि बनावट पेमेंट स्क्रीनशॉटपासून बचाव. शेतमाल किंवा जनावरे विकताना काही भामटे बनावट ॲप्स वापरून तुमच्या नावासह पेमेंट सक्सेसफुल झाल्याचा खोटा स्क्रीनशॉट दाखवतात, पण प्रत्यक्षात एकही रुपया खात्यात जमा झालेला नसतो. बाजारपेठेचा सुवर्ण नियम लक्षात ठेवा: कधीही खरेदीदाराच्या फोनची स्क्रीन पाहून विश्वास ठेवू नका. नेहमी स्वतःच्या बँक खात्यातील बॅलन्स तपासूनच माल द्या.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A buyer shows you a "₹35,000 Paid" screen on his phone, but your bank balance has not increased. What should you do?',
            hi: 'त्वरित अभ्यास: एक खरीदार अपने फोन पर "₹35,000 Paid" दिखाता है, लेकिन आपके बैंक खाते में पैसे नहीं आए हैं। आप क्या करेंगे?',
            mr: 'झटपट सराव: एक खरेदीदार त्याच्या फोनवर "₹३५,००० Paid" दाखवतो, पण तुमच्या बँक खात्यात पैसे जमा झालेले नाहीत. तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Do NOT hand over the crop until your own bank app/account confirms the money is credited.', hi: 'जब तक आपके खुद के बैंक खाते में पैसे जमा न दिखें, तब तक फसल बिल्कुल न दें।', mr: 'जोपर्यंत तुमच्या स्वतःच्या बँक खात्यात पैसे जमा होत नाहीत तोपर्यंत शेतमाल देऊ नका.' }, correct: true },
            { text: { en: 'Trust his screenshot and let him take the crop.', hi: 'उसके स्क्रीनशॉट पर भरोसा करके फसल दे दें।', mr: 'त्याच्या स्क्रीनशॉटवर विश्वास ठेवून माल देऊन टाकावा.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Fake screenshot generators are widely used by fraudsters. Only your own bank balance tells the truth.',
            hi: 'बिल्कुल सही! केवल आपके खुद के बैंक खाते का बैलेंस ही असली प्रमाण है।',
            mr: 'अगदी बरोबर! फक्त तुमच्या स्वतःच्या बँक खात्याचा बॅलन्सच खरी माहिती देतो.'
          }
        }
      },
      {
        moduleNumber: 2,
        audioFiles: {
          en: 'audio/course-5/module-2/english.mp3',
          hi: 'audio/course-5/module-2/hindi.mp3',
          mr: 'audio/course-5/module-2/marathi.mp3'
        },
        title: {
          en: 'Module 2: PM-Kisan & Solar Pump Subsidy Phishing Links',
          hi: 'मॉड्यूल 2: पीएम-किसान और सोलर पंप सब्सिडी के नकली लिंक की पहचान',
          mr: 'मॉड्यूल २: पीएम-किसान आणि सोलर पंप अनुदानाच्या बनावट लिंक्स ओळखणे'
        },
        summary: {
          en: 'Distinguishing genuine .gov.in government portals from WhatsApp APK traps.',
          hi: 'असली .gov.in सरकारी वेबसाइट और व्हाट्सएप के नकली लिंक में अंतर पहचानें।',
          mr: 'अधिकृत .gov.in सरकारी वेबसाईट आणि व्हॉट्सॲपवरील बनावट लिंक्समधील फरक ओळखा.'
        },
        content: {
          en: `
            <h4>The Subsidy Phishing Trap:</h4>
            <p>Scammers send WhatsApp messages: <em>"Click http://pmkisan-solar-free.xyz or install PM-Kisan-Status.apk to claim ₹2,000 installment or 90% Kusum Solar Pump subsidy."</em></p>
            <div class="safety-box warning">
              <strong>Official Domain Rule:</strong> Genuine government portals ALWAYS end in <strong>.gov.in</strong> (like <code>pmkisan.gov.in</code> or <code>mahadbt.maharashtra.gov.in</code>). Never click links ending in <code>.xyz</code>, <code>.online</code>, or <code>.apk</code>!
            </div>
          `,
          hi: `
            <h4>सब्सिडी के नाम पर नकली लिंक:</h4>
            <p>ठग व्हाट्सएप पर संदेश भेजते हैं: <em>"पीएम-किसान की ₹2,000 किस्त या 90% कुसुम सोलर पंप सब्सिडी पाने के लिए तुरंत PM-Kisan.apk डाउनलोड करें या इस लिंक पर क्लिक करें।"</em></p>
            <div class="safety-box warning">
              <strong>सरकारी वेबसाइट की पहचान:</strong> भारत और राज्य सरकार की हर असली वेबसाइट के अंत में हमेशा <strong>.gov.in</strong> लिखा होता है (जैसे <code>pmkisan.gov.in</code> या <code>mahadbt.maharashtra.gov.in</code>)। कभी भी व्हाट्सएप पर आई किसी <code>.apk</code> फाइल या अनजान लिंक को न खोलें!
            </div>
          `,
          mr: `
            <h4>अनुदानाच्या नावाखाली बनावट लिंक्स:</h4>
            <p>भामटे व्हॉट्सॲपवर मेसेज पाठवतात: <em>"पीएम-किसानचा ₹२,००० हप्ता किंवा ९०% कुसुम सोलर पंप अनुदान मिळवण्यासाठी PM-Kisan.apk डाउनलोड करा किंवा या लिंकवर क्लिक करा."</em></p>
            <div class="safety-box warning">
              <strong>अधिकृत वेबसाईटची ओळख:</strong> केंद्र आणि राज्य सरकारच्या प्रत्येक अधिकृत वेबसाईटच्या शेवटी नेहमी <strong>.gov.in</strong> असते (उदा. <code>pmkisan.gov.in</code> किंवा <code>mahadbt.maharashtra.gov.in</code>). कधीही व्हॉट्सॲपवरील <code>.apk</code> फाईल किंवा अनोळखी लिंक उघडू नका!
            </div>
          `
        },
        audioScript: {
          en: 'Module 2: PM-Kisan and Solar Pump Subsidy Phishing Links. Fraudsters circulate messages in village WhatsApp groups offering a 90 percent Kusum Solar Pump subsidy or PM-Kisan installment check via a link or APK app. Remember: Every genuine government scheme portal in India ends strictly in dot gov dot in, such as pmkisan.gov.in or mahadbt.maharashtra.gov.in. Never install APK files from WhatsApp or pay advance fees for solar pumps on personal UPI numbers.',
          hi: 'मॉड्यूल 2: पीएम-किसान और सोलर पंप सब्सिडी के नकली लिंक की पहचान। साइबर ठग गांव के व्हाट्सएप ग्रुप में नब्बे प्रतिशत कुसुम सोलर पंप सब्सिडी या पीएम-किसान किस्त चेक करने के नाम पर नकली लिंक और एपीके फाइलें भेजते हैं। हमेशा याद रखें: सरकार की हर असली वेबसाइट के अंत में डॉट जीओवी डॉट इन लिखा होता है, जैसे pmkisan.gov.in। व्हाट्सएप से कभी कोई एपीके फाइल डाउनलोड न करें और हमेशा ग्राम पंचायत के सीएससी केंद्र से ही फॉर्म भरें।',
          mr: 'मॉड्यूल २: पीएम-किसान आणि सोलर पंप अनुदानाच्या बनावट लिंक्स ओळखणे. सायबर भामटे गावातील व्हॉट्सॲप ग्रुपमध्ये नव्वद टक्के कुसुम सोलर पंप अनुदान किंवा पीएम-किसान हप्ता तपासण्याच्या नावाखाली बनावट लिंक्स आणि एपीके फाईल्स पाठवतात. नेहमी लक्षात ठेवा: शासनाच्या प्रत्येक अधिकृत वेबसाईटच्या शेवटी डॉट जीओव्ही डॉट इन असते, जसे pmkisan.gov.in. व्हॉट्सॲपवरून कोणतीही एपीके फाईल डाउनलोड करू नका आणि नेहमी ग्रामपंचायत किंवा महा-ई-सेवा केंद्रातूनच अर्ज भरा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: Which of these is the ONLY genuine Government of India PM-Kisan website?',
            hi: 'त्वरित अभ्यास: इनमें से भारत सरकार की एकमात्र असली पीएम-किसान वेबसाइट कौन-सी है?',
            mr: 'झटपट सराव: खालीलपैकी भारत सरकारची एकमेव अधिकृत पीएम-किसान वेबसाईट कोणती आहे?'
          },
          options: [
            { text: { en: 'https://pmkisan.gov.in', hi: 'https://pmkisan.gov.in', mr: 'https://pmkisan.gov.in' }, correct: true },
            { text: { en: 'http://pmkisan-yojana-free.xyz', hi: 'http://pmkisan-yojana-free.xyz', mr: 'http://pmkisan-yojana-free.xyz' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Always look for .gov.in at the end of the domain name.',
            hi: 'सही जवाब! सरकारी पोर्टल के अंत में हमेशा .gov.in होता है।',
            mr: 'बरोबर उत्तर! शासकीय संकेतस्थळाच्या शेवटी नेहमी .gov.in असते.'
          }
        }
      },
      {
        moduleNumber: 3,
        audioFiles: {
          en: 'audio/course-5/module-3/english.mp3',
          hi: 'audio/course-5/module-3/hindi.mp3',
          mr: 'audio/course-5/module-3/marathi.mp3'
        },
        title: {
          en: 'Module 3: AePS Biometric Fingerprint Safety',
          hi: 'मॉड्यूल 3: आधार अंगूठा निकासी (AePS) और बायोमेट्रिक लॉक सुरक्षा',
          mr: 'मॉड्यूल ३: आधार अंगठा पैसे काढणे (AePS) आणि बायोमेट्रिक लॉक सुरक्षा'
        },
        summary: {
          en: 'Protecting your Aadhaar fingerprint withdrawals at rural kiosks.',
          hi: 'ग्राहक सेवा केंद्र (कियोस्क) पर अंगूठा लगाते समय होने वाली धोखाधड़ी से बचाव।',
          mr: 'ग्राहक सेवा केंद्रावर अंगठा लावून पैसे काढताना होणाऱ्या फसवणुकीपासून बचाव.'
        },
        content: {
          en: `
            <h4>Protecting Your Fingerprint Withdrawals:</h4>
            <p>When withdrawing cash via Aadhaar fingerprint (AePS), never scan your finger a second time without checking your bank SMS first, and always collect a printed receipt. You can also lock your Aadhaar biometrics on the official <strong>mAadhaar</strong> app.</p>
          `,
          hi: `
            <h4>आधार अंगूठा निकासी (AePS) की सुरक्षा:</h4>
            <p>आधार केंद्र पर अंगूठा लगाकर पैसे निकालते समय यदि ऑपरेटर कहे कि "मशीन में एरर आ गया है, दोबारा अंगूठा लगाइए", तो दोबारा अंगूठा लगाने से पहले अपने फोन पर बैंक का SMS अवश्य चेक करें। साथ ही, आधिकारिक <strong>mAadhaar</strong> ऐप में जाकर अपना <strong>Biometric Lock</strong> चालू रखें।</p>
          `,
          mr: `
            <h4>आधार अंगठा (AePS) व्यवहारांची सुरक्षा:</h4>
            <p>ग्राहक सेवा केंद्रावर अंगठा लावून पैसे काढताना ऑपरेटरने "मशीनमध्ये एरर आला आहे, पुन्हा अंगठा लावा" असे सांगितल्यास, दुसऱ्यांदा अंगठा लावण्यापूर्वी तुमच्या फोनवरील बँकेचा SMS नक्की तपासा. तसेच अधिकृत <strong>mAadhaar</strong> ॲपद्वारे तुमचे <strong>Biometric Lock</strong> सुरू ठेवा.</p>
          `
        },
        audioScript: {
          en: 'Module 3: AePS Biometric Fingerprint Safety. Aadhaar Enabled Payment System lets villagers withdraw money using their fingerprint. Dishonest operators sometimes claim the fingerprint scan failed and ask you to place your thumb a second time, withdrawing money twice while paying you once. Always check your phone SMS before scanning a second time, demand a printed balance receipt, and use the official mAadhaar app to keep your Aadhaar biometrics locked when not in use.',
          hi: 'मॉड्यूल 3: आधार अंगूठा निकासी और बायोमेट्रिक सुरक्षा। आधार से अंगूठा लगाकर पैसे निकालते समय कुछ बेईमान ऑपरेटर कहते हैं कि मशीन में फिंगरप्रिंट नहीं आया, दोबारा अंगूठा लगाओ, और इस तरह दो बार पैसे निकाल लेते हैं। इसलिए दोबारा अंगूठा लगाने से पहले अपने फोन का बैंक एसएमएस जरूर चेक करें और रसीद अवश्य लें। साथ ही एम-आधार ऐप से अपना बायोमेट्रिक लॉक रखें।',
          mr: 'मॉड्यूल ३: आधार अंगठा पैसे काढणे आणि बायोमेट्रिक सुरक्षा. आधारद्वारे अंगठा लावून पैसे काढताना काही फसवे ऑपरेटर सांगतात की ठसा नीट उमटला नाही, पुन्हा अंगठा लावा आणि अशा प्रकारे दोनदा पैसे काढून घेतात. म्हणून दुसऱ्यांदा अंगठा लावण्यापूर्वी फोनवरील बँकेचा मेसेज नक्की तपासा आणि छापील पावती घ्या. तसेच एम-आधार ॲपवर तुमचे बायोमेट्रिक लॉक ठेवा.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: Which official UIDAI app allows you to lock and unlock your Aadhaar fingerprint biometrics for free?',
            hi: 'त्वरित अभ्यास: किस आधिकारिक सरकारी ऐप से आप अपने आधार फिंगरप्रिंट (Biometrics) को मुफ्त में लॉक और अनलॉक कर सकते हैं?',
            mr: 'झटपट सराव: कोणत्या अधिकृत सरकारी ॲपद्वारे तुम्ही तुमचे आधार बायोमेट्रिक्स मोफत लॉक आणि अनलॉक करू शकता?'
          },
          options: [
            { text: { en: 'The official mAadhaar app (or myaadhaar.uidai.gov.in)', hi: 'आधिकारिक mAadhaar ऐप (या myaadhaar.uidai.gov.in)', mr: 'अधिकृत mAadhaar ॲप (किंवा myaadhaar.uidai.gov.in)' }, correct: true },
            { text: { en: 'Third-party WhatsApp APK', hi: 'व्हाट्सएप का कोई अनजान ऐप', mr: 'व्हॉट्सॲपवरील अनोळखी ॲप' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Locking biometrics on mAadhaar makes unauthorized AePS fingerprint withdrawals impossible.',
            hi: 'बिल्कुल सही! mAadhaar ऐप पर बायोमेट्रिक लॉक करने से कोई भी आपके अंगूठे का गलत उपयोग नहीं कर सकता।',
            mr: 'अगदी बरोबर! mAadhaar वर बायोमेट्रिक लॉक केल्याने कोणीही तुमच्या अंगठ्याचा गैरवापर करू शकत नाही.'
          }
        }
      },
      {
        moduleNumber: 4,
        audioFiles: {
          en: 'audio/course-5/module-4/english.mp3',
          hi: 'audio/course-5/module-4/hindi.mp3',
          mr: 'audio/course-5/module-4/marathi.mp3'
        },
        title: {
          en: 'Module 4: Fake Tractor & Cattle Buying QR Token Traps',
          hi: 'मॉड्यूल 4: पुराना ट्रैक्टर या पशु खरीदते/बेचते समय QR कोड टोकन ठगी',
          mr: 'मॉड्यूल ४: जुना ट्रॅक्टर किंवा जनावरे खरेदी-विक्रीतील QR कोड टोकन फसवणूक'
        },
        summary: {
          en: 'Avoiding advance token scams when buying or selling farm equipment online.',
          hi: 'ऑनलाइन सस्ते ट्रैक्टर के विज्ञापन या नकली खरीदार के QR कोड जाल से कैसे बचें।',
          mr: 'ऑनलाइन स्वस्त ट्रॅक्टरच्या जाहिराती किंवा बनावट खरेदीदाराच्या QR कोड फसवणुकीपासून कसे वाचावे.'
        },
        content: {
          en: `
            <h4>Two Rural Marketplace Traps:</h4>
            <ul>
              <li><strong>Fake Seller Trap:</strong> Seeing an ad for a ₹4,00,000 tractor being sold for ₹85,000, the seller demands ₹10,000 "transport advance" before you ever see the tractor in person.</li>
              <li><strong>Fake Buyer Trap:</strong> Someone offers to buy your cattle/tractor and sends a QR code to "receive the advance token".</li>
            </ul>
            <div class="safety-box warning">
              <strong>Village Market Rule:</strong> Never pay advance transport fees without physically inspecting the tractor/cattle in person, and never scan a QR code to receive money!
            </div>
          `,
          hi: `
            <h4>ग्रामीण खरीद-बिक्री के दो बड़े जाल:</h4>
            <ul>
              <li><strong>सस्ते ट्रैक्टर का जाल:</strong> फेसबुक या यूट्यूब पर ₹4 लाख का ट्रैक्टर ₹85,000 में बेचने का विज्ञापन दिखाकर ठग "ट्रांसपोर्ट या गेट पास फीस" के नाम पर ₹10,000 एडवांस मांगते हैं।</li>
              <li><strong>नकली खरीदार का जाल:</strong> आपका पशु या ट्रैक्टर खरीदने के बहाने ठग एडवांस भेजने के लिए व्हाट्सएप पर QR कोड भेजता है।</li>
            </ul>
            <div class="safety-box warning">
              <strong>सुरक्षा नियम:</strong> बिना सामने जाकर ट्रैक्टर या पशु देखे कभी ₹1 भी एडवांस न भेजें, और पैसे पाने के लिए कभी QR कोड स्कैन न करें!
            </div>
          `,
          mr: `
            <h4>ग्रामीण खरेदी-विक्रीतील दोन मोठे सापळे:</h4>
            <ul>
              <li><strong>स्वस्त ट्रॅक्टरचे आमिष:</strong> सोशल मीडियावर ₹४ लाखांचा ट्रॅक्टर ₹८५,००० मध्ये विकण्याची खोटी जाहिरात दाखवून भामटे "ट्रान्सपोर्ट किंवा गेट पास फी" म्हणून ₹१०,००० आगाऊ मागतात.</li>
              <li><strong>बनावट खरेदीदाराचे जाळे:</strong> तुमची जनावरे किंवा ट्रॅक्टर विकत घेण्याच्या बहाण्याने भामटे ॲडव्हान्स देण्यासाठी QR कोड पाठवतात.</li>
            </ul>
            <div class="safety-box warning">
              <strong>सुरक्षा नियम:</strong> प्रत्यक्ष समोर जाऊन ट्रॅक्टर किंवा जनावरे पाहिल्याशिवाय एकही रुपया ॲडव्हान्स पाठवू नका आणि पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन करू नका!
            </div>
          `
        },
        audioScript: {
          en: 'Module 4: Fake Tractor and Cattle Buying QR Token Traps. Scammers post fake advertisements on Facebook and YouTube offering a 4 lakh rupee tractor for just 85,000 rupees, claiming they are being transferred urgently. They ask farmers to send 10,000 rupees as advance transport fee and then switch off their phone. Never send advance money for any tractor, vehicle, or livestock without visiting and inspecting it in person.',
          hi: 'मॉड्यूल 4: पुराना ट्रैक्टर या पशु खरीदते और बेचते समय होने वाली ठगी से बचाव। साइबर ठग फेसबुक और यूट्यूब पर चार लाख रुपये का ट्रैक्टर केवल पचासी हजार में बेचने का झूठा विज्ञापन डालते हैं और ट्रांसपोर्ट या बुकिंग के नाम पर दस हजार रुपये एडवांस मांगते हैं। पैसे भेजते ही वे अपना फोन बंद कर लेते हैं। याद रखें: बिना खुद सामने जाकर ट्रैक्टर या पशु देखे कभी भी किसी को एक रुपया भी एडवांस न भेजें।',
          mr: 'मॉड्यूल ४: जुना ट्रॅक्टर किंवा जनावरे खरेदी-विक्रीतील फसवणुकीपासून बचाव. सायबर भामटे फेसबुक आणि यूट्यूबवर चार लाखांचा ट्रॅक्टर फक्त पंच्याऐंशी हजारांत विकण्याची खोटी जाहिरात टाकतात आणि ट्रान्सपोर्ट किंवा बुकिंगच्या नावाखाली दहा हजार रुपये ॲडव्हान्स मागतात. पैसे पाठवताच ते फोन बंद करतात. लक्षात ठेवा: स्वतः प्रत्यक्ष समोर जाऊन ट्रॅक्टर किंवा जनावरे पाहिल्याशिवाय कोणालाही एकही रुपया ॲडव्हान्स पाठवू नका.'
        },
        practice: {
          prompt: {
            en: 'Quick Practice: A Facebook ad offers a nearly new tractor for ₹75,000, provided you send ₹8,000 right now as "Transport Gate Pass Fee". What should you do?',
            hi: 'त्वरित अभ्यास: फेसबुक पर एक विज्ञापन में नया जैसा ट्रैक्टर ₹75,000 में मिल रहा है, बशर्ते आप अभी "ट्रांसपोर्ट गेट पास फीस" के नाम पर ₹8,000 भेज दें। आप क्या करेंगे?',
            mr: 'झटपट सराव: फेसबुकवरील एका जाहिरातीत नवीन ट्रॅक्टर ₹७५,००० मध्ये मिळत आहे, पण त्यासाठी आत्ताच ₹८,००० "ट्रान्सपोर्ट फी" भरायला सांगितले आहे. तुम्ही काय कराल?'
          },
          options: [
            { text: { en: 'Refuse completely! Never pay advance transport/booking fees without physically inspecting the vehicle.', hi: 'साफ मना करें! बिना सामने जाकर वाहन देखे कभी कोई एडवांस या ट्रांसपोर्ट फीस न भेजें।', mr: 'स्पष्ट नकार द्या! प्रत्यक्ष वाहन पाहिल्याशिवाय कधीही आगाऊ ट्रान्सपोर्ट किंवा बुकिंग फी पाठवू नका.' }, correct: true },
            { text: { en: 'Send ₹8,000 quickly via UPI.', hi: 'जल्दी से ₹8,000 भेज दें।', mr: 'लगेच ₹८,००० पाठवून द्यावेत.' }, correct: false }
          ],
          explanation: {
            en: 'Correct! Advance transport fees on low-priced vehicle ads are 100% fraudulent.',
            hi: 'बिल्कुल सही! सस्ते वाहन के नाम पर एडवांस ट्रांसपोर्ट फीस मांगना 100% साइबर ठगी है।',
            mr: 'अगदी बरोबर! स्वस्त वाहनाच्या नावाखाली आगाऊ ट्रान्सपोर्ट फी मागणे ही १००% सायबर फसवणूक आहे.'
          }
        }
      }
    ],
    quiz: {
      question: {
        en: 'A crop buyer at the mandi shows you a screenshot on his phone stating ₹30,000 has been sent to your bank account, but you have not received any credit SMS from your bank. What should you do?',
        hi: 'मंडी में एक फसल खरीदार अपने फोन पर ₹30,000 भेजे जाने का स्क्रीनशॉट दिखाता है, लेकिन आपके बैंक से पैसे जमा होने का कोई SMS नहीं आया है। आपको क्या करना चाहिए?',
        mr: 'बाजारातील एक खरेदीदार त्याच्या फोनवर ₹३०,००० पाठवल्याचा स्क्रीनशॉट दाखवतो, पण तुमच्या बँकेकडून पैसे जमा झाल्याचा कोणताही मेसेज आलेला नाही. तुम्ही काय करावे?'
      },
      options: [
        { en: 'Release the crop immediately since he showed a screenshot.', hi: 'स्क्रीनशॉट देखकर तुरंत फसल दे दें।', mr: 'स्क्रीनशॉट पाहून लगेच शेतमाल देऊन टाकावा.' },
        { en: 'Wait until your own bank sends an official credit SMS or verify your balance directly in your bank app before releasing any produce.', hi: 'जब तक आपके खुद के बैंक से पैसे जमा होने की पुष्टि न हो या आपके बैंक ऐप में बैलेंस न दिखे, तब तक फसल न दें।', mr: 'जोपर्यंत तुमच्या स्वतःच्या बँक खात्यात पैसे जमा झाल्याची खात्री होत नाही तोपर्यंत शेतमाल देऊ नका.' },
        { en: 'Give him a discount.', hi: 'उसे छूट दे दें।', mr: 'त्याला सूट द्यावी.' },
        { en: 'Scan his QR code to get the money.', hi: 'पैसे पाने के लिए उसका QR कोड स्कैन करें।', mr: 'पैसे मिळवण्यासाठी त्याचा QR कोड स्कॅन करावा.' }
      ],
      correct: 1,
      explanation: {
        en: 'Never trust screenshots on a buyer\'s phone! Always wait for confirmation from your own bank before releasing any harvest or agricultural produce.',
        hi: 'खरीदार के फोन के स्क्रीनशॉट पर कभी भरोसा न करें! हमेशा अपने खुद के बैंक खाते का बैलेंस जांचने के बाद ही फसल दें।',
        mr: 'खरेदीदाराच्या फोनवरील स्क्रीनशॉटवर कधीही विश्वास ठेवू नका! नेहमी स्वतःच्या बँक खात्यातील बॅलन्स तपासूनच माल द्या.'
      }
    }
  }
];

// ============================================================================
// 🎧 TRILINGUAL AUDIO ENGINE + PERSISTENT COURSE CONTROLLER
// ============================================================================
const AUDIO_LANG_STORAGE_KEY = 'cybersathi_course_audio_lang';
const AUDIO_VOL_STORAGE_KEY = 'cybersathi_course_audio_vol';

let activeFilter = 'all';
let currentActiveCourse = null;
let currentModalStep = 0; // 0..3 = Modules 1..4, 4 = Final Quiz, 5 = Certificate
let modulePracticeAnswered = false;
let modulePracticeCorrect = false;

// Audio Player State
let audioEngine = {
  selectedLang: 'en', // 'en' | 'hi' | 'mr'
  volume: 1.0,
  isPlaying: false,
  isPaused: false,
  mode: 'none', // 'mp3' | 'tts' | 'none'
  htmlAudio: null,
  chunks: [],
  currentChunkIndex: 0,
  progressPercent: 0,
  currentAudioPath: ''
};

function getPreferredAudioLang() {
  const saved = localStorage.getItem(AUDIO_LANG_STORAGE_KEY);
  if (saved === 'en' || saved === 'hi' || saved === 'mr') return saved;
  if (typeof window.getLanguage === 'function') {
    const siteL = window.getLanguage();
    if (siteL === 'en' || siteL === 'hi' || siteL === 'mr') return siteL;
  }
  const globalSaved = localStorage.getItem('cybersathi_language') || localStorage.getItem('cybersathi_lang') || 'en';
  if (globalSaved.startsWith('hi')) return 'hi';
  if (globalSaved.startsWith('mr')) return 'mr';
  return 'en';
}

function setPreferredAudioLang(lang) {
  if (lang !== 'en' && lang !== 'hi' && lang !== 'mr') return;
  audioEngine.selectedLang = lang;
  localStorage.setItem(AUDIO_LANG_STORAGE_KEY, lang);
}

function getPreferredVolume() {
  const v = parseFloat(localStorage.getItem(AUDIO_VOL_STORAGE_KEY));
  if (!isNaN(v) && v >= 0 && v <= 1) return v;
  return 1.0;
}

function setPreferredVolume(vol) {
  const clamped = Math.max(0, Math.min(1, parseFloat(vol) || 1));
  audioEngine.volume = clamped;
  localStorage.setItem(AUDIO_VOL_STORAGE_KEY, String(clamped));
  if (audioEngine.htmlAudio) {
    audioEngine.htmlAudio.volume = clamped;
  }
}

function stopModuleAudio() {
  if (audioEngine.htmlAudio) {
    try {
      audioEngine.htmlAudio.pause();
      audioEngine.htmlAudio.currentTime = 0;
    } catch (e) {}
    audioEngine.htmlAudio = null;
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  audioEngine.isPlaying = false;
  audioEngine.isPaused = false;
  audioEngine.chunks = [];
  audioEngine.currentChunkIndex = 0;
  audioEngine.progressPercent = 0;
  updateAudioPlayerDOM();
}

function splitScriptIntoSentences(scriptText) {
  const raw = String(scriptText || '').replace(/\s+/g, ' ').trim();
  if (!raw) return [];
  // Split cleanly on sentence boundaries (., !, ?, ।) while keeping chunks natural
  const parts = raw.match(/[^.!?।]+[.!?।]?/g) || [raw];
  return parts.map(s => s.trim()).filter(Boolean);
}

function startModuleAudio(moduleObj, lang) {
  stopModuleAudio();
  setPreferredAudioLang(lang);

  const mp3Path = (moduleObj.audioFiles && moduleObj.audioFiles[lang])
    ? moduleObj.audioFiles[lang]
    : `audio/course-1/module-${moduleObj.moduleNumber || 1}/${lang === 'hi' ? 'hindi' : lang === 'mr' ? 'marathi' : 'english'}.mp3`;

  audioEngine.currentAudioPath = mp3Path;

  // Try loading pre-recorded MP3 first; if unavailable, immediately use SpeechSynthesis fallback
  const probeAudio = new Audio();
  let fallbackTriggered = false;

  const launchSpeechSynthesisFallback = () => {
    if (fallbackTriggered) return;
    fallbackTriggered = true;
    audioEngine.mode = 'tts';

    const scriptText = (moduleObj.audioScript && moduleObj.audioScript[lang])
      || (moduleObj.audioScript && moduleObj.audioScript.en)
      || '';

    const sentences = splitScriptIntoSentences(scriptText);
    if (!sentences.length || !('speechSynthesis' in window)) {
      audioEngine.isPlaying = false;
      updateAudioPlayerDOM();
      return;
    }

    audioEngine.chunks = sentences;
    audioEngine.currentChunkIndex = 0;
    audioEngine.isPlaying = true;
    audioEngine.isPaused = false;
    audioEngine.progressPercent = 5;
    updateAudioPlayerDOM();
    speakNextChunk(lang);
  };

  probeAudio.preload = 'metadata';
  probeAudio.volume = audioEngine.volume;

  probeAudio.addEventListener('canplaythrough', () => {
    if (fallbackTriggered) return;
    audioEngine.mode = 'mp3';
    audioEngine.htmlAudio = probeAudio;
    audioEngine.isPlaying = true;
    audioEngine.isPaused = false;
    updateAudioPlayerDOM();
    probeAudio.play().catch(() => launchSpeechSynthesisFallback());
  }, { once: true });

  probeAudio.addEventListener('timeupdate', () => {
    if (probeAudio.duration && probeAudio.duration > 0) {
      audioEngine.progressPercent = Math.min(100, Math.round((probeAudio.currentTime / probeAudio.duration) * 100));
      updateAudioPlayerDOM();
    }
  });

  probeAudio.addEventListener('ended', () => {
    audioEngine.isPlaying = false;
    audioEngine.isPaused = false;
    audioEngine.progressPercent = 100;
    updateAudioPlayerDOM();
  });

  probeAudio.addEventListener('error', () => {
    launchSpeechSynthesisFallback();
  }, { once: true });

  probeAudio.src = mp3Path;
  // Safety timeout: if local/file protocol doesn't resolve MP3 within 350ms, use TTS fallback cleanly
  setTimeout(() => {
    if (audioEngine.mode !== 'mp3' && !fallbackTriggered) {
      launchSpeechSynthesisFallback();
    }
  }, 350);
}

function speakNextChunk(lang) {
  if (!audioEngine.isPlaying || audioEngine.isPaused) return;
  if (audioEngine.currentChunkIndex >= audioEngine.chunks.length) {
    audioEngine.isPlaying = false;
    audioEngine.isPaused = false;
    audioEngine.progressPercent = 100;
    updateAudioPlayerDOM();
    return;
  }

  const chunkText = audioEngine.chunks[audioEngine.currentChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunkText);
  const localeMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
  utterance.lang = localeMap[lang] || 'en-IN';
  utterance.volume = audioEngine.volume;
  utterance.rate = 0.94;

  if (window.speechSynthesis && window.speechSynthesis.getVoices) {
    const voices = window.speechSynthesis.getVoices();
    const matched = voices.find(v => v.lang && v.lang.toLowerCase().includes(lang));
    if (matched) utterance.voice = matched;
  }

  utterance.onend = () => {
    if (!audioEngine.isPlaying || audioEngine.isPaused) return;
    audioEngine.currentChunkIndex += 1;
    audioEngine.progressPercent = Math.min(
      100,
      Math.round((audioEngine.currentChunkIndex / Math.max(1, audioEngine.chunks.length)) * 100)
    );
    updateAudioPlayerDOM();
    speakNextChunk(lang);
  };

  utterance.onerror = () => {
    audioEngine.isPlaying = false;
    updateAudioPlayerDOM();
  };

  window.speechSynthesis.speak(utterance);
}

function pauseModuleAudio() {
  if (!audioEngine.isPlaying || audioEngine.isPaused) return;
  audioEngine.isPaused = true;

  if (audioEngine.mode === 'mp3' && audioEngine.htmlAudio) {
    audioEngine.htmlAudio.pause();
  } else if ('speechSynthesis' in window) {
    // Cancel current sentence chunk so resume cleanly restarts from currentChunkIndex across Chrome/Edge/Mobile
    window.speechSynthesis.cancel();
  }
  updateAudioPlayerDOM();
}

function resumeModuleAudio() {
  if (!audioEngine.isPaused) return;
  audioEngine.isPaused = false;
  audioEngine.isPlaying = true;

  if (audioEngine.mode === 'mp3' && audioEngine.htmlAudio) {
    audioEngine.htmlAudio.play().catch(() => {});
  } else {
    speakNextChunk(audioEngine.selectedLang);
  }
  updateAudioPlayerDOM();
}

function replayModuleAudio(moduleObj) {
  startModuleAudio(moduleObj, audioEngine.selectedLang);
}

function updateAudioPlayerDOM() {
  const statusEl = document.getElementById('csAudioStatusLabel');
  const progressFillEl = document.getElementById('csAudioProgressFill');
  const progressPctEl = document.getElementById('csAudioProgressPct');
  const sourceBadgeEl = document.getElementById('csAudioSourceBadge');
  const btnPlay = document.getElementById('csBtnAudioPlay');
  const btnPause = document.getElementById('csBtnAudioPause');
  const btnResume = document.getElementById('csBtnAudioResume');

  const langNames = {
    en: '🇬🇧 English (en-IN)',
    hi: '🇮🇳 हिंदी (hi-IN)',
    mr: '🇮🇳 मराठी (mr-IN)'
  };

  if (statusEl) {
    const stateStr = audioEngine.isPaused
      ? '⏸ Paused'
      : audioEngine.isPlaying
      ? '🔊 Playing Complete Module Audio'
      : '🎧 Ready to Listen (Click a language or ▶ Play)';
    statusEl.innerHTML = `${stateStr} • <strong>${langNames[audioEngine.selectedLang] || langNames.en}</strong>`;
  }

  if (progressFillEl) {
    progressFillEl.style.width = `${audioEngine.progressPercent}%`;
  }
  if (progressPctEl) {
    progressPctEl.textContent = `${audioEngine.progressPercent}%`;
  }
  if (sourceBadgeEl) {
    if (audioEngine.mode === 'mp3') {
      sourceBadgeEl.textContent = `🎵 Pre-recorded Studio Audio (${audioEngine.currentAudioPath})`;
    } else {
      sourceBadgeEl.textContent = `🤖 Generated Browser Speech (SpeechSynthesis Fallback • Path: ${audioEngine.currentAudioPath || 'audio/course-X/module-Y/*.mp3'})`;
    }
  }
  if (btnPlay) btnPlay.disabled = (audioEngine.isPlaying && !audioEngine.isPaused);
  if (btnPause) btnPause.disabled = (!audioEngine.isPlaying || audioEngine.isPaused);
  if (btnResume) btnResume.disabled = !audioEngine.isPaused;
}

// ============================================================================
// PAGE & MODAL RENDERERS
// ============================================================================
function initCoursesPage() {
  audioEngine.selectedLang = getPreferredAudioLang();
  audioEngine.volume = getPreferredVolume();

  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam && ['senior', 'students', 'professionals', 'women', 'farmers'].includes(filterParam)) {
    activeFilter = filterParam;
  }

  setupFilterButtons();
  renderCourses(activeFilter);

  document.addEventListener('cybersathi-lang-change', (e) => {
    const newL = (e && e.detail && e.detail.lang) ? e.detail.lang : getPreferredAudioLang();
    if (newL === 'en' || newL === 'hi' || newL === 'mr') {
      setPreferredAudioLang(newL);
      renderCourses(activeFilter);
    }
  });
}

function setupFilterButtons() {
  const btns = document.querySelectorAll('.course-filter-btn');
  btns.forEach(btn => {
    if (btn.dataset.category === activeFilter) {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.category;
      renderCourses(activeFilter);
    });
  });
}

function renderCourses(filter = 'all') {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  const currentLang = getPreferredAudioLang();
  const filtered = COURSES_DATA.filter(c => filter === 'all' || c.category === filter);

  if (!filtered.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <span style="font-size: 48px; display: block; margin-bottom: 12px;">🔍</span>
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 20px; color: var(--cs-deep);">No courses found in this category</h3>
        <p style="color: var(--cs-muted); margin-top: 6px;">Try selecting "All Courses" to explore our full curriculum.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => {
    const title = course.title[currentLang] || course.title.en;
    const subtitle = course.subtitle[currentLang] || course.subtitle.en;
    const desc = course.description[currentLang] || course.description.en;
    const badgeText = (typeof course.badge === 'object') ? (course.badge[currentLang] || course.badge.en) : course.badge;
    const skillsArr = (course.keySkills && course.keySkills[currentLang]) || course.keySkills.en || [];

    return `
      <article class="course-card" id="card-${course.id}">
        <div class="course-card-media">
          <img src="${course.image}" alt="${course.title.en}" class="course-card-img" loading="lazy" />
          <div class="course-card-badges">
            <span class="badge-category" style="background: ${course.badgeBg}; color: ${course.badgeColor};">
              ${course.badgeIcon} ${badgeText}
            </span>
            <span class="badge-free">100% Free • EN / HI / MR Audio</span>
          </div>
          <div class="course-duration-pill">
            ⏱️ ${course.duration} • 4 Trilingual Modules
          </div>
        </div>

        <div class="course-card-body">
          <h3 class="course-card-title">${title}</h3>
          <p class="course-card-sub">${subtitle}</p>
          <p class="course-card-desc">${desc}</p>

          <!-- Trilingual Audio Availability Badge -->
          <div style="background: rgba(8, 107, 139, 0.07); border: 1px solid rgba(8, 107, 139, 0.22); border-radius: 10px; padding: 10px 12px; margin-bottom: 14px; font-size: 12.5px;">
            <div style="font-weight: 800; color: var(--cs-deep); margin-bottom: 4px;">
              🎧 Every Module Includes Complete Audio In:
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; font-weight: 700; color: var(--cs-ink);">
              <span>🇬🇧 English ▶ Listen</span>
              <span>•</span>
              <span>🇮🇳 हिंदी ▶ सुनें</span>
              <span>•</span>
              <span>🇮🇳 मराठी ▶ ऐका</span>
            </div>
          </div>

          <div class="course-skills-box">
            <strong style="font-size: 12px; text-transform: uppercase; color: var(--cs-deep); letter-spacing: 0.05em; display: block; margin-bottom: 6px;">
              Key Competencies You Will Master:
            </strong>
            <ul class="course-skills-list">
              ${skillsArr.slice(0, 4).map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>

          <!-- Module Accordion Preview with Direct Module Audio Launchers -->
          <div class="course-modules-preview">
            <button class="btn-toggle-curriculum" data-course-id="${course.id}" aria-expanded="false">
              <span>View 4 Modules & Audio Languages</span>
              <span class="accordion-arrow">▼</span>
            </button>
            <div class="curriculum-drawer" id="curriculum-${course.id}" hidden>
              <ol class="curriculum-list" style="list-style: none; padding-left: 0;">
                ${course.modules.map((m, idx) => `
                  <li style="padding: 10px 0; border-bottom: 1px dashed var(--cs-line);">
                    <strong style="display: block; color: var(--cs-deep);">${m.title[currentLang] || m.title.en}</strong>
                    <small style="margin-bottom: 6px;">${m.summary[currentLang] || m.summary.en}</small>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;">
                      <button type="button" class="btn btn-outline btn-jump-module-audio" data-course-id="${course.id}" data-mod-idx="${idx}" data-audio-lang="en" style="padding: 4px 10px; font-size: 11.5px;">
                        🇬🇧 English ▶ Listen
                      </button>
                      <button type="button" class="btn btn-outline btn-jump-module-audio" data-course-id="${course.id}" data-mod-idx="${idx}" data-audio-lang="hi" style="padding: 4px 10px; font-size: 11.5px;">
                        🇮🇳 हिंदी ▶ सुनें
                      </button>
                      <button type="button" class="btn btn-outline btn-jump-module-audio" data-course-id="${course.id}" data-mod-idx="${idx}" data-audio-lang="mr" style="padding: 4px 10px; font-size: 11.5px;">
                        🇮🇳 मराठी ▶ ऐका
                      </button>
                    </div>
                  </li>
                `).join('')}
              </ol>
            </div>
          </div>

          <div class="course-card-actions">
            <button class="btn btn-blue btn-start-course" data-course-id="${course.id}">
              <span>Start Free Course 🚀</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Wire up curriculum drawer toggles
  container.querySelectorAll('.btn-toggle-curriculum').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.dataset.courseId;
      const drawer = document.getElementById(`curriculum-${courseId}`);
      if (!drawer) return;
      const isHidden = drawer.hidden;
      drawer.hidden = !isHidden;
      btn.setAttribute('aria-expanded', String(!isHidden));
      btn.querySelector('.accordion-arrow').textContent = isHidden ? '▲' : '▼';
    });
  });

  // Wire up direct module + language audio launchers from the outline drawer
  container.querySelectorAll('.btn-jump-module-audio').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.dataset.courseId;
      const modIdx = parseInt(btn.dataset.modIdx, 10) || 0;
      const chosenLang = btn.dataset.audioLang || 'en';
      setPreferredAudioLang(chosenLang);
      startCourseInteractive(courseId, modIdx, true);
    });
  });

  // Wire up start course buttons (Does NOT auto-play audio upon opening)
  container.querySelectorAll('.btn-start-course').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.dataset.courseId;
      startCourseInteractive(courseId, 0, false);
    });
  });
}

function startCourseInteractive(courseId, initialStep = 0, playImmediately = false) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  stopModuleAudio();
  currentActiveCourse = course;
  currentModalStep = initialStep;
  modulePracticeAnswered = false;
  modulePracticeCorrect = false;
  renderInteractiveModalStep(playImmediately);
}

function renderInteractiveModalStep(playImmediately = false) {
  if (!currentActiveCourse) return;
  stopModuleAudio();

  const course = currentActiveCourse;
  const activeLang = audioEngine.selectedLang || getPreferredAudioLang();
  const totalSteps = course.modules.length + 2; // 4 modules + 1 quiz + 1 certificate
  const openModal = window.openModal || function () {};

  let stepHtml = '';

  if (currentModalStep < course.modules.length) {
    const currentModule = course.modules[currentModalStep];
    const isFirst = currentModalStep === 0;
    const modTitle = currentModule.title[activeLang] || currentModule.title.en;
    const modSummary = currentModule.summary[activeLang] || currentModule.summary.en;
    const modContent = currentModule.content[activeLang] || currentModule.content.en;
    const modScript = currentModule.audioScript[activeLang] || currentModule.audioScript.en;
    const badgeText = (typeof course.badge === 'object') ? (course.badge[activeLang] || course.badge.en) : course.badge;
    const mp3Path = (currentModule.audioFiles && currentModule.audioFiles[activeLang])
      || `audio/course-${course.courseNumber}/module-${currentModule.moduleNumber}/english.mp3`;

    const prac = currentModule.practice;

    stepHtml = `
      <div class="course-modal-wrapper">
        <!-- Header -->
        <div class="course-modal-header">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge-category" style="background: ${course.badgeBg}; color: ${course.badgeColor};">
                ${course.badgeIcon} ${badgeText}
              </span>
              <span style="font-size: 13px; color: var(--cs-muted); font-weight: 700;">
                Module ${currentModalStep + 1} of ${course.modules.length}
              </span>
            </div>
            <span style="font-size: 12px; font-weight: 800; color: #15803d; background: #dcfce7; padding: 3px 10px; border-radius: 999px;">
              FREE COMMUNITY COURSE
            </span>
          </div>

          <h2 style="font-family: 'Outfit', sans-serif; font-size: 21px; color: var(--cs-deep); margin: 0;">
            ${modTitle}
          </h2>
          <p style="font-size: 13.5px; color: var(--cs-muted); margin: 4px 0 0 0;">
            ${modSummary}
          </p>
        </div>

        <!-- Overall Course Progress bar -->
        <div class="course-progress-track">
          <div class="course-progress-fill" style="width: ${((currentModalStep + 1) / totalSteps) * 100}%"></div>
        </div>

        <!-- 🎧 TRILINGUAL MODULE AUDIO CONSOLE (EN / HI / MR + Play/Pause/Resume/Replay/Volume/Progress) -->
        <div class="cs-trilingual-audio-console" style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 14px; padding: 16px; margin-bottom: 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
            <div style="font-size: 13px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 0.04em;">
              🎧 AUDIO LANGUAGE (Complete Module Audio & Text Sync):
            </div>
            <div id="csAudioStatusLabel" style="font-size: 12.5px; color: #15803d; font-weight: 700;">
              🎧 Ready to Listen • <strong>${activeLang === 'hi' ? '🇮🇳 हिंदी (hi-IN)' : activeLang === 'mr' ? '🇮🇳 मराठी (mr-IN)' : '🇬🇧 English (en-IN)'}</strong>
            </div>
          </div>

          <!-- 3 Prominent Language Listen Buttons -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 12px;">
            <button type="button" class="btn ${activeLang === 'en' ? 'btn-primary' : 'btn-outline'} cs-lang-listen-btn" data-audio-lang="en" style="justify-content: center; padding: 9px 12px; font-size: 13.5px; font-weight: 800;">
              🇬🇧 English &nbsp;▶ Listen
            </button>
            <button type="button" class="btn ${activeLang === 'hi' ? 'btn-primary' : 'btn-outline'} cs-lang-listen-btn" data-audio-lang="hi" style="justify-content: center; padding: 9px 12px; font-size: 13.5px; font-weight: 800;">
              🇮🇳 हिंदी &nbsp;▶ सुनें
            </button>
            <button type="button" class="btn ${activeLang === 'mr' ? 'btn-primary' : 'btn-outline'} cs-lang-listen-btn" data-audio-lang="mr" style="justify-content: center; padding: 9px 12px; font-size: 13.5px; font-weight: 800;">
              🇮🇳 मराठी &nbsp;▶ ऐका
            </button>
          </div>

          <!-- Audio Transport Controls: Play, Pause, Resume, Replay, Volume, Progress -->
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding-top: 10px; border-top: 1px dashed #bbf7d0;">
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button type="button" id="csBtnAudioPlay" class="btn btn-blue" style="padding: 6px 12px; font-size: 12.5px;">
                ▶ Play
              </button>
              <button type="button" id="csBtnAudioPause" class="btn btn-outline" style="padding: 6px 12px; font-size: 12.5px;" disabled>
                ⏸ Pause
              </button>
              <button type="button" id="csBtnAudioResume" class="btn btn-outline" style="padding: 6px 12px; font-size: 12.5px;" disabled>
                ⏯ Resume
              </button>
              <button type="button" id="csBtnAudioReplay" class="btn btn-outline" style="padding: 6px 12px; font-size: 12.5px;">
                🔁 Replay
              </button>
            </div>

            <!-- Volume Slider -->
            <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: #166534;">
              <span>🔊 Volume:</span>
              <input type="range" id="csAudioVolumeSlider" min="0" max="1" step="0.05" value="${audioEngine.volume}" style="width: 85px; accent-color: #15803d; cursor: pointer;" />
            </div>
          </div>

          <!-- Audio Progress Bar -->
          <div style="margin-top: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: #166534; font-weight: 700; margin-bottom: 4px;">
              <span id="csAudioSourceBadge">🤖 Generated Browser Speech (SpeechSynthesis Fallback • Path: ${mp3Path})</span>
              <span id="csAudioProgressPct">0%</span>
            </div>
            <div style="width: 100%; height: 7px; background: #dcfce7; border-radius: 999px; overflow: hidden;">
              <div id="csAudioProgressFill" style="width: 0%; height: 100%; background: #16a34a; transition: width 0.25s ease;"></div>
            </div>
          </div>
        </div>

        <!-- Module Written Content & Spoken Transcript (Synchronized with Selected Language) -->
        <div class="course-modal-body">
          ${modContent}

          <div style="background: rgba(8, 107, 139, 0.05); border-left: 4px solid var(--cs-deep); padding: 12px 16px; border-radius: 8px; margin: 16px 0; font-size: 13.5px;">
            <strong style="display: block; color: var(--cs-deep); margin-bottom: 4px;">
              📝 Complete Spoken Audio Script (${activeLang === 'hi' ? 'हिंदी' : activeLang === 'mr' ? 'मराठी' : 'English'}):
            </strong>
            <span style="color: var(--cs-ink); line-height: 1.6;">${modScript}</span>
          </div>

          <!-- Interactive Module Practice Check -->
          ${prac ? `
            <div style="background: var(--cs-card-bg); border: 1.5px solid var(--cs-line-strong); border-radius: 12px; padding: 16px; margin-top: 16px;">
              <div style="font-size: 12px; font-weight: 800; color: #b45309; text-transform: uppercase; margin-bottom: 6px;">
                🎯 Interactive Module Practice (${activeLang === 'hi' ? 'अभ्यास' : activeLang === 'mr' ? 'सराव' : 'Practice'})
              </div>
              <p style="font-weight: 700; font-size: 14.5px; color: var(--cs-ink); margin: 0 0 12px 0;">
                ${prac.prompt[activeLang] || prac.prompt.en}
              </p>
              <div style="display: grid; gap: 8px;">
                ${prac.options.map((opt, oIdx) => `
                  <button type="button" class="sim-option-btn cs-mod-practice-opt" data-opt-idx="${oIdx}" style="padding: 10px 14px; font-size: 13.5px; margin-bottom: 0;">
                    <span>${opt.text[activeLang] || opt.text.en}</span>
                  </button>
                `).join('')}
              </div>
              ${modulePracticeAnswered ? `
                <div style="margin-top: 10px; padding: 10px 12px; border-radius: 8px; background: ${modulePracticeCorrect ? '#dcfce7' : '#fee2e2'}; color: ${modulePracticeCorrect ? '#166534' : '#991b1b'}; font-size: 13.5px; font-weight: 600;">
                  ${modulePracticeCorrect ? '✅ ' : '❌ '} ${prac.explanation[activeLang] || prac.explanation.en}
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>

        <!-- Footer Navigation -->
        <div class="course-modal-footer">
          <button class="btn btn-outline" id="btnModalPrev" ${isFirst ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
            ← Previous Module
          </button>

          <button class="btn btn-blue" id="btnModalNext">
            ${currentModalStep === course.modules.length - 1 ? 'Proceed to Final Quiz →' : 'Next Module →'}
          </button>
        </div>
      </div>
    `;
  } else if (currentModalStep === course.modules.length) {
    // Final Knowledge Check Quiz in Selected Language (EN / HI / MR)
    const qText = course.quiz.question[activeLang] || course.quiz.question.en;
    const qOpts = course.quiz.options;

    stepHtml = `
      <div class="course-modal-wrapper">
        <div class="course-modal-header">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
            <span class="badge-category" style="background: #e0f2fe; color: #0284c7;">
              🎯 Final Knowledge Check (${activeLang === 'hi' ? 'हिंदी' : activeLang === 'mr' ? 'मराठी' : 'English'})
            </span>
            <div style="display: flex; gap: 6px;">
              <button type="button" class="btn btn-outline cs-quiz-lang-switch" data-q-lang="en" style="padding: 4px 10px; font-size: 12px;">🇬🇧 EN</button>
              <button type="button" class="btn btn-outline cs-quiz-lang-switch" data-q-lang="hi" style="padding: 4px 10px; font-size: 12px;">🇮🇳 HI</button>
              <button type="button" class="btn btn-outline cs-quiz-lang-switch" data-q-lang="mr" style="padding: 4px 10px; font-size: 12px;">🇮🇳 MR</button>
            </div>
          </div>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 22px; color: var(--cs-deep); margin: 0;">
            Practical Scenario Test
          </h2>
        </div>

        <div class="course-progress-track">
          <div class="course-progress-fill" style="width: ${((course.modules.length + 1) / totalSteps) * 100}%"></div>
        </div>

        <div class="course-modal-body">
          <div style="background: #f8fafc; border: 1px solid var(--cs-line-strong); border-radius: 12px; padding: 18px; margin-bottom: 18px;">
            <p style="font-size: 16px; font-weight: 700; color: var(--cs-deep); line-height: 1.5; margin: 0;">
              ${qText}
            </p>
          </div>

          <div class="quiz-options-group" id="courseQuizOptions">
            ${qOpts.map((opt, idx) => `
              <label class="quiz-option-label" data-index="${idx}">
                <input type="radio" name="courseQuizAns" value="${idx}" />
                <span>${opt[activeLang] || opt.en}</span>
              </label>
            `).join('')}
          </div>

          <div id="courseQuizFeedback" style="display: none; margin-top: 18px; padding: 14px; border-radius: 10px; font-size: 14px;"></div>
        </div>

        <div class="course-modal-footer">
          <button class="btn btn-outline" id="btnModalPrev">
            ← Back to Modules
          </button>
          <button class="btn btn-green" id="btnSubmitCourseQuiz">
            Verify Answer & Get Certificate 🏅
          </button>
        </div>
      </div>
    `;
  } else {
    // Certificate Step (Strictly labeled CyberSathi Course Completion Certificate • Educational completion certificate)
    const citizenDefaultName = (window.localStorage ? window.localStorage.getItem('cybersathi_user_name') || 'Dedicated Community Citizen' : 'Dedicated Community Citizen');
    const todayStr = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    const cTitle = course.title[activeLang] || course.title.en;

    stepHtml = `
      <div class="course-modal-wrapper">
        <div class="course-certificate-card" id="certificateNode">
          <div class="cert-border-inner">
            <div class="cert-header">
              <span style="font-size: 36px; display: block; margin-bottom: 4px;">🛡️</span>
              <span class="cert-brand">CYBERSATHI COMMUNITY LEARNING</span>
              <small>Free Community Course • Educational Completion Certificate</small>
            </div>

            <div class="cert-title-area">
              <h3>CyberSathi Course Completion Certificate</h3>
              <p>This educational completion certificate is awarded to</p>
              <div class="cert-recipient-name" id="certRecipientDisplay" contenteditable="true" title="Click to edit your name">
                ${citizenDefaultName}
              </div>
              <p>for completing the free community cyber awareness course:</p>
              <div class="cert-course-name">
                ${cTitle}
              </div>
              <span class="cert-badge-tag">🏅 Badge: ${course.certificateTitle}</span>
            </div>

            <div class="cert-footer">
              <div>
                <strong>Date Completed:</strong>
                <div>${todayStr}</div>
              </div>
              <div class="cert-seal">
                <span>COMPLETED</span>
                <small>CyberSathi</small>
              </div>
              <div>
                <strong>Certificate Type:</strong>
                <div>Educational completion certificate.</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 20px;">
          <p style="font-size: 13px; color: var(--cs-muted); margin: 0;">
            💡 Tip: Click on your name above to customize it before printing!
          </p>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-outline" onclick="window.print()">
              🖨️ Print Certificate
            </button>
            <button class="btn btn-blue" onclick="window.closeModal()">
              Done / Return to Courses
            </button>
          </div>
        </div>
      </div>
    `;
  }

  openModal(stepHtml);

  // Wire up modal listeners
  const btnPrev = document.getElementById('btnModalPrev');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentModalStep > 0) {
        stopModuleAudio();
        currentModalStep--;
        modulePracticeAnswered = false;
        modulePracticeCorrect = false;
        renderInteractiveModalStep(false);
      }
    });
  }

  const btnNext = document.getElementById('btnModalNext');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      stopModuleAudio();
      currentModalStep++;
      modulePracticeAnswered = false;
      modulePracticeCorrect = false;
      renderInteractiveModalStep(false);
    });
  }

  // Wire up Trilingual Audio Language Buttons (🇬🇧 English ▶ Listen, 🇮🇳 हिंदी ▶ सुनें, 🇮🇳 मराठी ▶ ऐका)
  if (currentModalStep < course.modules.length) {
    const currentModule = course.modules[currentModalStep];

    document.querySelectorAll('.cs-lang-listen-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-audio-lang') || 'en';
        setPreferredAudioLang(targetLang);
        // Re-render module text in the selected language AND play the complete module audio in that language
        renderInteractiveModalStep(true);
      });
    });

    const btnPlay = document.getElementById('csBtnAudioPlay');
    if (btnPlay) {
      btnPlay.addEventListener('click', () => {
        startModuleAudio(currentModule, audioEngine.selectedLang);
      });
    }

    const btnPause = document.getElementById('csBtnAudioPause');
    if (btnPause) {
      btnPause.addEventListener('click', () => {
        pauseModuleAudio();
      });
    }

    const btnResume = document.getElementById('csBtnAudioResume');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        resumeModuleAudio();
      });
    }

    const btnReplay = document.getElementById('csBtnAudioReplay');
    if (btnReplay) {
      btnReplay.addEventListener('click', () => {
        replayModuleAudio(currentModule);
      });
    }

    const volSlider = document.getElementById('csAudioVolumeSlider');
    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        setPreferredVolume(e.target.value);
      });
    }

    // Module Practice Options
    document.querySelectorAll('.cs-mod-practice-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const oIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const chosen = currentModule.practice && currentModule.practice.options[oIdx];
        if (!chosen) return;
        modulePracticeAnswered = true;
        modulePracticeCorrect = Boolean(chosen.correct);
        renderInteractiveModalStep(false);
      });
    });

    if (playImmediately) {
      startModuleAudio(currentModule, audioEngine.selectedLang);
    }
  }

  // Quiz Language Switcher
  document.querySelectorAll('.cs-quiz-lang-switch').forEach(btn => {
    btn.addEventListener('click', () => {
      const qLang = btn.getAttribute('data-q-lang') || 'en';
      setPreferredAudioLang(qLang);
      renderInteractiveModalStep(false);
    });
  });

  // Final Quiz Submission
  const btnSubmitQuiz = document.getElementById('btnSubmitCourseQuiz');
  if (btnSubmitQuiz) {
    btnSubmitQuiz.addEventListener('click', () => {
      const selected = document.querySelector('input[name="courseQuizAns"]:checked');
      const feedback = document.getElementById('courseQuizFeedback');
      if (!selected) {
        if (window.showToast) window.showToast('Please select an answer to continue.', 'error');
        return;
      }

      const userChoice = parseInt(selected.value, 10);
      const expText = course.quiz.explanation[activeLang] || course.quiz.explanation.en;

      if (userChoice === course.quiz.correct) {
        feedback.style.display = 'block';
        feedback.style.background = '#dcfce7';
        feedback.style.color = '#15803d';
        feedback.style.border = '1px solid #86efac';
        feedback.innerHTML = `<strong>✅ Correct!</strong> ${expText}`;

        setTimeout(() => {
          currentModalStep = course.modules.length + 1;
          renderInteractiveModalStep(false);
          if (window.showToast) window.showToast('Course completed! Here is your completion certificate.', 'success');
        }, 1400);
      } else {
        feedback.style.display = 'block';
        feedback.style.background = '#fee2e2';
        feedback.style.color = '#b91c1c';
        feedback.style.border = '1px solid #fca5a5';
        feedback.innerHTML = `<strong>❌ Not quite safe:</strong> ${expText}`;
      }
    });
  }
}

// Global hooks
if (typeof window !== 'undefined') {
  window.initCoursesPage = initCoursesPage;
  window.renderCourses = renderCourses;
  window.startCourseInteractive = startCourseInteractive;
  window.COURSES_DATA = COURSES_DATA;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('coursesGrid')) {
    initCoursesPage();
  }
});
