// Creation of Function to calculate average sales

function calculateAverageSales (salesFigures) {
    if (sales.length === 0) return 0;
    const totalFigures= salesFigures.reduce((total, sales) => total + sales, 0); // Using .reduce() to calculate the total sales of elements
    let averageSales = totalFigures / salesFigures.length; //calculate the average sales
    return averageSales;   
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