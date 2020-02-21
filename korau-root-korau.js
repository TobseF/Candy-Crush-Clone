(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'klock-root-klock', 'kds-root-kds', 'korio-root-korio', 'kmem-root-kmem', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('klock-root-klock'), require('kds-root-kds'), require('korio-root-korio'), require('kmem-root-kmem'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korau-root-korau'.");
    }
    if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korau-root-korau'.");
    }
    if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korau-root-korau'.");
    }
    if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korau-root-korau'.");
    }
    if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korau-root-korau'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korau-root-korau'.");
    }
    root['korau-root-korau'] = factory(typeof this['korau-root-korau'] === 'undefined' ? {} : this['korau-root-korau'], kotlin, this['klock-root-klock'], this['kds-root-kds'], this['korio-root-korio'], this['kmem-root-kmem'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$klock_root_klock, $module$kds_root_kds, $module$korio_root_korio, $module$kmem_root_kmem, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var openAsync = $module$korio_root_korio.com.soywiz.korio.stream.openAsync_m1iwyb$;
  var unsupported = $module$korio_root_korio.com.soywiz.korio.lang.unsupported;
  var toAsync = $module$korio_root_korio.com.soywiz.korio.stream.toAsync_ucmi9i$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var printStackTrace = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var PathInfo = $module$korio_root_korio.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_root_korio.com.soywiz.korio.file.get_extensionLC_a72sjq$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var numberToDouble = Kotlin.numberToDouble;
  var ByteArrayBuilder_init = $module$korio_root_korio.$$importsForInline$$['kmem-root-kmem'].com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var MemorySyncStream = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_i9anm0$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  var VfsOpenMode = $module$korio_root_korio.com.soywiz.korio.file.VfsOpenMode;
  var Any = Object;
  var L0 = Kotlin.Long.ZERO;
  var readStream = $module$korio_root_korio.com.soywiz.korio.stream.readStream_50x9bh$;
  var readBytesUpTo = $module$korio_root_korio.com.soywiz.korio.stream.readBytesUpTo_a0g59h$;
  var UByteArrayInt = $module$kmem_root_kmem.com.soywiz.kmem.UByteArrayInt;
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var openSync = $module$korio_root_korio.com.soywiz.korio.stream.openSync_m1iwyb$;
  var readString = $module$korio_root_korio.com.soywiz.korio.stream.readString_6ey4ts$;
  var equals = Kotlin.equals;
  var readString_0 = $module$korio_root_korio.com.soywiz.korio.stream.readString_4xit9n$;
  var readU8 = $module$korio_root_korio.com.soywiz.korio.stream.readU8_yjldv$;
  var extract = $module$kmem_root_kmem.com.soywiz.kmem.extract_dqglrj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var lang = $module$korio_root_korio.com.soywiz.korio.lang;
  var extract_0 = $module$kmem_root_kmem.com.soywiz.kmem.extract_e4yvb3$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var format = $module$korio_root_korio.com.soywiz.korio.lang.format_e33kwl$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var hasAvailable = $module$korio_root_korio.com.soywiz.korio.stream.hasAvailable_g5ykjz$;
  var readS8 = $module$korio_root_korio.com.soywiz.korio.stream.readS8_yjldv$;
  var readS64LE = $module$korio_root_korio.com.soywiz.korio.stream.readS64LE_yjldv$;
  var readS32LE = $module$korio_root_korio.com.soywiz.korio.stream.readS32LE_yjldv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var invalidOp = $module$korio_root_korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var Unit = Kotlin.kotlin.Unit;
  var MemorySyncStream_0 = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var readS8_0 = $module$kmem_root_kmem.com.soywiz.kmem.readS8_mrm5p$;
  var toShort = Kotlin.toShort;
  var readS16LE = $module$kmem_root_kmem.com.soywiz.kmem.readS16LE_mrm5p$;
  var readS24LE = $module$kmem_root_kmem.com.soywiz.kmem.readS24LE_mrm5p$;
  var writeString = $module$korio_root_korio.com.soywiz.korio.stream.writeString_wczyte$;
  var write32LE = $module$korio_root_korio.com.soywiz.korio.stream.write32LE_1j05bi$;
  var write16LE = $module$korio_root_korio.com.soywiz.korio.stream.write16LE_1j05bi$;
  var writeShortArrayLE = $module$korio_root_korio.com.soywiz.korio.stream.writeShortArrayLE_axfcu2$;
  var readS16LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readS16LE_yjldv$;
  var readU32LE = $module$korio_root_korio.com.soywiz.korio.stream.readU32LE_yjldv$;
  var runBlockingNoSuspensions = $module$korio_root_korio.com.soywiz.korio.async.runBlockingNoSuspensions_g8ox3d$;
  var numberToInt = Kotlin.numberToInt;
  var Math_0 = Math;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var clamp = $module$kmem_root_kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var toByte = Kotlin.toByte;
  var wrapFunction = Kotlin.wrapFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var contentDeepHashCode = Kotlin.arrayDeepHashCode;
  var contentDeepEquals = Kotlin.arrayDeepEquals;
  var Array_0 = Array;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var ShortArrayDeque = $module$kds_root_kds.com.soywiz.kds.ShortArrayDeque;
  var Closeable = $module$korio_root_korio.com.soywiz.korio.lang.Closeable;
  var get_baseName = $module$korio_root_korio.com.soywiz.korio.file.get_baseName_hsf53c$;
  var math = Kotlin.kotlin.math;
  var delay = $module$korio_root_korio.com.soywiz.korio.async.delay_fv8bff$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var DateTime = $module$klock_root_klock.com.soywiz.klock.DateTime;
  var Disposable = $module$korio_root_korio.com.soywiz.korio.lang.Disposable;
  var LocalVfs = $module$korio_root_korio.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio_root_korio.com.soywiz.korio.file.std.UrlVfs;
  var Cancellable = $module$korio_root_korio.com.soywiz.korio.lang.Cancellable;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var get_uniVfs = $module$korio_root_korio.com.soywiz.korio.file.std.get_uniVfs_pdl1vz$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Deferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.Deferred;
  var throwUPAE = Kotlin.throwUPAE;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  var delay_0 = $module$korio_root_korio.com.soywiz.korio.async.delay_boqi9f$;
  var FloatArrayDeque = $module$kds_root_kds.com.soywiz.kds.FloatArrayDeque;
  var Pool_init = $module$kds_root_kds.com.soywiz.kds.Pool_init_rz0iom$;
  var intArrayListOf = $module$kds_root_kds.com.soywiz.kds.intArrayListOf_pmhfmb$;
  var read = $module$korio_root_korio.com.soywiz.korio.stream.read_30vnfr$;
  var ByteArrayDeque = $module$kds_root_kds.com.soywiz.kds.ByteArrayDeque;
  var UInt = Kotlin.kotlin.UInt;
  var UByte = Kotlin.kotlin.UByte;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var L_1 = Kotlin.Long.NEG_ONE;
  var L_4 = Kotlin.Long.fromInt(-4);
  var L44 = Kotlin.Long.fromInt(44);
  var L1 = Kotlin.Long.ONE;
  var L_32768 = Kotlin.Long.fromInt(-32768);
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var L_255 = Kotlin.Long.fromInt(-255);
  var L_253 = Kotlin.Long.fromInt(-253);
  var L_318 = Kotlin.Long.fromInt(-318);
  var L_351 = Kotlin.Long.fromInt(-351);
  var L_367 = Kotlin.Long.fromInt(-367);
  var L_254 = Kotlin.Long.fromInt(-254);
  var L_287 = Kotlin.Long.fromInt(-287);
  var L_252 = Kotlin.Long.fromInt(-252);
  var L_413 = Kotlin.Long.fromInt(-413);
  var L_477 = Kotlin.Long.fromInt(-477);
  var L_542 = Kotlin.Long.fromInt(-542);
  var L_575 = Kotlin.Long.fromInt(-575);
  var L_383 = Kotlin.Long.fromInt(-383);
  var L_399 = Kotlin.Long.fromInt(-399);
  var L_429 = Kotlin.Long.fromInt(-429);
  var L_493 = Kotlin.Long.fromInt(-493);
  var L_559 = Kotlin.Long.fromInt(-559);
  var L_382 = Kotlin.Long.fromInt(-382);
  var L_415 = Kotlin.Long.fromInt(-415);
  var L_349 = Kotlin.Long.fromInt(-349);
  var L_414 = Kotlin.Long.fromInt(-414);
  var L_447 = Kotlin.Long.fromInt(-447);
  var L_463 = Kotlin.Long.fromInt(-463);
  var L_479 = Kotlin.Long.fromInt(-479);
  var L_319 = Kotlin.Long.fromInt(-319);
  var L_335 = Kotlin.Long.fromInt(-335);
  var L_251 = Kotlin.Long.fromInt(-251);
  var L_572 = Kotlin.Long.fromInt(-572);
  var L_733 = Kotlin.Long.fromInt(-733);
  var L_830 = Kotlin.Long.fromInt(-830);
  var L_863 = Kotlin.Long.fromInt(-863);
  var L_879 = Kotlin.Long.fromInt(-879);
  var L_511 = Kotlin.Long.fromInt(-511);
  var L_527 = Kotlin.Long.fromInt(-527);
  var L_543 = Kotlin.Long.fromInt(-543);
  var L_703 = Kotlin.Long.fromInt(-703);
  var L_719 = Kotlin.Long.fromInt(-719);
  var L_799 = Kotlin.Long.fromInt(-799);
  var L_815 = Kotlin.Long.fromInt(-815);
  var L_525 = Kotlin.Long.fromInt(-525);
  var L_605 = Kotlin.Long.fromInt(-605);
  var L_685 = Kotlin.Long.fromInt(-685);
  var L_765 = Kotlin.Long.fromInt(-765);
  var L_831 = Kotlin.Long.fromInt(-831);
  var L_846 = Kotlin.Long.fromInt(-846);
  var L_591 = Kotlin.Long.fromInt(-591);
  var L_671 = Kotlin.Long.fromInt(-671);
  var L_751 = Kotlin.Long.fromInt(-751);
  var L_397 = Kotlin.Long.fromInt(-397);
  var L_557 = Kotlin.Long.fromInt(-557);
  var L_622 = Kotlin.Long.fromInt(-622);
  var L_653 = Kotlin.Long.fromInt(-653);
  var L_735 = Kotlin.Long.fromInt(-735);
  var L_750 = Kotlin.Long.fromInt(-750);
  var L_250 = Kotlin.Long.fromInt(-250);
  var L_2107 = Kotlin.Long.fromInt(-2107);
  var L_2507 = Kotlin.Long.fromInt(-2507);
  var L_2764 = Kotlin.Long.fromInt(-2764);
  var L_2909 = Kotlin.Long.fromInt(-2909);
  var L_2974 = Kotlin.Long.fromInt(-2974);
  var L_3007 = Kotlin.Long.fromInt(-3007);
  var L_3023 = Kotlin.Long.fromInt(-3023);
  var L_767 = Kotlin.Long.fromInt(-767);
  var L_1052 = Kotlin.Long.fromInt(-1052);
  var L_1213 = Kotlin.Long.fromInt(-1213);
  var L_1277 = Kotlin.Long.fromInt(-1277);
  var L_1358 = Kotlin.Long.fromInt(-1358);
  var L_1405 = Kotlin.Long.fromInt(-1405);
  var L_1469 = Kotlin.Long.fromInt(-1469);
  var L_1535 = Kotlin.Long.fromInt(-1535);
  var L_1550 = Kotlin.Long.fromInt(-1550);
  var L_1582 = Kotlin.Long.fromInt(-1582);
  var L_1614 = Kotlin.Long.fromInt(-1614);
  var L_1647 = Kotlin.Long.fromInt(-1647);
  var L_1662 = Kotlin.Long.fromInt(-1662);
  var L_1694 = Kotlin.Long.fromInt(-1694);
  var L_1726 = Kotlin.Long.fromInt(-1726);
  var L_1759 = Kotlin.Long.fromInt(-1759);
  var L_1774 = Kotlin.Long.fromInt(-1774);
  var L_1807 = Kotlin.Long.fromInt(-1807);
  var L_1822 = Kotlin.Long.fromInt(-1822);
  var L_1854 = Kotlin.Long.fromInt(-1854);
  var L_1886 = Kotlin.Long.fromInt(-1886);
  var L_1919 = Kotlin.Long.fromInt(-1919);
  var L_1935 = Kotlin.Long.fromInt(-1935);
  var L_1951 = Kotlin.Long.fromInt(-1951);
  var L_1967 = Kotlin.Long.fromInt(-1967);
  var L_1983 = Kotlin.Long.fromInt(-1983);
  var L_1999 = Kotlin.Long.fromInt(-1999);
  var L_2015 = Kotlin.Long.fromInt(-2015);
  var L_2031 = Kotlin.Long.fromInt(-2031);
  var L_2047 = Kotlin.Long.fromInt(-2047);
  var L_2063 = Kotlin.Long.fromInt(-2063);
  var L_2079 = Kotlin.Long.fromInt(-2079);
  var L_2095 = Kotlin.Long.fromInt(-2095);
  var L_780 = Kotlin.Long.fromInt(-780);
  var L_973 = Kotlin.Long.fromInt(-973);
  var L_910 = Kotlin.Long.fromInt(-910);
  var L_959 = Kotlin.Long.fromInt(-959);
  var L_943 = Kotlin.Long.fromInt(-943);
  var L_1039 = Kotlin.Long.fromInt(-1039);
  var L_1183 = Kotlin.Long.fromInt(-1183);
  var L_1199 = Kotlin.Long.fromInt(-1199);
  var L_1343 = Kotlin.Long.fromInt(-1343);
  var L_1391 = Kotlin.Long.fromInt(-1391);
  var L_2367 = Kotlin.Long.fromInt(-2367);
  var L_2383 = Kotlin.Long.fromInt(-2383);
  var L_2399 = Kotlin.Long.fromInt(-2399);
  var L_2415 = Kotlin.Long.fromInt(-2415);
  var L_2431 = Kotlin.Long.fromInt(-2431);
  var L_2447 = Kotlin.Long.fromInt(-2447);
  var L_2463 = Kotlin.Long.fromInt(-2463);
  var L_2479 = Kotlin.Long.fromInt(-2479);
  var L_2495 = Kotlin.Long.fromInt(-2495);
  var L_2895 = Kotlin.Long.fromInt(-2895);
  var L_1179 = Kotlin.Long.fromInt(-1179);
  var L_1579 = Kotlin.Long.fromInt(-1579);
  var L_1836 = Kotlin.Long.fromInt(-1836);
  var L_1996 = Kotlin.Long.fromInt(-1996);
  var L_2124 = Kotlin.Long.fromInt(-2124);
  var L_2253 = Kotlin.Long.fromInt(-2253);
  var L_2333 = Kotlin.Long.fromInt(-2333);
  var L_2413 = Kotlin.Long.fromInt(-2413);
  var L_2477 = Kotlin.Long.fromInt(-2477);
  var L_2542 = Kotlin.Long.fromInt(-2542);
  var L_2574 = Kotlin.Long.fromInt(-2574);
  var L_2607 = Kotlin.Long.fromInt(-2607);
  var L_2622 = Kotlin.Long.fromInt(-2622);
  var L_2655 = Kotlin.Long.fromInt(-2655);
  var L_766 = Kotlin.Long.fromInt(-766);
  var L_798 = Kotlin.Long.fromInt(-798);
  var L_862 = Kotlin.Long.fromInt(-862);
  var L_895 = Kotlin.Long.fromInt(-895);
  var L_911 = Kotlin.Long.fromInt(-911);
  var L_927 = Kotlin.Long.fromInt(-927);
  var L_975 = Kotlin.Long.fromInt(-975);
  var L_991 = Kotlin.Long.fromInt(-991);
  var L_1007 = Kotlin.Long.fromInt(-1007);
  var L_1023 = Kotlin.Long.fromInt(-1023);
  var L_1055 = Kotlin.Long.fromInt(-1055);
  var L_1070 = Kotlin.Long.fromInt(-1070);
  var L_1103 = Kotlin.Long.fromInt(-1103);
  var L_1119 = Kotlin.Long.fromInt(-1119);
  var L_1135 = Kotlin.Long.fromInt(-1135);
  var L_1151 = Kotlin.Long.fromInt(-1151);
  var L_1167 = Kotlin.Long.fromInt(-1167);
  var L_1439 = Kotlin.Long.fromInt(-1439);
  var L_1455 = Kotlin.Long.fromInt(-1455);
  var L_1471 = Kotlin.Long.fromInt(-1471);
  var L_1487 = Kotlin.Long.fromInt(-1487);
  var L_1503 = Kotlin.Long.fromInt(-1503);
  var L_1519 = Kotlin.Long.fromInt(-1519);
  var L_1551 = Kotlin.Long.fromInt(-1551);
  var L_1567 = Kotlin.Long.fromInt(-1567);
  var L_2319 = Kotlin.Long.fromInt(-2319);
  var L_892 = Kotlin.Long.fromInt(-892);
  var L_2058 = Kotlin.Long.fromInt(-2058);
  var L_2620 = Kotlin.Long.fromInt(-2620);
  var L_2828 = Kotlin.Long.fromInt(-2828);
  var L_2957 = Kotlin.Long.fromInt(-2957);
  var L_3039 = Kotlin.Long.fromInt(-3039);
  var L_604 = Kotlin.Long.fromInt(-604);
  var L_734 = Kotlin.Long.fromInt(-734);
  var L_782 = Kotlin.Long.fromInt(-782);
  var L_847 = Kotlin.Long.fromInt(-847);
  var L_1019 = Kotlin.Long.fromInt(-1019);
  var L_1276 = Kotlin.Long.fromInt(-1276);
  var L_1452 = Kotlin.Long.fromInt(-1452);
  var L_1581 = Kotlin.Long.fromInt(-1581);
  var L_1677 = Kotlin.Long.fromInt(-1677);
  var L_1757 = Kotlin.Long.fromInt(-1757);
  var L_1821 = Kotlin.Long.fromInt(-1821);
  var L_1933 = Kotlin.Long.fromInt(-1933);
  var L_1997 = Kotlin.Long.fromInt(-1997);
  var L_1407 = Kotlin.Long.fromInt(-1407);
  var L_1423 = Kotlin.Long.fromInt(-1423);
  var L_1663 = Kotlin.Long.fromInt(-1663);
  var L_1743 = Kotlin.Long.fromInt(-1743);
  var L_2575 = Kotlin.Long.fromInt(-2575);
  var L_2591 = Kotlin.Long.fromInt(-2591);
  var L_2751 = Kotlin.Long.fromInt(-2751);
  var L_2767 = Kotlin.Long.fromInt(-2767);
  var L_2783 = Kotlin.Long.fromInt(-2783);
  var L_2799 = Kotlin.Long.fromInt(-2799);
  var L_2815 = Kotlin.Long.fromInt(-2815);
  var L_317 = Kotlin.Long.fromInt(-317);
  var L_381 = Kotlin.Long.fromInt(-381);
  var L_446 = Kotlin.Long.fromInt(-446);
  var L_478 = Kotlin.Long.fromInt(-478);
  var L_509 = Kotlin.Long.fromInt(-509);
  var L_811 = Kotlin.Long.fromInt(-811);
  var L_1451 = Kotlin.Long.fromInt(-1451);
  var L_1756 = Kotlin.Long.fromInt(-1756);
  var L_1900 = Kotlin.Long.fromInt(-1900);
  var L_2028 = Kotlin.Long.fromInt(-2028);
  var L_2189 = Kotlin.Long.fromInt(-2189);
  var L_2414 = Kotlin.Long.fromInt(-2414);
  var L_2445 = Kotlin.Long.fromInt(-2445);
  var L_2511 = Kotlin.Long.fromInt(-2511);
  var L_2526 = Kotlin.Long.fromInt(-2526);
  var L_2559 = Kotlin.Long.fromInt(-2559);
  var L_621 = Kotlin.Long.fromInt(-621);
  var L_749 = Kotlin.Long.fromInt(-749);
  var L_590 = Kotlin.Long.fromInt(-590);
  var L_1071 = Kotlin.Long.fromInt(-1071);
  var L_1087 = Kotlin.Long.fromInt(-1087);
  var L_1102 = Kotlin.Long.fromInt(-1102);
  var L_1711 = Kotlin.Long.fromInt(-1711);
  var L_1727 = Kotlin.Long.fromInt(-1727);
  var L_1887 = Kotlin.Long.fromInt(-1887);
  var L_2159 = Kotlin.Long.fromInt(-2159);
  var L_2175 = Kotlin.Long.fromInt(-2175);
  var uintDivide = Kotlin.kotlin.uintDivide_oqfnby$;
  var uintRemainder = Kotlin.kotlin.uintRemainder_oqfnby$;
  var UShort_init = Kotlin.kotlin.UShort;
  var uintCompare = Kotlin.kotlin.uintCompare_vux9f0$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var fill = Kotlin.kotlin.collections.fill_6mk3ue$;
  var toRawBits = Kotlin.floatToRawBits;
  var toRawBits_0 = Kotlin.doubleToRawBits;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var Error_init = Kotlin.kotlin.Error_init;
  var Error_0 = Kotlin.kotlin.Error;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var toString = Kotlin.toString;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var unboxChar = Kotlin.unboxChar;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var toString_1 = Kotlin.kotlin.text.toString_k13f4a$;
  var toString_2 = Kotlin.kotlin.text.toString_if0zpk$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var decodeToString = Kotlin.kotlin.text.decodeToString_964n91$;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var time = Kotlin.kotlin.time;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ULong_init = Kotlin.kotlin.ULong;
  InvalidAudioFormatException.prototype = Object.create(RuntimeException.prototype);
  InvalidAudioFormatException.prototype.constructor = InvalidAudioFormatException;
  AudioFormats.prototype = Object.create(AudioFormat.prototype);
  AudioFormats.prototype.constructor = AudioFormats;
  MP3Base.prototype = Object.create(AudioFormat.prototype);
  MP3Base.prototype.constructor = MP3Base;
  MP3.prototype = Object.create(MP3Base.prototype);
  MP3.prototype.constructor = MP3;
  MP3$Companion.prototype = Object.create(MP3.prototype);
  MP3$Companion.prototype.constructor = MP3$Companion;
  MP3Base$Parser$Companion$ChannelMode.prototype = Object.create(Enum.prototype);
  MP3Base$Parser$Companion$ChannelMode.prototype.constructor = MP3Base$Parser$Companion$ChannelMode;
  OggBase.prototype = Object.create(AudioFormat.prototype);
  OggBase.prototype.constructor = OggBase;
  OGG.prototype = Object.create(OggBase.prototype);
  OGG.prototype.constructor = OGG;
  OGG$Companion.prototype = Object.create(OGG.prototype);
  OGG$Companion.prototype.constructor = OGG$Companion;
  WAV.prototype = Object.create(AudioFormat.prototype);
  WAV.prototype.constructor = WAV;
  WAV$Companion.prototype = Object.create(WAV.prototype);
  WAV$Companion.prototype.constructor = WAV$Companion;
  WAV$decodeStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  WAV$decodeStream$ObjectLiteral.prototype.constructor = WAV$decodeStream$ObjectLiteral;
  MP3Decoder.prototype = Object.create(AudioFormat.prototype);
  MP3Decoder.prototype.constructor = MP3Decoder;
  MP3Decoder$Companion.prototype = Object.create(MP3Decoder.prototype);
  MP3Decoder$Companion.prototype.constructor = MP3Decoder$Companion;
  AudioConversionQuality.prototype = Object.create(Enum.prototype);
  AudioConversionQuality.prototype.constructor = AudioConversionQuality;
  toStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  toStream$ObjectLiteral.prototype.constructor = toStream$ObjectLiteral;
  AudioStream$Companion$generator$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  AudioStream$Companion$generator$ObjectLiteral.prototype.constructor = AudioStream$Companion$generator$ObjectLiteral;
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype.constructor = NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral;
  NativeSoundProvider$createSound$ObjectLiteral.prototype = Object.create(NativeSound.prototype);
  NativeSoundProvider$createSound$ObjectLiteral.prototype.constructor = NativeSoundProvider$createSound$ObjectLiteral;
  DummyNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  DummyNativeSoundProvider.prototype.constructor = DummyNativeSoundProvider;
  DummyNativeSoundChannel.prototype = Object.create(NativeSoundChannel.prototype);
  DummyNativeSoundChannel.prototype.constructor = DummyNativeSoundChannel;
  HtmlNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  HtmlNativeSoundProvider.prototype.constructor = HtmlNativeSoundProvider;
  AudioBufferNativeSound$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  AudioBufferNativeSound$play$ObjectLiteral.prototype.constructor = AudioBufferNativeSound$play$ObjectLiteral;
  AudioBufferNativeSound.prototype = Object.create(NativeSound.prototype);
  AudioBufferNativeSound.prototype.constructor = AudioBufferNativeSound;
  JsPlatformAudioOutput.prototype = Object.create(PlatformAudioOutput.prototype);
  JsPlatformAudioOutput.prototype.constructor = JsPlatformAudioOutput;
  NativeAudioDecoderProgram.prototype = Object.create(NativeAudioDecoder.prototype);
  NativeAudioDecoderProgram.prototype.constructor = NativeAudioDecoderProgram;
  NativeAudioDecoder$createAudioStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  NativeAudioDecoder$createAudioStream$ObjectLiteral.prototype.constructor = NativeAudioDecoder$createAudioStream$ObjectLiteral;
  Runtime.prototype = Object.create(AbstractRuntime.prototype);
  Runtime.prototype.constructor = Runtime;
  MiniMp3.prototype = Object.create(Runtime.prototype);
  MiniMp3.prototype.constructor = MiniMp3;
  AbstractRuntime$ExitError.prototype = Object.create(Error_0.prototype);
  AbstractRuntime$ExitError.prototype.constructor = AbstractRuntime$ExitError;
  function Korau() {
    Korau_instance = this;
    this.VERSION = KORAU_VERSION;
  }
  Korau.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korau',
    interfaces: []
  };
  var Korau_instance = null;
  function Korau_getInstance() {
    if (Korau_instance === null) {
      new Korau();
    }
    return Korau_instance;
  }
  function AudioFormat(exts) {
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
  function AudioFormat$Info(duration, channels) {
    if (duration === void 0) {
      duration = TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
    }
    if (channels === void 0)
      channels = 2;
    this.duration = duration;
    this.channels = channels;
    this.$delegate_q4l724$_0 = new Extra$Mixin();
  }
  AudioFormat$Info.prototype.toString = function () {
    return 'Info(duration=' + get_niceStr(this.duration.milliseconds) + 'ms, channels=' + this.channels + ')';
  };
  Object.defineProperty(AudioFormat$Info.prototype, 'extra', {
    get: function () {
      return this.$delegate_q4l724$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_q4l724$_0.extra = tmp$;
    }
  });
  AudioFormat$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: [Extra]
  };
  AudioFormat$Info.prototype.component1 = function () {
    return this.duration;
  };
  AudioFormat$Info.prototype.component2 = function () {
    return this.channels;
  };
  AudioFormat$Info.prototype.copy_dgejwp$ = function (duration, channels) {
    return new AudioFormat$Info(duration === void 0 ? this.duration : duration, channels === void 0 ? this.channels : channels);
  };
  AudioFormat$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.duration) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    return result;
  };
  AudioFormat$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.duration, other.duration) && Kotlin.equals(this.channels, other.channels)))));
  };
  AudioFormat.prototype.tryReadInfo_axnxby$ = function (data, continuation) {
    return null;
  };
  AudioFormat.prototype.decodeStream_axnxby$ = function (data, continuation) {
    return null;
  };
  function Coroutine$decode_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$decode_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_axnxby$.prototype.constructor = Coroutine$decode_axnxby$;
  Coroutine$decode_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = toData(tmp$, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
  AudioFormat.prototype.decode_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$decode_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_fqrh44$.prototype.constructor = Coroutine$decode_fqrh44$;
  Coroutine$decode_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_axnxby$(openAsync(this.local$data), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = toData(tmp$, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
  AudioFormat.prototype.decode_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormat.prototype.encode_ohj27w$ = function (data, out, filename, continuation) {
    return unsupported();
  };
  function Coroutine$encodeToByteArray_szcvz7$($this, data_0, filename_0, format_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$buffer = void 0;
    this.local$data = data_0;
    this.local$filename = filename_0;
    this.local$format = format_0;
  }
  Coroutine$encodeToByteArray_szcvz7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encodeToByteArray_szcvz7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encodeToByteArray_szcvz7$.prototype.constructor = Coroutine$encodeToByteArray_szcvz7$;
  Coroutine$encodeToByteArray_szcvz7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$filename === void 0)
              this.local$filename = 'out.wav';
            if (this.local$format === void 0)
              this.local$format = this.$this;
            this.local$buffer = ByteArrayBuilder_init(4096);
            var s = MemorySyncStream(this.local$buffer);
            this.state_0 = 2;
            this.result_0 = this.local$format.encode_ohj27w$(this.local$data, toAsync(s), this.local$filename, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$buffer.toByteArray();
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
  AudioFormat.prototype.encodeToByteArray_szcvz7$ = function (data_0, filename_0, format_0, continuation_0, suspended) {
    var instance = new Coroutine$encodeToByteArray_szcvz7$(this, data_0, filename_0, format_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormat.prototype.toString = function () {
    return 'AudioFormat(' + sorted(this.extensions) + ')';
  };
  AudioFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormat',
    interfaces: []
  };
  function InvalidAudioFormatException(message) {
    RuntimeException_init(message, this);
    this.name = 'InvalidAudioFormatException';
  }
  InvalidAudioFormatException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidAudioFormatException',
    interfaces: [RuntimeException]
  };
  function invalidAudioFormat(message) {
    if (message === void 0)
      message = 'invalid audio format';
    throw new InvalidAudioFormatException(message);
  }
  var defaultAudioFormats;
  function AudioFormats() {
    AudioFormat.call(this, []);
    this.formats = LinkedHashSet_init();
  }
  AudioFormats.prototype.register_rtj1ud$ = function (formats) {
    addAll(this.formats, formats);
    return this;
  };
  AudioFormats.prototype.register_19yo1f$ = function (formats) {
    addAll_0(this.formats, formats);
    return this;
  };
  function Coroutine$tryReadInfo_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$.prototype.constructor = Coroutine$tryReadInfo_axnxby$;
  Coroutine$tryReadInfo_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var format = this.local$tmp$.next();
            this.exceptionState_0 = 4;
            this.state_0 = 2;
            this.result_0 = format.tryReadInfo_axnxby$(this.local$data.duplicate(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 4;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return this.local$tmp$_0;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            }
             else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 1;
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            return null;
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
  AudioFormats.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStream_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$format = void 0;
    this.local$data = data_0;
  }
  Coroutine$decodeStream_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_axnxby$.prototype.constructor = Coroutine$decodeStream_axnxby$;
  Coroutine$decodeStream_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            this.local$format = this.local$tmp$.next();
            this.exceptionState_0 = 6;
            this.state_0 = 2;
            this.result_0 = this.local$format.tryReadInfo_axnxby$(this.local$data.duplicate(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (this.result_0 == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$format.decodeStream_axnxby$(this.local$data.duplicate(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            return this.local$tmp$_0;
          case 6:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            }
             else
              throw e;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            throw this.exception_0;
          case 9:
            return null;
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
  AudioFormats.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormats.prototype.encode_ohj27w$ = function (data, out, filename, continuation) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(filename));
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
      throw UnsupportedOperationException_init("Don't know how to generate file for extension '" + ext + "'");
    }
    var format = tmp$;
    return format.encode_ohj27w$(data, out, filename, continuation);
  };
  AudioFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormats',
    interfaces: [AudioFormat]
  };
  function Coroutine$readSoundInfo($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readSoundInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSoundInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSoundInfo.prototype.constructor = Coroutine$readSoundInfo;
  Coroutine$readSoundInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            var mode;
            mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$formats.tryReadInfo_axnxby$(this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = this.result_0;
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            }
             else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
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
  function readSoundInfo($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readSoundInfo($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function registerStandard($receiver) {
    $receiver.register_rtj1ud$([WAV$Companion_getInstance(), OGG$Companion_getInstance(), MP3$Companion_getInstance()]);
    return $receiver;
  }
  function MP3() {
    MP3$Companion_getInstance();
    MP3Base.call(this);
  }
  function MP3$Companion() {
    MP3$Companion_instance = this;
    MP3.call(this);
  }
  MP3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [MP3]
  };
  var MP3$Companion_instance = null;
  function MP3$Companion_getInstance() {
    if (MP3$Companion_instance === null) {
      new MP3$Companion();
    }
    return MP3$Companion_instance;
  }
  MP3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3',
    interfaces: [MP3Base]
  };
  function MP3Base() {
    AudioFormat.call(this, ['mp3']);
  }
  function Coroutine$tryReadInfo_axnxby$_0($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$parser = void 0;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_0.prototype.constructor = Coroutine$tryReadInfo_axnxby$_0;
  Coroutine$tryReadInfo_axnxby$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.exceptionState_0 = 2;
            this.local$parser = new MP3Base$Parser(this.local$data);
            this.state_0 = 1;
            this.result_0 = this.local$parser.getDurationEstimate(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var duration = this.result_0;
            return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble(duration)), (tmp$_1 = (tmp$_0 = (tmp$ = this.local$parser.info) != null ? tmp$.channelMode : null) != null ? tmp$_0.channels : null) != null ? tmp$_1 : 2);
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            }
             else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
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
  MP3Base.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_0(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MP3Base$Parser(data) {
    MP3Base$Parser$Companion_getInstance();
    this.data = data;
    this.info = null;
  }
  MP3Base$Parser.prototype.getDurationEstimate = function (continuation) {
    return this._getDuration_0(true, continuation);
  };
  MP3Base$Parser.prototype.getDurationExact = function (continuation) {
    return this._getDuration_0(false, continuation);
  };
  function Coroutine$_getDuration_0($this, use_cbr_estimate_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fd = void 0;
    this.local$duration = void 0;
    this.local$offset = void 0;
    this.local$info = void 0;
    this.local$block2 = void 0;
    this.local$use_cbr_estimate = use_cbr_estimate_0;
  }
  Coroutine$_getDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_getDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_getDuration_0.prototype.constructor = Coroutine$_getDuration_0;
  Coroutine$_getDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.data.position = L0;
            this.local$fd = this.$this.data.duplicate();
            this.local$duration = L0;
            this.state_0 = 2;
            this.result_0 = readStream(this.local$fd, 100, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.skipID3v2Tag_0(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$offset = this.result_0;
            this.local$fd.position = this.local$offset;
            this.local$info = null;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$fd.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (!!this.result_0) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.state_0 = 7;
            this.result_0 = readBytesUpTo(this.local$fd, 10, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$block2 = new UByteArrayInt(this.result_0);
            if (this.local$block2.size < 10) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            if (this.local$block2.get_za3lpa$(0) === 255 && (this.local$block2.get_za3lpa$(1) & 224) !== 0) {
              this.state_0 = 9;
              this.result_0 = MP3Base$Parser$Companion_getInstance().parseFrameHeader_m5mxob$(this.local$block2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (equals(readString(openSync(this.local$block2.bytes), 3), 'TAG')) {
                this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(118));
              }
               else {
                this.local$fd.position = this.local$fd.position.subtract(Kotlin.Long.fromInt(9));
              }
              this.state_0 = 11;
              continue;
            }

          case 9:
            this.local$info = this.result_0;
            this.$this.info = this.local$info;
            if (this.local$info.frameSize === 0) {
              return this.local$duration;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(this.local$info.frameSize - 10 | 0));
            this.local$duration = this.local$duration.add(Kotlin.Long.fromInt(this.local$info.samples).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$info.samplingRate)));
            this.state_0 = 11;
            continue;
          case 11:
            if (this.local$info != null && this.local$use_cbr_estimate) {
              this.state_0 = 12;
              this.result_0 = this.$this.estimateDuration_0(this.local$info.bitrate, this.local$info.channelMode.channels, this.local$offset.toInt(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 13;
              continue;
            }

          case 12:
            return this.result_0;
          case 13:
            this.state_0 = 4;
            continue;
          case 14:
            return this.local$duration;
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
  MP3Base$Parser.prototype._getDuration_0 = function (use_cbr_estimate_0, continuation_0, suspended) {
    var instance = new Coroutine$_getDuration_0(this, use_cbr_estimate_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$estimateDuration_0($this, bitrate_0, channels_0, offset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$kbps = void 0;
    this.local$bitrate = bitrate_0;
    this.local$channels = channels_0;
    this.local$offset = offset_0;
  }
  Coroutine$estimateDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$estimateDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$estimateDuration_0.prototype.constructor = Coroutine$estimateDuration_0;
  Coroutine$estimateDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$kbps = (this.local$bitrate * 1000 | 0) / 8 | 0;
            this.state_0 = 2;
            this.result_0 = this.$this.data.getLength(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var dataSize = this.result_0.subtract(Kotlin.Long.fromInt(this.local$offset));
            return dataSize.multiply(Kotlin.Long.fromInt(2 / this.local$channels | 0)).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$kbps));
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
  MP3Base$Parser.prototype.estimateDuration_0 = function (bitrate_0, channels_0, offset_0, continuation_0, suspended) {
    var instance = new Coroutine$estimateDuration_0(this, bitrate_0, channels_0, offset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$skipID3v2Tag_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$b = void 0;
    this.local$flag_footer_present = void 0;
    this.local$z0 = void 0;
    this.local$z1 = void 0;
    this.local$z2 = void 0;
    this.local$block = block_0;
  }
  Coroutine$skipID3v2Tag_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$skipID3v2Tag_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$skipID3v2Tag_0.prototype.constructor = Coroutine$skipID3v2Tag_0;
  Coroutine$skipID3v2Tag_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$b = this.local$block.duplicate();
            this.state_0 = 2;
            this.result_0 = readString_0(this.local$b, 3, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.result_0, 'ID3')) {
              this.state_0 = 3;
              this.result_0 = readU8(this.local$b, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 3:
            var id3v2_major_version = this.result_0;
            this.state_0 = 4;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var id3v2_minor_version = this.result_0;
            this.state_0 = 5;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var id3v2_flags = this.result_0;
            var flag_unsynchronisation = extract(id3v2_flags, 7);
            var flag_extended_header = extract(id3v2_flags, 6);
            var flag_experimental_ind = extract(id3v2_flags, 5);
            this.local$flag_footer_present = extract(id3v2_flags, 4);
            this.state_0 = 6;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$z0 = this.result_0;
            this.state_0 = 7;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$z1 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$z2 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var z3 = this.result_0;
            if ((this.local$z0 & 128) === 0 && (this.local$z1 & 128) === 0 && (this.local$z2 & 128) === 0 && (z3 & 128) === 0) {
              var header_size = 10;
              var tag_size = Kotlin.imul(this.local$z0 & 127, 2097152) + ((this.local$z1 & 127) * 16384 | 0) + ((this.local$z2 & 127) * 128 | 0) + (z3 & 127) | 0;
              var footer_size = this.local$flag_footer_present ? 10 : 0;
              return Kotlin.Long.fromInt(header_size + tag_size + footer_size | 0);
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            return L0;
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
  MP3Base$Parser.prototype.skipID3v2Tag_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$skipID3v2Tag_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MP3Base$Parser$Companion() {
    MP3Base$Parser$Companion_instance = this;
    this.versions = ['2.5', 'x', '2', '1'];
    this.layers = new Int32Array([-1, 3, 2, 1]);
    this.bitrates = mapOf([to('V1L1', new Int32Array([0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448])), to('V1L2', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384])), to('V1L3', new Int32Array([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320])), to('V2L1', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256])), to('V2L2', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160])), to('V2L3', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]))]);
    this.sampleRates = mapOf([to('1', new Int32Array([44100, 48000, 32000])), to('2', new Int32Array([22050, 24000, 16000])), to('2.5', new Int32Array([11025, 12000, 8000]))]);
    this.samples = mapOf([to(1, mapOf([to(1, 384), to(2, 1152), to(3, 1152)])), to(2, mapOf([to(1, 384), to(2, 1152), to(3, 576)]))]);
  }
  function MP3Base$Parser$Companion$ChannelMode(name, ordinal, id, channels) {
    Enum.call(this);
    this.id = id;
    this.channels = channels;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MP3Base$Parser$Companion$ChannelMode_initFields() {
    MP3Base$Parser$Companion$ChannelMode_initFields = function () {
    };
    MP3Base$Parser$Companion$ChannelMode$STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('STEREO', 0, 0, 2);
    MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('JOINT_STEREO', 1, 1, 1);
    MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('DUAL_CHANNEL', 2, 2, 2);
    MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('SINGLE_CHANNEL', 3, 3, 1);
    MP3Base$Parser$Companion$ChannelMode$Companion_getInstance();
  }
  var MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  }
  function MP3Base$Parser$Companion$ChannelMode$Companion() {
    MP3Base$Parser$Companion$ChannelMode$Companion_instance = this;
    var $receiver = MP3Base$Parser$Companion$ChannelMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  MP3Base$Parser$Companion$ChannelMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion$ChannelMode$Companion_instance = null;
  function MP3Base$Parser$Companion$ChannelMode$Companion_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    if (MP3Base$Parser$Companion$ChannelMode$Companion_instance === null) {
      new MP3Base$Parser$Companion$ChannelMode$Companion();
    }
    return MP3Base$Parser$Companion$ChannelMode$Companion_instance;
  }
  MP3Base$Parser$Companion$ChannelMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelMode',
    interfaces: [Enum]
  };
  function MP3Base$Parser$Companion$ChannelMode$values() {
    return [MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance(), MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance()];
  }
  MP3Base$Parser$Companion$ChannelMode.values = MP3Base$Parser$Companion$ChannelMode$values;
  function MP3Base$Parser$Companion$ChannelMode$valueOf(name) {
    switch (name) {
      case 'STEREO':
        return MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance();
      case 'JOINT_STEREO':
        return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance();
      case 'DUAL_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance();
      case 'SINGLE_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.format.MP3Base.Parser.Companion.ChannelMode.' + name);
    }
  }
  MP3Base$Parser$Companion$ChannelMode.valueOf_61zpoe$ = MP3Base$Parser$Companion$ChannelMode$valueOf;
  function MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    this.version = version;
    this.layer = layer;
    this.bitrate = bitrate;
    this.samplingRate = samplingRate;
    this.channelMode = channelMode;
    this.frameSize = frameSize;
    this.samples = samples;
  }
  MP3Base$Parser$Companion$Mp3Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mp3Info',
    interfaces: []
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component1 = function () {
    return this.version;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component2 = function () {
    return this.layer;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component3 = function () {
    return this.bitrate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component4 = function () {
    return this.samplingRate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component5 = function () {
    return this.channelMode;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component6 = function () {
    return this.frameSize;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component7 = function () {
    return this.samples;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.copy_wikoj$ = function (version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    return new MP3Base$Parser$Companion$Mp3Info(version === void 0 ? this.version : version, layer === void 0 ? this.layer : layer, bitrate === void 0 ? this.bitrate : bitrate, samplingRate === void 0 ? this.samplingRate : samplingRate, channelMode === void 0 ? this.channelMode : channelMode, frameSize === void 0 ? this.frameSize : frameSize, samples === void 0 ? this.samples : samples);
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.toString = function () {
    return 'Mp3Info(version=' + Kotlin.toString(this.version) + (', layer=' + Kotlin.toString(this.layer)) + (', bitrate=' + Kotlin.toString(this.bitrate)) + (', samplingRate=' + Kotlin.toString(this.samplingRate)) + (', channelMode=' + Kotlin.toString(this.channelMode)) + (', frameSize=' + Kotlin.toString(this.frameSize)) + (', samples=' + Kotlin.toString(this.samples)) + ')';
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.layer) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitrate) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplingRate) | 0;
    result = result * 31 + Kotlin.hashCode(this.channelMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.samples) | 0;
    return result;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.layer, other.layer) && Kotlin.equals(this.bitrate, other.bitrate) && Kotlin.equals(this.samplingRate, other.samplingRate) && Kotlin.equals(this.channelMode, other.channelMode) && Kotlin.equals(this.frameSize, other.frameSize) && Kotlin.equals(this.samples, other.samples)))));
  };
  MP3Base$Parser$Companion.prototype.parseFrameHeader_m5mxob$ = function (f4, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var b0 = f4.get_za3lpa$(0);
    var b1 = f4.get_za3lpa$(1);
    var b2 = f4.get_za3lpa$(2);
    var b3 = f4.get_za3lpa$(3);
    if (b0 !== 255)
      lang.invalidOp;
    var version = this.versions[extract_0(b1, 3, 2)];
    var simple_version = equals(version, '2.5') ? 2 : toInt(version);
    var layer = this.layers[extract_0(b1, 1, 2)];
    var protection_bit = extract_0(b1, 0, 1);
    var bitrate_key = format('V%dL%d', [simple_version, layer]);
    var bitrate_idx = extract_0(b2, 4, 4);
    var bitrate = (tmp$_0 = (tmp$ = this.bitrates.get_11rb$(bitrate_key)) != null ? tmp$[bitrate_idx] : null) != null ? tmp$_0 : 0;
    var sample_rate = (tmp$_2 = (tmp$_1 = this.sampleRates.get_11rb$(version)) != null ? tmp$_1[extract_0(b2, 2, 2)] : null) != null ? tmp$_2 : 0;
    var padding_bit = extract_0(b2, 1, 1);
    var private_bit = extract_0(b2, 0, 1);
    var channelMode = ensureNotNull(MP3Base$Parser$Companion$ChannelMode$Companion_getInstance().BY_ID.get_11rb$(extract_0(b3, 6, 2)));
    var mode_extension_bits = extract_0(b3, 4, 2);
    var copyright_bit = extract_0(b3, 3, 1);
    var original_bit = extract_0(b3, 2, 1);
    var emphasis = extract_0(b3, 0, 2);
    return new MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, sample_rate, channelMode, this.framesize_0(layer, bitrate, sample_rate, padding_bit), (tmp$_4 = (tmp$_3 = this.samples.get_11rb$(simple_version)) != null ? tmp$_3.get_11rb$(layer) : null) != null ? tmp$_4 : 0);
  };
  MP3Base$Parser$Companion.prototype.framesize_0 = function (layer, bitrate, sample_rate, padding_bit) {
    var tmp$;
    if (layer === 1) {
      tmp$ = ((((12 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0) * 4 | 0;
    }
     else {
      tmp$ = (((144 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0;
    }
    return tmp$;
  };
  MP3Base$Parser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion_instance = null;
  function MP3Base$Parser$Companion_getInstance() {
    if (MP3Base$Parser$Companion_instance === null) {
      new MP3Base$Parser$Companion();
    }
    return MP3Base$Parser$Companion_instance;
  }
  MP3Base$Parser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  MP3Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3Base',
    interfaces: [AudioFormat]
  };
  function OGG() {
    OGG$Companion_getInstance();
    OggBase.call(this);
  }
  function OGG$Companion() {
    OGG$Companion_instance = this;
    OGG.call(this);
  }
  OGG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [OGG]
  };
  var OGG$Companion_instance = null;
  function OGG$Companion_getInstance() {
    if (OGG$Companion_instance === null) {
      new OGG$Companion();
    }
    return OGG$Companion_instance;
  }
  OGG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OGG',
    interfaces: [OggBase]
  };
  function OggBase() {
    AudioFormat.call(this, ['ogg']);
  }
  function Coroutine$tryReadInfo_axnxby$_1($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_1.prototype.constructor = Coroutine$tryReadInfo_axnxby$_1;
  Coroutine$tryReadInfo_axnxby$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            }
             else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
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
  OggBase.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_1(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_axnxby$($this, s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$channels = void 0;
    this.local$sampleRate = void 0;
    this.local$bos = void 0;
    this.local$eos = void 0;
    this.local$gpos = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$info = void 0;
    this.local$packetType = void 0;
    this.local$s = s_0;
  }
  Coroutine$parse_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_axnxby$.prototype.constructor = Coroutine$parse_axnxby$;
  Coroutine$parse_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$channels = 2;
            this.local$sampleRate = 44100;
            var brnom = 160000;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = hasAvailable(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 30;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s, 5, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var magic = this.result_0;
            if (!equals(magic, 'OggS\x00'))
              invalidAudioFormat('Not an OGG file');
            this.state_0 = 6;
            this.result_0 = readS8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var type = this.result_0;
            var cont = extract(type, 0);
            this.local$bos = extract(type, 1);
            this.local$eos = extract(type, 2);
            this.state_0 = 7;
            this.result_0 = readS64LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$gpos = this.result_0;
            this.state_0 = 8;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var sn = this.result_0;
            this.state_0 = 9;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var psn = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var chk = this.result_0;
            this.state_0 = 11;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var pseg = this.result_0;
            var $receiver = until(0, pseg);
            this.local$destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 12;
            continue;
          case 12:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 14;
              continue;
            }

            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 13;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 12;
            continue;
          case 14:
            var psizs = this.local$destination;
            this.local$destination_0 = ArrayList_init(collectionSizeOrDefault(psizs, 10));
            this.local$tmp$_1 = psizs.iterator();
            this.state_0 = 15;
            continue;
          case 15:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 17;
              continue;
            }

            var item_0 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.state_0 = 16;
            this.result_0 = readStream(this.local$s, item_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_2.call(this.local$destination_0, this.result_0);
            this.state_0 = 15;
            continue;
          case 17:
            var pages = this.local$destination_0;
            if (this.local$bos) {
              this.local$info = pages.get_za3lpa$(0);
              this.state_0 = 18;
              this.result_0 = readU8(this.local$info, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 28;
              continue;
            }

          case 18:
            this.local$packetType = this.result_0;
            if (this.local$packetType > 3)
              invalidOp('Unsupported OGG vorbis file');
            this.state_0 = 19;
            this.result_0 = readString_0(this.local$info, 6, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            if (!equals(this.result_0, 'vorbis'))
              invalidOp('Unsupported OGG vorbis file');
            switch (this.local$packetType) {
              case 1:
                this.state_0 = 20;
                this.result_0 = readS32LE(this.local$info, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 3:
                this.state_0 = 27;
                continue;
              case 5:
                this.state_0 = 27;
                continue;
            }

          case 20:
            var vver = this.result_0;
            this.state_0 = 21;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$channels = this.result_0;
            this.state_0 = 22;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$sampleRate = this.result_0;
            this.state_0 = 23;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            var brmax = this.result_0;
            this.state_0 = 24;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            brnom = this.result_0;
            this.state_0 = 25;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            var brmin = this.result_0;
            this.state_0 = 26;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            var bsinfo = this.result_0;
            this.state_0 = 27;
            continue;
          case 27:
            this.state_0 = 28;
            continue;
          case 28:
            if (this.local$eos) {
              var $receiver_0 = Kotlin.Long.fromNumber(this.local$gpos.toNumber() * 1000000.0 / this.local$sampleRate);
              return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver_0)), this.local$channels);
            }
             else {
              this.state_0 = 29;
              continue;
            }

          case 29:
            this.state_0 = 2;
            continue;
          case 30:
            invalidOp('Cannot parse stream');
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
  OggBase.prototype.parse_axnxby$ = function (s_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_axnxby$(this, s_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function OggBase$PacketTypes() {
    OggBase$PacketTypes_instance = this;
    this.ID_HEADER = 1;
    this.COMMENT_HEADER = 3;
    this.SETUP_HEADER = 5;
  }
  OggBase$PacketTypes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PacketTypes',
    interfaces: []
  };
  var OggBase$PacketTypes_instance = null;
  function OggBase$PacketTypes_getInstance() {
    if (OggBase$PacketTypes_instance === null) {
      new OggBase$PacketTypes();
    }
    return OggBase$PacketTypes_instance;
  }
  OggBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OggBase',
    interfaces: [AudioFormat]
  };
  function WAV() {
    WAV$Companion_getInstance();
    AudioFormat.call(this, ['wav']);
  }
  function WAV$Companion() {
    WAV$Companion_instance = this;
    WAV.call(this);
  }
  WAV$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [WAV]
  };
  var WAV$Companion_instance = null;
  function WAV$Companion_getInstance() {
    if (WAV$Companion_instance === null) {
      new WAV$Companion();
    }
    return WAV$Companion_instance;
  }
  function WAV$Chunk(type, data) {
    this.type = type;
    this.data = data;
  }
  WAV$Chunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  WAV$Chunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$Chunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$Chunk.prototype.copy_519pps$ = function (type, data) {
    return new WAV$Chunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data);
  };
  WAV$Chunk.prototype.toString = function () {
    return 'Chunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  WAV$Chunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  WAV$Chunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data)))));
  };
  function WAV$ProcessedChunk(type, data, extra) {
    this.type = type;
    this.data = data;
    this.extra = extra;
  }
  WAV$ProcessedChunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessedChunk',
    interfaces: []
  };
  WAV$ProcessedChunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$ProcessedChunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$ProcessedChunk.prototype.component3 = function () {
    return this.extra;
  };
  WAV$ProcessedChunk.prototype.copy_rxnnyd$ = function (type, data, extra) {
    return new WAV$ProcessedChunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data, extra === void 0 ? this.extra : extra);
  };
  WAV$ProcessedChunk.prototype.toString = function () {
    return 'ProcessedChunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  WAV$ProcessedChunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  WAV$ProcessedChunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.extra, other.extra)))));
  };
  function WAV$tryReadInfo$lambda(it) {
    return Unit;
  }
  function Coroutine$tryReadInfo_axnxby$_2($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_2.prototype.constructor = Coroutine$tryReadInfo_axnxby$_2;
  Coroutine$tryReadInfo_axnxby$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$tryReadInfo$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            }
             else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
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
  WAV.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_2(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$decodeStream$lambda(closure$fmt, closure$buffer) {
    return function (it) {
      var extra = it.extra;
      if (Kotlin.isType(extra, WAV$Fmt))
        closure$fmt.v = extra;
      if (equals(it.type, 'data')) {
        closure$buffer.v = it.data;
      }
      return Unit;
    };
  }
  function WAV$decodeStream$ObjectLiteral(closure$buffer, closure$bytesPerSample, this$WAV, rate, channels) {
    this.closure$buffer = closure$buffer;
    this.closure$bytesPerSample = closure$bytesPerSample;
    this.this$WAV = this$WAV;
    AudioStream.call(this, rate, channels);
    this.finished_qhpm5o$_0 = false;
  }
  Object.defineProperty(WAV$decodeStream$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_qhpm5o$_0;
    },
    set: function (finished) {
      this.finished_qhpm5o$_0 = finished;
    }
  });
  function Coroutine$read_trriok$($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bytes = void 0;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$.prototype.constructor = Coroutine$read_trriok$;
  Coroutine$read_trriok$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = readBytesUpTo(this.$this.closure$buffer.v, Kotlin.imul(Kotlin.imul(this.local$length, this.$this.closure$bytesPerSample), this.$this.channels), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$bytes = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.closure$buffer.v.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.finished = this.result_0;
            var availableSamples = (this.local$bytes.length / this.$this.closure$bytesPerSample | 0) / this.$this.channels | 0;
            tmp$ = this.$this.channels;
            for (var channel = 0; channel < tmp$; channel++) {
              switch (this.$this.closure$bytesPerSample) {
                case 1:
                  var bytesPerSample = this.$this.closure$bytesPerSample;
                  var increment = Kotlin.imul(this.$this.channels, bytesPerSample);
                  var index = Kotlin.imul(channel, bytesPerSample);
                  var outc = this.local$out.get_za3lpa$(channel);
                  for (var n = 0; n < availableSamples; n++) {
                    outc[this.local$offset + n | 0] = toShort(readS8_0(this.local$bytes, index) << 8);
                    index = index + increment | 0;
                  }

                  break;
                case 2:
                  var bytesPerSample_0 = this.$this.closure$bytesPerSample;
                  var increment_0 = Kotlin.imul(this.$this.channels, bytesPerSample_0);
                  var index_0 = Kotlin.imul(channel, bytesPerSample_0);
                  var outc_0 = this.local$out.get_za3lpa$(channel);
                  for (var n_0 = 0; n_0 < availableSamples; n_0++) {
                    outc_0[this.local$offset + n_0 | 0] = toShort(readS16LE(this.local$bytes, index_0));
                    index_0 = index_0 + increment_0 | 0;
                  }

                  break;
                case 3:
                  var bytesPerSample_1 = this.$this.closure$bytesPerSample;
                  var increment_1 = Kotlin.imul(this.$this.channels, bytesPerSample_1);
                  var index_1 = Kotlin.imul(channel, bytesPerSample_1);
                  var outc_1 = this.local$out.get_za3lpa$(channel);
                  for (var n_1 = 0; n_1 < availableSamples; n_1++) {
                    outc_1[this.local$offset + n_1 | 0] = toShort(readS24LE(this.local$bytes, index_1) >>> 8);
                    index_1 = index_1 + increment_1 | 0;
                  }

                  break;
                default:invalidOp('Unsupported bytesPerSample=' + this.$this.closure$bytesPerSample);
                  break;
              }
            }

            return availableSamples;
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
  WAV$decodeStream$ObjectLiteral.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV$decodeStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  function Coroutine$decodeStream_axnxby$_0($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$buffer = void 0;
    this.local$data = data_0;
  }
  Coroutine$decodeStream_axnxby$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_axnxby$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_axnxby$_0.prototype.constructor = Coroutine$decodeStream_axnxby$_0;
  Coroutine$decodeStream_axnxby$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = {v: new WAV$Fmt()};
            this.local$buffer = {v: toAsync(MemorySyncStream_0())};
            this.state_0 = 2;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$decodeStream$lambda(this.local$fmt, this.local$buffer), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var bytesPerSample = this.local$fmt.v.bitsPerSample / 8 | 0;
            return new WAV$decodeStream$ObjectLiteral(this.local$buffer, bytesPerSample, this.$this, this.local$fmt.v.samplesPerSec, this.local$fmt.v.channels);
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
  WAV.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$_0(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV.prototype.readBlock_75070n$_0 = function (channel, channels, availableSamples, bytesPerSample, out, offset, read) {
    var increment = Kotlin.imul(channels, bytesPerSample);
    var index = Kotlin.imul(channel, bytesPerSample);
    var outc = out.get_za3lpa$(channel);
    for (var n = 0; n < availableSamples; n++) {
      outc[offset + n | 0] = read(index);
      index = index + increment | 0;
    }
  };
  function Coroutine$encode_ohj27w$($this, data_0, out_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$out = out_0;
  }
  Coroutine$encode_ohj27w$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encode_ohj27w$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encode_ohj27w$.prototype.constructor = Coroutine$encode_ohj27w$;
  Coroutine$encode_ohj27w$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = writeString(this.local$out, 'RIFF', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = write32LE(this.local$out, 36 + (this.local$data.samples.size * 2 | 0) | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeString(this.local$out, 'WAVE', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = writeString(this.local$out, 'fmt ', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = write32LE(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = write16LE(this.local$out, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = write16LE(this.local$out, this.local$data.channels, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = write32LE(this.local$out, this.local$data.rate, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = write32LE(this.local$out, Kotlin.imul(this.local$data.rate, this.local$data.channels) * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = write16LE(this.local$out, 2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = write16LE(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = writeString(this.local$out, 'data', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = write32LE(this.local$out, this.local$data.samples.size * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.state_0 = 15;
            this.result_0 = writeShortArrayLE(this.local$out, interleaved(this.local$data.samples).data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
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
  WAV.prototype.encode_ohj27w$ = function (data_0, out_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$encode_ohj27w$(this, data_0, out_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$Fmt(formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    if (formatTag === void 0)
      formatTag = -1;
    if (channels === void 0)
      channels = 2;
    if (samplesPerSec === void 0)
      samplesPerSec = 44100;
    if (avgBytesPerSec === void 0)
      avgBytesPerSec = L0;
    if (blockAlign === void 0)
      blockAlign = 0;
    if (bitsPerSample === void 0)
      bitsPerSample = 0;
    this.formatTag = formatTag;
    this.channels = channels;
    this.samplesPerSec = samplesPerSec;
    this.avgBytesPerSec = avgBytesPerSec;
    this.blockAlign = blockAlign;
    this.bitsPerSample = bitsPerSample;
  }
  WAV$Fmt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fmt',
    interfaces: []
  };
  WAV$Fmt.prototype.component1 = function () {
    return this.formatTag;
  };
  WAV$Fmt.prototype.component2 = function () {
    return this.channels;
  };
  WAV$Fmt.prototype.component3 = function () {
    return this.samplesPerSec;
  };
  WAV$Fmt.prototype.component4 = function () {
    return this.avgBytesPerSec;
  };
  WAV$Fmt.prototype.component5 = function () {
    return this.blockAlign;
  };
  WAV$Fmt.prototype.component6 = function () {
    return this.bitsPerSample;
  };
  WAV$Fmt.prototype.copy_9l942n$ = function (formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    return new WAV$Fmt(formatTag === void 0 ? this.formatTag : formatTag, channels === void 0 ? this.channels : channels, samplesPerSec === void 0 ? this.samplesPerSec : samplesPerSec, avgBytesPerSec === void 0 ? this.avgBytesPerSec : avgBytesPerSec, blockAlign === void 0 ? this.blockAlign : blockAlign, bitsPerSample === void 0 ? this.bitsPerSample : bitsPerSample);
  };
  WAV$Fmt.prototype.toString = function () {
    return 'Fmt(formatTag=' + Kotlin.toString(this.formatTag) + (', channels=' + Kotlin.toString(this.channels)) + (', samplesPerSec=' + Kotlin.toString(this.samplesPerSec)) + (', avgBytesPerSec=' + Kotlin.toString(this.avgBytesPerSec)) + (', blockAlign=' + Kotlin.toString(this.blockAlign)) + (', bitsPerSample=' + Kotlin.toString(this.bitsPerSample)) + ')';
  };
  WAV$Fmt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.formatTag) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.avgBytesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitsPerSample) | 0;
    return result;
  };
  WAV$Fmt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.formatTag, other.formatTag) && Kotlin.equals(this.channels, other.channels) && Kotlin.equals(this.samplesPerSec, other.samplesPerSec) && Kotlin.equals(this.avgBytesPerSec, other.avgBytesPerSec) && Kotlin.equals(this.blockAlign, other.blockAlign) && Kotlin.equals(this.bitsPerSample, other.bitsPerSample)))));
  };
  function Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fmt = closure$fmt_0;
    this.local$closure$dataSize = closure$dataSize_0;
    this.local$closure$handle = closure$handle_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$d = void 0;
    this.local$cdata = void 0;
    this.local$tmp$_5 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WAV$parse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WAV$parse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WAV$parse$lambda.prototype.constructor = Coroutine$WAV$parse$lambda;
  Coroutine$WAV$parse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var type = this.local$$receiver.component1()
            , d2 = this.local$$receiver.component2();
            this.local$d = d2.duplicate();
            this.local$cdata = Unit;
            switch (type) {
              case 'fmt ':
                this.local$tmp$ = this.local$closure$fmt;
                this.state_0 = 3;
                this.result_0 = readS16LE_0(this.local$d, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'data':
                this.local$tmp$_5 = this.local$closure$dataSize.v;
                this.state_0 = 2;
                this.result_0 = this.local$d.getLength(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:this.state_0 = 9;
                continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$dataSize.v = this.local$tmp$_5.add(this.result_0);
            this.local$cdata = this.local$d;
            this.state_0 = 9;
            continue;
          case 3:
            this.local$tmp$.formatTag = this.result_0;
            this.local$tmp$_0 = this.local$closure$fmt;
            this.state_0 = 4;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.channels = this.result_0;
            this.local$tmp$_1 = this.local$closure$fmt;
            this.state_0 = 5;
            this.result_0 = readS32LE(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_1.samplesPerSec = this.result_0;
            this.local$tmp$_2 = this.local$closure$fmt;
            this.state_0 = 6;
            this.result_0 = readU32LE(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_2.avgBytesPerSec = this.result_0;
            this.local$tmp$_3 = this.local$closure$fmt;
            this.state_0 = 7;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_3.blockAlign = this.result_0;
            this.local$tmp$_4 = this.local$closure$fmt;
            this.state_0 = 8;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_4.bitsPerSample = this.result_0;
            this.local$cdata = this.local$closure$fmt;
            this.state_0 = 9;
            continue;
          case 9:
            return this.local$closure$handle(new WAV$ProcessedChunk(this.local$$receiver.type, this.local$$receiver.data, this.local$cdata));
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
  function WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$parse_phffkd$($this, data_0, handle_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$dataSize = void 0;
    this.local$data = data_0;
    this.local$handle = handle_0;
  }
  Coroutine$parse_phffkd$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_phffkd$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_phffkd$.prototype.constructor = Coroutine$parse_phffkd$;
  Coroutine$parse_phffkd$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = new WAV$Fmt();
            this.local$dataSize = {v: L0};
            this.state_0 = 2;
            this.result_0 = this.$this.riff_9bjwaz$(this.local$data, WAV$parse$lambda(this.local$fmt, this.local$dataSize, this.local$handle), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$fmt.formatTag < 0)
              invalidOp("Couldn't find RIFF 'fmt ' chunk");
            var $receiver = this.local$dataSize.v.multiply(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000)).div(this.local$fmt.avgBytesPerSec);
            return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver)), this.local$fmt.channels);
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
  WAV.prototype.parse_phffkd$ = function (data_0, handle_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_phffkd$(this, data_0, handle_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$riff_9bjwaz$($this, data_0, handler_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$s2 = void 0;
    this.local$magic = void 0;
    this.local$length = void 0;
    this.local$s = void 0;
    this.local$type = void 0;
    this.local$data = data_0;
    this.local$handler = handler_0;
  }
  Coroutine$riff_9bjwaz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$riff_9bjwaz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$riff_9bjwaz$.prototype.constructor = Coroutine$riff_9bjwaz$;
  Coroutine$riff_9bjwaz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$s2 = this.local$data.duplicate();
            this.state_0 = 2;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$magic = this.result_0;
            this.state_0 = 3;
            this.result_0 = readS32LE(this.local$s2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$length = this.result_0;
            this.state_0 = 4;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var magic2 = this.result_0;
            if (!equals(this.local$magic, 'RIFF'))
              invalidAudioFormat("Not a RIFF file but '" + this.local$magic + "'");
            if (!equals(magic2, 'WAVE'))
              invalidAudioFormat('Not a RIFF + WAVE file');
            this.state_0 = 5;
            this.result_0 = readStream(this.local$s2, this.local$length - 4 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$s = this.result_0;
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.local$s.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            if (!!this.result_0) {
              this.state_0 = 13;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            this.state_0 = 9;
            this.result_0 = readString_0(this.local$s, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$type = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var size = this.result_0;
            this.state_0 = 11;
            this.result_0 = readStream(this.local$s, size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var d = this.result_0;
            this.state_0 = 12;
            this.result_0 = this.local$handler(new WAV$Chunk(this.local$type, d), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 6;
            continue;
          case 13:
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
  WAV.prototype.riff_9bjwaz$ = function (data_0, handler_0, continuation_0, suspended) {
    var instance = new Coroutine$riff_9bjwaz$(this, data_0, handler_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WAV',
    interfaces: [AudioFormat]
  };
  function Coroutine$toWav$lambda(this$toWav_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$toWav = this$toWav_0;
  }
  Coroutine$toWav$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toWav$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toWav$lambda.prototype.constructor = Coroutine$toWav$lambda;
  Coroutine$toWav$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = WAV$Companion_getInstance().encodeToByteArray_szcvz7$(this.local$this$toWav, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function toWav$lambda(this$toWav_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$toWav$lambda(this$toWav_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toWav($receiver) {
    return runBlockingNoSuspensions(toWav$lambda($receiver));
  }
  function MP3Decoder() {
    MP3Decoder$Companion_getInstance();
    AudioFormat.call(this, ['mp3']);
  }
  function MP3Decoder$Companion() {
    MP3Decoder$Companion_instance = this;
    MP3Decoder.call(this);
  }
  MP3Decoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [MP3Decoder]
  };
  var MP3Decoder$Companion_instance = null;
  function MP3Decoder$Companion_getInstance() {
    if (MP3Decoder$Companion_instance === null) {
      new MP3Decoder$Companion();
    }
    return MP3Decoder$Companion_instance;
  }
  MP3Decoder.prototype.tryReadInfo_axnxby$ = function (data, continuation) {
    return MP3$Companion_getInstance().tryReadInfo_axnxby$(data, continuation);
  };
  MP3Decoder.prototype.decodeStream_axnxby$ = function (data, continuation) {
    return MP3DecodeStream(data, continuation);
  };
  function Coroutine$encode_ohj27w$_0($this, data_0, out_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$out = out_0;
    this.local$filename = filename_0;
  }
  Coroutine$encode_ohj27w$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encode_ohj27w$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encode_ohj27w$_0.prototype.constructor = Coroutine$encode_ohj27w$_0;
  Coroutine$encode_ohj27w$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = AudioFormat.prototype.encode_ohj27w$.call(this.$this, this.local$data, this.local$out, this.local$filename, this);
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
  MP3Decoder.prototype.encode_ohj27w$ = function (data_0, out_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$encode_ohj27w$_0(this, data_0, out_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  MP3Decoder.prototype.toString = function () {
    return 'NativeMp3DecoderFormat';
  };
  MP3Decoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3Decoder',
    interfaces: [AudioFormat]
  };
  var temp;
  function write($receiver, value) {
    temp[0] = value;
    $receiver.write_kgymra$(temp, 0, 1);
  }
  var KORAU_VERSION;
  function get_niceStr($receiver) {
    return Math_0.floor($receiver) === $receiver ? numberToInt($receiver).toString() : $receiver.toString();
  }
  function SampleConvert() {
    SampleConvert_instance = this;
  }
  SampleConvert.prototype.floatToShort_mx4ult$ = function (v) {
    return toShort(clamp(numberToInt(v * kotlin_js_internal_ShortCompanionObject.MAX_VALUE), -32768, 32767));
  };
  SampleConvert.prototype.shortToFloat_mq22fl$ = function (v) {
    return v / kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
  };
  SampleConvert.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SampleConvert',
    interfaces: []
  };
  var SampleConvert_instance = null;
  function SampleConvert_getInstance() {
    if (SampleConvert_instance === null) {
      new SampleConvert();
    }
    return SampleConvert_instance;
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
  function combine($receiver) {
    var tmp$;
    var tmp$_0 = Int16Array;
    var tmp$_1;
    var sum = 0;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      sum = sum + element.length | 0;
    }
    var combined = new tmp$_0(sum);
    var pos = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var buffer = tmp$.next();
      arrayCopy(buffer, combined, pos, 0, 0 + buffer.length | 0);
      pos = pos + $receiver.size | 0;
    }
    return combined;
  }
  function Coroutine$copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deque = deque_0;
    this.local$temp = temp_0;
    this.local$maxSize = maxSize_0;
  }
  Coroutine$copyChunkTo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$copyChunkTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyChunkTo.prototype.constructor = Coroutine$copyChunkTo;
  Coroutine$copyChunkTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$maxSize === void 0)
              this.local$maxSize = this.local$temp.length;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read_mj6st8$(this.local$temp, 0, this.local$maxSize, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var size = this.result_0;
            this.local$deque.write_mj6st8$(this.local$temp, 0, size);
            return size;
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
  function copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0, suspended) {
    var instance = new Coroutine$copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function toByteArrayLE($receiver) {
    var out = new Int8Array($receiver.length * 2 | 0);
    for (var n = 0; n < $receiver.length; n++) {
      out[(n * 2 | 0) + 0 | 0] = toByte($receiver[n] >> 0);
      out[(n * 2 | 0) + 1 | 0] = toByte($receiver[n] >> 8);
    }
    return out;
  }
  function toShortArrayLE($receiver) {
    var out = new Int16Array($receiver.length / 2 | 0);
    for (var n = 0; n < out.length; n++) {
      var l = $receiver[(n * 2 | 0) + 0 | 0] & 255;
      var h = $receiver[(n * 2 | 0) + 1 | 0] & 255;
      out[n] = toShort(h << 8 | l);
    }
    return out;
  }
  function arraycopyStep(step, src, srcPos, dst, dstPos, length) {
    for (var n = 0; n < length; n += step)
      dst[dstPos + n | 0] = src[srcPos + n | 0];
  }
  function arraycopyStep_0(step, src, srcPos, dst, dstPos, length) {
    for (var n = 0; n < length; n += step)
      dst[dstPos + n | 0] = src[srcPos + n | 0];
  }
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function AudioData(rate, samples) {
    AudioData$Companion_getInstance();
    this.rate = rate;
    this.samples = samples;
    this.samplesInterleaved_i5r49h$_0 = lazy(AudioData$samplesInterleaved$lambda(this));
  }
  Object.defineProperty(AudioData.prototype, 'samplesInterleaved', {
    get: function () {
      return this.samplesInterleaved_i5r49h$_0.value;
    }
  });
  function AudioData$Companion() {
    AudioData$Companion_instance = this;
    this.DUMMY_o40jgj$_0 = lazy(AudioData$Companion$DUMMY$lambda);
  }
  Object.defineProperty(AudioData$Companion.prototype, 'DUMMY', {
    get: function () {
      return this.DUMMY_o40jgj$_0.value;
    }
  });
  function AudioData$Companion$DUMMY$lambda() {
    return new AudioData(44100, new AudioSamples(2, 0));
  }
  AudioData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioData$Companion_instance = null;
  function AudioData$Companion_getInstance() {
    if (AudioData$Companion_instance === null) {
      new AudioData$Companion();
    }
    return AudioData$Companion_instance;
  }
  Object.defineProperty(AudioData.prototype, 'channels', {
    get: function () {
      return this.samples.channels;
    }
  });
  Object.defineProperty(AudioData.prototype, 'totalSamples', {
    get: function () {
      return this.samples.totalSamples;
    }
  });
  Object.defineProperty(AudioData.prototype, 'totalTime', {
    get: function () {
      return this.timeAtSample_za3lpa$(this.totalSamples);
    }
  });
  AudioData.prototype.timeAtSample_za3lpa$ = function (sample) {
    var $receiver = sample / this.rate;
    return TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
  };
  AudioData.prototype.get_za3lpa$ = function (channel) {
    return this.samples.data[channel];
  };
  AudioData.prototype.get_vux9f0$ = function (channel, sample) {
    return this.samples.data[channel][sample];
  };
  AudioData.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.samples.data[channel][sample] = value;
  };
  AudioData.prototype.toString = function () {
    return 'AudioData(rate=' + this.rate + ', channels=' + this.channels + ', samples=' + this.totalSamples + ')';
  };
  function AudioData$samplesInterleaved$lambda(this$AudioData) {
    return function () {
      return interleaved(this$AudioData.samples);
    };
  }
  AudioData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioData',
    interfaces: []
  };
  function AudioConversionQuality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AudioConversionQuality_initFields() {
    AudioConversionQuality_initFields = function () {
    };
    AudioConversionQuality$FAST_instance = new AudioConversionQuality('FAST', 0);
  }
  var AudioConversionQuality$FAST_instance;
  function AudioConversionQuality$FAST_getInstance() {
    AudioConversionQuality_initFields();
    return AudioConversionQuality$FAST_instance;
  }
  AudioConversionQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioConversionQuality',
    interfaces: [Enum]
  };
  function AudioConversionQuality$values() {
    return [AudioConversionQuality$FAST_getInstance()];
  }
  AudioConversionQuality.values = AudioConversionQuality$values;
  function AudioConversionQuality$valueOf(name) {
    switch (name) {
      case 'FAST':
        return AudioConversionQuality$FAST_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.sound.AudioConversionQuality.' + name);
    }
  }
  AudioConversionQuality.valueOf_61zpoe$ = AudioConversionQuality$valueOf;
  function withRate($receiver, rate) {
    return new AudioData(rate, $receiver.samples);
  }
  function toStream$ObjectLiteral(this$toStream, rate, channels) {
    this.this$toStream = this$toStream;
    AudioStream.call(this, rate, channels);
    this.cursor = 0;
    this.finished_if0xzf$_0 = false;
  }
  Object.defineProperty(toStream$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_if0xzf$_0;
    },
    set: function (finished) {
      this.finished_if0xzf$_0 = finished;
    }
  });
  toStream$ObjectLiteral.prototype.read_trriok$ = function (out, offset, length, continuation) {
    var tmp$;
    var available = this.this$toStream.samples.totalSamples - this.cursor | 0;
    var toread = Math_0.min(available, length);
    if (toread > 0) {
      tmp$ = this.channels;
      for (var n = 0; n < tmp$; n++) {
        var srcPos = this.cursor;
        arrayCopy(this.this$toStream.samples.get_za3lpa$(n), out.get_za3lpa$(n), offset, srcPos, srcPos + toread | 0);
      }
    }
    if (toread <= 0)
      this.finished = true;
    return toread;
  };
  toStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  function toStream($receiver) {
    return new toStream$ObjectLiteral($receiver, $receiver.rate, $receiver.channels);
  }
  function toNativeSound($receiver, continuation) {
    return get_nativeSoundProvider().createSound_c6p9kv$($receiver, void 0, void 0, continuation);
  }
  function Coroutine$playAndWait($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$playAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait.prototype.constructor = Coroutine$playAndWait;
  Coroutine$playAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = toNativeSound(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.play();
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
  function playAndWait($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAudioData($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readAudioData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioData.prototype.constructor = Coroutine$readAudioData;
  Coroutine$readAudioData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            var mode;
            mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$formats.decode_axnxby$(this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = (tmp$ = this.result_0) != null ? tmp$ : invalidOp("Can't decode audio file " + this.local$$receiver);
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            }
             else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
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
  function readAudioData($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioData($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  function IAudioSamples() {
  }
  Object.defineProperty(IAudioSamples.prototype, 'size', {
    get: function () {
      return this.totalSamples;
    }
  });
  IAudioSamples.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IAudioSamples.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  IAudioSamples.prototype.getFloat_vux9f0$ = function (channel, sample) {
    return SampleConvert_getInstance().shortToFloat_mq22fl$(this.get_vux9f0$(channel, sample));
  };
  IAudioSamples.prototype.setFloat_n0b4r3$ = function (channel, sample, value) {
    this.set_n7dwxb$(channel, sample, SampleConvert_getInstance().floatToShort_mx4ult$(value));
  };
  IAudioSamples.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IAudioSamples',
    interfaces: []
  };
  function AudioSamples(channels, totalSamples) {
    this.channels_kqaju8$_0 = channels;
    this.totalSamples_tcevdn$_0 = totalSamples;
    var array = Array_0(this.channels);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int16Array(this.totalSamples);
    }
    this.data = array;
  }
  Object.defineProperty(AudioSamples.prototype, 'channels', {
    get: function () {
      return this.channels_kqaju8$_0;
    }
  });
  Object.defineProperty(AudioSamples.prototype, 'totalSamples', {
    get: function () {
      return this.totalSamples_tcevdn$_0;
    }
  });
  AudioSamples.prototype.get_za3lpa$ = function (channel) {
    return this.data[channel];
  };
  AudioSamples.prototype.get_vux9f0$ = function (channel, sample) {
    return this.data[channel][sample];
  };
  AudioSamples.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.data[channel][sample] = value;
  };
  AudioSamples.prototype.hashCode = function () {
    return this.channels + (this.totalSamples * 32 | 0) + (contentDeepHashCode(this.data) * 64 | 0) | 0;
  };
  AudioSamples.prototype.equals = function (other) {
    return Kotlin.isType(other, AudioSamples) && this.channels === other.channels && this.totalSamples === other.totalSamples && contentDeepEquals(this.data, other.data);
  };
  AudioSamples.prototype.toString = function () {
    return 'AudioSamples(channels=' + this.channels + ', totalSamples=' + this.totalSamples + ')';
  };
  AudioSamples.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamples',
    interfaces: [IAudioSamples]
  };
  function AudioSamplesInterleaved(channels, totalSamples) {
    this.channels_n99llb$_0 = channels;
    this.totalSamples_s6a5dw$_0 = totalSamples;
    this.data = new Int16Array(Kotlin.imul(this.totalSamples, this.channels));
  }
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'channels', {
    get: function () {
      return this.channels_n99llb$_0;
    }
  });
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'totalSamples', {
    get: function () {
      return this.totalSamples_s6a5dw$_0;
    }
  });
  AudioSamplesInterleaved.prototype.index_0 = function (channel, sample) {
    return Kotlin.imul(sample, this.channels) + channel | 0;
  };
  AudioSamplesInterleaved.prototype.get_vux9f0$ = function (channel, sample) {
    return this.data[this.index_0(channel, sample)];
  };
  AudioSamplesInterleaved.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.data[this.index_0(channel, sample)] = value;
  };
  AudioSamplesInterleaved.prototype.toString = function () {
    return 'AudioSamplesInterleaved(channels=' + this.channels + ', totalSamples=' + this.totalSamples + ')';
  };
  AudioSamplesInterleaved.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamplesInterleaved',
    interfaces: [IAudioSamples]
  };
  function copyOfRange($receiver, start, end) {
    var tmp$;
    var out = new AudioSamples($receiver.channels, end - start | 0);
    tmp$ = $receiver.channels;
    for (var n = 0; n < tmp$; n++) {
      arrayCopy($receiver.get_za3lpa$(n), out.get_za3lpa$(n), 0, start, start + (end - start | 0) | 0);
    }
    return out;
  }
  function interleaved($receiver, out) {
    if (out === void 0)
      out = new AudioSamplesInterleaved($receiver.channels, $receiver.totalSamples);
    var tmp$, tmp$_0, tmp$_1;
    var m = 0;
    tmp$ = $receiver.totalSamples;
    for (var n = 0; n < tmp$; n++) {
      tmp$_0 = $receiver.channels;
      for (var c = 0; c < tmp$_0; c++) {
        out.data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = $receiver.get_vux9f0$(c, n);
      }
    }
    return out;
  }
  function separated($receiver, out) {
    if (out === void 0)
      out = new AudioSamples($receiver.channels, $receiver.totalSamples);
    var tmp$, tmp$_0;
    tmp$ = $receiver.totalSamples;
    for (var n = 0; n < tmp$; n++) {
      tmp$_0 = $receiver.channels;
      for (var c = 0; c < tmp$_0; c++)
        out.set_n7dwxb$(c, n, $receiver.get_vux9f0$(c, n));
    }
    return out;
  }
  function AudioSamplesDeque(channels) {
    this.channels = channels;
    var array = Array_0(this.channels);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new ShortArrayDeque();
    }
    this.buffer = array;
    this.temp_0 = new Int16Array(1);
  }
  Object.defineProperty(AudioSamplesDeque.prototype, 'availableRead', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = getOrNull(this.buffer, 0)) != null ? tmp$.availableRead : null) != null ? tmp$_0 : 0;
    }
  });
  Object.defineProperty(AudioSamplesDeque.prototype, 'availableReadMax', {
    get: function () {
      var tmp$;
      var $receiver = this.buffer;
      var destination = ArrayList_init($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        destination.add_11rb$(item.availableRead);
      }
      return (tmp$ = max(destination)) != null ? tmp$ : 0;
    }
  });
  AudioSamplesDeque.prototype.read_za3lpa$ = function (channel) {
    this.buffer[channel].read_359eei$(this.temp_0, 0, 1);
    return this.temp_0[0];
  };
  AudioSamplesDeque.prototype.write_2bqt6h$ = function (channel, sample) {
    var tmp$ = this.buffer[channel];
    var $receiver = this.temp_0;
    this.temp_0[0] = sample;
    return tmp$.write_359eei$($receiver, 0, 1);
  };
  AudioSamplesDeque.prototype.write_trriok$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    var tmp$;
    tmp$ = samples.channels;
    for (var channel = 0; channel < tmp$; channel++)
      this.write_r43jz4$(channel, samples.get_za3lpa$(channel), offset, len);
  };
  AudioSamplesDeque.prototype.write_7kdvij$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    this.writeInterleaved_rbjysc$(samples.data, offset, len, samples.channels);
  };
  AudioSamplesDeque.prototype.write_32capx$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    var tmp$;
    if (Kotlin.isType(samples, AudioSamples))
      this.write_trriok$(samples, offset, len);
    else if (Kotlin.isType(samples, AudioSamplesInterleaved))
      this.write_7kdvij$(samples, offset, len);
    else {
      tmp$ = samples.channels;
      for (var c = 0; c < tmp$; c++) {
        for (var n = 0; n < len; n++)
          this.write_2bqt6h$(c, samples.get_vux9f0$(c, offset + n | 0));
      }
    }
  };
  AudioSamplesDeque.prototype.write_r43jz4$ = function (channel, data, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = data.length - offset | 0;
    this.buffer[channel].write_359eei$(data, offset, len);
  };
  AudioSamplesDeque.prototype.write_3hvitc$ = function (channel, data, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = data.length - offset | 0;
    for (var n = 0; n < len; n++)
      this.write_2bqt6h$(channel, SampleConvert_getInstance().floatToShort_mx4ult$(data[offset + n | 0]));
  };
  AudioSamplesDeque.prototype.writeInterleaved_rbjysc$ = function (data, offset, len, channels) {
    if (len === void 0)
      len = data.length - offset | 0;
    if (channels === void 0)
      channels = this.channels;
    for (var n = 0; n < len; n++) {
      var channel = n % channels;
      this.write_2bqt6h$(channel, data[offset + n | 0]);
    }
  };
  AudioSamplesDeque.prototype.read_trriok$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    tmp$ = out.channels;
    for (var channel = 0; channel < tmp$; channel++)
      this.buffer[channel].read_359eei$(out.get_za3lpa$(channel), offset, len);
    return result;
  };
  AudioSamplesDeque.prototype.read_7kdvij$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    tmp$ = out.channels;
    for (var channel = 0; channel < tmp$; channel++) {
      for (var n = 0; n < len; n++)
        out.set_n7dwxb$(channel, offset + n | 0, this.read_za3lpa$(channel));
    }
    return result;
  };
  AudioSamplesDeque.prototype.read_32capx$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    if (Kotlin.isType(out, AudioSamples))
      this.read_trriok$(out, offset, len);
    else if (Kotlin.isType(out, AudioSamplesInterleaved))
      this.read_7kdvij$(out, offset, len);
    else {
      tmp$ = out.channels;
      for (var c = 0; c < tmp$; c++) {
        for (var n = 0; n < len; n++)
          out.set_n7dwxb$(c, offset + n | 0, this.read_za3lpa$(c));
      }
    }
    return result;
  };
  AudioSamplesDeque.prototype.toString = function () {
    return 'AudioSamplesDeque(channels=' + this.channels + ', availableRead=' + this.availableRead + ')';
  };
  AudioSamplesDeque.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamplesDeque',
    interfaces: []
  };
  function AudioStream(rate_0, channels_0) {
    AudioStream$Companion_getInstance();
    this.rate = rate_0;
    this.channels = channels_0;
    this.finished_3olf9t$_0 = false;
    this.totalLengthInSamples = null;
  }
  Object.defineProperty(AudioStream.prototype, 'finished', {
    get: function () {
      return this.finished_3olf9t$_0;
    }
  });
  Object.defineProperty(AudioStream.prototype, 'totalLength', {
    get: function () {
      var tmp$;
      var $receiver = ((tmp$ = this.totalLengthInSamples) != null ? tmp$ : L0).toNumber() / this.rate;
      return TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
    }
  });
  AudioStream.prototype.read_trriok$ = function (out, offset, length, continuation) {
    return 0;
  };
  AudioStream.prototype.close = function () {
  };
  function AudioStream$Companion() {
    AudioStream$Companion_instance = this;
  }
  function AudioStream$Companion$generator$ObjectLiteral(closure$generateChunk, closure$channels, rate_0, channels_0) {
    this.closure$generateChunk = closure$generateChunk;
    AudioStream.call(this, rate_0, channels_0);
    this.deque = new AudioSamplesDeque(closure$channels);
    this.finished_6civll$_0 = false;
    this.step_0 = 0;
  }
  Object.defineProperty(AudioStream$Companion$generator$ObjectLiteral.prototype, 'availableRead', {
    get: function () {
      return this.deque.availableRead;
    }
  });
  Object.defineProperty(AudioStream$Companion$generator$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_6civll$_0;
    },
    set: function (finished) {
      this.finished_6civll$_0 = finished;
    }
  });
  function Coroutine$read_trriok$_0($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$_0.prototype.constructor = Coroutine$read_trriok$_0;
  Coroutine$read_trriok$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.$this.finished && this.$this.availableRead <= 0) {
              return -1;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (this.$this.availableRead > 0) {
              this.state_0 = 6;
              continue;
            }

            this.state_0 = 4;
            this.result_0 = this.$this.closure$generateChunk(this.$this.deque, (tmp$ = this.$this.step_0, this.$this.step_0 = tmp$ + 1 | 0, tmp$), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (!this.result_0) {
              this.$this.finished = true;
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 3;
            continue;
          case 6:
            var b = this.$this.availableRead;
            var read = Math_0.min(this.local$length, b);
            this.$this.deque.read_trriok$(this.local$out, this.local$offset, read);
            return read;
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
  AudioStream$Companion$generator$ObjectLiteral.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$_0(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioStream$Companion$generator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  AudioStream$Companion.prototype.generator_cyo1yf$ = function (rate, channels, generateChunk) {
    return new AudioStream$Companion$generator$ObjectLiteral(generateChunk, channels, rate, channels);
  };
  AudioStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioStream$Companion_instance = null;
  function AudioStream$Companion_getInstance() {
    if (AudioStream$Companion_instance === null) {
      new AudioStream$Companion();
    }
    return AudioStream$Companion_instance;
  }
  AudioStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioStream',
    interfaces: [Closeable]
  };
  function Coroutine$toData($receiver_0, maxSamples_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$out = void 0;
    this.local$buffer = void 0;
    this.local$read = void 0;
    this.local$$receiver = $receiver_0;
    this.local$maxSamples = maxSamples_0;
  }
  Coroutine$toData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toData.prototype.constructor = Coroutine$toData;
  Coroutine$toData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$maxSamples === void 0)
              this.local$maxSamples = 2147483647;
            this.local$out = new AudioSamplesDeque(this.local$$receiver.channels);
            this.local$buffer = new AudioSamples(this.local$$receiver.channels, 1024);
            this.exceptionState_0 = 7;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$$receiver.finished) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read_trriok$(this.local$buffer, 0, this.local$buffer.totalSamples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$read = this.result_0;
            if (this.local$read <= 0) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$out.write_trriok$(this.local$buffer, 0, this.local$read);
            if (this.local$out.availableRead >= this.local$maxSamples) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [6];
            this.state_0 = 8;
            continue;
          case 6:
            var maxOutSamples = this.local$out.availableReadMax;
            var tmp$ = this.local$$receiver.rate;
            var $receiver = new AudioSamples(this.local$$receiver.channels, maxOutSamples);
            this.local$out.read_trriok$($receiver);
            return new AudioData(tmp$, $receiver);
          case 7:
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 9;
            this.local$$receiver.close();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 9) {
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
  function toData($receiver_0, maxSamples_0, continuation_0, suspended) {
    var instance = new Coroutine$toData($receiver_0, maxSamples_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function playAndWait_0($receiver, bufferSeconds, continuation) {
    if (bufferSeconds === void 0)
      bufferSeconds = 0.1;
    return get_nativeSoundProvider().playAndWait_hni0ux$($receiver, bufferSeconds, continuation);
  }
  function Coroutine$readAudioStream($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readAudioStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioStream.prototype.constructor = Coroutine$readAudioStream;
  Coroutine$readAudioStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.open_tiaunm$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeStream_axnxby$(this.result_0, this);
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
  function readAudioStream($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioStream($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeAudio($receiver_0, data_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$data = data_0;
    this.local$formats = formats_0;
  }
  Coroutine$writeAudio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeAudio.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAudio.prototype.constructor = Coroutine$writeAudio;
  Coroutine$writeAudio.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            var mode = VfsOpenMode.CREATE_OR_TRUNCATE;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$formats.encode_ohj27w$(this.local$data, this.local$$receiver_0, get_baseName(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = Unit;
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            }
             else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
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
  function writeAudio($receiver_0, data_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$writeAudio($receiver_0, data_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function AudioTone() {
    AudioTone_instance = this;
  }
  AudioTone.prototype.generate_wivp55$ = function (length, freq, rate) {
    if (rate === void 0)
      rate = 44100;
    var nsamples = numberToInt(rate * length.seconds);
    var samples = new AudioSamples(1, nsamples);
    for (var n = 0; n < nsamples; n++) {
      var ratio = n * freq / rate;
      var x = ratio * math.PI * 2;
      var sample = Math_0.sin(x);
      samples.set_n7dwxb$(0, n, SampleConvert_getInstance().floatToShort_mx4ult$(sample));
    }
    return new AudioData(rate, samples);
  };
  AudioTone.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AudioTone',
    interfaces: []
  };
  var AudioTone_instance = null;
  function AudioTone_getInstance() {
    if (AudioTone_instance === null) {
      new AudioTone();
    }
    return AudioTone_instance;
  }
  function NativeSoundProvider() {
    this.target_bgeedf$_0 = 'unknown';
    this.initialized_768h90$_0 = false;
  }
  Object.defineProperty(NativeSoundProvider.prototype, 'target', {
    get: function () {
      return this.target_bgeedf$_0;
    }
  });
  NativeSoundProvider.prototype.initOnce = function () {
    if (!this.initialized_768h90$_0) {
      this.initialized_768h90$_0 = true;
      this.init();
    }
  };
  NativeSoundProvider.prototype.createAudioStream_za3lpa$$default = function (freq) {
    return new PlatformAudioOutput(freq);
  };
  NativeSoundProvider.prototype.createAudioStream_za3lpa$ = function (freq, callback$default) {
    if (freq === void 0)
      freq = 44100;
    return callback$default ? callback$default(freq) : this.createAudioStream_za3lpa$$default(freq);
  };
  NativeSoundProvider.prototype.init = function () {
  };
  function NativeSoundProvider$createSound$ObjectLiteral() {
    NativeSound.call(this);
  }
  NativeSoundProvider$createSound$ObjectLiteral.prototype.decode = function (continuation) {
    return AudioData$Companion_getInstance().DUMMY;
  };
  function NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral(sound_0) {
    NativeSoundChannel.call(this, sound_0);
  }
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype.stop = function () {
  };
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  NativeSoundProvider$createSound$ObjectLiteral.prototype.play = function () {
    return new NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral(this);
  };
  NativeSoundProvider$createSound$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSound]
  };
  NativeSoundProvider.prototype.createSound_1fhb37$$default = function (data, streaming, continuation) {
    return new NativeSoundProvider$createSound$ObjectLiteral();
  };
  NativeSoundProvider.prototype.createSound_1fhb37$ = function (data, streaming, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(data, streaming, continuation) : this.createSound_1fhb37$$default(data, streaming, continuation);
  };
  function Coroutine$createSound_52yb2k$$default($this, vfs_0, path_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_52yb2k$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_52yb2k$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_52yb2k$$default.prototype.constructor = Coroutine$createSound_52yb2k$$default;
  Coroutine$createSound_52yb2k$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1fhb37$(this.result_0, this.local$streaming, this);
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
  NativeSoundProvider.prototype.createSound_52yb2k$$default = function (vfs_0, path_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_52yb2k$$default(this, vfs_0, path_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_52yb2k$ = function (vfs, path, streaming, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(vfs, path, streaming, continuation) : this.createSound_52yb2k$$default(vfs, path, streaming, continuation);
  };
  NativeSoundProvider.prototype.createSound_1ecnpg$ = function (file, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return this.createSound_52yb2k$(file.vfs, file.path, streaming, continuation);
  };
  function Coroutine$createSound_x9gm8m$($this, file_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_x9gm8m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_x9gm8m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_x9gm8m$.prototype.constructor = Coroutine$createSound_x9gm8m$;
  Coroutine$createSound_x9gm8m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$streaming === void 0)
              this.local$streaming = false;
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1ecnpg$(this.result_0, this.local$streaming, this);
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
  NativeSoundProvider.prototype.createSound_x9gm8m$ = function (file_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_x9gm8m$(this, file_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_c6p9kv$$default($this, data_0, formats_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_c6p9kv$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_c6p9kv$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_c6p9kv$$default.prototype.constructor = Coroutine$createSound_c6p9kv$$default;
  Coroutine$createSound_c6p9kv$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = WAV$Companion_getInstance().encodeToByteArray_szcvz7$(this.local$data, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1fhb37$(this.result_0, this.local$streaming, this);
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
  NativeSoundProvider.prototype.createSound_c6p9kv$$default = function (data_0, formats_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_c6p9kv$$default(this, data_0, formats_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_c6p9kv$ = function (data, formats, streaming, continuation, callback$default) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(data, formats, streaming, continuation) : this.createSound_c6p9kv$$default(data, formats, streaming, continuation);
  };
  function Coroutine$playAndWait_hni0ux$($this, stream_0, bufferSeconds_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 11;
    this.$this = $this;
    this.local$nas = void 0;
    this.local$temp = void 0;
    this.local$minBuf = void 0;
    this.local$stream = stream_0;
    this.local$bufferSeconds = bufferSeconds_0;
  }
  Coroutine$playAndWait_hni0ux$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait_hni0ux$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait_hni0ux$.prototype.constructor = Coroutine$playAndWait_hni0ux$;
  Coroutine$playAndWait_hni0ux$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$bufferSeconds === void 0)
              this.local$bufferSeconds = 0.1;
            var tmp$;
            this.local$nas = get_nativeSoundProvider().createAudioStream_za3lpa$();
            this.exceptionState_0 = 9;
            this.local$temp = new AudioSamples(this.local$stream.channels, 1024);
            var nchannels = 2;
            this.local$minBuf = numberToInt(Kotlin.imul(this.local$stream.rate, nchannels) * this.local$bufferSeconds);
            this.local$nas.start();
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$stream.finished) {
              this.state_0 = 8;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = this.local$stream.read_trriok$(this.local$temp, 0, this.local$temp.totalSamples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var read = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$nas.add_trriok$(this.local$temp, 0, read, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            tmp$ = this.local$nas.availableSamples;
            if (!(this.local$minBuf <= tmp$ && tmp$ <= (this.local$minBuf * 2 | 0))) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 4;
            continue;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            this.exceptionState_0 = 11;
            this.state_0 = 10;
            continue;
          case 9:
            this.exceptionState_0 = 11;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              this.local$nas.stop();
            }
             else
              throw e;
            this.state_0 = 10;
            continue;
          case 10:
            return;
          case 11:
            throw this.exception_0;
          default:this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 11) {
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
  NativeSoundProvider.prototype.playAndWait_hni0ux$ = function (stream_0, bufferSeconds_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait_hni0ux$(this, stream_0, bufferSeconds_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundProvider',
    interfaces: []
  };
  function DummyNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  DummyNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function DummyNativeSoundChannel(sound, data) {
    if (data === void 0)
      data = null;
    NativeSoundChannel.call(this, sound);
    this.data = data;
    this.timeStart_0 = DateTime.Companion.now();
  }
  Object.defineProperty(DummyNativeSoundChannel.prototype, 'current', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.timeStart_0);
    }
  });
  Object.defineProperty(DummyNativeSoundChannel.prototype, 'total', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.data) != null ? tmp$.totalTime : null) != null ? tmp$_0 : TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
    }
  });
  DummyNativeSoundChannel.prototype.stop = function () {
    this.timeStart_0 = DateTime.Companion.now().plus_fv8bff$(this.total);
  };
  DummyNativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundChannel',
    interfaces: [NativeSoundChannel]
  };
  function NativeSoundChannel(sound_0) {
    this.sound = sound_0;
    this.startTime_po208j$_0 = DateTime.Companion.now();
    this.volume_jvnuhq$_0 = 1.0;
    this.pitch_g1jq7w$_0 = 1.0;
    this.panning_pl2mbv$_0 = 0.0;
  }
  Object.defineProperty(NativeSoundChannel.prototype, 'volume', {
    get: function () {
      return this.volume_jvnuhq$_0;
    },
    set: function (volume) {
      this.volume_jvnuhq$_0 = volume;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'pitch', {
    get: function () {
      return this.pitch_g1jq7w$_0;
    },
    set: function (pitch) {
      this.pitch_g1jq7w$_0 = pitch;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'panning', {
    get: function () {
      return this.panning_pl2mbv$_0;
    },
    set: function (panning) {
      this.panning_pl2mbv$_0 = panning;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'current', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.startTime_po208j$_0);
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'total', {
    get: function () {
      return this.sound.length;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'playing', {
    get: function () {
      return this.current.compareTo_11rb$(this.total) < 0;
    }
  });
  NativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundChannel',
    interfaces: []
  };
  function await$lambda($receiver, current, total) {
    return Unit;
  }
  function Coroutine$await($receiver_0, progress_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$progress = progress_0;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$progress === void 0)
              this.local$progress = await$lambda;
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$$receiver.playing) {
              this.state_0 = 3;
              continue;
            }

            this.local$progress(this.local$$receiver, this.local$$receiver.current, this.local$$receiver.total);
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 1;
            continue;
          case 3:
            this.local$progress(this.local$$receiver, this.local$$receiver.total, this.local$$receiver.total);
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              this.local$$receiver.stop();
            }
             else
              throw e;
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
  function await_0($receiver_0, progress_0, continuation_0, suspended) {
    var instance = new Coroutine$await($receiver_0, progress_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function NativeSound() {
    this.length_mgoqkj$_0 = TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
  }
  Object.defineProperty(NativeSound.prototype, 'length', {
    get: function () {
      return this.length_mgoqkj$_0;
    }
  });
  NativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSound',
    interfaces: []
  };
  function toData_0($receiver, continuation) {
    return $receiver.decode(continuation);
  }
  function Coroutine$toStream($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toStream.prototype.constructor = Coroutine$toStream;
  Coroutine$toStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.decode(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toStream(this.result_0);
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
  function toStream_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toStream($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function playAndWait$lambda($receiver, current, total) {
    return Unit;
  }
  function playAndWait_1($receiver, progress, continuation) {
    if (progress === void 0)
      progress = playAndWait$lambda;
    return await_0($receiver.play(), progress, continuation);
  }
  function readNativeSound($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_x9gm8m$($receiver, streaming, continuation);
  }
  function readNativeSoundOptimized($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_x9gm8m$($receiver, streaming, continuation);
  }
  function readNativeSound_0($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_1fhb37$($receiver, streaming, continuation);
  }
  function PlatformAudioOutput(freq) {
    this.availableSamples_ezqrsf$_0 = 0;
  }
  Object.defineProperty(PlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.availableSamples_ezqrsf$_0;
    }
  });
  function Coroutine$add_trriok$$default($this, samples_0, offset_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$add_trriok$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_trriok$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_trriok$$default.prototype.constructor = Coroutine$add_trriok$$default;
  Coroutine$add_trriok$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(100)), this);
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
  PlatformAudioOutput.prototype.add_trriok$$default = function (samples_0, offset_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$add_trriok$$default(this, samples_0, offset_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  PlatformAudioOutput.prototype.add_trriok$ = function (samples, offset, size, continuation, callback$default) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = samples.totalSamples;
    return callback$default ? callback$default(samples, offset, size, continuation) : this.add_trriok$$default(samples, offset, size, continuation);
  };
  PlatformAudioOutput.prototype.add_29y2db$ = function (data, continuation) {
    return this.add_trriok$(data.samples, 0, data.totalSamples, continuation);
  };
  PlatformAudioOutput.prototype.start = function () {
  };
  PlatformAudioOutput.prototype.stop = function () {
  };
  PlatformAudioOutput.prototype.dispose = function () {
  };
  PlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformAudioOutput',
    interfaces: [Disposable]
  };
  function SoundUtils() {
    SoundUtils_instance = this;
  }
  SoundUtils.prototype.convertS16ToF32_r43jz4$ = function (channels, input, leftVolume, rightVolume) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var output = new Float32Array((input.length * 2 | 0) / channels | 0);
    var optimized = leftVolume === 1 && rightVolume === 1;
    switch (channels) {
      case 2:
        if (optimized) {
          for (var n = 0; n < output.length; n++)
            output[n] = input[n] / 32767.0;
        }
         else {
          for (var n_0 = 0; n_0 < output.length; n_0 += 2) {
            output[n_0 + 0 | 0] = input[n_0 + 0 | 0] / 32767.0 * leftVolume;
            output[n_0 + 1 | 0] = input[n_0 + 1 | 0] / 32767.0 * rightVolume;
          }
        }

        break;
      case 1:
        if (optimized) {
          var m = 0;
          for (var n_1 = 0; n_1 < input.length; n_1++) {
            var v = input[n_1] / 32767.0;
            output[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = v;
            output[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = v;
          }
        }
         else {
          var m_0 = 0;
          for (var n_2 = 0; n_2 < input.length; n_2++) {
            var sample = input[n_2] / 32767.0;
            output[tmp$_1 = m_0, m_0 = tmp$_1 + 1 | 0, tmp$_1] = sample * leftVolume;
            output[tmp$_2 = m_0, m_0 = tmp$_2 + 1 | 0, tmp$_2] = sample * rightVolume;
          }
        }

        break;
    }
    return output;
  };
  SoundUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundUtils',
    interfaces: []
  };
  var SoundUtils_instance = null;
  function SoundUtils_getInstance() {
    if (SoundUtils_instance === null) {
      new SoundUtils();
    }
    return SoundUtils_instance;
  }
  function HtmlNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  HtmlNativeSoundProvider.prototype.initOnce = function () {
  };
  HtmlNativeSoundProvider.prototype.createAudioStream_za3lpa$$default = function (freq) {
    return new JsPlatformAudioOutput(freq);
  };
  function Coroutine$createSound_1fhb37$$default($this, data_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$createSound_1fhb37$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_1fhb37$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_1fhb37$$default.prototype.constructor = Coroutine$createSound_1fhb37$$default;
  Coroutine$createSound_1fhb37$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HtmlSimpleSound_getInstance().loadSound_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new AudioBufferNativeSound(this.result_0);
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
  HtmlNativeSoundProvider.prototype.createSound_1fhb37$$default = function (data_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_1fhb37$$default(this, data_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_52yb2k$$default_0($this, vfs_0, path_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$createSound_52yb2k$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_52yb2k$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_52yb2k$$default_0.prototype.constructor = Coroutine$createSound_52yb2k$$default_0;
  Coroutine$createSound_52yb2k$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.local$vfs, LocalVfs) || Kotlin.isType(this.local$vfs, UrlVfs)) {
              if (Kotlin.isType(this.local$vfs, LocalVfs))
                tmp$ = this.local$path;
              else if (Kotlin.isType(this.local$vfs, UrlVfs))
                tmp$ = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
              else
                tmp$ = lang.invalidOp;
              var rpath = tmp$;
              this.state_0 = 3;
              this.result_0 = HtmlSimpleSound_getInstance().loadSound_61zpoe$(rpath, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.$this.createSound_52yb2k$(this.local$vfs, this.local$path, void 0, this, NativeSoundProvider.prototype.createSound_52yb2k$$default.bind(this.$this));
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return new AudioBufferNativeSound(this.result_0);
          case 4:
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
  HtmlNativeSoundProvider.prototype.createSound_52yb2k$$default = function (vfs_0, path_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_52yb2k$$default_0(this, vfs_0, path_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function AudioBufferNativeSound(buffer) {
    NativeSound.call(this);
    this.buffer = buffer;
    var tmp$, tmp$_0;
    var $receiver = (tmp$_0 = (tmp$ = this.buffer) != null ? tmp$.duration : null) != null ? tmp$_0 : 0.0;
    this.length_u3ai7r$_0 = TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
  }
  Object.defineProperty(AudioBufferNativeSound.prototype, 'length', {
    get: function () {
      return this.length_u3ai7r$_0;
    }
  });
  AudioBufferNativeSound.prototype.decode = function (continuation) {
    var tmp$;
    if (this.buffer == null) {
      return AudioData$Companion_getInstance().DUMMY;
    }
     else {
      var nchannels = this.buffer.numberOfChannels;
      var nsamples = this.buffer.length;
      var data = new AudioSamples(nchannels, nsamples);
      var m = 0;
      for (var c = 0; c < nchannels; c++) {
        var channelF = this.buffer.getChannelData(c);
        for (var n = 0; n < nsamples; n++) {
          data.get_za3lpa$(c)[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = SampleConvert_getInstance().floatToShort_mx4ult$(channelF[n]);
        }
      }
      return new AudioData(this.buffer.sampleRate, data);
    }
  };
  function AudioBufferNativeSound$play$ObjectLiteral(this$AudioBufferNativeSound, sound) {
    NativeSoundChannel.call(this, sound);
    this.channel = this$AudioBufferNativeSound.buffer != null ? HtmlSimpleSound_getInstance().playSound_f3gkkr$(this$AudioBufferNativeSound.buffer) : null;
    var tmp$, tmp$_0, tmp$_1;
    this.total_ri43qs$_0 = (tmp$_1 = (tmp$_0 = (tmp$ = this$AudioBufferNativeSound.buffer) != null ? tmp$.duration : null) != null ? TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(tmp$_0)) : null) != null ? tmp$_1 : TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
  }
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'volume', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.gain : null) != null ? tmp$_0.gain : null) != null ? tmp$_1.value : null) != null ? tmp$_2 : 1.0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.gain : null) != null ? tmp$_0.gain : null) != null ? (tmp$_1.value = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'pitch', {
    get: function () {
      return Kotlin.callGetter(this, NativeSoundChannel.prototype, 'pitch');
    },
    set: function (value) {
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'panning', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.panning : null) != null ? tmp$_0 : 0.0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.channel) != null ? (tmp$.panning = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'current', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.currentTime : null) != null ? TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(tmp$_0)) : null) != null ? tmp$_1 : TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'total', {
    get: function () {
      return this.total_ri43qs$_0;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'playing', {
    get: function () {
      return this.current.compareTo_11rb$(this.total) < 0;
    }
  });
  AudioBufferNativeSound$play$ObjectLiteral.prototype.stop = function () {
    var tmp$;
    (tmp$ = this.channel) != null ? (tmp$.stop(), Unit) : null;
  };
  AudioBufferNativeSound$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  AudioBufferNativeSound.prototype.play = function () {
    return new AudioBufferNativeSound$play$ObjectLiteral(this, this);
  };
  AudioBufferNativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioBufferNativeSound',
    interfaces: [NativeSound]
  };
  function Coroutine$soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$elapsed = void 0;
    this.local$totalTime = totalTime_0;
    this.local$timeProvider = timeProvider_0;
    this.local$progress = progress_0;
    this.local$startTime = startTime_0;
  }
  Coroutine$soundProgress.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$soundProgress.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$soundProgress.prototype.constructor = Coroutine$soundProgress;
  Coroutine$soundProgress.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$startTime === void 0)
              this.local$startTime = this.local$timeProvider();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var now = this.local$timeProvider();
            this.local$elapsed = now - this.local$startTime;
            if (this.local$elapsed >= this.local$totalTime) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$progress(this.local$elapsed, this.local$totalTime);
            this.state_0 = 4;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            this.local$progress(this.local$totalTime, this.local$totalTime);
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
  function soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0, suspended) {
    var instance = new Coroutine$soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  function MediaElementAudioSourceNodeWithAudioElement(node, audio) {
    this.node = node;
    this.audio = audio;
  }
  MediaElementAudioSourceNodeWithAudioElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MediaElementAudioSourceNodeWithAudioElement',
    interfaces: []
  };
  function HtmlSimpleSound() {
    HtmlSimpleSound_instance = this;
    var tmp$, tmp$_0, tmp$_1;
    try {
      if (!equals(typeof window.AudioContext, 'undefined'))
        tmp$ = new AudioContext();
      else {
        if (!equals(typeof window.webkitAudioContext, 'undefined'))
          tmp$ = new webkitAudioContext();
        else
          tmp$ = null;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        tmp$ = null;
      }
       else
        throw e;
    }
    this.ctx = tmp$;
    this.unlocked = false;
    this.unlockDeferred_0 = CompletableDeferred(Job());
    this.unlock = Kotlin.isType(tmp$_0 = this.unlockDeferred_0, Deferred) ? tmp$_0 : throwCCE();
    var _scratchBuffer = (tmp$_1 = this.ctx) != null ? tmp$_1.createBuffer(1, 1, 22050) : null;
    var unlock = {v: null};
    unlock.v = HtmlSimpleSound_init$lambda(this, _scratchBuffer, unlock);
    document.addEventListener('keydown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchstart', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchend', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('mousedown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
  }
  Object.defineProperty(HtmlSimpleSound.prototype, 'available', {
    get: function () {
      return this.ctx != null;
    }
  });
  function HtmlSimpleSound$SimpleSoundChannel(buffer, node, gain, panner) {
    this.buffer = buffer;
    this.node = node;
    this.gain = gain;
    this.panner = panner;
    var tmp$, tmp$_0;
    this.startTime = (tmp$_0 = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.currentTime : null) != null ? tmp$_0 : 0.0;
    this.panning_9hjq7g$_0 = 0.0;
    this.running_0 = true;
  }
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'currentTime', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.currentTime : null) != null ? tmp$_0 : 0.0;
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'panning', {
    get: function () {
      return this.panning_9hjq7g$_0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.panner) != null ? (tmp$.setPosition(this.panning, 0.0, 0.0), Unit) : null;
      this.panning_9hjq7g$_0 = value;
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'playing', {
    get: function () {
      return this.running_0 && this.currentTime < this.buffer.duration;
    }
  });
  HtmlSimpleSound$SimpleSoundChannel.prototype.stop = function () {
    var tmp$;
    this.running_0 = false;
    (tmp$ = this.node) != null ? (tmp$.stop(), Unit) : null;
  };
  HtmlSimpleSound$SimpleSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleSoundChannel',
    interfaces: []
  };
  function HtmlSimpleSound$panner$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.panner_2onr8o$ = function ($receiver, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$panner$lambda;
    var tmp$, tmp$_0;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }
    var ctx = tmp$;
    var tmp$_1;
    try {
      tmp$_1 = new Result(ctx.createPanner());
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$_1 = new Result(createFailure(e));
      }
       else
        throw e;
    }
    var $this = tmp$_1;
    var getOrNull$result;
    var tmp$_2;
    if ($this.isFailure) {
      getOrNull$result = null;
    }
     else {
      getOrNull$result = (tmp$_2 = $this.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
    }
    tmp$_0 = getOrNull$result;
    if (tmp$_0 == null) {
      return null;
    }
    var node = tmp$_0;
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$gain$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.gain_cvo8qv$ = function ($receiver, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$gain$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }
    var ctx = tmp$;
    var node = ctx.createGain();
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$source$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.source_qe40ti$ = function ($receiver, buffer, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$source$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }
    var ctx = tmp$;
    var node = ctx.createBufferSource();
    node.buffer = buffer;
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$playSound$lambda$lambda$lambda$lambda($receiver) {
    $receiver.start(0.0);
    return Unit;
  }
  function HtmlSimpleSound$playSound$lambda$lambda$lambda(closure$buffer, this$HtmlSimpleSound, closure$sourceNode) {
    return function ($receiver) {
      $receiver.gain.value = 1.0;
      closure$sourceNode.v = this$HtmlSimpleSound.source_qe40ti$($receiver, closure$buffer, HtmlSimpleSound$playSound$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function HtmlSimpleSound$playSound$lambda$lambda(closure$buffer, this$HtmlSimpleSound, closure$sourceNode, closure$gainNode) {
    return function ($receiver) {
      closure$gainNode.v = this$HtmlSimpleSound.gain_cvo8qv$($receiver, HtmlSimpleSound$playSound$lambda$lambda$lambda(closure$buffer, this$HtmlSimpleSound, closure$sourceNode));
      return Unit;
    };
  }
  HtmlSimpleSound.prototype.playSound_f3gkkr$ = function (buffer) {
    if (this.ctx == null)
      return null;
    var gainNode = {v: null};
    var pannerNode = {v: null};
    var sourceNode = {v: null};
    pannerNode.v = this.panner_2onr8o$(this.ctx.destination, HtmlSimpleSound$playSound$lambda$lambda(buffer, this, sourceNode, gainNode));
    return new HtmlSimpleSound$SimpleSoundChannel(buffer, sourceNode.v, gainNode.v, pannerNode.v);
  };
  HtmlSimpleSound.prototype.stopSound_dq0zcj$ = function (channel) {
    channel != null ? (channel.disconnect(0), Unit) : null;
    channel != null ? (channel.stop(0.0), Unit) : null;
  };
  function Coroutine$waitUnlocked($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$waitUnlocked.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitUnlocked.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitUnlocked.prototype.constructor = Coroutine$waitUnlocked;
  Coroutine$waitUnlocked.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.unlock.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.ctx;
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
  HtmlSimpleSound.prototype.waitUnlocked = function (continuation_0, suspended) {
    var instance = new Coroutine$waitUnlocked(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HtmlSimpleSound$callOnUnlocked$lambda(closure$cancelled, closure$callback) {
    return function (it) {
      if (!closure$cancelled.v)
        closure$callback(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound$callOnUnlocked$lambda_0(closure$cancelled) {
    return function (it) {
      closure$cancelled.v = true;
      return Unit;
    };
  }
  HtmlSimpleSound.prototype.callOnUnlocked_x41j5s$ = function (callback) {
    var cancelled = {v: false};
    this.unlock.invokeOnCompletion_f05bi3$(HtmlSimpleSound$callOnUnlocked$lambda(cancelled, callback));
    return Cancellable.Companion.invoke_4m4org$(HtmlSimpleSound$callOnUnlocked$lambda_0(cancelled));
  };
  function HtmlSimpleSound$loadSound$lambda$lambda(closure$c) {
    return function (data) {
      closure$c.resumeWith_tl1gpc$(new Result(data));
      return Unit;
    };
  }
  function HtmlSimpleSound$loadSound$lambda$lambda_0(closure$c, closure$url) {
    return function () {
      var $receiver = closure$c;
      var exception = Exception_init('error decoding ' + closure$url);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      return Unit;
    };
  }
  function HtmlSimpleSound$loadSound$lambda(this$HtmlSimpleSound, closure$data, closure$url) {
    return function (c) {
      this$HtmlSimpleSound.ctx.decodeAudioData(closure$data, HtmlSimpleSound$loadSound$lambda$lambda(c), HtmlSimpleSound$loadSound$lambda$lambda_0(c, closure$url));
      return Unit;
    };
  }
  function Coroutine$loadSound_qucnhy$($this, data_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$url = url_0;
  }
  Coroutine$loadSound_qucnhy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_qucnhy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_qucnhy$.prototype.constructor = Coroutine$loadSound_qucnhy$;
  Coroutine$loadSound_qucnhy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.ctx == null) {
              return null;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = suspendCoroutine$lambda(HtmlSimpleSound$loadSound$lambda(this.$this, this.local$data, this.local$url))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  HtmlSimpleSound.prototype.loadSound_qucnhy$ = function (data_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_qucnhy$(this, data_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlSimpleSound.prototype.loadSoundBuffer_61zpoe$ = function (url, continuation) {
    if (this.ctx == null)
      return null;
    var audioPool = document.createElement('audio');
    audioPool.currentTime = 0.0;
    audioPool.pause();
    audioPool.autoplay = false;
    audioPool.src = url;
    return new MediaElementAudioSourceNodeWithAudioElement(this.ctx.createMediaElementSource(audioPool), audioPool);
  };
  HtmlSimpleSound.prototype.playSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? tmp$.play() : null;
      (tmp$_0 = buffer != null ? buffer.node : null) != null ? tmp$_0.connect(this.ctx.destination) : null;
    }
  };
  HtmlSimpleSound.prototype.stopSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? (tmp$.pause(), Unit) : null;
      (tmp$_0 = buffer != null ? buffer.audio : null) != null ? (tmp$_0.currentTime = 0.0) : null;
      (tmp$_1 = buffer != null ? buffer.node : null) != null ? (tmp$_1.disconnect(this.ctx.destination), Unit) : null;
    }
  };
  HtmlSimpleSound.prototype.loadSound_fqrh44$ = function (data, continuation) {
    return this.loadSound_qucnhy$(data.buffer, 'ByteArray', continuation);
  };
  function Coroutine$loadSound_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
  }
  Coroutine$loadSound_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_61zpoe$.prototype.constructor = Coroutine$loadSound_61zpoe$;
  Coroutine$loadSound_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = get_uniVfs(this.local$url).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.loadSound_fqrh44$(this.result_0, this);
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
  HtmlSimpleSound.prototype.loadSound_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HtmlSimpleSound_init$lambda$lambda(closure$source, closure$unlock, this$HtmlSimpleSound) {
    return function () {
      closure$source.disconnect(0);
      document.removeEventListener('keydown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchstart', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchend', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('mousedown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      this$HtmlSimpleSound.unlocked = true;
      this$HtmlSimpleSound.unlockDeferred_0.complete_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound_init$lambda(this$HtmlSimpleSound, closure$_scratchBuffer, closure$unlock) {
    return function (it) {
      if (this$HtmlSimpleSound.ctx != null) {
        var source = this$HtmlSimpleSound.ctx.createBufferSource();
        source.buffer = closure$_scratchBuffer;
        source.connect(this$HtmlSimpleSound.ctx.destination);
        source.start(0.0);
        if (typeof this$HtmlSimpleSound.ctx.resume === 'function')
          this$HtmlSimpleSound.ctx.resume();
        source.onended = HtmlSimpleSound_init$lambda$lambda(source, closure$unlock, this$HtmlSimpleSound);
      }
      return Unit;
    };
  }
  HtmlSimpleSound.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlSimpleSound',
    interfaces: []
  };
  var HtmlSimpleSound_instance = null;
  function HtmlSimpleSound_getInstance() {
    if (HtmlSimpleSound_instance === null) {
      new HtmlSimpleSound();
    }
    return HtmlSimpleSound_instance;
  }
  function nativeSoundProvider$lambda() {
    return new HtmlNativeSoundProvider();
  }
  var nativeSoundProvider;
  function get_nativeSoundProvider() {
    return nativeSoundProvider.value;
  }
  function JsPlatformAudioOutput(freq) {
    JsPlatformAudioOutput$Companion_getInstance();
    PlatformAudioOutput.call(this, freq);
    this.freq = freq;
    var tmp$;
    this.id = (tmp$ = JsPlatformAudioOutput$Companion_getInstance().lastId, JsPlatformAudioOutput$Companion_getInstance().lastId = tmp$ + 1 | 0, tmp$);
    get_nativeSoundProvider().initOnce();
    this.missingDataCount = 0;
    this.nodeRunning = false;
    this.node = null;
    this.nchannels_0 = 2;
    var array = Array_0(this.nchannels_0);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = new FloatArrayDeque();
    }
    this.deques_0 = array;
    this.startPromise_0 = null;
    this.totalShorts = 0;
  }
  function JsPlatformAudioOutput$Companion() {
    JsPlatformAudioOutput$Companion_instance = this;
    this.lastId = 0;
  }
  JsPlatformAudioOutput$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsPlatformAudioOutput$Companion_instance = null;
  function JsPlatformAudioOutput$Companion_getInstance() {
    if (JsPlatformAudioOutput$Companion_instance === null) {
      new JsPlatformAudioOutput$Companion();
    }
    return JsPlatformAudioOutput$Companion_instance;
  }
  JsPlatformAudioOutput.prototype.process_0 = function (e) {
    var tmp$;
    var array = Array_0(e.outputBuffer.numberOfChannels);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = e.outputBuffer.getChannelData(i);
    }
    var outChannels = array;
    var hasData = true;
    if (!document.hidden) {
      tmp$ = this.nchannels_0;
      for (var channel = 0; channel < tmp$; channel++) {
        var deque = this.deques_0[channel];
        var outChannel = outChannels[channel];
        var read = deque.read_kgymra$(outChannel);
        if (read < outChannel.length)
          hasData = false;
      }
    }
    if (!hasData) {
      this.missingDataCount = this.missingDataCount + 1 | 0;
    }
    if (this.missingDataCount >= 500) {
      this.stop();
    }
  };
  JsPlatformAudioOutput.prototype.ensureInit_0 = function () {
    return this.node;
  };
  function JsPlatformAudioOutput$start$lambda$lambda(this$JsPlatformAudioOutput) {
    return function (it) {
      this$JsPlatformAudioOutput.process_0(it);
      return Unit;
    };
  }
  function JsPlatformAudioOutput$start$lambda(this$JsPlatformAudioOutput) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      this$JsPlatformAudioOutput.node = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.createScriptProcessor(1024, 2, 2) : null;
      (tmp$_0 = this$JsPlatformAudioOutput.node) != null ? (tmp$_0.onaudioprocess = JsPlatformAudioOutput$start$lambda$lambda(this$JsPlatformAudioOutput)) : null;
      if (HtmlSimpleSound_getInstance().ctx != null)
        (tmp$_1 = this$JsPlatformAudioOutput.node) != null ? tmp$_1.connect(HtmlSimpleSound_getInstance().ctx.destination) : null;
      return Unit;
    };
  }
  JsPlatformAudioOutput.prototype.start = function () {
    if (this.nodeRunning)
      return;
    this.startPromise_0 = HtmlSimpleSound_getInstance().callOnUnlocked_x41j5s$(JsPlatformAudioOutput$start$lambda(this));
    this.missingDataCount = 0;
    this.nodeRunning = true;
  };
  JsPlatformAudioOutput.prototype.stop = function () {
    var tmp$, tmp$_0;
    if (!this.nodeRunning)
      return;
    (tmp$ = this.startPromise_0) != null ? (tmp$.cancel_tcv7n7$(), Unit) : null;
    (tmp$_0 = this.node) != null ? (tmp$_0.disconnect(), Unit) : null;
    this.nodeRunning = false;
  };
  JsPlatformAudioOutput.prototype.ensureRunning = function () {
    this.ensureInit_0();
    if (!this.nodeRunning) {
      this.start();
    }
  };
  Object.defineProperty(JsPlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.totalShorts;
    }
  });
  function Coroutine$add_trriok$$default_0($this, samples_0, offset_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$samples = samples_0;
    this.local$offset = offset_0;
    this.local$size = size_0;
  }
  Coroutine$add_trriok$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_trriok$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_trriok$$default_0.prototype.constructor = Coroutine$add_trriok$$default_0;
  Coroutine$add_trriok$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.$this.totalShorts = this.$this.totalShorts + this.local$size | 0;
            if (!HtmlSimpleSound_getInstance().available) {
              var sampleCount = this.local$size / 2 | 0;
              var timeSeconds = sampleCount / 41000.0;
              this.state_0 = 5;
              this.result_0 = delay_0(this.context, TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(timeSeconds)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.$this.ensureRunning();
              var schannels = this.local$samples.channels;
              tmp$ = this.$this.nchannels_0;
              for (var channel = 0; channel < tmp$; channel++) {
                var sample = this.local$samples.get_za3lpa$(channel % schannels);
                var deque = this.$this.deques_0[channel];
                for (var n = 0; n < this.local$size; n++) {
                  write(deque, SampleConvert_getInstance().shortToFloat_mq22fl$(sample[this.local$offset + n | 0]));
                }
              }
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.deques_0[0].availableRead <= (this.local$samples.totalSamples * 4 | 0)) {
              this.state_0 = 4;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = delay_0(this.context, TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
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
  JsPlatformAudioOutput.prototype.add_trriok$$default = function (samples_0, offset_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$add_trriok$$default_0(this, samples_0, offset_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPlatformAudioOutput',
    interfaces: [PlatformAudioOutput]
  };
  function programPool$lambda(it) {
    return new MiniMp3(1048576);
  }
  var programPool;
  function MP3DecodeStream(data, continuation) {
    return (new NativeAudioDecoderProgram(programPool, data)).createAudioStream(continuation);
  }
  function NativeAudioDecoderProgram(programPool, data, program) {
    if (program === void 0)
      program = programPool.alloc();
    NativeAudioDecoder.call(this, program, data, 2304);
    this.programPool = programPool;
    this.program = program;
    this.mp3d = this.scope.allocBytes_ww73n8$(6667);
  }
  NativeAudioDecoderProgram.prototype.init = function () {
    this.program.mp3dec_init_ourytn$(this.mp3d);
  };
  NativeAudioDecoderProgram.prototype.close = function () {
    NativeAudioDecoder.prototype.close.call(this);
    this.programPool.free_11rb$(this.program);
  };
  NativeAudioDecoderProgram.prototype.decodeFrameBase_kvp1vs$ = function (samplesDataPtr, frameDataPtr, frameSize, out) {
    var $receiver = this.program;
    var $this = this.program;
    var oldPos = $this.STACK_PTR;
    try {
      var tmp$;
      var info = new CPointer($receiver.alloca_za3lpa$(20).ptr);
      var infov = new mp3dec_frame_info_t(info.ptr);
      out.samplesDecoded = this.program.mp3dec_decode_frame_bm7o4a$(this.mp3d, Kotlin.isType(tmp$ = frameDataPtr, CPointer) ? tmp$ : throwCCE(), frameSize, samplesDataPtr, info);
      out.frameBytes = $receiver.get_frame_bytes_ox8jhc$(infov);
      out.hz = $receiver.get_hz_ox8jhc$(infov);
      out.nchannels = $receiver.get_channels_ox8jhc$(infov);
    }
    finally {
      $this.STACK_PTR = oldPos;
    }
  };
  NativeAudioDecoderProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeAudioDecoderProgram',
    interfaces: [NativeAudioDecoder]
  };
  function Arena(runtime) {
    this.runtime = runtime;
    this.pointers = intArrayListOf(new Int32Array([]));
  }
  Arena.prototype.allocBytes_ww73n8$ = function (size) {
    var ptr = this.runtime.malloc_za3lpa$(size).ptr;
    this.pointers.add_za3lpa$(ptr);
    return new CPointer(ptr);
  };
  Arena.prototype.clear = function () {
    var tmp$;
    tmp$ = this.pointers.size;
    for (var n = 0; n < tmp$; n++) {
      var it = this.pointers.get_za3lpa$(n);
      this.runtime.free_2cq4u5$(new CPointer(it));
    }
    this.pointers.clear();
  };
  Arena.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Arena',
    interfaces: []
  };
  function write_0($receiver, ptr, data) {
    for (var n = 0; n < data.length; n++)
      $receiver.sb_6t1wet$(ptr.ptr + n | 0, data[n]);
  }
  function read_0($receiver, ptr, data) {
    for (var n = 0; n < data.length; n++)
      data[n] = $receiver.lb_za3lpa$(ptr.ptr + n | 0);
  }
  function write_1($receiver, ptr, data) {
    for (var n = 0; n < data.length; n++)
      $receiver.sh_2bqt6h$(ptr.ptr + (n * 2 | 0) | 0, data[n]);
  }
  function read_1($receiver, ptr, data) {
    for (var n = 0; n < data.length; n++)
      data[n] = $receiver.lh_za3lpa$(ptr.ptr + (n * 2 | 0) | 0);
  }
  function NativeAudioDecoder(runtime, data, maxSamples, maxChannels) {
    if (maxChannels === void 0)
      maxChannels = 2;
    this.runtime = runtime;
    this.data = data;
    this.maxSamples = maxSamples;
    this.maxChannels = maxChannels;
    this.closed = false;
    this.scope = new Arena(this.runtime);
    this.frameDataPtr = this.scope.allocBytes_ww73n8$(16384);
    this.samplesDataPtr = this.scope.allocBytes_ww73n8$(this.maxSamples * 2 | 0);
    this.frameData = new Int8Array(16384);
    this.samplesData = new Int16Array(this.maxSamples);
    this.dataBuffer = new ByteArrayDeque(14);
    this.samplesBuffers = new AudioSamplesDeque(this.maxChannels);
    this.info_fgfiq2$_0 = new NativeAudioDecoder$DecodeInfo();
  }
  NativeAudioDecoder.prototype.init = function () {
  };
  function NativeAudioDecoder$DecodeInfo(samplesDecoded, frameBytes, nchannels, hz, totalLengthInSamples) {
    if (samplesDecoded === void 0)
      samplesDecoded = 0;
    if (frameBytes === void 0)
      frameBytes = 0;
    if (nchannels === void 0)
      nchannels = 0;
    if (hz === void 0)
      hz = 0;
    if (totalLengthInSamples === void 0)
      totalLengthInSamples = null;
    this.samplesDecoded = samplesDecoded;
    this.frameBytes = frameBytes;
    this.nchannels = nchannels;
    this.hz = hz;
    this.totalLengthInSamples = totalLengthInSamples;
  }
  NativeAudioDecoder$DecodeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodeInfo',
    interfaces: []
  };
  NativeAudioDecoder$DecodeInfo.prototype.component1 = function () {
    return this.samplesDecoded;
  };
  NativeAudioDecoder$DecodeInfo.prototype.component2 = function () {
    return this.frameBytes;
  };
  NativeAudioDecoder$DecodeInfo.prototype.component3 = function () {
    return this.nchannels;
  };
  NativeAudioDecoder$DecodeInfo.prototype.component4 = function () {
    return this.hz;
  };
  NativeAudioDecoder$DecodeInfo.prototype.component5 = function () {
    return this.totalLengthInSamples;
  };
  NativeAudioDecoder$DecodeInfo.prototype.copy_anm8vq$ = function (samplesDecoded, frameBytes, nchannels, hz, totalLengthInSamples) {
    return new NativeAudioDecoder$DecodeInfo(samplesDecoded === void 0 ? this.samplesDecoded : samplesDecoded, frameBytes === void 0 ? this.frameBytes : frameBytes, nchannels === void 0 ? this.nchannels : nchannels, hz === void 0 ? this.hz : hz, totalLengthInSamples === void 0 ? this.totalLengthInSamples : totalLengthInSamples);
  };
  NativeAudioDecoder$DecodeInfo.prototype.toString = function () {
    return 'DecodeInfo(samplesDecoded=' + Kotlin.toString(this.samplesDecoded) + (', frameBytes=' + Kotlin.toString(this.frameBytes)) + (', nchannels=' + Kotlin.toString(this.nchannels)) + (', hz=' + Kotlin.toString(this.hz)) + (', totalLengthInSamples=' + Kotlin.toString(this.totalLengthInSamples)) + ')';
  };
  NativeAudioDecoder$DecodeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.samplesDecoded) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameBytes) | 0;
    result = result * 31 + Kotlin.hashCode(this.nchannels) | 0;
    result = result * 31 + Kotlin.hashCode(this.hz) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalLengthInSamples) | 0;
    return result;
  };
  NativeAudioDecoder$DecodeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.samplesDecoded, other.samplesDecoded) && Kotlin.equals(this.frameBytes, other.frameBytes) && Kotlin.equals(this.nchannels, other.nchannels) && Kotlin.equals(this.hz, other.hz) && Kotlin.equals(this.totalLengthInSamples, other.totalLengthInSamples)))));
  };
  Object.defineProperty(NativeAudioDecoder.prototype, 'nchannels', {
    get: function () {
      return this.info_fgfiq2$_0.nchannels;
    }
  });
  Object.defineProperty(NativeAudioDecoder.prototype, 'hz', {
    get: function () {
      return this.info_fgfiq2$_0.hz;
    }
  });
  Object.defineProperty(NativeAudioDecoder.prototype, 'totalLengthInSamples', {
    get: function () {
      return this.info_fgfiq2$_0.totalLengthInSamples;
    }
  });
  function Coroutine$decodeFrame($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$n = void 0;
    this.local$temp = void 0;
  }
  Coroutine$decodeFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeFrame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeFrame.prototype.constructor = Coroutine$decodeFrame;
  Coroutine$decodeFrame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$n = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.samplesBuffers.availableRead !== 0) {
              this.state_0 = 6;
              continue;
            }

            if (this.$this.dataBuffer.availableRead < 16384) {
              this.local$temp = new Int8Array(16384);
              this.state_0 = 3;
              this.result_0 = read(this.$this.data, this.local$temp, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            var tempRead = this.result_0;
            this.$this.dataBuffer.write_mj6st8$(this.local$temp, 0, tempRead);
            this.state_0 = 4;
            continue;
          case 4:
            var frameSize = this.$this.dataBuffer.read_mj6st8$(this.$this.frameData);
            write_0(this.$this.runtime, this.$this.frameDataPtr, this.$this.frameData);
            this.$this.decodeFrameBase_kvp1vs$(this.$this.samplesDataPtr, this.$this.frameDataPtr, frameSize, this.$this.info_fgfiq2$_0);
            read_1(this.$this.runtime, this.$this.samplesDataPtr, this.$this.samplesData);
            this.$this.dataBuffer.writeHead_mj6st8$(this.$this.frameData, this.$this.info_fgfiq2$_0.frameBytes, frameSize - this.$this.info_fgfiq2$_0.frameBytes | 0);
            this.$this.samplesBuffers.writeInterleaved_rbjysc$(this.$this.samplesData, 0, this.$this.info_fgfiq2$_0.samplesDecoded, this.$this.info_fgfiq2$_0.nchannels);
            this.local$n = this.local$n + 1 | 0;
            if (this.local$n >= 16) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 2;
            continue;
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
  NativeAudioDecoder.prototype.decodeFrame = function (continuation_0, suspended) {
    var instance = new Coroutine$decodeFrame(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeAudioDecoder.prototype.decodeFrameBase_kvp1vs$ = function (samplesDataPtr, frameDataPtr, frameSize, out) {
  };
  NativeAudioDecoder.prototype.close = function () {
    this.scope.clear();
  };
  function NativeAudioDecoder$createAudioStream$ObjectLiteral(this$NativeAudioDecoder, rate, channels) {
    this.this$NativeAudioDecoder = this$NativeAudioDecoder;
    AudioStream.call(this, rate, channels);
  }
  function Coroutine$read_trriok$_1($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$_1.prototype.constructor = Coroutine$read_trriok$_1;
  Coroutine$read_trriok$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.this$NativeAudioDecoder.closed) {
              return -1;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.this$NativeAudioDecoder.samplesBuffers.availableRead === 0) {
              this.state_0 = 3;
              this.result_0 = this.$this.this$NativeAudioDecoder.decodeFrame(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            var result = this.$this.this$NativeAudioDecoder.samplesBuffers.read_trriok$(this.local$out, this.local$offset, this.local$length);
            if (result <= 0) {
              this.$this.close();
            }

            return result;
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
  NativeAudioDecoder$createAudioStream$ObjectLiteral.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$_1(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeAudioDecoder$createAudioStream$ObjectLiteral.prototype.close = function () {
    if (!this.this$NativeAudioDecoder.closed) {
      this.this$NativeAudioDecoder.closed = true;
      this.this$NativeAudioDecoder.scope.clear();
      this.this$NativeAudioDecoder.close();
    }
  };
  NativeAudioDecoder$createAudioStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  function Coroutine$createAudioStream($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$createAudioStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createAudioStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createAudioStream.prototype.constructor = Coroutine$createAudioStream;
  Coroutine$createAudioStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.decodeFrame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.nchannels === 0) {
              return null;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return new NativeAudioDecoder$createAudioStream$ObjectLiteral(this.$this, this.$this.hz, this.$this.nchannels);
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
  NativeAudioDecoder.prototype.createAudioStream = function (continuation_0, suspended) {
    var instance = new Coroutine$createAudioStream(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeAudioDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeAudioDecoder',
    interfaces: []
  };
  function MiniMp3(HEAP_SIZE) {
    MiniMp3$Companion_getInstance();
    if (HEAP_SIZE === void 0)
      HEAP_SIZE = 0;
    Runtime.call(this, HEAP_SIZE);
    this.__STATIC_hdr_bitrate_kbps_halfrate_0 = MiniMp3$__STATIC_hdr_bitrate_kbps_halfrate$lambda(this)();
    this.__STATIC_hdr_sample_rate_hz_g_hz_0 = MiniMp3$__STATIC_hdr_sample_rate_hz_g_hz$lambda(this)();
    this.__STATIC_L12_subband_alloc_table_g_alloc_L1_0 = MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L1$lambda(this)();
    this.__STATIC_L12_subband_alloc_table_g_alloc_L2M2_0 = MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L2M2$lambda(this)();
    this.__STATIC_L12_subband_alloc_table_g_alloc_L2M1_0 = MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L2M1$lambda(this)();
    this.__STATIC_L12_subband_alloc_table_g_alloc_L2M1_lowrate_0 = MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L2M1_lowrate$lambda(this)();
    this.__STATIC_L12_read_scalefactors_g_deq_L12_0 = MiniMp3$__STATIC_L12_read_scalefactors_g_deq_L12$lambda(this)();
    this.__STATIC_L12_read_scale_info_g_bitalloc_code_tab_0 = MiniMp3$__STATIC_L12_read_scale_info_g_bitalloc_code_tab$lambda(this)();
    this.__STATIC_L3_read_side_info_g_scf_long_0 = MiniMp3$__STATIC_L3_read_side_info_g_scf_long$lambda(this)();
    this.__STATIC_L3_read_side_info_g_scf_short_0 = MiniMp3$__STATIC_L3_read_side_info_g_scf_short$lambda(this)();
    this.__STATIC_L3_read_side_info_g_scf_mixed_0 = MiniMp3$__STATIC_L3_read_side_info_g_scf_mixed$lambda(this)();
    this.__STATIC_L3_ldexp_q2_g_expfrac_0 = MiniMp3$__STATIC_L3_ldexp_q2_g_expfrac$lambda(this)();
    this.__STATIC_L3_decode_scalefactors_g_scf_partitions_0 = MiniMp3$__STATIC_L3_decode_scalefactors_g_scf_partitions$lambda(this)();
    this.__STATIC_L3_decode_scalefactors_g_scfc_decode_0 = MiniMp3$__STATIC_L3_decode_scalefactors_g_scfc_decode$lambda(this)();
    this.__STATIC_L3_decode_scalefactors_g_mod_0 = MiniMp3$__STATIC_L3_decode_scalefactors_g_mod$lambda(this)();
    this.__STATIC_L3_decode_scalefactors_g_preamp_0 = MiniMp3$__STATIC_L3_decode_scalefactors_g_preamp$lambda(this)();
    this.__STATIC_L3_huffman_tabs_0 = MiniMp3$__STATIC_L3_huffman_tabs$lambda(this)();
    this.__STATIC_L3_huffman_tab32_0 = MiniMp3$__STATIC_L3_huffman_tab32$lambda(this)();
    this.__STATIC_L3_huffman_tab33_0 = MiniMp3$__STATIC_L3_huffman_tab33$lambda(this)();
    this.__STATIC_L3_huffman_tabindex_0 = MiniMp3$__STATIC_L3_huffman_tabindex$lambda(this)();
    this.__STATIC_L3_huffman_g_linbits_0 = MiniMp3$__STATIC_L3_huffman_g_linbits$lambda(this)();
    this.__STATIC_L3_stereo_process_g_pan_0 = MiniMp3$__STATIC_L3_stereo_process_g_pan$lambda(this)();
    this.__STATIC_L3_antialias_g_aa_0 = MiniMp3$__STATIC_L3_antialias_g_aa$lambda(this)();
    this.__STATIC_L3_imdct36_g_twid9_0 = MiniMp3$__STATIC_L3_imdct36_g_twid9$lambda(this)();
    this.__STATIC_L3_imdct12_g_twid3_0 = MiniMp3$__STATIC_L3_imdct12_g_twid3$lambda(this)();
    this.__STATIC_L3_imdct_gr_g_mdct_window_0 = MiniMp3$__STATIC_L3_imdct_gr_g_mdct_window$lambda(this)();
    this.__STATIC_mp3d_DCT_II_g_sec_0 = MiniMp3$__STATIC_mp3d_DCT_II_g_sec$lambda(this)();
    this.__STATIC_mp3d_synth_g_win_0 = MiniMp3$__STATIC_mp3d_synth_g_win$lambda(this)();
    var $receiver = new Array145Float(this.alloca_zero_za3lpa$(580).ptr);
    this.set_ddymnu$($receiver, 0, 0.0);
    this.set_ddymnu$($receiver, 1, -1.0);
    this.set_ddymnu$($receiver, 2, -2.519842);
    this.set_ddymnu$($receiver, 3, -4.326749);
    this.set_ddymnu$($receiver, 4, -6.349604);
    this.set_ddymnu$($receiver, 5, -8.54988);
    this.set_ddymnu$($receiver, 6, -10.902724);
    this.set_ddymnu$($receiver, 7, -13.390518);
    this.set_ddymnu$($receiver, 8, -16.0);
    this.set_ddymnu$($receiver, 9, -18.720755);
    this.set_ddymnu$($receiver, 10, -21.544348);
    this.set_ddymnu$($receiver, 11, -24.463781);
    this.set_ddymnu$($receiver, 12, -27.473143);
    this.set_ddymnu$($receiver, 13, -30.56735);
    this.set_ddymnu$($receiver, 14, -33.741993);
    this.set_ddymnu$($receiver, 15, -36.99318);
    this.set_ddymnu$($receiver, 16, 0.0);
    this.set_ddymnu$($receiver, 17, 1.0);
    this.set_ddymnu$($receiver, 18, 2.519842);
    this.set_ddymnu$($receiver, 19, 4.326749);
    this.set_ddymnu$($receiver, 20, 6.349604);
    this.set_ddymnu$($receiver, 21, 8.54988);
    this.set_ddymnu$($receiver, 22, 10.902724);
    this.set_ddymnu$($receiver, 23, 13.390518);
    this.set_ddymnu$($receiver, 24, 16.0);
    this.set_ddymnu$($receiver, 25, 18.720755);
    this.set_ddymnu$($receiver, 26, 21.544348);
    this.set_ddymnu$($receiver, 27, 24.463781);
    this.set_ddymnu$($receiver, 28, 27.473143);
    this.set_ddymnu$($receiver, 29, 30.56735);
    this.set_ddymnu$($receiver, 30, 33.741993);
    this.set_ddymnu$($receiver, 31, 36.99318);
    this.set_ddymnu$($receiver, 32, 40.317474);
    this.set_ddymnu$($receiver, 33, 43.71179);
    this.set_ddymnu$($receiver, 34, 47.173344);
    this.set_ddymnu$($receiver, 35, 50.69963);
    this.set_ddymnu$($receiver, 36, 54.288353);
    this.set_ddymnu$($receiver, 37, 57.93741);
    this.set_ddymnu$($receiver, 38, 61.644863);
    this.set_ddymnu$($receiver, 39, 65.40894);
    this.set_ddymnu$($receiver, 40, 69.22798);
    this.set_ddymnu$($receiver, 41, 73.10044);
    this.set_ddymnu$($receiver, 42, 77.024895);
    this.set_ddymnu$($receiver, 43, 81.0);
    this.set_ddymnu$($receiver, 44, 85.02449);
    this.set_ddymnu$($receiver, 45, 89.09719);
    this.set_ddymnu$($receiver, 46, 93.21697);
    this.set_ddymnu$($receiver, 47, 97.3828);
    this.set_ddymnu$($receiver, 48, 101.593666);
    this.set_ddymnu$($receiver, 49, 105.84863);
    this.set_ddymnu$($receiver, 50, 110.146805);
    this.set_ddymnu$($receiver, 51, 114.48732);
    this.set_ddymnu$($receiver, 52, 118.869385);
    this.set_ddymnu$($receiver, 53, 123.292206);
    this.set_ddymnu$($receiver, 54, 127.755066);
    this.set_ddymnu$($receiver, 55, 132.25725);
    this.set_ddymnu$($receiver, 56, 136.79808);
    this.set_ddymnu$($receiver, 57, 141.3769);
    this.set_ddymnu$($receiver, 58, 145.99312);
    this.set_ddymnu$($receiver, 59, 150.64612);
    this.set_ddymnu$($receiver, 60, 155.33533);
    this.set_ddymnu$($receiver, 61, 160.0602);
    this.set_ddymnu$($receiver, 62, 164.8202);
    this.set_ddymnu$($receiver, 63, 169.61482);
    this.set_ddymnu$($receiver, 64, 174.44357);
    this.set_ddymnu$($receiver, 65, 179.30598);
    this.set_ddymnu$($receiver, 66, 184.20157);
    this.set_ddymnu$($receiver, 67, 189.12991);
    this.set_ddymnu$($receiver, 68, 194.09058);
    this.set_ddymnu$($receiver, 69, 199.08315);
    this.set_ddymnu$($receiver, 70, 204.10721);
    this.set_ddymnu$($receiver, 71, 209.16238);
    this.set_ddymnu$($receiver, 72, 214.24829);
    this.set_ddymnu$($receiver, 73, 219.36456);
    this.set_ddymnu$($receiver, 74, 224.51085);
    this.set_ddymnu$($receiver, 75, 229.68678);
    this.set_ddymnu$($receiver, 76, 234.89206);
    this.set_ddymnu$($receiver, 77, 240.12633);
    this.set_ddymnu$($receiver, 78, 245.38928);
    this.set_ddymnu$($receiver, 79, 250.6806);
    this.set_ddymnu$($receiver, 80, 256.0);
    this.set_ddymnu$($receiver, 81, 261.34717);
    this.set_ddymnu$($receiver, 82, 266.72183);
    this.set_ddymnu$($receiver, 83, 272.12372);
    this.set_ddymnu$($receiver, 84, 277.55255);
    this.set_ddymnu$($receiver, 85, 283.00806);
    this.set_ddymnu$($receiver, 86, 288.48996);
    this.set_ddymnu$($receiver, 87, 293.99805);
    this.set_ddymnu$($receiver, 88, 299.53207);
    this.set_ddymnu$($receiver, 89, 305.09177);
    this.set_ddymnu$($receiver, 90, 310.6769);
    this.set_ddymnu$($receiver, 91, 316.28726);
    this.set_ddymnu$($receiver, 92, 321.92258);
    this.set_ddymnu$($receiver, 93, 327.5827);
    this.set_ddymnu$($receiver, 94, 333.26736);
    this.set_ddymnu$($receiver, 95, 338.97638);
    this.set_ddymnu$($receiver, 96, 344.70956);
    this.set_ddymnu$($receiver, 97, 350.46664);
    this.set_ddymnu$($receiver, 98, 356.24747);
    this.set_ddymnu$($receiver, 99, 362.05188);
    this.set_ddymnu$($receiver, 100, 367.8796);
    this.set_ddymnu$($receiver, 101, 373.73053);
    this.set_ddymnu$($receiver, 102, 379.60443);
    this.set_ddymnu$($receiver, 103, 385.50113);
    this.set_ddymnu$($receiver, 104, 391.4205);
    this.set_ddymnu$($receiver, 105, 397.3623);
    this.set_ddymnu$($receiver, 106, 403.32642);
    this.set_ddymnu$($receiver, 107, 409.31268);
    this.set_ddymnu$($receiver, 108, 415.3209);
    this.set_ddymnu$($receiver, 109, 421.3509);
    this.set_ddymnu$($receiver, 110, 427.4026);
    this.set_ddymnu$($receiver, 111, 433.47574);
    this.set_ddymnu$($receiver, 112, 439.57028);
    this.set_ddymnu$($receiver, 113, 445.68597);
    this.set_ddymnu$($receiver, 114, 451.82275);
    this.set_ddymnu$($receiver, 115, 457.98044);
    this.set_ddymnu$($receiver, 116, 464.15887);
    this.set_ddymnu$($receiver, 117, 470.35797);
    this.set_ddymnu$($receiver, 118, 476.57755);
    this.set_ddymnu$($receiver, 119, 482.81744);
    this.set_ddymnu$($receiver, 120, 489.0776);
    this.set_ddymnu$($receiver, 121, 495.35788);
    this.set_ddymnu$($receiver, 122, 501.65808);
    this.set_ddymnu$($receiver, 123, 507.97815);
    this.set_ddymnu$($receiver, 124, 514.31793);
    this.set_ddymnu$($receiver, 125, 520.6773);
    this.set_ddymnu$($receiver, 126, 527.0562);
    this.set_ddymnu$($receiver, 127, 533.4544);
    this.set_ddymnu$($receiver, 128, 539.8719);
    this.set_ddymnu$($receiver, 129, 546.3085);
    this.set_ddymnu$($receiver, 130, 552.76404);
    this.set_ddymnu$($receiver, 131, 559.2386);
    this.set_ddymnu$($receiver, 132, 565.7319);
    this.set_ddymnu$($receiver, 133, 572.2439);
    this.set_ddymnu$($receiver, 134, 578.7744);
    this.set_ddymnu$($receiver, 135, 585.3235);
    this.set_ddymnu$($receiver, 136, 591.89087);
    this.set_ddymnu$($receiver, 137, 598.47656);
    this.set_ddymnu$($receiver, 138, 605.08044);
    this.set_ddymnu$($receiver, 139, 611.70233);
    this.set_ddymnu$($receiver, 140, 618.3422);
    this.set_ddymnu$($receiver, 141, 625.0);
    this.set_ddymnu$($receiver, 142, 631.67554);
    this.set_ddymnu$($receiver, 143, 638.3688);
    this.set_ddymnu$($receiver, 144, 645.0796);
    this.g_pow43 = $receiver;
  }
  function MiniMp3$Companion() {
    MiniMp3$Companion_instance = this;
    this.MINIMP3_IMPLEMENTATION = 1;
    this.MINIMP3_NO_SIMD = 1;
    this.MINIMP3_MAX_SAMPLES_PER_FRAME = 2304;
    this.MAX_FREE_FORMAT_FRAME_SIZE = 2304;
    this.MAX_FRAME_SYNC_MATCHES = 10;
    this.MAX_L3_FRAME_PAYLOAD_BYTES = 2304;
    this.MAX_BITRESERVOIR_BYTES = 511;
    this.SHORT_BLOCK_TYPE = 2;
    this.STOP_BLOCK_TYPE = 3;
    this.MODE_MONO = 3;
    this.MODE_JOINT_STEREO = 1;
    this.HDR_SIZE = 4;
    this.BITS_DEQUANTIZER_OUT = -1;
    this.MAX_SCF = 41;
    this.HAVE_SIMD = 0;
  }
  MiniMp3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MiniMp3$Companion_instance = null;
  function MiniMp3$Companion_getInstance() {
    if (MiniMp3$Companion_instance === null) {
      new MiniMp3$Companion();
    }
    return MiniMp3$Companion_instance;
  }
  MiniMp3.prototype.bs_init_5c7e2v$ = function (bs, data, bytes) {
    this.set_buf_1358p7$(this.get_value_iwav89$(bs), data);
    this.set_pos_xnn3qw$(this.get_value_iwav89$(bs), 0);
    this.set_limit_xnn3qw$(this.get_value_iwav89$(bs), bytes * 8 | 0);
  };
  MiniMp3.prototype.get_bits_e5qbnc$ = function (bs, n) {
    var next = new UInt(0);
    var cache = new UInt(0);
    var s = new UInt(this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) & 7);
    var shl = {v: n + s.data | 0};
    var p = {v: this.plus_t9mxw2$(this.get_buf_7bwnva$(this.get_value_iwav89$(bs)), this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) >> 3)};
    var $receiver = this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) + n | 0;
    this.set_pos_xnn3qw$(this.get_value_iwav89$(bs), $receiver);
    if ($receiver > this.get_limit_7bwnva$(this.get_value_iwav89$(bs))) {
      return new UInt(0);
    }
    var $receiver_0 = p.v;
    p.v = this.plus_t9mxw2$(p.v, 1);
    var tmp$ = new UInt(this.get_value_j4vej4$($receiver_0).data & 255);
    var other = new UInt(255 >> s.data);
    next = new UInt(tmp$.data & other.data);
    while (true) {
      var $receiver_1 = shl.v - 8 | 0;
      shl.v = $receiver_1;
      if (!($receiver_1 > 0))
        break;
      var tmp$_0 = cache;
      var $this = next;
      var bitCount = shl.v;
      var other_0 = new UInt($this.data << bitCount);
      cache = new UInt(tmp$_0.data | other_0.data);
      var $receiver_2 = p.v;
      p.v = this.plus_t9mxw2$(p.v, 1);
      next = new UInt(this.get_value_j4vej4$($receiver_2).data & 255);
    }
    var tmp$_1 = cache;
    var $this_0 = next;
    var bitCount_0 = -shl.v | 0;
    var other_1 = new UInt($this_0.data >>> bitCount_0);
    return new UInt(tmp$_1.data | other_1.data);
  };
  MiniMp3.prototype.hdr_valid_iy4dr5$ = function (h) {
    var tmp$;
    var tmp$_0 = (tmp$ = this.get_t9mxw2$(h, 0)) != null ? tmp$.equals(new UByte(toByte(255))) : null;
    if (tmp$_0) {
      var $this = new UInt(this.get_t9mxw2$(h, 1).data & 255);
      var other = new UInt(240);
      var tmp$_1 = (new UInt($this.data & other.data)).data === 240;
      if (!tmp$_1) {
        var $this_0 = new UInt(this.get_t9mxw2$(h, 1).data & 255);
        var other_0 = new UInt(254);
        tmp$_1 = (new UInt($this_0.data & other_0.data)).data === 226;
      }
      tmp$_0 = tmp$_1;
    }
    var tmp$_2 = tmp$_0;
    if (tmp$_2) {
      var $this_1 = new UInt((new UInt(this.get_t9mxw2$(h, 1).data & 255)).data >>> 1);
      var other_1 = new UInt(3);
      tmp$_2 = (new UInt($this_1.data & other_1.data)).data !== 0;
    }
    var tmp$_3 = tmp$_2;
    if (tmp$_3) {
      tmp$_3 = (new UInt((new UInt(this.get_t9mxw2$(h, 2).data & 255)).data >>> 4)).data !== 15;
    }
    var tmp$_4 = tmp$_3;
    if (tmp$_4) {
      var $this_2 = new UInt((new UInt(this.get_t9mxw2$(h, 2).data & 255)).data >>> 2);
      var other_2 = new UInt(3);
      tmp$_4 = (new UInt($this_2.data & other_2.data)).data !== 3;
    }
    return this.toInt_1v8dcc$(tmp$_4);
  };
  MiniMp3.prototype.hdr_compare_8aj1o4$ = function (h1, h2) {
    var tmp$ = numberToInt(this.hdr_valid_iy4dr5$(h2)) !== 0;
    if (tmp$) {
      var tmp$_0 = new UInt(this.get_t9mxw2$(h1, 1).data & 255);
      var other = new UInt(this.get_t9mxw2$(h2, 1).data & 255);
      var $this = new UInt(tmp$_0.data ^ other.data);
      var other_0 = new UInt(254);
      tmp$ = (new UInt($this.data & other_0.data)).data === 0;
    }
    var tmp$_1 = tmp$;
    if (tmp$_1) {
      var tmp$_2 = new UInt(this.get_t9mxw2$(h1, 2).data & 255);
      var other_1 = new UInt(this.get_t9mxw2$(h2, 2).data & 255);
      var $this_0 = new UInt(tmp$_2.data ^ other_1.data);
      var other_2 = new UInt(12);
      tmp$_1 = (new UInt($this_0.data & other_2.data)).data === 0;
    }
    var tmp$_3 = tmp$_1;
    if (tmp$_3) {
      var $this_1 = new UInt(this.get_t9mxw2$(h1, 2).data & 255);
      var other_3 = new UInt(240);
      var tmp$_4 = this.toInt_1v8dcc$((new UInt($this_1.data & other_3.data)).data === 0);
      var $this_2 = new UInt(this.get_t9mxw2$(h2, 2).data & 255);
      var other_4 = new UInt(240);
      tmp$_3 = !(numberToInt(tmp$_4 ^ this.toInt_1v8dcc$((new UInt($this_2.data & other_4.data)).data === 0)) !== 0);
    }
    return this.toInt_1v8dcc$(tmp$_3);
  };
  MiniMp3.prototype.hdr_bitrate_kbps_iy4dr5$ = function (h) {
    var halfrate = this.__STATIC_hdr_bitrate_kbps_halfrate_0;
    var $this = new UInt(this.get_t9mxw2$(h, 1).data & 255);
    var other = new UInt(8);
    var tmp$ = this.get_s0ci51$(halfrate, this.toInt_1v8dcc$(!!((new UInt($this.data & other.data)).data !== 0)));
    var $this_0 = new UInt((new UInt(this.get_t9mxw2$(h, 1).data & 255)).data >>> 1);
    var other_0 = new UInt(3);
    return new UInt(2 * (this.get_j7ofb6$(this.get_zzvrw$(tmp$, (new UInt($this_0.data & other_0.data)).data - 1 | 0), (new UInt((new UInt(this.get_t9mxw2$(h, 2).data & 255)).data >>> 4)).data).data & 255) | 0);
  };
  MiniMp3.prototype.hdr_sample_rate_hz_iy4dr5$ = function (h) {
    var g_hz = this.__STATIC_hdr_sample_rate_hz_g_hz_0;
    var $this = new UInt((new UInt(this.get_t9mxw2$(h, 2).data & 255)).data >>> 2);
    var other = new UInt(3);
    var tmp$ = this.get_t8ujw6$(g_hz, (new UInt($this.data & other.data)).data);
    var $this_0 = new UInt(this.get_t9mxw2$(h, 1).data & 255);
    var other_0 = new UInt(8);
    var bitCount = this.toInt_1v8dcc$(!((new UInt($this_0.data & other_0.data)).data !== 0));
    var tmp$_0 = new UInt(tmp$.data >>> bitCount);
    var $this_1 = new UInt(this.get_t9mxw2$(h, 1).data & 255);
    var other_1 = new UInt(16);
    var bitCount_0 = this.toInt_1v8dcc$(!((new UInt($this_1.data & other_1.data)).data !== 0));
    return new UInt(tmp$_0.data >>> bitCount_0);
  };
  MiniMp3.prototype.hdr_frame_samples_iy4dr5$ = function (h) {
    var tmp$;
    var $this = new UInt(this.get_t9mxw2$(h, 1).data & 255);
    var other = new UInt(6);
    if ((new UInt($this.data & other.data)).data === 6)
      tmp$ = 384;
    else {
      var $this_0 = new UInt(this.get_t9mxw2$(h, 1).data & 255);
      var other_0 = new UInt(14);
      tmp$ = 1152 >> this.toInt_1v8dcc$((new UInt($this_0.data & other_0.data)).data === 2);
    }
    return new UInt(tmp$);
  };
  MiniMp3.prototype.hdr_frame_bytes_nn0gfl$ = function (h, free_format_size) {
    var $this = this.hdr_frame_samples_iy4dr5$(h);
    var other = this.hdr_bitrate_kbps_iy4dr5$(h);
    var $this_0 = new UInt(Kotlin.imul($this.data, other.data));
    var other_0 = new UInt(125);
    var frame_bytes = uintDivide(new UInt(Kotlin.imul($this_0.data, other_0.data)), this.hdr_sample_rate_hz_iy4dr5$(h)).data;
    var $this_1 = new UInt(this.get_t9mxw2$(h, 1).data & 255);
    var other_1 = new UInt(6);
    if ((new UInt($this_1.data & other_1.data)).data === 6) {
      frame_bytes = frame_bytes & -4;
    }
    return numberToInt(frame_bytes) !== 0 ? frame_bytes : free_format_size;
  };
  MiniMp3.prototype.hdr_padding_iy4dr5$ = function (h) {
    var tmp$;
    var $this = new UInt(this.get_t9mxw2$(h, 2).data & 255);
    var other = new UInt(2);
    if ((new UInt($this.data & other.data)).data !== 0) {
      var $this_0 = new UInt(this.get_t9mxw2$(h, 1).data & 255);
      var other_0 = new UInt(6);
      tmp$ = (new UInt($this_0.data & other_0.data)).data === 6 ? 4 : 1;
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  MiniMp3.prototype.L12_subband_alloc_table_5s1j2s$ = function (hdr, sci) {
    var alloc = {v: new CPointer(0)};
    var $this = new UInt((new UInt(this.get_t9mxw2$(hdr, 3).data & 255)).data >>> 6);
    var other = new UInt(3);
    var mode = {v: (new UInt($this.data & other.data)).data};
    var nbands = {v: 0};
    var tmp$;
    if (mode.v === 3)
      tmp$ = 0;
    else {
      var tmp$_0;
      if (mode.v === 1) {
        var $this_0 = new UInt((new UInt(this.get_t9mxw2$(hdr, 3).data & 255)).data >>> 4);
        var other_0 = new UInt(3);
        tmp$_0 = (new UInt((new UInt($this_0.data & other_0.data)).data << 2)).data + 4 | 0;
      }
       else
        tmp$_0 = 32;
      tmp$ = tmp$_0;
    }
    var stereo_bands = tmp$;
    var $this_1 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
    var other_1 = new UInt(6);
    if ((new UInt($this_1.data & other_1.data)).data === 6) {
      var g_alloc_L1 = this.__STATIC_L12_subband_alloc_table_g_alloc_L1_0;
      alloc.v = new CPointer(g_alloc_L1.ptr);
      nbands.v = 32;
    }
     else {
      var $this_2 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
      var other_2 = new UInt(8);
      if (!((new UInt($this_2.data & other_2.data)).data !== 0)) {
        var g_alloc_L2M2 = this.__STATIC_L12_subband_alloc_table_g_alloc_L2M2_0;
        alloc.v = new CPointer(g_alloc_L2M2.ptr);
        nbands.v = 30;
      }
       else {
        var g_alloc_L2M1 = this.__STATIC_L12_subband_alloc_table_g_alloc_L2M1_0;
        var $this_3 = new UInt((new UInt(this.get_t9mxw2$(hdr, 2).data & 255)).data >>> 2);
        var other_3 = new UInt(3);
        var sample_rate_idx = {v: (new UInt($this_3.data & other_3.data)).data};
        var $this_4 = this.hdr_bitrate_kbps_iy4dr5$(hdr);
        var bitCount = this.toInt_1v8dcc$(mode.v !== 3);
        var kbps = new UInt($this_4.data >>> bitCount);
        if (!(kbps.data !== 0)) {
          kbps = new UInt(192);
        }
        alloc.v = new CPointer(g_alloc_L2M1.ptr);
        nbands.v = 27;
        if (kbps.data < 56) {
          var g_alloc_L2M1_lowrate = this.__STATIC_L12_subband_alloc_table_g_alloc_L2M1_lowrate_0;
          alloc.v = new CPointer(g_alloc_L2M1_lowrate.ptr);
          nbands.v = sample_rate_idx.v === 2 ? 12 : 8;
        }
         else {
          if (kbps.data >= 96 && sample_rate_idx.v !== 1) {
            nbands.v = 30;
          }
        }
      }
    }
    this.set_total_bands_hnd3xz$(this.get_value_6h83yw$(sci), new UByte(toByte(nbands.v)));
    this.set_stereo_bands_hnd3xz$(this.get_value_6h83yw$(sci), new UByte(toByte(stereo_bands > nbands.v ? nbands.v : stereo_bands)));
    return alloc.v;
  };
  MiniMp3.prototype.L12_read_scalefactors_s2ubtg$ = function (bs, pba, scfcod, bands, scf) {
    var pba_0 = {v: pba};
    var scf_0 = {v: scf};
    var g_deq_L12 = {v: this.__STATIC_L12_read_scalefactors_g_deq_L12_0};
    var i = {v: 0};
    var m = {v: 0};
    i.v = 0;
    while (i.v < bands) {
      var s = {v: 0.0};
      var $receiver = pba_0.v;
      pba_0.v = this.plus_t9mxw2$(pba_0.v, 1);
      var ba = {v: this.get_value_j4vej4$($receiver).data & 255};
      var mask = numberToInt(ba.v) !== 0 ? 4 + (19 >> (this.get_t9mxw2$(scfcod, i.v).data & 255) & 3) | 0 : 0;
      m.v = 4;
      while (numberToInt(m.v) !== 0) {
        if (numberToInt(mask & m.v) !== 0) {
          var b = this.get_bits_e5qbnc$(bs, 6).data;
          s.v = this.get_4hefty$(g_deq_L12.v, (ba.v * 3 | 0) - 6 + b % 3 | 0) * (2097152 >> (b / 3 | 0));
        }
        var $receiver_0 = scf_0.v;
        scf_0.v = this.plus_s1x8lt$(scf_0.v, 1);
        this.swf_24o109$($receiver_0.ptr + (0 * 4 | 0) | 0, s.v);
        m.v = m.v >> 1;
      }
      i.v = i.v + 1 | 0;
    }
  };
  MiniMp3.prototype.L12_read_scale_info_i3032o$ = function (hdr, bs, sci) {
    var g_bitalloc_code_tab = {v: this.__STATIC_L12_read_scale_info_g_bitalloc_code_tab_0};
    var subband_alloc = {v: this.L12_subband_alloc_table_5s1j2s$(hdr, sci)};
    var i = {v: 0};
    var k = {v: 0};
    var ba_bits = {v: 0};
    var ba_code_tab = {v: new CPointer(g_bitalloc_code_tab.v.ptr)};
    i.v = 0;
    while (i.v < (this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255)) {
      var ba = new UByte(0);
      if (i.v === k.v) {
        k.v = k.v + (this.get_band_count_yc36jw$(this.get_value_bzfuu5$(subband_alloc.v)).data & 255) | 0;
        ba_bits.v = this.get_code_tab_width_yc36jw$(this.get_value_bzfuu5$(subband_alloc.v)).data & 255;
        ba_code_tab.v = new CPointer(this.plus_t9mxw2$(g_bitalloc_code_tab.v, this.get_tab_offset_yc36jw$(this.get_value_bzfuu5$(subband_alloc.v)).data & 255).ptr);
        subband_alloc.v = this.plus_kftou7$(subband_alloc.v, 1);
      }
      ba = this.get_t9mxw2$(ba_code_tab.v, this.get_bits_e5qbnc$(bs, ba_bits.v).data);
      this.set_uc6wbg$(this.get_bitalloc_s4bfr$(this.get_value_6h83yw$(sci)), 2 * i.v | 0, ba);
      if (i.v < (this.get_stereo_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255)) {
        ba = this.get_t9mxw2$(ba_code_tab.v, this.get_bits_e5qbnc$(bs, ba_bits.v).data);
      }
      this.set_uc6wbg$(this.get_bitalloc_s4bfr$(this.get_value_6h83yw$(sci)), (2 * i.v | 0) + 1 | 0, (this.get_stereo_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255) !== 0 ? ba : new UByte(toByte(0)));
      i.v = i.v + 1 | 0;
    }
    i.v = 0;
    while (i.v < (2 * (this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255) | 0)) {
      var tmp$ = this.get_scfcod_s4bfr$(this.get_value_6h83yw$(sci));
      var tmp$_0 = i.v;
      var tmp$_1;
      if ((this.get_i0nyfs$(this.get_bitalloc_s4bfr$(this.get_value_6h83yw$(sci)), i.v).data & 255) !== 0) {
        var $this = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
        var other = new UInt(6);
        tmp$_1 = (new UInt($this.data & other.data)).data === 6 ? 2 : this.get_bits_e5qbnc$(bs, 2).data;
      }
       else
        tmp$_1 = 6;
      this.set_uc6wbg$(tmp$, tmp$_0, new UByte(toByte(tmp$_1)));
      i.v = i.v + 1 | 0;
    }
    var tmp$_2 = new CPointer(this.get_bitalloc_s4bfr$(this.get_value_6h83yw$(sci)).ptr);
    var tmp$_3 = new CPointer(this.get_scfcod_s4bfr$(this.get_value_6h83yw$(sci)).ptr);
    var $this_0 = new UInt(this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255);
    var other_0 = new UInt(2);
    this.L12_read_scalefactors_s2ubtg$(bs, tmp$_2, tmp$_3, (new UInt(Kotlin.imul($this_0.data, other_0.data))).data, new CPointer(this.get_scf_s4bfr$(this.get_value_6h83yw$(sci)).ptr));
    i.v = this.get_stereo_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255;
    while (i.v < (this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255)) {
      this.set_uc6wbg$(this.get_bitalloc_s4bfr$(this.get_value_6h83yw$(sci)), (2 * i.v | 0) + 1 | 0, new UByte(toByte(0)));
      i.v = i.v + 1 | 0;
    }
  };
  MiniMp3.prototype.L12_dequantize_granule_m6ksv7$ = function (grbuf, bs, sci, group_size) {
    var i = {v: 0};
    var j = {v: 0};
    var k = {v: 0};
    var choff = {v: 576};
    j.v = 0;
    while (j.v < 4) {
      var dst = {v: this.plus_s1x8lt$(grbuf, Kotlin.imul(group_size, j.v))};
      i.v = 0;
      while (i.v < (2 * (this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255) | 0)) {
        var ba = {v: this.get_i0nyfs$(this.get_bitalloc_s4bfr$(this.get_value_6h83yw$(sci)), i.v).data & 255};
        if (ba.v !== 0) {
          if (ba.v < 17) {
            var half = (1 << ba.v - 1) - 1 | 0;
            k.v = 0;
            while (k.v < group_size) {
              this.swf_24o109$(dst.v.ptr + (k.v * 4 | 0) | 0, this.get_bits_e5qbnc$(bs, ba.v).data - half | 0);
              k.v = k.v + 1 | 0;
            }
          }
           else {
            var mod = {v: new UInt((2 << ba.v - 17) + 1 | 0)};
            var code = {v: this.get_bits_e5qbnc$(bs, mod.v.data + 2 - (new UInt(mod.v.data >>> 3)).data | 0)};
            k.v = 0;
            while (k.v < group_size) {
              var tmp$ = dst.v;
              var tmp$_0 = k.v;
              var tmp$_1 = uintRemainder(code.v, mod.v);
              var other = uintDivide(mod.v, new UInt(2));
              this.swf_24o109$(tmp$.ptr + (tmp$_0 * 4 | 0) | 0, (new UInt(tmp$_1.data - other.data | 0)).data);
              k.v = k.v + 1 | 0;
              code.v = uintDivide(code.v, mod.v);
            }
          }
        }
        dst.v = this.plus_s1x8lt$(dst.v, choff.v);
        choff.v = 18 - choff.v | 0;
        i.v = i.v + 1 | 0;
      }
      j.v = j.v + 1 | 0;
    }
    return group_size * 4 | 0;
  };
  MiniMp3.prototype.L12_apply_scf_384_m3jyav$ = function (sci, scf, dst) {
    var scf_0 = {v: scf};
    var dst_0 = {v: dst};
    var i = {v: 0};
    var k = 0;
    var tmp$ = this.plus_s1x8lt$(dst_0.v, 576);
    var $this = new UInt(this.get_stereo_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255);
    var other = new UInt(18);
    var tmp$_0 = new CPointer(this.plus_s1x8lt$(tmp$, (new UInt(Kotlin.imul($this.data, other.data))).data).ptr);
    var tmp$_1 = dst_0.v;
    var $this_0 = new UInt(this.get_stereo_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255);
    var other_0 = new UInt(18);
    var tmp$_2 = new CPointer(this.plus_s1x8lt$(tmp$_1, (new UInt(Kotlin.imul($this_0.data, other_0.data))).data).ptr);
    var tmp$_3 = new UInt(this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255);
    var other_1 = new UInt(this.get_stereo_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255);
    var $this_1 = new UInt(tmp$_3.data - other_1.data | 0);
    var other_2 = new UInt(18);
    var tmp$_4 = new UInt(Kotlin.imul($this_1.data, other_2.data));
    var other_3 = new UInt(this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject));
    this.memcpy_q1n2f2$(tmp$_0, tmp$_2, (new UInt(Kotlin.imul(tmp$_4.data, other_3.data))).data);
    i.v = 0;
    while (i.v < (this.get_total_bands_s4bfr$(this.get_value_6h83yw$(sci)).data & 255)) {
      k = 0;
      while (k < 12) {
        this.swf_24o109$(dst_0.v.ptr + ((k + 0 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(dst_0.v.ptr + ((k + 0 | 0) * 4 | 0) | 0) * this.lwf_za3lpa$(scf_0.v.ptr + (0 * 4 | 0) | 0));
        this.swf_24o109$(dst_0.v.ptr + ((k + 576 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(dst_0.v.ptr + ((k + 576 | 0) * 4 | 0) | 0) * this.lwf_za3lpa$(scf_0.v.ptr + (3 * 4 | 0) | 0));
        k = k + 1 | 0;
      }
      i.v = i.v + 1 | 0;
      dst_0.v = this.plus_s1x8lt$(dst_0.v, 18);
      scf_0.v = this.plus_s1x8lt$(scf_0.v, 6);
    }
  };
  MiniMp3.prototype.L3_read_side_info_nyq3i0$ = function (bs, gr, hdr) {
    var tmp$;
    var gr_0 = gr;
    var g_scf_long = this.__STATIC_L3_read_side_info_g_scf_long_0;
    var g_scf_short = this.__STATIC_L3_read_side_info_g_scf_short_0;
    var g_scf_mixed = this.__STATIC_L3_read_side_info_g_scf_mixed_0;
    var tables = new UInt(0);
    var scfsi = new UInt(0);
    var main_data_begin = 0;
    var part_23_sum = 0;
    var $this = new UInt((new UInt(this.get_t9mxw2$(hdr, 2).data & 255)).data >>> 2);
    var other = new UInt(3);
    var tmp$_0 = new UInt($this.data & other.data);
    var $this_0 = new UInt((new UInt(this.get_t9mxw2$(hdr, 1).data & 255)).data >>> 3);
    var other_0 = new UInt(1);
    var tmp$_1 = new UInt($this_0.data & other_0.data);
    var $this_1 = new UInt((new UInt(this.get_t9mxw2$(hdr, 1).data & 255)).data >>> 4);
    var other_1 = new UInt(1);
    var other_2 = new UInt($this_1.data & other_1.data);
    var $this_2 = new UInt(tmp$_1.data + other_2.data | 0);
    var other_3 = new UInt(3);
    var other_4 = new UInt(Kotlin.imul($this_2.data, other_3.data));
    var sr_idx = (new UInt(tmp$_0.data + other_4.data | 0)).data;
    sr_idx = sr_idx - this.toInt_1v8dcc$(sr_idx !== 0) | 0;
    var $this_3 = new UInt(this.get_t9mxw2$(hdr, 3).data & 255);
    var other_5 = new UInt(192);
    var gr_count = (new UInt($this_3.data & other_5.data)).data === 192 ? 1 : 2;
    var $this_4 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
    var other_6 = new UInt(8);
    if ((new UInt($this_4.data & other_6.data)).data !== 0) {
      gr_count = gr_count * 2 | 0;
      main_data_begin = this.get_bits_e5qbnc$(bs, 9).data;
      scfsi = this.get_bits_e5qbnc$(bs, 7 + gr_count | 0);
    }
     else {
      var $this_5 = this.get_bits_e5qbnc$(bs, 8 + gr_count | 0);
      var bitCount = gr_count;
      main_data_begin = (new UInt($this_5.data >>> bitCount)).data;
    }
    do0: do {
      var $this_6 = new UInt(this.get_t9mxw2$(hdr, 3).data & 255);
      var other_7 = new UInt(192);
      if ((new UInt($this_6.data & other_7.data)).data === 192) {
        scfsi = new UInt(scfsi.data << 4);
      }
      this.set_part_23_length_sq1jav$(this.get_value_culdo2$(gr_0), new UShort_init(toShort(this.get_bits_e5qbnc$(bs, 12).data)));
      part_23_sum = part_23_sum + (this.get_part_23_length_4gg731$(this.get_value_culdo2$(gr_0)).data & 65535) | 0;
      this.set_big_values_sq1jav$(this.get_value_culdo2$(gr_0), new UShort_init(toShort(this.get_bits_e5qbnc$(bs, 9).data)));
      var tmp$_2 = this.get_big_values_4gg731$(this.get_value_culdo2$(gr_0));
      var other_8 = new UShort_init(toShort(288));
      if (Kotlin.primitiveCompareTo(tmp$_2.data & 65535, other_8.data & 65535) > 0) {
        return -1;
      }
      this.set_global_gain_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(this.get_bits_e5qbnc$(bs, 8).data)));
      var tmp$_3 = this.get_value_culdo2$(gr_0);
      var $this_7 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
      var other_9 = new UInt(8);
      this.set_scalefac_compress_sq1jav$(tmp$_3, new UShort_init(toShort(this.get_bits_e5qbnc$(bs, (new UInt($this_7.data & other_9.data)).data !== 0 ? 4 : 9).data)));
      this.set_sfbtab_b7kikc$(this.get_value_culdo2$(gr_0), new CPointer(this.get_38k9ng$(g_scf_long, sr_idx).ptr));
      this.set_n_long_sfb_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(22)));
      this.set_n_short_sfb_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(0)));
      if (this.get_bits_e5qbnc$(bs, 1).data !== 0) {
        this.set_block_type_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(this.get_bits_e5qbnc$(bs, 2).data)));
        if (!((this.get_block_type_4gg731$(this.get_value_culdo2$(gr_0)).data & 255) !== 0)) {
          return -1;
        }
        this.set_mixed_block_flag_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(this.get_bits_e5qbnc$(bs, 1).data)));
        this.set_j0yztx$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_0)), 0, new UByte(toByte(7)));
        this.set_j0yztx$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_0)), 1, new UByte(toByte(255)));
        if ((tmp$ = this.get_block_type_4gg731$(this.get_value_culdo2$(gr_0))) != null ? tmp$.equals(new UByte(toByte(2))) : null) {
          var $this_8 = scfsi;
          var other_10 = new UInt(3855);
          scfsi = new UInt($this_8.data & other_10.data);
          if (!((this.get_mixed_block_flag_4gg731$(this.get_value_culdo2$(gr_0)).data & 255) !== 0)) {
            this.set_j0yztx$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_0)), 0, new UByte(toByte(8)));
            this.set_sfbtab_b7kikc$(this.get_value_culdo2$(gr_0), new CPointer(this.get_purhm1$(g_scf_short, sr_idx).ptr));
            this.set_n_long_sfb_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(0)));
            this.set_n_short_sfb_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(39)));
          }
           else {
            this.set_sfbtab_b7kikc$(this.get_value_culdo2$(gr_0), new CPointer(this.get_purhm1$(g_scf_mixed, sr_idx).ptr));
            var tmp$_4 = this.get_value_culdo2$(gr_0);
            var $this_9 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
            var other_11 = new UInt(8);
            this.set_n_long_sfb_x2bl9$(tmp$_4, new UByte(toByte((new UInt($this_9.data & other_11.data)).data !== 0 ? 8 : 6)));
            this.set_n_short_sfb_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(30)));
          }
        }
        tables = this.get_bits_e5qbnc$(bs, 10);
        tables = new UInt(tables.data << 5);
        this.set_j0yztx$(this.get_subblock_gain_4gg731$(this.get_value_culdo2$(gr_0)), 0, new UByte(toByte(this.get_bits_e5qbnc$(bs, 3).data)));
        this.set_j0yztx$(this.get_subblock_gain_4gg731$(this.get_value_culdo2$(gr_0)), 1, new UByte(toByte(this.get_bits_e5qbnc$(bs, 3).data)));
        this.set_j0yztx$(this.get_subblock_gain_4gg731$(this.get_value_culdo2$(gr_0)), 2, new UByte(toByte(this.get_bits_e5qbnc$(bs, 3).data)));
      }
       else {
        this.set_block_type_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(0)));
        this.set_mixed_block_flag_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(0)));
        tables = this.get_bits_e5qbnc$(bs, 15);
        this.set_j0yztx$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_0)), 0, new UByte(toByte(this.get_bits_e5qbnc$(bs, 4).data)));
        this.set_j0yztx$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_0)), 1, new UByte(toByte(this.get_bits_e5qbnc$(bs, 3).data)));
        this.set_j0yztx$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_0)), 2, new UByte(toByte(255)));
      }
      this.set_j0yztx$(this.get_table_select_4gg731$(this.get_value_culdo2$(gr_0)), 0, new UByte(toByte((new UInt(tables.data >>> 10)).data)));
      var tmp$_5 = this.get_table_select_4gg731$(this.get_value_culdo2$(gr_0));
      var $this_10 = new UInt(tables.data >>> 5);
      var other_12 = new UInt(31);
      this.set_j0yztx$(tmp$_5, 1, new UByte(toByte((new UInt($this_10.data & other_12.data)).data)));
      var tmp$_6 = this.get_table_select_4gg731$(this.get_value_culdo2$(gr_0));
      var $this_11 = tables;
      var other_13 = new UInt(31);
      this.set_j0yztx$(tmp$_6, 2, new UByte(toByte((new UInt($this_11.data & other_13.data)).data)));
      var tmp$_7 = this.get_value_culdo2$(gr_0);
      var tmp$_8;
      var $this_12 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
      var other_14 = new UInt(8);
      if ((new UInt($this_12.data & other_14.data)).data !== 0)
        tmp$_8 = this.get_bits_e5qbnc$(bs, 1);
      else {
        var tmp$_9 = this.get_scalefac_compress_4gg731$(this.get_value_culdo2$(gr_0));
        var other_15 = new UShort_init(toShort(500));
        tmp$_8 = new UInt(this.toInt_1v8dcc$(Kotlin.primitiveCompareTo(tmp$_9.data & 65535, other_15.data & 65535) >= 0));
      }
      this.set_preflag_x2bl9$(tmp$_7, new UByte(toByte(tmp$_8.data)));
      this.set_scalefac_scale_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(this.get_bits_e5qbnc$(bs, 1).data)));
      this.set_count1_table_x2bl9$(this.get_value_culdo2$(gr_0), new UByte(toByte(this.get_bits_e5qbnc$(bs, 1).data)));
      var tmp$_10 = this.get_value_culdo2$(gr_0);
      var $this_13 = new UInt(scfsi.data >>> 12);
      var other_16 = new UInt(15);
      this.set_scfsi_x2bl9$(tmp$_10, new UByte(toByte((new UInt($this_13.data & other_16.data)).data)));
      scfsi = new UInt(scfsi.data << 4);
      gr_0 = this.plus_x5mmy4$(gr_0, 1);
      if (!(numberToInt((gr_count = gr_count - 1 | 0, gr_count)) !== 0))
        break;
    }
     while (true);
    if ((part_23_sum + this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) | 0) > (this.get_limit_7bwnva$(this.get_value_iwav89$(bs)) + (main_data_begin * 8 | 0) | 0)) {
      return -1;
    }
    return main_data_begin;
  };
  MiniMp3.prototype.L3_read_scalefactors_5xlpvs$ = function (scf, ist_pos, scf_size, scf_count, bitbuf, scfsi) {
    var scf_0 = {v: scf};
    var ist_pos_0 = {v: ist_pos};
    var scfsi_0 = {v: scfsi};
    var i = {v: 0};
    var k = {v: 0};
    i.v = 0;
    while (true) {
      var tmp$ = i.v < 4;
      if (tmp$) {
        tmp$ = (this.get_t9mxw2$(scf_count, i.v).data & 255) !== 0;
      }
      if (!tmp$)
        break;
      var cnt = {v: this.get_t9mxw2$(scf_count, i.v).data & 255};
      if (numberToInt(scfsi_0.v & 8) !== 0) {
        this.memcpy_q1n2f2$(new CPointer(scf_0.v.ptr), new CPointer(ist_pos_0.v.ptr), cnt.v);
      }
       else {
        var bits = {v: this.get_t9mxw2$(scf_size, i.v).data & 255};
        if (!(numberToInt(bits.v) !== 0)) {
          this.memset_j2ark3$(new CPointer(scf_0.v.ptr), 0, cnt.v);
          this.memset_j2ark3$(new CPointer(ist_pos_0.v.ptr), 0, cnt.v);
        }
         else {
          var max_scf = {v: (scfsi_0.v < 0 ? Kotlin.Long.fromInt((1 << bits.v) - 1 | 0) : L_1).toInt()};
          k.v = 0;
          while (k.v < cnt.v) {
            var s = this.get_bits_e5qbnc$(bitbuf, bits.v).data;
            this.set_9c14iy$(ist_pos_0.v, k.v, new UByte(toByte((s === max_scf.v ? L_1 : Kotlin.Long.fromInt(s)).toInt())));
            this.set_9c14iy$(scf_0.v, k.v, new UByte(toByte(s)));
            k.v = k.v + 1 | 0;
          }
        }
      }
      ist_pos_0.v = this.plus_t9mxw2$(ist_pos_0.v, cnt.v);
      scf_0.v = this.plus_t9mxw2$(scf_0.v, cnt.v);
      i.v = i.v + 1 | 0;
      scfsi_0.v = scfsi_0.v * 2 | 0;
    }
    var tmp$_0 = scf_0.v;
    var $receiver = new UByte(toByte(0));
    this.set_9c14iy$(scf_0.v, 2, $receiver);
    this.set_9c14iy$(scf_0.v, 1, $receiver);
    this.set_9c14iy$(tmp$_0, 0, $receiver);
  };
  MiniMp3.prototype.L3_ldexp_q2_vjorfl$ = function (y, exp_q2) {
    var y_0 = y;
    var exp_q2_0 = {v: exp_q2};
    var g_expfrac = this.__STATIC_L3_ldexp_q2_g_expfrac_0;
    var e = {v: 0};
    do0: do {
      e.v = 120 > exp_q2_0.v ? exp_q2_0.v : 120;
      y_0 = y_0 * (this.get_7tsrfn$(g_expfrac, e.v & 3) * (1073741824 >> (e.v >> 2)));
      var $receiver = exp_q2_0.v - e.v | 0;
      exp_q2_0.v = $receiver;
      if (!($receiver > 0))
        break;
    }
     while (true);
    return y_0;
  };
  MiniMp3.prototype.L3_decode_scalefactors_dxl6ff$ = function (hdr, ist_pos, bs, gr, scf, ch) {
    var oldPos = this.STACK_PTR;
    try {
      var g_scf_partitions = this.__STATIC_L3_decode_scalefactors_g_scf_partitions_0;
      var toBool_68pxlr$result;
      toBool_68pxlr$result = (this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255) !== 0;
      var toBool_68pxlr$result_0;
      toBool_68pxlr$result_0 = (this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255) !== 0;
      var scf_partition = {v: new CPointer(this.get_ldkad6$(g_scf_partitions, this.toInt_1v8dcc$(!!toBool_68pxlr$result) + this.toInt_1v8dcc$(!toBool_68pxlr$result_0) | 0).ptr)};
      var $receiver = new Array4UByte(this.alloca_zero_za3lpa$(4).ptr);
      this.set_iu8g92$($receiver, 0, new UByte(toByte(0)));
      var scf_size = {v: $receiver};
      var $receiver_0 = new Array40UByte(this.alloca_zero_za3lpa$(40).ptr);
      this.set_sc99eu$($receiver_0, 0, new UByte(toByte(0)));
      var iscf = {v: $receiver_0};
      var i = {v: 0};
      var $this = new UInt(this.get_scalefac_scale_4gg731$(this.get_value_culdo2$(gr)).data & 255);
      var other = new UInt(1);
      var scf_shift = {v: (new UInt($this.data + other.data | 0)).data};
      var gain_exp = 0;
      var scfsi = {v: this.get_scfsi_4gg731$(this.get_value_culdo2$(gr)).data & 255};
      var gain = 0.0;
      var $this_0 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
      var other_0 = new UInt(8);
      if ((new UInt($this_0.data & other_0.data)).data !== 0) {
        var g_scfc_decode = this.__STATIC_L3_decode_scalefactors_g_scfc_decode_0;
        var part = {v: this.get_361p4v$(g_scfc_decode, this.get_scalefac_compress_4gg731$(this.get_value_culdo2$(gr)).data & 65535).data & 255};
        var tmp$ = scf_size.v;
        var $receiver_1 = new UByte(toByte(part.v >> 2));
        this.set_iu8g92$(scf_size.v, 0, $receiver_1);
        this.set_iu8g92$(tmp$, 1, $receiver_1);
        var tmp$_0 = scf_size.v;
        var $receiver_2 = new UByte(toByte(part.v & 3));
        this.set_iu8g92$(scf_size.v, 2, $receiver_2);
        this.set_iu8g92$(tmp$_0, 3, $receiver_2);
      }
       else {
        var g_mod = this.__STATIC_L3_decode_scalefactors_g_mod_0;
        var k = {v: 0};
        var modprod = {v: 0};
        var sfc = {v: 0};
        var $this_1 = new UInt(this.get_t9mxw2$(hdr, 3).data & 255);
        var other_1 = new UInt(16);
        var tmp$_1 = (new UInt($this_1.data & other_1.data)).data !== 0;
        if (tmp$_1) {
          tmp$_1 = numberToInt(ch) !== 0;
        }
        var ist = this.toInt_1v8dcc$(tmp$_1);
        sfc.v = (new UInt((new UInt(this.get_scalefac_compress_4gg731$(this.get_value_culdo2$(gr)).data & 65535)).data >>> ist)).data;
        k.v = (ist * 3 | 0) * 4 | 0;
        while (sfc.v >= 0) {
          modprod.v = 1;
          i.v = 3;
          while (i.v >= 0) {
            this.set_iu8g92$(scf_size.v, i.v, new UByte(toByte((sfc.v / modprod.v | 0) % (this.get_cy2s9o$(g_mod, k.v + i.v | 0).data & 255))));
            modprod.v = Kotlin.imul(modprod.v, this.get_cy2s9o$(g_mod, k.v + i.v | 0).data & 255);
            i.v = i.v - 1 | 0;
          }
          sfc.v = sfc.v - modprod.v | 0;
          k.v = k.v + 4 | 0;
        }
        scf_partition.v = this.plus_t9mxw2$(scf_partition.v, k.v);
        scfsi.v = -16;
      }
      this.L3_read_scalefactors_5xlpvs$(new CPointer(iscf.v.ptr), ist_pos, new CPointer(scf_size.v.ptr), scf_partition.v, bs, scfsi.v);
      if ((this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255) !== 0) {
        var sh = 3 - scf_shift.v | 0;
        i.v = 0;
        while (i.v < (this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255)) {
          var tmp$_2 = iscf.v;
          var tmp$_3 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
          var other_2 = new UInt(i.v);
          var tmp$_4 = (new UInt(tmp$_3.data + other_2.data | 0)).data + 0 | 0;
          var tmp$_5 = iscf.v;
          var tmp$_6 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
          var other_3 = new UInt(i.v);
          var tmp$_7 = new UInt(this.get_wi4yja$(tmp$_5, (new UInt(tmp$_6.data + other_3.data | 0)).data + 0 | 0).data & 255);
          var other_4 = new UInt((new UInt(this.get_ofrr7l$(this.get_subblock_gain_4gg731$(this.get_value_culdo2$(gr)), 0).data & 255)).data << sh);
          this.set_sc99eu$(tmp$_2, tmp$_4, new UByte(toByte((new UInt(tmp$_7.data + other_4.data | 0)).data)));
          var tmp$_8 = iscf.v;
          var tmp$_9 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
          var other_5 = new UInt(i.v);
          var tmp$_10 = (new UInt(tmp$_9.data + other_5.data | 0)).data + 1 | 0;
          var tmp$_11 = iscf.v;
          var tmp$_12 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
          var other_6 = new UInt(i.v);
          var tmp$_13 = new UInt(this.get_wi4yja$(tmp$_11, (new UInt(tmp$_12.data + other_6.data | 0)).data + 1 | 0).data & 255);
          var other_7 = new UInt((new UInt(this.get_ofrr7l$(this.get_subblock_gain_4gg731$(this.get_value_culdo2$(gr)), 1).data & 255)).data << sh);
          this.set_sc99eu$(tmp$_8, tmp$_10, new UByte(toByte((new UInt(tmp$_13.data + other_7.data | 0)).data)));
          var tmp$_14 = iscf.v;
          var tmp$_15 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
          var other_8 = new UInt(i.v);
          var tmp$_16 = (new UInt(tmp$_15.data + other_8.data | 0)).data + 2 | 0;
          var tmp$_17 = iscf.v;
          var tmp$_18 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
          var other_9 = new UInt(i.v);
          var tmp$_19 = new UInt(this.get_wi4yja$(tmp$_17, (new UInt(tmp$_18.data + other_9.data | 0)).data + 2 | 0).data & 255);
          var other_10 = new UInt((new UInt(this.get_ofrr7l$(this.get_subblock_gain_4gg731$(this.get_value_culdo2$(gr)), 2).data & 255)).data << sh);
          this.set_sc99eu$(tmp$_14, tmp$_16, new UByte(toByte((new UInt(tmp$_19.data + other_10.data | 0)).data)));
          i.v = i.v + 3 | 0;
        }
      }
       else {
        if ((this.get_preflag_4gg731$(this.get_value_culdo2$(gr)).data & 255) !== 0) {
          var g_preamp = this.__STATIC_L3_decode_scalefactors_g_preamp_0;
          i.v = 0;
          while (i.v < 10) {
            var tmp$_20 = iscf.v;
            var tmp$_21 = 11 + i.v | 0;
            var tmp$_22 = new UInt(this.get_wi4yja$(iscf.v, 11 + i.v | 0).data & 255);
            var other_11 = new UInt(this.get_axx2ex$(g_preamp, i.v).data & 255);
            this.set_sc99eu$(tmp$_20, tmp$_21, new UByte(toByte((new UInt(tmp$_22.data + other_11.data | 0)).data)));
            i.v = i.v + 1 | 0;
          }
        }
      }
      var tmp$_23 = new UInt(this.get_global_gain_4gg731$(this.get_value_culdo2$(gr)).data & 255);
      var other_12 = new UInt(L_4.toInt());
      var tmp$_24 = (new UInt(tmp$_23.data + other_12.data | 0)).data - 210;
      var $this_2 = new UInt(this.get_t9mxw2$(hdr, 3).data & 255);
      var other_13 = new UInt(224);
      gain_exp = tmp$_24 - ((new UInt($this_2.data & other_13.data)).data === 96 ? 2 : 0) | 0;
      gain = this.L3_ldexp_q2_vjorfl$(2048, L44.subtract(Kotlin.Long.fromInt(gain_exp)).toInt());
      i.v = 0;
      while (true) {
        var tmp$_25 = i.v;
        var tmp$_26 = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
        var other_14 = new UInt(this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
        if (!(tmp$_25 < (new UInt(tmp$_26.data + other_14.data | 0)).data))
          break;
        var tmp$_27 = i.v;
        var tmp$_28 = gain;
        var $this_3 = new UInt(this.get_wi4yja$(iscf.v, i.v).data & 255);
        var bitCount = scf_shift.v;
        this.swf_24o109$(scf.ptr + (tmp$_27 * 4 | 0) | 0, this.L3_ldexp_q2_vjorfl$(tmp$_28, (new UInt($this_3.data << bitCount)).data));
        i.v = i.v + 1 | 0;
      }
    }
    finally {
      this.STACK_PTR = oldPos;
    }
  };
  MiniMp3.prototype.L3_pow_43_za3lpa$ = function (x) {
    var x_0 = x;
    var frac = 0.0;
    var sign = 0;
    var mult = 256;
    if (x_0 < 129) {
      return this.get_79os4f$(this.g_pow43, 16 + x_0 | 0);
    }
    if (x_0 < 1024) {
      mult = 16;
      x_0 = x_0 << 3;
    }
    sign = (2 * x_0 | 0) & 64;
    frac = ((x_0 & 63) - sign | 0) / ((x_0 & -64) + sign | 0);
    return this.get_79os4f$(this.g_pow43, 16 + (x_0 + sign >> 6) | 0) * (1.0 + frac * (4.0 / 3.0 + frac * (2.0 / 9.0))) * mult;
  };
  MiniMp3.prototype.L3_huffman_fb4cbt$ = function (dst, bs, gr_info, scf, layer3gr_limit) {
    var dst_0 = {v: dst};
    var scf_0 = {v: scf};
    var tabs = {v: this.__STATIC_L3_huffman_tabs_0};
    var tab32 = this.__STATIC_L3_huffman_tab32_0;
    var tab33 = this.__STATIC_L3_huffman_tab33_0;
    var tabindex = {v: this.__STATIC_L3_huffman_tabindex_0};
    var g_linbits = {v: this.__STATIC_L3_huffman_g_linbits_0};
    var one = {v: 0.0};
    var ireg = {v: 0};
    var big_val_cnt = {v: this.get_big_values_4gg731$(this.get_value_culdo2$(gr_info)).data & 65535};
    var sfb = {v: this.get_sfbtab_4gg731$(this.get_value_culdo2$(gr_info))};
    var bs_next_ptr = {v: this.plus_t9mxw2$(this.get_buf_7bwnva$(this.get_value_iwav89$(bs)), this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) / 8 | 0)};
    var $this = new UInt(this.get_t9mxw2$(bs_next_ptr.v, 0).data & 255);
    var other = new UInt(256);
    var times_s87ys9$result;
    times_s87ys9$result = new UInt(Kotlin.imul($this.data, other.data));
    var other_0 = new UInt(this.get_t9mxw2$(bs_next_ptr.v, 1).data & 255);
    var $this_0 = new UInt(times_s87ys9$result.data + other_0.data | 0);
    var other_1 = new UInt(256);
    var times_s87ys9$result_0;
    times_s87ys9$result_0 = new UInt(Kotlin.imul($this_0.data, other_1.data));
    var other_2 = new UInt(this.get_t9mxw2$(bs_next_ptr.v, 2).data & 255);
    var $this_1 = new UInt(times_s87ys9$result_0.data + other_2.data | 0);
    var other_3 = new UInt(256);
    var times_s87ys9$result_1;
    times_s87ys9$result_1 = new UInt(Kotlin.imul($this_1.data, other_3.data));
    var other_4 = new UInt(this.get_t9mxw2$(bs_next_ptr.v, 3).data & 255);
    var $this_2 = new UInt(times_s87ys9$result_1.data + other_4.data | 0);
    var bitCount = this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) & 7;
    var bs_cache = {v: new UInt($this_2.data << bitCount)};
    var pairs_to_decode = {v: 0};
    var np = {v: 0};
    var bs_sh = {v: (this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) & 7) - 8 | 0};
    bs_next_ptr.v = this.plus_t9mxw2$(bs_next_ptr.v, 4);
    while (big_val_cnt.v > 0) {
      var tmp$;
      var tab_num = this.get_ofrr7l$(this.get_table_select_4gg731$(this.get_value_culdo2$(gr_info)), ireg.v).data & 255;
      var sfb_cnt = this.get_ofrr7l$(this.get_region_count_4gg731$(this.get_value_culdo2$(gr_info)), (tmp$ = ireg.v, ireg.v = tmp$ + 1 | 0, tmp$)).data & 255;
      var codebook = {v: new CPointer(this.plus_2g34sv$(tabs.v, this.get_o4h05i$(tabindex.v, tab_num)).ptr)};
      var linbits = {v: this.get_t9mxw2$(g_linbits.v, tab_num).data & 255};
      if (numberToInt(linbits.v) !== 0) {
        do0: do {
          var $receiver = sfb.v;
          sfb.v = this.plus_t9mxw2$(sfb.v, 1);
          np.v = uintDivide(new UInt(this.get_value_j4vej4$($receiver).data & 255), new UInt(2)).data;
          pairs_to_decode.v = big_val_cnt.v > np.v ? np.v : big_val_cnt.v;
          var $receiver_0 = scf_0.v;
          scf_0.v = this.plus_s1x8lt$(scf_0.v, 1);
          one.v = this.lwf_za3lpa$($receiver_0.ptr + (0 * 4 | 0) | 0);
          do1: do {
            var j = {v: 0};
            var w = 5;
            var $this_3 = bs_cache.v;
            var bitCount_0 = 32 - w | 0;
            var leaf = {v: this.get_2g34sv$(codebook.v, (new UInt($this_3.data >>> bitCount_0)).data)};
            while (leaf.v < 0) {
              var $this_4 = bs_cache.v;
              var bitCount_1 = w;
              bs_cache.v = new UInt($this_4.data << bitCount_1);
              bs_sh.v = bs_sh.v + w | 0;
              w = leaf.v & 7;
              var tmp$_0 = codebook.v;
              var $this_5 = bs_cache.v;
              var bitCount_2 = 32 - w | 0;
              leaf.v = this.get_2g34sv$(tmp$_0, (new UInt($this_5.data >>> bitCount_2)).data - (leaf.v >> 3) | 0);
            }
            var $this_6 = bs_cache.v;
            var bitCount_3 = leaf.v >> 8;
            bs_cache.v = new UInt($this_6.data << bitCount_3);
            bs_sh.v = bs_sh.v + (leaf.v >> 8) | 0;
            j.v = 0;
            while (j.v < 2) {
              var lsb = leaf.v & 15;
              if (lsb === 15) {
                var tmp$_1 = lsb;
                var $this_7 = bs_cache.v;
                var bitCount_4 = 32 - linbits.v | 0;
                lsb = tmp$_1 + (new UInt($this_7.data >>> bitCount_4)).data | 0;
                var $this_8 = bs_cache.v;
                var bitCount_5 = linbits.v;
                bs_cache.v = new UInt($this_8.data << bitCount_5);
                bs_sh.v = bs_sh.v + linbits.v | 0;
                while (bs_sh.v >= 0) {
                  var tmp$_2 = bs_cache.v;
                  var $receiver_1 = bs_next_ptr.v;
                  bs_next_ptr.v = this.plus_t9mxw2$(bs_next_ptr.v, 1);
                  var $this_9 = new UInt(this.get_value_j4vej4$($receiver_1).data & 255);
                  var bitCount_6 = bs_sh.v;
                  var other_5 = new UInt($this_9.data << bitCount_6);
                  bs_cache.v = new UInt(tmp$_2.data | other_5.data);
                  bs_sh.v = bs_sh.v - 8 | 0;
                }
                this.swf_24o109$(dst_0.v.ptr + (0 * 4 | 0) | 0, one.v * this.L3_pow_43_za3lpa$(lsb) * (bs_cache.v.data < 0 ? L_1 : L1).toNumber());
              }
               else {
                this.swf_24o109$(dst_0.v.ptr + (0 * 4 | 0) | 0, this.get_79os4f$(this.g_pow43, 16 + lsb - (16 * (new UInt(bs_cache.v.data >>> 31)).data | 0) | 0) * one.v);
              }
              var tmp$_3 = bs_cache.v;
              var bitCount_7 = numberToInt(lsb) !== 0 ? 1 : 0;
              bs_cache.v = new UInt(tmp$_3.data << bitCount_7);
              bs_sh.v = bs_sh.v + (numberToInt(lsb) !== 0 ? 1 : 0) | 0;
              j.v = j.v + 1 | 0;
              dst_0.v = this.plus_s1x8lt$(dst_0.v, 1);
              leaf.v = leaf.v >> 4;
            }
            while (bs_sh.v >= 0) {
              var tmp$_4 = bs_cache.v;
              var $receiver_2 = bs_next_ptr.v;
              bs_next_ptr.v = this.plus_t9mxw2$(bs_next_ptr.v, 1);
              var $this_10 = new UInt(this.get_value_j4vej4$($receiver_2).data & 255);
              var bitCount_8 = bs_sh.v;
              var other_6 = new UInt($this_10.data << bitCount_8);
              bs_cache.v = new UInt(tmp$_4.data | other_6.data);
              bs_sh.v = bs_sh.v - 8 | 0;
            }
            if (!(numberToInt((pairs_to_decode.v = pairs_to_decode.v - 1 | 0, pairs_to_decode.v)) !== 0))
              break;
          }
           while (true);
          var $receiver_3 = big_val_cnt.v - np.v | 0;
          big_val_cnt.v = $receiver_3;
          if (!($receiver_3 > 0 && (sfb_cnt = sfb_cnt - 1 | 0, sfb_cnt) >= 0))
            break;
        }
         while (true);
      }
       else {
        do0: do {
          var $receiver_4 = sfb.v;
          sfb.v = this.plus_t9mxw2$(sfb.v, 1);
          np.v = uintDivide(new UInt(this.get_value_j4vej4$($receiver_4).data & 255), new UInt(2)).data;
          pairs_to_decode.v = big_val_cnt.v > np.v ? np.v : big_val_cnt.v;
          var $receiver_5 = scf_0.v;
          scf_0.v = this.plus_s1x8lt$(scf_0.v, 1);
          one.v = this.lwf_za3lpa$($receiver_5.ptr + (0 * 4 | 0) | 0);
          do1: do {
            var j_0 = {v: 0};
            var w_0 = 5;
            var $this_11 = bs_cache.v;
            var bitCount_9 = 32 - w_0 | 0;
            var leaf_0 = {v: this.get_2g34sv$(codebook.v, (new UInt($this_11.data >>> bitCount_9)).data)};
            while (leaf_0.v < 0) {
              var $this_12 = bs_cache.v;
              var bitCount_10 = w_0;
              bs_cache.v = new UInt($this_12.data << bitCount_10);
              bs_sh.v = bs_sh.v + w_0 | 0;
              w_0 = leaf_0.v & 7;
              var tmp$_5 = codebook.v;
              var $this_13 = bs_cache.v;
              var bitCount_11 = 32 - w_0 | 0;
              leaf_0.v = this.get_2g34sv$(tmp$_5, (new UInt($this_13.data >>> bitCount_11)).data - (leaf_0.v >> 3) | 0);
            }
            var $this_14 = bs_cache.v;
            var bitCount_12 = leaf_0.v >> 8;
            bs_cache.v = new UInt($this_14.data << bitCount_12);
            bs_sh.v = bs_sh.v + (leaf_0.v >> 8) | 0;
            j_0.v = 0;
            while (j_0.v < 2) {
              var lsb_0 = leaf_0.v & 15;
              this.swf_24o109$(dst_0.v.ptr + (0 * 4 | 0) | 0, this.get_79os4f$(this.g_pow43, 16 + lsb_0 - (16 * (new UInt(bs_cache.v.data >>> 31)).data | 0) | 0) * one.v);
              var tmp$_6 = bs_cache.v;
              var bitCount_13 = numberToInt(lsb_0) !== 0 ? 1 : 0;
              bs_cache.v = new UInt(tmp$_6.data << bitCount_13);
              bs_sh.v = bs_sh.v + (numberToInt(lsb_0) !== 0 ? 1 : 0) | 0;
              j_0.v = j_0.v + 1 | 0;
              dst_0.v = this.plus_s1x8lt$(dst_0.v, 1);
              leaf_0.v = leaf_0.v >> 4;
            }
            while (bs_sh.v >= 0) {
              var tmp$_7 = bs_cache.v;
              var $receiver_6 = bs_next_ptr.v;
              bs_next_ptr.v = this.plus_t9mxw2$(bs_next_ptr.v, 1);
              var $this_15 = new UInt(this.get_value_j4vej4$($receiver_6).data & 255);
              var bitCount_14 = bs_sh.v;
              var other_7 = new UInt($this_15.data << bitCount_14);
              bs_cache.v = new UInt(tmp$_7.data | other_7.data);
              bs_sh.v = bs_sh.v - 8 | 0;
            }
            if (!(numberToInt((pairs_to_decode.v = pairs_to_decode.v - 1 | 0, pairs_to_decode.v)) !== 0))
              break;
          }
           while (true);
          var $receiver_7 = big_val_cnt.v - np.v | 0;
          big_val_cnt.v = $receiver_7;
          if (!($receiver_7 > 0 && (sfb_cnt = sfb_cnt - 1 | 0, sfb_cnt) >= 0))
            break;
        }
         while (true);
      }
    }
    np.v = 1 - big_val_cnt.v | 0;
    while0: while (true) {
      if (!(numberToInt(1) !== 0))
        break;
      var __oldPos0 = this.STACK_PTR;
      try {
        var codebook_count1 = new CPointer(((this.get_count1_table_4gg731$(this.get_value_culdo2$(gr_info)).data & 255) !== 0 ? tab33 : tab32).ptr);
        var leaf_1 = this.get_t9mxw2$(codebook_count1, (new UInt(bs_cache.v.data >>> 28)).data).data & 255;
        if (!(numberToInt(leaf_1 & 8) !== 0)) {
          var tmp$_8 = leaf_1 >> 3;
          var $this_16 = new UInt(bs_cache.v.data << 4);
          var bitCount_15 = 32 - (leaf_1 & 3) | 0;
          leaf_1 = this.get_t9mxw2$(codebook_count1, tmp$_8 + (new UInt($this_16.data >>> bitCount_15)).data | 0).data & 255;
        }
        var $this_17 = bs_cache.v;
        var bitCount_16 = leaf_1 & 7;
        bs_cache.v = new UInt($this_17.data << bitCount_16);
        bs_sh.v = bs_sh.v + (leaf_1 & 7) | 0;
        if (((this.minusPtrUByte_n3mh9t$(bs_next_ptr.v, this.get_buf_7bwnva$(this.get_value_iwav89$(bs))) * 8 | 0) - 24 + bs_sh.v | 0) > layer3gr_limit) {
          break while0;
        }
        if (!(numberToInt((np.v = np.v - 1 | 0, np.v)) !== 0)) {
          var $receiver_8 = sfb.v;
          sfb.v = this.plus_t9mxw2$(sfb.v, 1);
          np.v = uintDivide(new UInt(this.get_value_j4vej4$($receiver_8).data & 255), new UInt(2)).data;
          if (!(numberToInt(np.v) !== 0)) {
            break while0;
          }
          var $receiver_9 = scf_0.v;
          scf_0.v = this.plus_s1x8lt$(scf_0.v, 1);
          one.v = this.lwf_za3lpa$($receiver_9.ptr + (0 * 4 | 0) | 0);
        }
        if (numberToInt(leaf_1 & 128) !== 0) {
          this.swf_24o109$(dst_0.v.ptr + (0 * 4 | 0) | 0, bs_cache.v.data < 0 ? -one.v : one.v);
          bs_cache.v = new UInt(bs_cache.v.data << 1);
          bs_sh.v = bs_sh.v + 1 | 0;
        }
        if (numberToInt(leaf_1 & 64) !== 0) {
          this.swf_24o109$(dst_0.v.ptr + (1 * 4 | 0) | 0, bs_cache.v.data < 0 ? -one.v : one.v);
          bs_cache.v = new UInt(bs_cache.v.data << 1);
          bs_sh.v = bs_sh.v + 1 | 0;
        }
        if (!(numberToInt((np.v = np.v - 1 | 0, np.v)) !== 0)) {
          var $receiver_10 = sfb.v;
          sfb.v = this.plus_t9mxw2$(sfb.v, 1);
          np.v = uintDivide(new UInt(this.get_value_j4vej4$($receiver_10).data & 255), new UInt(2)).data;
          if (!(numberToInt(np.v) !== 0)) {
            break while0;
          }
          var $receiver_11 = scf_0.v;
          scf_0.v = this.plus_s1x8lt$(scf_0.v, 1);
          one.v = this.lwf_za3lpa$($receiver_11.ptr + (0 * 4 | 0) | 0);
        }
        if (numberToInt(leaf_1 & 32) !== 0) {
          this.swf_24o109$(dst_0.v.ptr + (2 * 4 | 0) | 0, bs_cache.v.data < 0 ? -one.v : one.v);
          bs_cache.v = new UInt(bs_cache.v.data << 1);
          bs_sh.v = bs_sh.v + 1 | 0;
        }
        if (numberToInt(leaf_1 & 16) !== 0) {
          this.swf_24o109$(dst_0.v.ptr + (3 * 4 | 0) | 0, bs_cache.v.data < 0 ? -one.v : one.v);
          bs_cache.v = new UInt(bs_cache.v.data << 1);
          bs_sh.v = bs_sh.v + 1 | 0;
        }
        while (bs_sh.v >= 0) {
          var tmp$_9 = bs_cache.v;
          var $receiver_12 = bs_next_ptr.v;
          bs_next_ptr.v = this.plus_t9mxw2$(bs_next_ptr.v, 1);
          var $this_18 = new UInt(this.get_value_j4vej4$($receiver_12).data & 255);
          var bitCount_17 = bs_sh.v;
          var other_8 = new UInt($this_18.data << bitCount_17);
          bs_cache.v = new UInt(tmp$_9.data | other_8.data);
          bs_sh.v = bs_sh.v - 8 | 0;
        }
      }
      finally {
        this.STACK_PTR = __oldPos0;
      }
      dst_0.v = this.plus_s1x8lt$(dst_0.v, 4);
    }
    this.set_pos_xnn3qw$(this.get_value_iwav89$(bs), layer3gr_limit);
  };
  MiniMp3.prototype.L3_midside_stereo_ouq5pu$ = function (left, n) {
    var i = {v: 0};
    var right = {v: this.plus_s1x8lt$(left, 576)};
    while (i.v < n) {
      var a = this.lwf_za3lpa$(left.ptr + (i.v * 4 | 0) | 0);
      var b = this.lwf_za3lpa$(right.v.ptr + (i.v * 4 | 0) | 0);
      this.swf_24o109$(left.ptr + (i.v * 4 | 0) | 0, a + b);
      this.swf_24o109$(right.v.ptr + (i.v * 4 | 0) | 0, a - b);
      i.v = i.v + 1 | 0;
    }
  };
  MiniMp3.prototype.L3_intensity_stereo_band_ow4xym$ = function (left, n, kl, kr) {
    var i = 0;
    i = 0;
    while (i < n) {
      this.swf_24o109$(left.ptr + ((i + 576 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(left.ptr + (i * 4 | 0) | 0) * kr);
      this.swf_24o109$(left.ptr + (i * 4 | 0) | 0, this.lwf_za3lpa$(left.ptr + (i * 4 | 0) | 0) * kl);
      i = i + 1 | 0;
    }
  };
  MiniMp3.prototype.L3_stereo_top_band_756l0n$ = function (right, sfb, nbands, max_band) {
    var right_0 = right;
    var i = 0;
    var k = 0;
    this.set_u7m0zl$(max_band, 2, -1);
    this.set_u7m0zl$(max_band, 1, -1);
    this.set_u7m0zl$(max_band, 0, -1);
    i = 0;
    while0: while (i < nbands) {
      k = 0;
      while1: while (true) {
        if (!(k < (this.get_t9mxw2$(sfb, i).data & 255)))
          break;
        var tmp$ = this.lwf_za3lpa$(right_0.ptr + (k * 4 | 0) | 0) !== 0.0;
        if (!tmp$) {
          tmp$ = this.lwf_za3lpa$(right_0.ptr + ((k + 1 | 0) * 4 | 0) | 0) !== 0.0;
        }
        if (tmp$) {
          this.set_u7m0zl$(max_band, i % 3, i);
          break while1;
        }
        k = k + 2 | 0;
      }
      right_0 = this.plus_s1x8lt$(right_0, this.get_t9mxw2$(sfb, i).data & 255);
      i = i + 1 | 0;
    }
  };
  MiniMp3.prototype.L3_stereo_process_gpdkkz$ = function (left, ist_pos, sfb, hdr, max_band, mpeg2_sh) {
    var left_0 = {v: left};
    var g_pan = {v: this.__STATIC_L3_stereo_process_g_pan_0};
    var i = {v: new UInt(0)};
    var $this = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
    var other = new UInt(8);
    var max_pos = {v: new UInt((new UInt($this.data & other.data)).data !== 0 ? 7 : 64)};
    i.v = new UInt(0);
    while ((this.get_t9mxw2$(sfb, i.v.data).data & 255) !== 0) {
      var ipos = {v: new UInt(this.get_t9mxw2$(ist_pos, i.v.data).data & 255)};
      var tmp$ = i.v.data > this.get_pw5ub3$(max_band, uintRemainder(i.v, new UInt(3)).data);
      if (tmp$) {
        var $this_0 = ipos.v;
        var other_0 = max_pos.v;
        tmp$ = uintCompare($this_0.data, other_0.data) < 0;
      }
      if (tmp$) {
        var kl = 0.0;
        var kr = 0.0;
        var $this_1 = new UInt(this.get_t9mxw2$(hdr, 3).data & 255);
        var other_1 = new UInt(32);
        var s = (new UInt($this_1.data & other_1.data)).data !== 0 ? 1.4142135 : 1.0;
        var $this_2 = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
        var other_2 = new UInt(8);
        if ((new UInt($this_2.data & other_2.data)).data !== 0) {
          kl = this.get_9jzm02$(g_pan.v, 2 * ipos.v.data | 0);
          kr = this.get_9jzm02$(g_pan.v, (2 * ipos.v.data | 0) + 1 | 0);
        }
         else {
          kl = 1.0;
          kr = this.L3_ldexp_q2_vjorfl$(1.0, ipos.v.data + 1 >> 1 << mpeg2_sh);
          var $this_3 = ipos.v;
          var other_3 = new UInt(1);
          if ((new UInt($this_3.data & other_3.data)).data !== 0) {
            kl = kr;
            kr = 1.0;
          }
        }
        this.L3_intensity_stereo_band_ow4xym$(left_0.v, this.get_t9mxw2$(sfb, i.v.data).data & 255, kl * s, kr * s);
      }
       else {
        var $this_4 = new UInt(this.get_t9mxw2$(hdr, 3).data & 255);
        var other_4 = new UInt(32);
        if ((new UInt($this_4.data & other_4.data)).data !== 0) {
          this.L3_midside_stereo_ouq5pu$(left_0.v, this.get_t9mxw2$(sfb, i.v.data).data & 255);
        }
      }
      left_0.v = this.plus_s1x8lt$(left_0.v, this.get_t9mxw2$(sfb, i.v.data).data & 255);
      var $this_5 = i.v;
      var other_5 = new UInt(1);
      i.v = new UInt($this_5.data + other_5.data | 0);
    }
  };
  MiniMp3.prototype.L3_intensity_stereo_4r3etv$ = function (left, ist_pos, gr, hdr) {
    var oldPos = this.STACK_PTR;
    try {
      var $receiver = new Array3Int(this.alloca_zero_za3lpa$(12).ptr);
      this.set_u7m0zl$($receiver, 0, 0);
      var max_band = {v: $receiver};
      var toUInt$result;
      toUInt$result = new UInt(this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
      var other = new UInt(this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255);
      var n_sfb = {v: (new UInt(toUInt$result.data + other.data | 0)).data};
      var i = {v: 0};
      var max_blocks = {v: (this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255) !== 0 ? 3 : 1};
      this.L3_stereo_top_band_756l0n$(this.plus_s1x8lt$(left, 576), this.get_sfbtab_4gg731$(this.get_value_culdo2$(gr)), n_sfb.v, max_band.v);
      if ((this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr)).data & 255) !== 0) {
        var tmp$ = max_band.v;
        var $receiver_0 = (this.get_pw5ub3$(max_band.v, 0) < this.get_pw5ub3$(max_band.v, 1) ? this.get_pw5ub3$(max_band.v, 1) : this.get_pw5ub3$(max_band.v, 0)) < this.get_pw5ub3$(max_band.v, 2) ? this.get_pw5ub3$(max_band.v, 2) : this.get_pw5ub3$(max_band.v, 0) < this.get_pw5ub3$(max_band.v, 1) ? this.get_pw5ub3$(max_band.v, 1) : this.get_pw5ub3$(max_band.v, 0);
        this.set_u7m0zl$(max_band.v, 2, $receiver_0);
        this.set_u7m0zl$(max_band.v, 1, $receiver_0);
        this.set_u7m0zl$(tmp$, 0, $receiver_0);
      }
      i.v = 0;
      while (i.v < max_blocks.v) {
        var $this = new UInt(this.get_t9mxw2$(hdr, 1).data & 255);
        var other_0 = new UInt(8);
        var default_pos = (new UInt($this.data & other_0.data)).data !== 0 ? 3 : 0;
        var itop = n_sfb.v - max_blocks.v + i.v | 0;
        var prev = itop - max_blocks.v | 0;
        this.set_9c14iy$(ist_pos, itop, new UByte(toByte(this.get_pw5ub3$(max_band.v, i.v) >= prev ? default_pos : this.get_t9mxw2$(ist_pos, prev).data & 255)));
        i.v = i.v + 1 | 0;
      }
      var tmp$_0 = this.get_sfbtab_4gg731$(this.get_value_culdo2$(gr));
      var tmp$_1 = max_band.v;
      var $this_0 = new UInt(this.get_scalefac_compress_4gg731$(this.get_x5mmy4$(gr, 1)).data & 65535);
      var other_1 = new UInt(1);
      this.L3_stereo_process_gpdkkz$(left, ist_pos, tmp$_0, hdr, tmp$_1, (new UInt($this_0.data & other_1.data)).data);
    }
    finally {
      this.STACK_PTR = oldPos;
    }
  };
  MiniMp3.prototype.L3_reorder_7tkxlt$ = function (grbuf, scratch, sfb) {
    var sfb_0 = {v: sfb};
    var i = {v: 0};
    var len = {v: 0};
    var src = {v: grbuf};
    var dst = {v: scratch};
    while (true) {
      var $receiver = this.get_value_j4vej4$(sfb_0.v).data & 255;
      len.v = $receiver;
      if (!(0 !== $receiver))
        break;
      i.v = 0;
      while (i.v < len.v) {
        var $receiver_0 = dst.v;
        dst.v = this.plus_s1x8lt$(dst.v, 1);
        this.swf_24o109$($receiver_0.ptr + (0 * 4 | 0) | 0, this.lwf_za3lpa$(src.v.ptr + ((0 * len.v | 0) * 4 | 0) | 0));
        var $receiver_1 = dst.v;
        dst.v = this.plus_s1x8lt$(dst.v, 1);
        this.swf_24o109$($receiver_1.ptr + (0 * 4 | 0) | 0, this.lwf_za3lpa$(src.v.ptr + ((1 * len.v | 0) * 4 | 0) | 0));
        var $receiver_2 = dst.v;
        dst.v = this.plus_s1x8lt$(dst.v, 1);
        this.swf_24o109$($receiver_2.ptr + (0 * 4 | 0) | 0, this.lwf_za3lpa$(src.v.ptr + ((2 * len.v | 0) * 4 | 0) | 0));
        i.v = i.v + 1 | 0;
        src.v = this.plus_s1x8lt$(src.v, 1);
      }
      sfb_0.v = this.plus_t9mxw2$(sfb_0.v, 3);
      src.v = this.plus_s1x8lt$(src.v, 2 * len.v | 0);
    }
    this.memcpy_q1n2f2$(new CPointer(grbuf.ptr), new CPointer(scratch.ptr), Kotlin.imul(this.minusPtrFloat_lkybfz$(dst.v, scratch), this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject)));
  };
  MiniMp3.prototype.L3_antialias_ouq5pu$ = function (grbuf, nbands) {
    var grbuf_0 = {v: grbuf};
    var nbands_0 = {v: nbands};
    var g_aa = {v: this.__STATIC_L3_antialias_g_aa_0};
    while (nbands_0.v > 0) {
      var i = {v: 0};
      while (i.v < 8) {
        var u = this.lwf_za3lpa$(grbuf_0.v.ptr + ((18 + i.v | 0) * 4 | 0) | 0);
        var d = this.lwf_za3lpa$(grbuf_0.v.ptr + ((17 - i.v | 0) * 4 | 0) | 0);
        this.swf_24o109$(grbuf_0.v.ptr + ((18 + i.v | 0) * 4 | 0) | 0, u * this.get_qbl78n$(this.get_415gqo$(g_aa.v, 0), i.v) - d * this.get_qbl78n$(this.get_415gqo$(g_aa.v, 1), i.v));
        this.swf_24o109$(grbuf_0.v.ptr + ((17 - i.v | 0) * 4 | 0) | 0, u * this.get_qbl78n$(this.get_415gqo$(g_aa.v, 1), i.v) + d * this.get_qbl78n$(this.get_415gqo$(g_aa.v, 0), i.v));
        i.v = i.v + 1 | 0;
      }
      nbands_0.v = nbands_0.v - 1 | 0;
      grbuf_0.v = this.plus_s1x8lt$(grbuf_0.v, 18);
    }
  };
  MiniMp3.prototype.L3_dct3_9_pew4cg$ = function (y) {
    var s0 = 0.0;
    var s1 = 0.0;
    var s2 = 0.0;
    var s3 = 0.0;
    var s4 = 0.0;
    var s5 = 0.0;
    var s6 = 0.0;
    var s7 = 0.0;
    var s8 = 0.0;
    var t0 = 0.0;
    var t2 = 0.0;
    var t4 = 0.0;
    s0 = this.lwf_za3lpa$(y.ptr + (0 * 4 | 0) | 0);
    s2 = this.lwf_za3lpa$(y.ptr + (2 * 4 | 0) | 0);
    s4 = this.lwf_za3lpa$(y.ptr + (4 * 4 | 0) | 0);
    s6 = this.lwf_za3lpa$(y.ptr + (6 * 4 | 0) | 0);
    s8 = this.lwf_za3lpa$(y.ptr + (8 * 4 | 0) | 0);
    t0 = s0 + s6 * 0.5;
    s0 = s0 - s6;
    t4 = (s4 + s2) * 0.9396926;
    t2 = (s8 + s2) * 0.76604444;
    s6 = (s4 - s8) * 0.17364818;
    s4 = s4 + (s8 - s2);
    s2 = s0 - s4 * 0.5;
    this.swf_24o109$(y.ptr + (4 * 4 | 0) | 0, s4 + s0);
    s8 = t0 - t2 + s6;
    s0 = t0 - t4 + t2;
    s4 = t0 + t4 - s6;
    s1 = this.lwf_za3lpa$(y.ptr + (1 * 4 | 0) | 0);
    s3 = this.lwf_za3lpa$(y.ptr + (3 * 4 | 0) | 0);
    s5 = this.lwf_za3lpa$(y.ptr + (5 * 4 | 0) | 0);
    s7 = this.lwf_za3lpa$(y.ptr + (7 * 4 | 0) | 0);
    s3 = s3 * 0.8660254;
    t0 = (s5 + s1) * 0.9848077;
    t4 = (s5 - s7) * 0.34202015;
    t2 = (s1 + s7) * 0.64278764;
    s1 = (s1 - s5 - s7) * 0.8660254;
    s5 = t0 - s3 - t2;
    s7 = t4 - s3 - t0;
    s3 = t4 + s3 - t2;
    this.swf_24o109$(y.ptr + (0 * 4 | 0) | 0, s4 - s7);
    this.swf_24o109$(y.ptr + (1 * 4 | 0) | 0, s2 + s1);
    this.swf_24o109$(y.ptr + (2 * 4 | 0) | 0, s0 - s3);
    this.swf_24o109$(y.ptr + (3 * 4 | 0) | 0, s8 + s5);
    this.swf_24o109$(y.ptr + (5 * 4 | 0) | 0, s8 - s5);
    this.swf_24o109$(y.ptr + (6 * 4 | 0) | 0, s0 + s3);
    this.swf_24o109$(y.ptr + (7 * 4 | 0) | 0, s2 - s1);
    this.swf_24o109$(y.ptr + (8 * 4 | 0) | 0, s4 + s7);
  };
  MiniMp3.prototype.L3_imdct36_o7xfxu$ = function (grbuf, overlap, window_0, nbands) {
    var grbuf_0 = {v: grbuf};
    var overlap_0 = {v: overlap};
    var i = {v: 0};
    var j = {v: 0};
    var g_twid9 = {v: this.__STATIC_L3_imdct36_g_twid9_0};
    j.v = 0;
    while (j.v < nbands) {
      var oldPos = this.STACK_PTR;
      try {
        var $receiver = new Array9Float(this.alloca_zero_za3lpa$(36).ptr);
        this.set_ee34ur$($receiver, 0, 0.0);
        var co = {v: $receiver};
        var $receiver_0 = new Array9Float(this.alloca_zero_za3lpa$(36).ptr);
        this.set_ee34ur$($receiver_0, 0, 0.0);
        var si = {v: $receiver_0};
        this.set_ee34ur$(co.v, 0, -this.lwf_za3lpa$(grbuf_0.v.ptr + (0 * 4 | 0) | 0));
        this.set_ee34ur$(si.v, 0, this.lwf_za3lpa$(grbuf_0.v.ptr + (17 * 4 | 0) | 0));
        i.v = 0;
        while (i.v < 4) {
          this.set_ee34ur$(si.v, 8 - (2 * i.v | 0) | 0, this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 1 | 0) * 4 | 0) | 0) - this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 2 | 0) * 4 | 0) | 0));
          this.set_ee34ur$(co.v, 1 + (2 * i.v | 0) | 0, this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 1 | 0) * 4 | 0) | 0) + this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 2 | 0) * 4 | 0) | 0));
          this.set_ee34ur$(si.v, 7 - (2 * i.v | 0) | 0, this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 4 | 0) * 4 | 0) | 0) - this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 3 | 0) * 4 | 0) | 0));
          this.set_ee34ur$(co.v, 2 + (2 * i.v | 0) | 0, -(this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 3 | 0) * 4 | 0) | 0) + this.lwf_za3lpa$(grbuf_0.v.ptr + (((4 * i.v | 0) + 4 | 0) * 4 | 0) | 0)));
          i.v = i.v + 1 | 0;
        }
        this.L3_dct3_9_pew4cg$(new CPointer(co.v.ptr));
        this.L3_dct3_9_pew4cg$(new CPointer(si.v.ptr));
        this.set_ee34ur$(si.v, 1, -this.get_mbsqag$(si.v, 1));
        this.set_ee34ur$(si.v, 3, -this.get_mbsqag$(si.v, 3));
        this.set_ee34ur$(si.v, 5, -this.get_mbsqag$(si.v, 5));
        this.set_ee34ur$(si.v, 7, -this.get_mbsqag$(si.v, 7));
        i.v = 0;
        while (i.v < 9) {
          var ovl = this.lwf_za3lpa$(overlap_0.v.ptr + (i.v * 4 | 0) | 0);
          var sum = this.get_mbsqag$(co.v, i.v) * this.get_8xstsy$(g_twid9.v, 9 + i.v | 0) + this.get_mbsqag$(si.v, i.v) * this.get_8xstsy$(g_twid9.v, 0 + i.v | 0);
          this.swf_24o109$(overlap_0.v.ptr + (i.v * 4 | 0) | 0, this.get_mbsqag$(co.v, i.v) * this.get_8xstsy$(g_twid9.v, 0 + i.v | 0) - this.get_mbsqag$(si.v, i.v) * this.get_8xstsy$(g_twid9.v, 9 + i.v | 0));
          this.swf_24o109$(grbuf_0.v.ptr + (i.v * 4 | 0) | 0, ovl * this.lwf_za3lpa$(window_0.ptr + ((0 + i.v | 0) * 4 | 0) | 0) - sum * this.lwf_za3lpa$(window_0.ptr + ((9 + i.v | 0) * 4 | 0) | 0));
          this.swf_24o109$(grbuf_0.v.ptr + ((17 - i.v | 0) * 4 | 0) | 0, ovl * this.lwf_za3lpa$(window_0.ptr + ((9 + i.v | 0) * 4 | 0) | 0) + sum * this.lwf_za3lpa$(window_0.ptr + ((0 + i.v | 0) * 4 | 0) | 0));
          i.v = i.v + 1 | 0;
        }
      }
      finally {
        this.STACK_PTR = oldPos;
      }
      j.v = j.v + 1 | 0;
      grbuf_0.v = this.plus_s1x8lt$(grbuf_0.v, 18);
      overlap_0.v = this.plus_s1x8lt$(overlap_0.v, 9);
    }
  };
  MiniMp3.prototype.L3_idct3_wgohi5$ = function (x0, x1, x2, dst) {
    var m1 = x1 * 0.8660254;
    var a1 = x0 - x2 * 0.5;
    this.swf_24o109$(dst.ptr + (1 * 4 | 0) | 0, x0 + x2);
    this.swf_24o109$(dst.ptr + (0 * 4 | 0) | 0, a1 + m1);
    this.swf_24o109$(dst.ptr + (2 * 4 | 0) | 0, a1 - m1);
  };
  MiniMp3.prototype.L3_imdct12_eaco74$ = function (x, dst, overlap) {
    var oldPos = this.STACK_PTR;
    try {
      var g_twid3 = {v: this.__STATIC_L3_imdct12_g_twid3_0};
      var $receiver = new Array3Float(this.alloca_zero_za3lpa$(12).ptr);
      this.set_d9nvdl$($receiver, 0, 0.0);
      var co = {v: $receiver};
      var $receiver_0 = new Array3Float(this.alloca_zero_za3lpa$(12).ptr);
      this.set_d9nvdl$($receiver_0, 0, 0.0);
      var si = {v: $receiver_0};
      var i = {v: 0};
      this.L3_idct3_wgohi5$(-this.lwf_za3lpa$(x.ptr + (0 * 4 | 0) | 0), this.lwf_za3lpa$(x.ptr + (6 * 4 | 0) | 0) + this.lwf_za3lpa$(x.ptr + (3 * 4 | 0) | 0), this.lwf_za3lpa$(x.ptr + (12 * 4 | 0) | 0) + this.lwf_za3lpa$(x.ptr + (9 * 4 | 0) | 0), new CPointer(co.v.ptr));
      this.L3_idct3_wgohi5$(this.lwf_za3lpa$(x.ptr + (15 * 4 | 0) | 0), this.lwf_za3lpa$(x.ptr + (12 * 4 | 0) | 0) - this.lwf_za3lpa$(x.ptr + (9 * 4 | 0) | 0), this.lwf_za3lpa$(x.ptr + (6 * 4 | 0) | 0) - this.lwf_za3lpa$(x.ptr + (3 * 4 | 0) | 0), new CPointer(si.v.ptr));
      this.set_d9nvdl$(si.v, 1, -this.get_ejxd0e$(si.v, 1));
      i.v = 0;
      while (i.v < 3) {
        var ovl = this.lwf_za3lpa$(overlap.ptr + (i.v * 4 | 0) | 0);
        var sum = this.get_ejxd0e$(co.v, i.v) * this.get_ifv1nf$(g_twid3.v, 3 + i.v | 0) + this.get_ejxd0e$(si.v, i.v) * this.get_ifv1nf$(g_twid3.v, 0 + i.v | 0);
        this.swf_24o109$(overlap.ptr + (i.v * 4 | 0) | 0, this.get_ejxd0e$(co.v, i.v) * this.get_ifv1nf$(g_twid3.v, 0 + i.v | 0) - this.get_ejxd0e$(si.v, i.v) * this.get_ifv1nf$(g_twid3.v, 3 + i.v | 0));
        this.swf_24o109$(dst.ptr + (i.v * 4 | 0) | 0, ovl * this.get_ifv1nf$(g_twid3.v, 2 - i.v | 0) - sum * this.get_ifv1nf$(g_twid3.v, 5 - i.v | 0));
        this.swf_24o109$(dst.ptr + ((5 - i.v | 0) * 4 | 0) | 0, ovl * this.get_ifv1nf$(g_twid3.v, 5 - i.v | 0) + sum * this.get_ifv1nf$(g_twid3.v, 2 - i.v | 0));
        i.v = i.v + 1 | 0;
      }
    }
    finally {
      this.STACK_PTR = oldPos;
    }
  };
  MiniMp3.prototype.L3_imdct_short_onxf4y$ = function (grbuf, overlap, nbands) {
    var grbuf_0 = {v: grbuf};
    var overlap_0 = {v: overlap};
    var nbands_0 = {v: nbands};
    while (nbands_0.v > 0) {
      var oldPos = this.STACK_PTR;
      try {
        var $receiver = new Array18Float(this.alloca_zero_za3lpa$(72).ptr);
        this.set_qaw5lz$($receiver, 0, 0.0);
        var tmp = $receiver;
        this.memcpy_q1n2f2$(new CPointer(tmp.ptr), new CPointer(grbuf_0.v.ptr), 72);
        this.memcpy_q1n2f2$(new CPointer(grbuf_0.v.ptr), new CPointer(overlap_0.v.ptr), 6 * this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject) | 0);
        this.L3_imdct12_eaco74$(new CPointer(tmp.ptr), this.plus_s1x8lt$(grbuf_0.v, 6), this.plus_s1x8lt$(overlap_0.v, 6));
        this.L3_imdct12_eaco74$(this.plus_8xstsy$(tmp, 1), this.plus_s1x8lt$(grbuf_0.v, 12), this.plus_s1x8lt$(overlap_0.v, 6));
        this.L3_imdct12_eaco74$(this.plus_8xstsy$(tmp, 2), overlap_0.v, this.plus_s1x8lt$(overlap_0.v, 6));
      }
      finally {
        this.STACK_PTR = oldPos;
      }
      nbands_0.v = nbands_0.v - 1 | 0;
      overlap_0.v = this.plus_s1x8lt$(overlap_0.v, 9);
      grbuf_0.v = this.plus_s1x8lt$(grbuf_0.v, 18);
    }
  };
  MiniMp3.prototype.L3_change_sign_pew4cg$ = function (grbuf) {
    var grbuf_0 = {v: grbuf};
    var b = {v: 0};
    var i = 0;
    b.v = 0;
    grbuf_0.v = this.plus_s1x8lt$(grbuf_0.v, 18);
    while (b.v < 32) {
      i = 1;
      while (i < 18) {
        this.swf_24o109$(grbuf_0.v.ptr + (i * 4 | 0) | 0, -this.lwf_za3lpa$(grbuf_0.v.ptr + (i * 4 | 0) | 0));
        i = i + 2 | 0;
      }
      b.v = b.v + 2 | 0;
      grbuf_0.v = this.plus_s1x8lt$(grbuf_0.v, 36);
    }
  };
  MiniMp3.prototype.L3_imdct_gr_sduso2$ = function (grbuf, overlap, block_type, n_long_bands) {
    var grbuf_0 = grbuf;
    var overlap_0 = overlap;
    var g_mdct_window = this.__STATIC_L3_imdct_gr_g_mdct_window_0;
    if (n_long_bands.data !== 0) {
      this.L3_imdct36_o7xfxu$(grbuf_0, overlap_0, new CPointer(this.get_s9dk2x$(g_mdct_window, 0).ptr), n_long_bands.data);
      grbuf_0 = this.plus_s1x8lt$(grbuf_0, 18 * n_long_bands.data | 0);
      overlap_0 = this.plus_s1x8lt$(overlap_0, 9 * n_long_bands.data | 0);
    }
    if (block_type.data === 2) {
      this.L3_imdct_short_onxf4y$(grbuf_0, overlap_0, 32 - n_long_bands.data | 0);
    }
     else {
      this.L3_imdct36_o7xfxu$(grbuf_0, overlap_0, new CPointer(this.get_s9dk2x$(g_mdct_window, this.toInt_1v8dcc$(block_type.data === 3)).ptr), 32 - n_long_bands.data | 0);
    }
  };
  MiniMp3.prototype.L3_save_reservoir_wjj0c1$ = function (h, s) {
    var pos = (this.get_pos_7bwnva$(this.get_bs_oud1nq$(this.get_value_6u2e3v$(s))) + 7 | 0) / 8 | 0;
    var remains = (this.get_limit_7bwnva$(this.get_bs_oud1nq$(this.get_value_6u2e3v$(s))) / 8 | 0) - pos | 0;
    if (remains > 511) {
      pos = pos + (remains - 511) | 0;
      remains = 511;
    }
    if (remains > 0) {
      this.memmove_q1n2f2$(new CPointer(this.get_reserv_buf_9bqr5h$(this.get_value_au5m8q$(h)).ptr), new CPointer(this.plus_yw8ipw$(this.get_maindata_oud1nq$(this.get_value_6u2e3v$(s)), pos).ptr), remains);
    }
    this.set_reserv_25vobt$(this.get_value_au5m8q$(h), remains);
  };
  MiniMp3.prototype.L3_restore_reservoir_qjc7t7$ = function (h, bs, s, main_data_begin) {
    var frame_bytes = (this.get_limit_7bwnva$(this.get_value_iwav89$(bs)) - this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) | 0) / 8 | 0;
    var bytes_have = this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h)) > main_data_begin ? main_data_begin : this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h));
    this.memcpy_q1n2f2$(new CPointer(this.get_maindata_oud1nq$(this.get_value_6u2e3v$(s)).ptr), new CPointer(this.plus_6u07hf$(this.get_reserv_buf_9bqr5h$(this.get_value_au5m8q$(h)), 0 < (this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h)) - main_data_begin | 0) ? this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h)) - main_data_begin | 0 : 0).ptr), this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h)) > main_data_begin ? main_data_begin : this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h)));
    this.memcpy_q1n2f2$(new CPointer(this.plus_yw8ipw$(this.get_maindata_oud1nq$(this.get_value_6u2e3v$(s)), bytes_have).ptr), new CPointer(this.plus_t9mxw2$(this.get_buf_7bwnva$(this.get_value_iwav89$(bs)), this.get_pos_7bwnva$(this.get_value_iwav89$(bs)) / 8 | 0).ptr), frame_bytes);
    this.bs_init_5c7e2v$(new CPointer(s.ptr + 0 | 0), new CPointer(this.get_maindata_oud1nq$(this.get_value_6u2e3v$(s)).ptr), bytes_have + frame_bytes | 0);
    return this.toInt_1v8dcc$(this.get_reserv_9bqr5h$(this.get_value_au5m8q$(h)) >= main_data_begin);
  };
  MiniMp3.prototype.L3_decode_hkvb86$ = function (h, s, gr_info, nch) {
    var gr_info_0 = {v: gr_info};
    var ch = {v: 0};
    ch.v = 0;
    while (ch.v < nch) {
      var layer3gr_limit = this.get_pos_7bwnva$(this.get_bs_oud1nq$(this.get_value_6u2e3v$(s))) + (this.get_part_23_length_4gg731$(this.get_x5mmy4$(gr_info_0.v, ch.v)).data & 65535) | 0;
      this.L3_decode_scalefactors_dxl6ff$(new CPointer(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)).ptr), new CPointer(this.get_edkp4p$(this.get_ist_pos_oud1nq$(this.get_value_6u2e3v$(s)), ch.v).ptr), new CPointer(s.ptr + 0 | 0), this.plus_x5mmy4$(gr_info_0.v, ch.v), new CPointer(this.get_scf_oud1nq$(this.get_value_6u2e3v$(s)).ptr), ch.v);
      this.L3_huffman_fb4cbt$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), ch.v).ptr), new CPointer(s.ptr + 0 | 0), this.plus_x5mmy4$(gr_info_0.v, ch.v), new CPointer(this.get_scf_oud1nq$(this.get_value_6u2e3v$(s)).ptr), layer3gr_limit);
      ch.v = ch.v + 1 | 0;
    }
    var $this = new UInt(this.get_o7m6bi$(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)), 3).data & 255);
    var other = new UInt(16);
    if ((new UInt($this.data & other.data)).data !== 0) {
      this.L3_intensity_stereo_4r3etv$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), 0).ptr), new CPointer(this.get_edkp4p$(this.get_ist_pos_oud1nq$(this.get_value_6u2e3v$(s)), 1).ptr), gr_info_0.v, new CPointer(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)).ptr));
    }
     else {
      var $this_0 = new UInt(this.get_o7m6bi$(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)), 3).data & 255);
      var other_0 = new UInt(224);
      if ((new UInt($this_0.data & other_0.data)).data === 96) {
        this.L3_midside_stereo_ouq5pu$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), 0).ptr), 576);
      }
    }
    ch.v = 0;
    while (ch.v < nch) {
      var aa_bands = 31;
      var tmp$ = (this.get_mixed_block_flag_4gg731$(this.get_value_culdo2$(gr_info_0.v)).data & 255) !== 0 ? 2 : 0;
      var $this_1 = new UInt((new UInt(this.get_o7m6bi$(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)), 2).data & 255)).data >>> 2);
      var other_1 = new UInt(3);
      var tmp$_0 = new UInt($this_1.data & other_1.data);
      var $this_2 = new UInt((new UInt(this.get_o7m6bi$(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)), 1).data & 255)).data >>> 3);
      var other_2 = new UInt(1);
      var tmp$_1 = new UInt($this_2.data & other_2.data);
      var $this_3 = new UInt((new UInt(this.get_o7m6bi$(this.get_header_9bqr5h$(this.get_value_au5m8q$(h)), 1).data & 255)).data >>> 4);
      var other_3 = new UInt(1);
      var other_4 = new UInt($this_3.data & other_3.data);
      var $this_4 = new UInt(tmp$_1.data + other_4.data | 0);
      var other_5 = new UInt(3);
      var other_6 = new UInt(Kotlin.imul($this_4.data, other_5.data));
      var n_long_bands = tmp$ << this.toInt_1v8dcc$((new UInt(tmp$_0.data + other_6.data | 0)).data === 2);
      if ((this.get_n_short_sfb_4gg731$(this.get_value_culdo2$(gr_info_0.v)).data & 255) !== 0) {
        aa_bands = n_long_bands - 1 | 0;
        this.L3_reorder_7tkxlt$(this.plus_j6um7x$(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), ch.v), n_long_bands * 18 | 0), new CPointer(this.get_3gzhfq$(this.get_syn_oud1nq$(this.get_value_6u2e3v$(s)), 0).ptr), this.plus_t9mxw2$(this.get_sfbtab_4gg731$(this.get_value_culdo2$(gr_info_0.v)), this.get_n_long_sfb_4gg731$(this.get_value_culdo2$(gr_info_0.v)).data & 255));
      }
      this.L3_antialias_ouq5pu$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), ch.v).ptr), aa_bands);
      this.L3_imdct_gr_sduso2$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), ch.v).ptr), new CPointer(this.get_ao4xiy$(this.get_mdct_overlap_9bqr5h$(this.get_value_au5m8q$(h)), ch.v).ptr), new UInt(this.get_block_type_4gg731$(this.get_value_culdo2$(gr_info_0.v)).data & 255), new UInt(n_long_bands));
      this.L3_change_sign_pew4cg$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(this.get_value_6u2e3v$(s)), ch.v).ptr));
      ch.v = ch.v + 1 | 0;
      gr_info_0.v = this.plus_x5mmy4$(gr_info_0.v, 1);
    }
  };
  MiniMp3.prototype.mp3d_DCT_II_ouq5pu$ = function (grbuf, n) {
    var g_sec = {v: this.__STATIC_mp3d_DCT_II_g_sec_0};
    var i = {v: 0};
    var k = {v: 0};
    while (k.v < n) {
      var oldPos = this.STACK_PTR;
      try {
        var $receiver = new Array4Array8Float(this.alloca_zero_za3lpa$(128).ptr);
        this.set_y0x75s$($receiver, 0, new Array8Float(0));
        var t = {v: $receiver};
        var x = {v: new CPointer(0)};
        var y = {v: this.plus_s1x8lt$(grbuf, k.v)};
        x.v = new CPointer(this.get_ptrce6$(t.v, 0).ptr);
        i.v = 0;
        while (i.v < 8) {
          var x0 = this.lwf_za3lpa$(y.v.ptr + ((i.v * 18 | 0) * 4 | 0) | 0);
          var x1 = this.lwf_za3lpa$(y.v.ptr + (((15 - i.v | 0) * 18 | 0) * 4 | 0) | 0);
          var x2 = this.lwf_za3lpa$(y.v.ptr + (((16 + i.v | 0) * 18 | 0) * 4 | 0) | 0);
          var x3 = this.lwf_za3lpa$(y.v.ptr + (((31 - i.v | 0) * 18 | 0) * 4 | 0) | 0);
          var t0 = x0 + x3;
          var t1 = x1 + x2;
          var t2 = (x1 - x2) * this.get_q1mbyb$(g_sec.v, (3 * i.v | 0) + 0 | 0);
          var t3 = (x0 - x3) * this.get_q1mbyb$(g_sec.v, (3 * i.v | 0) + 1 | 0);
          this.swf_24o109$(x.v.ptr + (0 * 4 | 0) | 0, t0 + t1);
          this.swf_24o109$(x.v.ptr + (8 * 4 | 0) | 0, (t0 - t1) * this.get_q1mbyb$(g_sec.v, (3 * i.v | 0) + 2 | 0));
          this.swf_24o109$(x.v.ptr + (16 * 4 | 0) | 0, t3 + t2);
          this.swf_24o109$(x.v.ptr + (24 * 4 | 0) | 0, (t3 - t2) * this.get_q1mbyb$(g_sec.v, (3 * i.v | 0) + 2 | 0));
          i.v = i.v + 1 | 0;
          x.v = this.plus_s1x8lt$(x.v, 1);
        }
        x.v = new CPointer(this.get_ptrce6$(t.v, 0).ptr);
        i.v = 0;
        while (i.v < 4) {
          var x0_0 = this.lwf_za3lpa$(x.v.ptr + (0 * 4 | 0) | 0);
          var x1_0 = this.lwf_za3lpa$(x.v.ptr + (1 * 4 | 0) | 0);
          var x2_0 = this.lwf_za3lpa$(x.v.ptr + (2 * 4 | 0) | 0);
          var x3_0 = this.lwf_za3lpa$(x.v.ptr + (3 * 4 | 0) | 0);
          var x4 = this.lwf_za3lpa$(x.v.ptr + (4 * 4 | 0) | 0);
          var x5 = this.lwf_za3lpa$(x.v.ptr + (5 * 4 | 0) | 0);
          var x6 = this.lwf_za3lpa$(x.v.ptr + (6 * 4 | 0) | 0);
          var x7 = this.lwf_za3lpa$(x.v.ptr + (7 * 4 | 0) | 0);
          var xt = 0.0;
          xt = x0_0 - x7;
          x0_0 = x0_0 + x7;
          x7 = x1_0 - x6;
          x1_0 = x1_0 + x6;
          x6 = x2_0 - x5;
          x2_0 = x2_0 + x5;
          x5 = x3_0 - x4;
          x3_0 = x3_0 + x4;
          x4 = x0_0 - x3_0;
          x0_0 = x0_0 + x3_0;
          x3_0 = x1_0 - x2_0;
          x1_0 = x1_0 + x2_0;
          this.swf_24o109$(x.v.ptr + (0 * 4 | 0) | 0, x0_0 + x1_0);
          this.swf_24o109$(x.v.ptr + (4 * 4 | 0) | 0, (x0_0 - x1_0) * 0.70710677);
          x5 = x5 + x6;
          x6 = (x6 + x7) * 0.70710677;
          x7 = x7 + xt;
          x3_0 = (x3_0 + x4) * 0.70710677;
          x5 = x5 - x7 * 0.19891237;
          x7 = x7 + x5 * 0.38268343;
          x5 = x5 - x7 * 0.19891237;
          x0_0 = xt - x6;
          xt = xt + x6;
          this.swf_24o109$(x.v.ptr + (1 * 4 | 0) | 0, (xt + x7) * 0.5097956);
          this.swf_24o109$(x.v.ptr + (2 * 4 | 0) | 0, (x4 + x3_0) * 0.5411961);
          this.swf_24o109$(x.v.ptr + (3 * 4 | 0) | 0, (x0_0 - x5) * 0.6013449);
          this.swf_24o109$(x.v.ptr + (5 * 4 | 0) | 0, (x0_0 + x5) * 0.8999762);
          this.swf_24o109$(x.v.ptr + (6 * 4 | 0) | 0, (x4 - x3_0) * 1.306563);
          this.swf_24o109$(x.v.ptr + (7 * 4 | 0) | 0, (xt - x7) * 2.5629156);
          i.v = i.v + 1 | 0;
          x.v = this.plus_s1x8lt$(x.v, 8);
        }
        i.v = 0;
        while (i.v < 7) {
          this.swf_24o109$(y.v.ptr + (0 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 0), i.v));
          this.swf_24o109$(y.v.ptr + (18 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 2), i.v) + this.get_qbl78n$(this.get_ptrce6$(t.v, 3), i.v) + this.get_qbl78n$(this.get_ptrce6$(t.v, 3), i.v + 1 | 0));
          this.swf_24o109$(y.v.ptr + (36 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 1), i.v) + this.get_qbl78n$(this.get_ptrce6$(t.v, 1), i.v + 1 | 0));
          this.swf_24o109$(y.v.ptr + (54 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 2), i.v + 1 | 0) + this.get_qbl78n$(this.get_ptrce6$(t.v, 3), i.v) + this.get_qbl78n$(this.get_ptrce6$(t.v, 3), i.v + 1 | 0));
          i.v = i.v + 1 | 0;
          y.v = this.plus_s1x8lt$(y.v, 72);
        }
        this.swf_24o109$(y.v.ptr + (0 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 0), 7));
        this.swf_24o109$(y.v.ptr + (18 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 2), 7) + this.get_qbl78n$(this.get_ptrce6$(t.v, 3), 7));
        this.swf_24o109$(y.v.ptr + (36 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 1), 7));
        this.swf_24o109$(y.v.ptr + (54 * 4 | 0) | 0, this.get_qbl78n$(this.get_ptrce6$(t.v, 3), 7));
      }
      finally {
        this.STACK_PTR = oldPos;
      }
      k.v = k.v + 1 | 0;
    }
  };
  MiniMp3.prototype.mp3d_scale_pcm_mx4ult$ = function (sample) {
    if (sample >= 32766.5) {
      return toShort(32767);
    }
    if (sample <= -32767.5) {
      return toShort(L_32768.toInt());
    }
    var s = toShort(numberToInt(sample + 0.5));
    s = toShort(s - this.toInt_1v8dcc$(s < toShort(0)) | 0);
    return s;
  };
  MiniMp3.prototype.mp3d_synth_pair_w3mny6$ = function (pcm, nch, z) {
    var z_0 = z;
    var a = 0.0;
    a = (this.lwf_za3lpa$(z_0.ptr + (896 * 4 | 0) | 0) - this.lwf_za3lpa$(z_0.ptr + (0 * 4 | 0) | 0)) * 29.0;
    a = a + (this.lwf_za3lpa$(z_0.ptr + (64 * 4 | 0) | 0) + this.lwf_za3lpa$(z_0.ptr + (832 * 4 | 0) | 0)) * 213.0;
    a = a + (this.lwf_za3lpa$(z_0.ptr + (768 * 4 | 0) | 0) - this.lwf_za3lpa$(z_0.ptr + (128 * 4 | 0) | 0)) * 459.0;
    a = a + (this.lwf_za3lpa$(z_0.ptr + (192 * 4 | 0) | 0) + this.lwf_za3lpa$(z_0.ptr + (704 * 4 | 0) | 0)) * 2037.0;
    a = a + (this.lwf_za3lpa$(z_0.ptr + (640 * 4 | 0) | 0) - this.lwf_za3lpa$(z_0.ptr + (256 * 4 | 0) | 0)) * 5153.0;
    a = a + (this.lwf_za3lpa$(z_0.ptr + (320 * 4 | 0) | 0) + this.lwf_za3lpa$(z_0.ptr + (576 * 4 | 0) | 0)) * 6574.0;
    a = a + (this.lwf_za3lpa$(z_0.ptr + (512 * 4 | 0) | 0) - this.lwf_za3lpa$(z_0.ptr + (384 * 4 | 0) | 0)) * 37489.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (448 * 4 | 0) | 0) * 75038.0;
    this.set_yo5o8m$(pcm, 0, this.mp3d_scale_pcm_mx4ult$(a));
    z_0 = this.plus_s1x8lt$(z_0, 2);
    a = this.lwf_za3lpa$(z_0.ptr + (896 * 4 | 0) | 0) * 104.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (768 * 4 | 0) | 0) * 1567.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (640 * 4 | 0) | 0) * 9727.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (512 * 4 | 0) | 0) * 64019.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (384 * 4 | 0) | 0) * -9975.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (256 * 4 | 0) | 0) * -45.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (128 * 4 | 0) | 0) * 146.0;
    a = a + this.lwf_za3lpa$(z_0.ptr + (0 * 4 | 0) | 0) * -5.0;
    this.set_yo5o8m$(pcm, 16 * nch | 0, this.mp3d_scale_pcm_mx4ult$(a));
  };
  MiniMp3.prototype.mp3d_synth_gs874m$ = function (xl, dstl, nch, lins) {
    var i = {v: 0};
    var xr = {v: this.plus_s1x8lt$(xl, 576 * (nch - 1 | 0) | 0)};
    var dstr = {v: this.plus_2g34sv$(dstl, nch - 1 | 0)};
    var g_win = this.__STATIC_mp3d_synth_g_win_0;
    var zlin = {v: this.plus_s1x8lt$(lins, 960)};
    var w = {v: new CPointer(g_win.ptr)};
    this.swf_24o109$(zlin.v.ptr + (60 * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + (288 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (61 * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + (288 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (62 * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + (0 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (63 * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + (0 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (124 * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + (289 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (125 * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + (289 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (126 * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + (1 * 4 | 0) | 0));
    this.swf_24o109$(zlin.v.ptr + (127 * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + (1 * 4 | 0) | 0));
    this.mp3d_synth_pair_w3mny6$(dstr.v, nch, this.plus_s1x8lt$(this.plus_s1x8lt$(lins, 60), 1));
    this.mp3d_synth_pair_w3mny6$(this.plus_2g34sv$(dstr.v, 32 * nch | 0), nch, this.plus_s1x8lt$(this.plus_s1x8lt$(this.plus_s1x8lt$(lins, 60), 64), 1));
    this.mp3d_synth_pair_w3mny6$(dstl, nch, this.plus_s1x8lt$(lins, 60));
    this.mp3d_synth_pair_w3mny6$(this.plus_2g34sv$(dstl, 32 * nch | 0), nch, this.plus_s1x8lt$(this.plus_s1x8lt$(lins, 60), 64));
    i.v = 14;
    while (i.v >= 0) {
      var oldPos = this.STACK_PTR;
      try {
        var $receiver = new Array4Float(this.alloca_zero_za3lpa$(16).ptr);
        this.set_dgeeyg$($receiver, 0, 0.0);
        var a = {v: $receiver};
        var $receiver_0 = new Array4Float(this.alloca_zero_za3lpa$(16).ptr);
        this.set_dgeeyg$($receiver_0, 0, 0.0);
        var b = {v: $receiver_0};
        this.swf_24o109$(zlin.v.ptr + ((4 * i.v | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + ((18 * (31 - i.v | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + (((4 * i.v | 0) + 1 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + ((18 * (31 - i.v | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + (((4 * i.v | 0) + 2 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + ((1 + (18 * (31 - i.v | 0) | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + (((4 * i.v | 0) + 3 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + ((1 + (18 * (31 - i.v | 0) | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + ((4 * (i.v + 16 | 0) | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + ((1 + (18 * (1 + i.v | 0) | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + (((4 * (i.v + 16 | 0) | 0) + 1 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + ((1 + (18 * (1 + i.v | 0) | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + (((4 * (i.v - 16 | 0) | 0) + 2 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xl.ptr + ((18 * (1 + i.v | 0) | 0) * 4 | 0) | 0));
        this.swf_24o109$(zlin.v.ptr + (((4 * (i.v - 16 | 0) | 0) + 3 | 0) * 4 | 0) | 0, this.lwf_za3lpa$(xr.v.ptr + ((18 * (1 + i.v | 0) | 0) * 4 | 0) | 0));
        var j = {v: 0};
        var $receiver_1 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0 = {v: this.lwf_za3lpa$($receiver_1.ptr + (0 * 4 | 0) | 0)};
        var $receiver_2 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1 = {v: this.lwf_za3lpa$($receiver_2.ptr + (0 * 4 | 0) | 0)};
        var vz = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 0 | 0)};
        var vy = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 960 | 0)};
        j.v = 0;
        while (j.v < 4) {
          this.set_dgeeyg$(b.v, j.v, this.lwf_za3lpa$(vz.v.ptr + (j.v * 4 | 0) | 0) * w1.v + this.lwf_za3lpa$(vy.v.ptr + (j.v * 4 | 0) | 0) * w0.v);
          this.set_dgeeyg$(a.v, j.v, this.lwf_za3lpa$(vz.v.ptr + (j.v * 4 | 0) | 0) * w0.v - this.lwf_za3lpa$(vy.v.ptr + (j.v * 4 | 0) | 0) * w1.v);
          j.v = j.v + 1 | 0;
        }
        var j_0 = {v: 0};
        var $receiver_3 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_0 = {v: this.lwf_za3lpa$($receiver_3.ptr + (0 * 4 | 0) | 0)};
        var $receiver_4 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_0 = {v: this.lwf_za3lpa$($receiver_4.ptr + (0 * 4 | 0) | 0)};
        var vz_0 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 64 | 0)};
        var vy_0 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 896 | 0)};
        j_0.v = 0;
        while (j_0.v < 4) {
          this.set_dgeeyg$(b.v, j_0.v, this.get_7tsrfn$(b.v, j_0.v) + (this.lwf_za3lpa$(vz_0.v.ptr + (j_0.v * 4 | 0) | 0) * w1_0.v + this.lwf_za3lpa$(vy_0.v.ptr + (j_0.v * 4 | 0) | 0) * w0_0.v));
          this.set_dgeeyg$(a.v, j_0.v, this.get_7tsrfn$(a.v, j_0.v) + (this.lwf_za3lpa$(vy_0.v.ptr + (j_0.v * 4 | 0) | 0) * w1_0.v - this.lwf_za3lpa$(vz_0.v.ptr + (j_0.v * 4 | 0) | 0) * w0_0.v));
          j_0.v = j_0.v + 1 | 0;
        }
        var j_1 = {v: 0};
        var $receiver_5 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_1 = {v: this.lwf_za3lpa$($receiver_5.ptr + (0 * 4 | 0) | 0)};
        var $receiver_6 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_1 = {v: this.lwf_za3lpa$($receiver_6.ptr + (0 * 4 | 0) | 0)};
        var vz_1 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 128 | 0)};
        var vy_1 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 832 | 0)};
        j_1.v = 0;
        while (j_1.v < 4) {
          this.set_dgeeyg$(b.v, j_1.v, this.get_7tsrfn$(b.v, j_1.v) + (this.lwf_za3lpa$(vz_1.v.ptr + (j_1.v * 4 | 0) | 0) * w1_1.v + this.lwf_za3lpa$(vy_1.v.ptr + (j_1.v * 4 | 0) | 0) * w0_1.v));
          this.set_dgeeyg$(a.v, j_1.v, this.get_7tsrfn$(a.v, j_1.v) + (this.lwf_za3lpa$(vz_1.v.ptr + (j_1.v * 4 | 0) | 0) * w0_1.v - this.lwf_za3lpa$(vy_1.v.ptr + (j_1.v * 4 | 0) | 0) * w1_1.v));
          j_1.v = j_1.v + 1 | 0;
        }
        var j_2 = {v: 0};
        var $receiver_7 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_2 = {v: this.lwf_za3lpa$($receiver_7.ptr + (0 * 4 | 0) | 0)};
        var $receiver_8 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_2 = {v: this.lwf_za3lpa$($receiver_8.ptr + (0 * 4 | 0) | 0)};
        var vz_2 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 192 | 0)};
        var vy_2 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 768 | 0)};
        j_2.v = 0;
        while (j_2.v < 4) {
          this.set_dgeeyg$(b.v, j_2.v, this.get_7tsrfn$(b.v, j_2.v) + (this.lwf_za3lpa$(vz_2.v.ptr + (j_2.v * 4 | 0) | 0) * w1_2.v + this.lwf_za3lpa$(vy_2.v.ptr + (j_2.v * 4 | 0) | 0) * w0_2.v));
          this.set_dgeeyg$(a.v, j_2.v, this.get_7tsrfn$(a.v, j_2.v) + (this.lwf_za3lpa$(vy_2.v.ptr + (j_2.v * 4 | 0) | 0) * w1_2.v - this.lwf_za3lpa$(vz_2.v.ptr + (j_2.v * 4 | 0) | 0) * w0_2.v));
          j_2.v = j_2.v + 1 | 0;
        }
        var j_3 = {v: 0};
        var $receiver_9 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_3 = {v: this.lwf_za3lpa$($receiver_9.ptr + (0 * 4 | 0) | 0)};
        var $receiver_10 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_3 = {v: this.lwf_za3lpa$($receiver_10.ptr + (0 * 4 | 0) | 0)};
        var vz_3 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 256 | 0)};
        var vy_3 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 704 | 0)};
        j_3.v = 0;
        while (j_3.v < 4) {
          this.set_dgeeyg$(b.v, j_3.v, this.get_7tsrfn$(b.v, j_3.v) + (this.lwf_za3lpa$(vz_3.v.ptr + (j_3.v * 4 | 0) | 0) * w1_3.v + this.lwf_za3lpa$(vy_3.v.ptr + (j_3.v * 4 | 0) | 0) * w0_3.v));
          this.set_dgeeyg$(a.v, j_3.v, this.get_7tsrfn$(a.v, j_3.v) + (this.lwf_za3lpa$(vz_3.v.ptr + (j_3.v * 4 | 0) | 0) * w0_3.v - this.lwf_za3lpa$(vy_3.v.ptr + (j_3.v * 4 | 0) | 0) * w1_3.v));
          j_3.v = j_3.v + 1 | 0;
        }
        var j_4 = {v: 0};
        var $receiver_11 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_4 = {v: this.lwf_za3lpa$($receiver_11.ptr + (0 * 4 | 0) | 0)};
        var $receiver_12 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_4 = {v: this.lwf_za3lpa$($receiver_12.ptr + (0 * 4 | 0) | 0)};
        var vz_4 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 320 | 0)};
        var vy_4 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 640 | 0)};
        j_4.v = 0;
        while (j_4.v < 4) {
          this.set_dgeeyg$(b.v, j_4.v, this.get_7tsrfn$(b.v, j_4.v) + (this.lwf_za3lpa$(vz_4.v.ptr + (j_4.v * 4 | 0) | 0) * w1_4.v + this.lwf_za3lpa$(vy_4.v.ptr + (j_4.v * 4 | 0) | 0) * w0_4.v));
          this.set_dgeeyg$(a.v, j_4.v, this.get_7tsrfn$(a.v, j_4.v) + (this.lwf_za3lpa$(vy_4.v.ptr + (j_4.v * 4 | 0) | 0) * w1_4.v - this.lwf_za3lpa$(vz_4.v.ptr + (j_4.v * 4 | 0) | 0) * w0_4.v));
          j_4.v = j_4.v + 1 | 0;
        }
        var j_5 = {v: 0};
        var $receiver_13 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_5 = {v: this.lwf_za3lpa$($receiver_13.ptr + (0 * 4 | 0) | 0)};
        var $receiver_14 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_5 = {v: this.lwf_za3lpa$($receiver_14.ptr + (0 * 4 | 0) | 0)};
        var vz_5 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 384 | 0)};
        var vy_5 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 576 | 0)};
        j_5.v = 0;
        while (j_5.v < 4) {
          this.set_dgeeyg$(b.v, j_5.v, this.get_7tsrfn$(b.v, j_5.v) + (this.lwf_za3lpa$(vz_5.v.ptr + (j_5.v * 4 | 0) | 0) * w1_5.v + this.lwf_za3lpa$(vy_5.v.ptr + (j_5.v * 4 | 0) | 0) * w0_5.v));
          this.set_dgeeyg$(a.v, j_5.v, this.get_7tsrfn$(a.v, j_5.v) + (this.lwf_za3lpa$(vz_5.v.ptr + (j_5.v * 4 | 0) | 0) * w0_5.v - this.lwf_za3lpa$(vy_5.v.ptr + (j_5.v * 4 | 0) | 0) * w1_5.v));
          j_5.v = j_5.v + 1 | 0;
        }
        var j_6 = {v: 0};
        var $receiver_15 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w0_6 = {v: this.lwf_za3lpa$($receiver_15.ptr + (0 * 4 | 0) | 0)};
        var $receiver_16 = w.v;
        w.v = this.plus_s1x8lt$(w.v, 1);
        var w1_6 = {v: this.lwf_za3lpa$($receiver_16.ptr + (0 * 4 | 0) | 0)};
        var vz_6 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 448 | 0)};
        var vy_6 = {v: this.plus_s1x8lt$(zlin.v, (4 * i.v | 0) - 512 | 0)};
        j_6.v = 0;
        while (j_6.v < 4) {
          this.set_dgeeyg$(b.v, j_6.v, this.get_7tsrfn$(b.v, j_6.v) + (this.lwf_za3lpa$(vz_6.v.ptr + (j_6.v * 4 | 0) | 0) * w1_6.v + this.lwf_za3lpa$(vy_6.v.ptr + (j_6.v * 4 | 0) | 0) * w0_6.v));
          this.set_dgeeyg$(a.v, j_6.v, this.get_7tsrfn$(a.v, j_6.v) + (this.lwf_za3lpa$(vy_6.v.ptr + (j_6.v * 4 | 0) | 0) * w1_6.v - this.lwf_za3lpa$(vz_6.v.ptr + (j_6.v * 4 | 0) | 0) * w0_6.v));
          j_6.v = j_6.v + 1 | 0;
        }
        this.set_yo5o8m$(dstr.v, Kotlin.imul(15 - i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(a.v, 1)));
        this.set_yo5o8m$(dstr.v, Kotlin.imul(17 + i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(b.v, 1)));
        this.set_yo5o8m$(dstl, Kotlin.imul(15 - i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(a.v, 0)));
        this.set_yo5o8m$(dstl, Kotlin.imul(17 + i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(b.v, 0)));
        this.set_yo5o8m$(dstr.v, Kotlin.imul(47 - i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(a.v, 3)));
        this.set_yo5o8m$(dstr.v, Kotlin.imul(49 + i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(b.v, 3)));
        this.set_yo5o8m$(dstl, Kotlin.imul(47 - i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(a.v, 2)));
        this.set_yo5o8m$(dstl, Kotlin.imul(49 + i.v | 0, nch), this.mp3d_scale_pcm_mx4ult$(this.get_7tsrfn$(b.v, 2)));
      }
      finally {
        this.STACK_PTR = oldPos;
      }
      i.v = i.v - 1 | 0;
    }
  };
  MiniMp3.prototype.mp3d_synth_granule_tpetcc$ = function (qmf_state, grbuf, nbands, nch, pcm, lins) {
    var i = 0;
    i = 0;
    while (i < nch) {
      this.mp3d_DCT_II_ouq5pu$(this.plus_s1x8lt$(grbuf, 576 * i | 0), nbands);
      i = i + 1 | 0;
    }
    this.memcpy_q1n2f2$(new CPointer(lins.ptr), new CPointer(qmf_state.ptr), (this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject) * 15 | 0) * 64 | 0);
    i = 0;
    while (i < nbands) {
      this.mp3d_synth_gs874m$(this.plus_s1x8lt$(grbuf, i), this.plus_2g34sv$(pcm, 32 * Kotlin.imul(nch, i) | 0), nch, this.plus_s1x8lt$(lins, i * 64 | 0));
      i = i + 2 | 0;
    }
    if (nch === 1) {
      i = 0;
      while (i < 960) {
        this.swf_24o109$(qmf_state.ptr + (i * 4 | 0) | 0, this.lwf_za3lpa$(lins.ptr + (((nbands * 64 | 0) + i | 0) * 4 | 0) | 0));
        i = i + 2 | 0;
      }
    }
     else {
      this.memcpy_q1n2f2$(new CPointer(qmf_state.ptr), new CPointer(this.plus_s1x8lt$(lins, nbands * 64 | 0).ptr), (this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject) * 15 | 0) * 64 | 0);
    }
  };
  MiniMp3.prototype.mp3d_match_frame_ep1qqp$ = function (hdr, mp3_bytes, frame_bytes) {
    var i = {v: 0};
    var nmatch = {v: 0};
    i.v = 0;
    nmatch.v = 0;
    while (nmatch.v < 10) {
      i.v = i.v + (this.hdr_frame_bytes_nn0gfl$(this.plus_t9mxw2$(hdr, i.v), frame_bytes) + this.hdr_padding_iy4dr5$(this.plus_t9mxw2$(hdr, i.v))) | 0;
      if ((i.v + 4 | 0) > mp3_bytes) {
        return this.toInt_1v8dcc$(nmatch.v > 0);
      }
      if (!(numberToInt(this.hdr_compare_8aj1o4$(hdr, this.plus_t9mxw2$(hdr, i.v))) !== 0)) {
        return 0;
      }
      nmatch.v = nmatch.v + 1 | 0;
    }
    return 1;
  };
  MiniMp3.prototype.mp3d_find_frame_walsh$ = function (mp3, mp3_bytes, free_format_bytes, ptr_frame_bytes) {
    var mp3_0 = {v: mp3};
    var i = {v: 0};
    var k = 0;
    i.v = 0;
    while0: while (i.v < (mp3_bytes - 4 | 0)) {
      if (numberToInt(this.hdr_valid_iy4dr5$(mp3_0.v)) !== 0) {
        var __oldPos2 = this.STACK_PTR;
        try {
          var frame_bytes = this.hdr_frame_bytes_nn0gfl$(mp3_0.v, this.get_value_1intz6$(free_format_bytes));
          var frame_and_padding = frame_bytes + this.hdr_padding_iy4dr5$(mp3_0.v) | 0;
          k = 4;
          while1: while (true) {
            var tmp$ = !(numberToInt(frame_bytes) !== 0) && k < 2304;
            if (tmp$) {
              tmp$ = numberToInt(i.v + (2 * this.toInt_1v8dcc$(k < (mp3_bytes - 4 | 0)) | 0) | 0) !== 0;
            }
            if (!tmp$)
              break;
            if (numberToInt(this.hdr_compare_8aj1o4$(mp3_0.v, this.plus_t9mxw2$(mp3_0.v, k))) !== 0) {
              var __oldPos1 = this.STACK_PTR;
              try {
                var fb = k - this.hdr_padding_iy4dr5$(mp3_0.v) | 0;
                var nextfb = fb + this.hdr_padding_iy4dr5$(this.plus_t9mxw2$(mp3_0.v, k)) | 0;
                var tmp$_0 = (i.v + k + nextfb + 4 | 0) > mp3_bytes;
                if (!tmp$_0) {
                  tmp$_0 = !(numberToInt(this.hdr_compare_8aj1o4$(mp3_0.v, this.plus_t9mxw2$(this.plus_t9mxw2$(mp3_0.v, k), nextfb))) !== 0);
                }
                if (tmp$_0) {
                  k = k + 1 | 0;
                  continue while1;
                }
                frame_and_padding = k;
                frame_bytes = fb;
                this.set_value_sa8cpw$(free_format_bytes, fb);
              }
              finally {
                this.STACK_PTR = __oldPos1;
              }
            }
            k = k + 1 | 0;
          }
          var tmp$_1 = numberToInt(frame_bytes) !== 0;
          if (tmp$_1) {
            tmp$_1 = numberToInt(i.v + this.toInt_1v8dcc$(frame_and_padding <= mp3_bytes) | 0) !== 0;
          }
          var tmp$_2 = tmp$_1;
          if (tmp$_2) {
            tmp$_2 = numberToInt(this.mp3d_match_frame_ep1qqp$(mp3_0.v, mp3_bytes - i.v | 0, frame_bytes)) !== 0;
          }
          var tmp$_3 = tmp$_2;
          if (!tmp$_3) {
            tmp$_3 = (!(numberToInt(i.v) !== 0) && frame_and_padding === mp3_bytes);
          }
          if (tmp$_3) {
            this.set_value_sa8cpw$(ptr_frame_bytes, frame_and_padding);
            return i.v;
          }
          this.set_value_sa8cpw$(free_format_bytes, 0);
        }
        finally {
          this.STACK_PTR = __oldPos2;
        }
      }
      i.v = i.v + 1 | 0;
      mp3_0.v = this.plus_t9mxw2$(mp3_0.v, 1);
    }
    this.set_value_sa8cpw$(ptr_frame_bytes, 0);
    return i.v;
  };
  MiniMp3.prototype.mp3dec_init_ourytn$ = function (dec) {
    this.set_iu8g92$(this.get_header_9bqr5h$(this.get_value_au5m8q$(dec)), 0, new UByte(toByte(0)));
  };
  MiniMp3.prototype.mp3dec_decode_frame_bm7o4a$ = function (dec, mp3, mp3_bytes, pcm, info) {
    var oldPos = this.STACK_PTR;
    try {
      var pcm_0 = {v: pcm};
      var i = {v: 0};
      var igr = {v: 0};
      var $receiver = new CPointer(this.alloca_za3lpa$(4).ptr);
      this.set_value_sa8cpw$($receiver, 0);
      var frame_size = $receiver;
      var success = {v: 1};
      var hdr = {v: new CPointer(0)};
      var $receiver_0 = new Array1bs_t(this.alloca_zero_za3lpa$(12).ptr);
      this.set_svoke3$($receiver_0, 0, new bs_t(0));
      var bs_frame = {v: $receiver_0};
      var scratch = {v: this.copyFrom_8jc9wx$(this.mp3dec_scratch_tAlloc(), this.mp3dec_scratch_tAlloc())};
      var tmp$ = mp3_bytes > 4;
      if (tmp$) {
        tmp$ = (this.get_o7m6bi$(this.get_header_9bqr5h$(this.get_value_au5m8q$(dec)), 0).data & 255) === 255;
      }
      var tmp$_0 = tmp$;
      if (tmp$_0) {
        tmp$_0 = numberToInt(this.hdr_compare_8aj1o4$(new CPointer(this.get_header_9bqr5h$(this.get_value_au5m8q$(dec)).ptr), mp3)) !== 0;
      }
      if (tmp$_0) {
        this.set_value_sa8cpw$(frame_size, this.hdr_frame_bytes_nn0gfl$(mp3, this.get_free_format_bytes_9bqr5h$(this.get_value_au5m8q$(dec))) + this.hdr_padding_iy4dr5$(mp3) | 0);
        var tmp$_1 = this.get_value_1intz6$(frame_size) !== mp3_bytes;
        if (tmp$_1) {
          var tmp$_2 = (this.get_value_1intz6$(frame_size) + 4 | 0) > mp3_bytes;
          if (!tmp$_2) {
            tmp$_2 = !(numberToInt(this.hdr_compare_8aj1o4$(mp3, this.plus_t9mxw2$(mp3, this.get_value_1intz6$(frame_size)))) !== 0);
          }
          tmp$_1 = tmp$_2;
        }
        if (tmp$_1) {
          this.set_value_sa8cpw$(frame_size, 0);
        }
      }
      if (!(numberToInt(this.get_value_1intz6$(frame_size)) !== 0)) {
        this.memset_j2ark3$(new CPointer(dec.ptr), 0, 6667);
        i.v = this.mp3d_find_frame_walsh$(mp3, mp3_bytes, new CPointer(dec.ptr + 6148 | 0), new CPointer(frame_size.ptr));
        var tmp$_3 = !(numberToInt(this.get_value_1intz6$(frame_size)) !== 0);
        if (!tmp$_3) {
          tmp$_3 = numberToInt(i.v + this.toInt_1v8dcc$(this.get_value_1intz6$(frame_size) > mp3_bytes) | 0) !== 0;
        }
        if (tmp$_3) {
          this.set_frame_bytes_o3o2rm$(this.get_value_27luj5$(info), i.v);
          return 0;
        }
      }
      hdr.v = this.plus_t9mxw2$(mp3, i.v);
      this.memcpy_q1n2f2$(new CPointer(this.get_header_9bqr5h$(this.get_value_au5m8q$(dec)).ptr), new CPointer(hdr.v.ptr), 4);
      this.set_frame_bytes_o3o2rm$(this.get_value_27luj5$(info), i.v + this.get_value_1intz6$(frame_size) | 0);
      var tmp$_4 = this.get_value_27luj5$(info);
      var $this = new UInt(this.get_t9mxw2$(hdr.v, 3).data & 255);
      var other = new UInt(192);
      this.set_channels_o3o2rm$(tmp$_4, (new UInt($this.data & other.data)).data === 192 ? 1 : 2);
      this.set_hz_o3o2rm$(this.get_value_27luj5$(info), this.hdr_sample_rate_hz_iy4dr5$(hdr.v).data);
      var tmp$_5 = this.get_value_27luj5$(info);
      var $this_0 = new UInt((new UInt(this.get_t9mxw2$(hdr.v, 1).data & 255)).data >>> 1);
      var other_0 = new UInt(3);
      this.set_layer_o3o2rm$(tmp$_5, 4 - (new UInt($this_0.data & other_0.data)).data | 0);
      this.set_bitrate_kbps_o3o2rm$(this.get_value_27luj5$(info), this.hdr_bitrate_kbps_iy4dr5$(hdr.v).data);
      if (!this.toBool_1xe3xw$(pcm_0.v)) {
        return this.hdr_frame_samples_iy4dr5$(hdr.v).data;
      }
      this.bs_init_5c7e2v$(new CPointer(bs_frame.v.ptr), this.plus_t9mxw2$(hdr.v, 4), this.get_value_1intz6$(frame_size) - 4 | 0);
      var $this_1 = new UInt(this.get_t9mxw2$(hdr.v, 1).data & 255);
      var other_1 = new UInt(1);
      if (!((new UInt($this_1.data & other_1.data)).data !== 0)) {
        this.get_bits_e5qbnc$(new CPointer(bs_frame.v.ptr), 16);
      }
      if (this.get_layer_ox8jhc$(this.get_value_27luj5$(info)) === 3) {
        var main_data_begin = this.L3_read_side_info_nyq3i0$(new CPointer(bs_frame.v.ptr), new CPointer(this.get_gr_info_oud1nq$(scratch.v).ptr), hdr.v);
        if (main_data_begin < 0 || this.get_pos_7bwnva$(this.get_value_uw8ema$(bs_frame.v)) > this.get_limit_7bwnva$(this.get_value_uw8ema$(bs_frame.v))) {
          this.mp3dec_init_ourytn$(dec);
          return 0;
        }
        success.v = this.L3_restore_reservoir_qjc7t7$(dec, new CPointer(bs_frame.v.ptr), new CPointer(scratch.v.ptr), main_data_begin);
        if (numberToInt(success.v) !== 0) {
          igr.v = 0;
          while (true) {
            var tmp$_6 = igr.v;
            var $this_2 = new UInt(this.get_t9mxw2$(hdr.v, 1).data & 255);
            var other_2 = new UInt(8);
            if (!(tmp$_6 < ((new UInt($this_2.data & other_2.data)).data !== 0 ? 2 : 1)))
              break;
            this.memset_j2ark3$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0).ptr), 0, 1152 * this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject) | 0);
            this.L3_decode_hkvb86$(dec, new CPointer(scratch.v.ptr), this.plus_pb6a4k$(this.get_gr_info_oud1nq$(scratch.v), Kotlin.imul(igr.v, this.get_channels_ox8jhc$(this.get_value_27luj5$(info)))), this.get_channels_ox8jhc$(this.get_value_27luj5$(info)));
            this.mp3d_synth_granule_tpetcc$(new CPointer(this.get_qmf_state_9bqr5h$(this.get_value_au5m8q$(dec)).ptr), new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0).ptr), 18, this.get_channels_ox8jhc$(this.get_value_27luj5$(info)), pcm_0.v, new CPointer(this.get_3gzhfq$(this.get_syn_oud1nq$(scratch.v), 0).ptr));
            igr.v = igr.v + 1 | 0;
            pcm_0.v = this.plus_2g34sv$(pcm_0.v, 576 * this.get_channels_ox8jhc$(this.get_value_27luj5$(info)) | 0);
          }
        }
        this.L3_save_reservoir_wjj0c1$(dec, new CPointer(scratch.v.ptr));
      }
       else {
        var oldPos_0 = this.STACK_PTR;
        try {
          var $receiver_1 = new Array1L12_scale_info(this.alloca_zero_za3lpa$(898).ptr);
          this.set_inl4wz$($receiver_1, 0, new L12_scale_info(0));
          var sci = {v: $receiver_1};
          this.L12_read_scale_info_i3032o$(hdr.v, new CPointer(bs_frame.v.ptr), new CPointer(sci.v.ptr));
          this.memset_j2ark3$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0).ptr), 0, 1152 * this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject) | 0);
          i.v = 0;
          igr.v = 0;
          while (igr.v < 3) {
            var $receiver_2 = i.v + this.L12_dequantize_granule_m6ksv7$(this.plus_j6um7x$(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0), i.v), new CPointer(bs_frame.v.ptr), new CPointer(sci.v.ptr), this.get_layer_ox8jhc$(this.get_value_27luj5$(info)) | 1) | 0;
            i.v = $receiver_2;
            if (12 === $receiver_2) {
              i.v = 0;
              this.L12_apply_scf_384_m3jyav$(new CPointer(sci.v.ptr), this.plus_essn9j$(this.get_scf_s4bfr$(this.get_value_i7ggf$(sci.v)), igr.v), new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0).ptr));
              this.mp3d_synth_granule_tpetcc$(new CPointer(this.get_qmf_state_9bqr5h$(this.get_value_au5m8q$(dec)).ptr), new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0).ptr), 12, this.get_channels_ox8jhc$(this.get_value_27luj5$(info)), pcm_0.v, new CPointer(this.get_3gzhfq$(this.get_syn_oud1nq$(scratch.v), 0).ptr));
              this.memset_j2ark3$(new CPointer(this.get_bj3kkc$(this.get_grbuf_oud1nq$(scratch.v), 0).ptr), 0, 1152 * this.get_SIZE_BYTES_y9phqa$(kotlin_js_internal_FloatCompanionObject) | 0);
              pcm_0.v = this.plus_2g34sv$(pcm_0.v, 384 * this.get_channels_ox8jhc$(this.get_value_27luj5$(info)) | 0);
            }
            if (this.get_pos_7bwnva$(this.get_value_uw8ema$(bs_frame.v)) > this.get_limit_7bwnva$(this.get_value_uw8ema$(bs_frame.v))) {
              this.mp3dec_init_ourytn$(dec);
              return 0;
            }
            igr.v = igr.v + 1 | 0;
          }
        }
        finally {
          this.STACK_PTR = oldPos_0;
        }
      }
      return Kotlin.imul(success.v, this.hdr_frame_samples_iy4dr5$(new CPointer(this.get_header_9bqr5h$(this.get_value_au5m8q$(dec)).ptr)).data);
    }
    finally {
      this.STACK_PTR = oldPos;
    }
  };
  MiniMp3.prototype.strlen_1f0bmg$ = function (str) {
    var str_0 = {v: str};
    var out = 0;
    while (true) {
      var $receiver = str_0.v;
      str_0.v = this.plus_4anldl$(str_0.v, 1);
      if (!(this.get_value_r3u1m1$($receiver) !== 0))
        break;
      out = out + 1 | 0;
    }
    return out;
  };
  MiniMp3.prototype.memcmp_q1n2f2$ = function (ptr1, ptr2, num) {
    var a = {v: new CPointer(ptr1.ptr)};
    var b = {v: new CPointer(ptr2.ptr)};
    var n = {v: 0};
    while (n.v < num) {
      var res = this.get_4anldl$(a.v, n.v) - this.get_4anldl$(b.v, n.v) | 0;
      if (res < 0) {
        return -1;
      }
      if (res > 0) {
        return 1;
      }
      n.v = n.v + 1 | 0;
    }
    return 0;
  };
  MiniMp3.prototype.mp3dec_frame_info_tAlloc = function () {
    return new mp3dec_frame_info_t(this.alloca_za3lpa$(20).ptr);
  };
  MiniMp3.prototype.mp3dec_frame_info_tAlloc_4qozqa$ = function (frame_bytes, channels, hz, layer, bitrate_kbps) {
    var $receiver = this.mp3dec_frame_info_tAlloc();
    this.set_frame_bytes_o3o2rm$($receiver, frame_bytes);
    this.set_channels_o3o2rm$($receiver, channels);
    this.set_hz_o3o2rm$($receiver, hz);
    this.set_layer_o3o2rm$($receiver, layer);
    this.set_bitrate_kbps_o3o2rm$($receiver, bitrate_kbps);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_46ywgf$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 20);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfmp3dec_frame_info_t_xevqsd$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfmp3dec_frame_info_t_xevqsd$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 20 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_7lwlbn$ = function ($receiver, index) {
    return new mp3dec_frame_info_t($receiver.ptr + (index * 20 | 0) | 0);
  };
  MiniMp3.prototype.set_v0zoei$ = function ($receiver, index, value) {
    return this.copyFrom_46ywgf$(new mp3dec_frame_info_t($receiver.ptr + (index * 20 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_7lwlbn$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 20 | 0) | 0);
  };
  MiniMp3.prototype.minus_7lwlbn$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 20 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrmp3dec_frame_info_t_3mqlg3$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 20 | 0;
  };
  MiniMp3.prototype.get_value_27luj5$ = function ($receiver) {
    return this.get_7lwlbn$($receiver, 0);
  };
  MiniMp3.prototype.set_value_qhd6rm$ = function ($receiver, value) {
    this.set_v0zoei$($receiver, 0, value);
  };
  MiniMp3.prototype.get_frame_bytes_ox8jhc$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 0 | 0);
  };
  MiniMp3.prototype.set_frame_bytes_o3o2rm$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 0 | 0, value);
  };
  MiniMp3.prototype.get_channels_ox8jhc$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 4 | 0);
  };
  MiniMp3.prototype.set_channels_o3o2rm$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 4 | 0, value);
  };
  MiniMp3.prototype.get_hz_ox8jhc$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 8 | 0);
  };
  MiniMp3.prototype.set_hz_o3o2rm$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 8 | 0, value);
  };
  MiniMp3.prototype.get_layer_ox8jhc$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 12 | 0);
  };
  MiniMp3.prototype.set_layer_o3o2rm$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 12 | 0, value);
  };
  MiniMp3.prototype.get_bitrate_kbps_ox8jhc$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 16 | 0);
  };
  MiniMp3.prototype.set_bitrate_kbps_o3o2rm$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 16 | 0, value);
  };
  MiniMp3.prototype.mp3dec_tAlloc = function () {
    return new mp3dec_t(this.alloca_za3lpa$(6667).ptr);
  };
  MiniMp3.prototype.mp3dec_tAlloc_kxprfj$ = function (mdct_overlap, qmf_state, reserv, free_format_bytes, header, reserv_buf) {
    var $receiver = this.mp3dec_tAlloc();
    this.set_mdct_overlap_tlesde$($receiver, mdct_overlap);
    this.set_qmf_state_m9gds6$($receiver, qmf_state);
    this.set_reserv_25vobt$($receiver, reserv);
    this.set_free_format_bytes_25vobt$($receiver, free_format_bytes);
    this.set_header_gsjeca$($receiver, header);
    this.set_reserv_buf_2tyehl$($receiver, reserv_buf);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_s0z5yn$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 6667);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfmp3dec_t_xrq8uw$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfmp3dec_t_xrq8uw$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 6667 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_dalnpg$ = function ($receiver, index) {
    return new mp3dec_t($receiver.ptr + (index * 6667 | 0) | 0);
  };
  MiniMp3.prototype.set_smldgq$ = function ($receiver, index, value) {
    return this.copyFrom_s0z5yn$(new mp3dec_t($receiver.ptr + (index * 6667 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_dalnpg$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 6667 | 0) | 0);
  };
  MiniMp3.prototype.minus_dalnpg$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 6667 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrmp3dec_t_yswrzl$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 6667 | 0;
  };
  MiniMp3.prototype.get_value_au5m8q$ = function ($receiver) {
    return this.get_dalnpg$($receiver, 0);
  };
  MiniMp3.prototype.set_value_apj2ok$ = function ($receiver, value) {
    this.set_smldgq$($receiver, 0, value);
  };
  MiniMp3.prototype.get_mdct_overlap_9bqr5h$ = function ($receiver) {
    return new Array2Array288Float($receiver.ptr + 0 | 0);
  };
  MiniMp3.prototype.set_mdct_overlap_tlesde$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=Float[288][2]');
  };
  MiniMp3.prototype.get_qmf_state_9bqr5h$ = function ($receiver) {
    return new Array960Float($receiver.ptr + 2304 | 0);
  };
  MiniMp3.prototype.set_qmf_state_m9gds6$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=Float[960]');
  };
  MiniMp3.prototype.get_reserv_9bqr5h$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 6144 | 0);
  };
  MiniMp3.prototype.set_reserv_25vobt$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 6144 | 0, value);
  };
  MiniMp3.prototype.get_free_format_bytes_9bqr5h$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 6148 | 0);
  };
  MiniMp3.prototype.set_free_format_bytes_25vobt$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 6148 | 0, value);
  };
  MiniMp3.prototype.get_header_9bqr5h$ = function ($receiver) {
    return new Array4UByte($receiver.ptr + 6152 | 0);
  };
  MiniMp3.prototype.set_header_gsjeca$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[4]');
  };
  MiniMp3.prototype.get_reserv_buf_9bqr5h$ = function ($receiver) {
    return new Array511UByte($receiver.ptr + 6156 | 0);
  };
  MiniMp3.prototype.set_reserv_buf_2tyehl$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[511]');
  };
  MiniMp3.prototype.bs_tAlloc = function () {
    return new bs_t(this.alloca_za3lpa$(12).ptr);
  };
  MiniMp3.prototype.bs_tAlloc_ep1qqp$ = function (buf, pos, limit) {
    var $receiver = this.bs_tAlloc();
    this.set_buf_1358p7$($receiver, buf);
    this.set_pos_xnn3qw$($receiver, pos);
    this.set_limit_xnn3qw$($receiver, limit);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_bjxufj$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 12);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfbs_t_uufvhz$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfbs_t_uufvhz$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 12 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_3yqc05$ = function ($receiver, index) {
    return new bs_t($receiver.ptr + (index * 12 | 0) | 0);
  };
  MiniMp3.prototype.set_kusbli$ = function ($receiver, index, value) {
    return this.copyFrom_bjxufj$(new bs_t($receiver.ptr + (index * 12 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_3yqc05$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 12 | 0) | 0);
  };
  MiniMp3.prototype.minus_3yqc05$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 12 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrbs_t_z7y2fl$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 12 | 0;
  };
  MiniMp3.prototype.get_value_iwav89$ = function ($receiver) {
    return this.get_3yqc05$($receiver, 0);
  };
  MiniMp3.prototype.set_value_92tic2$ = function ($receiver, value) {
    this.set_kusbli$($receiver, 0, value);
  };
  MiniMp3.prototype.get_buf_7bwnva$ = function ($receiver) {
    return new CPointer(this.lw_za3lpa$($receiver.ptr + 0 | 0));
  };
  MiniMp3.prototype.set_buf_1358p7$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 0 | 0, value.ptr);
  };
  MiniMp3.prototype.get_pos_7bwnva$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 4 | 0);
  };
  MiniMp3.prototype.set_pos_xnn3qw$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 4 | 0, value);
  };
  MiniMp3.prototype.get_limit_7bwnva$ = function ($receiver) {
    return this.lw_za3lpa$($receiver.ptr + 8 | 0);
  };
  MiniMp3.prototype.set_limit_xnn3qw$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 8 | 0, value);
  };
  MiniMp3.prototype.L12_scale_infoAlloc = function () {
    return new L12_scale_info(this.alloca_za3lpa$(898).ptr);
  };
  MiniMp3.prototype.L12_scale_infoAlloc_pa4zp4$ = function (scf, total_bands, stereo_bands, bitalloc, scfcod) {
    var $receiver = this.L12_scale_infoAlloc();
    this.set_scf_2qsbcf$($receiver, scf);
    this.set_total_bands_hnd3xz$($receiver, total_bands);
    this.set_stereo_bands_hnd3xz$($receiver, stereo_bands);
    this.set_bitalloc_45c1s0$($receiver, bitalloc);
    this.set_scfcod_45c1s0$($receiver, scfcod);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_yi5v9t$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 898);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfL12_scale_info_v18c2i$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfL12_scale_info_v18c2i$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 898 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_yg272i$ = function ($receiver, index) {
    return new L12_scale_info($receiver.ptr + (index * 898 | 0) | 0);
  };
  MiniMp3.prototype.set_kcutxy$ = function ($receiver, index, value) {
    return this.copyFrom_yi5v9t$(new L12_scale_info($receiver.ptr + (index * 898 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_yg272i$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 898 | 0) | 0);
  };
  MiniMp3.prototype.minus_yg272i$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 898 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrL12_scale_info_b7wfsh$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 898 | 0;
  };
  MiniMp3.prototype.get_value_6h83yw$ = function ($receiver) {
    return this.get_yg272i$($receiver, 0);
  };
  MiniMp3.prototype.set_value_akkm5s$ = function ($receiver, value) {
    this.set_kcutxy$($receiver, 0, value);
  };
  MiniMp3.prototype.get_scf_s4bfr$ = function ($receiver) {
    return new Array192Float($receiver.ptr + 0 | 0);
  };
  MiniMp3.prototype.set_scf_2qsbcf$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=Float[192]');
  };
  MiniMp3.prototype.get_total_bands_s4bfr$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 768 | 0));
  };
  MiniMp3.prototype.set_total_bands_hnd3xz$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 768 | 0, value.data);
  };
  MiniMp3.prototype.get_stereo_bands_s4bfr$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 769 | 0));
  };
  MiniMp3.prototype.set_stereo_bands_hnd3xz$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 769 | 0, value.data);
  };
  MiniMp3.prototype.get_bitalloc_s4bfr$ = function ($receiver) {
    return new Array64UByte($receiver.ptr + 770 | 0);
  };
  MiniMp3.prototype.set_bitalloc_45c1s0$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[64]');
  };
  MiniMp3.prototype.get_scfcod_s4bfr$ = function ($receiver) {
    return new Array64UByte($receiver.ptr + 834 | 0);
  };
  MiniMp3.prototype.set_scfcod_45c1s0$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[64]');
  };
  MiniMp3.prototype.L12_subband_alloc_tAlloc = function () {
    return new L12_subband_alloc_t(this.alloca_za3lpa$(3).ptr);
  };
  MiniMp3.prototype.L12_subband_alloc_tAlloc_l1b9e8$ = function (tab_offset, code_tab_width, band_count) {
    var $receiver = this.L12_subband_alloc_tAlloc();
    this.set_tab_offset_mecpi4$($receiver, tab_offset);
    this.set_code_tab_width_mecpi4$($receiver, code_tab_width);
    this.set_band_count_mecpi4$($receiver, band_count);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_za4anb$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 3);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfL12_subband_alloc_t_e94bb$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfL12_subband_alloc_t_e94bb$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 3 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_kftou7$ = function ($receiver, index) {
    return new L12_subband_alloc_t($receiver.ptr + (index * 3 | 0) | 0);
  };
  MiniMp3.prototype.set_qk5h3i$ = function ($receiver, index, value) {
    return this.copyFrom_za4anb$(new L12_subband_alloc_t($receiver.ptr + (index * 3 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_kftou7$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 3 | 0) | 0);
  };
  MiniMp3.prototype.minus_kftou7$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 3 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrL12_subband_alloc_t_t8y8ff$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 3 | 0;
  };
  MiniMp3.prototype.get_value_bzfuu5$ = function ($receiver) {
    return this.get_kftou7$($receiver, 0);
  };
  MiniMp3.prototype.set_value_dw4vlq$ = function ($receiver, value) {
    this.set_qk5h3i$($receiver, 0, value);
  };
  MiniMp3.prototype.get_tab_offset_yc36jw$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 0 | 0));
  };
  MiniMp3.prototype.set_tab_offset_mecpi4$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 0 | 0, value.data);
  };
  MiniMp3.prototype.get_code_tab_width_yc36jw$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 1 | 0));
  };
  MiniMp3.prototype.set_code_tab_width_mecpi4$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 1 | 0, value.data);
  };
  MiniMp3.prototype.get_band_count_yc36jw$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 2 | 0));
  };
  MiniMp3.prototype.set_band_count_mecpi4$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 2 | 0, value.data);
  };
  MiniMp3.prototype.L3_gr_info_tAlloc = function () {
    return new L3_gr_info_t(this.alloca_za3lpa$(28).ptr);
  };
  MiniMp3.prototype.L3_gr_info_tAlloc_vv9c33$ = function (sfbtab, part_23_length, big_values, scalefac_compress, global_gain, block_type, mixed_block_flag, n_long_sfb, n_short_sfb, table_select, region_count, subblock_gain, preflag, scalefac_scale, count1_table, scfsi) {
    var $receiver = this.L3_gr_info_tAlloc();
    this.set_sfbtab_b7kikc$($receiver, sfbtab);
    this.set_part_23_length_sq1jav$($receiver, part_23_length);
    this.set_big_values_sq1jav$($receiver, big_values);
    this.set_scalefac_compress_sq1jav$($receiver, scalefac_compress);
    this.set_global_gain_x2bl9$($receiver, global_gain);
    this.set_block_type_x2bl9$($receiver, block_type);
    this.set_mixed_block_flag_x2bl9$($receiver, mixed_block_flag);
    this.set_n_long_sfb_x2bl9$($receiver, n_long_sfb);
    this.set_n_short_sfb_x2bl9$($receiver, n_short_sfb);
    this.set_table_select_nsgn2r$($receiver, table_select);
    this.set_region_count_nsgn2r$($receiver, region_count);
    this.set_subblock_gain_nsgn2r$($receiver, subblock_gain);
    this.set_preflag_x2bl9$($receiver, preflag);
    this.set_scalefac_scale_x2bl9$($receiver, scalefac_scale);
    this.set_count1_table_x2bl9$($receiver, count1_table);
    this.set_scfsi_x2bl9$($receiver, scfsi);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_dgsbrl$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 28);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfL3_gr_info_t_wp5l68$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfL3_gr_info_t_wp5l68$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 28 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_x5mmy4$ = function ($receiver, index) {
    return new L3_gr_info_t($receiver.ptr + (index * 28 | 0) | 0);
  };
  MiniMp3.prototype.set_qiltre$ = function ($receiver, index, value) {
    return this.copyFrom_dgsbrl$(new L3_gr_info_t($receiver.ptr + (index * 28 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_x5mmy4$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 28 | 0) | 0);
  };
  MiniMp3.prototype.minus_x5mmy4$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 28 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrL3_gr_info_t_wl3bu9$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 28 | 0;
  };
  MiniMp3.prototype.get_value_culdo2$ = function ($receiver) {
    return this.get_x5mmy4$($receiver, 0);
  };
  MiniMp3.prototype.set_value_f45khw$ = function ($receiver, value) {
    this.set_qiltre$($receiver, 0, value);
  };
  MiniMp3.prototype.get_sfbtab_4gg731$ = function ($receiver) {
    return new CPointer(this.lw_za3lpa$($receiver.ptr + 0 | 0));
  };
  MiniMp3.prototype.set_sfbtab_b7kikc$ = function ($receiver, value) {
    this.sw_vux9f0$($receiver.ptr + 0 | 0, value.ptr);
  };
  MiniMp3.prototype.get_part_23_length_4gg731$ = function ($receiver) {
    return new UShort_init(this.lh_za3lpa$($receiver.ptr + 4 | 0));
  };
  MiniMp3.prototype.set_part_23_length_sq1jav$ = function ($receiver, value) {
    this.sh_2bqt6h$($receiver.ptr + 4 | 0, value.data);
  };
  MiniMp3.prototype.get_big_values_4gg731$ = function ($receiver) {
    return new UShort_init(this.lh_za3lpa$($receiver.ptr + 6 | 0));
  };
  MiniMp3.prototype.set_big_values_sq1jav$ = function ($receiver, value) {
    this.sh_2bqt6h$($receiver.ptr + 6 | 0, value.data);
  };
  MiniMp3.prototype.get_scalefac_compress_4gg731$ = function ($receiver) {
    return new UShort_init(this.lh_za3lpa$($receiver.ptr + 8 | 0));
  };
  MiniMp3.prototype.set_scalefac_compress_sq1jav$ = function ($receiver, value) {
    this.sh_2bqt6h$($receiver.ptr + 8 | 0, value.data);
  };
  MiniMp3.prototype.get_global_gain_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 10 | 0));
  };
  MiniMp3.prototype.set_global_gain_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 10 | 0, value.data);
  };
  MiniMp3.prototype.get_block_type_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 11 | 0));
  };
  MiniMp3.prototype.set_block_type_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 11 | 0, value.data);
  };
  MiniMp3.prototype.get_mixed_block_flag_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 12 | 0));
  };
  MiniMp3.prototype.set_mixed_block_flag_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 12 | 0, value.data);
  };
  MiniMp3.prototype.get_n_long_sfb_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 13 | 0));
  };
  MiniMp3.prototype.set_n_long_sfb_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 13 | 0, value.data);
  };
  MiniMp3.prototype.get_n_short_sfb_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 14 | 0));
  };
  MiniMp3.prototype.set_n_short_sfb_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 14 | 0, value.data);
  };
  MiniMp3.prototype.get_table_select_4gg731$ = function ($receiver) {
    return new Array3UByte($receiver.ptr + 15 | 0);
  };
  MiniMp3.prototype.set_table_select_nsgn2r$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[3]');
  };
  MiniMp3.prototype.get_region_count_4gg731$ = function ($receiver) {
    return new Array3UByte($receiver.ptr + 18 | 0);
  };
  MiniMp3.prototype.set_region_count_nsgn2r$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[3]');
  };
  MiniMp3.prototype.get_subblock_gain_4gg731$ = function ($receiver) {
    return new Array3UByte($receiver.ptr + 21 | 0);
  };
  MiniMp3.prototype.set_subblock_gain_nsgn2r$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[3]');
  };
  MiniMp3.prototype.get_preflag_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 24 | 0));
  };
  MiniMp3.prototype.set_preflag_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 24 | 0, value.data);
  };
  MiniMp3.prototype.get_scalefac_scale_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 25 | 0));
  };
  MiniMp3.prototype.set_scalefac_scale_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 25 | 0, value.data);
  };
  MiniMp3.prototype.get_count1_table_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 26 | 0));
  };
  MiniMp3.prototype.set_count1_table_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 26 | 0, value.data);
  };
  MiniMp3.prototype.get_scfsi_4gg731$ = function ($receiver) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + 27 | 0));
  };
  MiniMp3.prototype.set_scfsi_x2bl9$ = function ($receiver, value) {
    this.sb_6t1wet$($receiver.ptr + 27 | 0, value.data);
  };
  MiniMp3.prototype.mp3dec_scratch_tAlloc = function () {
    return new mp3dec_scratch_t(this.alloca_za3lpa$(16233).ptr);
  };
  MiniMp3.prototype.mp3dec_scratch_tAlloc_pqjger$ = function (bs, maindata, gr_info, grbuf, scf, syn, ist_pos) {
    var $receiver = this.mp3dec_scratch_tAlloc();
    this.set_bs_g028k3$($receiver, bs);
    this.set_maindata_k25sxz$($receiver, maindata);
    this.set_gr_info_jhjdfr$($receiver, gr_info);
    this.set_grbuf_omxbv$($receiver, grbuf);
    this.set_scf_fj1a30$($receiver, scf);
    this.set_syn_5121xt$($receiver, syn);
    this.set_ist_pos_e602n0$($receiver, ist_pos);
    return $receiver;
  };
  MiniMp3.prototype.copyFrom_8jc9wx$ = function ($receiver, src) {
    this.memcpy_q1n2f2$(new CPointer($receiver.ptr), new CPointer(src.ptr), 16233);
    return $receiver;
  };
  MiniMp3.prototype.fixedArrayOfmp3dec_scratch_t_2g0rbh$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.fixedArrayOfmp3dec_scratch_t_2g0rbh$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 16233 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.get_dgv3d5$ = function ($receiver, index) {
    return new mp3dec_scratch_t($receiver.ptr + (index * 16233 | 0) | 0);
  };
  MiniMp3.prototype.set_5trykq$ = function ($receiver, index, value) {
    return this.copyFrom_8jc9wx$(new mp3dec_scratch_t($receiver.ptr + (index * 16233 | 0) | 0), value);
  };
  MiniMp3.prototype.plus_dgv3d5$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + (offset * 16233 | 0) | 0);
  };
  MiniMp3.prototype.minus_dgv3d5$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr - (offset * 16233 | 0) | 0);
  };
  MiniMp3.prototype.minusPtrmp3dec_scratch_t_cq5ioh$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 16233 | 0;
  };
  MiniMp3.prototype.get_value_6u2e3v$ = function ($receiver) {
    return this.get_dgv3d5$($receiver, 0);
  };
  MiniMp3.prototype.set_value_e4gcfq$ = function ($receiver, value) {
    this.set_5trykq$($receiver, 0, value);
  };
  MiniMp3.prototype.get_bs_oud1nq$ = function ($receiver) {
    return new bs_t($receiver.ptr + 0 | 0);
  };
  MiniMp3.prototype.set_bs_g028k3$ = function ($receiver, value) {
    this.copyFrom_bjxufj$(new bs_t($receiver.ptr + 0 | 0), value);
  };
  MiniMp3.prototype.get_maindata_oud1nq$ = function ($receiver) {
    return new Array2815UByte($receiver.ptr + 12 | 0);
  };
  MiniMp3.prototype.set_maindata_k25sxz$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[2815]');
  };
  MiniMp3.prototype.get_gr_info_oud1nq$ = function ($receiver) {
    return new Array4L3_gr_info_t($receiver.ptr + 2827 | 0);
  };
  MiniMp3.prototype.set_gr_info_jhjdfr$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=struct null[4]');
  };
  MiniMp3.prototype.get_grbuf_oud1nq$ = function ($receiver) {
    return new Array2Array576Float($receiver.ptr + 2939 | 0);
  };
  MiniMp3.prototype.set_grbuf_omxbv$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=Float[576][2]');
  };
  MiniMp3.prototype.get_scf_oud1nq$ = function ($receiver) {
    return new Array40Float($receiver.ptr + 7547 | 0);
  };
  MiniMp3.prototype.set_scf_fj1a30$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=Float[40]');
  };
  MiniMp3.prototype.get_syn_oud1nq$ = function ($receiver) {
    return new Array33Array64Float($receiver.ptr + 7707 | 0);
  };
  MiniMp3.prototype.set_syn_5121xt$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=Float[64][33]');
  };
  MiniMp3.prototype.get_ist_pos_oud1nq$ = function ($receiver) {
    return new Array2Array39UByte($receiver.ptr + 16155 | 0);
  };
  MiniMp3.prototype.set_ist_pos_e602n0$ = function ($receiver, value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported setting ftype=UByte[39][2]');
  };
  MiniMp3.prototype.get_ao4xiy$ = function ($receiver, index) {
    return new Array288Float($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_3ensle$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 1152);
  };
  MiniMp3.prototype.get_value_sxxkk8$ = function ($receiver) {
    return this.get_ao4xiy$($receiver, 0);
  };
  MiniMp3.prototype.set_value_v8prag$ = function ($receiver, value) {
    this.set_3ensle$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2Array288FloatAlloc_f3f6uy$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2Array288FloatAlloc_f3f6uy$', wrapFunction(function () {
    var Array2Array288Float_init = _.com.soywiz.korau.format.mp3.Array2Array288Float;
    return function (setItems) {
      var $receiver = new Array2Array288Float_init(this.alloca_zero_za3lpa$(2304).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_ao4xiy$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_ao4xiy$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_k1t99b$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_3wu77e$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_qxkim7$ = function ($receiver) {
    return this.get_k1t99b$($receiver, 0);
  };
  MiniMp3.prototype.set_value_j25z5e$ = function ($receiver, value) {
    this.set_3wu77e$($receiver, 0, value);
  };
  MiniMp3.prototype.Array288FloatAlloc_u0cmv5$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array288FloatAlloc_u0cmv5$', wrapFunction(function () {
    var Array288Float_init = _.com.soywiz.korau.format.mp3.Array288Float;
    return function (setItems) {
      var $receiver = new Array288Float_init(this.alloca_zero_za3lpa$(1152).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_k1t99b$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_k1t99b$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_k8nobm$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_sss7s7$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_282kxs$ = function ($receiver) {
    return this.get_k8nobm$($receiver, 0);
  };
  MiniMp3.prototype.set_value_bejgc1$ = function ($receiver, value) {
    this.set_sss7s7$($receiver, 0, value);
  };
  MiniMp3.prototype.Array960FloatAlloc_5ralia$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array960FloatAlloc_5ralia$', wrapFunction(function () {
    var Array960Float_init = _.com.soywiz.korau.format.mp3.Array960Float;
    return function (setItems) {
      var $receiver = new Array960Float_init(this.alloca_zero_za3lpa$(3840).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_k8nobm$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_k8nobm$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_o7m6bi$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_iu8g92$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_2scly8$ = function ($receiver) {
    return this.get_o7m6bi$($receiver, 0);
  };
  MiniMp3.prototype.set_value_uzsx68$ = function ($receiver, value) {
    this.set_iu8g92$($receiver, 0, value);
  };
  MiniMp3.prototype.Array4UByteAlloc_gpvni6$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array4UByteAlloc_gpvni6$', wrapFunction(function () {
    var Array4UByte_init = _.com.soywiz.korau.format.mp3.Array4UByte;
    return function (setItems) {
      var $receiver = new Array4UByte_init(this.alloca_zero_za3lpa$(4).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_o7m6bi$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_o7m6bi$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_6u07hf$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_rz0w07$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_5mku9r$ = function ($receiver) {
    return this.get_6u07hf$($receiver, 0);
  };
  MiniMp3.prototype.set_value_wb0cgh$ = function ($receiver, value) {
    this.set_rz0w07$($receiver, 0, value);
  };
  MiniMp3.prototype.Array511UByteAlloc_6t5l37$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array511UByteAlloc_6t5l37$', wrapFunction(function () {
    var Array511UByte_init = _.com.soywiz.korau.format.mp3.Array511UByte;
    return function (setItems) {
      var $receiver = new Array511UByte_init(this.alloca_zero_za3lpa$(511).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_6u07hf$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_6u07hf$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_essn9j$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_t72r8e$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_2f2ovd$ = function ($receiver) {
    return this.get_essn9j$($receiver, 0);
  };
  MiniMp3.prototype.set_value_gjurbu$ = function ($receiver, value) {
    this.set_t72r8e$($receiver, 0, value);
  };
  MiniMp3.prototype.Array192FloatAlloc_n9sye1$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array192FloatAlloc_n9sye1$', wrapFunction(function () {
    var Array192Float_init = _.com.soywiz.korau.format.mp3.Array192Float;
    return function (setItems) {
      var $receiver = new Array192Float_init(this.alloca_zero_za3lpa$(768).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_essn9j$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_essn9j$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_i0nyfs$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_uc6wbg$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_n0afcm$ = function ($receiver) {
    return this.get_i0nyfs$($receiver, 0);
  };
  MiniMp3.prototype.set_value_fm5gje$ = function ($receiver, value) {
    this.set_uc6wbg$($receiver, 0, value);
  };
  MiniMp3.prototype.Array64UByteAlloc_7crjb2$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array64UByteAlloc_7crjb2$', wrapFunction(function () {
    var Array64UByte_init = _.com.soywiz.korau.format.mp3.Array64UByte;
    return function (setItems) {
      var $receiver = new Array64UByte_init(this.alloca_zero_za3lpa$(64).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_i0nyfs$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_i0nyfs$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_ofrr7l$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_j0yztx$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_bw1o9t$ = function ($receiver) {
    return this.get_ofrr7l$($receiver, 0);
  };
  MiniMp3.prototype.set_value_q2j64x$ = function ($receiver, value) {
    this.set_j0yztx$($receiver, 0, value);
  };
  MiniMp3.prototype.Array3UByteAlloc_nha6an$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array3UByteAlloc_nha6an$', wrapFunction(function () {
    var Array3UByte_init = _.com.soywiz.korau.format.mp3.Array3UByte;
    return function (setItems) {
      var $receiver = new Array3UByte_init(this.alloca_zero_za3lpa$(3).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_ofrr7l$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_ofrr7l$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_yw8ipw$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_n20hu0$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_gwmx9e$ = function ($receiver) {
    return this.get_yw8ipw$($receiver, 0);
  };
  MiniMp3.prototype.set_value_843f02$ = function ($receiver, value) {
    this.set_n20hu0$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2815UByteAlloc_h9n6za$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2815UByteAlloc_h9n6za$', wrapFunction(function () {
    var Array2815UByte_init = _.com.soywiz.korau.format.mp3.Array2815UByte;
    return function (setItems) {
      var $receiver = new Array2815UByte_init(this.alloca_zero_za3lpa$(2815).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_yw8ipw$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_yw8ipw$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_pb6a4k$ = function ($receiver, index) {
    return new L3_gr_info_t($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_w47zi2$ = function ($receiver, index, value) {
    this.copyFrom_dgsbrl$(new L3_gr_info_t($receiver.addr_za3lpa$(index)), value);
  };
  MiniMp3.prototype.get_value_qrrq6$ = function ($receiver) {
    return this.get_pb6a4k$($receiver, 0);
  };
  MiniMp3.prototype.set_value_aitw1g$ = function ($receiver, value) {
    this.set_w47zi2$($receiver, 0, value);
  };
  MiniMp3.prototype.Array4L3_gr_info_tAlloc_st2j6e$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array4L3_gr_info_tAlloc_st2j6e$', wrapFunction(function () {
    var Array4L3_gr_info_t_init = _.com.soywiz.korau.format.mp3.Array4L3_gr_info_t;
    return function (setItems) {
      var $receiver = new Array4L3_gr_info_t_init(this.alloca_zero_za3lpa$(112).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_pb6a4k$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_pb6a4k$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_bj3kkc$ = function ($receiver, index) {
    return new Array576Float($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_1e1l8i$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 2304);
  };
  MiniMp3.prototype.get_value_n5ekmy$ = function ($receiver) {
    return this.get_bj3kkc$($receiver, 0);
  };
  MiniMp3.prototype.set_value_49vcto$ = function ($receiver, value) {
    this.set_1e1l8i$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2Array576FloatAlloc_z5jxlo$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2Array576FloatAlloc_z5jxlo$', wrapFunction(function () {
    var Array2Array576Float_init = _.com.soywiz.korau.format.mp3.Array2Array576Float;
    return function (setItems) {
      var $receiver = new Array2Array576Float_init(this.alloca_zero_za3lpa$(4608).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_bj3kkc$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_bj3kkc$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_j6um7x$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_uyo73c$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_l51iox$ = function ($receiver) {
    return this.get_j6um7x$($receiver, 0);
  };
  MiniMp3.prototype.set_value_q4af74$ = function ($receiver, value) {
    this.set_uyo73c$($receiver, 0, value);
  };
  MiniMp3.prototype.Array576FloatAlloc_kymod9$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array576FloatAlloc_kymod9$', wrapFunction(function () {
    var Array576Float_init = _.com.soywiz.korau.format.mp3.Array576Float;
    return function (setItems) {
      var $receiver = new Array576Float_init(this.alloca_zero_za3lpa$(2304).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_j6um7x$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_j6um7x$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_6hk5op$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_ae7xcs$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_ss7ca3$ = function ($receiver) {
    return this.get_6hk5op$($receiver, 0);
  };
  MiniMp3.prototype.set_value_fx4ckk$ = function ($receiver, value) {
    this.set_ae7xcs$($receiver, 0, value);
  };
  MiniMp3.prototype.Array40FloatAlloc_hq4hz1$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array40FloatAlloc_hq4hz1$', wrapFunction(function () {
    var Array40Float_init = _.com.soywiz.korau.format.mp3.Array40Float;
    return function (setItems) {
      var $receiver = new Array40Float_init(this.alloca_zero_za3lpa$(160).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_6hk5op$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_6hk5op$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_3gzhfq$ = function ($receiver, index) {
    return new Array64Float($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_8hbkn2$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 256);
  };
  MiniMp3.prototype.get_value_fs7fl0$ = function ($receiver) {
    return this.get_3gzhfq$($receiver, 0);
  };
  MiniMp3.prototype.set_value_bcyhvo$ = function ($receiver, value) {
    this.set_8hbkn2$($receiver, 0, value);
  };
  MiniMp3.prototype.Array33Array64FloatAlloc_rov1vq$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array33Array64FloatAlloc_rov1vq$', wrapFunction(function () {
    var Array33Array64Float_init = _.com.soywiz.korau.format.mp3.Array33Array64Float;
    return function (setItems) {
      var $receiver = new Array33Array64Float_init(this.alloca_zero_za3lpa$(8448).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_3gzhfq$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_3gzhfq$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_kz15s7$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_1yfyw2$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_gjiorb$ = function ($receiver) {
    return this.get_kz15s7$($receiver, 0);
  };
  MiniMp3.prototype.set_value_hkbiau$ = function ($receiver, value) {
    this.set_1yfyw2$($receiver, 0, value);
  };
  MiniMp3.prototype.Array64FloatAlloc_x91fnl$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array64FloatAlloc_x91fnl$', wrapFunction(function () {
    var Array64Float_init = _.com.soywiz.korau.format.mp3.Array64Float;
    return function (setItems) {
      var $receiver = new Array64Float_init(this.alloca_zero_za3lpa$(256).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_kz15s7$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_kz15s7$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_edkp4p$ = function ($receiver, index) {
    return new Array39UByte($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_87bs5m$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 39);
  };
  MiniMp3.prototype.get_value_lg67j9$ = function ($receiver) {
    return this.get_edkp4p$($receiver, 0);
  };
  MiniMp3.prototype.set_value_3vthxy$ = function ($receiver, value) {
    this.set_87bs5m$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2Array39UByteAlloc_8epqk3$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2Array39UByteAlloc_8epqk3$', wrapFunction(function () {
    var Array2Array39UByte_init = _.com.soywiz.korau.format.mp3.Array2Array39UByte;
    return function (setItems) {
      var $receiver = new Array2Array39UByte_init(this.alloca_zero_za3lpa$(78).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_edkp4p$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_edkp4p$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_xp5feo$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_o81anw$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_9xefa6$ = function ($receiver) {
    return this.get_xp5feo$($receiver, 0);
  };
  MiniMp3.prototype.set_value_5vacha$ = function ($receiver, value) {
    this.set_o81anw$($receiver, 0, value);
  };
  MiniMp3.prototype.Array39UByteAlloc_jdtyhm$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array39UByteAlloc_jdtyhm$', wrapFunction(function () {
    var Array39UByte_init = _.com.soywiz.korau.format.mp3.Array39UByte;
    return function (setItems) {
      var $receiver = new Array39UByte_init(this.alloca_zero_za3lpa$(39).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_xp5feo$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_xp5feo$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_s0ci51$ = function ($receiver, index) {
    return new Array3Array15UByte($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_wdy8sy$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 45);
  };
  MiniMp3.prototype.get_value_q6n4zt$ = function ($receiver) {
    return this.get_s0ci51$($receiver, 0);
  };
  MiniMp3.prototype.set_value_fg3x5i$ = function ($receiver, value) {
    this.set_wdy8sy$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2Array3Array15UByteAlloc_nnbilt$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2Array3Array15UByteAlloc_nnbilt$', wrapFunction(function () {
    var Array2Array3Array15UByte_init = _.com.soywiz.korau.format.mp3.Array2Array3Array15UByte;
    return function (setItems) {
      var $receiver = new Array2Array3Array15UByte_init(this.alloca_zero_za3lpa$(90).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_s0ci51$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_s0ci51$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_zzvrw$ = function ($receiver, index) {
    return new Array15UByte($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_tj4ipn$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 15);
  };
  MiniMp3.prototype.get_value_w8jp1a$ = function ($receiver) {
    return this.get_zzvrw$($receiver, 0);
  };
  MiniMp3.prototype.set_value_uinenp$ = function ($receiver, value) {
    this.set_tj4ipn$($receiver, 0, value);
  };
  MiniMp3.prototype.Array3Array15UByteAlloc_qnxgy2$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array3Array15UByteAlloc_qnxgy2$', wrapFunction(function () {
    var Array3Array15UByte_init = _.com.soywiz.korau.format.mp3.Array3Array15UByte;
    return function (setItems) {
      var $receiver = new Array3Array15UByte_init(this.alloca_zero_za3lpa$(45).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_zzvrw$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_zzvrw$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_j7ofb6$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_bvdef2$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_zeblr8$ = function ($receiver) {
    return this.get_j7ofb6$($receiver, 0);
  };
  MiniMp3.prototype.set_value_4836r0$ = function ($receiver, value) {
    this.set_bvdef2$($receiver, 0, value);
  };
  MiniMp3.prototype.Array15UByteAlloc_vlbz50$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array15UByteAlloc_vlbz50$', wrapFunction(function () {
    var Array15UByte_init = _.com.soywiz.korau.format.mp3.Array15UByte;
    return function (setItems) {
      var $receiver = new Array15UByte_init(this.alloca_zero_za3lpa$(15).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_j7ofb6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_j7ofb6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_t8ujw6$ = function ($receiver, index) {
    return new UInt(this.lw_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_tfaz$ = function ($receiver, index, value) {
    this.sw_vux9f0$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_u60zvc$ = function ($receiver) {
    return this.get_t8ujw6$($receiver, 0);
  };
  MiniMp3.prototype.set_value_gschbz$ = function ($receiver, value) {
    this.set_tfaz$($receiver, 0, value);
  };
  MiniMp3.prototype.Array3UIntAlloc_pvroz4$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array3UIntAlloc_pvroz4$', wrapFunction(function () {
    var Array3UInt_init = _.com.soywiz.korau.format.mp3.Array3UInt;
    return function (setItems) {
      var $receiver = new Array3UInt_init(this.alloca_zero_za3lpa$(12).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_t8ujw6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_t8ujw6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_4hefty$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_3uew2n$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_ca3saw$ = function ($receiver) {
    return this.get_4hefty$($receiver, 0);
  };
  MiniMp3.prototype.set_value_obq13b$ = function ($receiver, value) {
    this.set_3uew2n$($receiver, 0, value);
  };
  MiniMp3.prototype.Array54FloatAlloc_tr7g8w$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array54FloatAlloc_tr7g8w$', wrapFunction(function () {
    var Array54Float_init = _.com.soywiz.korau.format.mp3.Array54Float;
    return function (setItems) {
      var $receiver = new Array54Float_init(this.alloca_zero_za3lpa$(216).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_4hefty$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_4hefty$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_38k9ng$ = function ($receiver, index) {
    return new Array23UByte($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_6iwf9i$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 23);
  };
  MiniMp3.prototype.get_value_3jl43q$ = function ($receiver) {
    return this.get_38k9ng$($receiver, 0);
  };
  MiniMp3.prototype.set_value_vb83u8$ = function ($receiver, value) {
    this.set_6iwf9i$($receiver, 0, value);
  };
  MiniMp3.prototype.Array8Array23UByteAlloc_15svb6$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array8Array23UByteAlloc_15svb6$', wrapFunction(function () {
    var Array8Array23UByte_init = _.com.soywiz.korau.format.mp3.Array8Array23UByte;
    return function (setItems) {
      var $receiver = new Array8Array23UByte_init(this.alloca_zero_za3lpa$(184).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_38k9ng$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_38k9ng$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_9fnc6d$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_har681$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_z3mcu1$ = function ($receiver) {
    return this.get_9fnc6d$($receiver, 0);
  };
  MiniMp3.prototype.set_value_pe8lah$ = function ($receiver, value) {
    this.set_har681$($receiver, 0, value);
  };
  MiniMp3.prototype.Array23UByteAlloc_ekoy5d$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array23UByteAlloc_ekoy5d$', wrapFunction(function () {
    var Array23UByte_init = _.com.soywiz.korau.format.mp3.Array23UByte;
    return function (setItems) {
      var $receiver = new Array23UByte_init(this.alloca_zero_za3lpa$(23).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_9fnc6d$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_9fnc6d$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_purhm1$ = function ($receiver, index) {
    return new Array40UByte($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_2jin00$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 40);
  };
  MiniMp3.prototype.get_value_a2gzcl$ = function ($receiver) {
    return this.get_purhm1$($receiver, 0);
  };
  MiniMp3.prototype.set_value_6gxfqo$ = function ($receiver, value) {
    this.set_2jin00$($receiver, 0, value);
  };
  MiniMp3.prototype.Array8Array40UByteAlloc_q42nvn$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array8Array40UByteAlloc_q42nvn$', wrapFunction(function () {
    var Array8Array40UByte_init = _.com.soywiz.korau.format.mp3.Array8Array40UByte;
    return function (setItems) {
      var $receiver = new Array8Array40UByte_init(this.alloca_zero_za3lpa$(320).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_purhm1$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_purhm1$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_wi4yja$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_sc99eu$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_mbflos$ = function ($receiver) {
    return this.get_wi4yja$($receiver, 0);
  };
  MiniMp3.prototype.set_value_h9cm9o$ = function ($receiver, value) {
    this.set_sc99eu$($receiver, 0, value);
  };
  MiniMp3.prototype.Array40UByteAlloc_cp6l1g$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array40UByteAlloc_cp6l1g$', wrapFunction(function () {
    var Array40UByte_init = _.com.soywiz.korau.format.mp3.Array40UByte;
    return function (setItems) {
      var $receiver = new Array40UByte_init(this.alloca_zero_za3lpa$(40).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_wi4yja$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_wi4yja$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_7tsrfn$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_dgeeyg$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_3of4n3$ = function ($receiver) {
    return this.get_7tsrfn$($receiver, 0);
  };
  MiniMp3.prototype.set_value_6uu5yo$ = function ($receiver, value) {
    this.set_dgeeyg$($receiver, 0, value);
  };
  MiniMp3.prototype.Array4FloatAlloc_dpffib$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array4FloatAlloc_dpffib$', wrapFunction(function () {
    var Array4Float_init = _.com.soywiz.korau.format.mp3.Array4Float;
    return function (setItems) {
      var $receiver = new Array4Float_init(this.alloca_zero_za3lpa$(16).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_7tsrfn$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_7tsrfn$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_ldkad6$ = function ($receiver, index) {
    return new Array28UByte($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_piczqv$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 28);
  };
  MiniMp3.prototype.get_value_ueufa4$ = function ($receiver) {
    return this.get_ldkad6$($receiver, 0);
  };
  MiniMp3.prototype.set_value_idk5h1$ = function ($receiver, value) {
    this.set_piczqv$($receiver, 0, value);
  };
  MiniMp3.prototype.Array3Array28UByteAlloc_rkt02c$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array3Array28UByteAlloc_rkt02c$', wrapFunction(function () {
    var Array3Array28UByte_init = _.com.soywiz.korau.format.mp3.Array3Array28UByte;
    return function (setItems) {
      var $receiver = new Array3Array28UByte_init(this.alloca_zero_za3lpa$(84).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_ldkad6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_ldkad6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_vfv82o$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_i8fw4c$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_xkmc02$ = function ($receiver) {
    return this.get_vfv82o$($receiver, 0);
  };
  MiniMp3.prototype.set_value_qlgtxq$ = function ($receiver, value) {
    this.set_i8fw4c$($receiver, 0, value);
  };
  MiniMp3.prototype.Array28UByteAlloc_mnehve$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array28UByteAlloc_mnehve$', wrapFunction(function () {
    var Array28UByte_init = _.com.soywiz.korau.format.mp3.Array28UByte;
    return function (setItems) {
      var $receiver = new Array28UByte_init(this.alloca_zero_za3lpa$(28).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_vfv82o$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_vfv82o$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_361p4v$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_c23xzx$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_kpxbj7$ = function ($receiver) {
    return this.get_361p4v$($receiver, 0);
  };
  MiniMp3.prototype.set_value_9qorwz$ = function ($receiver, value) {
    this.set_c23xzx$($receiver, 0, value);
  };
  MiniMp3.prototype.Array16UByteAlloc_wodk1n$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array16UByteAlloc_wodk1n$', wrapFunction(function () {
    var Array16UByte_init = _.com.soywiz.korau.format.mp3.Array16UByte;
    return function (setItems) {
      var $receiver = new Array16UByte_init(this.alloca_zero_za3lpa$(16).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_361p4v$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_361p4v$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_cy2s9o$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_hhhpsw$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_l93ex2$ = function ($receiver) {
    return this.get_cy2s9o$($receiver, 0);
  };
  MiniMp3.prototype.set_value_bfgmmi$ = function ($receiver, value) {
    this.set_hhhpsw$($receiver, 0, value);
  };
  MiniMp3.prototype.Array24UByteAlloc_lc3gxu$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array24UByteAlloc_lc3gxu$', wrapFunction(function () {
    var Array24UByte_init = _.com.soywiz.korau.format.mp3.Array24UByte;
    return function (setItems) {
      var $receiver = new Array24UByte_init(this.alloca_zero_za3lpa$(24).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_cy2s9o$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_cy2s9o$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_axx2ex$ = function ($receiver, index) {
    return new UByte(this.lb_za3lpa$($receiver.addr_za3lpa$(index)));
  };
  MiniMp3.prototype.set_axooir$ = function ($receiver, index, value) {
    this.sb_6t1wet$($receiver.addr_za3lpa$(index), value.data);
  };
  MiniMp3.prototype.get_value_x9x32v$ = function ($receiver) {
    return this.get_axx2ex$($receiver, 0);
  };
  MiniMp3.prototype.set_value_30uy3r$ = function ($receiver, value) {
    this.set_axooir$($receiver, 0, value);
  };
  MiniMp3.prototype.Array10UByteAlloc_27omtd$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array10UByteAlloc_27omtd$', wrapFunction(function () {
    var Array10UByte_init = _.com.soywiz.korau.format.mp3.Array10UByte;
    return function (setItems) {
      var $receiver = new Array10UByte_init(this.alloca_zero_za3lpa$(10).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_axx2ex$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_axx2ex$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_79os4f$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_ddymnu$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_vgw5j5$ = function ($receiver) {
    return this.get_79os4f$($receiver, 0);
  };
  MiniMp3.prototype.set_value_on61de$ = function ($receiver, value) {
    this.set_ddymnu$($receiver, 0, value);
  };
  MiniMp3.prototype.Array145FloatAlloc_9zxm67$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array145FloatAlloc_9zxm67$', wrapFunction(function () {
    var Array145Float_init = _.com.soywiz.korau.format.mp3.Array145Float;
    return function (setItems) {
      var $receiver = new Array145Float_init(this.alloca_zero_za3lpa$(580).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_79os4f$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_79os4f$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_o4h05i$ = function ($receiver, index) {
    return this.lh_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_gwdnkx$ = function ($receiver, index, value) {
    this.sh_2bqt6h$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_m5mzjc$ = function ($receiver) {
    return this.get_o4h05i$($receiver, 0);
  };
  MiniMp3.prototype.set_value_r5t3qx$ = function ($receiver, value) {
    this.set_gwdnkx$($receiver, 0, value);
  };
  MiniMp3.prototype.Array32ShortAlloc_9r6rog$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array32ShortAlloc_9r6rog$', wrapFunction(function () {
    var Array32Short_init = _.com.soywiz.korau.format.mp3.Array32Short;
    return function (setItems) {
      var $receiver = new Array32Short_init(this.alloca_zero_za3lpa$(64).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_o4h05i$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_o4h05i$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_pw5ub3$ = function ($receiver, index) {
    return this.lw_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_u7m0zl$ = function ($receiver, index, value) {
    this.sw_vux9f0$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_lxnerx$ = function ($receiver) {
    return this.get_pw5ub3$($receiver, 0);
  };
  MiniMp3.prototype.set_value_pw5ub3$ = function ($receiver, value) {
    this.set_u7m0zl$($receiver, 0, value);
  };
  MiniMp3.prototype.Array3IntAlloc_x2m21b$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array3IntAlloc_x2m21b$', wrapFunction(function () {
    var Array3Int_init = _.com.soywiz.korau.format.mp3.Array3Int;
    return function (setItems) {
      var $receiver = new Array3Int_init(this.alloca_zero_za3lpa$(12).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_pw5ub3$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_pw5ub3$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_9jzm02$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_r1ubxf$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_ehmfek$ = function ($receiver) {
    return this.get_9jzm02$($receiver, 0);
  };
  MiniMp3.prototype.set_value_jnrxpx$ = function ($receiver, value) {
    this.set_r1ubxf$($receiver, 0, value);
  };
  MiniMp3.prototype.Array14FloatAlloc_frvim4$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array14FloatAlloc_frvim4$', wrapFunction(function () {
    var Array14Float_init = _.com.soywiz.korau.format.mp3.Array14Float;
    return function (setItems) {
      var $receiver = new Array14Float_init(this.alloca_zero_za3lpa$(56).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_9jzm02$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_9jzm02$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_415gqo$ = function ($receiver, index) {
    return new Array8Float($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_r4exvm$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 32);
  };
  MiniMp3.prototype.get_value_tdhof6$ = function ($receiver) {
    return this.get_415gqo$($receiver, 0);
  };
  MiniMp3.prototype.set_value_kw98ek$ = function ($receiver, value) {
    this.set_r4exvm$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2Array8FloatAlloc_fwfb9c$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2Array8FloatAlloc_fwfb9c$', wrapFunction(function () {
    var Array2Array8Float_init = _.com.soywiz.korau.format.mp3.Array2Array8Float;
    return function (setItems) {
      var $receiver = new Array2Array8Float_init(this.alloca_zero_za3lpa$(64).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_415gqo$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_415gqo$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_qbl78n$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_e7cl9w$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_fzy1q3$ = function ($receiver) {
    return this.get_qbl78n$($receiver, 0);
  };
  MiniMp3.prototype.set_value_8b61ck$ = function ($receiver, value) {
    this.set_e7cl9w$($receiver, 0, value);
  };
  MiniMp3.prototype.Array8FloatAlloc_ua2jax$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array8FloatAlloc_ua2jax$', wrapFunction(function () {
    var Array8Float_init = _.com.soywiz.korau.format.mp3.Array8Float;
    return function (setItems) {
      var $receiver = new Array8Float_init(this.alloca_zero_za3lpa$(32).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_qbl78n$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_qbl78n$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_8xstsy$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_qaw5lz$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_263ibk$ = function ($receiver) {
    return this.get_8xstsy$($receiver, 0);
  };
  MiniMp3.prototype.set_value_4hrqep$ = function ($receiver, value) {
    this.set_qaw5lz$($receiver, 0, value);
  };
  MiniMp3.prototype.Array18FloatAlloc_b9qkjs$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array18FloatAlloc_b9qkjs$', wrapFunction(function () {
    var Array18Float_init = _.com.soywiz.korau.format.mp3.Array18Float;
    return function (setItems) {
      var $receiver = new Array18Float_init(this.alloca_zero_za3lpa$(72).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_8xstsy$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_8xstsy$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_mbsqag$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_ee34ur$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_1bjri2$ = function ($receiver) {
    return this.get_mbsqag$($receiver, 0);
  };
  MiniMp3.prototype.set_value_5nlxbf$ = function ($receiver, value) {
    this.set_ee34ur$($receiver, 0, value);
  };
  MiniMp3.prototype.Array9FloatAlloc_nio0ig$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array9FloatAlloc_nio0ig$', wrapFunction(function () {
    var Array9Float_init = _.com.soywiz.korau.format.mp3.Array9Float;
    return function (setItems) {
      var $receiver = new Array9Float_init(this.alloca_zero_za3lpa$(36).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_mbsqag$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_mbsqag$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_ifv1nf$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_dtvi46$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_podfsz$ = function ($receiver) {
    return this.get_ifv1nf$($receiver, 0);
  };
  MiniMp3.prototype.set_value_yse3am$ = function ($receiver, value) {
    this.set_dtvi46$($receiver, 0, value);
  };
  MiniMp3.prototype.Array6FloatAlloc_r88h39$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array6FloatAlloc_r88h39$', wrapFunction(function () {
    var Array6Float_init = _.com.soywiz.korau.format.mp3.Array6Float;
    return function (setItems) {
      var $receiver = new Array6Float_init(this.alloca_zero_za3lpa$(24).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_ifv1nf$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_ifv1nf$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_ejxd0e$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_d9nvdl$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_ictev4$ = function ($receiver) {
    return this.get_ejxd0e$($receiver, 0);
  };
  MiniMp3.prototype.set_value_73xspb$ = function ($receiver, value) {
    this.set_d9nvdl$($receiver, 0, value);
  };
  MiniMp3.prototype.Array3FloatAlloc_6y0wpu$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array3FloatAlloc_6y0wpu$', wrapFunction(function () {
    var Array3Float_init = _.com.soywiz.korau.format.mp3.Array3Float;
    return function (setItems) {
      var $receiver = new Array3Float_init(this.alloca_zero_za3lpa$(12).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_ejxd0e$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_ejxd0e$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_s9dk2x$ = function ($receiver, index) {
    return new Array18Float($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_zgtoge$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 72);
  };
  MiniMp3.prototype.get_value_dovakn$ = function ($receiver) {
    return this.get_s9dk2x$($receiver, 0);
  };
  MiniMp3.prototype.set_value_1wtbrq$ = function ($receiver, value) {
    this.set_zgtoge$($receiver, 0, value);
  };
  MiniMp3.prototype.Array2Array18FloatAlloc_m8ushb$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array2Array18FloatAlloc_m8ushb$', wrapFunction(function () {
    var Array2Array18Float_init = _.com.soywiz.korau.format.mp3.Array2Array18Float;
    return function (setItems) {
      var $receiver = new Array2Array18Float_init(this.alloca_zero_za3lpa$(144).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_s9dk2x$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_s9dk2x$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_q1mbyb$ = function ($receiver, index) {
    return this.lwf_za3lpa$($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_l8zgyq$ = function ($receiver, index, value) {
    this.swf_24o109$($receiver.addr_za3lpa$(index), value);
  };
  MiniMp3.prototype.get_value_rpv5id$ = function ($receiver) {
    return this.get_q1mbyb$($receiver, 0);
  };
  MiniMp3.prototype.set_value_qf6gie$ = function ($receiver, value) {
    this.set_l8zgyq$($receiver, 0, value);
  };
  MiniMp3.prototype.Array24FloatAlloc_j9pi0t$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array24FloatAlloc_j9pi0t$', wrapFunction(function () {
    var Array24Float_init = _.com.soywiz.korau.format.mp3.Array24Float;
    return function (setItems) {
      var $receiver = new Array24Float_init(this.alloca_zero_za3lpa$(96).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_q1mbyb$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_q1mbyb$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_ptrce6$ = function ($receiver, index) {
    return new Array8Float($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_y0x75s$ = function ($receiver, index, value) {
    this.memcpy_q1n2f2$(new CPointer($receiver.addr_za3lpa$(index)), new CPointer(value.ptr), 32);
  };
  MiniMp3.prototype.get_value_vy934w$ = function ($receiver) {
    return this.get_ptrce6$($receiver, 0);
  };
  MiniMp3.prototype.set_value_ooyut2$ = function ($receiver, value) {
    this.set_y0x75s$($receiver, 0, value);
  };
  MiniMp3.prototype.Array4Array8FloatAlloc_evhl6q$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array4Array8FloatAlloc_evhl6q$', wrapFunction(function () {
    var Array4Array8Float_init = _.com.soywiz.korau.format.mp3.Array4Array8Float;
    return function (setItems) {
      var $receiver = new Array4Array8Float_init(this.alloca_zero_za3lpa$(128).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_ptrce6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_ptrce6$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_xdq8rk$ = function ($receiver, index) {
    return new bs_t($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_svoke3$ = function ($receiver, index, value) {
    this.copyFrom_bjxufj$(new bs_t($receiver.addr_za3lpa$(index)), value);
  };
  MiniMp3.prototype.get_value_uw8ema$ = function ($receiver) {
    return this.get_xdq8rk$($receiver, 0);
  };
  MiniMp3.prototype.set_value_ysa6h$ = function ($receiver, value) {
    this.set_svoke3$($receiver, 0, value);
  };
  MiniMp3.prototype.Array1bs_tAlloc_1z36d6$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array1bs_tAlloc_1z36d6$', wrapFunction(function () {
    var Array1bs_t_init = _.com.soywiz.korau.format.mp3.Array1bs_t;
    return function (setItems) {
      var $receiver = new Array1bs_t_init(this.alloca_zero_za3lpa$(12).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_xdq8rk$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_xdq8rk$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  MiniMp3.prototype.get_vmkwj5$ = function ($receiver, index) {
    return new L12_scale_info($receiver.addr_za3lpa$(index));
  };
  MiniMp3.prototype.set_inl4wz$ = function ($receiver, index, value) {
    this.copyFrom_yi5v9t$(new L12_scale_info($receiver.addr_za3lpa$(index)), value);
  };
  MiniMp3.prototype.get_value_i7ggf$ = function ($receiver) {
    return this.get_vmkwj5$($receiver, 0);
  };
  MiniMp3.prototype.set_value_9cfr6x$ = function ($receiver, value) {
    this.set_inl4wz$($receiver, 0, value);
  };
  MiniMp3.prototype.Array1L12_scale_infoAlloc_hl3q2f$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.MiniMp3.Array1L12_scale_infoAlloc_hl3q2f$', wrapFunction(function () {
    var Array1L12_scale_info_init = _.com.soywiz.korau.format.mp3.Array1L12_scale_info;
    return function (setItems) {
      var $receiver = new Array1L12_scale_info_init(this.alloca_zero_za3lpa$(898).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  MiniMp3.prototype.plus_vmkwj5$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(offset));
  };
  MiniMp3.prototype.minus_vmkwj5$ = function ($receiver, offset) {
    return new CPointer($receiver.addr_za3lpa$(-offset | 0));
  };
  function MiniMp3$__STATIC_hdr_bitrate_kbps_halfrate$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array2Array3Array15UByte($this.alloca_zero_za3lpa$(90).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array3Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(45).ptr);
      var $receiver_1 = new Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(15).ptr);
      this$MiniMp3_0.set_bvdef2$($receiver_1, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 2, new UByte(toByte(8)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 3, new UByte(toByte(12)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 4, new UByte(toByte(16)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 5, new UByte(toByte(20)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 6, new UByte(toByte(24)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 7, new UByte(toByte(28)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 8, new UByte(toByte(32)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 9, new UByte(toByte(40)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 10, new UByte(toByte(48)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 11, new UByte(toByte(56)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 12, new UByte(toByte(64)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 13, new UByte(toByte(72)));
      this$MiniMp3_0.set_bvdef2$($receiver_1, 14, new UByte(toByte(80)));
      this$MiniMp3_0.set_tj4ipn$($receiver_0, 0, $receiver_1);
      var $receiver_2 = new Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(15).ptr);
      this$MiniMp3_0.set_bvdef2$($receiver_2, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 2, new UByte(toByte(8)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 3, new UByte(toByte(12)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 4, new UByte(toByte(16)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 5, new UByte(toByte(20)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 6, new UByte(toByte(24)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 7, new UByte(toByte(28)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 8, new UByte(toByte(32)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 9, new UByte(toByte(40)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 10, new UByte(toByte(48)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 11, new UByte(toByte(56)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 12, new UByte(toByte(64)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 13, new UByte(toByte(72)));
      this$MiniMp3_0.set_bvdef2$($receiver_2, 14, new UByte(toByte(80)));
      this$MiniMp3_0.set_tj4ipn$($receiver_0, 1, $receiver_2);
      var $receiver_3 = new Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(15).ptr);
      this$MiniMp3_0.set_bvdef2$($receiver_3, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 1, new UByte(toByte(16)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 2, new UByte(toByte(24)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 3, new UByte(toByte(28)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 4, new UByte(toByte(32)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 5, new UByte(toByte(40)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 6, new UByte(toByte(48)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 7, new UByte(toByte(56)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 8, new UByte(toByte(64)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 9, new UByte(toByte(72)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 10, new UByte(toByte(80)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 11, new UByte(toByte(88)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 12, new UByte(toByte(96)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 13, new UByte(toByte(112)));
      this$MiniMp3_0.set_bvdef2$($receiver_3, 14, new UByte(toByte(128)));
      this$MiniMp3_0.set_tj4ipn$($receiver_0, 2, $receiver_3);
      this$MiniMp3_0.set_wdy8sy$($receiver, 0, $receiver_0);
      var $receiver_4 = new Array3Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(45).ptr);
      var $receiver_5 = new Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(15).ptr);
      this$MiniMp3_0.set_bvdef2$($receiver_5, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 1, new UByte(toByte(16)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 2, new UByte(toByte(20)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 3, new UByte(toByte(24)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 4, new UByte(toByte(28)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 5, new UByte(toByte(32)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 6, new UByte(toByte(40)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 7, new UByte(toByte(48)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 8, new UByte(toByte(56)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 9, new UByte(toByte(64)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 10, new UByte(toByte(80)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 11, new UByte(toByte(96)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 12, new UByte(toByte(112)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 13, new UByte(toByte(128)));
      this$MiniMp3_0.set_bvdef2$($receiver_5, 14, new UByte(toByte(160)));
      this$MiniMp3_0.set_tj4ipn$($receiver_4, 0, $receiver_5);
      var $receiver_6 = new Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(15).ptr);
      this$MiniMp3_0.set_bvdef2$($receiver_6, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 1, new UByte(toByte(16)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 2, new UByte(toByte(24)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 3, new UByte(toByte(28)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 4, new UByte(toByte(32)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 5, new UByte(toByte(40)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 6, new UByte(toByte(48)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 7, new UByte(toByte(56)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 8, new UByte(toByte(64)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 9, new UByte(toByte(80)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 10, new UByte(toByte(96)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 11, new UByte(toByte(112)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 12, new UByte(toByte(128)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 13, new UByte(toByte(160)));
      this$MiniMp3_0.set_bvdef2$($receiver_6, 14, new UByte(toByte(192)));
      this$MiniMp3_0.set_tj4ipn$($receiver_4, 1, $receiver_6);
      var $receiver_7 = new Array15UByte(this$MiniMp3_0.alloca_zero_za3lpa$(15).ptr);
      this$MiniMp3_0.set_bvdef2$($receiver_7, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 1, new UByte(toByte(16)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 2, new UByte(toByte(32)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 3, new UByte(toByte(48)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 4, new UByte(toByte(64)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 5, new UByte(toByte(80)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 6, new UByte(toByte(96)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 7, new UByte(toByte(112)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 8, new UByte(toByte(128)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 9, new UByte(toByte(144)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 10, new UByte(toByte(160)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 11, new UByte(toByte(176)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 12, new UByte(toByte(192)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 13, new UByte(toByte(208)));
      this$MiniMp3_0.set_bvdef2$($receiver_7, 14, new UByte(toByte(224)));
      this$MiniMp3_0.set_tj4ipn$($receiver_4, 2, $receiver_7);
      this$MiniMp3_0.set_wdy8sy$($receiver, 1, $receiver_4);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_hdr_sample_rate_hz_g_hz$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array3UInt($this.alloca_zero_za3lpa$(12).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_tfaz$($receiver, 0, new UInt(44100));
      this$MiniMp3_0.set_tfaz$($receiver, 1, new UInt(48000));
      this$MiniMp3_0.set_tfaz$($receiver, 2, new UInt(32000));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L1$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(1 * 3 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_qk5h3i$($receiver, 0, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(76)), new UByte(toByte(4)), new UByte(toByte(32))));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L2M2$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(3 * 3 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_qk5h3i$($receiver, 0, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(60)), new UByte(toByte(4)), new UByte(toByte(4))));
      this$MiniMp3_0.set_qk5h3i$($receiver, 1, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(44)), new UByte(toByte(3)), new UByte(toByte(7))));
      this$MiniMp3_0.set_qk5h3i$($receiver, 2, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(44)), new UByte(toByte(2)), new UByte(toByte(19))));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L2M1$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(4 * 3 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_qk5h3i$($receiver, 0, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(0)), new UByte(toByte(4)), new UByte(toByte(3))));
      this$MiniMp3_0.set_qk5h3i$($receiver, 1, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(16)), new UByte(toByte(4)), new UByte(toByte(8))));
      this$MiniMp3_0.set_qk5h3i$($receiver, 2, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(32)), new UByte(toByte(3)), new UByte(toByte(12))));
      this$MiniMp3_0.set_qk5h3i$($receiver, 3, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(40)), new UByte(toByte(2)), new UByte(toByte(7))));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L12_subband_alloc_table_g_alloc_L2M1_lowrate$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(2 * 3 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_qk5h3i$($receiver, 0, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(44)), new UByte(toByte(4)), new UByte(toByte(2))));
      this$MiniMp3_0.set_qk5h3i$($receiver, 1, this$MiniMp3_0.L12_subband_alloc_tAlloc_l1b9e8$(new UByte(toByte(44)), new UByte(toByte(3)), new UByte(toByte(10))));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L12_read_scalefactors_g_deq_L12$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array54Float($this.alloca_zero_za3lpa$(216).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_3uew2n$($receiver, 0, 9.536743E-7 / 3.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 1, 7.569318E-7 / 3.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 2, 6.007772E-7 / 3.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 3, 9.536743E-7 / 7.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 4, 7.569318E-7 / 7.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 5, 6.007772E-7 / 7.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 6, 9.536743E-7 / 15.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 7, 7.569318E-7 / 15.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 8, 6.007772E-7 / 15.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 9, 9.536743E-7 / 31.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 10, 7.569318E-7 / 31.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 11, 6.007772E-7 / 31.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 12, 9.536743E-7 / 63.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 13, 7.569318E-7 / 63.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 14, 6.007772E-7 / 63.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 15, 9.536743E-7 / 127.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 16, 7.569318E-7 / 127.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 17, 6.007772E-7 / 127.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 18, 9.536743E-7 / 255.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 19, 7.569318E-7 / 255.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 20, 6.007772E-7 / 255.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 21, 9.536743E-7 / 511.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 22, 7.569318E-7 / 511.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 23, 6.007772E-7 / 511.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 24, 9.536743E-7 / 1023.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 25, 7.569318E-7 / 1023.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 26, 6.007772E-7 / 1023.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 27, 9.536743E-7 / 2047.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 28, 7.569318E-7 / 2047.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 29, 6.007772E-7 / 2047.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 30, 9.536743E-7 / 4095.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 31, 7.569318E-7 / 4095.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 32, 6.007772E-7 / 4095.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 33, 9.536743E-7 / 8191.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 34, 7.569318E-7 / 8191.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 35, 6.007772E-7 / 8191.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 36, 9.536743E-7 / 16383.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 37, 7.569318E-7 / 16383.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 38, 6.007772E-7 / 16383.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 39, 9.536743E-7 / 32767.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 40, 7.569318E-7 / 32767.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 41, 6.007772E-7 / 32767.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 42, 9.536743E-7 / 65535.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 43, 7.569318E-7 / 65535.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 44, 6.007772E-7 / 65535.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 45, 9.536743E-7 / 3.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 46, 7.569318E-7 / 3.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 47, 6.007772E-7 / 3.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 48, 9.536743E-7 / 5.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 49, 7.569318E-7 / 5.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 50, 6.007772E-7 / 5.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 51, 9.536743E-7 / 9.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 52, 7.569318E-7 / 9.0);
      this$MiniMp3_0.set_3uew2n$($receiver, 53, 6.007772E-7 / 9.0);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L12_read_scale_info_g_bitalloc_code_tab$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(92 * 1 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_9c14iy$($receiver, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 1, new UByte(toByte(17)));
      this$MiniMp3_0.set_9c14iy$($receiver, 2, new UByte(toByte(3)));
      this$MiniMp3_0.set_9c14iy$($receiver, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 4, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 6, new UByte(toByte(7)));
      this$MiniMp3_0.set_9c14iy$($receiver, 7, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 8, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 9, new UByte(toByte(10)));
      this$MiniMp3_0.set_9c14iy$($receiver, 10, new UByte(toByte(11)));
      this$MiniMp3_0.set_9c14iy$($receiver, 11, new UByte(toByte(12)));
      this$MiniMp3_0.set_9c14iy$($receiver, 12, new UByte(toByte(13)));
      this$MiniMp3_0.set_9c14iy$($receiver, 13, new UByte(toByte(14)));
      this$MiniMp3_0.set_9c14iy$($receiver, 14, new UByte(toByte(15)));
      this$MiniMp3_0.set_9c14iy$($receiver, 15, new UByte(toByte(16)));
      this$MiniMp3_0.set_9c14iy$($receiver, 16, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 17, new UByte(toByte(17)));
      this$MiniMp3_0.set_9c14iy$($receiver, 18, new UByte(toByte(18)));
      this$MiniMp3_0.set_9c14iy$($receiver, 19, new UByte(toByte(3)));
      this$MiniMp3_0.set_9c14iy$($receiver, 20, new UByte(toByte(19)));
      this$MiniMp3_0.set_9c14iy$($receiver, 21, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 22, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 23, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 24, new UByte(toByte(7)));
      this$MiniMp3_0.set_9c14iy$($receiver, 25, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 26, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 27, new UByte(toByte(10)));
      this$MiniMp3_0.set_9c14iy$($receiver, 28, new UByte(toByte(11)));
      this$MiniMp3_0.set_9c14iy$($receiver, 29, new UByte(toByte(12)));
      this$MiniMp3_0.set_9c14iy$($receiver, 30, new UByte(toByte(13)));
      this$MiniMp3_0.set_9c14iy$($receiver, 31, new UByte(toByte(16)));
      this$MiniMp3_0.set_9c14iy$($receiver, 32, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 33, new UByte(toByte(17)));
      this$MiniMp3_0.set_9c14iy$($receiver, 34, new UByte(toByte(18)));
      this$MiniMp3_0.set_9c14iy$($receiver, 35, new UByte(toByte(3)));
      this$MiniMp3_0.set_9c14iy$($receiver, 36, new UByte(toByte(19)));
      this$MiniMp3_0.set_9c14iy$($receiver, 37, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 38, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 39, new UByte(toByte(16)));
      this$MiniMp3_0.set_9c14iy$($receiver, 40, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 41, new UByte(toByte(17)));
      this$MiniMp3_0.set_9c14iy$($receiver, 42, new UByte(toByte(18)));
      this$MiniMp3_0.set_9c14iy$($receiver, 43, new UByte(toByte(16)));
      this$MiniMp3_0.set_9c14iy$($receiver, 44, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 45, new UByte(toByte(17)));
      this$MiniMp3_0.set_9c14iy$($receiver, 46, new UByte(toByte(18)));
      this$MiniMp3_0.set_9c14iy$($receiver, 47, new UByte(toByte(19)));
      this$MiniMp3_0.set_9c14iy$($receiver, 48, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 49, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 50, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 51, new UByte(toByte(7)));
      this$MiniMp3_0.set_9c14iy$($receiver, 52, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 53, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 54, new UByte(toByte(10)));
      this$MiniMp3_0.set_9c14iy$($receiver, 55, new UByte(toByte(11)));
      this$MiniMp3_0.set_9c14iy$($receiver, 56, new UByte(toByte(12)));
      this$MiniMp3_0.set_9c14iy$($receiver, 57, new UByte(toByte(13)));
      this$MiniMp3_0.set_9c14iy$($receiver, 58, new UByte(toByte(14)));
      this$MiniMp3_0.set_9c14iy$($receiver, 59, new UByte(toByte(15)));
      this$MiniMp3_0.set_9c14iy$($receiver, 60, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 61, new UByte(toByte(17)));
      this$MiniMp3_0.set_9c14iy$($receiver, 62, new UByte(toByte(18)));
      this$MiniMp3_0.set_9c14iy$($receiver, 63, new UByte(toByte(3)));
      this$MiniMp3_0.set_9c14iy$($receiver, 64, new UByte(toByte(19)));
      this$MiniMp3_0.set_9c14iy$($receiver, 65, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 66, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 67, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 68, new UByte(toByte(7)));
      this$MiniMp3_0.set_9c14iy$($receiver, 69, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 70, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 71, new UByte(toByte(10)));
      this$MiniMp3_0.set_9c14iy$($receiver, 72, new UByte(toByte(11)));
      this$MiniMp3_0.set_9c14iy$($receiver, 73, new UByte(toByte(12)));
      this$MiniMp3_0.set_9c14iy$($receiver, 74, new UByte(toByte(13)));
      this$MiniMp3_0.set_9c14iy$($receiver, 75, new UByte(toByte(14)));
      this$MiniMp3_0.set_9c14iy$($receiver, 76, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 77, new UByte(toByte(2)));
      this$MiniMp3_0.set_9c14iy$($receiver, 78, new UByte(toByte(3)));
      this$MiniMp3_0.set_9c14iy$($receiver, 79, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 80, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 81, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 82, new UByte(toByte(7)));
      this$MiniMp3_0.set_9c14iy$($receiver, 83, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 84, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 85, new UByte(toByte(10)));
      this$MiniMp3_0.set_9c14iy$($receiver, 86, new UByte(toByte(11)));
      this$MiniMp3_0.set_9c14iy$($receiver, 87, new UByte(toByte(12)));
      this$MiniMp3_0.set_9c14iy$($receiver, 88, new UByte(toByte(13)));
      this$MiniMp3_0.set_9c14iy$($receiver, 89, new UByte(toByte(14)));
      this$MiniMp3_0.set_9c14iy$($receiver, 90, new UByte(toByte(15)));
      this$MiniMp3_0.set_9c14iy$($receiver, 91, new UByte(toByte(16)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_read_side_info_g_scf_long$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array8Array23UByte($this.alloca_zero_za3lpa$(184).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_0, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_0, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_0, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_0, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_0, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_0, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_0, 6, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_0, 7, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_0, 8, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_0, 9, new UByte(toByte(14)));
      this$MiniMp3_0.set_har681$($receiver_0, 10, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_0, 11, new UByte(toByte(20)));
      this$MiniMp3_0.set_har681$($receiver_0, 12, new UByte(toByte(24)));
      this$MiniMp3_0.set_har681$($receiver_0, 13, new UByte(toByte(28)));
      this$MiniMp3_0.set_har681$($receiver_0, 14, new UByte(toByte(32)));
      this$MiniMp3_0.set_har681$($receiver_0, 15, new UByte(toByte(38)));
      this$MiniMp3_0.set_har681$($receiver_0, 16, new UByte(toByte(46)));
      this$MiniMp3_0.set_har681$($receiver_0, 17, new UByte(toByte(52)));
      this$MiniMp3_0.set_har681$($receiver_0, 18, new UByte(toByte(60)));
      this$MiniMp3_0.set_har681$($receiver_0, 19, new UByte(toByte(68)));
      this$MiniMp3_0.set_har681$($receiver_0, 20, new UByte(toByte(58)));
      this$MiniMp3_0.set_har681$($receiver_0, 21, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_0, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 0, $receiver_0);
      var $receiver_1 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_1, 0, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_1, 1, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_1, 2, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_1, 3, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_1, 4, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_1, 5, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_1, 6, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_1, 7, new UByte(toByte(20)));
      this$MiniMp3_0.set_har681$($receiver_1, 8, new UByte(toByte(24)));
      this$MiniMp3_0.set_har681$($receiver_1, 9, new UByte(toByte(28)));
      this$MiniMp3_0.set_har681$($receiver_1, 10, new UByte(toByte(32)));
      this$MiniMp3_0.set_har681$($receiver_1, 11, new UByte(toByte(40)));
      this$MiniMp3_0.set_har681$($receiver_1, 12, new UByte(toByte(48)));
      this$MiniMp3_0.set_har681$($receiver_1, 13, new UByte(toByte(56)));
      this$MiniMp3_0.set_har681$($receiver_1, 14, new UByte(toByte(64)));
      this$MiniMp3_0.set_har681$($receiver_1, 15, new UByte(toByte(76)));
      this$MiniMp3_0.set_har681$($receiver_1, 16, new UByte(toByte(90)));
      this$MiniMp3_0.set_har681$($receiver_1, 17, new UByte(toByte(2)));
      this$MiniMp3_0.set_har681$($receiver_1, 18, new UByte(toByte(2)));
      this$MiniMp3_0.set_har681$($receiver_1, 19, new UByte(toByte(2)));
      this$MiniMp3_0.set_har681$($receiver_1, 20, new UByte(toByte(2)));
      this$MiniMp3_0.set_har681$($receiver_1, 21, new UByte(toByte(2)));
      this$MiniMp3_0.set_har681$($receiver_1, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 1, $receiver_1);
      var $receiver_2 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_2, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_2, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_2, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_2, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_2, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_2, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_2, 6, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_2, 7, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_2, 8, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_2, 9, new UByte(toByte(14)));
      this$MiniMp3_0.set_har681$($receiver_2, 10, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_2, 11, new UByte(toByte(20)));
      this$MiniMp3_0.set_har681$($receiver_2, 12, new UByte(toByte(24)));
      this$MiniMp3_0.set_har681$($receiver_2, 13, new UByte(toByte(28)));
      this$MiniMp3_0.set_har681$($receiver_2, 14, new UByte(toByte(32)));
      this$MiniMp3_0.set_har681$($receiver_2, 15, new UByte(toByte(38)));
      this$MiniMp3_0.set_har681$($receiver_2, 16, new UByte(toByte(46)));
      this$MiniMp3_0.set_har681$($receiver_2, 17, new UByte(toByte(52)));
      this$MiniMp3_0.set_har681$($receiver_2, 18, new UByte(toByte(60)));
      this$MiniMp3_0.set_har681$($receiver_2, 19, new UByte(toByte(68)));
      this$MiniMp3_0.set_har681$($receiver_2, 20, new UByte(toByte(58)));
      this$MiniMp3_0.set_har681$($receiver_2, 21, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_2, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 2, $receiver_2);
      var $receiver_3 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_3, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_3, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_3, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_3, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_3, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_3, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_3, 6, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_3, 7, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_3, 8, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_3, 9, new UByte(toByte(14)));
      this$MiniMp3_0.set_har681$($receiver_3, 10, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_3, 11, new UByte(toByte(18)));
      this$MiniMp3_0.set_har681$($receiver_3, 12, new UByte(toByte(22)));
      this$MiniMp3_0.set_har681$($receiver_3, 13, new UByte(toByte(26)));
      this$MiniMp3_0.set_har681$($receiver_3, 14, new UByte(toByte(32)));
      this$MiniMp3_0.set_har681$($receiver_3, 15, new UByte(toByte(38)));
      this$MiniMp3_0.set_har681$($receiver_3, 16, new UByte(toByte(46)));
      this$MiniMp3_0.set_har681$($receiver_3, 17, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_3, 18, new UByte(toByte(62)));
      this$MiniMp3_0.set_har681$($receiver_3, 19, new UByte(toByte(70)));
      this$MiniMp3_0.set_har681$($receiver_3, 20, new UByte(toByte(76)));
      this$MiniMp3_0.set_har681$($receiver_3, 21, new UByte(toByte(36)));
      this$MiniMp3_0.set_har681$($receiver_3, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 3, $receiver_3);
      var $receiver_4 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_4, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_4, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_4, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_4, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_4, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_4, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_4, 6, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_4, 7, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_4, 8, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_4, 9, new UByte(toByte(14)));
      this$MiniMp3_0.set_har681$($receiver_4, 10, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_4, 11, new UByte(toByte(20)));
      this$MiniMp3_0.set_har681$($receiver_4, 12, new UByte(toByte(24)));
      this$MiniMp3_0.set_har681$($receiver_4, 13, new UByte(toByte(28)));
      this$MiniMp3_0.set_har681$($receiver_4, 14, new UByte(toByte(32)));
      this$MiniMp3_0.set_har681$($receiver_4, 15, new UByte(toByte(38)));
      this$MiniMp3_0.set_har681$($receiver_4, 16, new UByte(toByte(46)));
      this$MiniMp3_0.set_har681$($receiver_4, 17, new UByte(toByte(52)));
      this$MiniMp3_0.set_har681$($receiver_4, 18, new UByte(toByte(60)));
      this$MiniMp3_0.set_har681$($receiver_4, 19, new UByte(toByte(68)));
      this$MiniMp3_0.set_har681$($receiver_4, 20, new UByte(toByte(58)));
      this$MiniMp3_0.set_har681$($receiver_4, 21, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_4, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 4, $receiver_4);
      var $receiver_5 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_5, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_5, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_5, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_5, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_5, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_5, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_5, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_5, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_5, 8, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_5, 9, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_5, 10, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_5, 11, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_5, 12, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_5, 13, new UByte(toByte(20)));
      this$MiniMp3_0.set_har681$($receiver_5, 14, new UByte(toByte(24)));
      this$MiniMp3_0.set_har681$($receiver_5, 15, new UByte(toByte(28)));
      this$MiniMp3_0.set_har681$($receiver_5, 16, new UByte(toByte(34)));
      this$MiniMp3_0.set_har681$($receiver_5, 17, new UByte(toByte(42)));
      this$MiniMp3_0.set_har681$($receiver_5, 18, new UByte(toByte(50)));
      this$MiniMp3_0.set_har681$($receiver_5, 19, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_5, 20, new UByte(toByte(76)));
      this$MiniMp3_0.set_har681$($receiver_5, 21, new UByte(toByte(158)));
      this$MiniMp3_0.set_har681$($receiver_5, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 5, $receiver_5);
      var $receiver_6 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_6, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_6, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_6, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_6, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_6, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_6, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_6, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_6, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_6, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_6, 9, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_6, 10, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_6, 11, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_6, 12, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_6, 13, new UByte(toByte(18)));
      this$MiniMp3_0.set_har681$($receiver_6, 14, new UByte(toByte(22)));
      this$MiniMp3_0.set_har681$($receiver_6, 15, new UByte(toByte(28)));
      this$MiniMp3_0.set_har681$($receiver_6, 16, new UByte(toByte(34)));
      this$MiniMp3_0.set_har681$($receiver_6, 17, new UByte(toByte(40)));
      this$MiniMp3_0.set_har681$($receiver_6, 18, new UByte(toByte(46)));
      this$MiniMp3_0.set_har681$($receiver_6, 19, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_6, 20, new UByte(toByte(54)));
      this$MiniMp3_0.set_har681$($receiver_6, 21, new UByte(toByte(192)));
      this$MiniMp3_0.set_har681$($receiver_6, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 6, $receiver_6);
      var $receiver_7 = new Array23UByte(this$MiniMp3_0.alloca_zero_za3lpa$(23).ptr);
      this$MiniMp3_0.set_har681$($receiver_7, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_7, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_7, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_7, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_7, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_7, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_har681$($receiver_7, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_7, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_har681$($receiver_7, 8, new UByte(toByte(8)));
      this$MiniMp3_0.set_har681$($receiver_7, 9, new UByte(toByte(10)));
      this$MiniMp3_0.set_har681$($receiver_7, 10, new UByte(toByte(12)));
      this$MiniMp3_0.set_har681$($receiver_7, 11, new UByte(toByte(16)));
      this$MiniMp3_0.set_har681$($receiver_7, 12, new UByte(toByte(20)));
      this$MiniMp3_0.set_har681$($receiver_7, 13, new UByte(toByte(24)));
      this$MiniMp3_0.set_har681$($receiver_7, 14, new UByte(toByte(30)));
      this$MiniMp3_0.set_har681$($receiver_7, 15, new UByte(toByte(38)));
      this$MiniMp3_0.set_har681$($receiver_7, 16, new UByte(toByte(46)));
      this$MiniMp3_0.set_har681$($receiver_7, 17, new UByte(toByte(56)));
      this$MiniMp3_0.set_har681$($receiver_7, 18, new UByte(toByte(68)));
      this$MiniMp3_0.set_har681$($receiver_7, 19, new UByte(toByte(84)));
      this$MiniMp3_0.set_har681$($receiver_7, 20, new UByte(toByte(102)));
      this$MiniMp3_0.set_har681$($receiver_7, 21, new UByte(toByte(26)));
      this$MiniMp3_0.set_har681$($receiver_7, 22, new UByte(toByte(0)));
      this$MiniMp3_0.set_6iwf9i$($receiver, 7, $receiver_7);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_read_side_info_g_scf_short$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array8Array40UByte($this.alloca_zero_za3lpa$(320).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_0, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 9, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 10, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 12, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 13, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 14, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 15, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 16, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 17, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 19, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 21, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 22, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 23, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 24, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 25, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 26, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 27, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 28, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 29, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 30, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 31, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 32, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 33, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 34, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 35, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 36, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 37, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 38, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 0, $receiver_0);
      var $receiver_1 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_1, 0, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 1, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 2, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 3, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 4, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 5, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 6, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 7, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 8, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 9, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 10, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 11, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 12, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 13, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 14, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 15, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 16, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 17, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 18, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 19, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 20, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 21, new UByte(toByte(28)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 22, new UByte(toByte(28)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 23, new UByte(toByte(28)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 24, new UByte(toByte(36)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 25, new UByte(toByte(36)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 26, new UByte(toByte(36)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 27, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 28, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 29, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 30, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 31, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 32, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 33, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 34, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 35, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 36, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 37, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 38, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 1, $receiver_1);
      var $receiver_2 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_2, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 9, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 10, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 14, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 15, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 16, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 17, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 18, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 19, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 20, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 21, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 22, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 23, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 24, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 25, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 26, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 27, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 28, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 29, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 30, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 31, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 32, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 33, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 34, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 35, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 36, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 37, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 38, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 2, $receiver_2);
      var $receiver_3 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_3, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 9, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 10, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 12, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 13, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 14, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 15, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 16, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 17, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 19, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 21, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 22, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 23, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 24, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 25, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 26, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 27, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 28, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 29, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 30, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 31, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 32, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 33, new UByte(toByte(44)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 34, new UByte(toByte(44)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 35, new UByte(toByte(44)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 36, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 37, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 38, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 3, $receiver_3);
      var $receiver_4 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_4, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 9, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 10, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 12, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 13, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 14, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 15, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 16, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 17, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 19, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 21, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 22, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 23, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 24, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 25, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 26, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 27, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 28, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 29, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 30, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 31, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 32, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 33, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 34, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 35, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 36, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 37, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 38, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 4, $receiver_4);
      var $receiver_5 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_5, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 9, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 10, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 11, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 14, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 15, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 16, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 17, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 18, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 19, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 20, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 21, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 22, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 23, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 24, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 25, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 26, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 27, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 28, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 29, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 30, new UByte(toByte(22)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 31, new UByte(toByte(22)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 32, new UByte(toByte(22)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 33, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 34, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 35, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 36, new UByte(toByte(56)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 37, new UByte(toByte(56)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 38, new UByte(toByte(56)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 5, $receiver_5);
      var $receiver_6 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_6, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 9, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 10, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 11, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 14, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 15, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 16, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 17, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 18, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 19, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 20, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 21, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 22, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 23, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 24, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 25, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 26, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 27, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 28, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 29, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 30, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 31, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 32, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 33, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 34, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 35, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 36, new UByte(toByte(66)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 37, new UByte(toByte(66)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 38, new UByte(toByte(66)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 6, $receiver_6);
      var $receiver_7 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_7, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 7, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 9, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 10, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 11, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 14, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 15, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 16, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 17, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 19, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 21, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 22, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 23, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 24, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 25, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 26, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 27, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 28, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 29, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 30, new UByte(toByte(34)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 31, new UByte(toByte(34)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 32, new UByte(toByte(34)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 33, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 34, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 35, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 36, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 37, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 38, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 7, $receiver_7);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_read_side_info_g_scf_mixed$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array8Array40UByte($this.alloca_zero_za3lpa$(320).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_0, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 9, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 10, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 11, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 12, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 13, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 14, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 15, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 16, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 17, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 18, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 19, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 20, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 21, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 22, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 23, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 24, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 25, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 26, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 27, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 28, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 29, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 30, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 31, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 32, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 33, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 34, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 35, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_0, 36, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 0, $receiver_0);
      var $receiver_1 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_1, 0, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 1, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 2, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 6, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 7, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 8, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 9, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 10, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 11, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 12, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 13, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 14, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 15, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 16, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 17, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 18, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 19, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 20, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 21, new UByte(toByte(28)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 22, new UByte(toByte(28)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 23, new UByte(toByte(28)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 24, new UByte(toByte(36)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 25, new UByte(toByte(36)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 26, new UByte(toByte(36)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 27, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 28, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 29, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 30, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 31, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 32, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 33, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 34, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 35, new UByte(toByte(2)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 36, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 37, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 38, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_1, 39, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 1, $receiver_1);
      var $receiver_2 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_2, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 9, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 10, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 12, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 13, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 14, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 15, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 16, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 17, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 18, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 19, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 20, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 21, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 22, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 23, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 24, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 25, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 26, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 27, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 28, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 29, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 30, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 31, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 32, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 33, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 34, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 35, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_2, 36, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 2, $receiver_2);
      var $receiver_3 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_3, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 9, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 10, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 11, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 12, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 13, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 14, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 15, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 16, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 17, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 18, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 19, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 20, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 21, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 22, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 23, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 24, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 25, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 26, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 27, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 28, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 29, new UByte(toByte(32)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 30, new UByte(toByte(44)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 31, new UByte(toByte(44)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 32, new UByte(toByte(44)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 33, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 34, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 35, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_3, 36, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 3, $receiver_3);
      var $receiver_4 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_4, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 1, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 3, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 5, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 9, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 10, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 11, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 12, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 13, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 14, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 15, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 16, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 17, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 18, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 19, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 20, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 21, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 22, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 23, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 24, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 25, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 26, new UByte(toByte(24)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 27, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 28, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 29, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 30, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 31, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 32, new UByte(toByte(40)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 33, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 34, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 35, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_4, 36, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 4, $receiver_4);
      var $receiver_5 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_5, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 9, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 10, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 14, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 15, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 16, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 17, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 18, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 19, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 21, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 22, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 23, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 24, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 25, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 26, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 27, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 28, new UByte(toByte(18)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 29, new UByte(toByte(22)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 30, new UByte(toByte(22)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 31, new UByte(toByte(22)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 32, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 33, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 34, new UByte(toByte(30)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 35, new UByte(toByte(56)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 36, new UByte(toByte(56)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 37, new UByte(toByte(56)));
      this$MiniMp3_0.set_sc99eu$($receiver_5, 38, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 5, $receiver_5);
      var $receiver_6 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_6, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 9, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 10, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 14, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 15, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 16, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 17, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 18, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 19, new UByte(toByte(10)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 21, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 22, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 23, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 24, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 25, new UByte(toByte(14)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 26, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 27, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 28, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 29, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 30, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 31, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 32, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 33, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 34, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 35, new UByte(toByte(66)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 36, new UByte(toByte(66)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 37, new UByte(toByte(66)));
      this$MiniMp3_0.set_sc99eu$($receiver_6, 38, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 6, $receiver_6);
      var $receiver_7 = new Array40UByte(this$MiniMp3_0.alloca_zero_za3lpa$(40).ptr);
      this$MiniMp3_0.set_sc99eu$($receiver_7, 0, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 1, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 4, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 5, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 7, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 9, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 10, new UByte(toByte(4)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 12, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 14, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 15, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 16, new UByte(toByte(8)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 17, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 19, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 20, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 21, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 22, new UByte(toByte(16)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 23, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 24, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 25, new UByte(toByte(20)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 26, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 27, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 28, new UByte(toByte(26)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 29, new UByte(toByte(34)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 30, new UByte(toByte(34)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 31, new UByte(toByte(34)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 32, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 33, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 34, new UByte(toByte(42)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 35, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 36, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 37, new UByte(toByte(12)));
      this$MiniMp3_0.set_sc99eu$($receiver_7, 38, new UByte(toByte(0)));
      this$MiniMp3_0.set_2jin00$($receiver, 7, $receiver_7);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_ldexp_q2_g_expfrac$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array4Float($this.alloca_zero_za3lpa$(16).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_dgeeyg$($receiver, 0, 9.313226E-10);
      this$MiniMp3_0.set_dgeeyg$($receiver, 1, 7.831458E-10);
      this$MiniMp3_0.set_dgeeyg$($receiver, 2, 6.585445E-10);
      this$MiniMp3_0.set_dgeeyg$($receiver, 3, 5.537677E-10);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_decode_scalefactors_g_scf_partitions$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array3Array28UByte($this.alloca_zero_za3lpa$(84).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array28UByte(this$MiniMp3_0.alloca_zero_za3lpa$(28).ptr);
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 0, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 1, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 2, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 3, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 5, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 6, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 7, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 9, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 10, new UByte(toByte(7)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 11, new UByte(toByte(3)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 12, new UByte(toByte(11)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 13, new UByte(toByte(10)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 14, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 15, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 16, new UByte(toByte(7)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 17, new UByte(toByte(7)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 18, new UByte(toByte(7)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 19, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 20, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 21, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 22, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 23, new UByte(toByte(3)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 24, new UByte(toByte(8)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 25, new UByte(toByte(8)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 26, new UByte(toByte(5)));
      this$MiniMp3_0.set_i8fw4c$($receiver_0, 27, new UByte(toByte(0)));
      this$MiniMp3_0.set_piczqv$($receiver, 0, $receiver_0);
      var $receiver_1 = new Array28UByte(this$MiniMp3_0.alloca_zero_za3lpa$(28).ptr);
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 0, new UByte(toByte(8)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 1, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 3, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 4, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 5, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 6, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 7, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 8, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 9, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 10, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 12, new UByte(toByte(15)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 13, new UByte(toByte(18)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 14, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 15, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 16, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 17, new UByte(toByte(15)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 19, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 20, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 21, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 22, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 23, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 24, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 25, new UByte(toByte(18)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 26, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_1, 27, new UByte(toByte(0)));
      this$MiniMp3_0.set_piczqv$($receiver, 1, $receiver_1);
      var $receiver_2 = new Array28UByte(this$MiniMp3_0.alloca_zero_za3lpa$(28).ptr);
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 0, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 1, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 2, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 3, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 4, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 5, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 6, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 7, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 8, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 9, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 10, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 11, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 12, new UByte(toByte(18)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 13, new UByte(toByte(18)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 14, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 15, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 16, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 17, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 18, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 19, new UByte(toByte(0)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 20, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 21, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 22, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 23, new UByte(toByte(6)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 24, new UByte(toByte(15)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 25, new UByte(toByte(12)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 26, new UByte(toByte(9)));
      this$MiniMp3_0.set_i8fw4c$($receiver_2, 27, new UByte(toByte(0)));
      this$MiniMp3_0.set_piczqv$($receiver, 2, $receiver_2);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_decode_scalefactors_g_scfc_decode$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array16UByte($this.alloca_zero_za3lpa$(16).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_c23xzx$($receiver, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_c23xzx$($receiver, 1, new UByte(toByte(1)));
      this$MiniMp3_0.set_c23xzx$($receiver, 2, new UByte(toByte(2)));
      this$MiniMp3_0.set_c23xzx$($receiver, 3, new UByte(toByte(3)));
      this$MiniMp3_0.set_c23xzx$($receiver, 4, new UByte(toByte(12)));
      this$MiniMp3_0.set_c23xzx$($receiver, 5, new UByte(toByte(5)));
      this$MiniMp3_0.set_c23xzx$($receiver, 6, new UByte(toByte(6)));
      this$MiniMp3_0.set_c23xzx$($receiver, 7, new UByte(toByte(7)));
      this$MiniMp3_0.set_c23xzx$($receiver, 8, new UByte(toByte(9)));
      this$MiniMp3_0.set_c23xzx$($receiver, 9, new UByte(toByte(10)));
      this$MiniMp3_0.set_c23xzx$($receiver, 10, new UByte(toByte(11)));
      this$MiniMp3_0.set_c23xzx$($receiver, 11, new UByte(toByte(13)));
      this$MiniMp3_0.set_c23xzx$($receiver, 12, new UByte(toByte(14)));
      this$MiniMp3_0.set_c23xzx$($receiver, 13, new UByte(toByte(15)));
      this$MiniMp3_0.set_c23xzx$($receiver, 14, new UByte(toByte(18)));
      this$MiniMp3_0.set_c23xzx$($receiver, 15, new UByte(toByte(19)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_decode_scalefactors_g_mod$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array24UByte($this.alloca_zero_za3lpa$(24).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_hhhpsw$($receiver, 0, new UByte(toByte(5)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 1, new UByte(toByte(5)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 2, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 3, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 4, new UByte(toByte(5)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 5, new UByte(toByte(5)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 6, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 7, new UByte(toByte(1)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 8, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 9, new UByte(toByte(3)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 10, new UByte(toByte(1)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 11, new UByte(toByte(1)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 12, new UByte(toByte(5)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 13, new UByte(toByte(6)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 14, new UByte(toByte(6)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 15, new UByte(toByte(1)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 16, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 17, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 18, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 19, new UByte(toByte(1)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 20, new UByte(toByte(4)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 21, new UByte(toByte(3)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 22, new UByte(toByte(1)));
      this$MiniMp3_0.set_hhhpsw$($receiver, 23, new UByte(toByte(1)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_decode_scalefactors_g_preamp$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array10UByte($this.alloca_zero_za3lpa$(10).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_axooir$($receiver, 0, new UByte(toByte(1)));
      this$MiniMp3_0.set_axooir$($receiver, 1, new UByte(toByte(1)));
      this$MiniMp3_0.set_axooir$($receiver, 2, new UByte(toByte(1)));
      this$MiniMp3_0.set_axooir$($receiver, 3, new UByte(toByte(1)));
      this$MiniMp3_0.set_axooir$($receiver, 4, new UByte(toByte(2)));
      this$MiniMp3_0.set_axooir$($receiver, 5, new UByte(toByte(2)));
      this$MiniMp3_0.set_axooir$($receiver, 6, new UByte(toByte(3)));
      this$MiniMp3_0.set_axooir$($receiver, 7, new UByte(toByte(3)));
      this$MiniMp3_0.set_axooir$($receiver, 8, new UByte(toByte(3)));
      this$MiniMp3_0.set_axooir$($receiver, 9, new UByte(toByte(2)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_huffman_tabs$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(2164 * 2 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_yo5o8m$($receiver, 0, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 3, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 4, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 5, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 6, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 7, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 8, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 9, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 10, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 11, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 12, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 13, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 14, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 15, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 16, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 17, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 18, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 19, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 20, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 21, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 22, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 23, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 24, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 25, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 26, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 27, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 28, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 29, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 30, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 31, toShort(0));
      this$MiniMp3_0.set_yo5o8m$($receiver, 32, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 33, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 34, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 35, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 36, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 37, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 38, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 39, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 40, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 41, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 42, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 43, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 44, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 45, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 46, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 47, toShort(513));
      this$MiniMp3_0.set_yo5o8m$($receiver, 48, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 49, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 50, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 51, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 52, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 53, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 54, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 55, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 56, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 57, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 58, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 59, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 60, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 61, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 62, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 63, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 64, toShort(L_255.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 65, toShort(1313));
      this$MiniMp3_0.set_yo5o8m$($receiver, 66, toShort(1298));
      this$MiniMp3_0.set_yo5o8m$($receiver, 67, toShort(1282));
      this$MiniMp3_0.set_yo5o8m$($receiver, 68, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 69, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 70, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 71, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 72, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 73, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 74, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 75, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 76, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 77, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 78, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 79, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 80, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 81, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 82, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 83, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 84, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 85, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 86, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 87, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 88, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 89, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 90, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 91, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 92, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 93, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 94, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 95, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 96, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 97, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 98, toShort(L_255.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 99, toShort(1313));
      this$MiniMp3_0.set_yo5o8m$($receiver, 100, toShort(1298));
      this$MiniMp3_0.set_yo5o8m$($receiver, 101, toShort(1282));
      this$MiniMp3_0.set_yo5o8m$($receiver, 102, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 103, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 104, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 105, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 106, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 107, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 108, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 109, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 110, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 111, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 112, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 113, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 114, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 115, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 116, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 117, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 118, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 119, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 120, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 121, toShort(528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 122, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 123, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 124, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 125, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 126, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 127, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 128, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 129, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 130, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 131, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 132, toShort(L_253.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 133, toShort(L_318.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 134, toShort(L_351.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 135, toShort(L_367.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 136, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 137, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 138, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 139, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 140, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 141, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 142, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 143, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 144, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 145, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 146, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 147, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 148, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 149, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 150, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 151, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 152, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 153, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 154, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 155, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 156, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 157, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 158, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 159, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 160, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 161, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 162, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 163, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 164, toShort(819));
      this$MiniMp3_0.set_yo5o8m$($receiver, 165, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 166, toShort(547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 167, toShort(547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 168, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 169, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 170, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 171, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 172, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 173, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 174, toShort(515));
      this$MiniMp3_0.set_yo5o8m$($receiver, 175, toShort(546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 176, toShort(289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 177, toShort(274));
      this$MiniMp3_0.set_yo5o8m$($receiver, 178, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 179, toShort(258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 180, toShort(L_254.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 181, toShort(L_287.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 182, toShort(1329));
      this$MiniMp3_0.set_yo5o8m$($receiver, 183, toShort(1299));
      this$MiniMp3_0.set_yo5o8m$($receiver, 184, toShort(1314));
      this$MiniMp3_0.set_yo5o8m$($receiver, 185, toShort(1312));
      this$MiniMp3_0.set_yo5o8m$($receiver, 186, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 187, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 188, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 189, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 190, toShort(1026));
      this$MiniMp3_0.set_yo5o8m$($receiver, 191, toShort(1026));
      this$MiniMp3_0.set_yo5o8m$($receiver, 192, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 193, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 194, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 195, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 196, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 197, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 198, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 199, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 200, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 201, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 202, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 203, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 204, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 205, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 206, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 207, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 208, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 209, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 210, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 211, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 212, toShort(563));
      this$MiniMp3_0.set_yo5o8m$($receiver, 213, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 214, toShort(306));
      this$MiniMp3_0.set_yo5o8m$($receiver, 215, toShort(306));
      this$MiniMp3_0.set_yo5o8m$($receiver, 216, toShort(291));
      this$MiniMp3_0.set_yo5o8m$($receiver, 217, toShort(259));
      this$MiniMp3_0.set_yo5o8m$($receiver, 218, toShort(L_252.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 219, toShort(L_413.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 220, toShort(L_477.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 221, toShort(L_542.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 222, toShort(1298));
      this$MiniMp3_0.set_yo5o8m$($receiver, 223, toShort(L_575.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 224, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 225, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 226, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 227, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 228, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 229, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 230, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 231, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 232, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 233, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 234, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 235, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 236, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 237, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 238, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 239, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 240, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 241, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 242, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 243, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 244, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 245, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 246, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 247, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 248, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 249, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 250, toShort(L_383.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 251, toShort(L_399.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 252, toShort(1107));
      this$MiniMp3_0.set_yo5o8m$($receiver, 253, toShort(1092));
      this$MiniMp3_0.set_yo5o8m$($receiver, 254, toShort(1106));
      this$MiniMp3_0.set_yo5o8m$($receiver, 255, toShort(1061));
      this$MiniMp3_0.set_yo5o8m$($receiver, 256, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 257, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 258, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 259, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 260, toShort(1104));
      this$MiniMp3_0.set_yo5o8m$($receiver, 261, toShort(1091));
      this$MiniMp3_0.set_yo5o8m$($receiver, 262, toShort(773));
      this$MiniMp3_0.set_yo5o8m$($receiver, 263, toShort(773));
      this$MiniMp3_0.set_yo5o8m$($receiver, 264, toShort(1076));
      this$MiniMp3_0.set_yo5o8m$($receiver, 265, toShort(1075));
      this$MiniMp3_0.set_yo5o8m$($receiver, 266, toShort(341));
      this$MiniMp3_0.set_yo5o8m$($receiver, 267, toShort(340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 268, toShort(325));
      this$MiniMp3_0.set_yo5o8m$($receiver, 269, toShort(309));
      this$MiniMp3_0.set_yo5o8m$($receiver, 270, toShort(834));
      this$MiniMp3_0.set_yo5o8m$($receiver, 271, toShort(804));
      this$MiniMp3_0.set_yo5o8m$($receiver, 272, toShort(577));
      this$MiniMp3_0.set_yo5o8m$($receiver, 273, toShort(577));
      this$MiniMp3_0.set_yo5o8m$($receiver, 274, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 275, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 276, toShort(516));
      this$MiniMp3_0.set_yo5o8m$($receiver, 277, toShort(516));
      this$MiniMp3_0.set_yo5o8m$($receiver, 278, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 279, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 280, toShort(803));
      this$MiniMp3_0.set_yo5o8m$($receiver, 281, toShort(816));
      this$MiniMp3_0.set_yo5o8m$($receiver, 282, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 283, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 284, toShort(531));
      this$MiniMp3_0.set_yo5o8m$($receiver, 285, toShort(531));
      this$MiniMp3_0.set_yo5o8m$($receiver, 286, toShort(515));
      this$MiniMp3_0.set_yo5o8m$($receiver, 287, toShort(546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 288, toShort(289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 289, toShort(289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 290, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 291, toShort(258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 292, toShort(L_252.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 293, toShort(L_429.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 294, toShort(L_493.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 295, toShort(L_559.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 296, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 297, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 298, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 299, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 300, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 301, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 302, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 303, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 304, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 305, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 306, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 307, toShort(529));
      this$MiniMp3_0.set_yo5o8m$($receiver, 308, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 309, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 310, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 311, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 312, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 313, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 314, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 315, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 316, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 317, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 318, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 319, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 320, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 321, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 322, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 323, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 324, toShort(L_382.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 325, toShort(1077));
      this$MiniMp3_0.set_yo5o8m$($receiver, 326, toShort(L_415.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 327, toShort(1106));
      this$MiniMp3_0.set_yo5o8m$($receiver, 328, toShort(1061));
      this$MiniMp3_0.set_yo5o8m$($receiver, 329, toShort(1104));
      this$MiniMp3_0.set_yo5o8m$($receiver, 330, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 331, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 332, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 333, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 334, toShort(1091));
      this$MiniMp3_0.set_yo5o8m$($receiver, 335, toShort(1076));
      this$MiniMp3_0.set_yo5o8m$($receiver, 336, toShort(1029));
      this$MiniMp3_0.set_yo5o8m$($receiver, 337, toShort(1075));
      this$MiniMp3_0.set_yo5o8m$($receiver, 338, toShort(834));
      this$MiniMp3_0.set_yo5o8m$($receiver, 339, toShort(834));
      this$MiniMp3_0.set_yo5o8m$($receiver, 340, toShort(597));
      this$MiniMp3_0.set_yo5o8m$($receiver, 341, toShort(581));
      this$MiniMp3_0.set_yo5o8m$($receiver, 342, toShort(340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 343, toShort(340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 344, toShort(339));
      this$MiniMp3_0.set_yo5o8m$($receiver, 345, toShort(324));
      this$MiniMp3_0.set_yo5o8m$($receiver, 346, toShort(804));
      this$MiniMp3_0.set_yo5o8m$($receiver, 347, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 348, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 349, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 350, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 351, toShort(772));
      this$MiniMp3_0.set_yo5o8m$($receiver, 352, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 353, toShort(803));
      this$MiniMp3_0.set_yo5o8m$($receiver, 354, toShort(817));
      this$MiniMp3_0.set_yo5o8m$($receiver, 355, toShort(787));
      this$MiniMp3_0.set_yo5o8m$($receiver, 356, toShort(816));
      this$MiniMp3_0.set_yo5o8m$($receiver, 357, toShort(771));
      this$MiniMp3_0.set_yo5o8m$($receiver, 358, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 359, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 360, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 361, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 362, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 363, toShort(258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 364, toShort(L_253.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 365, toShort(L_349.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 366, toShort(L_414.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 367, toShort(L_447.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 368, toShort(L_463.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 369, toShort(1329));
      this$MiniMp3_0.set_yo5o8m$($receiver, 370, toShort(1299));
      this$MiniMp3_0.set_yo5o8m$($receiver, 371, toShort(L_479.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 372, toShort(1314));
      this$MiniMp3_0.set_yo5o8m$($receiver, 373, toShort(1312));
      this$MiniMp3_0.set_yo5o8m$($receiver, 374, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 375, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 376, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 377, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 378, toShort(1026));
      this$MiniMp3_0.set_yo5o8m$($receiver, 379, toShort(1026));
      this$MiniMp3_0.set_yo5o8m$($receiver, 380, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 381, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 382, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 383, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 384, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 385, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 386, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 387, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 388, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 389, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 390, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 391, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 392, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 393, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 394, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 395, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 396, toShort(L_319.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 397, toShort(851));
      this$MiniMp3_0.set_yo5o8m$($receiver, 398, toShort(821));
      this$MiniMp3_0.set_yo5o8m$($receiver, 399, toShort(L_335.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 400, toShort(836));
      this$MiniMp3_0.set_yo5o8m$($receiver, 401, toShort(850));
      this$MiniMp3_0.set_yo5o8m$($receiver, 402, toShort(805));
      this$MiniMp3_0.set_yo5o8m$($receiver, 403, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 404, toShort(341));
      this$MiniMp3_0.set_yo5o8m$($receiver, 405, toShort(340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 406, toShort(325));
      this$MiniMp3_0.set_yo5o8m$($receiver, 407, toShort(336));
      this$MiniMp3_0.set_yo5o8m$($receiver, 408, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 409, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 410, toShort(579));
      this$MiniMp3_0.set_yo5o8m$($receiver, 411, toShort(579));
      this$MiniMp3_0.set_yo5o8m$($receiver, 412, toShort(564));
      this$MiniMp3_0.set_yo5o8m$($receiver, 413, toShort(564));
      this$MiniMp3_0.set_yo5o8m$($receiver, 414, toShort(773));
      this$MiniMp3_0.set_yo5o8m$($receiver, 415, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 416, toShort(578));
      this$MiniMp3_0.set_yo5o8m$($receiver, 417, toShort(548));
      this$MiniMp3_0.set_yo5o8m$($receiver, 418, toShort(563));
      this$MiniMp3_0.set_yo5o8m$($receiver, 419, toShort(516));
      this$MiniMp3_0.set_yo5o8m$($receiver, 420, toShort(321));
      this$MiniMp3_0.set_yo5o8m$($receiver, 421, toShort(276));
      this$MiniMp3_0.set_yo5o8m$($receiver, 422, toShort(306));
      this$MiniMp3_0.set_yo5o8m$($receiver, 423, toShort(291));
      this$MiniMp3_0.set_yo5o8m$($receiver, 424, toShort(304));
      this$MiniMp3_0.set_yo5o8m$($receiver, 425, toShort(259));
      this$MiniMp3_0.set_yo5o8m$($receiver, 426, toShort(L_251.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 427, toShort(L_572.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 428, toShort(L_733.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 429, toShort(L_830.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 430, toShort(L_863.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 431, toShort(L_879.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 432, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 433, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 434, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 435, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 436, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 437, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 438, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 439, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 440, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 441, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 442, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 443, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 444, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 445, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 446, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 447, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 448, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 449, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 450, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 451, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 452, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 453, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 454, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 455, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 456, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 457, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 458, toShort(L_511.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 459, toShort(L_527.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 460, toShort(L_543.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 461, toShort(1396));
      this$MiniMp3_0.set_yo5o8m$($receiver, 462, toShort(1351));
      this$MiniMp3_0.set_yo5o8m$($receiver, 463, toShort(1381));
      this$MiniMp3_0.set_yo5o8m$($receiver, 464, toShort(1366));
      this$MiniMp3_0.set_yo5o8m$($receiver, 465, toShort(1395));
      this$MiniMp3_0.set_yo5o8m$($receiver, 466, toShort(1335));
      this$MiniMp3_0.set_yo5o8m$($receiver, 467, toShort(1380));
      this$MiniMp3_0.set_yo5o8m$($receiver, 468, toShort(L_559.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 469, toShort(1334));
      this$MiniMp3_0.set_yo5o8m$($receiver, 470, toShort(1138));
      this$MiniMp3_0.set_yo5o8m$($receiver, 471, toShort(1138));
      this$MiniMp3_0.set_yo5o8m$($receiver, 472, toShort(1063));
      this$MiniMp3_0.set_yo5o8m$($receiver, 473, toShort(1063));
      this$MiniMp3_0.set_yo5o8m$($receiver, 474, toShort(1350));
      this$MiniMp3_0.set_yo5o8m$($receiver, 475, toShort(1392));
      this$MiniMp3_0.set_yo5o8m$($receiver, 476, toShort(1031));
      this$MiniMp3_0.set_yo5o8m$($receiver, 477, toShort(1031));
      this$MiniMp3_0.set_yo5o8m$($receiver, 478, toShort(1062));
      this$MiniMp3_0.set_yo5o8m$($receiver, 479, toShort(1062));
      this$MiniMp3_0.set_yo5o8m$($receiver, 480, toShort(1364));
      this$MiniMp3_0.set_yo5o8m$($receiver, 481, toShort(1363));
      this$MiniMp3_0.set_yo5o8m$($receiver, 482, toShort(1120));
      this$MiniMp3_0.set_yo5o8m$($receiver, 483, toShort(1120));
      this$MiniMp3_0.set_yo5o8m$($receiver, 484, toShort(1333));
      this$MiniMp3_0.set_yo5o8m$($receiver, 485, toShort(1348));
      this$MiniMp3_0.set_yo5o8m$($receiver, 486, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 487, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 488, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 489, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 490, toShort(375));
      this$MiniMp3_0.set_yo5o8m$($receiver, 491, toShort(374));
      this$MiniMp3_0.set_yo5o8m$($receiver, 492, toShort(359));
      this$MiniMp3_0.set_yo5o8m$($receiver, 493, toShort(373));
      this$MiniMp3_0.set_yo5o8m$($receiver, 494, toShort(343));
      this$MiniMp3_0.set_yo5o8m$($receiver, 495, toShort(358));
      this$MiniMp3_0.set_yo5o8m$($receiver, 496, toShort(341));
      this$MiniMp3_0.set_yo5o8m$($receiver, 497, toShort(325));
      this$MiniMp3_0.set_yo5o8m$($receiver, 498, toShort(791));
      this$MiniMp3_0.set_yo5o8m$($receiver, 499, toShort(791));
      this$MiniMp3_0.set_yo5o8m$($receiver, 500, toShort(1123));
      this$MiniMp3_0.set_yo5o8m$($receiver, 501, toShort(1122));
      this$MiniMp3_0.set_yo5o8m$($receiver, 502, toShort(L_703.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 503, toShort(1105));
      this$MiniMp3_0.set_yo5o8m$($receiver, 504, toShort(1045));
      this$MiniMp3_0.set_yo5o8m$($receiver, 505, toShort(L_719.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 506, toShort(865));
      this$MiniMp3_0.set_yo5o8m$($receiver, 507, toShort(865));
      this$MiniMp3_0.set_yo5o8m$($receiver, 508, toShort(790));
      this$MiniMp3_0.set_yo5o8m$($receiver, 509, toShort(790));
      this$MiniMp3_0.set_yo5o8m$($receiver, 510, toShort(774));
      this$MiniMp3_0.set_yo5o8m$($receiver, 511, toShort(774));
      this$MiniMp3_0.set_yo5o8m$($receiver, 512, toShort(1104));
      this$MiniMp3_0.set_yo5o8m$($receiver, 513, toShort(1029));
      this$MiniMp3_0.set_yo5o8m$($receiver, 514, toShort(338));
      this$MiniMp3_0.set_yo5o8m$($receiver, 515, toShort(293));
      this$MiniMp3_0.set_yo5o8m$($receiver, 516, toShort(323));
      this$MiniMp3_0.set_yo5o8m$($receiver, 517, toShort(308));
      this$MiniMp3_0.set_yo5o8m$($receiver, 518, toShort(L_799.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 519, toShort(L_815.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 520, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 521, toShort(788));
      this$MiniMp3_0.set_yo5o8m$($receiver, 522, toShort(772));
      this$MiniMp3_0.set_yo5o8m$($receiver, 523, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 524, toShort(803));
      this$MiniMp3_0.set_yo5o8m$($receiver, 525, toShort(816));
      this$MiniMp3_0.set_yo5o8m$($receiver, 526, toShort(322));
      this$MiniMp3_0.set_yo5o8m$($receiver, 527, toShort(292));
      this$MiniMp3_0.set_yo5o8m$($receiver, 528, toShort(307));
      this$MiniMp3_0.set_yo5o8m$($receiver, 529, toShort(320));
      this$MiniMp3_0.set_yo5o8m$($receiver, 530, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 531, toShort(531));
      this$MiniMp3_0.set_yo5o8m$($receiver, 532, toShort(515));
      this$MiniMp3_0.set_yo5o8m$($receiver, 533, toShort(546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 534, toShort(289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 535, toShort(274));
      this$MiniMp3_0.set_yo5o8m$($receiver, 536, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 537, toShort(258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 538, toShort(L_251.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 539, toShort(L_525.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 540, toShort(L_605.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 541, toShort(L_685.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 542, toShort(L_765.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 543, toShort(L_831.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 544, toShort(L_846.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 545, toShort(1298));
      this$MiniMp3_0.set_yo5o8m$($receiver, 546, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 547, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 548, toShort(1312));
      this$MiniMp3_0.set_yo5o8m$($receiver, 549, toShort(1282));
      this$MiniMp3_0.set_yo5o8m$($receiver, 550, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 551, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 552, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 553, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 554, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 555, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 556, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 557, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 558, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 559, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 560, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 561, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 562, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 563, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 564, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 565, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 566, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 567, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 568, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 569, toShort(512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 570, toShort(1399));
      this$MiniMp3_0.set_yo5o8m$($receiver, 571, toShort(1398));
      this$MiniMp3_0.set_yo5o8m$($receiver, 572, toShort(1383));
      this$MiniMp3_0.set_yo5o8m$($receiver, 573, toShort(1367));
      this$MiniMp3_0.set_yo5o8m$($receiver, 574, toShort(1382));
      this$MiniMp3_0.set_yo5o8m$($receiver, 575, toShort(1396));
      this$MiniMp3_0.set_yo5o8m$($receiver, 576, toShort(1351));
      this$MiniMp3_0.set_yo5o8m$($receiver, 577, toShort(L_511.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 578, toShort(1381));
      this$MiniMp3_0.set_yo5o8m$($receiver, 579, toShort(1366));
      this$MiniMp3_0.set_yo5o8m$($receiver, 580, toShort(1139));
      this$MiniMp3_0.set_yo5o8m$($receiver, 581, toShort(1139));
      this$MiniMp3_0.set_yo5o8m$($receiver, 582, toShort(1079));
      this$MiniMp3_0.set_yo5o8m$($receiver, 583, toShort(1079));
      this$MiniMp3_0.set_yo5o8m$($receiver, 584, toShort(1124));
      this$MiniMp3_0.set_yo5o8m$($receiver, 585, toShort(1124));
      this$MiniMp3_0.set_yo5o8m$($receiver, 586, toShort(1364));
      this$MiniMp3_0.set_yo5o8m$($receiver, 587, toShort(1349));
      this$MiniMp3_0.set_yo5o8m$($receiver, 588, toShort(1363));
      this$MiniMp3_0.set_yo5o8m$($receiver, 589, toShort(1333));
      this$MiniMp3_0.set_yo5o8m$($receiver, 590, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 591, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 592, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 593, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 594, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 595, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 596, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 597, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 598, toShort(1094));
      this$MiniMp3_0.set_yo5o8m$($receiver, 599, toShort(1094));
      this$MiniMp3_0.set_yo5o8m$($receiver, 600, toShort(1136));
      this$MiniMp3_0.set_yo5o8m$($receiver, 601, toShort(1136));
      this$MiniMp3_0.set_yo5o8m$($receiver, 602, toShort(373));
      this$MiniMp3_0.set_yo5o8m$($receiver, 603, toShort(341));
      this$MiniMp3_0.set_yo5o8m$($receiver, 604, toShort(535));
      this$MiniMp3_0.set_yo5o8m$($receiver, 605, toShort(535));
      this$MiniMp3_0.set_yo5o8m$($receiver, 606, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 607, toShort(775));
      this$MiniMp3_0.set_yo5o8m$($receiver, 608, toShort(867));
      this$MiniMp3_0.set_yo5o8m$($receiver, 609, toShort(822));
      this$MiniMp3_0.set_yo5o8m$($receiver, 610, toShort(774));
      this$MiniMp3_0.set_yo5o8m$($receiver, 611, toShort(L_591.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 612, toShort(324));
      this$MiniMp3_0.set_yo5o8m$($receiver, 613, toShort(338));
      this$MiniMp3_0.set_yo5o8m$($receiver, 614, toShort(L_671.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 615, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 616, toShort(550));
      this$MiniMp3_0.set_yo5o8m$($receiver, 617, toShort(550));
      this$MiniMp3_0.set_yo5o8m$($receiver, 618, toShort(866));
      this$MiniMp3_0.set_yo5o8m$($receiver, 619, toShort(864));
      this$MiniMp3_0.set_yo5o8m$($receiver, 620, toShort(609));
      this$MiniMp3_0.set_yo5o8m$($receiver, 621, toShort(609));
      this$MiniMp3_0.set_yo5o8m$($receiver, 622, toShort(293));
      this$MiniMp3_0.set_yo5o8m$($receiver, 623, toShort(336));
      this$MiniMp3_0.set_yo5o8m$($receiver, 624, toShort(534));
      this$MiniMp3_0.set_yo5o8m$($receiver, 625, toShort(534));
      this$MiniMp3_0.set_yo5o8m$($receiver, 626, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 627, toShort(835));
      this$MiniMp3_0.set_yo5o8m$($receiver, 628, toShort(773));
      this$MiniMp3_0.set_yo5o8m$($receiver, 629, toShort(L_751.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 630, toShort(834));
      this$MiniMp3_0.set_yo5o8m$($receiver, 631, toShort(804));
      this$MiniMp3_0.set_yo5o8m$($receiver, 632, toShort(308));
      this$MiniMp3_0.set_yo5o8m$($receiver, 633, toShort(307));
      this$MiniMp3_0.set_yo5o8m$($receiver, 634, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 635, toShort(788));
      this$MiniMp3_0.set_yo5o8m$($receiver, 636, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 637, toShort(772));
      this$MiniMp3_0.set_yo5o8m$($receiver, 638, toShort(562));
      this$MiniMp3_0.set_yo5o8m$($receiver, 639, toShort(562));
      this$MiniMp3_0.set_yo5o8m$($receiver, 640, toShort(547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 641, toShort(547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 642, toShort(305));
      this$MiniMp3_0.set_yo5o8m$($receiver, 643, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 644, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 645, toShort(515));
      this$MiniMp3_0.set_yo5o8m$($receiver, 646, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 647, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 648, toShort(L_252.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 649, toShort(L_397.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 650, toShort(L_477.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 651, toShort(L_557.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 652, toShort(L_622.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 653, toShort(L_653.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 654, toShort(L_719.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 655, toShort(L_735.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 656, toShort(L_750.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 657, toShort(1329));
      this$MiniMp3_0.set_yo5o8m$($receiver, 658, toShort(1299));
      this$MiniMp3_0.set_yo5o8m$($receiver, 659, toShort(1314));
      this$MiniMp3_0.set_yo5o8m$($receiver, 660, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 661, toShort(1057));
      this$MiniMp3_0.set_yo5o8m$($receiver, 662, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 663, toShort(1042));
      this$MiniMp3_0.set_yo5o8m$($receiver, 664, toShort(1312));
      this$MiniMp3_0.set_yo5o8m$($receiver, 665, toShort(1282));
      this$MiniMp3_0.set_yo5o8m$($receiver, 666, toShort(1024));
      this$MiniMp3_0.set_yo5o8m$($receiver, 667, toShort(1024));
      this$MiniMp3_0.set_yo5o8m$($receiver, 668, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 669, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 670, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 671, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 672, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 673, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 674, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 675, toShort(784));
      this$MiniMp3_0.set_yo5o8m$($receiver, 676, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 677, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 678, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 679, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 680, toShort(L_383.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 681, toShort(1127));
      this$MiniMp3_0.set_yo5o8m$($receiver, 682, toShort(1141));
      this$MiniMp3_0.set_yo5o8m$($receiver, 683, toShort(1111));
      this$MiniMp3_0.set_yo5o8m$($receiver, 684, toShort(1126));
      this$MiniMp3_0.set_yo5o8m$($receiver, 685, toShort(1140));
      this$MiniMp3_0.set_yo5o8m$($receiver, 686, toShort(1095));
      this$MiniMp3_0.set_yo5o8m$($receiver, 687, toShort(1110));
      this$MiniMp3_0.set_yo5o8m$($receiver, 688, toShort(869));
      this$MiniMp3_0.set_yo5o8m$($receiver, 689, toShort(869));
      this$MiniMp3_0.set_yo5o8m$($receiver, 690, toShort(883));
      this$MiniMp3_0.set_yo5o8m$($receiver, 691, toShort(883));
      this$MiniMp3_0.set_yo5o8m$($receiver, 692, toShort(1079));
      this$MiniMp3_0.set_yo5o8m$($receiver, 693, toShort(1109));
      this$MiniMp3_0.set_yo5o8m$($receiver, 694, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 695, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 696, toShort(375));
      this$MiniMp3_0.set_yo5o8m$($receiver, 697, toShort(374));
      this$MiniMp3_0.set_yo5o8m$($receiver, 698, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 699, toShort(868));
      this$MiniMp3_0.set_yo5o8m$($receiver, 700, toShort(838));
      this$MiniMp3_0.set_yo5o8m$($receiver, 701, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 702, toShort(791));
      this$MiniMp3_0.set_yo5o8m$($receiver, 703, toShort(L_463.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 704, toShort(867));
      this$MiniMp3_0.set_yo5o8m$($receiver, 705, toShort(822));
      this$MiniMp3_0.set_yo5o8m$($receiver, 706, toShort(368));
      this$MiniMp3_0.set_yo5o8m$($receiver, 707, toShort(263));
      this$MiniMp3_0.set_yo5o8m$($receiver, 708, toShort(852));
      this$MiniMp3_0.set_yo5o8m$($receiver, 709, toShort(837));
      this$MiniMp3_0.set_yo5o8m$($receiver, 710, toShort(836));
      this$MiniMp3_0.set_yo5o8m$($receiver, 711, toShort(L_543.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 712, toShort(610));
      this$MiniMp3_0.set_yo5o8m$($receiver, 713, toShort(610));
      this$MiniMp3_0.set_yo5o8m$($receiver, 714, toShort(550));
      this$MiniMp3_0.set_yo5o8m$($receiver, 715, toShort(550));
      this$MiniMp3_0.set_yo5o8m$($receiver, 716, toShort(352));
      this$MiniMp3_0.set_yo5o8m$($receiver, 717, toShort(336));
      this$MiniMp3_0.set_yo5o8m$($receiver, 718, toShort(534));
      this$MiniMp3_0.set_yo5o8m$($receiver, 719, toShort(534));
      this$MiniMp3_0.set_yo5o8m$($receiver, 720, toShort(865));
      this$MiniMp3_0.set_yo5o8m$($receiver, 721, toShort(774));
      this$MiniMp3_0.set_yo5o8m$($receiver, 722, toShort(851));
      this$MiniMp3_0.set_yo5o8m$($receiver, 723, toShort(821));
      this$MiniMp3_0.set_yo5o8m$($receiver, 724, toShort(850));
      this$MiniMp3_0.set_yo5o8m$($receiver, 725, toShort(805));
      this$MiniMp3_0.set_yo5o8m$($receiver, 726, toShort(593));
      this$MiniMp3_0.set_yo5o8m$($receiver, 727, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 728, toShort(579));
      this$MiniMp3_0.set_yo5o8m$($receiver, 729, toShort(564));
      this$MiniMp3_0.set_yo5o8m$($receiver, 730, toShort(773));
      this$MiniMp3_0.set_yo5o8m$($receiver, 731, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 732, toShort(578));
      this$MiniMp3_0.set_yo5o8m$($receiver, 733, toShort(578));
      this$MiniMp3_0.set_yo5o8m$($receiver, 734, toShort(548));
      this$MiniMp3_0.set_yo5o8m$($receiver, 735, toShort(548));
      this$MiniMp3_0.set_yo5o8m$($receiver, 736, toShort(577));
      this$MiniMp3_0.set_yo5o8m$($receiver, 737, toShort(577));
      this$MiniMp3_0.set_yo5o8m$($receiver, 738, toShort(307));
      this$MiniMp3_0.set_yo5o8m$($receiver, 739, toShort(276));
      this$MiniMp3_0.set_yo5o8m$($receiver, 740, toShort(306));
      this$MiniMp3_0.set_yo5o8m$($receiver, 741, toShort(291));
      this$MiniMp3_0.set_yo5o8m$($receiver, 742, toShort(516));
      this$MiniMp3_0.set_yo5o8m$($receiver, 743, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 744, toShort(259));
      this$MiniMp3_0.set_yo5o8m$($receiver, 745, toShort(259));
      this$MiniMp3_0.set_yo5o8m$($receiver, 746, toShort(L_250.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 747, toShort(L_2107.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 748, toShort(L_2507.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 749, toShort(L_2764.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 750, toShort(L_2909.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 751, toShort(L_2974.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 752, toShort(L_3007.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 753, toShort(L_3023.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 754, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 755, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 756, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 757, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 758, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 759, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 760, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 761, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 762, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 763, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 764, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 765, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 766, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 767, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 768, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 769, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 770, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 771, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 772, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 773, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 774, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 775, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 776, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 777, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 778, toShort(L_767.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 779, toShort(L_1052.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 780, toShort(L_1213.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 781, toShort(L_1277.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 782, toShort(L_1358.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 783, toShort(L_1405.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 784, toShort(L_1469.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 785, toShort(L_1535.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 786, toShort(L_1550.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 787, toShort(L_1582.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 788, toShort(L_1614.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 789, toShort(L_1647.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 790, toShort(L_1662.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 791, toShort(L_1694.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 792, toShort(L_1726.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 793, toShort(L_1759.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 794, toShort(L_1774.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 795, toShort(L_1807.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 796, toShort(L_1822.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 797, toShort(L_1854.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 798, toShort(L_1886.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 799, toShort(1565));
      this$MiniMp3_0.set_yo5o8m$($receiver, 800, toShort(L_1919.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 801, toShort(L_1935.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 802, toShort(L_1951.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 803, toShort(L_1967.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 804, toShort(1731));
      this$MiniMp3_0.set_yo5o8m$($receiver, 805, toShort(1730));
      this$MiniMp3_0.set_yo5o8m$($receiver, 806, toShort(1580));
      this$MiniMp3_0.set_yo5o8m$($receiver, 807, toShort(1717));
      this$MiniMp3_0.set_yo5o8m$($receiver, 808, toShort(L_1983.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 809, toShort(1729));
      this$MiniMp3_0.set_yo5o8m$($receiver, 810, toShort(1564));
      this$MiniMp3_0.set_yo5o8m$($receiver, 811, toShort(L_1999.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 812, toShort(1548));
      this$MiniMp3_0.set_yo5o8m$($receiver, 813, toShort(L_2015.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 814, toShort(L_2031.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 815, toShort(1715));
      this$MiniMp3_0.set_yo5o8m$($receiver, 816, toShort(1595));
      this$MiniMp3_0.set_yo5o8m$($receiver, 817, toShort(L_2047.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 818, toShort(1714));
      this$MiniMp3_0.set_yo5o8m$($receiver, 819, toShort(L_2063.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 820, toShort(1610));
      this$MiniMp3_0.set_yo5o8m$($receiver, 821, toShort(L_2079.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 822, toShort(1609));
      this$MiniMp3_0.set_yo5o8m$($receiver, 823, toShort(L_2095.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 824, toShort(1323));
      this$MiniMp3_0.set_yo5o8m$($receiver, 825, toShort(1323));
      this$MiniMp3_0.set_yo5o8m$($receiver, 826, toShort(1457));
      this$MiniMp3_0.set_yo5o8m$($receiver, 827, toShort(1457));
      this$MiniMp3_0.set_yo5o8m$($receiver, 828, toShort(1307));
      this$MiniMp3_0.set_yo5o8m$($receiver, 829, toShort(1307));
      this$MiniMp3_0.set_yo5o8m$($receiver, 830, toShort(1712));
      this$MiniMp3_0.set_yo5o8m$($receiver, 831, toShort(1547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 832, toShort(1641));
      this$MiniMp3_0.set_yo5o8m$($receiver, 833, toShort(1700));
      this$MiniMp3_0.set_yo5o8m$($receiver, 834, toShort(1699));
      this$MiniMp3_0.set_yo5o8m$($receiver, 835, toShort(1594));
      this$MiniMp3_0.set_yo5o8m$($receiver, 836, toShort(1685));
      this$MiniMp3_0.set_yo5o8m$($receiver, 837, toShort(1625));
      this$MiniMp3_0.set_yo5o8m$($receiver, 838, toShort(1442));
      this$MiniMp3_0.set_yo5o8m$($receiver, 839, toShort(1442));
      this$MiniMp3_0.set_yo5o8m$($receiver, 840, toShort(1322));
      this$MiniMp3_0.set_yo5o8m$($receiver, 841, toShort(1322));
      this$MiniMp3_0.set_yo5o8m$($receiver, 842, toShort(L_780.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 843, toShort(L_973.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 844, toShort(L_910.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 845, toShort(1279));
      this$MiniMp3_0.set_yo5o8m$($receiver, 846, toShort(1278));
      this$MiniMp3_0.set_yo5o8m$($receiver, 847, toShort(1277));
      this$MiniMp3_0.set_yo5o8m$($receiver, 848, toShort(1262));
      this$MiniMp3_0.set_yo5o8m$($receiver, 849, toShort(1276));
      this$MiniMp3_0.set_yo5o8m$($receiver, 850, toShort(1261));
      this$MiniMp3_0.set_yo5o8m$($receiver, 851, toShort(1275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 852, toShort(1215));
      this$MiniMp3_0.set_yo5o8m$($receiver, 853, toShort(1260));
      this$MiniMp3_0.set_yo5o8m$($receiver, 854, toShort(1229));
      this$MiniMp3_0.set_yo5o8m$($receiver, 855, toShort(L_959.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 856, toShort(974));
      this$MiniMp3_0.set_yo5o8m$($receiver, 857, toShort(974));
      this$MiniMp3_0.set_yo5o8m$($receiver, 858, toShort(989));
      this$MiniMp3_0.set_yo5o8m$($receiver, 859, toShort(989));
      this$MiniMp3_0.set_yo5o8m$($receiver, 860, toShort(L_943.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 861, toShort(735));
      this$MiniMp3_0.set_yo5o8m$($receiver, 862, toShort(478));
      this$MiniMp3_0.set_yo5o8m$($receiver, 863, toShort(478));
      this$MiniMp3_0.set_yo5o8m$($receiver, 864, toShort(495));
      this$MiniMp3_0.set_yo5o8m$($receiver, 865, toShort(463));
      this$MiniMp3_0.set_yo5o8m$($receiver, 866, toShort(506));
      this$MiniMp3_0.set_yo5o8m$($receiver, 867, toShort(414));
      this$MiniMp3_0.set_yo5o8m$($receiver, 868, toShort(L_1039.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 869, toShort(1003));
      this$MiniMp3_0.set_yo5o8m$($receiver, 870, toShort(958));
      this$MiniMp3_0.set_yo5o8m$($receiver, 871, toShort(1017));
      this$MiniMp3_0.set_yo5o8m$($receiver, 872, toShort(927));
      this$MiniMp3_0.set_yo5o8m$($receiver, 873, toShort(942));
      this$MiniMp3_0.set_yo5o8m$($receiver, 874, toShort(987));
      this$MiniMp3_0.set_yo5o8m$($receiver, 875, toShort(957));
      this$MiniMp3_0.set_yo5o8m$($receiver, 876, toShort(431));
      this$MiniMp3_0.set_yo5o8m$($receiver, 877, toShort(476));
      this$MiniMp3_0.set_yo5o8m$($receiver, 878, toShort(1272));
      this$MiniMp3_0.set_yo5o8m$($receiver, 879, toShort(1167));
      this$MiniMp3_0.set_yo5o8m$($receiver, 880, toShort(1228));
      this$MiniMp3_0.set_yo5o8m$($receiver, 881, toShort(L_1183.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 882, toShort(1256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 883, toShort(L_1199.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 884, toShort(895));
      this$MiniMp3_0.set_yo5o8m$($receiver, 885, toShort(895));
      this$MiniMp3_0.set_yo5o8m$($receiver, 886, toShort(941));
      this$MiniMp3_0.set_yo5o8m$($receiver, 887, toShort(941));
      this$MiniMp3_0.set_yo5o8m$($receiver, 888, toShort(1242));
      this$MiniMp3_0.set_yo5o8m$($receiver, 889, toShort(1227));
      this$MiniMp3_0.set_yo5o8m$($receiver, 890, toShort(1212));
      this$MiniMp3_0.set_yo5o8m$($receiver, 891, toShort(1135));
      this$MiniMp3_0.set_yo5o8m$($receiver, 892, toShort(1014));
      this$MiniMp3_0.set_yo5o8m$($receiver, 893, toShort(1014));
      this$MiniMp3_0.set_yo5o8m$($receiver, 894, toShort(490));
      this$MiniMp3_0.set_yo5o8m$($receiver, 895, toShort(489));
      this$MiniMp3_0.set_yo5o8m$($receiver, 896, toShort(503));
      this$MiniMp3_0.set_yo5o8m$($receiver, 897, toShort(487));
      this$MiniMp3_0.set_yo5o8m$($receiver, 898, toShort(910));
      this$MiniMp3_0.set_yo5o8m$($receiver, 899, toShort(1013));
      this$MiniMp3_0.set_yo5o8m$($receiver, 900, toShort(985));
      this$MiniMp3_0.set_yo5o8m$($receiver, 901, toShort(925));
      this$MiniMp3_0.set_yo5o8m$($receiver, 902, toShort(863));
      this$MiniMp3_0.set_yo5o8m$($receiver, 903, toShort(894));
      this$MiniMp3_0.set_yo5o8m$($receiver, 904, toShort(970));
      this$MiniMp3_0.set_yo5o8m$($receiver, 905, toShort(955));
      this$MiniMp3_0.set_yo5o8m$($receiver, 906, toShort(1012));
      this$MiniMp3_0.set_yo5o8m$($receiver, 907, toShort(847));
      this$MiniMp3_0.set_yo5o8m$($receiver, 908, toShort(L_1343.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 909, toShort(831));
      this$MiniMp3_0.set_yo5o8m$($receiver, 910, toShort(755));
      this$MiniMp3_0.set_yo5o8m$($receiver, 911, toShort(755));
      this$MiniMp3_0.set_yo5o8m$($receiver, 912, toShort(984));
      this$MiniMp3_0.set_yo5o8m$($receiver, 913, toShort(909));
      this$MiniMp3_0.set_yo5o8m$($receiver, 914, toShort(428));
      this$MiniMp3_0.set_yo5o8m$($receiver, 915, toShort(366));
      this$MiniMp3_0.set_yo5o8m$($receiver, 916, toShort(754));
      this$MiniMp3_0.set_yo5o8m$($receiver, 917, toShort(559));
      this$MiniMp3_0.set_yo5o8m$($receiver, 918, toShort(L_1391.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 919, toShort(752));
      this$MiniMp3_0.set_yo5o8m$($receiver, 920, toShort(486));
      this$MiniMp3_0.set_yo5o8m$($receiver, 921, toShort(457));
      this$MiniMp3_0.set_yo5o8m$($receiver, 922, toShort(924));
      this$MiniMp3_0.set_yo5o8m$($receiver, 923, toShort(997));
      this$MiniMp3_0.set_yo5o8m$($receiver, 924, toShort(698));
      this$MiniMp3_0.set_yo5o8m$($receiver, 925, toShort(698));
      this$MiniMp3_0.set_yo5o8m$($receiver, 926, toShort(983));
      this$MiniMp3_0.set_yo5o8m$($receiver, 927, toShort(893));
      this$MiniMp3_0.set_yo5o8m$($receiver, 928, toShort(740));
      this$MiniMp3_0.set_yo5o8m$($receiver, 929, toShort(740));
      this$MiniMp3_0.set_yo5o8m$($receiver, 930, toShort(908));
      this$MiniMp3_0.set_yo5o8m$($receiver, 931, toShort(877));
      this$MiniMp3_0.set_yo5o8m$($receiver, 932, toShort(739));
      this$MiniMp3_0.set_yo5o8m$($receiver, 933, toShort(739));
      this$MiniMp3_0.set_yo5o8m$($receiver, 934, toShort(667));
      this$MiniMp3_0.set_yo5o8m$($receiver, 935, toShort(667));
      this$MiniMp3_0.set_yo5o8m$($receiver, 936, toShort(953));
      this$MiniMp3_0.set_yo5o8m$($receiver, 937, toShort(938));
      this$MiniMp3_0.set_yo5o8m$($receiver, 938, toShort(497));
      this$MiniMp3_0.set_yo5o8m$($receiver, 939, toShort(287));
      this$MiniMp3_0.set_yo5o8m$($receiver, 940, toShort(271));
      this$MiniMp3_0.set_yo5o8m$($receiver, 941, toShort(271));
      this$MiniMp3_0.set_yo5o8m$($receiver, 942, toShort(683));
      this$MiniMp3_0.set_yo5o8m$($receiver, 943, toShort(606));
      this$MiniMp3_0.set_yo5o8m$($receiver, 944, toShort(590));
      this$MiniMp3_0.set_yo5o8m$($receiver, 945, toShort(712));
      this$MiniMp3_0.set_yo5o8m$($receiver, 946, toShort(726));
      this$MiniMp3_0.set_yo5o8m$($receiver, 947, toShort(574));
      this$MiniMp3_0.set_yo5o8m$($receiver, 948, toShort(302));
      this$MiniMp3_0.set_yo5o8m$($receiver, 949, toShort(302));
      this$MiniMp3_0.set_yo5o8m$($receiver, 950, toShort(738));
      this$MiniMp3_0.set_yo5o8m$($receiver, 951, toShort(736));
      this$MiniMp3_0.set_yo5o8m$($receiver, 952, toShort(481));
      this$MiniMp3_0.set_yo5o8m$($receiver, 953, toShort(286));
      this$MiniMp3_0.set_yo5o8m$($receiver, 954, toShort(526));
      this$MiniMp3_0.set_yo5o8m$($receiver, 955, toShort(725));
      this$MiniMp3_0.set_yo5o8m$($receiver, 956, toShort(605));
      this$MiniMp3_0.set_yo5o8m$($receiver, 957, toShort(711));
      this$MiniMp3_0.set_yo5o8m$($receiver, 958, toShort(636));
      this$MiniMp3_0.set_yo5o8m$($receiver, 959, toShort(724));
      this$MiniMp3_0.set_yo5o8m$($receiver, 960, toShort(696));
      this$MiniMp3_0.set_yo5o8m$($receiver, 961, toShort(651));
      this$MiniMp3_0.set_yo5o8m$($receiver, 962, toShort(589));
      this$MiniMp3_0.set_yo5o8m$($receiver, 963, toShort(681));
      this$MiniMp3_0.set_yo5o8m$($receiver, 964, toShort(666));
      this$MiniMp3_0.set_yo5o8m$($receiver, 965, toShort(710));
      this$MiniMp3_0.set_yo5o8m$($receiver, 966, toShort(364));
      this$MiniMp3_0.set_yo5o8m$($receiver, 967, toShort(467));
      this$MiniMp3_0.set_yo5o8m$($receiver, 968, toShort(573));
      this$MiniMp3_0.set_yo5o8m$($receiver, 969, toShort(695));
      this$MiniMp3_0.set_yo5o8m$($receiver, 970, toShort(466));
      this$MiniMp3_0.set_yo5o8m$($receiver, 971, toShort(466));
      this$MiniMp3_0.set_yo5o8m$($receiver, 972, toShort(301));
      this$MiniMp3_0.set_yo5o8m$($receiver, 973, toShort(465));
      this$MiniMp3_0.set_yo5o8m$($receiver, 974, toShort(379));
      this$MiniMp3_0.set_yo5o8m$($receiver, 975, toShort(379));
      this$MiniMp3_0.set_yo5o8m$($receiver, 976, toShort(709));
      this$MiniMp3_0.set_yo5o8m$($receiver, 977, toShort(604));
      this$MiniMp3_0.set_yo5o8m$($receiver, 978, toShort(665));
      this$MiniMp3_0.set_yo5o8m$($receiver, 979, toShort(679));
      this$MiniMp3_0.set_yo5o8m$($receiver, 980, toShort(316));
      this$MiniMp3_0.set_yo5o8m$($receiver, 981, toShort(316));
      this$MiniMp3_0.set_yo5o8m$($receiver, 982, toShort(634));
      this$MiniMp3_0.set_yo5o8m$($receiver, 983, toShort(633));
      this$MiniMp3_0.set_yo5o8m$($receiver, 984, toShort(436));
      this$MiniMp3_0.set_yo5o8m$($receiver, 985, toShort(436));
      this$MiniMp3_0.set_yo5o8m$($receiver, 986, toShort(464));
      this$MiniMp3_0.set_yo5o8m$($receiver, 987, toShort(269));
      this$MiniMp3_0.set_yo5o8m$($receiver, 988, toShort(424));
      this$MiniMp3_0.set_yo5o8m$($receiver, 989, toShort(394));
      this$MiniMp3_0.set_yo5o8m$($receiver, 990, toShort(452));
      this$MiniMp3_0.set_yo5o8m$($receiver, 991, toShort(332));
      this$MiniMp3_0.set_yo5o8m$($receiver, 992, toShort(438));
      this$MiniMp3_0.set_yo5o8m$($receiver, 993, toShort(363));
      this$MiniMp3_0.set_yo5o8m$($receiver, 994, toShort(347));
      this$MiniMp3_0.set_yo5o8m$($receiver, 995, toShort(408));
      this$MiniMp3_0.set_yo5o8m$($receiver, 996, toShort(393));
      this$MiniMp3_0.set_yo5o8m$($receiver, 997, toShort(448));
      this$MiniMp3_0.set_yo5o8m$($receiver, 998, toShort(331));
      this$MiniMp3_0.set_yo5o8m$($receiver, 999, toShort(422));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1000, toShort(362));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1001, toShort(407));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1002, toShort(392));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1003, toShort(421));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1004, toShort(346));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1005, toShort(406));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1006, toShort(391));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1007, toShort(376));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1008, toShort(375));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1009, toShort(359));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1010, toShort(1441));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1011, toShort(1306));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1012, toShort(L_2367.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1013, toShort(1290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1014, toShort(L_2383.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1015, toShort(1337));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1016, toShort(L_2399.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1017, toShort(L_2415.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1018, toShort(1426));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1019, toShort(1321));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1020, toShort(L_2431.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1021, toShort(1411));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1022, toShort(1336));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1023, toShort(L_2447.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1024, toShort(L_2463.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1025, toShort(L_2479.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1026, toShort(1169));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1027, toShort(1169));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1028, toShort(1049));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1029, toShort(1049));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1030, toShort(1424));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1031, toShort(1289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1032, toShort(1412));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1033, toShort(1352));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1034, toShort(1319));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1035, toShort(L_2495.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1036, toShort(1154));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1037, toShort(1154));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1038, toShort(1064));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1039, toShort(1064));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1040, toShort(1153));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1041, toShort(1153));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1042, toShort(416));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1043, toShort(390));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1044, toShort(360));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1045, toShort(404));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1046, toShort(403));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1047, toShort(389));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1048, toShort(344));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1049, toShort(374));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1050, toShort(373));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1051, toShort(343));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1052, toShort(358));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1053, toShort(372));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1054, toShort(327));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1055, toShort(357));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1056, toShort(342));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1057, toShort(311));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1058, toShort(356));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1059, toShort(326));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1060, toShort(1395));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1061, toShort(1394));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1062, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1063, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1064, toShort(1047));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1065, toShort(1047));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1066, toShort(1365));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1067, toShort(1392));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1068, toShort(1287));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1069, toShort(1379));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1070, toShort(1334));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1071, toShort(1364));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1072, toShort(1349));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1073, toShort(1378));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1074, toShort(1318));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1075, toShort(1363));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1076, toShort(792));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1077, toShort(792));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1078, toShort(792));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1079, toShort(792));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1080, toShort(1152));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1081, toShort(1152));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1082, toShort(1032));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1083, toShort(1032));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1084, toShort(1121));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1085, toShort(1121));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1086, toShort(1046));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1087, toShort(1046));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1088, toShort(1120));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1089, toShort(1120));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1090, toShort(1030));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1091, toShort(1030));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1092, toShort(L_2895.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1093, toShort(1106));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1094, toShort(1061));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1095, toShort(1104));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1096, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1097, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1098, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1099, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1100, toShort(1091));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1101, toShort(1076));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1102, toShort(1029));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1103, toShort(1090));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1104, toShort(1060));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1105, toShort(1075));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1106, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1107, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1108, toShort(309));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1109, toShort(324));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1110, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1111, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1112, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1113, toShort(772));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1114, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1115, toShort(803));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1116, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1117, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1118, toShort(531));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1119, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1120, toShort(515));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1121, toShort(546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1122, toShort(289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1123, toShort(274));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1124, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1125, toShort(258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1126, toShort(L_250.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1127, toShort(L_1179.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1128, toShort(L_1579.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1129, toShort(L_1836.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1130, toShort(L_1996.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1131, toShort(L_2124.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1132, toShort(L_2253.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1133, toShort(L_2333.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1134, toShort(L_2413.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1135, toShort(L_2477.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1136, toShort(L_2542.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1137, toShort(L_2574.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1138, toShort(L_2607.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1139, toShort(L_2622.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1140, toShort(L_2655.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1141, toShort(1314));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1142, toShort(1313));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1143, toShort(1298));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1144, toShort(1312));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1145, toShort(1282));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1146, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1147, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1148, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1149, toShort(785));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1150, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1151, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1152, toShort(1025));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1153, toShort(1025));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1154, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1155, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1156, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1157, toShort(768));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1158, toShort(L_766.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1159, toShort(L_798.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1160, toShort(L_830.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1161, toShort(L_862.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1162, toShort(L_895.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1163, toShort(L_911.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1164, toShort(L_927.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1165, toShort(L_943.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1166, toShort(L_959.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1167, toShort(L_975.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1168, toShort(L_991.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1169, toShort(L_1007.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1170, toShort(L_1023.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1171, toShort(L_1039.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1172, toShort(L_1055.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1173, toShort(L_1070.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1174, toShort(1724));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1175, toShort(1647));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1176, toShort(L_1103.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1177, toShort(L_1119.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1178, toShort(1631));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1179, toShort(1767));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1180, toShort(1662));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1181, toShort(1738));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1182, toShort(1708));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1183, toShort(1723));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1184, toShort(L_1135.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1185, toShort(1780));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1186, toShort(1615));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1187, toShort(1779));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1188, toShort(1599));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1189, toShort(1677));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1190, toShort(1646));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1191, toShort(1778));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1192, toShort(1583));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1193, toShort(L_1151.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1194, toShort(1777));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1195, toShort(1567));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1196, toShort(1737));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1197, toShort(1692));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1198, toShort(1765));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1199, toShort(1722));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1200, toShort(1707));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1201, toShort(1630));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1202, toShort(1751));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1203, toShort(1661));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1204, toShort(1764));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1205, toShort(1614));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1206, toShort(1736));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1207, toShort(1676));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1208, toShort(1763));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1209, toShort(1750));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1210, toShort(1645));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1211, toShort(1598));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1212, toShort(1721));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1213, toShort(1691));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1214, toShort(1762));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1215, toShort(1706));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1216, toShort(1582));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1217, toShort(1761));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1218, toShort(1566));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1219, toShort(L_1167.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1220, toShort(1749));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1221, toShort(1629));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1222, toShort(767));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1223, toShort(766));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1224, toShort(751));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1225, toShort(765));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1226, toShort(494));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1227, toShort(494));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1228, toShort(735));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1229, toShort(764));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1230, toShort(719));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1231, toShort(749));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1232, toShort(734));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1233, toShort(763));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1234, toShort(447));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1235, toShort(447));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1236, toShort(748));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1237, toShort(718));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1238, toShort(477));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1239, toShort(506));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1240, toShort(431));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1241, toShort(491));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1242, toShort(446));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1243, toShort(476));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1244, toShort(461));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1245, toShort(505));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1246, toShort(415));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1247, toShort(430));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1248, toShort(475));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1249, toShort(445));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1250, toShort(504));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1251, toShort(399));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1252, toShort(460));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1253, toShort(489));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1254, toShort(414));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1255, toShort(503));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1256, toShort(383));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1257, toShort(474));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1258, toShort(429));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1259, toShort(459));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1260, toShort(502));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1261, toShort(502));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1262, toShort(746));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1263, toShort(752));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1264, toShort(488));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1265, toShort(398));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1266, toShort(501));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1267, toShort(473));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1268, toShort(413));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1269, toShort(472));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1270, toShort(486));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1271, toShort(271));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1272, toShort(480));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1273, toShort(270));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1274, toShort(L_1439.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1275, toShort(L_1455.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1276, toShort(1357));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1277, toShort(L_1471.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1278, toShort(L_1487.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1279, toShort(L_1503.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1280, toShort(1341));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1281, toShort(1325));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1282, toShort(L_1519.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1283, toShort(1489));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1284, toShort(1463));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1285, toShort(1403));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1286, toShort(1309));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1287, toShort(L_1535.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1288, toShort(1372));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1289, toShort(1448));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1290, toShort(1418));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1291, toShort(1476));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1292, toShort(1356));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1293, toShort(1462));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1294, toShort(1387));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1295, toShort(L_1551.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1296, toShort(1475));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1297, toShort(1340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1298, toShort(1447));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1299, toShort(1402));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1300, toShort(1386));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1301, toShort(L_1567.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1302, toShort(1068));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1303, toShort(1068));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1304, toShort(1474));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1305, toShort(1461));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1306, toShort(455));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1307, toShort(380));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1308, toShort(468));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1309, toShort(440));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1310, toShort(395));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1311, toShort(425));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1312, toShort(410));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1313, toShort(454));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1314, toShort(364));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1315, toShort(467));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1316, toShort(466));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1317, toShort(464));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1318, toShort(453));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1319, toShort(269));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1320, toShort(409));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1321, toShort(448));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1322, toShort(268));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1323, toShort(432));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1324, toShort(1371));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1325, toShort(1473));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1326, toShort(1432));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1327, toShort(1417));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1328, toShort(1308));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1329, toShort(1460));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1330, toShort(1355));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1331, toShort(1446));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1332, toShort(1459));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1333, toShort(1431));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1334, toShort(1083));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1335, toShort(1083));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1336, toShort(1401));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1337, toShort(1416));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1338, toShort(1458));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1339, toShort(1445));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1340, toShort(1067));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1341, toShort(1067));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1342, toShort(1370));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1343, toShort(1457));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1344, toShort(1051));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1345, toShort(1051));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1346, toShort(1291));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1347, toShort(1430));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1348, toShort(1385));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1349, toShort(1444));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1350, toShort(1354));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1351, toShort(1415));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1352, toShort(1400));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1353, toShort(1443));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1354, toShort(1082));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1355, toShort(1082));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1356, toShort(1173));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1357, toShort(1113));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1358, toShort(1186));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1359, toShort(1066));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1360, toShort(1185));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1361, toShort(1050));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1362, toShort(L_1967.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1363, toShort(1158));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1364, toShort(1128));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1365, toShort(1172));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1366, toShort(1097));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1367, toShort(1171));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1368, toShort(1081));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1369, toShort(L_1983.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1370, toShort(1157));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1371, toShort(1112));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1372, toShort(416));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1373, toShort(266));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1374, toShort(375));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1375, toShort(400));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1376, toShort(1170));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1377, toShort(1142));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1378, toShort(1127));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1379, toShort(1065));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1380, toShort(793));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1381, toShort(793));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1382, toShort(1169));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1383, toShort(1033));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1384, toShort(1156));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1385, toShort(1096));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1386, toShort(1141));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1387, toShort(1111));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1388, toShort(1155));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1389, toShort(1080));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1390, toShort(1126));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1391, toShort(1140));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1392, toShort(898));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1393, toShort(898));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1394, toShort(808));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1395, toShort(808));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1396, toShort(897));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1397, toShort(897));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1398, toShort(792));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1399, toShort(792));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1400, toShort(1095));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1401, toShort(1152));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1402, toShort(1032));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1403, toShort(1125));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1404, toShort(1110));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1405, toShort(1139));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1406, toShort(1079));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1407, toShort(1124));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1408, toShort(882));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1409, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1410, toShort(838));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1411, toShort(881));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1412, toShort(853));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1413, toShort(791));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1414, toShort(L_2319.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1415, toShort(867));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1416, toShort(368));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1417, toShort(263));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1418, toShort(822));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1419, toShort(852));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1420, toShort(837));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1421, toShort(866));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1422, toShort(806));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1423, toShort(865));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1424, toShort(L_2399.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1425, toShort(851));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1426, toShort(352));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1427, toShort(262));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1428, toShort(534));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1429, toShort(534));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1430, toShort(821));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1431, toShort(836));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1432, toShort(594));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1433, toShort(594));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1434, toShort(549));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1435, toShort(549));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1436, toShort(593));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1437, toShort(593));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1438, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1439, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1440, toShort(848));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1441, toShort(773));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1442, toShort(579));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1443, toShort(579));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1444, toShort(564));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1445, toShort(578));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1446, toShort(548));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1447, toShort(563));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1448, toShort(276));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1449, toShort(276));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1450, toShort(577));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1451, toShort(576));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1452, toShort(306));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1453, toShort(291));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1454, toShort(516));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1455, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1456, toShort(305));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1457, toShort(305));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1458, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1459, toShort(259));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1460, toShort(L_251.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1461, toShort(L_892.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1462, toShort(L_2058.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1463, toShort(L_2620.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1464, toShort(L_2828.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1465, toShort(L_2957.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1466, toShort(L_3023.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1467, toShort(L_3039.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1468, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1469, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1470, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1471, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1472, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1473, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1474, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1475, toShort(769));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1476, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1477, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1478, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1479, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1480, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1481, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1482, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1483, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1484, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1485, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1486, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1487, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1488, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1489, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1490, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1491, toShort(256));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1492, toShort(L_511.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1493, toShort(L_527.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1494, toShort(L_543.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1495, toShort(L_559.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1496, toShort(1530));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1497, toShort(L_575.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1498, toShort(L_591.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1499, toShort(1528));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1500, toShort(1527));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1501, toShort(1407));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1502, toShort(1526));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1503, toShort(1391));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1504, toShort(1023));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1505, toShort(1023));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1506, toShort(1023));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1507, toShort(1023));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1508, toShort(1525));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1509, toShort(1375));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1510, toShort(1268));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1511, toShort(1268));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1512, toShort(1103));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1513, toShort(1103));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1514, toShort(1087));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1515, toShort(1087));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1516, toShort(1039));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1517, toShort(1039));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1518, toShort(1523));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1519, toShort(L_604.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1520, toShort(815));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1521, toShort(815));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1522, toShort(815));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1523, toShort(815));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1524, toShort(510));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1525, toShort(495));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1526, toShort(509));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1527, toShort(479));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1528, toShort(508));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1529, toShort(463));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1530, toShort(507));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1531, toShort(447));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1532, toShort(431));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1533, toShort(505));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1534, toShort(415));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1535, toShort(399));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1536, toShort(L_734.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1537, toShort(L_782.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1538, toShort(1262));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1539, toShort(L_815.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1540, toShort(1259));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1541, toShort(1244));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1542, toShort(L_831.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1543, toShort(1258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1544, toShort(1228));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1545, toShort(L_847.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1546, toShort(L_863.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1547, toShort(1196));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1548, toShort(L_879.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1549, toShort(1253));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1550, toShort(987));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1551, toShort(987));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1552, toShort(748));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1553, toShort(L_767.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1554, toShort(493));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1555, toShort(493));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1556, toShort(462));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1557, toShort(477));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1558, toShort(414));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1559, toShort(414));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1560, toShort(686));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1561, toShort(669));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1562, toShort(478));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1563, toShort(446));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1564, toShort(461));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1565, toShort(445));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1566, toShort(474));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1567, toShort(429));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1568, toShort(487));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1569, toShort(458));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1570, toShort(412));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1571, toShort(471));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1572, toShort(1266));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1573, toShort(1264));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1574, toShort(1009));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1575, toShort(1009));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1576, toShort(799));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1577, toShort(799));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1578, toShort(L_1019.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1579, toShort(L_1276.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1580, toShort(L_1452.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1581, toShort(L_1581.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1582, toShort(L_1677.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1583, toShort(L_1757.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1584, toShort(L_1821.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1585, toShort(L_1886.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1586, toShort(L_1933.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1587, toShort(L_1997.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1588, toShort(1257));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1589, toShort(1257));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1590, toShort(1483));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1591, toShort(1468));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1592, toShort(1512));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1593, toShort(1422));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1594, toShort(1497));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1595, toShort(1406));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1596, toShort(1467));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1597, toShort(1496));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1598, toShort(1421));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1599, toShort(1510));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1600, toShort(1134));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1601, toShort(1134));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1602, toShort(1225));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1603, toShort(1225));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1604, toShort(1466));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1605, toShort(1451));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1606, toShort(1374));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1607, toShort(1405));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1608, toShort(1252));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1609, toShort(1252));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1610, toShort(1358));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1611, toShort(1480));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1612, toShort(1164));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1613, toShort(1164));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1614, toShort(1251));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1615, toShort(1251));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1616, toShort(1238));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1617, toShort(1238));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1618, toShort(1389));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1619, toShort(1465));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1620, toShort(L_1407.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1621, toShort(1054));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1622, toShort(1101));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1623, toShort(L_1423.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1624, toShort(1207));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1625, toShort(L_1439.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1626, toShort(830));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1627, toShort(830));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1628, toShort(1248));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1629, toShort(1038));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1630, toShort(1237));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1631, toShort(1117));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1632, toShort(1223));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1633, toShort(1148));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1634, toShort(1236));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1635, toShort(1208));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1636, toShort(411));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1637, toShort(426));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1638, toShort(395));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1639, toShort(410));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1640, toShort(379));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1641, toShort(269));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1642, toShort(1193));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1643, toShort(1222));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1644, toShort(1132));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1645, toShort(1235));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1646, toShort(1221));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1647, toShort(1116));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1648, toShort(976));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1649, toShort(976));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1650, toShort(1192));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1651, toShort(1162));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1652, toShort(1177));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1653, toShort(1220));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1654, toShort(1131));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1655, toShort(1191));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1656, toShort(963));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1657, toShort(963));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1658, toShort(L_1647.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1659, toShort(961));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1660, toShort(780));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1661, toShort(L_1663.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1662, toShort(558));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1663, toShort(558));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1664, toShort(994));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1665, toShort(993));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1666, toShort(437));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1667, toShort(408));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1668, toShort(393));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1669, toShort(407));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1670, toShort(829));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1671, toShort(978));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1672, toShort(813));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1673, toShort(797));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1674, toShort(947));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1675, toShort(L_1743.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1676, toShort(721));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1677, toShort(721));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1678, toShort(377));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1679, toShort(392));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1680, toShort(844));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1681, toShort(950));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1682, toShort(828));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1683, toShort(890));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1684, toShort(706));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1685, toShort(706));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1686, toShort(812));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1687, toShort(859));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1688, toShort(796));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1689, toShort(960));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1690, toShort(948));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1691, toShort(843));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1692, toShort(934));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1693, toShort(874));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1694, toShort(571));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1695, toShort(571));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1696, toShort(L_1919.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1697, toShort(690));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1698, toShort(555));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1699, toShort(689));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1700, toShort(421));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1701, toShort(346));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1702, toShort(539));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1703, toShort(539));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1704, toShort(944));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1705, toShort(779));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1706, toShort(918));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1707, toShort(873));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1708, toShort(932));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1709, toShort(842));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1710, toShort(903));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1711, toShort(888));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1712, toShort(570));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1713, toShort(570));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1714, toShort(931));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1715, toShort(917));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1716, toShort(674));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1717, toShort(674));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1718, toShort(L_2575.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1719, toShort(1562));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1720, toShort(L_2591.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1721, toShort(1609));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1722, toShort(L_2607.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1723, toShort(1654));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1724, toShort(1322));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1725, toShort(1322));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1726, toShort(1441));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1727, toShort(1441));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1728, toShort(1696));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1729, toShort(1546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1730, toShort(1683));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1731, toShort(1593));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1732, toShort(1669));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1733, toShort(1624));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1734, toShort(1426));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1735, toShort(1426));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1736, toShort(1321));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1737, toShort(1321));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1738, toShort(1639));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1739, toShort(1680));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1740, toShort(1425));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1741, toShort(1425));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1742, toShort(1305));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1743, toShort(1305));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1744, toShort(1545));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1745, toShort(1668));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1746, toShort(1608));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1747, toShort(1623));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1748, toShort(1667));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1749, toShort(1592));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1750, toShort(1638));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1751, toShort(1666));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1752, toShort(1320));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1753, toShort(1320));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1754, toShort(1652));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1755, toShort(1607));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1756, toShort(1409));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1757, toShort(1409));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1758, toShort(1304));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1759, toShort(1304));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1760, toShort(1288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1761, toShort(1288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1762, toShort(1664));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1763, toShort(1637));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1764, toShort(1395));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1765, toShort(1395));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1766, toShort(1335));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1767, toShort(1335));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1768, toShort(1622));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1769, toShort(1636));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1770, toShort(1394));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1771, toShort(1394));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1772, toShort(1319));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1773, toShort(1319));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1774, toShort(1606));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1775, toShort(1621));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1776, toShort(1392));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1777, toShort(1392));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1778, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1779, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1780, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1781, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1782, toShort(345));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1783, toShort(390));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1784, toShort(360));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1785, toShort(375));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1786, toShort(404));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1787, toShort(373));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1788, toShort(1047));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1789, toShort(L_2751.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1790, toShort(L_2767.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1791, toShort(L_2783.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1792, toShort(1062));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1793, toShort(1121));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1794, toShort(1046));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1795, toShort(L_2799.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1796, toShort(1077));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1797, toShort(L_2815.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1798, toShort(1106));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1799, toShort(1061));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1800, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1801, toShort(789));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1802, toShort(1105));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1803, toShort(1104));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1804, toShort(263));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1805, toShort(355));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1806, toShort(310));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1807, toShort(340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1808, toShort(325));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1809, toShort(354));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1810, toShort(352));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1811, toShort(262));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1812, toShort(339));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1813, toShort(324));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1814, toShort(1091));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1815, toShort(1076));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1816, toShort(1029));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1817, toShort(1090));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1818, toShort(1060));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1819, toShort(1075));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1820, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1821, toShort(833));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1822, toShort(788));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1823, toShort(788));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1824, toShort(1088));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1825, toShort(1028));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1826, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1827, toShort(818));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1828, toShort(803));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1829, toShort(803));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1830, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1831, toShort(561));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1832, toShort(531));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1833, toShort(531));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1834, toShort(816));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1835, toShort(771));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1836, toShort(546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1837, toShort(546));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1838, toShort(289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1839, toShort(274));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1840, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1841, toShort(258));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1842, toShort(L_253.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1843, toShort(L_317.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1844, toShort(L_381.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1845, toShort(L_446.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1846, toShort(L_478.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1847, toShort(L_509.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1848, toShort(1279));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1849, toShort(1279));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1850, toShort(L_811.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1851, toShort(L_1179.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1852, toShort(L_1451.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1853, toShort(L_1756.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1854, toShort(L_1900.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1855, toShort(L_2028.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1856, toShort(L_2189.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1857, toShort(L_2253.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1858, toShort(L_2333.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1859, toShort(L_2414.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1860, toShort(L_2445.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1861, toShort(L_2511.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1862, toShort(L_2526.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1863, toShort(1313));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1864, toShort(1298));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1865, toShort(L_2559.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1866, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1867, toShort(1041));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1868, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1869, toShort(1040));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1870, toShort(1025));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1871, toShort(1025));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1872, toShort(1024));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1873, toShort(1024));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1874, toShort(1022));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1875, toShort(1007));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1876, toShort(1021));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1877, toShort(991));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1878, toShort(1020));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1879, toShort(975));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1880, toShort(1019));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1881, toShort(959));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1882, toShort(687));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1883, toShort(687));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1884, toShort(1018));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1885, toShort(1017));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1886, toShort(671));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1887, toShort(671));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1888, toShort(655));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1889, toShort(655));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1890, toShort(1016));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1891, toShort(1015));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1892, toShort(639));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1893, toShort(639));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1894, toShort(758));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1895, toShort(758));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1896, toShort(623));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1897, toShort(623));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1898, toShort(757));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1899, toShort(607));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1900, toShort(756));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1901, toShort(591));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1902, toShort(755));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1903, toShort(575));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1904, toShort(754));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1905, toShort(559));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1906, toShort(543));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1907, toShort(543));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1908, toShort(1009));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1909, toShort(783));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1910, toShort(L_575.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1911, toShort(L_621.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1912, toShort(L_685.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1913, toShort(L_749.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1914, toShort(496));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1915, toShort(L_590.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1916, toShort(750));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1917, toShort(749));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1918, toShort(734));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1919, toShort(748));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1920, toShort(974));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1921, toShort(989));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1922, toShort(1003));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1923, toShort(958));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1924, toShort(988));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1925, toShort(973));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1926, toShort(1002));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1927, toShort(942));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1928, toShort(987));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1929, toShort(957));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1930, toShort(972));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1931, toShort(1001));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1932, toShort(926));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1933, toShort(986));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1934, toShort(941));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1935, toShort(971));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1936, toShort(956));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1937, toShort(1000));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1938, toShort(910));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1939, toShort(985));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1940, toShort(925));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1941, toShort(999));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1942, toShort(894));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1943, toShort(970));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1944, toShort(L_1071.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1945, toShort(L_1087.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1946, toShort(L_1102.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1947, toShort(1390));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1948, toShort(L_1135.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1949, toShort(1436));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1950, toShort(1509));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1951, toShort(1451));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1952, toShort(1374));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1953, toShort(L_1151.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1954, toShort(1405));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1955, toShort(1358));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1956, toShort(1480));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1957, toShort(1420));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1958, toShort(L_1167.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1959, toShort(1507));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1960, toShort(1494));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1961, toShort(1389));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1962, toShort(1342));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1963, toShort(1465));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1964, toShort(1435));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1965, toShort(1450));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1966, toShort(1326));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1967, toShort(1505));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1968, toShort(1310));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1969, toShort(1493));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1970, toShort(1373));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1971, toShort(1479));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1972, toShort(1404));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1973, toShort(1492));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1974, toShort(1464));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1975, toShort(1419));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1976, toShort(428));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1977, toShort(443));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1978, toShort(472));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1979, toShort(397));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1980, toShort(736));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1981, toShort(526));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1982, toShort(464));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1983, toShort(464));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1984, toShort(486));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1985, toShort(457));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1986, toShort(442));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1987, toShort(471));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1988, toShort(484));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1989, toShort(482));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1990, toShort(1357));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1991, toShort(1449));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1992, toShort(1434));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1993, toShort(1478));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1994, toShort(1388));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1995, toShort(1491));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1996, toShort(1341));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1997, toShort(1490));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1998, toShort(1325));
      this$MiniMp3_0.set_yo5o8m$($receiver, 1999, toShort(1489));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2000, toShort(1463));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2001, toShort(1403));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2002, toShort(1309));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2003, toShort(1477));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2004, toShort(1372));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2005, toShort(1448));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2006, toShort(1418));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2007, toShort(1433));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2008, toShort(1476));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2009, toShort(1356));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2010, toShort(1462));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2011, toShort(1387));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2012, toShort(L_1439.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2013, toShort(1475));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2014, toShort(1340));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2015, toShort(1447));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2016, toShort(1402));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2017, toShort(1474));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2018, toShort(1324));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2019, toShort(1461));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2020, toShort(1371));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2021, toShort(1473));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2022, toShort(269));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2023, toShort(448));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2024, toShort(1432));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2025, toShort(1417));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2026, toShort(1308));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2027, toShort(1460));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2028, toShort(L_1711.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2029, toShort(1459));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2030, toShort(L_1727.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2031, toShort(1441));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2032, toShort(1099));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2033, toShort(1099));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2034, toShort(1446));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2035, toShort(1386));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2036, toShort(1431));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2037, toShort(1401));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2038, toShort(L_1743.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2039, toShort(1289));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2040, toShort(1083));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2041, toShort(1083));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2042, toShort(1160));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2043, toShort(1160));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2044, toShort(1458));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2045, toShort(1445));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2046, toShort(1067));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2047, toShort(1067));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2048, toShort(1370));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2049, toShort(1457));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2050, toShort(1307));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2051, toShort(1430));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2052, toShort(1129));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2053, toShort(1129));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2054, toShort(1098));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2055, toShort(1098));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2056, toShort(268));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2057, toShort(432));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2058, toShort(267));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2059, toShort(416));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2060, toShort(266));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2061, toShort(400));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2062, toShort(L_1887.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2063, toShort(1144));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2064, toShort(1187));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2065, toShort(1082));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2066, toShort(1173));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2067, toShort(1113));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2068, toShort(1186));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2069, toShort(1066));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2070, toShort(1050));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2071, toShort(1158));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2072, toShort(1128));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2073, toShort(1143));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2074, toShort(1172));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2075, toShort(1097));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2076, toShort(1171));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2077, toShort(1081));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2078, toShort(420));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2079, toShort(391));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2080, toShort(1157));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2081, toShort(1112));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2082, toShort(1170));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2083, toShort(1142));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2084, toShort(1127));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2085, toShort(1065));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2086, toShort(1169));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2087, toShort(1049));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2088, toShort(1156));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2089, toShort(1096));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2090, toShort(1141));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2091, toShort(1111));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2092, toShort(1155));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2093, toShort(1080));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2094, toShort(1126));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2095, toShort(1154));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2096, toShort(1064));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2097, toShort(1153));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2098, toShort(1140));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2099, toShort(1095));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2100, toShort(1048));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2101, toShort(L_2159.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2102, toShort(1125));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2103, toShort(1110));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2104, toShort(1137));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2105, toShort(L_2175.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2106, toShort(823));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2107, toShort(823));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2108, toShort(1139));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2109, toShort(1138));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2110, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2111, toShort(807));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2112, toShort(384));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2113, toShort(264));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2114, toShort(368));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2115, toShort(263));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2116, toShort(868));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2117, toShort(838));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2118, toShort(853));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2119, toShort(791));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2120, toShort(867));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2121, toShort(822));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2122, toShort(852));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2123, toShort(837));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2124, toShort(866));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2125, toShort(806));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2126, toShort(865));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2127, toShort(790));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2128, toShort(L_2319.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2129, toShort(851));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2130, toShort(821));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2131, toShort(836));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2132, toShort(352));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2133, toShort(262));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2134, toShort(850));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2135, toShort(805));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2136, toShort(849));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2137, toShort(L_2399.toInt()));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2138, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2139, toShort(533));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2140, toShort(835));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2141, toShort(820));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2142, toShort(336));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2143, toShort(261));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2144, toShort(578));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2145, toShort(548));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2146, toShort(563));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2147, toShort(577));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2148, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2149, toShort(532));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2150, toShort(832));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2151, toShort(772));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2152, toShort(562));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2153, toShort(562));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2154, toShort(547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2155, toShort(547));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2156, toShort(305));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2157, toShort(275));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2158, toShort(560));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2159, toShort(515));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2160, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2161, toShort(290));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2162, toShort(288));
      this$MiniMp3_0.set_yo5o8m$($receiver, 2163, toShort(258));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_huffman_tab32$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(28 * 1 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_9c14iy$($receiver, 0, new UByte(toByte(130)));
      this$MiniMp3_0.set_9c14iy$($receiver, 1, new UByte(toByte(162)));
      this$MiniMp3_0.set_9c14iy$($receiver, 2, new UByte(toByte(193)));
      this$MiniMp3_0.set_9c14iy$($receiver, 3, new UByte(toByte(209)));
      this$MiniMp3_0.set_9c14iy$($receiver, 4, new UByte(toByte(44)));
      this$MiniMp3_0.set_9c14iy$($receiver, 5, new UByte(toByte(28)));
      this$MiniMp3_0.set_9c14iy$($receiver, 6, new UByte(toByte(76)));
      this$MiniMp3_0.set_9c14iy$($receiver, 7, new UByte(toByte(140)));
      this$MiniMp3_0.set_9c14iy$($receiver, 8, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 9, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 10, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 11, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 12, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 13, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 14, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 15, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 16, new UByte(toByte(190)));
      this$MiniMp3_0.set_9c14iy$($receiver, 17, new UByte(toByte(254)));
      this$MiniMp3_0.set_9c14iy$($receiver, 18, new UByte(toByte(222)));
      this$MiniMp3_0.set_9c14iy$($receiver, 19, new UByte(toByte(238)));
      this$MiniMp3_0.set_9c14iy$($receiver, 20, new UByte(toByte(126)));
      this$MiniMp3_0.set_9c14iy$($receiver, 21, new UByte(toByte(94)));
      this$MiniMp3_0.set_9c14iy$($receiver, 22, new UByte(toByte(157)));
      this$MiniMp3_0.set_9c14iy$($receiver, 23, new UByte(toByte(157)));
      this$MiniMp3_0.set_9c14iy$($receiver, 24, new UByte(toByte(109)));
      this$MiniMp3_0.set_9c14iy$($receiver, 25, new UByte(toByte(61)));
      this$MiniMp3_0.set_9c14iy$($receiver, 26, new UByte(toByte(173)));
      this$MiniMp3_0.set_9c14iy$($receiver, 27, new UByte(toByte(205)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_huffman_tab33$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(16 * 1 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_9c14iy$($receiver, 0, new UByte(toByte(252)));
      this$MiniMp3_0.set_9c14iy$($receiver, 1, new UByte(toByte(236)));
      this$MiniMp3_0.set_9c14iy$($receiver, 2, new UByte(toByte(220)));
      this$MiniMp3_0.set_9c14iy$($receiver, 3, new UByte(toByte(204)));
      this$MiniMp3_0.set_9c14iy$($receiver, 4, new UByte(toByte(188)));
      this$MiniMp3_0.set_9c14iy$($receiver, 5, new UByte(toByte(172)));
      this$MiniMp3_0.set_9c14iy$($receiver, 6, new UByte(toByte(156)));
      this$MiniMp3_0.set_9c14iy$($receiver, 7, new UByte(toByte(140)));
      this$MiniMp3_0.set_9c14iy$($receiver, 8, new UByte(toByte(124)));
      this$MiniMp3_0.set_9c14iy$($receiver, 9, new UByte(toByte(108)));
      this$MiniMp3_0.set_9c14iy$($receiver, 10, new UByte(toByte(92)));
      this$MiniMp3_0.set_9c14iy$($receiver, 11, new UByte(toByte(76)));
      this$MiniMp3_0.set_9c14iy$($receiver, 12, new UByte(toByte(60)));
      this$MiniMp3_0.set_9c14iy$($receiver, 13, new UByte(toByte(44)));
      this$MiniMp3_0.set_9c14iy$($receiver, 14, new UByte(toByte(28)));
      this$MiniMp3_0.set_9c14iy$($receiver, 15, new UByte(toByte(12)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_huffman_tabindex$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array32Short($this.alloca_zero_za3lpa$(64).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_gwdnkx$($receiver, 0, toShort(0));
      this$MiniMp3_0.set_gwdnkx$($receiver, 1, toShort(32));
      this$MiniMp3_0.set_gwdnkx$($receiver, 2, toShort(64));
      this$MiniMp3_0.set_gwdnkx$($receiver, 3, toShort(98));
      this$MiniMp3_0.set_gwdnkx$($receiver, 4, toShort(0));
      this$MiniMp3_0.set_gwdnkx$($receiver, 5, toShort(132));
      this$MiniMp3_0.set_gwdnkx$($receiver, 6, toShort(180));
      this$MiniMp3_0.set_gwdnkx$($receiver, 7, toShort(218));
      this$MiniMp3_0.set_gwdnkx$($receiver, 8, toShort(292));
      this$MiniMp3_0.set_gwdnkx$($receiver, 9, toShort(364));
      this$MiniMp3_0.set_gwdnkx$($receiver, 10, toShort(426));
      this$MiniMp3_0.set_gwdnkx$($receiver, 11, toShort(538));
      this$MiniMp3_0.set_gwdnkx$($receiver, 12, toShort(648));
      this$MiniMp3_0.set_gwdnkx$($receiver, 13, toShort(746));
      this$MiniMp3_0.set_gwdnkx$($receiver, 14, toShort(0));
      this$MiniMp3_0.set_gwdnkx$($receiver, 15, toShort(1126));
      this$MiniMp3_0.set_gwdnkx$($receiver, 16, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 17, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 18, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 19, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 20, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 21, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 22, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 23, toShort(1460));
      this$MiniMp3_0.set_gwdnkx$($receiver, 24, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 25, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 26, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 27, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 28, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 29, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 30, toShort(1842));
      this$MiniMp3_0.set_gwdnkx$($receiver, 31, toShort(1842));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_huffman_g_linbits$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(32 * 1 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_9c14iy$($receiver, 0, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 1, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 2, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 3, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 4, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 5, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 6, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 7, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 8, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 9, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 10, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 11, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 12, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 13, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 14, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 15, new UByte(toByte(0)));
      this$MiniMp3_0.set_9c14iy$($receiver, 16, new UByte(toByte(1)));
      this$MiniMp3_0.set_9c14iy$($receiver, 17, new UByte(toByte(2)));
      this$MiniMp3_0.set_9c14iy$($receiver, 18, new UByte(toByte(3)));
      this$MiniMp3_0.set_9c14iy$($receiver, 19, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 20, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 21, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 22, new UByte(toByte(10)));
      this$MiniMp3_0.set_9c14iy$($receiver, 23, new UByte(toByte(13)));
      this$MiniMp3_0.set_9c14iy$($receiver, 24, new UByte(toByte(4)));
      this$MiniMp3_0.set_9c14iy$($receiver, 25, new UByte(toByte(5)));
      this$MiniMp3_0.set_9c14iy$($receiver, 26, new UByte(toByte(6)));
      this$MiniMp3_0.set_9c14iy$($receiver, 27, new UByte(toByte(7)));
      this$MiniMp3_0.set_9c14iy$($receiver, 28, new UByte(toByte(8)));
      this$MiniMp3_0.set_9c14iy$($receiver, 29, new UByte(toByte(9)));
      this$MiniMp3_0.set_9c14iy$($receiver, 30, new UByte(toByte(11)));
      this$MiniMp3_0.set_9c14iy$($receiver, 31, new UByte(toByte(13)));
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_stereo_process_g_pan$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array14Float($this.alloca_zero_za3lpa$(56).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_r1ubxf$($receiver, 0, 0.0);
      this$MiniMp3_0.set_r1ubxf$($receiver, 1, 1.0);
      this$MiniMp3_0.set_r1ubxf$($receiver, 2, 0.21132487);
      this$MiniMp3_0.set_r1ubxf$($receiver, 3, 0.7886751);
      this$MiniMp3_0.set_r1ubxf$($receiver, 4, 0.3660254);
      this$MiniMp3_0.set_r1ubxf$($receiver, 5, 0.6339746);
      this$MiniMp3_0.set_r1ubxf$($receiver, 6, 0.5);
      this$MiniMp3_0.set_r1ubxf$($receiver, 7, 0.5);
      this$MiniMp3_0.set_r1ubxf$($receiver, 8, 0.6339746);
      this$MiniMp3_0.set_r1ubxf$($receiver, 9, 0.3660254);
      this$MiniMp3_0.set_r1ubxf$($receiver, 10, 0.7886751);
      this$MiniMp3_0.set_r1ubxf$($receiver, 11, 0.21132487);
      this$MiniMp3_0.set_r1ubxf$($receiver, 12, 1.0);
      this$MiniMp3_0.set_r1ubxf$($receiver, 13, 0.0);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_antialias_g_aa$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array2Array8Float($this.alloca_zero_za3lpa$(64).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array8Float(this$MiniMp3_0.alloca_zero_za3lpa$(32).ptr);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 0, 0.8574929);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 1, 0.881742);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 2, 0.94962865);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 3, 0.9833146);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 4, 0.9955178);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 5, 0.9991606);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 6, 0.9998992);
      this$MiniMp3_0.set_e7cl9w$($receiver_0, 7, 0.99999315);
      this$MiniMp3_0.set_r4exvm$($receiver, 0, $receiver_0);
      var $receiver_1 = new Array8Float(this$MiniMp3_0.alloca_zero_za3lpa$(32).ptr);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 0, 0.51449573);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 1, 0.47173196);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 2, 0.31337744);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 3, 0.1819132);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 4, 0.09457419);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 5, 0.04096558);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 6, 0.01419856);
      this$MiniMp3_0.set_e7cl9w$($receiver_1, 7, 0.00369997);
      this$MiniMp3_0.set_r4exvm$($receiver, 1, $receiver_1);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_imdct36_g_twid9$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array18Float($this.alloca_zero_za3lpa$(72).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_qaw5lz$($receiver, 0, 0.7372773);
      this$MiniMp3_0.set_qaw5lz$($receiver, 1, 0.7933533);
      this$MiniMp3_0.set_qaw5lz$($receiver, 2, 0.8433915);
      this$MiniMp3_0.set_qaw5lz$($receiver, 3, 0.8870108);
      this$MiniMp3_0.set_qaw5lz$($receiver, 4, 0.9238795);
      this$MiniMp3_0.set_qaw5lz$($receiver, 5, 0.95371693);
      this$MiniMp3_0.set_qaw5lz$($receiver, 6, 0.976296);
      this$MiniMp3_0.set_qaw5lz$($receiver, 7, 0.9914449);
      this$MiniMp3_0.set_qaw5lz$($receiver, 8, 0.99904823);
      this$MiniMp3_0.set_qaw5lz$($receiver, 9, 0.6755902);
      this$MiniMp3_0.set_qaw5lz$($receiver, 10, 0.6087614);
      this$MiniMp3_0.set_qaw5lz$($receiver, 11, 0.53729963);
      this$MiniMp3_0.set_qaw5lz$($receiver, 12, 0.4617486);
      this$MiniMp3_0.set_qaw5lz$($receiver, 13, 0.38268343);
      this$MiniMp3_0.set_qaw5lz$($receiver, 14, 0.3007058);
      this$MiniMp3_0.set_qaw5lz$($receiver, 15, 0.2164396);
      this$MiniMp3_0.set_qaw5lz$($receiver, 16, 0.13052619);
      this$MiniMp3_0.set_qaw5lz$($receiver, 17, 0.04361938);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_imdct12_g_twid3$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array6Float($this.alloca_zero_za3lpa$(24).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_dtvi46$($receiver, 0, 0.7933533);
      this$MiniMp3_0.set_dtvi46$($receiver, 1, 0.9238795);
      this$MiniMp3_0.set_dtvi46$($receiver, 2, 0.9914449);
      this$MiniMp3_0.set_dtvi46$($receiver, 3, 0.6087614);
      this$MiniMp3_0.set_dtvi46$($receiver, 4, 0.38268343);
      this$MiniMp3_0.set_dtvi46$($receiver, 5, 0.13052619);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_L3_imdct_gr_g_mdct_window$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array2Array18Float($this.alloca_zero_za3lpa$(144).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      var $receiver_0 = new Array18Float(this$MiniMp3_0.alloca_zero_za3lpa$(72).ptr);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 0, 0.99904823);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 1, 0.9914449);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 2, 0.976296);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 3, 0.95371693);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 4, 0.9238795);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 5, 0.8870108);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 6, 0.8433915);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 7, 0.7933533);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 8, 0.7372773);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 9, 0.04361938);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 10, 0.13052619);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 11, 0.2164396);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 12, 0.3007058);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 13, 0.38268343);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 14, 0.4617486);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 15, 0.53729963);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 16, 0.6087614);
      this$MiniMp3_0.set_qaw5lz$($receiver_0, 17, 0.6755902);
      this$MiniMp3_0.set_zgtoge$($receiver, 0, $receiver_0);
      var $receiver_1 = new Array18Float(this$MiniMp3_0.alloca_zero_za3lpa$(72).ptr);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 0, 1.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 1, 1.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 2, 1.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 3, 1.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 4, 1.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 5, 1.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 6, 0.9914449);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 7, 0.9238795);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 8, 0.7933533);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 9, 0.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 10, 0.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 11, 0.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 12, 0.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 13, 0.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 14, 0.0);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 15, 0.13052619);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 16, 0.38268343);
      this$MiniMp3_0.set_qaw5lz$($receiver_1, 17, 0.6087614);
      this$MiniMp3_0.set_zgtoge$($receiver, 1, $receiver_1);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_mp3d_DCT_II_g_sec$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new Array24Float($this.alloca_zero_za3lpa$(96).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.set_l8zgyq$($receiver, 0, 10.190008);
      this$MiniMp3_0.set_l8zgyq$($receiver, 1, 0.500603);
      this$MiniMp3_0.set_l8zgyq$($receiver, 2, 0.5024193);
      this$MiniMp3_0.set_l8zgyq$($receiver, 3, 3.4076085);
      this$MiniMp3_0.set_l8zgyq$($receiver, 4, 0.50547093);
      this$MiniMp3_0.set_l8zgyq$($receiver, 5, 0.5224986);
      this$MiniMp3_0.set_l8zgyq$($receiver, 6, 2.057781);
      this$MiniMp3_0.set_l8zgyq$($receiver, 7, 0.5154473);
      this$MiniMp3_0.set_l8zgyq$($receiver, 8, 0.56694406);
      this$MiniMp3_0.set_l8zgyq$($receiver, 9, 1.4841646);
      this$MiniMp3_0.set_l8zgyq$($receiver, 10, 0.5310426);
      this$MiniMp3_0.set_l8zgyq$($receiver, 11, 0.6468218);
      this$MiniMp3_0.set_l8zgyq$($receiver, 12, 1.1694399);
      this$MiniMp3_0.set_l8zgyq$($receiver, 13, 0.5531039);
      this$MiniMp3_0.set_l8zgyq$($receiver, 14, 0.7881546);
      this$MiniMp3_0.set_l8zgyq$($receiver, 15, 0.9725682);
      this$MiniMp3_0.set_l8zgyq$($receiver, 16, 0.582935);
      this$MiniMp3_0.set_l8zgyq$($receiver, 17, 1.0606776);
      this$MiniMp3_0.set_l8zgyq$($receiver, 18, 0.8393496);
      this$MiniMp3_0.set_l8zgyq$($receiver, 19, 0.6225041);
      this$MiniMp3_0.set_l8zgyq$($receiver, 20, 1.7224472);
      this$MiniMp3_0.set_l8zgyq$($receiver, 21, 0.7445363);
      this$MiniMp3_0.set_l8zgyq$($receiver, 22, 0.6748083);
      this$MiniMp3_0.set_l8zgyq$($receiver, 23, 5.1011486);
      return $receiver;
    };
  }
  function MiniMp3$__STATIC_mp3d_synth_g_win$lambda(this$MiniMp3) {
    return function () {
      var $this = this$MiniMp3;
      var $receiver = new CPointer($this.alloca_zero_za3lpa$(240 * 4 | 0).ptr);
      var this$MiniMp3_0 = this$MiniMp3;
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (0 * 4 | 0) | 0, -1.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (1 * 4 | 0) | 0, 26.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (2 * 4 | 0) | 0, -31.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (3 * 4 | 0) | 0, 208.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (4 * 4 | 0) | 0, 218.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (5 * 4 | 0) | 0, 401.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (6 * 4 | 0) | 0, -519.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (7 * 4 | 0) | 0, 2063.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (8 * 4 | 0) | 0, 2000.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (9 * 4 | 0) | 0, 4788.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (10 * 4 | 0) | 0, -5517.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (11 * 4 | 0) | 0, 7134.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (12 * 4 | 0) | 0, 5959.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (13 * 4 | 0) | 0, 35640.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (14 * 4 | 0) | 0, -39336.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (15 * 4 | 0) | 0, 74992.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (16 * 4 | 0) | 0, -1.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (17 * 4 | 0) | 0, 24.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (18 * 4 | 0) | 0, -35.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (19 * 4 | 0) | 0, 202.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (20 * 4 | 0) | 0, 222.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (21 * 4 | 0) | 0, 347.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (22 * 4 | 0) | 0, -581.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (23 * 4 | 0) | 0, 2080.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (24 * 4 | 0) | 0, 1952.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (25 * 4 | 0) | 0, 4425.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (26 * 4 | 0) | 0, -5879.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (27 * 4 | 0) | 0, 7640.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (28 * 4 | 0) | 0, 5288.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (29 * 4 | 0) | 0, 33791.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (30 * 4 | 0) | 0, -41176.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (31 * 4 | 0) | 0, 74856.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (32 * 4 | 0) | 0, -1.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (33 * 4 | 0) | 0, 21.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (34 * 4 | 0) | 0, -38.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (35 * 4 | 0) | 0, 196.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (36 * 4 | 0) | 0, 225.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (37 * 4 | 0) | 0, 294.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (38 * 4 | 0) | 0, -645.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (39 * 4 | 0) | 0, 2087.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (40 * 4 | 0) | 0, 1893.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (41 * 4 | 0) | 0, 4063.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (42 * 4 | 0) | 0, -6237.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (43 * 4 | 0) | 0, 8092.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (44 * 4 | 0) | 0, 4561.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (45 * 4 | 0) | 0, 31947.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (46 * 4 | 0) | 0, -43006.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (47 * 4 | 0) | 0, 74630.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (48 * 4 | 0) | 0, -1.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (49 * 4 | 0) | 0, 19.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (50 * 4 | 0) | 0, -41.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (51 * 4 | 0) | 0, 190.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (52 * 4 | 0) | 0, 227.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (53 * 4 | 0) | 0, 244.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (54 * 4 | 0) | 0, -711.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (55 * 4 | 0) | 0, 2085.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (56 * 4 | 0) | 0, 1822.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (57 * 4 | 0) | 0, 3705.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (58 * 4 | 0) | 0, -6589.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (59 * 4 | 0) | 0, 8492.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (60 * 4 | 0) | 0, 3776.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (61 * 4 | 0) | 0, 30112.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (62 * 4 | 0) | 0, -44821.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (63 * 4 | 0) | 0, 74313.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (64 * 4 | 0) | 0, -1.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (65 * 4 | 0) | 0, 17.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (66 * 4 | 0) | 0, -45.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (67 * 4 | 0) | 0, 183.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (68 * 4 | 0) | 0, 228.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (69 * 4 | 0) | 0, 197.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (70 * 4 | 0) | 0, -779.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (71 * 4 | 0) | 0, 2075.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (72 * 4 | 0) | 0, 1739.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (73 * 4 | 0) | 0, 3351.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (74 * 4 | 0) | 0, -6935.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (75 * 4 | 0) | 0, 8840.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (76 * 4 | 0) | 0, 2935.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (77 * 4 | 0) | 0, 28289.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (78 * 4 | 0) | 0, -46617.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (79 * 4 | 0) | 0, 73908.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (80 * 4 | 0) | 0, -1.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (81 * 4 | 0) | 0, 16.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (82 * 4 | 0) | 0, -49.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (83 * 4 | 0) | 0, 176.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (84 * 4 | 0) | 0, 228.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (85 * 4 | 0) | 0, 153.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (86 * 4 | 0) | 0, -848.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (87 * 4 | 0) | 0, 2057.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (88 * 4 | 0) | 0, 1644.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (89 * 4 | 0) | 0, 3004.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (90 * 4 | 0) | 0, -7271.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (91 * 4 | 0) | 0, 9139.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (92 * 4 | 0) | 0, 2037.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (93 * 4 | 0) | 0, 26482.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (94 * 4 | 0) | 0, -48390.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (95 * 4 | 0) | 0, 73415.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (96 * 4 | 0) | 0, -2.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (97 * 4 | 0) | 0, 14.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (98 * 4 | 0) | 0, -53.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (99 * 4 | 0) | 0, 169.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (100 * 4 | 0) | 0, 227.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (101 * 4 | 0) | 0, 111.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (102 * 4 | 0) | 0, -919.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (103 * 4 | 0) | 0, 2032.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (104 * 4 | 0) | 0, 1535.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (105 * 4 | 0) | 0, 2663.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (106 * 4 | 0) | 0, -7597.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (107 * 4 | 0) | 0, 9389.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (108 * 4 | 0) | 0, 1082.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (109 * 4 | 0) | 0, 24694.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (110 * 4 | 0) | 0, -50137.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (111 * 4 | 0) | 0, 72835.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (112 * 4 | 0) | 0, -2.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (113 * 4 | 0) | 0, 13.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (114 * 4 | 0) | 0, -58.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (115 * 4 | 0) | 0, 161.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (116 * 4 | 0) | 0, 224.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (117 * 4 | 0) | 0, 72.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (118 * 4 | 0) | 0, -991.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (119 * 4 | 0) | 0, 2001.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (120 * 4 | 0) | 0, 1414.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (121 * 4 | 0) | 0, 2330.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (122 * 4 | 0) | 0, -7910.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (123 * 4 | 0) | 0, 9592.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (124 * 4 | 0) | 0, 70.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (125 * 4 | 0) | 0, 22929.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (126 * 4 | 0) | 0, -51853.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (127 * 4 | 0) | 0, 72169.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (128 * 4 | 0) | 0, -2.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (129 * 4 | 0) | 0, 11.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (130 * 4 | 0) | 0, -63.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (131 * 4 | 0) | 0, 154.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (132 * 4 | 0) | 0, 221.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (133 * 4 | 0) | 0, 36.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (134 * 4 | 0) | 0, -1064.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (135 * 4 | 0) | 0, 1962.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (136 * 4 | 0) | 0, 1280.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (137 * 4 | 0) | 0, 2006.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (138 * 4 | 0) | 0, -8209.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (139 * 4 | 0) | 0, 9750.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (140 * 4 | 0) | 0, -998.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (141 * 4 | 0) | 0, 21189.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (142 * 4 | 0) | 0, -53534.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (143 * 4 | 0) | 0, 71420.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (144 * 4 | 0) | 0, -2.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (145 * 4 | 0) | 0, 10.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (146 * 4 | 0) | 0, -68.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (147 * 4 | 0) | 0, 147.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (148 * 4 | 0) | 0, 215.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (149 * 4 | 0) | 0, 2.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (150 * 4 | 0) | 0, -1137.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (151 * 4 | 0) | 0, 1919.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (152 * 4 | 0) | 0, 1131.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (153 * 4 | 0) | 0, 1692.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (154 * 4 | 0) | 0, -8491.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (155 * 4 | 0) | 0, 9863.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (156 * 4 | 0) | 0, -2122.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (157 * 4 | 0) | 0, 19478.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (158 * 4 | 0) | 0, -55178.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (159 * 4 | 0) | 0, 70590.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (160 * 4 | 0) | 0, -3.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (161 * 4 | 0) | 0, 9.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (162 * 4 | 0) | 0, -73.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (163 * 4 | 0) | 0, 139.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (164 * 4 | 0) | 0, 208.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (165 * 4 | 0) | 0, -29.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (166 * 4 | 0) | 0, -1210.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (167 * 4 | 0) | 0, 1870.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (168 * 4 | 0) | 0, 970.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (169 * 4 | 0) | 0, 1388.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (170 * 4 | 0) | 0, -8755.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (171 * 4 | 0) | 0, 9935.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (172 * 4 | 0) | 0, -3300.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (173 * 4 | 0) | 0, 17799.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (174 * 4 | 0) | 0, -56778.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (175 * 4 | 0) | 0, 69679.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (176 * 4 | 0) | 0, -3.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (177 * 4 | 0) | 0, 8.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (178 * 4 | 0) | 0, -79.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (179 * 4 | 0) | 0, 132.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (180 * 4 | 0) | 0, 200.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (181 * 4 | 0) | 0, -57.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (182 * 4 | 0) | 0, -1283.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (183 * 4 | 0) | 0, 1817.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (184 * 4 | 0) | 0, 794.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (185 * 4 | 0) | 0, 1095.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (186 * 4 | 0) | 0, -8998.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (187 * 4 | 0) | 0, 9966.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (188 * 4 | 0) | 0, -4533.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (189 * 4 | 0) | 0, 16155.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (190 * 4 | 0) | 0, -58333.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (191 * 4 | 0) | 0, 68692.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (192 * 4 | 0) | 0, -4.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (193 * 4 | 0) | 0, 7.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (194 * 4 | 0) | 0, -85.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (195 * 4 | 0) | 0, 125.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (196 * 4 | 0) | 0, 189.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (197 * 4 | 0) | 0, -83.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (198 * 4 | 0) | 0, -1356.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (199 * 4 | 0) | 0, 1759.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (200 * 4 | 0) | 0, 605.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (201 * 4 | 0) | 0, 814.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (202 * 4 | 0) | 0, -9219.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (203 * 4 | 0) | 0, 9959.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (204 * 4 | 0) | 0, -5818.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (205 * 4 | 0) | 0, 14548.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (206 * 4 | 0) | 0, -59838.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (207 * 4 | 0) | 0, 67629.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (208 * 4 | 0) | 0, -4.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (209 * 4 | 0) | 0, 7.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (210 * 4 | 0) | 0, -91.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (211 * 4 | 0) | 0, 117.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (212 * 4 | 0) | 0, 177.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (213 * 4 | 0) | 0, -106.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (214 * 4 | 0) | 0, -1428.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (215 * 4 | 0) | 0, 1698.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (216 * 4 | 0) | 0, 402.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (217 * 4 | 0) | 0, 545.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (218 * 4 | 0) | 0, -9416.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (219 * 4 | 0) | 0, 9916.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (220 * 4 | 0) | 0, -7154.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (221 * 4 | 0) | 0, 12980.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (222 * 4 | 0) | 0, -61289.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (223 * 4 | 0) | 0, 66494.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (224 * 4 | 0) | 0, -5.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (225 * 4 | 0) | 0, 6.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (226 * 4 | 0) | 0, -97.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (227 * 4 | 0) | 0, 111.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (228 * 4 | 0) | 0, 163.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (229 * 4 | 0) | 0, -127.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (230 * 4 | 0) | 0, -1498.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (231 * 4 | 0) | 0, 1634.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (232 * 4 | 0) | 0, 185.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (233 * 4 | 0) | 0, 288.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (234 * 4 | 0) | 0, -9585.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (235 * 4 | 0) | 0, 9838.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (236 * 4 | 0) | 0, -8540.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (237 * 4 | 0) | 0, 11455.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (238 * 4 | 0) | 0, -62684.0);
      this$MiniMp3_0.swf_24o109$($receiver.ptr + (239 * 4 | 0) | 0, 65290.0);
      return $receiver;
    };
  }
  MiniMp3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MiniMp3',
    interfaces: [Runtime]
  };
  function mp3dec_frame_info_t(ptr) {
    mp3dec_frame_info_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function mp3dec_frame_info_t$Companion() {
    mp3dec_frame_info_t$Companion_instance = this;
    this.SIZE_BYTES = 20;
    this.SIZE_pnova0$_0 = 20;
    this.OFFSET_frame_bytes = 0;
    this.OFFSET_channels = 4;
    this.OFFSET_hz = 8;
    this.OFFSET_layer = 12;
    this.OFFSET_bitrate_kbps = 16;
  }
  Object.defineProperty(mp3dec_frame_info_t$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_pnova0$_0;
    }
  });
  mp3dec_frame_info_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var mp3dec_frame_info_t$Companion_instance = null;
  function mp3dec_frame_info_t$Companion_getInstance() {
    if (mp3dec_frame_info_t$Companion_instance === null) {
      new mp3dec_frame_info_t$Companion();
    }
    return mp3dec_frame_info_t$Companion_instance;
  }
  mp3dec_frame_info_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mp3dec_frame_info_t',
    interfaces: [AbstractRuntime$IStruct]
  };
  mp3dec_frame_info_t.prototype.unbox = function () {
    return this.ptr;
  };
  mp3dec_frame_info_t.prototype.toString = function () {
    return 'mp3dec_frame_info_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  mp3dec_frame_info_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  mp3dec_frame_info_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function mp3dec_t(ptr) {
    mp3dec_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function mp3dec_t$Companion() {
    mp3dec_t$Companion_instance = this;
    this.SIZE_BYTES = 6667;
    this.SIZE_t269b1$_0 = 6667;
    this.OFFSET_mdct_overlap = 0;
    this.OFFSET_qmf_state = 2304;
    this.OFFSET_reserv = 6144;
    this.OFFSET_free_format_bytes = 6148;
    this.OFFSET_header = 6152;
    this.OFFSET_reserv_buf = 6156;
  }
  Object.defineProperty(mp3dec_t$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_t269b1$_0;
    }
  });
  mp3dec_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var mp3dec_t$Companion_instance = null;
  function mp3dec_t$Companion_getInstance() {
    if (mp3dec_t$Companion_instance === null) {
      new mp3dec_t$Companion();
    }
    return mp3dec_t$Companion_instance;
  }
  mp3dec_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mp3dec_t',
    interfaces: [AbstractRuntime$IStruct]
  };
  mp3dec_t.prototype.unbox = function () {
    return this.ptr;
  };
  mp3dec_t.prototype.toString = function () {
    return 'mp3dec_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  mp3dec_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  mp3dec_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function bs_t(ptr) {
    bs_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function bs_t$Companion() {
    bs_t$Companion_instance = this;
    this.SIZE_BYTES = 12;
    this.SIZE_875vha$_0 = 12;
    this.OFFSET_buf = 0;
    this.OFFSET_pos = 4;
    this.OFFSET_limit = 8;
  }
  Object.defineProperty(bs_t$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_875vha$_0;
    }
  });
  bs_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var bs_t$Companion_instance = null;
  function bs_t$Companion_getInstance() {
    if (bs_t$Companion_instance === null) {
      new bs_t$Companion();
    }
    return bs_t$Companion_instance;
  }
  bs_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'bs_t',
    interfaces: [AbstractRuntime$IStruct]
  };
  bs_t.prototype.unbox = function () {
    return this.ptr;
  };
  bs_t.prototype.toString = function () {
    return 'bs_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  bs_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  bs_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function L12_scale_info(ptr) {
    L12_scale_info$Companion_getInstance();
    this.ptr = ptr;
  }
  function L12_scale_info$Companion() {
    L12_scale_info$Companion_instance = this;
    this.SIZE_BYTES = 898;
    this.SIZE_y6g8xd$_0 = 898;
    this.OFFSET_scf = 0;
    this.OFFSET_total_bands = 768;
    this.OFFSET_stereo_bands = 769;
    this.OFFSET_bitalloc = 770;
    this.OFFSET_scfcod = 834;
  }
  Object.defineProperty(L12_scale_info$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_y6g8xd$_0;
    }
  });
  L12_scale_info$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var L12_scale_info$Companion_instance = null;
  function L12_scale_info$Companion_getInstance() {
    if (L12_scale_info$Companion_instance === null) {
      new L12_scale_info$Companion();
    }
    return L12_scale_info$Companion_instance;
  }
  L12_scale_info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'L12_scale_info',
    interfaces: [AbstractRuntime$IStruct]
  };
  L12_scale_info.prototype.unbox = function () {
    return this.ptr;
  };
  L12_scale_info.prototype.toString = function () {
    return 'L12_scale_info(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  L12_scale_info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  L12_scale_info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function L12_subband_alloc_t(ptr) {
    L12_subband_alloc_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function L12_subband_alloc_t$Companion() {
    L12_subband_alloc_t$Companion_instance = this;
    this.SIZE_BYTES = 3;
    this.SIZE_8a6tt0$_0 = 3;
    this.OFFSET_tab_offset = 0;
    this.OFFSET_code_tab_width = 1;
    this.OFFSET_band_count = 2;
  }
  Object.defineProperty(L12_subband_alloc_t$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_8a6tt0$_0;
    }
  });
  L12_subband_alloc_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var L12_subband_alloc_t$Companion_instance = null;
  function L12_subband_alloc_t$Companion_getInstance() {
    if (L12_subband_alloc_t$Companion_instance === null) {
      new L12_subband_alloc_t$Companion();
    }
    return L12_subband_alloc_t$Companion_instance;
  }
  L12_subband_alloc_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'L12_subband_alloc_t',
    interfaces: [AbstractRuntime$IStruct]
  };
  L12_subband_alloc_t.prototype.unbox = function () {
    return this.ptr;
  };
  L12_subband_alloc_t.prototype.toString = function () {
    return 'L12_subband_alloc_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  L12_subband_alloc_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  L12_subband_alloc_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function L3_gr_info_t(ptr) {
    L3_gr_info_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function L3_gr_info_t$Companion() {
    L3_gr_info_t$Companion_instance = this;
    this.SIZE_BYTES = 28;
    this.SIZE_woc0at$_0 = 28;
    this.OFFSET_sfbtab = 0;
    this.OFFSET_part_23_length = 4;
    this.OFFSET_big_values = 6;
    this.OFFSET_scalefac_compress = 8;
    this.OFFSET_global_gain = 10;
    this.OFFSET_block_type = 11;
    this.OFFSET_mixed_block_flag = 12;
    this.OFFSET_n_long_sfb = 13;
    this.OFFSET_n_short_sfb = 14;
    this.OFFSET_table_select = 15;
    this.OFFSET_region_count = 18;
    this.OFFSET_subblock_gain = 21;
    this.OFFSET_preflag = 24;
    this.OFFSET_scalefac_scale = 25;
    this.OFFSET_count1_table = 26;
    this.OFFSET_scfsi = 27;
  }
  Object.defineProperty(L3_gr_info_t$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_woc0at$_0;
    }
  });
  L3_gr_info_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var L3_gr_info_t$Companion_instance = null;
  function L3_gr_info_t$Companion_getInstance() {
    if (L3_gr_info_t$Companion_instance === null) {
      new L3_gr_info_t$Companion();
    }
    return L3_gr_info_t$Companion_instance;
  }
  L3_gr_info_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'L3_gr_info_t',
    interfaces: [AbstractRuntime$IStruct]
  };
  L3_gr_info_t.prototype.unbox = function () {
    return this.ptr;
  };
  L3_gr_info_t.prototype.toString = function () {
    return 'L3_gr_info_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  L3_gr_info_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  L3_gr_info_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function mp3dec_scratch_t(ptr) {
    mp3dec_scratch_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function mp3dec_scratch_t$Companion() {
    mp3dec_scratch_t$Companion_instance = this;
    this.SIZE_BYTES = 16233;
    this.SIZE_nhhhsu$_0 = 16233;
    this.OFFSET_bs = 0;
    this.OFFSET_maindata = 12;
    this.OFFSET_gr_info = 2827;
    this.OFFSET_grbuf = 2939;
    this.OFFSET_scf = 7547;
    this.OFFSET_syn = 7707;
    this.OFFSET_ist_pos = 16155;
  }
  Object.defineProperty(mp3dec_scratch_t$Companion.prototype, 'SIZE', {
    get: function () {
      return this.SIZE_nhhhsu$_0;
    }
  });
  mp3dec_scratch_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [AbstractRuntime$IStructCompanion]
  };
  var mp3dec_scratch_t$Companion_instance = null;
  function mp3dec_scratch_t$Companion_getInstance() {
    if (mp3dec_scratch_t$Companion_instance === null) {
      new mp3dec_scratch_t$Companion();
    }
    return mp3dec_scratch_t$Companion_instance;
  }
  mp3dec_scratch_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'mp3dec_scratch_t',
    interfaces: [AbstractRuntime$IStruct]
  };
  mp3dec_scratch_t.prototype.unbox = function () {
    return this.ptr;
  };
  mp3dec_scratch_t.prototype.toString = function () {
    return 'mp3dec_scratch_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  mp3dec_scratch_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  mp3dec_scratch_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2Array288Float(ptr) {
    Array2Array288Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2Array288Float$Companion() {
    Array2Array288Float$Companion_instance = this;
    this.NUM_ELEMENTS = 2;
    this.ELEMENT_SIZE_BYTES = 1152;
    this.TOTAL_SIZE_BYTES = 2304;
  }
  Array2Array288Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2Array288Float$Companion_instance = null;
  function Array2Array288Float$Companion_getInstance() {
    if (Array2Array288Float$Companion_instance === null) {
      new Array2Array288Float$Companion();
    }
    return Array2Array288Float$Companion_instance;
  }
  Array2Array288Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1152 | 0) | 0;
  };
  Array2Array288Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2Array288Float',
    interfaces: []
  };
  Array2Array288Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array2Array288Float.prototype.toString = function () {
    return 'Array2Array288Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2Array288Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2Array288Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array288Float(ptr) {
    Array288Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array288Float$Companion() {
    Array288Float$Companion_instance = this;
    this.NUM_ELEMENTS = 288;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 1152;
  }
  Array288Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array288Float$Companion_instance = null;
  function Array288Float$Companion_getInstance() {
    if (Array288Float$Companion_instance === null) {
      new Array288Float$Companion();
    }
    return Array288Float$Companion_instance;
  }
  Array288Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array288Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array288Float',
    interfaces: []
  };
  Array288Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array288Float.prototype.toString = function () {
    return 'Array288Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array288Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array288Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array960Float(ptr) {
    Array960Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array960Float$Companion() {
    Array960Float$Companion_instance = this;
    this.NUM_ELEMENTS = 960;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 3840;
  }
  Array960Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array960Float$Companion_instance = null;
  function Array960Float$Companion_getInstance() {
    if (Array960Float$Companion_instance === null) {
      new Array960Float$Companion();
    }
    return Array960Float$Companion_instance;
  }
  Array960Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array960Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array960Float',
    interfaces: []
  };
  Array960Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array960Float.prototype.toString = function () {
    return 'Array960Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array960Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array960Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array4UByte(ptr) {
    Array4UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array4UByte$Companion() {
    Array4UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 4;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 4;
  }
  Array4UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array4UByte$Companion_instance = null;
  function Array4UByte$Companion_getInstance() {
    if (Array4UByte$Companion_instance === null) {
      new Array4UByte$Companion();
    }
    return Array4UByte$Companion_instance;
  }
  Array4UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array4UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array4UByte',
    interfaces: []
  };
  Array4UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array4UByte.prototype.toString = function () {
    return 'Array4UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array4UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array4UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array511UByte(ptr) {
    Array511UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array511UByte$Companion() {
    Array511UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 511;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 511;
  }
  Array511UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array511UByte$Companion_instance = null;
  function Array511UByte$Companion_getInstance() {
    if (Array511UByte$Companion_instance === null) {
      new Array511UByte$Companion();
    }
    return Array511UByte$Companion_instance;
  }
  Array511UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array511UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array511UByte',
    interfaces: []
  };
  Array511UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array511UByte.prototype.toString = function () {
    return 'Array511UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array511UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array511UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array192Float(ptr) {
    Array192Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array192Float$Companion() {
    Array192Float$Companion_instance = this;
    this.NUM_ELEMENTS = 192;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 768;
  }
  Array192Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array192Float$Companion_instance = null;
  function Array192Float$Companion_getInstance() {
    if (Array192Float$Companion_instance === null) {
      new Array192Float$Companion();
    }
    return Array192Float$Companion_instance;
  }
  Array192Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array192Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array192Float',
    interfaces: []
  };
  Array192Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array192Float.prototype.toString = function () {
    return 'Array192Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array192Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array192Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array64UByte(ptr) {
    Array64UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array64UByte$Companion() {
    Array64UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 64;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 64;
  }
  Array64UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array64UByte$Companion_instance = null;
  function Array64UByte$Companion_getInstance() {
    if (Array64UByte$Companion_instance === null) {
      new Array64UByte$Companion();
    }
    return Array64UByte$Companion_instance;
  }
  Array64UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array64UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array64UByte',
    interfaces: []
  };
  Array64UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array64UByte.prototype.toString = function () {
    return 'Array64UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array64UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array64UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array3UByte(ptr) {
    Array3UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array3UByte$Companion() {
    Array3UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 3;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 3;
  }
  Array3UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array3UByte$Companion_instance = null;
  function Array3UByte$Companion_getInstance() {
    if (Array3UByte$Companion_instance === null) {
      new Array3UByte$Companion();
    }
    return Array3UByte$Companion_instance;
  }
  Array3UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array3UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array3UByte',
    interfaces: []
  };
  Array3UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array3UByte.prototype.toString = function () {
    return 'Array3UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array3UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array3UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2815UByte(ptr) {
    Array2815UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2815UByte$Companion() {
    Array2815UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 2815;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 2815;
  }
  Array2815UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2815UByte$Companion_instance = null;
  function Array2815UByte$Companion_getInstance() {
    if (Array2815UByte$Companion_instance === null) {
      new Array2815UByte$Companion();
    }
    return Array2815UByte$Companion_instance;
  }
  Array2815UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array2815UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2815UByte',
    interfaces: []
  };
  Array2815UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array2815UByte.prototype.toString = function () {
    return 'Array2815UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2815UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2815UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array4L3_gr_info_t(ptr) {
    Array4L3_gr_info_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array4L3_gr_info_t$Companion() {
    Array4L3_gr_info_t$Companion_instance = this;
    this.NUM_ELEMENTS = 4;
    this.ELEMENT_SIZE_BYTES = 28;
    this.TOTAL_SIZE_BYTES = 112;
  }
  Array4L3_gr_info_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array4L3_gr_info_t$Companion_instance = null;
  function Array4L3_gr_info_t$Companion_getInstance() {
    if (Array4L3_gr_info_t$Companion_instance === null) {
      new Array4L3_gr_info_t$Companion();
    }
    return Array4L3_gr_info_t$Companion_instance;
  }
  Array4L3_gr_info_t.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 28 | 0) | 0;
  };
  Array4L3_gr_info_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array4L3_gr_info_t',
    interfaces: []
  };
  Array4L3_gr_info_t.prototype.unbox = function () {
    return this.ptr;
  };
  Array4L3_gr_info_t.prototype.toString = function () {
    return 'Array4L3_gr_info_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array4L3_gr_info_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array4L3_gr_info_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2Array576Float(ptr) {
    Array2Array576Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2Array576Float$Companion() {
    Array2Array576Float$Companion_instance = this;
    this.NUM_ELEMENTS = 2;
    this.ELEMENT_SIZE_BYTES = 2304;
    this.TOTAL_SIZE_BYTES = 4608;
  }
  Array2Array576Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2Array576Float$Companion_instance = null;
  function Array2Array576Float$Companion_getInstance() {
    if (Array2Array576Float$Companion_instance === null) {
      new Array2Array576Float$Companion();
    }
    return Array2Array576Float$Companion_instance;
  }
  Array2Array576Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 2304 | 0) | 0;
  };
  Array2Array576Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2Array576Float',
    interfaces: []
  };
  Array2Array576Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array2Array576Float.prototype.toString = function () {
    return 'Array2Array576Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2Array576Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2Array576Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array576Float(ptr) {
    Array576Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array576Float$Companion() {
    Array576Float$Companion_instance = this;
    this.NUM_ELEMENTS = 576;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 2304;
  }
  Array576Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array576Float$Companion_instance = null;
  function Array576Float$Companion_getInstance() {
    if (Array576Float$Companion_instance === null) {
      new Array576Float$Companion();
    }
    return Array576Float$Companion_instance;
  }
  Array576Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array576Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array576Float',
    interfaces: []
  };
  Array576Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array576Float.prototype.toString = function () {
    return 'Array576Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array576Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array576Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array40Float(ptr) {
    Array40Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array40Float$Companion() {
    Array40Float$Companion_instance = this;
    this.NUM_ELEMENTS = 40;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 160;
  }
  Array40Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array40Float$Companion_instance = null;
  function Array40Float$Companion_getInstance() {
    if (Array40Float$Companion_instance === null) {
      new Array40Float$Companion();
    }
    return Array40Float$Companion_instance;
  }
  Array40Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array40Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array40Float',
    interfaces: []
  };
  Array40Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array40Float.prototype.toString = function () {
    return 'Array40Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array40Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array40Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array33Array64Float(ptr) {
    Array33Array64Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array33Array64Float$Companion() {
    Array33Array64Float$Companion_instance = this;
    this.NUM_ELEMENTS = 33;
    this.ELEMENT_SIZE_BYTES = 256;
    this.TOTAL_SIZE_BYTES = 8448;
  }
  Array33Array64Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array33Array64Float$Companion_instance = null;
  function Array33Array64Float$Companion_getInstance() {
    if (Array33Array64Float$Companion_instance === null) {
      new Array33Array64Float$Companion();
    }
    return Array33Array64Float$Companion_instance;
  }
  Array33Array64Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 256 | 0) | 0;
  };
  Array33Array64Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array33Array64Float',
    interfaces: []
  };
  Array33Array64Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array33Array64Float.prototype.toString = function () {
    return 'Array33Array64Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array33Array64Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array33Array64Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array64Float(ptr) {
    Array64Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array64Float$Companion() {
    Array64Float$Companion_instance = this;
    this.NUM_ELEMENTS = 64;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 256;
  }
  Array64Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array64Float$Companion_instance = null;
  function Array64Float$Companion_getInstance() {
    if (Array64Float$Companion_instance === null) {
      new Array64Float$Companion();
    }
    return Array64Float$Companion_instance;
  }
  Array64Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array64Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array64Float',
    interfaces: []
  };
  Array64Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array64Float.prototype.toString = function () {
    return 'Array64Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array64Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array64Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2Array39UByte(ptr) {
    Array2Array39UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2Array39UByte$Companion() {
    Array2Array39UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 2;
    this.ELEMENT_SIZE_BYTES = 39;
    this.TOTAL_SIZE_BYTES = 78;
  }
  Array2Array39UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2Array39UByte$Companion_instance = null;
  function Array2Array39UByte$Companion_getInstance() {
    if (Array2Array39UByte$Companion_instance === null) {
      new Array2Array39UByte$Companion();
    }
    return Array2Array39UByte$Companion_instance;
  }
  Array2Array39UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 39 | 0) | 0;
  };
  Array2Array39UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2Array39UByte',
    interfaces: []
  };
  Array2Array39UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array2Array39UByte.prototype.toString = function () {
    return 'Array2Array39UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2Array39UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2Array39UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array39UByte(ptr) {
    Array39UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array39UByte$Companion() {
    Array39UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 39;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 39;
  }
  Array39UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array39UByte$Companion_instance = null;
  function Array39UByte$Companion_getInstance() {
    if (Array39UByte$Companion_instance === null) {
      new Array39UByte$Companion();
    }
    return Array39UByte$Companion_instance;
  }
  Array39UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array39UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array39UByte',
    interfaces: []
  };
  Array39UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array39UByte.prototype.toString = function () {
    return 'Array39UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array39UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array39UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2Array3Array15UByte(ptr) {
    Array2Array3Array15UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2Array3Array15UByte$Companion() {
    Array2Array3Array15UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 2;
    this.ELEMENT_SIZE_BYTES = 45;
    this.TOTAL_SIZE_BYTES = 90;
  }
  Array2Array3Array15UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2Array3Array15UByte$Companion_instance = null;
  function Array2Array3Array15UByte$Companion_getInstance() {
    if (Array2Array3Array15UByte$Companion_instance === null) {
      new Array2Array3Array15UByte$Companion();
    }
    return Array2Array3Array15UByte$Companion_instance;
  }
  Array2Array3Array15UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 45 | 0) | 0;
  };
  Array2Array3Array15UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2Array3Array15UByte',
    interfaces: []
  };
  Array2Array3Array15UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array2Array3Array15UByte.prototype.toString = function () {
    return 'Array2Array3Array15UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2Array3Array15UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2Array3Array15UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array3Array15UByte(ptr) {
    Array3Array15UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array3Array15UByte$Companion() {
    Array3Array15UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 3;
    this.ELEMENT_SIZE_BYTES = 15;
    this.TOTAL_SIZE_BYTES = 45;
  }
  Array3Array15UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array3Array15UByte$Companion_instance = null;
  function Array3Array15UByte$Companion_getInstance() {
    if (Array3Array15UByte$Companion_instance === null) {
      new Array3Array15UByte$Companion();
    }
    return Array3Array15UByte$Companion_instance;
  }
  Array3Array15UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 15 | 0) | 0;
  };
  Array3Array15UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array3Array15UByte',
    interfaces: []
  };
  Array3Array15UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array3Array15UByte.prototype.toString = function () {
    return 'Array3Array15UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array3Array15UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array3Array15UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array15UByte(ptr) {
    Array15UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array15UByte$Companion() {
    Array15UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 15;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 15;
  }
  Array15UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array15UByte$Companion_instance = null;
  function Array15UByte$Companion_getInstance() {
    if (Array15UByte$Companion_instance === null) {
      new Array15UByte$Companion();
    }
    return Array15UByte$Companion_instance;
  }
  Array15UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array15UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array15UByte',
    interfaces: []
  };
  Array15UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array15UByte.prototype.toString = function () {
    return 'Array15UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array15UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array15UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array3UInt(ptr) {
    Array3UInt$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array3UInt$Companion() {
    Array3UInt$Companion_instance = this;
    this.NUM_ELEMENTS = 3;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 12;
  }
  Array3UInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array3UInt$Companion_instance = null;
  function Array3UInt$Companion_getInstance() {
    if (Array3UInt$Companion_instance === null) {
      new Array3UInt$Companion();
    }
    return Array3UInt$Companion_instance;
  }
  Array3UInt.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array3UInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array3UInt',
    interfaces: []
  };
  Array3UInt.prototype.unbox = function () {
    return this.ptr;
  };
  Array3UInt.prototype.toString = function () {
    return 'Array3UInt(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array3UInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array3UInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array54Float(ptr) {
    Array54Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array54Float$Companion() {
    Array54Float$Companion_instance = this;
    this.NUM_ELEMENTS = 54;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 216;
  }
  Array54Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array54Float$Companion_instance = null;
  function Array54Float$Companion_getInstance() {
    if (Array54Float$Companion_instance === null) {
      new Array54Float$Companion();
    }
    return Array54Float$Companion_instance;
  }
  Array54Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array54Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array54Float',
    interfaces: []
  };
  Array54Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array54Float.prototype.toString = function () {
    return 'Array54Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array54Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array54Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array8Array23UByte(ptr) {
    Array8Array23UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array8Array23UByte$Companion() {
    Array8Array23UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 8;
    this.ELEMENT_SIZE_BYTES = 23;
    this.TOTAL_SIZE_BYTES = 184;
  }
  Array8Array23UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array8Array23UByte$Companion_instance = null;
  function Array8Array23UByte$Companion_getInstance() {
    if (Array8Array23UByte$Companion_instance === null) {
      new Array8Array23UByte$Companion();
    }
    return Array8Array23UByte$Companion_instance;
  }
  Array8Array23UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 23 | 0) | 0;
  };
  Array8Array23UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array8Array23UByte',
    interfaces: []
  };
  Array8Array23UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array8Array23UByte.prototype.toString = function () {
    return 'Array8Array23UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array8Array23UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array8Array23UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array23UByte(ptr) {
    Array23UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array23UByte$Companion() {
    Array23UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 23;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 23;
  }
  Array23UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array23UByte$Companion_instance = null;
  function Array23UByte$Companion_getInstance() {
    if (Array23UByte$Companion_instance === null) {
      new Array23UByte$Companion();
    }
    return Array23UByte$Companion_instance;
  }
  Array23UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array23UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array23UByte',
    interfaces: []
  };
  Array23UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array23UByte.prototype.toString = function () {
    return 'Array23UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array23UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array23UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array8Array40UByte(ptr) {
    Array8Array40UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array8Array40UByte$Companion() {
    Array8Array40UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 8;
    this.ELEMENT_SIZE_BYTES = 40;
    this.TOTAL_SIZE_BYTES = 320;
  }
  Array8Array40UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array8Array40UByte$Companion_instance = null;
  function Array8Array40UByte$Companion_getInstance() {
    if (Array8Array40UByte$Companion_instance === null) {
      new Array8Array40UByte$Companion();
    }
    return Array8Array40UByte$Companion_instance;
  }
  Array8Array40UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 40 | 0) | 0;
  };
  Array8Array40UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array8Array40UByte',
    interfaces: []
  };
  Array8Array40UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array8Array40UByte.prototype.toString = function () {
    return 'Array8Array40UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array8Array40UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array8Array40UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array40UByte(ptr) {
    Array40UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array40UByte$Companion() {
    Array40UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 40;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 40;
  }
  Array40UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array40UByte$Companion_instance = null;
  function Array40UByte$Companion_getInstance() {
    if (Array40UByte$Companion_instance === null) {
      new Array40UByte$Companion();
    }
    return Array40UByte$Companion_instance;
  }
  Array40UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array40UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array40UByte',
    interfaces: []
  };
  Array40UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array40UByte.prototype.toString = function () {
    return 'Array40UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array40UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array40UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array4Float(ptr) {
    Array4Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array4Float$Companion() {
    Array4Float$Companion_instance = this;
    this.NUM_ELEMENTS = 4;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 16;
  }
  Array4Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array4Float$Companion_instance = null;
  function Array4Float$Companion_getInstance() {
    if (Array4Float$Companion_instance === null) {
      new Array4Float$Companion();
    }
    return Array4Float$Companion_instance;
  }
  Array4Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array4Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array4Float',
    interfaces: []
  };
  Array4Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array4Float.prototype.toString = function () {
    return 'Array4Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array4Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array4Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array3Array28UByte(ptr) {
    Array3Array28UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array3Array28UByte$Companion() {
    Array3Array28UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 3;
    this.ELEMENT_SIZE_BYTES = 28;
    this.TOTAL_SIZE_BYTES = 84;
  }
  Array3Array28UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array3Array28UByte$Companion_instance = null;
  function Array3Array28UByte$Companion_getInstance() {
    if (Array3Array28UByte$Companion_instance === null) {
      new Array3Array28UByte$Companion();
    }
    return Array3Array28UByte$Companion_instance;
  }
  Array3Array28UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 28 | 0) | 0;
  };
  Array3Array28UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array3Array28UByte',
    interfaces: []
  };
  Array3Array28UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array3Array28UByte.prototype.toString = function () {
    return 'Array3Array28UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array3Array28UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array3Array28UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array28UByte(ptr) {
    Array28UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array28UByte$Companion() {
    Array28UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 28;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 28;
  }
  Array28UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array28UByte$Companion_instance = null;
  function Array28UByte$Companion_getInstance() {
    if (Array28UByte$Companion_instance === null) {
      new Array28UByte$Companion();
    }
    return Array28UByte$Companion_instance;
  }
  Array28UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array28UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array28UByte',
    interfaces: []
  };
  Array28UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array28UByte.prototype.toString = function () {
    return 'Array28UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array28UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array28UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array16UByte(ptr) {
    Array16UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array16UByte$Companion() {
    Array16UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 16;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 16;
  }
  Array16UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array16UByte$Companion_instance = null;
  function Array16UByte$Companion_getInstance() {
    if (Array16UByte$Companion_instance === null) {
      new Array16UByte$Companion();
    }
    return Array16UByte$Companion_instance;
  }
  Array16UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array16UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array16UByte',
    interfaces: []
  };
  Array16UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array16UByte.prototype.toString = function () {
    return 'Array16UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array16UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array16UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array24UByte(ptr) {
    Array24UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array24UByte$Companion() {
    Array24UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 24;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 24;
  }
  Array24UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array24UByte$Companion_instance = null;
  function Array24UByte$Companion_getInstance() {
    if (Array24UByte$Companion_instance === null) {
      new Array24UByte$Companion();
    }
    return Array24UByte$Companion_instance;
  }
  Array24UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array24UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array24UByte',
    interfaces: []
  };
  Array24UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array24UByte.prototype.toString = function () {
    return 'Array24UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array24UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array24UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array10UByte(ptr) {
    Array10UByte$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array10UByte$Companion() {
    Array10UByte$Companion_instance = this;
    this.NUM_ELEMENTS = 10;
    this.ELEMENT_SIZE_BYTES = 1;
    this.TOTAL_SIZE_BYTES = 10;
  }
  Array10UByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array10UByte$Companion_instance = null;
  function Array10UByte$Companion_getInstance() {
    if (Array10UByte$Companion_instance === null) {
      new Array10UByte$Companion();
    }
    return Array10UByte$Companion_instance;
  }
  Array10UByte.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 1 | 0) | 0;
  };
  Array10UByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array10UByte',
    interfaces: []
  };
  Array10UByte.prototype.unbox = function () {
    return this.ptr;
  };
  Array10UByte.prototype.toString = function () {
    return 'Array10UByte(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array10UByte.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array10UByte.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array145Float(ptr) {
    Array145Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array145Float$Companion() {
    Array145Float$Companion_instance = this;
    this.NUM_ELEMENTS = 145;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 580;
  }
  Array145Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array145Float$Companion_instance = null;
  function Array145Float$Companion_getInstance() {
    if (Array145Float$Companion_instance === null) {
      new Array145Float$Companion();
    }
    return Array145Float$Companion_instance;
  }
  Array145Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array145Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array145Float',
    interfaces: []
  };
  Array145Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array145Float.prototype.toString = function () {
    return 'Array145Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array145Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array145Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array32Short(ptr) {
    Array32Short$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array32Short$Companion() {
    Array32Short$Companion_instance = this;
    this.NUM_ELEMENTS = 32;
    this.ELEMENT_SIZE_BYTES = 2;
    this.TOTAL_SIZE_BYTES = 64;
  }
  Array32Short$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array32Short$Companion_instance = null;
  function Array32Short$Companion_getInstance() {
    if (Array32Short$Companion_instance === null) {
      new Array32Short$Companion();
    }
    return Array32Short$Companion_instance;
  }
  Array32Short.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 2 | 0) | 0;
  };
  Array32Short.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array32Short',
    interfaces: []
  };
  Array32Short.prototype.unbox = function () {
    return this.ptr;
  };
  Array32Short.prototype.toString = function () {
    return 'Array32Short(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array32Short.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array32Short.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array3Int(ptr) {
    Array3Int$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array3Int$Companion() {
    Array3Int$Companion_instance = this;
    this.NUM_ELEMENTS = 3;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 12;
  }
  Array3Int$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array3Int$Companion_instance = null;
  function Array3Int$Companion_getInstance() {
    if (Array3Int$Companion_instance === null) {
      new Array3Int$Companion();
    }
    return Array3Int$Companion_instance;
  }
  Array3Int.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array3Int.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array3Int',
    interfaces: []
  };
  Array3Int.prototype.unbox = function () {
    return this.ptr;
  };
  Array3Int.prototype.toString = function () {
    return 'Array3Int(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array3Int.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array3Int.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array14Float(ptr) {
    Array14Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array14Float$Companion() {
    Array14Float$Companion_instance = this;
    this.NUM_ELEMENTS = 14;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 56;
  }
  Array14Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array14Float$Companion_instance = null;
  function Array14Float$Companion_getInstance() {
    if (Array14Float$Companion_instance === null) {
      new Array14Float$Companion();
    }
    return Array14Float$Companion_instance;
  }
  Array14Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array14Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array14Float',
    interfaces: []
  };
  Array14Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array14Float.prototype.toString = function () {
    return 'Array14Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array14Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array14Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2Array8Float(ptr) {
    Array2Array8Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2Array8Float$Companion() {
    Array2Array8Float$Companion_instance = this;
    this.NUM_ELEMENTS = 2;
    this.ELEMENT_SIZE_BYTES = 32;
    this.TOTAL_SIZE_BYTES = 64;
  }
  Array2Array8Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2Array8Float$Companion_instance = null;
  function Array2Array8Float$Companion_getInstance() {
    if (Array2Array8Float$Companion_instance === null) {
      new Array2Array8Float$Companion();
    }
    return Array2Array8Float$Companion_instance;
  }
  Array2Array8Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 32 | 0) | 0;
  };
  Array2Array8Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2Array8Float',
    interfaces: []
  };
  Array2Array8Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array2Array8Float.prototype.toString = function () {
    return 'Array2Array8Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2Array8Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2Array8Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array8Float(ptr) {
    Array8Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array8Float$Companion() {
    Array8Float$Companion_instance = this;
    this.NUM_ELEMENTS = 8;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 32;
  }
  Array8Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array8Float$Companion_instance = null;
  function Array8Float$Companion_getInstance() {
    if (Array8Float$Companion_instance === null) {
      new Array8Float$Companion();
    }
    return Array8Float$Companion_instance;
  }
  Array8Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array8Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array8Float',
    interfaces: []
  };
  Array8Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array8Float.prototype.toString = function () {
    return 'Array8Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array8Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array8Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array18Float(ptr) {
    Array18Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array18Float$Companion() {
    Array18Float$Companion_instance = this;
    this.NUM_ELEMENTS = 18;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 72;
  }
  Array18Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array18Float$Companion_instance = null;
  function Array18Float$Companion_getInstance() {
    if (Array18Float$Companion_instance === null) {
      new Array18Float$Companion();
    }
    return Array18Float$Companion_instance;
  }
  Array18Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array18Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array18Float',
    interfaces: []
  };
  Array18Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array18Float.prototype.toString = function () {
    return 'Array18Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array18Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array18Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array9Float(ptr) {
    Array9Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array9Float$Companion() {
    Array9Float$Companion_instance = this;
    this.NUM_ELEMENTS = 9;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 36;
  }
  Array9Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array9Float$Companion_instance = null;
  function Array9Float$Companion_getInstance() {
    if (Array9Float$Companion_instance === null) {
      new Array9Float$Companion();
    }
    return Array9Float$Companion_instance;
  }
  Array9Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array9Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array9Float',
    interfaces: []
  };
  Array9Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array9Float.prototype.toString = function () {
    return 'Array9Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array9Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array9Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array6Float(ptr) {
    Array6Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array6Float$Companion() {
    Array6Float$Companion_instance = this;
    this.NUM_ELEMENTS = 6;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 24;
  }
  Array6Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array6Float$Companion_instance = null;
  function Array6Float$Companion_getInstance() {
    if (Array6Float$Companion_instance === null) {
      new Array6Float$Companion();
    }
    return Array6Float$Companion_instance;
  }
  Array6Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array6Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array6Float',
    interfaces: []
  };
  Array6Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array6Float.prototype.toString = function () {
    return 'Array6Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array6Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array6Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array3Float(ptr) {
    Array3Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array3Float$Companion() {
    Array3Float$Companion_instance = this;
    this.NUM_ELEMENTS = 3;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 12;
  }
  Array3Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array3Float$Companion_instance = null;
  function Array3Float$Companion_getInstance() {
    if (Array3Float$Companion_instance === null) {
      new Array3Float$Companion();
    }
    return Array3Float$Companion_instance;
  }
  Array3Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array3Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array3Float',
    interfaces: []
  };
  Array3Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array3Float.prototype.toString = function () {
    return 'Array3Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array3Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array3Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array2Array18Float(ptr) {
    Array2Array18Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array2Array18Float$Companion() {
    Array2Array18Float$Companion_instance = this;
    this.NUM_ELEMENTS = 2;
    this.ELEMENT_SIZE_BYTES = 72;
    this.TOTAL_SIZE_BYTES = 144;
  }
  Array2Array18Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2Array18Float$Companion_instance = null;
  function Array2Array18Float$Companion_getInstance() {
    if (Array2Array18Float$Companion_instance === null) {
      new Array2Array18Float$Companion();
    }
    return Array2Array18Float$Companion_instance;
  }
  Array2Array18Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 72 | 0) | 0;
  };
  Array2Array18Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2Array18Float',
    interfaces: []
  };
  Array2Array18Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array2Array18Float.prototype.toString = function () {
    return 'Array2Array18Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array2Array18Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array2Array18Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array24Float(ptr) {
    Array24Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array24Float$Companion() {
    Array24Float$Companion_instance = this;
    this.NUM_ELEMENTS = 24;
    this.ELEMENT_SIZE_BYTES = 4;
    this.TOTAL_SIZE_BYTES = 96;
  }
  Array24Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array24Float$Companion_instance = null;
  function Array24Float$Companion_getInstance() {
    if (Array24Float$Companion_instance === null) {
      new Array24Float$Companion();
    }
    return Array24Float$Companion_instance;
  }
  Array24Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 4 | 0) | 0;
  };
  Array24Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array24Float',
    interfaces: []
  };
  Array24Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array24Float.prototype.toString = function () {
    return 'Array24Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array24Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array24Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array4Array8Float(ptr) {
    Array4Array8Float$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array4Array8Float$Companion() {
    Array4Array8Float$Companion_instance = this;
    this.NUM_ELEMENTS = 4;
    this.ELEMENT_SIZE_BYTES = 32;
    this.TOTAL_SIZE_BYTES = 128;
  }
  Array4Array8Float$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array4Array8Float$Companion_instance = null;
  function Array4Array8Float$Companion_getInstance() {
    if (Array4Array8Float$Companion_instance === null) {
      new Array4Array8Float$Companion();
    }
    return Array4Array8Float$Companion_instance;
  }
  Array4Array8Float.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 32 | 0) | 0;
  };
  Array4Array8Float.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array4Array8Float',
    interfaces: []
  };
  Array4Array8Float.prototype.unbox = function () {
    return this.ptr;
  };
  Array4Array8Float.prototype.toString = function () {
    return 'Array4Array8Float(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array4Array8Float.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array4Array8Float.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array1bs_t(ptr) {
    Array1bs_t$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array1bs_t$Companion() {
    Array1bs_t$Companion_instance = this;
    this.NUM_ELEMENTS = 1;
    this.ELEMENT_SIZE_BYTES = 12;
    this.TOTAL_SIZE_BYTES = 12;
  }
  Array1bs_t$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array1bs_t$Companion_instance = null;
  function Array1bs_t$Companion_getInstance() {
    if (Array1bs_t$Companion_instance === null) {
      new Array1bs_t$Companion();
    }
    return Array1bs_t$Companion_instance;
  }
  Array1bs_t.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 12 | 0) | 0;
  };
  Array1bs_t.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array1bs_t',
    interfaces: []
  };
  Array1bs_t.prototype.unbox = function () {
    return this.ptr;
  };
  Array1bs_t.prototype.toString = function () {
    return 'Array1bs_t(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array1bs_t.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array1bs_t.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Array1L12_scale_info(ptr) {
    Array1L12_scale_info$Companion_getInstance();
    this.ptr = ptr;
  }
  function Array1L12_scale_info$Companion() {
    Array1L12_scale_info$Companion_instance = this;
    this.NUM_ELEMENTS = 1;
    this.ELEMENT_SIZE_BYTES = 898;
    this.TOTAL_SIZE_BYTES = 898;
  }
  Array1L12_scale_info$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array1L12_scale_info$Companion_instance = null;
  function Array1L12_scale_info$Companion_getInstance() {
    if (Array1L12_scale_info$Companion_instance === null) {
      new Array1L12_scale_info$Companion();
    }
    return Array1L12_scale_info$Companion_instance;
  }
  Array1L12_scale_info.prototype.addr_za3lpa$ = function (index) {
    return this.ptr + (index * 898 | 0) | 0;
  };
  Array1L12_scale_info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array1L12_scale_info',
    interfaces: []
  };
  Array1L12_scale_info.prototype.unbox = function () {
    return this.ptr;
  };
  Array1L12_scale_info.prototype.toString = function () {
    return 'Array1L12_scale_info(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  Array1L12_scale_info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  Array1L12_scale_info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CPointer(ptr) {
    this.ptr = ptr;
  }
  CPointer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CPointer',
    interfaces: []
  };
  CPointer.prototype.unbox = function () {
    return this.ptr;
  };
  CPointer.prototype.toString = function () {
    return 'CPointer(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CPointer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CPointer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction0(ptr) {
    this.ptr = ptr;
  }
  CFunction0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction0',
    interfaces: []
  };
  CFunction0.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction0.prototype.toString = function () {
    return 'CFunction0(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction1(ptr) {
    this.ptr = ptr;
  }
  CFunction1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction1',
    interfaces: []
  };
  CFunction1.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction1.prototype.toString = function () {
    return 'CFunction1(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction1.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction1.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction2(ptr) {
    this.ptr = ptr;
  }
  CFunction2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction2',
    interfaces: []
  };
  CFunction2.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction2.prototype.toString = function () {
    return 'CFunction2(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction3(ptr) {
    this.ptr = ptr;
  }
  CFunction3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction3',
    interfaces: []
  };
  CFunction3.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction3.prototype.toString = function () {
    return 'CFunction3(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction4(ptr) {
    this.ptr = ptr;
  }
  CFunction4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction4',
    interfaces: []
  };
  CFunction4.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction4.prototype.toString = function () {
    return 'CFunction4(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction5(ptr) {
    this.ptr = ptr;
  }
  CFunction5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction5',
    interfaces: []
  };
  CFunction5.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction5.prototype.toString = function () {
    return 'CFunction5(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction5.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction5.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction6(ptr) {
    this.ptr = ptr;
  }
  CFunction6.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction6',
    interfaces: []
  };
  CFunction6.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction6.prototype.toString = function () {
    return 'CFunction6(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction6.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction6.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction7(ptr) {
    this.ptr = ptr;
  }
  CFunction7.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction7',
    interfaces: []
  };
  CFunction7.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction7.prototype.toString = function () {
    return 'CFunction7(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction7.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction7.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Runtime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {
    if (REQUESTED_HEAP_SIZE === void 0)
      REQUESTED_HEAP_SIZE = 0;
    if (REQUESTED_STACK_PTR === void 0)
      REQUESTED_STACK_PTR = 0;
    if (__syscalls === void 0)
      __syscalls = DummyRuntimeSyscalls_getInstance();
    AbstractRuntime.call(this, REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls);
    this.HEAP_1tks1n$_0 = new Int8Array(this.HEAP_SIZE);
  }
  Runtime.prototype.lb_za3lpa$ = function (ptr) {
    return this.HEAP_1tks1n$_0[ptr];
  };
  Runtime.prototype.sb_6t1wet$ = function (ptr, value) {
    this.HEAP_1tks1n$_0[ptr] = value;
  };
  Runtime.prototype.lh_za3lpa$ = function (ptr) {
    return toShort(this.lbu_za3lpa$(ptr) << 0 | this.lbu_za3lpa$(ptr + 1 | 0) << 8);
  };
  Runtime.prototype.sh_2bqt6h$ = function (ptr, value) {
    this.sb_6t1wet$(ptr, toByte(value >>> 0));
    this.sb_6t1wet$(ptr + 1 | 0, toByte(value >>> 8));
  };
  Runtime.prototype.lw_za3lpa$ = function (ptr) {
    return this.lbu_za3lpa$(ptr) << 0 | this.lbu_za3lpa$(ptr + 1 | 0) << 8 | this.lbu_za3lpa$(ptr + 2 | 0) << 16 | this.lbu_za3lpa$(ptr + 3 | 0) << 24;
  };
  Runtime.prototype.sw_vux9f0$ = function (ptr, value) {
    this.sb_6t1wet$(ptr, toByte(value >>> 0));
    this.sb_6t1wet$(ptr + 1 | 0, toByte(value >>> 8));
    this.sb_6t1wet$(ptr + 2 | 0, toByte(value >>> 16));
    this.sb_6t1wet$(ptr + 3 | 0, toByte(value >>> 24));
  };
  Runtime.prototype.ld_za3lpa$ = function (ptr) {
    return this.lwu_za3lpa$(ptr).shiftLeft(0).or(this.lwu_za3lpa$(ptr + 4 | 0).shiftLeft(32));
  };
  Runtime.prototype.sd_6svq3l$ = function (ptr, value) {
    this.sw_vux9f0$(ptr, value.shiftRightUnsigned(0).toInt());
    this.sw_vux9f0$(ptr + 4 | 0, value.shiftRightUnsigned(32).toInt());
  };
  Runtime.prototype.memset_j2ark3$ = function (ptr, value, num) {
    var tmp$;
    fill(this.HEAP_1tks1n$_0, toByte(value), ptr.ptr, ptr.ptr + num | 0);
    return Kotlin.isType(tmp$ = ptr, CPointer) ? tmp$ : throwCCE();
  };
  Runtime.prototype.memmove_q1n2f2$ = function (dest, src, num) {
    arrayCopy(this.HEAP_1tks1n$_0, this.HEAP_1tks1n$_0, dest.ptr, src.ptr, src.ptr + num | 0);
    return dest;
  };
  Runtime.prototype.memcpy_q1n2f2$ = function (dest, src, num) {
    return this.memmove_q1n2f2$(dest, src, num);
  };
  Runtime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Runtime',
    interfaces: [AbstractRuntime]
  };
  function RuntimeSyscalls() {
  }
  RuntimeSyscalls.prototype.fopen_xn3l7s$ = function ($receiver, file, mode) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fread_pvmp7v$ = function ($receiver, ptr, size, nmemb, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fwrite_pvmp7v$ = function ($receiver, ptr, size, nmemb, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fflush_yefasl$ = function ($receiver, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.ftell_yefasl$ = function ($receiver, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fsetpos_svra71$ = function ($receiver, stream, ptrHolder) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fgetpos_svra71$ = function ($receiver, stream, ptrHolder) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fseek_o9bt5g$ = function ($receiver, stream, offset, whence) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fclose_yefasl$ = function ($receiver, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuntimeSyscalls',
    interfaces: []
  };
  function DummyRuntimeSyscalls() {
    DummyRuntimeSyscalls_instance = this;
  }
  DummyRuntimeSyscalls.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyRuntimeSyscalls',
    interfaces: [RuntimeSyscalls]
  };
  var DummyRuntimeSyscalls_instance = null;
  function DummyRuntimeSyscalls_getInstance() {
    if (DummyRuntimeSyscalls_instance === null) {
      new DummyRuntimeSyscalls();
    }
    return DummyRuntimeSyscalls_instance;
  }
  function AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {
    if (REQUESTED_HEAP_SIZE === void 0)
      REQUESTED_HEAP_SIZE = 0;
    if (REQUESTED_STACK_PTR === void 0)
      REQUESTED_STACK_PTR = 0;
    if (__syscalls === void 0)
      __syscalls = DummyRuntimeSyscalls_getInstance();
    this.REQUESTED_HEAP_SIZE = REQUESTED_HEAP_SIZE;
    this.REQUESTED_STACK_PTR = REQUESTED_STACK_PTR;
    this.__syscalls = __syscalls;
    this.FUNCTIONS = ArrayList_init_0();
    this.POINTER_SIZE = 4;
    this.HEAP_SIZE = this.REQUESTED_HEAP_SIZE <= 0 ? 16777216 : this.REQUESTED_HEAP_SIZE;
    this.STACK_PTR = this.REQUESTED_STACK_PTR === 0 ? 524288 : this.REQUESTED_STACK_PTR;
    this.HEAP_PTR = this.STACK_PTR;
    this.chunks = LinkedHashMap_init();
    this.freeChunks = ArrayList_init_0();
    this.STRINGS_kialz7$_0 = LinkedHashMap_init();
    this.start_h5c70d$_0 = time.MonoClock.markNow();
    this.FUNCTION_ADDRS = LinkedHashMap_init();
  }
  AbstractRuntime.prototype.get_SIZE_BYTES_y9phqa$ = function ($receiver) {
    return 4;
  };
  AbstractRuntime.prototype.get_SIZE_BYTES_6a53gt$ = function ($receiver) {
    return 8;
  };
  AbstractRuntime.prototype.shr_aogav3$ = function ($receiver, other) {
    return new UInt((new UInt($receiver.data & 255)).data >>> other);
  };
  AbstractRuntime.prototype.shl_aogav3$ = function ($receiver, other) {
    return new UInt((new UInt($receiver.data & 255)).data << other);
  };
  function AbstractRuntime$IStruct() {
  }
  AbstractRuntime$IStruct.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IStruct',
    interfaces: []
  };
  function AbstractRuntime$IStructCompanion() {
  }
  AbstractRuntime$IStructCompanion.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IStructCompanion',
    interfaces: []
  };
  AbstractRuntime.prototype.lwf_za3lpa$ = function (ptr) {
    var bits = this.lw_za3lpa$(ptr);
    return Kotlin.floatFromBits(bits);
  };
  AbstractRuntime.prototype.swf_24o109$ = function (ptr, value) {
    this.sw_vux9f0$(ptr, toRawBits(value));
  };
  AbstractRuntime.prototype.ldf_za3lpa$ = function (ptr) {
    var bits = this.ld_za3lpa$(ptr);
    return Kotlin.doubleFromBits(bits);
  };
  AbstractRuntime.prototype.sdf_5wr77w$ = function (ptr, value) {
    this.sd_6svq3l$(ptr, toRawBits_0(value));
  };
  AbstractRuntime.prototype.lbu_za3lpa$ = function (ptr) {
    return this.lb_za3lpa$(ptr) & 255;
  };
  AbstractRuntime.prototype.lhu_za3lpa$ = function (ptr) {
    return this.lh_za3lpa$(ptr) & 65535;
  };
  AbstractRuntime.prototype.lwu_za3lpa$ = function (ptr) {
    return Kotlin.Long.fromInt(this.lw_za3lpa$(ptr)).and(L4294967295);
  };
  AbstractRuntime.prototype.toCPointer_qfj761$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toCPointer_qfj761$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function ($receiver) {
      return new CPointer_init($receiver);
    };
  }));
  AbstractRuntime.prototype.toCPointer_umnsay$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toCPointer_umnsay$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function ($receiver) {
      return new CPointer_init($receiver.ptr);
    };
  }));
  AbstractRuntime.prototype.addPtr_f8b4r2$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.addPtr_f8b4r2$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function ($receiver, offset, elementSize) {
      return new CPointer_init($receiver.ptr + Kotlin.imul(offset, elementSize) | 0);
    };
  }));
  AbstractRuntime.prototype.plus_1kpk8l$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 4) | 0);
  };
  AbstractRuntime.prototype.minus_1kpk8l$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 4) | 0);
  };
  AbstractRuntime.prototype.minusPtrPtr_60flnr$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.set_4nnzcg$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, value.ptr);
  };
  AbstractRuntime.prototype.get_1kpk8l$ = function ($receiver, offset) {
    return new CPointer(this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0));
  };
  AbstractRuntime.prototype.get_value_62me6v$ = function ($receiver) {
    return this.get_1kpk8l$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_ou4c8y$ = function ($receiver, value) {
    this.set_4nnzcg$($receiver, 0, value);
  };
  AbstractRuntime.prototype.toInt_1v8dcc$ = function ($receiver) {
    return $receiver ? 1 : 0;
  };
  AbstractRuntime.prototype.toInt_1xe3xw$ = function ($receiver) {
    return $receiver.ptr;
  };
  AbstractRuntime.prototype.toBool_1xe3xw$ = function ($receiver) {
    return $receiver.ptr !== 0;
  };
  AbstractRuntime.prototype.toBool_rcaex3$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toBool_rcaex3$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt($receiver) !== 0;
    };
  }));
  AbstractRuntime.prototype.toBool_68pxlr$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toBool_68pxlr$', function ($receiver) {
    return ($receiver.data & 255) !== 0;
  });
  AbstractRuntime.prototype.toBool_bso16t$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toBool_bso16t$', function ($receiver) {
    return ($receiver.data & 65535) !== 0;
  });
  AbstractRuntime.prototype.toBool_mpial4$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toBool_mpial4$', function ($receiver) {
    return $receiver.data !== 0;
  });
  AbstractRuntime.prototype.toBool_6e1d9n$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.toBool_6e1d9n$', function ($receiver) {
    return $receiver.data.toInt() !== 0;
  });
  AbstractRuntime.prototype.toBool_1v8dcc$ = function ($receiver) {
    return $receiver;
  };
  AbstractRuntime.prototype.stackFrame_klfg04$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.stackFrame_klfg04$', function (callback) {
    var tmp$;
    var oldPos = this.STACK_PTR;
    try {
      tmp$ = callback();
    }
    finally {
      this.STACK_PTR = oldPos;
    }
    return tmp$;
  });
  AbstractRuntime.prototype.alloca_za3lpa$ = function (size) {
    var $receiver = this.STACK_PTR - size | 0;
    this.STACK_PTR = this.STACK_PTR - size | 0;
    return new CPointer($receiver);
  };
  AbstractRuntime.prototype.alloca_zero_za3lpa$ = function (size) {
    var $receiver = this.alloca_za3lpa$(size);
    this.memset_j2ark3$($receiver, 0, size);
    return $receiver;
  };
  function AbstractRuntime$Chunk(head, size) {
    this.head = head;
    this.size = size;
  }
  AbstractRuntime$Chunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  AbstractRuntime$Chunk.prototype.component1 = function () {
    return this.head;
  };
  AbstractRuntime$Chunk.prototype.component2 = function () {
    return this.size;
  };
  AbstractRuntime$Chunk.prototype.copy_vux9f0$ = function (head, size) {
    return new AbstractRuntime$Chunk(head === void 0 ? this.head : head, size === void 0 ? this.size : size);
  };
  AbstractRuntime$Chunk.prototype.toString = function () {
    return 'Chunk(head=' + Kotlin.toString(this.head) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  AbstractRuntime$Chunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.head) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  AbstractRuntime$Chunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.head, other.head) && Kotlin.equals(this.size, other.size)))));
  };
  AbstractRuntime.prototype.malloc_za3lpa$ = function (size) {
    var $receiver = this.freeChunks;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.size >= size) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var chunk = firstOrNull$result;
    if (chunk != null) {
      this.freeChunks.remove_11rb$(chunk);
      var $receiver_0 = this.chunks;
      var key = chunk.head;
      $receiver_0.put_xwzc9p$(key, chunk);
      return new CPointer(chunk.head);
    }
     else {
      var head = this.HEAP_PTR;
      this.HEAP_PTR = this.HEAP_PTR + size | 0;
      var $receiver_1 = this.chunks;
      var value = new AbstractRuntime$Chunk(head, size);
      $receiver_1.put_xwzc9p$(head, value);
      return new CPointer(head);
    }
  };
  AbstractRuntime.prototype.free_2cq4u5$ = function (ptr) {
    var tmp$;
    if ((tmp$ = this.chunks.remove_11rb$(ptr.ptr)) != null) {
      this.freeChunks.add_11rb$(tmp$);
    }
  };
  AbstractRuntime.prototype.putchar_za3lpa$ = function (c) {
    print(toBoxedChar(toChar(c)));
    return c;
  };
  function AbstractRuntime$ExitError(code) {
    Error_init(this);
    this.code = code;
    this.name = 'AbstractRuntime$ExitError';
  }
  AbstractRuntime$ExitError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExitError',
    interfaces: [Error_0]
  };
  AbstractRuntime.prototype.exit_za3lpa$ = function (code) {
    throw new AbstractRuntime$ExitError(code);
  };
  AbstractRuntime.prototype.prevAligned_vux9f0$ = function (size, alignment) {
    if (size % alignment === 0)
      return size;
    return size - (alignment - size % alignment) | 0;
  };
  AbstractRuntime.prototype.memWrite_uljfdf$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      this.sb_6t1wet$(ptr.ptr + n | 0, data[n]);
  };
  AbstractRuntime.prototype.memRead_uljfdf$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      data[n] = this.lb_za3lpa$(ptr.ptr + n | 0);
  };
  AbstractRuntime.prototype.memWrite_xs9v27$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      this.sh_2bqt6h$(ptr.ptr + (n * 2 | 0) | 0, data[n]);
  };
  AbstractRuntime.prototype.memRead_xs9v27$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      data[n] = this.lh_za3lpa$(ptr.ptr + (n * 2 | 0) | 0);
  };
  AbstractRuntime.prototype.sprintf_apskfv$ = function (out, format, params) {
    this.writeStringz_b8nltl$(out, this._format_ddxerf$(format, params.slice()).toString());
  };
  AbstractRuntime.prototype.printf_r6tdn3$ = function (format, params) {
    print(this._format_ddxerf$(format, params.slice()).toString());
  };
  AbstractRuntime.prototype.toCase_ydf4ts$_0 = function ($receiver, upper) {
    return upper ? $receiver.toUpperCase() : $receiver.toLowerCase();
  };
  AbstractRuntime.prototype._format_ddxerf$ = function (format, params, appendable) {
    if (appendable === void 0)
      appendable = StringBuilder_init();
    return this._format_3p2iqn$(this.readStringz_r3u1m1$(format), params.slice(), appendable);
  };
  AbstractRuntime.prototype.isUpperCase_etiqtl$_0 = function ($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  };
  AbstractRuntime.prototype.clamp_66l0zt$_0 = function ($receiver, min, max) {
    if ($receiver < min)
      return min;
    else if ($receiver > max)
      return max;
    else
      return $receiver;
  };
  AbstractRuntime.prototype.substr_ium62l$_0 = function ($receiver, offset, len) {
    if (len === void 0)
      len = $receiver.length;
    var roffset = offset < 0 ? $receiver.length + offset | 0 : offset;
    var startIndex = this.clamp_66l0zt$_0(roffset, 0, $receiver.length);
    var endIndex = this.clamp_66l0zt$_0(roffset + len | 0, 0, $receiver.length);
    return $receiver.substring(startIndex, endIndex);
  };
  AbstractRuntime.prototype.numberToStringDecimal_37lk95$ = function (res, decimalPlaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    var tmp$, tmp$_0, tmp$_1;
    var data = StringBuilder_init();
    var commaIndex = -1;
    var state = 0;
    var sign = 1;
    var evalue = 0;
    var esign = 1;
    tmp$ = res.length;
    for (var n = 0; n < tmp$; n++) {
      var c = res.charCodeAt(n);
      if (state === 0) {
        switch (c) {
          case 45:
            sign = -1;
            break;
          case 43:
            sign = 1;
            break;
          case 46:
            commaIndex = n;
            break;
          default:if ((new CharRange(48, 57)).contains_mef7kx$(c))
              data.append_s8itvh$(c);
            else
              switch (c) {
                case 101:
                case 69:
                  state = 1;
                  break;
              }

            break;
        }
      }
       else if (state === 1) {
        switch (c) {
          case 45:
            esign = -1;
            break;
          case 43:
            esign = 1;
            break;
          default:if ((new CharRange(48, 57)).contains_mef7kx$(c)) {
              evalue = evalue * 10 | 0;
              evalue = evalue + (c - 48) | 0;
            }

            break;
        }
      }
    }
    var exp = Kotlin.imul(evalue, esign);
    var rCommaIndex = commaIndex >= 0 ? commaIndex : data.length;
    var commaOffset = rCommaIndex + exp | 0;
    if (commaOffset < 0) {
      tmp$_0 = '0.' + repeat('0', (-commaOffset | 0) + decimalPlaces | 0) + toString(data);
    }
     else {
      var tmp$_2 = data.toString();
      var b = commaOffset - data.length + 1 + decimalPlaces | 0;
      var res_0 = tmp$_2 + repeat('0', Math_0.max(1, b));
      tmp$_0 = res_0.substring(0, commaOffset) + '.' + res_0.substring(commaOffset);
    }
    var out = tmp$_0;
    var parts = split(out, ['.']);
    if (decimalPlaces <= 0) {
      tmp$_1 = parts.get_za3lpa$(0);
    }
     else {
      var res_1 = this.substr_ium62l$_0(parts.get_za3lpa$(1), 0, decimalPlaces);
      tmp$_1 = parts.get_za3lpa$(0) + '.' + res_1;
    }
    var rout = tmp$_1;
    var rrout = startsWith(rout, '.') ? '0' + rout : rout;
    var rrrout = skipTrailingZeros ? Regex_init('0-$').replace_x2uqeu$(rrout, '') : rrout;
    return sign > 0 ? rrrout : '-' + rrrout;
  };
  AbstractRuntime.prototype.toStringDecimal_gnx6vo$_0 = function ($receiver, decimalPlaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    return this.numberToStringDecimal_37lk95$($receiver.toString(), decimalPlaces, skipTrailingZeros);
  };
  AbstractRuntime.prototype.toStringDecimal_vpmza3$_0 = function ($receiver, decimalPlaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    return this.toStringDecimal_gnx6vo$_0($receiver, decimalPlaces, skipTrailingZeros);
  };
  AbstractRuntime.prototype._formatF_3p81yu$ = function (value) {
    return this.toStringDecimal_gnx6vo$_0(numberToDouble(value), 6);
  };
  AbstractRuntime.prototype._formatE_esgphy$_0 = function (value) {
    return value.toString();
  };
  AbstractRuntime.prototype._formatG_6dj7mw$_0 = function (value) {
    return value.toString();
  };
  AbstractRuntime.prototype._formatA_dwni7i$_0 = function (value) {
    return value.toString();
  };
  function AbstractRuntime$_format$toCase($receiver, upper) {
    return upper ? $receiver.toUpperCase() : $receiver.toLowerCase();
  }
  function AbstractRuntime$_format$isUpperCase($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  }
  function AbstractRuntime$_format$readParam(closure$params, closure$paramPos) {
    return function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = closure$paramPos.v, closure$paramPos.v = tmp$ + 1 | 0, tmp$);
      return getOrNull(closure$params, tmp$_0);
    };
  }
  function AbstractRuntime$_format$readParamI(closure$readParam) {
    return function () {
      var tmp$, tmp$_0;
      var v = closure$readParam();
      if (v == null)
        tmp$_0 = 0;
      else if (Kotlin.isChar(v))
        tmp$_0 = unboxChar(v) | 0;
      else if (Kotlin.isType(v, UByte)) {
        tmp$_0 = v.data & 255;
      }
       else if (Kotlin.isType(v, UShort_init)) {
        tmp$_0 = v.data & 65535;
      }
       else if (Kotlin.isType(v, UInt)) {
        tmp$_0 = v.data;
      }
       else if (Kotlin.isNumber(v))
        tmp$_0 = numberToInt(v);
      else if (Kotlin.isType(v, CPointer))
        tmp$_0 = v.ptr;
      else if (typeof v === 'string')
        tmp$_0 = (tmp$ = toIntOrNull(v)) != null ? tmp$ : 0;
      else
        tmp$_0 = -1;
      return tmp$_0;
    };
  }
  function AbstractRuntime$_format$readParamS(closure$readParam, this$AbstractRuntime) {
    return function () {
      var tmp$, tmp$_0;
      var v = closure$readParam();
      if (v == null)
        tmp$_0 = 'NULL';
      else if (Kotlin.isChar(v))
        tmp$_0 = toString(v);
      else if (Kotlin.isType(v, CPointer))
        tmp$_0 = this$AbstractRuntime.readStringz_r3u1m1$(Kotlin.isType(tmp$ = v, CPointer) ? tmp$ : throwCCE());
      else if (Kotlin.isNumber(v))
        tmp$_0 = this$AbstractRuntime.readStringz_r3u1m1$(new CPointer(numberToInt(v)));
      else if (typeof v === 'string')
        tmp$_0 = v.toString();
      else
        tmp$_0 = '<INVALID>';
      return tmp$_0;
    };
  }
  AbstractRuntime.prototype._format_3p2iqn$ = function (fmt, params, appendable) {
    if (appendable === void 0)
      appendable = StringBuilder_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var paramPos = {v: 0};
    var n = 0;
    var toCase = AbstractRuntime$_format$toCase;
    var isUpperCase = AbstractRuntime$_format$isUpperCase;
    var readParam = AbstractRuntime$_format$readParam(params, paramPos);
    var readParamI = AbstractRuntime$_format$readParamI(readParam);
    var readParamS = AbstractRuntime$_format$readParamS(readParam, this);
    loop: while (n < fmt.length) {
      var c = fmt.charCodeAt((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (c === 37) {
        var c2 = 32;
        var pad = 32;
        var len = 0;
        do {
          c2 = fmt.charCodeAt((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          if (c2 === 48) {
            pad = c2;
          }
           else if ((new CharRange(48, 57)).contains_mef7kx$(c2)) {
            len = len * 10 | 0;
            len = len + (c2 - 48) | 0;
          }
        }
         while ((new CharRange(48, 57)).contains_mef7kx$(c2));
        if (c2 === 37) {
          appendable.append_s8itvh$(37);
          continue loop;
        }
        switch (c2) {
          case 110:
            readParam();
            break;
          case 99:
            appendable.append_s8itvh$(toChar(readParamI()));
            break;
          case 112:
            appendable.append_gw00v9$('0x' + padStart(toString_0(readParamI(), 16), 8, 48));
            break;
          case 102:
          case 70:
            appendable.append_gw00v9$(toCase(this._formatF_3p81yu$(Kotlin.isNumber(tmp$_1 = readParam()) ? tmp$_1 : throwCCE()), isUpperCase(c2)));
            break;
          case 101:
          case 69:
            appendable.append_gw00v9$(toCase(this._formatE_esgphy$_0(Kotlin.isNumber(tmp$_2 = readParam()) ? tmp$_2 : throwCCE()), isUpperCase(c2)));
            break;
          case 97:
          case 65:
            appendable.append_gw00v9$(toCase(this._formatA_dwni7i$_0(Kotlin.isNumber(tmp$_3 = readParam()) ? tmp$_3 : throwCCE()), isUpperCase(c2)));
            break;
          case 103:
          case 71:
            appendable.append_gw00v9$(toCase(this._formatG_6dj7mw$_0(Kotlin.isNumber(tmp$_4 = readParam()) ? tmp$_4 : throwCCE()), isUpperCase(c2)));
            break;
          case 100:
          case 105:
            appendable.append_gw00v9$(padStart(toString_0(readParamI(), 10), len, pad));
            break;
          case 117:
            appendable.append_gw00v9$(padStart(toString_1(new UInt(readParamI()), 10), len, pad));
            break;
          case 120:
          case 88:
            appendable.append_gw00v9$(padStart(toCase(toString_2(Kotlin.Long.fromInt(readParamI()).and(L4294967295), 16), isUpperCase(c2)), len, pad));
            break;
          case 111:
          case 79:
            appendable.append_gw00v9$(padStart(toCase(toString_2(Kotlin.Long.fromInt(readParamI()).and(L4294967295), 8), isUpperCase(c2)), len, pad));
            break;
          case 115:
            appendable.append_gw00v9$(readParamS());
            break;
          default:appendable.append_s8itvh$(c);
            appendable.append_s8itvh$(c2);
            break;
        }
      }
       else {
        appendable.append_s8itvh$(c);
      }
    }
    return appendable;
  };
  AbstractRuntime.prototype.memset_j2ark3$ = function (ptr, value, num) {
    var tmp$;
    for (var n = 0; n < num; n++) {
      this.sb_6t1wet$(ptr.ptr + n | 0, toByte(value));
    }
    return Kotlin.isType(tmp$ = ptr, CPointer) ? tmp$ : throwCCE();
  };
  AbstractRuntime.prototype.memmove_q1n2f2$ = function (dest, src, num) {
    var tmp$;
    if (dest.ptr > src.ptr) {
      for (var m = 0; m < num; m++) {
        var n = num - 1 - m | 0;
        this.sb_6t1wet$(dest.ptr + n | 0, this.lb_za3lpa$(src.ptr + n | 0));
      }
    }
     else {
      for (var n_0 = 0; n_0 < num; n_0++)
        this.sb_6t1wet$(dest.ptr + n_0 | 0, this.lb_za3lpa$(src.ptr + n_0 | 0));
    }
    return Kotlin.isType(tmp$ = dest, CPointer) ? tmp$ : throwCCE();
  };
  AbstractRuntime.prototype.memcpy_q1n2f2$ = function (dest, src, num) {
    var tmp$;
    for (var n = 0; n < num; n++)
      this.sb_6t1wet$(dest.ptr + n | 0, this.lb_za3lpa$(src.ptr + n | 0));
    return Kotlin.isType(tmp$ = dest, CPointer) ? tmp$ : throwCCE();
  };
  function AbstractRuntime$ByteArrayBuilder(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 64;
    this.initialCapacity = initialCapacity;
    this.data_0 = new Int8Array(this.initialCapacity);
    this.pos_0 = 0;
  }
  AbstractRuntime$ByteArrayBuilder.prototype.append_s8j3t7$ = function (byte) {
    var tmp$;
    if (this.pos_0 >= (this.data_0.length - 1 | 0)) {
      var tmp$_0 = this.data_0;
      var a = this.data_0.length * 2 | 0;
      var b = this.data_0.length + 64 | 0;
      this.data_0 = copyOf(tmp$_0, Math_0.max(a, b));
    }
    this.data_0[tmp$ = this.pos_0, this.pos_0 = tmp$ + 1 | 0, tmp$] = byte;
  };
  AbstractRuntime$ByteArrayBuilder.prototype.bytes = function () {
    return copyOf(this.data_0, this.pos_0);
  };
  AbstractRuntime$ByteArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayBuilder',
    interfaces: []
  };
  AbstractRuntime.prototype.strlenz_r3u1m1$ = function ($receiver) {
    var tmp$;
    tmp$ = 2147483647;
    for (var n = 0; n < tmp$; n++)
      if (this.get_4anldl$($receiver, n) === toByte(0))
        return 0;
    return 2147483647;
  };
  AbstractRuntime.prototype.readStringz_r3u1m1$ = function ($receiver) {
    var tmp$;
    var sb = new AbstractRuntime$ByteArrayBuilder(this.strlenz_r3u1m1$($receiver));
    var pos = $receiver.ptr;
    while (true) {
      var c = this.lb_za3lpa$((tmp$ = pos, pos = tmp$ + 1 | 0, tmp$));
      if (c === toByte(0))
        break;
      sb.append_s8j3t7$(c);
    }
    return decodeToString(sb.bytes());
  };
  AbstractRuntime.prototype.encodeToByteArray_1o51ka$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.encodeToByteArray_1o51ka$', wrapFunction(function () {
    var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
    return function (data, out) {
      var tmp$, tmp$_0;
      var count = 0;
      tmp$ = encodeToByteArray(data);
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        out(c);
        count = count + 1 | 0;
      }
      return count;
    };
  }));
  AbstractRuntime.prototype.writeStringz_b8nltl$ = function ($receiver, str) {
    var tmp$;
    var n = {v: 0};
    var tmp$_0, tmp$_1;
    var count = 0;
    tmp$_0 = encodeToByteArray(str);
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var c = tmp$_0[tmp$_1];
      var tmp$_2;
      this.set_3fnu0y$($receiver, (tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2), c);
      count = count + 1 | 0;
    }
    this.set_3fnu0y$($receiver, (tmp$ = n.v, n.v = tmp$ + 1 | 0, tmp$), toByte(0));
  };
  AbstractRuntime.prototype.get_ptr_pdl1vz$ = function ($receiver) {
    var $receiver_0 = this.STRINGS_kialz7$_0;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      var bytes = encodeToByteArray($receiver);
      var ptr = new CPointer(this.malloc_za3lpa$(bytes.length + 1 | 0).ptr);
      var p = ptr.ptr;
      for (var n = 0; n < bytes.length; n++)
        this.sb_6t1wet$(p + n | 0, bytes[n]);
      this.sb_6t1wet$(p + bytes.length | 0, 0);
      var answer = ptr;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  AbstractRuntime.prototype.clock = function () {
    return Kotlin.Long.fromNumber(this.start_h5c70d$_0.elapsedNow().inMilliseconds);
  };
  AbstractRuntime.prototype.get_ptr_a3w2bl$ = function ($receiver) {
    var array = $receiver;
    var ptr = new CPointer(this.malloc_za3lpa$(Kotlin.imul(this.POINTER_SIZE, array.length)).ptr);
    for (var n = 0; n < array.length; n++) {
      this.sw_vux9f0$(ptr.ptr + Kotlin.imul(n, this.POINTER_SIZE) | 0, this.get_ptr_pdl1vz$(array[n]).ptr);
    }
    return ptr;
  };
  AbstractRuntime.prototype.get_4anldl$ = function ($receiver, offset) {
    return this.lb_za3lpa$($receiver.ptr + (offset * 1 | 0) | 0);
  };
  AbstractRuntime.prototype.set_3fnu0y$ = function ($receiver, offset, value) {
    this.sb_6t1wet$($receiver.ptr + (offset * 1 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_r3u1m1$ = function ($receiver) {
    return this.get_4anldl$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_8w0xxe$ = function ($receiver, value) {
    this.set_3fnu0y$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_4anldl$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 1) | 0);
  };
  AbstractRuntime.prototype.minus_4anldl$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 1) | 0);
  };
  AbstractRuntime.prototype.minusPtrByte_9502g1$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 1 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfByte_s0tg0t$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfByte_s0tg0t$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 1 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_2g34sv$ = function ($receiver, offset) {
    return this.lh_za3lpa$($receiver.ptr + (offset * 2 | 0) | 0);
  };
  AbstractRuntime.prototype.set_yo5o8m$ = function ($receiver, offset, value) {
    this.sh_2bqt6h$($receiver.ptr + (offset * 2 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_unh8s1$ = function ($receiver) {
    return this.get_2g34sv$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_79ja4i$ = function ($receiver, value) {
    this.set_yo5o8m$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_2g34sv$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 2) | 0);
  };
  AbstractRuntime.prototype.minus_2g34sv$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 2) | 0);
  };
  AbstractRuntime.prototype.minusPtrShort_wdr3j$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 2 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfShort_po67jh$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfShort_po67jh$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 2 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_sa8cpw$ = function ($receiver, offset) {
    return this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0);
  };
  AbstractRuntime.prototype.set_ajwbze$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_1intz6$ = function ($receiver) {
    return this.get_sa8cpw$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_sa8cpw$ = function ($receiver, value) {
    this.set_ajwbze$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_sa8cpw$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 4) | 0);
  };
  AbstractRuntime.prototype.minus_sa8cpw$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 4) | 0);
  };
  AbstractRuntime.prototype.minusPtrInt_57ig9b$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfInt_q16e2o$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfInt_q16e2o$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_4vg32r$ = function ($receiver, offset) {
    return this.ld_za3lpa$($receiver.ptr + (offset * 8 | 0) | 0);
  };
  AbstractRuntime.prototype.set_em7b1m$ = function ($receiver, offset, value) {
    this.sd_6svq3l$($receiver.ptr + (offset * 8 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_mizk1h$ = function ($receiver) {
    return this.get_4vg32r$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_90kls2$ = function ($receiver, value) {
    this.set_em7b1m$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_4vg32r$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 8) | 0);
  };
  AbstractRuntime.prototype.minus_4vg32r$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 8) | 0);
  };
  AbstractRuntime.prototype.minusPtrLong_g3a3k7$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 8 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfLong_qvsp7b$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfLong_qvsp7b$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 8 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_t9mxw2$ = function ($receiver, offset) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + (offset * 1 | 0) | 0));
  };
  AbstractRuntime.prototype.set_9c14iy$ = function ($receiver, offset, value) {
    this.sb_6t1wet$($receiver.ptr + (offset * 1 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_j4vej4$ = function ($receiver) {
    return this.get_t9mxw2$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_1tdf9c$ = function ($receiver, value) {
    this.set_9c14iy$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_t9mxw2$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 1) | 0);
  };
  AbstractRuntime.prototype.minus_t9mxw2$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 1) | 0);
  };
  AbstractRuntime.prototype.minusPtrUByte_n3mh9t$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 1 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfUByte_t9s42$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfUByte_t9s42$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 1 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_9nvymg$ = function ($receiver, offset) {
    return new UShort_init(this.lh_za3lpa$($receiver.ptr + (offset * 2 | 0) | 0));
  };
  AbstractRuntime.prototype.set_6ir85c$ = function ($receiver, offset, value) {
    this.sh_2bqt6h$($receiver.ptr + (offset * 2 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_3d0gt2$ = function ($receiver) {
    return this.get_9nvymg$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_6ot8im$ = function ($receiver, value) {
    this.set_6ir85c$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_9nvymg$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 2) | 0);
  };
  AbstractRuntime.prototype.minus_9nvymg$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 2) | 0);
  };
  AbstractRuntime.prototype.minusPtrUShort_erbkpp$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 2 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfUShort_gsr51e$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfUShort_gsr51e$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 2 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_pwgvdh$ = function ($receiver, offset) {
    return new UInt(this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0));
  };
  AbstractRuntime.prototype.set_8r0xy2$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_iugvef$ = function ($receiver) {
    return this.get_pwgvdh$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_lm3iiq$ = function ($receiver, value) {
    this.set_8r0xy2$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_pwgvdh$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 4) | 0);
  };
  AbstractRuntime.prototype.minus_pwgvdh$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 4) | 0);
  };
  AbstractRuntime.prototype.minusPtrUInt_mnwjk3$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfUInt_94602z$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfUInt_94602z$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_k3j9fq$ = function ($receiver, offset) {
    return new ULong_init(this.ld_za3lpa$($receiver.ptr + (offset * 8 | 0) | 0));
  };
  AbstractRuntime.prototype.set_o38ve$ = function ($receiver, offset, value) {
    this.sd_6svq3l$($receiver.ptr + (offset * 8 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_ek0wyk$ = function ($receiver) {
    return this.get_k3j9fq$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_5vg80o$ = function ($receiver, value) {
    this.set_o38ve$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_k3j9fq$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 8) | 0);
  };
  AbstractRuntime.prototype.minus_k3j9fq$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 8) | 0);
  };
  AbstractRuntime.prototype.minusPtrULong_sbo3n5$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 8 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfULong_gxrov2$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfULong_gxrov2$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 8 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_s1x8lt$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.get_s1x8lt$', function ($receiver, offset) {
    return this.lwf_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0);
  });
  AbstractRuntime.prototype.set_mbenm2$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.set_mbenm2$', function ($receiver, offset, value) {
    this.swf_24o109$($receiver.ptr + (offset * 4 | 0) | 0, value);
  });
  AbstractRuntime.prototype.get_value_6hf4y9$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.get_value_6hf4y9$', function ($receiver) {
    return this.lwf_za3lpa$($receiver.ptr + (0 * 4 | 0) | 0);
  });
  AbstractRuntime.prototype.set_value_wg6tky$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.set_value_wg6tky$', function ($receiver, value) {
    this.swf_24o109$($receiver.ptr + (0 * 4 | 0) | 0, value);
  });
  AbstractRuntime.prototype.plus_s1x8lt$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 4) | 0);
  };
  AbstractRuntime.prototype.minus_s1x8lt$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 4) | 0);
  };
  AbstractRuntime.prototype.minusPtrFloat_lkybfz$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfFloat_iyt3m5$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfFloat_iyt3m5$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.get_i5sm2q$ = function ($receiver, offset) {
    return this.ldf_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0);
  };
  AbstractRuntime.prototype.set_1k85po$ = function ($receiver, offset, value) {
    this.sdf_5wr77w$($receiver.ptr + (offset * 4 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_1by1cw$ = function ($receiver) {
    return this.get_i5sm2q$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_bebc9u$ = function ($receiver, value) {
    this.set_1k85po$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_i5sm2q$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, 4) | 0);
  };
  AbstractRuntime.prototype.minus_i5sm2q$ = function ($receiver, offset) {
    return new CPointer($receiver.ptr + Kotlin.imul(-offset | 0, 4) | 0);
  };
  AbstractRuntime.prototype.minusPtrDouble_8lv61b$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfDouble_r9qerw$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.mp3.AbstractRuntime.fixedArrayOfDouble_r9qerw$', wrapFunction(function () {
    var CPointer_init = _.com.soywiz.korau.format.mp3.CPointer;
    return function (size, setItems) {
      var $receiver = new CPointer_init(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
      setItems($receiver);
      return $receiver;
    };
  }));
  AbstractRuntime.prototype.invoke_orazzn$ = function ($receiver) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())();
  };
  AbstractRuntime.prototype.get_cfunc_aa9ou5$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction0(tmp$);
  };
  AbstractRuntime.prototype.invoke_kmzwtw$ = function ($receiver, v0) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0);
  };
  AbstractRuntime.prototype.get_cfunc_5uo580$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction1(tmp$);
  };
  AbstractRuntime.prototype.invoke_adyl5m$ = function ($receiver, v0, v1) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1);
  };
  AbstractRuntime.prototype.get_cfunc_538cak$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction2(tmp$);
  };
  AbstractRuntime.prototype.invoke_v20pb3$ = function ($receiver, v0, v1, v2) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2);
  };
  AbstractRuntime.prototype.get_cfunc_kwckkt$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction3(tmp$);
  };
  AbstractRuntime.prototype.invoke_9p9e9p$ = function ($receiver, v0, v1, v2, v3) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3);
  };
  AbstractRuntime.prototype.get_cfunc_td88zp$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction4(tmp$);
  };
  AbstractRuntime.prototype.invoke_74spmu$ = function ($receiver, v0, v1, v2, v3, v4) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3, v4);
  };
  AbstractRuntime.prototype.get_cfunc_9uqv2i$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction5(tmp$);
  };
  AbstractRuntime.prototype.invoke_tvimzs$ = function ($receiver, v0, v1, v2, v3, v4, v5) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3, v4, v5);
  };
  AbstractRuntime.prototype.get_cfunc_x5yczq$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction6(tmp$);
  };
  AbstractRuntime.prototype.invoke_hvh889$ = function ($receiver, v0, v1, v2, v3, v4, v5, v6) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3, v4, v5, v6);
  };
  AbstractRuntime.prototype.get_cfunc_fas76v$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction7(tmp$);
  };
  AbstractRuntime.prototype.fclose_yefasl$ = function ($receiver, stream) {
    return this.__syscalls.fclose_yefasl$($receiver, stream);
  };
  AbstractRuntime.prototype.fflush_yefasl$ = function ($receiver, stream) {
    return this.__syscalls.fflush_yefasl$($receiver, stream);
  };
  AbstractRuntime.prototype.fgetpos_svra71$ = function ($receiver, stream, ptrHolder) {
    return this.__syscalls.fgetpos_svra71$($receiver, stream, ptrHolder);
  };
  AbstractRuntime.prototype.fopen_xn3l7s$ = function ($receiver, file, mode) {
    return this.__syscalls.fopen_xn3l7s$($receiver, file, mode);
  };
  AbstractRuntime.prototype.fread_pvmp7v$ = function ($receiver, ptr, size, nmemb, stream) {
    return this.__syscalls.fread_pvmp7v$($receiver, ptr, size, nmemb, stream);
  };
  AbstractRuntime.prototype.fseek_o9bt5g$ = function ($receiver, stream, offset, whence) {
    return this.__syscalls.fseek_o9bt5g$($receiver, stream, offset, whence);
  };
  AbstractRuntime.prototype.fsetpos_svra71$ = function ($receiver, stream, ptrHolder) {
    return this.__syscalls.fsetpos_svra71$($receiver, stream, ptrHolder);
  };
  AbstractRuntime.prototype.ftell_yefasl$ = function ($receiver, stream) {
    return this.__syscalls.ftell_yefasl$($receiver, stream);
  };
  AbstractRuntime.prototype.fwrite_pvmp7v$ = function ($receiver, ptr, size, nmemb, stream) {
    return this.__syscalls.fwrite_pvmp7v$($receiver, ptr, size, nmemb, stream);
  };
  AbstractRuntime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractRuntime',
    interfaces: [RuntimeSyscalls]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korau = package$soywiz.korau || (package$soywiz.korau = {});
  Object.defineProperty(package$korau, 'Korau', {
    get: Korau_getInstance
  });
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  AudioFormat.Info = AudioFormat$Info;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  var package$format = package$korau.format || (package$korau.format = {});
  package$format.AudioFormat = AudioFormat;
  package$format.InvalidAudioFormatException = InvalidAudioFormatException;
  package$format.invalidAudioFormat_61zpoe$ = invalidAudioFormat;
  Object.defineProperty(package$format, 'defaultAudioFormats', {
    get: function () {
      return defaultAudioFormats;
    }
  });
  package$format.AudioFormats = AudioFormats;
  package$format.readSoundInfo_m9jcvn$ = readSoundInfo;
  package$format.registerStandard_llp23w$ = registerStandard;
  Object.defineProperty(MP3, 'Companion', {
    get: MP3$Companion_getInstance
  });
  package$format.MP3 = MP3;
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'JOINT_STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'DUAL_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'SINGLE_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'Companion', {
    get: MP3Base$Parser$Companion$ChannelMode$Companion_getInstance
  });
  MP3Base$Parser$Companion.prototype.ChannelMode = MP3Base$Parser$Companion$ChannelMode;
  MP3Base$Parser$Companion.prototype.Mp3Info = MP3Base$Parser$Companion$Mp3Info;
  Object.defineProperty(MP3Base$Parser, 'Companion', {
    get: MP3Base$Parser$Companion_getInstance
  });
  MP3Base.Parser = MP3Base$Parser;
  package$format.MP3Base = MP3Base;
  Object.defineProperty(OGG, 'Companion', {
    get: OGG$Companion_getInstance
  });
  package$format.OGG = OGG;
  Object.defineProperty(OggBase, 'PacketTypes', {
    get: OggBase$PacketTypes_getInstance
  });
  package$format.OggBase = OggBase;
  Object.defineProperty(WAV, 'Companion', {
    get: WAV$Companion_getInstance
  });
  WAV.Chunk = WAV$Chunk;
  WAV.ProcessedChunk = WAV$ProcessedChunk;
  $$importsForInline$$['korau-root-korau'] = _;
  WAV.Fmt = WAV$Fmt;
  package$format.WAV = WAV;
  package$format.toWav_gs0hc$ = toWav;
  Object.defineProperty(MP3Decoder, 'Companion', {
    get: MP3Decoder$Companion_getInstance
  });
  var package$mp3 = package$format.mp3 || (package$format.mp3 = {});
  package$mp3.MP3Decoder = MP3Decoder;
  var package$internal = package$korau.internal || (package$korau.internal = {});
  package$internal.write_n2t6zc$ = write;
  Object.defineProperty(package$internal, 'KORAU_VERSION_8be2vx$', {
    get: function () {
      return KORAU_VERSION;
    }
  });
  package$internal.get_niceStr_1zw1ma$ = get_niceStr;
  Object.defineProperty(package$internal, 'SampleConvert', {
    get: SampleConvert_getInstance
  });
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  package$internal.combine_ydpzj9$ = combine;
  package$internal.copyChunkTo_heux3r$ = copyChunkTo;
  package$internal.toByteArrayLE_dez40u$ = toByteArrayLE;
  package$internal.toShortArrayLE_jln3ri$ = toShortArrayLE;
  package$internal.arraycopyStep_ft9mzz$ = arraycopyStep;
  package$internal.arraycopyStep_b5ow4v$ = arraycopyStep_0;
  Object.defineProperty(AudioData, 'Companion', {
    get: AudioData$Companion_getInstance
  });
  var package$sound = package$korau.sound || (package$korau.sound = {});
  package$sound.AudioData = AudioData;
  Object.defineProperty(AudioConversionQuality, 'FAST', {
    get: AudioConversionQuality$FAST_getInstance
  });
  package$sound.AudioConversionQuality = AudioConversionQuality;
  package$sound.withRate_fii12q$ = withRate;
  package$sound.toStream_gs0hc$ = toStream;
  package$sound.toNativeSound_gs0hc$ = toNativeSound;
  package$sound.playAndWait_gs0hc$ = playAndWait;
  package$sound.readAudioData_m9jcvn$ = readAudioData;
  package$sound.IAudioSamples = IAudioSamples;
  package$sound.AudioSamples = AudioSamples;
  package$sound.AudioSamplesInterleaved = AudioSamplesInterleaved;
  package$sound.copyOfRange_bca8f$ = copyOfRange;
  package$sound.interleaved_ym3bex$ = interleaved;
  package$sound.separated_ywklkw$ = separated;
  package$sound.AudioSamplesDeque = AudioSamplesDeque;
  Object.defineProperty(AudioStream, 'Companion', {
    get: AudioStream$Companion_getInstance
  });
  package$sound.AudioStream = AudioStream;
  package$sound.toData_ev1oyk$ = toData;
  package$sound.playAndWait_sameis$ = playAndWait_0;
  package$sound.readAudioStream_m9jcvn$ = readAudioStream;
  package$sound.writeAudio_qdx2ve$ = writeAudio;
  Object.defineProperty(package$sound, 'AudioTone', {
    get: AudioTone_getInstance
  });
  package$sound.NativeSoundProvider = NativeSoundProvider;
  package$sound.DummyNativeSoundProvider = DummyNativeSoundProvider;
  package$sound.DummyNativeSoundChannel = DummyNativeSoundChannel;
  package$sound.NativeSoundChannel = NativeSoundChannel;
  package$sound.await_6ares6$ = await_0;
  package$sound.NativeSound = NativeSound;
  package$sound.toData_kbpa60$ = toData_0;
  package$sound.toStream_kbpa60$ = toStream_0;
  package$sound.playAndWait_ioct6n$ = playAndWait_1;
  package$sound.readNativeSound_thwgyb$ = readNativeSound;
  package$sound.readNativeSoundOptimized_thwgyb$ = readNativeSoundOptimized;
  package$sound.readNativeSound_571gdi$ = readNativeSound_0;
  package$sound.PlatformAudioOutput = PlatformAudioOutput;
  Object.defineProperty(package$sound, 'SoundUtils', {
    get: SoundUtils_getInstance
  });
  package$sound.HtmlNativeSoundProvider = HtmlNativeSoundProvider;
  package$sound.AudioBufferNativeSound = AudioBufferNativeSound;
  package$sound.MediaElementAudioSourceNodeWithAudioElement = MediaElementAudioSourceNodeWithAudioElement;
  HtmlSimpleSound.prototype.SimpleSoundChannel = HtmlSimpleSound$SimpleSoundChannel;
  Object.defineProperty(package$sound, 'HtmlSimpleSound', {
    get: HtmlSimpleSound_getInstance
  });
  Object.defineProperty(package$sound, 'nativeSoundProvider', {
    get: get_nativeSoundProvider
  });
  Object.defineProperty(JsPlatformAudioOutput, 'Companion', {
    get: JsPlatformAudioOutput$Companion_getInstance
  });
  package$sound.JsPlatformAudioOutput = JsPlatformAudioOutput;
  package$mp3.MP3DecodeStream_axnxby$ = MP3DecodeStream;
  package$mp3.NativeAudioDecoderProgram = NativeAudioDecoderProgram;
  package$mp3.Arena = Arena;
  package$mp3.write_l04s61$ = write_0;
  package$mp3.read_l04s61$ = read_0;
  package$mp3.write_xeh9nv$ = write_1;
  package$mp3.read_xeh9nv$ = read_1;
  NativeAudioDecoder.DecodeInfo = NativeAudioDecoder$DecodeInfo;
  package$mp3.NativeAudioDecoder = NativeAudioDecoder;
  Object.defineProperty(MiniMp3, 'Companion', {
    get: MiniMp3$Companion_getInstance
  });
  package$mp3.MiniMp3 = MiniMp3;
  Object.defineProperty(mp3dec_frame_info_t, 'Companion', {
    get: mp3dec_frame_info_t$Companion_getInstance
  });
  package$mp3.mp3dec_frame_info_t = mp3dec_frame_info_t;
  Object.defineProperty(mp3dec_t, 'Companion', {
    get: mp3dec_t$Companion_getInstance
  });
  package$mp3.mp3dec_t = mp3dec_t;
  Object.defineProperty(bs_t, 'Companion', {
    get: bs_t$Companion_getInstance
  });
  package$mp3.bs_t = bs_t;
  Object.defineProperty(L12_scale_info, 'Companion', {
    get: L12_scale_info$Companion_getInstance
  });
  package$mp3.L12_scale_info = L12_scale_info;
  Object.defineProperty(L12_subband_alloc_t, 'Companion', {
    get: L12_subband_alloc_t$Companion_getInstance
  });
  package$mp3.L12_subband_alloc_t = L12_subband_alloc_t;
  Object.defineProperty(L3_gr_info_t, 'Companion', {
    get: L3_gr_info_t$Companion_getInstance
  });
  package$mp3.L3_gr_info_t = L3_gr_info_t;
  Object.defineProperty(mp3dec_scratch_t, 'Companion', {
    get: mp3dec_scratch_t$Companion_getInstance
  });
  package$mp3.mp3dec_scratch_t = mp3dec_scratch_t;
  Object.defineProperty(Array2Array288Float, 'Companion', {
    get: Array2Array288Float$Companion_getInstance
  });
  package$mp3.Array2Array288Float = Array2Array288Float;
  Object.defineProperty(Array288Float, 'Companion', {
    get: Array288Float$Companion_getInstance
  });
  package$mp3.Array288Float = Array288Float;
  Object.defineProperty(Array960Float, 'Companion', {
    get: Array960Float$Companion_getInstance
  });
  package$mp3.Array960Float = Array960Float;
  Object.defineProperty(Array4UByte, 'Companion', {
    get: Array4UByte$Companion_getInstance
  });
  package$mp3.Array4UByte = Array4UByte;
  Object.defineProperty(Array511UByte, 'Companion', {
    get: Array511UByte$Companion_getInstance
  });
  package$mp3.Array511UByte = Array511UByte;
  Object.defineProperty(Array192Float, 'Companion', {
    get: Array192Float$Companion_getInstance
  });
  package$mp3.Array192Float = Array192Float;
  Object.defineProperty(Array64UByte, 'Companion', {
    get: Array64UByte$Companion_getInstance
  });
  package$mp3.Array64UByte = Array64UByte;
  Object.defineProperty(Array3UByte, 'Companion', {
    get: Array3UByte$Companion_getInstance
  });
  package$mp3.Array3UByte = Array3UByte;
  Object.defineProperty(Array2815UByte, 'Companion', {
    get: Array2815UByte$Companion_getInstance
  });
  package$mp3.Array2815UByte = Array2815UByte;
  Object.defineProperty(Array4L3_gr_info_t, 'Companion', {
    get: Array4L3_gr_info_t$Companion_getInstance
  });
  package$mp3.Array4L3_gr_info_t = Array4L3_gr_info_t;
  Object.defineProperty(Array2Array576Float, 'Companion', {
    get: Array2Array576Float$Companion_getInstance
  });
  package$mp3.Array2Array576Float = Array2Array576Float;
  Object.defineProperty(Array576Float, 'Companion', {
    get: Array576Float$Companion_getInstance
  });
  package$mp3.Array576Float = Array576Float;
  Object.defineProperty(Array40Float, 'Companion', {
    get: Array40Float$Companion_getInstance
  });
  package$mp3.Array40Float = Array40Float;
  Object.defineProperty(Array33Array64Float, 'Companion', {
    get: Array33Array64Float$Companion_getInstance
  });
  package$mp3.Array33Array64Float = Array33Array64Float;
  Object.defineProperty(Array64Float, 'Companion', {
    get: Array64Float$Companion_getInstance
  });
  package$mp3.Array64Float = Array64Float;
  Object.defineProperty(Array2Array39UByte, 'Companion', {
    get: Array2Array39UByte$Companion_getInstance
  });
  package$mp3.Array2Array39UByte = Array2Array39UByte;
  Object.defineProperty(Array39UByte, 'Companion', {
    get: Array39UByte$Companion_getInstance
  });
  package$mp3.Array39UByte = Array39UByte;
  Object.defineProperty(Array2Array3Array15UByte, 'Companion', {
    get: Array2Array3Array15UByte$Companion_getInstance
  });
  package$mp3.Array2Array3Array15UByte = Array2Array3Array15UByte;
  Object.defineProperty(Array3Array15UByte, 'Companion', {
    get: Array3Array15UByte$Companion_getInstance
  });
  package$mp3.Array3Array15UByte = Array3Array15UByte;
  Object.defineProperty(Array15UByte, 'Companion', {
    get: Array15UByte$Companion_getInstance
  });
  package$mp3.Array15UByte = Array15UByte;
  Object.defineProperty(Array3UInt, 'Companion', {
    get: Array3UInt$Companion_getInstance
  });
  package$mp3.Array3UInt = Array3UInt;
  Object.defineProperty(Array54Float, 'Companion', {
    get: Array54Float$Companion_getInstance
  });
  package$mp3.Array54Float = Array54Float;
  Object.defineProperty(Array8Array23UByte, 'Companion', {
    get: Array8Array23UByte$Companion_getInstance
  });
  package$mp3.Array8Array23UByte = Array8Array23UByte;
  Object.defineProperty(Array23UByte, 'Companion', {
    get: Array23UByte$Companion_getInstance
  });
  package$mp3.Array23UByte = Array23UByte;
  Object.defineProperty(Array8Array40UByte, 'Companion', {
    get: Array8Array40UByte$Companion_getInstance
  });
  package$mp3.Array8Array40UByte = Array8Array40UByte;
  Object.defineProperty(Array40UByte, 'Companion', {
    get: Array40UByte$Companion_getInstance
  });
  package$mp3.Array40UByte = Array40UByte;
  Object.defineProperty(Array4Float, 'Companion', {
    get: Array4Float$Companion_getInstance
  });
  package$mp3.Array4Float = Array4Float;
  Object.defineProperty(Array3Array28UByte, 'Companion', {
    get: Array3Array28UByte$Companion_getInstance
  });
  package$mp3.Array3Array28UByte = Array3Array28UByte;
  Object.defineProperty(Array28UByte, 'Companion', {
    get: Array28UByte$Companion_getInstance
  });
  package$mp3.Array28UByte = Array28UByte;
  Object.defineProperty(Array16UByte, 'Companion', {
    get: Array16UByte$Companion_getInstance
  });
  package$mp3.Array16UByte = Array16UByte;
  Object.defineProperty(Array24UByte, 'Companion', {
    get: Array24UByte$Companion_getInstance
  });
  package$mp3.Array24UByte = Array24UByte;
  Object.defineProperty(Array10UByte, 'Companion', {
    get: Array10UByte$Companion_getInstance
  });
  package$mp3.Array10UByte = Array10UByte;
  Object.defineProperty(Array145Float, 'Companion', {
    get: Array145Float$Companion_getInstance
  });
  package$mp3.Array145Float = Array145Float;
  Object.defineProperty(Array32Short, 'Companion', {
    get: Array32Short$Companion_getInstance
  });
  package$mp3.Array32Short = Array32Short;
  Object.defineProperty(Array3Int, 'Companion', {
    get: Array3Int$Companion_getInstance
  });
  package$mp3.Array3Int = Array3Int;
  Object.defineProperty(Array14Float, 'Companion', {
    get: Array14Float$Companion_getInstance
  });
  package$mp3.Array14Float = Array14Float;
  Object.defineProperty(Array2Array8Float, 'Companion', {
    get: Array2Array8Float$Companion_getInstance
  });
  package$mp3.Array2Array8Float = Array2Array8Float;
  Object.defineProperty(Array8Float, 'Companion', {
    get: Array8Float$Companion_getInstance
  });
  package$mp3.Array8Float = Array8Float;
  Object.defineProperty(Array18Float, 'Companion', {
    get: Array18Float$Companion_getInstance
  });
  package$mp3.Array18Float = Array18Float;
  Object.defineProperty(Array9Float, 'Companion', {
    get: Array9Float$Companion_getInstance
  });
  package$mp3.Array9Float = Array9Float;
  Object.defineProperty(Array6Float, 'Companion', {
    get: Array6Float$Companion_getInstance
  });
  package$mp3.Array6Float = Array6Float;
  Object.defineProperty(Array3Float, 'Companion', {
    get: Array3Float$Companion_getInstance
  });
  package$mp3.Array3Float = Array3Float;
  Object.defineProperty(Array2Array18Float, 'Companion', {
    get: Array2Array18Float$Companion_getInstance
  });
  package$mp3.Array2Array18Float = Array2Array18Float;
  Object.defineProperty(Array24Float, 'Companion', {
    get: Array24Float$Companion_getInstance
  });
  package$mp3.Array24Float = Array24Float;
  Object.defineProperty(Array4Array8Float, 'Companion', {
    get: Array4Array8Float$Companion_getInstance
  });
  package$mp3.Array4Array8Float = Array4Array8Float;
  Object.defineProperty(Array1bs_t, 'Companion', {
    get: Array1bs_t$Companion_getInstance
  });
  package$mp3.Array1bs_t = Array1bs_t;
  Object.defineProperty(Array1L12_scale_info, 'Companion', {
    get: Array1L12_scale_info$Companion_getInstance
  });
  package$mp3.Array1L12_scale_info = Array1L12_scale_info;
  package$mp3.CPointer = CPointer;
  package$mp3.CFunction0 = CFunction0;
  package$mp3.CFunction1 = CFunction1;
  package$mp3.CFunction2 = CFunction2;
  package$mp3.CFunction3 = CFunction3;
  package$mp3.CFunction4 = CFunction4;
  package$mp3.CFunction5 = CFunction5;
  package$mp3.CFunction6 = CFunction6;
  package$mp3.CFunction7 = CFunction7;
  package$mp3.Runtime = Runtime;
  package$mp3.RuntimeSyscalls = RuntimeSyscalls;
  Object.defineProperty(package$mp3, 'DummyRuntimeSyscalls', {
    get: DummyRuntimeSyscalls_getInstance
  });
  AbstractRuntime.IStruct = AbstractRuntime$IStruct;
  AbstractRuntime.IStructCompanion = AbstractRuntime$IStructCompanion;
  AbstractRuntime.Chunk = AbstractRuntime$Chunk;
  AbstractRuntime.ExitError = AbstractRuntime$ExitError;
  package$mp3.AbstractRuntime = AbstractRuntime;
  Object.defineProperty(AudioSamples.prototype, 'size', Object.getOwnPropertyDescriptor(IAudioSamples.prototype, 'size'));
  AudioSamples.prototype.isEmpty = IAudioSamples.prototype.isEmpty;
  AudioSamples.prototype.isNotEmpty = IAudioSamples.prototype.isNotEmpty;
  AudioSamples.prototype.getFloat_vux9f0$ = IAudioSamples.prototype.getFloat_vux9f0$;
  AudioSamples.prototype.setFloat_n0b4r3$ = IAudioSamples.prototype.setFloat_n0b4r3$;
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'size', Object.getOwnPropertyDescriptor(IAudioSamples.prototype, 'size'));
  AudioSamplesInterleaved.prototype.isEmpty = IAudioSamples.prototype.isEmpty;
  AudioSamplesInterleaved.prototype.isNotEmpty = IAudioSamples.prototype.isNotEmpty;
  AudioSamplesInterleaved.prototype.getFloat_vux9f0$ = IAudioSamples.prototype.getFloat_vux9f0$;
  AudioSamplesInterleaved.prototype.setFloat_n0b4r3$ = IAudioSamples.prototype.setFloat_n0b4r3$;
  DummyRuntimeSyscalls.prototype.fopen_xn3l7s$ = RuntimeSyscalls.prototype.fopen_xn3l7s$;
  DummyRuntimeSyscalls.prototype.fread_pvmp7v$ = RuntimeSyscalls.prototype.fread_pvmp7v$;
  DummyRuntimeSyscalls.prototype.fwrite_pvmp7v$ = RuntimeSyscalls.prototype.fwrite_pvmp7v$;
  DummyRuntimeSyscalls.prototype.fflush_yefasl$ = RuntimeSyscalls.prototype.fflush_yefasl$;
  DummyRuntimeSyscalls.prototype.ftell_yefasl$ = RuntimeSyscalls.prototype.ftell_yefasl$;
  DummyRuntimeSyscalls.prototype.fsetpos_svra71$ = RuntimeSyscalls.prototype.fsetpos_svra71$;
  DummyRuntimeSyscalls.prototype.fgetpos_svra71$ = RuntimeSyscalls.prototype.fgetpos_svra71$;
  DummyRuntimeSyscalls.prototype.fseek_o9bt5g$ = RuntimeSyscalls.prototype.fseek_o9bt5g$;
  DummyRuntimeSyscalls.prototype.fclose_yefasl$ = RuntimeSyscalls.prototype.fclose_yefasl$;
  var $receiver = new AudioFormats();
  registerStandard($receiver);
  defaultAudioFormats = $receiver;
  temp = new Float32Array(1);
  KORAU_VERSION = '1.9.11';
  nativeSoundProvider = lazy(nativeSoundProvider$lambda);
  programPool = Pool_init(1, programPool$lambda);
  Kotlin.defineModule('korau-root-korau', _);
  return _;
}));

//# sourceMappingURL=korau-root-korau.js.map
