"use client";
import { useEffect } from "react";

export default function ScrollToElement() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        setTimeout(() => {
          element.scrollIntoView();
        }, 100);
      }
    }
  }, []);

  return <></>;
}
