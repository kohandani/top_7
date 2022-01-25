import MenuItems from "../../components/MenuItems/MenuItems";
import Carousel from "../../components/Slider/Slider";
import useStyle from "./Styles";

import barber_svg from "../../svg icons/barber.png";
import jewelry_svg from "../../svg icons/jewelry.png";
import fastFood_svg from "../../svg icons/pizza-slice.png";
import pool_svg from "../../svg icons/pool.png";
import SidebarHome from "../../components/sidebar/SidebarHome";

const Home = () => {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <div className={classes.rightSide}>
                <SidebarHome />
            </div>
            <div className={classes.leftSide}>
                <Carousel />
                <div className={classes.menuItems}>
                    <MenuItems
                        title="آرایشگاه"
                        svg_img={barber_svg}
                        url_name="barbershop"
                    />
                    <MenuItems
                        title="جواهر فروشی"
                        svg_img={jewelry_svg}
                        url_name="jewelry"
                    />
                    <MenuItems
                        title="فست فود"
                        svg_img={fastFood_svg}
                        url_name="fastfood"
                    />
                    <MenuItems
                        title="استخر"
                        svg_img={pool_svg}
                        url_name="pool"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
