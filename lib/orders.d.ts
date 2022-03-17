import API from "./api";
interface options {
    orderId?: string;
    from?: string;
    to?: string;
    authorized?: boolean;
    receipt?: string;
    skip?: number;
    count?: number;
}
declare class orders extends API {
    orders: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (orderId: string) => Promise<unknown>;
        create: (data: {
            amount: number;
            currency: "INR";
            receipt?: string;
            notes?: object;
            method?: string;
            payment_capture?: boolean;
        }) => Promise<unknown>;
        peyments: (orderId: string) => Promise<unknown>;
        update: (orderId: string, notes: object) => Promise<unknown>;
    };
}
export default orders;
