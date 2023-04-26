import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from './actions';
import { debounce } from 'lodash';
import './UserDetails.css';

const UserDetails = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);

  const handleInputChange = debounce((event) => {
    const username = event.target.value.trim();
    if (username) {
      dispatch(fetchUserDetails(username));
    }
  }, 500);

  return (
    <div className="container">
      <input type="text" className="input" onChange={handleInputChange} />
      {Object.keys(userDetails).map((username) => {
        const user = userDetails[username];
        console.log(user);
        return (
          <div className="card" key={username}>
            <img src={`https://www.gravatar.com/avatar/${user.gravatar_id}`} alt={`${user.name}'s avatar`} />
            <div className="card-info">
              <h2>{user.name}</h2>
              <p>{user.company}</p>
              <p>{user.email}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
