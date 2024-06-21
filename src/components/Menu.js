// src/components/Menu.js
import React from 'react';

const menuItems = [
  {
    title: 'LOBSTER SKAGAN',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '24',
    description: 'Olive oil, scallion cream cheese, lobster salad \n*Add caviar (Premium Reserve Kaluga) $12',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=270',
  },
  {
    title: 'SMÖGEN',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '14 - 24',
    description: 'Black pearl smoked trout roe, plain CC, fresh dill',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=244',
  },
  {
    title: 'ZOEY\'S POKE',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '12 - 21',
    description: 'Ahi Poke, Scallion CC, Furikake, Scallion',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=10',
  },
  {
    title: 'THE NEW YORKER',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '12 - 20',
    description: 'Totopos, tomatillo sauce, poached egg, cotija cheese, sour cream, pickled onions and cilantro.',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=390',
  },
  {
    title: 'RÖKT LOX',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '9 - 16',
    description: 'Hand sliced house smoked salmon, plain CC, olive oil, red onion, capers',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=1',
  },
  {
    title: 'THE JOINT VENTURE',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '12 - 22',
    description: 'Smogen whitefish salad w/ The Joint  Seafood’s smoked dry aged kanpachi collar, plain CC, topped with wasabi infused flying fish tobiko roe',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=3',
  },
  {
    title: 'SMOKED SALMON A LA CARTÉ',
    gifSrc: 'https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6561a1c16388936720be4c5a/cea91327-2e17-4083-8edd-30f9578c85f0/Lobster+Skagen+test+1.gif?format=2500w%202500w',
    price: '9 - 32',
    description: '',
    allergens: ['Soya', 'Crustacean'],
    storeLink: 'https://smgen-appetizers.square.site/?location=11ee9b542e3982a2964c3cecef6dbab4&item=18#42QZNKGUVHIGX6LFNG2FB4Y4',
  },
];

const Menu = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Restaurant Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <a key={index} href={item.storeLink} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white shadow-lg rounded-lg h-96 w-full flex flex-col">
                <div className="h-48 w-full">
                  <img src={item.gifSrc} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold group-hover:text-blue-500">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <p className="text-lg font-semibold">{item.price}</p>
                    <div className="relative">
                      <div className="absolute bottom-0 right-0 bg-white shadow-lg p-2 rounded-lg hidden group-hover:block">
                        <h3 className="text-sm font-bold">llergens:</h3>
                        <ul className="text-xs text-red-500">
                          {item.allergens.map((allergen, i) => (
                            <li key={i}>{allergen}</li>
                          ))}
                        </ul>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500 hover:text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M12 12h.01M9 20h6a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  

export default Menu;
