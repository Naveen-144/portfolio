import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Skills.css';

const allSkills = [
    "Embedded C", "C", "Java", "ESP32", "Arduino", "Sensor Interfacing",
    "Verilog", "MATLAB", "PCB Design & Fabrication",
    "Arduino IDE", "Proteus", "KiCAD / Eagle", "Tinkercad",
    "HTML", "CSS", "MySQL", "React.js",
    "Digital Logic", "IoT Systems", "Control Systems", "Automation",
    "Sensors", "Digital Circuits", "Problem-Solving", "Front-End Dev"
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <motion.div
                className="skills-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="section-title">Mastery</motion.h2>

                <motion.div className="skills-flow">
                    {allSkills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="skill-tag"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.08)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
