import './App.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import React, { Component } from 'react';
import Modal from './components/Modal';
// import Clock from './components/Clock';
import Tabs from './components/Tabs/Tabs';
import tabs from './components/Tabs/tabs.json';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Tabs items={tabs} />

        {/* <button type="button" onClick={this.toggleModal}>
          Modal open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>This is modal's content as CHILDREN</h2>
            <LoremIpsum p={1} />
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )} */}

        {/* {showModal && <Clock />}
        <button type="button" onClick={this.toggleModal}>
          Таймер
        </button> */}
      </>
    );
  }
}

export default App;
