import React, { PureComponent } from 'react';
import { addVideo } from '../api';

import '../styles/add.scss';

const parseYoutubeUrl = (url) => {
  const match = url.match(/[?&]([^=#]+)=([^&#]*)/);
  return match && match[2];
};

class Add extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      showSending: false,
      title: '',
      url: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // sirve para guardar el valor del input según se va escribiendo
  handleChange(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value,
      });
    };
  }

  validation(app) {
    return app.title.length > 0 && app.url.length > 0 && app.description.length > 2 ? true : false;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onClose } = this.props;
    const token = parseYoutubeUrl(this.state.url || '');
    if (this.validation(this.state) && token) {
      this.setState({ showSending: true });
      addVideo({
        title: this.state.title,
        description: this.state.description,
        url: this.state.url,
        thumbnail: `https://img.youtube.com/vi/${token}/maxresdefault.jpg`,
        embed: `https://www.youtube.com/embed/${token}`,
      }).then(onClose(true));
    } else {
      this.setState({
        hasError: true,
      });
    }
  }

  render() {
    const { showSending, title, url, description, hasError } = this.state;
    const { onClose } = this.props;
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-content-flex'>
            <h2>Add new video</h2>{' '}
            <span className='close' onClick={onClose(false)}>
              <i className='zmdi zmdi-close'></i>
            </span>
          </div>
          <form>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={this.handleChange('title')}
              minLength='3'
              maxLength='200'
              required
            />
            <label>Url</label>
            <input type='text' value={url} onChange={this.handleChange('url')} minLength='3' maxLength='200' required />
            <label>Description</label>
            <textarea value={description} onChange={this.handleChange('description')} required />

            {showSending
              ? showSending && <span className='success'> Saving .... </span>
              : hasError && <div className='error'> Some fields are empty or contain wrong values. </div>}

            <div className='modal-button-submit'>
              <input type='submit' onClick={this.handleSubmit} value='Submit' disabled={showSending} />
              <i class='zmdi zmdi-upload'></i>
              <span>Submit</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
