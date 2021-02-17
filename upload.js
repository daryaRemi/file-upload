console.log('upload.js');

export function upload(selector, options = {}) {
  const input = document.querySelector(selector);
  const preview = document.createElement('div')
  preview.classList.add('preview')

  const open = document.createElement('button');
  open.classList.add('btn');
  open.textContent = 'Открыть';

  if (options.multi) {
    input.setAttribute('multiple', true);
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(','));
  }

  input.insertAdjacentElement('afterend', preview);
  input.insertAdjacentElement('afterend', open);

  const triggerInput = () => input.click();
  open.addEventListener('click', triggerInput);

  const changeHandler = event => {
    console.log(event.target.files);
    if (!event.target.files) {
      return;
    }

    const files = Array.from(event.target.files);
    preview.innerHTML = ''
    // console.log(Array.isArray(files));
    files.forEach(file => {
      if (!file.type.match('image')) {
        return
      }

      const reader = new FileReader()

      reader.onload = ev => {
        console.log(ev.target.result)
        const src = ev.target.result
        // input.insertAdjacentHTML('afterend', `<img src="${ev.target.result}" />`)
        preview.insertAdjacentHTML('afterbegin', `
        <div class="preview-image">
            <img src="${src}" alt="${file.name}" />
        </div>
`)
      }

      reader.readAsDataURL(file)

      console.log(file);
    });
  };
  input.addEventListener('change', changeHandler);
}