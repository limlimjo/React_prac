import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accomodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    // React.StrictMode: 개발 모드일 때 잠재적인 버그를 찾을 수 있게 해주는 모드
    // But, 리액트 18 버전에서 Strict Mode의 동작이 변경돼 책과 다르게 리액트 라이프사이클이 다르게 호출됨
    // 개발 모드에서 StrictMode를 사용하게 되면, 컴포넌트를 unmount 시켰다가 다시 한번 remount 시키게 됨
    // so, 일단 주석 처리
    // <React.StrictMode>
      <AttendanceBook />
    // </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
