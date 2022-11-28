// import PropTypes from 'prop-types';
import css from './Friend.module.css'



export const Friend = ({ foto, name, online }) => {
    return <li className={css.itemFriend}>
        <span className={css.status}>{online }</span>
  <img className={css.avatar} src={foto} alt={name} width="70" />
        <p className="name">{name}</p>
    </li>
}

// Friend.propTypes = {
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
// }