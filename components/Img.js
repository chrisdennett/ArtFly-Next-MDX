import React from "react";
import styles from "./img.module.css";
import { Image, Placeholder } from "cloudinary-react";

const Img = ({ src, w, h, alt }) => {
  return (
    <>
      <Image
        alt={alt}
        className={styles.img}
        cloudName="artfly"
        publicId={`artfly-projects/${src}`}
        loading="lazy"
        dpr="auto"
        responsive
        width="auto"
        crop="scale"
        responsiveUseBreakpoints="true"
      >
        <Placeholder type="pixelate" />
      </Image>

      {/* <img
        src={`https://res.cloudinary.com/artfly/image/upload/c_thumb,w_200,g_face/v1609227691/artfly-projects/${src}`}
        width={200}
        height={h}
        alt={alt}
        className={styles.img}
      />
      <img
        src={`https://res.cloudinary.com/artfly/image/upload/v1609227691/artfly-projects/${src}`}
        width={w}
        height={h}
        alt={alt}
        className={styles.img}
      /> */}
    </>
  );
};

export default Img;
