(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-root-kmem', 'kds-root-kds', 'korio-root-korio', 'korim-root-korim', 'korma-root-korma', 'kotlinx-coroutines-core', 'klock-root-klock'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-root-kmem'), require('kds-root-kds'), require('korio-root-korio'), require('korim-root-korim'), require('korma-root-korma'), require('kotlinx-coroutines-core'), require('klock-root-klock'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korgw-root-korgw'.");
    }
    if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korgw-root-korgw'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korgw-root-korgw'.");
    }
    root['korgw-root-korgw'] = factory(typeof this['korgw-root-korgw'] === 'undefined' ? {} : this['korgw-root-korgw'], kotlin, this['kmem-root-kmem'], this['kds-root-kds'], this['korio-root-korio'], this['korim-root-korim'], this['korma-root-korma'], this['kotlinx-coroutines-core'], this['klock-root-klock']);
  }
}(this, function (_, Kotlin, $module$kmem_root_kmem, $module$kds_root_kds, $module$korio_root_korio, $module$korim_root_korim, $module$korma_root_korma, $module$kotlinx_coroutines_core, $module$klock_root_klock) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toByte = Kotlin.toByte;
  var toChar = Kotlin.toChar;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var FBuffer = $module$kmem_root_kmem.com.soywiz.kmem.FBuffer;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var Array_0 = Array;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var getCallableRef = Kotlin.getCallableRef;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var printStackTrace = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sliceFloat32Buffer = $module$kmem_root_kmem.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
  var ArrayBuffer_init = ArrayBuffer;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var coroutines = Kotlin.kotlin.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var asyncImmediately = $module$korio_root_korio.com.soywiz.korio.async.asyncImmediately_nt96rv$;
  var Closeable = $module$korio_root_korio.com.soywiz.korio.lang.Closeable;
  var ensureNotNull = Kotlin.ensureNotNull;
  var invalidOp = $module$korio_root_korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var Bitmap32 = $module$korim_root_korim.com.soywiz.korim.bitmap.Bitmap32;
  var FloatArray2 = $module$kds_root_kds.com.soywiz.kds.FloatArray2;
  var bitmap = $module$korim_root_korim.com.soywiz.korim.bitmap;
  var equals = Kotlin.equals;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var List = Kotlin.kotlin.collections.List;
  var throwCCE = Kotlin.throwCCE;
  var Size = $module$korma_root_korma.com.soywiz.korma.geom.Size;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Signal = $module$korio_root_korio.com.soywiz.korio.async.Signal;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Pool_init = $module$kds_root_kds.com.soywiz.kds.Pool_init_rz0iom$;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var numberToDouble = Kotlin.numberToDouble;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Matrix3D = $module$korma_root_korma.com.soywiz.korma.geom.Matrix3D;
  var MajorOrder = $module$korma_root_korma.com.soywiz.korma.geom.MajorOrder;
  var copyToFloatWxH = $module$korma_root_korma.com.soywiz.korma.geom.copyToFloatWxH_zc45sq$;
  var arraycopy = $module$kmem_root_kmem.com.soywiz.kmem.arraycopy_kf4lg$;
  var Vector3D = $module$korma_root_korma.com.soywiz.korma.geom.Vector3D;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var FastStringMap = $module$kds_root_kds.com.soywiz.kds.FastStringMap_287e2$;
  var unsupported = $module$korio_root_korio.com.soywiz.korio.lang.unsupported_61zpoe$;
  var NativeImage = $module$korim_root_korim.com.soywiz.korim.bitmap.NativeImage;
  var arraycopy_0 = $module$kmem_root_kmem.com.soywiz.kmem.arraycopy_8tjh9j$;
  var Bitmap8 = $module$korim_root_korim.com.soywiz.korim.bitmap.Bitmap8;
  var arraycopy_1 = $module$kmem_root_kmem.com.soywiz.kmem.arraycopy_ou7pqt$;
  var unsupported_0 = $module$korio_root_korio.com.soywiz.korio.lang.unsupported;
  var get_isPowerOfTwo = $module$kmem_root_kmem.com.soywiz.kmem.get_isPowerOfTwo_s8ev3n$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Extra$PropertyThis = $module$kds_root_kds.com.soywiz.kds.Extra.PropertyThis;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Math_0 = Math;
  var Any = Object;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var minus_0 = Kotlin.kotlin.collections.minus_q4559j$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var printStackTrace_0 = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var numberToInt = Kotlin.numberToInt;
  var Indenter = $module$korio_root_korio.com.soywiz.korio.util.Indenter;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var lang = $module$korio_root_korio.com.soywiz.korio.lang;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var nextAlignedTo = $module$kmem_root_kmem.com.soywiz.kmem.nextAlignedTo_dqglrj$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var DateTime = $module$klock_root_klock.com.soywiz.klock.DateTime;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var getKClass = Kotlin.getKClass;
  var extract = $module$kmem_root_kmem.com.soywiz.kmem.extract_dqglrj$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_bvy38s$;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var CoroutineDispatcher = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineDispatcher;
  var Queue = $module$kds_root_kds.com.soywiz.kds.Queue;
  var PriorityQueue = $module$kds_root_kds.com.soywiz.kds.PriorityQueue;
  var Delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.Delay;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var cancelChildren = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelChildren_x105z1$;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var clamp = $module$klock_root_klock.com.soywiz.klock.clamp_izocc4$;
  var delay = $module$korio_root_korio.com.soywiz.korio.async.delay_boqi9f$;
  var launch = $module$korio_root_korio.com.soywiz.korio.async.launch_ykkwzu$;
  var CoroutineContext$Element = Kotlin.kotlin.coroutines.CoroutineContext.Element;
  var Korio = $module$korio_root_korio.com.soywiz.korio.Korio_3q5nlj$;
  var Runnable = $module$kotlinx_coroutines_core.kotlinx.coroutines.Runnable;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var klock = $module$klock_root_klock.com.soywiz.klock;
  var HtmlNativeImage = $module$korim_root_korim.com.soywiz.korim.format.HtmlNativeImage;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_7wnvza$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Once = $module$korio_root_korio.com.soywiz.korio.util.Once;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var format = $module$korim_root_korim.com.soywiz.korim.format;
  var toBase64 = $module$korio_root_korio.com.soywiz.korio.util.encoding.toBase64_964n91$;
  var CancellationException_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException_init_pdl1vj$;
  var cancelAndJoin = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelAndJoin_5dx9u$;
  var throwUPAE = Kotlin.throwUPAE;
  var util = $module$korio_root_korio.com.soywiz.korio.util;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  KmlGlFastProxy.prototype = Object.create(KmlGl.prototype);
  KmlGlFastProxy.prototype.constructor = KmlGlFastProxy;
  KmlGlCached.prototype = Object.create(KmlGlFastProxy.prototype);
  KmlGlCached.prototype.constructor = KmlGlCached;
  KmlGlDummyBase.prototype = Object.create(KmlGl.prototype);
  KmlGlDummyBase.prototype.constructor = KmlGlDummyBase;
  KmlGlDummy.prototype = Object.create(KmlGlDummyBase.prototype);
  KmlGlDummy.prototype.constructor = KmlGlDummy;
  KmlGlException.prototype = Object.create(RuntimeException.prototype);
  KmlGlException.prototype.constructor = KmlGlException;
  KmlGlProxy.prototype = Object.create(KmlGl.prototype);
  KmlGlProxy.prototype.constructor = KmlGlProxy;
  LogKmlGlProxy.prototype = Object.create(KmlGlProxy.prototype);
  LogKmlGlProxy.prototype.constructor = LogKmlGlProxy;
  CheckErrorsKmlGlProxy.prototype = Object.create(KmlGlProxy.prototype);
  CheckErrorsKmlGlProxy.prototype.constructor = CheckErrorsKmlGlProxy;
  AG$BlendEquation.prototype = Object.create(Enum.prototype);
  AG$BlendEquation.prototype.constructor = AG$BlendEquation;
  AG$BlendFactor.prototype = Object.create(Enum.prototype);
  AG$BlendFactor.prototype.constructor = AG$BlendFactor;
  AG$TextureKind.prototype = Object.create(Enum.prototype);
  AG$TextureKind.prototype.constructor = AG$TextureKind;
  AG$Buffer$Kind.prototype = Object.create(Enum.prototype);
  AG$Buffer$Kind.prototype.constructor = AG$Buffer$Kind;
  AG$DrawType.prototype = Object.create(Enum.prototype);
  AG$DrawType.prototype.constructor = AG$DrawType;
  AG$StencilOp.prototype = Object.create(Enum.prototype);
  AG$StencilOp.prototype.constructor = AG$StencilOp;
  AG$TriangleFace.prototype = Object.create(Enum.prototype);
  AG$TriangleFace.prototype.constructor = AG$TriangleFace;
  AG$CompareMode.prototype = Object.create(Enum.prototype);
  AG$CompareMode.prototype.constructor = AG$CompareMode;
  AG$FrontFace.prototype = Object.create(Enum.prototype);
  AG$FrontFace.prototype.constructor = AG$FrontFace;
  AGOpengl$GlRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  AGOpengl$GlRenderBuffer.prototype.constructor = AGOpengl$GlRenderBuffer;
  AGOpengl$GlBuffer.prototype = Object.create(AG$Buffer.prototype);
  AGOpengl$GlBuffer.prototype.constructor = AGOpengl$GlBuffer;
  AGOpengl$GlTexture.prototype = Object.create(AG$Texture.prototype);
  AGOpengl$GlTexture.prototype.constructor = AGOpengl$GlTexture;
  AGOpengl.prototype = Object.create(AG.prototype);
  AGOpengl.prototype.constructor = AGOpengl;
  DummyAG.prototype = Object.create(AG.prototype);
  DummyAG.prototype.constructor = DummyAG;
  LogAG$LogTexture.prototype = Object.create(AG$Texture.prototype);
  LogAG$LogTexture.prototype.constructor = LogAG$LogTexture;
  LogAG$LogBuffer.prototype = Object.create(AG$Buffer.prototype);
  LogAG$LogBuffer.prototype.constructor = LogAG$LogBuffer;
  LogAG$LogRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  LogAG$LogRenderBuffer.prototype.constructor = LogAG$LogRenderBuffer;
  LogAG.prototype = Object.create(AG.prototype);
  LogAG.prototype.constructor = LogAG;
  GlslGenerator.prototype = Object.create(Program$Visitor.prototype);
  GlslGenerator.prototype.constructor = GlslGenerator;
  VarKind.prototype = Object.create(Enum.prototype);
  VarKind.prototype.constructor = VarKind;
  VarType.prototype = Object.create(Enum.prototype);
  VarType.prototype.constructor = VarType;
  ShaderType.prototype = Object.create(Enum.prototype);
  ShaderType.prototype.constructor = ShaderType;
  Variable.prototype = Object.create(Operand.prototype);
  Variable.prototype.constructor = Variable;
  Attribute.prototype = Object.create(Variable.prototype);
  Attribute.prototype.constructor = Attribute;
  Varying.prototype = Object.create(Variable.prototype);
  Varying.prototype.constructor = Varying;
  Uniform.prototype = Object.create(Variable.prototype);
  Uniform.prototype.constructor = Uniform;
  Temp.prototype = Object.create(Variable.prototype);
  Temp.prototype.constructor = Temp;
  Output.prototype = Object.create(Variable.prototype);
  Output.prototype.constructor = Output;
  Program$Binop.prototype = Object.create(Operand.prototype);
  Program$Binop.prototype.constructor = Program$Binop;
  Program$IntLiteral.prototype = Object.create(Operand.prototype);
  Program$IntLiteral.prototype.constructor = Program$IntLiteral;
  Program$FloatLiteral.prototype = Object.create(Operand.prototype);
  Program$FloatLiteral.prototype.constructor = Program$FloatLiteral;
  Program$BoolLiteral.prototype = Object.create(Operand.prototype);
  Program$BoolLiteral.prototype.constructor = Program$BoolLiteral;
  Program$Vector.prototype = Object.create(Operand.prototype);
  Program$Vector.prototype.constructor = Program$Vector;
  Program$Swizzle.prototype = Object.create(Operand.prototype);
  Program$Swizzle.prototype.constructor = Program$Swizzle;
  Program$ArrayAccess.prototype = Object.create(Operand.prototype);
  Program$ArrayAccess.prototype.constructor = Program$ArrayAccess;
  Program$Func.prototype = Object.create(Operand.prototype);
  Program$Func.prototype.constructor = Program$Func;
  Program$Stm$Stms.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Stms.prototype.constructor = Program$Stm$Stms;
  Program$Stm$Set.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Set.prototype.constructor = Program$Stm$Set;
  Program$Stm$Discard.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Discard.prototype.constructor = Program$Stm$Discard;
  Program$Stm$If.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$If.prototype.constructor = Program$Stm$If;
  Shader$uniforms$lambda$ObjectLiteral.prototype = Object.create(Program$Visitor.prototype);
  Shader$uniforms$lambda$ObjectLiteral.prototype.constructor = Shader$uniforms$lambda$ObjectLiteral;
  Shader$attributes$lambda$ObjectLiteral.prototype = Object.create(Program$Visitor.prototype);
  Shader$attributes$lambda$ObjectLiteral.prototype.constructor = Shader$attributes$lambda$ObjectLiteral;
  VertexShader.prototype = Object.create(Shader.prototype);
  VertexShader.prototype.constructor = VertexShader;
  FragmentShader.prototype = Object.create(Shader.prototype);
  FragmentShader.prototype.constructor = FragmentShader;
  AGSoftware.prototype = Object.create(AG.prototype);
  AGSoftware.prototype.constructor = AGSoftware;
  PreventDefaultException.prototype = Object.create(Exception.prototype);
  PreventDefaultException.prototype.constructor = PreventDefaultException;
  MouseEvent$Type.prototype = Object.create(Enum.prototype);
  MouseEvent$Type.prototype.constructor = MouseEvent$Type;
  MouseEvent.prototype = Object.create(Event.prototype);
  MouseEvent.prototype.constructor = MouseEvent;
  TouchEvent$Type.prototype = Object.create(Enum.prototype);
  TouchEvent$Type.prototype.constructor = TouchEvent$Type;
  TouchEvent.prototype = Object.create(Event.prototype);
  TouchEvent.prototype.constructor = TouchEvent;
  KeyEvent$Type.prototype = Object.create(Enum.prototype);
  KeyEvent$Type.prototype.constructor = KeyEvent$Type;
  KeyEvent.prototype = Object.create(Event.prototype);
  KeyEvent.prototype.constructor = KeyEvent;
  GamePadConnectionEvent$Type.prototype = Object.create(Enum.prototype);
  GamePadConnectionEvent$Type.prototype.constructor = GamePadConnectionEvent$Type;
  GamePadConnectionEvent.prototype = Object.create(Event.prototype);
  GamePadConnectionEvent.prototype.constructor = GamePadConnectionEvent;
  GamePadUpdateEvent.prototype = Object.create(Event.prototype);
  GamePadUpdateEvent.prototype.constructor = GamePadUpdateEvent;
  GamePadButtonEvent$Type.prototype = Object.create(Enum.prototype);
  GamePadButtonEvent$Type.prototype.constructor = GamePadButtonEvent$Type;
  GamePadButtonEvent.prototype = Object.create(Event.prototype);
  GamePadButtonEvent.prototype.constructor = GamePadButtonEvent;
  GamePadStickEvent.prototype = Object.create(Event.prototype);
  GamePadStickEvent.prototype.constructor = GamePadStickEvent;
  ChangeEvent.prototype = Object.create(Event.prototype);
  ChangeEvent.prototype.constructor = ChangeEvent;
  ReshapeEvent.prototype = Object.create(Event.prototype);
  ReshapeEvent.prototype.constructor = ReshapeEvent;
  FullScreenEvent.prototype = Object.create(Event.prototype);
  FullScreenEvent.prototype.constructor = FullScreenEvent;
  RenderEvent.prototype = Object.create(Event.prototype);
  RenderEvent.prototype.constructor = RenderEvent;
  InitEvent.prototype = Object.create(Event.prototype);
  InitEvent.prototype.constructor = InitEvent;
  ResumeEvent.prototype = Object.create(Event.prototype);
  ResumeEvent.prototype.constructor = ResumeEvent;
  PauseEvent.prototype = Object.create(Event.prototype);
  PauseEvent.prototype.constructor = PauseEvent;
  StopEvent.prototype = Object.create(Event.prototype);
  StopEvent.prototype.constructor = StopEvent;
  DestroyEvent.prototype = Object.create(Event.prototype);
  DestroyEvent.prototype.constructor = DestroyEvent;
  DisposeEvent.prototype = Object.create(Event.prototype);
  DisposeEvent.prototype.constructor = DisposeEvent;
  DropFileEvent$Type.prototype = Object.create(Enum.prototype);
  DropFileEvent$Type.prototype.constructor = DropFileEvent$Type;
  DropFileEvent.prototype = Object.create(Event.prototype);
  DropFileEvent.prototype.constructor = DropFileEvent;
  MouseButton.prototype = Object.create(Enum.prototype);
  MouseButton.prototype.constructor = MouseButton;
  Key.prototype = Object.create(Enum.prototype);
  Key.prototype.constructor = Key;
  GameStick.prototype = Object.create(Enum.prototype);
  GameStick.prototype.constructor = GameStick;
  GameButton.prototype = Object.create(Enum.prototype);
  GameButton.prototype.constructor = GameButton;
  StandardGamepadMapping.prototype = Object.create(GamepadMapping.prototype);
  StandardGamepadMapping.prototype.constructor = StandardGamepadMapping;
  GameWindowCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  GameWindowCoroutineDispatcher.prototype.constructor = GameWindowCoroutineDispatcher;
  GameWindow$Quality.prototype = Object.create(Enum.prototype);
  GameWindow$Quality.prototype.constructor = GameWindow$Quality;
  GameWindow.prototype = Object.create(EventDispatcher$Mixin.prototype);
  GameWindow.prototype.constructor = GameWindow;
  KmlGlJsCanvas.prototype = Object.create(KmlGl.prototype);
  KmlGlJsCanvas.prototype.constructor = KmlGlJsCanvas;
  AGWebgl.prototype = Object.create(AGOpengl.prototype);
  AGWebgl.prototype.constructor = AGWebgl;
  BrowserGameWindow.prototype = Object.create(GameWindow.prototype);
  BrowserGameWindow.prototype.constructor = BrowserGameWindow;
  NodeJsGameWindow.prototype = Object.create(GameWindow.prototype);
  NodeJsGameWindow.prototype.constructor = NodeJsGameWindow;
  Nimbus_111_1420_Safari_GamepadMapping.prototype = Object.create(GamepadMapping.prototype);
  Nimbus_111_1420_Safari_GamepadMapping.prototype.constructor = Nimbus_111_1420_Safari_GamepadMapping;
  function IKmlGl() {
  }
  IKmlGl.prototype.startFrame = function () {
  };
  IKmlGl.prototype.endFrame = function () {
  };
  IKmlGl.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IKmlGl',
    interfaces: []
  };
  function toAsciiString($receiver) {
    var tmp$;
    var out = '';
    tmp$ = $receiver.mem.byteLength;
    for (var n = 0; n < tmp$; n++) {
      var b = $receiver.getByte_za3lpa$(n);
      if (b === toByte(0))
        break;
      out += String.fromCharCode(toChar(b));
    }
    return out;
  }
  function putAsciiString($receiver, str) {
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if ($receiver.mem.byteLength >= n) {
        $receiver.setByte_6t1wet$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0), toByte(c | 0));
      }
    }
    if ($receiver.mem.byteLength >= n) {
      $receiver.setByte_6t1wet$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), toByte(0));
    }
    return $receiver;
  }
  function kmlByteBufferOf(values) {
    var $receiver = FBuffer.Companion.invoke_za3lpa$(values.length * 1 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setByte_6t1wet$(n, values[n]);
    return $receiver;
  }
  function kmlShortBufferOf(values) {
    var $receiver = FBuffer.Companion.invoke_za3lpa$(values.length * 2 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setShort_2bqt6h$(n, values[n]);
    return $receiver;
  }
  function kmlIntBufferOf(values) {
    var $receiver = FBuffer.Companion.invoke_za3lpa$(values.length * 4 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setInt_vux9f0$(n, values[n]);
    return $receiver;
  }
  function kmlFloatBufferOf(values) {
    var $receiver = FBuffer.Companion.invoke_za3lpa$(values.length * 4 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setFloat_24o109$(n, values[n]);
    return $receiver;
  }
  var DataBufferAlloc = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.DataBufferAlloc_k36cnm$', wrapFunction(function () {
    var FBuffer = _.$$importsForInline$$['kmem-root-kmem'].com.soywiz.kmem.FBuffer;
    return function (size, callback) {
      var buffer = FBuffer.Companion.invoke_za3lpa$(size);
      try {
        return callback(buffer);
      }
      finally {
      }
    };
  }));
  function toTempBuffer($receiver, callback) {
    var buffer = FBuffer.Companion.invoke_za3lpa$($receiver.length);
    var ints = buffer.arrayInt;
    for (var n = 0; n !== $receiver.length; ++n) {
      ints[n] = $receiver[n];
    }
    return callback(buffer);
  }
  function KmlGl() {
    this.$delegate_jm7esb$_0 = new Extra$Mixin();
    this.DEPTH_BUFFER_BIT = 256;
    this.STENCIL_BUFFER_BIT = 1024;
    this.COLOR_BUFFER_BIT = 16384;
    this.FALSE = 0;
    this.TRUE = 1;
    this.POINTS = 0;
    this.LINES = 1;
    this.LINE_LOOP = 2;
    this.LINE_STRIP = 3;
    this.TRIANGLES = 4;
    this.TRIANGLE_STRIP = 5;
    this.TRIANGLE_FAN = 6;
    this.ZERO = 0;
    this.ONE = 1;
    this.SRC_COLOR = 768;
    this.ONE_MINUS_SRC_COLOR = 769;
    this.SRC_ALPHA = 770;
    this.ONE_MINUS_SRC_ALPHA = 771;
    this.DST_ALPHA = 772;
    this.ONE_MINUS_DST_ALPHA = 773;
    this.DST_COLOR = 774;
    this.ONE_MINUS_DST_COLOR = 775;
    this.SRC_ALPHA_SATURATE = 776;
    this.FUNC_ADD = 32774;
    this.BLEND_EQUATION = 32777;
    this.BLEND_EQUATION_RGB = 32777;
    this.BLEND_EQUATION_ALPHA = 34877;
    this.FUNC_SUBTRACT = 32778;
    this.FUNC_REVERSE_SUBTRACT = 32779;
    this.BLEND_DST_RGB = 32968;
    this.BLEND_SRC_RGB = 32969;
    this.BLEND_DST_ALPHA = 32970;
    this.BLEND_SRC_ALPHA = 32971;
    this.CONSTANT_COLOR = 32769;
    this.ONE_MINUS_CONSTANT_COLOR = 32770;
    this.CONSTANT_ALPHA = 32771;
    this.ONE_MINUS_CONSTANT_ALPHA = 32772;
    this.BLEND_COLOR = 32773;
    this.ARRAY_BUFFER = 34962;
    this.ELEMENT_ARRAY_BUFFER = 34963;
    this.ARRAY_BUFFER_BINDING = 34964;
    this.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
    this.STREAM_DRAW = 35040;
    this.STATIC_DRAW = 35044;
    this.DYNAMIC_DRAW = 35048;
    this.BUFFER_SIZE = 34660;
    this.BUFFER_USAGE = 34661;
    this.CURRENT_VERTEX_ATTRIB = 34342;
    this.FRONT = 1028;
    this.BACK = 1029;
    this.FRONT_AND_BACK = 1032;
    this.TEXTURE_2D = 3553;
    this.CULL_FACE = 2884;
    this.BLEND = 3042;
    this.DITHER = 3024;
    this.STENCIL_TEST = 2960;
    this.DEPTH_TEST = 2929;
    this.SCISSOR_TEST = 3089;
    this.POLYGON_OFFSET_FILL = 32823;
    this.SAMPLE_ALPHA_TO_COVERAGE = 32926;
    this.SAMPLE_COVERAGE = 32928;
    this.NO_ERROR = 0;
    this.INVALID_ENUM = 1280;
    this.INVALID_VALUE = 1281;
    this.INVALID_OPERATION = 1282;
    this.OUT_OF_MEMORY = 1285;
    this.CW = 2304;
    this.CCW = 2305;
    this.LINE_WIDTH = 2849;
    this.ALIASED_POINT_SIZE_RANGE = 33901;
    this.ALIASED_LINE_WIDTH_RANGE = 33902;
    this.CULL_FACE_MODE = 2885;
    this.FRONT_FACE = 2886;
    this.DEPTH_RANGE = 2928;
    this.DEPTH_WRITEMASK = 2930;
    this.DEPTH_CLEAR_VALUE = 2931;
    this.DEPTH_FUNC = 2932;
    this.STENCIL_CLEAR_VALUE = 2961;
    this.STENCIL_FUNC = 2962;
    this.STENCIL_FAIL = 2964;
    this.STENCIL_PASS_DEPTH_FAIL = 2965;
    this.STENCIL_PASS_DEPTH_PASS = 2966;
    this.STENCIL_REF = 2967;
    this.STENCIL_VALUE_MASK = 2963;
    this.STENCIL_WRITEMASK = 2968;
    this.STENCIL_BACK_FUNC = 34816;
    this.STENCIL_BACK_FAIL = 34817;
    this.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
    this.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
    this.STENCIL_BACK_REF = 36003;
    this.STENCIL_BACK_VALUE_MASK = 36004;
    this.STENCIL_BACK_WRITEMASK = 36005;
    this.VIEWPORT = 2978;
    this.SCISSOR_BOX = 3088;
    this.COLOR_CLEAR_VALUE = 3106;
    this.COLOR_WRITEMASK = 3107;
    this.UNPACK_ALIGNMENT = 3317;
    this.PACK_ALIGNMENT = 3333;
    this.MAX_TEXTURE_SIZE = 3379;
    this.MAX_VIEWPORT_DIMS = 3386;
    this.SUBPIXEL_BITS = 3408;
    this.RED_BITS = 3410;
    this.GREEN_BITS = 3411;
    this.BLUE_BITS = 3412;
    this.ALPHA_BITS = 3413;
    this.DEPTH_BITS = 3414;
    this.STENCIL_BITS = 3415;
    this.POLYGON_OFFSET_UNITS = 10752;
    this.POLYGON_OFFSET_FACTOR = 32824;
    this.TEXTURE_BINDING_2D = 32873;
    this.SAMPLE_BUFFERS = 32936;
    this.SAMPLES = 32937;
    this.SAMPLE_COVERAGE_VALUE = 32938;
    this.SAMPLE_COVERAGE_INVERT = 32939;
    this.NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
    this.COMPRESSED_TEXTURE_FORMATS = 34467;
    this.DONT_CARE = 4352;
    this.FASTEST = 4353;
    this.NICEST = 4354;
    this.GENERATE_MIPMAP_HINT = 33170;
    this.BYTE = 5120;
    this.UNSIGNED_BYTE = 5121;
    this.SHORT = 5122;
    this.UNSIGNED_SHORT = 5123;
    this.INT = 5124;
    this.UNSIGNED_INT = 5125;
    this.FLOAT = 5126;
    this.FIXED = 5132;
    this.DEPTH_COMPONENT = 6402;
    this.ALPHA = 6406;
    this.RGB = 6407;
    this.RGBA = 6408;
    this.LUMINANCE = 6409;
    this.LUMINANCE_ALPHA = 6410;
    this.UNSIGNED_SHORT_4_4_4_4 = 32819;
    this.UNSIGNED_SHORT_5_5_5_1 = 32820;
    this.UNSIGNED_SHORT_5_6_5 = 33635;
    this.FRAGMENT_SHADER = 35632;
    this.VERTEX_SHADER = 35633;
    this.MAX_VERTEX_ATTRIBS = 34921;
    this.MAX_VERTEX_UNIFORM_VECTORS = 36347;
    this.MAX_VARYING_VECTORS = 36348;
    this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
    this.MAX_TEXTURE_IMAGE_UNITS = 34930;
    this.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
    this.SHADER_TYPE = 35663;
    this.DELETE_STATUS = 35712;
    this.LINK_STATUS = 35714;
    this.VALIDATE_STATUS = 35715;
    this.ATTACHED_SHADERS = 35717;
    this.ACTIVE_UNIFORMS = 35718;
    this.ACTIVE_UNIFORM_MAX_LENGTH = 35719;
    this.ACTIVE_ATTRIBUTES = 35721;
    this.ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722;
    this.SHADING_LANGUAGE_VERSION = 35724;
    this.CURRENT_PROGRAM = 35725;
    this.NEVER = 512;
    this.LESS = 513;
    this.EQUAL = 514;
    this.LEQUAL = 515;
    this.GREATER = 516;
    this.NOTEQUAL = 517;
    this.GEQUAL = 518;
    this.ALWAYS = 519;
    this.KEEP = 7680;
    this.REPLACE = 7681;
    this.INCR = 7682;
    this.DECR = 7683;
    this.INVERT = 5386;
    this.INCR_WRAP = 34055;
    this.DECR_WRAP = 34056;
    this.VENDOR = 7936;
    this.RENDERER = 7937;
    this.VERSION = 7938;
    this.EXTENSIONS = 7939;
    this.NEAREST = 9728;
    this.LINEAR = 9729;
    this.NEAREST_MIPMAP_NEAREST = 9984;
    this.LINEAR_MIPMAP_NEAREST = 9985;
    this.NEAREST_MIPMAP_LINEAR = 9986;
    this.LINEAR_MIPMAP_LINEAR = 9987;
    this.TEXTURE_MAG_FILTER = 10240;
    this.TEXTURE_MIN_FILTER = 10241;
    this.TEXTURE_WRAP_S = 10242;
    this.TEXTURE_WRAP_T = 10243;
    this.TEXTURE = 5890;
    this.TEXTURE_CUBE_MAP = 34067;
    this.TEXTURE_BINDING_CUBE_MAP = 34068;
    this.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
    this.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
    this.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
    this.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
    this.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
    this.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
    this.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
    this.TEXTURE0 = 33984;
    this.TEXTURE1 = 33985;
    this.TEXTURE2 = 33986;
    this.TEXTURE3 = 33987;
    this.TEXTURE4 = 33988;
    this.TEXTURE5 = 33989;
    this.TEXTURE6 = 33990;
    this.TEXTURE7 = 33991;
    this.TEXTURE8 = 33992;
    this.TEXTURE9 = 33993;
    this.TEXTURE10 = 33994;
    this.TEXTURE11 = 33995;
    this.TEXTURE12 = 33996;
    this.TEXTURE13 = 33997;
    this.TEXTURE14 = 33998;
    this.TEXTURE15 = 33999;
    this.TEXTURE16 = 34000;
    this.TEXTURE17 = 34001;
    this.TEXTURE18 = 34002;
    this.TEXTURE19 = 34003;
    this.TEXTURE20 = 34004;
    this.TEXTURE21 = 34005;
    this.TEXTURE22 = 34006;
    this.TEXTURE23 = 34007;
    this.TEXTURE24 = 34008;
    this.TEXTURE25 = 34009;
    this.TEXTURE26 = 34010;
    this.TEXTURE27 = 34011;
    this.TEXTURE28 = 34012;
    this.TEXTURE29 = 34013;
    this.TEXTURE30 = 34014;
    this.TEXTURE31 = 34015;
    this.ACTIVE_TEXTURE = 34016;
    this.REPEAT = 10497;
    this.CLAMP_TO_EDGE = 33071;
    this.MIRRORED_REPEAT = 33648;
    this.FLOAT_VEC2 = 35664;
    this.FLOAT_VEC3 = 35665;
    this.FLOAT_VEC4 = 35666;
    this.INT_VEC2 = 35667;
    this.INT_VEC3 = 35668;
    this.INT_VEC4 = 35669;
    this.BOOL = 35670;
    this.BOOL_VEC2 = 35671;
    this.BOOL_VEC3 = 35672;
    this.BOOL_VEC4 = 35673;
    this.FLOAT_MAT2 = 35674;
    this.FLOAT_MAT3 = 35675;
    this.FLOAT_MAT4 = 35676;
    this.SAMPLER_2D = 35678;
    this.SAMPLER_CUBE = 35680;
    this.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
    this.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
    this.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
    this.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
    this.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
    this.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
    this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
    this.IMPLEMENTATION_COLOR_READ_TYPE = 35738;
    this.IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
    this.COMPILE_STATUS = 35713;
    this.INFO_LOG_LENGTH = 35716;
    this.SHADER_SOURCE_LENGTH = 35720;
    this.SHADER_COMPILER = 36346;
    this.SHADER_BINARY_FORMATS = 36344;
    this.NUM_SHADER_BINARY_FORMATS = 36345;
    this.LOW_FLOAT = 36336;
    this.MEDIUM_FLOAT = 36337;
    this.HIGH_FLOAT = 36338;
    this.LOW_INT = 36339;
    this.MEDIUM_INT = 36340;
    this.HIGH_INT = 36341;
    this.FRAMEBUFFER = 36160;
    this.RENDERBUFFER = 36161;
    this.RGBA4 = 32854;
    this.RGB5_A1 = 32855;
    this.RGB565 = 36194;
    this.DEPTH_COMPONENT16 = 33189;
    this.STENCIL_INDEX8 = 36168;
    this.RENDERBUFFER_WIDTH = 36162;
    this.RENDERBUFFER_HEIGHT = 36163;
    this.RENDERBUFFER_INTERNAL_FORMAT = 36164;
    this.RENDERBUFFER_RED_SIZE = 36176;
    this.RENDERBUFFER_GREEN_SIZE = 36177;
    this.RENDERBUFFER_BLUE_SIZE = 36178;
    this.RENDERBUFFER_ALPHA_SIZE = 36179;
    this.RENDERBUFFER_DEPTH_SIZE = 36180;
    this.RENDERBUFFER_STENCIL_SIZE = 36181;
    this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
    this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
    this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
    this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
    this.COLOR_ATTACHMENT0 = 36064;
    this.DEPTH_ATTACHMENT = 36096;
    this.STENCIL_ATTACHMENT = 36128;
    this.NONE = 0;
    this.FRAMEBUFFER_COMPLETE = 36053;
    this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
    this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
    this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
    this.FRAMEBUFFER_UNSUPPORTED = 36061;
    this.FRAMEBUFFER_BINDING = 36006;
    this.RENDERBUFFER_BINDING = 36007;
    this.MAX_RENDERBUFFER_SIZE = 34024;
    this.INVALID_FRAMEBUFFER_OPERATION = 1286;
  }
  KmlGl.prototype.startFrame = function () {
  };
  KmlGl.prototype.endFrame = function () {
  };
  Object.defineProperty(KmlGl.prototype, 'extra', {
    get: function () {
      return this.$delegate_jm7esb$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_jm7esb$_0.extra = tmp$;
    }
  });
  KmlGl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGl',
    interfaces: [IKmlGl, Extra]
  };
  function KmlGlCached(parent) {
    KmlGlFastProxy.call(this, parent);
    this.lastLineWidth_0 = new CachedFloat(-1.0);
    this.lastActiveTexture_0 = new CachedInt(-1);
    this.lastColorMask_0 = new CachedInt(-1);
    this.lastDepthMask_0 = new CachedInt(-1);
    this.lastDepth_0 = new CachedFloat2(-1.0, -1.0);
    this.lastEquation_0 = new CachedInt(-1);
    this.lastEquationSeparate_0 = new CachedInt2(-1, -1);
    this.lastBlendFunc_0 = new CachedInt2(-1, -1);
    this.lastBlendFuncSeparate_0 = new CachedInt4(-1, -1, -1, -1);
    this.lastStencilMask_0 = new CachedInt(-1);
    this.lastFrontFace_0 = new CachedInt(-1);
    var array = Array_0(1024);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = null;
    }
    this.enables_0 = array;
    this.lastScissor_0 = new CachedInt4(-1, -1, -1, -1);
    this.lastUseProgram_0 = new CachedInt(-1);
  }
  KmlGlCached.prototype.lineWidth_mx4ult$ = function (width) {
    var $this = this.lastLineWidth_0;
    if ($this.current !== width) {
      $this.current = width;
      KmlGlFastProxy.prototype.lineWidth_mx4ult$.call(this, width);
    }
  };
  KmlGlCached.prototype.activeTexture_za3lpa$ = function (texture) {
    var $this = this.lastActiveTexture_0;
    if ($this.current !== texture) {
      $this.current = texture;
      KmlGlFastProxy.prototype.activeTexture_za3lpa$.call(this, texture);
    }
  };
  KmlGlCached.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    var tmp$ = this.lastColorMask_0;
    var value = (red ? 1 : 0) << 0 | (green ? 1 : 0) << 1 | (blue ? 1 : 0) << 2 | (alpha ? 1 : 0) << 3;
    if (tmp$.current !== value) {
      tmp$.current = value;
      KmlGlFastProxy.prototype.colorMask_nyyhg$.call(this, red, green, blue, alpha);
    }
  };
  KmlGlCached.prototype.depthMask_6taknv$ = function (flag) {
    var tmp$ = this.lastDepthMask_0;
    var value = flag ? 1 : 0;
    if (tmp$.current !== value) {
      tmp$.current = value;
      KmlGlFastProxy.prototype.depthMask_6taknv$.call(this, flag);
    }
  };
  KmlGlCached.prototype.depthRangef_dleff0$ = function (n, f) {
    var $this = this.lastDepth_0;
    if ($this.c1 !== n || $this.c2 !== f) {
      $this.c1 = n;
      $this.c2 = f;
      KmlGlFastProxy.prototype.depthRangef_dleff0$.call(this, n, f);
    }
  };
  KmlGlCached.prototype.blendEquation_za3lpa$ = function (mode) {
    var $this = this.lastEquation_0;
    if ($this.current !== mode) {
      $this.current = mode;
      KmlGlFastProxy.prototype.blendEquation_za3lpa$.call(this, mode);
    }
  };
  KmlGlCached.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    var $this = this.lastEquationSeparate_0;
    if ($this.c1 !== modeRGB || $this.c2 !== modeAlpha) {
      $this.c1 = modeRGB;
      $this.c2 = modeAlpha;
      KmlGlFastProxy.prototype.blendEquationSeparate_vux9f0$.call(this, modeRGB, modeAlpha);
    }
  };
  KmlGlCached.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    var $this = this.lastBlendFunc_0;
    if ($this.c1 !== sfactor || $this.c2 !== dfactor) {
      $this.c1 = sfactor;
      $this.c2 = dfactor;
      KmlGlFastProxy.prototype.blendFunc_vux9f0$.call(this, sfactor, dfactor);
    }
  };
  KmlGlCached.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    var $this = this.lastBlendFuncSeparate_0;
    if ($this.c1 !== sfactorRGB || $this.c2 !== dfactorRGB || $this.c3 !== sfactorAlpha || $this.c4 !== dfactorAlpha) {
      $this.c1 = sfactorRGB;
      $this.c2 = dfactorRGB;
      $this.c3 = sfactorAlpha;
      $this.c4 = dfactorAlpha;
      KmlGlFastProxy.prototype.blendFuncSeparate_tjonv8$.call(this, sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
    }
  };
  KmlGlCached.prototype.stencilMask_za3lpa$ = function (mask) {
    var $this = this.lastStencilMask_0;
    if ($this.current !== mask) {
      $this.current = mask;
      KmlGlFastProxy.prototype.stencilMask_za3lpa$.call(this, mask);
    }
  };
  KmlGlCached.prototype.frontFace_za3lpa$ = function (mode) {
    var $this = this.lastFrontFace_0;
    if ($this.current !== mode) {
      $this.current = mode;
      KmlGlFastProxy.prototype.frontFace_za3lpa$.call(this, mode);
    }
  };
  KmlGlCached.prototype.enableDisable_0 = function (cap, enable) {
    var index = cap - this.BLEND | 0;
    if (!get_indices(this.enables_0).contains_mef7kx$(index))
      return;
    if (this.enables_0[index] !== enable) {
      this.enables_0[index] = enable;
      if (enable) {
        this.parent.enable_za3lpa$(cap);
      }
       else {
        this.parent.disable_za3lpa$(cap);
      }
    }
  };
  KmlGlCached.prototype.enable_za3lpa$ = function (cap) {
    this.enableDisable_0(cap, true);
  };
  KmlGlCached.prototype.disable_za3lpa$ = function (cap) {
    this.enableDisable_0(cap, false);
  };
  KmlGlCached.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    var $this = this.lastScissor_0;
    if ($this.c1 !== x || $this.c2 !== y || $this.c3 !== width || $this.c4 !== height) {
      $this.c1 = x;
      $this.c2 = y;
      $this.c3 = width;
      $this.c4 = height;
      KmlGlFastProxy.prototype.scissor_tjonv8$.call(this, x, y, width, height);
    }
  };
  KmlGlCached.prototype.useProgram_za3lpa$ = function (program) {
    var $this = this.lastUseProgram_0;
    if ($this.current !== program) {
      $this.current = program;
      KmlGlFastProxy.prototype.useProgram_za3lpa$.call(this, program);
    }
  };
  KmlGlCached.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlCached',
    interfaces: [KmlGlFastProxy]
  };
  function KmlGlDummy() {
    KmlGlDummy_instance = this;
    KmlGlDummyBase.call(this);
  }
  KmlGlDummy.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KmlGlDummy',
    interfaces: [KmlGlDummyBase]
  };
  var KmlGlDummy_instance = null;
  function KmlGlDummy_getInstance() {
    if (KmlGlDummy_instance === null) {
      new KmlGlDummy();
    }
    return KmlGlDummy_instance;
  }
  function KmlGlDummyBase() {
    KmlGl.call(this);
  }
  KmlGlDummyBase.prototype.activeTexture_za3lpa$ = function (texture) {
  };
  KmlGlDummyBase.prototype.attachShader_vux9f0$ = function (program, shader) {
  };
  KmlGlDummyBase.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
  };
  KmlGlDummyBase.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
  };
  KmlGlDummyBase.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
  };
  KmlGlDummyBase.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
  };
  KmlGlDummyBase.prototype.bindTexture_vux9f0$ = function (target, texture) {
  };
  KmlGlDummyBase.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
  };
  KmlGlDummyBase.prototype.blendEquation_za3lpa$ = function (mode) {
  };
  KmlGlDummyBase.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
  };
  KmlGlDummyBase.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
  };
  KmlGlDummyBase.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
  };
  KmlGlDummyBase.prototype.bufferData_r7xkly$ = function (target, size, data, usage) {
  };
  KmlGlDummyBase.prototype.bufferSubData_emhadu$ = function (target, offset, size, data) {
  };
  KmlGlDummyBase.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return 0;
  };
  KmlGlDummyBase.prototype.clear_za3lpa$ = function (mask) {
  };
  KmlGlDummyBase.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
  };
  KmlGlDummyBase.prototype.clearDepthf_mx4ult$ = function (d) {
  };
  KmlGlDummyBase.prototype.clearStencil_za3lpa$ = function (s) {
  };
  KmlGlDummyBase.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
  };
  KmlGlDummyBase.prototype.compileShader_za3lpa$ = function (shader) {
  };
  KmlGlDummyBase.prototype.compressedTexImage2D_1uavrm$ = function (target, level, internalformat, width, height, border, imageSize, data) {
  };
  KmlGlDummyBase.prototype.compressedTexSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
  };
  KmlGlDummyBase.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
  };
  KmlGlDummyBase.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
  };
  KmlGlDummyBase.prototype.createProgram = function () {
    return 0;
  };
  KmlGlDummyBase.prototype.createShader_za3lpa$ = function (type) {
    return 0;
  };
  KmlGlDummyBase.prototype.cullFace_za3lpa$ = function (mode) {
  };
  KmlGlDummyBase.prototype.deleteBuffers_26fqmq$ = function (n, items) {
  };
  KmlGlDummyBase.prototype.deleteFramebuffers_26fqmq$ = function (n, items) {
  };
  KmlGlDummyBase.prototype.deleteProgram_za3lpa$ = function (program) {
  };
  KmlGlDummyBase.prototype.deleteRenderbuffers_26fqmq$ = function (n, items) {
  };
  KmlGlDummyBase.prototype.deleteShader_za3lpa$ = function (shader) {
  };
  KmlGlDummyBase.prototype.deleteTextures_26fqmq$ = function (n, items) {
  };
  KmlGlDummyBase.prototype.depthFunc_za3lpa$ = function (func) {
  };
  KmlGlDummyBase.prototype.depthMask_6taknv$ = function (flag) {
  };
  KmlGlDummyBase.prototype.depthRangef_dleff0$ = function (n, f) {
  };
  KmlGlDummyBase.prototype.detachShader_vux9f0$ = function (program, shader) {
  };
  KmlGlDummyBase.prototype.disable_za3lpa$ = function (cap) {
  };
  KmlGlDummyBase.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
  };
  KmlGlDummyBase.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
  };
  KmlGlDummyBase.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
  };
  KmlGlDummyBase.prototype.enable_za3lpa$ = function (cap) {
  };
  KmlGlDummyBase.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
  };
  KmlGlDummyBase.prototype.finish = function () {
  };
  KmlGlDummyBase.prototype.flush = function () {
  };
  KmlGlDummyBase.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
  };
  KmlGlDummyBase.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
  };
  KmlGlDummyBase.prototype.frontFace_za3lpa$ = function (mode) {
  };
  KmlGlDummyBase.prototype.genBuffers_26fqmq$ = function (n, buffers) {
  };
  KmlGlDummyBase.prototype.generateMipmap_za3lpa$ = function (target) {
  };
  KmlGlDummyBase.prototype.genFramebuffers_26fqmq$ = function (n, framebuffers) {
  };
  KmlGlDummyBase.prototype.genRenderbuffers_26fqmq$ = function (n, renderbuffers) {
  };
  KmlGlDummyBase.prototype.genTextures_26fqmq$ = function (n, textures) {
  };
  KmlGlDummyBase.prototype.getActiveAttrib_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
  };
  KmlGlDummyBase.prototype.getActiveUniform_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
  };
  KmlGlDummyBase.prototype.getAttachedShaders_vfc54s$ = function (program, maxCount, count, shaders) {
  };
  KmlGlDummyBase.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    return 0;
  };
  KmlGlDummyBase.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    return 0;
  };
  KmlGlDummyBase.prototype.getBooleanv_26fqmq$ = function (pname, data) {
  };
  KmlGlDummyBase.prototype.getBufferParameteriv_7cqqrs$ = function (target, pname, params) {
  };
  KmlGlDummyBase.prototype.getError = function () {
    return 0;
  };
  KmlGlDummyBase.prototype.getFloatv_26fqmq$ = function (pname, data) {
  };
  KmlGlDummyBase.prototype.getFramebufferAttachmentParameteriv_emhadu$ = function (target, attachment, pname, params) {
  };
  KmlGlDummyBase.prototype.getIntegerv_26fqmq$ = function (pname, data) {
  };
  KmlGlDummyBase.prototype.getProgramInfoLog_vfc54s$ = function (program, bufSize, length, infoLog) {
  };
  KmlGlDummyBase.prototype.getRenderbufferParameteriv_7cqqrs$ = function (target, pname, params) {
  };
  KmlGlDummyBase.prototype.getProgramiv_7cqqrs$ = function (program, pname, params) {
  };
  KmlGlDummyBase.prototype.getShaderiv_7cqqrs$ = function (shader, pname, params) {
  };
  KmlGlDummyBase.prototype.getShaderInfoLog_vfc54s$ = function (shader, bufSize, length, infoLog) {
  };
  KmlGlDummyBase.prototype.getShaderPrecisionFormat_vfc54s$ = function (shadertype, precisiontype, range, precision) {
  };
  KmlGlDummyBase.prototype.getShaderSource_vfc54s$ = function (shader, bufSize, length, source) {
  };
  KmlGlDummyBase.prototype.getString_za3lpa$ = function (name) {
    return '';
  };
  KmlGlDummyBase.prototype.getTexParameterfv_7cqqrs$ = function (target, pname, params) {
  };
  KmlGlDummyBase.prototype.getTexParameteriv_7cqqrs$ = function (target, pname, params) {
  };
  KmlGlDummyBase.prototype.getUniformfv_7cqqrs$ = function (program, location, params) {
  };
  KmlGlDummyBase.prototype.getUniformiv_7cqqrs$ = function (program, location, params) {
  };
  KmlGlDummyBase.prototype.getVertexAttribfv_7cqqrs$ = function (index, pname, params) {
  };
  KmlGlDummyBase.prototype.getVertexAttribiv_7cqqrs$ = function (index, pname, params) {
  };
  KmlGlDummyBase.prototype.getVertexAttribPointerv_7cqqrs$ = function (index, pname, pointer) {
  };
  KmlGlDummyBase.prototype.hint_vux9f0$ = function (target, mode) {
  };
  KmlGlDummyBase.prototype.isBuffer_za3lpa$ = function (buffer) {
    return false;
  };
  KmlGlDummyBase.prototype.isEnabled_za3lpa$ = function (cap) {
    return false;
  };
  KmlGlDummyBase.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    return false;
  };
  KmlGlDummyBase.prototype.isProgram_za3lpa$ = function (program) {
    return false;
  };
  KmlGlDummyBase.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    return false;
  };
  KmlGlDummyBase.prototype.isShader_za3lpa$ = function (shader) {
    return false;
  };
  KmlGlDummyBase.prototype.isTexture_za3lpa$ = function (texture) {
    return false;
  };
  KmlGlDummyBase.prototype.lineWidth_mx4ult$ = function (width) {
  };
  KmlGlDummyBase.prototype.linkProgram_za3lpa$ = function (program) {
  };
  KmlGlDummyBase.prototype.pixelStorei_vux9f0$ = function (pname, param) {
  };
  KmlGlDummyBase.prototype.polygonOffset_dleff0$ = function (factor, units) {
  };
  KmlGlDummyBase.prototype.readPixels_8vifew$ = function (x, y, width, height, format, type, pixels) {
  };
  KmlGlDummyBase.prototype.releaseShaderCompiler = function () {
  };
  KmlGlDummyBase.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
  };
  KmlGlDummyBase.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
  };
  KmlGlDummyBase.prototype.scissor_tjonv8$ = function (x, y, width, height) {
  };
  KmlGlDummyBase.prototype.shaderBinary_y4twta$ = function (count, shaders, binaryformat, binary, length) {
  };
  KmlGlDummyBase.prototype.shaderSource_19mbxw$ = function (shader, string) {
  };
  KmlGlDummyBase.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
  };
  KmlGlDummyBase.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
  };
  KmlGlDummyBase.prototype.stencilMask_za3lpa$ = function (mask) {
  };
  KmlGlDummyBase.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
  };
  KmlGlDummyBase.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
  };
  KmlGlDummyBase.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
  };
  KmlGlDummyBase.prototype.texImage2D_byudfd$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
  };
  KmlGlDummyBase.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
  };
  KmlGlDummyBase.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
  };
  KmlGlDummyBase.prototype.texParameterfv_7cqqrs$ = function (target, pname, params) {
  };
  KmlGlDummyBase.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
  };
  KmlGlDummyBase.prototype.texParameteriv_7cqqrs$ = function (target, pname, params) {
  };
  KmlGlDummyBase.prototype.texSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
  };
  KmlGlDummyBase.prototype.uniform1f_24o109$ = function (location, v0) {
  };
  KmlGlDummyBase.prototype.uniform1fv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform1i_vux9f0$ = function (location, v0) {
  };
  KmlGlDummyBase.prototype.uniform1iv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
  };
  KmlGlDummyBase.prototype.uniform2fv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
  };
  KmlGlDummyBase.prototype.uniform2iv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
  };
  KmlGlDummyBase.prototype.uniform3fv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
  };
  KmlGlDummyBase.prototype.uniform3iv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
  };
  KmlGlDummyBase.prototype.uniform4fv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
  };
  KmlGlDummyBase.prototype.uniform4iv_7cqqrs$ = function (location, count, value) {
  };
  KmlGlDummyBase.prototype.uniformMatrix2fv_24ez2x$ = function (location, count, transpose, value) {
  };
  KmlGlDummyBase.prototype.uniformMatrix3fv_24ez2x$ = function (location, count, transpose, value) {
  };
  KmlGlDummyBase.prototype.uniformMatrix4fv_24ez2x$ = function (location, count, transpose, value) {
  };
  KmlGlDummyBase.prototype.useProgram_za3lpa$ = function (program) {
  };
  KmlGlDummyBase.prototype.validateProgram_za3lpa$ = function (program) {
  };
  KmlGlDummyBase.prototype.vertexAttrib1f_24o109$ = function (index, x) {
  };
  KmlGlDummyBase.prototype.vertexAttrib1fv_26fqmq$ = function (index, v) {
  };
  KmlGlDummyBase.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
  };
  KmlGlDummyBase.prototype.vertexAttrib2fv_26fqmq$ = function (index, v) {
  };
  KmlGlDummyBase.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
  };
  KmlGlDummyBase.prototype.vertexAttrib3fv_26fqmq$ = function (index, v) {
  };
  KmlGlDummyBase.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
  };
  KmlGlDummyBase.prototype.vertexAttrib4fv_26fqmq$ = function (index, v) {
  };
  KmlGlDummyBase.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
  };
  KmlGlDummyBase.prototype.viewport_tjonv8$ = function (x, y, width, height) {
  };
  KmlGlDummyBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlDummyBase',
    interfaces: [KmlGl]
  };
  function KmlGlException(message) {
    RuntimeException_init(message, this);
    this.name = 'KmlGlException';
  }
  KmlGlException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlException',
    interfaces: [RuntimeException]
  };
  function getShaderiv($receiver, shader, type) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.getShaderiv_7cqqrs$(shader, type, it);
    return it.getInt_za3lpa$(0);
  }
  function getProgramiv($receiver, program, type) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.getProgramiv_7cqqrs$(program, type, it);
    return it.getInt_za3lpa$(0);
  }
  function getBooleanv($receiver, pname) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.getBooleanv_26fqmq$(pname, it);
    return it.get_za3lpa$(0) !== 0;
  }
  function getFloatv($receiver, pname) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.getFloatv_26fqmq$(pname, it);
    return it.getFloat_za3lpa$(0);
  }
  function getIntegerv($receiver, pname) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.getIntegerv_26fqmq$(pname, it);
    return it.getInt_za3lpa$(0);
  }
  var getInfoLog = wrapFunction(function () {
    var FBuffer = _.$$importsForInline$$['kmem-root-kmem'].com.soywiz.kmem.FBuffer;
    return function ($receiver, obj, getiv, getInfoLog) {
      var size = getiv(obj, $receiver.INFO_LOG_LENGTH);
      var sizev = FBuffer.Companion.invoke_za3lpa$(4);
      var mbuffer = FBuffer.Companion.invoke_za3lpa$(size);
      getInfoLog(obj, size, sizev, mbuffer);
      return toAsciiString(mbuffer);
    };
  });
  function getShaderInfoLog($receiver, shader) {
    var getiv = getCallableRef('getShaderiv', function ($receiver, shader, type) {
      return getShaderiv($receiver, shader, type);
    }.bind(null, $receiver));
    var getInfoLog = getCallableRef('getShaderInfoLog', function ($receiver, shader, bufSize, length, infoLog) {
      return $receiver.getShaderInfoLog_vfc54s$(shader, bufSize, length, infoLog), Unit;
    }.bind(null, $receiver));
    var size = getiv(shader, $receiver.INFO_LOG_LENGTH);
    var sizev = FBuffer.Companion.invoke_za3lpa$(4);
    var mbuffer = FBuffer.Companion.invoke_za3lpa$(size);
    getInfoLog(shader, size, sizev, mbuffer);
    return toAsciiString(mbuffer);
  }
  function getProgramInfoLog($receiver, shader) {
    var getiv = getCallableRef('getProgramiv', function ($receiver, program, type) {
      return getProgramiv($receiver, program, type);
    }.bind(null, $receiver));
    var getInfoLog = getCallableRef('getProgramInfoLog', function ($receiver, program, bufSize, length, infoLog) {
      return $receiver.getProgramInfoLog_vfc54s$(program, bufSize, length, infoLog), Unit;
    }.bind(null, $receiver));
    var size = getiv(shader, $receiver.INFO_LOG_LENGTH);
    var sizev = FBuffer.Companion.invoke_za3lpa$(4);
    var mbuffer = FBuffer.Companion.invoke_za3lpa$(size);
    getInfoLog(shader, size, sizev, mbuffer);
    return toAsciiString(mbuffer);
  }
  function compileShaderAndCheck($receiver, shader) {
    $receiver.compileShader_za3lpa$(shader);
    if (getShaderiv($receiver, shader, $receiver.COMPILE_STATUS) !== $receiver.TRUE) {
      throw new KmlGlException(getShaderInfoLog($receiver, shader));
    }
  }
  function linkProgramAndCheck($receiver, program) {
    $receiver.linkProgram_za3lpa$(program);
    if (getProgramiv($receiver, program, $receiver.LINK_STATUS) !== $receiver.TRUE) {
      throw new KmlGlException(getProgramInfoLog($receiver, program));
    }
  }
  function getErrorString($receiver, error) {
    if (error === void 0)
      error = $receiver.getError();
    var tmp$;
    switch (error) {
      case 0:
        tmp$ = 'NO_ERROR';
        break;
      case 1280:
        tmp$ = 'INVALID_ENUM';
        break;
      case 1281:
        tmp$ = 'INVALID_VALUE';
        break;
      case 1282:
        tmp$ = 'INVALID_OPERATION';
        break;
      case 1285:
        tmp$ = 'OUT_OF_MEMORY';
        break;
      default:tmp$ = 'UNKNOWN_ERROR' + error;
        break;
    }
    return tmp$;
  }
  function KmlGlProxy(parent) {
    KmlGl.call(this);
    this.parent = parent;
  }
  KmlGlProxy.prototype.before_puj7f4$ = function (name, params) {
  };
  KmlGlProxy.prototype.after_6hosri$ = function (name, params, result) {
  };
  KmlGlProxy.prototype.activeTexture_za3lpa$ = function (texture) {
    var sparams = texture.toString();
    this.before_puj7f4$('activeTexture', sparams);
    var res = this.parent.activeTexture_za3lpa$(texture);
    this.after_6hosri$('activeTexture', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.attachShader_vux9f0$ = function (program, shader) {
    var sparams = program.toString() + ', ' + shader;
    this.before_puj7f4$('attachShader', sparams);
    var res = this.parent.attachShader_vux9f0$(program, shader);
    this.after_6hosri$('attachShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
    var sparams = program.toString() + ', ' + index + ', ' + name;
    this.before_puj7f4$('bindAttribLocation', sparams);
    var res = this.parent.bindAttribLocation_98i29q$(program, index, name);
    this.after_6hosri$('bindAttribLocation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
    var sparams = target.toString() + ', ' + buffer;
    this.before_puj7f4$('bindBuffer', sparams);
    var res = this.parent.bindBuffer_vux9f0$(target, buffer);
    this.after_6hosri$('bindBuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
    var sparams = target.toString() + ', ' + framebuffer;
    this.before_puj7f4$('bindFramebuffer', sparams);
    var res = this.parent.bindFramebuffer_vux9f0$(target, framebuffer);
    this.after_6hosri$('bindFramebuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
    var sparams = target.toString() + ', ' + renderbuffer;
    this.before_puj7f4$('bindRenderbuffer', sparams);
    var res = this.parent.bindRenderbuffer_vux9f0$(target, renderbuffer);
    this.after_6hosri$('bindRenderbuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindTexture_vux9f0$ = function (target, texture) {
    var sparams = target.toString() + ', ' + texture;
    this.before_puj7f4$('bindTexture', sparams);
    var res = this.parent.bindTexture_vux9f0$(target, texture);
    this.after_6hosri$('bindTexture', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    var sparams = red.toString() + ', ' + green + ', ' + blue + ', ' + alpha;
    this.before_puj7f4$('blendColor', sparams);
    var res = this.parent.blendColor_7b5o5w$(red, green, blue, alpha);
    this.after_6hosri$('blendColor', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendEquation_za3lpa$ = function (mode) {
    var sparams = mode.toString();
    this.before_puj7f4$('blendEquation', sparams);
    var res = this.parent.blendEquation_za3lpa$(mode);
    this.after_6hosri$('blendEquation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    var sparams = modeRGB.toString() + ', ' + modeAlpha;
    this.before_puj7f4$('blendEquationSeparate', sparams);
    var res = this.parent.blendEquationSeparate_vux9f0$(modeRGB, modeAlpha);
    this.after_6hosri$('blendEquationSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    var sparams = sfactor.toString() + ', ' + dfactor;
    this.before_puj7f4$('blendFunc', sparams);
    var res = this.parent.blendFunc_vux9f0$(sfactor, dfactor);
    this.after_6hosri$('blendFunc', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    var sparams = sfactorRGB.toString() + ', ' + dfactorRGB + ', ' + sfactorAlpha + ', ' + dfactorAlpha;
    this.before_puj7f4$('blendFuncSeparate', sparams);
    var res = this.parent.blendFuncSeparate_tjonv8$(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
    this.after_6hosri$('blendFuncSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bufferData_r7xkly$ = function (target, size, data, usage) {
    var sparams = target.toString() + ', ' + size + ', ' + data + ', ' + usage;
    this.before_puj7f4$('bufferData', sparams);
    var res = this.parent.bufferData_r7xkly$(target, size, data, usage);
    this.after_6hosri$('bufferData', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bufferSubData_emhadu$ = function (target, offset, size, data) {
    var sparams = target.toString() + ', ' + offset + ', ' + size + ', ' + data;
    this.before_puj7f4$('bufferSubData', sparams);
    var res = this.parent.bufferSubData_emhadu$(target, offset, size, data);
    this.after_6hosri$('bufferSubData', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    var sparams = target.toString();
    this.before_puj7f4$('checkFramebufferStatus', sparams);
    var res = this.parent.checkFramebufferStatus_za3lpa$(target);
    this.after_6hosri$('checkFramebufferStatus', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clear_za3lpa$ = function (mask) {
    var sparams = mask.toString();
    this.before_puj7f4$('clear', sparams);
    var res = this.parent.clear_za3lpa$(mask);
    this.after_6hosri$('clear', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    var sparams = red.toString() + ', ' + green + ', ' + blue + ', ' + alpha;
    this.before_puj7f4$('clearColor', sparams);
    var res = this.parent.clearColor_7b5o5w$(red, green, blue, alpha);
    this.after_6hosri$('clearColor', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clearDepthf_mx4ult$ = function (d) {
    var sparams = d.toString();
    this.before_puj7f4$('clearDepthf', sparams);
    var res = this.parent.clearDepthf_mx4ult$(d);
    this.after_6hosri$('clearDepthf', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clearStencil_za3lpa$ = function (s) {
    var sparams = s.toString();
    this.before_puj7f4$('clearStencil', sparams);
    var res = this.parent.clearStencil_za3lpa$(s);
    this.after_6hosri$('clearStencil', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    var sparams = red.toString() + ', ' + green + ', ' + blue + ', ' + alpha;
    this.before_puj7f4$('colorMask', sparams);
    var res = this.parent.colorMask_nyyhg$(red, green, blue, alpha);
    this.after_6hosri$('colorMask', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.compileShader_za3lpa$ = function (shader) {
    var sparams = shader.toString();
    this.before_puj7f4$('compileShader', sparams);
    var res = this.parent.compileShader_za3lpa$(shader);
    this.after_6hosri$('compileShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.compressedTexImage2D_1uavrm$ = function (target, level, internalformat, width, height, border, imageSize, data) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + width + ', ' + height + ', ' + border + ', ' + imageSize + ', ' + data;
    this.before_puj7f4$('compressedTexImage2D', sparams);
    var res = this.parent.compressedTexImage2D_1uavrm$(target, level, internalformat, width, height, border, imageSize, data);
    this.after_6hosri$('compressedTexImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.compressedTexSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    var sparams = target.toString() + ', ' + level + ', ' + xoffset + ', ' + yoffset + ', ' + width + ', ' + height + ', ' + format + ', ' + imageSize + ', ' + data;
    this.before_puj7f4$('compressedTexSubImage2D', sparams);
    var res = this.parent.compressedTexSubImage2D_teftfc$(target, level, xoffset, yoffset, width, height, format, imageSize, data);
    this.after_6hosri$('compressedTexSubImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + x + ', ' + y + ', ' + width + ', ' + height + ', ' + border;
    this.before_puj7f4$('copyTexImage2D', sparams);
    var res = this.parent.copyTexImage2D_wrdw30$(target, level, internalformat, x, y, width, height, border);
    this.after_6hosri$('copyTexImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
    var sparams = target.toString() + ', ' + level + ', ' + xoffset + ', ' + yoffset + ', ' + x + ', ' + y + ', ' + width + ', ' + height;
    this.before_puj7f4$('copyTexSubImage2D', sparams);
    var res = this.parent.copyTexSubImage2D_wrdw30$(target, level, xoffset, yoffset, x, y, width, height);
    this.after_6hosri$('copyTexSubImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.createProgram = function () {
    var sparams = '';
    this.before_puj7f4$('createProgram', sparams);
    var res = this.parent.createProgram();
    this.after_6hosri$('createProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.createShader_za3lpa$ = function (type) {
    var sparams = type.toString();
    this.before_puj7f4$('createShader', sparams);
    var res = this.parent.createShader_za3lpa$(type);
    this.after_6hosri$('createShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.cullFace_za3lpa$ = function (mode) {
    var sparams = mode.toString();
    this.before_puj7f4$('cullFace', sparams);
    var res = this.parent.cullFace_za3lpa$(mode);
    this.after_6hosri$('cullFace', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteBuffers_26fqmq$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteBuffers', sparams);
    var res = this.parent.deleteBuffers_26fqmq$(n, items);
    this.after_6hosri$('deleteBuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteFramebuffers_26fqmq$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteFramebuffers', sparams);
    var res = this.parent.deleteFramebuffers_26fqmq$(n, items);
    this.after_6hosri$('deleteFramebuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('deleteProgram', sparams);
    var res = this.parent.deleteProgram_za3lpa$(program);
    this.after_6hosri$('deleteProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteRenderbuffers_26fqmq$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteRenderbuffers', sparams);
    var res = this.parent.deleteRenderbuffers_26fqmq$(n, items);
    this.after_6hosri$('deleteRenderbuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteShader_za3lpa$ = function (shader) {
    var sparams = shader.toString();
    this.before_puj7f4$('deleteShader', sparams);
    var res = this.parent.deleteShader_za3lpa$(shader);
    this.after_6hosri$('deleteShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteTextures_26fqmq$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteTextures', sparams);
    var res = this.parent.deleteTextures_26fqmq$(n, items);
    this.after_6hosri$('deleteTextures', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.depthFunc_za3lpa$ = function (func) {
    var sparams = func.toString();
    this.before_puj7f4$('depthFunc', sparams);
    var res = this.parent.depthFunc_za3lpa$(func);
    this.after_6hosri$('depthFunc', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.depthMask_6taknv$ = function (flag) {
    var sparams = flag.toString();
    this.before_puj7f4$('depthMask', sparams);
    var res = this.parent.depthMask_6taknv$(flag);
    this.after_6hosri$('depthMask', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.depthRangef_dleff0$ = function (n, f) {
    var sparams = n.toString() + ', ' + f;
    this.before_puj7f4$('depthRangef', sparams);
    var res = this.parent.depthRangef_dleff0$(n, f);
    this.after_6hosri$('depthRangef', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.detachShader_vux9f0$ = function (program, shader) {
    var sparams = program.toString() + ', ' + shader;
    this.before_puj7f4$('detachShader', sparams);
    var res = this.parent.detachShader_vux9f0$(program, shader);
    this.after_6hosri$('detachShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.disable_za3lpa$ = function (cap) {
    var sparams = cap.toString();
    this.before_puj7f4$('disable', sparams);
    var res = this.parent.disable_za3lpa$(cap);
    this.after_6hosri$('disable', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    var sparams = index.toString();
    this.before_puj7f4$('disableVertexAttribArray', sparams);
    var res = this.parent.disableVertexAttribArray_za3lpa$(index);
    this.after_6hosri$('disableVertexAttribArray', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    var sparams = mode.toString() + ', ' + first + ', ' + count;
    this.before_puj7f4$('drawArrays', sparams);
    var res = this.parent.drawArrays_qt1dr2$(mode, first, count);
    this.after_6hosri$('drawArrays', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
    var sparams = mode.toString() + ', ' + count + ', ' + type + ', ' + indices;
    this.before_puj7f4$('drawElements', sparams);
    var res = this.parent.drawElements_tjonv8$(mode, count, type, indices);
    this.after_6hosri$('drawElements', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.enable_za3lpa$ = function (cap) {
    var sparams = cap.toString();
    this.before_puj7f4$('enable', sparams);
    var res = this.parent.enable_za3lpa$(cap);
    this.after_6hosri$('enable', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    var sparams = index.toString();
    this.before_puj7f4$('enableVertexAttribArray', sparams);
    var res = this.parent.enableVertexAttribArray_za3lpa$(index);
    this.after_6hosri$('enableVertexAttribArray', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.finish = function () {
    var sparams = '';
    this.before_puj7f4$('finish', sparams);
    var res = this.parent.finish();
    this.after_6hosri$('finish', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.flush = function () {
    var sparams = '';
    this.before_puj7f4$('flush', sparams);
    var res = this.parent.flush();
    this.after_6hosri$('flush', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
    var sparams = target.toString() + ', ' + attachment + ', ' + renderbuffertarget + ', ' + renderbuffer;
    this.before_puj7f4$('framebufferRenderbuffer', sparams);
    var res = this.parent.framebufferRenderbuffer_tjonv8$(target, attachment, renderbuffertarget, renderbuffer);
    this.after_6hosri$('framebufferRenderbuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
    var sparams = target.toString() + ', ' + attachment + ', ' + textarget + ', ' + texture + ', ' + level;
    this.before_puj7f4$('framebufferTexture2D', sparams);
    var res = this.parent.framebufferTexture2D_4qozqa$(target, attachment, textarget, texture, level);
    this.after_6hosri$('framebufferTexture2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.frontFace_za3lpa$ = function (mode) {
    var sparams = mode.toString();
    this.before_puj7f4$('frontFace', sparams);
    var res = this.parent.frontFace_za3lpa$(mode);
    this.after_6hosri$('frontFace', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genBuffers_26fqmq$ = function (n, buffers) {
    var sparams = n.toString() + ', ' + buffers;
    this.before_puj7f4$('genBuffers', sparams);
    var res = this.parent.genBuffers_26fqmq$(n, buffers);
    this.after_6hosri$('genBuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.generateMipmap_za3lpa$ = function (target) {
    var sparams = target.toString();
    this.before_puj7f4$('generateMipmap', sparams);
    var res = this.parent.generateMipmap_za3lpa$(target);
    this.after_6hosri$('generateMipmap', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genFramebuffers_26fqmq$ = function (n, framebuffers) {
    var sparams = n.toString() + ', ' + framebuffers;
    this.before_puj7f4$('genFramebuffers', sparams);
    var res = this.parent.genFramebuffers_26fqmq$(n, framebuffers);
    this.after_6hosri$('genFramebuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genRenderbuffers_26fqmq$ = function (n, renderbuffers) {
    var sparams = n.toString() + ', ' + renderbuffers;
    this.before_puj7f4$('genRenderbuffers', sparams);
    var res = this.parent.genRenderbuffers_26fqmq$(n, renderbuffers);
    this.after_6hosri$('genRenderbuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genTextures_26fqmq$ = function (n, textures) {
    var sparams = n.toString() + ', ' + textures;
    this.before_puj7f4$('genTextures', sparams);
    var res = this.parent.genTextures_26fqmq$(n, textures);
    this.after_6hosri$('genTextures', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getActiveAttrib_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
    var sparams = program.toString() + ', ' + index + ', ' + bufSize + ', ' + length + ', ' + size + ', ' + type + ', ' + name;
    this.before_puj7f4$('getActiveAttrib', sparams);
    var res = this.parent.getActiveAttrib_9zl5qq$(program, index, bufSize, length, size, type, name);
    this.after_6hosri$('getActiveAttrib', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getActiveUniform_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
    var sparams = program.toString() + ', ' + index + ', ' + bufSize + ', ' + length + ', ' + size + ', ' + type + ', ' + name;
    this.before_puj7f4$('getActiveUniform', sparams);
    var res = this.parent.getActiveUniform_9zl5qq$(program, index, bufSize, length, size, type, name);
    this.after_6hosri$('getActiveUniform', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getAttachedShaders_vfc54s$ = function (program, maxCount, count, shaders) {
    var sparams = program.toString() + ', ' + maxCount + ', ' + count + ', ' + shaders;
    this.before_puj7f4$('getAttachedShaders', sparams);
    var res = this.parent.getAttachedShaders_vfc54s$(program, maxCount, count, shaders);
    this.after_6hosri$('getAttachedShaders', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    var sparams = program.toString() + ', ' + name;
    this.before_puj7f4$('getAttribLocation', sparams);
    var res = this.parent.getAttribLocation_19mbxw$(program, name);
    this.after_6hosri$('getAttribLocation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    var sparams = program.toString() + ', ' + name;
    this.before_puj7f4$('getUniformLocation', sparams);
    var res = this.parent.getUniformLocation_19mbxw$(program, name);
    this.after_6hosri$('getUniformLocation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getBooleanv_26fqmq$ = function (pname, data) {
    var sparams = pname.toString() + ', ' + data;
    this.before_puj7f4$('getBooleanv', sparams);
    var res = this.parent.getBooleanv_26fqmq$(pname, data);
    this.after_6hosri$('getBooleanv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getBufferParameteriv_7cqqrs$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getBufferParameteriv', sparams);
    var res = this.parent.getBufferParameteriv_7cqqrs$(target, pname, params);
    this.after_6hosri$('getBufferParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getError = function () {
    var sparams = '';
    this.before_puj7f4$('getError', sparams);
    var res = this.parent.getError();
    this.after_6hosri$('getError', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getFloatv_26fqmq$ = function (pname, data) {
    var sparams = pname.toString() + ', ' + data;
    this.before_puj7f4$('getFloatv', sparams);
    var res = this.parent.getFloatv_26fqmq$(pname, data);
    this.after_6hosri$('getFloatv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getFramebufferAttachmentParameteriv_emhadu$ = function (target, attachment, pname, params) {
    var sparams = target.toString() + ', ' + attachment + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getFramebufferAttachmentParameteriv', sparams);
    var res = this.parent.getFramebufferAttachmentParameteriv_emhadu$(target, attachment, pname, params);
    this.after_6hosri$('getFramebufferAttachmentParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getIntegerv_26fqmq$ = function (pname, data) {
    var sparams = pname.toString() + ', ' + data;
    this.before_puj7f4$('getIntegerv', sparams);
    var res = this.parent.getIntegerv_26fqmq$(pname, data);
    this.after_6hosri$('getIntegerv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getProgramInfoLog_vfc54s$ = function (program, bufSize, length, infoLog) {
    var sparams = program.toString() + ', ' + bufSize + ', ' + length + ', ' + infoLog;
    this.before_puj7f4$('getProgramInfoLog', sparams);
    var res = this.parent.getProgramInfoLog_vfc54s$(program, bufSize, length, infoLog);
    this.after_6hosri$('getProgramInfoLog', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getRenderbufferParameteriv_7cqqrs$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getRenderbufferParameteriv', sparams);
    var res = this.parent.getRenderbufferParameteriv_7cqqrs$(target, pname, params);
    this.after_6hosri$('getRenderbufferParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getProgramiv_7cqqrs$ = function (program, pname, params) {
    var sparams = program.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getProgramiv', sparams);
    var res = this.parent.getProgramiv_7cqqrs$(program, pname, params);
    this.after_6hosri$('getProgramiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderiv_7cqqrs$ = function (shader, pname, params) {
    var sparams = shader.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getShaderiv', sparams);
    var res = this.parent.getShaderiv_7cqqrs$(shader, pname, params);
    this.after_6hosri$('getShaderiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderInfoLog_vfc54s$ = function (shader, bufSize, length, infoLog) {
    var sparams = shader.toString() + ', ' + bufSize + ', ' + length + ', ' + infoLog;
    this.before_puj7f4$('getShaderInfoLog', sparams);
    var res = this.parent.getShaderInfoLog_vfc54s$(shader, bufSize, length, infoLog);
    this.after_6hosri$('getShaderInfoLog', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderPrecisionFormat_vfc54s$ = function (shadertype, precisiontype, range, precision) {
    var sparams = shadertype.toString() + ', ' + precisiontype + ', ' + range + ', ' + precision;
    this.before_puj7f4$('getShaderPrecisionFormat', sparams);
    var res = this.parent.getShaderPrecisionFormat_vfc54s$(shadertype, precisiontype, range, precision);
    this.after_6hosri$('getShaderPrecisionFormat', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderSource_vfc54s$ = function (shader, bufSize, length, source) {
    var sparams = shader.toString() + ', ' + bufSize + ', ' + length + ', ' + source;
    this.before_puj7f4$('getShaderSource', sparams);
    var res = this.parent.getShaderSource_vfc54s$(shader, bufSize, length, source);
    this.after_6hosri$('getShaderSource', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getString_za3lpa$ = function (name) {
    var sparams = name.toString();
    this.before_puj7f4$('getString', sparams);
    var res = this.parent.getString_za3lpa$(name);
    this.after_6hosri$('getString', sparams, res);
    return res;
  };
  KmlGlProxy.prototype.getTexParameterfv_7cqqrs$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getTexParameterfv', sparams);
    var res = this.parent.getTexParameterfv_7cqqrs$(target, pname, params);
    this.after_6hosri$('getTexParameterfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getTexParameteriv_7cqqrs$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getTexParameteriv', sparams);
    var res = this.parent.getTexParameteriv_7cqqrs$(target, pname, params);
    this.after_6hosri$('getTexParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getUniformfv_7cqqrs$ = function (program, location, params) {
    var sparams = program.toString() + ', ' + location + ', ' + params;
    this.before_puj7f4$('getUniformfv', sparams);
    var res = this.parent.getUniformfv_7cqqrs$(program, location, params);
    this.after_6hosri$('getUniformfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getUniformiv_7cqqrs$ = function (program, location, params) {
    var sparams = program.toString() + ', ' + location + ', ' + params;
    this.before_puj7f4$('getUniformiv', sparams);
    var res = this.parent.getUniformiv_7cqqrs$(program, location, params);
    this.after_6hosri$('getUniformiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getVertexAttribfv_7cqqrs$ = function (index, pname, params) {
    var sparams = index.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getVertexAttribfv', sparams);
    var res = this.parent.getVertexAttribfv_7cqqrs$(index, pname, params);
    this.after_6hosri$('getVertexAttribfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getVertexAttribiv_7cqqrs$ = function (index, pname, params) {
    var sparams = index.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getVertexAttribiv', sparams);
    var res = this.parent.getVertexAttribiv_7cqqrs$(index, pname, params);
    this.after_6hosri$('getVertexAttribiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getVertexAttribPointerv_7cqqrs$ = function (index, pname, pointer) {
    var sparams = index.toString() + ', ' + pname + ', ' + pointer;
    this.before_puj7f4$('getVertexAttribPointerv', sparams);
    var res = this.parent.getVertexAttribPointerv_7cqqrs$(index, pname, pointer);
    this.after_6hosri$('getVertexAttribPointerv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.hint_vux9f0$ = function (target, mode) {
    var sparams = target.toString() + ', ' + mode;
    this.before_puj7f4$('hint', sparams);
    var res = this.parent.hint_vux9f0$(target, mode);
    this.after_6hosri$('hint', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isBuffer_za3lpa$ = function (buffer) {
    var sparams = buffer.toString();
    this.before_puj7f4$('isBuffer', sparams);
    var res = this.parent.isBuffer_za3lpa$(buffer);
    this.after_6hosri$('isBuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isEnabled_za3lpa$ = function (cap) {
    var sparams = cap.toString();
    this.before_puj7f4$('isEnabled', sparams);
    var res = this.parent.isEnabled_za3lpa$(cap);
    this.after_6hosri$('isEnabled', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    var sparams = framebuffer.toString();
    this.before_puj7f4$('isFramebuffer', sparams);
    var res = this.parent.isFramebuffer_za3lpa$(framebuffer);
    this.after_6hosri$('isFramebuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('isProgram', sparams);
    var res = this.parent.isProgram_za3lpa$(program);
    this.after_6hosri$('isProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    var sparams = renderbuffer.toString();
    this.before_puj7f4$('isRenderbuffer', sparams);
    var res = this.parent.isRenderbuffer_za3lpa$(renderbuffer);
    this.after_6hosri$('isRenderbuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isShader_za3lpa$ = function (shader) {
    var sparams = shader.toString();
    this.before_puj7f4$('isShader', sparams);
    var res = this.parent.isShader_za3lpa$(shader);
    this.after_6hosri$('isShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isTexture_za3lpa$ = function (texture) {
    var sparams = texture.toString();
    this.before_puj7f4$('isTexture', sparams);
    var res = this.parent.isTexture_za3lpa$(texture);
    this.after_6hosri$('isTexture', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.lineWidth_mx4ult$ = function (width) {
    var sparams = width.toString();
    this.before_puj7f4$('lineWidth', sparams);
    var res = this.parent.lineWidth_mx4ult$(width);
    this.after_6hosri$('lineWidth', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.linkProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('linkProgram', sparams);
    var res = this.parent.linkProgram_za3lpa$(program);
    this.after_6hosri$('linkProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.pixelStorei_vux9f0$ = function (pname, param) {
    var sparams = pname.toString() + ', ' + param;
    this.before_puj7f4$('pixelStorei', sparams);
    var res = this.parent.pixelStorei_vux9f0$(pname, param);
    this.after_6hosri$('pixelStorei', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.polygonOffset_dleff0$ = function (factor, units) {
    var sparams = factor.toString() + ', ' + units;
    this.before_puj7f4$('polygonOffset', sparams);
    var res = this.parent.polygonOffset_dleff0$(factor, units);
    this.after_6hosri$('polygonOffset', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.readPixels_8vifew$ = function (x, y, width, height, format, type, pixels) {
    var sparams = x.toString() + ', ' + y + ', ' + width + ', ' + height + ', ' + format + ', ' + type + ', ' + pixels;
    this.before_puj7f4$('readPixels', sparams);
    var res = this.parent.readPixels_8vifew$(x, y, width, height, format, type, pixels);
    this.after_6hosri$('readPixels', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.releaseShaderCompiler = function () {
    var sparams = '';
    this.before_puj7f4$('releaseShaderCompiler', sparams);
    var res = this.parent.releaseShaderCompiler();
    this.after_6hosri$('releaseShaderCompiler', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
    var sparams = target.toString() + ', ' + internalformat + ', ' + width + ', ' + height;
    this.before_puj7f4$('renderbufferStorage', sparams);
    var res = this.parent.renderbufferStorage_tjonv8$(target, internalformat, width, height);
    this.after_6hosri$('renderbufferStorage', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    var sparams = value.toString() + ', ' + invert;
    this.before_puj7f4$('sampleCoverage', sparams);
    var res = this.parent.sampleCoverage_8ca0d4$(value, invert);
    this.after_6hosri$('sampleCoverage', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    var sparams = x.toString() + ', ' + y + ', ' + width + ', ' + height;
    this.before_puj7f4$('scissor', sparams);
    var res = this.parent.scissor_tjonv8$(x, y, width, height);
    this.after_6hosri$('scissor', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.shaderBinary_y4twta$ = function (count, shaders, binaryformat, binary, length) {
    var sparams = count.toString() + ', ' + shaders + ', ' + binaryformat + ', ' + binary + ', ' + length;
    this.before_puj7f4$('shaderBinary', sparams);
    var res = this.parent.shaderBinary_y4twta$(count, shaders, binaryformat, binary, length);
    this.after_6hosri$('shaderBinary', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.shaderSource_19mbxw$ = function (shader, string) {
    var sparams = shader.toString() + ', ' + string;
    this.before_puj7f4$('shaderSource', sparams);
    var res = this.parent.shaderSource_19mbxw$(shader, string);
    this.after_6hosri$('shaderSource', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    var sparams = func.toString() + ', ' + ref + ', ' + mask;
    this.before_puj7f4$('stencilFunc', sparams);
    var res = this.parent.stencilFunc_qt1dr2$(func, ref, mask);
    this.after_6hosri$('stencilFunc', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    var sparams = face.toString() + ', ' + func + ', ' + ref + ', ' + mask;
    this.before_puj7f4$('stencilFuncSeparate', sparams);
    var res = this.parent.stencilFuncSeparate_tjonv8$(face, func, ref, mask);
    this.after_6hosri$('stencilFuncSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilMask_za3lpa$ = function (mask) {
    var sparams = mask.toString();
    this.before_puj7f4$('stencilMask', sparams);
    var res = this.parent.stencilMask_za3lpa$(mask);
    this.after_6hosri$('stencilMask', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    var sparams = face.toString() + ', ' + mask;
    this.before_puj7f4$('stencilMaskSeparate', sparams);
    var res = this.parent.stencilMaskSeparate_vux9f0$(face, mask);
    this.after_6hosri$('stencilMaskSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    var sparams = fail.toString() + ', ' + zfail + ', ' + zpass;
    this.before_puj7f4$('stencilOp', sparams);
    var res = this.parent.stencilOp_qt1dr2$(fail, zfail, zpass);
    this.after_6hosri$('stencilOp', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
    var sparams = face.toString() + ', ' + sfail + ', ' + dpfail + ', ' + dppass;
    this.before_puj7f4$('stencilOpSeparate', sparams);
    var res = this.parent.stencilOpSeparate_tjonv8$(face, sfail, dpfail, dppass);
    this.after_6hosri$('stencilOpSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texImage2D_byudfd$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + width + ', ' + height + ', ' + border + ', ' + format + ', ' + type + ', ' + toString(pixels);
    this.before_puj7f4$('texImage2D', sparams);
    var res = this.parent.texImage2D_byudfd$(target, level, internalformat, width, height, border, format, type, pixels);
    this.after_6hosri$('texImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + format + ', ' + type + ', ' + data;
    this.before_puj7f4$('texImage2D', sparams);
    var res = this.parent.texImage2D_gqqctv$(target, level, internalformat, format, type, data);
    this.after_6hosri$('texImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
    var sparams = target.toString() + ', ' + pname + ', ' + param;
    this.before_puj7f4$('texParameterf', sparams);
    var res = this.parent.texParameterf_n0b4r3$(target, pname, param);
    this.after_6hosri$('texParameterf', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameterfv_7cqqrs$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('texParameterfv', sparams);
    var res = this.parent.texParameterfv_7cqqrs$(target, pname, params);
    this.after_6hosri$('texParameterfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
    var sparams = target.toString() + ', ' + pname + ', ' + param;
    this.before_puj7f4$('texParameteri', sparams);
    var res = this.parent.texParameteri_qt1dr2$(target, pname, param);
    this.after_6hosri$('texParameteri', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameteriv_7cqqrs$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('texParameteriv', sparams);
    var res = this.parent.texParameteriv_7cqqrs$(target, pname, params);
    this.after_6hosri$('texParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    var sparams = target.toString() + ', ' + level + ', ' + xoffset + ', ' + yoffset + ', ' + width + ', ' + height + ', ' + format + ', ' + type + ', ' + pixels;
    this.before_puj7f4$('texSubImage2D', sparams);
    var res = this.parent.texSubImage2D_teftfc$(target, level, xoffset, yoffset, width, height, format, type, pixels);
    this.after_6hosri$('texSubImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1f_24o109$ = function (location, v0) {
    var sparams = location.toString() + ', ' + v0;
    this.before_puj7f4$('uniform1f', sparams);
    var res = this.parent.uniform1f_24o109$(location, v0);
    this.after_6hosri$('uniform1f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1fv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform1fv', sparams);
    var res = this.parent.uniform1fv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform1fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1i_vux9f0$ = function (location, v0) {
    var sparams = location.toString() + ', ' + v0;
    this.before_puj7f4$('uniform1i', sparams);
    var res = this.parent.uniform1i_vux9f0$(location, v0);
    this.after_6hosri$('uniform1i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1iv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform1iv', sparams);
    var res = this.parent.uniform1iv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform1iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1;
    this.before_puj7f4$('uniform2f', sparams);
    var res = this.parent.uniform2f_nhq4am$(location, v0, v1);
    this.after_6hosri$('uniform2f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2fv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform2fv', sparams);
    var res = this.parent.uniform2fv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform2fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1;
    this.before_puj7f4$('uniform2i', sparams);
    var res = this.parent.uniform2i_qt1dr2$(location, v0, v1);
    this.after_6hosri$('uniform2i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2iv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform2iv', sparams);
    var res = this.parent.uniform2iv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform2iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2;
    this.before_puj7f4$('uniform3f', sparams);
    var res = this.parent.uniform3f_eyukp3$(location, v0, v1, v2);
    this.after_6hosri$('uniform3f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3fv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform3fv', sparams);
    var res = this.parent.uniform3fv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform3fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2;
    this.before_puj7f4$('uniform3i', sparams);
    var res = this.parent.uniform3i_tjonv8$(location, v0, v1, v2);
    this.after_6hosri$('uniform3i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3iv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform3iv', sparams);
    var res = this.parent.uniform3iv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform3iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2 + ', ' + v3;
    this.before_puj7f4$('uniform4f', sparams);
    var res = this.parent.uniform4f_xpxj32$(location, v0, v1, v2, v3);
    this.after_6hosri$('uniform4f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4fv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform4fv', sparams);
    var res = this.parent.uniform4fv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform4fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2 + ', ' + v3;
    this.before_puj7f4$('uniform4i', sparams);
    var res = this.parent.uniform4i_4qozqa$(location, v0, v1, v2, v3);
    this.after_6hosri$('uniform4i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4iv_7cqqrs$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform4iv', sparams);
    var res = this.parent.uniform4iv_7cqqrs$(location, count, value);
    this.after_6hosri$('uniform4iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniformMatrix2fv_24ez2x$ = function (location, count, transpose, value) {
    var sparams = location.toString() + ', ' + count + ', ' + transpose + ', ' + value;
    this.before_puj7f4$('uniformMatrix2fv', sparams);
    var res = this.parent.uniformMatrix2fv_24ez2x$(location, count, transpose, value);
    this.after_6hosri$('uniformMatrix2fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniformMatrix3fv_24ez2x$ = function (location, count, transpose, value) {
    var sparams = location.toString() + ', ' + count + ', ' + transpose + ', ' + value;
    this.before_puj7f4$('uniformMatrix3fv', sparams);
    var res = this.parent.uniformMatrix3fv_24ez2x$(location, count, transpose, value);
    this.after_6hosri$('uniformMatrix3fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniformMatrix4fv_24ez2x$ = function (location, count, transpose, value) {
    var sparams = location.toString() + ', ' + count + ', ' + transpose + ', ' + value;
    this.before_puj7f4$('uniformMatrix4fv', sparams);
    var res = this.parent.uniformMatrix4fv_24ez2x$(location, count, transpose, value);
    this.after_6hosri$('uniformMatrix4fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.useProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('useProgram', sparams);
    var res = this.parent.useProgram_za3lpa$(program);
    this.after_6hosri$('useProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.validateProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('validateProgram', sparams);
    var res = this.parent.validateProgram_za3lpa$(program);
    this.after_6hosri$('validateProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    var sparams = index.toString() + ', ' + x;
    this.before_puj7f4$('vertexAttrib1f', sparams);
    var res = this.parent.vertexAttrib1f_24o109$(index, x);
    this.after_6hosri$('vertexAttrib1f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib1fv_26fqmq$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib1fv', sparams);
    var res = this.parent.vertexAttrib1fv_26fqmq$(index, v);
    this.after_6hosri$('vertexAttrib1fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    var sparams = index.toString() + ', ' + x + ', ' + y;
    this.before_puj7f4$('vertexAttrib2f', sparams);
    var res = this.parent.vertexAttrib2f_nhq4am$(index, x, y);
    this.after_6hosri$('vertexAttrib2f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib2fv_26fqmq$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib2fv', sparams);
    var res = this.parent.vertexAttrib2fv_26fqmq$(index, v);
    this.after_6hosri$('vertexAttrib2fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    var sparams = index.toString() + ', ' + x + ', ' + y + ', ' + z;
    this.before_puj7f4$('vertexAttrib3f', sparams);
    var res = this.parent.vertexAttrib3f_eyukp3$(index, x, y, z);
    this.after_6hosri$('vertexAttrib3f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib3fv_26fqmq$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib3fv', sparams);
    var res = this.parent.vertexAttrib3fv_26fqmq$(index, v);
    this.after_6hosri$('vertexAttrib3fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    var sparams = index.toString() + ', ' + x + ', ' + y + ', ' + z + ', ' + w;
    this.before_puj7f4$('vertexAttrib4f', sparams);
    var res = this.parent.vertexAttrib4f_xpxj32$(index, x, y, z, w);
    this.after_6hosri$('vertexAttrib4f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib4fv_26fqmq$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib4fv', sparams);
    var res = this.parent.vertexAttrib4fv_26fqmq$(index, v);
    this.after_6hosri$('vertexAttrib4fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
    var sparams = index.toString() + ', ' + size + ', ' + type + ', ' + normalized + ', ' + stride + ', ' + pointer;
    this.before_puj7f4$('vertexAttribPointer', sparams);
    var res = this.parent.vertexAttribPointer_owihk5$(index, size, type, normalized, stride, pointer);
    this.after_6hosri$('vertexAttribPointer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    var sparams = x.toString() + ', ' + y + ', ' + width + ', ' + height;
    this.before_puj7f4$('viewport', sparams);
    var res = this.parent.viewport_tjonv8$(x, y, width, height);
    this.after_6hosri$('viewport', sparams, res.toString());
    return res;
  };
  KmlGlProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlProxy',
    interfaces: [KmlGl]
  };
  function KmlGlFastProxy(parent) {
    KmlGl.call(this);
    this.parent = parent;
  }
  KmlGlFastProxy.prototype.before_puj7f4$ = function (name, params) {
  };
  KmlGlFastProxy.prototype.after_6hosri$ = function (name, params, result) {
  };
  KmlGlFastProxy.prototype.activeTexture_za3lpa$ = function (texture) {
    return this.parent.activeTexture_za3lpa$(texture);
  };
  KmlGlFastProxy.prototype.attachShader_vux9f0$ = function (program, shader) {
    return this.parent.attachShader_vux9f0$(program, shader);
  };
  KmlGlFastProxy.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
    return this.parent.bindAttribLocation_98i29q$(program, index, name);
  };
  KmlGlFastProxy.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
    return this.parent.bindBuffer_vux9f0$(target, buffer);
  };
  KmlGlFastProxy.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
    return this.parent.bindFramebuffer_vux9f0$(target, framebuffer);
  };
  KmlGlFastProxy.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
    return this.parent.bindRenderbuffer_vux9f0$(target, renderbuffer);
  };
  KmlGlFastProxy.prototype.bindTexture_vux9f0$ = function (target, texture) {
    return this.parent.bindTexture_vux9f0$(target, texture);
  };
  KmlGlFastProxy.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    return this.parent.blendColor_7b5o5w$(red, green, blue, alpha);
  };
  KmlGlFastProxy.prototype.blendEquation_za3lpa$ = function (mode) {
    return this.parent.blendEquation_za3lpa$(mode);
  };
  KmlGlFastProxy.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    return this.parent.blendEquationSeparate_vux9f0$(modeRGB, modeAlpha);
  };
  KmlGlFastProxy.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    return this.parent.blendFunc_vux9f0$(sfactor, dfactor);
  };
  KmlGlFastProxy.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    return this.parent.blendFuncSeparate_tjonv8$(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
  };
  KmlGlFastProxy.prototype.bufferData_r7xkly$ = function (target, size, data, usage) {
    return this.parent.bufferData_r7xkly$(target, size, data, usage);
  };
  KmlGlFastProxy.prototype.bufferSubData_emhadu$ = function (target, offset, size, data) {
    return this.parent.bufferSubData_emhadu$(target, offset, size, data);
  };
  KmlGlFastProxy.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return this.parent.checkFramebufferStatus_za3lpa$(target);
  };
  KmlGlFastProxy.prototype.clear_za3lpa$ = function (mask) {
    return this.parent.clear_za3lpa$(mask);
  };
  KmlGlFastProxy.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    return this.parent.clearColor_7b5o5w$(red, green, blue, alpha);
  };
  KmlGlFastProxy.prototype.clearDepthf_mx4ult$ = function (d) {
    return this.parent.clearDepthf_mx4ult$(d);
  };
  KmlGlFastProxy.prototype.clearStencil_za3lpa$ = function (s) {
    return this.parent.clearStencil_za3lpa$(s);
  };
  KmlGlFastProxy.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    return this.parent.colorMask_nyyhg$(red, green, blue, alpha);
  };
  KmlGlFastProxy.prototype.compileShader_za3lpa$ = function (shader) {
    return this.parent.compileShader_za3lpa$(shader);
  };
  KmlGlFastProxy.prototype.compressedTexImage2D_1uavrm$ = function (target, level, internalformat, width, height, border, imageSize, data) {
    return this.parent.compressedTexImage2D_1uavrm$(target, level, internalformat, width, height, border, imageSize, data);
  };
  KmlGlFastProxy.prototype.compressedTexSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    return this.parent.compressedTexSubImage2D_teftfc$(target, level, xoffset, yoffset, width, height, format, imageSize, data);
  };
  KmlGlFastProxy.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
    return this.parent.copyTexImage2D_wrdw30$(target, level, internalformat, x, y, width, height, border);
  };
  KmlGlFastProxy.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
    return this.parent.copyTexSubImage2D_wrdw30$(target, level, xoffset, yoffset, x, y, width, height);
  };
  KmlGlFastProxy.prototype.createProgram = function () {
    return this.parent.createProgram();
  };
  KmlGlFastProxy.prototype.createShader_za3lpa$ = function (type) {
    return this.parent.createShader_za3lpa$(type);
  };
  KmlGlFastProxy.prototype.cullFace_za3lpa$ = function (mode) {
    return this.parent.cullFace_za3lpa$(mode);
  };
  KmlGlFastProxy.prototype.deleteBuffers_26fqmq$ = function (n, items) {
    return this.parent.deleteBuffers_26fqmq$(n, items);
  };
  KmlGlFastProxy.prototype.deleteFramebuffers_26fqmq$ = function (n, items) {
    return this.parent.deleteFramebuffers_26fqmq$(n, items);
  };
  KmlGlFastProxy.prototype.deleteProgram_za3lpa$ = function (program) {
    return this.parent.deleteProgram_za3lpa$(program);
  };
  KmlGlFastProxy.prototype.deleteRenderbuffers_26fqmq$ = function (n, items) {
    return this.parent.deleteRenderbuffers_26fqmq$(n, items);
  };
  KmlGlFastProxy.prototype.deleteShader_za3lpa$ = function (shader) {
    return this.parent.deleteShader_za3lpa$(shader);
  };
  KmlGlFastProxy.prototype.deleteTextures_26fqmq$ = function (n, items) {
    return this.parent.deleteTextures_26fqmq$(n, items);
  };
  KmlGlFastProxy.prototype.depthFunc_za3lpa$ = function (func) {
    return this.parent.depthFunc_za3lpa$(func);
  };
  KmlGlFastProxy.prototype.depthMask_6taknv$ = function (flag) {
    return this.parent.depthMask_6taknv$(flag);
  };
  KmlGlFastProxy.prototype.depthRangef_dleff0$ = function (n, f) {
    return this.parent.depthRangef_dleff0$(n, f);
  };
  KmlGlFastProxy.prototype.detachShader_vux9f0$ = function (program, shader) {
    return this.parent.detachShader_vux9f0$(program, shader);
  };
  KmlGlFastProxy.prototype.disable_za3lpa$ = function (cap) {
    return this.parent.disable_za3lpa$(cap);
  };
  KmlGlFastProxy.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    return this.parent.disableVertexAttribArray_za3lpa$(index);
  };
  KmlGlFastProxy.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    return this.parent.drawArrays_qt1dr2$(mode, first, count);
  };
  KmlGlFastProxy.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
    return this.parent.drawElements_tjonv8$(mode, count, type, indices);
  };
  KmlGlFastProxy.prototype.enable_za3lpa$ = function (cap) {
    return this.parent.enable_za3lpa$(cap);
  };
  KmlGlFastProxy.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    return this.parent.enableVertexAttribArray_za3lpa$(index);
  };
  KmlGlFastProxy.prototype.finish = function () {
    return this.parent.finish();
  };
  KmlGlFastProxy.prototype.flush = function () {
    return this.parent.flush();
  };
  KmlGlFastProxy.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
    return this.parent.framebufferRenderbuffer_tjonv8$(target, attachment, renderbuffertarget, renderbuffer);
  };
  KmlGlFastProxy.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
    return this.parent.framebufferTexture2D_4qozqa$(target, attachment, textarget, texture, level);
  };
  KmlGlFastProxy.prototype.frontFace_za3lpa$ = function (mode) {
    return this.parent.frontFace_za3lpa$(mode);
  };
  KmlGlFastProxy.prototype.genBuffers_26fqmq$ = function (n, buffers) {
    return this.parent.genBuffers_26fqmq$(n, buffers);
  };
  KmlGlFastProxy.prototype.generateMipmap_za3lpa$ = function (target) {
    return this.parent.generateMipmap_za3lpa$(target);
  };
  KmlGlFastProxy.prototype.genFramebuffers_26fqmq$ = function (n, framebuffers) {
    return this.parent.genFramebuffers_26fqmq$(n, framebuffers);
  };
  KmlGlFastProxy.prototype.genRenderbuffers_26fqmq$ = function (n, renderbuffers) {
    return this.parent.genRenderbuffers_26fqmq$(n, renderbuffers);
  };
  KmlGlFastProxy.prototype.genTextures_26fqmq$ = function (n, textures) {
    return this.parent.genTextures_26fqmq$(n, textures);
  };
  KmlGlFastProxy.prototype.getActiveAttrib_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
    return this.parent.getActiveAttrib_9zl5qq$(program, index, bufSize, length, size, type, name);
  };
  KmlGlFastProxy.prototype.getActiveUniform_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
    return this.parent.getActiveUniform_9zl5qq$(program, index, bufSize, length, size, type, name);
  };
  KmlGlFastProxy.prototype.getAttachedShaders_vfc54s$ = function (program, maxCount, count, shaders) {
    return this.parent.getAttachedShaders_vfc54s$(program, maxCount, count, shaders);
  };
  KmlGlFastProxy.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    return this.parent.getAttribLocation_19mbxw$(program, name);
  };
  KmlGlFastProxy.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    return this.parent.getUniformLocation_19mbxw$(program, name);
  };
  KmlGlFastProxy.prototype.getBooleanv_26fqmq$ = function (pname, data) {
    return this.parent.getBooleanv_26fqmq$(pname, data);
  };
  KmlGlFastProxy.prototype.getBufferParameteriv_7cqqrs$ = function (target, pname, params) {
    return this.parent.getBufferParameteriv_7cqqrs$(target, pname, params);
  };
  KmlGlFastProxy.prototype.getError = function () {
    return this.parent.getError();
  };
  KmlGlFastProxy.prototype.getFloatv_26fqmq$ = function (pname, data) {
    return this.parent.getFloatv_26fqmq$(pname, data);
  };
  KmlGlFastProxy.prototype.getFramebufferAttachmentParameteriv_emhadu$ = function (target, attachment, pname, params) {
    return this.parent.getFramebufferAttachmentParameteriv_emhadu$(target, attachment, pname, params);
  };
  KmlGlFastProxy.prototype.getIntegerv_26fqmq$ = function (pname, data) {
    return this.parent.getIntegerv_26fqmq$(pname, data);
  };
  KmlGlFastProxy.prototype.getProgramInfoLog_vfc54s$ = function (program, bufSize, length, infoLog) {
    return this.parent.getProgramInfoLog_vfc54s$(program, bufSize, length, infoLog);
  };
  KmlGlFastProxy.prototype.getRenderbufferParameteriv_7cqqrs$ = function (target, pname, params) {
    return this.parent.getRenderbufferParameteriv_7cqqrs$(target, pname, params);
  };
  KmlGlFastProxy.prototype.getProgramiv_7cqqrs$ = function (program, pname, params) {
    return this.parent.getProgramiv_7cqqrs$(program, pname, params);
  };
  KmlGlFastProxy.prototype.getShaderiv_7cqqrs$ = function (shader, pname, params) {
    return this.parent.getShaderiv_7cqqrs$(shader, pname, params);
  };
  KmlGlFastProxy.prototype.getShaderInfoLog_vfc54s$ = function (shader, bufSize, length, infoLog) {
    return this.parent.getShaderInfoLog_vfc54s$(shader, bufSize, length, infoLog);
  };
  KmlGlFastProxy.prototype.getShaderPrecisionFormat_vfc54s$ = function (shadertype, precisiontype, range, precision) {
    return this.parent.getShaderPrecisionFormat_vfc54s$(shadertype, precisiontype, range, precision);
  };
  KmlGlFastProxy.prototype.getShaderSource_vfc54s$ = function (shader, bufSize, length, source) {
    return this.parent.getShaderSource_vfc54s$(shader, bufSize, length, source);
  };
  KmlGlFastProxy.prototype.getString_za3lpa$ = function (name) {
    return this.parent.getString_za3lpa$(name);
  };
  KmlGlFastProxy.prototype.getTexParameterfv_7cqqrs$ = function (target, pname, params) {
    return this.parent.getTexParameterfv_7cqqrs$(target, pname, params);
  };
  KmlGlFastProxy.prototype.getTexParameteriv_7cqqrs$ = function (target, pname, params) {
    return this.parent.getTexParameteriv_7cqqrs$(target, pname, params);
  };
  KmlGlFastProxy.prototype.getUniformfv_7cqqrs$ = function (program, location, params) {
    return this.parent.getUniformfv_7cqqrs$(program, location, params);
  };
  KmlGlFastProxy.prototype.getUniformiv_7cqqrs$ = function (program, location, params) {
    return this.parent.getUniformiv_7cqqrs$(program, location, params);
  };
  KmlGlFastProxy.prototype.getVertexAttribfv_7cqqrs$ = function (index, pname, params) {
    return this.parent.getVertexAttribfv_7cqqrs$(index, pname, params);
  };
  KmlGlFastProxy.prototype.getVertexAttribiv_7cqqrs$ = function (index, pname, params) {
    return this.parent.getVertexAttribiv_7cqqrs$(index, pname, params);
  };
  KmlGlFastProxy.prototype.getVertexAttribPointerv_7cqqrs$ = function (index, pname, pointer) {
    return this.parent.getVertexAttribPointerv_7cqqrs$(index, pname, pointer);
  };
  KmlGlFastProxy.prototype.hint_vux9f0$ = function (target, mode) {
    return this.parent.hint_vux9f0$(target, mode);
  };
  KmlGlFastProxy.prototype.isBuffer_za3lpa$ = function (buffer) {
    return this.parent.isBuffer_za3lpa$(buffer);
  };
  KmlGlFastProxy.prototype.isEnabled_za3lpa$ = function (cap) {
    return this.parent.isEnabled_za3lpa$(cap);
  };
  KmlGlFastProxy.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    return this.parent.isFramebuffer_za3lpa$(framebuffer);
  };
  KmlGlFastProxy.prototype.isProgram_za3lpa$ = function (program) {
    return this.parent.isProgram_za3lpa$(program);
  };
  KmlGlFastProxy.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    return this.parent.isRenderbuffer_za3lpa$(renderbuffer);
  };
  KmlGlFastProxy.prototype.isShader_za3lpa$ = function (shader) {
    return this.parent.isShader_za3lpa$(shader);
  };
  KmlGlFastProxy.prototype.isTexture_za3lpa$ = function (texture) {
    return this.parent.isTexture_za3lpa$(texture);
  };
  KmlGlFastProxy.prototype.lineWidth_mx4ult$ = function (width) {
    return this.parent.lineWidth_mx4ult$(width);
  };
  KmlGlFastProxy.prototype.linkProgram_za3lpa$ = function (program) {
    return this.parent.linkProgram_za3lpa$(program);
  };
  KmlGlFastProxy.prototype.pixelStorei_vux9f0$ = function (pname, param) {
    return this.parent.pixelStorei_vux9f0$(pname, param);
  };
  KmlGlFastProxy.prototype.polygonOffset_dleff0$ = function (factor, units) {
    return this.parent.polygonOffset_dleff0$(factor, units);
  };
  KmlGlFastProxy.prototype.readPixels_8vifew$ = function (x, y, width, height, format, type, pixels) {
    return this.parent.readPixels_8vifew$(x, y, width, height, format, type, pixels);
  };
  KmlGlFastProxy.prototype.releaseShaderCompiler = function () {
    return this.parent.releaseShaderCompiler();
  };
  KmlGlFastProxy.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
    return this.parent.renderbufferStorage_tjonv8$(target, internalformat, width, height);
  };
  KmlGlFastProxy.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    return this.parent.sampleCoverage_8ca0d4$(value, invert);
  };
  KmlGlFastProxy.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    return this.parent.scissor_tjonv8$(x, y, width, height);
  };
  KmlGlFastProxy.prototype.shaderBinary_y4twta$ = function (count, shaders, binaryformat, binary, length) {
    return this.parent.shaderBinary_y4twta$(count, shaders, binaryformat, binary, length);
  };
  KmlGlFastProxy.prototype.shaderSource_19mbxw$ = function (shader, string) {
    return this.parent.shaderSource_19mbxw$(shader, string);
  };
  KmlGlFastProxy.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    return this.parent.stencilFunc_qt1dr2$(func, ref, mask);
  };
  KmlGlFastProxy.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    return this.parent.stencilFuncSeparate_tjonv8$(face, func, ref, mask);
  };
  KmlGlFastProxy.prototype.stencilMask_za3lpa$ = function (mask) {
    return this.parent.stencilMask_za3lpa$(mask);
  };
  KmlGlFastProxy.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    return this.parent.stencilMaskSeparate_vux9f0$(face, mask);
  };
  KmlGlFastProxy.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    return this.parent.stencilOp_qt1dr2$(fail, zfail, zpass);
  };
  KmlGlFastProxy.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
    return this.parent.stencilOpSeparate_tjonv8$(face, sfail, dpfail, dppass);
  };
  KmlGlFastProxy.prototype.texImage2D_byudfd$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
    return this.parent.texImage2D_byudfd$(target, level, internalformat, width, height, border, format, type, pixels);
  };
  KmlGlFastProxy.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
    return this.parent.texImage2D_gqqctv$(target, level, internalformat, format, type, data);
  };
  KmlGlFastProxy.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
    return this.parent.texParameterf_n0b4r3$(target, pname, param);
  };
  KmlGlFastProxy.prototype.texParameterfv_7cqqrs$ = function (target, pname, params) {
    return this.parent.texParameterfv_7cqqrs$(target, pname, params);
  };
  KmlGlFastProxy.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
    return this.parent.texParameteri_qt1dr2$(target, pname, param);
  };
  KmlGlFastProxy.prototype.texParameteriv_7cqqrs$ = function (target, pname, params) {
    return this.parent.texParameteriv_7cqqrs$(target, pname, params);
  };
  KmlGlFastProxy.prototype.texSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    return this.parent.texSubImage2D_teftfc$(target, level, xoffset, yoffset, width, height, format, type, pixels);
  };
  KmlGlFastProxy.prototype.uniform1f_24o109$ = function (location, v0) {
    return this.parent.uniform1f_24o109$(location, v0);
  };
  KmlGlFastProxy.prototype.uniform1fv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform1fv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform1i_vux9f0$ = function (location, v0) {
    return this.parent.uniform1i_vux9f0$(location, v0);
  };
  KmlGlFastProxy.prototype.uniform1iv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform1iv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
    return this.parent.uniform2f_nhq4am$(location, v0, v1);
  };
  KmlGlFastProxy.prototype.uniform2fv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform2fv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
    return this.parent.uniform2i_qt1dr2$(location, v0, v1);
  };
  KmlGlFastProxy.prototype.uniform2iv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform2iv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
    return this.parent.uniform3f_eyukp3$(location, v0, v1, v2);
  };
  KmlGlFastProxy.prototype.uniform3fv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform3fv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
    return this.parent.uniform3i_tjonv8$(location, v0, v1, v2);
  };
  KmlGlFastProxy.prototype.uniform3iv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform3iv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
    return this.parent.uniform4f_xpxj32$(location, v0, v1, v2, v3);
  };
  KmlGlFastProxy.prototype.uniform4fv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform4fv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
    return this.parent.uniform4i_4qozqa$(location, v0, v1, v2, v3);
  };
  KmlGlFastProxy.prototype.uniform4iv_7cqqrs$ = function (location, count, value) {
    return this.parent.uniform4iv_7cqqrs$(location, count, value);
  };
  KmlGlFastProxy.prototype.uniformMatrix2fv_24ez2x$ = function (location, count, transpose, value) {
    return this.parent.uniformMatrix2fv_24ez2x$(location, count, transpose, value);
  };
  KmlGlFastProxy.prototype.uniformMatrix3fv_24ez2x$ = function (location, count, transpose, value) {
    return this.parent.uniformMatrix3fv_24ez2x$(location, count, transpose, value);
  };
  KmlGlFastProxy.prototype.uniformMatrix4fv_24ez2x$ = function (location, count, transpose, value) {
    return this.parent.uniformMatrix4fv_24ez2x$(location, count, transpose, value);
  };
  KmlGlFastProxy.prototype.useProgram_za3lpa$ = function (program) {
    return this.parent.useProgram_za3lpa$(program);
  };
  KmlGlFastProxy.prototype.validateProgram_za3lpa$ = function (program) {
    return this.parent.validateProgram_za3lpa$(program);
  };
  KmlGlFastProxy.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    return this.parent.vertexAttrib1f_24o109$(index, x);
  };
  KmlGlFastProxy.prototype.vertexAttrib1fv_26fqmq$ = function (index, v) {
    return this.parent.vertexAttrib1fv_26fqmq$(index, v);
  };
  KmlGlFastProxy.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    return this.parent.vertexAttrib2f_nhq4am$(index, x, y);
  };
  KmlGlFastProxy.prototype.vertexAttrib2fv_26fqmq$ = function (index, v) {
    return this.parent.vertexAttrib2fv_26fqmq$(index, v);
  };
  KmlGlFastProxy.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    return this.parent.vertexAttrib3f_eyukp3$(index, x, y, z);
  };
  KmlGlFastProxy.prototype.vertexAttrib3fv_26fqmq$ = function (index, v) {
    return this.parent.vertexAttrib3fv_26fqmq$(index, v);
  };
  KmlGlFastProxy.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    return this.parent.vertexAttrib4f_xpxj32$(index, x, y, z, w);
  };
  KmlGlFastProxy.prototype.vertexAttrib4fv_26fqmq$ = function (index, v) {
    return this.parent.vertexAttrib4fv_26fqmq$(index, v);
  };
  KmlGlFastProxy.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
    return this.parent.vertexAttribPointer_owihk5$(index, size, type, normalized, stride, pointer);
  };
  KmlGlFastProxy.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    return this.parent.viewport_tjonv8$(x, y, width, height);
  };
  KmlGlFastProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlFastProxy',
    interfaces: [KmlGl]
  };
  function LogKmlGlProxy(parent) {
    KmlGlProxy.call(this, parent);
  }
  LogKmlGlProxy.prototype.before_puj7f4$ = function (name, params) {
    println('before: ' + name + ' (' + params + ')');
  };
  LogKmlGlProxy.prototype.after_6hosri$ = function (name, params, result) {
    println('after: ' + name + ' (' + params + ') = ' + result);
  };
  LogKmlGlProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogKmlGlProxy',
    interfaces: [KmlGlProxy]
  };
  function CheckErrorsKmlGlProxy(parent, throwException) {
    if (throwException === void 0)
      throwException = false;
    KmlGlProxy.call(this, parent);
    this.throwException = throwException;
  }
  CheckErrorsKmlGlProxy.prototype.after_6hosri$ = function (name, params, result) {
    do {
      var error = this.parent.getError();
      if (error !== this.NO_ERROR) {
        println('glError: ' + error + ' ' + getErrorString(this.parent, error) + ' calling ' + name + '(' + params + ') = ' + result);
        if (this.throwException) {
          throw RuntimeException_init('glError: ' + error + ' ' + getErrorString(this.parent, error) + ' calling ' + name + '(' + params + ') = ' + result);
        }
         else {
          printStackTrace();
        }
      }
    }
     while (error !== this.NO_ERROR);
  };
  CheckErrorsKmlGlProxy.prototype.getError = function () {
    return this.parent.getError();
  };
  CheckErrorsKmlGlProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckErrorsKmlGlProxy',
    interfaces: [KmlGlProxy]
  };
  function KmlGlProgram(gl, program, vertex, fragment) {
    this.gl = gl;
    this.program = program;
    this.vertex = vertex;
    this.fragment = fragment;
  }
  KmlGlProgram.prototype.use = function () {
    this.gl.useProgram_za3lpa$(this.program);
  };
  KmlGlProgram.prototype.unuse = function () {
    this.gl.useProgram_za3lpa$(0);
  };
  KmlGlProgram.prototype.getAttribLocation_61zpoe$ = function (name) {
    return this.gl.getAttribLocation_19mbxw$(this.program, name);
  };
  KmlGlProgram.prototype.getUniformLocation_61zpoe$ = function (name) {
    return this.gl.getUniformLocation_19mbxw$(this.program, name);
  };
  KmlGlProgram.prototype.dispose = function () {
    this.gl.deleteProgram_za3lpa$(this.program);
    this.gl.deleteShader_za3lpa$(this.vertex);
    this.gl.deleteShader_za3lpa$(this.fragment);
  };
  KmlGlProgram.prototype.use_o14v8n$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.KmlGlProgram.use_o14v8n$', wrapFunction(function () {
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    return function (callback) {
      var oldProgram = getIntegerv(this.gl, this.gl.CURRENT_PROGRAM);
      this.gl.useProgram_za3lpa$(this.program);
      try {
        callback();
      }
      finally {
        this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  KmlGlProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlProgram',
    interfaces: []
  };
  function createShader($receiver, type, source) {
    var shader = $receiver.createShader_za3lpa$(type);
    $receiver.shaderSource_19mbxw$(shader, source);
    compileShaderAndCheck($receiver, shader);
    return shader;
  }
  function createProgram($receiver, vertex, fragment) {
    var program = $receiver.createProgram();
    var shaderVertex = createShader($receiver, $receiver.VERTEX_SHADER, vertex);
    var shaderFragment = createShader($receiver, $receiver.FRAGMENT_SHADER, fragment);
    $receiver.attachShader_vux9f0$(program, shaderVertex);
    $receiver.attachShader_vux9f0$(program, shaderFragment);
    linkProgramAndCheck($receiver, program);
    return new KmlGlProgram($receiver, program, shaderVertex, shaderFragment);
  }
  function KmlGlVertexLayout(program) {
    this.program = program;
    this.gl = this.program.gl;
    this.index_0 = 0;
    this.size_0 = 0;
    this.elements_0 = ArrayList_init();
  }
  function KmlGlVertexLayout$Element(index, size, type, pointer, normalized) {
    this.index = index;
    this.size = size;
    this.type = type;
    this.pointer = pointer;
    this.normalized = normalized;
  }
  KmlGlVertexLayout$Element.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Element',
    interfaces: []
  };
  KmlGlVertexLayout$Element.prototype.component1 = function () {
    return this.index;
  };
  KmlGlVertexLayout$Element.prototype.component2 = function () {
    return this.size;
  };
  KmlGlVertexLayout$Element.prototype.component3 = function () {
    return this.type;
  };
  KmlGlVertexLayout$Element.prototype.component4 = function () {
    return this.pointer;
  };
  KmlGlVertexLayout$Element.prototype.component5 = function () {
    return this.normalized;
  };
  KmlGlVertexLayout$Element.prototype.copy_7bka6z$ = function (index, size, type, pointer, normalized) {
    return new KmlGlVertexLayout$Element(index === void 0 ? this.index : index, size === void 0 ? this.size : size, type === void 0 ? this.type : type, pointer === void 0 ? this.pointer : pointer, normalized === void 0 ? this.normalized : normalized);
  };
  KmlGlVertexLayout$Element.prototype.toString = function () {
    return 'Element(index=' + Kotlin.toString(this.index) + (', size=' + Kotlin.toString(this.size)) + (', type=' + Kotlin.toString(this.type)) + (', pointer=' + Kotlin.toString(this.pointer)) + (', normalized=' + Kotlin.toString(this.normalized)) + ')';
  };
  KmlGlVertexLayout$Element.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.pointer) | 0;
    result = result * 31 + Kotlin.hashCode(this.normalized) | 0;
    return result;
  };
  KmlGlVertexLayout$Element.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.pointer, other.pointer) && Kotlin.equals(this.normalized, other.normalized)))));
  };
  KmlGlVertexLayout.prototype.add_0 = function (name, type, esize, count, normalized) {
    var attribIndex = this.program.getAttribLocation_61zpoe$(name);
    if (attribIndex < 0)
      throw RuntimeException_init("Can't find attribute with name '" + name + "' in program " + this.program);
    var $receiver = this.elements_0;
    var element = new KmlGlVertexLayout$Element(attribIndex, count, type, this.size_0, normalized);
    $receiver.add_11rb$(element);
    this.size_0 = this.size_0 + Kotlin.imul(count, esize) | 0;
    this.index_0 = this.index_0 + 1 | 0;
    return this;
  };
  KmlGlVertexLayout.prototype.byte_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.BYTE, 1, count, normalized);
  };
  KmlGlVertexLayout.prototype.ubyte_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.UNSIGNED_BYTE, 1, count, normalized);
  };
  KmlGlVertexLayout.prototype.short_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.SHORT, 2, count, normalized);
  };
  KmlGlVertexLayout.prototype.ushort_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.UNSIGNED_SHORT, 2, count, normalized);
  };
  KmlGlVertexLayout.prototype.int_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.INT, 4, count, normalized);
  };
  KmlGlVertexLayout.prototype.float_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.FLOAT, 4, count, normalized);
  };
  KmlGlVertexLayout.prototype.enable = function () {
    var $receiver = this.gl;
    var tmp$;
    tmp$ = this.elements_0;
    for (var index = 0; index !== tmp$.size; ++index) {
      var element = this.elements_0.get_za3lpa$(index);
      $receiver.enableVertexAttribArray_za3lpa$(index);
      $receiver.vertexAttribPointer_owihk5$(element.index, element.size, element.type, element.normalized, this.size_0, element.pointer);
    }
  };
  KmlGlVertexLayout.prototype.disable = function () {
    var tmp$;
    tmp$ = this.elements_0;
    for (var index = 0; index !== tmp$.size; ++index) {
      this.gl.disableVertexAttribArray_za3lpa$(index);
    }
  };
  KmlGlVertexLayout.prototype.use_o14v8n$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.KmlGlVertexLayout.use_o14v8n$', wrapFunction(function () {
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    return function (callback) {
      var $this = this.program;
      var oldProgram = getIntegerv($this.gl, $this.gl.CURRENT_PROGRAM);
      $this.gl.useProgram_za3lpa$($this.program);
      try {
        this.enable();
        try {
          callback();
        }
        finally {
          this.disable();
        }
      }
      finally {
        $this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  KmlGlVertexLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlVertexLayout',
    interfaces: []
  };
  function layout($receiver, config) {
    var $receiver_0 = new KmlGlVertexLayout($receiver);
    config($receiver_0);
    return $receiver_0;
  }
  function KmlGlBuffer(gl, type, buf) {
    this.gl = gl;
    this.type = type;
    this.buf = buf;
  }
  KmlGlBuffer.prototype.bind = function () {
    this.gl.bindBuffer_vux9f0$(this.type, this.buf);
  };
  KmlGlBuffer.prototype.unbind = function () {
    this.gl.bindBuffer_vux9f0$(this.type, 0);
  };
  KmlGlBuffer.prototype.bind_o14v8n$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.KmlGlBuffer.bind_o14v8n$', function (callback) {
    this.bind();
    try {
      callback();
    }
    finally {
      this.unbind();
    }
  });
  KmlGlBuffer.prototype.setData_vd4xm2$ = function (data, size) {
    if (size === void 0)
      size = data.size;
    this.bind();
    this.gl.bufferData_r7xkly$(this.type, size, data, this.gl.STATIC_DRAW);
    return this;
  };
  KmlGlBuffer.prototype.dispose = function () {
    this.gl.deleteBuffers_26fqmq$(1, FBuffer.Companion.invoke_za3lpa$(4));
  };
  KmlGlBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlBuffer',
    interfaces: []
  };
  function createBuffer($receiver, type) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.genBuffers_26fqmq$(1, it);
    var id = it.getInt_za3lpa$(0);
    return new KmlGlBuffer($receiver, type, id);
  }
  function createArrayBuffer($receiver) {
    return createBuffer($receiver, $receiver.ARRAY_BUFFER);
  }
  function createElementArrayBuffer($receiver) {
    return createBuffer($receiver, $receiver.ELEMENT_ARRAY_BUFFER);
  }
  var drawArrays = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.drawArrays_pvmwt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    function drawArrays$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, vertices, mode, first, count, uniforms) {
      if (uniforms === void 0)
        uniforms = drawArrays$lambda;
      var $this = $receiver.program;
      var oldProgram = getIntegerv($this.gl, $this.gl.CURRENT_PROGRAM);
      $this.gl.useProgram_za3lpa$($this.program);
      try {
        $receiver.enable();
        try {
          vertices.bind();
          try {
            uniforms($receiver.gl);
            $receiver.gl.drawArrays_qt1dr2$(mode, first, count);
          }
          finally {
            vertices.unbind();
          }
        }
        finally {
          $receiver.disable();
        }
      }
      finally {
        $this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  var drawElements = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.drawElements_albd6e$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    function drawElements$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, vertices, indices, mode, count, type, offset, uniforms) {
      if (type === void 0)
        type = $receiver.gl.UNSIGNED_SHORT;
      if (offset === void 0)
        offset = 0;
      if (uniforms === void 0)
        uniforms = drawElements$lambda;
      var $this = $receiver.program;
      var oldProgram = getIntegerv($this.gl, $this.gl.CURRENT_PROGRAM);
      $this.gl.useProgram_za3lpa$($this.program);
      try {
        $receiver.enable();
        try {
          vertices.bind();
          try {
            indices.bind();
            try {
              uniforms($receiver.gl);
              $receiver.gl.drawElements_tjonv8$(mode, count, type, offset);
            }
            finally {
              indices.unbind();
            }
          }
          finally {
            vertices.unbind();
          }
        }
        finally {
          $receiver.disable();
        }
      }
      finally {
        $this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  function KmlGlTex(gl, tex) {
    this.gl = gl;
    this.tex = tex;
    this.width = 0;
    this.height = 0;
    this.smooth = true;
    this.clampToEdge = true;
  }
  KmlGlTex.prototype.bind_za3lpa$ = function (unit) {
    var $receiver = this.gl;
    $receiver.activeTexture_za3lpa$($receiver.TEXTURE0 + unit | 0);
    $receiver.bindTexture_vux9f0$($receiver.TEXTURE_2D, this.tex);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MIN_FILTER, this.smooth ? this.gl.LINEAR : this.gl.NEAREST);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MAG_FILTER, this.smooth ? this.gl.LINEAR : this.gl.NEAREST);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_WRAP_S, this.clampToEdge ? this.gl.CLAMP_TO_EDGE : this.gl.REPEAT);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_WRAP_T, this.clampToEdge ? this.gl.CLAMP_TO_EDGE : this.gl.REPEAT);
  };
  KmlGlTex.prototype.upload_4ijnpk$ = function (width, height, data, format, type) {
    if (format === void 0)
      format = this.gl.RGBA;
    if (type === void 0)
      type = this.gl.UNSIGNED_BYTE;
    this.bind_za3lpa$(0);
    this.gl.texImage2D_byudfd$(this.gl.TEXTURE_2D, 0, format, width, height, 0, format, type, data);
    this.width = width;
    this.height = height;
    return this;
  };
  function KmlGlTex$upload$lambda(closure$width, closure$height, closure$format, closure$type, this$KmlGlTex) {
    return function (it) {
      return this$KmlGlTex.upload_4ijnpk$(closure$width, closure$height, it, closure$format, closure$type);
    };
  }
  KmlGlTex.prototype.upload_ydkzvt$ = function (width, height, data, format, type) {
    if (format === void 0)
      format = this.gl.RGBA;
    if (type === void 0)
      type = this.gl.UNSIGNED_BYTE;
    return toTempBuffer(data, KmlGlTex$upload$lambda(width, height, format, type, this));
  };
  KmlGlTex.prototype.upload_lxh57t$ = function (data, format, type) {
    if (format === void 0)
      format = this.gl.RGBA;
    if (type === void 0)
      type = this.gl.UNSIGNED_BYTE;
    this.bind_za3lpa$(0);
    this.gl.texImage2D_gqqctv$(this.gl.TEXTURE_2D, 0, format, format, type, data);
    this.width = data.width;
    this.height = data.height;
    return this;
  };
  KmlGlTex.prototype.dispose = function () {
    var it = FBuffer.Companion.invoke_za3lpa$(1);
    it.setInt_vux9f0$(0, this.tex);
    this.gl.deleteTextures_26fqmq$(1, it);
  };
  KmlGlTex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlTex',
    interfaces: []
  };
  function createKmlTexture($receiver) {
    var it = FBuffer.Companion.invoke_za3lpa$(4);
    $receiver.genTextures_26fqmq$(1, it);
    var buf = it.getInt_za3lpa$(0);
    return (new KmlGlTex($receiver, buf)).upload_4ijnpk$(1, 1, FBuffer.Companion.invoke_za3lpa$(4));
  }
  function uniformTex($receiver, location, tex, unit) {
    tex.bind_za3lpa$(unit);
    $receiver.uniform1i_vux9f0$(location, unit);
  }
  function KmlGlUtil() {
    KmlGlUtil_instance = this;
  }
  KmlGlUtil.prototype.ortho_wwalyr$ = function (width, height, near, far, out) {
    if (near === void 0)
      near = 0.0;
    if (far === void 0)
      far = 1.0;
    if (out === void 0) {
      out = sliceFloat32Buffer(new ArrayBuffer_init(64 * 4 | 0));
    }
    return this.ortho_67zf3n$(height, 0.0, 0.0, width, near, far, out);
  };
  KmlGlUtil.prototype.ortho_67zf3n$ = function (bottom, top, left, right, near, far, M) {
    if (M === void 0) {
      M = sliceFloat32Buffer(new ArrayBuffer_init(16 * 4 | 0));
    }
    M[0] = 2 / (right - left);
    M[1] = 0.0;
    M[2] = 0.0;
    M[3] = 0.0;
    M[4] = 0.0;
    M[5] = 2 / (top - bottom);
    M[6] = 0.0;
    M[7] = 0.0;
    M[8] = 0.0;
    M[9] = 0.0;
    M[10] = -2 / (far - near);
    M[11] = 0.0;
    M[12] = -(right + left) / (right - left);
    M[13] = -(top + bottom) / (top - bottom);
    M[14] = -(far + near) / (far - near);
    M[15] = 1.0;
    return M.buffer;
  };
  KmlGlUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KmlGlUtil',
    interfaces: []
  };
  var KmlGlUtil_instance = null;
  function KmlGlUtil_getInstance() {
    if (KmlGlUtil_instance === null) {
      new KmlGlUtil();
    }
    return KmlGlUtil_instance;
  }
  var KGL_VERSION;
  function CachedInt(initial) {
    this.current = initial;
  }
  CachedInt.prototype.invoke_n53o35$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.internal.CachedInt.invoke_n53o35$', function (value, callback) {
    if (this.current !== value) {
      this.current = value;
      callback();
    }
  });
  CachedInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedInt',
    interfaces: []
  };
  function CachedInt2(i1, i2) {
    this.c1 = i1;
    this.c2 = i2;
  }
  CachedInt2.prototype.invoke_sxjeop$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.internal.CachedInt2.invoke_sxjeop$', function (i1, i2, callback) {
    if (this.c1 !== i1 || this.c2 !== i2) {
      this.c1 = i1;
      this.c2 = i2;
      callback();
    }
  });
  CachedInt2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedInt2',
    interfaces: []
  };
  function CachedInt4(i1, i2, i3, i4) {
    this.c1 = i1;
    this.c2 = i2;
    this.c3 = i3;
    this.c4 = i4;
  }
  CachedInt4.prototype.invoke_nfo28p$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.internal.CachedInt4.invoke_nfo28p$', function (i1, i2, i3, i4, callback) {
    if (this.c1 !== i1 || this.c2 !== i2 || this.c3 !== i3 || this.c4 !== i4) {
      this.c1 = i1;
      this.c2 = i2;
      this.c3 = i3;
      this.c4 = i4;
      callback();
    }
  });
  CachedInt4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedInt4',
    interfaces: []
  };
  function CachedFloat(initial) {
    this.current = initial;
  }
  CachedFloat.prototype.invoke_l5b6g4$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.internal.CachedFloat.invoke_l5b6g4$', function (value, callback) {
    if (this.current !== value) {
      this.current = value;
      callback();
    }
  });
  CachedFloat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedFloat',
    interfaces: []
  };
  function CachedFloat2(i1, i2) {
    this.c1 = i1;
    this.c2 = i2;
  }
  CachedFloat2.prototype.invoke_tveb7r$ = defineInlineFunction('korgw-root-korgw.com.soywiz.kgl.internal.CachedFloat2.invoke_tveb7r$', function (i1, i2, callback) {
    if (this.c1 !== i1 || this.c2 !== i2) {
      this.c1 = i1;
      this.c2 = i2;
      callback();
    }
  });
  CachedFloat2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachedFloat2',
    interfaces: []
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
  function AGFactory() {
  }
  AGFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGFactory',
    interfaces: []
  };
  function AGConfig(antialiasHint) {
    if (antialiasHint === void 0)
      antialiasHint = true;
    this.antialiasHint = antialiasHint;
  }
  AGConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGConfig',
    interfaces: []
  };
  AGConfig.prototype.component1 = function () {
    return this.antialiasHint;
  };
  AGConfig.prototype.copy_6taknv$ = function (antialiasHint) {
    return new AGConfig(antialiasHint === void 0 ? this.antialiasHint : antialiasHint);
  };
  AGConfig.prototype.toString = function () {
    return 'AGConfig(antialiasHint=' + Kotlin.toString(this.antialiasHint) + ')';
  };
  AGConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.antialiasHint) | 0;
    return result;
  };
  AGConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.antialiasHint, other.antialiasHint))));
  };
  function AGContainer() {
  }
  AGContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGContainer',
    interfaces: []
  };
  function AGWindow() {
  }
  AGWindow.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGWindow',
    interfaces: [AGContainer]
  };
  function AG() {
    this.$delegate_y4f8iy$_0 = new Extra$Mixin();
    this.contextVersion = 0;
    this.maxTextureSize_6yxley$_0 = new Size(new Point(numberToDouble(2048), numberToDouble(2048)));
    this.devicePixelRatio_xydx2f$_0 = 1.0;
    this._onReadyDeferred_25a0pq$_0 = CompletableDeferred(Job());
    this.onReady = this._onReadyDeferred_25a0pq$_0;
    this.onRender = new Signal();
    this.viewport = new Int32Array([0, 0, 640, 480]);
    this.lastTextureId = 0;
    this.createdTextureCount = 0;
    this.deletedTextureCount = 0;
    this.dummyTexture_s1lppr$_0 = lazy(AG$dummyTexture$lambda(this));
    this.dummyRenderState_xrscgh$_0 = new AG$RenderState();
    this.dummyStencilState_6gllmd$_0 = new AG$StencilState();
    this.dummyColorMaskState_s1o3tk$_0 = new AG$ColorMaskState();
    this.frameRenderBuffers = LinkedHashSet_init();
    this.renderBuffers = Pool_init(void 0, AG$renderBuffers$lambda(this));
    this.mainRenderBuffer = new AG$mainRenderBuffer$ObjectLiteral(this);
    this.currentRenderBuffer = this.mainRenderBuffer;
    this.textureDrawer_p4bz2y$_0 = lazy(AG$textureDrawer$lambda(this));
    this.flipRenderTexture = true;
    this.drawTempTexture_npdcj3$_g2cado$_0 = lazy(AG$drawTempTexture$lambda(this));
  }
  AG.prototype.contextLost = function () {
    println('AG.contextLost() : ' + this);
    this.contextVersion = this.contextVersion + 1 | 0;
  };
  Object.defineProperty(AG.prototype, 'maxTextureSize', {
    get: function () {
      return this.maxTextureSize_6yxley$_0;
    }
  });
  Object.defineProperty(AG.prototype, 'devicePixelRatio', {
    get: function () {
      return this.devicePixelRatio_xydx2f$_0;
    }
  });
  AG.prototype.ready = function () {
    this.__ready();
  };
  AG.prototype.__ready = function () {
    this._onReadyDeferred_25a0pq$_0.complete_11rb$(this);
  };
  AG.prototype.offscreenRendering_o14v8n$ = function (callback) {
    callback();
  };
  AG.prototype.repaint = function () {
  };
  AG.prototype.resized_vux9f0$ = function (width, height) {
    this.mainRenderBuffer.setSize_vux9f0$(width, height);
    this.setViewport_tjonv8$(0, 0, width, height);
  };
  AG.prototype.dispose = function () {
  };
  Object.defineProperty(AG.prototype, 'backWidth', {
    get: function () {
      return this.viewport[2];
    }
  });
  Object.defineProperty(AG.prototype, 'backHeight', {
    get: function () {
      return this.viewport[3];
    }
  });
  AG.prototype.getViewport_q5rwfd$ = function (out) {
    arrayCopy(this.viewport, out, 0, 0, 0 + 4 | 0);
    return out;
  };
  AG.prototype.setViewport_tjonv8$ = function (x, y, width, height) {
    this.viewport[0] = x;
    this.viewport[1] = y;
    this.viewport[2] = width;
    this.viewport[3] = height;
  };
  AG.prototype.setViewport_q5rwfd$ = function (v) {
    this.setViewport_tjonv8$(v[0], v[1], v[2], v[3]);
  };
  function AG$BlendEquation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$BlendEquation_initFields() {
    AG$BlendEquation_initFields = function () {
    };
    AG$BlendEquation$ADD_instance = new AG$BlendEquation('ADD', 0);
    AG$BlendEquation$SUBTRACT_instance = new AG$BlendEquation('SUBTRACT', 1);
    AG$BlendEquation$REVERSE_SUBTRACT_instance = new AG$BlendEquation('REVERSE_SUBTRACT', 2);
  }
  var AG$BlendEquation$ADD_instance;
  function AG$BlendEquation$ADD_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$ADD_instance;
  }
  var AG$BlendEquation$SUBTRACT_instance;
  function AG$BlendEquation$SUBTRACT_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$SUBTRACT_instance;
  }
  var AG$BlendEquation$REVERSE_SUBTRACT_instance;
  function AG$BlendEquation$REVERSE_SUBTRACT_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$REVERSE_SUBTRACT_instance;
  }
  AG$BlendEquation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendEquation',
    interfaces: [Enum]
  };
  function AG$BlendEquation$values() {
    return [AG$BlendEquation$ADD_getInstance(), AG$BlendEquation$SUBTRACT_getInstance(), AG$BlendEquation$REVERSE_SUBTRACT_getInstance()];
  }
  AG$BlendEquation.values = AG$BlendEquation$values;
  function AG$BlendEquation$valueOf(name) {
    switch (name) {
      case 'ADD':
        return AG$BlendEquation$ADD_getInstance();
      case 'SUBTRACT':
        return AG$BlendEquation$SUBTRACT_getInstance();
      case 'REVERSE_SUBTRACT':
        return AG$BlendEquation$REVERSE_SUBTRACT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.BlendEquation.' + name);
    }
  }
  AG$BlendEquation.valueOf_61zpoe$ = AG$BlendEquation$valueOf;
  function AG$BlendFactor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$BlendFactor_initFields() {
    AG$BlendFactor_initFields = function () {
    };
    AG$BlendFactor$DESTINATION_ALPHA_instance = new AG$BlendFactor('DESTINATION_ALPHA', 0);
    AG$BlendFactor$DESTINATION_COLOR_instance = new AG$BlendFactor('DESTINATION_COLOR', 1);
    AG$BlendFactor$ONE_instance = new AG$BlendFactor('ONE', 2);
    AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance = new AG$BlendFactor('ONE_MINUS_DESTINATION_ALPHA', 3);
    AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance = new AG$BlendFactor('ONE_MINUS_DESTINATION_COLOR', 4);
    AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance = new AG$BlendFactor('ONE_MINUS_SOURCE_ALPHA', 5);
    AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance = new AG$BlendFactor('ONE_MINUS_SOURCE_COLOR', 6);
    AG$BlendFactor$SOURCE_ALPHA_instance = new AG$BlendFactor('SOURCE_ALPHA', 7);
    AG$BlendFactor$SOURCE_COLOR_instance = new AG$BlendFactor('SOURCE_COLOR', 8);
    AG$BlendFactor$ZERO_instance = new AG$BlendFactor('ZERO', 9);
  }
  var AG$BlendFactor$DESTINATION_ALPHA_instance;
  function AG$BlendFactor$DESTINATION_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$DESTINATION_ALPHA_instance;
  }
  var AG$BlendFactor$DESTINATION_COLOR_instance;
  function AG$BlendFactor$DESTINATION_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$DESTINATION_COLOR_instance;
  }
  var AG$BlendFactor$ONE_instance;
  function AG$BlendFactor$ONE_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_instance;
  }
  var AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance;
  function AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance;
  }
  var AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance;
  function AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance;
  }
  var AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance;
  function AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance;
  }
  var AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance;
  function AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance;
  }
  var AG$BlendFactor$SOURCE_ALPHA_instance;
  function AG$BlendFactor$SOURCE_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$SOURCE_ALPHA_instance;
  }
  var AG$BlendFactor$SOURCE_COLOR_instance;
  function AG$BlendFactor$SOURCE_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$SOURCE_COLOR_instance;
  }
  var AG$BlendFactor$ZERO_instance;
  function AG$BlendFactor$ZERO_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ZERO_instance;
  }
  AG$BlendFactor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendFactor',
    interfaces: [Enum]
  };
  function AG$BlendFactor$values() {
    return [AG$BlendFactor$DESTINATION_ALPHA_getInstance(), AG$BlendFactor$DESTINATION_COLOR_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance(), AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$SOURCE_COLOR_getInstance(), AG$BlendFactor$ZERO_getInstance()];
  }
  AG$BlendFactor.values = AG$BlendFactor$values;
  function AG$BlendFactor$valueOf(name) {
    switch (name) {
      case 'DESTINATION_ALPHA':
        return AG$BlendFactor$DESTINATION_ALPHA_getInstance();
      case 'DESTINATION_COLOR':
        return AG$BlendFactor$DESTINATION_COLOR_getInstance();
      case 'ONE':
        return AG$BlendFactor$ONE_getInstance();
      case 'ONE_MINUS_DESTINATION_ALPHA':
        return AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance();
      case 'ONE_MINUS_DESTINATION_COLOR':
        return AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance();
      case 'ONE_MINUS_SOURCE_ALPHA':
        return AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance();
      case 'ONE_MINUS_SOURCE_COLOR':
        return AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance();
      case 'SOURCE_ALPHA':
        return AG$BlendFactor$SOURCE_ALPHA_getInstance();
      case 'SOURCE_COLOR':
        return AG$BlendFactor$SOURCE_COLOR_getInstance();
      case 'ZERO':
        return AG$BlendFactor$ZERO_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.BlendFactor.' + name);
    }
  }
  AG$BlendFactor.valueOf_61zpoe$ = AG$BlendFactor$valueOf;
  function AG$Scissor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(AG$Scissor.prototype, 'top', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'left', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'right', {
    get: function () {
      return this.x + this.width | 0;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'bottom', {
    get: function () {
      return this.y + this.height | 0;
    }
  });
  AG$Scissor.prototype.copyFrom_2qsquc$ = function (that) {
    return this.setTo_tjonv8$(that.x, that.y, that.width, that.height);
  };
  AG$Scissor.prototype.setTo_tjonv8$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  AG$Scissor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scissor',
    interfaces: []
  };
  AG$Scissor.prototype.component1 = function () {
    return this.x;
  };
  AG$Scissor.prototype.component2 = function () {
    return this.y;
  };
  AG$Scissor.prototype.component3 = function () {
    return this.width;
  };
  AG$Scissor.prototype.component4 = function () {
    return this.height;
  };
  AG$Scissor.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new AG$Scissor(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  AG$Scissor.prototype.toString = function () {
    return 'Scissor(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  AG$Scissor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  AG$Scissor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function AG$Blending(srcRGB, dstRGB, srcA, dstA, eqRGB, eqA) {
    AG$Blending$Companion_getInstance();
    if (srcA === void 0)
      srcA = srcRGB;
    if (dstA === void 0)
      dstA = dstRGB;
    if (eqRGB === void 0)
      eqRGB = AG$BlendEquation$ADD_getInstance();
    if (eqA === void 0)
      eqA = eqRGB;
    this.srcRGB = srcRGB;
    this.dstRGB = dstRGB;
    this.srcA = srcA;
    this.dstA = dstA;
    this.eqRGB = eqRGB;
    this.eqA = eqA;
  }
  Object.defineProperty(AG$Blending.prototype, 'disabled', {
    get: function () {
      return this.srcRGB === AG$BlendFactor$ONE_getInstance() && this.dstRGB === AG$BlendFactor$ZERO_getInstance() && this.srcA === AG$BlendFactor$ONE_getInstance() && this.dstA === AG$BlendFactor$ZERO_getInstance();
    }
  });
  Object.defineProperty(AG$Blending.prototype, 'enabled', {
    get: function () {
      return !this.disabled;
    }
  });
  function AG$Blending$Companion() {
    AG$Blending$Companion_instance = this;
    this.NONE = new AG$Blending(AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ZERO_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ZERO_getInstance());
    this.NORMAL = new AG$Blending(AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance());
    this.ADD = new AG$Blending(AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$DESTINATION_ALPHA_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_getInstance());
  }
  AG$Blending$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$Blending$Companion_instance = null;
  function AG$Blending$Companion_getInstance() {
    if (AG$Blending$Companion_instance === null) {
      new AG$Blending$Companion();
    }
    return AG$Blending$Companion_instance;
  }
  AG$Blending.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blending',
    interfaces: []
  };
  function AG$AG$Blending_init(src, dst, eq, $this) {
    if (eq === void 0)
      eq = AG$BlendEquation$ADD_getInstance();
    $this = $this || Object.create(AG$Blending.prototype);
    AG$Blending.call($this, src, dst, src, dst, eq, eq);
    return $this;
  }
  AG$Blending.prototype.component1 = function () {
    return this.srcRGB;
  };
  AG$Blending.prototype.component2 = function () {
    return this.dstRGB;
  };
  AG$Blending.prototype.component3 = function () {
    return this.srcA;
  };
  AG$Blending.prototype.component4 = function () {
    return this.dstA;
  };
  AG$Blending.prototype.component5 = function () {
    return this.eqRGB;
  };
  AG$Blending.prototype.component6 = function () {
    return this.eqA;
  };
  AG$Blending.prototype.copy_sbntou$ = function (srcRGB, dstRGB, srcA, dstA, eqRGB, eqA) {
    return new AG$Blending(srcRGB === void 0 ? this.srcRGB : srcRGB, dstRGB === void 0 ? this.dstRGB : dstRGB, srcA === void 0 ? this.srcA : srcA, dstA === void 0 ? this.dstA : dstA, eqRGB === void 0 ? this.eqRGB : eqRGB, eqA === void 0 ? this.eqA : eqA);
  };
  AG$Blending.prototype.toString = function () {
    return 'Blending(srcRGB=' + Kotlin.toString(this.srcRGB) + (', dstRGB=' + Kotlin.toString(this.dstRGB)) + (', srcA=' + Kotlin.toString(this.srcA)) + (', dstA=' + Kotlin.toString(this.dstA)) + (', eqRGB=' + Kotlin.toString(this.eqRGB)) + (', eqA=' + Kotlin.toString(this.eqA)) + ')';
  };
  AG$Blending.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.srcRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.dstRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.srcA) | 0;
    result = result * 31 + Kotlin.hashCode(this.dstA) | 0;
    result = result * 31 + Kotlin.hashCode(this.eqRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.eqA) | 0;
    return result;
  };
  AG$Blending.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.srcRGB, other.srcRGB) && Kotlin.equals(this.dstRGB, other.dstRGB) && Kotlin.equals(this.srcA, other.srcA) && Kotlin.equals(this.dstA, other.dstA) && Kotlin.equals(this.eqRGB, other.eqRGB) && Kotlin.equals(this.eqA, other.eqA)))));
  };
  function AG$BitmapSourceBase() {
  }
  AG$BitmapSourceBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BitmapSourceBase',
    interfaces: []
  };
  function AG$SyncBitmapSource(rgba, width, height, gen) {
    AG$SyncBitmapSource$Companion_getInstance();
    this.rgba_ltsnud$_0 = rgba;
    this.width_v92m8r$_0 = width;
    this.height_gq1qoy$_0 = height;
    this.gen = gen;
  }
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'rgba', {
    get: function () {
      return this.rgba_ltsnud$_0;
    }
  });
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'width', {
    get: function () {
      return this.width_v92m8r$_0;
    }
  });
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'height', {
    get: function () {
      return this.height_gq1qoy$_0;
    }
  });
  function AG$SyncBitmapSource$Companion() {
    AG$SyncBitmapSource$Companion_instance = this;
    this.NULL = new AG$SyncBitmapSource(true, 0, 0, AG$SyncBitmapSource$Companion$NULL$lambda);
  }
  function AG$SyncBitmapSource$Companion$NULL$lambda() {
    return null;
  }
  AG$SyncBitmapSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$SyncBitmapSource$Companion_instance = null;
  function AG$SyncBitmapSource$Companion_getInstance() {
    if (AG$SyncBitmapSource$Companion_instance === null) {
      new AG$SyncBitmapSource$Companion();
    }
    return AG$SyncBitmapSource$Companion_instance;
  }
  AG$SyncBitmapSource.prototype.toString = function () {
    return 'SyncBitmapSource(rgba=' + this.rgba + ', width=' + this.width + ', height=' + this.height + ')';
  };
  AG$SyncBitmapSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$AsyncBitmapSource(coroutineContext, rgba, width, height, gen) {
    AG$AsyncBitmapSource$Companion_getInstance();
    this.coroutineContext = coroutineContext;
    this.rgba_gss57q$_0 = rgba;
    this.width_pyti6s$_0 = width;
    this.height_eqw6oj$_0 = height;
    this.gen = gen;
  }
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'rgba', {
    get: function () {
      return this.rgba_gss57q$_0;
    }
  });
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'width', {
    get: function () {
      return this.width_pyti6s$_0;
    }
  });
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'height', {
    get: function () {
      return this.height_eqw6oj$_0;
    }
  });
  function AG$AsyncBitmapSource$Companion() {
    AG$AsyncBitmapSource$Companion_instance = this;
    this.NULL = new AG$AsyncBitmapSource(coroutines.EmptyCoroutineContext, true, 0, 0, AG$AsyncBitmapSource$Companion$NULL$lambda);
  }
  function Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype.constructor = Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda;
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return null;
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
  function AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0, suspended) {
    var instance = new Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  AG$AsyncBitmapSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$AsyncBitmapSource$Companion_instance = null;
  function AG$AsyncBitmapSource$Companion_getInstance() {
    if (AG$AsyncBitmapSource$Companion_instance === null) {
      new AG$AsyncBitmapSource$Companion();
    }
    return AG$AsyncBitmapSource$Companion_instance;
  }
  AG$AsyncBitmapSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$TextureKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$TextureKind_initFields() {
    AG$TextureKind_initFields = function () {
    };
    AG$TextureKind$RGBA_instance = new AG$TextureKind('RGBA', 0);
    AG$TextureKind$LUMINANCE_instance = new AG$TextureKind('LUMINANCE', 1);
  }
  var AG$TextureKind$RGBA_instance;
  function AG$TextureKind$RGBA_getInstance() {
    AG$TextureKind_initFields();
    return AG$TextureKind$RGBA_instance;
  }
  var AG$TextureKind$LUMINANCE_instance;
  function AG$TextureKind$LUMINANCE_getInstance() {
    AG$TextureKind_initFields();
    return AG$TextureKind$LUMINANCE_instance;
  }
  AG$TextureKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureKind',
    interfaces: [Enum]
  };
  function AG$TextureKind$values() {
    return [AG$TextureKind$RGBA_getInstance(), AG$TextureKind$LUMINANCE_getInstance()];
  }
  AG$TextureKind.values = AG$TextureKind$values;
  function AG$TextureKind$valueOf(name) {
    switch (name) {
      case 'RGBA':
        return AG$TextureKind$RGBA_getInstance();
      case 'LUMINANCE':
        return AG$TextureKind$LUMINANCE_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.TextureKind.' + name);
    }
  }
  AG$TextureKind.valueOf_61zpoe$ = AG$TextureKind$valueOf;
  function AG$Texture($outer) {
    this.$outer = $outer;
    this.isFbo = false;
    this.premultiplied_ra8tjj$_0 = true;
    this.requestMipmaps = false;
    this.mipmaps_fmt7mu$_0 = false;
    this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
    this.tempBitmap_rlmwj0$_0 = null;
    this.ready_9e90wu$_0 = false;
    var tmp$, tmp$_0;
    this.texId = (tmp$ = this.$outer.lastTextureId, this.$outer.lastTextureId = tmp$ + 1 | 0, tmp$);
    tmp$_0 = this.$outer.createdTextureCount;
    this.$outer.createdTextureCount = tmp$_0 + 1 | 0;
    this.alreadyClosed_j6qvi7$_0 = false;
  }
  Object.defineProperty(AG$Texture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_ra8tjj$_0;
    }
  });
  Object.defineProperty(AG$Texture.prototype, 'mipmaps', {
    get: function () {
      return this.mipmaps_fmt7mu$_0;
    },
    set: function (mipmaps) {
      this.mipmaps_fmt7mu$_0 = mipmaps;
    }
  });
  Object.defineProperty(AG$Texture.prototype, 'ready', {
    get: function () {
      return this.ready_9e90wu$_0;
    },
    set: function (ready) {
      this.ready_9e90wu$_0 = ready;
    }
  });
  AG$Texture.prototype.invalidate = function () {
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
  };
  function AG$Texture$upload$lambda(closure$bmp) {
    return function () {
      return closure$bmp;
    };
  }
  AG$Texture.prototype.upload_nn58bg$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.upload_fh4hjo$(bmp != null ? new AG$SyncBitmapSource(bmp.bpp > 8, bmp.width, bmp.height, AG$Texture$upload$lambda(bmp)) : AG$SyncBitmapSource$Companion_getInstance().NULL, mipmaps);
  };
  AG$Texture.prototype.upload_2ug3a3$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.upload_nn58bg$(bmp != null ? bmp.extract() : null, mipmaps);
  };
  AG$Texture.prototype.upload_fh4hjo$ = function (source, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.source = source;
    this.uploadedSource();
    this.invalidate();
    this.requestMipmaps = mipmaps;
    return this;
  };
  AG$Texture.prototype.uploadedSource = function () {
  };
  AG$Texture.prototype.bind = function () {
  };
  AG$Texture.prototype.unbind = function () {
  };
  AG$Texture.prototype.manualUpload = function () {
    this.uploaded_bjht0x$_0 = true;
    return this;
  };
  function Coroutine$AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$source = closure$source_0;
    this.local$this$Texture = this$Texture_0;
  }
  Coroutine$AG$Texture$bindEnsuring$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype.constructor = Coroutine$AG$Texture$bindEnsuring$lambda;
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$source.gen(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Texture.tempBitmap_rlmwj0$_0 = this.result_0;
            return this.local$this$Texture.generated_6fnrcm$_0 = true, Unit;
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
  function AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  AG$Texture.prototype.bindEnsuring = function () {
    this.bind();
    if (!this.isFbo) {
      var source = this.source;
      if (!this.uploaded_bjht0x$_0) {
        if (!this.generating_dlstkz$_0) {
          this.generating_dlstkz$_0 = true;
          if (Kotlin.isType(source, AG$SyncBitmapSource)) {
            this.tempBitmap_rlmwj0$_0 = source.gen();
            this.generated_6fnrcm$_0 = true;
          }
           else if (Kotlin.isType(source, AG$AsyncBitmapSource))
            asyncImmediately(source.coroutineContext, AG$Texture$bindEnsuring$lambda(source, this));
        }
        if (this.generated_6fnrcm$_0) {
          this.uploaded_bjht0x$_0 = true;
          this.generating_dlstkz$_0 = false;
          this.generated_6fnrcm$_0 = false;
          this.actualSyncUpload_u9zjc3$(source, this.tempBitmap_rlmwj0$_0, this.requestMipmaps);
          this.tempBitmap_rlmwj0$_0 = null;
          this.ready = true;
        }
      }
    }
  };
  AG$Texture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
  };
  AG$Texture.prototype.close = function () {
    var tmp$;
    if (!this.alreadyClosed_j6qvi7$_0) {
      this.alreadyClosed_j6qvi7$_0 = true;
      this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
      this.tempBitmap_rlmwj0$_0 = null;
      tmp$ = this.$outer.deletedTextureCount;
      this.$outer.deletedTextureCount = tmp$ + 1 | 0;
    }
  };
  AG$Texture.prototype.printTexStats_3r8gow$_0 = function () {
  };
  AG$Texture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture',
    interfaces: [Closeable]
  };
  function AG$TextureUnit(texture, linear) {
    if (texture === void 0)
      texture = null;
    if (linear === void 0)
      linear = true;
    this.texture = texture;
    this.linear = linear;
  }
  AG$TextureUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureUnit',
    interfaces: []
  };
  AG$TextureUnit.prototype.component1 = function () {
    return this.texture;
  };
  AG$TextureUnit.prototype.component2 = function () {
    return this.linear;
  };
  AG$TextureUnit.prototype.copy_qgz3nv$ = function (texture, linear) {
    return new AG$TextureUnit(texture === void 0 ? this.texture : texture, linear === void 0 ? this.linear : linear);
  };
  AG$TextureUnit.prototype.toString = function () {
    return 'TextureUnit(texture=' + Kotlin.toString(this.texture) + (', linear=' + Kotlin.toString(this.linear)) + ')';
  };
  AG$TextureUnit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.texture) | 0;
    result = result * 31 + Kotlin.hashCode(this.linear) | 0;
    return result;
  };
  AG$TextureUnit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.texture, other.texture) && Kotlin.equals(this.linear, other.linear)))));
  };
  function AG$Buffer(kind) {
    this.kind = kind;
    this.dirty = false;
    this.mem = null;
    this.memOffset = 0;
    this.memLength = 0;
  }
  function AG$Buffer$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$Buffer$Kind_initFields() {
    AG$Buffer$Kind_initFields = function () {
    };
    AG$Buffer$Kind$INDEX_instance = new AG$Buffer$Kind('INDEX', 0);
    AG$Buffer$Kind$VERTEX_instance = new AG$Buffer$Kind('VERTEX', 1);
  }
  var AG$Buffer$Kind$INDEX_instance;
  function AG$Buffer$Kind$INDEX_getInstance() {
    AG$Buffer$Kind_initFields();
    return AG$Buffer$Kind$INDEX_instance;
  }
  var AG$Buffer$Kind$VERTEX_instance;
  function AG$Buffer$Kind$VERTEX_getInstance() {
    AG$Buffer$Kind_initFields();
    return AG$Buffer$Kind$VERTEX_instance;
  }
  AG$Buffer$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function AG$Buffer$Kind$values() {
    return [AG$Buffer$Kind$INDEX_getInstance(), AG$Buffer$Kind$VERTEX_getInstance()];
  }
  AG$Buffer$Kind.values = AG$Buffer$Kind$values;
  function AG$Buffer$Kind$valueOf(name) {
    switch (name) {
      case 'INDEX':
        return AG$Buffer$Kind$INDEX_getInstance();
      case 'VERTEX':
        return AG$Buffer$Kind$VERTEX_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.Buffer.Kind.' + name);
    }
  }
  AG$Buffer$Kind.valueOf_61zpoe$ = AG$Buffer$Kind$valueOf;
  AG$Buffer.prototype.afterSetMem = function () {
  };
  AG$Buffer.prototype.upload_mj6st8$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length);
    ensureNotNull(this.mem).setAlignedArrayInt8_3fge6q$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_kgymra$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length * 4 | 0);
    ensureNotNull(this.mem).setAlignedArrayFloat32_3hvitc$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 4 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_nd5v6f$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length * 4 | 0);
    ensureNotNull(this.mem).setAlignedArrayInt32_coga0j$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 4 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_359eei$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length * 2 | 0);
    ensureNotNull(this.mem).setAlignedArrayInt16_r43jz4$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 2 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_khrw8o$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size;
    this.mem = data;
    this.memOffset = offset;
    this.memLength = length;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.close = function () {
    this.mem = null;
    this.memOffset = 0;
    this.memLength = 0;
    this.dirty = true;
  };
  AG$Buffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Buffer',
    interfaces: [Closeable]
  };
  function AG$DrawType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$DrawType_initFields() {
    AG$DrawType_initFields = function () {
    };
    AG$DrawType$POINTS_instance = new AG$DrawType('POINTS', 0);
    AG$DrawType$LINE_STRIP_instance = new AG$DrawType('LINE_STRIP', 1);
    AG$DrawType$LINE_LOOP_instance = new AG$DrawType('LINE_LOOP', 2);
    AG$DrawType$LINES_instance = new AG$DrawType('LINES', 3);
    AG$DrawType$TRIANGLES_instance = new AG$DrawType('TRIANGLES', 4);
    AG$DrawType$TRIANGLE_STRIP_instance = new AG$DrawType('TRIANGLE_STRIP', 5);
    AG$DrawType$TRIANGLE_FAN_instance = new AG$DrawType('TRIANGLE_FAN', 6);
  }
  var AG$DrawType$POINTS_instance;
  function AG$DrawType$POINTS_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$POINTS_instance;
  }
  var AG$DrawType$LINE_STRIP_instance;
  function AG$DrawType$LINE_STRIP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINE_STRIP_instance;
  }
  var AG$DrawType$LINE_LOOP_instance;
  function AG$DrawType$LINE_LOOP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINE_LOOP_instance;
  }
  var AG$DrawType$LINES_instance;
  function AG$DrawType$LINES_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINES_instance;
  }
  var AG$DrawType$TRIANGLES_instance;
  function AG$DrawType$TRIANGLES_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLES_instance;
  }
  var AG$DrawType$TRIANGLE_STRIP_instance;
  function AG$DrawType$TRIANGLE_STRIP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLE_STRIP_instance;
  }
  var AG$DrawType$TRIANGLE_FAN_instance;
  function AG$DrawType$TRIANGLE_FAN_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLE_FAN_instance;
  }
  AG$DrawType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawType',
    interfaces: [Enum]
  };
  function AG$DrawType$values() {
    return [AG$DrawType$POINTS_getInstance(), AG$DrawType$LINE_STRIP_getInstance(), AG$DrawType$LINE_LOOP_getInstance(), AG$DrawType$LINES_getInstance(), AG$DrawType$TRIANGLES_getInstance(), AG$DrawType$TRIANGLE_STRIP_getInstance(), AG$DrawType$TRIANGLE_FAN_getInstance()];
  }
  AG$DrawType.values = AG$DrawType$values;
  function AG$DrawType$valueOf(name) {
    switch (name) {
      case 'POINTS':
        return AG$DrawType$POINTS_getInstance();
      case 'LINE_STRIP':
        return AG$DrawType$LINE_STRIP_getInstance();
      case 'LINE_LOOP':
        return AG$DrawType$LINE_LOOP_getInstance();
      case 'LINES':
        return AG$DrawType$LINES_getInstance();
      case 'TRIANGLES':
        return AG$DrawType$TRIANGLES_getInstance();
      case 'TRIANGLE_STRIP':
        return AG$DrawType$TRIANGLE_STRIP_getInstance();
      case 'TRIANGLE_FAN':
        return AG$DrawType$TRIANGLE_FAN_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.DrawType.' + name);
    }
  }
  AG$DrawType.valueOf_61zpoe$ = AG$DrawType$valueOf;
  Object.defineProperty(AG.prototype, 'dummyTexture', {
    get: function () {
      return this.dummyTexture_s1lppr$_0.value;
    }
  });
  AG.prototype.createTexture = function () {
    return this.createTexture_6taknv$(true);
  };
  AG.prototype.createTexture_lg0pjf$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture_6taknv$(bmp.premultiplied).upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createTexture_ejmmxi$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture_6taknv$(bmp.premultiplied).upload_2ug3a3$(bmp, mipmaps);
  };
  AG.prototype.createTexture_mj3tyc$ = function (bmp, mipmaps, premultiplied) {
    if (mipmaps === void 0)
      mipmaps = false;
    if (premultiplied === void 0)
      premultiplied = true;
    return this.createTexture_6taknv$(premultiplied).upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createTexture_6taknv$ = function (premultiplied) {
    return new AG$Texture(this);
  };
  AG.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AG$Buffer(kind);
  };
  AG.prototype.createIndexBuffer = function () {
    return this.createBuffer_g6fstm$(AG$Buffer$Kind$INDEX_getInstance());
  };
  AG.prototype.createVertexBuffer = function () {
    return this.createBuffer_g6fstm$(AG$Buffer$Kind$VERTEX_getInstance());
  };
  AG.prototype.createIndexBuffer_359eei$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_359eei$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createIndexBuffer_khrw8o$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_khrw8o$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createVertexBuffer_kgymra$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_kgymra$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createVertexBuffer_khrw8o$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_khrw8o$(data, offset, length);
    return $receiver;
  };
  function AG$StencilOp(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$StencilOp_initFields() {
    AG$StencilOp_initFields = function () {
    };
    AG$StencilOp$DECREMENT_SATURATE_instance = new AG$StencilOp('DECREMENT_SATURATE', 0);
    AG$StencilOp$DECREMENT_WRAP_instance = new AG$StencilOp('DECREMENT_WRAP', 1);
    AG$StencilOp$INCREMENT_SATURATE_instance = new AG$StencilOp('INCREMENT_SATURATE', 2);
    AG$StencilOp$INCREMENT_WRAP_instance = new AG$StencilOp('INCREMENT_WRAP', 3);
    AG$StencilOp$INVERT_instance = new AG$StencilOp('INVERT', 4);
    AG$StencilOp$KEEP_instance = new AG$StencilOp('KEEP', 5);
    AG$StencilOp$SET_instance = new AG$StencilOp('SET', 6);
    AG$StencilOp$ZERO_instance = new AG$StencilOp('ZERO', 7);
  }
  var AG$StencilOp$DECREMENT_SATURATE_instance;
  function AG$StencilOp$DECREMENT_SATURATE_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$DECREMENT_SATURATE_instance;
  }
  var AG$StencilOp$DECREMENT_WRAP_instance;
  function AG$StencilOp$DECREMENT_WRAP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$DECREMENT_WRAP_instance;
  }
  var AG$StencilOp$INCREMENT_SATURATE_instance;
  function AG$StencilOp$INCREMENT_SATURATE_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INCREMENT_SATURATE_instance;
  }
  var AG$StencilOp$INCREMENT_WRAP_instance;
  function AG$StencilOp$INCREMENT_WRAP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INCREMENT_WRAP_instance;
  }
  var AG$StencilOp$INVERT_instance;
  function AG$StencilOp$INVERT_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INVERT_instance;
  }
  var AG$StencilOp$KEEP_instance;
  function AG$StencilOp$KEEP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$KEEP_instance;
  }
  var AG$StencilOp$SET_instance;
  function AG$StencilOp$SET_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$SET_instance;
  }
  var AG$StencilOp$ZERO_instance;
  function AG$StencilOp$ZERO_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$ZERO_instance;
  }
  AG$StencilOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StencilOp',
    interfaces: [Enum]
  };
  function AG$StencilOp$values() {
    return [AG$StencilOp$DECREMENT_SATURATE_getInstance(), AG$StencilOp$DECREMENT_WRAP_getInstance(), AG$StencilOp$INCREMENT_SATURATE_getInstance(), AG$StencilOp$INCREMENT_WRAP_getInstance(), AG$StencilOp$INVERT_getInstance(), AG$StencilOp$KEEP_getInstance(), AG$StencilOp$SET_getInstance(), AG$StencilOp$ZERO_getInstance()];
  }
  AG$StencilOp.values = AG$StencilOp$values;
  function AG$StencilOp$valueOf(name) {
    switch (name) {
      case 'DECREMENT_SATURATE':
        return AG$StencilOp$DECREMENT_SATURATE_getInstance();
      case 'DECREMENT_WRAP':
        return AG$StencilOp$DECREMENT_WRAP_getInstance();
      case 'INCREMENT_SATURATE':
        return AG$StencilOp$INCREMENT_SATURATE_getInstance();
      case 'INCREMENT_WRAP':
        return AG$StencilOp$INCREMENT_WRAP_getInstance();
      case 'INVERT':
        return AG$StencilOp$INVERT_getInstance();
      case 'KEEP':
        return AG$StencilOp$KEEP_getInstance();
      case 'SET':
        return AG$StencilOp$SET_getInstance();
      case 'ZERO':
        return AG$StencilOp$ZERO_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.StencilOp.' + name);
    }
  }
  AG$StencilOp.valueOf_61zpoe$ = AG$StencilOp$valueOf;
  function AG$TriangleFace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$TriangleFace_initFields() {
    AG$TriangleFace_initFields = function () {
    };
    AG$TriangleFace$FRONT_instance = new AG$TriangleFace('FRONT', 0);
    AG$TriangleFace$BACK_instance = new AG$TriangleFace('BACK', 1);
    AG$TriangleFace$FRONT_AND_BACK_instance = new AG$TriangleFace('FRONT_AND_BACK', 2);
    AG$TriangleFace$NONE_instance = new AG$TriangleFace('NONE', 3);
  }
  var AG$TriangleFace$FRONT_instance;
  function AG$TriangleFace$FRONT_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$FRONT_instance;
  }
  var AG$TriangleFace$BACK_instance;
  function AG$TriangleFace$BACK_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$BACK_instance;
  }
  var AG$TriangleFace$FRONT_AND_BACK_instance;
  function AG$TriangleFace$FRONT_AND_BACK_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$FRONT_AND_BACK_instance;
  }
  var AG$TriangleFace$NONE_instance;
  function AG$TriangleFace$NONE_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$NONE_instance;
  }
  AG$TriangleFace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TriangleFace',
    interfaces: [Enum]
  };
  function AG$TriangleFace$values() {
    return [AG$TriangleFace$FRONT_getInstance(), AG$TriangleFace$BACK_getInstance(), AG$TriangleFace$FRONT_AND_BACK_getInstance(), AG$TriangleFace$NONE_getInstance()];
  }
  AG$TriangleFace.values = AG$TriangleFace$values;
  function AG$TriangleFace$valueOf(name) {
    switch (name) {
      case 'FRONT':
        return AG$TriangleFace$FRONT_getInstance();
      case 'BACK':
        return AG$TriangleFace$BACK_getInstance();
      case 'FRONT_AND_BACK':
        return AG$TriangleFace$FRONT_AND_BACK_getInstance();
      case 'NONE':
        return AG$TriangleFace$NONE_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.TriangleFace.' + name);
    }
  }
  AG$TriangleFace.valueOf_61zpoe$ = AG$TriangleFace$valueOf;
  function AG$CompareMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$CompareMode_initFields() {
    AG$CompareMode_initFields = function () {
    };
    AG$CompareMode$ALWAYS_instance = new AG$CompareMode('ALWAYS', 0);
    AG$CompareMode$EQUAL_instance = new AG$CompareMode('EQUAL', 1);
    AG$CompareMode$GREATER_instance = new AG$CompareMode('GREATER', 2);
    AG$CompareMode$GREATER_EQUAL_instance = new AG$CompareMode('GREATER_EQUAL', 3);
    AG$CompareMode$LESS_instance = new AG$CompareMode('LESS', 4);
    AG$CompareMode$LESS_EQUAL_instance = new AG$CompareMode('LESS_EQUAL', 5);
    AG$CompareMode$NEVER_instance = new AG$CompareMode('NEVER', 6);
    AG$CompareMode$NOT_EQUAL_instance = new AG$CompareMode('NOT_EQUAL', 7);
  }
  var AG$CompareMode$ALWAYS_instance;
  function AG$CompareMode$ALWAYS_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$ALWAYS_instance;
  }
  var AG$CompareMode$EQUAL_instance;
  function AG$CompareMode$EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$EQUAL_instance;
  }
  var AG$CompareMode$GREATER_instance;
  function AG$CompareMode$GREATER_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$GREATER_instance;
  }
  var AG$CompareMode$GREATER_EQUAL_instance;
  function AG$CompareMode$GREATER_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$GREATER_EQUAL_instance;
  }
  var AG$CompareMode$LESS_instance;
  function AG$CompareMode$LESS_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$LESS_instance;
  }
  var AG$CompareMode$LESS_EQUAL_instance;
  function AG$CompareMode$LESS_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$LESS_EQUAL_instance;
  }
  var AG$CompareMode$NEVER_instance;
  function AG$CompareMode$NEVER_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$NEVER_instance;
  }
  var AG$CompareMode$NOT_EQUAL_instance;
  function AG$CompareMode$NOT_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$NOT_EQUAL_instance;
  }
  AG$CompareMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompareMode',
    interfaces: [Enum]
  };
  function AG$CompareMode$values() {
    return [AG$CompareMode$ALWAYS_getInstance(), AG$CompareMode$EQUAL_getInstance(), AG$CompareMode$GREATER_getInstance(), AG$CompareMode$GREATER_EQUAL_getInstance(), AG$CompareMode$LESS_getInstance(), AG$CompareMode$LESS_EQUAL_getInstance(), AG$CompareMode$NEVER_getInstance(), AG$CompareMode$NOT_EQUAL_getInstance()];
  }
  AG$CompareMode.values = AG$CompareMode$values;
  function AG$CompareMode$valueOf(name) {
    switch (name) {
      case 'ALWAYS':
        return AG$CompareMode$ALWAYS_getInstance();
      case 'EQUAL':
        return AG$CompareMode$EQUAL_getInstance();
      case 'GREATER':
        return AG$CompareMode$GREATER_getInstance();
      case 'GREATER_EQUAL':
        return AG$CompareMode$GREATER_EQUAL_getInstance();
      case 'LESS':
        return AG$CompareMode$LESS_getInstance();
      case 'LESS_EQUAL':
        return AG$CompareMode$LESS_EQUAL_getInstance();
      case 'NEVER':
        return AG$CompareMode$NEVER_getInstance();
      case 'NOT_EQUAL':
        return AG$CompareMode$NOT_EQUAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.CompareMode.' + name);
    }
  }
  AG$CompareMode.valueOf_61zpoe$ = AG$CompareMode$valueOf;
  function AG$ColorMaskState(red, green, blue, alpha) {
    if (red === void 0)
      red = true;
    if (green === void 0)
      green = true;
    if (blue === void 0)
      blue = true;
    if (alpha === void 0)
      alpha = true;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  AG$ColorMaskState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorMaskState',
    interfaces: []
  };
  AG$ColorMaskState.prototype.component1 = function () {
    return this.red;
  };
  AG$ColorMaskState.prototype.component2 = function () {
    return this.green;
  };
  AG$ColorMaskState.prototype.component3 = function () {
    return this.blue;
  };
  AG$ColorMaskState.prototype.component4 = function () {
    return this.alpha;
  };
  AG$ColorMaskState.prototype.copy_nyyhg$ = function (red, green, blue, alpha) {
    return new AG$ColorMaskState(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  AG$ColorMaskState.prototype.toString = function () {
    return 'ColorMaskState(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  AG$ColorMaskState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  AG$ColorMaskState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function AG$FrontFace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$FrontFace_initFields() {
    AG$FrontFace_initFields = function () {
    };
    AG$FrontFace$BOTH_instance = new AG$FrontFace('BOTH', 0);
    AG$FrontFace$CW_instance = new AG$FrontFace('CW', 1);
    AG$FrontFace$CCW_instance = new AG$FrontFace('CCW', 2);
  }
  var AG$FrontFace$BOTH_instance;
  function AG$FrontFace$BOTH_getInstance() {
    AG$FrontFace_initFields();
    return AG$FrontFace$BOTH_instance;
  }
  var AG$FrontFace$CW_instance;
  function AG$FrontFace$CW_getInstance() {
    AG$FrontFace_initFields();
    return AG$FrontFace$CW_instance;
  }
  var AG$FrontFace$CCW_instance;
  function AG$FrontFace$CCW_getInstance() {
    AG$FrontFace_initFields();
    return AG$FrontFace$CCW_instance;
  }
  AG$FrontFace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrontFace',
    interfaces: [Enum]
  };
  function AG$FrontFace$values() {
    return [AG$FrontFace$BOTH_getInstance(), AG$FrontFace$CW_getInstance(), AG$FrontFace$CCW_getInstance()];
  }
  AG$FrontFace.values = AG$FrontFace$values;
  function AG$FrontFace$valueOf(name) {
    switch (name) {
      case 'BOTH':
        return AG$FrontFace$BOTH_getInstance();
      case 'CW':
        return AG$FrontFace$CW_getInstance();
      case 'CCW':
        return AG$FrontFace$CCW_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.FrontFace.' + name);
    }
  }
  AG$FrontFace.valueOf_61zpoe$ = AG$FrontFace$valueOf;
  function AG$RenderState(depthFunc, depthMask, depthNear, depthFar, lineWidth, frontFace) {
    if (depthFunc === void 0)
      depthFunc = AG$CompareMode$ALWAYS_getInstance();
    if (depthMask === void 0)
      depthMask = true;
    if (depthNear === void 0)
      depthNear = 0.0;
    if (depthFar === void 0)
      depthFar = 1.0;
    if (lineWidth === void 0)
      lineWidth = 1.0;
    if (frontFace === void 0)
      frontFace = AG$FrontFace$BOTH_getInstance();
    this.depthFunc = depthFunc;
    this.depthMask = depthMask;
    this.depthNear = depthNear;
    this.depthFar = depthFar;
    this.lineWidth = lineWidth;
    this.frontFace = frontFace;
  }
  AG$RenderState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderState',
    interfaces: []
  };
  AG$RenderState.prototype.component1 = function () {
    return this.depthFunc;
  };
  AG$RenderState.prototype.component2 = function () {
    return this.depthMask;
  };
  AG$RenderState.prototype.component3 = function () {
    return this.depthNear;
  };
  AG$RenderState.prototype.component4 = function () {
    return this.depthFar;
  };
  AG$RenderState.prototype.component5 = function () {
    return this.lineWidth;
  };
  AG$RenderState.prototype.component6 = function () {
    return this.frontFace;
  };
  AG$RenderState.prototype.copy_ud12ca$ = function (depthFunc, depthMask, depthNear, depthFar, lineWidth, frontFace) {
    return new AG$RenderState(depthFunc === void 0 ? this.depthFunc : depthFunc, depthMask === void 0 ? this.depthMask : depthMask, depthNear === void 0 ? this.depthNear : depthNear, depthFar === void 0 ? this.depthFar : depthFar, lineWidth === void 0 ? this.lineWidth : lineWidth, frontFace === void 0 ? this.frontFace : frontFace);
  };
  AG$RenderState.prototype.toString = function () {
    return 'RenderState(depthFunc=' + Kotlin.toString(this.depthFunc) + (', depthMask=' + Kotlin.toString(this.depthMask)) + (', depthNear=' + Kotlin.toString(this.depthNear)) + (', depthFar=' + Kotlin.toString(this.depthFar)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + (', frontFace=' + Kotlin.toString(this.frontFace)) + ')';
  };
  AG$RenderState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depthFunc) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthMask) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthNear) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthFar) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.frontFace) | 0;
    return result;
  };
  AG$RenderState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depthFunc, other.depthFunc) && Kotlin.equals(this.depthMask, other.depthMask) && Kotlin.equals(this.depthNear, other.depthNear) && Kotlin.equals(this.depthFar, other.depthFar) && Kotlin.equals(this.lineWidth, other.lineWidth) && Kotlin.equals(this.frontFace, other.frontFace)))));
  };
  function AG$StencilState(enabled, triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail, referenceValue, readMask, writeMask) {
    if (enabled === void 0)
      enabled = false;
    if (triangleFace === void 0)
      triangleFace = AG$TriangleFace$FRONT_AND_BACK_getInstance();
    if (compareMode === void 0)
      compareMode = AG$CompareMode$ALWAYS_getInstance();
    if (actionOnBothPass === void 0)
      actionOnBothPass = AG$StencilOp$KEEP_getInstance();
    if (actionOnDepthFail === void 0)
      actionOnDepthFail = AG$StencilOp$KEEP_getInstance();
    if (actionOnDepthPassStencilFail === void 0)
      actionOnDepthPassStencilFail = AG$StencilOp$KEEP_getInstance();
    if (referenceValue === void 0)
      referenceValue = 0;
    if (readMask === void 0)
      readMask = 255;
    if (writeMask === void 0)
      writeMask = 255;
    this.enabled = enabled;
    this.triangleFace = triangleFace;
    this.compareMode = compareMode;
    this.actionOnBothPass = actionOnBothPass;
    this.actionOnDepthFail = actionOnDepthFail;
    this.actionOnDepthPassStencilFail = actionOnDepthPassStencilFail;
    this.referenceValue = referenceValue;
    this.readMask = readMask;
    this.writeMask = writeMask;
  }
  AG$StencilState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StencilState',
    interfaces: []
  };
  AG$StencilState.prototype.component1 = function () {
    return this.enabled;
  };
  AG$StencilState.prototype.component2 = function () {
    return this.triangleFace;
  };
  AG$StencilState.prototype.component3 = function () {
    return this.compareMode;
  };
  AG$StencilState.prototype.component4 = function () {
    return this.actionOnBothPass;
  };
  AG$StencilState.prototype.component5 = function () {
    return this.actionOnDepthFail;
  };
  AG$StencilState.prototype.component6 = function () {
    return this.actionOnDepthPassStencilFail;
  };
  AG$StencilState.prototype.component7 = function () {
    return this.referenceValue;
  };
  AG$StencilState.prototype.component8 = function () {
    return this.readMask;
  };
  AG$StencilState.prototype.component9 = function () {
    return this.writeMask;
  };
  AG$StencilState.prototype.copy_7kk0z5$ = function (enabled, triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail, referenceValue, readMask, writeMask) {
    return new AG$StencilState(enabled === void 0 ? this.enabled : enabled, triangleFace === void 0 ? this.triangleFace : triangleFace, compareMode === void 0 ? this.compareMode : compareMode, actionOnBothPass === void 0 ? this.actionOnBothPass : actionOnBothPass, actionOnDepthFail === void 0 ? this.actionOnDepthFail : actionOnDepthFail, actionOnDepthPassStencilFail === void 0 ? this.actionOnDepthPassStencilFail : actionOnDepthPassStencilFail, referenceValue === void 0 ? this.referenceValue : referenceValue, readMask === void 0 ? this.readMask : readMask, writeMask === void 0 ? this.writeMask : writeMask);
  };
  AG$StencilState.prototype.toString = function () {
    return 'StencilState(enabled=' + Kotlin.toString(this.enabled) + (', triangleFace=' + Kotlin.toString(this.triangleFace)) + (', compareMode=' + Kotlin.toString(this.compareMode)) + (', actionOnBothPass=' + Kotlin.toString(this.actionOnBothPass)) + (', actionOnDepthFail=' + Kotlin.toString(this.actionOnDepthFail)) + (', actionOnDepthPassStencilFail=' + Kotlin.toString(this.actionOnDepthPassStencilFail)) + (', referenceValue=' + Kotlin.toString(this.referenceValue)) + (', readMask=' + Kotlin.toString(this.readMask)) + (', writeMask=' + Kotlin.toString(this.writeMask)) + ')';
  };
  AG$StencilState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.enabled) | 0;
    result = result * 31 + Kotlin.hashCode(this.triangleFace) | 0;
    result = result * 31 + Kotlin.hashCode(this.compareMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnBothPass) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnDepthFail) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnDepthPassStencilFail) | 0;
    result = result * 31 + Kotlin.hashCode(this.referenceValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.readMask) | 0;
    result = result * 31 + Kotlin.hashCode(this.writeMask) | 0;
    return result;
  };
  AG$StencilState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.enabled, other.enabled) && Kotlin.equals(this.triangleFace, other.triangleFace) && Kotlin.equals(this.compareMode, other.compareMode) && Kotlin.equals(this.actionOnBothPass, other.actionOnBothPass) && Kotlin.equals(this.actionOnDepthFail, other.actionOnDepthFail) && Kotlin.equals(this.actionOnDepthPassStencilFail, other.actionOnDepthPassStencilFail) && Kotlin.equals(this.referenceValue, other.referenceValue) && Kotlin.equals(this.readMask, other.readMask) && Kotlin.equals(this.writeMask, other.writeMask)))));
  };
  AG.prototype.draw_gb6ti8$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, scissor) {
    if (indices === void 0)
      indices = null;
    if (offset === void 0)
      offset = 0;
    if (blending === void 0)
      blending = AG$Blending$Companion_getInstance().NORMAL;
    if (uniforms === void 0)
      uniforms = AG$UniformValues$Companion_getInstance().EMPTY_8be2vx$;
    if (stencil === void 0)
      stencil = this.dummyStencilState_6gllmd$_0;
    if (colorMask === void 0)
      colorMask = this.dummyColorMaskState_s1o3tk$_0;
    if (scissor === void 0)
      scissor = null;
    this.draw_36194n$(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, this.dummyRenderState_xrscgh$_0, scissor);
  };
  AG.prototype.draw_36194n$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
  };
  AG.prototype.draw_36194n$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor, callback$default) {
    if (indices === void 0)
      indices = null;
    if (offset === void 0)
      offset = 0;
    if (blending === void 0)
      blending = AG$Blending$Companion_getInstance().NORMAL;
    if (uniforms === void 0)
      uniforms = AG$UniformValues$Companion_getInstance().EMPTY_8be2vx$;
    if (stencil === void 0)
      stencil = this.dummyStencilState_6gllmd$_0;
    if (colorMask === void 0)
      colorMask = this.dummyColorMaskState_s1o3tk$_0;
    if (renderState === void 0)
      renderState = this.dummyRenderState_xrscgh$_0;
    if (scissor === void 0)
      scissor = null;
    callback$default ? callback$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) : this.draw_36194n$$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor);
  };
  AG.prototype.checkBuffers_p517yr$ = function (vertices, indices) {
    if (vertices.kind !== AG$Buffer$Kind$VERTEX_getInstance())
      invalidOp('Not a VertexBuffer');
    if (indices != null && indices.kind !== AG$Buffer$Kind$INDEX_getInstance())
      invalidOp('Not a IndexBuffer');
  };
  AG.prototype.disposeTemporalPerFrameStuff = function () {
  };
  function AG$BaseRenderBuffer() {
  }
  AG$BaseRenderBuffer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseRenderBuffer',
    interfaces: []
  };
  function AG$RenderBuffer($outer) {
    this.$outer = $outer;
    this.id_9ezup$_0 = -1;
    this.cachedTexVersion_5oiwyh$_0 = -1;
    this._tex_wlye6q$_0 = null;
    this.width_ro1y9g$_0 = 0;
    this.height_3jy0zx$_0 = 0;
    this.dirty = false;
  }
  Object.defineProperty(AG$RenderBuffer.prototype, 'id', {
    get: function () {
      return this.id_9ezup$_0;
    }
  });
  Object.defineProperty(AG$RenderBuffer.prototype, 'tex', {
    get: function () {
      if (this.cachedTexVersion_5oiwyh$_0 !== this.$outer.contextVersion) {
        this.cachedTexVersion_5oiwyh$_0 = this.$outer.contextVersion;
        var $receiver = this.$outer.createTexture_6taknv$(true).manualUpload();
        $receiver.isFbo = true;
        this._tex_wlye6q$_0 = $receiver;
      }
      return ensureNotNull(this._tex_wlye6q$_0);
    }
  });
  Object.defineProperty(AG$RenderBuffer.prototype, 'width', {
    get: function () {
      return this.width_ro1y9g$_0;
    },
    set: function (width) {
      this.width_ro1y9g$_0 = width;
    }
  });
  Object.defineProperty(AG$RenderBuffer.prototype, 'height', {
    get: function () {
      return this.height_3jy0zx$_0;
    },
    set: function (height) {
      this.height_3jy0zx$_0 = height;
    }
  });
  AG$RenderBuffer.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
    this.dirty = true;
  };
  AG$RenderBuffer.prototype.set = function () {
  };
  AG$RenderBuffer.prototype.readBitmap_59u9qz$ = function (bmp) {
    this.$outer.readColor_59u9qz$(bmp);
  };
  AG$RenderBuffer.prototype.readDepth_l5lmba$ = function (width, height, out) {
    this.$outer.readDepth_l5lmba$(width, height, out);
  };
  AG$RenderBuffer.prototype.close = function () {
  };
  AG$RenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderBuffer',
    interfaces: [AG$BaseRenderBuffer, Closeable]
  };
  AG.prototype.createRenderBuffer = function () {
    return new AG$RenderBuffer(this);
  };
  AG.prototype.flip = function () {
    this.disposeTemporalPerFrameStuff();
    this.renderBuffers.free_p1ys8y$(this.frameRenderBuffers);
    if (!this.frameRenderBuffers.isEmpty())
      this.frameRenderBuffers.clear();
    this.flipInternal();
  };
  AG.prototype.flipInternal = function () {
  };
  AG.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
  };
  AG.prototype.clear_yvqa77$ = function (color_0, depth, stencil, clearColor, clearDepth, clearStencil, callback$default) {
    if (color_0 === void 0)
      color_0 = color.Colors.TRANSPARENT_BLACK;
    if (depth === void 0)
      depth = 1.0;
    if (stencil === void 0)
      stencil = 0;
    if (clearColor === void 0)
      clearColor = true;
    if (clearDepth === void 0)
      clearDepth = true;
    if (clearStencil === void 0)
      clearStencil = true;
    callback$default ? callback$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil) : this.clear_yvqa77$$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil);
  };
  Object.defineProperty(AG.prototype, 'renderingToTexture', {
    get: function () {
      return this.currentRenderBuffer !== this.mainRenderBuffer;
    }
  });
  AG.prototype.backupTexture_yyos6h$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korag.AG.backupTexture_yyos6h$', function (tex, callback) {
    if (tex != null) {
      this.readColorTexture_l6jlr1$(tex, this.backWidth, this.backHeight);
    }
    try {
      callback();
    }
    finally {
      if (tex != null)
        this.drawTexture_iljvab$(tex);
    }
  });
  AG.prototype.setRenderBufferTemporally_846is4$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korag.AG.setRenderBufferTemporally_846is4$', function (rb, callback) {
    var old = this.setRenderBuffer_m67x29$(rb);
    try {
      callback();
    }
    finally {
      this.setRenderBuffer_m67x29$(old);
    }
  });
  AG.prototype.renderToTexture_kwdgib$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korag.AG.renderToTexture_kwdgib$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var color = _.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
    function AG$renderToTexture$lambda(it) {
      return Unit;
    }
    return function (width, height, render, use) {
      if (use === void 0)
        use = AG$renderToTexture$lambda;
      var rb = this.renderBuffers.alloc();
      this.frameRenderBuffers.add_11rb$(rb);
      var oldRenderBuffer = this.currentRenderBuffer;
      rb.setSize_vux9f0$(width, height);
      this.setRenderBuffer_m67x29$(rb);
      try {
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        render();
      }
      finally {
        this.setRenderBuffer_m67x29$(oldRenderBuffer);
      }
      try {
        use(rb.tex);
      }
      finally {
        this.frameRenderBuffers.remove_11rb$(rb);
        this.renderBuffers.free_11rb$(rb);
      }
    };
  }));
  AG.prototype.setRenderBuffer_m67x29$ = function (renderBuffer) {
    var old = this.currentRenderBuffer;
    this.currentRenderBuffer = renderBuffer;
    renderBuffer.set();
    return old;
  };
  AG.prototype.setBackBuffer_vux9f0$ = function (width, height) {
  };
  AG.prototype.renderToBitmap_1xki6w$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korag.AG.renderToBitmap_1xki6w$', wrapFunction(function () {
    var color = _.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
    return function (bmp, render) {
      var width = bmp.width;
      var height = bmp.height;
      var rb = this.renderBuffers.alloc();
      this.frameRenderBuffers.add_11rb$(rb);
      var oldRenderBuffer = this.currentRenderBuffer;
      rb.setSize_vux9f0$(width, height);
      this.setRenderBuffer_m67x29$(rb);
      try {
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        render();
        this.readColor_59u9qz$(bmp);
      }
      finally {
        this.setRenderBuffer_m67x29$(oldRenderBuffer);
      }
      try {
        rb.tex;
      }
      finally {
        this.frameRenderBuffers.remove_11rb$(rb);
        this.renderBuffers.free_11rb$(rb);
      }
    };
  }));
  AG.prototype.readColor_59u9qz$ = function (bitmap) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readDepth_l5lmba$ = function (width, height, out) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readDepth_say4ff$ = function (out) {
    this.readDepth_l5lmba$(out.width, out.height, out.data);
  };
  AG.prototype.readColorTexture_l6jlr1$$default = function (texture, width, height) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readColorTexture_l6jlr1$ = function (texture, width, height, callback$default) {
    if (width === void 0)
      width = this.backWidth;
    if (height === void 0)
      height = this.backHeight;
    callback$default ? callback$default(texture, width, height) : this.readColorTexture_l6jlr1$$default(texture, width, height);
  };
  AG.prototype.readColor = function () {
    var $receiver = new Bitmap32(this.backWidth, this.backHeight);
    this.readColor_59u9qz$($receiver);
    return $receiver;
  };
  AG.prototype.readDepth = function () {
    var width = this.backWidth;
    var height = this.backHeight;
    var tmp$;
    var array = new Float32Array(Kotlin.imul(width, height));
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = 0.0;
    }
    var $receiver = new FloatArray2(width, height, Kotlin.isFloatArray(tmp$ = array) ? tmp$ : throwCCE());
    this.readDepth_say4ff$($receiver);
    return $receiver;
  };
  function AG$TextureDrawer($outer) {
    this.$outer = $outer;
    this.VERTEX_COUNT = 4;
    this.vertices = this.$outer.createBuffer_g6fstm$(AG$Buffer$Kind$VERTEX_getInstance());
    this.vertexLayout = VertexLayout_init_0([DefaultShaders_getInstance().a_Pos, DefaultShaders_getInstance().a_Tex]);
    this.verticesData = FBuffer.Companion.invoke_za3lpa$(Kotlin.imul(this.VERTEX_COUNT, this.vertexLayout.totalSize));
    this.program = new Program(VertexShader_0(AG$TextureDrawer$program$lambda), FragmentShader_0(AG$TextureDrawer$program$lambda_0));
    this.uniforms = new AG$UniformValues();
  }
  AG$TextureDrawer.prototype.setVertex_xpxj32$ = function (n, px, py, tx, ty) {
    var offset = n * 4 | 0;
    this.verticesData.setAlignedFloat32_24o109$(offset + 0 | 0, px);
    this.verticesData.setAlignedFloat32_24o109$(offset + 1 | 0, py);
    this.verticesData.setAlignedFloat32_24o109$(offset + 2 | 0, tx);
    this.verticesData.setAlignedFloat32_24o109$(offset + 3 | 0, ty);
  };
  AG$TextureDrawer.prototype.draw_yd8599$ = function (tex, left, top, right, bottom) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.uniforms.set_8gg9u8$(DefaultShaders_getInstance().u_Tex, new AG$TextureUnit(tex));
    var texLeft = -1.0;
    var texRight = +1.0;
    var texTop = -1.0;
    var texBottom = +1.0;
    this.setVertex_xpxj32$(0, left, top, texLeft, texTop);
    this.setVertex_xpxj32$(1, right, top, texRight, texTop);
    this.setVertex_xpxj32$(2, left, bottom, texLeft, texBottom);
    this.setVertex_xpxj32$(3, right, bottom, texRight, texBottom);
    this.vertices.upload_khrw8o$(this.verticesData);
    tmp$ = this.vertices;
    tmp$_0 = this.program;
    tmp$_1 = AG$DrawType$TRIANGLE_STRIP_getInstance();
    tmp$_2 = this.vertexLayout;
    tmp$_3 = this.uniforms;
    tmp$_4 = AG$Blending$Companion_getInstance().NONE;
    this.$outer.draw_gb6ti8$(tmp$, tmp$_0, tmp$_1, tmp$_2, 4, void 0, void 0, tmp$_4, tmp$_3);
  };
  function AG$TextureDrawer$program$lambda($receiver) {
    var $receiver_0 = DefaultShaders_getInstance();
    $receiver.setTo_2oogdr$($receiver_0.v_Tex, $receiver_0.a_Tex);
    $receiver.setTo_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver_0.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function AG$TextureDrawer$program$lambda_0($receiver) {
    var $receiver_0 = DefaultShaders_getInstance();
    $receiver.setTo_2oogdr$($receiver.out, $receiver.texture2D_q0hzsk$($receiver_0.u_Tex, $receiver.get_hhgt4v$($receiver_0.v_Tex, 'xy')));
    return Unit;
  }
  AG$TextureDrawer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureDrawer',
    interfaces: []
  };
  Object.defineProperty(AG.prototype, 'textureDrawer', {
    get: function () {
      return this.textureDrawer_p4bz2y$_0.value;
    }
  });
  AG.prototype.drawTexture_iljvab$ = function (tex) {
    this.textureDrawer.draw_yd8599$(tex, -1.0, +1.0, +1.0, -1.0);
  };
  Object.defineProperty(AG.prototype, 'drawTempTexture_npdcj3$_0', {
    get: function () {
      return this.drawTempTexture_npdcj3$_g2cado$_0.value;
    }
  });
  AG.prototype.drawBitmap_uler2c$ = function (bmp) {
    this.drawTempTexture_npdcj3$_0.upload_nn58bg$(bmp, false);
    this.drawTexture_iljvab$(this.drawTempTexture_npdcj3$_0);
    this.drawTempTexture_npdcj3$_0.upload_2ug3a3$(bitmap.Bitmaps.transparent);
  };
  function AG$UniformValues() {
    AG$UniformValues$Companion_getInstance();
    this._uniforms_0 = ArrayList_init();
    this._values_0 = ArrayList_init();
    var tmp$, tmp$_0;
    this.uniforms = Kotlin.isType(tmp$ = this._uniforms_0, List) ? tmp$ : throwCCE();
    this.values = Kotlin.isType(tmp$_0 = this._values_0, List) ? tmp$_0 : throwCCE();
  }
  function AG$UniformValues$Companion() {
    AG$UniformValues$Companion_instance = this;
    this.EMPTY_8be2vx$ = new AG$UniformValues();
  }
  AG$UniformValues$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$UniformValues$Companion_instance = null;
  function AG$UniformValues$Companion_getInstance() {
    if (AG$UniformValues$Companion_instance === null) {
      new AG$UniformValues$Companion();
    }
    return AG$UniformValues$Companion_instance;
  }
  Object.defineProperty(AG$UniformValues.prototype, 'keys', {
    get: function () {
      return this.uniforms;
    }
  });
  Object.defineProperty(AG$UniformValues.prototype, 'size', {
    get: function () {
      return this._uniforms_0.size;
    }
  });
  AG$UniformValues.prototype.clear = function () {
    this._uniforms_0.clear();
    this._values_0.clear();
  };
  AG$UniformValues.prototype.get_2f4vi3$ = function (uniform) {
    var tmp$;
    tmp$ = this._uniforms_0.size;
    for (var n = 0; n < tmp$; n++) {
      if (equals(this._uniforms_0.get_za3lpa$(n).name, uniform.name))
        return this._values_0.get_za3lpa$(n);
    }
    return null;
  };
  AG$UniformValues.prototype.set_8gg9u8$ = function (uniform, value) {
    this.put_8gg9u8$(uniform, value);
  };
  AG$UniformValues.prototype.putOrRemove_lyfqxb$ = function (uniform, value) {
    if (value == null) {
      this.remove_2f4vi3$(uniform);
    }
     else {
      this.put_8gg9u8$(uniform, value);
    }
  };
  AG$UniformValues.prototype.put_8gg9u8$ = function (uniform, value) {
    var tmp$;
    tmp$ = this._uniforms_0.size;
    for (var n = 0; n < tmp$; n++) {
      if (equals(this._uniforms_0.get_za3lpa$(n).name, uniform.name)) {
        this._values_0.set_wxm5ur$(n, value);
        return;
      }
    }
    this._uniforms_0.add_11rb$(uniform);
    this._values_0.add_11rb$(value);
  };
  AG$UniformValues.prototype.remove_2f4vi3$ = function (uniform) {
    var tmp$;
    tmp$ = this._uniforms_0.size;
    for (var n = 0; n < tmp$; n++) {
      if (equals(this._uniforms_0.get_za3lpa$(n).name, uniform.name)) {
        this._uniforms_0.removeAt_za3lpa$(n);
        this._values_0.removeAt_za3lpa$(n);
        return;
      }
    }
  };
  AG$UniformValues.prototype.put_huk8u$ = function (uniforms) {
    var tmp$;
    tmp$ = uniforms.size;
    for (var n = 0; n < tmp$; n++) {
      this.put_8gg9u8$(uniforms._uniforms_0.get_za3lpa$(n), uniforms._values_0.get_za3lpa$(n));
    }
  };
  AG$UniformValues.prototype.setTo_huk8u$ = function (uniforms) {
    this.clear();
    this.put_huk8u$(uniforms);
  };
  AG$UniformValues.prototype.toString = function () {
    var $receiver = zip(this.keys, this.values);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.first.toString() + '=' + item.second.toString());
    }
    return '{' + joinToString(destination, ', ') + '}';
  };
  AG$UniformValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformValues',
    interfaces: []
  };
  function AG$AG$UniformValues_init(pairs, $this) {
    $this = $this || Object.create(AG$UniformValues.prototype);
    AG$UniformValues.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var pair = pairs[tmp$];
      $this.put_8gg9u8$(pair.first, pair.second);
    }
    return $this;
  }
  Object.defineProperty(AG.prototype, 'extra', {
    get: function () {
      return this.$delegate_y4f8iy$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_y4f8iy$_0.extra = tmp$;
    }
  });
  function AG$dummyTexture$lambda(this$AG) {
    return function () {
      return this$AG.createTexture();
    };
  }
  function AG$renderBuffers$lambda(this$AG) {
    return function (it) {
      return this$AG.createRenderBuffer();
    };
  }
  function AG$mainRenderBuffer$ObjectLiteral(this$AG) {
    this.this$AG = this$AG;
    this.width_z7cjf6$_0 = 128;
    this.height_gyu105$_0 = 128;
  }
  Object.defineProperty(AG$mainRenderBuffer$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_z7cjf6$_0;
    },
    set: function (width) {
      this.width_z7cjf6$_0 = width;
    }
  });
  Object.defineProperty(AG$mainRenderBuffer$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_gyu105$_0;
    },
    set: function (height) {
      this.height_gyu105$_0 = height;
    }
  });
  AG$mainRenderBuffer$ObjectLiteral.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
  };
  AG$mainRenderBuffer$ObjectLiteral.prototype.set = function () {
    this.this$AG.setBackBuffer_vux9f0$(this.width, this.height);
  };
  AG$mainRenderBuffer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AG$BaseRenderBuffer]
  };
  function AG$textureDrawer$lambda(this$AG) {
    return function () {
      return new AG$TextureDrawer(this$AG);
    };
  }
  function AG$drawTempTexture$lambda(this$AG) {
    return function () {
      return this$AG.createTexture();
    };
  }
  AG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AG',
    interfaces: [Extra]
  };
  function toRenderFboIntoBack($receiver) {
    return $receiver;
  }
  function toRenderImageIntoFbo($receiver) {
    return $receiver;
  }
  function ProgramWithDefault(vertex, fragment, name) {
    if (vertex === void 0)
      vertex = DefaultShaders_getInstance().VERTEX_DEFAULT;
    if (fragment === void 0)
      fragment = DefaultShaders_getInstance().FRAGMENT_SOLID_COLOR;
    if (name === void 0)
      name = 'program';
    return new Program(vertex, fragment, name);
  }
  function DefaultShaders() {
    DefaultShaders_instance = this;
    this.u_Tex = Uniform_init('u_Tex', VarType$TextureUnit_getInstance());
    this.u_ProjMat = Uniform_init('u_ProjMat', VarType$Mat4_getInstance());
    this.u_ViewMat = Uniform_init('u_ViewMat', VarType$Mat4_getInstance());
    this.a_Pos = Attribute_init('a_Pos', VarType$Float2_getInstance(), false);
    this.a_Tex = Attribute_init('a_Tex', VarType$Float2_getInstance(), false);
    this.a_Col = Attribute_init('a_Col', VarType$Byte4_getInstance(), true);
    this.v_Tex = Varying_init('v_Tex', VarType$Float2_getInstance());
    this.v_Col = Varying_init('v_Col', VarType$Byte4_getInstance());
    this.t_Temp0 = Temp_init(0, VarType$Float4_getInstance());
    this.t_Temp1 = Temp_init(1, VarType$Float4_getInstance());
    this.textureUnit = new AG$TextureUnit();
    this.FORMAT_DEFAULT = VertexLayout_init_0([this.a_Pos, this.a_Tex, this.a_Col]);
    this.LAYOUT_DEFAULT = VertexLayout_init_0([this.a_Pos, this.a_Tex, this.a_Col]);
    this.VERTEX_DEFAULT = VertexShader_0(DefaultShaders$VERTEX_DEFAULT$lambda(this));
    this.FRAGMENT_DEBUG = FragmentShader_0(DefaultShaders$FRAGMENT_DEBUG$lambda);
    this.FRAGMENT_SOLID_COLOR = FragmentShader_0(DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this));
    this.PROGRAM_TINTED_TEXTURE = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_TINTED_TEXTURE_PREMULT = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_SOLID_COLOR = new Program(this.VERTEX_DEFAULT, this.FRAGMENT_SOLID_COLOR, 'PROGRAM_SOLID_COLOR');
    this.FORMAT_DEBUG = VertexLayout_init_0([this.a_Pos]);
    this.LAYOUT_DEBUG = VertexLayout_init_0([this.a_Pos]);
    this.PROGRAM_DEBUG = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG$lambda_0), 'PROGRAM_DEBUG');
    this.PROGRAM_DEBUG_WITH_PROJ = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0), 'PROGRAM_DEBUG_WITH_PROJ');
    this.PROGRAM_DEFAULT_lphlbv$_0 = lazy(DefaultShaders$PROGRAM_DEFAULT$lambda(this));
  }
  Object.defineProperty(DefaultShaders.prototype, 'PROGRAM_DEFAULT', {
    get: function () {
      return this.PROGRAM_DEFAULT_lphlbv$_0.value;
    }
  });
  DefaultShaders.prototype.invoke_jt3evg$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korag.DefaultShaders.invoke_jt3evg$', function (callback) {
    callback(this);
    return this;
  });
  function DefaultShaders$VERTEX_DEFAULT$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(this$DefaultShaders.v_Tex, this$DefaultShaders.a_Tex);
      $receiver.SET_q0hzsk$(this$DefaultShaders.v_Col, this$DefaultShaders.a_Col);
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.times_2oogdr$(this$DefaultShaders.u_ProjMat, this$DefaultShaders.u_ViewMat), $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  function DefaultShaders$FRAGMENT_DEBUG$lambda($receiver) {
    $receiver.set_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.set_2oogdr$($receiver.out, this$DefaultShaders.v_Col);
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.get_hhgt4v$($receiver.texture2D_q0hzsk$(this$DefaultShaders.u_Tex, $receiver.get_hhgt4v$(this$DefaultShaders.v_Tex, 'xy')), 'rgba'), this$DefaultShaders.v_Col));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(this$DefaultShaders.t_Temp0, $receiver.texture2D_q0hzsk$(this$DefaultShaders.u_Tex, $receiver.get_hhgt4v$(this$DefaultShaders.v_Tex, 'xy')));
      $receiver.SET_q0hzsk$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'rgb'), $receiver.div_2oogdr$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'rgb'), $receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'a')));
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'rgba'), this$DefaultShaders.v_Col));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG$lambda_0($receiver) {
    $receiver.set_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$(this$DefaultShaders.u_ProjMat, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0($receiver) {
    $receiver.SET_q0hzsk$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$PROGRAM_DEFAULT$lambda(this$DefaultShaders) {
    return function () {
      return this$DefaultShaders.PROGRAM_TINTED_TEXTURE_PREMULT;
    };
  }
  DefaultShaders.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultShaders',
    interfaces: []
  };
  var DefaultShaders_instance = null;
  function DefaultShaders_getInstance() {
    if (DefaultShaders_instance === null) {
      new DefaultShaders();
    }
    return DefaultShaders_instance;
  }
  function AGOpengl() {
    AG.call(this);
    this.isGlAvailable_1m52nr$_0 = true;
    this.glSlVersion_f4ywl3$_0 = null;
    this.gles_hpf8g2$_0 = false;
    this.webgl_qtlfii$_0 = false;
    this.devicePixelRatio_n8znee$_0 = 1.0;
    this.lastRenderContextId = 0;
    this.TEMP_MAX_MATRICES_hwkk65$_0 = 1024;
    this.tempBuffer1 = FBuffer.Companion.invoke_za3lpa$(4);
    this.tempBuffer = FBuffer.Companion.invoke_za3lpa$(64 * this.TEMP_MAX_MATRICES_hwkk65$_0 | 0);
    this.tempBufferM2 = FBuffer.Companion.invoke_za3lpa$(16);
    this.tempBufferM3 = FBuffer.Companion.invoke_za3lpa$(36);
    this.tempBufferM4 = FBuffer.Companion.invoke_za3lpa$(64);
    this.tempF32 = this.tempBuffer.arrayFloat;
    this.tempFloats_kzvmdi$_0 = new Float32Array(16 * this.TEMP_MAX_MATRICES_hwkk65$_0 | 0);
    this.mat3dArray_qu1n07$_0 = [new Matrix3D()];
    this.programs_nsjc6a$_0 = HashMap_init();
  }
  Object.defineProperty(AGOpengl.prototype, 'isGlAvailable', {
    get: function () {
      return this.isGlAvailable_1m52nr$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'glSlVersion', {
    get: function () {
      return this.glSlVersion_f4ywl3$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'gles', {
    get: function () {
      return this.gles_hpf8g2$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'webgl', {
    get: function () {
      return this.webgl_qtlfii$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'devicePixelRatio', {
    get: function () {
      return this.devicePixelRatio_n8znee$_0;
    },
    set: function (devicePixelRatio) {
      this.devicePixelRatio_n8znee$_0 = devicePixelRatio;
    }
  });
  AGOpengl.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AGOpengl$GlBuffer(this, kind);
  };
  AGOpengl.prototype.setViewport_tjonv8$ = function (x, y, width, height) {
    AG.prototype.setViewport_tjonv8$.call(this, x, y, width, height);
    if (this.isGlAvailable) {
      this.gl.viewport_tjonv8$(x, y, width, height);
    }
  };
  AGOpengl.prototype.setSwapInterval_za3lpa$ = function (value) {
  };
  AGOpengl.prototype.setBackBuffer_vux9f0$ = function (width, height) {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, 0);
    this.gl.bindRenderbuffer_vux9f0$(this.gl.RENDERBUFFER, 0);
    this.gl.bindFramebuffer_vux9f0$(this.gl.FRAMEBUFFER, 0);
    this.setViewport_tjonv8$(0, 0, width, height);
  };
  function AGOpengl$GlRenderBuffer($outer) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.cachedVersion = -1;
    var tmp$;
    this.id_4ayp91$_0 = (tmp$ = this.$outer.lastRenderContextId, this.$outer.lastRenderContextId = tmp$ + 1 | 0, tmp$);
    this.depth = FBuffer.Companion.invoke_za3lpa$(4);
    this.framebuffer = FBuffer.Companion.invoke_za3lpa$(4);
  }
  Object.defineProperty(AGOpengl$GlRenderBuffer.prototype, 'id', {
    get: function () {
      return this.id_4ayp91$_0;
    }
  });
  Object.defineProperty(AGOpengl$GlRenderBuffer.prototype, 'ftex', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.tex, AGOpengl$GlTexture) ? tmp$ : throwCCE();
    }
  });
  AGOpengl$GlRenderBuffer.prototype.set = function () {
    var $receiver = this.$outer.gl;
    this.$outer;
    var this$AGOpengl = this.$outer;
    if (this.dirty) {
      this.dirty = false;
      this$AGOpengl.setSwapInterval_za3lpa$(0);
      if (this.cachedVersion !== this$AGOpengl.contextVersion) {
        this.cachedVersion = this$AGOpengl.contextVersion;
        $receiver.genRenderbuffers_26fqmq$(1, this.depth);
        $receiver.genFramebuffers_26fqmq$(1, this.framebuffer);
      }
      $receiver.bindTexture_vux9f0$($receiver.TEXTURE_2D, this.ftex.tex);
      $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MAG_FILTER, $receiver.LINEAR);
      $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MIN_FILTER, $receiver.LINEAR);
      $receiver.texImage2D_byudfd$($receiver.TEXTURE_2D, 0, $receiver.RGBA, this.width, this.height, 0, $receiver.RGBA, $receiver.UNSIGNED_BYTE, null);
      $receiver.bindTexture_vux9f0$($receiver.TEXTURE_2D, 0);
      $receiver.bindRenderbuffer_vux9f0$($receiver.RENDERBUFFER, this.depth.getInt_za3lpa$(0));
      $receiver.renderbufferStorage_tjonv8$($receiver.RENDERBUFFER, $receiver.DEPTH_COMPONENT16, this.width, this.height);
    }
    $receiver.bindFramebuffer_vux9f0$($receiver.FRAMEBUFFER, this.framebuffer.getInt_za3lpa$(0));
    $receiver.framebufferTexture2D_4qozqa$($receiver.FRAMEBUFFER, $receiver.COLOR_ATTACHMENT0, $receiver.TEXTURE_2D, this.ftex.tex, 0);
    $receiver.framebufferRenderbuffer_tjonv8$($receiver.FRAMEBUFFER, $receiver.DEPTH_ATTACHMENT, $receiver.RENDERBUFFER, this.depth.getInt_za3lpa$(0));
    this$AGOpengl.setViewport_tjonv8$(0, 0, this.width, this.height);
  };
  AGOpengl$GlRenderBuffer.prototype.close = function () {
    var $receiver = this.$outer.gl;
    $receiver.deleteFramebuffers_26fqmq$(1, this.framebuffer);
    $receiver.deleteRenderbuffers_26fqmq$(1, this.depth);
    this.framebuffer.setInt_vux9f0$(0, 0);
    this.depth.setInt_vux9f0$(0, 0);
  };
  AGOpengl$GlRenderBuffer.prototype.toString = function () {
    return 'GlRenderBuffer[' + this.id + '](' + this.width + ', ' + this.height + ')';
  };
  AGOpengl$GlRenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  AGOpengl.prototype.createRenderBuffer = function () {
    return new AGOpengl$GlRenderBuffer(this);
  };
  AGOpengl.prototype.toGl_8vgxol$_0 = function ($receiver) {
    switch ($receiver.name) {
      case 'ADD':
        return this.gl.FUNC_ADD;
      case 'SUBTRACT':
        return this.gl.FUNC_SUBTRACT;
      case 'REVERSE_SUBTRACT':
        return this.gl.FUNC_REVERSE_SUBTRACT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_yoxntk$_0 = function ($receiver) {
    switch ($receiver.name) {
      case 'DESTINATION_ALPHA':
        return this.gl.DST_ALPHA;
      case 'DESTINATION_COLOR':
        return this.gl.DST_COLOR;
      case 'ONE':
        return this.gl.ONE;
      case 'ONE_MINUS_DESTINATION_ALPHA':
        return this.gl.ONE_MINUS_DST_ALPHA;
      case 'ONE_MINUS_DESTINATION_COLOR':
        return this.gl.ONE_MINUS_DST_COLOR;
      case 'ONE_MINUS_SOURCE_ALPHA':
        return this.gl.ONE_MINUS_SRC_ALPHA;
      case 'ONE_MINUS_SOURCE_COLOR':
        return this.gl.ONE_MINUS_SRC_COLOR;
      case 'SOURCE_ALPHA':
        return this.gl.SRC_ALPHA;
      case 'SOURCE_COLOR':
        return this.gl.SRC_COLOR;
      case 'ZERO':
        return this.gl.ZERO;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_j3v1aq$ = function ($receiver) {
    switch ($receiver.name) {
      case 'FRONT':
        return this.gl.FRONT;
      case 'BACK':
        return this.gl.BACK;
      case 'FRONT_AND_BACK':
        return this.gl.FRONT_AND_BACK;
      case 'NONE':
        return this.gl.FRONT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_d0rqip$ = function ($receiver) {
    switch ($receiver.name) {
      case 'ALWAYS':
        return this.gl.ALWAYS;
      case 'EQUAL':
        return this.gl.EQUAL;
      case 'GREATER':
        return this.gl.GREATER;
      case 'GREATER_EQUAL':
        return this.gl.GEQUAL;
      case 'LESS':
        return this.gl.LESS;
      case 'LESS_EQUAL':
        return this.gl.LEQUAL;
      case 'NEVER':
        return this.gl.NEVER;
      case 'NOT_EQUAL':
        return this.gl.NOTEQUAL;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_7ptukq$ = function ($receiver) {
    switch ($receiver.name) {
      case 'DECREMENT_SATURATE':
        return this.gl.DECR;
      case 'DECREMENT_WRAP':
        return this.gl.DECR_WRAP;
      case 'INCREMENT_SATURATE':
        return this.gl.INCR;
      case 'INCREMENT_WRAP':
        return this.gl.INCR_WRAP;
      case 'INVERT':
        return this.gl.INVERT;
      case 'KEEP':
        return this.gl.KEEP;
      case 'SET':
        return this.gl.REPLACE;
      case 'ZERO':
        return this.gl.ZERO;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.draw_36194n$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var vattrs = vertexLayout.attributes;
    var vattrspos = vertexLayout.attributePositions;
    if (scissor != null) {
      this.gl.enable_za3lpa$(this.gl.SCISSOR_TEST);
      this.gl.scissor_tjonv8$(scissor.x, this.backHeight - scissor.y - scissor.height | 0, scissor.width, scissor.height);
    }
     else {
      this.gl.disable_za3lpa$(this.gl.SCISSOR_TEST);
    }
    this.checkBuffers_p517yr$(vertices, indices);
    var glProgram = this.getProgram_21rgaz$(program);
    (Kotlin.isType(tmp$ = vertices, AGOpengl$GlBuffer) ? tmp$ : throwCCE()).bind_jm7esb$(this.gl);
    (tmp$_1 = (tmp$_0 = indices) == null || Kotlin.isType(tmp$_0, AGOpengl$GlBuffer) ? tmp$_0 : null) != null ? (tmp$_1.bind_jm7esb$(this.gl), Unit) : null;
    glProgram.use();
    var totalSize = vertexLayout.totalSize;
    tmp$_2 = vattrspos.size;
    for (var n = 0; n < tmp$_2; n++) {
      var att = vattrs.get_za3lpa$(n);
      if (att.active) {
        var off = vattrspos.get_za3lpa$(n);
        var loc = glProgram.getAttribLocation_61zpoe$(att.name);
        var glElementType = this.get_glElementType_bxje6x$(att.type);
        var elementCount = att.type.elementCount;
        if (loc >= 0) {
          this.gl.enableVertexAttribArray_za3lpa$(loc);
          this.gl.vertexAttribPointer_owihk5$(loc, elementCount, glElementType, att.normalized, totalSize, off);
        }
      }
    }
    var textureUnit = 0;
    tmp$_3 = uniforms.uniforms.size;
    for (var n_0 = 0; n_0 < tmp$_3; n_0++) {
      var uniform = uniforms.uniforms.get_za3lpa$(n_0);
      var uniformName = uniform.name;
      var uniformType = uniform.type;
      var value = uniforms.values.get_za3lpa$(n_0);
      var location = this.gl.getUniformLocation_19mbxw$(glProgram.id, uniformName);
      var declArrayCount = uniform.arrayCount;
      var stride = uniform.type.elementCount;
      switch (uniformType.name) {
        case 'TextureUnit':
          var unit = Kotlin.isType(tmp$_4 = value, AG$TextureUnit) ? tmp$_4 : throwCCE();
          this.gl.activeTexture_za3lpa$(this.gl.TEXTURE0 + textureUnit | 0);
          var tex = (tmp$_5 = unit.texture) == null || Kotlin.isType(tmp$_5, AGOpengl$GlTexture) ? tmp$_5 : throwCCE();
          tex != null ? (tex.bindEnsuring(), Unit) : null;
          tex != null ? (tex.setFilter_6taknv$(unit.linear), Unit) : null;
          this.gl.uniform1i_vux9f0$(location, textureUnit);
          textureUnit = textureUnit + 1 | 0;
          break;
        case 'Mat2':
        case 'Mat3':
        case 'Mat4':
          if (Kotlin.isArray(value))
            tmp$_6 = value;
          else if (Kotlin.isType(value, Matrix3D)) {
            var $receiver = this.mat3dArray_qu1n07$_0;
            $receiver[0].copyFrom_p62hku$(value);
            tmp$_6 = $receiver;
          }
           else {
            throw IllegalStateException_init('Not an array or a matrix3d'.toString());
          }

          var matArray = Kotlin.isArray(tmp$_7 = tmp$_6) ? tmp$_7 : throwCCE();
          var arrayCount = Math_0.min(declArrayCount, matArray.length);
          switch (uniformType.name) {
            case 'Mat2':
              tmp$_8 = 2;
              break;
            case 'Mat3':
              tmp$_8 = 3;
              break;
            case 'Mat4':
              tmp$_8 = 4;
              break;
            default:tmp$_8 = -1;
              break;
          }

          var matSize = tmp$_8;
          for (var n_1 = 0; n_1 < arrayCount; n_1++) {
            copyToFloatWxH(matArray[n_1], this.tempFloats_kzvmdi$_0, matSize, matSize, MajorOrder.COLUMN, Kotlin.imul(n_1, stride));
          }

          setFloats(this.tempBuffer, 0, this.tempFloats_kzvmdi$_0, 0, Kotlin.imul(stride, arrayCount));
          if (this.webgl) {
            switch (uniformType.name) {
              case 'Mat2':
                tmp$_9 = this.tempBufferM2;
                break;
              case 'Mat3':
                tmp$_9 = this.tempBufferM3;
                break;
              case 'Mat4':
                tmp$_9 = this.tempBufferM4;
                break;
              default:tmp$_9 = this.tempBufferM4;
                break;
            }
            var tb = tmp$_9;
            for (var n_2 = 0; n_2 < arrayCount; n_2++) {
              var itLocation = arrayCount === 1 ? location : this.gl.getUniformLocation_19mbxw$(glProgram.id, uniform.indexNames[n_2]);
              arraycopy(this.tempBuffer.arrayFloat, Kotlin.imul(n_2, stride), tb.arrayFloat, 0, stride);
              switch (uniform.type.name) {
                case 'Mat2':
                  this.gl.uniformMatrix2fv_24ez2x$(itLocation, 1, false, tb);
                  break;
                case 'Mat3':
                  this.gl.uniformMatrix3fv_24ez2x$(itLocation, 1, false, tb);
                  break;
                case 'Mat4':
                  this.gl.uniformMatrix4fv_24ez2x$(itLocation, 1, false, tb);
                  break;
                default:invalidOp("Don't know how to set uniform matrix " + uniform.type);
                  break;
              }
            }
          }
           else {
            switch (uniform.type.name) {
              case 'Mat2':
                this.gl.uniformMatrix2fv_24ez2x$(location, arrayCount, false, this.tempBuffer);
                break;
              case 'Mat3':
                this.gl.uniformMatrix3fv_24ez2x$(location, arrayCount, false, this.tempBuffer);
                break;
              case 'Mat4':
                this.gl.uniformMatrix4fv_24ez2x$(location, arrayCount, false, this.tempBuffer);
                break;
              default:invalidOp("Don't know how to set uniform matrix " + uniform.type);
                break;
            }
          }

          break;
        case 'Float1':
        case 'Float2':
        case 'Float3':
        case 'Float4':
          var arrayCount_0 = declArrayCount;
          if (Kotlin.isNumber(value))
            this.tempBuffer.setAlignedFloat32_24o109$(0, numberToDouble(value));
          else if (Kotlin.isType(value, Vector3D))
            setFloats(this.tempBuffer, 0, value.data, 0, stride);
          else if (Kotlin.isFloatArray(value)) {
            var b = value.length / stride | 0;
            arrayCount_0 = Math_0.min(declArrayCount, b);
            setFloats(this.tempBuffer, 0, value, 0, Kotlin.imul(stride, arrayCount_0));
          }
           else if (Kotlin.isArray(value)) {
            arrayCount_0 = Math_0.min(declArrayCount, value.length);
            for (var n_3 = 0; n_3 < value.length; n_3++) {
              var vector = Kotlin.isType(tmp$_10 = value[n_3], Vector3D) ? tmp$_10 : throwCCE();
              setFloats(this.tempBuffer, Kotlin.imul(n_3, stride), vector.data, 0, stride);
            }
          }
           else {
            throw IllegalStateException_init(("Unknown type '" + value.toString() + "'").toString());
          }

          if (this.webgl) {
            var tb_0 = this.tempBufferM2;
            tmp$_11 = arrayCount_0;
            for (var n_4 = 0; n_4 < tmp$_11; n_4++) {
              var itLocation_0 = arrayCount_0 === 1 ? location : this.gl.getUniformLocation_19mbxw$(glProgram.id, uniform.indexNames[n_4]);
              var f32 = tb_0.arrayFloat;
              arraycopy(this.tempBuffer.arrayFloat, 0, tb_0.arrayFloat, 0, stride);
              switch (uniform.type.name) {
                case 'Float1':
                  this.gl.uniform1f_24o109$(itLocation_0, f32[0]);
                  break;
                case 'Float2':
                  this.gl.uniform2f_nhq4am$(itLocation_0, f32[0], f32[1]);
                  break;
                case 'Float3':
                  this.gl.uniform3f_eyukp3$(itLocation_0, f32[0], f32[1], f32[2]);
                  break;
                case 'Float4':
                  this.gl.uniform4f_xpxj32$(itLocation_0, f32[0], f32[1], f32[2], f32[3]);
                  break;
                default:break;
              }
            }
          }
           else {
            switch (uniform.type.name) {
              case 'Float1':
                this.gl.uniform1fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              case 'Float2':
                this.gl.uniform2fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              case 'Float3':
                this.gl.uniform3fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              case 'Float4':
                this.gl.uniform4fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              default:break;
            }
          }

          break;
        default:invalidOp("Don't know how to set uniform " + uniform.type);
          break;
      }
    }
    if (blending.enabled) {
      this.gl.enable_za3lpa$(this.gl.BLEND);
      this.gl.blendEquationSeparate_vux9f0$(this.toGl_8vgxol$_0(blending.eqRGB), this.toGl_8vgxol$_0(blending.eqA));
      this.gl.blendFuncSeparate_tjonv8$(this.toGl_yoxntk$_0(blending.srcRGB), this.toGl_yoxntk$_0(blending.dstRGB), this.toGl_yoxntk$_0(blending.srcA), this.toGl_yoxntk$_0(blending.dstA));
    }
     else {
      this.gl.disable_za3lpa$(this.gl.BLEND);
    }
    if (renderState.frontFace === AG$FrontFace$BOTH_getInstance()) {
      this.gl.disable_za3lpa$(this.gl.CULL_FACE);
    }
     else {
      this.gl.enable_za3lpa$(this.gl.CULL_FACE);
      this.gl.frontFace_za3lpa$(renderState.frontFace === AG$FrontFace$CW_getInstance() ? this.gl.CW : this.gl.CCW);
    }
    this.gl.depthMask_6taknv$(renderState.depthMask);
    this.gl.depthRangef_dleff0$(renderState.depthNear, renderState.depthFar);
    this.gl.lineWidth_mx4ult$(renderState.lineWidth);
    if (renderState.depthFunc !== AG$CompareMode$ALWAYS_getInstance()) {
      this.gl.enable_za3lpa$(this.gl.DEPTH_TEST);
      this.gl.depthFunc_za3lpa$(this.toGl_d0rqip$(renderState.depthFunc));
    }
     else {
      this.gl.disable_za3lpa$(this.gl.DEPTH_TEST);
    }
    this.gl.colorMask_nyyhg$(colorMask.red, colorMask.green, colorMask.blue, colorMask.alpha);
    if (stencil.enabled) {
      this.gl.enable_za3lpa$(this.gl.STENCIL_TEST);
      this.gl.stencilFunc_qt1dr2$(this.toGl_d0rqip$(stencil.compareMode), stencil.referenceValue, stencil.readMask);
      this.gl.stencilOp_qt1dr2$(this.toGl_7ptukq$(stencil.actionOnDepthFail), this.toGl_7ptukq$(stencil.actionOnDepthPassStencilFail), this.toGl_7ptukq$(stencil.actionOnBothPass));
      this.gl.stencilMask_za3lpa$(stencil.writeMask);
    }
     else {
      this.gl.disable_za3lpa$(this.gl.STENCIL_TEST);
      this.gl.stencilMask_za3lpa$(0);
    }
    if (indices != null) {
      this.gl.drawElements_tjonv8$(this.get_glDrawMode_7dvn3b$(type), vertexCount, this.gl.UNSIGNED_SHORT, offset);
    }
     else {
      this.gl.drawArrays_qt1dr2$(this.get_glDrawMode_7dvn3b$(type), offset, vertexCount);
    }
    tmp$_12 = vattrs.size;
    for (var n_5 = 0; n_5 < tmp$_12; n_5++) {
      var att_0 = vattrs.get_za3lpa$(n_5);
      if (att_0.active) {
        var loc_0 = glProgram.getAttribLocation_61zpoe$(att_0.name);
        if (loc_0 >= 0) {
          this.gl.disableVertexAttribArray_za3lpa$(loc_0);
        }
      }
    }
  };
  AGOpengl.prototype.get_glDrawMode_7dvn3b$ = function ($receiver) {
    switch ($receiver.name) {
      case 'POINTS':
        return this.gl.POINTS;
      case 'LINE_STRIP':
        return this.gl.LINE_STRIP;
      case 'LINE_LOOP':
        return this.gl.LINE_LOOP;
      case 'LINES':
        return this.gl.LINES;
      case 'TRIANGLE_STRIP':
        return this.gl.TRIANGLE_STRIP;
      case 'TRIANGLE_FAN':
        return this.gl.TRIANGLE_FAN;
      case 'TRIANGLES':
        return this.gl.TRIANGLES;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.get_glElementType_bxje6x$ = function ($receiver) {
    switch ($receiver.kind.name) {
      case 'TBYTE':
        return this.gl.BYTE;
      case 'TUNSIGNED_BYTE':
        return this.gl.UNSIGNED_BYTE;
      case 'TSHORT':
        return this.gl.SHORT;
      case 'TUNSIGNED_SHORT':
        return this.gl.UNSIGNED_SHORT;
      case 'TINT':
        return this.gl.UNSIGNED_INT;
      case 'TFLOAT':
        return this.gl.FLOAT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.getProgram_21rgaz$ = function (program) {
    var $receiver = this.programs_nsjc6a$_0;
    var tmp$;
    var value = $receiver.get_11rb$(program);
    if (value == null) {
      var answer = new AGOpengl$GlProgram(this, this.gl, program);
      $receiver.put_xwzc9p$(program, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  function AGOpengl$GlProgram($outer, gl, program) {
    this.$outer = $outer;
    this.gl = gl;
    this.program = program;
    this.cachedVersion = -1;
    this.id = 0;
    this.fragmentShaderId = 0;
    this.vertexShaderId = 0;
    this.cachedAttribLocations = FastStringMap();
  }
  AGOpengl$GlProgram.prototype.getAttribLocation_61zpoe$ = function (name) {
    var $receiver = this.cachedAttribLocations;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(name);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }
      var out = this.gl.getAttribLocation_19mbxw$(this.id, name);
      $receiver.set(name, out);
      getOrPut$result = out;
    }
     while (false);
    return getOrPut$result;
  };
  AGOpengl$GlProgram.prototype.replaceVersion_0 = function ($receiver, version) {
    return replace($receiver, '#version 100', '#version ' + version);
  };
  AGOpengl$GlProgram.prototype.ensure_0 = function () {
    var tmp$, tmp$_0;
    if (this.cachedVersion !== this.$outer.contextVersion) {
      var oldCachedVersion = this.cachedVersion;
      this.cachedVersion = this.$outer.contextVersion;
      this.id = this.gl.createProgram();
      println('OpenglAG: Created program ' + this.program.name + ' with id ' + this.id + ' because contextVersion: ' + oldCachedVersion + ' != ' + this.$outer.contextVersion);
      this.fragmentShaderId = this.createShader_0(this.gl.FRAGMENT_SHADER, toNewGlslString(this.program.fragment, this.$outer.gles, (tmp$ = this.$outer.glSlVersion) != null ? tmp$ : get_versionInt(this.gl)));
      this.vertexShaderId = this.createShader_0(this.gl.VERTEX_SHADER, toNewGlslString(this.program.vertex, this.$outer.gles, (tmp$_0 = this.$outer.glSlVersion) != null ? tmp$_0 : get_versionInt(this.gl)));
      this.gl.attachShader_vux9f0$(this.id, this.fragmentShaderId);
      this.gl.attachShader_vux9f0$(this.id, this.vertexShaderId);
      this.gl.linkProgram_za3lpa$(this.id);
      this.$outer.tempBuffer1.setInt_vux9f0$(0, 0);
      this.gl.getProgramiv_7cqqrs$(this.id, this.gl.LINK_STATUS, this.$outer.tempBuffer1);
    }
  };
  AGOpengl$GlProgram.prototype.createShader_0 = function (type, str) {
    var shaderId = this.gl.createShader_za3lpa$(type);
    this.gl.shaderSource_19mbxw$(shaderId, str);
    this.gl.compileShader_za3lpa$(shaderId);
    var out = getShaderiv(this.gl, shaderId, this.gl.COMPILE_STATUS);
    var errorInt = this.gl.getError();
    if (out !== this.gl.TRUE) {
      var error = getShaderInfoLog(this.gl, shaderId);
      throw RuntimeException_init('Error Compiling Shader : ' + errorInt + " : '" + error + "' : source='" + str + "', gl.versionInt=" + get_versionInt(this.gl) + ", gl.versionString='" + get_versionString(this.gl) + "', gl=" + this.gl);
    }
    return shaderId;
  };
  AGOpengl$GlProgram.prototype.use = function () {
    this.ensure_0();
    this.gl.useProgram_za3lpa$(this.id);
  };
  AGOpengl$GlProgram.prototype.unuse = function () {
    this.ensure_0();
    this.gl.useProgram_za3lpa$(0);
  };
  AGOpengl$GlProgram.prototype.close = function () {
    this.gl.deleteShader_za3lpa$(this.fragmentShaderId);
    this.gl.deleteShader_za3lpa$(this.vertexShaderId);
    this.gl.deleteProgram_za3lpa$(this.id);
  };
  AGOpengl$GlProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlProgram',
    interfaces: [Closeable]
  };
  AGOpengl.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
    var bits = 0;
    this.gl.disable_za3lpa$(this.gl.SCISSOR_TEST);
    if (clearColor) {
      bits = bits | this.gl.COLOR_BUFFER_BIT;
      this.gl.clearColor_7b5o5w$(color.rf, color.gf, color.bf, color.af);
    }
    if (clearDepth) {
      bits = bits | this.gl.DEPTH_BUFFER_BIT;
      this.gl.clearDepthf_mx4ult$(depth);
    }
    if (clearStencil) {
      bits = bits | this.gl.STENCIL_BUFFER_BIT;
      this.gl.stencilMask_za3lpa$(-1);
      this.gl.clearStencil_za3lpa$(stencil);
    }
    this.gl.clear_za3lpa$(bits);
  };
  AGOpengl.prototype.createTexture_6taknv$ = function (premultiplied) {
    return new AGOpengl$GlTexture(this, this.gl, premultiplied);
  };
  function AGOpengl$GlBuffer($outer, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.cachedVersion = -1;
    this.id_0 = -1;
    this.glKind = kind === AG$Buffer$Kind$INDEX_getInstance() ? this.$outer.gl.ELEMENT_ARRAY_BUFFER : this.$outer.gl.ARRAY_BUFFER;
  }
  AGOpengl$GlBuffer.prototype.afterSetMem = function () {
  };
  AGOpengl$GlBuffer.prototype.close = function () {
    this.$outer;
    var this$AGOpengl = this.$outer;
    var buffer = FBuffer.Companion.invoke_za3lpa$(4);
    buffer.setInt_vux9f0$(0, this.id_0);
    this$AGOpengl.gl.deleteBuffers_26fqmq$(1, buffer);
    this.id_0 = -1;
  };
  AGOpengl$GlBuffer.prototype.getGlId_jm7esb$ = function (gl) {
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.dirty = true;
      this.id_0 = -1;
    }
    if (this.id_0 < 0) {
      var it = FBuffer.Companion.invoke_za3lpa$(4);
      gl.genBuffers_26fqmq$(1, it);
      this.id_0 = it.getInt_za3lpa$(0);
    }
    if (this.dirty) {
      this._bind_mxkahf$(gl, this.id_0);
      if (this.mem != null) {
        gl.bufferData_r7xkly$(this.glKind, this.memLength, ensureNotNull(this.mem), gl.STATIC_DRAW);
      }
    }
    return this.id_0;
  };
  AGOpengl$GlBuffer.prototype._bind_mxkahf$ = function (gl, id) {
    gl.bindBuffer_vux9f0$(this.glKind, id);
  };
  AGOpengl$GlBuffer.prototype.bind_jm7esb$ = function (gl) {
    this._bind_mxkahf$(gl, this.getGlId_jm7esb$(gl));
  };
  AGOpengl$GlBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlBuffer',
    interfaces: [AG$Buffer]
  };
  AGOpengl.prototype.prepareUploadNativeTexture_m8r6i1$ = function (bmp) {
  };
  function AGOpengl$GlTexture($outer, gl, premultiplied) {
    this.$outer = $outer;
    AG$Texture.call(this, this.$outer);
    this.gl = gl;
    this.premultiplied_8apmqt$_0 = premultiplied;
    this.cachedVersion = -1;
    this.texIds = FBuffer.Companion.invoke_za3lpa$(4);
    this.closed_0 = false;
  }
  Object.defineProperty(AGOpengl$GlTexture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_8apmqt$_0;
    }
  });
  Object.defineProperty(AGOpengl$GlTexture.prototype, 'tex', {
    get: function () {
      if (this.cachedVersion !== this.$outer.contextVersion) {
        this.cachedVersion = this.$outer.contextVersion;
        this.invalidate();
        this.gl.genTextures_26fqmq$(1, this.texIds);
      }
      return this.texIds.getInt_za3lpa$(0);
    }
  });
  AGOpengl$GlTexture.prototype.createBufferForBitmap_p18la5$ = function (bmp) {
    var tmp$;
    if (bmp == null)
      tmp$ = null;
    else if (Kotlin.isType(bmp, NativeImage))
      tmp$ = unsupported('Should not call createBufferForBitmap with a NativeImage');
    else if (Kotlin.isType(bmp, Bitmap8)) {
      var mem = FBuffer.Companion.invoke_za3lpa$(bmp.area);
      arraycopy_0(bmp.data, 0, mem.arrayByte, 0, bmp.area);
      return mem;
    }
     else if (Kotlin.isType(bmp, Bitmap32)) {
      var abmp = this.premultiplied ? bmp.premultipliedIfRequired() : bmp.depremultipliedIfRequired();
      var mem_0 = FBuffer.Companion.invoke_za3lpa$(abmp.area * 4 | 0);
      arraycopy_1(abmp.data.ints, 0, mem_0.arrayInt, 0, abmp.area);
      return mem_0;
    }
     else
      tmp$ = unsupported_0();
    return tmp$;
  };
  AGOpengl$GlTexture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
    var tmp$;
    this.mipmaps = false;
    var bytesPerPixel = source.rgba ? 4 : 1;
    if (source.rgba) {
      tmp$ = this.gl.RGBA;
    }
     else {
      tmp$ = this.gl.LUMINANCE;
    }
    var type = tmp$;
    if (Kotlin.isType(bmp, NativeImage)) {
      this.$outer.prepareUploadNativeTexture_m8r6i1$(bmp);
      if (bmp.area !== 0) {
        this.gl.texImage2D_gqqctv$(this.gl.TEXTURE_2D, 0, type, type, this.gl.UNSIGNED_BYTE, bmp);
      }
    }
     else {
      var buffer = this.createBufferForBitmap_p18la5$(bmp);
      if (buffer != null && source.width !== 0 && source.height !== 0 && buffer.size !== 0) {
        this.gl.texImage2D_byudfd$(this.gl.TEXTURE_2D, 0, type, source.width, source.height, 0, type, this.gl.UNSIGNED_BYTE, buffer);
      }
    }
    if (requestMipmaps && get_isPowerOfTwo(source.width) && get_isPowerOfTwo(source.height)) {
      this.mipmaps = true;
      this.bind();
      this.setFilter_6taknv$(true);
      this.setWrapST_0();
      this.gl.generateMipmap_za3lpa$(this.gl.TEXTURE_2D);
    }
  };
  AGOpengl$GlTexture.prototype.bind = function () {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, this.tex);
  };
  AGOpengl$GlTexture.prototype.unbind = function () {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, 0);
  };
  AGOpengl$GlTexture.prototype.close = function () {
    AG$Texture.prototype.close.call(this);
    if (!this.closed_0) {
      this.closed_0 = true;
      this.gl.deleteTextures_26fqmq$(1, this.texIds);
    }
  };
  AGOpengl$GlTexture.prototype.setFilter_6taknv$ = function (linear) {
    var tmp$;
    if (this.mipmaps) {
      tmp$ = linear ? this.gl.LINEAR_MIPMAP_NEAREST : this.gl.NEAREST_MIPMAP_NEAREST;
    }
     else {
      tmp$ = linear ? this.gl.LINEAR : this.gl.NEAREST;
    }
    var minFilter = tmp$;
    var magFilter = linear ? this.gl.LINEAR : this.gl.NEAREST;
    this.setWrapST_0();
    this.setMinMag_0(minFilter, magFilter);
  };
  AGOpengl$GlTexture.prototype.setWrapST_0 = function () {
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
  };
  AGOpengl$GlTexture.prototype.setMinMag_0 = function (min, mag) {
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, min);
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, mag);
  };
  AGOpengl$GlTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlTexture',
    interfaces: [AG$Texture]
  };
  AGOpengl.prototype.readColor_59u9qz$ = function (bitmap) {
    var size = bitmap.area * 4 | 0;
    var buffer = FBuffer.Companion.invoke_za3lpa$(size);
    this.gl.readPixels_8vifew$(0, 0, bitmap.width, bitmap.height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, buffer);
    buffer.getAlignedArrayInt32_coga0j$(0, bitmap.data.ints, 0, bitmap.area);
  };
  AGOpengl.prototype.readDepth_l5lmba$ = function (width, height, out) {
    var area = Kotlin.imul(width, height);
    var size = area * 4 | 0;
    var buffer = FBuffer.Companion.invoke_za3lpa$(size);
    this.gl.readPixels_8vifew$(0, 0, width, height, this.gl.DEPTH_COMPONENT, this.gl.FLOAT, buffer);
    buffer.getAlignedArrayFloat32_3hvitc$(0, out, 0, area);
  };
  AGOpengl.prototype.readColorTexture_l6jlr1$$default = function (texture, width, height) {
    var $receiver = this.gl;
    texture.bind();
    $receiver.copyTexImage2D_wrdw30$($receiver.TEXTURE_2D, 0, $receiver.RGBA, 0, 0, width, height, 0);
    texture.unbind();
  };
  AGOpengl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGOpengl',
    interfaces: [AG]
  };
  function versionString$lambda($receiver) {
    return $receiver.getString_za3lpa$($receiver.SHADING_LANGUAGE_VERSION);
  }
  var versionString;
  var versionString_metadata = new PropertyMetadata('versionString');
  function get_versionString($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = versionString.name) != null ? tmp$ : versionString_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = versionString.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = versionString.name) != null ? tmp$_3 : versionString_metadata.callableName;
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
  }
  function versionInt$lambda($receiver) {
    var tmp$;
    var $receiver_0 = replace(get_versionString($receiver), '.', '');
    var tmp$_0;
    return (tmp$ = toIntOrNull(trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString())) != null ? tmp$ : 100;
  }
  var versionInt;
  var versionInt_metadata = new PropertyMetadata('versionInt');
  function get_versionInt($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = versionInt.name) != null ? tmp$ : versionInt_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = versionInt.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = versionInt.name) != null ? tmp$_3 : versionInt_metadata.callableName;
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
  }
  var KORAG_VERSION;
  function setFloats($receiver, offset, data, dataOffset, count) {
    for (var n = 0; n < count; n++)
      $receiver.setFloat_24o109$(offset + n | 0, data[dataOffset + n | 0]);
    return $receiver;
  }
  function DummyAG(width, height) {
    if (width === void 0)
      width = 1280;
    if (height === void 0)
      height = 720;
    AG.call(this);
    this.nativeComponent_kz1fki$_0 = new Any();
    this.backWidth_n6snhn$_0 = width;
    this.backHeight_hftjv2$_0 = height;
  }
  Object.defineProperty(DummyAG.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_kz1fki$_0;
    }
  });
  Object.defineProperty(DummyAG.prototype, 'backWidth', {
    get: function () {
      return this.backWidth_n6snhn$_0;
    },
    set: function (value) {
      this.backWidth_n6snhn$_0 = value;
    }
  });
  Object.defineProperty(DummyAG.prototype, 'backHeight', {
    get: function () {
      return this.backHeight_hftjv2$_0;
    },
    set: function (value) {
      this.backHeight_hftjv2$_0 = value;
    }
  });
  DummyAG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyAG',
    interfaces: [AG]
  };
  function LogAG(width, height) {
    if (width === void 0)
      width = 640;
    if (height === void 0)
      height = 480;
    AG.call(this);
    this.log = ArrayList_init();
    this.nativeComponent_kfwasu$_0 = new Any();
    this.ready();
    this.backWidth_md67wn$_0 = width;
    this.backHeight_82hv7y$_0 = height;
    this.textureId_gyj2n2$_0 = 0;
    this.bufferId_lvkfs1$_0 = 0;
    this.renderBufferId_2y4l0r$_0 = 0;
  }
  Object.defineProperty(LogAG.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_kfwasu$_0;
    }
  });
  LogAG.prototype.log_61zpoe$ = function (str) {
    this.log.add_11rb$(str);
  };
  LogAG.prototype.getLogAsString = function () {
    return joinToString(this.log, '\n');
  };
  LogAG.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
    this.log_61zpoe$('clear(' + color + ', ' + depth + ', ' + stencil + ', ' + clearColor + ', ' + clearDepth + ', ' + clearStencil + ')');
  };
  Object.defineProperty(LogAG.prototype, 'backWidth', {
    get: function () {
      return this.backWidth_md67wn$_0;
    },
    set: function (value) {
      this.backWidth_md67wn$_0 = value;
      this.log_61zpoe$('backWidth = ' + value);
    }
  });
  Object.defineProperty(LogAG.prototype, 'backHeight', {
    get: function () {
      return this.backHeight_82hv7y$_0;
    },
    set: function (value) {
      this.backHeight_82hv7y$_0 = value;
      this.log_61zpoe$('backHeight = ' + value);
    }
  });
  LogAG.prototype.repaint = function () {
    this.log_61zpoe$('repaint()');
  };
  LogAG.prototype.dispose = function () {
    this.log_61zpoe$('dispose()');
  };
  function LogAG$LogTexture($outer, id, premultiplied) {
    this.$outer = $outer;
    AG$Texture.call(this, this.$outer);
    this.id = id;
    this.premultiplied_pk2gt9$_0 = premultiplied;
  }
  Object.defineProperty(LogAG$LogTexture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_pk2gt9$_0;
    }
  });
  LogAG$LogTexture.prototype.uploadedSource = function () {
    this.$outer.log_61zpoe$(this.toString() + '.uploadedBitmap(' + this.source + ', ' + this.source.width + ', ' + this.source.height + ')');
  };
  LogAG$LogTexture.prototype.close = function () {
    AG$Texture.prototype.close.call(this);
    this.$outer.log_61zpoe$(this.toString() + '.close()');
  };
  LogAG$LogTexture.prototype.toString = function () {
    return 'Texture[' + this.id + ']';
  };
  LogAG$LogTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogTexture',
    interfaces: [AG$Texture]
  };
  function LogAG$LogBuffer($outer, id, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.id = id;
  }
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmem', {
    get: function () {
      return this.mem;
    }
  });
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmemOffset', {
    get: function () {
      return this.memOffset;
    }
  });
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmemLength', {
    get: function () {
      return this.memLength;
    }
  });
  LogAG$LogBuffer.prototype.afterSetMem = function () {
    this.$outer.log_61zpoe$(this.toString() + '.afterSetMem(mem[' + ensureNotNull(this.mem).size + '])');
  };
  LogAG$LogBuffer.prototype.close = function () {
    this.$outer.log_61zpoe$(this.toString() + '.close()');
  };
  LogAG$LogBuffer.prototype.toString = function () {
    return 'Buffer[' + this.id + ']';
  };
  LogAG$LogBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogBuffer',
    interfaces: [AG$Buffer]
  };
  function LogAG$LogRenderBuffer($outer, id) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.id_z0ejyl$_0 = id;
  }
  Object.defineProperty(LogAG$LogRenderBuffer.prototype, 'id', {
    get: function () {
      return this.id_z0ejyl$_0;
    }
  });
  LogAG$LogRenderBuffer.prototype.setSize_vux9f0$ = function (width, height) {
    this.$outer.log_61zpoe$(this.toString() + '.setSize(' + width + ', ' + height + ')');
  };
  LogAG$LogRenderBuffer.prototype.set = function () {
    this.$outer.log_61zpoe$(this.toString() + '.set()');
  };
  LogAG$LogRenderBuffer.prototype.close = function () {
    this.$outer.log_61zpoe$(this.toString() + '.close()');
  };
  LogAG$LogRenderBuffer.prototype.toString = function () {
    return 'RenderBuffer[' + this.id + ']';
  };
  LogAG$LogRenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  LogAG.prototype.createTexture_6taknv$ = function (premultiplied) {
    var tmp$;
    var $receiver = new LogAG$LogTexture(this, (tmp$ = this.textureId_gyj2n2$_0, this.textureId_gyj2n2$_0 = tmp$ + 1 | 0, tmp$), premultiplied);
    this.log_61zpoe$('createTexture():' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.createBuffer_g6fstm$ = function (kind) {
    var tmp$;
    var $receiver = new LogAG$LogBuffer(this, (tmp$ = this.bufferId_lvkfs1$_0, this.bufferId_lvkfs1$_0 = tmp$ + 1 | 0, tmp$), kind);
    this.log_61zpoe$('createBuffer(' + kind + '):' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.draw_36194n$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    try {
      this.log_61zpoe$('draw(vertices=' + vertices + ', indices=' + toString(indices) + ', program=' + program + ', type=' + type + ', vertexLayout=' + vertexLayout + ', vertexCount=' + vertexCount + ', offset=' + offset + ', blending=' + blending + ', uniforms=' + uniforms + ', stencil=' + stencil + ', colorMask=' + colorMask + ')');
      var missingUniforms = minus(program.uniforms, uniforms.keys);
      var extraUniforms = minus_0(uniforms.keys, program.uniforms);
      var missingAttributes = minus(toSet(vertexLayout.attributes), program.attributes);
      var extraAttributes = minus(program.attributes, toSet(vertexLayout.attributes));
      if (!missingUniforms.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Missing:' + missingUniforms);
      if (!extraUniforms.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Unexpected:' + extraUniforms);
      if (!missingAttributes.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Missing:' + missingAttributes);
      if (!extraAttributes.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Unexpected:' + extraAttributes);
      var vertexBuffer = Kotlin.isType(tmp$ = vertices, LogAG$LogBuffer) ? tmp$ : throwCCE();
      var vertexMem = ensureNotNull(vertexBuffer.logmem);
      var vertexMemOffset = vertexBuffer.logmemOffset;
      var indexMem = (Kotlin.isType(tmp$_0 = indices, LogAG$LogBuffer) ? tmp$_0 : throwCCE()).logmem;
      var $receiver = until(offset, offset + vertexCount | 0);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination.add_11rb$(ensureNotNull(indexMem).getAlignedInt16_za3lpa$(item));
      }
      var _indices = destination;
      this.log_61zpoe$('::draw.indices=' + _indices);
      tmp$_1 = distinct(sorted(_indices)).iterator();
      while (tmp$_1.hasNext()) {
        var index = tmp$_1.next();
        var os = index * vertexLayout.totalSize;
        var attributes = ArrayList_init();
        tmp$_2 = zip(vertexLayout.attributes, vertexLayout.attributePositions).iterator();
        while (tmp$_2.hasNext()) {
          var tmp$_5 = tmp$_2.next();
          var attribute = tmp$_5.component1()
          , pos = tmp$_5.component2();
          var o = os + pos + vertexMemOffset | 0;
          switch (attribute.type.name) {
            case 'Int1':
              tmp$_3 = 'int(' + toString(vertexMem.getUnalignedInt32_za3lpa$(o + 0 | 0)) + ')';
              break;
            case 'Float1':
              tmp$_3 = 'float(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ')';
              break;
            case 'Float2':
              tmp$_3 = 'vec2(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 4 | 0)) + ')';
              break;
            case 'Float3':
              tmp$_3 = 'vec3(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 4 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 8 | 0)) + ')';
              break;
            case 'Byte4':
              tmp$_3 = 'byte4(' + toString(vertexMem.getUnalignedInt32_za3lpa$(o + 0 | 0)) + ')';
              break;
            default:tmp$_3 = 'Unsupported(' + attribute.type + ')';
              break;
          }
          var info = tmp$_3;
          var element = attribute.name + '[' + info + ']';
          attributes.add_11rb$(element);
        }
        this.log_61zpoe$('::draw.vertex[' + index + ']: ' + joinToString(attributes, ', '));
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.log_61zpoe$('ERROR: ' + toString(e.message));
        printStackTrace_0(e);
      }
       else
        throw e;
    }
  };
  LogAG.prototype.disposeTemporalPerFrameStuff = function () {
    this.log_61zpoe$('disposeTemporalPerFrameStuff()');
  };
  LogAG.prototype.createRenderBuffer = function () {
    var tmp$;
    var $receiver = new LogAG$LogRenderBuffer(this, (tmp$ = this.renderBufferId_2y4l0r$_0, this.renderBufferId_2y4l0r$_0 = tmp$ + 1 | 0, tmp$));
    this.log_61zpoe$('createRenderBuffer():' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.flipInternal = function () {
    this.log_61zpoe$('flipInternal()');
  };
  LogAG.prototype.readColor_59u9qz$ = function (bitmap) {
    this.log_61zpoe$(this.toString() + '.readBitmap(' + bitmap + ')');
  };
  LogAG.prototype.readDepth_l5lmba$ = function (width, height, out) {
    this.log_61zpoe$(this.toString() + '.readDepth(' + width + ', ' + height + ', ' + out + ')');
  };
  LogAG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogAG',
    interfaces: [AG]
  };
  function DoubleDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0;
  }
  DoubleDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.values[this.index];
  };
  DoubleDelegatedUniform.prototype.setValue_zb7g25$ = function (obj, prop, value) {
    this.values[this.index] = value;
    this.onSet(value);
  };
  DoubleDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleDelegatedUniform',
    interfaces: []
  };
  function FloatDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0;
  }
  FloatDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.values[this.index];
  };
  FloatDelegatedUniform.prototype.setValue_3eg8p2$ = function (obj, prop, value) {
    this.values[this.index] = value;
    this.onSet(value);
  };
  FloatDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatDelegatedUniform',
    interfaces: []
  };
  function IntDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0;
  }
  IntDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return numberToInt(this.values[this.index]);
  };
  IntDelegatedUniform.prototype.setValue_imo3cj$ = function (obj, prop, value) {
    this.values[this.index] = value;
    this.onSet(value);
  };
  IntDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntDelegatedUniform',
    interfaces: []
  };
  function BoolDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0 ? 1 : 0;
  }
  BoolDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.values[this.index] !== 0.0;
  };
  BoolDelegatedUniform.prototype.setValue_cegyfa$ = function (obj, prop, value) {
    this.values[this.index] = value ? 1 : 0;
    this.onSet(value);
  };
  BoolDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolDelegatedUniform',
    interfaces: []
  };
  function UniformFloatStorage(uniforms, uniform, array) {
    this.uniforms = uniforms;
    this.uniform = uniform;
    this.array = array;
    this.uniforms.set_8gg9u8$(this.uniform, this.array);
  }
  function UniformFloatStorage$doubleDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegate_7qp2ad$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegate$lambda;
    return new DoubleDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$doubleDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateX_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateX$lambda;
    return this.doubleDelegate_7qp2ad$(0, default_0, onSet);
  };
  function UniformFloatStorage$doubleDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateY_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateY$lambda;
    return this.doubleDelegate_7qp2ad$(1, default_0, onSet);
  };
  function UniformFloatStorage$doubleDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateZ_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateZ$lambda;
    return this.doubleDelegate_7qp2ad$(2, default_0, onSet);
  };
  function UniformFloatStorage$doubleDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateW_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateW$lambda;
    return this.doubleDelegate_7qp2ad$(3, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegate_8hvjyt$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegate$lambda;
    return new FloatDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$floatDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateX_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateX$lambda;
    return this.floatDelegate_8hvjyt$(0, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateY_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateY$lambda;
    return this.floatDelegate_8hvjyt$(1, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateZ_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateZ$lambda;
    return this.floatDelegate_8hvjyt$(2, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateW_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateW$lambda;
    return this.floatDelegate_8hvjyt$(3, default_0, onSet);
  };
  function UniformFloatStorage$intDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegate_e1b8mt$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegate$lambda;
    return new IntDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$intDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateX_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateX$lambda;
    return this.intDelegate_e1b8mt$(0, default_0, onSet);
  };
  function UniformFloatStorage$intDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateY_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateY$lambda;
    return this.intDelegate_e1b8mt$(1, default_0, onSet);
  };
  function UniformFloatStorage$intDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateZ_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateZ$lambda;
    return this.intDelegate_e1b8mt$(2, default_0, onSet);
  };
  function UniformFloatStorage$intDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateW_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateW$lambda;
    return this.intDelegate_e1b8mt$(3, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegate_zc8s2z$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegate$lambda;
    return new BoolDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$boolDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateX_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateX$lambda;
    return this.boolDelegate_zc8s2z$(0, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateY_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateY$lambda;
    return this.boolDelegate_zc8s2z$(1, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateZ_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateZ$lambda;
    return this.boolDelegate_zc8s2z$(2, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateW_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateW$lambda;
    return this.boolDelegate_zc8s2z$(3, default_0, onSet);
  };
  UniformFloatStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformFloatStorage',
    interfaces: []
  };
  function UniformValueStorage(uniforms, uniform, value) {
    this.uniforms = uniforms;
    this.uniform = uniform;
    this.value = value;
    this.uniforms.set_8gg9u8$(this.uniform, this.value);
  }
  UniformValueStorage.prototype.delegate = function () {
    return this;
  };
  UniformValueStorage.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.value;
  };
  UniformValueStorage.prototype.setValue_809r6s$ = function (obj, prop, value) {
    this.uniforms.set_8gg9u8$(this.uniform, value);
  };
  UniformValueStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformValueStorage',
    interfaces: []
  };
  function storageFor($receiver, uniform, array) {
    if (array === void 0)
      array = new Float32Array(4);
    return new UniformFloatStorage($receiver, uniform, array);
  }
  function storageForMatrix3D($receiver, uniform, matrix) {
    if (matrix === void 0)
      matrix = new Matrix3D();
    return new UniformValueStorage($receiver, uniform, matrix);
  }
  function toNewGlslString($receiver, gles, version) {
    if (gles === void 0)
      gles = true;
    if (version === void 0)
      version = 100;
    return (new GlslGenerator($receiver.type, gles, version)).generate_57b21j$($receiver.stm);
  }
  function toGlSlString($receiver, gles) {
    if (gles === void 0)
      gles = true;
    return (new GlslGenerator(ShaderType$VERTEX_getInstance(), gles)).generate_57b21j$($receiver.stm);
  }
  function toGlSlString_0($receiver, gles) {
    if (gles === void 0)
      gles = true;
    return (new GlslGenerator(ShaderType$FRAGMENT_getInstance(), gles)).generate_57b21j$($receiver.stm);
  }
  function GlslGenerator(kind, gles, version) {
    if (gles === void 0)
      gles = true;
    if (version === void 0)
      version = 100;
    Program$Visitor.call(this, '');
    this.kind = kind;
    this.gles = gles;
    this.version = version;
    this.temps_0 = HashSet_init();
    this.attributes_0 = HashSet_init();
    this.varyings_0 = HashSet_init();
    this.uniforms_0 = HashSet_init();
    this.programIndenter_0 = new Indenter();
  }
  GlslGenerator.prototype.errorType_0 = function (type) {
    return invalidOp("Don't know how to serialize type " + type);
  };
  GlslGenerator.prototype.typeToString_b2kxjc$ = function (type) {
    switch (type.name) {
      case 'Byte4':
        return 'vec4';
      case 'Mat2':
        return 'mat2';
      case 'Mat3':
        return 'mat3';
      case 'Mat4':
        return 'mat4';
      case 'TextureUnit':
        return 'sampler2D';
      default:switch (type.kind.name) {
          case 'TBYTE':
          case 'TUNSIGNED_BYTE':
          case 'TSHORT':
          case 'TUNSIGNED_SHORT':
          case 'TFLOAT':
            switch (type.elementCount) {
              case 1:
                return 'float';
              case 2:
                return 'vec2';
              case 3:
                return 'vec3';
              case 4:
                return 'vec4';
              default:return this.errorType_0(type);
            }

          case 'TINT':
            switch (type.elementCount) {
              case 1:
                return 'int';
              case 2:
                return 'ivec2';
              case 3:
                return 'ivec3';
              case 4:
                return 'ivec4';
              default:return this.errorType_0(type);
            }

          default:return Kotlin.noWhenBranchMatched();
        }

        break;
    }
  };
  GlslGenerator.prototype.get_arrayDecl_55mpc6$ = function ($receiver) {
    return $receiver.arrayCount !== 1 ? '[' + $receiver.arrayCount + ']' : '';
  };
  function GlslGenerator$generate$lambda(this$GlslGenerator) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      if (this$GlslGenerator.gles) {
        $receiver.line_61zpoe$('#version ' + this$GlslGenerator.version);
        $receiver.line_61zpoe$('#ifdef GL_ES');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('precision mediump float;');
          $receiver.line_61zpoe$('precision mediump int;');
          $receiver.line_61zpoe$('precision lowp sampler2D;');
          $receiver.line_61zpoe$('precision lowp samplerCube;');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('#endif');
      }
      tmp$ = this$GlslGenerator.attributes_0.iterator();
      while (tmp$.hasNext()) {
        var it = tmp$.next();
        $receiver.line_61zpoe$('attribute ' + this$GlslGenerator.typeToString_b2kxjc$(it.type) + ' ' + it.name + this$GlslGenerator.get_arrayDecl_55mpc6$(it) + ';');
      }
      tmp$_0 = this$GlslGenerator.uniforms_0.iterator();
      while (tmp$_0.hasNext()) {
        var it_0 = tmp$_0.next();
        $receiver.line_61zpoe$('uniform ' + this$GlslGenerator.typeToString_b2kxjc$(it_0.type) + ' ' + it_0.name + this$GlslGenerator.get_arrayDecl_55mpc6$(it_0) + ';');
      }
      tmp$_1 = this$GlslGenerator.varyings_0.iterator();
      while (tmp$_1.hasNext()) {
        var it_1 = tmp$_1.next();
        $receiver.line_61zpoe$('varying ' + this$GlslGenerator.typeToString_b2kxjc$(it_1.type) + ' ' + it_1.name + ';');
      }
      var str = 'void main()';
      $receiver.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
      $receiver._indent();
      try {
        var this$GlslGenerator_0 = this$GlslGenerator;
        var tmp$_2;
        tmp$_2 = this$GlslGenerator_0.temps_0.iterator();
        while (tmp$_2.hasNext()) {
          var temp = tmp$_2.next();
          $receiver.line_61zpoe$(this$GlslGenerator_0.typeToString_b2kxjc$(temp.type) + ' ' + temp.name + ';');
        }
        $receiver.line_2swh6d$(this$GlslGenerator_0.programIndenter_0);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
      return Unit;
    };
  }
  GlslGenerator.prototype.generate_57b21j$ = function (root) {
    this.temps_0.clear();
    this.attributes_0.clear();
    this.varyings_0.clear();
    this.uniforms_0.clear();
    this.programIndenter_0 = new Indenter();
    this.visit_57b21j$(root);
    var tmp$ = this.kind === ShaderType$FRAGMENT_getInstance();
    if (tmp$) {
      tmp$ = !this.attributes_0.isEmpty();
    }
    if (tmp$) {
      throw RuntimeException_init("Can't use attributes in fragment shader");
    }
    return Indenter.Companion.invoke_z3r7a6$(GlslGenerator$generate$lambda(this)).toString();
  };
  GlslGenerator.prototype.visit_1xgyq4$ = function (stms) {
    var tmp$;
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_57b21j$(stm);
    }
  };
  GlslGenerator.prototype.visit_tq3hhf$ = function (stm) {
    this.programIndenter_0.line_61zpoe$(this.visit_dq1c34$(stm.to) + ' = ' + this.visit_dq1c34$(stm.from) + ';');
  };
  GlslGenerator.prototype.visit_d6ige1$ = function (stm) {
    this.programIndenter_0.line_61zpoe$('discard;');
  };
  function GlslGenerator$visit$lambda(this$GlslGenerator) {
    return function (it) {
      return this$GlslGenerator.visit_dq1c34$(it);
    };
  }
  GlslGenerator.prototype.visit_b87eze$ = function (operand) {
    return this.typeToString_b2kxjc$(operand.type) + '(' + joinToString_0(operand.ops, ', ', void 0, void 0, void 0, void 0, GlslGenerator$visit$lambda(this)) + ')';
  };
  GlslGenerator.prototype.visit_s5t3yz$ = function (operand) {
    return '(' + this.visit_dq1c34$(operand.left) + ' ' + operand.op + ' ' + this.visit_dq1c34$(operand.right) + ')';
  };
  function GlslGenerator$visit$lambda_0(this$GlslGenerator) {
    return function (it) {
      return this$GlslGenerator.visit_dq1c34$(it);
    };
  }
  GlslGenerator.prototype.visit_j8ixcp$ = function (func) {
    return func.name + '(' + joinToString(func.ops, ', ', void 0, void 0, void 0, void 0, GlslGenerator$visit$lambda_0(this)) + ')';
  };
  GlslGenerator.prototype.visit_ceyg7y$ = function (stm) {
    var $receiver = this.programIndenter_0;
    var str = 'if (' + this.visit_dq1c34$(stm.cond) + ')';
    $receiver.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
    $receiver._indent();
    try {
      this.visit_57b21j$(stm.tbody);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}');
    if (stm.fbody != null) {
      $receiver.line_61zpoe$('else'.length === 0 ? '{' : 'else' + ' {');
      $receiver._indent();
      try {
        this.visit_57b21j$(ensureNotNull(stm.fbody));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
    }
  };
  GlslGenerator.prototype.visit_bmfbl7$ = function (operand) {
    var tmp$;
    Program$Visitor.prototype.visit_bmfbl7$.call(this, operand);
    if (Kotlin.isType(operand, Output)) {
      switch (this.kind.name) {
        case 'VERTEX':
          tmp$ = 'gl_Position';
          break;
        case 'FRAGMENT':
          tmp$ = 'gl_FragColor';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
    }
     else
      tmp$ = operand.name;
    return tmp$;
  };
  GlslGenerator.prototype.visit_nykr6b$ = function (temp) {
    this.temps_0.add_11rb$(temp);
    return Program$Visitor.prototype.visit_nykr6b$.call(this, temp);
  };
  GlslGenerator.prototype.visit_3kqgd9$ = function (attribute) {
    this.attributes_0.add_11rb$(attribute);
    return Program$Visitor.prototype.visit_3kqgd9$.call(this, attribute);
  };
  GlslGenerator.prototype.visit_b38853$ = function (varying) {
    this.varyings_0.add_11rb$(varying);
    return Program$Visitor.prototype.visit_b38853$.call(this, varying);
  };
  GlslGenerator.prototype.visit_2f4vi3$ = function (uniform) {
    this.uniforms_0.add_11rb$(uniform);
    return Program$Visitor.prototype.visit_2f4vi3$.call(this, uniform);
  };
  GlslGenerator.prototype.visit_e3ui06$ = function (output) {
    return Program$Visitor.prototype.visit_e3ui06$.call(this, output);
  };
  GlslGenerator.prototype.visit_jod55v$ = function (operand) {
    return operand.value.toString();
  };
  GlslGenerator.prototype.visit_u1pe22$ = function (operand) {
    var str = operand.value.toString();
    return contains(str, 46) ? str : str + '.0';
  };
  GlslGenerator.prototype.visit_zamv4y$ = function (operand) {
    return operand.value.toString();
  };
  GlslGenerator.prototype.visit_sbsglh$ = function (operand) {
    return this.visit_dq1c34$(operand.left) + '.' + operand.swizzle;
  };
  GlslGenerator.prototype.visit_5pi8d6$ = function (operand) {
    return this.visit_dq1c34$(operand.left) + '[' + this.visit_dq1c34$(operand.index) + ']';
  };
  GlslGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlslGenerator',
    interfaces: [Program$Visitor]
  };
  function toGlSl($receiver) {
    return (new GlslGenerator($receiver.type)).generate_57b21j$($receiver.stm);
  }
  function VarKind(name, ordinal, bytesSize) {
    Enum.call(this);
    this.bytesSize = bytesSize;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VarKind_initFields() {
    VarKind_initFields = function () {
    };
    VarKind$TBYTE_instance = new VarKind('TBYTE', 0, 1);
    VarKind$TUNSIGNED_BYTE_instance = new VarKind('TUNSIGNED_BYTE', 1, 1);
    VarKind$TSHORT_instance = new VarKind('TSHORT', 2, 2);
    VarKind$TUNSIGNED_SHORT_instance = new VarKind('TUNSIGNED_SHORT', 3, 2);
    VarKind$TINT_instance = new VarKind('TINT', 4, 4);
    VarKind$TFLOAT_instance = new VarKind('TFLOAT', 5, 4);
  }
  var VarKind$TBYTE_instance;
  function VarKind$TBYTE_getInstance() {
    VarKind_initFields();
    return VarKind$TBYTE_instance;
  }
  var VarKind$TUNSIGNED_BYTE_instance;
  function VarKind$TUNSIGNED_BYTE_getInstance() {
    VarKind_initFields();
    return VarKind$TUNSIGNED_BYTE_instance;
  }
  var VarKind$TSHORT_instance;
  function VarKind$TSHORT_getInstance() {
    VarKind_initFields();
    return VarKind$TSHORT_instance;
  }
  var VarKind$TUNSIGNED_SHORT_instance;
  function VarKind$TUNSIGNED_SHORT_getInstance() {
    VarKind_initFields();
    return VarKind$TUNSIGNED_SHORT_instance;
  }
  var VarKind$TINT_instance;
  function VarKind$TINT_getInstance() {
    VarKind_initFields();
    return VarKind$TINT_instance;
  }
  var VarKind$TFLOAT_instance;
  function VarKind$TFLOAT_getInstance() {
    VarKind_initFields();
    return VarKind$TFLOAT_instance;
  }
  VarKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarKind',
    interfaces: [Enum]
  };
  function VarKind$values() {
    return [VarKind$TBYTE_getInstance(), VarKind$TUNSIGNED_BYTE_getInstance(), VarKind$TSHORT_getInstance(), VarKind$TUNSIGNED_SHORT_getInstance(), VarKind$TINT_getInstance(), VarKind$TFLOAT_getInstance()];
  }
  VarKind.values = VarKind$values;
  function VarKind$valueOf(name) {
    switch (name) {
      case 'TBYTE':
        return VarKind$TBYTE_getInstance();
      case 'TUNSIGNED_BYTE':
        return VarKind$TUNSIGNED_BYTE_getInstance();
      case 'TSHORT':
        return VarKind$TSHORT_getInstance();
      case 'TUNSIGNED_SHORT':
        return VarKind$TUNSIGNED_SHORT_getInstance();
      case 'TINT':
        return VarKind$TINT_getInstance();
      case 'TFLOAT':
        return VarKind$TFLOAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.VarKind.' + name);
    }
  }
  VarKind.valueOf_61zpoe$ = VarKind$valueOf;
  function VarType(name, ordinal, kind, elementCount, isMatrix) {
    if (isMatrix === void 0)
      isMatrix = false;
    Enum.call(this);
    this.kind = kind;
    this.elementCount = elementCount;
    this.isMatrix = isMatrix;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.bytesSize = Kotlin.imul(this.kind.bytesSize, this.elementCount);
  }
  function VarType_initFields() {
    VarType_initFields = function () {
    };
    VarType$TVOID_instance = new VarType('TVOID', 0, VarKind$TBYTE_getInstance(), 0);
    VarType$Mat2_instance = new VarType('Mat2', 1, VarKind$TFLOAT_getInstance(), 4, true);
    VarType$Mat3_instance = new VarType('Mat3', 2, VarKind$TFLOAT_getInstance(), 9, true);
    VarType$Mat4_instance = new VarType('Mat4', 3, VarKind$TFLOAT_getInstance(), 16, true);
    VarType$TextureUnit_instance = new VarType('TextureUnit', 4, VarKind$TINT_getInstance(), 1);
    VarType$Int1_instance = new VarType('Int1', 5, VarKind$TINT_getInstance(), 1);
    VarType$Float1_instance = new VarType('Float1', 6, VarKind$TFLOAT_getInstance(), 1);
    VarType$Float2_instance = new VarType('Float2', 7, VarKind$TFLOAT_getInstance(), 2);
    VarType$Float3_instance = new VarType('Float3', 8, VarKind$TFLOAT_getInstance(), 3);
    VarType$Float4_instance = new VarType('Float4', 9, VarKind$TFLOAT_getInstance(), 4);
    VarType$Short1_instance = new VarType('Short1', 10, VarKind$TSHORT_getInstance(), 1);
    VarType$Short2_instance = new VarType('Short2', 11, VarKind$TSHORT_getInstance(), 2);
    VarType$Short3_instance = new VarType('Short3', 12, VarKind$TSHORT_getInstance(), 3);
    VarType$Short4_instance = new VarType('Short4', 13, VarKind$TSHORT_getInstance(), 4);
    VarType$Bool1_instance = new VarType('Bool1', 14, VarKind$TUNSIGNED_BYTE_getInstance(), 1);
    VarType$Byte4_instance = new VarType('Byte4', 15, VarKind$TUNSIGNED_BYTE_getInstance(), 4);
    VarType$SByte1_instance = new VarType('SByte1', 16, VarKind$TBYTE_getInstance(), 1);
    VarType$SByte2_instance = new VarType('SByte2', 17, VarKind$TBYTE_getInstance(), 2);
    VarType$SByte3_instance = new VarType('SByte3', 18, VarKind$TBYTE_getInstance(), 3);
    VarType$SByte4_instance = new VarType('SByte4', 19, VarKind$TBYTE_getInstance(), 4);
    VarType$UByte1_instance = new VarType('UByte1', 20, VarKind$TUNSIGNED_BYTE_getInstance(), 1);
    VarType$UByte2_instance = new VarType('UByte2', 21, VarKind$TUNSIGNED_BYTE_getInstance(), 2);
    VarType$UByte3_instance = new VarType('UByte3', 22, VarKind$TUNSIGNED_BYTE_getInstance(), 3);
    VarType$UByte4_instance = new VarType('UByte4', 23, VarKind$TUNSIGNED_BYTE_getInstance(), 4);
    VarType$SShort1_instance = new VarType('SShort1', 24, VarKind$TSHORT_getInstance(), 1);
    VarType$SShort2_instance = new VarType('SShort2', 25, VarKind$TSHORT_getInstance(), 2);
    VarType$SShort3_instance = new VarType('SShort3', 26, VarKind$TSHORT_getInstance(), 3);
    VarType$SShort4_instance = new VarType('SShort4', 27, VarKind$TSHORT_getInstance(), 4);
    VarType$UShort1_instance = new VarType('UShort1', 28, VarKind$TUNSIGNED_SHORT_getInstance(), 1);
    VarType$UShort2_instance = new VarType('UShort2', 29, VarKind$TUNSIGNED_SHORT_getInstance(), 2);
    VarType$UShort3_instance = new VarType('UShort3', 30, VarKind$TUNSIGNED_SHORT_getInstance(), 3);
    VarType$UShort4_instance = new VarType('UShort4', 31, VarKind$TUNSIGNED_SHORT_getInstance(), 4);
    VarType$SInt1_instance = new VarType('SInt1', 32, VarKind$TINT_getInstance(), 1);
    VarType$SInt2_instance = new VarType('SInt2', 33, VarKind$TINT_getInstance(), 2);
    VarType$SInt3_instance = new VarType('SInt3', 34, VarKind$TINT_getInstance(), 3);
    VarType$SInt4_instance = new VarType('SInt4', 35, VarKind$TINT_getInstance(), 4);
    VarType$Companion_getInstance();
  }
  var VarType$TVOID_instance;
  function VarType$TVOID_getInstance() {
    VarType_initFields();
    return VarType$TVOID_instance;
  }
  var VarType$Mat2_instance;
  function VarType$Mat2_getInstance() {
    VarType_initFields();
    return VarType$Mat2_instance;
  }
  var VarType$Mat3_instance;
  function VarType$Mat3_getInstance() {
    VarType_initFields();
    return VarType$Mat3_instance;
  }
  var VarType$Mat4_instance;
  function VarType$Mat4_getInstance() {
    VarType_initFields();
    return VarType$Mat4_instance;
  }
  var VarType$TextureUnit_instance;
  function VarType$TextureUnit_getInstance() {
    VarType_initFields();
    return VarType$TextureUnit_instance;
  }
  var VarType$Int1_instance;
  function VarType$Int1_getInstance() {
    VarType_initFields();
    return VarType$Int1_instance;
  }
  var VarType$Float1_instance;
  function VarType$Float1_getInstance() {
    VarType_initFields();
    return VarType$Float1_instance;
  }
  var VarType$Float2_instance;
  function VarType$Float2_getInstance() {
    VarType_initFields();
    return VarType$Float2_instance;
  }
  var VarType$Float3_instance;
  function VarType$Float3_getInstance() {
    VarType_initFields();
    return VarType$Float3_instance;
  }
  var VarType$Float4_instance;
  function VarType$Float4_getInstance() {
    VarType_initFields();
    return VarType$Float4_instance;
  }
  var VarType$Short1_instance;
  function VarType$Short1_getInstance() {
    VarType_initFields();
    return VarType$Short1_instance;
  }
  var VarType$Short2_instance;
  function VarType$Short2_getInstance() {
    VarType_initFields();
    return VarType$Short2_instance;
  }
  var VarType$Short3_instance;
  function VarType$Short3_getInstance() {
    VarType_initFields();
    return VarType$Short3_instance;
  }
  var VarType$Short4_instance;
  function VarType$Short4_getInstance() {
    VarType_initFields();
    return VarType$Short4_instance;
  }
  var VarType$Bool1_instance;
  function VarType$Bool1_getInstance() {
    VarType_initFields();
    return VarType$Bool1_instance;
  }
  var VarType$Byte4_instance;
  function VarType$Byte4_getInstance() {
    VarType_initFields();
    return VarType$Byte4_instance;
  }
  var VarType$SByte1_instance;
  function VarType$SByte1_getInstance() {
    VarType_initFields();
    return VarType$SByte1_instance;
  }
  var VarType$SByte2_instance;
  function VarType$SByte2_getInstance() {
    VarType_initFields();
    return VarType$SByte2_instance;
  }
  var VarType$SByte3_instance;
  function VarType$SByte3_getInstance() {
    VarType_initFields();
    return VarType$SByte3_instance;
  }
  var VarType$SByte4_instance;
  function VarType$SByte4_getInstance() {
    VarType_initFields();
    return VarType$SByte4_instance;
  }
  var VarType$UByte1_instance;
  function VarType$UByte1_getInstance() {
    VarType_initFields();
    return VarType$UByte1_instance;
  }
  var VarType$UByte2_instance;
  function VarType$UByte2_getInstance() {
    VarType_initFields();
    return VarType$UByte2_instance;
  }
  var VarType$UByte3_instance;
  function VarType$UByte3_getInstance() {
    VarType_initFields();
    return VarType$UByte3_instance;
  }
  var VarType$UByte4_instance;
  function VarType$UByte4_getInstance() {
    VarType_initFields();
    return VarType$UByte4_instance;
  }
  var VarType$SShort1_instance;
  function VarType$SShort1_getInstance() {
    VarType_initFields();
    return VarType$SShort1_instance;
  }
  var VarType$SShort2_instance;
  function VarType$SShort2_getInstance() {
    VarType_initFields();
    return VarType$SShort2_instance;
  }
  var VarType$SShort3_instance;
  function VarType$SShort3_getInstance() {
    VarType_initFields();
    return VarType$SShort3_instance;
  }
  var VarType$SShort4_instance;
  function VarType$SShort4_getInstance() {
    VarType_initFields();
    return VarType$SShort4_instance;
  }
  var VarType$UShort1_instance;
  function VarType$UShort1_getInstance() {
    VarType_initFields();
    return VarType$UShort1_instance;
  }
  var VarType$UShort2_instance;
  function VarType$UShort2_getInstance() {
    VarType_initFields();
    return VarType$UShort2_instance;
  }
  var VarType$UShort3_instance;
  function VarType$UShort3_getInstance() {
    VarType_initFields();
    return VarType$UShort3_instance;
  }
  var VarType$UShort4_instance;
  function VarType$UShort4_getInstance() {
    VarType_initFields();
    return VarType$UShort4_instance;
  }
  var VarType$SInt1_instance;
  function VarType$SInt1_getInstance() {
    VarType_initFields();
    return VarType$SInt1_instance;
  }
  var VarType$SInt2_instance;
  function VarType$SInt2_getInstance() {
    VarType_initFields();
    return VarType$SInt2_instance;
  }
  var VarType$SInt3_instance;
  function VarType$SInt3_getInstance() {
    VarType_initFields();
    return VarType$SInt3_instance;
  }
  var VarType$SInt4_instance;
  function VarType$SInt4_getInstance() {
    VarType_initFields();
    return VarType$SInt4_instance;
  }
  function VarType$Companion() {
    VarType$Companion_instance = this;
  }
  VarType$Companion.prototype.BYTE_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$SByte1_getInstance();
      case 2:
        return VarType$SByte2_getInstance();
      case 3:
        return VarType$SByte3_getInstance();
      case 4:
        return VarType$SByte4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.UBYTE_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$UByte1_getInstance();
      case 2:
        return VarType$UByte2_getInstance();
      case 3:
        return VarType$UByte3_getInstance();
      case 4:
        return VarType$UByte4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.SHORT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$SShort1_getInstance();
      case 2:
        return VarType$SShort2_getInstance();
      case 3:
        return VarType$SShort3_getInstance();
      case 4:
        return VarType$SShort4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.USHORT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$UShort1_getInstance();
      case 2:
        return VarType$UShort2_getInstance();
      case 3:
        return VarType$UShort3_getInstance();
      case 4:
        return VarType$UShort4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.INT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$SInt1_getInstance();
      case 2:
        return VarType$SInt2_getInstance();
      case 3:
        return VarType$SInt3_getInstance();
      case 4:
        return VarType$SInt4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.FLOAT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$Float1_getInstance();
      case 2:
        return VarType$Float2_getInstance();
      case 3:
        return VarType$Float3_getInstance();
      case 4:
        return VarType$Float4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VarType$Companion_instance = null;
  function VarType$Companion_getInstance() {
    VarType_initFields();
    if (VarType$Companion_instance === null) {
      new VarType$Companion();
    }
    return VarType$Companion_instance;
  }
  VarType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarType',
    interfaces: [Enum]
  };
  function VarType$values() {
    return [VarType$TVOID_getInstance(), VarType$Mat2_getInstance(), VarType$Mat3_getInstance(), VarType$Mat4_getInstance(), VarType$TextureUnit_getInstance(), VarType$Int1_getInstance(), VarType$Float1_getInstance(), VarType$Float2_getInstance(), VarType$Float3_getInstance(), VarType$Float4_getInstance(), VarType$Short1_getInstance(), VarType$Short2_getInstance(), VarType$Short3_getInstance(), VarType$Short4_getInstance(), VarType$Bool1_getInstance(), VarType$Byte4_getInstance(), VarType$SByte1_getInstance(), VarType$SByte2_getInstance(), VarType$SByte3_getInstance(), VarType$SByte4_getInstance(), VarType$UByte1_getInstance(), VarType$UByte2_getInstance(), VarType$UByte3_getInstance(), VarType$UByte4_getInstance(), VarType$SShort1_getInstance(), VarType$SShort2_getInstance(), VarType$SShort3_getInstance(), VarType$SShort4_getInstance(), VarType$UShort1_getInstance(), VarType$UShort2_getInstance(), VarType$UShort3_getInstance(), VarType$UShort4_getInstance(), VarType$SInt1_getInstance(), VarType$SInt2_getInstance(), VarType$SInt3_getInstance(), VarType$SInt4_getInstance()];
  }
  VarType.values = VarType$values;
  function VarType$valueOf(name) {
    switch (name) {
      case 'TVOID':
        return VarType$TVOID_getInstance();
      case 'Mat2':
        return VarType$Mat2_getInstance();
      case 'Mat3':
        return VarType$Mat3_getInstance();
      case 'Mat4':
        return VarType$Mat4_getInstance();
      case 'TextureUnit':
        return VarType$TextureUnit_getInstance();
      case 'Int1':
        return VarType$Int1_getInstance();
      case 'Float1':
        return VarType$Float1_getInstance();
      case 'Float2':
        return VarType$Float2_getInstance();
      case 'Float3':
        return VarType$Float3_getInstance();
      case 'Float4':
        return VarType$Float4_getInstance();
      case 'Short1':
        return VarType$Short1_getInstance();
      case 'Short2':
        return VarType$Short2_getInstance();
      case 'Short3':
        return VarType$Short3_getInstance();
      case 'Short4':
        return VarType$Short4_getInstance();
      case 'Bool1':
        return VarType$Bool1_getInstance();
      case 'Byte4':
        return VarType$Byte4_getInstance();
      case 'SByte1':
        return VarType$SByte1_getInstance();
      case 'SByte2':
        return VarType$SByte2_getInstance();
      case 'SByte3':
        return VarType$SByte3_getInstance();
      case 'SByte4':
        return VarType$SByte4_getInstance();
      case 'UByte1':
        return VarType$UByte1_getInstance();
      case 'UByte2':
        return VarType$UByte2_getInstance();
      case 'UByte3':
        return VarType$UByte3_getInstance();
      case 'UByte4':
        return VarType$UByte4_getInstance();
      case 'SShort1':
        return VarType$SShort1_getInstance();
      case 'SShort2':
        return VarType$SShort2_getInstance();
      case 'SShort3':
        return VarType$SShort3_getInstance();
      case 'SShort4':
        return VarType$SShort4_getInstance();
      case 'UShort1':
        return VarType$UShort1_getInstance();
      case 'UShort2':
        return VarType$UShort2_getInstance();
      case 'UShort3':
        return VarType$UShort3_getInstance();
      case 'UShort4':
        return VarType$UShort4_getInstance();
      case 'SInt1':
        return VarType$SInt1_getInstance();
      case 'SInt2':
        return VarType$SInt2_getInstance();
      case 'SInt3':
        return VarType$SInt3_getInstance();
      case 'SInt4':
        return VarType$SInt4_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.VarType.' + name);
    }
  }
  VarType.valueOf_61zpoe$ = VarType$valueOf;
  function ShaderType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShaderType_initFields() {
    ShaderType_initFields = function () {
    };
    ShaderType$VERTEX_instance = new ShaderType('VERTEX', 0);
    ShaderType$FRAGMENT_instance = new ShaderType('FRAGMENT', 1);
  }
  var ShaderType$VERTEX_instance;
  function ShaderType$VERTEX_getInstance() {
    ShaderType_initFields();
    return ShaderType$VERTEX_instance;
  }
  var ShaderType$FRAGMENT_instance;
  function ShaderType$FRAGMENT_getInstance() {
    ShaderType_initFields();
    return ShaderType$FRAGMENT_instance;
  }
  ShaderType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderType',
    interfaces: [Enum]
  };
  function ShaderType$values() {
    return [ShaderType$VERTEX_getInstance(), ShaderType$FRAGMENT_getInstance()];
  }
  ShaderType.values = ShaderType$values;
  function ShaderType$valueOf(name) {
    switch (name) {
      case 'VERTEX':
        return ShaderType$VERTEX_getInstance();
      case 'FRAGMENT':
        return ShaderType$FRAGMENT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.ShaderType.' + name);
    }
  }
  ShaderType.valueOf_61zpoe$ = ShaderType$valueOf;
  function Operand(type) {
    this.type = type;
  }
  Operand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operand',
    interfaces: []
  };
  function Variable(name, type, arrayCount) {
    Operand.call(this, type);
    this.name = name;
    this.arrayCount = arrayCount;
    var array = Array_0(this.arrayCount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = this.name + '[' + i + ']';
    }
    this.indexNames = array;
    this.id = 0;
    this.data = null;
  }
  Variable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Variable',
    interfaces: [Operand]
  };
  function Variable_init(name, type, $this) {
    $this = $this || Object.create(Variable.prototype);
    Variable.call($this, name, type, 1);
    return $this;
  }
  function Attribute(name, type, normalized, offset, active) {
    if (offset === void 0)
      offset = null;
    if (active === void 0)
      active = true;
    Variable_init(name, type, this);
    this.normalized = normalized;
    this.offset = offset;
    this.active = active;
  }
  Attribute.prototype.inactived = function () {
    return new Attribute(this.name, this.type, this.normalized, null, false);
  };
  Attribute.prototype.toString = function () {
    return 'Attribute(' + this.name + ')';
  };
  Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: [Variable]
  };
  function Attribute_init(name, type, normalized, $this) {
    $this = $this || Object.create(Attribute.prototype);
    Attribute.call($this, name, type, normalized, null, true);
    return $this;
  }
  function Varying(name, type, arrayCount) {
    Variable.call(this, name, type, arrayCount);
  }
  Varying.prototype.toString = function () {
    return 'Varying(' + this.name + ')';
  };
  Varying.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Varying',
    interfaces: [Variable]
  };
  function Varying_init(name, type, $this) {
    $this = $this || Object.create(Varying.prototype);
    Varying.call($this, name, type, 1);
    return $this;
  }
  function Uniform(name, type, arrayCount) {
    Variable.call(this, name, type, arrayCount);
  }
  Uniform.prototype.toString = function () {
    return 'Uniform(' + this.name + ')';
  };
  Uniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Uniform',
    interfaces: [Variable]
  };
  function Uniform_init(name, type, $this) {
    $this = $this || Object.create(Uniform.prototype);
    Uniform.call($this, name, type, 1);
    return $this;
  }
  function Temp(id, type, arrayCount) {
    Variable.call(this, 'temp' + id, type, arrayCount);
  }
  Temp.prototype.toString = function () {
    return 'Temp(' + this.name + ')';
  };
  Temp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Temp',
    interfaces: [Variable]
  };
  function Temp_init(id, type, $this) {
    $this = $this || Object.create(Temp.prototype);
    Temp.call($this, id, type, 1);
    return $this;
  }
  function Output() {
    Output_instance = this;
    Variable_init('out', VarType$Float4_getInstance(), this);
  }
  Output.prototype.toString = function () {
    return 'Output';
  };
  Output.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Output',
    interfaces: [Variable]
  };
  var Output_instance = null;
  function Output_getInstance() {
    if (Output_instance === null) {
      new Output();
    }
    return Output_instance;
  }
  function Program(vertex, fragment, name) {
    if (name === void 0)
      name = 'program';
    this.vertex = vertex;
    this.fragment = fragment;
    this.name = name;
    this.uniforms = plus(this.vertex.uniforms, this.fragment.uniforms);
    this.attributes = plus(this.vertex.attributes, this.fragment.attributes);
  }
  Program.prototype.close = function () {
  };
  Program.prototype.toString = function () {
    var tmp$ = 'Program(name=' + this.name + ', attributes=';
    var $receiver = this.attributes;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.name);
    }
    var tmp$_1 = tmp$ + destination + ', uniforms=';
    var $receiver_0 = this.uniforms;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(item_0.name);
    }
    return tmp$_1 + destination_0 + ')';
  };
  function Program$Binop(left, op, right) {
    Operand.call(this, left.type);
    this.left = left;
    this.op = op;
    this.right = right;
  }
  Program$Binop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binop',
    interfaces: [Operand]
  };
  function Program$IntLiteral(value) {
    Operand.call(this, VarType$Int1_getInstance());
    this.value = value;
  }
  Program$IntLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntLiteral',
    interfaces: [Operand]
  };
  function Program$FloatLiteral(value) {
    Operand.call(this, VarType$Float1_getInstance());
    this.value = value;
  }
  Program$FloatLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatLiteral',
    interfaces: [Operand]
  };
  function Program$BoolLiteral(value) {
    Operand.call(this, VarType$Bool1_getInstance());
    this.value = value;
  }
  Program$BoolLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolLiteral',
    interfaces: [Operand]
  };
  function Program$Vector(type, ops) {
    Operand.call(this, type);
    this.ops = ops;
  }
  Program$Vector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector',
    interfaces: [Operand]
  };
  function Program$Swizzle(left, swizzle) {
    Operand.call(this, left.type);
    this.left = left;
    this.swizzle = swizzle;
  }
  Program$Swizzle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Swizzle',
    interfaces: [Operand]
  };
  function Program$ArrayAccess(left, index) {
    Operand.call(this, left.type);
    this.left = left;
    this.index = index;
  }
  Program$ArrayAccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayAccess',
    interfaces: [Operand]
  };
  function Program$Func(name, ops) {
    Operand.call(this, VarType$Float1_getInstance());
    this.name = name;
    this.ops = ops;
  }
  Program$Func.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Func',
    interfaces: [Operand]
  };
  function Program$Program$Func_init(name, ops, $this) {
    $this = $this || Object.create(Program$Func.prototype);
    Program$Func.call($this, name, toList(ops));
    return $this;
  }
  function Program$Stm() {
  }
  function Program$Stm$Stms(stms) {
    Program$Stm.call(this);
    this.stms = stms;
  }
  Program$Stm$Stms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stms',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Set(to, from) {
    Program$Stm.call(this);
    this.to = to;
    this.from = from;
  }
  Program$Stm$Set.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Set',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Discard() {
    Program$Stm.call(this);
  }
  Program$Stm$Discard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Discard',
    interfaces: [Program$Stm]
  };
  function Program$Stm$If(cond, tbody, fbody) {
    if (fbody === void 0)
      fbody = null;
    Program$Stm.call(this);
    this.cond = cond;
    this.tbody = tbody;
    this.fbody = fbody;
  }
  Program$Stm$If.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'If',
    interfaces: [Program$Stm]
  };
  Program$Stm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stm',
    interfaces: []
  };
  function Program$Builder(type) {
    this.type = type;
    this.outputStms = ArrayList_init();
    this.tempLastId_0 = 3;
    this.out = Output_getInstance();
  }
  Program$Builder.prototype.ELSE_q23b5m$ = function ($receiver, callback) {
    var body = new Program$Builder(this.type);
    callback(body);
    $receiver.fbody = new Program$Stm$Stms(body.outputStms);
  };
  Program$Builder.prototype.IF_4dsix7$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korag.shader.Program.Builder.IF_4dsix7$', wrapFunction(function () {
    var Program$Program$Builder_init = _.com.soywiz.korag.shader.Program.Builder;
    var Program$Stm$Program$Stm$Stms_init = _.com.soywiz.korag.shader.Program.Stm.Stms;
    var Program$Stm$Program$Stm$If_init = _.com.soywiz.korag.shader.Program.Stm.If;
    return function (cond, callback) {
      var body = new Program$Program$Builder_init(this.type);
      callback(body);
      var stmIf = new Program$Stm$Program$Stm$If_init(cond, new Program$Stm$Program$Stm$Stms_init(body.outputStms));
      this.outputStms.add_11rb$(stmIf);
      return stmIf;
    };
  }));
  Program$Builder.prototype.SET_q0hzsk$ = function (target, expr) {
    var $receiver = this.outputStms;
    var element = new Program$Stm$Set(target, expr);
    $receiver.add_11rb$(element);
  };
  Program$Builder.prototype.DISCARD = function () {
    var $receiver = this.outputStms;
    var element = new Program$Stm$Discard();
    $receiver.add_11rb$(element);
  };
  Program$Builder.prototype.createTemp_894lkq$ = function (type, arrayCount) {
    var tmp$;
    return new Temp((tmp$ = this.tempLastId_0, this.tempLastId_0 = tmp$ + 1 | 0, tmp$), type, arrayCount);
  };
  Program$Builder.prototype.createTemp_b2kxjc$ = function (type) {
    var tmp$;
    return new Temp((tmp$ = this.tempLastId_0, this.tempLastId_0 = tmp$ + 1 | 0, tmp$), type, 1);
  };
  Program$Builder.prototype.set_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.setTo_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.assign_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.sin_dq1c34$ = function (arg) {
    return Program$Program$Func_init('sin', [arg]);
  };
  Program$Builder.prototype.cos_dq1c34$ = function (arg) {
    return Program$Program$Func_init('cos', [arg]);
  };
  Program$Builder.prototype.tan_dq1c34$ = function (arg) {
    return Program$Program$Func_init('tan', [arg]);
  };
  Program$Builder.prototype.asin_dq1c34$ = function (arg) {
    return Program$Program$Func_init('asin', [arg]);
  };
  Program$Builder.prototype.acos_dq1c34$ = function (arg) {
    return Program$Program$Func_init('acos', [arg]);
  };
  Program$Builder.prototype.atan_dq1c34$ = function (arg) {
    return Program$Program$Func_init('atan', [arg]);
  };
  Program$Builder.prototype.radians_dq1c34$ = function (arg) {
    return Program$Program$Func_init('radians', [arg]);
  };
  Program$Builder.prototype.degrees_dq1c34$ = function (arg) {
    return Program$Program$Func_init('degrees', [arg]);
  };
  Program$Builder.prototype.texture2D_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('texture2D', [a, b]);
  };
  Program$Builder.prototype.func_ohzs2t$ = function (name, args) {
    var destination = ArrayList_init_0(args.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== args.length; ++tmp$) {
      var item = args[tmp$];
      destination.add_11rb$(item);
    }
    return Program$Program$Func_init(name, copyToArray(destination).slice());
  };
  Program$Builder.prototype.pow_q0hzsk$ = function (b, e) {
    return Program$Program$Func_init('pow', [b, e]);
  };
  Program$Builder.prototype.exp_dq1c34$ = function (v) {
    return Program$Program$Func_init('exp', [v]);
  };
  Program$Builder.prototype.exp2_dq1c34$ = function (v) {
    return Program$Program$Func_init('exp2', [v]);
  };
  Program$Builder.prototype.log_dq1c34$ = function (v) {
    return Program$Program$Func_init('log', [v]);
  };
  Program$Builder.prototype.log2_dq1c34$ = function (v) {
    return Program$Program$Func_init('log2', [v]);
  };
  Program$Builder.prototype.sqrt_dq1c34$ = function (v) {
    return Program$Program$Func_init('sqrt', [v]);
  };
  Program$Builder.prototype.inversesqrt_dq1c34$ = function (v) {
    return Program$Program$Func_init('inversesqrt', [v]);
  };
  Program$Builder.prototype.abs_dq1c34$ = function (v) {
    return Program$Program$Func_init('abs', [v]);
  };
  Program$Builder.prototype.sign_dq1c34$ = function (v) {
    return Program$Program$Func_init('sign', [v]);
  };
  Program$Builder.prototype.ceil_dq1c34$ = function (v) {
    return Program$Program$Func_init('ceil', [v]);
  };
  Program$Builder.prototype.floor_dq1c34$ = function (v) {
    return Program$Program$Func_init('floor', [v]);
  };
  Program$Builder.prototype.fract_dq1c34$ = function (v) {
    return Program$Program$Func_init('fract', [v]);
  };
  Program$Builder.prototype.clamp_qzk4o8$ = function (v, min, max) {
    return Program$Program$Func_init('clamp', [v, min, max]);
  };
  Program$Builder.prototype.min_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('min', [a, b]);
  };
  Program$Builder.prototype.max_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('max', [a, b]);
  };
  Program$Builder.prototype.mod_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('mod', [a, b]);
  };
  Program$Builder.prototype.mix_qzk4o8$ = function (a, b, step) {
    return Program$Program$Func_init('mix', [a, b, step]);
  };
  Program$Builder.prototype.step_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('step', [a, b]);
  };
  Program$Builder.prototype.smoothstep_qzk4o8$ = function (a, b, c) {
    return Program$Program$Func_init('smoothstep', [a, b, c]);
  };
  Program$Builder.prototype.length_dq1c34$ = function (a) {
    return Program$Program$Func_init('length', [a]);
  };
  Program$Builder.prototype.distance_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('distance', [a, b]);
  };
  Program$Builder.prototype.dot_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('dot', [a, b]);
  };
  Program$Builder.prototype.cross_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('cross', [a, b]);
  };
  Program$Builder.prototype.normalize_dq1c34$ = function (a) {
    return Program$Program$Func_init('normalize', [a]);
  };
  Program$Builder.prototype.faceforward_qzk4o8$ = function (a, b, c) {
    return Program$Program$Func_init('faceforward', [a, b, c]);
  };
  Program$Builder.prototype.reflect_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('reflect', [a, b]);
  };
  Program$Builder.prototype.refract_qzk4o8$ = function (a, b, c) {
    return Program$Program$Func_init('refract', [a, b, c]);
  };
  Program$Builder.prototype.get_lit_s8ev3n$ = function ($receiver) {
    return new Program$IntLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_yrwdxr$ = function ($receiver) {
    return new Program$FloatLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_81szk$ = function ($receiver) {
    return new Program$FloatLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_1v8dcc$ = function ($receiver) {
    return new Program$BoolLiteral($receiver);
  };
  Program$Builder.prototype.lit_7ox3bl$ = function (type, ops) {
    var tmp$;
    return new Program$Vector(type, Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec1_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float1_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec2_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float2_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec3_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float3_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec4_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float4_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.get_x14fz$ = function ($receiver, index) {
    var tmp$;
    if ($receiver.type.isMatrix)
      tmp$ = new Program$ArrayAccess($receiver, this.get_lit_s8ev3n$(index));
    else {
      switch (index) {
        case 0:
          tmp$ = this.get_x_rix7j$($receiver);
          break;
        case 1:
          tmp$ = this.get_y_rix7j$($receiver);
          break;
        case 2:
          tmp$ = this.get_z_rix7j$($receiver);
          break;
        case 3:
          tmp$ = this.get_w_rix7j$($receiver);
          break;
        default:throw IllegalStateException_init(('Invalid index ' + index).toString());
      }
    }
    return tmp$;
  };
  Program$Builder.prototype.get_hhgt4v$ = function ($receiver, swizzle) {
    return new Program$Swizzle($receiver, swizzle);
  };
  Program$Builder.prototype.get_x_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'x');
  };
  Program$Builder.prototype.get_y_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'y');
  };
  Program$Builder.prototype.get_z_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'z');
  };
  Program$Builder.prototype.get_w_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'w');
  };
  Program$Builder.prototype.get_r_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'x');
  };
  Program$Builder.prototype.get_g_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'y');
  };
  Program$Builder.prototype.get_b_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'z');
  };
  Program$Builder.prototype.get_a_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'w');
  };
  Program$Builder.prototype.unaryMinus_rix7j$ = function ($receiver) {
    return this.minus_2oogdr$(this.get_lit_yrwdxr$(0.0), $receiver);
  };
  Program$Builder.prototype.minus_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '-', that);
  };
  Program$Builder.prototype.plus_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '+', that);
  };
  Program$Builder.prototype.times_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '*', that);
  };
  Program$Builder.prototype.div_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '/', that);
  };
  Program$Builder.prototype.rem_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '%', that);
  };
  Program$Builder.prototype.eq_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '==', that);
  };
  Program$Builder.prototype.ne_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '!=', that);
  };
  Program$Builder.prototype.lt_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '<', that);
  };
  Program$Builder.prototype.le_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '<=', that);
  };
  Program$Builder.prototype.gt_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '>', that);
  };
  Program$Builder.prototype.ge_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '>=', that);
  };
  Program$Builder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Builder',
    interfaces: []
  };
  function Program$Visitor(default_0) {
    this.default = default_0;
  }
  Program$Visitor.prototype.visit_57b21j$ = function (stm) {
    if (Kotlin.isType(stm, Program$Stm$Stms))
      this.visit_1xgyq4$(stm);
    else if (Kotlin.isType(stm, Program$Stm$Set))
      this.visit_tq3hhf$(stm);
    else if (Kotlin.isType(stm, Program$Stm$If))
      this.visit_ceyg7y$(stm);
    else if (Kotlin.isType(stm, Program$Stm$Discard))
      this.visit_d6ige1$(stm);
    else
      Kotlin.noWhenBranchMatched();
  };
  Program$Visitor.prototype.visit_1xgyq4$ = function (stms) {
    var tmp$;
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_57b21j$(stm);
    }
  };
  Program$Visitor.prototype.visit_ceyg7y$ = function (stm) {
    this.visit_dq1c34$(stm.cond);
    this.visit_57b21j$(stm.tbody);
  };
  Program$Visitor.prototype.visit_tq3hhf$ = function (stm) {
    this.visit_dq1c34$(stm.from);
    this.visit_dq1c34$(stm.to);
  };
  Program$Visitor.prototype.visit_d6ige1$ = function (stm) {
  };
  Program$Visitor.prototype.visit_dq1c34$ = function (operand) {
    if (Kotlin.isType(operand, Variable))
      return this.visit_bmfbl7$(operand);
    else if (Kotlin.isType(operand, Program$Binop))
      return this.visit_s5t3yz$(operand);
    else if (Kotlin.isType(operand, Program$BoolLiteral))
      return this.visit_zamv4y$(operand);
    else if (Kotlin.isType(operand, Program$IntLiteral))
      return this.visit_jod55v$(operand);
    else if (Kotlin.isType(operand, Program$FloatLiteral))
      return this.visit_u1pe22$(operand);
    else if (Kotlin.isType(operand, Program$Vector))
      return this.visit_b87eze$(operand);
    else if (Kotlin.isType(operand, Program$Swizzle))
      return this.visit_sbsglh$(operand);
    else if (Kotlin.isType(operand, Program$ArrayAccess))
      return this.visit_5pi8d6$(operand);
    else if (Kotlin.isType(operand, Program$Func))
      return this.visit_j8ixcp$(operand);
    else
      return invalidOp("Don't know how to visit operand " + operand);
  };
  Program$Visitor.prototype.visit_j8ixcp$ = function (func) {
    var tmp$;
    tmp$ = func.ops.iterator();
    while (tmp$.hasNext()) {
      var op = tmp$.next();
      this.visit_dq1c34$(op);
    }
    return this.default;
  };
  Program$Visitor.prototype.visit_bmfbl7$ = function (operand) {
    if (Kotlin.isType(operand, Attribute))
      return this.visit_3kqgd9$(operand);
    else if (Kotlin.isType(operand, Varying))
      return this.visit_b38853$(operand);
    else if (Kotlin.isType(operand, Uniform))
      return this.visit_2f4vi3$(operand);
    else if (Kotlin.isType(operand, Output))
      return this.visit_e3ui06$(operand);
    else if (Kotlin.isType(operand, Temp))
      return this.visit_nykr6b$(operand);
    else
      return invalidOp("Don't know how to visit basename " + operand);
  };
  Program$Visitor.prototype.visit_nykr6b$ = function (temp) {
    return this.default;
  };
  Program$Visitor.prototype.visit_3kqgd9$ = function (attribute) {
    return this.default;
  };
  Program$Visitor.prototype.visit_b38853$ = function (varying) {
    return this.default;
  };
  Program$Visitor.prototype.visit_2f4vi3$ = function (uniform) {
    return this.default;
  };
  Program$Visitor.prototype.visit_e3ui06$ = function (output) {
    return this.default;
  };
  Program$Visitor.prototype.visit_s5t3yz$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    this.visit_dq1c34$(operand.right);
    return this.default;
  };
  Program$Visitor.prototype.visit_sbsglh$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    return this.default;
  };
  Program$Visitor.prototype.visit_5pi8d6$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    this.visit_dq1c34$(operand.index);
    return this.default;
  };
  Program$Visitor.prototype.visit_b87eze$ = function (operand) {
    var tmp$, tmp$_0;
    tmp$ = operand.ops;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var op = tmp$[tmp$_0];
      this.visit_dq1c34$(op);
    }
    return this.default;
  };
  Program$Visitor.prototype.visit_jod55v$ = function (operand) {
    return this.default;
  };
  Program$Visitor.prototype.visit_u1pe22$ = function (operand) {
    return this.default;
  };
  Program$Visitor.prototype.visit_zamv4y$ = function (operand) {
    return this.default;
  };
  Program$Visitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Visitor',
    interfaces: []
  };
  Program.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Program',
    interfaces: [Closeable]
  };
  function Shader(type, stm) {
    this.type = type;
    this.stm = stm;
    var $receiver = LinkedHashSet_init();
    (new Shader$uniforms$lambda$ObjectLiteral($receiver, Unit)).visit_57b21j$(this.stm);
    this.uniforms = toSet($receiver);
    var $receiver_0 = LinkedHashSet_init();
    (new Shader$attributes$lambda$ObjectLiteral($receiver_0, Unit)).visit_57b21j$(this.stm);
    this.attributes = toSet($receiver_0);
  }
  function Shader$uniforms$lambda$ObjectLiteral(closure$out, default_0) {
    this.closure$out = closure$out;
    Program$Visitor.call(this, default_0);
  }
  Shader$uniforms$lambda$ObjectLiteral.prototype.visit_2f4vi3$ = function (uniform) {
    this.closure$out;
    this.closure$out.add_11rb$(uniform);
  };
  Shader$uniforms$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Program$Visitor]
  };
  function Shader$attributes$lambda$ObjectLiteral(closure$out, default_0) {
    this.closure$out = closure$out;
    Program$Visitor.call(this, default_0);
  }
  Shader$attributes$lambda$ObjectLiteral.prototype.visit_3kqgd9$ = function (attribute) {
    this.closure$out;
    this.closure$out.add_11rb$(attribute);
  };
  Shader$attributes$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Program$Visitor]
  };
  Shader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shader',
    interfaces: []
  };
  function VertexShader(stm) {
    Shader.call(this, ShaderType$VERTEX_getInstance(), stm);
  }
  VertexShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexShader',
    interfaces: [Shader]
  };
  function FragmentShader(stm) {
    Shader.call(this, ShaderType$FRAGMENT_getInstance(), stm);
  }
  FragmentShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FragmentShader',
    interfaces: [Shader]
  };
  function appending($receiver, callback) {
    return new FragmentShader(new Program$Stm$Stms(listOf([$receiver.stm, FragmentShader_0(callback).stm])));
  }
  function VertexShader_0(callback) {
    var builder = new Program$Builder(ShaderType$VERTEX_getInstance());
    callback(builder);
    return new VertexShader(new Program$Stm$Stms(builder.outputStms));
  }
  function FragmentShader_0(callback) {
    var builder = new Program$Builder(ShaderType$FRAGMENT_getInstance());
    callback(builder);
    return new FragmentShader(new Program$Stm$Stms(builder.outputStms));
  }
  function VertexLayout(attr, layoutSize) {
    this.layoutSize_0 = layoutSize;
    this.myattr_0 = attr;
    this.attributes = attr;
    this._lastPos_0 = 0;
    var $receiver = this.myattr_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var a = item.type.kind.bytesSize;
      tmp$_0.call(destination, a <= 1 ? 1 : a);
    }
    this.alignments = destination;
    var $receiver_0 = this.myattr_0;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      if (item_0.offset != null) {
        this._lastPos_0 = item_0.offset;
      }
       else {
        this._lastPos_0 = nextAlignedTo(this._lastPos_0, item_0.type.kind.bytesSize);
      }
      var out = this._lastPos_0;
      this._lastPos_0 = this._lastPos_0 + item_0.type.bytesSize | 0;
      tmp$_2.call(destination_0, out);
    }
    this.attributePositions = destination_0;
    var tmp$_3;
    this.maxAlignment = (tmp$_3 = max(this.alignments)) != null ? tmp$_3 : 1;
    var tmp$_4;
    this.totalSize = (tmp$_4 = this.layoutSize_0) != null ? tmp$_4 : nextAlignedTo(this._lastPos_0, this.maxAlignment);
  }
  VertexLayout.prototype.toString = function () {
    var $receiver = this.myattr_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    return 'VertexLayout[' + joinToString(destination, ', ') + ']';
  };
  VertexLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexLayout',
    interfaces: []
  };
  function VertexLayout_init(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, attributes, null);
    return $this;
  }
  function VertexLayout_init_0(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList(attributes), null);
    return $this;
  }
  function VertexLayout_init_1(attributes, layoutSize, $this) {
    if (layoutSize === void 0)
      layoutSize = null;
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList(attributes), layoutSize);
    return $this;
  }
  function AGFactorySoftware() {
    this.supportsNativeFrame_tmfibi$_0 = false;
  }
  Object.defineProperty(AGFactorySoftware.prototype, 'supportsNativeFrame', {
    get: function () {
      return this.supportsNativeFrame_tmfibi$_0;
    }
  });
  AGFactorySoftware.prototype.create_iozxf8$ = function (nativeControl, config) {
    var tmp$, tmp$_0;
    return new AGSoftware((tmp$_0 = Kotlin.isType(tmp$ = nativeControl, Bitmap32) ? tmp$ : null) != null ? tmp$_0 : new Bitmap32(640, 480));
  };
  AGFactorySoftware.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  AGFactorySoftware.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGFactorySoftware',
    interfaces: [AGFactory]
  };
  function AGSoftware(bitmap) {
    AG.call(this);
    this.bitmap = bitmap;
    this.nativeComponent_wz502q$_0 = this.bitmap;
    this.ready();
  }
  Object.defineProperty(AGSoftware.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_wz502q$_0;
    }
  });
  AGSoftware.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGSoftware',
    interfaces: [AG]
  };
  function EventDispatcher() {
    EventDispatcher$Companion_getInstance();
  }
  EventDispatcher.prototype.copyFrom_qquois$ = function (other) {
  };
  function EventDispatcher$Mixin() {
    this.handlers_kcnnde$_0 = null;
  }
  EventDispatcher$Mixin.prototype.getHandlersFor_tu2jiv$_0 = function (clazz) {
    var tmp$, tmp$_0;
    if (this.handlers_kcnnde$_0 == null)
      return null;
    return (tmp$_0 = (tmp$ = this.handlers_kcnnde$_0) != null ? tmp$.get_11rb$(clazz) : null) == null || Kotlin.isType(tmp$_0, ArrayList) ? tmp$_0 : null;
  };
  EventDispatcher$Mixin.prototype.getHandlersForCreate_5hfomz$_0 = function (clazz) {
    var tmp$;
    if (this.handlers_kcnnde$_0 == null)
      this.handlers_kcnnde$_0 = LinkedHashMap_init();
    var $receiver = ensureNotNull(this.handlers_kcnnde$_0);
    var tmp$_0;
    var value = $receiver.get_11rb$(clazz);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(clazz, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, ArrayList) ? tmp$ : throwCCE();
  };
  function EventDispatcher$Mixin$addEventListener$lambda(closure$handlers, closure$handler) {
    return function () {
      var $receiver = closure$handlers;
      var element = closure$handler;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  EventDispatcher$Mixin.prototype.addEventListener_xa594f$ = function (clazz, handler) {
    var handlers = this.getHandlersForCreate_5hfomz$_0(clazz);
    handlers.add_11rb$(handler);
    return Closeable.Companion.invoke_o14v8n$(EventDispatcher$Mixin$addEventListener$lambda(handlers, handler));
  };
  EventDispatcher$Mixin.prototype.copyFrom_qquois$ = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    (tmp$ = this.handlers_kcnnde$_0) != null ? (tmp$.clear(), Unit) : null;
    if (Kotlin.isType(other, EventDispatcher$Mixin)) {
      var otherHandlers = other.handlers_kcnnde$_0;
      if (otherHandlers != null) {
        tmp$_0 = otherHandlers.entries.iterator();
        while (tmp$_0.hasNext()) {
          var tmp$_2 = tmp$_0.next();
          var clazz = tmp$_2.key;
          var events = tmp$_2.value;
          tmp$_1 = events.iterator();
          while (tmp$_1.hasNext()) {
            var event = tmp$_1.next();
            this.addEventListener_xa594f$(clazz, event);
          }
        }
      }
    }
  };
  EventDispatcher$Mixin.prototype.dispatch_nipq8w$ = function (clazz, event) {
    var tmp$;
    if (this.handlers_kcnnde$_0 == null)
      return;
    if ((tmp$ = this.getHandlersFor_tu2jiv$_0(clazz)) != null) {
      var tmp$_0;
      var n = 0;
      while (n < tmp$.size) {
        tmp$.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0))(event);
      }
    }
  };
  EventDispatcher$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [EventDispatcher]
  };
  function EventDispatcher$Companion() {
    EventDispatcher$Companion_instance = this;
  }
  EventDispatcher$Companion.prototype.invoke = function () {
    return new EventDispatcher$Mixin();
  };
  EventDispatcher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EventDispatcher$Companion_instance = null;
  function EventDispatcher$Companion_getInstance() {
    if (EventDispatcher$Companion_instance === null) {
      new EventDispatcher$Companion();
    }
    return EventDispatcher$Companion_instance;
  }
  EventDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventDispatcher',
    interfaces: []
  };
  function DummyEventDispatcher() {
    DummyEventDispatcher_instance = this;
  }
  DummyEventDispatcher.prototype.close = function () {
  };
  DummyEventDispatcher.prototype.addEventListener_xa594f$ = function (clazz, handler) {
    return this;
  };
  DummyEventDispatcher.prototype.dispatch_nipq8w$ = function (clazz, event) {
  };
  DummyEventDispatcher.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyEventDispatcher',
    interfaces: [Closeable, EventDispatcher]
  };
  var DummyEventDispatcher_instance = null;
  function DummyEventDispatcher_getInstance() {
    if (DummyEventDispatcher_instance === null) {
      new DummyEventDispatcher();
    }
    return DummyEventDispatcher_instance;
  }
  var addEventListener = defineInlineFunction('korgw-root-korgw.com.soywiz.korev.addEventListener_f5v43j$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, handler) {
      return $receiver.addEventListener_xa594f$(getKClass(T_0), handler);
    };
  }));
  var dispatch = defineInlineFunction('korgw-root-korgw.com.soywiz.korev.dispatch_jt1ots$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, event) {
      $receiver.dispatch_nipq8w$(getKClass(T_0), event);
    };
  }));
  var invoke = defineInlineFunction('korgw-root-korgw.com.soywiz.korev.invoke_t8hnd5$', function ($receiver, callback) {
    callback($receiver);
    return $receiver;
  });
  function Event() {
    this.target = null;
  }
  Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  function preventDefault($receiver, reason) {
    if (reason === void 0)
      reason = null;
    throw new PreventDefaultException(reason);
  }
  function preventDefault_0(reason) {
    if (reason === void 0)
      reason = null;
    throw new PreventDefaultException(reason);
  }
  function PreventDefaultException(reason) {
    if (reason === void 0)
      reason = null;
    Exception_init(this);
    this.reason = reason;
    this.name = 'PreventDefaultException';
  }
  PreventDefaultException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreventDefaultException',
    interfaces: [Exception]
  };
  function MouseEvent(type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    if (type === void 0)
      type = MouseEvent$Type$MOVE_getInstance();
    if (id === void 0)
      id = 0;
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (button === void 0)
      button = MouseButton$LEFT_getInstance();
    if (buttons === void 0)
      buttons = 0;
    if (scrollDeltaX === void 0)
      scrollDeltaX = 0.0;
    if (scrollDeltaY === void 0)
      scrollDeltaY = 0.0;
    if (scrollDeltaZ === void 0)
      scrollDeltaZ = 0.0;
    if (isShiftDown === void 0)
      isShiftDown = false;
    if (isCtrlDown === void 0)
      isCtrlDown = false;
    if (isAltDown === void 0)
      isAltDown = false;
    if (isMetaDown === void 0)
      isMetaDown = false;
    if (scaleCoords === void 0)
      scaleCoords = true;
    Event.call(this);
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
    this.button = button;
    this.buttons = buttons;
    this.scrollDeltaX = scrollDeltaX;
    this.scrollDeltaY = scrollDeltaY;
    this.scrollDeltaZ = scrollDeltaZ;
    this.isShiftDown = isShiftDown;
    this.isCtrlDown = isCtrlDown;
    this.isAltDown = isAltDown;
    this.isMetaDown = isMetaDown;
    this.scaleCoords = scaleCoords;
  }
  function MouseEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseEvent$Type_initFields() {
    MouseEvent$Type_initFields = function () {
    };
    MouseEvent$Type$MOVE_instance = new MouseEvent$Type('MOVE', 0);
    MouseEvent$Type$DRAG_instance = new MouseEvent$Type('DRAG', 1);
    MouseEvent$Type$UP_instance = new MouseEvent$Type('UP', 2);
    MouseEvent$Type$DOWN_instance = new MouseEvent$Type('DOWN', 3);
    MouseEvent$Type$CLICK_instance = new MouseEvent$Type('CLICK', 4);
    MouseEvent$Type$ENTER_instance = new MouseEvent$Type('ENTER', 5);
    MouseEvent$Type$EXIT_instance = new MouseEvent$Type('EXIT', 6);
    MouseEvent$Type$SCROLL_instance = new MouseEvent$Type('SCROLL', 7);
  }
  var MouseEvent$Type$MOVE_instance;
  function MouseEvent$Type$MOVE_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$MOVE_instance;
  }
  var MouseEvent$Type$DRAG_instance;
  function MouseEvent$Type$DRAG_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$DRAG_instance;
  }
  var MouseEvent$Type$UP_instance;
  function MouseEvent$Type$UP_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$UP_instance;
  }
  var MouseEvent$Type$DOWN_instance;
  function MouseEvent$Type$DOWN_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$DOWN_instance;
  }
  var MouseEvent$Type$CLICK_instance;
  function MouseEvent$Type$CLICK_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$CLICK_instance;
  }
  var MouseEvent$Type$ENTER_instance;
  function MouseEvent$Type$ENTER_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$ENTER_instance;
  }
  var MouseEvent$Type$EXIT_instance;
  function MouseEvent$Type$EXIT_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$EXIT_instance;
  }
  var MouseEvent$Type$SCROLL_instance;
  function MouseEvent$Type$SCROLL_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$SCROLL_instance;
  }
  MouseEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function MouseEvent$Type$values() {
    return [MouseEvent$Type$MOVE_getInstance(), MouseEvent$Type$DRAG_getInstance(), MouseEvent$Type$UP_getInstance(), MouseEvent$Type$DOWN_getInstance(), MouseEvent$Type$CLICK_getInstance(), MouseEvent$Type$ENTER_getInstance(), MouseEvent$Type$EXIT_getInstance(), MouseEvent$Type$SCROLL_getInstance()];
  }
  MouseEvent$Type.values = MouseEvent$Type$values;
  function MouseEvent$Type$valueOf(name) {
    switch (name) {
      case 'MOVE':
        return MouseEvent$Type$MOVE_getInstance();
      case 'DRAG':
        return MouseEvent$Type$DRAG_getInstance();
      case 'UP':
        return MouseEvent$Type$UP_getInstance();
      case 'DOWN':
        return MouseEvent$Type$DOWN_getInstance();
      case 'CLICK':
        return MouseEvent$Type$CLICK_getInstance();
      case 'ENTER':
        return MouseEvent$Type$ENTER_getInstance();
      case 'EXIT':
        return MouseEvent$Type$EXIT_getInstance();
      case 'SCROLL':
        return MouseEvent$Type$SCROLL_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.MouseEvent.Type.' + name);
    }
  }
  MouseEvent$Type.valueOf_61zpoe$ = MouseEvent$Type$valueOf;
  MouseEvent.prototype.copyFrom_imq2sa$ = function (other) {
    this.type = other.type;
    this.id = other.id;
    this.x = other.x;
    this.y = other.y;
    this.button = other.button;
    this.buttons = other.buttons;
    this.scrollDeltaX = other.scrollDeltaX;
    this.scrollDeltaY = other.scrollDeltaY;
    this.scrollDeltaZ = other.scrollDeltaZ;
    this.isShiftDown = other.isShiftDown;
    this.isCtrlDown = other.isCtrlDown;
    this.isAltDown = other.isAltDown;
    this.isMetaDown = other.isMetaDown;
    this.scaleCoords = other.scaleCoords;
  };
  MouseEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvent',
    interfaces: [Event]
  };
  MouseEvent.prototype.component1 = function () {
    return this.type;
  };
  MouseEvent.prototype.component2 = function () {
    return this.id;
  };
  MouseEvent.prototype.component3 = function () {
    return this.x;
  };
  MouseEvent.prototype.component4 = function () {
    return this.y;
  };
  MouseEvent.prototype.component5 = function () {
    return this.button;
  };
  MouseEvent.prototype.component6 = function () {
    return this.buttons;
  };
  MouseEvent.prototype.component7 = function () {
    return this.scrollDeltaX;
  };
  MouseEvent.prototype.component8 = function () {
    return this.scrollDeltaY;
  };
  MouseEvent.prototype.component9 = function () {
    return this.scrollDeltaZ;
  };
  MouseEvent.prototype.component10 = function () {
    return this.isShiftDown;
  };
  MouseEvent.prototype.component11 = function () {
    return this.isCtrlDown;
  };
  MouseEvent.prototype.component12 = function () {
    return this.isAltDown;
  };
  MouseEvent.prototype.component13 = function () {
    return this.isMetaDown;
  };
  MouseEvent.prototype.component14 = function () {
    return this.scaleCoords;
  };
  MouseEvent.prototype.copy_4o2nlt$ = function (type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    return new MouseEvent(type === void 0 ? this.type : type, id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y, button === void 0 ? this.button : button, buttons === void 0 ? this.buttons : buttons, scrollDeltaX === void 0 ? this.scrollDeltaX : scrollDeltaX, scrollDeltaY === void 0 ? this.scrollDeltaY : scrollDeltaY, scrollDeltaZ === void 0 ? this.scrollDeltaZ : scrollDeltaZ, isShiftDown === void 0 ? this.isShiftDown : isShiftDown, isCtrlDown === void 0 ? this.isCtrlDown : isCtrlDown, isAltDown === void 0 ? this.isAltDown : isAltDown, isMetaDown === void 0 ? this.isMetaDown : isMetaDown, scaleCoords === void 0 ? this.scaleCoords : scaleCoords);
  };
  MouseEvent.prototype.toString = function () {
    return 'MouseEvent(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', button=' + Kotlin.toString(this.button)) + (', buttons=' + Kotlin.toString(this.buttons)) + (', scrollDeltaX=' + Kotlin.toString(this.scrollDeltaX)) + (', scrollDeltaY=' + Kotlin.toString(this.scrollDeltaY)) + (', scrollDeltaZ=' + Kotlin.toString(this.scrollDeltaZ)) + (', isShiftDown=' + Kotlin.toString(this.isShiftDown)) + (', isCtrlDown=' + Kotlin.toString(this.isCtrlDown)) + (', isAltDown=' + Kotlin.toString(this.isAltDown)) + (', isMetaDown=' + Kotlin.toString(this.isMetaDown)) + (', scaleCoords=' + Kotlin.toString(this.scaleCoords)) + ')';
  };
  MouseEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.buttons) | 0;
    result = result * 31 + Kotlin.hashCode(this.scrollDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scrollDeltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.scrollDeltaZ) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShiftDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isCtrlDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isAltDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isMetaDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleCoords) | 0;
    return result;
  };
  MouseEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.buttons, other.buttons) && Kotlin.equals(this.scrollDeltaX, other.scrollDeltaX) && Kotlin.equals(this.scrollDeltaY, other.scrollDeltaY) && Kotlin.equals(this.scrollDeltaZ, other.scrollDeltaZ) && Kotlin.equals(this.isShiftDown, other.isShiftDown) && Kotlin.equals(this.isCtrlDown, other.isCtrlDown) && Kotlin.equals(this.isAltDown, other.isAltDown) && Kotlin.equals(this.isMetaDown, other.isMetaDown) && Kotlin.equals(this.scaleCoords, other.scaleCoords)))));
  };
  function Touch(index, active, id, startTime, currentTime, start, current) {
    Touch$Companion_getInstance();
    if (index === void 0)
      index = -1;
    if (active === void 0)
      active = false;
    if (id === void 0)
      id = -1;
    if (startTime === void 0)
      startTime = DateTime.Companion.EPOCH;
    if (currentTime === void 0)
      currentTime = DateTime.Companion.EPOCH;
    if (start === void 0)
      start = Point.Companion.invoke();
    if (current === void 0)
      current = Point.Companion.invoke();
    this.index = index;
    this.active = active;
    this.id = id;
    this.startTime = startTime;
    this.currentTime = currentTime;
    this.start = start;
    this.current = current;
    this.$delegate_kl8l8a$_0 = new Extra$Mixin();
  }
  function Touch$Companion() {
    Touch$Companion_instance = this;
    this.dummy = new Touch(-1);
  }
  Touch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Touch$Companion_instance = null;
  function Touch$Companion_getInstance() {
    if (Touch$Companion_instance === null) {
      new Touch$Companion();
    }
    return Touch$Companion_instance;
  }
  Touch.prototype.copyFrom_kl8l8a$ = function (other) {
    this.active = other.active;
    this.id = other.id;
    this.startTime = other.startTime;
    this.start.copyFrom_3qfxs9$(other.start);
    this.current.copyFrom_3qfxs9$(other.current);
  };
  Object.defineProperty(Touch.prototype, 'extra', {
    get: function () {
      return this.$delegate_kl8l8a$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_kl8l8a$_0.extra = tmp$;
    }
  });
  Touch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Touch',
    interfaces: [Extra]
  };
  Touch.prototype.component1 = function () {
    return this.index;
  };
  Touch.prototype.component2 = function () {
    return this.active;
  };
  Touch.prototype.component3 = function () {
    return this.id;
  };
  Touch.prototype.component4 = function () {
    return this.startTime;
  };
  Touch.prototype.component5 = function () {
    return this.currentTime;
  };
  Touch.prototype.component6 = function () {
    return this.start;
  };
  Touch.prototype.component7 = function () {
    return this.current;
  };
  Touch.prototype.copy_ohrl3p$ = function (index, active, id, startTime, currentTime, start, current) {
    return new Touch(index === void 0 ? this.index : index, active === void 0 ? this.active : active, id === void 0 ? this.id : id, startTime === void 0 ? this.startTime : startTime, currentTime === void 0 ? this.currentTime : currentTime, start === void 0 ? this.start : start, current === void 0 ? this.current : current);
  };
  Touch.prototype.toString = function () {
    return 'Touch(index=' + Kotlin.toString(this.index) + (', active=' + Kotlin.toString(this.active)) + (', id=' + Kotlin.toString(this.id)) + (', startTime=' + Kotlin.toString(this.startTime)) + (', currentTime=' + Kotlin.toString(this.currentTime)) + (', start=' + Kotlin.toString(this.start)) + (', current=' + Kotlin.toString(this.current)) + ')';
  };
  Touch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.current) | 0;
    return result;
  };
  Touch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.active, other.active) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.currentTime, other.currentTime) && Kotlin.equals(this.start, other.start) && Kotlin.equals(this.current, other.current)))));
  };
  function TouchEvent(type, screen, startTime, currentTime, scaleCoords) {
    TouchEvent$Companion_getInstance();
    if (type === void 0)
      type = TouchEvent$Type$START_getInstance();
    if (screen === void 0)
      screen = 0;
    if (startTime === void 0)
      startTime = DateTime.Companion.EPOCH;
    if (currentTime === void 0)
      currentTime = DateTime.Companion.EPOCH;
    if (scaleCoords === void 0)
      scaleCoords = true;
    Event.call(this);
    this.type = type;
    this.screen = screen;
    this.startTime = startTime;
    this.currentTime = currentTime;
    this.scaleCoords = scaleCoords;
    var array = Array_0(TouchEvent$Companion_getInstance().MAX_TOUCHES);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Touch(i);
    }
    this.bufferTouches_0 = array;
    this._touches_0 = LinkedHashSet_init();
  }
  function TouchEvent$Companion() {
    TouchEvent$Companion_instance = this;
    this.MAX_TOUCHES = 10;
  }
  TouchEvent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TouchEvent$Companion_instance = null;
  function TouchEvent$Companion_getInstance() {
    if (TouchEvent$Companion_instance === null) {
      new TouchEvent$Companion();
    }
    return TouchEvent$Companion_instance;
  }
  Object.defineProperty(TouchEvent.prototype, 'touches', {
    get: function () {
      return this._touches_0;
    }
  });
  TouchEvent.prototype.startFrame_dh6y7s$ = function (type) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.type = type;
    if (type === TouchEvent$Type$START_getInstance()) {
      this.startTime = DateTime.Companion.now();
      tmp$ = this.bufferTouches_0;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var touch = tmp$[tmp$_0];
        touch.id = -1;
      }
    }
    this.currentTime = DateTime.Companion.now();
    if (type !== TouchEvent$Type$END_getInstance()) {
      tmp$_1 = this.bufferTouches_0;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var touch_0 = tmp$_1[tmp$_2];
        touch_0.active = false;
      }
      this._touches_0.clear();
    }
  };
  TouchEvent.prototype.getTouchById_za3lpa$ = function (id) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    var $receiver = this.bufferTouches_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_3;
      for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
        var element = $receiver[tmp$_3];
        if (element.id === id) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_2 = tmp$;
    else {
      var $receiver_0 = this.bufferTouches_0;
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_4;
        for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
          var element_0 = $receiver_0[tmp$_4];
          if (element_0.id === -1) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      tmp$_2 = firstOrNull$result_0;
    }
    var tmp$_5;
    if ((tmp$_0 = tmp$_2) != null)
      tmp$_5 = tmp$_0;
    else {
      var $receiver_1 = this.bufferTouches_0;
      var firstOrNull$result_1;
      firstOrNull$break: do {
        var tmp$_6;
        for (tmp$_6 = 0; tmp$_6 !== $receiver_1.length; ++tmp$_6) {
          var element_1 = $receiver_1[tmp$_6];
          if (!element_1.active) {
            firstOrNull$result_1 = element_1;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_1 = null;
      }
       while (false);
      tmp$_5 = firstOrNull$result_1;
    }
    return (tmp$_1 = tmp$_5) != null ? tmp$_1 : this.bufferTouches_0[TouchEvent$Companion_getInstance().MAX_TOUCHES - 1 | 0];
  };
  TouchEvent.prototype.touch_w4xg1m$ = function (id, x, y) {
    var touch = this.getTouchById_za3lpa$(id);
    touch.id = id;
    touch.active = true;
    touch.currentTime = this.currentTime;
    touch.current.x = x;
    touch.current.y = y;
    if (this.type === TouchEvent$Type$START_getInstance()) {
      touch.startTime = this.currentTime;
      touch.start.x = x;
      touch.start.y = y;
    }
    this._touches_0.add_11rb$(touch);
  };
  TouchEvent.prototype.copyFrom_og577k$ = function (other) {
    var tmp$;
    this.type = other.type;
    this.screen = other.screen;
    this.startTime = other.startTime;
    this.currentTime = other.currentTime;
    this.scaleCoords = other.scaleCoords;
    tmp$ = TouchEvent$Companion_getInstance().MAX_TOUCHES;
    for (var n = 0; n < tmp$; n++) {
      this.bufferTouches_0[n].copyFrom_kl8l8a$(other.bufferTouches_0[n]);
    }
  };
  function TouchEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TouchEvent$Type_initFields() {
    TouchEvent$Type_initFields = function () {
    };
    TouchEvent$Type$START_instance = new TouchEvent$Type('START', 0);
    TouchEvent$Type$END_instance = new TouchEvent$Type('END', 1);
    TouchEvent$Type$MOVE_instance = new TouchEvent$Type('MOVE', 2);
  }
  var TouchEvent$Type$START_instance;
  function TouchEvent$Type$START_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$START_instance;
  }
  var TouchEvent$Type$END_instance;
  function TouchEvent$Type$END_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$END_instance;
  }
  var TouchEvent$Type$MOVE_instance;
  function TouchEvent$Type$MOVE_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$MOVE_instance;
  }
  TouchEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function TouchEvent$Type$values() {
    return [TouchEvent$Type$START_getInstance(), TouchEvent$Type$END_getInstance(), TouchEvent$Type$MOVE_getInstance()];
  }
  TouchEvent$Type.values = TouchEvent$Type$values;
  function TouchEvent$Type$valueOf(name) {
    switch (name) {
      case 'START':
        return TouchEvent$Type$START_getInstance();
      case 'END':
        return TouchEvent$Type$END_getInstance();
      case 'MOVE':
        return TouchEvent$Type$MOVE_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.TouchEvent.Type.' + name);
    }
  }
  TouchEvent$Type.valueOf_61zpoe$ = TouchEvent$Type$valueOf;
  TouchEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchEvent',
    interfaces: [Event]
  };
  TouchEvent.prototype.component1 = function () {
    return this.type;
  };
  TouchEvent.prototype.component2 = function () {
    return this.screen;
  };
  TouchEvent.prototype.component3 = function () {
    return this.startTime;
  };
  TouchEvent.prototype.component4 = function () {
    return this.currentTime;
  };
  TouchEvent.prototype.component5 = function () {
    return this.scaleCoords;
  };
  TouchEvent.prototype.copy_wegha1$ = function (type, screen, startTime, currentTime, scaleCoords) {
    return new TouchEvent(type === void 0 ? this.type : type, screen === void 0 ? this.screen : screen, startTime === void 0 ? this.startTime : startTime, currentTime === void 0 ? this.currentTime : currentTime, scaleCoords === void 0 ? this.scaleCoords : scaleCoords);
  };
  TouchEvent.prototype.toString = function () {
    return 'TouchEvent(type=' + Kotlin.toString(this.type) + (', screen=' + Kotlin.toString(this.screen)) + (', startTime=' + Kotlin.toString(this.startTime)) + (', currentTime=' + Kotlin.toString(this.currentTime)) + (', scaleCoords=' + Kotlin.toString(this.scaleCoords)) + ')';
  };
  TouchEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.screen) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleCoords) | 0;
    return result;
  };
  TouchEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.screen, other.screen) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.currentTime, other.currentTime) && Kotlin.equals(this.scaleCoords, other.scaleCoords)))));
  };
  function KeyEvent(type, id, key, keyCode, character) {
    if (type === void 0)
      type = KeyEvent$Type$UP_getInstance();
    if (id === void 0)
      id = 0;
    if (key === void 0)
      key = Key$UP_getInstance();
    if (keyCode === void 0)
      keyCode = 0;
    if (character === void 0)
      character = 0;
    Event.call(this);
    this.type = type;
    this.id = id;
    this.key = key;
    this.keyCode = keyCode;
    this.character = toBoxedChar(character);
  }
  function KeyEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyEvent$Type_initFields() {
    KeyEvent$Type_initFields = function () {
    };
    KeyEvent$Type$UP_instance = new KeyEvent$Type('UP', 0);
    KeyEvent$Type$DOWN_instance = new KeyEvent$Type('DOWN', 1);
    KeyEvent$Type$TYPE_instance = new KeyEvent$Type('TYPE', 2);
  }
  var KeyEvent$Type$UP_instance;
  function KeyEvent$Type$UP_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$UP_instance;
  }
  var KeyEvent$Type$DOWN_instance;
  function KeyEvent$Type$DOWN_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$DOWN_instance;
  }
  var KeyEvent$Type$TYPE_instance;
  function KeyEvent$Type$TYPE_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$TYPE_instance;
  }
  KeyEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function KeyEvent$Type$values() {
    return [KeyEvent$Type$UP_getInstance(), KeyEvent$Type$DOWN_getInstance(), KeyEvent$Type$TYPE_getInstance()];
  }
  KeyEvent$Type.values = KeyEvent$Type$values;
  function KeyEvent$Type$valueOf(name) {
    switch (name) {
      case 'UP':
        return KeyEvent$Type$UP_getInstance();
      case 'DOWN':
        return KeyEvent$Type$DOWN_getInstance();
      case 'TYPE':
        return KeyEvent$Type$TYPE_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.KeyEvent.Type.' + name);
    }
  }
  KeyEvent$Type.valueOf_61zpoe$ = KeyEvent$Type$valueOf;
  KeyEvent.prototype.copyFrom_5xeie8$ = function (other) {
    this.type = other.type;
    this.id = other.id;
    this.key = other.key;
    this.keyCode = other.keyCode;
    this.character = other.character;
  };
  KeyEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyEvent',
    interfaces: [Event]
  };
  KeyEvent.prototype.component1 = function () {
    return this.type;
  };
  KeyEvent.prototype.component2 = function () {
    return this.id;
  };
  KeyEvent.prototype.component3 = function () {
    return this.key;
  };
  KeyEvent.prototype.component4 = function () {
    return this.keyCode;
  };
  KeyEvent.prototype.component5 = function () {
    return this.character;
  };
  KeyEvent.prototype.copy_e4rfid$ = function (type, id, key, keyCode, character) {
    return new KeyEvent(type === void 0 ? this.type : type, id === void 0 ? this.id : id, key === void 0 ? this.key : key, keyCode === void 0 ? this.keyCode : keyCode, character === void 0 ? this.character : character);
  };
  KeyEvent.prototype.toString = function () {
    return 'KeyEvent(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', key=' + Kotlin.toString(this.key)) + (', keyCode=' + Kotlin.toString(this.keyCode)) + (', character=' + Kotlin.toString(this.character)) + ')';
  };
  KeyEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.character) | 0;
    return result;
  };
  KeyEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.key, other.key) && Kotlin.equals(this.keyCode, other.keyCode) && Kotlin.equals(this.character, other.character)))));
  };
  function GamePadConnectionEvent(type, gamepad) {
    if (type === void 0)
      type = GamePadConnectionEvent$Type$CONNECTED_getInstance();
    if (gamepad === void 0)
      gamepad = 0;
    Event.call(this);
    this.type = type;
    this.gamepad = gamepad;
  }
  function GamePadConnectionEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GamePadConnectionEvent$Type_initFields() {
    GamePadConnectionEvent$Type_initFields = function () {
    };
    GamePadConnectionEvent$Type$CONNECTED_instance = new GamePadConnectionEvent$Type('CONNECTED', 0);
    GamePadConnectionEvent$Type$DISCONNECTED_instance = new GamePadConnectionEvent$Type('DISCONNECTED', 1);
  }
  var GamePadConnectionEvent$Type$CONNECTED_instance;
  function GamePadConnectionEvent$Type$CONNECTED_getInstance() {
    GamePadConnectionEvent$Type_initFields();
    return GamePadConnectionEvent$Type$CONNECTED_instance;
  }
  var GamePadConnectionEvent$Type$DISCONNECTED_instance;
  function GamePadConnectionEvent$Type$DISCONNECTED_getInstance() {
    GamePadConnectionEvent$Type_initFields();
    return GamePadConnectionEvent$Type$DISCONNECTED_instance;
  }
  GamePadConnectionEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function GamePadConnectionEvent$Type$values() {
    return [GamePadConnectionEvent$Type$CONNECTED_getInstance(), GamePadConnectionEvent$Type$DISCONNECTED_getInstance()];
  }
  GamePadConnectionEvent$Type.values = GamePadConnectionEvent$Type$values;
  function GamePadConnectionEvent$Type$valueOf(name) {
    switch (name) {
      case 'CONNECTED':
        return GamePadConnectionEvent$Type$CONNECTED_getInstance();
      case 'DISCONNECTED':
        return GamePadConnectionEvent$Type$DISCONNECTED_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GamePadConnectionEvent.Type.' + name);
    }
  }
  GamePadConnectionEvent$Type.valueOf_61zpoe$ = GamePadConnectionEvent$Type$valueOf;
  GamePadConnectionEvent.prototype.copyFrom_a4csu8$ = function (other) {
    this.type = other.type;
    this.gamepad = other.gamepad;
  };
  GamePadConnectionEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadConnectionEvent',
    interfaces: [Event]
  };
  GamePadConnectionEvent.prototype.component1 = function () {
    return this.type;
  };
  GamePadConnectionEvent.prototype.component2 = function () {
    return this.gamepad;
  };
  GamePadConnectionEvent.prototype.copy_o8775y$ = function (type, gamepad) {
    return new GamePadConnectionEvent(type === void 0 ? this.type : type, gamepad === void 0 ? this.gamepad : gamepad);
  };
  GamePadConnectionEvent.prototype.toString = function () {
    return 'GamePadConnectionEvent(type=' + Kotlin.toString(this.type) + (', gamepad=' + Kotlin.toString(this.gamepad)) + ')';
  };
  GamePadConnectionEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    return result;
  };
  GamePadConnectionEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.gamepad, other.gamepad)))));
  };
  function GamePadUpdateEvent(gamepadsLength, gamepads) {
    if (gamepadsLength === void 0)
      gamepadsLength = 0;
    if (gamepads === void 0) {
      var array = Array_0(8);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = new GamepadInfo();
      }
      gamepads = array;
    }
    Event.call(this);
    this.gamepadsLength = gamepadsLength;
    this.gamepads = gamepads;
  }
  GamePadUpdateEvent.prototype.copyFrom_ypku17$ = function (that) {
    var tmp$;
    this.gamepadsLength = that.gamepadsLength;
    tmp$ = this.gamepads.length;
    for (var n = 0; n < tmp$; n++) {
      this.gamepads[n].copyFrom_u2qnca$(that.gamepads[n]);
    }
  };
  GamePadUpdateEvent.prototype.toString = function () {
    var $receiver = this.gamepads;
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (element.connected)
        destination.add_11rb$(element);
    }
    return 'GamePadUpdateEvent(' + destination + ')';
  };
  GamePadUpdateEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadUpdateEvent',
    interfaces: [Event]
  };
  GamePadUpdateEvent.prototype.component1 = function () {
    return this.gamepadsLength;
  };
  GamePadUpdateEvent.prototype.component2 = function () {
    return this.gamepads;
  };
  GamePadUpdateEvent.prototype.copy_eepwu$ = function (gamepadsLength, gamepads) {
    return new GamePadUpdateEvent(gamepadsLength === void 0 ? this.gamepadsLength : gamepadsLength, gamepads === void 0 ? this.gamepads : gamepads);
  };
  GamePadUpdateEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gamepadsLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepads) | 0;
    return result;
  };
  GamePadUpdateEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gamepadsLength, other.gamepadsLength) && Kotlin.equals(this.gamepads, other.gamepads)))));
  };
  function GamePadButtonEvent(type, gamepad, button, value) {
    if (type === void 0)
      type = GamePadButtonEvent$Type$DOWN_getInstance();
    if (gamepad === void 0)
      gamepad = 0;
    if (button === void 0)
      button = GameButton$BUTTON0_getInstance();
    if (value === void 0)
      value = 0.0;
    Event.call(this);
    this.type = type;
    this.gamepad = gamepad;
    this.button = button;
    this.value = value;
  }
  function GamePadButtonEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GamePadButtonEvent$Type_initFields() {
    GamePadButtonEvent$Type_initFields = function () {
    };
    GamePadButtonEvent$Type$UP_instance = new GamePadButtonEvent$Type('UP', 0);
    GamePadButtonEvent$Type$DOWN_instance = new GamePadButtonEvent$Type('DOWN', 1);
  }
  var GamePadButtonEvent$Type$UP_instance;
  function GamePadButtonEvent$Type$UP_getInstance() {
    GamePadButtonEvent$Type_initFields();
    return GamePadButtonEvent$Type$UP_instance;
  }
  var GamePadButtonEvent$Type$DOWN_instance;
  function GamePadButtonEvent$Type$DOWN_getInstance() {
    GamePadButtonEvent$Type_initFields();
    return GamePadButtonEvent$Type$DOWN_instance;
  }
  GamePadButtonEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function GamePadButtonEvent$Type$values() {
    return [GamePadButtonEvent$Type$UP_getInstance(), GamePadButtonEvent$Type$DOWN_getInstance()];
  }
  GamePadButtonEvent$Type.values = GamePadButtonEvent$Type$values;
  function GamePadButtonEvent$Type$valueOf(name) {
    switch (name) {
      case 'UP':
        return GamePadButtonEvent$Type$UP_getInstance();
      case 'DOWN':
        return GamePadButtonEvent$Type$DOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GamePadButtonEvent.Type.' + name);
    }
  }
  GamePadButtonEvent$Type.valueOf_61zpoe$ = GamePadButtonEvent$Type$valueOf;
  GamePadButtonEvent.prototype.copyFrom_gpfygc$ = function (other) {
    this.type = other.type;
    this.gamepad = other.gamepad;
    this.button = other.button;
    this.value = other.value;
  };
  GamePadButtonEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadButtonEvent',
    interfaces: [Event]
  };
  GamePadButtonEvent.prototype.component1 = function () {
    return this.type;
  };
  GamePadButtonEvent.prototype.component2 = function () {
    return this.gamepad;
  };
  GamePadButtonEvent.prototype.component3 = function () {
    return this.button;
  };
  GamePadButtonEvent.prototype.component4 = function () {
    return this.value;
  };
  GamePadButtonEvent.prototype.copy_1xkha9$ = function (type, gamepad, button, value) {
    return new GamePadButtonEvent(type === void 0 ? this.type : type, gamepad === void 0 ? this.gamepad : gamepad, button === void 0 ? this.button : button, value === void 0 ? this.value : value);
  };
  GamePadButtonEvent.prototype.toString = function () {
    return 'GamePadButtonEvent(type=' + Kotlin.toString(this.type) + (', gamepad=' + Kotlin.toString(this.gamepad)) + (', button=' + Kotlin.toString(this.button)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  GamePadButtonEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  GamePadButtonEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.gamepad, other.gamepad) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.value, other.value)))));
  };
  function GamePadStickEvent(gamepad, stick, x, y) {
    if (gamepad === void 0)
      gamepad = 0;
    if (stick === void 0)
      stick = GameStick$LEFT_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    Event.call(this);
    this.gamepad = gamepad;
    this.stick = stick;
    this.x = x;
    this.y = y;
  }
  GamePadStickEvent.prototype.copyFrom_8q9l1i$ = function (other) {
    this.gamepad = other.gamepad;
    this.stick = other.stick;
    this.x = other.x;
    this.y = other.y;
  };
  GamePadStickEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadStickEvent',
    interfaces: [Event]
  };
  GamePadStickEvent.prototype.component1 = function () {
    return this.gamepad;
  };
  GamePadStickEvent.prototype.component2 = function () {
    return this.stick;
  };
  GamePadStickEvent.prototype.component3 = function () {
    return this.x;
  };
  GamePadStickEvent.prototype.component4 = function () {
    return this.y;
  };
  GamePadStickEvent.prototype.copy_ctxsiv$ = function (gamepad, stick, x, y) {
    return new GamePadStickEvent(gamepad === void 0 ? this.gamepad : gamepad, stick === void 0 ? this.stick : stick, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GamePadStickEvent.prototype.toString = function () {
    return 'GamePadStickEvent(gamepad=' + Kotlin.toString(this.gamepad) + (', stick=' + Kotlin.toString(this.stick)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GamePadStickEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    result = result * 31 + Kotlin.hashCode(this.stick) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GamePadStickEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gamepad, other.gamepad) && Kotlin.equals(this.stick, other.stick) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function ChangeEvent(oldValue, newValue) {
    if (oldValue === void 0)
      oldValue = null;
    if (newValue === void 0)
      newValue = null;
    Event.call(this);
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
  ChangeEvent.prototype.copyFrom_pmilob$ = function (other) {
    this.oldValue = other.oldValue;
    this.newValue = other.newValue;
  };
  ChangeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeEvent',
    interfaces: [Event]
  };
  ChangeEvent.prototype.component1 = function () {
    return this.oldValue;
  };
  ChangeEvent.prototype.component2 = function () {
    return this.newValue;
  };
  ChangeEvent.prototype.copy_oaftn8$ = function (oldValue, newValue) {
    return new ChangeEvent(oldValue === void 0 ? this.oldValue : oldValue, newValue === void 0 ? this.newValue : newValue);
  };
  ChangeEvent.prototype.toString = function () {
    return 'ChangeEvent(oldValue=' + Kotlin.toString(this.oldValue) + (', newValue=' + Kotlin.toString(this.newValue)) + ')';
  };
  ChangeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.oldValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.newValue) | 0;
    return result;
  };
  ChangeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.oldValue, other.oldValue) && Kotlin.equals(this.newValue, other.newValue)))));
  };
  function ReshapeEvent(x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    Event.call(this);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  ReshapeEvent.prototype.copyFrom_itcimp$ = function (other) {
    this.x = other.x;
    this.y = other.y;
    this.width = other.width;
    this.height = other.height;
  };
  ReshapeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReshapeEvent',
    interfaces: [Event]
  };
  ReshapeEvent.prototype.component1 = function () {
    return this.x;
  };
  ReshapeEvent.prototype.component2 = function () {
    return this.y;
  };
  ReshapeEvent.prototype.component3 = function () {
    return this.width;
  };
  ReshapeEvent.prototype.component4 = function () {
    return this.height;
  };
  ReshapeEvent.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new ReshapeEvent(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  ReshapeEvent.prototype.toString = function () {
    return 'ReshapeEvent(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  ReshapeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  ReshapeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function FullScreenEvent(fullscreen) {
    if (fullscreen === void 0)
      fullscreen = false;
    Event.call(this);
    this.fullscreen = fullscreen;
  }
  FullScreenEvent.prototype.copyFrom_jpj46y$ = function (other) {
    this.fullscreen = other.fullscreen;
  };
  FullScreenEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FullScreenEvent',
    interfaces: [Event]
  };
  FullScreenEvent.prototype.component1 = function () {
    return this.fullscreen;
  };
  FullScreenEvent.prototype.copy_6taknv$ = function (fullscreen) {
    return new FullScreenEvent(fullscreen === void 0 ? this.fullscreen : fullscreen);
  };
  FullScreenEvent.prototype.toString = function () {
    return 'FullScreenEvent(fullscreen=' + Kotlin.toString(this.fullscreen) + ')';
  };
  FullScreenEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fullscreen) | 0;
    return result;
  };
  FullScreenEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.fullscreen, other.fullscreen))));
  };
  function RenderEvent() {
    Event.call(this);
  }
  RenderEvent.prototype.copyFrom_p6hw0x$ = function (other) {
  };
  RenderEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderEvent',
    interfaces: [Event]
  };
  function InitEvent() {
    Event.call(this);
  }
  InitEvent.prototype.copyFrom_6vf17f$ = function (other) {
  };
  InitEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InitEvent',
    interfaces: [Event]
  };
  function ResumeEvent() {
    Event.call(this);
  }
  ResumeEvent.prototype.copyFrom_fgwvc$ = function (other) {
  };
  ResumeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResumeEvent',
    interfaces: [Event]
  };
  function PauseEvent() {
    Event.call(this);
  }
  PauseEvent.prototype.copyFrom_16m5m1$ = function (other) {
  };
  PauseEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PauseEvent',
    interfaces: [Event]
  };
  function StopEvent() {
    Event.call(this);
  }
  StopEvent.prototype.copyFrom_ociv03$ = function (other) {
  };
  StopEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StopEvent',
    interfaces: [Event]
  };
  function DestroyEvent() {
    Event.call(this);
  }
  DestroyEvent.prototype.copyFrom_r21b6j$ = function (other) {
  };
  DestroyEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DestroyEvent',
    interfaces: [Event]
  };
  function DisposeEvent() {
    Event.call(this);
  }
  DisposeEvent.prototype.copyFrom_7fwhls$ = function (other) {
  };
  DisposeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisposeEvent',
    interfaces: [Event]
  };
  function DropFileEvent(type, files) {
    if (type === void 0)
      type = DropFileEvent$Type$ENTER_getInstance();
    if (files === void 0)
      files = null;
    Event.call(this);
    this.type = type;
    this.files = files;
  }
  function DropFileEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DropFileEvent$Type_initFields() {
    DropFileEvent$Type_initFields = function () {
    };
    DropFileEvent$Type$ENTER_instance = new DropFileEvent$Type('ENTER', 0);
    DropFileEvent$Type$EXIT_instance = new DropFileEvent$Type('EXIT', 1);
    DropFileEvent$Type$DROP_instance = new DropFileEvent$Type('DROP', 2);
  }
  var DropFileEvent$Type$ENTER_instance;
  function DropFileEvent$Type$ENTER_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$ENTER_instance;
  }
  var DropFileEvent$Type$EXIT_instance;
  function DropFileEvent$Type$EXIT_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$EXIT_instance;
  }
  var DropFileEvent$Type$DROP_instance;
  function DropFileEvent$Type$DROP_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$DROP_instance;
  }
  DropFileEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function DropFileEvent$Type$values() {
    return [DropFileEvent$Type$ENTER_getInstance(), DropFileEvent$Type$EXIT_getInstance(), DropFileEvent$Type$DROP_getInstance()];
  }
  DropFileEvent$Type.values = DropFileEvent$Type$values;
  function DropFileEvent$Type$valueOf(name) {
    switch (name) {
      case 'ENTER':
        return DropFileEvent$Type$ENTER_getInstance();
      case 'EXIT':
        return DropFileEvent$Type$EXIT_getInstance();
      case 'DROP':
        return DropFileEvent$Type$DROP_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.DropFileEvent.Type.' + name);
    }
  }
  DropFileEvent$Type.valueOf_61zpoe$ = DropFileEvent$Type$valueOf;
  DropFileEvent.prototype.copyFrom_2nqp3e$ = function (other) {
    var tmp$;
    this.type = other.type;
    this.files = (tmp$ = other.files) != null ? toList_0(tmp$) : null;
  };
  DropFileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropFileEvent',
    interfaces: [Event]
  };
  DropFileEvent.prototype.component1 = function () {
    return this.type;
  };
  DropFileEvent.prototype.component2 = function () {
    return this.files;
  };
  DropFileEvent.prototype.copy_efoes9$ = function (type, files) {
    return new DropFileEvent(type === void 0 ? this.type : type, files === void 0 ? this.files : files);
  };
  DropFileEvent.prototype.toString = function () {
    return 'DropFileEvent(type=' + Kotlin.toString(this.type) + (', files=' + Kotlin.toString(this.files)) + ')';
  };
  DropFileEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.files) | 0;
    return result;
  };
  DropFileEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.files, other.files)))));
  };
  function MouseEvents(ed) {
    this.ed = ed;
  }
  function MouseEvents$click$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$CLICK_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.click_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$click$lambda(callback));
  };
  function MouseEvents$up$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$UP_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.up_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$up$lambda(callback));
  };
  function MouseEvents$down$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$DOWN_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.down_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$down$lambda(callback));
  };
  function MouseEvents$move$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$MOVE_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.move_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$move$lambda(callback));
  };
  function MouseEvents$drag$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$DRAG_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.drag_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$drag$lambda(callback));
  };
  function MouseEvents$enter$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$ENTER_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.enter_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$enter$lambda(callback));
  };
  function MouseEvents$exit$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$EXIT_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  MouseEvents.prototype.exit_f5l7iv$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$exit$lambda(callback));
  };
  MouseEvents.prototype.close = function () {
  };
  MouseEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvents',
    interfaces: [Closeable]
  };
  function KeysEvents(ed) {
    this.ed = ed;
  }
  function KeysEvents$down$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$DOWN_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.down_3u38lt$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$down$lambda(callback));
  };
  function KeysEvents$up$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$UP_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.up_3u38lt$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$up$lambda(callback));
  };
  function KeysEvents$press$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$TYPE_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.press_3u38lt$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$press$lambda(callback));
  };
  function KeysEvents$down$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$DOWN_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.down_sorlsz$ = function (key, callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$down$lambda_0(key, callback));
  };
  function KeysEvents$up$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$UP_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.up_sorlsz$ = function (key, callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$up$lambda_0(key, callback));
  };
  function KeysEvents$press$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$TYPE_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.press_sorlsz$ = function (key, callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$press$lambda_0(key, callback));
  };
  KeysEvents.prototype.close = function () {
  };
  KeysEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeysEvents',
    interfaces: [Closeable]
  };
  function mouse($receiver, callback) {
    var $receiver_0 = new MouseEvents($receiver);
    callback($receiver_0);
    return $receiver_0;
  }
  function keys($receiver, callback) {
    var $receiver_0 = new KeysEvents($receiver);
    callback($receiver_0);
    return $receiver_0;
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
  var arraycopy$lambda_1 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function MouseButton(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseButton_initFields() {
    MouseButton_initFields = function () {
    };
    MouseButton$LEFT_instance = new MouseButton('LEFT', 0, 0);
    MouseButton$RIGHT_instance = new MouseButton('RIGHT', 1, 1);
    MouseButton$MIDDLE_instance = new MouseButton('MIDDLE', 2, 2);
    MouseButton$BUTTON3_instance = new MouseButton('BUTTON3', 3, 3);
    MouseButton$BUTTON4_instance = new MouseButton('BUTTON4', 4, 4);
    MouseButton$BUTTON5_instance = new MouseButton('BUTTON5', 5, 5);
    MouseButton$BUTTON_UNKNOWN_instance = new MouseButton('BUTTON_UNKNOWN', 6, 6);
    MouseButton$Companion_getInstance();
  }
  var MouseButton$LEFT_instance;
  function MouseButton$LEFT_getInstance() {
    MouseButton_initFields();
    return MouseButton$LEFT_instance;
  }
  var MouseButton$RIGHT_instance;
  function MouseButton$RIGHT_getInstance() {
    MouseButton_initFields();
    return MouseButton$RIGHT_instance;
  }
  var MouseButton$MIDDLE_instance;
  function MouseButton$MIDDLE_getInstance() {
    MouseButton_initFields();
    return MouseButton$MIDDLE_instance;
  }
  var MouseButton$BUTTON3_instance;
  function MouseButton$BUTTON3_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON3_instance;
  }
  var MouseButton$BUTTON4_instance;
  function MouseButton$BUTTON4_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON4_instance;
  }
  var MouseButton$BUTTON5_instance;
  function MouseButton$BUTTON5_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON5_instance;
  }
  var MouseButton$BUTTON_UNKNOWN_instance;
  function MouseButton$BUTTON_UNKNOWN_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON_UNKNOWN_instance;
  }
  function MouseButton$Companion() {
    MouseButton$Companion_instance = this;
    this.BUTTONS = MouseButton$values();
  }
  MouseButton$Companion.prototype.get_za3lpa$ = function (id) {
    var $receiver = this.BUTTONS;
    return id >= 0 && id <= get_lastIndex($receiver) ? $receiver[id] : MouseButton$BUTTON_UNKNOWN_getInstance();
  };
  MouseButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MouseButton$Companion_instance = null;
  function MouseButton$Companion_getInstance() {
    MouseButton_initFields();
    if (MouseButton$Companion_instance === null) {
      new MouseButton$Companion();
    }
    return MouseButton$Companion_instance;
  }
  MouseButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseButton',
    interfaces: [Enum]
  };
  function MouseButton$values() {
    return [MouseButton$LEFT_getInstance(), MouseButton$RIGHT_getInstance(), MouseButton$MIDDLE_getInstance(), MouseButton$BUTTON3_getInstance(), MouseButton$BUTTON4_getInstance(), MouseButton$BUTTON5_getInstance(), MouseButton$BUTTON_UNKNOWN_getInstance()];
  }
  MouseButton.values = MouseButton$values;
  function MouseButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return MouseButton$LEFT_getInstance();
      case 'RIGHT':
        return MouseButton$RIGHT_getInstance();
      case 'MIDDLE':
        return MouseButton$MIDDLE_getInstance();
      case 'BUTTON3':
        return MouseButton$BUTTON3_getInstance();
      case 'BUTTON4':
        return MouseButton$BUTTON4_getInstance();
      case 'BUTTON5':
        return MouseButton$BUTTON5_getInstance();
      case 'BUTTON_UNKNOWN':
        return MouseButton$BUTTON_UNKNOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.MouseButton.' + name);
    }
  }
  MouseButton.valueOf_61zpoe$ = MouseButton$valueOf;
  function Key(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Key_initFields() {
    Key_initFields = function () {
    };
    Key$SPACE_instance = new Key('SPACE', 0);
    Key$APOSTROPHE_instance = new Key('APOSTROPHE', 1);
    Key$COMMA_instance = new Key('COMMA', 2);
    Key$MINUS_instance = new Key('MINUS', 3);
    Key$PERIOD_instance = new Key('PERIOD', 4);
    Key$SLASH_instance = new Key('SLASH', 5);
    Key$N0_instance = new Key('N0', 6);
    Key$N1_instance = new Key('N1', 7);
    Key$N2_instance = new Key('N2', 8);
    Key$N3_instance = new Key('N3', 9);
    Key$N4_instance = new Key('N4', 10);
    Key$N5_instance = new Key('N5', 11);
    Key$N6_instance = new Key('N6', 12);
    Key$N7_instance = new Key('N7', 13);
    Key$N8_instance = new Key('N8', 14);
    Key$N9_instance = new Key('N9', 15);
    Key$SEMICOLON_instance = new Key('SEMICOLON', 16);
    Key$EQUAL_instance = new Key('EQUAL', 17);
    Key$A_instance = new Key('A', 18);
    Key$B_instance = new Key('B', 19);
    Key$C_instance = new Key('C', 20);
    Key$D_instance = new Key('D', 21);
    Key$E_instance = new Key('E', 22);
    Key$F_instance = new Key('F', 23);
    Key$G_instance = new Key('G', 24);
    Key$H_instance = new Key('H', 25);
    Key$I_instance = new Key('I', 26);
    Key$J_instance = new Key('J', 27);
    Key$K_instance = new Key('K', 28);
    Key$L_instance = new Key('L', 29);
    Key$M_instance = new Key('M', 30);
    Key$N_instance = new Key('N', 31);
    Key$O_instance = new Key('O', 32);
    Key$P_instance = new Key('P', 33);
    Key$Q_instance = new Key('Q', 34);
    Key$R_instance = new Key('R', 35);
    Key$S_instance = new Key('S', 36);
    Key$T_instance = new Key('T', 37);
    Key$U_instance = new Key('U', 38);
    Key$V_instance = new Key('V', 39);
    Key$W_instance = new Key('W', 40);
    Key$X_instance = new Key('X', 41);
    Key$Y_instance = new Key('Y', 42);
    Key$Z_instance = new Key('Z', 43);
    Key$LEFT_BRACKET_instance = new Key('LEFT_BRACKET', 44);
    Key$BACKSLASH_instance = new Key('BACKSLASH', 45);
    Key$RIGHT_BRACKET_instance = new Key('RIGHT_BRACKET', 46);
    Key$GRAVE_ACCENT_instance = new Key('GRAVE_ACCENT', 47);
    Key$WORLD_1_instance = new Key('WORLD_1', 48);
    Key$WORLD_2_instance = new Key('WORLD_2', 49);
    Key$ESCAPE_instance = new Key('ESCAPE', 50);
    Key$META_instance = new Key('META', 51);
    Key$ENTER_instance = new Key('ENTER', 52);
    Key$TAB_instance = new Key('TAB', 53);
    Key$BACKSPACE_instance = new Key('BACKSPACE', 54);
    Key$INSERT_instance = new Key('INSERT', 55);
    Key$DELETE_instance = new Key('DELETE', 56);
    Key$RIGHT_instance = new Key('RIGHT', 57);
    Key$LEFT_instance = new Key('LEFT', 58);
    Key$DOWN_instance = new Key('DOWN', 59);
    Key$UP_instance = new Key('UP', 60);
    Key$PAGE_UP_instance = new Key('PAGE_UP', 61);
    Key$PAGE_DOWN_instance = new Key('PAGE_DOWN', 62);
    Key$FUNCTION_instance = new Key('FUNCTION', 63);
    Key$HELP_instance = new Key('HELP', 64);
    Key$MUTE_instance = new Key('MUTE', 65);
    Key$VOLUME_DOWN_instance = new Key('VOLUME_DOWN', 66);
    Key$VOLUME_UP_instance = new Key('VOLUME_UP', 67);
    Key$HOME_instance = new Key('HOME', 68);
    Key$END_instance = new Key('END', 69);
    Key$CAPS_LOCK_instance = new Key('CAPS_LOCK', 70);
    Key$SCROLL_LOCK_instance = new Key('SCROLL_LOCK', 71);
    Key$NUM_LOCK_instance = new Key('NUM_LOCK', 72);
    Key$PRINT_SCREEN_instance = new Key('PRINT_SCREEN', 73);
    Key$PAUSE_instance = new Key('PAUSE', 74);
    Key$F1_instance = new Key('F1', 75);
    Key$F2_instance = new Key('F2', 76);
    Key$F3_instance = new Key('F3', 77);
    Key$F4_instance = new Key('F4', 78);
    Key$F5_instance = new Key('F5', 79);
    Key$F6_instance = new Key('F6', 80);
    Key$F7_instance = new Key('F7', 81);
    Key$F8_instance = new Key('F8', 82);
    Key$F9_instance = new Key('F9', 83);
    Key$F10_instance = new Key('F10', 84);
    Key$F11_instance = new Key('F11', 85);
    Key$F12_instance = new Key('F12', 86);
    Key$F13_instance = new Key('F13', 87);
    Key$F14_instance = new Key('F14', 88);
    Key$F15_instance = new Key('F15', 89);
    Key$F16_instance = new Key('F16', 90);
    Key$F17_instance = new Key('F17', 91);
    Key$F18_instance = new Key('F18', 92);
    Key$F19_instance = new Key('F19', 93);
    Key$F20_instance = new Key('F20', 94);
    Key$F21_instance = new Key('F21', 95);
    Key$F22_instance = new Key('F22', 96);
    Key$F23_instance = new Key('F23', 97);
    Key$F24_instance = new Key('F24', 98);
    Key$F25_instance = new Key('F25', 99);
    Key$KP_0_instance = new Key('KP_0', 100);
    Key$KP_1_instance = new Key('KP_1', 101);
    Key$KP_2_instance = new Key('KP_2', 102);
    Key$KP_3_instance = new Key('KP_3', 103);
    Key$KP_4_instance = new Key('KP_4', 104);
    Key$KP_5_instance = new Key('KP_5', 105);
    Key$KP_6_instance = new Key('KP_6', 106);
    Key$KP_7_instance = new Key('KP_7', 107);
    Key$KP_8_instance = new Key('KP_8', 108);
    Key$KP_9_instance = new Key('KP_9', 109);
    Key$KP_DECIMAL_instance = new Key('KP_DECIMAL', 110);
    Key$KP_DIVIDE_instance = new Key('KP_DIVIDE', 111);
    Key$KP_MULTIPLY_instance = new Key('KP_MULTIPLY', 112);
    Key$KP_SUBTRACT_instance = new Key('KP_SUBTRACT', 113);
    Key$KP_ADD_instance = new Key('KP_ADD', 114);
    Key$KP_ENTER_instance = new Key('KP_ENTER', 115);
    Key$KP_EQUAL_instance = new Key('KP_EQUAL', 116);
    Key$KP_SEPARATOR_instance = new Key('KP_SEPARATOR', 117);
    Key$LEFT_SHIFT_instance = new Key('LEFT_SHIFT', 118);
    Key$LEFT_CONTROL_instance = new Key('LEFT_CONTROL', 119);
    Key$LEFT_ALT_instance = new Key('LEFT_ALT', 120);
    Key$LEFT_SUPER_instance = new Key('LEFT_SUPER', 121);
    Key$RIGHT_SHIFT_instance = new Key('RIGHT_SHIFT', 122);
    Key$RIGHT_CONTROL_instance = new Key('RIGHT_CONTROL', 123);
    Key$RIGHT_ALT_instance = new Key('RIGHT_ALT', 124);
    Key$RIGHT_SUPER_instance = new Key('RIGHT_SUPER', 125);
    Key$MENU_instance = new Key('MENU', 126);
    Key$BACKQUOTE_instance = new Key('BACKQUOTE', 127);
    Key$QUOTE_instance = new Key('QUOTE', 128);
    Key$KP_UP_instance = new Key('KP_UP', 129);
    Key$KP_DOWN_instance = new Key('KP_DOWN', 130);
    Key$KP_LEFT_instance = new Key('KP_LEFT', 131);
    Key$KP_RIGHT_instance = new Key('KP_RIGHT', 132);
    Key$UNDERLINE_instance = new Key('UNDERLINE', 133);
    Key$SELECT_KEY_instance = new Key('SELECT_KEY', 134);
    Key$CANCEL_instance = new Key('CANCEL', 135);
    Key$CLEAR_instance = new Key('CLEAR', 136);
    Key$OPEN_BRACKET_instance = new Key('OPEN_BRACKET', 137);
    Key$CLOSE_BRACKET_instance = new Key('CLOSE_BRACKET', 138);
    Key$UNDEFINED_instance = new Key('UNDEFINED', 139);
    Key$UNKNOWN_instance = new Key('UNKNOWN', 140);
    Key$Companion_getInstance();
  }
  var Key$SPACE_instance;
  function Key$SPACE_getInstance() {
    Key_initFields();
    return Key$SPACE_instance;
  }
  var Key$APOSTROPHE_instance;
  function Key$APOSTROPHE_getInstance() {
    Key_initFields();
    return Key$APOSTROPHE_instance;
  }
  var Key$COMMA_instance;
  function Key$COMMA_getInstance() {
    Key_initFields();
    return Key$COMMA_instance;
  }
  var Key$MINUS_instance;
  function Key$MINUS_getInstance() {
    Key_initFields();
    return Key$MINUS_instance;
  }
  var Key$PERIOD_instance;
  function Key$PERIOD_getInstance() {
    Key_initFields();
    return Key$PERIOD_instance;
  }
  var Key$SLASH_instance;
  function Key$SLASH_getInstance() {
    Key_initFields();
    return Key$SLASH_instance;
  }
  var Key$N0_instance;
  function Key$N0_getInstance() {
    Key_initFields();
    return Key$N0_instance;
  }
  var Key$N1_instance;
  function Key$N1_getInstance() {
    Key_initFields();
    return Key$N1_instance;
  }
  var Key$N2_instance;
  function Key$N2_getInstance() {
    Key_initFields();
    return Key$N2_instance;
  }
  var Key$N3_instance;
  function Key$N3_getInstance() {
    Key_initFields();
    return Key$N3_instance;
  }
  var Key$N4_instance;
  function Key$N4_getInstance() {
    Key_initFields();
    return Key$N4_instance;
  }
  var Key$N5_instance;
  function Key$N5_getInstance() {
    Key_initFields();
    return Key$N5_instance;
  }
  var Key$N6_instance;
  function Key$N6_getInstance() {
    Key_initFields();
    return Key$N6_instance;
  }
  var Key$N7_instance;
  function Key$N7_getInstance() {
    Key_initFields();
    return Key$N7_instance;
  }
  var Key$N8_instance;
  function Key$N8_getInstance() {
    Key_initFields();
    return Key$N8_instance;
  }
  var Key$N9_instance;
  function Key$N9_getInstance() {
    Key_initFields();
    return Key$N9_instance;
  }
  var Key$SEMICOLON_instance;
  function Key$SEMICOLON_getInstance() {
    Key_initFields();
    return Key$SEMICOLON_instance;
  }
  var Key$EQUAL_instance;
  function Key$EQUAL_getInstance() {
    Key_initFields();
    return Key$EQUAL_instance;
  }
  var Key$A_instance;
  function Key$A_getInstance() {
    Key_initFields();
    return Key$A_instance;
  }
  var Key$B_instance;
  function Key$B_getInstance() {
    Key_initFields();
    return Key$B_instance;
  }
  var Key$C_instance;
  function Key$C_getInstance() {
    Key_initFields();
    return Key$C_instance;
  }
  var Key$D_instance;
  function Key$D_getInstance() {
    Key_initFields();
    return Key$D_instance;
  }
  var Key$E_instance;
  function Key$E_getInstance() {
    Key_initFields();
    return Key$E_instance;
  }
  var Key$F_instance;
  function Key$F_getInstance() {
    Key_initFields();
    return Key$F_instance;
  }
  var Key$G_instance;
  function Key$G_getInstance() {
    Key_initFields();
    return Key$G_instance;
  }
  var Key$H_instance;
  function Key$H_getInstance() {
    Key_initFields();
    return Key$H_instance;
  }
  var Key$I_instance;
  function Key$I_getInstance() {
    Key_initFields();
    return Key$I_instance;
  }
  var Key$J_instance;
  function Key$J_getInstance() {
    Key_initFields();
    return Key$J_instance;
  }
  var Key$K_instance;
  function Key$K_getInstance() {
    Key_initFields();
    return Key$K_instance;
  }
  var Key$L_instance;
  function Key$L_getInstance() {
    Key_initFields();
    return Key$L_instance;
  }
  var Key$M_instance;
  function Key$M_getInstance() {
    Key_initFields();
    return Key$M_instance;
  }
  var Key$N_instance;
  function Key$N_getInstance() {
    Key_initFields();
    return Key$N_instance;
  }
  var Key$O_instance;
  function Key$O_getInstance() {
    Key_initFields();
    return Key$O_instance;
  }
  var Key$P_instance;
  function Key$P_getInstance() {
    Key_initFields();
    return Key$P_instance;
  }
  var Key$Q_instance;
  function Key$Q_getInstance() {
    Key_initFields();
    return Key$Q_instance;
  }
  var Key$R_instance;
  function Key$R_getInstance() {
    Key_initFields();
    return Key$R_instance;
  }
  var Key$S_instance;
  function Key$S_getInstance() {
    Key_initFields();
    return Key$S_instance;
  }
  var Key$T_instance;
  function Key$T_getInstance() {
    Key_initFields();
    return Key$T_instance;
  }
  var Key$U_instance;
  function Key$U_getInstance() {
    Key_initFields();
    return Key$U_instance;
  }
  var Key$V_instance;
  function Key$V_getInstance() {
    Key_initFields();
    return Key$V_instance;
  }
  var Key$W_instance;
  function Key$W_getInstance() {
    Key_initFields();
    return Key$W_instance;
  }
  var Key$X_instance;
  function Key$X_getInstance() {
    Key_initFields();
    return Key$X_instance;
  }
  var Key$Y_instance;
  function Key$Y_getInstance() {
    Key_initFields();
    return Key$Y_instance;
  }
  var Key$Z_instance;
  function Key$Z_getInstance() {
    Key_initFields();
    return Key$Z_instance;
  }
  var Key$LEFT_BRACKET_instance;
  function Key$LEFT_BRACKET_getInstance() {
    Key_initFields();
    return Key$LEFT_BRACKET_instance;
  }
  var Key$BACKSLASH_instance;
  function Key$BACKSLASH_getInstance() {
    Key_initFields();
    return Key$BACKSLASH_instance;
  }
  var Key$RIGHT_BRACKET_instance;
  function Key$RIGHT_BRACKET_getInstance() {
    Key_initFields();
    return Key$RIGHT_BRACKET_instance;
  }
  var Key$GRAVE_ACCENT_instance;
  function Key$GRAVE_ACCENT_getInstance() {
    Key_initFields();
    return Key$GRAVE_ACCENT_instance;
  }
  var Key$WORLD_1_instance;
  function Key$WORLD_1_getInstance() {
    Key_initFields();
    return Key$WORLD_1_instance;
  }
  var Key$WORLD_2_instance;
  function Key$WORLD_2_getInstance() {
    Key_initFields();
    return Key$WORLD_2_instance;
  }
  var Key$ESCAPE_instance;
  function Key$ESCAPE_getInstance() {
    Key_initFields();
    return Key$ESCAPE_instance;
  }
  var Key$META_instance;
  function Key$META_getInstance() {
    Key_initFields();
    return Key$META_instance;
  }
  var Key$ENTER_instance;
  function Key$ENTER_getInstance() {
    Key_initFields();
    return Key$ENTER_instance;
  }
  var Key$TAB_instance;
  function Key$TAB_getInstance() {
    Key_initFields();
    return Key$TAB_instance;
  }
  var Key$BACKSPACE_instance;
  function Key$BACKSPACE_getInstance() {
    Key_initFields();
    return Key$BACKSPACE_instance;
  }
  var Key$INSERT_instance;
  function Key$INSERT_getInstance() {
    Key_initFields();
    return Key$INSERT_instance;
  }
  var Key$DELETE_instance;
  function Key$DELETE_getInstance() {
    Key_initFields();
    return Key$DELETE_instance;
  }
  var Key$RIGHT_instance;
  function Key$RIGHT_getInstance() {
    Key_initFields();
    return Key$RIGHT_instance;
  }
  var Key$LEFT_instance;
  function Key$LEFT_getInstance() {
    Key_initFields();
    return Key$LEFT_instance;
  }
  var Key$DOWN_instance;
  function Key$DOWN_getInstance() {
    Key_initFields();
    return Key$DOWN_instance;
  }
  var Key$UP_instance;
  function Key$UP_getInstance() {
    Key_initFields();
    return Key$UP_instance;
  }
  var Key$PAGE_UP_instance;
  function Key$PAGE_UP_getInstance() {
    Key_initFields();
    return Key$PAGE_UP_instance;
  }
  var Key$PAGE_DOWN_instance;
  function Key$PAGE_DOWN_getInstance() {
    Key_initFields();
    return Key$PAGE_DOWN_instance;
  }
  var Key$FUNCTION_instance;
  function Key$FUNCTION_getInstance() {
    Key_initFields();
    return Key$FUNCTION_instance;
  }
  var Key$HELP_instance;
  function Key$HELP_getInstance() {
    Key_initFields();
    return Key$HELP_instance;
  }
  var Key$MUTE_instance;
  function Key$MUTE_getInstance() {
    Key_initFields();
    return Key$MUTE_instance;
  }
  var Key$VOLUME_DOWN_instance;
  function Key$VOLUME_DOWN_getInstance() {
    Key_initFields();
    return Key$VOLUME_DOWN_instance;
  }
  var Key$VOLUME_UP_instance;
  function Key$VOLUME_UP_getInstance() {
    Key_initFields();
    return Key$VOLUME_UP_instance;
  }
  var Key$HOME_instance;
  function Key$HOME_getInstance() {
    Key_initFields();
    return Key$HOME_instance;
  }
  var Key$END_instance;
  function Key$END_getInstance() {
    Key_initFields();
    return Key$END_instance;
  }
  var Key$CAPS_LOCK_instance;
  function Key$CAPS_LOCK_getInstance() {
    Key_initFields();
    return Key$CAPS_LOCK_instance;
  }
  var Key$SCROLL_LOCK_instance;
  function Key$SCROLL_LOCK_getInstance() {
    Key_initFields();
    return Key$SCROLL_LOCK_instance;
  }
  var Key$NUM_LOCK_instance;
  function Key$NUM_LOCK_getInstance() {
    Key_initFields();
    return Key$NUM_LOCK_instance;
  }
  var Key$PRINT_SCREEN_instance;
  function Key$PRINT_SCREEN_getInstance() {
    Key_initFields();
    return Key$PRINT_SCREEN_instance;
  }
  var Key$PAUSE_instance;
  function Key$PAUSE_getInstance() {
    Key_initFields();
    return Key$PAUSE_instance;
  }
  var Key$F1_instance;
  function Key$F1_getInstance() {
    Key_initFields();
    return Key$F1_instance;
  }
  var Key$F2_instance;
  function Key$F2_getInstance() {
    Key_initFields();
    return Key$F2_instance;
  }
  var Key$F3_instance;
  function Key$F3_getInstance() {
    Key_initFields();
    return Key$F3_instance;
  }
  var Key$F4_instance;
  function Key$F4_getInstance() {
    Key_initFields();
    return Key$F4_instance;
  }
  var Key$F5_instance;
  function Key$F5_getInstance() {
    Key_initFields();
    return Key$F5_instance;
  }
  var Key$F6_instance;
  function Key$F6_getInstance() {
    Key_initFields();
    return Key$F6_instance;
  }
  var Key$F7_instance;
  function Key$F7_getInstance() {
    Key_initFields();
    return Key$F7_instance;
  }
  var Key$F8_instance;
  function Key$F8_getInstance() {
    Key_initFields();
    return Key$F8_instance;
  }
  var Key$F9_instance;
  function Key$F9_getInstance() {
    Key_initFields();
    return Key$F9_instance;
  }
  var Key$F10_instance;
  function Key$F10_getInstance() {
    Key_initFields();
    return Key$F10_instance;
  }
  var Key$F11_instance;
  function Key$F11_getInstance() {
    Key_initFields();
    return Key$F11_instance;
  }
  var Key$F12_instance;
  function Key$F12_getInstance() {
    Key_initFields();
    return Key$F12_instance;
  }
  var Key$F13_instance;
  function Key$F13_getInstance() {
    Key_initFields();
    return Key$F13_instance;
  }
  var Key$F14_instance;
  function Key$F14_getInstance() {
    Key_initFields();
    return Key$F14_instance;
  }
  var Key$F15_instance;
  function Key$F15_getInstance() {
    Key_initFields();
    return Key$F15_instance;
  }
  var Key$F16_instance;
  function Key$F16_getInstance() {
    Key_initFields();
    return Key$F16_instance;
  }
  var Key$F17_instance;
  function Key$F17_getInstance() {
    Key_initFields();
    return Key$F17_instance;
  }
  var Key$F18_instance;
  function Key$F18_getInstance() {
    Key_initFields();
    return Key$F18_instance;
  }
  var Key$F19_instance;
  function Key$F19_getInstance() {
    Key_initFields();
    return Key$F19_instance;
  }
  var Key$F20_instance;
  function Key$F20_getInstance() {
    Key_initFields();
    return Key$F20_instance;
  }
  var Key$F21_instance;
  function Key$F21_getInstance() {
    Key_initFields();
    return Key$F21_instance;
  }
  var Key$F22_instance;
  function Key$F22_getInstance() {
    Key_initFields();
    return Key$F22_instance;
  }
  var Key$F23_instance;
  function Key$F23_getInstance() {
    Key_initFields();
    return Key$F23_instance;
  }
  var Key$F24_instance;
  function Key$F24_getInstance() {
    Key_initFields();
    return Key$F24_instance;
  }
  var Key$F25_instance;
  function Key$F25_getInstance() {
    Key_initFields();
    return Key$F25_instance;
  }
  var Key$KP_0_instance;
  function Key$KP_0_getInstance() {
    Key_initFields();
    return Key$KP_0_instance;
  }
  var Key$KP_1_instance;
  function Key$KP_1_getInstance() {
    Key_initFields();
    return Key$KP_1_instance;
  }
  var Key$KP_2_instance;
  function Key$KP_2_getInstance() {
    Key_initFields();
    return Key$KP_2_instance;
  }
  var Key$KP_3_instance;
  function Key$KP_3_getInstance() {
    Key_initFields();
    return Key$KP_3_instance;
  }
  var Key$KP_4_instance;
  function Key$KP_4_getInstance() {
    Key_initFields();
    return Key$KP_4_instance;
  }
  var Key$KP_5_instance;
  function Key$KP_5_getInstance() {
    Key_initFields();
    return Key$KP_5_instance;
  }
  var Key$KP_6_instance;
  function Key$KP_6_getInstance() {
    Key_initFields();
    return Key$KP_6_instance;
  }
  var Key$KP_7_instance;
  function Key$KP_7_getInstance() {
    Key_initFields();
    return Key$KP_7_instance;
  }
  var Key$KP_8_instance;
  function Key$KP_8_getInstance() {
    Key_initFields();
    return Key$KP_8_instance;
  }
  var Key$KP_9_instance;
  function Key$KP_9_getInstance() {
    Key_initFields();
    return Key$KP_9_instance;
  }
  var Key$KP_DECIMAL_instance;
  function Key$KP_DECIMAL_getInstance() {
    Key_initFields();
    return Key$KP_DECIMAL_instance;
  }
  var Key$KP_DIVIDE_instance;
  function Key$KP_DIVIDE_getInstance() {
    Key_initFields();
    return Key$KP_DIVIDE_instance;
  }
  var Key$KP_MULTIPLY_instance;
  function Key$KP_MULTIPLY_getInstance() {
    Key_initFields();
    return Key$KP_MULTIPLY_instance;
  }
  var Key$KP_SUBTRACT_instance;
  function Key$KP_SUBTRACT_getInstance() {
    Key_initFields();
    return Key$KP_SUBTRACT_instance;
  }
  var Key$KP_ADD_instance;
  function Key$KP_ADD_getInstance() {
    Key_initFields();
    return Key$KP_ADD_instance;
  }
  var Key$KP_ENTER_instance;
  function Key$KP_ENTER_getInstance() {
    Key_initFields();
    return Key$KP_ENTER_instance;
  }
  var Key$KP_EQUAL_instance;
  function Key$KP_EQUAL_getInstance() {
    Key_initFields();
    return Key$KP_EQUAL_instance;
  }
  var Key$KP_SEPARATOR_instance;
  function Key$KP_SEPARATOR_getInstance() {
    Key_initFields();
    return Key$KP_SEPARATOR_instance;
  }
  var Key$LEFT_SHIFT_instance;
  function Key$LEFT_SHIFT_getInstance() {
    Key_initFields();
    return Key$LEFT_SHIFT_instance;
  }
  var Key$LEFT_CONTROL_instance;
  function Key$LEFT_CONTROL_getInstance() {
    Key_initFields();
    return Key$LEFT_CONTROL_instance;
  }
  var Key$LEFT_ALT_instance;
  function Key$LEFT_ALT_getInstance() {
    Key_initFields();
    return Key$LEFT_ALT_instance;
  }
  var Key$LEFT_SUPER_instance;
  function Key$LEFT_SUPER_getInstance() {
    Key_initFields();
    return Key$LEFT_SUPER_instance;
  }
  var Key$RIGHT_SHIFT_instance;
  function Key$RIGHT_SHIFT_getInstance() {
    Key_initFields();
    return Key$RIGHT_SHIFT_instance;
  }
  var Key$RIGHT_CONTROL_instance;
  function Key$RIGHT_CONTROL_getInstance() {
    Key_initFields();
    return Key$RIGHT_CONTROL_instance;
  }
  var Key$RIGHT_ALT_instance;
  function Key$RIGHT_ALT_getInstance() {
    Key_initFields();
    return Key$RIGHT_ALT_instance;
  }
  var Key$RIGHT_SUPER_instance;
  function Key$RIGHT_SUPER_getInstance() {
    Key_initFields();
    return Key$RIGHT_SUPER_instance;
  }
  var Key$MENU_instance;
  function Key$MENU_getInstance() {
    Key_initFields();
    return Key$MENU_instance;
  }
  var Key$BACKQUOTE_instance;
  function Key$BACKQUOTE_getInstance() {
    Key_initFields();
    return Key$BACKQUOTE_instance;
  }
  var Key$QUOTE_instance;
  function Key$QUOTE_getInstance() {
    Key_initFields();
    return Key$QUOTE_instance;
  }
  var Key$KP_UP_instance;
  function Key$KP_UP_getInstance() {
    Key_initFields();
    return Key$KP_UP_instance;
  }
  var Key$KP_DOWN_instance;
  function Key$KP_DOWN_getInstance() {
    Key_initFields();
    return Key$KP_DOWN_instance;
  }
  var Key$KP_LEFT_instance;
  function Key$KP_LEFT_getInstance() {
    Key_initFields();
    return Key$KP_LEFT_instance;
  }
  var Key$KP_RIGHT_instance;
  function Key$KP_RIGHT_getInstance() {
    Key_initFields();
    return Key$KP_RIGHT_instance;
  }
  var Key$UNDERLINE_instance;
  function Key$UNDERLINE_getInstance() {
    Key_initFields();
    return Key$UNDERLINE_instance;
  }
  var Key$SELECT_KEY_instance;
  function Key$SELECT_KEY_getInstance() {
    Key_initFields();
    return Key$SELECT_KEY_instance;
  }
  var Key$CANCEL_instance;
  function Key$CANCEL_getInstance() {
    Key_initFields();
    return Key$CANCEL_instance;
  }
  var Key$CLEAR_instance;
  function Key$CLEAR_getInstance() {
    Key_initFields();
    return Key$CLEAR_instance;
  }
  var Key$OPEN_BRACKET_instance;
  function Key$OPEN_BRACKET_getInstance() {
    Key_initFields();
    return Key$OPEN_BRACKET_instance;
  }
  var Key$CLOSE_BRACKET_instance;
  function Key$CLOSE_BRACKET_getInstance() {
    Key_initFields();
    return Key$CLOSE_BRACKET_instance;
  }
  var Key$UNDEFINED_instance;
  function Key$UNDEFINED_getInstance() {
    Key_initFields();
    return Key$UNDEFINED_instance;
  }
  var Key$UNKNOWN_instance;
  function Key$UNKNOWN_getInstance() {
    Key_initFields();
    return Key$UNKNOWN_instance;
  }
  function Key$Companion() {
    Key$Companion_instance = this;
    this.MAX = Key$UNKNOWN_getInstance().ordinal + 1 | 0;
    this.RETURN = Key$ENTER_getInstance();
    this.NUMPAD0 = Key$N0_getInstance();
    this.NUMPAD1 = Key$N1_getInstance();
    this.NUMPAD2 = Key$N2_getInstance();
    this.NUMPAD3 = Key$N3_getInstance();
    this.NUMPAD4 = Key$N4_getInstance();
    this.NUMPAD5 = Key$N5_getInstance();
    this.NUMPAD6 = Key$N6_getInstance();
    this.NUMPAD7 = Key$N7_getInstance();
    this.NUMPAD8 = Key$N8_getInstance();
    this.NUMPAD9 = Key$N9_getInstance();
  }
  Key$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Key$Companion_instance = null;
  function Key$Companion_getInstance() {
    Key_initFields();
    if (Key$Companion_instance === null) {
      new Key$Companion();
    }
    return Key$Companion_instance;
  }
  Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function Key$values() {
    return [Key$SPACE_getInstance(), Key$APOSTROPHE_getInstance(), Key$COMMA_getInstance(), Key$MINUS_getInstance(), Key$PERIOD_getInstance(), Key$SLASH_getInstance(), Key$N0_getInstance(), Key$N1_getInstance(), Key$N2_getInstance(), Key$N3_getInstance(), Key$N4_getInstance(), Key$N5_getInstance(), Key$N6_getInstance(), Key$N7_getInstance(), Key$N8_getInstance(), Key$N9_getInstance(), Key$SEMICOLON_getInstance(), Key$EQUAL_getInstance(), Key$A_getInstance(), Key$B_getInstance(), Key$C_getInstance(), Key$D_getInstance(), Key$E_getInstance(), Key$F_getInstance(), Key$G_getInstance(), Key$H_getInstance(), Key$I_getInstance(), Key$J_getInstance(), Key$K_getInstance(), Key$L_getInstance(), Key$M_getInstance(), Key$N_getInstance(), Key$O_getInstance(), Key$P_getInstance(), Key$Q_getInstance(), Key$R_getInstance(), Key$S_getInstance(), Key$T_getInstance(), Key$U_getInstance(), Key$V_getInstance(), Key$W_getInstance(), Key$X_getInstance(), Key$Y_getInstance(), Key$Z_getInstance(), Key$LEFT_BRACKET_getInstance(), Key$BACKSLASH_getInstance(), Key$RIGHT_BRACKET_getInstance(), Key$GRAVE_ACCENT_getInstance(), Key$WORLD_1_getInstance(), Key$WORLD_2_getInstance(), Key$ESCAPE_getInstance(), Key$META_getInstance(), Key$ENTER_getInstance(), Key$TAB_getInstance(), Key$BACKSPACE_getInstance(), Key$INSERT_getInstance(), Key$DELETE_getInstance(), Key$RIGHT_getInstance(), Key$LEFT_getInstance(), Key$DOWN_getInstance(), Key$UP_getInstance(), Key$PAGE_UP_getInstance(), Key$PAGE_DOWN_getInstance(), Key$FUNCTION_getInstance(), Key$HELP_getInstance(), Key$MUTE_getInstance(), Key$VOLUME_DOWN_getInstance(), Key$VOLUME_UP_getInstance(), Key$HOME_getInstance(), Key$END_getInstance(), Key$CAPS_LOCK_getInstance(), Key$SCROLL_LOCK_getInstance(), Key$NUM_LOCK_getInstance(), Key$PRINT_SCREEN_getInstance(), Key$PAUSE_getInstance(), Key$F1_getInstance(), Key$F2_getInstance(), Key$F3_getInstance(), Key$F4_getInstance(), Key$F5_getInstance(), Key$F6_getInstance(), Key$F7_getInstance(), Key$F8_getInstance(), Key$F9_getInstance(), Key$F10_getInstance(), Key$F11_getInstance(), Key$F12_getInstance(), Key$F13_getInstance(), Key$F14_getInstance(), Key$F15_getInstance(), Key$F16_getInstance(), Key$F17_getInstance(), Key$F18_getInstance(), Key$F19_getInstance(), Key$F20_getInstance(), Key$F21_getInstance(), Key$F22_getInstance(), Key$F23_getInstance(), Key$F24_getInstance(), Key$F25_getInstance(), Key$KP_0_getInstance(), Key$KP_1_getInstance(), Key$KP_2_getInstance(), Key$KP_3_getInstance(), Key$KP_4_getInstance(), Key$KP_5_getInstance(), Key$KP_6_getInstance(), Key$KP_7_getInstance(), Key$KP_8_getInstance(), Key$KP_9_getInstance(), Key$KP_DECIMAL_getInstance(), Key$KP_DIVIDE_getInstance(), Key$KP_MULTIPLY_getInstance(), Key$KP_SUBTRACT_getInstance(), Key$KP_ADD_getInstance(), Key$KP_ENTER_getInstance(), Key$KP_EQUAL_getInstance(), Key$KP_SEPARATOR_getInstance(), Key$LEFT_SHIFT_getInstance(), Key$LEFT_CONTROL_getInstance(), Key$LEFT_ALT_getInstance(), Key$LEFT_SUPER_getInstance(), Key$RIGHT_SHIFT_getInstance(), Key$RIGHT_CONTROL_getInstance(), Key$RIGHT_ALT_getInstance(), Key$RIGHT_SUPER_getInstance(), Key$MENU_getInstance(), Key$BACKQUOTE_getInstance(), Key$QUOTE_getInstance(), Key$KP_UP_getInstance(), Key$KP_DOWN_getInstance(), Key$KP_LEFT_getInstance(), Key$KP_RIGHT_getInstance(), Key$UNDERLINE_getInstance(), Key$SELECT_KEY_getInstance(), Key$CANCEL_getInstance(), Key$CLEAR_getInstance(), Key$OPEN_BRACKET_getInstance(), Key$CLOSE_BRACKET_getInstance(), Key$UNDEFINED_getInstance(), Key$UNKNOWN_getInstance()];
  }
  Key.values = Key$values;
  function Key$valueOf(name) {
    switch (name) {
      case 'SPACE':
        return Key$SPACE_getInstance();
      case 'APOSTROPHE':
        return Key$APOSTROPHE_getInstance();
      case 'COMMA':
        return Key$COMMA_getInstance();
      case 'MINUS':
        return Key$MINUS_getInstance();
      case 'PERIOD':
        return Key$PERIOD_getInstance();
      case 'SLASH':
        return Key$SLASH_getInstance();
      case 'N0':
        return Key$N0_getInstance();
      case 'N1':
        return Key$N1_getInstance();
      case 'N2':
        return Key$N2_getInstance();
      case 'N3':
        return Key$N3_getInstance();
      case 'N4':
        return Key$N4_getInstance();
      case 'N5':
        return Key$N5_getInstance();
      case 'N6':
        return Key$N6_getInstance();
      case 'N7':
        return Key$N7_getInstance();
      case 'N8':
        return Key$N8_getInstance();
      case 'N9':
        return Key$N9_getInstance();
      case 'SEMICOLON':
        return Key$SEMICOLON_getInstance();
      case 'EQUAL':
        return Key$EQUAL_getInstance();
      case 'A':
        return Key$A_getInstance();
      case 'B':
        return Key$B_getInstance();
      case 'C':
        return Key$C_getInstance();
      case 'D':
        return Key$D_getInstance();
      case 'E':
        return Key$E_getInstance();
      case 'F':
        return Key$F_getInstance();
      case 'G':
        return Key$G_getInstance();
      case 'H':
        return Key$H_getInstance();
      case 'I':
        return Key$I_getInstance();
      case 'J':
        return Key$J_getInstance();
      case 'K':
        return Key$K_getInstance();
      case 'L':
        return Key$L_getInstance();
      case 'M':
        return Key$M_getInstance();
      case 'N':
        return Key$N_getInstance();
      case 'O':
        return Key$O_getInstance();
      case 'P':
        return Key$P_getInstance();
      case 'Q':
        return Key$Q_getInstance();
      case 'R':
        return Key$R_getInstance();
      case 'S':
        return Key$S_getInstance();
      case 'T':
        return Key$T_getInstance();
      case 'U':
        return Key$U_getInstance();
      case 'V':
        return Key$V_getInstance();
      case 'W':
        return Key$W_getInstance();
      case 'X':
        return Key$X_getInstance();
      case 'Y':
        return Key$Y_getInstance();
      case 'Z':
        return Key$Z_getInstance();
      case 'LEFT_BRACKET':
        return Key$LEFT_BRACKET_getInstance();
      case 'BACKSLASH':
        return Key$BACKSLASH_getInstance();
      case 'RIGHT_BRACKET':
        return Key$RIGHT_BRACKET_getInstance();
      case 'GRAVE_ACCENT':
        return Key$GRAVE_ACCENT_getInstance();
      case 'WORLD_1':
        return Key$WORLD_1_getInstance();
      case 'WORLD_2':
        return Key$WORLD_2_getInstance();
      case 'ESCAPE':
        return Key$ESCAPE_getInstance();
      case 'META':
        return Key$META_getInstance();
      case 'ENTER':
        return Key$ENTER_getInstance();
      case 'TAB':
        return Key$TAB_getInstance();
      case 'BACKSPACE':
        return Key$BACKSPACE_getInstance();
      case 'INSERT':
        return Key$INSERT_getInstance();
      case 'DELETE':
        return Key$DELETE_getInstance();
      case 'RIGHT':
        return Key$RIGHT_getInstance();
      case 'LEFT':
        return Key$LEFT_getInstance();
      case 'DOWN':
        return Key$DOWN_getInstance();
      case 'UP':
        return Key$UP_getInstance();
      case 'PAGE_UP':
        return Key$PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return Key$PAGE_DOWN_getInstance();
      case 'FUNCTION':
        return Key$FUNCTION_getInstance();
      case 'HELP':
        return Key$HELP_getInstance();
      case 'MUTE':
        return Key$MUTE_getInstance();
      case 'VOLUME_DOWN':
        return Key$VOLUME_DOWN_getInstance();
      case 'VOLUME_UP':
        return Key$VOLUME_UP_getInstance();
      case 'HOME':
        return Key$HOME_getInstance();
      case 'END':
        return Key$END_getInstance();
      case 'CAPS_LOCK':
        return Key$CAPS_LOCK_getInstance();
      case 'SCROLL_LOCK':
        return Key$SCROLL_LOCK_getInstance();
      case 'NUM_LOCK':
        return Key$NUM_LOCK_getInstance();
      case 'PRINT_SCREEN':
        return Key$PRINT_SCREEN_getInstance();
      case 'PAUSE':
        return Key$PAUSE_getInstance();
      case 'F1':
        return Key$F1_getInstance();
      case 'F2':
        return Key$F2_getInstance();
      case 'F3':
        return Key$F3_getInstance();
      case 'F4':
        return Key$F4_getInstance();
      case 'F5':
        return Key$F5_getInstance();
      case 'F6':
        return Key$F6_getInstance();
      case 'F7':
        return Key$F7_getInstance();
      case 'F8':
        return Key$F8_getInstance();
      case 'F9':
        return Key$F9_getInstance();
      case 'F10':
        return Key$F10_getInstance();
      case 'F11':
        return Key$F11_getInstance();
      case 'F12':
        return Key$F12_getInstance();
      case 'F13':
        return Key$F13_getInstance();
      case 'F14':
        return Key$F14_getInstance();
      case 'F15':
        return Key$F15_getInstance();
      case 'F16':
        return Key$F16_getInstance();
      case 'F17':
        return Key$F17_getInstance();
      case 'F18':
        return Key$F18_getInstance();
      case 'F19':
        return Key$F19_getInstance();
      case 'F20':
        return Key$F20_getInstance();
      case 'F21':
        return Key$F21_getInstance();
      case 'F22':
        return Key$F22_getInstance();
      case 'F23':
        return Key$F23_getInstance();
      case 'F24':
        return Key$F24_getInstance();
      case 'F25':
        return Key$F25_getInstance();
      case 'KP_0':
        return Key$KP_0_getInstance();
      case 'KP_1':
        return Key$KP_1_getInstance();
      case 'KP_2':
        return Key$KP_2_getInstance();
      case 'KP_3':
        return Key$KP_3_getInstance();
      case 'KP_4':
        return Key$KP_4_getInstance();
      case 'KP_5':
        return Key$KP_5_getInstance();
      case 'KP_6':
        return Key$KP_6_getInstance();
      case 'KP_7':
        return Key$KP_7_getInstance();
      case 'KP_8':
        return Key$KP_8_getInstance();
      case 'KP_9':
        return Key$KP_9_getInstance();
      case 'KP_DECIMAL':
        return Key$KP_DECIMAL_getInstance();
      case 'KP_DIVIDE':
        return Key$KP_DIVIDE_getInstance();
      case 'KP_MULTIPLY':
        return Key$KP_MULTIPLY_getInstance();
      case 'KP_SUBTRACT':
        return Key$KP_SUBTRACT_getInstance();
      case 'KP_ADD':
        return Key$KP_ADD_getInstance();
      case 'KP_ENTER':
        return Key$KP_ENTER_getInstance();
      case 'KP_EQUAL':
        return Key$KP_EQUAL_getInstance();
      case 'KP_SEPARATOR':
        return Key$KP_SEPARATOR_getInstance();
      case 'LEFT_SHIFT':
        return Key$LEFT_SHIFT_getInstance();
      case 'LEFT_CONTROL':
        return Key$LEFT_CONTROL_getInstance();
      case 'LEFT_ALT':
        return Key$LEFT_ALT_getInstance();
      case 'LEFT_SUPER':
        return Key$LEFT_SUPER_getInstance();
      case 'RIGHT_SHIFT':
        return Key$RIGHT_SHIFT_getInstance();
      case 'RIGHT_CONTROL':
        return Key$RIGHT_CONTROL_getInstance();
      case 'RIGHT_ALT':
        return Key$RIGHT_ALT_getInstance();
      case 'RIGHT_SUPER':
        return Key$RIGHT_SUPER_getInstance();
      case 'MENU':
        return Key$MENU_getInstance();
      case 'BACKQUOTE':
        return Key$BACKQUOTE_getInstance();
      case 'QUOTE':
        return Key$QUOTE_getInstance();
      case 'KP_UP':
        return Key$KP_UP_getInstance();
      case 'KP_DOWN':
        return Key$KP_DOWN_getInstance();
      case 'KP_LEFT':
        return Key$KP_LEFT_getInstance();
      case 'KP_RIGHT':
        return Key$KP_RIGHT_getInstance();
      case 'UNDERLINE':
        return Key$UNDERLINE_getInstance();
      case 'SELECT_KEY':
        return Key$SELECT_KEY_getInstance();
      case 'CANCEL':
        return Key$CANCEL_getInstance();
      case 'CLEAR':
        return Key$CLEAR_getInstance();
      case 'OPEN_BRACKET':
        return Key$OPEN_BRACKET_getInstance();
      case 'CLOSE_BRACKET':
        return Key$CLOSE_BRACKET_getInstance();
      case 'UNDEFINED':
        return Key$UNDEFINED_getInstance();
      case 'UNKNOWN':
        return Key$UNKNOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.Key.' + name);
    }
  }
  Key.valueOf_61zpoe$ = Key$valueOf;
  function GameStick(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameStick_initFields() {
    GameStick_initFields = function () {
    };
    GameStick$LEFT_instance = new GameStick('LEFT', 0, 0);
    GameStick$RIGHT_instance = new GameStick('RIGHT', 1, 1);
    GameStick$Companion_getInstance();
  }
  var GameStick$LEFT_instance;
  function GameStick$LEFT_getInstance() {
    GameStick_initFields();
    return GameStick$LEFT_instance;
  }
  var GameStick$RIGHT_instance;
  function GameStick$RIGHT_getInstance() {
    GameStick_initFields();
    return GameStick$RIGHT_instance;
  }
  function GameStick$Companion() {
    GameStick$Companion_instance = this;
    this.STICKS = GameStick$values();
  }
  GameStick$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameStick$Companion_instance = null;
  function GameStick$Companion_getInstance() {
    GameStick_initFields();
    if (GameStick$Companion_instance === null) {
      new GameStick$Companion();
    }
    return GameStick$Companion_instance;
  }
  GameStick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameStick',
    interfaces: [Enum]
  };
  function GameStick$values() {
    return [GameStick$LEFT_getInstance(), GameStick$RIGHT_getInstance()];
  }
  GameStick.values = GameStick$values;
  function GameStick$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return GameStick$LEFT_getInstance();
      case 'RIGHT':
        return GameStick$RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GameStick.' + name);
    }
  }
  GameStick.valueOf_61zpoe$ = GameStick$valueOf;
  function GameButton(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameButton_initFields() {
    GameButton_initFields = function () {
    };
    GameButton$LEFT_instance = new GameButton('LEFT', 0, 0);
    GameButton$RIGHT_instance = new GameButton('RIGHT', 1, 1);
    GameButton$UP_instance = new GameButton('UP', 2, 2);
    GameButton$DOWN_instance = new GameButton('DOWN', 3, 3);
    GameButton$BUTTON0_instance = new GameButton('BUTTON0', 4, 4);
    GameButton$BUTTON1_instance = new GameButton('BUTTON1', 5, 5);
    GameButton$BUTTON2_instance = new GameButton('BUTTON2', 6, 6);
    GameButton$BUTTON3_instance = new GameButton('BUTTON3', 7, 7);
    GameButton$SELECT_instance = new GameButton('SELECT', 8, 8);
    GameButton$START_instance = new GameButton('START', 9, 9);
    GameButton$SYSTEM_instance = new GameButton('SYSTEM', 10, 10);
    GameButton$L1_instance = new GameButton('L1', 11, 11);
    GameButton$R1_instance = new GameButton('R1', 12, 12);
    GameButton$L2_instance = new GameButton('L2', 13, 13);
    GameButton$R2_instance = new GameButton('R2', 14, 14);
    GameButton$L3_instance = new GameButton('L3', 15, 15);
    GameButton$R3_instance = new GameButton('R3', 16, 16);
    GameButton$LX_instance = new GameButton('LX', 17, 17);
    GameButton$LY_instance = new GameButton('LY', 18, 18);
    GameButton$RX_instance = new GameButton('RX', 19, 19);
    GameButton$RY_instance = new GameButton('RY', 20, 20);
    GameButton$BUTTON4_instance = new GameButton('BUTTON4', 21, 24);
    GameButton$BUTTON5_instance = new GameButton('BUTTON5', 22, 25);
    GameButton$BUTTON6_instance = new GameButton('BUTTON6', 23, 26);
    GameButton$BUTTON7_instance = new GameButton('BUTTON7', 24, 27);
    GameButton$BUTTON8_instance = new GameButton('BUTTON8', 25, 28);
    GameButton$Companion_getInstance();
  }
  var GameButton$LEFT_instance;
  function GameButton$LEFT_getInstance() {
    GameButton_initFields();
    return GameButton$LEFT_instance;
  }
  var GameButton$RIGHT_instance;
  function GameButton$RIGHT_getInstance() {
    GameButton_initFields();
    return GameButton$RIGHT_instance;
  }
  var GameButton$UP_instance;
  function GameButton$UP_getInstance() {
    GameButton_initFields();
    return GameButton$UP_instance;
  }
  var GameButton$DOWN_instance;
  function GameButton$DOWN_getInstance() {
    GameButton_initFields();
    return GameButton$DOWN_instance;
  }
  var GameButton$BUTTON0_instance;
  function GameButton$BUTTON0_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON0_instance;
  }
  var GameButton$BUTTON1_instance;
  function GameButton$BUTTON1_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON1_instance;
  }
  var GameButton$BUTTON2_instance;
  function GameButton$BUTTON2_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON2_instance;
  }
  var GameButton$BUTTON3_instance;
  function GameButton$BUTTON3_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON3_instance;
  }
  var GameButton$SELECT_instance;
  function GameButton$SELECT_getInstance() {
    GameButton_initFields();
    return GameButton$SELECT_instance;
  }
  var GameButton$START_instance;
  function GameButton$START_getInstance() {
    GameButton_initFields();
    return GameButton$START_instance;
  }
  var GameButton$SYSTEM_instance;
  function GameButton$SYSTEM_getInstance() {
    GameButton_initFields();
    return GameButton$SYSTEM_instance;
  }
  var GameButton$L1_instance;
  function GameButton$L1_getInstance() {
    GameButton_initFields();
    return GameButton$L1_instance;
  }
  var GameButton$R1_instance;
  function GameButton$R1_getInstance() {
    GameButton_initFields();
    return GameButton$R1_instance;
  }
  var GameButton$L2_instance;
  function GameButton$L2_getInstance() {
    GameButton_initFields();
    return GameButton$L2_instance;
  }
  var GameButton$R2_instance;
  function GameButton$R2_getInstance() {
    GameButton_initFields();
    return GameButton$R2_instance;
  }
  var GameButton$L3_instance;
  function GameButton$L3_getInstance() {
    GameButton_initFields();
    return GameButton$L3_instance;
  }
  var GameButton$R3_instance;
  function GameButton$R3_getInstance() {
    GameButton_initFields();
    return GameButton$R3_instance;
  }
  var GameButton$LX_instance;
  function GameButton$LX_getInstance() {
    GameButton_initFields();
    return GameButton$LX_instance;
  }
  var GameButton$LY_instance;
  function GameButton$LY_getInstance() {
    GameButton_initFields();
    return GameButton$LY_instance;
  }
  var GameButton$RX_instance;
  function GameButton$RX_getInstance() {
    GameButton_initFields();
    return GameButton$RX_instance;
  }
  var GameButton$RY_instance;
  function GameButton$RY_getInstance() {
    GameButton_initFields();
    return GameButton$RY_instance;
  }
  var GameButton$BUTTON4_instance;
  function GameButton$BUTTON4_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON4_instance;
  }
  var GameButton$BUTTON5_instance;
  function GameButton$BUTTON5_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON5_instance;
  }
  var GameButton$BUTTON6_instance;
  function GameButton$BUTTON6_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON6_instance;
  }
  var GameButton$BUTTON7_instance;
  function GameButton$BUTTON7_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON7_instance;
  }
  var GameButton$BUTTON8_instance;
  function GameButton$BUTTON8_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON8_instance;
  }
  function GameButton$Companion() {
    GameButton$Companion_instance = this;
    this.BUTTONS = GameButton$values();
    this.MAX = 32;
  }
  GameButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameButton$Companion_instance = null;
  function GameButton$Companion_getInstance() {
    GameButton_initFields();
    if (GameButton$Companion_instance === null) {
      new GameButton$Companion();
    }
    return GameButton$Companion_instance;
  }
  GameButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameButton',
    interfaces: [Enum]
  };
  function GameButton$values() {
    return [GameButton$LEFT_getInstance(), GameButton$RIGHT_getInstance(), GameButton$UP_getInstance(), GameButton$DOWN_getInstance(), GameButton$BUTTON0_getInstance(), GameButton$BUTTON1_getInstance(), GameButton$BUTTON2_getInstance(), GameButton$BUTTON3_getInstance(), GameButton$SELECT_getInstance(), GameButton$START_getInstance(), GameButton$SYSTEM_getInstance(), GameButton$L1_getInstance(), GameButton$R1_getInstance(), GameButton$L2_getInstance(), GameButton$R2_getInstance(), GameButton$L3_getInstance(), GameButton$R3_getInstance(), GameButton$LX_getInstance(), GameButton$LY_getInstance(), GameButton$RX_getInstance(), GameButton$RY_getInstance(), GameButton$BUTTON4_getInstance(), GameButton$BUTTON5_getInstance(), GameButton$BUTTON6_getInstance(), GameButton$BUTTON7_getInstance(), GameButton$BUTTON8_getInstance()];
  }
  GameButton.values = GameButton$values;
  function GameButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return GameButton$LEFT_getInstance();
      case 'RIGHT':
        return GameButton$RIGHT_getInstance();
      case 'UP':
        return GameButton$UP_getInstance();
      case 'DOWN':
        return GameButton$DOWN_getInstance();
      case 'BUTTON0':
        return GameButton$BUTTON0_getInstance();
      case 'BUTTON1':
        return GameButton$BUTTON1_getInstance();
      case 'BUTTON2':
        return GameButton$BUTTON2_getInstance();
      case 'BUTTON3':
        return GameButton$BUTTON3_getInstance();
      case 'SELECT':
        return GameButton$SELECT_getInstance();
      case 'START':
        return GameButton$START_getInstance();
      case 'SYSTEM':
        return GameButton$SYSTEM_getInstance();
      case 'L1':
        return GameButton$L1_getInstance();
      case 'R1':
        return GameButton$R1_getInstance();
      case 'L2':
        return GameButton$L2_getInstance();
      case 'R2':
        return GameButton$R2_getInstance();
      case 'L3':
        return GameButton$L3_getInstance();
      case 'R3':
        return GameButton$R3_getInstance();
      case 'LX':
        return GameButton$LX_getInstance();
      case 'LY':
        return GameButton$LY_getInstance();
      case 'RX':
        return GameButton$RX_getInstance();
      case 'RY':
        return GameButton$RY_getInstance();
      case 'BUTTON4':
        return GameButton$BUTTON4_getInstance();
      case 'BUTTON5':
        return GameButton$BUTTON5_getInstance();
      case 'BUTTON6':
        return GameButton$BUTTON6_getInstance();
      case 'BUTTON7':
        return GameButton$BUTTON7_getInstance();
      case 'BUTTON8':
        return GameButton$BUTTON8_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GameButton.' + name);
    }
  }
  GameButton.valueOf_61zpoe$ = GameButton$valueOf;
  function GamepadInfo(index, connected, name, mapping, rawButtonsPressure, rawButtonsPressed, rawAxes, axesLength, buttonsLength) {
    if (index === void 0)
      index = 0;
    if (connected === void 0)
      connected = false;
    if (name === void 0)
      name = 'unknown';
    if (mapping === void 0)
      mapping = StandardGamepadMapping_getInstance();
    if (rawButtonsPressure === void 0)
      rawButtonsPressure = new Float64Array(64);
    if (rawButtonsPressed === void 0)
      rawButtonsPressed = 0;
    if (rawAxes === void 0)
      rawAxes = new Float64Array(16);
    if (axesLength === void 0)
      axesLength = 0;
    if (buttonsLength === void 0)
      buttonsLength = 0;
    this.index = index;
    this.connected = connected;
    this.name = name;
    this.mapping = mapping;
    this.rawButtonsPressure = rawButtonsPressure;
    this.rawButtonsPressed = rawButtonsPressed;
    this.rawAxes = rawAxes;
    this.axesLength = axesLength;
    this.buttonsLength = buttonsLength;
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Point.Companion.invoke();
    }
    this.axesData_0 = array;
  }
  GamepadInfo.prototype.copyFrom_u2qnca$ = function (that) {
    this.index = that.index;
    this.name = that.name;
    this.mapping = that.mapping;
    this.rawButtonsPressed = that.rawButtonsPressed;
    this.connected = that.connected;
    this.axesLength = that.axesLength;
    this.buttonsLength = that.buttonsLength;
    var tmp$ = that.axesData_0;
    var tmp$_0 = this.axesData_0;
    var a = this.axesData_0.length;
    var b = that.axesData_0.length;
    arrayCopy(tmp$, tmp$_0, 0, 0, 0 + Math_0.min(a, b) | 0);
    var tmp$_1 = that.rawButtonsPressure;
    var tmp$_2 = this.rawButtonsPressure;
    var a_0 = this.rawButtonsPressure.length;
    var b_0 = that.rawButtonsPressure.length;
    arrayCopy(tmp$_1, tmp$_2, 0, 0, 0 + Math_0.min(a_0, b_0) | 0);
    var tmp$_3 = that.rawAxes;
    var tmp$_4 = this.rawAxes;
    var a_1 = this.rawAxes.length;
    var b_1 = that.rawAxes.length;
    arrayCopy(tmp$_3, tmp$_4, 0, 0, 0 + Math_0.min(a_1, b_1) | 0);
  };
  GamepadInfo.prototype.get_4pistl$ = function (button) {
    return this.mapping.get_nr7vgt$(button, this);
  };
  GamepadInfo.prototype.get_e5pshl$ = function (stick) {
    var $receiver = this.axesData_0[stick.id];
    $receiver.x = this.getX_e5pshl$(stick);
    $receiver.y = this.getY_e5pshl$(stick);
    return $receiver;
  };
  GamepadInfo.prototype.getX_e5pshl$ = function (stick) {
    switch (stick.name) {
      case 'LEFT':
        return this.get_4pistl$(GameButton$LX_getInstance());
      case 'RIGHT':
        return this.get_4pistl$(GameButton$LY_getInstance());
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  GamepadInfo.prototype.getY_e5pshl$ = function (stick) {
    switch (stick.name) {
      case 'LEFT':
        return this.get_4pistl$(GameButton$RX_getInstance());
      case 'RIGHT':
        return this.get_4pistl$(GameButton$RY_getInstance());
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  GamepadInfo.prototype.toString = function () {
    return 'Gamepad[' + this.index + '][' + this.name + ']' + this.mapping.toString_u2qnca$(this);
  };
  GamepadInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamepadInfo',
    interfaces: []
  };
  function GamepadMapping() {
  }
  GamepadMapping.prototype.getButton_92twlb$_0 = function ($receiver, index) {
    return extract($receiver, index) ? 1.0 : 0.0;
  };
  GamepadMapping.prototype.getRawButton_qw5gbr$ = function ($receiver, index) {
    return this.getButton_92twlb$_0($receiver.rawButtonsPressed, index);
  };
  GamepadMapping.prototype.getRawAxe_qw5gbr$ = function ($receiver, index) {
    var $receiver_0 = $receiver.rawAxes;
    return index >= 0 && index <= get_lastIndex_0($receiver_0) ? $receiver_0[index] : 0.0;
  };
  function GamepadMapping$toString$lambda(closure$info, this$GamepadMapping) {
    return function (it) {
      return it.name + '=' + this$GamepadMapping.get_nr7vgt$(it, closure$info);
    };
  }
  GamepadMapping.prototype.toString_u2qnca$ = function (info) {
    return this.id + '(' + joinToString_0(GameButton$values(), ', ', void 0, void 0, void 0, void 0, GamepadMapping$toString$lambda(info, this)) + ')';
  };
  GamepadMapping.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamepadMapping',
    interfaces: []
  };
  function StandardGamepadMapping() {
    StandardGamepadMapping_instance = this;
    GamepadMapping.call(this);
    this.id_tj66ww$_0 = 'Standard';
  }
  Object.defineProperty(StandardGamepadMapping.prototype, 'id', {
    get: function () {
      return this.id_tj66ww$_0;
    }
  });
  StandardGamepadMapping.prototype.get_nr7vgt$ = function (button, info) {
    var tmp$;
    switch (button.name) {
      case 'BUTTON0':
        tmp$ = this.getRawButton_qw5gbr$(info, 0);
        break;
      case 'BUTTON1':
        tmp$ = this.getRawButton_qw5gbr$(info, 1);
        break;
      case 'BUTTON2':
        tmp$ = this.getRawButton_qw5gbr$(info, 2);
        break;
      case 'BUTTON3':
        tmp$ = this.getRawButton_qw5gbr$(info, 3);
        break;
      case 'L1':
        tmp$ = this.getRawButton_qw5gbr$(info, 4);
        break;
      case 'R1':
        tmp$ = this.getRawButton_qw5gbr$(info, 5);
        break;
      case 'L2':
        tmp$ = this.getRawButton_qw5gbr$(info, 6);
        break;
      case 'R2':
        tmp$ = this.getRawButton_qw5gbr$(info, 7);
        break;
      case 'SELECT':
        tmp$ = this.getRawButton_qw5gbr$(info, 8);
        break;
      case 'START':
        tmp$ = this.getRawButton_qw5gbr$(info, 9);
        break;
      case 'L3':
        tmp$ = this.getRawButton_qw5gbr$(info, 10);
        break;
      case 'R3':
        tmp$ = this.getRawButton_qw5gbr$(info, 11);
        break;
      case 'UP':
        tmp$ = this.getRawButton_qw5gbr$(info, 12);
        break;
      case 'DOWN':
        tmp$ = this.getRawButton_qw5gbr$(info, 13);
        break;
      case 'LEFT':
        tmp$ = this.getRawButton_qw5gbr$(info, 14);
        break;
      case 'RIGHT':
        tmp$ = this.getRawButton_qw5gbr$(info, 15);
        break;
      case 'SYSTEM':
        tmp$ = this.getRawButton_qw5gbr$(info, 16);
        break;
      case 'LX':
        tmp$ = this.getRawAxe_qw5gbr$(info, 0);
        break;
      case 'LY':
        tmp$ = this.getRawAxe_qw5gbr$(info, 1);
        break;
      case 'RX':
        tmp$ = this.getRawAxe_qw5gbr$(info, 2);
        break;
      case 'RY':
        tmp$ = this.getRawAxe_qw5gbr$(info, 3);
        break;
      default:tmp$ = 0.0;
        break;
    }
    return tmp$;
  };
  StandardGamepadMapping.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StandardGamepadMapping',
    interfaces: [GamepadMapping]
  };
  var StandardGamepadMapping_instance = null;
  function StandardGamepadMapping_getInstance() {
    if (StandardGamepadMapping_instance === null) {
      new StandardGamepadMapping();
    }
    return StandardGamepadMapping_instance;
  }
  var fastForEach = defineInlineFunction('korgw-root-korgw.com.soywiz.korev.internal.fastForEach_kf7q02$', function ($receiver, callback) {
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      callback($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
    }
  });
  function Runnable$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  Runnable$ObjectLiteral.prototype.run = function () {
    this.closure$block();
  };
  Runnable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Runnable]};
  function DialogInterface() {
  }
  DialogInterface.prototype.browse_ptvjoy$ = function (url, continuation) {
    return unsupported_0();
  };
  DialogInterface.prototype.alert_61zpoe$ = function (message, continuation) {
    return unsupported_0();
  };
  DialogInterface.prototype.confirm_61zpoe$ = function (message, continuation) {
    return unsupported_0();
  };
  DialogInterface.prototype.prompt_puj7f4$$default = function (message, default_0, continuation) {
    return unsupported_0();
  };
  DialogInterface.prototype.prompt_puj7f4$ = function (message, default_0, continuation, callback$default) {
    if (default_0 === void 0)
      default_0 = '';
    return callback$default ? callback$default(message, default_0, continuation) : this.prompt_puj7f4$$default(message, default_0, continuation);
  };
  DialogInterface.prototype.openFileDialog_r0su5d$$default = function (filter, write, multi, continuation) {
    return unsupported_0();
  };
  DialogInterface.prototype.openFileDialog_r0su5d$ = function (filter, write, multi, continuation, callback$default) {
    if (filter === void 0)
      filter = null;
    if (write === void 0)
      write = false;
    if (multi === void 0)
      multi = false;
    return callback$default ? callback$default(filter, write, multi, continuation) : this.openFileDialog_r0su5d$$default(filter, write, multi, continuation);
  };
  DialogInterface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DialogInterface',
    interfaces: []
  };
  function GameWindowCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
    this.tasks = new Queue();
    this.timedTasks = PriorityQueue.Companion.invoke_km2rfd$(void 0, GameWindowCoroutineDispatcher$timedTasks$lambda);
  }
  GameWindowCoroutineDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    this.dispatch_5bn72i$(context, block);
  };
  function GameWindowCoroutineDispatcher$TimedTask(time, continuation, callback) {
    this.time = time;
    this.continuation = continuation;
    this.callback = callback;
    this.exception = null;
  }
  Object.defineProperty(GameWindowCoroutineDispatcher$TimedTask.prototype, 'ms', {
    get: function () {
      return this.time;
    }
  });
  GameWindowCoroutineDispatcher$TimedTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimedTask',
    interfaces: []
  };
  function GameWindowCoroutineDispatcher$queue$lambda(closure$block) {
    return function () {
      closure$block();
      return Unit;
    };
  }
  GameWindowCoroutineDispatcher.prototype.queue_o14v8n$ = function (block) {
    this.tasks.enqueue_11rb$(new Runnable$ObjectLiteral(GameWindowCoroutineDispatcher$queue$lambda(block)));
  };
  GameWindowCoroutineDispatcher.prototype.queue_9ywmpy$ = function (block) {
    if (block != null) {
      this.tasks.enqueue_11rb$(block);
    }
  };
  GameWindowCoroutineDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.tasks.enqueue_11rb$(block);
  };
  GameWindowCoroutineDispatcher.prototype.now = function () {
    return DateTime.Companion.now();
  };
  function GameWindowCoroutineDispatcher$scheduleResumeAfterDelay$lambda(closure$task) {
    return function (it) {
      closure$task.exception = it;
      return Unit;
    };
  }
  GameWindowCoroutineDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    var task = new GameWindowCoroutineDispatcher$TimedTask(this.now().plus_fv8bff$(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(timeMillis))), continuation, null);
    continuation.invokeOnCancellation_f05bi3$(GameWindowCoroutineDispatcher$scheduleResumeAfterDelay$lambda(task));
    this.timedTasks.add_11rb$(task);
  };
  function GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral(this$GameWindowCoroutineDispatcher, closure$task) {
    this.this$GameWindowCoroutineDispatcher = this$GameWindowCoroutineDispatcher;
    this.closure$task = closure$task;
  }
  GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    this.this$GameWindowCoroutineDispatcher.timedTasks.remove_11rb$(this.closure$task);
  };
  GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DisposableHandle]
  };
  GameWindowCoroutineDispatcher.prototype.invokeOnTimeout_8irseu$ = function (timeMillis, block) {
    var task = new GameWindowCoroutineDispatcher$TimedTask(this.now().plus_fv8bff$(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(timeMillis))), null, block);
    this.timedTasks.add_11rb$(task);
    return new GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral(this, task);
  };
  GameWindowCoroutineDispatcher.prototype.executePending = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    try {
      var now = this.now();
      while (!this.timedTasks.isEmpty() && now.compareTo_11rb$(this.timedTasks.head.time) >= 0) {
        var item = this.timedTasks.removeHead();
        if (item.exception != null) {
          if ((tmp$ = item.continuation) != null) {
            var exception = ensureNotNull(item.exception);
            tmp$.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          }
          if (item.callback != null) {
            (tmp$_0 = item.exception) != null ? (printStackTrace_0(tmp$_0), Unit) : null;
          }
        }
         else {
          if ((tmp$_1 = item.continuation) != null) {
            tmp$_1.resumeWith_tl1gpc$(new Result(Unit));
          }
          (tmp$_2 = item.callback) != null ? (tmp$_2.run(), Unit) : null;
        }
      }
      while (!this.tasks.isEmpty()) {
        var task = this.tasks.dequeue();
        task != null ? (task.run(), Unit) : null;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        println('Error in GameWindowCoroutineDispatcher.executePending:');
        printStackTrace_0(e);
      }
       else
        throw e;
    }
  };
  GameWindowCoroutineDispatcher.prototype.close = function () {
    var tmp$, tmp$_0;
    this.executePending();
    println('GameWindowCoroutineDispatcher.close');
    while (!this.timedTasks.isEmpty()) {
      if ((tmp$ = this.timedTasks.removeHead().continuation) != null) {
        tmp$.resumeWith_tl1gpc$(new Result(Unit));
      }
    }
    while (!this.tasks.isEmpty()) {
      (tmp$_0 = this.tasks.dequeue()) != null ? (tmp$_0.run(), Unit) : null;
    }
  };
  GameWindowCoroutineDispatcher.prototype.toString = function () {
    return 'GameWindowCoroutineDispatcher';
  };
  function GameWindowCoroutineDispatcher$timedTasks$lambda(a, b) {
    return a.time.compareTo_11rb$(b.time);
  }
  GameWindowCoroutineDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameWindowCoroutineDispatcher',
    interfaces: [Closeable, Delay, CoroutineDispatcher]
  };
  function GameWindow() {
    GameWindow$CoroutineKey_getInstance();
    EventDispatcher$Mixin.call(this);
    this.ag_96elwu$_0 = new LogAG();
    this.coroutineDispatcher_ccb4kf$_0 = new GameWindowCoroutineDispatcher();
    this.pauseEvent = new PauseEvent();
    this.resumeEvent = new ResumeEvent();
    this.stopEvent = new StopEvent();
    this.destroyEvent = new DestroyEvent();
    this.renderEvent = new RenderEvent();
    this.initEvent = new InitEvent();
    this.disposeEvent = new DisposeEvent();
    this.fullScreenEvent = new FullScreenEvent();
    this.reshapeEvent_mhm23c$_0 = new ReshapeEvent();
    this.keyEvent = new KeyEvent();
    this.mouseEvent = new MouseEvent();
    this.touchEvent = new TouchEvent();
    this.dropFileEvent = new DropFileEvent();
    this.gamePadButtonEvent = new GamePadButtonEvent();
    this.gamePadStickEvent = new GamePadStickEvent();
    this.gamePadUpdateEvent = new GamePadUpdateEvent();
    this.gamePadConnectionEvent = new GamePadConnectionEvent();
    this.fps_e82dz$_0 = 60;
    this.width_whg6e2$_0 = 0;
    this.height_3p2v0t$_0 = 0;
    this.icon_cad3az$_0 = null;
    this.fullscreen_j33tdz$_0 = false;
    this.visible_dcbvzi$_0 = false;
    this.running_v4pvl$_0 = true;
  }
  Object.defineProperty(GameWindow.prototype, 'key', {
    get: function () {
      return GameWindow$CoroutineKey_getInstance();
    }
  });
  function GameWindow$CoroutineKey() {
    GameWindow$CoroutineKey_instance = this;
  }
  GameWindow$CoroutineKey.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CoroutineKey',
    interfaces: [CoroutineContext$Key]
  };
  var GameWindow$CoroutineKey_instance = null;
  function GameWindow$CoroutineKey_getInstance() {
    if (GameWindow$CoroutineKey_instance === null) {
      new GameWindow$CoroutineKey();
    }
    return GameWindow$CoroutineKey_instance;
  }
  Object.defineProperty(GameWindow.prototype, 'ag', {
    get: function () {
      return this.ag_96elwu$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'coroutineDispatcher', {
    get: function () {
      return this.coroutineDispatcher_ccb4kf$_0;
    }
  });
  GameWindow.prototype.queue_o14v8n$ = function (callback) {
    this.coroutineDispatcher.queue_o14v8n$(callback);
  };
  GameWindow.prototype.queue_771g0p$ = function (callback) {
    this.coroutineDispatcher.queue_9ywmpy$(callback);
  };
  Object.defineProperty(GameWindow.prototype, 'fps', {
    get: function () {
      return this.fps_e82dz$_0;
    },
    set: function (fps) {
      this.fps_e82dz$_0 = fps;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'title', {
    get: function () {
      return '';
    },
    set: function (value) {
    }
  });
  Object.defineProperty(GameWindow.prototype, 'width', {
    get: function () {
      return this.width_whg6e2$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'height', {
    get: function () {
      return this.height_3p2v0t$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'icon', {
    get: function () {
      return this.icon_cad3az$_0;
    },
    set: function (icon) {
      this.icon_cad3az$_0 = icon;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'fullscreen', {
    get: function () {
      return this.fullscreen_j33tdz$_0;
    },
    set: function (fullscreen) {
      this.fullscreen_j33tdz$_0 = fullscreen;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'visible', {
    get: function () {
      return this.visible_dcbvzi$_0;
    },
    set: function (visible) {
      this.visible_dcbvzi$_0 = visible;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'quality', {
    get: function () {
      return GameWindow$Quality$AUTOMATIC_getInstance();
    },
    set: function (value) {
    }
  });
  Object.defineProperty(GameWindow.prototype, 'timePerFrame', {
    get: function () {
      var $receiver = 1000.0 / (this.fps > 0 ? this.fps : 60);
      return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
    }
  });
  function GameWindow$Quality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameWindow$Quality_initFields() {
    GameWindow$Quality_initFields = function () {
    };
    GameWindow$Quality$PERFORMANCE_instance = new GameWindow$Quality('PERFORMANCE', 0);
    GameWindow$Quality$QUALITY_instance = new GameWindow$Quality('QUALITY', 1);
    GameWindow$Quality$AUTOMATIC_instance = new GameWindow$Quality('AUTOMATIC', 2);
  }
  var GameWindow$Quality$PERFORMANCE_instance;
  function GameWindow$Quality$PERFORMANCE_getInstance() {
    GameWindow$Quality_initFields();
    return GameWindow$Quality$PERFORMANCE_instance;
  }
  var GameWindow$Quality$QUALITY_instance;
  function GameWindow$Quality$QUALITY_getInstance() {
    GameWindow$Quality_initFields();
    return GameWindow$Quality$QUALITY_instance;
  }
  var GameWindow$Quality$AUTOMATIC_instance;
  function GameWindow$Quality$AUTOMATIC_getInstance() {
    GameWindow$Quality_initFields();
    return GameWindow$Quality$AUTOMATIC_instance;
  }
  GameWindow$Quality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quality',
    interfaces: [Enum]
  };
  function GameWindow$Quality$values() {
    return [GameWindow$Quality$PERFORMANCE_getInstance(), GameWindow$Quality$QUALITY_getInstance(), GameWindow$Quality$AUTOMATIC_getInstance()];
  }
  GameWindow$Quality.values = GameWindow$Quality$values;
  function GameWindow$Quality$valueOf(name) {
    switch (name) {
      case 'PERFORMANCE':
        return GameWindow$Quality$PERFORMANCE_getInstance();
      case 'QUALITY':
        return GameWindow$Quality$QUALITY_getInstance();
      case 'AUTOMATIC':
        return GameWindow$Quality$AUTOMATIC_getInstance();
      default:throwISE('No enum constant com.soywiz.korgw.GameWindow.Quality.' + name);
    }
  }
  GameWindow$Quality.valueOf_61zpoe$ = GameWindow$Quality$valueOf;
  GameWindow.prototype.setSize_vux9f0$ = function (width, height) {
  };
  GameWindow.prototype.browse_ptvjoy$ = function (url, continuation) {
    return unsupported_0();
  };
  GameWindow.prototype.alert_61zpoe$ = function (message, continuation) {
    return unsupported_0();
  };
  GameWindow.prototype.confirm_61zpoe$ = function (message, continuation) {
    return unsupported_0();
  };
  GameWindow.prototype.prompt_puj7f4$$default = function (message, default_0, continuation) {
    return unsupported_0();
  };
  GameWindow.prototype.openFileDialog_r0su5d$$default = function (filter, write, multi, continuation) {
    return unsupported_0();
  };
  Object.defineProperty(GameWindow.prototype, 'running', {
    get: function () {
      return this.running_v4pvl$_0;
    },
    set: function (running) {
      this.running_v4pvl$_0 = running;
    }
  });
  GameWindow.prototype.close = function () {
    this.running = false;
    println('GameWindow.close');
    this.coroutineDispatcher.close();
    cancelChildren(this.coroutineDispatcher);
  };
  GameWindow.prototype.repaint = function () {
  };
  function Coroutine$GameWindow$loop$lambda(closure$entry_0, this$GameWindow_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
    this.local$this$GameWindow = this$GameWindow_0;
  }
  Coroutine$GameWindow$loop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameWindow$loop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameWindow$loop$lambda.prototype.constructor = Coroutine$GameWindow$loop$lambda;
  Coroutine$GameWindow$loop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$entry(this.local$this$GameWindow, this);
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
  function GameWindow$loop$lambda(closure$entry_0, this$GameWindow_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameWindow$loop$lambda(closure$entry_0, this$GameWindow_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$loop_179clj$($this, entry_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$entry = entry_0;
  }
  Coroutine$loop_179clj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loop_179clj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loop_179clj$.prototype.constructor = Coroutine$loop_179clj$;
  Coroutine$loop_179clj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            launchImmediately(this.$this.coroutineDispatcher, GameWindow$loop$lambda(this.local$entry, this.$this));
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.$this.running) {
              this.state_0 = 4;
              continue;
            }

            var start = klock.PerformanceCounter.microseconds;
            this.$this.frame();
            var end = klock.PerformanceCounter.microseconds;
            var $receiver = end - start;
            var time = TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
            this.state_0 = 3;
            this.result_0 = delay(this.$this, clamp(this.$this.timePerFrame.minus_fv8bff$(time), TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(0)), this.$this.timePerFrame), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
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
  GameWindow.prototype.loop_179clj$ = function (entry_0, continuation_0, suspended) {
    var instance = new Coroutine$loop_179clj$(this, entry_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GameWindow.prototype.frame = function () {
    this.coroutineDispatcher.executePending();
    this.ag.onRender.invoke_11rb$(this.ag);
    this.dispatchRenderEvent();
  };
  GameWindow.prototype.dispatchInitEvent = function () {
    var event = this.initEvent;
    this.dispatch_nipq8w$(getKClass(InitEvent), event);
  };
  GameWindow.prototype.dispatchPauseEvent = function () {
    var event = this.pauseEvent;
    this.dispatch_nipq8w$(getKClass(PauseEvent), event);
  };
  GameWindow.prototype.dispatchResumeEvent = function () {
    var event = this.resumeEvent;
    this.dispatch_nipq8w$(getKClass(ResumeEvent), event);
  };
  GameWindow.prototype.dispatchStopEvent = function () {
    var event = this.stopEvent;
    this.dispatch_nipq8w$(getKClass(StopEvent), event);
  };
  GameWindow.prototype.dispatchDestroyEvent = function () {
    var event = this.destroyEvent;
    this.dispatch_nipq8w$(getKClass(DestroyEvent), event);
  };
  GameWindow.prototype.dispatchDisposeEvent = function () {
    var event = this.disposeEvent;
    this.dispatch_nipq8w$(getKClass(DisposeEvent), event);
  };
  GameWindow.prototype.dispatchRenderEvent = function () {
    var event = this.renderEvent;
    this.dispatch_nipq8w$(getKClass(RenderEvent), event);
  };
  GameWindow.prototype.dispatchDropfileEvent_efoes9$ = function (type, files) {
    var $receiver = this.dropFileEvent;
    $receiver.type = type;
    $receiver.files = files;
    this.dispatch_nipq8w$(getKClass(DropFileEvent), $receiver);
  };
  GameWindow.prototype.dispatchFullscreenEvent_6taknv$ = function (fullscreen) {
    var $receiver = this.fullScreenEvent;
    $receiver.fullscreen = fullscreen;
    this.dispatch_nipq8w$(getKClass(FullScreenEvent), $receiver);
  };
  GameWindow.prototype.dispatchReshapeEvent_tjonv8$ = function (x, y, width, height) {
    this.ag.resized_vux9f0$(width, height);
    var $receiver = this.reshapeEvent_mhm23c$_0;
    $receiver.x = x;
    $receiver.y = y;
    $receiver.width = width;
    $receiver.height = height;
    this.dispatch_nipq8w$(getKClass(ReshapeEvent), $receiver);
  };
  GameWindow.prototype.dispatchKeyEvent_z6qb3v$ = function (type, id, character, key, keyCode) {
    var $receiver = this.keyEvent;
    $receiver.id = id;
    $receiver.character = toBoxedChar(character);
    $receiver.key = key;
    $receiver.keyCode = keyCode;
    $receiver.type = type;
    this.dispatch_nipq8w$(getKClass(KeyEvent), $receiver);
  };
  GameWindow.prototype.dispatchSimpleMouseEvent_7a0cg9$ = function (type, id, x, y, button, simulateClickOnUp) {
    if (simulateClickOnUp === void 0)
      simulateClickOnUp = false;
    var buttons = 0;
    var scrollDeltaX = 0.0;
    var scrollDeltaY = 0.0;
    var scrollDeltaZ = 0.0;
    var isShiftDown = false;
    var isCtrlDown = false;
    var isAltDown = false;
    var isMetaDown = false;
    var scaleCoords = false;
    this.dispatchMouseEvent_4o2nlt$(type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords);
    if (simulateClickOnUp && type === MouseEvent$Type$UP_getInstance()) {
      this.dispatchMouseEvent_4o2nlt$(MouseEvent$Type$CLICK_getInstance(), id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords);
    }
  };
  GameWindow.prototype.dispatchMouseEvent_4o2nlt$ = function (type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    var $receiver = this.mouseEvent;
    $receiver.type = type;
    $receiver.id = id;
    $receiver.x = x;
    $receiver.y = y;
    $receiver.button = button;
    $receiver.buttons = buttons;
    $receiver.scrollDeltaX = scrollDeltaX;
    $receiver.scrollDeltaY = scrollDeltaY;
    $receiver.scrollDeltaZ = scrollDeltaZ;
    $receiver.isShiftDown = isShiftDown;
    $receiver.isCtrlDown = isCtrlDown;
    $receiver.isAltDown = isAltDown;
    $receiver.isMetaDown = isMetaDown;
    $receiver.scaleCoords = scaleCoords;
    this.dispatch_nipq8w$(getKClass(MouseEvent), $receiver);
  };
  GameWindow.prototype.dispatchTouchEventStartStart = function () {
    this.dispatchTouchEventStart_dh6y7s$(TouchEvent$Type$START_getInstance());
  };
  GameWindow.prototype.dispatchTouchEventStartMove = function () {
    this.dispatchTouchEventStart_dh6y7s$(TouchEvent$Type$MOVE_getInstance());
  };
  GameWindow.prototype.dispatchTouchEventStartEnd = function () {
    this.dispatchTouchEventStart_dh6y7s$(TouchEvent$Type$END_getInstance());
  };
  GameWindow.prototype.dispatchTouchEventStart_dh6y7s$ = function (type) {
    this.touchEvent.startFrame_dh6y7s$(type);
  };
  GameWindow.prototype.dispatchTouchEventAddTouch_w4xg1m$ = function (id, x, y) {
    this.touchEvent.touch_w4xg1m$(id, x, y);
  };
  GameWindow.prototype.dispatchTouchEventEnd = function () {
    var event = this.touchEvent;
    this.dispatch_nipq8w$(getKClass(TouchEvent), event);
  };
  function Coroutine$GameWindow$entry$lambda(closure$callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$GameWindow$entry$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameWindow$entry$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameWindow$entry$lambda.prototype.constructor = Coroutine$GameWindow$entry$lambda;
  Coroutine$GameWindow$entry$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              println('ERROR GameWindow.entry:');
              return printStackTrace_0(e), Unit;
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
  function GameWindow$entry$lambda(closure$callback_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameWindow$entry$lambda(closure$callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GameWindow.prototype.entry_g2bo5h$ = function (callback) {
    launch(this.coroutineDispatcher, GameWindow$entry$lambda(callback));
  };
  GameWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameWindow',
    interfaces: [AGWindow, CoroutineContext$Element, Closeable, DialogInterface, EventDispatcher$Mixin]
  };
  function Coroutine$mainLoop$lambda(closure$entry_0, this$mainLoop_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
    this.local$this$mainLoop = this$mainLoop_0;
  }
  Coroutine$mainLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainLoop$lambda.prototype.constructor = Coroutine$mainLoop$lambda;
  Coroutine$mainLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$mainLoop.loop_179clj$(this.local$closure$entry, this);
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
  function mainLoop$lambda(closure$entry_0, this$mainLoop_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mainLoop$lambda(closure$entry_0, this$mainLoop_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mainLoop($receiver, entry) {
    return Korio(mainLoop$lambda(entry, $receiver));
  }
  function toggleFullScreen($receiver) {
    $receiver.fullscreen = !$receiver.fullscreen;
  }
  function configure($receiver, width, height, title, icon, fullscreen) {
    if (title === void 0)
      title = 'GameWindow';
    if (icon === void 0)
      icon = null;
    if (fullscreen === void 0)
      fullscreen = null;
    $receiver.setSize_vux9f0$(width, height);
    if (title != null)
      $receiver.title = title;
    $receiver.icon = icon;
    if (fullscreen != null)
      $receiver.fullscreen = fullscreen;
    $receiver.visible = true;
  }
  function Korgw() {
    Korgw_instance = this;
  }
  function Korgw$Sample() {
    Korgw$Sample_instance = this;
  }
  Korgw$Sample.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Sample',
    interfaces: []
  };
  var Korgw$Sample_instance = null;
  function Korgw$Sample_getInstance() {
    if (Korgw$Sample_instance === null) {
      new Korgw$Sample();
    }
    return Korgw$Sample_instance;
  }
  Korgw.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korgw',
    interfaces: []
  };
  var Korgw_instance = null;
  function Korgw_getInstance() {
    if (Korgw_instance === null) {
      new Korgw();
    }
    return Korgw_instance;
  }
  var KORGW_VERSION;
  var korgwJvmEngine;
  function KmlGlJsCanvas(canvas, glOpts) {
    KmlGl.call(this);
    this.canvas = canvas;
    this.glOpts = glOpts;
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = this.canvas.getContext('webgl', this.glOpts)) != null ? tmp$ : this.canvas.getContext('experimental-webgl', this.glOpts)) != null)
      tmp$_1 = tmp$_0;
    else {
      var tmp$_2, tmp$_3;
      try {
        tmp$_3 = document.body;
        var $receiver = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLElement) ? tmp$_2 : throwCCE();
        $receiver.style.color = 'red';
        $receiver.style.font = '30px Arial';
        $receiver.innerText = "Can't get webgl context. Running in an android emulator without cross-walk?";
        tmp$_3 != null ? (tmp$_3.prepend($receiver), Unit) : null;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          printStackTrace_0(e);
        }
         else
          throw e;
      }
      throw IllegalStateException_init("Can't get webgl context".toString());
    }
    this.gl = tmp$_1;
    this.items_0 = Kotlin.newArray(8192, null);
    this.freeList_0 = toMutableList(reversed(until(1, this.items_0.length)));
  }
  KmlGlJsCanvas.prototype.alloc_0 = function ($receiver) {
    if ($receiver === null)
      return 0;
    if ($receiver.id === undefined) {
      var index = this.freeList_0.removeAt_za3lpa$(this.freeList_0.size - 1 | 0);
      this.items_0[index] = $receiver;
      $receiver.id = index;
    }
    return $receiver.id;
  };
  KmlGlJsCanvas.prototype.get_0 = function ($receiver) {
    return $receiver !== 0 ? this.items_0[$receiver] : null;
  };
  KmlGlJsCanvas.prototype.free_0 = function ($receiver) {
    var block$result;
    if ($receiver !== 0) {
      var out = this.items_0[$receiver];
      this.freeList_0.add_11rb$($receiver);
      this.items_0[$receiver] = null;
      block$result = out;
    }
     else {
      block$result = null;
    }
    return block$result;
  };
  KmlGlJsCanvas.prototype.activeTexture_za3lpa$ = function (texture) {
    this.gl.activeTexture(texture);
  };
  KmlGlJsCanvas.prototype.attachShader_vux9f0$ = function (program, shader) {
    this.gl.attachShader(this.get_0(program), this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
    this.gl.bindAttribLocation(this.get_0(program), index, name);
  };
  KmlGlJsCanvas.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
    this.gl.bindBuffer(target, this.get_0(buffer));
  };
  KmlGlJsCanvas.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
    this.gl.bindFramebuffer(target, this.get_0(framebuffer));
  };
  KmlGlJsCanvas.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
    this.gl.bindRenderbuffer(target, this.get_0(renderbuffer));
  };
  KmlGlJsCanvas.prototype.bindTexture_vux9f0$ = function (target, texture) {
    this.gl.bindTexture(target, this.get_0(texture));
  };
  KmlGlJsCanvas.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.gl.blendColor(red, green, blue, alpha);
  };
  KmlGlJsCanvas.prototype.blendEquation_za3lpa$ = function (mode) {
    this.gl.blendEquation(mode);
  };
  KmlGlJsCanvas.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    this.gl.blendEquationSeparate(modeRGB, modeAlpha);
  };
  KmlGlJsCanvas.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    this.gl.blendFunc(sfactor, dfactor);
  };
  KmlGlJsCanvas.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    this.gl.blendFuncSeparate(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
  };
  KmlGlJsCanvas.prototype.bufferData_r7xkly$ = function (target, size, data, usage) {
    this.gl.bufferData(target, new Uint8Array(get_arrayBuffer(data), 0, size), usage);
  };
  KmlGlJsCanvas.prototype.bufferSubData_emhadu$ = function (target, offset, size, data) {
    this.gl.bufferSubData(target, offset, new Uint8Array(get_arrayBuffer(data), 0, size));
  };
  KmlGlJsCanvas.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return this.gl.checkFramebufferStatus(target);
  };
  KmlGlJsCanvas.prototype.clear_za3lpa$ = function (mask) {
    this.gl.clear(mask);
  };
  KmlGlJsCanvas.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.gl.clearColor(red, green, blue, alpha);
  };
  KmlGlJsCanvas.prototype.clearDepthf_mx4ult$ = function (d) {
    this.gl.clearDepth(d);
  };
  KmlGlJsCanvas.prototype.clearStencil_za3lpa$ = function (s) {
    this.gl.clearStencil(s);
  };
  KmlGlJsCanvas.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    this.gl.colorMask(red, green, blue, alpha);
  };
  KmlGlJsCanvas.prototype.compileShader_za3lpa$ = function (shader) {
    this.gl.compileShader(this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.compressedTexImage2D_1uavrm$ = function (target, level, internalformat, width, height, border, imageSize, data) {
    this.gl.compressedTexImage2D(target, level, internalformat, width, height, border, data != null ? data.arrayByte : null);
  };
  KmlGlJsCanvas.prototype.compressedTexSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    this.gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data != null ? data.arrayByte : null);
  };
  KmlGlJsCanvas.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
    this.gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
  };
  KmlGlJsCanvas.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
    this.gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
  };
  KmlGlJsCanvas.prototype.createProgram = function () {
    return this.alloc_0(this.gl.createProgram());
  };
  KmlGlJsCanvas.prototype.createShader_za3lpa$ = function (type) {
    return this.alloc_0(this.gl.createShader(type));
  };
  KmlGlJsCanvas.prototype.cullFace_za3lpa$ = function (mode) {
    this.gl.cullFace(mode);
  };
  KmlGlJsCanvas.prototype.deleteBuffers_26fqmq$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteBuffer(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.deleteFramebuffers_26fqmq$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteFramebuffer(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.deleteProgram_za3lpa$ = function (program) {
    this.gl.deleteProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.deleteRenderbuffers_26fqmq$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteRenderbuffer(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.deleteShader_za3lpa$ = function (shader) {
    this.gl.deleteShader(this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.deleteTextures_26fqmq$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteTexture(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.depthFunc_za3lpa$ = function (func) {
    this.gl.depthFunc(func);
  };
  KmlGlJsCanvas.prototype.depthMask_6taknv$ = function (flag) {
    this.gl.depthMask(flag);
  };
  KmlGlJsCanvas.prototype.depthRangef_dleff0$ = function (n, f) {
    this.gl.depthRange(n, f);
  };
  KmlGlJsCanvas.prototype.detachShader_vux9f0$ = function (program, shader) {
    this.gl.detachShader(this.get_0(program), this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.disable_za3lpa$ = function (cap) {
    this.gl.disable(cap);
  };
  KmlGlJsCanvas.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    this.gl.disableVertexAttribArray(index);
  };
  KmlGlJsCanvas.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    this.gl.drawArrays(mode, first, count);
  };
  KmlGlJsCanvas.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
    this.gl.drawElements(mode, count, type, indices);
  };
  KmlGlJsCanvas.prototype.enable_za3lpa$ = function (cap) {
    this.gl.enable(cap);
  };
  KmlGlJsCanvas.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    this.gl.enableVertexAttribArray(index);
  };
  KmlGlJsCanvas.prototype.finish = function () {
    this.gl.finish();
  };
  KmlGlJsCanvas.prototype.flush = function () {
    this.gl.flush();
  };
  KmlGlJsCanvas.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
    this.gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, this.get_0(renderbuffer));
  };
  KmlGlJsCanvas.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
    this.gl.framebufferTexture2D(target, attachment, textarget, this.get_0(texture), level);
  };
  KmlGlJsCanvas.prototype.frontFace_za3lpa$ = function (mode) {
    this.gl.frontFace(mode);
  };
  KmlGlJsCanvas.prototype.genBuffers_26fqmq$ = function (n, buffers) {
    for (var p = 0; p < n; p++) {
      buffers.arrayInt[p] = this.alloc_0(this.gl.createBuffer());
    }
  };
  KmlGlJsCanvas.prototype.generateMipmap_za3lpa$ = function (target) {
    this.gl.generateMipmap(target);
  };
  KmlGlJsCanvas.prototype.genFramebuffers_26fqmq$ = function (n, framebuffers) {
    for (var p = 0; p < n; p++) {
      framebuffers.arrayInt[p] = this.alloc_0(this.gl.createFramebuffer());
    }
  };
  KmlGlJsCanvas.prototype.genRenderbuffers_26fqmq$ = function (n, renderbuffers) {
    for (var p = 0; p < n; p++) {
      renderbuffers.arrayInt[p] = this.alloc_0(this.gl.createRenderbuffer());
    }
  };
  KmlGlJsCanvas.prototype.genTextures_26fqmq$ = function (n, textures) {
    for (var p = 0; p < n; p++) {
      textures.arrayInt[p] = this.alloc_0(this.gl.createTexture());
    }
  };
  KmlGlJsCanvas.prototype.getActiveAttrib_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
    var info = ensureNotNull(this.gl.getActiveAttrib(this.get_0(program), index));
    size.arrayInt[0] = info.size;
    type.arrayInt[0] = info.type;
    putAsciiString(name, info.name);
    length.arrayInt[0] = info.size + 1 | 0;
  };
  KmlGlJsCanvas.prototype.getActiveUniform_9zl5qq$ = function (program, index, bufSize, length, size, type, name) {
    var info = ensureNotNull(this.gl.getActiveUniform(this.get_0(program), index));
    size.arrayInt[0] = info.size;
    type.arrayInt[0] = info.type;
    putAsciiString(name, info.name);
    length.arrayInt[0] = info.size + 1 | 0;
  };
  KmlGlJsCanvas.prototype.getAttachedShaders_vfc54s$ = function (program, maxCount, count, shaders) {
    var tmp$;
    var ashaders = ensureNotNull(this.gl.getAttachedShaders(this.get_0(program)));
    count.arrayInt[0] = ashaders.length;
    tmp$ = Math_0.min(maxCount, ashaders.length);
    for (var n = 0; n < tmp$; n++) {
      shaders.arrayInt[n] = ashaders[n].id;
    }
  };
  KmlGlJsCanvas.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    return this.gl.getAttribLocation(this.get_0(program), name);
  };
  KmlGlJsCanvas.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    var prg = this.get_0(program);
    if (prg.uniforms === undefined)
      prg.uniforms = {};
    if (prg.uniforms[name] === undefined)
      prg.uniforms[name] = this.alloc_0(this.gl.getUniformLocation(prg, name));
    return prg.uniforms[name];
  };
  KmlGlJsCanvas.prototype.getBooleanv_26fqmq$ = function (pname, data) {
    data.arrayInt[0] = this.gl.getParameter(pname);
  };
  KmlGlJsCanvas.prototype.getBufferParameteriv_7cqqrs$ = function (target, pname, params) {
    params.arrayInt[0] = this.gl.getBufferParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getError = function () {
    return this.gl.getError();
  };
  KmlGlJsCanvas.prototype.getFloatv_26fqmq$ = function (pname, data) {
    data.arrayFloat[0] = this.gl.getParameter(pname);
  };
  KmlGlJsCanvas.prototype.getFramebufferAttachmentParameteriv_emhadu$ = function (target, attachment, pname, params) {
    params.arrayInt[0] = this.gl.getFramebufferAttachmentParameter(target, attachment, pname);
  };
  KmlGlJsCanvas.prototype.getIntegerv_26fqmq$ = function (pname, data) {
    data.arrayInt[0] = this.gl.getParameter(pname);
  };
  KmlGlJsCanvas.prototype.getProgramInfoLog_vfc54s$ = function (program, bufSize, length, infoLog) {
    var tmp$;
    var str = (tmp$ = this.gl.getProgramInfoLog(this.get_0(program))) != null ? tmp$ : '';
    length.arrayInt[0] = str.length;
    putAsciiString(infoLog, str);
  };
  KmlGlJsCanvas.prototype.getRenderbufferParameteriv_7cqqrs$ = function (target, pname, params) {
    params.arrayInt[0] = this.gl.getRenderbufferParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getProgramiv_7cqqrs$ = function (program, pname, params) {
    var tmp$, tmp$_0, tmp$_1;
    if (pname === this.INFO_LOG_LENGTH) {
      params.arrayInt[0] = (tmp$_1 = (tmp$_0 = (tmp$ = this.gl.getProgramInfoLog(this.get_0(program))) != null ? tmp$.length : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 1;
    }
     else {
      params.arrayInt[0] = this.gl.getProgramParameter(this.get_0(program), pname);
    }
  };
  KmlGlJsCanvas.prototype.getShaderiv_7cqqrs$ = function (shader, pname, params) {
    var tmp$, tmp$_0, tmp$_1;
    if (pname === this.INFO_LOG_LENGTH) {
      params.arrayInt[0] = (tmp$_1 = (tmp$_0 = (tmp$ = this.gl.getShaderInfoLog(this.get_0(shader))) != null ? tmp$.length : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 1;
    }
     else {
      params.arrayInt[0] = this.gl.getShaderParameter(this.get_0(shader), pname);
    }
  };
  KmlGlJsCanvas.prototype.getShaderInfoLog_vfc54s$ = function (shader, bufSize, length, infoLog) {
    var tmp$;
    var str = (tmp$ = this.gl.getShaderInfoLog(this.get_0(shader))) != null ? tmp$ : '';
    length.arrayInt[0] = str.length;
    putAsciiString(infoLog, str);
  };
  KmlGlJsCanvas.prototype.getShaderPrecisionFormat_vfc54s$ = function (shadertype, precisiontype, range, precision) {
    var info = this.gl.getShaderPrecisionFormat(shadertype, precisiontype);
    if (info != null) {
      range.arrayInt[0] = info.rangeMin;
      range.arrayInt[1] = info.rangeMax;
      precision.arrayInt[0] = info.precision;
    }
  };
  KmlGlJsCanvas.prototype.getShaderSource_vfc54s$ = function (shader, bufSize, length, source) {
    var tmp$;
    var str = (tmp$ = this.gl.getShaderSource(this.get_0(shader))) != null ? tmp$ : '';
    length.arrayInt[0] = str.length;
    putAsciiString(source, str);
  };
  KmlGlJsCanvas.prototype.getString_za3lpa$ = function (name) {
    return this.gl.getParameter(name);
  };
  KmlGlJsCanvas.prototype.getTexParameterfv_7cqqrs$ = function (target, pname, params) {
    params.arrayFloat[0] = this.gl.getTexParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getTexParameteriv_7cqqrs$ = function (target, pname, params) {
    params.arrayInt[0] = this.gl.getTexParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getUniformfv_7cqqrs$ = function (program, location, params) {
    params.arrayFloat[0] = this.gl.getUniform(this.get_0(program), this.get_0(location));
  };
  KmlGlJsCanvas.prototype.getUniformiv_7cqqrs$ = function (program, location, params) {
    params.arrayInt[0] = this.gl.getUniform(this.get_0(program), this.get_0(location));
  };
  KmlGlJsCanvas.prototype.getVertexAttribfv_7cqqrs$ = function (index, pname, params) {
    params.arrayFloat[0] = this.gl.getVertexAttrib(index, pname);
  };
  KmlGlJsCanvas.prototype.getVertexAttribiv_7cqqrs$ = function (index, pname, params) {
    params.arrayInt[0] = this.gl.getVertexAttrib(index, pname);
  };
  KmlGlJsCanvas.prototype.getVertexAttribPointerv_7cqqrs$ = function (index, pname, pointer) {
    pointer.arrayInt[0] = this.gl.getVertexAttrib(index, pname);
  };
  KmlGlJsCanvas.prototype.hint_vux9f0$ = function (target, mode) {
    this.gl.hint(target, mode);
  };
  KmlGlJsCanvas.prototype.isBuffer_za3lpa$ = function (buffer) {
    return this.gl.isBuffer(this.get_0(buffer));
  };
  KmlGlJsCanvas.prototype.isEnabled_za3lpa$ = function (cap) {
    return this.gl.isEnabled(cap);
  };
  KmlGlJsCanvas.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    return this.gl.isFramebuffer(this.get_0(framebuffer));
  };
  KmlGlJsCanvas.prototype.isProgram_za3lpa$ = function (program) {
    return this.gl.isProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    return this.gl.isRenderbuffer(this.get_0(renderbuffer));
  };
  KmlGlJsCanvas.prototype.isShader_za3lpa$ = function (shader) {
    return this.gl.isShader(this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.isTexture_za3lpa$ = function (texture) {
    return this.gl.isTexture(this.get_0(texture));
  };
  KmlGlJsCanvas.prototype.lineWidth_mx4ult$ = function (width) {
    this.gl.lineWidth(width);
  };
  KmlGlJsCanvas.prototype.linkProgram_za3lpa$ = function (program) {
    this.gl.linkProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.pixelStorei_vux9f0$ = function (pname, param) {
    this.gl.pixelStorei(pname, param);
  };
  KmlGlJsCanvas.prototype.polygonOffset_dleff0$ = function (factor, units) {
    this.gl.polygonOffset(factor, units);
  };
  KmlGlJsCanvas.prototype.readPixels_8vifew$ = function (x, y, width, height, format, type, pixels) {
    this.gl.readPixels(x, y, width, height, format, type, get_arrayUByte(pixels));
  };
  KmlGlJsCanvas.prototype.releaseShaderCompiler = function () {
  };
  KmlGlJsCanvas.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
    this.gl.renderbufferStorage(target, internalformat, width, height);
  };
  KmlGlJsCanvas.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    this.gl.sampleCoverage(value, invert);
  };
  KmlGlJsCanvas.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    this.gl.scissor(x, y, width, height);
  };
  KmlGlJsCanvas.prototype.shaderBinary_y4twta$ = function (count, shaders, binaryformat, binary, length) {
    throw new KmlGlException('shaderBinary not implemented in Webgl');
  };
  KmlGlJsCanvas.prototype.shaderSource_19mbxw$ = function (shader, string) {
    this.gl.shaderSource(this.get_0(shader), '#ifdef GL_ES' + '\n' + 'precision mediump float;' + '\n' + '#endif' + '\n' + string);
  };
  KmlGlJsCanvas.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    this.gl.stencilFunc(func, ref, mask);
  };
  KmlGlJsCanvas.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    this.gl.stencilFuncSeparate(face, func, ref, mask);
  };
  KmlGlJsCanvas.prototype.stencilMask_za3lpa$ = function (mask) {
    this.gl.stencilMask(mask);
  };
  KmlGlJsCanvas.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    this.gl.stencilMaskSeparate(face, mask);
  };
  KmlGlJsCanvas.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    this.gl.stencilOp(fail, zfail, zpass);
  };
  KmlGlJsCanvas.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
    this.gl.stencilOpSeparate(face, sfail, dpfail, dppass);
  };
  KmlGlJsCanvas.prototype.texImage2D_byudfd$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
    this.gl.texImage2D(target, level, internalformat, width, height, border, format, type, pixels != null ? get_arrayUByte(pixels) : null);
  };
  KmlGlJsCanvas.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
    var tmp$;
    this.gl.texImage2D(target, level, internalformat, format, type, (Kotlin.isType(tmp$ = data, HtmlNativeImage) ? tmp$ : throwCCE()).texSource);
  };
  KmlGlJsCanvas.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
    this.gl.texParameterf(target, pname, param);
  };
  KmlGlJsCanvas.prototype.texParameterfv_7cqqrs$ = function (target, pname, params) {
    this.gl.texParameterf(target, pname, params.arrayFloat[0]);
  };
  KmlGlJsCanvas.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
    this.gl.texParameteri(target, pname, param);
  };
  KmlGlJsCanvas.prototype.texParameteriv_7cqqrs$ = function (target, pname, params) {
    this.gl.texParameteri(target, pname, params.arrayInt[0]);
  };
  KmlGlJsCanvas.prototype.texSubImage2D_teftfc$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    this.gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, get_arrayUByte(pixels));
  };
  KmlGlJsCanvas.prototype.uniform1f_24o109$ = function (location, v0) {
    this.gl.uniform1f(this.get_0(location), v0);
  };
  KmlGlJsCanvas.prototype.uniform1fv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform1fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform1i_vux9f0$ = function (location, v0) {
    this.gl.uniform1i(this.get_0(location), v0);
  };
  KmlGlJsCanvas.prototype.uniform1iv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform1iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
    this.gl.uniform2f(this.get_0(location), v0, v1);
  };
  KmlGlJsCanvas.prototype.uniform2fv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform2fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
    this.gl.uniform2i(this.get_0(location), v0, v1);
  };
  KmlGlJsCanvas.prototype.uniform2iv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform2iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
    this.gl.uniform3f(this.get_0(location), v0, v1, v2);
  };
  KmlGlJsCanvas.prototype.uniform3fv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform3fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
    this.gl.uniform3i(this.get_0(location), v0, v1, v2);
  };
  KmlGlJsCanvas.prototype.uniform3iv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform3iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
    this.gl.uniform4f(this.get_0(location), v0, v1, v2, v3);
  };
  KmlGlJsCanvas.prototype.uniform4fv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform4fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
    this.gl.uniform4i(this.get_0(location), v0, v1, v2, v3);
  };
  KmlGlJsCanvas.prototype.uniform4iv_7cqqrs$ = function (location, count, value) {
    this.gl.uniform4iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniformMatrix2fv_24ez2x$ = function (location, count, transpose, value) {
    this.gl.uniformMatrix2fv(this.get_0(location), transpose, value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniformMatrix3fv_24ez2x$ = function (location, count, transpose, value) {
    this.gl.uniformMatrix3fv(this.get_0(location), transpose, value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniformMatrix4fv_24ez2x$ = function (location, count, transpose, value) {
    this.gl.uniformMatrix4fv(this.get_0(location), transpose, value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.useProgram_za3lpa$ = function (program) {
    this.gl.useProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.validateProgram_za3lpa$ = function (program) {
    this.gl.validateProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    this.gl.vertexAttrib1f(index, x);
  };
  KmlGlJsCanvas.prototype.vertexAttrib1fv_26fqmq$ = function (index, v) {
    this.gl.vertexAttrib1fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    this.gl.vertexAttrib2f(index, x, y);
  };
  KmlGlJsCanvas.prototype.vertexAttrib2fv_26fqmq$ = function (index, v) {
    this.gl.vertexAttrib2fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    this.gl.vertexAttrib3f(index, x, y, z);
  };
  KmlGlJsCanvas.prototype.vertexAttrib3fv_26fqmq$ = function (index, v) {
    this.gl.vertexAttrib3fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    this.gl.vertexAttrib4f(index, x, y, z, w);
  };
  KmlGlJsCanvas.prototype.vertexAttrib4fv_26fqmq$ = function (index, v) {
    this.gl.vertexAttrib4fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
    this.gl.vertexAttribPointer(index, size, type, normalized, stride, pointer);
  };
  KmlGlJsCanvas.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    this.gl.viewport(x, y, width, height);
  };
  KmlGlJsCanvas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlJsCanvas',
    interfaces: [KmlGl]
  };
  function get_arrayBuffer($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.mem, ArrayBuffer) ? tmp$ : throwCCE();
  }
  function get_arrayUByte($receiver) {
    return new Uint8Array($receiver.mem);
  }
  function AGOpenglFactory() {
    AGOpenglFactory_instance = this;
  }
  AGOpenglFactory.prototype.create_s8jyv4$ = function (nativeComponent) {
    return AGFactoryWebgl_getInstance();
  };
  Object.defineProperty(AGOpenglFactory.prototype, 'isTouchDevice', {
    get: function () {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
  });
  AGOpenglFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AGOpenglFactory',
    interfaces: []
  };
  var AGOpenglFactory_instance = null;
  function AGOpenglFactory_getInstance() {
    if (AGOpenglFactory_instance === null) {
      new AGOpenglFactory();
    }
    return AGOpenglFactory_instance;
  }
  function AGFactoryWebgl() {
    AGFactoryWebgl_instance = this;
    this.supportsNativeFrame_xyi6nj$_0 = true;
  }
  Object.defineProperty(AGFactoryWebgl.prototype, 'supportsNativeFrame', {
    get: function () {
      return this.supportsNativeFrame_xyi6nj$_0;
    }
  });
  AGFactoryWebgl.prototype.create_iozxf8$ = function (nativeControl, config) {
    return new AGWebgl(config);
  };
  AGFactoryWebgl.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init();
  };
  AGFactoryWebgl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AGFactoryWebgl',
    interfaces: [AGFactory]
  };
  var AGFactoryWebgl_instance = null;
  function AGFactoryWebgl_getInstance() {
    if (AGFactoryWebgl_instance === null) {
      new AGFactoryWebgl();
    }
    return AGFactoryWebgl_instance;
  }
  function jsEmptyObject() {
    return {};
  }
  function jsObject(pairs) {
    var tmp$;
    var out = jsEmptyObject();
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      if (v != null)
        out[k] = v;
    }
    return out;
  }
  function AGWebgl(config, glDecorator) {
    AGWebgl$Companion_getInstance();
    if (glDecorator === void 0)
      glDecorator = AGWebgl_init$lambda;
    AGOpengl.call(this);
    this.config = config;
    this.glDecorator = glDecorator;
    this.webgl_qzhorw$_0 = true;
    this.ag_1tusrt$_0 = this;
    var tmp$;
    this.canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.glOpts = jsObject([to('premultipliedAlpha', true), to('alpha', false), to('stencil', true), to('antialias', this.config.antialiasHint)]);
    this.gl_1tuxca$_0 = this.glDecorator(new KmlGlJsCanvas(this.canvas, this.glOpts));
    window.ag = this;
    this.nativeComponent_ktsp3z$_0 = this.canvas;
    this.devicePixelRatio_sbtx5g$_0 = 1.0;
    this.onReadyOnce = new Once();
    this.canvas.addEventListener('webglcontextlost', AGWebgl_init$lambda_0, false);
    this.canvas.addEventListener('webglcontextrestored', AGWebgl_init$lambda_1(this), false);
  }
  Object.defineProperty(AGWebgl.prototype, 'webgl', {
    get: function () {
      return this.webgl_qzhorw$_0;
    }
  });
  function AGWebgl$Companion() {
    AGWebgl$Companion_instance = this;
    this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
  }
  AGWebgl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AGWebgl$Companion_instance = null;
  function AGWebgl$Companion_getInstance() {
    if (AGWebgl$Companion_instance === null) {
      new AGWebgl$Companion();
    }
    return AGWebgl$Companion_instance;
  }
  Object.defineProperty(AGWebgl.prototype, 'ag', {
    get: function () {
      return this.ag_1tusrt$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'gl', {
    get: function () {
      return this.gl_1tuxca$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_ktsp3z$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'tDevicePixelRatio', {
    get: function () {
      return window.devicePixelRatio;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'devicePixelRatio', {
    get: function () {
      if (this.tDevicePixelRatio <= 0.0)
        return 1.0;
      else if (isNaN_0(this.tDevicePixelRatio))
        return 1.0;
      else if (isInfinite(this.tDevicePixelRatio))
        return 1.0;
      else
        return this.tDevicePixelRatio;
    },
    set: function (devicePixelRatio) {
      this.devicePixelRatio_sbtx5g$_0 = devicePixelRatio;
    }
  });
  AGWebgl.prototype.repaint = function () {
    var $this = this.onReadyOnce;
    if (!$this.completed) {
      $this.completed = true;
      this.ready();
    }
    this.onRender.invoke_11rb$(this);
  };
  AGWebgl.prototype.dispose = function () {
  };
  AGWebgl.prototype.prepareUploadNativeTexture_m8r6i1$ = function (bmp) {
    this.gl.pixelStorei_vux9f0$(37441, bmp.premultiplied ? 1 : 0);
  };
  function AGWebgl_init$lambda(it) {
    return it;
  }
  function AGWebgl_init$lambda_0(e) {
    e.preventDefault();
    return Unit;
  }
  function AGWebgl_init$lambda_1(this$AGWebgl) {
    return function (e) {
      var tmp$;
      tmp$ = this$AGWebgl.contextVersion;
      this$AGWebgl.contextVersion = tmp$ + 1 | 0;
      return Unit;
    };
  }
  AGWebgl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGWebgl',
    interfaces: [AGContainer, AGOpengl]
  };
  function BrowserGameWindow() {
    GameWindow.call(this);
    this.ag_k6miga$_0 = new AGWebgl(new AGConfig());
    this.isTouchDeviceCache_0 = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    window.canvas = this.canvas;
    window.ag = this.ag;
    window.gl = this.ag.gl;
    (tmp$ = document.body) != null ? tmp$.appendChild(this.canvas) : null;
    (tmp$_1 = (tmp$_0 = document.body) != null ? tmp$_0.style : null) != null ? (tmp$_1.margin = '0px') : null;
    (tmp$_3 = (tmp$_2 = document.body) != null ? tmp$_2.style : null) != null ? (tmp$_3.padding = '0px') : null;
    (tmp$_5 = (tmp$_4 = document.body) != null ? tmp$_4.style : null) != null ? (tmp$_5.overflowX = 'hidden') : null;
    (tmp$_7 = (tmp$_6 = document.body) != null ? tmp$_6.style : null) != null ? (tmp$_7.overflowY = 'hidden') : null;
    this.canvas.addEventListener('mouseenter', BrowserGameWindow_init$lambda(this));
    this.canvas.addEventListener('mouseleave', BrowserGameWindow_init$lambda_0(this));
    this.canvas.addEventListener('mouseover', BrowserGameWindow_init$lambda_1(this));
    this.canvas.addEventListener('mousemove', BrowserGameWindow_init$lambda_2(this));
    this.canvas.addEventListener('mouseout', BrowserGameWindow_init$lambda_3(this));
    this.canvas.addEventListener('mouseup', BrowserGameWindow_init$lambda_4(this));
    this.canvas.addEventListener('mousedown', BrowserGameWindow_init$lambda_5(this));
    this.canvas.addEventListener('click', BrowserGameWindow_init$lambda_6(this));
    this.canvas.addEventListener('touchstart', BrowserGameWindow_init$lambda_7(this));
    this.canvas.addEventListener('touchmove', BrowserGameWindow_init$lambda_8(this));
    this.canvas.addEventListener('touchend', BrowserGameWindow_init$lambda_9(this));
    window.addEventListener('keypress', BrowserGameWindow_init$lambda_10(this));
    window.addEventListener('keydown', BrowserGameWindow_init$lambda_11(this));
    window.addEventListener('keyup', BrowserGameWindow_init$lambda_12(this));
    window.addEventListener('gamepadconnected', BrowserGameWindow_init$lambda_13(this));
    window.addEventListener('gamepaddisconnected', BrowserGameWindow_init$lambda_14(this));
    window.addEventListener('resize', BrowserGameWindow_init$lambda_15(this));
    this.onResized_0();
    this.quality_5d370b$_0 = GameWindow$Quality$AUTOMATIC_getInstance();
    this.icon_5jkk1j$_0 = null;
    this.loopJob_0 = null;
    this.jsFrame_yy4udc$_0 = this.jsFrame_yy4udc$_0;
    this.jsFrame_0 = BrowserGameWindow_init$lambda_16(this);
  }
  Object.defineProperty(BrowserGameWindow.prototype, 'ag', {
    get: function () {
      return this.ag_k6miga$_0;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'canvas', {
    get: function () {
      return this.ag.canvas;
    }
  });
  BrowserGameWindow.prototype.is_touch_device = function () {
    var tmp$;
    if (this.isTouchDeviceCache_0 == null) {
      try {
        document.createEvent('TouchEvent');
        tmp$ = true;
      }
       catch (e) {
        tmp$ = false;
      }
      this.isTouchDeviceCache_0 = tmp$;
    }
    return ensureNotNull(this.isTouchDeviceCache_0);
  };
  BrowserGameWindow.prototype.updateGamepad_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    try {
      if (navigator.getGamepads != null) {
        var gamepads = navigator.getGamepads();
        tmp$ = this.gamePadUpdateEvent.gamepads;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var gp = tmp$[tmp$_0];
          gp.connected = false;
        }
        this.gamePadUpdateEvent.gamepadsLength = gamepads.length;
        tmp$_1 = gamepads.length;
        for (var gamepadId = 0; gamepadId < tmp$_1; gamepadId++) {
          tmp$_2 = gamepads[gamepadId];
          if (tmp$_2 == null) {
            continue;
          }
          var controller = tmp$_2;
          tmp$_3 = getOrNull(this.gamePadUpdateEvent.gamepads, gamepadId);
          if (tmp$_3 == null) {
            continue;
          }
          var gamepad = tmp$_3;
          var mapping = (tmp$_5 = (tmp$_4 = knownControllers.get_11rb$(controller.id)) != null ? tmp$_4 : knownControllers.get_11rb$(controller.mapping)) != null ? tmp$_5 : StandardGamepadMapping_getInstance();
          var tmp$_6, tmp$_7;
          gamepad.connected = controller.connected;
          gamepad.index = controller.index;
          gamepad.name = controller.id;
          gamepad.mapping = mapping;
          gamepad.axesLength = controller.axes.length;
          gamepad.buttonsLength = controller.buttons.length;
          gamepad.rawButtonsPressed = 0;
          tmp$_6 = controller.buttons.length;
          for (var n = 0; n < tmp$_6; n++) {
            var button = controller.buttons[n];
            if (button.pressed)
              gamepad.rawButtonsPressed = gamepad.rawButtonsPressed | 1 << n;
            gamepad.rawButtonsPressure[n] = button.value;
          }
          tmp$_7 = controller.axes.length;
          for (var n_0 = 0; n_0 < tmp$_7; n_0++) {
            gamepad.rawAxes[n_0] = controller.axes[n_0];
          }
        }
        var event = this.gamePadUpdateEvent;
        this.dispatch_nipq8w$(getKClass(GamePadUpdateEvent), event);
      }
    }
     catch (e) {
      console.error(e);
    }
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'quality', {
    get: function () {
      return this.quality_5d370b$_0;
    },
    set: function (value) {
      if (this.quality_5d370b$_0 !== value) {
        this.quality_5d370b$_0 = value;
        this.onResized_0();
      }
    }
  });
  BrowserGameWindow.prototype.onResized_0 = function () {
    this.isTouchDeviceCache_0 = null;
    this.canvas.width = numberToInt(window.innerWidth * this.scaledViewport);
    this.canvas.height = numberToInt(window.innerHeight * this.scaledViewport);
    this.canvas.style.position = 'absolute';
    this.canvas.style.left = '0';
    this.canvas.style.right = '0';
    this.canvas.style.width = window.innerWidth.toString() + 'px';
    this.canvas.style.height = window.innerHeight.toString() + 'px';
    this.dispatchReshapeEvent_tjonv8$(0, 0, this.canvas.width, this.canvas.height);
  };
  BrowserGameWindow.prototype.doRender_0 = function () {
    this.ag.onRender.invoke_11rb$(this.ag);
    var event = this.renderEvent;
    this.dispatch_nipq8w$(getKClass(RenderEvent), event);
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'doQuality', {
    get: function () {
      return this.quality === GameWindow$Quality$QUALITY_getInstance();
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'scaledViewport', {
    get: function () {
      return this.doQuality ? this.ag.devicePixelRatio : 1.0;
    }
  });
  BrowserGameWindow.prototype.transformEventX_3p81yu$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korgw.BrowserGameWindow.transformEventX_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x) {
      return numberToDouble(x) * this.scaledViewport;
    };
  }));
  BrowserGameWindow.prototype.transformEventY_3p81yu$ = defineInlineFunction('korgw-root-korgw.com.soywiz.korgw.BrowserGameWindow.transformEventY_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (y) {
      return numberToDouble(y) * this.scaledViewport;
    };
  }));
  BrowserGameWindow.prototype.keyEvent_0 = function (me) {
    var $receiver = this.keyEvent;
    var tmp$, tmp$_0;
    switch (me.type) {
      case 'keydown':
        tmp$ = KeyEvent$Type$DOWN_getInstance();
        break;
      case 'keyup':
        tmp$ = KeyEvent$Type$UP_getInstance();
        break;
      case 'keypress':
        tmp$ = KeyEvent$Type$TYPE_getInstance();
        break;
      default:throw IllegalStateException_init(('Unsupported event type ' + me.type).toString());
    }
    $receiver.type = tmp$;
    $receiver.id = 0;
    $receiver.keyCode = me.keyCode;
    switch (me.key) {
      case '0':
        tmp$_0 = Key$N0_getInstance();
        break;
      case '1':
        tmp$_0 = Key$N1_getInstance();
        break;
      case '2':
        tmp$_0 = Key$N2_getInstance();
        break;
      case '3':
        tmp$_0 = Key$N3_getInstance();
        break;
      case '4':
        tmp$_0 = Key$N4_getInstance();
        break;
      case '5':
        tmp$_0 = Key$N5_getInstance();
        break;
      case '6':
        tmp$_0 = Key$N6_getInstance();
        break;
      case '7':
        tmp$_0 = Key$N7_getInstance();
        break;
      case '8':
        tmp$_0 = Key$N8_getInstance();
        break;
      case '9':
        tmp$_0 = Key$N9_getInstance();
        break;
      case 'a':
        tmp$_0 = Key$A_getInstance();
        break;
      case 'b':
        tmp$_0 = Key$B_getInstance();
        break;
      case 'c':
        tmp$_0 = Key$C_getInstance();
        break;
      case 'd':
        tmp$_0 = Key$D_getInstance();
        break;
      case 'e':
        tmp$_0 = Key$E_getInstance();
        break;
      case 'f':
        tmp$_0 = Key$F_getInstance();
        break;
      case 'g':
        tmp$_0 = Key$G_getInstance();
        break;
      case 'h':
        tmp$_0 = Key$H_getInstance();
        break;
      case 'i':
        tmp$_0 = Key$I_getInstance();
        break;
      case 'j':
        tmp$_0 = Key$J_getInstance();
        break;
      case 'k':
        tmp$_0 = Key$K_getInstance();
        break;
      case 'l':
        tmp$_0 = Key$L_getInstance();
        break;
      case 'm':
        tmp$_0 = Key$M_getInstance();
        break;
      case 'n':
        tmp$_0 = Key$N_getInstance();
        break;
      case 'o':
        tmp$_0 = Key$O_getInstance();
        break;
      case 'p':
        tmp$_0 = Key$P_getInstance();
        break;
      case 'q':
        tmp$_0 = Key$Q_getInstance();
        break;
      case 'r':
        tmp$_0 = Key$R_getInstance();
        break;
      case 's':
        tmp$_0 = Key$S_getInstance();
        break;
      case 't':
        tmp$_0 = Key$T_getInstance();
        break;
      case 'u':
        tmp$_0 = Key$U_getInstance();
        break;
      case 'v':
        tmp$_0 = Key$V_getInstance();
        break;
      case 'w':
        tmp$_0 = Key$W_getInstance();
        break;
      case 'x':
        tmp$_0 = Key$X_getInstance();
        break;
      case 'y':
        tmp$_0 = Key$Y_getInstance();
        break;
      case 'z':
        tmp$_0 = Key$Z_getInstance();
        break;
      case 'F1':
        tmp$_0 = Key$F1_getInstance();
        break;
      case 'F2':
        tmp$_0 = Key$F2_getInstance();
        break;
      case 'F3':
        tmp$_0 = Key$F3_getInstance();
        break;
      case 'F4':
        tmp$_0 = Key$F4_getInstance();
        break;
      case 'F5':
        tmp$_0 = Key$F5_getInstance();
        break;
      case 'F6':
        tmp$_0 = Key$F6_getInstance();
        break;
      case 'F7':
        tmp$_0 = Key$F7_getInstance();
        break;
      case 'F8':
        tmp$_0 = Key$F8_getInstance();
        break;
      case 'F9':
        tmp$_0 = Key$F9_getInstance();
        break;
      case 'F10':
        tmp$_0 = Key$F10_getInstance();
        break;
      case 'F11':
        tmp$_0 = Key$F11_getInstance();
        break;
      case 'F12':
        tmp$_0 = Key$F12_getInstance();
        break;
      case 'F13':
        tmp$_0 = Key$F13_getInstance();
        break;
      case 'F14':
        tmp$_0 = Key$F14_getInstance();
        break;
      case 'F15':
        tmp$_0 = Key$F15_getInstance();
        break;
      case 'F16':
        tmp$_0 = Key$F16_getInstance();
        break;
      case 'F17':
        tmp$_0 = Key$F17_getInstance();
        break;
      case 'F18':
        tmp$_0 = Key$F18_getInstance();
        break;
      case 'F19':
        tmp$_0 = Key$F19_getInstance();
        break;
      case 'F20':
        tmp$_0 = Key$F20_getInstance();
        break;
      case 'F21':
        tmp$_0 = Key$F21_getInstance();
        break;
      case 'F22':
        tmp$_0 = Key$F22_getInstance();
        break;
      case 'F23':
        tmp$_0 = Key$F23_getInstance();
        break;
      case 'F24':
        tmp$_0 = Key$F24_getInstance();
        break;
      case 'F25':
        tmp$_0 = Key$F25_getInstance();
        break;
      default:switch (me.code) {
          case 'MetaLeft':
            tmp$_0 = Key$LEFT_SUPER_getInstance();
            break;
          case 'MetaRight':
            tmp$_0 = Key$RIGHT_SUPER_getInstance();
            break;
          case 'ShiftLeft':
            tmp$_0 = Key$LEFT_SHIFT_getInstance();
            break;
          case 'ShiftRight':
            tmp$_0 = Key$RIGHT_SHIFT_getInstance();
            break;
          case 'ControlLeft':
            tmp$_0 = Key$LEFT_CONTROL_getInstance();
            break;
          case 'ControlRight':
            tmp$_0 = Key$RIGHT_CONTROL_getInstance();
            break;
          case 'AltLeft':
            tmp$_0 = Key$LEFT_ALT_getInstance();
            break;
          case 'AltRight':
            tmp$_0 = Key$RIGHT_ALT_getInstance();
            break;
          case 'Space':
            tmp$_0 = Key$SPACE_getInstance();
            break;
          case 'ArrowUp':
            tmp$_0 = Key$UP_getInstance();
            break;
          case 'ArrowDown':
            tmp$_0 = Key$DOWN_getInstance();
            break;
          case 'ArrowLeft':
            tmp$_0 = Key$LEFT_getInstance();
            break;
          case 'ArrowRight':
            tmp$_0 = Key$RIGHT_getInstance();
            break;
          case 'Enter':
            tmp$_0 = Key$ENTER_getInstance();
            break;
          case 'Escape':
            tmp$_0 = Key$ESCAPE_getInstance();
            break;
          case 'Backspace':
            tmp$_0 = Key$BACKSPACE_getInstance();
            break;
          case 'Period':
            tmp$_0 = Key$PERIOD_getInstance();
            break;
          case 'Comma':
            tmp$_0 = Key$COMMA_getInstance();
            break;
          case 'Semicolon':
            tmp$_0 = Key$SEMICOLON_getInstance();
            break;
          case 'Slash':
            tmp$_0 = Key$SLASH_getInstance();
            break;
          case 'Tab':
            tmp$_0 = Key$TAB_getInstance();
            break;
          default:tmp$_0 = Key$UNKNOWN_getInstance();
            break;
        }

        break;
    }
    $receiver.key = tmp$_0;
    $receiver.character = toBoxedChar(toChar(me.charCode));
    this.dispatch_nipq8w$(getKClass(KeyEvent), $receiver);
  };
  BrowserGameWindow.prototype.touchEvent_0 = function (e, type) {
    var tmp$;
    this.touchEvent.scaleCoords = false;
    this.touchEvent.startFrame_dh6y7s$(type);
    tmp$ = e.touches.length;
    for (var n = 0; n < tmp$; n++) {
      var touch = e.touches.item(n);
      this.touchEvent.touch_w4xg1m$(touch.identifier, numberToDouble(touch.clientX) * this.scaledViewport, numberToDouble(touch.clientY) * this.scaledViewport);
    }
    var event = this.touchEvent;
    this.dispatch_nipq8w$(getKClass(TouchEvent), event);
  };
  BrowserGameWindow.prototype.mouseEvent_0 = function (e, type, pressingType) {
    if (pressingType === void 0)
      pressingType = type;
    if (!this.is_touch_device()) {
      var tx = numberToInt(numberToDouble(e.clientX) * this.scaledViewport);
      var ty = numberToInt(numberToDouble(e.clientY) * this.scaledViewport);
      var $receiver = this.mouseEvent;
      $receiver.type = e.buttons !== 0 ? pressingType : type;
      $receiver.scaleCoords = false;
      $receiver.id = 0;
      $receiver.x = tx;
      $receiver.y = ty;
      $receiver.button = MouseButton$Companion_getInstance().get_za3lpa$(e.button);
      $receiver.buttons = e.buttons;
      $receiver.isShiftDown = e.shiftKey;
      $receiver.isCtrlDown = e.ctrlKey;
      $receiver.isAltDown = e.altKey;
      $receiver.isMetaDown = e.metaKey;
      this.dispatch_nipq8w$(getKClass(MouseEvent), $receiver);
    }
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'title', {
    get: function () {
      return document.title;
    },
    set: function (value) {
      document.title = value;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'width', {
    get: function () {
      return this.canvas.clientWidth;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'height', {
    get: function () {
      return this.canvas.clientHeight;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'icon', {
    get: function () {
      return this.icon_5jkk1j$_0;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.icon_5jkk1j$_0 = value;
      if (value != null) {
        var link = document.querySelector("link[rel*='icon']");
        link.type = 'image/png';
        link.rel = 'shortcut icon';
        link.href = 'data:image/png;base64,' + toBase64(format.PNG.encode_hnx2ev$(value));
        (tmp$ = document.getElementsByTagName('head')[0]) != null ? tmp$.appendChild(link) : null;
      }
       else {
        (tmp$_0 = document.querySelector("link[rel*='icon']")) != null ? (tmp$_0.remove(), Unit) : null;
      }
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'fullscreen', {
    get: function () {
      return document.fullscreenElement != null;
    },
    set: function (value) {
      if (this.fullscreen !== value) {
        var tmp$;
        try {
          var block$result;
          if (value) {
            block$result = this.canvas.requestFullscreen();
          }
           else {
            block$result = document.exitFullscreen();
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
      }
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'visible', {
    get: function () {
      return equals(this.canvas.style.visibility, 'visible');
    },
    set: function (value) {
      this.canvas.style.visibility = value ? 'visible' : 'hidden';
    }
  });
  BrowserGameWindow.prototype.setSize_vux9f0$ = function (width, height) {
  };
  BrowserGameWindow.prototype.browse_ptvjoy$ = function (url, continuation) {
    document.open(url.fullUrl);
  };
  BrowserGameWindow.prototype.alert_61zpoe$ = function (message, continuation) {
    window.alert(message);
  };
  BrowserGameWindow.prototype.confirm_61zpoe$ = function (message, continuation) {
    return window.confirm(message);
  };
  BrowserGameWindow.prototype.prompt_puj7f4$$default = function (message, default_0, continuation) {
    var tmp$;
    tmp$ = window.prompt(message, default_0);
    if (tmp$ == null) {
      throw CancellationException_init('cancelled');
    }
    return tmp$;
  };
  BrowserGameWindow.prototype.openFileDialog_r0su5d$$default = function (filter, write, multi, continuation) {
    throw new NotImplementedError_init();
  };
  function Coroutine$BrowserGameWindow$close$lambda(this$BrowserGameWindow_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BrowserGameWindow = this$BrowserGameWindow_0;
  }
  Coroutine$BrowserGameWindow$close$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BrowserGameWindow$close$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BrowserGameWindow$close$lambda.prototype.constructor = Coroutine$BrowserGameWindow$close$lambda;
  Coroutine$BrowserGameWindow$close$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$BrowserGameWindow.loopJob_0) != null) {
              this.state_0 = 2;
              this.result_0 = cancelAndJoin(tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
            continue;
          case 3:
            return window.close(), Unit;
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
  function BrowserGameWindow$close$lambda(this$BrowserGameWindow_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BrowserGameWindow$close$lambda(this$BrowserGameWindow_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BrowserGameWindow.prototype.close = function () {
    GameWindow.prototype.close.call(this);
    launchImmediately(this.coroutineDispatcher, BrowserGameWindow$close$lambda(this));
    this.loopJob_0 = null;
  };
  function Coroutine$BrowserGameWindow$loop$lambda(closure$entry_0, this$BrowserGameWindow_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
    this.local$this$BrowserGameWindow = this$BrowserGameWindow_0;
  }
  Coroutine$BrowserGameWindow$loop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BrowserGameWindow$loop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BrowserGameWindow$loop$lambda.prototype.constructor = Coroutine$BrowserGameWindow$loop$lambda;
  Coroutine$BrowserGameWindow$loop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$entry(this.local$this$BrowserGameWindow, this);
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
  function BrowserGameWindow$loop$lambda(closure$entry_0, this$BrowserGameWindow_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BrowserGameWindow$loop$lambda(closure$entry_0, this$BrowserGameWindow_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BrowserGameWindow.prototype.loop_179clj$ = function (entry, continuation) {
    this.loopJob_0 = launchImmediately(this.coroutineDispatcher, BrowserGameWindow$loop$lambda(entry, this));
    this.jsFrame_0(0.0);
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'jsFrame_0', {
    get: function () {
      if (this.jsFrame_yy4udc$_0 == null)
        return throwUPAE('jsFrame');
      return this.jsFrame_yy4udc$_0;
    },
    set: function (jsFrame) {
      this.jsFrame_yy4udc$_0 = jsFrame;
    }
  });
  function BrowserGameWindow_init$lambda(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$ENTER_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_0(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$EXIT_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_1(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$MOVE_getInstance(), MouseEvent$Type$DRAG_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_2(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$MOVE_getInstance(), MouseEvent$Type$DRAG_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_3(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$EXIT_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_4(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$UP_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_5(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$DOWN_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_6(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type$CLICK_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_7(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.touchEvent_0(it, TouchEvent$Type$START_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_8(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.touchEvent_0(it, TouchEvent$Type$MOVE_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_9(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.touchEvent_0(it, TouchEvent$Type$END_getInstance());
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_10(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.keyEvent_0(it);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_11(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.keyEvent_0(it);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_12(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.keyEvent_0(it);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_13(this$BrowserGameWindow) {
    return function (e) {
      var e_0 = e;
      var tmp$ = this$BrowserGameWindow;
      var $receiver = this$BrowserGameWindow.gamePadConnectionEvent;
      $receiver.type = GamePadConnectionEvent$Type$CONNECTED_getInstance();
      $receiver.gamepad = e_0.gamepad.index;
      tmp$.dispatch_nipq8w$(getKClass(GamePadConnectionEvent), $receiver);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_14(this$BrowserGameWindow) {
    return function (e) {
      var e_0 = e;
      var tmp$ = this$BrowserGameWindow;
      var $receiver = this$BrowserGameWindow.gamePadConnectionEvent;
      $receiver.type = GamePadConnectionEvent$Type$DISCONNECTED_getInstance();
      $receiver.gamepad = e_0.gamepad.index;
      tmp$.dispatch_nipq8w$(getKClass(GamePadConnectionEvent), $receiver);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_15(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.onResized_0();
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_16(this$BrowserGameWindow) {
    return function (step) {
      this$BrowserGameWindow.updateGamepad_0();
      this$BrowserGameWindow.coroutineDispatcher.executePending();
      this$BrowserGameWindow.doRender_0();
      window.requestAnimationFrame(this$BrowserGameWindow.jsFrame_0);
      return Unit;
    };
  }
  BrowserGameWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrowserGameWindow',
    interfaces: [GameWindow]
  };
  function get_0($receiver, index) {
    return $receiver[index];
  }
  function NodeJsGameWindow() {
    GameWindow.call(this);
  }
  NodeJsGameWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeJsGameWindow',
    interfaces: [GameWindow]
  };
  function CreateDefaultGameWindow() {
    return util.OS.isJsNodeJs ? new NodeJsGameWindow() : new BrowserGameWindow();
  }
  function Nimbus_111_1420_Safari_GamepadMapping() {
    Nimbus_111_1420_Safari_GamepadMapping_instance = this;
    GamepadMapping.call(this);
    this.id_bkfnxk$_0 = '111-1420-Nimbus';
  }
  Object.defineProperty(Nimbus_111_1420_Safari_GamepadMapping.prototype, 'id', {
    get: function () {
      return this.id_bkfnxk$_0;
    }
  });
  Nimbus_111_1420_Safari_GamepadMapping.prototype.get_nr7vgt$ = function (button, info) {
    var tmp$;
    switch (button.name) {
      case 'BUTTON0':
        tmp$ = this.getRawButton_qw5gbr$(info, 0);
        break;
      case 'BUTTON1':
        tmp$ = this.getRawButton_qw5gbr$(info, 1);
        break;
      case 'BUTTON2':
        tmp$ = this.getRawButton_qw5gbr$(info, 2);
        break;
      case 'BUTTON3':
        tmp$ = this.getRawButton_qw5gbr$(info, 3);
        break;
      case 'L1':
        tmp$ = this.getRawButton_qw5gbr$(info, 4);
        break;
      case 'R1':
        tmp$ = this.getRawButton_qw5gbr$(info, 5);
        break;
      case 'L2':
        tmp$ = this.getRawButton_qw5gbr$(info, 6);
        break;
      case 'R2':
        tmp$ = this.getRawButton_qw5gbr$(info, 7);
        break;
      case 'LEFT':
        tmp$ = this.getRawButton_qw5gbr$(info, 8);
        break;
      case 'DOWN':
        tmp$ = this.getRawButton_qw5gbr$(info, 9);
        break;
      case 'RIGHT':
        tmp$ = this.getRawButton_qw5gbr$(info, 10);
        break;
      case 'UP':
        tmp$ = this.getRawButton_qw5gbr$(info, 11);
        break;
      case 'SELECT':
        tmp$ = 0.0;
        break;
      case 'START':
        tmp$ = 0.0;
        break;
      case 'SYSTEM':
        tmp$ = 0.0;
        break;
      case 'LX':
        tmp$ = this.getRawAxe_qw5gbr$(info, 0);
        break;
      case 'LY':
        tmp$ = this.getRawAxe_qw5gbr$(info, 1);
        break;
      case 'RX':
        tmp$ = this.getRawAxe_qw5gbr$(info, 2);
        break;
      case 'RY':
        tmp$ = this.getRawAxe_qw5gbr$(info, 3);
        break;
      default:tmp$ = 0.0;
        break;
    }
    return tmp$;
  };
  Nimbus_111_1420_Safari_GamepadMapping.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Nimbus_111_1420_Safari_GamepadMapping',
    interfaces: [GamepadMapping]
  };
  var Nimbus_111_1420_Safari_GamepadMapping_instance = null;
  function Nimbus_111_1420_Safari_GamepadMapping_getInstance() {
    if (Nimbus_111_1420_Safari_GamepadMapping_instance === null) {
      new Nimbus_111_1420_Safari_GamepadMapping();
    }
    return Nimbus_111_1420_Safari_GamepadMapping_instance;
  }
  var knownControllers;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kgl = package$soywiz.kgl || (package$soywiz.kgl = {});
  package$kgl.IKmlGl = IKmlGl;
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  package$kgl.toAsciiString_4hblvt$ = toAsciiString;
  package$kgl.putAsciiString_y99w9$ = putAsciiString;
  package$kgl.kmlByteBufferOf_wcry4u$ = kmlByteBufferOf;
  package$kgl.kmlShortBufferOf_yd0neo$ = kmlShortBufferOf;
  package$kgl.kmlIntBufferOf_pmhfmb$ = kmlIntBufferOf;
  package$kgl.kmlFloatBufferOf_8cqhcw$ = kmlFloatBufferOf;
  $$importsForInline$$['korgw-root-korgw'] = _;
  package$kgl.DataBufferAlloc_k36cnm$ = DataBufferAlloc;
  package$kgl.toTempBuffer_z39lgk$ = toTempBuffer;
  package$kgl.KmlGl = KmlGl;
  package$kgl.KmlGlCached = KmlGlCached;
  Object.defineProperty(package$kgl, 'KmlGlDummy', {
    get: KmlGlDummy_getInstance
  });
  package$kgl.KmlGlDummyBase = KmlGlDummyBase;
  package$kgl.KmlGlException = KmlGlException;
  package$kgl.getShaderiv_3majd4$ = getShaderiv;
  package$kgl.getProgramiv_3majd4$ = getProgramiv;
  package$kgl.getBooleanv_4t3mty$ = getBooleanv;
  package$kgl.getFloatv_4t3mty$ = getFloatv;
  package$kgl.getIntegerv_4t3mty$ = getIntegerv;
  package$kgl.getShaderInfoLog_4t3mty$ = getShaderInfoLog;
  package$kgl.getProgramInfoLog_4t3mty$ = getProgramInfoLog;
  package$kgl.compileShaderAndCheck_4t3mty$ = compileShaderAndCheck;
  package$kgl.linkProgramAndCheck_4t3mty$ = linkProgramAndCheck;
  package$kgl.getErrorString_4t3mty$ = getErrorString;
  package$kgl.KmlGlProxy = KmlGlProxy;
  package$kgl.KmlGlFastProxy = KmlGlFastProxy;
  package$kgl.LogKmlGlProxy = LogKmlGlProxy;
  package$kgl.CheckErrorsKmlGlProxy = CheckErrorsKmlGlProxy;
  package$kgl.KmlGlProgram = KmlGlProgram;
  package$kgl.createProgram_7lf8po$ = createProgram;
  KmlGlVertexLayout.Element = KmlGlVertexLayout$Element;
  package$kgl.KmlGlVertexLayout = KmlGlVertexLayout;
  package$kgl.layout_dhxfg8$ = layout;
  package$kgl.KmlGlBuffer = KmlGlBuffer;
  package$kgl.createBuffer_4t3mty$ = createBuffer;
  package$kgl.createArrayBuffer_v5mrd8$ = createArrayBuffer;
  package$kgl.createElementArrayBuffer_v5mrd8$ = createElementArrayBuffer;
  package$kgl.drawArrays_pvmwt$ = drawArrays;
  package$kgl.drawElements_albd6e$ = drawElements;
  package$kgl.KmlGlTex = KmlGlTex;
  package$kgl.createKmlTexture_v5mrd8$ = createKmlTexture;
  package$kgl.uniformTex_5p5ms8$ = uniformTex;
  Object.defineProperty(package$kgl, 'KmlGlUtil', {
    get: KmlGlUtil_getInstance
  });
  var package$internal = package$kgl.internal || (package$kgl.internal = {});
  Object.defineProperty(package$internal, 'KGL_VERSION_8be2vx$', {
    get: function () {
      return KGL_VERSION;
    }
  });
  package$internal.CachedInt = CachedInt;
  package$internal.CachedInt2 = CachedInt2;
  package$internal.CachedInt4 = CachedInt4;
  package$internal.CachedFloat = CachedFloat;
  package$internal.CachedFloat2 = CachedFloat2;
  var package$korag = package$soywiz.korag || (package$soywiz.korag = {});
  package$korag.AGFactory = AGFactory;
  package$korag.AGConfig = AGConfig;
  package$korag.AGContainer = AGContainer;
  package$korag.AGWindow = AGWindow;
  Object.defineProperty(AG$BlendEquation, 'ADD', {
    get: AG$BlendEquation$ADD_getInstance
  });
  Object.defineProperty(AG$BlendEquation, 'SUBTRACT', {
    get: AG$BlendEquation$SUBTRACT_getInstance
  });
  Object.defineProperty(AG$BlendEquation, 'REVERSE_SUBTRACT', {
    get: AG$BlendEquation$REVERSE_SUBTRACT_getInstance
  });
  AG.BlendEquation = AG$BlendEquation;
  Object.defineProperty(AG$BlendFactor, 'DESTINATION_ALPHA', {
    get: AG$BlendFactor$DESTINATION_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'DESTINATION_COLOR', {
    get: AG$BlendFactor$DESTINATION_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE', {
    get: AG$BlendFactor$ONE_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_DESTINATION_ALPHA', {
    get: AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_DESTINATION_COLOR', {
    get: AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_SOURCE_ALPHA', {
    get: AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_SOURCE_COLOR', {
    get: AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'SOURCE_ALPHA', {
    get: AG$BlendFactor$SOURCE_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'SOURCE_COLOR', {
    get: AG$BlendFactor$SOURCE_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ZERO', {
    get: AG$BlendFactor$ZERO_getInstance
  });
  AG.BlendFactor = AG$BlendFactor;
  AG.Scissor = AG$Scissor;
  Object.defineProperty(AG$Blending, 'Companion', {
    get: AG$Blending$Companion_getInstance
  });
  AG.Blending_init_6oerul$ = AG$AG$Blending_init;
  AG.Blending = AG$Blending;
  AG.BitmapSourceBase = AG$BitmapSourceBase;
  Object.defineProperty(AG$SyncBitmapSource, 'Companion', {
    get: AG$SyncBitmapSource$Companion_getInstance
  });
  AG.SyncBitmapSource = AG$SyncBitmapSource;
  Object.defineProperty(AG$AsyncBitmapSource, 'Companion', {
    get: AG$AsyncBitmapSource$Companion_getInstance
  });
  AG.AsyncBitmapSource = AG$AsyncBitmapSource;
  Object.defineProperty(AG$TextureKind, 'RGBA', {
    get: AG$TextureKind$RGBA_getInstance
  });
  Object.defineProperty(AG$TextureKind, 'LUMINANCE', {
    get: AG$TextureKind$LUMINANCE_getInstance
  });
  AG.TextureKind = AG$TextureKind;
  AG.Texture = AG$Texture;
  AG.TextureUnit = AG$TextureUnit;
  Object.defineProperty(AG$Buffer$Kind, 'INDEX', {
    get: AG$Buffer$Kind$INDEX_getInstance
  });
  Object.defineProperty(AG$Buffer$Kind, 'VERTEX', {
    get: AG$Buffer$Kind$VERTEX_getInstance
  });
  AG$Buffer.Kind = AG$Buffer$Kind;
  AG.Buffer = AG$Buffer;
  Object.defineProperty(AG$DrawType, 'POINTS', {
    get: AG$DrawType$POINTS_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINE_STRIP', {
    get: AG$DrawType$LINE_STRIP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINE_LOOP', {
    get: AG$DrawType$LINE_LOOP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINES', {
    get: AG$DrawType$LINES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLES', {
    get: AG$DrawType$TRIANGLES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_STRIP', {
    get: AG$DrawType$TRIANGLE_STRIP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_FAN', {
    get: AG$DrawType$TRIANGLE_FAN_getInstance
  });
  AG.DrawType = AG$DrawType;
  Object.defineProperty(AG$StencilOp, 'DECREMENT_SATURATE', {
    get: AG$StencilOp$DECREMENT_SATURATE_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'DECREMENT_WRAP', {
    get: AG$StencilOp$DECREMENT_WRAP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INCREMENT_SATURATE', {
    get: AG$StencilOp$INCREMENT_SATURATE_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INCREMENT_WRAP', {
    get: AG$StencilOp$INCREMENT_WRAP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INVERT', {
    get: AG$StencilOp$INVERT_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'KEEP', {
    get: AG$StencilOp$KEEP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'SET', {
    get: AG$StencilOp$SET_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'ZERO', {
    get: AG$StencilOp$ZERO_getInstance
  });
  AG.StencilOp = AG$StencilOp;
  Object.defineProperty(AG$TriangleFace, 'FRONT', {
    get: AG$TriangleFace$FRONT_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'BACK', {
    get: AG$TriangleFace$BACK_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'FRONT_AND_BACK', {
    get: AG$TriangleFace$FRONT_AND_BACK_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'NONE', {
    get: AG$TriangleFace$NONE_getInstance
  });
  AG.TriangleFace = AG$TriangleFace;
  Object.defineProperty(AG$CompareMode, 'ALWAYS', {
    get: AG$CompareMode$ALWAYS_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'EQUAL', {
    get: AG$CompareMode$EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'GREATER', {
    get: AG$CompareMode$GREATER_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'GREATER_EQUAL', {
    get: AG$CompareMode$GREATER_EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'LESS', {
    get: AG$CompareMode$LESS_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'LESS_EQUAL', {
    get: AG$CompareMode$LESS_EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'NEVER', {
    get: AG$CompareMode$NEVER_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'NOT_EQUAL', {
    get: AG$CompareMode$NOT_EQUAL_getInstance
  });
  AG.CompareMode = AG$CompareMode;
  AG.ColorMaskState = AG$ColorMaskState;
  Object.defineProperty(AG$FrontFace, 'BOTH', {
    get: AG$FrontFace$BOTH_getInstance
  });
  Object.defineProperty(AG$FrontFace, 'CW', {
    get: AG$FrontFace$CW_getInstance
  });
  Object.defineProperty(AG$FrontFace, 'CCW', {
    get: AG$FrontFace$CCW_getInstance
  });
  AG.FrontFace = AG$FrontFace;
  AG.RenderState = AG$RenderState;
  AG.StencilState = AG$StencilState;
  AG.BaseRenderBuffer = AG$BaseRenderBuffer;
  AG.RenderBuffer = AG$RenderBuffer;
  $$importsForInline$$['korim-root-korim'] = $module$korim_root_korim;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  AG.TextureDrawer = AG$TextureDrawer;
  Object.defineProperty(AG$UniformValues, 'Companion', {
    get: AG$UniformValues$Companion_getInstance
  });
  AG.UniformValues_init_t0ouyw$ = AG$AG$UniformValues_init;
  AG.UniformValues = AG$UniformValues;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  package$korag.AG = AG;
  package$korag.toRenderFboIntoBack_56elpi$ = toRenderFboIntoBack;
  package$korag.toRenderImageIntoFbo_56elpi$ = toRenderImageIntoFbo;
  package$korag.ProgramWithDefault_txi3di$ = ProgramWithDefault;
  Object.defineProperty(package$korag, 'DefaultShaders', {
    get: DefaultShaders_getInstance
  });
  AGOpengl.GlRenderBuffer = AGOpengl$GlRenderBuffer;
  AGOpengl.GlProgram = AGOpengl$GlProgram;
  AGOpengl.GlBuffer = AGOpengl$GlBuffer;
  AGOpengl.GlTexture = AGOpengl$GlTexture;
  package$korag.AGOpengl = AGOpengl;
  package$korag.get_versionString_v5mrd8$ = get_versionString;
  package$korag.get_versionInt_v5mrd8$ = get_versionInt;
  var package$internal_0 = package$korag.internal || (package$korag.internal = {});
  Object.defineProperty(package$internal_0, 'KORAG_VERSION_8be2vx$', {
    get: function () {
      return KORAG_VERSION;
    }
  });
  package$internal_0.setFloats_v86sfg$ = setFloats;
  var package$log = package$korag.log || (package$korag.log = {});
  package$log.DummyAG = DummyAG;
  LogAG.LogTexture = LogAG$LogTexture;
  LogAG.LogBuffer = LogAG$LogBuffer;
  LogAG.LogRenderBuffer = LogAG$LogRenderBuffer;
  package$log.LogAG = LogAG;
  var package$shader = package$korag.shader || (package$korag.shader = {});
  package$shader.DoubleDelegatedUniform = DoubleDelegatedUniform;
  package$shader.FloatDelegatedUniform = FloatDelegatedUniform;
  package$shader.IntDelegatedUniform = IntDelegatedUniform;
  package$shader.BoolDelegatedUniform = BoolDelegatedUniform;
  package$shader.UniformFloatStorage = UniformFloatStorage;
  package$shader.UniformValueStorage = UniformValueStorage;
  package$shader.storageFor_pq722g$ = storageFor;
  package$shader.storageForMatrix3D_8nu70c$ = storageForMatrix3D;
  var package$gl = package$shader.gl || (package$shader.gl = {});
  package$gl.toNewGlslString_9hqjge$ = toNewGlslString;
  package$gl.toGlSlString_chci2g$ = toGlSlString;
  package$gl.toGlSlString_jdx5zw$ = toGlSlString_0;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  package$gl.GlslGenerator = GlslGenerator;
  package$gl.toGlSl_twd9hr$ = toGlSl;
  Object.defineProperty(VarKind, 'TBYTE', {
    get: VarKind$TBYTE_getInstance
  });
  Object.defineProperty(VarKind, 'TUNSIGNED_BYTE', {
    get: VarKind$TUNSIGNED_BYTE_getInstance
  });
  Object.defineProperty(VarKind, 'TSHORT', {
    get: VarKind$TSHORT_getInstance
  });
  Object.defineProperty(VarKind, 'TUNSIGNED_SHORT', {
    get: VarKind$TUNSIGNED_SHORT_getInstance
  });
  Object.defineProperty(VarKind, 'TINT', {
    get: VarKind$TINT_getInstance
  });
  Object.defineProperty(VarKind, 'TFLOAT', {
    get: VarKind$TFLOAT_getInstance
  });
  package$shader.VarKind = VarKind;
  Object.defineProperty(VarType, 'TVOID', {
    get: VarType$TVOID_getInstance
  });
  Object.defineProperty(VarType, 'Mat2', {
    get: VarType$Mat2_getInstance
  });
  Object.defineProperty(VarType, 'Mat3', {
    get: VarType$Mat3_getInstance
  });
  Object.defineProperty(VarType, 'Mat4', {
    get: VarType$Mat4_getInstance
  });
  Object.defineProperty(VarType, 'TextureUnit', {
    get: VarType$TextureUnit_getInstance
  });
  Object.defineProperty(VarType, 'Int1', {
    get: VarType$Int1_getInstance
  });
  Object.defineProperty(VarType, 'Float1', {
    get: VarType$Float1_getInstance
  });
  Object.defineProperty(VarType, 'Float2', {
    get: VarType$Float2_getInstance
  });
  Object.defineProperty(VarType, 'Float3', {
    get: VarType$Float3_getInstance
  });
  Object.defineProperty(VarType, 'Float4', {
    get: VarType$Float4_getInstance
  });
  Object.defineProperty(VarType, 'Short1', {
    get: VarType$Short1_getInstance
  });
  Object.defineProperty(VarType, 'Short2', {
    get: VarType$Short2_getInstance
  });
  Object.defineProperty(VarType, 'Short3', {
    get: VarType$Short3_getInstance
  });
  Object.defineProperty(VarType, 'Short4', {
    get: VarType$Short4_getInstance
  });
  Object.defineProperty(VarType, 'Bool1', {
    get: VarType$Bool1_getInstance
  });
  Object.defineProperty(VarType, 'Byte4', {
    get: VarType$Byte4_getInstance
  });
  Object.defineProperty(VarType, 'SByte1', {
    get: VarType$SByte1_getInstance
  });
  Object.defineProperty(VarType, 'SByte2', {
    get: VarType$SByte2_getInstance
  });
  Object.defineProperty(VarType, 'SByte3', {
    get: VarType$SByte3_getInstance
  });
  Object.defineProperty(VarType, 'SByte4', {
    get: VarType$SByte4_getInstance
  });
  Object.defineProperty(VarType, 'UByte1', {
    get: VarType$UByte1_getInstance
  });
  Object.defineProperty(VarType, 'UByte2', {
    get: VarType$UByte2_getInstance
  });
  Object.defineProperty(VarType, 'UByte3', {
    get: VarType$UByte3_getInstance
  });
  Object.defineProperty(VarType, 'UByte4', {
    get: VarType$UByte4_getInstance
  });
  Object.defineProperty(VarType, 'SShort1', {
    get: VarType$SShort1_getInstance
  });
  Object.defineProperty(VarType, 'SShort2', {
    get: VarType$SShort2_getInstance
  });
  Object.defineProperty(VarType, 'SShort3', {
    get: VarType$SShort3_getInstance
  });
  Object.defineProperty(VarType, 'SShort4', {
    get: VarType$SShort4_getInstance
  });
  Object.defineProperty(VarType, 'UShort1', {
    get: VarType$UShort1_getInstance
  });
  Object.defineProperty(VarType, 'UShort2', {
    get: VarType$UShort2_getInstance
  });
  Object.defineProperty(VarType, 'UShort3', {
    get: VarType$UShort3_getInstance
  });
  Object.defineProperty(VarType, 'UShort4', {
    get: VarType$UShort4_getInstance
  });
  Object.defineProperty(VarType, 'SInt1', {
    get: VarType$SInt1_getInstance
  });
  Object.defineProperty(VarType, 'SInt2', {
    get: VarType$SInt2_getInstance
  });
  Object.defineProperty(VarType, 'SInt3', {
    get: VarType$SInt3_getInstance
  });
  Object.defineProperty(VarType, 'SInt4', {
    get: VarType$SInt4_getInstance
  });
  Object.defineProperty(VarType, 'Companion', {
    get: VarType$Companion_getInstance
  });
  package$shader.VarType = VarType;
  Object.defineProperty(ShaderType, 'VERTEX', {
    get: ShaderType$VERTEX_getInstance
  });
  Object.defineProperty(ShaderType, 'FRAGMENT', {
    get: ShaderType$FRAGMENT_getInstance
  });
  package$shader.ShaderType = ShaderType;
  package$shader.Operand = Operand;
  package$shader.Variable_init_hkcue2$ = Variable_init;
  package$shader.Variable = Variable;
  package$shader.Attribute_init_do1xv$ = Attribute_init;
  package$shader.Attribute = Attribute;
  package$shader.Varying_init_hkcue2$ = Varying_init;
  package$shader.Varying = Varying;
  package$shader.Uniform_init_hkcue2$ = Uniform_init;
  package$shader.Uniform = Uniform;
  package$shader.Temp_init_gig876$ = Temp_init;
  package$shader.Temp = Temp;
  Object.defineProperty(package$shader, 'Output', {
    get: Output_getInstance
  });
  Program.Binop = Program$Binop;
  Program.IntLiteral = Program$IntLiteral;
  Program.FloatLiteral = Program$FloatLiteral;
  Program.BoolLiteral = Program$BoolLiteral;
  Program.Vector = Program$Vector;
  Program.Swizzle = Program$Swizzle;
  Program.ArrayAccess = Program$ArrayAccess;
  Program.Func_init_ohzs2t$ = Program$Program$Func_init;
  Program.Func = Program$Func;
  Program$Stm.Stms = Program$Stm$Stms;
  Program$Stm.Set = Program$Stm$Set;
  Program$Stm.Discard = Program$Stm$Discard;
  Program$Stm.If = Program$Stm$If;
  Program.Stm = Program$Stm;
  Program.Builder = Program$Builder;
  Program.Visitor = Program$Visitor;
  package$shader.Program = Program;
  package$shader.Shader = Shader;
  package$shader.VertexShader = VertexShader;
  package$shader.FragmentShader = FragmentShader;
  package$shader.appending_8cn1qe$ = appending;
  package$shader.VertexShader_8zzl3$ = VertexShader_0;
  package$shader.FragmentShader_8zzl3$ = FragmentShader_0;
  package$shader.VertexLayout_init_agxe9a$ = VertexLayout_init;
  package$shader.VertexLayout_init_f1u95s$ = VertexLayout_init_0;
  package$shader.VertexLayout_init_hub3qn$ = VertexLayout_init_1;
  package$shader.VertexLayout = VertexLayout;
  var package$software = package$korag.software || (package$korag.software = {});
  package$software.AGFactorySoftware = AGFactorySoftware;
  package$software.AGSoftware = AGSoftware;
  EventDispatcher.Mixin = EventDispatcher$Mixin;
  Object.defineProperty(EventDispatcher, 'Companion', {
    get: EventDispatcher$Companion_getInstance
  });
  var package$korev = package$soywiz.korev || (package$soywiz.korev = {});
  package$korev.EventDispatcher = EventDispatcher;
  Object.defineProperty(package$korev, 'DummyEventDispatcher', {
    get: DummyEventDispatcher_getInstance
  });
  package$korev.invoke_t8hnd5$ = invoke;
  package$korev.Event = Event;
  package$korev.preventDefault_uh9o5i$ = preventDefault;
  package$korev.preventDefault_s8jyv4$ = preventDefault_0;
  package$korev.PreventDefaultException = PreventDefaultException;
  Object.defineProperty(MouseEvent$Type, 'MOVE', {
    get: MouseEvent$Type$MOVE_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'DRAG', {
    get: MouseEvent$Type$DRAG_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'UP', {
    get: MouseEvent$Type$UP_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'DOWN', {
    get: MouseEvent$Type$DOWN_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'CLICK', {
    get: MouseEvent$Type$CLICK_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'ENTER', {
    get: MouseEvent$Type$ENTER_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'EXIT', {
    get: MouseEvent$Type$EXIT_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'SCROLL', {
    get: MouseEvent$Type$SCROLL_getInstance
  });
  MouseEvent.Type = MouseEvent$Type;
  package$korev.MouseEvent = MouseEvent;
  Object.defineProperty(Touch, 'Companion', {
    get: Touch$Companion_getInstance
  });
  package$korev.Touch = Touch;
  Object.defineProperty(TouchEvent, 'Companion', {
    get: TouchEvent$Companion_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'START', {
    get: TouchEvent$Type$START_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'END', {
    get: TouchEvent$Type$END_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'MOVE', {
    get: TouchEvent$Type$MOVE_getInstance
  });
  TouchEvent.Type = TouchEvent$Type;
  package$korev.TouchEvent = TouchEvent;
  Object.defineProperty(KeyEvent$Type, 'UP', {
    get: KeyEvent$Type$UP_getInstance
  });
  Object.defineProperty(KeyEvent$Type, 'DOWN', {
    get: KeyEvent$Type$DOWN_getInstance
  });
  Object.defineProperty(KeyEvent$Type, 'TYPE', {
    get: KeyEvent$Type$TYPE_getInstance
  });
  KeyEvent.Type = KeyEvent$Type;
  package$korev.KeyEvent = KeyEvent;
  Object.defineProperty(GamePadConnectionEvent$Type, 'CONNECTED', {
    get: GamePadConnectionEvent$Type$CONNECTED_getInstance
  });
  Object.defineProperty(GamePadConnectionEvent$Type, 'DISCONNECTED', {
    get: GamePadConnectionEvent$Type$DISCONNECTED_getInstance
  });
  GamePadConnectionEvent.Type = GamePadConnectionEvent$Type;
  package$korev.GamePadConnectionEvent = GamePadConnectionEvent;
  package$korev.GamePadUpdateEvent = GamePadUpdateEvent;
  Object.defineProperty(GamePadButtonEvent$Type, 'UP', {
    get: GamePadButtonEvent$Type$UP_getInstance
  });
  Object.defineProperty(GamePadButtonEvent$Type, 'DOWN', {
    get: GamePadButtonEvent$Type$DOWN_getInstance
  });
  GamePadButtonEvent.Type = GamePadButtonEvent$Type;
  package$korev.GamePadButtonEvent = GamePadButtonEvent;
  package$korev.GamePadStickEvent = GamePadStickEvent;
  package$korev.ChangeEvent = ChangeEvent;
  package$korev.ReshapeEvent = ReshapeEvent;
  package$korev.FullScreenEvent = FullScreenEvent;
  package$korev.RenderEvent = RenderEvent;
  package$korev.InitEvent = InitEvent;
  package$korev.ResumeEvent = ResumeEvent;
  package$korev.PauseEvent = PauseEvent;
  package$korev.StopEvent = StopEvent;
  package$korev.DestroyEvent = DestroyEvent;
  package$korev.DisposeEvent = DisposeEvent;
  Object.defineProperty(DropFileEvent$Type, 'ENTER', {
    get: DropFileEvent$Type$ENTER_getInstance
  });
  Object.defineProperty(DropFileEvent$Type, 'EXIT', {
    get: DropFileEvent$Type$EXIT_getInstance
  });
  Object.defineProperty(DropFileEvent$Type, 'DROP', {
    get: DropFileEvent$Type$DROP_getInstance
  });
  DropFileEvent.Type = DropFileEvent$Type;
  package$korev.DropFileEvent = DropFileEvent;
  package$korev.MouseEvents = MouseEvents;
  package$korev.KeysEvents = KeysEvents;
  package$korev.mouse_3owenf$ = mouse;
  package$korev.keys_1ue75a$ = keys;
  Object.defineProperty(MouseButton, 'LEFT', {
    get: MouseButton$LEFT_getInstance
  });
  Object.defineProperty(MouseButton, 'RIGHT', {
    get: MouseButton$RIGHT_getInstance
  });
  Object.defineProperty(MouseButton, 'MIDDLE', {
    get: MouseButton$MIDDLE_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON3', {
    get: MouseButton$BUTTON3_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON4', {
    get: MouseButton$BUTTON4_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON5', {
    get: MouseButton$BUTTON5_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON_UNKNOWN', {
    get: MouseButton$BUTTON_UNKNOWN_getInstance
  });
  Object.defineProperty(MouseButton, 'Companion', {
    get: MouseButton$Companion_getInstance
  });
  package$korev.MouseButton = MouseButton;
  Object.defineProperty(Key, 'SPACE', {
    get: Key$SPACE_getInstance
  });
  Object.defineProperty(Key, 'APOSTROPHE', {
    get: Key$APOSTROPHE_getInstance
  });
  Object.defineProperty(Key, 'COMMA', {
    get: Key$COMMA_getInstance
  });
  Object.defineProperty(Key, 'MINUS', {
    get: Key$MINUS_getInstance
  });
  Object.defineProperty(Key, 'PERIOD', {
    get: Key$PERIOD_getInstance
  });
  Object.defineProperty(Key, 'SLASH', {
    get: Key$SLASH_getInstance
  });
  Object.defineProperty(Key, 'N0', {
    get: Key$N0_getInstance
  });
  Object.defineProperty(Key, 'N1', {
    get: Key$N1_getInstance
  });
  Object.defineProperty(Key, 'N2', {
    get: Key$N2_getInstance
  });
  Object.defineProperty(Key, 'N3', {
    get: Key$N3_getInstance
  });
  Object.defineProperty(Key, 'N4', {
    get: Key$N4_getInstance
  });
  Object.defineProperty(Key, 'N5', {
    get: Key$N5_getInstance
  });
  Object.defineProperty(Key, 'N6', {
    get: Key$N6_getInstance
  });
  Object.defineProperty(Key, 'N7', {
    get: Key$N7_getInstance
  });
  Object.defineProperty(Key, 'N8', {
    get: Key$N8_getInstance
  });
  Object.defineProperty(Key, 'N9', {
    get: Key$N9_getInstance
  });
  Object.defineProperty(Key, 'SEMICOLON', {
    get: Key$SEMICOLON_getInstance
  });
  Object.defineProperty(Key, 'EQUAL', {
    get: Key$EQUAL_getInstance
  });
  Object.defineProperty(Key, 'A', {
    get: Key$A_getInstance
  });
  Object.defineProperty(Key, 'B', {
    get: Key$B_getInstance
  });
  Object.defineProperty(Key, 'C', {
    get: Key$C_getInstance
  });
  Object.defineProperty(Key, 'D', {
    get: Key$D_getInstance
  });
  Object.defineProperty(Key, 'E', {
    get: Key$E_getInstance
  });
  Object.defineProperty(Key, 'F', {
    get: Key$F_getInstance
  });
  Object.defineProperty(Key, 'G', {
    get: Key$G_getInstance
  });
  Object.defineProperty(Key, 'H', {
    get: Key$H_getInstance
  });
  Object.defineProperty(Key, 'I', {
    get: Key$I_getInstance
  });
  Object.defineProperty(Key, 'J', {
    get: Key$J_getInstance
  });
  Object.defineProperty(Key, 'K', {
    get: Key$K_getInstance
  });
  Object.defineProperty(Key, 'L', {
    get: Key$L_getInstance
  });
  Object.defineProperty(Key, 'M', {
    get: Key$M_getInstance
  });
  Object.defineProperty(Key, 'N', {
    get: Key$N_getInstance
  });
  Object.defineProperty(Key, 'O', {
    get: Key$O_getInstance
  });
  Object.defineProperty(Key, 'P', {
    get: Key$P_getInstance
  });
  Object.defineProperty(Key, 'Q', {
    get: Key$Q_getInstance
  });
  Object.defineProperty(Key, 'R', {
    get: Key$R_getInstance
  });
  Object.defineProperty(Key, 'S', {
    get: Key$S_getInstance
  });
  Object.defineProperty(Key, 'T', {
    get: Key$T_getInstance
  });
  Object.defineProperty(Key, 'U', {
    get: Key$U_getInstance
  });
  Object.defineProperty(Key, 'V', {
    get: Key$V_getInstance
  });
  Object.defineProperty(Key, 'W', {
    get: Key$W_getInstance
  });
  Object.defineProperty(Key, 'X', {
    get: Key$X_getInstance
  });
  Object.defineProperty(Key, 'Y', {
    get: Key$Y_getInstance
  });
  Object.defineProperty(Key, 'Z', {
    get: Key$Z_getInstance
  });
  Object.defineProperty(Key, 'LEFT_BRACKET', {
    get: Key$LEFT_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'BACKSLASH', {
    get: Key$BACKSLASH_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_BRACKET', {
    get: Key$RIGHT_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'GRAVE_ACCENT', {
    get: Key$GRAVE_ACCENT_getInstance
  });
  Object.defineProperty(Key, 'WORLD_1', {
    get: Key$WORLD_1_getInstance
  });
  Object.defineProperty(Key, 'WORLD_2', {
    get: Key$WORLD_2_getInstance
  });
  Object.defineProperty(Key, 'ESCAPE', {
    get: Key$ESCAPE_getInstance
  });
  Object.defineProperty(Key, 'META', {
    get: Key$META_getInstance
  });
  Object.defineProperty(Key, 'ENTER', {
    get: Key$ENTER_getInstance
  });
  Object.defineProperty(Key, 'TAB', {
    get: Key$TAB_getInstance
  });
  Object.defineProperty(Key, 'BACKSPACE', {
    get: Key$BACKSPACE_getInstance
  });
  Object.defineProperty(Key, 'INSERT', {
    get: Key$INSERT_getInstance
  });
  Object.defineProperty(Key, 'DELETE', {
    get: Key$DELETE_getInstance
  });
  Object.defineProperty(Key, 'RIGHT', {
    get: Key$RIGHT_getInstance
  });
  Object.defineProperty(Key, 'LEFT', {
    get: Key$LEFT_getInstance
  });
  Object.defineProperty(Key, 'DOWN', {
    get: Key$DOWN_getInstance
  });
  Object.defineProperty(Key, 'UP', {
    get: Key$UP_getInstance
  });
  Object.defineProperty(Key, 'PAGE_UP', {
    get: Key$PAGE_UP_getInstance
  });
  Object.defineProperty(Key, 'PAGE_DOWN', {
    get: Key$PAGE_DOWN_getInstance
  });
  Object.defineProperty(Key, 'FUNCTION', {
    get: Key$FUNCTION_getInstance
  });
  Object.defineProperty(Key, 'HELP', {
    get: Key$HELP_getInstance
  });
  Object.defineProperty(Key, 'MUTE', {
    get: Key$MUTE_getInstance
  });
  Object.defineProperty(Key, 'VOLUME_DOWN', {
    get: Key$VOLUME_DOWN_getInstance
  });
  Object.defineProperty(Key, 'VOLUME_UP', {
    get: Key$VOLUME_UP_getInstance
  });
  Object.defineProperty(Key, 'HOME', {
    get: Key$HOME_getInstance
  });
  Object.defineProperty(Key, 'END', {
    get: Key$END_getInstance
  });
  Object.defineProperty(Key, 'CAPS_LOCK', {
    get: Key$CAPS_LOCK_getInstance
  });
  Object.defineProperty(Key, 'SCROLL_LOCK', {
    get: Key$SCROLL_LOCK_getInstance
  });
  Object.defineProperty(Key, 'NUM_LOCK', {
    get: Key$NUM_LOCK_getInstance
  });
  Object.defineProperty(Key, 'PRINT_SCREEN', {
    get: Key$PRINT_SCREEN_getInstance
  });
  Object.defineProperty(Key, 'PAUSE', {
    get: Key$PAUSE_getInstance
  });
  Object.defineProperty(Key, 'F1', {
    get: Key$F1_getInstance
  });
  Object.defineProperty(Key, 'F2', {
    get: Key$F2_getInstance
  });
  Object.defineProperty(Key, 'F3', {
    get: Key$F3_getInstance
  });
  Object.defineProperty(Key, 'F4', {
    get: Key$F4_getInstance
  });
  Object.defineProperty(Key, 'F5', {
    get: Key$F5_getInstance
  });
  Object.defineProperty(Key, 'F6', {
    get: Key$F6_getInstance
  });
  Object.defineProperty(Key, 'F7', {
    get: Key$F7_getInstance
  });
  Object.defineProperty(Key, 'F8', {
    get: Key$F8_getInstance
  });
  Object.defineProperty(Key, 'F9', {
    get: Key$F9_getInstance
  });
  Object.defineProperty(Key, 'F10', {
    get: Key$F10_getInstance
  });
  Object.defineProperty(Key, 'F11', {
    get: Key$F11_getInstance
  });
  Object.defineProperty(Key, 'F12', {
    get: Key$F12_getInstance
  });
  Object.defineProperty(Key, 'F13', {
    get: Key$F13_getInstance
  });
  Object.defineProperty(Key, 'F14', {
    get: Key$F14_getInstance
  });
  Object.defineProperty(Key, 'F15', {
    get: Key$F15_getInstance
  });
  Object.defineProperty(Key, 'F16', {
    get: Key$F16_getInstance
  });
  Object.defineProperty(Key, 'F17', {
    get: Key$F17_getInstance
  });
  Object.defineProperty(Key, 'F18', {
    get: Key$F18_getInstance
  });
  Object.defineProperty(Key, 'F19', {
    get: Key$F19_getInstance
  });
  Object.defineProperty(Key, 'F20', {
    get: Key$F20_getInstance
  });
  Object.defineProperty(Key, 'F21', {
    get: Key$F21_getInstance
  });
  Object.defineProperty(Key, 'F22', {
    get: Key$F22_getInstance
  });
  Object.defineProperty(Key, 'F23', {
    get: Key$F23_getInstance
  });
  Object.defineProperty(Key, 'F24', {
    get: Key$F24_getInstance
  });
  Object.defineProperty(Key, 'F25', {
    get: Key$F25_getInstance
  });
  Object.defineProperty(Key, 'KP_0', {
    get: Key$KP_0_getInstance
  });
  Object.defineProperty(Key, 'KP_1', {
    get: Key$KP_1_getInstance
  });
  Object.defineProperty(Key, 'KP_2', {
    get: Key$KP_2_getInstance
  });
  Object.defineProperty(Key, 'KP_3', {
    get: Key$KP_3_getInstance
  });
  Object.defineProperty(Key, 'KP_4', {
    get: Key$KP_4_getInstance
  });
  Object.defineProperty(Key, 'KP_5', {
    get: Key$KP_5_getInstance
  });
  Object.defineProperty(Key, 'KP_6', {
    get: Key$KP_6_getInstance
  });
  Object.defineProperty(Key, 'KP_7', {
    get: Key$KP_7_getInstance
  });
  Object.defineProperty(Key, 'KP_8', {
    get: Key$KP_8_getInstance
  });
  Object.defineProperty(Key, 'KP_9', {
    get: Key$KP_9_getInstance
  });
  Object.defineProperty(Key, 'KP_DECIMAL', {
    get: Key$KP_DECIMAL_getInstance
  });
  Object.defineProperty(Key, 'KP_DIVIDE', {
    get: Key$KP_DIVIDE_getInstance
  });
  Object.defineProperty(Key, 'KP_MULTIPLY', {
    get: Key$KP_MULTIPLY_getInstance
  });
  Object.defineProperty(Key, 'KP_SUBTRACT', {
    get: Key$KP_SUBTRACT_getInstance
  });
  Object.defineProperty(Key, 'KP_ADD', {
    get: Key$KP_ADD_getInstance
  });
  Object.defineProperty(Key, 'KP_ENTER', {
    get: Key$KP_ENTER_getInstance
  });
  Object.defineProperty(Key, 'KP_EQUAL', {
    get: Key$KP_EQUAL_getInstance
  });
  Object.defineProperty(Key, 'KP_SEPARATOR', {
    get: Key$KP_SEPARATOR_getInstance
  });
  Object.defineProperty(Key, 'LEFT_SHIFT', {
    get: Key$LEFT_SHIFT_getInstance
  });
  Object.defineProperty(Key, 'LEFT_CONTROL', {
    get: Key$LEFT_CONTROL_getInstance
  });
  Object.defineProperty(Key, 'LEFT_ALT', {
    get: Key$LEFT_ALT_getInstance
  });
  Object.defineProperty(Key, 'LEFT_SUPER', {
    get: Key$LEFT_SUPER_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_SHIFT', {
    get: Key$RIGHT_SHIFT_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_CONTROL', {
    get: Key$RIGHT_CONTROL_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_ALT', {
    get: Key$RIGHT_ALT_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_SUPER', {
    get: Key$RIGHT_SUPER_getInstance
  });
  Object.defineProperty(Key, 'MENU', {
    get: Key$MENU_getInstance
  });
  Object.defineProperty(Key, 'BACKQUOTE', {
    get: Key$BACKQUOTE_getInstance
  });
  Object.defineProperty(Key, 'QUOTE', {
    get: Key$QUOTE_getInstance
  });
  Object.defineProperty(Key, 'KP_UP', {
    get: Key$KP_UP_getInstance
  });
  Object.defineProperty(Key, 'KP_DOWN', {
    get: Key$KP_DOWN_getInstance
  });
  Object.defineProperty(Key, 'KP_LEFT', {
    get: Key$KP_LEFT_getInstance
  });
  Object.defineProperty(Key, 'KP_RIGHT', {
    get: Key$KP_RIGHT_getInstance
  });
  Object.defineProperty(Key, 'UNDERLINE', {
    get: Key$UNDERLINE_getInstance
  });
  Object.defineProperty(Key, 'SELECT_KEY', {
    get: Key$SELECT_KEY_getInstance
  });
  Object.defineProperty(Key, 'CANCEL', {
    get: Key$CANCEL_getInstance
  });
  Object.defineProperty(Key, 'CLEAR', {
    get: Key$CLEAR_getInstance
  });
  Object.defineProperty(Key, 'OPEN_BRACKET', {
    get: Key$OPEN_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'CLOSE_BRACKET', {
    get: Key$CLOSE_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'UNDEFINED', {
    get: Key$UNDEFINED_getInstance
  });
  Object.defineProperty(Key, 'UNKNOWN', {
    get: Key$UNKNOWN_getInstance
  });
  Object.defineProperty(Key, 'Companion', {
    get: Key$Companion_getInstance
  });
  package$korev.Key = Key;
  Object.defineProperty(GameStick, 'LEFT', {
    get: GameStick$LEFT_getInstance
  });
  Object.defineProperty(GameStick, 'RIGHT', {
    get: GameStick$RIGHT_getInstance
  });
  Object.defineProperty(GameStick, 'Companion', {
    get: GameStick$Companion_getInstance
  });
  package$korev.GameStick = GameStick;
  Object.defineProperty(GameButton, 'LEFT', {
    get: GameButton$LEFT_getInstance
  });
  Object.defineProperty(GameButton, 'RIGHT', {
    get: GameButton$RIGHT_getInstance
  });
  Object.defineProperty(GameButton, 'UP', {
    get: GameButton$UP_getInstance
  });
  Object.defineProperty(GameButton, 'DOWN', {
    get: GameButton$DOWN_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON0', {
    get: GameButton$BUTTON0_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON1', {
    get: GameButton$BUTTON1_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON2', {
    get: GameButton$BUTTON2_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON3', {
    get: GameButton$BUTTON3_getInstance
  });
  Object.defineProperty(GameButton, 'SELECT', {
    get: GameButton$SELECT_getInstance
  });
  Object.defineProperty(GameButton, 'START', {
    get: GameButton$START_getInstance
  });
  Object.defineProperty(GameButton, 'SYSTEM', {
    get: GameButton$SYSTEM_getInstance
  });
  Object.defineProperty(GameButton, 'L1', {
    get: GameButton$L1_getInstance
  });
  Object.defineProperty(GameButton, 'R1', {
    get: GameButton$R1_getInstance
  });
  Object.defineProperty(GameButton, 'L2', {
    get: GameButton$L2_getInstance
  });
  Object.defineProperty(GameButton, 'R2', {
    get: GameButton$R2_getInstance
  });
  Object.defineProperty(GameButton, 'L3', {
    get: GameButton$L3_getInstance
  });
  Object.defineProperty(GameButton, 'R3', {
    get: GameButton$R3_getInstance
  });
  Object.defineProperty(GameButton, 'LX', {
    get: GameButton$LX_getInstance
  });
  Object.defineProperty(GameButton, 'LY', {
    get: GameButton$LY_getInstance
  });
  Object.defineProperty(GameButton, 'RX', {
    get: GameButton$RX_getInstance
  });
  Object.defineProperty(GameButton, 'RY', {
    get: GameButton$RY_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON4', {
    get: GameButton$BUTTON4_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON5', {
    get: GameButton$BUTTON5_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON6', {
    get: GameButton$BUTTON6_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON7', {
    get: GameButton$BUTTON7_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON8', {
    get: GameButton$BUTTON8_getInstance
  });
  Object.defineProperty(GameButton, 'Companion', {
    get: GameButton$Companion_getInstance
  });
  package$korev.GameButton = GameButton;
  package$korev.GamepadInfo = GamepadInfo;
  package$korev.GamepadMapping = GamepadMapping;
  Object.defineProperty(package$korev, 'StandardGamepadMapping', {
    get: StandardGamepadMapping_getInstance
  });
  var package$internal_1 = package$korev.internal || (package$korev.internal = {});
  package$internal_1.fastForEach_kf7q02$ = fastForEach;
  var package$korgw = package$soywiz.korgw || (package$soywiz.korgw = {});
  package$korgw.DialogInterface = DialogInterface;
  GameWindowCoroutineDispatcher.TimedTask = GameWindowCoroutineDispatcher$TimedTask;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  package$korgw.GameWindowCoroutineDispatcher = GameWindowCoroutineDispatcher;
  Object.defineProperty(GameWindow, 'CoroutineKey', {
    get: GameWindow$CoroutineKey_getInstance
  });
  Object.defineProperty(GameWindow$Quality, 'PERFORMANCE', {
    get: GameWindow$Quality$PERFORMANCE_getInstance
  });
  Object.defineProperty(GameWindow$Quality, 'QUALITY', {
    get: GameWindow$Quality$QUALITY_getInstance
  });
  Object.defineProperty(GameWindow$Quality, 'AUTOMATIC', {
    get: GameWindow$Quality$AUTOMATIC_getInstance
  });
  GameWindow.Quality = GameWindow$Quality;
  package$korgw.GameWindow = GameWindow;
  package$korgw.mainLoop_1bars0$ = mainLoop;
  package$korgw.toggleFullScreen_o1m7b$ = toggleFullScreen;
  package$korgw.configure_3adi1j$ = configure;
  Object.defineProperty(Korgw.prototype, 'Sample', {
    get: Korgw$Sample_getInstance
  });
  Object.defineProperty(package$korgw, 'Korgw', {
    get: Korgw_getInstance
  });
  var package$internal_2 = package$korgw.internal || (package$korgw.internal = {});
  Object.defineProperty(package$internal_2, 'KORGW_VERSION_8be2vx$', {
    get: function () {
      return KORGW_VERSION;
    }
  });
  Object.defineProperty(package$korgw, 'korgwJvmEngine', {
    get: function () {
      return korgwJvmEngine;
    },
    set: function (value) {
      korgwJvmEngine = value;
    }
  });
  package$kgl.KmlGlJsCanvas = KmlGlJsCanvas;
  package$kgl.get_arrayBuffer_4hblvt$ = get_arrayBuffer;
  package$kgl.get_arrayUByte_4hblvt$ = get_arrayUByte;
  Object.defineProperty(package$korag, 'AGOpenglFactory', {
    get: AGOpenglFactory_getInstance
  });
  Object.defineProperty(package$korag, 'AGFactoryWebgl', {
    get: AGFactoryWebgl_getInstance
  });
  package$korag.jsEmptyObject = jsEmptyObject;
  package$korag.jsObject_pyyo18$ = jsObject;
  Object.defineProperty(AGWebgl, 'Companion', {
    get: AGWebgl$Companion_getInstance
  });
  package$korag.AGWebgl = AGWebgl;
  package$korgw.BrowserGameWindow = BrowserGameWindow;
  package$korgw.NodeJsGameWindow = NodeJsGameWindow;
  package$korgw.CreateDefaultGameWindow = CreateDefaultGameWindow;
  Object.defineProperty(package$korgw, 'Nimbus_111_1420_Safari_GamepadMapping', {
    get: Nimbus_111_1420_Safari_GamepadMapping_getInstance
  });
  Object.defineProperty(package$korgw, 'knownControllers', {
    get: function () {
      return knownControllers;
    }
  });
  DummyEventDispatcher.prototype.copyFrom_qquois$ = EventDispatcher.prototype.copyFrom_qquois$;
  GameWindowCoroutineDispatcher.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  GameWindow.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  GameWindow.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  GameWindow.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  GameWindow.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  GameWindow.prototype.prompt_puj7f4$ = DialogInterface.prototype.prompt_puj7f4$;
  GameWindow.prototype.openFileDialog_r0su5d$ = DialogInterface.prototype.openFileDialog_r0su5d$;
  KGL_VERSION = '1.7.0-pre-50';
  versionString = new Extra$PropertyThis(void 0, versionString$lambda);
  versionInt = new Extra$PropertyThis(void 0, versionInt$lambda);
  KORAG_VERSION = '1.7.0-pre-50';
  KORGW_VERSION = '1.9.12';
  korgwJvmEngine = null;
  var $receiver = listOf([StandardGamepadMapping_getInstance(), Nimbus_111_1420_Safari_GamepadMapping_getInstance()]);
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init_0(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.id, element);
  }
  knownControllers = destination;
  Kotlin.defineModule('korgw-root-korgw', _);
  return _;
}));

//# sourceMappingURL=korgw-root-korgw.js.map
