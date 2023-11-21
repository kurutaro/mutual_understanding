import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../style/Home.css';
import TeamMember from './TeamMember';

export default function Home(props) {
  const { team } = props;

  useEffect(() => {}, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>チーム名</th>
            <th>メンバー</th>
            <th>bbb</th>
          </tr>
        </thead>
        <tbody>
          {team.map((obj, index) => {
            return (
              <tr key={index.toString()}>
                <td>
                  <Link to={`/team/${obj.id}`}>{obj.name}</Link>
                </td>
                <td>
                  <TeamMember team_id={obj.id}></TeamMember>
                </td>
                <td>
                  <button>編集</button>
                  <button>削除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={`/users`}>ユーザーリストへ</Link>
    </>
  );
}
