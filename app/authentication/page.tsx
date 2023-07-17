"use client";
import Header from "../shared/header/header";
import "./page.css";
import Grid from "@mui/material/Grid";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CustomTabPanel, copyToClip } from "../shared/global/global";

export default function Authentication() {
  const [val, setVal] = useState(0);

  const handleTab = (e: any, newVal: any) => {
    setVal(newVal);
  };
  return (
    <main className="main">
      <Header>Authentication</Header>
      <Grid container className="authenticationContent">
        <Grid item xs={7}>
          <p>
            To use the Oxolo API, you need to obtain an API key from oxolo.com.
            Once you've logged in, navigate to your user symbol and click on
            "API Keys". Copy the API key to use it in your requests.
          </p>
          <img
            src="https://api.oxolo.com/images/api_key-e6d1fc36.png"
            alt="api key"
          />
          <p>
            Include your API key in all requests in the header with the key
            authorization. You will find examples on the right side of this
            documentation in various languages.
          </p>

          <p>Replace YOUR_API_KEY with your actual API key.</p>
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
              onClick={() => copyToClip(curl)}
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
              onClick={() => copyToClip(curl)}
            >
              {node}
            </SyntaxHighlighter>
          </CustomTabPanel>
        </Grid>
      </Grid>
    </main>
  );
}

const python = `import requests

url = 
"https://api.oxolo.com/v1/api/account/credits"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.get(url, headers=headers).json()`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/account/credits' 
-H 'accept: application/json' \
-H 'authorization: YOUR_API_KEY'`;
const node = `const fetch = require('node-fetch');

const url = 
"https://api.oxolo.com/v1/api/account/credits";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err))`;
