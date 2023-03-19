const { EventEmitter } = require('events');

module.exports = class DispatchRunner {

  /**
   * @param {EventEmitter} subject 
   */
  constructor(subject) {
    this.subject = subject;
    this.subject.on('full', this.full);
    this.subject.on('partial', this.partial);
    this.subject.on('google-ads', this.googleAds);
    this.subject.on('partail-google-ads', this.partialGoogleAds);
  }

  full() {
    console.log("full logic");
  }

  partial(items) {
    console.log("partial logic");
  }

  googleAds() {
    console.log("google ads logic");
  }

  partialGoogleAds(items) {
    console.log("partial google ads logic");
  }
}
