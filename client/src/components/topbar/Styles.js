import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    appbar: {
        backdropFilter: "blur(8px) !important",
        boxShadow: "0px 4px 7px 0px rgba(0,0,0,0.1)!important",
        backgroundColor: "rgba(255, 255, 255, 0.72) !important",
        borderBottom: "1px solid white",
    },
    search: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: "0 2rem",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "5px",
        transition:'.3s',
        boxShadow: "0px 4px 7px 0px rgba(0,0,0,0.1)",
        '&:hover':{
            boxShadow: "0 2px 4px rgba(0,0,0,.3)",
        },
        [theme.breakpoints.down("md")]: {
            margin: "0 1rem",
        },
        [theme.breakpoints.down("sm")]: {
            flexGrow: "inherit",
        },
    },
    serachIcon: {
        marginLeft: "5px",
        color: "#007FFF",
        cursor: "pointer",
    },
    searchInput: {
        flexGrow: 1,
        "& input": {
            [theme.breakpoints.down("md")]: {
                padding: "0",
                fontSize:'13px'
            },
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    },

    leftIcons: {
        color: "#007FFF",
        [theme.breakpoints.down("md")]: {
            fontSize: "20px !important",
        },
    },
    badge: {
        [theme.breakpoints.down("md")]: {
            fontSize: "10px !important",
        },
        "& .MuiBadge-badge": {
            top: "15px",
            right: "20px",
            backgroundColor: "red",
            [theme.breakpoints.down("md")]: {
                fontSize: "10px !important",
                top: "10px",
                right: "20px",
            },
        },
    },
}));
