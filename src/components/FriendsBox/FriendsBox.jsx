import css from './FriendsBox.module.css';
import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';


export const FriendsBox = ({ events }) => {
  return (
    <ul className={css.friendsBox}>
      {events.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} foto={avatar} name={name} online={isOnline} />
       ))}
    </ul>
  );
};

FriendsBox.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

