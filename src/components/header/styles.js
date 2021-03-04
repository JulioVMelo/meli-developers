import styled from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px 0;

  .content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    max-width: 1220px;
  }

  .logo {
    display: flex;
    align-items: center;

    .image {
      width: 56px;
      margin-right: 10px;
    }

    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const Search = styled.div`
  height: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin: 0 50px;

  input {
    height: 100%;
    border: 0;
    padding: 7px 10px 7px 7px;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
  }

  button {
    background-color: transparent;
    border: 0;
    padding: 0 10px 0 0;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    &::before {
      content: '';
      height: 30px;
      width: 1px;
      background-color: #e6e6e6;
      display: block;
      margin-right: 10px;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
  > a {
    font-size: 13px;
    font-weight: 400;
    margin-right: 20px;
  }

  .account {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    margin-left: 30px;
    a {
      margin-right: 10px;
    }
  }
`;
