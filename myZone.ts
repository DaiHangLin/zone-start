import 'zone.js'
Zone['MyZone'] = {
  name: 'MyZone',
  onScheduleTask: function (delegate, current, target, task) {
    delegate.scheduleTask(target, task);
  },
  onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
    delegate.invokeTask(target, task, applyThis, applyArgs);
  },
  myData: function() {
    return 'this is myzone data'
  }
}