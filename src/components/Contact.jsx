import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Contact.css';

import resumeFile from '../assets/Resume_Naveen_Kumar.pdf';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <motion.div
                className="contact-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2>Let's Connect</h2>
                <p className="contact-desc">
                    Ready to bridge the gap between hardware and software on your next project?
                </p>

                <div className="contact-links">
                    <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="contact-btn">View Resume</a>
                    <a href="mailto:naveenk144410@gmail.com" className="contact-btn">Email</a>
                    <a href="https://www.linkedin.com/in/naveen-kumar-r-768384272/" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
                    <a href="https://github.com/Naveen-144" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
                    <a href="tel:+918015652905" className="contact-btn">Call (+91) 8015652905</a>
                </div>

                <footer className="footer">
                    <p>© 2026 Naveen Kumar. Crafted with code & circuits.</p>
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;
