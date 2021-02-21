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
    justify-content: space-between;
    max-width: 1220px;
  }

  .logo {
    width: 170px;
    height: 49.2px;
  }
`;

export const Search = styled.div`
  height: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;

  input {
    height: 100%;
    border: 0;
    padding: 6px 10px 6px 6px;
    font-size: 16px;
    font-weight: 200;
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
      height: 35px;
      width: 1px;
      background-color: #e6e6e6;
      display: block;
      margin-right: 10px;
    }
  }
`;
