import { makeStyles } from "@mui/styles";
import mainBg from "../../svg icons/main_bg/1.jpg";

export default makeStyles({
    container: {
        height: "calc(100vh - 117px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${mainBg})fixed center`,
        backgroundSize: "100%",
    },
    formContainer: {
        width: "400px",
        padding: "10px 20px",
    },
    TopForm: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h6": {
            margin: "5px 0",
        },
    },
    formBtn: {
        margin: "10px 0!important",
    },
    formBottom: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "10px",
    },
});
