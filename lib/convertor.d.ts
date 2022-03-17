declare const _default: {
    toDateNumber: (date?: any) => number | "";
    toParams: (data?: object | undefined) => string;
    getOptions: (params?: any) => {
        from: string | number;
        to: string | number;
        skip: any;
        count: any;
    } | {
        from?: undefined;
        to?: undefined;
        skip?: undefined;
        count?: undefined;
    };
    orderOptions: (params?: any) => {
        from: string | number;
        to: string | number;
        skip: any;
        count: any;
        authorized: number;
        receipt: any;
    } | {
        from?: undefined;
        to?: undefined;
        skip?: undefined;
        count?: undefined;
        authorized?: undefined;
        receipt?: undefined;
    };
};
export default _default;
