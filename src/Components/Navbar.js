import React from "react";
import { Tab } from "@mui/material";
// import Button1 from "./button";

export default function Nav(props) {
  return (
    <div>
      {/* <Button1 color="secondary" variant="contained" txt="Hello everyone" /> */}
      <Tab label={props.label0} />
      <Tab label={props.label1} />
      <Tab label={props.label2} />
    </div>
  );
}
