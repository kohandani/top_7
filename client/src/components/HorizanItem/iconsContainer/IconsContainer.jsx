import { Typography } from "@mui/material";
import useStyle from "./Styles";

const IconsContainer = ({ Icon, count, style2 }) => {
    const classes = useStyle();
    return (
        <div className={classes.wrapper}>
            <Icon className={style2 ? classes.first : null} />
            <Typography variant="body2">{count}</Typography>
        </div>
    );
};

export default IconsContainer;
