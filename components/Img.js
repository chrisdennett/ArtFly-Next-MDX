import React from "react";
import styles from "./img.module.css";

const Img = ({ src, w, h, alt }) => {
  return (
    <>
      <img src={src} width={w} height={h} alt={alt} className={styles.img} />
    </>
  );
};

export default Img;
