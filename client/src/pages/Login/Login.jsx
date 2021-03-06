import useStyle from "./Styles";
import { useNavigate } from "react-router-dom";
import { Grow, Typography, Paper, Avatar, Button } from "@mui/material";
import { useState } from "react";
import CustomInput from "../../components/customInput/CustomInput";

// icons
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch } from "react-redux";
import { signInAction, signUpAction } from "../../actions/auth";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyle();
    const [isSignup, setIsSignup] = useState();
    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const passwordHandle = (e) => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onChangeHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signUpAction(formData, navigate));
        } else {
            dispatch(signInAction(formData, navigate));
        }
        clear();
    };

    const clear = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const googleLog = () => {};
    return (
        <div className={classes.container}>
            <Grow in>
                <Paper className={classes.formContainer}>
                    <div className={classes.TopForm}>
                        <Avatar color="error">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h6">TOP SEVEN</Typography>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {isSignup ? (
                            <>
                                <CustomInput
                                    label="??????"
                                    focused
                                    value={formData.firstName}
                                    name="firstName"
                                    onChangeHandle={onChangeHandle}
                                />
                                <CustomInput
                                    onChangeHandle={onChangeHandle}
                                    value={formData.lastName}
                                    label="?????? ????????????????"
                                    name="lastName"
                                />
                                <CustomInput
                                    onChangeHandle={onChangeHandle}
                                    value={formData.email}
                                    label="??????????"
                                    type="email"
                                    name="email"
                                />
                                <CustomInput
                                    onChangeHandle={onChangeHandle}
                                    value={formData.password}
                                    label="?????? ????????"
                                    type={showPassword ? "password" : "text"}
                                    name="password"
                                    showPassword={showPassword}
                                    passwordHandle={passwordHandle}
                                />
                                <CustomInput
                                    value={formData.confirmPassword}
                                    onChangeHandle={onChangeHandle}
                                    label="?????????? ?????? ????????"
                                    type="password"
                                    name="confirmPassword"
                                />
                            </>
                        ) : (
                            <>
                                <CustomInput
                                    value={formData.email}
                                    focused
                                    onChangeHandle={onChangeHandle}
                                    label="??????????"
                                    type="email"
                                    name="email"
                                />
                                <CustomInput
                                    onChangeHandle={onChangeHandle}
                                    value={formData.password}
                                    label="?????? ????????"
                                    type={showPassword ? "password" : "text"}
                                    name="password"
                                    showPassword={showPassword}
                                    passwordHandle={passwordHandle}
                                />
                            </>
                        )}
                        <Button
                            className={classes.formBtn}
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            {isSignup ? "?????????? ???????? ????????????" : "????????"}
                        </Button>
                        <Button
                            onClick={googleLog}
                            fullWidth
                            variant="contained"
                        >
                            ???????? ?????? ???? ???????? ????????
                        </Button>
                        <div className={classes.formBottom}>
                            {isSignup ? (
                                <>
                                    <Typography variant="body2">
                                        ?????? ???? ?????? ?????? ???????? ???????????? ???????????? ????????
                                        ???????? :
                                    </Typography>
                                    <Button
                                        size="small"
                                        onClick={() => setIsSignup(false)}
                                        variant="outlined"
                                    >
                                        ????????
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Typography variant="body2">
                                        ?????? ???? ?????? ?????? ???????? ???????????? ?????????????? ??????
                                        ?????? ????????:
                                    </Typography>
                                    <Button
                                        size="small"
                                        onClick={() => setIsSignup(true)}
                                        variant="outlined"
                                    >
                                        ??????????
                                    </Button>
                                </>
                            )}
                        </div>
                    </form>
                </Paper>
            </Grow>
        </div>
    );
};

export default Login;
