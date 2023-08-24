import { FriendList } from './Friends/Friends/Friendlist/FriendList';
import { Profile } from './Profile/Profile';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Statistics } from './Statistics/Statistics';
import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';


export const App = () => {
  return (
    <div>
    
  <Profile
  username = {user.username}
  tag = {user.tag}
  location = {user.location}
  avatar = {user.avatar}
  stats = {user.stats} />
  <FriendList friends={friends} />
  <Statistics title="Upload stats" stats={data} />
  <TransactionHistory items={transactions} />

    </div>
  );
};
