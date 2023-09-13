import React, { useState } from 'react';
import { Button } from '../Button';
import * as Comlink from 'comlink';
const Util = Comlink.wrap<any>(new Worker('./util.js'));

/**

main.js

const myWorker = new Worker("my_task.js");
myWorker.onmessage = (event) => {
  console.log(`Worker said : ${event.data}`);
};
myWorker.postMessage("ali"); 


worker file my_task.js

postMessage("I'm working before postMessage('Ravikumar').");
onmessage = (event) => {
  postMessage(`Hi, ${event.data}`);
};

*/

export const WorkerThread = () => {
  const [state, setState] = useState(false);
  return (
    <div className="mt-4">
      <h1 className="mb-4">Worker Thread</h1>

      <Button
        text="Do Something Heavy"
        onClick={async () => {
          await Util.heavyOperation();
          setState(true);
        }}
      ></Button>
      <Button
        className="mx-4"
        text="Reset"
        variant="outlined"
        onClick={() => {
          setState(false);
        }}
      ></Button>
      {state && (
        <div className="mt-4 bg-green-500 text-white p-2 rounded">
          Heavy Operation Complete!
        </div>
      )}
    </div>
  );
};
