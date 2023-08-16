  import React, { useState } from 'react';
  import ContentSection from "~/components/content-section.astro";

  const ResponsiveCard = () => {
    const [selectedIcon, setSelectedIcon] = useState(0);

    const iconsData = [
      {
        "label": "Yazılım Geliştirme.",
        "image": "images/courses/software-dev.png",
        "title": "Yazılım Geliştirme",
        "description": "Yazılım geliştirme konusunda geniş bir yelpazede kurslar sunuyoruz. Yazılım dünyasının en son trendlerini ve teknolojilerini öğrenmek için doğru yerdesiniz."
      },
      {
        "label": "Robotik ve Otomasyon",
        "image": "images/courses/robotic.png",
        "title": "Robotik ve Otomasyon",
        "description": "Robotik ve otomasyon alanında uzmanlaşmak isteyenler için kapsamlı eğitimler sunuyoruz. Geleceğin teknolojilerini keşfedin."
      },
      {
        "label": "Dijital Tasarım ve Kullanıcı Deneyimi",
        "image": "images/courses/user-experience.png",
        "title": "Dijital Tasarım ve Kullanıcı Deneyimi",
        "description": "Kullanıcı deneyimi ve dijital tasarımın temel prensiplerini öğrenerek etkileyici ve kullanıcı dostu ürünler tasarlamayı öğrenin."
      },
      {
        "label": "3D Modelleme ve Prototip",
        "image": "images/courses/dark-hero.jpg",
        "title": "3D Modelleme ve Prototip",
        "description": "Kreatif düşünme ve tasarlama süreçlerini 3D modelleme ve prototipleme ile birleştirerek hayal ettiğiniz ürünleri hayata geçirin."
      },
      {
        "label": "Uzay Bilimleri",
        "image": "images/courses/science.png",
        "title": "Uzay Bilimleri",
        "description": "Evrenin derinliklerini keşfetmek ve uzay bilimlerindeki son gelişmeleri öğrenmek için sizi uzayın büyülü dünyasına davet ediyoruz."
      },
      {
        "label": "Biyoteknoloji ve Genetik Mühendisliği",
        "image": "images/courses/biotech.png",
        "title": "Biyoteknoloji ve Genetik Mühendisliği",
        "description": "Biyoteknoloji ve genetik mühendisliği alanında temel prensipleri öğrenerek sağlık, tarım ve endüstri için çığır açan çözümler geliştirmeyi keşfedin."
      }
      
      // Add more icon data as needed
    ];

    const handleIconClick = (index) => {
      setSelectedIcon(index);
    };

    return (
      <div
        className="bg-white rounded-lg shadow-lg p-4 flex flex-col lg:flex-row mx-auto"
        style={{
          maxWidth: '900px', // Adjust the max width as needed
          // minHeight: '400px', // Set a minimum height
          height: 'auto', // Let the content determine the height
        }}
      >
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col justify-start">
            <h2 className="text-primary text-3xl font-bold mb-4 ">
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
          </div>
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
                  src={`images/icons/${index}.svg`}
                  alt={icon.label}
                  width="24"
                  height="24"
                  className="inline"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block" style={{ aspectRatio: '16 / 9' }}>
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
