import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public formGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.formGroup = this.getFormGroup();
    }

    private getFormGroup() {
        let form = this.formBuilder.group({
            user: [
                { value: null, disabled: false },
                Validators.compose([Validators.required])
            ],
            repository: [
                { value: null, disabled: false },
                Validators.compose([Validators.required])
            ],
        })

        return form;
    }

    public onAnalyze() {
        if(!this.formGroup.valid) return;

        let formGroup = this.formGroup.getRawValue();
        this.router.navigate([`${formGroup.user}/${formGroup.repository}`], { relativeTo: this.route });
    }

}
