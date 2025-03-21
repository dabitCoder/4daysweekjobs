import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { Link, Head, useForm, usePage, createInertiaApp } from "@inertiajs/react";
import { createContext, useState, useContext, Fragment as Fragment$1, useEffect, forwardRef, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars, faEnvelope, faCheckCircle, faBuilding, faMoneyBillWave, faMapMarkerAlt, faLaptopHouse, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Transition, Dialog } from "@headlessui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import ReactGA from "react-ga4";
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsxDEV(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsxDEV("div", { className: "relative", children }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
    lineNumber: 16,
    columnNumber: 4
  }, void 0) }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
    lineNumber: 15,
    columnNumber: 3
  }, void 0);
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { onClick: toggleOpen, children }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
      lineNumber: 26,
      columnNumber: 4
    }, void 0),
    open && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setOpen(false)
      },
      void 0,
      false,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
        lineNumber: 29,
        columnNumber: 5
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
    lineNumber: 25,
    columnNumber: 3
  }, void 0);
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  children
}) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses,
              children
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
              lineNumber: 76,
              columnNumber: 6
            },
            void 0
          )
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
          lineNumber: 72,
          columnNumber: 5
        },
        void 0
      )
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
      lineNumber: 62,
      columnNumber: 4
    },
    void 0
  ) }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
    lineNumber: 61,
    columnNumber: 3
  }, void 0);
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Dropdown.jsx",
      lineNumber: 91,
      columnNumber: 3
    },
    void 0
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const Header = ({ isLoggedIn, user }) => {
  const [showPostJobButton, setShowPostJobButton] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowPostJobButton(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxDEV("header", { className: "fixed w-full bg-gradient-to-r from-blue-500 to-blue-600 z-40 ", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 sm:px-6 flex justify-between items-center py-4", children: [
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/",
          className: "text-xl sm:text-3xl font-bold text-white hover:text-gray-200 transition-colors",
          children: "4 Days Week Tech Jobs"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
          lineNumber: 23,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: `transition-opacity duration-500 ${showPostJobButton ? "opacity-100" : "opacity-0"} hidden sm:block`,
            children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: "/post-job",
                className: "bg-white text-blue-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg transition-transform transform hover:scale-105 flex items-center space-x-2 font-semibold text-sm sm:text-base",
                children: [
                  /* @__PURE__ */ jsxDEV(FontAwesomeIcon, { icon: faBriefcase }, void 0, false, {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
                    lineNumber: 39,
                    columnNumber: 29
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:inline", children: "Post a Job" }, void 0, false, {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
                    lineNumber: 40,
                    columnNumber: 29
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
                lineNumber: 35,
                columnNumber: 25
              },
              void 0
            )
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 30,
            columnNumber: 21
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex items-center space-x-4", children: isLoggedIn ? /* @__PURE__ */ jsxDEV(Dropdown, { children: [
          /* @__PURE__ */ jsxDEV(Dropdown.Trigger, { children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsxDEV(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsxDEV(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
                        lineNumber: 59,
                        columnNumber: 49
                      },
                      void 0
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
                    lineNumber: 53,
                    columnNumber: 45
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
              lineNumber: 48,
              columnNumber: 41
            },
            void 0
          ) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 47,
            columnNumber: 37
          }, void 0) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 46,
            columnNumber: 33
          }, void 0),
          /* @__PURE__ */ jsxDEV(Dropdown.Content, { children: [
            /* @__PURE__ */ jsxDEV(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
              lineNumber: 69,
              columnNumber: 37
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Dropdown.Link,
              {
                href: route("logout"),
                method: "post",
                as: "button",
                children: "Log Out"
              },
              void 0,
              false,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
                lineNumber: 72,
                columnNumber: 37
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 68,
            columnNumber: 33
          }, void 0)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
          lineNumber: 45,
          columnNumber: 29
        }, void 0) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              href: "/login",
              className: "text-white hover:text-gray-200 transition-colors",
              children: "Login"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
              lineNumber: 83,
              columnNumber: 33
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              href: "/register",
              className: "text-white hover:text-gray-200 transition-colors",
              children: "Signup"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
              lineNumber: 89,
              columnNumber: 33
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
          lineNumber: 82,
          columnNumber: 29
        }, void 0) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
          lineNumber: 43,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "aria-label": "MobileMenuOpen",
            className: "sm:hidden text-white",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            children: /* @__PURE__ */ jsxDEV(FontAwesomeIcon, { icon: faBars, size: "lg" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
              lineNumber: 103,
              columnNumber: 25
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 98,
            columnNumber: 21
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, void 0)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, void 0),
    mobileMenuOpen && /* @__PURE__ */ jsxDEV("div", { className: "sm:hidden bg-blue-600 py-2", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/post-job",
          className: "block bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white text-center mb-2 transition-colors",
          children: "Post a Job"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
          lineNumber: 110,
          columnNumber: 25
        },
        void 0
      ),
      isLoggedIn ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: route("profile.edit"),
            className: "block text-white py-2 transition-colors hover:text-gray-200",
            children: "Profile"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 118,
            columnNumber: 33
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: route("logout"),
            method: "post",
            as: "button",
            className: "block text-white py-2 w-full text-left transition-colors hover:text-gray-200",
            children: "Log Out"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 124,
            columnNumber: 33
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
        lineNumber: 117,
        columnNumber: 29
      }, void 0) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: "/login",
            className: "block text-white py-2 transition-colors hover:text-gray-200",
            children: "Login"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 135,
            columnNumber: 33
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: "/register",
            className: "block text-white py-2 transition-colors hover:text-gray-200",
            children: "Signup"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
            lineNumber: 141,
            columnNumber: 33
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
        lineNumber: 134,
        columnNumber: 29
      }, void 0)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
      lineNumber: 109,
      columnNumber: 21
    }, void 0) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
      lineNumber: 108,
      columnNumber: 17
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Header.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, void 0);
};
const Footer = () => {
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-gray-200 text-gray-700 py-8", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-1/3 mb-6 md:mb-0", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", children: "4-Day Week Tech Jobs" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 11,
          columnNumber: 25
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "Find your perfect work-life balance in tech." }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 14,
          columnNumber: 25
        }, void 0)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-1/3 mb-6 md:mb-0", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", children: "Quick Links" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 19,
          columnNumber: 25
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "text-sm", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "mb-1", children: /* @__PURE__ */ jsxDEV(Link, { href: "/", className: "hover:text-blue-500", children: "Home" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
            lineNumber: 24,
            columnNumber: 33
          }, void 0) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
            lineNumber: 23,
            columnNumber: 29
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "mb-1", children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              href: "/about",
              className: "hover:text-blue-500",
              children: "About Us"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
              lineNumber: 29,
              columnNumber: 33
            },
            void 0
          ) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
            lineNumber: 28,
            columnNumber: 29
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "mb-1", children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              href: "/post-job",
              className: "hover:text-blue-500",
              children: "Post a Job"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
              lineNumber: 37,
              columnNumber: 33
            },
            void 0
          ) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
            lineNumber: 36,
            columnNumber: 29
          }, void 0)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 22,
          columnNumber: 25
        }, void 0)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
        lineNumber: 18,
        columnNumber: 21
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-1/3", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", children: "Contact Us" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 47,
          columnNumber: 25
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "text-sm", children: /* @__PURE__ */ jsxDEV("li", { className: "mb-1", children: [
          /* @__PURE__ */ jsxDEV(
            FontAwesomeIcon,
            {
              icon: faEnvelope,
              className: "mr-2"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
              lineNumber: 52,
              columnNumber: 33
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "mailto:4daystechjobs@gmail.com",
              className: "hover:text-blue-500",
              children: "4daystechjobs@gmail.com"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
              lineNumber: 56,
              columnNumber: 33
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, void 0) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, void 0)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, void 0)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8 pt-8 border-t border-gray-300 flex flex-wrap justify-between items-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " 4-Day Week Tech Jobs. All rights reserved."
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
      lineNumber: 67,
      columnNumber: 21
    }, void 0) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
      lineNumber: 66,
      columnNumber: 17
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
    lineNumber: 8,
    columnNumber: 13
  }, void 0) }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Footer.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, void 0);
};
function AboutUs({ auth, isLoggedIn }) {
  const metaDescription = "Learn about 4-Day Work Week Tech Jobs. Discover our mission to revolutionize the tech industry with better work-life balance through 4-day work weeks.";
  const canonicalUrl = "https://4daystechjobs.com/about";
  const siteUrl = "https://4daystechjobs.com";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "About 4-Day Work Week Tech Jobs | Our Mission and Vision" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: metaDescription }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "keywords",
          content: "4-day work week, tech jobs, work-life balance, company mission, tech industry revolution"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 18,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonicalUrl }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:title",
          content: "About 4-Day Work Week Tech Jobs | Our Mission and Vision"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 25,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: metaDescription }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonicalUrl }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:image",
          content: `${siteUrl}/og-image-about.jpg`
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 32,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:title",
          content: "About 4-Day Work Week Tech Jobs | Our Mission and Vision"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 39,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: metaDescription }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:image",
          content: `${siteUrl}/twitter-image-about.jpg`
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 44,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 50,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "googlebot", content: "index, follow" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "bingbot", content: "index, follow" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "application-name", content: "4-Day Week Tech Jobs" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "apple-mobile-web-app-title",
          content: "4-Day Week Tech Jobs"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 57,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "4 Days Tech Jobs" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 62,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "4-Day Work Week Tech Jobs",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description: metaDescription
      }) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Header, { user: auth.user, isLoggedIn }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "bg-gray-50 py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-bold text-gray-800 mb-8 text-center", children: "About 4-Day Work Week Tech Jobs" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold text-gray-700 mb-4", children: "Our Mission" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 87,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "At 4-Day Work Week Tech Jobs, we're on a mission to revolutionize the tech industry by promoting a healthier work-life balance. We believe that a 4-day work week can lead to increased productivity, improved employee satisfaction, and better overall quality of life." }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "Our platform connects forward-thinking tech companies offering 4-day work weeks with talented professionals seeking a better balance between their careers and personal lives." }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 98,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold text-gray-700 mb-4", children: "Why 4-Day Work Weeks?" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 107,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "list-disc list-inside text-gray-600 space-y-2", children: [
          /* @__PURE__ */ jsxDEV("li", { children: "Improved work-life balance" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
            lineNumber: 111,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "Increased productivity and focus" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
            lineNumber: 112,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "Reduced burnout and stress" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
            lineNumber: 113,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "Greater job satisfaction" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
            lineNumber: 114,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "More time for personal growth and family" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
            lineNumber: 115,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 110,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 106,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold text-gray-700 mb-4", children: "Our Story" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 120,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "Founded in 2023, 4-Day Work Week Tech Jobs was born from the realization that the traditional 5-day work week was no longer serving the best interests of tech professionals or companies. We saw an opportunity to create a platform that would champion a new way of working." }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 123,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 119,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("section", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold text-gray-700 mb-4", children: "Join the Movement" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 134,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "Whether you're a job seeker looking for a better work-life balance or a company ready to embrace the future of work, we invite you to join our growing community. Together, we can reshape the tech industry and create a more balanced, productive, and fulfilling work environment for all." }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
          lineNumber: 137,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
        lineNumber: 133,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
      lineNumber: 81,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
      lineNumber: 148,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/AboutUs.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs
}, Symbol.toStringTag, { value: "Module" }));
function Guest({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(Link, { href: "/", className: "text-3xl font-bold text-blue-600", children: "4 Days Week Tech Jobs" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/GuestLayout.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/GuestLayout.jsx",
      lineNumber: 7,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/GuestLayout.jsx",
      lineNumber: 13,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/GuestLayout.jsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsxDEV("p", { ...props, className: "text-sm text-red-600 " + className, children: message }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/InputError.jsx",
    lineNumber: 3,
    columnNumber: 3
  }, this) : null;
}
function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "label",
    {
      ...props,
      className: `block font-medium text-sm text-gray-700 ` + className,
      children: value ? value : children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/InputLabel.jsx",
      lineNumber: 8,
      columnNumber: 3
    },
    this
  );
}
function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/PrimaryButton.jsx",
      lineNumber: 8,
      columnNumber: 3
    },
    this
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " + className,
      ref: input
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/TextInput.jsx",
      lineNumber: 16,
      columnNumber: 3
    },
    this
  );
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxDEV(Guest, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "Confirm Password" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
      lineNumber: 28,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "password", value: "Password" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
          lineNumber: 37,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
            lineNumber: 39,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
          lineNumber: 49,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsxDEV(PrimaryButton, { className: "ms-4", disabled: processing, children: "Confirm" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
        lineNumber: 53,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
        lineNumber: 52,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ConfirmPassword.jsx",
    lineNumber: 27,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxDEV(Guest, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "Forgot Password" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
      lineNumber: 20,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
      lineNumber: 22,
      columnNumber: 4
    }, this),
    status && /* @__PURE__ */ jsxDEV("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
      lineNumber: 29,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxDEV(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
          lineNumber: 33,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(InputError, { message: errors.email, className: "mt-2" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsxDEV(PrimaryButton, { className: "ms-4", disabled: processing, children: "Email Password Reset Link" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
        lineNumber: 46,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
      lineNumber: 32,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ForgotPassword.jsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Checkbox.jsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxDEV(Guest, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "Log in - 4 day week jobs" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    status && /* @__PURE__ */ jsxDEV("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "email", value: "Email" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
          lineNumber: 39,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
            lineNumber: 41,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.email, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
          lineNumber: 52,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
        lineNumber: 38,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "password", value: "Password" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
          lineNumber: 56,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
            lineNumber: 58,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
          lineNumber: 68,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "block mt-4", children: /* @__PURE__ */ jsxDEV("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
            lineNumber: 73,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "ms-2 text-sm text-gray-600", children: "Remember me" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
          lineNumber: 78,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
        lineNumber: 72,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
        lineNumber: 71,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
            lineNumber: 84,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(PrimaryButton, { className: "ms-4", disabled: processing, children: "Log in" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
          lineNumber: 92,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
        lineNumber: 82,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
      lineNumber: 37,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Login.jsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxDEV(Guest, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "Register" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "name", value: "Name" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 35,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("name", e.target.value),
            required: true
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
            lineNumber: 37,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.name, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 48,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
        lineNumber: 34,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "email", value: "Email" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value),
            required: true
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
            lineNumber: 54,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.email, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 65,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "password", value: "Password" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 69,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password", e.target.value),
            required: true
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
            lineNumber: 71,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 82,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
        lineNumber: 68,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: "Confirm Password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
            lineNumber: 86,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value),
            required: true
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
            lineNumber: 91,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password_confirmation, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 102,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
        lineNumber: 85,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Already registered?"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
            lineNumber: 106,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(PrimaryButton, { className: "ms-4", disabled: processing, children: "Register" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
          lineNumber: 113,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
        lineNumber: 105,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/Register.jsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxDEV(Guest, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "Reset Password" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "email", value: "Email" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
          lineNumber: 35,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
            lineNumber: 37,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.email, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
          lineNumber: 47,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
        lineNumber: 34,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "password", value: "Password" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
          lineNumber: 51,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
            lineNumber: 53,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
          lineNumber: 64,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
        lineNumber: 50,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: "Confirm Password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
            lineNumber: 68,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            type: "password",
            id: "password_confirmation",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
            lineNumber: 73,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password_confirmation, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
          lineNumber: 83,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
        lineNumber: 67,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsxDEV(PrimaryButton, { className: "ms-4", disabled: processing, children: "Reset Password" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
        lineNumber: 87,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
        lineNumber: 86,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/ResetPassword.jsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxDEV(Guest, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "Email Verification" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
      lineNumber: 16,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
      lineNumber: 18,
      columnNumber: 4
    }, this),
    status === "verification-link-sent" && /* @__PURE__ */ jsxDEV("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
      lineNumber: 25,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, children: /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
        lineNumber: 33,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
          lineNumber: 37,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
      lineNumber: 32,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
      lineNumber: 31,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Auth/VerifyEmail.jsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/NavLink.jsx",
      lineNumber: 10,
      columnNumber: 3
    },
    this
  );
}
function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      ...props,
      className: `w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/ResponsiveNavLink.jsx",
      lineNumber: 10,
      columnNumber: 3
    },
    this
  );
}
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV(Link, { href: "/", className: "text-3xl font-bold text-blue-600", children: "4 Days Week Tech Jobs" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 19,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 18,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsxDEV(
            NavLink,
            {
              href: route("dashboard"),
              active: route().current("dashboard"),
              children: "Dashboard"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
              lineNumber: 25,
              columnNumber: 9
            },
            this
          ) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 24,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex sm:items-center sm:ms-6", children: /* @__PURE__ */ jsxDEV("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxDEV(Dropdown, { children: [
          /* @__PURE__ */ jsxDEV(Dropdown.Trigger, { children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsxDEV(
                  "svg",
                  {
                    className: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsxDEV(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                        lineNumber: 51,
                        columnNumber: 14
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                    lineNumber: 45,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
              lineNumber: 39,
              columnNumber: 12
            },
            this
          ) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 38,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 37,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV(Dropdown.Content, { children: [
            /* @__PURE__ */ jsxDEV(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              Dropdown.Link,
              {
                href: route("logout"),
                method: "post",
                as: "button",
                children: "Log Out"
              },
              void 0,
              false,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                lineNumber: 65,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 61,
            columnNumber: 10
          }, this)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
          lineNumber: 36,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
          lineNumber: 35,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowingNavigationDropdown(
              (previousState) => !previousState
            ),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxDEV(
              "svg",
              {
                className: "h-6 w-6",
                stroke: "currentColor",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "path",
                    {
                      className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h16M4 18h16"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                      lineNumber: 92,
                      columnNumber: 10
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "path",
                    {
                      className: showingNavigationDropdown ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                      lineNumber: 101,
                      columnNumber: 10
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                lineNumber: 86,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
            lineNumber: 78,
            columnNumber: 8
          },
          this
        ) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
          lineNumber: 77,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
        lineNumber: 16,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
        lineNumber: 15,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "pt-2 pb-3 space-y-1", children: /* @__PURE__ */ jsxDEV(
              ResponsiveNavLink,
              {
                href: route("dashboard"),
                active: route().current("dashboard"),
                children: "Dashboard"
              },
              void 0,
              false,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                lineNumber: 122,
                columnNumber: 7
              },
              this
            ) }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
              lineNumber: 121,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "px-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-base text-gray-800", children: user.name }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                  lineNumber: 132,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-sm text-gray-500", children: user.email }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                  lineNumber: 135,
                  columnNumber: 8
                }, this)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                lineNumber: 131,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-3 space-y-1", children: [
                /* @__PURE__ */ jsxDEV(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                  lineNumber: 141,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ jsxDEV(
                  ResponsiveNavLink,
                  {
                    method: "post",
                    href: route("logout"),
                    as: "button",
                    children: "Log Out"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                    lineNumber: 144,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
                lineNumber: 140,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
              lineNumber: 130,
              columnNumber: 6
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
          lineNumber: 116,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
      lineNumber: 14,
      columnNumber: 4
    }, this),
    header && /* @__PURE__ */ jsxDEV("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
      lineNumber: 158,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
      lineNumber: 157,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("main", { children }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
      lineNumber: 164,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Layouts/AuthenticatedLayout.jsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}
function Dashboard({ auth, jobs }) {
  console.log(jobs);
  return /* @__PURE__ */ jsxDEV(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsxDEV("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      children: [
        /* @__PURE__ */ jsxDEV(Head, { title: "Your profile" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold mb-6", children: "Your jobs" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
            lineNumber: 22,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: jobs == null ? void 0 : jobs.map((job) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative bg-white overflow-hidden shadow-sm sm:rounded-lg group",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "p-6 text-gray-900 group-hover:opacity-25 transition-opacity duration-300",
                    children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-700 mb-2", children: [
                        /* @__PURE__ */ jsxDEV("strong", { children: "Title:" }, void 0, false, {
                          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                          lineNumber: 32,
                          columnNumber: 41
                        }, this),
                        " ",
                        job.title
                      ] }, void 0, true, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                        lineNumber: 31,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-2", children: [
                        /* @__PURE__ */ jsxDEV("strong", { children: "Salary:" }, void 0, false, {
                          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                          lineNumber: 35,
                          columnNumber: 41
                        }, this),
                        " ",
                        job.salary_range === "0" ? "No specified" : job.salary_range
                      ] }, void 0, true, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                        lineNumber: 34,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-700 mb-2", children: [
                        /* @__PURE__ */ jsxDEV("strong", { children: "Is Active:" }, void 0, false, {
                          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                          lineNumber: 41,
                          columnNumber: 41
                        }, this),
                        " ",
                        job.is_active ? "Yes" : "No"
                      ] }, void 0, true, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                        lineNumber: 40,
                        columnNumber: 37
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                    lineNumber: 29,
                    columnNumber: 33
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: /* @__PURE__ */ jsxDEV(Link, { href: route("jobs.show", { id: job.job_uuid }), children: /* @__PURE__ */ jsxDEV(
                      PrimaryButton,
                      {
                        className: "text-white text-xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded",
                        children: "EDIT"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                        lineNumber: 48,
                        columnNumber: 41
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                      lineNumber: 47,
                      columnNumber: 37
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
                    lineNumber: 45,
                    columnNumber: 33
                  },
                  this
                )
              ]
            },
            job.id,
            true,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
              lineNumber: 25,
              columnNumber: 29
            },
            this
          )) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
            lineNumber: 23,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Dashboard.jsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function JobDetails({ auth, job }) {
  const [isEditing, setIsEditing] = useState(false);
  const { data, setData, put, processing, errors, reset } = useForm({
    title: job.title,
    modality: job.modality,
    salary_range: job.salary_range,
    location: job.location,
    apply_url: job.apply_url,
    company_name: job.company.name,
    four_day_arrangement: job.four_day_arrangement
  });
  const handleChangeInput = (field, value) => {
    setData({ ...data, [field]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    put(route("jobs.update", job.job_uuid), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        setIsEditing(false);
        reset();
      }
    });
  };
  const renderJobDetails = () => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold mb-6 text-gray-800", children: job.title }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV(InfoItem, { label: "Company", value: job.company.name }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(InfoItem, { label: "Modality", value: job.modality }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(InfoItem, { label: "Location", value: job.location }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(InfoItem, { label: "Salary Range", value: job.salary_range }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(InfoItem, { label: "Apply URL", value: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: job.apply_url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-600 hover:text-blue-800 underline",
          children: job.apply_url
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 46,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(InfoItem, { label: "4-Day Arrangement", value: job.four_day_arrangement }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(PrimaryButton, { onClick: () => setIsEditing(true), className: "mt-8", children: "Edit Job" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
  const renderEditForm = () => /* @__PURE__ */ jsxDEV("form", { onSubmit, className: "bg-white p-8 rounded-lg shadow-lg space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxDEV(
        InputField$1,
        {
          id: "title",
          label: "Job Title",
          required: true,
          value: data.title,
          onChange: (e) => handleChangeInput("title", e.target.value),
          error: errors.title
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 62,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        InputField$1,
        {
          id: "company_name",
          label: "Company Name",
          required: true,
          value: data.company_name,
          onChange: (e) => handleChangeInput("company_name", e.target.value),
          error: errors.company_name
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 71,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        SelectField,
        {
          id: "modality",
          label: "Modality",
          value: data.modality,
          onChange: (e) => handleChangeInput("modality", e.target.value),
          error: errors.modality,
          options: [
            { value: "Remote", label: "Remote" },
            { value: "Hybrid", label: "Hybrid" },
            { value: "Office", label: "Office" }
          ]
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 80,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        InputField$1,
        {
          id: "location",
          label: "Location",
          value: data.location,
          onChange: (e) => handleChangeInput("location", e.target.value),
          error: errors.location
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 93,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        InputField$1,
        {
          id: "salary_range",
          label: "Salary Range",
          value: data.salary_range,
          onChange: (e) => handleChangeInput("salary_range", e.target.value),
          error: errors.salary_range
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 101,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        InputField$1,
        {
          id: "apply_url",
          label: "Apply URL",
          required: true,
          value: data.apply_url,
          onChange: (e) => handleChangeInput("apply_url", e.target.value),
          error: errors.apply_url
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 109,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        SelectField,
        {
          id: "four_day_arrangement",
          label: "4-Day Week Arrangement",
          value: data.four_day_arrangement,
          onChange: (e) => handleChangeInput("four_day_arrangement", e.target.value),
          error: errors.four_day_arrangement,
          options: [
            { value: "", label: "Select an option" },
            { value: "standard", label: "Standard 4-day week (32 hours, no salary reduction)" },
            { value: "compressed", label: "Compressed 4-day week (40 hours in 4 days)" },
            { value: "80_percent", label: "80% time for 80% pay (32 hours, pro-rata salary)" },
            { value: "9_day_fortnight", label: "9-day fortnight (every other Friday off)" },
            { value: "flexible", label: "Flexible 4-day week (employee chooses their day off)" },
            { value: "seasonal", label: "Seasonal 4-day week (e.g., summer months only)" },
            { value: "gradual", label: "Gradual transition to 4-day week" },
            { value: "trial", label: "Trial 4-day week (company is testing the concept)" }
          ],
          required: true
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 118,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end space-x-4 mt-8", children: [
      /* @__PURE__ */ jsxDEV(
        PrimaryButton,
        {
          type: "button",
          onClick: () => setIsEditing(false),
          className: "bg-gray-500 hover:bg-gray-600",
          children: "Cancel"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 140,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(PrimaryButton, { type: "submit", disabled: processing, children: processing ? "Saving..." : "Save Changes" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 144,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 139,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 60,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ jsxDEV(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsxDEV("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Job Details" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 155,
        columnNumber: 17
      }, this),
      children: [
        /* @__PURE__ */ jsxDEV(Head, { title: "Job Details" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV(
          Transition,
          {
            show: true,
            enter: "transition-opacity duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "transition-opacity duration-300",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: isEditing ? renderEditForm() : renderJobDetails()
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
            lineNumber: 163,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 162,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
          lineNumber: 176,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 152,
      columnNumber: 9
    },
    this
  );
}
const InfoItem = ({ label, value }) => /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-700", children: [
    label,
    ":"
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 183,
    columnNumber: 9
  }, void 0),
  " ",
  value
] }, void 0, true, {
  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
  lineNumber: 182,
  columnNumber: 5
}, void 0);
const InputField$1 = ({ id, label, required, value, onChange, error }) => /* @__PURE__ */ jsxDEV("div", { children: [
  /* @__PURE__ */ jsxDEV("label", { htmlFor: id, className: "block text-gray-700 font-semibold mb-2", children: [
    label,
    " ",
    required && /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 190,
      columnNumber: 34
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 189,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    "input",
    {
      type: "text",
      id,
      name: id,
      value,
      onChange,
      className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors",
      required
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 192,
      columnNumber: 9
    },
    void 0
  ),
  error && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 text-sm mt-1", children: error }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 201,
    columnNumber: 19
  }, void 0)
] }, void 0, true, {
  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
  lineNumber: 188,
  columnNumber: 5
}, void 0);
const SelectField = ({ id, label, value, onChange, error, options, required }) => /* @__PURE__ */ jsxDEV("div", { children: [
  /* @__PURE__ */ jsxDEV("label", { htmlFor: id, className: "block text-gray-700 font-semibold mb-2", children: [
    label,
    " ",
    required && /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 208,
      columnNumber: 34
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 207,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    "select",
    {
      id,
      name: id,
      value,
      onChange,
      className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors",
      required,
      children: options.map((option) => /* @__PURE__ */ jsxDEV("option", { value: option.value, children: option.label }, option.value, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
        lineNumber: 219,
        columnNumber: 17
      }, void 0))
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
      lineNumber: 210,
      columnNumber: 9
    },
    void 0
  ),
  error && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 text-sm mt-1", children: error }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
    lineNumber: 224,
    columnNumber: 19
  }, void 0)
] }, void 0, true, {
  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/JobDetails.jsx",
  lineNumber: 206,
  columnNumber: 5
}, void 0);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JobDetails
}, Symbol.toStringTag, { value: "Module" }));
const PaymentError = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { title: "4 days week tech jobs - Error listing your job" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
      lineNumber: 6,
      columnNumber: 4
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-white shadow-md", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6 flex justify-between items-center py-4", children: [
      /* @__PURE__ */ jsxDEV(Link, { href: "/", className: "text-3xl font-bold text-blue-600", children: "4 Days Week Tech Jobs" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 9,
        columnNumber: 6
      }, void 0),
      /* @__PURE__ */ jsxDEV("nav", { className: "space-x-4" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 12,
        columnNumber: 6
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-x-4", children: /* @__PURE__ */ jsxDEV(Link, { href: "/login", className: "text-gray-700 hover:text-blue-600", children: "Login" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 13,
        columnNumber: 6
      }, void 0)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, void 0) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
      lineNumber: 7,
      columnNumber: 4
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 bg-gray-50 min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { class: "container mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { class: "max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { class: "text-5xl font-bold mb-4 text-gray-800", children: "Oops!" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { class: "text-xl text-gray-600 mb-8", children: "Something went wrong while trying to post your job." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { class: "text-lg text-gray-700 mb-4", children: "Please check your information and try again." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/post-job",
          class: "bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600",
          children: "Try Again"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
          lineNumber: 30,
          columnNumber: 7
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
      lineNumber: 22,
      columnNumber: 6
    }, void 0) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
      lineNumber: 21,
      columnNumber: 5
    }, void 0) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
      lineNumber: 20,
      columnNumber: 4
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Error.jsx",
    lineNumber: 5,
    columnNumber: 3
  }, void 0);
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PaymentError
}, Symbol.toStringTag, { value: "Module" }));
const PaymentSuccess = ({ isLoggedIn, user }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(Head, { title: "4 days week tech jobs - Success!" }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV(Header, { isLoggedIn, user }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("section", { className: "py-12 bg-gray-50 min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center", children: [
    /* @__PURE__ */ jsxDEV(FontAwesomeIcon, { icon: faCheckCircle, className: "text-green-500 text-6xl mb-4" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
      lineNumber: 12,
      columnNumber: 17
    }, void 0),
    /* @__PURE__ */ jsxDEV("h2", { className: "text-5xl font-bold mb-4 text-gray-800", children: "Success!" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-600 mb-8", children: "Your job has been posted successfully." }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      Link,
      {
        href: "/post-job",
        className: "bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600",
        children: "Post Another Job"
      },
      void 0,
      false,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
        lineNumber: 17,
        columnNumber: 17
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
    lineNumber: 11,
    columnNumber: 13
  }, void 0) }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, void 0)
] }, void 0, true, {
  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Payments/Success.jsx",
  lineNumber: 7,
  columnNumber: 5
}, void 0);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PaymentSuccess
}, Symbol.toStringTag, { value: "Module" }));
dayjs.extend(relativeTime);
const JobCard = ({ post }) => {
  var _a;
  const [isHovered, setIsHovered] = useState(false);
  const handleClickApply = () => {
    window.open(post.apply_url, "_blank");
  };
  const daysSincePosted = dayjs().to(dayjs(post.created_at));
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "relative flex items-center bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 mt-3 mb-3 border border-gray-200 group",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        post.imageBase64 ? /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: `data:image/jpeg;base64,${post.imageBase64}`,
            alt: "Company Logo",
            className: "rounded-full w-16 h-16 mr-4 object-cover",
            title: `${post.company.name} logo`
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
            lineNumber: 31,
            columnNumber: 17
          },
          void 0
        ) : /* @__PURE__ */ jsxDEV("div", { className: "rounded-full w-16 h-16 mr-4 bg-gray-300 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(
          FontAwesomeIcon,
          {
            icon: faBuilding,
            className: "text-gray-600 text-2xl",
            title: "No Company Logo"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
            lineNumber: 39,
            columnNumber: 21
          },
          void 0
        ) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
          lineNumber: 38,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-grow", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: ((_a = post == null ? void 0 : post.company) == null ? void 0 : _a.name) || (post == null ? void 0 : post.company_name) }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
              lineNumber: 49,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-gray-800", children: post.title }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
              lineNumber: 52,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row mt-2 space-y-2 sm:space-y-0 sm:space-x-2", children: [
              post.salary_range && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("span", { className: "inline-block bg-[#14B8A6] text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1", children: [
                /* @__PURE__ */ jsxDEV(
                  FontAwesomeIcon,
                  {
                    icon: faMoneyBillWave
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                    lineNumber: 59,
                    columnNumber: 41
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { children: post.salary_range }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                  lineNumber: 62,
                  columnNumber: 41
                }, void 0)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                lineNumber: 58,
                columnNumber: 37
              }, void 0) }, void 0, false, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                lineNumber: 57,
                columnNumber: 33
              }, void 0),
              post.location && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("span", { className: "inline-block bg-[#EAB308] text-gray-800 text-xs px-2 py-1 rounded-full flex items-center space-x-1", children: [
                /* @__PURE__ */ jsxDEV(
                  FontAwesomeIcon,
                  {
                    icon: faMapMarkerAlt
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                    lineNumber: 69,
                    columnNumber: 41
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { children: post.location }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                  lineNumber: 72,
                  columnNumber: 41
                }, void 0)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                lineNumber: 68,
                columnNumber: 37
              }, void 0) }, void 0, false, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                lineNumber: 67,
                columnNumber: 33
              }, void 0),
              post.modality && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("span", { className: "inline-block bg-[#EC4899] text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1", children: [
                /* @__PURE__ */ jsxDEV(FontAwesomeIcon, { icon: faLaptopHouse }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                  lineNumber: 79,
                  columnNumber: 41
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: post.modality }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                  lineNumber: 80,
                  columnNumber: 41
                }, void 0)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                lineNumber: 78,
                columnNumber: 37
              }, void 0) }, void 0, false, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                lineNumber: 77,
                columnNumber: 33
              }, void 0)
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
              lineNumber: 55,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
            lineNumber: 48,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-gray-600 space-x-4", children: isHovered ? /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleClickApply,
              className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-opacity duration-300 flex items-center space-x-2",
              children: [
                /* @__PURE__ */ jsxDEV("span", { children: "Apply" }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                  lineNumber: 92,
                  columnNumber: 33
                }, void 0),
                /* @__PURE__ */ jsxDEV(FontAwesomeIcon, { icon: faExternalLinkAlt }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
                  lineNumber: 93,
                  columnNumber: 33
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
              lineNumber: 88,
              columnNumber: 29
            },
            void 0
          ) : /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-500", children: daysSincePosted }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
            lineNumber: 96,
            columnNumber: 29
          }, void 0) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
            lineNumber: 86,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
          lineNumber: 47,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/JobCard.jsx",
      lineNumber: 25,
      columnNumber: 9
    },
    void 0
  );
};
const Signup = ({ handleChangeInput, errors }) => /* @__PURE__ */ jsxDEV("div", { className: "my-8 p-6 bg-gradient-to-r from-blue-50 to-blue-60 border  rounded-lg shadow-sm", children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-semibold text-blue-700 mb-4", children: "Sign Up" }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-4", children: "This is required to edit your posts, if necessary. We will not use your email to send you spam." }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxDEV(
      "label",
      {
        htmlFor: "email",
        className: "block text-gray-700 font-bold mb-2",
        children: [
          "Email",
          /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
            lineNumber: 13,
            columnNumber: 22
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
        lineNumber: 9,
        columnNumber: 13
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        type: "email",
        id: "email",
        name: "email",
        className: "w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
        required: true,
        onChange: (e) => handleChangeInput("email", e.target.value),
        placeholder: "Email"
      },
      void 0,
      false,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
        lineNumber: 15,
        columnNumber: 13
      },
      void 0
    ),
    errors.email ? /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: errors.email }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
      lineNumber: 25,
      columnNumber: 17
    }, void 0) : null
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxDEV(
      "label",
      {
        htmlFor: "username",
        className: "block text-gray-700 font-bold mb-2",
        children: [
          "Username",
          /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
            lineNumber: 33,
            columnNumber: 25
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
        lineNumber: 29,
        columnNumber: 13
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        type: "text",
        id: "username",
        name: "username",
        className: "w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
        required: true,
        onChange: (e) => handleChangeInput("username", e.target.value),
        placeholder: "Username"
      },
      void 0,
      false,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
        lineNumber: 35,
        columnNumber: 13
      },
      void 0
    ),
    errors.username ? /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: errors.username }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, void 0) : null
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
    lineNumber: 28,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "flex !flex-row", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4 flex-1", children: [
      /* @__PURE__ */ jsxDEV(
        "label",
        {
          htmlFor: "password",
          className: "block text-gray-700 font-bold mb-2",
          children: [
            "Password",
            /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
              lineNumber: 54,
              columnNumber: 29
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
          lineNumber: 50,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "password",
          id: "password",
          name: "password",
          className: "w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
          required: true,
          onChange: (e) => handleChangeInput("password", e.target.value),
          placeholder: "Password"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
          lineNumber: 56,
          columnNumber: 17
        },
        void 0
      ),
      errors.password ? /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: errors.password }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
        lineNumber: 68,
        columnNumber: 21
      }, void 0) : null
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
      lineNumber: 49,
      columnNumber: 13
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4 ml-3 flex-1", children: [
      /* @__PURE__ */ jsxDEV(
        "label",
        {
          htmlFor: "password_confirmation",
          className: "block text-gray-700 font-bold mb-2",
          children: [
            "Repeat password",
            /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
              lineNumber: 77,
              columnNumber: 21
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
          lineNumber: 72,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "password",
          id: "password_confirmation",
          name: "password_confirmation",
          className: "w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
          required: true,
          onChange: (e) => handleChangeInput(
            "password_confirmation",
            e.target.value
          ),
          placeholder: "Password"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
          lineNumber: 79,
          columnNumber: 17
        },
        void 0
      ),
      errors.password ? /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: errors.password }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
        lineNumber: 94,
        columnNumber: 21
      }, void 0) : null
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
      lineNumber: 71,
      columnNumber: 13
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, void 0)
] }, void 0, true, {
  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Signup.jsx",
  lineNumber: 2,
  columnNumber: 5
}, void 0);
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Signup
}, Symbol.toStringTag, { value: "Module" }));
const JobPosting = ({ isLoggedIn, user }) => {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    modality: "remote",
    salary_range: "",
    location: "",
    apply_url: "",
    company_name: "",
    company_logo: "",
    username: "",
    four_day_arrangement: "",
    email: "",
    password: "",
    password_confirmation: "",
    technologies: []
  });
  const handleChangeInput = (field, value) => {
    setData({ ...data, [field]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    post(route("jobs.store"));
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Post a 4-Day Week Tech Job | 4daystechjobs" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 36,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Advertise your 4-day week tech job openings to attract top talent. Reach developers and tech professionals seeking work-life balance with our specialized job board."
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 37,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:title",
          content: "Post a 4-Day Week Tech Job | 4daystechjobs"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 43,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Find the best tech talent for your 4-day week positions. Post your job openings on the leading job board for work-life balance in tech."
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 47,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 51,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:url",
          content: "https://4daystechjobs.com/post-job"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 52,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:title",
          content: "Post a 4-Day Week Tech Job | 4daystechjobs"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 59,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Reach tech professionals seeking work-life balance. Post your 4-day week job openings on our specialized job board."
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 63,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "keywords",
          content: "4-day week jobs, tech jobs, work-life balance, job posting, tech recruitment, flexible work"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 69,
          columnNumber: 17
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "link",
        {
          rel: "canonical",
          href: "https://4daystechjobs.com/post-job"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 74,
          columnNumber: 17
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { isLoggedIn, user }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "pt-20 md:pt-28 lg:pt-32 bg-gray-100 min-h-screen pb-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 sm:px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl sm:text-5xl font-bold mb-8 text-gray-800 text-center", children: "Post a Job" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg mb-12 text-center text-gray-600", children: "Use the form below to post a new job opening at your company. Please fill out all required fields and provide as much detail as possible to attract the best candidates." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 85,
        columnNumber: 21
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-lg shadow-lg", children: /* @__PURE__ */ jsxDEV(
        "form",
        {
          encType: "multipart/form-data",
          method: "post",
          onSubmit,
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV(
                InputField,
                {
                  id: "title",
                  label: "Job Title",
                  required: true,
                  placeholder: "Frontend Developer with React",
                  value: data.title,
                  onChange: (e) => handleChangeInput(
                    "title",
                    e.target.value
                  ),
                  error: errors.title
                },
                void 0,
                false,
                {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 99,
                  columnNumber: 33
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                InputField,
                {
                  id: "apply_url",
                  label: "Apply URL",
                  required: true,
                  placeholder: "https://apply.example.com",
                  value: data.apply_url,
                  onChange: (e) => handleChangeInput(
                    "apply_url",
                    e.target.value
                  ),
                  error: errors.apply_url
                },
                void 0,
                false,
                {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 114,
                  columnNumber: 33
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
              lineNumber: 98,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(
                  "label",
                  {
                    htmlFor: "four_day_week_type",
                    className: "block text-gray-700 font-bold mb-2",
                    children: [
                      "4-Day Week Arrangement",
                      " ",
                      /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 137,
                        columnNumber: 41
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                    lineNumber: 132,
                    columnNumber: 37
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    id: "four_day_week_type",
                    name: "four_day_week_type",
                    className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
                    required: true,
                    onChange: (e) => handleChangeInput(
                      "four_day_arrangement",
                      e.target.value
                    ),
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select an option" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 151,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "standard", children: "Standard 4-day week (32 hours, no salary reduction)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 154,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "compressed", children: "Compressed 4-day week (40 hours in 4 days)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 158,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "80_percent", children: "80% time for 80% pay (32 hours, pro-rata salary)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 162,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "9_day_fortnight", children: "9-day fortnight (every other Friday off)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 166,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "flexible", children: "Flexible 4-day week (employee chooses their day off)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 170,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "seasonal", children: "Seasonal 4-day week (e.g., summer months only)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 174,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "gradual", children: "Gradual transition to 4-day week" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 178,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "trial", children: "Trial 4-day week (company is testing the concept)" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 181,
                        columnNumber: 41
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                    lineNumber: 139,
                    columnNumber: 37
                  },
                  void 0
                ),
                errors.four_day_arrangement && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: errors.four_day_arrangement }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 187,
                  columnNumber: 41
                }, void 0)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 131,
                columnNumber: 33
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                InputField,
                {
                  id: "salary_range",
                  label: "Salary Range",
                  placeholder: "$100,000-$200,000, 50.000€-70.000€",
                  value: data.salary_range,
                  onChange: (e) => handleChangeInput(
                    "salary_range",
                    e.target.value
                  ),
                  error: errors.salary_range
                },
                void 0,
                false,
                {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 193,
                  columnNumber: 33
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
              lineNumber: 130,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV(
                InputField,
                {
                  id: "location",
                  label: "Location",
                  placeholder: "New York City, USA",
                  value: data.location,
                  onChange: (e) => handleChangeInput(
                    "location",
                    e.target.value
                  ),
                  error: errors.location
                },
                void 0,
                false,
                {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 209,
                  columnNumber: 33
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(
                  "label",
                  {
                    htmlFor: "modality",
                    className: "block text-gray-700 font-bold mb-2",
                    children: "Modality"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                    lineNumber: 224,
                    columnNumber: 37
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    id: "modality",
                    name: "modality",
                    value: data.modality,
                    onChange: (e) => handleChangeInput(
                      "modality",
                      e.target.value
                    ),
                    className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "remote", children: "Remote" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 242,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "hybrid", children: "Hybrid" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 243,
                        columnNumber: 41
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "office", children: "Office" }, void 0, false, {
                        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                        lineNumber: 244,
                        columnNumber: 41
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                    lineNumber: 230,
                    columnNumber: 37
                  },
                  void 0
                ),
                errors.modality && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 text-sm", children: errors.modality }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 247,
                  columnNumber: 41
                }, void 0)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 223,
                columnNumber: 33
              }, void 0)
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
              lineNumber: 208,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV(
                InputField,
                {
                  id: "company_name",
                  label: "Company Name",
                  required: true,
                  placeholder: "Your awesome company",
                  value: data.company_name,
                  onChange: (e) => handleChangeInput(
                    "company_name",
                    e.target.value
                  ),
                  error: errors.company_name
                },
                void 0,
                false,
                {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 255,
                  columnNumber: 33
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(
                  "label",
                  {
                    htmlFor: "company_logo",
                    className: "block text-gray-700 font-bold mb-2",
                    children: "Company Logo"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                    lineNumber: 271,
                    columnNumber: 37
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "file",
                    id: "company_logo",
                    name: "company_logo",
                    onChange: (event) => handleChangeInput(
                      "company_logo",
                      event.target.files[0]
                    ),
                    className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                    lineNumber: 277,
                    columnNumber: 37
                  },
                  void 0
                ),
                errors.company_logo && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 text-sm", children: errors.company_logo }, void 0, false, {
                  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                  lineNumber: 290,
                  columnNumber: 41
                }, void 0)
              ] }, void 0, true, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 270,
                columnNumber: 33
              }, void 0)
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
              lineNumber: 254,
              columnNumber: 29
            }, void 0),
            !isLoggedIn && /* @__PURE__ */ jsxDEV(
              Signup,
              {
                errors,
                handleChangeInput
              },
              void 0,
              false,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 298,
                columnNumber: 33
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", children: "Preview:" }, void 0, false, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 305,
                columnNumber: 33
              }, void 0),
              /* @__PURE__ */ jsxDEV(JobCard, { post: data }, void 0, false, {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 308,
                columnNumber: 33
              }, void 0)
            ] }, void 0, true, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
              lineNumber: 304,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "submit",
                disabled: processing,
                className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-auto",
                children: processing ? "Processing..." : "Checkout + Post Job"
              },
              void 0,
              false,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
                lineNumber: 312,
                columnNumber: 33
              },
              void 0
            ) }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
              lineNumber: 311,
              columnNumber: 29
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
          lineNumber: 92,
          columnNumber: 25
        },
        void 0
      ) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
        lineNumber: 91,
        columnNumber: 21
      }, void 0)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 81,
      columnNumber: 17
    }, void 0) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 80,
      columnNumber: 13
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 326,
      columnNumber: 13
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
    lineNumber: 34,
    columnNumber: 9
  }, void 0);
};
const InputField = ({
  id,
  label,
  required,
  placeholder,
  value,
  onChange,
  error,
  className = ""
}) => /* @__PURE__ */ jsxDEV("div", { className, children: [
  /* @__PURE__ */ jsxDEV("label", { htmlFor: id, className: "block text-gray-700 font-bold mb-2", children: [
    label,
    " ",
    required && /* @__PURE__ */ jsxDEV("span", { className: "text-red-500", children: "*" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 343,
      columnNumber: 34
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
    lineNumber: 342,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    "input",
    {
      type: "text",
      id,
      name: id,
      value,
      onChange,
      placeholder,
      className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
      required
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
      lineNumber: 345,
      columnNumber: 9
    },
    void 0
  ),
  error && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 text-sm", children: error }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
    lineNumber: 355,
    columnNumber: 19
  }, void 0)
] }, void 0, true, {
  fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/PostJob.jsx",
  lineNumber: 341,
  columnNumber: 5
}, void 0);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JobPosting
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/DangerButton.jsx",
      lineNumber: 8,
      columnNumber: 3
    },
    this
  );
}
function Modal({
  children,
  show = false,
  maxWidth = "2xl",
  closeable = true,
  onClose = () => {
  }
}) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsxDEV(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxDEV(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsxDEV(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gray-500/75" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Modal.jsx",
              lineNumber: 42,
              columnNumber: 6
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Modal.jsx",
            lineNumber: 33,
            columnNumber: 5
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsxDEV(
              Dialog.Panel,
              {
                className: `mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              },
              void 0,
              false,
              {
                fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Modal.jsx",
                lineNumber: 54,
                columnNumber: 6
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Modal.jsx",
            lineNumber: 45,
            columnNumber: 5
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Modal.jsx",
      lineNumber: 27,
      columnNumber: 4
    },
    this
  ) }, void 0, false, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Components/Modal.jsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}
function SecondaryButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Components/SecondaryButton.jsx",
      lineNumber: 9,
      columnNumber: 3
    },
    this
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxDEV("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxDEV("header", { children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-medium text-gray-900", children: "Delete Account" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
        lineNumber: 51,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
      lineNumber: 48,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
      lineNumber: 58,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxDEV("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-medium text-gray-900", children: "Are you sure you want to delete your account?" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
        lineNumber: 62,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
        lineNumber: 66,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxDEV(
          InputLabel,
          {
            htmlFor: "password",
            value: "Password",
            className: "sr-only"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
            lineNumber: 73,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
            lineNumber: 79,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
          lineNumber: 91,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
        lineNumber: 72,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsxDEV(SecondaryButton, { onClick: closeModal, children: "Cancel" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
          lineNumber: 95,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(DangerButton, { className: "ms-3", disabled: processing, children: "Delete Account" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
          lineNumber: 97,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
        lineNumber: 94,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
      lineNumber: 61,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
      lineNumber: 60,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx",
    lineNumber: 47,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxDEV("section", { className, children: [
    /* @__PURE__ */ jsxDEV("header", { children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-medium text-gray-900", children: "Update Password" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-600", children: "Ensure your account is using a long, random password to stay secure." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "current_password", value: "Current Password" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
            lineNumber: 54,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.current_password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
          lineNumber: 64,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "password", value: "New Password" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
          lineNumber: 68,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
            lineNumber: 70,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
          lineNumber: 80,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
        lineNumber: 67,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: "Confirm Password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
            lineNumber: 84,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
            lineNumber: 89,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { message: errors.password_confirmation, className: "mt-2" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
          lineNumber: 98,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
        lineNumber: 83,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV(PrimaryButton, { disabled: processing, children: "Save" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
          lineNumber: 102,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "Saved." }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
              lineNumber: 111,
              columnNumber: 7
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
            lineNumber: 104,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
        lineNumber: 101,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
      lineNumber: 50,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx",
    lineNumber: 41,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = ""
}) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxDEV("section", { className, children: [
    /* @__PURE__ */ jsxDEV("header", { children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-medium text-gray-900", children: "Profile Information" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
        lineNumber: 30,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-600", children: "Update your account's profile information and email address." }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
        lineNumber: 34,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "name", value: "Name" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 41,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
            lineNumber: 43,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { className: "mt-2", message: errors.name }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 53,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(InputLabel, { htmlFor: "email", value: "Email" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 57,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
            lineNumber: 59,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(InputError, { className: "mt-2", message: errors.email }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 69,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
        lineNumber: 56,
        columnNumber: 5
      }, this),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Click here to re-send the verification email."
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
              lineNumber: 76,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        status === "verification-link-sent" && /* @__PURE__ */ jsxDEV("div", { className: "mt-2 font-medium text-sm text-green-600", children: "A new verification link has been sent to your email address." }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 87,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
        lineNumber: 73,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV(PrimaryButton, { disabled: processing, children: "Save" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
          lineNumber: 95,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "Saved." }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
              lineNumber: 104,
              columnNumber: 7
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
            lineNumber: 97,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
        lineNumber: 94,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
      lineNumber: 39,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxDEV(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsxDEV("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
        lineNumber: 12,
        columnNumber: 5
      }, this),
      children: [
        /* @__PURE__ */ jsxDEV(Head, { title: "Profile" }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
          lineNumber: 17,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsxDEV(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
              lineNumber: 22,
              columnNumber: 7
            },
            this
          ) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
            lineNumber: 21,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsxDEV(UpdatePasswordForm, { className: "max-w-xl" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
            lineNumber: 30,
            columnNumber: 7
          }, this) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
            lineNumber: 29,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsxDEV(DeleteUserForm, { className: "max-w-xl" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
            lineNumber: 34,
            columnNumber: 7
          }, this) }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
            lineNumber: 33,
            columnNumber: 6
          }, this)
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
          lineNumber: 20,
          columnNumber: 5
        }, this) }, void 0, false, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
          lineNumber: 19,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Profile/Edit.jsx",
      lineNumber: 9,
      columnNumber: 3
    },
    this
  );
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const TechnologySelector = ({ technologies, onChange, error }) => {
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(
      "label",
      {
        htmlFor: "technologies",
        className: "block text-gray-700 font-bold mb-2",
        children: "Technologies (up to 4)"
      },
      void 0,
      false,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
        lineNumber: 4,
        columnNumber: 13
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "select",
      {
        id: "technologies",
        multiple: true,
        value: technologies,
        onChange,
        className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
        children: [
          /* @__PURE__ */ jsxDEV("option", { value: "react", children: "React" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 17,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "vue", children: "Vue" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 18,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "angular", children: "Angular" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 19,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "nodejs", children: "Node.js" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 20,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "python", children: "Python" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 21,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "java", children: "Java" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 22,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "ruby", children: "Ruby" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 23,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { value: "php", children: "PHP" }, void 0, false, {
            fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
            lineNumber: 24,
            columnNumber: 17
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      void 0
    ),
    error && /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 text-sm", children: error }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
      lineNumber: 26,
      columnNumber: 23
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/TechnologySelector.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, void 0);
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TechnologySelector
}, Symbol.toStringTag, { value: "Module" }));
function Index({ auth, posts, isLoggedIn }) {
  const metaDescription = "Discover 4-day work week tech jobs. Explore career opportunities with extended weekends at innovative companies. Find work-life balance in the tech industry.";
  const canonicalUrl = "https://4daystechjobs.com";
  const description = "Elevate your work-life balance with a 4-day work week in tech. Find remote jobs worldwide offering full pay for 32-hour weeks. Join the future of work today!";
  const siteUrl = canonicalUrl;
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "4-Day Work Week Tech Jobs | Find Balance in Your Career" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: metaDescription }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "keywords",
          content: "4-day work week, tech jobs, work-life balance, software engineering, IT careers, flexible work, 32-hour week"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 23,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonicalUrl }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:title",
          content: "4-Day Work Week Tech Jobs | Find Balance in Your Career"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 30,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: metaDescription }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonicalUrl }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:image",
          content: `${canonicalUrl}/og-image.jpg`
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 37,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:title",
          content: "4-Day Work Week Tech Jobs | Find Balance in Your Career"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 44,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: metaDescription }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:image",
          content: `${canonicalUrl}/twitter-image.jpg`
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 49,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 55,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "googlebot", content: "index, follow" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "bingbot", content: "index, follow" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "application-name", content: "4-Day Week Tech Jobs" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "apple-mobile-web-app-title",
          content: "4-Day Week Tech Jobs"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 62,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "Your Company Name" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        void 0,
        false,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 67,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        name: "4 Day Work Week Tech Jobs",
        description,
        datePosted: (/* @__PURE__ */ new Date()).toISOString(),
        employmentType: "FULL_TIME",
        jobLocationType: "TELECOMMUTE",
        hiringOrganization: {
          "@type": "Organization",
          name: "YourSite.io",
          sameAs: siteUrl
        },
        jobBenefits: "4 day work week, Full pay for 32 hours",
        workHours: "32 hours per week"
      }) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Header, { user: auth.user, isLoggedIn }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 92,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-20 pt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl font-bold mb-2", children: "Tech Careers with 3-Day Weekends" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-2xl mb-8", children: "Explore Jobs at Companies Pioneering the 4-Day Work Week" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 98,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/post-job",
          className: "bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white hover:shadow",
          children: [
            /* @__PURE__ */ jsxDEV(FontAwesomeIcon, { icon: faBriefcase }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
              lineNumber: 105,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "ml-3", children: "Post a Job" }, void 0, false, {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
              lineNumber: 106,
              columnNumber: 25
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 101,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 94,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 93,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "jobs", className: "py-12 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl ", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold mb-6 text-gray-700 text-center", children: posts.data.length ? "Latest Jobs" : "No jobs found" }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 112,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col min-h-screen", children: posts.data.map((post) => /* @__PURE__ */ jsxDEV(JobCard, { post }, post.id, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 117,
        columnNumber: 29
      }, this)) }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 115,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mt-6", children: [
        /* @__PURE__ */ jsxDEV("span", { children: [
          "Showing page ",
          posts.current_page,
          " of",
          " ",
          posts.last_page
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 121,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-4", children: [
          posts.prev_page_url && /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "px-4 py-2 rounded bg-white text-blue-500",
              onClick: () => window.location.href = posts.prev_page_url,
              children: "Previous page"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
              lineNumber: 127,
              columnNumber: 33
            },
            this
          ),
          posts.next_page_url && /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "px-4 py-2 rounded bg-white text-blue-500",
              onClick: () => window.location.href = posts.next_page_url,
              children: "Next page"
            },
            void 0,
            false,
            {
              fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
              lineNumber: 138,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
          lineNumber: 125,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
        lineNumber: 120,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 111,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 110,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
      lineNumber: 152,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/home/dabit/4daysweekjobs/resources/js/Pages/Welcome.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/AboutUs.jsx": __vite_glob_0_0, "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_1, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_2, "./Pages/Auth/Login.jsx": __vite_glob_0_3, "./Pages/Auth/Register.jsx": __vite_glob_0_4, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_5, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_6, "./Pages/Dashboard.jsx": __vite_glob_0_7, "./Pages/JobDetails.jsx": __vite_glob_0_8, "./Pages/Payments/Error.jsx": __vite_glob_0_9, "./Pages/Payments/Success.jsx": __vite_glob_0_10, "./Pages/PostJob.jsx": __vite_glob_0_11, "./Pages/Profile/Edit.jsx": __vite_glob_0_12, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_13, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_14, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_15, "./Pages/Signup.jsx": __vite_glob_0_16, "./Pages/TechnologiesSelector.jsx": __vite_glob_0_17, "./Pages/Welcome.jsx": __vite_glob_0_18 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ el, App, props }) => {
      ReactGA.initialize("G-V4GZWF4FY2");
      const root = createRoot(el);
      root.render(/* @__PURE__ */ jsxDEV(App, { ...props }, void 0, false, {
        fileName: "/home/dabit/4daysweekjobs/resources/js/ssr.jsx",
        lineNumber: 18,
        columnNumber: 25
      }, void 0));
    }
  })
);
