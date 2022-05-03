import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "ap-photo-form",
  templateUrl: "./photo-form.component.html",
  styleUrls: ["./photo-form.component.css"],
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  anexo: File;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.confiigurarFormulario();
  }
  confiigurarFormulario() {
    return (this.photoForm = this.formBuilder.group({
      file: ["", Validators.required],
      description: ["", [Validators.maxLength(50), Validators.required]],
      allowComments: [true, Validators.required],
    }));
  }

  upload(event) {
    // const dados = this.photoForm.getRawValue();
    const description = this.photoForm.get("description").value;
    const allowComments = this.photoForm.get("allowComments").value;

    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']));
  }
}
