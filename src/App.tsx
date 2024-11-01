import React, { useState, useEffect } from 'react';
import Header from './HeaderComp/Header';
import Login from './Login/Login';
import Dashboard from './Login/Dashboard';
import Modal from './Login/Modal';

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState('#f5f5f5'); // 기본 배경색
  const [mdColor, setmdColor] = useState('#808080');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 로그인 상태 관리
  const [mode, setMode] = useState<boolean>(false); // 로그인 상태 관리
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 localStorage에서 로그인 상태 확인
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const changeBackgroundColor = () => {
    console.log('click');
    setBgColor((prevColor) =>
      prevColor === '#f5f5f5' ? '#696969' : '#f5f5f5'
    ); // 클릭할 때마다 배경색 변경
    setmdColor((prevColor) =>
      prevColor === '#808080' ? 'rosybrown' : '#808080'
    );
    setMode((preMode) => !preMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
    localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태를 localStorage에 저장
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 시 상태 업데이트
    localStorage.removeItem('isLoggedIn'); // localStorage에서 로그인 상태 제거
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen flex items-center justify-center"
    >
      {modal && <Modal closeModal={closeModal} />} {/* 모달을 조건부 렌더링 */}
      <div
        className="bg-white rounded-lg"
        style={{ width: '500px', height: '100%', backgroundColor: bgColor }}
      >
        <Header
          className="flex justify-between rounded-lg"
          modeName="rounded-lg m-1"
          mdColor={mdColor}
          Click={changeBackgroundColor}
          elseName="flex"
          wow="rounded-lg bg-yellow-500"
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          mode={mode}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '450px',
            backgroundColor: bgColor,
          }}
        >
          {isLoggedIn ? (
            <Dashboard mode={mode} /> // 로그인 상태에 따라 Dashboard 표시
          ) : (
            <Login onLogin={handleLogin} mode={mode} openModal={openModal} /> // 로그인 상태가 아닐 때 Login 컴포넌트 표시
          )}
        </div>

        <footer
          style={{
            marginTop: '100px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#777',
          }}
        >
          &copy; {new Date().getFullYear()} SehanKim. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
