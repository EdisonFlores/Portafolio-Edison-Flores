"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileDown,
  Globe2,
  GraduationCap,
  Mail,
  Map,
  MapPinned,
  Menu,
  Network,
  Palette,
  Route,
  Server,
  Smartphone,
  Wrench,
  X,
} from "lucide-react";

const Github = Code2;
const Linkedin = BriefcaseBusiness;
const Instagram = Palette;

type Project = {
  title: string;
  category: string;
  status: "Operativo" | "Propuesta";
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  live?: string;
  technologies: Array<{ label: string; icon: LucideIcon }>;
};

const projects: Project[] = [
  {
    title: "EcuaQuiz",
    category: "Educación y cultura",
    status: "Operativo",
    description: "Juego de preguntas sobre cultura, geografía e identidad ecuatoriana, creado para aprender mediante retos breves y una experiencia visual dinámica.",
    image: "/project-ecuaquiz.png",
    imageFit: "contain",
    technologies: [
      { label: "JavaScript", icon: Braces },
      { label: "HTML", icon: Code2 },
      { label: "CSS", icon: Palette },
      { label: "Responsive", icon: Smartphone },
    ],
  },
  {
    title: "EcuaVial",
    category: "Información vial",
    status: "Operativo",
    description: "Consulta de cierres e incidentes en las vías del Ecuador mediante filtros, datos actualizados y un mapa interactivo de alcance nacional.",
    image: "/project-ecuavial.png",
    live: "https://ecuavial.vercel.app/",
    technologies: [
      { label: "JavaScript", icon: Braces },
      { label: "Leaflet", icon: MapPinned },
      { label: "APIs", icon: Database },
      { label: "Serverless", icon: Server },
    ],
  },
  {
    title: "MoronaBus",
    category: "Movilidad inteligente",
    status: "Operativo",
    description: "Guía digital del transporte público de Macas para consultar líneas, paradas y recorridos con geolocalización sobre mapas interactivos.",
    image: "/project-moronabus.png",
    live: "https://moronabus.vercel.app/",
    technologies: [
      { label: "JavaScript", icon: Braces },
      { label: "Leaflet", icon: MapPinned },
      { label: "Geolocalización", icon: Route },
      { label: "PWA", icon: Smartphone },
    ],
  },
  {
    title: "CalinAgua",
    category: "Datos ambientales",
    status: "Operativo",
    description: "Plataforma para explorar la calidad del agua en ríos de Morona Santiago mediante registros, indicadores biológicos, gráficos y mapas interactivos.",
    image: "/project-calinagua.png",
    live: "https://calinagua.vercel.app/principal/",
    technologies: [
      { label: "JavaScript", icon: Braces },
      { label: "Leaflet", icon: MapPinned },
      { label: "D3.js", icon: Code2 },
      { label: "Datos", icon: Database },
    ],
  },
  {
    title: "Enfoque360",
    category: "Plataforma educativa",
    status: "Propuesta",
    description: "Concepto visual para presentar cursos y autores con una estructura editorial clara, accesible y adaptable a diferentes dispositivos.",
    image: "/project-enfoque360.png",
    live: "https://edisonflores.github.io/Enfoque360/",
    technologies: [
      { label: "Next.js", icon: Globe2 },
      { label: "TypeScript", icon: Braces },
      { label: "UI/UX", icon: Palette },
      { label: "Responsive", icon: Smartphone },
    ],
  },
  {
    title: "Amazonía EC",
    category: "Experiencia inmobiliaria",
    status: "Propuesta",
    description: "Propuesta web para presentar propiedades, comunicar la identidad de la marca y conducir a potenciales clientes hacia el contacto comercial.",
    image: "/project-amazonia.png",
    live: "https://edisonflores.github.io/amazonia-ec-demo/",
    technologies: [
      { label: "Next.js", icon: Globe2 },
      { label: "TypeScript", icon: Braces },
      { label: "UI/UX", icon: Palette },
      { label: "Responsive", icon: Smartphone },
    ],
  },
];

const experience = [
  {
    date: "Oct — Dic 2025",
    role: "Asistente Administrativo Electoral Provincial",
    company: "Proceso electoral provincial",
    description: "Gestión documental, monitoreo de vías, levantamiento de información en campo y elaboración de informes.",
  },
  {
    date: "May — Jun 2025",
    role: "Técnico de Ventanilla Única",
    company: "Dirección Distrital 14D01 Morona · MAG",
    description: "Atención al usuario, seguimiento de trámites y organización de información administrativa.",
  },
  {
    date: "Oct — Dic 2023",
    role: "Pasante de Soporte Técnico",
    company: "Gobierno Municipal del Cantón Morona",
    description: "Resolución de incidencias, mantenimiento de equipos y apoyo en redes y cableado estructurado.",
  },
  {
    date: "Abr — Jul 2023",
    role: "Pasante de Soporte Técnico",
    company: "Consejo de la Judicatura",
    description: "Inventario tecnológico, soporte a usuarios, mantenimiento de equipos y organización de cableado.",
  },
];

const skills = [
  { icon: Globe2, title: "Desarrollo web", items: ["JavaScript", "Next.js", "HTML y CSS", "Diseño responsive"] },
  { icon: Map, title: "Datos y mapas", items: ["Leaflet", "D3.js", "Datos geoespaciales", "Visualización"] },
  { icon: Wrench, title: "Soporte TI", items: ["Hardware y software", "Mantenimiento", "Atención al usuario", "Documentación"] },
  { icon: Network, title: "Infraestructura", items: ["Redes básicas", "Cableado", "Inventario", "Herramientas ofimáticas"] },
];

const otherProjects = [
  { title: "Calculadora por voz", tech: "Reconocimiento de voz", url: "https://github.com/EdisonFlores/Calculadora-por-voz" },
  { title: "CRUD Python + MongoDB", tech: "Python · MongoDB", url: "https://github.com/EdisonFlores/Crud-Mongo-python-Edison-Flores" },
  { title: "Juego de preguntas", tech: "Desarrollo web", url: "https://github.com/EdisonFlores/Juego-de-preguntas-Edison-Flores" },
  { title: "Base de datos de bovinos", tech: "Kotlin · SQLite", url: "https://github.com/EdisonFlores/Base-de-datos-Kotlin-SQLLITE" },
];

const navItems = [["Sobre mí", "#sobre-mi"], ["Proyectos", "#proyectos"], ["Experiencia", "#experiencia"], ["Habilidades", "#habilidades"]];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<"Todos" | "Operativos" | "Propuestas">("Todos");
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  const pointerX = useMotionValue(-500);
  const pointerY = useMotionValue(-500);
  const smoothPointerX = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 90, damping: 20 });
  const visibleProjects = projects.filter(project => {
    if (projectFilter === "Todos") return true;
    if (projectFilter === "Operativos") return project.status === "Operativo";
    return project.status === "Propuesta";
  });

  return (
    <main onPointerMove={(event) => { pointerX.set(event.clientX); pointerY.set(event.clientY); }}>
      <motion.div className="scroll-progress" style={{ scaleX: progressX }} />
      <motion.div className="pointer-glow" style={{ x: smoothPointerX, y: smoothPointerY }} aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">EF<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-contact" href="mailto:floresedison0211@gmail.com">Contacto <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href="mailto:floresedison0211@gmail.com">Contacto</a>
          </motion.nav>
        )}
      </header>

      <section className="hero" id="inicio">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="eyebrow">Bienvenido a mi portafolio</p>
          <h1>Edison Flores</h1>
          <h2>Ingeniero en Tecnologías de la Información</h2>
          <p className="hero-description">Creo soluciones web, visualizaciones de datos y herramientas digitales enfocadas en resolver necesidades reales de forma clara y funcional.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">Ver proyectos <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="/CV-Edison-Flores.pdf" download><FileDown size={17} /> Descargar CV</a>
          </div>
          <div className="social-links" aria-label="Redes profesionales">
            <a href="https://github.com/EdisonFlores" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={21} /></a>
            <a href="https://www.linkedin.com/in/edison-flores-8a7b61268/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={21} /></a>
            <a href="https://www.instagram.com/3d150n_f10r35" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={21} /></a>
            <a href="mailto:floresedison0211@gmail.com" aria-label="Correo electrónico"><Mail size={21} /></a>
          </div>
        </motion.div>
        <motion.div className="hero-tech" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} aria-hidden="true">
          <motion.span className="tech-ring ring-one" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
          <motion.span className="tech-ring ring-two" animate={{ rotate: -360 }} transition={{ duration: 21, repeat: Infinity, ease: "linear" }} />
          <motion.div className="tech-core" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Cpu size={26} /><strong>EF</strong><small>systems online</small>
          </motion.div>
          <i className="tech-node node-one" /><i className="tech-node node-two" /><i className="tech-node node-three" />
        </motion.div>
      </section>

      <section className="section about-section" id="sobre-mi">
        <motion.div className="section-heading" {...reveal}>
          <p className="section-index">01</p>
          <div><p className="eyebrow">Perfil profesional</p><h2>Sobre mí</h2></div>
        </motion.div>
        <div className="about-layout">
          <motion.div className="about-copy" {...reveal}>
            <p>Ingeniero en Tecnologías de la Información con experiencia en soporte técnico, mantenimiento de equipos, atención al usuario y gestión de procesos administrativos.</p>
            <p>Mi trabajo combina análisis, organización y desarrollo web. Me interesa transformar información compleja en herramientas digitales fáciles de comprender y utilizar.</p>
          </motion.div>
          <motion.div className="facts-grid" {...reveal}>
            <div><MapPinned size={20} /><span>Ubicación</span><strong>Macas, Ecuador</strong></div>
            <div><CheckCircle2 size={20} /><span>Disponibilidad</span><strong>Nuevas oportunidades</strong></div>
            <div><GraduationCap size={20} /><span>Formación</span><strong>Ingeniero TI · ESPOCH</strong></div>
            <div><Globe2 size={20} /><span>Enfoque</span><strong>Web, datos y soporte</strong></div>
          </motion.div>
        </div>
      </section>

      <section className="section projects-section" id="proyectos">
        <motion.div className="section-heading" {...reveal}>
          <p className="section-index">02</p>
          <div><p className="eyebrow">Trabajo seleccionado</p><h2>Proyectos</h2></div>
        </motion.div>
        <motion.div className="project-controls" {...reveal}>
          <p>Explora productos operativos y propuestas visuales.</p>
          <div role="group" aria-label="Filtrar proyectos">
            {(["Todos", "Operativos", "Propuestas"] as const).map(filter => (
              <button key={filter} className={projectFilter === filter ? "active" : ""} onClick={() => setProjectFilter(filter)} aria-pressed={projectFilter === filter}>
                {filter}<span>{filter === "Todos" ? projects.length : projects.filter(project => filter === "Operativos" ? project.status === "Operativo" : project.status === "Propuesta").length}</span>
              </button>
            ))}
          </div>
        </motion.div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.article layout className="project-card" key={project.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .42, delay: (index % 2) * .05 }} whileHover={{ y: -8 }}>
              <div className={`project-image project-image-${project.imageFit ?? "cover"}`}>
                <Image src={project.image} alt={`Vista de ${project.title}`} fill unoptimized sizes="(max-width: 760px) 92vw, 46vw" />
                <span className={`status status-${project.status === "Operativo" ? "live" : "proposal"}`}>{project.status}</span>
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technology-list" aria-label={`Tecnologías de ${project.title}`}>
                  {project.technologies.map(({ label, icon: Icon }) => <span key={label}><Icon size={15} />{label}</span>)}
                </div>
                <div className="project-action">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      {project.status === "Propuesta" ? "Ver propuesta" : "Abrir plataforma"}<ArrowUpRight size={16} />
                    </a>
                  ) : <span>Presentación visual</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div className="other-projects" {...reveal}>
          <div className="subheading"><h3>Otros proyectos</h3><p>Prácticas y experimentos de aprendizaje.</p></div>
          <div className="other-grid">
            {otherProjects.map(project => (
              <a key={project.title} href={project.url} target="_blank" rel="noreferrer">
                <div><h4>{project.title}</h4><span>{project.tech}</span></div><ArrowUpRight size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section experience-section" id="experiencia">
        <motion.div className="section-heading" {...reveal}>
          <p className="section-index">03</p>
          <div><p className="eyebrow">Trayectoria</p><h2>Experiencia</h2></div>
        </motion.div>
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article key={`${item.role}-${item.date}`} {...reveal} transition={{ duration: 0.5, delay: index * 0.04 }}>
              <time>{item.date}</time>
              <div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="habilidades">
        <motion.div className="section-heading" {...reveal}>
          <p className="section-index">04</p>
          <div><p className="eyebrow">Capacidades</p><h2>Habilidades</h2></div>
        </motion.div>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article key={skill.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <Icon size={22} /><h3>{skill.title}</h3>
                <ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <motion.div {...reveal}>
          <p className="eyebrow">Contacto</p>
          <h2>¿Trabajamos juntos?</h2>
          <p>Estoy abierto a oportunidades, colaboraciones y proyectos tecnológicos con propósito.</p>
          <a className="button button-primary" href="mailto:floresedison0211@gmail.com"><Mail size={17} /> Escríbeme</a>
        </motion.div>
      </section>

      <footer>
        <a className="brand" href="#inicio">EF<span>.</span></a>
        <p>© 2026 Edison Flores · Macas, Ecuador</p>
        <div><a href="https://github.com/EdisonFlores" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/edison-flores-8a7b61268/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/3d150n_f10r35" target="_blank" rel="noreferrer">Instagram</a></div>
      </footer>
    </main>
  );
}
