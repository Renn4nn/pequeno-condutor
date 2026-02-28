import { useState, useEffect } from 'react';
import type { ApiResponse, DataType } from '@repo/schemas';
import Toast from 'react-native-toast-message';

export function useApiResponse<T extends DataType>(
    apiResponse: ApiResponse<T> | null
) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        if (!apiResponse) return;

        if ('error' in apiResponse) {
            Toast.show({ type: 'error', text1: apiResponse.error.message });
        } else if ('errors' in apiResponse) {
            apiResponse.errors.forEach(e => 
                Toast.show({ type: 'error', text1: e.message })
            );
        } else if ('data' in apiResponse) {
            setData(apiResponse.data);
        }
    }, [apiResponse]);

    return data;
}