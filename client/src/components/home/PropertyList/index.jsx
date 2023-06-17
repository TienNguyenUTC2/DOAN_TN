import { Box, Grid, Typography } from "@mui/material";
import LazyLoadImage from "../../LazyLoadImage";
export default function PropertyList() {
  return (
    <Box>
      <Typography variant="h4" color="#003580">
        Điểm đến đang thịnh hành
      </Typography>
      <Typography variant="body1">
        Du khách tìm kiếm về Việt Nam cũng đặt chỗ ở những nơi này
      </Typography>
      <Grid container spacing={1} mt={1}>
        {itemData.map((item, index) => (
          <Grid
            key={index}
            item
            md={6}
            sx={{ position: "relative", borderRadius: 1 }}
          >
            <LazyLoadImage
              alt={item.title}
              src={item.img}
              sx={{ maxHeight: 300, borderRadius: 1 }}
            />
            <Typography
              variant="h4"
              color="#fff"
              sx={{
                position: "absolute",
                top: 30,
                left: 40,
              }}
            >
              {item.city}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} mt={1}>
        {itemData2.map((item, index) => (
          <Grid
            key={index}
            item
            md={4}
            sx={{ position: "relative", borderRadius: 1 }}
          >
            <LazyLoadImage
              alt={item.title}
              src={item.img}
              sx={{ maxHeight: 300, borderRadius: 1 }}
            />
            <Typography
              variant="h4"
              color="#fff"
              sx={{
                position: "absolute",
                top: 30,
                left: 40,
              }}
            >
              {item.city}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=",
    title: "Breakfast",
    city: "Vũng Tàu",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=",
    title: "Burger",
    city: "Thành Phố Hồ Chí Minh",
  },
];
const itemData2 = [
  {
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
    title: "Breakfast",
    city: "Đà Nẵng",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=",
    title: "Burger",
    city: "Đà Lạt",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/city/600x600/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=",
    title: "Camera",
    city: "Nha Trang",
  },
];
