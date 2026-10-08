// CyberSathi Emergency Help & Reporting Forms Controller
// "Awareness for Every Village, Opportunity for Every Family"

(function () {
  'use strict';

  const getStore = () => window.Store || window.CyberSathiStore;
  const showToast = (...args) => (typeof window.showToast === 'function' ? window.showToast(...args) : alert(args[0]));

  const PROTOCOL_STEPS = [
    {
      title: {
        en: 'Stay Calm & Disconnect',
        hi: 'शांत रहें और कॉल काटें',
        mr: 'शांत राहा आणि फोन कापा'
      },
      desc: {
        en: 'Hang up immediately on the scammer. Do not transfer more money to "unlock" previous funds. Take a deep breath.',
        hi: 'ठग का फोन तुरंत काट दें। पिछले पैसे "अनलॉक" कराने के नाम पर और पैसे कभी न भेजें। घबराएं नहीं, शांत रहें।',
        mr: 'सायबर भामट्याचा फोन तात्काळ बंद करा. जुने पैसे "अनलॉक" करण्याच्या नावाखाली आणखी पैसे पाठवू नका. शांत राहा.'
      }
    },
    {
      title: {
        en: 'Contact Bank & Dial 1930',
        hi: 'बैंक से संपर्क करें और 1930 डायल करें',
        mr: 'बँकेशी संपर्क करा व १९३० डायल करा'
      },
      desc: {
        en: 'Call your bank’s 24/7 emergency toll-free number from your passbook/ATM card to block your card and freeze internet banking. Immediately dial <strong>1930</strong>.',
        hi: 'पासबुक/एटीएम कार्ड पर दिए गए बैंक के 24/7 आपातकालीन नंबर पर कॉल करके कार्ड व नेटबैंकिंग ब्लॉक करवाएं। तुरंत <strong>1930</strong> डायल करें।',
        mr: 'पासबुक/एटीएम कार्डवरील बँकेच्या २४/७ आपत्कालीन नंबरवर कॉल करून कार्ड व नेटबँकिंग ब्लॉक करा. तात्काळ <strong>१९३०</strong> डायल करा.'
      }
    },
    {
      title: {
        en: 'Block Apps & Change PINs',
        hi: 'ऐप्स ब्लॉक करें और पिन बदलें',
        mr: 'ॲप्स ब्लॉक करा व PIN बदला'
      },
      desc: {
        en: 'Change your UPI PINs, netbanking passwords, and email passwords. Uninstall any suspicious remote access apps (AnyDesk, QuickSupport) from your phone.',
        hi: 'अपने UPI पिन, नेटबैंकिंग पासवर्ड और ईमेल पासवर्ड तुरंत बदलें। फोन से किसी भी संदिग्ध रिमोट एक्सेस ऐप (AnyDesk, QuickSupport) को तुरंत अनइंस्टॉल करें।',
        mr: 'आपले UPI पिन, नेटबँकिंग पासवर्ड आणि ईमेल पासवर्ड त्वरित बदला. फोनवरून संशयास्पद रिमोट ॲप्स (AnyDesk, QuickSupport) तात्काळ काढून टाका.'
      }
    },
    {
      title: {
        en: 'Preserve All Evidence',
        hi: 'सभी सबूत सुरक्षित रखें',
        mr: 'सर्व पुरावे जपून ठेवा'
      },
      desc: {
        en: 'Take screenshots of SMS alerts, transaction UTR numbers, UPI IDs, WhatsApp chats, and caller phone numbers. Do not delete message threads.',
        hi: 'बैंक से पैसे कटने वाले SMS, 12 अंकों के UTR नंबर, UPI आईडी, व्हाट्सएप चैट और कॉलर के फोन नंबर के स्क्रीनशॉट लें। कोई भी मैसेज डिलीट न करें।',
        mr: 'पैसे वजा झाल्याचे SMS, १२ अंकी UTR क्रमांक, UPI आयडी, व्हॉट्सअ‍ॅप चॅट आणि फोन नंबरचे स्क्रीनशॉट घ्या. कोणतेही मेसेज डिलीट करू नका.'
      }
    },
    {
      title: {
        en: 'File National Police Complaint',
        hi: 'राष्ट्रीय पुलिस शिकायत दर्ज करें',
        mr: 'अधिकृत सायबर तक्रार नोंदवा'
      },
      desc: {
        en: 'File an official incident report at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener" style="color: var(--cs-deep); font-weight:700;">cybercrime.gov.in</a> and visit your local police cyber station with printouts.',
        hi: '<a href="https://cybercrime.gov.in" target="_blank" rel="noopener" style="color: var(--cs-deep); font-weight:700;">cybercrime.gov.in</a> पर आधिकारिक शिकायत दर्ज करें और प्रिंटआउट लेकर अपने स्थानीय पुलिस साइबर थाने जाएं।',
        mr: '<a href="https://cybercrime.gov.in" target="_blank" rel="noopener" style="color: var(--cs-deep); font-weight:700;">cybercrime.gov.in</a> वर अधिकृत सायबर तक्रार नोंदवा आणि प्रिंटआउट घेऊन स्थानिक पोलीस ठाण्यात जा.'
      }
    }
  ];

  function getLang() {
    if (typeof window.getLanguage === 'function') {
      const l = window.getLanguage();
      if (l === 'hi' || l === 'mr' || l === 'en') return l;
    }
    return localStorage.getItem('cybersathi_language') || 'en';
  }

  function updateProtocolSteps(lang = getLang()) {
    const cards = document.querySelectorAll('#emergencyProtocol .protocol-card');
    if (!cards.length) return;
    cards.forEach((card, idx) => {
      const step = PROTOCOL_STEPS[idx];
      if (!step) return;
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h3) h3.textContent = step.title[lang] || step.title.en;
      if (p) p.innerHTML = step.desc[lang] || step.desc.en;
    });
  }

  let emergencyLangListenersAttached = false;
  function attachEmergencyLangListeners() {
    if (emergencyLangListenersAttached) return;
    emergencyLangListenersAttached = true;
    const onLang = (e) => {
      const l = (e && e.detail && e.detail.lang) || getLang();
      updateProtocolSteps(l);
    };
    document.addEventListener('cybersathi-lang-change', onLang);
    window.addEventListener('languageChanged', onLang);
    document.querySelectorAll('#siteLangSelect, #language, .lang-select').forEach(sel => {
      sel.addEventListener('change', (e) => updateProtocolSteps(e.target.value));
    });
  }

function initEmergencyPage() {
  initScamForm();
  initCallbackForm();
  initVolunteerForm();
  initContactForm();
  updateProtocolSteps();
  attachEmergencyLangListeners();
}

// 1. Community Scam Report Form
function initScamForm() {
  const form = document.getElementById('scamReportForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Submitting Report...';

    const formData = new FormData(form);
    const reportData = {
      scam_type: formData.get('scam_type'),
      amount: formData.get('amount') ? Number(formData.get('amount')) : 0,
      platform: formData.get('platform') || 'Unknown',
      state: formData.get('state') || 'Maharashtra',
      district: formData.get('district') || '',
      incident_date: formData.get('incident_date') || new Date().toISOString().slice(0, 10),
      description: formData.get('description'),
      contact_preference: formData.get('contact_preference') || 'None',
      reporter_name: formData.get('reporter_name') || 'Anonymous',
      reporter_contact: formData.get('reporter_contact') || ''
    };

    try {
      await getStore().saveScamReport(reportData);
      showToast('Scam report successfully submitted to CyberSathi community database.', 'success');
      form.reset();
    } catch (err) {
      console.error(err);
      showToast('Could not submit scam report. Please verify your details and try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = origText;
    }
  });
}

// 2. Callback Request Form
function initCallbackForm() {
  const form = document.getElementById('callbackForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Scheduling Call...';

    const formData = new FormData(form);
    const callData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      language: formData.get('language') || 'hi',
      purpose: formData.get('purpose'),
      preferred_time: formData.get('preferred_time') || 'Morning'
    };

    try {
      await getStore().saveCallbackRequest(callData);
      showToast('Callback scheduled! A CyberSathi volunteer guide will call you soon.', 'success');
      form.reset();
    } catch (err) {
      console.error(err);
      showToast('Failed to schedule callback. Please check your phone number.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = origText;
    }
  });
}

// 3. Volunteer Enrollment Form
function initVolunteerForm() {
  const form = document.getElementById('volunteerForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Enrolling...';

    const formData = new FormData(form);
    const volData = {
      name: formData.get('name'),
      age: Number(formData.get('age')) || 20,
      village_city: formData.get('village_city'),
      preferred_language: formData.get('preferred_language') || 'mr',
      area_of_interest: formData.get('area_of_interest'),
      contact: formData.get('contact')
    };

    try {
      await getStore().saveVolunteer(volData);
      showToast('Welcome to the CyberSathi Volunteer Brigade! Your application is received.', 'success');
      form.reset();
    } catch (err) {
      console.error(err);
      showToast('Error registering volunteer application. Please try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = origText;
    }
  });
}

// 4. Contact Us Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending Message...';

    const formData = new FormData(form);
    const msgData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      await getStore().saveContact(msgData);
      showToast('Your message has been sent to the CyberSathi team.', 'success');
      form.reset();
    } catch (err) {
      console.error(err);
      showToast('Could not deliver message. Please try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = origText;
    }
  });
}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmergencyPage);
  } else {
    initEmergencyPage();
  }

  window.initEmergencyPage = initEmergencyPage;
  window.updateProtocolSteps = updateProtocolSteps;
})();
