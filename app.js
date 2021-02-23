import {upload} from './upload'

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload(files) {
    console.log('Files:', files)
  }
})

console.log('app.js')