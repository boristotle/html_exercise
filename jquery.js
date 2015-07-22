$(document).ready(function() {
$('.img').on(click, function() {
var image = $('<img src="http://www.artinaid.com/wp-content/uploads/2013/02/Galaxia-y-Espacio-Exterior.jpg">');
}
$(this).closest('img').append(image);
});