import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Report } from './powerbi/Report';

export class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-light">
                    <div class="container-fluid">
                        <div className="d-flex">
                            <p className="nav-item mb-0 h1" >View report do powerBI services</p>
                        </div>
                        <form className="d-flex" >
                            <Button className="btn btn-secondary" >Login</Button>
                        </form >
                    </div>
                </nav>

                <div className="container">
                    <Report />
                </div>
            </div>
        );
    }
}
