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
        <ItemList
          articles={this.props.articles}
          editArticle={this.props.editArticle}
        />
      </div>
    );
  }
}

const addArticleActionCreator = article => {
  return {
    type: "ADD_ARTICLE",
    payload: article
  };
};

const editArticleActionCreator = article => {
  return {
    type: "EDIT_ARTICLE",
    payload: article
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => {
      dispatch(addArticleActionCreator(article));
    },
    editArticle: article => {
      dispatch(editArticleActionCreator(article));
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
