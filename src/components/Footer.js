// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6">
        <div className="flex flex-col items-center space-y-4">
        <a 
      href="https://www.smogenappetizers.com/menu" 
      className="bg-red-500 text-white rounded-md px-4 py-2 inline-block text-3xl">
      FULL MENU HERE
    </a>
    </div>
    <div className="flex flex-col items-center space-y-2 py-12">
        <p><strong className="text-lg font-semibold">Powered by</strong></p>
        <a href="https://theplatepost.com" className="hover:underline" target="_blank" rel="noreferrer">
          <img src="https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/a809669c-bdf0-47de-b88f-b2732cac6453/Group+5.png" alt="Logo" className="h-10" />
          </a>
          </div>
    </footer>
  );
};

export default Footer;
