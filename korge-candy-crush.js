(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-root-korio', 'korim-root-korim', 'korge-root-korge', 'klock-root-klock', 'korma-root-korma', 'klogger-root-klogger', 'korgw-root-korgw', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-root-korio'), require('korim-root-korim'), require('korge-root-korge'), require('klock-root-klock'), require('korma-root-korma'), require('klogger-root-klogger'), require('korgw-root-korgw'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['klogger-root-klogger'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'klogger-root-klogger' was not found. Please, check whether 'klogger-root-klogger' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'korge-candy-crush'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korge-candy-crush'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korge-candy-crush'.");
    }
    root['korge-candy-crush'] = factory(typeof this['korge-candy-crush'] === 'undefined' ? {} : this['korge-candy-crush'], kotlin, this['korio-root-korio'], this['korim-root-korim'], this['korge-root-korge'], this['klock-root-klock'], this['korma-root-korma'], this['klogger-root-klogger'], this['korgw-root-korgw'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$korio_root_korio, $module$korim_root_korim, $module$korge_root_korge, $module$klock_root_klock, $module$korma_root_korma, $module$klogger_root_klogger, $module$korgw_root_korgw, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var Unit = Kotlin.kotlin.Unit;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Easing = $module$korma_root_korma.com.soywiz.korma.interpolation.Easing;
  var tween = $module$korge_root_korge.com.soywiz.korge.tween.tween_t8t7it$;
  var Angle = $module$korma_root_korma.com.soywiz.korma.geom.Angle;
  var numberToDouble = Kotlin.numberToDouble;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var _interpolateAngle = $module$korge_root_korge.com.soywiz.korge.tween._interpolateAngle_a0zjys$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge_root_korge.com.soywiz.korge.tween.V2;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var distanceTo = $module$korma_root_korma.com.soywiz.korma.geom.distanceTo_5jbsoh$;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var TouchComponent = $module$korge_root_korge.com.soywiz.korge.component.TouchComponent;
  var MouseComponent = $module$korge_root_korge.com.soywiz.korge.component.MouseComponent;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toString = Kotlin.toString;
  var Image = $module$korge_root_korge.com.soywiz.korge.view.Image;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Container = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var Array_0 = Array;
  var Math_0 = Math;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Logger = $module$klogger_root_klogger.com.soywiz.klogger.Logger;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var Logger$Level = $module$klogger_root_klogger.com.soywiz.klogger.Logger.Level;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Comparable = Kotlin.kotlin.Comparable;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var numberToInt = Kotlin.numberToInt;
  var sliceWithSize = $module$korim_root_korim.com.soywiz.korim.bitmap.sliceWithSize_or9s9z$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var bitmap = $module$korim_root_korim.com.soywiz.korim.bitmap;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var minus = $module$korma_root_korma.com.soywiz.korma.geom.minus_5jbsoh$;
  var IPoint = $module$korma_root_korma.com.soywiz.korma.geom.IPoint;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var first_1 = Kotlin.kotlin.text.first_gw00vp$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  var MouseButton = $module$korgw_root_korgw.com.soywiz.korev.MouseButton;
  var MouseEvent$Type = $module$korgw_root_korgw.com.soywiz.korev.MouseEvent.Type;
  var hide = $module$korge_root_korge.com.soywiz.korge.tween.hide_yz29kn$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var UpdateComponent = $module$korge_root_korge.com.soywiz.korge.component.UpdateComponent;
  var _interpolate = $module$korge_root_korge.com.soywiz.korge.tween._interpolate_yvo9jy$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var Key = $module$korgw_root_korgw.com.soywiz.korev.Key;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  GameFieldRenderer$CandyImage.prototype = Object.create(Image.prototype);
  GameFieldRenderer$CandyImage.prototype.constructor = GameFieldRenderer$CandyImage;
  GameFieldRenderer.prototype = Object.create(Container.prototype);
  GameFieldRenderer.prototype.constructor = GameFieldRenderer;
  Tile.prototype = Object.create(Enum.prototype);
  Tile.prototype.constructor = Tile;
  function CandySprites(x, y, spriteSize, columns, rows, bitmap) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (spriteSize === void 0)
      spriteSize = 16;
    this.sprites_0 = new SpriteBatch(x, y, spriteSize, columns, rows, bitmap);
    this.tilesMap = null;
  }
  CandySprites.prototype.getTile_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    var mappedIndex = (tmp$_0 = (tmp$ = this.tilesMap) != null ? tmp$.get_11rb$(index) : null) != null ? tmp$_0 : index;
    return this.sprites_0.get_za3lpa$(mappedIndex);
  };
  CandySprites.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CandySprites',
    interfaces: []
  };
  function image$lambda($receiver) {
    return Unit;
  }
  function KorgeLogo(view) {
    this.view_0 = view;
    this.minDegrees_0 = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(-16)));
    this.maxDegrees_0 = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(16)));
  }
  function Coroutine$addLogo($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$image = void 0;
  }
  Coroutine$addLogo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addLogo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addLogo.prototype.constructor = Coroutine$addLogo;
  Coroutine$addLogo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('korge.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var korgeBitmap = this.result_0;
            var $receiver = this.$this.view_0;
            var $receiver_0 = addTo(Image_init(korgeBitmap, 0.0, 0.0), $receiver);
            $receiver_0.rotation = this.$this.maxDegrees_0;
            $receiver_0.anchorX = numberToDouble(0.5);
            $receiver_0.anchorY = numberToDouble(0.5);
            $receiver_0.scaleX = numberToDouble(0.2);
            $receiver_0.scaleY = numberToDouble(0.2);
            $receiver_0.x = numberToDouble(1180);
            $receiver_0.y = numberToDouble(80);
            this.local$image = $receiver_0;
            this.state_0 = 3;
            continue;
          case 3:
            var $receiver_1 = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$image));
            var end = this.$this.minDegrees_0;
            this.state_0 = 4;
            this.result_0 = tween(this.local$image, [new V2_init($receiver_1, $receiver_1.get(), end, getCallableRef('_interpolateAngle', function (ratio, l, r) {
              return _interpolateAngle(ratio, l, r);
            }))], TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(2)), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_2 = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$image));
            var end_0 = this.$this.maxDegrees_0;
            this.state_0 = 5;
            this.result_0 = tween(this.local$image, [new V2_init($receiver_2, $receiver_2.get(), end_0, getCallableRef('_interpolateAngle', function (ratio, l, r) {
              return _interpolateAngle(ratio, l, r);
            }))], TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(2)), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 3;
            continue;
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
  KorgeLogo.prototype.addLogo = function (continuation_0, suspended) {
    var instance = new Coroutine$addLogo(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  KorgeLogo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeLogo',
    interfaces: []
  };
  function Coroutine$fruits(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$fruits.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fruits.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fruits.prototype.constructor = Coroutine$fruits;
  Coroutine$fruits.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('candy_fruits.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var candies = new CandySprites(void 0, void 0, 212, 5, 4, this.result_0);
            candies.tilesMap = mapOf([to(0, 0), to(1, 1), to(2, 2), to(3, 6), to(4, 10)]);
            return candies;
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
  function fruits(continuation_0, suspended) {
    var instance = new Coroutine$fruits(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$testTiles(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$testTiles.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$testTiles.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$testTiles.prototype.constructor = Coroutine$testTiles;
  Coroutine$testTiles.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('test_fruits.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new CandySprites(void 0, void 0, 212, 4, 2, this.result_0);
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
  function testTiles(continuation_0, suspended) {
    var instance = new Coroutine$testTiles(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function DragListener(view, maximumDragDistance, dragEventListener) {
    this.view_78zdba$_0 = view;
    this.maximumDragDistance_0 = maximumDragDistance;
    this.dragEventListener_0 = dragEventListener;
    this.start_0 = Point.Companion.Zero;
    this.end_0 = Point.Companion.Zero;
  }
  Object.defineProperty(DragListener.prototype, 'view', {
    get: function () {
      return this.view_78zdba$_0;
    }
  });
  DragListener.prototype.dragDistance_0 = function () {
    return distanceTo(this.start_0, this.end_0);
  };
  function DragListener$DragEvent(start, end) {
    this.start = start;
    this.end = end;
  }
  DragListener$DragEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragEvent',
    interfaces: []
  };
  DragListener$DragEvent.prototype.component1 = function () {
    return this.start;
  };
  DragListener$DragEvent.prototype.component2 = function () {
    return this.end;
  };
  DragListener$DragEvent.prototype.copy_v3tj7w$ = function (start, end) {
    return new DragListener$DragEvent(start === void 0 ? this.start : start, end === void 0 ? this.end : end);
  };
  DragListener$DragEvent.prototype.toString = function () {
    return 'DragEvent(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + ')';
  };
  DragListener$DragEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    return result;
  };
  DragListener$DragEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end)))));
  };
  DragListener.prototype.reset_0 = function () {
    this.start_0 = Point.Companion.Zero;
    this.end_0 = Point.Companion.Zero;
  };
  function DragListener$DragEventListener() {
  }
  DragListener$DragEventListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DragEventListener',
    interfaces: []
  };
  DragListener.prototype.onMouseEvent_y4dy1h$ = function (views, event) {
    switch (event.type.name) {
      case 'DOWN':
        this.start_0 = this.point_9bjyl1$(event);
        break;
      case 'DRAG':
      case 'MOVE':
        if (this.startedDrag_0()) {
          this.end_0 = this.point_9bjyl1$(event);
          if (this.dragDistance_0() > this.maximumDragDistance_0) {
            this.notifyDragListener_0();
            this.reset_0();
          }
        }

        break;
      case 'UP':
        this.end_0 = this.point_9bjyl1$(event);
        if (this.startedDrag_0()) {
          this.notifyDragListener_0();
          this.reset_0();
        }

        break;
    }
  };
  DragListener.prototype.point_9bjyl1$ = function ($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    return this.project_4l17gg$(new Point(numberToDouble(x), numberToDouble(y)));
  };
  DragListener.prototype.project_4l17gg$ = function (point) {
    return this.view.globalToLocalXY_aaz6cc$(point.x, point.y, point);
  };
  DragListener.prototype.startedDrag_0 = function () {
    return !equals(this.start_0, Point.Companion.Zero);
  };
  DragListener.prototype.notifyDragListener_0 = function () {
    this.dragEventListener_0.onDragEvent_5un67p$(new DragListener$DragEvent(this.start_0, this.end_0));
  };
  DragListener.prototype.onTouchEvent_665627$ = function (views, e) {
    switch (e.type.name) {
      case 'START':
        print('start');
        break;
      case 'MOVE':
        print('start');
        break;
      case 'END':
        print('end');
        var touch = first(e.touches);
        println(distanceTo(touch.start, touch.current));
        break;
    }
  };
  DragListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragListener',
    interfaces: [MouseComponent, TouchComponent]
  };
  function MoveTileEvent(posA, posB) {
  }
  MoveTileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveTileEvent',
    interfaces: []
  };
  function ToggleTileEvent(posA, posB) {
  }
  ToggleTileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleTileEvent',
    interfaces: []
  };
  function RemoveTileEvent(pos) {
  }
  RemoveTileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveTileEvent',
    interfaces: []
  };
  function AddTileEvent(pos) {
  }
  AddTileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddTileEvent',
    interfaces: []
  };
  function MoveTileListener() {
  }
  MoveTileListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MoveTileListener',
    interfaces: []
  };
  function DragTileListener() {
  }
  DragTileListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DragTileListener',
    interfaces: []
  };
  function IllegalToggleListener() {
  }
  IllegalToggleListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IllegalToggleListener',
    interfaces: []
  };
  function SwapTileListener() {
  }
  SwapTileListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SwapTileListener',
    interfaces: []
  };
  function RemoveTileListener() {
  }
  RemoveTileListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RemoveTileListener',
    interfaces: []
  };
  function AddTileListener() {
  }
  AddTileListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddTileListener',
    interfaces: []
  };
  function GameFieldRenderer(gameField, widthMax, heightMax, candies) {
    Container.call(this);
    this.gameField_0 = gameField;
    this.widthMax_0 = widthMax;
    this.candies_0 = candies;
    this.sizeFix_0 = 10;
    this.paddingFix_0 = -10;
    this.positionGrid = null;
    this.top_0 = 80;
    this.padding_0 = 20;
    this.paddings_0 = this.padding_0 * 2 | 0;
    this.maxHorizontal_0 = (this.widthMax_0 - this.paddings_0 | 0) / this.gameField_0.columnsSize | 0;
    this.maxVertical_0 = (heightMax - this.top_0 - this.paddings_0 | 0) / this.gameField_0.rowSize | 0;
    this.tileSize_0 = this.getMaxTileSize_0() - this.sizeFix_0 | 0;
    this.centerPadding_0 = this.calculateCenterPadding_0();
    this.tileScale_0 = 0.85;
    this.tileMap_0 = mapOf([to(0, 0), to(1, 1), to(2, 2), to(3, 6), to(4, 10)]);
    var array = Array_0(this.gameField_0.rowSize);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array_0(this.gameField_0.columnsSize);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = null;
      }
      array[i] = array_0;
    }
    this.tiles_0 = array;
    this.positionGrid = new PositionGrid(this.centerPadding_0 + this.paddingFix_0 | 0, this.top_0, this.gameField_0.columnsSize, this.gameField_0.rowSize, this.tileSize_0);
    this.updateImagesFromField();
  }
  GameFieldRenderer.prototype.getMaxTileSize_0 = function () {
    var a = this.maxHorizontal_0;
    var b = this.maxVertical_0;
    return Math_0.min(a, b);
  };
  GameFieldRenderer.prototype.calculateCenterPadding_0 = function () {
    var tilesWidth = Kotlin.imul(this.tileSize_0, this.gameField_0.columnsSize);
    return (this.widthMax_0 - tilesWidth | 0) / 2 | 0;
  };
  GameFieldRenderer.prototype.updateImagesFromField = function () {
    this.removeChildren();
    this.resetAllFields_0();
    var $receiver = this.gameField_0;
    var action = getCallableRef('addRow', function ($receiver, rowIndex, row) {
      return $receiver.addRow_0(rowIndex, row), Unit;
    }.bind(null, this));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      action(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)), item);
    }
  };
  GameFieldRenderer.prototype.resetAllFields_0 = function () {
    var tmp$;
    tmp$ = this.gameField_0.listAllPositions().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.tiles_0[element.row][element.column] = null;
    }
  };
  GameFieldRenderer.prototype.addRow_0 = function (rowIndex, row) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = row.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var columnIndex = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      if (item.isTile()) {
        this.addTile_0(columnIndex, rowIndex, item);
      }
    }
  };
  GameFieldRenderer.prototype.addTile_tts3q9$ = function (position, tile) {
    return this.addTile_0(position.column, position.row, tile);
  };
  GameFieldRenderer.prototype.addTile_0 = function (columnIndex, rowIndex, tile) {
    var tmp$;
    var pos = this.positionGrid.getCenterPosition_z8e4lc$(columnIndex, rowIndex);
    var bitmap = this.getTile_0(tile.index);
    var tileSize = this.tileSize_0 * this.tileScale_0;
    var image = new GameFieldRenderer$CandyImage(tileSize, pos, bitmap, tile);
    if (this.gameField_0.isNotOnField_vux9f0$(columnIndex, rowIndex)) {
      throw IllegalArgumentException_init('Image position is out of space: column:' + columnIndex + ',row:' + rowIndex + ' (' + this.gameField_0.columnsSize + '-' + this.gameField_0.rowSize + ')');
    }
    var oldTile = (tmp$ = this.tiles_0[rowIndex][columnIndex]) != null ? tmp$.tile : null;
    if ((oldTile != null ? oldTile.isTile() : null) === true) {
      throw IllegalArgumentException_init('Tried to overwrite tile ' + toString(oldTile) + ' with ' + tile + ':  ' + columnIndex + ',row:' + rowIndex + ' (' + this.gameField_0.columnsSize + '-' + this.gameField_0.rowSize + ')');
    }
    this.tiles_0[rowIndex][columnIndex] = image;
    this.addChild_l5rad2$(image);
    return image;
  };
  function GameFieldRenderer$CandyImage(tileSize, position, bitmap, tile) {
    Image.call(this, bitmap);
    this.tile = tile;
    this.anchorX = numberToDouble(0.5);
    this.anchorY = numberToDouble(0.5);
    this.width = numberToDouble(tileSize);
    this.height = numberToDouble(tileSize);
    var x = position.x;
    var y = position.y;
    this.x = numberToDouble(x);
    this.y = numberToDouble(y);
  }
  GameFieldRenderer$CandyImage.prototype.toString = function () {
    return '\n' + '\n' + ' ' + this.tile + ': (' + this.x + ',' + this.y + ')';
  };
  GameFieldRenderer$CandyImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CandyImage',
    interfaces: [Image]
  };
  GameFieldRenderer.prototype.getTile_0 = function (index) {
    return this.candies_0.getTile_za3lpa$(index);
  };
  GameFieldRenderer.prototype.getTile_1 = function (column, row) {
    var tmp$;
    tmp$ = this.tiles_0[row][column];
    if (tmp$ == null) {
      throw IllegalArgumentException_init('No tile image for: ' + column + ',' + row + '\n' + this.getLogDebugData_0());
    }
    return tmp$;
  };
  GameFieldRenderer.prototype.hasTile_0 = function (column, row) {
    return this.tiles_0[row][column] != null;
  };
  GameFieldRenderer.prototype.getLogDebugData_0 = function () {
    return 'images:' + '\n' + this.toString() + '\n' + 'fields:' + '\n' + this.gameField_0;
  };
  GameFieldRenderer.prototype.getTile_oav4bx$ = function (position) {
    return this.getTile_1(position.column, position.row);
  };
  GameFieldRenderer.prototype.hasTile_oav4bx$ = function (position) {
    return this.hasTile_0(position.column, position.row);
  };
  GameFieldRenderer.prototype.setTile_0 = function (tile, position) {
    this.tiles_0[position.row][position.column] = tile;
  };
  GameFieldRenderer.prototype.removeTile_0 = function (position) {
    this.removeImage_0(position);
    this.removeTileFromGrid_oav4bx$(position);
  };
  GameFieldRenderer.prototype.removeImage_0 = function (position) {
    this.removeChild_gohfih$(this.getTile_oav4bx$(position));
  };
  GameFieldRenderer.prototype.removeTileFromGrid_oav4bx$ = function (position) {
    this.setTile_0(null, position);
  };
  GameFieldRenderer.prototype.removeTiles_0 = function (positions) {
    var action = getCallableRef('removeTile', function ($receiver, position) {
      return $receiver.removeTile_0(position), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = positions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  };
  GameFieldRenderer.prototype.removeTilesCells_kzq6p$ = function (positions) {
    var destination = ArrayList_init(collectionSizeOrDefault(positions, 10));
    var tmp$;
    tmp$ = positions.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.position);
    }
    this.removeTiles_0(destination);
  };
  GameFieldRenderer.prototype.swapTiles_th10u$ = function (a, b) {
    var tileA = this.getTile_oav4bx$(a);
    var tileB = this.getTile_oav4bx$(b);
    this.setTile_0(tileA, b);
    this.setTile_0(tileB, a);
  };
  function GameFieldRenderer$toString$lambda$lambda(tile) {
    return tile.shortName();
  }
  function GameFieldRenderer$toString$lambda(this$GameFieldRenderer) {
    return function (row) {
      var $receiver = until(0, this$GameFieldRenderer.gameField_0.columnsSize);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0, tmp$_1;
        destination.add_11rb$((tmp$_1 = (tmp$_0 = this$GameFieldRenderer.tiles_0[row][item]) != null ? tmp$_0.tile : null) != null ? tmp$_1 : Tile$Hole_getInstance());
      }
      return '[' + joinToString(destination, ', ', void 0, void 0, void 0, void 0, GameFieldRenderer$toString$lambda$lambda) + ']';
    };
  }
  GameFieldRenderer.prototype.toString = function () {
    return joinToString(until(0, this.gameField_0.rowSize), '\n', void 0, void 0, void 0, void 0, GameFieldRenderer$toString$lambda(this));
  };
  GameFieldRenderer.prototype.move_v2epn7$ = function (move) {
    var tile = this.getTile_oav4bx$(move.tile);
    this.setTile_0(tile, move.target);
    this.setTile_0(null, move.tile);
  };
  GameFieldRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameFieldRenderer',
    interfaces: [Container]
  };
  function GameFlow(field, mechanics, animator) {
    GameFlow$Companion_getInstance();
    this.field = field;
    this.mechanics_0 = mechanics;
    this.animator_0 = animator;
  }
  function GameFlow$Companion() {
    GameFlow$Companion_instance = this;
    this.log = Logger.Companion.invoke_61zpoe$('GameFlow');
  }
  GameFlow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameFlow$Companion_instance = null;
  function GameFlow$Companion_getInstance() {
    if (GameFlow$Companion_instance === null) {
      new GameFlow$Companion();
    }
    return GameFlow$Companion_instance;
  }
  GameFlow.prototype.onDragTileEvent_th10u$ = function (posA, posB) {
    if (this.animator_0.isAnimationRunning()) {
      var $this = GameFlow$Companion_getInstance().log;
      var level = Logger$Level.DEBUG;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'Skipping drag event because of moving tiles (' + posA + '. ' + posB + ')');
      }
    }
     else if (this.field.get_oav4bx$(posA).isNotTile() || this.field.get_oav4bx$(posB).isNotTile()) {
      var $this_0 = GameFlow$Companion_getInstance().log;
      var level_0 = Logger$Level.DEBUG;
      if ($this_0.isEnabled_fs4ikx$(level_0)) {
        $this_0.actualLog_pwm3k3$(level_0, "Skipping drag event because one tile wasn't a tile (" + posA + '. ' + posB + ')');
      }
    }
     else if (this.mechanics_0.isSwapAllowed_th10u$(posA, posB)) {
      this.swapTiles_0(posA, posB);
    }
     else {
      this.animator_0.animateIllegalSwap_th10u$(posA, posB);
    }
  };
  function GameFlow$swapTiles$lambda$lambda(this$GameFlow) {
    return function (it) {
      this$GameFlow.checkNewField();
      return Unit;
    };
  }
  function GameFlow$swapTiles$lambda(this$GameFlow, closure$connectedTiles, closure$nextMoves, closure$newTileMoves) {
    return function (it) {
      this$GameFlow.animator_0.animateRemoveTiles_kzq6p$(closure$connectedTiles);
      this$GameFlow.animator_0.animateMoves_ame2ec$(closure$nextMoves);
      this$GameFlow.mechanics_0.insert_cklanf$(closure$newTileMoves);
      this$GameFlow.animator_0.animateInsert_cklanf$(closure$newTileMoves).invokeOnCompletion_f05bi3$(GameFlow$swapTiles$lambda$lambda(this$GameFlow));
      return Unit;
    };
  }
  GameFlow.prototype.swapTiles_0 = function (posA, posB) {
    this.mechanics_0.swapTiles_th10u$(posA, posB);
    var connectedTiles = this.mechanics_0.getConnectedTiles_th10u$(posA, posB);
    this.mechanics_0.removeTileCells_kzq6p$(connectedTiles);
    var nextMoves = this.mechanics_0.getNextMoves();
    var newTileMoves = this.getNewTileMoves_0();
    this.animator_0.animateSwap_th10u$(posA, posB).invokeOnCompletion_f05bi3$(GameFlow$swapTiles$lambda(this, connectedTiles, nextMoves, newTileMoves));
  };
  function GameFlow$checkNewField$lambda(this$GameFlow) {
    return function (it) {
      this$GameFlow.checkNewField();
      return Unit;
    };
  }
  GameFlow.prototype.checkNewField = function () {
    var horizontal = (new GameMechanics(this.field.clone())).getAndRemoveAllHorizontalRows();
    var vertical = (new GameMechanics(this.field.clone())).getAndRemoveAllVerticalRows();
    var tilesToRemove = plus(flatten(horizontal), flatten(vertical));
    if (!tilesToRemove.isEmpty()) {
      this.mechanics_0.removeTileCells_kzq6p$(tilesToRemove);
      this.animator_0.animateRemoveTiles_kzq6p$(tilesToRemove);
      var nextMoves = this.mechanics_0.getNextMoves();
      var newTileMoves = this.getNewTileMoves_0();
      this.animator_0.animateMoves_ame2ec$(nextMoves);
      this.mechanics_0.insert_cklanf$(newTileMoves);
      this.animator_0.animateInsert_cklanf$(newTileMoves).invokeOnCompletion_f05bi3$(GameFlow$checkNewField$lambda(this));
    }
  };
  function GameFlow$getNewTileMoves$lambda(it) {
    return Tile$Companion_getInstance().randomTile();
  }
  GameFlow.prototype.getNewTileMoves_0 = function () {
    return this.mechanics_0.getNewTileMoves_93tlaa$(GameFlow$getNewTileMoves$lambda);
  };
  GameFlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameFlow',
    interfaces: [DragTileListener]
  };
  function GameMechanics(field) {
    GameMechanics$Companion_getInstance();
    this.field_0 = field;
  }
  function GameMechanics$Companion() {
    GameMechanics$Companion_instance = this;
    this.log = Logger.Companion.invoke_61zpoe$('GameMechanics');
  }
  GameMechanics$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameMechanics$Companion_instance = null;
  function GameMechanics$Companion_getInstance() {
    if (GameMechanics$Companion_instance === null) {
      new GameMechanics$Companion();
    }
    return GameMechanics$Companion_instance;
  }
  GameMechanics.prototype.swapTiles_th10u$ = function (a, b) {
    var tileA = this.field_0.get_oav4bx$(a);
    var tileB = this.field_0.get_oav4bx$(b);
    this.field_0.set_tts3q9$(a, tileB);
    this.field_0.set_tts3q9$(b, tileA);
  };
  GameMechanics.prototype.isSwapAllowed_th10u$ = function (a, b) {
    this.swapTiles_th10u$(a, b);
    var isSwapAllowed = this.isInRowWithThree_oav4bx$(a) || this.isInRowWithThree_oav4bx$(b);
    var bothAreTiles = this.isTile_0(a) && this.isTile_0(b);
    this.swapTiles_th10u$(a, b);
    return bothAreTiles && isSwapAllowed;
  };
  GameMechanics.prototype.isInRowWithThree_oav4bx$ = function (pos) {
    return this.isHorizontalConnected_oav4bx$(pos) || this.isVerticalConnected_oav4bx$(pos);
  };
  GameMechanics.prototype.getConnectedTiles_oav4bx$ = function (pos) {
    return plus(this.getVerticalConnectedOrEmpty_oav4bx$(pos), this.getHorizontalConnectedOrEmpty_oav4bx$(pos));
  };
  GameMechanics.prototype.getConnectedTiles_th10u$ = function (a, b) {
    return plus(this.getConnectedTiles_oav4bx$(a), this.getConnectedTiles_oav4bx$(b));
  };
  GameMechanics.prototype.removeTile_oav4bx$ = function (position) {
    this.field_0.set_tts3q9$(position, Tile$Hole_getInstance());
  };
  GameMechanics.prototype.removeTiles_x7gbq4$ = function (positions) {
    var action = getCallableRef('removeTile', function ($receiver, position) {
      return $receiver.removeTile_oav4bx$(position), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = positions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  };
  GameMechanics.prototype.removeTileCells_kzq6p$ = function (positions) {
    var destination = ArrayList_init(collectionSizeOrDefault(positions, 10));
    var tmp$;
    tmp$ = positions.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.position);
    }
    this.removeTiles_x7gbq4$(destination);
  };
  GameMechanics.prototype.isHorizontalConnected_oav4bx$ = function (pos) {
    return !this.getHorizontalConnectedOrEmpty_oav4bx$(pos).isEmpty();
  };
  GameMechanics.prototype.getAndRemoveAllHorizontalRows = function () {
    var $receiver = this.field_0.listAllPositions();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var connected = this.getHorizontalConnectedOrEmpty_oav4bx$(item);
      this.removeTileCells_kzq6p$(connected);
      tmp$_0.call(destination, connected);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!element.isEmpty())
        destination_0.add_11rb$(element);
    }
    return destination_0;
  };
  GameMechanics.prototype.getAndRemoveAllVerticalRows = function () {
    var $receiver = this.field_0.listAllPositions();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var connected = this.getVerticalConnectedOrEmpty_oav4bx$(item);
      this.removeTileCells_kzq6p$(connected);
      tmp$_0.call(destination, connected);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!element.isEmpty())
        destination_0.add_11rb$(element);
    }
    return destination_0;
  };
  GameMechanics.prototype.getHorizontalConnectedOrEmpty_oav4bx$ = function (pos) {
    var horizontalConnected = this.getHorizontalSurroundings_oav4bx$(pos);
    return horizontalConnected.size < 3 ? emptyList() : horizontalConnected;
  };
  GameMechanics.prototype.getVerticalConnectedOrEmpty_oav4bx$ = function (pos) {
    var verticalConnected = this.getVerticalSurroundings_oav4bx$(pos);
    return verticalConnected.size < 3 ? emptyList() : verticalConnected;
  };
  GameMechanics.prototype.getHorizontalSurroundings_oav4bx$ = function (pos) {
    return this.getHorizontalSurroundings_8k3rc0$(this.field_0.getTileCell_oav4bx$(pos));
  };
  GameMechanics.prototype.getVerticalSurroundings_oav4bx$ = function (pos) {
    return this.getVerticalSurroundings_8k3rc0$(this.field_0.getTileCell_oav4bx$(pos));
  };
  GameMechanics.prototype.getHorizontalSurroundings_8k3rc0$ = function (cell) {
    if (cell.tile.isNotTile()) {
      return listOf(cell);
    }
    var pos = cell.position.right_za3lpa$();
    var cellsRight = ArrayList_init_0();
    while (this.field_0.getTile_oav4bx$(pos) === cell.tile) {
      var element = this.field_0.getTileCell_oav4bx$(pos);
      cellsRight.add_11rb$(element);
      pos = pos.right_za3lpa$();
    }
    pos = cell.position.left_za3lpa$();
    var cellsLeft = ArrayList_init_0();
    while (this.field_0.getTile_oav4bx$(pos) === cell.tile) {
      var element_0 = this.field_0.getTileCell_oav4bx$(pos);
      cellsLeft.add_11rb$(element_0);
      pos = pos.left_za3lpa$();
    }
    return plus(plus_0(reversed(cellsLeft), cell), cellsRight);
  };
  GameMechanics.prototype.getVerticalSurroundings_8k3rc0$ = function (cell) {
    if (cell.tile.isNotTile()) {
      return listOf(cell);
    }
    var pos = cell.position.bottom_za3lpa$();
    var cellsBottom = ArrayList_init_0();
    while (this.field_0.getTile_oav4bx$(pos) === cell.tile) {
      var element = this.field_0.getTileCell_oav4bx$(pos);
      cellsBottom.add_11rb$(element);
      pos = pos.bottom_za3lpa$();
    }
    pos = cell.position.top_za3lpa$();
    var cellsTop = ArrayList_init_0();
    while (this.field_0.getTile_oav4bx$(pos) === cell.tile) {
      var element_0 = this.field_0.getTileCell_oav4bx$(pos);
      cellsTop.add_11rb$(element_0);
      pos = pos.top_za3lpa$();
    }
    return plus(plus_0(reversed(cellsTop), cell), cellsBottom);
  };
  GameMechanics.prototype.isVerticalConnected_oav4bx$ = function (pos) {
    return !this.getVerticalConnectedOrEmpty_oav4bx$(pos).isEmpty();
  };
  GameMechanics.prototype.toString = function () {
    return this.field_0.toString();
  };
  GameMechanics.prototype.getNextMoves = function () {
    var $receiver = until(0, this.field_0.columnsSize);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = this.moveAll_za3lpa$(element);
      addAll(destination, list);
    }
    return destination;
  };
  GameMechanics.prototype.moveAll_za3lpa$ = function (column) {
    var moves = ArrayList_init_0();
    while (true) {
      var nextMove = this.getNextMove_za3lpa$(column);
      if (nextMove != null) {
        moves.add_11rb$(nextMove);
        this.move_v2epn7$(nextMove);
      }
       else {
        return moves;
      }
    }
  };
  GameMechanics.prototype.getNextMove_za3lpa$ = function (column) {
    var cells = reversed(this.field_0.getColumnCell_za3lpa$(column));
    if (cells.isEmpty()) {
      return null;
    }
    var hole = {v: null};
    var tmp$;
    tmp$ = cells.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (hole.v == null) {
        if (element.tile.isHole()) {
          hole.v = element;
        }
      }
       else if (element.tile.isTile()) {
        return new GameMechanics$Move(ensureNotNull(hole.v).position, element.position);
      }
    }
    return null;
  };
  function GameMechanics$Move(target, tile) {
    this.target = target;
    this.tile = tile;
  }
  GameMechanics$Move.prototype.distance = function () {
    return distanceTo(this.target, this.tile);
  };
  GameMechanics$Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: []
  };
  GameMechanics$Move.prototype.component1 = function () {
    return this.target;
  };
  GameMechanics$Move.prototype.component2 = function () {
    return this.tile;
  };
  GameMechanics$Move.prototype.copy_th10u$ = function (target, tile) {
    return new GameMechanics$Move(target === void 0 ? this.target : target, tile === void 0 ? this.tile : tile);
  };
  GameMechanics$Move.prototype.toString = function () {
    return 'Move(target=' + Kotlin.toString(this.target) + (', tile=' + Kotlin.toString(this.tile)) + ')';
  };
  GameMechanics$Move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.tile) | 0;
    return result;
  };
  GameMechanics$Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.target, other.target) && Kotlin.equals(this.tile, other.tile)))));
  };
  GameMechanics.prototype.listEmptyCells = function () {
    var $receiver = this.field_0.listAllCells();
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.tile.isHole())
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.position);
    }
    return destination_0;
  };
  GameMechanics.prototype.getNewTileMoves_93tlaa$ = function (tileStore) {
    var $receiver = this.listEmptyCells();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new GameMechanics$InsertMove(item, tileStore(item.column)));
    }
    return destination;
  };
  function GameMechanics$InsertMove(target, tile) {
    this.target = target;
    this.tile = tile;
  }
  GameMechanics$InsertMove.prototype.compareTo_11rb$ = function (other) {
    return other.target.row - this.target.row | 0;
  };
  GameMechanics$InsertMove.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InsertMove',
    interfaces: [Comparable]
  };
  GameMechanics$InsertMove.prototype.component1 = function () {
    return this.target;
  };
  GameMechanics$InsertMove.prototype.component2 = function () {
    return this.tile;
  };
  GameMechanics$InsertMove.prototype.copy_tts3q9$ = function (target, tile) {
    return new GameMechanics$InsertMove(target === void 0 ? this.target : target, tile === void 0 ? this.tile : tile);
  };
  GameMechanics$InsertMove.prototype.toString = function () {
    return 'InsertMove(target=' + Kotlin.toString(this.target) + (', tile=' + Kotlin.toString(this.tile)) + ')';
  };
  GameMechanics$InsertMove.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.tile) | 0;
    return result;
  };
  GameMechanics$InsertMove.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.target, other.target) && Kotlin.equals(this.tile, other.tile)))));
  };
  GameMechanics.prototype.insert_cklanf$ = function (moves) {
    var tmp$;
    tmp$ = moves.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.insert_9in0u2$(element);
    }
  };
  GameMechanics.prototype.insert_9in0u2$ = function (move) {
    this.field_0.set_tts3q9$(move.target, move.tile);
  };
  GameMechanics.prototype.move_v2epn7$ = function (move) {
    this.field_0.set_tts3q9$(move.target, this.field_0.get_oav4bx$(move.tile));
    this.field_0.set_tts3q9$(move.tile, Tile$Hole_getInstance());
  };
  GameMechanics.prototype.isTile_0 = function ($receiver) {
    return this.field_0.get_oav4bx$($receiver).isTile();
  };
  GameMechanics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameMechanics',
    interfaces: []
  };
  function SpriteBatch(x, y, spriteSize, columns, rows, bitmap_0) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (spriteSize === void 0)
      spriteSize = 16;
    this.bitmap_d7b8i$_0 = bitmap_0;
    this.defaultSprite_v0axj3$_0 = bitmap.Bitmaps.transparent;
    this.sprites_c48gbd$_0 = mutableListOf([this.defaultSprite_v0axj3$_0]);
    this.grid_3haf3b$_0 = new PositionGrid(x, y, columns, rows, spriteSize);
    this.prepareElement_y40ajc$_0();
  }
  SpriteBatch.prototype.get_za3lpa$ = function (spriteIndex) {
    return this.sprites_c48gbd$_0.get_za3lpa$(spriteIndex);
  };
  SpriteBatch.prototype.prepareElement_y40ajc$_0 = function () {
    var times = this.grid_3haf3b$_0.rows;
    for (var index = 0; index < times; index++) {
      var times_0 = this.grid_3haf3b$_0.columns;
      for (var index_0 = 0; index_0 < times_0; index_0++) {
        var pos = this.grid_3haf3b$_0.getPosition_vux9f0$(index_0, index);
        this.addSpriteToList_qlfmym$_0(sliceWithSize(this.bitmap_d7b8i$_0, numberToInt(pos.x), numberToInt(pos.y), this.grid_3haf3b$_0.tileSize, this.grid_3haf3b$_0.tileSize));
      }
    }
  };
  SpriteBatch.prototype.addSpriteToList_qlfmym$_0 = function (sprite) {
    this.sprites_c48gbd$_0.add_11rb$(sprite);
    if (equals(first_0(this.sprites_c48gbd$_0), this.defaultSprite_v0axj3$_0)) {
      this.sprites_c48gbd$_0.removeAt_za3lpa$(0);
    }
  };
  SpriteBatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteBatch',
    interfaces: []
  };
  function PositionGrid(x, y, columns, rows, tileSize) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.x = x;
    this.y = y;
    this.columns = columns;
    this.rows = rows;
    this.tileSize = tileSize;
  }
  PositionGrid.prototype.getPosition_vux9f0$ = function (column, row) {
    var x = this.x + Kotlin.imul(column, this.tileSize) | 0;
    var y = this.y + Kotlin.imul(row, this.tileSize) | 0;
    return new Point(numberToDouble(x), numberToDouble(y));
  };
  PositionGrid.prototype.getCenterPosition_z8e4lc$ = function (column, row) {
    var x = this.x + Kotlin.imul(numberToInt(column), this.tileSize) + (this.tileSize / 2 | 0) | 0;
    var y = this.y + Kotlin.imul(numberToInt(row), this.tileSize) + (this.tileSize / 2 | 0) | 0;
    return new Point(numberToDouble(x), numberToDouble(y));
  };
  PositionGrid.prototype.getCenterPosition_oav4bx$ = function (position) {
    return this.getCenterPosition_z8e4lc$(position.x, position.y);
  };
  PositionGrid.prototype.getPosition_oav4bx$ = function (position) {
    return this.getPosition_vux9f0$(position.column, position.row);
  };
  PositionGrid.prototype.getField_vux9f0$ = function (posX, posY) {
    return this.getField_lu1900$(posX, posY);
  };
  PositionGrid.prototype.getField_3qfxs9$ = function (position) {
    var x = this.x;
    var y = this.y;
    var relativePosition = minus(position, new Point(numberToDouble(x), numberToDouble(y)));
    var column = relativePosition.x / this.tileSize;
    var row = relativePosition.y / this.tileSize;
    return new PositionGrid$Position(numberToInt(column), numberToInt(row));
  };
  PositionGrid.prototype.isOnGrid_oav4bx$ = function (pos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.rows;
    tmp$_0 = pos.row;
    if (0 <= tmp$_0 && tmp$_0 < tmp$) {
      tmp$_1 = this.columns;
      tmp$_2 = pos.column;
      tmp$_3 = (0 <= tmp$_2 && tmp$_2 < tmp$_1);
    }
     else
      tmp$_3 = false;
    return tmp$_3;
  };
  PositionGrid.prototype.getField_lu1900$ = function (posX, posY) {
    return this.getField_3qfxs9$(new Point(posX, posY));
  };
  function PositionGrid$Position(column, row) {
    this.column = column;
    this.row = row;
    this.$delegate_oav4bx$_0 = new Point(numberToDouble(column), numberToDouble(row));
  }
  PositionGrid$Position.prototype.getIndex = function () {
    return this.column + Kotlin.imul(this.row, this.column) | 0;
  };
  PositionGrid$Position.prototype.horizontal_za3lpa$ = function (steps) {
    return new PositionGrid$Position(this.column + steps | 0, this.row);
  };
  PositionGrid$Position.prototype.vertical_za3lpa$ = function (steps) {
    return new PositionGrid$Position(this.column, this.row + steps | 0);
  };
  PositionGrid$Position.prototype.left_za3lpa$ = function (steps) {
    if (steps === void 0)
      steps = 1;
    return new PositionGrid$Position(this.column - steps | 0, this.row);
  };
  PositionGrid$Position.prototype.right_za3lpa$ = function (steps) {
    if (steps === void 0)
      steps = 1;
    return new PositionGrid$Position(this.column + steps | 0, this.row);
  };
  PositionGrid$Position.prototype.top_za3lpa$ = function (steps) {
    if (steps === void 0)
      steps = 1;
    return new PositionGrid$Position(this.column, this.row - steps | 0);
  };
  PositionGrid$Position.prototype.moveToStart = function () {
    return new PositionGrid$Position(this.column, -1);
  };
  PositionGrid$Position.prototype.bottom_za3lpa$ = function (steps) {
    if (steps === void 0)
      steps = 1;
    return new PositionGrid$Position(this.column, this.row + steps | 0);
  };
  Object.defineProperty(PositionGrid$Position.prototype, 'x', {
    get: function () {
      return this.$delegate_oav4bx$_0.x;
    }
  });
  Object.defineProperty(PositionGrid$Position.prototype, 'y', {
    get: function () {
      return this.$delegate_oav4bx$_0.y;
    }
  });
  PositionGrid$Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: [IPoint]
  };
  PositionGrid$Position.prototype.component1 = function () {
    return this.column;
  };
  PositionGrid$Position.prototype.component2 = function () {
    return this.row;
  };
  PositionGrid$Position.prototype.copy_vux9f0$ = function (column, row) {
    return new PositionGrid$Position(column === void 0 ? this.column : column, row === void 0 ? this.row : row);
  };
  PositionGrid$Position.prototype.toString = function () {
    return 'Position(column=' + Kotlin.toString(this.column) + (', row=' + Kotlin.toString(this.row)) + ')';
  };
  PositionGrid$Position.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    return result;
  };
  PositionGrid$Position.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.column, other.column) && Kotlin.equals(this.row, other.row)))));
  };
  PositionGrid.prototype.size = function () {
    return Kotlin.imul(this.columns, this.rows);
  };
  PositionGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionGrid',
    interfaces: []
  };
  function GameField(columnsSize, rowSize) {
    GameField$Companion_getInstance();
    this.columnsSize = columnsSize;
    this.rowSize = rowSize;
    var array = Array_0(this.rowSize);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Row(this.columnsSize);
    }
    this.rows_0 = array;
  }
  function GameField$Companion() {
    GameField$Companion_instance = this;
  }
  GameField$Companion.prototype.fromString_61zpoe$ = function (string) {
    var $receiver = split(string, ['[']);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!isBlank(element))
        destination.add_11rb$(element);
    }
    var values = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(values, 10));
    var tmp$_0;
    tmp$_0 = values.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(this.parseRow_0(item));
    }
    var rows = destination_0;
    var field = new GameField(rows.get_za3lpa$(0).size(), rows.size);
    var tmp$_1, tmp$_0_0;
    var index = 0;
    tmp$_1 = rows.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var rowIndex = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      var tmp$_2, tmp$_0_1;
      var index_0 = 0;
      tmp$_2 = item_0.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        var columnIndex = checkIndexOverflow((tmp$_0_1 = index_0, index_0 = tmp$_0_1 + 1 | 0, tmp$_0_1));
        field.get_za3lpa$(rowIndex).set_ybixec$(columnIndex, item_1);
      }
    }
    return field;
  };
  GameField$Companion.prototype.parseRow_0 = function (line) {
    var tmp$;
    var $receiver = removeSuffix(removePrefix(trim(Kotlin.isCharSequence(tmp$ = line) ? tmp$ : throwCCE()).toString(), '['), ']');
    var tmp$_0;
    var $receiver_0 = split(trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString(), [',']);
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!isBlank(element))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_2;
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3;
      destination_0.add_11rb$(trim(Kotlin.isCharSequence(tmp$_3 = item) ? tmp$_3 : throwCCE()).toString());
    }
    var values = destination_0;
    var destination_1 = ArrayList_init(collectionSizeOrDefault(values, 10));
    var tmp$_4;
    tmp$_4 = values.iterator();
    while (tmp$_4.hasNext()) {
      var item_0 = tmp$_4.next();
      destination_1.add_11rb$(Tile$Companion_getInstance().getTile_61zpoe$(item_0));
    }
    var tiles = destination_1;
    var row = new Row(tiles.size);
    var tmp$_5, tmp$_0_0;
    var index = 0;
    tmp$_5 = tiles.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      row.set_ybixec$(checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)), item_1);
    }
    return row;
  };
  GameField$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameField$Companion_instance = null;
  function GameField$Companion_getInstance() {
    if (GameField$Companion_instance === null) {
      new GameField$Companion();
    }
    return GameField$Companion_instance;
  }
  GameField.prototype.clone = function () {
    var clone = this.copy_vux9f0$();
    var $receiver = this.rows_0;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      clone.rows_0[tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0] = item.clone();
    }
    return clone;
  };
  GameField.prototype.getTileCell_oav4bx$ = function (position) {
    return new TileCell(this.get_oav4bx$(position), position);
  };
  GameField.prototype.getTileCell_vux9f0$ = function (column, row) {
    return new TileCell(this.get_vux9f0$(column, row), new PositionGrid$Position(column, row));
  };
  GameField.prototype.get_oav4bx$ = function (position) {
    return this.get_vux9f0$(position.column, position.row);
  };
  GameField.prototype.getTile_oav4bx$ = function (position) {
    return this.getTile_vux9f0$(position.column, position.row);
  };
  GameField.prototype.getTile_vux9f0$ = function (column, row) {
    var tmp$;
    if (this.isOnField_vux9f0$(column, row)) {
      tmp$ = this.rows_0[row].get_za3lpa$(column);
    }
     else {
      tmp$ = Tile$OutOfSpace_getInstance();
    }
    return tmp$;
  };
  GameField.prototype.get_vux9f0$ = function (column, row) {
    return this.getTile_vux9f0$(column, row);
  };
  GameField.prototype.getColumn_za3lpa$ = function (column) {
    if (column >= this.columnsSize) {
      throw IllegalArgumentException_init('Column ' + column + ' is out of range: ' + this.columnsSize);
    }
    var $receiver = until(0, this.rowSize);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.get_vux9f0$(column, item));
    }
    return destination;
  };
  GameField.prototype.getColumnCell_za3lpa$ = function (column) {
    var $receiver = this.getColumn_za3lpa$(column);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new TileCell(item, new PositionGrid$Position(column, checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)))));
    }
    return destination;
  };
  GameField.prototype.isOnField_vux9f0$ = function (column, row) {
    return this.isColumnField_za3lpa$(column) && this.isRowField_za3lpa$(row);
  };
  GameField.prototype.isNotOnField_vux9f0$ = function (column, row) {
    return !this.isOnField_vux9f0$(column, row);
  };
  GameField.prototype.isColumnField_za3lpa$ = function (column) {
    var tmp$;
    tmp$ = this.columnsSize;
    return 0 <= column && column < tmp$;
  };
  GameField.prototype.isRowField_za3lpa$ = function (row) {
    var tmp$;
    tmp$ = this.rowSize;
    return 0 <= row && row < tmp$;
  };
  GameField.prototype.set_qt1dr2$ = function (column, row, value) {
    this.rows_0[row].set_vux9f0$(column, value);
  };
  GameField.prototype.set_x5o0pq$ = function (column, row, value) {
    this.rows_0[row].set_ybixec$(column, value);
  };
  GameField.prototype.set_tts3q9$ = function (position, value) {
    this.rows_0[position.row].set_ybixec$(position.column, value);
  };
  GameField.prototype.get_za3lpa$ = function (row) {
    var tmp$;
    if (this.isRowField_za3lpa$(row)) {
      tmp$ = this.rows_0[row];
    }
     else {
      tmp$ = Row$Companion_getInstance().outOfSpace();
    }
    return tmp$;
  };
  function GameField$toString$lambda(it) {
    return it.toString();
  }
  GameField.prototype.toString = function () {
    return joinToString_0(this.rows_0, '\n', void 0, void 0, void 0, void 0, GameField$toString$lambda);
  };
  GameField.prototype.iterator = function () {
    return Kotlin.arrayIterator(this.rows_0);
  };
  GameField.prototype.listAllCells = function () {
    var $receiver = this.listAllPositions();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.getTileCell_oav4bx$(item));
    }
    return destination;
  };
  GameField.prototype.listAllPositions = function () {
    var $receiver = until(0, this.rowSize);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = until(0, this.columnsSize);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(new PositionGrid$Position(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  };
  GameField.prototype.shuffle = function () {
    var tmp$;
    tmp$ = this.listAllPositions().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.set_tts3q9$(element, Tile$Companion_getInstance().randomTile());
    }
  };
  GameField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameField',
    interfaces: [Iterable]
  };
  GameField.prototype.component1 = function () {
    return this.columnsSize;
  };
  GameField.prototype.component2 = function () {
    return this.rowSize;
  };
  GameField.prototype.copy_vux9f0$ = function (columnsSize, rowSize) {
    return new GameField(columnsSize === void 0 ? this.columnsSize : columnsSize, rowSize === void 0 ? this.rowSize : rowSize);
  };
  GameField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.columnsSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.rowSize) | 0;
    return result;
  };
  GameField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.columnsSize, other.columnsSize) && Kotlin.equals(this.rowSize, other.rowSize)))));
  };
  function Level() {
    this.number = kotlin_js_internal_IntCompanionObject;
  }
  function Level$Objective(type) {
    this.type = type;
  }
  Level$Objective.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Objective',
    interfaces: []
  };
  Level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Level',
    interfaces: []
  };
  function Row(rowSize) {
    Row$Companion_getInstance();
    var array = Array_0(rowSize);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Tile$Hole_getInstance();
    }
    this.tiles_0 = array;
  }
  function Row$Companion() {
    Row$Companion_instance = this;
  }
  Row$Companion.prototype.outOfSpace = function () {
    return Row_init([Tile$OutOfSpace_getInstance()]);
  };
  Row$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Row$Companion_instance = null;
  function Row$Companion_getInstance() {
    if (Row$Companion_instance === null) {
      new Row$Companion();
    }
    return Row$Companion_instance;
  }
  Row.prototype.get_za3lpa$ = function (row) {
    var tmp$;
    if (this.isInRow_za3lpa$(row)) {
      tmp$ = this.tiles_0[row];
    }
     else {
      tmp$ = Tile$OutOfSpace_getInstance();
    }
    return tmp$;
  };
  Row.prototype.isInRow_za3lpa$ = function (row) {
    return get_indices(this.tiles_0).contains_mef7kx$(row);
  };
  function Row$toString$lambda(it) {
    return it.shortName();
  }
  Row.prototype.toString = function () {
    return '[' + joinToString_0(this.tiles_0, void 0, void 0, void 0, void 0, void 0, Row$toString$lambda) + ']';
  };
  Row.prototype.size = function () {
    return this.tiles_0.length;
  };
  Row.prototype.set_vux9f0$ = function (row, tileNumber) {
    this.tiles_0[row] = Tile$Companion_getInstance().getTile_za3lpa$(tileNumber);
  };
  Row.prototype.set_ybixec$ = function (row, tile) {
    this.tiles_0[row] = tile;
  };
  Row.prototype.set_19mbxw$ = function (row, tileShortName) {
    this.tiles_0[row] = Tile$Companion_getInstance().getTile_61zpoe$(tileShortName);
  };
  Row.prototype.iterator = function () {
    return Kotlin.arrayIterator(this.tiles_0);
  };
  Row.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, Row) ? tmp$_0 : throwCCE();
    if (!contentEquals(this.tiles_0, other.tiles_0))
      return false;
    return true;
  };
  Row.prototype.hashCode = function () {
    return contentHashCode(this.tiles_0);
  };
  Row.prototype.clone = function () {
    var clone = new Row(this.tiles_0.length);
    clone.tiles_0 = this.tiles_0.slice();
    return clone;
  };
  Row.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Row',
    interfaces: [Iterable]
  };
  function Row_init(tiles, $this) {
    $this = $this || Object.create(Row.prototype);
    Row.call($this, tiles.length);
    arrayCopy(tiles, $this.tiles_0, 0, 0, tiles.length);
    return $this;
  }
  function Tile(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.index = this.ordinal;
  }
  function Tile_initFields() {
    Tile_initFields = function () {
    };
    Tile$A_instance = new Tile('A', 0);
    Tile$B_instance = new Tile('B', 1);
    Tile$C_instance = new Tile('C', 2);
    Tile$D_instance = new Tile('D', 3);
    Tile$E_instance = new Tile('E', 4);
    Tile$Wall_instance = new Tile('Wall', 5);
    Tile$Hole_instance = new Tile('Hole', 6);
    Tile$OutOfSpace_instance = new Tile('OutOfSpace', 7);
    Tile$Companion_getInstance();
  }
  var Tile$A_instance;
  function Tile$A_getInstance() {
    Tile_initFields();
    return Tile$A_instance;
  }
  var Tile$B_instance;
  function Tile$B_getInstance() {
    Tile_initFields();
    return Tile$B_instance;
  }
  var Tile$C_instance;
  function Tile$C_getInstance() {
    Tile_initFields();
    return Tile$C_instance;
  }
  var Tile$D_instance;
  function Tile$D_getInstance() {
    Tile_initFields();
    return Tile$D_instance;
  }
  var Tile$E_instance;
  function Tile$E_getInstance() {
    Tile_initFields();
    return Tile$E_instance;
  }
  var Tile$Wall_instance;
  function Tile$Wall_getInstance() {
    Tile_initFields();
    return Tile$Wall_instance;
  }
  var Tile$Hole_instance;
  function Tile$Hole_getInstance() {
    Tile_initFields();
    return Tile$Hole_instance;
  }
  var Tile$OutOfSpace_instance;
  function Tile$OutOfSpace_getInstance() {
    Tile_initFields();
    return Tile$OutOfSpace_instance;
  }
  Tile.prototype.shortName = function () {
    return String.fromCharCode(first_1(this.name));
  };
  Tile.prototype.isWall = function () {
    return this === Tile$Wall_getInstance();
  };
  Tile.prototype.isHole = function () {
    return this === Tile$Hole_getInstance();
  };
  Tile.prototype.isTile = function () {
    return !this.isWall() && !this.isHole() && !this.isOutOfSpace();
  };
  Tile.prototype.isNotTile = function () {
    return !this.isTile();
  };
  Tile.prototype.isOutOfSpace = function () {
    return this === Tile$OutOfSpace_getInstance();
  };
  function Tile$Companion() {
    Tile$Companion_instance = this;
    this.toTile_0 = LinkedHashMap_init();
    var $receiver = Tile$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var $receiver_0 = this.toTile_0;
      var key = element.shortName();
      $receiver_0.put_xwzc9p$(key, element);
    }
  }
  Tile$Companion.prototype.getTile_za3lpa$ = function (index) {
    if (index > Tile$values().length) {
      throw IllegalArgumentException_init('Tile index ' + index + ' > ' + Tile$values().length + ' is not available');
    }
    var tile = Tile$values()[index];
    if (tile.isNotTile()) {
      throw IllegalArgumentException_init('Tile ' + tile + ' for index ' + index + ' is not a tile');
    }
    return tile;
  };
  Tile$Companion.prototype.getTile_61zpoe$ = function (shortName) {
    var tmp$;
    tmp$ = this.toTile_0.get_11rb$(shortName);
    if (tmp$ == null) {
      throw IllegalArgumentException_init("Failed finding tile for'" + shortName + "'");
    }
    return tmp$;
  };
  Tile$Companion.prototype.randomTile = function () {
    var $receiver = Tile$values();
    var destination = ArrayList_init_0();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (element.isTile())
        destination.add_11rb$(element);
    }
    return random(destination, Random.Default);
  };
  Tile$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tile$Companion_instance = null;
  function Tile$Companion_getInstance() {
    Tile_initFields();
    if (Tile$Companion_instance === null) {
      new Tile$Companion();
    }
    return Tile$Companion_instance;
  }
  Tile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tile',
    interfaces: [Enum]
  };
  function Tile$values() {
    return [Tile$A_getInstance(), Tile$B_getInstance(), Tile$C_getInstance(), Tile$D_getInstance(), Tile$E_getInstance(), Tile$Wall_getInstance(), Tile$Hole_getInstance(), Tile$OutOfSpace_getInstance()];
  }
  Tile.values = Tile$values;
  function Tile$valueOf(name) {
    switch (name) {
      case 'A':
        return Tile$A_getInstance();
      case 'B':
        return Tile$B_getInstance();
      case 'C':
        return Tile$C_getInstance();
      case 'D':
        return Tile$D_getInstance();
      case 'E':
        return Tile$E_getInstance();
      case 'Wall':
        return Tile$Wall_getInstance();
      case 'Hole':
        return Tile$Hole_getInstance();
      case 'OutOfSpace':
        return Tile$OutOfSpace_getInstance();
      default:throwISE('No enum constant j4k.candycrush.model.Tile.' + name);
    }
  }
  Tile.valueOf_61zpoe$ = Tile$valueOf;
  function TileCell(tile, position) {
    this.tile = tile;
    this.position = position;
  }
  TileCell.prototype.toString = function () {
    return this.tile.shortName() + ' (' + this.position.column + ',' + this.position.row + ')';
  };
  TileCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileCell',
    interfaces: []
  };
  TileCell.prototype.component1 = function () {
    return this.tile;
  };
  TileCell.prototype.component2 = function () {
    return this.position;
  };
  TileCell.prototype.copy_5xn2n5$ = function (tile, position) {
    return new TileCell(tile === void 0 ? this.tile : tile, position === void 0 ? this.position : position);
  };
  TileCell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tile) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  TileCell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tile, other.tile) && Kotlin.equals(this.position, other.position)))));
  };
  function MoveTileObserver(view, grid, moveTileListener) {
    this.view_t9nu55$_0 = view;
    this.grid_0 = grid;
    this.moveTileListener_0 = moveTileListener;
    this.dragListener_0 = new DragListener(this.view, this.grid_0.tileSize, this);
  }
  Object.defineProperty(MoveTileObserver.prototype, 'view', {
    get: function () {
      return this.view_t9nu55$_0;
    }
  });
  function MoveTileObserver$MoveTileEvent(start, end) {
    this.start = start;
    this.end = end;
  }
  MoveTileObserver$MoveTileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveTileEvent',
    interfaces: []
  };
  MoveTileObserver$MoveTileEvent.prototype.component1 = function () {
    return this.start;
  };
  MoveTileObserver$MoveTileEvent.prototype.component2 = function () {
    return this.end;
  };
  MoveTileObserver$MoveTileEvent.prototype.copy_th10u$ = function (start, end) {
    return new MoveTileObserver$MoveTileEvent(start === void 0 ? this.start : start, end === void 0 ? this.end : end);
  };
  MoveTileObserver$MoveTileEvent.prototype.toString = function () {
    return 'MoveTileEvent(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + ')';
  };
  MoveTileObserver$MoveTileEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    return result;
  };
  MoveTileObserver$MoveTileEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end)))));
  };
  function MoveTileObserver$MoveTileListener() {
  }
  MoveTileObserver$MoveTileListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MoveTileListener',
    interfaces: []
  };
  MoveTileObserver.prototype.onTouchEvent_665627$ = function (views, e) {
    this.dragListener_0.onTouchEvent_665627$(views, e);
  };
  MoveTileObserver.prototype.onMouseEvent_y4dy1h$ = function (views, event) {
    this.dragListener_0.onMouseEvent_y4dy1h$(views, event);
    if (event.button === MouseButton.RIGHT && event.type === MouseEvent$Type.DOWN) {
      var point = this.point_9bjyl1$(event);
      println('field: ' + this.grid_0.getField_lu1900$(point.x, point.y) + '(' + point.x + ',' + point.y + ')');
    }
  };
  MoveTileObserver.prototype.point_9bjyl1$ = function ($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    return this.project_4l17gg$(new Point(numberToDouble(x), numberToDouble(y)));
  };
  MoveTileObserver.prototype.project_4l17gg$ = function (point) {
    return this.view.globalToLocalXY_aaz6cc$(point.x, point.y, point);
  };
  MoveTileObserver.prototype.onDragEvent_5un67p$ = function (dragEvent) {
    var start = this.grid_0.getField_3qfxs9$(dragEvent.start);
    var end = this.grid_0.getField_3qfxs9$(dragEvent.end);
    var distance = distanceTo(start, end);
    if (distance === 1.0 && this.grid_0.isOnGrid_oav4bx$(start) && this.grid_0.isOnGrid_oav4bx$(end)) {
      this.moveTileListener_0.onDragTileEvent_th10u$(start, end);
    }
  };
  MoveTileObserver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveTileObserver',
    interfaces: [MouseComponent, TouchComponent, DragListener$DragEventListener]
  };
  function TileAnimator(view, renderer) {
    TileAnimator$Companion_getInstance();
    this.view_pwce2h$_0 = view;
    this.renderer_0 = renderer;
    this.jobs_0 = ArrayList_init_0();
    this.positionGrid_0 = this.renderer_0.positionGrid;
    this.moveForward_0 = new TileAnimator$AnimationSettings(TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(1)), Easing.Companion.EASE_IN_OUT_ELASTIC);
    this.moveBackward_0 = new TileAnimator$AnimationSettings(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(550)), Easing.Companion.EASE_IN_OUT_ELASTIC);
    this.hide_0 = new TileAnimator$AnimationSettings(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(200)), Easing.Companion.EASE_IN);
  }
  Object.defineProperty(TileAnimator.prototype, 'view', {
    get: function () {
      return this.view_pwce2h$_0;
    }
  });
  function TileAnimator$Companion() {
    TileAnimator$Companion_instance = this;
    this.log = Logger.Companion.invoke_61zpoe$('TileAnimator');
  }
  TileAnimator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TileAnimator$Companion_instance = null;
  function TileAnimator$Companion_getInstance() {
    if (TileAnimator$Companion_instance === null) {
      new TileAnimator$Companion();
    }
    return TileAnimator$Companion_instance;
  }
  TileAnimator.prototype.update_14dthe$ = function (ms) {
  };
  TileAnimator.prototype.fallingAnimation_0 = function (rows) {
    var $receiver = 500 * rows | 0;
    return new TileAnimator$AnimationSettings(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver)), Easing.Companion.EASE_IN);
  };
  TileAnimator.prototype.move_1 = function ($receiver, point, settings, continuation) {
    return this.move_0($receiver, point, settings.time, settings.easing, continuation);
  };
  TileAnimator.prototype.move_0 = function ($receiver, point, time, easing, continuation) {
    var $receiver_0 = getPropertyCallableRef('x', 0, function ($receiver) {
      return $receiver.x;
    }.bind(null, $receiver), function ($receiver, value) {
      $receiver.x = value;
    }.bind(null, $receiver));
    var end = point.x;
    var tmp$ = new V2_init($receiver_0, $receiver_0.get(), numberToDouble(end), getCallableRef('_interpolate', function (ratio_0, l_0, r_0) {
      return _interpolate(ratio_0, l_0, r_0);
    }));
    var $receiver_1 = getPropertyCallableRef('y', 0, function ($receiver) {
      return $receiver.y;
    }.bind(null, $receiver), function ($receiver, value) {
      $receiver.y = value;
    }.bind(null, $receiver));
    var end_0 = point.y;
    return tween($receiver, [tmp$, new V2_init($receiver_1, $receiver_1.get(), numberToDouble(end_0), getCallableRef('_interpolate', function (ratio_0, l_0, r_0) {
      return _interpolate(ratio_0, l_0, r_0);
    }))], time, easing, void 0, continuation);
  };
  TileAnimator.prototype.animateRemoveTiles_1 = function (tile) {
    this.animateRemoveTiles_0(tile.position);
  };
  TileAnimator.prototype.animateRemoveTiles_0 = function (tile) {
    if (this.hasImage_0(tile)) {
      var image = this.getImage_0(tile);
      this.renderer_0.removeTileFromGrid_oav4bx$(tile);
      this.animateRemoveTile_0(image);
    }
     else {
      var $this = TileAnimator$Companion_getInstance().log;
      var level = Logger$Level.DEBUG;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'Skipping remove image, because it was already removed: ' + tile);
      }
    }
  };
  function Coroutine$TileAnimator$animateRemoveTile$lambda(closure$image_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$image = closure$image_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateRemoveTile$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateRemoveTile$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateRemoveTile$lambda.prototype.constructor = Coroutine$TileAnimator$animateRemoveTile$lambda;
  Coroutine$TileAnimator$animateRemoveTile$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = hide(this.local$closure$image, this.local$this$TileAnimator.hide_0.time, this.local$this$TileAnimator.hide_0.easing, this);
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
  function TileAnimator$animateRemoveTile$lambda(closure$image_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateRemoveTile$lambda(closure$image_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateRemoveTile$lambda_0(closure$image_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$image = closure$image_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateRemoveTile$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateRemoveTile$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateRemoveTile$lambda_0.prototype.constructor = Coroutine$TileAnimator$animateRemoveTile$lambda_0;
  Coroutine$TileAnimator$animateRemoveTile$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var scale = 1.4;
            var $receiver_2 = this.local$closure$image;
            var time = this.local$this$TileAnimator.hide_0.time;
            var easing = this.local$this$TileAnimator.hide_0.easing;
            var $receiver_3 = getPropertyCallableRef('scaleX', 0, function ($receiver_0) {
              return $receiver_0.scaleX;
            }.bind(null, $receiver_2), function ($receiver_0, value_0) {
              $receiver_0.scaleX = value_0;
            }.bind(null, $receiver_2));
            var end_1 = numberToDouble(scale);
            var tmp$_0 = new V2_init($receiver_3, $receiver_3.get(), numberToDouble(end_1), getCallableRef('_interpolate', function (ratio_0, l_0, r_0) {
              return _interpolate(ratio_0, l_0, r_0);
            }));
            var $receiver_4 = getPropertyCallableRef('scaleY', 0, function ($receiver_0) {
              return $receiver_0.scaleY;
            }.bind(null, $receiver_2), function ($receiver_0, value_0) {
              $receiver_0.scaleY = value_0;
            }.bind(null, $receiver_2));
            var end_2 = numberToDouble(scale);
            this.state_0 = 2;
            this.result_0 = tween($receiver_2, [tmp$_0, new V2_init($receiver_4, $receiver_4.get(), numberToDouble(end_2), getCallableRef('_interpolate', function (ratio_0, l_0, r_0) {
              return _interpolate(ratio_0, l_0, r_0);
            }))], time, easing, void 0, this);
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
  function TileAnimator$animateRemoveTile$lambda_0(closure$image_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateRemoveTile$lambda_0(closure$image_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateRemoveTile$lambda_1(closure$image_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$image = closure$image_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateRemoveTile$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateRemoveTile$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateRemoveTile$lambda_1.prototype.constructor = Coroutine$TileAnimator$animateRemoveTile$lambda_1;
  Coroutine$TileAnimator$animateRemoveTile$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$closure$image;
            var deg = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(180)));
            var time = this.local$this$TileAnimator.hide_0.time;
            var easing = this.local$this$TileAnimator.hide_0.easing;
            var $receiver_2 = getPropertyCallableRef('rotationRadians', 0, function ($receiver_0) {
              return $receiver_0.rotationRadians;
            }.bind(null, tmp$), function ($receiver_0, value_0) {
              $receiver_0.rotationRadians = value_0;
            }.bind(null, tmp$));
            var end_0 = deg.radians;
            this.state_0 = 2;
            this.result_0 = tween(tmp$, [new V2_init($receiver_2, $receiver_2.get(), numberToDouble(end_0), getCallableRef('_interpolate', function (ratio_0, l_0, r_0) {
              return _interpolate(ratio_0, l_0, r_0);
            }))], time, easing, void 0, this);
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
  function TileAnimator$animateRemoveTile$lambda_1(closure$image_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateRemoveTile$lambda_1(closure$image_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TileAnimator.prototype.animateRemoveTile_0 = function (image) {
    this.addJob_dqr1mp$(launch(this.view, void 0, void 0, TileAnimator$animateRemoveTile$lambda(image, this)));
    this.addJob_dqr1mp$(launch(this.view, void 0, void 0, TileAnimator$animateRemoveTile$lambda_0(image, this)));
    this.addJob_dqr1mp$(launch(this.view, void 0, void 0, TileAnimator$animateRemoveTile$lambda_1(image, this)));
  };
  TileAnimator.prototype.animateRemoveTiles_kzq6p$ = function (positions) {
    var tmp$;
    tmp$ = positions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.animateRemoveTiles_1(element);
    }
  };
  function Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda(closure$it_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda.prototype.constructor = Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda;
  Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TileAnimator.animateMove_n1gkse$(this.local$closure$it, this);
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
  function TileAnimator$animateMoves$lambda$lambda$lambda(closure$it_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateMoves$lambda$lambda$lambda(closure$it_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateMoves$lambda(closure$imageMoves_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$imageMoves = closure$imageMoves_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$TileAnimator$animateMoves$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateMoves$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateMoves$lambda.prototype.constructor = Coroutine$TileAnimator$animateMoves$lambda;
  Coroutine$TileAnimator$animateMoves$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$closure$imageMoves.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              launch(this.local$$receiver, void 0, void 0, TileAnimator$animateMoves$lambda$lambda$lambda(element, this.local$this$TileAnimator));
            }

            return Unit;
          case 1:
            throw this.exception_0;
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
  function TileAnimator$animateMoves$lambda(closure$imageMoves_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateMoves$lambda(closure$imageMoves_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TileAnimator.prototype.animateMoves_ame2ec$ = function (moves) {
    var destination = ArrayList_init(collectionSizeOrDefault(moves, 10));
    var tmp$;
    tmp$ = moves.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.prepare_0(item));
    }
    var imageMoves = destination;
    var tmp$_0;
    tmp$_0 = imageMoves.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.renderer_0.move_v2epn7$(element.move);
    }
    return this.addJob_dqr1mp$(launch(this.view, void 0, void 0, TileAnimator$animateMoves$lambda(imageMoves, this)));
  };
  TileAnimator.prototype.addJob_dqr1mp$ = function (job) {
    this.jobs_0.add_11rb$(job);
    return job;
  };
  TileAnimator.prototype.prepare_0 = function ($receiver) {
    return new TileAnimator$ImageMove($receiver, this.getImagePosition_rzfvfi$($receiver.tile), this.positionGrid_0.getCenterPosition_oav4bx$($receiver.target));
  };
  function Coroutine$animateMove_n1gkse$($this, move_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$move = move_0;
  }
  Coroutine$animateMove_n1gkse$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$animateMove_n1gkse$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$animateMove_n1gkse$.prototype.constructor = Coroutine$animateMove_n1gkse$;
  Coroutine$animateMove_n1gkse$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.move_1(this.local$move.tile.image, this.local$move.target, this.$this.fallingAnimation_0(numberToInt(this.local$move.distance())), this);
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
  TileAnimator.prototype.animateMove_n1gkse$ = function (move_0, continuation_0, suspended) {
    var instance = new Coroutine$animateMove_n1gkse$(this, move_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function TileAnimator$ImageMove(move, tile, target) {
    this.move = move;
    this.tile = tile;
    this.target = target;
  }
  TileAnimator$ImageMove.prototype.distance = function () {
    return this.move.distance();
  };
  TileAnimator$ImageMove.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageMove',
    interfaces: []
  };
  function Coroutine$TileAnimator$animateSwap$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$startPos = closure$startPos_0;
    this.local$closure$endPos = closure$endPos_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateSwap$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateSwap$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateSwap$lambda.prototype.constructor = Coroutine$TileAnimator$animateSwap$lambda;
  Coroutine$TileAnimator$animateSwap$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TileAnimator.move_1(this.local$closure$startPos.image, this.local$closure$endPos.point, this.local$this$TileAnimator.moveForward_0, this);
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
  function TileAnimator$animateSwap$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateSwap$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateSwap$lambda_0(closure$endPos_0, closure$startPos_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$endPos = closure$endPos_0;
    this.local$closure$startPos = closure$startPos_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateSwap$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateSwap$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateSwap$lambda_0.prototype.constructor = Coroutine$TileAnimator$animateSwap$lambda_0;
  Coroutine$TileAnimator$animateSwap$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TileAnimator.move_1(this.local$closure$endPos.image, this.local$closure$startPos.point, this.local$this$TileAnimator.moveForward_0, this);
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
  function TileAnimator$animateSwap$lambda_0(closure$endPos_0, closure$startPos_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateSwap$lambda_0(closure$endPos_0, closure$startPos_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TileAnimator.prototype.animateSwap_th10u$ = function (start, end) {
    var startPos = this.getImagePosition_rzfvfi$(start);
    var endPos = this.getImagePosition_rzfvfi$(end);
    var $this = TileAnimator$Companion_getInstance().log;
    var level = Logger$Level.DEBUG;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'Animate tile swap: ' + start + '-' + end + ': ' + startPos + ' - ' + endPos);
    }
    this.renderer_0.swapTiles_th10u$(start, end);
    this.addJob_dqr1mp$(launch(this.view, void 0, void 0, TileAnimator$animateSwap$lambda(startPos, endPos, this)));
    return this.addJob_dqr1mp$(async(this.view, void 0, void 0, TileAnimator$animateSwap$lambda_0(endPos, startPos, this)));
  };
  function Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$startPos = closure$startPos_0;
    this.local$closure$endPos = closure$endPos_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda.prototype.constructor = Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda;
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TileAnimator.move_1(this.local$closure$startPos.image, this.local$closure$endPos.point, this.local$this$TileAnimator.moveForward_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$TileAnimator.move_1(this.local$closure$startPos.image, this.local$closure$startPos.point, this.local$this$TileAnimator.moveBackward_0, this);
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
  function TileAnimator$animateIllegalSwap$lambda$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0(closure$endPos_0, closure$startPos_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$endPos = closure$endPos_0;
    this.local$closure$startPos = closure$startPos_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
  }
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0.prototype.constructor = Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0;
  Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TileAnimator.move_1(this.local$closure$endPos.image, this.local$closure$startPos.point, this.local$this$TileAnimator.moveForward_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$TileAnimator.move_1(this.local$closure$endPos.image, this.local$closure$endPos.point, this.local$this$TileAnimator.moveBackward_0, this);
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
  function TileAnimator$animateIllegalSwap$lambda$lambda_0(closure$endPos_0, closure$startPos_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateIllegalSwap$lambda$lambda_0(closure$endPos_0, closure$startPos_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateIllegalSwap$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$startPos = closure$startPos_0;
    this.local$closure$endPos = closure$endPos_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$TileAnimator$animateIllegalSwap$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateIllegalSwap$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateIllegalSwap$lambda.prototype.constructor = Coroutine$TileAnimator$animateIllegalSwap$lambda;
  Coroutine$TileAnimator$animateIllegalSwap$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            launch(this.local$$receiver, void 0, void 0, TileAnimator$animateIllegalSwap$lambda$lambda(this.local$closure$startPos, this.local$closure$endPos, this.local$this$TileAnimator));
            return launch(this.local$$receiver, void 0, void 0, TileAnimator$animateIllegalSwap$lambda$lambda_0(this.local$closure$endPos, this.local$closure$startPos, this.local$this$TileAnimator));
          case 1:
            throw this.exception_0;
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
  function TileAnimator$animateIllegalSwap$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateIllegalSwap$lambda(closure$startPos_0, closure$endPos_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TileAnimator.prototype.animateIllegalSwap_th10u$ = function (start, end) {
    var startPos = this.getImagePosition_rzfvfi$(start);
    var endPos = this.getImagePosition_rzfvfi$(end);
    var $this = TileAnimator$Companion_getInstance().log;
    var level = Logger$Level.DEBUG;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'Animate illegal swap: ' + start + '-' + end + ': ' + startPos + ' - ' + endPos);
    }
    return this.addJob_dqr1mp$(async(this.view, void 0, void 0, TileAnimator$animateIllegalSwap$lambda(startPos, endPos, this)));
  };
  function TileAnimator$AnimationSettings(time, easing) {
    this.time = time;
    this.easing = easing;
  }
  TileAnimator$AnimationSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationSettings',
    interfaces: []
  };
  TileAnimator.prototype.getImagePosition_rzfvfi$ = function ($receiver) {
    return new TileAnimator$ImagePosition(this.getImage_0($receiver), this.getImagePoint_rzfvfi$($receiver));
  };
  TileAnimator.prototype.getImagePoint_rzfvfi$ = function ($receiver) {
    return this.positionGrid_0.getCenterPosition_oav4bx$($receiver);
  };
  TileAnimator.prototype.getImage_0 = function ($receiver) {
    return this.renderer_0.getTile_oav4bx$($receiver);
  };
  TileAnimator.prototype.hasImage_0 = function ($receiver) {
    return this.renderer_0.hasTile_oav4bx$($receiver);
  };
  function TileAnimator$ImagePosition(image, point) {
    this.image = image;
    this.point = point;
  }
  TileAnimator$ImagePosition.prototype.toString = function () {
    return this.point.toString();
  };
  TileAnimator$ImagePosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImagePosition',
    interfaces: []
  };
  TileAnimator$ImagePosition.prototype.component1 = function () {
    return this.image;
  };
  TileAnimator$ImagePosition.prototype.component2 = function () {
    return this.point;
  };
  TileAnimator$ImagePosition.prototype.copy_mdobzt$ = function (image, point) {
    return new TileAnimator$ImagePosition(image === void 0 ? this.image : image, point === void 0 ? this.point : point);
  };
  TileAnimator$ImagePosition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.point) | 0;
    return result;
  };
  TileAnimator$ImagePosition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.image, other.image) && Kotlin.equals(this.point, other.point)))));
  };
  function Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda(closure$move_0, closure$row_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$move = closure$move_0;
    this.local$closure$row = closure$row_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda;
  Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TileAnimator.animateInsert_6yyt5d$(this.local$closure$move, Kotlin.Long.fromInt((1 + this.local$closure$row | 0) * 500 | 0), this.local$$receiver, this);
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
  function TileAnimator$animateInsert$lambda$lambda$lambda$lambda(closure$move_0, closure$row_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateInsert$lambda$lambda$lambda$lambda(closure$move_0, closure$row_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TileAnimator$animateInsert$lambda(closure$moveByColumn_0, this$TileAnimator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$moveByColumn = closure$moveByColumn_0;
    this.local$this$TileAnimator = this$TileAnimator_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$TileAnimator$animateInsert$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateInsert$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateInsert$lambda.prototype.constructor = Coroutine$TileAnimator$animateInsert$lambda;
  Coroutine$TileAnimator$animateInsert$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$closure$moveByColumn.keys.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var closure$moveByColumn = this.local$closure$moveByColumn;
              var this$TileAnimator = this.local$this$TileAnimator;
              var tmp$_0;
              var columnMoves = (tmp$_0 = closure$moveByColumn.get_11rb$(element)) != null ? sorted(tmp$_0) : null;
              if (columnMoves != null) {
                var tmp$_1, tmp$_0_0;
                var index = 0;
                tmp$_1 = columnMoves.iterator();
                while (tmp$_1.hasNext()) {
                  var item = tmp$_1.next();
                  launch(this.local$$receiver, void 0, void 0, TileAnimator$animateInsert$lambda$lambda$lambda$lambda(item, checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)), this$TileAnimator));
                }
              }
            }

            return Unit;
          case 1:
            throw this.exception_0;
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
  function TileAnimator$animateInsert$lambda(closure$moveByColumn_0, this$TileAnimator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateInsert$lambda(closure$moveByColumn_0, this$TileAnimator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TileAnimator.prototype.animateInsert_cklanf$ = function (moves) {
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = moves.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.target.column;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var moveByColumn = destination;
    return this.addJob_dqr1mp$(launch(this.view, void 0, void 0, TileAnimator$animateInsert$lambda(moveByColumn, this)));
  };
  TileAnimator.prototype.isAnimationRunning = function () {
    var $receiver = this.jobs_0;
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
        if (!element.isCompleted) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    var active = any$result;
    if (!active) {
      this.jobs_0.clear();
    }
    return active;
  };
  function Coroutine$TileAnimator$animateInsert$lambda_0(closure$image_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$image = closure$image_0;
  }
  Coroutine$TileAnimator$animateInsert$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TileAnimator$animateInsert$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TileAnimator$animateInsert$lambda_0.prototype.constructor = Coroutine$TileAnimator$animateInsert$lambda_0;
  Coroutine$TileAnimator$animateInsert$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$closure$image;
            var $receiver = getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, this.local$closure$image), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, this.local$closure$image));
            this.state_0 = 2;
            this.result_0 = tween(tmp$, [new V2_init($receiver, $receiver.get(), numberToDouble(1.0), getCallableRef('_interpolate', function (ratio_0, l_0, r_0) {
              return _interpolate(ratio_0, l_0, r_0);
            }))], TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(150)), Easing.Companion.EASE_IN, void 0, this);
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
  function TileAnimator$animateInsert$lambda_0(closure$image_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TileAnimator$animateInsert$lambda_0(closure$image_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$animateInsert_6yyt5d$($this, move_0, delay_0, scope_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$image = void 0;
    this.local$target = void 0;
    this.local$move = move_0;
    this.local$delay = delay_0;
    this.local$scope = scope_0;
  }
  Coroutine$animateInsert_6yyt5d$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$animateInsert_6yyt5d$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$animateInsert_6yyt5d$.prototype.constructor = Coroutine$animateInsert_6yyt5d$;
  Coroutine$animateInsert_6yyt5d$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$image = this.$this.renderer_0.addTile_tts3q9$(this.local$move.target, this.local$move.tile);
            this.local$image.alpha = 0.0;
            this.local$target = this.$this.getImagePoint_rzfvfi$(this.local$move.target);
            var start = this.$this.getImagePoint_rzfvfi$(this.local$move.target.moveToStart());
            var x = start.x;
            var y = start.y;
            this.local$image.x = numberToDouble(x);
            this.local$image.y = numberToDouble(y);
            this.state_0 = 2;
            this.result_0 = delay(this.local$delay, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            launch(this.local$scope, void 0, void 0, TileAnimator$animateInsert$lambda_0(this.local$image));
            this.state_0 = 3;
            this.result_0 = this.$this.move_1(this.local$image, this.local$target, this.$this.fallingAnimation_0(this.local$move.target.row), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  TileAnimator.prototype.animateInsert_6yyt5d$ = function (move_0, delay_0, scope_0, continuation_0, suspended) {
    var instance = new Coroutine$animateInsert_6yyt5d$(this, move_0, delay_0, scope_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  TileAnimator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileAnimator',
    interfaces: [UpdateComponent]
  };
  var log;
  var debug;
  var useTestTiles;
  var resolution;
  function main$lambda$lambda(it) {
    return Unit;
  }
  function Coroutine$main$lambda$lambda(closure$gameField_0, closure$fieldRenderer_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$gameField = closure$gameField_0;
    this.local$closure$fieldRenderer = closure$fieldRenderer_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.P) {
              println('---------------');
              println(this.local$closure$gameField);
            }

            if (this.local$it.key === Key.I) {
              println('---------------');
              println(this.local$closure$fieldRenderer);
              println('Renderer data is equal to field data: ' + toString(equals(this.local$closure$fieldRenderer.toString(), this.local$closure$gameField.toString())));
            }

            if (this.local$it.key === Key.S) {
              this.local$closure$gameField.shuffle();
              return this.local$closure$fieldRenderer.updateImagesFromField(), Unit;
            }

            return Unit;
          case 1:
            throw this.exception_0;
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
  function main$lambda$lambda_0(closure$gameField_0, closure$fieldRenderer_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$gameField_0, closure$fieldRenderer_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$gameField = void 0;
    this.local$gameMechanics = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            Logger.Companion.defaultLevel = Logger$Level.DEBUG;
            var fieldData = trimMargin('\n                        |[A,B,C,D,E,B,D,A]\n                        |[B,B,C,A,D,D,B,C]\n                        |[A,C,B,E,E,B,D,C]\n                        |[D,E,E,B,A,E,C,A]\n                        |[E,D,A,E,C,C,D,B]\n                        |[E,A,D,C,B,A,A,E]\n                        ');
            this.local$gameField = GameField$Companion_getInstance().fromString_61zpoe$(fieldData);
            this.local$gameMechanics = new GameMechanics(this.local$gameField);
            this.local$tmp$ = resolution.width;
            this.local$tmp$_0 = resolution.height;
            this.state_0 = 2;
            this.result_0 = getTilesSheet(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fieldRenderer = new GameFieldRenderer(this.local$gameField, this.local$tmp$, this.local$tmp$_0, this.result_0);
            this.local$$receiver.addChild_l5rad2$(fieldRenderer);
            var animator = new TileAnimator(this.local$$receiver, fieldRenderer);
            var gameFlow = new GameFlow(this.local$gameField, this.local$gameMechanics, animator);
            this.local$$receiver.addComponent_q5itx0$(new MoveTileObserver(this.local$$receiver, fieldRenderer.positionGrid, gameFlow));
            var tmp$, tmp$_0;
            (tmp$_0 = (tmp$ = this.local$$receiver != null ? get_mouse(this.local$$receiver) : null) != null ? tmp$.onClick : null) != null ? tmp$_0.add_qlkmfe$(main$lambda$lambda) : null;
            var tmp$_1, tmp$_0_0;
            (tmp$_0_0 = (tmp$_1 = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null ? tmp$_1.onKeyDown : null) != null ? tmp$_0_0.add_25kf2w$(main$lambda$lambda_0(this.local$gameField, fieldRenderer)) : null;
            this.state_0 = 3;
            this.result_0 = (new KorgeLogo(this.local$$receiver)).addLogo(this);
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
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    return korge.Korge.invoke_5pay2f$(void 0, resolution.width, resolution.height, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, color.Colors.get_61zpoe$('#2b2b2b'), debug, void 0, void 0, void 0, main$lambda, continuation);
  }
  function Coroutine$getTilesSheet(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$getTilesSheet.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getTilesSheet.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getTilesSheet.prototype.constructor = Coroutine$getTilesSheet;
  Coroutine$getTilesSheet.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (useTestTiles) {
              this.state_0 = 3;
              this.result_0 = testTiles(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = fruits(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return this.result_0;
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
  function getTilesSheet(continuation_0, suspended) {
    var instance = new Coroutine$getTilesSheet(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Resolution(width, height) {
    this.width = width;
    this.height = height;
  }
  Resolution.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resolution',
    interfaces: []
  };
  var package$j4k = _.j4k || (_.j4k = {});
  var package$candycrush = package$j4k.candycrush || (package$j4k.candycrush = {});
  package$candycrush.CandySprites = CandySprites;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  var package$compontens = package$candycrush.compontens || (package$candycrush.compontens = {});
  package$compontens.KorgeLogo = KorgeLogo;
  var package$config = package$candycrush.config || (package$candycrush.config = {});
  package$config.fruits = fruits;
  package$config.testTiles = testTiles;
  DragListener.DragEvent = DragListener$DragEvent;
  DragListener.DragEventListener = DragListener$DragEventListener;
  package$candycrush.DragListener = DragListener;
  package$candycrush.MoveTileEvent = MoveTileEvent;
  package$candycrush.ToggleTileEvent = ToggleTileEvent;
  package$candycrush.RemoveTileEvent = RemoveTileEvent;
  package$candycrush.AddTileEvent = AddTileEvent;
  package$candycrush.MoveTileListener = MoveTileListener;
  package$candycrush.DragTileListener = DragTileListener;
  package$candycrush.IllegalToggleListener = IllegalToggleListener;
  package$candycrush.SwapTileListener = SwapTileListener;
  package$candycrush.RemoveTileListener = RemoveTileListener;
  package$candycrush.AddTileListener = AddTileListener;
  GameFieldRenderer.CandyImage = GameFieldRenderer$CandyImage;
  package$candycrush.GameFieldRenderer = GameFieldRenderer;
  Object.defineProperty(GameFlow, 'Companion', {
    get: GameFlow$Companion_getInstance
  });
  $$importsForInline$$['klogger-root-klogger'] = $module$klogger_root_klogger;
  package$candycrush.GameFlow = GameFlow;
  Object.defineProperty(GameMechanics, 'Companion', {
    get: GameMechanics$Companion_getInstance
  });
  GameMechanics.Move = GameMechanics$Move;
  GameMechanics.InsertMove = GameMechanics$InsertMove;
  package$candycrush.GameMechanics = GameMechanics;
  var package$lib = package$candycrush.lib || (package$candycrush.lib = {});
  package$lib.SpriteBatch = SpriteBatch;
  PositionGrid.Position = PositionGrid$Position;
  var package$math = package$candycrush.math || (package$candycrush.math = {});
  package$math.PositionGrid = PositionGrid;
  Object.defineProperty(GameField, 'Companion', {
    get: GameField$Companion_getInstance
  });
  var package$model = package$candycrush.model || (package$candycrush.model = {});
  package$model.GameField = GameField;
  Level.Objective = Level$Objective;
  package$model.Level = Level;
  Object.defineProperty(Row, 'Companion', {
    get: Row$Companion_getInstance
  });
  package$model.Row_init_dlvqt7$ = Row_init;
  package$model.Row = Row;
  Object.defineProperty(Tile, 'A', {
    get: Tile$A_getInstance
  });
  Object.defineProperty(Tile, 'B', {
    get: Tile$B_getInstance
  });
  Object.defineProperty(Tile, 'C', {
    get: Tile$C_getInstance
  });
  Object.defineProperty(Tile, 'D', {
    get: Tile$D_getInstance
  });
  Object.defineProperty(Tile, 'E', {
    get: Tile$E_getInstance
  });
  Object.defineProperty(Tile, 'Wall', {
    get: Tile$Wall_getInstance
  });
  Object.defineProperty(Tile, 'Hole', {
    get: Tile$Hole_getInstance
  });
  Object.defineProperty(Tile, 'OutOfSpace', {
    get: Tile$OutOfSpace_getInstance
  });
  Object.defineProperty(Tile, 'Companion', {
    get: Tile$Companion_getInstance
  });
  package$model.Tile = Tile;
  package$model.TileCell = TileCell;
  MoveTileObserver.MoveTileEvent = MoveTileObserver$MoveTileEvent;
  MoveTileObserver.MoveTileListener = MoveTileObserver$MoveTileListener;
  package$candycrush.MoveTileObserver = MoveTileObserver;
  Object.defineProperty(TileAnimator, 'Companion', {
    get: TileAnimator$Companion_getInstance
  });
  TileAnimator.ImageMove = TileAnimator$ImageMove;
  TileAnimator.AnimationSettings = TileAnimator$AnimationSettings;
  TileAnimator.ImagePosition = TileAnimator$ImagePosition;
  package$candycrush.TileAnimator = TileAnimator;
  Object.defineProperty(_, 'log', {
    get: function () {
      return log;
    }
  });
  Object.defineProperty(_, 'debug', {
    get: function () {
      return debug;
    }
  });
  Object.defineProperty(_, 'useTestTiles', {
    get: function () {
      return useTestTiles;
    }
  });
  Object.defineProperty(_, 'resolution', {
    get: function () {
      return resolution;
    }
  });
  _.main = main;
  _.getTilesSheet = getTilesSheet;
  _.Resolution = Resolution;
  log = Logger.Companion.invoke_61zpoe$('main');
  debug = false;
  useTestTiles = false;
  resolution = new Resolution(1280, 1024);
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('korge-candy-crush', _);
  return _;
}));

//# sourceMappingURL=korge-candy-crush.js.map
