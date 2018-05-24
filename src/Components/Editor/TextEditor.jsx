import React, {Component, Fragment} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {Nav, NavItem, NavLink} from 'reactstrap'

import FormatButtons from './FormatButtons'
import './FormatButtons.css'

import './TextEditor.css';
export default class TextEditor extends Component {

    constructor(props) {

        super(props);
        this.state = {
            editorState: EditorState.createEmpty()

        };
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this
            .handleKeyCommand
            .bind(this);
        // this.setDomEditorRef = ref => this.domEditor = ref;

    }
    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return "handled"
        }
        return 'not-handled'

    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }
    _onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
    }
    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }
    componentDidMount() {
        this
            .refs
            .textEditor
            .focus();
    }

    render() {
        return (
            <React.Fragment>
                <Nav className="format-buttons">
                    <NavItem>
                        <NavLink
                            onClick={this
                            ._onBoldClick
                            .bind(this)}>
                            <i className="fas fa-bold"></i>
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={this
                            ._onUnderlineClick
                            .bind(this)}>
                            <i className="fas fa-underline"></i>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={this
                            ._onItalicClick
                            .bind(this)}>
                            <i className="fas fa-italic"></i>

                        </NavLink>
                    </NavItem>

                </Nav>
                <Editor
                    className="text-editor"
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    placeholder="Type something..."
                    spellCheck="true"
                    handleKeyCommand={this.handleKeyCommand}
                    ref="textEditor"></Editor>
            </React.Fragment>
        );
    }
}