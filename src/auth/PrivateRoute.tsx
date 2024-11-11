import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { index } = useParams<{ index: string }>();
  const floorIndex = parseInt(index || "0");

  const floors = useSelector((state: any) => state.floors); 
  const thisFloor = floors[floorIndex]; 

  if (!thisFloor?.isAuth) {
    return <Navigate to="/forbidden" />; 
  }

  return children;
};

export default ProtectedRoute;
