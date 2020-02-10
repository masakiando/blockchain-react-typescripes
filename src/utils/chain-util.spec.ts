import { expect } from 'chai';
import ChainUtil from './chain-util';

describe('Block', function() {
    it('SHA-256ハッシュ出力を生成します', () => {
        expect(ChainUtil.genHash('foo')).to.equal('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b');
    });
});
