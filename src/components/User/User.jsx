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

// Profile.PropTypes = {
//     user: PropTypes.arrayOf(PropTypes.exact({
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: {
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number
//   }
//     }))
// }

{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */}

{/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */}