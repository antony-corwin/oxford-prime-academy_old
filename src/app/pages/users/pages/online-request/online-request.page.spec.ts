import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlineRequestPage } from '@pages/users/pages/online-request/online-request.page';

describe('OnlineRequestPage', () => {
  let component: OnlineRequestPage;
  let fixture: ComponentFixture<OnlineRequestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineRequestPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
