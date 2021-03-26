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
        width: '80%',
      },
    };
  };
  
const Conversation = ({ conversation, classes, handleConversationChange }) => (
  <div onClick={() => handleConversationChange(conversation.id)} className={classes.section}>
      #{conversation.attributes.title.toUpperCase()}
  </div>
)


export default withStyles(styles)(memo(Conversation));