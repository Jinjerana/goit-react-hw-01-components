import { Wrapper, Card, Avatar, Name, Tag, Location, StatList, StatItem, Label, Quantity } from './Profile.styled'

import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
    <Wrapper>
  <Card>
    <Avatar src={avatar} alt="User avatar"/>
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Card>

  <StatList>
    <StatItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatItem>
  </StatList>
</Wrapper>)

};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats:
    PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}).isRequired
}





