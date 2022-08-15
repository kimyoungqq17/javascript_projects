//changing the name doesnt effect when using export default
import SEARCH_URLZ from "./consts";

//here the name can't be changed, export {SEARCH_URL}: no default 
import {SEARCH_URL} from "./consts";

//here the name can't be changed, export {SEARCH_URL}: no default 
import greeting, {SEARCH_URL2 as SEARCH, SEARCH_QUERY2} from "./consts";


