import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
    return {
      root: {
        margin: 'auto', 
      },
      section: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #ccc',
        padding: '20px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#65388b',
          color: 'white',
          cursor: 'pointer'
        },
        backgroundColor: 'white',
        margin: '5px'
      },
    };
  };
  
const Dropdown = ({ result, classes }) => {
    return (
        <div className={classes.section}>
            {result.attributes.title}
        </div>
      )
}


export default withStyles(styles)(memo(Dropdown));