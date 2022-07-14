import { useSelector } from 'react-redux';

export function useAuth() {
  const { user, token } = useSelector(state => state.user);

  return {
    isAuth: !!token,
    user,
    token
  };
}