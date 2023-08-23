import { FriendList } from './Friends/Friends/Friendlist/FriendList';
// import { FriendListItem } from './FriendListItem';
import { Profile } from './Profile/Profile';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Statistics } from './Statistics/Statistics';
import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';


export const App = () => {
  return (
    <div
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-between"
    as="main"
    px={5}
    py={3}
    width={1} 
    bg="muted">
    
    <Profile
  username = {user.username}
  tag = {user.tag}
  location = {user.location}
  avatar = {user.avatar}
  stats = {user.stats} />
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </div>
  );
};
