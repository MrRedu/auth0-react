import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </>
  );
};

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  // console.log(user, isLoading, isAuthenticated);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isAuthenticated && (
        <>
          <h2>{`Welcome ${user.name}`}</h2>
          <img src={user.picture} alt={user.name} />
          <p>{user.email}</p>
        </>
      )}
      {isAuthenticated && <p>{JSON.stringify(user, null, "🌐 ")}</p>}
    </>
  );
};

export const App = () => {
  return (
    <>
      <h1>{`</Auth0 React>`}</h1>
      <LoginButton />
      <hr />
      <Profile />
    </>
  );
};
