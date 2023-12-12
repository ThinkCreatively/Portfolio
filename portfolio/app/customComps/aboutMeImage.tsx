import Image from "next/image";

interface AboutMeProps {
  src: string;
  alt: string;
}

const AboutMeImage = ({src, alt}: AboutMeProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height="80"
      width="80"
    />
  );
};

export default AboutMeImage;
