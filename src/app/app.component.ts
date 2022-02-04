import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formReactivos';

  constructor(private formBuilder:FormBuilder){

  }

  objeto = {}

  resp1:any
  resp2:any
  resp3:any
  resp4:any

  obtener1(e:any){
    this.resp1 = e.target.value
  }

  obtener2(e:any){
    this.resp2 = e.target.value
  }

  obtener3(e:any){
    this.resp3 = e.target.value
  }

  obtener4(e:any){
    this.resp4 = e.target.value
  }

  

  registerForm = this.formBuilder.group({
    pregunta: [""],
    resp1: [""],
    resp2: [""],
    resp3: [""],
    resp4: [""],
    nivel: [""],
    respCorrect: [false]

  })



  enviar() {
    this.objeto = this.registerForm.value
    console.log(this.objeto)
  }

}
