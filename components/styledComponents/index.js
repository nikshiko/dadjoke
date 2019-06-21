var _templateObject = _taggedTemplateLiteral(['\nbackground-color: blue;\nwidth: 60px;\nheight: 30px;\noutline: none;\nborder-radius: 30px;\nborder-size: 10px;\nborder-color: ', ';\nposition: relative;\nfont-size: 20px;\nmargin-bottom: 20px;\n'], ['\nbackground-color: blue;\nwidth: 60px;\nheight: 30px;\noutline: none;\nborder-radius: 30px;\nborder-size: 10px;\nborder-color: ', ';\nposition: relative;\nfont-size: 20px;\nmargin-bottom: 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nbackground-color: blue;\nwidth: 200px;\nheight: 50px;\noutline: none;\nborder-radius: 30px;\nbackground-color: ', ';\nbox-shadow: 2px 4px ', ';\nposition: relative;\nfont-size: 20px;\nmargin-top: 20px;\nmargin-left: 100px;\ncolor: ', ';\n'], ['\nbackground-color: blue;\nwidth: 200px;\nheight: 50px;\noutline: none;\nborder-radius: 30px;\nbackground-color: ', ';\nbox-shadow: 2px 4px ', ';\nposition: relative;\nfont-size: 20px;\nmargin-top: 20px;\nmargin-left: 100px;\ncolor: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nbackground-color: ', ';\nwidth:30px;\nheight: 28px;\nmargin: 0 auto;\nposition: absolute;\nborder-radius: 30px;\ntop:0; \nleft:', ';\nright: ', ';\ntext-align: center;\ntransition: left,right 44ms ease-in;\n'], ['\nbackground-color: ', ';\nwidth:30px;\nheight: 28px;\nmargin: 0 auto;\nposition: absolute;\nborder-radius: 30px;\ntop:0; \nleft:', ';\nright: ', ';\ntext-align: center;\ntransition: left,right 44ms ease-in;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\nposition: relative\nwidth:100%;\nheight: 100%;\nbackground-color: ', ';\nbox-sizing: border-box;\nz-index: 1;\n'], ['\nposition: relative\nwidth:100%;\nheight: 100%;\nbackground-color: ', ';\nbox-sizing: border-box;\nz-index: 1;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\nposition: absolute;\ntop:50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nmax-width:500px;\n'], ['\nposition: absolute;\ntop:50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nmax-width:500px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\ncolor: ', ';\nbackground-color: ', ';\nmax-width: 400px;\nbox-shadow: 5px 10px ', ';\nfont-size: 30px;\npadding: 12px;\nfont-family: Mali;\ntext-align: center;\n'], ['\ncolor: ', ';\nbackground-color: ', ';\nmax-width: 400px;\nbox-shadow: 5px 10px ', ';\nfont-size: 30px;\npadding: 12px;\nfont-family: Mali;\ntext-align: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

export var ToggleThemeButton = styled.button(_templateObject, function (props) {
  return props.theme.name == 'light' ? 'black' : 'yellow';
});

export var CrackJokeButton = styled.button(_templateObject2, function (props) {
  return props.theme.cardColor;
}, function (props) {
  return props.theme.cardShadow;
}, function (props) {
  return props.theme.color;
});

export var ToggleIcon = styled.span(_templateObject3, function (props) {
  return props.theme.name === 'light' ? 'white' : 'black';
}, function (props) {
  return props.theme.name === 'light' ? 0 : "auto";
}, function (props) {
  return props.theme.name === 'light' ? "auto" : 0;
});

var RootContainer = styled.div(_templateObject4, function (props) {
  return props.theme.backgroundColor;
});

export var Wrapper = styled.div(_templateObject5);

export var JokeCardComponent = styled.div(_templateObject6, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.cardColor;
}, function (props) {
  return props.theme.cardShadow;
});