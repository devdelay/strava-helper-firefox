# Strava Helper

This Firefox Add-on aims to provide some tweaks for the Strava Website.

## Give Kudos to All

A button in the upper left of every Strava page can be used to give Kudos to all visible activities. It saves you a lot of time and your Strava friends get the litte dose of motivation they deserve!

## Remove Clutter

Removes all social media and premium clutter from the dashboard and activity pages, such as:

- "Find friends"
- "Upcoming events"
- "Discover more"
- "Follow suggestions"
- Promotional footer at the bottom
- "Shop" link
- "Get Premium" link
- "Get Premium" box on dashboard
- "Get Premium" boxes on profile page
- Social media dropdown menu in activity feed
- "Create target" link
- Social media buttons on activity detail page and Flyby page
- Zwift screenshots in activity feed

## UI tweaks

- Pins the top navigation to the top! Scroll and don't get lost!
- Adds a link to VeloViewer to the main navigation bar
- Adds a deep link to the VeloViewer activity details page (next to the Flyby link)
- Changes the default filter for the segment leaderboards to "My Results" (configurable in the settings)
- Automatically load more activities in the activity feed
- Removes consecutive avatars from the same athlete in dashboard feed
- Removes Challenge entries from activity feed (configurable in the settings)

## Settings

Don't want all the features? You can fine tune Strava Helper in the add-on manager ("Preferences").

## Building

### Build a Release

- increase version number in `package.json`
- build extension package: `jpm xpi`

### Development Builds

Build XPI and load it into Firefox automatically everytime the source changes: 
`jpm watchpost --post-url "http://127.0.0.1:9999/"` 

The [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/) add-on 
is needed, please see the [setup guide](https://www.npmjs.com/package/jpm#using-post-and-watchpost) for further
information.

## Contributors

* [saesh](https://github.com/saesh)
* [Marcus Jaschen](https://www.marcusjaschen.de/)

## Disclaimer

This software is not endorsed by Strava. Please do not ask them for support.

The term STRAVA and the Strava logo are the exclusive trademarks of, and are owned by, Strava Inc..
