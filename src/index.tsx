import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

window.addEventListener(
  'DOMContentLoaded',
  () => {
    window.parent.postMessage('loaded', '*');
    window.addEventListener(
      'message',
      event => {
        if (event.data.configMUNI) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          window.configMUNI = event.data.configMUNI;
        }
      },
      false
    );
  },
  false
);

ReactDOM.render(<App/>, document.getElementById('root'));
