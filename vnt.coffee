module.exports.EventEmitter = EventEmitter = (require 'events').EventEmitter

class Event
  constructor: (@parent, @name) ->
    for fn in [
      'emit', 'addListener', 'on', 'once',
      'removeListener', 'removeAllListeners', 'listeners']
      @[fn] = ((fn) -> (args...) ->
        @parent[fn].apply @parent, [@name].concat args)(fn)

EventEmitter.prototype.event = (event) ->
  if event?
    @_vnts ?= {}
    @_vnts[event] ?= new Event(@, event)
  else
    throw Error('No event name given')