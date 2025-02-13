import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  click: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ click }) => {
  return (
    <button className={css["load-more-btn"]} onClick={click}>
      Load More!
    </button>
  );
};

export default LoadMoreBtn;
