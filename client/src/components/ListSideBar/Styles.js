import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        backgroundColor: "#efeff1",
        width: "260px",
        position: "sticky",
        top: "65px",
        height: "calc(100vh - 65px)",
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
        [theme.breakpoints.down("sm")]: {
            top: "49px",
            height: "calc(100vh - 49px)",
        },
    },
    info: {
        padding: "16px  20px",
    },
    itemContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px",
        marginTop: "2px",
        transition: "0.3s ease",
        "&:hover": {
            boxShadow: "1px 4px 4px rgba(0,0,0,0.1)",
            cursor: "pointer",
        },
    },
    iteminfo: {
        marginRight: "10px",
    },
    itemPic: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "whitesmoke",
    },
    itemRate: {
        marginRight: "auto",
    },
}));
