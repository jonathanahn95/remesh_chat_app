import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
  
const Conversation = (props) => {
    const { classes, message, conversationId } = props;
    const dateObj = message.attributes ? new Date(message.attributes.created_at) : ''
    const date = message.attributes ? `
    ${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} - ${(dateObj.getHours() + 24) % 12 || 12}:${(dateObj.getMinutes() < 10 ? '0' : '') + (dateObj.getMinutes())}` : ''

    return (
        <div className={classes.messageWrapper}>
            <div>
                {date}
            </div>
            <div className={classes.messageSection} key={message.id}>
                <div>
                {message.attributes.text}
                </div>
            </div>
            <div className={classes.thoughtsSection}>
              <div>
                Has {message.relationships.thoughts.data.length} thoughts
              </div>
              <Link to={`/conversation/${conversationId}/messages/${message.id}`}>
                <div>
                  View all thoughts
                </div>
              </Link>
              <div>
                  Add a thought
              </div>
            </div>
        </div>
    )
}


export default withStyles(styles)(memo(Conversation));
