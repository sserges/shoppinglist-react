import React from "react";

import Form from "./Form";
import ItemList from "./ItemList";

class App extends React.Component {
  addArticle = article => {
    console.log("addArticle", article);
  };

  render() {
    return (
      <div>
        <h3>List de courses</h3>
        <Form
          formTitle="Ajouter des articles à acheter"
          addArticle={this.addArticle}
        />
        <ItemList />
      </div>
    );
  }
}

export default App;
