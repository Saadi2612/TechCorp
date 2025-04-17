import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">TechCorp</h3>
            <p className="text-gray-400">
              Transforming ideas into digital reality
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">App Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">AI/ML Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">Smart Automation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">Security Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary-400">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-primary-400">Portfolio</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-primary-400">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>contact@techcorp.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-400 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

