import './App.css';
// import Menu from './pages/manu';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =  useProSidebar();
  const Home = () => {
    return (
      <>
        <h1 className="header">WELCOME TO QUICKPAY</h1>
        <h3>Bank of the free</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </>
    );
  };
  
  const Dashboard = () => {
    return (
      <>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Welcome User</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </>
    );
  };
  
  const Transactions = () => {
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </>
    );
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu >
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            // icon={<MenuRoundedIcon />}
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link texto-menu" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
