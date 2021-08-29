import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArchivePage } from '@pages/users/pages/archive/archive.page';

describe('ArchivePage', () => {
  let component: ArchivePage;
  let fixture: ComponentFixture<ArchivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivePage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
