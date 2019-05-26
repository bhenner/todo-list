import { TestBed } from '@angular/core/testing';

import { TaskReaderService } from './task-reader.service';

describe('TaskReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskReaderService = TestBed.get(TaskReaderService);
    expect(service).toBeTruthy();
  });
});
