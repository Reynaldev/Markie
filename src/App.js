import React from 'react';
import Markdown from 'react-markdown';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.processMarkdown = this.processMarkdown.bind(this);
  }
  processMarkdown(evt) {
    this.setState({
      text: evt.target.value
    })
  }
  render() {
    return (
      <div id="main">
        <div id="editor-area">
          <textarea id="editor" onChange={this.processMarkdown}>{this.state.text}</textarea>
        </div>
        <div id="preview-area">
          <div id="preview">
            <Markdown>{this.state.text}</Markdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
