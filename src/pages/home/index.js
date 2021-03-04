import React from 'react';
import Header from '../../components/header';
import Solutions from '../../components/solutions';
import Footer from '../../components/footer';
import Social from '../../components/social';
import * as Ui from './styles';
import Certificado from '../../assets/images/certificado.jpeg';
import Stack from '../../assets/images/stack.jpeg';

function Home() {
  return (
    <>
      <Header />
      <Ui.Hero>
        <div className="call-to-action content-centralized">
          <h1>
            Utilize a nossa plataforma
            <br /> aberta para criar aplicações
          </h1>
          <p>
            Milhares de vendedores do Mercado Livre poderão
            <br /> promover o seu negócio
          </p>
          <button className="btn" type="button">
            Comecar agora
          </button>
        </div>
        <div className="background" />
      </Ui.Hero>
      <Solutions />
      <Ui.Partner>
        <div className="content-centralized">
          <h2>Obtenha sua certificação e benefícios especiais</h2>
          <div className="program">
            <div className="wrapperImage">
              <img src={Certificado} alt="certificado" />
            </div>
            <p>
              Conheça os requisitos e benefícios de
              <br />
              <strong>
                obter sua certificação e de ser Partner do
                <br /> Mercado Livre.
              </strong>
            </p>
            <button type="button" className="btn">
              Seguir para Developer Partner Program
            </button>
          </div>
        </div>
      </Ui.Partner>
      <Ui.Store className="content-centralized">
        <div className="box">
          <p>
            Explore os aplicativos que promovem a<br /> experiência de compra e
            venda.
          </p>
          <a href="#d">Seguir para a App Store</a>
        </div>
        <div className="wrapperImage">
          <img alt="a" src={Stack} />
        </div>
      </Ui.Store>
      <Social />
      <div className="content-centralized">
        <Footer />
      </div>
    </>
  );
}

export default Home;
