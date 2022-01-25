import useStyle from "./Styles";
import { Grow, Typography, TextField, Paper, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomInput = ({
    label,
    type,
    passwordHandle,
    name,
    onChangeHandle,
    value,
    focused,
}) => {
    const classes = useStyle();
    return (
        <TextField
            fullWidth
            focused={focused}
            variant="filled"
            margin="dense"
            label={label}
            size="small"
            name={name}
            value={value}
            onChange={onChangeHandle}
            InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
            }}
            required
            type={type}
            InputProps={
                name === "password"
                    ? {
                          endAdornment: (
                              <IconButton onClick={passwordHandle}>
                                  {type === "password" ? (
                                      <VisibilityIcon />
                                  ) : (
                                      <VisibilityOffIcon />
                                  )}
                              </IconButton>
                          ),
                          classes: {
                              adornedEnd: classes.adornedEnd,
                          },
                       }
                    : null
            }
        />
    );
};

export default CustomInput;
