import React from 'react';
import { Search } from '@styled-icons/feather/Search';
import * as Ui from './styles';
import Logo from '../../assets/images/mercado-livre-logo.png';

function Header() {
  return (
    <Ui.Header>
      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Logotipo do mercado livre" />
        </div>
        <Ui.Search className="search">
          <input type="text" placeholder="Buscar" />
          <button type="button">
            <Search size={26} color="#ccc" title="Buscar" />
          </button>
        </Ui.Search>
        <div>menu</div>
      </div>
    </Ui.Header>
  );
}

export default Header;
