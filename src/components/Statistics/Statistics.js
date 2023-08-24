import { Section, StatList, StatItem, Title, Label, Percentage } from './Statistics.styled'

import PropTypes from 'prop-types';

export const Statistics = ({stats, title}) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      
  <StatList>
    {
    stats.map((item, idx) => (
      <StatItem
      key={item.id}
      id={item.id}
      index={idx}>
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
      </StatItem>
      ))}
  </StatList>
</Section>

)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired
}
