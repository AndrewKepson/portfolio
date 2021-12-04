import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

export default function DevelopmentCardImage({ classes, imgSrc, altText }) {
  return (
    <div className={classes.cardImageWrapper}>
      <GatsbyImage
        image={imgSrc.node.childImageSharp.gatsbyImageData}
        className={classes.cardImage}
        loading="lazy"
        alt={altText} />
    </div>
  );
}
