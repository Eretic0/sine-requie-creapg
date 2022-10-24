import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import * as React from "react";

export default function BasicCard(props) {
  const { children, cardActionText, headerText, headerSubText } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      {headerText ? (
        <CardHeader title={headerText} subheader={headerSubText} />
      ) : null}

      <CardContent>{children}</CardContent>
      {cardActionText ? (
        <CardActions>
          <Button size="small">{cardActionText}</Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
