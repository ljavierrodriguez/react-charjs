import logo from './logo.svg';
import { Chart } from 'chart.js';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  });

  const [options, setOptions] = useState({
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  });

  useEffect(() => {
    initChart();
    initPieChart();
  }, [data])

  const initChart = () => {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  const initPieChart = () => {
    var ctx = document.getElementById('myChart2');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <canvas id="myChart" style={{ width: "400px", height: "400px" }}></canvas>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <canvas id="myChart2" style={{ width: "400px", height: "400px" }}></canvas>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={() => {
            setData(prevData => {
              const newColors = ["Purple", "Brown", "Pink", "Yellow", "Indigo", "Blue"];
              return { ...prevData, labels: newColors }
            })
          }}>
            Set Colors
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
