import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Download, ChevronRight, Github, Linkedin, Mail,
  Phone, MapPin, ExternalLink, Code2, Palette, Database,
  Cpu, Briefcase, GraduationCap, Award, Globe,
  Send, Sparkles, Sun, Moon, Server, CheckCircle2, Play, // <-- Ajout de Play
} from 'lucide-react';
import { i18n, type Lang } from '@/i18n';

const iconMap: Record<string, ReactNode> = {
  code: <Code2 size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  palette: <Palette size={20} />,
};

const flags: Record<Lang, string> = { en: '🇬🇧', fr: '🇫🇷', ar: '🇩🇿' };

// Les 4 projets spécifiques avec la structure pour la vidéo et la modale
const navProjects = [
  {
    id: 'nav-market',
    title: 'Nav Market',
    category: 'E-Commerce',
    color: 'from-orange-500 to-amber-500', // Pour le glow arrière
    themeColor: '#f97316', // Pour la bordure de la modale
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    shortDesc: 'Application e-commerce complète pour la gestion des commandes.',
    longDescription: "Nav Market est une application révolutionnaire conçue pour redéfinir l'expérience e-commerce.\n\nL'application permet aux administrateurs de gérer les commandes, suivre les livraisons et analyser les statistiques en temps réel. Elle intègre des notifications push fluides, un système de paiement sécurisé, et un tableau de bord analytique avancé pour surveiller la croissance.\n\nIdéal pour les entreprises cherchant à digitaliser leur processus de vente rapidement.",
    tech: ['React Native', 'Node.js', 'MongoDB', 'Redux']
  },
  {
    id: 'nav-food',
    title: 'Nav Food',
    category: 'Food Delivery',
    color: 'from-red-500 to-rose-500',
    themeColor: '#ef4444',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    shortDesc: 'Plateforme de livraison de repas rapide et intuitive.',
    longDescription: "Une application de livraison de repas rapide et efficace reliant les utilisateurs affamés à leurs restaurants préférés.\n\nDes dizaines de restaurants partenaires sont intégrés. L'application propose un suivi GPS en temps réel du livreur, une gestion des favoris, et un système d'évaluation post-commande pour garantir la qualité du service.",
    tech: ['React Native', 'Firebase', 'Google Maps API']
  },
  {
    id: 'nav-restaurant',
    title: 'Nav Restaurant',
    category: 'Management',
    color: 'from-yellow-400 to-amber-500',
    themeColor: '#eab308',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    shortDesc: 'Interface de gestion centralisée pour les restaurateurs.',
    longDescription: "La tour de contrôle pour les gérants de restaurants.\n\nCette solution SaaS permet d'accepter les commandes entrantes (depuis Nav Food), de gérer les menus dynamiquement, d'attribuer des rôles au personnel et de surveiller les stocks. L'interface est pensée pour être utilisée sur tablette directement en cuisine ou en salle.",
    tech: ['React', 'Express', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'nav-delivery',
    title: 'Nav Delivery',
    category: 'Logistics',
    color: 'from-blue-500 to-cyan-500',
    themeColor: '#3b82f6',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    shortDesc: 'Outil logistique dédié aux livreurs pour optimiser les tournées.',
    longDescription: "L'application compagnon incontournable pour les coursiers.\n\nNav Delivery optimise les trajets grâce à un algorithme de routage intelligent. Les livreurs peuvent accepter des courses, communiquer avec les clients et les restaurants, et suivre leurs gains journaliers directement depuis leur portefeuille numérique intégré.",
    tech: ['React Native', 'Socket.io', 'NestJS']
  }
];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sent, setSent] = useState(false);
  
  // Nouvel état pour gérer la modale vidéo
  const [selectedVideoProj, setSelectedVideoProj] = useState<typeof navProjects[0] | null>(null);

  const t = i18n[lang];
  const isRtl = t.dir === 'rtl';

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.exp },
    { href: '#research', label: t.nav.research },
    { href: '#dev', label: t.nav.dev },
    { href: '#design', label: t.nav.design },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300 ${isRtl ? 'font-arabic' : ''}`}
      dir={t.dir}
    >
      {/* Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-400/20 dark:bg-slate-800/40 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">N</div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Nassim</span>
          </a>

          <nav className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link.label}</a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 rounded-full p-1 border border-slate-200 dark:border-white/5 transition-colors">
              {(['en', 'fr', 'ar'] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`w-8 h-8 flex items-center justify-center rounded-full text-lg transition-all ${lang === l ? 'bg-white dark:bg-slate-800 shadow-sm scale-110' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                  {flags[l]}
                </button>
              ))}
            </div>

            <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium transition-colors">
              <Download size={16} className="text-blue-600 dark:text-blue-400" />
              <span>{t.nav.cv}</span>
            </a>
          </div>

          <button className="lg:hidden text-slate-600 dark:text-slate-300" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 overflow-hidden">
              <div className="px-4 py-6 flex flex-col gap-4">
                <div className="flex justify-center gap-4 items-center">
                  <button onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light'); setMenuOpen(false); }} className="p-2 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300">
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  </button>
                  <div className="flex bg-slate-100 dark:bg-slate-950 rounded-full p-1 border border-slate-200 dark:border-white/5 gap-1">
                    {(['en', 'fr', 'ar'] as Lang[]).map((l) => (
                      <button key={l} onClick={() => { setLang(l); setMenuOpen(false); }} className={`w-10 h-10 flex items-center justify-center rounded-full text-xl transition-all ${lang === l ? 'bg-white dark:bg-slate-800 shadow-sm' : 'opacity-50 grayscale'}`}>
                        {flags[l]}
                      </button>
                    ))}
                  </div>
                </div>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-center text-lg font-medium text-slate-700 dark:text-slate-300">{link.label}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-20">
        {/* HERO */}
        <section className="min-h-[90vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-medium">
              <GraduationCap size={16} />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {t.hero.greeting} <span className="text-slate-900 dark:text-white font-bold">{t.hero.name}</span>
              </p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">{t.hero.titlePart1}</span> {t.hero.titlePart2} &<br />
                {t.hero.titlePart3} <span className="text-cyan-600 dark:text-cyan-400">{t.hero.titlePart4}</span>.
              </h1>
              <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 pt-4">{t.hero.title}</p>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.hero.desc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <a href="#dev" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/30">
                {t.hero.cta1} {isRtl ? <ChevronRight className="rotate-180" size={20} /> : <ChevronRight size={20} />}
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold transition-colors">
                {t.hero.cta2}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex justify-center gap-6 pt-8">
              <a href="https://github.com/Nassim-RZ" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/belkacem-rezzouk-77a0b229b" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://mostaql.com/u/nassim_rz" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold flex items-center">مستقل</a>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '+4', lbl: t.stats.exp, col: 'text-blue-600 dark:text-blue-400' },
              { val: '+10', lbl: t.stats.proj, col: 'text-slate-700 dark:text-slate-300' },
              { val: '+15', lbl: t.stats.tech, col: 'text-slate-700 dark:text-slate-300' },
              { val: '4', lbl: t.stats.qual, col: 'text-blue-600 dark:text-blue-400' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className={`text-4xl font-black ${s.col}`}>{s.val}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-semibold uppercase tracking-wider">{s.lbl}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT & LANGUAGES */}
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">{t.about.title}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t.about.subtitle}</h3>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">{t.about.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.pillars.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-blue-400/50 dark:hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {i === 0 ? <Server /> : i === 1 ? <Code2 /> : i === 2 ? <Cpu /> : <Palette />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{p.t}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-2"><Globe className="text-blue-600 dark:text-blue-400" /> {t.about.langTitle}</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {t.about.langs.map((l, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">{l.n}</span>
                    <span className="text-blue-600 dark:text-blue-400">{l.l}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.p}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 px-4 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">{t.exp.title}</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t.exp.subtitle}</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-5 before:-translate-x-1/2 md:before:left-1/2 before:h-full before:w-0.5 before:bg-slate-300 dark:before:bg-slate-800">
              {t.exp.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative flex md:items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-600 text-white shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg shadow-blue-500/20 z-10">
                    <Briefcase size={16} />
                  </div>
                  <div className={`w-[calc(100%-3rem)] ml-6 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'} p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-blue-400/50 dark:hover:border-blue-500/30 shadow-sm transition-colors`}>
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 w-fit">{item.date}</span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h4>
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">{item.comp}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 px-2 py-1 rounded text-slate-700 dark:text-slate-300">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH & ACADEMIC */}
        <section id="research" className="py-24 px-4 max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">{t.research.title}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t.research.subtitle}</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 flex flex-col justify-center space-y-6 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-white/10 blur-[60px] pointer-events-none" />
              <GraduationCap size={48} className="text-blue-200" />
              <div>
                <h4 className="text-3xl font-black mb-2">{t.research.phdTitle}</h4>
                <p className="text-blue-200 font-medium mb-6">{t.research.phdMeta}</p>
                <p className="text-blue-50/90 leading-relaxed text-lg">{t.research.phdDesc}</p>
              </div>
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              {t.research.deg.map((deg, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h5 className="font-bold text-slate-900 dark:text-white text-lg">{deg.t}</h5>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">{deg.d}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">{deg.i}</p>
                  {deg.h && <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded"><Award size={12} /> {deg.h}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEV PROJECTS (Modifié pour la vidéo et l'interaction Hover) */}
        <section id="dev" className="py-24 px-4 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">PROJETS VEDETTES</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">Nav Ecosystem</h3>
              <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">Clique sur un projet pour voir la vidéo de démonstration.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {navProjects.map((proj) => (
                <motion.div 
                  key={proj.id} 
                  whileHover={{ y: -5 }} 
                  onClick={() => setSelectedVideoProj(proj)}
                  className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 overflow-hidden flex flex-col justify-between space-y-6 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                >
                  {/* Glow en arrière-plan */}
                  <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${proj.color} blur-3xl pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Overlay Noir & Icône Play au Hover */}
                  <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="ml-1" size={32} fill="currentColor" />
                    </div>
                  </div>

                  {/* Contenu normal de la carte */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">{proj.category}</span>
                      <Code2 className="text-slate-400 group-hover:text-white transition-colors relative z-30" size={20} />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 dark:text-white">{proj.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{proj.shortDesc}</p>
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-xs font-mono">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN SHOWCASE */}
        <section id="design" className="py-24 px-4 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">{t.design.title}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t.design.subtitle}</h3>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">{t.design.desc}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Object.entries(t.design.filters).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${filter === k ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-blue-600 dark:hover:text-white shadow-sm'}`}
              >
                {v}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {t.design.items.filter((item) => filter === 'all' || item.c === filter).map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={item.t}
                  className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 overflow-hidden hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all flex flex-col shadow-sm hover:shadow-md"
                >
                  <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur text-blue-700 dark:text-blue-300 text-xs font-bold border border-slate-200 dark:border-blue-500/30">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{item.t}</h4>
                    <a href="https://mostaql.com/u/nassim_rz" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 w-fit transition-colors">
                      <span>Mostaql Portfolio</span> <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* SKILLS & CERTIFICATIONS */}
        <section id="skills" className="py-24 px-4 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">{t.skills.title}</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t.skills.subtitle}</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.skills.cats.map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-white/5 pb-4">
                    {iconMap[cat.i]}
                    <h4 className="font-bold text-slate-900 dark:text-white">{cat.n}</h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.l.map((skill, j) => (
                      <li key={j} className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white text-center flex items-center justify-center gap-2 mb-8">
                <Award className="text-blue-600 dark:text-blue-400" /> {t.skills.certsTitle}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.skills.certs.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5">
                    <CheckCircle2 className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{cert.t}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cert.i} · {cert.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & FOOTER */}
        <section id="contact" className="py-24 px-4 max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">{t.contact.subtitle}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t.contact.title}</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{t.contact.info}</h4>
              <div className="space-y-4">
                {[
                  { icon: <Mail />, l: t.contact.emailLbl, v: 'belkacem.rezzouk@gmail.com', href: 'mailto:belkacem.rezzouk@gmail.com' },
                  { icon: <Phone />, l: t.contact.phoneLbl, v: '+213 796 02 75 50', href: 'tel:+213796027550' },
                  { icon: <MapPin />, l: t.contact.locLbl, v: t.contact.loc, href: '#' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{item.l}</p>
                      <a href={item.href} className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.v}</a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.contact.socials}</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/Nassim-RZ" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all shadow-sm">
                    <Github size={18} /> <span className="font-medium text-sm">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/belkacem-rezzouk-77a0b229b" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all shadow-sm">
                    <Linkedin size={18} /> <span className="font-medium text-sm">LinkedIn</span>
                  </a>
                  <a href="https://mostaql.com/u/nassim_rz" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all shadow-sm">
                    <span className="font-bold text-sm">مستقل Mostaql</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400">{t.contact.form.n}</label>
                    <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400">{t.contact.form.e}</label>
                    <input type="email" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400">{t.contact.form.s}</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400">{t.contact.form.m}</label>
                  <textarea rows={4} required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" />
                </div>
                <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                  <Send size={18} /> <span>{t.contact.form.btn}</span>
                </button>
                <AnimatePresence>
                  {sent && (
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 pt-2">
                      <CheckCircle2 size={16} /> {t.contact.form.sent}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-950 transition-colors">
        <p>© {new Date().getFullYear()} Belkacem Nassim REZZOUK. All rights reserved.</p>
        <p className="mt-1">{t.footer}</p>
      </footer>

      {/* LA MODALE VIDÉO (SPLIT-VIEW) */}
      <AnimatePresence>
        {selectedVideoProj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 dark:bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideoProj(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative shadow-2xl"
              style={{ borderTop: `4px solid ${selectedVideoProj.themeColor}` }}
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setSelectedVideoProj(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Zone Vidéo (Fixe en haut, responsive aspect ratio) */}
              <div className="w-full aspect-video bg-black relative shrink-0">
                <iframe
                  src={`${selectedVideoProj.videoUrl}?autoplay=1&mute=1`}
                  title={selectedVideoProj.title}
                  className="w-full h-full absolute inset-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              {/* Zone Texte (Scrollable en bas) */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white" style={{ color: selectedVideoProj.themeColor }}>
                    {selectedVideoProj.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-bold text-slate-600 dark:text-slate-300">
                    {selectedVideoProj.category}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed mb-6">
                  {selectedVideoProj.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  {selectedVideoProj.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}