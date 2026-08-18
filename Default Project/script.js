/* =========================================================
   BENEFACTOR FOUNDATION — portfolio interactions
   ========================================================= */

/* ---------- Talent data (6 sponsored talents) ---------- */
const TALENTS = [
  {
    id: "t1",
    name: "Adaeze Okon",
    age: 17,
    category: "arts",
    catLabel: { en: "Arts", sw: "Sanaa" },
    emoji: "\uD83C\uDFA8",
    specialism: { en: "Painting", sw: "Uchoraji" },
    skill: { en: "Visual Arts", sw: "Sanaa za Kuona" },
    story: {
      en: "A self-taught painter from a riverside community whose portraits are already winning local praise. Needs studio materials and a city exhibition slot.",
      sw: "Mchoraji wa kujifunza mwenyewe kutoka jamii ya pwani ambaye picha zake tayari zinasifiwa mijini. Anahitaji nyenzo za studio na nafasi ya maonyesho jijini.",
    },
    raised: 340,
    goal: 1200,
    gradient: "linear-gradient(160deg,#ff7a59,#7a3bff)",
  },
  {
    id: "t2",
    name: "Musa Kalu",
    age: 16,
    category: "sports",
    catLabel: { en: "Sports", sw: "Michezo" },
    emoji: "\u26BD",
    specialism: { en: "Football (Right Wing)", sw: "Soka (Wing wa Kulia)" },
    skill: { en: "Football", sw: "Soka" },
    story: {
      en: "A lightning-fast winger scouted at a sandlot tournament. Needs proper boots, two years of structured coaching and a trial placement.",
      sw: "Wing wa kasi kubwa aliyegunduliwa kwenye mashindano ya uwanja wa mchanga. Anahitaji boti sahihi, miaka miwili ya mafunzo madhubuti na nafasi ya majaribio.",
    },
    raised: 680,
    goal: 2000,
    gradient: "linear-gradient(160deg,#f5a623,#37c871)",
  },
  {
    id: "t3",
    name: "Chioma Eze",
    age: 19,
    category: "tech",
    catLabel: { en: "Technology", sw: "Teknolojia" },
    emoji: "\uD83D\uDCBB",
    specialism: { en: "Web Development", sw: "Utengenezaji wa Tovuti" },
    skill: { en: "Coding", sw: "Programu" },
    story: {
      en: "Builds websites with a phone and a borrowed laptop. Needs a capable device and a 6-month full-stack bootcamp to launch a dev career.",
      sw: "Anatengeneza tovuti kwa simu na laptop aliyokopa. Anahitaji kifaa bora na mafunzo kamili ya miezi sita kuanza kazi ya programu.",
    },
    raised: 920,
    goal: 1500,
    gradient: "linear-gradient(160deg,#38b6ff,#7a3bff)",
  },
  {
    id: "t4",
    name: "Fatima Sani",
    age: 21,
    category: "business",
    catLabel: { en: "Entrepreneurship", sw: "Ujasiriamali" },
    emoji: "\uD83D\uDCC8",
    specialism: { en: "Fashion & Tailoring", sw: "Ushonaji na Mitindo" },
    skill: { en: "Small Business", sw: "Biashara Ndogo" },
    story: {
      en: "Runs a two-machine tailoring shop from her family veranda. Needs seed funding for equipment and a business mentorship round.",
      sw: "Anaendesha duka la ushonaji la mashine mbili kwenye veranda ya familia. Anahitaji fedha za awali za vifaa na ushauri wa biashara.",
    },
    raised: 1150,
    goal: 1800,
    gradient: "linear-gradient(160deg,#f5a623,#ff5c5c)",
  },
  {
    id: "t5",
    name: "Tunde Adeyemi",
    age: 18,
    category: "works",
    catLabel: { en: "Physical Works", sw: "Kazi za Mikono" },
    emoji: "\uD83D\uDD27",
    specialism: { en: "Welding & Fabrication", sw: "Ufumaji wa Chuma" },
    skill: { en: "Vocational Trade", sw: "Ufundi" },
    story: {
      en: "A talented welder who builds metal furniture from scrap. Needs an apprenticeship placement and a professional toolset to go full-time.",
      sw: "Ufumaji wa chuma mwenye kipaji anayetengeneza samani za chuma kutoka chakavu. Anahitaji nafasi ya uanagenzi na zana za kitaalamu ili kufanya kazi ya kudumu.",
    },
    raised: 210,
    goal: 1000,
    gradient: "linear-gradient(160deg,#9aa7bd,#38b6ff)",
  },
  {
    id: "t6",
    name: "Ngozi Bello",
    age: 20,
    category: "arts",
    catLabel: { en: "Arts", sw: "Sanaa" },
    emoji: "\uD83C\uDFB6",
    specialism: { en: "Afro-fusion Music", sw: "Muziki wa Afro-fusion" },
    skill: { en: "Music", sw: "Muziki" },
    story: {
      en: "Writes and sings her own songs, recording on a borrowed phone. Needs studio time, an EP production budget and stage exposure.",
      sw: "Anaandika na kuimba nyimbo zake, akirekodi kwenye simu aliyokopa. Anahitaji muda wa studio, bajeti ya utayarishaji wa EP na majukwaa ya maonyesho.",
    },
    raised: 540,
    goal: 1600,
    gradient: "linear-gradient(160deg,#37c871,#38b6ff)",
  },
];

/* ---------- Journey timeline data ---------- */
const JOURNEY = [
  {
    year: "2021",
    title: { en: "The first spark", sw: "Mwanga wa kwanza" },
    teaser: { en: "Where it began", sw: "Palipoanza" },
    text: {
      en: "Founded by three friends in a single classroom. The first eight talents were enrolled in football, art and tailoring.",
      sw: "Ilianzishwa na marafiki watatu katika darasa moja. Vipaji nane vya kwanza vilisajiliwa katika soka, sanaa na ushonaji.",
    },
    stats: [["stat.talents", "8"], ["stat.communities", "1"], ["stat.mentors", "4"]],
  },
  {
    year: "2022",
    title: { en: "Five pillars formalised", sw: "Nguzo tano zilizoidhinishwa" },
    teaser: { en: "Categories launch", sw: "Kategoria zaanzishwa" },
    text: {
      en: "Sports, Arts, Technology, Entrepreneurship and Physical Works become the foundation's official program pillars.",
      sw: "Michezo, Sanaa, Teknolojia, Ujasiriamali na Kazi za Mikono vikawa nguzo rasmi za programu za msingi.",
    },
    stats: [["stat.talents", "45"], ["stat.categories", "5"], ["stat.partners", "3"]],
  },
  {
    year: "2023",
    title: { en: "Sponsorship goes interactive", sw: "Udhamini unakuwa shirikishi" },
    teaser: { en: "Benefactors join", sw: "Wafadhili wajiunga" },
    text: {
      en: "We launch interactive sponsorship, letting benefactors track each talent's journey and fund their goals directly.",
      sw: "Tunazindua udhamini shirikishi, tukiruhusu wafadhili kufuatilia safari ya kila kipaji na kufadhili malengo yao moja kwa moja.",
    },
    stats: [["stat.sponsored", "120"], ["stat.benefactors", "60"], ["stat.raised", "$48k"]],
  },
  {
    year: "2024",
    title: { en: "National recognition", sw: "Utambuzi wa kitaifa" },
    teaser: { en: "Champions emerge", sw: "Mabingwa wachipukia" },
    text: {
      en: "Eighteen of our talents win national titles in sports and the arts, putting grassroots ability on the map.",
      sw: "Vipaji kumi na nane viliibuka mabingwa wa kitaifa katika michezo na sanaa, vikilifahamisha ulimwengu uwezo wa chinichini.",
    },
    stats: [["stat.champions", "18"], ["stat.showcases", "24"], ["stat.scholarships", "12"]],
  },
  {
    year: "2025",
    title: { en: "32 communities reached", sw: "Jamii 32 zimefikiwa" },
    teaser: { en: "Scaling up", sw: "Kukua" },
    text: {
      en: "Field scouts and volunteer mentors now operate across 32 communities with a full free-services suite for every talent.",
      sw: "Watafuta vipaji na washauri wa kujitolea sasa wanafanya kazi katika jamii 32 zikiwa na huduma kamili za bure kwa kila kipaji.",
    },
    stats: [["stat.communities", "32"], ["stat.volunteers", "140"], ["stat.talents", "240"]],
  },
  {
    year: "2026",
    title: { en: "Building the alumni network", sw: "Kujenga mtandao wa wahitimu" },
    teaser: { en: "Today", sw: "Leo" },
    text: {
      en: "Graduates now mentor new cohorts. We are building sustainable, talent-led communities for the coming generation.",
      sw: "Wahitimu sasa wanawashauri vikundi vipya. Tunajenga jamii endelevu zinazoongozwa na vipaji kwa kizazi kijacho.",
    },
    stats: [["stat.alumni", "90"], ["stat.employed", "60%"], ["stat.roadmap", "2030"]],
  },
];

/* ---------- Milestone tracker data ---------- */
const MILESTONES = [
  {
    year: "2021",
    title: { en: "Foundation founded", sw: "Msingi ulianzishwa" },
    text: {
      en: "Three friends, one classroom, eight pioneering talents. We began with football, art and tailoring.",
      sw: "Marafiki watatu, darasa moja, vipaji vinane vya waanzilishi. Tulianza na soka, sanaa na ushonaji.",
    },
    metrics: [["stat.talents", "8"], ["stat.communities", "1"]],
  },
  {
    year: "2022",
    title: { en: "Five pillars launched", sw: "Nguzo tano zilizozinduliwa" },
    text: {
      en: "Sports, Arts, Technology, Entrepreneurship and Physical Works formalised as official programs.",
      sw: "Michezo, Sanaa, Teknolojia, Ujasiriamali na Kazi za Mikono zikathibitishwa kuwa programu rasmi.",
    },
    metrics: [["stat.categories", "5"], ["stat.talents", "45"]],
  },
  {
    year: "2023",
    title: { en: "Interactive sponsorship goes live", sw: "Udhamini shirikishi waanza" },
    text: {
      en: "Benefactors can now sponsor a specific talent and watch their progress in real time.",
      sw: "Wafadhili sasa wanaweza kufadhili kipaji mahususi na kuangalia maendeleo yake moja kwa moja.",
    },
    metrics: [["stat.sponsored", "120"], ["stat.raised", "$48k"]],
  },
  {
    year: "2024",
    title: { en: "National champions", sw: "Mabingwa wa kitaifa" },
    text: {
      en: "Eighteen grassroots talents won national titles in sports and the arts.",
      sw: "Vipaji kumi na nane vya chinichini viliibuka mabingwa wa kitaifa katika michezo na sanaa.",
    },
    metrics: [["stat.champions", "18"], ["stat.scholarships", "12"]],
  },
  {
    year: "2025",
    title: { en: "32 communities served", sw: "Jamii 32 zimehudumiwa" },
    text: {
      en: "Scouts and volunteers operate across 32 communities with a full free-services suite.",
      sw: "Watafuta vipaji na wajitolea wanafanya kazi katika jamii 32 zikiwa na huduma kamili za bure.",
    },
    metrics: [["stat.communities", "32"], ["stat.volunteers", "140"]],
  },
  {
    year: "2026",
    title: { en: "Alumni network era", sw: "Enzi ya mtandao wa wahitimu" },
    text: {
      en: "Graduates mentor new cohorts, building self-sustaining talent communities.",
      sw: "Wahitimu wanawashauri vikundi vipya, wakijenga jamii endelevu za vipaji.",
    },
    metrics: [["stat.alumni", "90"], ["stat.employed", "60%"]],
  },
];

/* ---------- Recent benefactor feed ---------- */
const RECENT_STORAGE = "benefactor_recent";
const SEED_SPONSORS = [
  { name: "Ada Lovelace", talent: "t3", amount: 150 },
  { name: "Alan Turing", talent: "t2", amount: 75 },
  { name: "Margaret Hamilton", talent: "t1", amount: 100 },
];

/* ---------- Sponsorship state (persisted locally) ---------- */
const STORAGE_KEY = "benefactor_sponsors";

function loadSponsors() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveSponsor(talentId, amount) {
  const all = loadSponsors();
  all[talentId] = (all[talentId] || 0) + amount;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function raisedFor(talent) {
  const donated = loadSponsors()[talent.id] || 0;
  return talent.raised + donated;
}

/* ---------- Render talent cards ---------- */
function formatMoney(n) {
  return "$" + n.toLocaleString("en-US");
}

function renderTalents() {
  const grid = document.getElementById("talentGrid");
  const select = document.getElementById("spTalent");

  grid.innerHTML = TALENTS.map((item) => {
    const raised = raisedFor(item);
    const pct = Math.min(100, Math.round((raised / item.goal) * 100));
    const level = pct >= 100 ? t("talents.funded") : t("talents.seeking");
    return `
      <article class="talent-card reveal" data-cat="${item.category}">
        <div class="talent-photo" style="background:${item.gradient}">
          <span class="talent-cat">${L(item.catLabel)}</span>
          <span class="talent-spec" title="${L(item.specialism)}">${item.emoji}</span>
          <span style="font-size:3.4rem">${item.emoji}</span>
        </div>
        <div class="talent-body">
          <h3>${item.name}</h3>
          <div class="talent-skill">${L(item.specialism)} &middot; ${item.age} ${t("talents.yrs")}</div>
          <p>${L(item.story)}</p>
          <div class="progress-wrap">
            <div class="progress-label">
              <span>${t("talents.raised")} <strong>${formatMoney(raised)}</strong> ${t("talents.of")} ${formatMoney(item.goal)}</span>
              <span>${level}</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
          <div class="talent-actions">
            <button class="btn btn-donate" data-sponsor="${item.id}">${t("talents.sponsorBtn")} ${item.name.split(" ")[0]}</button>
            <button class="btn btn-details" data-details="${item.id}">${t("talents.details")}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  select.innerHTML =
    '<option value="" disabled selected>' + t("sponsor.select") + "</option>" +
    TALENTS.map((x) => `<option value="${x.id}">${x.name} — ${L(x.specialism)} (${L(x.catLabel)})</option>`).join("");

  grid.querySelectorAll(".reveal").forEach((el) => observe(el));
  bindCardActions();
}

function bindCardActions() {
  document.querySelectorAll("[data-sponsor]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.sponsor;
      const x = TALENTS.find((item) => item.id === id);
      document.getElementById("spTalent").value = id;
      document.getElementById("sponsor").scrollIntoView({ behavior: "smooth", block: "center" });
      setNote("sponsor", t("sponsor.selected") + x.name + t("sponsor.selected2"), "ok");
    });
  });

  document.querySelectorAll("[data-details]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const x = TALENTS.find((item) => item.id === btn.dataset.details);
      const detail =
        t("talents.ageOf") + x.age + ". " + L(x.story) +
        " " + t("talents.needs") + formatMoney(x.goal - raisedFor(x)) + t("talents.needsGoal");
      openModal(x.name, L(x.catLabel) + t("sponsor.dash") + L(x.specialism), detail);
    });
  });
}

/* ---------- Talent filtering ---------- */
let activeFilter = "all";

function applyTalentVisibility() {
  const q = document.getElementById("talentSearch").value.trim().toLowerCase();
  document.querySelectorAll(".talent-card").forEach((card) => {
    const catMatch = activeFilter === "all" || card.dataset.cat === activeFilter;
    const textMatch = !q || card.textContent.toLowerCase().includes(q);
    card.style.display = catMatch && textMatch ? "" : "none";
  });
}

function bindFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      applyTalentVisibility();
    });
  });
}

/* ---------- Talent search ---------- */
function bindSearch() {
  document.getElementById("talentSearch").addEventListener("input", applyTalentVisibility);
}

/* ---------- Amount selection ---------- */
let selectedAmount = 50;

function bindAmounts() {
  const buttons = document.querySelectorAll(".amount-btn");
  const custom = document.getElementById("spCustom");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAmount = parseInt(btn.dataset.amount, 10);
      custom.value = "";
    });
  });

  custom.addEventListener("input", () => {
    buttons.forEach((b) => b.classList.remove("selected"));
    const v = parseInt(custom.value, 10);
    selectedAmount = v > 0 ? v : 0;
  });
}

/* ---------- Sponsor form submit ---------- */
function bindSponsorForm() {
  const form = document.getElementById("sponsorForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("spName").value.trim();
    const email = document.getElementById("spEmail").value.trim();
    const talentId = document.getElementById("spTalent").value;
    const talent = TALENTS.find((t) => t.id === talentId);

    if (!name || !email || !talentId || selectedAmount <= 0) {
      setNote("sponsor", t("sponsor.err.empty"), "err");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setNote("sponsor", t("sponsor.err.email"), "err");
      return;
    }

    saveSponsor(talentId, selectedAmount);
    addRecentSponsor(name, talentId, selectedAmount);
    form.reset();
    selectedAmount = 50;
    document.querySelectorAll(".amount-btn").forEach((b) => {
      b.classList.remove("selected");
      if (b.dataset.amount === "50") b.classList.add("selected");
    });

    renderTalents();
    applyTalentVisibility();
    renderRecent();
    setNote("sponsor", t("sponsor.note.ok"), "ok");
    showToast(interpolate(t("sponsor.toast"), { name: name, talent: talent.name }));
    openModal(name, talent.name, formatMoney(selectedAmount) + " " + t("recent.pledged") + " " + talent.name + ". " + email);
  });
}

/* ---------- Contact form ---------- */
function bindContactForm() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const interest = document.getElementById("cInterest").value;
    const msg = document.getElementById("cMsg").value.trim();

    if (!name || !email || !interest || !msg) {
      setNote("contact", t("contact.err.empty"), "err");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setNote("contact", t("sponsor.err.email"), "err");
      return;
    }
    setNote("contact", interpolate(t("contact.note.ok"), { name: name }), "ok");
    showToast(t("contact.toast"));
    form.reset();
  });
}

function setNote(targetId, msg, type) {
  const el = document.getElementById(targetId + "Note");
  el.textContent = msg;
  el.className = "form-note " + type;
}

/* ---------- Modal ---------- */
function openModal(name, talent, detail) {
  document.getElementById("modalTitle").innerHTML =
    interpolate(t("modal.title"), { name: "<strong>" + name + "</strong>" });
  document.getElementById("modalBody").innerHTML =
    interpolate(t("modal.p"), {
      amount: "<strong>" + detail + "</strong>",
      talent: "<strong>" + talent + "</strong>",
      email: "<strong>" + name + "</strong>",
    });
  document.getElementById("sponsorModal").classList.add("open");
  document.getElementById("sponsorModal").setAttribute("aria-hidden", "false");
}

function closeModal() {
  document.getElementById("sponsorModal").classList.remove("open");
  document.getElementById("sponsorModal").setAttribute("aria-hidden", "true");
}

/* ---------- Mobile nav ---------- */
function bindNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const cta = document.querySelector(".nav-cta");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
    cta.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
      cta.classList.remove("open");
    })
  );

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 30) {
      nav.style.background = "rgba(14,20,32,0.95)";
      nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
      nav.style.background = "rgba(14,20,32,0.82)";
      nav.style.boxShadow = "none";
    }
  });
}

/* ---------- Scroll reveal ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function observe(el) {
  observer.observe(el);
}

/* ---------- Animated counters ---------- */
function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString();
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => counterObserver.observe(c));
}

/* ---------- Toast notifications ---------- */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- Recent benefactor feed ---------- */
function loadRecent() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_STORAGE)) || [];
  } catch {
    return [];
  }
}

function saveRecent(list) {
  localStorage.setItem(RECENT_STORAGE, JSON.stringify(list.slice(0, 6)));
}

function seedRecent() {
  let list = loadRecent();
  if (!list.length) {
    list = SEED_SPONSORS.slice();
    saveRecent(list);
  }
  return list;
}

function addRecentSponsor(name, talentId, amount) {
  const list = loadRecent();
  list.unshift({ name: name, talent: talentId, amount: amount });
  saveRecent(list);
}

function talentName(id) {
  const talent = TALENTS.find((x) => x.id === id);
  return talent ? talent.name : t("recent.anyTalent");
}

function renderRecent() {
  const list = seedRecent();
  const ul = document.getElementById("recentList");
  const empty = document.getElementById("recentEmpty");
  if (!list.length) {
    ul.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  ul.innerHTML = list
    .map((r) => {
      const talent = TALENTS.find((x) => x.id === r.talent);
      const g = talent ? talent.gradient : "linear-gradient(160deg,#f5a623,#38b6ff)";
      const initial = (r.name.trim().charAt(0) || "?").toUpperCase();
      return `
        <li class="recent-item">
          <span class="recent-avatar" style="background:${g}">${initial}</span>
          <span>
            <span class="recent-name">${r.name}</span><br />
            <span class="recent-for">${t("recent.pledged")} ${talentName(r.talent)}</span>
          </span>
          <span class="recent-amount">${formatMoney(r.amount)}</span>
        </li>
      `;
    })
    .join("");
}

/* ---------- Talent spotlight carousel ---------- */
let spotIndex = 0;
let spotTimer = null;

function renderSpotlight() {
  const track = document.getElementById("spotTrack");
  const dots = document.getElementById("spotDots");
  track.innerHTML = TALENTS.map((item, i) => {
    const raised = raisedFor(item);
    const pct = Math.min(100, Math.round((raised / item.goal) * 100));
    return `
      <div class="spot-card" data-index="${i}">
        <div class="spot-emoji" style="background:${item.gradient}">${item.emoji}</div>
        <div class="spot-info">
          <h4>${item.name}</h4>
          <span class="spot-skill">${L(item.catLabel)} &middot; ${L(item.specialism)}</span>
          <p>${L(item.story)}</p>
        </div>
        <div class="spot-progress">
          <div class="progress-label">
            <strong>${formatMoney(raised)}</strong>
            <span>${t("spot.of")} ${formatMoney(item.goal)}</span>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div style="font-size:0.75rem;color:var(--muted);margin-top:6px">${pct}${t("spot.pct")}</div>
        </div>
      </div>
    `;
  }).join("");
  dots.innerHTML = TALENTS.map(
    (_, i) => `<button class="spot-dot${i === 0 ? " active" : ""}" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join("");
  positionSpot();
}

function positionSpot() {
  const track = document.getElementById("spotTrack");
  const n = TALENTS.length;
  spotIndex = ((spotIndex % n) + n) % n;
  track.scrollTo({ left: spotIndex * track.clientWidth, behavior: "smooth" });
  document.querySelectorAll(".spot-dot").forEach((d, i) => d.classList.toggle("active", i === spotIndex));
  document.querySelectorAll(".spot-card").forEach((c, i) => {
    c.style.opacity = i === spotIndex ? "1" : "0.35";
  });
}

function startSpotAuto() {
  stopSpotAuto();
  spotTimer = setInterval(() => {
    spotIndex += 1;
    positionSpot();
  }, 5000);
}

function stopSpotAuto() {
  clearInterval(spotTimer);
  spotTimer = null;
}

function bindSpotlight() {
  document.getElementById("spotPrev").addEventListener("click", () => {
    spotIndex -= 1;
    positionSpot();
    startSpotAuto();
  });
  document.getElementById("spotNext").addEventListener("click", () => {
    spotIndex += 1;
    positionSpot();
    startSpotAuto();
  });
  document.getElementById("spotDots").addEventListener("click", (e) => {
    const dot = e.target.closest(".spot-dot");
    if (!dot) return;
    spotIndex = parseInt(dot.dataset.dot, 10);
    positionSpot();
    startSpotAuto();
  });
  const track = document.getElementById("spotTrack");
  track.addEventListener("mouseenter", stopSpotAuto);
  track.addEventListener("mouseleave", startSpotAuto);
  window.addEventListener("resize", positionSpot);
}

/* ---------- Journey timeline ---------- */
let currentTimelineIndex = 0;

function renderTimeline() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = JOURNEY.map(
    (j, i) => `
      <button class="tl-item${i === currentTimelineIndex ? " active" : ""}" data-year="${i}">
        <span class="tl-dot"></span>
        <strong>${j.year}</strong>
        <span class="tl-teaser">${L(j.teaser)}</span>
      </button>
    `
  ).join("");
  showTimelineDetail(currentTimelineIndex);
}

function showTimelineDetail(i) {
  currentTimelineIndex = i;
  const j = JOURNEY[i];
  const detail = document.getElementById("tlDetail");
  detail.innerHTML = `
    <h4>${j.year} &mdash; ${L(j.title)}</h4>
    <p>${L(j.text)}</p>
    <div class="tl-stats">
      ${j.stats.map((s) => `<span><strong>${s[1]}</strong> ${t(s[0])}</span>`).join("")}
    </div>
  `;
  document.querySelectorAll(".tl-item").forEach((it, idx) => it.classList.toggle("active", idx === i));
}

function bindTimeline() {
  document.getElementById("timeline").addEventListener("click", (e) => {
    const item = e.target.closest(".tl-item");
    if (!item) return;
    showTimelineDetail(parseInt(item.dataset.year, 10));
  });
}

/* ---------- Category accordion ---------- */
function bindCategories() {
  document.querySelectorAll(".cat-card").forEach((card) => {
    const btn = card.querySelector(".cat-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-card.open").forEach((c) => {
        if (c !== card) c.classList.remove("open");
      });
      card.classList.toggle("open");
    });
  });
}

/* ---------- Services tabs ---------- */
function bindServiceTabs() {
  document.querySelectorAll(".service-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".service-tab").forEach((x) => x.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(".services-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === tab.dataset.tab);
      });
    });
  });
}

/* ---------- Milestone tracker ---------- */
let currentMilestoneIndex = 0;

function renderMilestone(i) {
  currentMilestoneIndex = i;
  const m = MILESTONES[i];
  const el = document.getElementById("milestoneDetail");
  el.innerHTML = `
    <span class="m-year">${m.year}</span>
    <h4>${L(m.title)}</h4>
    <p>${L(m.text)}</p>
    <div class="m-metrics">
      ${m.metrics.map((x) => `<span><strong>${x[1]}</strong> ${t(x[0])}</span>`).join("")}
    </div>
  `;
}

function bindMilestones() {
  const slider = document.getElementById("milestoneSlider");
  const max = MILESTONES.length - 1;
  renderMilestone(0);
  slider.max = max;
  slider.addEventListener("input", () => renderMilestone(parseInt(slider.value, 10)));
  document.getElementById("mPrev").addEventListener("click", () => {
    slider.value = Math.max(0, parseInt(slider.value, 10) - 1);
    renderMilestone(parseInt(slider.value, 10));
  });
  document.getElementById("mNext").addEventListener("click", () => {
    slider.value = Math.min(max, parseInt(slider.value, 10) + 1);
    renderMilestone(parseInt(slider.value, 10));
  });
}

/* ---------- Contact char counter ---------- */
function bindCharCount() {
  const ta = document.getElementById("cMsg");
  const counter = document.getElementById("charCount");
  ta.addEventListener("input", () => {
    const len = ta.value.length;
    counter.textContent = len + " / 500";
    counter.classList.toggle("warn", len > 450);
  });
}

/* ---------- Dynamic language rendering ---------- */
function applyDynamicLang() {
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').setAttribute("content", t("meta.desc"));

  const year = document.getElementById("year").textContent || new Date().getFullYear();
  document.getElementById("footerText").textContent = interpolate(t("footer.text"), { year: year });

  renderTalents();
  applyTalentVisibility();
  renderSpotlight();
  renderTimeline();
  const slider = document.getElementById("milestoneSlider");
  renderMilestone(parseInt(slider.value, 10) || 0);
  renderRecent();

  const select = document.getElementById("spTalent");
  if (select) {
    const keep = select.value;
    select.innerHTML =
      '<option value="" disabled selected>' + t("sponsor.select") + "</option>" +
      TALENTS.map((x) => `<option value="${x.id}">${x.name} — ${L(x.specialism)} (${L(x.catLabel)})</option>`).join("");
    select.value = keep;
  }
}

/* ---------- Language toggle ---------- */
function bindLang() {
  const btn = document.getElementById("langBtn");
  btn.addEventListener("click", () => {
    setLang(currentLang === "en" ? "sw" : "en");
    btn.blur();
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  loadLang();
  setLang(currentLang);
  startSpotAuto();

  bindFilters();
  bindSearch();
  bindAmounts();
  bindSponsorForm();
  bindContactForm();
  bindNav();
  bindCategories();
  bindTimeline();
  bindSpotlight();
  bindServiceTabs();
  bindMilestones();
  bindCharCount();
  bindLang();
  animateCounters();

  document.querySelectorAll(".reveal").forEach(observe);

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOk").addEventListener("click", closeModal);
  document.getElementById("sponsorModal").addEventListener("click", (e) => {
    if (e.target.id === "sponsorModal") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
