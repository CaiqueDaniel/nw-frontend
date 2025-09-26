import { FormDataPayloadMapper } from '~/modules/shared/infra/mappers/FormDataPayloadMapper';

describe('FormDataPayloadMapper unit tests', () => {
  let sut: FormDataPayloadMapper;

  beforeAll(() => {
    sut = new FormDataPayloadMapper();
  });

  it('should be able to transform object with text into formdata', () => {
    const result = sut.transform({ fieldName: 'test', fieldName2: 'test2' });
    expect(result.get('fieldName')).toBe('test');
    expect(result.get('fieldName2')).toBe('test2');
  });

  it('should be able to transform object with number into formdata', () => {
    const result = sut.transform({ fieldName: 1, fieldName2: 2 });
    expect(result.get('fieldName')).toBe('1');
    expect(result.get('fieldName2')).toBe('2');
  });

  it('should be able to transform object with date into formdata', () => {
    const date = new Date();
    const result = sut.transform({ fieldName: date });
    expect(result.get('fieldName')).toBe(date.toISOString());
  });

  it('should be able to transform object with file into formdata', () => {
    const file = new File(['content'], 'file.txt');
    const result = sut.transform({ fieldName: file });
    expect(result.get('fieldName')).toEqual(file);
  });

  it('should be able to transform object with other objects into formdata', () => {
    const result = sut.transform({
      fieldName: {
        inner: 'text',
      },
    });
    expect(result.get('fieldName[inner]')).toBe('text');
  });

  it('should be able to transform object with array into formdata', () => {
    const result = sut.transform({ fieldName: [1, 2] });
    expect(result.get('fieldName[0]')).toBe('1');
    expect(result.get('fieldName[1]')).toBe('2');
  });

  it.each([{ fieldName: null }, { fieldName: undefined }, { fieldName: '' }])(
    'should be able to transform object with nullable values into formdata',
    (input) => {
      const result = sut.transform(input);
      expect(result.has('fieldName')).toBeFalsy();
      expect(result.get('fieldName')).toBeNull();
    }
  );

  it('should be able to transform a complex object into formdata', () => {
    const expectedFile = new File(['content'], 'file.txt');
    const expectedDate = new Date('2025-03-20 00:00').toISOString();
    const result = sut.transform({
      fieldName: 'text',
      fieldName2: {
        inner: 'text',
        items: [{ date: expectedDate, file: expectedFile }],
      },
    });
    expect(result.get('fieldName')).toBe('text');
    expect(result.get('fieldName2[inner]')).toBe('text');
    expect(result.get('fieldName2[items][0][date]')).toBe(expectedDate);
    expect(result.get('fieldName2[items][0][file]')).toEqual(expectedFile);
  });
});
