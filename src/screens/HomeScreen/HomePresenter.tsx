import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loder';

import styles from './Home.module.css';

interface HomeProps {
    movieDetail : any ;
    loading : boolean;
    error : any;
}


const HomePresenter: React.FC<HomeProps> = ({
    movieDetail,
    loading,
    error
}) => {
    return loading? (
        <Loader></Loader>
    ) : (
        <div>홈</div>
    )
}


HomePresenter.propTypes ={
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}



export default HomePresenter;