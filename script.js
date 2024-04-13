$(document).ready(function() {
    $('#form input').on('change', function() {
        var value = $(this).val();
        var name = $(this).attr('data-name');
        var isNumber = /^\d+$/.test(value);
        if(!(isNumber) || Number(value) < 0){
            $(`#form label .wrong-form[name = ${name}]`).css('display', 'block');
        }
        else{
            $(`#form label .wrong-form[name = ${name}]`).css('display', 'none');
        }
    });

    $('#form').submit(function(event) {

        event.preventDefault();

        var gai = Number($('#gai-input').val());
        var extinc = Number($('#extra-input').val());
        var age = $('#age-input').val();
        var tad = Number($('#tad-input').val());

        if (/^\d+$/.test(gai) == false || /^\d+$/.test(extinc) == false || /^\d+$/.test(tad) == false){
            return;
        }
        if(gai < 0 || extinc < 0 || tad < 0){
            return;
        }

        $('.result-box').css('display', 'flex');
        $('#form').css('opacity', '0');
        $('#form').css('pointer-events', 'none');
        console.log(age);

        if (gai + extinc - tad <= 800000){
            $('#result').text(gai+extinc-tad);
        }
        else{
            if (age == 'less-than-40'){
                let tax = 0.3 * (gai + extinc - tad - 800000);
                $('#result').text(gai + extinc - tad - tax);
            }
            else if(age == '40-to-60'){
                let tax = 0.4 * (gai + extinc - tad - 800000);
                $('#result').text(gai + extinc - tad - tax);
            }
            else if(age == '60-above'){
                let tax = 0.1 * (gai + extinc - tad - 800000);
                $('#result').text(gai + extinc - tad - tax);
            }
        }
    });

    $('#close').click(function() {
        $('#form').css('opacity', '1');
        $('#form').css('pointer-events', 'auto');
        $('.result-box').css('display', 'none');
        $('#form').trigger('reset');
    });
});

