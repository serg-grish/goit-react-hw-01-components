import './App.css';
import { container, section, sectionBottom } from './components/Container/container.module.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import Transactions from './components/Transactions/Transactions';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <div className={section}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <div className={container}>
          <Statistics title="Upload stats" stats={statisticalData} />
          <Statistics stats={statisticalData} />
        </div>
      </div>
      <div className={sectionBottom}>
        <Transactions transactions={transactions} />
        <FriendsList friends={friends} />
      </div>
    </div>
  );
}

export default App;
