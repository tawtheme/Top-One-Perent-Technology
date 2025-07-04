import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial selected category as All', () => {
    expect(component.selectedCategory).toBe('All');
  });

  it('should filter projects correctly', () => {
    const initialCount = component.projects.length;
    component.filterProjects('Web Development');
    expect(component.filteredProjects.length).toBeLessThanOrEqual(initialCount);
    expect(component.selectedCategory).toBe('Web Development');
  });

  it('should show all projects when All category is selected', () => {
    component.filterProjects('All');
    expect(component.filteredProjects.length).toBe(component.projects.length);
  });
}); 