// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    var themeStorageKey = "homepage-theme";
    var $themeToggle = $("#theme-toggle");
    var $wechatModal = $("#modal-wechat");
    var $navbarResponsive = $("#navbarResponsive");
    var $navbarToggleButton = $("#navbar-toggle-button");

    function cleanupModalArtifacts() {
        $("body").removeClass("modal-open wechat-modal-open").css("padding-right", "");
        $(".modal-backdrop").remove();
    }

    function getCurrentTheme() {
        return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function updateThemeToggle(theme) {
        if (!$themeToggle.length) return;

        var nextLabel = theme === "dark" ? $themeToggle.data("labelLight") : $themeToggle.data("labelDark");
        var nextIcon = theme === "dark" ? "fa-sun" : "fa-moon";

        $themeToggle.attr("aria-pressed", theme === "dark" ? "true" : "false");
        $themeToggle.attr("title", nextLabel);
        $themeToggle.find("i").attr("class", "fas " + nextIcon);
        $themeToggle.find(".theme-toggle-label").text(nextLabel);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem(themeStorageKey, theme);
        } catch (error) {}
        updateThemeToggle(theme);
    }

    function closeNavbarMenu() {
        if (!$navbarResponsive.length) return;

        try {
            $navbarResponsive.collapse("hide");
        } catch (error) {}

        $navbarResponsive.removeClass("show collapsing").css("height", "");
        $navbarToggleButton.addClass("collapsed").attr("aria-expanded", "false");
    }

    updateThemeToggle(getCurrentTheme());

    $themeToggle.on("click", function () {
        setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
        this.blur();
        window.setTimeout(closeNavbarMenu, 0);
    });

    $wechatModal.on('shown.bs.modal', function () {
        $('body').addClass('wechat-modal-open');
    });

    $wechatModal.on('hidden.bs.modal', function () {
        cleanupModalArtifacts();
    });

    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    $(document).on("click", "[data-modal-close]", function () {
        var target = $(this).data("modalClose");
        if (target) {
            $(target).modal("hide");
            window.setTimeout(cleanupModalArtifacts, 200);
        }
    });

    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            $wechatModal.modal("hide");
            window.setTimeout(cleanupModalArtifacts, 200);
        }
    });
})
