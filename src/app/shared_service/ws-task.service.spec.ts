import { TestBed } from '@angular/core/testing';

import { WsTaskService } from './ws-task.service';

describe('WsTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsTaskService = TestBed.get(WsTaskService);
    expect(service).toBeTruthy();
  });
});
