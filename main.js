const $input = document.querySelector('input[type="file"]');

$input.addEventListener('change', handleFileSelect);

function handleFileSelect(e) {
   // console.log(e.target.files[0]);
   // console.log($input.files);

   const reader = new FileReader();
   reader.onload = () => {
      console.log(reader.result);
   };
   reader.readAsText($input.files[0]);
}