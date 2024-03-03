// src/app/edit-user/edit-user.component.ts
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms'; 
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Recibe el usuario a editar
  ) {
    this.editUserForm = new FormGroup({
      id_user: new FormControl(this.data.user.id_user, [Validators.required]),
      name: new FormControl(this.data.user.name, [Validators.required]),
      surname: new FormControl(this.data.user.surname),
      email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.editUserForm.valid) {
      this.userService.updateUser(this.editUserForm.value).subscribe({
        next: () => {
          this.dialogRef.close();
          // Aquí se podría opcionalmente recargar la lista de usuarios o manejar el éxito de la operación
        },
        error: (error) => console.error(error)
      });
    }
  }

  
  onCancel(): void {
    this.dialogRef.close();
  }
}
