import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(){
        AppActions.addItem('this is the item');
    }
    
    render(){
        return (
            <div className="wrapper">
                <h3 onClick={this.handleClick}>Click this Title, then check console</h3>
        </div> )
    }
}