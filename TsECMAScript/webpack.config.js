var path = require('path');
module.exports = {
  //entry: './src/factory/client_factory.ts',
  //entry: './src/facade/client_facade.ts',
  //entry: './src/adapter/client_adapter.ts',
  //entry: './src/abstractfactory/client_abstractfactory.ts',
  //entry: './src/bridge/client_bridge.ts',
  entry: './src/builder/client_builder.ts',
  //entry: './src/chain/client_chain.ts',
  //entry: './src/command/client_command.ts',
  //entry: './src/composite/client_composite.ts',
  //entry: './src/decorator/client_decorator.ts',
  //entry: './src/factorymethod/client_factorymethod.ts',
  //entry: './src/flyweight/client_flyweight.ts',
  //entry: './src/interpreter/client_interpreter.ts',
  //entry: './src/iterator/client_iterator.ts',
  //entry: './src/mediator/client_main.ts',
  //entry: './src/memento/operation_caretaker.ts',
  //entry: './src/observer/client_observer.ts',
  //entry: './src/prototype/client_prototype.ts',
  //entry: './src/proxy/client_proxy.ts',
  //entry: './src/singleton/client_singleton.ts',
  //entry: './src/state/client_state.ts',
  //entry: './src/strategy/client_strategy.ts',
  //entry: './src/templatemethod/client_templatemethod.ts',
  //entry: './src/visitor/client_visitor.ts',
  output: {
	filename: 'app.js',
	path: path.resolve(__dirname, 'dist')
  },
  module:{
        loaders:[{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
