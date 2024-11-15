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
} from "./style";
import { Helmet } from "react-helmet";
import Avt from "../../assets/img/ba-trac.png";

function UserProfile() {
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
          <StyledEditIcon></StyledEditIcon>
        </EditTitle>
      </UserInfo>
    </>
  );
}
export default UserProfile;
