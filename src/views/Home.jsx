import React, { useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import { Grid, useMediaQuery } from '@material-ui/core';

import MiniTwitch from '../components/MiniTwitch';
import TableScore from '../components/TableScore';
import TableHistory from '../components/TableHistory';

import { Context } from "../context/Authenticator";

import hitory from '../routes/history';
import Banner from '../static/banner.jpg';

const Home = () => {
  const { currentVersion } = useContext(Context);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            margin: isMobile ? 0 : theme.spacing(2),
            height: '85vh'
        },
        item1: {
            height: isMobile ? '30vh' : '50vh'
        },
        item2: {
            height: '50vh'
        },
        toolbar: {
            backgroundColor: theme.palette.primary.main,
            minHeight: '32px',
            cursor: 'pointer',
            alignItems: 'center',
            color: '#FFF'
        },
        typography: {
            margin: 'auto',
            display: 'flex',
            alignItems: 'center'
        },
        table: {
            height: '35vh'
        }
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={isMobile ? 0 : 3}>
                <Grid item xs={12} sm={8} className={classes.item1}>
                    <img src={Banner} alt="Banner" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.item2} onClick={() => hitory.push("/tv")}>
                    <MiniTwitch classes={classes} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TableHistory classes={classes} currentVersion={currentVersion} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TableScore classes={classes} currentVersion={currentVersion} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;