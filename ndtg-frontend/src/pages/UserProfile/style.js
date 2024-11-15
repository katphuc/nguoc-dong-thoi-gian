import styled from "styled-components";
import AddIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import EditIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const Separator = styled.hr`
  width: 85%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 5px 0;
`;
export const AddPhotoIcon = styled.div`
  position: absolute;
  bottom: -15px;
  right: 50px;
  width: 40px;
  height: 40px;
  background-color: rgba(200, 200, 200, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: rotate(360deg);
  }

  svg {
    font-size: 20px;
    color: #555;
  }
`;

export const StyledAddPhotoIcon = styled(AddIcon)``;
export const StyledEditIcon = styled(EditIcon)`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: lightgrey;
  position: absolute;
  left: 230px;
  cursor: pointer;
`;
export const AvatarContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  padding-top: 20px;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  height: 80vh;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;
export const UserName = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  padding-top: 20px;
`;
export const Title = styled.p`
  margin: 0;
  color: red;
  border: 1px solid grey;
  background-color: #f4f6ff;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  position: absolute;
  height: 24px;
  left: 75px;
`;
export const EditTitle = styled.div`
  display: flex;
  gap: 10px;
`;
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  width: 500px;
`;
export const HeaderPopup = styled.h2`
  text-align: center;
  user-select: none;
`;
