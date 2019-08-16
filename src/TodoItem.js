import React from 'react';

class TodoItem extends React.Component{
    //子组件要调用父组件的方法
    handleDelete(){
        this.props.delete(this.props.index)
    }
    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}

export default TodoItem