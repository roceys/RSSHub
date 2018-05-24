/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3a26bf203ae14916302c9f04e02eea80"
  },
  {
    "url": "assets/css/4.styles.31d0a1c1.css",
    "revision": "fee272cdc389bfeec26e04ea601768fb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.3bf7b918.js",
    "revision": "af35631174564ea55de4fa7e1cff2130"
  },
  {
    "url": "assets/js/1.05d989e0.js",
    "revision": "31ea00c46f3499694793d9e7eed649a4"
  },
  {
    "url": "assets/js/2.e0b7ec15.js",
    "revision": "8e72f6f47fe6c0404e4354184785e9dd"
  },
  {
    "url": "assets/js/3.9cd2e42f.js",
    "revision": "d2875196add7f50fd1ea8d2f6e34d300"
  },
  {
    "url": "assets/js/app.d32acb1e.js",
    "revision": "677d0e9f89db4e58322aef80181e016d"
  },
  {
    "url": "index.html",
    "revision": "074bff02dd63e1fe12a61f911c64cf32"
  },
  {
    "url": "install/index.html",
    "revision": "b495678f60a782b7d639f3dc77014f05"
  },
  {
    "url": "joinus/index.html",
    "revision": "982e17df16b3177ac939606b5ce4b4fc"
  },
  {
    "url": "support/index.html",
    "revision": "fa3f183be7c7534cd9f3e3f3b9c295e0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
