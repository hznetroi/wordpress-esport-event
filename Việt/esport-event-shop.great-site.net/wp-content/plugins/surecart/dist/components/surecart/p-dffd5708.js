import {
    r as o
} from "./p-a0a91ecb.js";
const i = (i = "") => {
    var n, d, r;
    if (i || (null === (n = null === window || void 0 === window ? void 0 : window.scIcons) || void 0 === n ? void 0 : n.path) || (null === (r = null === (d = null === window || void 0 === window ? void 0 : window.parent) || void 0 === d ? void 0 : d.scIcons) || void 0 === r ? void 0 : r.path)) return o("default", {
        resolver: function(o) {
            var n, d, r;
            const w = i || (null === (d = null === (n = null === window || void 0 === window ? void 0 : window.parent) || void 0 === n ? void 0 : n.scIcons) || void 0 === d ? void 0 : d.path) || (null === (r = null === window || void 0 === window ? void 0 : window.scIcons) || void 0 === r ? void 0 : r.path);
            return `${null==w?void 0:w.replace(/\/$/,"")}/${o}.svg`
        },
        mutator: function(o) {
            return o.setAttribute("fill", "none")
        }
    })
};
window.registerSureCartIconPath = i, window.registerSureCartIconLibrary = o, i();