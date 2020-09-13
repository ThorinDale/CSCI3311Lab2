
// TODO: load the dataset
let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
        attractions.sort((a, b) => b.Visitors - a.Visitors);
        let sortedAttractions = attractions.slice(0, 5);
        renderBarChart(sortedAttractions);
  });

let category = document.querySelector('#attraction-category');
category.addEventListener('change', function(){
    console.log(category.value);
    filterData(category.value);
});

function filterData(category) {
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    if (category === 'all') {
        let sortedAttractions = attractions.slice(0, 5);
        renderBarChart(sortedAttractions);
        return;
    }
    
    let filterAttractions = attractions.filter((attraction) => {
        return attraction.Category == category;
    });
    
    filterAttractions = filterAttractions.slice(0, 5);
    renderBarChart(filterAttractions);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
