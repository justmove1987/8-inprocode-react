import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function Grafics() {
  const data = {
    labels: ['Gener', 'Febrer', 'Març', 'Abril'],
    datasets: [
      {
        label: 'Vendes',
        data: [10, 20, 15, 30],
        fill: false,
        borderColor: 'blue',
      },
    ],
  }

  return (
    <div>
      <h2>Gràfic de Vendes</h2>
      <Line data={data} />
    </div>
  )
}
