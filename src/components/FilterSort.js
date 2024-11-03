import React from 'react';
import { Form, Checkbox, Dropdown, Segment } from 'semantic-ui-react';

const FilterSort = ({ filterGreased, setFilterGreased, sortOption, setSortOption }) => {
  const sortOptions = [
    { key: 'name', text: 'Sort by Name', value: 'name' },
    { key: 'weight', text: 'Sort by Weight', value: 'weight' },
  ];

  return (
    <Segment>
      <Form>
        <Form.Field>
          <Checkbox
            label="Filter Greased Hogs"
            checked={filterGreased}
            onChange={(e, { checked }) => setFilterGreased(checked)}
          />
        </Form.Field>
        <Form.Field>
          <label>Sort Hogs:</label>
          <Dropdown
            placeholder='Select Sort Option'
            fluid
            selection
            options={sortOptions}
            value={sortOption}
            onChange={(e, { value }) => setSortOption(value)}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default FilterSort;