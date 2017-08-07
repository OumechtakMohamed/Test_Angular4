import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
	Math : any;
    public form: FormGroup;
	message = 0;
	
	date1 = null;
	date2 = null;

    public constructor(private fb: FormBuilder) {
		this.Math = Math;
	}

    public ngOnInit(): void {
       
    }
	
	calculate(){
		var millis = Math.abs(this.date1 - this.date2);
		var seconds = millis / 1000;
        var totalMinutes = seconds / 60;
        var days = totalMinutes / (60*24);
        console.log(days);
		
		this.message = days;
		//return this.form.value.date1 - this.form.value.date2;
	}
}


