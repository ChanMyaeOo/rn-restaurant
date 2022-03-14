import { useState } from "react";
import yelp from "../api/yelp";
export default () => {
    const [results, setResults] = useState({
        loading: false,
        data: null,
        error: null,
    });
    const searchRestaurants = async (term) => {
        setResults({
            loading: true,
            data: null,
            error: null,
        });

        try {
            const response = await yelp.get("/search", {
                params: {
                    term,
                    limit: 15,
                    location: "Toronto",
                },
            });
            setResults({
                loading: false,
                data: response.data.businesses,
                error: null,
            });
        } catch (error) {
            setResults({
                loading: false,
                data: null,
                error: "Something went wrong!",
            });
        }
    };
    return [results, searchRestaurants]
};
