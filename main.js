const $input = document.querySelector('input[type="file"]');

$input.addEventListener('change', handleFileSelect);

function handleFileSelect(e) {
   let file = e.target.files[0];

   if (!file.type.match('image.*')) {
      alert('You must select a picture');
   }

   const reader = new FileReader();
   reader.onload = () => {
      console.log(reader.result);
   };
   reader.readAsText(file);
}