import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000300] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure 
            there isn't anything embarrassing hidden in the middle of text. 
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Industries</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Company</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Email: support@blmlogisticsltd.com</p>
            <p className="text-sm mb-2">Phone: +123 456 7890</p>
            <p className="text-sm">Address: 123 BLM Logistics Street, Lagos</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 BLM Logistics Limted. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
