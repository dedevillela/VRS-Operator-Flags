/* global VRS */
    if(VRS && VRS.globalDispatch && VRS.serverConfig) {
        VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function(bootStrap) {
            if(VRS.renderPropertyHandlers) {
                VRS.renderPropertyHandlers[VRS.RenderProperty.OperatorFlag] = new VRS.RenderPropertyHandler({
                    property: VRS.RenderProperty.OperatorFlag,
                    surfaces: VRS.RenderSurface.List + VRS.RenderSurface.DetailHead + VRS.RenderSurface.InfoWindow,
                    headingKey: "ListOperatorFlag",
                    labelKey: "OperatorFlag",
                    sortableField: VRS.AircraftListSortableField.OperatorIcao,
                    headingAlignment: VRS.Alignment.Centre,
                    suppressLabelCallback() { return true; },
                    fixedWidth() { return VRS.globalOptions.aircraftOperatorFlagSize.width.toString() + "px"; },
                    hasChangedCallback(aircraft) { return aircraft.operatorIcao.chg || aircraft.icao.chg || aircraft.registration.chg || aircraft.manufacturer.chg; },
                    renderCallback(aircraft) { return customFormatOperatorIcaoImageHtmlAircraft(aircraft); },
                    tooltipChangedCallback(aircraft) { return aircraft.operatorIcao.chg || aircraft.operator.chg; },
                    tooltipCallback(aircraft) { return aircraft.formatOperatorIcaoAndName(); }
                });
                VRS.renderPropertyHandlers[VRS.RenderProperty.SilhouetteAndOpFlag] = new VRS.RenderPropertyHandler({
                    property: VRS.RenderProperty.SilhouetteAndOpFlag,
                    surfaces: VRS.RenderSurface.List,
                    headingKey: "ListModelSilhouetteAndOpFlag",
                    labelKey: "SilhouetteAndOpFlag",
                    headingAlignment: VRS.Alignment.Centre,
                    sortableField: VRS.AircraftListSortableField.OperatorIcao,
                    fixedWidth() { return Math.max(VRS.globalOptions.aircraftSilhouetteSize.width, VRS.globalOptions.aircraftOperatorFlagSize.width).toString() + "px"; },
                    // Changed the following line to include manufacturer
                    hasChangedCallback(aircraft) { return aircraft.modelIcao.chg || aircraft.operatorIcao.chg || aircraft.registration.chg || aircraft.manufacturer.chg; },
                    // And this line to include a call to the custom HTML
                    renderCallback(aircraft) { return aircraft.formatModelIcaoImageHtml() + customFormatOperatorIcaoImageHtmlAircraft(aircraft); },
                    tooltipChangedCallback(aircraft) { return aircraft.model.chg || aircraft.modelIcao.chg || aircraft.countEngines.chg || aircraft.engineType.chg || aircraft.species.chg || aircraft.wakeTurbulenceCat.chg || aircraft.operatorIcao.chg || aircraft.operator.chg; },
                    tooltipCallback(aircraft) {
                        var silhouetteTooltip = aircraft.formatModelIcaoNameAndDetail();
                        var opFlagTooltip = aircraft.formatOperatorIcaoAndName();
                        return silhouetteTooltip && opFlagTooltip ? silhouetteTooltip + ". " + opFlagTooltip : silhouetteTooltip ? silhouetteTooltip : opFlagTooltip;
                    }
                });
            }
            if(VRS.reportPropertyHandlers) {
                VRS.reportPropertyHandlers[VRS.ReportAircraftProperty.OperatorFlag] = new VRS.ReportPropertyHandler({
                    property: VRS.ReportAircraftProperty.OperatorFlag,
                    surfaces: VRS.ReportSurface.List + VRS.ReportSurface.DetailHead,
                    headingKey: "ListOperatorFlag",
                    labelKey: "OperatorFlag",
                    headingAlignment: VRS.Alignment.Centre,
                    fixedWidth: function() { return VRS.globalOptions.aircraftOperatorFlagSize.width.toString() + "px"; },
                    hasValue(/* VRS_JSON_REPORT_AIRCRAFT */ json) { return !!json.opFlag || !!json.icao || !!json.reg || !!json.manufacturer; },
                    renderCallback(/* VRS_JSON_REPORT_AIRCRAFT */ json) { return customFormatOperatorIcaoImageHtml(json.manufacturer, json.opFlag, json.reg, json.icao); },
                    tooltipCallback(/* VRS_JSON_REPORT_AIRCRAFT */ json) { return VRS.format.operatorIcaoAndName(json.owner, json.opFlag); }
                });
            }
        });
    }
    function customFormatOperatorIcaoImageHtmlAircraft(aircraft)
    {
        return customFormatOperatorIcaoImageHtml(aircraft.manufacturer.val, aircraft.operatorIcao.val, aircraft.registration.val, aircraft.icao.val);
    }
    function customFormatOperatorIcaoImageHtml(manufacturer, operatorIcao, registration, icao)
    {
        var codeToUse = "";
        codeToUse = customPipeSeparatedCode(codeToUse, registration);        
        codeToUse = customPipeSeparatedCode(codeToUse, operatorIcao);
        codeToUse = customPipeSeparatedCode(codeToUse, icao);
	codeToUse = customPipeSeparatedCode(codeToUse, manufacturer);

        var size = VRS.globalOptions.aircraftOperatorFlagSize;
        var result = '<img src="images/File-' + encodeURIComponent(codeToUse);
        if(VRS.browserHelper.isHighDpi()) result += '/HiDpi';
        result += '/OpFlag.png"' +
            ' width="' + size.width.toString() + 'px"' +
            ' height="' + size.height.toString() + 'px"' +
            ' />';

        return result;
    }
    function customPipeSeparatedCode(text, code)
    {
        var result = text;        
        if(code && code.length) {
            if(result.length) result += '|';
            result += code;
        }
        return result;
    }
