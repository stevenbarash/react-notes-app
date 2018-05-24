import React, {Component} from 'react'
import TextEditor from './TextEditor'

import './ContainerStyle.css'
export default class TextEditorContainer extends Component {

    focusOnClick = () => {
        this
            .refs
            .child
            .refs
            .textEditor
            .focus();
    }

    render() {
        return (
            <div className="editor">
                <TextEditor ref="textEditor" onClick={console.log("it clicks")}/> {/* this
                    .focusOnClick
                    .bind(this) */}
            </div>
        )
    }
}
