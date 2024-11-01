import { FC, ReactNode } from "react";

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  date?: string;
  content: ReactNode;
}

const PhotoCard: FC<PhotoCardProps> = ({}) => {
  return <div />;
};

export default PhotoCard;
