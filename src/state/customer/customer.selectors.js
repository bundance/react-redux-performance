import { immLens } from '../../utils/immutable-utils/immlens';
import { compose, view } from 'ramda';

/******************************************* SELECTORS ***********************************************/
export const customerLens = immLens('customer');
export const customerInstancesLens = immLens('instances');

export const getInstances = view(compose(
    customerLens, 
    customerInstancesLens
));

