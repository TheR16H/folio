import React, { useState, useEffect } from 'react';

const ShowcaseGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAllImages = async () => {
      const imageContext = require.context('../images', false, /\.(png|jpe?g|gif|svg)$/);
      const keys = imageContext.keys();
      const imagesArray = await Promise.all(keys.map(async (key) => {
        const module = await imageContext(key);
        return { key, src: module.default };
      });
      setImages(imagesArray);
    };

    importAllImages();
  }, []);

  return (
    <div>
      <h1>Showcase</h1>
      {images.map((image) => (
        <img key={image.key} src={image.src} alt={image.key} />
      ))}
    </div>
  );
};

export default ShowcaseGallery;