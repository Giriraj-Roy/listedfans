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
        <div className="">
            {/* Pie chart */}
            <h1 className="mt-10 text-xl font-semibold capitalize ">Pie Chart</h1>
            <div className="w-[30vw] h-[30vh] flex">
                <div className='py-2 rounded-xl  w-full h-fit my-auto'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </div>
    )
}
export default PieChart;