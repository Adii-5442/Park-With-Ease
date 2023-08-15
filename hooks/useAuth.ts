import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
export function useAuth() {
  const [user, setuser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(User => {
      if (user) {
        setuser(User);
      } else {
        setuser(undefined);
      }
    });
    return subscriber;
  }, [user]);

  return {
    user,
  };
}
