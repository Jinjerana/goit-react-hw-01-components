import { Wrapper, Card, Avatar, Name, Tag, Location, StatList, StatItem, Label, Quantity, Info } from './Profile.styled'

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
  stats: PropTypes.arrayOf(
    PropTypes.exact({
    followers: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
}).isRequired).isRequired
}

{/* <Profile
  username = {user.username}
  tag = {user.tag}
  location = {user.location}
  avatar = {user.avatar}
  stats = {user.stats} /> */}

// import user from './user.json'


