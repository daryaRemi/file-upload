import {upload} from './upload'

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif']
})

console.log('app.js')