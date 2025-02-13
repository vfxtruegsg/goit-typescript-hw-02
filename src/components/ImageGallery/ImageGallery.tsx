import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Article {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface GalleryImg {
  articles: Article[];
  onImageClick: (image: { modalImg: string; altDescr: string }) => void;
}

const ImageGallery: React.FC<GalleryImg> = ({
  articles,
  onImageClick,
}: GalleryImg) => {
  return (
    <ul className={css["gallery-list"]}>
      {articles.map(({ alt_description, id, urls: { small, regular } }) => (
        <li key={id}>
          <ImageCard
            small={small}
            regular={regular}
            alt_description={alt_description}
            onImageClick={() =>
              onImageClick({ modalImg: regular, altDescr: alt_description })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
