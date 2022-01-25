import HorizanItem from "../../components/HorizanItem/HorizanItem";
import useStyle from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../actions/posts";
import { useParams } from "react-router";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { Typography } from "@mui/material";
import ListSideBar from "../../components/ListSideBar/ListSideBar";

const List = () => {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts(params.id));
    }, []);

    const classes = useStyle();
    const { data, loading } = useSelector((state) => state.posts);
    return (
        <div className={classes.container}>
            <div className={classes.ListContainer}>
                <div className={classes.SideBAR}>
                    <ListSideBar />
                </div>
                <div className={classes.itemsContainer}>
                    <div className={classes.filtering}>
                        <div className={classes.select}>
                            <TimelineIcon />
                            <Typography>... جستجو بر اساس</Typography>
                        </div>
                        <ArrowBackIcon className={classes.collapse} />
                    </div>
                    <div className={classes.items}>
                        {data.map((item, i) => {
                            return <HorizanItem key={i} post={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
