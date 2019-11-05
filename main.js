const $input = document.querySelector('input[type="file"]'),
    $output = document.querySelector('#list'),
    $div = document.createElement('div'),
    $img = document.createElement('img'),
    $label = document.createElement('label'),
    $inputRange = document.createElement('input');

$div.setAttribute('class', 'range');
$label.setAttribute('for', 'inputRange');
$inputRange.setAttribute('id', 'inputRange');
$inputRange.setAttribute('type', 'range');

$input.innerHTML = 'Drag image';
$label.innerHTML = 'Resize image';

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

      document.querySelector('section').insertBefore($div, $output);

      $div.insertBefore($label, null);
      $div.insertBefore($inputRange, null);
      $output.insertBefore($img, null);
   };

   reader.readAsDataURL(file);
}