import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./globals.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.REACT_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
