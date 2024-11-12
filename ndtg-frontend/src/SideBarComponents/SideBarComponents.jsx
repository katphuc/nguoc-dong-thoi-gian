import {
  SideBarSection,
  UserName,
  UserSection,
  UserAvt,
  UserTiers,
  Tiers,
} from "./style";
import avt from "../assets/img/avt.png";

function SideBar() {
  return (
    <SideBarSection>
      <UserSection>
        <UserName>Thiên Phúc</UserName>
        <UserAvt src={avt} alt="avt"></UserAvt>
      </UserSection>
      <UserTiers>
        <Tiers type="primary" size="large">
          VIP
        </Tiers>
      </UserTiers>
    </SideBarSection>
  );
}
export default SideBar;
