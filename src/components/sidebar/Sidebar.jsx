import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">ITSH</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTA</p>
          <li>
            <GroupOutlinedIcon className="icon" />
            <span>Usuarios</span>
          </li>
          <p className="title">UTIL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Estadisticas</span>
          </li>
          <p className="title">SERVICIOS</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Configuracion</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountBoxIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Salir</span>
          </li>
        </ul>
      </div>
      <div className="buttom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
