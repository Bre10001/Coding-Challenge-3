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
