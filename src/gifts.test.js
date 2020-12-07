import React from 'react';
import { shallow } from 'enzyme';
import Gifts from './Gifts';


describe('gifts',()=>{
    const wrapper =  shallow(<Gifts />);

    it(' gifts component exists',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('state present && person exist',()=>{
        expect(wrapper.state()).toEqual({person: '', present: ''})
    })

});


describe('typing into person input',()=>{
    const wrapper =  shallow(<Gifts />);
   
    const person = 'mama'  
    
    beforeEach(()=>{
        wrapper.find('.input-person').simulate('change',{ target:{value: person}});
    })

    it('update the state person',()=>{
        expect(wrapper.state().person).toEqual(person);
    })
})

describe('typing into input present',()=>{
    const wrapper =  shallow(<Gifts />);
   
    const present = 'playstation'  
    
    beforeEach(()=>{
        wrapper.find('.input-present').simulate('change',{ target:{value: present}});
    })

    it('update the state present',()=>{
        expect(wrapper.state().present).toEqual(present);
    })
})

describe('remove gift',()=>{

    const removeFn = jest.fn();
    const id = 1;
    const wrapper =  shallow(<Gifts gifts={id} removeGifts={removeFn} />);

    beforeEach(()=>{
        wrapper.find('.btn-remove').simulate('click')
    })

    it('call removeGifts fn',()=>{
        expect(removeFn).toHaveBeenCalledWith(id)
    })
        
})