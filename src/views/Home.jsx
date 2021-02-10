import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Spinner from "../components/Spinner"

import Banner from '../static/banner.jpg';

const Home = () => {
    const [loading] = useState(!true);

    return (
        <Grid>
            {loading && <Spinner />}
            <div style={loading ? { display: "none" } : {}}>
                <img src={Banner} alt="Banner" style={{width: "100%"}}/>
            </div>
        </Grid>);
};

export default Home;