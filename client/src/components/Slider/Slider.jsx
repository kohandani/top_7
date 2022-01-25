import useStyle from "./Styles";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Slider = () => {
    const classes = useStyle();
    let slides = [
        <img
            className={classes.img}
            key={1}
            src="https://picsum.photos/800/300/?random"
            alt="1"
        />,
        <img
            className={classes.img}
            key={2}
            src="https://picsum.photos/800/301/?random"
            alt="2"
        />,
        <img
            className={classes.img}
            key={3}
            src="https://picsum.photos/800/302/?random"
            alt="3"
        />,
        <img
            className={classes.img}
            key={4}
            src="https://picsum.photos/800/303/?random"
            alt="4"
        />,
        <img
            className={classes.img}
            key={5}
            src="https://picsum.photos/800/304/?random"
            alt="5"
        />,
    ];

    return (
        <div className={classes.carousel}>
            <Carousel
                indicators={false}
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
                NavButton={({ onClick, className, style, next, prev }) => {
                    return (
                        <Button
                            onClick={onClick}
                            className={className}
                            style={style}
                        >
                            {next && <ArrowRightIcon />}
                            {prev && <ArrowLeftIcon />}
                        </Button>
                    );
                }}
            >
                {slides.map((item) => item)}
            </Carousel>
        </div>
    );
};

export default Slider;
