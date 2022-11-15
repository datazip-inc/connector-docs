const { remarkCodeHike } = require("@code-hike/mdx");
// const theme = require("shiki/themes/github-dark.json"); // any theme from shiki
const theme = require("shiki/themes/monokai.json");

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [[remarkCodeHike, { theme }]],
        rehypePlugins: [],
    },
});

module.exports = withMDX({
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            ...[
                {
                    test: /\.yml$/,
                    type: "json",
                    use: "yaml-loader",
                },
                {
                    test: /\.svg$/,
                    use: "@svgr/webpack",
                },
            ]
        );
        return config;
    },
});

// module.exports = ({
//   pageExtensions: ["tsx"],
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.module.rules.push(
//       ...[
//         {
//           test: /\.yml$/,
//           type: "json",
//           use: "yaml-loader",
//         },
//         {
//           test: /\.svg$/,
//           use: "@svgr/webpack",
//         },
//       ]
//     );
//     return config;
//   },
// });
