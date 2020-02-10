import { expect } from 'chai';
import Block from './block';
import { GENESIS_DATA } from './config';

describe('Block', function() {
    describe('Block', function() {
        const timestamp = 20200202;
        const lastHash = 'foo-lastHash';
        const hash = 'bar-hash';
        const data = ['blockchain', 'data'];

        context('new Block', function() {
            const block = new Block(timestamp, lastHash, hash, data, 1, 1);

            it('A new block needs to be created', function() {
                expect(block.timestamp).to.equal(timestamp);
            });
        });

        context('genesisBlock', function() {
            const genesisBlock = Block.getGenesisBlock();

            it('genesisBlock needs to be created', function() {
                expect(genesisBlock instanceof Block).to.be.true;
            });

            it('retruns the gensis data', () => {
                expect(genesisBlock.hash).to.equal(GENESIS_DATA.hash);
            });
        });

        context('mineNewBlock', function() {
            const lastBlock = Block.getGenesisBlock();
            const data = 'maine new data';
            const newBlock = Block.mineNewBlock(lastBlock, data);

            it('returns a block instance', () => {
                expect(newBlock instanceof Block).to.be.true;
            });
            it('sets the lastHash to be the hash of the lastBlock', () => {
                expect(newBlock.lastHash).to.equal(lastBlock.hash);
            });
            it('sets the data', () => {
                expect(newBlock.data).to.equal(data);
            });
            it('sets a timestamp', () => {
                expect(newBlock.timestamp).not.equal(undefined);
            });
            it('creates a SHA-256 hash based on the proper inputs', () => {
                expect(newBlock.hash).to.equal(Block.generateHash(newBlock.timestamp, lastBlock.hash, data, 0, 0));
            });
        });
    });
});
