import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThumbsIcon from "@mui/icons-material/ThumbUpAltOutlined";
import image from "../assets/images/Image.png";
import logo from "../assets/images/Avatarphoto.png";

const useStyles = makeStyles({
  wrapper: {
    margin: "20px",
    borderRadius: "8px",
    padding: "20px",
    border: "1px solid #EAECF0",
    fontFamily: "IBMPlexRegular",
  },
  innerBox: {
    width: "100%",
    borderRadius: "8px",
    position: "relative",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
  },
  logo: {
    position: "absolute",
    top: 150,
    left: 15,
    "@media(max-width:900px)": {
      display: "none",
    },
  },
  countDownWrapper: {
    marginLeft: "13rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:900px)": {
      marginLeft: 0,
      display: "block",
    },
  },
  countdown: {
    fontFamily: "IBMPlexSemiBold",
    marginBottom: "5px",
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  liveWrapper: {
    backgroundColor: "#FFFAEB",
    width: "80px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "15px",
    padding: "5px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  dotBox: {
    height: "6px",
    width: "6px",
    borderRadius: "50%",
    backgroundColor: "#F79009",
  },
});

const CountDown = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.innerBox}>
        <img src={image} alt="" className={classes.img} />
        <Box>
          <img src={logo} alt="" className={classes.logo} />
          <Box className={classes.countDownWrapper}>
            <Box>
              <p className={classes.countdown}>
                Starts in: 3 days : 2 hours : 24 minutes{" "}
              </p>
              <Box className={classes.flexBox}>
                <Box className={classes.liveWrapper}>
                  <Box className={classes.dotBox} />
                  <span> Not Live</span>
                </Box>
                <span>Layers Auction</span>
              </Box>
            </Box>
            <Button
              disableElevation
              size="small"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#344054",
                backgroundColor: "white",
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
              }}
              startIcon={<ThumbsIcon />}
            >
              Accept Invite
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CountDown;
