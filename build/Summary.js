"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
// verbally we do following:
// new Summary(new WinsAnalysis(), new ConsoleReport());
