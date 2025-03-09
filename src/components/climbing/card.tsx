import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface ClimbingCardProps {
  imageUrl?: string;
  title: string;
  subTitle?: string;
}

const ClimbingCard: FC<ClimbingCardProps> = ({ imageUrl, title, subTitle }) => {
  return (
    <motion.div drag>
      <Card className="w-[380px] h-fit">
        {/* 이름 */}
        <CardHeader className="font-medium text-[15px]">{title}</CardHeader>
        {/* 이미지 */}
        {imageUrl && (
          <CardContent className="w-full">
            <Image
              width={300}
              height={100}
              src={imageUrl}
              alt={title}
              className="w-full h-[180px] object-cover"
            />
          </CardContent>
        )}
        {/* 주소 */}
        <CardFooter className="text-[13px]">{subTitle}</CardFooter>
      </Card>
    </motion.div>
  );
};

export default ClimbingCard;
