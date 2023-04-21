import { useEffect } from "react"
import { Chart } from "chart.js";


const PieChart = () =>{
    useEffect(() => {
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
                datasets: [{
                    data: [55, 31, 14],
                    borderColor: [
                        "#98D89E",
                        "#F6DC7D",
                        "#EE8484",
                    ],
                    backgroundColor: [
                        "#98D89E",
                        "#F6DC7D",
                        "#EE8484",
                    ],
                    borderWidth: 0,
                }]
            },
            options: {
                legend: {
                    labels: {
                      fontColor: "#858585",
                      usePointStyle: true,
                    },
                    align: "right",
                    position: "right",
                },
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
    }, [])
    return (
        <div className="mx-[2vw] pt-4 px-10 w-[40%] bg-white rounded-3xl">
            {/* Pie chart */}
            <div className="flex relative w-full max-w-full flex-grow flex-1 bg-transparent">
                <div className="bg-transparent text-xl w-fit font-semibold capitalize ">Top Products</div>
                <div className="bg-transparent flex justify-end w-[60%] text-[#858585] text-base font-[500]">
                    May - June 2021
                    <svg className="my-auto mx-1 h-fit bg-transparent" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z" fill="#858585"/>
                    </svg>
                </div>              
            </div>
            <div className="bg-transparent w-[24vw] flex">
                <div className='py-2 rounded-xl  w-full h-fit my-auto bg-transparent'>
                    <canvas className="bg-transparent" id='myChart'></canvas>
                </div>
            </div>
        </div>
    )
}
export default PieChart;