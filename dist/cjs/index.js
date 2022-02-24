'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var globalStyle = styled.createGlobalStyle(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\nhtml,\n* {\n    direction: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n    outline: none;\n}\n\ninput::placeholder,\nselect::placeholder,\nbutton::placeholder,\ntextarea::placeholder {\n    color: #999;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n "], ["\nhtml,\n* {\n    direction: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n    outline: none;\n}\n\ninput::placeholder,\nselect::placeholder,\nbutton::placeholder,\ntextarea::placeholder {\n    color: #999;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n "])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
});
var GlobalStyle = styled.withTheme(globalStyle);
var templateObject_1$i;

var defaultTheme = {
    fontColor: "#666",
    borderColor: "#ccc",
    buttonFontColor: "#999",
    buttonIconColor: "#bfbfbf",
    brightColor: "#2c89ca",
    delicateColor: "#2c89ca1a",
    focusedColor: "#fcaf66b3",
    focusedFontColor: "#fff",
    fontFamily: "Arial, sans-serif",
    direction: "rtl",
    fontSize: "1.6rem",
    borderRadius: "0.5rem",
    dropListZIndex: 1,
};

var defaultProps$i = {
    onChange: function (value) { return console.log(value); },
    value: "",
    theme: defaultTheme,
    "aria-label": "single line text input",
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default["default"].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default["default"].createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React__default["default"].createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React__default["default"].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function BiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"}}]})(props);
}function BiChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(props);
}function BiChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"}}]})(props);
}function BiMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 11h14v2H5z"}}]})(props);
}function BiPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(props);
}function BiSearchAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}},{"tag":"path","attr":{"d":"M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"}}]})(props);
}function BiX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"}}]})(props);
}

var defaultProps$h = {
    onClick: function () { return null; },
    'aria-label': 'clear input button',
};

var ClearButtonStyled = styled__default["default"].button(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 350ms ease-in-out;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n    font-size: 2.6rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      background-color: ", ";\n      * {\n        color: ", ";\n      }\n    }\n  }\n  :active {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n  :focus {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n"], ["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 350ms ease-in-out;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n    font-size: 2.6rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      background-color: ", ";\n      * {\n        color: ", ";\n      }\n    }\n  }\n  :active {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n  :focus {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.buttonFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
});
var templateObject_1$h;

var ClearButton = function (_a) {
    var onClick = _a.onClick;
    return (React__default["default"].createElement(ClearButtonStyled, { onClick: onClick },
        React__default["default"].createElement(BiX, { "aria-hidden": true })));
};
ClearButton.defaultProps = defaultProps$h;

var TextInputWrapStyled = styled__default["default"].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  direction: ", ";\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"], ["\n  direction: ", ";\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var TextInputStyled = styled__default["default"].input(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  direction: ", ";\n\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: transparent;\n  transition: all 350ms ease-in-out;\n  :focus {\n    -webkit-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    -moz-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    border-radius: ", ";\n  }\n"], ["\n  direction: ", ";\n\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: transparent;\n  transition: all 350ms ease-in-out;\n  :focus {\n    -webkit-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    -moz-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    border-radius: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var templateObject_1$g, templateObject_2$b;

var TextInput = function (_a) {
    var onChange = _a.onChange, maxWidth = _a.maxWidth, theme = _a.theme, props = __rest$1(_a, ["onChange", "maxWidth", "theme"]);
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(TextInputWrapStyled, { style: { maxWidth: maxWidth } },
            React__default["default"].createElement(TextInputStyled, __assign$1({}, props, { onChange: function (e) { return onChange(e.target.value); } })),
            props.value !== "" && React__default["default"].createElement(ClearButton, { onClick: function () { return onChange(""); } }))));
};
TextInput.defaultProps = defaultProps$i;

var defaultProps$g = {
    chooseOption: function (value) { return console.log(value); },
    options: [],
    theme: defaultTheme,
};

var OptionsStyled = styled__default["default"].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  direction: ", ";\n  border-bottom: solid 0.1rem\n    ", ";\n  border-right: solid 0.1rem\n    ", ";\n  border-left: solid 0.1rem\n    ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  background-color: #fff;\n  position: absolute;\n  top: 3.6rem;\n  width: 100%;\n  transition: all 250ms ease-in-out;\n  max-height: 24.7rem;\n  overflow-y: auto;\n  z-index: ", ";\n"], ["\n  direction: ", ";\n  border-bottom: solid 0.1rem\n    ", ";\n  border-right: solid 0.1rem\n    ", ";\n  border-left: solid 0.1rem\n    ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  background-color: #fff;\n  position: absolute;\n  top: 3.6rem;\n  width: 100%;\n  transition: all 250ms ease-in-out;\n  max-height: 24.7rem;\n  overflow-y: auto;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.dropListZIndex;
});
var OptionStyled = styled__default["default"].button(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  display: block;\n  width: 100%;\n  text-align: start;\n  padding: 1rem 1.5rem;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-contetn: flex-start;\n  gap: 1rem;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  border: none;\n  background-color: transparent;\n  display: block;\n  width: 100%;\n  text-align: start;\n  padding: 1rem 1.5rem;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-contetn: flex-start;\n  gap: 1rem;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var templateObject_1$f, templateObject_2$a;

var Options = function (_a) {
    var chooseOption = _a.chooseOption, options = _a.options, maxWidth = _a.maxWidth, theme = _a.theme;
    var optionsRef = React.useRef([]);
    React.useEffect(function () {
        var _a;
        // populate refs array, focus on first el
        optionsRef.current = optionsRef.current.slice(0, options.length);
        (_a = optionsRef.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
        addFocusStyle(optionsRef.current[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);
    React.useEffect(function () {
        // manage style on mouse click or hover
        var handleFocusStyle = function (e) {
            var index = optionsRef.current.findIndex(function (item) { return item && item === e.target; });
            if (index !== -1) {
                for (var i in optionsRef.current) {
                    removeFocusStyle(optionsRef.current[i]);
                }
                addFocusStyle(optionsRef.current[index]);
            }
        };
        if (window.innerWidth > 900) {
            document.addEventListener("mouseover", handleFocusStyle);
        }
        document.addEventListener("mousedown", handleFocusStyle);
        return function () {
            document.removeEventListener("mouseover", handleFocusStyle);
            document.removeEventListener("mousedown", handleFocusStyle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionsRef]);
    var addFocusStyle = function (el) {
        el.style.backgroundColor = (theme === null || theme === void 0 ? void 0 : theme.delicateColor) || "";
    };
    var removeFocusStyle = function (el) {
        el.style.backgroundColor = "transparent";
    };
    var handleKeyUp = function (e, i) {
        var key = e.key || e.keyCode;
        var nextIndex = i;
        if (key === "ArrowUp" && i === 0) {
            nextIndex = options.length - 1;
        }
        else if (key === "ArrowUp" && i > 0) {
            nextIndex = i - 1;
        }
        else if (key === "ArrowDown" && i < options.length - 1) {
            nextIndex = i + 1;
        }
        else if (key === "ArrowDown" && i === options.length - 1) {
            nextIndex = 0;
        }
        var nextOption = optionsRef.current[nextIndex];
        nextOption === null || nextOption === void 0 ? void 0 : nextOption.focus();
        nextOption === null || nextOption === void 0 ? void 0 : nextOption.scrollTo();
        removeFocusStyle(optionsRef.current[i]);
        addFocusStyle(optionsRef.current[nextIndex]);
    };
    return (React__default["default"].createElement(OptionsStyled, { style: { maxWidth: maxWidth } }, options.map(function (option, i) { return (React__default["default"].createElement(OptionStyled, { key: option, ref: function (el) { return (optionsRef.current[i] = el); }, onClick: function () { return chooseOption(option); }, onKeyUp: function (e) { return handleKeyUp(e, i); }, "aria-label": "option" }, option)); })));
};
Options.defaultProps = defaultProps$g;

var defaultProps$f = {
    onChange: function (value) { return console.log(value); },
    value: "",
    options: [],
    minChars: 3,
    theme: defaultTheme,
    "aria-label": "autocomplete input",
};

var AutocompleteWrapStyled = styled__default["default"].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var templateObject_1$e;

var Autocomplete = function (_a) {
    var value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, options = _a.options, minChars = _a.minChars, id = _a.id, maxWidth = _a.maxWidth, theme = _a.theme;
    var wrapperRef = React.useRef(null);
    var _b = React.useState([]), filteredOptions = _b[0], setFilteredOptions = _b[1];
    var _c = React.useState(false), isChosen = _c[0], setIsChosen = _c[1];
    React.useEffect(function () {
        // manage suggestions array
        if (value.split("").length >= minChars && !isChosen) {
            setFilteredOptions(options.filter(function (item) { return item.includes(value); }));
        }
        else {
            setFilteredOptions([]);
            setIsChosen(false);
        }
    }, [value, minChars, options, isChosen]);
    React.useEffect(function () {
        // close on unfocus
        var handleClickOutside = function (e) {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(e.target)) {
                setFilteredOptions([]);
                setIsChosen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    var chooseOption = function (option) {
        setIsChosen(true);
        onChange(option);
    };
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(AutocompleteWrapStyled, { ref: wrapperRef },
            React__default["default"].createElement(TextInput, { value: value, onChange: onChange, placeholder: placeholder, maxWidth: maxWidth, "aria-autocomplete": "list", "aria-label": "text input with autocomplete", id: id }),
            filteredOptions.length > 0 && (React__default["default"].createElement(Options, { options: filteredOptions, chooseOption: chooseOption, maxWidth: maxWidth })))));
};
Autocomplete.defaultProps = defaultProps$f;

var defaultProps$e = {
    onClick: function () { return null; },
    children: null,
    theme: defaultTheme,
    "aria-label": "clickable button",
};

var ButtonStyled = styled__default["default"].button(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  direction: ", ";\n  transition: all 350ms ease-in-out;\n  font-family: ", ";\n  font-size: ", ";\n  border: solid 1px;\n  border-radius: ", ";\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  width: 100%;\n  max-width: ", ";\n\n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n  @media only screen and (min-width: 900px) {\n    :hover {\n      color: ", ";\n      border-color: ", ";\n      border-color: ", ";\n    }\n  }\n  :active {\n    color: ", ";\n    border-color: ", ";\n    border-color: ", ";\n  }\n  :focus {\n    text-decoration: underline;\n  }\n"], ["\n  direction: ", ";\n  transition: all 350ms ease-in-out;\n  font-family: ", ";\n  font-size: ", ";\n  border: solid 1px;\n  border-radius: ", ";\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  width: 100%;\n  max-width: ", ";\n\n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n  @media only screen and (min-width: 900px) {\n    :hover {\n      color: ", ";\n      border-color: ", ";\n      border-color: ", ";\n    }\n  }\n  :active {\n    color: ", ";\n    border-color: ", ";\n    border-color: ", ";\n  }\n  :focus {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (props) {
    return props.maxWidth ? "".concat(props.maxWidth / 10, "rem") : "100";
}, function (_a) {
    var use = _a.use, theme = _a.theme;
    return use === "primary" ? theme.focusedFontColor : theme.fontColor;
}, function (_a) {
    var use = _a.use, theme = _a.theme;
    return use === "primary" ? theme.brightColor : theme.borderColor;
}, function (_a) {
    var use = _a.use, theme = _a.theme;
    return use === "primary" ? theme.brightColor : theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
});
var templateObject_1$d;

var Button = function (props) { return (React__default["default"].createElement(styled.ThemeProvider, { theme: props.theme },
    React__default["default"].createElement(GlobalStyle, null),
    React__default["default"].createElement(ButtonStyled, __assign$1({}, props)))); };
Button.defaultProps = defaultProps$e;

var defaultProps$d = {
    onChange: function (value) { return console.log(value); },
    value: false,
    labelText: "",
    theme: defaultTheme,
    "aria-label": "checkbox",
    "aria-checked": false,
};

var CheckboxLabelStyled = styled__default["default"].label(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  direction: ", ";\n  min-width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  position: relative;\n  > input {\n    position: absolute;\n    top: 0;\n    right: auto;\n    height: 2.5rem;\n    width: 100%;\n    cursor: pointer;\n    opacity: 0;\n    z-index: ", ";\n  }\n  > input:focus + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: ", ";\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.2rem;\n    width: 2.2rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n  @media only screen and (min-width: 900px) {\n    > input:hover + div:after {\n      content: \"\";\n      border: solid 0.2rem\n        ", ";\n      border-radius: ", ";\n      top: 0;\n      right: 0;\n      left: 0;\n      height: 2.2rem;\n      width: 2.2rem;\n      position: absolute;\n      transition: all 350ms ease-in-out;\n    }\n  }\n  > input:active + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: ", ";\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.2rem;\n    width: 2.2rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n"], ["\n  direction: ", ";\n  min-width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  position: relative;\n  > input {\n    position: absolute;\n    top: 0;\n    right: auto;\n    height: 2.5rem;\n    width: 100%;\n    cursor: pointer;\n    opacity: 0;\n    z-index: ", ";\n  }\n  > input:focus + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: ", ";\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.2rem;\n    width: 2.2rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n  @media only screen and (min-width: 900px) {\n    > input:hover + div:after {\n      content: \"\";\n      border: solid 0.2rem\n        ", ";\n      border-radius: ", ";\n      top: 0;\n      right: 0;\n      left: 0;\n      height: 2.2rem;\n      width: 2.2rem;\n      position: absolute;\n      transition: all 350ms ease-in-out;\n    }\n  }\n  > input:active + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: ", ";\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.2rem;\n    width: 2.2rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.dropListZIndex;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var CheckboxBoxStyled = styled__default["default"].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: rgba(255, 255, 255, 1);\n"], ["\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: rgba(255, 255, 255, 1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var CheckboxIconStyled = styled__default["default"](BiCheck)(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  font-size: 2.5rem;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  font-size: 2.5rem;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.brightColor;
});
var CheckboxLabelTextStyled = styled__default["default"].label(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: block;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  display: block;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var templateObject_1$c, templateObject_2$9, templateObject_3$7, templateObject_4$2;

var Checkbox = function (_a) {
    var onChange = _a.onChange, value = _a.value, labelText = _a.labelText, theme = _a.theme, props = __rest$1(_a, ["onChange", "value", "labelText", "theme"]);
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(CheckboxLabelStyled, null,
            React__default["default"].createElement("input", __assign$1({}, props, { type: "checkbox", checked: value, "aria-checked": value, onChange: function () { return onChange(!value); } })),
            React__default["default"].createElement(CheckboxBoxStyled, { "aria-hidden": true }, value && React__default["default"].createElement(CheckboxIconStyled, { "aria-hidden": true })),
            labelText && (React__default["default"].createElement(CheckboxLabelTextStyled, __assign$1({ htmlFor: props.id }, props), labelText)))));
};
Checkbox.defaultProps = defaultProps$d;

var defaultProps$c = {
    addFile: function () { return null; },
    theme: defaultTheme,
    "aria-label": "file button",
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var defaultProps$b = {
    addFile: function () { return null; },
    id: "",
    "aria-label": "file input",
};

var FileInput = function (_a) {
    var addFile = _a.addFile, onFocus = _a.onFocus, onBlur = _a.onBlur, id = _a.id;
    var _b = React.useState(null), file = _b[0], setFile = _b[1];
    React.useEffect(function () {
        if (file) {
            addFile(file);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);
    var formatFile = function (fileObj) {
        var reader = new FileReader();
        reader.onload = function () {
            var fileObject = {
                id: v4(),
                name: fileObj.name,
                size: fileObj.size,
                type: fileObj.type,
                url: reader.result,
                file: fileObj,
            };
            setFile(fileObject);
        };
        reader.readAsDataURL(fileObj);
    };
    return (React__default["default"].createElement("input", { type: "file", capture: "environment", accept: "*", onChange: function (e) { var _a; return formatFile((_a = e.target.files) === null || _a === void 0 ? void 0 : _a.item(0)); }, onFocus: onFocus, onBlur: onBlur, id: id }));
};
FileInput.defaultProps = defaultProps$b;

var FileLabelStyled = styled__default["default"].label(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 350ms ease-in-out;\n  > input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 350ms ease-in-out;\n  > input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n"])));
var FileIconStyled = styled__default["default"].div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 350ms ease-in-out;\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: ", ";\n  * {\n    font-size: 2.4rem;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 350ms ease-in-out;\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: ", ";\n  * {\n    font-size: 2.4rem;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.buttonFontColor;
});
var FileInputStyled = styled__default["default"](FileInput)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  width: 2.5rem;\n  height: 2.5rem;\n  opacity: 1;\n  position: absolute;\n  z-index: ", ";\n"], ["\n  width: 2.5rem;\n  height: 2.5rem;\n  opacity: 1;\n  position: absolute;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.dropListZIndex;
});
var templateObject_1$b, templateObject_2$8, templateObject_3$6;

var FilesButton = function (_a) {
    var addFile = _a.addFile, id = _a.id, theme = _a.theme;
    var buttonRef = React.useRef(null);
    React.useEffect(function () {
        // manage style on mouse click or hover
        var handleFocusStyle = function (e) {
            var _a;
            if ((_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
                addFocusStyle(buttonRef.current);
            }
            else {
                removeFocusStyle(buttonRef.current);
            }
        };
        if (window.innerWidth > 900) {
            document.addEventListener("mouseover", handleFocusStyle);
        }
        document.addEventListener("mousedown", handleFocusStyle);
        return function () {
            document.removeEventListener("mouseover", handleFocusStyle);
            document.removeEventListener("mousedown", handleFocusStyle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonRef]);
    var addFocusStyle = function (el) {
        el.style.backgroundColor = (theme === null || theme === void 0 ? void 0 : theme.focusedColor) || "";
        el.style.color = (theme === null || theme === void 0 ? void 0 : theme.focusedFontColor) || "";
    };
    var removeFocusStyle = function (el) {
        el.style.backgroundColor = "transparent";
        el.style.color = (theme === null || theme === void 0 ? void 0 : theme.buttonFontColor) || "";
    };
    var onFocus = function (e) {
        addFocusStyle(e.target.nextSibling);
    };
    var onBlur = function (e) {
        removeFocusStyle(e.target.nextSibling);
    };
    return (React__default["default"].createElement(FileLabelStyled, null,
        React__default["default"].createElement(FileInputStyled, { addFile: addFile, onFocus: onFocus, onBlur: onBlur, "aria-label": "file input", id: id }),
        React__default["default"].createElement(FileIconStyled, { ref: buttonRef, "aria-hidden": true },
            React__default["default"].createElement(BiPlus, { "aria-hidden": true }))));
};
FilesButton.defaultProps = defaultProps$c;

var defaultProps$a = {
    onClick: function () { return null; },
    isOpen: false,
    'aria-label': 'open or close options list',
};

var OpenButtonStyled = styled__default["default"].button(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n    font-size: 2.5rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      background-color: ", ";\n      * {\n        color: ", ";\n      }\n    }\n  }\n  :active {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n  :focus {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n"], ["\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n    font-size: 2.5rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      background-color: ", ";\n      * {\n        color: ", ";\n      }\n    }\n  }\n  :active {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n  :focus {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.buttonFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
});
var templateObject_1$a;

var OpenButton = function (_a) {
    var onClick = _a.onClick, isOpen = _a.isOpen, props = __rest$1(_a, ["onClick", "isOpen"]);
    var handleKeyUp = function (e) {
        var key = e.key || e.keyCode;
        if (key === 'ArrowDown' || key === 'ArrowUp') {
            onClick();
        }
    };
    return (React__default["default"].createElement(OpenButtonStyled, __assign$1({ onClick: onClick, onKeyUp: function (e) { return handleKeyUp(e); }, "aria-label": "open or close options list", "aria-expanded": isOpen }, props), isOpen ? React__default["default"].createElement(BiChevronUp, { "aria-hidden": true }) : React__default["default"].createElement(BiChevronDown, { "aria-hidden": true })));
};
OpenButton.defaultProps = defaultProps$a;

var defaultProps$9 = {
    showFile: function () { return null; },
    removeFile: function () { return null; },
    name: '',
};

var FileChipStyled = styled__default["default"].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  direction: ltr !important;\n  border: solid 0.1rem ", ";\n  background-color: ", ";\n  border-radius: 2.5rem;\n  padding: 0.4rem 1.2rem;\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n  transition: all 350ms ease-in-out;\n"], ["\n  direction: ltr !important;\n  border: solid 0.1rem ", ";\n  background-color: ", ";\n  border-radius: 2.5rem;\n  padding: 0.4rem 1.2rem;\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n  transition: all 350ms ease-in-out;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.delicateColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.delicateColor;
});
var FileChipTitleStyled = styled__default["default"].button(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  direction: ltr !important;\n  border: none;\n  background-color: transparent;\n  max-width: 15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  maxwidth: 80%;\n  @media only screen and (min-width: 900px) {\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  :active {\n    text-decoration: underline;\n  }\n  :focus {\n    text-decoration: underline;\n  }\n"], ["\n  direction: ltr !important;\n  border: none;\n  background-color: transparent;\n  max-width: 15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  maxwidth: 80%;\n  @media only screen and (min-width: 900px) {\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  :active {\n    text-decoration: underline;\n  }\n  :focus {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var FileChipButtonStyled = styled__default["default"].button(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  * {\n    margin-top: 0.3rem;\n    margin-right: -0.3rem;\n    transition: all 350ms ease-in-out;\n    border-radius: 50%;\n    color: ", ";\n    font-size: 2.5rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      * {\n        color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n  :active {\n    * {\n      color: ", ";\n      background-color: ", ";\n    }\n  }\n  :focus {\n    * {\n      color: ", ";\n      background-color: ", ";\n    }\n  }\n"], ["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  * {\n    margin-top: 0.3rem;\n    margin-right: -0.3rem;\n    transition: all 350ms ease-in-out;\n    border-radius: 50%;\n    color: ", ";\n    font-size: 2.5rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      * {\n        color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n  :active {\n    * {\n      color: ", ";\n      background-color: ", ";\n    }\n  }\n  :focus {\n    * {\n      color: ", ";\n      background-color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.buttonFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
});
var templateObject_1$9, templateObject_2$7, templateObject_3$5;

var FileChip = function (_a) {
    var name = _a.name, showFile = _a.showFile, removeFile = _a.removeFile;
    return (React__default["default"].createElement(FileChipStyled, null,
        React__default["default"].createElement(FileChipTitleStyled, { onClick: showFile, "aria-label": "open file in new tab" }, name),
        React__default["default"].createElement(FileChipButtonStyled, { onClick: removeFile, "aria-label": "remove file" },
            React__default["default"].createElement(BiX, { "aria-hidden": true }))));
};
FileChip.defaultProps = defaultProps$9;

var defaultProps$8 = {
    onChange: function (value) { return console.log(value); },
    maxFiles: 5,
    theme: defaultTheme,
    "aria-label": "select multiple options",
};

var FilesStyled = styled__default["default"].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  direction: ", ";\n  width: 100%;\n  min-width: 14rem;\n  position: relative;\n"], ["\n  direction: ", ";\n  width: 100%;\n  min-width: 14rem;\n  position: relative;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
});
var FilesFieldStyled = styled__default["default"].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  padding: 0 0.5rem;\n  gap: 0.5rem;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  padding: 0 0.5rem;\n  gap: 0.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var FilePlaceholderStyled = styled__default["default"].input(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 1rem;\n  color: ", ";\n  border: none;\n  background-color: transparent;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 1rem;\n  color: ", ";\n  border: none;\n  background-color: transparent;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var ListStyled = styled__default["default"].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-bottom: solid 0.1rem\n    ", ";\n  border-right: solid 0.1rem\n    ", ";\n  border-left: solid 0.1rem\n    ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  background-color: #fff;\n  position: absolute;\n  top: 3.6rem;\n  width: 100%;\n  transition: all 250ms ease-in-out;\n  padding: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n"], ["\n  border-bottom: solid 0.1rem\n    ", ";\n  border-right: solid 0.1rem\n    ", ";\n  border-left: solid 0.1rem\n    ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  background-color: #fff;\n  position: absolute;\n  top: 3.6rem;\n  width: 100%;\n  transition: all 250ms ease-in-out;\n  padding: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var templateObject_1$8, templateObject_2$6, templateObject_3$4, templateObject_4$1;

var FilesInput = function (_a) {
    var onChange = _a.onChange, maxFiles = _a.maxFiles, id = _a.id, maxWidth = _a.maxWidth, theme = _a.theme, placeholder = _a.placeholder, singleLabel = _a.singleLabel, multipleLabel = _a.multipleLabel;
    var _b = React.useState(false), showList = _b[0], setShowList = _b[1];
    var singleChosenLabel = React.useState(singleLabel || "One file added")[0];
    var multipleChosenLabel = React.useState(multipleLabel || "files added")[0];
    var _c = React.useState([]), chosenFilesLocal = _c[0], setChosenFilesLocal = _c[1];
    React.useEffect(function () {
        setShowList(chosenFilesLocal.length > 0);
        onChange(chosenFilesLocal.map(function (item) {
            return item.file;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chosenFilesLocal]);
    var addFile = function (file) {
        setChosenFilesLocal(__spreadArray(__spreadArray([], chosenFilesLocal, true), [file], false));
    };
    var removeFile = function (file) {
        setChosenFilesLocal(chosenFilesLocal.filter(function (fileItem) { return fileItem.id !== file.id; }));
    };
    var showFile = function (file) {
        window.open(file.url);
    };
    var filesLabel = function (length) {
        if (length === 0) {
            return "";
        }
        else if (length === 1) {
            return singleChosenLabel;
        }
        else
            return "".concat(chosenFilesLocal.length, " ").concat(multipleChosenLabel);
    };
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(FilesStyled, { style: { maxWidth: maxWidth } },
            React__default["default"].createElement(FilesFieldStyled, null,
                React__default["default"].createElement(FilePlaceholderStyled, { type: "text", value: filesLabel(chosenFilesLocal.length), placeholder: placeholder, disabled: true, "aria-label": "displays how many files were added" }),
                chosenFilesLocal.length < maxFiles && (React__default["default"].createElement(FilesButton, { addFile: addFile, id: id })),
                chosenFilesLocal.length > 0 && (React__default["default"].createElement(OpenButton, { isOpen: showList, onClick: function () { return setShowList(!showList); } }))),
            showList && (React__default["default"].createElement(ListStyled, null, chosenFilesLocal.map(function (fileItem) { return (React__default["default"].createElement(FileChip, { key: fileItem.id, name: fileItem.name, removeFile: function () { return removeFile(fileItem); }, showFile: function () { return showFile(fileItem); } })); }))))));
};
FilesInput.defaultProps = defaultProps$8;

var defaultProps$7 = {
    onClick: function () { return console.log('button was clicked'); },
    type: 'plus',
    'aria-label': 'plus or minus button',
};

var NumberButtonStyled = styled__default["default"].button(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n    font-size: 2.4rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      background-color: ", ";\n      * {\n        color: ", ";\n      }\n    }\n  }\n  :active {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n  :focus {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n"], ["\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  * {\n    color: ", ";\n    transition: all 350ms ease-in-out;\n    font-size: 2.4rem;\n  }\n  @media only screen and (min-width: 900px) {\n    :hover {\n      background-color: ", ";\n      * {\n        color: ", ";\n      }\n    }\n  }\n  :active {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n  :focus {\n    background-color: ", ";\n    * {\n      color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.buttonFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
});
var templateObject_1$7;

var NumberButton = function (_a) {
    var onClick = _a.onClick, type = _a.type;
    return (React__default["default"].createElement(NumberButtonStyled, { onClick: onClick, "aria-label": type === 'plus' ? 'plus button' : 'minus button' },
        type === 'plus' && React__default["default"].createElement(BiPlus, { "aria-hidden": true }),
        type === 'minus' && React__default["default"].createElement(BiMinus, { "aria-hidden": true })));
};
NumberButton.defaultProps = defaultProps$7;

var defaultProps$6 = {
    onChange: function (value) { return console.log(value); },
    value: 0,
    step: 1,
    theme: defaultTheme,
    "aria-label": "number input",
};

var NumberInputWrapStyled = styled__default["default"].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"], ["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var NumberInputStyled = styled__default["default"].input.attrs({ type: "number" })(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  direction: ", ";\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.5rem 0;\n  text-align: center;\n  font-weight: bold;\n  color: ", ";\n  border: none;\n  background-color: transparent;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  :focus {\n    -webkit-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    -moz-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    border-radius: ", ";\n  }\n"], ["\n  direction: ", ";\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.5rem 0;\n  text-align: center;\n  font-weight: bold;\n  color: ", ";\n  border: none;\n  background-color: transparent;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  :focus {\n    -webkit-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    -moz-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    border-radius: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var templateObject_1$6, templateObject_2$5;

var NumberInput = function (_a) {
    var value = _a.value, step = _a.step, placeholder = _a.placeholder, onChange = _a.onChange, maxWidth = _a.maxWidth, theme = _a.theme, props = __rest$1(_a, ["value", "step", "placeholder", "onChange", "maxWidth", "theme"]);
    var _b = React.useState(0), maxFloat = _b[0], setMaxFloat = _b[1];
    React.useEffect(function () {
        // check how many digits after floating point
        var isFloat = value.toString().split(".").length > step;
        var floatNumber = isFloat
            ? value
                .toString()
                .split(".")[value.toString().split(".").length - 1].split("").length
            : 0;
        setMaxFloat(floatNumber);
    }, [value, step]);
    var increase = function () {
        onChange(Number((value + step).toFixed(maxFloat)));
    };
    var decrease = function () {
        onChange(value - step > 0 ? Number((value - step).toFixed(maxFloat)) : 0);
    };
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(NumberInputWrapStyled, { style: { maxWidth: maxWidth } },
            React__default["default"].createElement(NumberButton, { type: "plus", onClick: function () { return increase(); } }),
            React__default["default"].createElement(NumberInputStyled, __assign$1({ value: value || placeholder, onChange: function (e) { return onChange(Number(e.target.value)); } }, props)),
            React__default["default"].createElement(NumberButton, { type: "minus", onClick: function () { return decrease(); } }))));
};
NumberInput.defaultProps = defaultProps$6;

var defaultProps$5 = {
    onChange: function (value) { return console.log(value); },
    options: [],
    currentOption: "",
    name: "",
    theme: defaultTheme,
    "aria-label": "radio buttons",
};

var RadioInputWrapStyled = styled__default["default"].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 2rem;\n  width: 100%;\n"], ["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 2rem;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
});
var RadioLabelStyled = styled__default["default"].label(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  width: 100%;\n  min-width: 8rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  position: relative;\n  > input {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.5rem;\n    width: 2.5rem;\n    cursor: pointer;\n    opacity: 0;\n    z-index: ", ";\n  }\n  > input:focus + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: 50%;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.1rem;\n    width: 2.1rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n  @media only screen and (min-width: 900px) {\n    > input:hover + div:after {\n      content: \"\";\n      border: solid 0.2rem\n        ", ";\n      border-radius: 50%;\n      top: 0;\n      right: 0;\n      left: 0;\n      height: 2.1rem;\n      width: 2.1rem;\n      position: absolute;\n      transition: all 350ms ease-in-out;\n    }\n  }\n  > input:active + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: 50%;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.1rem;\n    width: 2.1rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n  > label {\n    font-family: ", ";\n    font-size: ", ";\n    color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  width: 100%;\n  min-width: 8rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  position: relative;\n  > input {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.5rem;\n    width: 2.5rem;\n    cursor: pointer;\n    opacity: 0;\n    z-index: ", ";\n  }\n  > input:focus + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: 50%;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.1rem;\n    width: 2.1rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n  @media only screen and (min-width: 900px) {\n    > input:hover + div:after {\n      content: \"\";\n      border: solid 0.2rem\n        ", ";\n      border-radius: 50%;\n      top: 0;\n      right: 0;\n      left: 0;\n      height: 2.1rem;\n      width: 2.1rem;\n      position: absolute;\n      transition: all 350ms ease-in-out;\n    }\n  }\n  > input:active + div:after {\n    content: \"\";\n    border: solid 0.2rem ", ";\n    border-radius: 50%;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 2.1rem;\n    width: 2.1rem;\n    position: absolute;\n    transition: all 350ms ease-in-out;\n  }\n  > label {\n    font-family: ", ";\n    font-size: ", ";\n    color: ", ";\n    cursor: pointer;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.dropListZIndex;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var RadioOuterCircleStyled = styled__default["default"].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  border: solid 0.1rem ", ";\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n"], ["\n  border: solid 0.1rem ", ";\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
});
var RadioInnerCircleStyled = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  transition: all 250ms ease-in-out;\n"], ["\n  background-color: ", ";\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  transition: all 250ms ease-in-out;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.brightColor;
});
var templateObject_1$5, templateObject_2$4, templateObject_3$3, templateObject_4;

var RadioButtons = function (_a) {
    var onChange = _a.onChange, options = _a.options, currentOption = _a.currentOption, name = _a.name, isVertical = _a.isVertical, maxWidth = _a.maxWidth, theme = _a.theme;
    var buttonsName = name || "radioButtons";
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(RadioInputWrapStyled, { style: { maxWidth: maxWidth, flexDirection: isVertical ? "column" : "row" } }, options.map(function (option, i) { return (React__default["default"].createElement(RadioLabelStyled, { key: option },
            React__default["default"].createElement("input", { type: "radio", value: option, checked: option === currentOption, onChange: function () { return onChange(option); }, "aria-label": "radio button option", "aria-checked": option === currentOption, id: "".concat(buttonsName, "_option_").concat(i), name: buttonsName }),
            React__default["default"].createElement(RadioOuterCircleStyled, { "aria-hidden": true }, option === currentOption && (React__default["default"].createElement(RadioInnerCircleStyled, { "aria-hidden": true }))),
            React__default["default"].createElement("label", { "aria-label": "radio button option label", htmlFor: "".concat(buttonsName, "_option_").concat(i) }, option))); }))));
};
RadioButtons.defaultProps = defaultProps$5;

var defaultProps$4 = {
    onChange: function (value) { return console.log(value); },
    value: "",
    theme: defaultTheme,
    "aria-label": "single line search input",
};

var SearchInputWrapStyled = styled__default["default"].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"], ["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var SearchInputStyled = styled__default["default"].input(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  direction: ", ";\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.5rem 1rem;\n  color: ", ";\n  border: none;\n  background-color: transparent;\n  transition: all 350ms ease-in-out;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  :focus {\n    -webkit-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    -moz-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    border-radius: ", ";\n  }\n"], ["\n  direction: ", ";\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.5rem 1rem;\n  color: ", ";\n  border: none;\n  background-color: transparent;\n  transition: all 350ms ease-in-out;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  :focus {\n    -webkit-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    -moz-box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    box-shadow: inset 0 0 0 0.2rem\n      ", ";\n    border-radius: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var SearchIconStyled = styled__default["default"](BiSearchAlt)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin: 0 0.1rem;\n  transition: all 350ms ease-in-out;\n  font-size: 2.3rem;\n  * {\n    color: ", ";\n  }\n"], ["\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin: 0 0.1rem;\n  transition: all 350ms ease-in-out;\n  font-size: 2.3rem;\n  * {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.buttonIconColor;
});
var templateObject_1$4, templateObject_2$3, templateObject_3$2;

var SearchInput = function (_a) {
    var onChange = _a.onChange, maxWidth = _a.maxWidth, theme = _a.theme, props = __rest$1(_a, ["onChange", "maxWidth", "theme"]);
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(SearchInputWrapStyled, { style: { maxWidth: maxWidth } },
            React__default["default"].createElement(SearchInputStyled, __assign$1({}, props, { onChange: function (e) { return onChange(e.target.value); } })),
            props.value !== "" ? (React__default["default"].createElement(ClearButton, { onClick: function () { return onChange(""); } })) : (React__default["default"].createElement(SearchIconStyled, { "aria-hidden": true })))));
};
SearchInput.defaultProps = defaultProps$4;

var defaultProps$3 = {
    onChange: function (value) { return console.log(value); },
    value: "",
    options: [],
    theme: defaultTheme,
    "aria-label": "select input",
};

var SelectWrapStyled = styled__default["default"].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  direction: ", ";\n  position: relative;\n  width: 100%;\n"], ["\n  direction: ", ";\n  position: relative;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
});
var SelectBoxStyled = styled__default["default"].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"], ["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var SelectInputStyled = styled__default["default"].input(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  direction: ", ";\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  direction: ", ";\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var templateObject_1$3, templateObject_2$2, templateObject_3$1;

var Select = function (_a) {
    var onChange = _a.onChange, value = _a.value, options = _a.options, placeholder = _a.placeholder, maxWidth = _a.maxWidth, theme = _a.theme, props = __rest$1(_a, ["onChange", "value", "options", "placeholder", "maxWidth", "theme"]);
    var wrapperRef = React.useRef(null);
    var _b = React.useState(false), showOptions = _b[0], setShowOptions = _b[1];
    React.useEffect(function () {
        // close on unfocus
        var handleClickOutside = function (e) {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(e.target)) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    var chooseOption = function (option) {
        setShowOptions(false);
        onChange(option);
    };
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(SelectWrapStyled, { ref: wrapperRef, style: { maxWidth: maxWidth } },
            React__default["default"].createElement(SelectBoxStyled, null,
                React__default["default"].createElement(SelectInputStyled, __assign$1({ value: value, placeholder: placeholder, disabled: true, "aria-label": "displays the chosen option" }, props)),
                value && value !== "" ? (React__default["default"].createElement(ClearButton, { onClick: function () { return onChange(""); } })) : (React__default["default"].createElement(OpenButton, { isOpen: showOptions, onClick: function () { return setShowOptions(!showOptions); } }))),
            showOptions && (React__default["default"].createElement(Options, { maxWidth: maxWidth, options: options, chooseOption: chooseOption })))));
};
Select.defaultProps = defaultProps$3;

var defaultProps$2 = {
    chooseOption: function (value) { return console.log(value); },
    options: [],
    chosenOptions: [],
    theme: defaultTheme,
};

var OptionsMultipleStyled = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  direction: ", ";\n  border-bottom: solid 0.1rem\n    ", ";\n  border-right: solid 0.1rem\n    ", ";\n  border-left: solid 0.1rem\n    ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  background-color: #fff;\n  position: absolute;\n  top: 3.6rem;\n  width: 100%;\n  transition: all 250ms ease-in-out;\n  max-height: 27.1rem;\n  overflow-y: auto;\n  z-index: ", ";\n"], ["\n  direction: ", ";\n  border-bottom: solid 0.1rem\n    ", ";\n  border-right: solid 0.1rem\n    ", ";\n  border-left: solid 0.1rem\n    ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  background-color: #fff;\n  position: absolute;\n  top: 3.6rem;\n  width: 100%;\n  transition: all 250ms ease-in-out;\n  max-height: 27.1rem;\n  overflow-y: auto;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.dropListZIndex;
});
var OptionMultipleStyled = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  border: none;\n  display: block;\n  width: 100%;\n  text-align: start;\n  padding: 1rem 1.5rem;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-contetn: flex-start;\n  gap: 1rem;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  border: none;\n  display: block;\n  width: 100%;\n  text-align: start;\n  padding: 1rem 1.5rem;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-contetn: flex-start;\n  gap: 1rem;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var templateObject_1$2, templateObject_2$1;

var OptionsMultiple = function (_a) {
    var chooseOption = _a.chooseOption, options = _a.options, chosenOptions = _a.chosenOptions, maxWidth = _a.maxWidth, theme = _a.theme;
    var optionsRef = React.useRef([]);
    React.useEffect(function () {
        var _a;
        // populate refs array, focus on first el
        optionsRef.current = optionsRef.current.slice(0, options.length);
        var firstOption = (_a = optionsRef.current[0]) === null || _a === void 0 ? void 0 : _a.childNodes[0].childNodes[0];
        firstOption.focus();
        addFocusStyle(optionsRef.current[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);
    React.useEffect(function () {
        // manage style on mouse click or hover
        var handleFocusStyle = function (e) {
            var index = optionsRef.current.findIndex(function (item) { return item && item.contains(e.target); });
            if (index !== -1) {
                for (var i in optionsRef.current) {
                    removeFocusStyle(optionsRef.current[i]);
                }
                addFocusStyle(optionsRef.current[index]);
            }
        };
        document.addEventListener("mouseover", handleFocusStyle);
        document.addEventListener("mousedown", handleFocusStyle);
        return function () {
            document.removeEventListener("mouseover", handleFocusStyle);
            document.removeEventListener("mousedown", handleFocusStyle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionsRef]);
    var addFocusStyle = function (el) {
        el.style.backgroundColor = (theme === null || theme === void 0 ? void 0 : theme.delicateColor) || "";
    };
    var removeFocusStyle = function (el) {
        el.style.backgroundColor = "transparent";
    };
    var handleKeyUp = function (e, i) {
        var _a;
        var key = e.key || e.keyCode;
        var nextIndex = i;
        if (key === "ArrowUp" && i === 0) {
            nextIndex = options.length - 1;
        }
        else if (key === "ArrowUp" && i > 0) {
            nextIndex = i - 1;
        }
        else if (key === "ArrowDown" && i < options.length - 1) {
            nextIndex = i + 1;
        }
        else if (key === "ArrowDown" && i === options.length - 1) {
            nextIndex = 0;
        }
        var nextOption = (_a = optionsRef.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.childNodes[0];
        nextOption === null || nextOption === void 0 ? void 0 : nextOption.focus();
        nextOption === null || nextOption === void 0 ? void 0 : nextOption.scrollTo();
        removeFocusStyle(optionsRef.current[i]);
        addFocusStyle(optionsRef.current[nextIndex]);
    };
    return (React__default["default"].createElement(OptionsMultipleStyled, { style: { maxWidth: maxWidth } }, options.map(function (option, i) { return (React__default["default"].createElement(OptionMultipleStyled, { key: option, ref: function (el) { return (optionsRef.current[i] = el); }, onKeyUp: function (e) { return handleKeyUp(e, i); } },
        React__default["default"].createElement(Checkbox, { value: chosenOptions.includes(option), onChange: function () { return chooseOption(option); }, labelText: option }))); })));
};
OptionsMultiple.defaultProps = defaultProps$2;

var defaultProps$1 = {
    onChange: function (value) { return console.log(value); },
    options: [],
    chosenOptions: [],
    theme: defaultTheme,
    "aria-label": "select multiple options",
};

var SelectMultipleWrapStyled = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  direction: ", ";\n  position: relative;\n  width: 100%;\n"], ["\n  direction: ", ";\n  position: relative;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
});
var SelectMultipleBoxStyled = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"], ["\n  direction: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: solid 0.1rem ", ";\n  border-radius: ", ";\n  width: 100%;\n  min-width: 14rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var SelectMultipleInputStyled = styled__default["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  direction: ", ";\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  border: none;\n  background-color: transparent;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  direction: ", ";\n  width: 100%;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  border: none;\n  background-color: transparent;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontColor;
});
var templateObject_1$1, templateObject_2, templateObject_3;

var SelectMultiple = function (_a) {
    var onChange = _a.onChange, options = _a.options, chosenOptions = _a.chosenOptions, placeholder = _a.placeholder, singleLabel = _a.singleLabel, multipleLabel = _a.multipleLabel, maxWidth = _a.maxWidth, theme = _a.theme, props = __rest$1(_a, ["onChange", "options", "chosenOptions", "placeholder", "singleLabel", "multipleLabel", "maxWidth", "theme"]);
    var wrapperRef = React.useRef(null);
    var _b = React.useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var singleChosenLabel = React.useState(singleLabel || "One option chosen")[0];
    var multipleChosenLabel = React.useState(multipleLabel || "options chosen")[0];
    React.useEffect(function () {
        // close on unfocus
        var handleClickOutside = function (e) {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(e.target)) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    var chooseOption = function (option) {
        onChange(chosenOptions.includes(option)
            ? chosenOptions.filter(function (item) { return item !== option; })
            : __spreadArray(__spreadArray([], chosenOptions, true), [option], false));
    };
    var chosenLabel = function (length) {
        if (length === 0) {
            return "";
        }
        else if (length === 1) {
            return singleChosenLabel;
        }
        else
            return "".concat(chosenOptions.length, " ").concat(multipleChosenLabel);
    };
    return (React__default["default"].createElement(styled.ThemeProvider, { theme: theme },
        React__default["default"].createElement(GlobalStyle, null),
        React__default["default"].createElement(SelectMultipleWrapStyled, { ref: wrapperRef, style: { maxWidth: maxWidth } },
            React__default["default"].createElement(SelectMultipleBoxStyled, null,
                React__default["default"].createElement(SelectMultipleInputStyled, __assign$1({ value: chosenLabel(chosenOptions.length), placeholder: placeholder, disabled: true, "aria-label": "displays how many options are chosen" }, props)),
                React__default["default"].createElement(OpenButton, { isOpen: showOptions, onClick: function () { return setShowOptions(!showOptions); } })),
            showOptions && (React__default["default"].createElement(OptionsMultiple, { chosenOptions: chosenOptions, options: options, chooseOption: chooseOption, maxWidth: maxWidth })))));
};
SelectMultiple.defaultProps = defaultProps$1;

var defaultProps = {
    onClick: function () { return null; },
    value: "",
    theme: defaultTheme,
    "aria-label": "form submit button",
};

var SubmitButtonStyled = styled__default["default"].input.attrs({
    type: "submit",
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  direction: ", ";\n  transition: all 350ms ease-in-out;\n  font-family: ", ";\n  font-size: ", ";\n  border: solid 1px;\n  border-radius: ", ";\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n  width: 100%;\n  max-width: ", ";\n  @media only screen and (min-width: 900px) {\n    :hover {\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n  :active {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n  }\n  :focus {\n    text-decoration: underline;\n  }\n"], ["\n  direction: ", ";\n  transition: all 350ms ease-in-out;\n  font-family: ", ";\n  font-size: ", ";\n  border: solid 1px;\n  border-radius: ", ";\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n  width: 100%;\n  max-width: ", ";\n  @media only screen and (min-width: 900px) {\n    :hover {\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n  :active {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n  }\n  :focus {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.direction;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.brightColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.brightColor;
}, function (props) {
    return props.maxWidth ? "".concat(props.maxWidth / 10, "rem") : "100";
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedFontColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.focusedColor;
});
var templateObject_1;

var SubmitButton = function (props) { return (React__default["default"].createElement(styled.ThemeProvider, { theme: props.theme },
    React__default["default"].createElement(GlobalStyle, null),
    React__default["default"].createElement(SubmitButtonStyled, __assign$1({}, props)))); };
SubmitButton.defaultProps = defaultProps;

exports.Autocomplete = Autocomplete;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.FilesInput = FilesInput;
exports.NumberInput = NumberInput;
exports.RadioButtons = RadioButtons;
exports.SearchInput = SearchInput;
exports.Select = Select;
exports.SelectMultiple = SelectMultiple;
exports.SubmitButton = SubmitButton;
exports.TextInput = TextInput;
//# sourceMappingURL=index.js.map
