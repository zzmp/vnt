EventEmitter = (require 'events').EventEmitter

class Event
  constructor: (@parent, @name) ->
    for fn of EventEmitter.prototype
      if fn is not 'setMaxListeners'
        @[fn] = (args...) ->
          @parent[fn] @name args

EventEmitter.prototype.event = (event) ->
  new Event(@, event)