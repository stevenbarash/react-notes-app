import React, {Component} from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
export default class FormatButtons extends Component {
    render() {
        return (
            <div>
                <Nav className="format-buttons">
                    <NavItem>
                        <NavLink href="#">
                            <i className="fas fa-bold"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <i className="fas fa-underline"></i>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <i className="fas fa-italic"></i>

                        </NavLink>
                    </NavItem>

                </Nav>

            </div>
        )
    }
}
