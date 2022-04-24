import React from 'react'
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const XInputPassword = (props) => {
    const {type, label, value, onChange, onMouseDown, onClick, error} = props;
    console.log(error)
    return (
        
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard" error = {error ? true : false}>
          <InputLabel htmlFor="standard-adornment-password">
            {label}
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={type ? "text" : "password"}
            value={value}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onClick}
                  onMouseDown={onMouseDown}
                >
                  {type ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {error && ( <FormHelperText id="component-error-text"> {error} </FormHelperText> )}
        </FormControl>
    )
}

export default XInputPassword;
