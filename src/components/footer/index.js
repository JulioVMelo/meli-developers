import React from 'react';
import * as Ui from './styles';

export default function Footer() {
  return (
    <Ui.Footer>
      <div className="copyright">
        <span>Copyright © 2021 Ebazar.com.br LTDA.</span>
        <a href="#s">Termos e condições</a>
        <a href="#s">Como cuidamos da sua privacidade</a>
      </div>
      <div className="links">
        <a href="#s">API Docs</a>
        <a href="#s">App Store</a>
        <a href="#s">idioma</a>
      </div>
    </Ui.Footer>
  );
}
