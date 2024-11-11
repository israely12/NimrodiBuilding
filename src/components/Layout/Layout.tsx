import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useBuildingData from "../../utils/BuildingDataProvider";
import  {RootState } from "../../store/store";
import { changeAccess } from "../../store/floorreducer";
import "./Layout.css";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  const dispatch = useDispatch();
  const floorAccess = useSelector((state: RootState) => state.floors); 
   
  const {getFloorByIndex}  = useBuildingData();

  const handleAccessChange = (floorName: string) => {
    dispatch(changeAccess({ floorName }));
  };

  return (
    <div className="layout-page">
      <nav className="navbar">
        <h1>מגדל נמרודי</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {floorAccess.map((floor, index) => (
         (
              <Link 
                key={index} 
                to={`/floor/${index}`} 
                onClick={() => handleAccessChange(floor.purpose)} 
              >
                {getFloorByIndex(index)?.purpose || `Floor ${index + 1}`}
              </Link>
            ) 
          ))}
        </div>
      </nav>

      {children}

      <footer className="layout-footer">
        <h2>About מגדל נמרודי</h2>
        <p>
          Nimrodi Tower is a prominent skyscraper in the BBC complex of Bnei
          Brak, comprising 55 floors reaching a height of 211 meters. It
          includes commercial and office spaces with a unique architectural
          style. The project, part of a larger construction initiative,
          positions the Nimrodi Tower as a key architectural landmark in the
          cityscape.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
