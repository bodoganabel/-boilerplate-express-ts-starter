
// const demoJs = require('src/utilities/dummy-module.js');
import demoTs from 'src/utilities/dummy-export';

export const importTests = () => {
  console.log('This module is imported using "import":')
  demoTs();
  // ! This is not working yet
  // console.log('This module is imported using "require":')
  // demoJs.test();
}

