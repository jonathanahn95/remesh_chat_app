import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { getSingleSearchResult, getConversationsDropDownRequest, getMessagesDropDownRequest} from "../state/Search/Search-Actions";
import Dropdown from "./Dropdown";
import { DebounceInput } from "react-debounce-input";
import classNames from 'classnames';
import { clearDropDownRequest  } from "../state/Search/Search-Actions";

const styles = (theme) => {
    return {
      root: {
        position: 'relative',
        margin: 'auto',
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '10px'
    },
      button: {
        color: 'white',
        margin: '5px 0',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#65388b',
        '&:hover': {
          backgroundColor: 'white',
          color: '#65388b',
          cursor: 'pointer'
        },
      },
      searchSection: {
        display: 'flex',
        alignItems: 'center'
      },
      searchBar: {
        margin: '5px 0',
        padding: '10px',
        width: '80%'
      },
      dropdownWrapper: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#ccc',
        maxHeight: '350px',
        overflow: 'scroll'
      },
      searchByContainer: {
        display: 'flex'
      },
      filterSection: {
        width: '45%',
        border: '1px solid #ccc',
        margin: '8px',
        cursor: 'pointer',
        display: 'flex',
        padding: '10px',
        borderRadius: '5px',
        justifyContent: 'center'
      },
      selected: {
        backgroundColor: '#65388b',
        color: 'white'
      },
      notSelected: {
        backgroundColor: 'white',
        color: '#65388b'
      }
    };
  };
  
class Search extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
          search: '',
          filterSelected: 'Search a Conversation'
        };
    }

    handleFilterChange = (e) => {
      if (e.target.outerText === 'Search a Conversation') {
        this.setState({filterSelected: 'Search a Conversation', search: ''})
      } else {
        this.setState({filterSelected: 'Search a Message' , search: ''})
      }
      this.props.clearDropDownRequest()
    }

    handleInputChange = (e) => {
        this.setState({ search: e.target.value });

        if (this.state.filterSelected === 'Search a Conversation') {
          this.props.getConversationsDropDownRequest(this.state.search)
        } else {
          this.props.getMessagesDropDownRequest(this.state.search)
        }
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.getSingleSearchResult(this.state.search)
      this.setState({search: ''})
      this.props.clearDropDownRequest()
    }

    handleDropDownClick = () => {
      this.setState({search: ''})
    }

    render() {
      const { classes, dropdown } = this.props;
      const isFilterConversation = this.state.filterSelected === 'Search a Conversation';
      const content = dropdown && dropdown.length > 0 ? (
          dropdown.map((res) => (
            <Dropdown result={res} handleDropDownClick={this.handleDropDownClick}/>
          ))
      ) : (
        <div></div>
      );


      return (
        <div className={classes.root}>
          <div className={classes.searchByContainer}>
            <button 
              className={classNames(classes.filterSection, {[classes.notSelected] : !isFilterConversation}, { [classes.selected]: isFilterConversation })}
              onClick={(e) => this.handleFilterChange(e)}
            >
              Search a Conversation
            </button>
            <button 
              className={classNames(classes.filterSection, {[classes.notSelected] : isFilterConversation}, { [classes.selected]: !isFilterConversation })}
              onClick={(e) => this.handleFilterChange(e)}
            >
              Search a Comment
            </button>
          </div>
          <form className={classes.searchSection} onSubmit={(e) => this.handleSubmit(e)}>
            <DebounceInput
              className={classes.searchBar}
              placeholder="Search for a conversation"
              minLength={1}
              debounceTimeout={300}
              value={this.state.search}
              onChange={(e) => this.handleInputChange(e)}
            />
            <button className={classes.button} role="submit">Search</button>
          </form>
          <div className={classes.dropdownWrapper}>
            {content}
          </div>
        </div>
      );
    }
}

const mapStateToProps = ({ searchReducer }) => {
  return {
      dropdown: searchReducer.dropdown
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    getSingleSearchResult: (query) => dispatch(getSingleSearchResult(query)),
    getConversationsDropDownRequest: (query) => dispatch(getConversationsDropDownRequest(query)),
    getMessagesDropDownRequest: (query) => dispatch(getMessagesDropDownRequest(query)),
    clearDropDownRequest: () => dispatch(clearDropDownRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));