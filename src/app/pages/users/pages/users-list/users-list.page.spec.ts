import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersListPage } from '@pages/users/pages/users-list/users-list.page';


describe('UsersListPage', () => {
  let component: UsersListPage;
  let fixture: ComponentFixture<UsersListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
