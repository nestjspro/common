export class Headers {
    /**
     * Takes in headers from @Req() and returns the jwt token if present.
     *
     * @param headers @Req() headers
     */
    public static getJwtTokenFromHeaders(headers: any): string {
        if (headers['authorization']) {
            const split = headers['authorization'].split(' ');

            if (split.length > 0) {
                return split[1];
            }
        }
    }
}
