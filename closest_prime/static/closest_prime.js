$('#btn').click(function () {
    function isPrime(n) {
        var i = 3;
        if (n % 2 == 0) {
            return false;
        }
        for (i = 3; i < n; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    var answer = 0;
    var n = $('#number').val();
    n = Number.parseInt(n)
        //check if valid
        if (isNaN(n) || n <= 0) {
            $('#resposta').text('Resposta: Input invalido');
            return;
        }

    if (n <=  2) {
        answer = n;
        $('#resposta').text('Resposta: '.concat(answer));
        return;
    }


    //Make number odd, because no even number, except 2, can be prime
    n = (n % 2 == 0) ? n - 1 : n; 


    for (var i = n; i >= 3; i = i - 2) {
        if (isPrime(i)) {
            answer = i;
            break;
        }
    }
    $('#resposta').text('Resposta: '.concat(answer));
});
