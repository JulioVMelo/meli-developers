import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1144px;
  width: 100%;
  margin-top: 200px;

  h2 {
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 600;
  }

  p {
    margin-bottom: 58px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const Table = styled.div`
  display: flex;
  border: 1px solid #ededed;
  margin-bottom: 100px;

  .list {
    max-width: 270px;

    ul li {
      padding: 12px 12px 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid #ededed;
      border-right: 1px solid #ededed;
      cursor: pointer;

      &.active {
        color: #0084fe;
      }

      span {
        margin-left: 12px;

        &:hover {
          color: #0084fe;
        }
      }
    }
  }

  .content {
    padding: 42px 72px;

    h3 {
      font-size: 24px;
      margin-bottom: 32px;
      font-weight: 600;
    }

    p {
      margin-bottom: 32px;
      font-size: 18px;
      line-height: 1.44;
    }
  }
`;
