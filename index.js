$('.get_data').click(function () {

    var key = $('#user').val() + ':' + $('#pass').val();

    //base64编码

    var authKey = base64encode(key);

    $.ajax({

        type: 'GET',

        dataType: 'json',

        url: 'http://abc.cc/qrcode3/home/index/testajax',

        headers: {'Authorization': 'Basic ' + authKey, 'lpy': 'lpy'},

        success: function (data) {

            alert(data.msg + '--' + data.user);

        },

        error: function (data) {

            alert('error');

        }

    });

});