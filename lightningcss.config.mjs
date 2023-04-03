import autoprefixer from "autoprefixer";

export default {
  input: "src/index.css",
  output: {
    dir: "dist/css",
    entryFileNames: "main.css"
  },
  plugins: [
    autoprefixer()
  ],
  targets: [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
};