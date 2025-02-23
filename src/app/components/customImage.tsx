import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 500} // Default width
      height={height || 300} // Default height
      className={className}
      priority // Improves loading for above-the-fold images
    />
  );
};

export default CustomImage;