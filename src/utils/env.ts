class env {

    public static getBaseAPI() {
        return process.env.REACT_APP_BASE_API;
    }

    public static getApiDefaultParams() {
        return process.env.REACT_APP_API_PARAMS + this.buildApi(true);
    }

    public static getGCodeAPI() {
        return process.env.REACT_APP_GCODE_API + this.buildApi(false) + process.env.REACT_APP_GCODE_PARAMS;
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