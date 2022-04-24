window.extension_ctrl = (function () {
  // 原型
  var pt = extension_ctrl.prototype;
  /**
   * 默认选项
   * @attribute defaults
   * @private
   */
  pt.defaults = {};
  /**
   * Model数据
   * @attribute m
   * @private
   */
  var ptm = {};
  pt.m = ptm;

  // 元素
  var ptv = {
    btns: document.querySelectorAll('.btn')
  };
  pt.v = ptv;


  /**
   * @class c 构造方法
   * @varructor
   * @param {Object} options 参数
   */
  function extension_ctrl(options) {
    /** 初始化 */
    pt.Init();
    return this;
  }

  /**
   * 初始化
   * @method init
   */
  pt.Init = function () {
    // 数据
    initData.init();
    event.init();
  };
  /**
   * 数据 Data
   * @method init
   */
  var initData = {
    init: function () {
    },
  }

  var event = {
    init: function () {
      event.btns();
    },
    btns: function () {
      const kv = { left: 37, top: 38, right: 39, down: 40 }
      //
      for (let btn of ptv.btns) {
        btn.onclick = function (e) {
          // 类名
          const cls = e.target.className.replace(' btn', '')
          console.log(cls)
          document.onkeydown({ keyCode: kv[cls] })
        }
      }
    }
  }

  /** 逻辑函数处理 */
  var fn = {}
  pt.fn = fn;
  return extension_ctrl;
})();

// 构建
var extension_ctrl_n = new extension_ctrl();
