Try it out
npm install or yarn - Install the dependencies (Required)

npm start or yarn start - Start project

The project will start at http://localhost:3000/

Project structure
ROOT
 |
 |-src                    * Contains source of the code
   |
   |-actions              * Actions to connect store
   |
   |-components           * Hi-order/Global components such as CardDetail, Dropdown,...
   |
   |-hook                 * Custom hook useDebounce
   |
   |-reducers             * Root reducer 
   |  |-index.js          
   |
   |-sagas                * Root saga
   |  |- index.js
   |-stylesheets          * Layout style
   |  |- Layout.js
   |-utils
   |  |-ENUM.js
   |

Coding Style
[ComponentName] (without Styled) ----------------------- * These are the React component
[ComponentName]Styled (with Styled in the end) --------- * These are styled-component
ComponentName, variables, function,... Should be in camelcase

