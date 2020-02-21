(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'krypto-root-krypto'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'krypto-root-krypto'.");
    }
    root['krypto-root-krypto'] = factory(typeof this['krypto-root-krypto'] === 'undefined' ? {} : this['krypto-root-krypto'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toByte = Kotlin.toByte;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Math_0 = Math;
  var L4294967296 = new Kotlin.Long(0, 1);
  var L255 = Kotlin.Long.fromInt(255);
  var Random = Kotlin.kotlin.random.Random;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  MD5$Companion.prototype = Object.create(HashFactory.prototype);
  MD5$Companion.prototype.constructor = MD5$Companion;
  MD5.prototype = Object.create(Hash.prototype);
  MD5.prototype.constructor = MD5;
  SHA.prototype = Object.create(Hash.prototype);
  SHA.prototype.constructor = SHA;
  SHA1$Companion.prototype = Object.create(HashFactory.prototype);
  SHA1$Companion.prototype.constructor = SHA1$Companion;
  SHA1.prototype = Object.create(SHA.prototype);
  SHA1.prototype.constructor = SHA1;
  SHA256$Companion.prototype = Object.create(HashFactory.prototype);
  SHA256$Companion.prototype.constructor = SHA256$Companion;
  SHA256.prototype = Object.create(SHA.prototype);
  SHA256.prototype.constructor = SHA256;
  SecureRandom.prototype = Object.create(Random.prototype);
  SecureRandom.prototype.constructor = SecureRandom;
  SecureRandom$Companion.prototype = Object.create(SecureRandom.prototype);
  SecureRandom$Companion.prototype.constructor = SecureRandom$Companion;
  function AES(keyWords) {
    AES$Companion_getInstance();
    this.keyWords = keyWords;
    this.keySize_0 = this.keyWords.length;
    this.numRounds_0 = this.keySize_0 + 6 | 0;
    this.ksRows_0 = (this.numRounds_0 + 1 | 0) * 4 | 0;
    var $receiver = new Int32Array(this.ksRows_0);
    var tmp$;
    for (var ksRow = 0; ksRow < $receiver.length; ksRow++) {
      if (ksRow < this.keySize_0) {
        tmp$ = this.keyWords[ksRow];
      }
       else {
        var t = $receiver[ksRow - 1 | 0];
        if (0 === ksRow % this.keySize_0) {
          t = t << 8 | t >>> 24;
          t = AES$Companion_getInstance().SBOX_0[t >>> 24 & 255] << 24 | AES$Companion_getInstance().SBOX_0[t >>> 16 & 255] << 16 | AES$Companion_getInstance().SBOX_0[t >>> 8 & 255] << 8 | AES$Companion_getInstance().SBOX_0[t & 255];
          t = t ^ AES$Companion_getInstance().RCON_0[ksRow / this.keySize_0 | 0 | 0] << 24;
        }
         else if (this.keySize_0 > 6 && ksRow % this.keySize_0 === 4) {
          t = AES$Companion_getInstance().SBOX_0[t >>> 24 & 255] << 24 | AES$Companion_getInstance().SBOX_0[t >>> 16 & 255] << 16 | AES$Companion_getInstance().SBOX_0[t >>> 8 & 255] << 8 | AES$Companion_getInstance().SBOX_0[t & 255];
        }
        tmp$ = $receiver[ksRow - this.keySize_0 | 0] ^ t;
      }
      $receiver[ksRow] = tmp$;
    }
    this.keySchedule_0 = $receiver;
    var $receiver_0 = new Int32Array(this.ksRows_0);
    for (var invKsRow = 0; invKsRow < $receiver_0.length; invKsRow++) {
      var ksRow_0 = this.ksRows_0 - invKsRow | 0;
      var t_0 = invKsRow % 4 !== 0 ? this.keySchedule_0[ksRow_0] : this.keySchedule_0[ksRow_0 - 4 | 0];
      $receiver_0[invKsRow] = invKsRow < 4 || ksRow_0 <= 4 ? t_0 : AES$Companion_getInstance().INV_SUB_MIX_0_0[AES$Companion_getInstance().SBOX_0[t_0 >>> 24 & 255]] ^ AES$Companion_getInstance().INV_SUB_MIX_1_0[AES$Companion_getInstance().SBOX_0[t_0 >>> 16 & 255]] ^ AES$Companion_getInstance().INV_SUB_MIX_2_0[AES$Companion_getInstance().SBOX_0[t_0 >>> 8 & 255]] ^ AES$Companion_getInstance().INV_SUB_MIX_3_0[AES$Companion_getInstance().SBOX_0[t_0 & 255]];
    }
    this.invKeySchedule_0 = $receiver_0;
  }
  AES.prototype.encryptBlock_u4kcgn$ = function (M, offset) {
    this.doCryptBlock_0(M, offset, this.keySchedule_0, AES$Companion_getInstance().SUB_MIX_0_0, AES$Companion_getInstance().SUB_MIX_1_0, AES$Companion_getInstance().SUB_MIX_2_0, AES$Companion_getInstance().SUB_MIX_3_0, AES$Companion_getInstance().SBOX_0);
  };
  AES.prototype.decryptBlock_u4kcgn$ = function (M, offset) {
    var t = M[offset + 1 | 0];
    M[offset + 1 | 0] = M[offset + 3 | 0];
    M[offset + 3 | 0] = t;
    this.doCryptBlock_0(M, offset, this.invKeySchedule_0, AES$Companion_getInstance().INV_SUB_MIX_0_0, AES$Companion_getInstance().INV_SUB_MIX_1_0, AES$Companion_getInstance().INV_SUB_MIX_2_0, AES$Companion_getInstance().INV_SUB_MIX_3_0, AES$Companion_getInstance().INV_SBOX_0);
    t = M[offset + 1 | 0];
    M[offset + 1 | 0] = M[offset + 3 | 0];
    M[offset + 3 | 0] = t;
  };
  AES.prototype.doCryptBlock_0 = function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var s0 = M[offset + 0 | 0] ^ keySchedule[0];
    var s1 = M[offset + 1 | 0] ^ keySchedule[1];
    var s2 = M[offset + 2 | 0] ^ keySchedule[2];
    var s3 = M[offset + 3 | 0] ^ keySchedule[3];
    var ksRow = 4;
    tmp$ = this.numRounds_0;
    for (var round = 1; round < tmp$; round++) {
      var t0 = SUB_MIX_0[s0 >>> 24 & 255] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 >>> 0 & 255] ^ keySchedule[tmp$_0 = ksRow, ksRow = tmp$_0 + 1 | 0, tmp$_0];
      var t1 = SUB_MIX_0[s1 >>> 24 & 255] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 >>> 0 & 255] ^ keySchedule[tmp$_1 = ksRow, ksRow = tmp$_1 + 1 | 0, tmp$_1];
      var t2 = SUB_MIX_0[s2 >>> 24 & 255] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 >>> 0 & 255] ^ keySchedule[tmp$_2 = ksRow, ksRow = tmp$_2 + 1 | 0, tmp$_2];
      var t3 = SUB_MIX_0[s3 >>> 24 & 255] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 >>> 0 & 255] ^ keySchedule[tmp$_3 = ksRow, ksRow = tmp$_3 + 1 | 0, tmp$_3];
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }
    var t0_0 = (SBOX[s0 >>> 24 & 255] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 >>> 0 & 255]) ^ keySchedule[tmp$_4 = ksRow, ksRow = tmp$_4 + 1 | 0, tmp$_4];
    var t1_0 = (SBOX[s1 >>> 24 & 255] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 >>> 0 & 255]) ^ keySchedule[tmp$_5 = ksRow, ksRow = tmp$_5 + 1 | 0, tmp$_5];
    var t2_0 = (SBOX[s2 >>> 24 & 255] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 >>> 0 & 255]) ^ keySchedule[tmp$_6 = ksRow, ksRow = tmp$_6 + 1 | 0, tmp$_6];
    var t3_0 = (SBOX[s3 >>> 24 & 255] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 >>> 0 & 255]) ^ keySchedule[tmp$_7 = ksRow, ksRow = tmp$_7 + 1 | 0, tmp$_7];
    M[offset + 0 | 0] = t0_0;
    M[offset + 1 | 0] = t1_0;
    M[offset + 2 | 0] = t2_0;
    M[offset + 3 | 0] = t3_0;
  };
  function AES$Companion() {
    AES$Companion_instance = this;
    this.SBOX_0 = new Int32Array(256);
    this.INV_SBOX_0 = new Int32Array(256);
    this.SUB_MIX_0_0 = new Int32Array(256);
    this.SUB_MIX_1_0 = new Int32Array(256);
    this.SUB_MIX_2_0 = new Int32Array(256);
    this.SUB_MIX_3_0 = new Int32Array(256);
    this.INV_SUB_MIX_0_0 = new Int32Array(256);
    this.INV_SUB_MIX_1_0 = new Int32Array(256);
    this.INV_SUB_MIX_2_0 = new Int32Array(256);
    this.INV_SUB_MIX_3_0 = new Int32Array(256);
    this.RCON_0 = new Int32Array([0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]);
    var array = new Int32Array(256);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i >= 128 ? i << 1 ^ 283 : i << 1;
    }
    var d = array;
    var x = 0;
    var xi = 0;
    for (var i_0 = 0; i_0 < 256; i_0++) {
      var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
      sx = sx >>> 8 ^ sx & 255 ^ 99;
      this.SBOX_0[x] = sx;
      this.INV_SBOX_0[sx] = x;
      var x2 = d[x];
      var x4 = d[x2];
      var x8 = d[x4];
      var t;
      t = (d[sx] * 257 | 0) ^ Kotlin.imul(sx, 16843008);
      this.SUB_MIX_0_0[x] = t << 24 | t >>> 8;
      this.SUB_MIX_1_0[x] = t << 16 | t >>> 16;
      this.SUB_MIX_2_0[x] = t << 8 | t >>> 24;
      this.SUB_MIX_3_0[x] = t << 0;
      t = Kotlin.imul(x8, 16843009) ^ (x4 * 65537 | 0) ^ (x2 * 257 | 0) ^ Kotlin.imul(x, 16843008);
      this.INV_SUB_MIX_0_0[sx] = t << 24 | t >>> 8;
      this.INV_SUB_MIX_1_0[sx] = t << 16 | t >>> 16;
      this.INV_SUB_MIX_2_0[sx] = t << 8 | t >>> 24;
      this.INV_SUB_MIX_3_0[sx] = t << 0;
      if (x === 0) {
        x = 1;
        xi = 1;
      }
       else {
        x = x2 ^ d[d[d[x8 ^ x2]]];
        xi = xi ^ d[d[xi]];
      }
    }
  }
  AES$Companion.prototype.toIntArray_0 = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = new Int32Array($receiver.length / 4 | 0);
    var m = 0;
    for (var n = 0; n < out.length; n++) {
      var v3 = $receiver[tmp$ = m, m = tmp$ + 1 | 0, tmp$] & 255;
      var v2 = $receiver[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] & 255;
      var v1 = $receiver[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] & 255;
      var v0 = $receiver[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] & 255;
      out[n] = v0 << 0 | v1 << 8 | v2 << 16 | v3 << 24;
    }
    return out;
  };
  AES$Companion.prototype.toByteArray_0 = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = new Int8Array($receiver.length * 4 | 0);
    var m = 0;
    for (var n = 0; n < $receiver.length; n++) {
      var v = $receiver[n];
      out[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = toByte(v >> 24 & 255);
      out[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = toByte(v >> 16 & 255);
      out[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(v >> 8 & 255);
      out[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(v >> 0 & 255);
    }
    return out;
  };
  AES$Companion.prototype.encryptEes128Cbc_r9qwmk$ = function (data, key) {
    return this.encryptAes128Cbc_r9qwmk$(data, key);
  };
  AES$Companion.prototype.encryptAes128Cbc_r9qwmk$ = function (data, key) {
    var aes = AES_init(key);
    var words = this.toIntArray_0(data);
    var wordsLength = words.length;
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    for (var n = 0; n < wordsLength; n += 4) {
      words[n + 0 | 0] = words[n + 0 | 0] ^ s0;
      words[n + 1 | 0] = words[n + 1 | 0] ^ s1;
      words[n + 2 | 0] = words[n + 2 | 0] ^ s2;
      words[n + 3 | 0] = words[n + 3 | 0] ^ s3;
      aes.encryptBlock_u4kcgn$(words, n);
      s0 = words[n + 0 | 0];
      s1 = words[n + 1 | 0];
      s2 = words[n + 2 | 0];
      s3 = words[n + 3 | 0];
    }
    return this.toByteArray_0(words);
  };
  AES$Companion.prototype.decryptAes128Cbc_r9qwmk$ = function (data, key) {
    var aes = AES_init(key);
    var dataWords = this.toIntArray_0(data);
    var wordsLength = dataWords.length;
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    for (var n = 0; n < wordsLength; n += 4) {
      var t0 = dataWords[n + 0 | 0];
      var t1 = dataWords[n + 1 | 0];
      var t2 = dataWords[n + 2 | 0];
      var t3 = dataWords[n + 3 | 0];
      aes.decryptBlock_u4kcgn$(dataWords, n);
      dataWords[n + 0 | 0] = dataWords[n + 0 | 0] ^ s0;
      dataWords[n + 1 | 0] = dataWords[n + 1 | 0] ^ s1;
      dataWords[n + 2 | 0] = dataWords[n + 2 | 0] ^ s2;
      dataWords[n + 3 | 0] = dataWords[n + 3 | 0] ^ s3;
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }
    return this.toByteArray_0(dataWords);
  };
  AES$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AES$Companion_instance = null;
  function AES$Companion_getInstance() {
    if (AES$Companion_instance === null) {
      new AES$Companion();
    }
    return AES$Companion_instance;
  }
  AES.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AES',
    interfaces: []
  };
  function AES_init(key, $this) {
    $this = $this || Object.create(AES.prototype);
    AES.call($this, AES$Companion_getInstance().toIntArray_0(key));
    return $this;
  }
  function HashFactory(create) {
    this.create = create;
  }
  HashFactory.prototype.digest_fqrh44$ = function (data) {
    var $receiver = this.create();
    $receiver.update_mj6st8$(data, 0, data.length);
    return $receiver.digest();
  };
  HashFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashFactory',
    interfaces: []
  };
  function Hash(chunkSize, digestSize) {
    this.chunkSize = chunkSize;
    this.digestSize = digestSize;
    this.chunk_xu68ku$_0 = new Int8Array(this.chunkSize);
    this.writtenInChunk_57myig$_0 = 0;
    this.totalWritten_kkd7wa$_0 = L0;
  }
  Hash.prototype.reset = function () {
    this.coreReset();
    return this;
  };
  Hash.prototype.update_mj6st8$ = function (data, offset, count) {
    var curr = offset;
    var left = count;
    while (left > 0) {
      var remainingInChunk = this.chunkSize - this.writtenInChunk_57myig$_0 | 0;
      var b = left;
      var toRead = Math_0.min(remainingInChunk, b);
      arraycopy(data, curr, this.chunk_xu68ku$_0, this.writtenInChunk_57myig$_0, toRead);
      left = left - toRead | 0;
      curr = curr + toRead | 0;
      this.writtenInChunk_57myig$_0 = this.writtenInChunk_57myig$_0 + toRead | 0;
      if (this.writtenInChunk_57myig$_0 >= this.chunkSize) {
        this.writtenInChunk_57myig$_0 = this.writtenInChunk_57myig$_0 - this.chunkSize | 0;
        this.coreUpdate_fqrh44$(this.chunk_xu68ku$_0);
      }
    }
    this.totalWritten_kkd7wa$_0 = this.totalWritten_kkd7wa$_0.add(Kotlin.Long.fromInt(count));
    return this;
  };
  Hash.prototype.digestOut_fqrh44$ = function (out) {
    var pad = this.corePadding_s8cxhz$(this.totalWritten_kkd7wa$_0);
    var padPos = 0;
    while (padPos < pad.length) {
      var padSize = this.chunkSize - this.writtenInChunk_57myig$_0 | 0;
      arraycopy(pad, padPos, this.chunk_xu68ku$_0, this.writtenInChunk_57myig$_0, padSize);
      this.coreUpdate_fqrh44$(this.chunk_xu68ku$_0);
      this.writtenInChunk_57myig$_0 = 0;
      padPos = padPos + padSize | 0;
    }
    this.coreDigest_fqrh44$(out);
    this.coreReset();
  };
  Hash.prototype.update_fqrh44$ = function (data) {
    return this.update_mj6st8$(data, 0, data.length);
  };
  Hash.prototype.digest = function () {
    var $receiver = new Int8Array(this.digestSize);
    this.digestOut_fqrh44$($receiver);
    return $receiver;
  };
  Hash.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hash',
    interfaces: []
  };
  function hash($receiver, algo) {
    return algo.digest_fqrh44$($receiver);
  }
  function Krypto() {
    Krypto_instance = this;
    this.VERSION = KRYPTO_VERSION;
  }
  Krypto.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Krypto',
    interfaces: []
  };
  var Krypto_instance = null;
  function Krypto_getInstance() {
    if (Krypto_instance === null) {
      new Krypto();
    }
    return Krypto_instance;
  }
  function MD5() {
    MD5$Companion_getInstance();
    Hash.call(this, 64, 16);
    this.r_0 = new Int32Array(4);
    this.o_0 = new Int32Array(4);
    this.b_0 = new Int32Array(16);
    this.coreReset();
  }
  function MD5$Companion() {
    MD5$Companion_instance = this;
    HashFactory.call(this, MD5$MD5$Companion_init$lambda);
    this.S_0 = new Int32Array([7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21]);
    var array = new Int32Array(64);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = L4294967296.toNumber();
      var x = 1.0 + i;
      var x_0 = Math_0.sin(x);
      array[i] = Kotlin.Long.fromNumber(tmp$_0 * Math_0.abs(x_0)).toInt();
    }
    this.T_0 = array;
  }
  function MD5$MD5$Companion_init$lambda() {
    return new MD5();
  }
  MD5$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HashFactory]
  };
  var MD5$Companion_instance = null;
  function MD5$Companion_getInstance() {
    if (MD5$Companion_instance === null) {
      new MD5$Companion();
    }
    return MD5$Companion_instance;
  }
  MD5.prototype.coreReset = function () {
    this.r_0[0] = 1732584193;
    this.r_0[1] = -271733879;
    this.r_0[2] = -1732584194;
    this.r_0[3] = 271733878;
  };
  MD5.prototype.coreUpdate_fqrh44$ = function (chunk) {
    var tmp$, tmp$_0, tmp$_1;
    for (var j = 0; j < 64; j++)
      this.b_0[j >>> 2] = chunk[j] << 24 | this.b_0[j >>> 2] >>> 8;
    for (var j_0 = 0; j_0 < 4; j_0++)
      this.o_0[j_0] = this.r_0[j_0];
    for (var j_1 = 0; j_1 < 64; j_1++) {
      var d16 = j_1 / 16 | 0;
      switch (d16) {
        case 0:
          tmp$ = this.r_0[1] & this.r_0[2] | ~this.r_0[1] & this.r_0[3];
          break;
        case 1:
          tmp$ = this.r_0[1] & this.r_0[3] | this.r_0[2] & ~this.r_0[3];
          break;
        case 2:
          tmp$ = this.r_0[1] ^ this.r_0[2] ^ this.r_0[3];
          break;
        case 3:
          tmp$ = this.r_0[2] ^ (this.r_0[1] | ~this.r_0[3]);
          break;
        default:tmp$ = 0;
          break;
      }
      var f = tmp$;
      switch (d16) {
        case 0:
          tmp$_0 = j_1;
          break;
        case 1:
          tmp$_0 = (j_1 * 5 | 0) + 1 & 15;
          break;
        case 2:
          tmp$_0 = (j_1 * 3 | 0) + 5 & 15;
          break;
        case 3:
          tmp$_0 = (j_1 * 7 | 0) & 15;
          break;
        default:tmp$_0 = 0;
          break;
      }
      var bi = tmp$_0;
      var temp = this.r_0[1] + rotateLeft(this.r_0[0] + f + this.b_0[bi] + MD5$Companion_getInstance().T_0[j_1] | 0, MD5$Companion_getInstance().S_0[d16 << 2 | j_1 & 3]) | 0;
      this.r_0[0] = this.r_0[3];
      this.r_0[3] = this.r_0[2];
      this.r_0[2] = this.r_0[1];
      this.r_0[1] = temp;
    }
    for (var j_2 = 0; j_2 < 4; j_2++) {
      tmp$_1 = this.r_0;
      tmp$_1[j_2] = tmp$_1[j_2] + this.o_0[j_2] | 0;
    }
  };
  MD5.prototype.corePadding_s8cxhz$ = function (totalWritten) {
    var numberOfBlocks = totalWritten.add(Kotlin.Long.fromInt(8)).div(Kotlin.Long.fromInt(this.chunkSize)).add(Kotlin.Long.fromInt(1));
    var totalWrittenBits = totalWritten.multiply(Kotlin.Long.fromInt(8));
    var $receiver = new Int8Array(numberOfBlocks.multiply(Kotlin.Long.fromInt(this.chunkSize)).subtract(totalWritten).toInt());
    $receiver[0] = toByte(128);
    for (var i = 0; i < 8; i++)
      $receiver[$receiver.length - 8 + i | 0] = toByte(totalWrittenBits.shiftRightUnsigned(8 * i | 0).toInt());
    return $receiver;
  };
  MD5.prototype.coreDigest_fqrh44$ = function (out) {
    for (var it = 0; it < 16; it++)
      out[it] = toByte(this.r_0[it / 4 | 0] >>> (it % 4 * 8 | 0));
  };
  MD5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MD5',
    interfaces: [Hash]
  };
  function md5($receiver) {
    return hash($receiver, MD5$Companion_getInstance());
  }
  function SHA(chunkSize, digestSize) {
    Hash.call(this, chunkSize, digestSize);
  }
  SHA.prototype.corePadding_s8cxhz$ = function (totalWritten) {
    var tail = totalWritten.modulo(Kotlin.Long.fromInt(64));
    var padding = Kotlin.Long.fromInt(64).subtract(tail).toNumber() >= 9 ? Kotlin.Long.fromInt(64).subtract(tail) : Kotlin.Long.fromInt(128).subtract(tail);
    var $receiver = new Int8Array(padding.toInt());
    $receiver[0] = toByte(128);
    var pad = $receiver;
    var bits = totalWritten.multiply(Kotlin.Long.fromInt(8));
    for (var i = 0; i < 8; i++)
      pad[pad.length - 1 - i | 0] = toByte(bits.shiftRightUnsigned(8 * i | 0).and(L255).toInt());
    return pad;
  };
  SHA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SHA',
    interfaces: [Hash]
  };
  function SHA1() {
    SHA1$Companion_getInstance();
    SHA.call(this, 64, 20);
    this.w_0 = new Int32Array(80);
    this.h_0 = new Int32Array(5);
    this.coreReset();
  }
  function SHA1$Companion() {
    SHA1$Companion_instance = this;
    HashFactory.call(this, SHA1$SHA1$Companion_init$lambda);
    this.H_0 = new Int32Array([1732584193, -271733879, -1732584194, 271733878, -1009589776]);
    this.K0020_0 = 1518500249;
    this.K2040_0 = 1859775393;
    this.K4060_0 = -1894007588;
    this.K6080_0 = -899497514;
  }
  function SHA1$SHA1$Companion_init$lambda() {
    return new SHA1();
  }
  SHA1$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HashFactory]
  };
  var SHA1$Companion_instance = null;
  function SHA1$Companion_getInstance() {
    if (SHA1$Companion_instance === null) {
      new SHA1$Companion();
    }
    return SHA1$Companion_instance;
  }
  SHA1.prototype.coreReset = function () {
    arraycopy_0(SHA1$Companion_getInstance().H_0, 0, this.h_0, 0, 5);
  };
  SHA1.prototype.coreUpdate_fqrh44$ = function (chunk) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    for (var j = 0; j < 16; j++)
      this.w_0[j] = readS32_be(chunk, j * 4 | 0);
    for (var j_0 = 16; j_0 < 80; j_0++)
      this.w_0[j_0] = rotateLeft(this.w_0[j_0 - 3 | 0] ^ this.w_0[j_0 - 8 | 0] ^ this.w_0[j_0 - 14 | 0] ^ this.w_0[j_0 - 16 | 0], 1);
    var a = this.h_0[0];
    var b = this.h_0[1];
    var c = this.h_0[2];
    var d = this.h_0[3];
    var e = this.h_0[4];
    for (var j_1 = 0; j_1 < 80; j_1++) {
      tmp$_0 = rotateLeft(a, 5) + e + this.w_0[j_1] | 0;
      switch (j_1 / 20 | 0) {
        case 0:
          tmp$ = (b & c | ~b & d) + 1518500249 | 0;
          break;
        case 1:
          tmp$ = (b ^ c ^ d) + 1859775393 | 0;
          break;
        case 2:
          tmp$ = (b & c ^ b & d ^ c & d) + -1894007588 | 0;
          break;
        default:tmp$ = (b ^ c ^ d) + -899497514 | 0;
          break;
      }
      var temp = tmp$_0 + tmp$ | 0;
      e = d;
      d = c;
      c = rotateLeft(b, 30);
      b = a;
      a = temp;
    }
    tmp$_1 = this.h_0;
    tmp$_1[0] = tmp$_1[0] + a | 0;
    tmp$_2 = this.h_0;
    tmp$_2[1] = tmp$_2[1] + b | 0;
    tmp$_3 = this.h_0;
    tmp$_3[2] = tmp$_3[2] + c | 0;
    tmp$_4 = this.h_0;
    tmp$_4[3] = tmp$_4[3] + d | 0;
    tmp$_5 = this.h_0;
    tmp$_5[4] = tmp$_5[4] + e | 0;
  };
  SHA1.prototype.coreDigest_fqrh44$ = function (out) {
    for (var n = 0; n !== out.length; ++n) {
      out[n] = toByte(this.h_0[n / 4 | 0] >>> 24 - (8 * (n % 4) | 0));
    }
  };
  SHA1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SHA1',
    interfaces: [SHA]
  };
  function sha1($receiver) {
    return hash($receiver, SHA1$Companion_getInstance());
  }
  function SHA256() {
    SHA256$Companion_getInstance();
    SHA.call(this, 64, 32);
    this.h_0 = new Int32Array(8);
    this.r_0 = new Int32Array(8);
    this.w_0 = new Int32Array(64);
    this.coreReset();
  }
  function SHA256$Companion() {
    SHA256$Companion_instance = this;
    HashFactory.call(this, SHA256$SHA256$Companion_init$lambda);
    this.H_0 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
    this.K_0 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  function SHA256$SHA256$Companion_init$lambda() {
    return new SHA256();
  }
  SHA256$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HashFactory]
  };
  var SHA256$Companion_instance = null;
  function SHA256$Companion_getInstance() {
    if (SHA256$Companion_instance === null) {
      new SHA256$Companion();
    }
    return SHA256$Companion_instance;
  }
  SHA256.prototype.coreReset = function () {
    arraycopy_0(SHA256$Companion_getInstance().H_0, 0, this.h_0, 0, 8);
  };
  SHA256.prototype.coreUpdate_fqrh44$ = function (chunk) {
    var tmp$;
    arraycopy_0(this.h_0, 0, this.r_0, 0, 8);
    for (var j = 0; j < 16; j++)
      this.w_0[j] = readS32_be(chunk, j * 4 | 0);
    for (var j_0 = 16; j_0 < 64; j_0++) {
      var s0 = rotateRight(this.w_0[j_0 - 15 | 0], 7) ^ rotateRight(this.w_0[j_0 - 15 | 0], 18) ^ this.w_0[j_0 - 15 | 0] >>> 3;
      var s1 = rotateRight(this.w_0[j_0 - 2 | 0], 17) ^ rotateRight(this.w_0[j_0 - 2 | 0], 19) ^ this.w_0[j_0 - 2 | 0] >>> 10;
      this.w_0[j_0] = this.w_0[j_0 - 16 | 0] + s0 + this.w_0[j_0 - 7 | 0] + s1 | 0;
    }
    for (var j_1 = 0; j_1 < 64; j_1++) {
      var s1_0 = rotateRight(this.r_0[4], 6) ^ rotateRight(this.r_0[4], 11) ^ rotateRight(this.r_0[4], 25);
      var ch = this.r_0[4] & this.r_0[5] ^ ~this.r_0[4] & this.r_0[6];
      var t1 = this.r_0[7] + s1_0 + ch + SHA256$Companion_getInstance().K_0[j_1] + this.w_0[j_1] | 0;
      var s0_0 = rotateRight(this.r_0[0], 2) ^ rotateRight(this.r_0[0], 13) ^ rotateRight(this.r_0[0], 22);
      var maj = this.r_0[0] & this.r_0[1] ^ this.r_0[0] & this.r_0[2] ^ this.r_0[1] & this.r_0[2];
      var t2 = s0_0 + maj | 0;
      this.r_0[7] = this.r_0[6];
      this.r_0[6] = this.r_0[5];
      this.r_0[5] = this.r_0[4];
      this.r_0[4] = this.r_0[3] + t1 | 0;
      this.r_0[3] = this.r_0[2];
      this.r_0[2] = this.r_0[1];
      this.r_0[1] = this.r_0[0];
      this.r_0[0] = t1 + t2 | 0;
    }
    for (var j_2 = 0; j_2 < 8; j_2++) {
      tmp$ = this.h_0;
      tmp$[j_2] = tmp$[j_2] + this.r_0[j_2] | 0;
    }
  };
  SHA256.prototype.coreDigest_fqrh44$ = function (out) {
    for (var n = 0; n !== out.length; ++n) {
      out[n] = toByte(this.h_0[n / 4 | 0] >>> 24 - (8 * (n % 4) | 0));
    }
  };
  SHA256.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SHA256',
    interfaces: [SHA]
  };
  function sha256($receiver) {
    return hash($receiver, SHA256$Companion_getInstance());
  }
  var randomUnittesting;
  function SecureRandom() {
    SecureRandom$Companion_getInstance();
    Random.call(this);
    this.temp_4kgcwh$_0 = new Int8Array(4);
  }
  function SecureRandom$Companion() {
    SecureRandom$Companion_instance = this;
    SecureRandom.call(this);
  }
  SecureRandom$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SecureRandom]
  };
  var SecureRandom$Companion_instance = null;
  function SecureRandom$Companion_getInstance() {
    if (SecureRandom$Companion_instance === null) {
      new SecureRandom$Companion();
    }
    return SecureRandom$Companion_instance;
  }
  SecureRandom.prototype.getInt_8h2afg$_0 = function () {
    fillRandomBytes(this.temp_4kgcwh$_0);
    var a = this.temp_4kgcwh$_0[0] & 255;
    var b = this.temp_4kgcwh$_0[1] & 255;
    var c = this.temp_4kgcwh$_0[2] & 255;
    var d = this.temp_4kgcwh$_0[3] & 255;
    return a << 24 | b << 16 | c << 8 | d << 0;
  };
  SecureRandom.prototype.nextBytes_mj6st8$$default = function (array, fromIndex, toIndex) {
    var random = new Int8Array(toIndex - fromIndex | 0);
    fillRandomBytes(random);
    arraycopy(random, 0, array, fromIndex, random.length);
    return array;
  };
  SecureRandom.prototype.nextBits_za3lpa$ = function (bitCount) {
    return this.getInt_8h2afg$_0() & (1 << bitCount) - 1;
  };
  SecureRandom.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SecureRandom',
    interfaces: [Random]
  };
  var ext8 = defineInlineFunction('krypto-root-krypto.com.soywiz.krypto.internal.ext8_b6l1hq$', function ($receiver, offset) {
    return $receiver >>> offset & 255;
  });
  function rotateRight($receiver, amount) {
    return $receiver >>> amount | $receiver << 32 - amount;
  }
  function rotateLeft($receiver, bits) {
    return $receiver << bits | $receiver >>> 32 - bits;
  }
  function arraycopy(src, srcPos, dst, dstPos, count) {
    arrayCopy(src, dst, dstPos, srcPos, srcPos + count | 0);
    return dst;
  }
  function arraycopy_0(src, srcPos, dst, dstPos, count) {
    arrayCopy(src, dst, dstPos, srcPos, srcPos + count | 0);
    return dst;
  }
  function readU8($receiver, o) {
    return $receiver[o] & 255;
  }
  function readS32_be($receiver, o) {
    return readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
  }
  var KRYPTO_VERSION;
  function isNodeJs$lambda() {
    return typeof process === 'object' && typeof require === 'function';
  }
  var isNodeJs;
  function get_isNodeJs() {
    return isNodeJs.value;
  }
  var global_0;
  function fillRandomBytes(array) {
    if (get_isNodeJs()) {
      require('crypto').randomFillSync(new Uint8Array(array.buffer));
    }
     else {
      global_0.crypto.getRandomValues(array);
    }
  }
  $$importsForInline$$['krypto-root-krypto'] = _;
  Object.defineProperty(AES, 'Companion', {
    get: AES$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$krypto = package$soywiz.krypto || (package$soywiz.krypto = {});
  package$krypto.AES_init_fqrh44$ = AES_init;
  package$krypto.AES = AES;
  package$krypto.HashFactory = HashFactory;
  package$krypto.Hash = Hash;
  package$krypto.hash_ke3gku$ = hash;
  Object.defineProperty(package$krypto, 'Krypto', {
    get: Krypto_getInstance
  });
  Object.defineProperty(MD5, 'Companion', {
    get: MD5$Companion_getInstance
  });
  package$krypto.MD5 = MD5;
  package$krypto.md5_964n91$ = md5;
  package$krypto.SHA = SHA;
  Object.defineProperty(SHA1, 'Companion', {
    get: SHA1$Companion_getInstance
  });
  package$krypto.SHA1 = SHA1;
  package$krypto.sha1_964n91$ = sha1;
  Object.defineProperty(SHA256, 'Companion', {
    get: SHA256$Companion_getInstance
  });
  package$krypto.SHA256 = SHA256;
  package$krypto.sha256_964n91$ = sha256;
  Object.defineProperty(package$krypto, 'randomUnittesting', {
    get: function () {
      return randomUnittesting;
    },
    set: function (value) {
      randomUnittesting = value;
    }
  });
  Object.defineProperty(SecureRandom, 'Companion', {
    get: SecureRandom$Companion_getInstance
  });
  package$krypto.SecureRandom = SecureRandom;
  var package$internal = package$krypto.internal || (package$krypto.internal = {});
  package$internal.ext8_b6l1hq$ = ext8;
  package$internal.rotateRight_b6l1hq$ = rotateRight;
  package$internal.rotateLeft_b6l1hq$ = rotateLeft;
  package$internal.arraycopy_lwkm2r$ = arraycopy;
  package$internal.arraycopy_3jsevz$ = arraycopy_0;
  package$internal.readU8_767k4w$ = readU8;
  package$internal.readS32_be_767k4w$ = readS32_be;
  Object.defineProperty(package$internal, 'KRYPTO_VERSION_8be2vx$', {
    get: function () {
      return KRYPTO_VERSION;
    }
  });
  package$krypto.fillRandomBytes_fqrh44$ = fillRandomBytes;
  randomUnittesting = false;
  KRYPTO_VERSION = '1.9.2';
  isNodeJs = lazy(isNodeJs$lambda);
  global_0 = typeof global !== 'undefined' ? global : self;
  Kotlin.defineModule('krypto-root-krypto', _);
  return _;
}));

//# sourceMappingURL=krypto-root-krypto.js.map
