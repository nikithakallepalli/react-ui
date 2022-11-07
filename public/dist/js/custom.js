$(document).ready(function () {
    $(document).on('focus', ".ingredient-suggest-input", function (event) {
        $('.ingredient-suggest-input').parents(':eq(1)').addClass('active');
        $('.fa-plus-circle').addClass('fa-search').removeClass("fa-plus-circle");
        $(".fa-times-circle").show()
    });
    $(document).on('blur', ".ingredient-suggest-input", function (event) {
            $('.ingredient-suggest-input').parents(':eq(1)').removeClass('active');
            $('.fa-search').addClass('fa-plus-circle').removeClass("fa-search");
            $(".fa-times-circle").hide()
    });
    $(document).on('mouseover', "#react-autowhatever-1", function (event) {
        $(".ingredient-suggest-input").focus()
    });
});