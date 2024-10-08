import 'react-native-gesture-handler/jestSetup';
// jest-setup.js
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

// Mocks
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
