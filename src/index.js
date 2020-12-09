import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import EmojiResults from "./components/EmojiResult/EmojiResults";
import filterEmoji from "./components/filterEmoji";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
