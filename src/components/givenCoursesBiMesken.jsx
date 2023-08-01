import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { Button, Image } from "tailwindcss";

const AstroJSButtonComponent = ({ images, title }) => {
  const handleButtonClick = (imageIndex) => {
    const newImage = images[imageIndex];
    // Change the image at right.
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>        {images.map((image, index) => (
          <Button
            key={index}
            color="blue"
            size="lg"
            onClick={() => handleButtonClick(index)}
          >
            {image.name}
          </Button>
        ))}
      </div>
      <Image src={images[0].src} />
    </div>
  );
};

export default AstroJSButtonComponent;
