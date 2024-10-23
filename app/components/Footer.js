import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaSnapchat, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {/* Resources */}
          <div>
            <h1 className="font-semibold text-3xl mb-7">Resources</h1>
            <ul className="space-y-2">
              <li><a href="/client-login" className="hover:text-blue-400 transition">Client Login</a></li>
              <li><a href="/system-status" className="hover:text-blue-400 transition">System Status</a></li>
              <li><a href="/blog" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="/faq" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="/careers" className="hover:text-blue-400 transition">Careers</a></li>
            </ul>
          </div>

          {/* Digital Solutions */}
          <div>
            <h1 className="font-semibold text-3xl mb-7">Digital Solutions</h1>
            <ul className="space-y-2">
              <li><a href="/web-design" className="hover:text-blue-400 transition">Website Design & Development</a></li>
              <li><a href="/graphic-design" className="hover:text-blue-400 transition">Graphic Design & Branding</a></li>
              <li><a href="/ecommerce" className="hover:text-blue-400 transition">Ecommerce & Online Stores</a></li>
              <li><a href="/seo" className="hover:text-blue-400 transition">Search Engine Optimisation</a></li>
              <li><a href="/ppc" className="hover:text-blue-400 transition">Pay-Per-Click Management & Google Ads</a></li>
              <li><a href="/content-marketing" className="hover:text-blue-400 transition">Content Marketing & Copywriting</a></li>
              <li><a href="/social-media" className="hover:text-blue-400 transition">Social Media Advertising</a></li>
            </ul>
          </div>

          {/* Hosting & Cloud */}
          <div>
            <h1 className="font-semibold text-3xl mb-7">Hosting & Cloud</h1>
            <ul className="space-y-2">
              <li><a href="/domains" className="hover:text-blue-400 transition">Domains</a></li>
              <li><a href="/google-workspace" className="hover:text-blue-400 transition">Google Workspace</a></li>
              <li><a href="/web-hosting" className="hover:text-blue-400 transition">Web Hosting</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h1 className="font-semibold text-3xl mb-7">Contact Us</h1>
            <p className="mb-2">XXXXXXXXXX</p>
            <p className="mb-2">Monday – Friday 9am – 4:30pm</p>
            <p>Email Us</p>
            <p>Nowra | Wollongong</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">
            <FaFacebook className="text-6xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-pink-400">
            <FaInstagram className="text-6xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">
            <FaLinkedin className="text-6xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-red-400">
            <FaYoutube className="text-6xl" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-red-400">
            <FaTiktok className="text-6xl" />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-yellow-400">
            <FaSnapchat className="text-6xl" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-orange-400">
            <FaPinterest className="text-6xl" />
          </a>
        </div>

        {/* Legal and Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} GETMECHIYA Pty Ltd. All rights reserved. GETMECHIYA</p>
          <p>ABN: XXXXXXXXXXXX</p>
          <ul className="flex justify-center space-x-6 mt-2">
            <li><a href="/terms-of-service" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="/sitemap" className="hover:text-blue-400 transition">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

