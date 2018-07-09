import { MyformsModule } from './myforms.module';

describe('MyformsModule', () => {
  let myformsModule: MyformsModule;

  beforeEach(() => {
    myformsModule = new MyformsModule();
  });

  it('should create an instance', () => {
    expect(myformsModule).toBeTruthy();
  });
});
