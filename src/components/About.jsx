import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="about-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="section-title">About Me</motion.h2>

                <motion.div className="about-content" variants={fadeInUp}>
                    <p>
                        I’m an EEE final-year student who enjoys understanding how things work — from circuits on a board to logic in code.
                    </p>
                    <p>
                        My interests lie in IoT, embedded systems, and VLSI, and I’m also exploring data science to better understand and improve the systems I build.
                    </p>
                    <p>
                        I’m targeting roles in VLSI, Embedded, or IoT, where I can work on real-world problems and keep learning by building.
                    </p>
                    <p>
                        I have a hands-on, problem-solver mindset — I learn best by experimenting, fixing things, and improving them step by step.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
