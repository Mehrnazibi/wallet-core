// Copyright © 2017-2022 Trust Wallet.
//
// This file is part of Trust. The full Trust copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

import 'mocha'
import { expect } from 'chai'
import { Buffer } from 'buffer'
import { TW } from '../dist'

describe('Wallet Core protobuf model tests', () => {
    it('test Ethereum encoding SigningInput', () => {
        const input = TW.Ethereum.Proto.SigningInput.create({
            toAddress: '0x3535353535353535353535353535353535353535',
            chainId: Buffer.from('01', 'hex'),
            nonce: Buffer.from('09', 'hex'),
            gasPrice: Buffer.from('04a817c800', 'hex'),
            gasLimit: Buffer.from('5208', 'hex'),
            transaction: TW.Ethereum.Proto.Transaction.create({
                transfer: TW.Ethereum.Proto.Transaction.Transfer.create({
                    amount: Buffer.from('0de0b6b3a7640000', 'hex')
                })
            }),
            privateKey: Buffer.from('4646464646464646464646464646464646464646464646464646464646464646', 'hex')
        })

        const encoded = TW.Ethereum.Proto.SigningInput.encode(input).finish()
        expect(Buffer.from(encoded).toString('hex')).to.equal("0a0101120109220504a817c8002a025208422a3078333533353335333533353335333533353335333533353335333533353335333533353335333533354a204646464646464646464646464646464646464646464646464646464646464646520c0a0a0a080de0b6b3a7640000")
    })

    it('test Bitcoin / Bitcoin SigningInput', () => {
        expect(TW.Bitcoin.Proto.SigningInput).not.null
        expect(TW.Binance.Proto.SigningInput).not.null
    })
})