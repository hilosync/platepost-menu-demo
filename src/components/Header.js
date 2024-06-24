import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white">
      <img 
        src="https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/9eb83b37-4e7f-4113-817a-8066b33580a1/FULL+COLOR+Logo.png" 
        alt="Logo" 
        className="w-48 h-auto mb-1"
      />
      <h1 className="text-3xl font-bold underline decoration-red-500 mb-1">Video Menu</h1>
      <p className="text-lg">(tap on item to order!)</p>
    </div>
  );
};

export default Header;