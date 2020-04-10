import React from "react";
import axios from "axios";
import "../App.scss";


class Card extends React.Component  {
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/players ")

        .then(res=>{
            console.log(res.data)
          this.setState({
              users:res.data

          })})
        }
        render(){
            return(
                <div className = "Main-cont"data-testid="Axiosreturn">
                    {this.state.users.map(user=>( 

                        <div className = "DivCont">
                    <h1>{user.name}</h1>
                    <h2>Country:{user.country}</h2>
                    <h2> Searches: {user.searches}</h2>
                    </div>

                    ))
                    }

                </div>
            )

        }
    }
export default Card 