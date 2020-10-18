import React, {Component} from 'react';
import './myProfile.less';
import 'bootstrap/dist/css/bootstrap.css'

class MyProfile extends Component {
  state = {
    name: "",
    gender: "male",
    description: "",
    readCheck: "",
  }

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleReadCheck = (event) => {
    this.setState({
      readCheck: event.target.checked,
    })
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>My Profile</h1>
        <form className="my-form" onSubmit={(e) => this.handleSubmit(e)}>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleFieldChange("name", e)}
              className="form-control"
              id="name"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              type="text"
              value={this.state.gender}
              onChange={(e) => this.handleFieldChange("gender", e)}
              className="form-control"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              value={this.state.description}
              onChange={(e) => this.handleFieldChange("description", e)}
              className="form-control"
              id="description"
              placeholder="Description about yourself"
            />
          </div>

          <div className="form-group">
          <input
            type="checkbox"
            value={this.state.readCheck}
            onChange={(e) => this.handleReadCheck(e)}
            className="checkboxInput"
            id="readCheck"
          />
          <label className='checkboxLabel' htmlFor='readCheck'>
            I have read the terms of conduct
          </label>
          </div>

          <input
            disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.readCheck}
            type="submit"
            value="Submit"
            className="btn btn-primary btn-lg"
          />

        </form>
      </div>
    );
  }
}

export default MyProfile;
