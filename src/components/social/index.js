import React from 'react';
import * as Ui from './styles';

export default function Social() {
  return (
    <Ui.Container>
      <div className="content-centralized">
        <p>
          <a href="#f">Faça login</a> ou <a href="#f">registre-se</a> para
          receber as últimas notícias sobre nossa API
        </p>
        <div className="social">
          <a href="#f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h47.268v47.262H0z" />
                <ellipse
                  cx="23.634"
                  cy="23.631"
                  stroke="#26568E"
                  strokeWidth="1.6"
                  rx="22.834"
                  ry="22.831"
                />
                <path
                  fill="#3B5998"
                  d="M25.046 37.594h-5.24V25.24h-2.618v-4.256h2.618v-2.556c0-3.472 1.478-5.538 5.679-5.538h3.496v4.258h-2.185c-1.635 0-1.743.595-1.743 1.705l-.008 2.13h3.96l-.463 4.257h-3.497v12.354h.001z"
                />
              </g>
            </svg>
          </a>
          <a href="#f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <g fill="none" fillRule="evenodd" transform="translate(.525)">
                <ellipse
                  cx="23.634"
                  cy="23.631"
                  stroke="#F00"
                  strokeWidth="1.6"
                  rx="22.834"
                  ry="22.831"
                />
                <path
                  fill="#F00"
                  d="M34.376 26.912v-7.657s0-3.69-3.702-3.69H16.592s-3.7 0-3.7 3.69v7.657s0 3.69 3.7 3.69h14.082s3.702 0 3.702-3.69m-6.571-3.818l-7.034 4.117v-8.236l7.034 4.119"
                />
              </g>
            </svg>
          </a>
          <a href="#f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <defs>
                <path id="a" d="M0 .342h23.74V19.98H0z" />
              </defs>
              <g fill="none" fillRule="evenodd" transform="translate(.023)">
                <ellipse
                  cx="23.634"
                  cy="23.631"
                  stroke="#FF3D42"
                  strokeWidth="1.6"
                  rx="22.834"
                  ry="22.831"
                />
                <path
                  fill="#FF3D42"
                  d="M26.628 34.476c-.325-.14-.648-.239-.62-.704.005-.084-.21-.26-.326-.262a182.53 182.53 0 0 0-4.102-.004c-.111 0-.323.125-.318.173.074.683-.473.722-.895.885-.22.085-.524.138-.408.445.051.135.335.251.517.256 1.036.024 2.074.011 3.111.011.975 0 1.95.012 2.923-.007.286-.005.72.173.801-.258.091-.48-.41-.417-.683-.535"
                />
                <g transform="translate(11.808 12.852)">
                  <path
                    fill="#FF3D42"
                    d="M19.381 10.332c-.09.724-.36.93-1.104.931-2.925.004-5.85.002-8.774.002h-.55c.227 1.156 1.489 2.123 2.744 2.226.974.08 1.82-.233 2.642-.693.457-.256.935-.464 1.478-.307.736.212 1.169.7 1.294 1.456.125.759-.15 1.364-.76 1.798-1.372.977-2.919 1.461-4.6 1.404-2.904-.098-5.183-1.351-6.588-3.921C3.281 9.784 4.66 5.631 8.24 3.722c3.895-2.077 8.879-.415 10.6 3.548.423.971.674 1.993.541 3.062m2.73-9.99H1.632C.559.342 0 .896 0 1.96v16.392c0 1.11.529 1.63 1.655 1.63h20.482c1.058 0 1.602-.539 1.602-1.585.001-5.48.001-10.96 0-16.44 0-1.07-.548-1.614-1.628-1.614"
                    mask="url(#b)"
                  />
                </g>
                <path
                  fill="#FF3D42"
                  d="M23.354 19.135c-1.282.192-2.518 1.382-2.433 2.369h5.918c-.317-1.587-1.855-2.612-3.485-2.369"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </Ui.Container>
  );
}
