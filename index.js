/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';
import {name as appName} from './app.json';

const queryClient = new QueryClient();

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => Root);
