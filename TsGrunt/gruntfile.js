module.exports = function (grunt) {
    "use strict";
    var webpack = require("webpack");
    require("time-grunt")(grunt);
    var path = require("path");
  
    grunt.initConfig({
        webpack: {
            compile_client: {
                entry: ["./src/painter/painter_app.ts"],
                output: {
                  path: path.resolve(__dirname, "dist"), filename: "app.js"
                },
                
                module: {          
                  loaders: [{
                    test: /\.tsx?$/, 
                    loader: "ts-loader",            
                    options: {
                      transpileOnly: true
                    }
                  }]
                },
                resolve: { 
                    extensions: [".ts", ".js"] 
                }
            }
        },
        copy: {
            client_static: {
                files: [{ expand: true, cwd: "./src/painter/images", src: ["**"], dest: "./dist/images" }]
            }
        } 
    });
    
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-contrib-copy");
  
    grunt.registerTask("default", [
        "webpack",
        "copy"
    ]);
  };
