import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import ConversationsList from "./ConversationsList";
import ConversationPage from "./ConversationPage";

const styles = (theme) => {
    return {
      root: {
        margin: 'auto', 
        height: '980px'
      },
      chatSection: {
        display: 'flex'
      }
    };
  };
  
class Homepage extends React.Component {
    constructor(props) { 
      super(props);
      this.state = { 
        channelSelected: this.props.id
      };
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.id !== nextProps.id) {
        this.setState({
          channelSelected: nextProps.id
        })
      }
    }

    handleConversationChange = (id) => {
      this.setState({ channelSelected: parseInt(id) });
    }


    render() {
      const {  id, classes } = this.props;
      return (
        <div className={classes.root}>
            <div className={classes.chatSection}>
              <ConversationsList channelSelected={this.state.channelSelected} handleConversationChange={this.handleConversationChange} />
              <ConversationPage channelSelected={this.state.channelSelected}/>
            </div>
        </div>
      );
      }
}

const mapStateToProps = (props) => {
  return {
    id: props.searchReducer.result ? props.searchReducer.result.id : 1
  };
};

const mapDispatchToProps = dispatch => { 
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));