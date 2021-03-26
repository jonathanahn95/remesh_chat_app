import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import ConversationsList from "./ConversationsList";
import ConversationPage from "./ConversationPage";
import { createMessage } from "../state/Messages/Messages-Actions";
import Search from './Search'
const styles = (theme) => {
    return {
      root: {
        margin: '20px', 
      },
      chatSection: {
        display: 'flex',
        flexDirection: 'column'
      },
      formSection: { 
        display: 'flex',
        margin: '20px 0',
        flexDirection: 'column',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px'
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
      }, 
      chatFormSection: {
        display: 'flex',
      }
    };
  };
  
class Homepage extends React.Component {
    constructor(props) { 
      super(props);
      this.state = { 
        search: '',
        channelSelected: this.props.conversationId,
        text: '',
      };
    }

    handleConversationChange = (id) => {
      this.setState({ channelSelected: parseInt(id) });
    }

    handleInputChange = (e) => {
      this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { channelSelected, text } = this.state;
      this.props.createMessage({
        conversationId: channelSelected,
        text
      })
      this.setState({text: ''})
    }


    render() {
      const {  classes, conversationId } = this.props;
      return (
        <div className={classes.root}>
            <Search />
            <div className={classes.chatSection}>
              <div className={classes.chatFormSection}>
                <ConversationsList channelSelected={this.state.channelSelected} handleConversationChange={this.handleConversationChange} />
                <ConversationPage channelSelected={this.state.channelSelected}/>
              </div>
              <form className={classes.formSection} onSubmit={(e) => this.handleSubmit(e)}>
                <div className={classes.formTitle}>
                   Add A Comment:
                </div>
                <div className={classes.buttonSection}>
                  <input onChange={(e) => this.handleInputChange(e)} placeholder="Enter message" value={this.state.text}/>
                  <button className={classes.button} role="submit">Send</button>
                 </div>
               </form>
            </div>
        </div>
      );
      }
}

const mapStateToProps = ({ conversationsReducer }) => {
  return {
    conversationId: conversationsReducer.conversation.id || 1
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    createMessage: (data) => dispatch(createMessage(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));