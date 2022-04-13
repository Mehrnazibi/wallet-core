// Copyright © 2017-2022 Trust Wallet.
//
// This file is part of Trust. The full Trust copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

import "mocha";
import { expect } from "chai";
import { WalletCore } from "../dist";

describe("AnyAddress", () => {
  it("test validating Solana address", () => {

    var { AnyAddress, HexCoding, CoinType} = WalletCore;

    var address = new AnyAddress.create("7v91N7iZ9mNicL8WfG6cgSCKyRXydQjLh6UYBWwm6y1Q", CoinType.Solana);

    expect(address.coin().value).to.equal(501);
    expect(address.description()).to.equal("7v91N7iZ9mNicL8WfG6cgSCKyRXydQjLh6UYBWwm6y1Q");

    var data = address.data();

    expect(data.length).to.equal(32);
    expect(data).to.be.a("Uint8Array");
    expect(HexCoding.encode(data)).to.equal("0x66c2f508c9c555cacc9fb26d88e88dd54e210bb5a8bce5687f60d7e75c4cd07f");

    address.delete();
  });
});
