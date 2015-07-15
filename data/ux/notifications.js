var StravaHelper = (function(sh) {

    var logger = new sh.Logger('ux.notifications');

    toastr.options = {
        "closeButton": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "timeOut": "5000",
        "extendedTimeOut": "2000",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    sh.ux.notifications = {
        info: function(message) {

            if (! sh.prefs.enableNotifications) {
                return;
            }

            displayInfoNotification(message);
        },

        firstInstallMessage: function() {

            if (! sh.prefs.enableNotifications) {
                return;
            }

            if (sh.prefs.firstInstall) {
                toastr.options.progressBar = true;
                toastr.info('You can enable and disable the features in the add-on preferences!', 'Thank you for using the Strava Helper!', {"timeOut": "8000"});
            }
        }
    };

    function displayInfoNotification(message) {
        toastr.info(message);
    }

    return sh;
}(StravaHelper));
