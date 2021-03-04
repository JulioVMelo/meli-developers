import styled from 'styled-components';

export const Container = styled.section`
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  padding: 54px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;

      a {
        color: #0084fe;
      }
    }
  }

  .social {
    a {
      &:not(:last-of-type) {
        margin-right: 50px;
      }
      svg {
        transition: all ease 0.1s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
