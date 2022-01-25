import { Typography } from "@mui/material";
import useStyle from "./Styles";

const ListSideBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <Typography variant="body2">
                    پیشنهاد های مرتبط :
                </Typography>
            </div>
            <div className={classes.itemContainer}>
                <div className={classes.itemPic}></div>
                <div className={classes.iteminfo}>
                    <Typography color="lightgray">EXAMPLE 1</Typography>
                </div>
                <div className={classes.itemRate}>
                    <Typography color="lightgray">4.2</Typography>
                </div>
            </div>
            <div className={classes.itemContainer}>
                <div className={classes.itemPic}></div>
                <div className={classes.iteminfo}>
                    <Typography color="lightgray">EXAMPLE 2</Typography>
                </div>
                <div className={classes.itemRate}>
                    <Typography color="lightgray">4.4</Typography>
                </div>
            </div>
            <div className={classes.itemContainer}>
                <div className={classes.itemPic}></div>
                <div className={classes.iteminfo}>
                    <Typography color="lightgray">EXAMPLE 3</Typography>
                </div>
                <div className={classes.itemRate}>
                    <Typography color="lightgray">4.6</Typography>
                </div>
            </div>
            <div className={classes.itemContainer}>
                <div className={classes.itemPic}></div>
                <div className={classes.iteminfo}>
                    <Typography color="lightgray">EXAMPLE 4</Typography>
                </div>
                <div className={classes.itemRate}>
                    <Typography color="lightgray">4.8</Typography>
                </div>
            </div>
            <div className={classes.itemContainer}>
                <div className={classes.itemPic}></div>
                <div className={classes.iteminfo}>
                    <Typography color="lightgray">EXAMPLE 5</Typography>
                </div>
                <div className={classes.itemRate}>
                    <Typography color="lightgray">5</Typography>
                </div>
            </div>
            <div className={classes.bottom}></div>
        </div>
    );
};

export default ListSideBar;
