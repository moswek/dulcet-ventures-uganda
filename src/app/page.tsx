"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  List,
  X,
  MapPin,
  Phone,
  Envelope,
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
  ChartLineUp,
  Globe,
  Briefcase,
  Tree,
  Factory,
  Buildings,
  Sun,
  ArrowUpRight,
  CheckCircle,
  ChatCircle,
} from "@phosphor-icons/react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
  },
};

const services = [
  {
    category: "Strategy & Advisory",
    icon: ChartLineUp,
    services: [
      {
        name: "Strategy Development",
        desc: "Crafting actionable strategies aligned with your organizational vision",
      },
      {
        name: "Market & Financial Analysis",
        desc: "Data-driven insights for informed business decisions",
      },
      {
        name: "Public Policy Analysis",
        desc: "Evidence-based policy recommendations and impact assessments",
      },
    ],
  },
  {
    category: "Sustainability & Performance",
    icon: Tree,
    services: [
      {
        name: "Monitoring & Evaluation",
        desc: "Rigorous M&E frameworks to track outcomes and impact",
      },
      {
        name: "Environmental & Safety Studies",
        desc: "Comprehensive environmental assessments and compliance",
      },
      {
        name: "Training & Capacity Building",
        desc: "Empowering organizations with skills and expertise",
      },
    ],
  },
  {
    category: "Planning & Project Delivery",
    icon: Briefcase,
    services: [
      {
        name: "Project Management",
        desc: "End-to-end project delivery with proven methodologies",
      },
      {
        name: "Feasibility Studies",
        desc: "Thorough viability assessments for investment decisions",
      },
      {
        name: "Master Planning",
        desc: "Long-term development blueprints for sustainable growth",
      },
    ],
  },
];

const sectors = [
  { name: "Industrial Parks Development", icon: Buildings },
  { name: "Energy & Minerals", icon: Sun },
  { name: "Power & Utilities", icon: Globe },
  { name: "Agriculture", icon: Tree },
  { name: "Manufacturing", icon: Factory },
  { name: "Tourism & Hospitality", icon: MapPin },
];

const projects = [
  {
    year: "2024",
    client: "Ministry of Education and Sports",
    project: "Smart Education Project - Pre-feasibility & Feasibility Studies",
  },
  {
    year: "2024",
    client: "Ministry of Tourism, Wildlife and Antiquities",
    project: "Convention Center Development, Entebbe - Feasibility Study",
  },
  {
    year: "2024",
    client: "Uganda Prisons Service",
    project: "Records Information Management Training",
  },
  {
    year: "2023",
    client: "National Environment Management Authority",
    project: "NEMA Infrastructure Development Project - Pre-feasibility",
  },
  {
    year: "2023",
    client: "Uganda Prisons Service",
    project: "Prison Infrastructure Upgrade - Pre-feasibility Study",
  },
  {
    year: "2022",
    client: "National Planning Authority",
    project: "Jinja Industrial Park - Pre-feasibility & Feasibility Studies",
  },
  {
    year: "2022",
    client: "Ministry of Tourism, Wildlife and Antiquities",
    project: "UWRTI Infrastructure Development - Feasibility Study",
  },
  {
    year: "2022",
    client: "Uganda Coffee Development Authority",
    project: "Strategic Plan 2020/21 - 2024/25",
  },
  {
    year: "2021",
    client: "National Planning Authority",
    project: "Busoga Region Sugar Factory - Feasibility Study",
  },
  {
    year: "2021",
    client: "Ministry of Defence and Veterans",
    project: "National Military Museum - Implementation Planning",
  },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Experience", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "mt-4" : "mt-8"
      }`}
    >
      <div className="max-w-360 mx-auto px-6">
        <div
          className={`mx-auto transition-all duration-700 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-md shadow-sm py-3 px-6 border border-gray-200"
              : "py-5 px-8 bg-white/50 backdrop-blur-sm border border-white/30"
          } rounded-full w-full max-w-6xl`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Dulcet Ventures Uganda Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                unoptimized
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-ivory text-gray-900 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-accent hover:text-white transition-all duration-300 active:scale-[0.98]"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <List className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-24 bg-white/85 md:hidden"
          >
            <div className="flex flex-col items-center justify-center gap-8 pt-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-gray-800"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const heroImages = [
    "/hero-1.jpeg",
    "/hero-2.jpeg",
    "/hero-3.jpeg",
    "/hero-4.png",
    "/hero-5.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-dvh pt-32 pb-20 px-6 overflow-hidden bg-slate-100">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(38,70,83,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-linear-to-br from-slate-200/60 via-transparent to-slate-100/40" />

      <div className="max-w-360 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[70vh]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl w-full lg:w-1/2"
          >
            <motion.div variants={cardVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-semibold tracking-[0.15em] uppercase">
                Strategic Consulting
              </span>
            </motion.div>

            <motion.h1
              variants={cardVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Guiding Projects,{" "}
              <span className="text-accent-light">Empowering Growth</span>
            </motion.h1>

            <motion.p
              variants={cardVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10"
            >
              Dulcet Ventures Uganda is a multidisciplinary consulting firm
              providing strategic, analytical, and project-focused solutions to
              public and private sector clients across Uganda and East Africa.
            </motion.p>

            <motion.div
              variants={cardVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="group flex items-center gap-3 bg-accent text-white px-7 py-4 rounded-full font-semibold hover:bg-accent-dark transition-all duration-300 active:scale-[0.98]"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 px-7 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-accent hover:text-accent transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-4/5 lg:aspect-square lg:max-w-full">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-xl">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[currentImageIndex]}
                      alt="Dulcet Ventures Uganda - Professional Consulting"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-card p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-accent">5+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="text-xs text-gray-600">Sectors</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-360 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-accent-light text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-8">
              A multidisciplinary consulting firm dedicated to transforming
              visions into reality
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in project management, feasibility studies, master
              planning, strategy development, market and financial analysis,
              public policy advisory, capacity building, monitoring and
              evaluation, and environmental and safety studies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our work spans key sectors including agriculture, energy,
              infrastructure, manufacturing, education, water and environment,
              tourism, and urban development.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: "5+", label: "Years" },
                { number: "10+", label: "Projects" },
                { number: "12", label: "Sectors" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-2xl glass-card"
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent-light">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 bg-gray-50">
      <div className="max-w-360 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] max-w-2xl mx-auto">
            Comprehensive Solutions for Complex Challenges
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="glass-card rounded-4xl p-8 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <category.icon
                  className="w-7 h-7 text-accent-light"
                  weight="duotone"
                />
              </div>
              <h3 className="text-xl font-bold mb-6">{category.category}</h3>
              <ul className="space-y-4">
                {category.services.map((service) => (
                  <li key={service.name} className="group">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 text-accent shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        weight="fill"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section className="py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-360 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Sectors We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] max-w-2xl mx-auto">
            Expertise Across Key Industries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="glass-card rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <sector.icon className="w-6 h-6 text-accent-light" />
                </div>
                <span className="font-medium">{sector.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clientLogos = [
  { name: "Uganda Police Service", src: "/UPS.png" },
  { name: "NEMA", src: "/NEMA.png" },
  { name: "National Planning Authority", src: "/NPA.png" },
  { name: "Ministry of Tourism", src: "/MOTWA.jpeg" },
  { name: "Ministry of Education", src: "/MOES.jpeg" },
  { name: "Ministry of Defence", src: "/MDV.jpeg" },
];

function LogoMarquee() {
  return (
    <section className="py-16 px-6 overflow-hidden bg-white">
      <div className="max-w-360 mx-auto">
        <p className="text-center text-sm text-gray-500 font-medium mb-8 uppercase tracking-widest">
          Trusted by Leading Organizations
        </p>
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="shrink-0 h-16 w-32 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={64}
                  className="w-auto h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 bg-gray-50">
      <div className="max-w-360 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Our Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] max-w-2xl mx-auto">
            Projects We've Delivered
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate to-transparent" />

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={`${project.year}-${project.client}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-2" />

                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-light text-xs font-semibold mb-3">
                      {project.year}
                    </span>
                    <h3 className="font-bold text-lg mb-1">{project.client}</h3>
                    <p className="text-sm text-gray-600">{project.project}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-[10%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <div className="max-w-360 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-accent-light text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-8">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Ready to transform your vision into reality? Get in touch with our
              team of experts today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-gray-600">
                    P. O. Box 149794, Kampala Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">+256 782 915 102</p>
                  <p className="text-gray-600">+256 776 370 552</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Envelope className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-600">dulcetvent@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="glass-card rounded-4xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Reach out to us directly. We&apos;re here to help with your
                consulting needs.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+256782915102"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Phone
                      className="w-6 h-6 text-accent-light"
                      weight="duotone"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600 block">Call us</span>
                    <span className="font-semibold">+256 782 915 102</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="mailto:dulcetvent@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Envelope
                      className="w-6 h-6 text-accent-light"
                      weight="duotone"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-600 block">
                      Email us
                    </span>
                    <span className="font-semibold">dulcetvent@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-200">
      <div className="max-w-360 mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Dulcet Ventures Uganda Logo"
                width={160}
                height={53}
                className="h-14 w-auto"
                unoptimized
              />
            </a>
            <p className="text-gray-600 max-w-sm">
              Strategic consulting and advisory services for organizations
              across Uganda and East Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Experience", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Strategy Development</li>
              <li>Feasibility Studies</li>
              <li>Project Management</li>
              <li>Monitoring & Evaluation</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Dulcet Ventures Limited. All
              rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Designed & Managed by{" "}
              <a
                href="https://digitaltalisman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <span className="inline-block bg-linear-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 bg-size-[200%_auto] animate-gradient-wave bg-clip-text text-transparent font-semibold">
                  Digital Talisman
                </span>
                <span className="inline-block"> 🇺🇬</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const phoneNumber = "256782915102";
  const message =
    "Hello Dulcet Ventures Uganda, I'd like to inquire about your consulting services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.15, y: -4 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 },
        delay: 1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/250px-WhatsApp_icon.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </motion.a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Sectors />
      <LogoMarquee />
      <Experience />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
