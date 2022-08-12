import * as React from 'react';
import { Button } from '@mui/material/';

function Button1(props) {
    return <Button color={props.color} variant={props.variant}>{props.txt}</Button>
}

export default Button1