import { $api } from '../config/api';

export const getBlocks = async () => {
    try {
        const response = await fetch($api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
