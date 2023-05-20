import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const GoogleSingUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>User Registered?</p>
          </div>
        );
      }

    return (
        <div>
            <Button type="sub" className="btn btn-primary w-100" onClick={() =>signInWithGoogle()}>Continue with Google</Button>
        </div>
    );
};

export default GoogleSingUp;