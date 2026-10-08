// CyberSathi Authentication & Citizen/Sathi Portal Engine
// Dual-Layer: Works with Supabase Cloud Auth & LocalStorage Demo Mode
// "Awareness for Every Village, Opportunity for Every Family"

const AUTH_STORAGE_KEY = 'cybersathi_auth_user';

const DEMO_ACCOUNTS = {
  citizen: {
    id: 'usr-demo-cit-101',
    name: 'Rameshwar Patil',
    email: 'rameshwar.patil@example.com',
    role: 'Citizen / Elder',
    district: 'Nagpur',
    state: 'Maharashtra',
    phone: '9422000000',
    enrolledCourses: ['senior', 'farmers'],
    completedCourses: ['senior'],
    certificates: [
      {
        courseId: 'senior',
        courseTitle: 'Senior Citizens Digital Shield',
        badge: 'Senior Digital Sentinel',
        date: '2026-09-22',
        certId: 'CS-SEN-2026-9041'
      }
    ]
  },
  volunteer: {
    id: 'usr-demo-vol-202',
    name: 'Sneha Deshmukh',
    email: 'sneha.deshmukh@example.com',
    role: 'Volunteer Sathi (College Lead)',
    district: 'Wardha',
    state: 'Maharashtra',
    phone: '9823112233',
    enrolledCourses: ['students', 'working', 'women'],
    completedCourses: ['students', 'women'],
    certificates: [
      {
        courseId: 'students',
        courseTitle: 'Students & Youth Cyber Defense',
        badge: 'Youth Cyber Defender',
        date: '2026-09-20',
        certId: 'CS-STU-2026-8812'
      },
      {
        courseId: 'women',
        courseTitle: 'Women & SHG Digital Swavalamban',
        badge: 'Nari Suraksha Champion',
        date: '2026-09-24',
        certId: 'CS-WOM-2026-7734'
      }
    ]
  }
};

const CyberSathiAuth = {
  getSupabaseClient() {
    try {
      if (typeof window !== 'undefined' && window.CyberSathiStore && typeof window.CyberSathiStore.getSupabase === 'function') {
        return window.CyberSathiStore.getSupabase();
      }
      if (typeof window !== 'undefined' && window.supabase && window.SUPABASE_CONFIG) {
        return window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);
      }
    } catch (e) {
      console.warn('Supabase client init note:', e);
    }
    return null;
  },

  isSupabaseActive() {
    const sb = this.getSupabaseClient();
    return !!sb;
  },

  getCurrentUser() {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error('Error reading auth state:', e);
    }
    return null;
  },

  setCurrentUser(user) {
    if (!user) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } else {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    }
    this.updateNavAuth();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cybersathi:authChange', { detail: { user } }));
    }
  },

  async login(email, password, role = 'citizen') {
    const cleanEmail = (email || '').trim().toLowerCase();
    
    // Check if Supabase is connected
    const sb = this.getSupabaseClient();
    if (sb && cleanEmail && password) {
      try {
        const { data, error } = await sb.auth.signInWithPassword({
          email: cleanEmail,
          password: password
        });

        if (!error && data?.user) {
          const userObj = {
            id: data.user.id,
            name: data.user.user_metadata?.full_name || cleanEmail.split('@')[0],
            email: data.user.email,
            role: data.user.user_metadata?.role || (role === 'volunteer' ? 'Volunteer Sathi' : 'Citizen'),
            district: data.user.user_metadata?.district || 'Nagpur',
            state: 'Maharashtra',
            isCloudAuth: true,
            enrolledCourses: ['senior', 'students'],
            completedCourses: [],
            certificates: []
          };
          this.setCurrentUser(userObj);
          return { success: true, user: userObj, source: 'supabase' };
        }
      } catch (err) {
        console.warn('Supabase auth attempt error, evaluating demo fallback:', err);
      }
    }

    // Fallback: local simulated account
    const fallbackUser = {
      id: 'usr-' + Date.now(),
      name: cleanEmail.split('@')[0] || 'Community Citizen',
      email: cleanEmail || 'citizen@cybersathi.org',
      role: role === 'volunteer' ? 'Volunteer Sathi' : 'Citizen',
      district: 'Nagpur',
      state: 'Maharashtra',
      isCloudAuth: false,
      enrolledCourses: ['senior'],
      completedCourses: [],
      certificates: []
    };

    this.setCurrentUser(fallbackUser);
    return { success: true, user: fallbackUser, source: 'local' };
  },

  quickDemoLogin(role = 'citizen') {
    const template = DEMO_ACCOUNTS[role] || DEMO_ACCOUNTS.citizen;
    const userCopy = JSON.parse(JSON.stringify(template));
    this.setCurrentUser(userCopy);
    return userCopy;
  },

  async register(data) {
    const { name, email, password, district, role } = data;
    const cleanEmail = (email || '').trim().toLowerCase();

    const sb = this.getSupabaseClient();
    if (sb && cleanEmail && password) {
      try {
        const { data: authData, error } = await sb.auth.signUp({
          email: cleanEmail,
          password: password,
          options: {
            data: {
              full_name: name,
              district: district || 'Nagpur',
              role: role === 'volunteer' ? 'Volunteer Sathi' : 'Citizen'
            }
          }
        });

        if (!error && authData?.user) {
          const newUser = {
            id: authData.user.id,
            name: name || cleanEmail.split('@')[0],
            email: cleanEmail,
            role: role === 'volunteer' ? 'Volunteer Sathi' : 'Citizen',
            district: district || 'Nagpur',
            state: 'Maharashtra',
            isCloudAuth: true,
            enrolledCourses: [],
            completedCourses: [],
            certificates: []
          };
          this.setCurrentUser(newUser);
          return { success: true, user: newUser, source: 'supabase' };
        }
      } catch (err) {
        console.warn('Supabase sign-up error, proceeding with local fallback:', err);
      }
    }

    // Local registration
    const localUser = {
      id: 'usr-reg-' + Date.now(),
      name: name || 'Community Citizen',
      email: cleanEmail || 'user@cybersathi.org',
      role: role === 'volunteer' ? 'Volunteer Sathi' : 'Citizen',
      district: district || 'Nagpur',
      state: 'Maharashtra',
      isCloudAuth: false,
      enrolledCourses: [],
      completedCourses: [],
      certificates: []
    };

    this.setCurrentUser(localUser);
    return { success: true, user: localUser, source: 'local' };
  },

  async logout() {
    const sb = this.getSupabaseClient();
    if (sb) {
      try {
        await sb.auth.signOut();
      } catch (e) {
        console.warn('Supabase signout notice:', e);
      }
    }
    this.setCurrentUser(null);
    if (typeof window !== 'undefined') {
      if (typeof window.showToast === 'function') {
        window.showToast('You have been logged out safely.', 'success');
      }
      // If on login.html, re-render the view
      if (typeof window.renderAuthPortal === 'function') {
        window.renderAuthPortal();
      }
    }
  },

  updateNavAuth() {
    if (typeof document === 'undefined') return;

    const user = this.getCurrentUser();
    const navSlots = document.querySelectorAll('.nav-auth-slot, #navAuthSlot');

    navSlots.forEach(slot => {
      if (!user) {
        slot.innerHTML = `
          <a href="login.html" class="nav-btn-login" aria-label="Sign In to CyberSathi">
            <span class="nav-btn-icon">🔑</span>
            <span class="nav-btn-text">Login</span>
          </a>
        `;
      } else {
        const displayName = (user.name || 'Citizen').split(' ')[0];
        const roleLabel = user.role && user.role.includes('Volunteer') ? 'Sathi' : 'Citizen';
        slot.innerHTML = `
          <div class="user-chip-wrap">
            <a href="login.html" class="user-chip-link" title="Open Citizen Portal">
              <span class="user-chip-avatar">👤</span>
              <span class="user-chip-name">${window.escapeHtml ? window.escapeHtml(displayName) : displayName}</span>
              <span class="user-chip-role">${roleLabel}</span>
            </a>
            <button class="user-chip-logout" onclick="window.CyberSathiAuth.logout()" title="Logout" aria-label="Logout">✕</button>
          </div>
        `;
      }
    });

    // Also update mobile drawer link if present
    const mobileLinks = document.querySelectorAll('.mobile-login-link');
    mobileLinks.forEach(link => {
      if (!user) {
        link.innerHTML = '🔑 Login / Sign In';
        link.href = 'login.html';
      } else {
        link.innerHTML = `👤 My Portal (${(user.name || 'Citizen').split(' ')[0]})`;
        link.href = 'login.html';
      }
    });
  }
};

// Global Exposure
if (typeof window !== 'undefined') {
  window.CyberSathiAuth = CyberSathiAuth;
}

// ReadyState Auto-Run
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CyberSathiAuth.updateNavAuth());
  } else {
    CyberSathiAuth.updateNavAuth();
  }
  if (window.addEventListener) {
    window.addEventListener('load', () => CyberSathiAuth.updateNavAuth());
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CyberSathiAuth };
}
