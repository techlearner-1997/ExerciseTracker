import React,{Component} from 'react'

class ExerciseList extends Component{
    constructor(props){
        super(props)
        this.state={
            exerciseList:[],
            userList:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:5000/api/exercises/')
        .then(response => response.json())
        .then(data => this.setState({ exerciseList: data }));

        fetch('http://localhost:5000/api/users/')
        .then(response => response.json())
        .then(data => this.setState({ userList: data }));
    }
    render(){
        console.log(this.state);
        const exerciseLog=this.state.exerciseList ?this.state.exerciseList.map(exercise=>{
            return <div className="card border-dark mb-3">
            <div className="card-header">
                Duration : {exercise.duration} minutes
            </div>
            <div className="card-body">
                <h5 className="card-title">{exercise.username}</h5>
                <p className="card-text">{exercise.description}</p>
        <footer class="blockquote-footer">Added on : {exercise.date}</footer>
            </div>
            </div>
        }):<div>No Data Available</div>

        const userLog=this.state.userList.users ? this.state.userList.users.map(user=>{
            return <button type="button" class="list-group-item list-group-item-action">{user.username}</button>
        }):<div>No User Available</div>
        return(
            <div className="container-fluid" style={{marginTop:"1%"}}>
                <div className="row">
                    <div className="column">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            Duration : 10 minutes
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Side Planks</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <footer class="blockquote-footer">Added on : </footer>
                        </div>
                        </div>
                        {exerciseLog}
                    </div>
                    <div className="column text-center">
                    <div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    User Enrolled :
  </button>
  {userLog}
</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ExerciseList