const DispatchRunner = require("./dispatch-runner");
const Dispatcher = require("./dispatcher");

const dispatcher = new Dispatcher();
new DispatchRunner(dispatcher.emitter);

dispatcher.googleAds();
