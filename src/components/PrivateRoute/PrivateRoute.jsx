import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./PrivateRoute.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (<div className="load-div">Загрузка...</div>) // Пока Firebase загружается
  }

  if (!user) {
    return <Navigate to="/" replace/>
  }

  return children;
}

export default PrivateRoute;