# Changelog

## [2.6.0] - 2020-09-15

Changed

- Upgraded Angular from 8 -> 10 and other dependencies for security
- Respond properly for a timeout on the Dialogflow fulfillment for a resume

## [2.5.0] - 2020-01-30

Added

- Epic Free Games Reminder project

## [2.4.1] - 2020-01-28

Changed

- Remediated CVE-2019-16769 reported by npm

## [2.4.0] - 2019-11-10

Added

- Anchor link on each project

Changed

- Enumeration for project categories

## [2.3.0] - 2019-10-21

Added

- Anagrammatic app store links
- Lazy loading dimensions optimization

Changed

- How project links are built
- Migrated Font Awesome to FaIconLibrary
- Upgrade to Angular 8
- Upgrade FirebaseJS

Removed

- Dialogflow dependency

## [2.2.0] - 2019-05-26

Added

- robots.txt
  - Allow all bots to all pages

## [2.1.0] - 2019-05-26

Added

- PWA functionality

## [2.0.1] - 2019-05-20

Changed

- Theme color to match background on mobile browsers

## [2.0.0] - 2019-05-18

Changed

- Name of project to sleek-software

## [1.15.1] - 2019-05-18

Changed

- Demo gif dimensions

## [1.15.0] - 2019-05-18

Added

- Firebase deployment
- Not Too Shabby gif

## [1.14.0] - 2019-05-17

Added

- Favicons

Changed

- Toolbar logo to have transparent background
- Tab title

## [1.13.0] - 2019-05-16

Added

- Not Too Shabby logo

## [1.12.1] - 2019-05-16

Changed

- Left aligned logo, title, and description text for projects
- Rearranged project categories

## [1.12.0] - 2019-05-15

Added

- Elevation to toolbar
- Tooltip for Bits description

Changed

- Coloring of project category icons
- Coloring of navigation underline
- Coloring of link buttons for a project

## [1.11.0] - 2019-05-10

Added

- Check for toolbar current route underline when first navigating to page
- Divider between portfolio projects
- Project logo area
- More project descriptions

## [1.10.0] - 2019-05-08

Added

- Portfolio page

Changed

- Color of bot messages matches card background

Removed

- Autocomplete in query

## [1.9.0] - 2019-05-06

Added

- Loading dots when bot is responding

## [1.8.0] - 2019-05-06

Added

- Support for Dialogflow cards (without Font Awesome icons because it would have been real hacky to get something to work, and it works without them)

## [1.7.0] - 2019-05-06

Added

- Support for Firebase function added cards

Removed

- Loading spinner as there isn't enough front loaded activity for it to be worth it

## [1.6.0] - 2019-05-06

Added

- Properly scrolling conversation
- Autoscroll to bottom on new message

Changed

- Fixed height of toolbar

## [1.5.0] - 2019-05-05

Added

- Navigation buttons in toolbar
- Word breaks in messages
- Temporary logo with non-matching background

Changed

- Went to a light Material theme (But it can be switched far easier now)

## [1.4.0] - 2019-05-04

Added

- Ugly, partially working chat

## [1.3.0] - 2019-05-04

Added

- Toolbar links
- Send button sends query

Changed

- Theming to Sleek colors and dark background

## [1.2.0] - 2019-05-03

Added

- Material input box
- Font Awesome icons

Changed

- Split out components

## [1.1.0] - 2019-05-01

Added

- Invoke Google Cloud Function that calls Dialogflow agent as the official client library doesn't play nice in an Angular environment
- Rough UI for testing conversational interactions

Changed

- Started versioning compared to old repo as it will get merged into that eventually

## [0.0.0] - 2019-04-27

Added

- iframe baseline
