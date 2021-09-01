import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DocumentsPage } from '@pages/users/pages/documents/documents.page';


describe('DocumentsPage', () => {
  let component: DocumentsPage;
  let fixture: ComponentFixture<DocumentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
