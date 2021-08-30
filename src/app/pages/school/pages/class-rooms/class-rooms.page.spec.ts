import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassRoomsPage } from '@pages/school/pages/class-rooms/class-rooms.page';


describe('ClassRoomsPage', () => {
  let component: ClassRoomsPage;
  let fixture: ComponentFixture<ClassRoomsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassRoomsPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
