type Image = {
  jpgS?: string;
  jpgS2x?: string;
  jpgS3x?: string;
  jpgL?: string;
  jpgL2x?: string;
  jpgL3x?: string;
  webpS?: string;
  webpS2x?: string;
  webpS3x?: string;
  webpL?: string;
  webpL2x?: string;
  webpL3x?: string;
  jpg?: string;
  jpg2x?: string;
  jpg3x?: string;
  webp?: string;
  webp2x?: string;
  webp3x?: string;
};
type Props = {
  image: Image;
  alt: string;
  className?: string;
};

function Picture({ image, alt, className }: Props) {
  const {
    jpgS,
    jpgS2x,
    jpgS3x,
    jpgL,
    jpgL2x,
    jpgL3x,
    webpS,
    webpS2x,
    webpS3x,
    webpL,
    webpL2x,
    webpL3x,
    jpg,
    jpg2x,
    jpg3x,
    webp,
    webp2x,
    webp3x,
  } = image;
  return (
    <picture>
      {webpS && (
        <source
          srcSet={`${webpS} 1x, ${webpS2x} 2x, ${webpS3x} 3x`}
          type="image/webp"
          media="(max-width:767px)"
        />
      )}
      {jpgS && (
        <source
          srcSet={`${jpgS} 1x, ${jpgS2x} 2x, ${jpgS3x} 3x`}
          type="image/jpeg"
          media="(max-width:767px)"
        />
      )}
      {webpL && (
        <source
          srcSet={`${webpL} 1x, ${webpL2x} 2x, ${webpL3x} 3x`}
          type="image/webp"
          media="(min-width:768px)"
        />
      )}
      {jpgL && (
        <source
          srcSet={`${jpgL} 1x, ${jpgL2x} 2x, ${jpgL3x} 3x`}
          type="image/jpeg"
          media="(min-width:768px)"
        />
      )}
      {webp && (
        <source
          srcSet={`${webp} 1x, ${webp2x} 2x, ${webp3x} 3x`}
          type="image/webp"
        />
      )}
      {jpg && (
        <source
          srcSet={`${jpg} 1x, ${jpg2x} 2x, ${jpg3x} 3x`}
          type="image/jpeg"
        />
      )}
      <img src={jpgS || jpg} alt={alt} width="280" className={className} />
    </picture>
  );
}
export default Picture;
