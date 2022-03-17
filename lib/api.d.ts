declare class API {
    private username;
    private password;
    constructor(auth: {
        key_id: string;
        key_secret: string;
    });
    protected get: (route: string, options?: object | undefined) => Promise<unknown>;
    protected post: (route: string, data: object) => Promise<unknown>;
    protected update: (route: string, data: object) => Promise<unknown>;
    protected delete: (route: string, id: string) => Promise<unknown>;
}
export default API;
