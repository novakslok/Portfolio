import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  Binary,
  BriefcaseBusiness,
  Cpu,
  Crosshair,
  ExternalLink,
  Fingerprint,
  Headphones,
  Mail,
  MessageCircle,
  MonitorCog,
  Presentation,
  Radio,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import './styles.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const profile = {
  alias: 'Novaks',
  discordUserId: '1000842736154448025',
  discordHandle: '_novaks',
  unknownCheatsName: 'Novaks',
  unknownCheatsUrl: 'https://www.unknowncheats.me/forum/members/5403677.html',
};

const languages = [
  {
    name: 'C++',
    image: asset('assets/brands/cplusplus.svg'),
  },
  {
    name: 'Assembly',
    image: asset('assets/brands/assemblyscript.svg'),
  },
  {
    name: 'JavaScript',
    image: asset('assets/brands/javascript.svg'),
  },
  {
    name: 'Python',
    image: asset('assets/brands/python.svg'),
  },
];

const tools = [
  { name: 'IDA Pro', image: asset('assets/tools/ida-lady.png') },
  { name: 'CodeNinja', image: null },
  { name: 'Ghidra', image: asset('assets/tools/ghidra.svg') },
  { name: 'x64dbg', image: asset('assets/tools/x64dbg-real.png') },
  { name: 'Wireshark', image: asset('assets/brands/wireshark.svg') },
  { name: 'Burp Suite', image: asset('assets/brands/burpsuite.svg') },
];

const offers = [
  {
    icon: BriefcaseBusiness,
    title: 'Custom Projects',
    text: 'Open to paid builds: automation, tooling, dashboards, reverse-engineering utilities, and research prototypes.',
  },
  {
    icon: Presentation,
    title: 'Training',
    text: 'Private sessions for C++, Assembly basics, IDA workflow, debugging, reversing fundamentals, and security tooling.',
  },
  {
    icon: MonitorCog,
    title: 'Consulting',
    text: 'Need a technical second brain for a weird project? Send the scope, budget, and deadline.',
  },
];

const demoRows = [
  { label: 'Kernel Notes', value: '71%', active: true },
  { label: 'Trace Overlay', value: 'ON', active: true },
  { label: 'Static Report', value: 'READY', active: true },
  { label: 'Symbol Map', value: '46%', active: false },
  { label: 'Latency Guard', value: '0 ms', active: true },
  { label: 'Noise Filter', value: 'LOW', active: false },
];

const webBadges = ['novaks.exe', 'ida wins', 'rain mode', 'reversing', 'uc release', 'paid work'];

const gifRelics = [
  { src: asset('assets/gifs/black-cat.gif') },
  { src: asset('assets/gifs/we-miss-you.gif') },
  { src: asset('assets/gifs/art-waves.gif') },
];

const statusPalette = {
  online: { label: 'Online', color: '#43f28b' },
  idle: { label: 'Idle', color: '#f7c85f' },
  dnd: { label: 'Do Not Disturb', color: '#ff5d6c' },
  offline: { label: 'Offline', color: '#8a94a6' },
  unknown: { label: 'Not Tracked', color: '#c7a27a' },
};

const specialties = [
  {
    icon: Binary,
    title: 'Reverse Engineering',
    text: 'I have experiencie reversing software, games, drivers, and anticheats',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Research',
    text: 'Protocols to analyse and protect memory from exploit techniques',
  },
  {
    icon: Crosshair,
    title: 'Offensive Engineering',
    text: 'Memory manipulation, code injection, hooking and more can be found in my releases',
  },
  {
    icon: Cpu,
    title: 'Low-Level Programming',
    text: 'Systems thinking with C++, Assembly, are often used in my projects',
  },
];

const projects = [
  {
    tag: 'Binary Analysis',
    title: 'Offsets Finder "Hydra"',
    text: 'This is an ongoing project to automate the finding of offsets in game binaries, which is kinda a pain for game hacking doing it manually every time a game updates',
  },
  {
    tag: 'Automation',
    title: 'GUI Builder',
    text: 'A tool to rapidly build menus and interfaces with ImGui',
  },
  {
    tag: 'Research',
    title: 'Cheat Loader',
    text: 'A private cheat loader with unique features that innovates in bypassing anticheats',
  },
];

const latestPublication = {
  platform: 'UnknownCheats',
  title: 'STAR CS2 V1',
  subtitle: 'External CS2 release',
  url: 'https://www.unknowncheats.me/forum/counter-strike-2-releases/755795-star-cs2-v1-external-cs2-cheat.html',
};

const birthDate = '2007-11-14T00:00:00';

function App() {
  const discord = useDiscordPresence(profile.discordUserId);
  const age = useLiveAge(birthDate);
  useScrollDepth();
  useDollarCursor();

  return (
    <main className="min-h-screen overflow-hidden bg-[#050403] text-[#e8e2da]">
      <Intro />
      <RainScene />
      <Navigation />
      <Hero age={age} />
      <WebRelics />
      <Specialties />
      <Toolkit />
      <SocialHub discord={discord} />
      <Offers />
      <Projects />
      <Contact />
    </main>
  );
}

function WebRelics() {
  return (
    <section className="web-relics relative z-10 px-5 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="badge-strip">
          {webBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <div className="gif-grid mt-4">
          {gifRelics.map((gif, index) => (
            <article className="gif-card" key={gif.title || gif.src}>
              <img src={gif.src} alt={gif.title || `web relic ${index + 1}`} />
              {gif.title ? <span>{gif.title}</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function useDollarCursor() {
  React.useEffect(() => {
    function updateCursor(event) {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    }

    window.addEventListener('pointermove', updateCursor, { passive: true });
    return () => window.removeEventListener('pointermove', updateCursor);
  }, []);
}

function useLiveAge(dateString) {
  const [age, setAge] = React.useState(() => calculateAge(dateString));

  React.useEffect(() => {
    const interval = window.setInterval(() => setAge(calculateAge(dateString)), 100);
    return () => window.clearInterval(interval);
  }, [dateString]);

  return age;
}

function calculateAge(dateString) {
  const born = new Date(dateString);
  const now = new Date();
  const diff = Math.max(0, now.getTime() - born.getTime());
  const totalSeconds = diff / 1000;
  const tropicalYear = 365.2425 * 24 * 60 * 60;
  const years = totalSeconds / tropicalYear;
  const wholeYears = Math.floor(years);
  const days = Math.floor(diff / 86400000);

  return {
    years: years.toFixed(10),
    wholeYears,
    days,
    progress: ((years - wholeYears) * 100).toFixed(4),
  };
}

function useScrollDepth() {
  React.useEffect(() => {
    let frame = 0;

    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      document.documentElement.style.setProperty('--scroll-depth', progress.toFixed(4));
      frame = 0;
    }

    function onScroll() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}

function useDiscordPresence(userId) {
  const [presence, setPresence] = React.useState({
    status: userId ? 'unknown' : 'unknown',
    activity: userId ? 'Syncing Discord presence' : 'Add Discord user ID to enable live status',
    source: userId ? 'lanyard' : 'fallback',
    avatar: asset('assets/profile.png'),
  });

  React.useEffect(() => {
    if (!userId) {
      return undefined;
    }

    let cancelled = false;

    async function loadPresence() {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        if (!response.ok) {
          throw new Error('Lanyard is not tracking this Discord user yet');
        }

        const payload = await response.json();

        if (cancelled) {
          return;
        }

        if (!payload.success) {
          setPresence({
            status: 'unknown',
            activity: 'Lanyard is not tracking this Discord user yet',
            source: 'fallback',
            avatar: asset('assets/profile.png'),
          });
          return;
        }

        const data = payload.data;
        const customStatus = data.activities?.find((activity) => activity.type === 4);
        const activity = customStatus?.state || data.activities?.[0]?.name || 'No active rich presence';
        const avatarHash = data.discord_user?.avatar;
        const avatar = avatarHash
          ? `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png?size=256`
          : asset('assets/profile.png');

        setPresence({
          status: data.discord_status || 'offline',
          activity,
          source: 'lanyard',
          avatar,
        });
      } catch {
        if (!cancelled) {
          setPresence({
            status: 'unknown',
            activity: 'Lanyard is not tracking this Discord user yet',
            source: 'fallback',
            avatar: asset('assets/profile.png'),
          });
        }
      }
    }

    loadPresence();
    const interval = window.setInterval(loadPresence, 30000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [userId]);

  return presence;
}

function Intro() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-screen ${hidden ? 'intro-screen-hidden' : ''}`}>
      <div className="intro-water">
        <span className="water-drop" />
        <span className="water-ripple water-ripple-one" />
        <span className="water-ripple water-ripple-two" />
      </div>
      <div className="intro-reveal">
        <img src={asset('assets/profile.png')} alt="Novaks profile" className="intro-avatar" />
        <p>Welcome to my place stranger</p>
        <h2>{profile.alias}</h2>
      </div>
    </div>
  );
}

function RainScene() {
  const drops = Array.from({ length: 64 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    delay: `${-(index % 23) * 0.58}s`,
    duration: `${3.8 + (index % 11) * 0.32}s`,
    height: `${34 + (index % 8) * 13}px`,
    opacity: 0.055 + (index % 6) * 0.026,
    depth: index % 3,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <img
        src={asset('assets/rain-forest-bg.png')}
        alt=""
        className="rain-bg absolute inset-0 h-full w-full object-cover opacity-70 grayscale"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,210,190,0.10),transparent_24%),linear-gradient(90deg,rgba(0,0,0,0.74),rgba(18,14,12,0.24)_48%,rgba(0,0,0,0.78)),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.78))]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <div className="rain-glass absolute inset-0" />
      <div className="absolute inset-0 overflow-hidden">
        {drops.map((drop, index) => (
          <span
            key={index}
            className={`rain-drop rain-depth-${drop.depth}`}
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration,
              height: drop.height,
              opacity: drop.opacity,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-30" />
    </div>
  );
}

function Navigation() {
  return (
    <header className="site-header fixed left-0 right-0 top-0 z-30 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="brand-link flex items-center gap-3 font-mono text-sm uppercase tracking-[0.28em]">
          <span className="nav-avatar">
            <img src={asset('assets/profile.png')} alt="" />
          </span>
          {profile.alias}
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#cfc2b0] md:flex">
          <a className="nav-link" href="#expertise">Expertise</a>
          <a className="nav-link" href="#toolkit">Toolkit</a>
          <a className="nav-link" href="#social">Social</a>
          <a className="nav-link" href="#offers">Offers</a>
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero({ age }) {
  return (
    <section id="top" className="hero-section relative z-10 min-h-screen px-5 py-28">
      <div className="hero-shell mx-auto grid max-w-7xl items-center gap-8">
        <div className="hero-copy animate-fadeUp">
          <div className="hero-kicker">
            <span className="status-orb-small">
              <img src={asset('assets/profile.png')} alt="" />
            </span>
            <span>happy to see you here ;)</span>
          </div>
          <h1>{profile.alias}</h1>
          <p className="hero-role">I build tools, reverse binaries, publish research, and keep things weird.</p>
          <p className="hero-description">
          </p>
          <AgeTimelapse age={age} />
          <div className="hero-actions">
            <a href="#offers" className="primary-button">
              Paid Work
              <Sparkles size={17} />
            </a>
            <a href="#social" className="secondary-button">
              Social
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        <div className="hero-side animate-fadeUp">
          <div className="meme-card">
            <img src={asset('assets/ida-win-meme.png')} alt="Nah, IDA win meme" />
          </div>
          <div className="hero-note">
            <strong>Internet should be a better place ;)</strong>
            <span>Let's make it happen. Bring the idea, I bring the debugger.</span>
          </div>
        </div>
      </div>

      <div className="hero-tech mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
        {languages.map((item) => (
          <TechBadge key={item.name} item={item} compact />
        ))}
      </div>
    </section>
  );
}

function AgeTimelapse({ age }) {
  return (
    <div className="age-timelapse">
      <div className="age-title">
        <span>age</span>
        <strong>{age.years}</strong>
        <em>years online</em>
      </div>
      <div className="age-bar">
        <i style={{ width: `${age.progress}%` }} />
      </div>
      <div className="age-meta">
        <span>{age.wholeYears} full years</span>
        <span>{age.days.toLocaleString()} days since 14 nov 2007</span>
      </div>
    </div>
  );
}

function TechBadge({ item, compact = false }) {
  return (
    <div className={compact ? 'tech-badge tech-badge-compact' : 'tech-badge'}>
      <img src={item.image} alt={`${item.name} logo`} />
      <span>{item.name}</span>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="mini-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Reveal({ children, className = '' }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

function Specialties() {
  return (
    <section id="expertise" className="relative z-10 px-5 py-24">
      <Reveal className="mx-auto max-w-7xl">
        <SectionLabel icon={ShieldCheck} text="Expertise" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass-card group">
              <Icon className="mb-8 text-signal transition duration-300 group-hover:scale-110" size={28} />
              <h2 className="text-xl font-semibold text-[#e8dcc8]">{title}</h2>
              <p className="mt-4 leading-7 text-[#cfc2b0]">{text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Toolkit() {
  return (
    <section id="toolkit" className="relative z-10 px-5 py-24">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel icon={Wrench} text="Toolkit" />
          <h2 className="mt-7 text-4xl font-semibold text-[#e8dcc8]">Some tools that make my work a lot more easier LOL</h2>
          <p className="mt-5 max-w-xl leading-8 text-[#cfc2b0]">
            This make me comfortable when working on projects that requires reversing and low level programming.
          </p>
        </div>
        <div className="tool-badge-grid grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div key={tool.name} className="tool-row" style={{ animationDelay: `${index * 70}ms` }}>
              {tool.image ? <img src={tool.image} alt={`${tool.name} logo`} /> : <span className="tool-wordmark">CN</span>}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function SocialHub({ discord }) {
  const status = statusPalette[discord.status] || statusPalette.unknown;

  return (
    <section id="social" className="relative z-10 px-5 py-24">
      <Reveal className="mx-auto max-w-7xl">
        <SectionLabel icon={Radio} text="Live Surface" />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="discord-panel">
            <img className="panel-brand panel-brand-discord" src={asset('assets/brands/discord.svg')} alt="" />
            <div className="discord-visual">
              <div className="discord-rings" />
              <img src={discord.avatar} alt={`${profile.alias} Discord avatar`} />
              <span className="status-dot" style={{ '--status-color': status.color }} />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2>{profile.alias}</h2>
                <span className="live-pill" style={{ '--status-color': status.color }}>
                  {status.label}
                </span>
              </div>
              <p className="mt-3 font-mono text-sm text-[#cfc2b0]">@{profile.discordHandle}</p>
              <p className="mt-5 text-lg leading-8 text-[#e8dcc8]">{discord.activity}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <DiscordSignal image={asset('assets/brands/discord.svg')} icon={MessageCircle} label="Discord" value="Contact" />
                <DiscordSignal icon={Headphones} label="Presence" value={discord.source === 'lanyard' ? 'Live API' : 'Fallback'} />
                <DiscordSignal icon={Activity} label="Refresh" value="30s" />
              </div>
            </div>
          </article>

          <article className="uc-panel">
            <div className="uc-orbit">
              <img src={asset('assets/brands/unknowncheats.png')} alt="UnknownCheats logo" />
              <span />
              <span />
              <span />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">UnknownCheats</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#e8dcc8]">{profile.unknownCheatsName}</h2>
            <p className="mt-5 leading-8 text-[#cfc2b0]">
              I post here really often, so if you want to keep up with my latest work and releases, plus source codes, you can check my profile out.
            </p>
            <a className="profile-link mt-7" href={profile.unknownCheatsUrl} target="_blank" rel="noreferrer">
              Open Profile
              <ExternalLink size={16} />
            </a>
          </article>
        </div>

        <div className="support-band mt-5">
          <Sparkles className="text-signal" size={22} />
          <div>
            <strong>Not exactly corporate. Good.</strong>
            <span>Why should technical work look boring?</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DiscordSignal({ icon: Icon, image, label, value }) {
  return (
    <div className="discord-signal">
      {image ? <img src={image} alt="" /> : <Icon size={18} />}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Offers() {
  return (
    <section id="offers" className="relative z-10 px-5 py-24">
      <Reveal className="mx-auto max-w-7xl">
        <SectionLabel icon={Sparkles} text="Open for paid work" />
        <div className="offer-hero mt-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">I'm Open to any Proposal</p>
            <h2 className="mt-5 text-4xl font-semibold text-[#e8dcc8] md:text-6xl">
              Do you need help, got a project or need coaching?
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-[#cfc2b0]">
              Yes, I do paid work on the side, and I also enjoy supporting the community through releases and notes on UnknownCheats.
              If you have a project in mind, reach me on Discord. I usually answer DMs when I am online.
            </p>
          </div>
          <DemoMenu />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {offers.map(({ icon: Icon, title, text }) => (
            <article className="offer-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function DemoMenu() {
  return (
    <div className="demo-menu" aria-label="Interface prototype demo">
      <div className="demo-topbar">
        <strong>Could be your project</strong>
        <select aria-label="Profile">
          <option>research profile</option>
        </select>
        <select aria-label="Mode">
          <option>reverse mode</option>
        </select>
        <button type="button">Save</button>
      </div>
      <div className="demo-body">
        <aside className="demo-sidebar">
          {['Trace', 'Memory', 'Reports', 'Overlay', 'Modules', 'Config'].map((item, index) => (
            <span className={index === 0 ? 'active' : ''} key={item}>{item}</span>
          ))}
        </aside>
        <div className="demo-content">
          <div className="demo-section-title">Interface Prototype</div>
          <div className="demo-grid">
            {demoRows.map((row) => (
              <div className="demo-row" key={row.label}>
                <span className={row.active ? 'demo-check active' : 'demo-check'} />
                <p>{row.label}</p>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
          <div className="demo-sliders">
            <DemoSlider label="Scan smoothness" value="62%" />
            <DemoSlider label="Reaction window" value="38%" />
            <DemoSlider label="Confidence threshold" value="74%" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoSlider({ label, value }) {
  return (
    <div className="demo-slider">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <i style={{ '--value': value }} />
    </div>
  );
}

function Projects() {
  return (
    <section id="work" className="relative z-10 px-5 py-24">
      <Reveal className="mx-auto max-w-7xl">
        <SectionLabel icon={Terminal} text="Selected Work" />
        <a className="publication-card mt-8" href={latestPublication.url} target="_blank" rel="noreferrer">
          <div>
            <span>Latest publication / {latestPublication.platform}</span>
            <h2>{latestPublication.title}</h2>
            <p>{latestPublication.subtitle}</p>
          </div>
          <ExternalLink size={20} />
        </a>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-signal">{project.tag}</span>
              <h2 className="mt-6 text-2xl font-semibold text-[#e8dcc8]">{project.title}</h2>
              <p className="mt-4 leading-7 text-[#cfc2b0]">{project.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 pb-16">
      <Reveal className="contact-card mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center">
        <div>
          <SectionLabel icon={Fingerprint} text="Thanks for reading" />
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-[#e8dcc8]">
            As always, feel free to reach me out if you have something in mind.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className="secondary-button"
            href={profile.discordUserId ? `https://discord.com/users/${profile.discordUserId}` : '#social'}
            target={profile.discordUserId ? '_blank' : undefined}
            rel={profile.discordUserId ? 'noreferrer' : undefined}
          >
            Discord
            <img className="button-logo" src={asset('assets/brands/discord.svg')} alt="" />
          </a>
          <a className="secondary-button" href={profile.unknownCheatsUrl} target="_blank" rel="noreferrer">
            UC
            <img className="button-logo" src={asset('assets/brands/unknowncheats.png')} alt="" />
          </a>
          <a className="secondary-button" href="mailto:contact@example.com">
            Email
            <Mail size={17} />
          </a>
          <a className="secondary-button" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
            <img className="button-logo" src={asset('assets/brands/github.svg')} alt="" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function SectionLabel({ icon: Icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-steel">
      <Icon size={15} className="text-signal" />
      {text}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
