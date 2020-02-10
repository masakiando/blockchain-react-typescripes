import { GENESIS_DATA } from './config';
import ChainUtil from '../utils/chain-util';

export default class Block {
    timestamp: number;
    lastHash: string;
    hash: string;
    //for cryptocurrency - transactions are the data in each block
    //but the blockchain can hold any data
    data: any;
    nonce: number;
    difficulty: number;
    constructor(timestamp: number, lastHash: string, hash: string, data: any, nonce: number, difficulty: number) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
    /**
     * First block of the blockchain.
     */
    static getGenesisBlock(): Block {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = GENESIS_DATA;
        return new this(timestamp, lastHash, hash, data, nonce, difficulty);
    }

    /**
     * Mines new block that will be added to the blockchain.
     * @param lastBlock Link to the previous block for storing its hash.
     * @param data Data to store for the new block.
     */
    static mineNewBlock(lastBlock: Block, data: any): Block {
        const timestamp = Date.now();
        const nonce: number = 0;
        const difficulty: number = 0;
        const lastHash: string = lastBlock.hash;
        const hash = Block.generateHash(timestamp, lastHash, data, nonce, difficulty);

        return new this(timestamp, lastHash, hash, data, nonce, difficulty);
    }

    static generateHash(timestamp: number, lastHash: string, data: any, nonce: number, difficulty: number): string {
        return ChainUtil.genHash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`);
    }
}
