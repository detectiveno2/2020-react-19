import React, { Component } from "react";
import "./../css/FollowUserItem.css";
import PropTypes from "prop-types";

class FollowUserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="FollowUserItem">
        <div className="Inf">
          <img src={user.avatarUrl} alt="avatar" />
          <div className="Inf-name">
            <p>{user.name}</p>
            <p className="silver-text">Gợi ý cho bạn</p>
          </div>
        </div>
        <a href="#">Theo dõi</a>
      </div>
    );
  }
}

FollowUserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  })
}

export default FollowUserItem;
