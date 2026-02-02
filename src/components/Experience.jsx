import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Experience.css';

const experienceData = [
    {
        role: 'Internship',
        company: 'Vasantha Advanced System, Coimbatore',
        duration: 'Jan 7 – Feb 7',
        description: [
            'Handled PCB assembly (SMT) and rapid prototyping for production.',
            'Programmed microcontrollers and conducted functional hardware testing.',
            'Ensured quality standards (IPC/IATF) in wiring and debugging.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <motion.div
                className="experience-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="experience-header">
                    <motion.h2 variants={fadeInUp} className="section-title">Practice</motion.h2>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {experienceData.map((item, index) => (
                        <motion.div key={index} className="timeline-item" variants={fadeInUp}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="company">{item.company}</h3>
                                <div className="role-wrapper">
                                    <span className="role">{item.role}</span>
                                    <span className="separator">|</span>
                                    <span className="duration">{item.duration}</span>
                                </div>
                                <ul className="description-list">
                                    {item.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
