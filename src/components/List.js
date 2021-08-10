import React, { Component } from 'react';
import { getVideos } from '../api';
import Loader from './Loader';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
      error: null,
    };
  }

  // hacer asíncrono componentDidMount no bloquea el ciclo de vida, porque el componentDidMount no tiene return, no afecta que sea una promesa. PASARÁ CUANDO PASE.
  async componentDidMount() {
    this.setState({ isLoading: true });

    // Promises example
    // getVideos()
    //   .then(data => this.setState({ videos: data, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));

    try {
      const videos = await getVideos();
      this.setState({ videos, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }
  render() {
    const { videos, isLoading, error } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <p className='error'>{error.message}</p>;
    }
    return (
      <React.Fragment>
        <Header onClickAdd={this.handleAdd} />
        <div className='container'>
          <div className='grid-container'>
            {videos &&
              videos.map((video, i) => {
                return <Item key={i} data={video} />;
              })}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default List;
