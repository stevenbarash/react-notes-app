import React, {Component} from 'react'
import TextEditor from './TextEditor'
import './ContainerStyle.css'
export default class TextEditorContainer extends Component {
    render() {
        return (
            <div className="editor">
                <TextEditor/>
            </div>
        )
    }
}
