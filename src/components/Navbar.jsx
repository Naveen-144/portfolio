import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import resumeFile from '../assets/Resume_Naveen_Kumar.pdf';
import './Navbar.css';

const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'Journey', id: 'about' },
    { title: 'Projects', id: 'projects' },
    { title: 'Mastery', id: 'skills' },
    { title: 'Foundation', id: 'education' },
    { title: 'Practice', id: 'experience' },
    { title: 'Credentials', id: 'certifications' },
    { title: 'Connect', id: 'contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="navbar-container">
                <div
                    className="navbar-logo"
                    onClick={() => scrollToSection('home')}
                >
                    Naveen Kumar
                </div>

                {/* Desktop Menu */}
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button onClick={() => scrollToSection(link.id)}>
                                {link.title}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="resume-link">
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    <div className={`hamburger ${mobileOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
                >
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => scrollToSection(link.id)}>
                            {link.title}
                        </button>
                    ))}
                    <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="mobile-resume-link">
                        View Resume
                    </a>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
