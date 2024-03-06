// src/app/home.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component'; 



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavBarComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  searchUserId: number | null = null;
  searchedUser: User | null = null;
  isFormVisible: boolean = false;

  constructor(private dialog: MatDialog, private userService: UserService) { 
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl(''), // Asumiendo que el apellido es opcional
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.loadUsers(); 
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUsers(); 
    });
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    });
  }

  createUser(): void {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe({
        next: () => {
          this.loadUsers(); 
          this.userForm.reset(); 
        },
        error: (error) => console.error(error),
      });
    }
  }

  deleteUser(id_user: number | undefined): void {
    if (id_user !== undefined) {
      this.userService.deleteUser(id_user).subscribe({
        next: () => this.loadUsers(),
        error: (error) => console.error(error),
      });
    } else {
      console.error('Intento de eliminar un usuario sin un ID válido');
    }
  }
  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

}  