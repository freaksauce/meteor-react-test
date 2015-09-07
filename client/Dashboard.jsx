Dashboard = React.createClass({

  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      users: Users.find({}).fetch()
    }
  },

  renderUserList() {
    return <UserList users={this.data.users} />;
  },

  render() {
    return (
      <div>
      {this.renderUserList()}
      </div>
    );
  }
});