import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './widget.scss';

export const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Alumnos</span>
        <span className="counter">123POI8</span>
        <span className="link">Ver mas</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlineIcon className='icon'/>
      </div>
    </div>
  );
};
