import React,{Component} from 'react'
import axios from 'axios';

class CreateUser extends Component{
    constructor(props){
        super(props)
        this.state={
            username:""
        }
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        const newUser={username:this.state.username}
        // axios.post('http://localhost:5000/api/users/add', newUser)
        // .then(res => console.log(res.data));
        // console.log(newUser)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch('http://localhost:5000/api/users/add', requestOptions)
        .then(res => console.log(res.data));

        this.setState({
            username:""
        })
    }
    render(){
        return(
            <div className="container">
                <h1>Create a New User</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="Username">User Name</label>
                        <input type="text" className="form-control" value={this.state.username} id="username" onChange={this.changeHandler} aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary">Create User</button>
                </form>
            </div>
        )
    }
}

export default CreateUser