// Creation of Function to calculate average sales

function calculateAverageSales (salesFigures) {
    if (salesFigures.length === 0) return 0;
    const totalFigures= salesFigures.reduce((total, sales) => total + sales, 0); // Using .reduce() to calculate the total sales of elements
    return totalFigures / salesFigures.length; //calculate the average sales  
}

//Function to Determine Performance Rating

function determinePerformanceRating(averageSales) {

    if (averageSales > 10000) {
        return "Excellent";
    }
    else if (averageSales >= 7000) {
        return "Good";
    }
    else if (averageSales >= 4000) {
        return "Satisfactory";
    }
    else{
        return "Needs Improvement";
    }
} //performance rating funtion depending on average sales amount


// Function to identify top and bottom performers

function findTopAndBottomPerformers (salesPerson) {
    if (salesPerson.length === 0) return {topPerformer: null, bottomPerformer: null}; // salesPerson name property
    const totalSales = salesPerson.map(person => person.totalSales); // total sales property

    const maxSales = Math.max(...totalSales); // Determines the highest sales amount
    const minSales = Math.min(...totalSales); // Determines the lowest sales amount

    const topPerformer = salesPerson.find(person => person.totalSales === maxSales); // Determines sales person with the highest sales amount
    const bottomPerformer = salesPerson.find(person => person.totalSales === minSales); // Determines sales person with the lowest sales amount
    
    return {
        topPerformer,
        bottomPerformer, // returns the top and bottom performer properties
    };
}

// Combining functions to generate a performance report
function generatePerformanceReport(salesInformation) {
    const salesperson = salesInformation.map(person => {
        const averageSales = calculateAverageSales(person.sales); // Computes the average sales for each salesperson
        const rating = determinePerformanceRating(averageSales); // Assigns the performance rating to each salesperson

        return {
            name: person.name,
            averageSales: averageSales,
            performanceRating: rating,
            totalSales: person.sales.reduce((sum, sale) => sum + sale, 0), // For findTopAndBottomPerformers
        };
    });

    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesperson); // Identifies the top and bottom performers

    return {
        salesperson: salesperson.map(person => ({
            name: person.name,
            averageSales: person.averageSales,
            performanceRating: person.performanceRating, // Generates a summary of the salesperson's name, average sales, and performance rating
        })),
        topPerformer: topPerformer ? topPerformer.name : "None",
        bottomPerformer: bottomPerformer ? bottomPerformer.name : "None",
    };
}

// Testing using sample data set
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }, // Sampla Data Set
];
const report = generatePerformanceReport(salesData);

console.log("Performance Report:", report); // displays performance report