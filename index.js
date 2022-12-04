import { registerRootComponent } from 'expo';
import { withExpoSnack } from 'nativewind';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(withExpoSnack(App));
