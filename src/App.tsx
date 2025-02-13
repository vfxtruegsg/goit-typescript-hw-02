import "./App.css";
import { useState, useEffect } from "react";
import galleryQuery from "./api-query";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import toast from "react-hot-toast";

interface UnsplashPhoto {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ModalImage {
  modalImg: string;
  altDescr: string;
}

function App() {
  const [articles, setArticles] = useState<UnsplashPhoto[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ModalImage | undefined>(
    undefined
  );

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        if (query === "") {
          return;
        }
        setError(false);
        setLoading(true);

        const { results } = await galleryQuery(query, page);
        setArticles((prev) => [...prev, ...results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getArticlesData();
  }, [query, page]);

  const handleNewQuery = (newQuery: string) => {
    if (query === newQuery) {
      toast.error("Enter please new request!");
      return;
    }
    setPage(1);
    setQuery(newQuery);
    setArticles([]);
  };

  const handleUpPage = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image: ModalImage) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(undefined);
  };

  return (
    <>
      <SearchBar onSubmit={handleNewQuery} />
      {loading && <Loader />}
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery articles={articles} onImageClick={openModal} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      {articles.length > 0 && <LoadMoreBtn click={handleUpPage} />}
    </>
  );
}

export default App;
