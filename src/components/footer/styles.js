import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 14px 0;

  .copyright {
    span {
      margin-right: 25px;
    }

    a {
      padding: 0 10px;
      color: #0084fe;
      font-size: 13px;
    }
  }

  .links {
    a:not(:last-of-type) {
      margin-right: 45px;
    }
  }
`;
