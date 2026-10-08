// CyberSathi Emergency Help & Reporting Forms Controller
// "Awareness for Every Village, Opportunity for Every Family"

(function () {
  'use strict';

  const getStore = () => window.Store || window.CyberSathiStore;
  const showToast = (...args) => (typeof window.showToast === 'function' ? window.showToast(...args) : alert(args[0]));

function initEmergencyPage() {
  initScamForm();
  initCallbackForm();
  initVolunteerForm();
  initContactForm();
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
})();
