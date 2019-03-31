<script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
$('#thecircle').click(function() {
  
  $(this).find('i').toggleClass("fa-plus-circle fa-times-circle");
});

function myFunc() {
  let a=document.getElementById("hidden");
  a.style.display="flex";
};
</script>