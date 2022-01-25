import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    buttonWrapper: {
        backgroundColor: "red",
    },
    img: {
        height: "400px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            height: "250px",
        },
    },
}));
