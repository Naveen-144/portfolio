import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../utils/animations';
import './Projects.css';
import sramImg from '../assets/sram_sklct_vlsi.jpg';
import smartAgriImg from '../assets/smart_agriculture.png';
import ammoniaImg from '../assets/ammonia_detection.png';
import nurtureImg from '../assets/smart_agriculture.png';

const projects = [
    {
        id: 1,
        title: 'Power Leakage Reduction in SRAM Using SK-LCT Based Sense Amplifier',
        tag: 'Final Year Project — VLSI / Low-Power Circuit Design',
        desc: 'Low-power SRAM architecture using the SK-LCT technique, achieving 57.53% power reduction and 44.70% delay reduction.',
        fullDesc: 'This final-year engineering project focuses on reducing leakage power and improving the speed of SRAM architecture using the Sleepy Keeper Leakage Control Transistor (SK-LCT) technique. The project involves designing and analysing SRAM architecture using power-gating techniques and comparing conventional 6T SRAM with different leakage-reduction techniques such as Sleep, Stack, Sleepy Stack, Sleepy Keeper, LECTOR, and the proposed SK-LCT technique. The proposed SK-LCT approach combines the advantages of the Sleepy Keeper and LECTOR techniques to reduce leakage power while maintaining data retention and improving performance.',
        badges: ['VLSI', 'SRAM', 'Low Power Design', 'Tanner EDA', 'SPICE', 'CMOS', 'Power Gating', 'SK-LCT'],
        metrics: [
            { value: '57.53%', label: 'Power Reduction' },
            { value: '44.70%', label: 'Delay Reduction' },
            { value: '45.33 nW', label: 'Proposed Power (vs 106.75 nW)' },
            { value: '0.6046 ns', label: 'Proposed Delay (vs 1.0934 ns)' }
        ],
        highlights: [
            'Conventional 6T SRAM: 106.75 nW power, 1.0934 ns delay',
            'Proposed SK-LCT SRAM: 45.33 nW power, 0.6046 ns delay',
            '57.53% reduction in power consumption',
            '44.70% reduction in delay',
            'Proposed SK-LCT combines Sleepy Keeper and LECTOR techniques for leakage reduction and data retention',
            'Comparative analysis with Sleep, Stack, Sleepy Stack, Sleepy Keeper, and LECTOR techniques',
            'Designed and analysed using Cadence Virtuoso'
        ],
        image: sramImg
    },
    {
        id: 2,
        title: 'Smart Agriculture Monitoring & Automation',
        tag: 'ESP32 + IoT',
        desc: 'Automated irrigation and ventilation using threshold-based embedded logic.',
        fullDesc: 'This project focuses on making agriculture more responsive and less dependent on constant manual monitoring. An ESP32-based system continuously tracks multiple environmental parameters from the field using connected sensors. Instead of relying on manual decisions, the system uses threshold-based embedded logic to automatically control irrigation and ventilation, ensuring optimal conditions for crops.',
        badges: ['ESP32', 'IoT', 'Sensors', 'Blynk', 'Embedded C'],
        highlights: [
            'Continuous monitoring of farm environmental sensors',
            'Automated irrigation and ventilation using embedded decision logic',
            'Real-time visualization through Blynk IoT dashboard',
            'Designed for efficiency, reliability, and practical field use'
        ],
        image: smartAgriImg
    },
    {
        id: 3,
        title: 'Ammonia Detection System',
        tag: 'Safety-Focused Embedded System',
        desc: 'Accurate ammonia gas detection with automatic exhaust fan control and SMS alerts.',
        fullDesc: 'This project addresses a critical but often overlooked issue in poultry farming — ammonia gas accumulation. Using the MQ-137 ammonia sensor, the system constantly measures gas concentration levels inside the poultry environment. When ammonia levels cross safe thresholds, an automatic exhaust fan is triggered through a relay-based control system to restore air quality.',
        badges: ['Embedded Systems', 'MQ-137', 'GSM/SMS', 'Relay Control', 'Safety'],
        highlights: [
            'Accurate ammonia detection using MQ-137 sensor',
            'Automatic exhaust fan control via relay switching',
            'Real-time SMS alerts during unsafe conditions',
            'Designed to improve farm safety and animal well-being'
        ],
        image: ammoniaImg
    },
    {
        id: 4,
        title: 'NurtureDose – Front-End Website',
        tag: 'UI Development',
        desc: 'Responsive healthcare website built with HTML, CSS, and JS during Infosys training.',
        fullDesc: 'NurtureDose is a front-end web project developed as part of an Infosys-funded UI training program conducted by ICT Academy. The goal was to build a clean, responsive website with a strong focus on layout structure, readability, and smooth user experience.',
        badges: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
        highlights: [
            'Fully responsive layout using HTML, CSS, and JavaScript',
            'Clean UI design with structured sections',
            'Smooth navigation and user-friendly flow',
            'Developed during Infosys-funded professional training'
        ],
        image: nurtureImg
    },
];

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="projects-section" id="projects">
            <motion.div
                className="projects-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="section-title">Projects</motion.h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`card-container-${project.id}`}
                            key={project.id}
                            className="project-card"
                            variants={scaleUp}
                            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                            onClick={() => setSelectedId(project.id)}
                        >
                            <motion.div className="card-image-container" layoutId={`card-image-${project.id}`}>
                                <img src={project.image} alt={project.title} />
                            </motion.div>
                            <motion.div className="card-content">
                                <motion.div className="card-tag" layoutId={`card-tag-${project.id}`}>{project.tag}</motion.div>
                                <motion.h3 layoutId={`card-title-${project.id}`}>{project.title}</motion.h3>
                                <motion.p className="card-short-desc" layoutId={`card-desc-${project.id}`}>{project.desc}</motion.p>
                                {project.badges && (
                                    <div className="card-badges">
                                        {project.badges.map((badge, idx) => (
                                            <span key={idx} className="badge-pill">{badge}</span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedId && (
                    <div className="modal-overlay" onClick={() => setSelectedId(null)}>
                        <motion.div
                            layoutId={`card-container-${selectedId}`}
                            className="project-modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {projects.map((project) => {
                                if (project.id === selectedId) {
                                    return (
                                        <div key={project.id}>
                                            <motion.div className="modal-image-container" layoutId={`card-image-${project.id}`}>
                                                <img src={project.image} alt={project.title} />
                                                <button className="close-button" onClick={() => setSelectedId(null)} aria-label="Close modal">×</button>
                                            </motion.div>

                                            <motion.div className="modal-content">
                                                <motion.div className="card-tag" layoutId={`card-tag-${project.id}`}>{project.tag}</motion.div>
                                                <motion.h3 layoutId={`card-title-${project.id}`}>{project.title}</motion.h3>

                                                {project.badges && (
                                                    <div className="modal-badges">
                                                        {project.badges.map((badge, idx) => (
                                                            <span key={idx} className="badge-pill">{badge}</span>
                                                        ))}
                                                    </div>
                                                )}

                                                <motion.div
                                                    className="modal-body"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {project.metrics && (
                                                        <div className="metrics-grid">
                                                            {project.metrics.map((metric, idx) => (
                                                                <div key={idx} className="metric-card">
                                                                    <div className="metric-value">{metric.value}</div>
                                                                    <div className="metric-label">{metric.label}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    <p className="full-desc">{project.fullDesc}</p>

                                                    <div className="highlights-section">
                                                        <h4>Key Results & Highlights</h4>
                                                        <ul>
                                                            {project.highlights.map((highlight, index) => (
                                                                <li key={index}>{highlight}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
