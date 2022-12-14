import { Profile } from 'components/User/User';
import { StatisticBox } from 'components/StatisticBox/StatisticBox'
import { FriendsBox } from 'components/FriendsBox/FriendsBox';
import { Table } from 'components/Table/Table';
import user from '../data/user.json';
import statistics from '../data/statistics.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'




export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticBox events={ statistics } text='Upload stats'/>
      <FriendsBox events={friends} />
      <Table events={transactions} />
    </div>
  );
};
