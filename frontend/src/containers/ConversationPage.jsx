import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Message from '../components/Message'
import { getSingleConversation } from "../state/Conversations/Conversations-Actions";
import { getAllMessagesForConversation } from "../state/Messages/Messages-Actions";
import { string, shape } from 'prop-types';

const styles = (theme) => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'end',
        border: '1px solid black',
        maxHeight: '650px',
        overflow: 'scroll',
      },
      section: {
          display: 'flex',
          margin: '20px',
          justifyContent: 'space-around',
          flexDirection: 'column'
      },
      conversationName: {
        fontSize: '40px'
      },
      messageSection: {
        margin: '20px',
        display: 'flex',
        padding: '20px 10px',
        borderRadius: '5px',
        justifyContent: 'center'
      },
      conversationWrapper: {
        width: '100%',
        textAlign: 'center',
      },
    };
  };

  
class ConversationPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        conversationId: this.props.channelSelected
      }
    }

    componentDidMount() {
      const { channelSelected } = this.props;
      this.props.getSingleConversation(channelSelected);
      this.props.getAllMessagesForConversation(channelSelected);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.channelSelected !== nextProps.channelSelected) {
        this.props.getSingleConversation(nextProps.channelSelected);
        this.props.getAllMessagesForConversation(nextProps.channelSelected);
        this.setState({
          conversationId: nextProps.channelSelected
        })
      }
    }

    onRetry = () => {
      this.props.getAllMessagesForConversation(this.props.channelSelected);
    };


    render() {
        const { error, messages, conversation, classes } = this.props;

        const content = conversation.attributes ? (
         <div className={classes.conversationWrapper}>
           <h1 className={classes.conversationName}>
            #{conversation.attributes.title.toUpperCase()}
           </h1>
           {error && error.length > 0 ? (
          <div>
            <p>
            Error: {error}
            &nbsp;
            <button 
              onClick={this.onRetry}
            >
              Click Here To Try Again
            </button>
            </p>
          </div>
        ) : messages.length ? (
             messages.map((msg) => (
               <Message message={msg} conversationId={conversation.id} key={msg.id} />
             ))
           ) : (
             <div>No messages</div>
           )}
         </div>
        ) : (
          <div>
            <p>There is no conversation.</p>
          </div>
        );

        return (
            <div className={classes.root}>
              {content}
            </div>
        )
    }
}

ConversationPage.propTypes = shape({
  conversation: shape({
    id: string,
    type: string,
    attributes: shape({
      title: string
    }),
  }),
  messages: shape({
    id: string,
    type: string,
    attributes: shape({
      text: string
    }),
  }),
  error: string
}).isRequired;

  

const mapStateToProps = ({ conversationsReducer, messagesReducer}) => {
    return {
      conversation: conversationsReducer.conversation,
      messages: messagesReducer.messages,
      error: messagesReducer.error
    };
  };
  
  const mapDispatchToProps = dispatch => { 
    return {
      getSingleConversation: (id) => dispatch(getSingleConversation(id)),
      getAllMessagesForConversation: (id) => dispatch(getAllMessagesForConversation(id)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ConversationPage));