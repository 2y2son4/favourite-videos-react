import React, { PureComponent } from 'react';
import { getVideos } from '../api';
import Loader from './Loader';
import Item from './Item';
import Add from './Add';
import Header from './Header';
import Footer from './Footer';

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
      error: null,
      showAdd: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
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

    return true;
  }

  handleAdd(ev) {
    ev.preventDefault();
    this.setState({ showAdd: true });
  }

  handleCloseAdd(reload) {
    return () => {
      if (reload) {
        this.setState({ isLoading: true, showAdd: false });
        getVideos()
          .then((data) => this.setState({ videos: data, isLoading: false, showAdd: false }))
          .catch((error) => this.setState({ error, isLoading: false, showAdd: false }));
      } else {
        this.setState({ showAdd: false });
      }
    };
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

        {this.state.showAdd && <Add onClose={this.handleCloseAdd} />}

        <Footer />
      </React.Fragment>
    );
  }
}

export default List;
