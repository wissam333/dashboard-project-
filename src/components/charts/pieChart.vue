<script>
import { Pie } from "vue-chartjs";
export default {
    extends: Pie,
    data() {
        return {
            datacollection: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850",
                            "#ababab",
                            "#ff00bb",
                        ],
                        data: [40, 39, 10, 40, 39, 80, 40],
                    },
                ],
            },
            Option: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
    mounted() {
        this.renderChart(this.datacollection, this.options);
    },
};
</script>
