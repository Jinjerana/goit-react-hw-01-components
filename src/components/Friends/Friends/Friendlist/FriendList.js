import { FriendListItem } from '../FriendListItem/FriendListItem';

import { FriendsList } from './FriendList.styled'

import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
  return (
    <FriendsList>
      {
        friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
          )
          )
      }
   </FriendsList>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    }).isRequired).isRequired
}






