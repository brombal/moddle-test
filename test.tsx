import * as Moddle from 'moddle';

console.log('test loading!');

export default () => {
  console.log('test run 2!');
}

Moddle.dev.handleUnload(module, () => {
  console.log('test unloaded!');
});
