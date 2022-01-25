import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        padding: "10px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 0 2px rgba(0,0,0,.3)",
        borderBottom: "1px solid white",
        backdropFilter: "blur(3px) !important",
        backgroundColor: "rgba(255, 255, 255, 0.72) !important",
    },
    profileContainer: {
        padding: "10px",
        flex: "2",
    },
    profile: {
        display: "flex",
        alignItems: "center",
        flexGrow: "1",
        justifyContent: "flex-start",
        "& h6": {
            margin: "0px 20px",
        },
    },

    list: {
        flex: "6",
        margin: "5px 0",
        padding: "10px",
    },
    filter: {
        flex: "4",
        padding: "10px",
    },
    panelBig: {
        [theme.breakpoints.down("md")]: {
            display: "none!important",
        },
    },
    panelSmall: {
        display: "none!important",
        [theme.breakpoints.down("md")]: {
            display: "inline-block!important",
        },
    },
}));
