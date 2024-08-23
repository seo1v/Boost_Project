import React, { useState } from 'react';
import "../styles/passwordGroupPage.css";
import logo from '../assets/logo.svg';

function PasswordGroupPage() {
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async () => {
    const groupId = localStorage.getItem("groupId"); // 저장된 groupId 가져오기
    if (!groupId) {
      setModalMessage('그룹 ID를 찾을 수 없습니다.');
      setIsModalOpen(true);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/groups/${groupId}/verify-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password }),
      });

      if (response.status === 200) {
        setModalMessage('비밀번호가 확인되었습니다');
        // 비밀번호가 일치할 경우의 로직 (예: 다음 페이지로 이동)
        // 예를 들어, window.location.href = "/next-page"; 와 같이 페이지 이동을 구현할 수 있습니다.
      } else if (response.status === 401) {
        setModalMessage('비밀번호가 일치하지 않습니다.');
      } else {
        setModalMessage('오류가 발생했습니다.');
      }
    } catch (error) {
      setModalMessage('서버와의 연결에 실패했습니다.');
      console.error('비밀번호 검증 중 오류 발생:', error);
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page-container">
      <div className="logo-content">
        <img src={logo} alt="logo" />
      </div>

      <div className="form-container">
        <h3>비공개 그룹</h3>
        <p className="description">비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.</p>

        <div className="form-group">
          <label htmlFor="password">비밀번호를 입력해 주세요</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="submit" onClick={handleSubmit}>
          제출하기
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modalMessage.includes('확인') ? '성공' : '비공개 그룹 접근 실패'}</h3>
            <p>{modalMessage}</p>
            <button className="submit" onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordGroupPage;

