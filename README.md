# VRS-Operator-Flags 🛩️ [![MIT License](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE) [![VRS version 2.4](https://img.shields.io/badge/VRS-v2.4-blue.svg)](http://virtualradarserver.co.uk/Download.aspx) [![Build Status](https://travis-ci.org/dedevillela/VRS-Operator-Flags.svg?branch=master)](https://travis-ci.org/dedevillela/VRS-Operator-Flags) [![GitHub release](https://img.shields.io/github/release/dedevillela/VRS-Operator-Flags.svg)](https://github.com/dedevillela/VRS-Operator-Flags/releases) 

Custom operator flags for [Virtual Radar Server](https://www.virtualradarserver.co.uk "Virtual Radar Server's Homepage") (a.k.a. VRS).

## Prerequisites
- VRS installed and running, with the [Custom Content Plugin](http://www.virtualradarserver.co.uk/documentation/CustomContent/Default.aspx "Custom Content Plugin") also installed and enabled.

## Instructions
- Clone or download the repo into a directory on the machine where VRS is running. Ensure you do not place the files under the Virtual Radar Server directory, since they could be overwritten on upgrades.

- Copy the desired files contained in the 'OperatorFlags' folder you've just downloaded, and paste them in your VRS 'Operator Flags' folder configured under the Tools/Options/Data Sources tab.

- With the Custom Content Plugin enabled on VRS, go to "Tools>Plugins..." and press the "Options" button. Then fill in the field "Inject file:" with absolute path to you local file "CustomOperatorFlags.js", set it to "END of HEAD", with and asterisk (*) characther on the "Address:" field, and check "Enabled" to activate the plugin. Press the "OK" button, then the "Close" button.

- Clear your browser cache.

- Enjoy!

## Acknowledgments
This project was only possible thanks to the invaluable help of many individuals and communities, especially the creator of the VRS, Andrew Whewell, always solicitous in [![his forum](https://img.shields.io/badge/VRS-Forum-blue.svg)](https://forum.virtualradarserver.co.uk/); Andrew Hill, whose [![flights.hillhome.org](https://img.shields.io/badge/flights-hillhome.org-ADD6FF.svg)](http://flights.hillhome.org/) site inspired me deeply; and all of the [![ADS-B Brasil](https://img.shields.io/badge/ADS--B-Brasil-lightgrey.svg)](http://bradsb.com/forum/index.php) community, including Ramon Martins and Jaime Hempke, which together maintain the excellent site [![TrafegoAereo.com](https://img.shields.io/badge/Trafego-Aereo-yellowgreen.svg)](http://trafegoaereo.com/).

## Contributions
Feel free to download and share these files, fork and send pull requests, suggest corrections, or send requests for more operator flags, as I'm constantly updating this repository with new custom flags.

## Other Projects

[![VRS Aircraft Markers](https://img.shields.io/badge/VRS-Aircraft_Markers-orange.svg)](https://github.com/dedevillela/VRS-Aircraft-Markers)

[![VRS Custom Links](https://img.shields.io/badge/VRS-Custom_Links-yellow.svg)](https://github.com/dedevillela/VRS-Custom-links/)

[![VRS Country Flags](https://img.shields.io/badge/VRS-Country_Flags-green.svg)](https://github.com/dedevillela/VRS-Country-Flags)

[![VRS Silhouettes](https://img.shields.io/badge/VRS-Silhouettes-brightgreen.svg)](https://github.com/dedevillela/VRS-Silhouettes/)
