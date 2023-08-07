  import React, { useState } from 'react';
  import ContentSection from "~/components/content-section.astro";

  const ResponsiveCard = () => {
    const [selectedIcon, setSelectedIcon] = useState(0);

    const iconsData = [
      {
        label: 'Robotik egitimleri falan filanla alakalidir.',
        image: '/src/content/showcase/courses_images/classic-hero.jpg',
        title: 'Robotik Egitimleri',
        description: 'Description 1',
      },
      {
        label: 'Que significa es la vida sin tu',
        image: '/src/content/showcase/courses_images/dark-hero.jpg',
        title: 'La Vida',
        description: 'Description 2',
      },
      {
        label: 'Robotik egitimleri falan filanla alakalidir.',
        image: '/src/content/showcase/courses_images/classic-hero.jpg',
        title: 'Robotik Egitimleri',
        description: 'Description 1',
      },
      {
        label: 'Que significa es la vida sin tu',
        image: '/src/content/showcase/courses_images/dark-hero.jpg',
        title: 'La Vida',
        description: 'Description 2',
      },
      
      // Add more icon data as needed
    ];

    const handleIconClick = (index) => {
      setSelectedIcon(index);
    };

    return (
      <div
        className="bg-white rounded-lg shadow-lg p-4 flex flex-col lg:flex-row mx-auto"
        style={{
          maxWidth: '1200px', // Adjust the max width as needed
          minHeight: '400px', // Set a minimum height
          height: 'auto', // Let the content determine the height
        }}
      >
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            {iconsData[selectedIcon].title}
          </h2>
          <div className="lg:hidden mb-4">
            <img
              src={iconsData[selectedIcon].image}
              alt={iconsData[selectedIcon].label}
              className="rounded-lg h-64 object-cover w-full"
            />
          </div>
          <p className="text-gray-600 mb-6">
            {iconsData[selectedIcon].description}
          </p>
          <div className="flex space-x-4">
            {iconsData.map((icon, index) => (
              <button
                key={index}
                onClick={() => handleIconClick(index)}
                className={`p-2 ${
                  selectedIcon === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                } rounded-lg focus:outline-none`}
              >
                <img
                  src={`/src/content/showcase/courses_images/icons/${index}.svg`}
                  alt={icon.label}
                  width="24"
                  height="24"
                  className="inline"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <img
            src={iconsData[selectedIcon].image}
            alt={iconsData[selectedIcon].label}
            className="rounded-lg h-96 object-cover w-full"
          />
        </div>
      </div>
    );
  };

  export default ResponsiveCard;
