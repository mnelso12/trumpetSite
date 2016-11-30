google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var marchingData = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Marched in High School', 48],
			['Did Not', 31]
			]);

	var otherClubsData = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Involved in Another Club', 65],
			['Did Not', 14]
			]);

	var otherClubsOptions = {
		chartArea: {'width': '100%', 'height': '100%'},
	               'legend': {'position': 'bottom'},
		title: 'Marching Experience',
		is3D: true,
		backgroundColor: 'transparent',
		fontSize: '24',
		fontName: 'Roboto',
		slices: {
		0: { color: '#ff88ff' },
		1: { color: 'transparent' }
		}
	};

	var otherInstrumentData = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Play Another Instrument', 58],
			['Did Not', 21]
			]);

	var otherInstrumentOptions = {
		chartArea: {'width': '100%', 'height': '100%'},
	               'legend': {'position': 'bottom'},
		title: 'Marching Experience',
		is3D: true,
		backgroundColor: 'transparent',
		fontSize: '24',
		fontName: 'Roboto',
		slices: {
		0: { color: '#fdc116' },
		1: { color: 'transparent' }
		}
	};

	var marchingOptions = {
		chartArea: {'width': '100%', 'height': '100%'},
	               'legend': {'position': 'bottom'},
		title: 'Marching Experience',
		is3D: true,
		backgroundColor: 'transparent',
		fontSize: '24',
		fontName: 'Roboto',
		slices: {
		0: { color: '#009959' },
		1: { color: 'transparent' }
		}
	};
	
	var serviceData = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Service', 60],
			['Did Not', 19]
			]);

	var ensemblesData = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['In Another Ensemble', 64],
			['Did Not', 15]
			]);

	var ensemblesOptions = {
		chartArea: {'width': '100%', 'height': '100%'},
	               'legend': {'position': 'bottom'},
		title: 'Marching Experience',
		is3D: true,
		backgroundColor: 'transparent',
		fontSize: '24',
		fontName: 'Roboto',
		slices: {
		0: { color: '#9966ff' },
		1: { color: 'transparent' }
		}
	};

	var leadershipData = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Leadership',     31],
			['Did Not', 48]
			]);

	var leadershipOptions = {
		chartArea: {'width': '100%', 'height': '100%'},
	               'legend': {'position': 'bottom'},
		title: 'Marching Experience',
		is3D: true,
		backgroundColor: 'transparent',
		fontSize: '24',
		fontName: 'Roboto',
		slices: {
		0: { color: '#ff0066' },
		1: { color: 'transparent' }
		}
	};

	var serviceOptions = {
		chartArea: {'width': '100%', 'height': '100%'},
	               'legend': {'position': 'bottom'},
		title: 'Marching Experience',
		is3D: true,
		backgroundColor: 'transparent',
		fontSize: '24',
		fontName: 'Roboto',
		slices: {
		0: { color: '#00ccff' },
		1: { color: 'transparent' }
		}
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
	chart.draw(marchingData, marchingOptions);

	// I have no idea why this works but whatever
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d_2'));
	chart.draw(otherInstrumentData, otherInstrumentOptions);
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d_3'));
	chart.draw(otherClubsData, otherClubsOptions);
	
	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d_2'));
	chart.draw(otherInstrumentData, otherInstrumentOptions);
	
	var chart = new google.visualization.PieChart(document.getElementById('service_pie'));
	chart.draw(serviceData, serviceOptions);
	
	var chart = new google.visualization.PieChart(document.getElementById('leadership_pie'));
	chart.draw(leadershipData, leadershipOptions);
	
	var chart = new google.visualization.PieChart(document.getElementById('ensembles_pie'));
	chart.draw(ensemblesData, ensemblesOptions);
}

