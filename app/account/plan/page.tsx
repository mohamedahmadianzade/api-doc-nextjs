"use client";
import Header from "../../shared/header/header";
import "./page.css";
import Grid from "@mui/material/Grid";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SmallHeader from "../../shared/smallHeader/smallHeader";
import { CustomTabPanel, copyToClip } from "@/app/shared/global/global";

export default function Plan() {
  const [val, setVal] = useState(0);
  const handleTab = (e: any, newVal: any) => {
    setVal(newVal);
  };
  return (
    <main className="main">
      <Header>Plan</Header>
      <Grid container className="authenticationContent">
        <Grid item xs={7}>
          <p>
            Use this endpoint to retrieve information about your current Oxolo
            plan. HTTP Request
          </p>
          <SmallHeader>HTTP Request</SmallHeader>
          <code>GET https://api.oxolo.com/v1/api/account/plan</code>
        </Grid>
        <Grid item xs={5}>
          <Tabs
            value={val}
            onChange={handleTab}
            textColor="primary"
            indicatorColor="secondary"
          >
            <Tab label="cURL" />
            <Tab label="Python" />
            <Tab label="Node.js" />
          </Tabs>
          <CustomTabPanel value={val} index={0}>
            <SyntaxHighlighter
              customStyle={{ cursor: "grabbing" }}
              language="curl"
              style={docco}
              wrapLongLines={true}
              onClick={() => copyToClip(curl)}
            >
              {curl}
            </SyntaxHighlighter>
          </CustomTabPanel>
          <CustomTabPanel value={val} index={1}>
            <SyntaxHighlighter
              customStyle={{ cursor: "grabbing" }}
              language="python"
              style={docco}
              showLineNumbers={true}
              wrapLongLines={true}
              className="scroll scroll--itunes"
              onClick={() => copyToClip(python)}
            >
              {python}
            </SyntaxHighlighter>
          </CustomTabPanel>
          <CustomTabPanel value={val} index={2}>
            <SyntaxHighlighter
              customStyle={{ cursor: "grabbing" }}
              language="javascript"
              style={docco}
              showLineNumbers={true}
              wrapLongLines={true}
              className="scroll scroll--itunes"
              onClick={() => copyToClip(node)}
            >
              {node}
            </SyntaxHighlighter>
          </CustomTabPanel>
        </Grid>
      </Grid>
    </main>
  );
}


const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/account/plan' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url = "https://api.oxolo.com/v1/api/account/plan"
headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.get(url, headers=headers).json()`;


const node = `const fetch = require('node-fetch');

const url = "https://api.oxolo.com/v1/api/account/plan";
const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;