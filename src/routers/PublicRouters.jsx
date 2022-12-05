import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const authState = localStorage.getItem('accessToken') || null;
  return authState !== null ? <Navigate to={'/'} /> : children;
};

export default PublicRoutes;
