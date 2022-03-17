declare class config {
    private instance;
    constructor(authorization: {
        key_id: string;
        key_secret: string;
    });
    protected call: (path: string, options?: any) => Promise<unknown>;
    protected update: (path: string, id: string, notes: object) => Promise<unknown>;
    protected post: (path: string, id: string, options?: any) => Promise<unknown>;
    protected capture: (paymentId: string, amount: number, currency: 'INR') => Promise<unknown>;
}
export default config;
