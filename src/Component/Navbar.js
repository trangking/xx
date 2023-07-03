import { Col, Row, Layout, Menu, Button } from "antd";
import "./Navbar.css";

const Navbar = () => {
  const { Header } = Layout;
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo" style={{ color: "white" }}>
          <img
            src="heng.jpg"
            alt="heng"
            height={50}
            width={47}
            className="bgimg"
          />
        </div>
      </Header>
    </Layout>
  );
};
export default Navbar;
