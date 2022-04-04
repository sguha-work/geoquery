const AppSearchClient = require('@elastic/app-search-node');
const apiKey = 'private-8p6qw9rg1dr5f2ub1f5e5asj';
const baseUrlFn = () => 'https://ba80e1587f8f4b3c914f1ae0de28395b.ent-search.us-east4.gcp.elastic-cloud.com/api/as/v1/';
const elsClient = new AppSearchClient(undefined, apiKey, baseUrlFn);
const engineName = 'test-locengine';

const searchFields = { timestamp: {} }
const resultFields = { "lat": { "raw": {} }, "long": { "raw": {} }, "timestamp": { "raw": {} } };
//const options = { search_fields: searchFields, result_fields: resultFields }
const sort = {
    "timestamp": "desc"
};
const fs = require('fs');
const searches = [
    {
        query: 16515, 
        options: {
            search_fields: searchFields,
            result_fields: resultFields,
            //sort: sort
        }
    },
    // { query: '', options: {
    //     sort: sort
    // } }
]
const search = (engineName, searches) => new Promise(async (resolve, reject) => {
    try {
        const result = await elsClient.multiSearch(engineName, searches);
        fs.writeFileSync('search_output.json', JSON.stringify(result));
    } catch (error) {
        reject(error);
    }
});
search(engineName, searches)