const A4 = {
  landscape: { width: 1123, height: 794 },
  portrait: { width: 794, height: 1123 },
};

const roles = {
  "Super Admin": ["*"],
  Admin: ["template:create", "template:edit", "student:edit", "import", "generate", "approve", "revoke", "audit:view", "number:override"],
  "Academic Officer": ["student:edit", "approve", "audit:view"],
  "Finance Officer": ["finance:clear", "audit:view"],
  "Certificate Officer": ["template:edit", "generate", "download", "audit:view"],
  "Data Entry User": ["student:edit", "import"],
  Verifier: ["verify", "audit:view"],
  Viewer: ["audit:view"],
};

const fieldCatalog = [
  "student_name", "printed_name", "registration_number", "certificate_ref", "award_body", "campus_name",
  "programme_name", "course_name", "qualification_title", "award_title", "specialisation", "grade",
  "classification", "gpa", "credits", "academic_year", "start_date", "end_date", "award_date",
  "issue_date", "completion_date", "authorised_signatory", "dean_name", "director_name",
  "qr_verification_link", "custom_notes"
];

const fontOptions = [
  { name: "Arial", value: "Arial, Helvetica, sans-serif", group: "Universal" },
  { name: "Helvetica", value: "Helvetica, Arial, sans-serif", group: "Universal" },
  { name: "Times New Roman", value: "'Times New Roman', Times, serif", group: "Serif" },
  { name: "Georgia", value: "Georgia, 'Times New Roman', serif", group: "Serif" },
  { name: "Garamond", value: "Garamond, Georgia, serif", group: "Serif" },
  { name: "Palatino", value: "Palatino, 'Palatino Linotype', serif", group: "Serif" },
  { name: "Verdana", value: "Verdana, Geneva, sans-serif", group: "Sans-serif" },
  { name: "Tahoma", value: "Tahoma, Geneva, sans-serif", group: "Sans-serif" },
  { name: "Trebuchet MS", value: "'Trebuchet MS', Arial, sans-serif", group: "Sans-serif" },
  { name: "Courier New", value: "'Courier New', Courier, monospace", group: "Monospace" },
  { name: "Brush Script", value: "'Brush Script MT', cursive", group: "Cursive" },
  { name: "Zapfino", value: "Zapfino, 'Brush Script MT', cursive", group: "Cursive" },
  { name: "Sinhala Unicode", value: "'Iskoola Pota', 'Noto Sans Sinhala', 'Malithi Web', sans-serif", group: "Sinhala" },
  { name: "Tamil Unicode", value: "'Noto Sans Tamil', 'Latha', 'Tamil Sangam MN', sans-serif", group: "Tamil" },
  { name: "Noto Sans Universal", value: "'Noto Sans', 'Noto Sans Sinhala', 'Noto Sans Tamil', Arial, sans-serif", group: "Unicode" },
  { name: "Noto Serif Universal", value: "'Noto Serif', 'Noto Serif Sinhala', 'Noto Serif Tamil', Georgia, serif", group: "Unicode" },
  { name: "Apple System", value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", group: "System" },
  { name: "Academic Serif", value: "Georgia, 'Times New Roman', 'Noto Serif', serif", group: "Certificate" },
  { name: "Formal Sans", value: "'Segoe UI', Arial, 'Noto Sans', sans-serif", group: "Certificate" }
];

const sampleStudents = [
  {
    id: "STU-1001",
    student_name: "Amaya Perera",
    printed_name: "AMAYA PERERA",
    registration_number: "PIC/BBA/2026/001",
    nic: "200112345678",
    email: "amaya@example.edu",
    phone: "+94 77 123 4567",
    campus_name: "Colombo Campus",
    programme_name: "Bachelor of Business Administration",
    award_body: "Pioneer International College",
    batch: "BBA 2024",
    intake: "January",
    status: "completed",
    qualification_title: "BACHELOR OF BUSINESS ADMINISTRATION",
    award_title: "Degree",
    specialisation: "Business Management",
    grade: "A",
    classification: "Merit",
    gpa: "3.62",
    credits: "120",
    academic_year: "2025/2026",
    award_date: "2026-05-19",
    issue_date: "2026-05-19",
    completion_date: "2026-04-30",
    authorised_signatory: "Dr. N. Wijesinghe",
    dean_name: "Prof. Helena Morris",
    director_name: "Mr. D. Fernando",
    custom_notes: "Awarded after successful completion of all academic and administrative requirements."
  },
  {
    id: "STU-1002",
    student_name: "தர்ஷன் குமார்",
    printed_name: "தர்ஷன் குமார்",
    registration_number: "PIC/MBA/2026/014",
    nic: "P1234567",
    email: "darshan@example.edu",
    phone: "+94 76 222 8800",
    campus_name: "Kandy Campus",
    programme_name: "Master of Business Administration",
    award_body: "Global Awarding Council",
    batch: "MBA 2025",
    intake: "September",
    status: "completed",
    qualification_title: "MASTER OF BUSINESS ADMINISTRATION",
    award_title: "Master's Degree",
    specialisation: "Strategic Management",
    grade: "A-",
    classification: "Distinction",
    gpa: "3.81",
    credits: "90",
    academic_year: "2025/2026",
    award_date: "2026-05-19",
    issue_date: "2026-05-19",
    completion_date: "2026-05-01",
    authorised_signatory: "Dr. A. Ramanathan",
    dean_name: "Prof. Helena Morris",
    director_name: "Mr. D. Fernando",
    custom_notes: "Sinhala, Tamil, English, accents, and academic symbols are rendered with Unicode fonts."
  }
];

const modules = [
  { code: "BBA101", title: "Academic Writing and Research Skills", credits: 15, marks: 82, grade: "A", gpa: 4, result: "Pass", semester: "1", year: "2024" },
  { code: "BBA204", title: "Financial Accounting", credits: 15, marks: 74, grade: "B+", gpa: 3.3, result: "Pass", semester: "2", year: "2025" },
  { code: "BBA310", title: "Strategic Management and Governance", credits: 30, marks: 78, grade: "A-", gpa: 3.7, result: "Pass", semester: "3", year: "2026" },
  { code: "BBA399", title: "Capstone Business Project", credits: 30, marks: 86, grade: "A", gpa: 4, result: "Pass", semester: "3", year: "2026" }
];

const app = document.querySelector("#app");
const appConfig = window.ACADEMIC_ISSUER_CONFIG || {};
const authEnabled = Boolean(appConfig.supabaseUrl && appConfig.supabaseAnonKey && window.supabase);
const supabaseClient = authEnabled ? window.supabase.createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey) : null;

const state = {
  view: "dashboard",
  role: "Super Admin",
  auth: {
    enabled: authEnabled,
    checking: authEnabled,
    user: null,
    profile: null,
    error: ""
  },
  sidebarCollapsed: false,
  designerMaximized: false,
  designerToolsCollapsed: false,
  designerPropertiesCollapsed: false,
  canvasZoom: 0.75,
  selectedStudent: sampleStudents[0],
  selectedElementId: null,
  selectedElementIds: [],
  elementClipboard: null,
  activeToolTab: "add",
  customFonts: [],
  importedFields: [],
  issued: [],
  verifications: [],
  audit: [],
  imports: [],
  progress: {
    active: false,
    label: "Ready",
    percent: 0,
    current: "No process running",
    log: ["System ready. Choose a task to begin."]
  },
  numberConfig: {
    prefix: "PIC",
    programmeCode: "BBA",
    yearCode: "2026",
    separator: "-",
    start: 1,
    pad: 6,
    resetYearly: true,
    resetCampus: false,
    resetProgramme: true,
    manualOverride: true
  },
  template: {
    id: "TPL-CERT-001",
    name: "Global Degree Certificate",
    version: "1.0.0",
    type: "Certificate",
    status: "Draft",
    orientation: "landscape",
    snap: true,
    background: "",
    elements: [
      textEl("institution", "PIONEER INTERNATIONAL COLLEGE", 120, 72, 880, 42, { size: 34, weight: "700", family: "Georgia", align: "center", color: "#075985" }),
      textEl("awardLine", "This is to certify that", 250, 170, 620, 32, { size: 24, family: "Georgia", align: "center" }),
      textEl("student", "{{printed_name}}", 210, 225, 700, 56, { size: 42, weight: "700", family: "Georgia", align: "center", color: "#111827", underline: true }),
      textEl("wording", "has been awarded the degree of", 255, 300, 610, 32, { size: 22, family: "Georgia", align: "center" }),
      textEl("qualification", "{{qualification_title}}", 170, 348, 790, 54, { size: 36, weight: "700", family: "Georgia", align: "center", color: "#8a5a00" }),
      textEl("special", "with {{classification}} in {{specialisation}}", 230, 415, 660, 32, { size: 22, family: "Georgia", align: "center" }),
      textEl("date", "Award Date: {{award_date}}", 140, 610, 260, 28, { size: 16, align: "left" }),
      textEl("ref", "Certificate No: {{certificate_ref}}", 705, 610, 300, 28, { size: 16, align: "right" }),
      textEl("sign1", "{{dean_name}}\nDean", 170, 675, 230, 48, { size: 15, align: "center" }),
      textEl("sign2", "{{director_name}}\nDirector", 710, 675, 230, 48, { size: 15, align: "center" }),
      lineEl("line1", 155, 666, 260, 1),
      lineEl("line2", 695, 666, 260, 1),
      shapeEl("seal", 503, 577, 110, 110, { shape: "seal", color: "#b7791f" }),
      qrEl("qr", 505, 645, 86, 86),
      textEl("verify", "Scan to verify", 485, 735, 125, 20, { size: 12, align: "center" })
    ]
  },
  savedTemplates: {
    certificate: null,
    transcript: null
  },
  templateLibrary: [],
  workflow: [
    { name: "Data entered", role: "Data Entry User", done: true },
    { name: "Academic checked", role: "Academic Officer", done: false },
    { name: "Finance cleared", role: "Finance Officer", done: false },
    { name: "Certificate reviewed", role: "Certificate Officer", done: false },
    { name: "Approved by authorised officer", role: "Admin", done: false },
    { name: "Generated and locked", role: "Super Admin", done: false }
  ],
};

function textEl(id, text, x, y, w, h, style = {}) {
  return { id, type: "text", text, x, y, w, h, z: 10, locked: false, hidden: false, field: "", style: {
    family: "Arial", size: 18, color: "#1e2229", weight: "400", italic: false, underline: false,
    transform: "none", align: "left", lineHeight: 1.2, letterSpacing: 0, ...style
  }};
}
function lineEl(id, x, y, w, h) { return { id, type: "line", x, y, w, h, z: 6, locked: false, hidden: false, style: { color: "#1e2229", thickness: 2 } }; }
function shapeEl(id, x, y, w, h, style = {}) { return { id, type: "shape", x, y, w, h, z: 4, locked: false, hidden: false, style: { shape: "rect", color: "#075985", fill: "transparent", thickness: 2, ...style } }; }
function qrEl(id, x, y, w, h) { return { id, type: "qr", x, y, w, h, z: 20, locked: false, hidden: false, style: { color: "#111111" } }; }
function tableEl(id, x, y, w, h) {
  return {
    id,
    type: "table",
    x,
    y,
    w,
    h,
    z: 8,
    locked: false,
    hidden: false,
    columns: ["Module code", "Module title", "Credits", "Grade", "GPA"],
    style: { textColor: "#1e2229", borderColor: "#1e2229", size: 13, border: true, mode: "grid", rowHeight: 30 }
  };
}

function can(permission) {
  const set = roles[state.role] || [];
  return set.includes("*") || set.includes(permission);
}

function audit(action, details) {
  state.audit.unshift({
    action,
    details,
    role: state.role,
    time: new Date().toLocaleString(),
    ip: "local-session",
  });
}

function setProgress(label, percent, current) {
  state.progress = {
    active: percent > 0 && percent < 100,
    label,
    percent,
    current,
    log: [`${new Date().toLocaleTimeString()} - ${current}`, ...state.progress.log].slice(0, 12)
  };
  persist();
  render();
}

function progressPanel() {
  return `
    <div class="panel">
      <div class="panel-head">
        <h2>Processing Progress</h2>
        <span class="badge ${state.progress.active ? "warn" : state.progress.percent === 100 ? "ok" : ""}">${state.progress.label}</span>
      </div>
      <div class="panel-body progress-box">
        <div class="row">
          <b>${state.progress.percent}%</b>
          <span>${escapeHtml(state.progress.current)}</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${state.progress.percent}%"></div></div>
        <div class="progress-log">${state.progress.log.map(item => `<div>${escapeHtml(item)}</div>`).join("")}</div>
      </div>
    </div>
  `;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function refNumber(manual = "") {
  if (manual && can("number:override")) return manual;
  const count = state.issued.length + Number(state.numberConfig.start);
  const n = String(count).padStart(Number(state.numberConfig.pad), "0");
  return [state.numberConfig.prefix, state.numberConfig.programmeCode, state.numberConfig.yearCode, n].join(state.numberConfig.separator);
}

function merge(text, student = state.selectedStudent, ref = "") {
  const data = {
    ...student,
    certificate_ref: ref || student.certificate_ref || "DRAFT-REFERENCE",
    qr_verification_link: `${location.origin}${location.pathname}#verify=${ref || "DRAFT-REFERENCE"}`
  };
  return String(text || "").replace(/\{\{(.*?)\}\}/g, (_, key) => data[key.trim()] ?? "");
}

function allFields() {
  const imported = state.importedFields.map(field => field.key);
  return [...new Set([...fieldCatalog, ...imported])];
}

function fieldLabel(key) {
  const imported = state.importedFields.find(field => field.key === key);
  return imported ? `${imported.label}  →  {{${key}}}` : `{{${key}}}`;
}

function render() {
  persist();
  if (state.auth.enabled && state.auth.checking) {
    app.innerHTML = `<div class="login-screen"><div class="login-card"><div class="brand-mark">A</div><h1>Academic Issuer</h1><p>Checking staff session...</p></div></div>`;
    return;
  }
  if (state.auth.enabled && !state.auth.user) {
    app.innerHTML = loginView();
    bindLogin();
    return;
  }
  app.innerHTML = `
    <div class="app-shell ${state.sidebarCollapsed ? "sidebar-collapsed" : ""}">
      <aside class="sidebar">
        <button id="sidebarToggle" class="sidebar-toggle" title="${state.sidebarCollapsed ? "Maximize sidebar" : "Minimize sidebar"}">${state.sidebarCollapsed ? "›" : "‹"}</button>
        <div class="brand-block">
          <div class="brand-mark">A</div>
          <div>
            <strong>Academic Issuer</strong>
            <span>Secure certificate, transcript, letter, award, and verification management.</span>
          </div>
        </div>
        <div class="role-card">
          <label>Authority level
            <select id="roleSelect" ${state.auth.enabled ? "disabled" : ""}>${Object.keys(roles).map(r => `<option ${r === state.role ? "selected" : ""}>${r}</option>`).join("")}</select>
          </label>
          <span class="badge ${state.role === "Super Admin" ? "ok" : "warn"}">${state.role}</span>
          ${state.auth.enabled ? `<button id="logoutUser">Logout</button>` : ""}
        </div>
        <nav class="nav">
          ${navButton("dashboard", "Dashboard", "▦")}
          ${navButton("designer", "Template Designer", "✣")}
          ${navButton("bulk", "Bulk Batch Process", "⇪")}
          ${navButton("students", "Students & Masters", "☷")}
          ${navButton("transcript", "Transcript Builder", "≣")}
          ${navButton("workflow", "Approvals & Locking", "✓")}
          ${navButton("verification", "Verification", "◎")}
          ${navButton("audit", "Audit & Reports", "◷")}
        </nav>
      </aside>
      <main class="main">
        <header class="topbar">
          <div>
            <h1>${titleForView()}</h1>
            <p>${subtitleForView()}</p>
          </div>
          <div class="toolbar">${topActions()}</div>
        </header>
        <section class="workspace">${view()}</section>
      </main>
    </div>
    <div id="modal" class="modal"></div>
  `;
  bindCommon();
  bindView();
}

function loginView() {
  return `
    <div class="login-screen">
      <form id="loginForm" class="login-card">
        <div class="brand-mark">A</div>
        <h1>Academic Issuer</h1>
        <p>Staff login is required to design, issue, verify, and export academic documents.</p>
        <label>Email
          <input id="loginEmail" type="email" autocomplete="email" required placeholder="admin@institution.edu"/>
        </label>
        <label>Password
          <input id="loginPassword" type="password" autocomplete="current-password" required/>
        </label>
        ${state.auth.error ? `<div class="login-error">${escapeHtml(state.auth.error)}</div>` : ""}
        <button class="primary" type="submit">Login</button>
      </form>
    </div>
  `;
}

function bindLogin() {
  document.querySelector("#loginForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const email = document.querySelector("#loginEmail").value.trim();
    const password = document.querySelector("#loginPassword").value;
    state.auth.error = "";
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      state.auth.error = error.message || "Login failed";
      render();
      return;
    }
    await applyAuthSession(data.session);
    audit("Staff logged in", email);
    render();
  });
}

async function applyAuthSession(session) {
  state.auth.user = session?.user || null;
  state.auth.profile = null;
  if (!state.auth.user) return;
  const { data } = await supabaseClient
    .from("staff_profiles")
    .select("full_name, role, active")
    .eq("id", state.auth.user.id)
    .single();
  if (data && data.active !== false) {
    state.auth.profile = data;
    state.role = roles[data.role] ? data.role : "Viewer";
  } else {
    state.role = "Viewer";
  }
}

async function initAuth() {
  if (!authEnabled) return;
  const { data } = await supabaseClient.auth.getSession();
  await applyAuthSession(data.session);
  state.auth.checking = false;
  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    await applyAuthSession(session);
    state.auth.checking = false;
    render();
  });
  render();
}

async function logoutUser() {
  if (!authEnabled) return;
  await supabaseClient.auth.signOut();
  state.auth.user = null;
  state.auth.profile = null;
  state.auth.error = "";
  audit("Staff logged out", "Session ended");
  render();
}

function navButton(id, label, icon) {
  return `<button class="${state.view === id ? "active" : ""}" data-nav="${id}" title="${label}"><span>${icon}</span><span class="nav-label">${label}</span></button>`;
}
function titleForView() {
  return ({
    dashboard: "Institution Document Control Centre",
    designer: "Drag-and-Drop Template Designer",
    bulk: "Bulk Certificate and Transcript Generation",
    students: "Students, Programmes, Campuses and Awarding Bodies",
    transcript: "Dynamic Transcript Builder",
    workflow: "Authority Levels and Approval Workflow",
    verification: "Public Verification Registry",
    audit: "Audit Logs, Versioning and Reports"
  })[state.view];
}
function subtitleForView() {
  return ({
    dashboard: "Live operating overview for secure academic document issuing.",
    designer: "Move every field anywhere, upload backgrounds, layer objects, lock final templates.",
    bulk: "Import CSV or Excel-saved CSV data, validate it, generate references, and issue in batches.",
    students: "Master data for learners, programmes, syllabus versions, modules and signatories.",
    transcript: "Configure transcript columns, GPA, credits, grades, continuation pages and summaries.",
    workflow: "Custom approval stages prevent unauthorised edits, backdating and duplicate issuing.",
    verification: "QR and manual lookup show only approved public information.",
    audit: "Every number, issue, correction, download and template change is traceable."
  })[state.view];
}
function topActions() {
  if (state.view === "designer") {
    return `
      <button id="toggleDesignerMax">${state.designerMaximized ? "Show Panels" : "Maximize Designer"}</button>
      <select id="canvasZoom" title="Canvas zoom">
        ${[0.5, 0.75, 1, 1.25].map(z => `<option value="${z}" ${state.canvasZoom === z ? "selected" : ""}>${Math.round(z * 100)}%</option>`).join("")}
      </select>
        <button id="saveTemplate">Save Version</button>
        <button id="saveToLibrary">Save to Library</button>
        <button id="openTemplateLibrary">Template Library</button>
        <button id="saveCertificateTemplate">Save Certificate</button>
      <button id="saveTranscriptTemplate">Save Transcript</button>
      <button id="previewResult">Preview Result</button>
      <button id="printDoc">Print/PDF</button>
      <button id="exportPng" class="primary">Export PNG</button>
      <button id="exportJpg">Export JPG</button>
      <button id="issueOne" class="success">Generate Certificate</button>
    `;
  }
  if (state.view === "bulk") return `<button id="runBulk" class="success">Run Super Admin Batch</button>`;
  return `<button id="quickIssue" class="primary">Quick Issue Demo</button>`;
}

function view() {
  return ({
    dashboard: dashboardView,
    designer: designerView,
    bulk: bulkView,
    students: studentsView,
    transcript: transcriptView,
    workflow: workflowView,
    verification: verificationView,
    audit: auditView
  })[state.view]();
}

function dashboardView() {
  const pending = state.workflow.filter(s => !s.done).length;
  return `
    <div class="stack">
      <div class="grid-4">
        ${metric("Certificates issued", state.issued.length, "All final documents locked after issue")}
        ${metric("Pending approvals", pending, "Academic, finance and authorised officer checks")}
        ${metric("Generated today", state.issued.filter(i => i.date === new Date().toLocaleDateString()).length, "Single and bulk runs")}
        ${metric("Verification searches", state.verifications.length, "QR scans and manual reference lookups")}
      </div>
      <div class="split">
        <div class="panel">
          <div class="panel-head"><h2>Operational Snapshot</h2><span class="badge ok">Multi-awarding body ready</span></div>
          <div class="panel-body">
            <table class="table">
              <thead><tr><th>Area</th><th>Current capability</th><th>Status</th></tr></thead>
              <tbody>
                ${[
                  ["Templates", "Certificates, transcripts, letters, awards, custom academic documents", "Active"],
                  ["Languages", "English, Sinhala Unicode, Tamil Unicode, accents and symbols", "Active"],
                  ["Numbering", "Prefixes, programme/year codes, padded running numbers, manual override permission", "Controlled"],
                  ["Security", "Role permissions, workflow approval, draft watermark, locks, audit logs", "Enforced"],
                  ["Exports", "Print-ready A4, PNG/JPG image rendering, browser PDF print, bulk ZIP-ready records", "Ready"]
                ].map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td><span class="badge ${r[2] === "Active" ? "ok" : "warn"}">${r[2]}</span></td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
        <div class="stack">
          ${progressPanel()}
          <div class="panel">
            <div class="panel-head"><h2>Recent Audit</h2><span class="badge">${state.audit.length}</span></div>
            <div class="panel-body audit">${auditItems(8)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
function metric(label, value, note) {
  return `<div class="panel metric"><span>${label}</span><b>${value}</b><span>${note}</span></div>`;
}

function designerView() {
  const selected = getSelected();
  const classes = [
    state.designerMaximized ? "maximized" : "",
    state.designerToolsCollapsed ? "tools-collapsed" : "",
    state.designerPropertiesCollapsed ? "properties-collapsed" : ""
  ].filter(Boolean).join(" ");
  return `
    <div class="designer-shell ${classes}">
      <div class="panel designer-tools-panel">
        <div class="panel-head"><h2>Tools</h2><div class="row tight"><span class="badge">A4 ${state.template.orientation}</span><button id="toggleToolsPanel" class="icon" title="Minimize tools panel">${state.designerToolsCollapsed ? "›" : "‹"}</button></div></div>
        <div class="panel-body stack">
          <div class="tool-tabs">
            ${["add", "fields", "pages"].map(t => `<button data-tab="${t}" class="${state.activeToolTab === t ? "active" : ""}">${t}</button>`).join("")}
          </div>
          ${toolTab()}
        </div>
      </div>
      <div class="canvas-wrap">
        ${pageHtml()}
      </div>
      <div class="panel designer-properties-panel">
        <div class="panel-head"><h2>Properties</h2><div class="row tight"><span class="badge">${selected ? selected.type : "none"}</span><button id="togglePropertiesPanel" class="icon" title="Minimize properties panel">${state.designerPropertiesCollapsed ? "‹" : "›"}</button></div></div>
        <div class="panel-body">${selected ? propertiesHtml(selected) : `<div class="dropzone">Select any object on the page to edit position, style, field binding, layer, lock and visibility.</div>`}</div>
      </div>
    </div>
  `;
}

function toolTab() {
  if (state.activeToolTab === "fields") {
    return `
      <div class="stack">
        <label>Dynamic field
          <select id="fieldSelect">${allFields().map(f => `<option value="${f}">${escapeHtml(fieldLabel(f))}</option>`).join("")}</select>
        </label>
        <button id="addField" class="primary">Add Field Text</button>
        <button id="autoCreateFields" ${state.importedFields.length ? "" : "disabled"}>Auto-create fields from CSV</button>
        <button id="addWordTranscriptPreset" ${state.importedFields.length ? "" : "disabled"}>Add Word-style transcript tags</button>
        <button id="addLabelValueBlock" ${state.importedFields.length ? "" : "disabled"}>Add label/value tags</button>
        <button id="autoCreateTranscript" ${hasImportedModules() ? "" : "disabled"}>Add repeated module table</button>
        <button id="addManualField">Add Manual Field</button>
        <div class="dropzone">Upload any CSV/Excel-saved CSV in Bulk Batch Process. Headers become tags automatically, for example Student Name becomes {{student_name}}.</div>
      </div>
    `;
  }
  if (state.activeToolTab === "pages") {
    return `
      <div class="stack">
        <label>Template type
          <select id="templateType">${["Certificate","Transcript","Completion Letter","Award Letter","Confirmation Letter","Academic Record","Verification Document","Custom Document"].map(t => `<option ${state.template.type === t ? "selected" : ""}>${t}</option>`).join("")}</select>
        </label>
        <label>Template name
          <input id="templateName" value="${escapeHtml(state.template.name || "")}"/>
        </label>
        <div class="dropzone">Save to Library keeps this full design for future use. Load it later, edit it, clone it, then set as Certificate or Transcript for bulk generation.</div>
        <label>Page orientation
          <select id="orientation"><option ${state.template.orientation === "landscape" ? "selected" : ""}>landscape</option><option ${state.template.orientation === "portrait" ? "selected" : ""}>portrait</option></select>
        </label>
        <label class="check-row"><input type="checkbox" id="snapToggle" ${state.template.snap ? "checked" : ""}/> Snap-to-grid and guides</label>
        <label>Background image
          <input type="file" id="bgUpload" accept="image/*"/>
        </label>
        <label>Upload font file
          <input type="file" id="fontUpload" accept=".ttf,.otf,.woff,.woff2,font/*"/>
        </label>
        <div class="dropzone">Upload Sinhala, Tamil, cursive, serif, sans-serif, or institution brand fonts. After upload, select the font from the text properties panel.</div>
        <button id="cloneTemplate">Clone Template Version</button>
      </div>
    `;
  }
  return `
    <div class="element-list">
      <button data-add="text">Text box <span>＋</span></button>
      <button data-add="table">Transcript table <span>＋</span></button>
      <button data-add="line">Line <span>＋</span></button>
      <button data-add="rect">Border / shape <span>＋</span></button>
      <button data-add="seal">Seal / stamp <span>＋</span></button>
      <button data-add="qr">QR code <span>＋</span></button>
      <button data-add="image">Logo / signature image <span>＋</span></button>
      <button id="copyEl" ${!selectedElements().length ? "disabled" : ""}>Copy selected <span>⌘C</span></button>
      <button id="pasteEl" ${!state.elementClipboard ? "disabled" : ""}>Paste copied <span>⌘V</span></button>
      <button id="duplicateEl" ${!selectedElements().length ? "disabled" : ""}>Duplicate selected <span>⧉</span></button>
    </div>
    <div class="dropzone">Click-drag on empty page space to select many fields. Keyboard: ⌘C copy, ⌘V paste, ⌘D duplicate, Delete remove, Arrow keys move, Shift + Arrow moves faster.</div>
    <input type="file" id="imageUpload" accept="image/*" hidden />
  `;
}

function pageHtml(ref = "") {
  const pageClass = `${state.template.orientation} ${state.template.snap ? "snap" : ""}`;
  const bgStyle = state.template.background ? `style="background-image:url('${state.template.background}')"` : "";
  return `
    <div id="page" class="page ${pageClass}" style="zoom:${state.canvasZoom}">
      <div class="page-bg ${state.template.background ? "" : "default"}" ${bgStyle}></div>
      ${state.template.elements
        .slice()
        .sort((a, b) => a.z - b.z)
        .map(el => elementHtml(el, ref))
        .join("")}
    </div>
  `;
}

function elementHtml(el, ref = "") {
  if (el.hidden) return `<div class="doc-element hidden" data-id="${el.id}" style="${pos(el)}"></div>`;
  const selected = isSelected(el.id) ? "selected" : "";
  const multi = state.selectedElementIds.length > 1 && isSelected(el.id) ? "multi-selected" : "";
  const locked = el.locked ? "locked" : "";
  let body = "";
  if (el.type === "text") {
    const s = el.style;
    body = `<div class="text-el" style="font-family:${s.family};font-size:${s.size}px;color:${s.color};font-weight:${s.weight};font-style:${s.italic ? "italic" : "normal"};text-decoration:${s.underline ? "underline" : "none"};text-align:${s.align};line-height:${s.lineHeight};letter-spacing:${s.letterSpacing}px;text-transform:${s.transform};">${escapeHtml(merge(el.text, state.selectedStudent, ref))}</div>`;
  } else if (el.type === "line") {
    body = `<div class="line-el" style="color:${el.style.color};border-top-width:${el.style.thickness}px"></div>`;
  } else if (el.type === "shape") {
    const radius = el.style.shape === "seal" ? "50%" : "0";
    const outline = el.style.shape === "seal" ? `border:5px double ${el.style.color};color:${el.style.color};` : `border:${el.style.thickness}px solid ${el.style.color};`;
    body = `<div class="shape-el" style="${outline}border-radius:${radius};background:${el.style.fill || "transparent"};display:grid;place-items:center;font-family:Georgia,serif;font-weight:700;">${el.style.shape === "seal" ? "SEAL" : ""}</div>`;
  } else if (el.type === "qr") {
    body = `<div class="qr-el">${Array.from({ length: 49 }, () => "<i></i>").join("")}</div>`;
  } else if (el.type === "table") {
    normalizeTableStyle(el);
    body = `<table class="table-el ${el.style.mode === "no-lines" ? "no-lines" : ""} ${el.style.mode === "tabbed" ? "tabbed" : ""}" style="color:${el.style.textColor};--table-border:${el.style.borderColor};font-size:${el.style.size}px">${tableRows(el)}</table>`;
  } else if (el.type === "image") {
    body = `<img class="image-el" src="${el.src}" alt="uploaded layer"/>`;
  }
  const tableTools = selected && el.type === "table" && !el.locked ? tableResizeHandles(el) : "";
  return `<div class="doc-element ${selected} ${multi} ${locked}" data-id="${el.id}" style="${pos(el)}">${body}${tableTools}${selected && state.selectedElementIds.length <= 1 && !el.locked ? `<span class="resize"></span>` : ""}</div>`;
}
function pos(el) { return `left:${el.x}px;top:${el.y}px;width:${el.w}px;height:${el.h}px;z-index:${el.z};`; }
function tableRows(el) {
  const colgroup = tableColWidths(el).length ? `<colgroup>${tableColWidths(el).map(width => `<col style="width:${width}%">`).join("")}</colgroup>` : "";
  const head = `<tr>${tableCellsForRow(el, el.columns, "th")}</tr>`;
  const sourceRows = el.source === "mailmerge_modules" ? moduleRowsFromRecord(state.selectedStudent) : modules;
  const rows = sourceRows.map(m => `<tr>${tableCellsForRow(el, el.columns.map(c => tableValue(c, m)), "td")}</tr>`).join("");
  return `${colgroup}${head}${rows}`;
}

function tableCellsForRow(el, values, tag) {
  const merges = normalizedTableMerges(el);
  let html = "";
  for (let i = 0; i < values.length; i += 1) {
    const merge = merges.find(item => item.from === i);
    const covered = merges.some(item => i > item.from && i < item.from + item.span);
    if (covered) continue;
    const span = merge?.span || 1;
    const content = values.slice(i, i + span).filter(Boolean).join(tag === "th" ? " / " : " ");
    html += `<${tag} ${span > 1 ? `colspan="${span}"` : ""}>${escapeHtml(content)}</${tag}>`;
  }
  return html;
}

function tableResizeHandles(el) {
  const widths = tableColWidths(el);
  const columnHandles = widths.slice(0, -1).map((width, index) => {
    const left = widths.slice(0, index + 1).reduce((sum, item) => sum + item, 0);
    return `<span class="table-col-handle" data-col-handle="${index}" title="Drag to resize column" style="left:${left}%"></span>`;
  }).join("");
  return `${columnHandles}<span class="table-row-handle" data-row-handle="1" title="Drag to change row height" style="top:${Number(el.style.rowHeight || 30)}px"></span>`;
}
function tableValue(column, m) {
  const key = column.toLowerCase();
  const clean = normalizeFieldKey(column);
  if (key.includes("ac") || key.includes("year")) return m.ac_yr || m.year || "";
  if (key.includes("title")) return m.title;
  if (key.includes("code") || clean === "module") return m.code;
  if (key.includes("level")) return m.level || "";
  if (key.includes("credit")) return m.credits;
  if (key.includes("mark")) return m.marks;
  if (key.includes("grade")) return m.grade;
  if (key.includes("gpa")) return m.gpa;
  if (key.includes("result")) return m.result;
  if (key.includes("semester")) return m.semester;
  if (key.includes("year")) return m.year;
  return "";
}

function normalizeTableStyle(el) {
  if (!el.style) el.style = {};
  if (!el.style.textColor) el.style.textColor = el.style.color || "#1e2229";
  if (!el.style.borderColor) el.style.borderColor = el.style.color || "#1e2229";
  if (!el.style.mode) el.style.mode = el.style.border === false ? "no-lines" : "grid";
  if (!el.style.rowHeight) el.style.rowHeight = 30;
  if (!Array.isArray(el.style.colWeights) || el.style.colWeights.length !== el.columns.length) {
    el.style.colWeights = inferTableWeights(el.columns);
  }
  el.merges = normalizedTableMerges(el);
}

function tableColWidths(el) {
  const weights = el.style?.colWeights;
  if (!Array.isArray(weights) || weights.length !== el.columns.length) return [];
  const total = weights.reduce((sum, value) => sum + Number(value || 0), 0);
  return total ? weights.map(value => (Number(value || 0) / total) * 100) : [];
}

function inferTableWeights(columns = []) {
  return columns.map(column => {
    const key = normalizeFieldKey(column);
    if (key.includes("title")) return 4.8;
    if (key.includes("code") || key === "module") return 1.7;
    if (key.includes("credit")) return 1.1;
    if (key.includes("grade") || key.includes("gpa") || key.includes("mark") || key.includes("level")) return 1;
    if (key.includes("ac") || key.includes("year")) return 1.2;
    return 1.4;
  });
}

function normalizedTableMerges(el) {
  return (el.merges || [])
    .map(item => ({
      from: Math.max(0, Math.min(el.columns.length - 1, Number(item.from) || 0)),
      span: Math.max(2, Math.min(el.columns.length, Number(item.span) || 2))
    }))
    .filter(item => item.from + item.span <= el.columns.length)
    .sort((a, b) => a.from - b.from)
    .filter((item, index, list) => index === 0 || item.from >= list[index - 1].from + list[index - 1].span);
}

function hasImportedModules() {
  return state.importedFields.some(field => /^module\d+$/.test(field.key) || /^title\d+$/.test(field.key));
}

function moduleRowsFromRecord(record = {}) {
  const keys = Object.keys(record);
  const max = keys.reduce((highest, key) => {
    const match = key.match(/^(module|title|mark|credit|level|ac_yr)(\d+)$/);
    return match ? Math.max(highest, Number(match[2])) : highest;
  }, 0);
  const rows = [];
  for (let i = 1; i <= max; i += 1) {
    const row = {
      ac_yr: record[`ac_yr${i}`] || "",
      code: record[`module${i}`] || "",
      title: record[`title${i}`] || "",
      level: record[`level${i}`] || "",
      marks: record[`mark${i}`] || "",
      credits: record[`credit${i}`] || "",
      result: record[`result${i}`] || "",
      grade: record[`grade${i}`] || gradeFromMark(record[`mark${i}`]),
      gpa: record[`gpa${i}`] || gpaFromMark(record[`mark${i}`])
    };
    row.result ||= Number(row.marks) >= 40 ? "Pass" : Number(row.marks) > 0 ? "Fail" : "";
    if (Object.values(row).some(Boolean)) rows.push(row);
  }
  return rows.length ? rows : modules;
}

function gpaFromMark(mark) {
  const n = Number(mark);
  if (!Number.isFinite(n)) return "";
  if (n >= 70) return 4.0;
  if (n >= 65) return 3.7;
  if (n >= 60) return 3.3;
  if (n >= 55) return 3.0;
  if (n >= 50) return 2.7;
  if (n >= 45) return 2.3;
  if (n >= 40) return 2.0;
  return 0;
}

function gradeFromMark(mark) {
  const n = Number(mark);
  if (!Number.isFinite(n)) return "";
  if (n >= 70) return "A";
  if (n >= 65) return "A-";
  if (n >= 60) return "B+";
  if (n >= 55) return "B";
  if (n >= 50) return "C+";
  if (n >= 45) return "C";
  if (n >= 40) return "D";
  return "F";
}

function calculatedModules() {
  const rows = state.imports.length ? moduleRowsFromRecord(state.selectedStudent || state.imports[0]) : modules;
  return rows.map(row => ({
    ...row,
    credits: Number(row.credits) || 0,
    marks: Number(row.marks) || 0,
    grade: row.grade || gradeFromMark(row.marks),
    gpa: Number(row.gpa || gpaFromMark(row.marks)) || 0,
    result: row.result || (Number(row.marks) >= 40 ? "Pass" : "Fail")
  }));
}

function weightedGpa(rows) {
  const totalCredits = rows.reduce((sum, row) => sum + (Number(row.credits) || 0), 0);
  if (!totalCredits) return 0;
  return rows.reduce((sum, row) => sum + (Number(row.gpa) || 0) * (Number(row.credits) || 0), 0) / totalCredits;
}

function classificationFromGpa(gpa) {
  if (gpa >= 3.7) return "Distinction";
  if (gpa >= 3.3) return "Merit";
  if (gpa >= 2.0) return "Pass";
  return "Fail";
}

function fontSelectOptions(current) {
  const builtIn = fontOptions.map(font => ({ ...font, custom: false }));
  const custom = state.customFonts.map(font => ({ name: font.name, value: `'${font.family}'`, group: "Uploaded", custom: true }));
  const all = [...builtIn, ...custom];
  if (current && !all.some(font => font.value === current)) {
    all.unshift({ name: current.replaceAll("'", ""), value: current, group: "Current", custom: false });
  }
  const groups = [...new Set(all.map(font => font.group))];
  return groups.map(group => {
    const options = all
      .filter(font => font.group === group)
      .map(font => `<option value="${escapeHtml(font.value)}" ${font.value === current ? "selected" : ""}>${escapeHtml(font.name)}</option>`)
      .join("");
    return `<optgroup label="${escapeHtml(group)}">${options}</optgroup>`;
  }).join("");
}

function propertiesHtml(el) {
  if (el.type === "table") normalizeTableStyle(el);
  const textProps = el.type === "text" ? `
    <label>Text / wording<textarea id="propText">${escapeHtml(el.text)}</textarea></label>
    <label>Bind field<select id="propField"><option value="">Manual text</option>${allFields().map(f => `<option value="${f}" ${el.field === f ? "selected" : ""}>${escapeHtml(fieldLabel(f))}</option>`).join("")}</select></label>
    <div class="small-grid">
      <label>Font<select id="fontFamily">${fontSelectOptions(el.style.family)}</select></label>
      <label>Size<input id="fontSize" type="number" value="${el.style.size}"/></label>
      <label>Colour<input id="fontColor" type="color" value="${el.style.color}"/></label>
      <label>Align<select id="fontAlign">${["left","center","right","justify"].map(a => `<option ${el.style.align === a ? "selected" : ""}>${a}</option>`).join("")}</select></label>
      <label>Line spacing<input id="lineHeight" type="number" step=".1" value="${el.style.lineHeight}"/></label>
      <label>Letter spacing<input id="letterSpacing" type="number" value="${el.style.letterSpacing}"/></label>
    </div>
    <div class="row">
      <label class="check-row tight"><input id="fontBold" type="checkbox" ${el.style.weight === "700" ? "checked" : ""}/> Bold</label>
      <label class="check-row tight"><input id="fontItalic" type="checkbox" ${el.style.italic ? "checked" : ""}/> Italic</label>
      <label class="check-row tight"><input id="fontUnderline" type="checkbox" ${el.style.underline ? "checked" : ""}/> Underline</label>
    </div>
    <label>Case<select id="textTransform">${["none","uppercase","lowercase","capitalize"].map(t => `<option ${el.style.transform === t ? "selected" : ""}>${t}</option>`).join("")}</select></label>
  ` : "";
  const tableProps = el.type === "table" ? `
    <label>Columns<textarea id="tableColumns">${escapeHtml(el.columns.join(", "))}</textarea></label>
    <label>Column widths
      <div class="column-width-list">
        ${tableColWidths(el).map((width, index) => `<label>${escapeHtml(el.columns[index] || `Column ${index + 1}`)}<input class="tableColWeight" data-col="${index}" type="number" min="1" step=".1" value="${Number(el.style.colWeights[index]).toFixed(1)}"/></label>`).join("")}
      </div>
    </label>
    <label>Output style<select id="tableMode">${[
      ["grid", "Grid with borders"],
      ["no-lines", "No borders"],
      ["tabbed", "Tabbed transcript columns"]
    ].map(([value, label]) => `<option value="${value}" ${((el.style.mode || "grid") === value) ? "selected" : ""}>${label}</option>`).join("")}</select></label>
    <div class="small-grid">
      <label>Font size<input id="tableSize" type="number" value="${el.style.size}"/></label>
      <label>Row height<input id="tableRowHeight" type="number" value="${el.style.rowHeight || 30}"/></label>
      <label>Text colour<input id="tableTextColor" type="color" value="${el.style.textColor || el.style.color || "#1e2229"}"/></label>
      <label>Border colour<input id="tableBorderColor" type="color" value="${el.style.borderColor || el.style.color || "#1e2229"}"/></label>
    </div>
    <label class="check-row"><input id="tableLines" type="checkbox" ${el.style.mode !== "no-lines" && el.style.mode !== "tabbed" ? "checked" : ""}/> Show table border lines</label>
    <div class="merge-box">
      <b>Merge columns</b>
      <div class="small-grid">
        <label>From<select id="mergeFrom">${el.columns.map((column, index) => `<option value="${index}">${index + 1}. ${escapeHtml(column)}</option>`).join("")}</select></label>
        <label>Span<input id="mergeSpan" type="number" min="2" max="${el.columns.length}" value="2"/></label>
      </div>
      <div class="row">
        <button id="mergeColumns">Merge</button>
        <button id="resetMerges">Split all</button>
      </div>
      <span class="hint">Drag blue vertical handles on the table to scale columns. Drag the horizontal handle to scale all rows.</span>
    </div>
  ` : "";
  return `
    <div class="properties">
      <div class="small-grid">
        <label>X<input id="propX" type="number" value="${Math.round(el.x)}"/></label>
        <label>Y<input id="propY" type="number" value="${Math.round(el.y)}"/></label>
        <label>Width<input id="propW" type="number" value="${Math.round(el.w)}"/></label>
        <label>Height<input id="propH" type="number" value="${Math.round(el.h)}"/></label>
        <label>Layer<input id="propZ" type="number" value="${el.z}"/></label>
      </div>
      <div class="row">
        <button id="bringForward">Bring forward</button>
        <button id="sendBackward">Send back</button>
      </div>
      <div class="row">
        <label class="check-row tight"><input id="propLocked" type="checkbox" ${el.locked ? "checked" : ""}/> Lock</label>
        <label class="check-row tight"><input id="propHidden" type="checkbox" ${el.hidden ? "checked" : ""}/> Hide</label>
      </div>
      ${textProps}
      ${tableProps}
      <button id="deleteEl" class="danger">Delete element</button>
    </div>
  `;
}

function bulkView() {
  return `
    <div class="split">
      <div class="panel">
        <div class="panel-head"><h2>Bulk Import</h2><span class="badge">${state.imports.length} loaded</span></div>
        <div class="panel-body stack">
          <div class="dropzone">
            <label>Upload CSV exported from Excel
              <input id="csvUpload" type="file" accept=".csv,text/csv"/>
            </label>
          </div>
          ${state.importedFields.length ? `
            <div class="panel">
              <div class="panel-body stack">
                <b>Mail-merge fields detected: ${state.importedFields.length}</b>
                <div class="row">
                  <button id="createFieldsFromCsv" class="primary">Create template fields from headers</button>
                  <button id="createModuleTable" ${hasImportedModules() ? "" : "disabled"}>Create repeated module table</button>
                </div>
                <div class="dropzone">${state.importedFields.slice(0, 18).map(f => `<span class="badge">{{${escapeHtml(f.key)}}}</span>`).join(" ")}${state.importedFields.length > 18 ? ` <span class="badge">+${state.importedFields.length - 18} more</span>` : ""}</div>
              </div>
            </div>
          ` : ""}
          <div class="grid-3">
            <label>Reference prefix<input id="numPrefix" value="${state.numberConfig.prefix}"/></label>
            <label>Programme code<input id="numProgramme" value="${state.numberConfig.programmeCode}"/></label>
            <label>Year code<input id="numYear" value="${state.numberConfig.yearCode}"/></label>
            <label>Start number<input id="numStart" type="number" value="${state.numberConfig.start}"/></label>
            <label>Padding<input id="numPad" type="number" value="${state.numberConfig.pad}"/></label>
            <label>Separator<input id="numSep" value="${state.numberConfig.separator}"/></label>
          </div>
          <table class="table">
            <thead><tr><th>Student</th><th>Registration</th><th>Programme</th><th>Validation</th></tr></thead>
            <tbody>${(state.imports.length ? state.imports : sampleStudents).map(s => `<tr><td>${escapeHtml(displayStudentName(s))}</td><td>${escapeHtml(displayStudentId(s))}</td><td>${escapeHtml(displayProgramme(s))}</td><td><span class="badge ${rowReady(s) ? "ok" : "bad"}">${rowReady(s) ? "Ready" : "Missing fields"}</span></td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Batch Controls</h2><span class="badge ${can("generate") ? "ok" : "bad"}">${can("generate") ? "allowed" : "blocked"}</span></div>
        <div class="panel-body stack">
          ${progressPanel()}
          <button id="runBulk2" class="success">Generate & Download ZIP</button>
          <button id="runBulkPair" class="success">Generate Certificate + Transcript ZIP</button>
          <div class="dropzone">Saved templates: Certificate ${state.savedTemplates.certificate ? "ready" : "not saved"} · Transcript ${state.savedTemplates.transcript ? "ready" : "not saved"}</div>
          <button id="combinedPdf">Create combined print PDF</button>
          <button id="exportResultSheet">Export result sheet CSV</button>
          <button id="bulkQr">Generate bulk QR verification entries</button>
          <div class="dropzone">Super Admin can run a batch at any time. Other users need the generate permission and completed approvals.</div>
        </div>
      </div>
    </div>
  `;
}

function studentsView() {
  const students = studentRows();
  return `
    <div class="stack">
      <div class="grid-3">
        ${masterCard("Campuses", ["Colombo Campus", "Kandy Campus", "Jaffna Campus", "Online Campus"])}
        ${masterCard("Awarding Bodies", ["Pioneer International College", "Global Awarding Council", "UK Skills Board"])}
        ${masterCard("Syllabus Versions", ["BBA valid 2024-2028", "MBA valid 2025-2030", "Diploma valid 2026-2029"])}
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Student Profiles</h2><div class="row tight"><span class="badge">${state.imports.length ? "Excel data active" : "manual data"}</span><button id="addStudent">Add / Edit Student</button></div></div>
        <div class="panel-body">
          ${state.imports.length ? `<div class="dropzone">Excel/CSV rows are active. Student fields, certificates, transcripts, marks, GPA and modules will be picked up automatically from the imported sheet. You only need to adjust template background, alignment and placement.</div>` : `<div class="dropzone">No Excel/CSV imported yet. Upload a sheet in Bulk Batch Process, or type student data manually here.</div>`}
          <table class="table">
            <thead><tr><th>Name</th><th>ID</th><th>Campus</th><th>Programme</th><th>Batch</th><th>Status</th></tr></thead>
            <tbody>${students.map((s, i) => `<tr data-student="${i}"><td>${escapeHtml(displayStudentName(s))}</td><td>${escapeHtml(displayStudentId(s))}</td><td>${escapeHtml(s.campus_name || s.teaching_institution || s.medium || "")}</td><td>${escapeHtml(displayProgramme(s))}</td><td>${escapeHtml(s.batch || s.academic_year || s.exam_period || "")}</td><td><span class="badge ${rowReady(s) ? "ok" : "bad"}">${rowReady(s) ? "ready" : "missing"}</span></td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
function masterCard(title, items) {
  return `<div class="panel"><div class="panel-head"><h2>${title}</h2><span class="badge">${items.length}</span></div><div class="panel-body stack">${items.map(i => `<div class="row"><span>${i}</span><button class="tight">Edit</button></div>`).join("")}</div></div>`;
}

function studentRows() {
  return state.imports.length ? state.imports : sampleStudents;
}

function displayStudentName(row = {}) {
  return row.student_name || row.printed_name || row.full_name || row.short_name || row.name || row.name_as_printed || "";
}

function displayStudentId(row = {}) {
  return row.registration_number || row.student_no || row.student_id || row.university_reference || row.certificate_ref || row.certificate_ref_no || row.hesa_reference || "";
}

function displayProgramme(row = {}) {
  return row.programme_name || row.programme_of_study || row.degree || row.exam_title || row.qualification_title || row.qualification_aim || row.course_name || "";
}

function transcriptView() {
  const rows = calculatedModules();
  const totalCredits = rows.reduce((a, m) => a + (Number(m.credits) || 0), 0);
  const weighted = weightedGpa(rows);
  return `
    <div class="split">
      <div class="panel">
        <div class="panel-head"><h2>Transcript Table</h2><button id="addTranscriptTable">Add Table To Designer</button></div>
        <div class="panel-body">
          <table class="table">
            <thead><tr><th>Module code</th><th>Module title</th><th>Credits</th><th>Marks</th><th>Grade</th><th>GPA</th><th>Result</th><th>Semester</th></tr></thead>
            <tbody>${rows.map(m => `<tr><td>${m.code}</td><td>${m.title}</td><td>${m.credits}</td><td>${m.marks}</td><td>${m.grade}</td><td>${Number(m.gpa).toFixed(2)}</td><td>${m.result}</td><td>${m.semester || m.ac_yr || ""}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Calculated Summary</h2><span class="badge ok">Syllabus matched</span></div>
        <div class="panel-body stack">
          ${metric("Total credits", totalCredits, "Compulsory + optional modules")}
          ${metric("Weighted GPA", weighted.toFixed(2), "Credit-weighted calculation")}
          ${metric("Final classification", classificationFromGpa(weighted), "Rules can be edited per programme")}
          <div class="dropzone">Enter marks in Excel/CSV or in the system. GPA, grade, pass/fail and classification calculate automatically from the mark rules.</div>
        </div>
      </div>
    </div>
  `;
}

function workflowView() {
  return `
    <div class="split">
      <div class="panel">
        <div class="panel-head"><h2>Approval Steps</h2><button id="addStep">Add Step</button></div>
        <div class="panel-body stack">
          ${state.workflow.map((s, i) => `
            <div class="row">
              <span><b>${i + 1}. ${s.name}</b><br><small>${s.role}</small></span>
              <span class="badge ${s.done ? "ok" : "warn"} tight">${s.done ? "complete" : "pending"}</span>
              <button data-approve="${i}" class="tight" ${s.done ? "disabled" : ""}>Approve</button>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Controls</h2><span class="badge bad">No hidden backdating</span></div>
        <div class="panel-body stack">
          <label>Historical correction reason<textarea id="correctionReason" placeholder="Required for issue date changes, duplicate copies, revocation or correction."></textarea></label>
          <button id="requestCorrection">Request authorised correction</button>
          <button id="lockFinal" class="primary">Lock Final Certificate</button>
          <div class="dropzone">Issued certificates retain the exact template version used at the time of issue.</div>
        </div>
      </div>
    </div>
  `;
}

function verificationView() {
  const query = location.hash.startsWith("#verify=") ? decodeURIComponent(location.hash.replace("#verify=", "")) : "";
  const found = state.issued.find(i => i.ref === query);
  return `
    <div class="split">
      <div class="panel">
        <div class="panel-head"><h2>Manual Verification Search</h2><span class="badge">Public safe data</span></div>
        <div class="panel-body stack">
          <label>Certificate reference number<input id="verifyInput" value="${escapeHtml(query)}" placeholder="PIC-BBA-2026-000001"/></label>
          <button id="verifyBtn" class="primary">Verify Certificate</button>
          ${query ? verificationResult(found, query) : `<div class="dropzone">QR scans land on this page with the reference number in the URL.</div>`}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Verification History</h2><span class="badge">${state.verifications.length}</span></div>
        <div class="panel-body audit">${state.verifications.map(v => `<div class="audit-item"><b>${v.ref}</b><span>${v.time} · ${v.status}</span></div>`).join("") || "No verification searches yet."}</div>
      </div>
    </div>
  `;
}
function verificationResult(found, ref) {
  if (!found) return `<div class="dropzone"><span class="badge bad">Not found</span><p>No valid public certificate record exists for ${escapeHtml(ref)}.</p></div>`;
  return `
    <div class="panel">
      <div class="panel-body stack">
        <span class="badge ${found.status === "valid" ? "ok" : "bad"}">${found.status}</span>
        <table class="table">
          <tr><th>Student</th><td>${escapeHtml(found.student.student_name)}</td></tr>
          <tr><th>Programme</th><td>${escapeHtml(found.student.programme_name)}</td></tr>
          <tr><th>Awarding body</th><td>${escapeHtml(found.student.award_body)}</td></tr>
          <tr><th>Award date</th><td>${escapeHtml(found.student.award_date)}</td></tr>
          <tr><th>Certificate number</th><td>${escapeHtml(found.ref)}</td></tr>
        </table>
      </div>
    </div>
  `;
}

function auditView() {
  return `
    <div class="split">
      <div class="panel">
        <div class="panel-head"><h2>Audit Log</h2><button id="exportAudit">Export CSV</button></div>
        <div class="panel-body audit">${auditItems(100)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Reports</h2><span class="badge">Excel / PDF ready</span></div>
        <div class="panel-body stack">
          ${["Student certificate report","Programme-wise award report","Campus-wise issued certificate report","Awarding body report","Verification report","Financial clearance report","Revoked certificate list","Duplicate issue history"].map(r => `<button data-report="${r}">${r}</button>`).join("")}
        </div>
      </div>
    </div>
  `;
}
function auditItems(limit) {
  return state.audit.slice(0, limit).map(a => `<div class="audit-item"><b>${escapeHtml(a.action)}</b><span>${escapeHtml(a.details)} · ${a.role} · ${a.time} · ${a.ip}</span></div>`).join("") || "No audit entries yet.";
}

function bindCommon() {
  document.querySelector("#sidebarToggle")?.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    audit("Sidebar layout changed", state.sidebarCollapsed ? "Sidebar minimized" : "Sidebar maximized");
    render();
  });
  document.querySelectorAll("[data-nav]").forEach(btn => btn.addEventListener("click", () => { state.view = btn.dataset.nav; render(); }));
  document.querySelector("#roleSelect")?.addEventListener("change", e => { state.role = e.target.value; audit("Authority level changed", `Active role set to ${state.role}`); render(); });
  document.querySelector("#logoutUser")?.addEventListener("click", logoutUser);
  document.querySelector("#quickIssue")?.addEventListener("click", issueCertificate);
  document.querySelector("#runBulk")?.addEventListener("click", runBulk);
}

function bindView() {
  document.onkeydown = state.view === "designer" ? handleDesignerKeyboard : null;
  if (state.view === "designer") bindDesigner();
  if (state.view === "bulk") bindBulk();
  if (state.view === "students") bindStudents();
  if (state.view === "transcript") document.querySelector("#addTranscriptTable")?.addEventListener("click", () => { addElement("table"); state.view = "designer"; render(); });
  if (state.view === "workflow") bindWorkflow();
  if (state.view === "verification") bindVerification();
  if (state.view === "audit") document.querySelector("#exportAudit")?.addEventListener("click", () => download("audit-log.csv", toCsv(state.audit), "text/csv"));
}

function bindDesigner() {
  document.querySelectorAll("[data-tab]").forEach(btn => btn.addEventListener("click", () => { state.activeToolTab = btn.dataset.tab; render(); }));
  document.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addElement(btn.dataset.add)));
  document.querySelector("#copyEl")?.addEventListener("click", () => { copySelected(); render(); });
  document.querySelector("#pasteEl")?.addEventListener("click", pasteElement);
  document.querySelector("#duplicateEl")?.addEventListener("click", duplicateSelected);
  document.querySelector("#addField")?.addEventListener("click", () => {
    const f = document.querySelector("#fieldSelect").value;
    const el = textEl(id(), `{{${f}}}`, 430, 350, 280, 36);
    el.field = f;
    state.template.elements.push(el);
    state.selectedElementId = el.id;
    audit("Dynamic field added", f);
    render();
  });
  document.querySelector("#autoCreateFields")?.addEventListener("click", () => {
    autoCreateFieldsFromHeaders();
    state.activeToolTab = "add";
    render();
  });
  document.querySelector("#autoCreateTranscript")?.addEventListener("click", () => {
    addMailMergeModuleTable();
    state.activeToolTab = "add";
    render();
  });
  document.querySelector("#addLabelValueBlock")?.addEventListener("click", () => {
    addTranscriptHeaderBlock();
    state.activeToolTab = "add";
    render();
  });
  document.querySelector("#addWordTranscriptPreset")?.addEventListener("click", () => {
    addWordTranscriptPreset();
    state.activeToolTab = "add";
    render();
  });
  document.querySelector("#addManualField")?.addEventListener("click", () => addElement("text"));
  document.querySelector("#orientation")?.addEventListener("change", e => { state.template.orientation = e.target.value; audit("Page orientation changed", e.target.value); render(); });
  document.querySelector("#templateType")?.addEventListener("change", e => { state.template.type = e.target.value; audit("Template type changed", e.target.value); render(); });
  document.querySelector("#templateName")?.addEventListener("change", e => { state.template.name = e.target.value.trim() || state.template.name; audit("Template name changed", state.template.name); render(); });
  document.querySelector("#snapToggle")?.addEventListener("change", e => { state.template.snap = e.target.checked; render(); });
  document.querySelector("#cloneTemplate")?.addEventListener("click", () => { state.template.version = bumpVersion(state.template.version); audit("Template cloned", `New version ${state.template.version}`); render(); });
  document.querySelector("#bgUpload")?.addEventListener("change", e => readImage(e, src => { state.template.background = src; audit("Background uploaded", "Template background image changed"); render(); }));
  document.querySelector("#fontUpload")?.addEventListener("change", uploadFont);
  document.querySelector("#imageUpload")?.addEventListener("change", e => readImage(e, src => {
    const el = { id: id(), type: "image", src, x: 120, y: 120, w: 180, h: 90, z: 15, locked: false, hidden: false };
    state.template.elements.push(el);
    state.selectedElementId = el.id;
    audit("Image layer uploaded", "Logo/signature/seal image added");
    render();
  }));
  document.querySelector("#page")?.addEventListener("pointerdown", pagePointerDown);
  bindProperties();
  document.querySelector("#saveTemplate")?.addEventListener("click", () => { state.template.status = "Active"; audit("Template version saved", `${state.template.name} ${state.template.version}`); render(); });
  document.querySelector("#saveToLibrary")?.addEventListener("click", () => saveTemplateToLibrary());
  document.querySelector("#openTemplateLibrary")?.addEventListener("click", openTemplateLibrary);
  document.querySelector("#saveCertificateTemplate")?.addEventListener("click", () => saveTemplateSlot("certificate"));
  document.querySelector("#saveTranscriptTemplate")?.addEventListener("click", () => saveTemplateSlot("transcript"));
  document.querySelector("#previewResult")?.addEventListener("click", previewMergedResult);
  document.querySelector("#printDoc")?.addEventListener("click", printDocument);
  document.querySelector("#exportPng")?.addEventListener("click", () => exportImage("png"));
  document.querySelector("#exportJpg")?.addEventListener("click", () => exportImage("jpg"));
  document.querySelector("#canvasZoom")?.addEventListener("change", e => {
    state.canvasZoom = Number(e.target.value);
    audit("Canvas zoom changed", `${Math.round(state.canvasZoom * 100)}%`);
    render();
  });
  document.querySelector("#toggleDesignerMax")?.addEventListener("click", () => {
    state.designerMaximized = !state.designerMaximized;
    audit("Designer layout changed", state.designerMaximized ? "Designer maximized" : "Designer panels restored");
    render();
  });
  document.querySelector("#toggleToolsPanel")?.addEventListener("click", () => {
    state.designerToolsCollapsed = !state.designerToolsCollapsed;
    audit("Designer tools panel changed", state.designerToolsCollapsed ? "Tools minimized" : "Tools restored");
    render();
  });
  document.querySelector("#togglePropertiesPanel")?.addEventListener("click", () => {
    state.designerPropertiesCollapsed = !state.designerPropertiesCollapsed;
    audit("Designer properties panel changed", state.designerPropertiesCollapsed ? "Properties minimized" : "Properties restored");
    render();
  });
  document.querySelector("#issueOne")?.addEventListener("click", issueCertificate);
}

function bindProperties() {
  const el = getSelected();
  if (!el) return;
  const set = (key, value) => { el[key] = value; audit("Element updated", `${el.id} ${key}`); render(); };
  ["X","Y","W","H","Z"].forEach(k => {
    document.querySelector(`#prop${k}`)?.addEventListener("change", e => set(k.toLowerCase(), Number(e.target.value)));
  });
  document.querySelector("#propLocked")?.addEventListener("change", e => set("locked", e.target.checked));
  document.querySelector("#propHidden")?.addEventListener("change", e => set("hidden", e.target.checked));
  document.querySelector("#bringForward")?.addEventListener("click", () => { el.z += 1; audit("Layer changed", `${el.id} forward`); render(); });
  document.querySelector("#sendBackward")?.addEventListener("click", () => { el.z -= 1; audit("Layer changed", `${el.id} backward`); render(); });
  document.querySelector("#deleteEl")?.addEventListener("click", deleteSelected);
  if (el.type === "text") {
    document.querySelector("#propText")?.addEventListener("change", e => { el.text = e.target.value; audit("Text changed", el.id); render(); });
    document.querySelector("#propField")?.addEventListener("change", e => { el.field = e.target.value; if (e.target.value) el.text = `{{${e.target.value}}}`; audit("Field binding changed", e.target.value || "manual"); render(); });
    document.querySelector("#fontFamily")?.addEventListener("change", e => { el.style.family = e.target.value; render(); });
    document.querySelector("#fontSize")?.addEventListener("change", e => { el.style.size = Number(e.target.value); render(); });
    document.querySelector("#fontColor")?.addEventListener("change", e => { el.style.color = e.target.value; render(); });
    document.querySelector("#fontAlign")?.addEventListener("change", e => { el.style.align = e.target.value; render(); });
    document.querySelector("#lineHeight")?.addEventListener("change", e => { el.style.lineHeight = Number(e.target.value); render(); });
    document.querySelector("#letterSpacing")?.addEventListener("change", e => { el.style.letterSpacing = Number(e.target.value); render(); });
    document.querySelector("#fontBold")?.addEventListener("change", e => { el.style.weight = e.target.checked ? "700" : "400"; render(); });
    document.querySelector("#fontItalic")?.addEventListener("change", e => { el.style.italic = e.target.checked; render(); });
    document.querySelector("#fontUnderline")?.addEventListener("change", e => { el.style.underline = e.target.checked; render(); });
    document.querySelector("#textTransform")?.addEventListener("change", e => { el.style.transform = e.target.value; render(); });
  }
  if (el.type === "table") {
    normalizeTableStyle(el);
    document.querySelector("#tableColumns")?.addEventListener("change", e => {
      el.columns = e.target.value.split(",").map(c => c.trim()).filter(Boolean);
      el.style.colWeights = inferTableWeights(el.columns);
      el.merges = [];
      render();
    });
    document.querySelectorAll(".tableColWeight").forEach(input => input.addEventListener("change", e => {
      el.style.colWeights[Number(e.target.dataset.col)] = Math.max(1, Number(e.target.value) || 1);
      audit("Table column scaled", `${el.columns[Number(e.target.dataset.col)]} width changed`);
      render();
    }));
    document.querySelector("#tableMode")?.addEventListener("change", e => { el.style.mode = e.target.value; render(); });
    document.querySelector("#tableSize")?.addEventListener("change", e => { el.style.size = Number(e.target.value); render(); });
    document.querySelector("#tableRowHeight")?.addEventListener("change", e => { el.style.rowHeight = Number(e.target.value); render(); });
    document.querySelector("#tableTextColor")?.addEventListener("change", e => { el.style.textColor = e.target.value; render(); });
    document.querySelector("#tableBorderColor")?.addEventListener("change", e => { el.style.borderColor = e.target.value; render(); });
    document.querySelector("#tableLines")?.addEventListener("change", e => { el.style.mode = e.target.checked ? "grid" : "no-lines"; render(); });
    document.querySelector("#mergeColumns")?.addEventListener("click", () => {
      const from = Number(document.querySelector("#mergeFrom").value);
      const span = Number(document.querySelector("#mergeSpan").value);
      el.merges = normalizedTableMerges({ ...el, merges: [...(el.merges || []), { from, span }] });
      audit("Table columns merged", `${span} column(s) from ${el.columns[from]}`);
      render();
    });
    document.querySelector("#resetMerges")?.addEventListener("click", () => {
      el.merges = [];
      audit("Table columns split", el.id);
      render();
    });
  }
}

function saveTemplateSlot(slot) {
  const copy = structuredClone(state.template);
  copy.type = slot === "certificate" ? "Certificate" : "Transcript";
  copy.status = "Active";
  copy.savedAt = new Date().toLocaleString();
  state.savedTemplates[slot] = copy;
  audit(`${copy.type} template saved`, `${copy.name} ${copy.version}`);
  alert(`${copy.type} template saved. Bulk ZIP can now generate this template per student.`);
  render();
}

function saveTemplateToLibrary(name = "") {
  state.templateLibrary ||= [];
  const copy = structuredClone(state.template);
  copy.libraryId = copy.libraryId || id();
  copy.name = name || copy.name || `${copy.type} Template`;
  copy.version = bumpVersion(copy.version || "1.0.0");
  copy.status = "Saved";
  copy.savedAt = new Date().toLocaleString();
  copy.savedBy = state.role;
  copy.elementCount = copy.elements.length;
  state.template = structuredClone(copy);
  const existing = state.templateLibrary.findIndex(template => template.libraryId === copy.libraryId);
  if (existing >= 0) state.templateLibrary[existing] = copy;
  else state.templateLibrary.unshift(copy);
  audit("Template saved to library", `${copy.name} ${copy.version}`);
  render();
}

function openTemplateLibrary() {
  state.templateLibrary ||= [];
  const list = state.templateLibrary;
  const body = `
    <div class="panel-body stack">
      <div class="row">
        <label>Save current design as
          <input id="librarySaveName" value="${escapeHtml(state.template.name || "")}"/>
        </label>
        <button id="librarySaveCurrent" class="primary">Save Current Template</button>
      </div>
      <div class="dropzone">This library is saved in this browser on your laptop. Use Load to continue editing, Clone to make a new copy, or Set Active for certificate/transcript bulk generation.</div>
      <table class="table template-library-table">
        <thead><tr><th>Name</th><th>Type</th><th>Version</th><th>Saved</th><th>Actions</th></tr></thead>
        <tbody>
          ${list.length ? list.map(template => `
            <tr>
              <td><b>${escapeHtml(template.name)}</b><br><span>${escapeHtml(template.elementCount || template.elements?.length || 0)} objects · ${escapeHtml(template.orientation || "landscape")}</span></td>
              <td>${escapeHtml(template.type)}</td>
              <td>${escapeHtml(template.version)}</td>
              <td>${escapeHtml(template.savedAt || "")}</td>
              <td class="library-actions">
                <button data-load-template="${template.libraryId}">Load</button>
                <button data-clone-template="${template.libraryId}">Clone</button>
                <button data-active-cert="${template.libraryId}">Set Certificate</button>
                <button data-active-transcript="${template.libraryId}">Set Transcript</button>
                <button class="danger" data-delete-template="${template.libraryId}">Delete</button>
              </td>
            </tr>
          `).join("") : `<tr><td colspan="5">No saved templates yet. Save your current design first.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
  openModal("Template Library", body);
  document.querySelector("#librarySaveCurrent")?.addEventListener("click", () => {
    const name = document.querySelector("#librarySaveName").value.trim() || state.template.name;
    closeModal();
    saveTemplateToLibrary(name);
    openTemplateLibrary();
  });
  document.querySelectorAll("[data-load-template]").forEach(button => button.addEventListener("click", () => loadLibraryTemplate(button.dataset.loadTemplate)));
  document.querySelectorAll("[data-clone-template]").forEach(button => button.addEventListener("click", () => cloneLibraryTemplate(button.dataset.cloneTemplate)));
  document.querySelectorAll("[data-active-cert]").forEach(button => button.addEventListener("click", () => activateLibraryTemplate(button.dataset.activeCert, "certificate")));
  document.querySelectorAll("[data-active-transcript]").forEach(button => button.addEventListener("click", () => activateLibraryTemplate(button.dataset.activeTranscript, "transcript")));
  document.querySelectorAll("[data-delete-template]").forEach(button => button.addEventListener("click", () => deleteLibraryTemplate(button.dataset.deleteTemplate)));
}

function libraryTemplate(idValue) {
  return (state.templateLibrary || []).find(template => template.libraryId === idValue);
}

function loadLibraryTemplate(idValue) {
  const template = libraryTemplate(idValue);
  if (!template) return;
  state.template = structuredClone(template);
  state.selectedElementId = null;
  state.selectedElementIds = [];
  audit("Template loaded from library", `${template.name} ${template.version}`);
  closeModal();
  state.view = "designer";
  render();
}

function cloneLibraryTemplate(idValue) {
  const template = libraryTemplate(idValue);
  if (!template) return;
  const copy = structuredClone(template);
  copy.libraryId = id();
  copy.id = `TPL-${Date.now()}`;
  copy.name = `${copy.name} Copy`;
  copy.version = "1.0.0";
  copy.savedAt = new Date().toLocaleString();
  copy.savedBy = state.role;
  state.templateLibrary.unshift(copy);
  audit("Template cloned in library", copy.name);
  closeModal();
  openTemplateLibrary();
}

function activateLibraryTemplate(idValue, slot) {
  const template = libraryTemplate(idValue);
  if (!template) return;
  const copy = structuredClone(template);
  copy.type = slot === "certificate" ? "Certificate" : "Transcript";
  copy.status = "Active";
  copy.activeAt = new Date().toLocaleString();
  state.savedTemplates[slot] = copy;
  audit(`${copy.type} template activated`, `${copy.name} ${copy.version}`);
  closeModal();
  openTemplateLibrary();
}

function deleteLibraryTemplate(idValue) {
  const template = libraryTemplate(idValue);
  if (!template) return;
  if (!confirm(`Delete saved template "${template.name}"?`)) return;
  state.templateLibrary = state.templateLibrary.filter(item => item.libraryId !== idValue);
  audit("Template deleted from library", template.name);
  closeModal();
  openTemplateLibrary();
}

function pagePointerDown(ev) {
  const target = ev.target.closest(".doc-element");
  if (!target) {
    startMarqueeSelection(ev);
    return;
  }
  const el = state.template.elements.find(e => e.id === target.dataset.id);
  state.selectedElementId = el.id;
  state.selectedElementIds = ev.shiftKey ? [...new Set([...state.selectedElementIds, el.id])] : [el.id];
  if (el.locked) { render(); return; }
  if (ev.target.dataset.colHandle !== undefined) {
    startTableColumnResize(ev, el, Number(ev.target.dataset.colHandle));
    return;
  }
  if (ev.target.dataset.rowHandle !== undefined) {
    startTableRowResize(ev, el);
    return;
  }
  const isResize = ev.target.classList.contains("resize");
  const movingEls = selectedElements().filter(item => !item.locked);
  const start = {
    x: ev.clientX,
    y: ev.clientY,
    ex: el.x,
    ey: el.y,
    ew: el.w,
    eh: el.h,
    positions: movingEls.map(item => ({ id: item.id, x: item.x, y: item.y }))
  };
  target.setPointerCapture(ev.pointerId);
  const move = e => {
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (isResize) {
      el.w = Math.max(20, start.ew + dx);
      el.h = Math.max(20, start.eh + dy);
    } else {
      start.positions.forEach(pos => {
        const item = state.template.elements.find(entry => entry.id === pos.id);
        if (!item) return;
        item.x = pos.x + dx;
        item.y = pos.y + dy;
        if (state.template.snap) {
          item.x = Math.round(item.x / 10) * 10;
          item.y = Math.round(item.y / 10) * 10;
        }
        const dom = document.querySelector(`.doc-element[data-id="${item.id}"]`);
        if (dom) {
          dom.style.left = `${item.x}px`;
          dom.style.top = `${item.y}px`;
        }
      });
    }
    target.style.left = `${el.x}px`;
    target.style.top = `${el.y}px`;
    target.style.width = `${el.w}px`;
    target.style.height = `${el.h}px`;
  };
  const up = () => {
    audit(isResize ? "Element resized" : "Element moved", el.id);
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    render();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
}

function startTableColumnResize(ev, el, index) {
  ev.stopPropagation();
  normalizeTableStyle(el);
  const startX = ev.clientX;
  const startWeights = [...el.style.colWeights];
  const weightPerPixel = startWeights.reduce((sum, value) => sum + Number(value || 0), 0) / Math.max(el.w, 1);
  const move = e => {
    const delta = (e.clientX - startX) * weightPerPixel;
    el.style.colWeights[index] = Math.max(1, startWeights[index] + delta);
    el.style.colWeights[index + 1] = Math.max(1, startWeights[index + 1] - delta);
    renderTableLive(el);
  };
  const up = () => {
    audit("Table column dragged", `${el.columns[index]} / ${el.columns[index + 1]}`);
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    render();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
}

function startTableRowResize(ev, el) {
  ev.stopPropagation();
  normalizeTableStyle(el);
  const startY = ev.clientY;
  const startRowHeight = Number(el.style.rowHeight) || 30;
  const move = e => {
    const next = Math.max(14, startRowHeight + (e.clientY - startY) / state.canvasZoom);
    el.style.rowHeight = Math.round(next);
    renderTableLive(el);
  };
  const up = () => {
    audit("Table rows scaled", `${el.style.rowHeight}px row height`);
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    render();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
}

function renderTableLive(el) {
  const shell = document.querySelector(`.doc-element[data-id="${el.id}"]`);
  const table = shell?.querySelector(".table-el");
  if (!table) return;
  table.innerHTML = tableRows(el);
  shell.querySelectorAll(".table-col-handle").forEach(handle => handle.remove());
  shell.querySelector(".table-row-handle")?.remove();
  shell.insertAdjacentHTML("beforeend", tableResizeHandles(el));
}

function startMarqueeSelection(ev) {
  const page = document.querySelector("#page");
  const rect = page.getBoundingClientRect();
  const start = {
    x: (ev.clientX - rect.left) / state.canvasZoom,
    y: (ev.clientY - rect.top) / state.canvasZoom
  };
  const box = document.createElement("div");
  box.className = "selection-box";
  page.appendChild(box);
  const updateBox = current => {
    const x = Math.min(start.x, current.x);
    const y = Math.min(start.y, current.y);
    const w = Math.abs(current.x - start.x);
    const h = Math.abs(current.y - start.y);
    Object.assign(box.style, {
      left: `${x}px`,
      top: `${y}px`,
      width: `${w}px`,
      height: `${h}px`
    });
    return { x, y, w, h };
  };
  const move = e => updateBox({
    x: (e.clientX - rect.left) / state.canvasZoom,
    y: (e.clientY - rect.top) / state.canvasZoom
  });
  const up = e => {
    const selection = updateBox({
      x: (e.clientX - rect.left) / state.canvasZoom,
      y: (e.clientY - rect.top) / state.canvasZoom
    });
    box.remove();
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    state.selectedElementIds = state.template.elements
      .filter(el => !el.hidden && intersects(selection, { x: el.x, y: el.y, w: el.w, h: el.h }))
      .map(el => el.id);
    state.selectedElementId = state.selectedElementIds[0] || null;
    audit("Marquee selection", `${state.selectedElementIds.length} elements selected`);
    render();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
  updateBox(start);
}

function intersects(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function addElement(type) {
  let el;
  if (type === "text") el = textEl(id(), "Editable text", 120, 120, 260, 40);
  if (type === "table") el = tableEl(id(), 120, 220, 760, 230);
  if (type === "line") el = lineEl(id(), 120, 160, 260, 1);
  if (type === "rect") el = shapeEl(id(), 120, 180, 260, 120);
  if (type === "seal") el = shapeEl(id(), 450, 560, 120, 120, { shape: "seal", color: "#b7791f" });
  if (type === "qr") el = qrEl(id(), 500, 620, 96, 96);
  if (type === "image") { document.querySelector("#imageUpload")?.click(); return; }
  state.template.elements.push(el);
  state.selectedElementId = el.id;
  audit("Element added", type);
  render();
}

function autoCreateFieldsFromHeaders() {
  if (!state.importedFields.length) return alert("Upload a CSV first so the system can read the headers.");
  const existingTags = new Set(
    state.template.elements
      .filter(el => el.type === "text")
      .map(el => el.field || String(el.text).replace(/[{}]/g, ""))
  );
  const fields = state.importedFields
    .filter(field => !isRepeatedModuleField(field.key))
    .filter(field => !existingTags.has(field.key));
  let x = 80;
  let y = 90;
  fields.forEach((field, index) => {
    const el = textEl(id(), `{{${field.key}}}`, x, y, 250, 26, { size: 15, family: "Arial, Helvetica, sans-serif" });
    el.field = field.key;
    state.template.elements.push(el);
    state.selectedElementIds.push(el.id);
    y += 34;
    if ((index + 1) % 16 === 0) {
      x += 280;
      y = 90;
    }
  });
  audit("Mail-merge fields created", `${fields.length} CSV header tags added to template`);
  if (fields[0]) state.selectedElementId = state.selectedElementIds[0];
}

function addMailMergeModuleTable() {
  const table = tableEl(id(), 80, 420, 900, 250);
  table.source = "mailmerge_modules";
  table.columns = ["Ac Yr", "Module", "Title", "Level", "Mark", "Credit"];
  table.style.size = 12;
  table.style.mode = "tabbed";
  table.style.borderColor = "transparent";
  table.style.textColor = "#111111";
  table.style.rowHeight = 22;
  table.style.colWeights = [1.2, 1.6, 4.2, 1, 1, 1];
  state.template.elements.push(table);
  state.selectedElementId = table.id;
  state.selectedElementIds = [table.id];
  audit("Mail-merge module table created", "Repeated module fields converted to transcript table");
}

function addWordTranscriptPreset() {
  const added = [
    ...addTranscriptHeaderBlock(false),
    addTabbedModuleTable(false),
    ...addTranscriptSummaryBlock(false)
  ];
  state.selectedElementIds = added.map(el => el.id);
  state.selectedElementId = state.selectedElementIds[0] || null;
  audit("Word-style transcript tags added", `${added.length} movable tag objects placed`);
}

function addTranscriptHeaderBlock(renderAfter = true) {
  const rows = [
    [{ label: "Student Name", field: resolveField(["student_name", "full_name", "printed_name", "short_name"]), x: 80, y: 90, lw: 130, vw: 420 }],
    [
      { label: "Date of Birth", field: resolveField(["date_of_birth", "dob"]), x: 80, y: 150, lw: 110, vw: 120 },
      { label: "University Reference", field: resolveField(["university_reference", "registration_number", "student_no", "student_id"]), x: 330, y: 150, lw: 165, vw: 150 },
      { label: "HESA Reference", field: resolveField(["hesa_reference"]), x: 650, y: 150, lw: 135, vw: 180 }
    ],
    [{ label: "Programme of Study", field: resolveField(["programme_of_study", "programme_name", "course_name", "degree"]), x: 80, y: 186, lw: 185, vw: 430 }],
    [{ label: "Qualification Aim", field: resolveField(["qualification_aim", "qualification_title", "degree", "exam_title"]), x: 80, y: 224, lw: 160, vw: 500 }],
    [{ label: "Awarding Institution", field: resolveField(["awarding_institution", "award_body"]), x: 80, y: 262, lw: 190, vw: 430 }],
    [{ label: "Teaching Institution", field: resolveField(["teaching_institution", "campus_name"]), x: 80, y: 300, lw: 190, vw: 430 }],
    [{ label: "Language(s) of Instruction", field: resolveField(["languages_of_instruction", "language_of_instruction", "medium"]), x: 80, y: 338, lw: 235, vw: 250 }],
    [{ label: "Language(s) of Assessment", field: resolveField(["languages_of_assessment", "language_of_assessment", "medium"]), x: 80, y: 376, lw: 245, vw: 250 }]
  ];
  const added = [];
  rows.flat().forEach(item => added.push(...addLabelValuePair(item)));
  state.selectedElementIds = added.map(el => el.id);
  state.selectedElementId = state.selectedElementIds[0] || null;
  audit("Label/value transcript tags added", `${added.length} movable text objects placed`);
  if (renderAfter) render();
  return added;
}

function addTranscriptSummaryBlock(renderAfter = true) {
  const items = [
    { label: "Total Credits", field: resolveField(["total_credits", "credits"]), x: 80, y: 570, lw: 170, vw: 110 },
    { label: "Total Exempt/Transferred Credits", field: resolveField(["exempt_transferred_credits", "transferred_credits"]), x: 390, y: 570, lw: 300, vw: 120 },
    { label: "Award Mark", field: resolveField(["award_mark", "grade", "mark"]), x: 760, y: 570, lw: 140, vw: 100 },
    { label: "Qualification Awarded", field: resolveField(["qualification_awarded", "degree", "qualification_title"]), x: 80, y: 612, lw: 210, vw: 450 },
    { label: "Degree Classification", field: resolveField(["degree_classification", "classification", "result_status"]), x: 80, y: 648, lw: 200, vw: 260 },
    { label: "Date of Award", field: resolveField(["date_of_award", "award_date", "result_date"]), x: 80, y: 684, lw: 160, vw: 180 }
  ];
  const added = items.flatMap(addLabelValuePair);
  state.selectedElementIds = added.map(el => el.id);
  state.selectedElementId = state.selectedElementIds[0] || null;
  audit("Transcript summary tags added", `${added.length} movable text objects placed`);
  if (renderAfter) render();
  return added;
}

function addTabbedModuleTable(renderAfter = true) {
  const table = tableEl(id(), 80, 430, 920, 130);
  table.source = "mailmerge_modules";
  table.columns = ["Ac Yr", "Module", "Title", "Level", "Mark", "Credit"];
  table.style = {
    ...table.style,
    mode: "tabbed",
    textColor: "#111111",
    borderColor: "transparent",
    size: 13,
    rowHeight: 22,
    colWeights: [1.2, 1.7, 5.1, 1.1, 1, 1.1]
  };
  state.template.elements.push(table);
  state.selectedElementIds = [table.id];
  state.selectedElementId = table.id;
  audit("Tabbed module list added", "Module repeat fields placed like a Word mail merge table");
  if (renderAfter) render();
  return table;
}

function addLabelValuePair(item) {
  const label = textEl(id(), item.label, item.x, item.y, item.lw, 24, {
    size: 13,
    weight: "700",
    family: "Arial, Helvetica, sans-serif",
    color: "#111111"
  });
  const value = textEl(id(), item.field ? `{{${item.field}}}` : "", item.x + item.lw, item.y, item.vw, 24, {
    size: 13,
    weight: "700",
    family: "Arial, Helvetica, sans-serif",
    color: "#111111"
  });
  value.field = item.field || "";
  state.template.elements.push(label, value);
  return [label, value];
}

function resolveField(candidates) {
  const available = allFields();
  return candidates.find(candidate => available.includes(candidate)) || candidates[0] || "";
}

function isRepeatedModuleField(key) {
  return /^(ac_yr|module|title|level|mark|credit|grade|gpa|result)\d+$/.test(key);
}

function deleteSelected() {
  const selected = selectedElements();
  if (!selected.length) return;
  const locked = selected.filter(el => el.locked);
  if (locked.length) return alert("Some selected elements are locked. Unlock them before deleting.");
  const selectedIds = new Set(selected.map(el => el.id));
  state.template.elements = state.template.elements.filter(e => !selectedIds.has(e.id));
  state.selectedElementId = null;
  state.selectedElementIds = [];
  audit("Elements deleted", `${selected.length} selected element(s)`);
  render();
}

function copySelected() {
  const selected = selectedElements();
  if (!selected.length) return;
  state.elementClipboard = structuredClone(selected);
  audit("Elements copied", `${selected.length} selected element(s)`);
}

function pasteElement() {
  if (!state.elementClipboard) return;
  const items = Array.isArray(state.elementClipboard) ? state.elementClipboard : [state.elementClipboard];
  const pasted = items.map(item => {
    const copy = structuredClone(item);
    copy.id = id();
    copy.x += 28;
    copy.y += 28;
    copy.z += 1;
    copy.locked = false;
    return copy;
  });
  state.template.elements.push(...pasted);
  state.selectedElementIds = pasted.map(item => item.id);
  state.selectedElementId = state.selectedElementIds[0] || null;
  audit("Elements pasted", `${pasted.length} element(s)`);
  render();
}

function duplicateSelected() {
  const selected = selectedElements();
  if (!selected.length) return;
  const copies = selected.map(el => {
    const copy = structuredClone(el);
    copy.id = id();
    copy.x += 24;
    copy.y += 24;
    copy.z += 1;
    return copy;
  });
  state.template.elements.push(...copies);
  state.selectedElementIds = copies.map(item => item.id);
  state.selectedElementId = state.selectedElementIds[0] || null;
  audit("Elements duplicated", `${copies.length} selected element(s)`);
  render();
}

function handleDesignerKeyboard(ev) {
  const editing = ev.target.closest?.("input, textarea, select");
  if (editing) return;
  const key = ev.key.toLowerCase();
  const meta = ev.metaKey || ev.ctrlKey;
  const selected = selectedElements();
  const el = selected[0];

  if (meta && key === "c") {
    ev.preventDefault();
    copySelected();
    return;
  }
  if (meta && key === "v") {
    ev.preventDefault();
    pasteElement();
    return;
  }
  if (meta && key === "d") {
    ev.preventDefault();
    duplicateSelected();
    return;
  }
  if ((ev.key === "Delete" || ev.key === "Backspace") && el) {
    ev.preventDefault();
    deleteSelected();
    return;
  }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(ev.key) && selected.length) {
    ev.preventDefault();
    const step = ev.shiftKey ? 10 : 1;
    selected.filter(item => !item.locked).forEach(item => {
      if (ev.key === "ArrowUp") item.y -= step;
      if (ev.key === "ArrowDown") item.y += step;
      if (ev.key === "ArrowLeft") item.x -= step;
      if (ev.key === "ArrowRight") item.x += step;
    });
    audit("Elements moved with keyboard", `${selected.length} selected ${ev.key}`);
    render();
  }
}

function bindBulk() {
  ["numPrefix","numProgramme","numYear","numStart","numPad","numSep"].forEach(idName => {
    document.querySelector(`#${idName}`)?.addEventListener("change", e => {
      const key = ({ numPrefix: "prefix", numProgramme: "programmeCode", numYear: "yearCode", numStart: "start", numPad: "pad", numSep: "separator" })[idName];
      state.numberConfig[key] = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    });
  });
  document.querySelector("#csvUpload")?.addEventListener("change", e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = parseCsv(reader.result);
      state.imports = parsed.rows;
      state.importedFields = parsed.fields;
      if (state.imports[0]) state.selectedStudent = state.imports[0];
      audit("CSV imported", `${state.imports.length} rows and ${state.importedFields.length} fields detected`);
      render();
    };
    reader.readAsText(file);
  });
  document.querySelector("#createFieldsFromCsv")?.addEventListener("click", () => {
    autoCreateFieldsFromHeaders();
    state.view = "designer";
    state.activeToolTab = "add";
    render();
  });
  document.querySelector("#createModuleTable")?.addEventListener("click", () => {
    addMailMergeModuleTable();
    state.view = "designer";
    state.activeToolTab = "add";
    render();
  });
  document.querySelector("#runBulk2")?.addEventListener("click", runBulk);
  document.querySelector("#runBulkPair")?.addEventListener("click", runBulkCertificateTranscript);
  document.querySelector("#combinedPdf")?.addEventListener("click", printDocument);
  document.querySelector("#exportResultSheet")?.addEventListener("click", () => download("student-result-sheet.csv", toCsv(state.imports.length ? state.imports : sampleStudents), "text/csv"));
  document.querySelector("#bulkQr")?.addEventListener("click", () => { (state.imports.length ? state.imports : sampleStudents).forEach(s => state.verifications.unshift({ ref: refNumber(), status: "QR generated", time: new Date().toLocaleString() })); audit("Bulk QR generated", "Verification URLs prepared"); render(); });
}

function bindStudents() {
  document.querySelectorAll("[data-student]").forEach(row => row.addEventListener("click", () => {
    state.selectedStudent = studentRows()[Number(row.dataset.student)];
    audit("Student selected", state.selectedStudent.student_name || state.selectedStudent.id || "imported row");
    render();
  }));
  document.querySelector("#addStudent")?.addEventListener("click", () => openModal("Add Student", studentForm()));
}

function bindWorkflow() {
  document.querySelectorAll("[data-approve]").forEach(btn => btn.addEventListener("click", () => {
    const step = state.workflow[Number(btn.dataset.approve)];
    if (state.role !== "Super Admin" && state.role !== step.role) return alert(`This step requires ${step.role} or Super Admin.`);
    step.done = true;
    audit("Workflow approved", step.name);
    render();
  }));
  document.querySelector("#requestCorrection")?.addEventListener("click", () => {
    const reason = document.querySelector("#correctionReason").value.trim();
    if (!reason) return alert("A correction/backdating reason is required.");
    audit("Correction requested", reason);
    render();
  });
  document.querySelector("#lockFinal")?.addEventListener("click", () => { state.template.status = "Locked"; audit("Final certificate locked", state.template.version); render(); });
}

function bindVerification() {
  document.querySelector("#verifyBtn")?.addEventListener("click", () => {
    const ref = document.querySelector("#verifyInput").value.trim();
    const found = state.issued.find(i => i.ref === ref);
    state.verifications.unshift({ ref, status: found ? found.status : "not found", time: new Date().toLocaleString() });
    audit("Verification searched", `${ref} ${found ? "found" : "not found"}`);
    location.hash = `verify=${encodeURIComponent(ref)}`;
    render();
  });
}

async function issueCertificate() {
  if (!can("generate")) return alert("Your current authority level cannot generate certificates.");
  setProgress("Issuing", 10, "Checking authority and selected student");
  await wait(180);
  const ref = refNumber();
  if (state.issued.some(i => i.ref === ref)) return alert("Duplicate certificate reference prevented.");
  setProgress("Issuing", 35, `Generated unique reference ${ref}`);
  await wait(180);
  const record = {
    ref,
    student: { ...state.selectedStudent, certificate_ref: ref },
    templateId: state.template.id,
    templateVersion: state.template.version,
    status: "valid",
    date: new Date().toLocaleDateString()
  };
  setProgress("Issuing", 60, "Writing issue record and locking template version");
  await wait(180);
  state.issued.unshift(record);
  state.verifications.unshift({ ref, status: "valid", time: new Date().toLocaleString() });
  audit("Certificate generated", `${ref} for ${state.selectedStudent.student_name}`);
  state.selectedStudent.certificate_ref = ref;
  setProgress("Issuing", 82, "Rendering downloadable certificate image");
  await wait(180);
  await exportImage("png", ref);
  setProgress("Complete", 100, `Certificate ${ref} generated and verification activated`);
  render();
}

async function runBulk() {
  if (state.role !== "Super Admin" && !can("generate")) return alert("Bulk generation requires Super Admin or generate permission.");
  const rows = state.imports.length ? state.imports : sampleStudents;
  setProgress("Bulk running", 5, `Preparing ${rows.length} records for validation`);
  await wait(250);
  let issued = 0;
  const zipFiles = [];
  const previousStudent = state.selectedStudent;
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    setProgress("Bulk running", Math.round(10 + (index / rows.length) * 70), `Validating row ${index + 1} of ${rows.length}`);
    await wait(40);
    if (!rowReady(row)) {
      setProgress("Bulk running", Math.round(20 + (index / rows.length) * 70), `Skipped row ${index + 1}: missing required fields`);
      await wait(40);
      continue;
    }
    const student = normalizeStudent(row);
    const ref = refNumber();
    if (state.issued.some(i => i.ref === ref)) {
      setProgress("Bulk running", Math.round(20 + (index / rows.length) * 70), `Skipped duplicate reference ${ref}`);
      await wait(40);
      continue;
    }
    setProgress("Bulk running", Math.round(20 + (index / rows.length) * 70), `Rendering ${ref} for ${displayStudentName(student)}`);
    state.selectedStudent = student;
    const blob = await renderDocumentBlob("png", ref, student);
    zipFiles.push({
      name: `${safeFileName(ref)}-${safeFileName(displayStudentName(student) || `student-${index + 1}`)}.png`,
      blob
    });
    state.issued.unshift({ ref, student: { ...student, certificate_ref: ref }, templateId: state.template.id, templateVersion: state.template.version, status: "valid", date: new Date().toLocaleDateString() });
    issued += 1;
  }
  setProgress("Bulk running", 90, `Creating ZIP file with ${zipFiles.length} documents`);
  if (zipFiles.length) {
    const zipBlob = await createZip(zipFiles);
    download("bulk-academic-documents.zip", zipBlob, "application/zip");
  }
  state.selectedStudent = previousStudent;
  audit("Bulk batch generated", `${issued} records issued by ${state.role}`);
  setProgress("Complete", 100, `${issued} documents generated and downloaded as ZIP`);
  render();
}

async function runBulkCertificateTranscript() {
  if (state.role !== "Super Admin" && !can("generate")) return alert("Bulk generation requires Super Admin or generate permission.");
  if (!state.savedTemplates.certificate || !state.savedTemplates.transcript) {
    return alert("Please save both templates first: Template Designer → Save Certificate and Save Transcript.");
  }
  const rows = state.imports.length ? state.imports : sampleStudents;
  const zipFiles = [];
  const previousStudent = state.selectedStudent;
  setProgress("Bulk running", 5, `Preparing certificate + transcript for ${rows.length} students`);
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    if (!rowReady(row)) continue;
    const student = normalizeStudent(row);
    const ref = refNumber();
    state.selectedStudent = student;
    setProgress("Bulk running", Math.round(8 + (index / rows.length) * 82), `Rendering certificate and transcript for ${displayStudentName(student) || index + 1}`);
    const certBlob = await renderDocumentBlob("png", ref, student, state.savedTemplates.certificate);
    const transcriptBlob = await renderDocumentBlob("png", ref, student, state.savedTemplates.transcript);
    const folder = `${safeFileName(displayStudentName(student) || `student-${index + 1}`)}-${safeFileName(ref)}`;
    zipFiles.push({ name: `${folder}/certificate-${safeFileName(ref)}.png`, blob: certBlob });
    zipFiles.push({ name: `${folder}/transcript-${safeFileName(ref)}.png`, blob: transcriptBlob });
    state.issued.unshift({ ref, student: { ...student, certificate_ref: ref }, templateId: "certificate+transcript", templateVersion: `${state.savedTemplates.certificate.version}/${state.savedTemplates.transcript.version}`, status: "valid", date: new Date().toLocaleDateString() });
  }
  setProgress("Bulk running", 92, `Creating ZIP with ${zipFiles.length} files`);
  if (zipFiles.length) download("bulk-certificate-transcript.zip", await createZip(zipFiles), "application/zip");
  state.selectedStudent = previousStudent;
  audit("Certificate transcript batch generated", `${zipFiles.length} files packaged`);
  setProgress("Complete", 100, `Certificate + transcript ZIP downloaded for ${Math.floor(zipFiles.length / 2)} students`);
  render();
}

function rowReady(row) {
  return Boolean(
    displayStudentName(row) ||
    displayStudentId(row) ||
    row.student_name ||
    row.printed_name ||
    row.full_name ||
    row.short_name ||
    row.university_reference ||
    row.registration_number ||
    row.student_no
  );
}

function normalizeStudent(row = {}) {
  const student = { ...row };
  applyHeaderAliases(student);
  student.student_name ||= displayStudentName(student);
  student.printed_name ||= displayStudentName(student);
  student.registration_number ||= displayStudentId(student);
  student.programme_name ||= displayProgramme(student);
  student.qualification_title ||= student.degree || student.exam_title || student.qualification_title || "";
  student.award_date ||= student.result_date || student.effective_date || student.convocation_date || "";
  student.credits ||= student.total_credits || "";
  student.gpa ||= student.gpa || "";
  student.classification ||= student.result_status || student.classification || "";
  return student;
}

function printDocument() {
  const modal = document.querySelector("#modal");
  modal.className = "modal open";
  modal.innerHTML = `<div class="modal-card"><div class="panel-head"><h2>Print-ready A4 Preview</h2><button id="closeModal">Close</button></div><div class="panel-body">${pageHtml(state.selectedStudent.certificate_ref)}</div><div class="panel-body"><button id="browserPrint" class="primary">Open Browser Print / Save as PDF</button></div></div>`;
  document.querySelector("#closeModal").addEventListener("click", closeModal);
  document.querySelector("#browserPrint").addEventListener("click", () => window.print());
  audit("Print/PDF preview opened", state.template.id);
}

function previewMergedResult(index = null) {
  const rows = studentRows();
  const selectedIndex = Math.max(0, rows.indexOf(state.selectedStudent));
  const activeIndex = index ?? selectedIndex;
  const student = rows[activeIndex] || rows[0] || {};
  state.selectedStudent = student;
  const modal = document.querySelector("#modal");
  modal.className = "modal open";
  modal.innerHTML = `
    <div class="modal-card preview-card">
      <div class="panel-head">
        <h2>Preview Merged Result</h2>
        <button id="closeModal">Close</button>
      </div>
      <div class="panel-body row preview-controls">
        <button id="previewPrev">‹ Previous</button>
        <label>Excel row
          <select id="previewRow">
            ${rows.map((row, i) => `<option value="${i}" ${i === activeIndex ? "selected" : ""}>${i + 1}. ${escapeHtml(displayStudentName(row) || displayStudentId(row) || "Imported row")}</option>`).join("")}
          </select>
        </label>
        <button id="previewNext">Next ›</button>
        <button id="previewExport" class="primary">Download This Preview PNG</button>
      </div>
      <div class="panel-body preview-stage">${pageHtml(student.certificate_ref || student.certificate_ref_no || "PREVIEW")}</div>
    </div>
  `;
  document.querySelector("#closeModal").addEventListener("click", closeModal);
  document.querySelector("#previewRow").addEventListener("change", e => previewMergedResult(Number(e.target.value)));
  document.querySelector("#previewPrev").addEventListener("click", () => previewMergedResult(Math.max(0, activeIndex - 1)));
  document.querySelector("#previewNext").addEventListener("click", () => previewMergedResult(Math.min(rows.length - 1, activeIndex + 1)));
  document.querySelector("#previewExport").addEventListener("click", () => exportImage("png", student.certificate_ref || student.certificate_ref_no || `row-${activeIndex + 1}`));
  audit("Merged result preview opened", displayStudentName(student) || displayStudentId(student) || `row ${activeIndex + 1}`);
}

async function exportImage(type = "png", ref = "") {
  const blob = await renderDocumentBlob(type, ref, state.selectedStudent);
  const ext = type === "jpg" ? "jpg" : "png";
  download(`academic-document-${ref || "draft"}.${ext}`, blob, blob.type);
  audit("Document exported", `${ext.toUpperCase()} ${ref || "draft"}`);
}

async function renderDocumentBlob(type = "png", ref = "", student = state.selectedStudent, template = state.template) {
  const size = A4[template.orientation];
  const canvas = document.createElement("canvas");
  canvas.width = size.width;
  canvas.height = size.height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (template.background) {
    await drawImageCover(ctx, template.background, 0, 0, canvas.width, canvas.height);
  }
  const elements = template.elements.filter(e => !e.hidden).slice().sort((a, b) => a.z - b.z);
  for (const el of elements) {
    await drawElement(ctx, el, ref, student);
  }
  const mime = type === "jpg" ? "image/jpeg" : "image/png";
  return new Promise(resolve => canvas.toBlob(resolve, mime, 0.95));
}

function loadCanvasImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function drawImageCover(ctx, src, x, y, w, h) {
  const image = await loadCanvasImage(src);
  const scale = Math.max(w / image.width, h / image.height);
  const sw = w / scale;
  const sh = h / scale;
  const sx = (image.width - sw) / 2;
  const sy = (image.height - sh) / 2;
  ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
}

async function drawElement(ctx, el, ref, student = state.selectedStudent) {
  ctx.save();
  if (el.type === "text") {
    const s = el.style;
    ctx.fillStyle = s.color;
    ctx.font = `${s.italic ? "italic " : ""}${s.weight} ${s.size}px ${s.family}`;
    ctx.textAlign = s.align === "center" ? "center" : s.align === "right" ? "right" : "left";
    ctx.textBaseline = "top";
    const text = transformText(merge(el.text, student, ref), s.transform);
    const x = s.align === "center" ? el.x + el.w / 2 : s.align === "right" ? el.x + el.w : el.x;
    wrapText(ctx, text, x, el.y, el.w, s.size * s.lineHeight, s.align);
    if (s.underline) {
      ctx.strokeStyle = s.color;
      ctx.beginPath(); ctx.moveTo(el.x, el.y + el.h - 6); ctx.lineTo(el.x + el.w, el.y + el.h - 6); ctx.stroke();
    }
  }
  if (el.type === "line") {
    ctx.strokeStyle = el.style.color;
    ctx.lineWidth = el.style.thickness;
    ctx.beginPath(); ctx.moveTo(el.x, el.y); ctx.lineTo(el.x + el.w, el.y); ctx.stroke();
  }
  if (el.type === "shape") {
    ctx.strokeStyle = el.style.color;
    ctx.lineWidth = el.style.shape === "seal" ? 5 : el.style.thickness;
    if (el.style.fill && el.style.fill !== "transparent") { ctx.fillStyle = el.style.fill; ctx.fillRect(el.x, el.y, el.w, el.h); }
    if (el.style.shape === "seal") {
      ctx.beginPath(); ctx.arc(el.x + el.w / 2, el.y + el.h / 2, Math.min(el.w, el.h) / 2 - 5, 0, Math.PI * 2); ctx.stroke();
      ctx.font = "700 18px Georgia"; ctx.fillStyle = el.style.color; ctx.textAlign = "center"; ctx.fillText("SEAL", el.x + el.w / 2, el.y + el.h / 2 - 8);
    } else ctx.strokeRect(el.x, el.y, el.w, el.h);
  }
  if (el.type === "qr") {
    ctx.fillStyle = "#fff"; ctx.fillRect(el.x, el.y, el.w, el.h);
    ctx.fillStyle = "#111";
    const cell = el.w / 7;
    for (let i = 0; i < 49; i++) if (i % 2 === 0 || i % 5 === 0) ctx.fillRect(el.x + (i % 7) * cell, el.y + Math.floor(i / 7) * cell, cell - 2, cell - 2);
  }
  if (el.type === "table") {
    normalizeTableStyle(el);
    ctx.strokeStyle = el.style.borderColor;
    ctx.fillStyle = el.style.textColor;
    ctx.font = `${el.style.size}px Arial`;
    const rowH = Number(el.style.rowHeight) || 30;
    const widths = tableColWidths(el);
    const colWidths = widths.length ? widths.map(width => el.w * width / 100) : el.columns.map(() => el.w / el.columns.length);
    const sourceRows = el.source === "mailmerge_modules" ? moduleRowsFromRecord(student) : modules;
    [el.columns, ...sourceRows.map(m => el.columns.map(c => tableValue(c, m)))].forEach((row, r) => {
      tableDrawCells(el, row, colWidths, r).forEach(cell => {
        const cellY = el.y + r * rowH;
        if (el.style.mode === "grid") ctx.strokeRect(cell.x, cellY, cell.w, rowH);
        drawTableCellText(ctx, String(cell.value), cell.x, cellY, cell.w, rowH, el.style, r === 0);
      });
    });
  }
  if (el.type === "image" && el.src) {
    const image = await loadCanvasImage(el.src);
    ctx.drawImage(image, el.x, el.y, el.w, el.h);
  }
  ctx.restore();
}

function tableDrawCells(el, values, colWidths, rowIndex) {
  const merges = normalizedTableMerges(el);
  const starts = colWidths.reduce((out, width, index) => {
    out.push((out[index] || el.x) + width);
    return out;
  }, [el.x]);
  const cells = [];
  for (let i = 0; i < values.length; i += 1) {
    const merge = merges.find(item => item.from === i);
    const covered = merges.some(item => i > item.from && i < item.from + item.span);
    if (covered) continue;
    const span = merge?.span || 1;
    const w = colWidths.slice(i, i + span).reduce((sum, width) => sum + width, 0);
    const value = values.slice(i, i + span).filter(Boolean).join(rowIndex === 0 ? " / " : " ");
    cells.push({ x: starts[i], w, value });
  }
  return cells;
}

function drawTableCellText(ctx, text, x, y, w, h, style, isHeader = false) {
  const padX = style.mode === "tabbed" ? 0 : 5;
  const padY = style.mode === "tabbed" ? 2 : 8;
  const maxWidth = Math.max(8, w - padX - 6);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  ctx.font = `${isHeader ? "700 " : ""}${style.size}px Arial`;
  ctx.fillStyle = style.textColor;
  const words = String(text).split(/\s+/);
  let line = "";
  let lineY = y + padY;
  const lineHeight = Math.max(Number(style.size) * 1.15, 14);
  words.forEach(word => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x + padX, lineY, maxWidth);
      line = word;
      lineY += lineHeight;
    } else {
      line = test;
    }
  });
  if (line && lineY < y + h) ctx.fillText(line, x + padX, lineY, maxWidth);
  ctx.restore();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, align) {
  const lines = String(text).split("\n");
  lines.forEach(line => {
    const words = line.split(" ");
    let current = "";
    words.forEach(word => {
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        ctx.fillText(current, x, y);
        y += lineHeight;
        current = word;
      } else current = test;
    });
    ctx.fillText(current, x, y);
    y += lineHeight;
  });
}

function parseCsv(text) {
  const lines = String(text).trim().split(/\r?\n/).filter(Boolean);
  const originalHeaders = splitCsvLine(lines.shift()).map(h => h.replace(/^\uFEFF/, "").trim());
  const fields = originalHeaders.map((label, index) => ({
    label,
    key: uniqueFieldKey(normalizeFieldKey(label), index, originalHeaders)
  }));
  const rows = lines.map(line => {
    const values = splitCsvLine(line);
    const row = {};
    fields.forEach((field, i) => {
      row[field.key] = values[i] || "";
    });
    applyHeaderAliases(row);
    return row;
  }).filter(row => Object.values(row).some(value => String(value).trim()));
  return { rows, fields };
}

function normalizeFieldKey(label) {
  const cleaned = String(label || "")
    .replace(/^\uFEFF/, "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\(s\)/g, "s")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return cleaned || "field";
}

function uniqueFieldKey(base, index, headers) {
  const previous = headers.slice(0, index).map(normalizeFieldKey);
  const count = previous.filter(key => key === base).length;
  return count ? `${base}_${count + 1}` : base;
}

function applyHeaderAliases(row) {
  const aliases = {
    student_name: ["student_name", "full_name", "short_name", "name_as_printed"],
    printed_name: ["printed_name", "student_name", "full_name", "short_name"],
    date_of_birth: ["date_of_birth", "dob"],
    registration_number: ["registration_number", "student_no", "university_reference", "student_id", "certificate_ref_no"],
    programme_name: ["programme_name", "programme_of_study", "course_name", "degree", "exam_title"],
    qualification_title: ["qualification_title", "qualification_aim", "certificate_degree", "degree", "exam_title"],
    award_body: ["award_body", "awarding_institution"],
    campus_name: ["campus_name", "teaching_institution"],
    classification: ["classification", "degree_classification", "certificate_classification"],
    specialisation: ["specialisation", "certificate_subject", "qualification_awarded"],
    credits: ["credits", "total_credits"],
    award_date: ["award_date", "date_of_award", "result_date", "effective_date", "convocation_date"],
    grade: ["grade", "award_mark"],
    certificate_ref: ["certificate_ref", "certificate_ref_no", "university_reference", "student_no"]
  };
  Object.entries(aliases).forEach(([target, sources]) => {
    if (row[target]) return;
    const source = sources.find(key => row[key]);
    if (source) row[target] = row[source];
  });
}
function splitCsvLine(line) {
  const out = [];
  let cur = "", quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') quoted = !quoted;
    else if (ch === "," && !quoted) { out.push(cur); cur = ""; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(v => v.trim());
}

function studentForm() {
  const fields = state.importedFields.length ? state.importedFields.map(field => field.key) : fieldCatalog;
  const selectedIndex = Math.max(0, studentRows().indexOf(state.selectedStudent));
  return `
    <div class="panel-body stack">
      ${state.imports.length ? `
        <label>Pick Excel row
          <select id="importRowSelect">
            ${state.imports.map((row, i) => `<option value="${i}" ${i === selectedIndex ? "selected" : ""}>${i + 1}. ${escapeHtml(displayStudentName(row) || displayStudentId(row) || displayProgramme(row) || "Imported row")}</option>`).join("")}
          </select>
        </label>
        <div class="dropzone">These fields came from the uploaded Excel/CSV headers. You may edit any value manually, but by default the system picks it up from Excel.</div>
      ` : ""}
      <div class="grid-3">${fields.map(f => `<label>${escapeHtml(fieldLabel(f))}<input data-new="${f}" value="${escapeHtml((state.selectedStudent || {})[f] || "")}"/></label>`).join("")}</div>
      <button id="saveStudent" class="primary">${state.imports.length ? "Save Edited Excel Row" : "Save Student"}</button>
    </div>
  `;
}
function openModal(title, body) {
  const modal = document.querySelector("#modal");
  modal.className = "modal open";
  modal.innerHTML = `<div class="modal-card"><div class="panel-head"><h2>${title}</h2><button id="closeModal">Close</button></div>${body}</div>`;
  document.querySelector("#closeModal").addEventListener("click", closeModal);
  document.querySelector("#importRowSelect")?.addEventListener("change", e => {
    const row = state.imports[Number(e.target.value)];
    if (!row) return;
    state.selectedStudent = row;
    document.querySelectorAll("[data-new]").forEach(input => input.value = row[input.dataset.new] || "");
  });
  document.querySelector("#saveStudent")?.addEventListener("click", () => {
    const s = { ...(state.selectedStudent || {}), id: (state.selectedStudent || {}).id || `STU-${1000 + sampleStudents.length + 1}`, status: (state.selectedStudent || {}).status || "active" };
    document.querySelectorAll("[data-new]").forEach(input => s[input.dataset.new] = input.value);
    applyHeaderAliases(s);
    if (state.imports.length && state.imports.includes(state.selectedStudent)) {
      Object.assign(state.selectedStudent, s);
      audit("Imported student row edited", s.student_name || s.id);
    } else {
      sampleStudents.push(s);
      state.selectedStudent = s;
      audit("Student created", s.student_name || s.id);
    }
    closeModal();
    render();
  });
}
function closeModal() { document.querySelector("#modal").className = "modal"; document.querySelector("#modal").innerHTML = ""; }

function getSelected() { return state.template.elements.find(e => e.id === state.selectedElementId); }
function selectedElements() {
  const ids = state.selectedElementIds.length ? state.selectedElementIds : (state.selectedElementId ? [state.selectedElementId] : []);
  return state.template.elements.filter(e => ids.includes(e.id));
}
function isSelected(idValue) {
  return state.selectedElementIds.includes(idValue) || state.selectedElementId === idValue;
}
function id() { return `el_${Math.random().toString(36).slice(2, 9)}`; }
function bumpVersion(v) { const p = v.split(".").map(Number); p[2] += 1; return p.join("."); }
function readImage(e, cb) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => cb(reader.result);
  reader.readAsDataURL(file);
}

function uploadFont(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const family = file.name.replace(/\.[^.]+$/, "").replace(/[^a-z0-9_-]/gi, "-");
  const reader = new FileReader();
  reader.onload = async () => {
    const src = reader.result;
    try {
      const face = new FontFace(family, `url(${src})`);
      await face.load();
      document.fonts.add(face);
      state.customFonts = state.customFonts.filter(font => font.family !== family);
      state.customFonts.push({ name: file.name.replace(/\.[^.]+$/, ""), family, src });
      audit("Font uploaded", file.name);
      render();
    } catch {
      alert("This font could not be loaded. Please try a .ttf, .otf, .woff, or .woff2 font file.");
    }
  };
  reader.readAsDataURL(file);
}

function registerCustomFonts() {
  state.customFonts.forEach(font => {
    try {
      const face = new FontFace(font.family, `url(${font.src})`);
      face.load().then(loaded => document.fonts.add(loaded));
    } catch {
      // Ignore unavailable browser font support.
    }
  });
}

function transformText(text, transform) {
  if (transform === "uppercase") return text.toUpperCase();
  if (transform === "lowercase") return text.toLowerCase();
  if (transform === "capitalize") return text.replace(/\b\w/g, c => c.toUpperCase());
  return text;
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
function toCsv(rows) {
  const data = rows.length ? rows : [];
  const keys = [...new Set(data.flatMap(r => Object.keys(r)))];
  return [keys.join(","), ...data.map(r => keys.map(k => `"${String(r[k] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
}
function download(filename, content, mime, dataUrl = false) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = dataUrl ? content : URL.createObjectURL(content instanceof Blob ? content : new Blob([content], { type: mime }));
  a.click();
  setTimeout(() => { if (!dataUrl) URL.revokeObjectURL(a.href); }, 500);
}

async function createZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  for (const file of files) {
    const data = new Uint8Array(await file.blob.arrayBuffer());
    const nameBytes = encoder.encode(file.name);
    const crc = crc32(data);
    const local = concatBytes([
      u32(0x04034b50), u16(20), u16(0), u16(0), u16(0), u16(0),
      u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0),
      nameBytes, data
    ]);
    localParts.push(local);
    centralParts.push(concatBytes([
      u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
      u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0),
      u16(0), u16(0), u16(0), u32(0), u32(offset), nameBytes
    ]));
    offset += local.length;
  }
  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = concatBytes([
    u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length),
    u32(centralSize), u32(offset), u16(0)
  ]);
  return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
}

function u16(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function u32(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value >>> 0, true);
  return bytes;
}

function concatBytes(parts) {
  const length = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(length);
  let offset = 0;
  parts.forEach(part => {
    out.set(part, offset);
    offset += part.length;
  });
  return out;
}

function crc32(data) {
  let crc = -1;
  for (let i = 0; i < data.length; i += 1) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ data[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function safeFileName(value) {
  return String(value || "document").replace(/[^a-z0-9._-]+/gi, "_").replace(/^_+|_+$/g, "").slice(0, 80) || "document";
}

function persist() {
  const data = {
    role: state.role,
    sidebarCollapsed: state.sidebarCollapsed,
    designerMaximized: state.designerMaximized,
    designerToolsCollapsed: state.designerToolsCollapsed,
    designerPropertiesCollapsed: state.designerPropertiesCollapsed,
    canvasZoom: state.canvasZoom,
    customFonts: state.customFonts,
    importedFields: state.importedFields,
    issued: state.issued,
    verifications: state.verifications,
    audit: state.audit,
    imports: state.imports,
    progress: state.progress,
    numberConfig: state.numberConfig,
    template: state.template,
    savedTemplates: state.savedTemplates,
    templateLibrary: state.templateLibrary,
    workflow: state.workflow
  };
  localStorage.setItem("academicIssuerState", JSON.stringify(data));
}

function restore() {
  try {
    const raw = localStorage.getItem("academicIssuerState");
    if (!raw) return;
    Object.assign(state, JSON.parse(raw));
    state.selectedStudent = sampleStudents[0];
    state.customFonts ||= [];
    state.templateLibrary ||= [];
    state.savedTemplates ||= { certificate: null, transcript: null };
    registerCustomFonts();
  } catch {
    localStorage.removeItem("academicIssuerState");
  }
}

restore();
audit("System started", "Advanced certificate and transcript issuer loaded");
render();
initAuth();
