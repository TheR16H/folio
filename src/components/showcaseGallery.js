import React from 'react';

function importAllImages(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key] = r(key);
  });
  return images;
}

const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|gif|svg)$/));

const showcaseGallery = () => {
  return (
    <div>
      <h1>showcase</h1>
      {Object.keys(images).map((key) => (
        <img key={key} src={images[key].default} alt={key} />
      ))}
    </div>
  );
}