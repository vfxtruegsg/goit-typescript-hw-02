import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void; // Функция принимает строку и ничего не возвращает
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (value.trim() === "") {
      toast.error("Enter please your request, field is empty!");
      return;
    }
    onSubmit(value);
  };

  return (
    <header className={css["header"]}>
      <form className={css["form"]} onSubmit={handleSubmit}>
        <input
          className={css["input"]}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
        />
        <button className={css["submit-btn"]} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
