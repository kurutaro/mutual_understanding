import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

export default function TeamMember(props) {
  const { team_id } = props;
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamMember = (id) => {
    fetch(`/api/team/${id}/users`)
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
      });
  };

  useEffect(() => {
    fetchTeamMember(team_id);
  }, []);

  return (
    <ul>
      {teamMembers.map((member) => (
        <li key={member.id}>
          <Link to={`/users/${member.id}`}>
            {member.first_name + ' ' + member.last_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
