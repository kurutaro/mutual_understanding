import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CreateUser(props) {
  const { fetchTeam, team } = props;
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    team_id: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ユーザー情報を送信する処理を追加
    console.log(userData); // 例: データをコンソールに表示
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    };
    fetch('/api/users/new', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/');
        alert('登録が完了しました');
      })
      .catch((error) => {
        console.log(error); // 文字列 失敗です が返る
        alert('登録に失敗しました');
      });
  };

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return (
    <>
      <div className="form-container">
        <div style={{ textAlign: 'right' }}>
          <Link to={`/`} className="Link">
            ホームに戻る
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="create_user"
            type="text"
            name="first_name"
            placeholder="first name"
            value={userData.username}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="create_user"
            type="text"
            name="last_name"
            placeholder="last name"
            value={userData.username}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="create_user"
            type="email"
            name="email"
            placeholder="mail address"
            value={userData.email}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="create_user"
            type="password"
            name="password"
            placeholder="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <select
            name="team_id"
            value={userData.team_id}
            onChange={handleInputChange}
          >
            <option hidden>チームを選択してください</option>
            {team.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.name}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">登録</button>
        </form>
      </div>
    </>
  );
}
