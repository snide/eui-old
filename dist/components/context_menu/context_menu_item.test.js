'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _required_props = require('../../test/required_props');

var _context_menu_item = require('./context_menu_item');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('KuiContextMenuItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react2.default.createElement(_context_menu_item.KuiContextMenuItem, _required_props.requiredProps));

    expect(component).toMatchSnapshot();
  });
});