import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const IconTooltip = ({ type, message = "" }) => {
  const getIconFromType = () => {
    switch (type) {
      case "info":
        return <InfoIcon />;

      default:
        return <InfoIcon />;
    }
  };

  return (
    <Tooltip sx={{ whiteSpace: "pre - line" }} title={message}>
      <IconButton>{getIconFromType()}</IconButton>
    </Tooltip>
  );
};

export default IconTooltip;
