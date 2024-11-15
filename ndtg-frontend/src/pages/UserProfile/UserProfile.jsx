import { useState } from "react";
import {
  AvatarContainer,
  AvatarImage,
  AddPhotoIcon,
  StyledAddPhotoIcon,
  UserInfo,
  UserName,
  Title,
  StyledEditIcon,
  EditTitle,
  PopupContent,
  PopupOverlay,
  HeaderPopup,
  TabContent,
  SliderContainer,
} from "./style";
import { Helmet } from "react-helmet";
import Avt from "../../assets/img/ba-trac.png";

function UserProfile() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <Helmet>
        <title>Thông Tin Cá Nhân | Ngược Dòng Thời Gian</title>
      </Helmet>
      <UserInfo>
        <AvatarContainer>
          <AvatarImage src={Avt} />
          <AddPhotoIcon>
            <StyledAddPhotoIcon />
          </AddPhotoIcon>
        </AvatarContainer>
        <UserName>Thiên Phúc</UserName>
        <EditTitle>
          <Title>Chiến Thần Lịch Sử</Title>
          <StyledEditIcon onClick={togglePopup}></StyledEditIcon>
        </EditTitle>
      </UserInfo>
      {showPopup && (
        <PopupOverlay onClick={togglePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <HeaderPopup>Danh Hiệu</HeaderPopup>
            <div style={{ flex: 1 }}>
              <>
                <SliderContainer>
                  <p>Nhà Thám Hiểm Tập Sự</p>
                  <p>Chiến Thần Lịch Sử</p>
                </SliderContainer>
              </>
            </div>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}
export default UserProfile;
