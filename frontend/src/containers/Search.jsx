import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { querySearchResults, getDropDownRequest } from "../state/Search/Search-Actions";
import Dropdown from "../components/Dropdown";
import { DebounceInput } from "react-debounce-input";

const styles = (theme) => {
    return {
      root: {
        width: '70%',
        position: 'relative'
    },
      back: {
        width: '20%',
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
      }
    };
  };
  
class Search extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
          search: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ search: e.target.value });

        this.props.getDropDownRequest(this.state.search)
    }
  
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({search: ''})
    }

    render() {
      const { classes, dropdown } = this.props;

      const content = dropdown && dropdown.length > 0 ? (
          dropdown.map((res) => (
            <Dropdown result={res} />
          ))
      ) : (
        <div></div>
      )
      return (
        <div className={classes.root}>
          <form className={classes.searchSection} onSubmit={(e) => this.handleSubmit(e)}>
            <DebounceInput
              className={classes.searchBar}
              placeholder="Search for a conversation"
              minLength={1}
              debounceTimeout={300}
              value={this.state.search}
              onChange={(e) => this.handleInputChange(e)}
            />
            <button className={classes.back} role="submit">Search</button>
          </form>
          <div className={classes.dropdownWrapper}>
            {content}
          </div>
        </div>
      );
    }
}

const mapStateToProps = (props) => {
  return {
      dropdown: props.searchReducer.dropdown
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    querySearchResults: (query) => dispatch(querySearchResults(query)),
    getDropDownRequest: (query) => dispatch(getDropDownRequest(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));