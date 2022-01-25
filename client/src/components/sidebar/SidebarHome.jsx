import useStyle from "./Styles";
import { Typography } from "@mui/material";

const SidebarHome = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div className={classes.a_BRAND}>
                <Typography variant="h5">A1</Typography>
            </div>
            <div className={classes.a_BRAND}>
                <Typography variant="h5">A2</Typography>
            </div>
            <div className={classes.a_BRAND}>
                <Typography variant="h5">A3</Typography>
            </div>
            <div className={classes.a_BRAND}>
                <Typography variant="h5">A4</Typography>
            </div>
        </div>
    );
};

export default SidebarHome;
