import React from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { querySearchResults } from "../state/Search/Search-Actions";

const styles = (theme) => {
    return {
      root: {
        width: '70%',
    },
      back: {
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
        width: '70%',
        alignItems: 'center'
      },
      searchBar: {
        margin: '5px 0',
        padding: '10px',
        width: '70%'
      },
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
    }
  
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.querySearchResults(this.state.search)
        this.setState({search: ''})
    }

    render() {
      const { result, classes } = this.props;

      const content = result.length > 0 ? (
          result.map((res) => (
              <div>{res.attributes.title}</div>
          ))
      ) : (
          <div></div>
      )
      return (
        <div className={classes.root}>
          <form className={classes.searchSection} onSubmit={(e) => this.handleSubmit(e)}>
            <input onChange={(e) => this.handleInputChange(e)} placeholder="Search for a conversation" value={this.state.search} className={classes.searchBar} />
            <button className={classes.back} role="submit">Search</button>
          </form>
          {content}
        </div>
      );
    }
}

const mapStateToProps = (props) => {
  return {
      result: props.searchReducer.result
  };
};

const mapDispatchToProps = dispatch => { 
  return {
    querySearchResults: (query) => dispatch(querySearchResults(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));