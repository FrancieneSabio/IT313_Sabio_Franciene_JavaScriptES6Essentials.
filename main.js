import isPassing, { computeAverage } from './gradeUtils.js';

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];

function getEnrollees() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Connection failed"));
        }, 500);
    });
}

async function runReport() {
    try {
        const data = await getEnrollees();

        const report = data.map(({ name, prelim, midterm, final }) => {
            const average = computeAverage(prelim, midterm, final);
            const status = isPassing(average) ? "PASSING" : "PROBATION";
            return { name, average, status };
        });

        const passing = report.filter((r) => r.status === "PASSING");
        const probation = report.filter((r) => r.status === "PROBATION");

        const classAverage = 
           report.reduce((sum,r) => sum + r.average, 0) / report.length;
          
        console.log(`===IT313 Enrollment Eligibility Report ===`);
      report.forEach(({ name, average, status }) => {
          console.log(`${name.padEnd(12)} - Average: ${average.toFixed(2)} - ${status}`);
      });
      console.log(`Class Average: ${classAverage.toFixed(2)}`);
      console.log(`Passing: ${passing.length} / ${report.length}`);
    } catch (err) {
        console.error(`Failed to fetch enrollee data: ${err.message}`);
    }
}

runReport();