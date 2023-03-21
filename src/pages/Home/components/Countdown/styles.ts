import styled from 'styled-components'

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 0 80px;
  justify-content: space-between;

  @media (max-width: 720px) and (min-width: 580px) {
    font-size: 6rem;
  }

  @media (max-width: 580px) {
    font-size: 4rem;
  }

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
