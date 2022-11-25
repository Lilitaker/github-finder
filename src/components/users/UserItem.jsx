import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Using destructuring, I just get the login and the avatar url
//login and avatar_url are the names in the github object
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='car-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
