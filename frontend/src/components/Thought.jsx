import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getTimeAndDate } from '../utils/helper'

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
        margin: '20px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#65388b',
          color: 'white',
          cursor: 'pointer'
        },
      },
      thoughtSection: {
        border: '1px solid #ccc',
        display: 'flex',
        padding: '20px 10px',
        borderRadius: '5px',
        justifyContent: 'center'
      },
      thoughtWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: '20px 5px',
        border: '1px solid #ccc',
        padding: '10px'
      },
      thoughtsSection: {
        display: 'flex',
      }
    };
  };
  
const Thought = ({ classes, thought}) => (
    <div className={classes.thoughtWrapper}>
        <div>
          {getTimeAndDate(thought)}
        </div>
        <div className={classes.thoughtSection} key={thought.id}>
          {thought.attributes.text}
        </div>
    </div>
)


export default withStyles(styles)(memo(Thought));