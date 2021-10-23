/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 V_NUMBER: process.env.NUMBER === undefined ? '+994407257213' : process.env.NUMBER,
 V_OWNER: process.env.OWNER_NAME === undefined ? 'A-J-M-A-L' : process.env.OWNER_NAME,

};
