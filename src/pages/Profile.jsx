import { useState, useEffect } from 'react';

import { getAuth, updateProfile } from 'firebase/auth';

function Profile() {
  const auth = getAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? (
    <h1>{user.displayName}</h1>
  ) : (
    <h1>Profile page - Nobody is logged in</h1>
  );
}

export default Profile;
