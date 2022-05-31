//You cannot import file outside the src folder
//so this env.js contains the same data with the .env in the root
//Please make sure that change them together if needed
const env = { "url": "http://localhost:" + (process.env.PORT || 5555) + "/api/article" }

export default env;
