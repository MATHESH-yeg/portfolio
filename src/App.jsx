import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, ExternalLink } from 'lucide-react';
import { FaReact, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaShieldAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiMongodb, SiMysql, SiPostman, SiGooglecloud } from 'react-icons/si';

// Fallback component since the external model likely failed to load
// Luxury Abstract Background Component
const CyberCore = () => {
    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            {/* Central Core - 10% Accent Power Source */}
            <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="var(--accent)"
                    emissive="var(--accent)"
                    emissiveIntensity={2}
                    distort={0.4}
                    speed={4}
                    roughness={0}
                />
            </mesh>

            {/* Outer Rings - 30% Secondary Elements */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.5, 0.02, 16, 100]} />
                <meshStandardMaterial color="var(--secondary)" roughness={0.2} metalness={1} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
                <torusGeometry args={[3, 0.02, 16, 100]} />
                <meshStandardMaterial color="var(--secondary)" roughness={0.2} metalness={1} />
            </mesh>
        </Float>
    );
};

// Three.js Background Component
const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={2} color="var(--secondary)" />
            <pointLight position={[-5, -5, -5]} intensity={5} color="var(--accent)" />

            <CyberCore />

            {/* Floating Particles for Depth */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </>
    );
};

const App = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    // Kawasaki Green for consistent icon accents
    const iconColor = "#00A651";

    const skills = [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Python (Django)", icon: <SiDjango /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "API Integration", icon: <SiPostman /> },
        { name: "Cloud Basics", icon: <FaAws /> },
        { name: "Cybersecurity", icon: <FaShieldAlt /> }
    ];

    const projects = [
        {
            title: "E-Commerce Website",
            desc: "React-based application with cart, payment, and order workflow.",
            tags: ["React", "Payment Gateway"]
        },
        {
            title: "AI Chatbot (Valtrix)",
            desc: "AI chatbot with API integration and voice-based input support.",
            tags: ["AI", "Voice API"]
        },
        {
            title: "College Management System",
            desc: "CRUD-based system developed using React and Bootstrap.",
            tags: ["React", "Bootstrap", "CRUD"]
        }
    ];

    return (
        <div className="portfolio">
            {/* Background Layer */}
            <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="btn-text" style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
                                Full Stack Developer
                            </span>
                            <h1 style={{ marginTop: '0.5rem' }}>
                                Matheshwaran <span style={{ color: 'var(--text-muted)', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', textTransform: 'none' }}>A S</span>
                            </h1>

                            <div className="hero-tech-stack" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem', color: 'var(--platinum)', fontSize: '1.2rem', fontFamily: 'Cinzel', letterSpacing: '0.1em' }}>
                                <span>AI Engineering</span>
                                <span style={{ color: 'var(--primary)' }}>/</span>
                                <span>Web Development</span>
                                <span style={{ color: 'var(--primary)' }}>/</span>
                                <span>Cloud Architecture</span>
                            </div>

                            <p style={{ marginBottom: '3rem' }}>
                                Crafting digital experiences where precision engineering meets artistic vision. Specializing in building scalable applications that define the future of interaction.
                            </p>

                            <div className="hero-actions" style={{ display: 'flex', gap: '2rem', marginTop: '2rem', alignItems: 'center' }}>
                                <a href="#contact" className="cta-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    Execute Vision <ArrowRight size={18} />
                                </a>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <a href="#" style={{ color: 'var(--text-muted)', transition: '0.3s' }} className="social-icon"><Github size={24} /></a>
                                    <a href="#" style={{ color: 'var(--text-muted)', transition: '0.3s' }} className="social-icon"><Linkedin size={24} /></a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="profile-photo-container"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Placeholder showing new border style */}
                            <img src="https://placehold.co/400x400/0a0a0a/666?text=AS" alt="Matheshwaran A S" className="profile-photo" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
                <div className="container">
                    <motion.h2 {...fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>Technical Arsenal</motion.h2>
                    <div className="glass" style={{ marginTop: '2rem' }}>
                        <div className="skill-tags" style={{ justifyContent: 'center' }}>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill.name}
                                    className="skill-tag"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="skill-icon">{skill.icon}</span>
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <div className="container">
                    <motion.h2 {...fadeInUp} style={{ marginBottom: '3rem' }}>Selected Projects</motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                whileHover={{ y: -10 }}
                                className="glass"
                                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                            >
                                <div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700 }}>{project.title}</h3>
                                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>{project.desc}</p>
                                </div>
                                <div className="skill-tags" style={{ gap: '0.8rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', border: 'none' }} className="skill-tag">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="education">
                <div className="container">
                    <motion.h2 {...fadeInUp} style={{ marginBottom: '2rem' }}>Education</motion.h2>
                    <motion.div {...fadeInUp} className="glass" style={{ borderLeft: '4px solid var(--primary)' }}>
                        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>B.E Computer Science Engineering</h3>
                        <h4 style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 400 }}>PSNA College of Engineering and Technology</h4>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>2023 - Present</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <motion.div
                        {...fadeInUp}
                        className="glass"
                        style={{ textAlign: 'center', padding: '6rem 2rem', background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)' }}
                    >
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Let's work together</h2>
                        <p style={{ margin: '0 auto 2.5rem', fontSize: '1.3rem', color: 'var(--text-muted)' }}>Feel free to reach out for collaborations or opportunities.</p>

                        <a href="mailto:matheshwaranmathesh432@gmail.com" style={{
                            display: 'inline-block',
                            padding: '1.2rem 3rem',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: '#000',
                            backgroundColor: '#fff',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            marginTop: '1rem',
                            transition: 'transform 0.3s'
                        }}>
                            matheshwaranmathesh432@gmail.com
                        </a>
                    </motion.div>
                </div>
            </section>

            <footer style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <p style={{ margin: '0 auto', fontSize: '0.9rem', color: 'var(--gray)' }}>© 2024 Matheshwaran A S. Built with React & Three.js.</p>
            </footer>
        </div>
    );
};

export default App;
