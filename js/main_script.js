$(document).ready(function() {
    $("div.tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.project-tab>div.project-tab-content").removeClass("active");
        $("div.project-tab>div.project-tab-content").eq(index).addClass("active");
    });
});