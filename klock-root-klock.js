(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'klock-root-klock'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'klock-root-klock'.");
    }
    root['klock-root-klock'] = factory(typeof this['klock-root-klock'] === 'undefined' ? {} : this['klock-root-klock'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Comparable = Kotlin.kotlin.Comparable;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var numberToDouble = Kotlin.numberToDouble;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var numberToInt = Kotlin.numberToInt;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Math_0 = Math;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOfNotNull = Kotlin.kotlin.collections.listOfNotNull_jurz7g$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var unboxChar = Kotlin.unboxChar;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var replace_0 = Kotlin.kotlin.text.replace_680rmw$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var first_0 = Kotlin.kotlin.text.first_gw00vp$;
  var drop_0 = Kotlin.kotlin.text.drop_6ic1pp$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Regex = Kotlin.kotlin.text.Regex;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var plus_0 = Kotlin.kotlin.collections.plus_iwxh38$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_v2dak7$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var padEnd = Kotlin.kotlin.text.padEnd_vrc1nu$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var throwCCE = Kotlin.throwCCE;
  DateException.prototype = Object.create(RuntimeException.prototype);
  DateException.prototype.constructor = DateException;
  DateTime$Companion$DatePart.prototype = Object.create(Enum.prototype);
  DateTime$Companion$DatePart.prototype.constructor = DateTime$Companion$DatePart;
  DayOfWeek.prototype = Object.create(Enum.prototype);
  DayOfWeek.prototype.constructor = DayOfWeek;
  KlockLocale$English.prototype = Object.create(KlockLocale.prototype);
  KlockLocale$English.prototype.constructor = KlockLocale$English;
  KlockLocale$English$Companion.prototype = Object.create(KlockLocale$English.prototype);
  KlockLocale$English$Companion.prototype.constructor = KlockLocale$English$Companion;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  GermanKlockLocale.prototype = Object.create(KlockLocale.prototype);
  GermanKlockLocale.prototype.constructor = GermanKlockLocale;
  GermanKlockLocale$Companion.prototype = Object.create(GermanKlockLocale.prototype);
  GermanKlockLocale$Companion.prototype.constructor = GermanKlockLocale$Companion;
  SpanishKlockLocale.prototype = Object.create(KlockLocale.prototype);
  SpanishKlockLocale.prototype.constructor = SpanishKlockLocale;
  SpanishKlockLocale$Companion.prototype = Object.create(SpanishKlockLocale.prototype);
  SpanishKlockLocale$Companion.prototype.constructor = SpanishKlockLocale$Companion;
  FrenchKlockLocale.prototype = Object.create(KlockLocale.prototype);
  FrenchKlockLocale.prototype.constructor = FrenchKlockLocale;
  FrenchKlockLocale$Companion.prototype = Object.create(FrenchKlockLocale.prototype);
  FrenchKlockLocale$Companion.prototype.constructor = FrenchKlockLocale$Companion;
  ItalianKlockLocale.prototype = Object.create(KlockLocale.prototype);
  ItalianKlockLocale.prototype.constructor = ItalianKlockLocale;
  ItalianKlockLocale$Companion.prototype = Object.create(ItalianKlockLocale.prototype);
  ItalianKlockLocale$Companion.prototype.constructor = ItalianKlockLocale$Companion;
  JapaneseKlockLocale.prototype = Object.create(KlockLocale.prototype);
  JapaneseKlockLocale.prototype.constructor = JapaneseKlockLocale;
  JapaneseKlockLocale$Companion.prototype = Object.create(JapaneseKlockLocale.prototype);
  JapaneseKlockLocale$Companion.prototype.constructor = JapaneseKlockLocale$Companion;
  KoreanKlockLocale.prototype = Object.create(KlockLocale.prototype);
  KoreanKlockLocale.prototype.constructor = KoreanKlockLocale;
  KoreanKlockLocale$Companion.prototype = Object.create(KoreanKlockLocale.prototype);
  KoreanKlockLocale$Companion.prototype.constructor = KoreanKlockLocale$Companion;
  DutchKlockLocale.prototype = Object.create(KlockLocale.prototype);
  DutchKlockLocale.prototype.constructor = DutchKlockLocale;
  DutchKlockLocale$Companion.prototype = Object.create(DutchKlockLocale.prototype);
  DutchKlockLocale$Companion.prototype.constructor = DutchKlockLocale$Companion;
  PortugueseKlockLocale.prototype = Object.create(KlockLocale.prototype);
  PortugueseKlockLocale.prototype.constructor = PortugueseKlockLocale;
  PortugueseKlockLocale$Companion.prototype = Object.create(PortugueseKlockLocale.prototype);
  PortugueseKlockLocale$Companion.prototype.constructor = PortugueseKlockLocale$Companion;
  RussianKlockLocale.prototype = Object.create(KlockLocale.prototype);
  RussianKlockLocale.prototype.constructor = RussianKlockLocale;
  RussianKlockLocale$Companion.prototype = Object.create(RussianKlockLocale.prototype);
  RussianKlockLocale$Companion.prototype.constructor = RussianKlockLocale$Companion;
  ChineseKlockLocale.prototype = Object.create(KlockLocale.prototype);
  ChineseKlockLocale.prototype.constructor = ChineseKlockLocale;
  ChineseKlockLocale$Companion.prototype = Object.create(ChineseKlockLocale.prototype);
  ChineseKlockLocale$Companion.prototype.constructor = ChineseKlockLocale$Companion;
  function Date_0(encoded) {
    Date$Companion_getInstance();
    this.encoded = encoded;
  }
  function Date$Companion() {
    Date$Companion_instance = this;
  }
  Date$Companion.prototype.invoke_qt1dr2$ = function (year, month, day) {
    return new Date_0(year << 16 | month << 8 | day << 0);
  };
  Date$Companion.prototype.invoke_uza4s2$ = function (year, month, day) {
    return Date$Companion_getInstance().invoke_qt1dr2$(year, month.index1, day);
  };
  Date$Companion.prototype.invoke_mo62bp$ = function (year, month, day) {
    return Date$Companion_getInstance().invoke_qt1dr2$(year.year, month.index1, day);
  };
  Date$Companion.prototype.invoke_fgzd47$ = function (yearMonth, day) {
    return Date$Companion_getInstance().invoke_qt1dr2$(yearMonth.yearInt, yearMonth.month1, day);
  };
  Date$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Date$Companion_instance = null;
  function Date$Companion_getInstance() {
    if (Date$Companion_instance === null) {
      new Date$Companion();
    }
    return Date$Companion_instance;
  }
  Object.defineProperty(Date_0.prototype, 'year', {
    get: function () {
      return this.encoded >> 16;
    }
  });
  Object.defineProperty(Date_0.prototype, 'month1', {
    get: function () {
      return this.encoded >>> 8 & 255;
    }
  });
  Object.defineProperty(Date_0.prototype, 'month', {
    get: function () {
      return Month$Companion_getInstance().get_za3lpa$(this.month1);
    }
  });
  Object.defineProperty(Date_0.prototype, 'day', {
    get: function () {
      return this.encoded >>> 0 & 255;
    }
  });
  Object.defineProperty(Date_0.prototype, 'yearYear', {
    get: function () {
      return new Year(this.year);
    }
  });
  Object.defineProperty(Date_0.prototype, 'dateTimeDayStart', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_qw7meq$(this.year, this.month, this.day);
    }
  });
  Object.defineProperty(Date_0.prototype, 'dayOfYear', {
    get: function () {
      return this.dateTimeDayStart.dayOfYear;
    }
  });
  Object.defineProperty(Date_0.prototype, 'dayOfWeek', {
    get: function () {
      return this.dateTimeDayStart.dayOfWeek;
    }
  });
  Object.defineProperty(Date_0.prototype, 'dayOfWeekInt', {
    get: function () {
      return this.dateTimeDayStart.dayOfWeekInt;
    }
  });
  Date_0.prototype.format_61zpoe$ = function (format) {
    return this.dateTimeDayStart.format_61zpoe$(format);
  };
  Date_0.prototype.format_cgtbg3$ = function (format) {
    return this.dateTimeDayStart.format_cgtbg3$(format);
  };
  Date_0.prototype.toString = function () {
    return (this.year < 0 ? '-' : '') + abs(this.year).toString() + '-' + padStart(abs(this.month1).toString(), 2, 48) + '-' + padStart(abs(this.day).toString(), 2, 48);
  };
  Date_0.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.encoded, other.encoded);
  };
  Date_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Date',
    interfaces: [Comparable]
  };
  Date_0.prototype.unbox = function () {
    return this.encoded;
  };
  Date_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.encoded) | 0;
    return result;
  };
  Date_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.encoded, other.encoded))));
  };
  function plus_1($receiver, time) {
    return $receiver.dateTimeDayStart.plus_fv8bff$(time).date;
  }
  function plus_2($receiver, time) {
    return $receiver.dateTimeDayStart.plus_glepj8$(time).date;
  }
  function plus_3($receiver, time) {
    return $receiver.dateTimeDayStart.plus_5gml0z$(time).date;
  }
  function plus_4($receiver, time) {
    return DateTime$Companion_getInstance().createAdjusted_ui44o2$($receiver.year, $receiver.month1, $receiver.day, time.hour, time.minute, time.second, time.millisecond);
  }
  function DateException(msg) {
    RuntimeException_init(msg, this);
    this.name = 'DateException';
  }
  DateException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateException',
    interfaces: [RuntimeException]
  };
  function DateFormat() {
    DateFormat$Companion_getInstance();
  }
  DateFormat.prototype.tryParse_ivxn3r$ = function (str, doThrow, callback$default) {
    if (doThrow === void 0)
      doThrow = false;
    return callback$default ? callback$default(str, doThrow) : this.tryParse_ivxn3r$$default(str, doThrow);
  };
  function DateFormat$Companion() {
    DateFormat$Companion_instance = this;
    this.DEFAULT_FORMAT = DateFormat$Companion_getInstance().invoke_61zpoe$('EEE, dd MMM yyyy HH:mm:ss z');
    this.FORMAT1 = DateFormat$Companion_getInstance().invoke_61zpoe$("yyyy-MM-dd'T'HH:mm:ssXXX");
    this.FORMAT_DATE = DateFormat$Companion_getInstance().invoke_61zpoe$('yyyy-MM-dd');
    this.FORMATS = listOf([this.DEFAULT_FORMAT, this.FORMAT1]);
  }
  DateFormat$Companion.prototype.parse_61zpoe$ = function (date) {
    var tmp$;
    var lastError = null;
    tmp$ = this.FORMATS.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        return parse(format, date);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          lastError = e;
        }
         else
          throw e;
      }
    }
    throw ensureNotNull(lastError);
  };
  DateFormat$Companion.prototype.invoke_61zpoe$ = function (pattern) {
    return new PatternDateFormat(pattern);
  };
  DateFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateFormat$Companion_instance = null;
  function DateFormat$Companion_getInstance() {
    if (DateFormat$Companion_instance === null) {
      new DateFormat$Companion();
    }
    return DateFormat$Companion_instance;
  }
  DateFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DateFormat',
    interfaces: []
  };
  function parse($receiver, str) {
    var tmp$;
    tmp$ = $receiver.tryParse_ivxn3r$(str, true);
    if (tmp$ == null) {
      throw new DateException("Not a valid format: '" + str + "' for '" + $receiver + "'");
    }
    return tmp$;
  }
  function parseUtc($receiver, str) {
    return parse($receiver, str).utc;
  }
  function format($receiver, date) {
    return format_1($receiver, DateTime$Companion_getInstance().fromUnix_14dthe$(date));
  }
  function format_0($receiver, date) {
    return format_1($receiver, DateTime$Companion_getInstance().fromUnix_s8cxhz$(date));
  }
  function format_1($receiver, dd) {
    return $receiver.format_j01w8f$(dd.toOffsetUnadjusted_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(0))));
  }
  function format_2($receiver, dd) {
    return format_1($receiver, dd.dateTimeDayStart);
  }
  function DateTime(unixMillis) {
    DateTime$Companion_getInstance();
    this.unixMillis = unixMillis;
  }
  function DateTime$Companion() {
    DateTime$Companion_instance = this;
    this.EPOCH = new DateTime(0.0);
    this.EPOCH_INTERNAL_MILLIS_8be2vx$ = 6.21355968E13;
  }
  DateTime$Companion.prototype.invoke_4lrum3$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new DateTime(DateTime$Companion_getInstance().dateToMillis_0(year.year, month.index1, day) + DateTime$Companion_getInstance().timeToMillis_0(hour, minute, second) + milliseconds);
  };
  DateTime$Companion.prototype.invoke_6h4hbf$ = function (date, time) {
    if (time === void 0) {
      time = new Time(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(0)));
    }
    return DateTime$Companion_getInstance().invoke_ui44o2$(date.year, date.month1, date.day, time.hour, time.minute, time.second, time.millisecond);
  };
  DateTime$Companion.prototype.invoke_qw7meq$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new DateTime(DateTime$Companion_getInstance().dateToMillis_0(year, month.index1, day) + DateTime$Companion_getInstance().timeToMillis_0(hour, minute, second) + milliseconds);
  };
  DateTime$Companion.prototype.invoke_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new DateTime(DateTime$Companion_getInstance().dateToMillis_0(year, month, day) + DateTime$Companion_getInstance().timeToMillis_0(hour, minute, second) + milliseconds);
  };
  DateTime$Companion.prototype.createClamped_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    var clampedMonth = clamp_1(month, 1, 12);
    return this.createUnchecked_ui44o2$(year, clampedMonth, clamp_1(day, 1, Month$Companion_getInstance().invoke_za3lpa$(month).days_za3lpa$(year)), clamp_1(hour, 0, 23), clamp_1(minute, 0, 59), clamp_1(second, 0, 59), milliseconds);
  };
  DateTime$Companion.prototype.createAdjusted_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    var dy = year;
    var dm = month;
    var dd = day;
    var th = hour;
    var tm = minute;
    var ts = second;
    tm = tm + cycleSteps(ts, 0, 59) | 0;
    ts = cycle(ts, 0, 59);
    th = th + cycleSteps(tm, 0, 59) | 0;
    tm = cycle(tm, 0, 59);
    dd = dd + cycleSteps(th, 0, 23) | 0;
    th = cycle(th, 0, 23);
    while (true) {
      var dup = Month$Companion_getInstance().invoke_za3lpa$(dm).days_za3lpa$(dy);
      dm = dm + cycleSteps(dd, 1, dup) | 0;
      dd = cycle(dd, 1, dup);
      dy = dy + cycleSteps(dm, 1, 12) | 0;
      dm = cycle(dm, 1, 12);
      if (cycle(dd, 1, Month$Companion_getInstance().invoke_za3lpa$(dm).days_za3lpa$(dy)) === dd) {
        break;
      }
    }
    return this.createUnchecked_ui44o2$(dy, dm, dd, th, tm, ts, milliseconds);
  };
  DateTime$Companion.prototype.createUnchecked_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new DateTime(DateTime$Companion_getInstance().dateToMillisUnchecked_cub51b$(year, month, day) + DateTime$Companion_getInstance().timeToMillisUnchecked_0(hour, minute, second) + milliseconds);
  };
  DateTime$Companion.prototype.invoke_s8cxhz$ = function (unix) {
    return this.fromUnix_s8cxhz$(unix);
  };
  DateTime$Companion.prototype.invoke_14dthe$ = function (unix) {
    return this.fromUnix_14dthe$(unix);
  };
  DateTime$Companion.prototype.fromUnix_14dthe$ = function (unix) {
    return new DateTime(unix);
  };
  DateTime$Companion.prototype.fromUnix_s8cxhz$ = function (unix) {
    return this.fromUnix_14dthe$(unix.toNumber());
  };
  DateTime$Companion.prototype.fromString_61zpoe$ = function (str) {
    return DateFormat$Companion_getInstance().parse_61zpoe$(str);
  };
  DateTime$Companion.prototype.parse_61zpoe$ = function (str) {
    return DateFormat$Companion_getInstance().parse_61zpoe$(str);
  };
  DateTime$Companion.prototype.now = function () {
    return new DateTime(KlockInternal_getInstance().currentTime);
  };
  DateTime$Companion.prototype.nowLocal = function () {
    return DateTimeTz$Companion_getInstance().nowLocal();
  };
  DateTime$Companion.prototype.nowUnix = function () {
    return KlockInternal_getInstance().currentTime;
  };
  DateTime$Companion.prototype.nowUnixLong = function () {
    return Kotlin.Long.fromNumber(KlockInternal_getInstance().currentTime);
  };
  function DateTime$Companion$DatePart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DateTime$Companion$DatePart_initFields() {
    DateTime$Companion$DatePart_initFields = function () {
    };
    DateTime$Companion$DatePart$Year_instance = new DateTime$Companion$DatePart('Year', 0);
    DateTime$Companion$DatePart$DayOfYear_instance = new DateTime$Companion$DatePart('DayOfYear', 1);
    DateTime$Companion$DatePart$Month_instance = new DateTime$Companion$DatePart('Month', 2);
    DateTime$Companion$DatePart$Day_instance = new DateTime$Companion$DatePart('Day', 3);
  }
  var DateTime$Companion$DatePart$Year_instance;
  function DateTime$Companion$DatePart$Year_getInstance() {
    DateTime$Companion$DatePart_initFields();
    return DateTime$Companion$DatePart$Year_instance;
  }
  var DateTime$Companion$DatePart$DayOfYear_instance;
  function DateTime$Companion$DatePart$DayOfYear_getInstance() {
    DateTime$Companion$DatePart_initFields();
    return DateTime$Companion$DatePart$DayOfYear_instance;
  }
  var DateTime$Companion$DatePart$Month_instance;
  function DateTime$Companion$DatePart$Month_getInstance() {
    DateTime$Companion$DatePart_initFields();
    return DateTime$Companion$DatePart$Month_instance;
  }
  var DateTime$Companion$DatePart$Day_instance;
  function DateTime$Companion$DatePart$Day_getInstance() {
    DateTime$Companion$DatePart_initFields();
    return DateTime$Companion$DatePart$Day_instance;
  }
  DateTime$Companion$DatePart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatePart',
    interfaces: [Enum]
  };
  function DateTime$Companion$DatePart$values() {
    return [DateTime$Companion$DatePart$Year_getInstance(), DateTime$Companion$DatePart$DayOfYear_getInstance(), DateTime$Companion$DatePart$Month_getInstance(), DateTime$Companion$DatePart$Day_getInstance()];
  }
  DateTime$Companion$DatePart.values = DateTime$Companion$DatePart$values;
  function DateTime$Companion$DatePart$valueOf(name) {
    switch (name) {
      case 'Year':
        return DateTime$Companion$DatePart$Year_getInstance();
      case 'DayOfYear':
        return DateTime$Companion$DatePart$DayOfYear_getInstance();
      case 'Month':
        return DateTime$Companion$DatePart$Month_getInstance();
      case 'Day':
        return DateTime$Companion$DatePart$Day_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.DateTime.Companion.DatePart.' + name);
    }
  }
  DateTime$Companion$DatePart.valueOf_61zpoe$ = DateTime$Companion$DatePart$valueOf;
  DateTime$Companion.prototype.dateToMillisUnchecked_cub51b$ = function (year, month, day) {
    return ((new Year(year)).daysSinceOne + Month$Companion_getInstance().invoke_za3lpa$(month).daysToStart_za3lpa$(year) + day - 1 | 0) * 86400000 - this.EPOCH_INTERNAL_MILLIS_8be2vx$;
  };
  DateTime$Companion.prototype.timeToMillisUnchecked_0 = function (hour, minute, second) {
    return hour * 3600000 + minute * 60000 + second * 1000;
  };
  DateTime$Companion.prototype.dateToMillis_0 = function (year, month, day) {
    var tmp$;
    Month$Companion_getInstance().checked_za3lpa$(month);
    tmp$ = Month$Companion_getInstance().invoke_za3lpa$(month).days_za3lpa$(year);
    if (!(1 <= day && day <= tmp$))
      throw new DateException('Day ' + day + ' not valid for year=' + year + ' and month=' + month);
    return this.dateToMillisUnchecked_cub51b$(year, month, day);
  };
  DateTime$Companion.prototype.timeToMillis_0 = function (hour, minute, second) {
    if (!(0 <= hour && hour <= 23))
      throw new DateException('Hour ' + hour + ' not in 0..23');
    if (!(0 <= minute && minute <= 59))
      throw new DateException('Minute ' + minute + ' not in 0..59');
    if (!(0 <= second && second <= 59))
      throw new DateException('Second ' + second + ' not in 0..59');
    return this.timeToMillisUnchecked_0(hour, minute, second);
  };
  DateTime$Companion.prototype.getDatePart_2pm4tv$ = function (millis, part) {
    var tmp$;
    var totalDays = numberToInt(millis / 86400000);
    var year = Year$Companion_getInstance().fromDays_za3lpa$(totalDays);
    if (part === DateTime$Companion$DatePart$Year_getInstance())
      return year.year;
    var isLeap = year.isLeap;
    var startYearDays = year.daysSinceOne;
    var dayOfYear = 1 + (totalDays - startYearDays) | 0;
    if (part === DateTime$Companion$DatePart$DayOfYear_getInstance())
      return dayOfYear;
    var tmp$_0;
    if ((tmp$ = Month$Companion_getInstance().fromDayOfYear_fzusl$(dayOfYear, isLeap)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid dayOfYear=' + dayOfYear + ', isLeap=' + isLeap).toString());
    }
    var month = tmp$_0;
    if (part === DateTime$Companion$DatePart$Month_getInstance())
      return month.index1;
    var dayOfMonth = dayOfYear - month.daysToStart_6taknv$(isLeap) | 0;
    if (part === DateTime$Companion$DatePart$Day_getInstance())
      return dayOfMonth;
    throw IllegalStateException_init('Invalid DATE_PART'.toString());
  };
  DateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTime$Companion_instance = null;
  function DateTime$Companion_getInstance() {
    if (DateTime$Companion_instance === null) {
      new DateTime$Companion();
    }
    return DateTime$Companion_instance;
  }
  Object.defineProperty(DateTime.prototype, 'yearOneMillis', {
    get: function () {
      return DateTime$Companion_getInstance().EPOCH_INTERNAL_MILLIS_8be2vx$ + this.unixMillis;
    }
  });
  Object.defineProperty(DateTime.prototype, 'localOffset', {
    get: function () {
      return TimezoneOffset$Companion_getInstance().local_mw5vjr$(new DateTime(this.unixMillisDouble));
    }
  });
  Object.defineProperty(DateTime.prototype, 'unixMillisDouble', {
    get: function () {
      return this.unixMillis;
    }
  });
  Object.defineProperty(DateTime.prototype, 'unixMillisLong', {
    get: function () {
      return Kotlin.Long.fromNumber(this.unixMillisDouble);
    }
  });
  Object.defineProperty(DateTime.prototype, 'year', {
    get: function () {
      return new Year(this.yearInt);
    }
  });
  Object.defineProperty(DateTime.prototype, 'yearInt', {
    get: function () {
      return DateTime$Companion_getInstance().getDatePart_2pm4tv$(this.yearOneMillis, DateTime$Companion$DatePart$Year_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'month', {
    get: function () {
      return Month$Companion_getInstance().get_za3lpa$(this.month1);
    }
  });
  Object.defineProperty(DateTime.prototype, 'month0', {
    get: function () {
      return this.month1 - 1 | 0;
    }
  });
  Object.defineProperty(DateTime.prototype, 'month1', {
    get: function () {
      return DateTime$Companion_getInstance().getDatePart_2pm4tv$(this.yearOneMillis, DateTime$Companion$DatePart$Month_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'yearMonth', {
    get: function () {
      return YearMonth$Companion_getInstance().invoke_wk05xp$(this.year, this.month);
    }
  });
  Object.defineProperty(DateTime.prototype, 'dayOfMonth', {
    get: function () {
      return DateTime$Companion_getInstance().getDatePart_2pm4tv$(this.yearOneMillis, DateTime$Companion$DatePart$Day_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'dayOfWeek', {
    get: function () {
      return DayOfWeek$Companion_getInstance().get_za3lpa$(this.dayOfWeekInt);
    }
  });
  Object.defineProperty(DateTime.prototype, 'dayOfWeekInt', {
    get: function () {
      return numberToInt((this.yearOneMillis / 86400000 + 1) % 7);
    }
  });
  Object.defineProperty(DateTime.prototype, 'dayOfYear', {
    get: function () {
      return DateTime$Companion_getInstance().getDatePart_2pm4tv$(this.yearOneMillis, DateTime$Companion$DatePart$DayOfYear_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'hours', {
    get: function () {
      return numberToInt(this.yearOneMillis / 3600000 % 24);
    }
  });
  Object.defineProperty(DateTime.prototype, 'minutes', {
    get: function () {
      return numberToInt(this.yearOneMillis / 60000 % 60);
    }
  });
  Object.defineProperty(DateTime.prototype, 'seconds', {
    get: function () {
      return numberToInt(this.yearOneMillis / 1000 % 60);
    }
  });
  Object.defineProperty(DateTime.prototype, 'milliseconds', {
    get: function () {
      return numberToInt(this.yearOneMillis % 1000);
    }
  });
  Object.defineProperty(DateTime.prototype, 'localUnadjusted', {
    get: function () {
      return DateTimeTz$Companion_getInstance().local_rq74cp$(this, this.localOffset);
    }
  });
  DateTime.prototype.toOffsetUnadjusted_fv8bff$ = function (offset) {
    return this.toOffsetUnadjusted_q6c6ai$(get_offset(offset));
  };
  DateTime.prototype.toOffsetUnadjusted_q6c6ai$ = function (offset) {
    return DateTimeTz$Companion_getInstance().local_rq74cp$(this, offset);
  };
  Object.defineProperty(DateTime.prototype, 'local', {
    get: function () {
      return DateTimeTz$Companion_getInstance().utc_rq74cp$(this, this.localOffset);
    }
  });
  DateTime.prototype.toOffset_fv8bff$ = function (offset) {
    return this.toOffset_q6c6ai$(get_offset(offset));
  };
  DateTime.prototype.toOffset_q6c6ai$ = function (offset) {
    return DateTimeTz$Companion_getInstance().utc_rq74cp$(this, offset);
  };
  Object.defineProperty(DateTime.prototype, 'utc', {
    get: function () {
      return DateTimeTz$Companion_getInstance().utc_rq74cp$(this, TimezoneOffset$Companion_getInstance().invoke_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(0))));
    }
  });
  Object.defineProperty(DateTime.prototype, 'dateDayStart', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, 0, 0, 0, 0);
    }
  });
  Object.defineProperty(DateTime.prototype, 'dateDayEnd', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, 23, 59, 59, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'quarter', {
    get: function () {
      return (this.month0 / 3 | 0) + 1 | 0;
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfYear', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, Month$January_getInstance(), 1);
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfMonth', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, 1);
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfQuarter', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, Month$Companion_getInstance().get_za3lpa$(((this.quarter - 1 | 0) * 3 | 0) + 1 | 0), 1);
    }
  });
  DateTime.prototype.startOfDayOfWeek_76hapz$ = function (day) {
    for (var n = 0; n < 7; n++) {
      var date = this.minus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble(n)));
      if (date.dayOfWeek === day)
        return date.startOfDay;
    }
    throw IllegalStateException_init("Shouldn't happen".toString());
  };
  Object.defineProperty(DateTime.prototype, 'startOfWeek', {
    get: function () {
      return this.startOfDayOfWeek_76hapz$(DayOfWeek$Sunday_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfIsoWeek', {
    get: function () {
      return this.startOfDayOfWeek_76hapz$(DayOfWeek$Monday_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfDay', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth);
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfHour', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, this.hours);
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfMinute', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, this.hours, this.minutes);
    }
  });
  Object.defineProperty(DateTime.prototype, 'startOfSecond', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, this.hours, this.minutes, this.seconds);
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfYear', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, Month$December_getInstance(), 31, 23, 59, 59, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfMonth', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.month.days_ccxljp$(this.year), 23, 59, 59, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfQuarter', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, Month$Companion_getInstance().get_za3lpa$(((this.quarter - 1 | 0) * 3 | 0) + 3 | 0), this.month.days_ccxljp$(this.year), 23, 59, 59, 999);
    }
  });
  DateTime.prototype.endOfDayOfWeek_76hapz$ = function (day) {
    for (var n = 0; n < 7; n++) {
      var date = this.plus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble(n)));
      if (date.dayOfWeek === day)
        return date.endOfDay;
    }
    throw IllegalStateException_init("Shouldn't happen".toString());
  };
  Object.defineProperty(DateTime.prototype, 'endOfWeek', {
    get: function () {
      return this.endOfDayOfWeek_76hapz$(DayOfWeek$Monday_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfIsoWeek', {
    get: function () {
      return this.endOfDayOfWeek_76hapz$(DayOfWeek$Sunday_getInstance());
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfDay', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, 23, 59, 59, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfHour', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, this.hours, 59, 59, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfMinute', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, this.hours, this.minutes, 59, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'endOfSecond', {
    get: function () {
      return DateTime$Companion_getInstance().invoke_4lrum3$(this.year, this.month, this.dayOfMonth, this.hours, this.minutes, this.seconds, 999);
    }
  });
  Object.defineProperty(DateTime.prototype, 'date', {
    get: function () {
      return Date$Companion_getInstance().invoke_qt1dr2$(this.yearInt, this.month1, this.dayOfMonth);
    }
  });
  Object.defineProperty(DateTime.prototype, 'time', {
    get: function () {
      return Time$Companion_getInstance().invoke_tjonv8$(this.hours, this.minutes, this.seconds, this.milliseconds);
    }
  });
  DateTime.prototype.plus_glepj8$ = function (delta) {
    return this.add_5wr77w$(delta.totalMonths, 0.0);
  };
  DateTime.prototype.plus_5gml0z$ = function (delta) {
    return this.add_5wr77w$(delta.totalMonths, delta.totalMilliseconds);
  };
  DateTime.prototype.plus_fv8bff$ = function (delta) {
    return this.add_5wr77w$(0, delta.milliseconds);
  };
  DateTime.prototype.minus_glepj8$ = function (delta) {
    return this.plus_glepj8$(delta.unaryMinus());
  };
  DateTime.prototype.minus_5gml0z$ = function (delta) {
    return this.plus_5gml0z$(delta.unaryMinus());
  };
  DateTime.prototype.minus_fv8bff$ = function (delta) {
    return this.plus_fv8bff$(delta.unaryMinus());
  };
  DateTime.prototype.minus_mw5vjr$ = function (other) {
    var $receiver = this.unixMillisDouble - other.unixMillisDouble;
    return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
  };
  DateTime.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.compareTo(this.unixMillis, other.unixMillis);
  };
  DateTime.prototype.add_5wr77w$ = function (deltaMonths, deltaMilliseconds) {
    if (deltaMonths === 0 && deltaMilliseconds === 0.0)
      return this;
    else if (deltaMonths === 0)
      return new DateTime(this.unixMillis + deltaMilliseconds);
    else {
      var year = this.year;
      var month = this.month.index1;
      var day = this.dayOfMonth;
      var i = month - 1 + deltaMonths | 0;
      if (i >= 0) {
        month = i % 12 + 1 | 0;
        year = year.plus_za3lpa$(i / 12 | 0);
      }
       else {
        month = 12 + (i + 1 | 0) % 12 | 0;
        year = year.plus_za3lpa$((i - 11 | 0) / 12 | 0);
      }
      var days = Month$Companion_getInstance().invoke_za3lpa$(month).days_ccxljp$(year);
      if (day > days)
        day = days;
      return new DateTime(DateTime$Companion_getInstance().dateToMillisUnchecked_cub51b$(year.year, month, day) + this.yearOneMillis % 86400000 + deltaMilliseconds);
    }
  };
  DateTime.prototype.add_e89ho5$ = function (dateSpan, timeSpan) {
    return this.add_5wr77w$(dateSpan.totalMonths, timeSpan.milliseconds);
  };
  DateTime.prototype.copyDayOfMonth_4lrum3$ = function (year, month, dayOfMonth, hours, minutes, seconds, milliseconds) {
    if (year === void 0)
      year = this.year;
    if (month === void 0)
      month = this.month;
    if (dayOfMonth === void 0)
      dayOfMonth = this.dayOfMonth;
    if (hours === void 0)
      hours = this.hours;
    if (minutes === void 0)
      minutes = this.minutes;
    if (seconds === void 0)
      seconds = this.seconds;
    if (milliseconds === void 0)
      milliseconds = this.milliseconds;
    return DateTime$Companion_getInstance().invoke_4lrum3$(year, month, dayOfMonth, hours, minutes, seconds, milliseconds);
  };
  DateTime.prototype.format_cgtbg3$ = function (format) {
    return format_1(format, this);
  };
  DateTime.prototype.format_61zpoe$ = function (format) {
    return format_1(DateFormat$Companion_getInstance().invoke_61zpoe$(format), this);
  };
  DateTime.prototype.toString_61zpoe$ = function (format) {
    return format_1(DateFormat$Companion_getInstance().invoke_61zpoe$(format), this);
  };
  DateTime.prototype.toString_cgtbg3$ = function (format) {
    return format_1(format, this);
  };
  DateTime.prototype.toString = function () {
    return format_1(DateFormat$Companion_getInstance().DEFAULT_FORMAT, this);
  };
  DateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTime',
    interfaces: [Comparable]
  };
  DateTime.prototype.unbox = function () {
    return this.unixMillis;
  };
  DateTime.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.unixMillis) | 0;
    return result;
  };
  DateTime.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.unixMillis, other.unixMillis))));
  };
  function max(a, b) {
    var tmp$ = DateTime$Companion_getInstance();
    var a_0 = a.unixMillis;
    var b_0 = b.unixMillis;
    return tmp$.fromUnix_14dthe$(Math_0.max(a_0, b_0));
  }
  function min(a, b) {
    var tmp$ = DateTime$Companion_getInstance();
    var a_0 = a.unixMillis;
    var b_0 = b.unixMillis;
    return tmp$.fromUnix_14dthe$(Math_0.min(a_0, b_0));
  }
  function clamp($receiver, min, max) {
    if ($receiver.compareTo_11rb$(min) < 0)
      return min;
    else if ($receiver.compareTo_11rb$(max) > 0)
      return max;
    else
      return $receiver;
  }
  function DateTimeRange(from, to) {
    DateTimeRange$Companion_getInstance();
    this.from = from;
    this.to = to;
    this.span_ot5r3q$_0 = klockLazyOrGet(DateTimeRange$span$lambda(this));
  }
  Object.defineProperty(DateTimeRange.prototype, 'valid', {
    get: function () {
      return this.from.compareTo_11rb$(this.to) <= 0;
    }
  });
  function DateTimeRange$Companion() {
    DateTimeRange$Companion_instance = this;
  }
  DateTimeRange$Companion.prototype.invoke_n9kft2$ = function (base, from, to) {
    return new DateTimeRange(plus_4(base, from), plus_4(base, to));
  };
  DateTimeRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeRange$Companion_instance = null;
  function DateTimeRange$Companion_getInstance() {
    if (DateTimeRange$Companion_instance === null) {
      new DateTimeRange$Companion();
    }
    return DateTimeRange$Companion_instance;
  }
  Object.defineProperty(DateTimeRange.prototype, 'size', {
    get: function () {
      return this.to.minus_mw5vjr$(this.from);
    }
  });
  Object.defineProperty(DateTimeRange.prototype, 'inclusive', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(DateTimeRange.prototype, 'min', {
    get: function () {
      return this.from;
    }
  });
  Object.defineProperty(DateTimeRange.prototype, 'max', {
    get: function () {
      return this.to;
    }
  });
  Object.defineProperty(DateTimeRange.prototype, 'duration', {
    get: function () {
      return this.to.minus_mw5vjr$(this.from);
    }
  });
  Object.defineProperty(DateTimeRange.prototype, 'span', {
    get: function () {
      return this.span_ot5r3q$_0.value;
    }
  });
  DateTimeRange.prototype.contains_mw5vjr$ = function (date) {
    var unix = date.unixMillisDouble;
    var from = this.from.unixMillisDouble;
    var to = this.to.unixMillisDouble;
    return unix < from ? false : unix < to;
  };
  DateTimeRange.prototype.contains_r8ew1g$ = function (other) {
    return other.min.compareTo_11rb$(this.min) >= 0 && other.max.compareTo_11rb$(this.max) <= 0;
  };
  DateTimeRange.prototype._intersectionWith_0 = function (that, rightOpen, handler) {
    var from = max(this.from, that.from);
    var to = min(this.to, that.to);
    return handler(from, to, rightOpen ? from.compareTo_11rb$(to) < 0 : from.compareTo_11rb$(to) <= 0);
  };
  DateTimeRange.prototype.intersectionWith_yhywpf$ = function (that, rightOpen) {
    if (rightOpen === void 0)
      rightOpen = true;
    var from = max(this.from, that.from);
    var to = min(this.to, that.to);
    var handler$result;
    if (rightOpen ? from.compareTo_11rb$(to) < 0 : from.compareTo_11rb$(to) <= 0) {
      handler$result = new DateTimeRange(from, to);
    }
     else {
      handler$result = null;
    }
    return handler$result;
  };
  DateTimeRange.prototype.intersectsWith_yhywpf$ = function (that, rightOpen) {
    if (rightOpen === void 0)
      rightOpen = true;
    var from = max(this.from, that.from);
    var to = min(this.to, that.to);
    return rightOpen ? from.compareTo_11rb$(to) < 0 : from.compareTo_11rb$(to) <= 0;
  };
  DateTimeRange.prototype.intersectsOrInContactWith_r8ew1g$ = function (that) {
    return this.intersectsWith_yhywpf$(that, false);
  };
  DateTimeRange.prototype.mergeOnContactOrNull_r8ew1g$ = function (that) {
    if (!this.intersectsOrInContactWith_r8ew1g$(that))
      return null;
    var min_0 = min(this.min, that.min);
    var max_0 = max(this.max, that.max);
    return new DateTimeRange(min_0, max_0);
  };
  DateTimeRange.prototype.without_r8ew1g$ = function (that) {
    if (that.min.compareTo_11rb$(this.min) <= 0 && that.max.compareTo_11rb$(this.max) >= 0) {
      return emptyList();
    }
     else if (that.min.compareTo_11rb$(this.max) >= 0 || that.max.compareTo_11rb$(this.min) <= 0)
      return listOf_0(this);
    else {
      var p0 = this.min;
      var p1 = that.min;
      var p2 = that.max;
      var p3 = this.max;
      var c1 = p0.compareTo_11rb$(p1) < 0 ? new DateTimeRange(p0, p1) : null;
      var c2 = p2.compareTo_11rb$(p3) < 0 ? new DateTimeRange(p2, p3) : null;
      return listOfNotNull([c1, c2]);
    }
  };
  DateTimeRange.prototype.toString_cgtbg3$ = function (format) {
    return this.min.toString_cgtbg3$(format) + '..' + this.max.toString_cgtbg3$(format);
  };
  DateTimeRange.prototype.toStringLongs = function () {
    return this.min.unixMillisLong.toString() + '..' + this.max.unixMillisLong.toString();
  };
  DateTimeRange.prototype.toString = function () {
    return this.toString_cgtbg3$(DateFormat$Companion_getInstance().FORMAT1);
  };
  DateTimeRange.prototype.compareTo_11rb$ = function (other) {
    if (this.max.compareTo_11rb$(other) <= 0)
      return -1;
    if (this.min.compareTo_11rb$(other) > 0)
      return 1;
    return 0;
  };
  function DateTimeRange$span$lambda(this$DateTimeRange) {
    return function () {
      var reverse = this$DateTimeRange.to.compareTo_11rb$(this$DateTimeRange.from) < 0;
      var rfrom = !reverse ? this$DateTimeRange.from : this$DateTimeRange.to;
      var rto = !reverse ? this$DateTimeRange.to : this$DateTimeRange.from;
      var years = 0;
      var months = 0;
      var pivot = rfrom;
      var diffYears = rto.year.minus_ccxljp$(pivot.year);
      pivot = pivot.plus_glepj8$(new MonthSpan(12 * diffYears | 0));
      years = years + diffYears | 0;
      if (pivot.compareTo_11rb$(rto) > 0) {
        pivot = pivot.minus_glepj8$(new MonthSpan(12 * 1 | 0));
        years = years - 1 | 0;
      }
      while (true) {
        var t = pivot.plus_glepj8$(new MonthSpan(1));
        if (t.compareTo_11rb$(rto) <= 0) {
          months = months + 1 | 0;
          pivot = t;
        }
         else {
          break;
        }
      }
      var out = new DateTimeSpan((new MonthSpan(12 * years | 0)).plus_glepj8$(new MonthSpan(months)), rto.minus_mw5vjr$(pivot));
      return reverse ? out.unaryMinus() : out;
    };
  }
  DateTimeRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeRange',
    interfaces: [Comparable]
  };
  function DateTimeRange_init(from, to, inclusive, $this) {
    $this = $this || Object.create(DateTimeRange.prototype);
    DateTimeRange.call($this, from, to);
    return $this;
  }
  DateTimeRange.prototype.component1 = function () {
    return this.from;
  };
  DateTimeRange.prototype.component2 = function () {
    return this.to;
  };
  DateTimeRange.prototype.copy_4p96hy$ = function (from, to) {
    return new DateTimeRange(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  DateTimeRange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  DateTimeRange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  function toStringLongs($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.toStringLongs());
    }
    return destination.toString();
  }
  function rangeTo($receiver, other) {
    return until_0($receiver, other);
  }
  function until_0($receiver, other) {
    return new DateTimeRange($receiver, other);
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
  var genericBinarySearch$lambda = wrapFunction(function () {
    return function (from, to, low, high) {
      return (-low | 0) - 1 | 0;
    };
  });
  function DateTimeRangeSet(dummy, ranges) {
    DateTimeRangeSet$Companion_getInstance();
    this.dummy = dummy;
    this.ranges = ranges;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.bounds = new DateTimeRange((tmp$_0 = (tmp$ = firstOrNull(this.ranges)) != null ? tmp$.from : null) != null ? tmp$_0 : DateTime$Companion_getInstance().EPOCH, (tmp$_2 = (tmp$_1 = lastOrNull(this.ranges)) != null ? tmp$_1.to : null) != null ? tmp$_2 : DateTime$Companion_getInstance().EPOCH);
    this.size_g9zhc7$_0 = klockLazyOrGet(DateTimeRangeSet$size$lambda(this));
  }
  Object.defineProperty(DateTimeRangeSet.prototype, 'size', {
    get: function () {
      return this.size_g9zhc7$_0.value;
    }
  });
  DateTimeRangeSet.prototype.plus_r8ew1g$ = function (range) {
    return this.plus_4hf5e6$(DateTimeRangeSet_init_0(range));
  };
  DateTimeRangeSet.prototype.plus_4hf5e6$ = function (right) {
    return DateTimeRangeSet_init(plus(this.ranges, right.ranges));
  };
  DateTimeRangeSet.prototype.minus_r8ew1g$ = function (range) {
    return this.minus_4hf5e6$(DateTimeRangeSet_init_0(range));
  };
  DateTimeRangeSet.prototype.minus_4hf5e6$ = function (right) {
    return DateTimeRangeSet$Fast_getInstance().minus_m25l59$(this, right);
  };
  DateTimeRangeSet.prototype.contains_mw5vjr$ = function (time) {
    return DateTimeRangeSet$Fast_getInstance().contains_fijzrp$(time, this);
  };
  DateTimeRangeSet.prototype.contains_r8ew1g$ = function (time) {
    return DateTimeRangeSet$Fast_getInstance().contains_7prg8a$(time, this);
  };
  DateTimeRangeSet.prototype.intersection_r8ew1g$ = function (range) {
    return this.intersection_4hf5e6$(DateTimeRangeSet_init_0(range));
  };
  DateTimeRangeSet.prototype.intersection_arcm6d$ = function (range) {
    return this.intersection_4hf5e6$(DateTimeRangeSet_init_1(range.slice()));
  };
  DateTimeRangeSet.prototype.intersection_4hf5e6$ = function (right) {
    return DateTimeRangeSet$Fast_getInstance().intersection_urhnu8$(this, right);
  };
  function DateTimeRangeSet$Companion() {
    DateTimeRangeSet$Companion_instance = this;
  }
  DateTimeRangeSet$Companion.prototype.toStringLongs_4yh9xl$ = function (ranges) {
    var destination = ArrayList_init(collectionSizeOrDefault(ranges, 10));
    var tmp$;
    tmp$ = ranges.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.toStringLongs());
    }
    return destination.toString();
  };
  DateTimeRangeSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeRangeSet$Companion_instance = null;
  function DateTimeRangeSet$Companion_getInstance() {
    if (DateTimeRangeSet$Companion_instance === null) {
      new DateTimeRangeSet$Companion();
    }
    return DateTimeRangeSet$Companion_instance;
  }
  function DateTimeRangeSet$Fast() {
    DateTimeRangeSet$Fast_instance = this;
  }
  function DateTimeRangeSet$Fast$combine$lambda(it) {
    return it.from.unixMillis;
  }
  DateTimeRangeSet$Fast.prototype.combine_7wyhd8$ = function (ranges) {
    var tmp$, tmp$_0;
    if (ranges.isEmpty())
      return ranges;
    var sorted = sortedWith(ranges, new Comparator$ObjectLiteral(compareBy$lambda(DateTimeRangeSet$Fast$combine$lambda)));
    var out = ArrayList_init_0();
    var pivot = first(sorted);
    tmp$ = sorted.size;
    for (var n = 1; n < tmp$; n++) {
      var current = sorted.get_za3lpa$(n);
      var result = pivot.mergeOnContactOrNull_r8ew1g$(current);
      if (result != null) {
        tmp$_0 = result;
      }
       else {
        out.add_11rb$(pivot);
        tmp$_0 = current;
      }
      pivot = tmp$_0;
    }
    return plus(out, listOf_0(pivot));
  };
  DateTimeRangeSet$Fast.prototype.minus_m25l59$ = function (left, right) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (left.ranges.isEmpty() || right.ranges.isEmpty())
      return left;
    var ll = left.ranges;
    var $receiver = right.ranges;
    var destination = ArrayList_init_0();
    var tmp$_5;
    tmp$_5 = $receiver.iterator();
    while (tmp$_5.hasNext()) {
      var element = tmp$_5.next();
      if (element.intersectsWith_yhywpf$(left.bounds))
        destination.add_11rb$(element);
    }
    var rr = destination;
    var lpos = 0;
    var rpos = 0;
    var l = getOrNull(ll, (tmp$ = lpos, lpos = tmp$ + 1 | 0, tmp$));
    var r = getOrNull(rr, (tmp$_0 = rpos, rpos = tmp$_0 + 1 | 0, tmp$_0));
    var out = ArrayList_init_0();
    while (l != null && r != null) {
      var result = l.without_r8ew1g$(r);
      switch (result.size) {
        case 0:
          l = getOrNull(ll, (tmp$_1 = lpos, lpos = tmp$_1 + 1 | 0, tmp$_1));
          break;
        case 1:
          if (r.from.compareTo_11rb$(l.to) >= 0) {
            out.add_11rb$(result.get_za3lpa$(0));
            l = getOrNull(ll, (tmp$_2 = lpos, lpos = tmp$_2 + 1 | 0, tmp$_2));
          }
           else if (equals(l, result.get_za3lpa$(0))) {
            r = getOrNull(rr, (tmp$_3 = rpos, rpos = tmp$_3 + 1 | 0, tmp$_3));
          }
           else {
            l = result.get_za3lpa$(0);
          }

          break;
        default:out.add_11rb$(result.get_za3lpa$(0));
          l = result.get_za3lpa$(1);
          break;
      }
    }
    if (l != null) {
      out.add_11rb$(l);
    }
    while (lpos < ll.size) {
      out.add_11rb$(ll.get_za3lpa$((tmp$_4 = lpos, lpos = tmp$_4 + 1 | 0, tmp$_4)));
    }
    return DateTimeRangeSet_init(out);
  };
  DateTimeRangeSet$Fast.prototype.intersection_urhnu8$ = function (left, right) {
    var tmp$, tmp$_0;
    if (left.ranges.isEmpty() || right.ranges.isEmpty()) {
      return DateTimeRangeSet_init(emptyList());
    }
    var $receiver = left.ranges;
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (element.intersectsWith_yhywpf$(right.bounds))
        destination.add_11rb$(element);
    }
    var ll = destination;
    var $receiver_0 = right.ranges;
    var destination_0 = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (element_0.intersectsWith_yhywpf$(left.bounds))
        destination_0.add_11rb$(element_0);
    }
    var rr = destination_0;
    var out = ArrayList_init_0();
    var rpos = 0;
    tmp$ = ll.iterator();
    while (tmp$.hasNext()) {
      var l = tmp$.next();
      rpos = 0;
      while (rpos < rr.size) {
        tmp$_0 = getOrNull(rr, rpos);
        if (tmp$_0 == null) {
          break;
        }
        var r = tmp$_0;
        if (r.min.compareTo_11rb$(l.max) > 0)
          break;
        var res = l.intersectionWith_yhywpf$(r);
        if (res != null) {
          out.add_11rb$(res);
        }
        rpos = rpos + 1 | 0;
      }
    }
    return DateTimeRangeSet_init(out);
  };
  DateTimeRangeSet$Fast.prototype.contains_fijzrp$ = function (time, rangeSet) {
    if (!rangeSet.bounds.contains_mw5vjr$(time))
      return false;
    var ranges = rangeSet.ranges;
    var toIndex = ranges.size;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = ranges.get_za3lpa$(mid).compareTo_11rb$(time);
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
    var result = new BSearchResult(genericBinarySearch$result);
    return result.found;
  };
  DateTimeRangeSet$Fast.prototype.contains_7prg8a$ = function (time, rangeSet) {
    if (!rangeSet.bounds.contains_r8ew1g$(time))
      return false;
    var ranges = rangeSet.ranges;
    var toIndex = ranges.size;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var check$result;
        var range = ranges.get_za3lpa$(mid);
        if (range.contains_r8ew1g$(time)) {
          check$result = 0;
        }
         else if (time.min.compareTo_11rb$(range.min) < 0) {
          check$result = 1;
        }
         else {
          check$result = -1;
        }
        var mval = check$result;
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
    var result = new BSearchResult(genericBinarySearch$result);
    return result.found;
  };
  DateTimeRangeSet$Fast.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Fast',
    interfaces: []
  };
  var DateTimeRangeSet$Fast_instance = null;
  function DateTimeRangeSet$Fast_getInstance() {
    if (DateTimeRangeSet$Fast_instance === null) {
      new DateTimeRangeSet$Fast();
    }
    return DateTimeRangeSet$Fast_instance;
  }
  function DateTimeRangeSet$Slow() {
    DateTimeRangeSet$Slow_instance = this;
  }
  DateTimeRangeSet$Slow.prototype.minus_m25l59$ = function (l, r) {
    var rightList = r.ranges;
    var out = toMutableList(l.ranges);
    restart: while (true) {
      var leftIndex = 0;
      for (var tmp$ = out.iterator(); tmp$.hasNext(); ++leftIndex) {
        var left = tmp$.next();
        var tmp$_0, tmp$_1;
        tmp$_0 = rightList.iterator();
        while (tmp$_0.hasNext()) {
          var right = tmp$_0.next();
          var result = left.without_r8ew1g$(right);
          if (result.size !== 1 || !((tmp$_1 = result.get_za3lpa$(0)) != null ? tmp$_1.equals(left) : null)) {
            out = toMutableList(plus(plus(slice(out, until(0, leftIndex)), result), slice(out, until(leftIndex + 1 | 0, out.size))));
            continue restart;
          }
        }
      }
      break;
    }
    return DateTimeRangeSet_init(out);
  };
  DateTimeRangeSet$Slow.prototype.combine_7wyhd8$ = function (ranges) {
    var ranges_0 = toMutableList(ranges);
    restart: while (true) {
      for (var i = 0; i !== ranges_0.size; ++i) {
        for (var j = 0; j !== ranges_0.size; ++j) {
          if (i === j)
            continue;
          var ri = ranges_0.get_za3lpa$(i);
          var rj = ranges_0.get_za3lpa$(j);
          var concat = ri.mergeOnContactOrNull_r8ew1g$(rj);
          if (concat != null) {
            ranges_0.remove_11rb$(rj);
            ranges_0.set_wxm5ur$(i, concat);
            continue restart;
          }
        }
      }
      break;
    }
    return ranges_0;
  };
  DateTimeRangeSet$Slow.prototype.intersection_urhnu8$ = function (left, right) {
    var tmp$, tmp$_0;
    var leftList = left.ranges;
    var rightList = right.ranges;
    var out = ArrayList_init_0();
    tmp$ = leftList.iterator();
    while (tmp$.hasNext()) {
      var l = tmp$.next();
      tmp$_0 = rightList.iterator();
      while (tmp$_0.hasNext()) {
        var r = tmp$_0.next();
        if (r.min.compareTo_11rb$(l.max) > 0)
          break;
        var result = l.intersectionWith_yhywpf$(r);
        if (result != null) {
          out.add_11rb$(result);
        }
      }
    }
    return DateTimeRangeSet_init(out);
  };
  DateTimeRangeSet$Slow.prototype.contains_fijzrp$ = function (time, rangeSet) {
    if (!rangeSet.bounds.contains_mw5vjr$(time))
      return false;
    var $receiver = rangeSet.ranges;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      if ($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).contains_mw5vjr$(time))
        return true;
    }
    return false;
  };
  DateTimeRangeSet$Slow.prototype.contains_7prg8a$ = function (time, rangeSet) {
    if (!rangeSet.bounds.contains_r8ew1g$(time))
      return false;
    var $receiver = rangeSet.ranges;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      if ($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).contains_r8ew1g$(time))
        return true;
    }
    return false;
  };
  DateTimeRangeSet$Slow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Slow',
    interfaces: []
  };
  var DateTimeRangeSet$Slow_instance = null;
  function DateTimeRangeSet$Slow_getInstance() {
    if (DateTimeRangeSet$Slow_instance === null) {
      new DateTimeRangeSet$Slow();
    }
    return DateTimeRangeSet$Slow_instance;
  }
  DateTimeRangeSet.prototype.toStringLongs = function () {
    var $receiver = this.ranges;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.toStringLongs());
    }
    return destination.toString();
  };
  DateTimeRangeSet.prototype.toString = function () {
    return this.ranges.toString();
  };
  function DateTimeRangeSet$size$lambda(this$DateTimeRangeSet) {
    return function () {
      var out = {v: TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0))};
      var $receiver = this$DateTimeRangeSet.ranges;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        out.v = out.v.plus_fv8bff$($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).size);
      }
      return out.v;
    };
  }
  DateTimeRangeSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeRangeSet',
    interfaces: []
  };
  function DateTimeRangeSet_init(ranges, $this) {
    $this = $this || Object.create(DateTimeRangeSet.prototype);
    DateTimeRangeSet.call($this, false, DateTimeRangeSet$Fast_getInstance().combine_7wyhd8$(ranges));
    return $this;
  }
  function DateTimeRangeSet_init_0(range, $this) {
    $this = $this || Object.create(DateTimeRangeSet.prototype);
    DateTimeRangeSet_init(listOf_0(range), $this);
    return $this;
  }
  function DateTimeRangeSet_init_1(ranges, $this) {
    $this = $this || Object.create(DateTimeRangeSet.prototype);
    DateTimeRangeSet_init(toList(ranges), $this);
    return $this;
  }
  DateTimeRangeSet.prototype.component1 = function () {
    return this.dummy;
  };
  DateTimeRangeSet.prototype.component2 = function () {
    return this.ranges;
  };
  DateTimeRangeSet.prototype.copy_wpbt9k$ = function (dummy, ranges) {
    return new DateTimeRangeSet(dummy === void 0 ? this.dummy : dummy, ranges === void 0 ? this.ranges : ranges);
  };
  DateTimeRangeSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    result = result * 31 + Kotlin.hashCode(this.ranges) | 0;
    return result;
  };
  DateTimeRangeSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dummy, other.dummy) && Kotlin.equals(this.ranges, other.ranges)))));
  };
  function toRangeSet($receiver) {
    return DateTimeRangeSet_init(toList_0($receiver));
  }
  function DateTimeSpan(monthSpan, timeSpan) {
    this.monthSpan = monthSpan;
    this.timeSpan = timeSpan;
    this.computed_a87s7m$_0 = klockLazyOrGet(DateTimeSpan$computed$lambda(this));
  }
  DateTimeSpan.prototype.unaryMinus = function () {
    return new DateTimeSpan(this.monthSpan.unaryMinus(), this.timeSpan.unaryMinus());
  };
  DateTimeSpan.prototype.unaryPlus = function () {
    return new DateTimeSpan(this.monthSpan.unaryPlus(), this.timeSpan.unaryPlus());
  };
  DateTimeSpan.prototype.plus_fv8bff$ = function (other) {
    return new DateTimeSpan(this.monthSpan, this.timeSpan.plus_fv8bff$(other));
  };
  DateTimeSpan.prototype.plus_glepj8$ = function (other) {
    return new DateTimeSpan(this.monthSpan.plus_glepj8$(other), this.timeSpan);
  };
  DateTimeSpan.prototype.plus_5gml0z$ = function (other) {
    return new DateTimeSpan(this.monthSpan.plus_glepj8$(other.monthSpan), this.timeSpan.plus_fv8bff$(other.timeSpan));
  };
  DateTimeSpan.prototype.minus_fv8bff$ = function (other) {
    return this.plus_fv8bff$(other.unaryMinus());
  };
  DateTimeSpan.prototype.minus_glepj8$ = function (other) {
    return this.plus_glepj8$(other.unaryMinus());
  };
  DateTimeSpan.prototype.minus_5gml0z$ = function (other) {
    return this.plus_5gml0z$(other.unaryMinus());
  };
  DateTimeSpan.prototype.times_3p81yu$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.DateTimeSpan.times_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (times) {
      return this.times_14dthe$(numberToDouble(times));
    };
  }));
  DateTimeSpan.prototype.div_3p81yu$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.DateTimeSpan.div_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (times) {
      return this.times_14dthe$(1.0 / numberToDouble(times));
    };
  }));
  DateTimeSpan.prototype.times_14dthe$ = function (times) {
    return new DateTimeSpan(new MonthSpan(numberToInt(this.monthSpan.totalMonths * numberToDouble(times))), this.timeSpan.times_14dthe$(times));
  };
  Object.defineProperty(DateTimeSpan.prototype, 'totalYears', {
    get: function () {
      return get_totalYears(this.monthSpan);
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'totalMonths', {
    get: function () {
      return this.monthSpan.totalMonths;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'totalMilliseconds', {
    get: function () {
      return this.timeSpan.milliseconds;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'years', {
    get: function () {
      return get_years_0(this.monthSpan);
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'months', {
    get: function () {
      return get_months_0(this.monthSpan);
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'weeks', {
    get: function () {
      return this.computed_0.weeks;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'daysNotIncludingWeeks', {
    get: function () {
      return this.days;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'daysIncludingWeeks', {
    get: function () {
      return this.computed_0.days + (this.computed_0.weeks * 7 | 0) | 0;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'days', {
    get: function () {
      return this.computed_0.days;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'hours', {
    get: function () {
      return this.computed_0.hours;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'minutes', {
    get: function () {
      return this.computed_0.minutes;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'seconds', {
    get: function () {
      return this.computed_0.seconds;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'milliseconds', {
    get: function () {
      return this.computed_0.milliseconds;
    }
  });
  Object.defineProperty(DateTimeSpan.prototype, 'secondsIncludingMilliseconds', {
    get: function () {
      return this.computed_0.seconds + this.computed_0.milliseconds / 1000;
    }
  });
  DateTimeSpan.prototype.compareTo_11rb$ = function (other) {
    if (this.totalMonths !== other.totalMonths)
      return this.monthSpan.compareTo_11rb$(other.monthSpan);
    return this.timeSpan.compareTo_11rb$(other.timeSpan);
  };
  DateTimeSpan.prototype.toString_6taknv$ = function (includeWeeks) {
    var $receiver = ArrayList_init_0();
    var tmp$, tmp$_0, tmp$_1;
    if (this.years !== 0)
      $receiver.add_11rb$(this.years.toString() + 'Y');
    if (this.months !== 0)
      $receiver.add_11rb$(this.months.toString() + 'M');
    if (includeWeeks && this.weeks !== 0)
      $receiver.add_11rb$(this.weeks.toString() + 'W');
    if (this.days !== 0 || (!includeWeeks && this.weeks !== 0))
      $receiver.add_11rb$((includeWeeks ? this.days : this.daysIncludingWeeks).toString() + 'D');
    if (this.hours !== 0)
      $receiver.add_11rb$(this.hours.toString() + 'H');
    if (this.minutes !== 0)
      $receiver.add_11rb$(this.minutes.toString() + 'm');
    if (this.seconds !== 0 || this.milliseconds !== 0.0)
      $receiver.add_11rb$(this.secondsIncludingMilliseconds.toString() + 's');
    var tmp$_2 = (tmp$ = this.monthSpan) != null ? tmp$.equals(new MonthSpan(12 * 0 | 0)) : null;
    if (tmp$_2) {
      var tmp$_3 = (tmp$_0 = this.timeSpan) != null ? tmp$_0.equals(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0))) : null;
      if (!tmp$_3) {
        tmp$_3 = (tmp$_1 = this.timeSpan) != null ? tmp$_1.equals(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0))) : null;
      }
      tmp$_2 = tmp$_3;
    }
    if (tmp$_2)
      $receiver.add_11rb$('0s');
    return joinToString($receiver, ' ');
  };
  DateTimeSpan.prototype.toString = function () {
    return this.toString_6taknv$(true);
  };
  function DateTimeSpan$ComputedTime(weeks, days, hours, minutes, seconds, milliseconds) {
    DateTimeSpan$ComputedTime$Companion_getInstance();
    this.weeks = weeks;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
  }
  function DateTimeSpan$ComputedTime$Companion() {
    DateTimeSpan$ComputedTime$Companion_instance = this;
  }
  DateTimeSpan$ComputedTime$Companion.prototype.invoke_fv8bff$ = function (time) {
    var $receiver = new Moduler(time.milliseconds);
    var weeks = numberToInt($receiver.double_14dthe$(numberToDouble(604800000)));
    var days = numberToInt($receiver.double_14dthe$(numberToDouble(86400000)));
    var hours = numberToInt($receiver.double_14dthe$(numberToDouble(3600000)));
    var minutes = numberToInt($receiver.double_14dthe$(numberToDouble(60000)));
    var seconds = numberToInt($receiver.double_14dthe$(numberToDouble(1000)));
    var milliseconds = $receiver.double_14dthe$(numberToDouble(1));
    return new DateTimeSpan$ComputedTime(weeks, days, hours, minutes, seconds, milliseconds);
  };
  DateTimeSpan$ComputedTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeSpan$ComputedTime$Companion_instance = null;
  function DateTimeSpan$ComputedTime$Companion_getInstance() {
    if (DateTimeSpan$ComputedTime$Companion_instance === null) {
      new DateTimeSpan$ComputedTime$Companion();
    }
    return DateTimeSpan$ComputedTime$Companion_instance;
  }
  DateTimeSpan$ComputedTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComputedTime',
    interfaces: []
  };
  Object.defineProperty(DateTimeSpan.prototype, 'computed_0', {
    get: function () {
      return this.computed_a87s7m$_0.value;
    }
  });
  function DateTimeSpan$computed$lambda(this$DateTimeSpan) {
    return function () {
      return DateTimeSpan$ComputedTime$Companion_getInstance().invoke_fv8bff$(this$DateTimeSpan.timeSpan);
    };
  }
  DateTimeSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeSpan',
    interfaces: [Comparable]
  };
  function DateTimeSpan_init(years, months, weeks, days, hours, minutes, seconds, milliseconds, $this) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (weeks === void 0)
      weeks = 0;
    if (days === void 0)
      days = 0;
    if (hours === void 0)
      hours = 0;
    if (minutes === void 0)
      minutes = 0;
    if (seconds === void 0)
      seconds = 0;
    if (milliseconds === void 0)
      milliseconds = 0.0;
    $this = $this || Object.create(DateTimeSpan.prototype);
    DateTimeSpan.call($this, (new MonthSpan(12 * years | 0)).plus_glepj8$(new MonthSpan(months)), TimeSpan.Companion.fromWeeks_14dthe$(numberToDouble(weeks)).plus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble(days))).plus_fv8bff$(TimeSpan.Companion.fromHours_14dthe$(numberToDouble(hours))).plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(minutes))).plus_fv8bff$(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(seconds))).plus_fv8bff$(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(milliseconds))));
    return $this;
  }
  DateTimeSpan.prototype.component1 = function () {
    return this.monthSpan;
  };
  DateTimeSpan.prototype.component2 = function () {
    return this.timeSpan;
  };
  DateTimeSpan.prototype.copy_e89ho5$ = function (monthSpan, timeSpan) {
    return new DateTimeSpan(monthSpan === void 0 ? this.monthSpan : monthSpan, timeSpan === void 0 ? this.timeSpan : timeSpan);
  };
  DateTimeSpan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.monthSpan) | 0;
    result = result * 31 + Kotlin.hashCode(this.timeSpan) | 0;
    return result;
  };
  DateTimeSpan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.monthSpan, other.monthSpan) && Kotlin.equals(this.timeSpan, other.timeSpan)))));
  };
  function DateTimeSpanFormat() {
  }
  DateTimeSpanFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DateTimeSpanFormat',
    interfaces: []
  };
  function format_3($receiver, dd) {
    return $receiver.format_5gml0z$(dd.plus_glepj8$(new MonthSpan(0)));
  }
  function format_4($receiver, dd) {
    return $receiver.format_5gml0z$(dd.plus_fv8bff$(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0))));
  }
  function parse_0($receiver, str) {
    var tmp$;
    tmp$ = $receiver.tryParse_ivxn3r$(str, true);
    if (tmp$ == null) {
      throw new DateException("Not a valid format: '" + str + "' for '" + $receiver + "'");
    }
    return tmp$;
  }
  function DateTimeTz(adjusted, offset) {
    DateTimeTz$Companion_getInstance();
    this.adjusted_0 = adjusted;
    this.offset = offset;
  }
  function DateTimeTz$Companion() {
    DateTimeTz$Companion_instance = this;
  }
  DateTimeTz$Companion.prototype.local_rq74cp$ = function (local, offset) {
    return new DateTimeTz(local, offset);
  };
  DateTimeTz$Companion.prototype.utc_rq74cp$ = function (utc, offset) {
    return new DateTimeTz(utc.plus_fv8bff$(offset.time), offset);
  };
  DateTimeTz$Companion.prototype.fromUnixLocal_s8cxhz$ = function (unix) {
    return this.fromUnixLocal_14dthe$(unix.toNumber());
  };
  DateTimeTz$Companion.prototype.fromUnixLocal_14dthe$ = function (unix) {
    return (new DateTime(unix)).localUnadjusted;
  };
  DateTimeTz$Companion.prototype.nowLocal = function () {
    return DateTime$Companion_getInstance().now().local;
  };
  DateTimeTz$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeTz$Companion_instance = null;
  function DateTimeTz$Companion_getInstance() {
    if (DateTimeTz$Companion_instance === null) {
      new DateTimeTz$Companion();
    }
    return DateTimeTz$Companion_instance;
  }
  Object.defineProperty(DateTimeTz.prototype, 'local', {
    get: function () {
      return this.adjusted_0;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'utc', {
    get: function () {
      return this.adjusted_0.minus_fv8bff$(this.offset.time);
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'year', {
    get: function () {
      return this.adjusted_0.year;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'yearInt', {
    get: function () {
      return this.adjusted_0.yearInt;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'month', {
    get: function () {
      return this.adjusted_0.month;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'month0', {
    get: function () {
      return this.adjusted_0.month0;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'month1', {
    get: function () {
      return this.adjusted_0.month1;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'yearMonth', {
    get: function () {
      return this.adjusted_0.yearMonth;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'dayOfMonth', {
    get: function () {
      return this.adjusted_0.dayOfMonth;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'dayOfWeek', {
    get: function () {
      return this.adjusted_0.dayOfWeek;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'dayOfWeekInt', {
    get: function () {
      return this.adjusted_0.dayOfWeekInt;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'dayOfYear', {
    get: function () {
      return this.adjusted_0.dayOfYear;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'hours', {
    get: function () {
      return this.adjusted_0.hours;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'minutes', {
    get: function () {
      return this.adjusted_0.minutes;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'seconds', {
    get: function () {
      return this.adjusted_0.seconds;
    }
  });
  Object.defineProperty(DateTimeTz.prototype, 'milliseconds', {
    get: function () {
      return this.adjusted_0.milliseconds;
    }
  });
  DateTimeTz.prototype.toOffsetUnadjusted_fv8bff$ = function (offset) {
    return this.toOffsetUnadjusted_q6c6ai$(get_offset(offset));
  };
  DateTimeTz.prototype.toOffsetUnadjusted_q6c6ai$ = function (offset) {
    return DateTimeTz$Companion_getInstance().local_rq74cp$(this.local, offset);
  };
  DateTimeTz.prototype.addOffsetUnadjusted_fv8bff$ = function (offset) {
    return this.addOffsetUnadjusted_q6c6ai$(get_offset(offset));
  };
  DateTimeTz.prototype.addOffsetUnadjusted_q6c6ai$ = function (offset) {
    return DateTimeTz$Companion_getInstance().local_rq74cp$(this.local, get_offset(this.offset.time.plus_fv8bff$(offset.time)));
  };
  DateTimeTz.prototype.toOffset_fv8bff$ = function (offset) {
    return this.toOffset_q6c6ai$(get_offset(offset));
  };
  DateTimeTz.prototype.toOffset_q6c6ai$ = function (offset) {
    return DateTimeTz$Companion_getInstance().utc_rq74cp$(this.utc, offset);
  };
  DateTimeTz.prototype.addOffset_fv8bff$ = function (offset) {
    return this.addOffset_q6c6ai$(get_offset(offset));
  };
  DateTimeTz.prototype.addOffset_q6c6ai$ = function (offset) {
    return DateTimeTz$Companion_getInstance().utc_rq74cp$(this.utc, get_offset(this.offset.time.plus_fv8bff$(offset.time)));
  };
  DateTimeTz.prototype.add_e89ho5$ = function (dateSpan, timeSpan) {
    return new DateTimeTz(this.adjusted_0.add_e89ho5$(dateSpan, timeSpan), this.offset);
  };
  DateTimeTz.prototype.plus_glepj8$ = function (delta) {
    return this.add_e89ho5$(delta, TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(0)));
  };
  DateTimeTz.prototype.plus_5gml0z$ = function (delta) {
    return this.add_e89ho5$(delta.monthSpan, delta.timeSpan);
  };
  DateTimeTz.prototype.plus_fv8bff$ = function (delta) {
    return this.add_e89ho5$(new MonthSpan(0), delta);
  };
  DateTimeTz.prototype.minus_glepj8$ = function (delta) {
    return this.plus_glepj8$(delta.unaryMinus());
  };
  DateTimeTz.prototype.minus_5gml0z$ = function (delta) {
    return this.plus_5gml0z$(delta.unaryMinus());
  };
  DateTimeTz.prototype.minus_fv8bff$ = function (delta) {
    return this.plus_fv8bff$(delta.unaryMinus());
  };
  DateTimeTz.prototype.minus_j01w8f$ = function (other) {
    var $receiver = this.utc.unixMillisDouble - other.utc.unixMillisDouble;
    return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
  };
  DateTimeTz.prototype.hashCode = function () {
    return this.local.hashCode() + this.offset.totalMinutesInt | 0;
  };
  DateTimeTz.prototype.equals = function (other) {
    return Kotlin.isType(other, DateTimeTz) && this.utc.unixMillisDouble === other.utc.unixMillisDouble;
  };
  DateTimeTz.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.compareTo(this.utc.unixMillis, other.utc.unixMillis);
  };
  DateTimeTz.prototype.format_cgtbg3$ = function (format) {
    return format.format_j01w8f$(this);
  };
  DateTimeTz.prototype.format_61zpoe$ = function (format) {
    return DateFormat$Companion_getInstance().invoke_61zpoe$(format).format_j01w8f$(this);
  };
  DateTimeTz.prototype.toString_cgtbg3$ = function (format) {
    return format.format_j01w8f$(this);
  };
  DateTimeTz.prototype.toString_61zpoe$ = function (format) {
    return DateFormat$Companion_getInstance().invoke_61zpoe$(format).format_j01w8f$(this);
  };
  DateTimeTz.prototype.toString = function () {
    return DateFormat$Companion_getInstance().DEFAULT_FORMAT.format_j01w8f$(this);
  };
  DateTimeTz.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeTz',
    interfaces: [Comparable]
  };
  function DayOfWeek(name, ordinal, index0) {
    Enum.call(this);
    this.index0 = index0;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DayOfWeek_initFields() {
    DayOfWeek_initFields = function () {
    };
    DayOfWeek$Sunday_instance = new DayOfWeek('Sunday', 0, 0);
    DayOfWeek$Monday_instance = new DayOfWeek('Monday', 1, 1);
    DayOfWeek$Tuesday_instance = new DayOfWeek('Tuesday', 2, 2);
    DayOfWeek$Wednesday_instance = new DayOfWeek('Wednesday', 3, 3);
    DayOfWeek$Thursday_instance = new DayOfWeek('Thursday', 4, 4);
    DayOfWeek$Friday_instance = new DayOfWeek('Friday', 5, 5);
    DayOfWeek$Saturday_instance = new DayOfWeek('Saturday', 6, 6);
    DayOfWeek$Companion_getInstance();
  }
  var DayOfWeek$Sunday_instance;
  function DayOfWeek$Sunday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Sunday_instance;
  }
  var DayOfWeek$Monday_instance;
  function DayOfWeek$Monday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Monday_instance;
  }
  var DayOfWeek$Tuesday_instance;
  function DayOfWeek$Tuesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Tuesday_instance;
  }
  var DayOfWeek$Wednesday_instance;
  function DayOfWeek$Wednesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Wednesday_instance;
  }
  var DayOfWeek$Thursday_instance;
  function DayOfWeek$Thursday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Thursday_instance;
  }
  var DayOfWeek$Friday_instance;
  function DayOfWeek$Friday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Friday_instance;
  }
  var DayOfWeek$Saturday_instance;
  function DayOfWeek$Saturday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Saturday_instance;
  }
  Object.defineProperty(DayOfWeek.prototype, 'index1', {
    get: function () {
      return this.index0 + 1 | 0;
    }
  });
  Object.defineProperty(DayOfWeek.prototype, 'index0Sunday', {
    get: function () {
      return this.index0;
    }
  });
  Object.defineProperty(DayOfWeek.prototype, 'index1Sunday', {
    get: function () {
      return this.index1;
    }
  });
  Object.defineProperty(DayOfWeek.prototype, 'index0Monday', {
    get: function () {
      return umod(this.index0 - 1 | 0, 7);
    }
  });
  Object.defineProperty(DayOfWeek.prototype, 'index1Monday', {
    get: function () {
      return this.index0Monday + 1 | 0;
    }
  });
  DayOfWeek.prototype.isWeekend_kdekv2$ = function (locale) {
    if (locale === void 0)
      locale = KlockLocale$Companion_getInstance().default;
    return locale.isWeekend_76hapz$(this);
  };
  Object.defineProperty(DayOfWeek.prototype, 'localName', {
    get: function () {
      return this.localName_kdekv2$(KlockLocale$Companion_getInstance().default);
    }
  });
  DayOfWeek.prototype.localName_kdekv2$ = function (locale) {
    return locale.daysOfWeek.get_za3lpa$(this.index0);
  };
  Object.defineProperty(DayOfWeek.prototype, 'localShortName', {
    get: function () {
      return this.localShortName_kdekv2$(KlockLocale$Companion_getInstance().default);
    }
  });
  DayOfWeek.prototype.localShortName_kdekv2$ = function (locale) {
    return locale.daysOfWeekShort.get_za3lpa$(this.index0);
  };
  function DayOfWeek$Companion() {
    DayOfWeek$Companion_instance = this;
    this.Count = 7;
    this.BY_INDEX0_0 = DayOfWeek$values();
  }
  DayOfWeek$Companion.prototype.get_za3lpa$ = function (index0) {
    return this.BY_INDEX0_0[umod(index0, 7)];
  };
  DayOfWeek$Companion.prototype.firstDayOfWeek_kdekv2$ = function (locale) {
    if (locale === void 0)
      locale = KlockLocale$Companion_getInstance().default;
    return locale.firstDayOfWeek;
  };
  DayOfWeek$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DayOfWeek$Companion_instance = null;
  function DayOfWeek$Companion_getInstance() {
    DayOfWeek_initFields();
    if (DayOfWeek$Companion_instance === null) {
      new DayOfWeek$Companion();
    }
    return DayOfWeek$Companion_instance;
  }
  DayOfWeek.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayOfWeek',
    interfaces: [Enum]
  };
  function DayOfWeek$values() {
    return [DayOfWeek$Sunday_getInstance(), DayOfWeek$Monday_getInstance(), DayOfWeek$Tuesday_getInstance(), DayOfWeek$Wednesday_getInstance(), DayOfWeek$Thursday_getInstance(), DayOfWeek$Friday_getInstance(), DayOfWeek$Saturday_getInstance()];
  }
  DayOfWeek.values = DayOfWeek$values;
  function DayOfWeek$valueOf(name) {
    switch (name) {
      case 'Sunday':
        return DayOfWeek$Sunday_getInstance();
      case 'Monday':
        return DayOfWeek$Monday_getInstance();
      case 'Tuesday':
        return DayOfWeek$Tuesday_getInstance();
      case 'Wednesday':
        return DayOfWeek$Wednesday_getInstance();
      case 'Thursday':
        return DayOfWeek$Thursday_getInstance();
      case 'Friday':
        return DayOfWeek$Friday_getInstance();
      case 'Saturday':
        return DayOfWeek$Saturday_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.DayOfWeek.' + name);
    }
  }
  DayOfWeek.valueOf_61zpoe$ = DayOfWeek$valueOf;
  function ISO8601() {
    ISO8601_instance = this;
    this.DATE_CALENDAR_COMPLETE = new ISO8601$IsoDateTimeFormat('YYYYMMDD', 'YYYY-MM-DD');
    this.DATE_CALENDAR_REDUCED0 = new ISO8601$IsoDateTimeFormat(null, 'YYYY-MM');
    this.DATE_CALENDAR_REDUCED1 = new ISO8601$IsoDateTimeFormat('YYYY', null);
    this.DATE_CALENDAR_REDUCED2 = new ISO8601$IsoDateTimeFormat('YY', null);
    this.DATE_CALENDAR_EXPANDED0 = new ISO8601$IsoDateTimeFormat('\xB1YYYYYYMMDD', '\xB1YYYYYY-MM-DD');
    this.DATE_CALENDAR_EXPANDED1 = new ISO8601$IsoDateTimeFormat('\xB1YYYYYYMM', '\xB1YYYYYY-MM');
    this.DATE_CALENDAR_EXPANDED2 = new ISO8601$IsoDateTimeFormat('\xB1YYYYYY', null);
    this.DATE_CALENDAR_EXPANDED3 = new ISO8601$IsoDateTimeFormat('\xB1YYY', null);
    this.DATE_ORDINAL_COMPLETE = new ISO8601$IsoDateTimeFormat('YYYYDDD', 'YYYY-DDD');
    this.DATE_ORDINAL_EXPANDED = new ISO8601$IsoDateTimeFormat('\xB1YYYYYYDDD', '\xB1YYYYYY-DDD');
    this.DATE_WEEK_COMPLETE = new ISO8601$IsoDateTimeFormat('YYYYWwwD', 'YYYY-Www-D');
    this.DATE_WEEK_REDUCED = new ISO8601$IsoDateTimeFormat('YYYYWww', 'YYYY-Www');
    this.DATE_WEEK_EXPANDED0 = new ISO8601$IsoDateTimeFormat('\xB1YYYYYYWwwD', '\xB1YYYYYY-Www-D');
    this.DATE_WEEK_EXPANDED1 = new ISO8601$IsoDateTimeFormat('\xB1YYYYYYWww', '\xB1YYYYYY-Www');
    this.DATE_ALL = listOf([this.DATE_CALENDAR_COMPLETE, this.DATE_CALENDAR_REDUCED0, this.DATE_CALENDAR_REDUCED1, this.DATE_CALENDAR_REDUCED2, this.DATE_CALENDAR_EXPANDED0, this.DATE_CALENDAR_EXPANDED1, this.DATE_CALENDAR_EXPANDED2, this.DATE_CALENDAR_EXPANDED3, this.DATE_ORDINAL_COMPLETE, this.DATE_ORDINAL_EXPANDED, this.DATE_WEEK_COMPLETE, this.DATE_WEEK_REDUCED, this.DATE_WEEK_EXPANDED0, this.DATE_WEEK_EXPANDED1]);
    this.TIME_LOCAL_COMPLETE = new ISO8601$IsoTimeFormat('hhmmss', 'hh:mm:ss');
    this.TIME_LOCAL_REDUCED0 = new ISO8601$IsoTimeFormat('hhmm', 'hh:mm');
    this.TIME_LOCAL_REDUCED1 = new ISO8601$IsoTimeFormat('hh', null);
    this.TIME_LOCAL_FRACTION0 = new ISO8601$IsoTimeFormat('hhmmss,ss', 'hh:mm:ss,ss');
    this.TIME_LOCAL_FRACTION1 = new ISO8601$IsoTimeFormat('hhmm,mm', 'hh:mm,mm');
    this.TIME_LOCAL_FRACTION2 = new ISO8601$IsoTimeFormat('hh,hh', null);
    this.TIME_UTC_COMPLETE = new ISO8601$IsoTimeFormat('hhmmssZ', 'hh:mm:ssZ');
    this.TIME_UTC_REDUCED0 = new ISO8601$IsoTimeFormat('hhmmZ', 'hh:mmZ');
    this.TIME_UTC_REDUCED1 = new ISO8601$IsoTimeFormat('hhZ', null);
    this.TIME_UTC_FRACTION0 = new ISO8601$IsoTimeFormat('hhmmss,ssZ', 'hh:mm:ss,ssZ');
    this.TIME_UTC_FRACTION1 = new ISO8601$IsoTimeFormat('hhmm,mmZ', 'hh:mm,mmZ');
    this.TIME_UTC_FRACTION2 = new ISO8601$IsoTimeFormat('hh,hhZ', null);
    this.TIME_RELATIVE0 = new ISO8601$IsoTimeFormat('\xB1hhmm', '\xB1hh:mm');
    this.TIME_RELATIVE1 = new ISO8601$IsoTimeFormat('\xB1hh', null);
    this.TIME_ALL = listOf([this.TIME_LOCAL_COMPLETE, this.TIME_LOCAL_REDUCED0, this.TIME_LOCAL_REDUCED1, this.TIME_LOCAL_FRACTION0, this.TIME_LOCAL_FRACTION1, this.TIME_LOCAL_FRACTION2, this.TIME_UTC_COMPLETE, this.TIME_UTC_REDUCED0, this.TIME_UTC_REDUCED1, this.TIME_UTC_FRACTION0, this.TIME_UTC_FRACTION1, this.TIME_UTC_FRACTION2, this.TIME_RELATIVE0, this.TIME_RELATIVE1]);
    this.DATETIME_COMPLETE = new ISO8601$IsoDateTimeFormat('YYYYMMDDThhmmss', 'YYYY-MM-DDThh:mm:ss');
    this.INTERVAL_COMPLETE0 = new ISO8601$IsoIntervalFormat('PnnYnnMnnDTnnHnnMnnS');
    this.INTERVAL_COMPLETE1 = new ISO8601$IsoIntervalFormat('PnnYnnW');
    this.INTERVAL_REDUCED0 = new ISO8601$IsoIntervalFormat('PnnYnnMnnDTnnHnnM');
    this.INTERVAL_REDUCED1 = new ISO8601$IsoIntervalFormat('PnnYnnMnnDTnnH');
    this.INTERVAL_REDUCED2 = new ISO8601$IsoIntervalFormat('PnnYnnMnnD');
    this.INTERVAL_REDUCED3 = new ISO8601$IsoIntervalFormat('PnnYnnM');
    this.INTERVAL_REDUCED4 = new ISO8601$IsoIntervalFormat('PnnY');
    this.INTERVAL_DECIMAL0 = new ISO8601$IsoIntervalFormat('PnnYnnMnnDTnnHnnMnn,nnS');
    this.INTERVAL_DECIMAL1 = new ISO8601$IsoIntervalFormat('PnnYnnMnnDTnnHnn,nnM');
    this.INTERVAL_DECIMAL2 = new ISO8601$IsoIntervalFormat('PnnYnnMnnDTnn,nnH');
    this.INTERVAL_DECIMAL3 = new ISO8601$IsoIntervalFormat('PnnYnnMnn,nnD');
    this.INTERVAL_DECIMAL4 = new ISO8601$IsoIntervalFormat('PnnYnn,nnM');
    this.INTERVAL_DECIMAL5 = new ISO8601$IsoIntervalFormat('PnnYnn,nnW');
    this.INTERVAL_DECIMAL6 = new ISO8601$IsoIntervalFormat('PnnY');
    this.INTERVAL_ZERO_OMIT0 = new ISO8601$IsoIntervalFormat('PnnYnnDTnnHnnMnnS');
    this.INTERVAL_ZERO_OMIT1 = new ISO8601$IsoIntervalFormat('PnnYnnDTnnHnnM');
    this.INTERVAL_ZERO_OMIT2 = new ISO8601$IsoIntervalFormat('PnnYnnDTnnH');
    this.INTERVAL_ZERO_OMIT3 = new ISO8601$IsoIntervalFormat('PnnYnnD');
    this.INTERVAL_ALL = listOf([this.INTERVAL_COMPLETE0, this.INTERVAL_COMPLETE1, this.INTERVAL_REDUCED0, this.INTERVAL_REDUCED1, this.INTERVAL_REDUCED2, this.INTERVAL_REDUCED3, this.INTERVAL_REDUCED4, this.INTERVAL_DECIMAL0, this.INTERVAL_DECIMAL1, this.INTERVAL_DECIMAL2, this.INTERVAL_DECIMAL3, this.INTERVAL_DECIMAL4, this.INTERVAL_DECIMAL5, this.INTERVAL_DECIMAL6, this.INTERVAL_ZERO_OMIT0, this.INTERVAL_ZERO_OMIT1, this.INTERVAL_ZERO_OMIT2, this.INTERVAL_ZERO_OMIT3]);
    this.DATE = new ISO8601$DATE$ObjectLiteral();
    this.TIME = new ISO8601$TIME$ObjectLiteral();
    this.INTERVAL = new ISO8601$INTERVAL$ObjectLiteral();
  }
  function ISO8601$BaseIsoTimeFormat(format) {
    ISO8601$BaseIsoTimeFormat$Companion_getInstance();
    this.format = format;
    this.dateTimeFormat_0 = new ISO8601$BaseIsoDateTimeFormat(this.format);
  }
  function ISO8601$BaseIsoTimeFormat$Companion() {
    ISO8601$BaseIsoTimeFormat$Companion_instance = this;
    this.ref_0 = DateTime$Companion_getInstance().invoke_ui44o2$(1900, 1, 1);
  }
  ISO8601$BaseIsoTimeFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ISO8601$BaseIsoTimeFormat$Companion_instance = null;
  function ISO8601$BaseIsoTimeFormat$Companion_getInstance() {
    if (ISO8601$BaseIsoTimeFormat$Companion_instance === null) {
      new ISO8601$BaseIsoTimeFormat$Companion();
    }
    return ISO8601$BaseIsoTimeFormat$Companion_instance;
  }
  ISO8601$BaseIsoTimeFormat.prototype.format_fv8bff$ = function (dd) {
    return format_1(this.dateTimeFormat_0, ISO8601$BaseIsoTimeFormat$Companion_getInstance().ref_0.plus_fv8bff$(dd));
  };
  ISO8601$BaseIsoTimeFormat.prototype.tryParse_ivxn3r$ = function (str, doThrow) {
    var tmp$;
    return (tmp$ = this.dateTimeFormat_0.tryParse_ivxn3r$(str, doThrow)) != null ? tmp$.utc.minus_mw5vjr$(ISO8601$BaseIsoTimeFormat$Companion_getInstance().ref_0) : null;
  };
  ISO8601$BaseIsoTimeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseIsoTimeFormat',
    interfaces: [TimeFormat]
  };
  ISO8601$BaseIsoTimeFormat.prototype.component1 = function () {
    return this.format;
  };
  ISO8601$BaseIsoTimeFormat.prototype.copy_61zpoe$ = function (format) {
    return new ISO8601$BaseIsoTimeFormat(format === void 0 ? this.format : format);
  };
  ISO8601$BaseIsoTimeFormat.prototype.toString = function () {
    return 'BaseIsoTimeFormat(format=' + Kotlin.toString(this.format) + ')';
  };
  ISO8601$BaseIsoTimeFormat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    return result;
  };
  ISO8601$BaseIsoTimeFormat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.format, other.format))));
  };
  function ISO8601$BaseIsoDateTimeFormat(format, twoDigitBaseYear) {
    if (twoDigitBaseYear === void 0)
      twoDigitBaseYear = 1900;
    this.format = format;
    this.twoDigitBaseYear = twoDigitBaseYear;
  }
  ISO8601$BaseIsoDateTimeFormat.prototype.format_j01w8f$ = function (dd) {
    var $receiver = StringBuilder_init();
    var isUtc = endsWith(this.format, 90);
    var d = isUtc ? dd.utc : dd.local;
    var s = d.copyDayOfMonth_4lrum3$(void 0, void 0, void 0, 0, 0, 0, 0);
    var time = d.minus_mw5vjr$(s);
    var fmtReader = new MicroStrReader(this.format);
    while (fmtReader.hasMore) {
      if (fmtReader.tryRead_61zpoe$('YYYYYY')) {
        $receiver.append_gw00v9$(padded(abs(d.yearInt), 6));
      }
       else if (fmtReader.tryRead_61zpoe$('YYYY')) {
        $receiver.append_gw00v9$(padded(abs(d.yearInt), 4));
      }
       else if (fmtReader.tryRead_61zpoe$('YY')) {
        $receiver.append_gw00v9$(padded(abs(d.yearInt) % 100, 2));
      }
       else if (fmtReader.tryRead_61zpoe$('MM'))
        $receiver.append_gw00v9$(padded(d.month1, 2));
      else if (fmtReader.tryRead_61zpoe$('DD'))
        $receiver.append_gw00v9$(padded(d.dayOfMonth, 2));
      else if (fmtReader.tryRead_61zpoe$('DDD'))
        $receiver.append_gw00v9$(padded(d.dayOfWeekInt, 3));
      else if (fmtReader.tryRead_61zpoe$('ww'))
        $receiver.append_gw00v9$(padded(get_weekOfYear1(d), 2));
      else if (fmtReader.tryRead_61zpoe$('D'))
        $receiver.append_s8jyv4$(d.dayOfWeek.index1Monday);
      else if (fmtReader.tryRead_61zpoe$('hh,hh'))
        $receiver.append_gw00v9$(replace(padded_0(time.hours, 2, 2), 46, 44));
      else if (fmtReader.tryRead_61zpoe$('hh'))
        $receiver.append_gw00v9$(padded(d.hours, 2));
      else if (fmtReader.tryRead_61zpoe$('mm,mm'))
        $receiver.append_gw00v9$(replace(padded_0(time.minutes % 60.0, 2, 2), 46, 44));
      else if (fmtReader.tryRead_61zpoe$('mm'))
        $receiver.append_gw00v9$(padded(d.minutes, 2));
      else if (fmtReader.tryRead_61zpoe$('ss,ss'))
        $receiver.append_gw00v9$(replace(padded_0(time.seconds, 2, 2), 46, 44));
      else if (fmtReader.tryRead_61zpoe$('ss'))
        $receiver.append_gw00v9$(padded(d.seconds, 2));
      else if (fmtReader.tryRead_61zpoe$('\xB1'))
        $receiver.append_gw00v9$(d.yearInt < 0 ? '-' : '+');
      else
        $receiver.append_s8itvh$(unboxChar(fmtReader.readChar()));
    }
    return $receiver.toString();
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.tryParse_ivxn3r$$default = function (str, doThrow) {
    var $receiver = this.tryParse_0(str);
    if (doThrow && $receiver == null)
      throw new DateException("Can't parse " + str + ' with ' + this.format);
    return $receiver;
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.reportParse_0 = function (reason) {
    return null;
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.tryParse_0 = function (str) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var isUtc = false;
    var sign = 1;
    var year = this.twoDigitBaseYear;
    var month = 1;
    var dayOfMonth = 1;
    var dayOfWeek = -1;
    var dayOfYear = -1;
    var weekOfYear = -1;
    var hours = 0.0;
    var minutes = 0.0;
    var seconds = 0.0;
    var reader = new MicroStrReader(str);
    var fmtReader = new MicroStrReader(this.format);
    while (fmtReader.hasMore) {
      if (fmtReader.tryRead_61zpoe$('Z'))
        isUtc = true;
      else if (fmtReader.tryRead_61zpoe$('YYYYYY')) {
        tmp$ = reader.tryReadInt_za3lpa$(6);
        if (tmp$ == null) {
          return this.reportParse_0('YYYYYY');
        }
        year = tmp$;
      }
       else if (fmtReader.tryRead_61zpoe$('YYYY')) {
        tmp$_0 = reader.tryReadInt_za3lpa$(4);
        if (tmp$_0 == null) {
          return this.reportParse_0('YYYY');
        }
        year = tmp$_0;
      }
       else if (fmtReader.tryRead_61zpoe$('YY')) {
        tmp$_1 = reader.tryReadInt_za3lpa$(2);
        if (tmp$_1 == null) {
          return this.reportParse_0('YY');
        }
        var base = tmp$_1;
        year = this.twoDigitBaseYear + base | 0;
      }
       else if (fmtReader.tryRead_61zpoe$('MM')) {
        tmp$_2 = reader.tryReadInt_za3lpa$(2);
        if (tmp$_2 == null) {
          return this.reportParse_0('MM');
        }
        month = tmp$_2;
      }
       else if (fmtReader.tryRead_61zpoe$('DD')) {
        tmp$_3 = reader.tryReadInt_za3lpa$(2);
        if (tmp$_3 == null) {
          return this.reportParse_0('DD');
        }
        dayOfMonth = tmp$_3;
      }
       else if (fmtReader.tryRead_61zpoe$('DDD')) {
        tmp$_4 = reader.tryReadInt_za3lpa$(3);
        if (tmp$_4 == null) {
          return this.reportParse_0('DDD');
        }
        dayOfYear = tmp$_4;
      }
       else if (fmtReader.tryRead_61zpoe$('ww')) {
        tmp$_5 = reader.tryReadInt_za3lpa$(2);
        if (tmp$_5 == null) {
          return this.reportParse_0('ww');
        }
        weekOfYear = tmp$_5;
      }
       else if (fmtReader.tryRead_61zpoe$('D')) {
        tmp$_6 = reader.tryReadInt_za3lpa$(1);
        if (tmp$_6 == null) {
          return this.reportParse_0('D');
        }
        dayOfWeek = tmp$_6;
      }
       else if (fmtReader.tryRead_61zpoe$('hh,hh')) {
        tmp$_7 = reader.tryReadDouble_za3lpa$(5);
        if (tmp$_7 == null) {
          return this.reportParse_0('hh,hh');
        }
        hours = tmp$_7;
      }
       else if (fmtReader.tryRead_61zpoe$('hh')) {
        tmp$_8 = reader.tryReadDouble_za3lpa$(2);
        if (tmp$_8 == null) {
          return this.reportParse_0('hh');
        }
        hours = tmp$_8;
      }
       else if (fmtReader.tryRead_61zpoe$('mm,mm')) {
        tmp$_9 = reader.tryReadDouble_za3lpa$(5);
        if (tmp$_9 == null) {
          return this.reportParse_0('mm,mm');
        }
        minutes = tmp$_9;
      }
       else if (fmtReader.tryRead_61zpoe$('mm')) {
        tmp$_10 = reader.tryReadDouble_za3lpa$(2);
        if (tmp$_10 == null) {
          return this.reportParse_0('mm');
        }
        minutes = tmp$_10;
      }
       else if (fmtReader.tryRead_61zpoe$('ss,ss')) {
        tmp$_11 = reader.tryReadDouble_za3lpa$(5);
        if (tmp$_11 == null) {
          return this.reportParse_0('ss,ss');
        }
        seconds = tmp$_11;
      }
       else if (fmtReader.tryRead_61zpoe$('ss')) {
        tmp$_12 = reader.tryReadDouble_za3lpa$(2);
        if (tmp$_12 == null) {
          return this.reportParse_0('ss');
        }
        seconds = tmp$_12;
      }
       else if (fmtReader.tryRead_61zpoe$('\xB1')) {
        switch (unboxChar(reader.readChar())) {
          case 43:
            tmp$_13 = 1;
            break;
          case 45:
            tmp$_13 = -1;
            break;
          default:return this.reportParse_0('\xB1');
        }
        sign = tmp$_13;
      }
       else if (unboxChar(fmtReader.readChar()) !== unboxChar(reader.readChar()))
        return this.reportParse_0('separator');
    }
    if (reader.hasMore)
      return this.reportParse_0('uncomplete');
    if (dayOfYear >= 0) {
      var tmp$_15 = DateTime$Companion_getInstance().invoke_ui44o2$(year, 1, 1);
      var $receiver = dayOfYear - 1 | 0;
      tmp$_14 = tmp$_15.plus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble($receiver)));
    }
     else if (weekOfYear >= 0) {
      var reference = first_1(new Year(year), DayOfWeek$Thursday_getInstance()).minus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble(3)));
      var days = ((weekOfYear - 1 | 0) * 7 | 0) + (dayOfWeek - 1) | 0;
      tmp$_14 = reference.plus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble(days)));
    }
     else
      tmp$_14 = DateTime$Companion_getInstance().invoke_ui44o2$(year, month, dayOfMonth);
    var dateTime = tmp$_14;
    var $receiver_0 = hours;
    var tmp$_16 = dateTime.plus_fv8bff$(TimeSpan.Companion.fromHours_14dthe$(numberToDouble($receiver_0)));
    var $receiver_1 = minutes;
    var tmp$_17 = tmp$_16.plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble($receiver_1)));
    var $receiver_2 = seconds;
    return tmp$_17.plus_fv8bff$(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver_2))).local;
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.withTwoDigitBaseYear_za3lpa$ = function (twoDigitBaseYear) {
    if (twoDigitBaseYear === void 0)
      twoDigitBaseYear = 1900;
    return new ISO8601$BaseIsoDateTimeFormat(this.format, twoDigitBaseYear);
  };
  ISO8601$BaseIsoDateTimeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseIsoDateTimeFormat',
    interfaces: [DateFormat]
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.component1 = function () {
    return this.format;
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.component2 = function () {
    return this.twoDigitBaseYear;
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.copy_bm4lxs$ = function (format, twoDigitBaseYear) {
    return new ISO8601$BaseIsoDateTimeFormat(format === void 0 ? this.format : format, twoDigitBaseYear === void 0 ? this.twoDigitBaseYear : twoDigitBaseYear);
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.toString = function () {
    return 'BaseIsoDateTimeFormat(format=' + Kotlin.toString(this.format) + (', twoDigitBaseYear=' + Kotlin.toString(this.twoDigitBaseYear)) + ')';
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.twoDigitBaseYear) | 0;
    return result;
  };
  ISO8601$BaseIsoDateTimeFormat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.format, other.format) && Kotlin.equals(this.twoDigitBaseYear, other.twoDigitBaseYear)))));
  };
  function ISO8601$IsoIntervalFormat(format) {
    this.format = format;
  }
  ISO8601$IsoIntervalFormat.prototype.format_5gml0z$ = function (dd) {
    var $receiver = StringBuilder_init();
    var fmtReader = new MicroStrReader(this.format);
    var time = {v: false};
    while (fmtReader.hasMore) {
      if (fmtReader.tryRead_61zpoe$('T')) {
        $receiver.append_s8itvh$(84);
        time.v = true;
      }
       else if (fmtReader.tryRead_61zpoe$('nnY'))
        $receiver.append_s8jyv4$(dd.years).append_s8itvh$(89);
      else if (fmtReader.tryRead_61zpoe$('nnM'))
        $receiver.append_s8jyv4$(time.v ? dd.minutes : dd.months).append_s8itvh$(77);
      else if (fmtReader.tryRead_61zpoe$('nnD'))
        $receiver.append_s8jyv4$(dd.daysIncludingWeeks).append_s8itvh$(68);
      else if (fmtReader.tryRead_61zpoe$('nnH'))
        $receiver.append_s8jyv4$(dd.hours).append_s8itvh$(72);
      else if (fmtReader.tryRead_61zpoe$('nnS'))
        $receiver.append_s8jyv4$(dd.seconds).append_s8itvh$(83);
      else
        $receiver.append_s8itvh$(unboxChar(fmtReader.readChar()));
    }
    return $receiver.toString();
  };
  ISO8601$IsoIntervalFormat.prototype.tryParse_ivxn3r$ = function (str, doThrow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var time = false;
    var years = 0.0;
    var months = 0.0;
    var days = 0.0;
    var hours = 0.0;
    var minutes = 0.0;
    var seconds = 0.0;
    var reader = new MicroStrReader(str);
    var fmtReader = new MicroStrReader(this.format);
    while (fmtReader.hasMore) {
      if (fmtReader.tryRead_61zpoe$('nn,nnY') || fmtReader.tryRead_61zpoe$('nnY')) {
        tmp$ = reader.tryReadDouble();
        if (tmp$ == null) {
          return null;
        }
        years = tmp$;
        if (!reader.tryRead_61zpoe$('Y'))
          return null;
      }
       else if (fmtReader.tryRead_61zpoe$('nn,nnM') || fmtReader.tryRead_61zpoe$('nnM')) {
        if (time) {
          tmp$_0 = reader.tryReadDouble();
          if (tmp$_0 == null) {
            return null;
          }
          minutes = tmp$_0;
        }
         else {
          tmp$_1 = reader.tryReadDouble();
          if (tmp$_1 == null) {
            return null;
          }
          months = tmp$_1;
        }
        if (!reader.tryRead_61zpoe$('M'))
          return null;
      }
       else if (fmtReader.tryRead_61zpoe$('nn,nnD') || fmtReader.tryRead_61zpoe$('nnD')) {
        tmp$_2 = reader.tryReadDouble();
        if (tmp$_2 == null) {
          return null;
        }
        days = tmp$_2;
        if (!reader.tryRead_61zpoe$('D'))
          return null;
      }
       else if (fmtReader.tryRead_61zpoe$('nn,nnH') || fmtReader.tryRead_61zpoe$('nnH')) {
        tmp$_3 = reader.tryReadDouble();
        if (tmp$_3 == null) {
          return null;
        }
        hours = tmp$_3;
        if (!reader.tryRead_61zpoe$('H'))
          return null;
      }
       else if (fmtReader.tryRead_61zpoe$('nn,nnS') || fmtReader.tryRead_61zpoe$('nnS')) {
        tmp$_4 = reader.tryReadDouble();
        if (tmp$_4 == null) {
          return null;
        }
        seconds = tmp$_4;
        if (!reader.tryRead_61zpoe$('S'))
          return null;
      }
       else {
        var char = unboxChar(fmtReader.readChar());
        if (char !== unboxChar(reader.readChar()))
          return null;
        if (char === 84)
          time = true;
      }
    }
    var tmp$_5 = new MonthSpan(numberToInt(years * 12 + months));
    var $receiver = days;
    var tmp$_6 = TimeSpan.Companion.fromDays_14dthe$(numberToDouble($receiver));
    var $receiver_0 = hours;
    var tmp$_7 = tmp$_6.plus_fv8bff$(TimeSpan.Companion.fromHours_14dthe$(numberToDouble($receiver_0)));
    var $receiver_1 = minutes;
    var tmp$_8 = tmp$_7.plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble($receiver_1)));
    var $receiver_2 = seconds;
    return tmp$_5.plus_fv8bff$(tmp$_8.plus_fv8bff$(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver_2))));
  };
  ISO8601$IsoIntervalFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoIntervalFormat',
    interfaces: [DateTimeSpanFormat]
  };
  function ISO8601$IsoTimeFormat(basicFormat, extendedFormat) {
    this.basicFormat = basicFormat;
    this.extendedFormat = extendedFormat;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    if ((tmp$_0 = (tmp$ = this.basicFormat) != null ? tmp$ : this.extendedFormat) != null)
      tmp$_3 = tmp$_0;
    else {
      throw new NotImplementedError_init();
    }
    this.basic = new ISO8601$BaseIsoTimeFormat(tmp$_3);
    var tmp$_4;
    if ((tmp$_2 = (tmp$_1 = this.extendedFormat) != null ? tmp$_1 : this.basicFormat) != null)
      tmp$_4 = tmp$_2;
    else {
      throw new NotImplementedError_init();
    }
    this.extended = new ISO8601$BaseIsoTimeFormat(tmp$_4);
  }
  ISO8601$IsoTimeFormat.prototype.format_fv8bff$ = function (dd) {
    return this.extended.format_fv8bff$(dd);
  };
  ISO8601$IsoTimeFormat.prototype.tryParse_ivxn3r$ = function (str, doThrow) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$ = this.basic.tryParse_ivxn3r$(str, false)) != null ? tmp$ : this.extended.tryParse_ivxn3r$(str, false);
    if (tmp$_1 == null) {
      if (doThrow)
        throw new DateException('Invalid format ' + str);
      else
        tmp$_0 = null;
      tmp$_1 = tmp$_0;
    }
    return tmp$_1;
  };
  ISO8601$IsoTimeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoTimeFormat',
    interfaces: [TimeFormat]
  };
  ISO8601$IsoTimeFormat.prototype.component1 = function () {
    return this.basicFormat;
  };
  ISO8601$IsoTimeFormat.prototype.component2 = function () {
    return this.extendedFormat;
  };
  ISO8601$IsoTimeFormat.prototype.copy_rkkr90$ = function (basicFormat, extendedFormat) {
    return new ISO8601$IsoTimeFormat(basicFormat === void 0 ? this.basicFormat : basicFormat, extendedFormat === void 0 ? this.extendedFormat : extendedFormat);
  };
  ISO8601$IsoTimeFormat.prototype.toString = function () {
    return 'IsoTimeFormat(basicFormat=' + Kotlin.toString(this.basicFormat) + (', extendedFormat=' + Kotlin.toString(this.extendedFormat)) + ')';
  };
  ISO8601$IsoTimeFormat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.basicFormat) | 0;
    result = result * 31 + Kotlin.hashCode(this.extendedFormat) | 0;
    return result;
  };
  ISO8601$IsoTimeFormat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.basicFormat, other.basicFormat) && Kotlin.equals(this.extendedFormat, other.extendedFormat)))));
  };
  function ISO8601$IsoDateTimeFormat(basicFormat, extendedFormat) {
    this.basicFormat = basicFormat;
    this.extendedFormat = extendedFormat;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    if ((tmp$_0 = (tmp$ = this.basicFormat) != null ? tmp$ : this.extendedFormat) != null)
      tmp$_3 = tmp$_0;
    else {
      throw new NotImplementedError_init();
    }
    this.basic = new ISO8601$BaseIsoDateTimeFormat(tmp$_3);
    var tmp$_4;
    if ((tmp$_2 = (tmp$_1 = this.extendedFormat) != null ? tmp$_1 : this.basicFormat) != null)
      tmp$_4 = tmp$_2;
    else {
      throw new NotImplementedError_init();
    }
    this.extended = new ISO8601$BaseIsoDateTimeFormat(tmp$_4);
  }
  ISO8601$IsoDateTimeFormat.prototype.format_j01w8f$ = function (dd) {
    return this.extended.format_j01w8f$(dd);
  };
  ISO8601$IsoDateTimeFormat.prototype.tryParse_ivxn3r$$default = function (str, doThrow) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$ = null != null ? null : this.basic.tryParse_ivxn3r$(str, false)) != null ? tmp$ : this.extended.tryParse_ivxn3r$(str, false);
    if (tmp$_1 == null) {
      if (doThrow)
        throw new DateException('Invalid format ' + str);
      else
        tmp$_0 = null;
      tmp$_1 = tmp$_0;
    }
    return tmp$_1;
  };
  ISO8601$IsoDateTimeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsoDateTimeFormat',
    interfaces: [DateFormat]
  };
  ISO8601$IsoDateTimeFormat.prototype.component1 = function () {
    return this.basicFormat;
  };
  ISO8601$IsoDateTimeFormat.prototype.component2 = function () {
    return this.extendedFormat;
  };
  ISO8601$IsoDateTimeFormat.prototype.copy_rkkr90$ = function (basicFormat, extendedFormat) {
    return new ISO8601$IsoDateTimeFormat(basicFormat === void 0 ? this.basicFormat : basicFormat, extendedFormat === void 0 ? this.extendedFormat : extendedFormat);
  };
  ISO8601$IsoDateTimeFormat.prototype.toString = function () {
    return 'IsoDateTimeFormat(basicFormat=' + Kotlin.toString(this.basicFormat) + (', extendedFormat=' + Kotlin.toString(this.extendedFormat)) + ')';
  };
  ISO8601$IsoDateTimeFormat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.basicFormat) | 0;
    result = result * 31 + Kotlin.hashCode(this.extendedFormat) | 0;
    return result;
  };
  ISO8601$IsoDateTimeFormat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.basicFormat, other.basicFormat) && Kotlin.equals(this.extendedFormat, other.extendedFormat)))));
  };
  function ISO8601$DATE$ObjectLiteral() {
  }
  ISO8601$DATE$ObjectLiteral.prototype.format_j01w8f$ = function (dd) {
    return ISO8601_getInstance().DATE_CALENDAR_COMPLETE.format_j01w8f$(dd);
  };
  ISO8601$DATE$ObjectLiteral.prototype.tryParse_ivxn3r$$default = function (str, doThrow) {
    var tmp$;
    var $receiver = ISO8601_getInstance().DATE_ALL;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      var result = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).extended.tryParse_ivxn3r$(str, false);
      if (result != null)
        return result;
    }
    var $receiver_0 = ISO8601_getInstance().DATE_ALL;
    var tmp$_1;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var result_0 = $receiver_0.get_za3lpa$((tmp$_1 = n_0, n_0 = tmp$_1 + 1 | 0, tmp$_1)).basic.tryParse_ivxn3r$(str, false);
      if (result_0 != null)
        return result_0;
    }
    if (doThrow)
      throw new DateException('Invalid format');
    else
      tmp$ = null;
    return tmp$;
  };
  ISO8601$DATE$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DateFormat]
  };
  function ISO8601$TIME$ObjectLiteral() {
  }
  ISO8601$TIME$ObjectLiteral.prototype.format_fv8bff$ = function (dd) {
    return ISO8601_getInstance().TIME_LOCAL_FRACTION0.format_fv8bff$(dd);
  };
  ISO8601$TIME$ObjectLiteral.prototype.tryParse_ivxn3r$ = function (str, doThrow) {
    var tmp$;
    var $receiver = ISO8601_getInstance().TIME_ALL;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      var result = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).extended.tryParse_ivxn3r$(str, false);
      if (result != null)
        return result;
    }
    var $receiver_0 = ISO8601_getInstance().TIME_ALL;
    var tmp$_1;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var result_0 = $receiver_0.get_za3lpa$((tmp$_1 = n_0, n_0 = tmp$_1 + 1 | 0, tmp$_1)).basic.tryParse_ivxn3r$(str, false);
      if (result_0 != null)
        return result_0;
    }
    if (doThrow)
      throw new DateException('Invalid format');
    else
      tmp$ = null;
    return tmp$;
  };
  ISO8601$TIME$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TimeFormat]
  };
  function ISO8601$INTERVAL$ObjectLiteral() {
  }
  ISO8601$INTERVAL$ObjectLiteral.prototype.format_5gml0z$ = function (dd) {
    return ISO8601_getInstance().INTERVAL_DECIMAL0.format_5gml0z$(dd);
  };
  ISO8601$INTERVAL$ObjectLiteral.prototype.tryParse_ivxn3r$ = function (str, doThrow) {
    var tmp$;
    var $receiver = ISO8601_getInstance().INTERVAL_ALL;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      var result = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).tryParse_ivxn3r$(str, false);
      if (result != null)
        return result;
    }
    if (doThrow)
      throw new DateException('Invalid format');
    else
      tmp$ = null;
    return tmp$;
  };
  ISO8601$INTERVAL$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DateTimeSpanFormat]
  };
  ISO8601.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ISO8601',
    interfaces: []
  };
  var ISO8601_instance = null;
  function ISO8601_getInstance() {
    if (ISO8601_instance === null) {
      new ISO8601();
    }
    return ISO8601_instance;
  }
  function first_1($receiver, dayOfWeek) {
    var start = DateTime$Companion_getInstance().invoke_ui44o2$($receiver.year, 1, 1);
    var n = 0;
    while (true) {
      var $receiver_0 = n;
      var time = start.plus_fv8bff$(TimeSpan.Companion.fromDays_14dthe$(numberToDouble($receiver_0)));
      if (time.dayOfWeek === dayOfWeek)
        return time;
      n = n + 1 | 0;
    }
  }
  function get_weekOfYear0($receiver) {
    var firstThursday = first_1($receiver.year, DayOfWeek$Thursday_getInstance());
    var offset = firstThursday.dayOfMonth - 3 | 0;
    return ($receiver.dayOfYear - offset | 0) / 7 | 0;
  }
  function get_weekOfYear1($receiver) {
    return get_weekOfYear0($receiver) + 1 | 0;
  }
  function get_weekOfYear0_0($receiver) {
    return get_weekOfYear0($receiver.local);
  }
  function get_weekOfYear1_0($receiver) {
    return get_weekOfYear1($receiver.local);
  }
  var KlockLocale_default;
  function KlockLocale() {
    KlockLocale$Companion_getInstance();
    this.monthsShort_5mhx25$_0 = klockLazyOrGet(KlockLocale$monthsShort$lambda(this));
    this.daysOfWeekShort_s4ah9w$_0 = klockLazyOrGet(KlockLocale$daysOfWeekShort$lambda(this));
    this.h12Marker_ihl9tv$_0 = listOf(['AM', 'OM']);
    this.formatDateTimeMedium_5qrovt$_0 = this.format_61zpoe$('MMM d, y h:mm:ss a');
    this.formatDateTimeShort_7afaxo$_0 = this.format_61zpoe$('M/d/yy h:mm a');
    this.formatDateFull_zhfveu$_0 = this.format_61zpoe$('EEEE, MMMM d, y');
    this.formatDateLong_ze8wer$_0 = this.format_61zpoe$('MMMM d, y');
    this.formatDateMedium_i9vt5g$_0 = this.format_61zpoe$('MMM d, y');
    this.formatDateShort_slhdw1$_0 = this.format_61zpoe$('M/d/yy');
    this.formatTimeMedium_a5dzkl$_0 = this.format_61zpoe$('HH:mm:ss');
    this.formatTimeShort_o9xygi$_0 = this.format_61zpoe$('HH:mm');
  }
  Object.defineProperty(KlockLocale.prototype, 'monthsShort', {
    get: function () {
      return this.monthsShort_5mhx25$_0.value;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'daysOfWeekShort', {
    get: function () {
      return this.daysOfWeekShort_s4ah9w$_0.value;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'months3', {
    get: function () {
      return this.monthsShort;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_ihl9tv$_0;
    }
  });
  KlockLocale.prototype.intToString_za3lpa$ = function (value) {
    return value.toString();
  };
  KlockLocale.prototype.isWeekend_76hapz$ = function (dayOfWeek) {
    return dayOfWeek === DayOfWeek$Saturday_getInstance() || dayOfWeek === DayOfWeek$Sunday_getInstance();
  };
  KlockLocale.prototype.format_61zpoe$ = function (str) {
    return new PatternDateFormat(str, this);
  };
  Object.defineProperty(KlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_5qrovt$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_7afaxo$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_zhfveu$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_ze8wer$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_i9vt5g$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_slhdw1$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_a5dzkl$_0;
    }
  });
  Object.defineProperty(KlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_o9xygi$_0;
    }
  });
  function KlockLocale$Companion() {
    KlockLocale$Companion_instance = this;
  }
  Object.defineProperty(KlockLocale$Companion.prototype, 'english', {
    get: function () {
      return KlockLocale$English$Companion_getInstance();
    }
  });
  Object.defineProperty(KlockLocale$Companion.prototype, 'default', {
    get: function () {
      return KlockLocale_default;
    },
    set: function (value) {
      KlockLocale_default = value;
    }
  });
  KlockLocale$Companion.prototype.setTemporarily_rl52rq$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.KlockLocale.Companion.setTemporarily_rl52rq$', function (locale, callback) {
    var old = this.default;
    this.default = locale;
    try {
      return callback();
    }
    finally {
      this.default = old;
    }
  });
  KlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KlockLocale$Companion_instance = null;
  function KlockLocale$Companion_getInstance() {
    if (KlockLocale$Companion_instance === null) {
      new KlockLocale$Companion();
    }
    return KlockLocale$Companion_instance;
  }
  function KlockLocale$English() {
    KlockLocale$English$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_dga5i1$_0 = 'en';
    this.firstDayOfWeek_s7n0fb$_0 = DayOfWeek$Sunday_getInstance();
    this.daysOfWeek_fz9w6m$_0 = listOf(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
    this.months_gzm3nh$_0 = listOf(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']);
    this.formatTimeMedium_877xvb$_0 = this.format_61zpoe$('h:mm:ss a');
    this.formatTimeShort_cvrowk$_0 = this.format_61zpoe$('h:mm a');
  }
  function KlockLocale$English$Companion() {
    KlockLocale$English$Companion_instance = this;
    KlockLocale$English.call(this);
  }
  KlockLocale$English$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KlockLocale$English]
  };
  var KlockLocale$English$Companion_instance = null;
  function KlockLocale$English$Companion_getInstance() {
    if (KlockLocale$English$Companion_instance === null) {
      new KlockLocale$English$Companion();
    }
    return KlockLocale$English$Companion_instance;
  }
  Object.defineProperty(KlockLocale$English.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_dga5i1$_0;
    }
  });
  Object.defineProperty(KlockLocale$English.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_s7n0fb$_0;
    }
  });
  Object.defineProperty(KlockLocale$English.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_fz9w6m$_0;
    }
  });
  Object.defineProperty(KlockLocale$English.prototype, 'months', {
    get: function () {
      return this.months_gzm3nh$_0;
    }
  });
  Object.defineProperty(KlockLocale$English.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_877xvb$_0;
    }
  });
  Object.defineProperty(KlockLocale$English.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_cvrowk$_0;
    }
  });
  KlockLocale$English.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'English',
    interfaces: [KlockLocale]
  };
  function KlockLocale$monthsShort$lambda(this$KlockLocale) {
    return function () {
      var $receiver = this$KlockLocale.months;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(substr(item, 0, 3));
      }
      return destination;
    };
  }
  function KlockLocale$daysOfWeekShort$lambda(this$KlockLocale) {
    return function () {
      var $receiver = this$KlockLocale.daysOfWeek;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(substr(item, 0, 3));
      }
      return destination;
    };
  }
  KlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KlockLocale',
    interfaces: []
  };
  var measureTime = defineInlineFunction('klock-root-klock.com.soywiz.klock.measureTime_o14v8n$', wrapFunction(function () {
    var klock = _.com.soywiz.klock;
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function (callback) {
      var start = klock.PerformanceCounter.microseconds;
      callback();
      var end = klock.PerformanceCounter.microseconds;
      var $receiver = end - start;
      return TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
    };
  }));
  var measureTimeWithResult = defineInlineFunction('klock-root-klock.com.soywiz.klock.measureTimeWithResult_9ce4rd$', wrapFunction(function () {
    var throwUPAE = Kotlin.throwUPAE;
    var TimedResult_init = _.com.soywiz.klock.TimedResult;
    var klock = _.com.soywiz.klock;
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function (callback) {
      var result = {v: null};
      var start = klock.PerformanceCounter.microseconds;
      result.v = callback();
      var end = klock.PerformanceCounter.microseconds;
      var $receiver = end - start;
      var elapsed = TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
      return new TimedResult_init(result.v == null ? throwUPAE('result') : result.v, elapsed);
    };
  }));
  function TimedResult(result, time) {
    this.result = result;
    this.time = time;
  }
  TimedResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimedResult',
    interfaces: []
  };
  TimedResult.prototype.component1 = function () {
    return this.result;
  };
  TimedResult.prototype.component2 = function () {
    return this.time;
  };
  TimedResult.prototype.copy_lx99sw$ = function (result, time) {
    return new TimedResult(result === void 0 ? this.result : result, time === void 0 ? this.time : time);
  };
  TimedResult.prototype.toString = function () {
    return 'TimedResult(result=' + Kotlin.toString(this.result) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  TimedResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  TimedResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.time, other.time)))));
  };
  function Month(name, ordinal, index1, daysCommon, daysLeap) {
    if (daysLeap === void 0)
      daysLeap = daysCommon;
    Enum.call(this);
    this.index1 = index1;
    this.daysCommon = daysCommon;
    this.daysLeap = daysLeap;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$January_instance = new Month('January', 0, 1, 31);
    Month$February_instance = new Month('February', 1, 2, 28, 29);
    Month$March_instance = new Month('March', 2, 3, 31);
    Month$April_instance = new Month('April', 3, 4, 30);
    Month$May_instance = new Month('May', 4, 5, 31);
    Month$June_instance = new Month('June', 5, 6, 30);
    Month$July_instance = new Month('July', 6, 7, 31);
    Month$August_instance = new Month('August', 7, 8, 31);
    Month$September_instance = new Month('September', 8, 9, 30);
    Month$October_instance = new Month('October', 9, 10, 31);
    Month$November_instance = new Month('November', 10, 11, 30);
    Month$December_instance = new Month('December', 11, 12, 31);
    Month$Companion_getInstance();
  }
  var Month$January_instance;
  function Month$January_getInstance() {
    Month_initFields();
    return Month$January_instance;
  }
  var Month$February_instance;
  function Month$February_getInstance() {
    Month_initFields();
    return Month$February_instance;
  }
  var Month$March_instance;
  function Month$March_getInstance() {
    Month_initFields();
    return Month$March_instance;
  }
  var Month$April_instance;
  function Month$April_getInstance() {
    Month_initFields();
    return Month$April_instance;
  }
  var Month$May_instance;
  function Month$May_getInstance() {
    Month_initFields();
    return Month$May_instance;
  }
  var Month$June_instance;
  function Month$June_getInstance() {
    Month_initFields();
    return Month$June_instance;
  }
  var Month$July_instance;
  function Month$July_getInstance() {
    Month_initFields();
    return Month$July_instance;
  }
  var Month$August_instance;
  function Month$August_getInstance() {
    Month_initFields();
    return Month$August_instance;
  }
  var Month$September_instance;
  function Month$September_getInstance() {
    Month_initFields();
    return Month$September_instance;
  }
  var Month$October_instance;
  function Month$October_getInstance() {
    Month_initFields();
    return Month$October_instance;
  }
  var Month$November_instance;
  function Month$November_getInstance() {
    Month_initFields();
    return Month$November_instance;
  }
  var Month$December_instance;
  function Month$December_getInstance() {
    Month_initFields();
    return Month$December_instance;
  }
  Object.defineProperty(Month.prototype, 'index0', {
    get: function () {
      return this.index1 - 1 | 0;
    }
  });
  Month.prototype.days_6taknv$ = function (leap) {
    return leap ? this.daysLeap : this.daysCommon;
  };
  Month.prototype.days_za3lpa$ = function (year) {
    return this.days_6taknv$((new Year(year)).isLeap);
  };
  Month.prototype.days_ccxljp$ = function (year) {
    return this.days_6taknv$(year.isLeap);
  };
  Month.prototype.daysToStart_6taknv$ = function (leap) {
    return Month$Companion_getInstance().YEAR_DAYS_0(leap)[this.index0];
  };
  Month.prototype.daysToStart_za3lpa$ = function (year) {
    return this.daysToStart_6taknv$((new Year(year)).isLeap);
  };
  Month.prototype.daysToStart_ccxljp$ = function (year) {
    return this.daysToStart_6taknv$(year.isLeap);
  };
  Month.prototype.daysToEnd_6taknv$ = function (leap) {
    return Month$Companion_getInstance().YEAR_DAYS_0(leap)[this.index1];
  };
  Month.prototype.daysToEnd_za3lpa$ = function (year) {
    return this.daysToEnd_6taknv$((new Year(year)).isLeap);
  };
  Month.prototype.daysToEnd_ccxljp$ = function (year) {
    return this.daysToEnd_6taknv$(year.isLeap);
  };
  Object.defineProperty(Month.prototype, 'previous', {
    get: function () {
      return this.minus_za3lpa$(1);
    }
  });
  Object.defineProperty(Month.prototype, 'next', {
    get: function () {
      return this.plus_za3lpa$(1);
    }
  });
  Month.prototype.plus_za3lpa$ = function (delta) {
    return Month$Companion_getInstance().get_za3lpa$(this.index1 + delta | 0);
  };
  Month.prototype.minus_za3lpa$ = function (delta) {
    return Month$Companion_getInstance().get_za3lpa$(this.index1 - delta | 0);
  };
  Month.prototype.minus_s5s5ke$ = function (other) {
    return abs(this.index0 - other.index0 | 0);
  };
  Object.defineProperty(Month.prototype, 'localName', {
    get: function () {
      return this.localName_kdekv2$(KlockLocale$Companion_getInstance().default);
    }
  });
  Month.prototype.localName_kdekv2$ = function (locale) {
    return locale.months.get_za3lpa$(this.index0);
  };
  Object.defineProperty(Month.prototype, 'localShortName', {
    get: function () {
      return this.localShortName_kdekv2$(KlockLocale$Companion_getInstance().default);
    }
  });
  Month.prototype.localShortName_kdekv2$ = function (locale) {
    return locale.monthsShort.get_za3lpa$(this.index0);
  };
  function Month$Companion() {
    Month$Companion_instance = this;
    this.Count = 12;
    this.BY_INDEX0_0 = Month$values();
    this.YEAR_DAYS_LEAP_0 = this.generateDaysToStart_0(true);
    this.YEAR_DAYS_COMMON_0 = this.generateDaysToStart_0(false);
  }
  Month$Companion.prototype.invoke_za3lpa$ = function (index1) {
    return this.adjusted_za3lpa$(index1);
  };
  Month$Companion.prototype.get_za3lpa$ = function (index1) {
    return this.adjusted_za3lpa$(index1);
  };
  Month$Companion.prototype.adjusted_za3lpa$ = function (index1) {
    return this.BY_INDEX0_0[umod(index1 - 1 | 0, 12)];
  };
  Month$Companion.prototype.checked_za3lpa$ = function (index1) {
    var tmp$ = this.BY_INDEX0_0;
    if (!(1 <= index1 && index1 <= 12))
      throw new DateException('Month ' + index1 + ' not in 1..12');
    return tmp$[index1 - 1 | 0];
  };
  Month$Companion.prototype.fromDayOfYear_fzusl$ = function (dayOfYear, leap) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var days = this.YEAR_DAYS_0(leap);
    var day0 = dayOfYear - 1 | 0;
    var guess = day0 / 32 | 0;
    if (0 <= guess && guess <= 11) {
      tmp$ = days[guess];
      tmp$_0 = days[guess + 1 | 0];
      tmp$_1 = (tmp$ <= day0 && day0 < tmp$_0);
    }
     else
      tmp$_1 = false;
    if (tmp$_1)
      return Month$Companion_getInstance().get_za3lpa$(guess + 1 | 0);
    if (0 <= guess && guess <= 10) {
      tmp$_2 = days[guess + 1 | 0];
      tmp$_3 = days[guess + 2 | 0];
      tmp$_4 = (tmp$_2 <= day0 && day0 < tmp$_3);
    }
     else
      tmp$_4 = false;
    if (tmp$_4)
      return Month$Companion_getInstance().get_za3lpa$(guess + 2 | 0);
    return null;
  };
  Month$Companion.prototype.fromDayOfYear_7t9d$ = function (dayOfYear, year) {
    return this.fromDayOfYear_fzusl$(dayOfYear, year.isLeap);
  };
  Month$Companion.prototype.YEAR_DAYS_0 = function (isLeap) {
    return isLeap ? this.YEAR_DAYS_LEAP_0 : this.YEAR_DAYS_COMMON_0;
  };
  Month$Companion.prototype.generateDaysToStart_0 = function (leap) {
    var total = {v: 0};
    var array = new Int32Array(13);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      total.v = total.v + (i === 0 ? 0 : this.BY_INDEX0_0[i - 1 | 0].days_6taknv$(leap)) | 0;
      array[i] = total.v;
    }
    return array;
  };
  Month$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Month.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$January_getInstance(), Month$February_getInstance(), Month$March_getInstance(), Month$April_getInstance(), Month$May_getInstance(), Month$June_getInstance(), Month$July_getInstance(), Month$August_getInstance(), Month$September_getInstance(), Month$October_getInstance(), Month$November_getInstance(), Month$December_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'January':
        return Month$January_getInstance();
      case 'February':
        return Month$February_getInstance();
      case 'March':
        return Month$March_getInstance();
      case 'April':
        return Month$April_getInstance();
      case 'May':
        return Month$May_getInstance();
      case 'June':
        return Month$June_getInstance();
      case 'July':
        return Month$July_getInstance();
      case 'August':
        return Month$August_getInstance();
      case 'September':
        return Month$September_getInstance();
      case 'October':
        return Month$October_getInstance();
      case 'November':
        return Month$November_getInstance();
      case 'December':
        return Month$December_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  var get_years = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_years_s8ev3n$', wrapFunction(function () {
    var MonthSpan_init = _.com.soywiz.klock.MonthSpan;
    return function ($receiver) {
      return new MonthSpan_init(12 * $receiver | 0);
    };
  }));
  var get_months = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_months_s8ev3n$', wrapFunction(function () {
    var MonthSpan_init = _.com.soywiz.klock.MonthSpan;
    return function ($receiver) {
      return new MonthSpan_init($receiver);
    };
  }));
  function MonthSpan(totalMonths) {
    this.totalMonths = totalMonths;
  }
  MonthSpan.prototype.unaryMinus = function () {
    return new MonthSpan(-this.totalMonths | 0);
  };
  MonthSpan.prototype.unaryPlus = function () {
    return new MonthSpan(+this.totalMonths);
  };
  MonthSpan.prototype.plus_fv8bff$ = function (other) {
    return new DateTimeSpan(this, other);
  };
  MonthSpan.prototype.plus_glepj8$ = function (other) {
    return new MonthSpan(this.totalMonths + other.totalMonths | 0);
  };
  MonthSpan.prototype.plus_5gml0z$ = function (other) {
    return new DateTimeSpan(other.monthSpan.plus_glepj8$(this), other.timeSpan);
  };
  MonthSpan.prototype.minus_fv8bff$ = function (other) {
    return this.plus_fv8bff$(other.unaryMinus());
  };
  MonthSpan.prototype.minus_glepj8$ = function (other) {
    return this.plus_glepj8$(other.unaryMinus());
  };
  MonthSpan.prototype.minus_5gml0z$ = function (other) {
    return this.plus_5gml0z$(other.unaryMinus());
  };
  MonthSpan.prototype.times_3p81yu$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.MonthSpan.times_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var MonthSpan_init = _.com.soywiz.klock.MonthSpan;
    return function (times) {
      return new MonthSpan_init(numberToInt(this.totalMonths * numberToDouble(times)));
    };
  }));
  MonthSpan.prototype.div_3p81yu$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.MonthSpan.div_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var MonthSpan_init = _.com.soywiz.klock.MonthSpan;
    return function (times) {
      return new MonthSpan_init(numberToInt(this.totalMonths / numberToDouble(times)));
    };
  }));
  MonthSpan.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.totalMonths, other.totalMonths);
  };
  MonthSpan.prototype.toString = function () {
    var list = ArrayList_init_0();
    if (get_years_0(this) !== 0)
      list.add_11rb$(get_years_0(this).toString() + 'Y');
    if (get_months_0(this) !== 0 || get_years_0(this) === 0)
      list.add_11rb$(get_months_0(this).toString() + 'M');
    return joinToString(list, ' ');
  };
  MonthSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MonthSpan',
    interfaces: [Comparable]
  };
  MonthSpan.prototype.unbox = function () {
    return this.totalMonths;
  };
  MonthSpan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.totalMonths) | 0;
    return result;
  };
  MonthSpan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.totalMonths, other.totalMonths))));
  };
  function get_totalYears($receiver) {
    return $receiver.totalMonths / 12.0;
  }
  function get_years_0($receiver) {
    return $receiver.totalMonths / 12 | 0;
  }
  function get_months_0($receiver) {
    return $receiver.totalMonths % 12;
  }
  function PatternDateFormat(format, locale, tzNames, options) {
    if (locale === void 0)
      locale = null;
    if (tzNames === void 0)
      tzNames = TimezoneNames$Companion_getInstance().DEFAULT;
    if (options === void 0)
      options = PatternDateFormat$Options$Companion_getInstance().DEFAULT;
    this.format = format;
    this.locale = locale;
    this.tzNames = tzNames;
    this.options = options;
    this.openOffsets_0 = LinkedHashMap_init();
    this.closeOffsets_0 = LinkedHashMap_init();
    var $receiver = ArrayList_init_0();
    var s = new MicroStrReader(this.format);
    while (s.hasMore) {
      if (unboxChar(s.peekChar()) === 39) {
        var start = s.offset;
        s.tryRead_s8itvh$(39);
        while (s.hasMore && unboxChar(s.readChar()) !== 39) {
        }
        var end = s.offset;
        var escapedChunk = s.str.substring(start, end);
        $receiver.add_11rb$(escapedChunk);
        continue;
      }
      if (this.options.optionalSupport) {
        var offset = $receiver.size;
        if (s.tryRead_s8itvh$(91)) {
          increment(this.openOffsets_0, offset);
          continue;
        }
        if (s.tryRead_s8itvh$(93)) {
          increment(this.closeOffsets_0, offset - 1 | 0);
          continue;
        }
      }
      var start_0 = s.offset;
      var c = unboxChar(s.readChar());
      while (s.hasMore && s.tryRead_s8itvh$(c)) {
      }
      var end_0 = s.offset;
      var chunk = s.str.substring(start_0, end_0);
      $receiver.add_11rb$(chunk);
    }
    this.chunks_8be2vx$ = toList_0($receiver);
    var $receiver_0 = this.chunks_8be2vx$;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    loop_label: while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      transform$break: do {
        switch (item) {
          case 'E':
          case 'EE':
          case 'EEE':
          case 'EEEE':
          case 'EEEEE':
          case 'EEEEEE':
            transform$result = '(\\w+)';
            break transform$break;
          case 'z':
          case 'zzz':
            transform$result = '([\\w\\s\\-\\+\\:]+)';
            break transform$break;
          case 'd':
            transform$result = '(\\d{1,2})';
            break transform$break;
          case 'dd':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'M':
            transform$result = '(\\d{1,5})';
            break transform$break;
          case 'MM':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'MMM':
          case 'MMMM':
          case 'MMMMM':
            transform$result = '(\\w+)';
            break transform$break;
          case 'y':
            transform$result = '(\\d{1,5})';
            break transform$break;
          case 'yy':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'yyy':
            transform$result = '(\\d{3})';
            break transform$break;
          case 'yyyy':
            transform$result = '(\\d{4})';
            break transform$break;
          case 'YYYY':
            transform$result = '(\\d{4})';
            break transform$break;
          case 'H':
            transform$result = '(\\d{1,2})';
            break transform$break;
          case 'HH':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'h':
            transform$result = '(\\d{1,2})';
            break transform$break;
          case 'hh':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'm':
            transform$result = '(\\d{1,2})';
            break transform$break;
          case 'mm':
            transform$result = '(\\d{2})';
            break transform$break;
          case 's':
            transform$result = '(\\d{1,2})';
            break transform$break;
          case 'ss':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'S':
            transform$result = '(\\d{1,6})';
            break transform$break;
          case 'SS':
            transform$result = '(\\d{2})';
            break transform$break;
          case 'SSS':
            transform$result = '(\\d{3})';
            break transform$break;
          case 'SSSS':
            transform$result = '(\\d{4})';
            break transform$break;
          case 'SSSSS':
            transform$result = '(\\d{5})';
            break transform$break;
          case 'SSSSSS':
            transform$result = '(\\d{6})';
            break transform$break;
          case 'SSSSSSS':
            transform$result = '(\\d{7})';
            break transform$break;
          case 'SSSSSSSS':
            transform$result = '(\\d{8})';
            break transform$break;
          case 'X':
          case 'XX':
          case 'XXX':
          case 'x':
          case 'xx':
          case 'xxx':
            transform$result = '([\\w:\\+\\-]+)';
            break transform$break;
          case 'a':
            transform$result = '(\\w+)';
            break transform$break;
          case ' ':
            transform$result = '(\\s+)';
            break transform$break;
          default:if (startsWith_0(item, 39)) {
              transform$result = '(' + Regex.Companion.escapeReplacement_61zpoe$(substr(item, 1, item.length - 2 | 0)) + ')';
              break transform$break;
            }
             else {
              transform$result = '(' + Regex.Companion.escapeReplacement_61zpoe$(item) + ')';
              break transform$break;
            }

        }
      }
       while (false);
      tmp$_0.call(destination, transform$result);
    }
    this.regexChunks_8be2vx$ = destination;
    var $receiver_1 = this.regexChunks_8be2vx$;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_1, tmp$_0_0;
    var index = 0;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      var transform$result_0;
      if (this.options.optionalSupport) {
        var tmp$_3;
        var opens = (tmp$_3 = this.openOffsets_0.get_11rb$(index_0)) != null ? tmp$_3 : 0;
        var tmp$_4;
        var closes = (tmp$_4 = this.closeOffsets_0.get_11rb$(index_0)) != null ? tmp$_4 : 0;
        var $receiver_2 = StringBuilder_init();
        for (var index_1 = 0; index_1 < opens; index_1++) {
          $receiver_2.append_gw00v9$('(?:');
        }
        $receiver_2.append_gw00v9$(item_0);
        for (var index_2 = 0; index_2 < closes; index_2++) {
          $receiver_2.append_gw00v9$(')?');
        }
        transform$result_0 = $receiver_2.toString();
      }
       else {
        transform$result_0 = item_0;
      }
      tmp$_2.call(destination_0, transform$result_0);
    }
    this.rx2_8be2vx$ = Regex_init('^' + joinToString(destination_0, '') + '$');
  }
  Object.defineProperty(PatternDateFormat.prototype, 'realLocale', {
    get: function () {
      var tmp$;
      return (tmp$ = this.locale) != null ? tmp$ : KlockLocale$Companion_getInstance().default;
    }
  });
  function PatternDateFormat$Options(optionalSupport) {
    PatternDateFormat$Options$Companion_getInstance();
    if (optionalSupport === void 0)
      optionalSupport = false;
    this.optionalSupport = optionalSupport;
  }
  function PatternDateFormat$Options$Companion() {
    PatternDateFormat$Options$Companion_instance = this;
    this.DEFAULT = new PatternDateFormat$Options(false);
    this.WITH_OPTIONAL = new PatternDateFormat$Options(true);
  }
  PatternDateFormat$Options$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PatternDateFormat$Options$Companion_instance = null;
  function PatternDateFormat$Options$Companion_getInstance() {
    if (PatternDateFormat$Options$Companion_instance === null) {
      new PatternDateFormat$Options$Companion();
    }
    return PatternDateFormat$Options$Companion_instance;
  }
  PatternDateFormat$Options.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Options',
    interfaces: []
  };
  PatternDateFormat$Options.prototype.component1 = function () {
    return this.optionalSupport;
  };
  PatternDateFormat$Options.prototype.copy_6taknv$ = function (optionalSupport) {
    return new PatternDateFormat$Options(optionalSupport === void 0 ? this.optionalSupport : optionalSupport);
  };
  PatternDateFormat$Options.prototype.toString = function () {
    return 'Options(optionalSupport=' + Kotlin.toString(this.optionalSupport) + ')';
  };
  PatternDateFormat$Options.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.optionalSupport) | 0;
    return result;
  };
  PatternDateFormat$Options.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.optionalSupport, other.optionalSupport))));
  };
  PatternDateFormat.prototype.withLocale_7qgj31$ = function (locale) {
    return this.copy_zf3jlx$(void 0, locale);
  };
  PatternDateFormat.prototype.withTimezoneNames_7p84kh$ = function (tzNames) {
    return this.copy_zf3jlx$(void 0, void 0, this.tzNames.plus_7p84kh$(tzNames));
  };
  PatternDateFormat.prototype.withOptions_k6xag9$ = function (options) {
    return this.copy_zf3jlx$(void 0, void 0, void 0, options);
  };
  PatternDateFormat.prototype.withOptional = function () {
    return this.copy_zf3jlx$(void 0, void 0, void 0, this.options.copy_6taknv$(true));
  };
  PatternDateFormat.prototype.withNonOptional = function () {
    return this.copy_zf3jlx$(void 0, void 0, void 0, this.options.copy_6taknv$(false));
  };
  PatternDateFormat.prototype.format_j01w8f$ = function (dd) {
    var tmp$, tmp$_0, tmp$_1;
    var utc = dd.local;
    var out = '';
    tmp$ = this.chunks_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var name = tmp$.next();
      var nlen = name.length;
      tmp$_1 = out;
      switch (name) {
        case 'E':
        case 'EE':
        case 'EEE':
          tmp$_0 = capitalize(this.realLocale.daysOfWeekShort.get_za3lpa$(utc.dayOfWeek.index0));
          break;
        case 'EEEE':
        case 'EEEEE':
        case 'EEEEEE':
          tmp$_0 = capitalize(this.realLocale.daysOfWeek.get_za3lpa$(utc.dayOfWeek.index0));
          break;
        case 'z':
        case 'zzz':
          tmp$_0 = dd.offset.timeZone;
          break;
        case 'd':
        case 'dd':
          tmp$_0 = padded(utc.dayOfMonth, nlen);
          break;
        case 'M':
        case 'MM':
          tmp$_0 = padded(utc.month1, nlen);
          break;
        case 'MMM':
          tmp$_0 = capitalize(substr(this.realLocale.months.get_za3lpa$(utc.month0), 0, 3));
          break;
        case 'MMMM':
          tmp$_0 = capitalize(this.realLocale.months.get_za3lpa$(utc.month0));
          break;
        case 'MMMMM':
          tmp$_0 = capitalize(substr(this.realLocale.months.get_za3lpa$(utc.month0), 0, 1));
          break;
        case 'y':
          tmp$_0 = utc.yearInt;
          break;
        case 'yy':
          tmp$_0 = padded(utc.yearInt % 100, 2);
          break;
        case 'yyy':
          tmp$_0 = padded(utc.yearInt % 1000, 3);
          break;
        case 'yyyy':
          tmp$_0 = padded(utc.yearInt, 4);
          break;
        case 'YYYY':
          tmp$_0 = padded(utc.yearInt, 4);
          break;
        case 'H':
        case 'HH':
          tmp$_0 = padded(mconvertRangeZero(utc.hours, 24), nlen);
          break;
        case 'k':
        case 'kk':
          tmp$_0 = padded(mconvertRangeNonZero(utc.hours, 24), nlen);
          break;
        case 'h':
        case 'hh':
          tmp$_0 = padded(mconvertRangeNonZero(utc.hours, 12), nlen);
          break;
        case 'K':
        case 'KK':
          tmp$_0 = padded(mconvertRangeZero(utc.hours, 12), nlen);
          break;
        case 'm':
        case 'mm':
          tmp$_0 = padded(utc.minutes, nlen);
          break;
        case 's':
        case 'ss':
          tmp$_0 = padded(utc.seconds, nlen);
          break;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'SSSS':
        case 'SSSSS':
        case 'SSSSSS':
        case 'SSSSSSS':
        case 'SSSSSSSS':
          var milli = utc.milliseconds;
          var x = utc.milliseconds;
          var base10length = numberToInt(Math_0.log10(x)) + 1 | 0;
          if (base10length > name.length) {
            var n = -1 * (base10length - name.length | 0) | 0;
            var fractionalPart = numberToInt(milli * Math_0.pow(10.0, n));
            tmp$_0 = fractionalPart;
          }
           else {
            var fractionalPart_0 = substr(padded(milli, 3) + '00000', 0, name.length);
            tmp$_0 = substr(fractionalPart_0, 0, name.length);
          }

          break;
        case 'X':
        case 'XX':
        case 'XXX':
        case 'x':
        case 'xx':
        case 'xxx':
          if (startsWith(name, 'X') && dd.offset.totalMinutesInt === 0)
            tmp$_0 = 'Z';
          else {
            var p = dd.offset.totalMinutesInt >= 0 ? '+' : '-';
            var hours = abs(dd.offset.totalMinutesInt / 60 | 0);
            var minutes = abs(dd.offset.totalMinutesInt % 60);
            switch (name) {
              case 'X':
              case 'x':
                tmp$_0 = p + padded(hours, 2);
                break;
              case 'XX':
              case 'xx':
                tmp$_0 = p + padded(hours, 2) + padded(minutes, 2);
                break;
              case 'XXX':
              case 'xxx':
                tmp$_0 = p + padded(hours, 2) + ':' + padded(minutes, 2);
                break;
              default:tmp$_0 = name;
                break;
            }
          }

          break;
        case 'a':
          tmp$_0 = utc.hours < 12 ? 'am' : 'pm';
          break;
        default:if (startsWith_0(name, 39)) {
            var endIndex = name.length - 1 | 0;
            tmp$_0 = name.substring(1, endIndex);
          }
           else
            tmp$_0 = name;
          break;
      }
      out = tmp$_1 + tmp$_0;
    }
    return out;
  };
  PatternDateFormat.prototype.parseError_0 = function (message, str) {
    println('Parser error: ' + message + ', ' + str + ', ' + this.rx2_8be2vx$);
    return null;
  };
  PatternDateFormat.prototype.tryParse_ivxn3r$$default = function (str, doThrow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var millisecond = 0;
    var second = 0;
    var minute = 0;
    var hour = 0;
    var day = 1;
    var month = 1;
    var fullYear = 1970;
    var offset = null;
    var isPm = false;
    var is12HourFormat = false;
    tmp$ = this.rx2_8be2vx$.find_905azu$(str);
    if (tmp$ == null) {
      return this.parseError_0('Not match', str);
    }
    var result = tmp$;
    tmp$_0 = zip(this.chunks_8be2vx$, drop(result.groupValues, 1)).iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_4 = tmp$_0.next();
      var name = tmp$_4.component1()
      , value = tmp$_4.component2();
      if (value.length === 0)
        continue;
      switch (name) {
        case 'E':
        case 'EE':
        case 'EEE':
        case 'EEEE':
        case 'EEEEE':
        case 'EEEEEE':
          break;
        case 'z':
        case 'zzz':
          var tzOffset = this.tzNames.namesToOffsets.get_11rb$(value.toUpperCase());
          if (tzOffset != null) {
            offset = tzOffset;
          }
           else {
            var sign = 1;
            var reader = new MicroStrReader(value);
            reader.tryRead_61zpoe$('GMT');
            reader.tryRead_61zpoe$('UTC');
            if (reader.tryRead_61zpoe$('+'))
              sign = 1;
            if (reader.tryRead_61zpoe$('-'))
              sign = -1;
            var part = replace_0(reader.readRemaining(), ':', '');
            var hours = (tmp$_1 = toIntOrNull(padStart(substr(part, 0, 2), 2, 48))) != null ? tmp$_1 : 0;
            var minutes = (tmp$_2 = toIntOrNull(padStart(substr(part, 2, 2), 2, 48))) != null ? tmp$_2 : 0;
            var roffset = TimeSpan.Companion.fromHours_14dthe$(numberToDouble(hours)).plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(minutes)));
            offset = sign > 0 ? roffset.unaryPlus() : roffset.unaryMinus();
          }

          break;
        case 'd':
        case 'dd':
          day = toInt(value);
          break;
        case 'M':
        case 'MM':
          month = toInt(value);
          break;
        case 'MMM':
          month = this.realLocale.monthsShort.indexOf_11rb$(value.toLowerCase()) + 1 | 0;
          break;
        case 'y':
        case 'yyyy':
        case 'YYYY':
          fullYear = toInt(value);
          break;
        case 'yy':
          if (doThrow)
            throw RuntimeException_init('Not guessing years from two digits.');
          else
            return null;
        case 'yyy':
          fullYear = toInt(value) + (toInt(value) < 800 ? 2000 : 1000) | 0;
          break;
        case 'H':
        case 'HH':
        case 'k':
        case 'kk':
          hour = umod(toInt(value), 24);
          break;
        case 'h':
        case 'hh':
        case 'K':
        case 'KK':
          hour = umod(toInt(value), 24);
          is12HourFormat = true;
          break;
        case 'm':
        case 'mm':
          minute = toInt(value);
          break;
        case 's':
        case 'ss':
          second = toInt(value);
          break;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'SSSS':
        case 'SSSSS':
        case 'SSSSSS':
          var x = toDouble(value);
          var base10length = numberToInt(Math_0.log10(x)) + 1 | 0;
          if (base10length > 3) {
            var tmp$_5 = toDouble(value);
            var n = -1 * (base10length - 3 | 0) | 0;
            tmp$_3 = numberToInt(tmp$_5 * Math_0.pow(10.0, n));
          }
           else {
            tmp$_3 = toInt(value);
          }

          millisecond = tmp$_3;
          break;
        case 'X':
        case 'XX':
        case 'XXX':
        case 'x':
        case 'xx':
        case 'xxx':
          if (startsWith(name, 'X') && first_0(value) === 90) {
            offset = TimeSpan.Companion.fromHours_14dthe$(numberToDouble(0));
          }
           else if (startsWith(name, 'x') && first_0(value) === 90)
            if (doThrow)
              throw RuntimeException_init('Zulu Time Zone is only accepted with X-XXX formats.');
            else
              return null;
          else if (first_0(value) !== 90) {
            var hours_0 = toInt(substringBefore(drop_0(value, 1), 58));
            var minutes_0 = toInt(substringAfter(value, 58, '0'));
            offset = TimeSpan.Companion.fromHours_14dthe$(numberToDouble(hours_0)).plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(minutes_0)));
            if (first_0(value) === 45) {
              offset = offset.unaryMinus();
            }
          }

          break;
        case 'MMMM':
          month = this.realLocale.months.indexOf_11rb$(value.toLowerCase()) + 1 | 0;
          break;
        case 'MMMMM':
          if (doThrow)
            throw RuntimeException_init('Not possible to get the month from one letter.');
          else
            return null;
        case 'a':
          isPm = equals(value, 'pm');
          break;
        default:break;
      }
    }
    if (is12HourFormat && isPm) {
      hour = hour + 12 | 0;
    }
    var dateTime = DateTime$Companion_getInstance().createAdjusted_ui44o2$(fullYear, month, day, hour, minute, second, millisecond);
    return dateTime.toOffsetUnadjusted_fv8bff$(offset != null ? offset : TimeSpan.Companion.fromHours_14dthe$(numberToDouble(0)));
  };
  PatternDateFormat.prototype.toString = function () {
    return this.format;
  };
  PatternDateFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PatternDateFormat',
    interfaces: [DateFormat]
  };
  PatternDateFormat.prototype.component1 = function () {
    return this.format;
  };
  PatternDateFormat.prototype.component2 = function () {
    return this.locale;
  };
  PatternDateFormat.prototype.component3 = function () {
    return this.tzNames;
  };
  PatternDateFormat.prototype.component4 = function () {
    return this.options;
  };
  PatternDateFormat.prototype.copy_zf3jlx$ = function (format, locale, tzNames, options) {
    return new PatternDateFormat(format === void 0 ? this.format : format, locale === void 0 ? this.locale : locale, tzNames === void 0 ? this.tzNames : tzNames, options === void 0 ? this.options : options);
  };
  PatternDateFormat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.locale) | 0;
    result = result * 31 + Kotlin.hashCode(this.tzNames) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    return result;
  };
  PatternDateFormat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.format, other.format) && Kotlin.equals(this.locale, other.locale) && Kotlin.equals(this.tzNames, other.tzNames) && Kotlin.equals(this.options, other.options)))));
  };
  function mconvertRangeZero(value, size) {
    return umod(value, size);
  }
  function mconvertRangeNonZero(value, size) {
    var res = umod(value, size);
    return res === 0 ? size : res;
  }
  function PerformanceCounter() {
    PerformanceCounter_instance = this;
  }
  Object.defineProperty(PerformanceCounter.prototype, 'nanoseconds', {
    get: function () {
      return KlockInternal_getInstance().microClock * 1000.0;
    }
  });
  Object.defineProperty(PerformanceCounter.prototype, 'microseconds', {
    get: function () {
      return KlockInternal_getInstance().microClock;
    }
  });
  Object.defineProperty(PerformanceCounter.prototype, 'milliseconds', {
    get: function () {
      return KlockInternal_getInstance().microClock / 1000.0;
    }
  });
  Object.defineProperty(PerformanceCounter.prototype, 'reference', {
    get: function () {
      var $receiver = KlockInternal_getInstance().microClock;
      return TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
    }
  });
  PerformanceCounter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PerformanceCounter',
    interfaces: []
  };
  var PerformanceCounter_instance = null;
  function PerformanceCounter_getInstance() {
    if (PerformanceCounter_instance === null) {
      new PerformanceCounter();
    }
    return PerformanceCounter_instance;
  }
  function SerializableDateTime(dateTime) {
    this.dateTime = dateTime;
  }
  SerializableDateTime.prototype.toString = function () {
    return this.dateTime.toString();
  };
  SerializableDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableDateTime',
    interfaces: []
  };
  SerializableDateTime.prototype.component1 = function () {
    return this.dateTime;
  };
  SerializableDateTime.prototype.copy_mw5vjr$ = function (dateTime) {
    return new SerializableDateTime(dateTime === void 0 ? this.dateTime : dateTime);
  };
  SerializableDateTime.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dateTime) | 0;
    return result;
  };
  SerializableDateTime.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dateTime, other.dateTime))));
  };
  function serializable($receiver) {
    return new SerializableDateTime($receiver);
  }
  function Time(encoded) {
    Time$Companion_getInstance();
    this.encoded = encoded;
  }
  function Time$Companion() {
    Time$Companion_instance = this;
    this.DIV_MILLISECONDS_0 = 1;
    this.DIV_SECONDS_0 = 1000;
    this.DIV_MINUTES_0 = 60000;
    this.DIV_HOURS_0 = 3600000;
  }
  Time$Companion.prototype.invoke_tjonv8$ = function (hour, minute, second, millisecond) {
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (millisecond === void 0)
      millisecond = 0;
    return new Time(TimeSpan.Companion.fromHours_14dthe$(numberToDouble(hour)).plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(minute))).plus_fv8bff$(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(second))).plus_fv8bff$(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(millisecond))));
  };
  Time$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Time$Companion_instance = null;
  function Time$Companion_getInstance() {
    if (Time$Companion_instance === null) {
      new Time$Companion();
    }
    return Time$Companion_instance;
  }
  Object.defineProperty(Time.prototype, 'millisecond', {
    get: function () {
      return abs((this.encoded.millisecondsInt / 1 | 0) % 1000);
    }
  });
  Object.defineProperty(Time.prototype, 'second', {
    get: function () {
      return abs((this.encoded.millisecondsInt / 1000 | 0) % 60);
    }
  });
  Object.defineProperty(Time.prototype, 'minute', {
    get: function () {
      return abs((this.encoded.millisecondsInt / 60000 | 0) % 60);
    }
  });
  Object.defineProperty(Time.prototype, 'hour', {
    get: function () {
      return this.encoded.millisecondsInt / 3600000 | 0;
    }
  });
  Time.prototype.toString = function () {
    return (this.hour < 0 ? '-' : '') + padStart(abs(this.hour).toString(), 2, 48) + ':' + padStart(abs(this.minute).toString(), 2, 48) + ':' + padStart(abs(this.second).toString(), 2, 48) + '.' + padStart(abs(this.millisecond).toString(), 3, 48);
  };
  Time.prototype.compareTo_11rb$ = function (other) {
    return this.encoded.compareTo_11rb$(other.encoded);
  };
  Time.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Time',
    interfaces: [Comparable]
  };
  Time.prototype.unbox = function () {
    return this.encoded;
  };
  Time.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.encoded) | 0;
    return result;
  };
  Time.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.encoded, other.encoded))));
  };
  function plus_5($receiver, span) {
    return DateTime$Companion_getInstance().EPOCH.plus_fv8bff$($receiver.encoded).plus_fv8bff$(span).time;
  }
  function TimeFormat() {
  }
  TimeFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TimeFormat',
    interfaces: []
  };
  function parse_1($receiver, str) {
    var tmp$;
    tmp$ = $receiver.tryParse_ivxn3r$(str, true);
    if (tmp$ == null) {
      throw new DateException("Not a valid format: '" + str + "' for '" + $receiver + "'");
    }
    return tmp$;
  }
  function TimeProvider() {
    TimeProvider$Companion_getInstance();
  }
  function TimeProvider$Companion() {
    TimeProvider$Companion_instance = this;
  }
  TimeProvider$Companion.prototype.now = function () {
    return DateTime$Companion_getInstance().now();
  };
  function TimeProvider$Companion$invoke$ObjectLiteral(closure$callback) {
    this.closure$callback = closure$callback;
  }
  TimeProvider$Companion$invoke$ObjectLiteral.prototype.now = function () {
    return this.closure$callback();
  };
  TimeProvider$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TimeProvider]
  };
  TimeProvider$Companion.prototype.invoke_x2enld$ = function (callback) {
    return new TimeProvider$Companion$invoke$ObjectLiteral(callback);
  };
  TimeProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [TimeProvider]
  };
  var TimeProvider$Companion_instance = null;
  function TimeProvider$Companion_getInstance() {
    if (TimeProvider$Companion_instance === null) {
      new TimeProvider$Companion();
    }
    return TimeProvider$Companion_instance;
  }
  TimeProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TimeProvider',
    interfaces: []
  };
  var get_nanoseconds = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_nanoseconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromNanoseconds_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_microseconds = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_microseconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_milliseconds = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_milliseconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_seconds = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_seconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_minutes = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_minutes_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_hours = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_hours_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromHours_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_days = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_days_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromDays_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_weeks = defineInlineFunction('klock-root-klock.com.soywiz.klock.get_weeks_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return TimeSpan.Companion.fromWeeks_14dthe$(numberToDouble($receiver));
    };
  }));
  function TimeSpan(milliseconds) {
    TimeSpan$Companion_getInstance();
    this.milliseconds = milliseconds;
  }
  Object.defineProperty(TimeSpan.prototype, 'nanoseconds', {
    get: function () {
      return this.milliseconds / TimeSpan$Companion_getInstance().MILLIS_PER_NANOSECOND_0;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'microseconds', {
    get: function () {
      return this.milliseconds / TimeSpan$Companion_getInstance().MILLIS_PER_MICROSECOND_0;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'seconds', {
    get: function () {
      return this.milliseconds / 1000;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'minutes', {
    get: function () {
      return this.milliseconds / 60000;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'hours', {
    get: function () {
      return this.milliseconds / 3600000;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'days', {
    get: function () {
      return this.milliseconds / 86400000;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'weeks', {
    get: function () {
      return this.milliseconds / 604800000;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'millisecondsLong', {
    get: function () {
      return Kotlin.Long.fromNumber(this.milliseconds);
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'millisecondsInt', {
    get: function () {
      return numberToInt(this.milliseconds);
    }
  });
  TimeSpan.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.compareTo(this.milliseconds, other.milliseconds);
  };
  TimeSpan.prototype.unaryMinus = function () {
    return new TimeSpan(-this.milliseconds);
  };
  TimeSpan.prototype.unaryPlus = function () {
    return new TimeSpan(+this.milliseconds);
  };
  TimeSpan.prototype.plus_fv8bff$ = function (other) {
    return new TimeSpan(this.milliseconds + other.milliseconds);
  };
  TimeSpan.prototype.plus_glepj8$ = function (other) {
    return new DateTimeSpan(other, this);
  };
  TimeSpan.prototype.plus_5gml0z$ = function (other) {
    return new DateTimeSpan(other.monthSpan, other.timeSpan.plus_fv8bff$(this));
  };
  TimeSpan.prototype.minus_fv8bff$ = function (other) {
    return this.plus_fv8bff$(other.unaryMinus());
  };
  TimeSpan.prototype.minus_glepj8$ = function (other) {
    return this.plus_glepj8$(other.unaryMinus());
  };
  TimeSpan.prototype.minus_5gml0z$ = function (other) {
    return this.plus_5gml0z$(other.unaryMinus());
  };
  TimeSpan.prototype.times_za3lpa$ = function (scale) {
    return new TimeSpan(this.milliseconds * scale);
  };
  TimeSpan.prototype.times_14dthe$ = function (scale) {
    return new TimeSpan(this.milliseconds * scale);
  };
  TimeSpan.prototype.div_fv8bff$ = function (other) {
    return this.milliseconds / other.milliseconds;
  };
  TimeSpan.prototype.rem_fv8bff$ = function (other) {
    var $receiver = this.milliseconds % other.milliseconds;
    return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
  };
  function TimeSpan$Companion() {
    TimeSpan$Companion_instance = this;
    this.MILLIS_PER_MICROSECOND_0 = 1.0 / 1000.0;
    this.MILLIS_PER_NANOSECOND_0 = this.MILLIS_PER_MICROSECOND_0 / 1000.0;
    this.ZERO = new TimeSpan(0.0);
    this.NULL = new TimeSpan(kotlin_js_internal_DoubleCompanionObject.NaN);
    this.timeSteps_0 = listOf([60, 60, 24]);
  }
  TimeSpan$Companion.prototype.fromMilliseconds_14dthe$ = function (ms) {
    if (ms === 0.0)
      return this.ZERO;
    else
      return new TimeSpan(ms);
  };
  TimeSpan$Companion.prototype.fromNanoseconds_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * this.MILLIS_PER_NANOSECOND_0);
  };
  TimeSpan$Companion.prototype.fromMicroseconds_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * this.MILLIS_PER_MICROSECOND_0);
  };
  TimeSpan$Companion.prototype.fromSeconds_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * 1000);
  };
  TimeSpan$Companion.prototype.fromMinutes_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * 60000);
  };
  TimeSpan$Companion.prototype.fromHours_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * 3600000);
  };
  TimeSpan$Companion.prototype.fromDays_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * 86400000);
  };
  TimeSpan$Companion.prototype.fromWeeks_14dthe$ = function (s) {
    return this.fromMilliseconds_14dthe$(s * 604800000);
  };
  TimeSpan$Companion.prototype.toTimeStringRaw_0 = function (totalMilliseconds, components) {
    if (components === void 0)
      components = 3;
    var tmp$;
    var x = totalMilliseconds / 1000.0;
    var timeUnit = numberToInt(Math_0.floor(x));
    var out = ArrayList_init_0();
    for (var n = 0; n < components; n++) {
      if (n === (components - 1 | 0)) {
        var element = padded(timeUnit, 2);
        out.add_11rb$(element);
        break;
      }
      tmp$ = getOrNull(this.timeSteps_0, n);
      if (tmp$ == null) {
        throw RuntimeException_init('Just supported ' + this.timeSteps_0.size + ' steps');
      }
      var step = tmp$;
      var cunit = timeUnit % step;
      timeUnit = timeUnit / step | 0;
      var element_0 = padded(cunit, 2);
      out.add_11rb$(element_0);
    }
    return joinToString(reversed(out), ':');
  };
  TimeSpan$Companion.prototype.toTimeString_87xbef$ = function (totalMilliseconds, components, addMilliseconds) {
    if (components === void 0)
      components = 3;
    if (addMilliseconds === void 0)
      addMilliseconds = false;
    var milliseconds = numberToInt(totalMilliseconds % 1000);
    var out = this.toTimeStringRaw_0(totalMilliseconds, components);
    return addMilliseconds ? out + '.' + milliseconds : out;
  };
  TimeSpan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeSpan$Companion_instance = null;
  function TimeSpan$Companion_getInstance() {
    if (TimeSpan$Companion_instance === null) {
      new TimeSpan$Companion();
    }
    return TimeSpan$Companion_instance;
  }
  TimeSpan.prototype.toString = function () {
    return get_niceStr(this.milliseconds) + 'ms';
  };
  TimeSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeSpan',
    interfaces: [Comparable]
  };
  TimeSpan.prototype.unbox = function () {
    return this.milliseconds;
  };
  TimeSpan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.milliseconds) | 0;
    return result;
  };
  TimeSpan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.milliseconds, other.milliseconds))));
  };
  function toTimeString($receiver, components, addMilliseconds) {
    if (components === void 0)
      components = 3;
    if (addMilliseconds === void 0)
      addMilliseconds = false;
    return TimeSpan$Companion_getInstance().toTimeString_87xbef$($receiver.milliseconds, components, addMilliseconds);
  }
  function max_0(a, b) {
    var a_0 = a.milliseconds;
    var b_0 = b.milliseconds;
    var $receiver = Math_0.max(a_0, b_0);
    return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
  }
  function min_0(a, b) {
    var a_0 = a.milliseconds;
    var b_0 = b.milliseconds;
    var $receiver = Math_0.min(a_0, b_0);
    return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
  }
  function clamp_0($receiver, min, max) {
    if ($receiver.compareTo_11rb$(min) < 0)
      return min;
    else if ($receiver.compareTo_11rb$(max) > 0)
      return max;
    else
      return $receiver;
  }
  function TimezoneNames(namesToOffsets) {
    TimezoneNames$Companion_getInstance();
    this.namesToOffsets = namesToOffsets;
  }
  TimezoneNames.prototype.plus_7p84kh$ = function (other) {
    return new TimezoneNames(plus_0(this.namesToOffsets, other.namesToOffsets));
  };
  function TimezoneNames$Companion() {
    TimezoneNames$Companion_instance = this;
    this.DEFAULT = TimezoneNames_init([to('PDT', TimeSpan.Companion.fromHours_14dthe$(numberToDouble(-7))), to('PST', TimeSpan.Companion.fromHours_14dthe$(numberToDouble(-8))), to('GMT', TimeSpan.Companion.fromHours_14dthe$(numberToDouble(0))), to('UTC', TimeSpan.Companion.fromHours_14dthe$(numberToDouble(0)))]);
  }
  TimezoneNames$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimezoneNames$Companion_instance = null;
  function TimezoneNames$Companion_getInstance() {
    if (TimezoneNames$Companion_instance === null) {
      new TimezoneNames$Companion();
    }
    return TimezoneNames$Companion_instance;
  }
  TimezoneNames.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimezoneNames',
    interfaces: []
  };
  function TimezoneNames_init(tz, $this) {
    $this = $this || Object.create(TimezoneNames.prototype);
    TimezoneNames.call($this, toMap(tz));
    return $this;
  }
  TimezoneNames.prototype.component1 = function () {
    return this.namesToOffsets;
  };
  TimezoneNames.prototype.copy_ku5ca8$ = function (namesToOffsets) {
    return new TimezoneNames(namesToOffsets === void 0 ? this.namesToOffsets : namesToOffsets);
  };
  TimezoneNames.prototype.toString = function () {
    return 'TimezoneNames(namesToOffsets=' + Kotlin.toString(this.namesToOffsets) + ')';
  };
  TimezoneNames.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namesToOffsets) | 0;
    return result;
  };
  TimezoneNames.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.namesToOffsets, other.namesToOffsets))));
  };
  function TimezoneOffset(totalMilliseconds) {
    TimezoneOffset$Companion_getInstance();
    this.totalMilliseconds = totalMilliseconds;
  }
  Object.defineProperty(TimezoneOffset.prototype, 'positive', {
    get: function () {
      return this.totalMilliseconds >= 0.0;
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'time', {
    get: function () {
      var $receiver = this.totalMilliseconds;
      return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'totalMinutes', {
    get: function () {
      return this.totalMilliseconds / 60000;
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'totalMinutesInt', {
    get: function () {
      return numberToInt(this.totalMinutes);
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'timeZone', {
    get: function () {
      var tmp$;
      var sign = this.positive ? '+' : '-';
      var hour = padded(this.deltaHoursAbs_8be2vx$, 2);
      var minute = padded(this.deltaMinutesAbs_8be2vx$, 2);
      return ((tmp$ = this.time) != null ? tmp$.equals(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(0))) : null) ? 'UTC' : 'GMT' + sign + hour + minute;
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'deltaTotalMinutesAbs_0', {
    get: function () {
      return abs(numberToInt(this.totalMinutes));
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'deltaHoursAbs_8be2vx$', {
    get: function () {
      return this.deltaTotalMinutesAbs_0 / 60 | 0;
    }
  });
  Object.defineProperty(TimezoneOffset.prototype, 'deltaMinutesAbs_8be2vx$', {
    get: function () {
      return this.deltaTotalMinutesAbs_0 % 60;
    }
  });
  TimezoneOffset.prototype.toString = function () {
    return this.timeZone;
  };
  function TimezoneOffset$Companion() {
    TimezoneOffset$Companion_instance = this;
  }
  TimezoneOffset$Companion.prototype.invoke_fv8bff$ = function (time) {
    return new TimezoneOffset(time.milliseconds);
  };
  TimezoneOffset$Companion.prototype.local_mw5vjr$ = function (time) {
    return get_offset(KlockInternal_getInstance().localTimezoneOffsetMinutes_mw5vjr$(time));
  };
  TimezoneOffset$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimezoneOffset$Companion_instance = null;
  function TimezoneOffset$Companion_getInstance() {
    if (TimezoneOffset$Companion_instance === null) {
      new TimezoneOffset$Companion();
    }
    return TimezoneOffset$Companion_instance;
  }
  TimezoneOffset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimezoneOffset',
    interfaces: []
  };
  TimezoneOffset.prototype.unbox = function () {
    return this.totalMilliseconds;
  };
  TimezoneOffset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.totalMilliseconds) | 0;
    return result;
  };
  TimezoneOffset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.totalMilliseconds, other.totalMilliseconds))));
  };
  function get_offset($receiver) {
    return TimezoneOffset$Companion_getInstance().invoke_fv8bff$($receiver);
  }
  function Year(year) {
    Year$Companion_getInstance();
    this.year = year;
  }
  function Year$Companion() {
    Year$Companion_instance = this;
    this.DAYS_COMMON = 365;
    this.DAYS_LEAP = 366;
    this.LEAP_PER_4_YEARS_0 = 1;
    this.LEAP_PER_100_YEARS_0 = 24;
    this.LEAP_PER_400_YEARS_0 = 97;
    this.DAYS_PER_4_YEARS_0 = 1461;
    this.DAYS_PER_100_YEARS_0 = 36524;
    this.DAYS_PER_400_YEARS_0 = 146097;
  }
  Year$Companion.prototype.checked_za3lpa$ = function (year) {
    if (!(1 <= year && year <= 9999))
      throw new DateException('Year ' + year + ' not in 1..9999');
    return year;
  };
  Year$Companion.prototype.isLeapChecked_za3lpa$ = function (year) {
    return this.isLeap_za3lpa$(this.checked_za3lpa$(year));
  };
  Year$Companion.prototype.isLeap_za3lpa$ = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };
  Year$Companion.prototype.fromDays_za3lpa$ = function (days) {
    var v400 = days / 146097 | 0;
    var r400 = days - (v400 * 146097 | 0) | 0;
    var a = r400 / 36524 | 0;
    var v100 = Math_0.min(a, 3);
    var r100 = r400 - (v100 * 36524 | 0) | 0;
    var v4 = r100 / 1461 | 0;
    var r4 = r100 - (v4 * 1461 | 0) | 0;
    var a_0 = r4 / 365 | 0;
    var v1 = Math_0.min(a_0, 3);
    return new Year(1 + v1 + (v4 * 4 | 0) + (v100 * 100 | 0) + (v400 * 400 | 0) | 0);
  };
  Year$Companion.prototype.days_6taknv$ = function (isLeap) {
    return isLeap ? 366 : 365;
  };
  Year$Companion.prototype.leapCountSinceOne_za3lpa$ = function (year) {
    return ((year - 1 | 0) / 4 | 0) - ((year - 1 | 0) / 100 | 0) + ((year - 1 | 0) / 400 | 0) | 0;
  };
  Year$Companion.prototype.daysSinceOne_za3lpa$ = function (year) {
    return (365 * (year - 1 | 0) | 0) + this.leapCountSinceOne_za3lpa$(year) | 0;
  };
  Year$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Year$Companion_instance = null;
  function Year$Companion_getInstance() {
    if (Year$Companion_instance === null) {
      new Year$Companion();
    }
    return Year$Companion_instance;
  }
  Object.defineProperty(Year.prototype, 'isLeapChecked', {
    get: function () {
      return Year$Companion_getInstance().isLeapChecked_za3lpa$(this.year);
    }
  });
  Object.defineProperty(Year.prototype, 'isLeap', {
    get: function () {
      return Year$Companion_getInstance().isLeap_za3lpa$(this.year);
    }
  });
  Object.defineProperty(Year.prototype, 'days', {
    get: function () {
      return Year$Companion_getInstance().days_6taknv$(this.isLeap);
    }
  });
  Object.defineProperty(Year.prototype, 'leapCountSinceOne', {
    get: function () {
      return Year$Companion_getInstance().leapCountSinceOne_za3lpa$(this.year);
    }
  });
  Object.defineProperty(Year.prototype, 'daysSinceOne', {
    get: function () {
      return Year$Companion_getInstance().daysSinceOne_za3lpa$(this.year);
    }
  });
  Year.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.year, other.year);
  };
  Year.prototype.plus_za3lpa$ = function (delta) {
    return new Year(this.year + delta | 0);
  };
  Year.prototype.minus_za3lpa$ = function (delta) {
    return new Year(this.year - delta | 0);
  };
  Year.prototype.minus_ccxljp$ = function (other) {
    return this.year - other.year | 0;
  };
  Year.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Year',
    interfaces: [Comparable]
  };
  Year.prototype.unbox = function () {
    return this.year;
  };
  Year.prototype.toString = function () {
    return 'Year(year=' + Kotlin.toString(this.year) + ')';
  };
  Year.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    return result;
  };
  Year.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.year, other.year))));
  };
  function YearMonth(internalPackedInfo) {
    YearMonth$Companion_getInstance();
    this.internalPackedInfo_8be2vx$ = internalPackedInfo;
  }
  function YearMonth$Companion() {
    YearMonth$Companion_instance = this;
  }
  YearMonth$Companion.prototype.invoke_wk05xp$ = function (year, month) {
    return YearMonth$Companion_getInstance().invoke_vux9f0$(year.year, month.index1);
  };
  YearMonth$Companion.prototype.invoke_bbks$ = function (year, month) {
    return YearMonth$Companion_getInstance().invoke_vux9f0$(year, month.index1);
  };
  YearMonth$Companion.prototype.invoke_vux9f0$ = function (year, month1) {
    return new YearMonth(year << 4 | month1 & 15);
  };
  YearMonth$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YearMonth$Companion_instance = null;
  function YearMonth$Companion_getInstance() {
    if (YearMonth$Companion_instance === null) {
      new YearMonth$Companion();
    }
    return YearMonth$Companion_instance;
  }
  Object.defineProperty(YearMonth.prototype, 'year', {
    get: function () {
      return new Year(this.yearInt);
    }
  });
  Object.defineProperty(YearMonth.prototype, 'yearInt', {
    get: function () {
      return this.internalPackedInfo_8be2vx$ >>> 4;
    }
  });
  Object.defineProperty(YearMonth.prototype, 'month', {
    get: function () {
      return Month$Companion_getInstance().get_za3lpa$(this.month1);
    }
  });
  Object.defineProperty(YearMonth.prototype, 'month1', {
    get: function () {
      return this.internalPackedInfo_8be2vx$ & 15;
    }
  });
  Object.defineProperty(YearMonth.prototype, 'days', {
    get: function () {
      return this.month.days_ccxljp$(this.year);
    }
  });
  Object.defineProperty(YearMonth.prototype, 'daysToStart', {
    get: function () {
      return this.month.daysToStart_ccxljp$(this.year);
    }
  });
  Object.defineProperty(YearMonth.prototype, 'daysToEnd', {
    get: function () {
      return this.month.daysToEnd_ccxljp$(this.year);
    }
  });
  YearMonth.prototype.plus_glepj8$ = function (span) {
    var tmp$;
    var newMonth = this.month1 + get_months_0(span) | 0;
    if (newMonth > 12)
      tmp$ = 1;
    else if (newMonth < 1)
      tmp$ = -1;
    else
      tmp$ = 0;
    var yearAdjust = tmp$;
    return YearMonth$Companion_getInstance().invoke_wk05xp$(new Year(this.yearInt + get_years_0(span) + yearAdjust | 0), Month$Companion_getInstance().get_za3lpa$(newMonth));
  };
  YearMonth.prototype.minus_glepj8$ = function (span) {
    return this.plus_glepj8$(span.unaryMinus());
  };
  YearMonth.prototype.toString = function () {
    return this.month.toString() + ' ' + this.yearInt;
  };
  YearMonth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YearMonth',
    interfaces: []
  };
  YearMonth.prototype.unbox = function () {
    return this.internalPackedInfo_8be2vx$;
  };
  YearMonth.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.internalPackedInfo_8be2vx$) | 0;
    return result;
  };
  YearMonth.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.internalPackedInfo_8be2vx$, other.internalPackedInfo_8be2vx$))));
  };
  function withMonth($receiver, month) {
    return YearMonth$Companion_getInstance().invoke_wk05xp$($receiver, month);
  }
  function withYear($receiver, year) {
    return YearMonth$Companion_getInstance().invoke_wk05xp$(year, $receiver);
  }
  var chainComparison = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.chainComparison_664pim$', function ($receiver, comparer) {
    return $receiver === 0 ? comparer() : $receiver;
  });
  var fastForEach = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.fastForEach_kf7q02$', function ($receiver, callback) {
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      callback($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
    }
  });
  var genericBinarySearch = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.genericBinarySearch_fn99ax$', wrapFunction(function () {
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
  function increment($receiver, key) {
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = 0;
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var value_0 = ensureNotNull($receiver.get_11rb$(key)) + 1 | 0;
    $receiver.put_xwzc9p$(key, value_0);
  }
  function MicroStrReader(str, offset) {
    if (offset === void 0)
      offset = 0;
    this.str = str;
    this.offset = offset;
  }
  Object.defineProperty(MicroStrReader.prototype, 'length', {
    get: function () {
      return this.str.length;
    }
  });
  Object.defineProperty(MicroStrReader.prototype, 'available', {
    get: function () {
      return this.str.length - this.offset | 0;
    }
  });
  Object.defineProperty(MicroStrReader.prototype, 'hasMore', {
    get: function () {
      return this.offset < this.str.length;
    }
  });
  Object.defineProperty(MicroStrReader.prototype, 'eof', {
    get: function () {
      return !this.hasMore;
    }
  });
  MicroStrReader.prototype.readChunk_o14v8n$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.MicroStrReader.readChunk_o14v8n$', function (callback) {
    var start = this.offset;
    callback();
    var end = this.offset;
    return this.str.substring(start, end);
  });
  MicroStrReader.prototype.peekCharOrZero = function () {
    return this.hasMore ? this.str.charCodeAt(this.offset) : 0;
  };
  MicroStrReader.prototype.peekChar = function () {
    return toBoxedChar(this.str.charCodeAt(this.offset));
  };
  MicroStrReader.prototype.readChar = function () {
    var tmp$;
    return toBoxedChar(this.str.charCodeAt((tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$)));
  };
  MicroStrReader.prototype.tryRead_s8itvh$ = function (expected) {
    if (this.eof || unboxChar(this.peekChar()) !== expected)
      return false;
    this.readChar();
    return true;
  };
  MicroStrReader.prototype.tryRead_61zpoe$ = function (expected) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (expected.length > this.available)
      return false;
    tmp$ = get_indices(expected);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var n = tmp$_0; n <= tmp$_1; n += tmp$_2)
      if (this.str.charCodeAt(this.offset + n | 0) !== expected.charCodeAt(n))
        return false;
    this.offset = this.offset + expected.length | 0;
    return true;
  };
  MicroStrReader.prototype.read_za3lpa$ = function (count) {
    var $receiver = this.str;
    var startIndex = this.offset;
    var endIndex = coerceAtMost(this.offset + count | 0, this.length);
    var $receiver_0 = $receiver.substring(startIndex, endIndex);
    this.offset = this.offset + $receiver_0.length | 0;
    return $receiver_0;
  };
  MicroStrReader.prototype.readRemaining = function () {
    return this.read_za3lpa$(this.available);
  };
  MicroStrReader.prototype.readInt_za3lpa$ = function (count) {
    return toInt(this.read_za3lpa$(count));
  };
  MicroStrReader.prototype.tryReadInt_za3lpa$ = function (count) {
    return toIntOrNull(this.read_za3lpa$(count));
  };
  MicroStrReader.prototype.tryReadDouble_za3lpa$ = function (count) {
    return toDoubleOrNull(replace(this.read_za3lpa$(count), 44, 46));
  };
  MicroStrReader.prototype.tryReadDouble = function () {
    var numCount = 0;
    var num = 0;
    var denCount = 0;
    var den = 0;
    var decimals = false;
    loop: while (this.hasMore) {
      var pc = unboxChar(this.peekChar());
      if (pc === 44) {
        if (numCount === 0) {
          return null;
        }
        decimals = true;
        this.readChar();
      }
       else if ((new CharRange(48, 57)).contains_mef7kx$(pc)) {
        var c = unboxChar(this.readChar());
        if (decimals) {
          denCount = denCount + 1 | 0;
          den = den * 10 | 0;
          den = den + (c - 48) | 0;
        }
         else {
          numCount = numCount + 1 | 0;
          num = num * 10 | 0;
          num = num + (c - 48) | 0;
        }
      }
       else {
        break loop;
      }
    }
    if (numCount === 0) {
      return null;
    }
    var tmp$ = num;
    var tmp$_0 = den;
    var n = -denCount | 0;
    return tmp$ + tmp$_0 * Math_0.pow(10.0, n);
  };
  MicroStrReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MicroStrReader',
    interfaces: []
  };
  function get_niceStr($receiver) {
    return Math_0.floor($receiver) === $receiver ? numberToInt($receiver).toString() : $receiver.toString();
  }
  var MILLIS_PER_SECOND;
  var MILLIS_PER_MINUTE;
  var MILLIS_PER_HOUR;
  var MILLIS_PER_DAY;
  var MILLIS_PER_WEEK;
  function padded($receiver, count) {
    return padStart($receiver.toString(), count, 48);
  }
  function padded_0($receiver, intCount, decCount) {
    var intPart = numberToInt(Math_0.floor($receiver));
    var decPart = numberToInt(round(($receiver - intPart) * Math_0.pow(10.0, decCount)));
    return substr(padded(intPart, intCount), -intCount | 0, intCount) + '.' + substr(padEnd(decPart.toString(), decCount, 48), 0, decCount);
  }
  function substr($receiver, start, length) {
    var low = clamp_1(start >= 0 ? start : $receiver.length + start | 0, 0, $receiver.length);
    var high = clamp_1(length >= 0 ? low + length | 0 : $receiver.length + length | 0, 0, $receiver.length);
    return high < low ? '' : $receiver.substring(low, high);
  }
  function clamp_1($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function cycle($receiver, min, max) {
    return umod($receiver - min | 0, max - min + 1 | 0) + min | 0;
  }
  function cycleSteps($receiver, min, max) {
    return ($receiver - min | 0) / (max - min + 1 | 0) | 0;
  }
  function splitKeep($receiver, regex) {
    var tmp$;
    var str = $receiver;
    var out = ArrayList_init_0();
    var lastPos = 0;
    tmp$ = regex.findAll_905azu$($receiver).iterator();
    while (tmp$.hasNext()) {
      var part = tmp$.next();
      var prange = part.range;
      if (lastPos !== prange.start) {
        var startIndex = lastPos;
        var endIndex = prange.start;
        var element = str.substring(startIndex, endIndex);
        out.add_11rb$(element);
      }
      var element_0 = substring(str, prange);
      out.add_11rb$(element_0);
      lastPos = prange.endInclusive + 1 | 0;
    }
    if (lastPos !== str.length) {
      var startIndex_0 = lastPos;
      var element_1 = str.substring(startIndex_0);
      out.add_11rb$(element_1);
    }
    return out;
  }
  function umod($receiver, that) {
    var tmp$;
    var remainder = $receiver % that;
    if (remainder < 0)
      tmp$ = remainder + that | 0;
    else
      tmp$ = remainder;
    return tmp$;
  }
  function Moduler(value) {
    this.value = value;
    var x = this.value;
    this.avalue_0 = Math_0.abs(x);
    var x_0 = this.value;
    this.sign_0 = Math_0.sign(x_0);
  }
  Moduler.prototype.double_14dthe$ = function (count) {
    var ret = this.avalue_0 / count;
    this.avalue_0 %= count;
    return Math_0.floor(ret) * this.sign_0;
  };
  Moduler.prototype.double_3p81yu$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.Moduler.double_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (count) {
      return this.double_14dthe$(numberToDouble(count));
    };
  }));
  Moduler.prototype.int_3p81yu$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.Moduler.int_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function (count) {
      return numberToInt(this.double_14dthe$(numberToDouble(count)));
    };
  }));
  Moduler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Moduler',
    interfaces: []
  };
  function intDiv($receiver, other) {
    var x = $receiver / other;
    return Math_0.floor(x);
  }
  function utc(hours, minutes) {
    if (minutes === void 0)
      minutes = 0;
    return TimeSpan.Companion.fromHours_14dthe$(numberToDouble(hours)).plus_fv8bff$(TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble(minutes)));
  }
  var ExtendedTimezoneNames;
  function get_german($receiver) {
    return GermanKlockLocale$Companion_getInstance();
  }
  function GermanKlockLocale() {
    GermanKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_87fb6h$_0 = 'de';
    this.h12Marker_rj0k2n$_0 = listOf(['vorm.', 'nachm.']);
    this.firstDayOfWeek_4a4tev$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_e7leem$_0 = listOf(['sonntag', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag']);
    this.months_r22tj7$_0 = listOf(['januar', 'februar', 'm\xE4rz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember']);
    this.formatDateTimeMedium_i1wk6h$_0 = this.format_61zpoe$('dd.MM.y HH:mm:ss');
    this.formatDateTimeShort_cn1916$_0 = this.format_61zpoe$('dd.MM.yy HH:mm');
    this.formatDateFull_6lq8v8$_0 = this.format_61zpoe$('EEEE, d. MMMM y');
    this.formatDateLong_6ij9v5$_0 = this.format_61zpoe$('d. MMMM y');
    this.formatDateMedium_a2toq$_0 = this.format_61zpoe$('dd.MM.y');
    this.formatDateShort_ec8dal$_0 = this.format_61zpoe$('dd.MM.yy');
    this.formatTimeMedium_8ekn9l$_0 = this.format_61zpoe$('HH:mm:ss');
    this.formatTimeShort_inrsq4$_0 = this.format_61zpoe$('HH:mm');
  }
  function GermanKlockLocale$Companion() {
    GermanKlockLocale$Companion_instance = this;
    GermanKlockLocale.call(this);
  }
  GermanKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [GermanKlockLocale]
  };
  var GermanKlockLocale$Companion_instance = null;
  function GermanKlockLocale$Companion_getInstance() {
    if (GermanKlockLocale$Companion_instance === null) {
      new GermanKlockLocale$Companion();
    }
    return GermanKlockLocale$Companion_instance;
  }
  Object.defineProperty(GermanKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_87fb6h$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_rj0k2n$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_4a4tev$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_e7leem$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_r22tj7$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_i1wk6h$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_cn1916$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_6lq8v8$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_6ij9v5$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_a2toq$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_ec8dal$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_8ekn9l$_0;
    }
  });
  Object.defineProperty(GermanKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_inrsq4$_0;
    }
  });
  GermanKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GermanKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_spanish($receiver) {
    return SpanishKlockLocale$Companion_getInstance();
  }
  function SpanishKlockLocale() {
    SpanishKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_rvo1z9$_0 = 'es';
    this.h12Marker_po6y83$_0 = listOf(['a.m.', 'p.m.']);
    this.firstDayOfWeek_hgzfnt$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_tpgw7g$_0 = listOf(['domingo', 'lunes', 'martes', 'mi\xE9rcoles', 'jueves', 'viernes', 's\xE1bado']);
    this.months_xqv7z9$_0 = listOf(['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']);
    this.formatDateTimeMedium_iql4s9$_0 = this.format_61zpoe$('dd/MM/yyyy HH:mm:ss');
    this.formatDateTimeShort_p78fks$_0 = this.format_61zpoe$('dd/MM/yy HH:mm');
    this.formatDateFull_jskv46$_0 = this.format_61zpoe$("EEEE, d 'de' MMMM 'de' y");
    this.formatDateLong_jpdw43$_0 = this.format_61zpoe$("d 'de' MMMM 'de' y");
    this.formatDateMedium_wncyuk$_0 = this.format_61zpoe$('dd/MM/yyyy');
    this.formatDateShort_vmjjfz$_0 = this.format_61zpoe$('dd/MM/yy');
    this.formatTimeMedium_u999jp$_0 = this.format_61zpoe$('HH:mm:ss');
    this.formatTimeShort_z3133m$_0 = this.format_61zpoe$('HH:mm');
  }
  function SpanishKlockLocale$Companion() {
    SpanishKlockLocale$Companion_instance = this;
    SpanishKlockLocale.call(this);
  }
  SpanishKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SpanishKlockLocale]
  };
  var SpanishKlockLocale$Companion_instance = null;
  function SpanishKlockLocale$Companion_getInstance() {
    if (SpanishKlockLocale$Companion_instance === null) {
      new SpanishKlockLocale$Companion();
    }
    return SpanishKlockLocale$Companion_instance;
  }
  Object.defineProperty(SpanishKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_rvo1z9$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_po6y83$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_hgzfnt$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_tpgw7g$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_xqv7z9$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_iql4s9$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_p78fks$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_jskv46$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_jpdw43$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_wncyuk$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_vmjjfz$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_u999jp$_0;
    }
  });
  Object.defineProperty(SpanishKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_z3133m$_0;
    }
  });
  SpanishKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpanishKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_french($receiver) {
    return FrenchKlockLocale$Companion_getInstance();
  }
  function FrenchKlockLocale() {
    FrenchKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_w66x3n$_0 = 'fr';
    this.h12Marker_go7n1x$_0 = listOf(['AM', 'PM']);
    this.firstDayOfWeek_16ee0r$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_yuihsq$_0 = listOf(['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']);
    this.months_n8u5ih$_0 = listOf(['janvier', 'f\xE9vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'ao\xFBt', 'septembre', 'octobre', 'novembre', 'd\xE9cembre']);
    this.formatDateTimeMedium_gwljf9$_0 = this.format_61zpoe$('d MMM y HH:mm:ss');
    this.formatDateTimeShort_clnroy$_0 = this.format_61zpoe$('dd/MM/y HH:mm');
    this.formatDateFull_3hzth4$_0 = this.format_61zpoe$('EEEE d MMMM y');
    this.formatDateLong_3esuh1$_0 = this.format_61zpoe$('d MMMM y');
    this.formatDateMedium_wc8ym$_0 = this.format_61zpoe$('d MMM y');
    this.formatDateShort_vi8hi7$_0 = this.format_61zpoe$('dd/MM/y');
    this.formatTimeMedium_90u2jh$_0 = this.format_61zpoe$('HH:mm:ss');
    this.formatTimeShort_r6p22o$_0 = this.format_61zpoe$('HH:mm');
  }
  function FrenchKlockLocale$Companion() {
    FrenchKlockLocale$Companion_instance = this;
    FrenchKlockLocale.call(this);
  }
  FrenchKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [FrenchKlockLocale]
  };
  var FrenchKlockLocale$Companion_instance = null;
  function FrenchKlockLocale$Companion_getInstance() {
    if (FrenchKlockLocale$Companion_instance === null) {
      new FrenchKlockLocale$Companion();
    }
    return FrenchKlockLocale$Companion_instance;
  }
  Object.defineProperty(FrenchKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_w66x3n$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_go7n1x$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_16ee0r$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_yuihsq$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_n8u5ih$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_gwljf9$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_clnroy$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_3hzth4$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_3esuh1$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_wc8ym$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_vi8hi7$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_90u2jh$_0;
    }
  });
  Object.defineProperty(FrenchKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_r6p22o$_0;
    }
  });
  FrenchKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrenchKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_italian($receiver) {
    return ItalianKlockLocale$Companion_getInstance();
  }
  function ItalianKlockLocale() {
    ItalianKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_fav79j$_0 = 'it';
    this.h12Marker_yed0s1$_0 = listOf(['AM', 'PM']);
    this.firstDayOfWeek_6hi0lx$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_eb76gw$_0 = listOf(['domenica', 'luned\xEC', 'marted\xEC', 'mercoled\xEC', 'gioved\xEC', 'venerd\xEC', 'sabato']);
    this.months_y7j4nj$_0 = listOf(['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']);
    this.formatDateTimeMedium_xzkvet$_0 = this.format_61zpoe$('dd MMM y HH:mm:ss');
    this.formatDateTimeShort_gj90d4$_0 = this.format_61zpoe$('dd/MM/yy HH:mm');
    this.formatDateFull_8t3g2a$_0 = this.format_61zpoe$('EEEE d MMMM y');
    this.formatDateLong_8pwh27$_0 = this.format_61zpoe$('d MMMM y');
    this.formatDateMedium_bzxq88$_0 = this.format_61zpoe$('dd MMM y');
    this.formatDateShort_h0z86z$_0 = this.format_61zpoe$('dd/MM/yy');
    this.formatTimeMedium_3vfwnd$_0 = this.format_61zpoe$('HH:mm:ss');
    this.formatTimeShort_lcinmi$_0 = this.format_61zpoe$('HH:mm');
  }
  function ItalianKlockLocale$Companion() {
    ItalianKlockLocale$Companion_instance = this;
    ItalianKlockLocale.call(this);
  }
  ItalianKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ItalianKlockLocale]
  };
  var ItalianKlockLocale$Companion_instance = null;
  function ItalianKlockLocale$Companion_getInstance() {
    if (ItalianKlockLocale$Companion_instance === null) {
      new ItalianKlockLocale$Companion();
    }
    return ItalianKlockLocale$Companion_instance;
  }
  Object.defineProperty(ItalianKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_fav79j$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_yed0s1$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_6hi0lx$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_eb76gw$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_y7j4nj$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_xzkvet$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_gj90d4$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_8t3g2a$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_8pwh27$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_bzxq88$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_h0z86z$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_3vfwnd$_0;
    }
  });
  Object.defineProperty(ItalianKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_lcinmi$_0;
    }
  });
  ItalianKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItalianKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_japanese($receiver) {
    return JapaneseKlockLocale$Companion_getInstance();
  }
  function JapaneseKlockLocale() {
    JapaneseKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_f6z02s$_0 = 'ja';
    this.h12Marker_v1mtys$_0 = listOf(['\u5348\u524D', '\u5348\u5F8C']);
    this.firstDayOfWeek_vjsioe$_0 = DayOfWeek$Sunday_getInstance();
    this.daysOfWeek_nsh2al$_0 = listOf(['\u65E5\u66DC\u65E5', '\u6708\u66DC\u65E5', '\u706B\u66DC\u65E5', '\u6C34\u66DC\u65E5', '\u6728\u66DC\u65E5', '\u91D1\u66DC\u65E5', '\u571F\u66DC\u65E5']);
    this.months_ty44ni$_0 = listOf(['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708']);
    this.daysOfWeekShort_awo6wb$_0 = listOf(['\u65E5', '\u6708', '\u706B', '\u6C34', '\u6728', '\u91D1', '\u571F']);
    this.formatDateTimeMedium_fmk6hq$_0 = this.format_61zpoe$('y/MM/dd H:mm:ss');
    this.formatDateTimeShort_o0nkit$_0 = this.format_61zpoe$('y/MM/dd H:mm');
    this.formatDateFull_t87381$_0 = this.format_61zpoe$("y'\u5E74'M'\u6708'd'\u65E5'EEEE");
    this.formatDateLong_tbe284$_0 = this.format_61zpoe$("y'\u5E74'M'\u6708'd'\u65E5'");
    this.formatDateMedium_getoyd$_0 = this.format_61zpoe$('y/MM/dd');
    this.formatDateShort_bdv3ig$_0 = this.format_61zpoe$('y/MM/dd');
    this.formatTimeMedium_ojbij8$_0 = this.format_61zpoe$('H:mm:ss');
    this.formatTimeShort_72bo2x$_0 = this.format_61zpoe$('H:mm');
  }
  function JapaneseKlockLocale$Companion() {
    JapaneseKlockLocale$Companion_instance = this;
    JapaneseKlockLocale.call(this);
  }
  JapaneseKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [JapaneseKlockLocale]
  };
  var JapaneseKlockLocale$Companion_instance = null;
  function JapaneseKlockLocale$Companion_getInstance() {
    if (JapaneseKlockLocale$Companion_instance === null) {
      new JapaneseKlockLocale$Companion();
    }
    return JapaneseKlockLocale$Companion_instance;
  }
  Object.defineProperty(JapaneseKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_f6z02s$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_v1mtys$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_vjsioe$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_nsh2al$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_ty44ni$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'monthsShort', {
    get: function () {
      return this.months;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'daysOfWeekShort', {
    get: function () {
      return this.daysOfWeekShort_awo6wb$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_fmk6hq$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_o0nkit$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_t87381$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_tbe284$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_getoyd$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_bdv3ig$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_ojbij8$_0;
    }
  });
  Object.defineProperty(JapaneseKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_72bo2x$_0;
    }
  });
  JapaneseKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JapaneseKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_korean($receiver) {
    return KoreanKlockLocale$Companion_getInstance();
  }
  function KoreanKlockLocale() {
    KoreanKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_1mmcd3$_0 = 'ko';
    this.h12Marker_ybpba7$_0 = listOf(['\uC624\uC804', '\uC624\uD6C4']);
    this.firstDayOfWeek_ejp3ob$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_dttx4g$_0 = listOf(['\uC77C\uC694\uC77C', '\uC6D4\uC694\uC77C', '\uD654\uC694\uC77C', '\uC218\uC694\uC77C', '\uBAA9\uC694\uC77C', '\uAE08\uC694\uC77C', '\uD1A0\uC694\uC77C']);
    this.months_n28zi7$_0 = listOf(['1\uC6D4', '2\uC6D4', '3\uC6D4', '4\uC6D4', '5\uC6D4', '6\uC6D4', '7\uC6D4', '8\uC6D4', '9\uC6D4', '10\uC6D4', '11\uC6D4', '12\uC6D4']);
    this.daysOfWeekShort_u9abu0$_0 = listOf(['\uC77C', '\uC6D4', '\uD654', '\uC218', '\uBAA9', '\uAE08', '\uD1A0']);
    this.formatDateTimeMedium_uzfqtx$_0 = this.format_61zpoe$('y. M. d. a h:mm:ss');
    this.formatDateTimeShort_hxjtrs$_0 = this.format_61zpoe$('yy. M. d. a h:mm');
    this.formatDateFull_c83o7y$_0 = this.format_61zpoe$('y\uB144 M\uC6D4 d\uC77C EEEE');
    this.formatDateLong_cban81$_0 = this.format_61zpoe$('y\uB144 M\uC6D4 d\uC77C');
    this.formatDateMedium_iu4juw$_0 = this.format_61zpoe$('y. M. d.');
    this.formatDateShort_ts3f7v$_0 = this.format_61zpoe$('yy. M. d.');
    this.formatTimeMedium_qymdfr$_0 = this.format_61zpoe$('a h:mm:ss');
    this.formatTimeShort_y3mune$_0 = this.format_61zpoe$('a h:mm');
  }
  function KoreanKlockLocale$Companion() {
    KoreanKlockLocale$Companion_instance = this;
    KoreanKlockLocale.call(this);
  }
  KoreanKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KoreanKlockLocale]
  };
  var KoreanKlockLocale$Companion_instance = null;
  function KoreanKlockLocale$Companion_getInstance() {
    if (KoreanKlockLocale$Companion_instance === null) {
      new KoreanKlockLocale$Companion();
    }
    return KoreanKlockLocale$Companion_instance;
  }
  Object.defineProperty(KoreanKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_1mmcd3$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_ybpba7$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_ejp3ob$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_dttx4g$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_n28zi7$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'daysOfWeekShort', {
    get: function () {
      return this.daysOfWeekShort_u9abu0$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'monthsShort', {
    get: function () {
      return this.months;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_uzfqtx$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_hxjtrs$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_c83o7y$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_cban81$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_iu4juw$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_ts3f7v$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_qymdfr$_0;
    }
  });
  Object.defineProperty(KoreanKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_y3mune$_0;
    }
  });
  KoreanKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KoreanKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_dutch($receiver) {
    return DutchKlockLocale$Companion_getInstance();
  }
  function DutchKlockLocale() {
    DutchKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_tj3gb5$_0 = 'nl';
    this.h12Marker_5tc8hj$_0 = listOf(['a.m.', 'p.m.']);
    this.firstDayOfWeek_ile14z$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_hm2tuw$_0 = listOf(['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']);
    this.months_x86g9l$_0 = listOf(['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']);
    this.formatDateTimeMedium_4ddm3x$_0 = this.format_61zpoe$('d MMM y HH:mm:ss');
    this.formatDateTimeShort_isgets$_0 = this.format_61zpoe$('dd-MM-yy HH:mm');
    this.formatDateFull_g9slom$_0 = this.format_61zpoe$('EEEE d MMMM y');
    this.formatDateLong_gczkop$_0 = this.format_61zpoe$('d MMMM y');
    this.formatDateMedium_yo9rds$_0 = this.format_61zpoe$('d MMM y');
    this.formatDateShort_d6c4mb$_0 = this.format_61zpoe$('dd-MM-y');
    this.formatTimeMedium_qjrxsx$_0 = this.format_61zpoe$('HH:mm:ss');
    this.formatTimeShort_hhvk1u$_0 = this.format_61zpoe$('HH:mm');
  }
  function DutchKlockLocale$Companion() {
    DutchKlockLocale$Companion_instance = this;
    DutchKlockLocale.call(this);
  }
  DutchKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [DutchKlockLocale]
  };
  var DutchKlockLocale$Companion_instance = null;
  function DutchKlockLocale$Companion_getInstance() {
    if (DutchKlockLocale$Companion_instance === null) {
      new DutchKlockLocale$Companion();
    }
    return DutchKlockLocale$Companion_instance;
  }
  Object.defineProperty(DutchKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_tj3gb5$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_5tc8hj$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_ile14z$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_hm2tuw$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_x86g9l$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_4ddm3x$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_isgets$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_g9slom$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_gczkop$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_yo9rds$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_d6c4mb$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_qjrxsx$_0;
    }
  });
  Object.defineProperty(DutchKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_hhvk1u$_0;
    }
  });
  DutchKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DutchKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_portuguese($receiver) {
    return PortugueseKlockLocale$Companion_getInstance();
  }
  function PortugueseKlockLocale() {
    PortugueseKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_w3392g$_0 = 'pt';
    this.h12Marker_djlv4g$_0 = listOf(['AM', 'PM']);
    this.firstDayOfWeek_8o7n62$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_8wvhy7$_0 = listOf(['domingo', 'segunda-feira', 'ter\xE7a-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 's\xE1bado']);
    this.months_xd5c7m$_0 = listOf(['janeiro', 'fevereiro', 'mar\xE7o', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']);
    this.formatDateTimeMedium_5rnpei$_0 = this.format_61zpoe$("d 'de' MMM 'de' y HH:mm:ss");
    this.formatDateTimeShort_1i5mjb$_0 = this.format_61zpoe$('dd/MM/y HH:mm');
    this.formatDateFull_6cm7pp$_0 = this.format_61zpoe$("EEEE, d 'de' MMMM 'de' y");
    this.formatDateLong_6ft6ps$_0 = this.format_61zpoe$("d 'de' MMMM 'de' y");
    this.formatDateMedium_i5u6zr$_0 = this.format_61zpoe$("d 'de' MMM 'de' y");
    this.formatDateShort_a9pojo$_0 = this.format_61zpoe$('dd/MM/y');
  }
  function PortugueseKlockLocale$Companion() {
    PortugueseKlockLocale$Companion_instance = this;
    PortugueseKlockLocale.call(this);
  }
  PortugueseKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [PortugueseKlockLocale]
  };
  var PortugueseKlockLocale$Companion_instance = null;
  function PortugueseKlockLocale$Companion_getInstance() {
    if (PortugueseKlockLocale$Companion_instance === null) {
      new PortugueseKlockLocale$Companion();
    }
    return PortugueseKlockLocale$Companion_instance;
  }
  Object.defineProperty(PortugueseKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_w3392g$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_djlv4g$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_8o7n62$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_8wvhy7$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_xd5c7m$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_5rnpei$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_1i5mjb$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_6cm7pp$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_6ft6ps$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_i5u6zr$_0;
    }
  });
  Object.defineProperty(PortugueseKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_a9pojo$_0;
    }
  });
  PortugueseKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PortugueseKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_russian($receiver) {
    return RussianKlockLocale$Companion_getInstance();
  }
  function RussianKlockLocale() {
    RussianKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_fkjmpy$_0 = 'ru';
    this.h12Marker_r1wwu$_0 = listOf(['\u0414\u041F', '\u041F\u041F']);
    this.firstDayOfWeek_ljpslk$_0 = DayOfWeek$Monday_getInstance();
    this.daysOfWeek_82xbar$_0 = listOf(['\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435', '\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A', '\u0432\u0442\u043E\u0440\u043D\u0438\u043A', '\u0441\u0440\u0435\u0434\u0430', '\u0447\u0435\u0442\u0432\u0435\u0440\u0433', '\u043F\u044F\u0442\u043D\u0438\u0446\u0430', '\u0441\u0443\u0431\u0431\u043E\u0442\u0430']);
    this.months_dfl1d0$_0 = listOf(['\u044F\u043D\u0432\u0430\u0440\u044F', '\u0444\u0435\u0432\u0440\u0430\u043B\u044F', '\u043C\u0430\u0440\u0442\u0430', '\u0430\u043F\u0440\u0435\u043B\u044F', '\u043C\u0430\u044F', '\u0438\u044E\u043D\u044F', '\u0438\u044E\u043B\u044F', '\u0430\u0432\u0433\u0443\u0441\u0442\u0430', '\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F', '\u043E\u043A\u0442\u044F\u0431\u0440\u044F', '\u043D\u043E\u044F\u0431\u0440\u044F', '\u0434\u0435\u043A\u0430\u0431\u0440\u044F']);
    this.formatDateTimeMedium_hrp5q0$_0 = this.format_61zpoe$('d MMM y \u0433. H:mm:ss');
    this.formatDateTimeShort_g0eydh$_0 = this.format_61zpoe$('dd.MM.y H:mm');
    this.formatDateFull_nvb81x$_0 = this.format_61zpoe$('EEEE, d MMMM y \u0433.');
    this.formatDateLong_ns491u$_0 = this.format_61zpoe$('d MMMM y \u0433.');
    this.formatDateMedium_s5aqtx$_0 = this.format_61zpoe$('d MMM y \u0433.');
    this.formatDateShort_np1jn6$_0 = this.format_61zpoe$('dd.MM.y');
    this.formatTimeMedium_k0sx92$_0 = this.format_61zpoe$('H:mm:ss');
    this.formatTimeShort_jdi47n$_0 = this.format_61zpoe$('H:mm');
  }
  function RussianKlockLocale$Companion() {
    RussianKlockLocale$Companion_instance = this;
    RussianKlockLocale.call(this);
  }
  RussianKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [RussianKlockLocale]
  };
  var RussianKlockLocale$Companion_instance = null;
  function RussianKlockLocale$Companion_getInstance() {
    if (RussianKlockLocale$Companion_instance === null) {
      new RussianKlockLocale$Companion();
    }
    return RussianKlockLocale$Companion_instance;
  }
  Object.defineProperty(RussianKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_fkjmpy$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_r1wwu$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_ljpslk$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_82xbar$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_dfl1d0$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_hrp5q0$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_g0eydh$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_nvb81x$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_ns491u$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_s5aqtx$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_np1jn6$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_k0sx92$_0;
    }
  });
  Object.defineProperty(RussianKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_jdi47n$_0;
    }
  });
  RussianKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RussianKlockLocale',
    interfaces: [KlockLocale]
  };
  function get_chinese($receiver) {
    return ChineseKlockLocale$Companion_getInstance();
  }
  function ChineseKlockLocale() {
    ChineseKlockLocale$Companion_getInstance();
    KlockLocale.call(this);
    this.ISO639_1_6ojwrw$_0 = 'zh';
    this.h12Marker_7tmynw$_0 = listOf(['\u4E0A\u5348', '\u4E0B\u5348']);
    this.firstDayOfWeek_u5etlq$_0 = DayOfWeek$Sunday_getInstance();
    this.daysOfWeek_qdycct$_0 = listOf(['\u661F\u671F\u65E5', '\u661F\u671F\u4E00', '\u661F\u671F\u4E8C', '\u661F\u671F\u4E09', '\u661F\u671F\u56DB', '\u661F\u671F\u4E94', '\u661F\u671F\u516D']);
    this.months_nyhp36$_0 = listOf(['\u4E00\u6708', '\u4E8C\u6708', '\u4E09\u6708', '\u56DB\u6708', '\u4E94\u6708', '\u516D\u6708', '\u4E03\u6708', '\u516B\u6708', '\u4E5D\u6708', '\u5341\u6708', '\u5341\u4E00\u6708', '\u5341\u4E8C\u6708']);
    this.daysOfWeekShort_gqn9s5$_0 = listOf(['\u5468\u65E5', '\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94', '\u5468\u516D']);
    this.monthsShort_fc68x6$_0 = listOf(['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708']);
    this.formatDateTimeMedium_y6raz6$_0 = this.format_61zpoe$('y\u5E74M\u6708d\u65E5 ah:mm:ss');
    this.formatDateTimeShort_k4bget$_0 = this.format_61zpoe$('y/M/d ah:mm');
    this.formatDateFull_rtte5d$_0 = this.format_61zpoe$('y\u5E74M\u6708d\u65E5EEEE');
    this.formatDateLong_rx0d5g$_0 = this.format_61zpoe$('y\u5E74M\u6708d\u65E5');
    this.formatDateMedium_bpazlx$_0 = this.format_61zpoe$('y\u5E74M\u6708d\u65E5');
    this.formatDateShort_g9gd60$_0 = this.format_61zpoe$('y/M/d');
    this.formatTimeMedium_jtst6s$_0 = this.format_61zpoe$('h:mm:ss');
    this.formatTimeShort_kkzslj$_0 = this.format_61zpoe$('h:mm');
  }
  function ChineseKlockLocale$Companion() {
    ChineseKlockLocale$Companion_instance = this;
    ChineseKlockLocale.call(this);
  }
  ChineseKlockLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ChineseKlockLocale]
  };
  var ChineseKlockLocale$Companion_instance = null;
  function ChineseKlockLocale$Companion_getInstance() {
    if (ChineseKlockLocale$Companion_instance === null) {
      new ChineseKlockLocale$Companion();
    }
    return ChineseKlockLocale$Companion_instance;
  }
  Object.defineProperty(ChineseKlockLocale.prototype, 'ISO639_1', {
    get: function () {
      return this.ISO639_1_6ojwrw$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'h12Marker', {
    get: function () {
      return this.h12Marker_7tmynw$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'firstDayOfWeek', {
    get: function () {
      return this.firstDayOfWeek_u5etlq$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'daysOfWeek', {
    get: function () {
      return this.daysOfWeek_qdycct$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'months', {
    get: function () {
      return this.months_nyhp36$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'daysOfWeekShort', {
    get: function () {
      return this.daysOfWeekShort_gqn9s5$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'monthsShort', {
    get: function () {
      return this.monthsShort_fc68x6$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatDateTimeMedium', {
    get: function () {
      return this.formatDateTimeMedium_y6raz6$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatDateTimeShort', {
    get: function () {
      return this.formatDateTimeShort_k4bget$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatDateFull', {
    get: function () {
      return this.formatDateFull_rtte5d$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatDateLong', {
    get: function () {
      return this.formatDateLong_rx0d5g$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatDateMedium', {
    get: function () {
      return this.formatDateMedium_bpazlx$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatDateShort', {
    get: function () {
      return this.formatDateShort_g9gd60$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatTimeMedium', {
    get: function () {
      return this.formatTimeMedium_jtst6s$_0;
    }
  });
  Object.defineProperty(ChineseKlockLocale.prototype, 'formatTimeShort', {
    get: function () {
      return this.formatTimeShort_kkzslj$_0;
    }
  });
  ChineseKlockLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChineseKlockLocale',
    interfaces: [KlockLocale]
  };
  function klockAtomicLazy(initializer) {
    return lazy(initializer);
  }
  function klockLazyOrGet(initializer) {
    return lazy(initializer);
  }
  function KlockAtomicRef(initial) {
    this.value = initial;
  }
  KlockAtomicRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KlockAtomicRef',
    interfaces: []
  };
  function KlockLock() {
  }
  KlockLock.prototype.invoke_klfg04$ = defineInlineFunction('klock-root-klock.com.soywiz.klock.internal.KlockLock.invoke_klfg04$', function (callback) {
    return callback();
  });
  KlockLock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KlockLock',
    interfaces: []
  };
  var klockIsKotlinNative;
  function toDateTime($receiver) {
    return new DateTime($receiver.getTime());
  }
  function toDate($receiver) {
    return new Date($receiver.unixMillisDouble);
  }
  var isNode;
  function initialHrTime$lambda() {
    return process.hrtime();
  }
  var initialHrTime;
  function get_initialHrTime() {
    return initialHrTime.value;
  }
  function KlockInternal() {
    KlockInternal_instance = this;
  }
  Object.defineProperty(KlockInternal.prototype, 'currentTime', {
    get: function () {
      return Date.now();
    }
  });
  Object.defineProperty(KlockInternal.prototype, 'microClock', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (isNode) {
        var result = process.hrtime(get_initialHrTime());
        tmp$_0 = result[0] * 1000000;
        var x = typeof (tmp$ = result[1] / 1000) === 'number' ? tmp$ : throwCCE();
        tmp$_2 = typeof (tmp$_1 = tmp$_0 + Math_0.floor(x)) === 'number' ? tmp$_1 : throwCCE();
      }
       else {
        var x_0 = window.performance.now() * 1000;
        tmp$_2 = Math_0.floor(x_0);
      }
      return tmp$_2;
    }
  });
  KlockInternal.prototype.localTimezoneOffsetMinutes_mw5vjr$ = function (time) {
    var rtime = time.unixMillisDouble;
    var $receiver = -(new Date(rtime)).getTimezoneOffset();
    return TimeSpan.Companion.fromMinutes_14dthe$(numberToDouble($receiver));
  };
  KlockInternal.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KlockInternal',
    interfaces: []
  };
  var KlockInternal_instance = null;
  function KlockInternal_getInstance() {
    if (KlockInternal_instance === null) {
      new KlockInternal();
    }
    return KlockInternal_instance;
  }
  function toDateTime_0($receiver) {
    return new DateTime($receiver.getTime());
  }
  function toDate_0($receiver) {
    return new Date($receiver.unixMillisDouble);
  }
  Object.defineProperty(Date_0, 'Companion', {
    get: Date$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$klock = package$soywiz.klock || (package$soywiz.klock = {});
  package$klock.Date = Date_0;
  package$klock.plus_jav7ri$ = plus_1;
  package$klock.plus_j03k0f$ = plus_2;
  package$klock.plus_313fls$ = plus_3;
  package$klock.plus_nlzblk$ = plus_4;
  package$klock.DateException = DateException;
  Object.defineProperty(DateFormat, 'Companion', {
    get: DateFormat$Companion_getInstance
  });
  package$klock.DateFormat = DateFormat;
  package$klock.parse_mabgv2$ = parse;
  package$klock.parseUtc_mabgv2$ = parseUtc;
  package$klock.format_tgp00u$ = format;
  package$klock.format_94zki5$ = format_0;
  $$importsForInline$$['klock-root-klock'] = _;
  package$klock.format_x6wc0j$ = format_1;
  package$klock.format_h2n35s$ = format_2;
  Object.defineProperty(DateTime$Companion$DatePart, 'Year', {
    get: DateTime$Companion$DatePart$Year_getInstance
  });
  Object.defineProperty(DateTime$Companion$DatePart, 'DayOfYear', {
    get: DateTime$Companion$DatePart$DayOfYear_getInstance
  });
  Object.defineProperty(DateTime$Companion$DatePart, 'Month', {
    get: DateTime$Companion$DatePart$Month_getInstance
  });
  Object.defineProperty(DateTime$Companion$DatePart, 'Day', {
    get: DateTime$Companion$DatePart$Day_getInstance
  });
  DateTime$Companion.prototype.DatePart = DateTime$Companion$DatePart;
  Object.defineProperty(DateTime, 'Companion', {
    get: DateTime$Companion_getInstance
  });
  package$klock.DateTime = DateTime;
  package$klock.max_4p96hy$ = max;
  package$klock.min_4p96hy$ = min;
  package$klock.clamp_qlexwg$ = clamp;
  Object.defineProperty(DateTimeRange, 'Companion', {
    get: DateTimeRange$Companion_getInstance
  });
  package$klock.DateTimeRange_init_yn6b1d$ = DateTimeRange_init;
  package$klock.DateTimeRange = DateTimeRange;
  package$klock.toStringLongs_bmnfxk$ = toStringLongs;
  package$klock.rangeTo_68nrlv$ = rangeTo;
  package$klock.until_68nrlv$ = until_0;
  Object.defineProperty(DateTimeRangeSet, 'Companion', {
    get: DateTimeRangeSet$Companion_getInstance
  });
  Object.defineProperty(DateTimeRangeSet, 'Fast', {
    get: DateTimeRangeSet$Fast_getInstance
  });
  Object.defineProperty(DateTimeRangeSet, 'Slow', {
    get: DateTimeRangeSet$Slow_getInstance
  });
  package$klock.DateTimeRangeSet_init_4yh9xl$ = DateTimeRangeSet_init;
  package$klock.DateTimeRangeSet_init_r8ew1g$ = DateTimeRangeSet_init_0;
  package$klock.DateTimeRangeSet_init_arcm6d$ = DateTimeRangeSet_init_1;
  package$klock.DateTimeRangeSet = DateTimeRangeSet;
  package$klock.toRangeSet_7kbg5w$ = toRangeSet;
  package$klock.DateTimeSpan_init_7k5cs4$ = DateTimeSpan_init;
  package$klock.DateTimeSpan = DateTimeSpan;
  package$klock.DateTimeSpanFormat = DateTimeSpanFormat;
  package$klock.format_7rbe1s$ = format_3;
  package$klock.format_lolva9$ = format_4;
  package$klock.parse_xf9cft$ = parse_0;
  Object.defineProperty(DateTimeTz, 'Companion', {
    get: DateTimeTz$Companion_getInstance
  });
  package$klock.DateTimeTz = DateTimeTz;
  Object.defineProperty(DayOfWeek, 'Sunday', {
    get: DayOfWeek$Sunday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Monday', {
    get: DayOfWeek$Monday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Tuesday', {
    get: DayOfWeek$Tuesday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Wednesday', {
    get: DayOfWeek$Wednesday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Thursday', {
    get: DayOfWeek$Thursday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Friday', {
    get: DayOfWeek$Friday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Saturday', {
    get: DayOfWeek$Saturday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Companion', {
    get: DayOfWeek$Companion_getInstance
  });
  package$klock.DayOfWeek = DayOfWeek;
  Object.defineProperty(ISO8601$BaseIsoTimeFormat, 'Companion', {
    get: ISO8601$BaseIsoTimeFormat$Companion_getInstance
  });
  ISO8601.prototype.BaseIsoTimeFormat = ISO8601$BaseIsoTimeFormat;
  ISO8601.prototype.BaseIsoDateTimeFormat = ISO8601$BaseIsoDateTimeFormat;
  ISO8601.prototype.IsoIntervalFormat = ISO8601$IsoIntervalFormat;
  ISO8601.prototype.IsoTimeFormat = ISO8601$IsoTimeFormat;
  ISO8601.prototype.IsoDateTimeFormat = ISO8601$IsoDateTimeFormat;
  Object.defineProperty(package$klock, 'ISO8601', {
    get: ISO8601_getInstance
  });
  package$klock.first_ki4uhp$ = first_1;
  package$klock.get_weekOfYear0_m2ds6$ = get_weekOfYear0;
  package$klock.get_weekOfYear1_m2ds6$ = get_weekOfYear1;
  package$klock.get_weekOfYear0_ksqbhc$ = get_weekOfYear0_0;
  package$klock.get_weekOfYear1_ksqbhc$ = get_weekOfYear1_0;
  Object.defineProperty(KlockLocale, 'Companion', {
    get: KlockLocale$Companion_getInstance
  });
  Object.defineProperty(KlockLocale$English, 'Companion', {
    get: KlockLocale$English$Companion_getInstance
  });
  KlockLocale.English = KlockLocale$English;
  package$klock.KlockLocale = KlockLocale;
  package$klock.get_microseconds_rcaex3$ = get_microseconds;
  package$klock.measureTime_o14v8n$ = measureTime;
  package$klock.measureTimeWithResult_9ce4rd$ = measureTimeWithResult;
  package$klock.TimedResult = TimedResult;
  Object.defineProperty(Month, 'January', {
    get: Month$January_getInstance
  });
  Object.defineProperty(Month, 'February', {
    get: Month$February_getInstance
  });
  Object.defineProperty(Month, 'March', {
    get: Month$March_getInstance
  });
  Object.defineProperty(Month, 'April', {
    get: Month$April_getInstance
  });
  Object.defineProperty(Month, 'May', {
    get: Month$May_getInstance
  });
  Object.defineProperty(Month, 'June', {
    get: Month$June_getInstance
  });
  Object.defineProperty(Month, 'July', {
    get: Month$July_getInstance
  });
  Object.defineProperty(Month, 'August', {
    get: Month$August_getInstance
  });
  Object.defineProperty(Month, 'September', {
    get: Month$September_getInstance
  });
  Object.defineProperty(Month, 'October', {
    get: Month$October_getInstance
  });
  Object.defineProperty(Month, 'November', {
    get: Month$November_getInstance
  });
  Object.defineProperty(Month, 'December', {
    get: Month$December_getInstance
  });
  Object.defineProperty(Month, 'Companion', {
    get: Month$Companion_getInstance
  });
  package$klock.Month = Month;
  package$klock.get_years_s8ev3n$ = get_years;
  package$klock.get_months_s8ev3n$ = get_months;
  package$klock.MonthSpan = MonthSpan;
  package$klock.get_totalYears_h7vlot$ = get_totalYears;
  package$klock.get_years_h7vlot$ = get_years_0;
  package$klock.get_months_h7vlot$ = get_months_0;
  Object.defineProperty(PatternDateFormat$Options, 'Companion', {
    get: PatternDateFormat$Options$Companion_getInstance
  });
  PatternDateFormat.Options = PatternDateFormat$Options;
  package$klock.PatternDateFormat = PatternDateFormat;
  Object.defineProperty(package$klock, 'PerformanceCounter', {
    get: PerformanceCounter_getInstance
  });
  package$klock.SerializableDateTime = SerializableDateTime;
  package$klock.serializable_m2ds6$ = serializable;
  Object.defineProperty(Time, 'Companion', {
    get: Time$Companion_getInstance
  });
  package$klock.Time = Time;
  package$klock.plus_xup8wh$ = plus_5;
  package$klock.TimeFormat = TimeFormat;
  package$klock.parse_5ggku9$ = parse_1;
  Object.defineProperty(TimeProvider, 'Companion', {
    get: TimeProvider$Companion_getInstance
  });
  package$klock.TimeProvider = TimeProvider;
  package$klock.TimeSpan = TimeSpan;
  package$klock.get_nanoseconds_rcaex3$ = get_nanoseconds;
  package$klock.get_milliseconds_rcaex3$ = get_milliseconds;
  package$klock.get_seconds_rcaex3$ = get_seconds;
  package$klock.get_minutes_rcaex3$ = get_minutes;
  package$klock.get_hours_rcaex3$ = get_hours;
  package$klock.get_days_rcaex3$ = get_days;
  package$klock.get_weeks_rcaex3$ = get_weeks;
  Object.defineProperty(TimeSpan, 'Companion', {
    get: TimeSpan$Companion_getInstance
  });
  package$klock.toTimeString_l8uqez$ = toTimeString;
  package$klock.max_3e7z32$ = max_0;
  package$klock.min_3e7z32$ = min_0;
  package$klock.clamp_izocc4$ = clamp_0;
  Object.defineProperty(TimezoneNames, 'Companion', {
    get: TimezoneNames$Companion_getInstance
  });
  package$klock.TimezoneNames_init_sc3rw9$ = TimezoneNames_init;
  package$klock.TimezoneNames = TimezoneNames;
  Object.defineProperty(TimezoneOffset, 'Companion', {
    get: TimezoneOffset$Companion_getInstance
  });
  package$klock.TimezoneOffset = TimezoneOffset;
  package$klock.get_offset_5bmjl6$ = get_offset;
  Object.defineProperty(Year, 'Companion', {
    get: Year$Companion_getInstance
  });
  package$klock.Year = Year;
  Object.defineProperty(YearMonth, 'Companion', {
    get: YearMonth$Companion_getInstance
  });
  package$klock.YearMonth = YearMonth;
  package$klock.withMonth_t7apbq$ = withMonth;
  package$klock.withYear_5uaifm$ = withYear;
  var package$internal = package$klock.internal || (package$klock.internal = {});
  package$internal.chainComparison_664pim$ = chainComparison;
  package$internal.fastForEach_kf7q02$ = fastForEach;
  package$internal.genericBinarySearch_fn99ax$ = genericBinarySearch;
  package$internal.BSearchResult = BSearchResult;
  package$internal.increment_65gt2e$ = increment;
  package$internal.MicroStrReader = MicroStrReader;
  package$internal.get_niceStr_1zw1ma$ = get_niceStr;
  Object.defineProperty(package$internal, 'MILLIS_PER_SECOND_8be2vx$', {
    get: function () {
      return MILLIS_PER_SECOND;
    }
  });
  Object.defineProperty(package$internal, 'MILLIS_PER_MINUTE_8be2vx$', {
    get: function () {
      return MILLIS_PER_MINUTE;
    }
  });
  Object.defineProperty(package$internal, 'MILLIS_PER_HOUR_8be2vx$', {
    get: function () {
      return MILLIS_PER_HOUR;
    }
  });
  Object.defineProperty(package$internal, 'MILLIS_PER_DAY_8be2vx$', {
    get: function () {
      return MILLIS_PER_DAY;
    }
  });
  Object.defineProperty(package$internal, 'MILLIS_PER_WEEK_8be2vx$', {
    get: function () {
      return MILLIS_PER_WEEK;
    }
  });
  package$internal.padded_b6l1hq$ = padded;
  package$internal.padded_f8d7mm$ = padded_0;
  package$internal.substr_tfrq3m$ = substr;
  package$internal.clamp_h8snvo$ = clamp_1;
  package$internal.cycle_h8snvo$ = cycle;
  package$internal.cycleSteps_h8snvo$ = cycleSteps;
  package$internal.splitKeep_g9pw2j$ = splitKeep;
  package$internal.umod_b6l1hq$ = umod;
  package$internal.Moduler = Moduler;
  package$internal.intDiv_3ahkds$ = intDiv;
  var package$locale = package$klock.locale || (package$klock.locale = {});
  Object.defineProperty(package$locale, 'ExtendedTimezoneNames', {
    get: function () {
      return ExtendedTimezoneNames;
    }
  });
  package$locale.get_german_2fbxov$ = get_german;
  Object.defineProperty(GermanKlockLocale, 'Companion', {
    get: GermanKlockLocale$Companion_getInstance
  });
  package$locale.GermanKlockLocale = GermanKlockLocale;
  package$locale.get_spanish_2fbxov$ = get_spanish;
  Object.defineProperty(SpanishKlockLocale, 'Companion', {
    get: SpanishKlockLocale$Companion_getInstance
  });
  package$locale.SpanishKlockLocale = SpanishKlockLocale;
  package$locale.get_french_2fbxov$ = get_french;
  Object.defineProperty(FrenchKlockLocale, 'Companion', {
    get: FrenchKlockLocale$Companion_getInstance
  });
  package$locale.FrenchKlockLocale = FrenchKlockLocale;
  package$locale.get_italian_2fbxov$ = get_italian;
  Object.defineProperty(ItalianKlockLocale, 'Companion', {
    get: ItalianKlockLocale$Companion_getInstance
  });
  package$locale.ItalianKlockLocale = ItalianKlockLocale;
  package$locale.get_japanese_2fbxov$ = get_japanese;
  Object.defineProperty(JapaneseKlockLocale, 'Companion', {
    get: JapaneseKlockLocale$Companion_getInstance
  });
  package$locale.JapaneseKlockLocale = JapaneseKlockLocale;
  package$locale.get_korean_2fbxov$ = get_korean;
  Object.defineProperty(KoreanKlockLocale, 'Companion', {
    get: KoreanKlockLocale$Companion_getInstance
  });
  package$locale.KoreanKlockLocale = KoreanKlockLocale;
  package$locale.get_dutch_2fbxov$ = get_dutch;
  Object.defineProperty(DutchKlockLocale, 'Companion', {
    get: DutchKlockLocale$Companion_getInstance
  });
  package$locale.DutchKlockLocale = DutchKlockLocale;
  package$locale.get_portuguese_2fbxov$ = get_portuguese;
  Object.defineProperty(PortugueseKlockLocale, 'Companion', {
    get: PortugueseKlockLocale$Companion_getInstance
  });
  package$locale.PortugueseKlockLocale = PortugueseKlockLocale;
  package$locale.get_russian_2fbxov$ = get_russian;
  Object.defineProperty(RussianKlockLocale, 'Companion', {
    get: RussianKlockLocale$Companion_getInstance
  });
  package$locale.RussianKlockLocale = RussianKlockLocale;
  package$locale.get_chinese_2fbxov$ = get_chinese;
  Object.defineProperty(ChineseKlockLocale, 'Companion', {
    get: ChineseKlockLocale$Companion_getInstance
  });
  package$locale.ChineseKlockLocale = ChineseKlockLocale;
  package$internal.klockAtomicLazy_i3ch5z$ = klockAtomicLazy;
  package$internal.klockLazyOrGet_i3ch5z$ = klockLazyOrGet;
  package$internal.KlockAtomicRef = KlockAtomicRef;
  package$internal.KlockLock = KlockLock;
  Object.defineProperty(package$internal, 'klockIsKotlinNative_8be2vx$', {
    get: function () {
      return klockIsKotlinNative;
    }
  });
  package$internal.toDateTime_t5kl13$ = toDateTime;
  package$internal.toDate_m2ds6$ = toDate;
  Object.defineProperty(package$internal, 'KlockInternal', {
    get: KlockInternal_getInstance
  });
  var package$js = package$klock.js || (package$klock.js = {});
  package$js.toDateTime_t5kl13$ = toDateTime_0;
  package$js.toDate_m2ds6$ = toDate_0;
  ISO8601$BaseIsoDateTimeFormat.prototype.tryParse_ivxn3r$ = DateFormat.prototype.tryParse_ivxn3r$;
  ISO8601$IsoDateTimeFormat.prototype.tryParse_ivxn3r$ = DateFormat.prototype.tryParse_ivxn3r$;
  ISO8601$DATE$ObjectLiteral.prototype.tryParse_ivxn3r$ = DateFormat.prototype.tryParse_ivxn3r$;
  PatternDateFormat.prototype.tryParse_ivxn3r$ = DateFormat.prototype.tryParse_ivxn3r$;
  KlockLocale_default = KlockLocale$English$Companion_getInstance();
  MILLIS_PER_SECOND = 1000;
  MILLIS_PER_MINUTE = 60000;
  MILLIS_PER_HOUR = 3600000;
  MILLIS_PER_DAY = 86400000;
  MILLIS_PER_WEEK = 604800000;
  ExtendedTimezoneNames = TimezoneNames_init([to('ACDT', utc(10, 30)), to('ACST', utc(9, 30)), to('ACT', utc(-5)), to('ACWST', utc(8, 45)), to('ADT', utc(-3)), to('AEDT', utc(11)), to('AEST', utc(10)), to('AFT', utc(4, 30)), to('AKDT', utc(-8)), to('AKST', utc(-9)), to('ALMT', utc(6)), to('AMST', utc(-3)), to('AMT', utc(-4)), to('AMT', utc(4)), to('ANAT', utc(12)), to('AQTT', utc(5)), to('ART', utc(-3)), to('AST', utc(3)), to('AST', utc(-4)), to('AWST', utc(8)), to('AZOST', utc(0)), to('AZOT', utc(-1)), to('AZT', utc(4)), to('BDT', utc(8)), to('BIOT', utc(6)), to('BIT', utc(-12)), to('BOT', utc(-4)), to('BRST', utc(-2)), to('BRT', utc(-3)), to('BST', utc(6)), to('BST', utc(11)), to('BST', utc(1)), to('BTT', utc(6)), to('CAT', utc(2)), to('CCT', utc(6, 30)), to('CDT', utc(-5)), to('CDT', utc(-4)), to('CEST', utc(2)), to('CET', utc(1)), to('CHADT', utc(13, 45)), to('CHAST', utc(12, 45)), to('CHOT', utc(8)), to('CHOST', utc(9)), to('CHST', utc(10)), to('CHUT', utc(10)), to('CIST', utc(-8)), to('CIT', utc(8)), to('CKT', utc(-10)), to('CLST', utc(-3)), to('CLT', utc(-4)), to('COST', utc(-4)), to('COT', utc(-5)), to('CST', utc(-6)), to('CST', utc(8)), to('CST', utc(-5)), to('CT', utc(8)), to('CVT', utc(-1)), to('CWST', utc(8, 45)), to('CXT', utc(7)), to('DAVT', utc(7)), to('DDUT', utc(10)), to('DFT', utc(1)), to('EASST', utc(-5)), to('EAST', utc(-6)), to('EAT', utc(3)), to('ECT', utc(-4)), to('ECT', utc(-5)), to('EDT', utc(-4)), to('EEST', utc(3)), to('EET', utc(2)), to('EGST', utc(0)), to('EGT', utc(-1)), to('EIT', utc(9)), to('EST', utc(-5)), to('FET', utc(3)), to('FJT', utc(12)), to('FKST', utc(-3)), to('FKT', utc(-4)), to('FNT', utc(-2)), to('GALT', utc(-6)), to('GAMT', utc(-9)), to('GET', utc(4)), to('GFT', utc(-3)), to('GILT', utc(12)), to('GIT', utc(-9)), to('GMT', utc(0)), to('GST', utc(-2)), to('GST', utc(4)), to('GYT', utc(-4)), to('HDT', utc(-9)), to('HAEC', utc(2)), to('HST', utc(-10)), to('HKT', utc(8)), to('HMT', utc(5)), to('HOVST', utc(8)), to('HOVT', utc(7)), to('ICT', utc(7)), to('IDLW', utc(-12)), to('IDT', utc(3)), to('IOT', utc(3)), to('IRDT', utc(4, 30)), to('IRKT', utc(8)), to('IRST', utc(3, 30)), to('IST', utc(5, 30)), to('IST', utc(1)), to('IST', utc(2)), to('JST', utc(9)), to('KALT', utc(2)), to('KGT', utc(6)), to('KOST', utc(11)), to('KRAT', utc(7)), to('KST', utc(9)), to('LHST', utc(10, 30)), to('LHST', utc(11)), to('LINT', utc(14)), to('MAGT', utc(12)), to('MART', utc(-9, 30)), to('MAWT', utc(5)), to('MDT', utc(-6)), to('MET', utc(1)), to('MEST', utc(2)), to('MHT', utc(12)), to('MIST', utc(11)), to('MIT', utc(-9, 30)), to('MMT', utc(6, 30)), to('MSK', utc(3)), to('MST', utc(8)), to('MST', utc(-7)), to('MUT', utc(4)), to('MVT', utc(5)), to('MYT', utc(8)), to('NCT', utc(11)), to('NDT', utc(-2, 30)), to('NFT', utc(11)), to('NOVT', utc(7)), to('NPT', utc(5, 45)), to('NST', utc(-3, 30)), to('NT', utc(-3, 30)), to('NUT', utc(-11)), to('NZDT', utc(13)), to('NZST', utc(12)), to('OMST', utc(6)), to('ORAT', utc(5)), to('PDT', utc(-7)), to('PET', utc(-5)), to('PETT', utc(12)), to('PGT', utc(10)), to('PHOT', utc(13)), to('PHT', utc(8)), to('PKT', utc(5)), to('PMDT', utc(-2)), to('PMST', utc(-3)), to('PONT', utc(11)), to('PST', utc(-8)), to('PST', utc(8)), to('PYST', utc(-3)), to('PYT', utc(-4)), to('RET', utc(4)), to('ROTT', utc(-3)), to('SAKT', utc(11)), to('SAMT', utc(4)), to('SAST', utc(2)), to('SBT', utc(11)), to('SCT', utc(4)), to('SDT', utc(-10)), to('SGT', utc(8)), to('SLST', utc(5, 30)), to('SRET', utc(11)), to('SRT', utc(-3)), to('SST', utc(-11)), to('SST', utc(8)), to('SYOT', utc(3)), to('TAHT', utc(-10)), to('THA', utc(7)), to('TFT', utc(5)), to('TJT', utc(5)), to('TKT', utc(13)), to('TLT', utc(9)), to('TMT', utc(5)), to('TRT', utc(3)), to('TOT', utc(13)), to('TVT', utc(12)), to('ULAST', utc(9)), to('ULAT', utc(8)), to('UTC', utc(0)), to('UYST', utc(-2)), to('UYT', utc(-3)), to('UZT', utc(5)), to('VET', utc(-4)), to('VLAT', utc(10)), to('VOLT', utc(4)), to('VOST', utc(6)), to('VUT', utc(11)), to('WAKT', utc(12)), to('WAST', utc(2)), to('WAT', utc(1)), to('WEST', utc(1)), to('WET', utc(0)), to('WIT', utc(7)), to('WST', utc(8)), to('YAKT', utc(9)), to('YEKT', utc(5))]);
  klockIsKotlinNative = false;
  isNode = equals(typeof window, 'undefined');
  initialHrTime = klockAtomicLazy(initialHrTime$lambda);
  Kotlin.defineModule('klock-root-klock', _);
  return _;
}));

//# sourceMappingURL=klock-root-klock.js.map
