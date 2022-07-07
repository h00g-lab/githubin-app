import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { finalize } from 'rxjs/operators';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    public multi: DefaultObject[] = [];
    public view: [number, number] = [700, 750];
    public colorScheme: Color = {
        name: '',
        selectable: false,
        group: ScaleType.Linear,
        domain: ['#428AC9', '#FB7C06', '#6C6D70', '#FBCF06', '#DCDCDC', '#483D8B', '#0000FF', '#4682B4', '#00FFFF', '#7FFFD4', '#5F9EA0', '#00FA9A', '#006400', '#BDB76B']
    };
    public barChartcustomColors = [];
    public repository: string = '';
    public showLoader: boolean = false;
    public functions: any = [];
    public isDetails: boolean = false;
    public averages: any = [];

    constructor(
        private route: ActivatedRoute,
        private dashboardService: DashboardService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            this.getData(params);
            this.repository = params.repository;
        });
    }

    private getData(params: any) {
        this.showLoader = true;

        this.dashboardService
            .get(params.user, params.repository)
            .pipe(
                finalize(() => this.showLoader = false)
            )
            .subscribe((val: any) => {
                this.multi = val.averages.map((value: any) => ({
                    name: value.file.split('/').at(-1),
                    value: Number(value.avg_ccn)
                }));
                this.functions = val.functions;
                this.averages = val.averages;
            })
    }

    public onSelect(event: any) {
        if (this.isDetails) return;
        let functionByFile = this.functions.filter((f: any) => event.name == f.file.split('/').at(-1));
        this.isDetails = true;
        this.multi = functionByFile.map((value: any) => ({
            name: value.name,
            value: Number(value.ccn)
        }));
    }

    public onBack() {
        this.isDetails = false;
        this.multi = this.averages.map((value: any) => ({
            name: value.file.split('/').at(-1),
            value: Number(value.avg_ccn)
        }));
    }

}

interface DefaultObject {
    name: string,
    value: number
}