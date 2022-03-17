import payments from "./payments";
interface options {
    itemId?: string;
    from?: string;
    to?: string;
    skip?: number;
    count?: number;
}
declare class items extends payments {
    items: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (itemId: string) => Promise<unknown>;
        create: (data: {
            name: string;
            description?: string;
            amount: number;
            currency: 'INR' | 'USD';
        }) => Promise<unknown>;
        update: (itemId: string, data: {
            name?: string;
            description?: string;
            amount?: number;
            currency?: "INR" | "USD";
            active?: boolean;
        }) => Promise<unknown>;
        delete: (itemId: string) => Promise<unknown>;
    };
}
export default items;
