import css from './FriendsBox.module.css';
// import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';


export const FriendsBox = ({ events }) => {
//   console.log(events);
  return (
    <ul className={css.friendsBox}>
      {events.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} foto={avatar} name={name} online={isOnline} />
      ))}
    </ul>
  );
};

// FriendsBox.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired
//     })
//   ),
// };
