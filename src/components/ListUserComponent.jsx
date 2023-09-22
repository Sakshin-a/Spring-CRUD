import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.addUsers = this.addUsers.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

  }
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUsers() {
    this.props.history.push('/add-user');
  }

  editUser(id){
    this.props.history.push(`/update-user/${id}`);
  }

  deleteUser(id){
    UserService.deleteUser(id).then(res => {
        this.setState({users: this.state.users.filter(user => user.id !== id)});
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Users List</h2>

        
          <button className="btn btn-primary" onClick={this.addUsers}>
            Add User
          </button>
          <div className="row">
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>User Name</th>
                <th>Email id</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.petName}</td>
                  <td>{user.userName}</td>
                  <td>{user.emailId}</td>
                  <td>
                    <button onClick={() => this.editUser(user.id)}
                    className="btn btn-info" name="update">
                        Update
                    </button>

                    <button onClick={() => this.deleteUser(user.id)}
                    className="btn btn-danger" style={{marginLeft:"10px"}}> 
                        Delete
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
