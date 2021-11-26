<template>
    <div>
        <div
            id="chart2"
            width="400"
            type="bar"
            :options="options"
            :series="series"
        ></div>
    </div>
</template>
<script>
import ApexCharts from "apexcharts";
export default {
    name: "apexLineChart",
    data: function () {
        return {
            options: {
                series: [
                    {
                        name: "Series 1",
                        data: [80, 50, 30, 40, 100, 20],
                    },
                    {
                        name: "Series 2",
                        data: [20, 30, 40, 80, 20, 80],
                    },
                    {
                        name: "Series 3",
                        data: [44, 76, 78, 13, 43, 10],
                    },
                ],
                chart: {
                    foreColor: "#fff",
                    height: 300,
                    type: "radar",
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1,
                    },
                },
                title: {
                    text: "Radar Chart - Multi Series",
                },
                stroke: {
                    width: 2,
                },
                fill: {
                    opacity: 0.1,
                },
                markers: {
                    size: 0,
                },
                xaxis: {
                    categories: [
                        "2011",
                        "2012",
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                    ],
                },
            },
        };
    },
    mounted() {
        var chart2 = new ApexCharts(
            document.querySelector("#chart2"),
            this.options
        );
        chart2.render();
    },
};
</script>
