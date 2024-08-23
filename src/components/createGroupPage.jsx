import React, { useState, useRef } from 'react';
import "../styles/createGroupPage.css";
import logo from '../assets/logo.svg';

function CreateGroupPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  // 파일 input 참조를 위한 useRef
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 폼 데이터 수집
    const name = e.target["group-name"].value;
    const password = e.target["password"].value;
    const introduction = e.target["group-description"].value;
    const isPublic = e.target.visibility.value === "public";

    try {
      const response = await fetch('http://localhost:3000/api/groups', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          password: password,
          imageUrl: "", // imageUrl은 파일을 올리면 서버에서 처리됨
          isPublic: isPublic,
          introduction: introduction,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        const data = await response.json();
        setIsSuccess(true);
        localStorage.setItem("groupId", groupId);  // groupId 저장
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
      console.error('그룹 생성 중 오류 발생:', error);
    }

    setModalVisible(true); // 모달 표시
  };

  const closeModal = () => {
    setModalVisible(false); // 모달 닫기
  };

  // 파일 선택 버튼 클릭 핸들러
  const handleFileSelectClick = () => {
    fileInputRef.current.click();
  };

  return ( <div className="create">
    <div className="page-container">
      <div className="logo-content">
        <img src={logo} alt="logo" />
      </div>

      <div className="form-container">
        <h3>그룹 만들기</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="group-name">그룹명</label>
            <input type="text" id="group-name" placeholder="그룹명을 입력하세요." required />
          </div>

          <div className="form-group">
            <label htmlFor="group-image">대표 이미지</label>
            <div className="image-upload">
              <span className="file-label">파일을 선택하세요</span>
              <input 
                type="file" 
                id="group-image" 
                ref={fileInputRef}
                style={{ display: 'none' }} 
              />
              <button type="button" onClick={handleFileSelectClick}>파일 선택</button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="group-description">그룹 소개</label>
            <textarea id="group-description" placeholder="그룹 소개를 입력하세요." required></textarea>
          </div>

          <div className="form-group">
            <label>그룹 선택 여부</label>
            <div className="visibility-options">
              <label>
                <input type="radio" name="visibility" value="public" defaultChecked />
                공개
              </label>
              <label>
                <input type="radio" name="visibility" value="private" />
                비공개
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호를 입력하세요." required />
          </div>

          <button type="submit" className="create-group">만들기</button>
        </form>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isSuccess ? '그룹 만들기 성공' : '그룹 만들기 실패'}</h3>
            <p>{isSuccess ? '그룹이 성공적으로 등록되었습니다.' : '그룹 등록에 실패했습니다.'}</p>
            <button onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default CreateGroupPage;
