import Image from "../models/Image";

export default {
  render({ id, path }: Image) {
    const imagePath = `http://localhost:3333/uploads/${path}`;

    return { id, imagePath };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
