import css from './StatisticBox.module.css';
import PropTypes from 'prop-types';
import { StatCard } from 'components/StatCard/StatCard';

export const StatisticBox = ({ events }) => {
  // console.log(events);
  return (
    <ul className={css.statBox}>
      {events.map(({ id, label, percentage }) => (
        <StatCard key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatisticBox.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ),
};
