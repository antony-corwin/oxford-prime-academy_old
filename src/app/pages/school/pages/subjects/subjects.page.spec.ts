import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SubjectsPage } from '@pages/school/pages/subjects/subjects.page';

describe('SubjectsPage', () => {
  let component: SubjectsPage;
  let fixture: ComponentFixture<SubjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectsPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
