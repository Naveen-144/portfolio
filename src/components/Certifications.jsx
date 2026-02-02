import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Certifications.css';

const certifications = [
    'PCB Design & Soldering',
    'PLC Programming – Siemens',
    'NPTEL – Programming in Java',
    'NPTEL – Digital Design with Verilog'
];

const Certifications = () => {
    return (
        <section className="certifications-section" id="certifications">
            <motion.div
                className="certifications-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="cert-header">
                    <motion.h2 variants={fadeInUp} className="section-title">Credentials</motion.h2>
                </div>

                <div className="cert-list">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-item"
                            variants={fadeInUp}
                            whileHover={{ x: 10, backgroundColor: "rgba(0,0,0,0.02)" }}
                        >
                            <span className="cert-name">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
