var should       = require('should'),
    EventEmitter = require('../vnt').EventEmitter,
    em;

beforeEach(function() {
  em = new EventEmitter();
});

describe('EventEmitter', function() {
  it('should still be a constructor', function() {
    em.should.be.an.instanceof(EventEmitter);
  });

  it('should include an `Event` method', function() {
    em.event.should.be.a.method;
  });

  describe('.event', function() {
    it('should err if called without an event name', function() {
      em.event.should.throw();
    });

    it('should return an Event', function() {
      event = em.event('event');
      // If it walks like a duck...
      event.parent.should.equal(em);
      // ...and squawks like a duck...
      event.name.should.equal('event');
      // ...then it's a duck.
    
    });
    xit('should return the same Event if called twice', function() {
      eventOne = em.event('event');
      eventTwo = em.event('event');
      eventOne.should.equal(eventTwo);
    });
  });
});

var event, noop, oneop;

describe('Event', function() {
  beforeEach(function() {
    event = em.event('event');
    noop = function() { /* noop */ };
    oneop = function() { return 1 + 1; };
  });

  describe('.addListener', function() {
    it('should be a method', function() {
      event.addListener.should.be.a.method;
    });

    it('should add a listener to the _events object', function() {
      event.addListener(noop);
      em._events.event.should.equal(noop);
      event.addListener(oneop);
      em._events.event.indexOf(noop).should.not.equal(-1);
      em._events.event.indexOf(oneop).should.not.equal(-1);
    });
  });

  describe('.on', function() {
    it('should be a method', function() {
      event.on.should.be.a.method;
    });

    it('should add a listener to the _events object', function() {
      event.on(noop);
      em._events.event.should.equal(noop);
      event.on(oneop);
      em._events.event.indexOf(noop).should.not.equal(-1);
      em._events.event.indexOf(oneop).should.not.equal(-1);
    });
  });

  describe('.once', function() {
    it('should be a method', function() {
      event.once.should.be.a.method;
    });

    it('should add something to the _events object', function() {
      event.once(noop);
      em._events.event.should.not.be.empty;
    });

    it('should remove that thing from the _events object after being called', function() {
      event.once(noop);
      event.emit();

      var events = em._events.event;
      (events === undefined).should.be.true;
    });
  });

  describe('.removeListener', function() {
    it('should be a method', function() {
      event.removeListener.should.be.a.method;
    });

    it('should remove a listener from the _events', function() {
      event.on(noop);
      event.removeListener(noop);

      var events = em._events.event;
      (events === undefined).should.be.true;
    });
  });

  describe('.removeAllListeners', function() {
    it('should be a method', function() {
      event.removeAllListeners.should.be.a.method;
    });

    it('should remove all listeners from the _events', function() {
      event.on(noop);
      event.on(oneop);
      event.removeAllListeners();

      var events = em._events.event;
      (events === undefined).should.be.true;
    });
  });

  describe('.setMaxListeners', function() {
    it('should not be a method', function() {
      // It is a method of EventEmitter, but is not event-specific
      var method = event.setMaxListeners;
      (method === undefined).should.be.true;
    });
  });

  describe('.listeners', function() {
    it('should be a method', function() {
      event.listeners.should.be.a.method;
    });

    it('should return the _events.event array', function() {
      event.on(noop);
      event.on(oneop);

      event.listeners().should.eql([noop, oneop]);
    });
  });

  describe('.emit', function() {
    it('should be a method', function() {
      event.emit.should.be.a.method;
    });

    it('should invoke a registered listener', function() {
      var flag = false;

      event.on(function() { flag = true; });
      event.emit();

      flag.should.be.true;
    });
  });

  describe('.event', function() {
    it('should not be a method', function() {
      var method = event.event;
      (method === undefined).should.be.true;
    });
  });
});