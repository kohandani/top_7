import { makeStyles } from "@mui/styles";
import mainBg from "../../svg icons/main_bg/1.jpg";

export default makeStyles((theme) => ({
    container: {
        display: "flex",
    },
    leftSide: {
        flexGrow: 1,
        padding: "20px 30px",
        background: `url(${mainBg})fixed center`,
        backgroundSize: "100%",
        [theme.breakpoints.down("lg")]: {
            padding: "unset",
        },
        // backgroundColor: "gray",
    },

    menuItems: {
        display: "grid",
        gridColumnGap: "10px",
        marginTop: "30px",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        [theme.breakpoints.down("lg")]: {
            padding: "15px",
        },
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr 1fr",
            gridRowGap: "30px",
            padding: "10px",
        },
    },
}));
