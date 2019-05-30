import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import ItemList from "./ItemList";

class App extends React.Component {
  state = {
    articles: []
  };

  addArticle = article => {
    let oldArticles = this.state.articles;
    article.id = Date.now();
    let newArticles = [...oldArticles, article];
    this.setState({ articles: newArticles });
  };

  render() {
    return (
      <div>
        <h3>List de courses</h3>
        <Form
          formTitle="Ajouter des articles à acheter"
          addArticle={this.addArticle}
        />
        <ItemList articles={this.props.articles} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(App);
