import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Message from '../components/Message'
import { fetchConversation } from "../state/Conversations/Conversations-Actions";
import { fetchMessages, createMessage } from "../state/Messages/Messages-Actions";

const styles = (theme) => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'end',
        border: '1px solid black',
        maxHeight: '700px',
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
        border: '1px solid #ccc',
        margin: '20px',
        cursor: 'pointer',
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
      this.props.fetchConversation(this.props.channelSelected);
      this.props.fetchMessages(this.props.channelSelected);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.channelSelected !== nextProps.channelSelected) {
        this.props.fetchConversation(nextProps.channelSelected);
        this.props.fetchMessages(nextProps.channelSelected);
        this.setState({
          conversationId: nextProps.channelSelected
        })
      }
    }


    render() {
        const { messages, conversation, classes } = this.props;

        const content = conversation.attributes ? (
         <div className={classes.conversationWrapper}>
           <h1 className={classes.conversationName}>
            #{conversation.attributes.title.toUpperCase()}
           </h1>
           {messages.length ? (
             messages.map((msg) => (
               <Message message={msg} conversationId={conversation.id}/>
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
  

const mapStateToProps = (props) => {
    return {
      conversation: props.conversationsReducer.conversation,
      messages: props.messagesReducer.messages
    };
  };
  
  const mapDispatchToProps = dispatch => { 
    return {
      fetchConversation: (id) => dispatch(fetchConversation(id)),
      fetchMessages: (id) => dispatch(fetchMessages(id)),
      createMessage: (data) => dispatch(createMessage(data)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ConversationPage));