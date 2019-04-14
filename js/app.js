$("#submit").click(function () {
    let form = $(this).parents("form")
    let data = form.serialize();
    $.post(
        form.attr("action"),
        data,
        onAjaxSuccess
    );

    function onAjaxSuccess(response)
    {
        // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
       alert(response);
    }
});