import App from '@/App';
import { expect } from 'chai';

describe('App.vue', () => {
  it('should set correct default data', () => {
    const initialData = App.data();

    expect(initialData.item).to.equal('');
    expect(initialData.items).to.deep.equal([]);
  });
});
