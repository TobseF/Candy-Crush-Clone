(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', 'kotlin'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('kotlin'));
    else {
        if (typeof kotlin === 'undefined') {
            throw new Error("Error loading module 'kds-root-kds'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kds-root-kds'.");
        }
        root['kds-root-kds'] = factory(typeof this['kds-root-kds'] === 'undefined' ? {} : this['kds-root-kds'], kotlin);
    }
}(this, function (_, Kotlin) {
    'use strict';
    var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
    var defineInlineFunction = Kotlin.defineInlineFunction;
    var wrapFunction = Kotlin.wrapFunction;
    var Kind_OBJECT = Kotlin.Kind.OBJECT;
    var contentEquals = Kotlin.arrayEquals;
    var hashCode = Kotlin.hashCode;
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
    var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
    var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
    var equals = Kotlin.equals;
    var Pair = Kotlin.kotlin.Pair;
    var print = Kotlin.kotlin.io.print_s8jyv4$;
    var println = Kotlin.kotlin.io.println;
    var String_0 = Kotlin.kotlin.text.String_4hbowm$;
    var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
    var unboxChar = Kotlin.unboxChar;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Iterable = Kotlin.kotlin.collections.Iterable;
    var contains_0 = Kotlin.kotlin.collections.contains_c03ot6$;
    var get_indices_0 = Kotlin.kotlin.collections.get_indices_tmsbgo$;
    var contains_1 = Kotlin.kotlin.collections.contains_taaqy$;
    var get_indices_1 = Kotlin.kotlin.collections.get_indices_bvy38s$;
    var contains_2 = Kotlin.kotlin.collections.contains_omthmc$;
    var get_indices_2 = Kotlin.kotlin.collections.get_indices_rjqryz$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var charArray = Kotlin.charArray;
    var L0 = Kotlin.Long.ZERO;
    var copyOf = Kotlin.kotlin.collections.copyOf_c03ot6$;
    var throwCCE = Kotlin.throwCCE;
    var take = Kotlin.kotlin.collections.take_c03ot6$;
    var contentHashCode = Kotlin.arrayHashCode;
    var List = Kotlin.kotlin.collections.List;
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
    var copyOf_0 = Kotlin.kotlin.collections.copyOf_xgrzbe$;
    var take_0 = Kotlin.kotlin.collections.take_xgrzbe$;
    var copyOf_1 = Kotlin.kotlin.collections.copyOf_rblqex$;
    var take_1 = Kotlin.kotlin.collections.take_rblqex$;
    var Math_0 = Math;
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    var Collection = Kotlin.kotlin.collections.Collection;
    var Unit = Kotlin.kotlin.Unit;
    var first = Kotlin.kotlin.collections.first_7wnvza$;
    var toList = Kotlin.kotlin.collections.toList_7wnvza$;
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var MutableMap = Kotlin.kotlin.collections.MutableMap;
    var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
    var putAll = Kotlin.kotlin.collections.putAll_cweazw$;
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
    var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
    var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
    var Map_0 = Kotlin.kotlin.collections.Map;
    var ensureNotNull = Kotlin.ensureNotNull;
    var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
    var toMutableSet = Kotlin.kotlin.collections.toMutableSet_7wnvza$;
    var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
    var ListIterator = Kotlin.kotlin.collections.ListIterator;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
    var Iterator = Kotlin.kotlin.collections.Iterator;
    var numberToInt = Kotlin.numberToInt;
    var toRawBits = Kotlin.floatToRawBits;
    var MutableSet = Kotlin.kotlin.collections.MutableSet;
    var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
    var println_0 = Kotlin.kotlin.io.println_s8jyv4$;
    var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
    var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
    var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
    var reversed = Kotlin.kotlin.comparisons.reversed_2avth4$;
    var copyOf_2 = Kotlin.kotlin.collections.copyOf_8ujjk8$;
    var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
    var Comparator = Kotlin.kotlin.Comparator;
    var toByte = Kotlin.toByte;
    var Any = Object;
    var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
    var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
    var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    RingBuffer.prototype = Object.create(ByteRingBuffer.prototype);
    RingBuffer.prototype.constructor = RingBuffer;
    SortOpsComparable.prototype = Object.create(SortOps.prototype);
    SortOpsComparable.prototype.constructor = SortOpsComparable;
    var map2 = defineInlineFunction('kds-root-kds.com.soywiz.kds.map2_ayxk8o$', wrapFunction(function () {
        var Array2 = _.com.soywiz.kds.Array2;
        var throwCCE = Kotlin.throwCCE;
        var Array_0 = Array;
        return function ($receiver, gen) {
            var width = $receiver.width;
            var height = $receiver.height;
            var tmp$;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                var x = i % $receiver.width;
                var y = i / $receiver.width | 0;
                array[i] = gen(x, y, $receiver.get_vux9f0$(x, y));
            }
            return new Array2(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));

    function Array2(width, height, data) {
        Array2$Companion_getInstance();
        this.width = width;
        this.height = height;
        this.data = data;
    }

    function Array2$Companion() {
        Array2$Companion_instance = this;
    }

    Array2$Companion.prototype.invoke_4rkvvx$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.invoke_4rkvvx$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var Array2_init = _.com.soywiz.kds.Array2;
        var Array_0 = Array;
        return function (width, height, fill) {
            var tmp$;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = fill;
            }
            return new Array2_init(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    Array2$Companion.prototype.invoke_tarchv$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.invoke_tarchv$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var Array2_init = _.com.soywiz.kds.Array2;
        var Array_0 = Array;
        return function (width, height, gen) {
            var tmp$;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i);
            }
            return new Array2_init(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    Array2$Companion.prototype.withGen_6lt2vz$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.withGen_6lt2vz$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var Array2_init = _.com.soywiz.kds.Array2;
        var Array_0 = Array;
        return function (width, height, gen) {
            var tmp$;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i % width, i / width | 0);
            }
            return new Array2_init(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    Array2$Companion.prototype.invoke_zhu5v$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.invoke_zhu5v$', wrapFunction(function () {
        var Array2 = _.com.soywiz.kds.Array2;
        var throwCCE = Kotlin.throwCCE;
        var Array_0 = Array;
        return function (rows) {
            var width = rows.get_za3lpa$(0).size;
            var height = rows.size;
            var anyCell = rows.get_za3lpa$(0).get_za3lpa$(0);
            var tmp$;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = anyCell;
            }
            var $receiver = new Array2(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
            $receiver.set_ndhni1$(rows);
            return $receiver;
        };
    }));
    Array2$Companion.prototype.invoke_cc5e7l$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.invoke_cc5e7l$', wrapFunction(function () {
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var wrapFunction = Kotlin.wrapFunction;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var Array2 = _.com.soywiz.kds.Array2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var Array_0 = Array;
        var Array2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, marginChar, gen) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                array[i] = gen(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32), x, y);
            }
            return new Array2(width, height, Kotlin.isArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    Array2$Companion.prototype.invoke_sy974f$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.invoke_sy974f$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var Array2 = _.com.soywiz.kds.Array2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var Array_0 = Array;
        var Array2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, default_0, transform) {
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, 0)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = transform.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new Array2(width, height, Kotlin.isArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    Array2$Companion.prototype.fromString_5xq4ci$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.Companion.fromString_5xq4ci$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var Array2 = _.com.soywiz.kds.Array2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var Array_0 = Array;
        var Array2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (maps, default_0, code, marginChar) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(code);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = Array_0(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = maps.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new Array2(width, height, Kotlin.isArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    Array2$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var Array2$Companion_instance = null;

    function Array2$Companion_getInstance() {
        if (Array2$Companion_instance === null) {
            new Array2$Companion();
        }
        return Array2$Companion_instance;
    }

    Array2.prototype.set_ndhni1$ = function (rows) {
        var n = 0;
        for (var y = 0; y !== rows.size; ++y) {
            var row = rows.get_za3lpa$(y);
            for (var x = 0; x !== row.size; ++x) {
                var tmp$;
                this.data[tmp$ = n, n = tmp$ + 1 | 0, tmp$] = row.get_za3lpa$(x);
            }
        }
    };
    Array2.prototype.equals = function (other) {
        return Kotlin.isType(other, Array2) && this.width === other.width && this.height === other.height && contentEquals(this.data, other.data);
    };
    Array2.prototype.hashCode = function () {
        return this.width + this.height + hashCode(this.data) | 0;
    };
    Array2.prototype.index_0 = function (x, y) {
        var tmp$, tmp$_0, tmp$_1;
        tmp$ = this.width;
        if (!!(0 <= x && x < tmp$)) {
            tmp$_0 = this.height;
            tmp$_1 = !(0 <= y && y < tmp$_0);
        } else
            tmp$_1 = true;
        if (tmp$_1)
            throw IndexOutOfBoundsException_init();
        return Kotlin.imul(y, this.width) + x | 0;
    };
    Array2.prototype.get_vux9f0$ = function (x, y) {
        return this.data[this.index_0(x, y)];
    };
    Array2.prototype.set_vq7693$ = function (x, y, value) {
        this.data[this.index_0(x, y)] = value;
    };
    Array2.prototype.tryGet_vux9f0$ = function (x, y) {
        return this.inside_vux9f0$(x, y) ? this.data[this.index_0(x, y)] : null;
    };
    Array2.prototype.trySet_vq7693$ = function (x, y, value) {
        if (this.inside_vux9f0$(x, y))
            this.data[this.index_0(x, y)] = value;
    };
    Array2.prototype.inside_vux9f0$ = function (x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    };
    Array2.prototype.contains_11rb$ = function (v) {
        return contains(this.data, v);
    };
    Array2.prototype.each_lbptwu$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.each_lbptwu$', function (callback) {
        var tmp$, tmp$_0, tmp$_1;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                callback(x, y, this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1]);
            }
        }
    });
    Array2.prototype.fill_ru8m0w$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Array2.fill_ru8m0w$', function (gen) {
        var tmp$, tmp$_0;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                this.data[n] = gen(this.data[n]);
                n = n + 1 | 0;
            }
        }
    });
    Array2.prototype.getPositionsWithValue_11rb$ = function (value) {
        var $receiver = get_indices(this.data);
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (equals(this.data[element], value))
                destination.add_11rb$(element);
        }
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination_0.add_11rb$(new Pair(item % this.width, item / this.width | 0));
        }
        return destination_0;
    };
    Array2.prototype.clone = function () {
        return new Array2(this.width, this.height, this.data.slice());
    };
    Array2.prototype.dump = function () {
        var tmp$, tmp$_0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                print(this.get_vux9f0$(x, y));
            }
            println();
        }
    };
    Array2.prototype.iterator = function () {
        return Kotlin.arrayIterator(this.data);
    };
    Array2.prototype.toStringList_9fqlme$ = function (charMap, margin) {
        if (margin === void 0)
            margin = '';
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var tmp$_1;
            var array = charArray(this.width, null);
            tmp$_1 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_1; i++) {
                var value = unboxChar(charMap(this.get_vux9f0$(i, item)));
                array[i] = value;
            }
            tmp$_0.call(destination, margin + String_0(array));
        }
        return destination;
    };
    Array2.prototype.toString_s6lhx2$ = function (margin, charMap) {
        if (margin === void 0)
            margin = '';
        return joinToString(this.toStringList_9fqlme$(charMap, margin), '\n');
    };

    function Array2$toString$lambda(closure$map) {
        return function (it) {
            var tmp$;
            return (tmp$ = unboxChar(closure$map.get_11rb$(it))) != null ? tmp$ : 32;
        };
    }

    Array2.prototype.toString_q8euur$ = function (map, margin) {
        if (margin === void 0)
            margin = '';
        return this.toString_s6lhx2$(margin, Array2$toString$lambda(map));
    };
    Array2.prototype.toString = function () {
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var $receiver_0 = until(0, this.width);
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
                var item_0 = tmp$_1.next();
                destination_0.add_11rb$(this.get_vux9f0$(item_0, item));
            }
            tmp$_0.call(destination, joinToString(destination_0, ', '));
        }
        return joinToString(destination, '\n');
    };
    Array2.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Array2',
        interfaces: [Iterable]
    };
    Array2.prototype.component1 = function () {
        return this.width;
    };
    Array2.prototype.component2 = function () {
        return this.height;
    };
    Array2.prototype.component3 = function () {
        return this.data;
    };
    Array2.prototype.copy_ohzztl$ = function (width, height, data) {
        return new Array2(width === void 0 ? this.width : width, height === void 0 ? this.height : height, data === void 0 ? this.data : data);
    };

    function IntArray2(width, height, data) {
        IntArray2$Companion_getInstance();
        this.width = width;
        this.height = height;
        this.data = data;
    }

    function IntArray2$Companion() {
        IntArray2$Companion_instance = this;
    }

    IntArray2$Companion.prototype.invoke_qt1dr2$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.invoke_qt1dr2$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var IntArray2_init = _.com.soywiz.kds.IntArray2;
        return function (width, height, fill) {
            var tmp$;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = fill;
            }
            return new IntArray2_init(width, height, Kotlin.isIntArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    IntArray2$Companion.prototype.invoke_51hkjm$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.invoke_51hkjm$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var IntArray2_init = _.com.soywiz.kds.IntArray2;
        return function (width, height, gen) {
            var tmp$;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i);
            }
            return new IntArray2_init(width, height, Kotlin.isIntArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    IntArray2$Companion.prototype.withGen_komkuy$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.withGen_komkuy$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var IntArray2_init = _.com.soywiz.kds.IntArray2;
        return function (width, height, gen) {
            var tmp$;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i % width, i / width | 0);
            }
            return new IntArray2_init(width, height, Kotlin.isIntArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    IntArray2$Companion.prototype.invoke_8p105e$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.invoke_8p105e$', wrapFunction(function () {
        var IntArray2 = _.com.soywiz.kds.IntArray2;
        var throwCCE = Kotlin.throwCCE;
        return function (rows) {
            var width = rows.get_za3lpa$(0).size;
            var height = rows.size;
            var anyCell = rows.get_za3lpa$(0).get_za3lpa$(0);
            var tmp$;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = anyCell;
            }
            var $receiver = new IntArray2(width, height, Kotlin.isIntArray(tmp$ = array) ? tmp$ : throwCCE());
            $receiver.set_8p105e$(rows);
            return $receiver;
        };
    }));
    IntArray2$Companion.prototype.invoke_juncvq$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.invoke_juncvq$', wrapFunction(function () {
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var wrapFunction = Kotlin.wrapFunction;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var IntArray2 = _.com.soywiz.kds.IntArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var IntArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, marginChar, gen) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                array[i] = gen(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32), x, y);
            }
            return new IntArray2(width, height, Kotlin.isIntArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    IntArray2$Companion.prototype.invoke_9tqq7w$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.invoke_9tqq7w$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var IntArray2 = _.com.soywiz.kds.IntArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var IntArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, default_0, transform) {
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, 0)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = transform.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new IntArray2(width, height, Kotlin.isIntArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    IntArray2$Companion.prototype.fromString_dqwotl$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.Companion.fromString_dqwotl$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var IntArray2 = _.com.soywiz.kds.IntArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var IntArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (maps, default_0, code, marginChar) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(code);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Int32Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = maps.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new IntArray2(width, height, Kotlin.isIntArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    IntArray2$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var IntArray2$Companion_instance = null;

    function IntArray2$Companion_getInstance() {
        if (IntArray2$Companion_instance === null) {
            new IntArray2$Companion();
        }
        return IntArray2$Companion_instance;
    }

    IntArray2.prototype.set_8p105e$ = function (rows) {
        var n = 0;
        for (var y = 0; y !== rows.size; ++y) {
            var row = rows.get_za3lpa$(y);
            for (var x = 0; x !== row.size; ++x) {
                var tmp$;
                this.data[tmp$ = n, n = tmp$ + 1 | 0, tmp$] = row.get_za3lpa$(x);
            }
        }
    };
    IntArray2.prototype.equals = function (other) {
        return Kotlin.isType(other, IntArray2) && this.width === other.width && this.height === other.height && contentEquals(this.data, other.data);
    };
    IntArray2.prototype.hashCode = function () {
        return this.width + this.height + hashCode(this.data) | 0;
    };
    IntArray2.prototype.index_0 = function (x, y) {
        var tmp$, tmp$_0, tmp$_1;
        tmp$ = this.width;
        if (!!(0 <= x && x < tmp$)) {
            tmp$_0 = this.height;
            tmp$_1 = !(0 <= y && y < tmp$_0);
        } else
            tmp$_1 = true;
        if (tmp$_1)
            throw IndexOutOfBoundsException_init();
        return Kotlin.imul(y, this.width) + x | 0;
    };
    IntArray2.prototype.get_vux9f0$ = function (x, y) {
        return this.data[this.index_0(x, y)];
    };
    IntArray2.prototype.set_qt1dr2$ = function (x, y, value) {
        this.data[this.index_0(x, y)] = value;
    };
    IntArray2.prototype.tryGet_vux9f0$ = function (x, y) {
        return this.inside_vux9f0$(x, y) ? this.data[this.index_0(x, y)] : null;
    };
    IntArray2.prototype.trySet_qt1dr2$ = function (x, y, value) {
        if (this.inside_vux9f0$(x, y))
            this.data[this.index_0(x, y)] = value;
    };
    IntArray2.prototype.inside_vux9f0$ = function (x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    };
    IntArray2.prototype.contains_za3lpa$ = function (v) {
        return contains_0(this.data, v);
    };
    IntArray2.prototype.each_uijzbn$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.each_uijzbn$', function (callback) {
        var tmp$, tmp$_0, tmp$_1;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                callback(x, y, this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1]);
            }
        }
    });
    IntArray2.prototype.fill_ddsh32$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntArray2.fill_ddsh32$', function (gen) {
        var tmp$, tmp$_0;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                this.data[n] = gen(this.data[n]);
                n = n + 1 | 0;
            }
        }
    });
    IntArray2.prototype.getPositionsWithValue_za3lpa$ = function (value) {
        var $receiver = get_indices_0(this.data);
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (this.data[element] === value)
                destination.add_11rb$(element);
        }
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination_0.add_11rb$(new Pair(item % this.width, item / this.width | 0));
        }
        return destination_0;
    };
    IntArray2.prototype.clone = function () {
        return new IntArray2(this.width, this.height, this.data.slice());
    };
    IntArray2.prototype.dump = function () {
        var tmp$, tmp$_0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                print(this.get_vux9f0$(x, y));
            }
            println();
        }
    };
    IntArray2.prototype.iterator = function () {
        return Kotlin.intArrayIterator(this.data);
    };
    IntArray2.prototype.toStringList_9ur985$ = function (charMap, margin) {
        if (margin === void 0)
            margin = '';
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var tmp$_1;
            var array = charArray(this.width, null);
            tmp$_1 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_1; i++) {
                var value = unboxChar(charMap(this.get_vux9f0$(i, item)));
                array[i] = value;
            }
            tmp$_0.call(destination, margin + String_0(array));
        }
        return destination;
    };
    IntArray2.prototype.toString_qyzg2h$ = function (margin, charMap) {
        if (margin === void 0)
            margin = '';
        return joinToString(this.toStringList_9ur985$(charMap, margin), '\n');
    };

    function IntArray2$toString$lambda(closure$map) {
        return function (it) {
            var tmp$;
            return (tmp$ = unboxChar(closure$map.get_11rb$(it))) != null ? tmp$ : 32;
        };
    }

    IntArray2.prototype.toString_3vqz8$ = function (map, margin) {
        if (margin === void 0)
            margin = '';
        return this.toString_qyzg2h$(margin, IntArray2$toString$lambda(map));
    };
    IntArray2.prototype.toString = function () {
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var $receiver_0 = until(0, this.width);
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
                var item_0 = tmp$_1.next();
                destination_0.add_11rb$(this.get_vux9f0$(item_0, item));
            }
            tmp$_0.call(destination, joinToString(destination_0, ', '));
        }
        return joinToString(destination, '\n');
    };
    IntArray2.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntArray2',
        interfaces: [Iterable]
    };
    IntArray2.prototype.component1 = function () {
        return this.width;
    };
    IntArray2.prototype.component2 = function () {
        return this.height;
    };
    IntArray2.prototype.component3 = function () {
        return this.data;
    };
    IntArray2.prototype.copy_nps3vt$ = function (width, height, data) {
        return new IntArray2(width === void 0 ? this.width : width, height === void 0 ? this.height : height, data === void 0 ? this.data : data);
    };

    function DoubleArray2(width, height, data) {
        DoubleArray2$Companion_getInstance();
        this.width = width;
        this.height = height;
        this.data = data;
    }

    function DoubleArray2$Companion() {
        DoubleArray2$Companion_instance = this;
    }

    DoubleArray2$Companion.prototype.invoke_224j3y$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.invoke_224j3y$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var DoubleArray2_init = _.com.soywiz.kds.DoubleArray2;
        return function (width, height, fill) {
            var tmp$;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = fill;
            }
            return new DoubleArray2_init(width, height, Kotlin.isDoubleArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    DoubleArray2$Companion.prototype.invoke_sxp10i$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.invoke_sxp10i$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var DoubleArray2_init = _.com.soywiz.kds.DoubleArray2;
        return function (width, height, gen) {
            var tmp$;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i);
            }
            return new DoubleArray2_init(width, height, Kotlin.isDoubleArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    DoubleArray2$Companion.prototype.withGen_4qf7ia$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.withGen_4qf7ia$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var DoubleArray2_init = _.com.soywiz.kds.DoubleArray2;
        return function (width, height, gen) {
            var tmp$;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i % width, i / width | 0);
            }
            return new DoubleArray2_init(width, height, Kotlin.isDoubleArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    DoubleArray2$Companion.prototype.invoke_38ehy6$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.invoke_38ehy6$', wrapFunction(function () {
        var DoubleArray2 = _.com.soywiz.kds.DoubleArray2;
        var throwCCE = Kotlin.throwCCE;
        return function (rows) {
            var width = rows.get_za3lpa$(0).size;
            var height = rows.size;
            var anyCell = rows.get_za3lpa$(0).get_za3lpa$(0);
            var tmp$;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = anyCell;
            }
            var $receiver = new DoubleArray2(width, height, Kotlin.isDoubleArray(tmp$ = array) ? tmp$ : throwCCE());
            $receiver.set_38ehy6$(rows);
            return $receiver;
        };
    }));
    DoubleArray2$Companion.prototype.invoke_9pznbm$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.invoke_9pznbm$', wrapFunction(function () {
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var wrapFunction = Kotlin.wrapFunction;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var DoubleArray2 = _.com.soywiz.kds.DoubleArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var DoubleArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, marginChar, gen) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                array[i] = gen(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32), x, y);
            }
            return new DoubleArray2(width, height, Kotlin.isDoubleArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    DoubleArray2$Companion.prototype.invoke_lki620$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.invoke_lki620$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var DoubleArray2 = _.com.soywiz.kds.DoubleArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var DoubleArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, default_0, transform) {
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, 0)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = transform.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new DoubleArray2(width, height, Kotlin.isDoubleArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    DoubleArray2$Companion.prototype.fromString_bbr4nd$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.Companion.fromString_bbr4nd$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var DoubleArray2 = _.com.soywiz.kds.DoubleArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var DoubleArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (maps, default_0, code, marginChar) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(code);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Float64Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = maps.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new DoubleArray2(width, height, Kotlin.isDoubleArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    DoubleArray2$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var DoubleArray2$Companion_instance = null;

    function DoubleArray2$Companion_getInstance() {
        if (DoubleArray2$Companion_instance === null) {
            new DoubleArray2$Companion();
        }
        return DoubleArray2$Companion_instance;
    }

    DoubleArray2.prototype.set_38ehy6$ = function (rows) {
        var n = 0;
        for (var y = 0; y !== rows.size; ++y) {
            var row = rows.get_za3lpa$(y);
            for (var x = 0; x !== row.size; ++x) {
                var tmp$;
                this.data[tmp$ = n, n = tmp$ + 1 | 0, tmp$] = row.get_za3lpa$(x);
            }
        }
    };
    DoubleArray2.prototype.equals = function (other) {
        return Kotlin.isType(other, DoubleArray2) && this.width === other.width && this.height === other.height && contentEquals(this.data, other.data);
    };
    DoubleArray2.prototype.hashCode = function () {
        return this.width + this.height + hashCode(this.data) | 0;
    };
    DoubleArray2.prototype.index_0 = function (x, y) {
        var tmp$, tmp$_0, tmp$_1;
        tmp$ = this.width;
        if (!!(0 <= x && x < tmp$)) {
            tmp$_0 = this.height;
            tmp$_1 = !(0 <= y && y < tmp$_0);
        } else
            tmp$_1 = true;
        if (tmp$_1)
            throw IndexOutOfBoundsException_init();
        return Kotlin.imul(y, this.width) + x | 0;
    };
    DoubleArray2.prototype.get_vux9f0$ = function (x, y) {
        return this.data[this.index_0(x, y)];
    };
    DoubleArray2.prototype.set_224j3y$ = function (x, y, value) {
        this.data[this.index_0(x, y)] = value;
    };
    DoubleArray2.prototype.tryGet_vux9f0$ = function (x, y) {
        return this.inside_vux9f0$(x, y) ? this.data[this.index_0(x, y)] : null;
    };
    DoubleArray2.prototype.trySet_224j3y$ = function (x, y, value) {
        if (this.inside_vux9f0$(x, y))
            this.data[this.index_0(x, y)] = value;
    };
    DoubleArray2.prototype.inside_vux9f0$ = function (x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    };
    DoubleArray2.prototype.contains_14dthe$ = function (v) {
        return contains_1(this.data, v);
    };
    DoubleArray2.prototype.each_p28t1h$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.each_p28t1h$', function (callback) {
        var tmp$, tmp$_0, tmp$_1;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                callback(x, y, this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1]);
            }
        }
    });
    DoubleArray2.prototype.fill_7fnk9s$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.DoubleArray2.fill_7fnk9s$', function (gen) {
        var tmp$, tmp$_0;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                this.data[n] = gen(this.data[n]);
                n = n + 1 | 0;
            }
        }
    });
    DoubleArray2.prototype.getPositionsWithValue_14dthe$ = function (value) {
        var $receiver = get_indices_1(this.data);
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (this.data[element] === value)
                destination.add_11rb$(element);
        }
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination_0.add_11rb$(new Pair(item % this.width, item / this.width | 0));
        }
        return destination_0;
    };
    DoubleArray2.prototype.clone = function () {
        return new DoubleArray2(this.width, this.height, this.data.slice());
    };
    DoubleArray2.prototype.dump = function () {
        var tmp$, tmp$_0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                print(this.get_vux9f0$(x, y));
            }
            println();
        }
    };
    DoubleArray2.prototype.iterator = function () {
        return Kotlin.doubleArrayIterator(this.data);
    };
    DoubleArray2.prototype.toStringList_elfb3n$ = function (charMap, margin) {
        if (margin === void 0)
            margin = '';
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var tmp$_1;
            var array = charArray(this.width, null);
            tmp$_1 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_1; i++) {
                var value = unboxChar(charMap(this.get_vux9f0$(i, item)));
                array[i] = value;
            }
            tmp$_0.call(destination, margin + String_0(array));
        }
        return destination;
    };
    DoubleArray2.prototype.toString_ku7hsd$ = function (margin, charMap) {
        if (margin === void 0)
            margin = '';
        return joinToString(this.toStringList_elfb3n$(charMap, margin), '\n');
    };

    function DoubleArray2$toString$lambda(closure$map) {
        return function (it) {
            var tmp$;
            return (tmp$ = unboxChar(closure$map.get_11rb$(it))) != null ? tmp$ : 32;
        };
    }

    DoubleArray2.prototype.toString_21tnl0$ = function (map, margin) {
        if (margin === void 0)
            margin = '';
        return this.toString_ku7hsd$(margin, DoubleArray2$toString$lambda(map));
    };
    DoubleArray2.prototype.toString = function () {
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var $receiver_0 = until(0, this.width);
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
                var item_0 = tmp$_1.next();
                destination_0.add_11rb$(this.get_vux9f0$(item_0, item));
            }
            tmp$_0.call(destination, joinToString(destination_0, ', '));
        }
        return joinToString(destination, '\n');
    };
    DoubleArray2.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'DoubleArray2',
        interfaces: [Iterable]
    };
    DoubleArray2.prototype.component1 = function () {
        return this.width;
    };
    DoubleArray2.prototype.component2 = function () {
        return this.height;
    };
    DoubleArray2.prototype.component3 = function () {
        return this.data;
    };
    DoubleArray2.prototype.copy_5f2rid$ = function (width, height, data) {
        return new DoubleArray2(width === void 0 ? this.width : width, height === void 0 ? this.height : height, data === void 0 ? this.data : data);
    };

    function FloatArray2(width, height, data) {
        FloatArray2$Companion_getInstance();
        this.width = width;
        this.height = height;
        this.data = data;
    }

    function FloatArray2$Companion() {
        FloatArray2$Companion_instance = this;
    }

    FloatArray2$Companion.prototype.invoke_n0b4r3$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.invoke_n0b4r3$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var FloatArray2_init = _.com.soywiz.kds.FloatArray2;
        return function (width, height, fill) {
            var tmp$;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = fill;
            }
            return new FloatArray2_init(width, height, Kotlin.isFloatArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    FloatArray2$Companion.prototype.invoke_g2ojpr$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.invoke_g2ojpr$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var FloatArray2_init = _.com.soywiz.kds.FloatArray2;
        return function (width, height, gen) {
            var tmp$;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i);
            }
            return new FloatArray2_init(width, height, Kotlin.isFloatArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    FloatArray2$Companion.prototype.withGen_cp3dkj$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.withGen_cp3dkj$', wrapFunction(function () {
        var throwCCE = Kotlin.throwCCE;
        var FloatArray2_init = _.com.soywiz.kds.FloatArray2;
        return function (width, height, gen) {
            var tmp$;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = gen(i % width, i / width | 0);
            }
            return new FloatArray2_init(width, height, Kotlin.isFloatArray(tmp$ = array) ? tmp$ : throwCCE());
        };
    }));
    FloatArray2$Companion.prototype.invoke_g90fj$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.invoke_g90fj$', wrapFunction(function () {
        var FloatArray2 = _.com.soywiz.kds.FloatArray2;
        var throwCCE = Kotlin.throwCCE;
        return function (rows) {
            var width = rows.get_za3lpa$(0).size;
            var height = rows.size;
            var anyCell = rows.get_za3lpa$(0).get_za3lpa$(0);
            var tmp$;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_0;
            tmp$_0 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_0; i++) {
                array[i] = anyCell;
            }
            var $receiver = new FloatArray2(width, height, Kotlin.isFloatArray(tmp$ = array) ? tmp$ : throwCCE());
            $receiver.set_g90fj$(rows);
            return $receiver;
        };
    }));
    FloatArray2$Companion.prototype.invoke_sph20t$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.invoke_sph20t$', wrapFunction(function () {
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var wrapFunction = Kotlin.wrapFunction;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var FloatArray2 = _.com.soywiz.kds.FloatArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var FloatArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, marginChar, gen) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                array[i] = gen(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32), x, y);
            }
            return new FloatArray2(width, height, Kotlin.isFloatArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    FloatArray2$Companion.prototype.invoke_l640gs$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.invoke_l640gs$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var FloatArray2 = _.com.soywiz.kds.FloatArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var FloatArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (map, default_0, transform) {
            var tmp$;
            var $receiver = lines(map);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, 0)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = transform.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new FloatArray2(width, height, Kotlin.isFloatArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    FloatArray2$Companion.prototype.fromString_zde92p$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.Companion.fromString_zde92p$', wrapFunction(function () {
        var wrapFunction = Kotlin.wrapFunction;
        var lines = Kotlin.kotlin.text.lines_gw00vp$;
        var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
        var max = Kotlin.kotlin.collections.max_exjks8$;
        var FloatArray2 = _.com.soywiz.kds.FloatArray2;
        var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
        var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
        var toBoxedChar = Kotlin.toBoxedChar;
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
        var throwCCE = Kotlin.throwCCE;
        var trim = Kotlin.kotlin.text.trim_gw00vp$;
        var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var FloatArray2$Companion$invoke$lambda = wrapFunction(function () {
            var throwCCE = Kotlin.throwCCE;
            var trim = Kotlin.kotlin.text.trim_gw00vp$;
            return function (closure$marginChar) {
                return function (it) {
                    var tmp$;
                    var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
                    if (startsWith(res, closure$marginChar)) {
                        var endIndex = res.length;
                        return res.substring(0, endIndex);
                    } else {
                        return res;
                    }
                };
            };
        });
        return function (maps, default_0, code, marginChar) {
            if (marginChar === void 0)
                marginChar = 0;
            var tmp$;
            var $receiver = lines(code);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                var tmp$_1 = destination.add_11rb$;
                var transform$result;
                var tmp$_2;
                var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
                if (startsWith(res, marginChar)) {
                    var endIndex = res.length;
                    transform$result = res.substring(0, endIndex);
                } else {
                    transform$result = res;
                }
                tmp$_1.call(destination, transform$result);
            }
            var destination_0 = ArrayList_init_0();
            var tmp$_3;
            tmp$_3 = destination.iterator();
            while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                if (element.length > 0)
                    destination_0.add_11rb$(element);
            }
            var lines_0 = destination_0;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
            var tmp$_4;
            tmp$_4 = lines_0.iterator();
            while (tmp$_4.hasNext()) {
                var item_0 = tmp$_4.next();
                destination_1.add_11rb$(item_0.length);
            }
            var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
            var height = lines_0.size;
            var tmp$_5;
            var array = new Float32Array(Kotlin.imul(width, height));
            var tmp$_6;
            tmp$_6 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_6; i++) {
                var tmp$_7, tmp$_8;
                var x = i % width;
                var y = i / width | 0;
                var tmp$_9;
                array[i] = (tmp$_9 = maps.get_11rb$(toBoxedChar((tmp$_8 = (tmp$_7 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_7, x) : null) != null ? tmp$_8 : 32))) != null ? tmp$_9 : default_0;
            }
            return new FloatArray2(width, height, Kotlin.isFloatArray(tmp$_5 = array) ? tmp$_5 : throwCCE());
        };
    }));
    FloatArray2$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var FloatArray2$Companion_instance = null;

    function FloatArray2$Companion_getInstance() {
        if (FloatArray2$Companion_instance === null) {
            new FloatArray2$Companion();
        }
        return FloatArray2$Companion_instance;
    }

    FloatArray2.prototype.set_g90fj$ = function (rows) {
        var n = 0;
        for (var y = 0; y !== rows.size; ++y) {
            var row = rows.get_za3lpa$(y);
            for (var x = 0; x !== row.size; ++x) {
                var tmp$;
                this.data[tmp$ = n, n = tmp$ + 1 | 0, tmp$] = row.get_za3lpa$(x);
            }
        }
    };
    FloatArray2.prototype.equals = function (other) {
        return Kotlin.isType(other, FloatArray2) && this.width === other.width && this.height === other.height && contentEquals(this.data, other.data);
    };
    FloatArray2.prototype.hashCode = function () {
        return this.width + this.height + hashCode(this.data) | 0;
    };
    FloatArray2.prototype.index_0 = function (x, y) {
        var tmp$, tmp$_0, tmp$_1;
        tmp$ = this.width;
        if (!!(0 <= x && x < tmp$)) {
            tmp$_0 = this.height;
            tmp$_1 = !(0 <= y && y < tmp$_0);
        } else
            tmp$_1 = true;
        if (tmp$_1)
            throw IndexOutOfBoundsException_init();
        return Kotlin.imul(y, this.width) + x | 0;
    };
    FloatArray2.prototype.get_vux9f0$ = function (x, y) {
        return this.data[this.index_0(x, y)];
    };
    FloatArray2.prototype.set_n0b4r3$ = function (x, y, value) {
        this.data[this.index_0(x, y)] = value;
    };
    FloatArray2.prototype.tryGet_vux9f0$ = function (x, y) {
        return this.inside_vux9f0$(x, y) ? this.data[this.index_0(x, y)] : null;
    };
    FloatArray2.prototype.trySet_n0b4r3$ = function (x, y, value) {
        if (this.inside_vux9f0$(x, y))
            this.data[this.index_0(x, y)] = value;
    };
    FloatArray2.prototype.inside_vux9f0$ = function (x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    };
    FloatArray2.prototype.contains_mx4ult$ = function (v) {
        return contains_2(this.data, v);
    };
    FloatArray2.prototype.each_eja728$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.each_eja728$', function (callback) {
        var tmp$, tmp$_0, tmp$_1;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                callback(x, y, this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1]);
            }
        }
    });
    FloatArray2.prototype.fill_a32mzo$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.FloatArray2.fill_a32mzo$', function (gen) {
        var tmp$, tmp$_0;
        var n = 0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                this.data[n] = gen(this.data[n]);
                n = n + 1 | 0;
            }
        }
    });
    FloatArray2.prototype.getPositionsWithValue_mx4ult$ = function (value) {
        var $receiver = get_indices_2(this.data);
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (this.data[element] === value)
                destination.add_11rb$(element);
        }
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination_0.add_11rb$(new Pair(item % this.width, item / this.width | 0));
        }
        return destination_0;
    };
    FloatArray2.prototype.clone = function () {
        return new FloatArray2(this.width, this.height, this.data.slice());
    };
    FloatArray2.prototype.dump = function () {
        var tmp$, tmp$_0;
        tmp$ = this.height;
        for (var y = 0; y < tmp$; y++) {
            tmp$_0 = this.width;
            for (var x = 0; x < tmp$_0; x++) {
                print(this.get_vux9f0$(x, y));
            }
            println();
        }
    };
    FloatArray2.prototype.iterator = function () {
        return Kotlin.floatArrayIterator(this.data);
    };
    FloatArray2.prototype.toStringList_emt2ew$ = function (charMap, margin) {
        if (margin === void 0)
            margin = '';
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var tmp$_1;
            var array = charArray(this.width, null);
            tmp$_1 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_1; i++) {
                var value = unboxChar(charMap(this.get_vux9f0$(i, item)));
                array[i] = value;
            }
            tmp$_0.call(destination, margin + String_0(array));
        }
        return destination;
    };
    FloatArray2.prototype.toString_e4oys4$ = function (margin, charMap) {
        if (margin === void 0)
            margin = '';
        return joinToString(this.toStringList_emt2ew$(charMap, margin), '\n');
    };

    function FloatArray2$toString$lambda(closure$map) {
        return function (it) {
            var tmp$;
            return (tmp$ = unboxChar(closure$map.get_11rb$(it))) != null ? tmp$ : 32;
        };
    }

    FloatArray2.prototype.toString_v9vr3$ = function (map, margin) {
        if (margin === void 0)
            margin = '';
        return this.toString_e4oys4$(margin, FloatArray2$toString$lambda(map));
    };
    FloatArray2.prototype.toString = function () {
        var $receiver = until(0, this.height);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            var tmp$_0 = destination.add_11rb$;
            var $receiver_0 = until(0, this.width);
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
                var item_0 = tmp$_1.next();
                destination_0.add_11rb$(this.get_vux9f0$(item_0, item));
            }
            tmp$_0.call(destination, joinToString(destination_0, ', '));
        }
        return joinToString(destination, '\n');
    };
    FloatArray2.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatArray2',
        interfaces: [Iterable]
    };
    FloatArray2.prototype.component1 = function () {
        return this.width;
    };
    FloatArray2.prototype.component2 = function () {
        return this.height;
    };
    FloatArray2.prototype.component3 = function () {
        return this.data;
    };
    FloatArray2.prototype.copy_l5lmba$ = function (width, height, data) {
        return new FloatArray2(width === void 0 ? this.width : width, height === void 0 ? this.height : height, data === void 0 ? this.data : data);
    };

    function ByteArrayDeque(initialBits) {
        if (initialBits === void 0)
            initialBits = 10;
        this.initialBits = initialBits;
        this.ring_0 = new RingBuffer(this.initialBits);
        this.tempBuffer_0 = new Int8Array(1024);
        this.written_r0vamw$_0 = L0;
        this.read_rdv8xb$_0 = L0;
    }

    Object.defineProperty(ByteArrayDeque.prototype, 'written', {
        get: function () {
            return this.written_r0vamw$_0;
        },
        set: function (written) {
            this.written_r0vamw$_0 = written;
        }
    });
    Object.defineProperty(ByteArrayDeque.prototype, 'read', {
        get: function () {
            return this.read_rdv8xb$_0;
        },
        set: function (read) {
            this.read_rdv8xb$_0 = read;
        }
    });
    Object.defineProperty(ByteArrayDeque.prototype, 'availableWriteWithoutAllocating', {
        get: function () {
            return this.ring_0.availableWrite;
        }
    });
    Object.defineProperty(ByteArrayDeque.prototype, 'availableRead', {
        get: function () {
            return this.ring_0.availableRead;
        }
    });
    ByteArrayDeque.prototype.writeHead_mj6st8$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.writeHead_mj6st8$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    ByteArrayDeque.prototype.write_mj6st8$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.write_mj6st8$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    ByteArrayDeque.prototype.read_mj6st8$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ring_0.read_mj6st8$(buffer, offset, size);
        if (out > 0)
            this.read = this.read.add(Kotlin.Long.fromInt(out));
        return out;
    };
    ByteArrayDeque.prototype.readByte = function () {
        return this.ring_0.readByte();
    };
    ByteArrayDeque.prototype.writeByte_za3lpa$ = function (v) {
        return this.ensureWrite_0(1).ring_0.writeByte_za3lpa$(v);
    };
    ByteArrayDeque.prototype.ensureWrite_0 = function (count) {
        if (count > this.ring_0.availableWrite) {
            var minNewSize = this.ring_0.availableRead + count | 0;
            var newBits = ilog2(minNewSize) + 2 | 0;
            var newRing = new RingBuffer(newBits);
            while (this.ring_0.availableRead > 0) {
                var read = this.ring_0.read_mj6st8$(this.tempBuffer_0, 0, this.tempBuffer_0.length);
                newRing.write_mj6st8$(this.tempBuffer_0, 0, read);
            }
            this.ring_0 = newRing;
        }
        return this;
    };
    ByteArrayDeque.prototype.clear = function () {
        this.ring_0.clear();
    };
    ByteArrayDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteArrayDeque',
        interfaces: []
    };

    function ShortArrayDeque(initialBits) {
        if (initialBits === void 0)
            initialBits = 10;
        this.initialBits = initialBits;
        this.ring_0 = new ShortRingBuffer(this.initialBits);
        this.tempBuffer_0 = new Int16Array(1024);
        this.written_88wfp4$_0 = L0;
        this.read_40rvg1$_0 = L0;
    }

    Object.defineProperty(ShortArrayDeque.prototype, 'written', {
        get: function () {
            return this.written_88wfp4$_0;
        },
        set: function (written) {
            this.written_88wfp4$_0 = written;
        }
    });
    Object.defineProperty(ShortArrayDeque.prototype, 'read', {
        get: function () {
            return this.read_40rvg1$_0;
        },
        set: function (read) {
            this.read_40rvg1$_0 = read;
        }
    });
    Object.defineProperty(ShortArrayDeque.prototype, 'availableWriteWithoutAllocating', {
        get: function () {
            return this.ring_0.availableWrite;
        }
    });
    Object.defineProperty(ShortArrayDeque.prototype, 'availableRead', {
        get: function () {
            return this.ring_0.availableRead;
        }
    });
    ShortArrayDeque.prototype.writeHead_359eei$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.writeHead_359eei$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    ShortArrayDeque.prototype.write_359eei$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.write_359eei$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    ShortArrayDeque.prototype.read_359eei$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ring_0.read_359eei$(buffer, offset, size);
        if (out > 0)
            this.read = this.read.add(Kotlin.Long.fromInt(out));
        return out;
    };
    ShortArrayDeque.prototype.ensureWrite_0 = function (count) {
        if (count > this.ring_0.availableWrite) {
            var minNewSize = this.ring_0.availableRead + count | 0;
            var newBits = ilog2(minNewSize) + 2 | 0;
            var newRing = new ShortRingBuffer(newBits);
            while (this.ring_0.availableRead > 0) {
                var read = this.ring_0.read_359eei$(this.tempBuffer_0, 0, this.tempBuffer_0.length);
                newRing.write_359eei$(this.tempBuffer_0, 0, read);
            }
            this.ring_0 = newRing;
        }
        return this;
    };
    ShortArrayDeque.prototype.clear = function () {
        this.ring_0.clear();
    };
    ShortArrayDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ShortArrayDeque',
        interfaces: []
    };

    function IntArrayDeque(initialBits) {
        if (initialBits === void 0)
            initialBits = 10;
        this.initialBits = initialBits;
        this.ring_0 = new IntRingBuffer(this.initialBits);
        this.tempBuffer_0 = new Int32Array(1024);
        this.written_osti3$_0 = L0;
        this.read_6yhh4y$_0 = L0;
    }

    Object.defineProperty(IntArrayDeque.prototype, 'written', {
        get: function () {
            return this.written_osti3$_0;
        },
        set: function (written) {
            this.written_osti3$_0 = written;
        }
    });
    Object.defineProperty(IntArrayDeque.prototype, 'read', {
        get: function () {
            return this.read_6yhh4y$_0;
        },
        set: function (read) {
            this.read_6yhh4y$_0 = read;
        }
    });
    Object.defineProperty(IntArrayDeque.prototype, 'availableWriteWithoutAllocating', {
        get: function () {
            return this.ring_0.availableWrite;
        }
    });
    Object.defineProperty(IntArrayDeque.prototype, 'availableRead', {
        get: function () {
            return this.ring_0.availableRead;
        }
    });
    IntArrayDeque.prototype.writeHead_nd5v6f$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.writeHead_nd5v6f$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    IntArrayDeque.prototype.write_nd5v6f$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.write_nd5v6f$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    IntArrayDeque.prototype.read_nd5v6f$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ring_0.read_nd5v6f$(buffer, offset, size);
        if (out > 0)
            this.read = this.read.add(Kotlin.Long.fromInt(out));
        return out;
    };
    IntArrayDeque.prototype.ensureWrite_0 = function (count) {
        if (count > this.ring_0.availableWrite) {
            var minNewSize = this.ring_0.availableRead + count | 0;
            var newBits = ilog2(minNewSize) + 2 | 0;
            var newRing = new IntRingBuffer(newBits);
            while (this.ring_0.availableRead > 0) {
                var read = this.ring_0.read_nd5v6f$(this.tempBuffer_0, 0, this.tempBuffer_0.length);
                newRing.write_nd5v6f$(this.tempBuffer_0, 0, read);
            }
            this.ring_0 = newRing;
        }
        return this;
    };
    IntArrayDeque.prototype.clear = function () {
        this.ring_0.clear();
    };
    IntArrayDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntArrayDeque',
        interfaces: []
    };

    function FloatArrayDeque(initialBits) {
        if (initialBits === void 0)
            initialBits = 10;
        this.initialBits = initialBits;
        this.ring_0 = new FloatRingBuffer(this.initialBits);
        this.tempBuffer_0 = new Float32Array(1024);
        this.written_pgcew8$_0 = L0;
        this.read_99tno1$_0 = L0;
    }

    Object.defineProperty(FloatArrayDeque.prototype, 'written', {
        get: function () {
            return this.written_pgcew8$_0;
        },
        set: function (written) {
            this.written_pgcew8$_0 = written;
        }
    });
    Object.defineProperty(FloatArrayDeque.prototype, 'read', {
        get: function () {
            return this.read_99tno1$_0;
        },
        set: function (read) {
            this.read_99tno1$_0 = read;
        }
    });
    Object.defineProperty(FloatArrayDeque.prototype, 'availableWriteWithoutAllocating', {
        get: function () {
            return this.ring_0.availableWrite;
        }
    });
    Object.defineProperty(FloatArrayDeque.prototype, 'availableRead', {
        get: function () {
            return this.ring_0.availableRead;
        }
    });
    FloatArrayDeque.prototype.writeHead_kgymra$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.writeHead_kgymra$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    FloatArrayDeque.prototype.write_kgymra$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ensureWrite_0(size).ring_0.write_kgymra$(buffer, offset, size);
        if (out > 0)
            this.written = this.written.add(Kotlin.Long.fromInt(out));
        return out;
    };
    FloatArrayDeque.prototype.read_kgymra$ = function (buffer, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = buffer.length - offset | 0;
        var out = this.ring_0.read_kgymra$(buffer, offset, size);
        if (out > 0)
            this.read = this.read.add(Kotlin.Long.fromInt(out));
        return out;
    };
    FloatArrayDeque.prototype.ensureWrite_0 = function (count) {
        if (count > this.ring_0.availableWrite) {
            var minNewSize = this.ring_0.availableRead + count | 0;
            var newBits = ilog2(minNewSize) + 2 | 0;
            var newRing = new FloatRingBuffer(newBits);
            while (this.ring_0.availableRead > 0) {
                var read = this.ring_0.read_kgymra$(this.tempBuffer_0, 0, this.tempBuffer_0.length);
                newRing.write_kgymra$(this.tempBuffer_0, 0, read);
            }
            this.ring_0 = newRing;
        }
        return this;
    };
    FloatArrayDeque.prototype.clear = function () {
        this.ring_0.clear();
    };
    FloatArrayDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatArrayDeque',
        interfaces: []
    };

    function IntArrayList(capacity) {
        if (capacity === void 0)
            capacity = 7;
        var tmp$;
        this.data_t2mhd8$_0 = Kotlin.isIntArray(tmp$ = new Int32Array(capacity)) ? tmp$ : throwCCE();
        this.length_0 = 0;
    }

    Object.defineProperty(IntArrayList.prototype, 'data', {
        get: function () {
            return this.data_t2mhd8$_0;
        },
        set: function (data) {
            this.data_t2mhd8$_0 = data;
        }
    });
    Object.defineProperty(IntArrayList.prototype, 'capacity_8be2vx$', {
        get: function () {
            return this.data.length;
        }
    });
    Object.defineProperty(IntArrayList.prototype, 'size', {
        get: function () {
            return this.length_0;
        },
        set: function (value) {
            this.ensure_0(value);
            this.length_0 = value;
        }
    });
    IntArrayList.prototype.ensure_0 = function (count) {
        var tmp$;
        if ((this.length_0 + count | 0) > this.data.length) {
            var tmp$_0 = this.data;
            var a = this.length_0 + count | 0;
            var b = this.data.length * 3 | 0;
            this.data = Kotlin.isIntArray(tmp$ = copyOf(tmp$_0, Math_0.max(a, b))) ? tmp$ : throwCCE();
        }
    };
    IntArrayList.prototype.clear = function () {
        this.length_0 = 0;
    };
    IntArrayList.prototype.add_za3lpa$ = function (value) {
        var tmp$;
        this.ensure_0(1);
        this.data[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = value;
    };
    IntArrayList.prototype.plusAssign_za3lpa$ = function (value) {
        this.add_za3lpa$(value);
    };
    IntArrayList.prototype.plusAssign_q5rwfd$ = function (value) {
        this.add_nd5v6f$(value);
    };
    IntArrayList.prototype.plusAssign_38vc8i$ = function (value) {
        this.add_38vc8i$(value);
    };
    IntArrayList.prototype.plusAssign_ampky3$ = function (value) {
        this.add_ampky3$(value);
    };
    IntArrayList.prototype.add_nd5v6f$ = function (values, offset, length) {
        if (offset === void 0)
            offset = 0;
        if (length === void 0)
            length = values.length;
        var tmp$;
        this.ensure_0(length);
        arraycopy_1(Kotlin.isIntArray(tmp$ = values) ? tmp$ : throwCCE(), offset, this.data, this.size, length);
        this.size = this.size + length | 0;
    };
    IntArrayList.prototype.add_38vc8i$ = function (values) {
        this.add_nd5v6f$(values.data, 0, values.size);
    };
    IntArrayList.prototype.add_ampky3$ = function (values) {
        var tmp$;
        tmp$ = values.iterator();
        while (tmp$.hasNext()) {
            var v = tmp$.next();
            this.add_za3lpa$(v);
        }
    };
    IntArrayList.prototype.get_za3lpa$ = function (index) {
        return this.data[index];
    };
    IntArrayList.prototype.set_vux9f0$ = function (index, value) {
        if (index >= this.length_0) {
            this.ensure_0(index + 1 | 0);
            this.length_0 = index + 1 | 0;
        }
        this.data[index] = value;
    };
    IntArrayList.prototype.iterator = function () {
        return this.listIterator_za3lpa$(0);
    };
    IntArrayList.prototype.contains_11rb$ = function (element) {
        var tmp$;
        tmp$ = this.length_0;
        for (var n = 0; n < tmp$; n++)
            if (this.data[n] === element)
                return true;
        return false;
    };
    IntArrayList.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            if (!this.contains_11rb$(e))
                return false;
        }
        return true;
    };
    IntArrayList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    IntArrayList.prototype.indexOf_qt1dr2$ = function (value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = this.size;
        for (var n = start; n < end; n++)
            if (this.data[n] === value)
                return n;
        return -1;
    };
    IntArrayList.prototype.lastIndexOf_qt1dr2$ = function (value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = this.size;
        for (var n = end - 1 | 0; n >= start; n--)
            if (this.data[n] === value)
                return n;
        return -1;
    };
    IntArrayList.prototype.removeAt_za3lpa$ = function (index) {
        if (index < 0 || index >= this.length_0)
            throw IndexOutOfBoundsException_init();
        var out = this.data[index];
        if (index < (this.length_0 - 1 | 0))
            arraycopy_1(this.data, index + 1 | 0, this.data, index, this.length_0 - index - 1 | 0);
        this.length_0 = this.length_0 - 1 | 0;
        return out;
    };
    IntArrayList.prototype.toIntArray = function () {
        return copyOf(this.data, this.length_0);
    };
    IntArrayList.prototype.indexOf_11rb$ = function (element) {
        return this.indexOf_qt1dr2$(element, 0, this.size);
    };
    IntArrayList.prototype.lastIndexOf_11rb$ = function (element) {
        return this.lastIndexOf_qt1dr2$(element, 0, this.size);
    };
    IntArrayList.prototype.listIterator = function () {
        return this.listIterator_za3lpa$(0);
    };
    IntArrayList.prototype.listIterator_za3lpa$ = function (index) {
        return take(this.data, this.length_0).listIterator_za3lpa$(index);
    };
    IntArrayList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
        return asList(this.data).subList_vux9f0$(fromIndex, toIndex);
    };
    IntArrayList.prototype.hashCode = function () {
        return contentHashCode(this.data);
    };
    IntArrayList.prototype.equals = function (other) {
        if (Kotlin.isType(other, IntArrayList))
            return contentEquals(this.data, other.data);
        if (Kotlin.isType(other, List))
            return equals(other, this);
        return false;
    };
    IntArrayList.prototype.toString = function () {
        var $receiver = StringBuilder_init(2 + (5 * this.size | 0) | 0);
        var tmp$;
        $receiver.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (n !== 0)
                $receiver.append_gw00v9$(', ');
            $receiver.append_s8jyv4$(this.get_za3lpa$(n));
        }
        $receiver.append_s8itvh$(93);
        return $receiver.toString();
    };
    IntArrayList.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntArrayList',
        interfaces: [List]
    };

    function IntArrayList_init(other, $this) {
        $this = $this || Object.create(IntArrayList.prototype);
        IntArrayList.call($this);
        $this.add_38vc8i$(other);
        return $this;
    }

    function IntArrayList_init_0(other, $this) {
        $this = $this || Object.create(IntArrayList.prototype);
        IntArrayList.call($this);
        $this.add_nd5v6f$(other);
        return $this;
    }

    function intArrayListOf(values) {
        return IntArrayList_init_0(values.slice());
    }

    function DoubleArrayList(capacity) {
        if (capacity === void 0)
            capacity = 7;
        var tmp$;
        this.data_dakdwi$_0 = Kotlin.isDoubleArray(tmp$ = new Float64Array(capacity)) ? tmp$ : throwCCE();
        this.length_0 = 0;
    }

    Object.defineProperty(DoubleArrayList.prototype, 'data', {
        get: function () {
            return this.data_dakdwi$_0;
        },
        set: function (data) {
            this.data_dakdwi$_0 = data;
        }
    });
    Object.defineProperty(DoubleArrayList.prototype, 'capacity_8be2vx$', {
        get: function () {
            return this.data.length;
        }
    });
    Object.defineProperty(DoubleArrayList.prototype, 'size', {
        get: function () {
            return this.length_0;
        },
        set: function (value) {
            this.ensure_0(value);
            this.length_0 = value;
        }
    });
    DoubleArrayList.prototype.ensure_0 = function (count) {
        var tmp$;
        if ((this.length_0 + count | 0) > this.data.length) {
            var tmp$_0 = this.data;
            var a = this.length_0 + count | 0;
            var b = this.data.length * 3 | 0;
            this.data = Kotlin.isDoubleArray(tmp$ = copyOf_0(tmp$_0, Math_0.max(a, b))) ? tmp$ : throwCCE();
        }
    };
    DoubleArrayList.prototype.clear = function () {
        this.length_0 = 0;
    };
    DoubleArrayList.prototype.add_14dthe$ = function (value) {
        var tmp$;
        this.ensure_0(1);
        this.data[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = value;
    };
    DoubleArrayList.prototype.plusAssign_14dthe$ = function (value) {
        this.add_14dthe$(value);
    };
    DoubleArrayList.prototype.plusAssign_gf7tl1$ = function (value) {
        this.add_6icyh1$(value);
    };
    DoubleArrayList.prototype.plusAssign_avch8c$ = function (value) {
        this.add_avch8c$(value);
    };
    DoubleArrayList.prototype.plusAssign_layyx3$ = function (value) {
        this.add_layyx3$(value);
    };
    DoubleArrayList.prototype.add_6icyh1$ = function (values, offset, length) {
        if (offset === void 0)
            offset = 0;
        if (length === void 0)
            length = values.length;
        var tmp$;
        this.ensure_0(length);
        arraycopy_3(Kotlin.isDoubleArray(tmp$ = values) ? tmp$ : throwCCE(), offset, this.data, this.size, length);
        this.size = this.size + length | 0;
    };
    DoubleArrayList.prototype.add_avch8c$ = function (values) {
        this.add_6icyh1$(values.data, 0, values.size);
    };
    DoubleArrayList.prototype.add_layyx3$ = function (values) {
        var tmp$;
        tmp$ = values.iterator();
        while (tmp$.hasNext()) {
            var v = tmp$.next();
            this.add_14dthe$(v);
        }
    };
    DoubleArrayList.prototype.get_za3lpa$ = function (index) {
        return this.data[index];
    };
    DoubleArrayList.prototype.set_5wr77w$ = function (index, value) {
        if (index >= this.length_0) {
            this.ensure_0(index + 1 | 0);
            this.length_0 = index + 1 | 0;
        }
        this.data[index] = value;
    };
    DoubleArrayList.prototype.iterator = function () {
        return this.listIterator_za3lpa$(0);
    };
    DoubleArrayList.prototype.contains_11rb$ = function (element) {
        var tmp$;
        tmp$ = this.length_0;
        for (var n = 0; n < tmp$; n++)
            if (this.data[n] === element)
                return true;
        return false;
    };
    DoubleArrayList.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            if (!this.contains_11rb$(e))
                return false;
        }
        return true;
    };
    DoubleArrayList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    DoubleArrayList.prototype.indexOf_mqu1mq$ = function (value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = this.size;
        for (var n = start; n < end; n++)
            if (this.data[n] === value)
                return n;
        return -1;
    };
    DoubleArrayList.prototype.lastIndexOf_mqu1mq$ = function (value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = this.size;
        for (var n = end - 1 | 0; n >= start; n--)
            if (this.data[n] === value)
                return n;
        return -1;
    };
    DoubleArrayList.prototype.removeAt_za3lpa$ = function (index) {
        if (index < 0 || index >= this.length_0)
            throw IndexOutOfBoundsException_init();
        var out = this.data[index];
        if (index < (this.length_0 - 1 | 0))
            arraycopy_3(this.data, index + 1 | 0, this.data, index, this.length_0 - index - 1 | 0);
        this.length_0 = this.length_0 - 1 | 0;
        return out;
    };
    DoubleArrayList.prototype.toDoubleArray = function () {
        return copyOf_0(this.data, this.length_0);
    };
    DoubleArrayList.prototype.indexOf_11rb$ = function (element) {
        return this.indexOf_mqu1mq$(element, 0, this.size);
    };
    DoubleArrayList.prototype.lastIndexOf_11rb$ = function (element) {
        return this.lastIndexOf_mqu1mq$(element, 0, this.size);
    };
    DoubleArrayList.prototype.listIterator = function () {
        return this.listIterator_za3lpa$(0);
    };
    DoubleArrayList.prototype.listIterator_za3lpa$ = function (index) {
        return take_0(this.data, this.length_0).listIterator_za3lpa$(index);
    };
    DoubleArrayList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
        return asList(this.data).subList_vux9f0$(fromIndex, toIndex);
    };
    DoubleArrayList.prototype.hashCode = function () {
        return contentHashCode(this.data);
    };
    DoubleArrayList.prototype.equals = function (other) {
        if (Kotlin.isType(other, DoubleArrayList))
            return contentEquals(this.data, other.data);
        if (Kotlin.isType(other, List))
            return equals(other, this);
        return false;
    };
    DoubleArrayList.prototype.toString = function () {
        var $receiver = StringBuilder_init(2 + (5 * this.size | 0) | 0);
        var tmp$;
        $receiver.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (n !== 0)
                $receiver.append_gw00v9$(', ');
            $receiver.append_s8jyv4$(this.get_za3lpa$(n));
        }
        $receiver.append_s8itvh$(93);
        return $receiver.toString();
    };
    DoubleArrayList.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'DoubleArrayList',
        interfaces: [List]
    };

    function DoubleArrayList_init(other, $this) {
        $this = $this || Object.create(DoubleArrayList.prototype);
        DoubleArrayList.call($this);
        $this.add_avch8c$(other);
        return $this;
    }

    function DoubleArrayList_init_0(other, $this) {
        $this = $this || Object.create(DoubleArrayList.prototype);
        DoubleArrayList.call($this);
        $this.add_6icyh1$(other);
        return $this;
    }

    function doubleArrayListOf(values) {
        return DoubleArrayList_init_0(values.slice());
    }

    function FloatArrayList(capacity) {
        if (capacity === void 0)
            capacity = 7;
        var tmp$;
        this.data_4e3zeh$_0 = Kotlin.isFloatArray(tmp$ = new Float32Array(capacity)) ? tmp$ : throwCCE();
        this.length_0 = 0;
    }

    Object.defineProperty(FloatArrayList.prototype, 'data', {
        get: function () {
            return this.data_4e3zeh$_0;
        },
        set: function (data) {
            this.data_4e3zeh$_0 = data;
        }
    });
    Object.defineProperty(FloatArrayList.prototype, 'capacity_8be2vx$', {
        get: function () {
            return this.data.length;
        }
    });
    Object.defineProperty(FloatArrayList.prototype, 'size', {
        get: function () {
            return this.length_0;
        },
        set: function (value) {
            this.ensure_0(value);
            this.length_0 = value;
        }
    });
    FloatArrayList.prototype.ensure_0 = function (count) {
        var tmp$;
        if ((this.length_0 + count | 0) > this.data.length) {
            var tmp$_0 = this.data;
            var a = this.length_0 + count | 0;
            var b = this.data.length * 3 | 0;
            this.data = Kotlin.isFloatArray(tmp$ = copyOf_1(tmp$_0, Math_0.max(a, b))) ? tmp$ : throwCCE();
        }
    };
    FloatArrayList.prototype.clear = function () {
        this.length_0 = 0;
    };
    FloatArrayList.prototype.add_mx4ult$ = function (value) {
        var tmp$;
        this.ensure_0(1);
        this.data[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = value;
    };
    FloatArrayList.prototype.plusAssign_mx4ult$ = function (value) {
        this.add_mx4ult$(value);
    };
    FloatArrayList.prototype.plusAssign_q3cr5i$ = function (value) {
        this.add_kgymra$(value);
    };
    FloatArrayList.prototype.plusAssign_7u0t7$ = function (value) {
        this.add_7u0t7$(value);
    };
    FloatArrayList.prototype.plusAssign_ar0w2w$ = function (value) {
        this.add_ar0w2w$(value);
    };
    FloatArrayList.prototype.add_kgymra$ = function (values, offset, length) {
        if (offset === void 0)
            offset = 0;
        if (length === void 0)
            length = values.length;
        var tmp$;
        this.ensure_0(length);
        arraycopy_2(Kotlin.isFloatArray(tmp$ = values) ? tmp$ : throwCCE(), offset, this.data, this.size, length);
        this.size = this.size + length | 0;
    };
    FloatArrayList.prototype.add_7u0t7$ = function (values) {
        this.add_kgymra$(values.data, 0, values.size);
    };
    FloatArrayList.prototype.add_ar0w2w$ = function (values) {
        var tmp$;
        tmp$ = values.iterator();
        while (tmp$.hasNext()) {
            var v = tmp$.next();
            this.add_mx4ult$(v);
        }
    };
    FloatArrayList.prototype.get_za3lpa$ = function (index) {
        return this.data[index];
    };
    FloatArrayList.prototype.set_24o109$ = function (index, value) {
        if (index >= this.length_0) {
            this.ensure_0(index + 1 | 0);
            this.length_0 = index + 1 | 0;
        }
        this.data[index] = value;
    };
    FloatArrayList.prototype.iterator = function () {
        return this.listIterator_za3lpa$(0);
    };
    FloatArrayList.prototype.contains_11rb$ = function (element) {
        var tmp$;
        tmp$ = this.length_0;
        for (var n = 0; n < tmp$; n++)
            if (this.data[n] === element)
                return true;
        return false;
    };
    FloatArrayList.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            if (!this.contains_11rb$(e))
                return false;
        }
        return true;
    };
    FloatArrayList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    FloatArrayList.prototype.indexOf_rjhsen$ = function (value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = this.size;
        for (var n = start; n < end; n++)
            if (this.data[n] === value)
                return n;
        return -1;
    };
    FloatArrayList.prototype.lastIndexOf_rjhsen$ = function (value, start, end) {
        if (start === void 0)
            start = 0;
        if (end === void 0)
            end = this.size;
        for (var n = end - 1 | 0; n >= start; n--)
            if (this.data[n] === value)
                return n;
        return -1;
    };
    FloatArrayList.prototype.removeAt_za3lpa$ = function (index) {
        if (index < 0 || index >= this.length_0)
            throw IndexOutOfBoundsException_init();
        var out = this.data[index];
        if (index < (this.length_0 - 1 | 0))
            arraycopy_2(this.data, index + 1 | 0, this.data, index, this.length_0 - index - 1 | 0);
        this.length_0 = this.length_0 - 1 | 0;
        return out;
    };
    FloatArrayList.prototype.toFloatArray = function () {
        return copyOf_1(this.data, this.length_0);
    };
    FloatArrayList.prototype.indexOf_11rb$ = function (element) {
        return this.indexOf_rjhsen$(element, 0, this.size);
    };
    FloatArrayList.prototype.lastIndexOf_11rb$ = function (element) {
        return this.lastIndexOf_rjhsen$(element, 0, this.size);
    };
    FloatArrayList.prototype.listIterator = function () {
        return this.listIterator_za3lpa$(0);
    };
    FloatArrayList.prototype.listIterator_za3lpa$ = function (index) {
        return take_1(this.data, this.length_0).listIterator_za3lpa$(index);
    };
    FloatArrayList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
        return asList(this.data).subList_vux9f0$(fromIndex, toIndex);
    };
    FloatArrayList.prototype.hashCode = function () {
        return contentHashCode(this.data);
    };
    FloatArrayList.prototype.equals = function (other) {
        if (Kotlin.isType(other, FloatArrayList))
            return contentEquals(this.data, other.data);
        if (Kotlin.isType(other, List))
            return equals(other, this);
        return false;
    };
    FloatArrayList.prototype.toString = function () {
        var $receiver = StringBuilder_init(2 + (5 * this.size | 0) | 0);
        var tmp$;
        $receiver.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (n !== 0)
                $receiver.append_gw00v9$(', ');
            $receiver.append_s8jyv4$(this.get_za3lpa$(n));
        }
        $receiver.append_s8itvh$(93);
        return $receiver.toString();
    };
    FloatArrayList.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatArrayList',
        interfaces: [List]
    };

    function FloatArrayList_init(other, $this) {
        $this = $this || Object.create(FloatArrayList.prototype);
        FloatArrayList.call($this);
        $this.add_7u0t7$(other);
        return $this;
    }

    function FloatArrayList_init_0(other, $this) {
        $this = $this || Object.create(FloatArrayList.prototype);
        FloatArrayList.call($this);
        $this.add_kgymra$(other);
        return $this;
    }

    function floatArrayListOf(values) {
        return FloatArrayList_init_0(values.slice());
    }

    var toIntList = defineInlineFunction('kds-root-kds.com.soywiz.kds.toIntList_9tsm8a$', wrapFunction(function () {
        var IntArrayList_init = _.com.soywiz.kds.IntArrayList;
        return function ($receiver) {
            var $receiver_0 = new IntArrayList_init($receiver.endInclusive - $receiver.start | 0);
            var tmp$, tmp$_0;
            tmp$ = $receiver.start;
            tmp$_0 = $receiver.endInclusive;
            for (var v = tmp$; v <= tmp$_0; v++)
                $receiver_0.add_za3lpa$(v);
            return $receiver_0;
        };
    }));
    var toIntList_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.toIntList_plj8ka$', wrapFunction(function () {
        var IntArrayList_init = _.com.soywiz.kds.IntArrayList;
        return function ($receiver) {
            var $receiver_0 = new IntArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                $receiver_0.add_za3lpa$(v);
            }
            return $receiver_0;
        };
    }));
    var toFloatList = defineInlineFunction('kds-root-kds.com.soywiz.kds.toFloatList_lvsncp$', wrapFunction(function () {
        var FloatArrayList_init = _.com.soywiz.kds.FloatArrayList;
        return function ($receiver) {
            var $receiver_0 = new FloatArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                $receiver_0.add_mx4ult$(v);
            }
            return $receiver_0;
        };
    }));
    var toDoubleList = defineInlineFunction('kds-root-kds.com.soywiz.kds.toDoubleList_l63kqw$', wrapFunction(function () {
        var DoubleArrayList_init = _.com.soywiz.kds.DoubleArrayList;
        return function ($receiver) {
            var $receiver_0 = new DoubleArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                $receiver_0.add_14dthe$(v);
            }
            return $receiver_0;
        };
    }));
    var mapInt = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapInt_1nckxa$', wrapFunction(function () {
        var IntArrayList_init = _.com.soywiz.kds.IntArrayList;
        return function ($receiver, callback) {
            var $receiver_0 = new IntArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                $receiver_0.add_za3lpa$(callback(v));
            }
            return $receiver_0;
        };
    }));
    var mapFloat = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapFloat_v16v6p$', wrapFunction(function () {
        var FloatArrayList_init = _.com.soywiz.kds.FloatArrayList;
        return function ($receiver, callback) {
            var $receiver_0 = new FloatArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                $receiver_0.add_mx4ult$(callback(v));
            }
            return $receiver_0;
        };
    }));
    var mapDouble = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapDouble_k0tf9a$', wrapFunction(function () {
        var DoubleArrayList_init = _.com.soywiz.kds.DoubleArrayList;
        return function ($receiver, callback) {
            var $receiver_0 = new DoubleArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                $receiver_0.add_14dthe$(callback(v));
            }
            return $receiver_0;
        };
    }));
    var filter = defineInlineFunction('kds-root-kds.com.soywiz.kds.filter_8ct0zs$', wrapFunction(function () {
        var IntArrayList_init = _.com.soywiz.kds.IntArrayList;
        return function ($receiver, callback) {
            var $receiver_0 = new IntArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                if (callback(v))
                    $receiver_0.add_za3lpa$(v);
            }
            return $receiver_0;
        };
    }));
    var filter_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.filter_spv2xe$', wrapFunction(function () {
        var FloatArrayList_init = _.com.soywiz.kds.FloatArrayList;
        return function ($receiver, callback) {
            var $receiver_0 = new FloatArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                if (callback(v))
                    $receiver_0.add_mx4ult$(v);
            }
            return $receiver_0;
        };
    }));
    var filter_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.filter_5aw1ee$', wrapFunction(function () {
        var DoubleArrayList_init = _.com.soywiz.kds.DoubleArrayList;
        return function ($receiver, callback) {
            var $receiver_0 = new DoubleArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var v = tmp$.next();
                if (callback(v))
                    $receiver_0.add_14dthe$(v);
            }
            return $receiver_0;
        };
    }));

    function BitSet(size) {
        this.size_am1096$_0 = size;
        this.data = new Int32Array(divCeil(this.size, 4));
    }

    Object.defineProperty(BitSet.prototype, 'size', {
        get: function () {
            return this.size_am1096$_0;
        }
    });
    BitSet.prototype.part_0 = function (index) {
        return index >>> 5;
    };
    BitSet.prototype.bit_0 = function (index) {
        return index & 31;
    };
    BitSet.prototype.get_za3lpa$ = function (index) {
        return (this.data[this.part_0(index)] >>> this.bit_0(index) & 1) !== 0;
    };
    BitSet.prototype.set_fzusl$ = function (index, value) {
        var i = this.part_0(index);
        var b = this.bit_0(index);
        if (value) {
            this.data[i] = this.data[i] | 1 << b;
        } else {
            this.data[i] = this.data[i] & ~(1 << b);
        }
    };
    BitSet.prototype.set_za3lpa$ = function (index) {
        this.set_fzusl$(index, true);
    };
    BitSet.prototype.unset_za3lpa$ = function (index) {
        this.set_fzusl$(index, false);
    };
    BitSet.prototype.clear = function () {
        fill_0(this.data, 0);
    };
    BitSet.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_za3lpa$(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    BitSet.prototype.containsAll_brywnq$ = function (elements) {
        if (elements.contains_11rb$(true) && !this.contains_11rb$(true))
            return false;
        else if (elements.contains_11rb$(false) && !this.contains_11rb$(false))
            return false;
        else
            return true;
    };
    BitSet.prototype.isEmpty = function () {
        return this.size === 0;
    };
    BitSet.prototype.iterator = function () {
        var $receiver = until(0, this.size);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            destination.add_11rb$(this.get_za3lpa$(item));
        }
        return destination.iterator();
    };
    BitSet.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'BitSet',
        interfaces: [Collection]
    };

    function CacheMap(map, maxSize, free) {
        if (map === void 0)
            map = LinkedHashMap_init();
        if (maxSize === void 0)
            maxSize = 16;
        if (free === void 0)
            free = CacheMap_init$lambda;
        this.map_0 = map;
        this.maxSize = maxSize;
        this.free = free;
    }

    Object.defineProperty(CacheMap.prototype, 'size', {
        get: function () {
            return this.map_0.size;
        }
    });
    CacheMap.prototype.remove_11rb$ = function (key) {
        var value = this.map_0.remove_11rb$(key);
        if (value != null)
            this.free(key, value);
        return value;
    };
    CacheMap.prototype.putAll_a2k3zr$ = function (from) {
        var tmp$;
        tmp$ = from.entries.iterator();
        while (tmp$.hasNext()) {
            var tmp$_0 = tmp$.next();
            var k = tmp$_0.key;
            var v = tmp$_0.value;
            this.put_xwzc9p$(k, v);
        }
    };
    CacheMap.prototype.put_xwzc9p$ = function (key, value) {
        if (this.size >= this.maxSize && !this.map_0.containsKey_11rb$(key))
            this.remove_11rb$(first(this.map_0.keys));
        var oldValue = this.map_0.get_11rb$(key);
        if (!equals(oldValue, value)) {
            this.remove_11rb$(key);
            this.map_0.put_xwzc9p$(key, value);
        }
        return oldValue;
    };
    CacheMap.prototype.clear = function () {
        var tmp$;
        var keys = toList(this.map_0.keys);
        tmp$ = keys.iterator();
        while (tmp$.hasNext()) {
            var key = tmp$.next();
            this.remove_11rb$(key);
        }
    };
    CacheMap.prototype.toString = function () {
        return this.map_0.toString();
    };
    Object.defineProperty(CacheMap.prototype, 'entries', {
        get: function () {
            return this.map_0.entries;
        }
    });
    Object.defineProperty(CacheMap.prototype, 'keys', {
        get: function () {
            return this.map_0.keys;
        }
    });
    Object.defineProperty(CacheMap.prototype, 'values', {
        get: function () {
            return this.map_0.values;
        }
    });
    CacheMap.prototype.containsKey_11rb$ = function (key) {
        return this.map_0.containsKey_11rb$(key);
    };
    CacheMap.prototype.containsValue_11rc$ = function (value) {
        return this.map_0.containsValue_11rc$(value);
    };
    CacheMap.prototype.get_11rb$ = function (key) {
        return this.map_0.get_11rb$(key);
    };
    CacheMap.prototype.isEmpty = function () {
        return this.map_0.isEmpty();
    };

    function CacheMap_init$lambda(k, v) {
        return Unit;
    }

    CacheMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'CacheMap',
        interfaces: [MutableMap]
    };

    function CacheMap_init(maxSize, free, $this) {
        if (maxSize === void 0)
            maxSize = 16;
        if (free === void 0)
            free = CacheMap_init$lambda_0;
        $this = $this || Object.create(CacheMap.prototype);
        CacheMap.call($this, LinkedHashMap_init(), maxSize, free);
        return $this;
    }

    function CacheMap_init$lambda_0(k, v) {
        return Unit;
    }

    function CaseInsensitiveStringMap(mapOrig, lcToOrig, mapLC) {
        this.mapOrig_0 = mapOrig;
        this.lcToOrig_0 = lcToOrig;
        this.mapLC_0 = mapLC;
    }

    CaseInsensitiveStringMap.prototype.containsKey_11rb$ = function (key) {
        return this.mapLC_0.containsKey_11rb$(key.toLowerCase());
    };
    CaseInsensitiveStringMap.prototype.clear = function () {
        this.mapOrig_0.clear();
        this.mapLC_0.clear();
        this.lcToOrig_0.clear();
    };
    CaseInsensitiveStringMap.prototype.get_11rb$ = function (key) {
        return this.mapLC_0.get_11rb$(key.toLowerCase());
    };
    CaseInsensitiveStringMap.prototype.put_xwzc9p$ = function (key, value) {
        this.remove_11rb$(key);
        this.mapOrig_0.put_xwzc9p$(key, value);
        var tmp$ = this.lcToOrig_0;
        var key_0 = key.toLowerCase();
        tmp$.put_xwzc9p$(key_0, key);
        return this.mapLC_0.put_xwzc9p$(key.toLowerCase(), value);
    };
    CaseInsensitiveStringMap.prototype.putAll_a2k3zr$ = function (from) {
        var tmp$;
        tmp$ = from.entries.iterator();
        while (tmp$.hasNext()) {
            var v = tmp$.next();
            this.put_xwzc9p$(v.key, v.value);
        }
    };
    CaseInsensitiveStringMap.prototype.remove_11rb$ = function (key) {
        var lkey = key.toLowerCase();
        var okey = this.lcToOrig_0.get_11rb$(lkey);
        var $receiver = this.mapOrig_0;
        var tmp$;
        (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).remove_11rb$(okey);
        var res = this.mapLC_0.remove_11rb$(lkey);
        this.lcToOrig_0.remove_11rb$(lkey);
        return res;
    };
    Object.defineProperty(CaseInsensitiveStringMap.prototype, 'entries', {
        get: function () {
            return this.mapOrig_0.entries;
        }
    });
    Object.defineProperty(CaseInsensitiveStringMap.prototype, 'keys', {
        get: function () {
            return this.mapOrig_0.keys;
        }
    });
    Object.defineProperty(CaseInsensitiveStringMap.prototype, 'size', {
        get: function () {
            return this.mapOrig_0.size;
        }
    });
    Object.defineProperty(CaseInsensitiveStringMap.prototype, 'values', {
        get: function () {
            return this.mapOrig_0.values;
        }
    });
    CaseInsensitiveStringMap.prototype.containsValue_11rc$ = function (value) {
        return this.mapOrig_0.containsValue_11rc$(value);
    };
    CaseInsensitiveStringMap.prototype.isEmpty = function () {
        return this.mapOrig_0.isEmpty();
    };
    CaseInsensitiveStringMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'CaseInsensitiveStringMap',
        interfaces: [MutableMap]
    };

    function CaseInsensitiveStringMap_init($this) {
        $this = $this || Object.create(CaseInsensitiveStringMap.prototype);
        CaseInsensitiveStringMap.call($this, LinkedHashMap_init(), LinkedHashMap_init(), LinkedHashMap_init());
        return $this;
    }

    function CaseInsensitiveStringMap_init_0(data, $this) {
        $this = $this || Object.create(CaseInsensitiveStringMap.prototype);
        CaseInsensitiveStringMap_init($this);
        $this.putAll_a2k3zr$(data);
        return $this;
    }

    function CaseInsensitiveStringMap_init_1(items, $this) {
        $this = $this || Object.create(CaseInsensitiveStringMap.prototype);
        CaseInsensitiveStringMap_init($this);
        putAll($this, toList_0(items));
        return $this;
    }

    function toCaseInsensitiveMap($receiver) {
        var $receiver_0 = CaseInsensitiveStringMap_init();
        $receiver_0.putAll_a2k3zr$($receiver);
        return $receiver_0;
    }

    function TGenDeque() {
        this._start_1ejrpf$_0 = 0;
        this._size_g2v18u$_0 = 0;
        var tmp$;
        this.data_om94ys$_0 = Kotlin.isArray(tmp$ = Kotlin.newArray(16, null)) ? tmp$ : throwCCE();
    }

    Object.defineProperty(TGenDeque.prototype, 'capacity_cs1or0$_0', {
        get: function () {
            return this.data_om94ys$_0.length;
        }
    });
    Object.defineProperty(TGenDeque.prototype, 'size', {
        get: function () {
            return this._size_g2v18u$_0;
        }
    });
    TGenDeque.prototype.isEmpty = function () {
        return this.size === 0;
    };
    TGenDeque.prototype.resizeIfRequiredFor_vzb5qh$_0 = function (count) {
        var tmp$;
        if ((this.size + count | 0) > this.capacity_cs1or0$_0) {
            var i = this.data_om94ys$_0;
            var istart = this._start_1ejrpf$_0;
            var o = Kotlin.isArray(tmp$ = Kotlin.newArray(this.data_om94ys$_0.length * 2 | 0, null)) ? tmp$ : throwCCE();
            this.copyCyclic_tj8dw4$_0(i, istart, o, this._size_g2v18u$_0);
            this.data_om94ys$_0 = o;
            this._start_1ejrpf$_0 = 0;
        }
    };
    TGenDeque.prototype.copyCyclic_tj8dw4$_0 = function (i, istart, o, count) {
        var a = i.length - istart | 0;
        var size1 = Math_0.min(a, count);
        var size2 = count - size1 | 0;
        arraycopy(i, istart, o, 0, size1);
        if (size2 > 0)
            arraycopy(i, 0, o, size1, size2);
    };
    TGenDeque.prototype.addAll_p1ys8y$ = function (items) {
        var tmp$;
        this.resizeIfRequiredFor_vzb5qh$_0(count(items));
        tmp$ = items.iterator();
        while (tmp$.hasNext()) {
            var i = tmp$.next();
            this.addLast_11rb$(i);
        }
    };
    TGenDeque.prototype.addFirst_11rb$ = function (item) {
        this.resizeIfRequiredFor_vzb5qh$_0(1);
        this._start_1ejrpf$_0 = umod(this._start_1ejrpf$_0 - 1 | 0, this.capacity_cs1or0$_0);
        this._size_g2v18u$_0 = this._size_g2v18u$_0 + 1 | 0;
        this.data_om94ys$_0[this._start_1ejrpf$_0] = item;
    };
    TGenDeque.prototype.addLast_11rb$ = function (item) {
        this.resizeIfRequiredFor_vzb5qh$_0(1);
        this.data_om94ys$_0[umod(this._start_1ejrpf$_0 + this.size | 0, this.capacity_cs1or0$_0)] = item;
        this._size_g2v18u$_0 = this._size_g2v18u$_0 + 1 | 0;
    };
    TGenDeque.prototype.removeFirst = function () {
        if (this._size_g2v18u$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.first;
        this._start_1ejrpf$_0 = umod(this._start_1ejrpf$_0 + 1 | 0, this.capacity_cs1or0$_0);
        this._size_g2v18u$_0 = this._size_g2v18u$_0 - 1 | 0;
        return $receiver;
    };
    TGenDeque.prototype.removeLast = function () {
        if (this._size_g2v18u$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.last;
        this._size_g2v18u$_0 = this._size_g2v18u$_0 - 1 | 0;
        return $receiver;
    };
    TGenDeque.prototype.removeAt_za3lpa$ = function (index) {
        var tmp$;
        if (index < 0 || index >= this.size)
            throw IndexOutOfBoundsException_init();
        if (index === 0)
            return this.removeFirst();
        if (index === (this.size - 1 | 0))
            return this.removeLast();
        var old = this.get_za3lpa$(index);
        if (index < (this.size / 2 | 0)) {
            for (var n = index; n >= 1; n--)
                this.set_wxm5ur$(n, this.get_za3lpa$(n - 1 | 0));
            this._start_1ejrpf$_0 = umod(this._start_1ejrpf$_0 + 1 | 0, this.capacity_cs1or0$_0);
        } else {
            tmp$ = this.size - 1 | 0;
            for (var n_0 = index; n_0 < tmp$; n_0++)
                this.set_wxm5ur$(n_0, this.get_za3lpa$(n_0 + 1 | 0));
        }
        this._size_g2v18u$_0 = this._size_g2v18u$_0 - 1 | 0;
        return old;
    };
    TGenDeque.prototype.add_11rb$ = function (element) {
        this.addLast_11rb$(element);
        return true;
    };
    TGenDeque.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        this.addAll_p1ys8y$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
        return true;
    };
    TGenDeque.prototype.clear = function () {
        this._size_g2v18u$_0 = 0;
    };
    TGenDeque.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_11rb$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    TGenDeque.prototype.removeAll_brywnq$ = function (elements) {
        return this._removeRetainAll_oj5qru$_0(elements, false);
    };
    TGenDeque.prototype.retainAll_brywnq$ = function (elements) {
        return this._removeRetainAll_oj5qru$_0(elements, true);
    };
    TGenDeque.prototype._removeRetainAll_oj5qru$_0 = function (elements, retain) {
        var tmp$, tmp$_0;
        var eset = toSet(elements);
        var temp = this.data_om94ys$_0.slice();
        var tsize = 0;
        var osize = this.size;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            var c = this.get_za3lpa$(n);
            if (eset.contains_11rb$(c) === retain) {
                temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
            }
        }
        this.data_om94ys$_0 = temp;
        this._start_1ejrpf$_0 = 0;
        this._size_g2v18u$_0 = tsize;
        return tsize !== osize;
    };
    Object.defineProperty(TGenDeque.prototype, 'first', {
        get: function () {
            return this.data_om94ys$_0[this._start_1ejrpf$_0];
        }
    });
    Object.defineProperty(TGenDeque.prototype, 'last', {
        get: function () {
            return this.data_om94ys$_0[this.internalIndex_e09wf9$_0(this.size - 1 | 0)];
        }
    });
    TGenDeque.prototype.internalIndex_e09wf9$_0 = function (index) {
        return umod(this._start_1ejrpf$_0 + index | 0, this.capacity_cs1or0$_0);
    };
    TGenDeque.prototype.set_wxm5ur$ = function (index, value) {
        this.data_om94ys$_0[this.internalIndex_e09wf9$_0(index)] = value;
    };
    TGenDeque.prototype.get_za3lpa$ = function (index) {
        return this.data_om94ys$_0[this.internalIndex_e09wf9$_0(index)];
    };
    TGenDeque.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (equals(this.get_za3lpa$(element_0), element)) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    TGenDeque.prototype.indexOf_11rb$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (equals(this.get_za3lpa$(n), element))
                return n;
        return -1;
    };
    TGenDeque.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
        var tmp$_0;
        tmp$_0 = elements.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(to(item, 0));
        }
        var emap = toLinkedMap(destination);
        tmp$ = this.size;
        for (var it = 0; it < tmp$; it++) {
            var e = this.get_za3lpa$(it);
            var tmp$_1;
            if ((Kotlin.isType(tmp$_1 = emap, Map_0) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
                emap.put_xwzc9p$(e, 1);
            }
        }
        var $receiver = emap.values;
        var all$result;
        all$break: do {
            var tmp$_2;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$_2 = $receiver.iterator();
            while (tmp$_2.hasNext()) {
                var element = tmp$_2.next();
                if (!(element === 1)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };

    function TGenDeque$iterator$ObjectLiteral(closure$that, this$TGenDeque) {
        this.closure$that = closure$that;
        this.this$TGenDeque = this$TGenDeque;
        this.index = 0;
    }

    TGenDeque$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.closure$that.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
    };
    TGenDeque$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.index < this.this$TGenDeque.size;
    };
    TGenDeque$iterator$ObjectLiteral.prototype.remove = function () {
        this.this$TGenDeque;
        this.this$TGenDeque.removeAt_za3lpa$((this.index = this.index - 1 | 0, this.index));
    };
    TGenDeque$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    TGenDeque.prototype.iterator = function () {
        var that = this;
        return new TGenDeque$iterator$ObjectLiteral(that, this);
    };
    TGenDeque.prototype.hashCode = function () {
        var size = this.size;
        var result = 1;
        for (var n = 0; n < size; n++) {
            var tmp$ = 31 * result | 0;
            var $receiver = this.get_za3lpa$(n);
            var tmp$_0;
            result = tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        }
        return result;
    };
    TGenDeque.prototype.equals = function (other) {
        var tmp$;
        if (!Kotlin.isType(other, TGenDeque))
            return false;
        if (other.size !== this.size)
            return false;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (!equals(this.get_za3lpa$(n), other.get_za3lpa$(n)))
                return false;
        return true;
    };
    TGenDeque.prototype.toString = function () {
        var tmp$;
        var sb = StringBuilder_init_0();
        sb.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            sb.append_s8jyv4$(this.get_za3lpa$(n));
            if (n !== (this.size - 1 | 0))
                sb.append_gw00v9$(', ');
        }
        sb.append_s8itvh$(93);
        return sb.toString();
    };
    TGenDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'TGenDeque',
        interfaces: [MutableCollection]
    };

    function IntDeque() {
        this._start_ezstq4$_0 = 0;
        this._size_opro19$_0 = 0;
        var tmp$;
        this.data_wxyo2l$_0 = Kotlin.isIntArray(tmp$ = new Int32Array(16)) ? tmp$ : throwCCE();
    }

    Object.defineProperty(IntDeque.prototype, 'capacity_mktrrh$_0', {
        get: function () {
            return this.data_wxyo2l$_0.length;
        }
    });
    Object.defineProperty(IntDeque.prototype, 'size', {
        get: function () {
            return this._size_opro19$_0;
        }
    });
    IntDeque.prototype.isEmpty = function () {
        return this.size === 0;
    };
    IntDeque.prototype.resizeIfRequiredFor_spk7l6$_0 = function (count) {
        var tmp$;
        if ((this.size + count | 0) > this.capacity_mktrrh$_0) {
            var i = this.data_wxyo2l$_0;
            var istart = this._start_ezstq4$_0;
            var o = Kotlin.isIntArray(tmp$ = new Int32Array(this.data_wxyo2l$_0.length * 2 | 0)) ? tmp$ : throwCCE();
            this.copyCyclic_774awj$_0(i, istart, o, this._size_opro19$_0);
            this.data_wxyo2l$_0 = o;
            this._start_ezstq4$_0 = 0;
        }
    };
    IntDeque.prototype.copyCyclic_774awj$_0 = function (i, istart, o, count) {
        var a = i.length - istart | 0;
        var size1 = Math_0.min(a, count);
        var size2 = count - size1 | 0;
        arraycopy_1(i, istart, o, 0, size1);
        if (size2 > 0)
            arraycopy_1(i, 0, o, size1, size2);
    };
    IntDeque.prototype.addAll_ampky3$ = function (items) {
        var tmp$;
        this.resizeIfRequiredFor_spk7l6$_0(count(items));
        tmp$ = items.iterator();
        while (tmp$.hasNext()) {
            var i = tmp$.next();
            this.addLast_za3lpa$(i);
        }
    };
    IntDeque.prototype.addFirst_za3lpa$ = function (item) {
        this.resizeIfRequiredFor_spk7l6$_0(1);
        this._start_ezstq4$_0 = umod(this._start_ezstq4$_0 - 1 | 0, this.capacity_mktrrh$_0);
        this._size_opro19$_0 = this._size_opro19$_0 + 1 | 0;
        this.data_wxyo2l$_0[this._start_ezstq4$_0] = item;
    };
    IntDeque.prototype.addLast_za3lpa$ = function (item) {
        this.resizeIfRequiredFor_spk7l6$_0(1);
        this.data_wxyo2l$_0[umod(this._start_ezstq4$_0 + this.size | 0, this.capacity_mktrrh$_0)] = item;
        this._size_opro19$_0 = this._size_opro19$_0 + 1 | 0;
    };
    IntDeque.prototype.removeFirst = function () {
        if (this._size_opro19$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.first;
        this._start_ezstq4$_0 = umod(this._start_ezstq4$_0 + 1 | 0, this.capacity_mktrrh$_0);
        this._size_opro19$_0 = this._size_opro19$_0 - 1 | 0;
        return $receiver;
    };
    IntDeque.prototype.removeLast = function () {
        if (this._size_opro19$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.last;
        this._size_opro19$_0 = this._size_opro19$_0 - 1 | 0;
        return $receiver;
    };
    IntDeque.prototype.removeAt_za3lpa$ = function (index) {
        var tmp$;
        if (index < 0 || index >= this.size)
            throw IndexOutOfBoundsException_init();
        if (index === 0)
            return this.removeFirst();
        if (index === (this.size - 1 | 0))
            return this.removeLast();
        var old = this.get_za3lpa$(index);
        if (index < (this.size / 2 | 0)) {
            for (var n = index; n >= 1; n--)
                this.set_vux9f0$(n, this.get_za3lpa$(n - 1 | 0));
            this._start_ezstq4$_0 = umod(this._start_ezstq4$_0 + 1 | 0, this.capacity_mktrrh$_0);
        } else {
            tmp$ = this.size - 1 | 0;
            for (var n_0 = index; n_0 < tmp$; n_0++)
                this.set_vux9f0$(n_0, this.get_za3lpa$(n_0 + 1 | 0));
        }
        this._size_opro19$_0 = this._size_opro19$_0 - 1 | 0;
        return old;
    };
    IntDeque.prototype.add_11rb$ = function (element) {
        this.addLast_za3lpa$(element);
        return true;
    };
    IntDeque.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        this.addAll_ampky3$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
        return true;
    };
    IntDeque.prototype.clear = function () {
        this._size_opro19$_0 = 0;
    };
    IntDeque.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_za3lpa$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    IntDeque.prototype.removeAll_brywnq$ = function (elements) {
        return this._removeRetainAll_kor27k$_0(elements, false);
    };
    IntDeque.prototype.retainAll_brywnq$ = function (elements) {
        return this._removeRetainAll_kor27k$_0(elements, true);
    };
    IntDeque.prototype._removeRetainAll_kor27k$_0 = function (elements, retain) {
        var tmp$, tmp$_0;
        var eset = toSet(elements);
        var temp = this.data_wxyo2l$_0.slice();
        var tsize = 0;
        var osize = this.size;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            var c = this.get_za3lpa$(n);
            if (eset.contains_11rb$(c) === retain) {
                temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
            }
        }
        this.data_wxyo2l$_0 = temp;
        this._start_ezstq4$_0 = 0;
        this._size_opro19$_0 = tsize;
        return tsize !== osize;
    };
    Object.defineProperty(IntDeque.prototype, 'first', {
        get: function () {
            return this.data_wxyo2l$_0[this._start_ezstq4$_0];
        }
    });
    Object.defineProperty(IntDeque.prototype, 'last', {
        get: function () {
            return this.data_wxyo2l$_0[this.internalIndex_n6ugxm$_0(this.size - 1 | 0)];
        }
    });
    IntDeque.prototype.internalIndex_n6ugxm$_0 = function (index) {
        return umod(this._start_ezstq4$_0 + index | 0, this.capacity_mktrrh$_0);
    };
    IntDeque.prototype.set_vux9f0$ = function (index, value) {
        this.data_wxyo2l$_0[this.internalIndex_n6ugxm$_0(index)] = value;
    };
    IntDeque.prototype.get_za3lpa$ = function (index) {
        return this.data_wxyo2l$_0[this.internalIndex_n6ugxm$_0(index)];
    };
    IntDeque.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_za3lpa$(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    IntDeque.prototype.indexOf_za3lpa$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) === element)
                return n;
        return -1;
    };
    IntDeque.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
        var tmp$_0;
        tmp$_0 = elements.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(to(item, 0));
        }
        var emap = toLinkedMap(destination);
        tmp$ = this.size;
        for (var it = 0; it < tmp$; it++) {
            var e = this.get_za3lpa$(it);
            var tmp$_1;
            if ((Kotlin.isType(tmp$_1 = emap, Map_0) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
                emap.put_xwzc9p$(e, 1);
            }
        }
        var $receiver = emap.values;
        var all$result;
        all$break: do {
            var tmp$_2;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$_2 = $receiver.iterator();
            while (tmp$_2.hasNext()) {
                var element = tmp$_2.next();
                if (!(element === 1)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };

    function IntDeque$iterator$ObjectLiteral(closure$that, this$IntDeque) {
        this.closure$that = closure$that;
        this.this$IntDeque = this$IntDeque;
        this.index = 0;
    }

    IntDeque$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.closure$that.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
    };
    IntDeque$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.index < this.this$IntDeque.size;
    };
    IntDeque$iterator$ObjectLiteral.prototype.remove = function () {
        this.this$IntDeque;
        this.this$IntDeque.removeAt_za3lpa$((this.index = this.index - 1 | 0, this.index));
    };
    IntDeque$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    IntDeque.prototype.iterator = function () {
        var that = this;
        return new IntDeque$iterator$ObjectLiteral(that, this);
    };
    IntDeque.prototype.hashCode = function () {
        var size = this.size;
        var result = 1;
        for (var n = 0; n < size; n++) {
            var tmp$ = 31 * result | 0;
            var $receiver = this.get_za3lpa$(n);
            var tmp$_0;
            result = tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        }
        return result;
    };
    IntDeque.prototype.equals = function (other) {
        var tmp$;
        if (!Kotlin.isType(other, IntDeque))
            return false;
        if (other.size !== this.size)
            return false;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) !== other.get_za3lpa$(n))
                return false;
        return true;
    };
    IntDeque.prototype.toString = function () {
        var tmp$;
        var sb = StringBuilder_init_0();
        sb.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            sb.append_s8jyv4$(this.get_za3lpa$(n));
            if (n !== (this.size - 1 | 0))
                sb.append_gw00v9$(', ');
        }
        sb.append_s8itvh$(93);
        return sb.toString();
    };
    IntDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntDeque',
        interfaces: [MutableCollection]
    };

    function DoubleDeque() {
        this._start_3teynm$_0 = 0;
        this._size_4gd02r$_0 = 0;
        var tmp$;
        this.data_ra8ot5$_0 = Kotlin.isDoubleArray(tmp$ = new Float64Array(16)) ? tmp$ : throwCCE();
    }

    Object.defineProperty(DoubleDeque.prototype, 'capacity_wo86qx$_0', {
        get: function () {
            return this.data_ra8ot5$_0.length;
        }
    });
    Object.defineProperty(DoubleDeque.prototype, 'size', {
        get: function () {
            return this._size_4gd02r$_0;
        }
    });
    DoubleDeque.prototype.isEmpty = function () {
        return this.size === 0;
    };
    DoubleDeque.prototype.resizeIfRequiredFor_wnkq44$_0 = function (count) {
        var tmp$;
        if ((this.size + count | 0) > this.capacity_wo86qx$_0) {
            var i = this.data_ra8ot5$_0;
            var istart = this._start_3teynm$_0;
            var o = Kotlin.isDoubleArray(tmp$ = new Float64Array(this.data_ra8ot5$_0.length * 2 | 0)) ? tmp$ : throwCCE();
            this.copyCyclic_5n81t5$_0(i, istart, o, this._size_4gd02r$_0);
            this.data_ra8ot5$_0 = o;
            this._start_3teynm$_0 = 0;
        }
    };
    DoubleDeque.prototype.copyCyclic_5n81t5$_0 = function (i, istart, o, count) {
        var a = i.length - istart | 0;
        var size1 = Math_0.min(a, count);
        var size2 = count - size1 | 0;
        arraycopy_3(i, istart, o, 0, size1);
        if (size2 > 0)
            arraycopy_3(i, 0, o, size1, size2);
    };
    DoubleDeque.prototype.addAll_layyx3$ = function (items) {
        var tmp$;
        this.resizeIfRequiredFor_wnkq44$_0(count(items));
        tmp$ = items.iterator();
        while (tmp$.hasNext()) {
            var i = tmp$.next();
            this.addLast_14dthe$(i);
        }
    };
    DoubleDeque.prototype.addFirst_14dthe$ = function (item) {
        this.resizeIfRequiredFor_wnkq44$_0(1);
        this._start_3teynm$_0 = umod(this._start_3teynm$_0 - 1 | 0, this.capacity_wo86qx$_0);
        this._size_4gd02r$_0 = this._size_4gd02r$_0 + 1 | 0;
        this.data_ra8ot5$_0[this._start_3teynm$_0] = item;
    };
    DoubleDeque.prototype.addLast_14dthe$ = function (item) {
        this.resizeIfRequiredFor_wnkq44$_0(1);
        this.data_ra8ot5$_0[umod(this._start_3teynm$_0 + this.size | 0, this.capacity_wo86qx$_0)] = item;
        this._size_4gd02r$_0 = this._size_4gd02r$_0 + 1 | 0;
    };
    DoubleDeque.prototype.removeFirst = function () {
        if (this._size_4gd02r$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.first;
        this._start_3teynm$_0 = umod(this._start_3teynm$_0 + 1 | 0, this.capacity_wo86qx$_0);
        this._size_4gd02r$_0 = this._size_4gd02r$_0 - 1 | 0;
        return $receiver;
    };
    DoubleDeque.prototype.removeLast = function () {
        if (this._size_4gd02r$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.last;
        this._size_4gd02r$_0 = this._size_4gd02r$_0 - 1 | 0;
        return $receiver;
    };
    DoubleDeque.prototype.removeAt_za3lpa$ = function (index) {
        var tmp$;
        if (index < 0 || index >= this.size)
            throw IndexOutOfBoundsException_init();
        if (index === 0)
            return this.removeFirst();
        if (index === (this.size - 1 | 0))
            return this.removeLast();
        var old = this.get_za3lpa$(index);
        if (index < (this.size / 2 | 0)) {
            for (var n = index; n >= 1; n--)
                this.set_5wr77w$(n, this.get_za3lpa$(n - 1 | 0));
            this._start_3teynm$_0 = umod(this._start_3teynm$_0 + 1 | 0, this.capacity_wo86qx$_0);
        } else {
            tmp$ = this.size - 1 | 0;
            for (var n_0 = index; n_0 < tmp$; n_0++)
                this.set_5wr77w$(n_0, this.get_za3lpa$(n_0 + 1 | 0));
        }
        this._size_4gd02r$_0 = this._size_4gd02r$_0 - 1 | 0;
        return old;
    };
    DoubleDeque.prototype.add_11rb$ = function (element) {
        this.addLast_14dthe$(element);
        return true;
    };
    DoubleDeque.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        this.addAll_layyx3$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
        return true;
    };
    DoubleDeque.prototype.clear = function () {
        this._size_4gd02r$_0 = 0;
    };
    DoubleDeque.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_14dthe$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    DoubleDeque.prototype.removeAll_brywnq$ = function (elements) {
        return this._removeRetainAll_j6faek$_0(elements, false);
    };
    DoubleDeque.prototype.retainAll_brywnq$ = function (elements) {
        return this._removeRetainAll_j6faek$_0(elements, true);
    };
    DoubleDeque.prototype._removeRetainAll_j6faek$_0 = function (elements, retain) {
        var tmp$, tmp$_0;
        var eset = toSet(elements);
        var temp = this.data_ra8ot5$_0.slice();
        var tsize = 0;
        var osize = this.size;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            var c = this.get_za3lpa$(n);
            if (eset.contains_11rb$(c) === retain) {
                temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
            }
        }
        this.data_ra8ot5$_0 = temp;
        this._start_3teynm$_0 = 0;
        this._size_4gd02r$_0 = tsize;
        return tsize !== osize;
    };
    Object.defineProperty(DoubleDeque.prototype, 'first', {
        get: function () {
            return this.data_ra8ot5$_0[this._start_3teynm$_0];
        }
    });
    Object.defineProperty(DoubleDeque.prototype, 'last', {
        get: function () {
            return this.data_ra8ot5$_0[this.internalIndex_1rw06o$_0(this.size - 1 | 0)];
        }
    });
    DoubleDeque.prototype.internalIndex_1rw06o$_0 = function (index) {
        return umod(this._start_3teynm$_0 + index | 0, this.capacity_wo86qx$_0);
    };
    DoubleDeque.prototype.set_5wr77w$ = function (index, value) {
        this.data_ra8ot5$_0[this.internalIndex_1rw06o$_0(index)] = value;
    };
    DoubleDeque.prototype.get_za3lpa$ = function (index) {
        return this.data_ra8ot5$_0[this.internalIndex_1rw06o$_0(index)];
    };
    DoubleDeque.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_za3lpa$(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    DoubleDeque.prototype.indexOf_14dthe$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) === element)
                return n;
        return -1;
    };
    DoubleDeque.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
        var tmp$_0;
        tmp$_0 = elements.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(to(item, 0));
        }
        var emap = toLinkedMap(destination);
        tmp$ = this.size;
        for (var it = 0; it < tmp$; it++) {
            var e = this.get_za3lpa$(it);
            var tmp$_1;
            if ((Kotlin.isType(tmp$_1 = emap, Map_0) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
                emap.put_xwzc9p$(e, 1);
            }
        }
        var $receiver = emap.values;
        var all$result;
        all$break: do {
            var tmp$_2;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$_2 = $receiver.iterator();
            while (tmp$_2.hasNext()) {
                var element = tmp$_2.next();
                if (!(element === 1)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };

    function DoubleDeque$iterator$ObjectLiteral(closure$that, this$DoubleDeque) {
        this.closure$that = closure$that;
        this.this$DoubleDeque = this$DoubleDeque;
        this.index = 0;
    }

    DoubleDeque$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.closure$that.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
    };
    DoubleDeque$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.index < this.this$DoubleDeque.size;
    };
    DoubleDeque$iterator$ObjectLiteral.prototype.remove = function () {
        this.this$DoubleDeque;
        this.this$DoubleDeque.removeAt_za3lpa$((this.index = this.index - 1 | 0, this.index));
    };
    DoubleDeque$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    DoubleDeque.prototype.iterator = function () {
        var that = this;
        return new DoubleDeque$iterator$ObjectLiteral(that, this);
    };
    DoubleDeque.prototype.hashCode = function () {
        var size = this.size;
        var result = 1;
        for (var n = 0; n < size; n++) {
            var tmp$ = 31 * result | 0;
            var $receiver = this.get_za3lpa$(n);
            var tmp$_0;
            result = tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        }
        return result;
    };
    DoubleDeque.prototype.equals = function (other) {
        var tmp$;
        if (!Kotlin.isType(other, DoubleDeque))
            return false;
        if (other.size !== this.size)
            return false;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) !== other.get_za3lpa$(n))
                return false;
        return true;
    };
    DoubleDeque.prototype.toString = function () {
        var tmp$;
        var sb = StringBuilder_init_0();
        sb.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            sb.append_s8jyv4$(this.get_za3lpa$(n));
            if (n !== (this.size - 1 | 0))
                sb.append_gw00v9$(', ');
        }
        sb.append_s8itvh$(93);
        return sb.toString();
    };
    DoubleDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'DoubleDeque',
        interfaces: [MutableCollection]
    };

    function FloatDeque() {
        this._start_ew7qyx$_0 = 0;
        this._size_yush0m$_0 = 0;
        var tmp$;
        this.data_sjw3ao$_0 = Kotlin.isFloatArray(tmp$ = new Float32Array(16)) ? tmp$ : throwCCE();
    }

    Object.defineProperty(FloatDeque.prototype, 'capacity_nrrs8w$_0', {
        get: function () {
            return this.data_sjw3ao$_0.length;
        }
    });
    Object.defineProperty(FloatDeque.prototype, 'size', {
        get: function () {
            return this._size_yush0m$_0;
        }
    });
    FloatDeque.prototype.isEmpty = function () {
        return this.size === 0;
    };
    FloatDeque.prototype.resizeIfRequiredFor_1uepdp$_0 = function (count) {
        var tmp$;
        if ((this.size + count | 0) > this.capacity_nrrs8w$_0) {
            var i = this.data_sjw3ao$_0;
            var istart = this._start_ew7qyx$_0;
            var o = Kotlin.isFloatArray(tmp$ = new Float32Array(this.data_sjw3ao$_0.length * 2 | 0)) ? tmp$ : throwCCE();
            this.copyCyclic_kzgri8$_0(i, istart, o, this._size_yush0m$_0);
            this.data_sjw3ao$_0 = o;
            this._start_ew7qyx$_0 = 0;
        }
    };
    FloatDeque.prototype.copyCyclic_kzgri8$_0 = function (i, istart, o, count) {
        var a = i.length - istart | 0;
        var size1 = Math_0.min(a, count);
        var size2 = count - size1 | 0;
        arraycopy_2(i, istart, o, 0, size1);
        if (size2 > 0)
            arraycopy_2(i, 0, o, size1, size2);
    };
    FloatDeque.prototype.addAll_ar0w2w$ = function (items) {
        var tmp$;
        this.resizeIfRequiredFor_1uepdp$_0(count(items));
        tmp$ = items.iterator();
        while (tmp$.hasNext()) {
            var i = tmp$.next();
            this.addLast_mx4ult$(i);
        }
    };
    FloatDeque.prototype.addFirst_mx4ult$ = function (item) {
        this.resizeIfRequiredFor_1uepdp$_0(1);
        this._start_ew7qyx$_0 = umod(this._start_ew7qyx$_0 - 1 | 0, this.capacity_nrrs8w$_0);
        this._size_yush0m$_0 = this._size_yush0m$_0 + 1 | 0;
        this.data_sjw3ao$_0[this._start_ew7qyx$_0] = item;
    };
    FloatDeque.prototype.addLast_mx4ult$ = function (item) {
        this.resizeIfRequiredFor_1uepdp$_0(1);
        this.data_sjw3ao$_0[umod(this._start_ew7qyx$_0 + this.size | 0, this.capacity_nrrs8w$_0)] = item;
        this._size_yush0m$_0 = this._size_yush0m$_0 + 1 | 0;
    };
    FloatDeque.prototype.removeFirst = function () {
        if (this._size_yush0m$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.first;
        this._start_ew7qyx$_0 = umod(this._start_ew7qyx$_0 + 1 | 0, this.capacity_nrrs8w$_0);
        this._size_yush0m$_0 = this._size_yush0m$_0 - 1 | 0;
        return $receiver;
    };
    FloatDeque.prototype.removeLast = function () {
        if (this._size_yush0m$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.last;
        this._size_yush0m$_0 = this._size_yush0m$_0 - 1 | 0;
        return $receiver;
    };
    FloatDeque.prototype.removeAt_za3lpa$ = function (index) {
        var tmp$;
        if (index < 0 || index >= this.size)
            throw IndexOutOfBoundsException_init();
        if (index === 0)
            return this.removeFirst();
        if (index === (this.size - 1 | 0))
            return this.removeLast();
        var old = this.get_za3lpa$(index);
        if (index < (this.size / 2 | 0)) {
            for (var n = index; n >= 1; n--)
                this.set_24o109$(n, this.get_za3lpa$(n - 1 | 0));
            this._start_ew7qyx$_0 = umod(this._start_ew7qyx$_0 + 1 | 0, this.capacity_nrrs8w$_0);
        } else {
            tmp$ = this.size - 1 | 0;
            for (var n_0 = index; n_0 < tmp$; n_0++)
                this.set_24o109$(n_0, this.get_za3lpa$(n_0 + 1 | 0));
        }
        this._size_yush0m$_0 = this._size_yush0m$_0 - 1 | 0;
        return old;
    };
    FloatDeque.prototype.add_11rb$ = function (element) {
        this.addLast_mx4ult$(element);
        return true;
    };
    FloatDeque.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        this.addAll_ar0w2w$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
        return true;
    };
    FloatDeque.prototype.clear = function () {
        this._size_yush0m$_0 = 0;
    };
    FloatDeque.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_mx4ult$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    FloatDeque.prototype.removeAll_brywnq$ = function (elements) {
        return this._removeRetainAll_1usdme$_0(elements, false);
    };
    FloatDeque.prototype.retainAll_brywnq$ = function (elements) {
        return this._removeRetainAll_1usdme$_0(elements, true);
    };
    FloatDeque.prototype._removeRetainAll_1usdme$_0 = function (elements, retain) {
        var tmp$, tmp$_0;
        var eset = toSet(elements);
        var temp = this.data_sjw3ao$_0.slice();
        var tsize = 0;
        var osize = this.size;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            var c = this.get_za3lpa$(n);
            if (eset.contains_11rb$(c) === retain) {
                temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
            }
        }
        this.data_sjw3ao$_0 = temp;
        this._start_ew7qyx$_0 = 0;
        this._size_yush0m$_0 = tsize;
        return tsize !== osize;
    };
    Object.defineProperty(FloatDeque.prototype, 'first', {
        get: function () {
            return this.data_sjw3ao$_0[this._start_ew7qyx$_0];
        }
    });
    Object.defineProperty(FloatDeque.prototype, 'last', {
        get: function () {
            return this.data_sjw3ao$_0[this.internalIndex_eowf4p$_0(this.size - 1 | 0)];
        }
    });
    FloatDeque.prototype.internalIndex_eowf4p$_0 = function (index) {
        return umod(this._start_ew7qyx$_0 + index | 0, this.capacity_nrrs8w$_0);
    };
    FloatDeque.prototype.set_24o109$ = function (index, value) {
        this.data_sjw3ao$_0[this.internalIndex_eowf4p$_0(index)] = value;
    };
    FloatDeque.prototype.get_za3lpa$ = function (index) {
        return this.data_sjw3ao$_0[this.internalIndex_eowf4p$_0(index)];
    };
    FloatDeque.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_za3lpa$(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    FloatDeque.prototype.indexOf_mx4ult$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) === element)
                return n;
        return -1;
    };
    FloatDeque.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
        var tmp$_0;
        tmp$_0 = elements.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(to(item, 0));
        }
        var emap = toLinkedMap(destination);
        tmp$ = this.size;
        for (var it = 0; it < tmp$; it++) {
            var e = this.get_za3lpa$(it);
            var tmp$_1;
            if ((Kotlin.isType(tmp$_1 = emap, Map_0) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
                emap.put_xwzc9p$(e, 1);
            }
        }
        var $receiver = emap.values;
        var all$result;
        all$break: do {
            var tmp$_2;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$_2 = $receiver.iterator();
            while (tmp$_2.hasNext()) {
                var element = tmp$_2.next();
                if (!(element === 1)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };

    function FloatDeque$iterator$ObjectLiteral(closure$that, this$FloatDeque) {
        this.closure$that = closure$that;
        this.this$FloatDeque = this$FloatDeque;
        this.index = 0;
    }

    FloatDeque$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.closure$that.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
    };
    FloatDeque$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.index < this.this$FloatDeque.size;
    };
    FloatDeque$iterator$ObjectLiteral.prototype.remove = function () {
        this.this$FloatDeque;
        this.this$FloatDeque.removeAt_za3lpa$((this.index = this.index - 1 | 0, this.index));
    };
    FloatDeque$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    FloatDeque.prototype.iterator = function () {
        var that = this;
        return new FloatDeque$iterator$ObjectLiteral(that, this);
    };
    FloatDeque.prototype.hashCode = function () {
        var size = this.size;
        var result = 1;
        for (var n = 0; n < size; n++) {
            var tmp$ = 31 * result | 0;
            var $receiver = this.get_za3lpa$(n);
            var tmp$_0;
            result = tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        }
        return result;
    };
    FloatDeque.prototype.equals = function (other) {
        var tmp$;
        if (!Kotlin.isType(other, FloatDeque))
            return false;
        if (other.size !== this.size)
            return false;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) !== other.get_za3lpa$(n))
                return false;
        return true;
    };
    FloatDeque.prototype.toString = function () {
        var tmp$;
        var sb = StringBuilder_init_0();
        sb.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            sb.append_s8jyv4$(this.get_za3lpa$(n));
            if (n !== (this.size - 1 | 0))
                sb.append_gw00v9$(', ');
        }
        sb.append_s8itvh$(93);
        return sb.toString();
    };
    FloatDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatDeque',
        interfaces: [MutableCollection]
    };

    function ByteDeque() {
        this._start_j8k8y1$_0 = 0;
        this._size_gnxmw6$_0 = 0;
        var tmp$;
        this.data_aziqmo$_0 = Kotlin.isByteArray(tmp$ = new Int8Array(16)) ? tmp$ : throwCCE();
    }

    Object.defineProperty(ByteDeque.prototype, 'capacity_6jsdz4$_0', {
        get: function () {
            return this.data_aziqmo$_0.length;
        }
    });
    Object.defineProperty(ByteDeque.prototype, 'size', {
        get: function () {
            return this._size_gnxmw6$_0;
        }
    });
    ByteDeque.prototype.isEmpty = function () {
        return this.size === 0;
    };
    ByteDeque.prototype.resizeIfRequiredFor_lphm9p$_0 = function (count) {
        var tmp$;
        if ((this.size + count | 0) > this.capacity_6jsdz4$_0) {
            var i = this.data_aziqmo$_0;
            var istart = this._start_j8k8y1$_0;
            var o = Kotlin.isByteArray(tmp$ = new Int8Array(this.data_aziqmo$_0.length * 2 | 0)) ? tmp$ : throwCCE();
            this.copyCyclic_t6vynw$_0(i, istart, o, this._size_gnxmw6$_0);
            this.data_aziqmo$_0 = o;
            this._start_j8k8y1$_0 = 0;
        }
    };
    ByteDeque.prototype.copyCyclic_t6vynw$_0 = function (i, istart, o, count) {
        var a = i.length - istart | 0;
        var size1 = Math_0.min(a, count);
        var size2 = count - size1 | 0;
        arraycopy_0(i, istart, o, 0, size1);
        if (size2 > 0)
            arraycopy_0(i, 0, o, size1, size2);
    };
    ByteDeque.prototype.addAll_phvq7k$ = function (items) {
        var tmp$;
        this.resizeIfRequiredFor_lphm9p$_0(count(items));
        tmp$ = items.iterator();
        while (tmp$.hasNext()) {
            var i = tmp$.next();
            this.addLast_s8j3t7$(i);
        }
    };
    ByteDeque.prototype.addFirst_s8j3t7$ = function (item) {
        this.resizeIfRequiredFor_lphm9p$_0(1);
        this._start_j8k8y1$_0 = umod(this._start_j8k8y1$_0 - 1 | 0, this.capacity_6jsdz4$_0);
        this._size_gnxmw6$_0 = this._size_gnxmw6$_0 + 1 | 0;
        this.data_aziqmo$_0[this._start_j8k8y1$_0] = item;
    };
    ByteDeque.prototype.addLast_s8j3t7$ = function (item) {
        this.resizeIfRequiredFor_lphm9p$_0(1);
        this.data_aziqmo$_0[umod(this._start_j8k8y1$_0 + this.size | 0, this.capacity_6jsdz4$_0)] = item;
        this._size_gnxmw6$_0 = this._size_gnxmw6$_0 + 1 | 0;
    };
    ByteDeque.prototype.removeFirst = function () {
        if (this._size_gnxmw6$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.first;
        this._start_j8k8y1$_0 = umod(this._start_j8k8y1$_0 + 1 | 0, this.capacity_6jsdz4$_0);
        this._size_gnxmw6$_0 = this._size_gnxmw6$_0 - 1 | 0;
        return $receiver;
    };
    ByteDeque.prototype.removeLast = function () {
        if (this._size_gnxmw6$_0 <= 0)
            throw IndexOutOfBoundsException_init();
        var $receiver = this.last;
        this._size_gnxmw6$_0 = this._size_gnxmw6$_0 - 1 | 0;
        return $receiver;
    };
    ByteDeque.prototype.removeAt_za3lpa$ = function (index) {
        var tmp$;
        if (index < 0 || index >= this.size)
            throw IndexOutOfBoundsException_init();
        if (index === 0)
            return this.removeFirst();
        if (index === (this.size - 1 | 0))
            return this.removeLast();
        var old = this.get_za3lpa$(index);
        if (index < (this.size / 2 | 0)) {
            for (var n = index; n >= 1; n--)
                this.set_6t1wet$(n, this.get_za3lpa$(n - 1 | 0));
            this._start_j8k8y1$_0 = umod(this._start_j8k8y1$_0 + 1 | 0, this.capacity_6jsdz4$_0);
        } else {
            tmp$ = this.size - 1 | 0;
            for (var n_0 = index; n_0 < tmp$; n_0++)
                this.set_6t1wet$(n_0, this.get_za3lpa$(n_0 + 1 | 0));
        }
        this._size_gnxmw6$_0 = this._size_gnxmw6$_0 - 1 | 0;
        return old;
    };
    ByteDeque.prototype.add_11rb$ = function (element) {
        this.addLast_s8j3t7$(element);
        return true;
    };
    ByteDeque.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        this.addAll_phvq7k$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
        return true;
    };
    ByteDeque.prototype.clear = function () {
        this._size_gnxmw6$_0 = 0;
    };
    ByteDeque.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_s8j3t7$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    ByteDeque.prototype.removeAll_brywnq$ = function (elements) {
        return this._removeRetainAll_bnl2z0$_0(elements, false);
    };
    ByteDeque.prototype.retainAll_brywnq$ = function (elements) {
        return this._removeRetainAll_bnl2z0$_0(elements, true);
    };
    ByteDeque.prototype._removeRetainAll_bnl2z0$_0 = function (elements, retain) {
        var tmp$, tmp$_0;
        var eset = toSet(elements);
        var temp = this.data_aziqmo$_0.slice();
        var tsize = 0;
        var osize = this.size;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            var c = this.get_za3lpa$(n);
            if (eset.contains_11rb$(c) === retain) {
                temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
            }
        }
        this.data_aziqmo$_0 = temp;
        this._start_j8k8y1$_0 = 0;
        this._size_gnxmw6$_0 = tsize;
        return tsize !== osize;
    };
    Object.defineProperty(ByteDeque.prototype, 'first', {
        get: function () {
            return this.data_aziqmo$_0[this._start_j8k8y1$_0];
        }
    });
    Object.defineProperty(ByteDeque.prototype, 'last', {
        get: function () {
            return this.data_aziqmo$_0[this.internalIndex_nbntrb$_0(this.size - 1 | 0)];
        }
    });
    ByteDeque.prototype.internalIndex_nbntrb$_0 = function (index) {
        return umod(this._start_j8k8y1$_0 + index | 0, this.capacity_6jsdz4$_0);
    };
    ByteDeque.prototype.set_6t1wet$ = function (index, value) {
        this.data_aziqmo$_0[this.internalIndex_nbntrb$_0(index)] = value;
    };
    ByteDeque.prototype.get_za3lpa$ = function (index) {
        return this.data_aziqmo$_0[this.internalIndex_nbntrb$_0(index)];
    };
    ByteDeque.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_za3lpa$(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    ByteDeque.prototype.indexOf_s8j3t7$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) === element)
                return n;
        return -1;
    };
    ByteDeque.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
        var tmp$_0;
        tmp$_0 = elements.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(to(item, 0));
        }
        var emap = toLinkedMap(destination);
        tmp$ = this.size;
        for (var it = 0; it < tmp$; it++) {
            var e = this.get_za3lpa$(it);
            var tmp$_1;
            if ((Kotlin.isType(tmp$_1 = emap, Map_0) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
                emap.put_xwzc9p$(e, 1);
            }
        }
        var $receiver = emap.values;
        var all$result;
        all$break: do {
            var tmp$_2;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$_2 = $receiver.iterator();
            while (tmp$_2.hasNext()) {
                var element = tmp$_2.next();
                if (!(element === 1)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };

    function ByteDeque$iterator$ObjectLiteral(closure$that, this$ByteDeque) {
        this.closure$that = closure$that;
        this.this$ByteDeque = this$ByteDeque;
        this.index = 0;
    }

    ByteDeque$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.closure$that.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
    };
    ByteDeque$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.index < this.this$ByteDeque.size;
    };
    ByteDeque$iterator$ObjectLiteral.prototype.remove = function () {
        this.this$ByteDeque;
        this.this$ByteDeque.removeAt_za3lpa$((this.index = this.index - 1 | 0, this.index));
    };
    ByteDeque$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    ByteDeque.prototype.iterator = function () {
        var that = this;
        return new ByteDeque$iterator$ObjectLiteral(that, this);
    };
    ByteDeque.prototype.hashCode = function () {
        var size = this.size;
        var result = 1;
        for (var n = 0; n < size; n++) {
            var tmp$ = 31 * result | 0;
            var $receiver = this.get_za3lpa$(n);
            var tmp$_0;
            result = tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        }
        return result;
    };
    ByteDeque.prototype.equals = function (other) {
        var tmp$;
        if (!Kotlin.isType(other, ByteDeque))
            return false;
        if (other.size !== this.size)
            return false;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (this.get_za3lpa$(n) !== other.get_za3lpa$(n))
                return false;
        return true;
    };
    ByteDeque.prototype.toString = function () {
        var tmp$;
        var sb = StringBuilder_init_0();
        sb.append_s8itvh$(91);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            sb.append_s8jyv4$(this.get_za3lpa$(n));
            if (n !== (this.size - 1 | 0))
                sb.append_gw00v9$(', ');
        }
        sb.append_s8itvh$(93);
        return sb.toString();
    };
    ByteDeque.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteDeque',
        interfaces: [MutableCollection]
    };

    function values($receiver) {
        var tmp$;
        var $receiver_0 = keys($receiver);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$($receiver.get(item));
        }
        return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    }

    function get_keys($receiver) {
        return keys($receiver);
    }

    function get_values($receiver) {
        return values($receiver);
    }

    var fastValueForEachNullable = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastValueForEachNullable_u5k20f$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            callback($receiver.get(v.value));
        }
    });
    var fastForEachNullable = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastForEachNullable_opmjmb$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            var it = v.value;
            callback(it, $receiver.get(it));
        }
    });
    var fastValueForEach = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastValueForEach_z7jycu$', wrapFunction(function () {
        var ensureNotNull = Kotlin.ensureNotNull;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                callback(ensureNotNull($receiver.get(v.value)));
            }
        };
    }));
    var fastForEach = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastForEach_io8r9m$', wrapFunction(function () {
        var ensureNotNull = Kotlin.ensureNotNull;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                var it = v.value;
                callback(it, ensureNotNull($receiver.get(it)));
            }
        };
    }));
    var getNull = defineInlineFunction('kds-root-kds.com.soywiz.kds.getNull_g1cbd3$', function ($receiver, key) {
        return key == null ? null : $receiver.get(key);
    });
    var getOrPut = defineInlineFunction('kds-root-kds.com.soywiz.kds.getOrPut_5kagfs$', function ($receiver, key, callback) {
        var res = $receiver.get(key);
        if (res != null)
            return res;
        var out = callback();
        $receiver.set(key, out);
        return out;
    });

    function values_0($receiver) {
        var tmp$;
        var $receiver_0 = keys_0($receiver);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$($receiver.get(item));
        }
        return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    }

    function get_keys_0($receiver) {
        return keys_0($receiver);
    }

    function get_values_0($receiver) {
        return values_0($receiver);
    }

    var fastValueForEachNullable_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastValueForEachNullable_asdgld$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            callback($receiver.get(v.value));
        }
    });
    var fastForEachNullable_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastForEachNullable_c7a4ed$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            var it = v.value;
            callback(it, $receiver.get(it));
        }
    });
    var fastValueForEach_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastValueForEach_luqefw$', wrapFunction(function () {
        var ensureNotNull = Kotlin.ensureNotNull;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                callback(ensureNotNull($receiver.get(v.value)));
            }
        };
    }));
    var fastForEach_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastForEach_6jlgd4$', wrapFunction(function () {
        var ensureNotNull = Kotlin.ensureNotNull;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                var it = v.value;
                callback(it, ensureNotNull($receiver.get(it)));
            }
        };
    }));
    var getNull_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.getNull_m7nghh$', function ($receiver, key) {
        return key == null ? null : $receiver.get(key);
    });
    var getOrPut_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.getOrPut_1y6b2i$', function ($receiver, key, callback) {
        var res = $receiver.get(key);
        if (res != null)
            return res;
        var out = callback();
        $receiver.set(key, out);
        return out;
    });

    function values_1($receiver) {
        var tmp$;
        var $receiver_0 = keys_1($receiver);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(get_2($receiver, item));
        }
        return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    }

    function get_keys_1($receiver) {
        return keys_1($receiver);
    }

    function get_values_1($receiver) {
        return values_1($receiver);
    }

    var fastValueForEachNullable_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastValueForEachNullable_htrlsd$', wrapFunction(function () {
        var get = _.com.soywiz.kds.get_svge65$;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                callback(get($receiver, v.value));
            }
        };
    }));
    var fastForEachNullable_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastForEachNullable_irl7ur$', wrapFunction(function () {
        var get = _.com.soywiz.kds.get_svge65$;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                var it = v.value;
                callback(it, get($receiver, it));
            }
        };
    }));
    var fastValueForEach_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastValueForEach_q0pqei$', wrapFunction(function () {
        var get = _.com.soywiz.kds.get_svge65$;
        var ensureNotNull = Kotlin.ensureNotNull;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                callback(ensureNotNull(get($receiver, v.value)));
            }
        };
    }));
    var fastForEach_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastForEach_zhf1uu$', wrapFunction(function () {
        var get = _.com.soywiz.kds.get_svge65$;
        var ensureNotNull = Kotlin.ensureNotNull;
        return function ($receiver, callback) {
            var mapIterator = $receiver.keys();
            while (true) {
                var v = mapIterator.next();
                if (v.done)
                    break;
                var it = v.value;
                callback(it, ensureNotNull(get($receiver, it)));
            }
        };
    }));
    var getNull_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.getNull_svge65$', wrapFunction(function () {
        var get = _.com.soywiz.kds.get_svge65$;
        return function ($receiver, key) {
            return key == null ? null : get($receiver, key);
        };
    }));
    var getOrPut_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.getOrPut_m0hlt6$', wrapFunction(function () {
        var get = _.com.soywiz.kds.get_svge65$;
        var set = _.com.soywiz.kds.set_13yjyg$;
        return function ($receiver, key, callback) {
            var res = get($receiver, key);
            if (res != null)
                return res;
            var out = callback();
            set($receiver, key, out);
            return out;
        };
    }));

    function toFast($receiver) {
        var $receiver_0 = FastStringMap_0();
        var tmp$;
        tmp$ = $receiver.keys.iterator();
        while (tmp$.hasNext()) {
            var k = tmp$.next();
            $receiver_0.set(k, ensureNotNull($receiver.get_11rb$(k)));
        }
        return $receiver_0;
    }

    function GenericSubList(base, start, end) {
        this.base = base;
        this.start = start;
        this.end = end;
        var tmp$, tmp$_0, tmp$_1, tmp$_2;
        tmp$ = this.base.size;
        tmp$_0 = this.start;
        if (!(0 <= tmp$_0 && tmp$_0 <= tmp$))
            throw new IndexOutOfBoundsException(this.start.toString());
        tmp$_1 = this.base.size;
        tmp$_2 = this.end;
        if (!(0 <= tmp$_2 && tmp$_2 <= tmp$_1))
            throw new IndexOutOfBoundsException(this.end.toString());
    }

    Object.defineProperty(GenericSubList.prototype, 'size', {
        get: function () {
            return this.end - this.start | 0;
        }
    });
    GenericSubList.prototype.translateIndex_0 = function ($receiver) {
        var tmp$;
        tmp$ = this.size;
        if (!(0 <= $receiver && $receiver < tmp$))
            throw new IndexOutOfBoundsException($receiver.toString());
        return this.start + $receiver | 0;
    };
    GenericSubList.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (equals(this.get_za3lpa$(element_0), element)) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    GenericSubList.prototype.containsAll_brywnq$ = function (elements) {
        var tmp$;
        var elementsSet = toMutableSet(elements);
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            var element = this.get_za3lpa$(n);
            elementsSet.remove_11rb$(element);
        }
        return elementsSet.isEmpty();
    };
    GenericSubList.prototype.get_za3lpa$ = function (index) {
        return this.base.get_za3lpa$(this.translateIndex_0(index));
    };
    GenericSubList.prototype.indexOf_11rb$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++)
            if (equals(this.get_za3lpa$(n), element))
                return n;
        return -1;
    };
    GenericSubList.prototype.lastIndexOf_11rb$ = function (element) {
        for (var n = this.size - 1 | 0; n >= 0; n--)
            if (equals(this.get_za3lpa$(n), element))
                return n;
        return -1;
    };
    GenericSubList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    GenericSubList.prototype.iterator = function () {
        return new GenericListIterator(this);
    };
    GenericSubList.prototype.listIterator = function () {
        return new GenericListIterator(this);
    };
    GenericSubList.prototype.listIterator_za3lpa$ = function (index) {
        return new GenericListIterator(this, index);
    };
    GenericSubList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
        return new GenericSubList(this, fromIndex, toIndex);
    };
    GenericSubList.prototype.toString = function () {
        var $receiver = until(0, this.size);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            destination.add_11rb$(this.get_za3lpa$(item));
        }
        return destination.toString();
    };
    GenericSubList.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'GenericSubList',
        interfaces: [List]
    };

    function GenericListIterator(list, iindex) {
        if (iindex === void 0)
            iindex = 0;
        this.list = list;
        this.iindex = iindex;
        var tmp$, tmp$_0;
        tmp$ = this.list.size;
        tmp$_0 = this.iindex;
        if (!(0 <= tmp$_0 && tmp$_0 < tmp$))
            throw new IndexOutOfBoundsException(this.iindex.toString());
        this.index_0 = this.iindex;
    }

    GenericListIterator.prototype.hasNext = function () {
        return this.index_0 < this.list.size;
    };
    GenericListIterator.prototype.next = function () {
        var tmp$;
        if (!this.hasNext())
            throw NoSuchElementException_init();
        return this.list.get_za3lpa$((tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$));
    };
    GenericListIterator.prototype.hasPrevious = function () {
        return this.index_0 > 0;
    };
    GenericListIterator.prototype.nextIndex = function () {
        return this.index_0;
    };
    GenericListIterator.prototype.previous = function () {
        if (!this.hasPrevious())
            throw NoSuchElementException_init();
        return this.list.get_za3lpa$((this.index_0 = this.index_0 - 1 | 0, this.index_0));
    };
    GenericListIterator.prototype.previousIndex = function () {
        return this.index_0 - 1 | 0;
    };
    GenericListIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'GenericListIterator',
        interfaces: [ListIterator]
    };

    function IndexedTable() {
        this.instances = ArrayList_init();
        this.instanceToIndex_0 = LinkedHashMap_init();
    }

    Object.defineProperty(IndexedTable.prototype, 'size', {
        get: function () {
            return this.instances.size;
        }
    });
    IndexedTable.prototype.add_11rb$ = function (str) {
        this.get_11rb$(str);
    };
    IndexedTable.prototype.get_11rb$ = function (str) {
        var $receiver = this.instanceToIndex_0;
        var tmp$;
        var value = $receiver.get_11rb$(str);
        if (value == null) {
            var $receiver_0 = this.instances.size;
            this.instances.add_11rb$(str);
            var answer = $receiver_0;
            $receiver.put_xwzc9p$(str, answer);
            tmp$ = answer;
        } else {
            tmp$ = value;
        }
        return tmp$;
    };
    IndexedTable.prototype.iterator = function () {
        return this.instances.iterator();
    };
    IndexedTable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IndexedTable',
        interfaces: [Iterable]
    };

    function IntMap(nbits, loadFactor) {
        IntMap$Companion_getInstance();
        this.nbits_0 = nbits;
        this.loadFactor_0 = loadFactor;
        this.capacity_0 = 1 << this.nbits_0;
        this.hasZero = false;
        this.zeroValue_0 = null;
        this.mask_0 = this.capacity_0 - 1 | 0;
        this.stashSize_0 = 1 + ilog2(this.capacity_0) | 0;
        this._keys = new Int32Array(this.capacity_0 + this.stashSize_0 | 0);
        var tmp$;
        this._values_0 = Kotlin.isArray(tmp$ = Kotlin.newArray(this.capacity_0 + this.stashSize_0 | 0, null)) ? tmp$ : throwCCE();
        this.growSize_0 = numberToInt(this.capacity_0 * this.loadFactor_0);
        this.size_odij4y$_0 = 0;
    }

    function IntMap$Companion() {
        IntMap$Companion_instance = this;
        this.EOF = 2147483646;
        this.ZERO_INDEX = 2147483647;
        this.EMPTY = 0;
    }

    IntMap$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var IntMap$Companion_instance = null;

    function IntMap$Companion_getInstance() {
        if (IntMap$Companion_instance === null) {
            new IntMap$Companion();
        }
        return IntMap$Companion_instance;
    }

    Object.defineProperty(IntMap.prototype, 'stashStart_0', {
        get: function () {
            return this._keys.length - this.stashSize_0 | 0;
        }
    });
    Object.defineProperty(IntMap.prototype, 'size', {
        get: function () {
            return this.size_odij4y$_0;
        },
        set: function (size) {
            this.size_odij4y$_0 = size;
        }
    });
    IntMap.prototype.grow_0 = function () {
        var tmp$;
        var new_0 = new IntMap(this.nbits_0 + 3 | 0, this.loadFactor_0);
        tmp$ = this._keys;
        for (var n = 0; n !== tmp$.length; ++n) {
            var k = this._keys[n];
            if (k !== 0)
                new_0.set_wxm5ur$(k, this._values_0[n]);
        }
        this.nbits_0 = new_0.nbits_0;
        this.capacity_0 = new_0.capacity_0;
        this.mask_0 = new_0.mask_0;
        this.stashSize_0 = new_0.stashSize_0;
        this._keys = new_0._keys;
        this._values_0 = new_0._values_0;
        this.growSize_0 = new_0.growSize_0;
    };
    IntMap.prototype.contains_za3lpa$ = function (key) {
        return this._getKeyIndex_0(key) >= 0;
    };
    IntMap.prototype._getKeyIndex_0 = function (key) {
        var tmp$, tmp$_0;
        if (key === 0)
            return this.hasZero ? 2147483647 : -1;
        var index1 = this.hash1_0(key);
        if (this._keys[index1] === key)
            return index1;
        var index2 = this.hash2_0(key);
        if (this._keys[index2] === key)
            return index2;
        var index3 = this.hash3_0(key);
        if (this._keys[index3] === key)
            return index3;
        tmp$ = this.stashStart_0;
        tmp$_0 = this._keys.length;
        for (var n = tmp$; n < tmp$_0; n++)
            if (this._keys[n] === key)
                return n;
        return -1;
    };
    IntMap.prototype.remove_za3lpa$ = function (key) {
        var index = this._getKeyIndex_0(key);
        if (index < 0)
            return false;
        if (index === 2147483647) {
            this.hasZero = false;
            this.zeroValue_0 = null;
        } else {
            this._keys[index] = 0;
        }
        this.size = this.size - 1 | 0;
        return true;
    };
    IntMap.prototype.clear = function () {
        this.hasZero = false;
        this.zeroValue_0 = null;
        fill_0(this._keys, 0);
        fill(this._values_0, null);
        this.size = 0;
    };
    IntMap.prototype.get_za3lpa$ = function (key) {
        var index = this._getKeyIndex_0(key);
        if (index < 0)
            return null;
        if (index === 2147483647)
            return this.zeroValue_0;
        return this._values_0[index];
    };
    IntMap.prototype.setEmptySlot_0 = function (index, key, value) {
        if (this._keys[index] !== 0)
            throw IllegalStateException_init();
        this._keys[index] = key;
        this._values_0[index] = value;
        this.size = this.size + 1 | 0;
        return null;
    };
    IntMap.prototype.set_wxm5ur$ = function (key, value) {
        var tmp$, tmp$_0;
        retry: while (true) {
            var index = this._getKeyIndex_0(key);
            if (index < 0) {
                if (key === 0) {
                    this.hasZero = true;
                    this.zeroValue_0 = value;
                    this.size = this.size + 1 | 0;
                    return null;
                }
                if (this.size >= this.growSize_0)
                    this.grow_0();
                var index1 = this.hash1_0(key);
                if (this._keys[index1] === 0)
                    return this.setEmptySlot_0(index1, key, value);
                var index2 = this.hash2_0(key);
                if (this._keys[index2] === 0)
                    return this.setEmptySlot_0(index2, key, value);
                var index3 = this.hash3_0(key);
                if (this._keys[index3] === 0)
                    return this.setEmptySlot_0(index3, key, value);
                tmp$ = this.stashStart_0;
                tmp$_0 = this._keys.length;
                for (var n = tmp$; n < tmp$_0; n++)
                    if (this._keys[n] === 0)
                        return this.setEmptySlot_0(n, key, value);
                this.grow_0();
                continue retry;
            } else if (index === 2147483647) {
                var $receiver = this.zeroValue_0;
                this.zeroValue_0 = value;
                return $receiver;
            } else {
                var $receiver_0 = this._values_0[index];
                this._values_0[index] = value;
                return $receiver_0;
            }
        }
    };
    IntMap.prototype.getOrPut_ea1e85$ = function (key, callback) {
        var res = this.get_za3lpa$(key);
        if (res == null)
            this.set_wxm5ur$(key, callback());
        return ensureNotNull(this.get_za3lpa$(key));
    };
    IntMap.prototype.hash1_0 = function (key) {
        return key & this.mask_0;
    };
    IntMap.prototype.hash2_0 = function (key) {
        return Kotlin.imul(key, -306674912) & this.mask_0;
    };
    IntMap.prototype.hash3_0 = function (key) {
        return Kotlin.imul(key, -1262997959) & this.mask_0;
    };
    IntMap.prototype.removeRange_vux9f0$ = function (src, dst) {
        var tmp$;
        if (src <= 0 && 0 <= dst && this.hasZero) {
            this.size = this.size - 1 | 0;
            this.hasZero = false;
            this.zeroValue_0 = null;
        }
        tmp$ = this._keys;
        for (var n = 0; n !== tmp$.length; ++n) {
            var key = this._keys[n];
            if (key !== 0 && (src <= key && key <= dst)) {
                this._keys[n] = 0;
                this._values_0[n] = null;
                this.size = this.size - 1 | 0;
            }
        }
    };

    function IntMap$Entry(key, value) {
        this.key = key;
        this.value = value;
    }

    IntMap$Entry.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Entry',
        interfaces: []
    };
    IntMap$Entry.prototype.component1 = function () {
        return this.key;
    };
    IntMap$Entry.prototype.component2 = function () {
        return this.value;
    };
    IntMap$Entry.prototype.copy_wxm5ur$ = function (key, value) {
        return new IntMap$Entry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
    };
    IntMap$Entry.prototype.toString = function () {
        return 'Entry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
    };
    IntMap$Entry.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.key) | 0;
        result = result * 31 + Kotlin.hashCode(this.value) | 0;
        return result;
    };
    IntMap$Entry.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
    };
    Object.defineProperty(IntMap.prototype, 'keys', {
        get: function () {
            return new IntMap$KeyIterable(this);
        }
    });
    Object.defineProperty(IntMap.prototype, 'values', {
        get: function () {
            return new IntMap$ValueIterable(this);
        }
    });
    Object.defineProperty(IntMap.prototype, 'entries', {
        get: function () {
            return new IntMap$EntryIterable(this);
        }
    });
    Object.defineProperty(IntMap.prototype, 'pooledKeys', {
        get: function () {
            return new IntMap$KeyIterable(this);
        }
    });
    Object.defineProperty(IntMap.prototype, 'pooledValues', {
        get: function () {
            return new IntMap$ValueIterable(this);
        }
    });
    Object.defineProperty(IntMap.prototype, 'pooledEntries', {
        get: function () {
            return new IntMap$EntryIterable(this);
        }
    });

    function IntMap$KeyIterable($outer) {
        this.$outer = $outer;
    }

    IntMap$KeyIterable.prototype.iterator = function () {
        return new IntMap$KeyIterator(this.$outer);
    };
    IntMap$KeyIterable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'KeyIterable',
        interfaces: [Iterable]
    };

    function IntMap$ValueIterable($outer) {
        this.$outer = $outer;
    }

    IntMap$ValueIterable.prototype.iterator = function () {
        return new IntMap$ValueIterator(this.$outer);
    };
    IntMap$ValueIterable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ValueIterable',
        interfaces: []
    };

    function IntMap$EntryIterable($outer) {
        this.$outer = $outer;
    }

    IntMap$EntryIterable.prototype.iterator = function () {
        return new IntMap$EntryIterator(this.$outer);
    };
    IntMap$EntryIterable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'EntryIterable',
        interfaces: []
    };

    function IntMap$KeyIterator($outer, it) {
        this.$outer = $outer;
        if (it === void 0)
            it = new IntMap$Iterator(this.$outer);
        this.it_0 = it;
    }

    IntMap$KeyIterator.prototype.hasNext = function () {
        return this.it_0.hasNext();
    };
    IntMap$KeyIterator.prototype.next = function () {
        return this.it_0.nextKey();
    };
    IntMap$KeyIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'KeyIterator',
        interfaces: [Iterator]
    };

    function IntMap$ValueIterator($outer, it) {
        this.$outer = $outer;
        if (it === void 0)
            it = new IntMap$Iterator(this.$outer);
        this.it_0 = it;
    }

    IntMap$ValueIterator.prototype.hasNext = function () {
        return this.it_0.hasNext();
    };
    IntMap$ValueIterator.prototype.next = function () {
        return this.it_0.nextValue();
    };
    IntMap$ValueIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ValueIterator',
        interfaces: []
    };

    function IntMap$EntryIterator($outer, it) {
        this.$outer = $outer;
        if (it === void 0)
            it = new IntMap$Iterator(this.$outer);
        this.it_0 = it;
    }

    IntMap$EntryIterator.prototype.hasNext = function () {
        return this.it_0.hasNext();
    };
    IntMap$EntryIterator.prototype.next = function () {
        return this.it_0.nextEntry().copy_wxm5ur$();
    };
    IntMap$EntryIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'EntryIterator',
        interfaces: []
    };

    function IntMap$Iterator($outer) {
        this.$outer = $outer;
        this.index_0 = this.$outer.hasZero ? 2147483647 : this.nextNonEmptyIndex_0(this.$outer._keys, 0);
        this.entry_0 = new IntMap$Entry(0, null);
    }

    IntMap$Iterator.prototype.hasNext = function () {
        return this.index_0 !== 2147483646;
    };
    IntMap$Iterator.prototype.nextEntry = function () {
        var $receiver = this.currentEntry_0();
        this.next_0();
        return $receiver;
    };
    IntMap$Iterator.prototype.nextKey = function () {
        var $receiver = this.currentKey_0();
        this.next_0();
        return $receiver;
    };
    IntMap$Iterator.prototype.nextValue = function () {
        var $receiver = this.currentValue_0();
        this.next_0();
        return $receiver;
    };
    IntMap$Iterator.prototype.currentEntry_0 = function () {
        this.entry_0.key = this.currentKey_0();
        this.entry_0.value = this.currentValue_0();
        return this.entry_0;
    };
    IntMap$Iterator.prototype.currentKey_0 = function () {
        switch (this.index_0) {
            case 2147483647:
            case 2147483646:
                return 0;
            default:
                return this.$outer._keys[this.index_0];
        }
    };
    IntMap$Iterator.prototype.currentValue_0 = function () {
        switch (this.index_0) {
            case 2147483647:
                return this.$outer.zeroValue_0;
            case 2147483646:
                return null;
            default:
                return this.$outer._values_0[this.index_0];
        }
    };
    IntMap$Iterator.prototype.nextNonEmptyIndex_0 = function (keys, offset) {
        for (var n = offset; n < keys.length; n++)
            if (keys[n] !== 0)
                return n;
        return 2147483646;
    };
    IntMap$Iterator.prototype.next_0 = function () {
        if (this.index_0 !== 2147483646)
            this.index_0 = this.nextNonEmptyIndex_0(this.$outer._keys, this.index_0 === 2147483647 ? 0 : this.index_0 + 1 | 0);
    };
    IntMap$Iterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Iterator',
        interfaces: []
    };
    IntMap.prototype.nextNonEmptyIndex_u4kcgn$ = function (keys, offset) {
        for (var n = offset; n < keys.length; n++)
            if (keys[n] !== 0)
                return n;
        return 2147483646;
    };
    IntMap.prototype.fastKeyForEach_b4k9x1$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntMap.fastKeyForEach_b4k9x1$', function (callback) {
        var tmp$;
        var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = this._keys[index];
                    break;
            }
            callback(tmp$);
            index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntMap.prototype.fastValueForEachNullable_qlkmfe$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntMap.fastValueForEachNullable_qlkmfe$', function (callback) {
        var tmp$;
        var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = this._keys[index];
                    break;
            }
            callback(this.get_za3lpa$(tmp$));
            index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntMap.prototype.fastForEachNullable_m6r102$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntMap.fastForEachNullable_m6r102$', function (callback) {
        var tmp$;
        var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = this._keys[index];
                    break;
            }
            var it = tmp$;
            callback(it, this.get_za3lpa$(it));
            index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntMap.prototype.fastValueForEach_qlkmfe$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntMap.fastValueForEach_qlkmfe$', wrapFunction(function () {
        var ensureNotNull = Kotlin.ensureNotNull;
        return function (callback) {
            var tmp$;
            var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
            while (index !== 2147483646) {
                switch (index) {
                    case 2147483647:
                    case 2147483646:
                        tmp$ = 0;
                        break;
                    default:
                        tmp$ = this._keys[index];
                        break;
                }
                callback(ensureNotNull(this.get_za3lpa$(tmp$)));
                index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
            }
        };
    }));
    IntMap.prototype.fastForEach_m6r102$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntMap.fastForEach_m6r102$', wrapFunction(function () {
        var ensureNotNull = Kotlin.ensureNotNull;
        return function (callback) {
            var tmp$;
            var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
            while (index !== 2147483646) {
                switch (index) {
                    case 2147483647:
                    case 2147483646:
                        tmp$ = 0;
                        break;
                    default:
                        tmp$ = this._keys[index];
                        break;
                }
                var it = tmp$;
                callback(it, ensureNotNull(this.get_za3lpa$(it)));
                index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
            }
        };
    }));
    IntMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntMap',
        interfaces: []
    };

    function IntMap_init(loadFactor, $this) {
        if (loadFactor === void 0)
            loadFactor = 0.75;
        $this = $this || Object.create(IntMap.prototype);
        IntMap.call($this, 4, loadFactor);
        return $this;
    }

    function toIntMap($receiver) {
        var tmp$;
        var out = IntMap_init();
        tmp$ = $receiver.entries.iterator();
        while (tmp$.hasNext()) {
            var tmp$_0 = tmp$.next();
            var k = tmp$_0.key;
            var v = tmp$_0.value;
            out.set_wxm5ur$(k, v);
        }
        return out;
    }

    function IntFloatMap() {
        this.i = IntIntMap_init();
    }

    Object.defineProperty(IntFloatMap.prototype, 'size', {
        get: function () {
            return this.i.size;
        }
    });
    IntFloatMap.prototype.clear = function () {
        this.i.clear();
    };
    IntFloatMap.prototype.remove_za3lpa$ = function (key) {
        return this.i.remove_za3lpa$(key);
    };
    Object.defineProperty(IntFloatMap.prototype, 'keys', {
        get: function () {
            return this.i.keys;
        }
    });

    function IntFloatMap$get_IntFloatMap$values$ObjectLiteral(this$IntFloatMap) {
        this.this$IntFloatMap = this$IntFloatMap;
    }

    function IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral(this$IntFloatMap) {
        this.it = this$IntFloatMap.i.values.iterator();
    }

    IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.it.hasNext();
    };
    IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
        var bits = this.it.next();
        return Kotlin.floatFromBits(bits);
    };
    IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: []
    };
    IntFloatMap$get_IntFloatMap$values$ObjectLiteral.prototype.iterator = function () {
        return new IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral(this.this$IntFloatMap);
    };
    IntFloatMap$get_IntFloatMap$values$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: []
    };
    Object.defineProperty(IntFloatMap.prototype, 'values', {
        get: function () {
            return new IntFloatMap$get_IntFloatMap$values$ObjectLiteral(this);
        }
    });

    function IntFloatMap$get_IntFloatMap$entries$ObjectLiteral(this$IntFloatMap) {
        this.this$IntFloatMap = this$IntFloatMap;
    }

    function IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral(this$IntFloatMap) {
        this.it = this$IntFloatMap.i.entries.iterator();
    }

    IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.it.hasNext();
    };
    IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
        var it = this.it.next();
        var tmp$ = it.key;
        var bits = it.value;
        return new IntFloatMap$Entry(tmp$, Kotlin.floatFromBits(bits));
    };
    IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: []
    };
    IntFloatMap$get_IntFloatMap$entries$ObjectLiteral.prototype.iterator = function () {
        return new IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral(this.this$IntFloatMap);
    };
    IntFloatMap$get_IntFloatMap$entries$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: []
    };
    Object.defineProperty(IntFloatMap.prototype, 'entries', {
        get: function () {
            return new IntFloatMap$get_IntFloatMap$entries$ObjectLiteral(this);
        }
    });

    function IntFloatMap$Entry(key, value) {
        this.key = key;
        this.value = value;
    }

    IntFloatMap$Entry.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Entry',
        interfaces: []
    };
    IntFloatMap$Entry.prototype.component1 = function () {
        return this.key;
    };
    IntFloatMap$Entry.prototype.component2 = function () {
        return this.value;
    };
    IntFloatMap$Entry.prototype.copy_24o109$ = function (key, value) {
        return new IntFloatMap$Entry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
    };
    IntFloatMap$Entry.prototype.toString = function () {
        return 'Entry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
    };
    IntFloatMap$Entry.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.key) | 0;
        result = result * 31 + Kotlin.hashCode(this.value) | 0;
        return result;
    };
    IntFloatMap$Entry.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
    };
    IntFloatMap.prototype.contains_za3lpa$ = function (key) {
        return this.i.contains_za3lpa$(key);
    };
    IntFloatMap.prototype.get_za3lpa$ = function (key) {
        var bits = this.i.get_za3lpa$(key);
        return Kotlin.floatFromBits(bits);
    };
    IntFloatMap.prototype.set_24o109$ = function (key, value) {
        var bits = this.i.set_vux9f0$(key, toRawBits(value));
        return Kotlin.floatFromBits(bits);
    };
    IntFloatMap.prototype.fastKeyForEach_b4k9x1$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntFloatMap.fastKeyForEach_b4k9x1$', function (callback) {
        var $this = this.i;
        var tmp$;
        var index = $this.hasZero ? 2147483647 : $this.nextNonEmptyIndex_u4kcgn$($this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = $this._keys[index];
                    break;
            }
            callback(tmp$);
            index = $this.nextNonEmptyIndex_u4kcgn$($this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntFloatMap.prototype.fastValueForEach_d6xl6w$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntFloatMap.fastValueForEach_d6xl6w$', function (callback) {
        var $this = this.i;
        var tmp$;
        var index = $this.hasZero ? 2147483647 : $this.nextNonEmptyIndex_u4kcgn$($this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = $this._keys[index];
                    break;
            }
            callback(this.get_za3lpa$(tmp$));
            index = $this.nextNonEmptyIndex_u4kcgn$($this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntFloatMap.prototype.fastForEach_ra0dy4$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntFloatMap.fastForEach_ra0dy4$', function (callback) {
        var $this = this.i;
        var tmp$;
        var index = $this.hasZero ? 2147483647 : $this.nextNonEmptyIndex_u4kcgn$($this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = $this._keys[index];
                    break;
            }
            var it = tmp$;
            callback(it, this.get_za3lpa$(it));
            index = $this.nextNonEmptyIndex_u4kcgn$($this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntFloatMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntFloatMap',
        interfaces: []
    };

    function IntIntMap(nbits, loadFactor) {
        IntIntMap$Companion_getInstance();
        this.nbits_0 = nbits;
        this.loadFactor_0 = loadFactor;
        this.capacity_0 = 1 << this.nbits_0;
        this.hasZero = false;
        this.zeroValue_0 = 0;
        this.mask_0 = this.capacity_0 - 1 | 0;
        this.stashSize_0 = 1 + ilog2(this.capacity_0) | 0;
        this._keys = new Int32Array(this.capacity_0 + this.stashSize_0 | 0);
        this._values_0 = new Int32Array(this.capacity_0 + this.stashSize_0 | 0);
        this.growSize_0 = numberToInt(this.capacity_0 * this.loadFactor_0);
        this.size_8bfyfx$_0 = 0;
    }

    function IntIntMap$Companion() {
        IntIntMap$Companion_instance = this;
        this.EOF = 2147483646;
        this.ZERO_INDEX = 2147483647;
        this.EMPTY = 0;
    }

    IntIntMap$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var IntIntMap$Companion_instance = null;

    function IntIntMap$Companion_getInstance() {
        if (IntIntMap$Companion_instance === null) {
            new IntIntMap$Companion();
        }
        return IntIntMap$Companion_instance;
    }

    Object.defineProperty(IntIntMap.prototype, 'stashStart_0', {
        get: function () {
            return this._keys.length - this.stashSize_0 | 0;
        }
    });
    Object.defineProperty(IntIntMap.prototype, 'size', {
        get: function () {
            return this.size_8bfyfx$_0;
        },
        set: function (size) {
            this.size_8bfyfx$_0 = size;
        }
    });
    IntIntMap.prototype.grow_0 = function () {
        var tmp$;
        var new_0 = new IntIntMap(this.nbits_0 + 3 | 0, this.loadFactor_0);
        tmp$ = this._keys;
        for (var n = 0; n !== tmp$.length; ++n) {
            var k = this._keys[n];
            if (k !== 0)
                new_0.set_vux9f0$(k, this._values_0[n]);
        }
        this.nbits_0 = new_0.nbits_0;
        this.capacity_0 = new_0.capacity_0;
        this.mask_0 = new_0.mask_0;
        this.stashSize_0 = new_0.stashSize_0;
        this._keys = new_0._keys;
        this._values_0 = new_0._values_0;
        this.growSize_0 = new_0.growSize_0;
    };
    IntIntMap.prototype.contains_za3lpa$ = function (key) {
        return this._getKeyIndex_0(key) >= 0;
    };
    IntIntMap.prototype._getKeyIndex_0 = function (key) {
        var tmp$, tmp$_0;
        if (key === 0)
            return this.hasZero ? 2147483647 : -1;
        var index1 = this.hash1_0(key);
        if (this._keys[index1] === key)
            return index1;
        var index2 = this.hash2_0(key);
        if (this._keys[index2] === key)
            return index2;
        var index3 = this.hash3_0(key);
        if (this._keys[index3] === key)
            return index3;
        tmp$ = this.stashStart_0;
        tmp$_0 = this._keys.length;
        for (var n = tmp$; n < tmp$_0; n++)
            if (this._keys[n] === key)
                return n;
        return -1;
    };
    IntIntMap.prototype.remove_za3lpa$ = function (key) {
        var index = this._getKeyIndex_0(key);
        if (index < 0)
            return false;
        if (index === 2147483647) {
            this.hasZero = false;
            this.zeroValue_0 = 0;
        } else {
            this._keys[index] = 0;
        }
        this.size = this.size - 1 | 0;
        return true;
    };
    IntIntMap.prototype.clear = function () {
        this.hasZero = false;
        this.zeroValue_0 = 0;
        fill_0(this._keys, 0);
        fill_0(this._values_0, 0);
        this.size = 0;
    };
    IntIntMap.prototype.get_za3lpa$ = function (key) {
        var index = this._getKeyIndex_0(key);
        if (index < 0)
            return 0;
        if (index === 2147483647)
            return this.zeroValue_0;
        return this._values_0[index];
    };
    IntIntMap.prototype.setEmptySlot_0 = function (index, key, value) {
        if (this._keys[index] !== 0)
            throw IllegalStateException_init();
        this._keys[index] = key;
        this._values_0[index] = value;
        this.size = this.size + 1 | 0;
        return 0;
    };
    IntIntMap.prototype.set_vux9f0$ = function (key, value) {
        var tmp$, tmp$_0;
        retry: while (true) {
            var index = this._getKeyIndex_0(key);
            if (index < 0) {
                if (key === 0) {
                    this.hasZero = true;
                    this.zeroValue_0 = value;
                    this.size = this.size + 1 | 0;
                    return 0;
                }
                if (this.size >= this.growSize_0)
                    this.grow_0();
                var index1 = this.hash1_0(key);
                if (this._keys[index1] === 0)
                    return this.setEmptySlot_0(index1, key, value);
                var index2 = this.hash2_0(key);
                if (this._keys[index2] === 0)
                    return this.setEmptySlot_0(index2, key, value);
                var index3 = this.hash3_0(key);
                if (this._keys[index3] === 0)
                    return this.setEmptySlot_0(index3, key, value);
                tmp$ = this.stashStart_0;
                tmp$_0 = this._keys.length;
                for (var n = tmp$; n < tmp$_0; n++)
                    if (this._keys[n] === 0)
                        return this.setEmptySlot_0(n, key, value);
                this.grow_0();
                continue retry;
            } else if (index === 2147483647) {
                var $receiver = this.zeroValue_0;
                this.zeroValue_0 = value;
                return $receiver;
            } else {
                var $receiver_0 = this._values_0[index];
                this._values_0[index] = value;
                return $receiver_0;
            }
        }
    };
    IntIntMap.prototype.getOrPut_s8if2w$ = function (key, callback) {
        if (!this.contains_za3lpa$(key))
            this.set_vux9f0$(key, callback());
        return this.get_za3lpa$(key);
    };
    IntIntMap.prototype.hash1_0 = function (key) {
        return key & this.mask_0;
    };
    IntIntMap.prototype.hash2_0 = function (key) {
        return Kotlin.imul(key, -306674912) & this.mask_0;
    };
    IntIntMap.prototype.hash3_0 = function (key) {
        return Kotlin.imul(key, -1262997959) & this.mask_0;
    };

    function IntIntMap$Entry(key, value) {
        this.key = key;
        this.value = value;
    }

    IntIntMap$Entry.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Entry',
        interfaces: []
    };
    IntIntMap$Entry.prototype.component1 = function () {
        return this.key;
    };
    IntIntMap$Entry.prototype.component2 = function () {
        return this.value;
    };
    IntIntMap$Entry.prototype.copy_vux9f0$ = function (key, value) {
        return new IntIntMap$Entry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
    };
    IntIntMap$Entry.prototype.toString = function () {
        return 'Entry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
    };
    IntIntMap$Entry.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.key) | 0;
        result = result * 31 + Kotlin.hashCode(this.value) | 0;
        return result;
    };
    IntIntMap$Entry.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
    };
    Object.defineProperty(IntIntMap.prototype, 'keys', {
        get: function () {
            return new IntIntMap$KeyIterable(this);
        }
    });
    Object.defineProperty(IntIntMap.prototype, 'values', {
        get: function () {
            return new IntIntMap$ValueIterable(this);
        }
    });
    Object.defineProperty(IntIntMap.prototype, 'entries', {
        get: function () {
            return new IntIntMap$EntryIterable(this);
        }
    });
    Object.defineProperty(IntIntMap.prototype, 'pooledKeys', {
        get: function () {
            return new IntIntMap$KeyIterable(this);
        }
    });
    Object.defineProperty(IntIntMap.prototype, 'pooledValues', {
        get: function () {
            return new IntIntMap$ValueIterable(this);
        }
    });
    Object.defineProperty(IntIntMap.prototype, 'pooledEntries', {
        get: function () {
            return new IntIntMap$EntryIterable(this);
        }
    });

    function IntIntMap$KeyIterable($outer) {
        this.$outer = $outer;
    }

    IntIntMap$KeyIterable.prototype.iterator = function () {
        return new IntIntMap$KeyIterator(this.$outer);
    };
    IntIntMap$KeyIterable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'KeyIterable',
        interfaces: []
    };

    function IntIntMap$ValueIterable($outer) {
        this.$outer = $outer;
    }

    IntIntMap$ValueIterable.prototype.iterator = function () {
        return new IntIntMap$ValueIterator(this.$outer);
    };
    IntIntMap$ValueIterable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ValueIterable',
        interfaces: []
    };

    function IntIntMap$EntryIterable($outer) {
        this.$outer = $outer;
    }

    IntIntMap$EntryIterable.prototype.iterator = function () {
        return new IntIntMap$EntryIterator(this.$outer);
    };
    IntIntMap$EntryIterable.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'EntryIterable',
        interfaces: []
    };

    function IntIntMap$KeyIterator($outer, it) {
        this.$outer = $outer;
        if (it === void 0)
            it = new IntIntMap$Iterator(this.$outer);
        this.it_0 = it;
    }

    IntIntMap$KeyIterator.prototype.hasNext = function () {
        return this.it_0.hasNext();
    };
    IntIntMap$KeyIterator.prototype.next = function () {
        return this.it_0.nextKey();
    };
    IntIntMap$KeyIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'KeyIterator',
        interfaces: []
    };

    function IntIntMap$ValueIterator($outer, it) {
        this.$outer = $outer;
        if (it === void 0)
            it = new IntIntMap$Iterator(this.$outer);
        this.it_0 = it;
    }

    IntIntMap$ValueIterator.prototype.hasNext = function () {
        return this.it_0.hasNext();
    };
    IntIntMap$ValueIterator.prototype.next = function () {
        return this.it_0.nextValue();
    };
    IntIntMap$ValueIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ValueIterator',
        interfaces: []
    };

    function IntIntMap$EntryIterator($outer, it) {
        this.$outer = $outer;
        if (it === void 0)
            it = new IntIntMap$Iterator(this.$outer);
        this.it_0 = it;
    }

    IntIntMap$EntryIterator.prototype.hasNext = function () {
        return this.it_0.hasNext();
    };
    IntIntMap$EntryIterator.prototype.next = function () {
        return this.it_0.nextEntry().copy_vux9f0$();
    };
    IntIntMap$EntryIterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'EntryIterator',
        interfaces: []
    };

    function IntIntMap$Iterator($outer) {
        this.$outer = $outer;
        this.index_0 = this.$outer.hasZero ? 2147483647 : this.nextNonEmptyIndex_0(this.$outer._keys, 0);
        this.entry_0 = new IntIntMap$Entry(0, 0);
    }

    IntIntMap$Iterator.prototype.hasNext = function () {
        return this.index_0 !== 2147483646;
    };
    IntIntMap$Iterator.prototype.nextEntry = function () {
        var $receiver = this.currentEntry_0();
        this.next_0();
        return $receiver;
    };
    IntIntMap$Iterator.prototype.nextKey = function () {
        var $receiver = this.currentKey_0();
        this.next_0();
        return $receiver;
    };
    IntIntMap$Iterator.prototype.nextValue = function () {
        var $receiver = this.currentValue_0();
        this.next_0();
        return $receiver;
    };
    IntIntMap$Iterator.prototype.currentEntry_0 = function () {
        this.entry_0.key = this.currentKey_0();
        this.entry_0.value = this.currentValue_0();
        return this.entry_0;
    };
    IntIntMap$Iterator.prototype.currentKey_0 = function () {
        switch (this.index_0) {
            case 2147483647:
            case 2147483646:
                return 0;
            default:
                return this.$outer._keys[this.index_0];
        }
    };
    IntIntMap$Iterator.prototype.currentValue_0 = function () {
        switch (this.index_0) {
            case 2147483647:
                return this.$outer.zeroValue_0;
            case 2147483646:
                return 0;
            default:
                return this.$outer._values_0[this.index_0];
        }
    };
    IntIntMap$Iterator.prototype.nextNonEmptyIndex_0 = function (keys, offset) {
        for (var n = offset; n < keys.length; n++)
            if (keys[n] !== 0)
                return n;
        return 2147483646;
    };
    IntIntMap$Iterator.prototype.next_0 = function () {
        if (this.index_0 !== 2147483646)
            this.index_0 = this.nextNonEmptyIndex_0(this.$outer._keys, this.index_0 === 2147483647 ? 0 : this.index_0 + 1 | 0);
    };
    IntIntMap$Iterator.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Iterator',
        interfaces: []
    };
    IntIntMap.prototype.nextNonEmptyIndex_u4kcgn$ = function (keys, offset) {
        for (var n = offset; n < keys.length; n++)
            if (keys[n] !== 0)
                return n;
        return 2147483646;
    };
    IntIntMap.prototype.fastKeyForEach_b4k9x1$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntIntMap.fastKeyForEach_b4k9x1$', function (callback) {
        var tmp$;
        var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = this._keys[index];
                    break;
            }
            callback(tmp$);
            index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntIntMap.prototype.fastValueForEach_b4k9x1$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntIntMap.fastValueForEach_b4k9x1$', function (callback) {
        var tmp$;
        var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = this._keys[index];
                    break;
            }
            callback(this.get_za3lpa$(tmp$));
            index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntIntMap.prototype.fastForEach_nnebrl$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.IntIntMap.fastForEach_nnebrl$', function (callback) {
        var tmp$;
        var index = this.hasZero ? 2147483647 : this.nextNonEmptyIndex_u4kcgn$(this._keys, 0);
        while (index !== 2147483646) {
            switch (index) {
                case 2147483647:
                case 2147483646:
                    tmp$ = 0;
                    break;
                default:
                    tmp$ = this._keys[index];
                    break;
            }
            var it = tmp$;
            callback(it, this.get_za3lpa$(it));
            index = this.nextNonEmptyIndex_u4kcgn$(this._keys, index === 2147483647 ? 0 : index + 1 | 0);
        }
    });
    IntIntMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntIntMap',
        interfaces: []
    };

    function IntIntMap_init(loadFactor, $this) {
        if (loadFactor === void 0)
            loadFactor = 0.75;
        $this = $this || Object.create(IntIntMap.prototype);
        IntIntMap.call($this, 4, loadFactor);
        return $this;
    }

    function IntSet() {
        this.data_0 = IntMap_init();
    }

    Object.defineProperty(IntSet.prototype, 'size', {
        get: function () {
            return this.data_0.size;
        }
    });
    IntSet.prototype.containsAll_brywnq$ = function (elements) {
        var all$result;
        all$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (!this.data_0.contains_za3lpa$(element)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };
    IntSet.prototype.isEmpty = function () {
        return this.size === 0;
    };

    function IntSet$iterator$ObjectLiteral(closure$iterator) {
        this.closure$iterator = closure$iterator;
    }

    IntSet$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.closure$iterator.hasNext();
    };
    IntSet$iterator$ObjectLiteral.prototype.next = function () {
        return this.closure$iterator.next();
    };
    IntSet$iterator$ObjectLiteral.prototype.remove = function () {
        throw new NotImplementedError_init();
    };
    IntSet$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    IntSet.prototype.iterator = function () {
        var iterator = this.data_0.keys.iterator();
        return new IntSet$iterator$ObjectLiteral(iterator);
    };
    IntSet.prototype.clear = function () {
        this.data_0.clear();
    };
    IntSet.prototype.add_11rb$ = function (element) {
        return this.data_0.set_wxm5ur$(element, Unit) == null;
    };
    IntSet.prototype.addAll_brywnq$ = function (elements) {
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (this.add_11rb$(element)) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    IntSet.prototype.removeAll_brywnq$ = function (elements) {
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (this.remove_11rb$(element)) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    IntSet.prototype.retainAll_brywnq$ = function (elements) {
        var tmp$;
        var oldSize = this.size;
        var other = IntMap_init();
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var it = tmp$.next();
            if (this.contains_11rb$(it))
                other.set_wxm5ur$(it, Unit);
        }
        this.data_0 = other;
        return oldSize === this.size;
    };
    IntSet.prototype.addAll_pmhfmb$ = function (elements) {
        var tmp$;
        for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
            var item = elements[tmp$];
            this.add_11rb$(item);
        }
    };
    IntSet.prototype.addAll_ampky3$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            this.add_11rb$(item);
        }
    };
    IntSet.prototype.contains_11rb$ = function (element) {
        return this.data_0.contains_za3lpa$(element);
    };
    IntSet.prototype.remove_11rb$ = function (element) {
        return this.data_0.remove_za3lpa$(element);
    };
    IntSet.prototype.plusAssign_za3lpa$ = function (value) {
        this.add_11rb$(value);
    };
    IntSet.prototype.minusAssign_za3lpa$ = function (value) {
        this.remove_11rb$(value);
    };
    IntSet.prototype.toString = function () {
        return '[' + joinToString(this.data_0.keys, ', ') + ']';
    };
    IntSet.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntSet',
        interfaces: [MutableSet]
    };

    function intSetOf(values) {
        var $receiver = new IntSet();
        var tmp$;
        for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
            var value = values[tmp$];
            $receiver.add_11rb$(value);
        }
        return $receiver;
    }

    function ListReader(list) {
        this.list = list;
        this.position = 0;
    }

    Object.defineProperty(ListReader.prototype, 'size', {
        get: function () {
            return this.list.size;
        }
    });
    Object.defineProperty(ListReader.prototype, 'eof', {
        get: function () {
            return this.position >= this.list.size;
        }
    });
    Object.defineProperty(ListReader.prototype, 'hasMore', {
        get: function () {
            return this.position < this.list.size;
        }
    });
    ListReader.prototype.peek = function () {
        return this.list.get_za3lpa$(this.position);
    };
    ListReader.prototype.skip_za3lpa$ = function (count) {
        if (count === void 0)
            count = 1;
        this.position = this.position + count | 0;
        return this;
    };
    ListReader.prototype.read = function () {
        var $receiver = this.peek();
        this.skip_za3lpa$(1);
        return $receiver;
    };
    ListReader.prototype.toString = function () {
        return 'ListReader(' + this.list + ')';
    };
    ListReader.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ListReader',
        interfaces: []
    };

    function reader($receiver) {
        return new ListReader($receiver);
    }

    function expect($receiver, value) {
        var v = $receiver.read();
        if (!equals(v, value)) {
            throw IllegalStateException_init_0(("Expecting '" + value + "' but found '" + v + "'").toString());
        }
        return v;
    }

    function dump($receiver) {
        var tmp$;
        println_0('ListReader:');
        tmp$ = $receiver.list.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            println_0(' - ' + item);
        }
    }

    function getFirst($receiver, key) {
        var tmp$;
        return (tmp$ = $receiver.get_11rb$(key)) != null ? firstOrNull(tmp$) : null;
    }

    function getLast($receiver, key) {
        var tmp$;
        return (tmp$ = $receiver.get_11rb$(key)) != null ? lastOrNull(tmp$) : null;
    }

    function flatten($receiver) {
        return toList(flatMapIterable($receiver));
    }

    function flatMapIterable$ObjectLiteral(this$flatMapIterable) {
        this.this$flatMapIterable = this$flatMapIterable;
    }

    flatMapIterable$ObjectLiteral.prototype.iterator = function () {
        return flatMapIterator(this.this$flatMapIterable);
    };
    flatMapIterable$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [Iterable]
    };

    function flatMapIterable($receiver) {
        return new flatMapIterable$ObjectLiteral($receiver);
    }

    function flatMapIterator($receiver) {
        var $receiver_0 = $receiver.entries;
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
            var element = tmp$.next();
            var $receiver_1 = element.value;
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
            var tmp$_0;
            tmp$_0 = $receiver_1.iterator();
            while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                destination_0.add_11rb$(to(element.key, item));
            }
            var list = destination_0;
            addAll(destination, list);
        }
        return destination.iterator();
    }

    function append($receiver, key, value) {
        var tmp$;
        var value_0 = $receiver.get_11rb$(key);
        if (value_0 == null) {
            var answer = ArrayList_init();
            $receiver.put_xwzc9p$(key, answer);
            tmp$ = answer;
        } else {
            tmp$ = value_0;
        }
        ensureNotNull($receiver.get_11rb$(key)).add_11rb$(value);
        return $receiver;
    }

    function replace($receiver, key, value) {
        $receiver.remove_11rb$(key);
        append($receiver, key, value);
        return $receiver;
    }

    function appendAll($receiver, items) {
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var tmp$_0 = items[tmp$];
            var k = tmp$_0.component1()
                , v = tmp$_0.component2();
            append($receiver, k, v);
        }
        return $receiver;
    }

    function replaceAll($receiver, items) {
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var tmp$_0 = items[tmp$];
            var k = tmp$_0.component1()
                , v = tmp$_0.component2();
            replace($receiver, k, v);
        }
        return $receiver;
    }

    function linkedHashMapListOf(items) {
        var $receiver = LinkedHashMap_init();
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var tmp$_0 = items[tmp$];
            var k = tmp$_0.component1()
                , v = tmp$_0.component2();
            append($receiver, k, v);
        }
        return $receiver;
    }

    function LinkedHashMapList(items) {
        var $receiver = LinkedHashMap_init();
        var tmp$;
        tmp$ = items.iterator();
        while (tmp$.hasNext()) {
            var tmp$_0 = tmp$.next();
            var k = tmp$_0.component1()
                , v = tmp$_0.component2();
            append($receiver, k, v);
        }
        return $receiver;
    }

    function LinkedHashMapList_0(items) {
        var $receiver = LinkedHashMap_init();
        var tmp$, tmp$_0;
        tmp$ = items.entries.iterator();
        while (tmp$.hasNext()) {
            var tmp$_1 = tmp$.next();
            var k = tmp$_1.key;
            var values = tmp$_1.value;
            tmp$_0 = values.iterator();
            while (tmp$_0.hasNext()) {
                var v = tmp$_0.next();
                append($receiver, k, v);
            }
        }
        return $receiver;
    }

    function Pool(reset, preallocate, gen) {
        if (reset === void 0)
            reset = Pool_init$lambda;
        if (preallocate === void 0)
            preallocate = 0;
        this.reset_0 = reset;
        this.gen_0 = gen;
        this.items_0 = new Stack();
        this.lastId_0 = 0;
        var tmp$, tmp$_0;
        tmp$ = preallocate;
        for (var n = 0; n < tmp$; n++) {
            this.items_0.push_11rb$(this.gen_0((tmp$_0 = this.lastId_0, this.lastId_0 = tmp$_0 + 1 | 0, tmp$_0)));
        }
    }

    Object.defineProperty(Pool.prototype, 'itemsInPool', {
        get: function () {
            return this.items_0.size;
        }
    });
    Pool.prototype.alloc = function () {
        var tmp$;
        if (!this.items_0.isEmpty())
            return this.items_0.pop();
        else {
            return this.gen_0((tmp$ = this.lastId_0, this.lastId_0 = tmp$ + 1 | 0, tmp$));
        }
    };
    Pool.prototype.free_11rb$ = function (element) {
        this.reset_0(element);
        this.items_0.push_11rb$(element);
    };
    Pool.prototype.free_7l2mas$ = function (elements) {
        var tmp$;
        for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
            var element = elements[tmp$];
            this.free_11rb$(element);
        }
    };
    Pool.prototype.free_p1ys8y$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var element = tmp$.next();
            this.free_11rb$(element);
        }
    };
    Pool.prototype.alloc_2o04qz$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Pool.alloc_2o04qz$', function (callback) {
        var temp = this.alloc();
        try {
            return callback(temp);
        } finally {
            this.free_11rb$(temp);
        }
    });

    function Pool_init$lambda(it) {
        return Unit;
    }

    Pool.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Pool',
        interfaces: []
    };

    function Pool_init(preallocate, gen, $this) {
        if (preallocate === void 0)
            preallocate = 0;
        $this = $this || Object.create(Pool.prototype);
        Pool.call($this, Pool_init$lambda_0, preallocate, gen);
        return $this;
    }

    function Pool_init$lambda_0(it) {
        return Unit;
    }

    function Comparator$ObjectLiteral(closure$comparison) {
        this.closure$comparison = closure$comparison;
    }

    Comparator$ObjectLiteral.prototype.compare = function (a, b) {
        return this.closure$comparison(a, b);
    };
    Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};

    function PriorityQueue(data, comparator) {
        PriorityQueue$Companion_getInstance();
        this.data_0 = data;
        this.comparator = comparator;
        this.size_zhovam$_0 = 0;
    }

    function PriorityQueue$Companion() {
        PriorityQueue$Companion_instance = this;
    }

    PriorityQueue$Companion.prototype.invoke_sir3ds$ = function (comparator, reversed_0) {
        if (reversed_0 === void 0)
            reversed_0 = false;
        var tmp$;
        return new PriorityQueue(Kotlin.isArray(tmp$ = Kotlin.newArray(16, null)) ? tmp$ : throwCCE(), reversed_0 ? reversed(comparator) : comparator);
    };
    PriorityQueue$Companion.prototype.invoke_km2rfd$ = function (reversed, comparator) {
        if (reversed === void 0)
            reversed = false;
        return PriorityQueue$Companion_getInstance().invoke_sir3ds$(new Comparator$ObjectLiteral(comparator), reversed);
    };
    PriorityQueue$Companion.prototype.invoke_eq9e3x$ = function (reversed) {
        if (reversed === void 0)
            reversed = false;
        return PriorityQueue$Companion_getInstance().invoke_sir3ds$(comparator(), reversed);
    };
    PriorityQueue$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var PriorityQueue$Companion_instance = null;

    function PriorityQueue$Companion_getInstance() {
        if (PriorityQueue$Companion_instance === null) {
            new PriorityQueue$Companion();
        }
        return PriorityQueue$Companion_instance;
    }

    PriorityQueue.prototype.get_value_0 = function ($receiver) {
        return this.data_0[$receiver];
    };
    PriorityQueue.prototype.set_value_0 = function ($receiver, value) {
        this.data_0[$receiver] = value;
    };
    PriorityQueue.prototype.get_isRoot_0 = function ($receiver) {
        return $receiver === 0;
    };
    PriorityQueue.prototype.get_parent_0 = function ($receiver) {
        return ($receiver - 1 | 0) / 2 | 0;
    };
    PriorityQueue.prototype.get_left_0 = function ($receiver) {
        return (2 * $receiver | 0) + 1 | 0;
    };
    PriorityQueue.prototype.get_right_0 = function ($receiver) {
        return (2 * $receiver | 0) + 2 | 0;
    };
    PriorityQueue.prototype.gt_0 = function (a, b) {
        return this.comparator.compare(a, b) > 0;
    };
    PriorityQueue.prototype.lt_0 = function (a, b) {
        return this.comparator.compare(a, b) < 0;
    };
    Object.defineProperty(PriorityQueue.prototype, 'capacity_0', {
        get: function () {
            return this.data_0.length;
        }
    });
    Object.defineProperty(PriorityQueue.prototype, 'size', {
        get: function () {
            return this.size_zhovam$_0;
        },
        set: function (size) {
            this.size_zhovam$_0 = size;
        }
    });
    Object.defineProperty(PriorityQueue.prototype, 'head', {
        get: function () {
            if (this.size <= 0)
                throw IndexOutOfBoundsException_init();
            return this.data_0[0];
        }
    });
    PriorityQueue.prototype.add_11rb$ = function (element) {
        this.size = this.size + 1 | 0;
        this.ensure_0(this.size);
        var i = this.size - 1 | 0;
        this.set_value_0(i, element);
        while (!this.get_isRoot_0(i) && this.gt_0(this.get_value_0(this.get_parent_0(i)), this.get_value_0(i))) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        return true;
    };
    PriorityQueue.prototype.removeHead = function () {
        if (this.size <= 0)
            throw IndexOutOfBoundsException_init();
        if (this.size === 1) {
            this.size = this.size - 1 | 0;
            return this.get_value_0(0);
        }
        var root = this.get_value_0(0);
        this.set_value_0(0, this.get_value_0(this.size - 1 | 0));
        this.size = this.size - 1 | 0;
        this.minHeapify_0(0);
        return root;
    };
    PriorityQueue.prototype.indexOf_11rb$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (equals(this.data_0[n], element))
                return n;
        }
        return -1;
    };
    PriorityQueue.prototype.updateObject_11rb$ = function (element) {
        var index = this.indexOf_11rb$(element);
        if (index >= 0)
            this.updateAt_za3lpa$(index);
    };
    PriorityQueue.prototype.updateAt_za3lpa$ = function (index) {
        var value = this.get_value_0(index);
        this.removeAt_za3lpa$(index);
        this.add_11rb$(value);
    };
    PriorityQueue.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_11rb$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    PriorityQueue.prototype.removeAt_za3lpa$ = function (index) {
        var i = index;
        while (i !== 0) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        this.removeHead();
    };
    PriorityQueue.prototype.ensure_0 = function (index) {
        var tmp$;
        if (index >= this.capacity_0) {
            this.data_0 = Kotlin.isArray(tmp$ = copyOf_2(this.data_0, 2 + (this.capacity_0 * 2 | 0) | 0)) ? tmp$ : throwCCE();
        }
    };
    PriorityQueue.prototype.minHeapify_0 = function (index) {
        var i = index;
        while (true) {
            var left = this.get_left_0(i);
            var right = this.get_right_0(i);
            var smallest = i;
            if (left < this.size && this.lt_0(this.get_value_0(left), this.get_value_0(i)))
                smallest = left;
            if (right < this.size && this.lt_0(this.get_value_0(right), this.get_value_0(smallest)))
                smallest = right;
            if (smallest !== i) {
                this.swap_0(i, smallest);
                i = smallest;
            } else {
                break;
            }
        }
    };
    PriorityQueue.prototype.swap_0 = function (l, r) {
        var temp = this.get_value_0(r);
        this.set_value_0(r, this.get_value_0(l));
        this.set_value_0(l, temp);
    };
    PriorityQueue.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (equals(this.get_value_0(element_0), element)) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    PriorityQueue.prototype.containsAll_brywnq$ = function (elements) {
        var thisSet = toSet(this);
        var all$result;
        all$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (!thisSet.contains_11rb$(element)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    PriorityQueue.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            this.add_11rb$(e);
        }
        return !elements.isEmpty();
    };
    PriorityQueue.prototype.clear = function () {
        this.size = 0;
    };
    PriorityQueue.prototype.removeAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.removeAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };
    PriorityQueue.prototype.retainAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.retainAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };

    function PriorityQueue$iterator$ObjectLiteral(closure$index, this$PriorityQueue) {
        this.closure$index = closure$index;
        this.this$PriorityQueue = this$PriorityQueue;
    }

    PriorityQueue$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.closure$index.v < this.this$PriorityQueue.size;
    };
    PriorityQueue$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.this$PriorityQueue.get_value_0((tmp$ = this.closure$index.v, this.closure$index.v = tmp$ + 1 | 0, tmp$));
    };
    PriorityQueue$iterator$ObjectLiteral.prototype.remove = function () {
        throw new NotImplementedError_init();
    };
    PriorityQueue$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    PriorityQueue.prototype.iterator = function () {
        var index = {v: 0};
        return new PriorityQueue$iterator$ObjectLiteral(index, this);
    };
    PriorityQueue.prototype.toArraySorted = function () {
        var tmp$, tmp$_0, tmp$_1;
        var out = Kotlin.isArray(tmp$ = Kotlin.newArray(this.size, null)) ? tmp$ : throwCCE();
        tmp$_0 = this.size;
        for (var n = 0; n < tmp$_0; n++)
            out[n] = this.removeHead();
        for (tmp$_1 = 0; tmp$_1 !== out.length; ++tmp$_1) {
            var v = out[tmp$_1];
            this.add_11rb$(v);
        }
        return out;
    };
    PriorityQueue.prototype.toString = function () {
        return toList(this).toString();
    };
    PriorityQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'PriorityQueue',
        interfaces: [MutableCollection]
    };

    function IntPriorityQueue(data, comparator) {
        IntPriorityQueue$Companion_getInstance();
        this.data_0 = data;
        this.comparator = comparator;
        this.size_gui0cz$_0 = 0;
    }

    function IntPriorityQueue$Companion() {
        IntPriorityQueue$Companion_instance = this;
    }

    IntPriorityQueue$Companion.prototype.invoke_148qgs$ = function (comparator, reversed_0) {
        if (reversed_0 === void 0)
            reversed_0 = false;
        var tmp$;
        return new IntPriorityQueue(Kotlin.isIntArray(tmp$ = new Int32Array(16)) ? tmp$ : throwCCE(), reversed_0 ? reversed(comparator) : comparator);
    };
    IntPriorityQueue$Companion.prototype.invoke_ynrz7b$ = function (reversed, comparator) {
        if (reversed === void 0)
            reversed = false;
        return IntPriorityQueue$Companion_getInstance().invoke_148qgs$(new Comparator$ObjectLiteral(comparator), reversed);
    };
    IntPriorityQueue$Companion.prototype.invoke_6taknv$ = function (reversed) {
        if (reversed === void 0)
            reversed = false;
        return IntPriorityQueue$Companion_getInstance().invoke_148qgs$(comparator(), reversed);
    };
    IntPriorityQueue$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var IntPriorityQueue$Companion_instance = null;

    function IntPriorityQueue$Companion_getInstance() {
        if (IntPriorityQueue$Companion_instance === null) {
            new IntPriorityQueue$Companion();
        }
        return IntPriorityQueue$Companion_instance;
    }

    IntPriorityQueue.prototype.get_value_0 = function ($receiver) {
        return this.data_0[$receiver];
    };
    IntPriorityQueue.prototype.set_value_0 = function ($receiver, value) {
        this.data_0[$receiver] = value;
    };
    IntPriorityQueue.prototype.get_isRoot_0 = function ($receiver) {
        return $receiver === 0;
    };
    IntPriorityQueue.prototype.get_parent_0 = function ($receiver) {
        return ($receiver - 1 | 0) / 2 | 0;
    };
    IntPriorityQueue.prototype.get_left_0 = function ($receiver) {
        return (2 * $receiver | 0) + 1 | 0;
    };
    IntPriorityQueue.prototype.get_right_0 = function ($receiver) {
        return (2 * $receiver | 0) + 2 | 0;
    };
    IntPriorityQueue.prototype.gt_0 = function (a, b) {
        return this.comparator.compare(a, b) > 0;
    };
    IntPriorityQueue.prototype.lt_0 = function (a, b) {
        return this.comparator.compare(a, b) < 0;
    };
    Object.defineProperty(IntPriorityQueue.prototype, 'capacity_0', {
        get: function () {
            return this.data_0.length;
        }
    });
    Object.defineProperty(IntPriorityQueue.prototype, 'size', {
        get: function () {
            return this.size_gui0cz$_0;
        },
        set: function (size) {
            this.size_gui0cz$_0 = size;
        }
    });
    Object.defineProperty(IntPriorityQueue.prototype, 'head', {
        get: function () {
            if (this.size <= 0)
                throw IndexOutOfBoundsException_init();
            return this.data_0[0];
        }
    });
    IntPriorityQueue.prototype.add_11rb$ = function (element) {
        this.size = this.size + 1 | 0;
        this.ensure_0(this.size);
        var i = this.size - 1 | 0;
        this.set_value_0(i, element);
        while (!this.get_isRoot_0(i) && this.gt_0(this.get_value_0(this.get_parent_0(i)), this.get_value_0(i))) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        return true;
    };
    IntPriorityQueue.prototype.removeHead = function () {
        if (this.size <= 0)
            throw IndexOutOfBoundsException_init();
        if (this.size === 1) {
            this.size = this.size - 1 | 0;
            return this.get_value_0(0);
        }
        var root = this.get_value_0(0);
        this.set_value_0(0, this.get_value_0(this.size - 1 | 0));
        this.size = this.size - 1 | 0;
        this.minHeapify_0(0);
        return root;
    };
    IntPriorityQueue.prototype.indexOf_za3lpa$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (this.data_0[n] === element)
                return n;
        }
        return -1;
    };
    IntPriorityQueue.prototype.updateObject_za3lpa$ = function (element) {
        var index = this.indexOf_za3lpa$(element);
        if (index >= 0)
            this.updateAt_za3lpa$(index);
    };
    IntPriorityQueue.prototype.updateAt_za3lpa$ = function (index) {
        var value = this.get_value_0(index);
        this.removeAt_za3lpa$(index);
        this.add_11rb$(value);
    };
    IntPriorityQueue.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_za3lpa$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    IntPriorityQueue.prototype.removeAt_za3lpa$ = function (index) {
        var i = index;
        while (i !== 0) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        this.removeHead();
    };
    IntPriorityQueue.prototype.ensure_0 = function (index) {
        var tmp$;
        if (index >= this.capacity_0) {
            this.data_0 = Kotlin.isIntArray(tmp$ = copyOf(this.data_0, 2 + (this.capacity_0 * 2 | 0) | 0)) ? tmp$ : throwCCE();
        }
    };
    IntPriorityQueue.prototype.minHeapify_0 = function (index) {
        var i = index;
        while (true) {
            var left = this.get_left_0(i);
            var right = this.get_right_0(i);
            var smallest = i;
            if (left < this.size && this.lt_0(this.get_value_0(left), this.get_value_0(i)))
                smallest = left;
            if (right < this.size && this.lt_0(this.get_value_0(right), this.get_value_0(smallest)))
                smallest = right;
            if (smallest !== i) {
                this.swap_0(i, smallest);
                i = smallest;
            } else {
                break;
            }
        }
    };
    IntPriorityQueue.prototype.swap_0 = function (l, r) {
        var temp = this.get_value_0(r);
        this.set_value_0(r, this.get_value_0(l));
        this.set_value_0(l, temp);
    };
    IntPriorityQueue.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_value_0(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    IntPriorityQueue.prototype.containsAll_brywnq$ = function (elements) {
        var thisSet = toSet(this);
        var all$result;
        all$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (!thisSet.contains_11rb$(element)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };
    IntPriorityQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    IntPriorityQueue.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            this.add_11rb$(e);
        }
        return !elements.isEmpty();
    };
    IntPriorityQueue.prototype.clear = function () {
        this.size = 0;
    };
    IntPriorityQueue.prototype.removeAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.removeAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };
    IntPriorityQueue.prototype.retainAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.retainAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };

    function IntPriorityQueue$iterator$ObjectLiteral(closure$index, this$IntPriorityQueue) {
        this.closure$index = closure$index;
        this.this$IntPriorityQueue = this$IntPriorityQueue;
    }

    IntPriorityQueue$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.closure$index.v < this.this$IntPriorityQueue.size;
    };
    IntPriorityQueue$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.this$IntPriorityQueue.get_value_0((tmp$ = this.closure$index.v, this.closure$index.v = tmp$ + 1 | 0, tmp$));
    };
    IntPriorityQueue$iterator$ObjectLiteral.prototype.remove = function () {
        throw new NotImplementedError_init();
    };
    IntPriorityQueue$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    IntPriorityQueue.prototype.iterator = function () {
        var index = {v: 0};
        return new IntPriorityQueue$iterator$ObjectLiteral(index, this);
    };
    IntPriorityQueue.prototype.toArraySorted = function () {
        var tmp$, tmp$_0, tmp$_1;
        var out = Kotlin.isIntArray(tmp$ = new Int32Array(this.size)) ? tmp$ : throwCCE();
        tmp$_0 = this.size;
        for (var n = 0; n < tmp$_0; n++)
            out[n] = this.removeHead();
        for (tmp$_1 = 0; tmp$_1 !== out.length; ++tmp$_1) {
            var v = out[tmp$_1];
            this.add_11rb$(v);
        }
        return out;
    };
    IntPriorityQueue.prototype.toString = function () {
        return toList(this).toString();
    };
    IntPriorityQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntPriorityQueue',
        interfaces: [MutableCollection]
    };

    function DoublePriorityQueue(data, comparator) {
        DoublePriorityQueue$Companion_getInstance();
        this.data_0 = data;
        this.comparator = comparator;
        this.size_a14rs3$_0 = 0;
    }

    function DoublePriorityQueue$Companion() {
        DoublePriorityQueue$Companion_instance = this;
    }

    DoublePriorityQueue$Companion.prototype.invoke_d3pgz6$ = function (comparator, reversed_0) {
        if (reversed_0 === void 0)
            reversed_0 = false;
        var tmp$;
        return new DoublePriorityQueue(Kotlin.isDoubleArray(tmp$ = new Float64Array(16)) ? tmp$ : throwCCE(), reversed_0 ? reversed(comparator) : comparator);
    };
    DoublePriorityQueue$Companion.prototype.invoke_93cc33$ = function (reversed, comparator) {
        if (reversed === void 0)
            reversed = false;
        return DoublePriorityQueue$Companion_getInstance().invoke_d3pgz6$(new Comparator$ObjectLiteral(comparator), reversed);
    };
    DoublePriorityQueue$Companion.prototype.invoke_6taknv$ = function (reversed) {
        if (reversed === void 0)
            reversed = false;
        return DoublePriorityQueue$Companion_getInstance().invoke_d3pgz6$(comparator(), reversed);
    };
    DoublePriorityQueue$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var DoublePriorityQueue$Companion_instance = null;

    function DoublePriorityQueue$Companion_getInstance() {
        if (DoublePriorityQueue$Companion_instance === null) {
            new DoublePriorityQueue$Companion();
        }
        return DoublePriorityQueue$Companion_instance;
    }

    DoublePriorityQueue.prototype.get_value_0 = function ($receiver) {
        return this.data_0[$receiver];
    };
    DoublePriorityQueue.prototype.set_value_0 = function ($receiver, value) {
        this.data_0[$receiver] = value;
    };
    DoublePriorityQueue.prototype.get_isRoot_0 = function ($receiver) {
        return $receiver === 0;
    };
    DoublePriorityQueue.prototype.get_parent_0 = function ($receiver) {
        return ($receiver - 1 | 0) / 2 | 0;
    };
    DoublePriorityQueue.prototype.get_left_0 = function ($receiver) {
        return (2 * $receiver | 0) + 1 | 0;
    };
    DoublePriorityQueue.prototype.get_right_0 = function ($receiver) {
        return (2 * $receiver | 0) + 2 | 0;
    };
    DoublePriorityQueue.prototype.gt_0 = function (a, b) {
        return this.comparator.compare(a, b) > 0;
    };
    DoublePriorityQueue.prototype.lt_0 = function (a, b) {
        return this.comparator.compare(a, b) < 0;
    };
    Object.defineProperty(DoublePriorityQueue.prototype, 'capacity_0', {
        get: function () {
            return this.data_0.length;
        }
    });
    Object.defineProperty(DoublePriorityQueue.prototype, 'size', {
        get: function () {
            return this.size_a14rs3$_0;
        },
        set: function (size) {
            this.size_a14rs3$_0 = size;
        }
    });
    Object.defineProperty(DoublePriorityQueue.prototype, 'head', {
        get: function () {
            if (this.size <= 0)
                throw IndexOutOfBoundsException_init();
            return this.data_0[0];
        }
    });
    DoublePriorityQueue.prototype.add_11rb$ = function (element) {
        this.size = this.size + 1 | 0;
        this.ensure_0(this.size);
        var i = this.size - 1 | 0;
        this.set_value_0(i, element);
        while (!this.get_isRoot_0(i) && this.gt_0(this.get_value_0(this.get_parent_0(i)), this.get_value_0(i))) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        return true;
    };
    DoublePriorityQueue.prototype.removeHead = function () {
        if (this.size <= 0)
            throw IndexOutOfBoundsException_init();
        if (this.size === 1) {
            this.size = this.size - 1 | 0;
            return this.get_value_0(0);
        }
        var root = this.get_value_0(0);
        this.set_value_0(0, this.get_value_0(this.size - 1 | 0));
        this.size = this.size - 1 | 0;
        this.minHeapify_0(0);
        return root;
    };
    DoublePriorityQueue.prototype.indexOf_14dthe$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (this.data_0[n] === element)
                return n;
        }
        return -1;
    };
    DoublePriorityQueue.prototype.updateObject_14dthe$ = function (element) {
        var index = this.indexOf_14dthe$(element);
        if (index >= 0)
            this.updateAt_za3lpa$(index);
    };
    DoublePriorityQueue.prototype.updateAt_za3lpa$ = function (index) {
        var value = this.get_value_0(index);
        this.removeAt_za3lpa$(index);
        this.add_11rb$(value);
    };
    DoublePriorityQueue.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_14dthe$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    DoublePriorityQueue.prototype.removeAt_za3lpa$ = function (index) {
        var i = index;
        while (i !== 0) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        this.removeHead();
    };
    DoublePriorityQueue.prototype.ensure_0 = function (index) {
        var tmp$;
        if (index >= this.capacity_0) {
            this.data_0 = Kotlin.isDoubleArray(tmp$ = copyOf_0(this.data_0, 2 + (this.capacity_0 * 2 | 0) | 0)) ? tmp$ : throwCCE();
        }
    };
    DoublePriorityQueue.prototype.minHeapify_0 = function (index) {
        var i = index;
        while (true) {
            var left = this.get_left_0(i);
            var right = this.get_right_0(i);
            var smallest = i;
            if (left < this.size && this.lt_0(this.get_value_0(left), this.get_value_0(i)))
                smallest = left;
            if (right < this.size && this.lt_0(this.get_value_0(right), this.get_value_0(smallest)))
                smallest = right;
            if (smallest !== i) {
                this.swap_0(i, smallest);
                i = smallest;
            } else {
                break;
            }
        }
    };
    DoublePriorityQueue.prototype.swap_0 = function (l, r) {
        var temp = this.get_value_0(r);
        this.set_value_0(r, this.get_value_0(l));
        this.set_value_0(l, temp);
    };
    DoublePriorityQueue.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_value_0(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    DoublePriorityQueue.prototype.containsAll_brywnq$ = function (elements) {
        var thisSet = toSet(this);
        var all$result;
        all$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (!thisSet.contains_11rb$(element)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };
    DoublePriorityQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    DoublePriorityQueue.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            this.add_11rb$(e);
        }
        return !elements.isEmpty();
    };
    DoublePriorityQueue.prototype.clear = function () {
        this.size = 0;
    };
    DoublePriorityQueue.prototype.removeAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.removeAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };
    DoublePriorityQueue.prototype.retainAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.retainAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };

    function DoublePriorityQueue$iterator$ObjectLiteral(closure$index, this$DoublePriorityQueue) {
        this.closure$index = closure$index;
        this.this$DoublePriorityQueue = this$DoublePriorityQueue;
    }

    DoublePriorityQueue$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.closure$index.v < this.this$DoublePriorityQueue.size;
    };
    DoublePriorityQueue$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.this$DoublePriorityQueue.get_value_0((tmp$ = this.closure$index.v, this.closure$index.v = tmp$ + 1 | 0, tmp$));
    };
    DoublePriorityQueue$iterator$ObjectLiteral.prototype.remove = function () {
        throw new NotImplementedError_init();
    };
    DoublePriorityQueue$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    DoublePriorityQueue.prototype.iterator = function () {
        var index = {v: 0};
        return new DoublePriorityQueue$iterator$ObjectLiteral(index, this);
    };
    DoublePriorityQueue.prototype.toArraySorted = function () {
        var tmp$, tmp$_0, tmp$_1;
        var out = Kotlin.isDoubleArray(tmp$ = new Float64Array(this.size)) ? tmp$ : throwCCE();
        tmp$_0 = this.size;
        for (var n = 0; n < tmp$_0; n++)
            out[n] = this.removeHead();
        for (tmp$_1 = 0; tmp$_1 !== out.length; ++tmp$_1) {
            var v = out[tmp$_1];
            this.add_11rb$(v);
        }
        return out;
    };
    DoublePriorityQueue.prototype.toString = function () {
        return toList(this).toString();
    };
    DoublePriorityQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'DoublePriorityQueue',
        interfaces: [MutableCollection]
    };

    function FloatPriorityQueue(data, comparator) {
        FloatPriorityQueue$Companion_getInstance();
        this.data_0 = data;
        this.comparator = comparator;
        this.size_7x1l16$_0 = 0;
    }

    function FloatPriorityQueue$Companion() {
        FloatPriorityQueue$Companion_instance = this;
    }

    FloatPriorityQueue$Companion.prototype.invoke_vvqfsh$ = function (comparator, reversed_0) {
        if (reversed_0 === void 0)
            reversed_0 = false;
        var tmp$;
        return new FloatPriorityQueue(Kotlin.isFloatArray(tmp$ = new Float32Array(16)) ? tmp$ : throwCCE(), reversed_0 ? reversed(comparator) : comparator);
    };
    FloatPriorityQueue$Companion.prototype.invoke_v67wtr$ = function (reversed, comparator) {
        if (reversed === void 0)
            reversed = false;
        return FloatPriorityQueue$Companion_getInstance().invoke_vvqfsh$(new Comparator$ObjectLiteral(comparator), reversed);
    };
    FloatPriorityQueue$Companion.prototype.invoke_6taknv$ = function (reversed) {
        if (reversed === void 0)
            reversed = false;
        return FloatPriorityQueue$Companion_getInstance().invoke_vvqfsh$(comparator(), reversed);
    };
    FloatPriorityQueue$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var FloatPriorityQueue$Companion_instance = null;

    function FloatPriorityQueue$Companion_getInstance() {
        if (FloatPriorityQueue$Companion_instance === null) {
            new FloatPriorityQueue$Companion();
        }
        return FloatPriorityQueue$Companion_instance;
    }

    FloatPriorityQueue.prototype.get_value_0 = function ($receiver) {
        return this.data_0[$receiver];
    };
    FloatPriorityQueue.prototype.set_value_0 = function ($receiver, value) {
        this.data_0[$receiver] = value;
    };
    FloatPriorityQueue.prototype.get_isRoot_0 = function ($receiver) {
        return $receiver === 0;
    };
    FloatPriorityQueue.prototype.get_parent_0 = function ($receiver) {
        return ($receiver - 1 | 0) / 2 | 0;
    };
    FloatPriorityQueue.prototype.get_left_0 = function ($receiver) {
        return (2 * $receiver | 0) + 1 | 0;
    };
    FloatPriorityQueue.prototype.get_right_0 = function ($receiver) {
        return (2 * $receiver | 0) + 2 | 0;
    };
    FloatPriorityQueue.prototype.gt_0 = function (a, b) {
        return this.comparator.compare(a, b) > 0;
    };
    FloatPriorityQueue.prototype.lt_0 = function (a, b) {
        return this.comparator.compare(a, b) < 0;
    };
    Object.defineProperty(FloatPriorityQueue.prototype, 'capacity_0', {
        get: function () {
            return this.data_0.length;
        }
    });
    Object.defineProperty(FloatPriorityQueue.prototype, 'size', {
        get: function () {
            return this.size_7x1l16$_0;
        },
        set: function (size) {
            this.size_7x1l16$_0 = size;
        }
    });
    Object.defineProperty(FloatPriorityQueue.prototype, 'head', {
        get: function () {
            if (this.size <= 0)
                throw IndexOutOfBoundsException_init();
            return this.data_0[0];
        }
    });
    FloatPriorityQueue.prototype.add_11rb$ = function (element) {
        this.size = this.size + 1 | 0;
        this.ensure_0(this.size);
        var i = this.size - 1 | 0;
        this.set_value_0(i, element);
        while (!this.get_isRoot_0(i) && this.gt_0(this.get_value_0(this.get_parent_0(i)), this.get_value_0(i))) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        return true;
    };
    FloatPriorityQueue.prototype.removeHead = function () {
        if (this.size <= 0)
            throw IndexOutOfBoundsException_init();
        if (this.size === 1) {
            this.size = this.size - 1 | 0;
            return this.get_value_0(0);
        }
        var root = this.get_value_0(0);
        this.set_value_0(0, this.get_value_0(this.size - 1 | 0));
        this.size = this.size - 1 | 0;
        this.minHeapify_0(0);
        return root;
    };
    FloatPriorityQueue.prototype.indexOf_mx4ult$ = function (element) {
        var tmp$;
        tmp$ = this.size;
        for (var n = 0; n < tmp$; n++) {
            if (this.data_0[n] === element)
                return n;
        }
        return -1;
    };
    FloatPriorityQueue.prototype.updateObject_mx4ult$ = function (element) {
        var index = this.indexOf_mx4ult$(element);
        if (index >= 0)
            this.updateAt_za3lpa$(index);
    };
    FloatPriorityQueue.prototype.updateAt_za3lpa$ = function (index) {
        var value = this.get_value_0(index);
        this.removeAt_za3lpa$(index);
        this.add_11rb$(value);
    };
    FloatPriorityQueue.prototype.remove_11rb$ = function (element) {
        var index = this.indexOf_mx4ult$(element);
        if (index >= 0)
            this.removeAt_za3lpa$(index);
        return index >= 0;
    };
    FloatPriorityQueue.prototype.removeAt_za3lpa$ = function (index) {
        var i = index;
        while (i !== 0) {
            this.swap_0(i, this.get_parent_0(i));
            i = this.get_parent_0(i);
        }
        this.removeHead();
    };
    FloatPriorityQueue.prototype.ensure_0 = function (index) {
        var tmp$;
        if (index >= this.capacity_0) {
            this.data_0 = Kotlin.isFloatArray(tmp$ = copyOf_1(this.data_0, 2 + (this.capacity_0 * 2 | 0) | 0)) ? tmp$ : throwCCE();
        }
    };
    FloatPriorityQueue.prototype.minHeapify_0 = function (index) {
        var i = index;
        while (true) {
            var left = this.get_left_0(i);
            var right = this.get_right_0(i);
            var smallest = i;
            if (left < this.size && this.lt_0(this.get_value_0(left), this.get_value_0(i)))
                smallest = left;
            if (right < this.size && this.lt_0(this.get_value_0(right), this.get_value_0(smallest)))
                smallest = right;
            if (smallest !== i) {
                this.swap_0(i, smallest);
                i = smallest;
            } else {
                break;
            }
        }
    };
    FloatPriorityQueue.prototype.swap_0 = function (l, r) {
        var temp = this.get_value_0(r);
        this.set_value_0(r, this.get_value_0(l));
        this.set_value_0(l, temp);
    };
    FloatPriorityQueue.prototype.contains_11rb$ = function (element) {
        var $receiver = until(0, this.size);
        var any$result;
        any$break: do {
            var tmp$;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
            }
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                if (this.get_value_0(element_0) === element) {
                    any$result = true;
                    break any$break;
                }
            }
            any$result = false;
        }
        while (false);
        return any$result;
    };
    FloatPriorityQueue.prototype.containsAll_brywnq$ = function (elements) {
        var thisSet = toSet(this);
        var all$result;
        all$break: do {
            var tmp$;
            if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
                all$result = true;
                break all$break;
            }
            tmp$ = elements.iterator();
            while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (!thisSet.contains_11rb$(element)) {
                    all$result = false;
                    break all$break;
                }
            }
            all$result = true;
        }
        while (false);
        return all$result;
    };
    FloatPriorityQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    FloatPriorityQueue.prototype.addAll_brywnq$ = function (elements) {
        var tmp$;
        tmp$ = elements.iterator();
        while (tmp$.hasNext()) {
            var e = tmp$.next();
            this.add_11rb$(e);
        }
        return !elements.isEmpty();
    };
    FloatPriorityQueue.prototype.clear = function () {
        this.size = 0;
    };
    FloatPriorityQueue.prototype.removeAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.removeAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };
    FloatPriorityQueue.prototype.retainAll_brywnq$ = function (elements) {
        var temp = ArrayList_init_1(toList(this));
        var res = temp.retainAll_brywnq$(elements);
        this.clear();
        this.addAll_brywnq$(temp);
        return res;
    };

    function FloatPriorityQueue$iterator$ObjectLiteral(closure$index, this$FloatPriorityQueue) {
        this.closure$index = closure$index;
        this.this$FloatPriorityQueue = this$FloatPriorityQueue;
    }

    FloatPriorityQueue$iterator$ObjectLiteral.prototype.hasNext = function () {
        return this.closure$index.v < this.this$FloatPriorityQueue.size;
    };
    FloatPriorityQueue$iterator$ObjectLiteral.prototype.next = function () {
        var tmp$;
        return this.this$FloatPriorityQueue.get_value_0((tmp$ = this.closure$index.v, this.closure$index.v = tmp$ + 1 | 0, tmp$));
    };
    FloatPriorityQueue$iterator$ObjectLiteral.prototype.remove = function () {
        throw new NotImplementedError_init();
    };
    FloatPriorityQueue$iterator$ObjectLiteral.$metadata$ = {
        kind: Kind_CLASS,
        interfaces: [MutableIterator]
    };
    FloatPriorityQueue.prototype.iterator = function () {
        var index = {v: 0};
        return new FloatPriorityQueue$iterator$ObjectLiteral(index, this);
    };
    FloatPriorityQueue.prototype.toArraySorted = function () {
        var tmp$, tmp$_0, tmp$_1;
        var out = Kotlin.isFloatArray(tmp$ = new Float32Array(this.size)) ? tmp$ : throwCCE();
        tmp$_0 = this.size;
        for (var n = 0; n < tmp$_0; n++)
            out[n] = this.removeHead();
        for (tmp$_1 = 0; tmp$_1 !== out.length; ++tmp$_1) {
            var v = out[tmp$_1];
            this.add_11rb$(v);
        }
        return out;
    };
    FloatPriorityQueue.prototype.toString = function () {
        return toList(this).toString();
    };
    FloatPriorityQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatPriorityQueue',
        interfaces: [MutableCollection]
    };

    function Queue() {
        this.items_0 = new TGenDeque();
    }

    Object.defineProperty(Queue.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    Queue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Queue.prototype.enqueue_11rb$ = function (v) {
        this.items_0.addLast_11rb$(v);
    };
    Queue.prototype.dequeue = function () {
        return this.items_0.removeFirst();
    };
    Queue.prototype.remove_11rb$ = function (v) {
        return this.items_0.remove_11rb$(v);
    };
    Queue.prototype.toList = function () {
        return toList(this.items_0);
    };
    Queue.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    Queue.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    Queue.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    Queue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Queue',
        interfaces: [Collection]
    };

    function Queue_init(items, $this) {
        $this = $this || Object.create(Queue.prototype);
        Queue.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.enqueue_11rb$(item);
        }
        return $this;
    }

    function IntQueue() {
        this.items_0 = new IntDeque();
    }

    Object.defineProperty(IntQueue.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    IntQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    IntQueue.prototype.enqueue_za3lpa$ = function (v) {
        this.items_0.addLast_za3lpa$(v);
    };
    IntQueue.prototype.dequeue = function () {
        return this.items_0.removeFirst();
    };
    IntQueue.prototype.remove_za3lpa$ = function (v) {
        return this.items_0.remove_11rb$(v);
    };
    IntQueue.prototype.toList = function () {
        return toList(this.items_0);
    };
    IntQueue.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    IntQueue.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    IntQueue.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    IntQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntQueue',
        interfaces: [Collection]
    };

    function IntQueue_init(items, $this) {
        $this = $this || Object.create(IntQueue.prototype);
        IntQueue.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.enqueue_za3lpa$(item);
        }
        return $this;
    }

    function DoubleQueue() {
        this.items_0 = new DoubleDeque();
    }

    Object.defineProperty(DoubleQueue.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    DoubleQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    DoubleQueue.prototype.enqueue_14dthe$ = function (v) {
        this.items_0.addLast_14dthe$(v);
    };
    DoubleQueue.prototype.dequeue = function () {
        return this.items_0.removeFirst();
    };
    DoubleQueue.prototype.remove_14dthe$ = function (v) {
        return this.items_0.remove_11rb$(v);
    };
    DoubleQueue.prototype.toList = function () {
        return toList(this.items_0);
    };
    DoubleQueue.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    DoubleQueue.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    DoubleQueue.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    DoubleQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'DoubleQueue',
        interfaces: [Collection]
    };

    function DoubleQueue_init(items, $this) {
        $this = $this || Object.create(DoubleQueue.prototype);
        DoubleQueue.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.enqueue_14dthe$(item);
        }
        return $this;
    }

    function FloatQueue() {
        this.items_0 = new FloatDeque();
    }

    Object.defineProperty(FloatQueue.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    FloatQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    FloatQueue.prototype.enqueue_mx4ult$ = function (v) {
        this.items_0.addLast_mx4ult$(v);
    };
    FloatQueue.prototype.dequeue = function () {
        return this.items_0.removeFirst();
    };
    FloatQueue.prototype.remove_mx4ult$ = function (v) {
        return this.items_0.remove_11rb$(v);
    };
    FloatQueue.prototype.toList = function () {
        return toList(this.items_0);
    };
    FloatQueue.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    FloatQueue.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    FloatQueue.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    FloatQueue.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatQueue',
        interfaces: [Collection]
    };

    function FloatQueue_init(items, $this) {
        $this = $this || Object.create(FloatQueue.prototype);
        FloatQueue.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.enqueue_mx4ult$(item);
        }
        return $this;
    }

    function RingBuffer(bits) {
        ByteRingBuffer.call(this, bits);
    }

    RingBuffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'RingBuffer',
        interfaces: [ByteRingBuffer]
    };

    function ByteRingBuffer(bits) {
        this.bits = bits;
        this.totalSize = 1 << this.bits;
        this.mask_7w061q$_0 = this.totalSize - 1 | 0;
        this.buffer_8u4ary$_0 = new Int8Array(this.totalSize);
        this.readPos_musy0$_0 = 0;
        this.writePos_f2ernd$_0 = 0;
        this.availableWrite_exezug$_0 = this.totalSize;
        this.availableRead_dckni1$_0 = 0;
    }

    Object.defineProperty(ByteRingBuffer.prototype, 'availableWrite', {
        get: function () {
            return this.availableWrite_exezug$_0;
        },
        set: function (availableWrite) {
            this.availableWrite_exezug$_0 = availableWrite;
        }
    });
    Object.defineProperty(ByteRingBuffer.prototype, 'availableRead', {
        get: function () {
            return this.availableRead_dckni1$_0;
        },
        set: function (availableRead) {
            this.availableRead_dckni1$_0 = availableRead;
        }
    });
    ByteRingBuffer.prototype.writeHead_mj6st8$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.readPos_musy0$_0 = this.readPos_musy0$_0 - 1 & this.mask_7w061q$_0;
            this.buffer_8u4ary$_0[this.readPos_musy0$_0] = data[offset + size - n - 1 | 0];
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    ByteRingBuffer.prototype.write_mj6st8$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.buffer_8u4ary$_0[this.writePos_f2ernd$_0] = data[offset + n | 0];
            this.writePos_f2ernd$_0 = this.writePos_f2ernd$_0 + 1 & this.mask_7w061q$_0;
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    ByteRingBuffer.prototype.read_mj6st8$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableRead;
        var toRead = Math_0.min(a, size);
        for (var n = 0; n < toRead; n++) {
            data[offset + n | 0] = this.buffer_8u4ary$_0[this.readPos_musy0$_0];
            this.readPos_musy0$_0 = this.readPos_musy0$_0 + 1 & this.mask_7w061q$_0;
        }
        this.availableWrite = this.availableWrite + toRead | 0;
        this.availableRead = this.availableRead - toRead | 0;
        return toRead;
    };
    ByteRingBuffer.prototype.readByte = function () {
        if (this.availableRead <= 0)
            return -1;
        var out = this.buffer_8u4ary$_0[this.readPos_musy0$_0] & 255;
        this.readPos_musy0$_0 = this.readPos_musy0$_0 + 1 & this.mask_7w061q$_0;
        this.availableRead = this.availableRead - 1 | 0;
        this.availableWrite = this.availableWrite + 1 | 0;
        return out;
    };
    ByteRingBuffer.prototype.writeByte_za3lpa$ = function (v) {
        if (this.availableWrite <= 0)
            return false;
        this.buffer_8u4ary$_0[this.writePos_f2ernd$_0] = toByte(v);
        this.writePos_f2ernd$_0 = this.writePos_f2ernd$_0 + 1 & this.mask_7w061q$_0;
        this.availableWrite = this.availableWrite - 1 | 0;
        this.availableRead = this.availableRead + 1 | 0;
        return true;
    };
    ByteRingBuffer.prototype.clear = function () {
        this.readPos_musy0$_0 = 0;
        this.writePos_f2ernd$_0 = 0;
        this.availableRead = 0;
        this.availableWrite = this.totalSize;
    };
    ByteRingBuffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ByteRingBuffer',
        interfaces: []
    };

    function ShortRingBuffer(bits) {
        this.bits = bits;
        this.totalSize = 1 << this.bits;
        this.mask_0 = this.totalSize - 1 | 0;
        this.buffer_0 = new Int16Array(this.totalSize);
        this.readPos_0 = 0;
        this.writePos_0 = 0;
        this.availableWrite_c6gqug$_0 = this.totalSize;
        this.availableRead_bxkduh$_0 = 0;
    }

    Object.defineProperty(ShortRingBuffer.prototype, 'availableWrite', {
        get: function () {
            return this.availableWrite_c6gqug$_0;
        },
        set: function (availableWrite) {
            this.availableWrite_c6gqug$_0 = availableWrite;
        }
    });
    Object.defineProperty(ShortRingBuffer.prototype, 'availableRead', {
        get: function () {
            return this.availableRead_bxkduh$_0;
        },
        set: function (availableRead) {
            this.availableRead_bxkduh$_0 = availableRead;
        }
    });
    ShortRingBuffer.prototype.writeHead_359eei$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.readPos_0 = this.readPos_0 - 1 & this.mask_0;
            this.buffer_0[this.readPos_0] = data[offset + size - n - 1 | 0];
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    ShortRingBuffer.prototype.write_359eei$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.buffer_0[this.writePos_0] = data[offset + n | 0];
            this.writePos_0 = this.writePos_0 + 1 & this.mask_0;
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    ShortRingBuffer.prototype.read_359eei$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableRead;
        var toRead = Math_0.min(a, size);
        for (var n = 0; n < toRead; n++) {
            data[offset + n | 0] = this.buffer_0[this.readPos_0];
            this.readPos_0 = this.readPos_0 + 1 & this.mask_0;
        }
        this.availableWrite = this.availableWrite + toRead | 0;
        this.availableRead = this.availableRead - toRead | 0;
        return toRead;
    };
    ShortRingBuffer.prototype.clear = function () {
        this.readPos_0 = 0;
        this.writePos_0 = 0;
        this.availableRead = 0;
        this.availableWrite = this.totalSize;
    };
    ShortRingBuffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'ShortRingBuffer',
        interfaces: []
    };

    function IntRingBuffer(bits) {
        this.bits = bits;
        this.totalSize = 1 << this.bits;
        this.mask_0 = this.totalSize - 1 | 0;
        this.buffer_0 = new Int32Array(this.totalSize);
        this.readPos_0 = 0;
        this.writePos_0 = 0;
        this.availableWrite_t6jd11$_0 = this.totalSize;
        this.availableRead_852rtg$_0 = 0;
    }

    Object.defineProperty(IntRingBuffer.prototype, 'availableWrite', {
        get: function () {
            return this.availableWrite_t6jd11$_0;
        },
        set: function (availableWrite) {
            this.availableWrite_t6jd11$_0 = availableWrite;
        }
    });
    Object.defineProperty(IntRingBuffer.prototype, 'availableRead', {
        get: function () {
            return this.availableRead_852rtg$_0;
        },
        set: function (availableRead) {
            this.availableRead_852rtg$_0 = availableRead;
        }
    });
    IntRingBuffer.prototype.writeHead_nd5v6f$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.readPos_0 = this.readPos_0 - 1 & this.mask_0;
            this.buffer_0[this.readPos_0] = data[offset + size - n - 1 | 0];
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    IntRingBuffer.prototype.write_nd5v6f$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.buffer_0[this.writePos_0] = data[offset + n | 0];
            this.writePos_0 = this.writePos_0 + 1 & this.mask_0;
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    IntRingBuffer.prototype.read_nd5v6f$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableRead;
        var toRead = Math_0.min(a, size);
        for (var n = 0; n < toRead; n++) {
            data[offset + n | 0] = this.buffer_0[this.readPos_0];
            this.readPos_0 = this.readPos_0 + 1 & this.mask_0;
        }
        this.availableWrite = this.availableWrite + toRead | 0;
        this.availableRead = this.availableRead - toRead | 0;
        return toRead;
    };
    IntRingBuffer.prototype.clear = function () {
        this.readPos_0 = 0;
        this.writePos_0 = 0;
        this.availableRead = 0;
        this.availableWrite = this.totalSize;
    };
    IntRingBuffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntRingBuffer',
        interfaces: []
    };

    function FloatRingBuffer(bits) {
        this.bits = bits;
        this.totalSize = 1 << this.bits;
        this.mask_0 = this.totalSize - 1 | 0;
        this.buffer_0 = new Float32Array(this.totalSize);
        this.readPos_0 = 0;
        this.writePos_0 = 0;
        this.availableWrite_f8dngo$_0 = this.totalSize;
        this.availableRead_ps1bsp$_0 = 0;
    }

    Object.defineProperty(FloatRingBuffer.prototype, 'availableWrite', {
        get: function () {
            return this.availableWrite_f8dngo$_0;
        },
        set: function (availableWrite) {
            this.availableWrite_f8dngo$_0 = availableWrite;
        }
    });
    Object.defineProperty(FloatRingBuffer.prototype, 'availableRead', {
        get: function () {
            return this.availableRead_ps1bsp$_0;
        },
        set: function (availableRead) {
            this.availableRead_ps1bsp$_0 = availableRead;
        }
    });
    FloatRingBuffer.prototype.writeHead_kgymra$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.readPos_0 = this.readPos_0 - 1 & this.mask_0;
            this.buffer_0[this.readPos_0] = data[offset + size - n - 1 | 0];
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    FloatRingBuffer.prototype.write_kgymra$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableWrite;
        var toWrite = Math_0.min(a, size);
        for (var n = 0; n < toWrite; n++) {
            this.buffer_0[this.writePos_0] = data[offset + n | 0];
            this.writePos_0 = this.writePos_0 + 1 & this.mask_0;
        }
        this.availableRead = this.availableRead + toWrite | 0;
        this.availableWrite = this.availableWrite - toWrite | 0;
        return toWrite;
    };
    FloatRingBuffer.prototype.read_kgymra$ = function (data, offset, size) {
        if (offset === void 0)
            offset = 0;
        if (size === void 0)
            size = data.length - offset | 0;
        var a = this.availableRead;
        var toRead = Math_0.min(a, size);
        for (var n = 0; n < toRead; n++) {
            data[offset + n | 0] = this.buffer_0[this.readPos_0];
            this.readPos_0 = this.readPos_0 + 1 & this.mask_0;
        }
        this.availableWrite = this.availableWrite + toRead | 0;
        this.availableRead = this.availableRead - toRead | 0;
        return toRead;
    };
    FloatRingBuffer.prototype.clear = function () {
        this.readPos_0 = 0;
        this.writePos_0 = 0;
        this.availableRead = 0;
        this.availableWrite = this.totalSize;
    };
    FloatRingBuffer.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatRingBuffer',
        interfaces: []
    };

    function Stack() {
        this.items_0 = ArrayList_init();
    }

    Object.defineProperty(Stack.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    Stack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Stack.prototype.push_11rb$ = function (v) {
        return this.items_0.add_11rb$(v);
    };
    Stack.prototype.pop = function () {
        return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
    };
    Stack.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    Stack.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    Stack.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    Stack.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Stack',
        interfaces: [Collection]
    };

    function Stack_init(items, $this) {
        $this = $this || Object.create(Stack.prototype);
        Stack.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.push_11rb$(item);
        }
        return $this;
    }

    function IntStack() {
        this.items_0 = intArrayListOf(new Int32Array([]));
    }

    Object.defineProperty(IntStack.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    IntStack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    IntStack.prototype.push_za3lpa$ = function (v) {
        this.items_0.add_za3lpa$(v);
    };
    IntStack.prototype.pop = function () {
        return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
    };
    IntStack.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    IntStack.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    IntStack.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    IntStack.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'IntStack',
        interfaces: [Collection]
    };

    function IntStack_init(items, $this) {
        $this = $this || Object.create(IntStack.prototype);
        IntStack.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.push_za3lpa$(item);
        }
        return $this;
    }

    function DoubleStack() {
        this.items_0 = doubleArrayListOf(new Float64Array([]));
    }

    Object.defineProperty(DoubleStack.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    DoubleStack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    DoubleStack.prototype.push_14dthe$ = function (v) {
        this.items_0.add_14dthe$(v);
    };
    DoubleStack.prototype.pop = function () {
        return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
    };
    DoubleStack.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    DoubleStack.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    DoubleStack.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    DoubleStack.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'DoubleStack',
        interfaces: [Collection]
    };

    function DoubleStack_init(items, $this) {
        $this = $this || Object.create(DoubleStack.prototype);
        DoubleStack.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.push_14dthe$(item);
        }
        return $this;
    }

    function FloatStack() {
        this.items_0 = floatArrayListOf(new Float32Array([]));
    }

    Object.defineProperty(FloatStack.prototype, 'size', {
        get: function () {
            return this.items_0.size;
        }
    });
    FloatStack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    FloatStack.prototype.push_mx4ult$ = function (v) {
        this.items_0.add_mx4ult$(v);
    };
    FloatStack.prototype.pop = function () {
        return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
    };
    FloatStack.prototype.contains_11rb$ = function (element) {
        return this.items_0.contains_11rb$(element);
    };
    FloatStack.prototype.containsAll_brywnq$ = function (elements) {
        return this.items_0.containsAll_brywnq$(elements);
    };
    FloatStack.prototype.iterator = function () {
        return this.items_0.iterator();
    };
    FloatStack.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FloatStack',
        interfaces: [Collection]
    };

    function FloatStack_init(items, $this) {
        $this = $this || Object.create(FloatStack.prototype);
        FloatStack.call($this);
        var tmp$;
        for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
            var item = items[tmp$];
            $this.push_mx4ult$(item);
        }
        return $this;
    }

    function getOrPut_2($receiver, key, value) {
        if (!$receiver.contains_trkh7z$(key))
            $receiver.set_tcisid$(key, value(key));
        return ensureNotNull($receiver.get_trkh7z$(key));
    }

    function Extra() {
    }

    function Extra$Mixin(extra) {
        if (extra === void 0)
            extra = null;
        this.extra_xlwwn3$_0 = extra;
    }

    Object.defineProperty(Extra$Mixin.prototype, 'extra', {
        get: function () {
            return this.extra_xlwwn3$_0;
        },
        set: function (extra) {
            this.extra_xlwwn3$_0 = extra;
        }
    });
    Extra$Mixin.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Mixin',
        interfaces: [Extra]
    };

    function Extra$Property(name, defaultGen) {
        if (name === void 0)
            name = null;
        this.name = name;
        this.defaultGen = defaultGen;
    }

    Extra$Property.prototype.getValue_jvq2vc$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Extra.Property.getValue_jvq2vc$', wrapFunction(function () {
        var Any = Object;
        var throwCCE = Kotlin.throwCCE;
        var setExtra = _.com.soywiz.kds.setExtra_46skc7$;
        return function (thisRef, property) {
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            tmp$_1 = thisRef.extra;
            tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
            var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            if (res == null) {
                var r = this.defaultGen();
                var tmp$_3, tmp$_4;
                setExtra(thisRef, (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
                return r;
            }
            return res;
        };
    }));
    Extra$Property.prototype.setValue_tgmkxv$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Extra.Property.setValue_tgmkxv$', wrapFunction(function () {
        var Any = Object;
        var throwCCE = Kotlin.throwCCE;
        var setExtra = _.com.soywiz.kds.setExtra_46skc7$;
        return function (thisRef, property, value) {
            var tmp$, tmp$_0;
            setExtra(thisRef, (tmp$ = this.name) != null ? tmp$ : property.callableName, (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
        };
    }));
    Extra$Property.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Property',
        interfaces: []
    };

    function Extra$PropertyThis(name, defaultGen) {
        if (name === void 0)
            name = null;
        this.name = name;
        this.defaultGen = defaultGen;
    }

    Extra$PropertyThis.prototype.getValue_e5fciw$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Extra.PropertyThis.getValue_e5fciw$', wrapFunction(function () {
        var Any = Object;
        var throwCCE = Kotlin.throwCCE;
        var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
        return function (thisRef, property) {
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            tmp$_1 = thisRef.extra;
            tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
            var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            if (res == null) {
                var r = this.defaultGen(thisRef);
                var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
                if (thisRef.extra == null)
                    thisRef.extra = LinkedHashMap_init();
                tmp$_7 = thisRef.extra;
                tmp$_4 = (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName;
                tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
                if (tmp$_7 != null) {
                    tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
                }
                return r;
            }
            return res;
        };
    }));
    Extra$PropertyThis.prototype.setValue_ajenn0$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.Extra.PropertyThis.setValue_ajenn0$', wrapFunction(function () {
        var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
        var Any = Object;
        var throwCCE = Kotlin.throwCCE;
        return function (thisRef, property, value) {
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            if (thisRef.extra == null)
                thisRef.extra = LinkedHashMap_init();
            tmp$_3 = thisRef.extra;
            tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
            tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            if (tmp$_3 != null) {
                tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
            }
        };
    }));
    Extra$PropertyThis.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'PropertyThis',
        interfaces: []
    };
    Extra.$metadata$ = {
        kind: Kind_INTERFACE,
        simpleName: 'Extra',
        interfaces: []
    };

    function getExtraTyped($receiver, name) {
        var tmp$, tmp$_0;
        return (tmp$_0 = (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(name) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    }

    function getExtra($receiver, name) {
        var tmp$;
        return (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(name) : null;
    }

    function setExtra($receiver, name, value) {
        var tmp$;
        if ($receiver.extra == null)
            $receiver.extra = LinkedHashMap_init();
        if ((tmp$ = $receiver.extra) != null) {
            tmp$.put_xwzc9p$(name, value);
        }
    }

    function extraProperty(name, default_0) {
        if (name === void 0)
            name = null;
        this.name = name;
        this.default = default_0;
    }

    extraProperty.prototype.getValue_jvq2vc$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.extraProperty.getValue_jvq2vc$', wrapFunction(function () {
        var Any = Object;
        var throwCCE = Kotlin.throwCCE;
        return function (thisRef, property) {
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            tmp$_1 = thisRef.extra;
            tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
            return (tmp$_3 = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()) != null ? tmp$_3 : this.default();
        };
    }));
    extraProperty.prototype.setValue_tgmkxv$ = defineInlineFunction('kds-root-kds.com.soywiz.kds.extraProperty.setValue_tgmkxv$', wrapFunction(function () {
        var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
        var Any = Object;
        var throwCCE = Kotlin.throwCCE;
        return function (thisRef, property, value) {
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            if (thisRef.extra == null)
                thisRef.extra = LinkedHashMap_init();
            tmp$_3 = thisRef.extra;
            tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
            tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            if (tmp$_3 != null) {
                tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
            }
        };
    }));
    extraProperty.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'extraProperty',
        interfaces: []
    };

    function Computed(prop, default_0) {
        this.prop = prop;
        this.default = default_0;
    }

    function Computed$WithParent() {
    }

    Computed$WithParent.$metadata$ = {
        kind: Kind_INTERFACE,
        simpleName: 'WithParent',
        interfaces: []
    };
    Computed.prototype.getValue_608w9m$ = function (thisRef, p) {
        var current = thisRef;
        while (current != null) {
            var result = this.prop.get(current);
            if (result != null)
                return result;
            current = current.parent;
        }
        return this.default();
    };
    Computed.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Computed',
        interfaces: []
    };

    function WeakProperty(gen) {
        this.gen = gen;
        this.map = new WeakMap_0();
    }

    function WeakProperty$getValue$lambda(this$WeakProperty) {
        return function (it) {
            return this$WeakProperty.gen();
        };
    }

    WeakProperty.prototype.getValue_t0xcdd$ = function (obj, property) {
        return getOrPut_2(this.map, obj, WeakProperty$getValue$lambda(this));
    };
    WeakProperty.prototype.setValue_cvomos$ = function (obj, property, value) {
        this.map.set_tcisid$(obj, value);
    };
    WeakProperty.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'WeakProperty',
        interfaces: []
    };

    function WeakPropertyThis(gen) {
        this.gen = gen;
        this.map = new WeakMap_0();
    }

    function WeakPropertyThis$getValue$lambda(this$WeakPropertyThis, closure$obj) {
        return function (it) {
            return this$WeakPropertyThis.gen(closure$obj);
        };
    }

    WeakPropertyThis.prototype.getValue_gh7xyp$ = function (obj, property) {
        return getOrPut_2(this.map, obj, WeakPropertyThis$getValue$lambda(this, obj));
    };
    WeakPropertyThis.prototype.setValue_v53cml$ = function (obj, property, value) {
        this.map.set_tcisid$(obj, value);
    };
    WeakPropertyThis.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'WeakPropertyThis',
        interfaces: []
    };

    function Comparator$ObjectLiteral_0(closure$comparison) {
        this.closure$comparison = closure$comparison;
    }

    Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
        return this.closure$comparison(a, b);
    };
    Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
    var mapWhile = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapWhile_4fdgnb$', wrapFunction(function () {
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        return function (T_0, isT, cond, gen) {
            var $receiver = ArrayList_init();
            while (cond($receiver.size)) {
                var element = gen($receiver.size);
                $receiver.add_11rb$(element);
            }
            return $receiver;
        };
    }));
    var mapWhileArray = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapWhileArray_4fdgnb$', wrapFunction(function () {
        var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
        var copyToArray = Kotlin.kotlin.collections.copyToArray;
        return function (T_0, isT, cond, gen) {
            var $receiver = ArrayList_init();
            while (cond($receiver.size)) {
                var element = gen($receiver.size);
                $receiver.add_11rb$(element);
            }
            return copyToArray($receiver);
        };
    }));
    var mapWhileInt = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapWhileInt_c4o86v$', wrapFunction(function () {
        var IntArrayList_init = _.com.soywiz.kds.IntArrayList;
        return function (cond, gen) {
            var $receiver = new IntArrayList_init();
            while (cond($receiver.size))
                $receiver.plusAssign_za3lpa$(gen($receiver.size));
            return $receiver.toIntArray();
        };
    }));
    var mapWhileFloat = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapWhileFloat_67ysoa$', wrapFunction(function () {
        var FloatArrayList_init = _.com.soywiz.kds.FloatArrayList;
        return function (cond, gen) {
            var $receiver = new FloatArrayList_init();
            while (cond($receiver.size))
                $receiver.plusAssign_mx4ult$(gen($receiver.size));
            return $receiver.toFloatArray();
        };
    }));
    var mapWhileDouble = defineInlineFunction('kds-root-kds.com.soywiz.kds.mapWhileDouble_mye5ad$', wrapFunction(function () {
        var DoubleArrayList_init = _.com.soywiz.kds.DoubleArrayList;
        return function (cond, gen) {
            var $receiver = new DoubleArrayList_init();
            while (cond($receiver.size))
                $receiver.plusAssign_14dthe$(gen($receiver.size));
            return $receiver.toDoubleArray();
        };
    }));

    function getCyclic($receiver, index) {
        return $receiver.get_za3lpa$(umod(index, $receiver.size));
    }

    function getCyclic_0($receiver, index) {
        return $receiver[umod(index, $receiver.length)];
    }

    function getCyclic_1($receiver, index) {
        return $receiver.get_za3lpa$(umod(index, $receiver.size));
    }

    function getCyclic_2($receiver, index) {
        return $receiver.get_za3lpa$(umod(index, $receiver.size));
    }

    function getCyclic_3($receiver, index) {
        return $receiver.get_za3lpa$(umod(index, $receiver.size));
    }

    function getCyclic_4($receiver, x, y) {
        return $receiver.get_vux9f0$(umod(x, $receiver.width), umod(y, $receiver.height));
    }

    function getCyclic_5($receiver, x, y) {
        return $receiver.get_vux9f0$(umod(x, $receiver.width), umod(y, $receiver.height));
    }

    function getCyclic_6($receiver, x, y) {
        return $receiver.get_vux9f0$(umod(x, $receiver.width), umod(y, $receiver.height));
    }

    function getCyclic_7($receiver, x, y) {
        return $receiver.get_vux9f0$(umod(x, $receiver.width), umod(y, $receiver.height));
    }

    function comparator$lambda(a, b) {
        return Kotlin.compareTo(a, b);
    }

    function comparator() {
        return new Comparator$ObjectLiteral_0(comparator$lambda);
    }

    function linkedHashMapOf(pairs) {
        var $receiver = LinkedHashMap_init();
        var tmp$;
        for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
            var tmp$_0 = pairs[tmp$];
            var key = tmp$_0.component1()
                , value = tmp$_0.component2();
            $receiver.put_xwzc9p$(key, value);
        }
        return $receiver;
    }

    function toLinkedMap($receiver) {
        var $receiver_0 = LinkedHashMap_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var tmp$_0 = tmp$.next();
            var key = tmp$_0.component1()
                , value = tmp$_0.component2();
            $receiver_0.put_xwzc9p$(key, value);
        }
        return $receiver_0;
    }

    function flip($receiver) {
        var destination = ArrayList_init_0($receiver.size);
        var tmp$;
        tmp$ = $receiver.entries.iterator();
        while (tmp$.hasNext()) {
            var item = tmp$.next();
            destination.add_11rb$(new Pair(item.value, item.key));
        }
        return toMap(destination);
    }

    function countMap($receiver) {
        var $receiver_0 = LinkedHashMap_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
            var key = tmp$.next();
            incr($receiver_0, key, 1);
        }
        return $receiver_0;
    }

    function incr($receiver, key, delta) {
        if (delta === void 0)
            delta = 1;
        var tmp$;
        var value = $receiver.get_11rb$(key);
        if (value == null) {
            var answer = 0;
            $receiver.put_xwzc9p$(key, answer);
            tmp$ = answer;
        } else {
            tmp$ = value;
        }
        var next = tmp$ + delta | 0;
        $receiver.put_xwzc9p$(key, next);
        return next;
    }

    function binarySearch($receiver, v, fromIndex, toIndex) {
        if (fromIndex === void 0)
            fromIndex = 0;
        if (toIndex === void 0)
            toIndex = $receiver.length;
        var genericBinarySearch$result;
        genericBinarySearch$break: do {
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = Kotlin.primitiveCompareTo($receiver[mid], v);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else {
                    genericBinarySearch$result = mid;
                    break genericBinarySearch$break;
                }
            }
            genericBinarySearch$result = (-low | 0) - 1 | 0;
        }
        while (false);
        return new BSearchResult(genericBinarySearch$result);
    }

    function binarySearch_0($receiver, v, fromIndex, toIndex) {
        if (fromIndex === void 0)
            fromIndex = 0;
        if (toIndex === void 0)
            toIndex = $receiver.length;
        var genericBinarySearch$result;
        genericBinarySearch$break: do {
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = Kotlin.compareTo($receiver[mid], v);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else {
                    genericBinarySearch$result = mid;
                    break genericBinarySearch$break;
                }
            }
            genericBinarySearch$result = (-low | 0) - 1 | 0;
        }
        while (false);
        return new BSearchResult(genericBinarySearch$result);
    }

    function binarySearch_1($receiver, v, fromIndex, toIndex) {
        if (fromIndex === void 0)
            fromIndex = 0;
        if (toIndex === void 0)
            toIndex = $receiver.length;
        var genericBinarySearch$result;
        genericBinarySearch$break: do {
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = Kotlin.compareTo($receiver[mid], v);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else {
                    genericBinarySearch$result = mid;
                    break genericBinarySearch$break;
                }
            }
            genericBinarySearch$result = (-low | 0) - 1 | 0;
        }
        while (false);
        return new BSearchResult(genericBinarySearch$result);
    }

    function binarySearch_2($receiver, v, fromIndex, toIndex) {
        if (fromIndex === void 0)
            fromIndex = 0;
        if (toIndex === void 0)
            toIndex = $receiver.size;
        var genericBinarySearch$result;
        genericBinarySearch$break: do {
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = Kotlin.primitiveCompareTo($receiver.get_za3lpa$(mid), v);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else {
                    genericBinarySearch$result = mid;
                    break genericBinarySearch$break;
                }
            }
            genericBinarySearch$result = (-low | 0) - 1 | 0;
        }
        while (false);
        return new BSearchResult(genericBinarySearch$result);
    }

    function binarySearch_3($receiver, v, fromIndex, toIndex) {
        if (fromIndex === void 0)
            fromIndex = 0;
        if (toIndex === void 0)
            toIndex = $receiver.size;
        var genericBinarySearch$result;
        genericBinarySearch$break: do {
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = Kotlin.compareTo($receiver.get_za3lpa$(mid), v);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else {
                    genericBinarySearch$result = mid;
                    break genericBinarySearch$break;
                }
            }
            genericBinarySearch$result = (-low | 0) - 1 | 0;
        }
        while (false);
        return new BSearchResult(genericBinarySearch$result);
    }

    function binarySearch_4($receiver, v, fromIndex, toIndex) {
        if (fromIndex === void 0)
            fromIndex = 0;
        if (toIndex === void 0)
            toIndex = $receiver.size;
        var genericBinarySearch$result;
        genericBinarySearch$break: do {
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = Kotlin.compareTo($receiver.get_za3lpa$(mid), v);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else {
                    genericBinarySearch$result = mid;
                    break genericBinarySearch$break;
                }
            }
            genericBinarySearch$result = (-low | 0) - 1 | 0;
        }
        while (false);
        return new BSearchResult(genericBinarySearch$result);
    }

    var genericBinarySearch = defineInlineFunction('kds-root-kds.com.soywiz.kds.genericBinarySearch_fz6bok$', wrapFunction(function () {
        function genericBinarySearch$lambda(from, to, low, high) {
            return (-low | 0) - 1 | 0;
        }

        return function (fromIndex, toIndex, invalid, check) {
            if (invalid === void 0)
                invalid = genericBinarySearch$lambda;
            var low = fromIndex;
            var high = toIndex - 1 | 0;
            while (low <= high) {
                var mid = (low + high | 0) / 2 | 0;
                var mval = check(mid);
                if (mval < 0)
                    low = mid + 1 | 0;
                else if (mval > 0)
                    high = mid - 1 | 0;
                else
                    return mid;
            }
            return invalid(fromIndex, toIndex, low, high);
        };
    }));

    function BSearchResult(raw) {
        this.raw = raw;
    }

    Object.defineProperty(BSearchResult.prototype, 'found', {
        get: function () {
            return this.raw >= 0;
        }
    });
    Object.defineProperty(BSearchResult.prototype, 'index', {
        get: function () {
            return this.found ? this.raw : -1;
        }
    });
    Object.defineProperty(BSearchResult.prototype, 'nearIndex', {
        get: function () {
            return this.found ? this.raw : (-this.raw | 0) - 1 | 0;
        }
    });
    BSearchResult.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'BSearchResult',
        interfaces: []
    };
    BSearchResult.prototype.unbox = function () {
        return this.raw;
    };
    BSearchResult.prototype.toString = function () {
        return 'BSearchResult(raw=' + Kotlin.toString(this.raw) + ')';
    };
    BSearchResult.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.raw) | 0;
        return result;
    };
    BSearchResult.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
    };

    function genericSort(subject, left, right, ops) {
        timSort(subject, left, right, ops);
        return subject;
    }

    function insertionSort(arr, left, right, ops) {
        for (var n = left + 1 | 0; n <= right; n++) {
            var m = n - 1 | 0;
            while (m >= left && ops.compare_8olpll$(arr, m, n) > 0) {
                m = m - 1 | 0;
            }
            m = m + 1 | 0;
            if (m !== n)
                ops.shiftLeft_8olpll$(arr, m, n);
        }
    }

    function merge(arr, start, mid, end, ops) {
        var s = start;
        var m = mid;
        var s2 = m + 1 | 0;
        if (ops.compare_8olpll$(arr, m, s2) <= 0)
            return;
        while (s <= m && s2 <= end) {
            if (ops.compare_8olpll$(arr, s, s2) <= 0) {
                s = s + 1 | 0;
            } else {
                ops.shiftLeft_8olpll$(arr, s, s2);
                s = s + 1 | 0;
                m = m + 1 | 0;
                s2 = s2 + 1 | 0;
            }
        }
    }

    function mergeSort(arr, l, r, ops) {
        if (l < r) {
            var m = l + ((r - l | 0) / 2 | 0) | 0;
            mergeSort(arr, l, m, ops);
            mergeSort(arr, m + 1 | 0, r, ops);
            merge(arr, l, m, r, ops);
        }
    }

    function timSort(arr, l, r, ops) {
        var tmp$;
        var RUN = 32;
        var n = r - l + 1 | 0;
        for (var i = 0; i < n; i += RUN) {
            var tmp$_0 = l + i | 0;
            var a = i + 31 | 0;
            var b = n - 1 | 0;
            insertionSort(arr, tmp$_0, l + Math_0.min(a, b) | 0, ops);
        }
        var size = RUN;
        while (size < n) {
            tmp$ = 2 * size | 0;
            for (var left = 0; left < n; left += tmp$) {
                var mid = left + size - 1 | 0;
                var a_0 = left + (2 * size | 0) - 1 | 0;
                var b_0 = n - 1 | 0;
                var right = Math_0.min(a_0, b_0);
                merge(arr, l + left | 0, l + mid | 0, l + right | 0, ops);
            }
            size = size * 2 | 0;
        }
    }

    function SortOps() {
    }

    SortOps.prototype.shiftLeft_8olpll$ = function (subject, indexL, indexR) {
        var tmp$;
        tmp$ = indexL + 1 | 0;
        for (var n = indexR; n >= tmp$; n--)
            this.swap_8olpll$(subject, n - 1 | 0, n);
    };
    SortOps.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'SortOps',
        interfaces: []
    };

    function SortOpsComparable() {
        SortOpsComparable_instance = this;
        SortOps.call(this);
    }

    SortOpsComparable.prototype.compare_8olpll$ = function (subject, l, r) {
        return Kotlin.compareTo(subject.get_za3lpa$(l), subject.get_za3lpa$(r));
    };
    SortOpsComparable.prototype.swap_8olpll$ = function (subject, indexL, indexR) {
        var tmp = subject.get_za3lpa$(indexL);
        subject.set_wxm5ur$(indexL, subject.get_za3lpa$(indexR));
        subject.set_wxm5ur$(indexR, tmp);
    };
    SortOpsComparable.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'SortOpsComparable',
        interfaces: [SortOps]
    };
    var SortOpsComparable_instance = null;

    function SortOpsComparable_getInstance() {
        if (SortOpsComparable_instance === null) {
            new SortOpsComparable();
        }
        return SortOpsComparable_instance;
    }

    function genericSort_0($receiver, left, right) {
        if (left === void 0)
            left = 0;
        if (right === void 0)
            right = $receiver.size - 1 | 0;
        var tmp$;
        return genericSort($receiver, left, right, Kotlin.isType(tmp$ = SortOpsComparable_getInstance(), SortOps) ? tmp$ : throwCCE());
    }

    function genericSorted($receiver, left, right) {
        if (left === void 0)
            left = 0;
        if (right === void 0)
            right = $receiver.size - 1 | 0;
        return genericSort_0(toMutableList($receiver.subList_vux9f0$(left, right + 1 | 0)));
    }

    function divCeil($receiver, that) {
        return $receiver % that !== 0 ? ($receiver / that | 0) + 1 | 0 : $receiver / that | 0;
    }

    function umod($receiver, other) {
        var tmp$;
        var remainder = $receiver % other;
        if (remainder < 0)
            tmp$ = remainder + other | 0;
        else
            tmp$ = remainder;
        return tmp$;
    }

    function ilog2(v) {
        return numberToInt(Math_0.log2(v));
    }

    function arraycopy(src, srcPos, dst, dstPos, size) {
        arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        return dst;
    }

    function arraycopy_0(src, srcPos, dst, dstPos, size) {
        arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        return dst;
    }

    function arraycopy_1(src, srcPos, dst, dstPos, size) {
        arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        return dst;
    }

    function arraycopy_2(src, srcPos, dst, dstPos, size) {
        arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        return dst;
    }

    function arraycopy_3(src, srcPos, dst, dstPos, size) {
        arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
        return dst;
    }

    function fill($receiver, value) {
        for (var n = 0; n < $receiver.length; n++)
            $receiver[n] = value;
    }

    function fill_0($receiver, value) {
        for (var n = 0; n < $receiver.length; n++)
            $receiver[n] = value;
    }

    var contentHashCode_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.internal.contentHashCode_o0w25p$', wrapFunction(function () {
        var hashCode = Kotlin.hashCode;
        return function (size, gen) {
            var result = 1;
            for (var n = 0; n < size; n++) {
                var tmp$ = 31 * result | 0;
                var $receiver = gen(n);
                var tmp$_0;
                result = tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
            }
            return result;
        };
    }));
    var fastForEach_2 = defineInlineFunction('kds-root-kds.com.soywiz.kds.iterators.fastForEach_qvzyjf$', function ($receiver, callback) {
        var tmp$;
        var n = 0;
        while (n < $receiver.size) {
            callback($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
        }
    });
    var fastForEach_3 = defineInlineFunction('kds-root-kds.com.soywiz.kds.iterators.fastForEach_5hcql4$', function ($receiver, callback) {
        var tmp$;
        var n = 0;
        while (n < $receiver.length) {
            callback($receiver[tmp$ = n, n = tmp$ + 1 | 0, tmp$]);
        }
    });
    var fastForEachWithIndex = defineInlineFunction('kds-root-kds.com.soywiz.kds.iterators.fastForEachWithIndex_ae31fb$', function ($receiver, callback) {
        var n = 0;
        while (n < $receiver.size) {
            callback(n, $receiver.get_za3lpa$(n));
            n = n + 1 | 0;
        }
    });
    var fastForEachWithIndex_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.iterators.fastForEachWithIndex_e1rywk$', function ($receiver, callback) {
        var n = 0;
        while (n < $receiver.length) {
            callback(n, $receiver[n]);
            n = n + 1 | 0;
        }
    });
    var fastForEachReverse = defineInlineFunction('kds-root-kds.com.soywiz.kds.iterators.fastForEachReverse_qvzyjf$', function ($receiver, callback) {
        var n = 0;
        while (n < $receiver.size) {
            callback($receiver.get_za3lpa$($receiver.size - n - 1 | 0));
            n = n + 1 | 0;
        }
    });
    var fastIterateRemove = defineInlineFunction('kds-root-kds.com.soywiz.kds.iterators.fastIterateRemove_vxw2bz$', function ($receiver, callback) {
        var n = 0;
        var m = 0;
        while (n < $receiver.size) {
            if (m >= 0 && m !== n)
                $receiver.set_wxm5ur$(m, $receiver.get_za3lpa$(n));
            if (callback($receiver.get_za3lpa$(n))) {
                m = m - 1 | 0;
            }
            n = n + 1 | 0;
            m = m + 1 | 0;
        }
        while ($receiver.size > m)
            $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
        return $receiver;
    });

    function FastIntMap(dummy) {
    }

    FastIntMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FastIntMap',
        interfaces: []
    };

    function FastIntMap_0() {
        return new Map();
    }

    function get_size($receiver) {
        return $receiver.size;
    }

    function keys($receiver) {
        return toList_0(Array_from($receiver.keys()));
    }

    var get_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.get_yuwbmu$', function ($receiver, key) {
        return $receiver.get(key);
    });
    var set = defineInlineFunction('kds-root-kds.com.soywiz.kds.set_xh22fo$', function ($receiver, key, value) {
        $receiver.set(key, value);
    });
    var contains_3 = defineInlineFunction('kds-root-kds.com.soywiz.kds.contains_yuwbmu$', function ($receiver, key) {
        return $receiver.contains(key) != undefined;
    });
    var remove = defineInlineFunction('kds-root-kds.com.soywiz.kds.remove_yuwbmu$', function ($receiver, key) {
        $receiver.delete(key);
    });
    var removeRange = defineInlineFunction('kds-root-kds.com.soywiz.kds.removeRange_i707ug$', wrapFunction(function () {
        var get_keys = _.com.soywiz.kds.get_keys_dqpcmq$;
        return function ($receiver, src, dst) {
            var tmp$;
            tmp$ = get_keys($receiver).iterator();
            while (tmp$.hasNext()) {
                var key = tmp$.next();
                if (src <= key && key <= dst) {
                    $receiver.delete(key);
                }
            }
        };
    }));
    var clear = defineInlineFunction('kds-root-kds.com.soywiz.kds.clear_h8lhhk$', function ($receiver) {
        $receiver.clear();
    });
    var fastKeyForEach = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastKeyForEach_ob82kj$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            callback(v.value);
        }
    });

    function FastStringMap(dummy) {
    }

    FastStringMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FastStringMap',
        interfaces: []
    };

    function FastStringMap_0() {
        return new Map();
    }

    function get_size_0($receiver) {
        return $receiver.size;
    }

    function keys_0($receiver) {
        return toList_0(Array_from($receiver.keys()));
    }

    var get_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.get_c56zjs$', function ($receiver, key) {
        return $receiver.get(key);
    });
    var set_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.set_ysvef2$', function ($receiver, key, value) {
        $receiver.set(key, value);
    });
    var contains_4 = defineInlineFunction('kds-root-kds.com.soywiz.kds.contains_c56zjs$', function ($receiver, key) {
        return $receiver.has(key);
    });
    var remove_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.remove_c56zjs$', function ($receiver, key) {
        $receiver.delete(key);
    });
    var clear_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.clear_7q1sei$', function ($receiver) {
        return $receiver.clear();
    });
    var fastKeyForEach_0 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastKeyForEach_x75d49$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            callback(v.value);
        }
    });

    function FastIdentityMap(dummy) {
    }

    FastIdentityMap.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'FastIdentityMap',
        interfaces: []
    };

    function FastIdentityMap_0() {
        return new Map();
    }

    function get_size_1($receiver) {
        return $receiver.size;
    }

    function keys_1($receiver) {
        return toList_0(Array_from($receiver.keys()));
    }

    function get_2($receiver, key) {
        return $receiver.get(key);
    }

    function set_1($receiver, key, value) {
        $receiver.set(key, value);
    }

    function contains_5($receiver, key) {
        return $receiver.has(key);
    }

    function remove_1($receiver, key) {
        $receiver.delete(key);
    }

    function clear_1($receiver) {
        return $receiver.clear();
    }

    var fastKeyForEach_1 = defineInlineFunction('kds-root-kds.com.soywiz.kds.fastKeyForEach_2rc0ms$', function ($receiver, callback) {
        var mapIterator = $receiver.keys();
        while (true) {
            var v = mapIterator.next();
            if (v.done)
                break;
            callback(v.value);
        }
    });

    function WeakMap_0() {
        this.wm = new WeakMap();
    }

    WeakMap_0.prototype.contains_trkh7z$ = function (key) {
        return this.wm.has(key);
    };
    WeakMap_0.prototype.set_tcisid$ = function (key, value) {
        if (typeof key === 'string') {
            throw IllegalStateException_init_0("Can't use String as WeakMap keys".toString());
        }
        this.wm.set(key, value);
    };
    WeakMap_0.prototype.get_trkh7z$ = function (key) {
        return this.wm.get(key);
    };
    WeakMap_0.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'WeakMap',
        interfaces: []
    };

    function Array_from(value) {
        return Array.from(value);
    }

    var package$com = _.com || (_.com = {});
    var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
    var package$kds = package$soywiz.kds || (package$soywiz.kds = {});
    package$kds.Array2 = Array2;
    $$importsForInline$$['kds-root-kds'] = _;
    package$kds.map2_ayxk8o$ = map2;
    Object.defineProperty(Array2, 'Companion', {
        get: Array2$Companion_getInstance
    });
    package$kds.IntArray2 = IntArray2;
    Object.defineProperty(IntArray2, 'Companion', {
        get: IntArray2$Companion_getInstance
    });
    package$kds.DoubleArray2 = DoubleArray2;
    Object.defineProperty(DoubleArray2, 'Companion', {
        get: DoubleArray2$Companion_getInstance
    });
    package$kds.FloatArray2 = FloatArray2;
    Object.defineProperty(FloatArray2, 'Companion', {
        get: FloatArray2$Companion_getInstance
    });
    package$kds.ByteArrayDeque = ByteArrayDeque;
    package$kds.ShortArrayDeque = ShortArrayDeque;
    package$kds.IntArrayDeque = IntArrayDeque;
    package$kds.FloatArrayDeque = FloatArrayDeque;
    package$kds.IntArrayList_init_38vc8i$ = IntArrayList_init;
    package$kds.IntArrayList_init_pmhfmb$ = IntArrayList_init_0;
    package$kds.IntArrayList = IntArrayList;
    package$kds.intArrayListOf_pmhfmb$ = intArrayListOf;
    package$kds.DoubleArrayList_init_avch8c$ = DoubleArrayList_init;
    package$kds.DoubleArrayList_init_yqxtqz$ = DoubleArrayList_init_0;
    package$kds.DoubleArrayList = DoubleArrayList;
    package$kds.doubleArrayListOf_yqxtqz$ = doubleArrayListOf;
    package$kds.FloatArrayList_init_7u0t7$ = FloatArrayList_init;
    package$kds.FloatArrayList_init_8cqhcw$ = FloatArrayList_init_0;
    package$kds.FloatArrayList = FloatArrayList;
    package$kds.floatArrayListOf_8cqhcw$ = floatArrayListOf;
    package$kds.toIntList_9tsm8a$ = toIntList;
    package$kds.toIntList_plj8ka$ = toIntList_0;
    package$kds.toFloatList_lvsncp$ = toFloatList;
    package$kds.toDoubleList_l63kqw$ = toDoubleList;
    package$kds.mapInt_1nckxa$ = mapInt;
    package$kds.mapFloat_v16v6p$ = mapFloat;
    package$kds.mapDouble_k0tf9a$ = mapDouble;
    package$kds.filter_8ct0zs$ = filter;
    package$kds.filter_spv2xe$ = filter_0;
    package$kds.filter_5aw1ee$ = filter_1;
    package$kds.BitSet = BitSet;
    package$kds.CacheMap_init_y0g261$ = CacheMap_init;
    package$kds.CacheMap = CacheMap;
    package$kds.CaseInsensitiveStringMap_init_287e2$ = CaseInsensitiveStringMap_init;
    package$kds.CaseInsensitiveStringMap_init_o4b7g9$ = CaseInsensitiveStringMap_init_0;
    package$kds.CaseInsensitiveStringMap_init_gkrhic$ = CaseInsensitiveStringMap_init_1;
    package$kds.CaseInsensitiveStringMap = CaseInsensitiveStringMap;
    package$kds.toCaseInsensitiveMap_yrl0k6$ = toCaseInsensitiveMap;
    package$kds.TGenDeque = TGenDeque;
    package$kds.IntDeque = IntDeque;
    package$kds.DoubleDeque = DoubleDeque;
    package$kds.FloatDeque = FloatDeque;
    package$kds.ByteDeque = ByteDeque;
    package$kds.values_h8lhhk$ = values;
    package$kds.get_keys_dqpcmq$ = get_keys;
    package$kds.get_values_dqpcmq$ = get_values;
    package$kds.get_yuwbmu$ = get_0;
    package$kds.fastKeyForEach_ob82kj$ = fastKeyForEach;
    package$kds.fastValueForEachNullable_u5k20f$ = fastValueForEachNullable;
    package$kds.fastForEachNullable_opmjmb$ = fastForEachNullable;
    package$kds.fastValueForEach_z7jycu$ = fastValueForEach;
    package$kds.fastForEach_io8r9m$ = fastForEach;
    package$kds.getNull_g1cbd3$ = getNull;
    package$kds.set_xh22fo$ = set;
    package$kds.getOrPut_5kagfs$ = getOrPut;
    package$kds.values_7q1sei$ = values_0;
    package$kds.get_keys_kqxxnk$ = get_keys_0;
    package$kds.get_values_kqxxnk$ = get_values_0;
    package$kds.get_c56zjs$ = get_1;
    package$kds.fastKeyForEach_x75d49$ = fastKeyForEach_0;
    package$kds.fastValueForEachNullable_asdgld$ = fastValueForEachNullable_0;
    package$kds.fastForEachNullable_c7a4ed$ = fastForEachNullable_0;
    package$kds.fastValueForEach_luqefw$ = fastValueForEach_0;
    package$kds.fastForEach_6jlgd4$ = fastForEach_0;
    package$kds.getNull_m7nghh$ = getNull_0;
    package$kds.set_ysvef2$ = set_0;
    package$kds.getOrPut_1y6b2i$ = getOrPut_0;
    package$kds.values_s48pn1$ = values_1;
    package$kds.get_keys_8rcsge$ = get_keys_1;
    package$kds.get_values_8rcsge$ = get_values_1;
    package$kds.get_svge65$ = get_2;
    package$kds.fastKeyForEach_2rc0ms$ = fastKeyForEach_1;
    package$kds.fastValueForEachNullable_htrlsd$ = fastValueForEachNullable_1;
    package$kds.fastForEachNullable_irl7ur$ = fastForEachNullable_1;
    package$kds.fastValueForEach_q0pqei$ = fastValueForEach_1;
    package$kds.fastForEach_zhf1uu$ = fastForEach_1;
    package$kds.getNull_svge65$ = getNull_1;
    package$kds.set_13yjyg$ = set_1;
    package$kds.getOrPut_m0hlt6$ = getOrPut_1;
    package$kds.toFast_4ffc8p$ = toFast;
    package$kds.GenericSubList = GenericSubList;
    package$kds.GenericListIterator = GenericListIterator;
    package$kds.IndexedTable = IndexedTable;
    Object.defineProperty(IntMap, 'Companion', {
        get: IntMap$Companion_getInstance
    });
    IntMap.Entry = IntMap$Entry;
    IntMap.KeyIterable = IntMap$KeyIterable;
    IntMap.ValueIterable = IntMap$ValueIterable;
    IntMap.EntryIterable = IntMap$EntryIterable;
    IntMap.KeyIterator = IntMap$KeyIterator;
    IntMap.ValueIterator = IntMap$ValueIterator;
    IntMap.EntryIterator = IntMap$EntryIterator;
    IntMap.Iterator = IntMap$Iterator;
    package$kds.IntMap_init_42wstk$ = IntMap_init;
    package$kds.IntMap = IntMap;
    package$kds.toIntMap_hx7udi$ = toIntMap;
    IntFloatMap.Entry = IntFloatMap$Entry;
    package$kds.IntFloatMap = IntFloatMap;
    Object.defineProperty(IntIntMap, 'Companion', {
        get: IntIntMap$Companion_getInstance
    });
    IntIntMap.Entry = IntIntMap$Entry;
    IntIntMap.KeyIterable = IntIntMap$KeyIterable;
    IntIntMap.ValueIterable = IntIntMap$ValueIterable;
    IntIntMap.EntryIterable = IntIntMap$EntryIterable;
    IntIntMap.KeyIterator = IntIntMap$KeyIterator;
    IntIntMap.ValueIterator = IntIntMap$ValueIterator;
    IntIntMap.EntryIterator = IntIntMap$EntryIterator;
    IntIntMap.Iterator = IntIntMap$Iterator;
    package$kds.IntIntMap_init_14dthe$ = IntIntMap_init;
    package$kds.IntIntMap = IntIntMap;
    package$kds.IntSet = IntSet;
    package$kds.intSetOf_pmhfmb$ = intSetOf;
    package$kds.ListReader = ListReader;
    package$kds.reader_2p1efm$ = reader;
    package$kds.expect_2mact2$ = expect;
    package$kds.dump_nnsjww$ = dump;
    package$kds.getFirst_db98up$ = getFirst;
    package$kds.getLast_db98up$ = getLast;
    package$kds.flatten_tvdqrj$ = flatten;
    package$kds.flatMapIterable_tvdqrj$ = flatMapIterable;
    package$kds.flatMapIterator_tvdqrj$ = flatMapIterator;
    package$kds.append_38qq6x$ = append;
    package$kds.replace_38qq6x$ = replace;
    package$kds.appendAll_ft1vet$ = appendAll;
    package$kds.replaceAll_ft1vet$ = replaceAll;
    package$kds.linkedHashMapListOf_qfcya0$ = linkedHashMapListOf;
    package$kds.LinkedHashMapList_svx7l6$ = LinkedHashMapList;
    package$kds.LinkedHashMapList_c82x08$ = LinkedHashMapList_0;
    package$kds.Pool_init_rz0iom$ = Pool_init;
    package$kds.Pool = Pool;
    Object.defineProperty(PriorityQueue, 'Companion', {
        get: PriorityQueue$Companion_getInstance
    });
    package$kds.PriorityQueue = PriorityQueue;
    Object.defineProperty(IntPriorityQueue, 'Companion', {
        get: IntPriorityQueue$Companion_getInstance
    });
    package$kds.IntPriorityQueue = IntPriorityQueue;
    Object.defineProperty(DoublePriorityQueue, 'Companion', {
        get: DoublePriorityQueue$Companion_getInstance
    });
    package$kds.DoublePriorityQueue = DoublePriorityQueue;
    Object.defineProperty(FloatPriorityQueue, 'Companion', {
        get: FloatPriorityQueue$Companion_getInstance
    });
    package$kds.FloatPriorityQueue = FloatPriorityQueue;
    package$kds.Queue_init_i5x0yv$ = Queue_init;
    package$kds.Queue = Queue;
    package$kds.IntQueue_init_pmhfmb$ = IntQueue_init;
    package$kds.IntQueue = IntQueue;
    package$kds.DoubleQueue_init_yqxtqz$ = DoubleQueue_init;
    package$kds.DoubleQueue = DoubleQueue;
    package$kds.FloatQueue_init_8cqhcw$ = FloatQueue_init;
    package$kds.FloatQueue = FloatQueue;
    package$kds.RingBuffer = RingBuffer;
    package$kds.ByteRingBuffer = ByteRingBuffer;
    package$kds.ShortRingBuffer = ShortRingBuffer;
    package$kds.IntRingBuffer = IntRingBuffer;
    package$kds.FloatRingBuffer = FloatRingBuffer;
    package$kds.Stack_init_i5x0yv$ = Stack_init;
    package$kds.Stack = Stack;
    package$kds.IntStack_init_pmhfmb$ = IntStack_init;
    package$kds.IntStack = IntStack;
    package$kds.DoubleStack_init_yqxtqz$ = DoubleStack_init;
    package$kds.DoubleStack = DoubleStack;
    package$kds.FloatStack_init_8cqhcw$ = FloatStack_init;
    package$kds.FloatStack = FloatStack;
    package$kds.getOrPut_6fdset$ = getOrPut_2;
    Extra.Mixin = Extra$Mixin;
    package$kds.setExtra_46skc7$ = setExtra;
    Extra.Property = Extra$Property;
    Extra.PropertyThis = Extra$PropertyThis;
    package$kds.Extra = Extra;
    package$kds.getExtraTyped_qhdxhg$ = getExtraTyped;
    package$kds.getExtra_mr3xxn$ = getExtra;
    package$kds.extraProperty = extraProperty;
    Computed.WithParent = Computed$WithParent;
    package$kds.Computed = Computed;
    package$kds.WeakProperty = WeakProperty;
    package$kds.WeakPropertyThis = WeakPropertyThis;
    package$kds.mapWhileInt_c4o86v$ = mapWhileInt;
    package$kds.mapWhileFloat_67ysoa$ = mapWhileFloat;
    package$kds.mapWhileDouble_mye5ad$ = mapWhileDouble;
    package$kds.getCyclic_yzln2o$ = getCyclic;
    package$kds.getCyclic_r20n03$ = getCyclic_0;
    package$kds.getCyclic_s1glwf$ = getCyclic_1;
    package$kds.getCyclic_tda9is$ = getCyclic_2;
    package$kds.getCyclic_nux0q3$ = getCyclic_3;
    package$kds.getCyclic_rvqdvc$ = getCyclic_4;
    package$kds.getCyclic_ekerff$ = getCyclic_5;
    package$kds.getCyclic_5fg5dk$ = getCyclic_6;
    package$kds.getCyclic_newwwh$ = getCyclic_7;
    package$kds.comparator_dahdeg$ = comparator;
    package$kds.linkedHashMapOf_qfcya0$ = linkedHashMapOf;
    package$kds.toLinkedMap_6hr0sd$ = toLinkedMap;
    package$kds.flip_go3l1a$ = flip;
    package$kds.countMap_2p1efm$ = countMap;
    package$kds.incr_9idthx$ = incr;
    package$kds.binarySearch_tpuxuu$ = binarySearch;
    package$kds.binarySearch_nwy378$ = binarySearch_0;
    package$kds.binarySearch_x4f2cq$ = binarySearch_1;
    package$kds.binarySearch_aunrz$ = binarySearch_2;
    package$kds.binarySearch_518s50$ = binarySearch_3;
    package$kds.binarySearch_gadt63$ = binarySearch_4;
    package$kds.genericBinarySearch_fz6bok$ = genericBinarySearch;
    package$kds.BSearchResult = BSearchResult;
    package$kds.genericSort_bepgem$ = genericSort;
    package$kds.SortOps = SortOps;
    Object.defineProperty(package$kds, 'SortOpsComparable', {
        get: SortOpsComparable_getInstance
    });
    package$kds.genericSort_pjmrmz$ = genericSort_0;
    package$kds.genericSorted_adeaps$ = genericSorted;
    var package$internal = package$kds.internal || (package$kds.internal = {});
    package$internal.divCeil_b6l1hq$ = divCeil;
    package$internal.umod_b6l1hq$ = umod;
    package$internal.ilog2_kcn2v3$ = ilog2;
    package$internal.arraycopy_t6l26v$ = arraycopy;
    package$internal.arraycopy_lwkm2r$ = arraycopy_0;
    package$internal.arraycopy_3jsevz$ = arraycopy_1;
    package$internal.arraycopy_215ibj$ = arraycopy_2;
    package$internal.arraycopy_wkn64v$ = arraycopy_3;
    package$internal.fill_duqmpg$ = fill;
    package$internal.fill_ei6nnb$ = fill_0;
    package$internal.contentHashCode_o0w25p$ = contentHashCode_0;
    var package$iterators = package$kds.iterators || (package$kds.iterators = {});
    package$iterators.fastForEach_qvzyjf$ = fastForEach_2;
    package$iterators.fastForEach_5hcql4$ = fastForEach_3;
    package$iterators.fastForEachWithIndex_ae31fb$ = fastForEachWithIndex;
    package$iterators.fastForEachWithIndex_e1rywk$ = fastForEachWithIndex_0;
    package$iterators.fastForEachReverse_qvzyjf$ = fastForEachReverse;
    package$iterators.fastIterateRemove_vxw2bz$ = fastIterateRemove;
    package$kds.FastIntMap = FastIntMap;
    package$kds.FastIntMap_287e2$ = FastIntMap_0;
    package$kds.get_size_dqpcmq$ = get_size;
    package$kds.keys_h8lhhk$ = keys;
    package$kds.contains_yuwbmu$ = contains_3;
    package$kds.remove_yuwbmu$ = remove;
    package$kds.removeRange_i707ug$ = removeRange;
    package$kds.clear_h8lhhk$ = clear;
    package$kds.FastStringMap = FastStringMap;
    package$kds.FastStringMap_287e2$ = FastStringMap_0;
    package$kds.get_size_kqxxnk$ = get_size_0;
    package$kds.keys_7q1sei$ = keys_0;
    package$kds.contains_c56zjs$ = contains_4;
    package$kds.remove_c56zjs$ = remove_0;
    package$kds.clear_7q1sei$ = clear_0;
    package$kds.FastIdentityMap = FastIdentityMap;
    package$kds.FastIdentityMap_q3lmfv$ = FastIdentityMap_0;
    package$kds.get_size_8rcsge$ = get_size_1;
    package$kds.keys_s48pn1$ = keys_1;
    package$kds.contains_svge65$ = contains_5;
    package$kds.remove_svge65$ = remove_1;
    package$kds.clear_s48pn1$ = clear_1;
    package$kds.WeakMap = WeakMap_0;
    package$kds.Array_from_kcmwxo$ = Array_from;
    Kotlin.defineModule('kds-root-kds', _);
    return _;
}));

//# sourceMappingURL=kds-root-kds.js.map
