import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import {
    AppBar as AppBarMui,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { routes } from "../routes/routes";


const ListItems = ({ setOpen }) => (
    <div
        className={clsx({
            width: '250',
        })}
        role="presentation"
    >
        <div style={{height: '9vh'}}>
        </div>
        <Divider />
        <List >
            {routes.map((text) => (
                <ListItem button component={Link} to={text.path} key={text} onClick={() => setOpen(false)}>
                    <ListItemIcon><text.icon /></ListItemIcon>
                    <ListItemText primary={text.alias} />
                </ListItem>
            ))}
        </List>
    </div>
);

const AppBar = ({ currentVersion }) => {
    const [open, setOpen] = useState(false);

    return (
        <AppBarMui position="sticky" style={{height: '9vh'}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography noWrap variant="h6" >
                    Liga Descalvadense de LoL - versão {currentVersion}
                </Typography>
            </Toolbar>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <ListItems setOpen={setOpen} />
            </Drawer>
        </AppBarMui>
    )
};

export default AppBar;