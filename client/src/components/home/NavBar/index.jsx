import { Container, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from "react-router-dom";
import AccountPopover from "~/layouts/dashboard/AccountPopover";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions, authState } from "~/features/authentication/authSlice";
import _ from "lodash";

const WrapperStyle = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down(400)]: {
    padding: 0,

    "&>div>div>button": {
      fontSize: 12,
      opacity: 0.7,
    },
  },
}));

export default function NavBar() {
  const dispach = useDispatch();
  const { accessToken, user } = useSelector(authState);

  useEffect(() => {
    if (!accessToken) return;

    dispach(authActions.getCurrentUserStart({ accessToken }));
  }, [accessToken]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <WrapperStyle position="static" sx={{ background: "#003580" }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  display: "inline-block",
                }}
                component={RouterLink}
                to="/"
              >
                <Stack direction="row" spacing={2} mt={1}>
                  <img
                    width="60"
                    height="60"
                    src="https://cf.bstatic.com/static/img/favicon/9ca83ba2a5a3293ff07452cb24949a5843af4592.svg"
                    alt=""
                  />
                  <Typography
                    variant="h3"
                    component="div"
                    fontWeight={700}
                    sx={{
                      lineHeight: 2,
                    }}
                  >
                    Booking.com
                  </Typography>
                </Stack>
              </Link>
            </Box>

            <Box>
              {user?.role === "ADMIN" ||
                (user?.role === "HOTEL" ? null : (
                  <Link
                    component={RouterLink}
                    to="/register/post-hotel"
                    sx={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Button color="inherit" sx={{ mr: 1 }}>
                      Đăng chỗ nghỉ của Quý vị
                    </Button>
                  </Link>
                ))}

              {!accessToken ? (
                <>
                  <Link
                    component={RouterLink}
                    to="/sign-in"
                    sx={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Button color="inherit" sx={{ mr: 1 }}>
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    sx={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Button color="inherit" sx={{ mr: 1 }}>
                      Đăng ký
                    </Button>
                  </Link>
                </>
              ) : (
                <AccountPopover />
              )}
            </Box>
          </Toolbar>
        </Container>
      </WrapperStyle>
    </Box>
  );
}
