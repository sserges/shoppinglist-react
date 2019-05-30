import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import ItemList from "./ItemList";

class App extends React.Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div>
        <h3>List de courses</h3>
        <Form
          formTitle="Ajouter des articles à acheter"
          addArticle={this.props.addArticle}
        />
        <ItemList articles={this.props.articles} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => {
      dispatch({ type: "ADD_ARTICLE", payload: article });
    }
  };
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
