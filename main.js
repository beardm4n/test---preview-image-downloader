const $input = document.querySelector('input[type="file"]');

$input.addEventListener('change', e => {
   // console.log(e.target.files[0]);
   console.log($input.files);
});
