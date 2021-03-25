import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
    return {
      root: {
        maxWidth: '980px',
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
        cursor: 'pointer',
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
  
const Thought = (props) => {
    const { classes, thought } = props;
    const dateObj = thought.attributes ? new Date(thought.attributes.created_at) : ''
    const date = thought.attributes ? `
    ${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} - ${(dateObj.getHours() + 24) % 12 || 12}:${(dateObj.getMinutes() < 10 ? '0' : '') + (dateObj.getMinutes())}` : ''

    return (
        <div className={classes.thoughtWrapper}>
            <div>
                {date}
            </div>
            <div className={classes.thoughtSection} key={thought.id}>
                <div>
                {thought.attributes.text}
                </div>
            </div>
        </div>
    )
}


export default withStyles(styles)(memo(Thought));