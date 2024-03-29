/** HTML5 Gallery - jQuery Image and Video Gallery Plugin
 * Copyright 2013 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://html5box.com
 * Version 2.5 
 */ (function () {
    for (var l = document.getElementsByTagName("script"), q = "", j = 0; j < l.length; j++) l[j].src && l[j].src.match(/html5gallery\.js/i) && (q = l[j].src.substr(0, l[j].src.lastIndexOf("/") + 1));
    if ("undefined" == typeof jQuery || 1.6 > parseFloat(/^\d\.\d+/i.exec(jQuery.fn.jquery))) {
        var l = document.getElementsByTagName("head")[0],
            n = document.createElement("script");
        n.setAttribute("type", "text/javascript");
        n.readyState ? n.onreadystatechange = function () {
            if ("loaded" == n.readyState || "complete" == n.readyState) n.onreadystatechange = null, loadHtml5Gallery(q)
        } : n.onload = function () {
            loadHtml5Gallery(q)
        };
        n.setAttribute("src", q + "jquery.js");
        l.appendChild(n)
    } else loadHtml5Gallery(q)
})();

function loadHtml5Gallery(l) {
    jQuery.easing.jswing = jQuery.easing.swing;
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (d, c, a, e, b) {
            return jQuery.easing[jQuery.easing.def](d, c, a, e, b)
        },
        easeInQuad: function (d, c, a, e, b) {
            return e * (c /= b) * c + a
        },
        easeOutQuad: function (d, c, a, e, b) {
            return -e * (c /= b) * (c - 2) + a
        },
        easeInOutQuad: function (d, c, a, e, b) {
            return 1 > (c /= b / 2) ? e / 2 * c * c + a : -e / 2 * (--c * (c - 2) - 1) + a
        },
        easeInCubic: function (d, c, a, e, b) {
            return e * (c /= b) * c * c + a
        },
        easeOutCubic: function (d, c, a, e, b) {
            return e * ((c = c / b - 1) * c * c + 1) + a
        },
        easeInOutCubic: function (d, c, a, e, b) {
            return 1 > (c /= b / 2) ? e / 2 * c * c * c + a : e / 2 * ((c -= 2) * c * c + 2) + a
        },
        easeInQuart: function (d, c, a, e, b) {
            return e * (c /= b) * c * c * c + a
        },
        easeOutQuart: function (d, c, a, e, b) {
            return -e * ((c = c / b - 1) * c * c * c - 1) + a
        },
        easeInOutQuart: function (d, c, a, e, b) {
            return 1 > (c /= b / 2) ? e / 2 * c * c * c * c + a : -e / 2 * ((c -= 2) * c * c * c - 2) + a
        },
        easeInQuint: function (d, c, a, e, b) {
            return e * (c /= b) * c * c * c * c + a
        },
        easeOutQuint: function (d, c, a, e, b) {
            return e * ((c = c / b - 1) * c * c * c * c + 1) + a
        },
        easeInOutQuint: function (d, c, a, e, b) {
            return 1 > (c /= b / 2) ? e / 2 * c * c * c * c * c + a : e / 2 * ((c -= 2) * c * c * c * c + 2) + a
        },
        easeInSine: function (d, c, a, e, b) {
            return -e * Math.cos(c / b * (Math.PI / 2)) + e + a
        },
        easeOutSine: function (d, c, a, e, b) {
            return e * Math.sin(c / b * (Math.PI / 2)) + a
        },
        easeInOutSine: function (d, c, a, e, b) {
            return -e / 2 * (Math.cos(Math.PI * c / b) - 1) + a
        },
        easeInExpo: function (d, c, a, e, b) {
            return 0 == c ? a : e * Math.pow(2, 10 * (c / b - 1)) + a
        },
        easeOutExpo: function (d, c, a, e, b) {
            return c == b ? a + e : e * (-Math.pow(2, -10 * c / b) + 1) + a
        },
        easeInOutExpo: function (d, c, a, e, b) {
            return 0 == c ? a : c == b ? a + e : 1 > (c /= b / 2) ? e / 2 * Math.pow(2, 10 * (c - 1)) + a : e / 2 * (-Math.pow(2, -10 * --c) + 2) + a
        },
        easeInCirc: function (d, c, a, e, b) {
            return -e * (Math.sqrt(1 - (c /= b) * c) - 1) + a
        },
        easeOutCirc: function (d, c, a, e, b) {
            return e * Math.sqrt(1 - (c = c / b - 1) * c) + a
        },
        easeInOutCirc: function (d, c, a, e, b) {
            return 1 > (c /= b / 2) ? -e / 2 * (Math.sqrt(1 - c * c) - 1) + a : e / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + a
        },
        easeInElastic: function (d, c, a, e, b) {
            d = 1.70158;
            var k = 0,
                h = e;
            if (0 == c) return a;
            if (1 == (c /= b)) return a + e;
            k || (k = 0.3 * b);
            h < Math.abs(e) ? (h = e, d = k / 4) : d = k / (2 * Math.PI) * Math.asin(e / h);
            return -(h * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * b - d) * 2 * Math.PI / k)) + a
        },
        easeOutElastic: function (d,
        c, a, e, b) {
            d = 1.70158;
            var k = 0,
                h = e;
            if (0 == c) return a;
            if (1 == (c /= b)) return a + e;
            k || (k = 0.3 * b);
            h < Math.abs(e) ? (h = e, d = k / 4) : d = k / (2 * Math.PI) * Math.asin(e / h);
            return h * Math.pow(2, -10 * c) * Math.sin((c * b - d) * 2 * Math.PI / k) + e + a
        },
        easeInOutElastic: function (d, c, a, e, b) {
            d = 1.70158;
            var k = 0,
                h = e;
            if (0 == c) return a;
            if (2 == (c /= b / 2)) return a + e;
            k || (k = b * 0.3 * 1.5);
            h < Math.abs(e) ? (h = e, d = k / 4) : d = k / (2 * Math.PI) * Math.asin(e / h);
            return 1 > c ? -0.5 * h * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * b - d) * 2 * Math.PI / k) + a : 0.5 * h * Math.pow(2, -10 * (c -= 1)) * Math.sin((c * b - d) * 2 * Math.PI / k) + e + a
        },
        easeInBack: function (d, c, a, e, b, k) {
            void 0 == k && (k = 1.70158);
            return e * (c /= b) * c * ((k + 1) * c - k) + a
        },
        easeOutBack: function (d, c, a, e, b, k) {
            void 0 == k && (k = 1.70158);
            return e * ((c = c / b - 1) * c * ((k + 1) * c + k) + 1) + a
        },
        easeInOutBack: function (d, c, a, e, b, k) {
            void 0 == k && (k = 1.70158);
            return 1 > (c /= b / 2) ? e / 2 * c * c * (((k *= 1.525) + 1) * c - k) + a : e / 2 * ((c -= 2) * c * (((k *= 1.525) + 1) * c + k) + 2) + a
        },
        easeInBounce: function (d, c, a, e, b) {
            return e - jQuery.easing.easeOutBounce(d, b - c, 0, e, b) + a
        },
        easeOutBounce: function (d, c, a, e, b) {
            return (c /= b) < 1 / 2.75 ? e * 7.5625 * c * c + a : c < 2 / 2.75 ? e * (7.5625 * (c -= 1.5 / 2.75) * c + 0.75) + a : c < 2.5 / 2.75 ? e * (7.5625 * (c -= 2.25 / 2.75) * c + 0.9375) + a : e * (7.5625 * (c -= 2.625 / 2.75) * c + 0.984375) + a
        },
        easeInOutBounce: function (d, c, a, e, b) {
            return c < b / 2 ? 0.5 * jQuery.easing.easeInBounce(d, 2 * c, 0, e, b) + a : 0.5 * jQuery.easing.easeOutBounce(d, 2 * c - b, 0, e, b) + 0.5 * e + a
        }
    });
    var q = jQuery;
    q.fn.touchSwipe = function (d) {
        var c = {
            swipeLeft: null,
            swipeRight: null
        };
        d && q.extend(c, d);
        return this.each(function () {
            function a(a) {
                var b = a.originalEvent;
                1 <= b.targetTouches.length ? h = b.targetTouches[0].pageX : d(a)
            }
            function e(a) {
                a.preventDefault();
                var b = a.originalEvent;
                1 <= b.targetTouches.length ? f = b.targetTouches[0].pageX : d(a)
            }
            function b(a) {
                0 < f && (f > h ? c.swipeRight && c.swipeRight.call() : c.swipeLeft && c.swipeLeft.call());
                d(a)
            }
            function d() {
                curY = f = h = -1
            }
            var h = -1,
                f = -1;
            try {
                q(this).bind("touchstart", a), q(this).bind("touchmove", e), q(this).bind("touchend", b), q(this).bind("touchcancel", d)
            } catch (v) {}
        })
    };
    var j = jQuery;
    j.fn.drag = function (d, c, a) {
        var e = "string" == typeof d ? d : "",
            b = j.isFunction(d) ? d : j.isFunction(c) ? c : null;
        0 !== e.indexOf("drag") && (e = "drag" + e);
        a = (d == b ? c : a) || {};
        return b ? this.bind(e, a, b) : this.trigger(e)
    };
    var n = j.event,
        r = n.special,
        g = null,
        g = r.drag = {
            defaults: {
                which: 1,
                distance: 0,
                not: ":input",
                handle: null,
                relative: !1,
                drop: !0,
                click: !1
            },
            datakey: "dragdata",
            livekey: "livedrag",
            add: function (d) {
                var c = j.data(this, g.datakey),
                    a = d.data || {};
                c.related += 1;
                !c.live && d.selector && (c.live = !0, n.add(this, "draginit." + g.livekey, g.delegate));
                j.each(g.defaults, function (e) {
                    void 0 !== a[e] && (c[e] = a[e])
                })
            },
            remove: function () {
                j.data(this, g.datakey).related -= 1
            },
            setup: function () {
                if (!j.data(this,
                g.datakey)) {
                    var d = j.extend({
                        related: 0
                    }, g.defaults);
                    j.data(this, g.datakey, d);
                    n.add(this, "mousedown", g.init, d);
                    this.attachEvent && this.attachEvent("ondragstart", g.dontstart)
                }
            },
            teardown: function () {
                j.data(this, g.datakey).related || (j.removeData(this, g.datakey), n.remove(this, "mousedown", g.init), n.remove(this, "draginit", g.delegate), g.textselect(!0), this.detachEvent && this.detachEvent("ondragstart", g.dontstart))
            },
            init: function (d) {
                var c = d.data,
                    a;
                if (!(0 < c.which && d.which != c.which) && !j(d.target).is(c.not) && (!c.handle || j(d.target).closest(c.handle, d.currentTarget).length)) if (c.propagates = 1, c.interactions = [g.interaction(this, c)], c.target = d.target, c.pageX = d.pageX, c.pageY = d.pageY, c.dragging = null, a = g.hijack(d, "draginit", c), c.propagates) {
                    if ((a = g.flatten(a)) && a.length) c.interactions = [], j.each(a, function () {
                        c.interactions.push(g.interaction(this, c))
                    });
                    c.propagates = c.interactions.length;
                    !1 !== c.drop && r.drop && r.drop.handler(d, c);
                    g.textselect(!1);
                    n.add(document, "mousemove mouseup", g.handler, c);
                    return !1
                }
            },
            interaction: function (d,
            c) {
                return {
                    drag: d,
                    callback: new g.callback,
                    droppable: [],
                    offset: j(d)[c.relative ? "position" : "offset"]() || {
                        top: 0,
                        left: 0
                    }
                }
            },
            handler: function (d) {
                var c = d.data;
                switch (d.type) {
                    case !c.dragging && "mousemove":
                        if (Math.pow(d.pageX - c.pageX, 2) + Math.pow(d.pageY - c.pageY, 2) < Math.pow(c.distance, 2)) break;
                        d.target = c.target;
                        g.hijack(d, "dragstart", c);
                        c.propagates && (c.dragging = !0);
                    case "mousemove":
                        if (c.dragging) {
                            g.hijack(d, "drag", c);
                            if (c.propagates) {
                                !1 !== c.drop && r.drop && r.drop.handler(d, c);
                                break
                            }
                            d.type = "mouseup"
                        }
                    case "mouseup":
                        n.remove(document,
                            "mousemove mouseup", g.handler), c.dragging && (!1 !== c.drop && r.drop && r.drop.handler(d, c), g.hijack(d, "dragend", c)), g.textselect(!0), !1 === c.click && c.dragging && (jQuery.event.triggered = !0, setTimeout(function () {
                            jQuery.event.triggered = !1
                        }, 20), c.dragging = !1)
                }
            },
            delegate: function (d) {
                var c = [],
                    a, e = j.data(this, "events") || {};
                j.each(e.live || [], function (b, e) {
                    if (0 === e.preType.indexOf("drag") && (a = j(d.target).closest(e.selector, d.currentTarget)[0])) n.add(a, e.origType + "." + g.livekey, e.origHandler, e.data), 0 > j.inArray(a, c) && c.push(a)
                });
                return !c.length ? !1 : j(c).bind("dragend." + g.livekey, function () {
                    n.remove(this, "." + g.livekey)
                })
            },
            hijack: function (d, c, a, e, b) {
                if (a) {
                    var k = d.originalEvent,
                        h = d.type,
                        f = c.indexOf("drop") ? "drag" : "drop",
                        m, s = e || 0,
                        p, l;
                    e = !isNaN(e) ? e : a.interactions.length;
                    d.type = c;
                    d.originalEvent = null;
                    a.results = [];
                    do if ((p = a.interactions[s]) && !("dragend" !== c && p.cancelled)) l = g.properties(d, a, p), p.results = [], j(b || p[f] || a.droppable).each(function (b, e) {
                        m = (l.target = e) ? n.handle.call(e, d, l) : null;
                        !1 === m ? ("drag" == f && (p.cancelled = !0, a.propagates -= 1), "drop" == c && (p[f][b] = null)) : "dropinit" == c && p.droppable.push(g.element(m) || e);
                        "dragstart" == c && (p.proxy = j(g.element(m) || p.drag)[0]);
                        p.results.push(m);
                        delete d.result;
                        if ("dropinit" !== c) return m
                    }), a.results[s] = g.flatten(p.results), "dropinit" == c && (p.droppable = g.flatten(p.droppable)), "dragstart" == c && !p.cancelled && l.update();
                    while (++s < e);
                    d.type = h;
                    d.originalEvent = k;
                    return g.flatten(a.results)
                }
            },
            properties: function (d, c, a) {
                var e = a.callback;
                e.drag = a.drag;
                e.proxy = a.proxy || a.drag;
                e.startX = c.pageX;
                e.startY = c.pageY;
                e.deltaX = d.pageX - c.pageX;
                e.deltaY = d.pageY - c.pageY;
                e.originalX = a.offset.left;
                e.originalY = a.offset.top;
                e.offsetX = d.pageX - (c.pageX - e.originalX);
                e.offsetY = d.pageY - (c.pageY - e.originalY);
                e.drop = g.flatten((a.drop || []).slice());
                e.available = g.flatten((a.droppable || []).slice());
                return e
            },
            element: function (d) {
                if (d && (d.jquery || 1 == d.nodeType)) return d
            },
            flatten: function (d) {
                return j.map(d, function (d) {
                    return d && d.jquery ? j.makeArray(d) : d && d.length ? g.flatten(d) : d
                })
            },
            textselect: function (d) {
                j(document)[d ?
                    "unbind" : "bind"]("selectstart", g.dontstart).attr("unselectable", d ? "off" : "on").css("MozUserSelect", d ? "" : "none")
            },
            dontstart: function () {
                return !1
            },
            callback: function () {}
        };
    g.callback.prototype = {
        update: function () {
            r.drop && this.available.length && j.each(this.available, function (d) {
                r.drop.locate(this, d)
            })
        }
    };
    r.draginit = r.dragstart = r.dragend = g;
    var t = jQuery;
    t.fn.html5boxTransition = function (d, c, a, e, b) {
        $parent = this;
        d = e.effect;
        var k = e.easing,
            h = e.duration,
            f = e.direction,
            m = null;
        d && (d = d.split(","), m = d[Math.floor(Math.random() * d.length)], m = t.trim(m.toLowerCase()));
        m && e[m] && (e[m].duration && (h = e[m].duration), e[m].easing && (k = e[m].easing));
        "fade" == m ? (a.show(), c.fadeOut(h, k, function () {
            c.remove();
            b()
        })) : "crossfade" == m || "fadeout" == m ? (a.hide(), c.fadeOut(h / 2, k, function () {
            a.fadeIn(h / 2, k, function () {
                c.remove();
                b()
            })
        })) : "slide" == m ? ($parent.css({
            overflow: "hidden"
        }), f ? (a.css({
            left: "100%"
        }), a.animate({
            left: "0%"
        }, h, k), c.animate({
            left: "-100%"
        }, h, k, function () {
            c.remove();
            b()
        })) : (a.css({
            left: "-100%"
        }), a.animate({
            left: "0%"
        }, h, k), c.animate({
            left: "100%"
        },
        h, k, function () {
            c.remove();
            b()
        }))) : (a.show(), c.remove(), b())
    };
    var d = jQuery,
        u = 0;
    d.fn.html5gallery = function (g) {
        var c = function (a, d, b) {
            this.container = a;
            this.options = d;
            this.id = b;
            this.options.googlefonts && 0 < this.options.googlefonts.length && (a = ("https:" == document.location.protocol ? "https" : "http") + "://fonts.googleapis.com/css?family=" + this.options.googlefonts, d = document.createElement("link"), d.setAttribute("rel", "stylesheet"), d.setAttribute("type", "text/css"), d.setAttribute("href", a), document.getElementsByTagName("head")[0].appendChild(d));
            this.options.flashInstalled = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (this.options.flashInstalled = !0)
            } catch (c) {
                navigator.mimeTypes["application/x-shockwave-flash"] && (this.options.flashInstalled = !0)
            }
            this.options.html5VideoSupported = !! document.createElement("video").canPlayType;
            this.options.isChrome = null != navigator.userAgent.match(/Chrome/i);
            this.options.isFirefox = null != navigator.userAgent.match(/Firefox/i);
            this.options.isOpera = null != navigator.userAgent.match(/Opera/i);
            this.options.isSafari = null != navigator.userAgent.match(/Safari/i);
            this.options.isIE = null != navigator.userAgent.match(/MSIE/i) && !this.options.isOpera;
            this.options.isIE9 = this.options.isIE && this.options.html5VideoSupported;
            this.options.isIE678 = this.options.isIE && !this.options.html5VideoSupported;
            this.options.isIE7 = null != navigator.userAgent.match(/MSIE 7/i) && !this.options.isOpera;
            this.options.isIE6 = null != navigator.userAgent.match(/MSIE 6/i) && !this.options.isOpera;
            this.options.isAndroid = null != navigator.userAgent.match(/Android/i);
            this.options.isIPad = null != navigator.userAgent.match(/iPad/i);
            this.options.isIPhone = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i);
            this.options.isMobile = this.options.isAndroid || this.options.isIPad || this.options.isIPhone;
            this.slideTimer = this.slideshowTimeout = null;
            this.slideTimerCount = 0;
            this.elemArray = [];
            this.container.children().hide();
            this.container.css({
                display: "block",
                position: "relative"
            });
            this.initData(this.init)
        };
        c.prototype = {
            getParams: function () {
                for (var a = {}, d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
                    var c = d[b].split("=");
                    c && 2 == c.length && (a[c[0].toLowerCase()] = unescape(c[1]))
                }
                return a
            },
            init: function (a) {
                a.initYoutubeApi();
                a.options.showcarousel = 1 < a.elemArray.length && a.options.showcarousel;
                a.options.watermarkcode = a.options.freeversion ? "<a style='text-decoration:none;' target='_blank' href='" + a.options.freelink + "' >" : "";
                a.options.watermarkcode += "<div class='html5gallery-watermark-" + a.id + "'" + (a.options.freeversion ? " style='line-height:20px;'" :
                    "") + ">";
                a.options.freeversion ? a.options.watermarkcode += a.options.freemark : 0 < a.options.watermark.length && (a.options.watermarkcode += "<img src='" + a.options.watermark + "' />");
                a.options.watermarkcode += "</div>";
                a.options.watermarkcode += a.options.freeversion ? "</a>" : "";
                a.createStyle();
                a.createMarkup();
                a.createImageToolbox();
                if (!(0 >= a.elemArray.length)) {
                    a.createEvents();
                    a.loadCarousel();
                    a.savedElem = -1;
                    a.curElem = -1;
                    a.nextElem = -1;
                    a.prevElem = -1;
                    a.isPaused = !a.options.autoslide;
                    a.isFullscreen = !1;
                    var d = a.getParams();
                    a.slideRun(d.html5galleryid && d.html5galleryid in a.elemArray ? d.html5galleryid : 0)
                }
            },
            initData: function (a) {
                if (this.options.src && 0 < this.options.src.length) this.elemArray.push([0, "", this.options.src, this.options.webm, this.options.ogg, "", "", this.options.title ? this.options.title : "", this.options.title ? this.options.title : "", this.checkType(this.options.src), this.options.width, this.options.height]), this.readTags(), a(this);
                else if (this.options.xml && 0 < this.options.xml.length) {
                    this.options.xmlnocache && (this.options.xml += 0 > this.options.xml.indexOf("?") ? "?" : "&", this.options.xml += Math.random());
                    var e = this;
                    d.ajax({
                        type: "GET",
                        url: this.options.xml,
                        dataType: "xml",
                        success: function (b) {
                            d(b).find("slide").each(function (a) {
                                e.elemArray.push([d(this).find("id").length ? d(this).find("id").text() : a, d(this).find("thumbnail").text(), d(this).find("file").text(), d(this).find("file-ogg").text(), d(this).find("file-webm").text(), d(this).find("link").text(), d(this).find("linktarget").text(), d(this).find("title").text(), d(this).find("information").length && 0 < d(this).find("information").text().length ? d(this).find("information").text() : d(this).find("title").text(), e.checkType(d(this).find("file").text()), d(this).find("width").length && !isNaN(parseInt(d(this).find("width").text())) ? parseInt(d(this).find("width").text()) : e.options.width, d(this).find("height").length && !isNaN(parseInt(d(this).find("height").text())) ? parseInt(d(this).find("height").text()) : e.options.height])
                            });
                            e.readTags();
                            a(e)
                        }
                    })
                } else this.readTags(), a(this)
            },
            readTags: function () {
                var a = this;
                d("img", this.container).each(function () {
                    var e = d(this).attr("src"),
                        b = d(this).attr("alt"),
                        c = d(this).data("information") && 0 < d(this).data("information").length ? d(this).data("information") : b,
                        h = a.options.width,
                        f = a.options.height,
                        m = null,
                        g = null,
                        j = null,
                        l = null;
                    d(this).parent().is("a") && (e = d(this).parent().attr("href"), m = d(this).parent().data("ogg"), g = d(this).parent().data("webm"), j = d(this).parent().data("link"), l = d(this).parent().data("linktarget"), isNaN(d(this).parent().data("width")) || (h = d(this).parent().data("width")),
                    isNaN(d(this).parent().data("height")) || (f = d(this).parent().data("height")));
                    a.elemArray.push([a.elemArray.length, d(this).attr("src"), e, m, g, j, l, b, c, a.checkType(e), h, f])
                })
            },
            createMarkup: function () {
                this.$gallery = jQuery("<div class='html5gallery-container-" + this.id + "'><div class='html5gallery-box-" + this.id + "'><div class='html5gallery-elem-" + this.id + "'></div><div class='html5gallery-title-" + this.id + "'></div><div class='html5gallery-timer-" + this.id + "'></div><div class='html5gallery-viral-" + this.id + "'></div><div class='html5gallery-toolbox-" + this.id + "'><div class='html5gallery-toolbox-bg-" + this.id + "'></div><div class='html5gallery-toolbox-buttons-" + this.id + "'><div class='html5gallery-play-" + this.id + "'></div><div class='html5gallery-pause-" + this.id + "'></div><div class='html5gallery-left-" + this.id + "'></div><div class='html5gallery-right-" + this.id + "'></div><div class='html5gallery-lightbox-" + this.id + "'></div></div></div></div><div class='html5gallery-car-" + this.id + "'><div class='html5gallery-car-list-" + this.id + "'><div class='html5gallery-car-mask-" + this.id + "'><div class='html5gallery-thumbs-" + this.id + "'></div></div><div class='html5gallery-car-slider-bar-" + this.id + "'><div class='html5gallery-car-slider-bar-top-" + this.id + "'></div><div class='html5gallery-car-slider-bar-middle-" + this.id + "'></div><div class='html5gallery-car-slider-bar-bottom-" + this.id + "'></div></div><div class='html5gallery-car-left-" + this.id + "'></div><div class='html5gallery-car-right-" + this.id + "'></div><div class='html5gallery-car-slider-" + this.id + "'></div></div></div></div>");
                this.$gallery.appendTo(this.container);
                this.options.socialurlforeach || this.createSocialMedia();
                this.options.googleanalyticsaccount && !window._gaq && (window._gaq = window._gaq || [], window._gaq.push(["_setAccount", this.options.googleanalyticsaccount]), window._gaq.push(["_trackPageview"]), d.getScript(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js"))
            },
            createSocialMedia: function () {
                d(".html5gallery-viral-" + this.id, this.$gallery).empty();
                var a = window.location.href;
                this.options.socialurlforeach && (a += (0 > window.location.href.indexOf("?") ? "?" : "&") + "html5galleryid=" + this.elemArray[this.curElem][0]);
                if (this.options.showsocialmedia && this.options.showfacebooklike) {
                    var e = "<div style='display:block; float:left; width:110px; height:21px;'><iframe src='http://www.facebook.com/plugins/like.php?href=",
                        e = this.options.facebooklikeurl && 0 < this.options.facebooklikeurl.length ? e + encodeURIComponent(this.options.facebooklikeurl) : e + a;
                    d(".html5gallery-viral-" + this.id, this.$gallery).append(e +
                        "&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21' scrolling='no' frameborder='0' style='border:none;;overflow:hidden; width:110px; height:21px;' allowTransparency='true'></iframe></div>")
                }
                this.options.showsocialmedia && this.options.showtwitter && (e = "<div style='display:block; float:left; width:110px; height:21px;'><a href='https://twitter.com/share' class='twitter-share-button'", e = this.options.twitterurl && 0 < this.options.twitterurl.length ? e + (" data-url='" + this.options.twitterurl + "'") : e + (" data-url='" + a + "'"), this.options.twitterusername && 0 < this.options.twitterusername.length && (e += " data-via='" + this.options.twittervia + "' data-related='" + this.options.twitterusername + "'"), d(".html5gallery-viral-" + this.id, this.$gallery).append(e + ">Tweet</a></div>"), d.getScript("http://platform.twitter.com/widgets.js"));
                this.options.showsocialmedia && this.options.showgoogleplus && (e = "<div style='display:block; float:left; width:100px; height:21px;'><div class='g-plusone' data-size='medium'",
                e = this.options.googleplusurl && 0 < this.options.googleplusurl.length ? e + (" data-href='" + this.options.googleplusurl + "'") : e + (" data-href='" + a + "'"), d(".html5gallery-viral-" + this.id, this.$gallery).append(e + "></div></div>"), d.getScript("https://apis.google.com/js/plusone.js"))
            },
            createEvents: function () {
                var a = this;
                d(".html5gallery-play-" + this.id, this.$gallery).click(function () {
                    d(".html5gallery-play-" + a.id, a.$gallery).hide();
                    d(".html5gallery-pause-" + a.id, a.$gallery).show();
                    a.isPaused = !1;
                    a.slideshowTimeout = setTimeout(function () {
                        a.slideRun(-1)
                    },
                    a.options.slideshowinterval);
                    d(".html5gallery-timer-" + a.id, a.$gallery).css({
                        width: 0
                    });
                    a.slideTimerCount = 0;
                    a.options.showtimer && (a.slideTimer = setInterval(function () {
                        a.showSlideTimer()
                    }, 50))
                });
                d(".html5gallery-pause-" + this.id, this.$gallery).click(function () {
                    d(".html5gallery-play-" + a.id, a.$gallery).show();
                    d(".html5gallery-pause-" + a.id, a.$gallery).hide();
                    a.isPaused = !0;
                    clearTimeout(a.slideshowTimeout);
                    d(".html5gallery-timer-" + a.id, a.$gallery).css({
                        width: 0
                    });
                    clearInterval(a.slideTimer);
                    a.slideTimerCount = 0
                });
                d(".html5gallery-lightbox-" + this.id, this.$gallery).click(function () {
                    a.goFullscreen()
                });
                d(".html5gallery-left-" + this.id, this.$gallery).click(function () {
                    a.slideRun(-2, !0)
                });
                d(".html5gallery-right-" + this.id, this.$gallery).click(function () {
                    a.slideRun(-1, !0)
                });
                d(".html5gallery-box-" + this.id, this.$gallery).touchSwipe({
                    swipeLeft: function () {
                        a.slideRun(-1, !0)
                    },
                    swipeRight: function () {
                        a.slideRun(-2, !0)
                    }
                });
                d(".html5gallery-box-" + this.id, this.$gallery).hover(function () {
                    a.onSlideshowOver();
                    var d = a.elemArray[a.curElem][9];
                    ("always" == a.options.showimagetoolbox || "image" == a.options.showimagetoolbox && 1 == d) && a.showimagetoolbox(d)
                }, function () {
                    a.hideimagetoolbox()
                });
                d(".html5gallery-container-" + this.id).hover(function () {
                    a.options.titleoverlay && a.options.titleautohide && d(".html5gallery-title-" + a.id, a.$gallery).fadeIn()
                }, function () {
                    a.options.titleoverlay && a.options.titleautohide && d(".html5gallery-title-" + a.id, a.$gallery).fadeOut()
                });
                d(".html5gallery-car-left-" + this.id, this.$gallery).css({
                    "background-position": "0px 0px"
                });
                d(".html5gallery-car-right-" + this.id, this.$gallery).css({
                    "background-position": "0px 0px"
                });
                d(".html5gallery-car-left-" + this.id, this.$gallery).click(function () {
                    a.carouselPrev()
                });
                d(".html5gallery-car-right-" + this.id, this.$gallery).click(function () {
                    a.carouselNext()
                });
                d(".html5gallery-car-slider-" + this.id, this.$gallery).bind("drag", function (d, b) {
                    a.carouselSliderDrag(d, b)
                });
                d(".html5gallery-car-slider-bar-" + this.id, this.$gallery).click(function (d) {
                    a.carouselBarClicked(d)
                });
                d(".html5gallery-car-left-" + this.id, this.$gallery).hover(function () {
                    d(this).css({
                        "background-position": "-32px 0px"
                    })
                },

                function () {
                    d(this).css({
                        "background-position": "0px 0px"
                    })
                });
                d(".html5gallery-car-right-" + this.id, this.$gallery).hover(function () {
                    d(this).css({
                        "background-position": "-32px 0px"
                    })
                }, function () {
                    d(this).css({
                        "background-position": "0px 0px"
                    })
                })
            },
            createStyle: function () {
                switch (this.options.skin) {
                    case "vertical":
                        this.createStyleVertical();
                        break;
                    default:
                        this.createStyleDefault()
                }
            },
            createStyleVertical: function () {
                this.options.thumbimageborder = 1;
                this.options.thumbimagewidth = this.options.thumbheight - 8;
                this.options.thumbimageheight = this.options.thumbheight - 8;
                this.options.isIE && 2 > this.options.thumbimageborder && (this.options.thumbimageborder = 0);
                this.options.showtitle || (this.options.titleheight = 0);
                if (!this.options.showsocialmedia || !this.options.showfacebooklike && !this.options.showtwitter && !this.options.showgoogleplus) this.options.socialheight = 0;
                this.options.headerHeight = this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight;
                this.options.boxWidth = this.options.width;
                this.options.boxHeight = this.options.height + this.options.headerHeight;
                this.options.boxLeft = this.options.padding;
                this.options.boxTop = this.options.padding;
                this.options.showcarousel ? (this.options.carouselWidth = this.options.thumbwidth, this.options.carouselHeight = this.options.height + this.options.headerHeight, this.options.carTop = 0, this.options.carBottom = 0, this.options.carAreaLength = this.options.carouselHeight - this.options.carTop - this.options.carBottom, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.carouselSlider && (this.options.carouselWidth += 20), "left" == this.options.carouselposition ? (this.options.boxLeft = this.options.padding + this.options.carouselWidth + this.options.carouselmargin, this.options.carouselLeft = this.options.padding) : this.options.carouselLeft = this.options.padding + this.options.width + this.options.carouselmargin, this.options.carouselTop = this.options.padding) : (this.options.carouselWidth = 0, this.options.carouselHeight = 0, this.options.carouselLeft = 0, this.options.carouselTop = 0, this.options.carouselmargin = 0);
                this.options.totalWidth = this.options.width + this.options.carouselWidth + this.options.carouselmargin + 2 * this.options.padding;
                this.options.totalHeight = this.options.height + this.options.headerHeight + 2 * this.options.padding;
                this.options.containerWidth = this.options.totalWidth;
                this.options.containerHeight = this.options.totalHeight;
                this.container.css({
                    width: this.options.containerWidth,
                    height: this.options.containerHeight
                });
                var a = 0,
                    e = 0;
                this.options.elemTop = 0;
                "top" == this.options.headerpos ? (e = 0, a = this.options.socialheight, this.options.elemTop = this.options.headerHeight) : "bottom" == this.options.headerpos && (this.options.elemTop = 0, a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, e = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
                var b = " .html5gallery-container-" + this.id + " { display:block; position:absolute; left:0px; top:0px; width:" + this.options.totalWidth + "px; height:" + this.options.totalHeight + "px; background:url('" + this.options.skinfolder + this.options.bgimage + "') center top; background-color:" + this.options.bgcolor + ";}";
                this.options.galleryshadow && (b += " .html5gallery-container-" + this.id + " { }");
                var b = b + (" .html5gallery-box-" + this.id + " {display:block; position:absolute; text-align:center; left:" + this.options.boxLeft + "px; top:" + this.options.boxTop + "px; width:" + this.options.boxWidth +
                    "px; height:" + this.options.boxHeight + "px; }"),
                    c = Math.round(this.options.socialheight / 2 - 12),
                    b = b + (" .html5gallery-title-text-" + this.id + " " + this.options.titlecss + " .html5gallery-title-text-" + this.id + " " + this.options.titlecsslink + " .html5gallery-error-" + this.id + " " + this.options.errorcss),
                    b = b + (" .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencss + " .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencsslink),
                    b = b + (" .html5gallery-viral-" + this.id + " {display:block; overflow:hidden; position:absolute; text-align:left; top:" + e + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.socialheight + "px; padding-top:" + c + "px;}"),
                    b = b + (" .html5gallery-title-" + this.id + " {display:" + (this.options.titleoverlay && this.options.titleautohide ? "none" : "block") + "; overflow:hidden; position:absolute; top:" + a + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.titleheight + "px; line-height:" + this.options.titleheight + "px;}"),
                    b = b + (" .html5gallery-timer-" + this.id + " {display:block; position:absolute; top:" + String(this.options.elemTop + this.options.height - 2) + "px; left:0px; width:0px; height:2px; background-color:#ccc; filter:alpha(opacity=60); opacity:0.6; }"),
                    b = b + (" .html5gallery-elem-" + this.id + " {display:block; overflow:hidden; position:absolute; top:" + this.options.elemTop + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.height + "px;}");
                this.options.isIE7 || this.options.isIE6 ? (b += " .html5gallery-loading-" + this.id + " {display:none; }", b += " .html5gallery-loading-center-" + this.id + " {display:none; }") : (b += " .html5gallery-loading-" + this.id + " {display:block; position:absolute; top:4px; right:4px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading.gif') no-repeat top right;}", b += " .html5gallery-loading-center-" + this.id + " {display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading_center.gif') no-repeat center center;}");
                0 < this.options.borderradius && (b += " .html5gallery-elem-" + this.id + " { overflow:hidden; border-radius:" + this.options.borderradius +
                    "px; -moz-border-radius:" + this.options.borderradius + "px; -webkit-border-radius:" + this.options.borderradius + "px;}");
                this.options.slideshadow && (b += " .html5gallery-title-" + this.id + " { padding:4px;}", b += " .html5gallery-timer-" + this.id + " { margin:4px;}", b += " .html5gallery-elem-" + this.id + " { overflow:hidden; padding:0px; }");
                this.options.showcarousel ? (b += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; width:" + this.options.carouselWidth + "px; height:" + this.options.carouselHeight + "px; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; }", b += " .html5gallery-car-list-" + this.id + " { position:absolute; display:block; overflow:hidden; top:" + this.options.carTop + "px; height:" + String(this.options.carAreaLength) + "px; left:0px; width:" + this.options.carouselWidth + "px; }", b += ".html5gallery-thumbs-" + this.id + " {margin-top:0px; height:" + String(this.elemArray.length * (this.options.thumbheight + this.options.thumbgap)) +
                    "px;}", this.options.thumbShowNum = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)), this.options.thumbMaskHeight = this.options.thumbShowNum * this.options.thumbheight + (this.options.thumbShowNum - 1) * this.options.thumbgap, this.options.thumbTotalHeight = this.elemArray.length * this.options.thumbheight + (this.elemArray.length - 1) * this.options.thumbgap, this.options.carouselSlider && (this.options.carouselSliderMin = 0, this.options.carouselSliderMax = this.options.thumbMaskHeight - 54, b += " .html5gallery-car-slider-bar-" + this.id + " { position:absolute; display:block; overflow:hidden; top:0px; height:" + this.options.thumbMaskHeight + "px; left:" + String(this.options.thumbwidth + 6) + "px; width:14px;}", b += " .html5gallery-car-slider-bar-top-" + this.id + " { position:absolute; display:block; top:0px; left:0px; width:14px; height:16px; background:url('" + this.options.skinfolder + "bartop.png')}", b += " .html5gallery-car-slider-bar-middle-" + this.id + " { position:absolute; display:block; top:16px; left:0px; width:14px; height:" + String(this.options.thumbMaskHeight - 32) + "px; background:url('" + this.options.skinfolder + "bar.png')}", b += " .html5gallery-car-slider-bar-bottom-" + this.id + " { position:absolute; display:block; bottom:0px; left:0px; width:14px; height:16px; background:url('" + this.options.skinfolder + "barbottom.png')}", b = this.options.isMobile ? b + (" .html5gallery-car-left-" + this.id + " { position:absolute; display:block; cursor:pointer; overflow:hidden; width:16px; height:35px; left:" + String(this.options.thumbwidth + 5) + "px; top:0px; background:url('" + this.options.skinfolder + "slidertop.png')}  .html5gallery-car-right-" + this.id + " { position:absolute; display:block; cursor:pointer; overflow:hidden; width:16px; height:35px; left:" + String(this.options.thumbwidth + 5) + "px; top:" + String(this.options.thumbMaskHeight - 35) + "px; background:url('" + this.options.skinfolder + "sliderbottom.png')} ") : b + (" .html5gallery-car-slider-" + this.id + " { position:absolute; display:block; overflow:hidden; cursor:pointer; top:0px; height:54px; left:" + String(this.options.thumbwidth + 5) + "px; width:16px; background:url('" + this.options.skinfolder + "slider.png');}")), a = 0, this.options.carouselNavButton && (a = Math.round(this.options.carAreaLength / 2 - this.options.thumbMaskHeight / 2)), b += " .html5gallery-car-mask-" + this.id + " { position:absolute; display:block; overflow:hidden; top:" + a + "px; height:" + this.options.thumbMaskHeight + "px; left:0px; width:" + this.options.thumbwidth + "px;} ", a = this.options.thumbheight, this.options.isIE || (a = this.options.thumbheight - 2), b += " .html5gallery-tn-" + this.id +
                    " { display:block; margin-bottom:" + this.options.thumbgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + a + "px;overflow:hidden;", this.options.carouselbgtransparent ? b += "background-color:transparent;" : (this.options.isIE || (b += "border-top:1px solid " + this.options.carouseltopborder + "; border-bottom:1px solid " + this.options.carouselbottomborder + ";"), b += "background-color: " + this.options.carouselbgcolorend + "; background: " + this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart +
                    ", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), b = b + "}" + (" .html5gallery-tn-selected-" + this.id + " { display:block; margin-bottom:" + this.options.thumbgap + "px;text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + a + "px;overflow:hidden;"), this.options.carouselbgtransparent ? b += "background-color:transparent;" : (this.options.isIE || (b += "border-top:1px solid " + this.options.carouselhighlighttopborder + "; border-bottom:1px solid " + this.options.carouselhighlightbottomborder + ";"), b += "background-color: " + this.options.carouselhighlightbgcolorend + "; background: " + this.options.carouselhighlightbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselhighlightbgcolorstart + "), to(" + this.options.carouselhighlightbgcolorend + ")) no-repeat; background: " + this.options.carouselhighlightbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselhighlightbgcolorstart +
                    ", " + this.options.carouselhighlightbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselhighlightbgcolorstart + ", endColorstr=" + this.options.carouselhighlightbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselhighlightbgcolorstart + ", endColorstr=" + this.options.carouselhighlightbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), b += "}", b += " .html5gallery-tn-selected-" + this.id + " .html5gallery-tn-img-" + this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " img { filter:alpha(opacity=" + Math.round(100 * this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" + this.id + " img { filter:alpha(opacity=100); opacity:1; } ", a = this.options.thumbwidth - 3 * this.options.thumbmargin, this.options.thumbshowimage ? (a -= this.options.thumbimagewidth + 2 * this.options.thumbimageborder, e = this.options.thumbshowtitle ? this.options.thumbmargin : this.options.thumbwidth / 2 - (this.options.thumbimagewidth + 2 * this.options.thumbimageborder) / 2, c = Math.round((this.options.thumbheight - 2) / 2 - (this.options.thumbimageheight + 2 * this.options.thumbimageborder) / 2), b += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; float:left; margin-top:" + c + "px; margin-left:" + e + "px; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) +
                    "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px;}") : b += " .html5gallery-tn-img-" + this.id + " {display:none;}", this.options.thumbshowtitle ? (b += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; float:left; margin-top:0px; margin-left:" + this.options.thumbmargin + "px; width:" + a + "px;height:" + String(this.options.thumbheight - 2) + "px;line-height:" + String(this.options.thumbheight - 2) + "px;}", b += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss) : b += " .html5gallery-tn-title-" + this.id + " {display:none;}", this.carouselHighlight = function (a) {
                    d("#html5gallery-tn-" + this.id + "-" + a, this.$gallery).removeClass("html5gallery-tn-" + this.id).addClass("html5gallery-tn-selected-" + this.id);
                    if (!(this.options.thumbShowNum >= this.elemArray.length)) {
                        a = Math.floor(a / this.options.thumbShowNum) * this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
                        a >= this.options.thumbTotalHeight - this.options.thumbMaskHeight && (a = this.options.thumbTotalHeight - this.options.thumbMaskHeight);
                        var b = a / (this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight),
                            b = b * (this.options.carouselSliderMax - this.options.carouselSliderMin);
                        d(".html5gallery-car-slider-" + this.id, this.$gallery).stop(!0).animate({
                            top: b
                        }, 300);
                        d(".html5gallery-thumbs-" + this.id, this.$gallery).stop(!0).animate({
                            marginTop: -1 * a
                        }, 300)
                    }
                }, this.carouselBarClicked = function (a) {
                    var b = d(".html5gallery-thumbs-" + this.id, this.$gallery);
                    a.pageY > d(".html5gallery-car-slider-" + this.id, this.$gallery).offset().top ? (a = -1 * parseInt(b.css("margin-top")) + this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap), a >= this.options.thumbTotalHeight - this.options.thumbMaskHeight && (a = this.options.thumbTotalHeight - this.options.thumbMaskHeight)) : (a = -1 * parseInt(b.css("margin-top")) - this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap), 0 > a && (a = 0));
                    b.stop(!0).animate({
                        marginTop: -a
                    }, 500);
                    a = a * (this.options.carouselSliderMax - this.options.carouselSliderMin) / (this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight);
                    a < this.options.carouselSliderMin && (a = this.options.carouselSliderMin);
                    a > this.options.carouselSliderMax && (a = this.options.carouselSliderMax);
                    d(".html5gallery-car-slider-" + this.id, this.$gallery).stop(!0).animate({
                        top: a
                    }, 500)
                }, this.carouselSliderDrag = function (a, b) {
                    var e = b.offsetY - d(".html5gallery-car-slider-bar-" + this.id, this.$gallery).offset().top;
                    e < this.options.carouselSliderMin && (e = this.options.carouselSliderMin);
                    e > this.options.carouselSliderMax && (e = this.options.carouselSliderMax);
                    d(".html5gallery-car-slider-" + this.id, this.$gallery).css({
                        top: e
                    });
                    var c = this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight,
                        c = c * e / (this.options.carouselSliderMax - this.options.carouselSliderMin),
                        c = Math.round(c / (this.options.thumbheight + this.options.thumbgap)),
                        c = -1 * c * (this.options.thumbheight + this.options.thumbgap);
                    d(".html5gallery-thumbs-" + this.id, this.$gallery).stop(!0).animate({
                        marginTop: c
                    }, 300)
                }, this.carouselPrev = function () {
                    var a = d(".html5gallery-thumbs-" + this.id, this.$gallery);
                    if (0 == parseInt(a.css("margin-top"))) a.animate({
                        marginTop: "+=" + Math.round(this.options.thumbMaskHeight / 8) + "px"
                    }, 100).animate({
                        marginTop: 0
                    }, 500, "easeOutBounce");
                    else {
                        var b = -1 * parseInt(a.css("margin-top")) - this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
                        0 > b && (b = 0);
                        a.animate({
                            marginTop: -b
                        }, 500, this.options.carouseleasing)
                    }
                }, this.carouselNext = function () {
                    var a = d(".html5gallery-thumbs-" + this.id, this.$gallery);
                    if (parseInt(a.css("margin-top")) == -(this.options.thumbTotalHeight - this.options.thumbMaskHeight)) a.animate({
                        marginTop: "-=" + Math.round(this.options.thumbMaskHeight / 8) + "px"
                    }, 100).animate({
                        marginTop: -(this.options.thumbTotalHeight - this.options.thumbMaskHeight)
                    }, 500, "easeOutBounce");
                    else {
                        var b = -1 * parseInt(a.css("margin-top")) + this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
                        b >= this.options.thumbTotalHeight - this.options.thumbMaskHeight && (b = this.options.thumbTotalHeight - this.options.thumbMaskHeight);
                        a.animate({
                            marginTop: -b
                        },
                        500, this.options.carouseleasing)
                    }
                }) : b += " .html5gallery-car-" + this.id + " { display:none; }";
                b = this.options.freeversion ? b + (" .html5gallery-watermark-" + this.id + " {display:block; position:absolute; top:4px; left:4px; width:120px; text-align:center; border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; filter:alpha(opacity=60); opacity:0.6; background-color:#333333; color:#ffffff; font:12px Armata, sans-serif, Arial;}") : 0 < this.options.watermark.length ? b + (" .html5gallery-watermark-" + this.id +
                    " {display:block; position:absolute; top:0px; left:0px;}") : b + (" .html5gallery-watermark-" + this.id + " {display:none;}");
                d("head").append("<style type='text/css'>" + b + "</style>")
            },
            createImageToolbox: function () {
                1 >= this.elemArray.length && (this.options.showplaybutton = this.options.showprevbutton = this.options.shownextbutton = !1);
                if ("never" != this.options.showimagetoolbox) {
                    var a;
                    if ("center" == this.options.imagetoolboxstyle) a = " .html5gallery-toolbox-" + this.id + " {display:none; overflow:hidden; position:relative; margin:0px auto; text-align:center; height:40px;}",
                    a += " .html5gallery-toolbox-bg-" + this.id + " {display:block; left:0px; top:0px; width:100%; height:100%; position:absolute; filter:alpha(opacity=60); opacity:0.6; background-color:#222222; }", a += " .html5gallery-toolbox-buttons-" + this.id + " {display:block; margin:0px auto; height:100%;}", a += " .html5gallery-play-" + this.id + " { position:relative; float:left; display:none; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "play.png') no-repeat top left; } ", a += " .html5gallery-pause-" + this.id + " { position:relative; float:left; display:none; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "pause.png') no-repeat top left; } ", a += " .html5gallery-left-" + this.id + " { position:relative; float:left; display:none; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "prev.png') no-repeat top left; } ", a += " .html5gallery-right-" + this.id + " { position:relative; float:left; display:none; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "next.png') no-repeat top left; } ", a += " .html5gallery-lightbox-" + this.id + " {position:relative; float:left; display:none; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "lightbox.png') no-repeat top left; } ";
                    else {
                        var e = Math.round(("bottom" == this.options.headerpos ? 0 : this.options.headerHeight) + this.options.height / 2 - 24),
                            b = e + Math.round(this.options.height / 2) - 24,
                            c = this.options.width - 48,
                            h = this.options.showfullscreenbutton ? c - 48 : c;
                        a = " .html5gallery-toolbox-" + this.id + " {display:none;}";
                        a += " .html5gallery-toolbox-bg-" + this.id + " {display:none;}";
                        a += " .html5gallery-toolbox-buttons-" + this.id + " {display:block;}";
                        a +=
                            " .html5gallery-play-" + this.id + " { position:absolute; display:none; cursor:pointer; top:" + b + "px; left:" + h + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_play.png') no-repeat top left;} ";
                        a += " .html5gallery-pause-" + this.id + " { position:absolute; display:none; cursor:pointer; top:" + b + "px; left:" + h + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_pause.png') no-repeat top left;} ";
                        a += " .html5gallery-left-" + this.id + " { position:absolute; display:none; cursor:pointer; top:" + e + "px; left:0px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_prev.png') no-repeat center center;} ";
                        a += " .html5gallery-right-" + this.id + " { position:absolute; display:none; cursor:pointer; top:" + e + "px; left:" + c + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_next.png')  no-repeat center center;} ";
                        a += " .html5gallery-lightbox-" + this.id + " {position:absolute; display:none; cursor:pointer; top:" + b + "px; left:" + c + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_lightbox.png') no-repeat top left;} "
                    }
                    d(".html5gallery-play-" + this.id, this.$gallery).hover(function () {
                        d(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        d(this).css({
                            "background-position": "left top"
                        })
                    });
                    d(".html5gallery-pause-" + this.id, this.$gallery).hover(function () {
                        d(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        d(this).css({
                            "background-position": "left top"
                        })
                    });
                    d(".html5gallery-left-" + this.id, this.$gallery).hover(function () {
                        d(this).css({
                            "background-position": "right top"
                        })
                    },

                    function () {
                        d(this).css({
                            "background-position": "left top"
                        })
                    });
                    d(".html5gallery-right-" + this.id, this.$gallery).hover(function () {
                        d(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        d(this).css({
                            "background-position": "left top"
                        })
                    });
                    d(".html5gallery-lightbox-" + this.id, this.$gallery).hover(function () {
                        d(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        d(this).css({
                            "background-position": "left top"
                        })
                    });
                    d("head").append("<style type='text/css'>" + a + "</style>")
                }
                this.showimagetoolbox = function (a) {
                    if (this.options.showplaybutton || this.options.showprevbutton || this.options.shownextbutton || this.options.showfullscreenbutton) {
                        if ("center" == this.options.imagetoolboxstyle) {
                            var b = Math.round(("bottom" == this.options.headerpos ? 0 : this.options.headerHeight) + this.options.height / 2);
                            if (6 == a || 7 == a || 8 == a || 9 == a || 10 == a) b += 45;
                            d(".html5gallery-toolbox-" + this.id, this.$gallery).css({
                                top: b
                            });
                            b = 0;
                            this.options.showplaybutton && 1 == a ? (b += 36, this.isPaused ? (d(".html5gallery-play-" + this.id, this.$gallery).show(), d(".html5gallery-pause-" + this.id, this.$gallery).hide()) : (d(".html5gallery-play-" + this.id, this.$gallery).hide(), d(".html5gallery-pause-" + this.id, this.$gallery).show())) : (d(".html5gallery-play-" + this.id, this.$gallery).hide(), d(".html5gallery-pause-" + this.id, this.$gallery).hide());
                            this.options.showprevbutton ? (b += 36, d(".html5gallery-left-" + this.id, this.$gallery).show()) : d(".html5gallery-left-" + this.id, this.$gallery).hide();
                            this.options.shownextbutton ? (b += 36, d(".html5gallery-right-" + this.id, this.$gallery).show()) : d(".html5gallery-right-" + this.id, this.$gallery).hide();
                            this.options.showfullscreenbutton && 1 == a ? (b += 36, d(".html5gallery-lightbox-" + this.id, this.$gallery).show()) : d(".html5gallery-lightbox-" + this.id, this.$gallery).hide();
                            d(".html5gallery-toolbox-" + this.id, this.$gallery).css({
                                width: b + 16
                            });
                            d(".html5gallery-toolbox-buttons-" + this.id, this.$gallery).css({
                                width: b
                            })
                        } else this.options.showplaybutton && 1 == a ? this.isPaused ? (d(".html5gallery-play-" + this.id, this.$gallery).show(), d(".html5gallery-pause-" + this.id, this.$gallery).hide()) : (d(".html5gallery-play-" + this.id,
                        this.$gallery).hide(), d(".html5gallery-pause-" + this.id, this.$gallery).show()) : (d(".html5gallery-play-" + this.id, this.$gallery).hide(), d(".html5gallery-pause-" + this.id, this.$gallery).hide()), this.options.showprevbutton ? d(".html5gallery-left-" + this.id, this.$gallery).show() : d(".html5gallery-left-" + this.id, this.$gallery).hide(), this.options.shownextbutton ? d(".html5gallery-right-" + this.id, this.$gallery).show() : d(".html5gallery-right-" + this.id, this.$gallery).hide(), this.options.showfullscreenbutton && 1 == a ? d(".html5gallery-lightbox-" + this.id, this.$gallery).show() : d(".html5gallery-lightbox-" + this.id, this.$gallery).hide();
                        this.options.isIE678 ? d(".html5gallery-toolbox-" + this.id, this.$gallery).show() : d(".html5gallery-toolbox-" + this.id, this.$gallery).fadeIn()
                    }
                };
                this.hideimagetoolbox = function () {
                    this.options.isIE678 ? d(".html5gallery-toolbox-" + this.id, this.$gallery).hide() : d(".html5gallery-toolbox-" + this.id, this.$gallery).fadeOut()
                }
            },
            createStyleDefault: function () {
                this.options.thumbimageborder = 1;
                this.options.thumbimagewidth = this.options.thumbwidth - 2;
                this.options.thumbimageheight = this.options.thumbheight - 2;
                this.options.isIE && 2 > this.options.thumbimageborder && (this.options.thumbimageborder = 0);
                this.options.showtitle || (this.options.titleheight = 0);
                if (!this.options.showsocialmedia || !this.options.showfacebooklike && !this.options.showtwitter && !this.options.showgoogleplus) this.options.socialheight = 0;
                this.options.headerHeight = this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight;
                this.options.boxWidth = this.options.width;
                this.options.boxHeight = this.options.height + this.options.headerHeight;
                this.options.boxLeft = this.options.padding;
                this.options.boxTop = this.options.padding;
                this.options.showcarousel ? (this.options.carouselWidth = this.options.width, this.options.carouselHeight = this.options.thumbheight + 2 * this.options.thumbmargin, this.options.carouselLeft = this.options.padding, this.options.carouselTop = this.options.padding + this.options.boxHeight + this.options.carouselmargin) : (this.options.carouselWidth = 0, this.options.carouselHeight = 0, this.options.carouselLeft = 0, this.options.carouselTop = 0, this.options.carouselmargin = 0);
                this.options.totalWidth = this.options.width + 2 * this.options.padding;
                this.options.totalHeight = this.options.height + this.options.carouselHeight + this.options.carouselmargin + this.options.headerHeight + 2 * this.options.padding;
                this.options.containerWidth = this.options.totalWidth;
                this.options.containerHeight = this.options.totalHeight;
                this.container.css({
                    width: this.options.containerWidth,
                    height: this.options.containerHeight
                });
                var a = 0,
                    e = 0;
                this.options.elemTop = 0;
                "top" == this.options.headerpos ? (e = 0, a = this.options.socialheight, this.options.elemTop = this.options.headerHeight) : "bottom" == this.options.headerpos && (this.options.elemTop = 0, a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, e = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
                var b = " .html5gallery-container-" + this.id + " { display:block; position:absolute; left:0px; top:0px; width:" + this.options.totalWidth +
                    "px; height:" + this.options.totalHeight + "px; background:url('" + this.options.skinfolder + this.options.bgimage + "') center top; background-color:" + this.options.bgcolor + ";}";
                this.options.galleryshadow && (b += " .html5gallery-container-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
                var b = b + (" .html5gallery-box-" + this.id + " {display:block; position:absolute; text-align:center; left:" + this.options.boxLeft + "px; top:" + this.options.boxTop + "px; width:" + this.options.boxWidth + "px; height:" + this.options.boxHeight + "px;}"),
                    c = Math.round(this.options.socialheight / 2 - 12),
                    b = b + (" .html5gallery-title-text-" + this.id + " " + this.options.titlecss + " .html5gallery-title-text-" + this.id + " " + this.options.titlecsslink + " .html5gallery-error-" + this.id + " " + this.options.errorcss),
                    b = b + (" .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencss + " .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencsslink),
                    b = b + (" .html5gallery-viral-" + this.id + " {display:block; overflow:hidden; position:absolute; text-align:left; top:" + e + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.socialheight + "px; padding-top:" + c + "px;}"),
                    b = b + (" .html5gallery-title-" + this.id + " {display:" + (this.options.titleoverlay && this.options.titleautohide ? "none" : "block") + "; overflow:hidden; position:absolute; top:" + a + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.titleheight + "px; line-height:" + this.options.titleheight + "px;}"),
                    b = b + (" .html5gallery-timer-" + this.id + " {display:block; position:absolute; top:" + String(this.options.elemTop + this.options.height - 2) + "px; left:0px; width:0px; height:2px; background-color:#ccc; filter:alpha(opacity=60); opacity:0.6; }"),
                    b = b + (" .html5gallery-elem-" + this.id + " {display:block; overflow:hidden; position:absolute; top:" + this.options.elemTop + "px; left:0px; width:" + this.options.width + "px; height:" + this.options.height + "px;}");
                this.options.isIE7 || this.options.isIE6 ? (b += " .html5gallery-loading-" + this.id + " {display:none; }", b += " .html5gallery-loading-center-" + this.id + " {display:none; }") : (b += " .html5gallery-loading-" + this.id + " {display:block; position:absolute; top:4px; right:4px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading.gif') no-repeat top right;}", b += " .html5gallery-loading-center-" + this.id + " {display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading_center.gif') no-repeat center center;}");
                0 < this.options.borderradius && (b += " .html5gallery-elem-" + this.id + " {overflow:hidden; border-radius:" + this.options.borderradius + "px; -moz-border-radius:" + this.options.borderradius + "px; -webkit-border-radius:" + this.options.borderradius + "px;}");
                this.options.slideshadow && (b += " .html5gallery-title-" + this.id + " { padding:4px;}", b += " .html5gallery-timer-" + this.id + " { margin:4px;}", b += " .html5gallery-elem-" + this.id + " { overflow:hidden; padding:0px; }");
                this.options.showcarousel ? (b += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; width:" + this.options.width + "px; height:" + this.options.carouselHeight + "px;", b = this.options.carouselbgtransparent ? b + "background-color:transparent;" : b + ("border-top:1px solid " + this.options.carouseltopborder + ";border-bottom:1px solid " + this.options.carouselbottomborder + ";background-color: " + this.options.carouselbgcolorend +
                    "; background: " + this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend +
                    ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), a = 4, this.options.slideshadow && (a += 12), b = b + "}" + (" .html5gallery-car-list-" + this.id + " { position:absolute; display:block; overflow:hidden; left:" + a + "px; width:" + String(this.options.width - a - 4) + "px; top:0px; height:" + this.options.carouselHeight + "px; }"), e = 0, this.options.carouselNavButton = !1, Math.floor((this.options.width - a - 4) / (this.options.thumbwidth + this.options.thumbgap)) < this.elemArray.length && (this.options.carouselNavButton = !0), this.options.carouselNavButton && (b += " .html5gallery-car-left-" + this.id + " { position:absolute; display:block; overflow:hidden; width:32px; height:32px; left:0px; top:" + String(this.options.carouselHeight / 2 - 16) + "px; background:url('" + this.options.skinfolder + "carousel_left.png') no-repeat 0px 0px;}  .html5gallery-car-right-" + this.id + " { position:absolute; display:block; overflow:hidden; width:32px; height:32px; right:0px; top:" + String(this.options.carouselHeight / 2 - 16) + "px; background:url('" + this.options.skinfolder + "carousel_right.png') no-repeat 0px 0px;} ", e = 72), this.options.thumbShowNum = Math.floor((this.options.width - a - 4 - e) / (this.options.thumbwidth + this.options.thumbgap)), this.options.thumbMaskWidth = this.options.thumbShowNum * this.options.thumbwidth + this.options.thumbShowNum * this.options.thumbgap, this.options.thumbTotalWidth = this.elemArray.length * this.options.thumbwidth + (this.elemArray.length - 1) * this.options.thumbgap, e = 0, this.options.thumbMaskWidth > this.options.thumbTotalWidth && (e = this.options.thumbMaskWidth / 2 - this.options.thumbTotalWidth / 2), b += ".html5gallery-thumbs-" + this.id + " { position:relative; display:block; margin-left:" + e + "px; width:" + String(this.elemArray.length * (this.options.thumbwidth + this.options.thumbgap)) + "px; top:" + Math.round(this.options.carouselHeight / 2 - this.options.thumbheight / 2) + "px; }", a = Math.round((this.options.width - a - 4) / 2 - this.options.thumbMaskWidth / 2), b += " .html5gallery-car-mask-" + this.id + " { position:absolute; display:block; text-align:left; overflow:hidden; left:" + a + "px; width:" + this.options.thumbMaskWidth + "px; top:0px; height:" + this.options.carouselHeight + "px;} ", b += " .html5gallery-tn-" + this.id + " { display:block; float:left; margin-left:" + Math.round(this.options.thumbgap / 2) + "px; margin-right:" + Math.round(this.options.thumbgap / 2) + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (b += " .html5gallery-tn-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), b += " .html5gallery-tn-selected-" + this.id + " { display:block; float:left; margin-left:" + Math.round(this.options.thumbgap / 2) + "px; margin-right:" + Math.round(this.options.thumbgap / 2) + "px;text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight +
                    "px;overflow:hidden;}", this.options.thumbshadow && (b += " .html5gallery-tn-selected-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), b += " .html5gallery-tn-selected-" + this.id + " .html5gallery-tn-img-" + this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " img { filter:alpha(opacity=" + Math.round(100 * this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" + this.id + " img { filter:alpha(opacity=100); opacity:1; } ", a = Math.round(this.options.thumbheight / 2 - (this.options.thumbimageheight + 2 * this.options.thumbimageborder) / 2), b += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; margin-top:" + a + "px; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px;}", this.options.thumbunselectedimagebordercolor && (b += " .html5gallery-tn-img-" + this.id +
                    " {background-color:" + this.options.thumbunselectedimagebordercolor + ";}"), b += " .html5gallery-tn-title-" + this.id + " {display:none;}", this.carouselHighlight = function (a) {
                    d("#html5gallery-tn-" + this.id + "-" + a, this.$gallery).removeClass("html5gallery-tn-" + this.id).addClass("html5gallery-tn-selected-" + this.id);
                    this.options.thumbShowNum >= this.elemArray.length || (a = Math.floor(a / this.options.thumbShowNum) * this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap), a >= this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap && (a = this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap), a = -a, d(".html5gallery-thumbs-" + this.id, this.$gallery).animate({
                        marginLeft: a
                    }, 500))
                }, this.carouselPrev = function () {
                    var a = d(".html5gallery-thumbs-" + this.id, this.$gallery);
                    if (0 == parseInt(a.css("margin-left"))) a.animate({
                        marginLeft: "+=" + Math.round(this.options.thumbMaskWidth / 8) + "px"
                    }, 100).animate({
                        marginLeft: 0
                    }, 500, "easeOutBounce");
                    else {
                        var b = -1 * parseInt(a.css("margin-left")) - this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
                        0 > b && (b = 0);
                        a.animate({
                            marginLeft: -b
                        }, 500, this.options.carouseleasing)
                    }
                }, this.carouselNext = function () {
                    var a = d(".html5gallery-thumbs-" + this.id, this.$gallery);
                    if (parseInt(a.css("margin-left")) == -(this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap)) a.animate({
                        marginLeft: "-=" + Math.round(this.options.thumbMaskWidth / 8) + "px"
                    }, 100).animate({
                        marginLeft: -(this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap)
                    }, 500, "easeOutBounce");
                    else {
                        var b = -1 * parseInt(a.css("margin-left")) + this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
                        b >= this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap && (b = this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap);
                        a.animate({
                            marginLeft: -b
                        }, 500, this.options.carouseleasing)
                    }
                }) : b += " .html5gallery-car-" + this.id + " { display:none; }";
                b = this.options.freeversion ? b + (" .html5gallery-watermark-" + this.id + " {}") : 0 < this.options.watermark.length ? b + (" .html5gallery-watermark-" + this.id + " {display:block; position:absolute; top:0px; left:0px; }") : b + (" .html5gallery-watermark-" + this.id + " {display:none;}");
                d("head").append("<style type='text/css'>" + b + "</style>")
            },
            loadCarousel: function () {
                for (var a = this, e = d(".html5gallery-thumbs-" + this.id, this.$gallery), b = 0; b < this.elemArray.length; b++) {
                    var c = d("<div id='html5gallery-tn-" + this.id + "-" + b + "' class='html5gallery-tn-" + this.id + "' data-index=" + b + " ></div>");
                    c.appendTo(e);
                    c.unbind("click").click(function (b) {
                        a.slideRun(d(this).data("index"));
                        b.preventDefault()
                    });
                    c.hover(function () {
                        a.onThumbOver();
                        d(this).removeClass("html5gallery-tn-" + a.id).addClass("html5gallery-tn-selected-" + a.id)
                    }, function () {
                        d(this).data("index") !== a.curElem && d(this).removeClass("html5gallery-tn-selected-" + a.id).addClass("html5gallery-tn-" + a.id)
                    });
                    c = new Image;
                    c.data = b;
                    d(c).load(function () {
                        var b = Math.max(a.options.thumbimagewidth / this.width, a.options.thumbimageheight / this.height),
                            c = Math.round(b * this.width),
                            b = Math.round(b * this.height),
                            k = a.options.thumbshowplayonvideo && 1 != a.elemArray[this.data][9] ? "<div class='html5gallery-tn-img-play-" + a.id + "' style='display:block; overflow:hidden; position:absolute; width:" + a.options.thumbimagewidth + "px;height:" + a.options.thumbimageheight + "px; top:" + a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + 'px;background:url("' + a.options.skinfolder + "playvideo.png\") no-repeat center center;'></div>" : "";
                        d("#html5gallery-tn-" + a.id + "-" + this.data, e).append("<div class='html5gallery-tn-img-" + a.id + "' style='position:relative;'><div style='display:block; overflow:hidden; position:absolute; width:" + a.options.thumbimagewidth + "px;height:" + a.options.thumbimageheight + "px; top:" + a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + "px;'><img class='html5gallery-tn-image-" + a.id + "' style='border:none !important; padding:0px !important; margin:0px !important; max-width:none !; max-height:none !; width:" + c + "px ; height:" + b + "px ;' src='" + a.elemArray[this.data][1] + "' /></div>" + k + "</div><div class='html5gallery-tn-title-" + a.id + "'>" + a.elemArray[this.data][7] + "</div>")
                    });
                    c.src = this.elemArray[b][1]
                }
            },
            goNormal: function () {
                clearTimeout(this.slideshowTimeout);
                d(".html5gallery-timer-" + this.id, this.$gallery).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0;
                this.isFullscreen = !1;
                var a = d(".html5gallery-elem-" + this.id, this.$fullscreen).empty().css({
                    top: this.options.elemTop
                });
                d(".html5gallery-box-" + this.id, this.$gallery).prepend(a);
                this.slideRun(this.curElem);
                this.$fullscreen.remove();
                this.hideimagetoolbox()
            },
            goFullscreen: function () {
                this.hideimagetoolbox();
                clearTimeout(this.slideshowTimeout);
                d(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0;
                this.isFullscreen = !0;
                this.fullscreenInitial = 20;
                this.fullscreenMargin = 10;
                this.fullscreenBarH = 40;
                var a = this.elemArray[this.curElem][10],
                    e = this.elemArray[this.curElem][11];
                this.fullscreenWidth = d(window).width() - 2 * this.fullscreenMargin;
                this.fullscreenHeight = d(window).height() - 2 * this.fullscreenMargin - this.fullscreenBarH;
                var b = Math.min(this.fullscreenWidth / a, this.fullscreenHeight / e);
                1 > b && (a *= b, e *= b);
                var b = Math.max(d(window).width(), d(document).width()),
                    c = Math.max(d(window).height(), d(document).height()),
                    h = d(window).scrollTop() + Math.round((d(window).height() - (e + 2 * this.fullscreenMargin + this.fullscreenBarH)) / 2);
                this.$fullscreen = d("<div class='html5gallery-fullscreen-" + this.id + "' style='position:absolute;top:0px;left:0px;width:" + b + "px;height:" + c + "px;text-align:center;z-index:999;'><div class='html5gallery-fullscreen-overlay-" + this.id + "' style='display:block;position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#000000;opacity:0.9;filter:alpha(opacity=80);'></div><div class='html5gallery-fullscreen-box-" + this.id + "' style='display:block;overflow:hidden;position:relative;margin:0px auto;top:" + h + "px;width:" + this.fullscreenInitial + "px;height:" + this.fullscreenInitial + "px;background-color:#ffffff;'><div class='html5gallery-fullscreen-elem-" + this.id + "' style='display:block;position:absolute;overflow:hidden;width:" + a + "px;height:" + e + "px;left:" + this.fullscreenMargin + "px;top:" + this.fullscreenMargin + "px;'><div class='html5gallery-fullscreen-timer-" + this.id + "' style='display:block; position:absolute; top:" + String(e - 4) + "px; left:0px; width:0px; height:4px; background-color:#666; filter:alpha(opacity=60); opacity:0.6;'></div></div><div class='html5gallery-fullscreen-bar-" + this.id + "' style='display:block;position:absolute;width:" + a + "px;height:" + this.fullscreenBarH + "px;left:" + this.fullscreenMargin + "px;top:" + String(e + this.fullscreenMargin) + "px;'><div class='html5gallery-fullscreen-close-" + this.id + "' style='display:block;position:relative;float:right;cursor:pointer;width:32px;height:32px;top:" + Math.round(this.fullscreenBarH - 32) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_close.png\");'></div><div class='html5gallery-fullscreen-play-" + this.id + "' style='display:" + (this.isPaused && 1 < this.elemArray.length && 1 == this.elemArray[this.curElem][9] ? "block" : "none") + ";position:relative;float:right;cursor:pointer;width:32px;height:32px;top:" + Math.round(this.fullscreenBarH - 32) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_play.png\");'></div><div class='html5gallery-fullscreen-pause-" + this.id + "' style='display:" + (this.isPaused || 1 >= this.elemArray.length || 1 != this.elemArray[this.curElem][9] ? "none" : "block") + ";position:relative;float:right;cursor:pointer;width:32px;height:32px;top:" + Math.round(this.fullscreenBarH - 32) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_pause.png\");'></div><div class='html5gallery-fullscreen-title-" + this.id + "' style='display:block;position:relative;float:left;width:" + String(a - 128) + "px;height:" + this.fullscreenBarH + "px;top:0px;left:0px;text-align:left;'></div></div><div class='html5gallery-fullscreen-next-" + this.id + "' style='display:none;position:absolute;cursor:pointer;width:48px;height:48px;right:" + this.fullscreenMargin + "px;top:" + Math.round(e / 2) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_next.png\");'></div><div class='html5gallery-fullscreen-prev-" + this.id + "' style='display:none;position:absolute;cursor:pointer;width:48px;height:48px;left:" + this.fullscreenMargin + "px;top:" + Math.round(e / 2) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_prev.png\");'></div></div></div>");
                this.$fullscreen.appendTo("body");
                var f = this;
                d(window).scroll(function () {
                    var a = d(".html5gallery-fullscreen-box-" + f.id, f.$fullscreen),
                        b = d(window).scrollTop() + Math.round((d(window).height() - a.height()) / 2);
                    a.css({
                        top: b
                    })
                });
                var g = d(".html5gallery-elem-" + this.id, this.$gallery).empty().css({
                    top: 0
                });
                d(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).animate({
                    height: e + 2 * this.fullscreenMargin
                }, "slow", function () {
                    d(this).animate({
                        width: a + 2 * f.fullscreenMargin
                    }, "slow", function () {
                        d(this).animate({
                            height: "+=" + f.fullscreenBarH
                        }, "slow", function () {
                            d(".html5gallery-fullscreen-elem-" + f.id, f.$fullscreen).prepend(g);
                            f.slideRun(f.curElem)
                        })
                    })
                });
                d(".html5gallery-fullscreen-overlay-" + this.id, this.$fullscreen).click(function () {
                    f.goNormal()
                });
                d(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).hover(function () {
                    1 < f.elemArray.length && (d(".html5gallery-fullscreen-next-" + f.id, f.$fullscreen).fadeIn(), d(".html5gallery-fullscreen-prev-" + f.id, f.$fullscreen).fadeIn())
                }, function () {
                    d(".html5gallery-fullscreen-next-" + f.id, f.$fullscreen).fadeOut();
                    d(".html5gallery-fullscreen-prev-" + f.id, f.$fullscreen).fadeOut()
                });
                d(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).touchSwipe({
                    swipeLeft: function () {
                        f.slideRun(-1)
                    },
                    swipeRight: function () {
                        f.slideRun(-2)
                    }
                });
                d(".html5gallery-fullscreen-close-" + this.id, this.$fullscreen).click(function () {
                    f.goNormal()
                });
                d(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).click(function () {
                    f.slideRun(-1)
                });
                d(".html5gallery-fullscreen-prev-" + this.id, this.$fullscreen).click(function () {
                    f.slideRun(-2)
                });
                d(".html5gallery-fullscreen-play-" + this.id, this.$fullscreen).click(function () {
                    d(".html5gallery-fullscreen-play-" + f.id, f.$fullscreen).hide();
                    d(".html5gallery-fullscreen-pause-" + f.id, f.$fullscreen).show();
                    f.isPaused = !1;
                    f.slideshowTimeout = setTimeout(function () {
                        f.slideRun(-1)
                    }, f.options.slideshowinterval);
                    d(".html5gallery-fullscreen-timer-" + f.id, f.$fullscreen).css({
                        width: 0
                    });
                    f.slideTimerCount = 0;
                    f.options.showtimer && (f.slideTimer = setInterval(function () {
                        f.showSlideTimer()
                    }, 50))
                });
                d(".html5gallery-fullscreen-pause-" + this.id, this.$fullscreen).click(function () {
                    d(".html5gallery-fullscreen-play-" + f.id, f.$fullscreen).show();
                    d(".html5gallery-fullscreen-pause-" + f.id, f.$fullscreen).hide();
                    f.isPaused = !0;
                    clearTimeout(f.slideshowTimeout);
                    d(".html5gallery-fullscreen-timer-" + f.id, f.$fullscreen).css({
                        width: 0
                    });
                    clearInterval(f.slideTimer);
                    f.slideTimerCount = 0
                })
            },
            calcIndex: function (a) {
                this.savedElem = this.curElem; - 2 == a ? (this.nextElem = this.curElem, this.curElem = this.prevElem, this.prevElem = 0 > this.curElem - 1 ? this.elemArray.length - 1 : this.curElem - 1, this.options.random && (a = Math.floor(Math.random() * this.elemArray.length), a != this.curElem && (this.prevElem = a))) : -1 == a ? (this.prevElem = this.curElem, this.curElem = this.nextElem, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1, this.options.random && (a = Math.floor(Math.random() * this.elemArray.length), a != this.curElem && (this.nextElem = a))) : 0 <= a && (this.curElem = a, this.prevElem = 0 > this.curElem - 1 ? this.elemArray.length - 1 : this.curElem - 1, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1, this.options.random && (a = Math.floor(Math.random() * this.elemArray.length), a != this.curElem && (this.prevElem = a), a = Math.floor(Math.random() * this.elemArray.length), a != this.curElem && (this.nextElem = a)))
            },
            showSlideTimer: function () {
                this.slideTimerCount++;
                this.isFullscreen ? d(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).width(Math.round(50 * d(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).width() * (this.slideTimerCount + 1) / this.options.slideshowinterval)) : d(".html5gallery-timer-" + this.id, this.$gallery).width(Math.round(50 * this.options.boxWidth * (this.slideTimerCount + 1) / this.options.slideshowinterval))
            },
            slideRun: function (a, e) {
                clearTimeout(this.slideshowTimeout);
                this.isFullscreen ? d(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                    width: 0
                }) : d(".html5gallery-timer-" + this.id, this.$gallery).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0;
                this.options.showcarousel && 0 <= this.curElem && d("#html5gallery-tn-" + this.id + "-" + this.curElem, this.$gallery).removeClass("html5gallery-tn-selected-" + this.id).addClass("html5gallery-tn-" + this.id);
                this.calcIndex(a);
                this.options.socialurlforeach && this.createSocialMedia();
                !this.isFullscreen && this.options.showcarousel && this.carouselHighlight(this.curElem);
                if (this.options.showtitle) {
                    var b = this.elemArray[this.curElem][8];
                    this.options.shownumbering && (b = this.options.numberingformat.replace("%NUM", this.curElem + 1).replace("%TOTAL", this.elemArray.length) + " " + b);
                    this.isFullscreen ? d(".html5gallery-fullscreen-title-" + this.id, this.$fullscreen).html(b) : d(".html5gallery-title-" + this.id, this.$gallery).html("<div class='html5gallery-title-text-" + this.id + "'>" + b + "</div>")
                }
                b = this.elemArray[this.curElem][9];
                if (!(0 > b)) {
                    !this.isFullscreen && e ? "always" == this.options.showimagetoolbox ? this.showimagetoolbox(b) : "image" == this.options.showimagetoolbox && 1 != b && this.hideimagetoolbox() : this.hideimagetoolbox();
                    this.onChange();
                    1 == b ? this.showImage() : 5 == b || 6 == b || 7 == b || 8 == b ? this.showVideo(this.options.autoplayvideo) : 9 == b ? this.showYoutube(this.options.autoplayvideo) : 10 == b ? this.showVimeo(this.options.autoplayvideo) : 2 == b && this.showSWF();
                    this.prevElem in this.elemArray && 1 == this.elemArray[this.prevElem][9] && ((new Image).src = this.elemArray[this.prevElem][2]);
                    this.nextElem in this.elemArray && 1 == this.elemArray[this.nextElem][9] && ((new Image).src = this.elemArray[this.nextElem][2]);
                    var c = this;
                    1 == b && (!this.isPaused && 1 < this.elemArray.length) && (this.slideshowTimeout = setTimeout(function () {
                        c.slideRun(-1)
                    }, this.options.slideshowinterval), this.isFullscreen ? d(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                        width: 0
                    }) : d(".html5gallery-timer-" + this.id, this.$gallery).css({
                        width: 0
                    }), this.slideTimerCount = 0, this.options.showtimer && (this.slideTimer = setInterval(function () {
                        c.showSlideTimer()
                    }, 50)));
                    b = d(".html5gallery-elem-" + this.id, this.isFullscreen ? this.$fullscreen : this.$gallery);
                    this.elemArray[this.curElem][5] ? (b.css({
                        cursor: "pointer"
                    }), b.unbind("click").bind("click", function () {
                        c.elemArray[c.curElem][6] ? window.open(c.elemArray[c.curElem][5], c.elemArray[c.curElem][6]) : window.open(c.elemArray[c.curElem][5])
                    })) : (b.css({
                        cursor: ""
                    }),
                    b.unbind("click"))
                }
            },
            showImage: function () {
                var a = d(".html5gallery-elem-" + this.id, this.isFullscreen ? this.$fullscreen : this.$gallery);
                $preloading = "" === a.html() ? d("<div class='html5gallery-loading-center-" + this.id + "'></div>").appendTo(a) : d("<div class='html5gallery-loading-" + this.id + "'></div>").appendTo(a);
                var c = this,
                    b = new Image;
                d(b).load(function () {
                    $preloading.remove();
                    c.elemArray[c.curElem][10] = this.width;
                    c.elemArray[c.curElem][11] = this.height;
                    var b;
                    c.isFullscreen ? (b = Math.min(c.fullscreenWidth / this.width,
                    c.fullscreenHeight / this.height), b = 1 < b ? 1 : b) : b = "fill" == c.options.resizemode ? Math.max(c.options.width / this.width, c.options.height / this.height) : Math.min(c.options.width / this.width, c.options.height / this.height);
                    var h = Math.round(b * this.width);
                    b = Math.round(b * this.height);
                    var f = c.isFullscreen ? h : c.options.width,
                        g = c.isFullscreen ? b : c.options.height,
                        j = Math.round(f / 2 - h / 2),
                        l = Math.round(g / 2 - b / 2);
                    c.isFullscreen && c.adjustFullscreen(f, g);
                    a.css({
                        width: f,
                        height: g
                    });
                    h = d("<div class='html5gallery-elem-img-" + c.id + "' style='display:block; position:absolute; overflow:hidden; width:" + f + "px; height:" + g + "px; left:0px; margin-left:" + (c.options.slideshadow && !c.isFullscreen ? 4 : 0) + "px; top:0px; margin-top:" + (c.options.slideshadow && !c.isFullscreen ? 4 : 0) + "px;'><img class='html5gallery-elem-image-" + c.id + "' style='border:none; position:absolute; opacity:inherit; filter:inherit; padding:0px; margin:0px; left:" + j + "px; top:" + l + "px; max-width:none; max-height:none; width:" + h + "px; height:" + b + "px;' src='" + c.elemArray[c.curElem][2] + "' />" + c.options.watermarkcode + "</div>");
                    b = d(".html5gallery-elem-img-" + c.id, a);
                    b.length ? (a.prepend(h), a.html5boxTransition(c.id, b, h, {
                        effect: c.options.effect,
                        easing: c.options.easing,
                        duration: c.options.duration,
                        direction: c.curElem >= c.savedElem,
                        slide: c.options.slide
                    }, function () {})) : a.html(h);
                    c.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Image", "Play", c.elemArray[c.curElem][7]])
                });
                d(b).error(function () {
                    $preloading.remove();
                    c.isFullscreen && c.adjustFullscreen(c.options.width, c.options.height);
                    a.html("<div class='html5gallery-elem-error-" + c.id + "' style='display:block; position:absolute; overflow:hidden; text-align:center; width:" + c.options.width + "px; left:0px; top:" + Math.round(c.options.height / 2 - 10) + "px; margin:4px;'><div class='html5gallery-error-" + c.id + "'>The requested content cannot be found</div>");
                    c.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Image", "Error", c.elemArray[c.curElem][7]])
                });
                b.src = this.elemArray[this.curElem][2]
            },
            adjustFullscreen: function (a, c) {
                var b = d(window).scrollTop() + Math.round((d(window).height() - (c + 2 * this.fullscreenMargin + this.fullscreenBarH)) / 2);
                d(".html5gallery-fullscreen-title-" + this.id, this.$fullscreen).css({
                    width: a - 128
                });
                d(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).animate({
                    width: a + 2 * this.fullscreenMargin,
                    height: c + 2 * this.fullscreenMargin + this.fullscreenBarH,
                    top: b
                }, "slow");
                d(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).animate({
                    width: a,
                    height: c
                }, "slow");
                d(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).css({
                    top: Math.round(c / 2)
                });
                d(".html5gallery-fullscreen-prev-" + this.id, this.$fullscreen).css({
                    top: Math.round(c / 2)
                });
                d(".html5gallery-fullscreen-bar-" + this.id, this.$fullscreen).animate({
                    width: a,
                    top: c + this.fullscreenMargin
                }, "slow");
                d(".html5gallery-fullscreen-play-" + this.id, this.$fullscreen).css("display", this.isPaused && 1 < this.elemArray.length && 1 == this.elemArray[this.curElem][9] ? "block" : "none");
                d(".html5gallery-fullscreen-pause-" + this.id, this.$fullscreen).css("display", this.isPaused || 1 >= this.elemArray.length || 1 != this.elemArray[this.curElem][9] ? "none" : "block");
                d(".html5gallery-elem-" + this.id, this.$fullscreen).css({
                    width: a,
                    height: c
                })
            },
            showVideo: function (a) {
                var c = this.isFullscreen ? this.$fullscreen : this.$gallery;
                this.isFullscreen ? this.adjustFullscreen(this.options.width, this.options.height) : d(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                });
                d(".html5gallery-elem-" + this.id, c).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + this.options.width + "px;height:" + this.options.height + "px;'></div>" + this.options.watermarkcode);
                var b = !1;
                if (this.options.isMobile) b = !0;
                else if ((this.options.html5player || !this.options.flashInstalled) && this.options.html5VideoSupported) if (!this.options.isFirefox && !this.options.isOpera || (this.options.isFirefox || this.options.isOpera) && (this.elemArray[this.curElem][3] || this.elemArray[this.curElem][4])) b = !0;
                if (b) {
                    b = this.elemArray[this.curElem][2];
                    if (this.options.isFirefox || this.options.isOpera || !b) b = this.elemArray[this.curElem][4] ? this.elemArray[this.curElem][4] : this.elemArray[this.curElem][3];
                    this.embedHTML5Video(d(".html5gallery-elem-video-" + this.id, c), this.options.width, this.options.height, b, a)
                } else b = this.elemArray[this.curElem][2], "/" != b.charAt(0) && ("http:" != b.substring(0, 5) && "https:" != b.substring(0, 6)) && (b = this.options.htmlfolder + b), this.embedFlash(d(".html5gallery-elem-video-" + this.id, c), this.options.width, this.options.height, this.options.jsfolder +
                    "html5boxplayer.swf", "transparent", {
                    width: this.options.width,
                    height: this.options.height,
                    videofile: b,
                    autoplay: a ? "1" : "0",
                    errorcss: ".html5box-error" + this.options.errorcss,
                    id: this.id
                });
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][7]])
            },
            showSWF: function () {
                var a = this.isFullscreen ? this.$fullscreen : this.$gallery,
                    c = this.elemArray[this.curElem][10],
                    b = this.elemArray[this.curElem][11];
                this.isFullscreen ? this.adjustFullscreen(c, b) : d(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                });
                var k = this.isFullscreen ? 0 : Math.round((this.options.height - b) / 2) + (this.options.slideshadow ? 4 : 0),
                    g = this.isFullscreen ? 0 : Math.round((this.options.width - c) / 2) + (this.options.slideshadow ? 4 : 0);
                d(".html5gallery-elem-" + this.id, a).html("<div class='html5gallery-elem-flash-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + k + "px;left:" + g + "px;width:" + c + "px;height:" + b + "px;'></div>" + this.options.watermarkcode);
                this.embedFlash(d(".html5gallery-elem-flash-" + this.id, a), c, b, this.elemArray[this.curElem][2], "window", {});
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Flash", "Play", this.elemArray[this.curElem][7]])
            },
            prepareYoutubeHref: function (a) {
                var d = "",
                    b = a.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
                b && (b[7] && 11 == b[7].length) && (d = b[7]);
                d = "http://www.youtube.com/embed/" + d;
                a = this.getYoutubeParams(a);
                var b = !0,
                    c;
                for (c in a) b ? (d += "?", b = !1) : d += "&", d += c + "=" + a[c];
                return d
            },
            getYoutubeParams: function (a) {
                var d = {};
                if (0 > a.indexOf("?")) return d;
                a = a.substring(a.indexOf("?") + 1).split("&");
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].split("=");
                    c && (2 == c.length && "v" != c[0].toLowerCase()) && (d[c[0].toLowerCase()] = c[1])
                }
                return d
            },
            initYoutubeApi: function () {
                var a, d = !1;
                for (a = 0; a < this.elemArray.length; a++) if (9 == this.elemArray[a][9]) {
                    d = !0;
                    break
                }
                d && (a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "https" : "http") + "://www.youtube.com/iframe_api",
                d = document.getElementsByTagName("script")[0], d.parentNode.insertBefore(a, d))
            },
            showYoutube: function (a) {
                var c = this.isFullscreen ? this.$fullscreen : this.$gallery;
                this.isFullscreen ? this.adjustFullscreen(this.options.width, this.options.height) : d(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                });
                var b = this.elemArray[this.curElem][2];
                d(".html5gallery-elem-" + this.id, c).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div id='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + this.options.width + "px;height:" + this.options.height + "px;'></div>" + this.options.watermarkcode);
                var g = this;
                if (!ASYouTubeIframeAPIReady && (ASYouTubeTimeout += 100, 3E3 > ASYouTubeTimeout)) {
                    setTimeout(function () {
                        g.showYoutube(a)
                    }, 100);
                    return
                }
                if (ASYouTubeIframeAPIReady) {
                    c = this.elemArray[this.curElem][2].match(/(\?v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/)[2];
                    b = null;
                    a && (b = function (a) {
                        a.target.playVideo()
                    });
                    var h = this.getYoutubeParams(this.elemArray[this.curElem][2]),
                        h = d.extend({
                            autoplay: a ? 1 : 0,
                            rel: 0,
                            wmode: "transparent"
                        }, h);
                    new YT.Player("html5gallery-elem-video-" + this.id, {
                        width: this.options.width,
                        height: this.options.height,
                        videoId: c,
                        playerVars: h,
                        events: {
                            onReady: b,
                            onStateChange: function (a) {
                                a.data == YT.PlayerState.ENDED && (g.onVideoEnd(), g.isPaused || g.slideRun(-1))
                            }
                        }
                    })
                } else b = this.prepareYoutubeHref(b), a && (b = 0 > b.indexOf("?") ? b + "?autoplay=1" : b + "&autoplay=1"),
                b = 0 > b.indexOf("?") ? b + "?wmode=transparent&rel=0" : b + "&wmode=transparent&rel=0", d(".html5gallery-elem-video-" + this.id, c).html("<iframe width='" + this.options.width + "' height='" + this.options.height + "' src='" + b + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][7]])
            },
            showVimeo: function (a) {
                var c = this.isFullscreen ? this.$fullscreen : this.$gallery;
                this.isFullscreen ? this.adjustFullscreen(this.options.width, this.options.height) : d(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                });
                var b = this.elemArray[this.curElem][2];
                a && (b = 0 > b.indexOf("?") ? b + "?autoplay=1" : b + "&autoplay=1");
                d(".html5gallery-elem-" + this.id, c).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + this.options.width + "px;height:" + this.options.height + "px;'></div>" + this.options.watermarkcode);
                d(".html5gallery-elem-video-" + this.id, c).html("<iframe width='" + this.options.width + "' height='" + this.options.height + "' src='" + b + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][7]])
            },
            checkType: function (a) {
                return !a ? -1 : a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i) ? 1 : a.match(/[^\.]\.(swf)\s*$/i) ? 2 : a.match(/[^\.]\.(mp3)\s*$/i) ? 3 : a.match(/[^\.]\.(pdf)\s*$/i) ? 4 : a.match(/\.(flv)(.*)?$/i) ? 5 : a.match(/\.(mp4|m4v)(.*)?$/i) ? 6 : a.match(/\.(ogv|ogg)(.*)?$/i) ? 7 : a.match(/\.(webm)(.*)?$/i) ? 8 : a.match(/\:\/\/.*(youtube\.com)/i) || a.match(/\:\/\/.*(youtu\.be)/i) ? 9 : a.match(/\:\/\/.*(vimeo\.com)/i) ? 10 : 0
            },
            onChange: function () {
                if (this.options.onchange && window[this.options.onchange] && "function" == typeof window[this.options.onchange]) window[this.options.onchange](this.elemArray[this.curElem])
            },
            onSlideshowOver: function () {
                if (this.options.onslideshowover && window[this.options.onslideshowover] && "function" == typeof window[this.options.onslideshowover]) window[this.options.onslideshowover](this.elemArray[this.curElem])
            },
            onThumbOver: function () {
                if (this.options.onthumbover && window[this.options.onthumbover] && "function" == typeof window[this.options.onthumbover]) window[this.options.onthumbover](this.elemArray[this.curElem])
            },
            onVideoEnd: function () {
                if (this.options.onvideoend && window[this.options.onvideoend] &&
                    "function" == typeof window[this.options.onvideoend]) window[this.options.onvideoend](this.elemArray[this.curElem])
            },
            embedHTML5Video: function (a, c, b, g, h) {
                a.html("<div style='position:absolute;display:block;width:" + c + "px;height:" + b + "px;'><video width=" + c + " height=" + b + (h ? " autoplay='autoplay'" : "") + " controls='controls' ></div>");
                var f = this;
                this.options.isAndroid && (d("<div id='android-play-" + this.id + "' style='position:absolute;display:block;cursor:pointer;width:" + c + "px;height:" + b + 'px;background:url("' + this.options.skinfolder +
                    "playvideo_64.png\") no-repeat center center;'></div>").appendTo(a).unbind("click").click(function () {
                    d(this).hide();
                    d("video", a)[0].play()
                }), d("video", a).unbind("play").bind("play", function () {
                    d("#android-play-" + f.id, a).hide()
                }));
                d("video", a).unbind("ended").bind("ended", function () {
                    f.onVideoEnd();
                    f.isPaused || f.slideRun(-1)
                });
                d("video", a).get(0).setAttribute("src", g)
            },
            embedFlash: function (a, c, b, g, h, f) {
                if (this.options.flashInstalled) {
                    var j = {
                        pluginspage: "http://www.adobe.com/go/getflashplayer",
                        quality: "high",
                        allowFullScreen: "true",
                        allowScriptAccess: "always",
                        type: "application/x-shockwave-flash"
                    };
                    j.width = c;
                    j.height = b;
                    j.src = g;
                    j.wmode = h;
                    j.flashVars = d.param(f);
                    c = "";
                    for (var l in j) c += l + "=" + j[l] + " ";
                    a.html("<embed " + c + "/>")
                } else a.html("<div class='html5gallery-elem-error-" + this.id + "' style='display:block; position:absolute; text-align:center; width:" + this.options.width + "px; left:0px; top:" + Math.round(this.options.height / 2 - 10) + "px;'><div class='html5gallery-error-" + this.id + "'><div>The required Adobe Flash Player plugin is not installed</div><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
            }
        };
        this.each(function () {
            var a = d(this);
            g = g || {};
            for (var e in g) e.toLowerCase() !== e && (g[e.toLowerCase()] = g[e], delete g[e]);
            this.options = d.extend({}, g);
            var b = this;
            d.each(a.data(), function (a, c) {
                b.options[a.toLowerCase()] = c
            });
            "skin" in this.options && (this.options.skin = this.options.skin.toLowerCase());
           
            var k = {
                padding: 12,
                skinfolder: "skins/light/",
                bgcolor: "",
                bgimage: "",
                galleryshadow: !1,
                slideshadow: !0,
                showsocialmedia: !1,
                headerpos: "top",
                titleoverlay: !0,
                titleautohide: !0,
                titlecss: " {color:#ffffff; font-size:14px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:nowrap; text-align:left; padding-left:12px; background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                titlecsslink: " a {color:#ffffff;}",
                showcarousel: !0,
                carouselmargin: 10,
                carouselbgtransparent: !0,
                thumbwidth: 48,
                thumbheight: 48,
                thumbgap: 8,
                thumbmargin: 12,
                thumbunselectedimagebordercolor: "",
                thumbimagebordercolor: "#ffffff",
                thumbshowplayonvideo: !0,
                thumbshadow: !1,
                thumbopacity: 0.8
            }, j = {
                skin: "horizontal",
                googlefonts: "Armata",
                src: "",
                xml: "",
                xmlnocache: !0,
                autoslide: !1,
                slideshowinterval: 6E3,
                random: !1,
                borderradius: 0,
                autoplayvideo: !0,
                html5player: !1,
                effect: "fade",
                easing: "easeOutCubic",
                duration: 1500,
                slide: {
                    duration: 1E3,
                    easing: "easeOutExpo"
                },
                width: 480,
                height: 270,
                showtimer: !0,
                resizemode: "fill",
                showtitle: !0,
                titleheight: 45,
                errorcss: " {text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}",
                titlefullscreencss: " {color:#333333; font-size:16px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:nowrap; line-height:40px;}",
                titlefullscreencsslink: " a {color:#333333;}",
                shownumbering: !1,
                numberingformat: "%NUM / %TOTAL",
                googleanalyticsaccount: "",
                showsocialmedia: !0,
                socialheight: 30,
                socialurlforeach: !1,
                showfacebooklike: !0,
                facebooklikeurl: "",
                showtwitter: !0,
                twitterurl: "",
                twitterusername: "",
                twittervia: "html5box",
                showgoogleplus: !0,
                googleplusurl: "",
                showimagetoolbox: "always",
                imagetoolboxstyle: "side",
                showplaybutton: !0,
                showprevbutton: !0,
                shownextbutton: !0,
                showfullscreenbutton: !0,
                carouselbgtransparent: !0,
                carouselbgcolorstart: "#ffffff",
                carouselbgcolorend: "#ffffff",
                carouseltopborder: "#ffffff",
                carouselbottomborder: "#ffffff",
                carouselbgimage: "",
                carouseleasing: "easeOutCirc",
                version: "2.5",
                freeversion: !0,
				autoplay: false,
                freemark: "",
                freelink: "http://html5box.com/html5gallery/watermark.php",
                watermark: ""
            }, j = "vertical" == this.options.skin ? d.extend(j, f) : "light" == this.options.skin ? d.extend(j, k) : "horizontal" == this.options.skin ? d.extend(j, h) : "darkness" == this.options.skin ? d.extend(j, e) : d.extend(j, h);
            this.options = d.extend(j, this.options);
            this.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
            this.options.jsfolder = l;
            "/" != this.options.skinfolder.charAt(0) && ("http:" != this.options.skinfolder.substring(0, 5) && "https:" != this.options.skinfolder.substring(0, 6)) && (this.options.skinfolder = l + this.options.skinfolder);
            if (-1 != this.options.htmlfolder.indexOf("://html5box.com") || -1 != this.options.htmlfolder.indexOf("://www.html5box.com")) this.options.freeversion = !1;
            e = new c(a, this.options, u++);
            a.data("html5galleryobject", e);
            a.data("html5galleryid",
            u);
            html5GalleryObjects.addObject(e)
        });
        return this
    };
    jQuery(document).ready(function () {
        $(".html5gallery").html5gallery()
    })
}
var html5GalleryObjects = new function () {
        this.objects = [];
        this.addObject = function (l) {
            this.objects.push(l)
        };
        this.loadNext = function (l) {
            this.objects[l].onVideoEnd();
            this.objects[l].isPaused || this.objects[l].slideRun(-1)
        }
    };
if ("undefined" === typeof ASYouTubeIframeAPIReady) var ASYouTubeIframeAPIReady = !1,
    ASYouTubeTimeout = 0,
    onYouTubeIframeAPIReady = function () {
        ASYouTubeIframeAPIReady = !0
    };