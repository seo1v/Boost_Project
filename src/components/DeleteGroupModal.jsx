import React, { useState } from 'react';
import Modal from './Modal';
import "../styles/DeleteGroupModal.css";

function DeleteGroupModal({ isOpen, onClose }) {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleDelete = () => {
    // 삭제 작업 처리 로직을 여기에 추가
    console.log({
      password,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="delete-modal">
        <div className="delete-title">그룹 삭제</div>
        <div className="delete-input">삭제 권한 인증</div>
        <div className="delete-input-container">
          <input className="delete-inputtext" 
            type="password" 
            placeholder="그룹 비밀번호를 입력해 주세요" 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>
        <div className="delete-button-container">
          <button className="delete-button" onClick={handleDelete}>삭제하기</button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteGroupModal;