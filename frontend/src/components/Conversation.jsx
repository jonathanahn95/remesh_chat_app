import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { string, shape } from 'prop-types';

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
        width: '80%',
      },
    };
  };
  
const Conversation = ({ conversation, classes, handleConversationChange }) => (
  <div onClick={() => handleConversationChange(conversation.id)} className={classes.section}>
      #{conversation.attributes.title.toUpperCase()}
  </div>
)

Conversation.propTypes = {
  conversation: shape({
    id: string,
    type: string,
    attributes: shape({
      title: string
    }),
  })
};

export default withStyles(styles)(memo(Conversation));