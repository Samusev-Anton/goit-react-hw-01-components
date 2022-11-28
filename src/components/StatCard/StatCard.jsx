import css from './StatCard.module.css';
import PropTypes from 'prop-types';



export const StatCard = ({ label, percentage }) => {
    return <li className={css.item}>
         <span className={css.label}>{label}</span>
         <span className={css.percentage}>{percentage}</span>
    </li>
}

StatCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}