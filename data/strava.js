jQuery(function($) {

    var mjaschen = mjaschen || {};
    mjaschen.strava = mjaschen.strava || {};

    mjaschen.strava = {

        init : function() {
            mjaschen.strava.createKudosToAllButton();
            $(document).on("click", "#strava-helper-kudos-all-button", mjaschen.strava.giveKudosToAll);
        },

        createKudosToAllButton : function() {
            var $kudosAllButton = $("<div></div>")
                .attr("id", "strava-helper-kudos-all-button")
                .attr("title", "Give Kudos to all visible items.")
                .text("👍");
            $("body").prepend($kudosAllButton);
        },

        giveKudosToAll : function() {
            $("button.js-add-kudo").click();
            mjaschen.strava.changeButtonText("✅")

            var timer = window.setTimeout(function() {
                mjaschen.strava.changeButtonText("👍")
            }, 1000);
        },

        changeButtonText : function(text) {
            $("#strava-helper-kudos-all-button").text(text);
        }

    }

    mjaschen.strava.init();

});
