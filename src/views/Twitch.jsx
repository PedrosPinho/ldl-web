import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Spinner from "../components/Spinner"

import { TwitchEmbed } from "react-twitch-embed";

const Twitch = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Grid>
            {loading && <Spinner />}
            <div style={loading ? { display: "none" } : {}}>
                <TwitchEmbed
                    onVideoReady={() => setLoading(false)}
                    channel="senhorcabeca"
                    width="100%"
                    height="90.5vh"
                    theme="dark"
                />
            </div>
        </Grid>);
};

export default Twitch;