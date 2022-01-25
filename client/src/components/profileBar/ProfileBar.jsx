import { Avatar, Button, Switch, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyle from "./Styles";
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";

const ProfileBar = () => {
    const classes = useStyle();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogOut();
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" });
        setUser(null);
    };

    return (
        <div className={classes.container}>
            <div className={classes.profile}>
                <Avatar sx={{ width: "30px", height: "30px" }} />
                <Typography variant="h6" fontSize="14px" color="GrayText">
                    {user ? user.result?.name : null}
                </Typography>
                {user?.result.isAdmin === true ? (
                    <Link to="/admin">
                        <Button
                            className={classes.panelBig}
                            size="small"
                            variant="contained"
                        >
                            ورود به پنل مدیریت
                        </Button>
                        <Button
                            className={classes.panelSmall}
                            size="small"
                            variant="contained"
                        >
                            <ManageAccountsIcon />
                        </Button>
                    </Link>
                ) : null}
            </div>
            {user ? (
                <>
                    <Typography variant="body2">خروج</Typography>
                    <Switch
                        size="small"
                        sx={{ marginRight: "auto" }}
                        checked
                        onChange={handleLogOut}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                </>
            ) : null}
            <Link
                to={user ? `/users/editProfile/${user.result._id}` : "/login"}
            >
                <Button size="small" variant="contained">
                    {user ? "ویرایش پروفایل" : " ورود , عضویت"}
                </Button>
            </Link>
        </div>
    );
};

export default ProfileBar;
