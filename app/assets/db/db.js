import Datastore from 'react-native-local-mongodb';
const db = new Datastore({
  filename: 'asyncStorageKey',
  autoload: true
});

export { db };
