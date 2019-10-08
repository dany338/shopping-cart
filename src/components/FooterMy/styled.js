import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: white;

  .category-name {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-right: 18px;
      cursor: pointer;
      color: white;
    }

    h4 {
      margin-right: 18px;
      cursor: pointer;
      color: #c3c3c3;
    }
  }
`
