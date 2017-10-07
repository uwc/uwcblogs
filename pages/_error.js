import { Component } from 'react';
import PropTypes from 'prop-types';
import Site from '../layouts/Site';
import Main from '../components/Main';
import Header from '../components/Header';
import Link from '../components/Link';

export default class Error extends Component {
  static async getInitialProps({ req, res }) {
    const { protocol } = req || {};
    const siteUrl = req ? `${protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site`).then(resp => resp.json());
    const { statusCode } = res;
    return { site, statusCode };
  }

  render() {
    const { site, statusCode } = this.props;
    let notice = {};
    console.log(statusCode);
    switch (statusCode) {
      case 404: {
        notice = {
          title: 'Page not found 🕵️',
          subtitle: 'What’s worse, a hilarious 404 page can’t be found either.'
        };
        break;
      }
      case 500: {
        notice = {
          title: 'Bear with me please 🐼',
          subtitle:
            'I’m currently carrying out some maintenance on this website. It will only take a minute.'
        };
        break;
      }
      default: {
        notice = {
          title: 'An error occured ⚠️',
          subtitle: 'Apologies, I’m not quite sure what went wrong.'
        };
      }
    }
    return (
      <Site site={site} title={notice.title}>
        <Main>
          <Header {...notice} />
          <article className="l-ctnr cf">
            <div className="l-w100">
              <Link href={site.domain} prefetch>
                <a>Return home →</a>
              </Link>
            </div>
          </article>
        </Main>
      </Site>
    );
  }
}
