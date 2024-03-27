module.exports = {
  apps: [
    {
      name: "FEsujian",
      port: "8080",
      exec_mode: "cluster",
      instances: "max",
      script: "./index.mjs",
    },
  ],
};
