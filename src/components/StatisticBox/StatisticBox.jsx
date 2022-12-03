import css from './StatisticBox.module.css';
import PropTypes from 'prop-types';
import { StatCard } from 'components/StatCard/StatCard';
import { PageTitle } from 'components/PageTitle/PageTilte';


export const StatisticBox = ({ events, text }) => {
  console.log(events);
  return (
    <section className={css.statistics}>
      <PageTitle text={text } />
    <ul className={css.statBox}>
      {events.map(({ id, label, percentage }) => (
        <StatCard key={id} label={label} percentage={percentage} />
      ))}
      </ul>
      </section>
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
