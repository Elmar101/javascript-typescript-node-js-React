import React from 'react'
import Button from "@mui/material/Button";
export const XButton = (props) => {
    const { text , disabled , pendingApiCall, type , color, variant} = props;
    return (
        <Button
        type={type}
        variant={variant}
        color={color}
        disabled={disabled}
      >
        {pendingApiCall && (
          <span className="spinner-border spinner-border-sm"></span>
        )}
        <span
          style={{
            paddingLeft: pendingApiCall && "16px",
            paddingRight: pendingApiCall && "16px",
          }}
        >
          {text}
        </span>
      </Button>
    )
}

