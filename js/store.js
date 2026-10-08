// CyberSathi Dual-Layer Data Store
// Works reliably offline via localStorage Demo Mode AND synchronizes with Supabase when configured.

const STORAGE_KEYS = {
  SCAM_REPORTS: 'cybersathi_scam_reports',
  CALLBACK_REQUESTS: 'cybersathi_callbacks',
  VOLUNTEERS: 'cybersathi_volunteers',
  CONTACT_MESSAGES: 'cybersathi_contacts',
  QUIZ_ATTEMPTS: 'cybersathi_quiz_attempts',
  SETTINGS: 'cybersathi_settings'
};

// Seed realistic educational community records if empty
const INITIAL_SCAMS = [
  {
    id: 'scam-101',
    scam_type: 'Digital Arrest Threat',
    amount: 150000,
    platform: 'Skype Video Call',
    state: 'Maharashtra',
    district: 'Nagpur',
    incident_date: '2026-09-18',
    description: 'Victim received a call from an alleged Delhi Police officer claiming a parcel with illegal substances was sent in their name. Demanded ₹1.5L for forensic verification.',
    contact_preference: 'Phone',
    status: 'Escalated to 1930',
    reporter_name: 'Anonymous Citizen',
    reporter_contact: '9823000000',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString()
  },
  {
    id: 'scam-102',
    scam_type: 'Fake Bank KYC SMS',
    amount: 45000,
    platform: 'SMS / Deceptive Link',
    state: 'Madhya Pradesh',
    district: 'Chhindwara',
    incident_date: '2026-09-19',
    description: 'Received text claiming SBI account suspended. Clicked link and entered OTP. Money debited immediately.',
    contact_preference: 'WhatsApp',
    status: 'Under Review',
    reporter_name: 'Rameshwar Patil',
    reporter_contact: '9422000000',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString()
  },
  {
    id: 'scam-103',
    scam_type: 'Fake Job Telegram Task',
    amount: 25000,
    platform: 'Telegram',
    state: 'Maharashtra',
    district: 'Wardha',
    incident_date: '2026-09-21',
    description: 'Offered work-from-home reviewing travel sites. Paid ₹200 initially, then asked to deposit ₹25,000 for VIP tasks and refused to refund.',
    contact_preference: 'Email',
    status: 'Pending',
    reporter_name: 'Sneha Deshmukh',
    reporter_contact: 'sneha.d@example.com',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString()
  },
  {
    id: 'scam-104',
    scam_type: 'QR Code Payment Fraud',
    amount: 8000,
    platform: 'OLX / WhatsApp',
    state: 'Maharashtra',
    district: 'Amravati',
    incident_date: '2026-09-22',
    description: 'Buyer for used refrigerator sent a QR code claiming it would transfer money to seller. Money was debited instead.',
    contact_preference: 'Phone',
    status: 'Resolved',
    reporter_name: 'Vijay Kumar',
    reporter_contact: '9766000000',
    created_at: new Date(Date.now() - 12 * 3600000).toISOString()
  },
  {
    id: 'scam-105',
    scam_type: 'PM-Kisan Yojana Fake Subsidy Portal',
    amount: 12000,
    platform: 'SMS / Fake Web Portal',
    state: 'Maharashtra',
    district: 'Yavatmal',
    incident_date: '2026-09-20',
    description: 'Farmer received SMS claiming 18th PM-Kisan instalment pending bank approval. Clicked malicious link and paid ₹12,000 in fraudulent verification fees.',
    contact_preference: 'Phone',
    status: 'Under Review',
    reporter_name: 'Gajanan Thakre',
    reporter_contact: '9822340000',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString()
  },
  {
    id: 'scam-106',
    scam_type: 'Electricity Disconnection Threat SMS',
    amount: 18500,
    platform: 'SMS / MSEDCL Spoof',
    state: 'Maharashtra',
    district: 'Chandrapur',
    incident_date: '2026-09-22',
    description: 'Received SMS stating electricity will be disconnected tonight at 9:30 PM due to unpaid bill. Caller asked to install AnyDesk screen-sharing app to verify bill.',
    contact_preference: 'WhatsApp',
    status: 'Escalated to 1930',
    reporter_name: 'Prakash Zade',
    reporter_contact: '9923880000',
    created_at: new Date(Date.now() - 18 * 3600000).toISOString()
  },
  {
    id: 'scam-107',
    scam_type: 'Deceptive Loan App Harassment',
    amount: 35000,
    platform: 'Instant Loan APK',
    state: 'Maharashtra',
    district: 'Saoner',
    incident_date: '2026-09-23',
    description: 'Student applied for ₹5,000 micro-loan via social media ad. App accessed full contacts and photo gallery, then blackmailers demanded ₹35,000 threatening morphed photos.',
    contact_preference: 'Phone',
    status: 'Escalated to 1930',
    reporter_name: 'Kunal Borkar',
    reporter_contact: '9404110000',
    created_at: new Date(Date.now() - 14 * 3600000).toISOString()
  },
  {
    id: 'scam-108',
    scam_type: 'Pension Jeevan Praman Fraud',
    amount: 85000,
    platform: 'WhatsApp Video Call',
    state: 'Maharashtra',
    district: 'Nagpur',
    incident_date: '2026-09-17',
    description: 'Retired teacher received call impersonating Treasury Directorate offering doorstep digital life certificate. Caller guided victim into revealing net banking OTP.',
    contact_preference: 'Phone',
    status: 'Resolved',
    reporter_name: 'Govind Rao Kelkar',
    reporter_contact: '9822001122',
    created_at: new Date(Date.now() - 5 * 86400000).toISOString()
  },
  {
    id: 'scam-109',
    scam_type: 'Fake Army Officer OLX Deposit',
    amount: 22000,
    platform: 'OLX / Fake Defence ID',
    state: 'Maharashtra',
    district: 'Bhandara',
    incident_date: '2026-09-21',
    description: 'Buyer posed as CISF officer transferred to Kamptee cantonment. Sent forged army ID and convinced victim to pay ₹22,000 vehicle entry token deposit.',
    contact_preference: 'Phone',
    status: 'Under Review',
    reporter_name: 'Nitin Meshram',
    reporter_contact: '9763220000',
    created_at: new Date(Date.now() - 26 * 3600000).toISOString()
  },
  {
    id: 'scam-110',
    scam_type: 'Work-From-Home YouTube Like Scam',
    amount: 64000,
    platform: 'Telegram / Instagram',
    state: 'Maharashtra',
    district: 'Pune',
    incident_date: '2026-09-22',
    description: 'Promised ₹150 for liking YouTube channels. After paying ₹600 in initial earnings, victim was trapped into a VIP cryptocurrency investment group and funds frozen.',
    contact_preference: 'Email',
    status: 'Pending',
    reporter_name: 'Pooja Kulkarni',
    reporter_contact: 'pooja.k@example.com',
    created_at: new Date(Date.now() - 20 * 3600000).toISOString()
  },
  {
    id: 'scam-111',
    scam_type: 'Aadhaar Biometric AePS Fraud',
    amount: 10000,
    platform: 'AePS Banking Point',
    state: 'Maharashtra',
    district: 'Akola',
    incident_date: '2026-09-19',
    description: 'Elderly citizen noticed ₹10,000 debit notification from rural kiosk without visiting any bank. CyberSathi assisted in locking Aadhaar biometric via mAadhaar app.',
    contact_preference: 'Phone',
    status: 'Resolved',
    reporter_name: 'Bhaskar Wankhede',
    reporter_contact: '9890110000',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString()
  },
  {
    id: 'scam-112',
    scam_type: 'Cotton Mandi Fake UPI Reversal Trick',
    amount: 30000,
    platform: 'UPI / WhatsApp',
    state: 'Maharashtra',
    district: 'Hingna',
    incident_date: '2026-09-24',
    description: 'Merchant buyer sent forged screenshot showing ₹50,000 sent instead of ₹20,000 for agricultural produce, insisting seller immediately refund ₹30,000 via QR code.',
    contact_preference: 'Phone',
    status: 'Pending',
    reporter_name: 'Dnyaneshwar Shinde',
    reporter_contact: '9823990000',
    created_at: new Date(Date.now() - 8 * 3600000).toISOString()
  }
];

const INITIAL_CALLBACKS = [
  {
    id: 'call-201',
    name: 'Anandi Bai',
    phone: '9822114455',
    language: 'mr',
    purpose: 'Senior citizen pension bank account verification guidance',
    preferred_time: 'Morning 10:00 AM',
    status: 'Contacted',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString()
  },
  {
    id: 'call-202',
    name: 'Harish Sharma',
    phone: '9403223344',
    language: 'hi',
    purpose: 'Suspected fake solar pump subsidy scheme link verification',
    preferred_time: 'Afternoon 2:30 PM',
    status: 'Pending',
    created_at: new Date(Date.now() - 18 * 3600000).toISOString()
  },
  {
    id: 'call-203',
    name: 'Kavita Joshi',
    phone: '9970889900',
    language: 'en',
    purpose: 'College student cyber safety workshop request in Hingna campus',
    preferred_time: 'Evening 5:00 PM',
    status: 'Pending',
    created_at: new Date(Date.now() - 4 * 3600000).toISOString()
  },
  {
    id: 'call-204',
    name: 'Balasaheb Mohite',
    phone: '9822448811',
    language: 'mr',
    purpose: 'Received threatening call from fake Mumbai Crime Branch inspector',
    preferred_time: 'Urgent / Golden Hour',
    status: 'Contacted',
    created_at: new Date(Date.now() - 7 * 3600000).toISOString()
  },
  {
    id: 'call-205',
    name: 'Sunita Chaudhari',
    phone: '9765331199',
    language: 'hi',
    purpose: 'Guidance on locking credit card international transactions & UPI limit',
    preferred_time: 'Morning 11:30 AM',
    status: 'Pending',
    created_at: new Date(Date.now() - 11 * 3600000).toISOString()
  },
  {
    id: 'call-206',
    name: 'Vitthalrao Patil',
    phone: '9850664422',
    language: 'mr',
    purpose: 'Bachat Gat (SHG) group payment QR security training inquiry',
    preferred_time: 'Afternoon 3:00 PM',
    status: 'Contacted',
    created_at: new Date(Date.now() - 22 * 3600000).toISOString()
  }
];

const INITIAL_VOLUNTEERS = [
  {
    id: 'vol-301',
    name: 'Pradeep Gaikwad',
    age: 23,
    village_city: 'Saoner, Nagpur District',
    preferred_language: 'mr',
    area_of_interest: 'Rural Digital Awareness Workshops & Village Panchayats',
    contact: '9823554433',
    status: 'Approved',
    created_at: new Date(Date.now() - 6 * 86400000).toISOString()
  },
  {
    id: 'vol-302',
    name: 'Dr. Meena Agarwal',
    age: 38,
    village_city: 'Ramdaspeth, Nagpur',
    preferred_language: 'hi',
    area_of_interest: 'Senior Citizen Cyber Counseling & Digital Arrest Defense',
    contact: 'meena.agarwal@example.com',
    status: 'Approved',
    created_at: new Date(Date.now() - 5 * 86400000).toISOString()
  },
  {
    id: 'vol-303',
    name: 'Akash Mendhe',
    age: 21,
    village_city: 'Kalmeshwar, Maharashtra',
    preferred_language: 'mr',
    area_of_interest: 'Youth Social Media Safety & School Camps',
    contact: '9765112233',
    status: 'Approved',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString()
  },
  {
    id: 'vol-304',
    name: 'Rupali Nimje',
    age: 27,
    village_city: 'Katol, Maharashtra',
    preferred_language: 'mr',
    area_of_interest: 'Women Self-Help Group (SHG) Digital Financial Literacy',
    contact: '9822776655',
    status: 'Approved',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString()
  },
  {
    id: 'vol-305',
    name: 'Faizan Sheikh',
    age: 22,
    village_city: 'Kamptee, Nagpur',
    preferred_language: 'hi',
    area_of_interest: 'Telegram Job Scam Detection & Anti-Phishing Tech Sessions',
    contact: 'faizan.tech@example.com',
    status: 'Under Review',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString()
  },
  {
    id: 'vol-306',
    name: 'Shrikant Deshpande',
    age: 45,
    village_city: 'Civil Lines, Nagpur',
    preferred_language: 'en',
    area_of_interest: 'Senior Banking Fraud Redressal & 1930 Coordination',
    contact: '9823004488',
    status: 'Approved',
    created_at: new Date(Date.now() - 8 * 86400000).toISOString()
  }
];

const INITIAL_CONTACTS = [
  {
    id: 'msg-401',
    name: 'Suresh Rao',
    email: 'suresh.rao@example.com',
    message: 'Can the CyberSathi team conduct an awareness camp for our cooperative housing society members in Sitabuldi?',
    status: 'Replied',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString()
  },
  {
    id: 'msg-402',
    name: 'Gram Panchayat Secretary, Mouda',
    email: 'gp.mouda@gov.in',
    message: 'We request informational Marathi pamphlets on safe UPI QR scan practices for our weekly village haat bazar.',
    status: 'Pending',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString()
  },
  {
    id: 'msg-403',
    name: 'Pravin Jadhav (Principal)',
    email: 'principal.zp.saoner@edu.in',
    message: 'We want to schedule a 1-hour student cybersecurity seminar on fake gaming apps and social media blackmail.',
    status: 'Replied',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString()
  },
  {
    id: 'msg-404',
    name: 'Lata Bhende',
    email: 'lata.bhende@example.com',
    message: 'My father received a message about electricity disconnection. Thank you for your 1930 guidance article!',
    status: 'Replied',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString()
  },
  {
    id: 'msg-405',
    name: 'Vijay Wanjari',
    email: 'vwanjari@company.org',
    message: 'Are CyberSathi awareness courses certified for corporate CSR volunteer participation?',
    status: 'Pending',
    created_at: new Date(Date.now() - 8 * 3600000).toISOString()
  }
];

function getLocal(key, fallback) {
  try {
    if (typeof localStorage === 'undefined') return fallback;
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    const parsed = JSON.parse(raw);
    // If fallback is a populated array and parsed is empty or not an array, auto-seed with fallback
    if (Array.isArray(fallback) && fallback.length > 0) {
      if (!Array.isArray(parsed) || parsed.length === 0) {
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
      }
    }
    return parsed;
  } catch (e) {
    console.warn('LocalStorage access warning:', e);
    return fallback;
  }
}

function setLocal(key, data) {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('LocalStorage write error:', e);
  }
}

// Get Supabase Client if configured
function getSupabaseClient() {
  const cfg = window.SUPABASE_CONFIG;
  if (cfg && cfg.url && cfg.anonKey && window.supabase) {
    if (!window.__CYBERSATHI_SB_INSTANCE) {
      window.__CYBERSATHI_SB_INSTANCE = window.supabase.createClient(cfg.url, cfg.anonKey);
    }
    return window.__CYBERSATHI_SB_INSTANCE;
  }
  return null;
}

const Store = {
  isSupabaseConfigured() {
    const cfg = window.SUPABASE_CONFIG;
    return !!(cfg && cfg.url && !cfg.url.includes('YOUR-PROJECT') && cfg.anonKey && !cfg.anonKey.includes('YOUR-PUBLISHABLE'));
  },

  // Save scam report
  async saveScamReport(reportData) {
    const local = getLocal(STORAGE_KEYS.SCAM_REPORTS, INITIAL_SCAMS);
    const newRecord = {
      id: 'scam-' + Date.now(),
      status: 'Pending',
      created_at: new Date().toISOString(),
      ...reportData
    };
    local.unshift(newRecord);
    setLocal(STORAGE_KEYS.SCAM_REPORTS, local);

    // Sync to Supabase if available
    const sb = getSupabaseClient();
    if (sb) {
      try {
        await sb.from('scam_reports').insert([{
          scam_type: reportData.scam_type,
          description: reportData.description,
          incident_date: reportData.incident_date || null,
          amount: reportData.amount ? Number(reportData.amount) : null,
          platform: reportData.platform || null,
          state: reportData.state || null,
          district: reportData.district || null,
          contact_preference: reportData.contact_preference || 'None',
          consent: true
        }]);
      } catch (err) {
        console.warn('Supabase sync skipped, stored locally:', err);
      }
    }
    return newRecord;
  },

  // Save callback request
  async saveCallbackRequest(callData) {
    const local = getLocal(STORAGE_KEYS.CALLBACK_REQUESTS, INITIAL_CALLBACKS);
    const newRecord = {
      id: 'call-' + Date.now(),
      status: 'Pending',
      created_at: new Date().toISOString(),
      ...callData
    };
    local.unshift(newRecord);
    setLocal(STORAGE_KEYS.CALLBACK_REQUESTS, local);

    const sb = getSupabaseClient();
    if (sb) {
      try {
        await sb.from('voice_call_requests').insert([{
          name: callData.name,
          phone: callData.phone,
          language: callData.language || 'hi',
          purpose: callData.purpose,
          preferred_time: callData.preferred_time ? new Date(callData.preferred_time).toISOString() : null,
          consent: true
        }]);
      } catch (err) {
        console.warn('Supabase callback sync error:', err);
      }
    }
    return newRecord;
  },

  // Save volunteer application
  async saveVolunteer(volData) {
    const local = getLocal(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
    const newRecord = {
      id: 'vol-' + Date.now(),
      status: 'Under Review',
      created_at: new Date().toISOString(),
      ...volData
    };
    local.unshift(newRecord);
    setLocal(STORAGE_KEYS.VOLUNTEERS, local);

    const sb = getSupabaseClient();
    if (sb) {
      try {
        await sb.from('volunteers').insert([{
          name: volData.name,
          age: Number(volData.age),
          village_city: volData.village_city,
          preferred_language: volData.preferred_language,
          area_of_interest: volData.area_of_interest,
          contact: volData.contact,
          consent: true
        }]);
      } catch (err) {
        console.warn('Supabase volunteer sync error:', err);
      }
    }
    return newRecord;
  },

  // Save contact message
  async saveContact(msgData) {
    const local = getLocal(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACTS);
    const newRecord = {
      id: 'msg-' + Date.now(),
      status: 'Pending',
      created_at: new Date().toISOString(),
      ...msgData
    };
    local.unshift(newRecord);
    setLocal(STORAGE_KEYS.CONTACT_MESSAGES, local);

    const sb = getSupabaseClient();
    if (sb) {
      try {
        await sb.from('contact_messages').insert([{
          name: msgData.name,
          email: msgData.email,
          message: msgData.message,
          consent: true
        }]);
      } catch (err) {
        console.warn('Supabase contact sync error:', err);
      }
    }
    return newRecord;
  },

  // Save quiz attempt
  async saveQuizAttempt(score, total) {
    const attempts = getLocal(STORAGE_KEYS.QUIZ_ATTEMPTS, []);
    const record = {
      id: 'quiz-' + Date.now(),
      score,
      total,
      percentage: Math.round((score / total) * 100),
      created_at: new Date().toISOString()
    };
    attempts.unshift(record);
    setLocal(STORAGE_KEYS.QUIZ_ATTEMPTS, attempts);

    const sb = getSupabaseClient();
    if (sb) {
      try {
        await sb.from('quiz_attempts').insert([{ score, total_questions: total }]);
      } catch (e) {
        // quiet fallback
      }
    }
    return record;
  },

  // Community Retrieval APIs
  getScamReports() {
    const list = getLocal(STORAGE_KEYS.SCAM_REPORTS, INITIAL_SCAMS);
    if (!Array.isArray(list) || list.length === 0) {
      setLocal(STORAGE_KEYS.SCAM_REPORTS, INITIAL_SCAMS);
      return INITIAL_SCAMS;
    }
    return list;
  },

  updateScamStatus(id, newStatus) {
    const items = this.getScamReports();
    const target = items.find(x => x.id === id);
    if (target) {
      target.status = newStatus;
      setLocal(STORAGE_KEYS.SCAM_REPORTS, items);
      return true;
    }
    return false;
  },

  getCallbackRequests() {
    const list = getLocal(STORAGE_KEYS.CALLBACK_REQUESTS, INITIAL_CALLBACKS);
    if (!Array.isArray(list) || list.length === 0) {
      setLocal(STORAGE_KEYS.CALLBACK_REQUESTS, INITIAL_CALLBACKS);
      return INITIAL_CALLBACKS;
    }
    return list;
  },

  updateCallbackStatus(id, newStatus) {
    const items = this.getCallbackRequests();
    const target = items.find(x => x.id === id);
    if (target) {
      target.status = newStatus;
      setLocal(STORAGE_KEYS.CALLBACK_REQUESTS, items);
      return true;
    }
    return false;
  },

  getVolunteers() {
    const list = getLocal(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
    if (!Array.isArray(list) || list.length === 0) {
      setLocal(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
      return INITIAL_VOLUNTEERS;
    }
    return list;
  },

  updateVolunteerStatus(id, newStatus) {
    const items = this.getVolunteers();
    const target = items.find(x => x.id === id);
    if (target) {
      target.status = newStatus;
      setLocal(STORAGE_KEYS.VOLUNTEERS, items);
      return true;
    }
    return false;
  },

  getContactMessages() {
    const list = getLocal(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACTS);
    if (!Array.isArray(list) || list.length === 0) {
      setLocal(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACTS);
      return INITIAL_CONTACTS;
    }
    return list;
  },

  getQuizAttempts() {
    return getLocal(STORAGE_KEYS.QUIZ_ATTEMPTS, [
      { score: 9, total: 10, percentage: 90, created_at: new Date().toISOString() },
      { score: 8, total: 10, percentage: 80, created_at: new Date().toISOString() },
      { score: 10, total: 10, percentage: 100, created_at: new Date().toISOString() }
    ]);
  },

  getAnalytics() {
    const scams = this.getScamReports();
    const callbacks = this.getCallbackRequests();
    const volunteers = this.getVolunteers();
    const messages = this.getContactMessages();
    const quizzes = this.getQuizAttempts();

    const totalLossReported = scams.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    const pendingScams = scams.filter(s => s.status === 'Pending').length;
    const resolvedScams = scams.filter(s => s.status === 'Resolved').length;
    const pendingCallbacks = callbacks.filter(c => c.status === 'Pending').length;

    return {
      totalScamReports: scams.length,
      totalLossReported,
      pendingScams,
      resolvedScams,
      totalCallbacks: callbacks.length,
      pendingCallbacks,
      totalVolunteers: volunteers.length,
      totalMessages: messages.length,
      totalQuizAttempts: quizzes.length,
      avgQuizScore: quizzes.length ? Math.round(quizzes.reduce((acc, q) => acc + q.percentage, 0) / quizzes.length) : 0
    };
  },

  exportToCsv(category) {
    let rows = [];
    let filename = `cybersathi_${category}_${new Date().toISOString().slice(0, 10)}.csv`;

    if (category === 'scams') {
      rows = this.getScamReports().map(r => ({
        ID: r.id,
        Date: r.incident_date || r.created_at,
        Type: r.scam_type,
        Amount: r.amount,
        Platform: r.platform,
        Location: `${r.district || ''}, ${r.state || ''}`,
        Status: r.status,
        Description: (r.description || '').replace(/"/g, '""')
      }));
    } else if (category === 'volunteers') {
      rows = this.getVolunteers().map(v => ({
        ID: v.id,
        Name: v.name,
        Age: v.age,
        Location: v.village_city,
        Language: v.preferred_language,
        Interest: v.area_of_interest,
        Contact: v.contact,
        Status: v.status
      }));
    } else if (category === 'callbacks') {
      rows = this.getCallbackRequests().map(c => ({
        ID: c.id,
        Name: c.name,
        Phone: c.phone,
        Language: c.language,
        Purpose: c.purpose,
        PreferredTime: c.preferred_time,
        Status: c.status
      }));
    }

    if (!rows.length) return false;

    const headers = Object.keys(rows[0]);
    const csvContent = [
      headers.join(','),
      ...rows.map(row => headers.map(h => `"${row[h] !== undefined ? row[h] : ''}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  },

  resetDemoData() {
    setLocal(STORAGE_KEYS.SCAM_REPORTS, INITIAL_SCAMS);
    setLocal(STORAGE_KEYS.CALLBACK_REQUESTS, INITIAL_CALLBACKS);
    setLocal(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
    setLocal(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACTS);
  },

  async addSampleScamReport() {
    const samples = [
      {
        scam_type: 'Electricity Disconnection Threat SMS',
        amount: 14500,
        platform: 'SMS / MSEDCL Spoof',
        district: 'Nagpur',
        state: 'Maharashtra',
        incident_date: new Date().toISOString().slice(0, 10),
        description: 'Received SMS threatening power cut tonight at 9:30 PM. Caller asked victim to download AnyDesk app to verify unpaid bill payment.',
        contact_preference: 'Phone',
        status: 'Under Review',
        reporter_name: 'Anil Deshmukh',
        reporter_contact: '9822119988'
      },
      {
        scam_type: 'Telegram Part-Time Review Task',
        amount: 32000,
        platform: 'Telegram',
        district: 'Amravati',
        state: 'Maharashtra',
        incident_date: new Date().toISOString().slice(0, 10),
        description: 'Offered work-from-home Google Maps reviews. Paid ₹300 initially, then trapped into prepaid cryptocurrency deposit rounds.',
        contact_preference: 'WhatsApp',
        status: 'Pending',
        reporter_name: 'Rohit Meshram',
        reporter_contact: '9850443322'
      },
      {
        scam_type: 'Digital Arrest Police Impersonation',
        amount: 120000,
        platform: 'Skype Video Call',
        district: 'Wardha',
        state: 'Maharashtra',
        incident_date: new Date().toISOString().slice(0, 10),
        description: 'Caller dressed in police uniform claimed victim courier contained illegal passports and contraband. Demanded immediate security deposit.',
        contact_preference: 'Phone',
        status: 'Escalated to 1930',
        reporter_name: 'Vilasrao Kale',
        reporter_contact: '9422887766'
      }
    ];
    const pick = samples[Math.floor(Math.random() * samples.length)];
    return this.saveScamReport(pick);
  }
};

const CyberSathiStore = Store;
if (typeof window !== 'undefined') {
  window.CyberSathiStore = Store;
  window.Store = Store;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CyberSathiStore: Store, Store };
}
