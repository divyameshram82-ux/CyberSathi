// CyberSathi Topics & Glossary Controller
// "Awareness for Every Village, Opportunity for Every Family"

(function () {
  'use strict';

  const getTopics = () => window.topics || (window.CyberSathiData && window.CyberSathiData.topics) || [];
  const getGlossary = () => window.glossaryTerms || (window.CyberSathiData && window.CyberSathiData.glossaryTerms) || [];
  const openModal = (...args) => (typeof window.openModal === 'function' ? window.openModal(...args) : null);
  const escapeHtml = (s) => (typeof window.escapeHtml === 'function' ? window.escapeHtml(s) : String(s ?? ''));
  const getLanguage = () => (typeof window.getLanguage === 'function' ? window.getLanguage() : 'en');

let currentCategory = 'all';
let currentSearch = '';

function initTopicsPage() {
  renderTopics();
  renderGlossary();

  // Search input
  const searchInput = document.getElementById('topicSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderTopics();
    });
  }

  // Category filter pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.cat;
      renderTopics();
    });
  });

  // Glossary search
  const glossarySearch = document.getElementById('glossarySearch');
  if (glossarySearch) {
    glossarySearch.addEventListener('input', (e) => {
      renderGlossary(e.target.value.toLowerCase().trim());
    });
  }
}

function renderTopics() {
  const container = document.getElementById('topicsGrid');
  if (!container) return;

  const list = getTopics();
  const filtered = list.filter(t => {
    const matchesCat = currentCategory === 'all' || t.category === currentCategory;
    const matchesSearch = !currentSearch ||
      t.title.toLowerCase().includes(currentSearch) ||
      t.summary.toLowerCase().includes(currentSearch) ||
      t.scenario.toLowerCase().includes(currentSearch);
    return matchesCat && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--cs-card-bg); border-radius: var(--cs-radius); border: 1px dashed var(--cs-line);">
        <span style="font-size: 40px; display: block; margin-bottom: 12px;">🔍</span>
        <h3 style="font-family: 'Outfit', sans-serif; color: var(--cs-deep); margin-bottom: 6px;">No topics found</h3>
        <p style="color: var(--cs-muted); font-size: 14px;">Try searching for "OTP", "UPI", "Bank", "Loan" or clear your filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(t => `
    <article class="card topic-card" data-topic-id="${escapeHtml(t.id)}">
      <div class="topic-card-icon">${t.icon}</div>
      <h3>${escapeHtml(t.title)}</h3>
      <p>${escapeHtml(t.summary)}</p>
      <div class="topic-card-cta">
        <span>Learn Red Flags & Prevention</span>
        <span>→</span>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
      const topicId = card.dataset.topicId;
      const topic = list.find(x => x.id === topicId);
      if (topic) openTopicModal(topic);
    });
  });
}

function openTopicModal(t) {
  const content = `
    <div class="topic-modal-view">
      <h2><span>${t.icon}</span> ${escapeHtml(t.title)}</h2>
      
      <div class="box-highlight">
        <h4>⚠️ The Scam Scenario</h4>
        <p style="font-size: 14.5px; color: var(--cs-ink); line-height: 1.5;">${escapeHtml(t.scenario)}</p>
      </div>

      <div>
        <h4 style="font-family: 'Outfit', sans-serif; font-size: 16px; color: var(--cs-danger); margin-bottom: 8px;">
          🚩 Warning Signs & Red Flags
        </h4>
        <ul class="red-flags-list">
          ${t.redFlags.map(rf => `<li>${escapeHtml(rf)}</li>`).join('')}
        </ul>
      </div>

      <div style="background: color-mix(in srgb, var(--cs-green) 10%, var(--cs-card-bg)); padding: 18px; border-radius: var(--cs-radius-sm); border: 1px solid color-mix(in srgb, var(--cs-green) 25%, transparent);">
        <h4 style="font-family: 'Outfit', sans-serif; font-size: 16px; color: var(--cs-green); margin-bottom: 8px;">
          🛡️ CyberSathi Golden Safety Rules
        </h4>
        <ul class="prevention-list">
          ${t.prevention.map(p => `<li><strong>${escapeHtml(p)}</strong></li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-top: 10px;">
        <button class="btn btn-primary" id="btnSpeakTopic">
          <span>🔊 Listen to Safety Advice</span>
        </button>
        <span style="font-size: 12px; color: var(--cs-muted);">In emergency, dial <strong>1930</strong> immediately.</span>
      </div>
    </div>
  `;

  openModal(content);

  const speakBtn = document.getElementById('btnSpeakTopic');
  if (speakBtn) {
    speakBtn.addEventListener('click', () => {
      speechSynthesis.cancel();
      const textToRead = `${t.title}. The golden safety rules are: ${t.prevention.join('. ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      const lang = getLanguage();
      utterance.lang = lang === 'hi' ? 'hi-IN' : lang === 'mr' ? 'mr-IN' : 'en-IN';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    });
  }
}

function renderGlossary(filter = '') {
  const container = document.getElementById('glossaryGrid');
  if (!container) return;

  const list = getGlossary();
  const filtered = list.filter(g => {
    return !filter ||
      g.term.toLowerCase().includes(filter) ||
      g.definition.toLowerCase().includes(filter) ||
      g.safetyTip.toLowerCase().includes(filter);
  });

  container.innerHTML = filtered.map(g => `
    <article class="card" style="display: flex; flex-direction: column;">
      <h3 style="font-family: 'Outfit', sans-serif; font-size: 17px; color: var(--cs-deep); margin-bottom: 8px;">
        📖 ${escapeHtml(g.term)}
      </h3>
      <p style="font-size: 13.5px; color: var(--cs-ink); margin-bottom: 8px; flex: 1;">
        ${escapeHtml(g.definition)}
      </p>
      <div style="background: var(--cs-cream); padding: 10px 12px; border-radius: var(--cs-radius-sm); font-size: 12.5px; color: var(--cs-green); font-weight: 600;">
        💡 <strong>Tip:</strong> ${escapeHtml(g.safetyTip)}
      </div>
    </article>
  `).join('');
}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTopicsPage);
  } else {
    initTopicsPage();
  }
  document.addEventListener('cybersathi-lang-change', () => {
    renderTopics();
    renderGlossary();
  });

  window.initTopicsPage = initTopicsPage;
})();
