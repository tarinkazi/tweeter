$(document).ready(function() {
  $('textarea').keyup(function () {
    const maxLength = 140;
      const textLength = maxLength - $(this).val().length;
      const $output = $('output')
      $output.text(textLength);
      if (textLength < 0) {
          $output.addClass('red')
      } else {
          $output.removeClass('red')
      }
  });
});