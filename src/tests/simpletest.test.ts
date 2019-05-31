import { hello } from '../hello';
import {should} from 'chai'
import {expect} from 'chai';

import 'mocha'

describe('Hello function', ()=>{
    it('it should return hello word!',()=>{
        expect(hello()).to.equal('Hello world!')        

    });
    it('it should return a string', ()=>{
        expect(hello()).to.be.string
    })
})