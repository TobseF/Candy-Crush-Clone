(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', 'kotlin'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('kotlin'));
    else {
        if (typeof kotlin === 'undefined') {
            throw new Error("Error loading module 'klogger-root-klogger'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'klogger-root-klogger'.");
        }
        root['klogger-root-klogger'] = factory(typeof this['klogger-root-klogger'] === 'undefined' ? {} : this['klogger-root-klogger'], kotlin);
    }
}(this, function (_, Kotlin) {
    'use strict';
    var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
    var Kind_OBJECT = Kotlin.Kind.OBJECT;
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var Enum = Kotlin.kotlin.Enum;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var throwISE = Kotlin.throwISE;
    var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
    var equals = Kotlin.equals;
    var defineInlineFunction = Kotlin.defineInlineFunction;
    var wrapFunction = Kotlin.wrapFunction;
    Logger$Level.prototype = Object.create(Enum.prototype);
    Logger$Level.prototype.constructor = Logger$Level;

    function Console() {
        Console_instance = this;
    }

    Console.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Console',
        interfaces: []
    };
    var Console_instance = null;

    function Console_getInstance() {
        if (Console_instance === null) {
            new Console();
        }
        return Console_instance;
    }

    var Logger_loggers;
    var Logger_defaultLevel;
    var Logger_defaultOutput;
    var Logger_levels;
    var Logger_outputs;

    function Logger(name, dummy) {
        Logger$Companion_getInstance();
        this.name = name;
        this.dummy = dummy;
        var $receiver = Logger_loggers;
        var key = this.name;
        $receiver.put_xwzc9p$(key, this);
        var $receiver_0 = Logger_levels;
        var key_0 = this.name;
        $receiver_0.put_xwzc9p$(key_0, null);
        var $receiver_1 = Logger_outputs;
        var key_1 = this.name;
        $receiver_1.put_xwzc9p$(key_1, null);
    }

    Object.defineProperty(Logger.prototype, 'level', {
        get: function () {
            var tmp$, tmp$_0;
            return (tmp$_0 = (tmp$ = Logger_levels.get_11rb$(this.name)) != null ? tmp$ : Logger$Companion_getInstance().defaultLevel) != null ? tmp$_0 : Logger$Level$WARN_getInstance();
        },
        set: function (value) {
            var $receiver = Logger_levels;
            var key = this.name;
            $receiver.put_xwzc9p$(key, value);
        }
    });
    Object.defineProperty(Logger.prototype, 'output', {
        get: function () {
            var tmp$;
            return (tmp$ = Logger_outputs.get_11rb$(this.name)) != null ? tmp$ : Logger$Companion_getInstance().defaultOutput;
        },
        set: function (value) {
            var $receiver = Logger_outputs;
            var key = this.name;
            $receiver.put_xwzc9p$(key, value);
        }
    });
    Object.defineProperty(Logger.prototype, 'isLocalLevelSet', {
        get: function () {
            return Logger_levels.get_11rb$(this.name) != null;
        }
    });
    Object.defineProperty(Logger.prototype, 'isLocalOutputSet', {
        get: function () {
            return Logger_outputs.get_11rb$(this.name) != null;
        }
    });

    function Logger$Companion() {
        Logger$Companion_instance = this;
    }

    Object.defineProperty(Logger$Companion.prototype, 'defaultLevel', {
        get: function () {
            return Logger_defaultLevel;
        },
        set: function (value) {
            Logger_defaultLevel = value;
        }
    });
    Object.defineProperty(Logger$Companion.prototype, 'defaultOutput', {
        get: function () {
            return Logger_defaultOutput;
        },
        set: function (value) {
            Logger_defaultOutput = value;
        }
    });
    Logger$Companion.prototype.invoke_61zpoe$ = function (name) {
        var tmp$;
        return (tmp$ = Logger_loggers.get_11rb$(name)) != null ? tmp$ : new Logger(name, true);
    };
    Logger$Companion.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'Companion',
        interfaces: []
    };
    var Logger$Companion_instance = null;

    function Logger$Companion_getInstance() {
        if (Logger$Companion_instance === null) {
            new Logger$Companion();
        }
        return Logger$Companion_instance;
    }

    function Logger$Level(name, ordinal, index) {
        Enum.call(this);
        this.index = index;
        this.name$ = name;
        this.ordinal$ = ordinal;
    }

    function Logger$Level_initFields() {
        Logger$Level_initFields = function () {
        };
        Logger$Level$NONE_instance = new Logger$Level('NONE', 0, 0);
        Logger$Level$FATAL_instance = new Logger$Level('FATAL', 1, 1);
        Logger$Level$ERROR_instance = new Logger$Level('ERROR', 2, 2);
        Logger$Level$WARN_instance = new Logger$Level('WARN', 3, 3);
        Logger$Level$INFO_instance = new Logger$Level('INFO', 4, 4);
        Logger$Level$DEBUG_instance = new Logger$Level('DEBUG', 5, 5);
        Logger$Level$TRACE_instance = new Logger$Level('TRACE', 6, 6);
    }

    var Logger$Level$NONE_instance;

    function Logger$Level$NONE_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$NONE_instance;
    }

    var Logger$Level$FATAL_instance;

    function Logger$Level$FATAL_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$FATAL_instance;
    }

    var Logger$Level$ERROR_instance;

    function Logger$Level$ERROR_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$ERROR_instance;
    }

    var Logger$Level$WARN_instance;

    function Logger$Level$WARN_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$WARN_instance;
    }

    var Logger$Level$INFO_instance;

    function Logger$Level$INFO_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$INFO_instance;
    }

    var Logger$Level$DEBUG_instance;

    function Logger$Level$DEBUG_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$DEBUG_instance;
    }

    var Logger$Level$TRACE_instance;

    function Logger$Level$TRACE_getInstance() {
        Logger$Level_initFields();
        return Logger$Level$TRACE_instance;
    }

    Logger$Level.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Level',
        interfaces: [Enum]
    };

    function Logger$Level$values() {
        return [Logger$Level$NONE_getInstance(), Logger$Level$FATAL_getInstance(), Logger$Level$ERROR_getInstance(), Logger$Level$WARN_getInstance(), Logger$Level$INFO_getInstance(), Logger$Level$DEBUG_getInstance(), Logger$Level$TRACE_getInstance()];
    }

    Logger$Level.values = Logger$Level$values;

    function Logger$Level$valueOf(name) {
        switch (name) {
            case 'NONE':
                return Logger$Level$NONE_getInstance();
            case 'FATAL':
                return Logger$Level$FATAL_getInstance();
            case 'ERROR':
                return Logger$Level$ERROR_getInstance();
            case 'WARN':
                return Logger$Level$WARN_getInstance();
            case 'INFO':
                return Logger$Level$INFO_getInstance();
            case 'DEBUG':
                return Logger$Level$DEBUG_getInstance();
            case 'TRACE':
                return Logger$Level$TRACE_getInstance();
            default:
                throwISE('No enum constant com.soywiz.klogger.Logger.Level.' + name);
        }
    }

    Logger$Level.valueOf_61zpoe$ = Logger$Level$valueOf;

    function Logger$Output() {
    }

    Logger$Output.$metadata$ = {
        kind: Kind_INTERFACE,
        simpleName: 'Output',
        interfaces: []
    };

    function Logger$ConsoleLogOutput() {
        Logger$ConsoleLogOutput_instance = this;
    }

    Logger$ConsoleLogOutput.prototype.output_wgz3sg$ = function (logger, level, msg) {
        if (equals(level, Logger$Level$ERROR_getInstance())) {
            Console_getInstance();
            var msg_0 = [logger.name, msg];
            var tmp$;
            (tmp$ = console).error.apply(tmp$, msg_0);
        } else {
            Console_getInstance();
            var msg_1 = [logger.name, msg];
            var tmp$_0;
            (tmp$_0 = console).log.apply(tmp$_0, msg_1);
        }
    };
    Logger$ConsoleLogOutput.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'ConsoleLogOutput',
        interfaces: [Logger$Output]
    };
    var Logger$ConsoleLogOutput_instance = null;

    function Logger$ConsoleLogOutput_getInstance() {
        if (Logger$ConsoleLogOutput_instance === null) {
            new Logger$ConsoleLogOutput();
        }
        return Logger$ConsoleLogOutput_instance;
    }

    Logger.prototype.isEnabled_fs4ikx$ = function (level) {
        return level.index <= this.level.index;
    };
    Object.defineProperty(Logger.prototype, 'isFatalEnabled', {
        get: defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.get_isFatalEnabled', wrapFunction(function () {
            var Logger$Level = _.com.soywiz.klogger.Logger.Level;
            return function () {
                return this.isEnabled_fs4ikx$(Logger$Level.FATAL);
            };
        }))
    });
    Object.defineProperty(Logger.prototype, 'isErrorEnabled', {
        get: defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.get_isErrorEnabled', wrapFunction(function () {
            var Logger$Level = _.com.soywiz.klogger.Logger.Level;
            return function () {
                return this.isEnabled_fs4ikx$(Logger$Level.ERROR);
            };
        }))
    });
    Object.defineProperty(Logger.prototype, 'isWarnEnabled', {
        get: defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.get_isWarnEnabled', wrapFunction(function () {
            var Logger$Level = _.com.soywiz.klogger.Logger.Level;
            return function () {
                return this.isEnabled_fs4ikx$(Logger$Level.WARN);
            };
        }))
    });
    Object.defineProperty(Logger.prototype, 'isInfoEnabled', {
        get: defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.get_isInfoEnabled', wrapFunction(function () {
            var Logger$Level = _.com.soywiz.klogger.Logger.Level;
            return function () {
                return this.isEnabled_fs4ikx$(Logger$Level.INFO);
            };
        }))
    });
    Object.defineProperty(Logger.prototype, 'isDebugEnabled', {
        get: defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.get_isDebugEnabled', wrapFunction(function () {
            var Logger$Level = _.com.soywiz.klogger.Logger.Level;
            return function () {
                return this.isEnabled_fs4ikx$(Logger$Level.DEBUG);
            };
        }))
    });
    Object.defineProperty(Logger.prototype, 'isTraceEnabled', {
        get: defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.get_isTraceEnabled', wrapFunction(function () {
            var Logger$Level = _.com.soywiz.klogger.Logger.Level;
            return function () {
                return this.isEnabled_fs4ikx$(Logger$Level.TRACE);
            };
        }))
    });
    Logger.prototype.log_ky4efp$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.log_ky4efp$', function (level, msg) {
        if (this.isEnabled_fs4ikx$(level))
            this.actualLog_pwm3k3$(level, msg());
    });
    Logger.prototype.fatal_nq59yw$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.fatal_nq59yw$', wrapFunction(function () {
        var Logger$Level = _.com.soywiz.klogger.Logger.Level;
        return function (msg) {
            var level = Logger$Level.FATAL;
            if (this.isEnabled_fs4ikx$(level))
                this.actualLog_pwm3k3$(level, msg());
        };
    }));
    Logger.prototype.error_nq59yw$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.error_nq59yw$', wrapFunction(function () {
        var Logger$Level = _.com.soywiz.klogger.Logger.Level;
        return function (msg) {
            var level = Logger$Level.ERROR;
            if (this.isEnabled_fs4ikx$(level))
                this.actualLog_pwm3k3$(level, msg());
        };
    }));
    Logger.prototype.warn_nq59yw$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.warn_nq59yw$', wrapFunction(function () {
        var Logger$Level = _.com.soywiz.klogger.Logger.Level;
        return function (msg) {
            var level = Logger$Level.WARN;
            if (this.isEnabled_fs4ikx$(level))
                this.actualLog_pwm3k3$(level, msg());
        };
    }));
    Logger.prototype.info_nq59yw$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.info_nq59yw$', wrapFunction(function () {
        var Logger$Level = _.com.soywiz.klogger.Logger.Level;
        return function (msg) {
            var level = Logger$Level.INFO;
            if (this.isEnabled_fs4ikx$(level))
                this.actualLog_pwm3k3$(level, msg());
        };
    }));
    Logger.prototype.debug_nq59yw$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.debug_nq59yw$', wrapFunction(function () {
        var Logger$Level = _.com.soywiz.klogger.Logger.Level;
        return function (msg) {
            var level = Logger$Level.DEBUG;
            if (this.isEnabled_fs4ikx$(level))
                this.actualLog_pwm3k3$(level, msg());
        };
    }));
    Logger.prototype.trace_nq59yw$ = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.Logger.trace_nq59yw$', wrapFunction(function () {
        var Logger$Level = _.com.soywiz.klogger.Logger.Level;
        return function (msg) {
            var level = Logger$Level.TRACE;
            if (this.isEnabled_fs4ikx$(level))
                this.actualLog_pwm3k3$(level, msg());
        };
    }));
    Logger.prototype.fatal_61zpoe$ = function (msg) {
        var level = Logger$Level.FATAL;
        if (this.isEnabled_fs4ikx$(level)) {
            this.actualLog_pwm3k3$(level, msg);
        }
    };
    Logger.prototype.error_61zpoe$ = function (msg) {
        var level = Logger$Level.ERROR;
        if (this.isEnabled_fs4ikx$(level)) {
            this.actualLog_pwm3k3$(level, msg);
        }
    };
    Logger.prototype.warn_61zpoe$ = function (msg) {
        var level = Logger$Level.WARN;
        if (this.isEnabled_fs4ikx$(level)) {
            this.actualLog_pwm3k3$(level, msg);
        }
    };
    Logger.prototype.info_61zpoe$ = function (msg) {
        var level = Logger$Level.INFO;
        if (this.isEnabled_fs4ikx$(level)) {
            this.actualLog_pwm3k3$(level, msg);
        }
    };
    Logger.prototype.debug_61zpoe$ = function (msg) {
        var level = Logger$Level.DEBUG;
        if (this.isEnabled_fs4ikx$(level)) {
            this.actualLog_pwm3k3$(level, msg);
        }
    };
    Logger.prototype.trace_61zpoe$ = function (msg) {
        var level = Logger$Level.TRACE;
        if (this.isEnabled_fs4ikx$(level)) {
            this.actualLog_pwm3k3$(level, msg);
        }
    };
    Logger.prototype.actualLog_pwm3k3$ = function (level, msg) {
        this.output.output_wgz3sg$(this, level, msg);
    };
    Logger.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Logger',
        interfaces: []
    };

    function setLevel($receiver, level) {
        $receiver.level = level;
        return $receiver;
    }

    function setOutput($receiver, output) {
        $receiver.output = output;
        return $receiver;
    }

    var KLOGGER_VERSION;
    var error = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.error_38edjy$', function ($receiver, msg) {
        var tmp$;
        (tmp$ = console).error.apply(tmp$, msg);
    });
    var log = defineInlineFunction('klogger-root-klogger.com.soywiz.klogger.log_38edjy$', function ($receiver, msg) {
        var tmp$;
        (tmp$ = console).log.apply(tmp$, msg);
    });

    function DefaultLogOutput() {
        DefaultLogOutput_instance = this;
    }

    DefaultLogOutput.prototype.output_wgz3sg$ = function (logger, level, msg) {
        Logger$ConsoleLogOutput_getInstance().output_wgz3sg$(logger, level, msg);
    };
    DefaultLogOutput.$metadata$ = {
        kind: Kind_OBJECT,
        simpleName: 'DefaultLogOutput',
        interfaces: [Logger$Output]
    };
    var DefaultLogOutput_instance = null;

    function DefaultLogOutput_getInstance() {
        if (DefaultLogOutput_instance === null) {
            new DefaultLogOutput();
        }
        return DefaultLogOutput_instance;
    }

    var isNative;
    var package$com = _.com || (_.com = {});
    var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
    var package$klogger = package$soywiz.klogger || (package$soywiz.klogger = {});
    Object.defineProperty(package$klogger, 'Console', {
        get: Console_getInstance
    });
    Object.defineProperty(Logger, 'Companion', {
        get: Logger$Companion_getInstance
    });
    Object.defineProperty(Logger$Level, 'NONE', {
        get: Logger$Level$NONE_getInstance
    });
    Object.defineProperty(Logger$Level, 'FATAL', {
        get: Logger$Level$FATAL_getInstance
    });
    Object.defineProperty(Logger$Level, 'ERROR', {
        get: Logger$Level$ERROR_getInstance
    });
    Object.defineProperty(Logger$Level, 'WARN', {
        get: Logger$Level$WARN_getInstance
    });
    Object.defineProperty(Logger$Level, 'INFO', {
        get: Logger$Level$INFO_getInstance
    });
    Object.defineProperty(Logger$Level, 'DEBUG', {
        get: Logger$Level$DEBUG_getInstance
    });
    Object.defineProperty(Logger$Level, 'TRACE', {
        get: Logger$Level$TRACE_getInstance
    });
    Logger.Level = Logger$Level;
    Logger.Output = Logger$Output;
    $$importsForInline$$['klogger-root-klogger'] = _;
    Object.defineProperty(Logger, 'ConsoleLogOutput', {
        get: Logger$ConsoleLogOutput_getInstance
    });
    package$klogger.Logger = Logger;
    package$klogger.setLevel_gcosbr$ = setLevel;
    package$klogger.setOutput_81nh4k$ = setOutput;
    var package$internal = package$klogger.internal || (package$klogger.internal = {});
    Object.defineProperty(package$internal, 'KLOGGER_VERSION_8be2vx$', {
        get: function () {
            return KLOGGER_VERSION;
        }
    });
    package$klogger.error_38edjy$ = error;
    package$klogger.log_38edjy$ = log;
    Object.defineProperty(package$klogger, 'DefaultLogOutput', {
        get: DefaultLogOutput_getInstance
    });
    Object.defineProperty(package$internal, 'isNative_8be2vx$', {
        get: function () {
            return isNative;
        }
    });
    Logger_loggers = LinkedHashMap_init();
    Logger_defaultLevel = null;
    Logger_defaultOutput = DefaultLogOutput_getInstance();
    Logger_levels = LinkedHashMap_init();
    Logger_outputs = LinkedHashMap_init();
    KLOGGER_VERSION = '1.8.1';
    isNative = false;
    Kotlin.defineModule('klogger-root-klogger', _);
    return _;
}));

//# sourceMappingURL=klogger-root-klogger.js.map
