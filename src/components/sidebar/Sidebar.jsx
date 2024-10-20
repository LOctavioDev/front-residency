import './sidebar.sass';
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">ITSH</div>
      </div>
      <div className="center">
        <ul>
            <li><span>Dashboard</span></li>
            <li><span>Dashboard</span></li>
            <li><span>Dashboard</span></li>
            <li><span>Dashboard</span></li>
        </ul>
      </div>
      <div className="buttom">color options</div>
    </div>
  );
};
