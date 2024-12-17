import React from "react";
import { Media, CarouselBlock } from "@/payload-types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  classname?: string;
} & CarouselBlock;

const isMedia = (media: any): media is Media => {
  return media && typeof media !== "number" && "url" in media;
};

const CarouselComponent: React.FC<Props> = ({ images }) => {

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}

      className="w-full flex items-center justify-center"
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className=" w-[300px] h-[300px]">
                <CardContent
                  className="flex aspect-square items-center justify-center"
                  
                >
                  {isMedia(item.image) ? (
                    <img
                      src={item.image.url}
                      alt={item.image.alt ?? `Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;