import React from 'react';
import UserStack from './userStack';
import AuthStack from './authStack';
import {useAuth} from '../../hooks/useAuth';

export default function RootNavigation() {
  const {user} = useAuth();
  return user ? <UserStack /> : <UserStack />;
  // return user ? <UserStack /> : <AuthStack />;
}
