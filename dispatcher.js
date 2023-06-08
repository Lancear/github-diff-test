const { EventEmitter } = require('events');

module.exports = class Dispatcer {
  constructor() {
    this.emitter = new EventEmitter();
  }

  full() {
    this.emitter.emit('full');
  }

  partial() {
    this.emitter.emit('partial', [1, 5, 3]);
  }

  googleAds() {
    this.emitter.emit('google-ads');
  }

  partialGoogleAds() {
    this.emitter.emit('partial-google-ads', [1, 5, 3]);
  }
}
