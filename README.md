# VRS-Operator-Flags 🛩️ [![MIT License](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE) [![VRS version 2.4](https://img.shields.io/badge/VRS-v2.4-blue.svg)](http://virtualradarserver.co.uk/Download.aspx) [![Build Status](https://travis-ci.org/dedevillela/VRS-Operator-Flags.svg?branch=master)](https://travis-ci.org/dedevillela/VRS-Operator-Flags) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/cf2bc9623f914dc198f30e9613ab00ea)](https://www.codacy.com/app/dedevillela/VRS-Operator-Flags?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dedevillela/VRS-Operator-Flags&amp;utm_campaign=Badge_Grade) [![GitHub release](https://img.shields.io/github/release/dedevillela/VRS-Operator-Flags.svg)](https://github.com/dedevillela/VRS-Operator-Flags/releases) ![ViewCount](https://views.whatilearened.today/views/github/dedevillela/VRS-Operator-Flags.svg) [![Say Thanks!](https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg)](https://saythanks.io/to/dedevillela)

Custom operator flags for [Virtual Radar Server](https://www.virtualradarserver.co.uk "Virtual Radar Server's Homepage") (a.k.a. VRS).

## Prerequisites
-   VRS installed and running, with the [Custom Content Plugin](http://www.virtualradarserver.co.uk/documentation/CustomContent/Default.aspx "Custom Content Plugin") also installed and enabled.

## Instructions
-   Clone or download the repo into a directory on the machine where VRS is running. Ensure you do not place the files under the Virtual Radar Server directory, since they could be overwritten on upgrades.
-   Open a text editor and modify the file "CustomOperatorFlags.js" so that the first line of code begins with <script> and the last line ends with </script>, and save the file.
-   Copy the desired files contained in the 'OperatorFlags' folder you've just downloaded, and paste them in your VRS 'Operator Flags' folder configured under the Tools/Options/Data Sources tab.
-   With the Custom Content Plugin enabled on VRS, go to "Tools>Plugins..." and press the "Options" button. Then fill in the field "Inject file:" with absolute path to you local file "CustomOperatorFlags.js", set it to "END of HEAD", with and asterisk (*) characther on the "Address:" field, and check "Enabled" to activate the plugin. Press the "OK" button, then the "Close" button.
-   Clear your browser cache.
-   Enjoy!

## Acknowledgments
This project was only possible thanks to the invaluable help of many individuals and communities, especially the creator of the VRS, Andrew Whewell, always solicitous in [his forum](https://forum.virtualradarserver.co.uk/); Andrew Hill, whose [flights.hillhome.org](http://flights.hillhome.org/) site inspired me deeply; and all of the [ADS-B Brasil](http://bradsb.com/forum/index.php) community, including Ramon Martins and Jaime Hempke, which together maintain the excellent site [TrafegoAereo.com.br](http://trafegoaereo.com.br/).

## Contributions
Feel free to download and share these files, fork and send pull requests, suggest corrections, or send requests for more operator flags, as I'm constantly updating this repository with new custom flags.

## Other Projects

[![VRS Aircraft Markers](https://img.shields.io/badge/VRS-Aircraft_Markers-orange.svg)](https://github.com/dedevillela/VRS-Aircraft-Markers)

[![VRS Custom Links](https://img.shields.io/badge/VRS-Custom_Links-yellow.svg)](https://github.com/dedevillela/VRS-Custom-links/)

[![VRS Country Flags](https://img.shields.io/badge/VRS-Country_Flags-green.svg)](https://github.com/dedevillela/VRS-Country-Flags)

[![VRS Silhouettes](https://img.shields.io/badge/VRS-Silhouettes-brightgreen.svg)](https://github.com/dedevillela/VRS-Silhouettes/)
