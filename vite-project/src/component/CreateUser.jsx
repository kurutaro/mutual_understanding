import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CreateUser() {
  useEffect(() => {}, []);

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

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
    fetch('/api/users/new', options);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="first name"
          value={userData.username}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="last_name"
          placeholder="last name"
          value={userData.username}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="mail address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">登録</button>
      </form>
    </>
  );
}
