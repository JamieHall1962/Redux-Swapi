import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from "../actions";

// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // eslint-disable-next-line
           <h2> We're getting stuff. Hang on.............. </h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log("STATE: ", state);
  return {
    characters: state.characters,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
