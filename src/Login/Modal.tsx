import React, { FC, useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  closeModal: () => void; // closeModal 함수 타입 정의
}

const Modal: FC<ModalProps> = ({ closeModal }) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    // 간단한 유효성 검사
    if (!email || !password || !name) {
      setError('이메일, 이름, 비밀번호를 모두 입력하세요.');
      return;
    }

    const userData = { password, name };
    localStorage.setItem(email, JSON.stringify(userData));

    console.log('사용자 데이터 저장:', { email, ...userData });

    closeModal();
  };

  return (
    <ModalWrap>
      <ModalContent>
        <h2 className="text-center font-bold text-2xl">회원가입</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          {' '}
          {/* onSubmit 이벤트 핸들러 */}
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%', // 너비를 100%로 설정
              padding: '8px',
              marginBottom: '10px',
              border: '1px solid black',
              borderRadius: '8px',
            }}
          />
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%', // 너비를 100%로 설정
              padding: '8px',
              marginBottom: '10px',
              border: '1px solid black',
              borderRadius: '8px',
            }}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%', // 너비를 100%로 설정
              padding: '8px',
              border: '1px solid black',
              borderRadius: '8px',
            }}
          />
          <button
            type="submit" // type을 submit으로 설정
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginTop: '10px',
            }}
          >
            가입하기
          </button>
        </form>
        <button className="mt-2" onClick={closeModal}>
          닫기
        </button>
      </ModalContent>
    </ModalWrap>
  );
};

export default Modal;

// Styled components
const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
  display: flex; // Flexbox 사용
  justify-content: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬
  position: fixed; // 모달을 고정 위치로 설정
  top: 0; // 상단에 위치
  left: 0; // 좌측에 위치
  z-index: 1000; // 다른 요소들보다 위에 표시
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%; // 화면의 90% 너비
  max-width: 500px; // 최대 너비 제한
`;
