import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PositioningMap from './PositioningMap';
import '../style/Home.css';
import social_type from '../assets/image/social_type.jpg';

export default function UserDetail(props) {
  const { userId } = useParams();
  const { detailUser, fetchDetailUser } = props;
  const [socialStyle, setSocialStyle] = useState({
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  });

  const makePositioningMapData = (id) => {
    fetch(`http://localhost:3000/api/social_style/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let countA = 0;
        let countB = 0;
        let countC = 0;
        let countD = 0;

        //ABの項目
        const arrAB = [
          data[0]?.question_pace,
          data[0]?.question_between,
          data[0]?.question_ending,
          data[0]?.question_volume,
          data[0]?.question_first,
          data[0]?.question_conclusion,
          data[0]?.question_opinion,
          data[0]?.question_sight,
          data[0]?.question_Immediate,
        ];
        //CDの項目
        const arrCD = [
          data[0]?.question_facial,
          data[0]?.question_intonation,
          data[0]?.question_gesture,
          data[0]?.question_atmosphere,
          data[0]?.question_word_usage,
          data[0]?.question_good_at,
          data[0]?.question_first_meeting,
          data[0]?.question_play,
          data[0]?.question_feeling_face,
        ];

        for (const e of arrAB) {
          if (e == 1) {
            countA++;
          } else {
            countB++;
          }
        }
        for (const e of arrCD) {
          if (e == 1) {
            countC++;
          } else {
            countD++;
          }
        }

        const pushData = [{ x: countA - countB, y: countC - countD }];
        setSocialStyle(pushData);
      });
  };

  useEffect(() => {
    fetchDetailUser(userId);
    makePositioningMapData(userId);
  }, []);

  return (
    <>
      <div className="composition">
        <h2>{detailUser[0]?.first_name + ' ' + detailUser[0]?.last_name}</h2>
      </div>
      <div className="img-field">
        <img
          src={social_type}
          className="test-img"
          alt="ソーシャルタイプ診断の分類"
        ></img>
      </div>
      <PositioningMap
        pushData={socialStyle}
        detailUser={detailUser}
      ></PositioningMap>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
        <br />
        <Link to={`/users`}>ユーザーリストに戻る</Link>
      </div>
    </>
  );
}
