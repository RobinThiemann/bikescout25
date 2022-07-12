import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import funcTest from "firebase-functions-test";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


describe('Component: Login', () => {

  let component: LoginComponent;
  let service: LoginService;
  let spy: any;

  beforeEach(() => {
    service = new LoginService();
    component = new LoginComponent(service);

    
  });

  afterEach(() => {
    service = null;
    component = null;
  });

describe("test iwfp api", () => {
  let iwfpapi, adminInitStub;
  const tester = funcTest();
  before(async () => {
    adminInitStub = sinon.stub(admin, "initializeApp");
    iwfpapi = await import("../src/index");
  });

  after(() => {
    adminInitStub.restore();
    tester.cleanup();
  });
});

  });

});
