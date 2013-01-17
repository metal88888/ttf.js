/**
 * @license Released under the MIT license.
 *
 * <pre>
 * Copyright (c) 2013 ynakajima <yuhta.nakajima@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * </pre>
 *
 * @fileoverview ttfjs core functions.
 * @author yuhta.nakajima@gmail.com (ynakajima)
 */

/** @namespace */
if (!ttfjs) { var ttfjs = {}; }

(function(global, ttfjs) {

  // require
  var jDataView = (typeof global.jDataView === 'undefined') ?
    require('../vendor/jdataview') :
    global.jDataView;

  /**
   * Parse Font Binary
   * @param {(ArrayBuffer| Buffer)} buffer Font file buffer.
   * @return {ttfjs.Font} ttfjs.Font Object.
   */
  ttfjs.parseFont = function(buffer) {
    // TODO(ynakajima): Implement this.
  };

  /**
   * Load FontFile
   * @param {(string|File)} fontfile File path or HTML File Object.
   * @param {function} callback Callback function.
   */
  ttfjs.loadFontFile = function(fontfile) {
    // TODO(ynakajima): Implement this.
  };

  // exports
  if (typeof module !== 'undefined') {
    module.exports = ttfjs;
  }

})(this, ttfjs);
