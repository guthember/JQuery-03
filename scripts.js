$(function () {
    // elemek összegyűjtése
    let $progress = $('.progress-bar');
    let $input = $('input[type="number"]');
    // console.log($progress);
    // console.log($input);

    $input.change(function () {
        // % -lekérdezése
        let percent = $input.val();
        // console.log(percent);

        // progressbar beállítása
        $progress.text(percent + '%');
        $progress.css('width', percent + '%');
        $progress.attr('aria-valuenow', percent);
    });
});
