import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        direction: "ltr",
        width: "80px",
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: "10px",
        [theme.breakpoints.down("md")]: {
            margin: "10px 0",
        },
        "& svg": {
            width: "35px",
            height: "35px",
            color: "white",
            padding: "6px",
            borderRadius: "50%",
            backgroundColor: "#4ac0ff",
            transition: "0.3s ease",
        },
        "& p": {
            marginLeft: "10px",
            color: "GrayText",
            fontSize: "12px",
            letterSpacing: "2px",
            lineHeight: "1rem",
        },
    },
    first: {
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
}));
