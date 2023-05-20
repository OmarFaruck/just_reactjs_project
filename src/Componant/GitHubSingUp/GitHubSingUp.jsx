import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithGithub } from 'react-firebase-hooks/auth'; 
import auth from '../../Firebase.init';

const GitHubSingUp = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
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
            <Button type="sub" className="btn btn-primary w-100 mt-2" onClick={() =>signInWithGithub()}>Continue with Github</Button>
        </div>
    );
};

export default GitHubSingUp;