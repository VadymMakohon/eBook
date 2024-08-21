import App from '@/App';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('should render correct contents', () => {
    expect(wrapper.html()).to.contain('<th>Items</th>');
    expect(wrapper.html()).to.contain(
      '<input type="text" class="prompt" placeholder="Add item...">'
    );
    expect(wrapper.html()).to.contain(
      '<button type="submit" class="ui button" disabled="">Add</button>'
    );
    expect(wrapper.html()).to.contain(
      '<span class="ui label">Remove all</span>'
    );
  });

  it('should set correct default data', () => {
    expect(wrapper.vm.item).to.equal('');
    expect(wrapper.vm.items).to.deep.equal([]);
  });

  it('should have the "Add" button disabled', () => {
    const addItemButton = wrapper.find('.ui.button');

    expect(addItemButton.element.disabled).to.be.true;
  });

  describe('the user populates the text input field', () => {
    let inputField;

    beforeEach(async () => {
      inputField = wrapper.find('input');
      inputField.element.value = 'New Item';
      await inputField.trigger('input');
    });

    it('should update the "text" data property', () => {
      expect(wrapper.vm.item).to.equal('New Item');
    });

    it('should enable the "Add" button when text input is populated', () => {
      const addItemButton = wrapper.find('.ui.button');

      expect(addItemButton.element.disabled).to.be.false;
    });

    describe('and then clears the input', () => {
      it('should disable the "Add" button', async () => {
        const addItemButton = wrapper.find('.ui.button');

        inputField.element.value = '';
        await inputField.trigger('input');

        expect(addItemButton.element.disabled).to.be.true;
      });
    });

    describe('and then submits the form', () => {
      let addItemButton;
      let itemList;
      let inputField;

      beforeEach(async () => {
        addItemButton = wrapper.find('.ui.button');
        itemList = wrapper.find('.item-list');
        inputField = wrapper.find('input');

        wrapper.setData({item: 'New Item'});
        await addItemButton.trigger('submit');
      });

      it('should add a new item to the "items" data property', () => {
        expect(wrapper.vm.items).to.contain('New Item');
        expect(itemList.html()).to.contain('<td>New Item</td>');
      });

      it('should set the "item" data property to a blank string', () => {
        expect(wrapper.vm.item).to.equal('');
        expect(inputField.element.value).to.equal('');
      });

      it('should disable the "Add" button', () => {
        expect(addItemButton.element.disabled).to.be.true;
      });
    });
  });

  describe('the user clicks the "Remove all" label', () => {
    let itemList;
    let removeItemsLabel;

    beforeEach(() => {
      itemList = wrapper.find('.item-list');
      removeItemsLabel = wrapper.find('.ui.label');

      wrapper.setData({items: ['Item #1', 'Item #2', 'Item #3']});
    });

    it('should remove all items from the "items" data property', async () => {
      await removeItemsLabel.trigger('click');

      expect(wrapper.vm.items).to.deep.equal([]);
      expect(itemList.html()).to.not.contain('<td>Item #1</td>');
      expect(itemList.html()).to.not.contain('<td>Item #2</td>');
      expect(itemList.html()).to.not.contain('<td>Item #3</td>');
    });
  });
});
