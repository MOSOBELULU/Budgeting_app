// /*eslint-disable*/
// import { Bar } from "react-chartjs-2";



// export default function TransactionChart( {transactions}) {
//     const monthlyData = transactions.reduce((data, transaction) => {
//         const date = new Date(transaction.date);
//         const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
//         if (!data[monthYear]) {
//           data[monthYear] = { income: 0, expense: 0 };
//         }
//         if (transaction.type === 'income') {
//           data[monthYear].income += parseFloat(transaction.amount);
//         } else if (transaction.type === 'expense') {
//           data[monthYear].expense += parseFloat(transaction.amount);
//         }
//         return data;
//       }, {});

//       const chartData = {
//         labels: Object.keys(monthlyData),
//         datasets: [
//           {
//             label: 'Income',
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//             hoverBorderColor: 'rgba(75,192,192,1)',
//             data: Object.values(monthlyData).map(data => data.income),
//           },
//           {
//             label: 'Expense',
//             backgroundColor: 'rgba(255,99,132,0.4)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(255,99,132,0.6)',
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             data: Object.values(monthlyData).map(data => data.expense),
//           },
//         ],
//     };
//   return (
//     <div>
//       <Bar data={chartData} />
//     </div>
//   )
// }
