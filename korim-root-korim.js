(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-root-korma', 'kmem-root-kmem', 'korio-root-korio', 'kds-root-kds', 'klock-root-klock', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-root-korma'), require('kmem-root-kmem'), require('korio-root-korio'), require('kds-root-kds'), require('klock-root-klock'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korim-root-korim'.");
    }
    if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korim-root-korim'.");
    }
    if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korim-root-korim'.");
    }
    if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korim-root-korim'.");
    }
    if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korim-root-korim'.");
    }
    if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korim-root-korim'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korim-root-korim'.");
    }
    root['korim-root-korim'] = factory(typeof this['korim-root-korim'] === 'undefined' ? {} : this['korim-root-korim'], kotlin, this['korma-root-korma'], this['kmem-root-kmem'], this['korio-root-korio'], this['kds-root-kds'], this['klock-root-klock'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$korma_root_korma, $module$kmem_root_kmem, $module$korio_root_korio, $module$kds_root_kds, $module$klock_root_klock, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Size = $module$korma_root_korma.com.soywiz.korma.geom.Size;
  var toIntFloor = $module$kmem_root_kmem.com.soywiz.kmem.toIntFloor_yrwdxr$;
  var toIntCeil = $module$kmem_root_kmem.com.soywiz.kmem.toIntCeil_yrwdxr$;
  var clamp = $module$kmem_root_kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var invalidOp = $module$korio_root_korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Sizeable = $module$korma_root_korma.com.soywiz.korma.geom.Sizeable;
  var throwCCE = Kotlin.throwCCE;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var numberToDouble = Kotlin.numberToDouble;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var divCeil = $module$kmem_root_kmem.com.soywiz.kmem.divCeil_dqglrj$;
  var Unit = Kotlin.kotlin.Unit;
  var toShort = Kotlin.toShort;
  var wrapFunction = Kotlin.wrapFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var numberToInt = Kotlin.numberToInt;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var toByte = Kotlin.toByte;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RectangleInt = $module$korma_root_korma.com.soywiz.korma.geom.RectangleInt;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Math_0 = Math;
  var Rectangle = $module$korma_root_korma.com.soywiz.korma.geom.Rectangle;
  var arrayfill = $module$kmem_root_kmem.com.soywiz.kmem.arrayfill_7lcbvb$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var lang = $module$korio_root_korio.com.soywiz.korio.lang;
  var insert = $module$kmem_root_kmem.com.soywiz.kmem.insert_4684dr$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UByteArrayInt = $module$kmem_root_kmem.com.soywiz.kmem.UByteArrayInt;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var SizeInt = $module$korma_root_korma.com.soywiz.korma.geom.SizeInt;
  var getCyclic = $module$kds_root_kds.com.soywiz.kds.getCyclic_r20n03$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toBase64 = $module$korio_root_korio.com.soywiz.korio.util.encoding.toBase64_964n91$;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var printStackTrace = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var get_length = $module$korio_root_korio.com.soywiz.korio.util.get_length_9tsm8a$;
  var clamp_0 = $module$kmem_root_kmem.com.soywiz.kmem.clamp_nig4hr$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var get_endExclusive = $module$korio_root_korio.com.soywiz.korio.util.get_endExclusive_9tsm8a$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Extra$PropertyThis = $module$kds_root_kds.com.soywiz.kds.Extra.PropertyThis;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var Any = Object;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var rect = $module$korma_root_korma.com.soywiz.korma.geom.vector.rect_clsz36$;
  var sum_0 = Kotlin.kotlin.collections.sum_l63kqw$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var extract8 = $module$kmem_root_kmem.com.soywiz.kmem.extract8_dqglrj$;
  var extractScaledFF = $module$kmem_root_kmem.com.soywiz.kmem.extractScaledFF_e4yvb3$;
  var extractScaledFFDefault = $module$kmem_root_kmem.com.soywiz.kmem.extractScaledFFDefault_4684dr$;
  var insertScaledFF = $module$kmem_root_kmem.com.soywiz.kmem.insertScaledFF_4684dr$;
  var readU16LE = $module$kmem_root_kmem.com.soywiz.kmem.readU16LE_mrm5p$;
  var getCallableRef = Kotlin.getCallableRef;
  var readU16BE = $module$kmem_root_kmem.com.soywiz.kmem.readU16BE_mrm5p$;
  var readU24LE = $module$kmem_root_kmem.com.soywiz.kmem.readU24LE_mrm5p$;
  var readU24BE = $module$kmem_root_kmem.com.soywiz.kmem.readU24BE_mrm5p$;
  var readS32LE = $module$kmem_root_kmem.com.soywiz.kmem.readS32LE_mrm5p$;
  var readS32BE = $module$kmem_root_kmem.com.soywiz.kmem.readS32BE_mrm5p$;
  var write16LE = $module$kmem_root_kmem.com.soywiz.kmem.write16LE_ietg8x$;
  var write16BE = $module$kmem_root_kmem.com.soywiz.kmem.write16BE_ietg8x$;
  var write24LE = $module$kmem_root_kmem.com.soywiz.kmem.write24LE_ietg8x$;
  var write24BE = $module$kmem_root_kmem.com.soywiz.kmem.write24BE_ietg8x$;
  var write32LE = $module$kmem_root_kmem.com.soywiz.kmem.write32LE_ietg8x$;
  var write32BE = $module$kmem_root_kmem.com.soywiz.kmem.write32BE_ietg8x$;
  var interpolate = $module$korma_root_korma.com.soywiz.korma.interpolation.interpolate_nig4hr$;
  var interpolate_0 = $module$korma_root_korma.com.soywiz.korma.interpolation.interpolate_i767ff$;
  var get_niceStr = $module$korio_root_korio.com.soywiz.korio.util.get_niceStr_yrwdxr$;
  var MutableInterpolable = $module$korma_root_korma.com.soywiz.korma.interpolation.MutableInterpolable;
  var Interpolable = $module$korma_root_korma.com.soywiz.korma.interpolation.Interpolable;
  var substr = $module$korio_root_korio.com.soywiz.korio.lang.substr_6ic1pp$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var substr_0 = $module$korio_root_korio.com.soywiz.korio.lang.substr_qgyqat$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var insert8 = $module$kmem_root_kmem.com.soywiz.kmem.insert8_e4yvb3$;
  var format = $module$korio_root_korio.com.soywiz.korio.lang.format_e33kwl$;
  var Comparable = Kotlin.kotlin.Comparable;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var GenericSubList = $module$kds_root_kds.com.soywiz.kds.GenericSubList;
  var contains = Kotlin.kotlin.collections.contains_c03ot6$;
  var indexOf = Kotlin.kotlin.collections.indexOf_c03ot6$;
  var lastIndexOf = Kotlin.kotlin.collections.lastIndexOf_c03ot6$;
  var GenericListIterator = $module$kds_root_kds.com.soywiz.kds.GenericListIterator;
  var List = Kotlin.kotlin.collections.List;
  var get_niceStr_0 = $module$korio_root_korio.com.soywiz.korio.util.get_niceStr_81szk$;
  var Vector3D = $module$korma_root_korma.com.soywiz.korma.geom.Vector3D;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var unquote = $module$korio_root_korio.com.soywiz.korio.util.unquote_pdl1vz$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var KDynamic = $module$korio_root_korio.com.soywiz.korio.dynamic.KDynamic;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toIntMap = $module$kds_root_kds.com.soywiz.kds.toIntMap_hx7udi$;
  var Xml = $module$korio_root_korio.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var get_0 = $module$korio_root_korio.com.soywiz.korio.serialization.xml.get_h00kq4$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var toChar = Kotlin.toChar;
  var String_fromIntArray = $module$korio_root_korio.com.soywiz.korio.lang.String_fromIntArray_nd5v6f$;
  var IntMap_init = $module$kds_root_kds.com.soywiz.kds.IntMap_init_42wstk$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var TimedResult_init = $module$klock_root_klock.com.soywiz.klock.TimedResult;
  var klock = $module$klock_root_klock.com.soywiz.klock;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var readS16LE = $module$korio_root_korio.com.soywiz.korio.stream.readS16LE_p2awyq$;
  var sliceStart = $module$korio_root_korio.com.soywiz.korio.stream.sliceStart_gezhyr$;
  var readU16BE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readU16BE_p2awyq$;
  var readStringz = $module$korio_root_korio.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS32BE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readS32BE_p2awyq$;
  var sliceWithSize = $module$korio_root_korio.com.soywiz.korio.stream.sliceWithSize_acdave$;
  var sliceWithSize_0 = $module$korio_root_korio.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var readAll = $module$korio_root_korio.com.soywiz.korio.stream.readAll_ucmi9i$;
  var toString = $module$korio_root_korio.com.soywiz.korio.lang.toString_5kit73$;
  var readBytesExact = $module$korio_root_korio.com.soywiz.korio.stream.readBytesExact_xpzb7k$;
  var FastByteArrayInputStream = $module$korio_root_korio.com.soywiz.korio.stream.FastByteArrayInputStream;
  var get_hex = $module$korio_root_korio.com.soywiz.korio.util.encoding.get_hex_s8ev3n$;
  var readS64BE = $module$korio_root_korio.com.soywiz.korio.stream.readS64BE_p2awyq$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var readS16BE = $module$korio_root_korio.com.soywiz.korio.stream.readS16BE_p2awyq$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var readCharArrayBE = $module$korio_root_korio.com.soywiz.korio.stream.readCharArrayBE_xpzb7k$;
  var readShortArrayBE = $module$korio_root_korio.com.soywiz.korio.stream.readShortArrayBE_xpzb7k$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_c03ot6$;
  var L0 = Kotlin.Long.ZERO;
  var readS8 = $module$korio_root_korio.com.soywiz.korio.stream.readS8_p2awyq$;
  var readU8 = $module$korio_root_korio.com.soywiz.korio.stream.readU8_p2awyq$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_tmsbgo$;
  var IntArrayList = $module$kds_root_kds.com.soywiz.kds.IntArrayList;
  var copyOf = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var readS32LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readS32LE_p2awyq$;
  var readBytes = $module$korio_root_korio.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var skip = $module$korio_root_korio.com.soywiz.korio.stream.skip_hsu5ns$;
  var write8 = $module$korio_root_korio.com.soywiz.korio.stream.write8_n5df9z$;
  var write32LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.write32LE_n5df9z$;
  var write16LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.write16LE_n5df9z$;
  var writeBytes = $module$korio_root_korio.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var readString = $module$korio_root_korio.com.soywiz.korio.stream.readString_6ey4ts$;
  var readStream = $module$korio_root_korio.com.soywiz.korio.stream.readStream_hsu5ns$;
  var readIntArrayLE = $module$korio_root_korio.com.soywiz.korio.stream.readIntArrayLE_xpzb7k$;
  var openSync = $module$korio_root_korio.com.soywiz.korio.stream.openSync_m1iwyb$;
  var Extra$Property = $module$kds_root_kds.com.soywiz.kds.Extra.Property;
  var setExtra = $module$kds_root_kds.com.soywiz.kds.setExtra_46skc7$;
  var readU32LE = $module$kmem_root_kmem.com.soywiz.kmem.readU32LE_mrm5p$;
  var L7 = Kotlin.Long.fromInt(7);
  var PathInfo = $module$korio_root_korio.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_root_korio.com.soywiz.korio.file.get_extensionLC_a72sjq$;
  var readU8_0 = $module$kmem_root_kmem.com.soywiz.kmem.readU8_mrm5p$;
  var readU16LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readU16LE_p2awyq$;
  var readU32BE = $module$korio_root_korio.com.soywiz.korio.stream.readU32BE_p2awyq$;
  var L2303741511 = new Kotlin.Long(-1991225785, 0);
  var MemorySyncStream = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var sliceArray = Kotlin.kotlin.collections.sliceArray_dww5cs$;
  var toByteArray = $module$korio_root_korio.com.soywiz.korio.stream.toByteArray_ucmi9i$;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var get_baseName = $module$korio_root_korio.com.soywiz.korio.file.get_baseName_hsf53c$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var ByteArrayBuilder_init = $module$korio_root_korio.$$importsForInline$$['kmem-root-kmem'].com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var MemorySyncStream_0 = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_i9anm0$;
  var get_hex_0 = $module$korio_root_korio.com.soywiz.korio.util.encoding.get_hex_964n91$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var toString_0 = Kotlin.toString;
  var readAll_0 = $module$korio_root_korio.com.soywiz.korio.stream.readAll_yjldv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var write32BE_0 = $module$korio_root_korio.com.soywiz.korio.stream.write32BE_n5df9z$;
  var toByteArray_0 = $module$korio_root_korio.com.soywiz.korio.lang.toByteArray_7jlb4b$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var checksum = $module$korio_root_korio.com.soywiz.korio.util.checksum;
  var convertRangeClamped = $module$kmem_root_kmem.com.soywiz.kmem.convertRangeClamped_legt9$;
  var ZLib = $module$korio_root_korio.com.soywiz.korio.compression.deflate.ZLib;
  var CompressionContext = $module$korio_root_korio.com.soywiz.korio.compression.CompressionContext;
  var compress = $module$korio_root_korio.com.soywiz.korio.compression.compress_t54tj5$;
  var write8_0 = $module$kmem_root_kmem.com.soywiz.kmem.write8_ietg8x$;
  var ByteArrayBuilder_init_0 = $module$kmem_root_kmem.com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var UByteArrayInt_0 = $module$kmem_root_kmem.com.soywiz.kmem.UByteArrayInt_za3lpa$;
  var readStream_0 = $module$korio_root_korio.com.soywiz.korio.stream.readStream_gezhyr$;
  var asByteArray = $module$kmem_root_kmem.com.soywiz.kmem.asByteArray_ngdjuy$;
  var get_eof = $module$korio_root_korio.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var uncompress = $module$korio_root_korio.com.soywiz.korio.compression.uncompress_ms6xh0$;
  var extract = $module$kmem_root_kmem.com.soywiz.kmem.extract_e4yvb3$;
  var readAvailable = $module$korio_root_korio.com.soywiz.korio.stream.readAvailable_ucmi9i$;
  var openFastStream = $module$korio_root_korio.com.soywiz.korio.stream.openFastStream_mrm5p$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var Array_0 = Array;
  var plus_0 = Kotlin.kotlin.collections.plus_ws1dkn$;
  var minus = Kotlin.kotlin.collections.minus_ws1dkn$;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var clamp01 = $module$kmem_root_kmem.com.soywiz.kmem.clamp01_81szk$;
  var transformed = $module$korma_root_korma.com.soywiz.korma.geom.transformed_4z5n62$;
  var bounds = $module$korma_root_korma.com.soywiz.korma.geom.bounds_9zueiu$;
  var toPathList = $module$korma_root_korma.com.soywiz.korma.geom.shape.toPathList_jvwkvo$;
  var toPoints = $module$korma_root_korma.com.soywiz.korma.geom.toPoints_qj0m41$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var Matrix = $module$korma_root_korma.com.soywiz.korma.geom.Matrix;
  var distanceTo = $module$korma_root_korma.com.soywiz.korma.geom.distanceTo_5jbsoh$;
  var Angle = $module$korma_root_korma.com.soywiz.korma.geom.Angle;
  var transformX = $module$korma_root_korma.com.soywiz.korma.geom.transformX_ccqrid$;
  var clamp01_0 = $module$kmem_root_kmem.com.soywiz.kmem.clamp01_yrwdxr$;
  var transformY = $module$korma_root_korma.com.soywiz.korma.geom.transformY_ccqrid$;
  var DoubleArrayList_init = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList_init_avch8c$;
  var IntArrayList_init = $module$kds_root_kds.com.soywiz.kds.IntArrayList_init_38vc8i$;
  var DoubleArrayList = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList;
  var Stack = $module$kds_root_kds.com.soywiz.kds.Stack;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Disposable = $module$korio_root_korio.com.soywiz.korio.lang.Disposable;
  var VectorBuilder = $module$korma_root_korma.com.soywiz.korma.geom.vector.VectorBuilder;
  var RedirectMutableFieldGen_init = $module$korio_root_korio.com.soywiz.korio.util.RedirectMutableFieldGen;
  var VectorPath$Winding = $module$korma_root_korma.com.soywiz.korma.geom.vector.VectorPath.Winding;
  var VectorPath = $module$korma_root_korma.com.soywiz.korma.geom.vector.VectorPath;
  var Xml_0 = $module$korio_root_korio.com.soywiz.korio.serialization.xml.Xml;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var toStringDecimal = $module$korio_root_korio.com.soywiz.korio.util.toStringDecimal_9rbwic$;
  var BoundsBuilder = $module$korma_root_korma.com.soywiz.korma.geom.BoundsBuilder;
  var add = $module$korma_root_korma.com.soywiz.korma.geom.vector.add_1ik72i$;
  var plus_1 = Kotlin.kotlin.collections.plus_iwxh38$;
  var add_0 = $module$korma_root_korma.com.soywiz.korma.geom.add_wm3ouy$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var isEmpty = $module$korma_root_korma.com.soywiz.korma.geom.vector.isEmpty_6jcdf2$;
  var max = Kotlin.kotlin.collections.max_l63kqw$;
  var max_0 = Kotlin.kotlin.collections.max_exjks8$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Pair = Kotlin.kotlin.Pair;
  var trim_0 = Kotlin.kotlin.text.trim_wqw3xr$;
  var get_allChildren = $module$korio_root_korio.com.soywiz.korio.serialization.xml.get_allChildren_ibjdnu$;
  var get_isComment = $module$korio_root_korio.com.soywiz.korio.serialization.xml.get_isComment_byavcz$;
  var roundRect = $module$korma_root_korma.com.soywiz.korma.geom.vector.roundRect_eslsqu$;
  var circle = $module$korma_root_korma.com.soywiz.korma.geom.vector.circle_m5r0a8$;
  var StrReader = $module$korio_root_korio.com.soywiz.korio.util.StrReader;
  var get_isNumeric = $module$korio_root_korio.com.soywiz.korio.util.get_isNumeric_myv2d0$;
  var ListReader = $module$kds_root_kds.com.soywiz.kds.ListReader;
  var isDigit = $module$korio_root_korio.com.soywiz.korio.util.isDigit_myv2d0$;
  var isLetterOrUnderscore = $module$korio_root_korio.com.soywiz.korio.util.isLetterOrUnderscore_myv2d0$;
  var expect = $module$kds_root_kds.com.soywiz.kds.expect_2mact2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var util = $module$korio_root_korio.com.soywiz.korio.util;
  var LocalVfs = $module$korio_root_korio.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio_root_korio.com.soywiz.korio.file.std.UrlVfs;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  BitmapIndexed.prototype = Object.create(Bitmap.prototype);
  BitmapIndexed.prototype.constructor = BitmapIndexed;
  Bitmap1.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap1.prototype.constructor = Bitmap1;
  Bitmap16.prototype = Object.create(Bitmap.prototype);
  Bitmap16.prototype.constructor = Bitmap16;
  Bitmap2.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap2.prototype.constructor = Bitmap2;
  Bitmap32.prototype = Object.create(Bitmap.prototype);
  Bitmap32.prototype.constructor = Bitmap32;
  Bitmap4.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap4.prototype.constructor = Bitmap4;
  Bitmap8.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap8.prototype.constructor = Bitmap8;
  BitmapChannel.prototype = Object.create(Enum.prototype);
  BitmapChannel.prototype.constructor = BitmapChannel;
  NativeImage.prototype = Object.create(Bitmap.prototype);
  NativeImage.prototype.constructor = NativeImage;
  Colors$Default.prototype = Object.create(Colors$WithDefault.prototype);
  Colors$Default.prototype.constructor = Colors$Default;
  RGB.prototype = Object.create(ColorFormat24.prototype);
  RGB.prototype.constructor = RGB;
  RGB$Companion.prototype = Object.create(RGB.prototype);
  RGB$Companion.prototype.constructor = RGB$Companion;
  BGR.prototype = Object.create(RGB.prototype);
  BGR.prototype.constructor = BGR;
  RGBA$Companion.prototype = Object.create(ColorFormat32.prototype);
  RGBA$Companion.prototype.constructor = RGBA$Companion;
  YCbCr$Companion.prototype = Object.create(ColorFormat32.prototype);
  YCbCr$Companion.prototype.constructor = YCbCr$Companion;
  YUVA$Companion.prototype = Object.create(ColorFormat32.prototype);
  YUVA$Companion.prototype.constructor = YUVA$Companion;
  TtfFont$NameIds.prototype = Object.create(Enum.prototype);
  TtfFont$NameIds.prototype.constructor = TtfFont$NameIds;
  TtfFont$Origin.prototype = Object.create(Enum.prototype);
  TtfFont$Origin.prototype.constructor = TtfFont$Origin;
  BMP$BmImageInfo.prototype = Object.create(ImageInfo.prototype);
  BMP$BmImageInfo.prototype.constructor = BMP$BmImageInfo;
  BMP.prototype = Object.create(ImageFormat.prototype);
  BMP.prototype.constructor = BMP;
  DDS.prototype = Object.create(ImageFormat.prototype);
  DDS.prototype.constructor = DDS;
  DXT.prototype = Object.create(ImageFormat.prototype);
  DXT.prototype.constructor = DXT;
  DXT1Base.prototype = Object.create(DXT.prototype);
  DXT1Base.prototype.constructor = DXT1Base;
  DXT1.prototype = Object.create(DXT1Base.prototype);
  DXT1.prototype.constructor = DXT1;
  DXT2_3.prototype = Object.create(DXT.prototype);
  DXT2_3.prototype.constructor = DXT2_3;
  DXT2.prototype = Object.create(DXT2_3.prototype);
  DXT2.prototype.constructor = DXT2;
  DXT3.prototype = Object.create(DXT2_3.prototype);
  DXT3.prototype.constructor = DXT3;
  DXT4_5.prototype = Object.create(DXT.prototype);
  DXT4_5.prototype.constructor = DXT4_5;
  DXT4.prototype = Object.create(DXT4_5.prototype);
  DXT4.prototype.constructor = DXT4;
  DXT5.prototype = Object.create(DXT4_5.prototype);
  DXT5.prototype.constructor = DXT5;
  ICO.prototype = Object.create(ImageFormat.prototype);
  ICO.prototype.constructor = ICO;
  ImageFormats.prototype = Object.create(ImageFormat.prototype);
  ImageFormats.prototype.constructor = ImageFormats;
  PNG$Colorspace.prototype = Object.create(Enum.prototype);
  PNG$Colorspace.prototype.constructor = PNG$Colorspace;
  PNG.prototype = Object.create(ImageFormat.prototype);
  PNG.prototype.constructor = PNG;
  PSD$PsdImageInfo.prototype = Object.create(ImageInfo.prototype);
  PSD$PsdImageInfo.prototype.constructor = PSD$PsdImageInfo;
  PSD.prototype = Object.create(ImageFormat.prototype);
  PSD.prototype.constructor = PSD;
  RegisteredImageFormats.prototype = Object.create(ImageFormat.prototype);
  RegisteredImageFormats.prototype.constructor = RegisteredImageFormats;
  SVG.prototype = Object.create(ImageFormat.prototype);
  SVG.prototype.constructor = SVG;
  TGA.prototype = Object.create(ImageFormat.prototype);
  TGA.prototype.constructor = TGA;
  Bitmap32Context2d$NoneFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$NoneFiller.prototype.constructor = Bitmap32Context2d$NoneFiller;
  Bitmap32Context2d$ColorFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$ColorFiller.prototype.constructor = Bitmap32Context2d$ColorFiller;
  Bitmap32Context2d$BitmapFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$BitmapFiller.prototype.constructor = Bitmap32Context2d$BitmapFiller;
  Bitmap32Context2d$GradientFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$GradientFiller.prototype.constructor = Bitmap32Context2d$GradientFiller;
  Bitmap32Context2d.prototype = Object.create(Context2d$Renderer.prototype);
  Bitmap32Context2d.prototype.constructor = Bitmap32Context2d;
  Context2d$LineCap.prototype = Object.create(Enum.prototype);
  Context2d$LineCap.prototype.constructor = Context2d$LineCap;
  Context2d$LineJoin.prototype = Object.create(Enum.prototype);
  Context2d$LineJoin.prototype.constructor = Context2d$LineJoin;
  Context2d$CycleMethod.prototype = Object.create(Enum.prototype);
  Context2d$CycleMethod.prototype.constructor = Context2d$CycleMethod;
  Context2d$ShapeRasterizerMethod.prototype = Object.create(Enum.prototype);
  Context2d$ShapeRasterizerMethod.prototype.constructor = Context2d$ShapeRasterizerMethod;
  Context2d$ScaledRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$ScaledRenderer.prototype.constructor = Context2d$ScaledRenderer;
  Context2d$BufferedRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$BufferedRenderer.prototype.constructor = Context2d$BufferedRenderer;
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype.constructor = Context2d$Renderer$Companion$DUMMY$ObjectLiteral;
  Context2d$VerticalAlign.prototype = Object.create(Enum.prototype);
  Context2d$VerticalAlign.prototype.constructor = Context2d$VerticalAlign;
  Context2d$HorizontalAlign.prototype = Object.create(Enum.prototype);
  Context2d$HorizontalAlign.prototype.constructor = Context2d$HorizontalAlign;
  Context2d$ScaleMode.prototype = Object.create(Enum.prototype);
  Context2d$ScaleMode.prototype.constructor = Context2d$ScaleMode;
  Context2d$Gradient$Kind.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$Kind.prototype.constructor = Context2d$Gradient$Kind;
  Context2d$Gradient$Units.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$Units.prototype.constructor = Context2d$Gradient$Units;
  Context2d$Gradient$InterpolationMethod.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$InterpolationMethod.prototype.constructor = Context2d$Gradient$InterpolationMethod;
  GraphicsPath.prototype = Object.create(VectorPath.prototype);
  GraphicsPath.prototype.constructor = GraphicsPath;
  ShapeBuilder.prototype = Object.create(Context2d.prototype);
  ShapeBuilder.prototype.constructor = ShapeBuilder;
  ChartBars$Fit.prototype = Object.create(Enum.prototype);
  ChartBars$Fit.prototype.constructor = ChartBars$Fit;
  ChartBars.prototype = Object.create(Chart.prototype);
  ChartBars.prototype.constructor = ChartBars;
  SVG$GradientUnits.prototype = Object.create(Enum.prototype);
  SVG$GradientUnits.prototype.constructor = SVG$GradientUnits;
  HtmlNativeImage.prototype = Object.create(NativeImage.prototype);
  HtmlNativeImage.prototype.constructor = HtmlNativeImage;
  HtmlNativeImageFormatProvider.prototype = Object.create(NativeImageFormatProvider.prototype);
  HtmlNativeImageFormatProvider.prototype.constructor = HtmlNativeImageFormatProvider;
  CanvasContext2dRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  CanvasContext2dRenderer.prototype.constructor = CanvasContext2dRenderer;
  function Korim() {
    Korim_instance = this;
    this.VERSION = KORIM_VERSION;
  }
  Korim.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korim',
    interfaces: []
  };
  var Korim_instance = null;
  function Korim_getInstance() {
    if (Korim_instance === null) {
      new Korim();
    }
    return Korim_instance;
  }
  function Bitmap(width, height, bpp, premultiplied, backingArray) {
    this.width = width;
    this.height = height;
    this.bpp = bpp;
    this.premultiplied = premultiplied;
    this.backingArray = backingArray;
    this.$delegate_uler2c$_0 = new Extra$Mixin();
    this.texture = null;
  }
  Object.defineProperty(Bitmap.prototype, 'stride', {
    get: function () {
      return Kotlin.imul(this.width, this.bpp) / 8 | 0;
    }
  });
  Object.defineProperty(Bitmap.prototype, 'area', {
    get: function () {
      return Kotlin.imul(this.width, this.height);
    }
  });
  Bitmap.prototype.index_vux9f0$ = function (x, y) {
    return Kotlin.imul(y, this.width) + x | 0;
  };
  Object.defineProperty(Bitmap.prototype, 'size', {
    get: function () {
      var width = this.width;
      var height = this.height;
      return new Size(new Point(numberToDouble(width), numberToDouble(height)));
    }
  });
  Bitmap.prototype.setRgba_ci55m7$ = function (x, y, v) {
    throw new NotImplementedError_init();
  };
  Bitmap.prototype.getRgba_vux9f0$ = function (x, y) {
    return Colors_getInstance().TRANSPARENT_BLACK;
  };
  Bitmap.prototype.setInt_qt1dr2$ = function (x, y, color) {
  };
  Bitmap.prototype.getInt_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.getRgbaClamped_vux9f0$ = function (x, y) {
    return this.inBounds_vux9f0$(x, y) ? this.getRgba_vux9f0$(x, y) : Colors_getInstance().TRANSPARENT_BLACK;
  };
  Bitmap.prototype.getRgbaSampled_lu1900$ = function (x, y) {
    if (x < 0.0 || x >= this.width || y < 0.0 || y >= this.height)
      return Colors_getInstance().TRANSPARENT_BLACK;
    var x0 = toIntFloor(x);
    var x1 = toIntCeil(x);
    var y0 = toIntFloor(y);
    var y1 = toIntCeil(y);
    var xratio = x % 1;
    var yratio = y % 1;
    var c00 = this.getRgbaClamped_vux9f0$(x0, y0);
    var c10 = this.inBounds_vux9f0$(x1, y0) ? this.getRgbaClamped_vux9f0$(x1, y0) : c00;
    var c01 = this.inBounds_vux9f0$(x1, y1) ? this.getRgbaClamped_vux9f0$(x0, y1) : c00;
    var c11 = this.inBounds_vux9f0$(x1, y1) ? this.getRgbaClamped_vux9f0$(x1, y1) : c01;
    var c1 = RGBA$Companion_getInstance().mixRgba_utyrs$(c00, c10, xratio);
    var c2 = RGBA$Companion_getInstance().mixRgba_utyrs$(c01, c11, xratio);
    return RGBA$Companion_getInstance().mixRgba_utyrs$(c1, c2, yratio);
  };
  Bitmap.prototype.getRgbaSampled_mm2q0a$ = function (x, y, count, row) {
    for (var n = 0; n < count; n++) {
      row.set_vlvk8p$(n, this.getRgbaSampled_lu1900$(x + n, y));
    }
  };
  Bitmap.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        dst.setInt_qt1dr2$(dstX + x | 0, dstY, this.getInt_vux9f0$(srcX + x | 0, srcY));
      }
    }
  };
  Bitmap.prototype.inBoundsX_za3lpa$ = function (x) {
    return x >= 0 && x < this.width;
  };
  Bitmap.prototype.inBoundsY_za3lpa$ = function (y) {
    return y >= 0 && y < this.height;
  };
  Bitmap.prototype.inBounds_vux9f0$ = function (x, y) {
    return this.inBoundsX_za3lpa$(x) && this.inBoundsY_za3lpa$(y);
  };
  Bitmap.prototype.clampX_za3lpa$ = function (x) {
    return clamp(x, 0, this.width - 1 | 0);
  };
  Bitmap.prototype.clampY_za3lpa$ = function (y) {
    return clamp(y, 0, this.height - 1 | 0);
  };
  Bitmap.prototype.clampWidth_za3lpa$ = function (x) {
    return clamp(x, 0, this.width);
  };
  Bitmap.prototype.clampHeight_za3lpa$ = function (y) {
    return clamp(y, 0, this.height);
  };
  Bitmap.prototype.flipY = function () {
    var tmp$;
    tmp$ = this.height / 2 | 0;
    for (var y = 0; y < tmp$; y++)
      this.swapRows_vux9f0$(y, this.height - y - 1 | 0);
    return this;
  };
  Bitmap.prototype.flipX = function () {
    var tmp$;
    tmp$ = this.width / 2 | 0;
    for (var x = 0; x < tmp$; x++)
      this.swapColumns_vux9f0$(x, this.width - x - 1 | 0);
    return this;
  };
  Bitmap.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var tmp$;
    tmp$ = this.width;
    for (var x = 0; x < tmp$; x++) {
      var c0 = this.getInt_vux9f0$(x, y0);
      var c1 = this.getInt_vux9f0$(x, y1);
      this.setInt_qt1dr2$(x, y0, c1);
      this.setInt_qt1dr2$(x, y1, c0);
    }
  };
  Bitmap.prototype.swapColumns_vux9f0$ = function (x0, x1) {
    var tmp$;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      var c0 = this.getInt_vux9f0$(x0, y);
      var c1 = this.getInt_vux9f0$(x1, y);
      this.setInt_qt1dr2$(x0, y, c1);
      this.setInt_qt1dr2$(x1, y, c0);
    }
  };
  Bitmap.prototype.forEach_50fifn$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap.forEach_50fifn$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        callback((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), x, y);
      }
    }
  });
  Bitmap.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    throw UnsupportedOperationException_init('Not implemented context2d on Bitmap, please use NativeImage or Bitmap32 instead');
  };
  Bitmap.prototype.getContext2d_6taknv$ = function (antialiasing, callback$default) {
    if (antialiasing === void 0)
      antialiasing = true;
    return callback$default ? callback$default(antialiasing) : this.getContext2d_6taknv$$default(antialiasing);
  };
  Bitmap.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return invalidOp('Unsupported createWithThisFormat (' + this + ')');
  };
  Bitmap.prototype.toBMP32 = function () {
    var $receiver = new Bitmap32(this.width, this.height, void 0, this.premultiplied);
    var tmp$, tmp$_0, tmp$_1;
    var array = $receiver.data;
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        array.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), this.getRgba_vux9f0$(x, y));
      }
    }
    return $receiver;
  };
  Bitmap.prototype.contentEquals_uler2c$ = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.width !== other.width)
      return false;
    if (this.height !== other.height)
      return false;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        if (!((tmp$_1 = this.getRgba_vux9f0$(x, y)) != null ? tmp$_1.equals(other.getRgba_vux9f0$(x, y)) : null))
          return false;
      }
    }
    return true;
  };
  Object.defineProperty(Bitmap.prototype, 'extra', {
    get: function () {
      return this.$delegate_uler2c$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_uler2c$_0.extra = tmp$;
    }
  });
  Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: [Extra, Sizeable]
  };
  function createWithThisFormatTyped($receiver, width, height) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.createWithThisFormat_vux9f0$(width, height), Bitmap) ? tmp$ : throwCCE();
  }
  function extract_0($receiver, x, y, width, height) {
    var out = createWithThisFormatTyped($receiver, width, height);
    $receiver.copy_akhah0$(x, y, out, 0, 0, width, height);
    return out;
  }
  var context2d = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.context2d_rr3dot$', function ($receiver, antialiased, callback) {
    if (antialiased === void 0)
      antialiased = true;
    var ctx = $receiver.getContext2d_6taknv$(antialiased);
    try {
      callback(ctx);
    }
    finally {
      ctx.dispose();
    }
    return $receiver;
  });
  function checkMatchDimensions($receiver, other) {
    if (!($receiver.width === other.width && $receiver.height === other.height)) {
      var message = "Bitmap doesn't have the same dimensions (" + $receiver.width + 'x' + $receiver.height + ') != (' + other.width + 'x' + other.height + ')';
      throw IllegalStateException_init(message.toString());
    }
    return other;
  }
  function Bitmap1(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(divCeil(Kotlin.imul(width, height), 8));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(2);
    BitmapIndexed.call(this, 1, width, height, data, palette);
  }
  Bitmap1.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap1(width, height);
  };
  Bitmap1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap1',
    interfaces: [BitmapIndexed]
  };
  var arraycopy$lambda = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Bitmap16(width, height, data, format, premultiplied) {
    if (data === void 0)
      data = new Int16Array(Kotlin.imul(width, height));
    if (format === void 0)
      format = RGBA_4444_getInstance();
    if (premultiplied === void 0)
      premultiplied = false;
    Bitmap.call(this, width, height, 16, premultiplied, data);
    this.data = data;
    this.format = format;
  }
  Bitmap16.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap16(width, height, void 0, this.format, this.premultiplied);
  };
  Bitmap16.prototype.set_qt1dr2$ = function (x, y, color) {
    this.setInt_qt1dr2$(x, y, color);
  };
  Bitmap16.prototype.get_vux9f0$ = function (x, y) {
    return this.getInt_vux9f0$(x, y);
  };
  Bitmap16.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.data[this.index_vux9f0$(x, y)] = toShort(color);
  };
  Bitmap16.prototype.getInt_vux9f0$ = function (x, y) {
    return this.data[this.index_vux9f0$(x, y)] & 65535;
  };
  Bitmap16.prototype.setRgba_ci55m7$ = function (x, y, v) {
    this.setInt_qt1dr2$(x, y, packRGBA(this.format, v));
  };
  Bitmap16.prototype.getRgba_vux9f0$ = function (x, y) {
    return unpackToRGBA(this.format, this.data[this.index_vux9f0$(x, y)]);
  };
  Bitmap16.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var tmp$;
    var src = this;
    var srcArray = src.data;
    var srcIndex = src.index_vux9f0$(srcX, srcY);
    var srcAdd = src.width;
    var dstArray = (Kotlin.isType(tmp$ = dst, Bitmap16) ? tmp$ : throwCCE()).data;
    var dstIndex = dst.index_vux9f0$(dstX, dstY);
    var dstAdd = dst.width;
    for (var y = 0; y < height; y++) {
      var srcPos = srcIndex;
      arrayCopy(srcArray, dstArray, dstIndex, srcPos, srcPos + width | 0);
      srcIndex = srcIndex + srcAdd | 0;
      dstIndex = dstIndex + dstAdd | 0;
    }
  };
  Bitmap16.prototype.toString = function () {
    return 'Bitmap16(' + this.width + ', ' + this.height + ', format=' + this.format + ')';
  };
  Bitmap16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap16',
    interfaces: [Bitmap]
  };
  function Bitmap2(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(divCeil(Kotlin.imul(width, height), 4));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(4);
    BitmapIndexed.call(this, 2, width, height, data, palette);
  }
  Bitmap2.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap2(width, height);
  };
  Bitmap2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap2',
    interfaces: [BitmapIndexed]
  };
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Bitmap32(width, height, data, premultiplied) {
    Bitmap32$Companion_getInstance();
    if (data === void 0)
      data = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(width, height));
    if (premultiplied === void 0)
      premultiplied = false;
    Bitmap.call(this, width, height, 32, premultiplied, data);
    this.data = data;
    this.dataPremult = new RgbaPremultipliedArray(this.data.ints);
    if (this.data.size < Kotlin.imul(width, height))
      throw RuntimeException_init('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.size + '), area=' + Kotlin.imul(width, height));
    this.temp_0 = RgbaArray$Companion_getInstance().invoke_za3lpa$(Math_0.max(width, height));
    this.bounds = new RectangleInt(new Rectangle(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height)));
  }
  Bitmap32.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap32(width, height, void 0, this.premultiplied);
  };
  Bitmap32.prototype.copyTo_59u9qz$ = function (other) {
    var $receiver = checkMatchDimensions(this, other);
    arraycopy(this.data, 0, other.data, 0, this.data.size);
    return $receiver;
  };
  Bitmap32.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var tmp$;
    var src = this;
    var srcX0 = src.clampWidth_za3lpa$(srcX);
    var srcX1 = src.clampWidth_za3lpa$(srcX + width | 0);
    var srcY0 = src.clampHeight_za3lpa$(srcY);
    var srcY1 = src.clampHeight_za3lpa$(srcY + height | 0);
    var dstX0 = dst.clampWidth_za3lpa$(dstX);
    var dstX1 = dst.clampWidth_za3lpa$(dstX + width | 0);
    var dstY0 = dst.clampHeight_za3lpa$(dstY);
    var dstY1 = dst.clampHeight_za3lpa$(dstY + height | 0);
    var srcX_0 = srcX0;
    var srcY_0 = srcY0;
    var dstX_0 = dstX0;
    var dstY_0 = dstY0;
    var a = srcX1 - srcX0 | 0;
    var b = dstX1 - dstX0 | 0;
    var width_0 = Math_0.min(a, b);
    var a_0 = srcY1 - srcY0 | 0;
    var b_0 = dstY1 - dstY0 | 0;
    var height_0 = Math_0.min(a_0, b_0);
    var srcArray = src.data;
    var srcIndex = src.index_vux9f0$(srcX_0, srcY_0);
    var srcAdd = src.width;
    var dstArray = (Kotlin.isType(tmp$ = dst, Bitmap32) ? tmp$ : throwCCE()).data;
    var dstIndex = dst.index_vux9f0$(dstX_0, dstY_0);
    var dstAdd = dst.width;
    for (var y = 0; y < height_0; y++) {
      var srcPos = srcIndex;
      arrayCopy(srcArray.ints, dstArray.ints, dstIndex, srcPos, srcPos + width_0 | 0);
      srcIndex = srcIndex + srcAdd | 0;
      dstIndex = dstIndex + dstAdd | 0;
    }
  };
  Bitmap32.prototype.set_ci55m7$ = function (x, y, color) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), color);
  };
  Bitmap32.prototype.get_vux9f0$ = function (x, y) {
    return this.data.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap32.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), new RGBA(color));
  };
  Bitmap32.prototype.getInt_vux9f0$ = function (x, y) {
    return this.data.ints[this.index_vux9f0$(x, y)];
  };
  Bitmap32.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.data.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap32.prototype.setRgba_ci55m7$ = function (x, y, v) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), v);
  };
  Bitmap32.prototype.setRow_aio0fn$ = function (y, row) {
    arrayCopy(row, this.data.ints, this.index_vux9f0$(0, y), 0, 0 + this.width | 0);
  };
  Bitmap32.prototype._draw_dd24ng$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix_0) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var dstData = dst.data;
    var srcData = src.data;
    var dstDataPremult = dst.dataPremult;
    var srcDataPremult = src.dataPremult;
    var dstPremultiplied = this.premultiplied;
    var srcPremultiplied = src.premultiplied;
    for (var y = 0; y < height; y++) {
      var dstOffset = dst.index_vux9f0$(dx, dy + y | 0);
      var srcOffset = src.index_vux9f0$(sleft, stop + y | 0);
      if (mix_0) {
        if (dstPremultiplied && srcPremultiplied) {
          for (var x = 0; x < width; x++)
            dstDataPremult.set_wpz7qp$(dstOffset + x | 0, mix(dstDataPremult.get_za3lpa$(dstOffset + x | 0), srcDataPremult.get_za3lpa$(srcOffset + x | 0)));
        }
         else if (dstPremultiplied && !srcPremultiplied) {
          for (var x_0 = 0; x_0 < width; x_0++)
            dstDataPremult.set_wpz7qp$(dstOffset + x_0 | 0, mix(dstDataPremult.get_za3lpa$(dstOffset + x_0 | 0), srcData.get_za3lpa$(srcOffset + x_0 | 0).premultiplied));
        }
         else if (!dstPremultiplied && srcPremultiplied) {
          for (var x_1 = 0; x_1 < width; x_1++)
            dstData.set_vlvk8p$(dstOffset + x_1 | 0, mix(dstData.get_za3lpa$(dstOffset + x_1 | 0).premultiplied, srcDataPremult.get_za3lpa$(srcOffset + x_1 | 0)).depremultiplied);
        }
         else if (!dstPremultiplied && !srcPremultiplied) {
          for (var x_2 = 0; x_2 < width; x_2++)
            dstData.set_vlvk8p$(dstOffset + x_2 | 0, mix(dstData.get_za3lpa$(dstOffset + x_2 | 0).premultiplied, srcData.get_za3lpa$(srcOffset + x_2 | 0).premultiplied).depremultiplied);
        }
      }
       else {
        if (dstPremultiplied === srcPremultiplied)
          arraycopy(srcData, srcOffset, dstData, dstOffset, width);
        else if (dstPremultiplied && !srcPremultiplied) {
          for (var x_3 = 0; x_3 < width; x_3++)
            dstDataPremult.set_wpz7qp$(dstOffset + x_3 | 0, srcData.get_za3lpa$(srcOffset + x_3 | 0).premultiplied);
        }
         else if (!dstPremultiplied && srcPremultiplied) {
          for (var x_4 = 0; x_4 < width; x_4++)
            dstData.set_vlvk8p$(dstOffset + x_4 | 0, srcDataPremult.get_za3lpa$(srcOffset + x_4 | 0).depremultiplied);
        }
      }
    }
  };
  Bitmap32.prototype.drawPixelMixed_ci55m7$ = function (x, y, c) {
    this.set_ci55m7$(x, y, RGBA$Companion_getInstance().mix_jh0t86$(this.get_vux9f0$(x, y), c));
  };
  Bitmap32.prototype._drawPut_11mu8c$ = function (mix, other, _dx, _dy) {
    if (_dx === void 0)
      _dx = 0;
    if (_dy === void 0)
      _dy = 0;
    var dx = _dx;
    var dy = _dy;
    var sleft = 0;
    var stop = 0;
    var sright = other.width;
    var sbottom = other.height;
    if (dx < 0) {
      sleft = -dx | 0;
      dx = 0;
    }
    if (dy < 0) {
      stop = -dy | 0;
      dy = 0;
    }
    this._draw_dd24ng$(other, dx, dy, sleft, stop, sright, sbottom, mix);
  };
  Bitmap32.prototype.historiogram_9bhpaq$ = function (channel, out) {
    if (out === void 0)
      out = new Int32Array(256);
    if (!(out.length >= 256)) {
      var message = 'output array size must be 256';
      throw IllegalStateException_init(message.toString());
    }
    arrayfill(out, 0, 0, out.length);
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var tmp$_2;
        tmp$_2 = channel.extract_md34sx$(this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1)));
        out[tmp$_2] = out[tmp$_2] + 1 | 0;
      }
    }
    return out;
  };
  Bitmap32.prototype.fill_kuukgh$ = function (color, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width - x | 0;
    if (height === void 0)
      height = this.height - y | 0;
    var x1 = this.clampX_za3lpa$(x);
    var x2 = this.clampX_za3lpa$(x + width - 1 | 0);
    var y1 = this.clampY_za3lpa$(y);
    var y2 = this.clampY_za3lpa$(y + height - 1 | 0);
    for (var cy = y1; cy <= y2; cy++)
      this.data.fill_eb600h$(color, this.index_vux9f0$(x1, cy), this.index_vux9f0$(x2, cy) + 1 | 0);
  };
  Bitmap32.prototype._draw_uui62f$ = function (src, dx, dy, mix) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    var b = src.bounds;
    var availableWidth = this.width - dx | 0;
    var availableHeight = this.height - dy | 0;
    var b_0 = b.width;
    var awidth = Math_0.min(availableWidth, b_0);
    var b_1 = b.height;
    var aheight = Math_0.min(availableHeight, b_1);
    this._draw_dd24ng$(src.bmp, dx, dy, b.x, b.y, b.x + awidth | 0, b.y + aheight | 0, mix);
  };
  Bitmap32.prototype.put_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(false, src, dx, dy);
  };
  Bitmap32.prototype.draw_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(true, src, dx, dy);
  };
  Bitmap32.prototype.put_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, false);
  };
  Bitmap32.prototype.draw_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, true);
  };
  Bitmap32.prototype.drawUnoptimized_w6lfje$ = function (src, dx, dy, mix) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    if (mix === void 0)
      mix = true;
    var tmp$;
    if (Kotlin.isType(src.bmp, Bitmap32)) {
      this._draw_uui62f$(Kotlin.isType(tmp$ = src, BitmapSlice) ? tmp$ : throwCCE(), dx, dy, mix);
    }
     else {
      this.drawUnoptimized_oe1aq3$(src.bmp, dx, dy, src.left, src.top, src.right, src.bottom, mix);
    }
  };
  Bitmap32.prototype.drawUnoptimized_oe1aq3$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var dstData = dst.data;
    for (var y = 0; y < height; y++) {
      var dstOffset = dst.index_vux9f0$(dx, dy + y | 0);
      if (mix) {
        for (var x = 0; x < width; x++)
          dstData.set_vlvk8p$(dstOffset + x | 0, RGBA$Companion_getInstance().mix_jh0t86$(dstData.get_za3lpa$(dstOffset + x | 0), src.getRgba_vux9f0$(sleft + x | 0, stop + y | 0)));
      }
       else {
        for (var x_0 = 0; x_0 < width; x_0++)
          dstData.set_vlvk8p$(dstOffset + x_0 | 0, src.getRgba_vux9f0$(sleft + x_0 | 0, stop + y | 0));
      }
    }
  };
  Bitmap32.prototype.copySliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return this.copySliceWithSize_tjonv8$(left, top, right - left | 0, bottom - top | 0);
  };
  Bitmap32.prototype.copySliceWithSize_tjonv8$ = function (x, y, width, height) {
    var $receiver = new Bitmap32(width, height);
    for (var yy = 0; yy < height; yy++) {
      arraycopy(this.data, this.index_vux9f0$(x, y + yy | 0), $receiver.data, $receiver.index_vux9f0$(0, yy), width);
    }
    return $receiver;
  };
  Bitmap32.prototype.any_vcmugg$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.any_vcmugg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var Collection = Kotlin.kotlin.collections.Collection;
    return function (callback) {
      var $receiver = until(0, this.area);
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (callback(this.data.get_za3lpa$(element))) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }));
  Bitmap32.prototype.all_vcmugg$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.all_vcmugg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var Collection = Kotlin.kotlin.collections.Collection;
    return function (callback) {
      var $receiver = until(0, this.area);
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!callback(this.data.get_za3lpa$(element))) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }));
  Bitmap32.prototype.setEach_xn9fzl$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.setEach_xn9fzl$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        this.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), callback(x, y));
      }
    }
  });
  Bitmap32.prototype.updateColors_nwnvpc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.updateColors_nwnvpc$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, callback(this.data.get_za3lpa$(n_0)));
      }
    }
  });
  Bitmap32.prototype.updateColorsXY_covpbs$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.updateColorsXY_covpbs$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, callback(x, y, this.data.get_za3lpa$(n_0)));
      }
    }
  });
  Bitmap32.prototype.writeChannel_ccmnuj$ = function (destination, input, source) {
    Bitmap32$Companion_getInstance().copyChannel_ravo8c$(input, source, this, destination);
  };
  Bitmap32.prototype.writeChannel_z3s5mf$ = function (destination, input) {
    Bitmap32$Companion_getInstance().copyChannel_b84796$(input, this, destination);
  };
  Bitmap32.prototype.extractChannel_25cr2x$ = function (channel) {
    var $receiver = new Bitmap8(this.width, this.height);
    Bitmap32$Companion_getInstance().copyChannel_3yarfq$(this, channel, $receiver);
    return $receiver;
  };
  Bitmap32.prototype.inverted_59u9qz$ = function (target) {
    if (target === void 0)
      target = new Bitmap32(this.width, this.height);
    var $receiver = this.copyTo_59u9qz$(target);
    $receiver.invert();
    return $receiver;
  };
  Bitmap32.prototype.xored_w8v7je$ = function (value, target) {
    if (target === void 0)
      target = new Bitmap32(this.width, this.height);
    var $receiver = this.copyTo_59u9qz$(target);
    $receiver.xor_md34sx$(value);
    return $receiver;
  };
  Bitmap32.prototype.invert = function () {
    this.xor_md34sx$(RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 0));
  };
  Bitmap32.prototype.xor_md34sx$ = function (value) {
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, new RGBA(this.data.get_za3lpa$(n_0).value ^ value.value));
      }
    }
  };
  Bitmap32.prototype.toString = function () {
    return 'Bitmap32(' + this.width + ', ' + this.height + ')';
  };
  Bitmap32.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_vux9f0$(0, y0);
    var s1 = this.index_vux9f0$(0, y1);
    arraycopy(this.data, s0, this.temp_0, 0, this.width);
    arraycopy(this.data, s1, this.data, s0, this.width);
    arraycopy(this.temp_0, 0, this.data, s1, this.width);
  };
  Bitmap32.prototype.writeDecoded_77vltg$ = function (color, data, offset, littleEndian) {
    if (offset === void 0)
      offset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    decode(color, data, offset, this.data, 0, this.area, littleEndian);
    return this;
  };
  Bitmap32.prototype.clone = function () {
    return new Bitmap32(this.width, this.height, new RgbaArray(this.data.ints.slice()), this.premultiplied);
  };
  Bitmap32.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new Bitmap32Context2d(this, antialiasing));
  };
  Bitmap32.prototype.premultipliedIfRequired = function () {
    return this.premultiplied ? this : this.copyPremultiplied();
  };
  Bitmap32.prototype.depremultipliedIfRequired = function () {
    return !this.premultiplied ? this : this.depremultiplied();
  };
  Bitmap32.prototype.copyPremultiplied = function () {
    var $receiver = this.clone();
    $receiver.premultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.depremultiplied = function () {
    var $receiver = this.clone();
    $receiver.depremultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.premultiplyInplace = function () {
    if (this.premultiplied)
      return;
    this.premultiplied = true;
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, asNonPremultiplied(this.data.get_za3lpa$(n_0).premultiplied));
      }
    }
  };
  Bitmap32.prototype.depremultiplyInplace = function () {
    if (!this.premultiplied)
      return;
    this.premultiplied = false;
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, asPremultiplied(this.data.get_za3lpa$(n_0)).depremultiplied);
      }
    }
  };
  Bitmap32.prototype.withColorTransform_zfnmgq$ = function (ct, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width - x | 0;
    if (height === void 0)
      height = this.height - y | 0;
    var $receiver = extract_0(this, x, y, width, height);
    $receiver.applyColorTransform_zfnmgq$(ct);
    return $receiver;
  };
  Bitmap32.prototype.applyColorTransform_zfnmgq$ = function (ct, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width - x | 0;
    if (height === void 0)
      height = this.height - y | 0;
    var array = new Int32Array(256);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = clamp(numberToInt(i * ct.mR + ct.aR), 0, 255);
    }
    var R = array;
    var array_0 = new Int32Array(256);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = clamp(numberToInt(i_0 * ct.mG + ct.aG), 0, 255);
    }
    var G = array_0;
    var array_1 = new Int32Array(256);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = clamp(numberToInt(i_1 * ct.mB + ct.aB), 0, 255);
    }
    var B = array_1;
    var array_2 = new Int32Array(256);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      array_2[i_2] = clamp(numberToInt(i_2 * ct.mA + ct.aA), 0, 255);
    }
    var A = array_2;
    var tmp$_3, tmp$_4, tmp$_5;
    tmp$_3 = y + height | 0;
    for (var y_0 = y; y_0 < tmp$_3; y_0++) {
      var n = this.index_vux9f0$(x, y + y_0 | 0);
      tmp$_4 = x + width | 0;
      for (var x_0 = x; x_0 < tmp$_4; x_0++) {
        var n_0 = (tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5);
        var tmp$_6 = this.data;
        var it = this.data.get_za3lpa$(n_0);
        tmp$_6.set_vlvk8p$(n_0, RGBA$Companion_getInstance().invoke_tjonv8$(R[it.r], G[it.g], B[it.b], A[it.a]));
      }
    }
  };
  Bitmap32.prototype.mipmap_za3lpa$ = function (levels) {
    var tmp$, tmp$_0;
    var temp = this.clone();
    temp.premultiplyInplace();
    var dst = asPremultiplied_0(temp.data);
    var twidth = this.width;
    var theight = this.height;
    for (var level = 0; level < levels; level++) {
      twidth = twidth / 2 | 0;
      theight = theight / 2 | 0;
      tmp$ = theight;
      for (var y = 0; y < tmp$; y++) {
        var n = temp.index_vux9f0$(0, y);
        var m = temp.index_vux9f0$(0, y * 2 | 0);
        tmp$_0 = twidth;
        for (var x = 0; x < tmp$_0; x++) {
          dst.set_wpz7qp$(n, RGBAPremultiplied$Companion_getInstance().blend_rvhnu4$(dst.get_za3lpa$(m + 0 | 0), dst.get_za3lpa$(m + 1 | 0), dst.get_za3lpa$(m + this.width + 0 | 0), dst.get_za3lpa$(m + this.width + 1 | 0)));
          m = m + 2 | 0;
          n = n + 1 | 0;
        }
      }
    }
    return temp.copySliceWithSize_tjonv8$(0, 0, twidth, theight);
  };
  Bitmap32.prototype.iterator = function () {
    return this.data.iterator();
  };
  Bitmap32.prototype.setRowChunk_mv2y54$ = function (x, y, data, width, increment) {
    if (increment === 1) {
      arraycopy(data, 0, this.data, this.index_vux9f0$(x, y), width);
    }
     else {
      var m = this.index_vux9f0$(x, y);
      for (var n = 0; n < width; n++) {
        this.data.ints[m] = data.ints[n];
        m = m + increment | 0;
      }
    }
  };
  Bitmap32.prototype.extractBytes_xrv259$ = function (format) {
    if (format === void 0)
      format = RGBA$Companion_getInstance();
    return encode_0(format, this.data);
  };
  Bitmap32.prototype.scaleNearest_vux9f0$ = function (sx, sy) {
    return this.scaled_ydzd23$(Kotlin.imul(this.width, sx), Kotlin.imul(this.height, sy), false);
  };
  Bitmap32.prototype.scaleLinear_lu1900$ = function (sx, sy) {
    return this.scaled_ydzd23$(numberToInt(this.width * sx), numberToInt(this.height * sy), true);
  };
  Bitmap32.prototype.scaled_ydzd23$ = function (width, height, smooth) {
    if (smooth === void 0)
      smooth = true;
    var sx = width / this.width;
    var sy = height / this.height;
    var isx = 1.0 / sx;
    var isy = 1.0 / sy;
    var out = new Bitmap32(width, height);
    if (smooth) {
      var width_0;
      width_0 = out.width - 0 | 0;
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = 0 + (out.height - 0 | 0) | 0;
      for (var y = 0; y < tmp$; y++) {
        var n = out.index_vux9f0$(0, 0 + y | 0);
        tmp$_0 = 0 + width_0 | 0;
        for (var x = 0; x < tmp$_0; x++) {
          out.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), this.get_vux9f0$(numberToInt(x * isx), numberToInt(y * isy)));
        }
      }
    }
     else {
      var gWidth = width > ((this.width / 2 | 0) + 1 | 0);
      var gHeight = height > ((this.height / 2 | 0) + 1 | 0);
      if (gWidth || gHeight) {
        return this.scaled_ydzd23$(gWidth ? this.width / 2 | 0 : width, gHeight ? this.height / 2 | 0 : height, true).scaled_ydzd23$(width, height);
      }
      var width_1;
      width_1 = out.width - 0 | 0;
      var tmp$_2, tmp$_3, tmp$_4;
      tmp$_2 = 0 + (out.height - 0 | 0) | 0;
      for (var y_0 = 0; y_0 < tmp$_2; y_0++) {
        var n_0 = out.index_vux9f0$(0, 0 + y_0 | 0);
        tmp$_3 = 0 + width_1 | 0;
        for (var x_0 = 0; x_0 < tmp$_3; x_0++) {
          out.data.set_vlvk8p$((tmp$_4 = n_0, n_0 = tmp$_4 + 1 | 0, tmp$_4), this.getRgbaSampled_lu1900$(x_0 * isx, y_0 * isy));
        }
      }
    }
    return out;
  };
  Bitmap32.prototype.rgbaToYCbCr = function () {
    var $receiver = this.clone();
    $receiver.rgbaToYCbCrInline();
    return $receiver;
  };
  Bitmap32.prototype.rgbaToYCbCrInline = function () {
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, new RGBA(toYCbCr(this.data.get_za3lpa$(n_0)).value));
      }
    }
  };
  Bitmap32.prototype.yCbCrToRgba = function () {
    var $receiver = this.clone();
    $receiver.yCbCrToRgbaInline();
    return $receiver;
  };
  Bitmap32.prototype.yCbCrToRgbaInline = function () {
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, toRGBA_1(new YCbCr(this.data.get_za3lpa$(n_0).value)));
      }
    }
  };
  Bitmap32.prototype.contentEquals_s8jyv4$ = function (other) {
    return Kotlin.isType(other, Bitmap32) && this.width === other.width && this.height === other.height && contentEquals(this.data.ints, other.data.ints);
  };
  Bitmap32.prototype.contentHashCode = function () {
    return (this.width * 31 | 0) + this.height + contentHashCode(this.data.ints) + (this.premultiplied ? 1 : 0) | 0;
  };
  function Bitmap32$Companion() {
    Bitmap32$Companion_instance = this;
  }
  Bitmap32$Companion.prototype.invoke_g4fuo$ = function (width, height, premultiplied, generator) {
    if (premultiplied === void 0)
      premultiplied = false;
    var $receiver = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(width, height));
    var tmp$;
    var n = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        $receiver.set_vlvk8p$((tmp$ = n, n = tmp$ + 1 | 0, tmp$), generator(x, y));
      }
    }
    return new Bitmap32(width, height, $receiver, premultiplied);
  };
  Bitmap32$Companion.prototype.copyChannel_ravo8c$ = function (src, srcChannel, dst, dstChannel) {
    var tmp$;
    var srcShift = srcChannel.shift;
    var dstShift = dstChannel.shift;
    var dstClear = dstChannel.clearMask;
    var dstData = dst.data;
    var srcData = src.data;
    tmp$ = dst.area;
    for (var n = 0; n < tmp$; n++) {
      var c = srcData.ints[n] >>> srcShift & 255;
      dstData.set_vlvk8p$(n, new RGBA(dstData.ints[n] & dstClear | c << dstShift));
    }
  };
  Bitmap32$Companion.prototype.copyChannel_b84796$ = function (src, dst, dstChannel) {
    var tmp$;
    var destShift = dstChannel.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = dst.area;
    for (var n = 0; n < tmp$; n++) {
      var c = src.data[n] & 255;
      dst.data.set_vlvk8p$(n, new RGBA(dst.data.ints[n] & destClear | c << destShift));
    }
  };
  Bitmap32$Companion.prototype.copyChannel_3yarfq$ = function (src, srcChannel, dst) {
    var tmp$;
    var shift = srcChannel.shift;
    tmp$ = src.area;
    for (var n = 0; n < tmp$; n++) {
      dst.data[n] = toByte(src.data.ints[n] >>> shift & 255);
    }
  };
  Bitmap32$Companion.prototype.copyRect_dpalmc$ = function (src, srcX, srcY, dst, dstX, dstY, width, height) {
    src.copy_akhah0$(srcX, srcY, dst, dstX, dstY, width, height);
  };
  Bitmap32$Companion.prototype.createWithAlpha_h1jruv$ = function (color, alpha, alphaChannel) {
    if (alphaChannel === void 0)
      alphaChannel = BitmapChannel$RED_getInstance();
    var $receiver = new Bitmap32(color.width, color.height);
    $receiver.put_dryc6d$(color);
    Bitmap32$Companion_getInstance().copyChannel_ravo8c$(alpha, BitmapChannel$RED_getInstance(), $receiver, BitmapChannel$ALPHA_getInstance());
    return $receiver;
  };
  Bitmap32$Companion.prototype.matchesSSMI_irislw$ = function (a, b, continuation) {
    throw new NotImplementedError_init();
  };
  Bitmap32$Companion.prototype.matches_9ho1nm$ = function (a, b, threshold, continuation) {
    if (threshold === void 0)
      threshold = 32;
    var diff = this.diff_irislw$(a, b);
    var $receiver = diff.data;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!(element.r < threshold && element.g < threshold && element.b < threshold && element.a < threshold)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  function Bitmap32$Companion$MatchResult(sizeMatches, differentPixels, samePixels) {
    if (differentPixels === void 0)
      differentPixels = 0;
    if (samePixels === void 0)
      samePixels = 0;
    this.sizeMatches = sizeMatches;
    this.differentPixels = differentPixels;
    this.samePixels = samePixels;
  }
  Bitmap32$Companion$MatchResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchResult',
    interfaces: []
  };
  Bitmap32$Companion$MatchResult.prototype.component1 = function () {
    return this.sizeMatches;
  };
  Bitmap32$Companion$MatchResult.prototype.component2 = function () {
    return this.differentPixels;
  };
  Bitmap32$Companion$MatchResult.prototype.component3 = function () {
    return this.samePixels;
  };
  Bitmap32$Companion$MatchResult.prototype.copy_judmud$ = function (sizeMatches, differentPixels, samePixels) {
    return new Bitmap32$Companion$MatchResult(sizeMatches === void 0 ? this.sizeMatches : sizeMatches, differentPixels === void 0 ? this.differentPixels : differentPixels, samePixels === void 0 ? this.samePixels : samePixels);
  };
  Bitmap32$Companion$MatchResult.prototype.toString = function () {
    return 'MatchResult(sizeMatches=' + Kotlin.toString(this.sizeMatches) + (', differentPixels=' + Kotlin.toString(this.differentPixels)) + (', samePixels=' + Kotlin.toString(this.samePixels)) + ')';
  };
  Bitmap32$Companion$MatchResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sizeMatches) | 0;
    result = result * 31 + Kotlin.hashCode(this.differentPixels) | 0;
    result = result * 31 + Kotlin.hashCode(this.samePixels) | 0;
    return result;
  };
  Bitmap32$Companion$MatchResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sizeMatches, other.sizeMatches) && Kotlin.equals(this.differentPixels, other.differentPixels) && Kotlin.equals(this.samePixels, other.samePixels)))));
  };
  Bitmap32$Companion.prototype.matchesWithResult_6bycng$ = function (a, b) {
    var tmp$;
    if (a.width !== b.width || a.height !== b.height)
      return new Bitmap32$Companion$MatchResult(false);
    var aData = a.data;
    var bData = b.data;
    var different = 0;
    var same = 0;
    tmp$ = aData.size;
    for (var n = 0; n < tmp$; n++) {
      var av = aData.get_za3lpa$(n);
      var bv = bData.get_za3lpa$(n);
      if ((av != null ? av.equals(bv) : null) || (av.a === 0 && bv.a === 0)) {
        same = same + 1 | 0;
      }
       else {
        different = different + 1 | 0;
      }
    }
    return new Bitmap32$Companion$MatchResult(true, different, same);
  };
  Bitmap32$Companion.prototype.diff_irislw$ = function (a, b) {
    var tmp$;
    if (a.width !== b.width || a.height !== b.height)
      throw IllegalArgumentException_init(a.toString() + ' not matches ' + b + ' size');
    var a32 = a.toBMP32();
    var b32 = b.toBMP32();
    var out = new Bitmap32(a.width, a.height, void 0, true);
    tmp$ = out.area;
    for (var n = 0; n < tmp$; n++) {
      var c1 = a32.data.get_za3lpa$(n).premultiplied;
      var c2 = b32.data.get_za3lpa$(n).premultiplied;
      out.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(abs(c1.r - c2.r | 0), abs(c1.g - c2.g | 0), abs(c1.b - c2.b | 0), abs(c1.a - c2.a | 0)));
    }
    return out;
  };
  Bitmap32$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bitmap32$Companion_instance = null;
  function Bitmap32$Companion_getInstance() {
    if (Bitmap32$Companion_instance === null) {
      new Bitmap32$Companion();
    }
    return Bitmap32$Companion_instance;
  }
  Bitmap32.prototype.toBMP32 = function () {
    return this;
  };
  Bitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32',
    interfaces: [Iterable, Bitmap]
  };
  function Bitmap32_init(width, height, value, premultiplied, $this) {
    if (premultiplied === void 0)
      premultiplied = false;
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premultiplied);
    $this.data.fill_eb600h$(value);
    return $this;
  }
  function Bitmap32_init_0(width, height, premultiplied, generator, $this) {
    if (premultiplied === void 0)
      premultiplied = false;
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premultiplied);
    var width_0;
    width_0 = $this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + ($this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = $this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width_0 | 0;
      for (var x = 0; x < tmp$_0; x++) {
        $this.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), generator(x, y));
      }
    }
    return $this;
  }
  function Bitmap4(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 2 | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(16);
    BitmapIndexed.call(this, 4, width, height, data, palette);
  }
  Bitmap4.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap4(width, height);
  };
  Bitmap4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap4',
    interfaces: [BitmapIndexed]
  };
  function Bitmap8(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(255);
    BitmapIndexed.call(this, 8, width, height, data, palette);
  }
  Bitmap8.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap8(width, height);
  };
  Bitmap8.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.datau.set_vux9f0$(this.index_vux9f0$(x, y), color);
  };
  Bitmap8.prototype.getInt_vux9f0$ = function (x, y) {
    return this.datau.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap8.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.palette.get_za3lpa$(this.getInt_vux9f0$(x, y));
  };
  Bitmap8.prototype.clone = function () {
    return new Bitmap8(this.width, this.height, this.data.slice(), new RgbaArray(this.palette.ints.slice()));
  };
  Bitmap8.prototype.toString = function () {
    return 'Bitmap8(' + this.width + ', ' + this.height + ', palette=' + this.palette.size + ')';
  };
  Bitmap8.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap8',
    interfaces: [BitmapIndexed]
  };
  function BitmapChannel(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.shift = this.index * 8 | 0;
    this.setMask = 255 << this.shift;
    this.clearMask = ~this.setMask;
  }
  function BitmapChannel_initFields() {
    BitmapChannel_initFields = function () {
    };
    BitmapChannel$RED_instance = new BitmapChannel('RED', 0, 0);
    BitmapChannel$GREEN_instance = new BitmapChannel('GREEN', 1, 1);
    BitmapChannel$BLUE_instance = new BitmapChannel('BLUE', 2, 2);
    BitmapChannel$ALPHA_instance = new BitmapChannel('ALPHA', 3, 3);
    BitmapChannel$Companion_getInstance();
  }
  var BitmapChannel$RED_instance;
  function BitmapChannel$RED_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$RED_instance;
  }
  var BitmapChannel$GREEN_instance;
  function BitmapChannel$GREEN_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$GREEN_instance;
  }
  var BitmapChannel$BLUE_instance;
  function BitmapChannel$BLUE_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$BLUE_instance;
  }
  var BitmapChannel$ALPHA_instance;
  function BitmapChannel$ALPHA_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$ALPHA_instance;
  }
  BitmapChannel.prototype.extract_md34sx$ = function (rgba) {
    return rgba.value >>> this.shift & 255;
  };
  BitmapChannel.prototype.insert_3hpxcz$ = function (rgba, value) {
    return new RGBA(rgba.value & this.clearMask | (value & 255) << this.shift);
  };
  function BitmapChannel$Companion() {
    BitmapChannel$Companion_instance = this;
    this.ALL = BitmapChannel$values();
  }
  BitmapChannel$Companion.prototype.get_za3lpa$ = function (index) {
    return this.ALL[index];
  };
  BitmapChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapChannel$Companion_instance = null;
  function BitmapChannel$Companion_getInstance() {
    BitmapChannel_initFields();
    if (BitmapChannel$Companion_instance === null) {
      new BitmapChannel$Companion();
    }
    return BitmapChannel$Companion_instance;
  }
  BitmapChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapChannel',
    interfaces: [Enum]
  };
  function BitmapChannel$values() {
    return [BitmapChannel$RED_getInstance(), BitmapChannel$GREEN_getInstance(), BitmapChannel$BLUE_getInstance(), BitmapChannel$ALPHA_getInstance()];
  }
  BitmapChannel.values = BitmapChannel$values;
  function BitmapChannel$valueOf(name) {
    switch (name) {
      case 'RED':
        return BitmapChannel$RED_getInstance();
      case 'GREEN':
        return BitmapChannel$GREEN_getInstance();
      case 'BLUE':
        return BitmapChannel$BLUE_getInstance();
      case 'ALPHA':
        return BitmapChannel$ALPHA_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.bitmap.BitmapChannel.' + name);
    }
  }
  BitmapChannel.valueOf_61zpoe$ = BitmapChannel$valueOf;
  function get_Y($receiver) {
    return BitmapChannel$RED_getInstance();
  }
  function get_Cb($receiver) {
    return BitmapChannel$GREEN_getInstance();
  }
  function get_Cr($receiver) {
    return BitmapChannel$BLUE_getInstance();
  }
  function get_A($receiver) {
    return BitmapChannel$ALPHA_getInstance();
  }
  function toStringYCbCr($receiver) {
    switch ($receiver.index) {
      case 0:
        return 'Y';
      case 1:
        return 'Cb';
      case 2:
        return 'Cr';
      case 3:
        return 'A';
      default:return lang.invalidOp;
    }
  }
  function matchContentsDistinctCount($receiver, that) {
    var tmp$;
    if ($receiver.width !== that.width || $receiver.height !== that.height)
      return -1;
    var l = $receiver.toBMP32().depremultipliedIfRequired();
    var r = that.toBMP32().depremultipliedIfRequired();
    var width = l.width;
    var height = l.height;
    var count = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (!((tmp$ = l.getRgba_vux9f0$(x, y)) != null ? tmp$.equals(r.getRgba_vux9f0$(x, y)) : null)) {
          count = count + 1 | 0;
        }
      }
    }
    return count;
  }
  function matchContents($receiver, that) {
    return matchContentsDistinctCount($receiver, that) === 0;
  }
  function setAlpha($receiver, value) {
    var tmp$;
    tmp$ = $receiver.data.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_vux9f0$($receiver.data.get_za3lpa$(n).rgb, value));
  }
  function putWithBorder($receiver, x, y, bmp, border) {
    if (border === void 0)
      border = 1;
    var width = bmp.width;
    var height = bmp.height;
    bmp.copy_akhah0$(0, 0, $receiver, x, y, width, height);
    for (var n = 1; n <= border; n++) {
      $receiver.copy_akhah0$(x, y, $receiver, x - n | 0, y, 1, height);
      $receiver.copy_akhah0$(x + width - 1 | 0, y, $receiver, x + width - 1 + n | 0, y, 1, height);
    }
    for (var n_0 = 1; n_0 <= border; n_0++) {
      var rwidth = width + (border * 2 | 0) | 0;
      $receiver.copy_akhah0$(x, y, $receiver, x, y - n_0 | 0, rwidth, 1);
      $receiver.copy_akhah0$(x, y + height - 1 | 0, $receiver, x, y + height - 1 + n_0 | 0, rwidth, 1);
    }
  }
  var arraycopy$lambda_1 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function BitmapIndexed(bpp, width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / (8 / bpp | 0) | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(1 << bpp);
    Bitmap.call(this, width, height, bpp, false, data);
    this.data = data;
    this.palette = palette;
    if (this.data.length < (Kotlin.imul(width, height) / (8 / bpp | 0) | 0))
      throw RuntimeException_init('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp = new Int8Array(Math_0.max(width, height));
    this.datau = new UByteArrayInt(this.data);
    this.n8_dbpp = 8 / bpp | 0;
    this.mask = (1 << bpp) - 1 | 0;
  }
  BitmapIndexed.prototype.toString = function () {
    return 'BitmapIndexed(bpp=' + this.bpp + ', width=' + this.width + ', height=' + this.height + ', clut=' + this.palette.size + ')';
  };
  BitmapIndexed.prototype.get_vux9f0$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.BitmapIndexed.get_vux9f0$', function (x, y) {
    return this.getInt_vux9f0$(x, y);
  });
  BitmapIndexed.prototype.set_qt1dr2$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.BitmapIndexed.set_qt1dr2$', function (x, y, color) {
    this.setInt_qt1dr2$(x, y, color);
  });
  BitmapIndexed.prototype.getInt_vux9f0$ = function (x, y) {
    return this.datau.get_za3lpa$(this.index_d_vux9f0$(x, y)) >>> Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)) & this.mask;
  };
  BitmapIndexed.prototype.setInt_qt1dr2$ = function (x, y, color) {
    var i = this.index_d_vux9f0$(x, y);
    this.datau.set_vux9f0$(i, insert(this.datau.get_za3lpa$(i), color, Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)), this.bpp));
  };
  BitmapIndexed.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.palette.get_za3lpa$(this.getInt_vux9f0$(x, y));
  };
  BitmapIndexed.prototype.index_d_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) / this.n8_dbpp | 0;
  };
  BitmapIndexed.prototype.index_m_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) % this.n8_dbpp;
  };
  BitmapIndexed.prototype.setRow_96ojhb$ = function (y, row) {
    arrayCopy(row.storage, this.data, this.index_vux9f0$(0, y), 0, 0 + this.stride | 0);
  };
  BitmapIndexed.prototype.setRow_3fbn1q$ = function (y, row) {
    arrayCopy(row, this.data, this.index_vux9f0$(0, y), 0, 0 + this.stride | 0);
  };
  BitmapIndexed.prototype.setWhitescalePalette = function () {
    var tmp$;
    tmp$ = this.palette.size;
    for (var n = 0; n < tmp$; n++) {
      var col = numberToInt(n / this.palette.size * 255);
      this.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(col, col, col, 255));
    }
    return this;
  };
  BitmapIndexed.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_d_vux9f0$(0, y0);
    var s1 = this.index_d_vux9f0$(0, y1);
    arrayCopy(this.data, this.temp, 0, s0, s0 + this.stride | 0);
    arrayCopy(this.data, this.data, s0, s1, s1 + this.stride | 0);
    arrayCopy(this.temp, this.data, s1, 0, 0 + this.stride | 0);
  };
  BitmapIndexed.prototype.toLines_61zpoe$ = function (palette) {
    var $receiver = until(0, this.height);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.height);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(toBoxedChar(palette.charCodeAt(this.getInt_vux9f0$(item_0, item))));
      }
      tmp$_0.call(destination, joinToString(destination_0, ''));
    }
    return destination;
  };
  BitmapIndexed.prototype.setRowChunk_y8lvms$ = function (x, y, data, width, increment) {
    var tmp$;
    if (increment === 1) {
      arrayCopy(data, this.data, this.index_vux9f0$(x, y), 0, 0 + (width / this.n8_dbpp | 0) | 0);
    }
     else {
      var m = this.index_vux9f0$(x, y);
      tmp$ = width / this.n8_dbpp | 0;
      for (var n = 0; n < tmp$; n++) {
        this.data[m] = data[n];
        m = m + increment | 0;
      }
    }
  };
  BitmapIndexed.prototype.toBMP32 = function () {
    var $receiver = new Bitmap32(this.width, this.height, void 0, this.premultiplied);
    var tmp$;
    var out = $receiver.data.ints;
    var inp = this.data;
    var pal = this.palette.ints;
    tmp$ = Math_0.min(out.length, inp.length);
    for (var n = 0; n < tmp$; n++) {
      out[n] = pal[inp[n] & 255];
    }
    return $receiver;
  };
  BitmapIndexed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapIndexed',
    interfaces: [Bitmap]
  };
  function BmpSlice() {
  }
  BmpSlice.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BmpSlice',
    interfaces: [Extra]
  };
  function BitmapSlice(bmp, bounds, name, rotated) {
    if (name === void 0)
      name = 'unknown';
    if (rotated === void 0)
      rotated = false;
    this.bmp_klb0st$_0 = bmp;
    this.bounds = bounds;
    this.name_r4yuh$_0 = name;
    this.$delegate_l9ixl6$_0 = new Extra$Mixin();
    this.parent_fb313s$_0 = null;
    var x = this.left / this.bmp.width;
    var y = this.top / this.bmp.height;
    this.tl_0 = new Point(numberToDouble(x), numberToDouble(y));
    var x_0 = this.right / this.bmp.width;
    var y_0 = this.bottom / this.bmp.height;
    this.br_0 = new Point(numberToDouble(x_0), numberToDouble(y_0));
    this.tr_0 = new Point(this.br_0.x, this.tl_0.y);
    this.bl_0 = new Point(this.tl_0.x, this.br_0.y);
    this.points_0 = [this.tl_0, this.tr_0, this.br_0, this.bl_0];
    this.offset_0 = rotated ? 1 : 0;
    this.p0_0 = getCyclic(this.points_0, this.offset_0 + 0 | 0);
    this.p1_0 = getCyclic(this.points_0, this.offset_0 + 1 | 0);
    this.p2_0 = getCyclic(this.points_0, this.offset_0 + 2 | 0);
    this.p3_0 = getCyclic(this.points_0, this.offset_0 + 3 | 0);
    this.tl_x_nngcv$_0 = this.p0_0.x;
    this.tl_y_nngc0$_0 = this.p0_0.y;
    this.tr_x_njmfp$_0 = this.p1_0.x;
    this.tr_y_njmeu$_0 = this.p1_0.y;
    this.br_x_xfx47$_0 = this.p2_0.x;
    this.br_y_xfx3c$_0 = this.p2_0.y;
    this.bl_x_xjr1d$_0 = this.p3_0.x;
    this.bl_y_xjr0i$_0 = this.p3_0.y;
    this.rotated_s99y09$_0 = false;
    this.rotatedAngle_pg30mg$_0 = 0;
  }
  Object.defineProperty(BitmapSlice.prototype, 'bmp', {
    get: function () {
      return this.bmp_klb0st$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'name', {
    get: function () {
      return this.name_r4yuh$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'premultiplied', {
    get: function () {
      return this.bmp.premultiplied;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'parent', {
    get: function () {
      return this.parent_fb313s$_0;
    },
    set: function (parent) {
      this.parent_fb313s$_0 = parent;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'left', {
    get: function () {
      return this.bounds.left;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'top', {
    get: function () {
      return this.bounds.top;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'right', {
    get: function () {
      return this.bounds.right;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bottom', {
    get: function () {
      return this.bounds.bottom;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'width', {
    get: function () {
      return this.bounds.width;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'height', {
    get: function () {
      return this.bounds.height;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tl_x', {
    get: function () {
      return this.tl_x_nngcv$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tl_y', {
    get: function () {
      return this.tl_y_nngc0$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tr_x', {
    get: function () {
      return this.tr_x_njmfp$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tr_y', {
    get: function () {
      return this.tr_y_njmeu$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'br_x', {
    get: function () {
      return this.br_x_xfx47$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'br_y', {
    get: function () {
      return this.br_y_xfx3c$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bl_x', {
    get: function () {
      return this.bl_x_xjr1d$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bl_y', {
    get: function () {
      return this.bl_y_xjr0i$_0;
    }
  });
  BitmapSlice.prototype.extract = function () {
    return extract_0(this.bmp, this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
  };
  BitmapSlice.prototype.sliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return new BitmapSlice(this.bmp, createRectangleInt(this.bounds.left, this.bounds.top, this.bounds.right, this.bounds.bottom, left, top, right, bottom));
  };
  BitmapSlice.prototype.sliceWithSize_tjonv8$ = function (x, y, width, height) {
    return this.sliceWithBounds_tjonv8$(x, y, x + width | 0, y + height | 0);
  };
  BitmapSlice.prototype.slice_t9mhyo$ = function (rect) {
    return this.sliceWithBounds_tjonv8$(rect.left, rect.top, rect.right, rect.bottom);
  };
  BitmapSlice.prototype.slice_2da8yn$ = function (rect) {
    return this.slice_t9mhyo$(rect.toInt());
  };
  BitmapSlice.prototype.split_vux9f0$ = function (width, height) {
    var self_0 = this;
    var nheight = self_0.height / height | 0;
    var nwidth = self_0.width / width | 0;
    var $receiver = ArrayList_init_0();
    for (var y = 0; y < nheight; y++) {
      for (var x = 0; x < nwidth; x++) {
        $receiver.add_11rb$(self_0.sliceWithSize_tjonv8$(Kotlin.imul(x, width), Kotlin.imul(y, height), width, height));
      }
    }
    return $receiver;
  };
  Object.defineProperty(BitmapSlice.prototype, 'rotated', {
    get: function () {
      return this.rotated_s99y09$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'rotatedAngle', {
    get: function () {
      return this.rotatedAngle_pg30mg$_0;
    }
  });
  BitmapSlice.prototype.toString = function () {
    return 'BitmapSlice(' + this.name + ':' + SizeInt.Companion.invoke_vux9f0$(this.bounds.width, this.bounds.height) + ')';
  };
  Object.defineProperty(BitmapSlice.prototype, 'extra', {
    get: function () {
      return this.$delegate_l9ixl6$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_l9ixl6$_0.extra = tmp$;
    }
  });
  BitmapSlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapSlice',
    interfaces: [BmpSlice, Extra]
  };
  function BitmapSliceCompat(bmp, frame, orig, trim, rotated, name) {
    if (name === void 0)
      name = 'unknown';
    return new BitmapSlice(bmp, frame.toInt(), name, rotated);
  }
  function slice($receiver, bounds, name) {
    if (bounds === void 0) {
      var width = $receiver.width;
      var height = $receiver.height;
      bounds = new RectangleInt(new Rectangle(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height)));
    }
    if (name === void 0)
      name = 'unknown';
    return new BitmapSlice($receiver, bounds, name);
  }
  function sliceWithBounds($receiver, left, top, right, bottom) {
    return slice($receiver, createRectangleInt(0, 0, $receiver.width, $receiver.height, left, top, right, bottom));
  }
  function sliceWithSize_1($receiver, x, y, width, height) {
    return sliceWithBounds($receiver, x, y, x + width | 0, y + height | 0);
  }
  function createRectangleInt(bleft, btop, bright, bbottom, left, top, right, bottom, allowInvalidBounds) {
    if (allowInvalidBounds === void 0)
      allowInvalidBounds = false;
    return RectangleInt.Companion.fromBounds_tjonv8$(clamp(bleft + left | 0, bleft, bright), clamp(btop + top | 0, btop, bbottom), clamp(bleft + right | 0, allowInvalidBounds ? bleft : bleft + left | 0, bright), clamp(btop + bottom | 0, allowInvalidBounds ? btop : btop + top | 0, bbottom));
  }
  function Bitmaps() {
    Bitmaps_instance = this;
    this.transparent = slice(new Bitmap32(1, 1), void 0, 'transparent');
    this.white = slice(new Bitmap32(1, 1, RgbaArray$Companion_getInstance().invoke_bvgci3$(1, Bitmaps$white$lambda)), void 0, 'white');
  }
  function Bitmaps$white$lambda(it) {
    return Colors_getInstance().WHITE;
  }
  Bitmaps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Bitmaps',
    interfaces: []
  };
  var Bitmaps_instance = null;
  function Bitmaps_getInstance() {
    if (Bitmaps_instance === null) {
      new Bitmaps();
    }
    return Bitmaps_instance;
  }
  function NativeImage(width, height, data, premultiplied) {
    Bitmap.call(this, width, height, 32, premultiplied, null);
    this.data = data;
    this.name_vm0j7s$_0 = 'NativeImage';
  }
  Object.defineProperty(NativeImage.prototype, 'name', {
    get: function () {
      return this.name_vm0j7s$_0;
    }
  });
  NativeImage.prototype.toUri = function () {
    return 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$(this, new ImageEncodingProps('out.png')));
  };
  NativeImage.prototype.swapRows_vux9f0$ = function (y0, y1) {
    throw UnsupportedOperationException_init_0();
  };
  NativeImage.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return NativeImage_0(width, height);
  };
  NativeImage.prototype.toBMP32 = function () {
    return this.toNonNativeBmp().toBMP32();
  };
  NativeImage.prototype.toString = function () {
    return this.name + '(' + this.width + ', ' + this.height + ')';
  };
  NativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImage',
    interfaces: [Bitmap]
  };
  function mipmap($receiver, levels) {
    return nativeImageFormatProvider.mipmap_uwsoz2$($receiver, levels);
  }
  function toUri($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver.toUri();
    return 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$($receiver, new ImageEncodingProps('out.png')));
  }
  function NativeImage_0(width, height) {
    return nativeImageFormatProvider.create_vux9f0$(width, height);
  }
  function NativeImage_1(width, height, d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    var bmp = NativeImage_0(width, height);
    try {
      var ctx = bmp.getContext2d_6taknv$();
      ctx.save();
      try {
        ctx.scale_lu1900$(scaleX, scaleY);
        ctx.draw_ywv3s4$(d);
      }
      finally {
        ctx.restore();
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        printStackTrace(e);
      }
       else
        throw e;
    }
    return bmp;
  }
  function NativeImage_2(d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_1(numberToInt(d.width * scaleX), numberToInt(d.height * scaleY), d, scaleX, scaleY);
  }
  function ensureNative($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver;
    else
      return nativeImageFormatProvider.copy_uler2c$($receiver);
  }
  function raster($receiver, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_2($receiver, scaleX, scaleY);
  }
  function NinePatchInfo(xranges, yranges, width, height) {
    this.xranges = xranges;
    this.yranges = yranges;
    this.width = width;
    this.height = height;
    this.xaxis = new NinePatchInfo$AxisInfo(this.xranges, this.width);
    this.yaxis = new NinePatchInfo$AxisInfo(this.yranges, this.height);
    this.xsegments = this.xaxis.segments;
    this.ysegments = this.yaxis.segments;
    this.fixedWidth = this.xaxis.fixedLen;
    this.fixedHeight = this.yaxis.fixedLen;
    this.scaledWidth = this.xaxis.scaledLen;
    this.scaledHeight = this.yaxis.scaledLen;
    var $receiver = this.ysegments;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = this.xsegments;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new NinePatchInfo$Segment(RectangleInt.Companion.fromBounds_tjonv8$(item_0.range.start, item.range.start, get_endExclusive(item_0.range), get_endExclusive(item.range)), item_0, item));
      }
      tmp$_0.call(destination, destination_0);
    }
    this.segments = destination;
  }
  function NinePatchInfo$AxisSegment(scaled, range) {
    this.scaled = scaled;
    this.range = range;
  }
  Object.defineProperty(NinePatchInfo$AxisSegment.prototype, 'fixed', {
    get: function () {
      return !this.scaled;
    }
  });
  Object.defineProperty(NinePatchInfo$AxisSegment.prototype, 'length', {
    get: function () {
      return get_length(this.range);
    }
  });
  NinePatchInfo$AxisSegment.prototype.computedLength_cfr5bs$ = function (axis, boundsLength) {
    var tmp$;
    var scale = clamp_0(boundsLength / axis.totalLen, 0.0, 1.0);
    if (this.fixed) {
      tmp$ = this.length * scale;
    }
     else {
      var variableSize = boundsLength - axis.fixedLen * scale;
      tmp$ = variableSize * (this.length / axis.scaledLen);
    }
    return tmp$;
  };
  NinePatchInfo$AxisSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxisSegment',
    interfaces: []
  };
  function NinePatchInfo$AxisInfo(ranges, totalLen) {
    this.totalLen = totalLen;
    var destination = ArrayList_init(collectionSizeOrDefault(ranges, 10));
    var tmp$;
    tmp$ = ranges.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new NinePatchInfo$AxisSegment(item.first, item.second));
    }
    this.segments = destination;
    var $receiver = this.segments;
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.fixed)
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_1.add_11rb$(item_0.length);
    }
    var b = sum(destination_1);
    this.fixedLen = Math_0.max(1, b);
    var $receiver_0 = this.segments;
    var destination_2 = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (element_0.scaled)
        destination_2.add_11rb$(element_0);
    }
    var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
    var tmp$_3;
    tmp$_3 = destination_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_3.add_11rb$(item_1.length);
    }
    var b_0 = sum(destination_3);
    this.scaledLen = Math_0.max(1, b_0);
  }
  NinePatchInfo$AxisInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxisInfo',
    interfaces: []
  };
  function NinePatchInfo$Segment(rect, x, y) {
    this.rect = rect;
    this.x = x;
    this.y = y;
    this.$delegate_5nxubg$_0 = new Extra$Mixin();
    this.scaleX = this.x.scaled;
    this.scaleY = this.y.scaled;
  }
  Object.defineProperty(NinePatchInfo$Segment.prototype, 'extra', {
    get: function () {
      return this.$delegate_5nxubg$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_5nxubg$_0.extra = tmp$;
    }
  });
  NinePatchInfo$Segment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Segment',
    interfaces: [Extra]
  };
  NinePatchInfo.prototype.computeScale_89dyev$ = function (bounds, callback) {
    var ry = 0;
    var yindex = 0;
    for (var tmp$ = this.ysegments.iterator(); tmp$.hasNext(); ++yindex) {
      var y = tmp$.next();
      var segHeight = numberToInt(y.computedLength_cfr5bs$(this.yaxis, bounds.height));
      var rx = 0;
      var xindex = 0;
      for (var tmp$_0 = this.xsegments.iterator(); tmp$_0.hasNext(); ++xindex) {
        var x = tmp$_0.next();
        var segWidth = numberToInt(x.computedLength_cfr5bs$(this.xaxis, bounds.width));
        var seg = this.segments.get_za3lpa$(yindex).get_za3lpa$(xindex);
        var segLeft = rx + bounds.left | 0;
        var segTop = ry + bounds.top | 0;
        callback(seg, segLeft, segTop, segWidth, segHeight);
        rx = rx + segWidth | 0;
      }
      ry = ry + segHeight | 0;
    }
  };
  NinePatchInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchInfo',
    interfaces: []
  };
  function NinePatchInfo_init(width, height, left, top, right, bottom, $this) {
    $this = $this || Object.create(NinePatchInfo.prototype);
    NinePatchInfo.call($this, listOf([to(false, until(0, left)), to(true, until(left, right)), to(false, until(right, width))]), listOf([to(false, until(0, top)), to(true, until(top, bottom)), to(false, until(bottom, height))]), width, height);
    return $this;
  }
  function NinePatchBitmap32(bmp) {
    this.bmp = bmp;
    this.content = sliceWithBounds(this.bmp, 1, 1, this.bmp.width - 1 | 0, this.bmp.height - 1 | 0);
    var $receiver = until(1, this.bmp.width - 1 | 0);
    var tmp$;
    var first = true;
    var pos = 0;
    var startpos = 0;
    var lastRes;
    var out = ArrayList_init_0();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      var current = this.bmp.get_vux9f0$(it, 0).a !== 0;
      if (!first) {
        if (!equals(current, lastRes == null ? throwUPAE('lastRes') : lastRes)) {
          var element = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
          out.add_11rb$(element);
          startpos = pos;
        }
      }
      lastRes = current;
      first = false;
      pos = pos + 1 | 0;
    }
    if (startpos !== pos) {
      var element_0 = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
      out.add_11rb$(element_0);
    }
    var $receiver_0 = until(1, this.bmp.height - 1 | 0);
    var tmp$_0;
    var first_0 = true;
    var pos_0 = 0;
    var startpos_0 = 0;
    var lastRes_0;
    var out_0 = ArrayList_init_0();
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var it_0 = tmp$_0.next();
      var current_0 = this.bmp.get_vux9f0$(0, it_0).a !== 0;
      if (!first_0) {
        if (!equals(current_0, lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0)) {
          var element_1 = to(lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0, until(startpos_0, pos_0));
          out_0.add_11rb$(element_1);
          startpos_0 = pos_0;
        }
      }
      lastRes_0 = current_0;
      first_0 = false;
      pos_0 = pos_0 + 1 | 0;
    }
    if (startpos_0 !== pos_0) {
      var element_2 = to(lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0, until(startpos_0, pos_0));
      out_0.add_11rb$(element_2);
    }
    this.info = new NinePatchInfo(out, out_0, this.content.width, this.content.height);
    this.bmp_xjwzxv$_xan0lv$_0 = new Extra$PropertyThis(void 0, NinePatchBitmap32$bmp$lambda(this));
  }
  Object.defineProperty(NinePatchBitmap32.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'dwidth', {
    get: function () {
      return this.width;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'dheight', {
    get: function () {
      return this.height;
    }
  });
  var NinePatchBitmap32$bmp_metadata = new PropertyMetadata('bmp');
  NinePatchBitmap32.prototype.get_bmp_xjwzxv$ = function ($receiver) {
    var $this = this.bmp_xjwzxv$_xan0lv$_0;
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : NinePatchBitmap32$bmp_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : NinePatchBitmap32$bmp_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  };
  function NinePatchBitmap32$drawTo$lambda$lambda(this$NinePatchBitmap32, this$, closure$drawRegions) {
    return function (seg, segLeft, segTop, segWidth, segHeight) {
      this$.drawImage_dpo8os$(this$NinePatchBitmap32.get_bmp_xjwzxv$(seg), segLeft, segTop, segWidth, segHeight);
      if (closure$drawRegions) {
        var $this = this$;
        var color = Colors_getInstance().RED;
        rect(this$, numberToDouble(segLeft), numberToDouble(segTop), numberToDouble(segWidth), numberToDouble(segHeight));
        $this.stroke_i8h3xk$(new Context2d$Color(color));
      }
      return Unit;
    };
  }
  NinePatchBitmap32.prototype.drawTo_i0i8t6$ = function (other, bounds, antialiased, drawRegions) {
    if (antialiased === void 0)
      antialiased = true;
    if (drawRegions === void 0)
      drawRegions = false;
    var ctx = other.getContext2d_6taknv$(antialiased);
    try {
      this.info.computeScale_89dyev$(bounds, NinePatchBitmap32$drawTo$lambda$lambda(this, ctx, drawRegions));
    }
    finally {
      ctx.dispose();
    }
    return other;
  };
  NinePatchBitmap32.prototype.rendered_wnu51o$ = function (width, height, antialiased, drawRegions) {
    if (antialiased === void 0)
      antialiased = true;
    if (drawRegions === void 0)
      drawRegions = false;
    return this.drawTo_i0i8t6$(NativeImage_0(width, height), new RectangleInt(new Rectangle(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height))), antialiased, drawRegions).toBMP32();
  };
  function NinePatchBitmap32$bmp$lambda(this$NinePatchBitmap32) {
    return function ($receiver) {
      return this$NinePatchBitmap32.content.slice_t9mhyo$($receiver.rect).extract();
    };
  }
  NinePatchBitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchBitmap32',
    interfaces: []
  };
  function asNinePatch($receiver) {
    return new NinePatchBitmap32($receiver.toBMP32());
  }
  function Coroutine$readNinePatch($receiver_0, format_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$format = format_0;
  }
  Coroutine$readNinePatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNinePatch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNinePatch.prototype.constructor = Coroutine$readNinePatch;
  Coroutine$readNinePatch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$format === void 0)
              this.local$format = RegisteredImageFormats_getInstance();
            this.state_0 = 2;
            this.result_0 = readBitmap_1(this.local$$receiver, this.local$format, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new NinePatchBitmap32(this.result_0.toBMP32());
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readNinePatch($receiver_0, format_0, continuation_0, suspended) {
    var instance = new Coroutine$readNinePatch($receiver_0, format_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var computeRle = wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver, callback) {
      var tmp$;
      var first = true;
      var pos = 0;
      var startpos = 0;
      var lastRes;
      var out = ArrayList_init();
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var it = tmp$.next();
        var current = callback(it);
        if (!first) {
          if (!equals(current, lastRes == null ? throwUPAE('lastRes') : lastRes)) {
            var element = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
            out.add_11rb$(element);
            startpos = pos;
          }
        }
        lastRes = current;
        first = false;
        pos = pos + 1 | 0;
      }
      if (startpos !== pos) {
        var element_0 = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
        out.add_11rb$(element_0);
      }
      return out;
    };
  });
  function PSNR() {
    PSNR_instance = this;
  }
  PSNR.prototype.MSE_h1jruv$ = function (a, b, c) {
    var tmp$;
    if (!((tmp$ = a.size) != null ? tmp$.equals(b.size) : null))
      invalidOp(a.size.toString() + ' != ' + b.size);
    var area = a.area;
    var sum = 0.0;
    for (var n = 0; n < area; n++) {
      var v = c.extract_md34sx$(a.data.get_za3lpa$(n)) - c.extract_md34sx$(b.data.get_za3lpa$(n)) | 0;
      sum += Kotlin.imul(v, v);
    }
    return sum / area;
  };
  PSNR.prototype.MSE_6bycng$ = function (a, b) {
    var $receiver = BitmapChannel$Companion_getInstance().ALL;
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(this.MSE_h1jruv$(a, b, item));
    }
    return sum_0(destination) / 4.0;
  };
  PSNR.prototype.PSNR_0 = function (a, b, mse) {
    var x = 255 / Math_0.sqrt(mse);
    return 20.0 * Math_0.log10(x);
  };
  PSNR.prototype.invoke_6bycng$ = function (a, b) {
    return this.PSNR_0(a, b, this.MSE_6bycng$(a, b));
  };
  PSNR.prototype.invoke_h1jruv$ = function (a, b, c) {
    return this.PSNR_0(a, b, this.MSE_h1jruv$(a, b, c));
  };
  PSNR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSNR',
    interfaces: []
  };
  var PSNR_instance = null;
  function PSNR_getInstance() {
    if (PSNR_instance === null) {
      new PSNR();
    }
    return PSNR_instance;
  }
  function psnrDiffTo($receiver, that) {
    return computePsnr(Bitmap32$Companion_getInstance(), $receiver, that);
  }
  function computePsnr($receiver, a, b) {
    return PSNR_getInstance().invoke_6bycng$(a, b);
  }
  function Atlas(slices) {
    this.slices = slices;
  }
  Object.defineProperty(Atlas.prototype, 'slicesByName', {
    get: function () {
      var $receiver = this.slices;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(element.name, element);
      }
      return destination;
    }
  });
  Object.defineProperty(Atlas.prototype, 'size', {
    get: function () {
      return this.slices.size;
    }
  });
  Atlas.prototype.get_61zpoe$ = function (name) {
    return ensureNotNull(this.slicesByName.get_11rb$(name));
  };
  Atlas.prototype.get_za3lpa$ = function (index) {
    return ensureNotNull(this.slices.get_za3lpa$(index));
  };
  Atlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas',
    interfaces: []
  };
  function ARGB() {
    ARGB_instance = this;
    this.$delegate_mcsiax$_0 = new ColorFormat$Mixin(32, 8, 8, 16, 8, 24, 8, 0, 8);
  }
  Object.defineProperty(ARGB.prototype, 'bpp', {
    get: function () {
      return this.$delegate_mcsiax$_0.bpp;
    }
  });
  ARGB.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getA_za3lpa$(v);
  };
  ARGB.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getB_za3lpa$(v);
  };
  ARGB.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getG_za3lpa$(v);
  };
  ARGB.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getR_za3lpa$(v);
  };
  ARGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsiax$_0.pack_tjonv8$(r, g, b, a);
  };
  ARGB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ARGB',
    interfaces: [ColorFormat]
  };
  var ARGB_instance = null;
  function ARGB_getInstance() {
    if (ARGB_instance === null) {
      new ARGB();
    }
    return ARGB_instance;
  }
  function BGRA() {
    BGRA_instance = this;
    this.$delegate_mcsxe9$_0 = new ColorFormat$Mixin(32, 16, 8, 8, 8, 0, 8, 24, 8);
  }
  BGRA.prototype.rgbaToBgra_za3lpa$ = function (v) {
    return v << 16 & 16711680 | v >> 16 & 255 | v & -16711936;
  };
  Object.defineProperty(BGRA.prototype, 'bpp', {
    get: function () {
      return this.$delegate_mcsxe9$_0.bpp;
    }
  });
  BGRA.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getA_za3lpa$(v);
  };
  BGRA.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getB_za3lpa$(v);
  };
  BGRA.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getG_za3lpa$(v);
  };
  BGRA.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getR_za3lpa$(v);
  };
  BGRA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsxe9$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA',
    interfaces: [ColorFormat]
  };
  var BGRA_instance = null;
  function BGRA_getInstance() {
    if (BGRA_instance === null) {
      new BGRA();
    }
    return BGRA_instance;
  }
  function CMYK(value) {
    CMYK$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(CMYK.prototype, 'c', {
    get: function () {
      return extract8(this.value, 0);
    }
  });
  Object.defineProperty(CMYK.prototype, 'm', {
    get: function () {
      return extract8(this.value, 8);
    }
  });
  Object.defineProperty(CMYK.prototype, 'y', {
    get: function () {
      return extract8(this.value, 16);
    }
  });
  Object.defineProperty(CMYK.prototype, 'k', {
    get: function () {
      return extract8(this.value, 24);
    }
  });
  function CMYK$Companion() {
    CMYK$Companion_instance = this;
  }
  CMYK$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CMYK$Companion_instance = null;
  function CMYK$Companion_getInstance() {
    if (CMYK$Companion_instance === null) {
      new CMYK$Companion();
    }
    return CMYK$Companion_instance;
  }
  CMYK.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CMYK',
    interfaces: []
  };
  CMYK.prototype.unbox = function () {
    return this.value;
  };
  CMYK.prototype.toString = function () {
    return 'CMYK(value=' + Kotlin.toString(this.value) + ')';
  };
  CMYK.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  CMYK.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function toRGBA($receiver) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(255 - clamp0_255(Kotlin.imul($receiver.c, 1 - ($receiver.k / 255 | 0) | 0) + $receiver.k | 0) | 0, 255 - clamp0_255(Kotlin.imul($receiver.m, 1 - ($receiver.k / 255 | 0) | 0) + $receiver.k | 0) | 0, 255 - clamp0_255(Kotlin.imul($receiver.y, 1 - ($receiver.k / 255 | 0) | 0) + $receiver.k | 0) | 0, 255);
  }
  function ColorFormat() {
  }
  function ColorFormat$Mixin(bpp, rOffset, rSize, gOffset, gSize, bOffset, bSize, aOffset, aSize) {
    this.bpp_hky9yu$_0 = bpp;
    this.rOffset = rOffset;
    this.rSize = rSize;
    this.gOffset = gOffset;
    this.gSize = gSize;
    this.bOffset = bOffset;
    this.bSize = bSize;
    this.aOffset = aOffset;
    this.aSize = aSize;
  }
  Object.defineProperty(ColorFormat$Mixin.prototype, 'bpp', {
    get: function () {
      return this.bpp_hky9yu$_0;
    }
  });
  ColorFormat$Mixin.prototype.getR_za3lpa$ = function (v) {
    return extractScaledFF(v, this.rOffset, this.rSize);
  };
  ColorFormat$Mixin.prototype.getG_za3lpa$ = function (v) {
    return extractScaledFF(v, this.gOffset, this.gSize);
  };
  ColorFormat$Mixin.prototype.getB_za3lpa$ = function (v) {
    return extractScaledFF(v, this.bOffset, this.bSize);
  };
  ColorFormat$Mixin.prototype.getA_za3lpa$ = function (v) {
    return extractScaledFFDefault(v, this.aOffset, this.aSize, 255);
  };
  ColorFormat$Mixin.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insertScaledFF(insertScaledFF(insertScaledFF(insertScaledFF(0, r, this.rOffset, this.rSize), g, this.gOffset, this.gSize), b, this.bOffset, this.bSize), a, this.aOffset, this.aSize);
  };
  ColorFormat$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [ColorFormat]
  };
  ColorFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ColorFormat',
    interfaces: []
  };
  function ColorFormat16() {
  }
  ColorFormat16.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ColorFormat16',
    interfaces: [ColorFormat]
  };
  function ColorFormat24() {
    this.bpp_8lor5z$_0 = 24;
  }
  Object.defineProperty(ColorFormat24.prototype, 'bpp', {
    get: function () {
      return this.bpp_8lor5z$_0;
    }
  });
  ColorFormat24.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat24',
    interfaces: [ColorFormat]
  };
  function ColorFormat32() {
    this.bpp_mbzslm$_0 = 32;
  }
  Object.defineProperty(ColorFormat32.prototype, 'bpp', {
    get: function () {
      return this.bpp_mbzslm$_0;
    }
  });
  ColorFormat32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat32',
    interfaces: [ColorFormat]
  };
  function numberOfBytes($receiver, pixels) {
    return Kotlin.imul(pixels, $receiver.bpp) / 8 | 0;
  }
  function get_bytesPerPixel($receiver) {
    return $receiver.bpp / 8;
  }
  function toRGBA_0($receiver, v) {
    return RGBA$Companion_getInstance().invoke_tjonv8$($receiver.getR_za3lpa$(v), $receiver.getG_za3lpa$(v), $receiver.getB_za3lpa$(v), $receiver.getA_za3lpa$(v));
  }
  function packRGBA($receiver, c) {
    return $receiver.pack_tjonv8$(c.r, c.g, c.b, c.a);
  }
  function getRf($receiver, v) {
    return $receiver.getR_za3lpa$(v) / 255.0;
  }
  function getGf($receiver, v) {
    return $receiver.getG_za3lpa$(v) / 255.0;
  }
  function getBf($receiver, v) {
    return $receiver.getB_za3lpa$(v) / 255.0;
  }
  function getAf($receiver, v) {
    return $receiver.getA_za3lpa$(v) / 255.0;
  }
  function getRd($receiver, v) {
    return $receiver.getR_za3lpa$(v) / 255.0;
  }
  function getGd($receiver, v) {
    return $receiver.getG_za3lpa$(v) / 255.0;
  }
  function getBd($receiver, v) {
    return $receiver.getB_za3lpa$(v) / 255.0;
  }
  function getAd($receiver, v) {
    return $receiver.getA_za3lpa$(v) / 255.0;
  }
  function unpackToRGBA($receiver, packed) {
    return RGBA$Companion_getInstance().invoke_tjonv8$($receiver.getR_za3lpa$(packed), $receiver.getG_za3lpa$(packed), $receiver.getB_za3lpa$(packed), $receiver.getA_za3lpa$(packed));
  }
  function convertTo($receiver, color, target) {
    return target.pack_tjonv8$($receiver.getR_za3lpa$(color), $receiver.getG_za3lpa$(color), $receiver.getB_za3lpa$(color), $receiver.getA_za3lpa$(color));
  }
  var decodeInternal = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.decodeInternal_4v8vnc$', wrapFunction(function () {
    var get_bytesPerPixel = _.com.soywiz.korim.color.get_bytesPerPixel_igxz2m$;
    var numberToInt = Kotlin.numberToInt;
    var RGBA = _.com.soywiz.korim.color.RGBA;
    return function ($receiver, data, dataOffset, out, outOffset, size, read) {
      var tmp$;
      var io = dataOffset;
      var oo = outOffset;
      var bytesPerPixel = get_bytesPerPixel($receiver);
      var outdata = out;
      var Bpp = numberToInt(bytesPerPixel);
      for (var n = 0; n < size; n++) {
        var c = read(data, io);
        io = io + Bpp | 0;
        outdata.set_vlvk8p$((tmp$ = oo, oo = tmp$ + 1 | 0, tmp$), RGBA.Companion.invoke_tjonv8$($receiver.getR_za3lpa$(c), $receiver.getG_za3lpa$(c), $receiver.getB_za3lpa$(c), $receiver.getA_za3lpa$(c)));
      }
    };
  }));
  function decode($receiver, data, dataOffset, out, outOffset, size, littleEndian) {
    if (littleEndian === void 0)
      littleEndian = true;
    var tmp$;
    switch ($receiver.bpp) {
      case 16:
        tmp$ = littleEndian ? getCallableRef('readU16LE', function ($receiver, o) {
          return readU16LE($receiver, o);
        }) : getCallableRef('readU16BE', function ($receiver, o) {
          return readU16BE($receiver, o);
        });
        break;
      case 24:
        tmp$ = littleEndian ? getCallableRef('readU24LE', function ($receiver, o) {
          return readU24LE($receiver, o);
        }) : getCallableRef('readU24BE', function ($receiver, o) {
          return readU24BE($receiver, o);
        });
        break;
      case 32:
        tmp$ = littleEndian ? getCallableRef('readS32LE', function ($receiver, o) {
          return readS32LE($receiver, o);
        }) : getCallableRef('readS32BE', function ($receiver, o) {
          return readS32BE($receiver, o);
        });
        break;
      default:throw IllegalArgumentException_init('Unsupported bpp ' + $receiver.bpp);
    }
    var readFunc = tmp$;
    var tmp$_0;
    var io = dataOffset;
    var oo = outOffset;
    var bytesPerPixel = get_bytesPerPixel($receiver);
    var outdata = out;
    var Bpp = numberToInt(bytesPerPixel);
    for (var n = 0; n < size; n++) {
      var c = readFunc(data, io);
      io = io + Bpp | 0;
      outdata.set_vlvk8p$((tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0), RGBA.Companion.invoke_tjonv8$($receiver.getR_za3lpa$(c), $receiver.getG_za3lpa$(c), $receiver.getB_za3lpa$(c), $receiver.getA_za3lpa$(c)));
    }
  }
  function decode_0($receiver, data, dataOffset, size, littleEndian) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (size === void 0)
      size = numberToInt(data.length / get_bytesPerPixel($receiver));
    if (littleEndian === void 0)
      littleEndian = true;
    var out = RgbaArray$Companion_getInstance().invoke_za3lpa$(size);
    decode($receiver, data, dataOffset, out, 0, size, littleEndian);
    return out;
  }
  function decodeToBitmap32($receiver, width, height, data, dataOffset, littleEndian) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return new Bitmap32(width, height, decode_0($receiver, data, dataOffset, Kotlin.imul(width, height), littleEndian));
  }
  function decodeToBitmap32_0($receiver, bmp, data, dataOffset, littleEndian) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    decode($receiver, data, dataOffset, bmp.data, 0, bmp.area);
    return bmp;
  }
  function encode($receiver, colors, colorsOffset, out, outOffset, size, littleEndian) {
    if (littleEndian === void 0)
      littleEndian = true;
    var tmp$;
    var io = colorsOffset;
    var oo = outOffset;
    var Bpp = numberToInt(get_bytesPerPixel($receiver));
    for (var n = 0; n < size; n++) {
      var c = colors.get_za3lpa$((tmp$ = io, io = tmp$ + 1 | 0, tmp$));
      var ec = $receiver.pack_tjonv8$(c.r, c.g, c.b, c.a);
      switch ($receiver.bpp) {
        case 16:
          if (littleEndian)
            write16LE(out, oo, ec);
          else
            write16BE(out, oo, ec);
          break;
        case 24:
          if (littleEndian)
            write24LE(out, oo, ec);
          else
            write24BE(out, oo, ec);
          break;
        case 32:
          if (littleEndian)
            write32LE(out, oo, ec);
          else
            write32BE(out, oo, ec);
          break;
        default:throw IllegalArgumentException_init('Unsupported bpp ' + $receiver.bpp);
      }
      oo = oo + Bpp | 0;
    }
  }
  function encode_0($receiver, colors, colorsOffset, size, littleEndian) {
    if (colorsOffset === void 0)
      colorsOffset = 0;
    if (size === void 0)
      size = colors.size;
    if (littleEndian === void 0)
      littleEndian = true;
    var out = new Int8Array(numberToInt(size * get_bytesPerPixel($receiver)));
    encode($receiver, colors, colorsOffset, out, 0, size, littleEndian);
    return out;
  }
  function encode_1($receiver, colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = toShort($receiver.pack_tjonv8$(RGBA$Companion_getInstance().getR_za3lpa$(c), RGBA$Companion_getInstance().getG_za3lpa$(c), RGBA$Companion_getInstance().getB_za3lpa$(c), RGBA$Companion_getInstance().getA_za3lpa$(c)));
    }
  }
  function encode_2($receiver, colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = $receiver.pack_tjonv8$(RGBA$Companion_getInstance().getR_za3lpa$(c), RGBA$Companion_getInstance().getG_za3lpa$(c), RGBA$Companion_getInstance().getB_za3lpa$(c), RGBA$Companion_getInstance().getA_za3lpa$(c));
    }
  }
  function ColorTransform(_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    ColorTransform$Companion_getInstance();
    this._mR_0 = _mR;
    this._mG_0 = _mG;
    this._mB_0 = _mB;
    this._mA_0 = _mA;
    this._aR_0 = _aR;
    this._aG_0 = _aG;
    this._aB_0 = _aB;
    this._aA_0 = _aA;
    this.dirty_0 = true;
    this._colorMul_0 = Colors_getInstance().WHITE;
    this._colorAdd_0 = 0;
  }
  function ColorTransform$Companion() {
    ColorTransform$Companion_instance = this;
    this.identity = new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(0), numberToInt(0), numberToInt(0), numberToInt(0));
  }
  ColorTransform$Companion.prototype.Multiply_6y0v78$ = function (r, g, b, a) {
    return new ColorTransform(r, g, b, a, 0, 0, 0, 0);
  };
  ColorTransform$Companion.prototype.Add_tjonv8$ = function (r, g, b, a) {
    return new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(r), numberToInt(g), numberToInt(b), numberToInt(a));
  };
  ColorTransform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorTransform$Companion_instance = null;
  function ColorTransform$Companion_getInstance() {
    if (ColorTransform$Companion_instance === null) {
      new ColorTransform$Companion();
    }
    return ColorTransform$Companion_instance;
  }
  ColorTransform.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_s3cjg4$(interpolate(ratio, l.mR, r.mR), interpolate(ratio, l.mG, r.mG), interpolate(ratio, l.mB, r.mB), interpolate(ratio, l.mA, r.mA), interpolate_0(ratio, l.aR, r.aR), interpolate_0(ratio, l.aG, r.aG), interpolate_0(ratio, l.aB, r.aB), interpolate_0(ratio, l.aA, r.aA));
  };
  ColorTransform.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return (new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(0), numberToInt(0), numberToInt(0), numberToInt(0))).setToInterpolated_bs4suk$(ratio, this, other);
  };
  ColorTransform.prototype.computeColors_0 = function () {
    if (this.dirty_0) {
      this.dirty_0 = false;
      this._colorMul_0 = RGBA$Companion_getInstance().float_7b5o5w$(this._mR_0, this._mG_0, this._mB_0, this._mA_0);
      this._colorAdd_0 = ColorAdd$Companion_getInstance().pack_tjonv8$(this._aR_0, this._aG_0, this._aB_0, this._aA_0);
    }
    return this;
  };
  Object.defineProperty(ColorTransform.prototype, 'colorMul', {
    get: function () {
      return this.computeColors_0()._colorMul_0;
    },
    set: function (v) {
      this._mR_0 = v.rd;
      this._mG_0 = v.gd;
      this._mB_0 = v.bd;
      this._mA_0 = v.ad;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'colorAdd', {
    get: function () {
      return this.computeColors_0()._colorAdd_0;
    },
    set: function (v) {
      this._aR_0 = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$((new RGBA(v)).r);
      this._aG_0 = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$((new RGBA(v)).g);
      this._aB_0 = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$((new RGBA(v)).b);
      this._aA_0 = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$((new RGBA(v)).a);
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mR', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mG', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mB', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mA', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mRf', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mGf', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mBf', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mAf', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aR', {
    get: function () {
      return this._aR_0;
    },
    set: function (v) {
      this._aR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aG', {
    get: function () {
      return this._aG_0;
    },
    set: function (v) {
      this._aG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aB', {
    get: function () {
      return this._aB_0;
    },
    set: function (v) {
      this._aB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aA', {
    get: function () {
      return this._aA_0;
    },
    set: function (v) {
      this._aA_0 = v;
      this.dirty_0 = true;
    }
  });
  ColorTransform.prototype.setMultiplyTo_6y0v78$ = function (mR, mG, mB, mA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setAddTo_tjonv8$ = function (aR, aG, aB, aA) {
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setTo_s3cjg4$ = function (mR, mG, mB, mA, aR, aG, aB, aA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.copyFrom_54kf7e$ = function (t) {
    this._mR_0 = t._mR_0;
    this._mG_0 = t._mG_0;
    this._mB_0 = t._mB_0;
    this._mA_0 = t._mA_0;
    this._aR_0 = t._aR_0;
    this._aG_0 = t._aG_0;
    this._aB_0 = t._aB_0;
    this._aA_0 = t._aA_0;
    this.dirty_0 = t.dirty_0;
    this._colorAdd_0 = t._colorAdd_0;
    this._colorMul_0 = t._colorMul_0;
    return this;
  };
  ColorTransform.prototype.setToConcat_k8ycrk$ = function (l, r) {
    return this.setTo_s3cjg4$(l.mR * r.mR, l.mG * r.mG, l.mB * r.mB, l.mA * r.mA, l.aR + r.aR | 0, l.aG + r.aG | 0, l.aB + r.aB | 0, l.aA + r.aA | 0);
  };
  ColorTransform.prototype.toString = function () {
    return 'ColorTransform(*[' + get_niceStr(this.mR) + ', ' + get_niceStr(this.mG) + ', ' + get_niceStr(this.mB) + ', ' + get_niceStr(this.mA) + ']+[' + this.aR + ', ' + this.aG + ', ' + this.aB + ', ' + this.aA + '])';
  };
  ColorTransform.prototype.isIdentity = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.mA === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.hasJustAlpha = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.setToIdentity = function () {
    return this.setTo_s3cjg4$(1.0, 1.0, 1.0, 1.0, 0, 0, 0, 0);
  };
  ColorTransform.prototype.applyToColor_za3lpa$ = function (color) {
    var r = numberToInt((new RGBA(color)).r * this.mR + this.aR);
    var g = numberToInt((new RGBA(color)).g * this.mG + this.aG);
    var b = numberToInt((new RGBA(color)).b * this.mB + this.aB);
    var a = numberToInt((new RGBA(color)).a * this.mA + this.aA);
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  ColorTransform.prototype.applyToRGBA_md34sx$ = function (color) {
    return new RGBA(this.applyToColor_za3lpa$(color.value));
  };
  ColorTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorTransform',
    interfaces: [Interpolable, MutableInterpolable]
  };
  ColorTransform.prototype.component1_0 = function () {
    return this._mR_0;
  };
  ColorTransform.prototype.component2_0 = function () {
    return this._mG_0;
  };
  ColorTransform.prototype.component3_0 = function () {
    return this._mB_0;
  };
  ColorTransform.prototype.component4_0 = function () {
    return this._mA_0;
  };
  ColorTransform.prototype.component5_0 = function () {
    return this._aR_0;
  };
  ColorTransform.prototype.component6_0 = function () {
    return this._aG_0;
  };
  ColorTransform.prototype.component7_0 = function () {
    return this._aB_0;
  };
  ColorTransform.prototype.component8_0 = function () {
    return this._aA_0;
  };
  ColorTransform.prototype.copy_s3cjg4$ = function (_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    return new ColorTransform(_mR === void 0 ? this._mR_0 : _mR, _mG === void 0 ? this._mG_0 : _mG, _mB === void 0 ? this._mB_0 : _mB, _mA === void 0 ? this._mA_0 : _mA, _aR === void 0 ? this._aR_0 : _aR, _aG === void 0 ? this._aG_0 : _aG, _aB === void 0 ? this._aB_0 : _aB, _aA === void 0 ? this._aA_0 : _aA);
  };
  ColorTransform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._mR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mA_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aA_0) | 0;
    return result;
  };
  ColorTransform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._mR_0, other._mR_0) && Kotlin.equals(this._mG_0, other._mG_0) && Kotlin.equals(this._mB_0, other._mB_0) && Kotlin.equals(this._mA_0, other._mA_0) && Kotlin.equals(this._aR_0, other._aR_0) && Kotlin.equals(this._aG_0, other._aG_0) && Kotlin.equals(this._aB_0, other._aB_0) && Kotlin.equals(this._aA_0, other._aA_0)))));
  };
  function ColorAdd(rgba) {
    ColorAdd$Companion_getInstance();
    this.rgba = rgba;
  }
  Object.defineProperty(ColorAdd.prototype, 'r', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 0 & 255);
    }
  });
  Object.defineProperty(ColorAdd.prototype, 'g', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 8 & 255);
    }
  });
  Object.defineProperty(ColorAdd.prototype, 'b', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 16 & 255);
    }
  });
  Object.defineProperty(ColorAdd.prototype, 'a', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 24 & 255);
    }
  });
  ColorAdd.prototype.withR_za3lpa$ = function (r) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(r, this.g, this.b, this.a);
  };
  ColorAdd.prototype.withG_za3lpa$ = function (g) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(this.r, g, this.b, this.a);
  };
  ColorAdd.prototype.withB_za3lpa$ = function (b) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(this.r, this.g, b, this.a);
  };
  ColorAdd.prototype.withA_za3lpa$ = function (a) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(this.r, this.g, this.b, a);
  };
  ColorAdd.prototype.toInt = function () {
    return this.rgba;
  };
  function ColorAdd$Companion() {
    ColorAdd$Companion_instance = this;
  }
  ColorAdd$Companion.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return new ColorAdd(this.pack_tjonv8$(r, g, b, a));
  };
  ColorAdd$Companion.prototype.packComponent_za3lpa$ = function (v) {
    return clamp(127 + (v >> 1) | 0, 0, 255);
  };
  ColorAdd$Companion.prototype.unpackComponent_za3lpa$ = function (v) {
    return (v - 127 | 0) * 2 | 0;
  };
  ColorAdd$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return ColorAdd$Companion_getInstance().packComponent_za3lpa$(r) << 0 | ColorAdd$Companion_getInstance().packComponent_za3lpa$(g) << 8 | ColorAdd$Companion_getInstance().packComponent_za3lpa$(b) << 16 | ColorAdd$Companion_getInstance().packComponent_za3lpa$(a) << 24;
  };
  ColorAdd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorAdd$Companion_instance = null;
  function ColorAdd$Companion_getInstance() {
    if (ColorAdd$Companion_instance === null) {
      new ColorAdd$Companion();
    }
    return ColorAdd$Companion_instance;
  }
  ColorAdd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorAdd',
    interfaces: []
  };
  ColorAdd.prototype.unbox = function () {
    return this.rgba;
  };
  ColorAdd.prototype.toString = function () {
    return 'ColorAdd(rgba=' + Kotlin.toString(this.rgba) + ')';
  };
  ColorAdd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rgba) | 0;
    return result;
  };
  ColorAdd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.rgba, other.rgba))));
  };
  function toColorAdd($receiver) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$($receiver.r, $receiver.g, $receiver.b, $receiver.a);
  }
  var ColorTransform_0 = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorTransform_d3e2w0$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (multiply, add) {
      var mR = multiply.rf;
      var mG = multiply.gf;
      var mB = multiply.bf;
      var mA = multiply.af;
      var aR = add.r;
      var aG = add.g;
      var aB = add.b;
      var aA = add.a;
      return new ColorTransform_init(numberToDouble(mR), numberToDouble(mG), numberToDouble(mB), numberToDouble(mA), numberToInt(aR), numberToInt(aG), numberToInt(aB), numberToInt(aA));
    };
  }));
  var ColorTransform_1 = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorTransform_6tck58$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (mR, mG, mB, mA, aR, aG, aB, aA) {
      if (mR === void 0)
        mR = 1;
      if (mG === void 0)
        mG = 1;
      if (mB === void 0)
        mB = 1;
      if (mA === void 0)
        mA = 1;
      if (aR === void 0)
        aR = 0;
      if (aG === void 0)
        aG = 0;
      if (aB === void 0)
        aB = 0;
      if (aA === void 0)
        aA = 0;
      return new ColorTransform_init(numberToDouble(mR), numberToDouble(mG), numberToDouble(mB), numberToDouble(mA), numberToInt(aR), numberToInt(aG), numberToInt(aB), numberToInt(aA));
    };
  }));
  function transform($receiver, transform) {
    return transform.applyToRGBA_md34sx$($receiver);
  }
  function Colors() {
    Colors_instance = this;
    this.WHITE = RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 255);
    this.BLACK = RGBA$Companion_getInstance().invoke_tjonv8$(0, 0, 0, 255);
    this.RED = RGBA$Companion_getInstance().invoke_tjonv8$(255, 0, 0, 255);
    this.GREEN = RGBA$Companion_getInstance().invoke_tjonv8$(0, 255, 0, 255);
    this.BLUE = RGBA$Companion_getInstance().invoke_tjonv8$(0, 0, 255, 255);
    this.TRANSPARENT_BLACK = RGBA$Companion_getInstance().invoke_tjonv8$(0, 0, 0, 0);
    this.TRANSPARENT_WHITE = RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 0);
    this.ALICEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 248, 255);
    this.ANTIQUEWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 235, 215);
    this.AQUA = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 255);
    this.AQUAMARINE = RGBA$Companion_getInstance().invoke_qt1dr2$(127, 255, 212);
    this.AZURE = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 255, 255);
    this.BEIGE = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 245, 220);
    this.BISQUE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 228, 196);
    this.BLANCHEDALMOND = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 235, 205);
    this.BLUEVIOLET = RGBA$Companion_getInstance().invoke_qt1dr2$(138, 43, 226);
    this.BROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(165, 42, 42);
    this.BURLYWOOD = RGBA$Companion_getInstance().invoke_qt1dr2$(222, 184, 135);
    this.CADETBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(95, 158, 160);
    this.CHARTREUSE = RGBA$Companion_getInstance().invoke_qt1dr2$(127, 255, 0);
    this.CHOCOLATE = RGBA$Companion_getInstance().invoke_qt1dr2$(210, 105, 30);
    this.CORAL = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 127, 80);
    this.CORNFLOWERBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(100, 149, 237);
    this.CORNSILK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 248, 220);
    this.CRIMSON = RGBA$Companion_getInstance().invoke_qt1dr2$(220, 20, 60);
    this.DARKBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 0, 139);
    this.DARKCYAN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 139, 139);
    this.DARKGOLDENROD = RGBA$Companion_getInstance().invoke_qt1dr2$(184, 134, 11);
    this.DARKGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(169, 169, 169);
    this.DARKGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 100, 0);
    this.DARKGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(169, 169, 169);
    this.DARKKHAKI = RGBA$Companion_getInstance().invoke_qt1dr2$(189, 183, 107);
    this.DARKMAGENTA = RGBA$Companion_getInstance().invoke_qt1dr2$(139, 0, 139);
    this.DARKOLIVEGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(85, 107, 47);
    this.DARKORANGE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 140, 0);
    this.DARKORCHID = RGBA$Companion_getInstance().invoke_qt1dr2$(153, 50, 204);
    this.DARKRED = RGBA$Companion_getInstance().invoke_qt1dr2$(139, 0, 0);
    this.DARKSALMON = RGBA$Companion_getInstance().invoke_qt1dr2$(233, 150, 122);
    this.DARKSEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(143, 188, 143);
    this.DARKSLATEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(72, 61, 139);
    this.DARKSLATEGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(47, 79, 79);
    this.DARKSLATEGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(47, 79, 79);
    this.DARKTURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 206, 209);
    this.DARKVIOLET = RGBA$Companion_getInstance().invoke_qt1dr2$(148, 0, 211);
    this.DEEPPINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 20, 147);
    this.DEEPSKYBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 191, 255);
    this.DIMGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(105, 105, 105);
    this.DIMGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(105, 105, 105);
    this.DODGERBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(30, 144, 255);
    this.FIREBRICK = RGBA$Companion_getInstance().invoke_qt1dr2$(178, 34, 34);
    this.FLORALWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 250, 240);
    this.FORESTGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(34, 139, 34);
    this.FUCHSIA = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 0, 255);
    this.GAINSBORO = RGBA$Companion_getInstance().invoke_qt1dr2$(220, 220, 220);
    this.GHOSTWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(248, 248, 255);
    this.GOLD = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 215, 0);
    this.GOLDENROD = RGBA$Companion_getInstance().invoke_qt1dr2$(218, 165, 32);
    this.GREENYELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(173, 255, 47);
    this.HONEYDEW = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 255, 240);
    this.HOTPINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 105, 180);
    this.INDIANRED = RGBA$Companion_getInstance().invoke_qt1dr2$(205, 92, 92);
    this.INDIGO = RGBA$Companion_getInstance().invoke_qt1dr2$(75, 0, 130);
    this.IVORY = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 255, 240);
    this.KHAKI = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 230, 140);
    this.LAVENDER = RGBA$Companion_getInstance().invoke_qt1dr2$(230, 230, 250);
    this.LAVENDERBLUSH = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 240, 245);
    this.LAWNGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(124, 252, 0);
    this.LEMONCHIFFON = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 250, 205);
    this.LIGHTBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(173, 216, 230);
    this.LIGHTCORAL = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 128, 128);
    this.LIGHTCYAN = RGBA$Companion_getInstance().invoke_qt1dr2$(224, 255, 255);
    this.LIGHTGOLDENRODYELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 250, 210);
    this.LIGHTGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(211, 211, 211);
    this.LIGHTGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(144, 238, 144);
    this.LIGHTGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(211, 211, 211);
    this.LIGHTPINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 182, 193);
    this.LIGHTSALMON = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 160, 122);
    this.LIGHTSEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(32, 178, 170);
    this.LIGHTSKYBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(135, 206, 250);
    this.LIGHTSLATEGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(119, 136, 153);
    this.LIGHTSLATEGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(119, 136, 153);
    this.LIGHTSTEELBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(176, 196, 222);
    this.LIGHTYELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 255, 224);
    this.LIME = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 0);
    this.LIMEGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(50, 205, 50);
    this.LINEN = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 240, 230);
    this.MAROON = RGBA$Companion_getInstance().invoke_qt1dr2$(128, 0, 0);
    this.MEDIUMAQUAMARINE = RGBA$Companion_getInstance().invoke_qt1dr2$(102, 205, 170);
    this.MEDIUMBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 0, 205);
    this.MEDIUMORCHID = RGBA$Companion_getInstance().invoke_qt1dr2$(186, 85, 211);
    this.MEDIUMPURPLE = RGBA$Companion_getInstance().invoke_qt1dr2$(147, 112, 219);
    this.MEDIUMSEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(60, 179, 113);
    this.MEDIUMSLATEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(123, 104, 238);
    this.MEDIUMSPRINGGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 250, 154);
    this.MEDIUMTURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(72, 209, 204);
    this.MEDIUMVIOLETRED = RGBA$Companion_getInstance().invoke_qt1dr2$(199, 21, 133);
    this.MIDNIGHTBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(25, 25, 112);
    this.MINTCREAM = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 255, 250);
    this.MISTYROSE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 228, 225);
    this.MOCCASIN = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 228, 181);
    this.NAVAJOWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 222, 173);
    this.NAVY = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 0, 128);
    this.OLDLACE = RGBA$Companion_getInstance().invoke_qt1dr2$(253, 245, 230);
    this.OLIVE = RGBA$Companion_getInstance().invoke_qt1dr2$(128, 128, 0);
    this.OLIVEDRAB = RGBA$Companion_getInstance().invoke_qt1dr2$(107, 142, 35);
    this.ORANGE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 165, 0);
    this.ORANGERED = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 69, 0);
    this.ORCHID = RGBA$Companion_getInstance().invoke_qt1dr2$(218, 112, 214);
    this.PALEGOLDENROD = RGBA$Companion_getInstance().invoke_qt1dr2$(238, 232, 170);
    this.PALEGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(152, 251, 152);
    this.PALETURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(175, 238, 238);
    this.PALEVIOLETRED = RGBA$Companion_getInstance().invoke_qt1dr2$(219, 112, 147);
    this.PAPAYAWHIP = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 239, 213);
    this.PEACHPUFF = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 218, 185);
    this.PERU = RGBA$Companion_getInstance().invoke_qt1dr2$(205, 133, 63);
    this.PINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 192, 203);
    this.PLUM = RGBA$Companion_getInstance().invoke_qt1dr2$(221, 160, 221);
    this.POWDERBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(176, 224, 230);
    this.PURPLE = RGBA$Companion_getInstance().invoke_qt1dr2$(128, 0, 128);
    this.ROSYBROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(188, 143, 143);
    this.ROYALBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(65, 105, 225);
    this.SADDLEBROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(139, 69, 19);
    this.SALMON = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 128, 114);
    this.SANDYBROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(244, 164, 96);
    this.SEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(46, 139, 87);
    this.SEASHELL = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 245, 238);
    this.SIENNA = RGBA$Companion_getInstance().invoke_qt1dr2$(160, 82, 45);
    this.SILVER = RGBA$Companion_getInstance().invoke_qt1dr2$(192, 192, 192);
    this.SKYBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(135, 206, 235);
    this.SLATEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(106, 90, 205);
    this.SLATEGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(112, 128, 144);
    this.SLATEGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(112, 128, 144);
    this.SNOW = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 250, 250);
    this.SPRINGGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 127);
    this.STEELBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(70, 130, 180);
    this.TAN = RGBA$Companion_getInstance().invoke_qt1dr2$(210, 180, 140);
    this.TEAL = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 128, 128);
    this.THISTLE = RGBA$Companion_getInstance().invoke_qt1dr2$(216, 191, 216);
    this.TOMATO = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 99, 71);
    this.TURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(64, 224, 208);
    this.VIOLET = RGBA$Companion_getInstance().invoke_qt1dr2$(238, 130, 238);
    this.WHEAT = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 222, 179);
    this.WHITESMOKE = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 245, 245);
    this.YELLOWGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(154, 205, 50);
    this.YELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 255, 0);
    this.colorsByName = mapOf([to('black', this.BLACK), to('white', this.WHITE), to('red', this.RED), to('green', this.GREEN), to('blue', this.BLUE), to('aliceblue', this.ALICEBLUE), to('antiquewhite', this.ANTIQUEWHITE), to('aqua', this.AQUA), to('aquamarine', this.AQUAMARINE), to('azure', this.AZURE), to('beige', this.BEIGE), to('bisque', this.BISQUE), to('blanchedalmond', this.BLANCHEDALMOND), to('blueviolet', this.BLUEVIOLET), to('brown', this.BROWN), to('burlywood', this.BURLYWOOD), to('cadetblue', this.CADETBLUE), to('chartreuse', this.CHARTREUSE), to('chocolate', this.CHOCOLATE), to('coral', this.CORAL), to('cornflowerblue', this.CORNFLOWERBLUE), to('cornsilk', this.CORNSILK), to('crimson', this.CRIMSON), to('darkblue', this.DARKBLUE), to('darkcyan', this.DARKCYAN), to('darkgoldenrod', this.DARKGOLDENROD), to('darkgray', this.DARKGRAY), to('darkgreen', this.DARKGREEN), to('darkgrey', this.DARKGREY), to('darkkhaki', this.DARKKHAKI), to('darkmagenta', this.DARKMAGENTA), to('darkolivegreen', this.DARKOLIVEGREEN), to('darkorange', this.DARKORANGE), to('darkorchid', this.DARKORCHID), to('darkred', this.DARKRED), to('darksalmon', this.DARKSALMON), to('darkseagreen', this.DARKSEAGREEN), to('darkslateblue', this.DARKSLATEBLUE), to('darkslategray', this.DARKSLATEGRAY), to('darkslategrey', this.DARKSLATEGREY), to('darkturquoise', this.DARKTURQUOISE), to('darkviolet', this.DARKVIOLET), to('deeppink', this.DEEPPINK), to('deepskyblue', this.DEEPSKYBLUE), to('dimgray', this.DIMGRAY), to('dimgrey', this.DIMGREY), to('dodgerblue', this.DODGERBLUE), to('firebrick', this.FIREBRICK), to('floralwhite', this.FLORALWHITE), to('forestgreen', this.FORESTGREEN), to('fuchsia', this.FUCHSIA), to('gainsboro', this.GAINSBORO), to('ghostwhite', this.GHOSTWHITE), to('gold', this.GOLD), to('goldenrod', this.GOLDENROD), to('greenyellow', this.GREENYELLOW), to('honeydew', this.HONEYDEW), to('hotpink', this.HOTPINK), to('indianred', this.INDIANRED), to('indigo', this.INDIGO), to('ivory', this.IVORY), to('khaki', this.KHAKI), to('lavender', this.LAVENDER), to('lavenderblush', this.LAVENDERBLUSH), to('lawngreen', this.LAWNGREEN), to('lemonchiffon', this.LEMONCHIFFON), to('lightblue', this.LIGHTBLUE), to('lightcoral', this.LIGHTCORAL), to('lightcyan', this.LIGHTCYAN), to('lightgoldenrodyellow', this.LIGHTGOLDENRODYELLOW), to('lightgray', this.LIGHTGRAY), to('lightgreen', this.LIGHTGREEN), to('lightgrey', this.LIGHTGREY), to('lightpink', this.LIGHTPINK), to('lightsalmon', this.LIGHTSALMON), to('lightseagreen', this.LIGHTSEAGREEN), to('lightskyblue', this.LIGHTSKYBLUE), to('lightslategray', this.LIGHTSLATEGRAY), to('lightslategrey', this.LIGHTSLATEGREY), to('lightsteelblue', this.LIGHTSTEELBLUE), to('lightyellow', this.LIGHTYELLOW), to('lime', this.LIME), to('limegreen', this.LIMEGREEN), to('linen', this.LINEN), to('maroon', this.MAROON), to('mediumaquamarine', this.MEDIUMAQUAMARINE), to('mediumblue', this.MEDIUMBLUE), to('mediumorchid', this.MEDIUMORCHID), to('mediumpurple', this.MEDIUMPURPLE), to('mediumseagreen', this.MEDIUMSEAGREEN), to('mediumslateblue', this.MEDIUMSLATEBLUE), to('mediumspringgreen', this.MEDIUMSPRINGGREEN), to('mediumturquoise', this.MEDIUMTURQUOISE), to('mediumvioletred', this.MEDIUMVIOLETRED), to('midnightblue', this.MIDNIGHTBLUE), to('mintcream', this.MINTCREAM), to('mistyrose', this.MISTYROSE), to('moccasin', this.MOCCASIN), to('navajowhite', this.NAVAJOWHITE), to('navy', this.NAVY), to('oldlace', this.OLDLACE), to('olive', this.OLIVE), to('olivedrab', this.OLIVEDRAB), to('orange', this.ORANGE), to('orangered', this.ORANGERED), to('orchid', this.ORCHID), to('palegoldenrod', this.PALEGOLDENROD), to('palegreen', this.PALEGREEN), to('paleturquoise', this.PALETURQUOISE), to('palevioletred', this.PALEVIOLETRED), to('papayawhip', this.PAPAYAWHIP), to('peachpuff', this.PEACHPUFF), to('peru', this.PERU), to('pink', this.PINK), to('plum', this.PLUM), to('powderblue', this.POWDERBLUE), to('purple', this.PURPLE), to('rosybrown', this.ROSYBROWN), to('royalblue', this.ROYALBLUE), to('saddlebrown', this.SADDLEBROWN), to('salmon', this.SALMON), to('sandybrown', this.SANDYBROWN), to('seagreen', this.SEAGREEN), to('seashell', this.SEASHELL), to('sienna', this.SIENNA), to('silver', this.SILVER), to('skyblue', this.SKYBLUE), to('slateblue', this.SLATEBLUE), to('slategray', this.SLATEGRAY), to('slategrey', this.SLATEGREY), to('snow', this.SNOW), to('springgreen', this.SPRINGGREEN), to('steelblue', this.STEELBLUE), to('tan', this.TAN), to('teal', this.TEAL), to('thistle', this.THISTLE), to('tomato', this.TOMATO), to('turquoise', this.TURQUOISE), to('violet', this.VIOLET), to('wheat', this.WHEAT), to('whitesmoke', this.WHITESMOKE), to('yellowgreen', this.YELLOWGREEN), to('yellow', this.YELLOW)]);
  }
  Colors.prototype.get_61zpoe$ = function (str) {
    return this.get_xtzj24$(str, Colors_getInstance().TRANSPARENT_BLACK, true);
  };
  Colors.prototype.get_xtzj24$ = function (str, default_0, errorOnDefault) {
    if (errorOnDefault === void 0)
      errorOnDefault = false;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (startsWith(str, '#')) {
      var hex = substr(str, 1);
      if (!setOf([3, 4, 6, 8]).contains_11rb$(hex.length))
        return this.BLACK;
      var chars = hex.length < 6 ? 1 : 2;
      var scale = hex.length < 6 ? 255.0 / 15.0 : 1.0;
      var hasAlpha = (hex.length / chars | 0) >= 4;
      var r = numberToInt(toInt(substr_0(hex, 0 * chars | 0, chars), 16) * scale);
      var g = numberToInt(toInt(substr_0(hex, 1 * chars | 0, chars), 16) * scale);
      var b = numberToInt(toInt(substr_0(hex, 2 * chars | 0, chars), 16) * scale);
      var a = hasAlpha ? numberToInt(toInt(substr_0(hex, 3 * chars | 0, chars), 16) * scale) : 255;
      return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a);
    }
     else if (startsWith(str, 'RGBA(', true)) {
      var parts = split(removeSuffix(removePrefix(str.toUpperCase(), 'RGBA('), ')'), [',']);
      var r_0 = (tmp$ = toIntOrNull(0 >= 0 && 0 <= get_lastIndex(parts) ? parts.get_za3lpa$(0) : '0')) != null ? tmp$ : 0;
      var g_0 = (tmp$_0 = toIntOrNull(1 >= 0 && 1 <= get_lastIndex(parts) ? parts.get_za3lpa$(1) : '0')) != null ? tmp$_0 : 0;
      var b_0 = (tmp$_1 = toIntOrNull(2 >= 0 && 2 <= get_lastIndex(parts) ? parts.get_za3lpa$(2) : '0')) != null ? tmp$_1 : 0;
      var af = (tmp$_2 = toDoubleOrNull(3 >= 0 && 3 <= get_lastIndex(parts) ? parts.get_za3lpa$(3) : '1.0')) != null ? tmp$_2 : 1.0;
      return RGBA$Companion_getInstance().invoke_tjonv8$(r_0, g_0, b_0, numberToInt(af * 255));
    }
     else {
      var col = this.colorsByName.get_11rb$(str.toLowerCase());
      if (col == null && errorOnDefault) {
        throw IllegalStateException_init(("Unsupported color '" + str + "'").toString());
      }
      return col != null ? col : default_0;
    }
  };
  function Colors$WithDefault(defaultColor) {
    this.defaultColor = defaultColor;
  }
  Colors$WithDefault.prototype.get_61zpoe$ = function (str) {
    return Colors_getInstance().get_xtzj24$(str, this.defaultColor);
  };
  Colors$WithDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithDefault',
    interfaces: []
  };
  function Colors$Default() {
    Colors$Default_instance = this;
    Colors$WithDefault.call(this, Colors_getInstance().RED);
  }
  Colors$Default.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Default',
    interfaces: [Colors$WithDefault]
  };
  var Colors$Default_instance = null;
  function Colors$Default_getInstance() {
    if (Colors$Default_instance === null) {
      new Colors$Default();
    }
    return Colors$Default_instance;
  }
  Colors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Colors',
    interfaces: []
  };
  var Colors_instance = null;
  function Colors_getInstance() {
    if (Colors_instance === null) {
      new Colors();
    }
    return Colors_instance;
  }
  function PaletteColorFormat(palette) {
    this.palette = palette;
    this.bpp_gs9dx2$_0 = 8;
  }
  Object.defineProperty(PaletteColorFormat.prototype, 'bpp', {
    get: function () {
      return this.bpp_gs9dx2$_0;
    }
  });
  PaletteColorFormat.prototype.getR_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).r;
  };
  PaletteColorFormat.prototype.getG_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).g;
  };
  PaletteColorFormat.prototype.getB_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).b;
  };
  PaletteColorFormat.prototype.getA_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).a;
  };
  PaletteColorFormat.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a).value;
  };
  PaletteColorFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaletteColorFormat',
    interfaces: [ColorFormat]
  };
  function RGB(rOffset, gOffset, bOffset) {
    RGB$Companion_getInstance();
    ColorFormat24.call(this);
    this.rOffset = rOffset;
    this.gOffset = gOffset;
    this.bOffset = bOffset;
  }
  RGB.prototype.getR_za3lpa$ = function (v) {
    return extract8(v, this.rOffset);
  };
  RGB.prototype.getG_za3lpa$ = function (v) {
    return extract8(v, this.gOffset);
  };
  RGB.prototype.getB_za3lpa$ = function (v) {
    return extract8(v, this.bOffset);
  };
  RGB.prototype.getA_za3lpa$ = function (v) {
    return 255;
  };
  RGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insert8(insert8(insert8(0, r, this.rOffset), g, this.gOffset), b, this.bOffset);
  };
  function RGB$Companion() {
    RGB$Companion_instance = this;
    RGB.call(this, 0, 8, 16);
  }
  RGB$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [RGB]
  };
  var RGB$Companion_instance = null;
  function RGB$Companion_getInstance() {
    if (RGB$Companion_instance === null) {
      new RGB$Companion();
    }
    return RGB$Companion_instance;
  }
  RGB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGB',
    interfaces: [ColorFormat24]
  };
  function BGR() {
    BGR_instance = this;
    RGB.call(this, 16, 8, 0);
  }
  BGR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR',
    interfaces: [RGB]
  };
  var BGR_instance = null;
  function BGR_getInstance() {
    if (BGR_instance === null) {
      new BGR();
    }
    return BGR_instance;
  }
  var arraycopy$lambda_2 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function RGBA(value) {
    RGBA$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(RGBA.prototype, 'r', {
    get: function () {
      return this.value >>> 0 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'g', {
    get: function () {
      return this.value >>> 8 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'b', {
    get: function () {
      return this.value >>> 16 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'a', {
    get: function () {
      return this.value >>> 24 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rf', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'gf', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'bf', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'af', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rd', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'gd', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'bd', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'ad', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rgb', {
    get: function () {
      return this.value & 16777215;
    }
  });
  RGBA.prototype.withR_za3lpa$ = function (v) {
    return new RGBA(this.value & -256 | (v & 255) << 0);
  };
  RGBA.prototype.withG_za3lpa$ = function (v) {
    return new RGBA(this.value & -65281 | (v & 255) << 8);
  };
  RGBA.prototype.withB_za3lpa$ = function (v) {
    return new RGBA(this.value & -16711681 | (v & 255) << 16);
  };
  RGBA.prototype.withA_za3lpa$ = function (v) {
    return new RGBA(this.value & 16777215 | (v & 255) << 24);
  };
  RGBA.prototype.withRGB_za3lpa$ = function (rgb) {
    return RGBA$Companion_getInstance().invoke_vux9f0$(rgb, this.a);
  };
  RGBA.prototype.withRd_14dthe$ = function (v) {
    return this.withR_za3lpa$(d2i(v));
  };
  RGBA.prototype.withGd_14dthe$ = function (v) {
    return this.withG_za3lpa$(d2i(v));
  };
  RGBA.prototype.withBd_14dthe$ = function (v) {
    return this.withB_za3lpa$(d2i(v));
  };
  RGBA.prototype.withAd_14dthe$ = function (v) {
    return this.withA_za3lpa$(d2i(v));
  };
  Object.defineProperty(RGBA.prototype, 'hexString', {
    get: function () {
      return format('#%02x%02x%02x%02x', [this.r, this.g, this.b, this.a]);
    }
  });
  Object.defineProperty(RGBA.prototype, 'htmlColor', {
    get: function () {
      return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.af + ')';
    }
  });
  Object.defineProperty(RGBA.prototype, 'htmlStringSimple', {
    get: function () {
      return format('#%02x%02x%02x', [this.r, this.g, this.b]);
    }
  });
  RGBA.prototype.toString = function () {
    return this.hexString;
  };
  RGBA.prototype.plus_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r + other.r | 0, this.g + other.g | 0, this.b + other.b | 0, this.a + other.a | 0);
  };
  RGBA.prototype.minus_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r - other.r | 0, this.g - other.g | 0, this.b - other.b | 0, this.a - other.a | 0);
  };
  RGBA.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.value, other.value);
  };
  RGBA.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return RGBA$Companion_getInstance().interpolate_utyrs$(this, other, ratio);
  };
  Object.defineProperty(RGBA.prototype, 'premultiplied', {
    get: function () {
      var A = this.a + 1 | 0;
      var RB = Kotlin.imul(this.value & 16711935, A) >>> 8 & 16711935;
      var G = Kotlin.imul(this.value & 65280, A) >>> 8 & 65280;
      return new RGBAPremultiplied(this.value & -16777216 | RB | G);
    }
  });
  RGBA.prototype.mix_md34sx$ = function (dst) {
    return RGBA$Companion_getInstance().mix_jh0t86$(this, dst);
  };
  RGBA.prototype.times_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().multiply_jh0t86$(this, other);
  };
  function RGBA$Companion() {
    RGBA$Companion_instance = this;
    ColorFormat32.call(this);
  }
  RGBA$Companion.prototype.float_7b5o5w$ = function (r, g, b, a) {
    return this.unclamped_tjonv8$(f2i(r), f2i(g), f2i(b), f2i(a));
  };
  RGBA$Companion.prototype.float_1ugm5o$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.RGBA.Companion.float_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (r, g, b, a) {
      if (a === void 0)
        a = 1.0;
      return this.float_7b5o5w$(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }));
  RGBA$Companion.prototype.unclamped_tjonv8$ = function (r, g, b, a) {
    return new RGBA((r & 255) << 0 | (g & 255) << 8 | (b & 255) << 16 | (a & 255) << 24);
  };
  RGBA$Companion.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return this.unclamped_tjonv8$(clamp0_255(r), clamp0_255(g), clamp0_255(b), clamp0_255(a));
  };
  RGBA$Companion.prototype.invoke_qt1dr2$ = function (r, g, b) {
    return this.unclamped_tjonv8$(clamp0_255(r), clamp0_255(g), clamp0_255(b), 255);
  };
  RGBA$Companion.prototype.invoke_vux9f0$ = function (rgb, a) {
    return new RGBA(rgb & 16777215 | a << 24);
  };
  RGBA$Companion.prototype.getR_za3lpa$ = function (v) {
    return (new RGBA(v)).r;
  };
  RGBA$Companion.prototype.getG_za3lpa$ = function (v) {
    return (new RGBA(v)).g;
  };
  RGBA$Companion.prototype.getB_za3lpa$ = function (v) {
    return (new RGBA(v)).b;
  };
  RGBA$Companion.prototype.getA_za3lpa$ = function (v) {
    return (new RGBA(v)).a;
  };
  RGBA$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a).value;
  };
  RGBA$Companion.prototype.mixRgbFactor256_74wf1k$ = function (c1, c2, factor256) {
    var ifactor256 = 256 - factor256 | 0;
    return new RGBA((Kotlin.imul(c1.value & 16711935, ifactor256) + Kotlin.imul(c2.value & 16711935, factor256) & -16711936 | Kotlin.imul(c1.value & 65280, ifactor256) + Kotlin.imul(c2.value & 65280, factor256) & 16711680) >>> 8);
  };
  RGBA$Companion.prototype.mixRgb_utyrs$ = function (c1, c2, factor) {
    return this.mixRgbFactor256_74wf1k$(c1, c2, numberToInt(factor * 256));
  };
  RGBA$Companion.prototype.mixRgba_utyrs$ = function (c1, c2, factor) {
    return RGBA$Companion_getInstance().invoke_vux9f0$(this.mixRgb_utyrs$(c1, c2, factor).rgb, this.blendComponent_0(c1.a, c2.a, factor));
  };
  RGBA$Companion.prototype.blendComponent_0 = function (c1, c2, factor) {
    return numberToInt(c1 * (1.0 - factor) + c2 * factor) & 255;
  };
  RGBA$Companion.prototype.mix_jh0t86$ = function (dst, src) {
    var tmp$;
    var srcA = src.a;
    var iSrcA = 255 - srcA | 0;
    switch (srcA) {
      case 0:
        tmp$ = dst;
        break;
      case 255:
        tmp$ = src;
        break;
      default:tmp$ = RGBA$Companion_getInstance().invoke_vux9f0$(this.mixRgbFactor256_74wf1k$(dst, src, srcA + 1 | 0).rgb, clamp0_255(srcA + (Kotlin.imul(dst.a, iSrcA) / 255 | 0) | 0));
        break;
    }
    return tmp$;
  };
  RGBA$Companion.prototype.multiply_jh0t86$ = function (c1, c2) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(Kotlin.imul(c1.r, c2.r) / 255 | 0, Kotlin.imul(c1.g, c2.g) / 255 | 0, Kotlin.imul(c1.b, c2.b) / 255 | 0, Kotlin.imul(c1.a, c2.a) / 255 | 0);
  };
  RGBA$Companion.prototype.interpolate_utyrs$ = function (src, dst, ratio) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(interpolate_0(ratio, src.r, dst.r), interpolate_0(ratio, src.g, dst.g), interpolate_0(ratio, src.b, dst.b), interpolate_0(ratio, src.a, dst.a));
  };
  RGBA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var RGBA$Companion_instance = null;
  function RGBA$Companion_getInstance() {
    if (RGBA$Companion_instance === null) {
      new RGBA$Companion();
    }
    return RGBA$Companion_instance;
  }
  RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: [Interpolable, Comparable]
  };
  RGBA.prototype.unbox = function () {
    return this.value;
  };
  RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function interpolate_1($receiver, a, b) {
    return RGBA$Companion_getInstance().interpolate_utyrs$(a, b, $receiver);
  }
  function RGBAPremultiplied(value) {
    RGBAPremultiplied$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(RGBAPremultiplied.prototype, 'rgb', {
    get: function () {
      return this.value & 16777215;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'r', {
    get: function () {
      return this.value >>> 0 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'g', {
    get: function () {
      return this.value >>> 8 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'b', {
    get: function () {
      return this.value >>> 16 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'a', {
    get: function () {
      return this.value >>> 24 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'rf', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'gf', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'bf', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'af', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'rd', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'gd', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'bd', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'ad', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'depremultiplied', {
    get: function () {
      var A = this.a;
      var A1 = A + 1 | 0;
      var R = ((this.r << 8) / A1 | 0) & 255;
      var G = ((this.g << 8) / A1 | 0) & 255;
      var B = ((this.b << 8) / A1 | 0) & 255;
      return RGBA$Companion_getInstance().invoke_tjonv8$(R, G, B, A);
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'depremultipliedAccurate', {
    get: function () {
      var tmp$;
      var alpha = this.ad;
      if (alpha === 0.0)
        tmp$ = Colors_getInstance().TRANSPARENT_BLACK;
      else {
        var ialpha = 1.0 / alpha;
        tmp$ = RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(this.r * ialpha), numberToInt(this.g * ialpha), numberToInt(this.b * ialpha), this.a);
      }
      return tmp$;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'hexString', {
    get: function () {
      return asNonPremultiplied(this).hexString;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'htmlColor', {
    get: function () {
      return asNonPremultiplied(this).htmlColor;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'htmlStringSimple', {
    get: function () {
      return asNonPremultiplied(this).htmlStringSimple;
    }
  });
  RGBAPremultiplied.prototype.toString = function () {
    return this.hexString;
  };
  function RGBAPremultiplied$Companion() {
    RGBAPremultiplied$Companion_instance = this;
  }
  RGBAPremultiplied$Companion.prototype.blend_ryofg4$ = function (c1, c2) {
    var RB = (c1.value & 16711935) + (c2.value & 16711935) >>> 1 & 16711935;
    var G = (c1.value & 65280) + (c2.value & 65280) >>> 1 & 65280;
    var A = (c1.value >>> 24) + (c2.value >>> 24) >>> 1 & 255;
    return new RGBAPremultiplied(A << 24 | RB | G);
  };
  RGBAPremultiplied$Companion.prototype.blend_rvhnu4$ = function (c1, c2, c3, c4) {
    var RB = (c1.value & 16711935) + (c2.value & 16711935) + (c3.value & 16711935) + (c4.value & 16711935) >>> 2 & 16711935;
    var G = (c1.value & 65280) + (c2.value & 65280) + (c3.value & 65280) + (c4.value & 65280) >>> 2 & 65280;
    var A = (c1.value >>> 24) + (c2.value >>> 24) + (c3.value >>> 24) + (c4.value >>> 24) >>> 2 & 255;
    return new RGBAPremultiplied(A << 24 | RB | G);
  };
  RGBAPremultiplied$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RGBAPremultiplied$Companion_instance = null;
  function RGBAPremultiplied$Companion_getInstance() {
    if (RGBAPremultiplied$Companion_instance === null) {
      new RGBAPremultiplied$Companion();
    }
    return RGBAPremultiplied$Companion_instance;
  }
  RGBAPremultiplied.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAPremultiplied',
    interfaces: []
  };
  function RGBAPremultiplied_init(rgb, a, $this) {
    $this = $this || Object.create(RGBAPremultiplied.prototype);
    RGBAPremultiplied.call($this, rgb & 16777215 | a << 24);
    return $this;
  }
  function RGBAPremultiplied_init_0(r, g, b, a, $this) {
    $this = $this || Object.create(RGBAPremultiplied.prototype);
    RGBAPremultiplied.call($this, RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a));
    return $this;
  }
  RGBAPremultiplied.prototype.unbox = function () {
    return this.value;
  };
  RGBAPremultiplied.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  RGBAPremultiplied.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function asPremultiplied($receiver) {
    return new RGBAPremultiplied($receiver.value);
  }
  function asNonPremultiplied($receiver) {
    return new RGBA($receiver.value);
  }
  function asPremultiplied_0($receiver) {
    return new RgbaPremultipliedArray($receiver.ints);
  }
  function asNonPremultiplied_0($receiver) {
    return new RgbaArray($receiver.ints);
  }
  function RgbaPremultipliedArray(ints) {
    this.ints = ints;
  }
  Object.defineProperty(RgbaPremultipliedArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  RgbaPremultipliedArray.prototype.get_za3lpa$ = function (index) {
    return new RGBAPremultiplied(this.ints[index]);
  };
  RgbaPremultipliedArray.prototype.set_wpz7qp$ = function (index, color) {
    this.ints[index] = color.value;
  };
  RgbaPremultipliedArray.prototype.fill_600akl$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    arrayfill(this.ints, value.value, start, end);
  };
  RgbaPremultipliedArray.prototype.premultiply_vux9f0$ = function (start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    for (var n = start; n < end; n++)
      this.set_wpz7qp$(n, asNonPremultiplied(this.get_za3lpa$(n)).premultiplied);
    return asNonPremultiplied_0(this);
  };
  RgbaPremultipliedArray.prototype.toString = function () {
    return 'RgbaPremultipliedArray(' + this.size + ')';
  };
  RgbaPremultipliedArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RgbaPremultipliedArray',
    interfaces: []
  };
  RgbaPremultipliedArray.prototype.unbox = function () {
    return this.ints;
  };
  RgbaPremultipliedArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  RgbaPremultipliedArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function mix($receiver, src) {
    var dst = $receiver;
    var srcAf = src.af;
    var oneMSrcAf = 1.0 - srcAf;
    var outA = numberToInt(src.a + dst.a * oneMSrcAf);
    var outR = numberToInt(src.r + dst.r * oneMSrcAf);
    var outG = numberToInt(src.g + dst.g * oneMSrcAf);
    var outB = numberToInt(src.b + dst.b * oneMSrcAf);
    return RGBAPremultiplied_init_0(outR, outG, outB, outA);
  }
  function RgbaArray(ints) {
    RgbaArray$Companion_getInstance();
    this.ints = ints;
  }
  function RgbaArray$Companion() {
    RgbaArray$Companion_instance = this;
  }
  RgbaArray$Companion.prototype.invoke_4yxr0d$ = function (colors) {
    var destination = ArrayList_init(colors.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== colors.length; ++tmp$) {
      var item = colors[tmp$];
      destination.add_11rb$(item.value);
    }
    return new RgbaArray(toIntArray(destination));
  };
  RgbaArray$Companion.prototype.invoke_za3lpa$ = function (size) {
    return new RgbaArray(new Int32Array(size));
  };
  RgbaArray$Companion.prototype.invoke_bvgci3$ = function (size, callback) {
    var $receiver = new RgbaArray(new Int32Array(size));
    for (var n = 0; n < size; n++)
      $receiver.set_vlvk8p$(n, callback(n));
    return $receiver;
  };
  RgbaArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RgbaArray$Companion_instance = null;
  function RgbaArray$Companion_getInstance() {
    if (RgbaArray$Companion_instance === null) {
      new RgbaArray$Companion();
    }
    return RgbaArray$Companion_instance;
  }
  RgbaArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new GenericSubList(this, fromIndex, toIndex);
  };
  RgbaArray.prototype.contains_11rb$ = function (element) {
    return contains(this.ints, element.value);
  };
  RgbaArray.prototype.containsAll_brywnq$ = function (elements) {
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
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  RgbaArray.prototype.indexOf_11rb$ = function (element) {
    return indexOf(this.ints, element.value);
  };
  RgbaArray.prototype.lastIndexOf_11rb$ = function (element) {
    return lastIndexOf(this.ints, element.value);
  };
  RgbaArray.prototype.isEmpty = function () {
    return this.ints.length === 0;
  };
  RgbaArray.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  RgbaArray.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  RgbaArray.prototype.listIterator_za3lpa$ = function (index) {
    return new GenericListIterator(this, index);
  };
  Object.defineProperty(RgbaArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  RgbaArray.prototype.get_za3lpa$ = function (index) {
    return new RGBA(this.ints[index]);
  };
  RgbaArray.prototype.set_vlvk8p$ = function (index, color) {
    this.ints[index] = color.value;
  };
  RgbaArray.prototype.fill_eb600h$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    arrayfill(this.ints, value.value, start, end);
  };
  RgbaArray.prototype.depremultiply_vux9f0$ = function (start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    for (var n = start; n < end; n++)
      this.set_vlvk8p$(n, asPremultiplied(this.get_za3lpa$(n)).depremultiplied);
    return asPremultiplied_0(this);
  };
  RgbaArray.prototype.toString = function () {
    return 'RgbaArray(' + this.size + ')';
  };
  RgbaArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RgbaArray',
    interfaces: [List]
  };
  RgbaArray.prototype.unbox = function () {
    return this.ints;
  };
  RgbaArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  RgbaArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function mix_0($receiver, other, ratio) {
    return RGBA$Companion_getInstance().mixRgba_utyrs$($receiver, other, ratio);
  }
  function toRgbaArray($receiver) {
    var array = new Int32Array($receiver.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = $receiver.get_za3lpa$(i).value;
    }
    return new RgbaArray(array);
  }
  function arraycopy(src, srcPos, dst, dstPos, size) {
    arrayCopy(src.ints, dst.ints, dstPos, srcPos, srcPos + size | 0);
  }
  function depremultiplyFaster($receiver, v) {
    return asPremultiplied(v).depremultiplied;
  }
  function depremultiplyFastest($receiver, v) {
    return asPremultiplied(v).depremultiplied;
  }
  function toRgbaArray$lambda(this$toRgbaArray) {
    return function (it) {
      return this$toRgbaArray[it];
    };
  }
  function toRgbaArray_0($receiver) {
    return RgbaArray$Companion_getInstance().invoke_bvgci3$($receiver.length, toRgbaArray$lambda($receiver));
  }
  function RGBA_4444() {
    RGBA_4444_instance = this;
    this.$delegate_kmfwcy$_0 = new ColorFormat$Mixin(16, 0, 4, 4, 4, 8, 4, 12, 4);
  }
  Object.defineProperty(RGBA_4444.prototype, 'bpp', {
    get: function () {
      return this.$delegate_kmfwcy$_0.bpp;
    }
  });
  RGBA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getA_za3lpa$(v);
  };
  RGBA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getB_za3lpa$(v);
  };
  RGBA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getG_za3lpa$(v);
  };
  RGBA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getR_za3lpa$(v);
  };
  RGBA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmfwcy$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_4444.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA_4444',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGBA_4444_instance = null;
  function RGBA_4444_getInstance() {
    if (RGBA_4444_instance === null) {
      new RGBA_4444();
    }
    return RGBA_4444_instance;
  }
  function RGBA_5551() {
    RGBA_5551_instance = this;
    this.$delegate_kmf8ly$_0 = new ColorFormat$Mixin(16, 0, 5, 5, 5, 10, 5, 15, 1);
  }
  Object.defineProperty(RGBA_5551.prototype, 'bpp', {
    get: function () {
      return this.$delegate_kmf8ly$_0.bpp;
    }
  });
  RGBA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getA_za3lpa$(v);
  };
  RGBA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getB_za3lpa$(v);
  };
  RGBA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getG_za3lpa$(v);
  };
  RGBA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getR_za3lpa$(v);
  };
  RGBA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmf8ly$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_5551.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA_5551',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGBA_5551_instance = null;
  function RGBA_5551_getInstance() {
    if (RGBA_5551_instance === null) {
      new RGBA_5551();
    }
    return RGBA_5551_instance;
  }
  function RGB_555() {
    RGB_555_instance = this;
    this.$delegate_x15h52$_0 = new ColorFormat$Mixin(16, 0, 5, 5, 5, 10, 5, 15, 0);
  }
  Object.defineProperty(RGB_555.prototype, 'bpp', {
    get: function () {
      return this.$delegate_x15h52$_0.bpp;
    }
  });
  RGB_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getA_za3lpa$(v);
  };
  RGB_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getB_za3lpa$(v);
  };
  RGB_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getG_za3lpa$(v);
  };
  RGB_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getR_za3lpa$(v);
  };
  RGB_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h52$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_555.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB_555',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGB_555_instance = null;
  function RGB_555_getInstance() {
    if (RGB_555_instance === null) {
      new RGB_555();
    }
    return RGB_555_instance;
  }
  function RGB_565() {
    RGB_565_instance = this;
    this.$delegate_x15h5x$_0 = new ColorFormat$Mixin(16, 0, 5, 5, 6, 11, 5, 15, 0);
  }
  Object.defineProperty(RGB_565.prototype, 'bpp', {
    get: function () {
      return this.$delegate_x15h5x$_0.bpp;
    }
  });
  RGB_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getA_za3lpa$(v);
  };
  RGB_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getB_za3lpa$(v);
  };
  RGB_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getG_za3lpa$(v);
  };
  RGB_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getR_za3lpa$(v);
  };
  RGB_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h5x$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_565.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB_565',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGB_565_instance = null;
  function RGB_565_getInstance() {
    if (RGB_565_instance === null) {
      new RGB_565();
    }
    return RGB_565_instance;
  }
  function BGRA_4444() {
    BGRA_4444_instance = this;
    this.$delegate_htfjwy$_0 = new ColorFormat$Mixin(16, 8, 4, 4, 4, 0, 4, 12, 4);
  }
  Object.defineProperty(BGRA_4444.prototype, 'bpp', {
    get: function () {
      return this.$delegate_htfjwy$_0.bpp;
    }
  });
  BGRA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getA_za3lpa$(v);
  };
  BGRA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getB_za3lpa$(v);
  };
  BGRA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getG_za3lpa$(v);
  };
  BGRA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getR_za3lpa$(v);
  };
  BGRA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htfjwy$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_4444.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA_4444',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGRA_4444_instance = null;
  function BGRA_4444_getInstance() {
    if (BGRA_4444_instance === null) {
      new BGRA_4444();
    }
    return BGRA_4444_instance;
  }
  function BGR_555() {
    BGR_555_instance = this;
    this.$delegate_bixszq$_0 = new ColorFormat$Mixin(16, 10, 5, 5, 5, 0, 5, 15, 0);
  }
  Object.defineProperty(BGR_555.prototype, 'bpp', {
    get: function () {
      return this.$delegate_bixszq$_0.bpp;
    }
  });
  BGR_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getA_za3lpa$(v);
  };
  BGR_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getB_za3lpa$(v);
  };
  BGR_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getG_za3lpa$(v);
  };
  BGR_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getR_za3lpa$(v);
  };
  BGR_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixszq$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_555.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR_555',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGR_555_instance = null;
  function BGR_555_getInstance() {
    if (BGR_555_instance === null) {
      new BGR_555();
    }
    return BGR_555_instance;
  }
  function BGR_565() {
    BGR_565_instance = this;
    this.$delegate_bixt0l$_0 = new ColorFormat$Mixin(16, 11, 5, 5, 6, 0, 5, 15, 0);
  }
  Object.defineProperty(BGR_565.prototype, 'bpp', {
    get: function () {
      return this.$delegate_bixt0l$_0.bpp;
    }
  });
  BGR_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getA_za3lpa$(v);
  };
  BGR_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getB_za3lpa$(v);
  };
  BGR_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getG_za3lpa$(v);
  };
  BGR_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getR_za3lpa$(v);
  };
  BGR_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixt0l$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_565.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR_565',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGR_565_instance = null;
  function BGR_565_getInstance() {
    if (BGR_565_instance === null) {
      new BGR_565();
    }
    return BGR_565_instance;
  }
  function BGRA_5551() {
    BGRA_5551_instance = this;
    this.$delegate_htew5y$_0 = new ColorFormat$Mixin(16, 10, 5, 5, 5, 0, 5, 15, 1);
  }
  Object.defineProperty(BGRA_5551.prototype, 'bpp', {
    get: function () {
      return this.$delegate_htew5y$_0.bpp;
    }
  });
  BGRA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getA_za3lpa$(v);
  };
  BGRA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getB_za3lpa$(v);
  };
  BGRA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getG_za3lpa$(v);
  };
  BGRA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getR_za3lpa$(v);
  };
  BGRA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htew5y$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_5551.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA_5551',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGRA_5551_instance = null;
  function BGRA_5551_getInstance() {
    if (BGRA_5551_instance === null) {
      new BGRA_5551();
    }
    return BGRA_5551_instance;
  }
  function RGBAd(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  RGBAd.prototype.set_6y0v78$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };
  RGBAd.prototype.add_6y0v78$ = function (r, g, b, a) {
    this.r = this.r + r;
    this.g = this.g + g;
    this.b = this.b + b;
    this.a = this.a + a;
  };
  RGBAd.prototype.set_h1ferx$ = function (c) {
    this.set_6y0v78$(c.r, c.g, c.b, c.a);
  };
  RGBAd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAd',
    interfaces: []
  };
  function RGBAd_init(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, c.r, c.g, c.b, c.a);
    return $this;
  }
  function RGBAd_init_0(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, getRd(RGBA$Companion_getInstance(), c), getGd(RGBA$Companion_getInstance(), c), getBd(RGBA$Companion_getInstance(), c), getAd(RGBA$Companion_getInstance(), c));
    return $this;
  }
  function RGBAd_init_1($this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function RGBAf(_r, _g, _b, _a) {
    if (_r === void 0)
      _r = 1.0;
    if (_g === void 0)
      _g = 1.0;
    if (_b === void 0)
      _b = 1.0;
    if (_a === void 0)
      _a = 1.0;
    this._r_0 = _r;
    this._g_0 = _g;
    this._b_0 = _b;
    this._a_0 = _a;
    this.dirty_0 = true;
    this._rgba_0 = new RGBA(-1);
  }
  Object.defineProperty(RGBAf.prototype, 'r', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'g', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'b', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'a', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'rd', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'gd', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'bd', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'ad', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  RGBAf.prototype.makeDirty_0 = function () {
    this.dirty_0 = true;
  };
  Object.defineProperty(RGBAf.prototype, 'rgba', {
    get: function () {
      if (this.dirty_0) {
        this.dirty_0 = false;
        this._rgba_0 = RGBA$Companion_getInstance().float_7b5o5w$(this._r_0, this._g_0, this._b_0, this._a_0);
      }
      return this._rgba_0;
    }
  });
  RGBAf.prototype.setTo_7b5o5w$ = function (r, g, b, a) {
    this._r_0 = r;
    this._g_0 = g;
    this._b_0 = b;
    this._a_0 = a;
    this.makeDirty_0();
  };
  RGBAf.prototype.copyFrom_h1ferv$ = function (that) {
    this.setTo_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_h1ferv$ = function (that) {
    this.setToMultiply_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_7b5o5w$ = function (r, g, b, a) {
    this.setTo_7b5o5w$(this.r * r, this.g * g, this.b * b, this.a * a);
  };
  RGBAf.prototype.toRGBA = function () {
    return RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(this.r * 255) & 255, numberToInt(this.g * 255) & 255, numberToInt(this.b * 255) & 255, numberToInt(this.a * 255) & 255);
  };
  RGBAf.prototype.setToIdentity = function () {
    this.setTo_7b5o5w$(1.0, 1.0, 1.0, 1.0);
  };
  RGBAf.prototype.toString = function () {
    return 'RGBAf(' + get_niceStr_0(this.r) + ', ' + get_niceStr_0(this.g) + ', ' + get_niceStr_0(this.b) + ', ' + get_niceStr_0(this.a) + ')';
  };
  RGBAf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAf',
    interfaces: []
  };
  var RGBAf_0 = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.RGBAf_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var RGBAf_init = _.com.soywiz.korim.color.RGBAf;
    return function (r, g, b, a) {
      return new RGBAf_init(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }));
  function setToColorPremultiplied($receiver, col) {
    toPremultipliedVector3D(col, $receiver);
    return $receiver;
  }
  function setToColor($receiver, col) {
    toPremultipliedVector3D(col, $receiver);
    return $receiver;
  }
  function toPremultipliedVector3D($receiver, out) {
    if (out === void 0)
      out = new Vector3D();
    return out.setTo_7b5o5w$($receiver.rf * $receiver.af, $receiver.gf * $receiver.af, $receiver.bf * $receiver.af, 1.0);
  }
  function toVector3D($receiver, out) {
    if (out === void 0)
      out = new Vector3D();
    return out.setTo_7b5o5w$($receiver.rf, $receiver.gf, $receiver.bf, $receiver.af);
  }
  function YCbCr(value) {
    YCbCr$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(YCbCr.prototype, 'y', {
    get: function () {
      return extract8(this.value, 0);
    }
  });
  Object.defineProperty(YCbCr.prototype, 'cb', {
    get: function () {
      return extract8(this.value, 8);
    }
  });
  Object.defineProperty(YCbCr.prototype, 'cr', {
    get: function () {
      return extract8(this.value, 16);
    }
  });
  Object.defineProperty(YCbCr.prototype, 'a', {
    get: function () {
      return extract8(this.value, 24);
    }
  });
  function YCbCr$Companion() {
    YCbCr$Companion_instance = this;
    ColorFormat32.call(this);
  }
  YCbCr$Companion.prototype.getY_za3lpa$ = function (v) {
    return (new YCbCr(v)).y;
  };
  YCbCr$Companion.prototype.getCb_za3lpa$ = function (v) {
    return (new YCbCr(v)).cb;
  };
  YCbCr$Companion.prototype.getCr_za3lpa$ = function (v) {
    return (new YCbCr(v)).cr;
  };
  YCbCr$Companion.prototype.getR_za3lpa$ = function (v) {
    return this.getY_za3lpa$(v);
  };
  YCbCr$Companion.prototype.getG_za3lpa$ = function (v) {
    return this.getCb_za3lpa$(v);
  };
  YCbCr$Companion.prototype.getB_za3lpa$ = function (v) {
    return this.getCr_za3lpa$(v);
  };
  YCbCr$Companion.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YCbCr$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  YCbCr$Companion.prototype.getY_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0 + 0.299 * r + 0.587 * g + 0.114 * b));
  };
  YCbCr$Companion.prototype.getCb_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(128 - 0.168736 * r - 0.331264 * g + 0.5 * b));
  };
  YCbCr$Companion.prototype.getCr_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(128 + 0.5 * r - 0.418688 * g - 0.081312 * b));
  };
  YCbCr$Companion.prototype.getR_qt1dr2$ = function (y, cb, cr) {
    return clamp0_255(numberToInt(y + 1.402 * (cr - 128 | 0)));
  };
  YCbCr$Companion.prototype.getG_qt1dr2$ = function (y, cb, cr) {
    return clamp0_255(numberToInt(y - 0.34414 * (cb - 128 | 0) - 0.71414 * (cr - 128 | 0)));
  };
  YCbCr$Companion.prototype.getB_qt1dr2$ = function (y, cb, cr) {
    return clamp0_255(numberToInt(y + 1.772 * (cb - 128 | 0)));
  };
  YCbCr$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var YCbCr$Companion_instance = null;
  function YCbCr$Companion_getInstance() {
    if (YCbCr$Companion_instance === null) {
      new YCbCr$Companion();
    }
    return YCbCr$Companion_instance;
  }
  YCbCr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YCbCr',
    interfaces: []
  };
  function YCbCr_init(y, cb, cr, a, $this) {
    if (a === void 0)
      a = 255;
    $this = $this || Object.create(YCbCr.prototype);
    YCbCr.call($this, packIntClamped(y, cb, cr, a));
    return $this;
  }
  YCbCr.prototype.unbox = function () {
    return this.value;
  };
  YCbCr.prototype.toString = function () {
    return 'YCbCr(value=' + Kotlin.toString(this.value) + ')';
  };
  YCbCr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  YCbCr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function YCbCrArray(ints) {
    this.ints = ints;
  }
  Object.defineProperty(YCbCrArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  YCbCrArray.prototype.get_za3lpa$ = function (index) {
    return new YCbCr(this.ints[index]);
  };
  YCbCrArray.prototype.set_ep708k$ = function (index, color) {
    this.ints[index] = color.value;
  };
  YCbCrArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YCbCrArray',
    interfaces: []
  };
  YCbCrArray.prototype.unbox = function () {
    return this.ints;
  };
  YCbCrArray.prototype.toString = function () {
    return 'YCbCrArray(ints=' + Kotlin.toString(this.ints) + ')';
  };
  YCbCrArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  YCbCrArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function toYCbCr($receiver) {
    return YCbCr_init(YCbCr$Companion_getInstance().getY_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YCbCr$Companion_getInstance().getCb_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YCbCr$Companion_getInstance().getCr_qt1dr2$($receiver.r, $receiver.g, $receiver.b), $receiver.a);
  }
  function toRGBA_1($receiver) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(YCbCr$Companion_getInstance().getR_qt1dr2$($receiver.y, $receiver.cb, $receiver.cr), YCbCr$Companion_getInstance().getG_qt1dr2$($receiver.y, $receiver.cb, $receiver.cr), YCbCr$Companion_getInstance().getB_qt1dr2$($receiver.y, $receiver.cb, $receiver.cr), $receiver.a);
  }
  function YUVA(value) {
    YUVA$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(YUVA.prototype, 'y', {
    get: function () {
      return extract8(this.value, 0);
    }
  });
  Object.defineProperty(YUVA.prototype, 'u', {
    get: function () {
      return extract8(this.value, 8);
    }
  });
  Object.defineProperty(YUVA.prototype, 'v', {
    get: function () {
      return extract8(this.value, 16);
    }
  });
  Object.defineProperty(YUVA.prototype, 'a', {
    get: function () {
      return extract8(this.value, 24);
    }
  });
  function YUVA$Companion() {
    YUVA$Companion_instance = this;
    ColorFormat32.call(this);
  }
  YUVA$Companion.prototype.getY_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  YUVA$Companion.prototype.getU_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  YUVA$Companion.prototype.getV_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  YUVA$Companion.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YUVA$Companion.prototype.getR_za3lpa$ = function (v) {
    return this.getR_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA$Companion.prototype.getG_za3lpa$ = function (v) {
    return this.getG_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA$Companion.prototype.getB_za3lpa$ = function (v) {
    return this.getB_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return toYUVA(RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a)).value;
  };
  YUVA$Companion.prototype.getY_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0.299 * r + 0.587 * g + 0.114 * b));
  };
  YUVA$Companion.prototype.getU_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0.492 * Kotlin.imul(b, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA$Companion.prototype.getV_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0.877 * Kotlin.imul(r, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA$Companion.prototype.getR_qt1dr2$ = function (y, u, v) {
    return clamp0_255(numberToInt(y + 1.14 * v));
  };
  YUVA$Companion.prototype.getG_qt1dr2$ = function (y, u, v) {
    return clamp0_255(numberToInt(y - 0.395 * u - 0.581 * v));
  };
  YUVA$Companion.prototype.getB_qt1dr2$ = function (y, u, v) {
    return clamp0_255(numberToInt(y + 2.033 * u));
  };
  YUVA$Companion.prototype.YUVtoRGB_5w4zhm$ = function (out, outPos, inY, inU, inV, inPos, count) {
    for (var n = 0; n < count; n++) {
      out.set_vlvk8p$(outPos + n | 0, toRGBA_2(YUVA_init(inY[inPos + n | 0] & 255, (inU[inPos + n | 0] & 255) - 128 | 0, (inV[inPos + n | 0] & 255) - 128 | 0, 255)));
    }
  };
  YUVA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var YUVA$Companion_instance = null;
  function YUVA$Companion_getInstance() {
    if (YUVA$Companion_instance === null) {
      new YUVA$Companion();
    }
    return YUVA$Companion_instance;
  }
  YUVA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YUVA',
    interfaces: []
  };
  function YUVA_init(y, u, v, a, $this) {
    $this = $this || Object.create(YUVA.prototype);
    YUVA.call($this, packIntClamped(y, u, v, a));
    return $this;
  }
  YUVA.prototype.unbox = function () {
    return this.value;
  };
  YUVA.prototype.toString = function () {
    return 'YUVA(value=' + Kotlin.toString(this.value) + ')';
  };
  YUVA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  YUVA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function YuvaArray(ints) {
    this.ints = ints;
  }
  Object.defineProperty(YuvaArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  YuvaArray.prototype.get_za3lpa$ = function (index) {
    return new YUVA(this.ints[index]);
  };
  YuvaArray.prototype.set_vlqsh2$ = function (index, color) {
    this.ints[index] = color.value;
  };
  YuvaArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YuvaArray',
    interfaces: []
  };
  YuvaArray.prototype.unbox = function () {
    return this.ints;
  };
  YuvaArray.prototype.toString = function () {
    return 'YuvaArray(ints=' + Kotlin.toString(this.ints) + ')';
  };
  YuvaArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  YuvaArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function toYUVA($receiver) {
    return YUVA_init(YUVA$Companion_getInstance().getY_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YUVA$Companion_getInstance().getU_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YUVA$Companion_getInstance().getV_qt1dr2$($receiver.r, $receiver.g, $receiver.b), $receiver.a);
  }
  function toRGBA_2($receiver) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(YUVA$Companion_getInstance().getR_qt1dr2$($receiver.y, $receiver.u, $receiver.v), YUVA$Companion_getInstance().getG_qt1dr2$($receiver.y, $receiver.u, $receiver.v), YUVA$Companion_getInstance().getB_qt1dr2$($receiver.y, $receiver.u, $receiver.v), $receiver.a);
  }
  function BitmapFont(atlas, fontSize, lineHeight, base, glyphs, kernings) {
    BitmapFont$Companion_getInstance();
    this.atlas = atlas;
    this.fontSize = fontSize;
    this.lineHeight = lineHeight;
    this.base = base;
    this.glyphs = glyphs;
    this.kernings = kernings;
    this.$delegate_cxq5x$_0 = new Extra$Mixin();
    this.dummyGlyph_nafmsz$_0 = lazy(BitmapFont$dummyGlyph$lambda);
    this.anyGlyph_2vk30p$_0 = lazy(BitmapFont$anyGlyph$lambda(this));
    this.baseBmp_xvm393$_0 = lazy(BitmapFont$baseBmp$lambda(this));
  }
  BitmapFont.prototype.measureWidth_61zpoe$ = function (text) {
    var tmp$;
    var x = 0;
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var glyph = this.glyphs.get_za3lpa$(c | 0);
      if (glyph != null)
        x = x + glyph.xadvance | 0;
    }
    return x;
  };
  BitmapFont.prototype.drawText_y4cp3m$ = function (bmp, str, x, y, color) {
    if (x === void 0)
      x = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    var tmp$;
    var py = y;
    var px = x;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var g = this.glyphs.get_za3lpa$(c | 0);
      if (g != null) {
        bmp.drawUnoptimized_w6lfje$(g.texture, px, py);
        px = px + g.xadvance | 0;
      }
      if (c === 10) {
        py = py + this.lineHeight | 0;
        px = x;
      }
    }
  };
  BitmapFont.prototype.getKerning_o3jtqy$ = function (first, second) {
    return this.getKerning_vux9f0$(first | 0, second | 0);
  };
  BitmapFont.prototype.getKerning_vux9f0$ = function (first, second) {
    return this.kernings.get_za3lpa$(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(first, second));
  };
  function BitmapFont$Kerning(first, second, amount) {
    BitmapFont$Kerning$Companion_getInstance();
    this.first = first;
    this.second = second;
    this.amount = amount;
  }
  function BitmapFont$Kerning$Companion() {
    BitmapFont$Kerning$Companion_instance = this;
  }
  BitmapFont$Kerning$Companion.prototype.buildKey_vux9f0$ = function (f, s) {
    return f | s << 16;
  };
  BitmapFont$Kerning$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Kerning$Companion_instance = null;
  function BitmapFont$Kerning$Companion_getInstance() {
    if (BitmapFont$Kerning$Companion_instance === null) {
      new BitmapFont$Kerning$Companion();
    }
    return BitmapFont$Kerning$Companion_instance;
  }
  BitmapFont$Kerning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kerning',
    interfaces: []
  };
  function BitmapFont$Glyph(id, texture, xoffset, yoffset, xadvance) {
    this.id = id;
    this.texture = texture;
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.xadvance = xadvance;
  }
  BitmapFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  Object.defineProperty(BitmapFont.prototype, 'dummyGlyph', {
    get: function () {
      return this.dummyGlyph_nafmsz$_0.value;
    }
  });
  Object.defineProperty(BitmapFont.prototype, 'anyGlyph', {
    get: function () {
      return this.anyGlyph_2vk30p$_0.value;
    }
  });
  Object.defineProperty(BitmapFont.prototype, 'baseBmp', {
    get: function () {
      return this.baseBmp_xvm393$_0.value;
    }
  });
  BitmapFont.prototype.get_za3lpa$ = function (charCode) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.glyphs.get_za3lpa$(charCode)) != null ? tmp$ : this.glyphs.get_za3lpa$(32)) != null ? tmp$_0 : this.dummyGlyph;
  };
  BitmapFont.prototype.get_s8itvh$ = function (char) {
    return this.get_za3lpa$(char | 0);
  };
  function BitmapFont$Companion() {
    BitmapFont$Companion_instance = this;
  }
  BitmapFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Companion_instance = null;
  function BitmapFont$Companion_getInstance() {
    if (BitmapFont$Companion_instance === null) {
      new BitmapFont$Companion();
    }
    return BitmapFont$Companion_instance;
  }
  Object.defineProperty(BitmapFont.prototype, 'extra', {
    get: function () {
      return this.$delegate_cxq5x$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_cxq5x$_0.extra = tmp$;
    }
  });
  function BitmapFont$dummyGlyph$lambda() {
    return new BitmapFont$Glyph(-1, Bitmaps_getInstance().transparent, 0, 0, 0);
  }
  function BitmapFont$anyGlyph$lambda(this$BitmapFont) {
    return function () {
      var tmp$;
      return (tmp$ = this$BitmapFont.glyphs.get_za3lpa$(this$BitmapFont.glyphs.keys.iterator().next())) != null ? tmp$ : this$BitmapFont.dummyGlyph;
    };
  }
  function BitmapFont$baseBmp$lambda(this$BitmapFont) {
    return function () {
      return this$BitmapFont.anyGlyph.texture.bmp;
    };
  }
  BitmapFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFont',
    interfaces: [Extra]
  };
  function Coroutine$readBitmapFont($receiver_0, imageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$fntFile = void 0;
    this.local$$receiver = $receiver_0;
    this.local$imageFormat = imageFormat_0;
  }
  Coroutine$readBitmapFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFont.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFont.prototype.constructor = Coroutine$readBitmapFont;
  Coroutine$readBitmapFont.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormat === void 0)
              this.local$imageFormat = RegisteredImageFormats_getInstance();
            this.local$fntFile = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$fntFile.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var tmp$;
            var content = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
            var textures = HashMap_init();
            if (startsWith_0(content, 60)) {
              this.state_0 = 5;
              this.result_0 = readBitmapFontXml(content, this.local$fntFile, textures, this.local$imageFormat, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (startsWith(content, 'info')) {
                this.state_0 = 3;
                this.result_0 = readBitmapFontTxt(content, this.local$fntFile, textures, this.local$imageFormat, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported font type starting with ' + substr_0(content, 0, 16)));
              }
            }

          case 3:
            return this.result_0;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return this.result_0;
          case 6:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapFont($receiver_0, imageFormat_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFont($receiver_0, imageFormat_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readBitmapFontTxt$BmpChar(id, x, y, width, height, xoffset, yoffset, xadvance, page, chnl) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.xadvance = xadvance;
    this.page = page;
    this.chnl = chnl;
  }
  readBitmapFontTxt$BmpChar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BmpChar',
    interfaces: []
  };
  readBitmapFontTxt$BmpChar.prototype.component1 = function () {
    return this.id;
  };
  readBitmapFontTxt$BmpChar.prototype.component2 = function () {
    return this.x;
  };
  readBitmapFontTxt$BmpChar.prototype.component3 = function () {
    return this.y;
  };
  readBitmapFontTxt$BmpChar.prototype.component4 = function () {
    return this.width;
  };
  readBitmapFontTxt$BmpChar.prototype.component5 = function () {
    return this.height;
  };
  readBitmapFontTxt$BmpChar.prototype.component6 = function () {
    return this.xoffset;
  };
  readBitmapFontTxt$BmpChar.prototype.component7 = function () {
    return this.yoffset;
  };
  readBitmapFontTxt$BmpChar.prototype.component8 = function () {
    return this.xadvance;
  };
  readBitmapFontTxt$BmpChar.prototype.component9 = function () {
    return this.page;
  };
  readBitmapFontTxt$BmpChar.prototype.component10 = function () {
    return this.chnl;
  };
  readBitmapFontTxt$BmpChar.prototype.copy_q2ofzg$ = function (id, x, y, width, height, xoffset, yoffset, xadvance, page, chnl) {
    return new readBitmapFontTxt$BmpChar(id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height, xoffset === void 0 ? this.xoffset : xoffset, yoffset === void 0 ? this.yoffset : yoffset, xadvance === void 0 ? this.xadvance : xadvance, page === void 0 ? this.page : page, chnl === void 0 ? this.chnl : chnl);
  };
  readBitmapFontTxt$BmpChar.prototype.toString = function () {
    return 'BmpChar(id=' + Kotlin.toString(this.id) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', xoffset=' + Kotlin.toString(this.xoffset)) + (', yoffset=' + Kotlin.toString(this.yoffset)) + (', xadvance=' + Kotlin.toString(this.xadvance)) + (', page=' + Kotlin.toString(this.page)) + (', chnl=' + Kotlin.toString(this.chnl)) + ')';
  };
  readBitmapFontTxt$BmpChar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.xoffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.yoffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.xadvance) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    result = result * 31 + Kotlin.hashCode(this.chnl) | 0;
    return result;
  };
  readBitmapFontTxt$BmpChar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.xoffset, other.xoffset) && Kotlin.equals(this.yoffset, other.yoffset) && Kotlin.equals(this.xadvance, other.xadvance) && Kotlin.equals(this.page, other.page) && Kotlin.equals(this.chnl, other.chnl)))));
  };
  function Coroutine$readBitmapFontTxt(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$kernings = void 0;
    this.local$glyphs = void 0;
    this.local$lineHeight = void 0;
    this.local$fontSize = void 0;
    this.local$base = void 0;
    this.local$id = void 0;
    this.local$content = content_0;
    this.local$fntFile = fntFile_0;
    this.local$textures = textures_0;
    this.local$imageFormat = imageFormat_0;
  }
  Coroutine$readBitmapFontTxt.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFontTxt.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFontTxt.prototype.constructor = Coroutine$readBitmapFontTxt;
  Coroutine$readBitmapFontTxt.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormat === void 0)
              this.local$imageFormat = RegisteredImageFormats_getInstance();
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
            this.local$kernings = ArrayList_init_0();
            this.local$glyphs = ArrayList_init_0();
            this.local$lineHeight = 16;
            this.local$fontSize = null;
            this.local$base = null;
            this.local$tmp$ = lines(this.local$content).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            var rline = this.local$tmp$.next();
            var tmp$_11;
            var line = trim(Kotlin.isCharSequence(tmp$_11 = rline) ? tmp$_11 : throwCCE()).toString();
            var map = LinkedHashMap_init();
            tmp$ = split_0(line, Kotlin.charArrayOf(32)).iterator();
            while (tmp$.hasNext()) {
              var part = tmp$.next();
              var tmp$_12 = plus(split_0(part, Kotlin.charArrayOf(61)), listOf(['', '']));
              var key = tmp$_12.get_za3lpa$(0);
              var value = tmp$_12.get_za3lpa$(1);
              map.put_xwzc9p$(key, value);
            }

            if (startsWith(line, 'info')) {
              this.local$fontSize = (tmp$_0 = map.get_11rb$('size')) != null ? toInt_0(tmp$_0) : null;
              this.state_0 = 5;
              continue;
            }
             else {
              if (startsWith(line, 'page')) {
                this.local$id = (tmp$_2 = (tmp$_1 = map.get_11rb$('id')) != null ? toInt_0(tmp$_1) : null) != null ? tmp$_2 : 0;
                var tmp$_13;
                if ((tmp$_4 = (tmp$_3 = map.get_11rb$('file')) != null ? unquote(tmp$_3) : null) != null)
                  tmp$_13 = tmp$_4;
                else {
                  throw IllegalStateException_init('page without file'.toString());
                }
                var file = tmp$_13;
                this.state_0 = 3;
                this.result_0 = readBitmapSlice(this.local$fntFile.parent.get_61zpoe$(file), void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (startsWith(line, 'common ')) {
                  this.local$lineHeight = (tmp$_6 = (tmp$_5 = map.get_11rb$('lineHeight')) != null ? toIntOrNull(tmp$_5) : null) != null ? tmp$_6 : 16;
                  this.local$base = (tmp$_7 = map.get_11rb$('base')) != null ? toIntOrNull(tmp$_7) : null;
                }
                 else if (startsWith(line, 'char ')) {
                  var page = (tmp$_9 = (tmp$_8 = map.get_11rb$('page')) != null ? toIntOrNull(tmp$_8) : null) != null ? tmp$_9 : 0;
                  var texture = (tmp$_10 = this.local$textures.get_11rb$(page)) != null ? tmp$_10 : first(this.local$textures.values);
                  var $receiver = KDynamic.Companion;
                  var tmp$_14, tmp$_15, tmp$_16, tmp$_17;
                  tmp$_14 = $receiver.get_int_mzud1t$(map.get_11rb$('id'));
                  tmp$_15 = $receiver.get_int_mzud1t$(map.get_11rb$('xoffset'));
                  tmp$_16 = $receiver.get_int_mzud1t$(map.get_11rb$('yoffset'));
                  tmp$_17 = $receiver.get_int_mzud1t$(map.get_11rb$('xadvance'));
                  var element = new BitmapFont$Glyph(tmp$_14, texture.sliceWithSize_tjonv8$($receiver.get_int_mzud1t$(map.get_11rb$('x')), $receiver.get_int_mzud1t$(map.get_11rb$('y')), $receiver.get_int_mzud1t$(map.get_11rb$('width')), $receiver.get_int_mzud1t$(map.get_11rb$('height'))), tmp$_15, tmp$_16, tmp$_17);
                  this.local$glyphs.add_11rb$(element);
                }
                 else if (startsWith(line, 'kerning ')) {
                  var tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23;
                  var element_0 = new BitmapFont$Kerning((tmp$_19 = (tmp$_18 = map.get_11rb$('first')) != null ? toIntOrNull(tmp$_18) : null) != null ? tmp$_19 : 0, (tmp$_21 = (tmp$_20 = map.get_11rb$('second')) != null ? toIntOrNull(tmp$_20) : null) != null ? tmp$_21 : 0, (tmp$_23 = (tmp$_22 = map.get_11rb$('amount')) != null ? toIntOrNull(tmp$_22) : null) != null ? tmp$_23 : 0);
                  this.local$kernings.add_11rb$(element_0);
                }
                this.state_0 = 4;
                continue;
              }
            }

          case 3:
            var value_0 = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id, value_0);
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            var tmp$_24 = first(this.local$textures.values).bmp;
            var tmp$_25 = this.local$fontSize != null ? this.local$fontSize : 16;
            var tmp$_26 = this.local$lineHeight;
            var tmp$_27 = this.local$base != null ? this.local$base : this.local$lineHeight;
            var destination = ArrayList_init(collectionSizeOrDefault(this.local$glyphs, 10));
            var tmp$_28;
            tmp$_28 = this.local$glyphs.iterator();
            while (tmp$_28.hasNext()) {
              var item = tmp$_28.next();
              destination.add_11rb$(to(item.id, item));
            }

            var tmp$_29 = toIntMap(toMap(destination));
            var destination_0 = ArrayList_init(collectionSizeOrDefault(this.local$kernings, 10));
            var tmp$_30;
            tmp$_30 = this.local$kernings.iterator();
            while (tmp$_30.hasNext()) {
              var item_0 = tmp$_30.next();
              destination_0.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_0.first, item_0.second), item_0));
            }

            return new BitmapFont(tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_29, toIntMap(toMap(destination_0)));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapFontTxt(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFontTxt(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapFontXml(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_5 = void 0;
    this.local$xml = void 0;
    this.local$fontSize = void 0;
    this.local$lineHeight = void 0;
    this.local$base = void 0;
    this.local$id = void 0;
    this.local$content = content_0;
    this.local$fntFile = fntFile_0;
    this.local$textures = textures_0;
    this.local$imageFormat = imageFormat_0;
  }
  Coroutine$readBitmapFontXml.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFontXml.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFontXml.prototype.constructor = Coroutine$readBitmapFontXml;
  Coroutine$readBitmapFontXml.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormat === void 0)
              this.local$imageFormat = RegisteredImageFormats_getInstance();
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
            this.local$xml = Xml(this.local$content);
            this.local$fontSize = (tmp$_0 = (tmp$ = firstOrNull(this.local$xml.get_61zpoe$('info'))) != null ? tmp$.int_bm4lxs$('size', 16) : null) != null ? tmp$_0 : 16;
            this.local$lineHeight = (tmp$_2 = (tmp$_1 = firstOrNull(this.local$xml.get_61zpoe$('common'))) != null ? tmp$_1.int_bm4lxs$('lineHeight', 16) : null) != null ? tmp$_2 : 16;
            this.local$base = (tmp$_4 = (tmp$_3 = firstOrNull(this.local$xml.get_61zpoe$('common'))) != null ? tmp$_3.int_bm4lxs$('base', 16) : null) != null ? tmp$_4 : 16;
            this.local$tmp$_5 = get_0(this.local$xml.get_61zpoe$('pages'), 'page').iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$_5.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var page = this.local$tmp$_5.next();
            this.local$id = page.int_bm4lxs$('id');
            var file = page.str_puj7f4$('file');
            var texFile = this.local$fntFile.parent.get_61zpoe$(file);
            this.state_0 = 3;
            this.result_0 = readBitmapSlice(texFile, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var tex = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id, tex);
            this.state_0 = 2;
            continue;
          case 4:
            var $receiver = get_0(this.local$xml.get_61zpoe$('chars'), 'char');
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_5;
            tmp$_5 = $receiver.iterator();
            while (tmp$_5.hasNext()) {
              var item = tmp$_5.next();
              var tmp$_6 = destination.add_11rb$;
              var tmp$_7;
              var page_0 = item.int_bm4lxs$('page');
              var texture = (tmp$_7 = this.local$textures.get_11rb$(page_0)) != null ? tmp$_7 : first(this.local$textures.values);
              tmp$_6.call(destination, new BitmapFont$Glyph(item.int_bm4lxs$('id'), texture.sliceWithSize_tjonv8$(item.int_bm4lxs$('x'), item.int_bm4lxs$('y'), item.int_bm4lxs$('width'), item.int_bm4lxs$('height')), item.int_bm4lxs$('xoffset'), item.int_bm4lxs$('yoffset'), item.int_bm4lxs$('xadvance')));
            }

            var glyphs = destination;
            var $receiver_0 = get_0(this.local$xml.get_61zpoe$('kernings'), 'kerning');
            var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_8;
            tmp$_8 = $receiver_0.iterator();
            while (tmp$_8.hasNext()) {
              var item_0 = tmp$_8.next();
              destination_0.add_11rb$(new BitmapFont$Kerning(item_0.int_bm4lxs$('first'), item_0.int_bm4lxs$('second'), item_0.int_bm4lxs$('amount')));
            }

            var kernings = destination_0;
            var tmp$_9 = first(this.local$textures.values).bmp;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(glyphs, 10));
            var tmp$_10;
            tmp$_10 = glyphs.iterator();
            while (tmp$_10.hasNext()) {
              var item_1 = tmp$_10.next();
              destination_1.add_11rb$(to(item_1.id, item_1));
            }

            var tmp$_11 = toIntMap(toMap(destination_1));
            var destination_2 = ArrayList_init(collectionSizeOrDefault(kernings, 10));
            var tmp$_12;
            tmp$_12 = kernings.iterator();
            while (tmp$_12.hasNext()) {
              var item_2 = tmp$_12.next();
              destination_2.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_2.first, item_2.second), item_2));
            }

            return new BitmapFont(tmp$_9, this.local$fontSize, this.local$lineHeight, this.local$base, tmp$_11, toIntMap(toMap(destination_2)));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapFontXml(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFontXml(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function drawText($receiver, font, str, x, y, color) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    font.drawText_y4cp3m$($receiver, str, x, y, color);
  }
  function BitmapFontGenerator() {
    BitmapFontGenerator_instance = this;
    this.SPACE = ' ';
    this.UPPERCASE = joinToString(new CharRange(65, 90), '');
    this.LOWERCASE = joinToString(new CharRange(97, 122), '');
    this.NUMBERS = joinToString(new CharRange(48, 57), '');
    this.PUNCTUATION = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}';
    this.LATIN_BASIC = '\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5P\xC9\xE1\xED\xF3\xFA\xF1\xD1\xAA\xB0\xBF\xAC\xBD\xBC\xA1\xAB\xBB\xDF\xB5\xF8\xB1\xF7\xB0\xB7.\xB2';
    this.LATIN_ALL = this.SPACE + this.UPPERCASE + this.LOWERCASE + this.NUMBERS + this.PUNCTUATION + this.LATIN_BASIC;
  }
  BitmapFontGenerator.prototype.generate_b61t5x$ = function (fontName, fontSize, chars, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = true;
    var $receiver = get_indices(chars);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(chars.charCodeAt(item) | 0);
    }
    return this.generate_k3tiss$(fontName, fontSize, toIntArray(destination), mipmaps);
  };
  function BitmapFontGenerator$generate$lambda$GlyphInfo(char, rect, width) {
    this.char = char;
    this.rect = rect;
    this.width = width;
  }
  BitmapFontGenerator$generate$lambda$GlyphInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphInfo',
    interfaces: []
  };
  BitmapFontGenerator.prototype.generate_k3tiss$ = function (fontName, fontSize, chars, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = true;
    var result = {v: null};
    var start = klock.PerformanceCounter.microseconds;
    var bni = NativeImage_0(1, 1);
    var bnictx = bni.getContext2d_6taknv$();
    bnictx.font = new Context2d$Font(fontName, fontSize);
    var bitmapHeight = numberToInt(bnictx.getTextBounds_jznmvy$('a').bounds.height);
    var destination = ArrayList_init(chars.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== chars.length; ++tmp$) {
      var item = chars[tmp$];
      destination.add_11rb$(numberToInt(bnictx.getTextBounds_jznmvy$(String.fromCharCode(toChar(item))).bounds.width));
    }
    var widths = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(widths, 10));
    var tmp$_0;
    tmp$_0 = widths.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0 + 2 | 0);
    }
    var widthsSum = sum(destination_0);
    var ni = NativeImage_0(widthsSum, bitmapHeight);
    var g = ni.getContext2d_6taknv$();
    g.fillStyle = g.createColor_md34sx$(Colors_getInstance().WHITE);
    g.font = new Context2d$Font(fontName, fontSize);
    g.horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    g.verticalAlign = Context2d$VerticalAlign$TOP_getInstance();
    var glyphsInfo = ArrayList_init_0();
    var x = 0;
    var itemp = new Int32Array(1);
    for (var index = 0; index !== chars.length; ++index) {
      var char = chars[index];
      var width = widths.get_za3lpa$(index);
      itemp[0] = char;
      g.renderText_a7koit$(String_fromIntArray(itemp, 0, 1), numberToDouble(x), numberToDouble(0.0), true);
      var x_0 = x;
      var height = ni.height;
      var element = new BitmapFontGenerator$generate$lambda$GlyphInfo(char, new RectangleInt(new Rectangle(numberToDouble(x_0), numberToDouble(0), numberToDouble(width), numberToDouble(height))), width);
      glyphsInfo.add_11rb$(element);
      x = x + (width + 2) | 0;
    }
    var atlas = ni.toBMP32();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(glyphsInfo, 10)), 16);
    var destination_1 = LinkedHashMap_init_0(capacity);
    var tmp$_1;
    tmp$_1 = glyphsInfo.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var pair = to(element_0.char, new BitmapFont$Glyph(element_0.char, slice(atlas, element_0.rect), 0, 0, element_0.width));
      destination_1.put_xwzc9p$(pair.first, pair.second);
    }
    result.v = new BitmapFont(atlas, fontSize, fontSize, fontSize, toIntMap(destination_1), IntMap_init());
    var end = klock.PerformanceCounter.microseconds;
    var $receiver = end - start;
    var elapsed = TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
    var result_0 = new TimedResult_init(result.v == null ? throwUPAE('result') : result.v, elapsed);
    return result_0.result;
  };
  BitmapFontGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BitmapFontGenerator',
    interfaces: []
  };
  var BitmapFontGenerator_instance = null;
  function BitmapFontGenerator_getInstance() {
    if (BitmapFontGenerator_instance === null) {
      new BitmapFontGenerator();
    }
    return BitmapFontGenerator_instance;
  }
  function invoke($receiver, fontName, fontSize, chars, mipmaps) {
    if (chars === void 0)
      chars = BitmapFontGenerator_getInstance().LATIN_ALL;
    if (mipmaps === void 0)
      mipmaps = true;
    return BitmapFontGenerator_getInstance().generate_b61t5x$(fontName, fontSize, chars);
  }
  function TtfFont(s) {
    TtfFont$Companion_getInstance();
    this.s = s;
    this.tablesByName = LinkedHashMap_init();
    this.numGlyphs = 0;
    this.maxPoints = 0;
    this.maxContours = 0;
    this.maxCompositePoints = 0;
    this.maxCompositeContours = 0;
    this.maxZones = 0;
    this.maxTwilightPoints = 0;
    this.maxStorage = 0;
    this.maxFunctionDefs = 0;
    this.maxInstructionDefs = 0;
    this.maxStackElements = 0;
    this.maxSizeOfInstructions = 0;
    this.maxComponentElements = 0;
    this.maxComponentDepth = 0;
    this.hheaVersion = new TtfFont$Fixed(0, 0);
    this.ascender = 0;
    this.descender = 0;
    this.lineGap = 0;
    this.advanceWidthMax = 0;
    this.minLeftSideBearing = 0;
    this.minRightSideBearing = 0;
    this.xMaxExtent = 0;
    this.caretSlopeRise = 0;
    this.caretSlopeRun = 0;
    this.caretOffset = 0;
    this.metricDataFormat = 0;
    this.numberOfHMetrics = 0;
    this.locs = new Int32Array(0);
    this.fontRev = new TtfFont$Fixed(0, 0);
    this.unitsPerEm = 128;
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = 0;
    this.yMax = 0;
    this.macStyle = 0;
    this.lowestRecPPEM = 0;
    this.fontDirectionHint = 0;
    this.indexToLocFormat = 0;
    this.glyphDataFormat = 0;
    this.horMetrics = emptyList();
    this.characterMaps = LinkedHashMap_init();
    this.readHeaderTables();
    this.readHead();
    this.readMaxp();
    this.readHhea();
    this.readNames();
    this.readLoca();
    this.readCmap();
    this.readHmtx();
  }
  function TtfFont$Table(id, checksum, offset, length) {
    this.id = id;
    this.checksum = checksum;
    this.offset = offset;
    this.length = length;
    this.s_7sn1gr$_0 = this.s_7sn1gr$_0;
  }
  Object.defineProperty(TtfFont$Table.prototype, 's', {
    get: function () {
      if (this.s_7sn1gr$_0 == null)
        return throwUPAE('s');
      return this.s_7sn1gr$_0;
    },
    set: function (s) {
      this.s_7sn1gr$_0 = s;
    }
  });
  TtfFont$Table.prototype.open = function () {
    return this.s.clone();
  };
  TtfFont$Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: []
  };
  TtfFont$Table.prototype.component1 = function () {
    return this.id;
  };
  TtfFont$Table.prototype.component2 = function () {
    return this.checksum;
  };
  TtfFont$Table.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$Table.prototype.component4 = function () {
    return this.length;
  };
  TtfFont$Table.prototype.copy_wfrsr4$ = function (id, checksum, offset, length) {
    return new TtfFont$Table(id === void 0 ? this.id : id, checksum === void 0 ? this.checksum : checksum, offset === void 0 ? this.offset : offset, length === void 0 ? this.length : length);
  };
  TtfFont$Table.prototype.toString = function () {
    return 'Table(id=' + Kotlin.toString(this.id) + (', checksum=' + Kotlin.toString(this.checksum)) + (', offset=' + Kotlin.toString(this.offset)) + (', length=' + Kotlin.toString(this.length)) + ')';
  };
  TtfFont$Table.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.checksum) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    return result;
  };
  TtfFont$Table.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.checksum, other.checksum) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.length, other.length)))));
  };
  function TtfFont$NameIds(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$NameIds_initFields() {
    TtfFont$NameIds_initFields = function () {
    };
    TtfFont$NameIds$COPYRIGHT_instance = new TtfFont$NameIds('COPYRIGHT', 0, 0);
    TtfFont$NameIds$FONT_FAMILY_NAME_instance = new TtfFont$NameIds('FONT_FAMILY_NAME', 1, 1);
    TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance = new TtfFont$NameIds('FONT_SUBFAMILY_NAME', 2, 2);
    TtfFont$NameIds$UNIQUE_FONT_ID_instance = new TtfFont$NameIds('UNIQUE_FONT_ID', 3, 3);
    TtfFont$NameIds$FULL_FONT_NAME_instance = new TtfFont$NameIds('FULL_FONT_NAME', 4, 4);
    TtfFont$NameIds$VERSION_STRING_instance = new TtfFont$NameIds('VERSION_STRING', 5, 5);
    TtfFont$NameIds$POSTSCRIPT_NAME_instance = new TtfFont$NameIds('POSTSCRIPT_NAME', 6, 6);
    TtfFont$NameIds$TRADEMARK_instance = new TtfFont$NameIds('TRADEMARK', 7, 7);
    TtfFont$NameIds$MANUFACTURER_instance = new TtfFont$NameIds('MANUFACTURER', 8, 8);
    TtfFont$NameIds$DESIGNER_instance = new TtfFont$NameIds('DESIGNER', 9, 9);
    TtfFont$NameIds$DESCRIPTION_instance = new TtfFont$NameIds('DESCRIPTION', 10, 10);
    TtfFont$NameIds$URL_VENDOR_instance = new TtfFont$NameIds('URL_VENDOR', 11, 11);
    TtfFont$NameIds$URL_DESIGNER_instance = new TtfFont$NameIds('URL_DESIGNER', 12, 12);
    TtfFont$NameIds$LICENSE_DESCRIPTION_instance = new TtfFont$NameIds('LICENSE_DESCRIPTION', 13, 13);
    TtfFont$NameIds$LICENSE_URL_instance = new TtfFont$NameIds('LICENSE_URL', 14, 14);
    TtfFont$NameIds$RESERVED_15_instance = new TtfFont$NameIds('RESERVED_15', 15, 15);
    TtfFont$NameIds$TYPO_FAMILY_NAME_instance = new TtfFont$NameIds('TYPO_FAMILY_NAME', 16, 16);
    TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance = new TtfFont$NameIds('TYPO_SUBFAMILY_NAME', 17, 17);
    TtfFont$NameIds$COMPATIBLE_FULL_instance = new TtfFont$NameIds('COMPATIBLE_FULL', 18, 18);
    TtfFont$NameIds$SAMPLE_TEXT_instance = new TtfFont$NameIds('SAMPLE_TEXT', 19, 19);
    TtfFont$NameIds$POSTSCRIPT_CID_instance = new TtfFont$NameIds('POSTSCRIPT_CID', 20, 20);
    TtfFont$NameIds$WWS_FAMILY_NAME_instance = new TtfFont$NameIds('WWS_FAMILY_NAME', 21, 21);
    TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance = new TtfFont$NameIds('WWS_SUBFAMILY_NAME', 22, 22);
    TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('LIGHT_BACKGROUND_PALETTE', 23, 23);
    TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('DARK_BACKGROUND_PALETTE', 24, 24);
    TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance = new TtfFont$NameIds('VARIATIONS_POSTSCRIPT_NAME_PREFIX', 25, 25);
    TtfFont$NameIds$Companion_getInstance();
  }
  var TtfFont$NameIds$COPYRIGHT_instance;
  function TtfFont$NameIds$COPYRIGHT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COPYRIGHT_instance;
  }
  var TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  function TtfFont$NameIds$UNIQUE_FONT_ID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  }
  var TtfFont$NameIds$FULL_FONT_NAME_instance;
  function TtfFont$NameIds$FULL_FONT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FULL_FONT_NAME_instance;
  }
  var TtfFont$NameIds$VERSION_STRING_instance;
  function TtfFont$NameIds$VERSION_STRING_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VERSION_STRING_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  function TtfFont$NameIds$POSTSCRIPT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  }
  var TtfFont$NameIds$TRADEMARK_instance;
  function TtfFont$NameIds$TRADEMARK_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TRADEMARK_instance;
  }
  var TtfFont$NameIds$MANUFACTURER_instance;
  function TtfFont$NameIds$MANUFACTURER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$MANUFACTURER_instance;
  }
  var TtfFont$NameIds$DESIGNER_instance;
  function TtfFont$NameIds$DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESIGNER_instance;
  }
  var TtfFont$NameIds$DESCRIPTION_instance;
  function TtfFont$NameIds$DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESCRIPTION_instance;
  }
  var TtfFont$NameIds$URL_VENDOR_instance;
  function TtfFont$NameIds$URL_VENDOR_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_VENDOR_instance;
  }
  var TtfFont$NameIds$URL_DESIGNER_instance;
  function TtfFont$NameIds$URL_DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_DESIGNER_instance;
  }
  var TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  function TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  }
  var TtfFont$NameIds$LICENSE_URL_instance;
  function TtfFont$NameIds$LICENSE_URL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_URL_instance;
  }
  var TtfFont$NameIds$RESERVED_15_instance;
  function TtfFont$NameIds$RESERVED_15_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$RESERVED_15_instance;
  }
  var TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$COMPATIBLE_FULL_instance;
  function TtfFont$NameIds$COMPATIBLE_FULL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COMPATIBLE_FULL_instance;
  }
  var TtfFont$NameIds$SAMPLE_TEXT_instance;
  function TtfFont$NameIds$SAMPLE_TEXT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$SAMPLE_TEXT_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_CID_instance;
  function TtfFont$NameIds$POSTSCRIPT_CID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_CID_instance;
  }
  var TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  function TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  }
  function TtfFont$NameIds$Companion() {
    TtfFont$NameIds$Companion_instance = this;
    this.names = TtfFont$NameIds$values();
  }
  TtfFont$NameIds$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$NameIds$Companion_instance = null;
  function TtfFont$NameIds$Companion_getInstance() {
    TtfFont$NameIds_initFields();
    if (TtfFont$NameIds$Companion_instance === null) {
      new TtfFont$NameIds$Companion();
    }
    return TtfFont$NameIds$Companion_instance;
  }
  TtfFont$NameIds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NameIds',
    interfaces: [Enum]
  };
  function TtfFont$NameIds$values() {
    return [TtfFont$NameIds$COPYRIGHT_getInstance(), TtfFont$NameIds$FONT_FAMILY_NAME_getInstance(), TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$UNIQUE_FONT_ID_getInstance(), TtfFont$NameIds$FULL_FONT_NAME_getInstance(), TtfFont$NameIds$VERSION_STRING_getInstance(), TtfFont$NameIds$POSTSCRIPT_NAME_getInstance(), TtfFont$NameIds$TRADEMARK_getInstance(), TtfFont$NameIds$MANUFACTURER_getInstance(), TtfFont$NameIds$DESIGNER_getInstance(), TtfFont$NameIds$DESCRIPTION_getInstance(), TtfFont$NameIds$URL_VENDOR_getInstance(), TtfFont$NameIds$URL_DESIGNER_getInstance(), TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance(), TtfFont$NameIds$LICENSE_URL_getInstance(), TtfFont$NameIds$RESERVED_15_getInstance(), TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance(), TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$COMPATIBLE_FULL_getInstance(), TtfFont$NameIds$SAMPLE_TEXT_getInstance(), TtfFont$NameIds$POSTSCRIPT_CID_getInstance(), TtfFont$NameIds$WWS_FAMILY_NAME_getInstance(), TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance()];
  }
  TtfFont$NameIds.values = TtfFont$NameIds$values;
  function TtfFont$NameIds$valueOf(name) {
    switch (name) {
      case 'COPYRIGHT':
        return TtfFont$NameIds$COPYRIGHT_getInstance();
      case 'FONT_FAMILY_NAME':
        return TtfFont$NameIds$FONT_FAMILY_NAME_getInstance();
      case 'FONT_SUBFAMILY_NAME':
        return TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance();
      case 'UNIQUE_FONT_ID':
        return TtfFont$NameIds$UNIQUE_FONT_ID_getInstance();
      case 'FULL_FONT_NAME':
        return TtfFont$NameIds$FULL_FONT_NAME_getInstance();
      case 'VERSION_STRING':
        return TtfFont$NameIds$VERSION_STRING_getInstance();
      case 'POSTSCRIPT_NAME':
        return TtfFont$NameIds$POSTSCRIPT_NAME_getInstance();
      case 'TRADEMARK':
        return TtfFont$NameIds$TRADEMARK_getInstance();
      case 'MANUFACTURER':
        return TtfFont$NameIds$MANUFACTURER_getInstance();
      case 'DESIGNER':
        return TtfFont$NameIds$DESIGNER_getInstance();
      case 'DESCRIPTION':
        return TtfFont$NameIds$DESCRIPTION_getInstance();
      case 'URL_VENDOR':
        return TtfFont$NameIds$URL_VENDOR_getInstance();
      case 'URL_DESIGNER':
        return TtfFont$NameIds$URL_DESIGNER_getInstance();
      case 'LICENSE_DESCRIPTION':
        return TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance();
      case 'LICENSE_URL':
        return TtfFont$NameIds$LICENSE_URL_getInstance();
      case 'RESERVED_15':
        return TtfFont$NameIds$RESERVED_15_getInstance();
      case 'TYPO_FAMILY_NAME':
        return TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance();
      case 'TYPO_SUBFAMILY_NAME':
        return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance();
      case 'COMPATIBLE_FULL':
        return TtfFont$NameIds$COMPATIBLE_FULL_getInstance();
      case 'SAMPLE_TEXT':
        return TtfFont$NameIds$SAMPLE_TEXT_getInstance();
      case 'POSTSCRIPT_CID':
        return TtfFont$NameIds$POSTSCRIPT_CID_getInstance();
      case 'WWS_FAMILY_NAME':
        return TtfFont$NameIds$WWS_FAMILY_NAME_getInstance();
      case 'WWS_SUBFAMILY_NAME':
        return TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance();
      case 'LIGHT_BACKGROUND_PALETTE':
        return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance();
      case 'DARK_BACKGROUND_PALETTE':
        return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance();
      case 'VARIATIONS_POSTSCRIPT_NAME_PREFIX':
        return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.ttf.TtfFont.NameIds.' + name);
    }
  }
  TtfFont$NameIds.valueOf_61zpoe$ = TtfFont$NameIds$valueOf;
  function TtfFont$Fixed(num, den) {
    this.num = num;
    this.den = den;
  }
  TtfFont$Fixed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed',
    interfaces: []
  };
  TtfFont$Fixed.prototype.component1 = function () {
    return this.num;
  };
  TtfFont$Fixed.prototype.component2 = function () {
    return this.den;
  };
  TtfFont$Fixed.prototype.copy_vux9f0$ = function (num, den) {
    return new TtfFont$Fixed(num === void 0 ? this.num : num, den === void 0 ? this.den : den);
  };
  TtfFont$Fixed.prototype.toString = function () {
    return 'Fixed(num=' + Kotlin.toString(this.num) + (', den=' + Kotlin.toString(this.den)) + ')';
  };
  TtfFont$Fixed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num) | 0;
    result = result * 31 + Kotlin.hashCode(this.den) | 0;
    return result;
  };
  TtfFont$Fixed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.num, other.num) && Kotlin.equals(this.den, other.den)))));
  };
  TtfFont.prototype.readFixed_ucmi9i$ = function ($receiver) {
    return new TtfFont$Fixed(readS16LE($receiver), readS16LE($receiver));
  };
  function TtfFont$HorMetric(advanceWidth, lsb) {
    this.advanceWidth = advanceWidth;
    this.lsb = lsb;
  }
  TtfFont$HorMetric.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorMetric',
    interfaces: []
  };
  TtfFont$HorMetric.prototype.component1 = function () {
    return this.advanceWidth;
  };
  TtfFont$HorMetric.prototype.component2 = function () {
    return this.lsb;
  };
  TtfFont$HorMetric.prototype.copy_vux9f0$ = function (advanceWidth, lsb) {
    return new TtfFont$HorMetric(advanceWidth === void 0 ? this.advanceWidth : advanceWidth, lsb === void 0 ? this.lsb : lsb);
  };
  TtfFont$HorMetric.prototype.toString = function () {
    return 'HorMetric(advanceWidth=' + Kotlin.toString(this.advanceWidth) + (', lsb=' + Kotlin.toString(this.lsb)) + ')';
  };
  TtfFont$HorMetric.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.advanceWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.lsb) | 0;
    return result;
  };
  TtfFont$HorMetric.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.advanceWidth, other.advanceWidth) && Kotlin.equals(this.lsb, other.lsb)))));
  };
  TtfFont.prototype.openTable_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.tablesByName.get_11rb$(name)) != null ? tmp$.open() : null;
  };
  function TtfFont$Companion() {
    TtfFont$Companion_instance = this;
  }
  TtfFont$Companion.prototype.invoke_39qel5$ = function (s) {
    return new TtfFont(s);
  };
  TtfFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$Companion_instance = null;
  function TtfFont$Companion_getInstance() {
    if (TtfFont$Companion_instance === null) {
      new TtfFont$Companion();
    }
    return TtfFont$Companion_instance;
  }
  TtfFont.prototype.readHeaderTables = function () {
    var $receiver = sliceStart(this.s);
    var tmp$;
    var $receiver_0 = readU16BE_0($receiver);
    if ($receiver_0 !== 1)
      invalidOp('Not a TTF file');
    var majorVersion = $receiver_0;
    var $receiver_1 = readU16BE_0($receiver);
    if ($receiver_1 !== 0)
      invalidOp('Not a TTF file');
    var minorVersion = $receiver_1;
    var numTables = readU16BE_0($receiver);
    var searchRange = readU16BE_0($receiver);
    var entrySelector = readU16BE_0($receiver);
    var rangeShift = readU16BE_0($receiver);
    var $receiver_2 = until(0, numTables);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_0;
    tmp$_0 = $receiver_2.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new TtfFont$Table(readStringz($receiver, 4), readS32BE_0($receiver), readS32BE_0($receiver), readS32BE_0($receiver)));
    }
    var tables = destination;
    tmp$ = tables.iterator();
    while (tmp$.hasNext()) {
      var table = tmp$.next();
      table.s = sliceWithSize($receiver, table.offset, table.length);
      var $receiver_3 = this.tablesByName;
      var key = table.id;
      $receiver_3.put_xwzc9p$(key, table);
    }
    return $receiver;
  };
  TtfFont.prototype.runTableUnit_efgvrk$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.font.ttf.TtfFont.runTableUnit_efgvrk$', function (name, callback) {
    var tmp$;
    (tmp$ = this.openTable_61zpoe$(name)) != null ? callback(tmp$) : null;
  });
  TtfFont.prototype.runTable_w0e0qj$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.font.ttf.TtfFont.runTable_w0e0qj$', function (name, callback) {
    var tmp$;
    return (tmp$ = this.openTable_61zpoe$(name)) != null ? callback(tmp$) : null;
  });
  TtfFont.prototype.readNames = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('name')) != null) {
      var tmp$_0;
      var format = readU16BE_0(tmp$);
      var count = readU16BE_0(tmp$);
      var stringOffset = readU16BE_0(tmp$);
      for (var n = 0; n < count; n++) {
        var platformId = readU16BE_0(tmp$);
        var encodingId = readU16BE_0(tmp$);
        var languageId = readU16BE_0(tmp$);
        var nameId = readU16BE_0(tmp$);
        var length = readU16BE_0(tmp$);
        var offset = readU16BE_0(tmp$);
        switch (encodingId) {
          case 0:
            tmp$_0 = lang.UTF8;
            break;
          case 1:
            tmp$_0 = lang.UTF16_BE;
            break;
          default:tmp$_0 = lang.UTF16_BE;
            break;
        }
        var charset = tmp$_0;
        var string = toString(readAll(sliceWithSize_0(tmp$.clone(), Kotlin.Long.fromInt(stringOffset).add(Kotlin.Long.fromInt(offset)), Kotlin.Long.fromInt(length))), charset);
      }
    }
  };
  TtfFont.prototype.readLoca = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('loca')) != null) {
      var tmp$_0;
      switch (this.indexToLocFormat) {
        case 0:
          tmp$_0 = 2;
          break;
        case 1:
          tmp$_0 = 4;
          break;
        default:tmp$_0 = lang.invalidOp;
          break;
      }
      var bytesPerEntry = tmp$_0;
      var data = readBytesExact(tmp$, Kotlin.imul(bytesPerEntry, this.numGlyphs + 1 | 0));
      this.locs = new Int32Array(this.numGlyphs + 1 | 0);
      var $receiver = new FastByteArrayInputStream(data);
      switch (this.indexToLocFormat) {
        case 0:
          var tmp$_1;
          tmp$_1 = this.locs;
          for (var n = 0; n !== tmp$_1.length; ++n) {
            this.locs[n] = $receiver.readU16BE() * 2 | 0;
          }

          break;
        case 1:
          var tmp$_2;
          tmp$_2 = this.locs;
          for (var n_0 = 0; n_0 !== tmp$_2.length; ++n_0) {
            this.locs[n_0] = $receiver.readS32BE() * 2 | 0;
          }

          break;
        default:lang.invalidOp;
          break;
      }
    }
  };
  TtfFont.prototype.readHead = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('head')) != null) {
      if (readU16BE_0(tmp$) !== 1)
        invalidOp('Invalid TTF');
      if (readU16BE_0(tmp$) !== 0)
        invalidOp('Invalid TTF');
      this.fontRev = this.readFixed_ucmi9i$(tmp$);
      var checkSumAdjustment = readS32BE_0(tmp$);
      var $receiver = readS32BE_0(tmp$);
      if ($receiver !== 1594834165)
        invalidOp('Invalid magic ' + get_hex($receiver));
      var flags = readU16BE_0(tmp$);
      this.unitsPerEm = readU16BE_0(tmp$);
      var created = readS64BE(tmp$).multiply(L1000);
      var modified = readS64BE(tmp$).multiply(L1000);
      this.xMin = readS16BE(tmp$);
      this.yMin = readS16BE(tmp$);
      this.xMax = readS16BE(tmp$);
      this.yMax = readS16BE(tmp$);
      this.macStyle = readU16BE_0(tmp$);
      this.lowestRecPPEM = readU16BE_0(tmp$);
      this.fontDirectionHint = readS16BE(tmp$);
      this.indexToLocFormat = readS16BE(tmp$);
      this.glyphDataFormat = readS16BE(tmp$);
    }
  };
  TtfFont.prototype.readMaxp = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('maxp')) != null) {
      var version = this.readFixed_ucmi9i$(tmp$);
      this.numGlyphs = readU16BE_0(tmp$);
      this.maxPoints = readU16BE_0(tmp$);
      this.maxContours = readU16BE_0(tmp$);
      this.maxCompositePoints = readU16BE_0(tmp$);
      this.maxCompositeContours = readU16BE_0(tmp$);
      this.maxZones = readU16BE_0(tmp$);
      this.maxTwilightPoints = readU16BE_0(tmp$);
      this.maxStorage = readU16BE_0(tmp$);
      this.maxFunctionDefs = readU16BE_0(tmp$);
      this.maxInstructionDefs = readU16BE_0(tmp$);
      this.maxStackElements = readU16BE_0(tmp$);
      this.maxSizeOfInstructions = readU16BE_0(tmp$);
      this.maxComponentElements = readU16BE_0(tmp$);
      this.maxComponentDepth = readU16BE_0(tmp$);
    }
  };
  TtfFont.prototype.readHhea = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('hhea')) != null) {
      this.hheaVersion = this.readFixed_ucmi9i$(tmp$);
      this.ascender = readS16BE(tmp$);
      this.descender = readS16BE(tmp$);
      this.lineGap = readS16BE(tmp$);
      this.advanceWidthMax = readU16BE_0(tmp$);
      this.minLeftSideBearing = readS16BE(tmp$);
      this.minRightSideBearing = readS16BE(tmp$);
      this.xMaxExtent = readS16BE(tmp$);
      this.caretSlopeRise = readS16BE(tmp$);
      this.caretSlopeRun = readS16BE(tmp$);
      this.caretOffset = readS16BE(tmp$);
      readS16BE(tmp$);
      readS16BE(tmp$);
      readS16BE(tmp$);
      readS16BE(tmp$);
      this.metricDataFormat = readS16BE(tmp$);
      this.numberOfHMetrics = readU16BE_0(tmp$);
    }
  };
  TtfFont.prototype.readHmtx = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('hmtx')) != null) {
      var $receiver = until(0, this.numberOfHMetrics);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(new TtfFont$HorMetric(readU16BE_0(tmp$), readS16BE(tmp$)));
      }
      var firstMetrics = destination;
      var lastAdvanceWidth = last(firstMetrics).advanceWidth;
      var $receiver_0 = until(0, this.numGlyphs - this.numberOfHMetrics | 0);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new TtfFont$HorMetric(lastAdvanceWidth, readS16BE(tmp$)));
      }
      var compressedMetrics = destination_0;
      this.horMetrics = plus(firstMetrics, compressedMetrics);
    }
  };
  function TtfFont$readCmap$lambda$EncodingRecord(platformId, encodingId, offset) {
    this.platformId = platformId;
    this.encodingId = encodingId;
    this.offset = offset;
  }
  TtfFont$readCmap$lambda$EncodingRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncodingRecord',
    interfaces: []
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component1 = function () {
    return this.platformId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component2 = function () {
    return this.encodingId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.copy_qt1dr2$ = function (platformId, encodingId, offset) {
    return new TtfFont$readCmap$lambda$EncodingRecord(platformId === void 0 ? this.platformId : platformId, encodingId === void 0 ? this.encodingId : encodingId, offset === void 0 ? this.offset : offset);
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.toString = function () {
    return 'EncodingRecord(platformId=' + Kotlin.toString(this.platformId) + (', encodingId=' + Kotlin.toString(this.encodingId)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.platformId) | 0;
    result = result * 31 + Kotlin.hashCode(this.encodingId) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.platformId, other.platformId) && Kotlin.equals(this.encodingId, other.encodingId) && Kotlin.equals(this.offset, other.offset)))));
  };
  TtfFont.prototype.readCmap = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('cmap')) != null) {
      var tmp$_0;
      var version = readU16BE_0(tmp$);
      var numTables = readU16BE_0(tmp$);
      var $receiver = until(0, numTables);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(new TtfFont$readCmap$lambda$EncodingRecord(readU16BE_0(tmp$), readU16BE_0(tmp$), readS32BE_0(tmp$)));
      }
      var tables = destination;
      tmp$_0 = tables.iterator();
      while (tmp$_0.hasNext()) {
        var table = tmp$_0.next();
        var $receiver_0 = sliceStart(tmp$, Kotlin.Long.fromInt(table.offset));
        var tmp$_2;
        var format = readU16BE_0($receiver_0);
        switch (format) {
          case 4:
            var length = readU16BE_0($receiver_0);
            var language = readU16BE_0($receiver_0);
            var segCount = readU16BE_0($receiver_0) / 2 | 0;
            var searchRangeS = readU16BE_0($receiver_0);
            var entrySelector = readU16BE_0($receiver_0);
            var rangeShift = readU16BE_0($receiver_0);
            var endCount = readCharArrayBE($receiver_0, segCount);
            readU16BE_0($receiver_0);
            var startCount = readCharArrayBE($receiver_0, segCount);
            var idDelta = readShortArrayBE($receiver_0, segCount);
            var rangeOffsetPos = $receiver_0.position.toInt();
            var idRangeOffset = readCharArrayBE($receiver_0, segCount);
            for (var n = 0; n < segCount; n++) {
              var ec = endCount[n] | 0;
              var sc = startCount[n] | 0;
              var delta = idDelta[n];
              var iro = idRangeOffset[n] | 0;
              for (var c = sc; c <= ec; c++) {
                var index;
                if (iro !== 0) {
                  var glyphIndexOffset = rangeOffsetPos + (n * 2 | 0) | 0;
                  glyphIndexOffset = glyphIndexOffset + iro | 0;
                  glyphIndexOffset = glyphIndexOffset + ((c - sc | 0) * 2 | 0) | 0;
                  index = readU16BE_0(sliceStart($receiver_0, Kotlin.Long.fromInt(glyphIndexOffset)));
                  if (index !== 0) {
                    index = index + delta | 0;
                  }
                }
                 else {
                  index = c + delta | 0;
                }
                var $receiver_1 = this.characterMaps;
                var value = index & 65535;
                $receiver_1.put_xwzc9p$(c, value);
              }
            }

            break;
          case 12:
            readU16BE_0($receiver_0);
            var length_0 = readS32BE_0($receiver_0);
            var language_0 = readS32BE_0($receiver_0);
            var numGroups = readS32BE_0($receiver_0);
            for (var n_0 = 0; n_0 < numGroups; n_0++) {
              var startCharCode = readS32BE_0($receiver_0);
              var endCharCode = readS32BE_0($receiver_0);
              var startGlyphId = readS32BE_0($receiver_0);
              var glyphId = startGlyphId;
              for (var c_0 = startCharCode; c_0 <= endCharCode; c_0++) {
                var $receiver_2 = this.characterMaps;
                var value_0 = (tmp$_2 = glyphId, glyphId = tmp$_2 + 1 | 0, tmp$_2);
                $receiver_2.put_xwzc9p$(c_0, value_0);
              }
            }

            break;
          default:break;
        }
      }
    }
  };
  TtfFont.prototype.getCharIndexFromCodePoint_za3lpa$ = function (codePoint) {
    return this.characterMaps.get_11rb$(codePoint);
  };
  TtfFont.prototype.getCharIndexFromChar_s8itvh$ = function (char) {
    return this.characterMaps.get_11rb$(char | 0);
  };
  TtfFont.prototype.getGlyphByCodePoint_za3lpa$ = function (codePoint) {
    var tmp$;
    return (tmp$ = this.characterMaps.get_11rb$(codePoint)) != null ? this.getGlyphByIndex_za3lpa$(tmp$) : null;
  };
  TtfFont.prototype.getGlyphByChar_s8itvh$ = function (char) {
    return this.getGlyphByCodePoint_za3lpa$(char | 0);
  };
  TtfFont.prototype.getGlyphByIndex_za3lpa$ = function (index) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('glyf')) != null) {
      var callback$result;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var start = (tmp$_2 = (tmp$_1 = getOrNull(this.locs, index)) != null ? Kotlin.Long.fromInt(tmp$_1).and(L4294967295) : null) != null ? tmp$_2 : L0;
      var end = (tmp$_4 = (tmp$_3 = getOrNull(this.locs, index + 1 | 0)) != null ? Kotlin.Long.fromInt(tmp$_3).and(L4294967295) : null) != null ? tmp$_4 : start;
      var size = end.subtract(start);
      if (!equals(size, L0)) {
        callback$result = this.readGlyph_hsu5ns$(sliceStart(tmp$, start), index);
      }
       else {
        callback$result = new TtfFont$Glyph(this, 0, 0, 0, 0, new Int32Array([]), new Int32Array([]), new Int32Array([]), new Int32Array([]), this.horMetrics.get_za3lpa$(index).advanceWidth);
      }
      tmp$_0 = callback$result;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.getAllGlyphs = function () {
    var $receiver = until(0, this.numGlyphs);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = this.getGlyphByIndex_za3lpa$(element)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    return destination;
  };
  function TtfFont$IGlyph() {
  }
  TtfFont$IGlyph.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGlyph',
    interfaces: []
  };
  function TtfFont$Contour(x, y, onCurve) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (onCurve === void 0)
      onCurve = false;
    this.x = x;
    this.y = y;
    this.onCurve = onCurve;
  }
  TtfFont$Contour.prototype.copyFrom_bj6kc4$ = function (that) {
    this.x = that.x;
    this.y = that.y;
    this.onCurve = that.onCurve;
  };
  TtfFont$Contour.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contour',
    interfaces: []
  };
  TtfFont$Contour.prototype.component1 = function () {
    return this.x;
  };
  TtfFont$Contour.prototype.component2 = function () {
    return this.y;
  };
  TtfFont$Contour.prototype.component3 = function () {
    return this.onCurve;
  };
  TtfFont$Contour.prototype.copy_ydzd23$ = function (x, y, onCurve) {
    return new TtfFont$Contour(x === void 0 ? this.x : x, y === void 0 ? this.y : y, onCurve === void 0 ? this.onCurve : onCurve);
  };
  TtfFont$Contour.prototype.toString = function () {
    return 'Contour(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', onCurve=' + Kotlin.toString(this.onCurve)) + ')';
  };
  TtfFont$Contour.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.onCurve) | 0;
    return result;
  };
  TtfFont$Contour.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.onCurve, other.onCurve)))));
  };
  function TtfFont$Origin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$Origin_initFields() {
    TtfFont$Origin_initFields = function () {
    };
    TtfFont$Origin$TOP_instance = new TtfFont$Origin('TOP', 0);
    TtfFont$Origin$BASELINE_instance = new TtfFont$Origin('BASELINE', 1);
  }
  var TtfFont$Origin$TOP_instance;
  function TtfFont$Origin$TOP_getInstance() {
    TtfFont$Origin_initFields();
    return TtfFont$Origin$TOP_instance;
  }
  var TtfFont$Origin$BASELINE_instance;
  function TtfFont$Origin$BASELINE_getInstance() {
    TtfFont$Origin_initFields();
    return TtfFont$Origin$BASELINE_instance;
  }
  TtfFont$Origin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Origin',
    interfaces: [Enum]
  };
  function TtfFont$Origin$values() {
    return [TtfFont$Origin$TOP_getInstance(), TtfFont$Origin$BASELINE_getInstance()];
  }
  TtfFont$Origin.values = TtfFont$Origin$values;
  function TtfFont$Origin$valueOf(name) {
    switch (name) {
      case 'TOP':
        return TtfFont$Origin$TOP_getInstance();
      case 'BASELINE':
        return TtfFont$Origin$BASELINE_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.ttf.TtfFont.Origin.' + name);
    }
  }
  TtfFont$Origin.valueOf_61zpoe$ = TtfFont$Origin$valueOf;
  TtfFont.prototype.fillText_bdwvm3$ = function (c, text, size, x, y, color, origin) {
    if (size === void 0)
      size = 16.0;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (origin === void 0)
      origin = TtfFont$Origin$BASELINE_getInstance();
    var tmp$;
    var font = this;
    var scale = size / this.unitsPerEm;
    c.translate_lu1900$(x, y);
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var char = unboxChar(tmp$.next());
      var g = this.getGlyphByChar_s8itvh$(char);
      if (g != null) {
        g.fill_g2rfor$(c, size, TtfFont$Origin$TOP_getInstance(), color);
        c.translate_lu1900$(scale * g.advanceWidth, 0.0);
      }
    }
  };
  function TtfFont$GlyphReference(glyph, x, y, scaleX, scale01, scale10, scaleY) {
    this.glyph = glyph;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scale01 = scale01;
    this.scale10 = scale10;
    this.scaleY = scaleY;
  }
  TtfFont$GlyphReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphReference',
    interfaces: []
  };
  TtfFont$GlyphReference.prototype.component1 = function () {
    return this.glyph;
  };
  TtfFont$GlyphReference.prototype.component2 = function () {
    return this.x;
  };
  TtfFont$GlyphReference.prototype.component3 = function () {
    return this.y;
  };
  TtfFont$GlyphReference.prototype.component4 = function () {
    return this.scaleX;
  };
  TtfFont$GlyphReference.prototype.component5 = function () {
    return this.scale01;
  };
  TtfFont$GlyphReference.prototype.component6 = function () {
    return this.scale10;
  };
  TtfFont$GlyphReference.prototype.component7 = function () {
    return this.scaleY;
  };
  TtfFont$GlyphReference.prototype.copy_t3pr0x$ = function (glyph, x, y, scaleX, scale01, scale10, scaleY) {
    return new TtfFont$GlyphReference(glyph === void 0 ? this.glyph : glyph, x === void 0 ? this.x : x, y === void 0 ? this.y : y, scaleX === void 0 ? this.scaleX : scaleX, scale01 === void 0 ? this.scale01 : scale01, scale10 === void 0 ? this.scale10 : scale10, scaleY === void 0 ? this.scaleY : scaleY);
  };
  TtfFont$GlyphReference.prototype.toString = function () {
    return 'GlyphReference(glyph=' + Kotlin.toString(this.glyph) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', scaleX=' + Kotlin.toString(this.scaleX)) + (', scale01=' + Kotlin.toString(this.scale01)) + (', scale10=' + Kotlin.toString(this.scale10)) + (', scaleY=' + Kotlin.toString(this.scaleY)) + ')';
  };
  TtfFont$GlyphReference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.glyph) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale01) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale10) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleY) | 0;
    return result;
  };
  TtfFont$GlyphReference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.glyph, other.glyph) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scaleX, other.scaleX) && Kotlin.equals(this.scale01, other.scale01) && Kotlin.equals(this.scale10, other.scale10) && Kotlin.equals(this.scaleY, other.scaleY)))));
  };
  function TtfFont$CompositeGlyph($outer, xMin, yMin, xMax, yMax, refs, advanceWidth) {
    this.$outer = $outer;
    this.xMin_g1rraz$_0 = xMin;
    this.yMin_g17ypm$_0 = yMin;
    this.xMax_g1rwzx$_0 = xMax;
    this.yMax_g184ek$_0 = yMax;
    this.refs = refs;
    this.advanceWidth_f2ft5x$_0 = advanceWidth;
  }
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_g1rraz$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_g17ypm$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_g1rwzx$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_g184ek$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'advanceWidth', {
    get: function () {
      return this.advanceWidth_f2ft5x$_0;
    }
  });
  TtfFont$CompositeGlyph.prototype.fill_g2rfor$ = function (c, size, origin, color) {
    var scale = size / this.$outer.unitsPerEm;
    c.save();
    try {
      var tmp$;
      tmp$ = this.refs.iterator();
      while (tmp$.hasNext()) {
        var ref = tmp$.next();
        c.save();
        try {
          c.translate_lu1900$((ref.x - this.xMin | 0) * scale, ((-ref.y | 0) - this.yMin | 0) * scale);
          c.scale_lu1900$(ref.scaleX, ref.scaleY);
          ref.glyph.fill_g2rfor$(c, size, origin, color);
        }
        finally {
          c.restore();
        }
      }
    }
    finally {
      c.restore();
    }
  };
  TtfFont$CompositeGlyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeGlyph',
    interfaces: [TtfFont$IGlyph]
  };
  function TtfFont$Glyph($outer, xMin, yMin, xMax, yMax, contoursIndices, flags, xPos, yPos, advanceWidth) {
    this.$outer = $outer;
    this.xMin_1subio$_0 = xMin;
    this.yMin_1saixb$_0 = yMin;
    this.xMax_1suh7m$_0 = xMax;
    this.yMax_1saom9$_0 = yMax;
    this.contoursIndices = contoursIndices;
    this.flags = flags;
    this.xPos = xPos;
    this.yPos = yPos;
    this.advanceWidth_vy3ewq$_0 = advanceWidth;
  }
  Object.defineProperty(TtfFont$Glyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_1subio$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_1saixb$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_1suh7m$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_1saom9$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'advanceWidth', {
    get: function () {
      return this.advanceWidth_vy3ewq$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'npoints', {
    get: function () {
      return this.xPos.length;
    }
  });
  TtfFont$Glyph.prototype.onCurve_za3lpa$ = function (n) {
    return (this.flags[n] & 1) !== 0;
  };
  TtfFont$Glyph.prototype.contour_7faev6$ = function (n, out) {
    if (out === void 0)
      out = new TtfFont$Contour();
    out.x = this.xPos[n];
    out.y = this.yPos[n];
    out.onCurve = this.onCurve_za3lpa$(n);
    return out;
  };
  TtfFont$Glyph.prototype.fill_g2rfor$ = function (c, size, origin, color) {
    var font = this.$outer;
    var scale = size / font.unitsPerEm;
    c.save();
    try {
      var tmp$;
      switch (origin.name) {
        case 'TOP':
          tmp$ = font.yMax - font.yMin + this.yMin | 0;
          break;
        case 'BASELINE':
          tmp$ = 0.0;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var ydist = tmp$;
      c.translate_lu1900$(0.0 * scale, (ydist - this.yMin) * scale);
      c.scale_lu1900$(scale, -scale);
      c.beginPath();
      c.draw_ywv3s4$(this.createGraphicsPath());
      c.fill_i8h3xk$(new Context2d$Color(color));
    }
    finally {
      c.restore();
    }
  };
  TtfFont$Glyph.prototype.createGraphicsPath = function () {
    var tmp$;
    var p = new GraphicsPath();
    tmp$ = this.contoursIndices.length - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var cstart = this.contoursIndices[n] + 1 | 0;
      var cend = this.contoursIndices[n + 1 | 0];
      var csize = cend - cstart + 1 | 0;
      var curr = this.contour_7faev6$(cend);
      var next = this.contour_7faev6$(cstart);
      if (curr.onCurve) {
        var x = curr.x;
        var y = curr.y;
        p.moveTo_lu1900$(numberToDouble(x), numberToDouble(y));
      }
       else {
        if (next.onCurve) {
          var x_0 = next.x;
          var y_0 = next.y;
          p.moveTo_lu1900$(numberToDouble(x_0), numberToDouble(y_0));
        }
         else {
          var x_1 = (curr.x + next.x | 0) * 0 | 0;
          var y_1 = numberToInt((curr.y + next.y | 0) * 0.5);
          p.moveTo_lu1900$(numberToDouble(x_1), numberToDouble(y_1));
        }
      }
      for (var cpos = 0; cpos < csize; cpos++) {
        var prev = curr;
        curr = next;
        next = this.contour_7faev6$(cstart + (cpos + 1 | 0) % csize | 0);
        if (curr.onCurve) {
          var x_2 = curr.x;
          var y_2 = curr.y;
          p.lineTo_lu1900$(numberToDouble(x_2), numberToDouble(y_2));
        }
         else {
          var prev2X = prev.x;
          var prev2Y = prev.y;
          var next2X = next.x;
          var next2Y = next.y;
          if (!prev.onCurve) {
            prev2X = numberToInt((curr.x + prev.x | 0) * 0.5);
            prev2Y = numberToInt((curr.y + prev.y | 0) * 0.5);
            var x_3 = prev2X;
            var y_3 = prev2Y;
            p.lineTo_lu1900$(numberToDouble(x_3), numberToDouble(y_3));
          }
          if (!next.onCurve) {
            next2X = numberToInt((curr.x + next.x | 0) * 0.5);
            next2Y = numberToInt((curr.y + next.y | 0) * 0.5);
          }
          var x_4 = prev2X;
          var y_4 = prev2Y;
          p.lineTo_lu1900$(numberToDouble(x_4), numberToDouble(y_4));
          var controlX = curr.x;
          var controlY = curr.y;
          var anchorX = next2X;
          var anchorY = next2Y;
          p.quadTo_6y0v78$(numberToDouble(controlX), numberToDouble(controlY), numberToDouble(anchorX), numberToDouble(anchorY));
        }
      }
      p.close();
    }
    return p;
  };
  TtfFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: [TtfFont$IGlyph]
  };
  TtfFont.prototype.readF2DOT14_ucmi9i$ = function ($receiver) {
    var v = readS16BE($receiver);
    var i = v >> 14;
    var f = v & 16383;
    return i + f / 16384.0;
  };
  TtfFont.prototype.readMixBE_daiwru$ = function ($receiver, signed, word) {
    var tmp$;
    if (!word && signed)
      tmp$ = readS8($receiver);
    else if (!word && !signed)
      tmp$ = readU8($receiver);
    else if (word && signed)
      tmp$ = readS16BE($receiver);
    else if (word && !signed)
      tmp$ = readU16BE_0($receiver);
    else
      tmp$ = lang.invalidOp;
    return tmp$;
  };
  TtfFont.prototype.readGlyph_hsu5ns$ = function ($receiver, index) {
    var tmp$, tmp$_0;
    var ncontours = readS16BE($receiver);
    var xMin = readS16BE($receiver);
    var yMin = readS16BE($receiver);
    var xMax = readS16BE($receiver);
    var yMax = readS16BE($receiver);
    if (ncontours < 0) {
      var ARG_1_AND_2_ARE_WORDS = 1;
      var ARGS_ARE_XY_VALUES = 2;
      var ROUND_XY_TO_GRID = 4;
      var WE_HAVE_A_SCALE = 8;
      var MORE_COMPONENTS = 32;
      var WE_HAVE_AN_X_AND_Y_SCALE = 64;
      var WE_HAVE_A_TWO_BY_TWO = 128;
      var WE_HAVE_INSTRUCTIONS = 256;
      var USE_MY_METRICS = 512;
      var OVERLAP_COMPOUND = 1024;
      var SCALED_COMPONENT_OFFSET = 2048;
      var UNSCALED_COMPONENT_OFFSET = 4096;
      var references = ArrayList_init_0();
      do {
        var flags = readU16BE_0($receiver);
        var glyphIndex = readU16BE_0($receiver);
        var signed = (flags & ARGS_ARE_XY_VALUES) !== 0;
        var words = (flags & ARG_1_AND_2_ARE_WORDS) !== 0;
        var x = this.readMixBE_daiwru$($receiver, signed, words);
        var y = this.readMixBE_daiwru$($receiver, signed, words);
        var scaleX = 1.0;
        var scaleY = 1.0;
        var scale01 = 0.0;
        var scale10 = 0.0;
        if ((flags & WE_HAVE_A_SCALE) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = scaleX;
        }
         else if ((flags & WE_HAVE_AN_X_AND_Y_SCALE) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = this.readF2DOT14_ucmi9i$($receiver);
        }
         else if ((flags & WE_HAVE_A_TWO_BY_TWO) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scale01 = this.readF2DOT14_ucmi9i$($receiver);
          scale10 = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = this.readF2DOT14_ucmi9i$($receiver);
        }
        var ref = new TtfFont$GlyphReference(ensureNotNull(this.getGlyphByIndex_za3lpa$(glyphIndex)), x, y, scaleX, scale01, scale10, scaleY);
        references.add_11rb$(ref);
      }
       while ((flags & MORE_COMPONENTS) !== 0);
      return new TtfFont$CompositeGlyph(this, xMin, yMin, xMax, yMax, references, this.horMetrics.get_za3lpa$(index).advanceWidth);
    }
     else {
      var contoursIndices = new Int32Array(ncontours + 1 | 0);
      contoursIndices[0] = -1;
      for (var n = 1; n <= ncontours; n++)
        contoursIndices[n] = readU16BE_0($receiver);
      var instructionLength = readU16BE_0($receiver);
      var instructions = readBytesExact($receiver, instructionLength);
      var numPoints = (tmp$_0 = (tmp$ = lastOrNull(contoursIndices)) != null ? tmp$ + 1 | 0 : null) != null ? tmp$_0 : 0;
      var flags_0 = new IntArrayList();
      var npos = 0;
      while (npos < numPoints) {
        var cf = readU8($receiver);
        flags_0.add_za3lpa$(cf);
        if ((cf & 8) !== 0) {
          var count = readU8($receiver);
          for (var n_0 = 0; n_0 < count; n_0++)
            flags_0.add_za3lpa$(cf);
          npos = npos + (count + 1) | 0;
        }
         else {
          npos = npos + 1 | 0;
        }
      }
      var xPos = new Int32Array(numPoints);
      var yPos = new Int32Array(numPoints);
      for (var xy = 0; xy <= 1; xy++) {
        var pos = xy === 0 ? xPos : yPos;
        var p = 0;
        for (var n_1 = 0; n_1 < numPoints; n_1++) {
          var flag = flags_0.get_za3lpa$(n_1);
          var b1 = (flag >>> 1 + xy & 1) !== 0;
          var b2 = (flag >>> 4 + xy & 1) !== 0;
          if (b1) {
            var magnitude = readU8($receiver);
            if (b2)
              p = p + magnitude | 0;
            else
              p = p - magnitude | 0;
          }
           else if (!b2) {
            p = p + readS16BE($receiver) | 0;
          }
          pos[n_1] = p;
        }
      }
      return new TtfFont$Glyph(this, xMin, yMin, xMax, yMax, contoursIndices, copyOf(flags_0.data, flags_0.size), xPos, yPos, this.horMetrics.get_za3lpa$(index).advanceWidth);
    }
  };
  TtfFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TtfFont',
    interfaces: []
  };
  function fillText($receiver, font, text, size, x, y, color, origin) {
    if (size === void 0)
      size = 16.0;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (origin === void 0)
      origin = TtfFont$Origin$BASELINE_getInstance();
    font.fillText_bdwvm3$($receiver, text, size, x, y, color, origin);
  }
  function BMP() {
    BMP_instance = this;
    ImageFormat.call(this, ['bmp']);
  }
  function BMP$BmImageInfo() {
    ImageInfo.call(this);
    this.flipX = false;
    this.flipY = false;
  }
  BMP$BmImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BmImageInfo',
    interfaces: [ImageInfo]
  };
  BMP.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 2), 'BM'))
      return null;
    var size = readS32LE_0(s);
    var reserved1 = readS16LE(s);
    var reserved2 = readS16LE(s);
    var offBits = readS32LE_0(s);
    var bsize = readS32LE_0(s);
    var width = readS32LE_0(s);
    var height = readS32LE_0(s);
    var planes = readS16LE(s);
    var bitcount = readS16LE(s);
    var $receiver = new BMP$BmImageInfo();
    $receiver.flipX = width < 0;
    $receiver.flipY = height >= 0;
    $receiver.width = abs(width);
    $receiver.height = abs(height);
    $receiver.bitsPerPixel = bitcount;
    return $receiver;
  };
  BMP.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.decodeHeader_1ooaqm$(s, props);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Not a BMP file');
    }
    var h = tmp$;
    var compression = readS32LE_0(s);
    var sizeImage = readS32LE_0(s);
    var pixelsPerMeterX = readS32LE_0(s);
    var pixelsPerMeterY = readS32LE_0(s);
    var clrUsed = readS32LE_0(s);
    var clrImportant = readS32LE_0(s);
    switch (h.bitsPerPixel) {
      case 8:
        var out = new Bitmap8(h.width, h.height);
        for (var n = 0; n < 256; n++)
          out.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_vux9f0$(readS32LE_0(s), 255));
        tmp$_0 = h.height;
        for (var n_0 = 0; n_0 < tmp$_0; n_0++)
          out.setRow_3fbn1q$(h.height - n_0 - 1 | 0, readBytes(s, h.width));
        tmp$_2 = new ImageData(listOf_0(new ImageFrame(out)));
        break;
      case 24:
      case 32:
        var bytesPerRow = Kotlin.imul(h.width, h.bitsPerPixel) / 8 | 0;
        var out_0 = new Bitmap32(h.width, h.height);
        var row = new Int8Array(bytesPerRow);
        var format = h.bitsPerPixel === 24 ? BGR_getInstance() : BGRA_getInstance();
        var padding = 4 - bytesPerRow % 4 | 0;
        var flipY = h.flipY;
        tmp$_1 = h.height;
        for (var n_1 = 0; n_1 < tmp$_1; n_1++) {
          var y = h.flipY ? h.height - n_1 - 1 | 0 : n_1;
          s.read_mj6st8$(row);
          decode(format, row, 0, out_0.data, out_0.index_vux9f0$(0, y), h.width);
          if (padding !== 0) {
            skip(s, padding);
          }
        }

        tmp$_2 = new ImageData(listOf_0(new ImageFrame(out_0)));
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported bitsPerPixel=' + h.bitsPerPixel));
    }
    return tmp$_2;
  };
  BMP.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var bmp = image.mainBitmap.toBMP32();
    write8(s, 66);
    write8(s, 77);
    write32LE_0(s, 4 * bmp.area | 0);
    write32LE_0(s, 0);
    write32LE_0(s, 54);
    write32LE_0(s, 40);
    write32LE_0(s, bmp.width);
    write32LE_0(s, bmp.height * 2 | 0);
    write16LE_0(s, 1);
    write16LE_0(s, 32);
    write32LE_0(s, 0);
    write32LE_0(s, 4 * bmp.area | 0);
    write32LE_0(s, 2834);
    write32LE_0(s, 2834);
    write32LE_0(s, 0);
    write32LE_0(s, 0);
    tmp$ = bmp.height;
    for (var n = 0; n < tmp$; n++) {
      var y = bmp.height - 1 - n | 0;
      writeBytes(s, encode_0(BGRA_getInstance(), bmp.data, Kotlin.imul(y, bmp.width), bmp.width, true));
    }
  };
  BMP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BMP',
    interfaces: [ImageFormat]
  };
  var BMP_instance = null;
  function BMP_getInstance() {
    if (BMP_instance === null) {
      new BMP();
    }
    return BMP_instance;
  }
  function DDS() {
    DDS_instance = this;
    ImageFormat.call(this, ['dds']);
  }
  DDS.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readString(s, 4), 'DDS '))
      return null;
    var size = readS32LE_0(s);
    var sh = readStream(s, size - 4 | 0);
    var flags = readS32LE_0(sh);
    var height = readS32LE_0(sh);
    var width = readS32LE_0(sh);
    var pitchOrLinearSize = readS32LE_0(sh);
    var depth = readS32LE_0(sh);
    var mipmapCount = readS32LE_0(sh);
    var reserved = readIntArrayLE(sh, 11);
    var pf_size = readS32LE_0(sh);
    var pf_s = readStream(sh, pf_size - 4 | 0);
    var pf_flags = readS32LE_0(pf_s);
    var pf_fourcc = readString(pf_s, 4);
    var pf_bitcount = readS32LE_0(pf_s);
    var pf_rbitmask = readS32LE_0(pf_s);
    var pf_gbitmask = readS32LE_0(pf_s);
    var pf_bbitmask = readS32LE_0(pf_s);
    var pf_abitmask = readS32LE_0(pf_s);
    var caps = readS32LE_0(sh);
    var caps2 = readS32LE_0(sh);
    var caps3 = readS32LE_0(sh);
    var caps4 = readS32LE_0(sh);
    var reserved2 = readS32LE_0(sh);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = 32;
    set_fourcc($receiver, pf_fourcc);
    return $receiver;
  };
  DDS.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var h = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a DDS file');
    var fourcc = get_fourcc(h).toUpperCase();
    switch (fourcc) {
      case 'DXT1':
        tmp$_0 = DXT1_getInstance();
        break;
      case 'DXT3':
        tmp$_0 = DXT3_getInstance();
        break;
      case 'DXT4':
        tmp$_0 = DXT4_getInstance();
        break;
      case 'DXT5':
        tmp$_0 = DXT5_getInstance();
        break;
      default:tmp$_0 = invalidOp("Unsupported DDS FourCC '" + fourcc + "'");
        break;
    }
    var subimageFormat = tmp$_0;
    var bytes = readAll(s);
    return subimageFormat.readImage_1ooaqm$(openSync(bytes), new ImageDecodingProps('image.' + fourcc, h.width, h.height));
  };
  DDS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DDS',
    interfaces: [ImageFormat]
  };
  var DDS_instance = null;
  function DDS_getInstance() {
    if (DDS_instance === null) {
      new DDS();
    }
    return DDS_instance;
  }
  function fourcc$lambda() {
    return '    ';
  }
  var fourcc;
  var fourcc_metadata = new PropertyMetadata('fourcc');
  function get_fourcc($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = fourcc.name) != null ? tmp$ : fourcc_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = fourcc.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = fourcc.name) != null ? tmp$_3 : fourcc_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_fourcc($receiver, fourcc_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = fourcc.name) != null ? tmp$ : fourcc_metadata.callableName, (tmp$_0 = fourcc_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function DXT1() {
    DXT1_instance = this;
    DXT1Base.call(this, 'dxt1', true);
  }
  DXT1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT1',
    interfaces: [DXT1Base]
  };
  var DXT1_instance = null;
  function DXT1_getInstance() {
    if (DXT1_instance === null) {
      new DXT1();
    }
    return DXT1_instance;
  }
  function DXT2() {
    DXT2_instance = this;
    DXT2_3.call(this, 'dxt2', true);
  }
  DXT2.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT2',
    interfaces: [DXT2_3]
  };
  var DXT2_instance = null;
  function DXT2_getInstance() {
    if (DXT2_instance === null) {
      new DXT2();
    }
    return DXT2_instance;
  }
  function DXT3() {
    DXT3_instance = this;
    DXT2_3.call(this, 'dxt3', false);
  }
  DXT3.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT3',
    interfaces: [DXT2_3]
  };
  var DXT3_instance = null;
  function DXT3_getInstance() {
    if (DXT3_instance === null) {
      new DXT3();
    }
    return DXT3_instance;
  }
  function DXT4() {
    DXT4_instance = this;
    DXT4_5.call(this, 'dxt4', true);
  }
  DXT4.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT4',
    interfaces: [DXT4_5]
  };
  var DXT4_instance = null;
  function DXT4_getInstance() {
    if (DXT4_instance === null) {
      new DXT4();
    }
    return DXT4_instance;
  }
  function DXT5() {
    DXT5_instance = this;
    DXT4_5.call(this, 'dxt5', false);
  }
  DXT5.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT5',
    interfaces: [DXT4_5]
  };
  var DXT5_instance = null;
  function DXT5_getInstance() {
    if (DXT5_instance === null) {
      new DXT5();
    }
    return DXT5_instance;
  }
  function DXT1Base(format, premultiplied) {
    DXT.call(this, format, true, 8);
  }
  DXT1Base.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt1ColorCond_k437h2$(data, dataOffset + 0 | 0, cc);
    var cdata = readS32LE(data, dataOffset + 4 | 0);
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$((new RGBA(cc.ints[c])).rgb, 255));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT1Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT1Base',
    interfaces: [DXT]
  };
  function DXT2_3(format, premultiplied) {
    DXT.call(this, format, premultiplied, 16);
  }
  DXT2_3.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, aa);
    DXT$Companion_getInstance().decodeDxt1Color_k437h2$(data, dataOffset + 8 | 0, cc);
    var cdata = readS32LE(data, dataOffset + 8 + 4 | 0);
    var adata = readU32LE(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16LE(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(L7).toInt();
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$((new RGBA(cc.ints[c])).rgb, aa[a]));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT2_3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT2_3',
    interfaces: [DXT]
  };
  function DXT4_5(format, premultiplied) {
    DXT.call(this, format, premultiplied, 16);
  }
  DXT4_5.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, aa);
    DXT$Companion_getInstance().decodeDxt1ColorCond_k437h2$(data, dataOffset + 8 | 0, cc);
    var cdata = readS32LE(data, dataOffset + 8 + 4 | 0);
    var adata = readU32LE(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16LE(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(L7).toInt();
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$((new RGBA(cc.ints[c])).rgb, aa[a]));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT4_5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT4_5',
    interfaces: [DXT]
  };
  function DXT(format, premultiplied, blockSize) {
    DXT$Companion_getInstance();
    ImageFormat.call(this, [format]);
    this.format = format;
    this.premultiplied = premultiplied;
    this.blockSize = blockSize;
  }
  DXT.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!startsWith(get_extensionLC(new PathInfo(props.filename)), this.format))
      return null;
    var $receiver = new ImageInfo();
    var tmp$, tmp$_0;
    $receiver.width = (tmp$ = props.width) != null ? tmp$ : 1;
    $receiver.height = (tmp$_0 = props.height) != null ? tmp$_0 : 1;
    return $receiver;
  };
  DXT.prototype.decodeBitmap_mj6st8$ = function (bytes, width, height) {
    var out = new Bitmap32(width, height, void 0, this.premultiplied);
    var blockWidth = out.width / 4 | 0;
    var blockHeight = out.height / 4 | 0;
    var offset = 0;
    var aa = new Int32Array(8);
    var cc = RgbaArray$Companion_getInstance().invoke_za3lpa$(4);
    for (var y = 0; y < blockHeight; y++) {
      for (var x = 0; x < blockWidth; x++) {
        this.decodeRow_cndmu7$(bytes, offset, out.data, out.index_vux9f0$(x * 4 | 0, y * 4 | 0), out.width, aa, cc);
        offset = offset + this.blockSize | 0;
      }
    }
    return out;
  };
  DXT.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var bytes = readAll(s);
    var totalPixels = ((bytes.length / this.blockSize | 0) * 4 | 0) * 4 | 0;
    var potentialSide = numberToInt(Math_0.sqrt(totalPixels));
    var width = (tmp$ = props.width) != null ? tmp$ : potentialSide;
    var height = (tmp$_0 = props.height) != null ? tmp$_0 : potentialSide;
    return new ImageData(listOf_0(new ImageFrame(this.decodeBitmap_mj6st8$(bytes, width, height))));
  };
  function DXT$Companion() {
    DXT$Companion_instance = this;
    this.FACT_2_3 = 170;
    this.FACT_1_3 = 85;
    this.FACT_1_2 = 128;
  }
  DXT$Companion.prototype.decodeRGB656_za3lpa$ = function (v) {
    return toRGBA_0(BGR_565_getInstance(), v);
  };
  DXT$Companion.prototype.decodeDxt1ColorCond_k437h2$ = function (data, dataOffset, cc) {
    var c0 = readU16LE(data, dataOffset + 0 | 0);
    var c1 = readU16LE(data, dataOffset + 2 | 0);
    var ccArray = cc;
    ccArray.set_vlvk8p$(0, this.decodeRGB656_za3lpa$(c0));
    ccArray.set_vlvk8p$(1, this.decodeRGB656_za3lpa$(c1));
    if (c0 > c1) {
      ccArray.set_vlvk8p$(2, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 170));
      ccArray.set_vlvk8p$(3, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 85));
    }
     else {
      ccArray.set_vlvk8p$(2, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 128));
      ccArray.set_vlvk8p$(3, Colors_getInstance().TRANSPARENT_BLACK);
    }
  };
  DXT$Companion.prototype.decodeDxt1Color_k437h2$ = function (data, dataOffset, cc) {
    cc.set_vlvk8p$(0, this.decodeRGB656_za3lpa$(readU16LE(data, dataOffset + 0 | 0)));
    cc.set_vlvk8p$(1, this.decodeRGB656_za3lpa$(readU16LE(data, dataOffset + 2 | 0)));
    cc.set_vlvk8p$(2, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 170));
    cc.set_vlvk8p$(3, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 85));
  };
  DXT$Companion.prototype.decodeDxt5Alpha_syel7v$ = function (data, dataOffset, aa) {
    var a0 = readU8_0(data, dataOffset + 0 | 0);
    var a1 = readU8_0(data, dataOffset + 1 | 0);
    aa[0] = a0;
    aa[1] = a1;
    if (a0 > a1) {
      aa[2] = ((6 * a0 | 0) + (1 * a1 | 0) | 0) / 7 | 0;
      aa[3] = ((5 * a0 | 0) + (2 * a1 | 0) | 0) / 7 | 0;
      aa[4] = ((4 * a0 | 0) + (3 * a1 | 0) | 0) / 7 | 0;
      aa[5] = ((3 * a0 | 0) + (4 * a1 | 0) | 0) / 7 | 0;
      aa[6] = ((2 * a0 | 0) + (5 * a1 | 0) | 0) / 7 | 0;
      aa[7] = ((1 * a0 | 0) + (6 * a1 | 0) | 0) / 7 | 0;
    }
     else {
      aa[2] = ((4 * a0 | 0) + (1 * a1 | 0) | 0) / 5 | 0;
      aa[3] = ((3 * a0 | 0) + (2 * a1 | 0) | 0) / 5 | 0;
      aa[4] = ((2 * a0 | 0) + (3 * a1 | 0) | 0) / 5 | 0;
      aa[5] = ((1 * a0 | 0) + (4 * a1 | 0) | 0) / 5 | 0;
      aa[6] = 0;
      aa[7] = 255;
    }
  };
  DXT$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DXT$Companion_instance = null;
  function DXT$Companion_getInstance() {
    if (DXT$Companion_instance === null) {
      new DXT$Companion();
    }
    return DXT$Companion_instance;
  }
  DXT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT',
    interfaces: [ImageFormat]
  };
  function ICO() {
    ICO_instance = this;
    ImageFormat.call(this, ['ico']);
  }
  ICO.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (readU16LE_0(s) !== 0)
      return null;
    if (readU16LE_0(s) !== 1)
      return null;
    var count = readU16LE_0(s);
    if (count >= 1000)
      return null;
    return new ImageInfo();
  };
  function ICO$readImage$DirEntry(width, height, colorCount, reserved, planes, bitCount, size, offset) {
    this.width = width;
    this.height = height;
    this.colorCount = colorCount;
    this.reserved = reserved;
    this.planes = planes;
    this.bitCount = bitCount;
    this.size = size;
    this.offset = offset;
  }
  ICO$readImage$DirEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirEntry',
    interfaces: []
  };
  ICO$readImage$DirEntry.prototype.component1 = function () {
    return this.width;
  };
  ICO$readImage$DirEntry.prototype.component2 = function () {
    return this.height;
  };
  ICO$readImage$DirEntry.prototype.component3 = function () {
    return this.colorCount;
  };
  ICO$readImage$DirEntry.prototype.component4 = function () {
    return this.reserved;
  };
  ICO$readImage$DirEntry.prototype.component5 = function () {
    return this.planes;
  };
  ICO$readImage$DirEntry.prototype.component6 = function () {
    return this.bitCount;
  };
  ICO$readImage$DirEntry.prototype.component7 = function () {
    return this.size;
  };
  ICO$readImage$DirEntry.prototype.component8 = function () {
    return this.offset;
  };
  ICO$readImage$DirEntry.prototype.copy_wrdw30$ = function (width, height, colorCount, reserved, planes, bitCount, size, offset) {
    return new ICO$readImage$DirEntry(width === void 0 ? this.width : width, height === void 0 ? this.height : height, colorCount === void 0 ? this.colorCount : colorCount, reserved === void 0 ? this.reserved : reserved, planes === void 0 ? this.planes : planes, bitCount === void 0 ? this.bitCount : bitCount, size === void 0 ? this.size : size, offset === void 0 ? this.offset : offset);
  };
  ICO$readImage$DirEntry.prototype.toString = function () {
    return 'DirEntry(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', colorCount=' + Kotlin.toString(this.colorCount)) + (', reserved=' + Kotlin.toString(this.reserved)) + (', planes=' + Kotlin.toString(this.planes)) + (', bitCount=' + Kotlin.toString(this.bitCount)) + (', size=' + Kotlin.toString(this.size)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  ICO$readImage$DirEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.reserved) | 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  ICO$readImage$DirEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.colorCount, other.colorCount) && Kotlin.equals(this.reserved, other.reserved) && Kotlin.equals(this.planes, other.planes) && Kotlin.equals(this.bitCount, other.bitCount) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.offset, other.offset)))));
  };
  function ICO$readImage$readDirEntry(closure$s) {
    return function () {
      return new ICO$readImage$DirEntry(readU8(closure$s), readU8(closure$s), readU8(closure$s), readU8(closure$s), readU16LE_0(closure$s), readU16LE_0(closure$s), readS32LE_0(closure$s), readS32LE_0(closure$s));
    };
  }
  function ICO$readImage$readBitmap(closure$props) {
    return function (e, s) {
      var tmp$;
      var tryPNGHead = readU32BE(sliceStart(s));
      if (equals(tryPNGHead, L2303741511))
        return PNG_getInstance().decode_1ooaqm$(sliceStart(s), closure$props.copy_qp3p0u$(closure$props.filename + '.png'));
      var headerSize = readS32LE_0(s);
      var width = readS32LE_0(s);
      var height = readS32LE_0(s);
      var planes = readS16LE(s);
      var bitCount = readS16LE(s);
      var compression = readS32LE_0(s);
      var imageSize = readS32LE_0(s);
      var pixelsXPerMeter = readS32LE_0(s);
      var pixelsYPerMeter = readS32LE_0(s);
      var clrUsed = readS32LE_0(s);
      var clrImportant = readS32LE_0(s);
      var palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(0);
      if (compression !== 0)
        throw UnsupportedOperationException_init('Not supported compressed .ico');
      if (bitCount <= 8) {
        var colors = clrUsed === 0 ? 1 << bitCount : clrUsed;
        var $receiver = until(0, colors);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var b = readU8(s);
          var g = readU8(s);
          var r = readU8(s);
          var reserved = readU8(s);
          tmp$_1.call(destination, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, 255));
        }
        palette = toRgbaArray(destination);
      }
      var stride = Kotlin.imul(e.width, bitCount) / 8 | 0;
      var data = readBytes(s, Kotlin.imul(stride, e.height));
      switch (bitCount) {
        case 4:
          tmp$ = new Bitmap4(e.width, e.height, data, palette);
          break;
        case 8:
          tmp$ = new Bitmap8(e.width, e.height, data, palette);
          break;
        case 32:
          tmp$ = (new Bitmap32(e.width, e.height)).writeDecoded_77vltg$(BGRA_getInstance(), data);
          break;
        default:throw UnsupportedOperationException_init('Unsupported bitCount: ' + bitCount);
      }
      return tmp$;
    };
  }
  ICO.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var readDirEntry = ICO$readImage$readDirEntry(s);
    var readBitmap = ICO$readImage$readBitmap(props);
    var reserved = readU16LE_0(s);
    var type = readU16LE_0(s);
    var count = readU16LE_0(s);
    var $receiver = until(0, count);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readDirEntry());
    }
    var entries = destination;
    var bitmaps = ArrayList_init_0();
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var bmp = readBitmap(e, sliceWithSize_0(s, Kotlin.Long.fromInt(e.offset), Kotlin.Long.fromInt(e.size)));
      bmp.flipY();
      bitmaps.add_11rb$(bmp);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(bitmaps, 10));
    var tmp$_1;
    tmp$_1 = bitmaps.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(new ImageFrame(item_0, void 0, void 0, void 0, false));
    }
    return new ImageData(destination_0);
  };
  ICO.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    write16LE_0(s, 0);
    write16LE_0(s, 1);
    write16LE_0(s, image.frames.size);
    var payloadStart = 6 + (16 * image.frames.size | 0) | 0;
    var payloadData = MemorySyncStream();
    tmp$ = image.frames.iterator();
    while (tmp$.hasNext()) {
      var frame = tmp$.next();
      var bitmap = frame.bitmap;
      var width = bitmap.width;
      var height = bitmap.height;
      if (width > 256 || height > 256) {
        throw IllegalStateException_init(('Size too big for ICO image: ' + frame.bitmap.size).toString());
      }
      write8(s, width);
      write8(s, height);
      write8(s, 0);
      write8(s, 0);
      write16LE_0(s, 1);
      write16LE_0(s, 32);
      var start = payloadData.position.toInt();
      if (width === 32 && height === 32) {
        var bmp = BMP_getInstance().encode_hnx2ev$(bitmap.toBMP32());
        writeBytes(payloadData, sliceArray(bmp, until(14, bmp.length)));
        var data = new Bitmap1(width, height);
        writeBytes(payloadData, data.data);
      }
       else {
        writeBytes(payloadData, PNG_getInstance().encode_hnx2ev$(bitmap.toBMP32()));
      }
      var size = payloadData.position.toInt() - start | 0;
      write32LE_0(s, size);
      write32LE_0(s, payloadStart + start | 0);
    }
    writeBytes(s, toByteArray(payloadData));
  };
  ICO.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ICO',
    interfaces: [ImageFormat]
  };
  var ICO_instance = null;
  function ICO_getInstance() {
    if (ICO_instance === null) {
      new ICO();
    }
    return ICO_instance;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ImageData(frames) {
    this.frames = frames;
    this.$delegate_eltpmo$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageData.prototype, 'area', {
    get: function () {
      return get_area(this.frames);
    }
  });
  function ImageData$get_ImageData$mainBitmap$lambda(it) {
    if (it.main) {
      return 2147483647;
    }
     else {
      return Kotlin.imul(Kotlin.imul(it.bitmap.width, it.bitmap.height), Kotlin.imul(it.bitmap.bpp, it.bitmap.bpp));
    }
  }
  Object.defineProperty(ImageData.prototype, 'mainBitmap', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = firstOrNull_0(sortedWith(this.frames, new Comparator$ObjectLiteral(compareBy$lambda(ImageData$get_ImageData$mainBitmap$lambda))))) != null ? tmp$.bitmap : null;
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init('No bitmap found');
      }
      return tmp$_0;
    }
  });
  ImageData.prototype.toString = function () {
    return 'ImageData(' + this.frames + ')';
  };
  Object.defineProperty(ImageData.prototype, 'extra', {
    get: function () {
      return this.$delegate_eltpmo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_eltpmo$_0.extra = tmp$;
    }
  });
  ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: [Extra]
  };
  function ImageFormat(exts) {
    var destination = ArrayList_init(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString());
    }
    this.extensions = toSet(destination);
  }
  ImageFormat.prototype.readImage_1ooaqm$$default = function (s, props) {
    throw new NotImplementedError_init();
  };
  ImageFormat.prototype.readImage_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.readImage_1ooaqm$$default(s, props);
  };
  ImageFormat.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    throw UnsupportedOperationException_init_0();
  };
  ImageFormat.prototype.writeImage_2psbf2$ = function (image, s, props, callback$default) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    callback$default ? callback$default(image, s, props) : this.writeImage_2psbf2$$default(image, s, props);
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var runIgnoringExceptions$result;
    runIgnoringExceptions$break: do {
      try {
        var bmp = this.read_1ooaqm$(s, props);
        var $receiver = new ImageInfo();
        $receiver.width = bmp.width;
        $receiver.height = bmp.height;
        $receiver.bitsPerPixel = bmp.bpp;
        runIgnoringExceptions$result = $receiver;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
            printStackTrace(e);
          runIgnoringExceptions$result = null;
          break runIgnoringExceptions$break;
        }
         else
          throw e;
      }
    }
     while (false);
    return runIgnoringExceptions$result;
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.decodeHeader_1ooaqm$$default(s, props);
  };
  ImageFormat.prototype.read_zdd1ed$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.readImage_1ooaqm$(s, (new ImageDecodingProps()).copy_qp3p0u$(filename)).mainBitmap;
  };
  function Coroutine$read_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$read_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_3ekr7n$.prototype.constructor = Coroutine$read_3ekr7n$;
  Coroutine$read_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, get_baseName(this.local$file));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ImageFormat.prototype.read_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$read_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ImageFormat.prototype.read_nwlife$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.read_zdd1ed$(openSync(s), filename);
  };
  ImageFormat.prototype.read_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.readImage_1ooaqm$(s, props).mainBitmap;
  };
  ImageFormat.prototype.read_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  ImageFormat.prototype.check_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    var tmp$;
    var runIgnoringExceptions$result;
    runIgnoringExceptions$break: do {
      try {
        runIgnoringExceptions$result = this.decodeHeader_1ooaqm$(s, props) != null;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
            printStackTrace(e);
          runIgnoringExceptions$result = null;
          break runIgnoringExceptions$break;
        }
         else
          throw e;
      }
    }
     while (false);
    return (tmp$ = runIgnoringExceptions$result) != null ? tmp$ : false;
  };
  ImageFormat.prototype.decode_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(s, props);
  };
  ImageFormat.prototype.decode_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  function Coroutine$decode_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$decode_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_3ekr7n$.prototype.constructor = Coroutine$decode_3ekr7n$;
  Coroutine$decode_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, get_baseName(this.local$file));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ImageFormat.prototype.decode_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ImageFormat.prototype.encode_dqmhj5$ = function (frames, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuilder_init(get_area(frames) * 4 | 0);
    var s = MemorySyncStream_0(buffer);
    this.writeImage_2psbf2$(new ImageData(frames), s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_ruzdkj$ = function (image, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuilder_init(image.area * 4 | 0);
    var s = MemorySyncStream_0(buffer);
    this.writeImage_2psbf2$(image, s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_hnx2ev$ = function (bitmap, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    return this.encode_dqmhj5$(listOf_0(new ImageFrame(bitmap)), props);
  };
  function Coroutine$read_jxoshq$($this, file_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$props = props_0;
  }
  Coroutine$read_jxoshq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_jxoshq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_jxoshq$.prototype.constructor = Coroutine$read_jxoshq$;
  Coroutine$read_jxoshq$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$file.readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.readImage_1ooaqm$(openSync(this.result_0), this.local$props.copy_qp3p0u$(get_baseName(this.local$file)));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ImageFormat.prototype.read_jxoshq$ = function (file_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$read_jxoshq$(this, file_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ImageFormat.prototype.toString = function () {
    return 'ImageFormat(' + this.extensions + ')';
  };
  ImageFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormat',
    interfaces: []
  };
  function ImageDecodingProps(filename, width, height, extra) {
    if (filename === void 0)
      filename = 'unknown';
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.extra_5zgpe1$_0 = extra;
  }
  Object.defineProperty(ImageDecodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_5zgpe1$_0;
    },
    set: function (extra) {
      this.extra_5zgpe1$_0 = extra;
    }
  });
  ImageDecodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageDecodingProps',
    interfaces: [Extra]
  };
  ImageDecodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageDecodingProps.prototype.component2 = function () {
    return this.width;
  };
  ImageDecodingProps.prototype.component3 = function () {
    return this.height;
  };
  ImageDecodingProps.prototype.component4 = function () {
    return this.extra;
  };
  ImageDecodingProps.prototype.copy_qp3p0u$ = function (filename, width, height, extra) {
    return new ImageDecodingProps(filename === void 0 ? this.filename : filename, width === void 0 ? this.width : width, height === void 0 ? this.height : height, extra === void 0 ? this.extra : extra);
  };
  ImageDecodingProps.prototype.toString = function () {
    return 'ImageDecodingProps(filename=' + Kotlin.toString(this.filename) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageDecodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageDecodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageEncodingProps(filename, quality, extra) {
    if (filename === void 0)
      filename = '';
    if (quality === void 0)
      quality = 0.81;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.quality = quality;
    this.extra_flamk1$_0 = extra;
  }
  Object.defineProperty(ImageEncodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_flamk1$_0;
    },
    set: function (extra) {
      this.extra_flamk1$_0 = extra;
    }
  });
  ImageEncodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageEncodingProps',
    interfaces: [Extra]
  };
  ImageEncodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageEncodingProps.prototype.component2 = function () {
    return this.quality;
  };
  ImageEncodingProps.prototype.component3 = function () {
    return this.extra;
  };
  ImageEncodingProps.prototype.copy_x69rha$ = function (filename, quality, extra) {
    return new ImageEncodingProps(filename === void 0 ? this.filename : filename, quality === void 0 ? this.quality : quality, extra === void 0 ? this.extra : extra);
  };
  ImageEncodingProps.prototype.toString = function () {
    return 'ImageEncodingProps(filename=' + Kotlin.toString(this.filename) + (', quality=' + Kotlin.toString(this.quality)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageEncodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.quality) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageEncodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.quality, other.quality) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageFormats(formats) {
    ImageFormat.call(this, ['']);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = formats.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = Kotlin.isType(element, ImageFormats) ? toList(element.formats) : listOf_0(element);
      addAll(destination, list);
    }
    this.formats = toSet(destination);
  }
  ImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    tmp$ = this.formats.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        tmp$_0 = format.decodeHeader_1ooaqm$(sliceStart(s), props);
        if (tmp$_0 == null) {
          continue;
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          continue;
        }
         else
          throw e;
      }
      return tmp$_0;
    }
    return null;
  };
  ImageFormats.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    tmp$ = this.formats.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      if (format.check_1ooaqm$(sliceStart(s), props)) {
        return format.readImage_1ooaqm$(sliceStart(s), props);
      }
    }
    throw UnsupportedOperationException_init('No suitable image format : MAGIC:' + readString(sliceStart(s), 4, lang.ASCII) + '(' + get_hex_0(readBytes(sliceStart(s), 4)) + ') (' + toString(readBytes(sliceStart(s), 4), lang.ASCII) + ')');
  };
  ImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(props.filename));
    var $receiver = this.formats;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.extensions.contains_11rb$(ext)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      var tmp$_1 = "Don't know how to generate file for extension '" + ext + "' (supported extensions ";
      var $receiver_0 = this.formats;
      var destination = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var list = element_0.extensions;
        addAll(destination, list);
      }
      throw UnsupportedOperationException_init(tmp$_1 + destination + ') (props ' + props + ')');
    }
    var format = tmp$;
    format.writeImage_2psbf2$(image, s, props);
  };
  ImageFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormats',
    interfaces: [ImageFormat]
  };
  function ImageFormats_init(formats, $this) {
    $this = $this || Object.create(ImageFormats.prototype);
    ImageFormats.call($this, toList_0(formats));
    return $this;
  }
  function plus_2($receiver, format) {
    return ImageFormats_init([$receiver, format]);
  }
  function plus_3($receiver, format) {
    return new ImageFormats(plus(listOf_0($receiver), format));
  }
  function writeTo($receiver, file, formats, props, continuation) {
    if (formats === void 0)
      formats = RegisteredImageFormats_getInstance();
    if (props === void 0)
      props = new ImageEncodingProps();
    return file.writeBytes_bdsgvo$(formats.encode_hnx2ev$($receiver, props.copy_x69rha$(get_baseName(file))), [], continuation);
  }
  function encode_3($receiver, formats, props, continuation) {
    if (formats === void 0)
      formats = RegisteredImageFormats_getInstance();
    if (props === void 0)
      props = new ImageEncodingProps();
    return formats.encode_hnx2ev$($receiver, props);
  }
  function ImageFrame(bitmap, time, targetX, targetY, main) {
    if (time === void 0)
      time = L0;
    if (targetX === void 0)
      targetX = 0;
    if (targetY === void 0)
      targetY = 0;
    if (main === void 0)
      main = true;
    this.bitmap = bitmap;
    this.time = time;
    this.targetX = targetX;
    this.targetY = targetY;
    this.main = main;
    this.$delegate_qnaswn$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageFrame.prototype, 'area', {
    get: function () {
      return this.bitmap.area;
    }
  });
  ImageFrame.prototype.toString = function () {
    return 'ImageFrame(' + this.bitmap + ', time=' + this.time.toString() + ', targetX=' + this.targetX + ', targetY=' + this.targetY + ', main=' + this.main + ')';
  };
  Object.defineProperty(ImageFrame.prototype, 'extra', {
    get: function () {
      return this.$delegate_qnaswn$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_qnaswn$_0.extra = tmp$;
    }
  });
  ImageFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFrame',
    interfaces: [Extra]
  };
  function get_area($receiver) {
    var tmp$;
    var sum = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.area | 0;
    }
    return sum;
  }
  function ImageInfo() {
    this.$delegate_elx5vo$_0 = new Extra$Mixin();
    this.width = 0;
    this.height = 0;
    this.bitsPerPixel = 0;
  }
  Object.defineProperty(ImageInfo.prototype, 'size', {
    get: function () {
      var width = this.width;
      var height = this.height;
      return new Size(new Point(numberToDouble(width), numberToDouble(height)));
    }
  });
  ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + this.width + ', height=' + this.height + ', bpp=' + this.bitsPerPixel + ', extra=' + toString_0(this.extra) + ')';
  };
  Object.defineProperty(ImageInfo.prototype, 'extra', {
    get: function () {
      return this.$delegate_elx5vo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_elx5vo$_0.extra = tmp$;
    }
  });
  ImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageInfo',
    interfaces: [Extra]
  };
  function Coroutine$decode($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode.prototype.constructor = Coroutine$decode;
  Coroutine$decode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$s.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$s)));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function decode_1($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$filename = filename_0;
  }
  Coroutine$decode_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_0.prototype.constructor = Coroutine$decode_0;
  Coroutine$decode_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, new ImageDecodingProps(this.local$filename));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function decode_2($receiver_0, s_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_1.prototype.constructor = Coroutine$decode_1;
  Coroutine$decode_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, this.local$props);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function decode_3($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function get_nativeImageFormatProviders() {
    return listOf_0(nativeImageFormatProvider);
  }
  function displayImage(bmp, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return nativeImageFormatProvider.display_uwsoz2$(bmp, kind, continuation);
  }
  function Coroutine$decodeImageBytes(bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$bytes = bytes_0;
  }
  Coroutine$decodeImageBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageBytes.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageBytes.prototype.constructor = Coroutine$decodeImageBytes;
  Coroutine$decodeImageBytes.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = get_nativeImageFormatProviders().iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_fqrh44$(this.local$bytes, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (!Kotlin.isType(t, Throwable))
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            throw UnsupportedOperationException_init('No format supported');
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function decodeImageBytes(bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageBytes(bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decodeImageFile(file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$file = file_0;
  }
  Coroutine$decodeImageFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageFile.prototype.constructor = Coroutine$decodeImageFile;
  Coroutine$decodeImageFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = get_nativeImageFormatProviders().iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_o2v52r$(this.local$file.vfs, this.local$file.path, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (!Kotlin.isType(t, Throwable))
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            throw UnsupportedOperationException_init('No format supported');
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function decodeImageFile(file_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageFile(file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readNativeImage($receiver, continuation) {
    return decodeImageFile($receiver, continuation);
  }
  function Coroutine$readImageData($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readImageData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData.prototype.constructor = Coroutine$readImageData;
  Coroutine$readImageData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$$receiver)));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readImageData($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNativeImage($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readNativeImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNativeImage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNativeImage.prototype.constructor = Coroutine$readNativeImage;
  Coroutine$readNativeImage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readNativeImage_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readNativeImage($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_0($receiver_0, formats_0, basename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$basename = basename_0;
  }
  Coroutine$readImageData_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_0.prototype.constructor = Coroutine$readImageData_0;
  Coroutine$readImageData_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$basename === void 0)
              this.local$basename = 'file.bin';
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(openSync(this.result_0), new ImageDecodingProps(this.local$basename));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readImageData_0($receiver_0, formats_0, basename_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_0($receiver_0, formats_0, basename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageDataProps($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readImageDataProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageDataProps.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageDataProps.prototype.constructor = Coroutine$readImageDataProps;
  Coroutine$readImageDataProps.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(openSync(this.result_0), this.local$props);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readImageDataProps($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageDataProps($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapListNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative.prototype.constructor = Coroutine$readBitmapListNoNative;
  Coroutine$readBitmapListNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_0(this.local$$receiver, this.local$formats, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapListNoNative($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmapInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo.prototype.constructor = Coroutine$readBitmapInfo;
  Coroutine$readBitmapInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0, this.local$props);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapInfo($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_1($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_1.prototype.constructor = Coroutine$readImageData_1;
  Coroutine$readImageData_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, new ImageDecodingProps(get_baseName(this.local$$receiver)));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readImageData_1($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_1($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapListNoNative_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative_0.prototype.constructor = Coroutine$readBitmapListNoNative_0;
  Coroutine$readBitmapListNoNative_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_1(this.local$$receiver, this.local$formats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapListNoNative_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readBitmap($receiver, basename, formats, continuation) {
    return readBitmap_0($receiver, formats, new ImageDecodingProps(basename), continuation);
  }
  function Coroutine$readBitmap($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$tmp$ = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap.prototype.constructor = Coroutine$readBitmap;
  Coroutine$readBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            this.state_0 = 1;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 4;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 2;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = this.local$formats.decode_pdgdrr$(this.local$bytes, this.local$props);
              this.state_0 = 3;
              continue;
            }

          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.local$tmp$ = this.local$formats.decode_pdgdrr$(this.local$bytes, this.local$props);
            }
             else
              throw t;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmap_0($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapInfo_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo_0.prototype.constructor = Coroutine$readBitmapInfo_0;
  Coroutine$readBitmapInfo_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapInfo_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapOptimized($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapOptimized.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapOptimized.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapOptimized.prototype.constructor = Coroutine$readBitmapOptimized;
  Coroutine$readBitmapOptimized.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = nativeImageFormatProvider.decode_3ekr7n$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              printStackTrace(t);
              this.state_0 = 3;
              this.result_0 = readBitmap_1(this.local$$receiver, this.local$formats, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw t;
            }

          case 3:
            return this.result_0;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapOptimized($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapOptimized($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap_0($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmap_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap_0.prototype.constructor = Coroutine$readBitmap_0;
  Coroutine$readBitmap_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (nativeImageLoadingEnabled) {
              this.exceptionState_0 = 3;
              this.state_0 = 2;
              this.result_0 = nativeImageFormatProvider.decode_3ekr7n$(this.local$$receiver, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 1;
              this.result_0 = this.local$$receiver.read(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            return this.local$formats.decode_pdgdrr$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$$receiver)));
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              println("Couldn't read native image: " + e);
              printStackTrace(e);
              this.state_0 = 4;
              this.result_0 = this.local$$receiver.read(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw e;
            }

          case 4:
            return this.local$formats.decode_pdgdrr$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$$receiver)));
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            return;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmap_1($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap_0($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapSlice($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapSlice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapSlice.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapSlice.prototype.constructor = Coroutine$readBitmapSlice;
  Coroutine$readBitmapSlice.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            this.state_0 = 2;
            this.result_0 = readBitmapOptimized(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return slice(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapSlice($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapSlice($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var nativeImageLoadingEnabled;
  function disableNativeImageLoading(callback, continuation) {
    var oldNativeImageLoadingEnabled_0 = package$format.nativeImageLoadingEnabled;
    try {
      package$format.nativeImageLoadingEnabled = false;
      callback();
    }
    finally {
      package$format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
    }
  }
  defineInlineFunction('korim-root-korim.com.soywiz.korim.format.disableNativeImageLoading_o14v8n$', wrapFunction(function () {
    var format = _.com.soywiz.korim.format;
    return function (callback, continuation) {
      var oldNativeImageLoadingEnabled_0 = format.nativeImageLoadingEnabled;
      try {
        format.nativeImageLoadingEnabled = false;
        callback();
      }
      finally {
        format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
      }
    };
  }));
  function Coroutine$readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmapNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapNoNative.prototype.constructor = Coroutine$readBitmapNoNative;
  Coroutine$readBitmapNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props).mainBitmap;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readBitmapNoNative_0($receiver, formats, continuation) {
    if (formats === void 0)
      formats = RegisteredImageFormats_getInstance();
    return decode_1(formats, $receiver, new ImageDecodingProps(get_baseName($receiver)), continuation);
  }
  function Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$bitmap = bitmap_0;
    this.local$format = format_0;
    this.local$props = props_0;
  }
  Coroutine$writeBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeBitmap.prototype.constructor = Coroutine$writeBitmap;
  Coroutine$writeBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageEncodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.write_bdsgvo$(this.local$format.encode_hnx2ev$(this.local$bitmap, this.local$props.copy_x69rha$(get_baseName(this.local$$receiver))), [], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function NativeImageConfig(premultiplied) {
    this.premultiplied = premultiplied;
  }
  NativeImageConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImageConfig',
    interfaces: []
  };
  NativeImageConfig.prototype.component1 = function () {
    return this.premultiplied;
  };
  NativeImageConfig.prototype.copy_6taknv$ = function (premultiplied) {
    return new NativeImageConfig(premultiplied === void 0 ? this.premultiplied : premultiplied);
  };
  NativeImageConfig.prototype.toString = function () {
    return 'NativeImageConfig(premultiplied=' + Kotlin.toString(this.premultiplied) + ')';
  };
  NativeImageConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.premultiplied) | 0;
    return result;
  };
  NativeImageConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.premultiplied, other.premultiplied))));
  };
  function NativeImageFormatProvider() {
  }
  function Coroutine$decode_52yb2k$($this, vfs_0, path_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$decode_52yb2k$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_52yb2k$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_52yb2k$.prototype.constructor = Coroutine$decode_52yb2k$;
  Coroutine$decode_52yb2k$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  NativeImageFormatProvider.prototype.decode_52yb2k$ = function (vfs_0, path_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_52yb2k$(this, vfs_0, path_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeImageFormatProvider.prototype.decode_1ecnpg$ = function (file, premultiplied, continuation) {
    return this.decode_52yb2k$(file.vfs, file.path, premultiplied, continuation);
  };
  function Coroutine$decode_x9gm8m$($this, file_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_x9gm8m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_x9gm8m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_x9gm8m$.prototype.constructor = Coroutine$decode_x9gm8m$;
  Coroutine$decode_x9gm8m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_1ecnpg$(this.result_0, this.local$premultiplied, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  NativeImageFormatProvider.prototype.decode_x9gm8m$ = function (file_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_x9gm8m$(this, file_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeImageFormatProvider.prototype.decode_fqrh44$ = function (data, continuation) {
    return this.decode_1fhb37$(data, true, continuation);
  };
  NativeImageFormatProvider.prototype.decode_o2v52r$ = function (vfs, path, continuation) {
    return this.decode_52yb2k$(vfs, path, true, continuation);
  };
  NativeImageFormatProvider.prototype.decode_j9tqln$ = function (file, continuation) {
    return this.decode_1ecnpg$(file, true, continuation);
  };
  NativeImageFormatProvider.prototype.decode_3ekr7n$ = function (file, continuation) {
    return this.decode_x9gm8m$(file, true, continuation);
  };
  NativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    var $receiver = this.create_vux9f0$(bmp.width, bmp.height);
    var ctx = $receiver.getContext2d_6taknv$(true);
    try {
      ctx.drawImage_dpo8os$(bmp, 0, 0);
    }
    finally {
      ctx.dispose();
    }
    return $receiver;
  };
  NativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    return ensureNative(bmp.toBMP32().mipmap_za3lpa$(levels));
  };
  NativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var x = bmp.width * 0.5;
    var tmp$ = numberToInt(Math_0.ceil(x));
    var x_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, numberToInt(Math_0.ceil(x_0)));
    out.getContext2d_6taknv$(true).renderer.drawImage_dfapkx$(bmp, 0, 0, out.width, out.height);
    return out;
  };
  NativeImageFormatProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImageFormatProvider',
    interfaces: []
  };
  function showImageAndWait($receiver, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return nativeImageFormatProvider.display_uwsoz2$($receiver, kind, continuation);
  }
  function Coroutine$showImagesAndWait($receiver_0, kind_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$kind = kind_0;
  }
  Coroutine$showImagesAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImagesAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImagesAndWait.prototype.constructor = Coroutine$showImagesAndWait;
  Coroutine$showImagesAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$kind === void 0)
              this.local$kind = 0;
            this.local$tmp$ = this.local$$receiver.frames.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var frame = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = showImageAndWait(frame.bitmap, this.local$kind, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function showImagesAndWait($receiver_0, kind_0, continuation_0, suspended) {
    var instance = new Coroutine$showImagesAndWait($receiver_0, kind_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function showImageAndWait_0($receiver, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return showImageAndWait(render($receiver).toBMP32(), kind, continuation);
  }
  var arraycopy$lambda_3 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function PNG() {
    PNG_instance = this;
    ImageFormat.call(this, ['png']);
    this.MAGIC1 = -1991225785;
    this.MAGIC2 = 218765834;
    this.InterlacedPasses = listOf([new PNG$InterlacedPass(0, 0, 8, 8, 8, 8), new PNG$InterlacedPass(0, 4, 8, 8, 8, 4), new PNG$InterlacedPass(4, 0, 8, 4, 4, 4), new PNG$InterlacedPass(0, 2, 4, 4, 4, 2), new PNG$InterlacedPass(2, 0, 4, 2, 2, 2), new PNG$InterlacedPass(0, 1, 2, 2, 2, 1), new PNG$InterlacedPass(1, 0, 2, 1, 1, 1)]);
    this.NormalPasses = listOf_0(new PNG$InterlacedPass(0, 0, 1, 1, 1, 1));
  }
  function PNG$InterlacedPass(startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    this.startingRow = startingRow;
    this.startingCol = startingCol;
    this.rowIncrement = rowIncrement;
    this.colIncrement = colIncrement;
    this.blockHeight = blockHeight;
    this.blockWidth = blockWidth;
    var x = this.colIncrement;
    this.colIncrementShift = numberToInt(Math_0.log2(x));
  }
  PNG$InterlacedPass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterlacedPass',
    interfaces: []
  };
  PNG$InterlacedPass.prototype.component1 = function () {
    return this.startingRow;
  };
  PNG$InterlacedPass.prototype.component2 = function () {
    return this.startingCol;
  };
  PNG$InterlacedPass.prototype.component3 = function () {
    return this.rowIncrement;
  };
  PNG$InterlacedPass.prototype.component4 = function () {
    return this.colIncrement;
  };
  PNG$InterlacedPass.prototype.component5 = function () {
    return this.blockHeight;
  };
  PNG$InterlacedPass.prototype.component6 = function () {
    return this.blockWidth;
  };
  PNG$InterlacedPass.prototype.copy_mbbjvw$ = function (startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    return new PNG$InterlacedPass(startingRow === void 0 ? this.startingRow : startingRow, startingCol === void 0 ? this.startingCol : startingCol, rowIncrement === void 0 ? this.rowIncrement : rowIncrement, colIncrement === void 0 ? this.colIncrement : colIncrement, blockHeight === void 0 ? this.blockHeight : blockHeight, blockWidth === void 0 ? this.blockWidth : blockWidth);
  };
  PNG$InterlacedPass.prototype.toString = function () {
    return 'InterlacedPass(startingRow=' + Kotlin.toString(this.startingRow) + (', startingCol=' + Kotlin.toString(this.startingCol)) + (', rowIncrement=' + Kotlin.toString(this.rowIncrement)) + (', colIncrement=' + Kotlin.toString(this.colIncrement)) + (', blockHeight=' + Kotlin.toString(this.blockHeight)) + (', blockWidth=' + Kotlin.toString(this.blockWidth)) + ')';
  };
  PNG$InterlacedPass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startingRow) | 0;
    result = result * 31 + Kotlin.hashCode(this.startingCol) | 0;
    result = result * 31 + Kotlin.hashCode(this.rowIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.colIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockWidth) | 0;
    return result;
  };
  PNG$InterlacedPass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startingRow, other.startingRow) && Kotlin.equals(this.startingCol, other.startingCol) && Kotlin.equals(this.rowIncrement, other.rowIncrement) && Kotlin.equals(this.colIncrement, other.colIncrement) && Kotlin.equals(this.blockHeight, other.blockHeight) && Kotlin.equals(this.blockWidth, other.blockWidth)))));
  };
  function PNG$Colorspace(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PNG$Colorspace_initFields() {
    PNG$Colorspace_initFields = function () {
    };
    PNG$Colorspace$GRAYSCALE_instance = new PNG$Colorspace('GRAYSCALE', 0, 0);
    PNG$Colorspace$RGB_instance = new PNG$Colorspace('RGB', 1, 2);
    PNG$Colorspace$INDEXED_instance = new PNG$Colorspace('INDEXED', 2, 3);
    PNG$Colorspace$GRAYSCALE_ALPHA_instance = new PNG$Colorspace('GRAYSCALE_ALPHA', 3, 4);
    PNG$Colorspace$RGBA_instance = new PNG$Colorspace('RGBA', 4, 6);
    PNG$Colorspace$Companion_getInstance();
  }
  var PNG$Colorspace$GRAYSCALE_instance;
  function PNG$Colorspace$GRAYSCALE_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_instance;
  }
  var PNG$Colorspace$RGB_instance;
  function PNG$Colorspace$RGB_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGB_instance;
  }
  var PNG$Colorspace$INDEXED_instance;
  function PNG$Colorspace$INDEXED_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$INDEXED_instance;
  }
  var PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  function PNG$Colorspace$GRAYSCALE_ALPHA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  }
  var PNG$Colorspace$RGBA_instance;
  function PNG$Colorspace$RGBA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGBA_instance;
  }
  function PNG$Colorspace$Companion() {
    PNG$Colorspace$Companion_instance = this;
    var $receiver = PNG$Colorspace$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  PNG$Colorspace$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PNG$Colorspace$Companion_instance = null;
  function PNG$Colorspace$Companion_getInstance() {
    PNG$Colorspace_initFields();
    if (PNG$Colorspace$Companion_instance === null) {
      new PNG$Colorspace$Companion();
    }
    return PNG$Colorspace$Companion_instance;
  }
  PNG$Colorspace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Colorspace',
    interfaces: [Enum]
  };
  function PNG$Colorspace$values() {
    return [PNG$Colorspace$GRAYSCALE_getInstance(), PNG$Colorspace$RGB_getInstance(), PNG$Colorspace$INDEXED_getInstance(), PNG$Colorspace$GRAYSCALE_ALPHA_getInstance(), PNG$Colorspace$RGBA_getInstance()];
  }
  PNG$Colorspace.values = PNG$Colorspace$values;
  function PNG$Colorspace$valueOf(name) {
    switch (name) {
      case 'GRAYSCALE':
        return PNG$Colorspace$GRAYSCALE_getInstance();
      case 'RGB':
        return PNG$Colorspace$RGB_getInstance();
      case 'INDEXED':
        return PNG$Colorspace$INDEXED_getInstance();
      case 'GRAYSCALE_ALPHA':
        return PNG$Colorspace$GRAYSCALE_ALPHA_getInstance();
      case 'RGBA':
        return PNG$Colorspace$RGBA_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.format.PNG.Colorspace.' + name);
    }
  }
  PNG$Colorspace.valueOf_61zpoe$ = PNG$Colorspace$valueOf;
  function PNG$Header(width, height, bitsPerChannel, colorspace, compressionmethod, filtermethod, interlacemethod) {
    this.width = width;
    this.height = height;
    this.bitsPerChannel = bitsPerChannel;
    this.colorspace = colorspace;
    this.compressionmethod = compressionmethod;
    this.filtermethod = filtermethod;
    this.interlacemethod = interlacemethod;
    var tmp$;
    switch (this.colorspace.name) {
      case 'GRAYSCALE':
        tmp$ = 1;
        break;
      case 'INDEXED':
        tmp$ = 1;
        break;
      case 'GRAYSCALE_ALPHA':
        tmp$ = 2;
        break;
      case 'RGB':
        tmp$ = 3;
        break;
      case 'RGBA':
        tmp$ = 4;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    this.components = tmp$;
    this.stride = Kotlin.imul(Kotlin.imul(this.width, this.components), this.bitsPerChannel) / 8 | 0;
  }
  PNG$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  PNG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var header = Kotlin.isType(tmp$ = this.readCommon_0(s, true), PNG$Header) ? tmp$ : throwCCE();
      var $receiver = new ImageInfo();
      $receiver.width = header.width;
      $receiver.height = header.height;
      $receiver.bitsPerPixel = header.bitsPerChannel;
      return $receiver;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  function PNG$writeImage$writeChunk(closure$s) {
    return function (name, data) {
      var nameBytes = copyOf_0(toByteArray_0(name), 4);
      var crc = checksum.CRC32.initialValue;
      crc = checksum.CRC32.update_3fge6q$(crc, nameBytes);
      crc = checksum.CRC32.update_3fge6q$(crc, data);
      write32BE_0(closure$s, data.length);
      writeBytes(closure$s, nameBytes);
      writeBytes(closure$s, data);
      write32BE_0(closure$s, crc);
    };
  }
  function PNG$writeImage$compress(closure$level) {
    return function (data) {
      return compress(data, ZLib.Companion, new CompressionContext(closure$level));
    };
  }
  function PNG$writeImage$writeChunk_0(closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var buffer = ByteArrayBuilder_init(initialCapacity);
      var s = MemorySyncStream_0(buffer);
      callback(s);
      return tmp$(name, buffer.toByteArray());
    };
  }
  function PNG$writeImage$writeChunkCompressed(closure$compress, closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var tmp$_0 = closure$compress;
      var buffer = ByteArrayBuilder_init(initialCapacity);
      var s = MemorySyncStream_0(buffer);
      callback(s);
      return tmp$(name, tmp$_0(buffer.toByteArray()));
    };
  }
  function PNG$writeImage$writeHeader$lambda(closure$width, closure$height, closure$colorspace) {
    return function ($receiver) {
      write32BE_0($receiver, closure$width);
      write32BE_0($receiver, closure$height);
      write8($receiver, 8);
      write8($receiver, closure$colorspace.id);
      write8($receiver, 0);
      write8($receiver, 0);
      write8($receiver, 0);
      return Unit;
    };
  }
  function PNG$writeImage$writeHeader(closure$width, closure$height, closure$writeChunk) {
    return function (colorspace) {
      closure$writeChunk('IHDR', 13, PNG$writeImage$writeHeader$lambda(closure$width, closure$height, colorspace));
    };
  }
  function PNG$writeImage$lambda(closure$bitmap) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$bitmap.palette.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        write8($receiver, c.r);
        write8($receiver, c.g);
        write8($receiver, c.b);
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_0(closure$bitmap) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$bitmap.palette.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        write8($receiver, c.a);
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_1($receiver) {
    return Unit;
  }
  PNG.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var bitmap = image.mainBitmap;
    var width = bitmap.width;
    var height = bitmap.height;
    write32BE_0(s, -1991225785);
    write32BE_0(s, 218765834);
    var writeChunk = PNG$writeImage$writeChunk(s);
    var level = numberToInt(convertRangeClamped(props.quality, 0.0, 1.0, 0.0, 9.0));
    var compress = PNG$writeImage$compress(level);
    var writeChunk_0 = PNG$writeImage$writeChunk_0(writeChunk);
    var writeChunkCompressed = PNG$writeImage$writeChunkCompressed(compress, writeChunk);
    var writeHeader = PNG$writeImage$writeHeader(width, height, writeChunk_0);
    if (Kotlin.isType(bitmap, Bitmap8)) {
      writeHeader(PNG$Colorspace$INDEXED_getInstance());
      writeChunk_0('PLTE', bitmap.palette.size * 3 | 0, PNG$writeImage$lambda(bitmap));
      writeChunk_0('tRNS', bitmap.palette.size * 1 | 0, PNG$writeImage$lambda_0(bitmap));
      var out = new Int8Array(height + Kotlin.imul(width, height) | 0);
      var pos = 0;
      for (var y = 0; y < height; y++) {
        write8_0(out, (tmp$ = pos, pos = tmp$ + 1 | 0, tmp$), 0);
        var index = bitmap.index_vux9f0$(0, y);
        arrayCopy(bitmap.data, out, pos, index, index + width | 0);
        pos = pos + width | 0;
      }
      writeChunk('IDAT', compress(out));
    }
     else {
      var bmp = bitmap.toBMP32();
      writeHeader(PNG$Colorspace$RGBA_getInstance());
      var out_0 = new Int8Array(height + (Kotlin.imul(width, height) * 4 | 0) | 0);
      var pos_0 = 0;
      for (var y_0 = 0; y_0 < height; y_0++) {
        write8_0(out_0, (tmp$_0 = pos_0, pos_0 = tmp$_0 + 1 | 0, tmp$_0), 0);
        var index_0 = bmp.index_vux9f0$(0, y_0);
        for (var x = 0; x < width; x++) {
          var c = bmp.premultiplied ? asPremultiplied(bmp.data.get_za3lpa$(index_0 + x | 0)).depremultiplied : bmp.data.get_za3lpa$(index_0 + x | 0);
          write8_0(out_0, (tmp$_1 = pos_0, pos_0 = tmp$_1 + 1 | 0, tmp$_1), c.r);
          write8_0(out_0, (tmp$_2 = pos_0, pos_0 = tmp$_2 + 1 | 0, tmp$_2), c.g);
          write8_0(out_0, (tmp$_3 = pos_0, pos_0 = tmp$_3 + 1 | 0, tmp$_3), c.b);
          write8_0(out_0, (tmp$_4 = pos_0, pos_0 = tmp$_4 + 1 | 0, tmp$_4), c.a);
        }
      }
      writeChunk('IDAT', compress(out_0));
    }
    writeChunk_0('IEND', 0, PNG$writeImage$lambda_1);
  };
  function PNG$readCommon$readChunk(closure$pheader, closure$paletteCount, closure$rgbPalette, closure$aPalette, closure$pngdata) {
    return function ($receiver) {
      var length = readS32BE_0($receiver);
      var type = readStringz($receiver, 4);
      var data = readStream_0($receiver, Kotlin.Long.fromInt(length));
      var crc = readS32BE_0($receiver);
      switch (type) {
        case 'IHDR':
          var tmp$;
          closure$pheader.v = new PNG$Header(readS32BE_0(data), readS32BE_0(data), readU8(data), (tmp$ = PNG$Colorspace$Companion_getInstance().BY_ID.get_11rb$(readU8(data))) != null ? tmp$ : PNG$Colorspace$RGBA_getInstance(), readU8(data), readU8(data), readU8(data));
          break;
        case 'PLTE':
          var tmp$_0 = closure$paletteCount;
          var a = closure$paletteCount.v;
          var b = data.length.toInt() / 3 | 0;
          tmp$_0.v = Math_0.max(a, b);
          data.read_mj6st8$(asByteArray(closure$rgbPalette), 0, data.length.toInt());
          break;
        case 'tRNS':
          var tmp$_1 = closure$paletteCount;
          var a_0 = closure$paletteCount.v;
          var b_0 = data.length.toInt();
          tmp$_1.v = Math_0.max(a_0, b_0);
          data.read_mj6st8$(asByteArray(closure$aPalette), 0, data.length.toInt());
          break;
        case 'IDAT':
          closure$pngdata.append_mj6st8$(readAll(data));
          break;
        case 'IEND':
          return false;
      }
      return true;
    };
  }
  PNG.prototype.readCommon_0 = function (s, readHeader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var magic = readS32BE_0(s);
    if (magic !== -1991225785)
      throw IllegalArgumentException_init('Invalid PNG file magic: ' + get_hex(magic) + '!=' + get_hex(-1991225785));
    readS32BE_0(s);
    var pheader = {v: null};
    var pngdata = ByteArrayBuilder_init_0();
    var rgbPalette = UByteArrayInt_0(768);
    var array = new Int8Array(256);
    var tmp$_8;
    tmp$_8 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_8; i++) {
      array[i] = -1 | 0;
    }
    var aPalette = new UByteArrayInt(array);
    var paletteCount = {v: 0};
    var readChunk = PNG$readCommon$readChunk(pheader, paletteCount, rgbPalette, aPalette, pngdata);
    while (!get_eof(s) && readChunk(s)) {
      if (readHeader && pheader.v != null)
        return pheader.v;
    }
    tmp$ = pheader.v;
    if (tmp$ == null) {
      throw IllegalArgumentException_init('PNG without header!');
    }
    var header = tmp$;
    var width = header.width;
    var height = header.height;
    var outputSizeHint = Kotlin.imul(Kotlin.imul(1 + width | 0, height), header.components);
    var databb = uncompress(pngdata.toByteArray(), ZLib.Companion);
    var databbp = 0;
    var context = new PNG$DecodingContext(header);
    var bpp = context.header.components;
    var row32 = context.row32;
    if (header.components === 1) {
      var tmp$_9 = void 0;
      var $receiver = until(0, paletteCount.v);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_10;
      tmp$_10 = $receiver.iterator();
      while (tmp$_10.hasNext()) {
        var item = tmp$_10.next();
        destination.add_11rb$(RGBA$Companion_getInstance().invoke_tjonv8$(rgbPalette.get_za3lpa$((item * 3 | 0) + 0 | 0), rgbPalette.get_za3lpa$((item * 3 | 0) + 1 | 0), rgbPalette.get_za3lpa$((item * 3 | 0) + 2 | 0), aPalette.get_za3lpa$(item)).value);
      }
      tmp$_0 = new Bitmap8(width, height, tmp$_9, new RgbaArray(toIntArray(destination)));
    }
     else
      tmp$_0 = new Bitmap32(width, height);
    var bmp = tmp$_0;
    var bmp8 = (tmp$_1 = bmp) == null || Kotlin.isType(tmp$_1, Bitmap8) ? tmp$_1 : null;
    var bmp32 = (tmp$_2 = bmp) == null || Kotlin.isType(tmp$_2, Bitmap32) ? tmp$_2 : null;
    if (header.interlacemethod === 1)
      tmp$_3 = this.InterlacedPasses;
    else
      tmp$_3 = this.NormalPasses;
    var passes = tmp$_3;
    tmp$_4 = passes.iterator();
    while (tmp$_4.hasNext()) {
      var pass = tmp$_4.next();
      tmp$_5 = pass.startingRow;
      tmp$_6 = pass.rowIncrement;
      for (var row = tmp$_5; row < height; row += tmp$_6) {
        var col = pass.startingCol;
        var colIncrement = pass.colIncrement;
        var pixelsInThisRow = width >>> pass.colIncrementShift;
        var bytesInThisRow = Kotlin.imul(Kotlin.imul(pixelsInThisRow, header.components), header.bitsPerChannel) / 8 | 0;
        var filter = databb[tmp$_7 = databbp, databbp = tmp$_7 + 1 | 0, tmp$_7] & 255;
        var currentRow = context.currentRow;
        var lastRow = context.lastRow;
        var srcPos = databbp;
        arrayCopy(databb, asByteArray(currentRow), 0, srcPos, srcPos + bytesInThisRow | 0);
        databbp = databbp + bytesInThisRow | 0;
        if (bmp8 != null) {
          this.applyFilter_nxw3fw$(filter, lastRow, currentRow, header.components);
          switch (header.bitsPerChannel) {
            case 1:
              for (var n = 0; n < width; n++) {
                bmp.setInt_qt1dr2$(col + n | 0, row, extract(currentRow.get_za3lpa$(n / 8 | 0), 7 - (n % 8 * 1 | 0) | 0, 1));
              }

              break;
            case 2:
              for (var n_0 = 0; n_0 < width; n_0++) {
                bmp.setInt_qt1dr2$(col + n_0 | 0, row, extract(currentRow.get_za3lpa$(n_0 / 4 | 0), 6 - (n_0 % 4 * 2 | 0) | 0, 2));
              }

              break;
            case 4:
              for (var n_1 = 0; n_1 < width; n_1++) {
                bmp.setInt_qt1dr2$(col + n_1 | 0, row, extract(currentRow.get_za3lpa$(n_1 / 2 | 0), 4 - (n_1 % 2 * 4 | 0) | 0, 4));
              }

              break;
            case 8:
              bmp8.setRowChunk_y8lvms$(col, row, asByteArray(currentRow), width, colIncrement);
              break;
            default:throw IllegalStateException_init(('Unsupported header.bitsPerChannel=' + header.bitsPerChannel).toString());
          }
        }
         else if (bmp32 != null) {
          if (header.bitsPerChannel === 8) {
            this.applyFilter_nxw3fw$(filter, lastRow, currentRow, bpp, bytesInThisRow);
            switch (bpp) {
              case 3:
                decode(RGB$Companion_getInstance(), asByteArray(currentRow), 0, row32, 0, pixelsInThisRow);
                break;
              case 4:
                decode(RGBA$Companion_getInstance(), asByteArray(currentRow), 0, row32, 0, pixelsInThisRow);
                break;
              default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Bytes: ' + bpp));
            }
            bmp32.setRowChunk_mv2y54$(col, row, row32, width, colIncrement);
          }
           else {
            throw IllegalStateException_init(('Unsupported header.bitsPerChannel=' + header.bitsPerChannel).toString());
          }
        }
        context.swapRows();
      }
    }
    return bmp;
  };
  function PNG$DecodingContext(header) {
    this.header = header;
    this.lastRow = UByteArrayInt_0(this.header.stride);
    this.currentRow = UByteArrayInt_0(this.header.stride);
    this.row32 = RgbaArray$Companion_getInstance().invoke_za3lpa$(this.header.width);
  }
  PNG$DecodingContext.prototype.swapRows = function () {
    var temp = this.currentRow;
    this.currentRow = this.lastRow;
    this.lastRow = temp;
  };
  PNG$DecodingContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodingContext',
    interfaces: []
  };
  PNG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    return new ImageData(listOf_0(new ImageFrame(Kotlin.isType(tmp$ = this.readCommon_0(s, false), Bitmap) ? tmp$ : throwCCE())));
  };
  PNG.prototype.paethPredictor_qt1dr2$ = function (a, b, c) {
    var p = a + b - c | 0;
    var pa = abs(p - a | 0);
    var pb = abs(p - b | 0);
    var pc = abs(p - c | 0);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  PNG.prototype.applyFilter_nxw3fw$ = function (filter, p, c, bpp, size) {
    if (size === void 0)
      size = c.size;
    switch (filter) {
      case 0:
        break;
      case 1:
        for (var n = bpp; n < size; n++)
          c.set_vux9f0$(n, c.get_za3lpa$(n) + c.get_za3lpa$(n - bpp | 0) | 0);
        break;
      case 2:
        for (var n_0 = 0; n_0 < size; n_0++)
          c.set_vux9f0$(n_0, c.get_za3lpa$(n_0) + p.get_za3lpa$(n_0) | 0);
        break;
      case 3:
        for (var n_1 = 0; n_1 < bpp; n_1++)
          c.set_vux9f0$(n_1, c.get_za3lpa$(n_1) + (p.get_za3lpa$(n_1) / 2 | 0) | 0);
        for (var n_2 = bpp; n_2 < size; n_2++)
          c.set_vux9f0$(n_2, c.get_za3lpa$(n_2) + ((c.get_za3lpa$(n_2 - bpp | 0) + p.get_za3lpa$(n_2) | 0) / 2 | 0) | 0);
        break;
      case 4:
        for (var n_3 = 0; n_3 < bpp; n_3++)
          c.set_vux9f0$(n_3, c.get_za3lpa$(n_3) + p.get_za3lpa$(n_3) | 0);
        for (var n_4 = bpp; n_4 < size; n_4++)
          c.set_vux9f0$(n_4, c.get_za3lpa$(n_4) + this.paethPredictor_qt1dr2$(c.get_za3lpa$(n_4 - bpp | 0), p.get_za3lpa$(n_4), p.get_za3lpa$(n_4 - bpp | 0)) | 0);
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Filter: ' + filter));
    }
  };
  PNG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PNG',
    interfaces: [ImageFormat]
  };
  var PNG_instance = null;
  function PNG_getInstance() {
    if (PNG_instance === null) {
      new PNG();
    }
    return PNG_instance;
  }
  function PSD() {
    PSD_instance = this;
    ImageFormat.call(this, ['psd']);
  }
  PSD.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var header = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a PSD file');
    var colorMode = readStream(s, readS32BE_0(s));
    var imageResources = readStream(s, readS32BE_0(s));
    var layerAndMask = readStream(s, readS32BE_0(s));
    var imageData = this.readImageData_0(openFastStream(readAvailable(s)), header);
    return new ImageData(listOf_0(new ImageFrame(imageData)));
  };
  PSD.prototype.packChannels_0 = function (width, height, channels) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pos = 0;
    var out = new Bitmap32(width, height);
    var array = new Int8Array(Kotlin.imul(width, height));
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
      array[i] = -1 | 0;
    }
    var dummyChannel = array;
    var rchannel = (tmp$ = getOrNull_0(channels, 0)) != null ? tmp$ : dummyChannel;
    var gchannel = (tmp$_0 = getOrNull_0(channels, 1)) != null ? tmp$_0 : dummyChannel;
    var bchannel = (tmp$_1 = getOrNull_0(channels, 2)) != null ? tmp$_1 : dummyChannel;
    var achannel = (tmp$_2 = getOrNull_0(channels, 3)) != null ? tmp$_2 : dummyChannel;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var r = rchannel[pos] & 255;
        var g = gchannel[pos] & 255;
        var b = bchannel[pos] & 255;
        var a = achannel[pos] & 255;
        out.data.set_vlvk8p$(pos, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a));
        pos = pos + 1 | 0;
      }
    }
    return out;
  };
  PSD.prototype.readImageData_0 = function ($receiver, header) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var compressionMethod = $receiver.readU16BE();
    var width = header.width;
    var height = header.height;
    var cchannels = header.channels;
    var array = Array_0(cchannels);
    var tmp$_4;
    tmp$_4 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_4; i++) {
      array[i] = new Int8Array(Kotlin.imul(width, height));
    }
    var channels = array;
    switch (compressionMethod) {
      case 0:
        for (var n = 0; n < cchannels; n++) {
          channels[n] = $receiver.readBytes_za3lpa$(Kotlin.imul(width, height));
        }

        break;
      case 1:
        var $receiver_0 = until(0, cchannels);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_5;
        tmp$_5 = $receiver_0.iterator();
        while (tmp$_5.hasNext()) {
          var item = tmp$_5.next();
          destination.add_11rb$($receiver.readShortArrayBE_za3lpa$(height));
        }

        var sizes = destination;
        for (var cindex = 0; cindex < cchannels; cindex++) {
          var carray = channels[cindex];
          var cpos = 0;
          tmp$ = sizes.get_za3lpa$(cindex);
          for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
            var size = tmp$[tmp$_0];
            var end = $receiver.offset + size;
            while ($receiver.offset < end) {
              var len = $receiver.readU8();
              if (len >= 128) {
                var byte = $receiver.readU8();
                tmp$_1 = 256 - len | 0;
                for (var j = 0; j <= tmp$_1; j++) {
                  carray[tmp$_2 = cpos, cpos = tmp$_2 + 1 | 0, tmp$_2] = toByte(byte);
                }
              }
               else {
                for (var j_0 = 0; j_0 <= len; j_0++) {
                  carray[tmp$_3 = cpos, cpos = tmp$_3 + 1 | 0, tmp$_3] = toByte($receiver.readU8());
                }
              }
            }
          }
        }

        break;
      default:invalidOp('Unsupported compression method ' + compressionMethod);
        break;
    }
    return this.packChannels_0(width, height, channels);
  };
  function PSD$PsdImageInfo() {
    ImageInfo.call(this);
    this.channels = 0;
    this.bitsPerChannel = 0;
    this.colorMode = 0;
  }
  PSD$PsdImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PsdImageInfo',
    interfaces: [ImageInfo]
  };
  PSD.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 4), '8BPS'))
      return null;
    var version = readU16BE_0(s);
    switch (version) {
      case 1:
        break;
      case 2:
        return null;
      default:return null;
    }
    var reserved = readBytes(s, 6);
    var channels = readU16BE_0(s);
    var height = readS32BE_0(s);
    var width = readS32BE_0(s);
    var bitsPerChannel = readU16BE_0(s);
    var colorMode = readU16BE_0(s);
    var $receiver = new PSD$PsdImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = Kotlin.imul(bitsPerChannel, channels);
    $receiver.channels = channels;
    $receiver.bitsPerChannel = bitsPerChannel;
    $receiver.colorMode = colorMode;
    return $receiver;
  };
  PSD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSD',
    interfaces: [ImageFormat]
  };
  var PSD_instance = null;
  function PSD_getInstance() {
    if (PSD_instance === null) {
      new PSD();
    }
    return PSD_instance;
  }
  var RegisteredImageFormats_formats;
  function RegisteredImageFormats() {
    RegisteredImageFormats_instance = this;
    ImageFormat.call(this, []);
  }
  Object.defineProperty(RegisteredImageFormats.prototype, 'formats', {
    get: function () {
      return RegisteredImageFormats_formats;
    },
    set: function (value) {
      RegisteredImageFormats_formats = value;
    }
  });
  RegisteredImageFormats.prototype.register_56bozu$ = function (formats) {
    this.formats = new ImageFormats(plus_0(this.formats.formats, formats));
  };
  RegisteredImageFormats.prototype.unregister_56bozu$ = function (formats) {
    this.formats = new ImageFormats(minus(this.formats.formats, formats));
  };
  RegisteredImageFormats.prototype.temporalRegister_t3vfgu$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.format.RegisteredImageFormats.temporalRegister_t3vfgu$', function (formats, callback) {
    var oldFormats = this.formats;
    try {
      this.register_56bozu$(formats.slice());
      return callback();
    }
    finally {
      this.formats = oldFormats;
    }
  });
  RegisteredImageFormats.prototype.readImage_1ooaqm$$default = function (s, props) {
    return this.formats.readImage_1ooaqm$(s, props);
  };
  RegisteredImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    this.formats.writeImage_2psbf2$(image, s, props);
  };
  RegisteredImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    return this.formats.decodeHeader_1ooaqm$(s, props);
  };
  RegisteredImageFormats.prototype.toString = function () {
    return 'RegisteredImageFormats(' + this.formats + ')';
  };
  RegisteredImageFormats.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RegisteredImageFormats',
    interfaces: [ImageFormat]
  };
  var RegisteredImageFormats_instance = null;
  function RegisteredImageFormats_getInstance() {
    if (RegisteredImageFormats_instance === null) {
      new RegisteredImageFormats();
    }
    return RegisteredImageFormats_instance;
  }
  function SVG() {
    SVG_instance = this;
    ImageFormat.call(this, ['svg']);
  }
  SVG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var block$result;
      var tmp$_0 = sliceStart(s);
      var b = s.length.toInt();
      var $receiver = readString(tmp$_0, Math_0.min(100, b));
      var tmp$_1;
      var start = trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString().toLowerCase();
      if (startsWith(start, '<svg') || startsWith(start, '<?xml')) {
        var $receiver_0 = toString(readAll(sliceStart(s)), lang.UTF8);
        var tmp$_2;
        var content = trim(Kotlin.isCharSequence(tmp$_2 = $receiver_0) ? tmp$_2 : throwCCE()).toString();
        var svg = SVG_init(content);
        var $receiver_1 = new ImageInfo();
        $receiver_1.width = svg.width;
        $receiver_1.height = svg.height;
        block$result = $receiver_1;
      }
       else {
        block$result = null;
      }
      tmp$ = new Result(block$result);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      }
       else
        throw e;
    }
    var $this = tmp$;
    var getOrNull$result;
    var tmp$_3;
    if ($this.isFailure) {
      getOrNull$result = null;
    }
     else {
      getOrNull$result = (tmp$_3 = $this.value) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
    }
    return getOrNull$result;
  };
  SVG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = toString(readAll(sliceStart(s)), lang.UTF8);
    var tmp$;
    var content = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var svg = SVG_init(content);
    return new ImageData(listOf_0(new ImageFrame(render(svg).toBMP32())));
  };
  SVG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SVG',
    interfaces: [ImageFormat]
  };
  var SVG_instance = null;
  function SVG_getInstance() {
    if (SVG_instance === null) {
      new SVG();
    }
    return SVG_instance;
  }
  function TGA() {
    TGA_instance = this;
    ImageFormat.call(this, ['tga']);
  }
  TGA.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var $receiver = new ImageInfo();
      var h = this.readHeader_39qel5$(s);
      $receiver.width = h.width;
      $receiver.height = h.height;
      $receiver.bitsPerPixel = h.bitsPerPixel;
      tmp$ = new Result($receiver);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      }
       else
        throw e;
    }
    var $this = tmp$;
    var getOrNull$result;
    var tmp$_0;
    if ($this.isFailure) {
      getOrNull$result = null;
    }
     else {
      getOrNull$result = (tmp$_0 = $this.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    }
    return getOrNull$result;
  };
  function TGA$Info(width, height, flipY, bitsPerPixel) {
    this.width = width;
    this.height = height;
    this.flipY = flipY;
    this.bitsPerPixel = bitsPerPixel;
    this.area = Kotlin.imul(this.width, this.height);
    this.bytes = this.bitsPerPixel / 8 | 0;
  }
  TGA$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  TGA.prototype.readHeader_39qel5$ = function (s) {
    var idLength = readU8(s);
    var colorMapType = readU8(s);
    var imageType = readU8(s);
    switch (imageType) {
      case 1:
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported indexed');
      case 2:
        break;
      case 9:
      case 10:
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported RLE');
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Unknown TGA');
    }
    var firstIndexEntry = readU16LE_0(s);
    var colorMapLength = readU16LE_0(s);
    var colorMapEntrySize = readU8(s);
    s.position = s.position.add(Kotlin.Long.fromInt(Kotlin.imul(colorMapLength, colorMapEntrySize)));
    var xorig = readS16LE(s);
    var yorig = readS16LE(s);
    var width = readS16LE(s);
    var height = readS16LE(s);
    var pixelDepth = readU8(s);
    switch (pixelDepth) {
      case 24:
      case 32:
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var imageDescriptor = readU8(s);
    var flipY = (imageDescriptor >>> 5 & 1) === 0;
    var storage = imageDescriptor >>> 6 & 3;
    readBytes(s, idLength);
    return new TGA$Info(width, height, flipY, pixelDepth);
  };
  TGA.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var info = this.readHeader_39qel5$(s);
    switch (info.bitsPerPixel) {
      case 24:
        tmp$ = RGB$Companion_getInstance();
        break;
      case 32:
        tmp$ = RGBA$Companion_getInstance();
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var format = tmp$;
    var out = (new Bitmap32(info.width, info.height)).writeDecoded_77vltg$(format, readBytes(s, Kotlin.imul(info.area, info.bytes)));
    if (info.flipY)
      out.flipY();
    return new ImageData(listOf_0(new ImageFrame(out)));
  };
  TGA.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var bitmap = image.mainBitmap;
    if (Kotlin.isType(bitmap, Bitmap8)) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented encoding TGA Bitmap8');
    }
     else {
      var bmp = bitmap.toBMP32();
      var data = new Int8Array(bmp.area * 4 | 0);
      var m = 0;
      tmp$ = bmp.data.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        data[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = toByte(c.b);
        data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(c.g);
        data[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(c.r);
        data[tmp$_3 = m, m = tmp$_3 + 1 | 0, tmp$_3] = toByte(c.a);
      }
      write8(s, 0);
      write8(s, 0);
      write8(s, 2);
      write16LE_0(s, 0);
      write16LE_0(s, 0);
      write8(s, 0);
      write16LE_0(s, 0);
      write16LE_0(s, 0);
      write16LE_0(s, bmp.width);
      write16LE_0(s, bmp.height);
      write8(s, 32);
      write8(s, 32);
      writeBytes(s, data);
    }
  };
  TGA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TGA',
    interfaces: [ImageFormat]
  };
  var TGA_instance = null;
  function TGA_getInstance() {
    if (TGA_instance === null) {
      new TGA();
    }
    return TGA_instance;
  }
  function clampf1($receiver) {
    return $receiver > 1.0 ? 1.0 : $receiver;
  }
  function clamp0_255($receiver) {
    return clamp($receiver, 0, 255);
  }
  function clamp255($receiver) {
    return $receiver > 255 ? 255 : $receiver;
  }
  var KORIM_VERSION;
  function packIntUnchecked(r, g, b, a) {
    return (r & 255) << 0 | (g & 255) << 8 | (b & 255) << 16 | (a & 255) << 24;
  }
  function packIntClamped(r, g, b, a) {
    return packIntUnchecked(clamp0_255(r), clamp0_255(g), clamp0_255(b), clamp0_255(a));
  }
  function d2i(v) {
    return numberToInt(clamp01(v) * 255);
  }
  function f2i(v) {
    return numberToInt(clamp01(v) * 255);
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Bitmap32Context2d(bmp, antialiasing) {
    Context2d$Renderer.call(this);
    this.bmp = bmp;
    this.antialiasing = antialiasing;
    this.colorFiller = new Bitmap32Context2d$ColorFiller();
    this.gradientFiller = new Bitmap32Context2d$GradientFiller();
    this.bitmapFiller = new Bitmap32Context2d$BitmapFiller(this.antialiasing);
    this.noneFiller = new Bitmap32Context2d$NoneFiller();
  }
  Object.defineProperty(Bitmap32Context2d.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(Bitmap32Context2d.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  function Bitmap32Context2d$render$lambda(it) {
    return it.x;
  }
  Bitmap32Context2d.prototype.render_w64o9o$ = function (state, fill) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var fillStyle = state.fillStyle;
    if (Kotlin.isType(fillStyle, Context2d$None)) {
      var $receiver = this.noneFiller;
      $receiver.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver;
    }
     else if (Kotlin.isType(fillStyle, Context2d$Color)) {
      var $receiver_0 = this.colorFiller;
      $receiver_0.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver_0;
    }
     else if (Kotlin.isType(fillStyle, Context2d$Gradient)) {
      var $receiver_1 = this.gradientFiller;
      $receiver_1.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver_1;
    }
     else if (Kotlin.isType(fillStyle, Context2d$BitmapPaint)) {
      var $receiver_2 = this.bitmapFiller;
      $receiver_2.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver_2;
    }
     else {
      throw new NotImplementedError_init();
    }
    var filler = tmp$;
    var $receiver_3 = this.getApproximatedPoints_jvwkvo$(state.path);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_5;
    tmp$_5 = $receiver_3.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      destination.add_11rb$(transformed(item, state.transform));
    }
    var points = destination;
    var edges = ArrayList_init_0();
    tmp$_0 = points.size;
    for (var n = 0; n < tmp$_0; n++) {
      var a = points.get_za3lpa$(n);
      var b = points.get_za3lpa$((n + 1 | 0) % points.size);
      var edge = a.y < b.y ? new Bitmap32Context2d$Edge(a, b, 1) : new Bitmap32Context2d$Edge(b, a, -1);
      if (edge.isNotCoplanarX) {
        edges.add_11rb$(edge);
      }
    }
    var bounds_0 = bounds(points);
    tmp$_1 = numberToInt(bounds_0.top);
    tmp$_2 = numberToInt(bounds_0.bottom);
    for (var y = tmp$_1; y <= tmp$_2; y++) {
      tmp$_3 = this.bmp.height;
      if (!(0 <= y && y < tmp$_3))
        continue;
      var destination_0 = ArrayList_init_0();
      var tmp$_6;
      tmp$_6 = edges.iterator();
      while (tmp$_6.hasNext()) {
        var element = tmp$_6.next();
        if (element.containsY_za3lpa$(y))
          destination_0.add_11rb$(element);
      }
      var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
      var tmp$_7;
      tmp$_7 = destination_0.iterator();
      while (tmp$_7.hasNext()) {
        var item_0 = tmp$_7.next();
        destination_1.add_11rb$(new Point(numberToDouble(item_0.intersectX_za3lpa$(y)), numberToDouble(y)));
      }
      var $receiver_4 = sortedWith(destination_1, new Comparator$ObjectLiteral_0(compareBy$lambda_0(Bitmap32Context2d$render$lambda)));
      var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_4, 10));
      var tmp$_8;
      tmp$_8 = $receiver_4.iterator();
      while (tmp$_8.hasNext()) {
        var item_1 = tmp$_8.next();
        destination_2.add_11rb$(numberToInt(item_1.x));
      }
      var xx = destination_2;
      tmp$_4 = xx.size - 1 | 0;
      for (var n_0 = 0; n_0 < tmp$_4; n_0++) {
        var a_0 = clamp(xx.get_za3lpa$(n_0 + 0 | 0), 0, this.bmp.width);
        var b_0 = clamp(xx.get_za3lpa$(n_0 + 1 | 0), 0, this.bmp.width);
        if (n_0 % 2 === 0) {
          filler.fill_s5njrs$(this.bmp.data, this.bmp.index_vux9f0$(a_0, y), a_0, y, b_0 - a_0 | 0);
        }
      }
    }
  };
  Bitmap32Context2d.prototype.getApproximatedPoints_jvwkvo$ = function ($receiver) {
    var $receiver_0 = toPathList($receiver);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = toPoints(element);
      addAll(destination, list);
    }
    return destination;
  };
  function Bitmap32Context2d$Edge(a, b, wind) {
    this.a = a;
    this.b = b;
    this.wind = wind;
    this.isCoplanarX = this.a.y === this.b.y;
    this.isCoplanarY = this.a.x === this.b.x;
    this.slope_0 = (this.b.y - this.a.y) / (this.b.x - this.a.x);
    this.h_0 = this.a.y - this.a.x * this.slope_0;
  }
  Object.defineProperty(Bitmap32Context2d$Edge.prototype, 'isNotCoplanarX', {
    get: function () {
      return !this.isCoplanarX;
    }
  });
  Bitmap32Context2d$Edge.prototype.containsY_za3lpa$ = function (y) {
    return y >= this.a.y && y < this.b.y;
  };
  Bitmap32Context2d$Edge.prototype.intersectX_za3lpa$ = function (y) {
    return this.isCoplanarY ? this.a.x : (y - this.h_0) / this.slope_0;
  };
  Bitmap32Context2d$Edge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  Bitmap32Context2d$Edge.prototype.component1 = function () {
    return this.a;
  };
  Bitmap32Context2d$Edge.prototype.component2 = function () {
    return this.b;
  };
  Bitmap32Context2d$Edge.prototype.component3 = function () {
    return this.wind;
  };
  Bitmap32Context2d$Edge.prototype.copy_8vtxve$ = function (a, b, wind) {
    return new Bitmap32Context2d$Edge(a === void 0 ? this.a : a, b === void 0 ? this.b : b, wind === void 0 ? this.wind : wind);
  };
  Bitmap32Context2d$Edge.prototype.toString = function () {
    return 'Edge(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', wind=' + Kotlin.toString(this.wind)) + ')';
  };
  Bitmap32Context2d$Edge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind) | 0;
    return result;
  };
  Bitmap32Context2d$Edge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.wind, other.wind)))));
  };
  function Bitmap32Context2d$Filler() {
    this.fill_43prn$_0 = this.fill_43prn$_0;
    this.state_2s8t03$_0 = this.state_2s8t03$_0;
  }
  Object.defineProperty(Bitmap32Context2d$Filler.prototype, 'fill', {
    get: function () {
      if (this.fill_43prn$_0 == null)
        return throwUPAE('fill');
      return this.fill_43prn$_0;
    },
    set: function (fill) {
      this.fill_43prn$_0 = fill;
    }
  });
  Object.defineProperty(Bitmap32Context2d$Filler.prototype, 'state', {
    get: function () {
      if (this.state_2s8t03$_0 == null)
        return throwUPAE('state');
      return this.state_2s8t03$_0;
    },
    set: function (state) {
      this.state_2s8t03$_0 = state;
    }
  });
  Bitmap32Context2d$Filler.prototype.set_ydr4zb$ = function (paint, state) {
    this.fill = paint;
    this.state = state;
    this.updated();
  };
  Bitmap32Context2d$Filler.prototype.updated = function () {
  };
  Bitmap32Context2d$Filler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Filler',
    interfaces: []
  };
  function Bitmap32Context2d$NoneFiller() {
    Bitmap32Context2d$Filler.call(this);
  }
  Bitmap32Context2d$NoneFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
  };
  Bitmap32Context2d$NoneFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoneFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  function Bitmap32Context2d$ColorFiller() {
    Bitmap32Context2d$Filler.call(this);
  }
  Bitmap32Context2d$ColorFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
    var c = this.fill.color.value;
    for (var n = 0; n < count; n++) {
      data.ints[offset + n | 0] = c;
    }
  };
  Bitmap32Context2d$ColorFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  function Bitmap32Context2d$BitmapFiller(antialiasing) {
    Bitmap32Context2d$Filler.call(this);
    this.antialiasing = antialiasing;
    this.stateTrans_s7hkmw$_0 = this.stateTrans_s7hkmw$_0;
    this.fillTrans_qop94g$_0 = this.fillTrans_qop94g$_0;
  }
  Object.defineProperty(Bitmap32Context2d$BitmapFiller.prototype, 'stateTrans', {
    get: function () {
      if (this.stateTrans_s7hkmw$_0 == null)
        return throwUPAE('stateTrans');
      return this.stateTrans_s7hkmw$_0;
    },
    set: function (stateTrans) {
      this.stateTrans_s7hkmw$_0 = stateTrans;
    }
  });
  Object.defineProperty(Bitmap32Context2d$BitmapFiller.prototype, 'fillTrans', {
    get: function () {
      if (this.fillTrans_qop94g$_0 == null)
        return throwUPAE('fillTrans');
      return this.fillTrans_qop94g$_0;
    },
    set: function (fillTrans) {
      this.fillTrans_qop94g$_0 = fillTrans;
    }
  });
  Bitmap32Context2d$BitmapFiller.prototype.updated = function () {
    this.stateTrans = this.state.transform.inverted_1ktkmn$();
    this.fillTrans = this.fill.transform.inverted_1ktkmn$();
  };
  Bitmap32Context2d$BitmapFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
    for (var n = 0; n < count; n++) {
      var bmpX = transformX(this.fillTrans, numberToDouble(x + n | 0), numberToDouble(y));
      var bmpY = transformY(this.fillTrans, numberToDouble(y + n | 0), numberToDouble(y));
      if (this.antialiasing) {
        data.set_vlvk8p$(offset + n | 0, this.fill.bitmap.getRgbaSampled_lu1900$(bmpX, bmpY));
      }
       else {
        data.set_vlvk8p$(offset + n | 0, this.fill.bitmap.getRgbaClamped_vux9f0$(numberToInt(bmpX), numberToInt(bmpY)));
      }
    }
  };
  Bitmap32Context2d$BitmapFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  function Bitmap32Context2d$GradientFiller() {
    Bitmap32Context2d$Filler.call(this);
    this.NCOLORS = 256;
    this.colors = RgbaArray$Companion_getInstance().invoke_za3lpa$(this.NCOLORS);
    this.stateTrans_fsow7d$_0 = this.stateTrans_fsow7d$_0;
    this.fillTrans_2cq24x$_0 = this.fillTrans_2cq24x$_0;
  }
  Bitmap32Context2d$GradientFiller.prototype.stopN_za3lpa$ = function (n) {
    return numberToInt(this.fill.stops.get_za3lpa$(n) * this.NCOLORS);
  };
  Object.defineProperty(Bitmap32Context2d$GradientFiller.prototype, 'stateTrans', {
    get: function () {
      if (this.stateTrans_fsow7d$_0 == null)
        return throwUPAE('stateTrans');
      return this.stateTrans_fsow7d$_0;
    },
    set: function (stateTrans) {
      this.stateTrans_fsow7d$_0 = stateTrans;
    }
  });
  Object.defineProperty(Bitmap32Context2d$GradientFiller.prototype, 'fillTrans', {
    get: function () {
      if (this.fillTrans_2cq24x$_0 == null)
        return throwUPAE('fillTrans');
      return this.fillTrans_2cq24x$_0;
    },
    set: function (fillTrans) {
      this.fillTrans_2cq24x$_0 = fillTrans;
    }
  });
  Bitmap32Context2d$GradientFiller.prototype.updated = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.stateTrans = this.state.transform.inverted_1ktkmn$();
    this.fillTrans = this.fill.transform.inverted_1ktkmn$();
    tmp$ = this.stopN_za3lpa$(0);
    for (var n = 0; n < tmp$; n++)
      this.colors.set_vlvk8p$(n, new RGBA(first_0(this.fill.colors)));
    tmp$_0 = this.fill.numberOfStops - 1 | 0;
    for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
      var stop0 = this.stopN_za3lpa$(n_0 + 0 | 0);
      var stop1 = this.stopN_za3lpa$(n_0 + 1 | 0);
      var color0 = new RGBA(this.fill.colors.get_za3lpa$(n_0 + 0 | 0));
      var color1 = new RGBA(this.fill.colors.get_za3lpa$(n_0 + 1 | 0));
      for (var s = stop0; s < stop1; s++) {
        var ratio = (s - stop0 | 0) / (stop1 - stop0 | 0);
        this.colors.set_vlvk8p$(s, RGBA$Companion_getInstance().interpolate_utyrs$(color0, color1, ratio));
      }
    }
    tmp$_1 = this.stopN_za3lpa$(this.fill.numberOfStops - 1 | 0);
    tmp$_2 = this.NCOLORS;
    for (var n_1 = tmp$_1; n_1 < tmp$_2; n_1++)
      this.colors.ints[n_1] = last(this.fill.colors);
  };
  Bitmap32Context2d$GradientFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
    var p0 = new Point(this.fill.x0, this.fill.y0);
    var p1 = new Point(this.fill.x1, this.fill.y1);
    var $receiver = new Matrix();
    $receiver.multiply_ek4ri0$($receiver, this.stateTrans);
    $receiver.multiply_ek4ri0$($receiver, this.fillTrans);
    $receiver.translate_lu1900$(-p0.x, -p0.y);
    $receiver.scale_lu1900$(1.0 / clamp_0(distanceTo(p0, p1), 1.0, 16000.0));
    $receiver.rotate_4crm0z$(new Angle(-Angle.Companion.between_v3tj7w$(p0, p1).radians));
    var mat = $receiver;
    for (var n = 0; n < count; n++) {
      var ratio = clamp01_0(transformX(mat, x + n | 0, y));
      data.ints[offset + n | 0] = this.colors.ints[numberToInt(ratio * (this.NCOLORS - 1 | 0))];
    }
  };
  Bitmap32Context2d$GradientFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  Bitmap32Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32Context2d',
    interfaces: [Context2d$Renderer]
  };
  function Context2d(renderer) {
    this.renderer = renderer;
    this.state = new Context2d$State();
    this.stack_jt1krc$_0 = new Stack();
    this.lineScaleMode_uvt0g7$_0 = new RedirectMutableFieldGen_init(Context2d$lineScaleMode$lambda(this));
    this.lineWidth_eizzma$_0 = new RedirectMutableFieldGen_init(Context2d$lineWidth$lambda(this));
    this.lineCap_3v9p9a$_0 = new RedirectMutableFieldGen_init(Context2d$lineCap$lambda(this));
    this.startLineCap_pj88q0$_0 = new RedirectMutableFieldGen_init(Context2d$startLineCap$lambda(this));
    this.endLineCap_ci958x$_0 = new RedirectMutableFieldGen_init(Context2d$endLineCap$lambda(this));
    this.lineJoin_m8yr12$_0 = new RedirectMutableFieldGen_init(Context2d$lineJoin$lambda(this));
    this.strokeStyle_b8jfmh$_0 = new RedirectMutableFieldGen_init(Context2d$strokeStyle$lambda(this));
    this.fillStyle_mocpqm$_0 = new RedirectMutableFieldGen_init(Context2d$fillStyle$lambda(this));
    this.font_hw4l97$_0 = new RedirectMutableFieldGen_init(Context2d$font$lambda(this));
    this.verticalAlign_9mcoep$_0 = new RedirectMutableFieldGen_init(Context2d$verticalAlign$lambda(this));
    this.horizontalAlign_o0d4qn$_0 = new RedirectMutableFieldGen_init(Context2d$horizontalAlign$lambda(this));
    this.globalAlpha_l2yrp7$_0 = new RedirectMutableFieldGen_init(Context2d$globalAlpha$lambda(this));
    this.none = Context2d$None_getInstance();
  }
  Object.defineProperty(Context2d.prototype, 'rendererWidth', {
    get: function () {
      return this.renderer.width;
    }
  });
  Object.defineProperty(Context2d.prototype, 'rendererHeight', {
    get: function () {
      return this.renderer.height;
    }
  });
  Context2d.prototype.rendererRender_w64o9o$ = function (state, fill) {
    this.renderer.render_w64o9o$(state, fill);
  };
  Context2d.prototype.rendererRenderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    this.renderer.renderText_2jdvt1$(state, font, text, x, y, fill);
  };
  Context2d.prototype.rendererDrawImage_dfapkx$$default = function (image, x, y, width, height, transform) {
    this.renderer.drawImage_dfapkx$(image, x, y, width, height, transform);
  };
  Context2d.prototype.rendererDrawImage_dfapkx$ = function (image, x, y, width, height, transform, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (transform === void 0)
      transform = new Matrix();
    callback$default ? callback$default(image, x, y, width, height, transform) : this.rendererDrawImage_dfapkx$$default(image, x, y, width, height, transform);
  };
  Context2d.prototype.rendererDispose = function () {
    this.renderer.dispose();
  };
  Context2d.prototype.rendererBufferingStart = function () {
    return this.renderer.bufferingStart();
  };
  Context2d.prototype.rendererBufferingEnd = function () {
    this.renderer.bufferingEnd();
  };
  Context2d.prototype.rendererGetBounds_qlucl1$ = function (font, text, out) {
    this.renderer.getBounds_qlucl1$(font, text, out);
  };
  Object.defineProperty(Context2d.prototype, 'width', {
    get: function () {
      return this.rendererWidth;
    }
  });
  Object.defineProperty(Context2d.prototype, 'height', {
    get: function () {
      return this.rendererHeight;
    }
  });
  function Context2d$LineCap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$LineCap_initFields() {
    Context2d$LineCap_initFields = function () {
    };
    Context2d$LineCap$BUTT_instance = new Context2d$LineCap('BUTT', 0);
    Context2d$LineCap$ROUND_instance = new Context2d$LineCap('ROUND', 1);
    Context2d$LineCap$SQUARE_instance = new Context2d$LineCap('SQUARE', 2);
  }
  var Context2d$LineCap$BUTT_instance;
  function Context2d$LineCap$BUTT_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$BUTT_instance;
  }
  var Context2d$LineCap$ROUND_instance;
  function Context2d$LineCap$ROUND_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$ROUND_instance;
  }
  var Context2d$LineCap$SQUARE_instance;
  function Context2d$LineCap$SQUARE_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$SQUARE_instance;
  }
  Context2d$LineCap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineCap',
    interfaces: [Enum]
  };
  function Context2d$LineCap$values() {
    return [Context2d$LineCap$BUTT_getInstance(), Context2d$LineCap$ROUND_getInstance(), Context2d$LineCap$SQUARE_getInstance()];
  }
  Context2d$LineCap.values = Context2d$LineCap$values;
  function Context2d$LineCap$valueOf(name) {
    switch (name) {
      case 'BUTT':
        return Context2d$LineCap$BUTT_getInstance();
      case 'ROUND':
        return Context2d$LineCap$ROUND_getInstance();
      case 'SQUARE':
        return Context2d$LineCap$SQUARE_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineCap.' + name);
    }
  }
  Context2d$LineCap.valueOf_61zpoe$ = Context2d$LineCap$valueOf;
  function Context2d$LineJoin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$LineJoin_initFields() {
    Context2d$LineJoin_initFields = function () {
    };
    Context2d$LineJoin$BEVEL_instance = new Context2d$LineJoin('BEVEL', 0);
    Context2d$LineJoin$MITER_instance = new Context2d$LineJoin('MITER', 1);
    Context2d$LineJoin$ROUND_instance = new Context2d$LineJoin('ROUND', 2);
  }
  var Context2d$LineJoin$BEVEL_instance;
  function Context2d$LineJoin$BEVEL_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$BEVEL_instance;
  }
  var Context2d$LineJoin$MITER_instance;
  function Context2d$LineJoin$MITER_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$MITER_instance;
  }
  var Context2d$LineJoin$ROUND_instance;
  function Context2d$LineJoin$ROUND_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$ROUND_instance;
  }
  Context2d$LineJoin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineJoin',
    interfaces: [Enum]
  };
  function Context2d$LineJoin$values() {
    return [Context2d$LineJoin$BEVEL_getInstance(), Context2d$LineJoin$MITER_getInstance(), Context2d$LineJoin$ROUND_getInstance()];
  }
  Context2d$LineJoin.values = Context2d$LineJoin$values;
  function Context2d$LineJoin$valueOf(name) {
    switch (name) {
      case 'BEVEL':
        return Context2d$LineJoin$BEVEL_getInstance();
      case 'MITER':
        return Context2d$LineJoin$MITER_getInstance();
      case 'ROUND':
        return Context2d$LineJoin$ROUND_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineJoin.' + name);
    }
  }
  Context2d$LineJoin.valueOf_61zpoe$ = Context2d$LineJoin$valueOf;
  function Context2d$CycleMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$CycleMethod_initFields() {
    Context2d$CycleMethod_initFields = function () {
    };
    Context2d$CycleMethod$NO_CYCLE_instance = new Context2d$CycleMethod('NO_CYCLE', 0);
    Context2d$CycleMethod$REFLECT_instance = new Context2d$CycleMethod('REFLECT', 1);
    Context2d$CycleMethod$REPEAT_instance = new Context2d$CycleMethod('REPEAT', 2);
  }
  var Context2d$CycleMethod$NO_CYCLE_instance;
  function Context2d$CycleMethod$NO_CYCLE_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$NO_CYCLE_instance;
  }
  var Context2d$CycleMethod$REFLECT_instance;
  function Context2d$CycleMethod$REFLECT_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$REFLECT_instance;
  }
  var Context2d$CycleMethod$REPEAT_instance;
  function Context2d$CycleMethod$REPEAT_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$REPEAT_instance;
  }
  Context2d$CycleMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CycleMethod',
    interfaces: [Enum]
  };
  function Context2d$CycleMethod$values() {
    return [Context2d$CycleMethod$NO_CYCLE_getInstance(), Context2d$CycleMethod$REFLECT_getInstance(), Context2d$CycleMethod$REPEAT_getInstance()];
  }
  Context2d$CycleMethod.values = Context2d$CycleMethod$values;
  function Context2d$CycleMethod$valueOf(name) {
    switch (name) {
      case 'NO_CYCLE':
        return Context2d$CycleMethod$NO_CYCLE_getInstance();
      case 'REFLECT':
        return Context2d$CycleMethod$REFLECT_getInstance();
      case 'REPEAT':
        return Context2d$CycleMethod$REPEAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.CycleMethod.' + name);
    }
  }
  Context2d$CycleMethod.valueOf_61zpoe$ = Context2d$CycleMethod$valueOf;
  function Context2d$ShapeRasterizerMethod(name, ordinal, scale) {
    Enum.call(this);
    this.scale = scale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$ShapeRasterizerMethod_initFields() {
    Context2d$ShapeRasterizerMethod_initFields = function () {
    };
    Context2d$ShapeRasterizerMethod$NONE_instance = new Context2d$ShapeRasterizerMethod('NONE', 0, 0.0);
    Context2d$ShapeRasterizerMethod$X1_instance = new Context2d$ShapeRasterizerMethod('X1', 1, 1.0);
    Context2d$ShapeRasterizerMethod$X2_instance = new Context2d$ShapeRasterizerMethod('X2', 2, 2.0);
    Context2d$ShapeRasterizerMethod$X4_instance = new Context2d$ShapeRasterizerMethod('X4', 3, 4.0);
  }
  var Context2d$ShapeRasterizerMethod$NONE_instance;
  function Context2d$ShapeRasterizerMethod$NONE_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$NONE_instance;
  }
  var Context2d$ShapeRasterizerMethod$X1_instance;
  function Context2d$ShapeRasterizerMethod$X1_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X1_instance;
  }
  var Context2d$ShapeRasterizerMethod$X2_instance;
  function Context2d$ShapeRasterizerMethod$X2_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X2_instance;
  }
  var Context2d$ShapeRasterizerMethod$X4_instance;
  function Context2d$ShapeRasterizerMethod$X4_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X4_instance;
  }
  Context2d$ShapeRasterizerMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeRasterizerMethod',
    interfaces: [Enum]
  };
  function Context2d$ShapeRasterizerMethod$values() {
    return [Context2d$ShapeRasterizerMethod$NONE_getInstance(), Context2d$ShapeRasterizerMethod$X1_getInstance(), Context2d$ShapeRasterizerMethod$X2_getInstance(), Context2d$ShapeRasterizerMethod$X4_getInstance()];
  }
  Context2d$ShapeRasterizerMethod.values = Context2d$ShapeRasterizerMethod$values;
  function Context2d$ShapeRasterizerMethod$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Context2d$ShapeRasterizerMethod$NONE_getInstance();
      case 'X1':
        return Context2d$ShapeRasterizerMethod$X1_getInstance();
      case 'X2':
        return Context2d$ShapeRasterizerMethod$X2_getInstance();
      case 'X4':
        return Context2d$ShapeRasterizerMethod$X4_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.ShapeRasterizerMethod.' + name);
    }
  }
  Context2d$ShapeRasterizerMethod.valueOf_61zpoe$ = Context2d$ShapeRasterizerMethod$valueOf;
  Context2d.prototype.dispose = function () {
    this.rendererDispose();
  };
  Context2d.prototype.withScaledRenderer_lu1900$ = function (scaleX, scaleY) {
    if (scaleY === void 0)
      scaleY = scaleX;
    return scaleX === 1.0 && scaleY === 1.0 ? this : new Context2d(new Context2d$ScaledRenderer(this.renderer, scaleX, scaleY));
  };
  function Context2d$ScaledRenderer(parent, scaleX, scaleY) {
    Context2d$Renderer.call(this);
    this.parent = parent;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  Object.defineProperty(Context2d$ScaledRenderer.prototype, 'width', {
    get: function () {
      return numberToInt(this.parent.width / this.scaleX);
    }
  });
  Object.defineProperty(Context2d$ScaledRenderer.prototype, 'height', {
    get: function () {
      return numberToInt(this.parent.height / this.scaleY);
    }
  });
  Context2d$ScaledRenderer.prototype.adjustMatrix_0 = function (transform, callback) {
    var keep_vbqeof$result;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      keep_vbqeof$result = callback();
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
    return keep_vbqeof$result;
  };
  Context2d$ScaledRenderer.prototype.adjustState_0 = function (state, callback) {
    var transform = state.transform;
    var keep_vbqeof$result;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      keep_vbqeof$result = callback();
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
    return keep_vbqeof$result;
  };
  Context2d$ScaledRenderer.prototype.render_w64o9o$ = function (state, fill) {
    var transform = state.transform;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.render_w64o9o$(state, fill);
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    var transform = state.transform;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.renderText_2jdvt1$(state, font, text, x, y, fill);
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    this.parent.getBounds_qlucl1$(font, text, out);
  };
  Context2d$ScaledRenderer.prototype.drawImage_dfapkx$$default = function (image, x, y, width, height, transform) {
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.drawImage_dfapkx$(image, x, y, width, height, transform);
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaledRenderer',
    interfaces: [Context2d$Renderer]
  };
  Context2d.prototype.buffering_klfg04$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.buffering_klfg04$', function (callback) {
    this.rendererBufferingStart();
    try {
      return callback();
    }
    finally {
      this.rendererBufferingEnd();
    }
  });
  function Context2d$BufferedRenderer() {
    Context2d$Renderer.call(this);
    this.commands = ArrayList_init_0();
  }
  function Context2d$BufferedRenderer$RenderCommand(state, fill, font, text, x, y) {
    if (font === void 0)
      font = null;
    if (text === void 0)
      text = null;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.state = state;
    this.fill = fill;
    this.font = font;
    this.text = text;
    this.x = x;
    this.y = y;
  }
  Context2d$BufferedRenderer$RenderCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderCommand',
    interfaces: []
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.component1 = function () {
    return this.state;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.component2 = function () {
    return this.fill;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.component3 = function () {
    return this.font;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.component4 = function () {
    return this.text;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.component5 = function () {
    return this.x;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.component6 = function () {
    return this.y;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.copy_9modw7$ = function (state, fill, font, text, x, y) {
    return new Context2d$BufferedRenderer$RenderCommand(state === void 0 ? this.state : state, fill === void 0 ? this.fill : fill, font === void 0 ? this.font : font, text === void 0 ? this.text : text, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.toString = function () {
    return 'RenderCommand(state=' + Kotlin.toString(this.state) + (', fill=' + Kotlin.toString(this.fill)) + (', font=' + Kotlin.toString(this.font)) + (', text=' + Kotlin.toString(this.text)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Context2d$BufferedRenderer$RenderCommand.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.fill, other.fill) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  Context2d$BufferedRenderer.prototype.render_w64o9o$ = function (state, fill) {
    var $receiver = this.commands;
    var element = new Context2d$BufferedRenderer$RenderCommand(state.clone(), fill);
    $receiver.add_11rb$(element);
    if (!this.isBuffering())
      this.flush();
  };
  Context2d$BufferedRenderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    var $receiver = this.commands;
    var element = new Context2d$BufferedRenderer$RenderCommand(state.clone(), fill, font, text, x, y);
    $receiver.add_11rb$(element);
    if (!this.isBuffering())
      this.flush();
  };
  Context2d$BufferedRenderer.prototype.flush = function () {
    this.flushCommands();
  };
  Context2d$BufferedRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferedRenderer',
    interfaces: [Context2d$Renderer]
  };
  function Context2d$Renderer() {
    Context2d$Renderer$Companion_getInstance();
    this.bufferingLevel_kgo61f$_0 = 0;
  }
  function Context2d$Renderer$Companion() {
    Context2d$Renderer$Companion_instance = this;
    this.DUMMY = new Context2d$Renderer$Companion$DUMMY$ObjectLiteral();
  }
  function Context2d$Renderer$Companion$DUMMY$ObjectLiteral() {
    Context2d$Renderer.call(this);
    this.width_uh5bgs$_0 = 128;
    this.height_cguacb$_0 = 128;
  }
  Object.defineProperty(Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_uh5bgs$_0;
    }
  });
  Object.defineProperty(Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_cguacb$_0;
    }
  });
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$Renderer]
  };
  Context2d$Renderer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Context2d$Renderer$Companion_instance = null;
  function Context2d$Renderer$Companion_getInstance() {
    if (Context2d$Renderer$Companion_instance === null) {
      new Context2d$Renderer$Companion();
    }
    return Context2d$Renderer$Companion_instance;
  }
  Context2d$Renderer.prototype.buffering_klfg04$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.Renderer.buffering_klfg04$', function (callback) {
    this.bufferingStart();
    try {
      return callback();
    }
    finally {
      this.bufferingEnd();
    }
  });
  Context2d$Renderer.prototype.isBuffering = function () {
    return this.bufferingLevel_kgo61f$_0 > 0;
  };
  Context2d$Renderer.prototype.flush = function () {
  };
  Context2d$Renderer.prototype.bufferingStart = function () {
    var tmp$;
    return tmp$ = this.bufferingLevel_kgo61f$_0, this.bufferingLevel_kgo61f$_0 = tmp$ + 1 | 0, tmp$;
  };
  Context2d$Renderer.prototype.bufferingEnd = function () {
    this.bufferingLevel_kgo61f$_0 = this.bufferingLevel_kgo61f$_0 - 1 | 0;
    if (this.bufferingLevel_kgo61f$_0 === 0) {
      this.flush();
    }
  };
  Context2d$Renderer.prototype.render_w64o9o$ = function (state, fill) {
  };
  Context2d$Renderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
  };
  Context2d$Renderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    out.bounds.setTo_6y0v78$(0.0, 0.0, 0.0, 0.0);
  };
  Context2d$Renderer.prototype.drawImage_dfapkx$$default = function (image, x, y, width, height, transform) {
    var tmp$ = void 0;
    var $receiver = new GraphicsPath();
    rect($receiver, x, y, width, height);
    this.render_w64o9o$(new Context2d$State(transform, tmp$, $receiver, void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Context2d$BitmapPaint(image, (new Matrix()).scale_lu1900$(width / image.width, height / image.height).translate_lu1900$(numberToDouble(x), numberToDouble(y)))), true);
  };
  Context2d$Renderer.prototype.drawImage_dfapkx$ = function (image, x, y, width, height, transform, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (transform === void 0)
      transform = new Matrix();
    callback$default ? callback$default(image, x, y, width, height, transform) : this.drawImage_dfapkx$$default(image, x, y, width, height, transform);
  };
  Context2d$Renderer.prototype.dispose = function () {
    this.flush();
  };
  Context2d$Renderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Renderer',
    interfaces: []
  };
  function Context2d$VerticalAlign(name, ordinal, ratio) {
    Enum.call(this);
    this.ratio = ratio;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$VerticalAlign_initFields() {
    Context2d$VerticalAlign_initFields = function () {
    };
    Context2d$VerticalAlign$TOP_instance = new Context2d$VerticalAlign('TOP', 0, 0.0);
    Context2d$VerticalAlign$MIDDLE_instance = new Context2d$VerticalAlign('MIDDLE', 1, 0.5);
    Context2d$VerticalAlign$BASELINE_instance = new Context2d$VerticalAlign('BASELINE', 2, 1.0);
    Context2d$VerticalAlign$BOTTOM_instance = new Context2d$VerticalAlign('BOTTOM', 3, 1.0);
  }
  var Context2d$VerticalAlign$TOP_instance;
  function Context2d$VerticalAlign$TOP_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$TOP_instance;
  }
  var Context2d$VerticalAlign$MIDDLE_instance;
  function Context2d$VerticalAlign$MIDDLE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$MIDDLE_instance;
  }
  var Context2d$VerticalAlign$BASELINE_instance;
  function Context2d$VerticalAlign$BASELINE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$BASELINE_instance;
  }
  var Context2d$VerticalAlign$BOTTOM_instance;
  function Context2d$VerticalAlign$BOTTOM_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$BOTTOM_instance;
  }
  Context2d$VerticalAlign.prototype.getOffsetY_lu1900$ = function (height, baseline) {
    if (equals(this, Context2d$VerticalAlign$BASELINE_getInstance()))
      return baseline;
    else
      return -height * this.ratio;
  };
  Context2d$VerticalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalAlign',
    interfaces: [Enum]
  };
  function Context2d$VerticalAlign$values() {
    return [Context2d$VerticalAlign$TOP_getInstance(), Context2d$VerticalAlign$MIDDLE_getInstance(), Context2d$VerticalAlign$BASELINE_getInstance(), Context2d$VerticalAlign$BOTTOM_getInstance()];
  }
  Context2d$VerticalAlign.values = Context2d$VerticalAlign$values;
  function Context2d$VerticalAlign$valueOf(name) {
    switch (name) {
      case 'TOP':
        return Context2d$VerticalAlign$TOP_getInstance();
      case 'MIDDLE':
        return Context2d$VerticalAlign$MIDDLE_getInstance();
      case 'BASELINE':
        return Context2d$VerticalAlign$BASELINE_getInstance();
      case 'BOTTOM':
        return Context2d$VerticalAlign$BOTTOM_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.VerticalAlign.' + name);
    }
  }
  Context2d$VerticalAlign.valueOf_61zpoe$ = Context2d$VerticalAlign$valueOf;
  function Context2d$HorizontalAlign(name, ordinal, ratio) {
    Enum.call(this);
    this.ratio = ratio;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$HorizontalAlign_initFields() {
    Context2d$HorizontalAlign_initFields = function () {
    };
    Context2d$HorizontalAlign$LEFT_instance = new Context2d$HorizontalAlign('LEFT', 0, 0.0);
    Context2d$HorizontalAlign$CENTER_instance = new Context2d$HorizontalAlign('CENTER', 1, 0.5);
    Context2d$HorizontalAlign$RIGHT_instance = new Context2d$HorizontalAlign('RIGHT', 2, 1.0);
  }
  var Context2d$HorizontalAlign$LEFT_instance;
  function Context2d$HorizontalAlign$LEFT_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$LEFT_instance;
  }
  var Context2d$HorizontalAlign$CENTER_instance;
  function Context2d$HorizontalAlign$CENTER_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$CENTER_instance;
  }
  var Context2d$HorizontalAlign$RIGHT_instance;
  function Context2d$HorizontalAlign$RIGHT_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$RIGHT_instance;
  }
  Context2d$HorizontalAlign.prototype.getOffsetX_14dthe$ = function (width) {
    return width * this.ratio;
  };
  Context2d$HorizontalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorizontalAlign',
    interfaces: [Enum]
  };
  function Context2d$HorizontalAlign$values() {
    return [Context2d$HorizontalAlign$LEFT_getInstance(), Context2d$HorizontalAlign$CENTER_getInstance(), Context2d$HorizontalAlign$RIGHT_getInstance()];
  }
  Context2d$HorizontalAlign.values = Context2d$HorizontalAlign$values;
  function Context2d$HorizontalAlign$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return Context2d$HorizontalAlign$LEFT_getInstance();
      case 'CENTER':
        return Context2d$HorizontalAlign$CENTER_getInstance();
      case 'RIGHT':
        return Context2d$HorizontalAlign$RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.HorizontalAlign.' + name);
    }
  }
  Context2d$HorizontalAlign.valueOf_61zpoe$ = Context2d$HorizontalAlign$valueOf;
  function Context2d$ScaleMode(name, ordinal, hScale, vScale) {
    Enum.call(this);
    this.hScale = hScale;
    this.vScale = vScale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$ScaleMode_initFields() {
    Context2d$ScaleMode_initFields = function () {
    };
    Context2d$ScaleMode$NONE_instance = new Context2d$ScaleMode('NONE', 0, false, false);
    Context2d$ScaleMode$HORIZONTAL_instance = new Context2d$ScaleMode('HORIZONTAL', 1, true, false);
    Context2d$ScaleMode$VERTICAL_instance = new Context2d$ScaleMode('VERTICAL', 2, false, true);
    Context2d$ScaleMode$NORMAL_instance = new Context2d$ScaleMode('NORMAL', 3, true, true);
  }
  var Context2d$ScaleMode$NONE_instance;
  function Context2d$ScaleMode$NONE_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$NONE_instance;
  }
  var Context2d$ScaleMode$HORIZONTAL_instance;
  function Context2d$ScaleMode$HORIZONTAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$HORIZONTAL_instance;
  }
  var Context2d$ScaleMode$VERTICAL_instance;
  function Context2d$ScaleMode$VERTICAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$VERTICAL_instance;
  }
  var Context2d$ScaleMode$NORMAL_instance;
  function Context2d$ScaleMode$NORMAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$NORMAL_instance;
  }
  Context2d$ScaleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleMode',
    interfaces: [Enum]
  };
  function Context2d$ScaleMode$values() {
    return [Context2d$ScaleMode$NONE_getInstance(), Context2d$ScaleMode$HORIZONTAL_getInstance(), Context2d$ScaleMode$VERTICAL_getInstance(), Context2d$ScaleMode$NORMAL_getInstance()];
  }
  Context2d$ScaleMode.values = Context2d$ScaleMode$values;
  function Context2d$ScaleMode$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Context2d$ScaleMode$NONE_getInstance();
      case 'HORIZONTAL':
        return Context2d$ScaleMode$HORIZONTAL_getInstance();
      case 'VERTICAL':
        return Context2d$ScaleMode$VERTICAL_getInstance();
      case 'NORMAL':
        return Context2d$ScaleMode$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.ScaleMode.' + name);
    }
  }
  Context2d$ScaleMode.valueOf_61zpoe$ = Context2d$ScaleMode$valueOf;
  function Context2d$State(transform, clip, path, lineScaleMode, lineWidth, startLineCap, endLineCap, lineJoin, miterLimit, strokeStyle, fillStyle, font, verticalAlign, horizontalAlign, globalAlpha) {
    if (transform === void 0)
      transform = new Matrix();
    if (clip === void 0)
      clip = null;
    if (path === void 0)
      path = new GraphicsPath();
    if (lineScaleMode === void 0)
      lineScaleMode = Context2d$ScaleMode$NORMAL_getInstance();
    if (lineWidth === void 0)
      lineWidth = 1.0;
    if (startLineCap === void 0)
      startLineCap = Context2d$LineCap$BUTT_getInstance();
    if (endLineCap === void 0)
      endLineCap = Context2d$LineCap$BUTT_getInstance();
    if (lineJoin === void 0)
      lineJoin = Context2d$LineJoin$MITER_getInstance();
    if (miterLimit === void 0)
      miterLimit = 4.0;
    if (strokeStyle === void 0)
      strokeStyle = new Context2d$Color(Colors_getInstance().BLACK);
    if (fillStyle === void 0)
      fillStyle = new Context2d$Color(Colors_getInstance().BLACK);
    if (font === void 0)
      font = new Context2d$Font('sans-serif', 10.0);
    if (verticalAlign === void 0)
      verticalAlign = Context2d$VerticalAlign$BASELINE_getInstance();
    if (horizontalAlign === void 0)
      horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    if (globalAlpha === void 0)
      globalAlpha = 1.0;
    this.transform = transform;
    this.clip = clip;
    this.path = path;
    this.lineScaleMode = lineScaleMode;
    this.lineWidth = lineWidth;
    this.startLineCap = startLineCap;
    this.endLineCap = endLineCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.font = font;
    this.verticalAlign = verticalAlign;
    this.horizontalAlign = horizontalAlign;
    this.globalAlpha = globalAlpha;
  }
  Object.defineProperty(Context2d$State.prototype, 'lineCap', {
    get: function () {
      return this.startLineCap;
    },
    set: function (value) {
      this.startLineCap = value;
      this.endLineCap = value;
    }
  });
  Context2d$State.prototype.clone = function () {
    var tmp$;
    return this.copy_are1r0$(this.transform.clone(), (tmp$ = this.clip) != null ? tmp$.clone() : null, this.path.clone());
  };
  Context2d$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  Context2d$State.prototype.component1 = function () {
    return this.transform;
  };
  Context2d$State.prototype.component2 = function () {
    return this.clip;
  };
  Context2d$State.prototype.component3 = function () {
    return this.path;
  };
  Context2d$State.prototype.component4 = function () {
    return this.lineScaleMode;
  };
  Context2d$State.prototype.component5 = function () {
    return this.lineWidth;
  };
  Context2d$State.prototype.component6 = function () {
    return this.startLineCap;
  };
  Context2d$State.prototype.component7 = function () {
    return this.endLineCap;
  };
  Context2d$State.prototype.component8 = function () {
    return this.lineJoin;
  };
  Context2d$State.prototype.component9 = function () {
    return this.miterLimit;
  };
  Context2d$State.prototype.component10 = function () {
    return this.strokeStyle;
  };
  Context2d$State.prototype.component11 = function () {
    return this.fillStyle;
  };
  Context2d$State.prototype.component12 = function () {
    return this.font;
  };
  Context2d$State.prototype.component13 = function () {
    return this.verticalAlign;
  };
  Context2d$State.prototype.component14 = function () {
    return this.horizontalAlign;
  };
  Context2d$State.prototype.component15 = function () {
    return this.globalAlpha;
  };
  Context2d$State.prototype.copy_are1r0$ = function (transform, clip, path, lineScaleMode, lineWidth, startLineCap, endLineCap, lineJoin, miterLimit, strokeStyle, fillStyle, font, verticalAlign, horizontalAlign, globalAlpha) {
    return new Context2d$State(transform === void 0 ? this.transform : transform, clip === void 0 ? this.clip : clip, path === void 0 ? this.path : path, lineScaleMode === void 0 ? this.lineScaleMode : lineScaleMode, lineWidth === void 0 ? this.lineWidth : lineWidth, startLineCap === void 0 ? this.startLineCap : startLineCap, endLineCap === void 0 ? this.endLineCap : endLineCap, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit, strokeStyle === void 0 ? this.strokeStyle : strokeStyle, fillStyle === void 0 ? this.fillStyle : fillStyle, font === void 0 ? this.font : font, verticalAlign === void 0 ? this.verticalAlign : verticalAlign, horizontalAlign === void 0 ? this.horizontalAlign : horizontalAlign, globalAlpha === void 0 ? this.globalAlpha : globalAlpha);
  };
  Context2d$State.prototype.toString = function () {
    return 'State(transform=' + Kotlin.toString(this.transform) + (', clip=' + Kotlin.toString(this.clip)) + (', path=' + Kotlin.toString(this.path)) + (', lineScaleMode=' + Kotlin.toString(this.lineScaleMode)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + (', startLineCap=' + Kotlin.toString(this.startLineCap)) + (', endLineCap=' + Kotlin.toString(this.endLineCap)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + (', strokeStyle=' + Kotlin.toString(this.strokeStyle)) + (', fillStyle=' + Kotlin.toString(this.fillStyle)) + (', font=' + Kotlin.toString(this.font)) + (', verticalAlign=' + Kotlin.toString(this.verticalAlign)) + (', horizontalAlign=' + Kotlin.toString(this.horizontalAlign)) + (', globalAlpha=' + Kotlin.toString(this.globalAlpha)) + ')';
  };
  Context2d$State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineScaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.startLineCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.endLineCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    result = result * 31 + Kotlin.hashCode(this.strokeStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.verticalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.horizontalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.globalAlpha) | 0;
    return result;
  };
  Context2d$State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.lineScaleMode, other.lineScaleMode) && Kotlin.equals(this.lineWidth, other.lineWidth) && Kotlin.equals(this.startLineCap, other.startLineCap) && Kotlin.equals(this.endLineCap, other.endLineCap) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit) && Kotlin.equals(this.strokeStyle, other.strokeStyle) && Kotlin.equals(this.fillStyle, other.fillStyle) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.verticalAlign, other.verticalAlign) && Kotlin.equals(this.horizontalAlign, other.horizontalAlign) && Kotlin.equals(this.globalAlpha, other.globalAlpha)))));
  };
  Object.defineProperty(Context2d.prototype, 'lineScaleMode', {
    get: function () {
      return this.lineScaleMode_uvt0g7$_0.redirect().get();
    },
    set: function (lineScaleMode) {
      this.lineScaleMode_uvt0g7$_0.redirect().set(lineScaleMode);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineWidth', {
    get: function () {
      return this.lineWidth_eizzma$_0.redirect().get();
    },
    set: function (lineWidth) {
      this.lineWidth_eizzma$_0.redirect().set(lineWidth);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineCap', {
    get: function () {
      return this.lineCap_3v9p9a$_0.redirect().get();
    },
    set: function (lineCap) {
      this.lineCap_3v9p9a$_0.redirect().set(lineCap);
    }
  });
  Object.defineProperty(Context2d.prototype, 'startLineCap', {
    get: function () {
      return this.startLineCap_pj88q0$_0.redirect().get();
    },
    set: function (startLineCap) {
      this.startLineCap_pj88q0$_0.redirect().set(startLineCap);
    }
  });
  Object.defineProperty(Context2d.prototype, 'endLineCap', {
    get: function () {
      return this.endLineCap_ci958x$_0.redirect().get();
    },
    set: function (endLineCap) {
      this.endLineCap_ci958x$_0.redirect().set(endLineCap);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineJoin', {
    get: function () {
      return this.lineJoin_m8yr12$_0.redirect().get();
    },
    set: function (lineJoin) {
      this.lineJoin_m8yr12$_0.redirect().set(lineJoin);
    }
  });
  Object.defineProperty(Context2d.prototype, 'strokeStyle', {
    get: function () {
      return this.strokeStyle_b8jfmh$_0.redirect().get();
    },
    set: function (strokeStyle) {
      this.strokeStyle_b8jfmh$_0.redirect().set(strokeStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'fillStyle', {
    get: function () {
      return this.fillStyle_mocpqm$_0.redirect().get();
    },
    set: function (fillStyle) {
      this.fillStyle_mocpqm$_0.redirect().set(fillStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'font', {
    get: function () {
      return this.font_hw4l97$_0.redirect().get();
    },
    set: function (font) {
      this.font_hw4l97$_0.redirect().set(font);
    }
  });
  Object.defineProperty(Context2d.prototype, 'verticalAlign', {
    get: function () {
      return this.verticalAlign_9mcoep$_0.redirect().get();
    },
    set: function (verticalAlign) {
      this.verticalAlign_9mcoep$_0.redirect().set(verticalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'horizontalAlign', {
    get: function () {
      return this.horizontalAlign_o0d4qn$_0.redirect().get();
    },
    set: function (horizontalAlign) {
      this.horizontalAlign_o0d4qn$_0.redirect().set(horizontalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'globalAlpha', {
    get: function () {
      return this.globalAlpha_l2yrp7$_0.redirect().get();
    },
    set: function (globalAlpha) {
      this.globalAlpha_l2yrp7$_0.redirect().set(globalAlpha);
    }
  });
  Context2d.prototype.fillStyle_mb1y7v$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillStyle_mb1y7v$', function (paint, callback) {
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      callback();
    }
    finally {
      this.fillStyle = oldStyle;
    }
  });
  Context2d.prototype.strokeStyle_mb1y7v$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.strokeStyle_mb1y7v$', function (paint, callback) {
    var oldStyle = this.strokeStyle;
    this.strokeStyle = paint;
    try {
      callback();
    }
    finally {
      this.strokeStyle = oldStyle;
    }
  });
  Context2d.prototype.font_yrt615$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.font_yrt615$', function (font, halign, valign, callback) {
    if (halign === void 0)
      halign = null;
    if (valign === void 0)
      valign = null;
    var oldFont = this.font;
    var oldHalign = this.horizontalAlign;
    var oldValign = this.verticalAlign;
    try {
      if (font != null)
        this.font = font;
      if (halign != null)
        this.horizontalAlign = halign;
      if (valign != null)
        this.verticalAlign = valign;
      callback();
    }
    finally {
      this.font = oldFont;
      this.horizontalAlign = oldHalign;
      this.verticalAlign = oldValign;
    }
  });
  Context2d.prototype.fillStyle_2rievy$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillStyle_2rievy$', function (color, callback) {
    var paint = this.createColor_md34sx$(color);
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      callback();
    }
    finally {
      this.fillStyle = oldStyle;
    }
  });
  Context2d.prototype.keepApply_hqcxwp$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.keepApply_hqcxwp$', function (callback) {
    this.save();
    try {
      callback(this);
    }
    finally {
      this.restore();
    }
    return this;
  });
  Context2d.prototype.keep_o14v8n$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.keep_o14v8n$', function (callback) {
    this.save();
    try {
      callback();
    }
    finally {
      this.restore();
    }
  });
  Context2d.prototype.keepTransform_o14v8n$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.keepTransform_o14v8n$', function (callback) {
    var t = this.state.transform;
    var a = t.a;
    var b = t.b;
    var c = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      callback();
    }
    finally {
      t.setTo_15yvbs$(a, b, c, d, tx, ty);
    }
  });
  Context2d.prototype.save = function () {
    return this.stack_jt1krc$_0.push_11rb$(this.state.clone());
  };
  Context2d.prototype.restore = function () {
    this.state = this.stack_jt1krc$_0.pop();
  };
  Context2d.prototype.scale_z8e4lc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.scale_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (sx, sy) {
      if (sy === void 0)
        sy = sx;
      return this.scale_lu1900$(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Context2d.prototype.translate_z8e4lc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.translate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (tx, ty) {
      return this.translate_lu1900$(numberToDouble(tx), numberToDouble(ty));
    };
  }));
  Context2d.prototype.rotate_3p81yu$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.rotate_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.rotate_14dthe$(numberToDouble(angle));
    };
  }));
  Context2d.prototype.rotateDeg_3p81yu$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.rotateDeg_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (degs) {
      return this.rotateDeg_14dthe$(numberToDouble(degs));
    };
  }));
  Context2d.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.state.transform.prescale_lu1900$(sx, sy);
  };
  Context2d.prototype.rotate_14dthe$ = function (angle) {
    return this.state.transform.prerotate_4crm0z$(new Angle(numberToDouble(angle)));
  };
  Context2d.prototype.rotateDeg_14dthe$ = function (degs) {
    return this.state.transform.prerotate_4crm0z$(new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(degs))));
  };
  Context2d.prototype.translate_lu1900$ = function (tx, ty) {
    return this.state.transform.pretranslate_lu1900$(tx, ty);
  };
  Context2d.prototype.transform_1ktkmn$ = function (m) {
    return this.state.transform.premultiply_onv4sa$(m);
  };
  Context2d.prototype.transform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.premultiply_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.setTransform_1ktkmn$ = function (m) {
    return this.state.transform.copyFrom_onv4sa$(m);
  };
  Context2d.prototype.setTransform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.setTo_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.shear_lu1900$ = function (sx, sy) {
    return this.transform_15yvbs$(1.0, sy, sx, 1.0, 0.0, 0.0);
  };
  Object.defineProperty(Context2d.prototype, 'lastX', {
    get: function () {
      return this.state.path.lastX;
    }
  });
  Object.defineProperty(Context2d.prototype, 'lastY', {
    get: function () {
      return this.state.path.lastY;
    }
  });
  Object.defineProperty(Context2d.prototype, 'totalPoints', {
    get: function () {
      return this.state.path.totalPoints;
    }
  });
  Context2d.prototype.close = function () {
    this.state.path.close();
  };
  Context2d.prototype.moveTo_lu1900$ = function (x, y) {
    this.state.path.moveTo_lu1900$(x, y);
  };
  Context2d.prototype.lineTo_lu1900$ = function (x, y) {
    this.state.path.lineTo_lu1900$(x, y);
  };
  Context2d.prototype.cubicTo_15yvbs$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.state.path.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay);
  };
  Context2d.prototype.quadTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.quadTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.strokeRect_1ugm5o$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.strokeRect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.strokeRect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.fillRect_1ugm5o$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillRect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.fillRect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.fillRoundRect_9wz194$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillRoundRect_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var roundRect = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.roundRect_eslsqu$;
    return function (x, y, width, height, rx, ry) {
      if (ry === void 0)
        ry = rx;
      this.beginPath();
      roundRect(this, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height), numberToDouble(rx), numberToDouble(ry));
      this.fill();
    };
  }));
  Context2d.prototype.strokeDot_lu1900$ = function (x, y) {
    this.beginPath();
    this.moveTo_lu1900$(x, y);
    this.lineTo_lu1900$(x, y);
    this.stroke();
  };
  Context2d.prototype.path_lcui0n$ = function (path) {
    this.state.path.write_d3txdv$(path);
  };
  Context2d.prototype.draw_ywv3s4$ = function (d) {
    d.draw_vuz2tk$(this);
  };
  Context2d.prototype.strokeRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    rect(this, x, y, width, height);
    this.stroke();
  };
  Context2d.prototype.fillRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    rect(this, x, y, width, height);
    this.fill();
  };
  Context2d.prototype.beginPath = function () {
    this.state.path = new GraphicsPath();
  };
  Context2d.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0) {
      out = new Rectangle(0.0, 0.0, 0.0, 0.0);
    }
    return this.state.path.getBounds_iqjpvb$(out);
  };
  Context2d.prototype.stroke = function () {
    if (!equals(this.state.strokeStyle, Context2d$None_getInstance()))
      this.rendererRender_w64o9o$(this.state, false);
  };
  Context2d.prototype.fill = function () {
    if (!equals(this.state.fillStyle, Context2d$None_getInstance()))
      this.rendererRender_w64o9o$(this.state, true);
  };
  Context2d.prototype.fill_i8h3xk$ = function (paint) {
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      this.fill();
    }
    finally {
      this.fillStyle = oldStyle;
    }
  };
  Context2d.prototype.stroke_i8h3xk$ = function (paint) {
    var oldStyle = this.strokeStyle;
    this.strokeStyle = paint;
    try {
      this.stroke();
    }
    finally {
      this.strokeStyle = oldStyle;
    }
  };
  Context2d.prototype.fill_2rievy$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fill_2rievy$', wrapFunction(function () {
    var Context2d$Context2d$Color_init = _.com.soywiz.korim.vector.Context2d.Color;
    return function (color, block) {
      block();
      this.fill_i8h3xk$(new Context2d$Context2d$Color_init(color));
    };
  }));
  Context2d.prototype.fill_mb1y7v$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fill_mb1y7v$', function (paint, block) {
    block();
    this.fill_i8h3xk$(paint);
  });
  Context2d.prototype.stroke_mb1y7v$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.stroke_mb1y7v$', function (paint, callback) {
    callback();
    this.stroke_i8h3xk$(paint);
  });
  Context2d.prototype.stroke_2rievy$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.stroke_2rievy$', wrapFunction(function () {
    var Context2d$Context2d$Color_init = _.com.soywiz.korim.vector.Context2d.Color;
    return function (color, callback) {
      callback();
      this.stroke_i8h3xk$(new Context2d$Context2d$Color_init(color));
    };
  }));
  Context2d.prototype.fillStroke_4sof8x$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillStroke_4sof8x$', function (fill, stroke, callback) {
    callback();
    this.fill_i8h3xk$(fill);
    this.stroke_i8h3xk$(stroke);
  });
  Context2d.prototype.fillStroke = function () {
    this.fill();
    this.stroke();
  };
  Context2d.prototype.clip = function () {
    this.state.clip = this.state.path;
  };
  Context2d.prototype.drawShape_gwrl1p$ = function (shape, rasterizerMethod) {
    if (rasterizerMethod === void 0)
      rasterizerMethod = Context2d$ShapeRasterizerMethod$X4_getInstance();
    var tmp$;
    switch (rasterizerMethod.name) {
      case 'NONE':
        shape.draw_vuz2tk$(this);
        break;
      case 'X1':
      case 'X2':
      case 'X4':
        var scale = rasterizerMethod.scale;
        var x = this.rendererWidth * scale;
        var tmp$_0 = numberToInt(Math_0.ceil(x));
        var x_0 = this.rendererHeight * scale;
        var newBi = NativeImage_0(tmp$_0, numberToInt(Math_0.ceil(x_0)));
        var bi = newBi.getContext2d_6taknv$(false);
        bi.scale_lu1900$(scale, scale);
        bi.transform_1ktkmn$(this.state.transform);
        bi.draw_ywv3s4$(shape);
        switch (rasterizerMethod.name) {
          case 'X1':
            tmp$ = newBi;
            break;
          case 'X2':
            tmp$ = mipmap(newBi, 1);
            break;
          case 'X4':
            tmp$ = mipmap(newBi, 2);
            break;
          default:tmp$ = newBi;
            break;
        }

        var renderBi = tmp$;
        var t = this.state.transform;
        var a = t.a;
        var b = t.b;
        var c = t.c;
        var d = t.d;
        var tx = t.tx;
        var ty = t.ty;
        try {
          this.setTransform_1ktkmn$(new Matrix());
          this.rendererDrawImage_dfapkx$(renderBi, 0, 0);
        }
        finally {
          t.setTo_15yvbs$(a, b, c, d, tx, ty);
        }

        break;
    }
  };
  Context2d.prototype.createLinearGradient_6y0v78$ = function (x0, y0, x1, y1) {
    return new Context2d$Gradient(Context2d$Gradient$Kind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
  };
  Context2d.prototype.createRadialGradient_15yvbs$ = function (x0, y0, r0, x1, y1, r1) {
    return new Context2d$Gradient(Context2d$Gradient$Kind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
  };
  Context2d.prototype.createColor_md34sx$ = function (color) {
    return new Context2d$Color(color);
  };
  Context2d.prototype.createPattern_vb86sh$ = function (bitmap, repeat, smooth, transform) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    if (transform === void 0)
      transform = new Matrix();
    return new Context2d$BitmapPaint(bitmap, transform, repeat, smooth);
  };
  function Context2d$Font(name, size) {
    this.name = name;
    this.size = size;
  }
  Context2d$Font.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Font',
    interfaces: []
  };
  Context2d$Font.prototype.component1 = function () {
    return this.name;
  };
  Context2d$Font.prototype.component2 = function () {
    return this.size;
  };
  Context2d$Font.prototype.copy_io5o9c$ = function (name, size) {
    return new Context2d$Font(name === void 0 ? this.name : name, size === void 0 ? this.size : size);
  };
  Context2d$Font.prototype.toString = function () {
    return 'Font(name=' + Kotlin.toString(this.name) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  Context2d$Font.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  Context2d$Font.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.size, other.size)))));
  };
  function Context2d$TextMetrics(bounds) {
    if (bounds === void 0) {
      bounds = new Rectangle(0.0, 0.0, 0.0, 0.0);
    }
    this.bounds = bounds;
  }
  Context2d$TextMetrics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextMetrics',
    interfaces: []
  };
  Context2d$TextMetrics.prototype.component1 = function () {
    return this.bounds;
  };
  Context2d$TextMetrics.prototype.copy_2da8yn$ = function (bounds) {
    return new Context2d$TextMetrics(bounds === void 0 ? this.bounds : bounds);
  };
  Context2d$TextMetrics.prototype.toString = function () {
    return 'TextMetrics(bounds=' + Kotlin.toString(this.bounds) + ')';
  };
  Context2d$TextMetrics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  Context2d$TextMetrics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bounds, other.bounds))));
  };
  Context2d.prototype.getTextBounds_jznmvy$ = function (text, out) {
    if (out === void 0)
      out = new Context2d$TextMetrics();
    this.rendererGetBounds_qlucl1$(this.font, text, out);
    return out;
  };
  Context2d.prototype.fillText_2w64eq$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillText_2w64eq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (text, x, y) {
      this.renderText_a7koit$(text, numberToDouble(x), numberToDouble(y), true);
    };
  }));
  Context2d.prototype.strokeText_2w64eq$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.strokeText_2w64eq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (text, x, y) {
      this.renderText_a7koit$(text, numberToDouble(x), numberToDouble(y), false);
    };
  }));
  Context2d.prototype.fillText_j0r20$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillText_j0r20$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Unit = Kotlin.kotlin.Unit;
    function Context2d$fillText$lambda$lambda(closure$text, closure$x, closure$y, this$Context2d) {
      return function () {
        this$Context2d.renderText_a7koit$(closure$text, numberToDouble(closure$x), numberToDouble(closure$y), true);
        return Unit;
      };
    }
    return function (text, x, y, font, halign, valign, color) {
      if (font === void 0)
        font = null;
      if (halign === void 0)
        halign = null;
      if (valign === void 0)
        valign = null;
      if (color === void 0)
        color = null;
      var oldFont = this.font;
      var oldHalign = this.horizontalAlign;
      var oldValign = this.verticalAlign;
      try {
        if (font != null)
          this.font = font;
        if (halign != null)
          this.horizontalAlign = halign;
        if (valign != null)
          this.verticalAlign = valign;
        var tmp$, tmp$_0;
        tmp$_0 = (tmp$ = color != null ? this.createColor_md34sx$(color) : null) != null ? tmp$ : this.fillStyle;
        var oldStyle = this.fillStyle;
        this.fillStyle = tmp$_0;
        try {
          Context2d$fillText$lambda$lambda(text, x, y, this)();
        }
        finally {
          this.fillStyle = oldStyle;
        }
      }
      finally {
        this.font = oldFont;
        this.horizontalAlign = oldHalign;
        this.verticalAlign = oldValign;
      }
    };
  }));
  Context2d.prototype.renderText_a7koit$ = function (text, x, y, fill) {
    this.rendererRenderText_2jdvt1$(this.state, this.font, text, x, y, fill);
  };
  Context2d.prototype.drawImage_dpo8os$$default = function (image, x, y, width, height) {
    this.rendererDrawImage_dfapkx$(image, x, y, width, height, this.state.transform);
  };
  Context2d.prototype.drawImage_dpo8os$ = function (image, x, y, width, height, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    callback$default ? callback$default(image, x, y, width, height) : this.drawImage_dpo8os$$default(image, x, y, width, height);
  };
  function Context2d$Paint() {
  }
  Context2d$Paint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Paint',
    interfaces: []
  };
  function Context2d$None() {
    Context2d$None_instance = this;
  }
  Context2d$None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [Context2d$Paint]
  };
  var Context2d$None_instance = null;
  function Context2d$None_getInstance() {
    if (Context2d$None_instance === null) {
      new Context2d$None();
    }
    return Context2d$None_instance;
  }
  function Context2d$Color(color) {
    this.color = color;
  }
  Context2d$Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: [Context2d$Paint]
  };
  Context2d$Color.prototype.component1 = function () {
    return this.color;
  };
  Context2d$Color.prototype.copy_md34sx$ = function (color) {
    return new Context2d$Color(color === void 0 ? this.color : color);
  };
  Context2d$Color.prototype.toString = function () {
    return 'Color(color=' + Kotlin.toString(this.color) + ')';
  };
  Context2d$Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  Context2d$Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.color, other.color))));
  };
  function Context2d$TransformedPaint() {
  }
  Context2d$TransformedPaint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransformedPaint',
    interfaces: [Context2d$Paint]
  };
  function Context2d$Gradient(kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    if (stops === void 0)
      stops = new DoubleArrayList();
    if (colors === void 0)
      colors = new IntArrayList();
    if (cycle === void 0)
      cycle = Context2d$CycleMethod$NO_CYCLE_getInstance();
    if (transform === void 0)
      transform = new Matrix();
    if (interpolationMethod === void 0)
      interpolationMethod = Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
    if (units === void 0)
      units = Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance();
    this.kind = kind;
    this.x0 = x0;
    this.y0 = y0;
    this.r0 = r0;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
    this.stops = stops;
    this.colors = colors;
    this.cycle = cycle;
    this.transform_llmwna$_0 = transform;
    this.interpolationMethod = interpolationMethod;
    this.units = units;
    this.numberOfStops = this.stops.size;
  }
  Object.defineProperty(Context2d$Gradient.prototype, 'transform', {
    get: function () {
      return this.transform_llmwna$_0;
    }
  });
  function Context2d$Gradient$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$Kind_initFields() {
    Context2d$Gradient$Kind_initFields = function () {
    };
    Context2d$Gradient$Kind$LINEAR_instance = new Context2d$Gradient$Kind('LINEAR', 0);
    Context2d$Gradient$Kind$RADIAL_instance = new Context2d$Gradient$Kind('RADIAL', 1);
  }
  var Context2d$Gradient$Kind$LINEAR_instance;
  function Context2d$Gradient$Kind$LINEAR_getInstance() {
    Context2d$Gradient$Kind_initFields();
    return Context2d$Gradient$Kind$LINEAR_instance;
  }
  var Context2d$Gradient$Kind$RADIAL_instance;
  function Context2d$Gradient$Kind$RADIAL_getInstance() {
    Context2d$Gradient$Kind_initFields();
    return Context2d$Gradient$Kind$RADIAL_instance;
  }
  Context2d$Gradient$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function Context2d$Gradient$Kind$values() {
    return [Context2d$Gradient$Kind$LINEAR_getInstance(), Context2d$Gradient$Kind$RADIAL_getInstance()];
  }
  Context2d$Gradient$Kind.values = Context2d$Gradient$Kind$values;
  function Context2d$Gradient$Kind$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return Context2d$Gradient$Kind$LINEAR_getInstance();
      case 'RADIAL':
        return Context2d$Gradient$Kind$RADIAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.Kind.' + name);
    }
  }
  Context2d$Gradient$Kind.valueOf_61zpoe$ = Context2d$Gradient$Kind$valueOf;
  function Context2d$Gradient$Units(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$Units_initFields() {
    Context2d$Gradient$Units_initFields = function () {
    };
    Context2d$Gradient$Units$USER_SPACE_ON_USE_instance = new Context2d$Gradient$Units('USER_SPACE_ON_USE', 0);
    Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance = new Context2d$Gradient$Units('OBJECT_BOUNDING_BOX', 1);
  }
  var Context2d$Gradient$Units$USER_SPACE_ON_USE_instance;
  function Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance() {
    Context2d$Gradient$Units_initFields();
    return Context2d$Gradient$Units$USER_SPACE_ON_USE_instance;
  }
  var Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance;
  function Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance() {
    Context2d$Gradient$Units_initFields();
    return Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance;
  }
  Context2d$Gradient$Units.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Units',
    interfaces: [Enum]
  };
  function Context2d$Gradient$Units$values() {
    return [Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance(), Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance()];
  }
  Context2d$Gradient$Units.values = Context2d$Gradient$Units$values;
  function Context2d$Gradient$Units$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USE':
        return Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.Units.' + name);
    }
  }
  Context2d$Gradient$Units.valueOf_61zpoe$ = Context2d$Gradient$Units$valueOf;
  function Context2d$Gradient$InterpolationMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$InterpolationMethod_initFields() {
    Context2d$Gradient$InterpolationMethod_initFields = function () {
    };
    Context2d$Gradient$InterpolationMethod$LINEAR_instance = new Context2d$Gradient$InterpolationMethod('LINEAR', 0);
    Context2d$Gradient$InterpolationMethod$NORMAL_instance = new Context2d$Gradient$InterpolationMethod('NORMAL', 1);
  }
  var Context2d$Gradient$InterpolationMethod$LINEAR_instance;
  function Context2d$Gradient$InterpolationMethod$LINEAR_getInstance() {
    Context2d$Gradient$InterpolationMethod_initFields();
    return Context2d$Gradient$InterpolationMethod$LINEAR_instance;
  }
  var Context2d$Gradient$InterpolationMethod$NORMAL_instance;
  function Context2d$Gradient$InterpolationMethod$NORMAL_getInstance() {
    Context2d$Gradient$InterpolationMethod_initFields();
    return Context2d$Gradient$InterpolationMethod$NORMAL_instance;
  }
  Context2d$Gradient$InterpolationMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterpolationMethod',
    interfaces: [Enum]
  };
  function Context2d$Gradient$InterpolationMethod$values() {
    return [Context2d$Gradient$InterpolationMethod$LINEAR_getInstance(), Context2d$Gradient$InterpolationMethod$NORMAL_getInstance()];
  }
  Context2d$Gradient$InterpolationMethod.values = Context2d$Gradient$InterpolationMethod$values;
  function Context2d$Gradient$InterpolationMethod$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return Context2d$Gradient$InterpolationMethod$LINEAR_getInstance();
      case 'NORMAL':
        return Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.InterpolationMethod.' + name);
    }
  }
  Context2d$Gradient$InterpolationMethod.valueOf_61zpoe$ = Context2d$Gradient$InterpolationMethod$valueOf;
  Context2d$Gradient.prototype.addColorStop_ycmdr1$ = function (stop, color) {
    this.stops.plusAssign_14dthe$(stop);
    this.colors.plusAssign_za3lpa$(color.value);
    return this;
  };
  Context2d$Gradient.prototype.applyMatrix_1ktkmn$ = function (m) {
    return new Context2d$Gradient(this.kind, transformX(m, this.x0, this.y0), transformY(m, this.x0, this.y0), this.r0, transformX(m, this.x1, this.y1), transformY(m, this.x1, this.y1), this.r1, DoubleArrayList_init(this.stops), IntArrayList_init(this.colors), this.cycle, new Matrix(), this.interpolationMethod, this.units);
  };
  Context2d$Gradient.prototype.toString = function () {
    switch (this.kind.name) {
      case 'LINEAR':
        return 'LinearGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.stops + ', ' + this.colors + ')';
      case 'RADIAL':
        return 'RadialGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.r0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.r1 + ', ' + this.stops + ', ' + this.colors + ')';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Context2d$Gradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gradient',
    interfaces: [Context2d$TransformedPaint]
  };
  Context2d$Gradient.prototype.component1 = function () {
    return this.kind;
  };
  Context2d$Gradient.prototype.component2 = function () {
    return this.x0;
  };
  Context2d$Gradient.prototype.component3 = function () {
    return this.y0;
  };
  Context2d$Gradient.prototype.component4 = function () {
    return this.r0;
  };
  Context2d$Gradient.prototype.component5 = function () {
    return this.x1;
  };
  Context2d$Gradient.prototype.component6 = function () {
    return this.y1;
  };
  Context2d$Gradient.prototype.component7 = function () {
    return this.r1;
  };
  Context2d$Gradient.prototype.component8 = function () {
    return this.stops;
  };
  Context2d$Gradient.prototype.component9 = function () {
    return this.colors;
  };
  Context2d$Gradient.prototype.component10 = function () {
    return this.cycle;
  };
  Context2d$Gradient.prototype.component11 = function () {
    return this.transform;
  };
  Context2d$Gradient.prototype.component12 = function () {
    return this.interpolationMethod;
  };
  Context2d$Gradient.prototype.component13 = function () {
    return this.units;
  };
  Context2d$Gradient.prototype.copy_c79f7g$ = function (kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    return new Context2d$Gradient(kind === void 0 ? this.kind : kind, x0 === void 0 ? this.x0 : x0, y0 === void 0 ? this.y0 : y0, r0 === void 0 ? this.r0 : r0, x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1, r1 === void 0 ? this.r1 : r1, stops === void 0 ? this.stops : stops, colors === void 0 ? this.colors : colors, cycle === void 0 ? this.cycle : cycle, transform === void 0 ? this.transform : transform, interpolationMethod === void 0 ? this.interpolationMethod : interpolationMethod, units === void 0 ? this.units : units);
  };
  Context2d$Gradient.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.x0) | 0;
    result = result * 31 + Kotlin.hashCode(this.y0) | 0;
    result = result * 31 + Kotlin.hashCode(this.r0) | 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    result = result * 31 + Kotlin.hashCode(this.r1) | 0;
    result = result * 31 + Kotlin.hashCode(this.stops) | 0;
    result = result * 31 + Kotlin.hashCode(this.colors) | 0;
    result = result * 31 + Kotlin.hashCode(this.cycle) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.interpolationMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.units) | 0;
    return result;
  };
  Context2d$Gradient.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.x0, other.x0) && Kotlin.equals(this.y0, other.y0) && Kotlin.equals(this.r0, other.r0) && Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1) && Kotlin.equals(this.r1, other.r1) && Kotlin.equals(this.stops, other.stops) && Kotlin.equals(this.colors, other.colors) && Kotlin.equals(this.cycle, other.cycle) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.interpolationMethod, other.interpolationMethod) && Kotlin.equals(this.units, other.units)))));
  };
  function Context2d$BitmapPaint(bitmap, transform, repeat, smooth) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    this.bitmap = bitmap;
    this.transform_jssmr$_0 = transform;
    this.repeat = repeat;
    this.smooth = smooth;
  }
  Object.defineProperty(Context2d$BitmapPaint.prototype, 'transform', {
    get: function () {
      return this.transform_jssmr$_0;
    }
  });
  Context2d$BitmapPaint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapPaint',
    interfaces: [Context2d$TransformedPaint]
  };
  function Context2d$Drawable() {
  }
  Context2d$Drawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Drawable',
    interfaces: []
  };
  function Context2d$SizedDrawable() {
  }
  Context2d$SizedDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SizedDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$BoundsDrawable() {
  }
  Object.defineProperty(Context2d$BoundsDrawable.prototype, 'left', {
    get: function () {
      return numberToInt(this.bounds.left);
    }
  });
  Object.defineProperty(Context2d$BoundsDrawable.prototype, 'top', {
    get: function () {
      return numberToInt(this.bounds.top);
    }
  });
  Object.defineProperty(Context2d$BoundsDrawable.prototype, 'width', {
    get: function () {
      return numberToInt(this.bounds.width);
    }
  });
  Object.defineProperty(Context2d$BoundsDrawable.prototype, 'height', {
    get: function () {
      return numberToInt(this.bounds.height);
    }
  });
  Context2d$BoundsDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoundsDrawable',
    interfaces: [Context2d$SizedDrawable]
  };
  function Context2d$FuncDrawable(action) {
    this.action = action;
  }
  Context2d$FuncDrawable.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      this.action(c);
    }
    finally {
      c.restore();
    }
  };
  Context2d$FuncDrawable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FuncDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$StrokeInfo(thickness, pixelHinting, scaleMode, startCap, endCap, lineJoin, miterLimit) {
    if (thickness === void 0)
      thickness = 1.0;
    if (pixelHinting === void 0)
      pixelHinting = false;
    if (scaleMode === void 0)
      scaleMode = Context2d$ScaleMode$NORMAL_getInstance();
    if (startCap === void 0)
      startCap = Context2d$LineCap$BUTT_getInstance();
    if (endCap === void 0)
      endCap = Context2d$LineCap$BUTT_getInstance();
    if (lineJoin === void 0)
      lineJoin = Context2d$LineJoin$MITER_getInstance();
    if (miterLimit === void 0)
      miterLimit = 20.0;
    this.thickness = thickness;
    this.pixelHinting = pixelHinting;
    this.scaleMode = scaleMode;
    this.startCap = startCap;
    this.endCap = endCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
  }
  Context2d$StrokeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrokeInfo',
    interfaces: []
  };
  Context2d$StrokeInfo.prototype.component1 = function () {
    return this.thickness;
  };
  Context2d$StrokeInfo.prototype.component2 = function () {
    return this.pixelHinting;
  };
  Context2d$StrokeInfo.prototype.component3 = function () {
    return this.scaleMode;
  };
  Context2d$StrokeInfo.prototype.component4 = function () {
    return this.startCap;
  };
  Context2d$StrokeInfo.prototype.component5 = function () {
    return this.endCap;
  };
  Context2d$StrokeInfo.prototype.component6 = function () {
    return this.lineJoin;
  };
  Context2d$StrokeInfo.prototype.component7 = function () {
    return this.miterLimit;
  };
  Context2d$StrokeInfo.prototype.copy_11i2yi$ = function (thickness, pixelHinting, scaleMode, startCap, endCap, lineJoin, miterLimit) {
    return new Context2d$StrokeInfo(thickness === void 0 ? this.thickness : thickness, pixelHinting === void 0 ? this.pixelHinting : pixelHinting, scaleMode === void 0 ? this.scaleMode : scaleMode, startCap === void 0 ? this.startCap : startCap, endCap === void 0 ? this.endCap : endCap, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit);
  };
  Context2d$StrokeInfo.prototype.toString = function () {
    return 'StrokeInfo(thickness=' + Kotlin.toString(this.thickness) + (', pixelHinting=' + Kotlin.toString(this.pixelHinting)) + (', scaleMode=' + Kotlin.toString(this.scaleMode)) + (', startCap=' + Kotlin.toString(this.startCap)) + (', endCap=' + Kotlin.toString(this.endCap)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + ')';
  };
  Context2d$StrokeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.thickness) | 0;
    result = result * 31 + Kotlin.hashCode(this.pixelHinting) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.endCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    return result;
  };
  Context2d$StrokeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.thickness, other.thickness) && Kotlin.equals(this.pixelHinting, other.pixelHinting) && Kotlin.equals(this.scaleMode, other.scaleMode) && Kotlin.equals(this.startCap, other.startCap) && Kotlin.equals(this.endCap, other.endCap) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit)))));
  };
  function Context2d$lineScaleMode$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineScaleMode', 0, function ($receiver) {
        return $receiver.lineScaleMode;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineScaleMode = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineWidth$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineWidth', 0, function ($receiver) {
        return $receiver.lineWidth;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineWidth = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineCap$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineCap', 0, function ($receiver) {
        return $receiver.lineCap;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineCap = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$startLineCap$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('startLineCap', 0, function ($receiver) {
        return $receiver.startLineCap;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.startLineCap = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$endLineCap$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('startLineCap', 0, function ($receiver) {
        return $receiver.startLineCap;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.startLineCap = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineJoin$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineJoin', 0, function ($receiver) {
        return $receiver.lineJoin;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineJoin = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$strokeStyle$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('strokeStyle', 0, function ($receiver) {
        return $receiver.strokeStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.strokeStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$fillStyle$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('fillStyle', 0, function ($receiver) {
        return $receiver.fillStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.fillStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$font$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('font', 0, function ($receiver) {
        return $receiver.font;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.font = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$verticalAlign$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('verticalAlign', 0, function ($receiver) {
        return $receiver.verticalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.verticalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$horizontalAlign$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('horizontalAlign', 0, function ($receiver) {
        return $receiver.horizontalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.horizontalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$globalAlpha$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('globalAlpha', 0, function ($receiver) {
        return $receiver.globalAlpha;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.globalAlpha = value;
      }.bind(null, this$Context2d.state));
    };
  }
  Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context2d',
    interfaces: [VectorBuilder, Disposable]
  };
  function toFill($receiver) {
    return new Context2d$Color($receiver);
  }
  function renderTo($receiver, ctx) {
    ctx.draw_ywv3s4$($receiver);
  }
  function filled$ObjectLiteral(closure$paint, this$filled) {
    this.closure$paint = closure$paint;
    this.this$filled = this$filled;
    this.$delegate_ytihto$_0 = this$filled;
  }
  filled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.fillStyle = this.closure$paint;
    this.this$filled.draw_vuz2tk$(c);
    c.fill();
  };
  Object.defineProperty(filled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_ytihto$_0.height;
    }
  });
  Object.defineProperty(filled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_ytihto$_0.width;
    }
  });
  filled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function filled($receiver, paint) {
    return new filled$ObjectLiteral(paint, $receiver);
  }
  function scaled$ObjectLiteral(closure$sx, closure$sy, this$scaled) {
    this.closure$sx = closure$sx;
    this.closure$sy = closure$sy;
    this.this$scaled = this$scaled;
    this.$delegate_7pgslg$_0 = this$scaled;
    var x = this$scaled.width * numberToDouble(closure$sx);
    this.width_mkevfi$_0 = numberToInt(Math_0.abs(x));
    var x_0 = this$scaled.height * numberToDouble(closure$sy);
    this.height_jmlctz$_0 = numberToInt(Math_0.abs(x_0));
  }
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_mkevfi$_0;
    }
  });
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_jmlctz$_0;
    }
  });
  scaled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.scale_lu1900$(numberToDouble(this.closure$sx), numberToDouble(this.closure$sy));
    this.this$scaled.draw_vuz2tk$(c);
  };
  scaled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function scaled($receiver, sx, sy) {
    if (sx === void 0)
      sx = 1.0;
    if (sy === void 0)
      sy = sx;
    return new scaled$ObjectLiteral(sx, sy, $receiver);
  }
  function translated$ObjectLiteral(closure$tx, closure$ty, this$translated) {
    this.closure$tx = closure$tx;
    this.closure$ty = closure$ty;
    this.this$translated = this$translated;
    this.$delegate_rdveew$_0 = this$translated;
  }
  translated$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.translate_lu1900$(numberToDouble(this.closure$tx), numberToDouble(this.closure$ty));
    this.this$translated.draw_vuz2tk$(c);
  };
  Object.defineProperty(translated$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_rdveew$_0.height;
    }
  });
  Object.defineProperty(translated$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_rdveew$_0.width;
    }
  });
  translated$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function translated($receiver, tx, ty) {
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = tx;
    return new translated$ObjectLiteral(tx, ty, $receiver);
  }
  function render($receiver) {
    var image = NativeImage_0($receiver.width, $receiver.height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function renderNoNative($receiver) {
    var image = new Bitmap32($receiver.width, $receiver.height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function renderToImage($receiver, width, height) {
    var image = NativeImage_0(width, height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function GraphicsPath(commands, data, winding) {
    if (commands === void 0)
      commands = new IntArrayList();
    if (data === void 0)
      data = new DoubleArrayList();
    if (winding === void 0)
      winding = VectorPath$Winding.EVEN_ODD;
    VectorPath.call(this, commands, data, winding);
  }
  Object.defineProperty(GraphicsPath.prototype, 'width', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().width);
    }
  });
  Object.defineProperty(GraphicsPath.prototype, 'height', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().height);
    }
  });
  GraphicsPath.prototype.draw_vuz2tk$ = function (c) {
    c.state.path.write_d3txdv$(this);
  };
  GraphicsPath.prototype.clone = function () {
    return new GraphicsPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  GraphicsPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsPath',
    interfaces: [Context2d$SizedDrawable, VectorPath]
  };
  function SvgBuilder(bounds, scale) {
    this.bounds = bounds;
    this.scale = scale;
    this.defs = ArrayList_init_0();
    this.nodes = ArrayList_init_0();
  }
  SvgBuilder.prototype.toXml = function () {
    return Xml_0.Companion.Tag_imnfz6$('svg', linkedMapOf([to('width', get_niceStr(this.bounds.width * this.scale) + 'px'), to('height', get_niceStr(this.bounds.height * this.scale) + 'px'), to('viewBox', '0 0 ' + get_niceStr(this.bounds.width * this.scale) + ' ' + get_niceStr(this.bounds.height * this.scale)), to('xmlns', 'http://www.w3.org/2000/svg'), to('xmlns:xlink', 'http://www.w3.org/1999/xlink')]), listOf([Xml_0.Companion.Tag_imnfz6$('defs', emptyMap(), this.defs), Xml_0.Companion.Tag_imnfz6$('g', mapOf_0(to('transform', toSvg((new Matrix()).translate_lu1900$(-this.bounds.x, -this.bounds.y).scale_lu1900$(this.scale, this.scale)))), this.nodes)]));
  };
  SvgBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgBuilder',
    interfaces: []
  };
  function toSvg($receiver) {
    var block$result;
    block$break: do {
      switch ($receiver.getType().name) {
        case 'IDENTITY':
          block$result = 'translate()';
          break block$break;
        case 'TRANSLATE':
          block$result = 'translate(' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ')';
          break block$break;
        case 'SCALE':
          block$result = 'scale(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.d) + ')';
          break block$break;
        case 'SCALE_TRANSLATE':
          block$result = 'translate(' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ') scale(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.d) + ')';
          break block$break;
        default:block$result = 'matrix(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.b) + ', ' + get_niceStr($receiver.c) + ', ' + get_niceStr($receiver.d) + ', ' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ')';
          break block$break;
      }
    }
     while (false);
    return block$result;
  }
  function toSvgPathString$fixX(closure$decimalPlaces) {
    return function ($receiver) {
      return toStringDecimal($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString$fixY(closure$decimalPlaces) {
    return function ($receiver) {
      return toStringDecimal($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString($receiver, separator, decimalPlaces) {
    if (separator === void 0)
      separator = ' ';
    if (decimalPlaces === void 0)
      decimalPlaces = 1;
    var parts = ArrayList_init_0();
    var fixX = toSvgPathString$fixX(decimalPlaces);
    var fixY = toSvgPathString$fixY(decimalPlaces);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = $receiver.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 0:
          var x = $receiver.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = $receiver.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          var element = 'M' + fixX(x) + ' ' + fixY(y);
          parts.add_11rb$(element);
          break;
        case 1:
          var x_0 = $receiver.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          var element_0 = 'L' + fixX(x_0) + ' ' + fixY(y_0);
          parts.add_11rb$(element_0);
          break;
        case 2:
          var x1 = $receiver.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          var element_1 = 'Q' + fixX(x1) + ' ' + fixY(y1) + ', ' + fixX(x2) + ' ' + fixY(y2);
          parts.add_11rb$(element_1);
          break;
        case 3:
          var x1_0 = $receiver.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          var element_2 = 'C' + fixX(x1_0) + ' ' + fixY(y1_0) + ', ' + fixX(x2_0) + ' ' + fixY(y2_0) + ', ' + fixX(x3) + ' ' + fixY(y3);
          parts.add_11rb$(element_2);
          break;
        case 4:
          parts.add_11rb$('Z');
          break;
      }
    }
    return joinToString(parts, '');
  }
  function Shape() {
  }
  Shape.prototype.buildSvg_b7xfbk$ = function (svg) {
  };
  Object.defineProperty(Shape.prototype, 'bounds', {
    get: function () {
      var $receiver = new BoundsBuilder();
      this.addBounds_w97n1m$($receiver);
      return $receiver.getBounds_2da8yn$();
    }
  });
  Shape.prototype.containsPoint_lu1900$ = function (x, y) {
    return this.bounds.contains_lu1900$(x, y);
  };
  Shape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Shape',
    interfaces: [Context2d$BoundsDrawable]
  };
  function getBounds($receiver, out) {
    if (out === void 0) {
      out = new Rectangle(0.0, 0.0, 0.0, 0.0);
    }
    var bb = new BoundsBuilder();
    $receiver.addBounds_w97n1m$(bb);
    bb.getBounds_2da8yn$(out);
    return out;
  }
  function toSvg_0($receiver, scale) {
    if (scale === void 0)
      scale = 1.0;
    var $receiver_0 = new SvgBuilder(getBounds($receiver), scale);
    $receiver.buildSvg_b7xfbk$($receiver_0);
    return $receiver_0.toXml();
  }
  function toShape($receiver, width, height) {
    var $receiver_0 = new ShapeBuilder(width, height);
    $receiver_0.draw_ywv3s4$($receiver);
    return $receiver_0.buildShape();
  }
  function toSvg_1($receiver, width, height, scale) {
    if (scale === void 0)
      scale = 1.0;
    return toSvg_0(toShape($receiver, width, height), scale);
  }
  function toShape_0($receiver) {
    return toShape($receiver, $receiver.width, $receiver.height);
  }
  function toSvg_2($receiver, scale) {
    if (scale === void 0)
      scale = 1.0;
    return toSvg_1($receiver, $receiver.width, $receiver.height, scale);
  }
  function StyledShape() {
  }
  Object.defineProperty(StyledShape.prototype, 'path', {
    get: function () {
      return null;
    }
  });
  StyledShape.prototype.addBounds_w97n1m$ = function (bb) {
    var tmp$;
    if ((tmp$ = this.path) != null) {
      add(bb, tmp$);
    }
  };
  StyledShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$;
    tmp$ = svg.nodes;
    var tmp$_0, tmp$_1;
    var element = Xml_0.Companion.Tag_imnfz6$('path', plus_1(mapOf([to('d', (tmp$_1 = (tmp$_0 = this.path) != null ? toSvgPathString(tmp$_0) : null) != null ? tmp$_1 : ''), to('transform', toSvg(this.transform))]), this.getSvgXmlAttributes_b7xfbk$(svg)), emptyList());
    tmp$.add_11rb$(element);
  };
  StyledShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return emptyMap();
  };
  StyledShape.prototype.draw_vuz2tk$ = function (c) {
    var t = c.state.transform;
    var a = t.a;
    var b = t.b;
    var c_0 = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      var tmp$;
      c.transform_1ktkmn$(this.transform);
      c.beginPath();
      (tmp$ = this.path) != null ? (tmp$.draw_vuz2tk$(c), Unit) : null;
      if (this.clip != null) {
        ensureNotNull(this.clip).draw_vuz2tk$(c);
        c.clip();
      }
      this.drawInternal_vuz2tk$(c);
    }
    finally {
      t.setTo_15yvbs$(a, b, c_0, d, tx, ty);
    }
  };
  StyledShape.prototype.drawInternal_vuz2tk$ = function (c) {
  };
  StyledShape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledShape',
    interfaces: [Shape]
  };
  function colorToSvg(color) {
    var r = color.r;
    var g = color.g;
    var b = color.b;
    var af = color.af;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + af + ')';
  }
  function toSvg_3($receiver, svg) {
    var id = svg.defs.size;
    if (Kotlin.isType($receiver, Context2d$Gradient)) {
      var $receiver_0 = until(0, $receiver.numberOfStops);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var ratio = $receiver.stops.get_za3lpa$(item);
        var color = new RGBA($receiver.colors.get_za3lpa$(item));
        tmp$_0.call(destination, Xml_0.Companion.Tag_imnfz6$('stop', mapOf([to('offset', (ratio * 100).toString() + '%'), to('stop-color', colorToSvg(color))]), emptyList()));
      }
      var stops = destination;
      if (Kotlin.isType($receiver, Context2d$Gradient)) {
        switch ($receiver.kind.name) {
          case 'LINEAR':
            var $receiver_1 = svg.defs;
            var element = Xml_0.Companion.Tag_imnfz6$('linearGradient', mapOf([to('id', 'def' + id), to('x1', $receiver.x0.toString()), to('y1', $receiver.y0.toString()), to('x2', $receiver.x1.toString()), to('y2', $receiver.y1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
            $receiver_1.add_11rb$(element);
            break;
          case 'RADIAL':
            var $receiver_2 = svg.defs;
            var element_0 = Xml_0.Companion.Tag_imnfz6$('radialGradient', mapOf([to('id', 'def' + id), to('cx', $receiver.x0.toString()), to('cy', $receiver.y0.toString()), to('fx', $receiver.x1.toString()), to('fy', $receiver.y1.toString()), to('r', $receiver.r1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
            $receiver_2.add_11rb$(element_0);
            break;
        }
      }
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint)) {
      var tmp$_1 = svg.defs;
      var element_1 = Xml_0.Companion.Tag_imnfz6$('pattern', mapOf([to('id', 'def' + id), to('patternUnits', 'userSpaceOnUse'), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString()), to('patternTransform', toSvg($receiver.transform))]), listOf_0(Xml_0.Companion.Tag_imnfz6$('image', mapOf([to('xlink:href', toUri($receiver.bitmap)), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString())]), emptyList())));
      tmp$_1.add_11rb$(element_1);
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$Color))
      return colorToSvg($receiver.color);
    else
      return 'red';
  }
  function FillShape(path, clip, paint, transform) {
    this.path_2357gs$_0 = path;
    this.clip_1w6on5$_0 = clip;
    this.paint_6bthi3$_0 = paint;
    this.transform_dukfqh$_0 = transform;
  }
  Object.defineProperty(FillShape.prototype, 'path', {
    get: function () {
      return this.path_2357gs$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'clip', {
    get: function () {
      return this.clip_1w6on5$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'paint', {
    get: function () {
      return this.paint_6bthi3$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'transform', {
    get: function () {
      return this.transform_dukfqh$_0;
    }
  });
  FillShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.fill_i8h3xk$(this.paint);
  };
  FillShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_1(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf_0(to('fill', toSvg_3(this.paint, svg))));
  };
  FillShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var tx = transformX(this.transform, x, y);
    var ty = transformY(this.transform, x, y);
    if (this.clip != null)
      return this.clip.containsPoint_lu1900$(tx, ty);
    return this.path.containsPoint_lu1900$(tx, ty);
  };
  FillShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillShape',
    interfaces: [StyledShape]
  };
  FillShape.prototype.component1 = function () {
    return this.path;
  };
  FillShape.prototype.component2 = function () {
    return this.clip;
  };
  FillShape.prototype.component3 = function () {
    return this.paint;
  };
  FillShape.prototype.component4 = function () {
    return this.transform;
  };
  FillShape.prototype.copy_m6pohu$ = function (path, clip, paint, transform) {
    return new FillShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform);
  };
  FillShape.prototype.toString = function () {
    return 'FillShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + ')';
  };
  FillShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    return result;
  };
  FillShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform)))));
  };
  function PolylineShape(path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, lineJoin, miterLimit) {
    this.path_szk01b$_0 = path;
    this.clip_sslh7o$_0 = clip;
    this.paint_osfjj2$_0 = paint;
    this.transform_eb3l64$_0 = transform;
    this.thickness = thickness;
    this.pixelHinting = pixelHinting;
    this.scaleMode = scaleMode;
    this.startCaps = startCaps;
    this.endCaps = endCaps;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.joints = this.lineJoin.name;
    this.tempBB_0 = new BoundsBuilder();
    this.tempRect_0 = new Rectangle(0.0, 0.0, 0.0, 0.0);
  }
  Object.defineProperty(PolylineShape.prototype, 'path', {
    get: function () {
      return this.path_szk01b$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'clip', {
    get: function () {
      return this.clip_sslh7o$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'paint', {
    get: function () {
      return this.paint_osfjj2$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'transform', {
    get: function () {
      return this.transform_eb3l64$_0;
    }
  });
  PolylineShape.prototype.addBounds_w97n1m$ = function (bb) {
    this.tempBB_0.reset();
    add(this.tempBB_0, this.path);
    this.tempBB_0.getBounds_2da8yn$(this.tempRect_0);
    var halfThickness = this.thickness / 2;
    this.tempRect_0.inflate_lu1900$(Math_0.max(halfThickness, 0.0), Math_0.max(halfThickness, 0.0));
    add_0(bb, this.tempRect_0);
  };
  PolylineShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.lineScaleMode = this.scaleMode;
    c.lineWidth = this.thickness;
    c.lineCap = this.endCaps;
    c.lineJoin = this.lineJoin;
    c.stroke_i8h3xk$(this.paint);
  };
  PolylineShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var tx = transformX(this.transform, x, y);
    var ty = transformY(this.transform, x, y);
    if (this.clip != null)
      return this.clip.containsPoint_lu1900$(tx, ty);
    return this.path.containsPoint_lu1900$(tx, ty);
  };
  PolylineShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_1(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf([to('fill', 'none'), to('stroke-width', this.thickness.toString()), to('stroke', toSvg_3(this.paint, svg))]));
  };
  PolylineShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolylineShape',
    interfaces: [StyledShape]
  };
  function PolylineShape_init(path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit, $this) {
    $this = $this || Object.create(PolylineShape.prototype);
    var tmp$;
    if (joints == null)
      tmp$ = Context2d$LineJoin$MITER_getInstance();
    else
      switch (joints) {
        case 'MITER':
        case 'miter':
          tmp$ = Context2d$LineJoin$MITER_getInstance();
          break;
        case 'BEVEL':
        case 'bevel':
          tmp$ = Context2d$LineJoin$BEVEL_getInstance();
          break;
        case 'ROUND':
        case 'round':
          tmp$ = Context2d$LineJoin$ROUND_getInstance();
          break;
        default:tmp$ = Context2d$LineJoin$MITER_getInstance();
          break;
      }
    PolylineShape.call($this, path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, tmp$, miterLimit);
    return $this;
  }
  PolylineShape.prototype.component1 = function () {
    return this.path;
  };
  PolylineShape.prototype.component2 = function () {
    return this.clip;
  };
  PolylineShape.prototype.component3 = function () {
    return this.paint;
  };
  PolylineShape.prototype.component4 = function () {
    return this.transform;
  };
  PolylineShape.prototype.component5 = function () {
    return this.thickness;
  };
  PolylineShape.prototype.component6 = function () {
    return this.pixelHinting;
  };
  PolylineShape.prototype.component7 = function () {
    return this.scaleMode;
  };
  PolylineShape.prototype.component8 = function () {
    return this.startCaps;
  };
  PolylineShape.prototype.component9 = function () {
    return this.endCaps;
  };
  PolylineShape.prototype.component10 = function () {
    return this.lineJoin;
  };
  PolylineShape.prototype.component11 = function () {
    return this.miterLimit;
  };
  PolylineShape.prototype.copy_azokq0$ = function (path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, lineJoin, miterLimit) {
    return new PolylineShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform, thickness === void 0 ? this.thickness : thickness, pixelHinting === void 0 ? this.pixelHinting : pixelHinting, scaleMode === void 0 ? this.scaleMode : scaleMode, startCaps === void 0 ? this.startCaps : startCaps, endCaps === void 0 ? this.endCaps : endCaps, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit);
  };
  PolylineShape.prototype.toString = function () {
    return 'PolylineShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + (', thickness=' + Kotlin.toString(this.thickness)) + (', pixelHinting=' + Kotlin.toString(this.pixelHinting)) + (', scaleMode=' + Kotlin.toString(this.scaleMode)) + (', startCaps=' + Kotlin.toString(this.startCaps)) + (', endCaps=' + Kotlin.toString(this.endCaps)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + ')';
  };
  PolylineShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.thickness) | 0;
    result = result * 31 + Kotlin.hashCode(this.pixelHinting) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.endCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    return result;
  };
  PolylineShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.thickness, other.thickness) && Kotlin.equals(this.pixelHinting, other.pixelHinting) && Kotlin.equals(this.scaleMode, other.scaleMode) && Kotlin.equals(this.startCaps, other.startCaps) && Kotlin.equals(this.endCaps, other.endCaps) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit)))));
  };
  function CompoundShape(components) {
    this.components = components;
  }
  CompoundShape.prototype.addBounds_w97n1m$ = function (bb) {
    var $receiver = this.components;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).addBounds_w97n1m$(bb);
    }
  };
  CompoundShape.prototype.draw_vuz2tk$ = function (c) {
    c.rendererBufferingStart();
    try {
      var $receiver = this.components;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).draw_vuz2tk$(c);
      }
    }
    finally {
      c.rendererBufferingEnd();
    }
  };
  CompoundShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var $receiver = this.components;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).buildSvg_b7xfbk$(svg);
    }
  };
  CompoundShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var $receiver = this.components;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.containsPoint_lu1900$(x, y)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  CompoundShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompoundShape',
    interfaces: [Shape]
  };
  function TextShape(text, x, y, font, clip, fill, stroke, halign, valign, transform) {
    if (halign === void 0)
      halign = Context2d$HorizontalAlign$LEFT_getInstance();
    if (valign === void 0)
      valign = Context2d$VerticalAlign$TOP_getInstance();
    if (transform === void 0)
      transform = new Matrix();
    this.text = text;
    this.x = x;
    this.y = y;
    this.font = font;
    this.clip_bwzctl$_0 = clip;
    this.fill = fill;
    this.stroke = stroke;
    this.halign = halign;
    this.valign = valign;
    this.transform_fri0v$_0 = transform;
  }
  Object.defineProperty(TextShape.prototype, 'clip', {
    get: function () {
      return this.clip_bwzctl$_0;
    }
  });
  Object.defineProperty(TextShape.prototype, 'transform', {
    get: function () {
      return this.transform_fri0v$_0;
    }
  });
  Object.defineProperty(TextShape.prototype, 'paint', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.fill) != null ? tmp$ : this.stroke) != null ? tmp$_0 : Context2d$None_getInstance();
    }
  });
  TextShape.prototype.addBounds_w97n1m$ = function (bb) {
    bb.add_lu1900$(this.x, this.y);
    bb.add_lu1900$(this.x + this.font.size * this.text.length, this.y + this.font.size);
  };
  TextShape.prototype.drawInternal_vuz2tk$ = function (c) {
    var font = this.font;
    var halign = this.halign;
    var valign = this.valign;
    var oldFont = c.font;
    var oldHalign = c.horizontalAlign;
    var oldValign = c.verticalAlign;
    try {
      if (font != null)
        c.font = font;
      if (halign != null)
        c.horizontalAlign = halign;
      if (valign != null)
        c.verticalAlign = valign;
      if (this.fill != null) {
        var text = this.text;
        var x = this.x;
        var y = this.y;
        c.renderText_a7koit$(text, numberToDouble(x), numberToDouble(y), true);
      }
      if (this.stroke != null) {
        var text_0 = this.text;
        var x_0 = this.x;
        var y_0 = this.y;
        c.renderText_a7koit$(text_0, numberToDouble(x_0), numberToDouble(y_0), false);
      }
    }
    finally {
      c.font = oldFont;
      c.horizontalAlign = oldHalign;
      c.verticalAlign = oldValign;
    }
  };
  TextShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$;
    tmp$ = svg.nodes;
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    tmp$_13 = Xml_0.Companion;
    tmp$_0 = to('x', this.x);
    tmp$_1 = to('y', this.y);
    tmp$_4 = to('fill', (tmp$_3 = (tmp$_2 = this.fill) != null ? toSvg_3(tmp$_2, svg) : null) != null ? tmp$_3 : 'none');
    tmp$_7 = to('stroke', (tmp$_6 = (tmp$_5 = this.stroke) != null ? toSvg_3(tmp$_5, svg) : null) != null ? tmp$_6 : 'none');
    tmp$_8 = to('font-family', this.font.name);
    tmp$_9 = to('font-size', this.font.size.toString() + 'px');
    switch (this.halign.name) {
      case 'LEFT':
        tmp$_10 = 'start';
        break;
      case 'CENTER':
        tmp$_10 = 'middle';
        break;
      case 'RIGHT':
        tmp$_10 = 'end';
        break;
      default:tmp$_10 = Kotlin.noWhenBranchMatched();
        break;
    }
    tmp$_11 = to('text-anchor', tmp$_10);
    switch (this.valign.name) {
      case 'TOP':
        tmp$_12 = 'hanging';
        break;
      case 'MIDDLE':
        tmp$_12 = 'middle';
        break;
      case 'BASELINE':
        tmp$_12 = 'baseline';
        break;
      case 'BOTTOM':
        tmp$_12 = 'bottom';
        break;
      default:tmp$_12 = Kotlin.noWhenBranchMatched();
        break;
    }
    var element = tmp$_13.Tag_imnfz6$('text', mapOf([tmp$_0, tmp$_1, tmp$_4, tmp$_7, tmp$_8, tmp$_9, tmp$_11, to('alignment-baseline', tmp$_12), to('transform', toSvg(this.transform))]), listOf_0(Xml_0.Companion.Text_61zpoe$(this.text)));
    tmp$.add_11rb$(element);
  };
  TextShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextShape',
    interfaces: [StyledShape]
  };
  var buildShape = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.buildShape_f9sr8c$', wrapFunction(function () {
    var ShapeBuilder_init = _.com.soywiz.korim.vector.ShapeBuilder;
    return function (width, height, builder) {
      if (width === void 0)
        width = 256;
      if (height === void 0)
        height = 256;
      var $receiver = new ShapeBuilder_init(width, height);
      builder($receiver);
      return $receiver.buildShape();
    };
  }));
  function ShapeBuilder(width, height) {
    Context2d.call(this, Context2d$Renderer$Companion_getInstance().DUMMY);
    this.rendererWidth_jix0ni$_0 = width;
    this.rendererHeight_p3b245$_0 = height;
    this.shapes = ArrayList_init_0();
  }
  Object.defineProperty(ShapeBuilder.prototype, 'rendererWidth', {
    get: function () {
      return this.rendererWidth_jix0ni$_0;
    }
  });
  Object.defineProperty(ShapeBuilder.prototype, 'rendererHeight', {
    get: function () {
      return this.rendererHeight_p3b245$_0;
    }
  });
  ShapeBuilder.prototype.rendererRender_w64o9o$ = function (state, fill) {
    if (isEmpty(state.path))
      return;
    if (fill) {
      var tmp$;
      tmp$ = this.shapes;
      var tmp$_0, tmp$_1;
      var element = new FillShape((tmp$_0 = state.path) != null ? tmp$_0.clone() : null, (tmp$_1 = state.clip) != null ? tmp$_1.clone() : null, state.fillStyle, state.transform.clone());
      tmp$.add_11rb$(element);
    }
     else {
      var tmp$_2;
      tmp$_2 = this.shapes;
      var tmp$_3;
      var element_0 = new PolylineShape(state.path.clone(), (tmp$_3 = state.clip) != null ? tmp$_3.clone() : null, state.strokeStyle, state.transform.clone(), state.lineWidth, true, state.lineScaleMode, state.startLineCap, state.endLineCap, state.lineJoin, state.miterLimit);
      tmp$_2.add_11rb$(element_0);
    }
    Context2d.prototype.rendererRender_w64o9o$.call(this, state, fill);
  };
  ShapeBuilder.prototype.rendererRenderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    var tmp$;
    tmp$ = this.shapes;
    var tmp$_0;
    var element = new TextShape(text, x, y, font, (tmp$_0 = state.clip) != null ? tmp$_0.clone() : null, fill ? state.fillStyle : null, fill ? null : state.strokeStyle, state.horizontalAlign, state.verticalAlign, state.transform.clone());
    tmp$.add_11rb$(element);
  };
  ShapeBuilder.prototype.rendererDrawImage_dfapkx$$default = function (image, x, y, width, height, transform) {
    var tmp$ = void 0;
    var $receiver = new GraphicsPath();
    rect($receiver, x, y, width, height);
    this.rendererRender_w64o9o$(new Context2d$State(transform, tmp$, $receiver, void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Context2d$BitmapPaint(image, (new Matrix()).scale_lu1900$(width / image.width, height / image.height).translate_lu1900$(numberToDouble(x), numberToDouble(y)))), true);
  };
  ShapeBuilder.prototype.rendererDispose = function () {
  };
  ShapeBuilder.prototype.rendererBufferingStart = function () {
    return 0;
  };
  ShapeBuilder.prototype.rendererBufferingEnd = function () {
  };
  ShapeBuilder.prototype.rendererGetBounds_qlucl1$ = function (font, text, out) {
    Context2d.prototype.rendererGetBounds_qlucl1$.call(this, font, text, out);
  };
  ShapeBuilder.prototype.clear = function () {
    this.state.clone();
    this.shapes.clear();
  };
  ShapeBuilder.prototype.buildShape = function () {
    return new CompoundShape(toList(this.shapes));
  };
  ShapeBuilder.prototype.draw_vuz2tk$ = function (c) {
    c.draw_ywv3s4$(this.buildShape());
  };
  ShapeBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeBuilder',
    interfaces: [Context2d$Drawable, Context2d]
  };
  function Chart() {
  }
  Chart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chart',
    interfaces: [Context2d$Drawable]
  };
  function ChartBars(list) {
    ChartBars$Companion_getInstance();
    Chart.call(this);
    this.list = list;
    var tmp$;
    var $receiver = this.list;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.localMaxValue);
    }
    this.maxValue = (tmp$ = max(destination)) != null ? tmp$ : 0.0;
    var x = this.maxValue;
    var x_0 = Math_0.log10(x);
    var x_1 = Math_0.floor(x_0);
    this.chartStep = Math_0.pow(10.0, x_1) / 2.0;
    var x_2 = this.maxValue / this.chartStep;
    this.rMaxValue = Math_0.ceil(x_2) * this.chartStep;
    this.colors = listOf([Colors_getInstance().get_61zpoe$('#5485ec'), Colors_getInstance().GREEN, Colors_getInstance().BLUE, Colors_getInstance().AZURE, Colors_getInstance().CHARTREUSE, Colors_getInstance().CADETBLUE]);
    this.count = 0;
  }
  function ChartBars$Companion() {
    ChartBars$Companion_instance = this;
  }
  ChartBars$Companion.prototype.invoke_jnqutm$ = function (items) {
    var destination = ArrayList_init(items.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      destination.add_11rb$(new ChartBars$DataPoint(item.first, listOf_0(numberToDouble(item.second))));
    }
    return new ChartBars(destination);
  };
  ChartBars$Companion.prototype.fromPoints_s2nmi9$ = function (items) {
    var destination = ArrayList_init(items.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1 = item.first;
      var $receiver = item.second;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_0.add_11rb$(numberToDouble(item_0));
      }
      tmp$_0.call(destination, new ChartBars$DataPoint(tmp$_1, destination_0));
    }
    return new ChartBars(destination);
  };
  ChartBars$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChartBars$Companion_instance = null;
  function ChartBars$Companion_getInstance() {
    if (ChartBars$Companion_instance === null) {
      new ChartBars$Companion();
    }
    return ChartBars$Companion_instance;
  }
  function ChartBars$DataPoint(name, values) {
    this.name = name;
    this.values = values;
    var tmp$;
    this.localMaxValue = (tmp$ = max(this.values)) != null ? tmp$ : 0.0;
  }
  ChartBars$DataPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataPoint',
    interfaces: []
  };
  ChartBars$DataPoint.prototype.component1 = function () {
    return this.name;
  };
  ChartBars$DataPoint.prototype.component2 = function () {
    return this.values;
  };
  ChartBars$DataPoint.prototype.copy_bijrlx$ = function (name, values) {
    return new ChartBars$DataPoint(name === void 0 ? this.name : name, values === void 0 ? this.values : values);
  };
  ChartBars$DataPoint.prototype.toString = function () {
    return 'DataPoint(name=' + Kotlin.toString(this.name) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  ChartBars$DataPoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  ChartBars$DataPoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.values, other.values)))));
  };
  ChartBars.prototype.draw_vuz2tk$ = function (c) {
    this.renderChart_6rdc61$(c);
  };
  ChartBars.prototype.renderLine_aioipf$_0 = function ($receiver, x0, y0, x1, y1, color, width) {
    if (width === void 0)
      width = 1.2;
    $receiver.lineWidth = width;
    $receiver.beginPath();
    $receiver.moveTo_lu1900$(x0, y0);
    $receiver.lineTo_lu1900$(x1, y1);
    $receiver.stroke_i8h3xk$($receiver.createColor_md34sx$(color));
  };
  ChartBars.prototype.renderRefLine_zakt03$_0 = function ($receiver, rect, y, value, important) {
    var x = rect.left;
    this.renderLine_aioipf$_0($receiver, x, y, rect.right, y, important ? Colors_getInstance().BLACK : Colors_getInstance().DARKGREY);
    var x_0 = x - 2;
    var halign = Context2d$HorizontalAlign$RIGHT_getInstance();
    var valign = Context2d$VerticalAlign$BOTTOM_getInstance();
    var color = Colors_getInstance().DARKGREY;
    var oldFont = $receiver.font;
    var oldHalign = $receiver.horizontalAlign;
    var oldValign = $receiver.verticalAlign;
    try {
      if (null != null)
        $receiver.font = null;
      if (halign != null)
        $receiver.horizontalAlign = halign;
      if (valign != null)
        $receiver.verticalAlign = valign;
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = color != null ? $receiver.createColor_md34sx$(color) : null) != null ? tmp$ : $receiver.fillStyle;
      var oldStyle = $receiver.fillStyle;
      $receiver.fillStyle = tmp$_0;
      try {
        $receiver.renderText_a7koit$(value, numberToDouble(x_0), numberToDouble(y), true);
      }
      finally {
        $receiver.fillStyle = oldStyle;
      }
    }
    finally {
      $receiver.font = oldFont;
      $receiver.horizontalAlign = oldHalign;
      $receiver.verticalAlign = oldValign;
    }
  };
  ChartBars.prototype.get_ratio_syzv5q$ = function ($receiver) {
    return first_0($receiver.values) / this.maxValue;
  };
  ChartBars.prototype.get_rRatio_syzv5q$ = function ($receiver) {
    return first_0($receiver.values) / this.rMaxValue;
  };
  ChartBars.prototype.renderReferenceLines_uzxjb5$_0 = function ($receiver, rect) {
    for (var n = 0; n < 5; n++) {
      var ratio = n / 4;
      this.renderRefLine_zakt03$_0($receiver, rect, rect.bottom - 1 - (rect.height - 1) * ratio, removeSuffix((ratio * this.rMaxValue).toString(), '.0'), n === 0);
    }
  };
  function ChartBars$Fit(name, ordinal, angle) {
    Enum.call(this);
    this.angle = angle;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ChartBars$Fit_initFields() {
    ChartBars$Fit_initFields = function () {
    };
    ChartBars$Fit$FULL_instance = new ChartBars$Fit('FULL', 0, 0.0);
    ChartBars$Fit$DEG45_instance = new ChartBars$Fit('DEG45', 1, -45.0);
    ChartBars$Fit$DEG90_instance = new ChartBars$Fit('DEG90', 2, -90.0);
  }
  var ChartBars$Fit$FULL_instance;
  function ChartBars$Fit$FULL_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$FULL_instance;
  }
  var ChartBars$Fit$DEG45_instance;
  function ChartBars$Fit$DEG45_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$DEG45_instance;
  }
  var ChartBars$Fit$DEG90_instance;
  function ChartBars$Fit$DEG90_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$DEG90_instance;
  }
  ChartBars$Fit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fit',
    interfaces: [Enum]
  };
  function ChartBars$Fit$values() {
    return [ChartBars$Fit$FULL_getInstance(), ChartBars$Fit$DEG45_getInstance(), ChartBars$Fit$DEG90_getInstance()];
  }
  ChartBars$Fit.values = ChartBars$Fit$values;
  function ChartBars$Fit$valueOf(name) {
    switch (name) {
      case 'FULL':
        return ChartBars$Fit$FULL_getInstance();
      case 'DEG45':
        return ChartBars$Fit$DEG45_getInstance();
      case 'DEG90':
        return ChartBars$Fit$DEG90_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.chart.ChartBars.Fit.' + name);
    }
  }
  ChartBars$Fit.valueOf_61zpoe$ = ChartBars$Fit$valueOf;
  ChartBars.prototype.renderBars_fdk1js$ = function ($receiver, rect) {
    var tmp$, tmp$_0;
    var barWidth = rect.width / (this.list.size * 1.5 + 0.5);
    var barLeft = barWidth * 0.5;
    var barSpace = barWidth * 1.5;
    this.renderReferenceLines_uzxjb5$_0($receiver, rect);
    var $receiver_0 = this.list;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var transform$result;
      var bounds = $receiver.getTextBounds_jznmvy$(item.name);
      if (bounds.bounds.width > barWidth * 2.0) {
        transform$result = ChartBars$Fit$DEG90_getInstance();
      }
       else if (bounds.bounds.width > barWidth) {
        transform$result = ChartBars$Fit$DEG45_getInstance();
      }
       else {
        transform$result = ChartBars$Fit$FULL_getInstance();
      }
      tmp$_2.call(destination, transform$result);
    }
    var fit = (tmp$ = max_0(destination)) != null ? tmp$ : ChartBars$Fit$FULL_getInstance();
    tmp$_0 = this.list;
    for (var n = 0; n !== tmp$_0.size; ++n) {
      var item_0 = this.list.get_za3lpa$(n);
      var rx = rect.left + barLeft + barSpace * n;
      var paint = $receiver.createColor_md34sx$(this.colors.get_za3lpa$(0));
      var oldStyle = $receiver.fillStyle;
      $receiver.fillStyle = paint;
      try {
        $receiver.fillRect_6y0v78$(rx, rect.bottom - 1, barWidth, -rect.height * this.get_rRatio_syzv5q$(item_0));
      }
      finally {
        $receiver.fillStyle = oldStyle;
      }
      $receiver.save();
      try {
        $receiver.translate_lu1900$(rx + barWidth * 0.5, rect.bottom + 4);
        $receiver.rotateDeg_14dthe$(fit.angle);
        var text = item_0.name;
        var halign = fit === ChartBars$Fit$FULL_getInstance() ? Context2d$HorizontalAlign$CENTER_getInstance() : Context2d$HorizontalAlign$RIGHT_getInstance();
        var valign = Context2d$VerticalAlign$MIDDLE_getInstance();
        var color = Colors_getInstance().DARKSLATEGRAY;
        var oldFont = $receiver.font;
        var oldHalign = $receiver.horizontalAlign;
        var oldValign = $receiver.verticalAlign;
        try {
          if (null != null)
            $receiver.font = null;
          if (halign != null)
            $receiver.horizontalAlign = halign;
          if (valign != null)
            $receiver.verticalAlign = valign;
          var tmp$_3, tmp$_4;
          tmp$_4 = (tmp$_3 = color != null ? $receiver.createColor_md34sx$(color) : null) != null ? tmp$_3 : $receiver.fillStyle;
          var oldStyle_0 = $receiver.fillStyle;
          $receiver.fillStyle = tmp$_4;
          try {
            $receiver.renderText_a7koit$(text, numberToDouble(0), numberToDouble(0), true);
          }
          finally {
            $receiver.fillStyle = oldStyle_0;
          }
        }
        finally {
          $receiver.font = oldFont;
          $receiver.horizontalAlign = oldHalign;
          $receiver.verticalAlign = oldValign;
        }
      }
      finally {
        $receiver.restore();
      }
    }
  };
  ChartBars.prototype.renderChart_6rdc61$ = function ($receiver) {
    var b = $receiver.width * 0.1;
    var hpadding = Math_0.min(64.0, b);
    var b_0 = $receiver.height * 0.1;
    var vpadding = Math_0.min(64.0, b_0);
    var right = $receiver.width - hpadding;
    var bottom = $receiver.height - vpadding;
    this.renderBars_fdk1js$($receiver, (new Rectangle(0.0, 0.0, 0.0, 0.0)).setBounds_6y0v78$(numberToDouble(hpadding), numberToDouble(vpadding), numberToDouble(right), numberToDouble(bottom)));
  };
  ChartBars.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChartBars',
    interfaces: [Chart]
  };
  function SVG_0(root, warningProcessor) {
    SVG$Companion_getInstance();
    if (warningProcessor === void 0)
      warningProcessor = null;
    this.root = root;
    this.warningProcessor = warningProcessor;
    this.x = this.root.int_bm4lxs$('x', 0);
    this.y = this.root.int_bm4lxs$('y', 0);
    this.dwidth = this.root.double_io5o9c$('width', 128.0);
    this.dheight = this.root.double_io5o9c$('height', 128.0);
    var tmp$;
    this.viewBox = (tmp$ = this.root.getString_61zpoe$('viewBox')) != null ? tmp$ : '0 0 ' + this.dwidth + ' ' + this.dheight;
    var $receiver = split_0(this.viewBox, Kotlin.charArrayOf(32));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      var tmp$_2;
      destination.add_11rb$((tmp$_1 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString())) != null ? tmp$_1 : 0.0);
    }
    this.viewBoxNumbers = destination;
    var $receiver_0 = this.viewBoxNumbers;
    var $receiver_1 = this.viewBoxNumbers;
    var $receiver_2 = this.viewBoxNumbers;
    var $receiver_3 = this.viewBoxNumbers;
    this.viewBoxRectangle = new Rectangle(0 >= 0 && 0 <= get_lastIndex($receiver_0) ? $receiver_0.get_za3lpa$(0) : 0.0, 1 >= 0 && 1 <= get_lastIndex($receiver_1) ? $receiver_1.get_za3lpa$(1) : 0.0, 2 >= 0 && 2 <= get_lastIndex($receiver_2) ? $receiver_2.get_za3lpa$(2) : this.dwidth, 3 >= 0 && 3 <= get_lastIndex($receiver_3) ? $receiver_3.get_za3lpa$(3) : this.dheight);
    this.defs = HashMap_init();
    this.parseDefs();
  }
  Object.defineProperty(SVG_0.prototype, 'width', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.width);
    }
  });
  Object.defineProperty(SVG_0.prototype, 'height', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.height);
    }
  });
  function SVG$Style() {
    this.props = HashMap_init();
  }
  SVG$Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: []
  };
  function SVG$GradientUnits(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SVG$GradientUnits_initFields() {
    SVG$GradientUnits_initFields = function () {
    };
    SVG$GradientUnits$USER_SPACE_ON_USER_instance = new SVG$GradientUnits('USER_SPACE_ON_USER', 0);
    SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance = new SVG$GradientUnits('OBJECT_BOUNDING_BOX', 1);
  }
  var SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  function SVG$GradientUnits$USER_SPACE_ON_USER_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  }
  var SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  function SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  }
  SVG$GradientUnits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientUnits',
    interfaces: [Enum]
  };
  function SVG$GradientUnits$values() {
    return [SVG$GradientUnits$USER_SPACE_ON_USER_getInstance(), SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance()];
  }
  SVG$GradientUnits.values = SVG$GradientUnits$values;
  function SVG$GradientUnits$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USER':
        return SVG$GradientUnits$USER_SPACE_ON_USER_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.format.SVG.GradientUnits.' + name);
    }
  }
  SVG$GradientUnits.valueOf_61zpoe$ = SVG$GradientUnits$valueOf;
  SVG_0.prototype.parsePercent_61zpoe$ = function (str) {
    var tmp$;
    if (endsWith(str, '%')) {
      tmp$ = toDouble(substr_0(str, 0, -1)) / 100.0;
    }
     else {
      tmp$ = toDouble(str);
    }
    return tmp$;
  };
  SVG_0.prototype.parseStops_473e7m$ = function (xml) {
    var tmp$;
    var out = ArrayList_init_0();
    tmp$ = xml.children_61zpoe$('stop').iterator();
    while (tmp$.hasNext()) {
      var stop = tmp$.next();
      var offset = this.parsePercent_61zpoe$(stop.str_puj7f4$('offset'));
      var colorStop = Colors$Default_getInstance().get_61zpoe$(stop.str_puj7f4$('stop-color'));
      var alphaStop = stop.double_io5o9c$('stop-opacity', 1.0);
      var element = new Pair(offset, RGBA$Companion_getInstance().invoke_vux9f0$(colorStop.rgb, numberToInt(alphaStop * 255)));
      out.add_11rb$(element);
    }
    return out;
  };
  SVG_0.prototype.parseDef_473e7m$ = function (def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var type = def.nameLC;
    switch (type) {
      case 'lineargradient':
      case 'radialgradient':
        var id = def.str_puj7f4$('id').toLowerCase();
        var x0 = def.double_io5o9c$('x1', 0.0);
        var y0 = def.double_io5o9c$('y1', 0.0);
        var x1 = def.double_io5o9c$('x2', 1.0);
        var y1 = def.double_io5o9c$('y2', 1.0);
        var stops = this.parseStops_473e7m$(def);
        var href = def.strNull_61zpoe$('xlink:href');
        if (equals(type, 'lineargradient')) {
          tmp$ = new Context2d$Gradient(Context2d$Gradient$Kind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
        }
         else {
          var r0 = def.double_io5o9c$('r0', 0.0);
          var r1 = def.double_io5o9c$('r1', 0.0);
          tmp$ = new Context2d$Gradient(Context2d$Gradient$Kind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
        }

        var g = tmp$;
        if ((tmp$_0 = def.strNull_61zpoe$('xlink:href')) != null) {
          var tmp$_3;
          var id_0 = trim_0(tmp$_0, Kotlin.charArrayOf(35));
          var original = (tmp$_3 = this.defs.get_11rb$(id_0)) == null || Kotlin.isType(tmp$_3, Context2d$Gradient) ? tmp$_3 : null;
          if (original != null) {
            g.stops.add_avch8c$(original.stops);
            g.colors.add_38vc8i$(original.colors);
          }
        }

        tmp$_1 = stops.iterator();
        while (tmp$_1.hasNext()) {
          var tmp$_4 = tmp$_1.next();
          var offset = tmp$_4.component1()
          , color = tmp$_4.component2();
          g.addColorStop_ycmdr1$(offset, color);
        }

        if ((tmp$_2 = def.getString_61zpoe$('gradientTransform')) != null) {
          g.transform.premultiply_onv4sa$(this.parseTransform_61zpoe$(tmp$_2));
        }

        this.defs.put_xwzc9p$(id, g);
        break;
      case 'style':
        break;
      case '_text_':
        break;
      default:println("Unhandled def: '" + type + "'");
        break;
    }
  };
  SVG_0.prototype.parseDefs = function () {
    var tmp$;
    var $receiver = get_allChildren(this.root.get_61zpoe$('defs'));
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!get_isComment(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var def = tmp$.next();
      this.parseDef_473e7m$(def);
    }
  };
  SVG_0.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      c.strokeStyle = Context2d$None_getInstance();
      c.fillStyle = Context2d$None_getInstance();
      this.drawElement_97uusy$(this.root, c);
    }
    finally {
      c.restore();
    }
  };
  SVG_0.prototype.drawChildren_97uusy$ = function (xml, c) {
    var tmp$;
    tmp$ = xml.allChildren.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      this.drawElement_97uusy$(child, c);
    }
  };
  SVG_0.prototype.parseFillStroke_vgfctv$ = function (c, str2, bounds) {
    var tmp$, tmp$_0;
    var $receiver = str2.toLowerCase();
    var tmp$_1;
    var str = trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString();
    if (startsWith(str, 'url(')) {
      var urlPattern = substr_0(str, 4, -1);
      if (startsWith(urlPattern, '#')) {
        var idName = substr(urlPattern, 1).toLowerCase();
        var def = this.defs.get_11rb$(idName);
        if (def == null) {
          println(this.defs);
          println("Can't find svg definition '" + idName + "'");
        }
        tmp$ = def != null ? def : c.none;
      }
       else {
        println('Unsupported ' + str);
        tmp$ = c.none;
      }
    }
     else if (startsWith(str, 'rgba(')) {
      var $receiver_0 = split(removeSuffix(removePrefix(str, 'rgba('), ')'), [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3;
        var tmp$_4;
        destination.add_11rb$((tmp$_3 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_4 = item) ? tmp$_4 : throwCCE()).toString())) != null ? tmp$_3 : 0.0);
      }
      var components = destination;
      tmp$ = new Context2d$Color(RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(components.get_za3lpa$(0)), numberToInt(components.get_za3lpa$(1)), numberToInt(components.get_za3lpa$(2)), numberToInt(components.get_za3lpa$(3) * 255)));
    }
     else {
      if (equals(str, 'none'))
        tmp$ = c.none;
      else
        tmp$ = c.createColor_md34sx$(Colors$Default_getInstance().get_61zpoe$(str));
    }
    var res = tmp$;
    if (Kotlin.isType(res, Context2d$Gradient)) {
      var m = new Matrix();
      m.scale_lu1900$(bounds.width, bounds.height);
      var out = res.applyMatrix_1ktkmn$(m);
      tmp$_0 = out;
    }
     else {
      tmp$_0 = res;
    }
    return tmp$_0;
  };
  function SVG$drawElement$lambda$lambda(closure$ss) {
    return function (it) {
      return closure$ss.hasMore;
    };
  }
  function SVG$drawElement$lambda$lambda_0(closure$ss) {
    return function (it) {
      var $this = closure$ss;
      while (true) {
        var tmp$ = $this.hasMore;
        if (tmp$) {
          tmp$ = !get_isNumeric(unboxChar($this.peekChar()));
        }
        if (!tmp$)
          break;
        $this.readChar();
      }
      var $this_0 = closure$ss;
      var tmp$_0;
      var start = $this_0.pos;
      while (true) {
        var tmp$_1 = $this_0.hasMore;
        if (tmp$_1) {
          tmp$_1 = get_isNumeric(unboxChar($this_0.peekChar()));
        }
        if (!tmp$_1)
          break;
        $this_0.readChar();
      }
      var end = $this_0.pos;
      var out = toDouble((tmp$_0 = end > start ? $this_0.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '');
      var $this_1 = closure$ss;
      while (true) {
        var tmp$_2 = $this_1.hasMore;
        if (tmp$_2) {
          tmp$_2 = !get_isNumeric(unboxChar($this_1.peekChar()));
        }
        if (!tmp$_2)
          break;
        $this_1.readChar();
      }
      return out;
    };
  }
  function SVG$drawElement$lambda$dumpTokens(closure$tokens, this$SVG, this$) {
    return function () {
      var closure$tokens_0 = closure$tokens;
      var this$SVG_0 = this$SVG;
      var n = 0;
      for (var tmp$ = closure$tokens_0.iterator(); tmp$.hasNext(); ++n) {
        var token = tmp$.next();
        var tmp$_0;
        (tmp$_0 = this$SVG_0.warningProcessor) != null ? tmp$_0('- ' + n + ': ' + token) : null;
      }
    };
  }
  function SVG$drawElement$lambda$isNextNumber(closure$tl) {
    return function () {
      return closure$tl.hasMore ? Kotlin.isType(closure$tl.peek(), SVG$PathTokenNumber) : false;
    };
  }
  function SVG$drawElement$lambda$readNumber(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      var tmp$;
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenNumber))
          return token.value;
        (tmp$ = this$SVG.warningProcessor) != null ? tmp$('Invalid path (expected number but found ' + token + ') at ' + (closure$tl.position - 1 | 0)) : null;
        closure$dumpTokens();
      }
      return 0.0;
    };
  }
  function SVG$drawElement$lambda$readNextTokenCmd(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      var tmp$;
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenCmd))
          return unboxChar(token.id);
        (tmp$ = this$SVG.warningProcessor) != null ? tmp$('Invalid path (expected command but found ' + token + ') at ' + (closure$tl.position - 1 | 0)) : null;
        closure$dumpTokens();
      }
      return null;
    };
  }
  SVG_0.prototype.drawElement_97uusy$ = function (xml, c) {
    c.save();
    try {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var bounds = new Rectangle(0.0, 0.0, 0.0, 0.0);
      var nodeName = xml.nameLC;
      switch (nodeName) {
        case '_text_':
          break;
        case 'svg':
          this.drawChildren_97uusy$(xml, c);
          break;
        case 'lineargradient':
        case 'radialgradient':
          this.parseDef_473e7m$(xml);
          break;
        case 'rect':
          var x = xml.double_io5o9c$('x');
          var y = xml.double_io5o9c$('y');
          var width = xml.double_io5o9c$('width');
          var height = xml.double_io5o9c$('height');
          var rx = xml.double_io5o9c$('rx');
          var ry = xml.double_io5o9c$('ry');
          bounds.setTo_6y0v78$(x, y, width, height);
          roundRect(c, x, y, width, height, rx, ry);
          break;
        case 'circle':
          var cx = xml.double_io5o9c$('cx');
          var cy = xml.double_io5o9c$('cy');
          var radius = xml.double_io5o9c$('r');
          circle(c, cx, cy, radius);
          bounds.setBounds_6y0v78$(cx - radius, cy - radius, cx + radius, cy + radius);
          break;
        case 'polyline':
        case 'polygon':
          c.beginPath();
          var ss = new StrReader(xml.str_puj7f4$('points'));
          var $receiver = ArrayList_init_0();
          while (SVG$drawElement$lambda$lambda(ss)($receiver.size)) {
            var element = SVG$drawElement$lambda$lambda_0(ss)($receiver.size);
            $receiver.add_11rb$(element);
          }

          var pps = new ListReader(toList($receiver));
          var path = new GraphicsPath();
          var edges = 0;
          path.moveTo_lu1900$(pps.read(), pps.read());
          while (pps.hasMore) {
            var x_0 = pps.read();
            var y_0 = pps.read();
            path.lineTo_lu1900$(x_0, y_0);
            edges = edges + 1 | 0;
          }

          if (equals(nodeName, 'polygon'))
            path.close();
          path.getBounds_iqjpvb$(bounds);
          c.path_lcui0n$(path);
          break;
        case 'line':
          c.beginPath();
          var x1 = xml.double_io5o9c$('x1');
          var y1 = xml.double_io5o9c$('y1');
          var x2 = xml.double_io5o9c$('x2');
          var y2 = xml.double_io5o9c$('y2');
          c.moveTo_lu1900$(x1, y1);
          c.lineTo_lu1900$(x2, y2);
          bounds.setBounds_6y0v78$(x1, y1, x2, y2);
          break;
        case 'g':
          break;
        case 'text':
          break;
        case 'path':
          var d = xml.str_puj7f4$('d');
          var tokens = SVG$Companion_getInstance().tokenizePath_61zpoe$(d);
          var tl = new ListReader(tokens);
          var dumpTokens = SVG$drawElement$lambda$dumpTokens(tokens, this, c);
          var isNextNumber = SVG$drawElement$lambda$isNextNumber(tl);
          var readNumber = SVG$drawElement$lambda$readNumber(tl, this, dumpTokens);
          var readNextTokenCmd = SVG$drawElement$lambda$readNextTokenCmd(tl, this, dumpTokens);
          c.beginPath();
          while (tl.hasMore) {
            tmp$ = readNextTokenCmd();
            if (tmp$ == null) {
              break;
            }
            var cmd = tmp$;
            switch (cmd) {
              case 77:
                c.moveTo_lu1900$(readNumber(), readNumber());
                while (isNextNumber())
                  c.lineTo_lu1900$(readNumber(), readNumber());
                break;
              case 109:
                var x_1 = readNumber();
                var y_1 = readNumber();
                c.moveTo_lu1900$(c.lastX + numberToDouble(x_1), c.lastY + numberToDouble(y_1));
                while (isNextNumber()) {
                  var x_2 = readNumber();
                  var y_2 = readNumber();
                  c.lineTo_lu1900$(c.lastX + numberToDouble(x_2), c.lastY + numberToDouble(y_2));
                }

                break;
              case 76:
                while (isNextNumber())
                  c.lineTo_lu1900$(readNumber(), readNumber());
                break;
              case 108:
                while (isNextNumber()) {
                  var x_3 = readNumber();
                  var y_3 = readNumber();
                  c.lineTo_lu1900$(c.lastX + numberToDouble(x_3), c.lastY + numberToDouble(y_3));
                }

                break;
              case 72:
                while (isNextNumber()) {
                  var x_4 = readNumber();
                  var y_4 = c.lastY;
                  c.lineTo_lu1900$(numberToDouble(x_4), numberToDouble(y_4));
                }

                break;
              case 104:
                while (isNextNumber()) {
                  var x_5 = readNumber();
                  c.lineTo_lu1900$(c.lastX + numberToDouble(x_5), c.lastY);
                }

                break;
              case 86:
                while (isNextNumber()) {
                  var y_5 = readNumber();
                  c.lineTo_lu1900$(numberToDouble(c.lastX), numberToDouble(y_5));
                }

                break;
              case 118:
                while (isNextNumber()) {
                  var y_6 = readNumber();
                  c.lineTo_lu1900$(c.lastX, c.lastY + numberToDouble(y_6));
                }

                break;
              case 81:
                while (isNextNumber())
                  c.quadTo_6y0v78$(readNumber(), readNumber(), readNumber(), readNumber());
                break;
              case 113:
                while (isNextNumber()) {
                  var cx_0 = readNumber();
                  var cy_0 = readNumber();
                  var ax = readNumber();
                  var ay = readNumber();
                  c.quadTo_6y0v78$(c.lastX + numberToDouble(cx_0), c.lastY + numberToDouble(cy_0), c.lastX + numberToDouble(ax), c.lastY + numberToDouble(ay));
                }

                break;
              case 67:
                while (isNextNumber())
                  c.cubicTo_15yvbs$(readNumber(), readNumber(), readNumber(), readNumber(), readNumber(), readNumber());
                break;
              case 99:
                while (isNextNumber()) {
                  var cx1 = readNumber();
                  var cy1 = readNumber();
                  var cx2 = readNumber();
                  var cy2 = readNumber();
                  var ax_0 = readNumber();
                  var ay_0 = readNumber();
                  c.cubicTo_15yvbs$(c.lastX + numberToDouble(cx1), c.lastY + numberToDouble(cy1), c.lastX + numberToDouble(cx2), c.lastY + numberToDouble(cy2), c.lastX + numberToDouble(ax_0), c.lastY + numberToDouble(ay_0));
                }

                break;
              case 90:
                c.close();
                break;
              case 122:
                c.close();
                break;
              default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Unsupported command '" + String.fromCharCode(cmd) + "' : Parsed: '" + toSvgPathString(c.state.path) + "', Original: '" + d + "'"));
            }
          }

          (tmp$_0 = this.warningProcessor) != null ? tmp$_0("Parsed SVG Path: '" + toSvgPathString(c.state.path) + "'") : null;
          (tmp$_1 = this.warningProcessor) != null ? tmp$_1("Original SVG Path: '" + d + "'") : null;
          (tmp$_2 = this.warningProcessor) != null ? tmp$_2('Points: ' + c.state.path.getPoints()) : null;
          c.getBounds_2da8yn$(bounds);
          break;
      }
      if (xml.hasAttribute_61zpoe$('stroke-width')) {
        c.lineWidth = xml.double_io5o9c$('stroke-width', 1.0);
      }
      if (xml.hasAttribute_61zpoe$('stroke')) {
        c.strokeStyle = this.parseFillStroke_vgfctv$(c, xml.str_puj7f4$('stroke'), bounds);
      }
      if (xml.hasAttribute_61zpoe$('fill'))
        this.applyFill_vgfctv$(c, xml.str_puj7f4$('fill'), bounds);
      if (xml.hasAttribute_61zpoe$('font-size')) {
        c.font = c.font.copy_io5o9c$(void 0, this.parseSizeAsDouble_61zpoe$(xml.str_puj7f4$('font-size')));
      }
      if (xml.hasAttribute_61zpoe$('font-family')) {
        c.font = c.font.copy_io5o9c$(xml.str_puj7f4$('font-family'));
      }
      if (xml.hasAttribute_61zpoe$('style')) {
        this.applyStyle_0(c, SVG$SvgStyle$Companion_getInstance().parse_bodv9c$(xml.str_puj7f4$('style'), this.warningProcessor), bounds);
      }
      if (xml.hasAttribute_61zpoe$('transform')) {
        this.applyTransform_0(c.state, this.parseTransform_61zpoe$(xml.str_puj7f4$('transform')));
      }
      if (xml.hasAttribute_61zpoe$('text-anchor')) {
        var $receiver_0 = xml.str_puj7f4$('text-anchor').toLowerCase();
        var tmp$_5;
        switch (trim(Kotlin.isCharSequence(tmp$_5 = $receiver_0) ? tmp$_5 : throwCCE()).toString()) {
          case 'left':
            tmp$_3 = Context2d$HorizontalAlign$LEFT_getInstance();
            break;
          case 'center':
          case 'middle':
            tmp$_3 = Context2d$HorizontalAlign$CENTER_getInstance();
            break;
          case 'right':
          case 'end':
            tmp$_3 = Context2d$HorizontalAlign$RIGHT_getInstance();
            break;
          default:tmp$_3 = c.horizontalAlign;
            break;
        }
        c.horizontalAlign = tmp$_3;
      }
      if (xml.hasAttribute_61zpoe$('alignment-baseline')) {
        var $receiver_1 = xml.str_puj7f4$('alignment-baseline').toLowerCase();
        var tmp$_6;
        switch (trim(Kotlin.isCharSequence(tmp$_6 = $receiver_1) ? tmp$_6 : throwCCE()).toString()) {
          case 'hanging':
            tmp$_4 = Context2d$VerticalAlign$TOP_getInstance();
            break;
          case 'center':
          case 'middle':
            tmp$_4 = Context2d$VerticalAlign$MIDDLE_getInstance();
            break;
          case 'baseline':
            tmp$_4 = Context2d$VerticalAlign$BASELINE_getInstance();
            break;
          case 'bottom':
            tmp$_4 = Context2d$VerticalAlign$BOTTOM_getInstance();
            break;
          default:tmp$_4 = c.verticalAlign;
            break;
        }
        c.verticalAlign = tmp$_4;
      }
      if (xml.hasAttribute_61zpoe$('fill-opacity')) {
        c.globalAlpha = xml.double_io5o9c$('fill-opacity', 1.0);
      }
      switch (nodeName) {
        case 'g':
          this.drawChildren_97uusy$(xml, c);
          break;
        case 'text':
          var $receiver_2 = xml.text;
          var tmp$_7;
          var text = trim(Kotlin.isCharSequence(tmp$_7 = $receiver_2) ? tmp$_7 : throwCCE()).toString();
          var x_6 = xml.double_io5o9c$('x') + xml.double_io5o9c$('dx');
          var y_7 = xml.double_io5o9c$('y') + xml.double_io5o9c$('dy');
          c.renderText_a7koit$(text, numberToDouble(x_6), numberToDouble(y_7), true);
          break;
      }
      c.fillStroke();
    }
    finally {
      c.restore();
    }
    return c;
  };
  SVG_0.prototype.parseSizeAsDouble_61zpoe$ = function (size) {
    var tmp$;
    var destination = StringBuilder_init();
    var tmp$_0;
    tmp$_0 = size.length;
    for (var index = 0; index < tmp$_0; index++) {
      var element = size.charCodeAt(index);
      var it = toBoxedChar(element);
      if (!(new CharRange(97, 122)).contains_mef7kx$(unboxChar(it)) && !(new CharRange(65, 90)).contains_mef7kx$(unboxChar(it)))
        destination.append_s8itvh$(element);
    }
    return (tmp$ = toDoubleOrNull(destination.toString())) != null ? tmp$ : 16.0;
  };
  SVG_0.prototype.applyFill_vgfctv$ = function (c, str, bounds) {
    c.fillStyle = this.parseFillStroke_vgfctv$(c, str, bounds);
  };
  SVG_0.prototype.applyTransform_0 = function (state, transform) {
    state.transform.premultiply_onv4sa$(transform);
  };
  SVG_0.prototype.applyStyle_0 = function (c, style, bounds) {
    var tmp$, tmp$_0;
    tmp$ = style.styles.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      var v = tmp$_1.value;
      if (equals(k, 'fill'))
        this.applyFill_vgfctv$(c, v, bounds);
      else
        (tmp$_0 = this.warningProcessor) != null ? tmp$_0('Unsupported style ' + k + ' in css') : null;
    }
  };
  function SVG$parseTransform$double(closure$doubleArgs) {
    return function (index) {
      var $receiver = closure$doubleArgs;
      return index >= 0 && index <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(index) : 0.0;
    };
  }
  SVG_0.prototype.parseTransform_61zpoe$ = function (str) {
    var tokens = SVG$SvgStyle$Companion_getInstance().tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var out = new Matrix();
    while (tr.hasMore) {
      var id = tr.read().toLowerCase();
      var args = ArrayList_init_0();
      if (equals(tr.peek(), '(')) {
        tr.read();
        while (true) {
          if (equals(tr.peek(), ')')) {
            tr.read();
            break;
          }
          if (equals(tr.peek(), ',')) {
            tr.read();
            continue;
          }
          var element = tr.read();
          args.add_11rb$(element);
        }
      }
      var destination = ArrayList_init(collectionSizeOrDefault(args, 10));
      var tmp$;
      tmp$ = args.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$((tmp$_0 = toDoubleOrNull(item)) != null ? tmp$_0 : 0.0);
      }
      var doubleArgs = destination;
      var double = SVG$parseTransform$double(doubleArgs);
      switch (id) {
        case 'translate':
          out.pretranslate_lu1900$(double(0), double(1));
          break;
        case 'scale':
          out.prescale_lu1900$(double(0), double(1));
          break;
        case 'matrix':
          out.premultiply_15yvbs$(double(0), double(1), double(2), double(3), double(4), double(5));
          break;
        default:invalidOp('Unsupported transform ' + id + ' : ' + args + ' : ' + doubleArgs + ' (' + str + ')');
          break;
      }
    }
    return out;
  };
  function SVG$Companion() {
    SVG$Companion_instance = this;
  }
  function SVG$Companion$tokenizePath$skipSeparators($receiver) {
    while (true) {
      var tmp$ = $receiver.hasMore;
      if (tmp$) {
        var it = $receiver.peekChar();
        tmp$ = unboxChar(it) === 44 || unboxChar(it) === 32 || unboxChar(it) === 9 || unboxChar(it) === 10 || unboxChar(it) === 13;
      }
      if (!tmp$)
        break;
      $receiver.readChar();
    }
  }
  function SVG$Companion$tokenizePath$readNumber(closure$skipSeparators) {
    return function ($receiver) {
      var tmp$;
      closure$skipSeparators($receiver);
      var first = {v: true};
      var tmp$_0;
      var start = $receiver.pos;
      while (true) {
        var tmp$_1 = $receiver.hasMore;
        if (tmp$_1) {
          var it = $receiver.peekChar();
          var filter$result;
          if (first.v) {
            first.v = false;
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 43;
          }
           else {
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 46;
          }
          tmp$_1 = filter$result;
        }
        if (!tmp$_1)
          break;
        $receiver.readChar();
      }
      var end = $receiver.pos;
      var str = (tmp$_0 = end > start ? $receiver.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '';
      if (str.length === 0)
        tmp$ = 0.0;
      else
        try {
          tmp$ = toDouble(str);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            printStackTrace(e);
            tmp$ = 0.0;
          }
           else
            throw e;
        }
      return tmp$;
    };
  }
  SVG$Companion.prototype.tokenizePath_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var skipSeparators = SVG$Companion$tokenizePath$skipSeparators;
    var readNumber = SVG$Companion$tokenizePath$readNumber(skipSeparators);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      skipSeparators(sr);
      var c = unboxChar(sr.peekChar());
      var tmp$;
      if ((new CharRange(48, 57)).contains_mef7kx$(c) || c === 45 || c === 43) {
        tmp$ = new SVG$PathTokenNumber(readNumber(sr));
      }
       else {
        tmp$ = new SVG$PathTokenCmd(unboxChar(sr.readChar()));
      }
      var element = tmp$;
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$Companion_instance = null;
  function SVG$Companion_getInstance() {
    if (SVG$Companion_instance === null) {
      new SVG$Companion();
    }
    return SVG$Companion_instance;
  }
  function SVG$PathToken() {
  }
  SVG$PathToken.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PathToken',
    interfaces: []
  };
  function SVG$PathTokenNumber(value) {
    this.value = value;
  }
  SVG$PathTokenNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenNumber',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenNumber.prototype.component1 = function () {
    return this.value;
  };
  SVG$PathTokenNumber.prototype.copy_14dthe$ = function (value) {
    return new SVG$PathTokenNumber(value === void 0 ? this.value : value);
  };
  SVG$PathTokenNumber.prototype.toString = function () {
    return 'PathTokenNumber(value=' + Kotlin.toString(this.value) + ')';
  };
  SVG$PathTokenNumber.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SVG$PathTokenNumber.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function SVG$PathTokenCmd(id) {
    this.id = toBoxedChar(id);
  }
  SVG$PathTokenCmd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenCmd',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenCmd.prototype.component1 = function () {
    return this.id;
  };
  SVG$PathTokenCmd.prototype.copy_s8itvh$ = function (id) {
    return new SVG$PathTokenCmd(id === void 0 ? this.id : id);
  };
  SVG$PathTokenCmd.prototype.toString = function () {
    return 'PathTokenCmd(id=' + Kotlin.toString(this.id) + ')';
  };
  SVG$PathTokenCmd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  SVG$PathTokenCmd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function SVG$SvgStyle(styles) {
    SVG$SvgStyle$Companion_getInstance();
    if (styles === void 0) {
      styles = HashMap_init();
    }
    this.styles = styles;
  }
  function SVG$SvgStyle$Companion() {
    SVG$SvgStyle$Companion_instance = this;
  }
  SVG$SvgStyle$Companion.prototype.tokenize_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      while (true) {
        sr.skipSpaces();
        var tmp$;
        var start = sr.pos;
        while (true) {
          var tmp$_0 = sr.hasMore;
          if (tmp$_0) {
            var it = sr.peekChar();
            tmp$_0 = isLetterOrUnderscore(unboxChar(it)) || get_isNumeric(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 35;
          }
          if (!tmp$_0)
            break;
          sr.readChar();
        }
        var end = sr.pos;
        var id = (tmp$ = end > start ? sr.slice_vux9f0$(start, end) : null) != null ? tmp$ : '';
        if (id.length > 0) {
          out.add_11rb$(id);
        }
         else {
          break;
        }
      }
      if (sr.eof)
        break;
      sr.skipSpaces();
      var symbol = unboxChar(sr.read());
      var element = String.fromCharCode(symbol);
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$SvgStyle$Companion.prototype.readId_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.readColon_mr88w2$ = function ($receiver) {
    return expect($receiver, ':');
  };
  SVG$SvgStyle$Companion.prototype.readExpression_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.parse_bodv9c$ = function (str, warningProcessor) {
    if (warningProcessor === void 0)
      warningProcessor = null;
    var tokens = this.tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var style = new SVG$SvgStyle();
    while (tr.hasMore) {
      var id = this.readId_mr88w2$(tr);
      if (tr.eof) {
        warningProcessor != null ? warningProcessor("EOF. Parsing (ID='" + id + "'): '" + str + "', " + tokens) : null;
        break;
      }
      this.readColon_mr88w2$(tr);
      var rexpr = ArrayList_init_0();
      while (tr.hasMore && !equals(tr.peek(), ';')) {
        var element = this.readExpression_mr88w2$(tr);
        rexpr.add_11rb$(element);
      }
      var tmp$ = style.styles;
      var key = id.toLowerCase();
      var value = joinToString(rexpr, '');
      tmp$.put_xwzc9p$(key, value);
      if (tr.hasMore)
        expect(tr, ';');
    }
    return style;
  };
  SVG$SvgStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$SvgStyle$Companion_instance = null;
  function SVG$SvgStyle$Companion_getInstance() {
    if (SVG$SvgStyle$Companion_instance === null) {
      new SVG$SvgStyle$Companion();
    }
    return SVG$SvgStyle$Companion_instance;
  }
  SVG$SvgStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgStyle',
    interfaces: []
  };
  SVG$SvgStyle.prototype.component1 = function () {
    return this.styles;
  };
  SVG$SvgStyle.prototype.copy_gtra9a$ = function (styles) {
    return new SVG$SvgStyle(styles === void 0 ? this.styles : styles);
  };
  SVG$SvgStyle.prototype.toString = function () {
    return 'SvgStyle(styles=' + Kotlin.toString(this.styles) + ')';
  };
  SVG$SvgStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.styles) | 0;
    return result;
  };
  SVG$SvgStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.styles, other.styles))));
  };
  SVG_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SVG',
    interfaces: [Context2d$SizedDrawable]
  };
  function SVG_init(str, $this) {
    $this = $this || Object.create(SVG_0.prototype);
    SVG_0.call($this, Xml(str));
    return $this;
  }
  function HtmlCanvas() {
    HtmlCanvas_instance = this;
  }
  HtmlCanvas.prototype.createCanvas_vux9f0$ = function (width, height) {
    var tmp$;
    if (util.OS.isJsNodeJs) {
      var tmp$_0;
      if ((tmp$ = get_nodeJsCanvas()) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init('Canvas not available'.toString());
      }
      var canvas = tmp$_0;
      return canvas.createCanvas(width, height);
    }
     else {
      var out = document.createElement('canvas');
      out.width = width;
      out.height = height;
      return toLike(out);
    }
  };
  HtmlCanvas.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlCanvas',
    interfaces: []
  };
  var HtmlCanvas_instance = null;
  function HtmlCanvas_getInstance() {
    if (HtmlCanvas_instance === null) {
      new HtmlCanvas();
    }
    return HtmlCanvas_instance;
  }
  function toLike($receiver) {
    return $receiver;
  }
  function HtmlImage() {
    HtmlImage_instance = this;
  }
  HtmlImage.prototype.createHtmlCanvas_vux9f0$ = function (width, height) {
    return HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height);
  };
  HtmlImage.prototype.renderToHtmlCanvas_fzugah$ = function (bmpData, bmpWidth, bmpHeight, canvas) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pixelCount = bmpData.size;
    var ctx = canvas.getContext('2d');
    var idata = ctx.createImageData(bmpWidth, bmpHeight);
    var idataData = idata.data;
    var m = 0;
    for (var n = 0; n < pixelCount; n++) {
      var c = bmpData.get_za3lpa$(n);
      idataData[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = c.r;
      idataData[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = c.g;
      idataData[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = c.b;
      idataData[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = c.a;
    }
    ctx.putImageData(idata, 0.0, 0.0);
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_ypw47a$ = function (bmp, canvas) {
    return this.renderToHtmlCanvas_fzugah$(bmp.depremultipliedIfRequired().data, bmp.width, bmp.height, canvas);
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_x25gtl$ = function (canvas, out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var width = canvas.width;
    var height = canvas.height;
    var len = Kotlin.imul(width, height);
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0.0, 0.0, width, height);
    var ddata = data.data;
    var m = 0;
    for (var n = 0; n < len; n++) {
      var r = ddata[tmp$ = m, m = tmp$ + 1 | 0, tmp$] & 255;
      var g = ddata[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] & 255;
      var b = ddata[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] & 255;
      var a = ddata[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] & 255;
      out.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a));
    }
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_1stg9o$ = function (canvas, bmp) {
    this.renderHtmlCanvasIntoBitmap_x25gtl$(canvas, bmp.data);
  };
  HtmlImage.prototype.bitmapToHtmlCanvas_59u9qz$ = function (bmp) {
    return this.renderToHtmlCanvas_ypw47a$(bmp, this.createHtmlCanvas_vux9f0$(bmp.width, bmp.height));
  };
  HtmlImage.prototype.htmlCanvasToDataUrl_4en8az$ = function (canvas) {
    return canvas.toDataURL();
  };
  HtmlImage.prototype.htmlCanvasClear_4en8az$ = function (canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
  };
  HtmlImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlImage',
    interfaces: []
  };
  var HtmlImage_instance = null;
  function HtmlImage_getInstance() {
    if (HtmlImage_instance === null) {
      new HtmlImage();
    }
    return HtmlImage_instance;
  }
  function toHtmlNative($receiver) {
    if (Kotlin.isType($receiver, HtmlNativeImage))
      return $receiver;
    else
      return HtmlNativeImage_init_0(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$($receiver.toBMP32()));
  }
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  var nativeImageFormatProvider;
  function HtmlNativeImage(texSource, width, height) {
    NativeImage.call(this, width, height, texSource, true);
    this.texSource = texSource;
    this.name_pab2p7$_0 = 'HtmlNativeImage';
    this.lazyCanvasElement_5st6v8$_0 = lazy(HtmlNativeImage$lazyCanvasElement$lambda(this));
  }
  Object.defineProperty(HtmlNativeImage.prototype, 'name', {
    get: function () {
      return this.name_pab2p7$_0;
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'element', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.texSource, HTMLElement) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'lazyCanvasElement', {
    get: function () {
      return this.lazyCanvasElement_5st6v8$_0.value;
    }
  });
  HtmlNativeImage.prototype.toNonNativeBmp = function () {
    var data = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(this.width, this.height));
    HtmlImage_getInstance().renderHtmlCanvasIntoBitmap_x25gtl$(this.lazyCanvasElement, data);
    return new Bitmap32(this.width, this.height, data);
  };
  HtmlNativeImage.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new CanvasContext2dRenderer(this.lazyCanvasElement));
  };
  function HtmlNativeImage$lazyCanvasElement$lambda(this$HtmlNativeImage) {
    return function () {
      if (this$HtmlNativeImage.texSource.src !== undefined) {
        return BrowserImage_getInstance().imageToCanvas_3rpr94$(this$HtmlNativeImage.texSource);
      }
       else {
        return this$HtmlNativeImage.texSource;
      }
    };
  }
  HtmlNativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeImage',
    interfaces: [NativeImage]
  };
  function HtmlNativeImage_init(img, $this) {
    $this = $this || Object.create(HtmlNativeImage.prototype);
    HtmlNativeImage.call($this, img, img.width, img.height);
    return $this;
  }
  function HtmlNativeImage_init_0(canvas, $this) {
    $this = $this || Object.create(HtmlNativeImage.prototype);
    HtmlNativeImage.call($this, canvas, canvas.width, canvas.height);
    return $this;
  }
  function HtmlNativeImageFormatProvider() {
    HtmlNativeImageFormatProvider_instance = this;
    NativeImageFormatProvider.call(this);
  }
  function Coroutine$decode_1fhb37$($this, data_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_1fhb37$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_1fhb37$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_1fhb37$.prototype.constructor = Coroutine$decode_1fhb37$;
  Coroutine$decode_1fhb37$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = BrowserImage_getInstance().decodeToCanvas_1fhb37$(this.local$data, this.local$premultiplied, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return HtmlNativeImage_init_0(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HtmlNativeImageFormatProvider.prototype.decode_1fhb37$ = function (data_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_1fhb37$(this, data_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_52yb2k$_0($this, vfs_0, path_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_52yb2k$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_52yb2k$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_52yb2k$_0.prototype.constructor = Coroutine$decode_52yb2k$_0;
  Coroutine$decode_52yb2k$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$vfs, LocalVfs)) {
              this.state_0 = 6;
              this.result_0 = BrowserImage_getInstance().loadImage_ivxn3r$(this.local$path, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                var jsUrl = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
                this.state_0 = 4;
                this.result_0 = BrowserImage_getInstance().loadImage_ivxn3r$(jsUrl, this.local$premultiplied, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.local$tmp$ = BrowserImage_getInstance();
                this.state_0 = 2;
                this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readAll(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.decodeToCanvas_1fhb37$(this.result_0, this.local$premultiplied, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = HtmlNativeImage_init_0(this.result_0);
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$_0 = HtmlNativeImage_init(this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            this.local$tmp$_0 = HtmlNativeImage_init(this.result_0);
            this.state_0 = 7;
            continue;
          case 7:
            return this.local$tmp$_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HtmlNativeImageFormatProvider.prototype.decode_52yb2k$ = function (vfs_0, path_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_52yb2k$_0(this, vfs_0, path_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlNativeImageFormatProvider.prototype.create_vux9f0$ = function (width, height) {
    return HtmlNativeImage_init_0(HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height));
  };
  HtmlNativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    return HtmlNativeImage_init_0(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$(bmp.toBMP32()));
  };
  HtmlNativeImageFormatProvider.prototype.display_uwsoz2$ = function (bitmap, kind, continuation) {
    var tmp$, tmp$_0;
    if (kind === 1) {
      var img = document.createElement('img');
      img.setAttribute('src', 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$(bitmap)));
      (tmp$ = document.body) != null ? tmp$.appendChild(img) : null;
    }
     else {
      var img_0 = toHtmlNative(bitmap);
      (tmp$_0 = document.body) != null ? tmp$_0.appendChild(img_0.element) : null;
    }
  };
  HtmlNativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    var out = ensureNative(bmp);
    for (var n = 0; n < levels; n++)
      out = this.mipmap_uler2c$(out);
    return out;
  };
  HtmlNativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var x = bmp.width * 0.5;
    var tmp$ = numberToInt(Math_0.ceil(x));
    var x_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, numberToInt(Math_0.ceil(x_0)));
    out.getContext2d_6taknv$(true).renderer.drawImage_dfapkx$(bmp, 0, 0, out.width, out.height);
    return out;
  };
  HtmlNativeImageFormatProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlNativeImageFormatProvider',
    interfaces: [NativeImageFormatProvider]
  };
  var HtmlNativeImageFormatProvider_instance = null;
  function HtmlNativeImageFormatProvider_getInstance() {
    if (HtmlNativeImageFormatProvider_instance === null) {
      new HtmlNativeImageFormatProvider();
    }
    return HtmlNativeImageFormatProvider_instance;
  }
  function BrowserImage() {
    BrowserImage_instance = this;
  }
  BrowserImage.prototype.toNodeJsBuffer_0 = function (ba) {
    return Buffer.from(ba.buffer);
  };
  function Coroutine$decodeToCanvas_1fhb37$($this, bytes_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$blobURL = void 0;
    this.local$bytes = bytes_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decodeToCanvas_1fhb37$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeToCanvas_1fhb37$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeToCanvas_1fhb37$.prototype.constructor = Coroutine$decodeToCanvas_1fhb37$;
  Coroutine$decodeToCanvas_1fhb37$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$premultiplied === void 0)
              this.local$premultiplied = true;
            var tmp$, tmp$_0;
            if (util.OS.isJsNodeJs) {
              var tmp$_1;
              if ((tmp$ = get_nodeJsCanvas()) != null)
                tmp$_1 = tmp$;
              else {
                throw IllegalStateException_init('Canvas not available'.toString());
              }
              var canvas = tmp$_1;
              this.state_0 = 7;
              this.result_0 = await_0(Kotlin.isType(tmp$_0 = canvas.loadImage(this.$this.toNodeJsBuffer_0(this.local$bytes)), Promise) ? tmp$_0 : throwCCE(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              var type = 'image/png';
              var o = {};
              o['type'] = type;
              var blob = new Blob([this.local$bytes], o);
              this.local$blobURL = URL.createObjectURL(blob);
              this.exceptionState_0 = 4;
              this.state_0 = 1;
              this.result_0 = this.$this.loadCanvas_61zpoe$(this.local$blobURL, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            URL.revokeObjectURL(this.local$blobURL);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            return this.result_0;
          case 8:
            return;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BrowserImage.prototype.decodeToCanvas_1fhb37$ = function (bytes_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeToCanvas_1fhb37$(this, bytes_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  BrowserImage.prototype.imageToCanvas_3rpr94$ = function (img) {
    var canvas = HtmlCanvas_getInstance().createCanvas_vux9f0$(img.width, img.height);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0.0, 0.0);
    return canvas;
  };
  function BrowserImage$loadImage$lambda$lambda(closure$c) {
    return function (v) {
      closure$c.resumeWith_tl1gpc$(new Result(v));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda$lambda_0(closure$c) {
    return function (v) {
      closure$c.resumeWith_tl1gpc$(new Result(createFailure(v)));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda$lambda_1(closure$c, closure$img) {
    return function (it) {
      var tmp$ = closure$c;
      var value = closure$img;
      tmp$.resumeWith_tl1gpc$(new Result(value));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda$lambda_2(closure$c, closure$jsUrl) {
    return function (f, f_0, f_1, f_2, f_3) {
      var $receiver = closure$c;
      var exception = RuntimeException_init('error loading image ' + closure$jsUrl);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda(closure$jsUrl) {
    return function (c) {
      var tmp$, tmp$_0;
      if (util.OS.isJsNodeJs) {
        var tmp$_1;
        if ((tmp$ = get_nodeJsCanvas()) != null)
          tmp$_1 = tmp$;
        else {
          throw IllegalStateException_init('Canvas not available'.toString());
        }
        var canvas = tmp$_1;
        (Kotlin.isType(tmp$_0 = canvas.loadImage(closure$jsUrl), Promise) ? tmp$_0 : throwCCE()).then(BrowserImage$loadImage$lambda$lambda(c), BrowserImage$loadImage$lambda$lambda_0(c));
      }
       else {
        var img = document.createElement('img');
        img.onload = BrowserImage$loadImage$lambda$lambda_1(c, img);
        img.onerror = BrowserImage$loadImage$lambda$lambda_2(c, closure$jsUrl);
        img.src = closure$jsUrl;
      }
      return Unit;
    };
  }
  function Coroutine$loadImage_ivxn3r$($this, jsUrl_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsUrl = jsUrl_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$loadImage_ivxn3r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadImage_ivxn3r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadImage_ivxn3r$.prototype.constructor = Coroutine$loadImage_ivxn3r$;
  Coroutine$loadImage_ivxn3r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$premultiplied === void 0)
              this.local$premultiplied = true;
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(BrowserImage$loadImage$lambda(this.local$jsUrl))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BrowserImage.prototype.loadImage_ivxn3r$ = function (jsUrl_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$loadImage_ivxn3r$(this, jsUrl_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadCanvas_61zpoe$($this, jsUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsUrl = jsUrl_0;
  }
  Coroutine$loadCanvas_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadCanvas_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadCanvas_61zpoe$.prototype.constructor = Coroutine$loadCanvas_61zpoe$;
  Coroutine$loadCanvas_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.loadImage_ivxn3r$(this.local$jsUrl, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.imageToCanvas_3rpr94$(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BrowserImage.prototype.loadCanvas_61zpoe$ = function (jsUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$loadCanvas_61zpoe$(this, jsUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  BrowserImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BrowserImage',
    interfaces: []
  };
  var BrowserImage_instance = null;
  function BrowserImage_getInstance() {
    if (BrowserImage_instance === null) {
      new BrowserImage();
    }
    return BrowserImage_instance;
  }
  function CanvasContext2dRenderer(canvas) {
    Context2d$Renderer.call(this);
    this.canvas_0 = canvas;
    this.ctx = this.canvas_0.getContext('2d');
  }
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'width', {
    get: function () {
      return this.canvas_0.width;
    }
  });
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'height', {
    get: function () {
      return this.canvas_0.height;
    }
  });
  CanvasContext2dRenderer.prototype.toJsStr_2y61xz$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType($receiver, Context2d$None))
      tmp$_1 = 'none';
    else if (Kotlin.isType($receiver, Context2d$Color))
      tmp$_1 = $receiver.color.htmlStringSimple;
    else if (Kotlin.isType($receiver, Context2d$Gradient)) {
      switch ($receiver.kind.name) {
        case 'LINEAR':
          var grad = this.ctx.createLinearGradient($receiver.x0, $receiver.y0, $receiver.x1, $receiver.y1);
          tmp$ = $receiver.stops.size;
          for (var n = 0; n < tmp$; n++) {
            var stop = $receiver.stops.get_za3lpa$(n);
            var color = $receiver.colors.get_za3lpa$(n);
            grad.addColorStop(stop, (new RGBA(color)).htmlStringSimple);
          }

          tmp$_1 = grad;
          break;
        case 'RADIAL':
          var grad_0 = this.ctx.createRadialGradient($receiver.x0, $receiver.y0, $receiver.r0, $receiver.x1, $receiver.y1, $receiver.r1);
          tmp$_0 = $receiver.stops.size;
          for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
            var stop_0 = $receiver.stops.get_za3lpa$(n_0);
            var color_0 = $receiver.colors.get_za3lpa$(n_0);
            grad_0.addColorStop(stop_0, (new RGBA(color_0)).htmlStringSimple);
          }

          tmp$_1 = grad_0;
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint)) {
      tmp$_1 = this.ctx.createPattern(toHtmlNative($receiver.bitmap).texSource, $receiver.repeat ? 'repeat' : 'no-repeat');
    }
     else
      tmp$_1 = 'black';
    return tmp$_1;
  };
  CanvasContext2dRenderer.prototype.keep_0 = function (callback) {
    this.ctx.save();
    try {
      return callback();
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.setFont_0 = function (font) {
    this.ctx.font = font.size.toString() + "px '" + font.name + "'";
  };
  CanvasContext2dRenderer.prototype.setState_0 = function (state, fill) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.ctx.globalAlpha = state.globalAlpha;
    this.setFont_0(state.font);
    var t = state.transform;
    this.ctx.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
    if (fill) {
      this.ctx.fillStyle = this.toJsStr_2y61xz$(state.fillStyle);
    }
     else {
      this.ctx.lineWidth = state.lineWidth;
      tmp$_0 = this.ctx;
      switch (state.lineJoin.name) {
        case 'BEVEL':
          tmp$ = 'bevel';
          break;
        case 'MITER':
          tmp$ = 'miter';
          break;
        case 'ROUND':
          tmp$ = 'round';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.lineJoin = tmp$;
      tmp$_2 = this.ctx;
      switch (state.lineCap.name) {
        case 'BUTT':
          tmp$_1 = 'butt';
          break;
        case 'ROUND':
          tmp$_1 = 'round';
          break;
        case 'SQUARE':
          tmp$_1 = 'square';
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_2.lineCap = tmp$_1;
      this.ctx.strokeStyle = this.toJsStr_2y61xz$(state.strokeStyle);
    }
  };
  CanvasContext2dRenderer.prototype.transformPaint_0 = function (paint) {
    if (Kotlin.isType(paint, Context2d$TransformedPaint)) {
      var m = paint.transform;
      this.ctx.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
    }
  };
  CanvasContext2dRenderer.prototype.drawImage_dfapkx$$default = function (image, x, y, width, height, transform) {
    var tmp$;
    this.ctx.save();
    try {
      this.ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
      this.ctx.drawImage((Kotlin.isType(tmp$ = ensureNative(image), HtmlNativeImage) ? tmp$ : throwCCE()).texSource, x, y, width, height);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.render_w64o9o$ = function (state, fill) {
    if (isEmpty(state.path))
      return;
    this.ctx.save();
    try {
      this.setState_0(state, fill);
      this.ctx.beginPath();
      var $this = state.path;
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var n = 0;
      tmp$ = $this.commands.iterator();
      while (tmp$.hasNext()) {
        var cmd = tmp$.next();
        switch (cmd) {
          case 0:
            var x = $this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
            var y = $this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
            this.ctx.moveTo(x, y);
            break;
          case 1:
            var x_0 = $this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
            var y_0 = $this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
            this.ctx.lineTo(x_0, y_0);
            break;
          case 2:
            var x1 = $this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
            var y1 = $this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
            var x2 = $this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
            var y2 = $this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
            this.ctx.quadraticCurveTo(x1, y1, x2, y2);
            break;
          case 3:
            var x1_0 = $this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
            var y1_0 = $this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
            var x2_0 = $this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
            var y2_0 = $this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
            var x3 = $this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
            var y3 = $this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
            this.ctx.bezierCurveTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
            break;
          case 4:
            this.ctx.closePath();
            break;
        }
      }
      this.ctx.save();
      if (fill) {
        this.transformPaint_0(state.fillStyle);
        this.ctx.fill();
      }
       else {
        this.transformPaint_0(state.strokeStyle);
        this.ctx.stroke();
      }
      this.ctx.restore();
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    this.ctx.save();
    try {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this.setState_0(state, fill);
      tmp$_0 = this.ctx;
      switch (state.verticalAlign.name) {
        case 'TOP':
          tmp$ = 'top';
          break;
        case 'MIDDLE':
          tmp$ = 'middle';
          break;
        case 'BASELINE':
          tmp$ = 'alphabetic';
          break;
        case 'BOTTOM':
          tmp$ = 'bottom';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.textBaseline = tmp$;
      tmp$_2 = this.ctx;
      switch (state.horizontalAlign.name) {
        case 'LEFT':
          tmp$_1 = 'left';
          break;
        case 'CENTER':
          tmp$_1 = 'center';
          break;
        case 'RIGHT':
          tmp$_1 = 'right';
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_2.textAlign = tmp$_1;
      if (fill) {
        this.ctx.fillText(text, x, y);
      }
       else {
        this.ctx.strokeText(text, x, y);
      }
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    this.ctx.save();
    try {
      this.setFont_0(font);
      var metrics = this.ctx.measureText(text);
      var width = numberToInt(metrics.width);
      out.bounds.setTo_6y0v78$(0, 0, width + 2, font.size);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasContext2dRenderer',
    interfaces: [Context2d$Renderer]
  };
  var myJsRequire;
  function jsRequire(name) {
    return myJsRequire(name);
  }
  function nodeJsCanvas$lambda() {
    try {
      return jsRequire('canvas');
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        printStackTrace(e);
        return null;
      }
       else
        throw e;
    }
  }
  var nodeJsCanvas;
  function get_nodeJsCanvas() {
    return nodeJsCanvas.value;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korim = package$soywiz.korim || (package$soywiz.korim = {});
  Object.defineProperty(package$korim, 'Korim', {
    get: Korim_getInstance
  });
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  $$importsForInline$$['korim-root-korim'] = _;
  var package$bitmap = package$korim.bitmap || (package$korim.bitmap = {});
  package$bitmap.Bitmap = Bitmap;
  package$bitmap.createWithThisFormatTyped_cq1euf$ = createWithThisFormatTyped;
  package$bitmap.extract_or9s9z$ = extract_0;
  package$bitmap.context2d_rr3dot$ = context2d;
  package$bitmap.checkMatchDimensions_kvavrz$ = checkMatchDimensions;
  package$bitmap.Bitmap1 = Bitmap1;
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  package$bitmap.Bitmap16 = Bitmap16;
  package$bitmap.Bitmap2 = Bitmap2;
  Bitmap32$Companion.prototype.MatchResult = Bitmap32$Companion$MatchResult;
  Object.defineProperty(Bitmap32, 'Companion', {
    get: Bitmap32$Companion_getInstance
  });
  package$bitmap.Bitmap32_init_l6bm7e$ = Bitmap32_init;
  package$bitmap.Bitmap32_init_g4fuo$ = Bitmap32_init_0;
  package$bitmap.Bitmap32 = Bitmap32;
  package$bitmap.Bitmap4 = Bitmap4;
  package$bitmap.Bitmap8 = Bitmap8;
  Object.defineProperty(BitmapChannel, 'RED', {
    get: BitmapChannel$RED_getInstance
  });
  Object.defineProperty(BitmapChannel, 'GREEN', {
    get: BitmapChannel$GREEN_getInstance
  });
  Object.defineProperty(BitmapChannel, 'BLUE', {
    get: BitmapChannel$BLUE_getInstance
  });
  Object.defineProperty(BitmapChannel, 'ALPHA', {
    get: BitmapChannel$ALPHA_getInstance
  });
  Object.defineProperty(BitmapChannel, 'Companion', {
    get: BitmapChannel$Companion_getInstance
  });
  package$bitmap.BitmapChannel = BitmapChannel;
  package$bitmap.get_Y_tqizvu$ = get_Y;
  package$bitmap.get_Cb_tqizvu$ = get_Cb;
  package$bitmap.get_Cr_tqizvu$ = get_Cr;
  package$bitmap.get_A_tqizvu$ = get_A;
  package$bitmap.toStringYCbCr_4f4qi0$ = toStringYCbCr;
  package$bitmap.matchContentsDistinctCount_1cy7pt$ = matchContentsDistinctCount;
  package$bitmap.matchContents_1cy7pt$ = matchContents;
  package$bitmap.setAlpha_1dwlii$ = setAlpha;
  package$bitmap.putWithBorder_cxfkob$ = putWithBorder;
  package$bitmap.BitmapIndexed = BitmapIndexed;
  package$bitmap.BmpSlice = BmpSlice;
  package$bitmap.BitmapSlice = BitmapSlice;
  package$bitmap.BitmapSliceCompat_qpf1ss$ = BitmapSliceCompat;
  package$bitmap.slice_umqjjl$ = slice;
  package$bitmap.sliceWithBounds_or9s9z$ = sliceWithBounds;
  package$bitmap.sliceWithSize_or9s9z$ = sliceWithSize_1;
  Object.defineProperty(package$bitmap, 'Bitmaps', {
    get: Bitmaps_getInstance
  });
  package$bitmap.NativeImage = NativeImage;
  package$bitmap.mipmap_lzupcl$ = mipmap;
  package$bitmap.toUri_p18lal$ = toUri;
  package$bitmap.NativeImage_vux9f0$ = NativeImage_0;
  package$bitmap.NativeImage_oiyklk$ = NativeImage_1;
  package$bitmap.NativeImage_7vwhb5$ = NativeImage_2;
  package$bitmap.ensureNative_p18lal$ = ensureNative;
  package$bitmap.raster_kiw58k$ = raster;
  NinePatchInfo.AxisSegment = NinePatchInfo$AxisSegment;
  NinePatchInfo.AxisInfo = NinePatchInfo$AxisInfo;
  NinePatchInfo.Segment = NinePatchInfo$Segment;
  package$bitmap.NinePatchInfo_init_mbbjvw$ = NinePatchInfo_init;
  package$bitmap.NinePatchInfo = NinePatchInfo;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  package$bitmap.NinePatchBitmap32 = NinePatchBitmap32;
  package$bitmap.asNinePatch_p18lal$ = asNinePatch;
  package$bitmap.readNinePatch_2axf5n$ = readNinePatch;
  Object.defineProperty(package$bitmap, 'PSNR', {
    get: PSNR_getInstance
  });
  package$bitmap.psnrDiffTo_uz8x2p$ = psnrDiffTo;
  package$bitmap.computePsnr_so1h92$ = computePsnr;
  package$bitmap.Atlas = Atlas;
  var package$color = package$korim.color || (package$korim.color = {});
  Object.defineProperty(package$color, 'ARGB', {
    get: ARGB_getInstance
  });
  Object.defineProperty(package$color, 'BGRA', {
    get: BGRA_getInstance
  });
  Object.defineProperty(CMYK, 'Companion', {
    get: CMYK$Companion_getInstance
  });
  package$color.CMYK = CMYK;
  package$color.toRGBA_h9k0i2$ = toRGBA;
  ColorFormat.Mixin = ColorFormat$Mixin;
  package$color.ColorFormat = ColorFormat;
  package$color.ColorFormat16 = ColorFormat16;
  package$color.ColorFormat24 = ColorFormat24;
  package$color.ColorFormat32 = ColorFormat32;
  package$color.numberOfBytes_6i9sz0$ = numberOfBytes;
  package$color.get_bytesPerPixel_igxz2m$ = get_bytesPerPixel;
  package$color.toRGBA_6i9sz0$ = toRGBA_0;
  package$color.packRGBA_qvhnkv$ = packRGBA;
  package$color.getRf_6i9sz0$ = getRf;
  package$color.getGf_6i9sz0$ = getGf;
  package$color.getBf_6i9sz0$ = getBf;
  package$color.getAf_6i9sz0$ = getAf;
  package$color.getRd_6i9sz0$ = getRd;
  package$color.getGd_6i9sz0$ = getGd;
  package$color.getBd_6i9sz0$ = getBd;
  package$color.getAd_6i9sz0$ = getAd;
  package$color.unpackToRGBA_6i9sz0$ = unpackToRGBA;
  package$color.convertTo_1b61px$ = convertTo;
  package$color.RGBA = RGBA;
  package$color.decodeInternal_4v8vnc$ = decodeInternal;
  package$color.decode_aeo8vf$ = decode;
  package$color.decode_8dn5f5$ = decode_0;
  package$color.decodeToBitmap32_hx8rld$ = decodeToBitmap32;
  package$color.decodeToBitmap32_rp8m90$ = decodeToBitmap32_0;
  package$color.encode_4qtzhn$ = encode;
  package$color.encode_ewnnn1$ = encode_0;
  package$color.encode_59hu82$ = encode_1;
  package$color.encode_3fz5f9$ = encode_2;
  Object.defineProperty(ColorTransform, 'Companion', {
    get: ColorTransform$Companion_getInstance
  });
  package$color.ColorTransform = ColorTransform;
  Object.defineProperty(ColorAdd, 'Companion', {
    get: ColorAdd$Companion_getInstance
  });
  package$color.ColorAdd = ColorAdd;
  package$color.toColorAdd_h1fete$ = toColorAdd;
  package$color.ColorTransform_6tck58$ = ColorTransform_1;
  package$color.ColorTransform_d3e2w0$ = ColorTransform_0;
  package$color.transform_kgvwc8$ = transform;
  Colors.prototype.WithDefault = Colors$WithDefault;
  Object.defineProperty(Colors.prototype, 'Default', {
    get: Colors$Default_getInstance
  });
  Object.defineProperty(package$color, 'Colors', {
    get: Colors_getInstance
  });
  package$color.PaletteColorFormat = PaletteColorFormat;
  Object.defineProperty(RGB, 'Companion', {
    get: RGB$Companion_getInstance
  });
  package$color.RGB = RGB;
  Object.defineProperty(package$color, 'BGR', {
    get: BGR_getInstance
  });
  Object.defineProperty(RGBA, 'Companion', {
    get: RGBA$Companion_getInstance
  });
  package$color.interpolate_bxlh7p$ = interpolate_1;
  Object.defineProperty(RGBAPremultiplied, 'Companion', {
    get: RGBAPremultiplied$Companion_getInstance
  });
  package$color.RGBAPremultiplied_init_vux9f0$ = RGBAPremultiplied_init;
  package$color.RGBAPremultiplied_init_tjonv8$ = RGBAPremultiplied_init_0;
  package$color.RGBAPremultiplied = RGBAPremultiplied;
  package$color.asPremultiplied_h1fete$ = asPremultiplied;
  package$color.asNonPremultiplied_w4w6h6$ = asNonPremultiplied;
  package$color.asPremultiplied_3ze06x$ = asPremultiplied_0;
  package$color.asNonPremultiplied_c2t4n9$ = asNonPremultiplied_0;
  package$color.RgbaPremultipliedArray = RgbaPremultipliedArray;
  package$color.mix_i27xe7$ = mix;
  Object.defineProperty(RgbaArray, 'Companion', {
    get: RgbaArray$Companion_getInstance
  });
  package$color.RgbaArray = RgbaArray;
  package$color.mix_70fxd1$ = mix_0;
  package$color.toRgbaArray_6eadht$ = toRgbaArray;
  package$color.arraycopy_m3qhle$ = arraycopy;
  package$color.depremultiplyFaster_bx7wdr$ = depremultiplyFaster;
  package$color.depremultiplyFastest_bx7wdr$ = depremultiplyFastest;
  package$color.toRgbaArray_c0u5ea$ = toRgbaArray_0;
  Object.defineProperty(package$color, 'RGBA_4444', {
    get: RGBA_4444_getInstance
  });
  Object.defineProperty(package$color, 'RGBA_5551', {
    get: RGBA_5551_getInstance
  });
  Object.defineProperty(package$color, 'RGB_555', {
    get: RGB_555_getInstance
  });
  Object.defineProperty(package$color, 'RGB_565', {
    get: RGB_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_4444', {
    get: BGRA_4444_getInstance
  });
  Object.defineProperty(package$color, 'BGR_555', {
    get: BGR_555_getInstance
  });
  Object.defineProperty(package$color, 'BGR_565', {
    get: BGR_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_5551', {
    get: BGRA_5551_getInstance
  });
  package$color.RGBAd_init_h1ferx$ = RGBAd_init;
  package$color.RGBAd_init_za3lpa$ = RGBAd_init_0;
  package$color.RGBAd_init = RGBAd_init_1;
  package$color.RGBAd = RGBAd;
  package$color.RGBAf = RGBAf;
  package$color.RGBAf_1ugm5o$ = RGBAf_0;
  package$color.setToColorPremultiplied_1r9l2y$ = setToColorPremultiplied;
  package$color.setToColor_1r9l2y$ = setToColor;
  package$color.toPremultipliedVector3D_8kyabi$ = toPremultipliedVector3D;
  package$color.toVector3D_8kyabi$ = toVector3D;
  Object.defineProperty(YCbCr, 'Companion', {
    get: YCbCr$Companion_getInstance
  });
  package$color.YCbCr_init_tjonv8$ = YCbCr_init;
  package$color.YCbCr = YCbCr;
  package$color.YCbCrArray = YCbCrArray;
  package$color.toYCbCr_h1fete$ = toYCbCr;
  package$color.toRGBA_rqsoe3$ = toRGBA_1;
  Object.defineProperty(YUVA, 'Companion', {
    get: YUVA$Companion_getInstance
  });
  package$color.YUVA_init_tjonv8$ = YUVA_init;
  package$color.YUVA = YUVA;
  package$color.YuvaArray = YuvaArray;
  package$color.toYUVA_h1fete$ = toYUVA;
  package$color.toRGBA_gxbi0l$ = toRGBA_2;
  Object.defineProperty(BitmapFont$Kerning, 'Companion', {
    get: BitmapFont$Kerning$Companion_getInstance
  });
  BitmapFont.Kerning = BitmapFont$Kerning;
  BitmapFont.Glyph = BitmapFont$Glyph;
  Object.defineProperty(BitmapFont, 'Companion', {
    get: BitmapFont$Companion_getInstance
  });
  var package$font = package$korim.font || (package$korim.font = {});
  package$font.BitmapFont = BitmapFont;
  package$font.readBitmapFont_2axf5n$ = readBitmapFont;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  package$font.drawText_khk0ju$ = drawText;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  Object.defineProperty(package$font, 'BitmapFontGenerator', {
    get: BitmapFontGenerator_getInstance
  });
  package$font.invoke_3kf3j5$ = invoke;
  TtfFont.Table = TtfFont$Table;
  Object.defineProperty(TtfFont$NameIds, 'COPYRIGHT', {
    get: TtfFont$NameIds$COPYRIGHT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_FAMILY_NAME', {
    get: TtfFont$NameIds$FONT_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'UNIQUE_FONT_ID', {
    get: TtfFont$NameIds$UNIQUE_FONT_ID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FULL_FONT_NAME', {
    get: TtfFont$NameIds$FULL_FONT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VERSION_STRING', {
    get: TtfFont$NameIds$VERSION_STRING_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_NAME', {
    get: TtfFont$NameIds$POSTSCRIPT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TRADEMARK', {
    get: TtfFont$NameIds$TRADEMARK_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'MANUFACTURER', {
    get: TtfFont$NameIds$MANUFACTURER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESIGNER', {
    get: TtfFont$NameIds$DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESCRIPTION', {
    get: TtfFont$NameIds$DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_VENDOR', {
    get: TtfFont$NameIds$URL_VENDOR_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_DESIGNER', {
    get: TtfFont$NameIds$URL_DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_DESCRIPTION', {
    get: TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_URL', {
    get: TtfFont$NameIds$LICENSE_URL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'RESERVED_15', {
    get: TtfFont$NameIds$RESERVED_15_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_FAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'COMPATIBLE_FULL', {
    get: TtfFont$NameIds$COMPATIBLE_FULL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'SAMPLE_TEXT', {
    get: TtfFont$NameIds$SAMPLE_TEXT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_CID', {
    get: TtfFont$NameIds$POSTSCRIPT_CID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_FAMILY_NAME', {
    get: TtfFont$NameIds$WWS_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LIGHT_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DARK_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VARIATIONS_POSTSCRIPT_NAME_PREFIX', {
    get: TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'Companion', {
    get: TtfFont$NameIds$Companion_getInstance
  });
  TtfFont.NameIds = TtfFont$NameIds;
  TtfFont.Fixed = TtfFont$Fixed;
  TtfFont.HorMetric = TtfFont$HorMetric;
  Object.defineProperty(TtfFont, 'Companion', {
    get: TtfFont$Companion_getInstance
  });
  TtfFont.IGlyph = TtfFont$IGlyph;
  TtfFont.Contour = TtfFont$Contour;
  Object.defineProperty(TtfFont$Origin, 'TOP', {
    get: TtfFont$Origin$TOP_getInstance
  });
  Object.defineProperty(TtfFont$Origin, 'BASELINE', {
    get: TtfFont$Origin$BASELINE_getInstance
  });
  TtfFont.Origin = TtfFont$Origin;
  TtfFont.GlyphReference = TtfFont$GlyphReference;
  TtfFont.CompositeGlyph = TtfFont$CompositeGlyph;
  TtfFont.Glyph = TtfFont$Glyph;
  var package$ttf = package$font.ttf || (package$font.ttf = {});
  package$ttf.TtfFont = TtfFont;
  package$ttf.fillText_3ytem2$ = fillText;
  BMP.prototype.BmImageInfo = BMP$BmImageInfo;
  var package$format = package$korim.format || (package$korim.format = {});
  Object.defineProperty(package$format, 'BMP', {
    get: BMP_getInstance
  });
  Object.defineProperty(package$format, 'DDS', {
    get: DDS_getInstance
  });
  Object.defineProperty(package$format, 'DXT1', {
    get: DXT1_getInstance
  });
  Object.defineProperty(package$format, 'DXT2', {
    get: DXT2_getInstance
  });
  Object.defineProperty(package$format, 'DXT3', {
    get: DXT3_getInstance
  });
  Object.defineProperty(package$format, 'DXT4', {
    get: DXT4_getInstance
  });
  Object.defineProperty(package$format, 'DXT5', {
    get: DXT5_getInstance
  });
  package$format.DXT1Base = DXT1Base;
  package$format.DXT2_3 = DXT2_3;
  package$format.DXT4_5 = DXT4_5;
  Object.defineProperty(DXT, 'Companion', {
    get: DXT$Companion_getInstance
  });
  package$format.DXT = DXT;
  Object.defineProperty(package$format, 'ICO', {
    get: ICO_getInstance
  });
  package$format.ImageData = ImageData;
  package$format.ImageFormat = ImageFormat;
  package$format.ImageDecodingProps = ImageDecodingProps;
  package$format.ImageEncodingProps = ImageEncodingProps;
  package$format.ImageFormats_init_56bozu$ = ImageFormats_init;
  package$format.ImageFormats = ImageFormats;
  package$format.plus_bexuvf$ = plus_2;
  package$format.plus_al0iei$ = plus_3;
  package$format.writeTo_d2mj5k$ = writeTo;
  package$format.encode_ccak55$ = encode_3;
  package$format.ImageFrame = ImageFrame;
  package$format.get_area_mj13kf$ = get_area;
  package$format.ImageInfo = ImageInfo;
  package$format.decode_97bjr4$ = decode_1;
  package$format.decode_cv04aa$ = decode_2;
  package$format.decode_rk4kpr$ = decode_3;
  Object.defineProperty(package$format, 'nativeImageFormatProviders', {
    get: get_nativeImageFormatProviders
  });
  package$format.displayImage_uwsoz2$ = displayImage;
  package$format.decodeImageBytes_fqrh44$ = decodeImageBytes;
  package$format.decodeImageFile_3ekr7n$ = decodeImageFile;
  package$format.readNativeImage_yirdke$ = readNativeImage;
  package$format.readImageData_vi5npc$ = readImageData;
  package$format.readNativeImage_yjldv$ = readNativeImage_0;
  package$format.readImageData_8dzss$ = readImageData_0;
  package$format.readImageDataProps_ie8jgv$ = readImageDataProps;
  package$format.readBitmapListNoNative_a0awwm$ = readBitmapListNoNative;
  package$format.readBitmapInfo_vi5npc$ = readBitmapInfo;
  package$format.readImageData_2axf5n$ = readImageData_1;
  package$format.readBitmapListNoNative_2axf5n$ = readBitmapListNoNative_0;
  package$format.readBitmap_alhih0$ = readBitmap;
  package$format.readBitmap_ie8jgv$ = readBitmap_0;
  package$format.readBitmapInfo_2axf5n$ = readBitmapInfo_0;
  package$format.readBitmapOptimized_2axf5n$ = readBitmapOptimized;
  package$format.readBitmap_vi5npc$ = readBitmap_1;
  package$format.readBitmapSlice_2axf5n$ = readBitmapSlice;
  Object.defineProperty(package$format, 'nativeImageLoadingEnabled', {
    get: function () {
      return nativeImageLoadingEnabled;
    },
    set: function (value) {
      nativeImageLoadingEnabled = value;
    }
  });
  package$format.disableNativeImageLoading_o14v8n$ = disableNativeImageLoading;
  package$format.readBitmapNoNative_vi5npc$ = readBitmapNoNative;
  package$format.readBitmapNoNative_2axf5n$ = readBitmapNoNative_0;
  package$format.writeBitmap_d6890c$ = writeBitmap;
  package$format.NativeImageConfig = NativeImageConfig;
  package$format.NativeImageFormatProvider = NativeImageFormatProvider;
  package$format.showImageAndWait_lzupcl$ = showImageAndWait;
  package$format.showImagesAndWait_q2hz9t$ = showImagesAndWait;
  package$format.showImageAndWait_qc24ae$ = showImageAndWait_0;
  PNG.prototype.InterlacedPass = PNG$InterlacedPass;
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE', {
    get: PNG$Colorspace$GRAYSCALE_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGB', {
    get: PNG$Colorspace$RGB_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'INDEXED', {
    get: PNG$Colorspace$INDEXED_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE_ALPHA', {
    get: PNG$Colorspace$GRAYSCALE_ALPHA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGBA', {
    get: PNG$Colorspace$RGBA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'Companion', {
    get: PNG$Colorspace$Companion_getInstance
  });
  PNG.prototype.Colorspace = PNG$Colorspace;
  PNG.prototype.Header = PNG$Header;
  PNG.prototype.DecodingContext = PNG$DecodingContext;
  Object.defineProperty(package$format, 'PNG', {
    get: PNG_getInstance
  });
  PSD.prototype.PsdImageInfo = PSD$PsdImageInfo;
  Object.defineProperty(package$format, 'PSD', {
    get: PSD_getInstance
  });
  Object.defineProperty(package$format, 'RegisteredImageFormats', {
    get: RegisteredImageFormats_getInstance
  });
  Object.defineProperty(package$format, 'SVG', {
    get: SVG_getInstance
  });
  TGA.prototype.Info = TGA$Info;
  Object.defineProperty(package$format, 'TGA', {
    get: TGA_getInstance
  });
  var package$internal = package$korim.internal || (package$korim.internal = {});
  package$internal.clampf1_1zw1ma$ = clampf1;
  package$internal.clamp0_255_8e50z4$ = clamp0_255;
  package$internal.clamp255_8e50z4$ = clamp255;
  Object.defineProperty(package$internal, 'KORIM_VERSION_8be2vx$', {
    get: function () {
      return KORIM_VERSION;
    }
  });
  package$internal.packIntUnchecked_r9yya9$ = packIntUnchecked;
  package$internal.packIntClamped_r9yya9$ = packIntClamped;
  package$internal.d2i_tq0o01$ = d2i;
  package$internal.f2i_nwfnho$ = f2i;
  Bitmap32Context2d.Edge = Bitmap32Context2d$Edge;
  Bitmap32Context2d.Filler = Bitmap32Context2d$Filler;
  Bitmap32Context2d.NoneFiller = Bitmap32Context2d$NoneFiller;
  Bitmap32Context2d.ColorFiller = Bitmap32Context2d$ColorFiller;
  Bitmap32Context2d.BitmapFiller = Bitmap32Context2d$BitmapFiller;
  Bitmap32Context2d.GradientFiller = Bitmap32Context2d$GradientFiller;
  var package$vector = package$korim.vector || (package$korim.vector = {});
  package$vector.Bitmap32Context2d = Bitmap32Context2d;
  Object.defineProperty(Context2d$LineCap, 'BUTT', {
    get: Context2d$LineCap$BUTT_getInstance
  });
  Object.defineProperty(Context2d$LineCap, 'ROUND', {
    get: Context2d$LineCap$ROUND_getInstance
  });
  Object.defineProperty(Context2d$LineCap, 'SQUARE', {
    get: Context2d$LineCap$SQUARE_getInstance
  });
  Context2d.LineCap = Context2d$LineCap;
  Object.defineProperty(Context2d$LineJoin, 'BEVEL', {
    get: Context2d$LineJoin$BEVEL_getInstance
  });
  Object.defineProperty(Context2d$LineJoin, 'MITER', {
    get: Context2d$LineJoin$MITER_getInstance
  });
  Object.defineProperty(Context2d$LineJoin, 'ROUND', {
    get: Context2d$LineJoin$ROUND_getInstance
  });
  Context2d.LineJoin = Context2d$LineJoin;
  Object.defineProperty(Context2d$CycleMethod, 'NO_CYCLE', {
    get: Context2d$CycleMethod$NO_CYCLE_getInstance
  });
  Object.defineProperty(Context2d$CycleMethod, 'REFLECT', {
    get: Context2d$CycleMethod$REFLECT_getInstance
  });
  Object.defineProperty(Context2d$CycleMethod, 'REPEAT', {
    get: Context2d$CycleMethod$REPEAT_getInstance
  });
  Context2d.CycleMethod = Context2d$CycleMethod;
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'NONE', {
    get: Context2d$ShapeRasterizerMethod$NONE_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X1', {
    get: Context2d$ShapeRasterizerMethod$X1_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X2', {
    get: Context2d$ShapeRasterizerMethod$X2_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X4', {
    get: Context2d$ShapeRasterizerMethod$X4_getInstance
  });
  Context2d.ShapeRasterizerMethod = Context2d$ShapeRasterizerMethod;
  Context2d.ScaledRenderer = Context2d$ScaledRenderer;
  Context2d$BufferedRenderer.RenderCommand = Context2d$BufferedRenderer$RenderCommand;
  Context2d.BufferedRenderer = Context2d$BufferedRenderer;
  Object.defineProperty(Context2d$Renderer, 'Companion', {
    get: Context2d$Renderer$Companion_getInstance
  });
  Context2d.Renderer = Context2d$Renderer;
  Object.defineProperty(Context2d$VerticalAlign, 'TOP', {
    get: Context2d$VerticalAlign$TOP_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'MIDDLE', {
    get: Context2d$VerticalAlign$MIDDLE_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'BASELINE', {
    get: Context2d$VerticalAlign$BASELINE_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'BOTTOM', {
    get: Context2d$VerticalAlign$BOTTOM_getInstance
  });
  Context2d.VerticalAlign = Context2d$VerticalAlign;
  Object.defineProperty(Context2d$HorizontalAlign, 'LEFT', {
    get: Context2d$HorizontalAlign$LEFT_getInstance
  });
  Object.defineProperty(Context2d$HorizontalAlign, 'CENTER', {
    get: Context2d$HorizontalAlign$CENTER_getInstance
  });
  Object.defineProperty(Context2d$HorizontalAlign, 'RIGHT', {
    get: Context2d$HorizontalAlign$RIGHT_getInstance
  });
  Context2d.HorizontalAlign = Context2d$HorizontalAlign;
  Object.defineProperty(Context2d$ScaleMode, 'NONE', {
    get: Context2d$ScaleMode$NONE_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'HORIZONTAL', {
    get: Context2d$ScaleMode$HORIZONTAL_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'VERTICAL', {
    get: Context2d$ScaleMode$VERTICAL_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'NORMAL', {
    get: Context2d$ScaleMode$NORMAL_getInstance
  });
  Context2d.ScaleMode = Context2d$ScaleMode;
  Context2d.State = Context2d$State;
  Context2d.Font = Context2d$Font;
  Context2d.TextMetrics = Context2d$TextMetrics;
  Context2d.Paint = Context2d$Paint;
  Object.defineProperty(Context2d, 'None', {
    get: Context2d$None_getInstance
  });
  Context2d.Color = Context2d$Color;
  Context2d.TransformedPaint = Context2d$TransformedPaint;
  Object.defineProperty(Context2d$Gradient$Kind, 'LINEAR', {
    get: Context2d$Gradient$Kind$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$Kind, 'RADIAL', {
    get: Context2d$Gradient$Kind$RADIAL_getInstance
  });
  Context2d$Gradient.Kind = Context2d$Gradient$Kind;
  Object.defineProperty(Context2d$Gradient$Units, 'USER_SPACE_ON_USE', {
    get: Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance
  });
  Object.defineProperty(Context2d$Gradient$Units, 'OBJECT_BOUNDING_BOX', {
    get: Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance
  });
  Context2d$Gradient.Units = Context2d$Gradient$Units;
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'LINEAR', {
    get: Context2d$Gradient$InterpolationMethod$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'NORMAL', {
    get: Context2d$Gradient$InterpolationMethod$NORMAL_getInstance
  });
  Context2d$Gradient.InterpolationMethod = Context2d$Gradient$InterpolationMethod;
  Context2d.Gradient = Context2d$Gradient;
  Context2d.BitmapPaint = Context2d$BitmapPaint;
  Context2d.Drawable = Context2d$Drawable;
  Context2d.SizedDrawable = Context2d$SizedDrawable;
  Context2d.BoundsDrawable = Context2d$BoundsDrawable;
  Context2d.FuncDrawable = Context2d$FuncDrawable;
  Context2d.StrokeInfo = Context2d$StrokeInfo;
  package$vector.Context2d = Context2d;
  package$vector.toFill_h1fete$ = toFill;
  package$vector.renderTo_wvu93x$ = renderTo;
  package$vector.filled_8a6l4s$ = filled;
  package$vector.scaled_74j9n8$ = scaled;
  package$vector.translated_74j9n8$ = translated;
  package$vector.render_hd3tpo$ = render;
  package$vector.renderNoNative_hd3tpo$ = renderNoNative;
  package$vector.renderToImage_eb0g75$ = renderToImage;
  package$vector.GraphicsPath = GraphicsPath;
  package$vector.SvgBuilder = SvgBuilder;
  package$vector.toSvgPathString_9fp9g$ = toSvgPathString;
  package$vector.Shape = Shape;
  package$vector.getBounds_infsew$ = getBounds;
  package$vector.toSvg_wxx4ll$ = toSvg_0;
  package$vector.toShape_eb0g75$ = toShape;
  package$vector.toSvg_899dyl$ = toSvg_1;
  package$vector.toShape_hd3tpo$ = toShape_0;
  package$vector.toSvg_6bzaqy$ = toSvg_2;
  package$vector.StyledShape = StyledShape;
  package$vector.toSvg_mjfkvb$ = toSvg_3;
  package$vector.FillShape = FillShape;
  package$vector.PolylineShape_init_aiomp7$ = PolylineShape_init;
  package$vector.PolylineShape = PolylineShape;
  package$vector.CompoundShape = CompoundShape;
  package$vector.TextShape = TextShape;
  package$vector.buildShape_f9sr8c$ = buildShape;
  package$vector.ShapeBuilder = ShapeBuilder;
  var package$chart = package$vector.chart || (package$vector.chart = {});
  package$chart.Chart = Chart;
  Object.defineProperty(ChartBars, 'Companion', {
    get: ChartBars$Companion_getInstance
  });
  ChartBars.DataPoint = ChartBars$DataPoint;
  Object.defineProperty(ChartBars$Fit, 'FULL', {
    get: ChartBars$Fit$FULL_getInstance
  });
  Object.defineProperty(ChartBars$Fit, 'DEG45', {
    get: ChartBars$Fit$DEG45_getInstance
  });
  Object.defineProperty(ChartBars$Fit, 'DEG90', {
    get: ChartBars$Fit$DEG90_getInstance
  });
  ChartBars.Fit = ChartBars$Fit;
  package$chart.ChartBars = ChartBars;
  SVG_0.Style = SVG$Style;
  Object.defineProperty(SVG$GradientUnits, 'USER_SPACE_ON_USER', {
    get: SVG$GradientUnits$USER_SPACE_ON_USER_getInstance
  });
  Object.defineProperty(SVG$GradientUnits, 'OBJECT_BOUNDING_BOX', {
    get: SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance
  });
  SVG_0.GradientUnits = SVG$GradientUnits;
  Object.defineProperty(SVG_0, 'Companion', {
    get: SVG$Companion_getInstance
  });
  SVG_0.PathToken = SVG$PathToken;
  SVG_0.PathTokenNumber = SVG$PathTokenNumber;
  SVG_0.PathTokenCmd = SVG$PathTokenCmd;
  Object.defineProperty(SVG$SvgStyle, 'Companion', {
    get: SVG$SvgStyle$Companion_getInstance
  });
  SVG_0.SvgStyle = SVG$SvgStyle;
  var package$format_0 = package$vector.format || (package$vector.format = {});
  package$format_0.SVG_init_61zpoe$ = SVG_init;
  package$format_0.SVG = SVG_0;
  Object.defineProperty(package$format, 'HtmlCanvas', {
    get: HtmlCanvas_getInstance
  });
  package$format.toLike_ng27xv$ = toLike;
  Object.defineProperty(package$format, 'HtmlImage', {
    get: HtmlImage_getInstance
  });
  package$format.toHtmlNative_p18lal$ = toHtmlNative;
  Object.defineProperty(package$format, 'nativeImageFormatProvider', {
    get: function () {
      return nativeImageFormatProvider;
    }
  });
  package$format.HtmlNativeImage_init_3rpr94$ = HtmlNativeImage_init;
  package$format.HtmlNativeImage_init_4en8az$ = HtmlNativeImage_init_0;
  package$format.HtmlNativeImage = HtmlNativeImage;
  Object.defineProperty(package$format, 'HtmlNativeImageFormatProvider', {
    get: HtmlNativeImageFormatProvider_getInstance
  });
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  Object.defineProperty(package$format, 'BrowserImage', {
    get: BrowserImage_getInstance
  });
  package$format.CanvasContext2dRenderer = CanvasContext2dRenderer;
  var package$internal_0 = package$format.internal || (package$format.internal = {});
  package$internal_0.jsRequire_y4putb$ = jsRequire;
  Object.defineProperty(package$internal_0, 'nodeJsCanvas', {
    get: get_nodeJsCanvas
  });
  Object.defineProperty(Shape.prototype, 'left', Object.getOwnPropertyDescriptor(Context2d$BoundsDrawable.prototype, 'left'));
  Object.defineProperty(Shape.prototype, 'top', Object.getOwnPropertyDescriptor(Context2d$BoundsDrawable.prototype, 'top'));
  Object.defineProperty(Shape.prototype, 'width', Object.getOwnPropertyDescriptor(Context2d$BoundsDrawable.prototype, 'width'));
  Object.defineProperty(Shape.prototype, 'height', Object.getOwnPropertyDescriptor(Context2d$BoundsDrawable.prototype, 'height'));
  Object.defineProperty(StyledShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(Shape.prototype, 'bounds'));
  StyledShape.prototype.containsPoint_lu1900$ = Shape.prototype.containsPoint_lu1900$;
  Object.defineProperty(StyledShape.prototype, 'left', Object.getOwnPropertyDescriptor(Shape.prototype, 'left'));
  Object.defineProperty(StyledShape.prototype, 'top', Object.getOwnPropertyDescriptor(Shape.prototype, 'top'));
  Object.defineProperty(StyledShape.prototype, 'width', Object.getOwnPropertyDescriptor(Shape.prototype, 'width'));
  Object.defineProperty(StyledShape.prototype, 'height', Object.getOwnPropertyDescriptor(Shape.prototype, 'height'));
  FillShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  FillShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  FillShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  Object.defineProperty(FillShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'bounds'));
  Object.defineProperty(FillShape.prototype, 'left', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'left'));
  Object.defineProperty(FillShape.prototype, 'top', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'top'));
  Object.defineProperty(FillShape.prototype, 'width', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'width'));
  Object.defineProperty(FillShape.prototype, 'height', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'height'));
  PolylineShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  PolylineShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  Object.defineProperty(PolylineShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'bounds'));
  Object.defineProperty(PolylineShape.prototype, 'left', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'left'));
  Object.defineProperty(PolylineShape.prototype, 'top', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'top'));
  Object.defineProperty(PolylineShape.prototype, 'width', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'width'));
  Object.defineProperty(PolylineShape.prototype, 'height', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'height'));
  Object.defineProperty(CompoundShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(Shape.prototype, 'bounds'));
  Object.defineProperty(CompoundShape.prototype, 'left', Object.getOwnPropertyDescriptor(Shape.prototype, 'left'));
  Object.defineProperty(CompoundShape.prototype, 'top', Object.getOwnPropertyDescriptor(Shape.prototype, 'top'));
  Object.defineProperty(CompoundShape.prototype, 'width', Object.getOwnPropertyDescriptor(Shape.prototype, 'width'));
  Object.defineProperty(CompoundShape.prototype, 'height', Object.getOwnPropertyDescriptor(Shape.prototype, 'height'));
  Object.defineProperty(TextShape.prototype, 'path', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'path'));
  TextShape.prototype.getSvgXmlAttributes_b7xfbk$ = StyledShape.prototype.getSvgXmlAttributes_b7xfbk$;
  TextShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  Object.defineProperty(TextShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'bounds'));
  TextShape.prototype.containsPoint_lu1900$ = StyledShape.prototype.containsPoint_lu1900$;
  Object.defineProperty(TextShape.prototype, 'left', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'left'));
  Object.defineProperty(TextShape.prototype, 'top', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'top'));
  Object.defineProperty(TextShape.prototype, 'width', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'width'));
  Object.defineProperty(TextShape.prototype, 'height', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'height'));
  fourcc = new Extra$Property(void 0, fourcc$lambda);
  nativeImageLoadingEnabled = true;
  RegisteredImageFormats_formats = ImageFormats_init([]);
  KORIM_VERSION = '1.9.8';
  nativeImageFormatProvider = HtmlNativeImageFormatProvider_getInstance();
  myJsRequire = require;
  nodeJsCanvas = lazy(nodeJsCanvas$lambda);
  Kotlin.defineModule('korim-root-korim', _);
  return _;
}));

//# sourceMappingURL=korim-root-korim.js.map
