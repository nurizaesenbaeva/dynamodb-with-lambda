// Set 'URL' to your API Gateway endpoint
URL = 'https://abcdefghij.execute-api.us-east-2.amazonaws.com/prod/';

$(document).ready(function () {

    $("#mainForm").submit(function (e) {
        e.preventDefault();
        
        var client_name = $("#client_name").val(),
            client_id = $("#client_id").val(),
            product_name = $("#product_name").val();

        $.ajax({
            type: "POST",
            url: URL,
            contentType: 'application/json',
            crossDomain: true, // remove in production environments
            dataType: 'json',
            // dataType: 'jsonp' // use JSONP for done() callback to work locally
            data: JSON.stringify({
                client_name: client_name,
                client_id: client_id,
                product_name: product_name
            })
        }).done(function (result) {
            console.log(result);
        }).fail(function (jqXHR, textStatus, error) {
            console.log("Post error: " + error);
            if (error != '') $('#form-response').text('Error: ' + error);
        }).always(function(data) {
            console.log(JSON.stringify(data));
            $('#form-response').text('Form submitted!');
        });

    });
});