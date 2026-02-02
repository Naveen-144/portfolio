import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <motion.div
                className="hero-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h1 className="hero-title">Naveen Kumar R</h1>
                {/*<p className="hero-subtitle">Naveen Kumar</p>*/}
                <p className="hero-desc">EEE Engineer • IoT Specialist • System Architect</p>

                <motion.button
                    className="hero-cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore Journey
                </motion.button>
            </motion.div>
            <div className="hero-gradient"></div>
        </section>
    );
};

export default Hero;
