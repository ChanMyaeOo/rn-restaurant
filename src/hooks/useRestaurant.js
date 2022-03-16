import { useState } from "react";
import yelp from "../api/yelp";
export default () => {
    const [result, setResult] = useState({
        loading: false,
        data: null,
        error: null,
    });
    const searchRestaurant = async (id) => {
        setResult({
            loading: true,
            data: null,
            error: null,
        });

        try {
            const response = await yelp.get(`/${id}`);
            setResult({
                loading: false,
                data: response.data,
                error: null,
            });
        } catch (error) {
            setResult({
                loading: false,
                data: null,
                error: "Something went wrong!",
            });
        }
    };
    return [result, searchRestaurant]
};
