import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const FaceBookSingUp = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);

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
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }

    return (
        <div>
            <Button type="sub" className="btn btn-primary w-100 mt-2" onClick={() =>signInWithFacebook()}>Continue with FaceBook</Button>
        </div>
    );
};

export default FaceBookSingUp;