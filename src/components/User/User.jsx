import PropTypes from 'prop-types';
import css from './User.module.css'

export const Profile = ({ user }) => {
    // console.log(user);
    return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={user.avatar}
      alt="User avatar"
        className={css.avatar}
    />
            <p className={css.name}>{ user.username}</p>
            <p className="tag">@{ user.tag}</p>
            <p className="location">{ user.location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
    <span className="label">Followers</span>
      <span className={css.quantity}>{ user.stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className="label">Views</span>
      <span className={css.quantity}>{ user.stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className="label">Likes</span>
      <span className={css.quantity}>{ user.stats.likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
    user: PropTypes.object,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}

