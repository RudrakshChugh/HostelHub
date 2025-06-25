import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
