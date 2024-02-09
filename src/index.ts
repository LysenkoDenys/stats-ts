import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// //1. Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// //2. Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
