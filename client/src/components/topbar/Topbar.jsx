import useStyle from "./Styles";
import { AppBar, Badge, Container, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import Brightness2Icon from "@mui/icons-material/Brightness2";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Topbar = () => {
    const classes = useStyle();
    return (
        <AppBar position="sticky" className={classes.appbar}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link to="/">
                    <Typography variant="h5" color="primary">
                        Top Seven
                    </Typography>
                </Link>
                <div className={classes.search}>
                    <SearchIcon className={classes.serachIcon} />
                    <InputBase
                        placeholder="جستجو ..."
                        className={classes.searchInput}
                    />
                </div>
                <div className={classes.icons}>
                    <IconButton sx={{ marginRight: "5px" }} size="medium">
                        <Brightness2Icon className={classes.leftIcons} />
                    </IconButton>
                    <IconButton sx={{ marginRight: "5px" }} size="medium">
                        <GitHubIcon className={classes.leftIcons} />
                    </IconButton>
                    <Badge
                        className={classes.badge}
                        badgeContent={4}
                        color="secondary"
                    >
                        <IconButton sx={{ marginRight: "5px" }} size="medium">
                            <NotificationsNoneIcon
                                className={classes.leftIcons}
                            />
                        </IconButton>
                    </Badge>
                    <IconButton sx={{ marginRight: "5px" }} size="medium">
                        <SettingsIcon className={classes.leftIcons} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
