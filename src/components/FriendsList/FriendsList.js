import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import s from './friendsList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendsList;
