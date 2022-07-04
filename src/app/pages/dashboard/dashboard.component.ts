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
    public doughnutChartType: ChartType = 'doughnut';
    public doughnutChartData = {
        labels: ['Germany', 'United States', 'France'],
        datasets: [{
            data: [59090, 23232, 32123]
        }],
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
                console.log(val);
            })
    }

}
