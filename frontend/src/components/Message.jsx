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
        cursor: 'pointer',
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
      }
    };
  };
  
const Conversation = ({ classes, message, conversationId }) => (
  <div className={classes.messageWrapper}>
      <div>
          {getTimeAndDate(message)}
      </div>
      <div className={classes.messageSection} key={message.id}>
        {message.attributes.text}
      </div>
      <div className={classes.thoughtsSection}>
        <div>
          Has {message.relationships.thoughts.data.length} thoughts
        </div>
        <Link to={`/conversation/${conversationId}/messages/${message.id}`}>
            View all thoughts
        </Link>
        <div>
          Add a thought
        </div>
      </div>
  </div>
);


export default withStyles(styles)(memo(Conversation));
