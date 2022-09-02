import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.querySelector(".layout-main-content");
    if (el) {
      el.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
