import HTTPTransport from './http';

export default abstract class BaseApi {
    protected http: HTTPTransport;

    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint);
    }
}
