import React from 'react'
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormHelperText from "@mui/material/FormHelperText";

const XInput = (props) => {
    const { value, error, label, onChange } = props;
    return (  
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard" error = {error ? true : false}>
            <InputLabel htmlFor="input-with-icon-adornment"> { label } </InputLabel>
            <Input id="input-with-icon-adornment"
                value={value}
                onChange={ onChange }
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
            {error && ( <FormHelperText id="component-error-text"> {error} </FormHelperText> )}
        </FormControl>   
    )
}
export default XInput;
