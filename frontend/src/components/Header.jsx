import React, { memo } from 'react';
import { Link } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import Search from '../containers/Search'
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
    searchSection: {
      display: 'flex',
      width: '70%',
      alignItems: 'center'
    },
    searchBar: {
      margin: '5px 0',
      padding: '10px',
      width: '70%'
    },
  });

const Header = ({ classes }) => (
      <header className={classes.root}>
          <Link to='/'>
            <div className={classNames(classes.back, { [classes.hideBackButton]: false })}>
              Go to Homepage
            </div>
          </Link>
          <Search />
      </header>
);

  
  export default withStyles(styles)(memo(Header));
