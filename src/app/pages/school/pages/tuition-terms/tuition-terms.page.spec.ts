import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TuitionTermsPage } from '@pages/school/pages/tuition-terms/tuition-terms.page';


describe('TuitionTermsPage', () => {
  let component: TuitionTermsPage;
  let fixture: ComponentFixture<TuitionTermsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuitionTermsPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionTermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
