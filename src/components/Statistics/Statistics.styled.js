import styled from 'styled-components'

export const Section = styled.section`
display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 15px;
  margin-top: 15px;
  max-width: 100%;
  width: 400px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

export const StatList = styled.ul`
width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
`

export const Title = styled.h2`
font-size: 16px;
  font-weight: 700;
text-transform: uppercase;
  text-align: center;
`

export const Label = styled.span`
font-size: 14px;
  font-weight: 400;
`

export const Percentage = styled.span`
font-size: 14px;
  font-weight: 400;
`

