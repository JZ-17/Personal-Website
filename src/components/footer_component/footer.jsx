import "@/components/footer_component/Footer.css";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }}>
      <footer className="footer-section">
        <p className="footer-text">Made with love by Josh Zhang 🚀</p>
      </footer>
    </motion.div>
  );
};

export default Footer;
