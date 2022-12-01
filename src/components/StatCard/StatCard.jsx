import css from './StatCard.module.css';
import PropTypes from 'prop-types';

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



export const StatCard = ({ label, percentage }) => {
    return <li className={css.item} style={{ backgroundColor:getRandomHexColor()}}>
         <span className={css.label}>{label}</span>
         <span className={css.percentage}>{percentage}</span>
    </li>
}

StatCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}