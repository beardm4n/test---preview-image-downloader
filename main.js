const $input = document.querySelector('input[type="file"]');

$input.addEventListener('change', handleFileSelect);

function handleFileSelect(e) {
   let file = e.target.files[0];
   console.log(file.name);
   if (!file.type.match('image.*')) {
      alert('You must select a picture');
   }


   const $img = document.createElement('img'),
         $div = document.createElement('div');

   const reader = new FileReader();

   reader.onload = e => {
      $img.src = e.target.result;
      $img.classList.add('image');
      document.querySelector('#list').insertBefore($div, null);
      document.querySelector('div').insertBefore($img, null);
   };

   reader.readAsDataURL(file);
}