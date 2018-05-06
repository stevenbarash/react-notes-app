import React, {Component, Fragment} from 'react'
import {Editor, EditorState} from 'draft-js'
import './TextEditor.css'
export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()

        };
        this.onChange = (editorState) => this.setState({editorState})
    }

    render() {
        return (
            <Editor
                className="text-editor"
                editorState={this.state.editorState}
                onChange={this.onChange}></Editor>
        )
    }
}