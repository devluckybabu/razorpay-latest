import orders from "./orders";
interface options {
    paymentId?: string;
    from?: string;
    to?: string;
    skip?: number;
    count?: number;
}
declare class payments extends orders {
    payments: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (paymentId: string) => Promise<unknown>;
        update: (paymentId: string, notes: object) => Promise<unknown>;
        capture: (paymentId: string, amount: number, currency: 'INR') => Promise<unknown>;
        refundPayment: (paymentId: string, options?: {
            amount?: number | undefined;
            receipt?: string | undefined;
            speed: 'normal' | 'optimum';
        } | undefined) => Promise<unknown>;
        refunds: (paymentId: string, options?: options | undefined) => Promise<unknown>;
        getRefundDetails: (paymentId: string, refundId: string) => Promise<unknown>;
    };
}
export default payments;
