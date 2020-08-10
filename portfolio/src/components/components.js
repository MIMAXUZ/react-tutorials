import React, { Component } from 'react';     
import ChildComponent from './ChildComponent';
import './../pages/style.css'
// Sample for class component
class ParentComponent extends Component {
    render() {
        return (
            <main>
                <div className="helper">
                    I'm the parent component.
                <ChildComponent />
                </div>
            </main>
        );
    }
}
export default ParentComponent;
