import React,{Component} from 'react'

class CreateExercise extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            description:"",
            duration:"",
            date:new Date().toISOString().slice(0,10),
            user:[]
        }
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        const user=[...this.state.user,exercise]
        // console.log(user)
        this.setState({
            user:user,
            username:"",
            description:"",
            duration:"",
            date:new Date().toISOString().slice(0,10)
        })
    }
    render(){
        console.log(this.state);
        return(
            <div className="container">
                <h1>Create a Exercise Log</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="Username">User Name</label>
                        <input type="text" className="form-control" value={this.state.username} id="username" onChange={this.changeHandler} aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control" id="description" value={this.state.description} rows="3" onChange={this.changeHandler}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Duration">Duration</label>
                        <input type="text" className="form-control" id="duration" value={this.state.duration} onChange={this.changeHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date" value={this.state.date} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateExercise