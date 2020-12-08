class env {

    public static getBaseAPI() {
        return process.env.REACT_APP_BASE_API;
    }

    public static getApiDefaultParams() {
        return process.env.REACT_APP_API_PARAMS + this.buildKey();
    }

    private static buildKey() {
        const key = process.env.REACT_APP_API_KEY!;
        return key.replace(key.substring(key.length - 2, key.length), '');
    }

}

export default env;