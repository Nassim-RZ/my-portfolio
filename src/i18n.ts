export type Lang = 'en' | 'fr' | 'ar';

export type DesignType = 'branding' | 'web' | 'mobile' | 'social';

interface Nav {
  about: string;
  exp: string;
  research: string;
  dev: string;
  design: string;
  skills: string;
  contact: string;
  cv: string;
}
interface Hero {
  badge: string;
  greeting: string;
  name: string;
  mainTitle: string;
  titlePart1: string;
  titlePart2: string;
  titlePart3: string;
  titlePart4: string;
  title: string;
  desc: string;
  cta1: string;
  cta2: string;
}
interface Stats {
  exp: string;
  proj: string;
  tech: string;
  qual: string;
}
interface Pillar {
  t: string;
  d: string;
}
interface LangItem {
  n: string;
  l: string;
  p: number;
}
interface About {
  title: string;
  subtitle: string;
  desc: string;
  pillars: Pillar[];
  langTitle: string;
  langs: LangItem[];
}
interface ExpItem {
  role: string;
  comp: string;
  date: string;
  desc: string;
  tags: string[];
}
interface Exp {
  title: string;
  subtitle: string;
  items: ExpItem[];
}
interface Degree {
  t: string;
  i: string;
  d: string;
  h?: string;
}
interface Research {
  title: string;
  subtitle: string;
  phdTitle: string;
  phdMeta: string;
  phdDesc: string;
  deg: Degree[];
}
interface DevItem {
  t: string;
  d: string;
  c: string;
  color: string;
  border: string;
  tech: string[];
}
interface Dev {
  title: string;
  subtitle: string;
  view: string;
  items: DevItem[];
}
interface DesignItem {
  t: string;
  tag: string;
  c: string;
  type: DesignType;
  gradient: string;
}
interface Design {
  title: string;
  subtitle: string;
  desc: string;
  filters: Record<string, string>;
  items: DesignItem[];
}
interface SkillCat {
  n: string;
  i: string;
  l: string[];
}
interface SkillCert {
  t: string;
  i: string;
  d: string;
}
interface Skills {
  title: string;
  subtitle: string;
  cats: SkillCat[];
  certsTitle: string;
  certs: SkillCert[];
}
interface Contact {
  title: string;
  subtitle: string;
  info: string;
  loc: string;
  emailLbl: string;
  phoneLbl: string;
  locLbl: string;
  socials: string;
  form: { n: string; e: string; s: string; m: string; btn: string; sent: string };
}
interface Translation {
  dir: 'ltr' | 'rtl';
  nav: Nav;
  hero: Hero;
  stats: Stats;
  about: About;
  exp: Exp;
  research: Research;
  dev: Dev;
  design: Design;
  skills: Skills;
  contact: Contact;
  footer: string;
}

export const i18n: Record<Lang, Translation> = {
  en: {
    dir: 'ltr',
    nav: { about: 'About', exp: 'Experience', research: 'Research', dev: 'Dev', design: 'Design', skills: 'Skills', contact: 'Contact', cv: 'Download CV' },
    hero: { badge: 'PhD Researcher in Artificial Intelligence', greeting: "Hello, I'm", name: 'Nassim', titlePart1: "Full-Stack", titlePart2: "Developer", titlePart3: "Graphic", titlePart4: "Designer", mainTitle: "Full-Stack Developer & Graphic Designer", title: 'Advanced Systems Engineer & Software Architect', desc: 'Bridging complex information systems, modern full-stack development, and elite UI/UX graphic design to craft intelligent digital experiences.', cta1: 'Explore Projects', cta2: 'Get in Touch' },
    stats: { exp: 'Years Experience', proj: 'Projects Delivered', tech: 'Mastered Techs', qual: 'Core Domains' },
    about: {
      title: 'Profile & Vision', subtitle: 'The Quadruple Threat',
      desc: 'A rare hybrid approach combining rigorous AI academic research with multi-disciplinary field expertise in systems engineering, fullstack dev, and design.',
      pillars: [
        { t: 'Systems & Networks', d: 'Architecting and maintaining critical, large-scale IT infrastructure.' },
        { t: 'Fullstack & Mobile', d: 'Building responsive, modern applications with React, Node.js & TypeScript.' },
        { t: 'AI Researcher', d: 'PhD candidate focusing on Artificial Intelligence and Software Engineering.' },
        { t: 'UI/UX & Graphic Lead', d: 'Crafting premium brand identities and high-conversion user interfaces.' },
      ],
      langTitle: 'Language Proficiency',
      langs: [
        { n: 'Arabic', l: 'Native', p: 100 },
        { n: 'French', l: 'Fluent / Professional', p: 100 },
        { n: 'English', l: 'Fluent / Professional', p: 90 },
      ],
    },
    exp: {
      title: 'Professional Journey', subtitle: 'Work & Enterprise Experience',
      items: [
        { role: 'Systems & Networks Engineer', comp: 'Large-Scale Enterprise Infrastructure', date: '2024 - Present', desc: 'Managing, securing, and optimizing critical IT infrastructure and network architecture for a major national enterprise.', tags: ['Systems Admin', 'Networks', 'IT Infrastructure', 'Security'] },
        { role: 'Frontend / Fullstack Web Developer & Designer', comp: 'Koudri Innovations Group (KIG)', date: 'June 2024 - Present', desc: 'Designing and building high-performance web platforms, UI/UX design systems, corporate visual assets, and fullstack application features.', tags: ['React', 'TypeScript', 'Node.js', 'UI/UX'] },
        { role: 'Freelance Fullstack Developer & Graphic Designer', comp: 'Mostaql & Independent Clients', date: '2022 - Present', desc: 'Delivering end-to-end client solutions: web apps, mobile interfaces, social media visual campaigns, and brand identity design.', tags: ['React Native', 'Figma', 'Express', 'MongoDB'] },
        { role: 'Fullstack Web Contributor (Image Time App)', comp: 'Hsoub Academy', date: 'Nov 2023 - Dec 2023', desc: 'Architected and built interactive features for image processing and web application management.', tags: ['React.js', 'Node.js', 'REST APIs'] },
      ],
    },
    research: {
      title: 'Academic & Research', subtitle: 'PhD & Academic Excellence',
      phdTitle: 'PhD Candidate in Artificial Intelligence',
      phdMeta: 'Software Engineering Department | Admitted via Competitive Exam',
      phdDesc: 'Research focused on AI-assisted decision-making and analyzing student engagement patterns to improve first-year success rates in higher education.',
      deg: [
        { t: "Master's Degree - Advanced IS Engineering", i: 'Hassiba Ben Bouali University', d: 'June 2023', h: 'Graduated with Distinction' },
        { t: "Bachelor's Degree - Information Systems", i: 'Hassiba Ben Bouali University', d: 'Sept 2021' },
        { t: 'Initial Computer Science Curriculum', i: 'USTHB, Algiers', d: '2017 - 2019' },
      ],
    },
    dev: {
      title: 'Development', subtitle: 'Engineering & Projects',
      view: 'View Case',
      items: [
        { t: 'KIG Corporate Platform', d: 'A high-performance multi-page web platform with a custom design system, CMS-driven content, and a realtime notification layer.', c: 'Fullstack', color: 'from-blue-500 to-cyan-500', border: 'border-blue-200 dark:border-blue-500/20', tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'] },
        { t: 'Image Time App', d: 'An interactive image-processing web app with filters, batch operations, and a responsive gallery built during the Hsoub Academy program.', c: 'Web App', color: 'from-teal-500 to-emerald-500', border: 'border-teal-200 dark:border-teal-500/20', tech: ['React.js', 'Node.js', 'REST APIs', 'Canvas'] },
        { t: 'Realtime Collaboration Suite', d: 'A realtime chat and presence application with rooms, typing indicators, and JWT-secured authentication.', c: 'Realtime', color: 'from-sky-500 to-blue-600', border: 'border-sky-200 dark:border-sky-500/20', tech: ['Socket.io', 'WebSockets', 'Express', 'JWT'] },
        { t: 'Freelance Mobile Suite', d: 'A set of cross-platform mobile apps delivered for Mostaql clients, covering fintech onboarding and fitness tracking flows.', c: 'Mobile', color: 'from-cyan-500 to-teal-500', border: 'border-cyan-200 dark:border-cyan-500/20', tech: ['React Native', 'Firebase', 'Expo'] },
      ],
    },
    design: {
      title: 'Design', subtitle: 'UI/UX & Graphic Design',
      desc: 'A selection of brand identities, interface designs, and social media campaigns crafted for clients and internal products.',
      filters: { all: 'All Work', branding: 'Branding', web: 'Web & UI', social: 'Social Media', mobile: 'Mobile' },
      items: [
        { t: 'Aurora Brand Identity', tag: 'Branding', c: 'branding', type: 'branding', gradient: 'from-blue-600 to-cyan-500' },
        { t: 'Nexus SaaS Dashboard', tag: 'UI/UX', c: 'web', type: 'web', gradient: 'from-sky-500 to-blue-600' },
        { t: 'FinTrack Mobile App', tag: 'Mobile UI', c: 'mobile', type: 'mobile', gradient: 'from-cyan-500 to-blue-600' },
        { t: 'Social Campaign 2024', tag: 'Social', c: 'social', type: 'social', gradient: 'from-rose-500 to-orange-500' },
        { t: 'E-Commerce Experience', tag: 'Web App', c: 'web', type: 'web', gradient: 'from-teal-500 to-emerald-500' },
        { t: 'FitLife Mobile UI', tag: 'Mobile UI', c: 'mobile', type: 'mobile', gradient: 'from-emerald-500 to-teal-600' },
        { t: 'Event Poster Series', tag: 'Branding', c: 'branding', type: 'branding', gradient: 'from-slate-600 to-slate-800' },
        { t: 'Instagram Visual Set', tag: 'Social', c: 'social', type: 'social', gradient: 'from-amber-500 to-rose-500' },
      ],
    },
    skills: {
      title: 'Technical Stack', subtitle: 'Skills & Certifications',
      cats: [
        { n: 'Front-End', i: 'code', l: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
        { n: 'Back-End', i: 'server', l: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
        { n: 'Data & Real-time', i: 'database', l: ['PostgreSQL', 'MongoDB', 'Firebase', 'Socket.io', 'WebSockets'] },
        { n: 'Tools & Design', i: 'palette', l: ['Git & GitHub', 'Figma', 'Photoshop', 'Illustrator', 'React Native'] },
      ],
      certsTitle: 'Professional Certifications',
      certs: [
        { t: 'Programming Foundations with JS, HTML, CSS', i: 'Duke University (With Honors)', d: 'Sept 2022' },
        { t: 'Responsive Web Design', i: 'University of London', d: 'Sept 2022' },
        { t: 'JavaScript Application Development', i: 'Hsoub Academy', d: 'Jan 2024' },
        { t: 'TCF (C1 Level)', i: 'France Éducation international', d: 'Dec 2024' },
      ],
    },
    contact: {
      title: "Let's Build Something", subtitle: 'Get in Touch',
      info: 'Contact Information', loc: 'Chlef, Algeria',
      emailLbl: 'Email', phoneLbl: 'Phone', locLbl: 'Location', socials: 'Socials',
      form: { n: 'Full Name', e: 'Email Address', s: 'Subject', m: 'Your Message', btn: 'Send Message', sent: 'Message sent! I will get back to you soon.' },
    },
    footer: 'Designed & built with care. Available for select projects.',
  },

  fr: {
    dir: 'ltr',
    nav: { about: 'À Propos', exp: 'Expérience', research: 'Recherche', dev: 'Dev', design: 'Design', skills: 'Compétences', contact: 'Contact', cv: 'Télécharger CV' },
    hero: { badge: 'Chercheur Doctorant en Intelligence Artificielle', greeting: 'Bonjour, je suis', name: 'Nassim', titlePart1: "Développeur", titlePart2: "Full-Stack", titlePart3: "Designer", titlePart4: "Graphique", mainTitle: "Développeur Full-Stack & Designer Graphique", title: 'Ingénieur Systèmes Avancés & Architecte Logiciel', desc: "À la croisée des systèmes d'information complexes, du développement full-stack moderne et du design graphique UI/UX pour façonner des expériences numériques intelligentes.", cta1: 'Explorer les projets', cta2: 'Me contacter' },
    stats: { exp: "Années d'expérience", proj: 'Projets réalisés', tech: 'Technologies maîtrisées', qual: "Domaines d'Expertise" },
    about: {
      title: 'Profil & Vision', subtitle: 'La Quadruple Casquette',
      desc: "Combinaison unique entre la rigueur de la recherche académique en IA et l'expertise terrain pluridisciplinaire en systèmes, dev et design.",
      pillars: [
        { t: 'Systèmes & Réseaux', d: "Architecture, maintenance et sécurité d'infrastructures informatiques à grande échelle." },
        { t: 'Fullstack & Mobile', d: "Développement d'applications modernes et performantes (React, Node.js)." },
        { t: 'Chercheur IA', d: "Doctorant spécialisé dans l'IA et son application au Génie Logiciel." },
        { t: 'Lead UI/UX & Design', d: "Création d'identités visuelles haut de gamme et d'interfaces ultra-convertissantes." },
      ],
      langTitle: 'Compétences Linguistiques',
      langs: [
        { n: 'Arabe', l: 'Langue maternelle', p: 100 },
        { n: 'Français', l: 'Courant / Bilingue', p: 100 },
        { n: 'Anglais', l: 'Courant / Professionnel', p: 90 },
      ],
    },
    exp: {
      title: 'Parcours Professionnel', subtitle: 'Expériences en Entreprise & Freelance',
      items: [
        { role: 'Ingénieur Systèmes et Réseaux', comp: 'Infrastructure Technologique Majeure', date: '2024 - Présent', desc: "Gestion, sécurisation et optimisation de l'infrastructure IT et de l'architecture réseau pour une grande entreprise nationale.", tags: ['Admin Systèmes', 'Réseaux', 'Infra IT', 'Sécurité'] },
        { role: 'Frontend / Fullstack Web Developer & Designer', comp: 'Koudri Innovations Group (KIG)', date: 'Juin 2024 - Présent', desc: 'Développement de plateformes web interactives, conception de Design Systems UI/UX, création de visuels de marque et fonctionnalités fullstack.', tags: ['React', 'TypeScript', 'Node.js', 'UI/UX'] },
        { role: 'Développeur Fullstack & Graphic Designer Freelance', comp: 'Mostaql & Clients Indépendants', date: '2022 - Présent', desc: 'Réalisation complète de projets clients : apps web/mobile, campagnes visuelles réseaux sociaux et identités visuelles sur-mesure.', tags: ['React Native', 'Figma', 'Express', 'MongoDB'] },
        { role: 'Contributeur Dev Web (Image Time App)', comp: 'Hsoub Academy', date: 'Nov 2023 - Déc 2023', desc: "Conception et implémentation de fonctionnalités pour le traitement d'images et la gestion d'applications web réactives.", tags: ['React.js', 'Node.js', 'REST APIs'] },
      ],
    },
    research: {
      title: 'Recherche & Académique', subtitle: 'Doctorat & Parcours Universitaire',
      phdTitle: 'Doctorant en Intelligence Artificielle',
      phdMeta: 'Département Génie Logiciel | Admis sur concours',
      phdDesc: "Recherche axée sur l'aide à la décision par l'IA et l'analyse des modèles d'engagement étudiant pour optimiser la réussite en première année universitaire.",
      deg: [
        { t: 'Master - Ingénierie des SI Avancés', i: 'Univ. Hassiba Ben Bouali', d: 'Juin 2023', h: 'Obtenu avec mention' },
        { t: 'Licence - Systèmes Informatiques', i: 'Univ. Hassiba Ben Bouali', d: 'Sept 2021' },
        { t: 'Parcours Universitaire Initial', i: 'USTHB, Alger', d: '2017 - 2019' },
      ],
    },
    dev: {
      title: 'Développement', subtitle: 'Ingénierie & Projets',
      view: 'Voir le projet',
      items: [
        { t: 'Plateforme Corporate KIG', d: 'Une plateforme web multi-pages performante avec design system personnalisé, contenu piloté par CMS et couche de notifications temps réel.', c: 'Fullstack', color: 'from-blue-500 to-cyan-500', border: 'border-blue-200 dark:border-blue-500/20', tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'] },
        { t: 'Application Image Time', d: "Une application web interactive de traitement d'image avec filtres, opérations par lot et galerie responsive, réalisée lors du programme Hsoub Academy.", c: 'Web App', color: 'from-teal-500 to-emerald-500', border: 'border-teal-200 dark:border-teal-500/20', tech: ['React.js', 'Node.js', 'REST APIs', 'Canvas'] },
        { t: 'Suite Collaborative Temps Réel', d: 'Une application de chat et de présence en temps réel avec salons, indicateurs de saisie et authentification sécurisée par JWT.', c: 'Temps Réel', color: 'from-sky-500 to-blue-600', border: 'border-sky-200 dark:border-sky-500/20', tech: ['Socket.io', 'WebSockets', 'Express', 'JWT'] },
        { t: 'Suite Mobile Freelance', d: "Un ensemble d'applications mobiles cross-platform livrées pour des clients Mostaql, couvrant l'onboarding fintech et le suivi fitness.", c: 'Mobile', color: 'from-cyan-500 to-teal-500', border: 'border-cyan-200 dark:border-cyan-500/20', tech: ['React Native', 'Firebase', 'Expo'] },
      ],
    },
    design: {
      title: 'Design', subtitle: 'UI/UX & Graphisme',
      desc: "Une sélection d'identités de marque, de conceptions d'interface et de campagnes réseaux sociaux réalisées pour des clients et des produits internes.",
      filters: { all: 'Tous', branding: 'Branding', web: 'Web & UI', social: 'Réseaux Sociaux', mobile: 'Mobile' },
      items: [
        { t: 'Identité de Marque Aurora', tag: 'Branding', c: 'branding', type: 'branding', gradient: 'from-blue-600 to-cyan-500' },
        { t: 'Dashboard SaaS Nexus', tag: 'UI/UX', c: 'web', type: 'web', gradient: 'from-sky-500 to-blue-600' },
        { t: 'App Mobile FinTrack', tag: 'UI Mobile', c: 'mobile', type: 'mobile', gradient: 'from-cyan-500 to-blue-600' },
        { t: 'Campagne Social 2024', tag: 'Social', c: 'social', type: 'social', gradient: 'from-rose-500 to-orange-500' },
        { t: 'Expérience E-Commerce', tag: 'Web App', c: 'web', type: 'web', gradient: 'from-teal-500 to-emerald-500' },
        { t: 'UI Mobile FitLife', tag: 'UI Mobile', c: 'mobile', type: 'mobile', gradient: 'from-emerald-500 to-teal-600' },
        { t: 'Série Affiches Événement', tag: 'Branding', c: 'branding', type: 'branding', gradient: 'from-slate-600 to-slate-800' },
        { t: 'Set Visuel Instagram', tag: 'Social', c: 'social', type: 'social', gradient: 'from-amber-500 to-rose-500' },
      ],
    },
    skills: {
      title: 'Stack Technique', subtitle: 'Compétences & Certifications',
      cats: [
        { n: 'Front-End', i: 'code', l: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
        { n: 'Back-End', i: 'server', l: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
        { n: 'Données & Temps Réel', i: 'database', l: ['PostgreSQL', 'MongoDB', 'Firebase', 'Socket.io', 'WebSockets'] },
        { n: 'Outils & Design', i: 'palette', l: ['Git & GitHub', 'Figma', 'Photoshop', 'Illustrator', 'React Native'] },
      ],
      certsTitle: 'Certifications Professionnelles',
      certs: [
        { t: 'Programming Foundations with JS, HTML, CSS', i: 'Duke University (Avec Mention)', d: 'Sept 2022' },
        { t: 'Responsive Web Design', i: 'University of London', d: 'Sept 2022' },
        { t: 'JavaScript Application Development', i: 'Hsoub Academy', d: 'Jan 2024' },
        { t: 'TCF (Niveau C1)', i: 'France Éducation international', d: 'Déc 2024' },
      ],
    },
    contact: {
      title: 'Construisons Ensemble', subtitle: 'Me Contacter',
      info: 'Informations de Contact', loc: 'Chlef, Algérie',
      emailLbl: 'Email', phoneLbl: 'Téléphone', locLbl: 'Localisation', socials: 'Réseaux',
      form: { n: 'Nom Complet', e: 'Adresse Email', s: 'Sujet', m: 'Votre Message', btn: 'Envoyer le Message', sent: 'Message envoyé ! Je vous répondrai rapidement.' },
    },
    footer: 'Conçu et développé avec soin. Disponible pour des projets sélectionnés.',
  },

  ar: {
    dir: 'rtl',
    nav: { about: 'نبذة عني', exp: 'الخبرة', research: 'البحث العلمي', dev: 'تطوير', design: 'تصميم', skills: 'المهارات', contact: 'اتصل بي', cv: 'تحميل السيرة' },
    hero: { badge: 'باحث دكتوراه في الذكاء الاصطناعي', greeting: 'مرحباً، أنا', name: 'نسيم', titlePart1: "مطور", titlePart2: "Full-Stack", titlePart3: "ومصمم", titlePart4: "جرافيك", mainTitle: "مطور Full-Stack ومصمم جرافيك", title: "مهندس نظم متقدمة ومهندس برمجيات", desc: "يمزج بين هندسة النظم المعقدة، التطوير الشامل الحديث، والتصميم الجرافيكي وتجربة المستخدم المتقدمة لبناء تجارب رقمية ذكية.", cta1: 'استكشف المشاريع', cta2: 'تواصل معي' },
    stats: { exp: 'سنوات خبرة', proj: 'مشروعاً منجزاً', tech: 'تقنية متقنة', qual: 'مجالات تخصص' },
    about: {
      title: 'الملف الشخصي والرؤية', subtitle: 'الخبرة الرباعية المتكاملة',
      desc: 'دمج دقيق بين صرامة البحث الأكاديمي في الذكاء الاصطناعي مع الخبرة الميدانية المتعددة في الأنظمة والبرمجة والتصميم.',
      pillars: [
        { t: 'الأنظمة والشبكات', d: 'تصميم وإدارة البنى التحتية التكنولوجية المعقدة.' },
        { t: 'مطور Fullstack وموبايل', d: 'بناء تطبيقات حديثة باستخدام React و Node.js.' },
        { t: 'باحث في الذكاء الاصطناعي', d: 'طالب دكتوراه يركز على الذكاء الاصطناعي وهندسة البرمجيات.' },
        { t: 'خبير تصميم UI/UX', d: 'ابتكار هويات بصرية راقية وتصاميم عالية التحويل.' },
      ],
      langTitle: 'الكفاءة اللغوية',
      langs: [
        { n: 'العربية', l: 'اللغة الأم', p: 100 },
        { n: 'الفرنسية', l: 'طلاقة / ثنائية اللغة', p: 100 },
        { n: 'الإنجليزية', l: 'طلاقة احترافية', p: 90 },
      ],
    },
    exp: {
      title: 'الخبرة المهنية', subtitle: 'العمل في الشركات والعمل الحر',
      items: [
        { role: 'مهندس أنظمة وشبكات', comp: 'بنية تحتية تكنولوجية كبرى (مؤسسة وطنية)', date: '2024 - الحالي', desc: 'إدارة وتأمين وتحسين البنية التحتية لتكنولوجيا المعلومات والشبكات لمؤسسة وطنية كبرى.', tags: ['إدارة الأنظمة', 'شبكات', 'بنية تحتية', 'أمن معلومات'] },
        { role: 'مطور ومصمم Fullstack / Frontend', comp: 'Koudri Innovations Group (KIG)', date: 'يونيو 2024 - الحالي', desc: 'تطوير منصات ويب تفاعلية، تصميم أنظمة UI/UX، إنشاء الهويات البصرية والميزات البرمجية المتكاملة.', tags: ['React', 'TypeScript', 'Node.js', 'UI/UX'] },
        { role: 'مطور Fullstack ومصمم جرافيك مستقل', comp: 'مستقل وعملاء مستقلون', date: '2022 - الحالي', desc: 'تنفيذ مشاريع متكاملة للعملاء: تطبيقات ويب، واجهات موبايل، وحملات بصرية.', tags: ['React Native', 'Figma', 'Express', 'MongoDB'] },
        { role: 'مطور مشارك (تطبيق Image Time)', comp: 'مشروع أكاديمية حسوب', date: 'نوفمبر 2023 - ديسمبر 2023', desc: 'بناء ميزات تفاعلية لمعالجة الصور وإدارة تطبيقات الويب.', tags: ['React.js', 'Node.js', 'REST APIs'] },
      ],
    },
    research: {
      title: 'البحث الأكاديمي', subtitle: 'الدكتوراه والمسار الجامعي',
      phdTitle: 'طالب دكتوراه في الذكاء الاصطناعي',
      phdMeta: 'قسم هندسة البرمجيات | مقبول عبر المسابقة الوطنية',
      phdDesc: 'أبحاث تركز على دعم اتخاذ القرار باستخدام الذكاء الاصطناعي وتحليل أنماط تفاعل الطلاب لتحسين معدلات النجاح في السنة الجامعية الأولى.',
      deg: [
        { t: 'ماجستير - هندسة أنظمة المعلومات المتقدمة', i: 'جامعة حسيبة بن بوعلي', d: 'يونيو 2023', h: 'متخرج بتقدير ممتاز' },
        { t: 'ليسانس - الأنظمة المعلوماتية', i: 'جامعة حسيبة بن بوعلي', d: 'سبتمبر 2021' },
        { t: 'المسار الجامعي الأولي', i: 'USTHB، الجزائر', d: '2017 - 2019' },
      ],
    },
    dev: {
      title: 'التطوير', subtitle: 'الهندسة والمشاريع',
      view: 'عرض المشروع',
      items: [
        { t: 'منصة KIG المؤسسية', d: 'منصة ويب متعددة الصفحات عالية الأداء مع نظام تصميم مخصص، محتوى مدعوم بنظام إدارة محتوى، وطبقة إشعارات فورية.', c: 'Fullstack', color: 'from-blue-500 to-cyan-500', border: 'border-blue-200 dark:border-blue-500/20', tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'] },
        { t: 'تطبيق Image Time', d: 'تطبيق ويب تفاعلي لمعالجة الصور مع فلاتر وعمليات دفعية ومعرض متجاوب، أُنجز ضمن برنامج أكاديمية حسوب.', c: 'Web App', color: 'from-teal-500 to-emerald-500', border: 'border-teal-200 dark:border-teal-500/20', tech: ['React.js', 'Node.js', 'REST APIs', 'Canvas'] },
        { t: 'أدوات التعاون اللحظي', d: 'تطبيق دردشة وحضور لحظي مع غرف ومؤشرات كتابة ومصادقة آمنة عبر JWT.', c: 'Realtime', color: 'from-sky-500 to-blue-600', border: 'border-sky-200 dark:border-sky-500/20', tech: ['Socket.io', 'WebSockets', 'Express', 'JWT'] },
        { t: 'مجموعة تطبيقات موبايل مستقلة', d: 'مجموعة تطبيقات موبايل متعددة المنصات لعملاء مستقل، تشمل إجراءات fintech وتتبع اللياقة.', c: 'Mobile', color: 'from-cyan-500 to-teal-500', border: 'border-cyan-200 dark:border-cyan-500/20', tech: ['React Native', 'Firebase', 'Expo'] },
      ],
    },
    design: {
      title: 'التصميم', subtitle: 'UI/UX والتصميم الجرافيكي',
      desc: 'مجموعة مختارة من هويات العلامات، تصاميم الواجهات، وحملات وسائل التواصل الاجتماعي لعملاء ومنتجات داخلية.',
      filters: { all: 'الكل', branding: 'الهوية البصرية', web: 'الويب و الواجهات', social: 'وسائل التواصل', mobile: 'الجوال' },
      items: [
        { t: 'هوية علامة Aurora', tag: 'هوية بصرية', c: 'branding', type: 'branding', gradient: 'from-blue-600 to-cyan-500' },
        { t: 'لوحة تحكم SaaS - Nexus', tag: 'UI/UX', c: 'web', type: 'web', gradient: 'from-sky-500 to-blue-600' },
        { t: 'تطبيق FinTrack للجوال', tag: 'واجهة جوال', c: 'mobile', type: 'mobile', gradient: 'from-cyan-500 to-blue-600' },
        { t: 'حملة سوشيال 2024', tag: 'سوشيال', c: 'social', type: 'social', gradient: 'from-rose-500 to-orange-500' },
        { t: 'تجربة متجر إلكتروني', tag: 'تطبيق ويب', c: 'web', type: 'web', gradient: 'from-teal-500 to-emerald-500' },
        { t: 'واجهة FitLife للجوال', tag: 'واجهة جوال', c: 'mobile', type: 'mobile', gradient: 'from-emerald-500 to-teal-600' },
        { t: 'سلسلة ملصقات فعاليات', tag: 'هوية بصرية', c: 'branding', type: 'branding', gradient: 'from-slate-600 to-slate-800' },
        { t: 'مجموعة تصاميم إنستغرام', tag: 'سوشيال', c: 'social', type: 'social', gradient: 'from-amber-500 to-rose-500' },
      ],
    },
    skills: {
      title: 'التقنيات والأدوات', subtitle: 'المهارات والشهادات',
      cats: [
        { n: 'Front-End', i: 'code', l: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
        { n: 'Back-End', i: 'server', l: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
        { n: 'قواعد البيانات والوقت الفعلي', i: 'database', l: ['PostgreSQL', 'MongoDB', 'Firebase', 'Socket.io', 'WebSockets'] },
        { n: 'أدوات وتصميم', i: 'palette', l: ['Git & GitHub', 'Figma', 'Photoshop', 'Illustrator', 'React Native'] },
      ],
      certsTitle: 'الشهادات المهنية',
      certs: [
        { t: 'أساسيات البرمجة باستخدام JS, HTML, CSS', i: 'جامعة ديوك (مع مرتبة الشرف)', d: 'سبتمبر 2022' },
        { t: 'تصميم الويب المتجاوب', i: 'جامعة لندن', d: 'سبتمبر 2022' },
        { t: 'تطوير التطبيقات باستخدام JavaScript', i: 'أكاديمية حسوب', d: 'يناير 2024' },
        { t: 'TCF (مستوى C1)', i: 'France Éducation international', d: 'ديسمبر 2024' },
      ],
    },
    contact: {
      title: 'لنبنِ شيئاً معاً', subtitle: 'تواصل معي',
      info: 'معلومات التواصل', loc: 'الشلف، الجزائر',
      emailLbl: 'البريد الإلكتروني', phoneLbl: 'الهاتف', locLbl: 'الموقع', socials: 'التواصل الاجتماعي',
      form: { n: 'الاسم الكامل', e: 'البريد الإلكتروني', s: 'الموضوع', m: 'رسالتك', btn: 'إرسال الرسالة', sent: 'تم إرسال الرسالة! سأرد عليك قريباً.' },
    },
    footer: 'صُمم وبُني بعناية. متاح لمشاريع مختارة.',
  },
};
