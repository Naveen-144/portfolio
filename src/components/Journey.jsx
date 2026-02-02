import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Journey.css';

const steps = [
    { id: 1, title: 'EEE Foundations', content: 'Mastering circuits, signals, and systems. Understanding the hardware that runs the world.' },
    { id: 2, title: 'The IoT Shift', content: 'Bridging the physical and digital. Connecting sensors, microcontrollers, and the cloud.' },
    { id: 3, title: 'VLSI & Digital Design', content: 'Diving deep into chip architecture and FPGA. Designing efficient hardware for complex tasks.' },
];

const Journey = () => {
    return (
        <section id="journey" className="journey-section">
            <motion.div
                className="journey-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="section-title">The Evolution.</motion.h2>

                <div className="journey-timeline">
                    {steps.map((step) => (
                        <motion.div key={step.id} className="journey-item" variants={fadeInUp}>
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <h3>{step.title}</h3>
                                <p>{step.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Journey;
