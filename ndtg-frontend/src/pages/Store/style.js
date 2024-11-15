import styled from "styled-components";

export const StoreSection = styled.div``;
export const Header = styled.h2`
  user-select: none;
  font-size: 40px;
  color: black;
  position: relative;
  text-align: center;
  margin: 0;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 5%;
    height: 2px;
    background-color: grey;
  }
`;
export const Announce = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: red;
`;
