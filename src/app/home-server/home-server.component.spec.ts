import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServerComponent } from './home-server.component';

describe('HomeServerComponent', () => {
  let component: HomeServerComponent;
  let fixture: ComponentFixture<HomeServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
