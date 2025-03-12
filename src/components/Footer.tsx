
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our Heritage", href: "#" },
        { name: "Our Coffee", href: "#" },
        { name: "Stories and News", href: "#" },
        { name: "Investor Relations", href: "#" },
        { name: "Policies and Standards", href: "#" },
      ],
    },
    {
      title: "Careers",
      links: [
        { name: "Culture and Values", href: "#" },
        { name: "Inclusion, Diversity, and Equity", href: "#" },
        { name: "College Achievement Plan", href: "#" },
        { name: "U.S. Careers", href: "#" },
        { name: "International Careers", href: "#" },
      ],
    },
    {
      title: "Social Impact",
      links: [
        { name: "People", href: "#" },
        { name: "Planet", href: "#" },
        { name: "Environmental and Social Impact Reporting", href: "#" },
      ],
    },
    {
      title: "For Business Partners",
      links: [
        { name: "Landlord Support Center", href: "#" },
        { name: "Suppliers", href: "#" },
        { name: "Corporate Gift Card Sales", href: "#" },
        { name: "Office and Foodservice Coffee", href: "#" },
      ],
    },
    {
      title: "Order and Pickup",
      links: [
        { name: "Order on the App", href: "#" },
        { name: "Order on the Web", href: "#" },
        { name: "Delivery", href: "#" },
        { name: "Order and Pickup Options", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerLinks.map((column) => (
            <div key={column.title} className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-gray-600 hover:text-starbucks-green transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-500 hover:text-starbucks-green transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-starbucks-green transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-starbucks-green transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-starbucks-green transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-starbucks-green transition-colors duration-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="#" className="text-sm text-gray-600 hover:text-starbucks-green mr-4 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-600 hover:text-starbucks-green mr-4 transition-colors duration-300">
                Terms of Use
              </Link>
              <Link to="#" className="text-sm text-gray-600 hover:text-starbucks-green transition-colors duration-300">
                Cookie Preferences
              </Link>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
