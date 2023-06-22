import * as React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography, Stack, Rating, Button } from "@mui/material";
import LazyLoadImage from "~/components/LazyLoadImage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
function HomeStayList(props) {
  return (
    <Box>
      <Typography variant="h4" color="#003580">
        Tìm theo loại chỗ nghỉ
      </Typography>

      <Grid container mt={3} spacing={2}>
        {itemData.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <LazyLoadImage
              className="image"
              src={item.img}
              alt={item.title}
              sx={{
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                boxShadow: 2,
              }}
              sxImage={{
                borderRadius: "8px 8px 0px 0px",
                minHeight: 250,
                maxHeight: 300,
              }}
            >
              <Typography pl={2} fontWeight={700} mt={1} color="#003580">
                {item.city}
              </Typography>
              <Typography pl={2} pb={1} variant="body2">
                {item.quantity} chỗ nghỉ
              </Typography>
            </LazyLoadImage>
          </Grid>
        ))}
      </Grid>

      <Typography mt={5} variant="h4" color="#003580">
        Nhà ở mà khách yêu thích
      </Typography>

      <Grid container mt={3} spacing={2}>
        {itemData2.map((item, index) => (
          <Grid item xs={6} md={4} key={index}>
            <LazyLoadImage
              src={item.img}
              alt={item.title}
              sx={{
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                boxShadow: 2,
              }}
              sxImage={{
                borderRadius: "4px 4px 0px 0px",
                minHeight: 250,
                maxHeight: 300,
              }}
            >
              <Typography pl={2} fontWeight={700} mt={1} color="#003580">
                {item.city}
              </Typography>
              <Typography pl={2} variant="body2">
                {item.quantity}
              </Typography>
              <Typography pl={2} pb={1} fontWeight={700} variant="body1">
                {item.vnd}
              </Typography>
              <Typography pl={2}>
                <Rating
                  name="half-rating"
                  defaultValue={item.rate}
                  precision={0.5}
                  readOnly
                />
              </Typography>
              <Typography pb={2} pl={2}>
                {item.vote}
              </Typography>
            </LazyLoadImage>
          </Grid>
        ))}
      </Grid>
      <Typography align="center" mt={3} mb={5}>
        <Button variant="contained" startIcon={<ExpandMoreIcon />}>
          Xem thêm...
        </Button>
      </Typography>
      <Typography variant="h4" mb={2} color="#003580">
        Tải app khám phá thêm ưu đãi
      </Typography>
      <img
        width="100%"
        height="400"
        src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/04/1683175669593-e3274699e922beede5ff0298ed40e52b.jpeg?tr=q-75,w-1280"
        alt="banner"
      />
    </Box>
  );
}

const itemData = [
  {
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    title: "Breakfast",
    city: "Khách sạn",
    quantity: "976.856 khách sạn",
  },
  {
    img: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    title: "Burger",
    city: "Căn hộ",
    quantity: "59.703 căn hộ",
  },
  {
    img: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    title: "Camera",
    city: "Resort",
    quantity: "19.518 resort",
  },
  {
    img: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    title: "Breakfast",
    city: "Biệt thự",
    quantity: "615.897 biệt thự",
  },
  {
    img: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
    title: "Breakfast",
    city: "Nhà gỗ",
    quantity: "43.913 nhà gỗ",
  },
  {
    img: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
    title: "Breakfast",
    city: "Nhà nghỉ thôn dã",
    quantity: "60.671 nhà nghỉ thôn dã",
  },
  {
    img: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
    title: "Breakfast",
    city: "Nhà nghỉ mát",
    quantity: " 615.897 nhà nghỉ mát",
  },
  {
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
    title: "Breakfast",
    city: "Nhà trọ",
    quantity: "18.361 nhà trọ",
  },
];
const itemData2 = [
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
    title: "Breakfast",
    city: "Aparthotel Stare Miasto",
    quantity: "Old Town, Ba Lan, Kraków ",
    vnd: "Bắt đầu từ VND 4.111.984",
    rate: 4,
    vote: "Tuyệt vời 2.237 đánh giá",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
    title: "Burger",
    city: "7Seasons Apartments Budapest",
    quantity: "06. Terézváros, Hungary, Budapest ",
    vnd: "Bắt đầu từ VND 4.111.984",
    rate: 5,
    vote: "Tuyệt vời 9.137 đánh giá",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
    title: "Camera",
    city: "Oriente Palace Apartments",
    quantity: "Old Town, Ba Lan, Kraków",
    vnd: "Bắt đầu từ VND 4.111.984",
    rate: 4.5,
    vote: "Tuyệt vời 4.437 đánh giá",
  },
];
HomeStayList.propTypes = {};

export default HomeStayList;
