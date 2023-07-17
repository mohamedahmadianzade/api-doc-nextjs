"use client";
import Header from "../shared/header/header";
import "./page.css";
import Grid from "@mui/material/Grid";

export default function Authentication() {
  return (
    <main className="main">
      <Header>Account</Header>
      <Grid container className="authenticationContent">
        <Grid item xs={12}>
          <p>
            The Oxolo API provides two endpoints for account management:
            /v1/api/account/plan and /v1/api/account/credits. These endpoints
            allow you to retrieve information about your account, including your
            current plan and credit balance.
          </p>
        </Grid>
      </Grid>
    </main>
  );
}
