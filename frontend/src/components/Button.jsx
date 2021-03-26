import React from 'react';
import { Link } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    root: {
        display: 'flex',
        margin: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        justifyContent: 'space-evenly',
    },
    back: {
      color: 'white',
      margin: '5px 0',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#65388b',
      '&:hover': {
        backgroundColor: 'white',
        color: '#65388b',
        cursor: 'pointer'
      },
    },
  });

const Button = ({ classes }) => (
    <div className={classes.root}>
        <Link to='/'>
          <div className={classes.back}>
            Go to Homepage
          </div>
        </Link>
    </div>
);


export default withStyles(styles)(Button);
