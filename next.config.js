exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/grid": { page: "/grid" },
  "/multiline": { page: "/multiline" },
})
// module.exports = {
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }
