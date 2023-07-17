"use client";
import Header from "../../shared/header/header";
import "./page.css";
import Grid from "@mui/material/Grid";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SmallHeader from "../../shared/smallHeader/smallHeader";
import toast from "react-hot-toast";
import { CustomTabPanel, copyToClip } from "@/app/shared/global/global";

export default function Credit() {
  const [val, setVal] = useState(0);

  const handleTab = (e: any, newVal: any) => {
    setVal(newVal);
  };
  return (
    <main className="main">
      <Header>Credits</Header>
      <Grid container className="authenticationContent">
        <Grid item xs={7}>
          <p>
            Use this endpoint to retrieve your current Oxolo credit balance.
            Each video creation costs 5 credits.
          </p>
          <p>
            If you run out of credits, you can either upgrade your plan to get
            more credits or top up your account balance with additional credits.
            To see an overview of the available personal and enterprise plans,
            please visit our pricing page.
          </p>
          <p>
            To top up your account balance, simply navigate to your user symbol
            on oxolo.com and click on "Membership Plan". From there, you can
            select the amount of credits you want to purchase and complete the
            transaction securely using your existing payment method.
          </p>
          <SmallHeader>HTTP Request</SmallHeader>
          <code>GET https://api.oxolo.com/v1/api/account/credits</code>
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
'https://api.oxolo.com/v1/api/account/credits' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url = 'https://api.oxolo.com/v1/api/account/credits'
headers = {
    'accept': 'application/json',
    'authorization': 'YOUR_API_KEY'
}
requests.get(url, headers=headers).json()`;


const node = `const fetch = require('node-fetch');

const url = "https://api.oxolo.com/v1/api/account/credits";
const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
