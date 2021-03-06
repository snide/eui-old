import React, {
  Component,
} from 'react';

import {
  KuiPagination,
} from '../../../../src/components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0
    };

    this.PAGE_COUNT = 4;
  }

  goToPage = pageNumber => {
    this.setState({
      activePage: pageNumber,
    });
  }

  render() {
    return (
      <KuiPagination
        pageCount={this.PAGE_COUNT}
        activePage={this.state.activePage}
        onPageClick={this.goToPage}
      />
    );
  }
}
