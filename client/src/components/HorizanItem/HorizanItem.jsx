import { Avatar, Button, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useStyle from "./Styles";
import EllipsisText from "react-ellipsis-text";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconsContainer from "./iconsContainer/IconsContainer";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { useState } from "react";

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: "Very Dissatisfied",
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: "Dissatisfied",
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: "Neutral",
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: "Satisfied",
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Very Satisfied",
    },
};

const HorizanItem = ({ post }) => {
    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }
    IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
    };

    
    const classes = useStyle();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.Container}>
                <div className={classes.infoSection}>
                    <div className={classes.infoTop}>
                        <Typography variant="h5">
                            فروشگاه بزرگ تهران سنتر
                        </Typography>
                        <Typography
                            variant="body2"
                            color="lightblue"
                            sx={{ marginTop: "10px" }}
                        >
                            لوکس ترین برند های تهران
                        </Typography>
                        <div className={classes.moreInfo}>
                            <Avatar
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIRcpCNRJ0GB_Zl61yk_HdW0JjBPdS7Qm2w&usqp=CAU"
                                className={classes.Boss}
                            />
                            <Typography>علیرضا کاظمی</Typography>
                        </div>
                    </div>
                    <div className={classes.infoBottom}>
                        <Typography variant="body2">
                            <EllipsisText
                                length={300}
                                text={
                                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                                }
                            />
                        </Typography>
                    </div>
                    <div className={classes.infoBottonSection}>
                        <Link to={`/item/${22}`}>
                            <Button>برای اطلاعات بیشتر کلیک کنید</Button>
                        </Link>
                    </div>
                </div>
                <div className={classes.mediaSection}>
                    <div className={classes.boxImg}>
                        <img
                            src="https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <div className={classes.likeBox}>
                            <FavoriteBorderIcon />
                        </div>
                    </div>
                    <div className={classes.soicalIcons}>
                        <div className={classes.leftIcons}>
                            <IconsContainer
                                Icon={ThumbUpOffAltIcon}
                                count="12"
                                style2
                            />
                            <IconsContainer
                                Icon={RemoveRedEyeOutlinedIcon}
                                count="450"
                            />
                        </div>
                        <div className={classes.rightIcons}>
                            <Rating
                                name="highlight-selected-only"
                                IconContainerComponent={IconContainer}
                                highlightSelectedOnly
                                value={4}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizanItem;
