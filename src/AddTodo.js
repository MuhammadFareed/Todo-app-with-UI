import React,{Component} from 'react';

class AddTodo extends Component {
    state = {
        content: '' 
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({content:''})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo : <input type="text" onChange={this.handleChange} value={this.state.content}></input></label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;