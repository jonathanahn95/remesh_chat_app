import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleConversation } from "../state/Conversations/Conversations-Actions";
import { clearDropDownRequest  } from "../state/Search/Search-Actions";
import { getAllMessagesForConversation } from "../state/Messages/Messages-Actions";
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
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#65388b',
          color: 'white',
          cursor: 'pointer'
        },
        backgroundColor: 'white',
        margin: '5px',
        textDecoration: 'none'
      },
    };
  };
  
  class Dropdown extends React.Component {
    constructor(props) { 
      super(props);
      this.state = { 
        search: '',
        channelSelected: this.props.conversationId,
        text: '',
      };
    }

    handleOnClick = () => {
      this.props.getSingleConversation(this.props.result.id)
      this.props.getAllMessagesForConversation(this.props.result.id)
      this.props.handleDropDownClick()
      this.props.clearDropDownRequest()
    }
    render() {
      const { result, classes, conversation } = this.props
      const content = result && result.type === 'message' ? (
        <Link className={classes.section} onClick={() => (
          this.props.handleDropDownClick(),
          this.props.clearDropDownRequest()
        )} 
          to={`/conversation/${conversation.id}/messages/${result.id}`}
        >
          {result.attributes.text}
        </Link>
      ) : (
        <div className={classes.section} onClick={() => this.handleOnClick()}>
          {result.attributes.title}
        </div>
      )
      return (
        <div>
          {content}
        </div>
      )
    }
  }

Dropdown.propTypes = {
  conversation: shape({
    id: string,
    type: string,
    attributes: shape({
      title: string
    }),
  }),
  messages: shape({
    conversations: shape({
      title: string,
      id: string,
      type: string,
      attributes: shape({
        title: string
      }),
    })
  })
};

const mapStateToProps = ({ conversationsReducer, messagesReducer }) => {
  return {
    conversation: conversationsReducer.conversation,
    messages: messagesReducer.messages
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    getSingleConversation: (id) => dispatch(getSingleConversation(id)),
    clearDropDownRequest: () => dispatch(clearDropDownRequest()),
    getAllMessagesForConversation: (id) => dispatch(getAllMessagesForConversation(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dropdown));