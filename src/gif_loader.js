import { getKey } from "./gif_key.js";

export async function gifLoader(temp) {
  let source = '';
  if(temp > 85.0) {
    await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${getKey()}&s=hot&rating=g`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data.images.original_still.url);
      source = response.data.images.original_still.url
    })
  } else {
      await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${getKey()}&s=cold&rating=g`)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data.images.original_still.url);
        source = response.data.images.original_still.url
      })
  }
  
  return source;
};
