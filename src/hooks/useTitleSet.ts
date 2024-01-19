import { useEffect } from "react";

const useTitleSet = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitleSet;
