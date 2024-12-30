import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-campaign-data',
  templateUrl: './campaign-data.component.html',
  styleUrl: './campaign-data.component.scss'
})
export class CampaignDataComponent {
  breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Campanhas', link: '/dashboard/campanhas' },
    { name: 'Dados', link: '' }
  ];

  Highcharts: typeof Highcharts = Highcharts;

  // DASH ENROLLMENTS
  enrollmentsQTD: Highcharts.Options = {
    title: {
      text: 'Inscrições na campanha'
    },
    subtitle: {
      text: 'Quantidade de inscrições na campanha por dia.'
    },
    xAxis: {
      type: 'datetime', // Especifica que o eixo X será de datas
      title: {
        text: 'Data'
      },
      labels: {
        format: '{value:%d/%m}' // Formato para exibir a data como dia/mês
      }
    },
    yAxis: {
      title: {
        text: 'Número de Inscrições'
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2023, 7, 13), // Começo da data (13 de agosto de 2023)
        pointInterval: 24 * 3600 * 1000 // Intervalo de 1 dia (em milissegundos)
      }
    },
    series: [
      {
        name: 'Quantidade de inscrição',
        type: 'line', // Tipo de gráfico
        data: [
          [Date.UTC(2023, 7, 13), 200], // 13/08 - 200 inscrições
          [Date.UTC(2023, 7, 14), 400], // 14/08 - 400 inscrições
          [Date.UTC(2023, 7, 15), 700], // 15/08 - 700 inscrições
          [Date.UTC(2023, 7, 16), 900]  // 16/08 - 900 inscrições
        ]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  };

  // DASH TOP ENROLLMENTS
  topEnrollmentsQTD: Highcharts.Options = {
    chart: {
      type: 'bar' // Definindo o tipo do gráfico como 'bar' para gráfico de barras
    },
    title: {
      text: 'Top 10 dias de inscrições na campanha'
    },
    subtitle: {
      text: 'Quantidade de inscrições por dia (Top 10)'
    },
    xAxis: {
      categories: [
        '13/08', '14/08', '15/08', '16/08', '17/08', 
        '18/08', '19/08', '20/08', '21/08', '22/08' // As datas dos top 10 registros
      ],
      title: {
        text: ''
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    series: [
      {
        name: 'Quantidade de inscrição',
        type: 'bar', // Definindo o tipo da série como 'bar' (gráfico de barras)
        data: [
          200, 400, 700, 900, 1000, 
          1200, 1300, 1400, 1500, 1600 // Os valores das inscrições para as respectivas datas
        ]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  };
}
