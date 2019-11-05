const $input = document.querySelector('input[type="file"]'),
      $output = document.querySelector('#list'),
      $img = document.createElement('img');

$input.addEventListener('change', handleFileSelect);

function handleFileSelect(e) {
   let file = e.target.files[0];

   if (!file.type.match('image.*')) {
      alert('You must select a picture');
   }

   const reader = new FileReader();

   reader.onload = e => {
      $img.src = e.target.result;
      $img.classList.add('image');

      $output.insertBefore($img, null);
   };

   reader.readAsDataURL(file);
}