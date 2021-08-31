import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InvitationPage } from '@pages/users/pages/invitation/invitation.page';


describe('InvitationPage', () => {
  let component: InvitationPage;
  let fixture: ComponentFixture<InvitationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitationPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
