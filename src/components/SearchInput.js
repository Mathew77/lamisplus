import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = () => {
  return (
    <Form  className="cr-search-form" onSubmit={e => e.preventDefault()} >
      <MdSearch
        size="40"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        type="search"
        className="cr-search-form__input"
        placeholder="Search by Patient Name, Hospital Number "

      />
    </Form>
    
  );
};

export default SearchInput;
