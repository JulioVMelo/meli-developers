import React from 'react';
import { Search, User } from '@styled-icons/feather';
import * as Ui from './styles';
import Logo from '../../assets/images/logo-reduzida.png';

function Header() {
  return (
    <Ui.Header>
      <div className="content">
        <div className="logo">
          <div className="image">
            <img src={Logo} alt="Logotipo do mercado livre" />
          </div>
          <span>Developers</span>
        </div>
        <Ui.Search className="search">
          <input type="text" placeholder="Buscar" />
          <button type="button">
            <Search size={20} color="#ccc" title="Buscar" />
          </button>
        </Ui.Search>
        <Ui.Menu>
          <a href="#a">Quem somos</a>
          <a href="#s">Primeiros passos</a>
          <a href="#s">API Docs</a>
          <a href="#s">Ferramentas</a>
          <a href="#s">Suporte</a>
          <div className="account">
            <a href="#s">Entre</a>
            <User size={20} />
          </div>
        </Ui.Menu>
      </div>
    </Ui.Header>
  );
}

export default Header;
