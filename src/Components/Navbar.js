import React from "react";
import { Tab } from "@mui/material";
import { Link } from "react-router-dom";
// import Button1 from "./button";

export default function Nav(props) {
  return (
    <nav>
      {/* <Button1 color="secondary" variant="contained" txt="Hello everyone" /> */}
    <Link to={props.label0}>
    <Tab label={props.label0} />
    </Link>
    <Link to={props.label1}>
    <Tab label={props.label1} />
    </Link>
      <Link to={props.label2}>
      <Tab label={props.label2} />
    </Link>
      
      
    </nav>
  );
}
