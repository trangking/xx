import { Row, Col, Select } from "antd";
import "./Formpicelist.css";
import Selecterpricelist from "./Selectpricelist";


const Headerpricelist = () => {
  return (
    <div>
      <div>
        <p className="Headerpricelist">คำนวณสินเชื่อ</p>
        <p className="Headerpricelistsecond">เฮงลิสซิ่ง</p>
      </div>
    </div>
  );
};
const Navbarpricelist = () => {
  return (
    <div>
      <div className="colorPirceList">
        <p>รถที่ต้องการคำนวณ</p>
      </div>
    </div>
  );
};

function Formpicelist() {
  return (
    <div>
      <Headerpricelist />
      <Navbarpricelist />
      <Selecterpricelist/>
    </div>
  );
}

export default Formpicelist;
