import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand"to="/"><strong>Exercise Tracker</strong></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-link active"to="/">ExerciseList <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link"to="/create">Create Exercise</Link>
                    <Link className="nav-link"to="/user">Create User</Link>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar