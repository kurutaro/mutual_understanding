import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

export default function UserList(props) {
  const { fetchUser, users } = props;

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Link to={`/`} className="Link">
          ホームに戻る
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index.toString()}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/users/${user.id}`}>
                    {user.first_name + ' ' + user.last_name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
