// ══ SPLASH ══
let splashTriggered = false;

// Preload audio as soon as page loads
window.addEventListener('load', () => {
  const audio = document.getElementById('netflix-sound');
  if (audio) {
    audio.load();
    // Unlock audio context on first any interaction
    document.addEventListener('mousemove', function unlock() {
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      }).catch(() => {});
      document.removeEventListener('mousemove', unlock);
    }, { once: true });
  }
});
function restartSplash() {
  // Reset flag
  splashTriggered = false;

  // Hide main
  document.getElementById('main').classList.remove('show');

  // Hide Who's Watching (just remove class, CSS handles the rest)
  document.getElementById('ww').classList.remove('show');

  // Reset splash
  const splash = document.getElementById('splash');
  splash.classList.remove('zooming', 'done');

  // Reset hint
  const hint = document.querySelector('.splash-hint');
  if (hint) { hint.style.opacity = ''; hint.style.visibility = ''; }

  // Stop video and sound
  const vid = document.getElementById('hero-video');
  if (vid) { vid.pause(); vid.currentTime = 0; }
  try {
    const audio = document.getElementById('netflix-sound');
    audio.pause();
    audio.currentTime = 0;
  } catch(e) {}
}

function startSplash() {
  if (splashTriggered) return;
  splashTriggered = true;
  const splash = document.getElementById('splash');
  splash.style.cursor = 'default';

  // Step 1: Hide hint immediately
  const hint = document.querySelector('.splash-hint');
  if (hint) { hint.style.opacity = '0'; hint.style.visibility = 'hidden'; }

  // Step 2: Small shake on name immediately
  const splashName = document.querySelector('.splash-name');
  if (splashName) {
    splashName.classList.add('pulsing');
    setTimeout(() => splashName.classList.remove('pulsing'), 300);
  }

  // Step 3: Play sound immediately on click
  try {
    const audio = document.getElementById('netflix-sound');
    audio.currentTime = 0;
    audio.play();
  } catch(e) {}

  // Step 4: After 4 seconds — zoom in
  setTimeout(() => {
    splash.classList.add('zooming');

    // Who's Watching appears near end of zoom
    setTimeout(() => {
      document.getElementById('ww').classList.add('show');
    }, 900);

    // Splash fully gone after zoom
    setTimeout(() => {
      splash.classList.add('done');
    }, 1200);

  }, 2500);
}

// ══ PROFILE CARD DATA ══
const profileCards = {
  recruiter: {
    picks: [
      { label:'Work Permit',     img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=75', page:'pro' },
      { label:'Skills',          img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=75', page:'skills' },
      { label:'Experience',      img:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=75', page:'pro' },
      { label:'Certifications',  img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=75', page:'projects' },
      { label:'Recommendations', img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75', page:'hire' },
    ],
    watching: [
      { label:'GitHub',    img:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=75', page:'github' },
      { label:'LinkedIn',   img:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75', page:'linkedin' },
      { label:'Blogs',      img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=75', page:'contact' },
      { label:'Contact Me', img:'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=75', page:'contact' },
    ]
  },
  developer: {
    picks: [
      { label:'Skills',          img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=75', page:'skills' },
      { label:'Projects',        img:'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=75', page:'projects' },
      { label:'Certifications',  img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=75', page:'projects' },
      { label:'Experience',      img:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=75', page:'pro' },
      { label:'Recommendations', img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75', page:'hire' },
    ],
    watching: [
      { label:'GitHub',    img:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=75', page:'github' },
      { label:'LinkedIn',   img:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75', page:'linkedin' },
      { label:'Blogs',      img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=75', page:'contact' },
      { label:'Contact Me', img:'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=75', page:'contact' },
    ]
  },
  stalker: {
    picks: [
      { label:'Recommendations', img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75', page:'hire' },
      { label:'Contact Me',      img:'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=75', page:'contact' },
      { label:'Projects',        img:'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=75', page:'projects' },
      { label:'Experience',      img:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=75', page:'pro' },
      { label:'Certifications',  img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=75', page:'projects' },
    ],
    watching: [
      { label:'GitHub',    img:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=75', page:'github' },
      { label:'LinkedIn',   img:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75', page:'linkedin' },
      { label:'Blogs',      img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=75', page:'contact' },
      { label:'Contact Me', img:'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=75', page:'contact' },
    ]
  },
  adventurer: {
    picks: [
      { label:'Work Permit',     img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=75', page:'pro' },
      { label:'Skills',          img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=75', page:'skills' },
      { label:'Experience',      img:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=75', page:'pro' },
      { label:'Certifications',  img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=75', page:'projects' },
      { label:'Recommendations', img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75', page:'hire' },
    ],
    watching: [
      { label:'GitHub',    img:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=75', page:'github' },
      { label:'LinkedIn',   img:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75', page:'linkedin' },
      { label:'Blogs',      img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=75', page:'contact' },
      { label:'Contact Me', img:'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=75', page:'contact' },
    ]
  }
};

function renderCards(profile) {
  const data = profileCards[profile] || profileCards.recruiter;
  const makeCard = c => `<div class="photo-card${c.active?' active-card':''}" onclick="showPage('${c.page}')"><img src="${c.img}" alt="${c.label}" loading="lazy"/><div class="photo-card-label">${c.label}</div></div>`;
  const pr = document.getElementById('top-picks-row');
  const cr = document.getElementById('continue-row');
  if (pr) pr.innerHTML = data.picks.map(makeCard).join('');
  if (cr) cr.innerHTML = data.watching.map(makeCard).join('');
  const pf = document.getElementById('picks-for');
  const wf = document.getElementById('watching-for');
  if (pf) pf.textContent = profile;
  if (wf) wf.textContent = profile;
}

// ══ NAV AVATAR SVGS ══
const navAvatarSVGs = {
  recruiter:  `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ng1" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#4dd9e8"/><stop offset="100%" stop-color="#0899a8"/></radialGradient></defs><rect width="36" height="36" rx="4" fill="url(#ng1)"/><circle cx="12" cy="13" r="3" fill="#111"/><circle cx="22" cy="13" r="3" fill="#111"/><path d="M12,21 Q18,25 24,21" stroke="#111" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  developer:  `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ng2" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#9a9a9a"/><stop offset="100%" stop-color="#505050"/></radialGradient></defs><rect width="36" height="36" rx="4" fill="url(#ng2)"/><circle cx="12" cy="13" r="3" fill="#111"/><circle cx="22" cy="13" r="3" fill="#111"/><path d="M12,21 Q18,25 24,21" stroke="#111" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  stalker:    `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ng3" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#ff4444"/><stop offset="100%" stop-color="#aa0000"/></radialGradient></defs><rect width="36" height="36" rx="4" fill="url(#ng3)"/><circle cx="12" cy="13" r="3" fill="#111"/><circle cx="22" cy="13" r="3" fill="#111"/><path d="M12,21 Q18,25 24,21" stroke="#111" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  adventurer: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ng4" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#ffcc22"/><stop offset="100%" stop-color="#c88800"/></radialGradient></defs><rect width="36" height="36" rx="4" fill="url(#ng4)"/><circle cx="12" cy="13" r="3" fill="#111"/><circle cx="22" cy="13" r="3" fill="#111"/><path d="M12,21 Q18,25 24,21" stroke="#111" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
};

// Free Pexels videos — working direct links
const profileHero = {
  recruiter: {
    name: 'Archit Ravikumar — Frontend Developer',
    bio: 'B.Tech CSE student at AWH Engineering College, Calicut — passionate about building clean, modern web experiences. Open to internships and opportunities!'
  },
  developer: {
    name: 'Archit Ravikumar — Frontend Developer',
    bio: 'I build things for the web. HTML, CSS, JavaScript, React — currently diving into backend with Node.js. Always learning, always building.'
  },
  stalker: {
    name: 'Archit Ravikumar — Just a Guy Who Codes',
    bio: 'B.Tech CSE student from Calicut who spends too much time building cool stuff. You found my portfolio — hope you like what you see!'
  },
  adventurer: {
    name: 'Archit Ravikumar — Creative Developer',
    bio: 'Turning ideas into real products with code and curiosity. Currently exploring the world of web development one project at a time.'
  }
};

const profileVideos = {
  recruiter: "hero.mp4",
  developer: "hero.mp4",
  stalker: "hero.mp4",
  adventurer: "hero.mp4"
};

function pickProfile(el, profile) {
  document.querySelectorAll('.ww-item').forEach(i => i.classList.remove('picked'));
  el.classList.add('picked');
  // Update nav avatar
  const navIcon = document.getElementById('nav-icon');
  if (navIcon) navIcon.innerHTML = navAvatarSVGs[profile] || navAvatarSVGs.recruiter;
  // Switch hero name and bio
  const heroName = document.getElementById('hero-name');
  const heroBio = document.getElementById('hero-bio');
  if (heroName && profileHero[profile]) {
    heroName.textContent = profileHero[profile].name;
    heroBio.textContent = profileHero[profile].bio;
  }

  // Switch hero video per profile
  const vid = document.getElementById('hero-video');
  if (vid) {
    const src = profileVideos[profile] || profileVideos.recruiter;
    vid.pause();
    vid.currentTime = 0;
    vid.src = src;
    vid.load();
    vid.play().catch(() => {});
  }
  // Render profile cards
  renderCards(profile);
  // Transition to main
  setTimeout(() => {
    document.getElementById('ww').classList.remove('show');
    setTimeout(() => {
      const mainEl = document.getElementById('main');
      mainEl.style.display = '';
      mainEl.classList.add('show');
      // Show home page by default
      showPage('home');
      // Ensure video plays
      const vid2 = document.getElementById('hero-video');
      if (vid2) vid2.play().catch(() => {});
    }, 350);
  }, 380);
}

// ══ HOME = WHO'S WATCHING ══
function goHome() {
  // Hide main
  document.getElementById('main').classList.remove('show');
  // Reset video
  const vid = document.getElementById('hero-video'); if(vid){vid.src=profileVideos.recruiter;vid.load();}
  // Reset profile picks
  document.querySelectorAll('.ww-item').forEach(i => i.classList.remove('picked'));
  // Reset nav links
  document.querySelectorAll('.nav-links a').forEach(a => a.style.color = 'rgba(255,255,255,.7)');
  // Show Who's Watching
  setTimeout(() => {
    document.getElementById('ww').classList.add('show');
  }, 300);
  return false;
}

// ══ PAGE NAVIGATION ══
function showPage(id, linkEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.style.color = 'rgba(255,255,255,.7)');
  if (linkEl) linkEl.style.color = '#fff';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Re-init timeline animation when Professional page opens
  if (id === 'pro') setTimeout(initTimeline, 100);
  if (id === 'skills') setTimeout(initSkills, 100);
  if (id === 'hire') resetHireAnims();
  return false;
}

// ══ TIMELINE SCROLL ANIMATION ══
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('tl-visible');
      tlObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

function initTimeline() {
  document.querySelectorAll('.tl-item').forEach(item => {
    item.classList.remove('tl-visible');
    tlObserver.observe(item);
  });
}

// ══ SKILLS SCROLL ANIMATION ══
const skObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger each card
      setTimeout(() => {
        entry.target.classList.add('sk-visible');
      }, entry.target.dataset.delay || 0);
      skObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function initSkills() {
  document.querySelectorAll('.sk-anim').forEach((el, i) => {
    el.classList.remove('sk-visible');
    el.dataset.delay = (i % 6) * 80; // stagger per row
    skObserver.observe(el);
  });
}

// ══ HIRE PAGE ANIMATION RESET ══
function resetHireAnims() {
  document.querySelectorAll('.hire-badge,.hire-title,.hire-sub,.hire-cards,.hire-btns').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = '';
  });
}

// ══ NAVBAR SCROLL ══
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('solid', window.scrollY > 30);
});
