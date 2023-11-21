import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../style/App.css';
import Home from './Home';
import Team from './Team';
import UserList from './UserList';
import UserDetail from './UserDetail';
import CreateUser from './CreateUser';
import CreateType from './CreateType';

function App() {
  // const [currentView, setCurrentView] = useState('');
  const [team, setTeam] = useState([]);
  const [users, setUsers] = useState([]);
  const [detailUser, setDetailUser] = useState([]);

  const fetchTeam = () => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((dataOfTeam) => {
        setTeam(dataOfTeam);
      });
  };

  const fetchUser = () => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const fetchDetailUser = (id) => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailUser(data);
      });
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Let's understand each other !</h1>
        <Routes>
          <Route path="/" element={<Home team={team}></Home>} />
          <Route
            path="/team/:teamId"
            element={<Team fetchUser={fetchUser} users={users} />}
          />
          <Route
            path="/users"
            element={<UserList fetchUser={fetchUser} users={users} />}
          />
          <Route
            path="/users/:userId"
            element={
              <UserDetail
                detailUser={detailUser}
                fetchDetailUser={fetchDetailUser}
              ></UserDetail>
            }
          />
          <Route
            path="/users/new"
            element={<CreateUser fetchTeam={fetchTeam} team={team} />}
          />
          <Route
            path="/users/:userId/type/new"
            element={
              <CreateType
                fetchDetailUser={fetchDetailUser}
                detailUser={detailUser}
              />
            }
          />

          {/* <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
