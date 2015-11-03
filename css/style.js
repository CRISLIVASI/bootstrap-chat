$(document).ready(function(event ){
    $(".alert").click(function(){
        $(this).(show);
    });
});
$( document).ready( 'click', '.dropdown-menu li', function() {

  var $target = $( event.currentTarget );

  $target.closest( '.btn-group' )
    .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
    .children( '.dropdown-toggle' ).dropdown( 'true' );

  return false;

});
