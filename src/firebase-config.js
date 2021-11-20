import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCxIMAyqchm7quG5pKeDg7PxfKgL0HDxd0",
    authDomain: "portfolio-bae1c.firebaseapp.com",
    databaseURL: "https://portfolio-bae1c-default-rtdb.firebaseio.com",
    projectId: "portfolio-bae1c",
    storageBucket: "portfolio-bae1c.appspot.com",
    messagingSenderId: "547439763392",
    appId: "1:547439763392:web:5e7ee6daee74775dd23225"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

