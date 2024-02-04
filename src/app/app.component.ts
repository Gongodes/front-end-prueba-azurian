import { Component , ViewChild} from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';


export interface UserData{
id: String,
nombre:String,
apellido:String,
telefono:String,
direccion:String,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-azurian';
  displayedColumn: string[]=['id','nombre','apellido','telefono', 'direccion' ]
  dataSource!: MatTableDataSource<UserData>
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts: any
  constructor(private service: TableService){
    this.service.getData().subscribe(data => {
      console.log(data)

      this.posts=data
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })

  }
}
