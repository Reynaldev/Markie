import React from 'react';
import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import './App.css';

const inputTemplate = 
"# Markie \n\
## The Markdown Editor \n\
> Source code of this project can be seen [here](https://github.com/Reynaldev/Markie) \n\n\
![Preview](https://pngimg.com/uploads/doge_meme/doge_meme_PNG21.png) \n\
\n\
Put a Backtick between a text to make an inline code ``This is what it `looks` like`` \n\
\n\
Add 4 spaces or 1 tab in front of a line to make a code block  \n\n\
    function helloWorld() { \n\
        console.log(\"This is a code block.\"); \n\
    } \n\
\n\
You can also make a list by typing a text preceeded by a dash \n\
- First item \n\
- Second item \n\
- Third item \n\
\n\
*You can make your text italic by wrapping an asterisks between it.* \n\
\n\
**Or you can make your text bold by wrapping it in double asterisk** \r\
";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: inputTemplate
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
      <div id="main" class="row justify-content-md-center">
        <div id="editor-area" class="col col-lg-6">
          <textarea id="editor" class="form-control bg-dark" value={this.state.text} onChange={this.processMarkdown}></textarea>
        </div>
        <div id="preview-area" class="col col-lg-6">
          <div id="preview">
            <Markdown>{this.state.text}</Markdown> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
