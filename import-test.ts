
// const demoJs = require('src/utilities/dummy-module.js');

import { demoImportFromTs } from "@server/utilities/dummy-export";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const importTests = () => {
  console.log('This module is imported using "import":')
  demoImportFromTs();
  // ! This is not working yet
  // console.log('This module is imported using "require":')
  // demoJs.test();
}

