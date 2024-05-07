import { Component } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-shars-page',
  templateUrl: './shars-page.component.html',
  styleUrls: ['./shars-page.component.css']
})
export class SharsPageComponent {

}

// const url: string = 'https://alpha-vantage.p.rapidapi.com/query?interval=1min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact&datatype=json';
// const options: { method: string; headers: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string; }; } = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'YourApiKey',
//         'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
//     }
// };

// async function fetchData(): Promise<void> {
//     try {
//         const response: Response = await fetch(url, options);
//         const data: any = await response.json();
//         const timeSeries: any = data['Time Series (1min)'];
//         const chartLabels: string[] = [];
//         const chartData: number[] = [];
//         let firstTime: boolean = true; // To ensure date is added only once
//         let dateLabel: string='';

//         for (let time in timeSeries) {
//             // Extract time part only (HH:MM) from the timestamp
//             const timePart: string = time.split(' ')[1];
//             chartLabels.push(timePart);
//             chartData.push(timeSeries[time]['4. close']);

//             // Extract date only once
//             if (firstTime) {
//                 dateLabel = time.split(' ')[0];
//                 firstTime = false;
//             }
//         }
//         plotChartData(chartLabels, chartData);

//         // Display date below the graph
//         displayDate(dateLabel);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function displayDate(dateLabel: string): void {
//     const dateElement: HTMLDivElement = document.createElement('div');
//     dateElement.textContent = 'Date: ' + dateLabel;
//     document.body.appendChild(dateElement);
// }

// async function plotChartData(labels: string[], data: number[]): Promise<void> {
//     const canvas: HTMLCanvasElement | null = document.getElementById('stockChart') as HTMLCanvasElement;
//     if (!canvas) {
//         console.error("Canvas element not found!");
//         return;
//     }

//     const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
//     if (!ctx) {
//         console.error("Canvas context not supported!");
//         return;
//     }

//     const chartConfig: ChartConfiguration = {
//         type: 'line',
//         data: {
//             labels: [],
//             datasets: [{
//                 label: 'MSFT Stock Price',
//                 data: [],
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: false
//                     }
//                 }]
//             }
//         }
//     };

//     const myChart: Chart = new Chart(ctx, chartConfig);

//     for (let i: number = 0; i < labels.length; i++) {
//         await delay(1000); // 1000 milliseconds = 1 second
//         myChart.data.labels.push(labels[i]);
//         myChart.data.datasets[0].data.push(data[i]);
//         myChart.update();
//     }
// }

// function delay(ms: number): Promise<void> {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// fetchData();
