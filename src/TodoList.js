import React from 'react';

class TodoList extends React.Component {
    handleBtnClick() {
        alert('c');
    }

    render() {
        return (
            <div className="App">
                <div>
                    <input/>
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    <li>learn react</li>
                    <li>learn English</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;
