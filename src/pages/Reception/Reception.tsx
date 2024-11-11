import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAccess } from "../../store/floorreducer";
import  {setRole } from "../../store/rolereducer";
import useBuildingData from "../../utils/BuildingDataProvider";
import optionalroles from "../../data/roles.json";
import "./Reception.css";

const Reception: React.FC = () => {
  const floorAccess = useSelector(
    (state: { floors: { id: number; purpose: string; isAuth: boolean }[] }) => state.floors);
  const currentRole = useSelector((state: { role: string }) => state.role);
  const { getFloorByIndex } = useBuildingData();
  const dispatch = useDispatch();

  const handleChangeAccess = (index: number) => {
    console.log(123,index);
    
    dispatch(changeAccess(index));
    
  };

  const handleSetRole = (role: string) => {
    dispatch(setRole(role));
    
  };

  return (
    <div className="reception-page">
      <header className="reception-header">
        <p>
          Welcome to the Nimrodi Tower access control system. Toggle each floor's access by clicking on the boxes below.
        </p>
      </header>

      <section className="access-levels">
        <h2>Select Access</h2>
        {floorAccess.map((floor, index) => (
          <div
            key={index}  
            onClick={() => handleChangeAccess(index)}
            className={`box ${floor.isAuth ? "blue" : "red"}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.keyCode === 13 && handleChangeAccess(index)}
          >
            <h5>{floor.isAuth ? "Access Granted" : "No Access"}</h5>
            <span>{floor.purpose || `Floor ${index + 1}`}</span>
          </div>
        ))}
      </section>

      <section className="role-selection">
        <h2>Select Role</h2>
        {optionalroles.map((role: string, index: number) => (
          <div
            key={index}
            onClick={() => handleSetRole(role)}
            className={`box ${role === currentRole ? "blue" : "red"}`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleSetRole(role)}
          >
            <h5>{role}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reception;
