# CyberSathi

**Awareness for Every Village, Opportunity for Every Family**

A modern, accessible, multi-page B.Tech Cybersecurity college-project platform built with semantic HTML5, CSS3, Vanilla JavaScript (ES modules), Supabase/PostgreSQL, Leaflet/OpenStreetMap, and browser Web Speech APIs.

---

## Multi-Page Architecture

CyberSathi is organized into clean, focused pages with shared styling, cross-document view transitions, and full multilingual support (English, Hindi, and Marathi):

1. **`index.html` (Home)**:
   - Village & family cyber safety mission, core pillars, and audience protection (youth, women, seniors, farmers, shopkeepers).
   - Quick feature hub and emergency helpline 1930 quick actions.
2. **`topics.html` (Awareness Topics & Glossary)**:
   - 18 essential cyber threat guides (OTP fraud, UPI collect scams, QR fraud, phishing, fake job tasks, digital arrest, deepfakes, etc.).
   - Category filtering pills, live search bar, interactive threat drawer with checklists, and audio TTS.
   - Plain-language Cyber Safety Glossary.
3. **`learning.html` (Videos, Animations & Real Cases)**:
   - Curated YouTube awareness videos from RBI, NPCI, and Police cyber cells with category filters and in-app modal player.
   - Animated Cyber Story Player with step-by-step scene progression and audio narration.
   - Reported Real Fraud Case Studies (Pune ₹1Cr Digital Arrest, Delhi KYC Phishing, Mumbai WhatsApp Impersonation, etc.) with multilingual text and speech synthesis.
   - Official Indian Cybercrime Coordination Centre (I4C) section.
4. **`tools.html` (Voice Saathi, Quiz & Help Centre)**:
   - **Voice Saathi**: Multilingual voice AI assistant using browser `SpeechRecognition` and `SpeechSynthesis`.
   - **Cyber Safety Quiz**: 10 scenario-based questions with instant feedback, scoring, explanations, and speech readout.
   - **Nagpur Demo Help Centre**: Physical community guidance centre information with Leaflet OpenStreetMap and offline SVG fallback.
   - **Government Portals Directory**: Direct links to verified portals (`cybercrime.gov.in`, `myscheme.gov.in`, `sancharsaathi.gov.in`, `rbikehtahai.rbi.org.in`).
5. **`emergency.html` (Get Help & Emergency Reporting)**:
   - **5-Step Emergency Protocol**: Action checklist for the Golden Hour (1-2 hours) after being scammed.
   - **Community Scam Report Form**: Submits incident details, loss amount, and platform.
   - **Callback Request Form**: Free guidance phone call booking with volunteer guides.
   - **Volunteer Enrollment Form**: Join the rural awareness brigade.
   - **Contact Us Form**.
6. **`admin.html` (Control Centre & Analytics Dashboard)**:
   - Clear KPI cards: Total Scam Reports, Total Loss Tracked, Pending Callbacks, Enrolled Volunteers, Quiz Average.
   - Filterable, searchable Scam Incident log with status updater (*Pending*, *Under Review*, *Escalated to 1930*, *Resolved*) and CSV export.
   - Callback queue with 1-click "Mark as Contacted" toggle and CSV export.
   - Volunteer roster with approval toggle and CSV export.
   - Citizen messages queue and backend settings overview.
7. **`CyberSathi-standalone.html`**:
   - Preserved single-file presentation build for offline demonstrations.

---

## Run Locally

Because this is a static multi-page frontend using ES modules, start a local HTTP server:

```bash
python -m http.server 5500
```

Or double-click `START-CYBERSATHI.bat`.
Then open your browser at:
`http://localhost:5500/`

---

## Dual Data Layer (Demo Mode + Supabase Cloud)

CyberSathi includes an offline-resilient dual-layer data architecture:
- **Demo Mode**: If Supabase credentials are not configured or the network is offline, public forms save instantly to `localStorage` and the Admin Dashboard immediately presents rich, realistic demonstration records and analytics.
- **Supabase Cloud Sync**: Configure your project URL and publishable key in `supabase-config.js` to automatically sync public submissions with your Supabase PostgreSQL database.

---

## Important Content Safeguards

- CyberSathi is an educational college-project prototype, not an official government or law-enforcement portal.
- For real financial cyber fraud complaints in India, citizens must immediately call **1930** and report on **cybercrime.gov.in**.
- The Help Centre in Nagpur is a demonstration project location.
- Never collect passwords, ATM PINs, UPI PINs, CVVs, or full bank credentials.
