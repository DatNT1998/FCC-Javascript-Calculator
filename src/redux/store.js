import {createStore} from 'redux';
import Calculatorreducer from './reducer';
const store = createStore(Calculatorreducer);

export  {store};