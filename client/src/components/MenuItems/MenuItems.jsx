import useStyle from "./Styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuItems = ({ title, svg_img, url_name }) => {
    const classes = useStyle();
    return (
        <Link to={`/list/${url_name}`}>
            <div className={classes.container}>
                <img className={classes.img} src={svg_img} alt={title} />
                <Typography className={classes.text} variant="h5">
                    {title}
                </Typography>
            </div>
        </Link>
    );
};

export default MenuItems;
