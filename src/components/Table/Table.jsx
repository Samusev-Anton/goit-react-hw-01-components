import css from './Table.module.css'
import { TableElem } from 'components/TableElem/TableElem';


export const Table = ({ events }) => {
  console.log(events);
  return (
      <table className={css.Table}>
           <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
          </thead>
          <tbody>
                    {events.map(({ id, type, amount, currency }) => (
        <TableElem key={id} type={type} amount={amount} currency={currency} />
      ))}
          </tbody>
    </table>
  );
};
