vnt
===

> Take events out of your EventEmitter

Once upon a time, events were trapped in their emitters. They yearned to get out, and noone would show them a way...until now!

__vnt__ allows you to take the events out of your [`EventEmitter`](http://nodejs.org/api/events.html#events_class_events_eventemitter) derived classes. With events as their own objects, they can be passed around your code as first-class citizens:

- Pass them as function arguments!
- Return them from a function!
- Assign them to a variable!

### Quickstart

_Seriously, though - this is super quick._

All you need to do to use __vnt__ is use it as a drop-in replacement for the `EventEmitter`:

```js
var EventEmitter = require('vnt').EventEmitter;
```

---

All that's left to do is to free your events:

```js
var obj = new EventEmitter();

// Free your event! Show him the world!
var changeEvent = obj.event('change');
```

Any valid function from `EventEmitter` that targets an event is fair game:

##### .emit

Emit an event with `changeEvent.emit()`

##### .addListener / .on

Add a new listener with `changeEvent.addListener(fn)`

##### .once

Add a one-time listener with `changeEvent.once(fn)`

##### .removeListener

Remove a listener with `changeEvent.removeListener(fn)`

##### .removeAllListeners

Remove all listeners with `changeEvent.removeAllListeners()`

##### .listeners

Retrieve an array of listeners with `changeEvent.listeners()`

---

Feel free to contribute. The tests are their own beast, and convergence with the **node.js** specs would be sublime.

---

Want asynchronous eventing? Check out [`pwn`](https://www.npmjs.org/package/pwn).

_[@zzmp](https://www.github.com/zzmp)_
