import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { PropsWithChildren, useEffect } from 'react'

const appxios = axios.create({
    baseURL: 'https://server.boek.live',
    timeout: 7000
})

export function AxiosInterceptor({ children }: PropsWithChildren<{}>) {
    useEffect(() => {
        const beforeRequest = (config: AxiosRequestConfig<any>) => {
            return config;
        }
        const requestError = (error: any) => {
            console.log(error);
            return Promise.reject(error);
        }
        const onResponse = (response: AxiosResponse<any, any>) => {

            return response;
        }
        const onResponseError = (error: any) => {

            return Promise.reject(error);
        }
        appxios.interceptors.request.use(beforeRequest, requestError);
        const interceptor = appxios.interceptors.response.use(onResponse, onResponseError);
        return () => appxios.interceptors.response.eject(interceptor);
    }, [])
    return <>{children}</>;
}


export default appxios;
