import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs.test';

describe(`Tabs Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs';

describe(`Tabs Component`, () => {
  const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];
  const tabsProp = ['import renderer from react-test-renderer'];

  render() 
    const buttons = 'import renderer from react-test-renderer'
     currentTab = this.props.tabs[0]
    return (
      <div>
        {buttons}
        <div className='content'>
          {currentTab.content}
        </div>
      </div>
    )
  }

  it ('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)


renderButtons() {
  return this.props.tabs.map((tab, index) => (
    <button key={index}>
      {tab.name}
    </button>
  ))
}
renderContent() {
  const currentTab = this.props.tabs[0]
  return (
    <div className='content'>
      {currentTab.content}
    </div>
  )
}
render() {
  return (
    <div>
      {this.renderButtons()}
      {this.props.tabs.length && this.renderContent()}
    </div>
  )
}

