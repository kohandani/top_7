import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    mainContainer: {
        height: "450px",
        padding: "30px 10px",
    },
    Container: {
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        WebkitBoxShadow: "10px 10px 60px 0px rgba(0,0,0,0.5)",
        MozBoxShadow: "10px 10px 60px 0px rgba(0,0,0,0.5)",
        BoxShadow: "10px 10px 60px 0px rgba(0,0,0,0.5)",
    },
    infoSection: {
        width: "300px",
        padding: "15px",
        backdropFilter: "blur(5px)",
        zIndex: "99",
        [theme.breakpoints.down("md")]: {
            background:
                "linear-gradient(61deg, rgba(255,255,255,0.16010154061624648) 0%, rgba(255,255,255,1) 48%)",
        },
    },
    moreInfo: {
        height: "50px",
        display: "flex",
        alignItems: "center",
        "& P": {
            color: "#607d8b",
        },
    },
    Boss: {
        marginLeft: "15px",
    },
    infoBottom: {
        height: "200px",
        "& p": {
            lineHeight: "1.5rem",
            letterSpacing: "0.3px",
            wordSpacing: "2px",
            fontSize: "0.8rem",
            color: "GrayText",
        },
    },
    infoBottonSection: {},
    mediaSection: {
        width: "560px",
        transition: "0.3s linear",
        [theme.breakpoints.down("md")]: {
            width: "300px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "150px",
        },
        position: "relative",
    },

    boxImg: {
        width: "500px",
        height: "280px",
        position: "absolute",
        left: "30px",
        top: "-25px",
        boxShadow: "10px 10px 60px 0 rgba(0,0,0,0.7)",
        [theme.breakpoints.down("sm")]: {
            width: "420px",
        },
        "& img": {
            width: "100%",
            height: "100%",
        },
    },
    likeBox: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid white",
        position: "absolute",
        top: "10px",
        left: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "ease-in-out 0.3s",
        "&:hover": {
            backgroundColor: "whitesmoke",
        },
        "& svg": {
            color: "white",
            transition: "ease-in-out 0.7s",
            "&:hover": {
                color: "red",
            },
        },
    },
    soicalIcons: {
        position: "absolute",
        bottom: "0",
        direction: "ltr",
        left: "0",
        width: "100%",
        height: "110px",
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            height: "135px",
            padding: " 10px 10px 10px 35px",
        },
    },
    leftIcons: {
        display: "flex",
        direction: "ltr",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
    rightIcons: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            "& span": {
                flexDirection: "column",
            },
        },
    },
}));
