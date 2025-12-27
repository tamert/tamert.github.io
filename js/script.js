/*
* Google prettify settings
* */
if (typeof prettyPrint === 'function') {
    $("pre").addClass("prettyprint");
    prettyPrint();
}


/*
* Drop-down navigation for Mobile devices
* */
$(function () {
    /* Language Detection and Translation */
    function setLanguage(lang) {
        if (!translations[lang]) lang = 'en';

        $('[data-i18n]').each(function () {
            var key = $(this).data('i18n');
            if (translations[lang][key]) {
                $(this).html(translations[lang][key]);
            }
        });

        /* Display last login date with locale */
        var d = new Date();
        var locale = lang === 'tr' ? 'tr-TR' : 'en-US';
        $("#last-login-date").text(d.toLocaleString(locale));
    }

    // Detect browser language
    var userLang = navigator.language || navigator.userLanguage;

    console.log(userLang);
    var defaultLang = userLang.startsWith('tr') ? 'tr' : 'en';

    setLanguage(defaultLang);

    /* Calculate years */
    $('[data-calculate]').each(function () {
        var startYear = parseInt($(this).data('calculate'));
        var currentYear = new Date().getFullYear();
        var diff = currentYear - startYear;
        if (diff >= 0) {
            $(this).text(diff);
        }
    });

    //        $("nav").prepend("<a href='#' class='menu-icon'>navigation</a>");

    //        $(".menu-icon").click(function () {
    //            $("nav ul").slideToggle("fast");
    //            return false;
    //        });

});





