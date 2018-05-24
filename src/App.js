import React, {Component} from 'react';
import logo from './logo.svg';
import TextEditorContainer from './Components/Editor/TextEditorContainer';
import HeaderBar from './Components/Header/HeaderBar';
import FormatButtons from './Components/Editor/FormatButtons'
import './App.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderBar className="nav"/>
        <div className="text-edit-cont">
          <TextEditorContainer/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
