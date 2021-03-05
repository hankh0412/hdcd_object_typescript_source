var path = require('path');
module.exports = {
  //entry: './src/factory/client_factory_main.ts',
  //entry: './src/facade/client_facade_main.ts',
  //entry: './src/adapter/client_adapter_main.ts',
  //entry: './src/abstractfactory/client_abstractfactory_main.ts',
  //entry: './src/bridge/client_bridge_main.ts',
  entry: './src/builder/client_builder_main.ts',
  //entry: './src/chain/client_chain_main.ts',
  //entry: './src/command/client_command_main.ts',
  //entry: './src/composite/client_composite_main.ts',
  //entry: './src/decorator/client_decorator_main.ts',
  //entry: './src/factorymethod/client_factorymethod_main.ts',
  //entry: './src/flyweight/client_flyweight_main.ts',
  //entry: './src/interpreter/client_interpreter_main.ts',
  //entry: './src/iterator/client_iterator_main.ts',
  //entry: './src/mediator/client_mediator_main.ts',
  //entry: './src/memento/operation_caretaker_main.ts',
  //entry: './src/observer/client_observer_main.ts',
  //entry: './src/prototype/client_prototype_main.ts',
  //entry: './src/proxy/client_proxy_main.ts',
  //entry: './src/singleton/client_singleton_main.ts',
  //entry: './src/state/client_state_main.ts',
  //entry: './src/strategy/client_strategy_main.ts',
  //entry: './src/templatemethod/client_templatemethod_main.ts',
  //entry: './src/visitor/client_visitor_main.ts',
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
