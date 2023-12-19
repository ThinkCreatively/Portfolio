import Image from "next/image";
import Link from "next/link";

interface AboutMeProps {
  src: string;
  alt: string;
  linkUrl?: string;
  className?: string;
}

const AboutMeImage = ({ src, alt, linkUrl, className }: AboutMeProps) => {
  return (
    <Link
      href={linkUrl ? linkUrl : ""}
      target="_blank"
      className={`${linkUrl ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <Image src={src} alt={alt} height={40} width={40} className={className} />
    </Link>
  );
};

export default AboutMeImage;
