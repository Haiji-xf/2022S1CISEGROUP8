class testApi {
    api()
    {
        return fetch ("http://localhost:5555/api/article")
        .then((response) => {
            return response.json();
        })
    }
}
export default testApi