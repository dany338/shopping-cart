import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: white;

  .my-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      margin-right: 18px;
      cursor: pointer;
    }
  }

  .my-color-icon {
    color: #c3c3c3;
  }
`
