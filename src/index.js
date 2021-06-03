import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comments from './Comments';
import data from './data';

const currentUser = {
    name: 'Taurlom',
    avatar: './img/avatars/taurlom.png'
};

ReactDOM.render(
  <React.StrictMode>
    <Comments data={data} user={currentUser}/>
  </React.StrictMode>,
  document.getElementById('root')
);
