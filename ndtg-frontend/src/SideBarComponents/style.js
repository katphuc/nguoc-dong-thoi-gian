import styled from "styled-components";
export const SideBarSection = styled.div`
  height: 100vh; /* Chiều cao bằng 100% viewport */
  width: 250px; /* Chiều rộng sidebar */
  position: fixed; /* Cố định sidebar */
  top: 60px;
  right: 0;
  background-color: #eaeaea;
  color: black;
  padding: 20px;
`;
export const UserSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const UserName = styled.p`
  color: black;
  font-weight: bold;
  margin-right: 20px;
`;

export const UserAvt = styled.img`
  border-radius: 50%;
  width: 55px;
  margin-right: 10px;
`;
export const UserTiers = styled.div`
  display: flex;
  justify-content: center;
`;
export const Tiers = styled.button`
  border: 0px;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  background: linear-gradient(to right, #fffcda, #efaf11);
`;
