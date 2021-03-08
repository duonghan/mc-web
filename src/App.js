import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
// import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
// import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
// import {ProfileList} from './profiles';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} i18nProvider={i18nProvider}>
      {/* <Resource name="profiles" list={ProfileList} icon={PostIcon}/> */}
      <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
