import Configs from "../configs";

interface Props<P> {
    uri: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: P
    query?: { [key:string]: string | number | boolean | undefined }
}

class Request {

    public static async fetch<P, R>(props: Props<P>): Promise<R> {
        const url = new URL(`${Configs.host}/api/${props.uri}`);

        if (props.query) {
            Object.entries(props.query)
                .forEach(([key, value]) => {
                    if (value === undefined) return;
                    url.searchParams.set(key, value.toString());
                })
        }

        const response: any = await fetch(url.href, {
            headers: { 'Content-Type': 'application/json' },
            method: props.method || 'GET',
            body: props.body ? JSON.stringify(props.body) : undefined
        });

        return await this.apiResponse(response);
    }

    public static async fetchRaw(props: Props<BodyInit | undefined>): Promise<Response> {
        const url = new URL(`${Configs.host}/api/${props.uri}`);

        if (props.query) {
            Object.entries(props.query)
                .forEach(([key, value]) => {
                    if (value === undefined) return;
                    url.searchParams.set(key, value.toString());
                })
        }

        return await fetch(url.href, {
            method: props.method || 'GET',
            body: props.body
        });
    }

    public static async apiResponse<T>(response: Response): Promise<T> {
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        return data.result;
    }

}

export default Request;