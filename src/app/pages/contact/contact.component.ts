import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  public formGroup: FormGroup;
  public REemail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public REphone: RegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  snackMessage(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }

  sendForm() {
    if (this.formGroup.valid) {
      this.snackMessage("Formulário aceito e enviado!", "");
      this.formGroup.reset(this.formGroup);
    } else
      this.snackMessage(
        "Formulário inválido, por favor verifique os dados inseridos.",
        ""
      );
  }

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  setForDefaultValues() {
    this.formGroup = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.REemail),
        ],
      ],
      phone: ["", [Validators.required, Validators.pattern(this.REphone)]],
      message: ["", Validators.required],
    });
  }
}
