import { Container, Stack, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import img from "./IMG.jpg";

function Header() {
  return (
    <Stack>
      <img src={img} alt="" style={{ height: "600px" }} />
      <Container
        style={{
          width: "400px",
          position: "absolute",
          bottom: 0,
          left: "35%",
          textAlign: "center",
        }}>
        <Typography variant="h4" color="white">
          Explore our collection
        </Typography>
        <ArrowDownwardIcon style={{ color: "white" }} />
      </Container>
    </Stack>
  );
}

export default Header;

// import { Typography } from "@mui/material";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css/swiper.min.css";

// const MaterialUISlider = () => {
//   return (
//     <Swiper spaceBetween={10} slidesPerView={1}>
//       <SwiperSlide>
//         <Typography variant="h3">Slide 1</Typography>
//       </SwiperSlide>
//       <SwiperSlide>
//         <Typography variant="h3">Slide 2</Typography>
//       </SwiperSlide>
//       <SwiperSlide>
//         <Typography variant="h3">Slide 3</Typography>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default MaterialUISlider;
