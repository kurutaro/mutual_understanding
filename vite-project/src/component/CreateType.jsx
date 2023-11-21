import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CreateType(props) {
  const { userId } = useParams();
  const { fetchDetailUser, detailUser } = props;

  const [typeData, setTypeData] = useState({
    user_id: Number(userId),
    question_pace: null,
    question_between: null,
    question_ending: null,
    question_volume: null,
    question_first: null,
    question_conclusion: null,
    question_opinion: null,
    question_sight: null,
    question_Immediate: null,
    question_facial: null,
    question_intonation: null,
    question_gesture: null,
    question_atmosphere: null,
    question_word_usage: null,
    question_good_at: null,
    question_first_meeting: null,
    question_play: null,
    question_feeling_face: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTypeData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ユーザー情報を送信する処理を追加
    console.log(typeData); // 例: データをコンソールに表示
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(typeData),
    };
    fetch(`/api/users/${userId}/type/new`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/users/${userId}`);
        alert('登録が完了しました');
      })
      .catch((error) => {
        console.log(error); // 文字列 失敗です が返る
        alert('登録に失敗しました');
      });
  };

  useEffect(() => {
    fetchDetailUser(userId);
  }, []);

  return (
    <>
      <div className="form-container-type">
        <div style={{ textAlign: 'right' }}>
          <Link to={`/`} className="Link">
            ホームに戻る
          </Link>
        </div>
        <h2 style={{ margin: 0 }}>ソーシャルタイプ診断</h2>
        <form onSubmit={handleSubmit}>
          <select
            name="user_id"
            value={Number(userId)}
            onChange={handleInputChange}
          >
            {detailUser.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.first_name + ' ' + obj.last_name}
              </option>
            ))}
          </select>
          <br />
          <h4>AかBで答えてください</h4>
          <ul>
            <li>
              話すペースは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_pace_A"
                name="question_pace"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_pace_A">A:早い</label>
              <input
                type="radio"
                id="question_pace_B"
                name="question_pace"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_pace_B">B:ゆっくり</label>
            </li>
            <li>
              話す時の間は、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_between_A"
                name="question_between"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_between_A">A:取らない</label>
              <input
                type="radio"
                id="question_between_B"
                name="question_between"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_between_B">B:取る</label>
            </li>
            <li>
              話す時の語尾は、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_ending_A"
                name="question_ending"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_ending_A">A:きっぱり</label>
              <input
                type="radio"
                id="question_ending_B"
                name="question_ending"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_ending_B">B:ソフト</label>
            </li>
            <li>
              話すときの声の大きさは、&emsp;&emsp;
              <input
                type="radio"
                id="question_volume_A"
                name="question_volume"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_volume_A">A:大きめ</label>
              <input
                type="radio"
                id="question_volume_B"
                name="question_volume"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_volume_B">B:小さめ</label>
            </li>
            <li>
              話すときは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_first_A"
                name="question_first"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_first_A">A:自分から話す</label>
              <input
                type="radio"
                id="question_first_B"
                name="question_first"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_first_B">B:後から発言する</label>
            </li>
            <li>
              話すときは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_conclusion_A"
                name="question_conclusion"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_conclusion_A">A:結論から話す</label>
              <input
                type="radio"
                id="question_conclusion_B"
                name="question_conclusion"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_conclusion_B">B:順を追って話す</label>
            </li>
            <li>
              話すときは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_opinion_A"
                name="question_opinion"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_opinion_A">A:まず自分の意見を言う</label>
              <input
                type="radio"
                id="question_opinion_B"
                name="question_opinion"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_opinion_B">B:まず周りの意見を聞く</label>
            </li>
            <li>
              話すときは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_sight_A"
                name="question_sight"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_sight_A">A:視線をしっかり合わせる</label>
              <input
                type="radio"
                id="question_sight_B"
                name="question_sight"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_sight_B">B:視線をソフトに合わせる</label>
            </li>
            <li>
              相手の質問には、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_Immediate_A"
                name="question_Immediate"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_Immediate_A">A:即答する</label>
              <input
                type="radio"
                id="question_Immediate_B"
                name="question_Immediate"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_Immediate_B">
                B:よく考えてから答える
              </label>
            </li>
          </ul>
          <h4>CかDで答えてください</h4>
          <ul>
            <li>
              表情は、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_facial_A"
                name="question_facial"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_facial_A">C:豊か</label>
              <input
                type="radio"
                id="question_facial_B"
                name="question_facial"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_facial_B">D:ポーカーフェイス</label>
            </li>
            <li>
              話すときの声の抑揚は、&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_intonation_A"
                name="question_intonation"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_intonation_A">C:ある</label>
              <input
                type="radio"
                id="question_intonation_B"
                name="question_intonation"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_intonation_B">D:ない</label>
            </li>
            <li>
              振り手振りを、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_gesture_A"
                name="question_gesture"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_gesture_A">C:交えて話す</label>
              <input
                type="radio"
                id="question_gesture_B"
                name="question_gesture"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_gesture_B">D:あまり使わない</label>
            </li>
            <li>
              雰囲気は、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_atmosphere_A"
                name="question_atmosphere"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_atmosphere_A">C:軽い感じ</label>
              <input
                type="radio"
                id="question_atmosphere_B"
                name="question_atmosphere"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_atmosphere_B">D:きっちりしている</label>
            </li>
            <li>
              言葉使いは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_word_usage_A"
                name="question_word_usage"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_word_usage_A">C:ラフなものが多い</label>
              <input
                type="radio"
                id="question_word_usage_B"
                name="question_word_usage"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_word_usage_B">D:硬いものが多い</label>
            </li>
            <li>
              得意なのは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_good_at_A"
                name="question_good_at"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_good_at_A">C:例え話やエピソード</label>
              <input
                type="radio"
                id="question_good_at_B"
                name="question_good_at"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_good_at_B">D:情報・データ・数字</label>
            </li>
            <li>
              はじめから、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_first_meeting_C"
                name="question_first_meeting"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_first_meeting_A">C:友達とよく話す</label>
              <input
                type="radio"
                id="question_first_meeting_D"
                name="question_first_meeting"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_first_meeting_B">D:友達と話せない</label>
            </li>
            <li>
              遊びは、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_play_C"
                name="question_play"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_play_A">C:みんなと遊ぶ方が好き</label>
              <input
                type="radio"
                id="question_play_D"
                name="question_play"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_play_B">D:一人で遊ぶのが好き</label>
            </li>
            <li>
              気持ちが、&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <input
                type="radio"
                id="question_feeling_face_C"
                name="question_feeling_face"
                value={1}
                onChange={handleInputChange}
              />
              <label htmlFor="question_feeling_face_A">C:顔に出やすい</label>
              <input
                type="radio"
                id="question_feeling_face_D"
                name="question_feeling_face"
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor="question_feeling_face_B">D:顔に出にくい</label>
            </li>
          </ul>
          <button type="submit">登録</button>
        </form>
      </div>
    </>
  );
}
