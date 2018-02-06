"use strict";

module.exports = GreenHopperBoardClient;

function GreenHopperBoardClient(jiraClient) {
    this.jiraClient = jiraClient;

    this.getAllKanbanBoardData = function (opts, callback) {
        var options = {
            uri: this.jiraClient.buildGreenHopperURL('/xboard/work/allData.json'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                rapidViewId: opts.boardId
            }
        };
        return this.jiraClient.makeRequest(options, callback);
    };

    this.getControlChart = function(opts, callback) {
        var options = {
            uri: this.jiraClient.buildGreenHopperURL('/rapid/charts/controlchart.json'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                rapidViewId: opts.boardId,
                swimlaneId: opts.swimlaneIdList,
                _: new Date()
            }
        };
        return this.jiraClient.makeRequest(options, callback);
    };
};