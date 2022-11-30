import PropTypes from 'prop-types';
import css from './Friend.module.css'



export const Friend = ({ foto, name, online }) => {
    // console.log(online);
    let statusColor = '';
    if (online) {
        statusColor = css.statusOn;
    }
    else (
        statusColor = css.statusOff
    )
    return <li className={css.itemFriend}>
        <span className={statusColor}>{online }</span>
  <img className={css.avatar} src={foto} alt={name} width="70" />
        <p className="name">{name}</p>
    </li>
}

Friend.propTypes = {
    foto: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}