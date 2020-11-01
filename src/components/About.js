import React from "react";


class About extends React.Component{

    render(){
        return (
            <div className="row">
                <div className="card col-md-9 offset-md-1 mt-5">
                    <h4 className="card-title">About us </h4>
                    <div className="card-body">
                        A sample React webapp Deployed on AWS EC2 instance 
                        <div className="text-info">
                            Deployed using Docker by Sai Maddula
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;