import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('APP',()=>{
  const wrapper = shallow(<App />)

  it('app component is here', ()=>{
    expect(wrapper).toMatchSnapshot()
  });

  it('we have state array gift',()=>{
    expect(wrapper.state().gifts).toEqual([])
  });

  describe('when the btn ad-gifts clicked',()=>{
   
    beforeEach(()=>{
      wrapper.find('.btn-add').simulate('click');
    })

    afterEach(()=>{
      wrapper.setState({gifts: []})
    })
    it('when click btn add new gift in state array Gifts',()=>{
      expect(wrapper.state().gifts).toEqual([{id : 1}]);
    });
  
    it('add gifts and display this gifts in dom ',()=>{
      expect(wrapper.find('.gifts-list').children().length).toEqual(1)
    })

    it('create a gifts component',()=>{
      expect(wrapper.find('Gifts').exists()).toBe(true)
    })
  })

describe('remove a gifts',()=>{
  
  const id = 1;
  beforeEach(()=>{
    wrapper.instance().removeGifts(id);
  });

  it('remove this gifts from state',()=>{
    expect(wrapper.state().gifts).toEqual([])
  })
})


})