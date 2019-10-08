import styled from 'styled-components'

export const Container = styled.div`
  all: unset;
  border-radius: 21px;
  padding: 8px 24px;
  cursor: pointer;

  color: ${props => (props.active ? '#FFFFFF' : '#A3A3A3')};
  background-color: ${props => (props.active ? '#0ad4fa' : '#EDEDED')};

  ~ button {
    margin-left: 12px;
  }
`
