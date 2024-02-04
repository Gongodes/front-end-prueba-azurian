import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { TableService } from './table.service';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TableService]
    })
  });


   it('should have getData function', () => {
    const service: TableService = TestBed.get(TableService);
    expect(service.getData).toBeTruthy();
   });
});
