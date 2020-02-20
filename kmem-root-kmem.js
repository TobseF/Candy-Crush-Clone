(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', 'kotlin'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('kotlin'));
    else {
        if (typeof kotlin === 'undefined') {
            throw new Error("Error loading module 'kmem-root-kmem'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kmem-root-kmem'.");
        }
        root['kmem-root-kmem'] = factory(typeof this['kmem-root-kmem'] === 'undefined' ? {} : this['kmem-root-kmem'], kotlin);
    }
}(this, function (_, Kotlin) {
    'use strict';
    var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
    var defineInlineFunction = Kotlin.defineInlineFunction;
    var wrapFunction = Kotlin.wrapFunction;
    var toByte = Kotlin.toByte;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var toBits = Kotlin.floatToBits;
    var rotateLeft = Kotlin.kotlin.rotateLeft_dqglrj$;
    var rotateLeft_0 = Kotlin.kotlin.rotateLeft_if0zpk$;
    var rotateRight = Kotlin.kotlin.rotateRight_dqglrj$;
    var toShort = Kotlin.toShort;
    var toChar = Kotlin.toChar;
    var L4294967295 = new Kotlin.Long(-1, 0);
    var countTrailingZeroBits = Kotlin.kotlin.countTrailingZeroBits_s8ev3n$;
    var L1 = Kotlin.Long.ONE;
    var UInt_init = Kotlin.kotlin.UInt;
    var Math_0 = Math;
    var Int8Array_init = Int8Array;
    var Int16Array_init = Int16Array;
    var Int32Array_init = Int32Array;
    var Float32Array_init = Float32Array;
    var Float64Array_init = Float64Array;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
    var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
    var Unit = Kotlin.kotlin.Unit;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var copyOfRange = Kotlin.kotlin.collections.copyOfRange_ietg8x$;
    var toRawBits = Kotlin.floatToRawBits;
    var toRawBits_0 = Kotlin.doubleToRawBits;
    var Kind_OBJECT = Kotlin.Kind.OBJECT;
    var ArrayBuffer_init = ArrayBuffer;
    var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
    var UShort_init = Kotlin.kotlin.UShort;
    var numberToInt = Kotlin.numberToInt;
    var round = Kotlin.kotlin.math.round_14dthe$;
    var L_2147483648 = Kotlin.Long.fromInt(-2147483648);
    var L2147483647 = Kotlin.Long.fromInt(2147483647);
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
    var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
    var isNaN_1 = Kotlin.kotlin.isNaN_yrwdxr$;
    var isInfinite_0 = Kotlin.kotlin.isInfinite_yrwdxr$;
    var L0 = Kotlin.Long.ZERO;
    var equals = Kotlin.equals;
    var arraycopy = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_vybhjg$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_3poh7i$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_m70dtq$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_nlwz52$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_ai5qaq$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_4 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_yp22ie$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_5 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_lvhpry$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_6 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_5ukzfm$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));
    var arraycopy_7 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.arraycopy_dgpv4k$', wrapFunction(function () {
        var Unit = Kotlin.kotlin.Unit;
        var wrapFunction = Kotlin.wrapFunction;
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        var arraycopy$lambda = wrapFunction(function () {
            var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
            return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
                return function () {
                    arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                    return Unit;
                };
            };
        });
        return function (src, srcPos, dst, dstPos, size) {
            arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        };
    }));

    function arrayfill(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        _arrayfill(array, value, start, end);
    }

    function arrayfill_0(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        _arrayfill_0(array, value, start, end);
    }

    function arrayfill_1(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        _arrayfill_1(array, value, start, end);
    }

    function arrayfill_2(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        array.fill(value, start, end);
    }

    function arrayfill_3(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        array.fill(value, start, end);
    }

    function arrayfill_4(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        array.fill(value, start, end);
    }

    function arrayfill_5(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        array.fill(value, start, end);
    }

    function arrayfill_6(array, value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = array.length;
        array.fill(value, start, end);
    }

    var fill = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_jfbbbd$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_iv3oks$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_py0txo$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_9l0r9l$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_wp4zxy$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_cjoi1f$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_6mk3ue$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_diwe25$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_htcctw$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_38ja29$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_4 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_tpuxuu$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_7lcbvb$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_5 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_nwy378$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_9c50fl$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));
    var fill_6 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fill_x4f2cq$', wrapFunction(function () {
        var arrayfill = _.com.soywiz.kmem.arrayfill_7e20el$;
        return function ($receiver, value, start, end) {
            if (start === void 0)
                start = 0;
            if (end === void 0)
                end = $receiver.length;
            arrayfill($receiver, value, start, end);
        };
    }));

    function UByteArrayInt(bytes) {
        this.bytes = bytes;
    }

    Object.defineProperty(UByteArrayInt.prototype, 'size', {
        get: function () {
            return this.bytes.length;
        }
    });
    UByteArrayInt.prototype.get_za3lpa$ = function (index) {
        return this.bytes[index] & 255;
    };
    UByteArrayInt.prototype.set_vux9f0$ = function (index, value) {
        this.bytes[index] = toByte(value);
    };
    UByteArrayInt.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'UByteArrayInt',
        interfaces: []
    };
    UByteArrayInt.prototype.unbox = function () {
        return this.bytes;
    };
    UByteArrayInt.prototype.toString = function () {
        return 'UByteArrayInt(bytes=' + Kotlin.toString(this.bytes) + ')';
    };
    UByteArrayInt.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.bytes) | 0;
        return result;
    };
    UByteArrayInt.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bytes, other.bytes))));
    };

    function UByteArrayInt_0(size) {
        return new UByteArrayInt(new Int8Array(size));
    }

    function asUByteArrayInt($receiver) {
        return new UByteArrayInt($receiver);
    }

    function asByteArray($receiver) {
        return $receiver.bytes;
    }

    function FloatArrayFromIntArray(base) {
        this.base = base;
    }

    FloatArrayFromIntArray.prototype.get_za3lpa$ = function (i) {
        var $receiver = this.base[i];
        return Kotlin.floatFromBits($receiver);
    };
    FloatArrayFromIntArray.prototype.set_24o109$ = function (i, v) {
        this.base[i] = toBits(v);
    };
    FloatArrayFromIntArray.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatArrayFromIntArray',
        interfaces: []
    };
    FloatArrayFromIntArray.prototype.unbox = function () {
        return this.base;
    };
    FloatArrayFromIntArray.prototype.toString = function () {
        return 'FloatArrayFromIntArray(base=' + Kotlin.toString(this.base) + ')';
    };
    FloatArrayFromIntArray.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.base) | 0;
        return result;
    };
    FloatArrayFromIntArray.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.base, other.base))));
    };

    function asFloatArray($receiver) {
        return new FloatArrayFromIntArray($receiver);
    }

    function asIntArray($receiver) {
        return $receiver.base;
    }

    var reinterpretAsInt = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.reinterpretAsInt_81szk$', wrapFunction(function () {
        var toBits = Kotlin.floatToBits;
        return function ($receiver) {
            return toBits($receiver);
        };
    }));
    var reinterpretAsLong = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.reinterpretAsLong_yrwdxr$', wrapFunction(function () {
        var toBits = Kotlin.doubleToBits;
        return function ($receiver) {
            return toBits($receiver);
        };
    }));
    var reinterpretAsFloat = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.reinterpretAsFloat_s8ev3n$', function ($receiver) {
        return Kotlin.floatFromBits($receiver);
    });
    var reinterpretAsDouble = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.reinterpretAsDouble_mts6qi$', function ($receiver) {
        return Kotlin.doubleFromBits($receiver);
    });

    function rotateLeft_1($receiver, bits) {
        return new UInt_init(rotateLeft($receiver.data, bits));
    }

    function rotateLeft_2($receiver, bits) {
        return rotateLeft($receiver, bits);
    }

    function rotateLeft_3($receiver, bits) {
        return rotateLeft_0($receiver, bits);
    }

    function rotateRight_0($receiver, bits) {
        return new UInt_init(rotateRight($receiver.data, bits));
    }

    function rotateRight_1($receiver, bits) {
        return rotateRight($receiver, bits);
    }

    function rotateRight_2($receiver, bits) {
        return rotateLeft_0($receiver, -bits | 0);
    }

    function reverseBytes($receiver) {
        var low = $receiver >>> 0 & 255;
        var high = $receiver >>> 8 & 255;
        return toShort(high & 255 | low << 8);
    }

    function reverseBytes_0($receiver) {
        return toChar(reverseBytes(toShort($receiver | 0)));
    }

    function reverseBytes_1($receiver) {
        var v0 = $receiver >>> 0 & 255;
        var v1 = $receiver >>> 8 & 255;
        var v2 = $receiver >>> 16 & 255;
        var v3 = $receiver >>> 24 & 255;
        return v0 << 24 | v1 << 16 | v2 << 8 | v3 << 0;
    }

    function reverseBytes_2($receiver) {
        var v0 = Kotlin.Long.fromInt(reverseBytes_1($receiver.shiftRightUnsigned(0).toInt())).and(L4294967295);
        var v1 = Kotlin.Long.fromInt(reverseBytes_1($receiver.shiftRightUnsigned(32).toInt())).and(L4294967295);
        return v0.shiftLeft(32).or(v1.shiftLeft(0));
    }

    function reverseBits($receiver) {
        var v = $receiver;
        v = v >>> 1 & 1431655765 | (v & 1431655765) << 1;
        v = v >>> 2 & 858993459 | (v & 858993459) << 2;
        v = v >>> 4 & 252645135 | (v & 252645135) << 4;
        v = v >>> 8 & 16711935 | (v & 16711935) << 8;
        v = v >>> 16 & 65535 | (v & 65535) << 16;
        return v;
    }

    function clz32(v) {
        return Math_0.clz32(v);
    }

    var countLeadingZeros = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.countLeadingZeros_s8ev3n$', wrapFunction(function () {
        var Math_0 = Math;
        return function ($receiver) {
            return Math_0.clz32($receiver);
        };
    }));

    function countTrailingZeros($receiver) {
        return countTrailingZeroBits($receiver);
    }

    function countLeadingOnes($receiver) {
        var $receiver_0 = ~$receiver;
        return Math_0.clz32($receiver_0);
    }

    function countTrailingOnes($receiver) {
        return countTrailingZeros(~$receiver);
    }

    function signExtend($receiver, bits) {
        return $receiver << 32 - bits >> 32 - bits;
    }

    function signExtend_0($receiver, bits) {
        return $receiver.shiftLeft(64 - bits | 0).shiftRight(64 - bits | 0);
    }

    function mask($receiver) {
        return (1 << $receiver) - 1 | 0;
    }

    function mask_0($receiver) {
        return L1.shiftLeft($receiver.toInt()).subtract(L1);
    }

    function extract($receiver, offset, count) {
        return $receiver >>> offset & mask(count);
    }

    function extract_0($receiver, offset) {
        return ($receiver >>> offset & 1) !== 0;
    }

    function extractBool($receiver, offset) {
        return extract_0($receiver, offset);
    }

    function extract8($receiver, offset) {
        return $receiver >>> offset & 255;
    }

    function extract16($receiver, offset) {
        return $receiver >>> offset & 65535;
    }

    function extractSigned($receiver, offset, count) {
        return signExtend($receiver >>> offset & mask(count), count);
    }

    function extract8Signed($receiver, offset) {
        return toByte($receiver >>> offset);
    }

    function extract16Signed($receiver, offset) {
        return toShort($receiver >>> offset);
    }

    function extractByte($receiver, offset) {
        return toByte($receiver >>> offset);
    }

    function extractShort($receiver, offset) {
        return toShort($receiver >>> offset);
    }

    function extractScaled($receiver, offset, count, scale) {
        return Kotlin.imul(extract($receiver, offset, count), scale) / mask(count) | 0;
    }

    function extractScaledf01($receiver, offset, count) {
        return extract($receiver, offset, count) / mask(count);
    }

    function extractScaledFF($receiver, offset, count) {
        return extractScaled($receiver, offset, count, 255);
    }

    function extractScaledFFDefault($receiver, offset, count, default_0) {
        return count === 0 ? default_0 : extractScaled($receiver, offset, count, 255);
    }

    function insert($receiver, value, offset, count) {
        var mask_0 = mask(count);
        var clearValue = $receiver & ~(mask_0 << offset);
        return clearValue | (value & mask_0) << offset;
    }

    function insert8($receiver, value, offset) {
        return insert($receiver, value, offset, 8);
    }

    function insert_0($receiver, value, offset) {
        return insert($receiver, value ? 1 : 0, offset, 1);
    }

    function insertScaled($receiver, value, offset, count, scale) {
        return insert($receiver, Kotlin.imul(value, mask(count)) / scale | 0, offset, count);
    }

    function insertScaledFF($receiver, value, offset, count) {
        return count === 0 ? $receiver : insertScaled($receiver, value, offset, count, 255);
    }

    function hasFlags($receiver, bits) {
        return ($receiver & bits) === bits;
    }

    function bit(bit) {
        return 1 << bit;
    }

    function unsetBits($receiver, bits) {
        return $receiver & ~bits;
    }

    function setBits($receiver, bits) {
        return $receiver | bits;
    }

    function sliceInt8Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 1 | 0) - offset | 0;
        }
        return new Int8Array_init($receiver, offset * 1 | 0, size);
    }

    function sliceInt16Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 2 | 0) - offset | 0;
        }
        return new Int16Array_init($receiver, offset * 2 | 0, size);
    }

    function sliceInt32Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 4 | 0) - offset | 0;
        }
        return new Int32Array_init($receiver, offset * 4 | 0, size);
    }

    function sliceFloat32Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 4 | 0) - offset | 0;
        }
        return new Float32Array_init($receiver, offset * 4 | 0, size);
    }

    function sliceFloat64Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 8 | 0) - offset | 0;
        }
        return new Float64Array_init($receiver, offset * 8 | 0, size);
    }

    function sliceUint8Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 2 | 0) - offset | 0;
        }
        return new Uint8Buffer(new Int8Array_init($receiver, offset * 1 | 0, size));
    }

    function sliceUint16Buffer($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 2 | 0) - offset | 0;
        }
        return new Uint16Buffer(new Int16Array_init($receiver, offset * 2 | 0, size));
    }

    function sliceInt8BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 1 | 0) - (byteOffset / 1 | 0) | 0;
        }
        return new Int8Array_init($receiver, (byteOffset / 1 | 0) * 1 | 0, size);
    }

    function sliceInt16BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 2 | 0) - (byteOffset / 2 | 0) | 0;
        }
        return new Int16Array_init($receiver, (byteOffset / 2 | 0) * 2 | 0, size);
    }

    function sliceInt32BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 4 | 0) - (byteOffset / 4 | 0) | 0;
        }
        return new Int32Array_init($receiver, (byteOffset / 4 | 0) * 4 | 0, size);
    }

    function sliceFloat32BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 4 | 0) - (byteOffset / 4 | 0) | 0;
        }
        return new Float32Array_init($receiver, (byteOffset / 4 | 0) * 4 | 0, size);
    }

    function sliceFloat64BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 8 | 0) - (byteOffset / 8 | 0) | 0;
        }
        return new Float64Array_init($receiver, (byteOffset / 8 | 0) * 8 | 0, size);
    }

    function sliceUint8BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 2 | 0) - (byteOffset / 2 | 0) | 0;
        }
        return new Uint8Buffer(new Int8Array_init($receiver, (byteOffset / 2 | 0) * 1 | 0, size));
    }

    function sliceUint16BufferByteOffset($receiver, byteOffset, size) {
        if (byteOffset === void 0)
            byteOffset = 0;
        if (size === void 0) {
            size = ($receiver.byteLength / 2 | 0) - (byteOffset / 2 | 0) | 0;
        }
        return new Uint16Buffer(new Int16Array_init($receiver, (byteOffset / 2 | 0) * 2 | 0, size));
    }

    function asInt8Buffer($receiver) {
        return sliceInt8Buffer($receiver);
    }

    function asInt16Buffer($receiver) {
        return sliceInt16Buffer($receiver);
    }

    function asInt32Buffer($receiver) {
        return sliceInt32Buffer($receiver);
    }

    function asFloat32Buffer($receiver) {
        return sliceFloat32Buffer($receiver);
    }

    function asFloat64Buffer($receiver) {
        return sliceFloat64Buffer($receiver);
    }

    var Int8BufferAlloc = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.Int8BufferAlloc_za3lpa$', wrapFunction(function () {
        var sliceInt8Buffer = _.com.soywiz.kmem.sliceInt8Buffer_3gn6rj$;
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return sliceInt8Buffer(new ArrayBuffer_init(size * 1 | 0));
        };
    }));

    function subarray($receiver, begin, end) {
        if (end === void 0) {
            end = $receiver.length;
        }
        return sliceInt8Buffer($receiver.buffer, ($receiver.byteOffset / 1 | 0) + begin | 0, end - begin | 0);
    }

    var Int16BufferAlloc = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.Int16BufferAlloc_za3lpa$', wrapFunction(function () {
        var sliceInt16Buffer = _.com.soywiz.kmem.sliceInt16Buffer_3gn6rj$;
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return sliceInt16Buffer(new ArrayBuffer_init(size * 2 | 0));
        };
    }));

    function subarray_0($receiver, begin, end) {
        if (end === void 0) {
            end = $receiver.length;
        }
        return sliceInt16Buffer($receiver.buffer, ($receiver.byteOffset / 2 | 0) + begin | 0, end - begin | 0);
    }

    var Int32BufferAlloc = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.Int32BufferAlloc_za3lpa$', wrapFunction(function () {
        var sliceInt32Buffer = _.com.soywiz.kmem.sliceInt32Buffer_3gn6rj$;
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return sliceInt32Buffer(new ArrayBuffer_init(size * 4 | 0));
        };
    }));

    function subarray_1($receiver, begin, end) {
        if (end === void 0) {
            end = $receiver.length;
        }
        return sliceInt32Buffer($receiver.buffer, ($receiver.byteOffset / 4 | 0) + begin | 0, end - begin | 0);
    }

    var Float32BufferAlloc = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.Float32BufferAlloc_za3lpa$', wrapFunction(function () {
        var sliceFloat32Buffer = _.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return sliceFloat32Buffer(new ArrayBuffer_init(size * 4 | 0));
        };
    }));

    function subarray_2($receiver, begin, end) {
        if (end === void 0) {
            end = $receiver.length;
        }
        return sliceFloat32Buffer($receiver.buffer, ($receiver.byteOffset / 4 | 0) + begin | 0, end - begin | 0);
    }

    var Float64BufferAlloc = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.Float64BufferAlloc_za3lpa$', wrapFunction(function () {
        var sliceFloat64Buffer = _.com.soywiz.kmem.sliceFloat64Buffer_3gn6rj$;
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return sliceFloat64Buffer(new ArrayBuffer_init(size * 8 | 0));
        };
    }));

    function subarray_3($receiver, begin, end) {
        if (end === void 0) {
            end = $receiver.length;
        }
        return sliceFloat64Buffer($receiver.buffer, ($receiver.byteOffset / 8 | 0) + begin | 0, end - begin | 0);
    }

    function arraycopy_8(src, srcPos, dst, dstPos, size) {
        arraycopy_23(src.buffer, srcPos * 1 | 0, dst.buffer, dstPos * 1 | 0, size * 1 | 0);
    }

    function arraycopy_9(src, srcPos, dst, dstPos, size) {
        arraycopy_24(src, srcPos, dst.buffer, dstPos, size);
    }

    function arraycopy_10(src, srcPos, dst, dstPos, size) {
        arraycopy_25(src.buffer, srcPos, dst, dstPos, size);
    }

    function arraycopy_11(src, srcPos, dst, dstPos, size) {
        arraycopy_23(src.buffer, srcPos * 2 | 0, dst.buffer, dstPos * 2 | 0, size * 2 | 0);
    }

    function arraycopy_12(src, srcPos, dst, dstPos, size) {
        arraycopy_26(src, srcPos, dst.buffer, dstPos, size);
    }

    function arraycopy_13(src, srcPos, dst, dstPos, size) {
        arraycopy_27(src.buffer, srcPos, dst, dstPos, size);
    }

    function arraycopy_14(src, srcPos, dst, dstPos, size) {
        arraycopy_23(src.buffer, srcPos * 4 | 0, dst.buffer, dstPos * 4 | 0, size * 4 | 0);
    }

    function arraycopy_15(src, srcPos, dst, dstPos, size) {
        arraycopy_28(src, srcPos, dst.buffer, dstPos, size);
    }

    function arraycopy_16(src, srcPos, dst, dstPos, size) {
        arraycopy_29(src.buffer, srcPos, dst, dstPos, size);
    }

    function arraycopy_17(src, srcPos, dst, dstPos, size) {
        arraycopy_23(src.buffer, srcPos * 4 | 0, dst.buffer, dstPos * 4 | 0, size * 4 | 0);
    }

    function arraycopy_18(src, srcPos, dst, dstPos, size) {
        arraycopy_30(src, srcPos, dst.buffer, dstPos, size);
    }

    function arraycopy_19(src, srcPos, dst, dstPos, size) {
        arraycopy_31(src.buffer, srcPos, dst, dstPos, size);
    }

    function arraycopy_20(src, srcPos, dst, dstPos, size) {
        arraycopy_23(src.buffer, srcPos * 8 | 0, dst.buffer, dstPos * 8 | 0, size * 8 | 0);
    }

    function arraycopy_21(src, srcPos, dst, dstPos, size) {
        arraycopy_32(src, srcPos, dst.buffer, dstPos, size);
    }

    function arraycopy_22(src, srcPos, dst, dstPos, size) {
        arraycopy_33(src.buffer, srcPos, dst, dstPos, size);
    }

    function NewUint8Buffer(mem, offset, len) {
        return sliceUint8Buffer(mem, offset, len);
    }

    function NewUint16Buffer(mem, offset, len) {
        return sliceUint16Buffer(mem, offset, len);
    }

    function NewInt8Buffer(mem, offset, len) {
        return sliceInt8Buffer(mem, offset, len);
    }

    function NewInt16Buffer(mem, offset, len) {
        return sliceInt16Buffer(mem, offset, len);
    }

    function NewInt32Buffer(mem, offset, len) {
        return sliceInt32Buffer(mem, offset, len);
    }

    function NewFloat32Buffer(mem, offset, len) {
        return sliceFloat32Buffer(mem, offset, len);
    }

    function NewFloat64Buffer(mem, offset, len) {
        return sliceFloat64Buffer(mem, offset, len);
    }

    var arraycopy$lambda = wrapFunction(function () {
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
            return function () {
                arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                return Unit;
            };
        };
    });

    function ByteArrayBuilder(data, size, allowGrow) {
        if (size === void 0)
            size = data.length;
        if (allowGrow === void 0)
            allowGrow = true;
        this.data = data;
        this.allowGrow = allowGrow;
        this._size_0 = size;
    }

    Object.defineProperty(ByteArrayBuilder.prototype, 'size', {
        get: function () {
            return this._size_0;
        },
        set: function (value) {
            var oldPosition = this._size_0;
            var newPosition = value;
            this.ensure_0(newPosition);
            this._size_0 = newPosition;
            if (newPosition > oldPosition) {
                arrayfill_2(this.data, 0, oldPosition, newPosition);
            }
        }
    });
    ByteArrayBuilder.prototype.ensure_0 = function (expected) {
        if (this.data.length < expected) {
            if (!this.allowGrow)
                throw RuntimeException_init('ByteArrayBuffer configured to not grow!');
            var tmp$ = this.data;
            var b = (this.data.length + 7 | 0) * 5 | 0;
            this.data = copyOf(tmp$, Math_0.max(expected, b));
        }
    };
    ByteArrayBuilder.prototype.prepare_0 = function (count, callback) {
        this.ensure_0(this._size_0 + count | 0);
        var $receiver = callback();
        this._size_0 = this._size_0 + count | 0;
        return $receiver;
    };
    ByteArrayBuilder.prototype.append_mj6st8$ = function (array, offset, len) {
        if (offset === void 0)
            offset = 0;
        if (len === void 0)
            len = array.length - offset | 0;
        this.ensure_0(this._size_0 + len | 0);
        arrayCopy(array, this.data, this._size_0, offset, offset + len | 0);
        this._size_0 = this._size_0 + len | 0;
    };
    ByteArrayBuilder.prototype.append_s8j3t7$ = function (v) {
        this.ensure_0(this._size_0 + 1 | 0);
        this.data[this._size_0] = v;
        this._size_0 = this._size_0 + 1 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.append_wcry4u$ = function (v) {
        this.append_mj6st8$(v);
    };
    ByteArrayBuilder.prototype.append_pmhfmb$ = function (v) {
        this.ensure_0(this._size_0 + v.length | 0);
        for (var n = 0; n < v.length; n++)
            this.data[this._size_0 + n | 0] = toByte(v[n]);
        this._size_0 = this._size_0 + v.length | 0;
        return this;
    };
    ByteArrayBuilder.prototype.appendByte_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 1 | 0);
        this.data[this._size_0] = toByte(v);
        this._size_0 = this._size_0 + 1 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s8_za3lpa$ = function (v) {
        return this.appendByte_za3lpa$(v);
    };
    ByteArrayBuilder.prototype.s16_fzusl$ = function (v, little) {
        this.ensure_0(this._size_0 + 2 | 0);
        write16(this.data, this._size_0, v, little);
        this._size_0 = this._size_0 + 2 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s16LE_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 2 | 0);
        write16LE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 2 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s16BE_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 2 | 0);
        write16BE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 2 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s24_fzusl$ = function (v, little) {
        this.ensure_0(this._size_0 + 3 | 0);
        write24(this.data, this._size_0, v, little);
        this._size_0 = this._size_0 + 3 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s24LE_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 3 | 0);
        write24LE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 3 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s24BE_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 3 | 0);
        write24BE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 3 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s32_fzusl$ = function (v, little) {
        this.ensure_0(this._size_0 + 4 | 0);
        write32(this.data, this._size_0, v, little);
        this._size_0 = this._size_0 + 4 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s32LE_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 4 | 0);
        write32LE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 4 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.s32BE_za3lpa$ = function (v) {
        this.ensure_0(this._size_0 + 4 | 0);
        write32BE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 4 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f16_7blcl0$ = function (v, little) {
        this.ensure_0(this._size_0 + 2 | 0);
        writeF16(this.data, this._size_0, v, little);
        this._size_0 = this._size_0 + 2 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f16LE_39kf7x$ = function (v) {
        this.ensure_0(this._size_0 + 2 | 0);
        writeF16LE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 2 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f16BE_39kf7x$ = function (v) {
        this.ensure_0(this._size_0 + 2 | 0);
        writeF16BE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 2 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f32_8ca0d4$ = function (v, little) {
        this.ensure_0(this._size_0 + 4 | 0);
        writeF32(this.data, this._size_0, v, little);
        this._size_0 = this._size_0 + 4 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f32LE_mx4ult$ = function (v) {
        this.ensure_0(this._size_0 + 4 | 0);
        writeF32LE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 4 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f32BE_mx4ult$ = function (v) {
        this.ensure_0(this._size_0 + 4 | 0);
        writeF32BE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 4 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f64_8555vt$ = function (v, little) {
        this.ensure_0(this._size_0 + 8 | 0);
        writeF64(this.data, this._size_0, v, little);
        this._size_0 = this._size_0 + 8 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f64LE_14dthe$ = function (v) {
        this.ensure_0(this._size_0 + 8 | 0);
        writeF64LE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 8 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.f64BE_14dthe$ = function (v) {
        this.ensure_0(this._size_0 + 8 | 0);
        writeF64BE(this.data, this._size_0, v);
        this._size_0 = this._size_0 + 8 | 0;
        return this;
    };
    ByteArrayBuilder.prototype.clear = function () {
        this._size_0 = 0;
    };
    ByteArrayBuilder.prototype.toByteArray = function () {
        return copyOf(this.data, this._size_0);
    };
    ByteArrayBuilder.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayBuilder',
        interfaces: []
    };

    function ByteArrayBuilder_init(initialCapacity, $this) {
        if (initialCapacity === void 0)
            initialCapacity = 4096;
        $this = $this || Object.create(ByteArrayBuilder.prototype);
        ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
        return $this;
    }

    function ByteArrayBuilderLE(bab) {
        this.bab = bab;
    }

    ByteArrayBuilderLE.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayBuilderLE',
        interfaces: []
    };
    ByteArrayBuilderLE.prototype.unbox = function () {
        return this.bab;
    };
    ByteArrayBuilderLE.prototype.toString = function () {
        return 'ByteArrayBuilderLE(bab=' + Kotlin.toString(this.bab) + ')';
    };
    ByteArrayBuilderLE.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.bab) | 0;
        return result;
    };
    ByteArrayBuilderLE.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bab, other.bab))));
    };

    function get_size($receiver) {
        return $receiver.bab.size;
    }

    function append($receiver, array, offset, len) {
        if (offset === void 0)
            offset = 0;
        if (len === void 0)
            len = array.length - offset | 0;
        $receiver.bab.append_mj6st8$(array, offset, len);
    }

    function append_0($receiver, v) {
        return $receiver.bab.append_s8j3t7$(v);
    }

    function appendByte($receiver, v) {
        return $receiver.bab.appendByte_za3lpa$(v);
    }

    function append_1($receiver, v) {
        $receiver.bab.append_wcry4u$(v.slice());
    }

    function append_2($receiver, v) {
        return $receiver.bab.append_pmhfmb$(v.slice());
    }

    function s8($receiver, v) {
        return $receiver.bab.s8_za3lpa$(v);
    }

    function s16($receiver, v) {
        return $receiver.bab.s16LE_za3lpa$(v);
    }

    function s24($receiver, v) {
        return $receiver.bab.s24LE_za3lpa$(v);
    }

    function s32($receiver, v) {
        return $receiver.bab.s32LE_za3lpa$(v);
    }

    function f16($receiver, v) {
        return $receiver.bab.f16LE_39kf7x$(v);
    }

    function f32($receiver, v) {
        return $receiver.bab.f32LE_mx4ult$(v);
    }

    function f64($receiver, v) {
        return $receiver.bab.f64LE_14dthe$(v);
    }

    function clear($receiver) {
        $receiver.bab.clear();
    }

    function toByteArray($receiver) {
        return $receiver.bab.toByteArray();
    }

    function ByteArrayBuilderBE(bab) {
        this.bab = bab;
    }

    ByteArrayBuilderBE.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayBuilderBE',
        interfaces: []
    };
    ByteArrayBuilderBE.prototype.unbox = function () {
        return this.bab;
    };
    ByteArrayBuilderBE.prototype.toString = function () {
        return 'ByteArrayBuilderBE(bab=' + Kotlin.toString(this.bab) + ')';
    };
    ByteArrayBuilderBE.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.bab) | 0;
        return result;
    };
    ByteArrayBuilderBE.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bab, other.bab))));
    };

    function get_size_0($receiver) {
        return $receiver.bab.size;
    }

    function append_3($receiver, array, offset, len) {
        if (offset === void 0)
            offset = 0;
        if (len === void 0)
            len = array.length - offset | 0;
        $receiver.bab.append_mj6st8$(array, offset, len);
    }

    function append_4($receiver, v) {
        return $receiver.bab.append_s8j3t7$(v);
    }

    function appendByte_0($receiver, v) {
        return $receiver.bab.appendByte_za3lpa$(v);
    }

    function append_5($receiver, v) {
        $receiver.bab.append_wcry4u$(v.slice());
    }

    function append_6($receiver, v) {
        return $receiver.bab.append_pmhfmb$(v.slice());
    }

    function s8_0($receiver, v) {
        return $receiver.bab.s8_za3lpa$(v);
    }

    function s16_0($receiver, v) {
        return $receiver.bab.s16BE_za3lpa$(v);
    }

    function s24_0($receiver, v) {
        return $receiver.bab.s24BE_za3lpa$(v);
    }

    function s32_0($receiver, v) {
        return $receiver.bab.s32BE_za3lpa$(v);
    }

    function f16_0($receiver, v) {
        return $receiver.bab.f16BE_39kf7x$(v);
    }

    function f32_0($receiver, v) {
        return $receiver.bab.f32BE_mx4ult$(v);
    }

    function f64_0($receiver, v) {
        return $receiver.bab.f64BE_14dthe$(v);
    }

    function clear_0($receiver) {
        $receiver.bab.clear();
    }

    function toByteArray_0($receiver) {
        return $receiver.bab.toByteArray();
    }

    var buildByteArray = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.buildByteArray_j0ynu3$', wrapFunction(function () {
        var ByteArrayBuilder_init = _.com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
        return function (capacity, callback) {
            if (capacity === void 0)
                capacity = 4096;
            var $receiver = ByteArrayBuilder_init(capacity);
            callback($receiver);
            return $receiver.toByteArray();
        };
    }));
    var buildByteArrayLE = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.buildByteArrayLE_ko6uck$', wrapFunction(function () {
        var ByteArrayBuilder_init = _.com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
        var ByteArrayBuilderLE_init = _.com.soywiz.kmem.ByteArrayBuilderLE;
        var toByteArray = _.com.soywiz.kmem.toByteArray_nzkyce$;
        return function (capacity, callback) {
            if (capacity === void 0)
                capacity = 4096;
            var $receiver = new ByteArrayBuilderLE_init(ByteArrayBuilder_init(capacity));
            callback($receiver);
            return toByteArray($receiver);
        };
    }));
    var buildByteArrayBE = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.buildByteArrayBE_y2nzam$', wrapFunction(function () {
        var ByteArrayBuilder_init = _.com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
        var ByteArrayBuilderBE_init = _.com.soywiz.kmem.ByteArrayBuilderBE;
        var toByteArray = _.com.soywiz.kmem.toByteArray_nzkqxg$;
        return function (capacity, callback) {
            if (capacity === void 0)
                capacity = 4096;
            var $receiver = new ByteArrayBuilderBE_init(ByteArrayBuilder_init(capacity));
            callback($receiver);
            return toByteArray($receiver);
        };
    }));
    var arraycopy$lambda_0 = wrapFunction(function () {
        var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
        return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
            return function () {
                arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
                return Unit;
            };
        };
    });

    function u8($receiver, o) {
        return $receiver[o] & 255;
    }

    function read16LE($receiver, o) {
        return u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8;
    }

    function read24LE($receiver, o) {
        return u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16;
    }

    function read32LE($receiver, o) {
        return u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16 | u8($receiver, o + 3 | 0) << 24;
    }

    var read64LE = wrapFunction(function () {
        var L4294967295 = new Kotlin.Long(-1, 0);
        return function ($receiver, o) {
            var o_0 = o + 0 | 0;
            var o_1 = o + 4 | 0;
            return Kotlin.Long.fromInt(u8($receiver, o_0 + 0 | 0) << 0 | u8($receiver, o_0 + 1 | 0) << 8 | u8($receiver, o_0 + 2 | 0) << 16 | u8($receiver, o_0 + 3 | 0) << 24).and(L4294967295).shiftLeft(0).or(Kotlin.Long.fromInt(u8($receiver, o_1 + 0 | 0) << 0 | u8($receiver, o_1 + 1 | 0) << 8 | u8($receiver, o_1 + 2 | 0) << 16 | u8($receiver, o_1 + 3 | 0) << 24).and(L4294967295).shiftLeft(32));
        };
    });

    function read16BE($receiver, o) {
        return u8($receiver, o + 1 | 0) << 0 | u8($receiver, o + 0 | 0) << 8;
    }

    function read24BE($receiver, o) {
        return u8($receiver, o + 2 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 0 | 0) << 16;
    }

    function read32BE($receiver, o) {
        return u8($receiver, o + 3 | 0) << 0 | u8($receiver, o + 2 | 0) << 8 | u8($receiver, o + 1 | 0) << 16 | u8($receiver, o + 0 | 0) << 24;
    }

    var read64BE = wrapFunction(function () {
        var L4294967295 = new Kotlin.Long(-1, 0);
        return function ($receiver, o) {
            var o_0 = o + 4 | 0;
            var o_1 = o + 0 | 0;
            return Kotlin.Long.fromInt(u8($receiver, o_0 + 3 | 0) << 0 | u8($receiver, o_0 + 2 | 0) << 8 | u8($receiver, o_0 + 1 | 0) << 16 | u8($receiver, o_0 + 0 | 0) << 24).and(L4294967295).shiftLeft(0).or(Kotlin.Long.fromInt(u8($receiver, o_1 + 3 | 0) << 0 | u8($receiver, o_1 + 2 | 0) << 8 | u8($receiver, o_1 + 1 | 0) << 16 | u8($receiver, o_1 + 0 | 0) << 24).and(L4294967295).shiftLeft(32));
        };
    });

    function readU8($receiver, o) {
        return u8($receiver, o);
    }

    function readU16LE($receiver, o) {
        return u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8;
    }

    function readU24LE($receiver, o) {
        return u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16;
    }

    function readU32LE($receiver, o) {
        return Kotlin.Long.fromInt(u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16 | u8($receiver, o + 3 | 0) << 24).and(L4294967295);
    }

    function readU16BE($receiver, o) {
        return u8($receiver, o + 1 | 0) << 0 | u8($receiver, o + 0 | 0) << 8;
    }

    function readU24BE($receiver, o) {
        return u8($receiver, o + 2 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 0 | 0) << 16;
    }

    function readU32BE($receiver, o) {
        return Kotlin.Long.fromInt(u8($receiver, o + 3 | 0) << 0 | u8($receiver, o + 2 | 0) << 8 | u8($receiver, o + 1 | 0) << 16 | u8($receiver, o + 0 | 0) << 24).and(L4294967295);
    }

    function readS8($receiver, o) {
        return $receiver[o];
    }

    function readS16LE($receiver, o) {
        return signExtend(u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8, 16);
    }

    function readS24LE($receiver, o) {
        return signExtend(u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16, 24);
    }

    function readS32LE($receiver, o) {
        return u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16 | u8($receiver, o + 3 | 0) << 24;
    }

    function readS64LE($receiver, o) {
        var o_0 = o + 0 | 0;
        var o_1 = o + 4 | 0;
        return Kotlin.Long.fromInt(u8($receiver, o_0 + 0 | 0) << 0 | u8($receiver, o_0 + 1 | 0) << 8 | u8($receiver, o_0 + 2 | 0) << 16 | u8($receiver, o_0 + 3 | 0) << 24).and(L4294967295).shiftLeft(0).or(Kotlin.Long.fromInt(u8($receiver, o_1 + 0 | 0) << 0 | u8($receiver, o_1 + 1 | 0) << 8 | u8($receiver, o_1 + 2 | 0) << 16 | u8($receiver, o_1 + 3 | 0) << 24).and(L4294967295).shiftLeft(32));
    }

    function readF16LE($receiver, o) {
        return Float16$Companion_getInstance().fromBits_za3lpa$(u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8);
    }

    function readF32LE($receiver, o) {
        var bits = u8($receiver, o + 0 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 2 | 0) << 16 | u8($receiver, o + 3 | 0) << 24;
        return Kotlin.floatFromBits(bits);
    }

    function readF64LE($receiver, o) {
        var o_0 = o + 0 | 0;
        var o_1 = o + 4 | 0;
        var bits = Kotlin.Long.fromInt(u8($receiver, o_0 + 0 | 0) << 0 | u8($receiver, o_0 + 1 | 0) << 8 | u8($receiver, o_0 + 2 | 0) << 16 | u8($receiver, o_0 + 3 | 0) << 24).and(L4294967295).shiftLeft(0).or(Kotlin.Long.fromInt(u8($receiver, o_1 + 0 | 0) << 0 | u8($receiver, o_1 + 1 | 0) << 8 | u8($receiver, o_1 + 2 | 0) << 16 | u8($receiver, o_1 + 3 | 0) << 24).and(L4294967295).shiftLeft(32));
        return Kotlin.doubleFromBits(bits);
    }

    function readS16BE($receiver, o) {
        return signExtend(u8($receiver, o + 1 | 0) << 0 | u8($receiver, o + 0 | 0) << 8, 16);
    }

    function readS24BE($receiver, o) {
        return signExtend(u8($receiver, o + 2 | 0) << 0 | u8($receiver, o + 1 | 0) << 8 | u8($receiver, o + 0 | 0) << 16, 24);
    }

    function readS32BE($receiver, o) {
        return u8($receiver, o + 3 | 0) << 0 | u8($receiver, o + 2 | 0) << 8 | u8($receiver, o + 1 | 0) << 16 | u8($receiver, o + 0 | 0) << 24;
    }

    function readS64BE($receiver, o) {
        var o_0 = o + 4 | 0;
        var o_1 = o + 0 | 0;
        return Kotlin.Long.fromInt(u8($receiver, o_0 + 3 | 0) << 0 | u8($receiver, o_0 + 2 | 0) << 8 | u8($receiver, o_0 + 1 | 0) << 16 | u8($receiver, o_0 + 0 | 0) << 24).and(L4294967295).shiftLeft(0).or(Kotlin.Long.fromInt(u8($receiver, o_1 + 3 | 0) << 0 | u8($receiver, o_1 + 2 | 0) << 8 | u8($receiver, o_1 + 1 | 0) << 16 | u8($receiver, o_1 + 0 | 0) << 24).and(L4294967295).shiftLeft(32));
    }

    function readF16BE($receiver, o) {
        return Float16$Companion_getInstance().fromBits_za3lpa$(u8($receiver, o + 1 | 0) << 0 | u8($receiver, o + 0 | 0) << 8);
    }

    function readF32BE($receiver, o) {
        var bits = u8($receiver, o + 3 | 0) << 0 | u8($receiver, o + 2 | 0) << 8 | u8($receiver, o + 1 | 0) << 16 | u8($receiver, o + 0 | 0) << 24;
        return Kotlin.floatFromBits(bits);
    }

    function readF64BE($receiver, o) {
        var o_0 = o + 4 | 0;
        var o_1 = o + 0 | 0;
        var bits = Kotlin.Long.fromInt(u8($receiver, o_0 + 3 | 0) << 0 | u8($receiver, o_0 + 2 | 0) << 8 | u8($receiver, o_0 + 1 | 0) << 16 | u8($receiver, o_0 + 0 | 0) << 24).and(L4294967295).shiftLeft(0).or(Kotlin.Long.fromInt(u8($receiver, o_1 + 3 | 0) << 0 | u8($receiver, o_1 + 2 | 0) << 8 | u8($receiver, o_1 + 1 | 0) << 16 | u8($receiver, o_1 + 0 | 0) << 24).and(L4294967295).shiftLeft(32));
        return Kotlin.doubleFromBits(bits);
    }

    function readU16($receiver, o, little) {
        return little ? readU16LE($receiver, o) : readU16BE($receiver, o);
    }

    function readU24($receiver, o, little) {
        return little ? readU24LE($receiver, o) : readU24BE($receiver, o);
    }

    function readU32($receiver, o, little) {
        return little ? readU32LE($receiver, o) : readU32BE($receiver, o);
    }

    function readS16($receiver, o, little) {
        return little ? readS16LE($receiver, o) : readS16BE($receiver, o);
    }

    function readS24($receiver, o, little) {
        return little ? readS24LE($receiver, o) : readS24BE($receiver, o);
    }

    function readS32($receiver, o, little) {
        return little ? readS32LE($receiver, o) : readS32BE($receiver, o);
    }

    function readS64($receiver, o, little) {
        return little ? readS64LE($receiver, o) : readS64BE($receiver, o);
    }

    function readF16($receiver, o, little) {
        return little ? readF16LE($receiver, o) : readF16BE($receiver, o);
    }

    function readF32($receiver, o, little) {
        return little ? readF32LE($receiver, o) : readF32BE($receiver, o);
    }

    function readF64($receiver, o, little) {
        return little ? readF64LE($receiver, o) : readF64BE($receiver, o);
    }

    function readTypedArray($receiver, o, count, elementSize, array, read) {
        for (var n = 0; n < count; n++)
            read($receiver, array, n, o + Kotlin.imul(n, elementSize) | 0);
        return array;
    }

    function readByteArray($receiver, o, count) {
        return copyOfRange($receiver, o, o + count | 0);
    }

    function readShortArrayLE$lambda($receiver, array, n, pos) {
        array[n] = toShort(readS16LE($receiver, pos));
        return Unit;
    }

    function readShortArrayLE($receiver, o, count) {
        var array = new Int16Array(count);
        for (var n = 0; n < count; n++)
            readShortArrayLE$lambda($receiver, array, n, o + Kotlin.imul(n, 2) | 0);
        return array;
    }

    function readCharArrayLE$lambda($receiver, array, n, pos) {
        array[n] = toChar(readS16LE($receiver, pos));
        return Unit;
    }

    function readCharArrayLE($receiver, o, count) {
        var array = Kotlin.charArray(count);
        for (var n = 0; n < count; n++)
            readCharArrayLE$lambda($receiver, array, n, o + Kotlin.imul(n, 2) | 0);
        return array;
    }

    function readIntArrayLE$lambda($receiver, array, n, pos) {
        array[n] = readS32LE($receiver, pos);
        return Unit;
    }

    function readIntArrayLE($receiver, o, count) {
        var array = new Int32Array(count);
        for (var n = 0; n < count; n++)
            readIntArrayLE$lambda($receiver, array, n, o + Kotlin.imul(n, 4) | 0);
        return array;
    }

    function readLongArrayLE$lambda($receiver, array, n, pos) {
        array[n] = readS64LE($receiver, pos);
        return Unit;
    }

    function readLongArrayLE($receiver, o, count) {
        var array = Kotlin.longArray(count);
        for (var n = 0; n < count; n++)
            readLongArrayLE$lambda($receiver, array, n, o + Kotlin.imul(n, 8) | 0);
        return array;
    }

    function readFloatArrayLE$lambda($receiver, array, n, pos) {
        array[n] = readF32LE($receiver, pos);
        return Unit;
    }

    function readFloatArrayLE($receiver, o, count) {
        var array = new Float32Array(count);
        for (var n = 0; n < count; n++)
            readFloatArrayLE$lambda($receiver, array, n, o + Kotlin.imul(n, 4) | 0);
        return array;
    }

    function readDoubleArrayLE$lambda($receiver, array, n, pos) {
        array[n] = readF64LE($receiver, pos);
        return Unit;
    }

    function readDoubleArrayLE($receiver, o, count) {
        var array = new Float64Array(count);
        for (var n = 0; n < count; n++)
            readDoubleArrayLE$lambda($receiver, array, n, o + Kotlin.imul(n, 8) | 0);
        return array;
    }

    function readShortArrayBE$lambda($receiver, array, n, pos) {
        array[n] = toShort(readS16BE($receiver, pos));
        return Unit;
    }

    function readShortArrayBE($receiver, o, count) {
        var array = new Int16Array(count);
        for (var n = 0; n < count; n++)
            readShortArrayBE$lambda($receiver, array, n, o + Kotlin.imul(n, 2) | 0);
        return array;
    }

    function readCharArrayBE$lambda($receiver, array, n, pos) {
        array[n] = toChar(readS16BE($receiver, pos));
        return Unit;
    }

    function readCharArrayBE($receiver, o, count) {
        var array = Kotlin.charArray(count);
        for (var n = 0; n < count; n++)
            readCharArrayBE$lambda($receiver, array, n, o + Kotlin.imul(n, 2) | 0);
        return array;
    }

    function readIntArrayBE$lambda($receiver, array, n, pos) {
        array[n] = readS32BE($receiver, pos);
        return Unit;
    }

    function readIntArrayBE($receiver, o, count) {
        var array = new Int32Array(count);
        for (var n = 0; n < count; n++)
            readIntArrayBE$lambda($receiver, array, n, o + Kotlin.imul(n, 4) | 0);
        return array;
    }

    function readLongArrayBE$lambda($receiver, array, n, pos) {
        array[n] = readS64BE($receiver, pos);
        return Unit;
    }

    function readLongArrayBE($receiver, o, count) {
        var array = Kotlin.longArray(count);
        for (var n = 0; n < count; n++)
            readLongArrayBE$lambda($receiver, array, n, o + Kotlin.imul(n, 8) | 0);
        return array;
    }

    function readFloatArrayBE$lambda($receiver, array, n, pos) {
        array[n] = readF32BE($receiver, pos);
        return Unit;
    }

    function readFloatArrayBE($receiver, o, count) {
        var array = new Float32Array(count);
        for (var n = 0; n < count; n++)
            readFloatArrayBE$lambda($receiver, array, n, o + Kotlin.imul(n, 4) | 0);
        return array;
    }

    function readDoubleArrayBE$lambda($receiver, array, n, pos) {
        array[n] = readF64BE($receiver, pos);
        return Unit;
    }

    function readDoubleArrayBE($receiver, o, count) {
        var array = new Float64Array(count);
        for (var n = 0; n < count; n++)
            readDoubleArrayBE$lambda($receiver, array, n, o + Kotlin.imul(n, 8) | 0);
        return array;
    }

    function readShortArray($receiver, o, count, little) {
        return little ? readShortArrayLE($receiver, o, count) : readShortArrayBE($receiver, o, count);
    }

    function readCharArray($receiver, o, count, little) {
        return little ? readCharArrayLE($receiver, o, count) : readCharArrayBE($receiver, o, count);
    }

    function readIntArray($receiver, o, count, little) {
        return little ? readIntArrayLE($receiver, o, count) : readIntArrayBE($receiver, o, count);
    }

    function readLongArray($receiver, o, count, little) {
        return little ? readLongArrayLE($receiver, o, count) : readLongArrayBE($receiver, o, count);
    }

    function readFloatArray($receiver, o, count, little) {
        return little ? readFloatArrayLE($receiver, o, count) : readFloatArrayBE($receiver, o, count);
    }

    function readDoubleArray($receiver, o, count, little) {
        return little ? readDoubleArrayLE($receiver, o, count) : readDoubleArrayBE($receiver, o, count);
    }

    function write8($receiver, o, v) {
        $receiver[o] = toByte(v);
    }

    function write8_0($receiver, o, v) {
        $receiver[o] = toByte(v.toInt());
    }

    function write16($receiver, o, v, little) {
        little ? write16LE($receiver, o, v) : write16BE($receiver, o, v);
    }

    function write24($receiver, o, v, little) {
        little ? write24LE($receiver, o, v) : write24BE($receiver, o, v);
    }

    function write32($receiver, o, v, little) {
        little ? write32LE($receiver, o, v) : write32BE($receiver, o, v);
    }

    function write64($receiver, o, v, little) {
        little ? write64LE($receiver, o, v) : write64BE($receiver, o, v);
    }

    function writeF16($receiver, o, v, little) {
        little ? writeF16LE($receiver, o, v) : writeF16BE($receiver, o, v);
    }

    function writeF32($receiver, o, v, little) {
        little ? writeF32LE($receiver, o, v) : writeF32BE($receiver, o, v);
    }

    function writeF64($receiver, o, v, little) {
        little ? writeF64LE($receiver, o, v) : writeF64BE($receiver, o, v);
    }

    function write16LE($receiver, o, v) {
        $receiver[o + 0 | 0] = extractByte(v, 0);
        $receiver[o + 1 | 0] = extractByte(v, 8);
    }

    function write24LE($receiver, o, v) {
        $receiver[o + 0 | 0] = extractByte(v, 0);
        $receiver[o + 1 | 0] = extractByte(v, 8);
        $receiver[o + 2 | 0] = extractByte(v, 16);
    }

    function write32LE($receiver, o, v) {
        $receiver[o + 0 | 0] = extractByte(v, 0);
        $receiver[o + 1 | 0] = extractByte(v, 8);
        $receiver[o + 2 | 0] = extractByte(v, 16);
        $receiver[o + 3 | 0] = extractByte(v, 24);
    }

    function write32LE_0($receiver, o, v) {
        write32LE($receiver, o, v.toInt());
    }

    function write64LE($receiver, o, v) {
        write32LE($receiver, o + 0 | 0, v.shiftRightUnsigned(0).toInt());
        write32LE($receiver, o + 4 | 0, v.shiftRightUnsigned(32).toInt());
    }

    function writeF16LE($receiver, o, v) {
        write16LE($receiver, o + 0 | 0, v.toRawBits().data & 65535);
    }

    function writeF32LE($receiver, o, v) {
        write32LE($receiver, o + 0 | 0, toRawBits(v));
    }

    function writeF64LE($receiver, o, v) {
        write64LE($receiver, o + 0 | 0, toRawBits_0(v));
    }

    function write16BE($receiver, o, v) {
        $receiver[o + 1 | 0] = extractByte(v, 0);
        $receiver[o + 0 | 0] = extractByte(v, 8);
    }

    function write24BE($receiver, o, v) {
        $receiver[o + 2 | 0] = extractByte(v, 0);
        $receiver[o + 1 | 0] = extractByte(v, 8);
        $receiver[o + 0 | 0] = extractByte(v, 16);
    }

    function write32BE($receiver, o, v) {
        $receiver[o + 3 | 0] = extractByte(v, 0);
        $receiver[o + 2 | 0] = extractByte(v, 8);
        $receiver[o + 1 | 0] = extractByte(v, 16);
        $receiver[o + 0 | 0] = extractByte(v, 24);
    }

    function write32BE_0($receiver, o, v) {
        write32BE($receiver, o, v.toInt());
    }

    function write64BE($receiver, o, v) {
        write32BE($receiver, o + 0 | 0, v.shiftRightUnsigned(32).toInt());
        write32BE($receiver, o + 4 | 0, v.shiftRightUnsigned(0).toInt());
    }

    function writeF16BE($receiver, o, v) {
        write16BE($receiver, o + 0 | 0, v.toRawBits().data & 65535);
    }

    function writeF32BE($receiver, o, v) {
        write32BE($receiver, o + 0 | 0, toRawBits(v));
    }

    function writeF64BE($receiver, o, v) {
        write64BE($receiver, o + 0 | 0, toRawBits_0(v));
    }

    function writeBytes($receiver, o, bytes) {
        arrayCopy(bytes, $receiver, o, 0, 0 + bytes.length | 0);
    }

    function wa(o, elementSize, size, write) {
        for (var n = 0; n < size; n++)
            write(o + Kotlin.imul(n, elementSize) | 0, n);
    }

    function writeArrayLE($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write16LE($receiver, o + Kotlin.imul(n, 2) | 0, array[n] | 0);
        }
    }

    function writeArrayLE_0($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write16LE($receiver, o + Kotlin.imul(n, 2) | 0, array[n]);
        }
    }

    function writeArrayLE_1($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write32LE($receiver, o + Kotlin.imul(n, 4) | 0, array[n]);
        }
    }

    function writeArrayLE_2($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write64LE($receiver, o + Kotlin.imul(n, 8) | 0, array[n]);
        }
    }

    function writeArrayLE_3($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            writeF32LE($receiver, o + Kotlin.imul(n, 4) | 0, array[n]);
        }
    }

    function writeArrayLE_4($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            writeF64LE($receiver, o + Kotlin.imul(n, 8) | 0, array[n]);
        }
    }

    function writeArrayBE($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write16BE($receiver, o + Kotlin.imul(n, 2) | 0, array[n] | 0);
        }
    }

    function writeArrayBE_0($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write16BE($receiver, o + Kotlin.imul(n, 2) | 0, array[n]);
        }
    }

    function writeArrayBE_1($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write32BE($receiver, o + Kotlin.imul(n, 4) | 0, array[n]);
        }
    }

    function writeArrayBE_2($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            write64BE($receiver, o + Kotlin.imul(n, 8) | 0, array[n]);
        }
    }

    function writeArrayBE_3($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            writeF32BE($receiver, o + Kotlin.imul(n, 4) | 0, array[n]);
        }
    }

    function writeArrayBE_4($receiver, o, array) {
        for (var n = 0; n < array.length; n++) {
            writeF64BE($receiver, o + Kotlin.imul(n, 8) | 0, array[n]);
        }
    }

    function ByteArrayReader(data, start, size) {
        if (size === void 0)
            size = 0;
        this.data = data;
        this.start = start;
        this.size = size;
        this.offset_0 = this.start;
    }

    Object.defineProperty(ByteArrayReader.prototype, 'remaining', {
        get: function () {
            return this.size - this.offset_0 | 0;
        }
    });
    Object.defineProperty(ByteArrayReader.prototype, 'hasMore', {
        get: function () {
            return this.remaining > 0;
        }
    });
    ByteArrayReader.prototype.move_0 = function (count, callback) {
        var res = callback(this.data, this.offset_0);
        this.offset_0 = this.offset_0 + count | 0;
        return res;
    };

    function ByteArrayReader$u8$lambda($receiver, it) {
        return readU8($receiver, it);
    }

    ByteArrayReader.prototype.u8 = function () {
        return this.move_0(1, ByteArrayReader$u8$lambda);
    };

    function ByteArrayReader$s8$lambda($receiver, it) {
        return readS8($receiver, it);
    }

    ByteArrayReader.prototype.s8 = function () {
        return this.move_0(1, ByteArrayReader$s8$lambda);
    };

    function ByteArrayReader$u16$lambda(closure$little) {
        return function ($receiver, it) {
            return readU16($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.u16_6taknv$ = function (little) {
        return this.move_0(2, ByteArrayReader$u16$lambda(little));
    };

    function ByteArrayReader$s16$lambda(closure$little) {
        return function ($receiver, it) {
            return readS16($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.s16_6taknv$ = function (little) {
        return this.move_0(2, ByteArrayReader$s16$lambda(little));
    };

    function ByteArrayReader$u16LE$lambda($receiver, it) {
        return readU16LE($receiver, it);
    }

    ByteArrayReader.prototype.u16LE = function () {
        return this.move_0(2, ByteArrayReader$u16LE$lambda);
    };

    function ByteArrayReader$s16LE$lambda($receiver, it) {
        return readS16LE($receiver, it);
    }

    ByteArrayReader.prototype.s16LE = function () {
        return this.move_0(2, ByteArrayReader$s16LE$lambda);
    };

    function ByteArrayReader$u16BE$lambda($receiver, it) {
        return readU16BE($receiver, it);
    }

    ByteArrayReader.prototype.u16BE = function () {
        return this.move_0(2, ByteArrayReader$u16BE$lambda);
    };

    function ByteArrayReader$s16BE$lambda($receiver, it) {
        return readS16BE($receiver, it);
    }

    ByteArrayReader.prototype.s16BE = function () {
        return this.move_0(2, ByteArrayReader$s16BE$lambda);
    };

    function ByteArrayReader$u24$lambda(closure$little) {
        return function ($receiver, it) {
            return readU24($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.u24_6taknv$ = function (little) {
        return this.move_0(3, ByteArrayReader$u24$lambda(little));
    };

    function ByteArrayReader$s24$lambda(closure$little) {
        return function ($receiver, it) {
            return readS24($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.s24_6taknv$ = function (little) {
        return this.move_0(3, ByteArrayReader$s24$lambda(little));
    };

    function ByteArrayReader$u24LE$lambda($receiver, it) {
        return readU24LE($receiver, it);
    }

    ByteArrayReader.prototype.u24LE = function () {
        return this.move_0(3, ByteArrayReader$u24LE$lambda);
    };

    function ByteArrayReader$s24LE$lambda($receiver, it) {
        return readS24LE($receiver, it);
    }

    ByteArrayReader.prototype.s24LE = function () {
        return this.move_0(3, ByteArrayReader$s24LE$lambda);
    };

    function ByteArrayReader$u24BE$lambda($receiver, it) {
        return readU24BE($receiver, it);
    }

    ByteArrayReader.prototype.u24BE = function () {
        return this.move_0(3, ByteArrayReader$u24BE$lambda);
    };

    function ByteArrayReader$s24BE$lambda($receiver, it) {
        return readS24BE($receiver, it);
    }

    ByteArrayReader.prototype.s24BE = function () {
        return this.move_0(3, ByteArrayReader$s24BE$lambda);
    };

    function ByteArrayReader$u32$lambda(closure$little) {
        return function ($receiver, it) {
            return readU32($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.u32_6taknv$ = function (little) {
        return this.move_0(4, ByteArrayReader$u32$lambda(little));
    };

    function ByteArrayReader$s32$lambda(closure$little) {
        return function ($receiver, it) {
            return readS32($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.s32_6taknv$ = function (little) {
        return this.move_0(4, ByteArrayReader$s32$lambda(little));
    };

    function ByteArrayReader$u32LE$lambda($receiver, it) {
        return readU32LE($receiver, it);
    }

    ByteArrayReader.prototype.u32LE = function () {
        return this.move_0(4, ByteArrayReader$u32LE$lambda);
    };

    function ByteArrayReader$s32LE$lambda($receiver, it) {
        return readS32LE($receiver, it);
    }

    ByteArrayReader.prototype.s32LE = function () {
        return this.move_0(4, ByteArrayReader$s32LE$lambda);
    };

    function ByteArrayReader$u32BE$lambda($receiver, it) {
        return readU32BE($receiver, it);
    }

    ByteArrayReader.prototype.u32BE = function () {
        return this.move_0(4, ByteArrayReader$u32BE$lambda);
    };

    function ByteArrayReader$s32BE$lambda($receiver, it) {
        return readS32BE($receiver, it);
    }

    ByteArrayReader.prototype.s32BE = function () {
        return this.move_0(4, ByteArrayReader$s32BE$lambda);
    };

    function ByteArrayReader$f16$lambda(closure$little) {
        return function ($receiver, it) {
            return readF16($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.f16_6taknv$ = function (little) {
        return this.move_0(2, ByteArrayReader$f16$lambda(little));
    };

    function ByteArrayReader$f16LE$lambda($receiver, it) {
        return readF16LE($receiver, it);
    }

    ByteArrayReader.prototype.f16LE = function () {
        return this.move_0(2, ByteArrayReader$f16LE$lambda);
    };

    function ByteArrayReader$f16BE$lambda($receiver, it) {
        return readF16BE($receiver, it);
    }

    ByteArrayReader.prototype.f16BE = function () {
        return this.move_0(2, ByteArrayReader$f16BE$lambda);
    };

    function ByteArrayReader$f32$lambda(closure$little) {
        return function ($receiver, it) {
            return readF32($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.f32_6taknv$ = function (little) {
        return this.move_0(4, ByteArrayReader$f32$lambda(little));
    };

    function ByteArrayReader$f32LE$lambda($receiver, it) {
        return readF32LE($receiver, it);
    }

    ByteArrayReader.prototype.f32LE = function () {
        return this.move_0(4, ByteArrayReader$f32LE$lambda);
    };

    function ByteArrayReader$f32BE$lambda($receiver, it) {
        return readF32BE($receiver, it);
    }

    ByteArrayReader.prototype.f32BE = function () {
        return this.move_0(4, ByteArrayReader$f32BE$lambda);
    };

    function ByteArrayReader$f64$lambda(closure$little) {
        return function ($receiver, it) {
            return readF64($receiver, it, closure$little);
        };
    }

    ByteArrayReader.prototype.f64_6taknv$ = function (little) {
        return this.move_0(8, ByteArrayReader$f64$lambda(little));
    };

    function ByteArrayReader$f64LE$lambda($receiver, it) {
        return readF64LE($receiver, it);
    }

    ByteArrayReader.prototype.f64LE = function () {
        return this.move_0(8, ByteArrayReader$f64LE$lambda);
    };

    function ByteArrayReader$f64BE$lambda($receiver, it) {
        return readF64BE($receiver, it);
    }

    ByteArrayReader.prototype.f64BE = function () {
        return this.move_0(8, ByteArrayReader$f64BE$lambda);
    };
    ByteArrayReader.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayReader',
        interfaces: []
    };

    function ByteArrayReaderLE(bar) {
        this.bar = bar;
    }

    ByteArrayReaderLE.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayReaderLE',
        interfaces: []
    };
    ByteArrayReaderLE.prototype.unbox = function () {
        return this.bar;
    };
    ByteArrayReaderLE.prototype.toString = function () {
        return 'ByteArrayReaderLE(bar=' + Kotlin.toString(this.bar) + ')';
    };
    ByteArrayReaderLE.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.bar) | 0;
        return result;
    };
    ByteArrayReaderLE.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bar, other.bar))));
    };

    function get_size_1($receiver) {
        return $receiver.bar.size;
    }

    function get_remaining($receiver) {
        return $receiver.bar.remaining;
    }

    function get_hasMore($receiver) {
        return $receiver.bar.hasMore;
    }

    function u8_0($receiver) {
        return $receiver.bar.u8();
    }

    function s8_1($receiver) {
        return $receiver.bar.s8();
    }

    function u16($receiver) {
        return $receiver.bar.u16LE();
    }

    function s16_1($receiver) {
        return $receiver.bar.s16LE();
    }

    function u24($receiver) {
        return $receiver.bar.u24LE();
    }

    function s24_1($receiver) {
        return $receiver.bar.s24LE();
    }

    function u32($receiver) {
        return $receiver.bar.u32LE();
    }

    function s32_1($receiver) {
        return $receiver.bar.s32LE();
    }

    function f16_1($receiver) {
        return $receiver.bar.f16LE();
    }

    function f32_1($receiver) {
        return $receiver.bar.f32LE();
    }

    function f64_1($receiver) {
        return $receiver.bar.f64LE();
    }

    function ByteArrayReaderBE(bar) {
        this.bar = bar;
    }

    ByteArrayReaderBE.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayReaderBE',
        interfaces: []
    };
    ByteArrayReaderBE.prototype.unbox = function () {
        return this.bar;
    };
    ByteArrayReaderBE.prototype.toString = function () {
        return 'ByteArrayReaderBE(bar=' + Kotlin.toString(this.bar) + ')';
    };
    ByteArrayReaderBE.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.bar) | 0;
        return result;
    };
    ByteArrayReaderBE.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bar, other.bar))));
    };

    function get_size_2($receiver) {
        return $receiver.bar.size;
    }

    function get_remaining_0($receiver) {
        return $receiver.bar.remaining;
    }

    function get_hasMore_0($receiver) {
        return $receiver.bar.hasMore;
    }

    function u8_1($receiver) {
        return $receiver.bar.u8();
    }

    function s8_2($receiver) {
        return $receiver.bar.s8();
    }

    function u16_0($receiver) {
        return $receiver.bar.u16BE();
    }

    function s16_2($receiver) {
        return $receiver.bar.s16BE();
    }

    function u24_0($receiver) {
        return $receiver.bar.u24BE();
    }

    function s24_2($receiver) {
        return $receiver.bar.s24BE();
    }

    function u32_0($receiver) {
        return $receiver.bar.u32BE();
    }

    function s32_2($receiver) {
        return $receiver.bar.s32BE();
    }

    function f16_2($receiver) {
        return $receiver.bar.f16BE();
    }

    function f32_2($receiver) {
        return $receiver.bar.f32BE();
    }

    function f64_2($receiver) {
        return $receiver.bar.f64BE();
    }

    function reader($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = $receiver.length;
        return new ByteArrayReader($receiver, offset, size);
    }

    function readerLE($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = $receiver.length;
        return new ByteArrayReaderLE(reader($receiver, offset, size));
    }

    function readerBE($receiver, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = $receiver.length;
        return new ByteArrayReaderBE(reader($receiver, offset, size));
    }

    function read($receiver, offset, size, callback) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = $receiver.length;
        return callback(reader($receiver, offset, size));
    }

    function readLE($receiver, offset, size, callback) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = $receiver.length;
        return callback(readerLE($receiver, offset, size));
    }

    function readBE($receiver, offset, size, callback) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = $receiver.length;
        return callback(readerBE($receiver, offset, size));
    }

    function FBuffer(mem, size) {
        FBuffer$Companion_getInstance();
        if (size === void 0) {
            size = mem.byteLength;
        }
        this.mem = mem;
        this.size = size;
        this.data = getData(this.mem);
        this.arrayByte = asInt8Buffer(this.mem);
        this.arrayShort = asInt16Buffer(this.mem);
        this.arrayInt = asInt32Buffer(this.mem);
        this.arrayFloat = asFloat32Buffer(this.mem);
        this.arrayDouble = asFloat64Buffer(this.mem);
    }

    Object.defineProperty(FBuffer.prototype, 'buffer', {
        get: function () {
            return this.mem;
        }
    });
    Object.defineProperty(FBuffer.prototype, 'i8', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_i8', function () {
            return this.arrayByte;
        })
    });
    Object.defineProperty(FBuffer.prototype, 'i16', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_i16', function () {
            return this.arrayShort;
        })
    });
    Object.defineProperty(FBuffer.prototype, 'i32', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_i32', function () {
            return this.arrayInt;
        })
    });
    Object.defineProperty(FBuffer.prototype, 'f32', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_f32', function () {
            return this.arrayFloat;
        })
    });
    Object.defineProperty(FBuffer.prototype, 'f64', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_f64', function () {
            return this.arrayDouble;
        })
    });
    Object.defineProperty(FBuffer.prototype, 'u8', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_u8', wrapFunction(function () {
            var Uint8Buffer_init = _.com.soywiz.kmem.Uint8Buffer;
            return function () {
                return new Uint8Buffer_init(this.arrayByte);
            };
        }))
    });
    Object.defineProperty(FBuffer.prototype, 'u16', {
        get: defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.FBuffer.get_u16', wrapFunction(function () {
            var Uint16Buffer_init = _.com.soywiz.kmem.Uint16Buffer;
            return function () {
                return new Uint16Buffer_init(this.arrayShort);
            };
        }))
    });

    function FBuffer$Companion() {
        FBuffer$Companion_instance = this;
    }

    FBuffer$Companion.prototype.sizeAligned_0 = function ($receiver) {
        return $receiver + 15 & -16;
    };
    FBuffer$Companion.prototype.alloc_za3lpa$ = function (size) {
        return new FBuffer(new ArrayBuffer_init(this.sizeAligned_0(size)), size);
    };
    FBuffer$Companion.prototype.wrap_t771ee$ = function (buffer, size) {
        if (size === void 0) {
            size = buffer.byteLength;
        }
        return new FBuffer(buffer, size);
    };
    FBuffer$Companion.prototype.wrap_fqrh44$ = function (array) {
        return new FBuffer(array.buffer, array.length);
    };
    FBuffer$Companion.prototype.invoke_fzusl$ = function (size, direct) {
        return new FBuffer(direct ? new ArrayBuffer_init(this.sizeAligned_0(size)) : new ArrayBuffer_init(this.sizeAligned_0(size)), size);
    };
    FBuffer$Companion.prototype.invoke_za3lpa$ = function (size) {
        return new FBuffer(new ArrayBuffer_init(this.sizeAligned_0(size)), size);
    };
    FBuffer$Companion.prototype.invoke_t771ee$ = function (buffer, size) {
        if (size === void 0) {
            size = buffer.byteLength;
        }
        return new FBuffer(buffer, size);
    };
    FBuffer$Companion.prototype.invoke_fqrh44$ = function (array) {
        return new FBuffer(array.buffer, array.length);
    };
    FBuffer$Companion.prototype.copy_6omq8u$ = function (src, srcPos, dst, dstPos, length) {
        arraycopy_23(src.buffer, srcPos, dst.buffer, dstPos, length);
    };
    FBuffer$Companion.prototype.copy_jt4udi$ = function (src, srcPos, dst, dstPos, length) {
        arraycopy_25(src.buffer, srcPos, dst, dstPos, length);
    };
    FBuffer$Companion.prototype.copy_jt283u$ = function (src, srcPos, dst, dstPos, length) {
        arraycopy_24(src, srcPos, dst.buffer, dstPos, length);
    };
    FBuffer$Companion.prototype.copyAligned_gjtzys$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_27(src.buffer, srcPosAligned, dst, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_2pll4g$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_26(src, srcPosAligned, dst.buffer, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_eadj9d$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_29(src.buffer, srcPosAligned, dst, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_1kn2e5$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_28(src, srcPosAligned, dst.buffer, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_72e170$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_31(src.buffer, srcPosAligned, dst, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_ac1es0$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_30(src, srcPosAligned, dst.buffer, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_h5apv3$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_33(src.buffer, srcPosAligned, dst, dstPosAligned, length);
    };
    FBuffer$Companion.prototype.copyAligned_mxqr41$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
        arraycopy_32(src, srcPosAligned, dst.buffer, dstPosAligned, length);
    };
    FBuffer$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var FBuffer$Companion_instance = null;

    function FBuffer$Companion_getInstance() {
        if (FBuffer$Companion_instance === null) {
            new FBuffer$Companion();
        }
        return FBuffer$Companion_instance;
    }

    FBuffer.prototype.get_za3lpa$ = function (index) {
        return this.arrayByte[index] & 255;
    };
    FBuffer.prototype.set_vux9f0$ = function (index, value) {
        this.arrayByte[index] = toByte(value);
    };
    FBuffer.prototype.getByte_za3lpa$ = function (index) {
        return this.arrayByte[index];
    };
    FBuffer.prototype.getShort_za3lpa$ = function (index) {
        return this.arrayShort[index];
    };
    FBuffer.prototype.getInt_za3lpa$ = function (index) {
        return this.arrayInt[index];
    };
    FBuffer.prototype.getFloat_za3lpa$ = function (index) {
        return this.arrayFloat[index];
    };
    FBuffer.prototype.getDouble_za3lpa$ = function (index) {
        return this.arrayDouble[index];
    };
    FBuffer.prototype.setByte_6t1wet$ = function (index, value) {
        this.arrayByte[index] = value;
    };
    FBuffer.prototype.setShort_2bqt6h$ = function (index, value) {
        this.arrayShort[index] = value;
    };
    FBuffer.prototype.setInt_vux9f0$ = function (index, value) {
        this.arrayInt[index] = value;
    };
    FBuffer.prototype.setFloat_24o109$ = function (index, value) {
        this.arrayFloat[index] = value;
    };
    FBuffer.prototype.setDouble_5wr77w$ = function (index, value) {
        this.arrayDouble[index] = value;
    };
    FBuffer.prototype.dispose = function () {
    };
    FBuffer.prototype.setAlignedInt16_2bqt6h$ = function (index, value) {
        this.arrayShort[index] = value;
    };
    FBuffer.prototype.getAlignedInt16_za3lpa$ = function (index) {
        return this.arrayShort[index];
    };
    FBuffer.prototype.setAlignedInt32_vux9f0$ = function (index, value) {
        this.arrayInt[index] = value;
    };
    FBuffer.prototype.getAlignedInt32_za3lpa$ = function (index) {
        return this.arrayInt[index];
    };
    FBuffer.prototype.setAlignedFloat32_24o109$ = function (index, value) {
        this.arrayFloat[index] = value;
    };
    FBuffer.prototype.getAlignedFloat32_za3lpa$ = function (index) {
        return this.arrayFloat[index];
    };
    FBuffer.prototype.setAlignedFloat64_5wr77w$ = function (index, value) {
        this.arrayDouble[index] = value;
    };
    FBuffer.prototype.getAlignedFloat64_za3lpa$ = function (index) {
        return this.arrayDouble[index];
    };
    FBuffer.prototype.getUnalignedInt16_za3lpa$ = function (index) {
        return getShort(this.data, index);
    };
    FBuffer.prototype.setUnalignedInt16_2bqt6h$ = function (index, value) {
        setShort(this.data, index, value);
    };
    FBuffer.prototype.setUnalignedInt32_vux9f0$ = function (index, value) {
        setInt(this.data, index, value);
    };
    FBuffer.prototype.getUnalignedInt32_za3lpa$ = function (index) {
        return getInt(this.data, index);
    };
    FBuffer.prototype.setUnalignedFloat32_24o109$ = function (index, value) {
        setFloat(this.data, index, value);
    };
    FBuffer.prototype.getUnalignedFloat32_za3lpa$ = function (index) {
        return getFloat(this.data, index);
    };
    FBuffer.prototype.setUnalignedFloat64_5wr77w$ = function (index, value) {
        setDouble(this.data, index, value);
    };
    FBuffer.prototype.getUnalignedFloat64_za3lpa$ = function (index) {
        return getDouble(this.data, index);
    };
    FBuffer.prototype.setArrayInt8_3fge6q$ = function (dstPos, src, srcPos, len) {
        FBuffer$Companion_getInstance().copy_jt283u$(src, srcPos, this, dstPos, len);
    };
    FBuffer.prototype.setAlignedArrayInt8_3fge6q$ = function (dstPos, src, srcPos, len) {
        FBuffer$Companion_getInstance().copy_jt283u$(src, srcPos, this, dstPos, len);
    };
    FBuffer.prototype.setAlignedArrayInt16_r43jz4$ = function (dstPos, src, srcPos, len) {
        FBuffer$Companion_getInstance().copyAligned_2pll4g$(src, srcPos, this, dstPos, len);
    };
    FBuffer.prototype.setAlignedArrayInt32_coga0j$ = function (dstPos, src, srcPos, len) {
        FBuffer$Companion_getInstance().copyAligned_1kn2e5$(src, srcPos, this, dstPos, len);
    };
    FBuffer.prototype.setAlignedArrayFloat32_3hvitc$ = function (dstPos, src, srcPos, len) {
        FBuffer$Companion_getInstance().copyAligned_ac1es0$(src, srcPos, this, dstPos, len);
    };
    FBuffer.prototype.setAlignedArrayFloat64_q6hait$ = function (dstPos, src, srcPos, len) {
        FBuffer$Companion_getInstance().copyAligned_mxqr41$(src, srcPos, this, dstPos, len);
    };
    FBuffer.prototype.getArrayInt8_3fge6q$ = function (srcPos, dst, dstPos, len) {
        FBuffer$Companion_getInstance().copy_jt4udi$(this, srcPos, dst, dstPos, len);
    };
    FBuffer.prototype.getAlignedArrayInt8_3fge6q$ = function (srcPos, dst, dstPos, len) {
        FBuffer$Companion_getInstance().copy_jt4udi$(this, srcPos, dst, dstPos, len);
    };
    FBuffer.prototype.getAlignedArrayInt16_r43jz4$ = function (srcPos, dst, dstPos, len) {
        FBuffer$Companion_getInstance().copyAligned_gjtzys$(this, srcPos, dst, dstPos, len);
    };
    FBuffer.prototype.getAlignedArrayInt32_coga0j$ = function (srcPos, dst, dstPos, len) {
        FBuffer$Companion_getInstance().copyAligned_eadj9d$(this, srcPos, dst, dstPos, len);
    };
    FBuffer.prototype.getAlignedArrayFloat32_3hvitc$ = function (srcPos, dst, dstPos, len) {
        FBuffer$Companion_getInstance().copyAligned_72e170$(this, srcPos, dst, dstPos, len);
    };
    FBuffer.prototype.getAlignedArrayFloat64_q6hait$ = function (srcPos, dst, dstPos, len) {
        FBuffer$Companion_getInstance().copyAligned_h5apv3$(this, srcPos, dst, dstPos, len);
    };
    FBuffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FBuffer',
        interfaces: []
    };

    function Uint8Buffer(b) {
        Uint8Buffer$Companion_getInstance();
        this.b = b;
    }

    function Uint8Buffer$Companion() {
        Uint8Buffer$Companion_instance = this;
    }

    Uint8Buffer$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var Uint8Buffer$Companion_instance = null;

    function Uint8Buffer$Companion_getInstance() {
        if (Uint8Buffer$Companion_instance === null) {
            new Uint8Buffer$Companion();
        }
        return Uint8Buffer$Companion_instance;
    }

    Object.defineProperty(Uint8Buffer.prototype, 'size', {
        get: function () {
            return this.b.length;
        }
    });
    Uint8Buffer.prototype.get_za3lpa$ = function (index) {
        return this.b[index] & 255;
    };
    Uint8Buffer.prototype.set_vux9f0$ = function (index, value) {
        this.b[index] = toByte(value);
    };
    Uint8Buffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Uint8Buffer',
        interfaces: []
    };
    Uint8Buffer.prototype.unbox = function () {
        return this.b;
    };
    Uint8Buffer.prototype.toString = function () {
        return 'Uint8Buffer(b=' + Kotlin.toString(this.b) + ')';
    };
    Uint8Buffer.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.b) | 0;
        return result;
    };
    Uint8Buffer.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.b, other.b))));
    };

    function Uint16Buffer(b) {
        Uint16Buffer$Companion_getInstance();
        this.b = b;
    }

    function Uint16Buffer$Companion() {
        Uint16Buffer$Companion_instance = this;
    }

    Uint16Buffer$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var Uint16Buffer$Companion_instance = null;

    function Uint16Buffer$Companion_getInstance() {
        if (Uint16Buffer$Companion_instance === null) {
            new Uint16Buffer$Companion();
        }
        return Uint16Buffer$Companion_instance;
    }

    Object.defineProperty(Uint16Buffer.prototype, 'size', {
        get: function () {
            return this.b.length;
        }
    });
    Uint16Buffer.prototype.get_za3lpa$ = function (index) {
        return this.b[index] & 65535;
    };
    Uint16Buffer.prototype.set_vux9f0$ = function (index, value) {
        this.b[index] = toShort(value);
    };
    Uint16Buffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Uint16Buffer',
        interfaces: []
    };
    Uint16Buffer.prototype.unbox = function () {
        return this.b;
    };
    Uint16Buffer.prototype.toString = function () {
        return 'Uint16Buffer(b=' + Kotlin.toString(this.b) + ')';
    };
    Uint16Buffer.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.b) | 0;
        return result;
    };
    Uint16Buffer.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.b, other.b))));
    };

    function Uint8BufferAlloc(size) {
        return new Uint8Buffer(sliceInt8Buffer(new ArrayBuffer_init(size * 1 | 0)));
    }

    function Uint16BufferAlloc(size) {
        return new Uint16Buffer(sliceInt16Buffer(new ArrayBuffer_init(size * 2 | 0)));
    }

    var fbuffer = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.fbuffer_k36cnm$', wrapFunction(function () {
        var FBuffer = _.com.soywiz.kmem.FBuffer;
        return function (size, callback) {
            return callback(FBuffer.Companion.invoke_za3lpa$(size));
        };
    }));

    function Float16(rawBits) {
        Float16$Companion_getInstance();
        this.rawBits = rawBits;
    }

    Object.defineProperty(Float16.prototype, 'value', {
        get: function () {
            return Float16$Companion_getInstance().intBitsToDouble_6hrhkk$(this.rawBits);
        }
    });
    Float16.prototype.toFloat = function () {
        return this.value;
    };
    Float16.prototype.toDouble = function () {
        return this.value;
    };
    Float16.prototype.toBits = function () {
        return this.rawBits;
    };
    Float16.prototype.toRawBits = function () {
        return this.rawBits;
    };
    Float16.prototype.toString = function () {
        return this.toDouble().toString();
    };

    function Float16$Companion() {
        Float16$Companion_instance = this;
        this.FLOAT16_EXPONENT_BASE = 15;
    }

    Float16$Companion.prototype.fromBits_6hrhkk$ = function (bits) {
        return new Float16(bits);
    };
    Float16$Companion.prototype.fromBits_za3lpa$ = function (bits) {
        return new Float16(new UShort_init(toShort(bits)));
    };
    Float16$Companion.prototype.intBitsToDouble_6hrhkk$ = function (word) {
        var tmp$;
        var w = word.data & 65535;
        var sign = (w & 32768) !== 0 ? -1 : 1;
        var exponent = w >>> 10 & 31;
        var significand = w & 1023;
        switch (exponent) {
            case 0:
                if (significand === 0)
                    tmp$ = sign < 0 ? -0.0 : +0.0;
                else {
                    tmp$ = sign * Math_0.pow(2.0, -14) * (significand / 1024 | 0);
                }

                break;
            case 31:
                if (significand !== 0)
                    tmp$ = kotlin_js_internal_DoubleCompanionObject.NaN;
                else if (sign < 0)
                    tmp$ = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
                else
                    tmp$ = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
                break;
            default:
                var x = exponent - 15 | 0;
                tmp$ = sign * Math_0.pow(2.0, x) * (1 + (significand / 1024 | 0) | 0);
                break;
        }
        return tmp$;
    };
    Float16$Companion.prototype.doubleToIntBits_14dthe$ = function (value) {
        var tmp$, tmp$_0;
        var dword = toBits(value);
        if ((dword & 2147483647) === 0)
            tmp$_0 = dword >>> 16;
        else {
            var sign = dword & -2147483648;
            var exponent = dword & 2146435072;
            var significand = dword & 1048575;
            switch (exponent) {
                case 0:
                    tmp$_0 = sign >>> 16;
                    break;
                case 2146435072:
                    tmp$_0 = significand === 0 ? sign >>> 16 | 31744 : 65024;
                    break;
                default:
                    var signedExponent = (exponent >>> 20) - 1023 + 15 | 0;
                    if (signedExponent >= 31)
                        tmp$_0 = significand >>> 16 | 31744;
                    else if (signedExponent <= 0) {
                        if ((10 - signedExponent | 0) > 21) {
                            tmp$ = 0;
                        } else {
                            significand = significand | 1048576;
                            var add = (significand >>> 10 - signedExponent & 1) !== 0 ? 1 : 0;
                            tmp$ = (significand >>> 11 - signedExponent) + add | 0;
                        }
                        var halfSignificand = tmp$;
                        tmp$_0 = sign >>> 16 | halfSignificand;
                    } else {
                        var halfSignificand_0 = significand >>> 10;
                        var out = sign | signedExponent << 10 | halfSignificand_0;
                        tmp$_0 = (significand & 512) !== 0 ? out + 1 | 0 : out;
                    }

                    break;
            }
        }
        return new UShort_init(toShort(tmp$_0));
    };
    Float16$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var Float16$Companion_instance = null;

    function Float16$Companion_getInstance() {
        if (Float16$Companion_instance === null) {
            new Float16$Companion();
        }
        return Float16$Companion_instance;
    }

    Float16.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Float16',
        interfaces: []
    };

    function Float16_init(value, $this) {
        $this = $this || Object.create(Float16.prototype);
        Float16.call($this, Float16$Companion_getInstance().doubleToIntBits_14dthe$(value));
        return $this;
    }

    Float16.prototype.unbox = function () {
        return this.rawBits;
    };
    Float16.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.rawBits) | 0;
        return result;
    };
    Float16.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.rawBits, other.rawBits))));
    };

    function toFloat16($receiver) {
        return Float16_init($receiver);
    }

    function toFloat16_0($receiver) {
        return Float16_init($receiver);
    }

    function toFloat16_1($receiver) {
        return Float16_init($receiver);
    }

    var toFloat16_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.toFloat16_rcaex3$', wrapFunction(function () {
        var numberToDouble = Kotlin.numberToDouble;
        var Float16_init = _.com.soywiz.kmem.Float16_init_14dthe$;
        return function ($receiver) {
            return Float16_init(numberToDouble($receiver));
        };
    }));
    var toInt = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.toInt_1v8dcc$', function ($receiver) {
        return $receiver ? 1 : 0;
    });

    function toIntCeil($receiver) {
        return numberToInt(Math_0.ceil($receiver));
    }

    function toIntCeil_0($receiver) {
        return numberToInt(Math_0.ceil($receiver));
    }

    function toIntFloor($receiver) {
        return numberToInt(Math_0.floor($receiver));
    }

    function toIntFloor_0($receiver) {
        return numberToInt(Math_0.floor($receiver));
    }

    function toIntRound($receiver) {
        return Kotlin.Long.fromNumber(round($receiver)).toInt();
    }

    function toIntRound_0($receiver) {
        return Kotlin.Long.fromNumber(round($receiver)).toInt();
    }

    function toIntSafe($receiver) {
        if (L_2147483648.lessThanOrEqual($receiver) && $receiver.lessThanOrEqual(L2147483647))
            return $receiver.toInt();
        else
            throw IllegalArgumentException_init("Long doesn't fit Integer");
    }

    var get_unsigned = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_unsigned_mz3mee$', function ($receiver) {
        return $receiver & 255;
    });
    var get_unsigned_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_unsigned_s8ev3n$', wrapFunction(function () {
        var L4294967295 = new Kotlin.Long(-1, 0);
        return function ($receiver) {
            return Kotlin.Long.fromInt($receiver).and(L4294967295);
        };
    }));

    function ilog2(v) {
        return v === 0 ? -1 : 31 - Math_0.clz32(v) | 0;
    }

    function divFloor($receiver, that) {
        return $receiver / that | 0;
    }

    function divCeil($receiver, that) {
        return $receiver % that !== 0 ? ($receiver / that | 0) + 1 | 0 : $receiver / that | 0;
    }

    function convertRange($receiver, srcMin, srcMax, dstMin, dstMax) {
        return dstMin + (dstMax - dstMin) * (($receiver - srcMin) / (srcMax - srcMin));
    }

    function convertRange_0($receiver, srcMin, srcMax, dstMin, dstMax) {
        return numberToInt(dstMin + (dstMax - dstMin | 0) * (($receiver - srcMin | 0) / (srcMax - srcMin | 0)));
    }

    function convertRange_1($receiver, srcMin, srcMax, dstMin, dstMax) {
        return Kotlin.Long.fromNumber(dstMin.toNumber() + dstMax.subtract(dstMin).toNumber() * ($receiver.subtract(srcMin).toNumber() / srcMax.subtract(srcMin).toNumber()));
    }

    function convertRangeClamped($receiver, srcMin, srcMax, dstMin, dstMax) {
        return clamp_1(convertRange($receiver, srcMin, srcMax, dstMin, dstMax), dstMin, dstMax);
    }

    function convertRangeClamped_0($receiver, srcMin, srcMax, dstMin, dstMax) {
        return clamp(convertRange_0($receiver, srcMin, srcMax, dstMin, dstMax), dstMin, dstMax);
    }

    function convertRangeClamped_1($receiver, srcMin, srcMax, dstMin, dstMax) {
        return clamp_0(convertRange_1($receiver, srcMin, srcMax, dstMin, dstMax), dstMin, dstMax);
    }

    function isAlmostZero($receiver) {
        return Math_0.abs($receiver) <= 1.0E-19;
    }

    function isAlmostZero_0($receiver) {
        return Math_0.abs($receiver) <= 1.0E-19;
    }

    function isNanOrInfinite($receiver) {
        return isNaN_0($receiver) || isInfinite($receiver);
    }

    function isNanOrInfinite_0($receiver) {
        return isNaN_1($receiver) || isInfinite_0($receiver);
    }

    function umod($receiver, other) {
        var tmp$;
        var rm = $receiver % other;
        var remainder = rm === 0 ? 0 : rm;
        if (remainder < 0)
            tmp$ = remainder + other | 0;
        else
            tmp$ = remainder;
        return tmp$;
    }

    function umod_0($receiver, other) {
        var tmp$;
        var rm = $receiver % other;
        var remainder = rm === -0.0 ? 0.0 : rm;
        if (remainder < 0)
            tmp$ = remainder + other;
        else
            tmp$ = remainder;
        return tmp$;
    }

    function nextAlignedTo($receiver, align) {
        return isAlignedTo($receiver, align) ? $receiver : Kotlin.imul(($receiver / align | 0) + 1 | 0, align);
    }

    function nextAlignedTo_0($receiver, align) {
        return isAlignedTo_0($receiver, align) ? $receiver : $receiver.div(align).add(Kotlin.Long.fromInt(1)).multiply(align);
    }

    function prevAlignedTo($receiver, align) {
        return isAlignedTo($receiver, align) ? $receiver : nextAlignedTo($receiver, align) - align | 0;
    }

    function prevAlignedTo_0($receiver, align) {
        return isAlignedTo_0($receiver, align) ? $receiver : nextAlignedTo_0($receiver, align).subtract(align);
    }

    function isAlignedTo($receiver, alignment) {
        return alignment === 0 || $receiver % alignment === 0;
    }

    function isAlignedTo_0($receiver, alignment) {
        return equals(alignment, L0) || equals($receiver.modulo(alignment), L0);
    }

    function clamp($receiver, min, max) {
        return $receiver < min ? min : $receiver > max ? max : $receiver;
    }

    function clamp_0($receiver, min, max) {
        return $receiver.compareTo_11rb$(min) < 0 ? min : $receiver.compareTo_11rb$(max) > 0 ? max : $receiver;
    }

    function clamp_1($receiver, min, max) {
        return $receiver < min ? min : $receiver > max ? max : $receiver;
    }

    function clamp_2($receiver, min, max) {
        return $receiver < min ? min : $receiver > max ? max : $receiver;
    }

    function clamp01($receiver) {
        return clamp_1($receiver, 0.0, 1.0);
    }

    function clamp01_0($receiver) {
        return clamp_2($receiver, 0.0, 1.0);
    }

    function toIntClamp($receiver, min, max) {
        if (min === void 0)
            min = -2147483648;
        if (max === void 0)
            max = 2147483647;
        if ($receiver.toNumber() < min)
            return min;
        if ($receiver.toNumber() > max)
            return max;
        return $receiver.toInt();
    }

    function toUintClamp($receiver, min, max) {
        if (min === void 0)
            min = 0;
        if (max === void 0)
            max = 2147483647;
        return toIntClamp($receiver, min, max);
    }

    function get_isOdd($receiver) {
        return $receiver % 2 === 1;
    }

    function get_isEven($receiver) {
        return $receiver % 2 === 0;
    }

    function get_nextPowerOfTwo($receiver) {
        var v = $receiver;
        v = v - 1 | 0;
        v = v | v >> 1;
        v = v | v >> 2;
        v = v | v >> 4;
        v = v | v >> 8;
        v = v | v >> 16;
        v = v + 1 | 0;
        return v;
    }

    function get_prevPowerOfTwo($receiver) {
        return get_isPowerOfTwo($receiver) ? $receiver : get_nextPowerOfTwo($receiver) >>> 1;
    }

    function get_isPowerOfTwo($receiver) {
        return get_nextPowerOfTwo($receiver) === $receiver;
    }

    var arraycopyBase = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.internal.arraycopyBase_flr3ls$', function (src, srcPos, dst, dstPos, size, set) {
        if (src === dst && dstPos > srcPos) {
            var n = size;
            while ((n = n - 1 | 0, n) >= 0)
                set(srcPos + n | 0, dstPos + n | 0);
        } else {
            for (var n_0 = 0; n_0 < size; n_0++)
                set(srcPos + n_0 | 0, dstPos + n_0 | 0);
        }
    });

    function _arrayfill(array, value, start, end) {
        for (var n = start; n < end; n++)
            array[n] = value;
    }

    function _arrayfill_0(array, value, start, end) {
        for (var n = start; n < end; n++)
            array[n] = value;
    }

    function _arrayfill_1(array, value, start, end) {
        for (var n = start; n < end; n++)
            array[n] = value;
    }

    var _arrayfill_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._arrayfill_diwe25$', function (array, value, start, end) {
        array.fill(value, start, end);
    });
    var _arrayfill_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._arrayfill_38ja29$', function (array, value, start, end) {
        array.fill(value, start, end);
    });
    var _arrayfill_4 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._arrayfill_7lcbvb$', function (array, value, start, end) {
        array.fill(value, start, end);
    });
    var _arrayfill_5 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._arrayfill_9c50fl$', function (array, value, start, end) {
        array.fill(value, start, end);
    });
    var _arrayfill_6 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._arrayfill_7e20el$', function (array, value, start, end) {
        array.fill(value, start, end);
    });
    var MemBufferAlloc = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.MemBufferAlloc_za3lpa$', wrapFunction(function () {
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return new ArrayBuffer_init(size);
        };
    }));
    var MemBufferAllocNoDirect = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.MemBufferAllocNoDirect_za3lpa$', wrapFunction(function () {
        var ArrayBuffer_init = ArrayBuffer;
        return function (size) {
            return new ArrayBuffer_init(size);
        };
    }));
    var MemBufferWrap = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.MemBufferWrap_fqrh44$', function (array) {
        return array.buffer;
    });
    var get_size_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_size_qfdq9h$', function ($receiver) {
        return $receiver.byteLength;
    });
    var _sliceInt8Buffer = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._sliceInt8Buffer_3gn6rj$', wrapFunction(function () {
        var Int8Array_init = Int8Array;
        return function ($receiver, offset, size) {
            return new Int8Array_init($receiver, offset * 1 | 0, size);
        };
    }));
    var _sliceInt16Buffer = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._sliceInt16Buffer_3gn6rj$', wrapFunction(function () {
        var Int16Array_init = Int16Array;
        return function ($receiver, offset, size) {
            return new Int16Array_init($receiver, offset * 2 | 0, size);
        };
    }));
    var _sliceInt32Buffer = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._sliceInt32Buffer_3gn6rj$', wrapFunction(function () {
        var Int32Array_init = Int32Array;
        return function ($receiver, offset, size) {
            return new Int32Array_init($receiver, offset * 4 | 0, size);
        };
    }));
    var _sliceFloat32Buffer = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._sliceFloat32Buffer_3gn6rj$', wrapFunction(function () {
        var Float32Array_init = Float32Array;
        return function ($receiver, offset, size) {
            return new Float32Array_init($receiver, offset * 4 | 0, size);
        };
    }));
    var _sliceFloat64Buffer = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem._sliceFloat64Buffer_3gn6rj$', wrapFunction(function () {
        var Float64Array_init = Float64Array;
        return function ($receiver, offset, size) {
            return new Float64Array_init($receiver, offset * 8 | 0, size);
        };
    }));

    function getData($receiver) {
        return new DataView($receiver);
    }

    var get_mem = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_mem_t4ci45$', function ($receiver) {
        return $receiver.buffer;
    });

    function getByte($receiver, index) {
        return $receiver.getInt8(index);
    }

    function setByte($receiver, index, value) {
        $receiver.setInt8(index, value);
    }

    function getShort($receiver, index) {
        return $receiver.getInt16(index, true);
    }

    function setShort($receiver, index, value) {
        $receiver.setInt16(index, value, true);
    }

    function getInt($receiver, index) {
        return $receiver.getInt32(index, true);
    }

    function setInt($receiver, index, value) {
        $receiver.setInt32(index, value, true);
    }

    function getFloat($receiver, index) {
        return $receiver.getFloat32(index, true);
    }

    function setFloat($receiver, index, value) {
        $receiver.setFloat32(index, value, true);
    }

    function getDouble($receiver, index) {
        return $receiver.getFloat64(index, true);
    }

    function setDouble($receiver, index, value) {
        $receiver.setFloat64(index, value, true);
    }

    var get_mem_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_mem_1c7w7g$', function ($receiver) {
        return $receiver.buffer;
    });
    var get_offset = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_offset_1c7w7g$', function ($receiver) {
        return $receiver.byteOffset / 1 | 0;
    });
    var get_size_4 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_size_1c7w7g$', function ($receiver) {
        return $receiver.length;
    });
    var get_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_xri1zq$', function ($receiver, index) {
        return $receiver[index];
    });
    var set = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.set_wq71gh$', function ($receiver, index, value) {
        $receiver[index] = value;
    });
    var get_mem_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_mem_1qrwyz$', function ($receiver) {
        return $receiver.buffer;
    });
    var get_offset_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_offset_1qrwyz$', function ($receiver) {
        return $receiver.byteOffset / 2 | 0;
    });
    var get_size_5 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_size_1qrwyz$', function ($receiver) {
        return $receiver.length;
    });
    var get_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_cwlqq1$', function ($receiver, index) {
        return $receiver[index];
    });
    var set_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.set_3szanw$', function ($receiver, index, value) {
        $receiver[index] = value;
    });
    var get_mem_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_mem_2t43qp$', function ($receiver) {
        return $receiver.buffer;
    });
    var get_offset_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_offset_2t43qp$', function ($receiver) {
        return $receiver.byteOffset / 4 | 0;
    });
    var get_size_6 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_size_2t43qp$', function ($receiver) {
        return $receiver.length;
    });
    var get_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_6ngfjl$', function ($receiver, index) {
        return $receiver[index];
    });
    var set_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.set_yyuw59$', function ($receiver, index, value) {
        $receiver[index] = value;
    });
    var get_mem_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_mem_948t6k$', function ($receiver) {
        return $receiver.buffer;
    });
    var get_offset_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_offset_948t6k$', function ($receiver) {
        return $receiver.byteOffset / 4 | 0;
    });
    var get_size_7 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_size_948t6k$', function ($receiver) {
        return $receiver.length;
    });
    var get_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_vvlk2q$', function ($receiver, index) {
        return $receiver[index];
    });
    var set_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.set_rpd3xf$', function ($receiver, index, value) {
        $receiver[index] = value;
    });
    var get_mem_4 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_mem_h4bb51$', function ($receiver) {
        return $receiver.buffer;
    });
    var get_offset_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_offset_h4bb51$', function ($receiver) {
        return $receiver.byteOffset / 8 | 0;
    });
    var get_size_8 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_size_h4bb51$', function ($receiver) {
        return $receiver.length;
    });
    var get_4 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.get_yg2kxp$', function ($receiver, index) {
        return $receiver[index];
    });
    var set_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.set_ogqgs1$', function ($receiver, index, value) {
        $receiver[index] = value;
    });
    var asInt8Array = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asInt8Array_964n91$', function ($receiver) {
        return $receiver;
    });
    var asTyped = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asTyped_964n91$', function ($receiver) {
        return $receiver;
    });
    var asInt16Array = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asInt16Array_i2lc79$', function ($receiver) {
        return $receiver;
    });
    var asTyped_0 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asTyped_i2lc79$', function ($receiver) {
        return $receiver;
    });
    var asInt32Array = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asInt32Array_tmsbgo$', function ($receiver) {
        return $receiver;
    });
    var asTyped_1 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asTyped_tmsbgo$', function ($receiver) {
        return $receiver;
    });
    var asFloat32Array = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asFloat32Array_rjqryz$', function ($receiver) {
        return $receiver;
    });
    var asTyped_2 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asTyped_rjqryz$', function ($receiver) {
        return $receiver;
    });
    var asFloat64Array = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asFloat64Array_bvy38s$', function ($receiver) {
        return $receiver;
    });
    var asTyped_3 = defineInlineFunction('kmem-root-kmem.com.soywiz.kmem.asTyped_bvy38s$', function ($receiver) {
        return $receiver;
    });

    function arraycopy_23(src, srcPos, dst, dstPos, size) {
        (new Int8Array(dst, dstPos)).set(new Int8Array(src, srcPos, size), 0);
    }

    function arraycopy_24(src, srcPos, dst, dstPos, size) {
        (new Int8Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_25(src, srcPos, dst, dstPos, size) {
        dst.set((new Int8Array_init(src, 0 * 1 | 0, src.byteLength / 1 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_26(src, srcPos, dst, dstPos, size) {
        (new Int16Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_27(src, srcPos, dst, dstPos, size) {
        dst.set((new Int16Array_init(src, 0 * 2 | 0, src.byteLength / 2 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_28(src, srcPos, dst, dstPos, size) {
        (new Int32Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_29(src, srcPos, dst, dstPos, size) {
        dst.set((new Int32Array_init(src, 0 * 4 | 0, src.byteLength / 4 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_30(src, srcPos, dst, dstPos, size) {
        (new Float32Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_31(src, srcPos, dst, dstPos, size) {
        dst.set((new Float32Array_init(src, 0 * 4 | 0, src.byteLength / 4 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_32(src, srcPos, dst, dstPos, size) {
        (new Float64Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
    }

    function arraycopy_33(src, srcPos, dst, dstPos, size) {
        dst.set((new Float64Array_init(src, 0 * 8 | 0, src.byteLength / 8 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
    }

    var package$com = _.com || (_.com = {});
    var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
    var package$kmem = package$soywiz.kmem || (package$soywiz.kmem = {});
    package$kmem.arraycopy_vybhjg$ = arraycopy;
    package$kmem.arraycopy_3poh7i$ = arraycopy_0;
    package$kmem.arraycopy_m70dtq$ = arraycopy_1;
    package$kmem.arraycopy_nlwz52$ = arraycopy_2;
    package$kmem.arraycopy_ai5qaq$ = arraycopy_3;
    package$kmem.arraycopy_yp22ie$ = arraycopy_4;
    package$kmem.arraycopy_lvhpry$ = arraycopy_5;
    package$kmem.arraycopy_5ukzfm$ = arraycopy_6;
    package$kmem.arraycopy_dgpv4k$ = arraycopy_7;
    package$kmem.arrayfill_iv3oks$ = arrayfill;
    package$kmem.arrayfill_9l0r9l$ = arrayfill_0;
    package$kmem.arrayfill_cjoi1f$ = arrayfill_1;
    $$importsForInline$$['kmem-root-kmem'] = _;
    package$kmem.arrayfill_diwe25$ = arrayfill_2;
    package$kmem.arrayfill_38ja29$ = arrayfill_3;
    package$kmem.arrayfill_7lcbvb$ = arrayfill_4;
    package$kmem.arrayfill_9c50fl$ = arrayfill_5;
    package$kmem.arrayfill_7e20el$ = arrayfill_6;
    package$kmem.fill_jfbbbd$ = fill;
    package$kmem.fill_py0txo$ = fill_0;
    package$kmem.fill_wp4zxy$ = fill_1;
    package$kmem.fill_6mk3ue$ = fill_2;
    package$kmem.fill_htcctw$ = fill_3;
    package$kmem.fill_tpuxuu$ = fill_4;
    package$kmem.fill_nwy378$ = fill_5;
    package$kmem.fill_x4f2cq$ = fill_6;
    package$kmem.UByteArrayInt = UByteArrayInt;
    package$kmem.UByteArrayInt_za3lpa$ = UByteArrayInt_0;
    package$kmem.asUByteArrayInt_964n91$ = asUByteArrayInt;
    package$kmem.asByteArray_ngdjuy$ = asByteArray;
    package$kmem.FloatArrayFromIntArray = FloatArrayFromIntArray;
    package$kmem.asFloatArray_tmsbgo$ = asFloatArray;
    package$kmem.asIntArray_wg1pao$ = asIntArray;
    package$kmem.reinterpretAsInt_81szk$ = reinterpretAsInt;
    package$kmem.reinterpretAsLong_yrwdxr$ = reinterpretAsLong;
    package$kmem.reinterpretAsFloat_s8ev3n$ = reinterpretAsFloat;
    package$kmem.reinterpretAsDouble_mts6qi$ = reinterpretAsDouble;
    package$kmem.rotateLeft_k13f4a$ = rotateLeft_1;
    package$kmem.rotateLeft_dqglrj$ = rotateLeft_2;
    package$kmem.rotateLeft_if0zpk$ = rotateLeft_3;
    package$kmem.rotateRight_k13f4a$ = rotateRight_0;
    package$kmem.rotateRight_dqglrj$ = rotateRight_1;
    package$kmem.rotateRight_if0zpk$ = rotateRight_2;
    package$kmem.reverseBytes_5vcgdc$ = reverseBytes;
    package$kmem.reverseBytes_myv2d0$ = reverseBytes_0;
    package$kmem.reverseBytes_s8ev3n$ = reverseBytes_1;
    package$kmem.reverseBytes_mts6qi$ = reverseBytes_2;
    package$kmem.reverseBits_s8ev3n$ = reverseBits;
    package$kmem.clz32_za3lpa$ = clz32;
    package$kmem.countLeadingZeros_s8ev3n$ = countLeadingZeros;
    package$kmem.countTrailingZeros_s8ev3n$ = countTrailingZeros;
    package$kmem.countLeadingOnes_s8ev3n$ = countLeadingOnes;
    package$kmem.countTrailingOnes_s8ev3n$ = countTrailingOnes;
    package$kmem.signExtend_dqglrj$ = signExtend;
    package$kmem.signExtend_if0zpk$ = signExtend_0;
    package$kmem.mask_s8ev3n$ = mask;
    package$kmem.mask_mts6qi$ = mask_0;
    package$kmem.extract_e4yvb3$ = extract;
    package$kmem.extract_dqglrj$ = extract_0;
    package$kmem.extractBool_dqglrj$ = extractBool;
    package$kmem.extract8_dqglrj$ = extract8;
    package$kmem.extract16_dqglrj$ = extract16;
    package$kmem.extractSigned_e4yvb3$ = extractSigned;
    package$kmem.extract8Signed_dqglrj$ = extract8Signed;
    package$kmem.extract16Signed_dqglrj$ = extract16Signed;
    package$kmem.extractByte_dqglrj$ = extractByte;
    package$kmem.extractShort_dqglrj$ = extractShort;
    package$kmem.extractScaled_4684dr$ = extractScaled;
    package$kmem.extractScaledf01_e4yvb3$ = extractScaledf01;
    package$kmem.extractScaledFF_e4yvb3$ = extractScaledFF;
    package$kmem.extractScaledFFDefault_4684dr$ = extractScaledFFDefault;
    package$kmem.insert_4684dr$ = insert;
    package$kmem.insert8_e4yvb3$ = insert8;
    package$kmem.insert_kvkj6u$ = insert_0;
    package$kmem.insertScaled_oxkt1b$ = insertScaled;
    package$kmem.insertScaledFF_4684dr$ = insertScaledFF;
    package$kmem.hasFlags_dqglrj$ = hasFlags;
    package$kmem.bit_za3lpa$ = bit;
    package$kmem.unsetBits_dqglrj$ = unsetBits;
    package$kmem.setBits_dqglrj$ = setBits;
    package$kmem.sliceInt8Buffer_3gn6rj$ = sliceInt8Buffer;
    package$kmem.sliceInt16Buffer_3gn6rj$ = sliceInt16Buffer;
    package$kmem.sliceInt32Buffer_3gn6rj$ = sliceInt32Buffer;
    package$kmem.sliceFloat32Buffer_3gn6rj$ = sliceFloat32Buffer;
    package$kmem.sliceFloat64Buffer_3gn6rj$ = sliceFloat64Buffer;
    package$kmem.sliceUint8Buffer_3gn6rj$ = sliceUint8Buffer;
    package$kmem.sliceUint16Buffer_3gn6rj$ = sliceUint16Buffer;
    package$kmem.sliceInt8BufferByteOffset_3gn6rj$ = sliceInt8BufferByteOffset;
    package$kmem.sliceInt16BufferByteOffset_3gn6rj$ = sliceInt16BufferByteOffset;
    package$kmem.sliceInt32BufferByteOffset_3gn6rj$ = sliceInt32BufferByteOffset;
    package$kmem.sliceFloat32BufferByteOffset_3gn6rj$ = sliceFloat32BufferByteOffset;
    package$kmem.sliceFloat64BufferByteOffset_3gn6rj$ = sliceFloat64BufferByteOffset;
    package$kmem.sliceUint8BufferByteOffset_3gn6rj$ = sliceUint8BufferByteOffset;
    package$kmem.sliceUint16BufferByteOffset_3gn6rj$ = sliceUint16BufferByteOffset;
    package$kmem.asInt8Buffer_qfdq9h$ = asInt8Buffer;
    package$kmem.asInt16Buffer_qfdq9h$ = asInt16Buffer;
    package$kmem.asInt32Buffer_qfdq9h$ = asInt32Buffer;
    package$kmem.asFloat32Buffer_qfdq9h$ = asFloat32Buffer;
    package$kmem.asFloat64Buffer_qfdq9h$ = asFloat64Buffer;
    package$kmem.MemBufferAlloc_za3lpa$ = MemBufferAlloc;
    package$kmem.Int8BufferAlloc_za3lpa$ = Int8BufferAlloc;
    package$kmem.subarray_o5cym0$ = subarray;
    package$kmem.Int16BufferAlloc_za3lpa$ = Int16BufferAlloc;
    package$kmem.subarray_4t3t55$ = subarray_0;
    package$kmem.Int32BufferAlloc_za3lpa$ = Int32BufferAlloc;
    package$kmem.subarray_yyuw59$ = subarray_1;
    package$kmem.Float32BufferAlloc_za3lpa$ = Float32BufferAlloc;
    package$kmem.subarray_ae5d4g$ = subarray_2;
    package$kmem.Float64BufferAlloc_za3lpa$ = Float64BufferAlloc;
    package$kmem.subarray_yobqq7$ = subarray_3;
    package$kmem.arraycopy_uwef9a$ = arraycopy_8;
    package$kmem.arraycopy_8tjh9j$ = arraycopy_9;
    package$kmem.arraycopy_qkjr37$ = arraycopy_10;
    package$kmem.arraycopy_158rwy$ = arraycopy_11;
    package$kmem.arraycopy_4z3iam$ = arraycopy_12;
    package$kmem.arraycopy_ygklgy$ = arraycopy_13;
    package$kmem.arraycopy_180aji$ = arraycopy_14;
    package$kmem.arraycopy_ou7pqt$ = arraycopy_15;
    package$kmem.arraycopy_qjgkt5$ = arraycopy_16;
    package$kmem.arraycopy_kf4lg$ = arraycopy_17;
    package$kmem.arraycopy_3broed$ = arraycopy_18;
    package$kmem.arraycopy_clb6nt$ = arraycopy_19;
    package$kmem.arraycopy_y3efd2$ = arraycopy_20;
    package$kmem.arraycopy_9x1f59$ = arraycopy_21;
    package$kmem.arraycopy_pxmij7$ = arraycopy_22;
    package$kmem.NewUint8Buffer_qmgm5g$ = NewUint8Buffer;
    package$kmem.NewUint16Buffer_qmgm5g$ = NewUint16Buffer;
    package$kmem.NewInt8Buffer_qmgm5g$ = NewInt8Buffer;
    package$kmem.NewInt16Buffer_qmgm5g$ = NewInt16Buffer;
    package$kmem.NewInt32Buffer_qmgm5g$ = NewInt32Buffer;
    package$kmem.NewFloat32Buffer_qmgm5g$ = NewFloat32Buffer;
    package$kmem.NewFloat64Buffer_qmgm5g$ = NewFloat64Buffer;
    package$kmem.ByteArrayBuilder_init_za3lpa$ = ByteArrayBuilder_init;
    package$kmem.ByteArrayBuilder = ByteArrayBuilder;
    package$kmem.ByteArrayBuilderLE = ByteArrayBuilderLE;
    package$kmem.get_size_nzkyce$ = get_size;
    package$kmem.append_zfhuda$ = append;
    package$kmem.append_s5vk9j$ = append_0;
    package$kmem.appendByte_up1ozk$ = appendByte;
    package$kmem.append_723vcg$ = append_1;
    package$kmem.append_o5dfn9$ = append_2;
    package$kmem.s8_up1ozk$ = s8;
    package$kmem.s16_up1ozk$ = s16;
    package$kmem.s24_up1ozk$ = s24;
    package$kmem.s32_up1ozk$ = s32;
    package$kmem.f16_c6ygd1$ = f16;
    package$kmem.f32_kqskbx$ = f32;
    package$kmem.f64_2w900w$ = f64;
    package$kmem.clear_nzkyce$ = clear;
    package$kmem.toByteArray_nzkyce$ = toByteArray;
    package$kmem.ByteArrayBuilderBE = ByteArrayBuilderBE;
    package$kmem.get_size_nzkqxg$ = get_size_0;
    package$kmem.append_kh43c$ = append_3;
    package$kmem.append_uadsdb$ = append_4;
    package$kmem.appendByte_86s33q$ = appendByte_0;
    package$kmem.append_3n11a2$ = append_5;
    package$kmem.append_qjtwxr$ = append_6;
    package$kmem.s8_86s33q$ = s8_0;
    package$kmem.s16_86s33q$ = s16_0;
    package$kmem.s24_86s33q$ = s24_0;
    package$kmem.s32_86s33q$ = s32_0;
    package$kmem.f16_729tzz$ = f16_0;
    package$kmem.f32_fhfxy5$ = f32_0;
    package$kmem.f64_gaq4yy$ = f64_0;
    package$kmem.clear_nzkqxg$ = clear_0;
    package$kmem.toByteArray_nzkqxg$ = toByteArray_0;
    package$kmem.buildByteArray_j0ynu3$ = buildByteArray;
    package$kmem.buildByteArrayLE_ko6uck$ = buildByteArrayLE;
    package$kmem.buildByteArrayBE_y2nzam$ = buildByteArrayBE;
    package$kmem.readU8_mrm5p$ = readU8;
    package$kmem.readU16LE_mrm5p$ = readU16LE;
    package$kmem.readU24LE_mrm5p$ = readU24LE;
    package$kmem.readU32LE_mrm5p$ = readU32LE;
    package$kmem.readU16BE_mrm5p$ = readU16BE;
    package$kmem.readU24BE_mrm5p$ = readU24BE;
    package$kmem.readU32BE_mrm5p$ = readU32BE;
    package$kmem.readS8_mrm5p$ = readS8;
    package$kmem.readS16LE_mrm5p$ = readS16LE;
    package$kmem.readS24LE_mrm5p$ = readS24LE;
    package$kmem.readS32LE_mrm5p$ = readS32LE;
    package$kmem.readS64LE_mrm5p$ = readS64LE;
    package$kmem.readF16LE_mrm5p$ = readF16LE;
    package$kmem.readF32LE_mrm5p$ = readF32LE;
    package$kmem.readF64LE_mrm5p$ = readF64LE;
    package$kmem.readS16BE_mrm5p$ = readS16BE;
    package$kmem.readS24BE_mrm5p$ = readS24BE;
    package$kmem.readS32BE_mrm5p$ = readS32BE;
    package$kmem.readS64BE_mrm5p$ = readS64BE;
    package$kmem.readF16BE_mrm5p$ = readF16BE;
    package$kmem.readF32BE_mrm5p$ = readF32BE;
    package$kmem.readF64BE_mrm5p$ = readF64BE;
    package$kmem.readU16_v6bsu2$ = readU16;
    package$kmem.readU24_v6bsu2$ = readU24;
    package$kmem.readU32_v6bsu2$ = readU32;
    package$kmem.readS16_v6bsu2$ = readS16;
    package$kmem.readS24_v6bsu2$ = readS24;
    package$kmem.readS32_v6bsu2$ = readS32;
    package$kmem.readS64_v6bsu2$ = readS64;
    package$kmem.readF16_v6bsu2$ = readF16;
    package$kmem.readF32_v6bsu2$ = readF32;
    package$kmem.readF64_v6bsu2$ = readF64;
    package$kmem.readByteArray_ietg8x$ = readByteArray;
    package$kmem.readShortArrayLE_ietg8x$ = readShortArrayLE;
    package$kmem.readCharArrayLE_ietg8x$ = readCharArrayLE;
    package$kmem.readIntArrayLE_ietg8x$ = readIntArrayLE;
    package$kmem.readLongArrayLE_ietg8x$ = readLongArrayLE;
    package$kmem.readFloatArrayLE_ietg8x$ = readFloatArrayLE;
    package$kmem.readDoubleArrayLE_ietg8x$ = readDoubleArrayLE;
    package$kmem.readShortArrayBE_ietg8x$ = readShortArrayBE;
    package$kmem.readCharArrayBE_ietg8x$ = readCharArrayBE;
    package$kmem.readIntArrayBE_ietg8x$ = readIntArrayBE;
    package$kmem.readLongArrayBE_ietg8x$ = readLongArrayBE;
    package$kmem.readFloatArrayBE_ietg8x$ = readFloatArrayBE;
    package$kmem.readDoubleArrayBE_ietg8x$ = readDoubleArrayBE;
    package$kmem.readShortArray_vahp5y$ = readShortArray;
    package$kmem.readCharArray_vahp5y$ = readCharArray;
    package$kmem.readIntArray_vahp5y$ = readIntArray;
    package$kmem.readLongArray_vahp5y$ = readLongArray;
    package$kmem.readFloatArray_vahp5y$ = readFloatArray;
    package$kmem.readDoubleArray_vahp5y$ = readDoubleArray;
    package$kmem.write8_ietg8x$ = write8;
    package$kmem.write8_2iihii$ = write8_0;
    package$kmem.write16_vahp5y$ = write16;
    package$kmem.write24_vahp5y$ = write24;
    package$kmem.write32_vahp5y$ = write32;
    package$kmem.write64_zb9jod$ = write64;
    package$kmem.writeF16_ti1ral$ = writeF16;
    package$kmem.writeF32_wimvbt$ = writeF32;
    package$kmem.writeF64_nq0ryw$ = writeF64;
    package$kmem.write16LE_ietg8x$ = write16LE;
    package$kmem.write24LE_ietg8x$ = write24LE;
    package$kmem.write32LE_ietg8x$ = write32LE;
    package$kmem.write32LE_2iihii$ = write32LE_0;
    package$kmem.write64LE_2iihii$ = write64LE;
    package$kmem.writeF16LE_ffghqk$ = writeF16LE;
    package$kmem.writeF32LE_6tgd4e$ = writeF32LE;
    package$kmem.writeF64LE_2mkvlt$ = writeF64LE;
    package$kmem.write16BE_ietg8x$ = write16BE;
    package$kmem.write24BE_ietg8x$ = write24BE;
    package$kmem.write32BE_ietg8x$ = write32BE;
    package$kmem.write32BE_2iihii$ = write32BE_0;
    package$kmem.write64BE_2iihii$ = write64BE;
    package$kmem.writeF16BE_ffghqk$ = writeF16BE;
    package$kmem.writeF32BE_6tgd4e$ = writeF32BE;
    package$kmem.writeF64BE_2mkvlt$ = writeF64BE;
    package$kmem.writeBytes_cinhdp$ = writeBytes;
    package$kmem.writeArrayLE_ns39l7$ = writeArrayLE;
    package$kmem.writeArrayLE_744o0l$ = writeArrayLE_0;
    package$kmem.writeArrayLE_ir5l5k$ = writeArrayLE_1;
    package$kmem.writeArrayLE_nitnbj$ = writeArrayLE_2;
    package$kmem.writeArrayLE_l7896z$ = writeArrayLE_3;
    package$kmem.writeArrayLE_t2mdne$ = writeArrayLE_4;
    package$kmem.writeArrayBE_ns39l7$ = writeArrayBE;
    package$kmem.writeArrayBE_744o0l$ = writeArrayBE_0;
    package$kmem.writeArrayBE_ir5l5k$ = writeArrayBE_1;
    package$kmem.writeArrayBE_nitnbj$ = writeArrayBE_2;
    package$kmem.writeArrayBE_l7896z$ = writeArrayBE_3;
    package$kmem.writeArrayBE_t2mdne$ = writeArrayBE_4;
    package$kmem.ByteArrayReader = ByteArrayReader;
    package$kmem.ByteArrayReaderLE = ByteArrayReaderLE;
    package$kmem.get_size_3bi9n4$ = get_size_1;
    package$kmem.get_remaining_3bi9n4$ = get_remaining;
    package$kmem.get_hasMore_3bi9n4$ = get_hasMore;
    package$kmem.u8_3bi9n4$ = u8_0;
    package$kmem.s8_3bi9n4$ = s8_1;
    package$kmem.u16_3bi9n4$ = u16;
    package$kmem.s16_3bi9n4$ = s16_1;
    package$kmem.u24_3bi9n4$ = u24;
    package$kmem.s24_3bi9n4$ = s24_1;
    package$kmem.u32_3bi9n4$ = u32;
    package$kmem.s32_3bi9n4$ = s32_1;
    package$kmem.f16_3bi9n4$ = f16_1;
    package$kmem.f32_3bi9n4$ = f32_1;
    package$kmem.f64_3bi9n4$ = f64_1;
    package$kmem.ByteArrayReaderBE = ByteArrayReaderBE;
    package$kmem.get_size_3bi286$ = get_size_2;
    package$kmem.get_remaining_3bi286$ = get_remaining_0;
    package$kmem.get_hasMore_3bi286$ = get_hasMore_0;
    package$kmem.u8_3bi286$ = u8_1;
    package$kmem.s8_3bi286$ = s8_2;
    package$kmem.u16_3bi286$ = u16_0;
    package$kmem.s16_3bi286$ = s16_2;
    package$kmem.u24_3bi286$ = u24_0;
    package$kmem.s24_3bi286$ = s24_2;
    package$kmem.u32_3bi286$ = u32_0;
    package$kmem.s32_3bi286$ = s32_2;
    package$kmem.f16_3bi286$ = f16_2;
    package$kmem.f32_3bi286$ = f32_2;
    package$kmem.f64_3bi286$ = f64_2;
    package$kmem.reader_ietg8x$ = reader;
    package$kmem.readerLE_ietg8x$ = readerLE;
    package$kmem.readerBE_ietg8x$ = readerBE;
    package$kmem.read_fkh7wh$ = read;
    package$kmem.readLE_rfyglk$ = readLE;
    package$kmem.readBE_m8moqq$ = readBE;
    Object.defineProperty(FBuffer, 'Companion', {
        get: FBuffer$Companion_getInstance
    });
    package$kmem.FBuffer = FBuffer;
    Object.defineProperty(Uint8Buffer, 'Companion', {
        get: Uint8Buffer$Companion_getInstance
    });
    package$kmem.Uint8Buffer = Uint8Buffer;
    Object.defineProperty(Uint16Buffer, 'Companion', {
        get: Uint16Buffer$Companion_getInstance
    });
    package$kmem.Uint16Buffer = Uint16Buffer;
    package$kmem.Uint8BufferAlloc_za3lpa$ = Uint8BufferAlloc;
    package$kmem.Uint16BufferAlloc_za3lpa$ = Uint16BufferAlloc;
    package$kmem.fbuffer_k36cnm$ = fbuffer;
    Object.defineProperty(Float16, 'Companion', {
        get: Float16$Companion_getInstance
    });
    package$kmem.Float16_init_14dthe$ = Float16_init;
    package$kmem.Float16 = Float16;
    package$kmem.toFloat16_s8ev3n$ = toFloat16;
    package$kmem.toFloat16_yrwdxr$ = toFloat16_0;
    package$kmem.toFloat16_81szk$ = toFloat16_1;
    package$kmem.toFloat16_rcaex3$ = toFloat16_2;
    package$kmem.toInt_1v8dcc$ = toInt;
    package$kmem.toIntCeil_81szk$ = toIntCeil;
    package$kmem.toIntCeil_yrwdxr$ = toIntCeil_0;
    package$kmem.toIntFloor_81szk$ = toIntFloor;
    package$kmem.toIntFloor_yrwdxr$ = toIntFloor_0;
    package$kmem.toIntRound_81szk$ = toIntRound;
    package$kmem.toIntRound_yrwdxr$ = toIntRound_0;
    package$kmem.toIntSafe_mts6qi$ = toIntSafe;
    package$kmem.get_unsigned_mz3mee$ = get_unsigned;
    package$kmem.get_unsigned_s8ev3n$ = get_unsigned_0;
    package$kmem.ilog2_za3lpa$ = ilog2;
    package$kmem.divFloor_dqglrj$ = divFloor;
    package$kmem.divCeil_dqglrj$ = divCeil;
    package$kmem.convertRange_legt9$ = convertRange;
    package$kmem.convertRange_oxkt1b$ = convertRange_0;
    package$kmem.convertRange_dvkv0a$ = convertRange_1;
    package$kmem.convertRangeClamped_legt9$ = convertRangeClamped;
    package$kmem.convertRangeClamped_oxkt1b$ = convertRangeClamped_0;
    package$kmem.convertRangeClamped_dvkv0a$ = convertRangeClamped_1;
    package$kmem.isAlmostZero_81szk$ = isAlmostZero;
    package$kmem.isAlmostZero_yrwdxr$ = isAlmostZero_0;
    package$kmem.isNanOrInfinite_81szk$ = isNanOrInfinite;
    package$kmem.isNanOrInfinite_yrwdxr$ = isNanOrInfinite_0;
    package$kmem.umod_dqglrj$ = umod;
    package$kmem.umod_38ydlf$ = umod_0;
    package$kmem.nextAlignedTo_dqglrj$ = nextAlignedTo;
    package$kmem.nextAlignedTo_2p08ub$ = nextAlignedTo_0;
    package$kmem.prevAlignedTo_dqglrj$ = prevAlignedTo;
    package$kmem.prevAlignedTo_2p08ub$ = prevAlignedTo_0;
    package$kmem.isAlignedTo_dqglrj$ = isAlignedTo;
    package$kmem.isAlignedTo_2p08ub$ = isAlignedTo_0;
    package$kmem.clamp_e4yvb3$ = clamp;
    package$kmem.clamp_ekzx8g$ = clamp_0;
    package$kmem.clamp_nig4hr$ = clamp_1;
    package$kmem.clamp_wj6e7o$ = clamp_2;
    package$kmem.clamp01_yrwdxr$ = clamp01;
    package$kmem.clamp01_81szk$ = clamp01_0;
    package$kmem.toIntClamp_jfhjuu$ = toIntClamp;
    package$kmem.toUintClamp_jfhjuu$ = toUintClamp;
    package$kmem.get_isOdd_s8ev3n$ = get_isOdd;
    package$kmem.get_isEven_s8ev3n$ = get_isEven;
    package$kmem.get_nextPowerOfTwo_s8ev3n$ = get_nextPowerOfTwo;
    package$kmem.get_prevPowerOfTwo_s8ev3n$ = get_prevPowerOfTwo;
    package$kmem.get_isPowerOfTwo_s8ev3n$ = get_isPowerOfTwo;
    var package$internal = package$kmem.internal || (package$kmem.internal = {});
    package$internal.arraycopyBase_flr3ls$ = arraycopyBase;
    package$kmem._arrayfill_iv3oks$ = _arrayfill;
    package$kmem._arrayfill_9l0r9l$ = _arrayfill_0;
    package$kmem._arrayfill_cjoi1f$ = _arrayfill_1;
    package$kmem._arrayfill_diwe25$ = _arrayfill_2;
    package$kmem._arrayfill_38ja29$ = _arrayfill_3;
    package$kmem._arrayfill_7lcbvb$ = _arrayfill_4;
    package$kmem._arrayfill_9c50fl$ = _arrayfill_5;
    package$kmem._arrayfill_7e20el$ = _arrayfill_6;
    package$kmem.MemBufferAllocNoDirect_za3lpa$ = MemBufferAllocNoDirect;
    package$kmem.MemBufferWrap_fqrh44$ = MemBufferWrap;
    package$kmem.get_size_qfdq9h$ = get_size_3;
    package$kmem._sliceInt8Buffer_3gn6rj$ = _sliceInt8Buffer;
    package$kmem._sliceInt16Buffer_3gn6rj$ = _sliceInt16Buffer;
    package$kmem._sliceInt32Buffer_3gn6rj$ = _sliceInt32Buffer;
    package$kmem._sliceFloat32Buffer_3gn6rj$ = _sliceFloat32Buffer;
    package$kmem._sliceFloat64Buffer_3gn6rj$ = _sliceFloat64Buffer;
    package$kmem.getData_qfdq9h$ = getData;
    package$kmem.get_mem_t4ci45$ = get_mem;
    package$kmem.getByte_gt8xkd$ = getByte;
    package$kmem.setByte_pfef92$ = setByte;
    package$kmem.getShort_gt8xkd$ = getShort;
    package$kmem.setShort_76832m$ = setShort;
    package$kmem.getInt_gt8xkd$ = getInt;
    package$kmem.setInt_61xgu7$ = setInt;
    package$kmem.getFloat_gt8xkd$ = getFloat;
    package$kmem.setFloat_6z5awe$ = setFloat;
    package$kmem.getDouble_gt8xkd$ = getDouble;
    package$kmem.setDouble_29w7i7$ = setDouble;
    package$kmem.get_mem_1c7w7g$ = get_mem_0;
    package$kmem.get_offset_1c7w7g$ = get_offset;
    package$kmem.get_size_1c7w7g$ = get_size_4;
    package$kmem.get_xri1zq$ = get_0;
    package$kmem.set_wq71gh$ = set;
    package$kmem.get_mem_1qrwyz$ = get_mem_1;
    package$kmem.get_offset_1qrwyz$ = get_offset_0;
    package$kmem.get_size_1qrwyz$ = get_size_5;
    package$kmem.get_cwlqq1$ = get_1;
    package$kmem.set_3szanw$ = set_0;
    package$kmem.get_mem_2t43qp$ = get_mem_2;
    package$kmem.get_offset_2t43qp$ = get_offset_1;
    package$kmem.get_size_2t43qp$ = get_size_6;
    package$kmem.get_6ngfjl$ = get_2;
    package$kmem.set_yyuw59$ = set_1;
    package$kmem.get_mem_948t6k$ = get_mem_3;
    package$kmem.get_offset_948t6k$ = get_offset_2;
    package$kmem.get_size_948t6k$ = get_size_7;
    package$kmem.get_vvlk2q$ = get_3;
    package$kmem.set_rpd3xf$ = set_2;
    package$kmem.get_mem_h4bb51$ = get_mem_4;
    package$kmem.get_offset_h4bb51$ = get_offset_3;
    package$kmem.get_size_h4bb51$ = get_size_8;
    package$kmem.get_yg2kxp$ = get_4;
    package$kmem.set_ogqgs1$ = set_3;
    package$kmem.asInt8Array_964n91$ = asInt8Array;
    package$kmem.asTyped_964n91$ = asTyped;
    package$kmem.asInt16Array_i2lc79$ = asInt16Array;
    package$kmem.asTyped_i2lc79$ = asTyped_0;
    package$kmem.asInt32Array_tmsbgo$ = asInt32Array;
    package$kmem.asTyped_tmsbgo$ = asTyped_1;
    package$kmem.asFloat32Array_rjqryz$ = asFloat32Array;
    package$kmem.asTyped_rjqryz$ = asTyped_2;
    package$kmem.asFloat64Array_bvy38s$ = asFloat64Array;
    package$kmem.asTyped_bvy38s$ = asTyped_3;
    package$kmem.arraycopy_mwgkm6$ = arraycopy_23;
    package$kmem.arraycopy_jf0qaq$ = arraycopy_24;
    package$kmem.arraycopy_7bkom2$ = arraycopy_25;
    package$kmem.arraycopy_c6wrq4$ = arraycopy_26;
    package$kmem.arraycopy_mihd94$ = arraycopy_27;
    package$kmem.arraycopy_ciuv3l$ = arraycopy_28;
    package$kmem.arraycopy_x0s07p$ = arraycopy_29;
    package$kmem.arraycopy_mx3ol8$ = arraycopy_30;
    package$kmem.arraycopy_owenk8$ = arraycopy_31;
    package$kmem.arraycopy_buz8ph$ = arraycopy_32;
    package$kmem.arraycopy_km662r$ = arraycopy_33;
    Kotlin.defineModule('kmem-root-kmem', _);
    return _;
}));

//# sourceMappingURL=kmem-root-kmem.js.map
