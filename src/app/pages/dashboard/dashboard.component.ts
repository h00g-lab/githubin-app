import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'chart.js';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public doughnutChartData: any = {
        labels: ['Média de complexidade ciclomática', 'Média de linhas de código', 'Média de funções', 'Total de linhas de código', 'Total de warnings'],
        datasets: [],
    }

    constructor(
        private route: ActivatedRoute,
        private dashboardService: DashboardService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.getData(params);
        });
    }

    private getData(params: any) {
        this.dashboardService
            .get(params.user, params.repository)
            .pipe()
            .subscribe((val: any) => {
                this.doughnutChartData.datasets.push({ data: [parseFloat(val.totals.avg_ccn)]});

                // this.doughnutChartData.datasets[0].data.push(parseFloat(val.totals.avg_ccn));
                // this.doughnutChartData.datasets[0].data.push(parseFloat(val.totals.avg_nloc));
                // this.doughnutChartData.datasets[0].data.push(parseFloat(val.totals.avg_token));
                // this.doughnutChartData.datasets[0].data.push(parseFloat(val.totals.function_cnt));
                // this.doughnutChartData.datasets[0].data.push(parseFloat(val.totals.nloc));
                
                console.log(this.doughnutChartData.datasets);
            })
    }

}
