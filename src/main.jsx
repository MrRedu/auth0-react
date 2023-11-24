import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./globals.css";

const root = createRoot(document.getElementById("root"));
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
