import items from "./items";
interface options {
    id?: string;
    from?: string;
    to?: string;
    skip?: number;
    count?: number;
}
declare class settlements extends items {
    settlements: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (settlementId: string) => Promise<unknown>;
        getInstantSettlements: (options: options) => Promise<unknown>;
        detail: (settlementId: string) => Promise<unknown>;
        recon: (options: {
            year: number;
            month: number;
            day?: number;
            skip?: number;
            count?: number;
        }) => Promise<unknown>;
        create: (options: {
            amount: number;
            settle_full_balance?: boolean;
            description?: string;
            notes?: object;
        }) => Promise<unknown>;
    };
}
export default settlements;
