import React from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import '../../scss/base/MediaShare.scss';
import PropTypes from 'prop-types';

class MediaShare extends React.Component {
    render(){
        const {url, onClose} = this.props;

        return (
            <div className="media-share-wrapper">
                <FacebookShareButton url={url} className="facebook-share-button button" onShareWindowClose={onClose}>
                    <FacebookIcon
                        size={32}
                        round={true} />
                    <p>Facebook</p>
                </FacebookShareButton>
                <TwitterShareButton url={url} className="twitter-share-button button" onShareWindowClose={onClose}>
                    <TwitterIcon
                        size={32}
                        round={true} />
                    <p>Twitter</p>
                </TwitterShareButton>
                <LinkedinShareButton url={url} className="linkedin-share-button button" onShareWindowClose={onClose}>
                    <LinkedinIcon
                        size={32}
                        round={true} />
                    <p>Linkedin</p>
                </LinkedinShareButton>
            </div>
        )
    }
}

MediaShare.propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default MediaShare;