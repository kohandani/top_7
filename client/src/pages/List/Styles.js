import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {},
    ListContainer: {
        display: "flex",
    },
    filtering: {
        width: "100%",
        backgroundColor:"green",
        display: "flex",
        direction: "ltr",
        padding: "10px 30px",
        justifyContent: "space-between",
        backgroundColor: "whitesmoke",
        marginBottom: "20px",
    },
    collapse: {
        display: "none!important",
        backgroundColor: "white",
        padding: "10px",
        width: "40px!important",
        borderRadius: "50%",
        height: "40px!important",
        [theme.breakpoints.down("lg")]: {
            display: "inline-block!important",
        },
        cursor: "pointer",
    },
    select: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: "5px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        "& p": {
            marginLeft: "10px",
        },
    },
    itemsContainer: {
        flex: "1",
    },
    items: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));
