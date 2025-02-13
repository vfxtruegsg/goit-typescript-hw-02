import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css["error"]}>
      Something went wrong, please, try again one more time...
    </p>
  );
};

export default ErrorMessage;
