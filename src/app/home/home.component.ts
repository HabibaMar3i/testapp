import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Courses } from '../courses';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from "../gallery/gallery.component";

interface TestUser {
  name: string;
  age: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  name: string = "Habiba"
  age: number = 30
  persons: string[] = ["Ali", "Ahmed", "Mariam"]
  imageSrc: string = "assets/images/test.jpg"
  textClass: string= "text-center bg-dark w-75 text-primary"
  textStyleColor:string ="red"
  productPrice = 1000
  parentMessage: string = 'Hello from Parent!';
  hello(){
    alert("Hello World!")
  }
  user: any = [
    {
      userName: "Habiba",
      userAge: 30,
      email: "habiba@example.com",
      DOB: "24/04/2002",
      address: "Nasr City"
    },
    {
      userName: "Ali",
      userAge: 25,
      email: "ali@example.com",
      DOB: "15/06/1997",
      address: "Riyadh"
    },
    {
      userName: "Mariam",
      userAge: 28,
      email: "mariam@example.com",
      DOB: "05/01/1994",
      address: "Dubai"
    }
  ]
  people: TestUser = {
    name : "Mostafa",
    age: 22
  }

  science: Courses = {
    id: 1,
    title: "Mathematics",
    description: "Mathematics is a branch of mathematics that deals with numbers, functions, and algebra. It is concerned with the properties and relationships between them."
  }

  task: string = " "
}
