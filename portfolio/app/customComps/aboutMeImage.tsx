import Image from "next/image";

interface AboutMeProps {
  src: string;
  alt: string;
  className?: string;
}

const AboutMeImage = ({src, alt, className}: AboutMeProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height="80"
      width="80"
      className={className}
    />
  );
};

export default AboutMeImage;
