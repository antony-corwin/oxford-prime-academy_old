import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarPage } from '@pages/school/pages/calendar/calendar.page';


describe('CalendarPage', () => {
  let component: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
