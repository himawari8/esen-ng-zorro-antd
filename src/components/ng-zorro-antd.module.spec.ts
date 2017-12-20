import { async, TestBed } from '@angular/core/testing';
import { EsenNgZorroAntdModule, NzRootConfig, NZ_ROOT_CONFIG } from './ng-zorro-antd.module';

describe('EsenNgZorroAntdModule with Angular integration', () => {
  it('should not provide root config with empty forRoot', async(() => {
    TestBed.configureTestingModule({
      imports: [
        EsenNgZorroAntdModule.forRoot(),
      ],
    }).compileComponents();

    expect(TestBed.get(NZ_ROOT_CONFIG)).not.toBeDefined();
  }));

  it('should provide root config with params in forRoot', async(() => {
    const options: NzRootConfig = { extraFontName: '', extraFontUrl: '' };

    TestBed.configureTestingModule({
      imports: [
        EsenNgZorroAntdModule.forRoot(options),
      ],
    }).compileComponents();

    expect(TestBed.get(NZ_ROOT_CONFIG)).toBeDefined();
  }));
});
