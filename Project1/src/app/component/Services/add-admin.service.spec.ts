import { TestBed, inject } from '@angular/core/testing';

import { AddAdminService } from './add-admin.service';

describe('AddAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddAdminService]
    });
  });

  it('should be created', inject([AddAdminService], (service: AddAdminService) => {
    expect(service).toBeTruthy();
  }));
});
