import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        backgroundColor: "#efeff1",
        width: "260px",
        position: "sticky",
        minHeight: "400px",
        height: "calc(100vh - 65px)",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        [theme.breakpoints.down("sm")]: {
            top: "49px",
            height: "calc(100vh - 49px)",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
    },
    a_BRAND: {
        width: "100%",
        height: "100px",
        backgroundColor: "white",
        borderRadius: "10px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "1px 4px 4px rgba(0,0,0,0.3)",
    },
}));
