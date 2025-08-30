import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formulario; // declaramos aquí

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombres: this.fb.array<FormControl<string>>([]),
    });
  }

  get nombres(): FormArray<FormControl<string>> {
    return this.formulario.get('nombres') as FormArray<FormControl<string>>;
  }

  agregarNombre() {
    this.nombres.push(
      this.fb.nonNullable.control('', { validators: [Validators.required] })
    );
  }

  eliminarNombre(i: number) {
    this.nombres.removeAt(i);
  }

 


  resultado: any = null;

enviar() {
  if (this.formulario.valid) {
    this.resultado = this.formulario.value;  // Guardamos el valor
  }
}

}
