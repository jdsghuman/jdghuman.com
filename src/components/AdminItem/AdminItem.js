import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminItem extends Component {

  deleteProject = (id) => {
    console.log('clicked delete ', id);
    this.props.dispatch({ type: 'DELETE_PROJECT', payload: id });
  }

  render() {
    return (
      <tr>
        <td>{this.props.adminData.name}</td>
        <td><button onClick={e => window.confirm('Are you sure you want to delete this project?') &&
          this.deleteProject(this.props.adminData.id)}>Delete</button></td>
      </tr>
    );
  }
}

export default connect()(AdminItem);