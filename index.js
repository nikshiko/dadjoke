var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\nbackground-color: blue;\nwidth: 60px;\nheight: 30px;\noutline: none;\nborder-radius: 30px;\nborder-color: ', ';\nposition: relative;\nfont-size: 20px;\nmargin-bottom: 20px;\n'], ['\nbackground-color: blue;\nwidth: 60px;\nheight: 30px;\noutline: none;\nborder-radius: 30px;\nborder-color: ', ';\nposition: relative;\nfont-size: 20px;\nmargin-bottom: 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nbackground-color: blue;\nwidth: 200px;\nheight: 50px;\noutline: none;\nborder-radius: 30px;\nbackground-color: ', ';\nbox-shadow: 2px 4px ', ';\nposition: relative;\nfont-size: 20px;\nmargin-top: 20px;\nmargin-left: 100px;\ncolor: ', ';\n\n&: hover {\n    box-shadow: 3px 6px ', ';\n}\n'], ['\nbackground-color: blue;\nwidth: 200px;\nheight: 50px;\noutline: none;\nborder-radius: 30px;\nbackground-color: ', ';\nbox-shadow: 2px 4px ', ';\nposition: relative;\nfont-size: 20px;\nmargin-top: 20px;\nmargin-left: 100px;\ncolor: ', ';\n\n&: hover {\n    box-shadow: 3px 6px ', ';\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nbackground-color:', ';\nwidth:30px;\nheight: 28px;\nmargin: 0 auto;\nposition: absolute;\nborder-radius: 30px;\nborder: 5px solid ', ';\ntop:-4; \nleft:-2;\ntext-align: center;\ntransform: ', ';\ntransition: all 1s cubic-bezier(.23,1,.32,1) 0ms;\n'], ['\nbackground-color:', ';\nwidth:30px;\nheight: 28px;\nmargin: 0 auto;\nposition: absolute;\nborder-radius: 30px;\nborder: 5px solid ', ';\ntop:-4; \nleft:-2;\ntext-align: center;\ntransform: ', ';\ntransition: all 1s cubic-bezier(.23,1,.32,1) 0ms;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\nposition: relative\nwidth:100%;\nheight: 100%;\nbackground-color: ', ';\nbox-sizing: border-box;\n'], ['\nposition: relative\nwidth:100%;\nheight: 100%;\nbackground-color: ', ';\nbox-sizing: border-box;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\nposition: absolute;\ntop:50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nmax-width:500px;\n\n.translateIt {\n    transform: translate(26px);\n}\n'], ['\nposition: absolute;\ntop:50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nmax-width:500px;\n\n.translateIt {\n    transform: translate(26px);\n}\n']),
    _templateObject6 = _taggedTemplateLiteral(['\ncolor: ', ';\nbackground-color: ', ';\nmax-width: 400px;\nborder: 1px solid ', ';\nbox-shadow: 3px 6px ', ';\nfont-size: 30px;\npadding: 12px;\nfont-family: Mali;\ntext-align: center;\n'], ['\ncolor: ', ';\nbackground-color: ', ';\nmax-width: 400px;\nborder: 1px solid ', ';\nbox-shadow: 3px 6px ', ';\nfont-size: 30px;\npadding: 12px;\nfont-family: Mali;\ntext-align: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _React = React,
    useEffect = _React.useEffect,
    useState = _React.useState,
    useContext = _React.useContext;


var ToggleThemeButton = styled.button(_templateObject, function (props) {
    return props.theme.name == 'light' ? 'black' : 'yellow';
});

var CrackJokeButton = styled.button(_templateObject2, function (props) {
    return props.theme.cardColor;
}, function (props) {
    return props.theme.cardShadow;
}, function (props) {
    return props.theme.color;
}, function (props) {
    return props.theme.cardShadow;
});

var ToggleIcon = styled.span(_templateObject3, function (props) {
    return props.theme.name === 'dark' ? 'black' : 'white';
}, function (props) {
    return props.theme.name === 'dark' ? 'black' : 'white';
}, function (props) {
    return props.theme.name === 'dark' ? "translateX(26px)" : "translateX(0px)";
});

var RootContainer = styled.div(_templateObject4, function (props) {
    return props.theme.backgroundColor;
});

var Wrapper = styled.div(_templateObject5);

var JokeCardComponent = styled.div(_templateObject6, function (props) {
    return props.theme.color;
}, function (props) {
    return props.theme.cardColor;
}, function (props) {
    return props.theme.backgroundColor;
}, function (props) {
    return props.theme.cardShadow;
});

var themes = {
    light: {
        color: "YELLOW",
        backgroundColor: "YELLOW",
        cardColor: "#b39afd",
        cardShadow: "#888888",
        toggleButtonColor: "#b39afd",
        iconColor: '#888888',
        name: 'light'
    },
    dark: {
        color: "#888888",
        backgroundColor: "#888888",
        cardColor: "white",
        cardShadow: "#b39afd",
        toggleButtonColor: "#88888",
        iconColor: '#b39afd',
        name: 'dark'
    }
};

var ThemeProvider = window.styled.ThemeProvider;
function fetchJoke() {
    return fetch("https://icanhazdadjoke.com/", { method: "GET", headers: { Accept: "application/json" } }).then(function (response) {
        return response.json();
    }).then(function (_ref) {
        var joke = _ref.joke;
        return joke;
    }).catch(function (error) {
        return 'Sorry. I am out of jokes';
    });
}

function App() {
    var initialJokeState = {
        joke: '🤪 🕺 🤫 🤭 🤩 😂 😋 🧐 💩 💋',
        isCracking: false
    };

    var _useState = useState(initialJokeState),
        _useState2 = _slicedToArray(_useState, 2),
        jokeState = _useState2[0],
        setJokeState = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isDark = _useState4[0],
        toggleTheme = _useState4[1];

    var handleToggle = function handleToggle() {
        toggleTheme(!isDark);
    };

    var crackJoke = function crackJoke() {
        setJokeState({ isCracking: true, joke: 'Prepare for the worst. HAAAAHAAA🧟‍♂️...' });
        fetchJoke().then(function (joke) {
            setJokeState({ joke: joke, isCracking: false });
        });
    };

    return React.createElement(
        ThemeProvider,
        { theme: themes[isDark ? 'dark' : 'light'] },
        React.createElement(
            RootContainer,
            null,
            React.createElement(
                Wrapper,
                null,
                React.createElement(
                    ToggleThemeButton,
                    { onClick: handleToggle },
                    React.createElement(
                        ToggleIcon,
                        null,
                        isDark ? '🌙' : '🌞'
                    )
                ),
                React.createElement(
                    JokeCardComponent,
                    null,
                    jokeState.joke
                ),
                React.createElement(
                    CrackJokeButton,
                    { onClick: crackJoke },
                    jokeState.isCracking ? 'Cracking...🧟‍♂' : 'Crack joke 🧛🏼‍♀️'
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));