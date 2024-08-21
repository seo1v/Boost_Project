import React, { useState } from 'react';
import Modal from './Modal';

function EditCommentModal({ isOpen, onClose }) {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="comment-modal">
        <div className="comment-title">댓글 수정</div>
        <div className="comment-nickname">닉네임</div>
        <input className="comment-nicknameinput"
          type="text"
          placeholder="닉네임을 입력해 주세요"
        />
        <div className="comment-content">댓글</div>
        <input className="comment-contentinput"
          type="text"
          placeholder="댓글을 입력해 주세요"
        />
        <div className="comment-pwd">수정 권한</div>
        <input className="comment-pwdinput" 
          type="password" 
          placeholder="댓글 비밀번호를 입력해 주세요" 
        />
        <button className="comment-button">등록하기</button>
      </div>
    </Modal>
  );
}

export default EditCommentModal;