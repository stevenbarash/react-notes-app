import React, {Component} from 'react';
import logo from './logo.svg';
import TextEditorContainer from './Components/Editor/TextEditorContainer';
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="text-edit-cont">
        <TextEditorContainer/>
      </div>
    )
  }
}

export default App;
