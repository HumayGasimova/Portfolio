/**
 * Libraries
 */

 import * as React from 'react';

 import {
     connect
 } from 'react-redux';
 
 import {
     bindActionCreators
 } from 'redux';
 
 import {
     withRouter,
     RouteComponentProps
 } from 'react-router-dom';

 
 /**
  * Styles
  */
 
 import './example.scss';
 
 /**
  * Actions
  */
 
 import * as Actions from '../../actions';
 
 /**
  * Selectors
  */
 
 import * as Selectors from '../../reducers/selectors';
 
 
 /**
  * MenuFullScreen component definition and export
  */
 interface Props extends RouteComponentProps<any> {
    page: string;
 }

 export const Example: React.FC<Props>= (props) => {
 
     /**
      * Methods
      */
 
     React.useEffect(() => {
         // Init menu items
 
     }, []);
     
 
     /**
      * Markup
      */
 
     return(
         <div className="example">
           {props.page}
         </div>
     );
 }
 
//  export default connect (
//     (state) => {
//         return {
//             menuFullscreenItems: Selectors.getMenuFullScreenItemsState(state)
//         };
//     },
//     (dispatch) => {
//         return {
//             initMenuFullscreenItems: bindActionCreators(Actions.initMenuFullscreenItems, dispatch),
//             setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
//             setIsHoveringMenuFullscreenItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenItem, dispatch),
//             setActivityOfMenuFullscreenItem: bindActionCreators(Actions.setActivityOfMenuFullscreenItem, dispatch),
//             setIsHoveringMenuFullscreenOptionItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenOptionItem, dispatch),
//             setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
//             unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
//         };
//     }
// )(withRouter<Props>(Example));

export default withRouter(
    connect<any, any>(
    (state) => {
        return {
            menuFullscreenItems: Selectors.getMenuFullScreenItemsState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuFullscreenItems: bindActionCreators(Actions.initMenuFullscreenItems, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setIsHoveringMenuFullscreenItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenItem, dispatch),
            setActivityOfMenuFullscreenItem: bindActionCreators(Actions.setActivityOfMenuFullscreenItem, dispatch),
            setIsHoveringMenuFullscreenOptionItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenOptionItem, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
        };
    }
    )(Example) as any
);
  