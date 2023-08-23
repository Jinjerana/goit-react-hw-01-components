import { FriendItem, Status, Image, Name } from './FriendListItem.styled'

import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, is_online }) => {
    return (
        <FriendItem>
            <Status is_online={is_online}></Status>
            <Image src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    is_online: PropTypes.bool.isRequired,
}





