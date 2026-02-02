import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Education.css';

const educationData = [
    {
        degree: 'B.E. – Electrical and Electronics Engineering (EEE)',
        institution: 'PSNA College of Engineering and Technology (PSNACET), Dindigul',
        year: 'Expected 2026',
        score: 'CGPA: 8.0352 / 10'
    },
    {
        degree: 'Higher Secondary (HSC – CBSE)',
        institution: 'Montfort School, Sivaganga',
        year: '2022',
        score: 'Percentage: 78%'
    },
    {
        degree: 'Secondary School (SSLC – CBSE)',
        institution: 'Montfort School, Sivaganga',
        year: '2020',
        score: 'Percentage: 82%'
    }
];

const Education = () => {
    return (
        <section className="education-section" id="education">
            <motion.div
                className="education-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="education-header">
                    <motion.h2 variants={fadeInUp} className="section-title">Foundation</motion.h2>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {educationData.map((item, index) => (
                        <motion.div key={index} className="timeline-item" variants={fadeInUp}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="degree">{item.degree}</h3>
                                <p className="institution">{item.institution}</p>
                                <div className="meta-info">
                                    <span className="year">{item.year}</span>
                                    <span className="separator">•</span>
                                    <span className="score">{item.score}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
