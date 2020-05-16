import React, { Component } from "react";
import "./../css/FollowUserListItem.css";
import FollowUserItem from "./FollowUserItem";

class FollowUserListItem extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="FollowUserListItem">
        <div className="Header">
          <p className="silver-text">Gợi ý cho bạn</p>
          <a href="#">Xem tất cả</a>
        </div>
        <div className="Body">
          {users.map(user => {
            return <FollowUserItem user={user} />;
          })}
        </div>
      </div>
    );
  }
}

export default FollowUserListItem;
