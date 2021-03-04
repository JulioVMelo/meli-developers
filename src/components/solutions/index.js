import React, { useState } from 'react';
import {
  Tag,
  ShoppingCart,
  ThumbsUp,
  Heart,
  PieChart,
  Home,
  Truck,
  Key,
} from '@styled-icons/feather';
import * as Ui from './styles';

export default function Solutions() {
  const [itemSolutionActive, setItemSolutionActive] = useState('publicacao');

  function handle(name) {
    setItemSolutionActive(name);
  }

  return (
    <Ui.Container>
      <h2>Desenvolva soluções para milhares de vendedores</h2>
      <p>
        Conheça os recursos disponíveis na nossa API e otimize a experiência de
        venda
        <br /> no Mercado Livre. Vamos acompanhá-lo em seu desenvolvimento!
      </p>
      <Ui.Table>
        <div className="list">
          <ul>
            <li
              aria-hidden="true"
              className={itemSolutionActive === 'publicacao' ? 'active' : ''}
              onClick={() => handle('publicacao')}
            >
              <Tag size={30} color="#0084FE" />
              <span>Publicação massiva</span>
            </li>
            <li
              className={itemSolutionActive === 'vendas' ? 'active' : ''}
              onClick={() => handle('vendas')}
              aria-hidden="true"
            >
              <ShoppingCart size={30} color="#0084FE" />
              <span>Gerenciamento de vendas</span>
            </li>
            <li
              className={itemSolutionActive === 'negocios' ? 'active' : ''}
              onClick={() => handle('negocios')}
              aria-hidden="true"
            >
              <ThumbsUp size={30} color="#0084FE" />
              <span>Gerenciamento de negócios</span>
            </li>
            <li
              className={itemSolutionActive === 'produtos' ? 'active' : ''}
              onClick={() => handle('produtos')}
              aria-hidden="true"
            >
              <Heart size={30} color="#0084FE" />
              <span>Publicidade de produtos</span>
            </li>
            <li
              className={itemSolutionActive === 'clientes' ? 'active' : ''}
              onClick={() => handle('clientes')}
              aria-hidden="true"
            >
              <PieChart size={30} color="#0084FE" />
              <span>Comunicação com clientes</span>
            </li>
            <li
              className={itemSolutionActive === 'mercado' ? 'active' : ''}
              onClick={() => handle('mercado')}
              aria-hidden="true"
            >
              <Home size={30} color="#0084FE" />
              <span>Análise de mercado</span>
            </li>
            <li
              className={itemSolutionActive === 'automoveis' ? 'active' : ''}
              onClick={() => handle('automoveis')}
              aria-hidden="true"
            >
              <Truck size={30} color="#0084FE" />
              <span>Gerenciamento de automóveis</span>
            </li>
            <li
              className={itemSolutionActive === 'imoveis' ? 'active' : ''}
              onClick={() => handle('imoveis')}
              aria-hidden="true"
            >
              <Key size={30} color="#0084FE" />
              <span>Gerenciamento de imóveis</span>
            </li>
          </ul>
        </div>
        <div className="content">
          {itemSolutionActive === 'publicacao' && (
            <div className="item">
              <h3>Publicação massiva</h3>
              <p>
                Você pode desenvolver uma publicação massiva de
                <br /> produtos, atualização de preços e estoque de produtos,
                <br /> carga fichas técnicas e edição de variações.
              </p>
            </div>
          )}
          {itemSolutionActive === 'vendas' && (
            <div className="item">
              <h3>Gerenciamento de vendas</h3>
              <p>
                Desenvolva impressão de etiquetas de produtos vendidos,
                <br />
                acompanhamento de solicitações e qualificações
                <br /> automáticas.
              </p>
            </div>
          )}
          {itemSolutionActive === 'negocios' && (
            <div className="item">
              <h3>Gerenciamento de negócios</h3>
              <p>
                Desenvolva ferramentas para gerenciamento e<br /> monitoramento
                de contabilidade, como realização e envios
                <br /> automáticos de notas fiscais eletrônicas a clientes, e
                <br />
                gerenciamento de compras rápidas e efetivas.
              </p>
            </div>
          )}
          {itemSolutionActive === 'produtos' && (
            <div className="item">
              <h3>Publicidade de produtos</h3>
              <p>
                Desenvolva envios de campanhas publicitárias, customizadas
                <br /> e automáticas via emails e mensagens diretos a clientes.
              </p>
            </div>
          )}
          {itemSolutionActive === 'clientes' && (
            <div className="item">
              <h3>Comunicação com clientes</h3>
              <p>
                Você pode desenvolver uma melhor interação entre
                <br /> vendedores e clientes, como respostas a perguntas antes e
                <br />
                após as vendas, e resolução de reclamações.
              </p>
            </div>
          )}
          {itemSolutionActive === 'mercado' && (
            <div className="item">
              <h3>Análise de mercado</h3>
              <p>
                Trabalhe com tendências do mercado, análise de
                <br /> concorrentes e identificação de novas oportunidades
                <br />
                comerciais.
              </p>
            </div>
          )}
          {itemSolutionActive === 'automoveis' && (
            <div className="item">
              <h3>Gerenciamento de automóveis</h3>
              <p>
                Desenvolva o gerenciamento de automóveis, como alteração
                <br /> e edição de atributos dos carros anunciados.
              </p>
            </div>
          )}
          {itemSolutionActive === 'imoveis' && (
            <div className="item">
              <h3>Gerenciamento de imóveis</h3>
              <p>
                Desenvolva a otimização de anúncios e gerenciamento de
                <br /> casas, apartamentos, terrenos e outros empreendimentos.
                <br />
                Você permitirá gerenciar, alterar e editar atributos de
                <br /> anúncios de imóveis.
              </p>
            </div>
          )}
        </div>
      </Ui.Table>
    </Ui.Container>
  );
}
