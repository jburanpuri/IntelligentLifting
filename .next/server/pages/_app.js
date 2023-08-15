(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(3391);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.1.1_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(3948);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.1.1_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(9043);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/NavbarComponent/navbar.js




function MobileNav({ open , setOpen  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center filter drop-shadow-md bg-white h-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "text-lg font-semibold",
                    href: "/",
                    children: "Intelligent Lifting"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col ml-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "text-3xl font-normal my-4",
                        href: "/",
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100),
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "text-3xl font-normal my-4",
                        href: "/plans",
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100),
                        children: "Plans"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "text-3xl font-normal my-4",
                        href: "/custom",
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100),
                        children: "Coaching"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "text-3xl font-normal my-4",
                        href: "/desc",
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100),
                        children: "Plan Instructions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "text-3xl font-normal my-4",
                        href: "/aichat",
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100),
                        children: "AI Chat"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "text-3xl font-normal my-4",
                        href: "https://www.etsy.com/ca/listing/1470866943/the-ultimate-workout-diet-guide?ref=listings_manager_grid",
                        target: "_blank",
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100),
                        children: "Workout eBook"
                    })
                ]
            })
        ]
    });
}
function Navbar() {
    const [open, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                open: open,
                setOpen: setOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-6/12 flex items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/logo.png",
                            width: 200,
                            height: 50,
                            alt: "intelligent Lifting"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-6/12 flex justify-end items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden text-white bg-black rounded-lg",
                        onClick: ()=>{
                            setOpen(!open);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-white rotate-45 translate-y-3.5" : "bg-white"}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-white w-0" : "w-full"}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-white -rotate-45 -translate-y-3.5 " : "bg-white"}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden md:flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "px-4 py:4 text-xl font-semibold text-primary",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/plans",
                                className: "px-4 py:4 text-xl font-semibold text-primary",
                                children: "Free Plans"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/custom",
                                className: "px-4 py:4 text-xl font-semibold text-primary",
                                children: "Coaching"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/desc",
                                className: "px-4 py:4 text-xl font-semibold text-primary",
                                children: "Plan Instructions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/aichat",
                                className: "px-4 py:4 text-xl font-semibold text-primary",
                                children: "AI Chat"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://www.etsy.com/ca/listing/1470866943/the-ultimate-workout-diet-guide?ref=listings_manager_grid",
                                target: "_blank",
                                className: "px-4 py:4 text-xl font-semibold text-primary",
                                children: "Workout eBook"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/FooterComponent/footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "relative bg-blueGray-200 pt-8 pb-6 bg-gradient-to-b from-gray-900 to-black",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap text-left lg:text-left",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-6/12 px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "text-xl fonat-semibold text-white",
                                        children: "Any feedback or questions? Contact me on Instagram!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-lg mt-0 mb-2 text-white py-3",
                                        children: "We respond within 1-2 business days."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-6 lg:mb-0 mb-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "bg-black text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                            type: "button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.instagram.com/sonulifts/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    className: "w-10 h-10",
                                                    style: {
                                                        color: "#c13584"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-6/12 px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-wrap items-top mb-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full lg:w-4/12 px-4 ml-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "block uppercase text-white text-lg font-semibold mb-2",
                                                children: "Useful Links"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-unstyled",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            className: "text-white font-semibold block pb-2 text-normal",
                                                            href: "/",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            className: "text-white font-semibold block pb-2 text-normal",
                                                            href: "/plans",
                                                            children: "Free Plans"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            className: "text-white font-semibold block pb-2 text-normal",
                                                            href: "/custom",
                                                            children: "Personal Coaching"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "my-6 border-white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap items-center md:justify-between justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full md:w-4/12 px-4 mx-auto text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-normal text-white font-semibold py-1",
                                children: [
                                    "Copyright \xa9 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        id: "get-current-year",
                                        children: "2023"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "text-white hover:text-primary",
                                        children: " Intelligent Lifting by"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "text-white hover:text-primary",
                                        children: " Sonu Lifts"
                                    }),
                                    "."
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}
;

;// CONCATENATED MODULE: ./components/Layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            " "
        ]
    });
}


/***/ }),

/***/ 3391:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,572,43,932,474,948], () => (__webpack_exec__(4493)));
module.exports = __webpack_exports__;

})();