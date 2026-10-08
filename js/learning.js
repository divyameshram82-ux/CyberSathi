// ============================================================================
// 🎬 CYBERSATHI LEARNING & MULTIMEDIA CONTROLLER (js/learning.js)
// Real-World Hindi Cyber Awareness Video Library (Official YouTube Iframe Embeds)
// Trilingual Multimodal Learning: Videos, Animated Stories & Reported Fraud Cases
// ============================================================================

(function () {
  'use strict';

  const getVideos = () => window.videos || (window.CyberSathiData && window.CyberSathiData.videos) || [];
  const getAnimatedStories = () => window.animatedStories || (window.CyberSathiData && window.CyberSathiData.animatedStories) || [];
  const getFraudStories = () => window.fraudStories || (window.CyberSathiData && window.CyberSathiData.fraudStories) || [];
  const openModal = (...args) => (typeof window.openModal === 'function' ? window.openModal(...args) : null);
  const escapeHtml = (s) => (typeof window.escapeHtml === 'function' ? window.escapeHtml(s) : String(s ?? ''));
  const getLanguage = () => (typeof window.getLanguage === 'function' ? window.getLanguage() : 'en');

  let activeStoryIndex = 0;
  let activeStoryStep = 0;

  // ==========================================================================
  // SAFE YOUTUBE EMBED HELPER FUNCTIONS
  // ==========================================================================
  function extractYouTubeVideoId(urlOrId) {
    if (!urlOrId) return '';
    const s = String(urlOrId).trim();
    const m = s.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|^)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : s;
  }

  function getYouTubeEmbedUrl(urlOrId) {
    const vidId = extractYouTubeVideoId(urlOrId);
    return `https://www.youtube.com/embed/${vidId}`;
  }

  // ==========================================================================
  // 1. REAL-WORLD YOUTUBE CYBER AWARENESS VIDEO LIBRARY
  // ==========================================================================
  function renderVideos(category = 'all', searchQuery = '') {
    const container = document.getElementById('videosGrid');
    if (!container) return;

    const allVideos = getVideos();
    const cleanSearch = String(searchQuery || '').trim().toLowerCase();
    const cleanCat = String(category || 'all').toLowerCase();

    const filtered = allVideos.filter(v => {
      // Category match
      let matchCat = false;
      if (cleanCat === 'all') {
        matchCat = true;
      } else {
        const vCat = String(v.category || '').toLowerCase();
        const vTopic = String(v.topic || '').toLowerCase();
        const vFKey = String(v.filterKey || '').toLowerCase();
        if (vCat.includes(cleanCat) || vTopic.includes(cleanCat) || vFKey.includes(cleanCat)) {
          matchCat = true;
        } else if (cleanCat === 'qr code' && (vCat.includes('qr') || vTopic.includes('qr'))) {
          matchCat = true;
        } else if (cleanCat === 'job scam' && (vCat.includes('job') || vTopic.includes('job'))) {
          matchCat = true;
        } else if (cleanCat === 'customer care' && (vCat.includes('customer') || vTopic.includes('customer'))) {
          matchCat = true;
        } else if (cleanCat === 'digital arrest' && (vCat.includes('digital') || vTopic.includes('arrest'))) {
          matchCat = true;
        } else if (cleanCat === 'loan app' && (vCat.includes('loan') || vTopic.includes('loan'))) {
          matchCat = true;
        } else if (cleanCat === 'mobile fraud' && (vCat.includes('mobile') || vTopic.includes('sim') || vCat.includes('identity'))) {
          matchCat = true;
        } else if (cleanCat === 'social media' && (vCat.includes('social') || vCat.includes('whatsapp') || vTopic.includes('social'))) {
          matchCat = true;
        }
      }

      // Search match
      let matchSearch = true;
      if (cleanSearch) {
        const hay = `${v.title || ''} ${v.channel || ''} ${v.category || ''} ${v.topic || ''} ${v.desc || ''} ${v.description || ''}`.toLowerCase();
        matchSearch = hay.includes(cleanSearch);
      }

      return matchCat && matchSearch;
    });

    const statusEl = document.getElementById('videoResultsStatus');
    if (statusEl) {
      statusEl.textContent = `Showing ${filtered.length} of ${allVideos.length} Hindi Cyber Awareness Videos`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--cs-muted); padding: 48px 20px; background: var(--cs-card-bg); border: 1px dashed var(--cs-line); border-radius: 16px;">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 16px; font-weight: 700; color: var(--cs-deep); margin-bottom: 4px;">No awareness videos found</div>
          <div style="font-size: 13px;">Try selecting "All" or search for a different topic like "OTP", "UPI", or "Digital Arrest".</div>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(v => {
      const vidId = extractYouTubeVideoId(v.id);
      const thumbUrl = v.thumbnail || `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;
      const descText = v.description || v.desc || '';
      const langText = v.language || 'हिन्दी';

      return `
        <article class="card video-card" id="video-card-${escapeHtml(vidId)}" style="display: flex; flex-direction: column; overflow: hidden; border-radius: var(--cs-radius); border: 1px solid var(--cs-line); background: var(--cs-card-bg);">
          <!-- Video Player Mount / Thumbnail with Direct Play -->
          <div class="video-thumb-wrap" id="video-mount-${escapeHtml(vidId)}" data-video-id="${escapeHtml(vidId)}" data-video-title="${escapeHtml(v.title)}" aria-label="Play ${escapeHtml(v.title)} directly on website" style="position: relative; aspect-ratio: 16/9; background: #06222b; cursor: pointer; overflow: hidden;">
            <img
              src="${escapeHtml(thumbUrl)}"
              alt="${escapeHtml(v.title)}"
              loading="lazy"
              style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.35s ease;"
              onerror="this.src='https://img.youtube.com/vi/${escapeHtml(vidId)}/mqdefault.jpg'"
            />
            <div class="play-badge" aria-label="Play video directly" style="position: absolute; inset: 0; margin: auto; width: 56px; height: 56px; border-radius: 50%; background: rgba(220, 38, 38, 0.94); color: #fff; display: grid; place-items: center; font-size: 20px; padding-left: 3px; box-shadow: 0 10px 25px rgba(0,0,0,0.45); z-index: 2; pointer-events: none;">
              ▶
            </div>
            <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); color: #fff; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 4px; z-index: 2;">
              YouTube
            </span>
          </div>

          <div class="video-card-body" style="padding: 18px; flex: 1; display: flex; flex-direction: column;">
            <div class="video-meta" style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span class="video-channel-row" style="font-size: 12px; font-weight: 700; color: var(--cs-deep); background: color-mix(in srgb, var(--cs-deep) 10%, var(--cs-card-bg)); padding: 2px 8px; border-radius: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 65%;">
                🏛️ ${escapeHtml(v.channel || 'Official Awareness')}
              </span>
              <span style="background: var(--cs-bg-tint); padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 11px; color: var(--cs-teal);">
                ${escapeHtml(v.category || v.topic || 'Awareness')}
              </span>
            </div>

            <h3 style="font-family: 'Outfit', sans-serif; font-size: 16px; line-height: 1.35; margin-bottom: 8px; color: var(--cs-deep); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${escapeHtml(v.title)}
            </h3>

            <p style="font-size: 13px; color: var(--cs-muted); line-height: 1.5; flex: 1; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
              ${escapeHtml(descText)}
            </p>

            <div style="display: flex; gap: 8px; align-items: center; margin-top: auto;">
              <button type="button" class="btn btn-primary btn-play-inline" data-video-id="${escapeHtml(vidId)}" data-video-title="${escapeHtml(v.title)}" style="flex: 1; padding: 8px 14px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
                ▶ Play on Website
              </button>
              <button type="button" class="btn btn-outline btn-watch-modal" data-video-id="${escapeHtml(vidId)}" data-video-title="${escapeHtml(v.title)}" title="Enlarge Video Player" style="padding: 8px 12px; font-size: 13px;">
                ⛶
              </button>
              <span style="font-size: 11.5px; color: var(--cs-muted); font-weight: 700; white-space: nowrap;">
                🇮🇳 ${escapeHtml(langText.includes('हिन्दी') ? langText : 'हिन्दी (Hindi)')}
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Bind Direct Play (Inline within Card) on thumbnail or Play button click
    container.querySelectorAll('.btn-play-inline, .video-thumb-wrap').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.dataset.videoId;
        const title = el.dataset.videoTitle;
        if (id) {
          playVideoInline(id, title);
        }
      });
    });

    // Bind Enlarge Modal Button click
    container.querySelectorAll('.btn-watch-modal').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = el.dataset.videoId;
        const title = el.dataset.videoTitle;
        if (id) {
          openVideoModal(id, title);
        }
      });
    });
  }

  // ==========================================================================
  // DIRECT INLINE PLAYER (Plays Directly Inside The Card on CyberSathi)
  // ==========================================================================
  function playVideoInline(id, title) {
    const vidId = extractYouTubeVideoId(id);
    const wrap = document.getElementById(`video-mount-${vidId}`);
    if (!wrap) return;

    wrap.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0&playsinline=1"
        title="${escapeHtml(title || 'Cyber Awareness Video')}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
      ></iframe>
    `;
    wrap.style.cursor = 'default';

    const card = document.getElementById(`video-card-${vidId}`);
    if (card) {
      const btn = card.querySelector('.btn-play-inline');
      if (btn) {
        btn.innerHTML = '🎬 Playing Directly';
        btn.style.background = 'var(--cs-green)';
        btn.style.borderColor = 'var(--cs-green)';
      }
    }
  }

  // ==========================================================================
  // OFFICIAL YOUTUBE MODAL PLAYER (Plays Directly Inside CyberSathi Modal)
  // ==========================================================================
  function openVideoModal(id, title) {
    const vidId = extractYouTubeVideoId(id);
    const v = getVideos().find(item => extractYouTubeVideoId(item.id) === vidId) || {
      id: vidId,
      title: title || 'Cyber Awareness Video',
      channel: 'Official Cyber Awareness',
      category: 'Cyber Safety',
      language: 'हिन्दी',
      desc: 'Cyber safety awareness video. Never share your OTP, PIN, or click suspicious links.'
    };

    const modalHtml = `
      <div class="video-modal-container" style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
        <!-- Responsive Official YouTube Iframe Embed -->
        <div class="video-modal-player" style="position: relative; width: 100%; aspect-ratio: 16/9; background: #000; border-radius: 14px; overflow: hidden; box-shadow: var(--cs-shadow-md);">
          <iframe
            src="https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0&playsinline=1"
            title="${escapeHtml(v.title || 'Cyber Awareness Video')}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
          ></iframe>
        </div>

        <!-- Video Information & Metadata -->
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
              <span style="font-weight: 700; color: var(--cs-deep); background: color-mix(in srgb, var(--cs-deep) 10%, var(--cs-card-bg)); padding: 4px 10px; border-radius: 999px; font-size: 12px;">
                🏛️ ${escapeHtml(v.channel || 'Cyber Awareness')}
              </span>
              <span style="background: var(--cs-bg-tint); padding: 4px 10px; border-radius: 999px; font-weight: 700; font-size: 12px; color: var(--cs-teal);">
                🏷️ ${escapeHtml(v.category || v.topic || 'Awareness')}
              </span>
              <span style="background: #eef6fb; padding: 4px 10px; border-radius: 999px; font-weight: 700; font-size: 12px; color: var(--cs-deep);">
                🇮🇳 ${escapeHtml(v.language || 'हिन्दी')}
              </span>
            </div>
            <span style="font-size: 12px; color: var(--cs-green); font-weight: 700; background: color-mix(in srgb, var(--cs-green) 12%, var(--cs-card-bg)); padding: 4px 10px; border-radius: 999px;">
              ✓ Playing Directly on CyberSathi
            </span>
          </div>

          <h3 style="font-family: 'Outfit', sans-serif; font-size: 19px; color: var(--cs-deep); margin: 0; line-height: 1.35;">
            ${escapeHtml(v.title || 'Cyber Awareness Video')}
          </h3>

          <p style="font-size: 14px; color: var(--cs-muted); line-height: 1.6; margin: 0;">
            ${escapeHtml(v.description || v.desc || '')}
          </p>

          <div style="margin-top: 6px; padding: 12px 16px; background: color-mix(in srgb, var(--cs-danger) 8%, var(--cs-card-bg)); border-left: 4px solid var(--cs-danger); border-radius: 8px; font-size: 13px; color: var(--cs-ink); display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
            <div>
              <strong>🚨 Golden Hour Cyber Helpline:</strong> If you are a victim of financial cyber fraud, dial <strong>1930</strong> immediately.
            </div>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-danger btn-sm" style="font-size: 11.5px; padding: 5px 12px; text-decoration: none;">
              Report at cybercrime.gov.in
            </a>
          </div>
        </div>
      </div>
    `;

    openModal(modalHtml);
  }

  function initLearningPage() {
    let currentCat = 'all';
    let currentSearch = '';

    renderVideos(currentCat, currentSearch);
    initAnimatedStoryViewer();
    renderFraudCases();

    // Search bar functionality
    const searchInput = document.getElementById('videoSearchInput');
    const searchClear = document.getElementById('videoSearchClear');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value;
        if (searchClear) {
          searchClear.style.display = currentSearch ? 'inline-block' : 'none';
        }
        renderVideos(currentCat, currentSearch);
      });
    }
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        currentSearch = '';
        searchClear.style.display = 'none';
        renderVideos(currentCat, currentSearch);
      });
    }

    // Video category filters
    document.querySelectorAll('.video-cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.video-cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCat = pill.dataset.cat || 'all';
        renderVideos(currentCat, currentSearch);
      });
    });

    // Language change listener
    document.addEventListener('cybersathi-lang-change', () => {
      renderVideos(currentCat, currentSearch);
      renderFraudCases();
    });
  }

  // Expose globally
  if (typeof window !== 'undefined') {
    window.openVideoModal = openVideoModal;
    window.playVideoInline = playVideoInline;
    window.extractYouTubeVideoId = extractYouTubeVideoId;
    window.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
  }


  // ==========================================================================
  // 2. Animated Cyber Story Viewer
  // ==========================================================================
  function initAnimatedStoryViewer() {
    const chipsContainer = document.getElementById('storyChips');
    if (!chipsContainer) return;

    chipsContainer.innerHTML = getAnimatedStories().map((story, idx) => `
      <button class="story-chip ${idx === 0 ? 'active' : ''}" data-story-idx="${idx}">
        ${story.icon} ${escapeHtml(story.title)}
      </button>
    `).join('');

    chipsContainer.querySelectorAll('.story-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        chipsContainer.querySelectorAll('.story-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeStoryIndex = Number(btn.dataset.storyIdx);
        activeStoryStep = 0;
        updateStoryStage();
      });
    });

    const nextBtn = document.getElementById('storyNext');
    const prevBtn = document.getElementById('storyPrev');
    const listenBtn = document.getElementById('storyListen');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const currentStory = getAnimatedStories()[activeStoryIndex];
        if (activeStoryStep < currentStory.scenes.length - 1) {
          activeStoryStep++;
          updateStoryStage();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (activeStoryStep > 0) {
          activeStoryStep--;
          updateStoryStage();
        }
      });
    }

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        speakCurrentStoryScene();
      });
    }

    updateStoryStage();
  }

  function updateStoryStage() {
    const currentStory = getAnimatedStories()[activeStoryIndex];
    if (!currentStory) return;

    const scene = currentStory.scenes[activeStoryStep];
    const iconEl = document.getElementById('stageIcon');
    const captionEl = document.getElementById('stageCaption');
    const stepIndicator = document.getElementById('storyStepIndicator');
    const lessonEl = document.getElementById('storyLesson');
    const prevBtn = document.getElementById('storyPrev');
    const nextBtn = document.getElementById('storyNext');

    if (iconEl) {
      iconEl.style.transform = 'scale(0.8)';
      setTimeout(() => {
        iconEl.textContent = scene.icon;
        iconEl.style.transform = 'scale(1)';
      }, 150);
    }

    if (captionEl) captionEl.textContent = scene.caption;
    if (stepIndicator) stepIndicator.textContent = `Scene ${activeStoryStep + 1} of ${currentStory.scenes.length}`;
    if (lessonEl) lessonEl.innerHTML = `<strong>🛡️ Key Lesson:</strong> ${escapeHtml(currentStory.lesson)}`;

    if (prevBtn) prevBtn.disabled = activeStoryStep === 0;
    if (nextBtn) {
      nextBtn.disabled = activeStoryStep === currentStory.scenes.length - 1;
      nextBtn.textContent = activeStoryStep === currentStory.scenes.length - 1 ? 'Completed ✓' : 'Next Scene →';
    }
  }

  function speakCurrentStoryScene() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const currentStory = getAnimatedStories()[activeStoryIndex];
    if (!currentStory) return;
    const scene = currentStory.scenes[activeStoryStep];
    const utterance = new SpeechSynthesisUtterance(`${scene.caption}. Key lesson: ${currentStory.lesson}`);
    const lang = getLanguage();
    utterance.lang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  }

  // ==========================================================================
  // 3. Reported Fraud Cases & Interactive Mini-Quizzes
  // ==========================================================================
  function renderFraudCases() {
    const container = document.getElementById('fraudCasesGrid');
    if (!container) return;

    const lang = getLanguage();
    const cases = getFraudStories();

    container.innerHTML = cases.map((c, idx) => {
      const content = c[lang] || c.en;
      return `
        <article class="card case-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--cs-danger);">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
              <span class="alert-badge" style="background: rgba(220, 38, 38, 0.1); color: var(--cs-danger); font-weight: 700;">
                📍 ${escapeHtml(c.location)} (${escapeHtml(c.year)})
              </span>
              <span style="font-size: 12px; color: var(--cs-muted); font-weight: 600;">
                📰 ${escapeHtml(c.source)}
              </span>
            </div>

            <h3 style="font-family: 'Outfit', sans-serif; font-size: 19px; color: var(--cs-deep); margin-bottom: 10px; line-height: 1.35;">
              ${escapeHtml(content.title)}
            </h3>

            <p style="font-size: 14px; color: var(--cs-ink); line-height: 1.6; margin-bottom: 14px;">
              ${escapeHtml(content.summary)}
            </p>

            <div style="background: rgba(220, 38, 38, 0.05); border-left: 3px solid var(--cs-danger); padding: 10px 14px; border-radius: 6px; margin-bottom: 14px;">
              <strong style="font-size: 12.5px; color: var(--cs-danger); display: block; margin-bottom: 4px;">
                ⚠️ Red Flags Missed:
              </strong>
              <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: var(--cs-ink); line-height: 1.5;">
                ${(content.warning || []).map(w => `<li>${escapeHtml(w)}</li>`).join('')}
              </ul>
            </div>

            <div style="background: color-mix(in srgb, var(--cs-green) 8%, var(--cs-card-bg)); border-left: 3px solid var(--cs-green); padding: 10px 14px; border-radius: 6px; margin-bottom: 16px; font-size: 13px;">
              <strong style="color: var(--cs-green); display: block; margin-bottom: 2px;">🛡️ Safe Action Lesson:</strong>
              <span>${escapeHtml(content.lesson)}</span>
            </div>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap; padding-top: 12px; border-top: 1px solid var(--cs-line);">
            <button type="button" class="btn btn-primary btn-case-detail" data-case-idx="${idx}" style="flex: 1; padding: 8px 14px; font-size: 13px;">
              🔍 Full Case Analysis
            </button>
            <button type="button" class="btn btn-outline btn-case-audio" data-case-idx="${idx}" style="padding: 8px 12px; font-size: 13px;">
              🔊 Listen
            </button>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('.btn-case-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.caseIdx);
        openCaseDetailModal(cases[idx]);
      });
    });

    container.querySelectorAll('.btn-case-audio').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.caseIdx);
        const c = cases[idx];
        const content = c[getLanguage()] || c.en;
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(`${content.title}. ${content.summary}. Safe lesson: ${content.lesson}`);
          u.lang = getLanguage() === 'mr' ? 'mr-IN' : getLanguage() === 'hi' ? 'hi-IN' : 'en-IN';
          u.rate = 0.93;
          window.speechSynthesis.speak(u);
        }
      });
    });
  }

  function openCaseDetailModal(c) {
    if (!c) return;
    const lang = getLanguage();
    const content = c[lang] || c.en;

    const html = `
      <div style="max-width: 720px; margin: 0 auto;">
        <span class="eyebrow">${escapeHtml(c.type)} • ${escapeHtml(c.location)}</span>
        <h2 style="font-family: 'Outfit', sans-serif; font-size: 22px; color: var(--cs-deep); margin: 6px 0 12px;">
          ${escapeHtml(content.title)}
        </h2>
        <p style="font-size: 14.5px; line-height: 1.6; color: var(--cs-ink); margin-bottom: 14px;">
          <strong>How It Started:</strong> ${escapeHtml(content.start)}
        </p>
        <p style="font-size: 14.5px; line-height: 1.6; color: var(--cs-ink); margin-bottom: 14px;">
          <strong>How the Trap Worked:</strong> ${escapeHtml(content.worked)}
        </p>
        <div class="safety-box alert">
          <strong>What Went Wrong:</strong> ${escapeHtml(content.wrong)}
        </div>
        <div class="safety-box success">
          <strong>What You Should Do Instead:</strong> ${escapeHtml(content.do)}
        </div>
      </div>
    `;
    openModal(html);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLearningPage);
  } else {
    initLearningPage();
  }
})();
