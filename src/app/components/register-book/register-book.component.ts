import { Component, OnInit } from '@angular/core';
import { Book, BookGoogle } from '../../model/book-local.model';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { faSearch} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.scss']
})
export class RegisterBookComponent implements OnInit {
  
  faSearch = faSearch;
  booksGoogle: BookGoogle[];
  listBook: Book[] = [];
  id: String;
  titulo: String = "";
  autor : String = "";
  status: String;
  urlLivro: String = "";
  searchTitle: String = "";
  isLoading: boolean = false;
  isValid: Boolean = true;
   

  constructor(
    private bookService: BookService,
    private activeRoute: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.bookService.findById(this.id).subscribe(response => {
        this.titulo = response.title;
        this.autor = response.author;
        this.status = response.status;
        this.urlLivro = response.cover;
      },
      error => {
        //display error
      }); 
    }
  }

  insert(): void {
    const newBook = {
      title: this.titulo,
      author: this.autor,
      cover: this.urlLivro,
      status: this.status,
    }
    
    if (this.id) {
      this.bookService.editBook(<Book>newBook, this.id).subscribe(res => {
        //redireciona para a rota de home
      }, error =>{
        //mensagem de erro
      })
    }else{
      this.bookService.addBook(<Book>newBook).subscribe(res => {
        //redireciona para a rota de home
      }, error => {
        //exibir alert vermelho de erro
      })
    }
  }
  search(): void {
    this.isLoading= true;
    this.isValid= false;
    this.bookService.searchGoogleByName(this.searchTitle.replace(" ", "+")).subscribe(response => {
      this.booksGoogle = response.items;
      this.isLoading= false;  
     });
  }
  getSuggestionBook(book: BookGoogle): void {
    this.isValid = true;
    this.titulo = book.volumeInfo.title;
    this.autor = book.volumeInfo.authors[0];
    this.urlLivro = book.volumeInfo.imageLinks.thumbnail;
  }
}

