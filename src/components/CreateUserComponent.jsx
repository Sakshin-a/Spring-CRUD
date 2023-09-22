import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            petName:'',
            userName:'',
            emailId:''
        }

        this.changePetNameHandler = this.changePetNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    changePetNameHandler(event) {
        this.setState({petName:event.target.value});
    }

    changeUserNameHandler(event) {
        this.setState({userName:event.target.value});
    }

    changeEmailHandler(event) {
        this.setState({emailId:event.target.value});
    }

    saveUser = (e) =>{
        e.preventDefault();
        let newUser = {petName: this.state.petName, userName: this.state.userName, emailId: this.state.emailId};
        console.log('newUser =>' + JSON.stringify(newUser));

        UserService.createUser(newUser).then(res => {
            this.props.history.push('/pets');
        })
    }


    cancel(){
        this.props.history.push("/pets");
    }


    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>Pet Name</label>
                                        <input type="text" className="form-control" 
                                        name="petName" value={this.state.petName}
                                        onChange={this.changePetNameHandler}
                                        placeholder="Enter Pet Name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input type="text" className="form-control" 
                                        name="userName" value={this.state.userName}
                                        onChange={this.changeUserNameHandler}
                                        placeholder="Enter User Name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input type="text" className="form-control" 
                                        name="email" value={this.state.emailId}
                                        onChange={this.changeEmailHandler}
                                        placeholder="Enter Email Address"
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveUser}>
                                        Save
                                    </button>

                                    <button className="btn btn-danger" onClick={this.cancel}
                                    style={{marginLeft:"10px"}}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateUserComponent;
