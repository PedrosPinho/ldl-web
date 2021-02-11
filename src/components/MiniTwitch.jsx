import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { Launch } from '@material-ui/icons';
import { TwitchPlayer } from "react-twitch-embed";

const MiniTwitch = ({ classes }) => (
    <div style={{ height: "100%" }}>
        <Toolbar disableGutters className={classes.toolbar}>
            <Typography noWrap variant="h6" className={classes.typography}>
                Acompanhar a transmissão
                <Launch />
            </Typography>
        </Toolbar>
        <TwitchPlayer
            channel="senhorcabeca"
            width="100%"
            height="90%"
            theme="dark"
            allowFullscreen={false}
            muted
        />
    </div>
);

export default MiniTwitch;