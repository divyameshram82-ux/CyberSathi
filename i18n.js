(function(){
  const T={
    'Skip to content':['सामग्री पर जाएँ','सामग्रीकडे जा'],
    'Home':['होम','मुख्यपृष्ठ'],'About':['परिचय','परिचय'],'Who We Help':['ज्यांना आम्ही मदत करतो','ज्यांना आम्ही मदत करतो'],
    'Awareness':['जागरूकता','जागरूकता'],'Videos':['व्हिडिओ','व्हिडिओ'],'Animation':['अॅनिमेशन','अॅनिमेशन'],'Real Cases':['वास्तविक प्रकरणे','वास्तविक प्रकरणे'],
    'Listen & Learn':['ऐका आणि शिका','ऐका आणि शिका'],'Government Schemes':['सरकारी योजना','शासकीय योजना'],'Voice Saathi':['व्हॉइस साथी','व्हॉइस साथी'],
    'Fraud Stories':['फसवणुकीच्या कथा','फसवणुकीच्या कथा'],'Help Centre':['मदत केंद्र','मदत केंद्र'],'Quiz':['प्रश्नमंजुषा','प्रश्नमंजुषा'],
    'Get Help':['मदत घ्या','मदत मिळवा'],'Our Work':['आमचे कार्य','आमचे कार्य'],'Volunteer':['स्वयंसेवक','स्वयंसेवक'],'Contact':['संपर्क','संपर्क'],
    'WHY CYBERSATHI?':['सायबरसाथी का?','सायबरसाथी का?'],'WHO WE HELP':['आम्ही कोणाला मदत करतो','आम्ही कोणाला मदत करतो'],
    'CYBER & DIGITAL AWARENESS':['सायबर आणि डिजिटल जागरूकता','सायबर आणि डिजिटल जागरूकता'],
    'Digital Safety for Every Family.':['प्रत्येक कुटुंबासाठी डिजिटल सुरक्षितता.','प्रत्येक कुटुंबासाठी डिजिटल सुरक्षितता.'],
    'Learn Cyber Safety →':['सायबर सुरक्षितता शिका →','सायबर सुरक्षितता शिका →'],
    '▶ Explore Cyber Awareness Videos':['▶ सायबर जागरूकता व्हिडिओ पहा','▶ सायबर जागरूकता व्हिडिओ पहा'],
    'Technology should create opportunities, not fear.':['तंत्रज्ञानाने भीती नव्हे तर संधी निर्माण करायला हव्यात.','तंत्रज्ञानाने भीती नव्हे तर संधी निर्माण करायला हव्यात.'],
    'Cyber Awareness':['सायबर जागरूकता','सायबर जागरूकता'],'Digital Literacy':['डिजिटल साक्षरता','डिजिटल साक्षरता'],'Safe Payments':['सुरक्षित पेमेंट्स','सुरक्षित व्यवहार'],
    'Digital Services':['डिजिटल सेवा','डिजिटल सेवा'],'Safety for every kind of digital user.':['प्रत्येक डिजिटल वापरकर्त्यासाठी सुरक्षितता.','प्रत्येक डिजिटल वापरकर्त्यासाठी सुरक्षितता.'],
    'Know the risks.':['जोखीम ओळखा.','धोके ओळखा.'],'Stay safe.':['सुरक्षित रहा.','सुरक्षित रहा.'],
    'Search a topic to open a practical, multilingual safety guide.':['व्यावहारिक, बहुभाषिक सुरक्षा मार्गदर्शक उघडण्यासाठी विषय शोधा.','व्यावहारिक, बहुभाषिक सुरक्षा मार्गदर्शक उघडण्यासाठी विषय शोधा.'],
    '🎭 Real-World Cyber Awareness Videos':['🎭 वास्तविक सायबर जागरूकता व्हिडिओ','🎭 वास्तविक सायबर जागरूकता व्हिडिओ'],
    'Learn from real cyber-awareness performances and educational videos shared on YouTube.':['YouTube वर शेअर केलेल्या वास्तविक सायबर-जागरूकता सादरीकरणे आणि शैक्षणिक व्हिडिओमधून शिका.','YouTube वर शेअर केलेल्या वास्तविक सायबर-जागरूकता सादरीकरणे आणि शैक्षणिक व्हिडिओमधून शिका.'],
    '🎬 Animated Cyber-Awareness Stories':['🎬 अॅनिमेटेड सायबर-जागरूकता कथा','🎬 अॅनिमेटेड सायबर-जागरूकता कथा'],
    'Simple animated stories that help you recognize scams before it is too late.':['उशीर होण्यापूर्वी फसवणूक ओळखायला मदत करणाऱ्या सोप्या अॅनिमेटेड कथा.','उशीर होण्यापूर्वी फसवणूक ओळखायला मदत करणाऱ्या सोप्या अॅनिमेटेड कथा.'],
    '🎧 Listen to Real Fraud Stories':['🎧 वास्तविक फसवणुकीच्या कथा ऐका','🎧 वास्तविक फसवणुकीच्या कथा ऐका'],
    'Real-world cyber fraud cases explained in simple language so you can recognize the warning signs.':['वास्तविक सायबर फसवणुकीची प्रकरणे सोप्या भाषेत समजून घ्या आणि इशारे ओळखा.','वास्तविक सायबर फसवणुकीची प्रकरणे सोप्या भाषेत समजून घ्या आणि इशारे ओळखा.'],
    'Listen & Learn':['ऐका आणि शिका','ऐका आणि शिका'],'Turn a safety lesson into a conversation.':['सुरक्षिततेचा धडा संवादात बदला.','सुरक्षिततेचा धडा संवादात बदला.'],
    'Play':['प्ले','प्ले'],'Pause':['थांबवा','विराम'],'Stop':['थांबवा','थांबवा'],'Replay':['पुन्हा ऐका','पुन्हा चालवा'],
    'No story selected':['कोणतीही कथा निवडलेली नाही','कोणतीही कथा निवडलेली नाही'],'English':['इंग्रजी','इंग्रजी'],'Hindi':['हिंदी','हिंदी'],'Marathi':['मराठी','मराठी'],
    'Ready':['तयार','तयार'],'Official Source ↗':['अधिकृत स्रोत ↗','अधिकृत स्रोत ↗'],'Request a Call':['कॉलची विनंती करा','कॉलची विनंती करा'],
    'Name':['नाव','नाव'],'Phone Number':['फोन नंबर','फोन नंबर'],'Preferred Language':['पसंतीची भाषा','पसंतीची भाषा'],'Topic / Reason':['विषय / कारण','विषय / कारण'],'Preferred Time':['पसंतीची वेळ','पसंतीची वेळ'],
    'I consent to this call request being stored.':['ही कॉल विनंती जतन करण्यास माझी संमती आहे.','ही कॉल विनंती जतन करण्यास माझी संमती आहे.'],
    'I Got Scammed — What Should I Do?':['माझी फसवणूक झाली — आता काय करावे?','माझी फसवणूक झाली — आता काय करावे?'],
    'Stay Calm':['शांत रहा','शांत रहा'],'Contact Your Bank / Payment Provider':['तुमच्या बँकेशी / पेमेंट सेवेशी संपर्क करा','तुमच्या बँकेशी / पेमेंट सेवेशी संपर्क करा'],
    'Secure Your Accounts':['तुमची खाती सुरक्षित करा','तुमची खाती सुरक्षित करा'],'Save Evidence':['पुरावे जतन करा','पुरावे जतन करा'],'Report the Incident':['घटनेची तक्रार करा','घटनेची तक्रार करा'],
    'Tell a Trusted Person':['विश्वासू व्यक्तीला सांगा','विश्वासू व्यक्तीला सांगा'],'Report Cyber Crime':['सायबर गुन्ह्याची तक्रार करा','सायबर गुन्ह्याची तक्रार करा'],
    'Cyber Safety Quiz':['सायबर सुरक्षा प्रश्नमंजुषा','सायबर सुरक्षा प्रश्नमंजुषा'],'Previous':['मागील','मागील'],'Next':['पुढील','पुढील'],'Restart':['पुन्हा सुरू करा','पुन्हा सुरू करा'],
    'Listen':['ऐका','ऐका'],'Correct!':['बरोबर!','बरोबर!'],'Choose an option first.':['प्रथम एक पर्याय निवडा.','प्रथम एक पर्याय निवडा.'],
    'Government Schemes & Digital Services':['सरकारी योजना आणि डिजिटल सेवा','शासकीय योजना आणि डिजिटल सेवा'],
    'Use official sources before sharing personal information or making payments.':['वैयक्तिक माहिती देण्यापूर्वी किंवा पेमेंट करण्यापूर्वी अधिकृत स्रोत वापरा.','वैयक्तिक माहिती देण्यापूर्वी किंवा व्यवहार करण्यापूर्वी अधिकृत स्रोत वापरा.'],
    'Indian Cybercrime Coordination Centre (I4C)':['भारतीय सायबरक्राइम कोऑर्डिनेशन सेंटर (I4C)','भारतीय सायबरक्राइम कोऑर्डिनेशन सेंटर (I4C)'],
    'OFFICIAL LOCATION':['अधिकृत ठिकाण','अधिकृत ठिकाण'],'View Location':['ठिकाण पहा','ठिकाण पहा'],'MHA / I4C Information ↗':['MHA / I4C माहिती ↗','MHA / I4C माहिती ↗'],
    'For cybercrime reporting in India':['भारतात सायबर गुन्ह्याची तक्रार करण्यासाठी','भारतात सायबर गुन्ह्याची तक्रार करण्यासाठी'],
    'Financial cyber fraud:':['आर्थिक सायबर फसवणूक:','आर्थिक सायबर फसवणूक:'],'Online reporting:':['ऑनलाइन तक्रार:','ऑनलाइन तक्रार:'],
    'Become a CyberSathi Volunteer':['सायबरसाथी स्वयंसेवक बना','सायबरसाथी स्वयंसेवक बना'],'Submit Interest':['स्वारस्य नोंदवा','स्वारस्य नोंदवा'],
    'Contact Us':['आमच्याशी संपर्क करा','आमच्याशी संपर्क करा'],'Send Message':['संदेश पाठवा','संदेश पाठवा'],
    'Scam Report':['फसवणूक तक्रार','फसवणूक तक्रार'],'Submit Report':['तक्रार पाठवा','तक्रार पाठवा'],
    'CyberSathi curates publicly available cyber-awareness videos from YouTube for educational purposes. Video ownership remains with the original creators.':['CyberSathi शैक्षणिक उद्देशांसाठी YouTube वरील सार्वजनिक सायबर-जागरूकता व्हिडिओ संकलित करते. व्हिडिओची मालकी मूळ निर्मात्यांकडेच राहते.','CyberSathi शैक्षणिक उद्देशांसाठी YouTube वरील सार्वजनिक सायबर-जागरूकता व्हिडिओ संकलित करते. व्हिडिओची मालकी मूळ निर्मात्यांकडेच राहते.'],
    'Thank you! Your submission has been received successfully.':['धन्यवाद! तुमची नोंद यशस्वीपणे प्राप्त झाली आहे.','धन्यवाद! तुमची नोंद यशस्वीपणे प्राप्त झाली आहे.']
  };
  const key=(s)=>s.replace(/\s+/g,' ').trim();
  function apply(lang){
    window.CyberSathiSiteLang=lang;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n'); if(k==='heroTitle'){el.innerHTML=lang==='en'?'Digital Safety for Every <span>Family.</span>':lang==='hi'?'हर <span>परिवार के लिए डिजिटल सुरक्षा।</span>':'प्रत्येक <span>कुटुंबासाठी डिजिटल सुरक्षितता.</span>'; } if(k==='heroText'){el.textContent=lang==='en'?'Awareness for every village, opportunity for every family. CyberSathi makes cyber safety easy to understand, easy to practise and easy to share.':lang==='hi'?'हर गांव के लिए जागरूकता, हर परिवार के लिए अवसर। CyberSathi साइबर सुरक्षा को समझने, अपनाने और साझा करने में आसान बनाता है।':'प्रत्येक गावासाठी जागरूकता, प्रत्येक कुटुंबासाठी संधी. CyberSathi सायबर सुरक्षितता समजणे, वापरणे आणि शेअर करणे सोपे करते.';}});
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const textNodes=[]; while(walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node=>{
      const parent=node.parentElement;
      if(!parent || ['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)) return;
      const original=node.__csOriginal||node.nodeValue;
      const k=key(original);
      const tr=T[k];
      if(!tr) return;
      if(!node.__csOriginal) node.__csOriginal=original;
      const translated=lang==='hi'?tr[0]:lang==='mr'?tr[1]:original;
      node.nodeValue=original.replace(k,translated);
    });
    // Selected options and common placeholders/ARIA labels
    document.querySelectorAll('#language option').forEach(o=>{if(o.value==='en')o.textContent='🇬🇧 English';if(o.value==='hi')o.textContent='🇮🇳 हिंदी';if(o.value==='mr')o.textContent='🇮🇳 मराठी'});
    document.querySelectorAll('input,textarea,select').forEach(el=>{if(el.placeholder){const k=el.dataset.i18nPlaceholder||el.placeholder;el.dataset.i18nPlaceholder=k;if(T[k])el.placeholder=lang==='hi'?T[k][0]:lang==='mr'?T[k][1]:k;}});
    localStorage.setItem('cybersathi_language',lang);
    // Keep the existing real-fraud multilingual renderer synchronized.
    if(typeof renderFraud==='function') renderFraud();
  }
  const sel=document.getElementById('language');
  if(sel){const saved=localStorage.getItem('cybersathi_language')||'en';sel.value=saved;sel.addEventListener('change',()=>apply(sel.value));setTimeout(()=>apply(saved),0);}
  window.CyberSathiI18n={apply};
})();
