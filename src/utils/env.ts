class env {

    public static getBaseAPI() {
        return process.env.REACT_APP_BASE_API;
    }

    public static getApiDefaultParams() {
        return process.env.REACT_APP_API_PARAMS + this.buildApi(true);
    }

    public static getApiLocK() {
        return this.buildApi(false);
    }

    private static buildApi(main: boolean) {
        const apiK = main ? process.env.REACT_APP_WK! : process.env.REACT_APP_LC!;
        return apiK.replace(apiK.substring(apiK.length - 2, apiK.length), '');
    }

}

export default env;