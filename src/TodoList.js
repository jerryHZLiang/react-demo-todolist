import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };
        this.handleInputChange =  this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelete =this.handleDelete.bind(this)
    }

     handleBtnClick() {
        if(this.state.inputValue !== ''){
            this.setState({
                    list: [...this.state.list, this.state.inputValue],
                    inputValue: ''
                }
            )
        }

    }
     handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    // handleItemClick(index){
    //     const  list = [...this.state.list];
    //     list.splice(index, 1);
    //     this.setState({
    //         list: list
    //     })
    // }

    handleDelete(index){
        const  list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
    getTodoItems(){
        return(
            this.state.list.map((item, index)=>{
                    // return <li onClick={this.handleItemClick.bind(this, index)} key={index}>{item}</li>
                    return <TodoItem delete={this.handleDelete}
                                     key={index}
                                     content = {item}
                                     index={index}/>
                    })
        )
    }
    render() {
        return (
            <div className="App">
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className='blue-btn' onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </div>
        );
    }
}

export default TodoList;
