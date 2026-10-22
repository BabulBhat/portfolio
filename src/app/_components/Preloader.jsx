"use client"
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const finishLoading = () => {
      setHide(true);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, {
        once: true,
      });
    }
    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);
  if (!loading) return null;
  return (
    <div className={`preloader ${hide ? "hide" : ""}`}>
      <div className="spinner"></div>
      <p>LOADING</p>
    </div>
  );
}
