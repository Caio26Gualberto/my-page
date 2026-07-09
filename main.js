/* =========================================================
   Caio Faria Gualberto — interações
   i18n PT/EN · tema claro/escuro · HUD · scroll-spy · reveals
   ========================================================= */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* ---------------- dicionário i18n ---------------- */
  const I18N = {
    pt: {
      role: 'SOFTWARE & CLOUD ENGINEER',
      'hero.l1': 'Eu projeto sistemas —',
      'hero.l2': 'da lógica à nuvem,',
      'hero.l3': 'na escala que precisar.',
      'hero.lede':
        'Software e cloud engineer. Da lógica que sustenta ao que aparece na tela — <em>C#</em>, <em>Python</em>, <em>Go</em> e nuvem avançada em <em>Azure</em> e <em>AWS</em>.',
      'cta.talk': 'Falar comigo',
      'cta.work': 'Ver trabalho',
      scroll: 'rolar ↓',
      'idx.about': '01 — sobre',
      'about.p1':
        'Sou engenheiro de software e de nuvem, e vou onde o problema estiver. Projeto e entrego de ponta a ponta — backend, cloud e frontend — e <strong>assumo o resultado em produção.</strong>',
      'about.p2':
        'Gosto de sistemas que se sustentam sozinhos: bem pensados na base, simples de operar, honestos sobre o que fazem. É esse o padrão que eu levo para cada projeto.',
      'idx.stack': '02 — stack',
      'stack.title': 'O que eu levo<br>para a mesa',
      'stack.k1': 'Linguagens',
      'stack.k2': 'Nuvem',
      'stack.v2': 'Azure<span class="sep">·</span>AWS',
      'stack.k3': 'Frontend',
      'stack.k4': 'Abordagem',
      'stack.v4': 'Entrego ponta a ponta<span class="sep">·</span>e assumo o resultado',
      'idx.spec': '03 — especificações',
      'spec.title': 'Minhas<br>especificações',
      'spec.intro': 'O detalhe técnico completo — abra se quiser ver a fundo. 66 competências, do código à nuvem.',
      'spec.toggle': 'Abrir especificações',
      'idx.path': '04 — trajetória',
      'path.title': 'Por onde<br>passei',
      'path.intro': 'Duas empresas até aqui. Toque num ponto para abrir.',
      'idx.work': '05 — trabalho',
      'work.title': 'Trabalho<br>selecionado',
      'work.featEyebrow': 'projeto em destaque · solo',
      'work.featDesc':
        'Construí do zero, sozinho, e mantenho: bot de Telegram com backend em Python, infraestrutura em AWS e design system próprio — feito para operar em escala.',
      'work.linkBot': 'Abrir bot ↗',
      'work.m1': 'usuários na base',
      'work.m2': 'ativos simultâneos',
      'work.byline': 'construído & mantido por mim',
      'work.polaris': 'Construí do zero, sozinho, e mantenho — do backend à interface.',
      'work.aurum': 'Construí do zero, sozinho, e mantenho — foco em experiência e dados.',
      'global.eyebrow': '◇ alcance internacional',
      'global.title': 'Colaboração<br>sem fronteiras.',
      'global.lede': 'Já trabalhei com times e clientes de vários países. Comunicação em inglês faz parte do meu dia a dia.',
      'global.nl_pl': 'Polônia',
      'global.nl_ch': 'Suíça',
      'global.nl_pt': 'Portugal',
      'global.nl_us': 'Estados Unidos',
      'global.nl_cn': 'China',
      'global.nl_nl': 'Países Baixos',
      'global.mainly': 'principalmente',
      'global.langLabel': 'Inglês',
      'global.langLevel': 'Fluente',
      'global.langNote': 'Comunicação profissional diária com clientes europeus.',
      'idx.contact': '06 — contato',
      'contact.title': 'Vamos construir<br>algo juntos?',
      'footer.coord': 'lat: sistema · long: entrega',
    },
    en: {
      role: 'SOFTWARE & CLOUD ENGINEER',
      'hero.l1': 'I design systems —',
      'hero.l2': 'from logic to cloud,',
      'hero.l3': 'at the scale it takes.',
      'hero.lede':
        'Software and cloud engineer. From the logic underneath to what shows up on screen — <em>C#</em>, <em>Python</em>, <em>Go</em> and advanced cloud on <em>Azure</em> and <em>AWS</em>.',
      'cta.talk': 'Get in touch',
      'cta.work': 'See work',
      scroll: 'scroll ↓',
      'idx.about': '01 — about',
      'about.p1':
        'I\'m a software and cloud engineer, and I go wherever the problem is. I design and deliver end-to-end — backend, cloud and frontend — and <strong>I own the outcome in production.</strong>',
      'about.p2':
        "I like systems that hold themselves up: well thought-out at the core, simple to operate, honest about what they do. That's the standard I bring to every project.",
      'idx.stack': '02 — stack',
      'stack.title': 'What I bring<br>to the table',
      'stack.k1': 'Languages',
      'stack.k2': 'Cloud',
      'stack.v2': 'Azure<span class="sep">·</span>AWS',
      'stack.k3': 'Frontend',
      'stack.k4': 'Approach',
      'stack.v4': 'End-to-end delivery<span class="sep">·</span>I own the outcome',
      'idx.spec': '03 — specs',
      'spec.title': 'My<br>specifications',
      'spec.intro': 'The full technical detail — open it if you want to go deep. 66 skills, from code to cloud.',
      'spec.toggle': 'Open specifications',
      'idx.path': '04 — path',
      'path.title': 'Where<br>I have been',
      'path.intro': 'Two companies so far. Tap a point to open it.',
      'idx.work': '05 — work',
      'work.title': 'Selected<br>work',
      'work.featEyebrow': 'featured project · solo',
      'work.featDesc':
        'Built from scratch, solo, and maintained by me: a Telegram bot with a Python backend, AWS infrastructure and a custom design system — made to operate at scale.',
      'work.linkBot': 'Open bot ↗',
      'work.m1': 'users in the base',
      'work.m2': 'concurrent active',
      'work.byline': 'built & maintained by me',
      'work.polaris': 'Built from scratch, solo, and maintained by me — backend to interface.',
      'work.aurum': 'Built from scratch, solo, and maintained by me — focused on experience and data.',
      'global.eyebrow': '◇ international reach',
      'global.title': 'Collaboration<br>without borders.',
      'global.lede': "I've worked with teams and clients from many countries. Communicating in English is part of my everyday work.",
      'global.nl_pl': 'Poland',
      'global.nl_ch': 'Switzerland',
      'global.nl_pt': 'Portugal',
      'global.nl_us': 'United States',
      'global.nl_cn': 'China',
      'global.nl_nl': 'Netherlands',
      'global.mainly': 'mainly',
      'global.langLabel': 'English',
      'global.langLevel': 'Fluent',
      'global.langNote': 'Daily professional communication with European clients.',
      'idx.contact': '06 — contact',
      'contact.title': "Let's build<br>something together?",
      'footer.coord': 'lat: system · long: delivery',
    },
  };

  /* ---------------- trajetória: marcos (mais antigo → mais recente) ---------------- */
  const MILESTONES = [
    {
      label: 'HubCount',
      logo: 'assets/hubcount_logo.jpg',
      initials: 'HC',
      when: { pt: '2022 — 2025', en: '2022 — 2025' },
      role: {
        pt: 'Desenvolvedor de Software',
        en: 'Software Developer',
      },
      org: {
        pt: 'HubCount · Santo André, BR · Remoto',
        en: 'HubCount · Santo André, BR · Remote',
      },
      text: {
        pt: 'Quase três anos construindo e sustentando produto: backend em .NET e EF Core, modelagem e SQL, e frontend. Da estrutura de dados à entrega em produção.',
        en: 'Nearly three years building and maintaining product: backend in .NET and EF Core, data modeling and SQL, and frontend. From the data layer to production delivery.',
      },
    },
    {
      label: 'CloudPlusPlus',
      logo: 'assets/cloudplusplus_logo.jpg',
      initials: 'C++',
      when: { pt: '2025 — atual', en: '2025 — present' },
      role: { pt: 'Software Engineer', en: 'Software Engineer' },
      org: {
        pt: 'CloudPlusPlus · Utrecht, NL · Remoto',
        en: 'CloudPlusPlus · Utrecht, NL · Remote',
      },
      text: {
        pt: 'Trabalho direto com clientes internacionais, do discovery à entrega: backend em .NET/C# e Python, infraestrutura em Azure, CI/CD, integrações e design de banco. Assumo o ciclo completo — decisão técnica, implementação e evolução da plataforma, em inglês.',
        en: 'I work directly with international clients, from discovery to delivery: backend in .NET/C# and Python, Azure infrastructure, CI/CD, integrations and database design. I own the full cycle — technical decisions, implementation and platform evolution, in English.',
      },
    },
  ];
  let currentLang = 'pt';
  let activeMilestone = MILESTONES.length - 1; // começa no mais recente

  const langButtons = [...document.querySelectorAll('.lang__btn')];

  function applyLang(lang) {
    currentLang = I18N[lang] ? lang : 'pt';
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    root.lang = currentLang === 'en' ? 'en' : 'pt-BR';
    langButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.lang === currentLang));
    try { localStorage.setItem('lang', currentLang); } catch (_) {}
    renderTimeline();
  }

  /* ---------------- trajetória: render da curva + nós ---------------- */
  function samplePath(path, count) {
    const len = path.getTotalLength();
    const vb = path.ownerSVGElement.viewBox.baseVal;
    const pad = 0.06; // margem nas pontas
    const out = [];
    for (let i = 0; i < count; i++) {
      const t = count === 1 ? 0.5 : pad + ((1 - 2 * pad) * i) / (count - 1);
      const p = path.getPointAtLength(len * t);
      out.push({ x: (p.x / vb.width) * 100, y: (p.y / vb.height) * 100 });
    }
    return out;
  }

  function selectMilestone(i) {
    activeMilestone = i;
    const m = MILESTONES[i];
    const detail = document.getElementById('detail');
    if (!detail) return;
    detail.querySelector('.detail__when').textContent = m.when[currentLang];
    detail.querySelector('.detail__role').textContent = m.role[currentLang];
    detail.querySelector('.detail__org').textContent = m.org[currentLang];
    detail.querySelector('.detail__text').textContent = m.text[currentLang];
    // reinicia a animação do painel
    const inner = detail.querySelector('.detail__inner');
    inner.querySelectorAll('*').forEach((el) => {
      el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    });
    document.querySelectorAll('.node').forEach((n, idx) => {
      n.classList.toggle('is-active', idx === i);
      n.setAttribute('aria-expanded', idx === i ? 'true' : 'false');
    });
  }

  function renderTimeline() {
    const nodesWrap = document.getElementById('nodes');
    const path = document.getElementById('curvePath');
    if (!nodesWrap || !path) return;
    const pos = samplePath(path, MILESTONES.length);
    nodesWrap.innerHTML = MILESTONES.map((m, i) => `
      <button type="button" class="node${i === activeMilestone ? ' is-active' : ''}"
              style="left:${pos[i].x}%;top:${pos[i].y}%"
              aria-expanded="${i === activeMilestone}"
              aria-label="${m.role[currentLang]} — ${m.label}">
        <span class="node__badge">
          ${m.logo ? `<img class="node__logo" src="${m.logo}" alt="" onerror="this.classList.add('is-missing')" />` : ''}
          <span class="node__initials mono">${m.initials || ''}</span>
        </span>
        <span class="node__label">${m.label}</span>
        <span class="node__when">${m.when[currentLang]}</span>
      </button>`).join('');
    nodesWrap.querySelectorAll('.node').forEach((btn, i) =>
      btn.addEventListener('click', () => selectMilestone(i))
    );
    selectMilestone(activeMilestone);
  }

  langButtons.forEach((b) =>
    b.addEventListener('click', () => applyLang(b.dataset.lang))
  );

  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('lang') || 'pt'; } catch (_) {}
  if (savedLang !== 'pt') applyLang(savedLang); // PT já é o padrão no HTML
  else applyLang('pt');

  /* ---------------- tema claro/escuro ---------------- */
  const themeBtn = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (_) {}
  }
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('theme') || 'light'; } catch (_) {}
  applyTheme(savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () =>
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
    );
  }

  /* ---------------- especificações (expansível) ---------------- */
  const specSection = document.getElementById('especificacoes');
  const specToggle = document.getElementById('specToggle');
  if (specSection && specToggle) {
    specToggle.addEventListener('click', () => {
      const open = specSection.classList.toggle('spec--open');
      specToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------------- ano no footer ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- relógio UTC (HUD) ---------------- */
  const clock = document.getElementById('utc-clock');
  if (clock) {
    const tick = () => { clock.textContent = new Date().toISOString().slice(11, 19); };
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- boot do hero ---------------- */
  const bootEls = [...document.querySelectorAll('[data-boot]')];
  bootEls.forEach((el) => el.style.setProperty('--boot-i', Number(el.dataset.delay || 0)));
  requestAnimationFrame(() =>
    requestAnimationFrame(() => bootEls.forEach((el) => el.classList.add('is-in')))
  );

  /* ---------------- reveals no scroll ---------------- */
  const revealEls = [...document.querySelectorAll('.reveal:not([data-boot])')];
  const animatable = [
    ...revealEls,
    ...document.querySelectorAll('.work__title'),
  ];

  /* desenha a curva da trajetória ao entrar na tela */
  function setupCurveDraw() {
    const path = document.getElementById('curvePath');
    if (!path) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      path.classList.add('curve-path--draw');
      return;
    }
    const len = path.getTotalLength();
    path.classList.add('curve-path--draw');
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { path.style.strokeDashoffset = '0'; obs.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(document.getElementById('curve'));
  }
  setupCurveDraw();

  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
    );
    animatable.forEach((el) => io.observe(el));

    /* animação escalonada dos cards de trabalho */
    const cards = [...document.querySelectorAll('.work-card')];
    const workIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('is-in'), i * 130);
          });
          obs.disconnect();
        });
      },
      { threshold: 0.2 }
    );
    if (cards.length) workIO.observe(cards[0]);
  } else {
    animatable.forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.work-card').forEach((el) => el.classList.add('is-in'));
  }

  /* ---------------- scroll-spy (rail) ---------------- */
  const dots = [...document.querySelectorAll('.rail__dot')];
  const sections = dots.map((d) => document.querySelector(d.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id;
            dots.forEach((d) => d.classList.toggle('is-active', d.getAttribute('href') === id));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------------- rolagem suave dos dots ---------------- */
  dots.forEach((dot) => {
    dot.addEventListener('click', (ev) => {
      const target = document.querySelector(dot.getAttribute('href'));
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
