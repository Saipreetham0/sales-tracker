// export const environment = {
//   production: true
// };


export const environment = {
  production: true,
  firebase: {
    // apiKey: 'your-api-key',
    // authDomain: 'your-auth-domain',
    // projectId: 'your-project-id',
    // storageBucket: 'your-storage-bucket',
    // messagingSenderId: 'your-messaging-sender-id',
    // appId: 'your-app-id',

    
    apiKey: 'AIzaSyB4hGeI1FS1JT1lKFQGY-aaJt66ccYTpQw',
    authDomain: 'ksp-iot.firebaseapp.com',
    databaseURL:
      'https://ksp-iot-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'ksp-iot',
    storageBucket: 'ksp-iot.appspot.com',
    messagingSenderId: '828466234416',
    appId: '1:828466234416:web:9ea762e0f94974c1e199f5',
    measurementId: 'G-SXZ891F3QF',
  },
  locationTracking: {
    minAccuracy: 100, // meters
    updateInterval: 30000, // milliseconds
    retryAttempts: 3,
    maxCacheAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    batchSize: 50 // number of locations to upload at once
  }
};