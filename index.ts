// Import stylesheets
import './style.css';
import 'zone.js'
import './myZone.ts'

const myZoneSpec = Zone['MyZone']

const clickZone = Zone.current.fork(myZoneSpec).fork({
  name: 'clickZone',
  onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
    console.log('delegate', delegate)
    console.log('current', current)
    console.log('target', target)
    console.log('task', task)
    console.log('applyThis', applyThis)
    console.log('applyArgs', applyArgs)
    console.log('myzone data: ', myZoneSpec.myData())
    delegate.invokeTask(target, task, applyThis, applyArgs);
    updateText();
  },
  onHasTask: function() {
    console.log('on has task')
  }
})

function main() {
  const b1 = document.getElementById('b1');
  b1.addEventListener('click', function() {
    onB1Click()
    // clickZone.run(onB1Click)
  });
}


let myText = ""

function updateText() {
  const element = document.getElementById('content');
  element.innerHTML = myText + ": updated at time" + Date.now()
}

function onB1Click() {
  setTimeout(() => {
    myText = "hello patch"
  }, 500)
  setTimeout(() => {
    myText = "hello patch  2"
  }, 2000)
  setTimeout(() => {
    myText = "hello patch  3"
  }, 1000)
  myText = "hello patch 4" 
}

// main();

clickZone.run(main)

