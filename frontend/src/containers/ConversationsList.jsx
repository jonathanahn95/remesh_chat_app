import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Conversation from '../components/Conversation'
import { getAllConversations, createConversation } from "../state/Conversations/Conversations-Actions";
import { string, shape } from 'prop-types';

const styles = (theme) => {
    return {
      root: {
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%',
        maxHeight: '650px',
        overflow: 'scroll',
      },
      section: {
          display: 'flex',
          margin: '20px',
          justifyContent: 'space-around',
          flexDirection: 'column'
      },
      conversation: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center'
      },
      form: {
        width: '80%',
        border: '1px solid #ccc',
        margin: '20px',
        cursor: 'pointer',
        display: 'flex',
        padding: '20px 10px',
        borderRadius: '5px',
        justifyContent: 'center'
      },
      formSection: { 
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
      },
      buttonSection: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        cursor: 'pointer',
        '& > button': {
          backgroundColor: '#65388b',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          margin: '5px 0'
        },
        '& > input': {
          'padding': '5px 0'
        },
      },
      formTitle: {
        margin: '10px 0',
        fontSize: '16px',
        textAlign: 'center',
        textDecoration: 'underline',
        fontWeight: 'bold'
      },
      button: {
        '&:hover': {
          backgroundColor: 'white',
          color: '#65388b',
          cursor: 'pointer'
        },
      }
    };
  };

  
class ConversationsList extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
          title: ''
        }
    }

    componentDidMount() { 
        this.props.getAllConversations();
    }

    handleInputChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleSubmit() {
      this.props.createConversation(this.state)
      this.setState({ title: ''});
    }

    onRetry = () => {
      this.props.getAllConversations();
    };

    render() {
        const { error, conversations, classes, channelSelected, handleConversationChange } = this.props;
        const content = error && error.length > 0 ? (
          <div>
            <p>
            Error: Unable to create conversation. 
            &nbsp;
            <button 
              onClick={this.onRetry}
            >
              Click Here To Try Again
            </button>
            </p>
          </div>
        ) : conversations.length ? (
          conversations.map((conversation) => (
              <Conversation 
              key={conversation.id} 
              conversation={conversation} 
              channelSelected={channelSelected} 
              handleConversationChange={handleConversationChange} 
            />
          ))
        ) : (
          <div>
            No Conversations Found.
          </div>
        )
          
        return (
            <div className={classes.root}>
              <h1>
                Channels:
              </h1>
                <form className={classes.form} onSubmit={(e) => this.handleSubmit(e)}>
                  <div className={classes.formSection}>
                    <div className={classes.formTitle}>
                        Add A Conversation:
                    </div>
                    <div className={classes.buttonSection}>
                      <input value={this.state.title} onChange={(e) => this.handleInputChange(e)} placeholder='Enter a title'/>
                      <button className={classes.button} role="submit">Create Conversation</button>
                    </div>
                  </div>
                </form>
                {content}
            </div>
        )
    }

}
  
ConversationsList.propTypes = shape({
  conversations: shape({
    title: string,
    id: string,
    type: string,
    attributes: shape({
      title: string
    }),
  }),
  error: string
}).isRequired;


const mapStateToProps = ({conversationsReducer}) => {
    return {
        conversations: conversationsReducer.conversations,
        error: conversationsReducer.error
    };
  };
  
  const mapDispatchToProps = dispatch => { 
    return {
        getAllConversations: () => dispatch(getAllConversations()),
        createConversation: (data) => dispatch(createConversation(data)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ConversationsList));