import { Puff } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css["loader-container"]}>
      <Puff color="#a8c6ff" />
    </div>
  );
};

export default Loader;
