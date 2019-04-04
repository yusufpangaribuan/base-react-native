module.exports = function(api) {
  api.cache(true);
  return {
    presets : [
      [
        "@babel/preset-env",
        {
          targets : {
            node : "current"
          }
        }
      ],
      "babel-preset-expo"
    ],
    plugins : [
      [
        "module-resolver",
        {
          alias : {
            "~"           : "./src",
            "@assets"     : "./assets",
            "@fonts"      : "./fonts",
            "@languages"  : "./languages"
          }
        }
      ],
      "@babel/plugin-proposal-optional-chaining",
      [ 
        "@babel/plugin-proposal-decorators", 
        { legacy : true } 
      ],
      "transform-class-properties"
    ]
  };
};
