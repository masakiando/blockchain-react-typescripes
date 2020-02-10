const crypto = require('crypto');

export default class ChainUtil {
    /**
     * Generates hash based on any given data. Useful for not having to sign very large pieces of data but
     * just the hash value.
     * @param data Any arbitrary data with no fixed size that will be hashed to a set size.
     */
    static genHash(data: any): string {
        const hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(data).toString());
        return hash.digest('hex');
    }
}
