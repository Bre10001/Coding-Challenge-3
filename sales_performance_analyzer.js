// Creation of Function to calculate average sales

function calculateAverageSales (salesFigures) {
    if (sales.length === 0) return 0;
    const totalFigures= salesFigures.reduce((total, sales) => total + sales, 0); // Using .reduce() to calculate the total sales of elements
    let averageSales = totalFigures / salesFigures.length; //calculate the average sales
    return averageSales;   
}


