import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import React from "react";
import ReactGA from "react-ga4";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
            return pages[`./Pages/${name}.jsx`];
        },
        setup: ({ el, App, props }) => {
            ReactGA.initialize("G-V4GZWF4FY2");
            const root = createRoot(el);

            root.render(<App {...props} />);
        },
    })
);
