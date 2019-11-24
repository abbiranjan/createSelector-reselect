import {createSelector } from 'reselect';

const appDataSelector = state => state.posts;
const dataSelector = state => state.posts.items;

//Here id represents the likes 

const smsSelector = createSelector(
    dataSelector,
    ite => ite.filter(d => d.title === 'SMS')
)
const smsAndLikeSelector = createSelector(
    smsSelector,
    item => item.filter(d=> d.id === 2)
)

const onlyLikeSelector = createSelector(
    dataSelector,
    data => data.filter(d => d.id <=6)
)

export {appDataSelector, dataSelector,smsSelector, smsAndLikeSelector, onlyLikeSelector};