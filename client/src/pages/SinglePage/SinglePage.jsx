import { Typography } from "@mui/material";
import Carousel from "../../components/Slider/Slider";
import useStyle from "./Styles";

const SinglePage = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Carousel />
            </div>
            <div className={classes.mid}>
                <div className={classes.infoTop}>
                    
                </div>
                <div className={classes.infoRight}></div>
                <div className={classes.infoLeft}></div>
            </div>
            <div className={classes.bottom}>{/* multiple carousel */}</div>
        </div>
    );
};

export default SinglePage;
