import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import Data from "./Data";
import ItemInternship from "./ItemInternship";

function CarouselItem() {
  return (
    <>
      <Carousel sx={{ marginTop: "1rem" }}>
        {Data?.projects?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
      <Carousel sx={{ marginTop: "1rem" }}>
        {Data?.internship?.map((item) => (
          <ItemInternship key={item.id} item={item} />
        ))}
      </Carousel>
    </>
  );
}

export default CarouselItem;
