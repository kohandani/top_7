import { makeStyles } from "@mui/styles";
import bg from '../../svg icons/bg_svg/1.svg'

export default makeStyles((theme)=>({
    container: {
        background:`url(${bg})`,
        backgroundSize: '50%',
        height: "80px",
        backgroundColor: "white",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.1)!important",
        borderRadius: "4px",
        paddingRight: "15px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            boxShadow: "0px 4px 7px 0px rgba(0,0,0,0.3)!important",
        },
        display: "flex",
        alignItems: "center",
        position: "relative",
    },
    img: {
        position: "absolute",
        left: "10px",
        top: "-20px",
        width: "70px",
        [theme.breakpoints.down('lg')]:{
            width:'60px'
        },
        [theme.breakpoints.down('sm')]:{
            width:'50px'
        }
    },
    text: {
        color:'gray',
        fontSize:'20px!important',
        [theme.breakpoints.down('lg')]:{
            fontSize:'18px!important',
        }
    },
}));
