var Mediator;

Mediator = {
  channels: {},
  publish: function(name) {
    this.channels[name].args = _.toArray(arguments);
    this.channels[name].deps.changed();
  },
  subscribe: function(name) {
    if (!this.channels[name]) {
      this.channels[name] = {
        deps: new Deps.Dependency,
        args: null
      };
    }
    this.channels[name].deps.depend();
    this.channels[name].args;
  }
};
