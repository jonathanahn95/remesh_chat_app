import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { fetchThoughts, createThought } from "../state/Thoughts/Thoughts-Actions";
import { fetchMessage } from "../state/Messages/Messages-Actions";
import Thought from '../components/Thought'

const styles = (theme) => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto'
      },
      thoughtsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'end',
        border: '1px solid black',
        width: '100%',
        margin: 'auto'
      },
      thought: {
        margin: '20px 5px',
        border: '1px solid #ccc',
        display: 'flex',
        padding: '10px',
        alignItems: 'flex-end',
        flexDirection: 'column'
      },
      contentSection: {
        width: '100%'
      },
      h2: {
        textAlign: 'center'
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
      }
    };
  };
  
class Thoughts extends React.Component {
    constructor(props) { 
      super(props);
      this.state = { 
        text: '',
        messageId: this.props.match.params.messageId
      };
    }

    componentDidMount() {
      this.props.fetchMessage(this.state.messageId);
      this.props.fetchThoughts(this.state.messageId)
    }

    handleInputChange = (e) => {
      this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createThought(this.state)
      this.setState({text: ''})
    }

    render() {
      const {  classes, thoughts, message } = this.props;
      const dateObj = message.attributes ? new Date(message.attributes.created_at) : ''
      const date = message.attributes ? `
      ${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} - ${(dateObj.getHours() + 24) % 12 || 12}:${(dateObj.getMinutes() < 10 ? '0' : '') + (dateObj.getMinutes())} ` : ''

      const title = message.attributes ? (
        <div className={classes.thought}>
          {date}
          <div className={classes.thought}>
            {message.attributes.text}
          </div>
        </div>
      ) : (
        <h1>No title</h1>
      )

      const content = thoughts.length ? (
        thoughts.map((thought) => <Thought thought={thought} />)
      ) : (
        <div>No thoughts for this comment</div>
      )

        return (
          <div className={classes.root}>
            <div className={classes.thoughtsWrapper}>
              <div className={classes.contentSection}>
                <div>
                  <h2 className={classes.h2}>Message:</h2>
                  {title}
                </div>
                <div>
                  <h2 className={classes.h2}>Thoughts:</h2>
                  {content}
                </div>
              </div>
            </div>
             <form className={classes.form} onSubmit={(e) => this.handleSubmit(e)}>
             <div className={classes.formSection}>
               <div className={classes.formTitle}>
                   Add A Thought:
               </div>
               <div className={classes.buttonSection}>
                 <input value={this.state.text} onChange={(e) => this.handleInputChange(e)} placeholder='Enter a thought'/>
                 <button className={classes.button} role="submit">Create Thought</button>
               </div>
             </div>
           </form>
           </div>
        );
      }
}

const mapStateToProps = (props) => {
  return {
    message: props.messagesReducer.message,
    thoughts: props.thoughtsReducer.thoughts
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    fetchThoughts: (id) => dispatch(fetchThoughts(id)),
    createThought: (data) => dispatch(createThought(data)),
    fetchMessage: (id) => dispatch(fetchMessage(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Thoughts));