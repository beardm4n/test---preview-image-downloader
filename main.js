const $input = document.querySelector('input[type="file"]'),
      $output = document.querySelector('#list'),
      $div = document.createElement('div'),
      $img = document.createElement('img'),
      $label = document.createElement('label'),
      $inputRange = document.createElement('input'),
      $span = document.createElement('span');


$div.setAttribute('class', 'range');
$label.setAttribute('for', 'inputRange');
$inputRange.setAttribute('id', 'inputRange');
$inputRange.setAttribute('type', 'range');
$inputRange.setAttribute('min', '0');
$inputRange.setAttribute('max', '30');
$inputRange.setAttribute('value', '15');

$input.innerHTML = 'Drag image';
$label.innerHTML = 'Resize image';

const averageSizeImage = $inputRange.getAttribute('value');

$input.addEventListener('change', (e) => {
   let file = e.target.files[0];

   if (!file.type.match('image.*')) {
      alert('You must select a picture');
   }

   const reader = new FileReader();

   reader.onload = e => {
      $img.src = e.target.result;
      $img.classList.add('image');
      $img.style.width = averageSizeImage + '%';
      $img.style.height = averageSizeImage + '%';

      document.querySelector('section').insertBefore($div, $output);

      $div.insertBefore($label, null);
      $div.insertBefore($inputRange, null);
      $output.insertBefore($img, null);
   };

   reader.readAsDataURL(file);
});

$inputRange.addEventListener('click', () => {
   setTimeout(() => {

      console.log($inputRange.value);
      $img.style.width = $inputRange.value + '%';
      $img.style.height = $inputRange.value + '%';
   }, 1000);

   if ($inputRange.value > averageSizeImage) {
      $span.innerHTML = `Increased by ${$inputRange.value - averageSizeImage}%`;
   } else if ($inputRange.value < averageSizeImage) {
      $span.innerHTML = `Decreased by ${averageSizeImage - $inputRange.value}%`;
   } else {
      $span.innerHTML = ``;
   }

   $output.insertBefore($span, $img)
});