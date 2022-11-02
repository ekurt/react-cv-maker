import { useSelector } from "react-redux";

export const useWords = () => {
  const { words, language } = useSelector((state) => state.language);
  return words[language];
};
