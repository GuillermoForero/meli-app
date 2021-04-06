import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'antd/dist/antd.css';
window.addEventListener(
  'DOMContentLoaded',
  () => {
    window.parent.postMessage('loaded', '*');
    window.addEventListener(
      'message',
      event => {
        if (event.data.configMELI) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          window.configMELI = event.data.configMELI;
        }
      },
      false
    );
  },
  false
);

ReactDOM.render(<App />, document.getElementById('root'));
