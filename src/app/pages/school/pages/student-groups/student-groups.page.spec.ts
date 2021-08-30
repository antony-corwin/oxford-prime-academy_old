import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentGroupsPage } from '@pages/school/pages/student-groups/student-groups.page';

describe('StudentGroupsPage', () => {
  let component: StudentGroupsPage;
  let fixture: ComponentFixture<StudentGroupsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentGroupsPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
