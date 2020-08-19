import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';

export class Book{
    id: String;
    title: String;
    author: String;
    cover: String;
    status: String;
}

export class BookGoogle{
    id: String;
    volumeInfo: GoogleVolumeInfo; 
}

class GoogleVolumeInfo {
    title: String;
    authors: String[];
    imageLinks: imageLinksInfo;
}
class imageLinksInfo{
    thumbnail: String;
}