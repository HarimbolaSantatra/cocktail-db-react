import { useEffect, useState } from 'react';

import { endpoints } from './Consts.js';

/** Search a drink by its name
 * @constructor
 * @async
 * @param {string} name - Name of the drink
 * @returns {object}
 * */
async function searchByName(name, callback) {
        const endpoint = endpoints.byName + name;
        fetch(endpoint)
        .then(resp => resp.json())
        .then(res => callback(res["drinks"]));
}

export { searchByName };
