import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MockComponents } from "ng-mocks";
import { ContactComponent } from "./contact.component";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatSnackBarModule],
      declarations: [
        ContactComponent,
        MockComponents(MatError, MatLabel, MatFormField, MatButton, MatInput),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Valid input email", () => {
    // Não definir valor para o email
    component.formGroup.patchValue({ email: "" });
    fixture.autoDetectChanges();
    // Obter a tag mat-error e verificar a mensagem
    let inputEmail = document.getElementsByClassName("email");
    let matError = inputEmail[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual("O email é obrigatório");

    // Definir email inválida
    component.formGroup.patchValue({ email: "teste@quickfast" });
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName("email");
    matError = inputEmail[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual("Email inválido");

    // Definir email válido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({ email: "teste@quickfast.com" });
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName("email");
    matError = inputEmail[0].getElementsByTagName("mat-error");
    expect(matError.length).toEqual(0);
  });

  it("Valid input name", () => {
    // Não definir valor para o nome
    component.formGroup.patchValue({ name: "" });
    fixture.autoDetectChanges();

    // Obter a tag mat-error e verificar a mensagem
    let inputName = document.getElementsByClassName("name");
    let matError = inputName[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual("O nome é obrigatório");

    // Definir nome inválido menor que 3 caracteres
    component.formGroup.patchValue({ name: "M" });
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName("name");
    matError = inputName[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual(
      "O nome aceita no mínimo 3 caracteres"
    );

    // Definir nome inválido maior que 40 caracteres
    component.formGroup.patchValue({
      name: "SASUKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
    });
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName("name");
    matError = inputName[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual(
      "O nome aceita no máximo 40 caracteres"
    );

    // Definir nome válido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({ name: "Naruto" });
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName("name");
    matError = inputName[0].getElementsByTagName("mat-error");
    expect(matError.length).toEqual(0);
  });

  it("valid input phone", () => {
    // Não definir valor para o numero
    component.formGroup.patchValue({ phone: "" });
    fixture.autoDetectChanges();

    // Obter a tag mat-error e verificar a mensagem
    let inputPhone = document.getElementsByClassName("phone");
    let matError = inputPhone[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual("O telefone é obrigatório");

    // Definir telefone inválido
    component.formGroup.patchValue({ phone: "911" });
    fixture.autoDetectChanges();

    inputPhone = document.getElementsByClassName("phone");
    matError = inputPhone[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual("Telefone inválido");

    // Definir telefone válido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({ phone: "11987654321" });
    fixture.autoDetectChanges();

    inputPhone = document.getElementsByClassName("phone");
    matError = inputPhone[0].getElementsByTagName("mat-error");
    expect(matError.length).toEqual(0);
  });

  it("valid input message", () => {
    // Não definir valor para a message
    component.formGroup.patchValue({ message: "" });
    fixture.autoDetectChanges();

    // Obter a tag mat-error e verificar a mensagem
    let inputMessage = document.getElementsByClassName("message");
    let matError = inputMessage[0].getElementsByTagName("mat-error");
    expect(matError[0].textContent.trim()).toEqual("Mensagem obrigatória");

    // Definir mensagem válida e verificar se não tem a tag mat-error
    component.formGroup.patchValue({ message: "teste" });
    fixture.autoDetectChanges();

    inputMessage = document.getElementsByClassName("message");
    matError = inputMessage[0].getElementsByTagName("mat-error");
    expect(matError.length).toEqual(0);
  });
});
