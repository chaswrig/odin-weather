import pizzaImage from "./pizza.jpg"

export function gifLoader() {
  const image = new Image(400);
  image.src = pizzaImage;
  return image;
};
