importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");const heavyOperation=()=>{let e=[];for(let o=2;o<=1e7;o++){let t=!0;for(let e=2;e*e<=o;e++)if(o%e==0){t=!1;break}t&&e.push(o)}return console.log("Prime calculation finished"),e};Comlink.expose({heavyOperation});