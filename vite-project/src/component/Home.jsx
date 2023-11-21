import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../style/Home.css';
import TeamMember from './TeamMember';

export default function Home(props) {
  const { team } = props;

  useEffect(() => {}, []);

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Link to={`/users`} className="Link">
          ユーザーリストへ
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>チームID</th>
            <th>チーム名</th>
            <th>メンバー</th>
          </tr>
        </thead>
        <tbody>
          {team.map((obj, index) => {
            return (
              <tr key={index.toString()}>
                <td>{obj.id}</td>
                <td>
                  <Link to={`/team/${obj.id}`}>{obj.name}</Link>
                </td>
                <td>
                  <TeamMember team_id={obj.id}></TeamMember>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
