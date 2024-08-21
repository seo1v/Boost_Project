import React, { useState } from 'react';
import "../styles/passwordGroupPage.css";
import logo from '../assets/logo.svg';

function PasswordGroupPage() {
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    // 비밀번호를 검증하는 로직 (여기서는 간단히 "1234"와 비교)
    if (password !== '1234') {
      setIsModalOpen(true);
    } else {
      // 비밀번호가 일치할 경우의 로직 (예: 다음 페이지로 이동)
      alert('비밀번호가 일치합니다.');
    }
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
            <h3>비공개 그룹 접근 실패</h3>
            <p>비밀번호가 일치하지 않습니다.</p>
            <button className="submit" onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordGroupPage;
