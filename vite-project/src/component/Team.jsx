import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PositioningMap from './PositioningMap';
import '../style/Home.css';
import social_type from '../assets/image/social_type.jpg';

export default function Team() {
  const { teamId } = useParams();
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectTeam, setSelectTeam] = useState([]);
  const [socialStyle, setSocialStyle] = useState([]);

  const fetchTeamMember = (id) => {
    fetch(`http://localhost:3000/api/team/${id}/users`)
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
      });
  };

  const fetchOneTeam = (id) => {
    fetch(`http://localhost:3000/api/team/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectTeam(data);
      });
  };

  const makeMultiPositioningMapData = (arrOfMembers) => {
    const urls = [];
    for (const obj of arrOfMembers) {
      urls.push('http://localhost:3000/api/social_style/users/' + obj.id);
    }

    const request = urls.map((url) => fetch(url));

    Promise.all(request)
      .then((res) => Promise.all(res.map((r) => r.json())))
      .then((data) => {
        const result = data.map((data) => {
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
          return { x: countA - countB, y: countC - countD };
        });

        setSocialStyle(result);
      });
  };

  useEffect(() => {
    fetchTeamMember(teamId);
    fetchOneTeam(teamId);
  }, []);

  useEffect(() => {
    makeMultiPositioningMapData(teamMembers);
  }, [teamMembers]);

  return (
    <>
      <div>
        <div className="composition">
          <h2>{selectTeam[0]?.name}</h2>

          <h3>メンバー</h3>
          {teamMembers.map((e) => (
            <Link to={`/users/${e.id}`}>
              <p key={e.id}>
                {e.first_name} {e.last_name}
              </p>
            </Link>
          ))}
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
          detailUser={teamMembers}
        ></PositioningMap>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
}
