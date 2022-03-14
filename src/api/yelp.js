import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GABP3TGAM9vE4XS1nUCqrXDwuhRYQUDPsvWWpw8lvoYRy3f3ZOjGOfMgCJ_83BT1LFkVUCJlQzDFY0wHh_kX1UtnlwWiv3uStrV5b9VIB_gbr8ljcNKrpKRjOjovYnYx'
    }
})