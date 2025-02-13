import css from "./ImageCard.module.css";
type CardImg = {
  small: string;
  alt_description: string;
  onImageClick: () => void;
};

const ImageCard = ({ small, alt_description, onImageClick }: CardImg) => {
  return (
    <div>
      <img
        className={css["img-card"]}
        src={small}
        alt={alt_description}
        onClick={onImageClick}
      />
    </div>
  );
};

export default ImageCard;
