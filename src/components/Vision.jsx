import { motion } from 'framer-motion';
import { slowFade } from '../utils/animations';
import './Vision.css';

const Vision = () => {
    return (
        <section className="vision-section">
            <motion.div
                className="vision-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={slowFade}
            >
                <h2 className="section-title">The Direction</h2>
                <p>
                    My goal is to design systems where hardware and software coexist in perfect harmony.
                    Whether it's optimizing chip architecture or architecting cloud-connected sensor networks,
                    I believe in building the future, layer by layer.
                </p>
            </motion.div>
        </section>
    );
};

export default Vision;
