"use client"
import React from 'react';
import { Twitter, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: FooterLink[];
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface AppDownload {
  platform: string;
  type: string;
  icon: string;
}

const footerLinks: Record<string, FooterSection> = {
  company: {
    title: "Company",
    links: [
      { name: "About us", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Careers", href: "#" },
    ]
  },
  businessSize: {
    title: "Business Size",
    links: [
      { name: "Entrepreneurs", href: "#" },
      { name: "SMBs", href: "#" },
      { name: "Growth Business", href: "#" },
      { name: "Household Services", href: "#" },
      { name: "Enterprise", href: "#" },
    ]
  },
  businessType: {
    title: "Business Type",
    links: [
      { name: "Health & Wellness", href: "#" },
      { name: "Sports", href: "#" },
      { name: "Learning Activities", href: "#" },
      { name: "Household Services", href: "#" },
      { name: "Miscellaneous", href: "#" },
    ]
  }
};

const appDownloads: AppDownload[] = [
  { platform: "Apple", type: "Business", icon: "/apple-icon.png" },
  { platform: "Google Play", type: "Business", icon: "/google-play-icon.png" },
  { platform: "Apple", type: "User", icon: "/apple-icon.png" },
  { platform: "Google Play", type: "User", icon: "/google-play-icon.png" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
      <div>
        <h3 className="text-sm font-medium uppercase tracking-wider mb-6">{title}</h3>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  
    return (
      <div className="w-full bg-black">
        <footer className="text-white py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-10 max-w-7xl mx-auto px-4 lg:px-8">
            {/* Company Info */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-6">COMPANY</h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Business Size */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-6">BUSINESS SIZE</h3>
              <ul className="space-y-3">
                {footerLinks.businessSize.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Business Type */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-6">BUSINESS TYPE</h3>
              <ul className="space-y-3">
                {footerLinks.businessType.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Download Section */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-6">DOWNLOAD</h3>
              <ul className="space-y-3">
                {appDownloads.map((app, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      <img src={app.icon} alt={app.platform} className="w-5 h-5" />
                      <span>{app.type} App</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Legal & Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-6">LEGAL</h3>
                <ul className="space-y-3">
                  {["Privacy Policy", "Terms & Conditions", "Return Policy"].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-6">CONTACT US</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="mailto:support@Rmax.com" 
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>support@Rmax.com</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+919459671235" 
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91 9459671235</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Copyright. All Right Reserved@RMax
                </p>
                <div className="flex gap-6">
                  {[Twitter, Facebook, Linkedin].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default Footer;