export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };

  // this is supposed to help with getting images 
  // since they were being silly. i dont fully understand yet

