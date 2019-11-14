(this["webpackJsonpchinese-typing"] =
  this["webpackJsonpchinese-typing"] || []).push([
  [0],
  {
    10: function(n, e, t) {
      n.exports = t(20);
    },
    15: function(n, e, t) {},
    16: function(n, e, t) {},
    17: function(n, e, t) {},
    20: function(n, e, t) {
      "use strict";
      t.r(e);
      var r = t(0),
        c = t.n(r),
        a = t(4),
        i = t.n(a),
        o = (t(15), t(16), t(1)),
        u = (t(17), t(5)),
        l = t(6),
        s = t(8),
        f = t(7),
        d = t(9),
        p = (function(n) {
          function e(n) {
            var t;
            return (
              Object(u.a)(this, e),
              ((t = Object(s.a)(
                this,
                Object(f.a)(e).call(this, n)
              )).ref = void 0),
              (t.ref = Object(r.createRef)()),
              (t.state = { value: "", correct: !1 }),
              t
            );
          }
          return (
            Object(d.a)(e, n),
            Object(l.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.getRef(this.ref);
                }
              },
              {
                key: "componentDidUpdate",
                value: function(n, e, t) {
                  this.props.getRef(this.ref);
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this,
                    e = this.props,
                    t = e.text,
                    r = e.onCorrect,
                    a = e.disabled,
                    i = this.state,
                    o = i.value,
                    u = i.correct;
                  return c.a.createElement(
                    "div",
                    { style: { display: "inline-block", marginTop: 20 } },
                    c.a.createElement(
                      "div",
                      {
                        style: {
                          height: 50,
                          width: 50,
                          fontSize: "24px",
                          color: u ? "red" : "black"
                        }
                      },
                      t
                    ),
                    c.a.createElement("input", {
                      disabled: a,
                      value: o,
                      onChange: function(e) {
                        var c = e.target.value.trim();
                        c === t
                          ? (n.setState({ value: c, correct: !0 }), r())
                          : n.setState({ value: c, correct: !1 });
                      },
                      ref: this.ref,
                      style: {
                        height: 50,
                        width: 50,
                        fontSize: "24px",
                        textAlign: "center"
                      }
                    })
                  );
                }
              }
            ]),
            e
          );
        })(r.PureComponent),
        m = Object(r.memo)(function(n) {
          var e = n.wordList,
            t = n.onCorrect,
            r = n.disabled,
            a = [];
          return c.a.createElement(
            c.a.Fragment,
            null,
            e.map(function(n, i) {
              return c.a.createElement(p, {
                disabled: r,
                key: i,
                getRef: function(e) {
                  a.push({ word: n, ref: e });
                },
                text: n,
                onCorrect: function() {
                  i !== e.length - 1 && a[i + 1].ref.current.focus(), t();
                }
              });
            })
          );
        }),
        b = t(2),
        v = t.n(b),
        h = function(n) {
          var e = n.correct,
            t = n.beginTime,
            a = n.disabled,
            i = Object(r.useState)(0),
            u = Object(o.a)(i, 2),
            l = u[0],
            s = u[1];
          return (
            Object(r.useEffect)(function() {
              var n = setInterval(function() {
                t && !a && s(v()().diff(t, "s"));
              });
              return function() {
                return clearInterval(n);
              };
            }),
            c.a.createElement(
              "div",
              null,
              c.a.createElement(
                "div",
                null,
                "\u901f\u5ea6\uff1a".concat(
                  (e / (l / 60)).toPrecision(2),
                  "\u5b57/\u5206\u9418"
                )
              )
            )
          );
        },
        E = null,
        g = Object(r.memo)(function(n) {
          var e = Object(r.useState)(!0),
            t = Object(o.a)(e, 2),
            a = t[0],
            i = t[1],
            u = function(n) {
              "Enter" === n.code
                ? (i(!1), (E = v()()))
                : "Escape" === n.code && i(!0);
            };
          Object(r.useEffect)(function() {
            return (
              window.addEventListener("keydown", u),
              function() {
                return window.removeEventListener("keydown", u);
              }
            );
          });
          var l = n.paragraph,
            s = Object(r.useState)(0),
            f = Object(o.a)(s, 2),
            d = f[0],
            p = f[1],
            b = Object(r.useMemo)(
              function() {
                return l.split("").filter(function(n) {
                  return (function(n) {
                    return /^[\u4e00-\u9fa5]+$/.test(n);
                  })(n);
                });
              },
              [l]
            );
          return c.a.createElement(
            "div",
            { className: "typing-area" },
            c.a.createElement(
              "h1",
              null,
              "Enter\u958b\u59cb\u3001ESC\u7d50\u675f"
            ),
            c.a.createElement(h, { correct: d, beginTime: E, disabled: a }),
            c.a.createElement(m, {
              wordList: b,
              onCorrect: function() {
                return p(d + 1);
              },
              disabled: a
            })
          );
        }),
        j = function() {
          return c.a.createElement(
            "div",
            { className: "App" },
            c.a.createElement(g, {
              paragraph:
                "\n\u4eba\u4e4b\u521d\uff0c\u6027\u672c\u5584\uff1b\u6027\u76f8\u8fd1\uff0c\u7fd2\u76f8\u9060\u3002\n\u82df\u4e0d\u6559\uff0c\u6027\u4e43\u9077\uff1b\u6559\u4e4b\u9053\uff0c\u8cb4\u4ee5\u5c08\u3002\n\u6614\u5b5f\u6bcd\uff0c\u64c7\u9130\u8655\uff1b\u5b50\u4e0d\u5b78\uff0c\u65b7\u6a5f\u677c\u3002\n\u7ac7\u71d5\u5c71\uff0c\u6709\u7fa9\u65b9\uff1b\u6559\u4e94\u5b50\uff0c\u540d\u4ff1\u63da\u3002\n\u990a\u4e0d\u6559\uff0c\u7236\u4e4b\u904e\uff1b\u6559\u4e0d\u56b4\uff0c\u5e2b\u4e4b\u60f0\u3002\n\u5b50\u4e0d\u5b78\uff0c\u975e\u6240\u5b9c\uff1b\u5e7c\u4e0d\u5b78\uff0c\u8001\u4f55\u70ba\uff1f\n\u7389\u4e0d\u7422\uff0c\u4e0d\u6210\u5668\uff1b\u4eba\u4e0d\u5b78\uff0c\u4e0d\u77e5\u7fa9\u3002\n\u70ba\u4eba\u5b50\uff0c\u65b9\u5c11\u6642\uff1b\u89aa\u5e2b\u53cb\uff0c\u7fd2\u79ae\u5100\u3002\n\u9999\u4e5d\u9f61\uff0c\u80fd\u6eab\u5e2d\uff1b\u5b5d\u65bc\u89aa\uff0c\u6240\u7576\u57f7\u3002\n\u878d\u56db\u6b72\uff0c\u80fd\u8b93\u68a8\uff1b\u5f1f\u65bc\u9577\uff0c\u5b9c\u5148\u77e5\u3002\n\u9996\u5b5d\u5f1f\uff0c\u6b21\u898b\u805e\uff1b\u77e5\u67d0\u6578\uff0c\u8b58\u67d0\u6587\u3002\n\u4e00\u800c\u5341\uff0c\u5341\u800c\u767e\uff0c\u767e\u800c\u5343\uff0c\u5343\u800c\u842c\u3002\n\u4e09\u624d\u8005\uff0c\u5929\u5730\u4eba\u3002\u4e09\u5149\u8005\uff0c\u65e5\u6708\u661f\u3002\n\u4e09\u7db1\u8005\uff0c\u541b\u81e3\u7fa9\uff0c\u7236\u5b50\u89aa\uff0c\u592b\u5a66\u9806\u3002\n\u66f0\u6625\u590f\uff0c\u66f0\u79cb\u51ac\uff1b\u6b64\u56db\u6642\uff0c\u904b\u4e0d\u7aae\u3002\n\u66f0\u5357\u5317\uff0c\u66f0\u897f\u6771\uff1b\u6b64\u56db\u65b9\uff0c\u61c9\u4e4e\u4e2d\u3002\n\u66f0\u6c34\u706b\uff0c\u6728\u91d1\u571f\uff1b\u6b64\u4e94\u884c\uff0c\u672c\u4e4e\u6578\u3002\n\u66f0\u4ec1\u7fa9\uff0c\u79ae\u667a\u4fe1\uff1b\u6b64\u4e94\u5e38\uff0c\u4e0d\u5bb9\u7d0a\u3002\n\u7a3b\u7cb1\u83fd\uff0c\u9ea5\u9ecd\u7a37\uff1b\u6b64\u516d\u7a40\uff0c\u4eba\u6240\u98df\u3002\n\u99ac\u725b\u7f8a\uff0c\u96de\u72ac\u8c55\uff1b\u6b64\u516d\u755c\uff0c\u4eba\u6240\u98fc\u3002\n\u66f0\u559c\u6012\uff0c\u66f0\u54c0\u61fc\uff0c\u611b\u60e1\u6b32\uff0c\u4e03\u60c5\u5177\u3002\n\u530f\u571f\u9769\uff0c\u6728\u77f3\u91d1\uff0c\u7d72\u8207\u7af9\uff0c\u4e43\u516b\u97f3\u3002\n\u9ad8\u66fe\u7956\uff0c\u7236\u800c\u8eab\uff0c\u8eab\u800c\u5b50\uff0c\u5b50\u800c\u5b6b\uff0c\n\u81ea\u5b50\u5b6b\uff0c\u81f3\u7384\u66fe\uff1b\u4e43\u4e5d\u65cf\uff0c\u4eba\u4e4b\u502b\u3002\n\u7236\u5b50\u6069\uff0c\u592b\u5a66\u5f9e\uff0c\u5144\u5247\u53cb\uff0c\u5f1f\u5247\u606d\uff0c\n\u9577\u5e7c\u5e8f\uff0c\u53cb\u8207\u670b\uff0c\u541b\u5247\u656c\uff0c\u81e3\u5247\u5fe0\uff1b\n\u6b64\u5341\u7fa9\uff0c\u4eba\u6240\u540c\u3002\n\n\u51e1\u8a13\u8499\uff0c\u9808\u8b1b\u7a76\uff1b\u8a73\u8a13\u8a41\uff0c\u660e\u53e5\u8b80\u3002\n\u70ba\u5b78\u8005\uff0c\u5fc5\u6709\u521d\uff1b\u5c0f\u5b78\u7d42\uff0c\u81f3\u56db\u66f8\u3002\n\u8ad6\u8a9e\u8005\uff0c\u4e8c\u5341\u7bc7\uff1b\u7fa4\u5f1f\u5b50\uff0c\u8a18\u5584\u8a00\u3002\n\u5b5f\u5b50\u8005\uff0c\u4e03\u7bc7\u6b62\uff1b\u8b1b\u9053\u5fb7\uff0c\u8aaa\u4ec1\u7fa9\u3002\n\u4f5c\u4e2d\u5eb8\uff0c\u5b50\u601d\u7b46\uff1b\u4e2d\u4e0d\u504f\uff0c\u5eb8\u4e0d\u6613\u3002\n\u4f5c\u5927\u5b78\uff0c\u4e43\u66fe\u5b50\uff1b\u81ea\u8129\u9f4a\uff0c\u81f3\u5e73\u6cbb\u3002\n\n\u5b5d\u7d93\u901a\uff0c\u56db\u66f8\u719f\uff1b\u5982\u516d\u7d93\uff0c\u59cb\u53ef\u8b80\u3002\n\u8a69\u66f8\u6613\uff0c\u79ae\u6625\u79cb\uff1b\u865f\u516d\u7d93\uff0c\u7576\u8b1b\u6c42\u3002\n\u6709\u9023\u5c71\uff0c\u6709\u6b78\u85cf\uff0c\u6709\u5468\u6613\uff0c\u4e09\u6613\u8a73\u3002\n\u6709\u5178\u8b28\uff0c\u6709\u8a13\u8aa5\uff0c\u6709\u8a93\u547d\uff0c\u66f8\u4e4b\u5967\u3002\n\u6211\u5468\u516c\uff0c\u4f5c\u5468\u79ae\uff1b\u8457\u516d\u5b98\uff0c\u5b58\u6cbb\u9ad4\u3002\n\u5927\u5c0f\u6234\uff0c\u6ce8\u79ae\u8a18\uff1b\u8ff0\u8056\u8a00\uff0c\u79ae\u6a02\u5099\u3002\n\u66f0\u570b\u98a8\uff0c\u66f0\u96c5\u980c\uff1b\u865f\u56db\u8a69\uff0c\u7576\u8af7\u8a60\u3002\n\u8a69\u65e2\u4ea1\uff0c\u6625\u79cb\u4f5c\uff1b\u5bd3\u8912\u8cb6\uff0c\u5225\u5584\u60e1\u3002\n\u4e09\u50b3\u8005\uff0c\u6709\u516c\u7f8a\uff0c\u6709\u5de6\u6c0f\uff0c\u6709\u7a40\u6881\u3002\n\u7d93\u65e2\u660e\uff0c\u65b9\u8b80\u5b50\uff1b\u64ae\u5176\u8981\uff0c\u8a18\u5176\u4e8b\u3002\n\u4e94\u5b50\u8005\uff0c\u6709\u8340\u694a\u3002\u6587\u4e2d\u5b50\uff0c\u53ca\u8001\u838a\u3002\n\u7d93\u5b50\u901a\uff0c\u8b80\u8af8\u53f2\uff1b\u8003\u4e16\u7cfb\uff0c\u77e5\u7d42\u59cb\u3002\n\n\u81ea\u7fb2\u8fb2\uff0c\u81f3\u9ec3\u5e1d\uff1b\u865f\u4e09\u7687\uff0c\u5c45\u4e0a\u4e16\u3002\n\u5510\u6709\u865e\uff0c\u865f\u4e8c\u5e1d\uff1b\u76f8\u63d6\u905c\uff0c\u7a31\u76db\u4e16\u3002\n\u590f\u6709\u79b9\uff0c\u5546\u6709\u6e6f\uff0c\u5468\u6587\u6b66\uff0c\u7a31\u4e09\u738b\u3002\n\u590f\u50b3\u5b50\uff0c\u5bb6\u5929\u4e0b\uff1b\u56db\u767e\u8f09\uff0c\u9077\u590f\u793e\u3002\n\u6e6f\u4f10\u590f\uff0c\u570b\u865f\u5546\uff1b\u516d\u767e\u8f09\uff0c\u81f3\u7d02\u4ea1\u3002\n\u5468\u6b66\u738b\uff0c\u59cb\u8a85\u7d02\uff1b\u516b\u767e\u8f09\uff0c\u6700\u9577\u4e45\u3002\n\u5468\u8f4d\u6771\uff0c\u738b\u7db1\u589c\uff1b\u901e\u5e72\u6208\uff0c\u5c1a\u6e38\u8aaa\u3002\n\u59cb\u6625\u79cb\uff0c\u7d42\u6230\u570b\uff1b\u4e94\u9738\u5f37\uff0c\u4e03\u96c4\u51fa\u3002\n\u5b34\u79e6\u6c0f\uff0c\u59cb\u517c\u4f75\uff1b\u50b3\u4e8c\u4e16\uff0c\u695a\u6f22\u722d\u3002\n\u9ad8\u7956\u8208\uff0c\u6f22\u696d\u5efa\uff1b\u81f3\u5b5d\u5e73\uff0c\u738b\u83bd\u7be1\u3002\n\u5149\u6b66\u8208\uff0c\u70ba\u6771\u6f22\uff1b\u56db\u767e\u5e74\uff0c\u7d42\u65bc\u737b\u3002\n\u9b4f\u8700\u5433\uff0c\u722d\u6f22\u9f0e\uff1b\u865f\u4e09\u570b\uff0c\u8fc4\u5169\u6649\u3002\n\u5b8b\u9f4a\u7e7c\uff0c\u6881\u9673\u627f\uff1b\u70ba\u5357\u671d\uff0c\u90fd\u91d1\u9675\u3002\n\u5317\u5143\u9b4f\uff0c\u5206\u6771\u897f\uff1b\u5b87\u6587\u5468\uff0c\u8207\u9ad8\u9f4a\u3002\n\u8fe8\u81f3\u968b\uff0c\u4e00\u571f\u5b87\uff1b\u4e0d\u518d\u50b3\uff0c\u5931\u7d71\u7dd2\u3002\n\u5510\u9ad8\u7956\uff0c\u8d77\u7fa9\u5e2b\uff1b\u9664\u968b\u4e82\uff0c\u5275\u570b\u57fa\u3002\n\u4e8c\u5341\u50b3\uff0c\u4e09\u767e\u8f09\uff1b\u6881\u6ec5\u4e4b\uff0c\u570b\u4e43\u6539\u3002\n\u6881\u5510\u6649\uff0c\u53ca\u6f22\u5468\uff1b\u7a31\u4e94\u4ee3\uff0c\u7686\u6709\u7531\u3002\n\u708e\u5b8b\u8208\uff0c\u53d7\u5468\u79aa\uff1b\u5341\u516b\u50b3\uff0c\u5357\u5317\u6df7\u3002\n\u5341\u4e03\u53f2\uff0c\u5168\u5728\u8332\uff1b\u8f09\u6cbb\u4e82\uff0c\u77e5\u8208\u8870\u3002\n\u8b80\u53f2\u8005\uff0c\u8003\u5be6\u9304\uff1b\u901a\u53e4\u4eca\uff0c\u82e5\u89aa\u76ee\u3002\n\n\u53e3\u800c\u8aa6\uff0c\u5fc3\u800c\u60df\uff1b\u671d\u65bc\u65af\uff0c\u5915\u65bc\u65af\u3002\n\u6614\u4ef2\u5c3c\uff0c\u5e2b\u9805\u6a50\uff1b\u53e4\u8056\u8ce2\uff0c\u5c1a\u52e4\u5b78\u3002\n\u8d99\u4e2d\u4ee4\uff0c\u8b80\u9b6f\u8ad6\uff1b\u5f7c\u65e2\u4ed5\uff0c\u5b78\u4e14\u52e4\u3002\n\u62ab\u84b2\u7de8\uff0c\u524a\u7af9\u7c21\uff1b\u5f7c\u7121\u66f8\uff0c\u4e14\u77e5\u52c9\u3002\n\u982d\u61f8\u6881\uff0c\u9310\u523a\u80a1\uff1b\u5f7c\u4e0d\u6559\uff0c\u81ea\u52e4\u82e6\u3002\n\u5982\u56ca\u87a2\uff0c\u5982\u6620\u96ea\uff1b\u5bb6\u96d6\u8ca7\uff0c\u5b78\u4e0d\u8f1f\u3002\n\u5982\u8ca0\u85aa\uff0c\u5982\u639b\u89d2\uff1b\u8eab\u96d6\u52de\uff0c\u7336\u82e6\u5353\u3002\n\u8607\u8001\u6cc9\uff0c\u4e8c\u5341\u4e03\uff0c\u59cb\u767c\u61a4\uff0c\u8b80\u66f8\u7c4d\u3002\n\u5f7c\u65e2\u8001\uff0c\u7336\u6094\u9072\uff1b\u723e\u5c0f\u751f\uff0c\u5b9c\u65e9\u601d\u3002\n\u82e5\u6881\u705d\uff0c\u516b\u5341\u4e8c\uff0c\u5c0d\u5927\u5ef7\uff0c\u9b41\u591a\u58eb\u3002\n\u5f7c\u65e2\u6210\uff0c\u773e\u7a31\u7570\uff1b\u723e\u5c0f\u751f\uff0c\u5b9c\u7acb\u5fd7\u3002\n\u7469\u516b\u6b72\uff0c\u80fd\u8a60\u8a69\uff1b\u6ccc\u4e03\u6b72\uff0c\u80fd\u8ce6\u7881\u3002\n\u5f7c\u7a4e\u609f\uff0c\u4eba\u7a31\u5947\uff1b\u723e\u5e7c\u5b78\uff0c\u7576\u6548\u4e4b\u3002\n\u8521\u6587\u59ec\uff0c\u80fd\u8fa8\u7434\uff1b\u8b1d\u9053\u97de\uff0c\u80fd\u8a60\u541f\u3002\n\u5f7c\u5973\u5b50\uff0c\u4e14\u8070\u654f\uff1b\u723e\u7537\u5b50\uff0c\u7576\u81ea\u8b66\u3002\n\u5510\u5289\u664f\uff0c\u65b9\u4e03\u6b72\uff0c\u8209\u795e\u7ae5\uff0c\u4f5c\u6b63\u5b57\u3002\n\u5f7c\u96d6\u5e7c\uff0c\u8eab\u5df1\u4ed5\uff1b\u723e\u5e7c\u5b78\uff0c\u52c9\u800c\u81f4\uff1b\n\u6709\u70ba\u8005\uff0c\u4ea6\u82e5\u662f\u3002\n\n\u72ac\u5b88\u591c\uff0c\u96de\u53f8\u6668\uff1b\u82df\u4e0d\u5b78\uff0c\u66f7\u70ba\u4eba\uff1f\n\u8836\u5410\u7d72\uff0c\u8702\u91c0\u871c\uff1b\u4eba\u4e0d\u5b78\uff0c\u4e0d\u5982\u7269\u3002\n\u5e7c\u800c\u5b78\uff0c\u58ef\u800c\u884c\uff1b\u4e0a\u81f4\u541b\uff0c\u4e0b\u6fa4\u6c11\u3002\n\u63da\u540d\u8072\uff0c\u986f\u7236\u6bcd\uff1b\u5149\u65bc\u524d\uff0c\u88d5\u65bc\u5f8c\u3002\n\u4eba\u907a\u5b50\uff0c\u91d1\u6eff\u7c6f\uff1b\u6211\u6559\u5b50\uff0c\u60df\u4e00\u7d93\u3002\n\u52e4\u6709\u529f\uff0c\u6232\u7121\u76ca\uff1b\u6212\u4e4b\u54c9\uff0c\u5b9c\u52c9\u529b\u3002\n"
            })
          );
        };
      t(19);
      i.a.render(c.a.createElement(j, null), document.getElementById("root"));
    }
  },
  [[10, 1, 2]]
]);
//# sourceMappingURL=main.e07d970e.chunk.js.map
