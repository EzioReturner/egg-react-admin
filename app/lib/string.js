'use strict';

/**
 * 字符串工具类
 */
module.exports = {
  random: num => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < num; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },
  format: (v, args) => v.replace(/\{(\d+)\}/g, (m, i) => args[i])
};
