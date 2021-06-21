import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogCommentsProps = {
    cardIdFromPathname: number,
    data: GeneralTypes.CommentsItem,
    fakeData: Array<GeneralTypes.BlogListStandardPageItem>,
    inputFormFieldsArray: GeneralTypes.InputForm,
    history: History,
    location: Location,
    match: match,
    pathOfIdsToComment: Array<number>,
    triggerCommentReplyButtonVal: boolean,
    staticContext: undefined,
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    initInputForm: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    postReply: (id: number, info: PostInfo) => void,
    postReplyFakeData: (obj: GeneralTypes.BlogListStandardPageItem) => void,
    replyComment: () => void,
    setInputFiledValueAndCheckValidation: (obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string) => {obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string},
    triggerCommentReplyButton: () => {}

} 

export type PostInfo = {
    id: number | string,
    pathOfIds: Array<number>,
    comment: string,
    fullName: string,
    email: string,
    date: string,
    website: string
}
