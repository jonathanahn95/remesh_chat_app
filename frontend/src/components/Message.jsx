import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
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
      messageSection: {
        border: '1px solid #ccc',
        display: 'flex',
        padding: '20px 10px',
        borderRadius: '5px',
        justifyContent: 'center'
      },
      messageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: '20px 5px',
        border: '1px solid #ccc',
        padding: '10px'
      },
      thoughtsSection: {
        display: 'flex',
      },
      thoughtSection: {
        border: '1px solid #ccc',
        margin: '2px',
        display: 'flex',
        padding: '10px 5px',
        borderRadius: '5px',
        justifyContent: 'center',
      },
      thoughtClickable: {
        border: '1px solid #ccc',
        margin: '2px',
        cursor: 'pointer',
        display: 'flex',
        padding: '10px 5px',
        borderRadius: '5px',
        justifyContent: 'center',
        textDecoration: 'none',
        backgroundColor: '#65388b',
        color: 'white',
        '&:hover': {
          backgroundColor: 'white',
          color: '#65388b',
          cursor: 'pointer'
        },
      }
    };
  };
  
const Message = ({ classes, message, conversationId }) => (
  <div className={classes.messageWrapper}>
      <div>
          {getTimeAndDate(message)}
      </div>
      <div className={classes.messageSection} key={message.id}>
        {message.attributes.text}
      </div>
      <div className={classes.thoughtsSection}>
        <div className={classes.thoughtSection}>
          Has {message.relationships.thoughts.data.length} thoughts
        </div>
        <Link className={classes.thoughtClickable} to={`/conversation/${conversationId}/messages/${message.id}`}>
            View all thoughts
        </Link>
        <Link className={classes.thoughtClickable} to={`/conversation/${conversationId}/messages/${message.id}`}>
          Add a thought
        </Link>
      </div>
  </div>
);


export default withStyles(styles)(memo(Message));
