// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'


/////
import { listings } from '../modules/urls.js';
// import { apiUrl } from './urls.js';
import { login } from '../modules/login.js';

login("email", "password", listings, "GET"); 

import { hi } from "../modules/output.js";

hi()