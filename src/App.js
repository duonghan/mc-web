import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} icon={UserIcon}/>
      <Resource name="posts" list={ListGuesser} icon={PostIcon}/>
  </Admin>
);

export default App;
