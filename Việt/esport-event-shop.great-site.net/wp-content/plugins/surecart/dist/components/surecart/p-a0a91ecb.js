let n = [],
    t = [];

function e(r) {
    return n.filter((e => e.name === r))[0]
}

function o(e, o) {
    r(e), n.push({
        name: e,
        resolver: o.resolver,
        mutator: o.mutator
    }), t.map((r => {
        r.library === e && r.redraw()
    }))
}

function r(r) {
    n = n.filter((e => e.name !== r))
}
window.ceRegisterIconLibrary = o;
export {
    e as g, o as r
};