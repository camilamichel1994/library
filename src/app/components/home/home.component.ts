import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book-local.model';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listBook: Book[] = [];
 
  faBookOpen = faBookOpen;

  constructor(
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(response => {
      this.listBook = response;
      console.log(this.listBook);
    });
  }

  getStatusBook(status: String): String {
    switch (status) {
      case "1":
        return "LIDO";
      case "2":
        return "QUERO LER";
      case "3":
        return "ABANDONEI";
      default:
        return "STATUS DESCONHECIDO";
    }
  }

  removeBookList(id: String): void{
    this.bookService.removeBook(id).subscribe(response => {
        this.listBook.map((item: Book, indice) => {
          if(item.id == id){
            this.listBook.splice(indice, 1)
          }
        });
    }, error => {
        //fazer erro!
    })
  }

  editBook(id: String): void {
    this.router.navigateByUrl('register/' + id)
  }
    
}

